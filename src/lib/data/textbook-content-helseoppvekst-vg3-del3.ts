/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Helsearbeiderfaget VG3 - Del 3: Sykepleie, legemidler og akuttmedisin
 *
 * Kapittel 3.1-3.7
 * Dekker LK20 kompetansemål for helsearbeiderfaget VG3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3: Sykepleie, legemidler og akuttmedisin
// ============================================================================

// ----------------------------------------------------------------------------
// 3.1 Grunnleggende sykepleie ved kronisk sykdom
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_3_1: TextbookChapter = {
  id: 'hov3-3-1',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '3.1',
  title: 'Grunnleggende sykepleie ved kronisk sykdom',
  description: 'Sykepleie til pasienter med langvarige sykdommer, mestring og livskvalitet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utføre grunnleggende sykepleie til personer med kronisk sykdom',
    'veilede brukere i mestring av langvarig sykdom i hverdagen',
    'observere og rapportere endringer i helsetilstand hos kronisk syke',
  ],
  keyTerms: [
    { term: 'Kronisk sykdom', definition: 'Langvarig sykdom som ikke kan helbredes, men som kan behandles og kontrolleres over tid.' },
    { term: 'Egenomsorg', definition: 'Brukerens evne til å ivareta egne grunnleggende behov og håndtere sin helsetilstand i hverdagen.' },
    { term: 'Sykdomsforverring', definition: 'En forverring (eksaserbasjon) av en kronisk sykdom, som kan kreve endret behandling eller innleggelse.' },
    { term: 'Adherens', definition: 'I hvilken grad en pasient følger avtalt behandlingsplan, inkludert medisinbruk, kosthold og aktivitet.' },
  ],
  content: [
    {
      id: 'hov3-3-1-intro',
      type: 'text',
      content: `## Grunnleggende sykepleie ved kronisk sykdom

Kroniske sykdommer som diabetes, KOLS, hjertesvikt og revmatiske lidelser er blant de vanligste helseutfordringene i Norge. Som helsefagarbeider møter du brukere med kronisk sykdom daglig, enten i hjemmetjenesten, på sykehjem eller i sykehus.

Kronisk sykdom kjennetegnes av:

- **Lang varighet** - sykdommen varer i måneder, år eller livet ut
- **Varierende forløp** - gode og dårlige perioder veksler
- **Behov for tilpasning** - brukeren må leve med sykdommen i hverdagen
- **Sammensatte behov** - ofte flere sykdommer samtidig (multimorbiditet)

Din rolle er å støtte brukeren i å mestre hverdagen, observere endringer, og bidra til at behandlingsplanen følges. God sykepleie til kronisk syke handler like mye om livskvalitet som om medisinsk behandling.`,
    },
    {
      id: 'hov3-3-1-def-1',
      type: 'definition',
      title: 'Sykepleie ved kronisk sykdom',
      content: `**Grunnleggende sykepleie ved kronisk sykdom** innebærer å ivareta brukerens fysiske, psykiske og sosiale behov over tid.

**Sentrale oppgaver:**
- Observere vitale tegn og symptomer på forverring
- Hjelpe med medisinhåndtering og kontrollere etterlevelse
- Støtte egenomsorg og mestring i hverdagen
- Forebygge komplikasjoner gjennom tidlig intervensjon
- Ivareta ernæring, aktivitet og hvile
- Dokumentere observasjoner og tiltak

**Vanlige kroniske sykdommer du møter:**
- Diabetes type 1 og 2
- KOLS og astma
- Hjertesvikt og koronarsykdom
- Revmatiske sykdommer
- Nyresvikt
- Nevrologiske sykdommer (MS, Parkinson)`,
    },
    {
      id: 'hov3-3-1-def-2',
      type: 'definition',
      title: 'Egenomsorg og mestring',
      content: `**Egenomsorg** handler om brukerens evne til å ta vare på seg selv og håndtere sin sykdom.

**Dorothea Orems egenomsorgsteori** beskriver tre typer egenomsorgsbehov:

**1. Universelle behov** - grunnleggende behov alle mennesker har (luft, vann, mat, hvile, sosial kontakt)

**2. Utviklingsbehov** - behov knyttet til livsfase og utvikling

**3. Helsesviktrelaterte behov** - behov som oppstår på grunn av sykdom eller behandling

Når brukeren ikke klarer å dekke sine egne behov, oppstår det en **egenomsorgssvikt**. Da trer helsefagarbeideren inn med:
- **Helt kompenserende sykepleie** - du utfører alt for brukeren
- **Delvis kompenserende sykepleie** - du hjelper der brukeren ikke klarer selv
- **Støttende/undervisende sykepleie** - du veileder brukeren til å mestre selv`,
    },
    {
      id: 'hov3-3-1-text-1',
      type: 'text',
      content: `### Observasjon og rapportering

Systematisk observasjon er avgjørende for å fange opp forverring tidlig.

**Hva du bør observere hos kronisk syke:**
- Endringer i allmenntilstand, appetitt og vekt
- Endringer i pust, hoste eller slim
- Ødemer (hevelser) i ben, ankler eller mage
- Endret bevissthetsnivå eller forvirring
- Hudforandringer, sår som ikke gror
- Smerter - lokalisasjon, intensitet, varighet
- Psykisk helse - tegn til depresjon eller angst

Rapporter alltid endringer til sykepleier eller lege. Bruk ISBAR-metoden for strukturert kommunikasjon.`,
    },
    {
      id: 'hov3-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

Grunnleggende sykepleie ved kronisk sykdom krever helhetlig tenkning:

- **Kroniske sykdommer** er langvarige og krever tilpasning i hverdagen
- **Egenomsorg** er sentralt - din rolle er å støtte brukerens mestring
- **Observasjon** av symptomer og endringer er en nøkkeloppgave
- **Dokumentasjon** og rapportering sikrer forsvarlig oppfølging
- **Livskvalitet** er like viktig som medisinsk behandling for kronisk syke`,
    },
  ],
  exercises: [
    {
      id: 'hov3-3-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner en kronisk sykdom?',
      options: [
        { id: 'a', text: 'En sykdom som varer kort tid og kan helbredes helt', isCorrect: false },
        { id: 'b', text: 'En langvarig sykdom som ikke kan helbredes, men som kan behandles og kontrolleres', isCorrect: true },
        { id: 'c', text: 'En sykdom som bare rammer eldre mennesker', isCorrect: false },
        { id: 'd', text: 'En sykdom som alltid krever sykehusinnleggelse', isCorrect: false },
      ],
      solution: 'Kronisk sykdom kjennetegnes av lang varighet, varierende forløp med gode og dårlige perioder, og at den ikke kan helbredes helt. Sykdommen kan imidlertid behandles og kontrolleres, og brukeren kan leve et godt liv med riktig oppfølging og egenomsorg.',
    },
    {
      id: 'hov3-3-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Ifølge Dorothea Orems teori, hva innebærer delvis kompenserende sykepleie?',
      options: [
        { id: 'a', text: 'Helsefagarbeideren utfører alle oppgaver for brukeren', isCorrect: false },
        { id: 'b', text: 'Helsefagarbeideren hjelper der brukeren ikke klarer selv, mens brukeren gjør det han/hun mestrer', isCorrect: true },
        { id: 'c', text: 'Brukeren klarer alt selv og trenger bare veiledning', isCorrect: false },
        { id: 'd', text: 'Pårørende tar over all omsorg for brukeren', isCorrect: false },
      ],
      solution: 'Delvis kompenserende sykepleie innebærer at helsefagarbeideren og brukeren samarbeider. Brukeren gjør det han/hun mestrer, mens helsefagarbeideren hjelper med det brukeren ikke klarer. Dette skiller seg fra helt kompenserende sykepleie (du gjør alt) og støttende/undervisende sykepleie (brukeren klarer selv med veiledning).',
    },
    {
      id: 'hov3-3-1-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv minst fire observasjoner du bør gjøre hos en bruker med kronisk hjertesvikt, og forklar hvorfor disse observasjonene er viktige.',
      solution: 'Viktige observasjoner ved hjertesvikt: 1) Ødemer i ben og ankler - kan tyde på væskeopphopning fordi hjertet ikke pumper effektivt nok. 2) Pustebesvær og hoste - spesielt i liggende stilling, kan tyde på lungeødem. 3) Vektøkning - rask vektøkning (1-2 kg på få dager) kan skyldes væskeretensjon og er et tidlig tegn på forverring. 4) Tretthet og nedsatt aktivitetsnivå - kan indikere at hjertet ikke klarer å forsyne kroppen med nok oksygen. 5) Endret urinmengde - redusert urinproduksjon kan tyde på nedsatt nyregjennomblødning.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-3-1-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva adherens betyr, og gi to eksempler på tiltak som kan bedre adherens hos en bruker med kronisk sykdom.',
      solution: 'Adherens handler om i hvilken grad brukeren følger avtalt behandlingsplan, inkludert medisinbruk, kosthold og aktivitet. Tiltak for å bedre adherens: 1) Bruk dosett eller medisindispenser - gjør det enklere å huske å ta medisinene til rett tid og i rett dose. 2) Tilpass informasjonen til brukerens nivå og bruk teach-back for å sikre forståelse - brukere som forstår hvorfor de tar medisinen, er mer tilbøyelige til å følge behandlingsplanen. Andre tiltak kan være å forenkle medisinregimet, involvere pårørende, og ha faste oppfølgingssamtaler.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ----------------------------------------------------------------------------
// 3.2 Grunnleggende sykepleie ved akutt sykdom
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_3_2: TextbookChapter = {
  id: 'hov3-3-2',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '3.2',
  title: 'Grunnleggende sykepleie ved akutt sykdom',
  description: 'Sykepleie til pasienter med akutte tilstander, observasjon og rask respons.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utføre grunnleggende sykepleie til personer med akutt sykdom',
    'observere og gjenkjenne tegn på akutt forverring av helsetilstand',
    'handle raskt og forsvarlig ved akutte situasjoner',
  ],
  keyTerms: [
    { term: 'Akutt sykdom', definition: 'Sykdom eller tilstand som oppstår plutselig og krever rask medisinsk vurdering og behandling.' },
    { term: 'NEWS2', definition: 'National Early Warning Score - et standardisert skåringsverktøy for å vurdere alvorlighetsgrad og risiko for forverring hos akutt syke pasienter.' },
    { term: 'Vitale parametere', definition: 'Målbare verdier som puls, blodtrykk, respirasjonsfrekvens, oksygenmetning, temperatur og bevissthetsnivå.' },
    { term: 'Sjokk', definition: 'En livstruende tilstand der kroppens organer ikke får tilstrekkelig oksygentilførsel på grunn av sviktende sirkulasjon.' },
    { term: 'ISBAR', definition: 'Kommunikasjonsverktøy for strukturert overlevering: Identifikasjon, Situasjon, Bakgrunn, Aktuell vurdering, Råd/anbefaling.' },
  ],
  content: [
    {
      id: 'hov3-3-2-intro',
      type: 'text',
      content: `## Grunnleggende sykepleie ved akutt sykdom

Akutt sykdom skiller seg fra kronisk sykdom ved at den oppstår plutselig og kan utvikle seg raskt. Som helsefagarbeider må du kunne gjenkjenne tegn på akutt forverring og handle riktig.

Akutte situasjoner du kan møte:

- **Infeksjoner** - lungebetennelse, urinveisinfeksjon, sepsis
- **Hjerte-karlidelser** - hjerteinfarkt, hjerneslag, lungeemboli
- **Forverring av kronisk sykdom** - akutt KOLS-forverring, diabetisk ketoacidose
- **Akutte magesmerter** - blindtarmbetennelse, gallestein, tarmobstruksjon
- **Fall og skader** - brudd, hodeskader

Din viktigste oppgave er å observere, reagere og kommunisere. Du trenger ikke stille diagnose, men du må kjenne igjen faresignaler og varsle sykepleier eller lege umiddelbart.`,
    },
    {
      id: 'hov3-3-2-def-1',
      type: 'definition',
      title: 'Vitale parametere og NEWS2',
      content: `**Vitale parametere** er målbare verdier som gir informasjon om kroppens grunnleggende funksjoner:

| Parameter | Normalverdier (voksen) |
|-----------|----------------------|
| Puls | 60-100 slag/min |
| Blodtrykk (systolisk) | 110-140 mmHg |
| Respirasjonsfrekvens | 12-20 per minutt |
| Oksygenmetning (SpO2) | 96-100 % |
| Temperatur | 36,1-38,0 °C |
| Bevissthetsnivå | Våken og orientert |

**NEWS2** (National Early Warning Score) er et skåringsverktøy der hvert avvik fra normalverdier gir poeng. Jo høyere samlet skår, desto mer alvorlig er situasjonen:
- **0-4 poeng**: Lav risiko - fortsett vanlig observasjon
- **5-6 poeng**: Moderat risiko - øk observasjonsfrekvensen, varsle sykepleier
- **7+ poeng**: Høy risiko - umiddelbar varsling av lege`,
    },
    {
      id: 'hov3-3-2-def-2',
      type: 'definition',
      title: 'Tegn på akutt forverring',
      content: `**Tidlige varseltegn** du må kjenne igjen:

**Respirasjon:**
- Økt pustefrekvens (>20/min) eller tungpustethet
- Bruk av hjelpemuskulatur ved pust
- Fallende oksygenmetning (<95 %)

**Sirkulasjon:**
- Rask eller uregelmessig puls
- Lavt blodtrykk, svimmelhet
- Kald, klam og blek hud
- Forsinket kapillærfylning (>2 sekunder)

**Bevissthet:**
- Forvirring, uro eller desorientering
- Nedsatt våkenhet, vanskelig å vekke
- Plutselig endring i atferd

**Generelt:**
- Kraftige smerter som oppstår plutselig
- Feber over 38,5 °C med frysninger
- Kvalme, oppkast eller blodig avføring

Ved slike tegn: mål vitale parametere, gi ISBAR-rapport og følg institusjonens prosedyrer.`,
    },
    {
      id: 'hov3-3-2-text-1',
      type: 'text',
      content: `### ISBAR - strukturert kommunikasjon

Når du varsler om akutt forverring, bruk ISBAR:

- **I - Identifikasjon:** Hvem er du, hvem ringer du om, hvor er pasienten
- **S - Situasjon:** Hva er problemet nå, hva har du observert
- **B - Bakgrunn:** Relevante diagnoser, medisiner, allergier
- **A - Aktuell vurdering:** Vitale parametere, NEWS2-skår, din vurdering
- **R - Råd:** Hva trenger du hjelp til, hva forventer du skal skje

God ISBAR-kommunikasjon kan spare livsviktige minutter i akutte situasjoner.`,
    },
    {
      id: 'hov3-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

Sykepleie ved akutt sykdom krever årvåkenhet og handlekraft:

- **Akutt sykdom** oppstår plutselig og kan utvikle seg raskt
- **Vitale parametere** gir objektive mål på pasientens tilstand
- **NEWS2** hjelper deg å vurdere alvorlighetsgrad systematisk
- **Tidlige varseltegn** må gjenkjennes raskt for å forhindre forverring
- **ISBAR** sikrer strukturert og effektiv kommunikasjon ved akutte hendelser`,
    },
  ],
  exercises: [
    {
      id: 'hov3-3-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er normal respirasjonsfrekvens hos en voksen person?',
      options: [
        { id: 'a', text: '6-10 per minutt', isCorrect: false },
        { id: 'b', text: '12-20 per minutt', isCorrect: true },
        { id: 'c', text: '25-35 per minutt', isCorrect: false },
        { id: 'd', text: '40-50 per minutt', isCorrect: false },
      ],
      solution: 'Normal respirasjonsfrekvens hos en voksen er 12-20 per minutt. En frekvens under 12 (bradypné) eller over 20 (takypné) er avvikende og bør registreres og rapporteres. Økt respirasjonsfrekvens er ofte et tidlig tegn på forverring.',
    },
    {
      id: 'hov3-3-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En pasient har NEWS2-skår på 7. Hva bør du gjøre?',
      options: [
        { id: 'a', text: 'Fortsette vanlig observasjon og dokumentere i journal', isCorrect: false },
        { id: 'b', text: 'Øke observasjonsfrekvensen og varsle sykepleier', isCorrect: false },
        { id: 'c', text: 'Varsle lege umiddelbart og gi ISBAR-rapport', isCorrect: true },
        { id: 'd', text: 'Vente til neste vaktskifte og informere da', isCorrect: false },
      ],
      solution: 'En NEWS2-skår på 7 eller høyere indikerer høy risiko for alvorlig forverring. Dette krever umiddelbar varsling av lege. Bruk ISBAR for å gi en strukturert rapport. Vent aldri med å varsle ved høy NEWS2-skår - tidlig intervensjon kan være livreddende.',
    },
    {
      id: 'hov3-3-2-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi en ISBAR-rapport for følgende situasjon: Du er på nattevakt og finner beboer Olav (82) i sengen. Han puster raskt, er forvirret, har temperatur 39,2 °C og puls 110. Han har KOLS og bruker inhalatorer fast.',
      solution: 'I - Identifikasjon: «Hei, det er [ditt navn], helsefagarbeider på avdeling 3. Jeg ringer angående Olav Hansen, rom 12.» S - Situasjon: «Olav er blitt akutt dårligere i løpet av natten. Han puster raskt, er forvirret og har høy feber.» B - Bakgrunn: «Olav er 82 år og har KOLS. Han bruker Spiriva og Ventoline inhalatorer fast. Ingen kjente allergier.» A - Aktuell vurdering: «Temperatur 39,2, puls 110, respirasjonsfrekvens 28, han er forvirret og kjenner meg ikke igjen. Jeg er bekymret for at dette kan være en alvorlig infeksjon.» R - Råd: «Jeg trenger at sykepleier eller lege kommer og vurderer ham. Bør vi måle SpO2 og ta blodprøver?»',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-3-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke av disse er tidlige tegn på sjokk?',
      options: [
        { id: 'a', text: 'Rask puls, lavt blodtrykk, kald og klam hud', isCorrect: true },
        { id: 'b', text: 'Langsom puls, høyt blodtrykk, rød og varm hud', isCorrect: false },
        { id: 'c', text: 'Normal puls, normal temperatur og godt humør', isCorrect: false },
        { id: 'd', text: 'Høy feber, kraftig hoste og slimdannelse', isCorrect: false },
      ],
      solution: 'Tidlige tegn på sjokk inkluderer rask puls (takykardi), lavt blodtrykk (hypotensjon), og kald, klam og blek hud. Kroppen forsøker å kompensere for sviktende sirkulasjon ved å øke hjertefrekvensen og trekke blod fra hud og perifere områder til vitale organer. Andre tegn er uro, forvirring, tørste og redusert urinproduksjon.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 3.3 Smertebehandling og symptomlindring
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_3_3: TextbookChapter = {
  id: 'hov3-3-3',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '3.3',
  title: 'Smertebehandling og symptomlindring',
  description: 'Smertevurdering, medikamentell og ikke-medikamentell smertebehandling.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kartlegge og vurdere smerte hos brukere ved hjelp av anerkjente verktøy',
    'anvende ikke-medikamentelle metoder for symptomlindring',
    'bidra i oppfølging av medikamentell smertebehandling',
  ],
  keyTerms: [
    { term: 'NRS', definition: 'Numerisk rangeringsskala - smerteskala fra 0 (ingen smerte) til 10 (verst tenkelige smerte).' },
    { term: 'Total smerte', definition: 'Et helhetlig smertebegrep som inkluderer fysisk, psykisk, sosial og eksistensiell/åndelig smerte.' },
    { term: 'Smertetrappen', definition: 'WHOs modell for trinnvis opptrapping av smertebehandling fra milde (paracetamol) til sterke smertestillende (opioider).' },
    { term: 'Gjennombruddssmerter', definition: 'Forbigående smertetopper som oppstår til tross for fast smertebehandling.' },
  ],
  content: [
    {
      id: 'hov3-3-3-intro',
      type: 'text',
      content: `## Smertebehandling og symptomlindring

Smerte er en av de vanligste årsakene til at mennesker søker helsehjelp. God smertebehandling er en grunnleggende rettighet for alle pasienter, og som helsefagarbeider har du en viktig rolle i å kartlegge, rapportere og lindre smerte.

Smerte er alltid **subjektiv** - det er pasienten som kjenner smerten, og pasientens egen vurdering skal alltid legges til grunn. Den internasjonale smerteforeningen (IASP) definerer smerte som:

> *«En ubehagelig sensorisk og emosjonell opplevelse forbundet med, eller lignende den som er forbundet med, faktisk eller potensiell vevsskade.»*

Det betyr at smerte ikke bare er fysisk - den påvirker hele mennesket. Begrepet **total smerte** beskriver hvordan fysisk, psykisk, sosial og åndelig smerte henger sammen og forsterker hverandre.`,
    },
    {
      id: 'hov3-3-3-def-1',
      type: 'definition',
      title: 'Smertevurdering og kartlegging',
      content: `**Smertekartlegging** er nødvendig for å gi riktig behandling. Du bør kartlegge:

- **Lokalisasjon** - hvor sitter smerten?
- **Intensitet** - hvor sterk er smerten? (bruk NRS 0-10)
- **Karakter** - er den verkende, stikkende, brennende, trykkende?
- **Tidsmønster** - når oppstår den, hvor lenge varer den?
- **Forverrende/lindrende faktorer** - hva gjør den verre/bedre?

**Smertevurderingsverktøy:**
- **NRS** (Numerisk rangeringsskala) - pasient angir tall fra 0-10
- **VAS** (Visuell analog skala) - pasient peker på en linje
- **Ansiktsskala** - for barn eller personer med kommunikasjonsvansker
- **MOBID-2** - for personer med demens som ikke kan uttrykke smerte verbalt
- **Abbey Pain Scale** - observasjonsbasert skala for nonverbale pasienter`,
    },
    {
      id: 'hov3-3-3-def-2',
      type: 'definition',
      title: 'WHOs smertetrapp',
      content: `**WHOs smertetrapp** gir en trinnvis tilnærming til smertebehandling:

**Trinn 1 - Mild smerte (NRS 1-3):**
- Paracetamol og/eller NSAIDs (ibuprofen, naproxen)
- Ikke-medikamentelle tiltak

**Trinn 2 - Moderat smerte (NRS 4-6):**
- Svake opioider (kodein, tramadol)
- Kombinert med trinn 1-medikamenter
- Ikke-medikamentelle tiltak

**Trinn 3 - Sterk smerte (NRS 7-10):**
- Sterke opioider (morfin, oksykodon, fentanyl)
- Kombinert med trinn 1-medikamenter
- Ikke-medikamentelle tiltak

**Viktige prinsipper:**
- Start på lavest nødvendige trinn
- Fast dosering er bedre enn «ved behov» ved vedvarende smerte
- Gjennombruddsdoser skal være tilgjengelig
- Vurder effekt og bivirkninger regelmessig`,
    },
    {
      id: 'hov3-3-3-text-1',
      type: 'text',
      content: `### Ikke-medikamentelle metoder

Ikke-medikamentelle tiltak kan brukes alene eller sammen med medisiner:

- **Stillingsendring** - riktig leie kan lindre smerter betydelig
- **Varme og kulde** - varmepakning ved muskelsmerter, ispose ved hevelser
- **Massasje** - lett massasje kan redusere muskelspenninger
- **Avledning** - musikk, samtale, aktiviteter som tar oppmerksomheten bort fra smerten
- **Avspenning** - pusteøvelser, meditasjon, guidet visualisering
- **Fysisk aktivitet** - tilpasset bevegelse kan redusere kroniske smerter
- **TENS** - transkutan elektrisk nervestimulering

Disse metodene er spesielt viktige når medikamenter alene ikke gir tilstrekkelig lindring, eller når pasienten ønsker å redusere medisinbruk.`,
    },
    {
      id: 'hov3-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

Smertebehandling er en sentral del av god sykepleie:

- **Smerte er subjektiv** - pasientens egen vurdering skal alltid respekteres
- **Kartlegging** med verktøy som NRS og MOBID-2 gir grunnlag for riktig behandling
- **WHOs smertetrapp** gir en systematisk tilnærming til medikamentell behandling
- **Ikke-medikamentelle metoder** er viktige supplement til medisiner
- **Total smerte** minner oss om at smerte har fysiske, psykiske, sosiale og åndelige dimensjoner`,
    },
  ],
  exercises: [
    {
      id: 'hov3-3-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva måler NRS (Numerisk rangeringsskala)?',
      options: [
        { id: 'a', text: 'Pasientens blodtrykk på en skala fra 0 til 10', isCorrect: false },
        { id: 'b', text: 'Pasientens smerteintensitet på en skala fra 0 (ingen smerte) til 10 (verst tenkelige smerte)', isCorrect: true },
        { id: 'c', text: 'Antall smertestillende tabletter pasienten trenger per dag', isCorrect: false },
        { id: 'd', text: 'Pasientens bevegelsesevne på en skala fra 0 til 10', isCorrect: false },
      ],
      solution: 'NRS (Numerisk rangeringsskala) er et smertevurderingsverktøy der pasienten oppgir sin smerteintensitet på en skala fra 0 til 10, der 0 betyr ingen smerte og 10 betyr verst tenkelige smerte. Det er et enkelt og mye brukt verktøy i helsetjenesten.',
    },
    {
      id: 'hov3-3-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket smertevurderingsverktøy er spesielt utviklet for personer med demens?',
      options: [
        { id: 'a', text: 'NRS (Numerisk rangeringsskala)', isCorrect: false },
        { id: 'b', text: 'VAS (Visuell analog skala)', isCorrect: false },
        { id: 'c', text: 'MOBID-2 (Mobilisation-Observation-Behaviour-Intensity-Dementia)', isCorrect: true },
        { id: 'd', text: 'NEWS2 (National Early Warning Score)', isCorrect: false },
      ],
      solution: 'MOBID-2 er et observasjonsbasert smertevurderingsverktøy spesielt utviklet for personer med demens som ikke kan uttrykke smerte verbalt. Helsepersonell observerer smerteatferd (grimaser, stønning, uro) under mobilisering og daglige aktiviteter, og skårer smerteatferden systematisk.',
    },
    {
      id: 'hov3-3-3-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar begrepet «total smerte» og gi eksempler på de fire dimensjonene av smerte.',
      solution: 'Total smerte er et helhetlig smertebegrep som viser at smerte ikke bare er fysisk. De fire dimensjonene er: 1) Fysisk smerte - selve den kroppslige smerten, for eksempel smerter fra en kreftsvulst eller artrose. 2) Psykisk smerte - angst, depresjon, frykt for fremtiden, søvnløshet. 3) Sosial smerte - ensomhet, tap av roller og funksjoner, bekymring for pårørende, økonomiske problemer. 4) Åndelig/eksistensiell smerte - spørsmål om mening, skyld, tap av verdighet, frykt for døden. Alle dimensjonene påvirker hverandre - for eksempel kan angst forsterke fysisk smerte, og ubehandlet fysisk smerte kan føre til depresjon.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-3-3-ex-4',
      type: 'classic',
      difficulty: 'lett',
      task: 'Nevn fire ikke-medikamentelle metoder for smertelindring og forklar kort hvordan de virker.',
      solution: 'Fire ikke-medikamentelle metoder: 1) Varme og kulde - varmepakning øker blodsirkulasjonen og løsner stive muskler, ispose demper hevelse og bedøver lokalt. 2) Stillingsendring - avlaster smertefulle områder, god pute- og leieplassering kan redusere trykk og spenning. 3) Avledning - musikk, samtale eller aktiviteter tar oppmerksomheten bort fra smerten, noe som kan redusere smerteopplevelsen. 4) Avspenning og pusteøvelser - aktiverer det parasympatiske nervesystemet, reduserer muskelspenninger og stress, som igjen kan senke smerteintensiteten.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ----------------------------------------------------------------------------
// 3.4 Legemiddelhåndtering
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_3_4: TextbookChapter = {
  id: 'hov3-3-4',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '3.4',
  title: 'Legemiddelhåndtering',
  description: 'Forskrift om legemiddelhåndtering, de syv R-ene, legemiddelformer og administrasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'håndtere legemidler forsvarlig i tråd med gjeldende forskrift og prosedyrer',
    'anvende de syv R-ene ved legemiddeladministrering',
    'observere og rapportere virkning og bivirkninger av legemidler',
  ],
  keyTerms: [
    { term: 'De syv R-ene', definition: 'Sjekkpunkter ved legemiddelhåndtering: Riktig pasient, riktig legemiddel, riktig dose, riktig administrasjonsform, riktig tid, riktig dokumentasjon, riktig observasjon.' },
    { term: 'Dosett', definition: 'En medisindosebeholder med rom for ulike tidspunkter og ukedager, som sikrer at pasienten får riktige medisiner til rett tid.' },
    { term: 'Multidose', definition: 'Maskinelt pakkede legemiddeldoser i poser merket med pasientnavn, dato, klokkeslett og innhold.' },
    { term: 'Legemiddelinteraksjon', definition: 'Når to eller flere legemidler påvirker hverandres virkning, enten ved å forsterke eller svekke effekten.' },
  ],
  content: [
    {
      id: 'hov3-3-4-intro',
      type: 'text',
      content: `## Legemiddelhåndtering

Legemiddelhåndtering er en av de mest ansvarsfulle oppgavene du utfører som helsefagarbeider. Feil i legemiddelhåndteringen kan ha alvorlige konsekvenser for pasienten, inkludert forgiftning, manglende behandlingseffekt eller dødsfall.

Forskrift om legemiddelhåndtering for virksomheter og helsepersonell (2008) regulerer hvordan legemidler skal håndteres. Som helsefagarbeider kan du:

- **Dele ut ferdig istandgjorte legemidler** (fra dosett eller multidose)
- **Gi legemidler** til pasienten og påse at de tas riktig
- **Observere** virkning og bivirkninger
- **Dokumentere** at legemidlet er gitt

Du kan **ikke** selv gjøre i stand (klargjøre) legemidler med mindre du har fått særskilt opplæring og delegert myndighet fra virksomheten.`,
    },
    {
      id: 'hov3-3-4-def-1',
      type: 'definition',
      title: 'De syv R-ene',
      content: `**De syv R-ene** er sjekkpunkter som alltid skal følges ved legemiddelhåndtering:

**1. Riktig pasient** - kontroller at legemidlet er til rett person (bruk navn og fødselsdato)

**2. Riktig legemiddel** - kontroller at det er riktig medisin som er forskrevet

**3. Riktig dose** - kontroller at dosen stemmer med det legen har ordinert

**4. Riktig administrasjonsform** - tabletter, mikstur, injeksjon, plaster, inhalasjon osv.

**5. Riktig tid** - gi legemidlet til rett tidspunkt (morgen, middag, kveld, natt)

**6. Riktig dokumentasjon** - dokumenter at legemidlet er gitt, eventuelt at det er nektet eller kastet opp

**7. Riktig observasjon** - observer pasienten for ønsket virkning og mulige bivirkninger

Disse R-ene er ditt viktigste verktøy for å unngå legemiddelfeil.`,
    },
    {
      id: 'hov3-3-4-def-2',
      type: 'definition',
      title: 'Legemiddelformer og administrasjonsmåter',
      content: `Legemidler finnes i mange former:

**Orale legemidler (gjennom munnen):**
- Tabletter og kapsler - svelges hele med vann
- Depottabletter - frigjør virkestoff over tid, skal IKKE knuses
- Brusetabletter - løses i vann
- Mikstur - flytende form, doseres med målebeger

**Legemidler til hud og slimhinner:**
- Salver, kremer og geler - smøres på hud
- Plaster - avgir virkestoff gjennom huden over tid
- Stikkpiller (suppositorier) - settes i endetarmen
- Øyedråper og øresalve

**Legemidler til luftveiene:**
- Inhalatorer - sprayes inn i luftveiene
- Forstøverapparat (nebulisator)

**Injeksjoner (krever delegering og opplæring):**
- Subkutan (under huden) - f.eks. insulin
- Intramuskulær (i muskelen)`,
    },
    {
      id: 'hov3-3-4-text-1',
      type: 'text',
      content: `### Bivirkninger og observasjon

Etter at legemidlet er gitt, skal du observere pasienten for:

**Vanlige bivirkninger du bør kjenne til:**
- **Kvalme og oppkast** - vanlig ved mange legemidler, spesielt antibiotika og opioider
- **Svimmelhet og fall** - spesielt ved blodtrykksmedisiner og beroligende midler
- **Forstoppelse** - svært vanlig ved opioidbruk
- **Allergiske reaksjoner** - utslett, kløe, hevelse, i sjeldne tilfeller anafylaksi
- **Blødningstendens** - ved bruk av blodfortynnende midler

Rapporter alltid uventede reaksjoner til sykepleier eller lege. Dokumenter dine observasjoner i pasientjournalen.`,
    },
    {
      id: 'hov3-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Trygg legemiddelhåndtering krever nøyaktighet og kunnskap:

- **Forskriften** regulerer hvem som kan gjøre hva med legemidler
- **De syv R-ene** er sjekkpunkter som alltid skal følges
- **Legemiddelformer** varierer og krever ulik håndtering
- **Observasjon** av virkning og bivirkninger er en nøkkeloppgave
- **Dokumentasjon** av all legemiddeladministrering er lovpålagt`,
    },
  ],
  exercises: [
    {
      id: 'hov3-3-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er de syv R-ene ved legemiddelhåndtering?',
      options: [
        { id: 'a', text: 'Riktig pasient, legemiddel, dose, administrasjonsform, tid, dokumentasjon og observasjon', isCorrect: true },
        { id: 'b', text: 'Riktig lege, sykepleier, resept, apotek, pris, mengde og oppbevaring', isCorrect: false },
        { id: 'c', text: 'Riktig diagnose, behandling, varighet, kontroll, rapport, evaluering og avslutning', isCorrect: false },
        { id: 'd', text: 'Riktig håndvask, hansker, munnbind, frakk, briller, sko og hette', isCorrect: false },
      ],
      solution: 'De syv R-ene er: Riktig pasient, riktig legemiddel, riktig dose, riktig administrasjonsform, riktig tid, riktig dokumentasjon og riktig observasjon. Disse sjekkpunktene skal alltid følges ved enhver legemiddeladministrering for å forebygge legemiddelfeil.',
    },
    {
      id: 'hov3-3-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor skal depottabletter ikke knuses?',
      options: [
        { id: 'a', text: 'Fordi de smaker vondt uten overtrekket', isCorrect: false },
        { id: 'b', text: 'Fordi de er designet til å frigjøre virkestoff langsomt over tid, og knusing gir hele dosen på en gang', isCorrect: true },
        { id: 'c', text: 'Fordi det er vanskelig å måle riktig dose etter knusing', isCorrect: false },
        { id: 'd', text: 'Fordi knuste tabletter ikke kan absorberes i magen', isCorrect: false },
      ],
      solution: 'Depottabletter har en spesiell coating eller matrise som gjør at virkestoffet frigjøres langsomt over mange timer. Hvis tabletten knuses, ødelegges denne mekanismen og hele dosen frigjøres på en gang. Dette kan gi overdosering med alvorlige bivirkninger og er spesielt farlig ved sterke smertestillende (opioider) eller hjertemedisiner.',
    },
    {
      id: 'hov3-3-4-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Du skal dele ut morgenmedisiner fra multidose til en beboer på sykehjem. Beskriv steg for steg hvordan du gjennomfører dette forsvarlig.',
      solution: 'Steg for steg: 1) Vask hendene grundig. 2) Hent multidoseposen og kontroller at den er til riktig pasient (sjekk navn og fødselsdato). 3) Kontroller at tidspunktet stemmer (morgen). 4) Sjekk at posen er uåpnet og at innholdet ser normalt ut. 5) Gå til beboeren og bekreft identiteten (spør om navn eller sjekk armbånd). 6) Gi beboeren tablettene med et glass vann og påse at de svelges. 7) Observer om beboeren har problemer med å svelge eller reagerer uventet. 8) Dokumenter i medisinmodulen at medisinene er gitt, tidspunkt og eventuelle observasjoner. 9) Dersom beboeren nekter eller kaster opp, dokumenter dette og varsle sykepleier.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-3-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er multidose?',
      options: [
        { id: 'a', text: 'En medisin som inneholder flere virkestoffer i samme tablett', isCorrect: false },
        { id: 'b', text: 'Maskinelt pakkede legemiddeldoser i poser merket med pasientnavn, dato, tidspunkt og innhold', isCorrect: true },
        { id: 'c', text: 'En sprøyte som inneholder flere medisiner blandet sammen', isCorrect: false },
        { id: 'd', text: 'En stor boks med medisiner som deles ut til hele avdelingen', isCorrect: false },
      ],
      solution: 'Multidose er maskinelt pakkede legemiddeldoser der hvert enkelt utdelingstidspunkt er pakket i en egen pose. Hver pose er merket med pasientens navn, fødselsdato, dato, klokkeslett og innhold. Dette reduserer risikoen for feil sammenlignet med manuell opplegging av dosett.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 3.5 Avansert velferdsteknologi
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_3_5: TextbookChapter = {
  id: 'hov3-3-5',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '3.5',
  title: 'Avansert velferdsteknologi',
  description: 'Digitale helseløsninger, sensorteknologi, e-helse og fjernmonitorering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke velferdsteknologi for å understøtte brukernes egenomsorg og sikkerhet',
    'vurdere nytten og begrensningene ved velferdsteknologiske løsninger',
    'ivareta personvern og etikk ved bruk av velferdsteknologi',
  ],
  keyTerms: [
    { term: 'Velferdsteknologi', definition: 'Teknologiske løsninger som bidrar til økt trygghet, sikkerhet, sosial deltakelse, mobilitet og fysisk og kulturell aktivitet for brukere av helse- og omsorgstjenester.' },
    { term: 'Trygghetsalarm', definition: 'Et alarmsystem der brukeren kan tilkalle hjelp ved å trykke på en knapp, vanligvis båret som armbånd eller halssmykke.' },
    { term: 'GPS-sporing', definition: 'Teknologi som gjør det mulig å lokalisere en bruker via satellittsignal, brukt for å øke sikkerheten til personer med demens eller kognitiv svikt.' },
    { term: 'Fjernmonitorering', definition: 'Overvåking av pasientens helsedata (blodtrykk, blodsukker, vekt) hjemmefra via digitale verktøy, med automatisk varsling ved avvik.' },
  ],
  content: [
    {
      id: 'hov3-3-5-intro',
      type: 'text',
      content: `## Avansert velferdsteknologi

Velferdsteknologi er i rask utvikling og endrer måten helse- og omsorgstjenester leveres på. Stortingsmelding 29 (2012-2013) definerte velferdsteknologi som teknologi som skal bidra til økt trygghet, sikkerhet og bedre livskvalitet for brukere.

For helsefagarbeidere betyr dette nye verktøy og arbeidsmetoder:

- **Trygghetsalarmer og sensorer** erstatter ikke omsorg, men gir økt sikkerhet
- **Digitale medisindispensere** støtter legemiddelhåndteringen
- **Fjernmonitorering** gir mulighet for oppfølging uten fysisk oppmøte
- **Kommunikasjonsverktøy** gjør det lettere å holde kontakt med brukere og pårørende

Som helsefagarbeider må du kunne bruke teknologien, veilede brukere, og samtidig tenke kritisk på etiske utfordringer knyttet til overvåking og personvern.`,
    },
    {
      id: 'hov3-3-5-def-1',
      type: 'definition',
      title: 'Typer velferdsteknologi',
      content: `Velferdsteknologi deles ofte inn i fire kategorier:

**1. Trygghetsskapende teknologi:**
- Trygghetsalarmer (personlige alarmer)
- Falldetektorer og bevegelsessensorer
- GPS-sporing for personer med demens
- Komfyrvakt og vannsensorer
- Digitale dørlåser og kameraovervåking

**2. Mestringsteknologi:**
- Digitale medisindispensere med varsel
- Elektroniske kalendere og påminnere
- Robotdyr og sosiale roboter
- Apper for egenmestring og helse

**3. Utrednings- og behandlingsteknologi:**
- Fjernmonitorering av blodtrykk, blodsukker, vekt
- Digitale konsultasjoner (videomøter med lege)
- Elektronisk pasientjournal og meldingsutveksling

**4. Velværeteknologi:**
- Sosiale medier og videokommunikasjon
- Underholdningsteknologi tilpasset eldre
- Aktivitetsapper og treningsprogrammer`,
    },
    {
      id: 'hov3-3-5-def-2',
      type: 'definition',
      title: 'Etikk og personvern',
      content: `Velferdsteknologi reiser viktige etiske spørsmål:

**Personvern:**
- GPS-sporing og sensorer samler inn persondata - hvem har tilgang?
- Kameraovervåking i hjemmet berører privatlivets fred
- Datalagring og informasjonssikkerhet må ivaretas

**Samtykke:**
- Brukeren skal i utgangspunktet samtykke til bruk av teknologien
- For personer med demens kan det være nødvendig med samtykke fra pårørende eller vedtak etter helse- og omsorgstjenesteloven
- Tvang skal kun brukes som siste utvei, med vedtak

**Verdighet:**
- Teknologi skal ikke erstatte menneskelig kontakt
- Brukere kan oppleve overvåking som krenkende
- Balanse mellom trygghet og frihet er viktig

**Din rolle:** Veilede brukere og pårørende om teknologien, sikre at personvern ivaretas, og reflektere over etiske dilemmaer i praksis.`,
    },
    {
      id: 'hov3-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

Velferdsteknologi er et viktig verktøy i fremtidens helsetjeneste:

- **Velferdsteknologi** bidrar til trygghet, mestring og livskvalitet
- **Fire kategorier**: trygghet, mestring, utredning/behandling, velvære
- **Etiske utfordringer** knyttet til personvern, samtykke og verdighet må håndteres
- **Teknologien erstatter ikke** menneskelig omsorg, men kan støtte og forbedre den
- **Helsefagarbeideren** må kunne bruke, veilede og reflektere kritisk over teknologien`,
    },
  ],
  exercises: [
    {
      id: 'hov3-3-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedformålet med velferdsteknologi?',
      options: [
        { id: 'a', text: 'Å erstatte helsepersonell med maskiner', isCorrect: false },
        { id: 'b', text: 'Å bidra til økt trygghet, sikkerhet og bedre livskvalitet for brukere', isCorrect: true },
        { id: 'c', text: 'Å redusere kostnader i helsetjenesten uten hensyn til kvalitet', isCorrect: false },
        { id: 'd', text: 'Å overvåke brukere for å kontrollere atferden deres', isCorrect: false },
      ],
      solution: 'Velferdsteknologi skal bidra til økt trygghet, sikkerhet, sosial deltakelse, mobilitet og bedre livskvalitet for brukere av helse- og omsorgstjenester. Den skal støtte, ikke erstatte, menneskelig omsorg.',
    },
    {
      id: 'hov3-3-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken etisk utfordring er mest sentral ved bruk av GPS-sporing for personer med demens?',
      options: [
        { id: 'a', text: 'At GPS-enheten er for dyr for kommunen', isCorrect: false },
        { id: 'b', text: 'Balansen mellom trygghet/sikkerhet og personvern/frihet', isCorrect: true },
        { id: 'c', text: 'At GPS-enheten er vanskelig å bruke for helsepersonell', isCorrect: false },
        { id: 'd', text: 'At GPS-teknologi ikke fungerer i Norge', isCorrect: false },
      ],
      solution: 'GPS-sporing reiser et grunnleggende etisk dilemma: den øker tryggheten ved at personer med demens kan lokaliseres om de går seg bort, men den innebærer samtidig overvåking som kan oppleves krenkende og begrensende for friheten. Samtykke kan være problematisk når personen har nedsatt samtykkekompetanse. Det kreves en nøye avveining mellom trygghet og autonomi.',
    },
    {
      id: 'hov3-3-5-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi to eksempler på velferdsteknologi og forklar hvordan hver av dem kan forbedre hverdagen for en eldre bruker som bor hjemme alene.',
      solution: '1) Trygghetsalarm med fallsensor - en eldre bruker som bor alene kan falle og bli liggende uten å kunne tilkalle hjelp. En trygghetsalarm med automatisk falldeteksjon sender varsel til alarmsentralen selv om brukeren ikke klarer å trykke på knappen. Dette gir trygghet for både brukeren og pårørende, og sikrer rask hjelp. 2) Digital medisindispenser - en bruker som tar mange medisiner kan glemme å ta dem eller ta feil dose. En digital medisindispenser varsler med lyd og lys når det er tid for å ta medisiner, og dispenserer kun riktig dose. Hvis brukeren ikke tar medisinene, sendes varsel til hjemmetjenesten. Dette sikrer bedre adherens og reduserer risiko for feilmedisinering.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ----------------------------------------------------------------------------
// 3.6 Førstehjelp og akuttberedskap
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_3_6: TextbookChapter = {
  id: 'hov3-3-6',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '3.6',
  title: 'Førstehjelp og akuttberedskap',
  description: 'HLR, førstehjelp ved vanlige akutte tilstander, akuttberedskap på arbeidsplassen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utføre hjerte-lungeredning (HLR) med og uten hjertestarter (AED)',
    'yte førstehjelp ved vanlige akutte tilstander',
    'kjenne til akuttberedskapsplaner og egen rolle i akutte situasjoner',
  ],
  keyTerms: [
    { term: 'HLR', definition: 'Hjerte-lungeredning - livreddende førstehjelp med brystkompresjoner og innblåsinger ved hjertestans.' },
    { term: 'AED', definition: 'Automatisk ekstern defibrillator - en hjertestarter som analyserer hjerterytmen og gir elektrisk sjokk ved behov.' },
    { term: 'Stabilt sideleie', definition: 'En posisjon der en bevisstløs person som puster legges på siden for å sikre frie luftveier og hindre aspirasjon.' },
    { term: 'Aspirasjon', definition: 'Innånding av fremmedlegemer, mat, oppkast eller væske ned i luftveiene, som kan føre til kvelning eller lungebetennelse.' },
    { term: 'Anafylaksi', definition: 'En alvorlig, livstruende allergisk reaksjon som kan gi pustevansker, blodtrykksfall og sjokk.' },
  ],
  content: [
    {
      id: 'hov3-3-6-intro',
      type: 'text',
      content: `## Førstehjelp og akuttberedskap

Som helsefagarbeider kan du oppleve akutte situasjoner der rask og riktig handling kan redde liv. Du har et profesjonelt ansvar for å kunne yte førstehjelp og kjenne til akuttberedskapen på din arbeidsplass.

De viktigste akutte situasjonene du må kunne håndtere:

- **Hjertestans** - HLR med og uten hjertestarter
- **Bevisstløshet** - sikre frie luftveier og stabilt sideleie
- **Luftveisobstruksjon** - fjerne fremmedlegemer fra luftveiene
- **Alvorlige allergiske reaksjoner** - gjenkjenne anafylaksi
- **Alvorlige blødninger** - stanse blødning med trykk
- **Hjerneslag** - gjenkjenne symptomer og handle raskt

Husk: Du trenger ikke stille diagnose. Din oppgave er å holde pasienten i live til mer kvalifisert hjelp kommer.`,
    },
    {
      id: 'hov3-3-6-def-1',
      type: 'definition',
      title: 'Hjerte-lungeredning (HLR)',
      content: `**HLR-algoritmen for voksne (Norsk Resuscitasjonsråd):**

**1. Sikkerhet** - sjekk at det er trygt for deg og pasienten

**2. Sjekk respons** - rist forsiktig i skuldrene og rop «Hei, er du våken?»

**3. Rop på hjelp** - be noen ringe 113 og hente hjertestarter (AED)

**4. Åpne luftveien** - bøy hodet bakover og løft haken

**5. Sjekk pusten** - se, lytt og kjenn i inntil 10 sekunder

**6. Hvis ikke normal pust - start HLR:**
- 30 brystkompresjoner (5-6 cm dype, 100-120/min)
- 2 innblåsinger (1 sekund per innblåsing)
- Fortsett 30:2 til ambulansen overtar eller pasienten våkner

**7. Bruk AED når den er tilgjengelig:**
- Slå på AED og følg stemmeinstruksjonene
- Fest elektrodene på bar brystkasse
- La AED analysere - ikke rør pasienten under analyse
- Gi sjokk hvis AED anbefaler det
- Fortsett HLR umiddelbart etter sjokk`,
    },
    {
      id: 'hov3-3-6-def-2',
      type: 'definition',
      title: 'Stabilt sideleie og frie luftveier',
      content: `**Stabilt sideleie** brukes for bevisstløse personer som puster:

**Fremgangsmåte:**
1. Knelende ved siden av personen - legg nærmeste arm ut i 90 graders vinkel
2. Legg den andre hånden mot kinnet med håndflaten ut
3. Bøy det borterste kneet og rull personen mot deg
4. Juster hodet slik at luftveien er åpen
5. Kontroller pusten jevnlig

**Viktig:** Stabilt sideleie hindrer at tungen faller bakover og blokkerer luftveien, og at eventuelt oppkast aspireres ned i lungene.

**Ved luftveisobstruksjon (fremmedlegeme):**
- **Mild obstruksjon** (kan hoste): Oppmuntre til å hoste kraftig
- **Alvorlig obstruksjon** (kan ikke hoste/puste):
  1. Gi 5 ryggslag mellom skulderbladene
  2. Gi 5 buktrykk (Heimlich-manøveren)
  3. Veksle mellom ryggslag og buktrykk
  4. Ring 113 hvis ikke fremmedlegemet løsner`,
    },
    {
      id: 'hov3-3-6-text-1',
      type: 'text',
      content: `### Akuttberedskap på arbeidsplassen

Alle helseinstitusjoner skal ha en akuttberedskapsplan som beskriver:

- Hvor akuttutstyr (hjertestarter, førstehjelpsveske, oksygen) oppbevares
- Hvem som har ansvar i akutte situasjoner
- Prosedyrer for varsling (internt og eksternt)
- Evakueringsplan ved brann eller andre katastrofer

**Som helsefagarbeider skal du:**
- Vite hvor akuttutstyret er og at det fungerer
- Kunne bruke AED og grunnleggende førstehjelputstyr
- Kjenne varslingsrutinene på din arbeidsplass
- Delta på regelmessig opplæring og øvelser i HLR og akuttberedskap`,
    },
    {
      id: 'hov3-3-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

Førstehjelp og akuttberedskap er livsviktig kompetanse:

- **HLR** med 30:2-forholdet og bruk av AED kan redde liv ved hjertestans
- **Stabilt sideleie** sikrer frie luftveier hos bevisstløse som puster
- **Fremmedlegemeobstruksjon** behandles med ryggslag og buktrykk
- **Akuttberedskapsplaner** gir tydelige rutiner for akutte situasjoner
- **Regelmessig trening** er nødvendig for å opprettholde ferdigheter`,
    },
  ],
  exercises: [
    {
      id: 'hov3-3-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er riktig forholdet mellom brystkompresjoner og innblåsinger ved HLR hos voksne?',
      options: [
        { id: 'a', text: '15 kompresjoner og 2 innblåsinger', isCorrect: false },
        { id: 'b', text: '30 kompresjoner og 2 innblåsinger', isCorrect: true },
        { id: 'c', text: '30 kompresjoner og 5 innblåsinger', isCorrect: false },
        { id: 'd', text: '10 kompresjoner og 1 innblåsing', isCorrect: false },
      ],
      solution: 'Ved HLR hos voksne er forholdet 30 brystkompresjoner og 2 innblåsinger. Kompresjonene skal være 5-6 cm dype og ha en frekvens på 100-120 per minutt. Innblåsingene skal vare ca. 1 sekund hver. Dette 30:2-forholdet gjelder for både legfolk og helsepersonell.',
    },
    {
      id: 'hov3-3-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Når skal du legge en person i stabilt sideleie?',
      options: [
        { id: 'a', text: 'Når personen er bevisstløs og puster normalt', isCorrect: true },
        { id: 'b', text: 'Når personen er bevisstløs og ikke puster', isCorrect: false },
        { id: 'c', text: 'Når personen har brukket et ben', isCorrect: false },
        { id: 'd', text: 'Når personen er våken og klager over smerter', isCorrect: false },
      ],
      solution: 'Stabilt sideleie brukes når personen er bevisstløs men puster normalt. Hensikten er å holde luftveien åpen og hindre at eventuelt oppkast aspireres ned i lungene. Hvis personen er bevisstløs og IKKE puster, skal du starte HLR umiddelbart, ikke legge i stabilt sideleie.',
    },
    {
      id: 'hov3-3-6-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Du finner en beboer liggende på gulvet. Beskriv steg for steg hva du gjør fra du finner personen til hjelp ankommer.',
      solution: '1) Sikkerhet - sjekk at det er trygt for deg og beboeren. 2) Sjekk respons - rist forsiktig i skuldrene og rop «Er du våken?». 3) Hvis ingen respons: rop på hjelp, be en kollega ringe 113 og hente hjertestarter. 4) Åpne luftveien - bøy hodet forsiktig bakover og løft haken. 5) Sjekk pusten i inntil 10 sekunder - se om brystkassen hever seg, lytt etter pustelyder, kjenn etter luft mot kinnet. 6a) Hvis personen puster normalt: legg i stabilt sideleie og kontroller pusten jevnlig til hjelp kommer. 6b) Hvis personen IKKE puster normalt: start HLR med 30 brystkompresjoner og 2 innblåsinger. Bruk AED så snart den er tilgjengelig. Fortsett HLR til ambulansen overtar eller personen viser tegn til liv.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-3-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva gjør du ved alvorlig luftveisobstruksjon (personen kan ikke hoste eller puste)?',
      options: [
        { id: 'a', text: 'Gi vann å drikke for å skylle ned fremmedlegemet', isCorrect: false },
        { id: 'b', text: 'Legg personen i stabilt sideleie og vent på ambulansen', isCorrect: false },
        { id: 'c', text: 'Gi 5 ryggslag mellom skulderbladene, deretter 5 buktrykk, veksle mellom disse', isCorrect: true },
        { id: 'd', text: 'Start HLR med 30 kompresjoner og 2 innblåsinger', isCorrect: false },
      ],
      solution: 'Ved alvorlig luftveisobstruksjon der personen ikke kan hoste, snakke eller puste, gir du først 5 kraftige ryggslag mellom skulderbladene med håndroten. Dersom dette ikke hjelper, gir du 5 buktrykk (Heimlich-manøveren). Veksle mellom 5 ryggslag og 5 buktrykk til fremmedlegemet løsner eller personen blir bevisstløs. Hvis personen blir bevisstløs, ring 113 og start HLR.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 3.7 Hygiene og smittevern
// ----------------------------------------------------------------------------

export const CHAPTER_HOV3_3_7: TextbookChapter = {
  id: 'hov3-3-7',
  courseId: 'helseoppvekst-vg3',
  chapterNumber: '3.7',
  title: 'Hygiene og smittevern',
  description: 'Basale smittevernrutiner, håndhygiene, isoleringsregimer og resistente bakterier.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utføre basale smittevernrutiner i tråd med gjeldende retningslinjer',
    'forstå og anvende isoleringsregimer ved smittsomme sykdommer',
    'forebygge spredning av resistente bakterier i helsetjenesten',
  ],
  keyTerms: [
    { term: 'Basale smittevernrutiner', definition: 'Grunnleggende smitteverntiltak som skal følges ved all pasientkontakt, uavhengig av kjent smittestatus.' },
    { term: 'MRSA', definition: 'Meticillinresistente gule stafylokokker - bakterier som er motstandsdyktige mot vanlige antibiotika.' },
    { term: 'Smittekjeden', definition: 'Modell som viser de seks leddene i smittespredning: smittestoff, smittekilde, smittevei, inngangsport, mottaker og mottakelighet.' },
    { term: 'Isolering', definition: 'Tiltak for å hindre smittespredning ved å skille smittede pasienter fra andre, med spesielle rutiner for beskyttelsesutstyr og rengjøring.' },
  ],
  content: [
    {
      id: 'hov3-3-7-intro',
      type: 'text',
      content: `## Hygiene og smittevern

Helsetjenesteassosierte infeksjoner (HAI) er infeksjoner som pasienter får under opphold i helsetjenesten. Mellom 5 og 10 prosent av alle sykehuspasienter i Norge rammes av slike infeksjoner hvert år. Som helsefagarbeider har du en nøkkelrolle i å bryte smittekjeden.

**Smittekjeden** har seks ledd:
1. **Smittestoffet** - bakterier, virus, sopp eller parasitter
2. **Smittekilden** - der smittestoffet lever og formerer seg (sår, blod, avføring)
3. **Smitteveien** - hvordan smittestoffet overføres (kontakt, dråpe, luft, blod)
4. **Inngangsport** - der smittestoffet kommer inn i kroppen (sår, slimhinner, luftveier)
5. **Mottakeren** - personen som blir smittet
6. **Mottakelighet** - faktorer som gjør mottakeren sårbar (nedsatt immunforsvar, sår, kateter)

For å forebygge infeksjoner må vi bryte minst ett ledd i kjeden. Basale smittevernrutiner er det viktigste verktøyet vi har.`,
    },
    {
      id: 'hov3-3-7-def-1',
      type: 'definition',
      title: 'Basale smittevernrutiner',
      content: `**Basale smittevernrutiner** er minimumstiltak som skal følges ved **all** pasientkontakt:

**Håndhygiene:**
- Hånddesinfeksjon med alkoholbasert middel (70 %) er førstevalg
- Håndvask med såpe og vann ved synlig skitne hender
- De 5 indikasjonene for håndhygiene (WHO):
  1. Før pasientkontakt
  2. Før rene/aseptiske prosedyrer
  3. Etter risiko for kontakt med kroppsvæsker
  4. Etter pasientkontakt
  5. Etter kontakt med pasientens omgivelser

**Beskyttelsesutstyr:**
- Hansker ved kontakt med kroppsvæsker, slimhinner eller skadet hud
- Munnbind og øyebeskyttelse ved risiko for sprut
- Smittefrakk ved risiko for søl på klær

**Andre tiltak:**
- Riktig håndtering av stikkende/skjærende avfall
- Riktig rengjøring og desinfeksjon av utstyr
- Korrekt avfallshåndtering`,
    },
    {
      id: 'hov3-3-7-def-2',
      type: 'definition',
      title: 'Isoleringsregimer og resistente bakterier',
      content: `**Isoleringsregimer** brukes når basale smittevernrutiner ikke er tilstrekkelig:

**Kontaktsmitteisolering:**
- Brukes ved MRSA, VRE, ESBL og andre kontaktsmittsomme organismer
- Enerom, hansker, smittefrakk, egen hånddesinfeksjon
- Utstyr skal være pasientbundet eller desinfiseres mellom pasienter

**Dråpesmitteisolering:**
- Brukes ved influensa, RS-virus, kikhoste
- Enerom, kirurgisk munnbind innen 1-2 meter
- Pasienten bruker munnbind ved transport

**Luftsmitteisolering:**
- Brukes ved tuberkulose, meslinger, vannkopper
- Enerom med undertrykksventilasjon
- Åndedrettsvern (FFP3-maske) for personell

**Resistente bakterier** som MRSA, VRE og ESBL er et økende problem. Disse bakteriene er motstandsdyktige mot vanlige antibiotika, noe som gjør infeksjoner vanskeligere å behandle. Riktig antibiotikabruk og strenge smittevernrutiner er avgjørende for å begrense spredning.`,
    },
    {
      id: 'hov3-3-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

Hygiene og smittevern er grunnleggende for trygg pasientbehandling:

- **Smittekjeden** viser hvordan infeksjoner spres og hvor vi kan bryte den
- **Basale smittevernrutiner** med håndhygiene som hjørnestein skal følges alltid
- **WHOs 5 indikasjoner** angir når håndhygiene skal utføres
- **Isoleringsregimer** gir ekstra beskyttelse ved kjent smittsom sykdom
- **Resistente bakterier** er et alvorlig og økende problem som krever strenge rutiner`,
    },
  ],
  exercises: [
    {
      id: 'hov3-3-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er det viktigste enkelttiltaket for å forebygge smittespredning i helsetjenesten?',
      options: [
        { id: 'a', text: 'Bruk av hansker ved all pasientkontakt', isCorrect: false },
        { id: 'b', text: 'God håndhygiene', isCorrect: true },
        { id: 'c', text: 'Bruk av munnbind til alle pasienter', isCorrect: false },
        { id: 'd', text: 'Daglig dusjing av alle pasienter', isCorrect: false },
      ],
      solution: 'God håndhygiene er det viktigste enkelttiltaket for å forebygge helsetjenesteassosierte infeksjoner. Alkoholbasert hånddesinfeksjon er førstevalg og tar bare 20-30 sekunder. Forskning viser at forbedret håndhygiene kan redusere infeksjonsforekomsten med opptil 50 prosent.',
    },
    {
      id: 'hov3-3-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken av WHOs 5 indikasjoner for håndhygiene mangler i denne listen: før pasientkontakt, før rene prosedyrer, etter risiko for kontakt med kroppsvæsker, etter pasientkontakt?',
      options: [
        { id: 'a', text: 'Etter kontakt med pasientens omgivelser', isCorrect: true },
        { id: 'b', text: 'Etter måltider', isCorrect: false },
        { id: 'c', text: 'Før vaktskifte', isCorrect: false },
        { id: 'd', text: 'Etter toalettbesøk', isCorrect: false },
      ],
      solution: 'WHOs 5 indikasjoner for håndhygiene er: 1) Før pasientkontakt, 2) Før rene/aseptiske prosedyrer, 3) Etter risiko for kontakt med kroppsvæsker, 4) Etter pasientkontakt, 5) Etter kontakt med pasientens omgivelser. Det siste punktet er viktig fordi sengekant, nattbord og ringesnor kan være forurenset med smittestoffer.',
    },
    {
      id: 'hov3-3-7-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva smittekjeden er, og gi et konkret eksempel på hvordan du kan bryte smittekjeden i ditt daglige arbeid.',
      solution: 'Smittekjeden beskriver de seks leddene som må være til stede for at en infeksjon skal oppstå: smittestoff, smittekilde, smittevei, inngangsport, mottaker og mottakelighet. For å forebygge infeksjon må vi bryte minst ett ledd. Konkret eksempel: En beboer på sykehjem har norovirus (omgangssyke). Smittestoffet er norovirus, smittekilden er beboerens oppkast og avføring, smitteveien er kontaktsmitte via hender og overflater. Du bryter kjeden ved å: 1) Utføre grundig håndhygiene med såpe og vann (alkohol virker dårlig mot norovirus), 2) Bruke hansker og smittefrakk ved stell, 3) Isolere beboeren på enerom, 4) Desinfisere overflater med klorholdige midler. Dermed bryter du smitteveien slik at viruset ikke når nye mottakere.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'hov3-3-7-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr MRSA?',
      options: [
        { id: 'a', text: 'Meticillinresistente gule stafylokokker - bakterier som er motstandsdyktige mot vanlige antibiotika', isCorrect: true },
        { id: 'b', text: 'Medisinsk resistens mot smittsomme agens - en generell betegnelse på alle resistente bakterier', isCorrect: false },
        { id: 'c', text: 'Multippel resistens mot stafylokokk-antibiotika - en laboratorietest for bakterieresistens', isCorrect: false },
        { id: 'd', text: 'Modifisert resistensscreening av antibiotikabruk - et overvåkingssystem for sykehus', isCorrect: false },
      ],
      solution: 'MRSA står for meticillinresistente Staphylococcus aureus (gule stafylokokker). Disse bakteriene er motstandsdyktige mot vanlige betalaktam-antibiotika (penicilliner og cefalosporiner), som normalt brukes til å behandle stafylokokkinfeksjoner. MRSA-infeksjoner krever behandling med spesialantibiotika og strenge smitteverntiltak for å hindre spredning.',
    },
  ],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const HELSEOPPVEKST_VG3_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HOV3_3_1,
  CHAPTER_HOV3_3_2,
  CHAPTER_HOV3_3_3,
  CHAPTER_HOV3_3_4,
  CHAPTER_HOV3_3_5,
  CHAPTER_HOV3_3_6,
  CHAPTER_HOV3_3_7,
];
