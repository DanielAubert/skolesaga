/* eslint-disable */
// @ts-nocheck
/**
 * Informasjonsteknologi og medieproduksjon VG1 - Del 1: Grunnleggende IT og digitale systemer
 *
 * Kapittel 1.1-1.7: Grunnleggende IT og digitale systemer
 * Dekker LK20 kompetansemål for maskinvare, programvare, skyteknologi, digital kommunikasjon,
 * tallsystemer og digitalisering i samfunnet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Datamaskinen og dens komponenter
// ============================================================================

export const CHAPTER_IM_VG1_1_1: TextbookChapter = {
  id: 'im-vg1-1-1',
  courseId: 'im-vg1',
  chapterNumber: '1.1',
  title: 'Datamaskinen og dens komponenter',
  description: 'Lær om de viktigste komponentene i en datamaskin, fra prosessor og minne til lagring og tilkoblingsmuligheter.',
  estimatedMinutes: 55,
  prevChapter: undefined,
  nextChapter: 'im-vg1-1-2',
  competenceGoals: [
    'beskrive og forklare sentrale komponenter i en datamaskin og hvordan de samarbeider',
  ],
  keyTerms: [
    { term: 'CPU', definition: 'Central Processing Unit - prosessoren som utfører beregninger og instruksjoner.' },
    { term: 'RAM', definition: 'Random Access Memory - midlertidig hurtigminne som lagrer data mens programmet kjører.' },
    { term: 'SSD', definition: 'Solid State Drive - lagringsenhet uten bevegelige deler, raskere enn tradisjonell harddisk.' },
    { term: 'Hovedkort', definition: 'Kretskortet som kobler sammen alle komponentene i datamaskinen.' },
    { term: 'GPU', definition: 'Graphics Processing Unit - grafikkprosessor som håndterer visuelle beregninger.' },
  ],
  content: [
    {
      id: 'im-1-1-intro',
      type: 'text',
      content: `## Datamaskinen og dens komponenter

Datamaskinen er det viktigste arbeidsverktøyet innen informasjonsteknologi og medieproduksjon. For å jobbe effektivt med IT og media er det avgjørende å forstå hvordan en datamaskin er bygget opp, og hvordan de ulike delene samarbeider.

I dette kapittelet skal du lære:
- Hva en CPU er og hvordan den fungerer
- Forskjellen mellom RAM og permanent lagring
- Hva et hovedkort gjør og hvorfor det er viktig
- Hvilke inn- og utenheter som finnes
- Hvordan komponentene samarbeider`,
    },
    {
      id: 'im-1-1-def-1',
      type: 'definition',
      title: 'CPU - Prosessoren',
      content: `**CPU** (Central Processing Unit) er datamaskinens «hjerne». Den utfører alle beregninger og instruksjoner som programmene krever. CPUens ytelse måles i klokkehastighet (GHz) og antall kjerner. En moderne prosessor kan ha 4-16 kjerner som jobber parallelt, noe som gjør det mulig å kjøre flere oppgaver samtidig.`,
    },
    {
      id: 'im-1-1-text-1',
      type: 'text',
      title: 'Prosessoren i praksis',
      content: `### Hvordan fungerer prosessoren?

Prosessoren jobber i en syklus kalt **hent-dekod-utfør**:
1. **Hent:** CPUen henter en instruksjon fra minnet
2. **Dekod:** Instruksjonen tolkes og oversettes
3. **Utfør:** Instruksjonen gjennomføres

Denne syklusen gjentas milliarder av ganger per sekund. En CPU med klokkehastighet på 3,5 GHz utfører 3,5 milliarder sykluser i sekundet.

**Kjerner og tråder:**
Moderne prosessorer har flere kjerner som kan jobbe uavhengig. En firekjerneprosessor kan i teorien gjøre fire ting samtidig. Med hyper-threading kan hver kjerne håndtere to tråder, slik at en firekjerneprosessor kan behandle åtte oppgaver parallelt.

**Eksempler på CPU-produsenter:**
- Intel (Core i3, i5, i7, i9)
- AMD (Ryzen 3, 5, 7, 9)
- Apple (M1, M2, M3 - ARM-basert)`,
    },
    {
      id: 'im-1-1-def-2',
      type: 'definition',
      title: 'RAM - Arbeidsminne',
      content: `**RAM** (Random Access Memory) er datamaskinens korttidshukommelse. Når du åpner et program, lastes det fra harddisken og inn i RAM fordi RAM er mye raskere å lese fra. RAM er **flyktig** - alt innhold forsvinner når datamaskinen slås av. Typisk har en moderne PC 8-32 GB RAM.`,
    },
    {
      id: 'im-1-1-text-2',
      type: 'text',
      title: 'Lagring: Harddisk og SSD',
      content: `### Lagring: HDD vs. SSD

Mens RAM er midlertidig lagring, trenger vi permanent lagring for filer, programmer og operativsystem.

**HDD (Hard Disk Drive):**
- Bruker roterende magnetiske plater
- Billig per GB (store lagringskapasiteter)
- Langsommere lese-/skrivehastighet
- Bevegelige deler gjør den sårbar for støt
- Typisk 1-4 TB kapasitet

**SSD (Solid State Drive):**
- Bruker flashminne (ingen bevegelige deler)
- Mye raskere enn HDD
- Dyrere per GB
- Tåler støt og vibrasjoner bedre
- Typisk 256 GB - 2 TB kapasitet

**NVMe SSD:**
En enda raskere variant som kobles direkte til hovedkortet via M.2-sporet. NVMe-disker kan lese data med hastigheter over 3000 MB/s, mot ca. 500 MB/s for vanlig SSD og 150 MB/s for HDD.`,
    },
    {
      id: 'im-1-1-text-3',
      type: 'text',
      title: 'Hovedkort og tilkoblinger',
      content: `### Hovedkortet

Hovedkortet (motherboard) er det store kretskortet som alle andre komponenter kobles til. Det fungerer som datamaskinens «nervesystem» og sørger for kommunikasjon mellom alle delene.

**Viktige elementer på hovedkortet:**
- **CPU-sokkel:** Der prosessoren settes inn
- **RAM-spor:** Vanligvis 2-4 spor for minnebrikker
- **PCIe-spor:** For grafikkort og tilleggskort
- **M.2-spor:** For NVMe SSD
- **SATA-porter:** For HDD og vanlig SSD
- **USB-tilkoblinger:** For eksterne enheter
- **BIOS/UEFI-brikke:** Styrer oppstartsprosessen

### Inn- og utenheter

**Innenheter** sender data til datamaskinen:
- Tastatur, mus, mikrofon, webkamera, skanner, berøringsskjerm

**Utenheter** mottar data fra datamaskinen:
- Skjerm, skriver, høyttalere, projektor

**Kombinerte enheter:**
- Berøringsskjerm (både inn og ut), VR-briller, multifunksjonsskrivere`,
    },
    {
      id: 'im-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Velge riktig maskinvare',
      problem: 'En elev skal bruke datamaskinen til videoredigering i Adobe Premiere Pro. Hvilke komponenter er viktigst å prioritere?',
      solution: `**Løsning:**

For videoredigering er følgende viktigst:

1. **CPU:** En kraftig flerjerners prosessor (minst 6-8 kjerner) fordi videoredigering bruker mange kjerner parallelt under eksportering.

2. **RAM:** Minst 16 GB, helst 32 GB. Videofiler er store og krever mye arbeidsminne, spesielt med 4K-oppløsning.

3. **GPU:** Et dedikert grafikkort hjelper med forhåndsvisning og effektberegning. Adobe Premiere bruker GPU-akselerasjon.

4. **Lagring:** En rask NVMe SSD for prosjektfiler gir raskere redigering. En ekstra HDD kan brukes for arkivering av ferdige prosjekter.

5. **Skjerm:** En fargenøyaktig skjerm med god oppløsning for å vurdere det visuelle resultatet.`,
    },
    {
      id: 'im-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-1-1-ex-1',
        number: '1.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedoppgaven til CPU-en i en datamaskin?',
        options: [
          { id: 'a', text: 'Lagre filer permanent', isCorrect: false, feedback: 'Permanent lagring er oppgaven til harddisk eller SSD.' },
          { id: 'b', text: 'Utføre beregninger og instruksjoner', isCorrect: true },
          { id: 'c', text: 'Vise bilder på skjermen', isCorrect: false, feedback: 'Det er grafikkortets (GPU) oppgave.' },
          { id: 'd', text: 'Koble til internett', isCorrect: false, feedback: 'Det er nettverkskortets oppgave.' },
        ],
        solution: 'CPU-en (Central Processing Unit) er prosessoren som utfører alle beregninger og instruksjoner. Den kalles ofte datamaskinens hjerne.',
      },
    },
    {
      id: 'im-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-1-1-ex-2',
        number: '1.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom RAM og SSD?',
        options: [
          { id: 'a', text: 'RAM er raskere og flyktig, SSD er langsommere men permanent', isCorrect: true },
          { id: 'b', text: 'SSD er raskere enn RAM', isCorrect: false, feedback: 'RAM er mye raskere enn SSD, men RAM mister innholdet når strømmen slås av.' },
          { id: 'c', text: 'RAM og SSD gjør akkurat det samme', isCorrect: false, feedback: 'De har ulike roller - RAM er midlertidig hurtigminne, SSD er permanent lagring.' },
          { id: 'd', text: 'RAM lagrer filer permanent', isCorrect: false, feedback: 'RAM er flyktig - innholdet forsvinner når datamaskinen slås av.' },
        ],
        solution: 'RAM er hurtigminne som mister innholdet ved strømbrudd (flyktig), mens SSD er permanent lagring. RAM er raskere å lese fra, og brukes til data som trengs akkurat nå.',
      },
    },
    {
      id: 'im-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-1-1-ex-3',
        number: '1.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hva hovedkortet gjør i en datamaskin, og nevn minst fire ulike tilkoblinger du finner på et hovedkort.',
        hints: ['Tenk på hovedkortet som et sentralt knutepunkt der alle komponentene møtes.'],
        solution: 'Hovedkortet er kretskortet som kobler sammen alle komponentene og sørger for kommunikasjon mellom dem. Tilkoblinger inkluderer: CPU-sokkel, RAM-spor, PCIe-spor (for grafikkort), M.2-spor (for NVMe SSD), SATA-porter (for HDD/SSD), USB-tilkoblinger og strømtilkobling.',
      },
    },
    {
      id: 'im-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-1-1-ex-4',
        number: '1.1.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken lagringstype har høyest lese-/skrivehastighet?',
        options: [
          { id: 'a', text: 'HDD', isCorrect: false, feedback: 'HDD har typisk ca. 150 MB/s og er den langsomste.' },
          { id: 'b', text: 'SATA SSD', isCorrect: false, feedback: 'SATA SSD er raskere enn HDD (ca. 500 MB/s), men ikke den raskeste.' },
          { id: 'c', text: 'NVMe SSD', isCorrect: true },
          { id: 'd', text: 'USB-minnepinne', isCorrect: false, feedback: 'USB-minnepinner er vanligvis langsommere enn alle de andre alternativene.' },
        ],
        solution: 'NVMe SSD kobles direkte til hovedkortet via M.2-sporet og kan oppnå hastigheter over 3000 MB/s, som er mye raskere enn SATA SSD (500 MB/s) og HDD (150 MB/s).',
      },
    },
    {
      id: 'im-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-1-1-ex-5',
        number: '1.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kategoriser følgende enheter som innenheter, utenheter eller kombinerte enheter: tastatur, skjerm, berøringsskjerm, mikrofon, skriver, webkamera, VR-briller, mus.',
        hints: ['Tenk på om enheten sender data til datamaskinen, mottar data, eller begge deler.'],
        solution: 'Innenheter: tastatur, mikrofon, webkamera, mus. Utenheter: skjerm, skriver. Kombinerte enheter: berøringsskjerm (viser og registrerer berøring), VR-briller (viser bilde og registrerer hodebevegelser).',
      },
    },
    {
      id: 'im-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-1-1-ex-6',
        number: '1.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En medieproduksjonsbedrift skal kjøpe nye datamaskiner til to avdelinger: en avdeling som jobber med tekstredigering og e-post, og en avdeling som jobber med 3D-animasjon. Beskriv hvilke forskjeller du ville anbefalt i maskinvarespesifikasjonene for de to avdelingene, og begrunn valgene.',
        hints: ['Tenk på hva slags belastning de ulike arbeidsoppgavene legger på CPU, RAM, GPU og lagring.'],
        solution: 'Tekstavdelingen: En enklere PC med 4-kjernes CPU, 8 GB RAM, 256 GB SSD og integrert grafikk er tilstrekkelig. 3D-avdelingen: Kraftig 8-16-kjernes CPU, minst 32 GB RAM (helst 64 GB), dedikert GPU med mye VRAM (f.eks. NVIDIA RTX), rask NVMe SSD for prosjektfiler og ekstra HDD for arkiv. 3D-rendering er ekstremt krevende for alle komponenter.',
      },
    },
    {
      id: 'im-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **CPU** er prosessoren som utfører beregninger - den måles i GHz og antall kjerner
- **RAM** er flyktig hurtigminne for data som brukes akkurat nå
- **HDD/SSD** er permanent lagring - SSD er raskere, HDD er billigere
- **Hovedkortet** kobler alle komponentene sammen
- **Inn-/utenheter** lar oss kommunisere med datamaskinen
- Valg av maskinvare avhenger av bruksområdet`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Operativsystemer og filhåndtering
// ============================================================================

export const CHAPTER_IM_VG1_1_2: TextbookChapter = {
  id: 'im-vg1-1-2',
  courseId: 'im-vg1',
  chapterNumber: '1.2',
  title: 'Operativsystemer og filhåndtering',
  description: 'Forstå hva et operativsystem gjør, forskjellene mellom Windows, macOS og Linux, og hvordan filsystemer organiserer data.',
  estimatedMinutes: 50,
  prevChapter: 'im-vg1-1-1',
  nextChapter: 'im-vg1-1-3',
  competenceGoals: [
    'beskrive operativsystemets funksjoner og sammenligne ulike operativsystemer',
    'organisere og håndtere filer og mapper på en hensiktsmessig måte',
  ],
  keyTerms: [
    { term: 'Operativsystem', definition: 'Programvare som styrer maskinvaren og gir et grensesnitt mellom bruker og datamaskin.' },
    { term: 'Filsystem', definition: 'Metoden operativsystemet bruker for å organisere og holde oversikt over filer på lagringsenhetene.' },
    { term: 'Prosess', definition: 'Et program som kjører i minnet og utfører oppgaver.' },
    { term: 'GUI', definition: 'Graphical User Interface - grafisk brukergrensesnitt med vinduer, ikoner og menyer.' },
    { term: 'CLI', definition: 'Command Line Interface - tekstbasert grensesnitt der du skriver kommandoer.' },
  ],
  content: [
    {
      id: 'im-1-2-intro',
      type: 'text',
      content: `## Operativsystemer og filhåndtering

Når du slår på datamaskinen, er det operativsystemet som starter opp og gjør det mulig for deg å bruke maskinen. Uten et operativsystem ville du bare sett en blinkende markør på en svart skjerm.

I dette kapittelet skal du lære:
- Hva et operativsystem gjør og hvorfor det er nødvendig
- Forskjellene mellom Windows, macOS og Linux
- Hvordan filsystemer organiserer data
- Hvordan operativsystemet håndterer prosesser og minne`,
    },
    {
      id: 'im-1-2-def-1',
      type: 'definition',
      title: 'Operativsystem (OS)',
      content: `Et **operativsystem** er systemprogramvare som fungerer som et mellomledd mellom maskinvaren og brukeren. Det har tre hovedoppgaver: (1) styre maskinvaren (CPU, minne, lagring, enheter), (2) gi et brukergrensesnitt (grafisk eller tekstbasert), og (3) kjøre og administrere programmer (prosesshåndtering).`,
    },
    {
      id: 'im-1-2-text-1',
      type: 'text',
      title: 'De tre store operativsystemene',
      content: `### Windows, macOS og Linux

**Windows (Microsoft):**
- Det mest brukte operativsystemet for PC (ca. 75 % markedsandel)
- Bred programvarestøtte - de fleste programmer lages for Windows
- Brukes mye i næringsliv og skole
- Lisensiert - du betaler for å bruke det

**macOS (Apple):**
- Kun for Apples egne Mac-datamaskiner
- Populært blant kreative (design, musikk, video)
- Kjent for stabilitet og brukervennlighet
- Unix-basert - har et kraftig terminalverktøy under panseret

**Linux:**
- Åpen kildekode - helt gratis å bruke og endre
- Finnes i mange versjoner (distribusjoner): Ubuntu, Fedora, Debian
- Dominerer på servere og i skyløsninger
- Krever mer teknisk kunnskap, men gir full kontroll
- Android er basert på Linux-kjernen`,
    },
    {
      id: 'im-1-2-text-2',
      type: 'text',
      title: 'Filsystemer og filhåndtering',
      content: `### Filsystemer

Et filsystem er måten operativsystemet organiserer data på lagringsenheten. Tenk på det som et arkivsystem med mapper og undermapper.

**Vanlige filsystemer:**
- **NTFS:** Standard i Windows. Støtter store filer, rettigheter og kryptering.
- **APFS:** Standard i macOS. Optimalisert for SSD med snapshots og kryptering.
- **ext4:** Standard i Linux. Robust og pålitelig for servere.
- **FAT32/exFAT:** Brukes på USB-minnepinner fordi det fungerer på tvers av alle operativsystemer.

### God filhåndtering

En ryddig mappestruktur sparer deg for mye tid:
- Bruk beskrivende mappenavn: «Prosjekter/2024/Videoproduksjon/» fremfor «Diverse/Greier/»
- Navngi filer konsekvent: «rapport_versjon2_endelig.docx» er bedre enn «dokument1.docx»
- Unngå spesialtegn (æ, ø, å, mellomrom) i filnavn for kompatibilitet
- Ta jevnlig sikkerhetskopi av viktige filer`,
    },
    {
      id: 'im-1-2-text-3',
      type: 'text',
      title: 'Prosesshåndtering',
      content: `### Prosesser og ressursbruk

Når du åpner et program, oppretter operativsystemet en **prosess**. Hver prosess får tildelt CPU-tid og minneplass. Operativsystemet sjonglerer mellom hundrevis av prosesser og gir inntrykk av at alt kjører samtidig.

**Aktivitetsovervåking:**
- Windows: Oppgavebehandling (Ctrl+Shift+Esc)
- macOS: Aktivitetsmonitor
- Linux: System Monitor eller kommandoen «top»

Her kan du se hvilke prosesser som bruker mest CPU og minne, og avslutte programmer som har hengt seg opp.

**Vanlige årsaker til at datamaskinen blir treg:**
- For mange programmer åpne samtidig (lite ledig RAM)
- En prosess bruker 100 % CPU
- Harddisken er nesten full
- Bakgrunnsprogrammer du ikke trenger kjører`,
    },
    {
      id: 'im-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Velge riktig operativsystem',
      problem: 'En liten mediebedrift skal sette opp arbeidsstasjoner for videoredigering, en filserver og en resepsjonsdatamaskin for e-post. Hvilket operativsystem passer best til hvert bruksområde?',
      solution: `**Videoredigering:** macOS er populært i mediebransjen med gode kreative verktøy, men Windows med Adobe-pakken er like aktuelt og ofte billigere.

**Filserver:** Linux (f.eks. Ubuntu Server) er ideelt for servere - det er gratis, stabilt og bruker lite ressurser. De fleste webservere i verden kjører Linux.

**Resepsjon (e-post):** Windows er det tryggeste valget fordi det har bredest programvarestøtte og de fleste er vant til det fra før.`,
    },
    {
      id: 'im-1-2-summary',
      type: 'text',
      content: `## Oppsummering

- Et operativsystem styrer maskinvaren og lar brukeren kjøre programmer.
- De vanligste operativsystemene er Windows, macOS og Linux, med ulike styrker.
- Filsystemer organiserer data i mapper og filer på lagringsenheten.
- Prosesshåndtering lar operativsystemet kjøre flere programmer samtidig.
- Brukerkontoer gir ulike rettigheter og beskytter mot uautorisert tilgang.
- God mappestruktur med logisk inndeling gjør det lettere å finne igjen filer.`,
    },
    {
      id: 'im-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-1-2-ex-1',
        number: '1.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedoppgavene til et operativsystem?',
        options: [
          { id: 'a', text: 'Kun å vise et skrivebord med ikoner', isCorrect: false, feedback: 'Det grafiske grensesnittet er bare én av flere oppgaver.' },
          { id: 'b', text: 'Styre maskinvare, gi brukergrensesnitt og kjøre programmer', isCorrect: true },
          { id: 'c', text: 'Beskytte datamaskinen mot virus', isCorrect: false, feedback: 'Antivirusbeskyttelse er en tilleggsfunksjon, ikke hovedoppgaven.' },
          { id: 'd', text: 'Koble datamaskinen til internett', isCorrect: false, feedback: 'Nettverkstilkobling er en delfunksjon, ikke hovedoppgaven.' },
        ],
        solution: 'Et operativsystem har tre hovedoppgaver: styre maskinvaren, gi brukeren et grensesnitt å jobbe med, og kjøre og administrere programmer (prosesser).',
      },
    },
    {
      id: 'im-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-1-2-ex-2',
        number: '1.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket filsystem bør du bruke på en USB-minnepinne som skal fungere på både Windows, macOS og Linux?',
        options: [
          { id: 'a', text: 'NTFS', isCorrect: false, feedback: 'NTFS har begrenset skrivestøtte på macOS uten ekstra programvare.' },
          { id: 'b', text: 'APFS', isCorrect: false, feedback: 'APFS er Apple-spesifikt og fungerer ikke på Windows eller Linux.' },
          { id: 'c', text: 'ext4', isCorrect: false, feedback: 'ext4 er Linux-spesifikt og krever ekstra programvare på Windows og macOS.' },
          { id: 'd', text: 'exFAT', isCorrect: true },
        ],
        solution: 'exFAT støttes av Windows, macOS og Linux, og kan håndtere store filer (over 4 GB). Det er derfor det beste valget for USB-minnepinner som skal brukes på tvers av plattformer.',
      },
    },
    {
      id: 'im-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-1-2-ex-3',
        number: '1.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Windows, macOS og Linux i en tabell med kategoriene: pris, brukervennlighet, programvarestøtte, og mest typisk bruksområde.',
        hints: ['Tenk på hva hvert operativsystem er best kjent for og hvem som bruker det mest.'],
        solution: 'Windows: betalt lisens, brukervennlig, bredest programvarestøtte, mest brukt i skole og næringsliv. macOS: inkludert i Mac-pris, svært brukervennlig, godt utvalg kreativ programvare, populært blant designere og mediefolk. Linux: gratis/åpen kildekode, krever mer teknisk kunnskap, godt utvalg serverprogramvare, dominerer på servere og i sky.',
      },
    },
    {
      id: 'im-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-1-2-ex-4',
        number: '1.2.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en prosess i datamaskinsammenheng?',
        options: [
          { id: 'a', text: 'En fil som er lagret på harddisken', isCorrect: false, feedback: 'En fil er statisk data, mens en prosess er aktiv.' },
          { id: 'b', text: 'Et program som kjører i minnet', isCorrect: true },
          { id: 'c', text: 'En mappe i filsystemet', isCorrect: false, feedback: 'Mapper er en del av filorganiseringen, ikke prosesser.' },
          { id: 'd', text: 'En del av hovedkortet', isCorrect: false, feedback: 'Prosesser er programvare, ikke maskinvare.' },
        ],
        solution: 'En prosess er et program som kjører aktivt i minnet. Operativsystemet tildeler prosessen CPU-tid og minneplass, og holder oversikt over alle aktive prosesser.',
      },
    },
    {
      id: 'im-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-1-2-ex-5',
        number: '1.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor datamaskinen kan bli treg selv om den har en rask prosessor. Nevn minst tre mulige årsaker.',
        hints: ['Tenk på hva annet enn CPU som kan begrense ytelsen.'],
        solution: 'Mulige årsaker: (1) For lite RAM - datamaskinen må bruke harddisken som virtuelt minne, som er mye langsommere. (2) Harddisken er nesten full, noe som gjør filoperasjoner trege. (3) For mange bakgrunnsprosesser stjeler CPU-tid. (4) Overoppheting kan føre til at CPU-en senker hastigheten. (5) Malware kan bruke ressurser i bakgrunnen.',
      },
    },
    {
      id: 'im-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-1-2-ex-6',
        number: '1.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag et forslag til mappestruktur for en elev som jobber med medieproduksjon. Strukturen skal dekke skolearbeid, personlige prosjekter og mediefiler (bilder, video, lyd). Begrunn valgene dine.',
        hints: ['Tenk på logisk inndeling, datomerking og enkel gjenfinning.'],
        solution: 'Eksempel: Rot: /Medieproduksjon/ med undermapper: /Skole/2024-2025/Fag/Prosjektnavn/, /Personlige-prosjekter/Prosjektnavn/, /Mediefiler/Bilder/Rå + Redigert/, /Mediefiler/Video/Rå + Redigert/, /Mediefiler/Lyd/. Begrunnelse: Tydelig skille mellom skole og privat, dato i mappenavn for sortering, rå og redigerte filer atskilt for å lette backup.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3: Programvare og lisenser
// ============================================================================

export const CHAPTER_IM_VG1_1_3: TextbookChapter = {
  id: 'im-vg1-1-3',
  courseId: 'im-vg1',
  chapterNumber: '1.3',
  title: 'Programvare og lisenser',
  description: 'Lær forskjellen mellom systemprogramvare og applikasjonsprogramvare, og forstå de vanligste lisensmodellene.',
  estimatedMinutes: 45,
  prevChapter: 'im-vg1-1-2',
  nextChapter: 'im-vg1-1-4',
  competenceGoals: [
    'gjøre rede for ulike typer programvare og lisensmodeller, inkludert åpen kildekode',
  ],
  keyTerms: [
    { term: 'Systemprogramvare', definition: 'Programvare som styrer maskinvaren, f.eks. operativsystemer og drivere.' },
    { term: 'Applikasjonsprogramvare', definition: 'Programmer brukeren jobber direkte med, f.eks. tekstbehandler eller bildebehandler.' },
    { term: 'Åpen kildekode', definition: 'Programvare der kildekoden er fritt tilgjengelig for alle å lese, endre og distribuere.' },
    { term: 'SaaS', definition: 'Software as a Service - programvare du bruker via nettleseren og betaler abonnement for.' },
    { term: 'Proprietær programvare', definition: 'Programvare der kildekoden er lukket og eies av utvikleren.' },
  ],
  content: [
    {
      id: 'im-1-3-intro',
      type: 'text',
      content: `## Programvare og lisenser

Uten programvare er en datamaskin bare en samling elektroniske komponenter. Det er programvaren som gjør datamaskinen nyttig - fra operativsystemet som starter opp maskinen, til programmene du bruker for å redigere bilder, skrive tekst eller lage videoer.

I dette kapittelet skal du lære:
- Forskjellen mellom systemprogramvare og applikasjonsprogramvare
- Hva åpen kildekode betyr og hvorfor det er viktig
- De vanligste lisensmodellene for programvare
- Hva SaaS er og hvordan skytjenester endrer programvarebransjen`,
    },
    {
      id: 'im-1-3-def-1',
      type: 'definition',
      title: 'Systemprogramvare vs. applikasjonsprogramvare',
      content: `**Systemprogramvare** er programvare som styrer og administrerer maskinvaren. Operativsystemer, drivere og verktøy for diskadministrasjon er eksempler. Brukeren jobber sjelden direkte med systemprogramvare.

**Applikasjonsprogramvare** (eller bare «apper») er programmer brukeren jobber direkte med for å løse oppgaver: tekstbehandlere (Word), bildebehandlere (Photoshop), nettlesere (Chrome), videoredigerere (Premiere Pro) og spill.`,
    },
    {
      id: 'im-1-3-text-1',
      type: 'text',
      title: 'Åpen kildekode vs. proprietær programvare',
      content: `### Åpen kildekode

Åpen kildekode (open source) betyr at kildekoden til programmet er offentlig tilgjengelig. Hvem som helst kan lese, endre og dele koden videre.

**Fordeler med åpen kildekode:**
- Gratis å bruke
- Transparent - du kan se nøyaktig hva programmet gjør
- Fellesskapet finner og fikser feil raskt
- Kan tilpasses egne behov

**Populære åpen kildekode-programmer:**
- LibreOffice (kontorpakke, alternativ til Microsoft Office)
- GIMP (bildebehandling, alternativ til Photoshop)
- Audacity (lydredigering)
- Blender (3D-modellering og animasjon)
- OBS Studio (skjermopptak og strømming)
- VLC (mediespiller)

### Proprietær programvare

Proprietær (lukket) programvare har en kildekode som eies og kontrolleres av utvikleren. Du kjøper en lisens for å bruke programmet, men kan ikke se eller endre koden.

**Eksempler:** Adobe Creative Cloud, Microsoft Office, Final Cut Pro`,
    },
    {
      id: 'im-1-3-text-2',
      type: 'text',
      title: 'Lisensmodeller',
      content: `### Vanlige lisensmodeller

**Engangskjøp:** Du betaler én gang og eier programmet for alltid. Eksempel: Microsoft Office 2021 (Home & Student).

**Abonnement:** Du betaler månedlig eller årlig for tilgang. Mister tilgang om du slutter å betale. Eksempel: Adobe Creative Cloud (ca. 600 kr/mnd), Microsoft 365.

**Freemium:** Grunnversjonen er gratis, men avanserte funksjoner koster. Eksempel: Canva, Spotify.

**Freeware:** Helt gratis, men kildekoden er lukket. Eksempel: Adobe Acrobat Reader, Google Chrome.

**Åpen kildekode-lisenser:**
- **GPL:** Endringer må deles med samme lisens
- **MIT:** Svært fri - kan brukes nesten uten begrensninger
- **Creative Commons:** Mest brukt for innhold (bilder, tekst, musikk)

### SaaS - Software as a Service

SaaS er programvare som kjører i nettskyen og brukes via nettleseren. Du trenger ikke installere noe lokalt.

**Eksempler på SaaS:**
- Google Workspace (Docs, Sheets, Slides)
- Figma (design)
- Canva (grafisk design)
- Notion (notater og prosjektstyring)

**Fordeler:** Alltid oppdatert, tilgjengelig overalt, lett å samarbeide. **Ulemper:** Krever internett, avhengig av leverandøren, abonnementskostnad.`,
    },
    {
      id: 'im-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Velge programvare for en skoleavis',
      problem: 'Skoleavisen trenger programvare for tekstbehandling, bildebehandling og layout. Budsjettet er begrenset. Hvilke programmer vil du anbefale?',
      solution: `**Gratis alternativer:**
- **Tekstbehandling:** Google Docs (SaaS, gratis) eller LibreOffice Writer (åpen kildekode)
- **Bildebehandling:** GIMP (åpen kildekode) eller Canva (freemium)
- **Layout:** Scribus (åpen kildekode) eller Canva (freemium)

Disse programmene dekker alle behovene uten kostnader. Google Docs gjør det enkelt å samarbeide i sanntid. GIMP kan alt Photoshop kan, men har en brattere læringskurve. Canva er svært brukervennlig for enkel design.`,
    },
    {
      id: 'im-1-3-summary',
      type: 'text',
      content: `## Oppsummering

- Programvare deles i systemprogramvare (operativsystem, drivere) og applikasjonsprogramvare (brukerprogram).
- Åpen kildekode betyr at kildekoden er fritt tilgjengelig og kan endres av alle.
- Proprietær programvare har lukket kildekode og reguleres av lisensavtaler.
- Skybasert programvare (SaaS) kjøres i nettleseren uten lokal installasjon.
- Lisensmodeller regulerer bruk og distribusjon av programvare.
- Opphavsrett gjelder automatisk for kreative verk, inkludert kode og programvare.`,
    },
    {
      id: 'im-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-1-3-ex-1',
        number: '1.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom systemprogramvare og applikasjonsprogramvare?',
        options: [
          { id: 'a', text: 'Systemprogramvare er alltid gratis, applikasjonsprogramvare koster penger', isCorrect: false, feedback: 'Begge kan være gratis eller betalte.' },
          { id: 'b', text: 'Systemprogramvare styrer maskinvaren, applikasjonsprogramvare er det brukeren jobber med', isCorrect: true },
          { id: 'c', text: 'Det er ingen forskjell', isCorrect: false, feedback: 'De har helt ulike roller i datamaskinen.' },
          { id: 'd', text: 'Applikasjonsprogramvare kjører raskere enn systemprogramvare', isCorrect: false, feedback: 'Hastighet er ikke det som skiller dem.' },
        ],
        solution: 'Systemprogramvare (OS, drivere) styrer maskinvaren og er et mellomledd. Applikasjonsprogramvare er programmene brukeren jobber direkte med for å løse oppgaver.',
      },
    },
    {
      id: 'im-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-1-3-ex-2',
        number: '1.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner SaaS (Software as a Service)?',
        options: [
          { id: 'a', text: 'Programvare du installerer lokalt og eier for alltid', isCorrect: false, feedback: 'Det er engangskjøp, ikke SaaS.' },
          { id: 'b', text: 'Programvare som kjører i nettskyen og brukes via nettleseren', isCorrect: true },
          { id: 'c', text: 'Programvare med åpen kildekode', isCorrect: false, feedback: 'SaaS kan være proprietær eller åpen kildekode.' },
          { id: 'd', text: 'Gratis programvare uten begrensninger', isCorrect: false, feedback: 'SaaS er som regel abonnementsbasert.' },
        ],
        solution: 'SaaS er programvare som kjører i nettskyen og brukes via nettleseren. Eksempler er Google Docs, Figma og Canva. Fordelen er at du alltid har siste versjon og kan jobbe fra hvilken som helst enhet.',
      },
    },
    {
      id: 'im-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-1-3-ex-3',
        number: '1.3.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Nevn tre fordeler med åpen kildekode-programvare og gi et eksempel på et åpen kildekode-program for hvert av disse bruksområdene: bildebehandling, kontorarbeid og lydredigering.',
        hints: ['Tenk på pris, åpenhet og tilpasningsmuligheter.'],
        solution: 'Fordeler: (1) Gratis å bruke, (2) Kildekoden er åpen og transparent, (3) Kan tilpasses egne behov. Eksempler: Bildebehandling - GIMP, Kontorarbeid - LibreOffice, Lydredigering - Audacity.',
      },
    },
    {
      id: 'im-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-1-3-ex-4',
        number: '1.3.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken lisensmodell betaler du for månedlig og mister tilgangen om du slutter å betale?',
        options: [
          { id: 'a', text: 'Engangskjøp', isCorrect: false, feedback: 'Ved engangskjøp beholder du programmet etter betaling.' },
          { id: 'b', text: 'Freeware', isCorrect: false, feedback: 'Freeware er gratis.' },
          { id: 'c', text: 'Abonnement', isCorrect: true },
          { id: 'd', text: 'Åpen kildekode', isCorrect: false, feedback: 'Åpen kildekode er som regel gratis.' },
        ],
        solution: 'Abonnementsmodellen (subscription) krever løpende betaling. Eksempler er Adobe Creative Cloud og Microsoft 365. Fordelen er at du alltid har siste versjon, ulempen er at det kan bli dyrt over tid.',
      },
    },
    {
      id: 'im-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-1-3-ex-5',
        number: '1.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift vurderer om de skal bruke Adobe Creative Cloud (abonnement) eller gratis alternativer (GIMP, LibreOffice, Blender). Lag en argumentliste med fordeler og ulemper for begge valgene.',
        hints: ['Tenk på kostnad, funksjonalitet, opplæring og bransjestandarder.'],
        solution: 'Adobe CC: + Bransjestandard, + Beste funksjonalitet, + God support, - Dyrt (ca. 600 kr/mnd/bruker), - Abonnementsavhengighet. Gratis alternativer: + Ingen kostnad, + Åpen kildekode gir frihet, - Kan mangle spesialfunksjoner, - Ikke bransjestandard (kompatibilitetsproblemer), - Brattere læringskurve for noen verktøy.',
      },
    },
    {
      id: 'im-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-1-3-ex-6',
        number: '1.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter fordeler og ulemper ved SaaS-modellen sammenlignet med tradisjonell installert programvare. Hvem passer SaaS best for, og når kan lokal installasjon være å foretrekke?',
        hints: ['Tenk på internett-tilgang, personvern, samarbeid og ytelse.'],
        solution: 'SaaS fordeler: Tilgjengelig overalt, automatiske oppdateringer, lett å samarbeide, ingen installasjon nødvendig. SaaS ulemper: Krever internett, data lagres hos tredjepart (personvern), abonnementskostnad, begrenset ytelse for tunge oppgaver. SaaS passer for kontorarbeid og samarbeid. Lokal installasjon er bedre for tunge oppgaver som 3D-rendering og videoredigering der ytelse er kritisk, eller når personvern og datasikkerhet er spesielt viktig.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4: Skyteknologi og nettbaserte tjenester
// ============================================================================

export const CHAPTER_IM_VG1_1_4: TextbookChapter = {
  id: 'im-vg1-1-4',
  courseId: 'im-vg1',
  chapterNumber: '1.4',
  title: 'Skyteknologi og nettbaserte tjenester',
  description: 'Forstå hva nettskyen er, forskjellen mellom IaaS, PaaS og SaaS, og hvordan skytjenester brukes i arbeidsliv og utdanning.',
  estimatedMinutes: 55,
  prevChapter: 'im-vg1-1-3',
  nextChapter: 'im-vg1-1-5',
  competenceGoals: [
    'gjøre rede for hva skyteknologi er og vurdere fordeler og ulemper ved bruk av skytjenester',
  ],
  keyTerms: [
    { term: 'Nettsky (Cloud)', definition: 'IT-ressurser som lagring, databehandling og programvare levert over internett.' },
    { term: 'IaaS', definition: 'Infrastructure as a Service - leie av grunnleggende IT-infrastruktur som servere og lagring.' },
    { term: 'PaaS', definition: 'Platform as a Service - en plattform for utvikling og kjøring av applikasjoner.' },
    { term: 'SaaS', definition: 'Software as a Service - ferdig programvare tilgjengelig via nettleseren.' },
  ],
  content: [
    {
      id: 'im-1-4-intro',
      type: 'text',
      content: `## Skyteknologi og nettbaserte tjenester

Når du lagrer bilder i Google Foto, samarbeider i Google Docs eller strømmer musikk på Spotify, bruker du skytjenester. «Skyen» er ikke noe mystisk - det er rett og slett kraftige datamaskiner (servere) i store datasentre rundt om i verden som du kobler deg til via internett.

I dette kapittelet skal du lære:
- Hva nettskyen egentlig er
- De tre tjenestemodellene: IaaS, PaaS og SaaS
- Fordeler og ulemper med skyteknologi
- Hvordan skytjenester brukes i praksis`,
    },
    {
      id: 'im-1-4-def-1',
      type: 'definition',
      title: 'Nettskyen',
      content: `**Nettskyen** (cloud computing) er levering av IT-tjenester over internett. I stedet for å kjøpe og drifte egne servere, leier du kapasitet fra store leverandører som Microsoft (Azure), Amazon (AWS) eller Google (Google Cloud). Du betaler kun for det du bruker, og kan skalere opp eller ned etter behov.`,
    },
    {
      id: 'im-1-4-text-1',
      type: 'text',
      title: 'De tre tjenestemodellene',
      content: `### IaaS, PaaS og SaaS

Skytjenester leveres i tre hovedmodeller, avhengig av hvor mye leverandøren tar ansvar for:

**IaaS - Infrastructure as a Service:**
Du leier grunnleggende infrastruktur: servere, lagring og nettverk. Du installerer og drifter programvaren selv.
- Eksempler: Amazon EC2, Microsoft Azure Virtual Machines, Google Compute Engine
- For: IT-avdelinger som trenger fleksibilitet

**PaaS - Platform as a Service:**
Du får en ferdig plattform å utvikle og kjøre applikasjoner på. Du slipper å tenke på servere og operativsystemer.
- Eksempler: Google App Engine, Heroku, Azure App Service
- For: Utviklere som vil fokusere på koden, ikke infrastrukturen

**SaaS - Software as a Service:**
Ferdig programvare du bruker direkte i nettleseren. Leverandøren tar seg av alt teknisk.
- Eksempler: Google Workspace, Microsoft 365, Canva, Figma
- For: Alle brukere som trenger programvare uten teknisk oppsett

### En analogi
Tenk på det som pizza:
- **IaaS** = Du får ingredienser og ovn, du lager pizzaen selv
- **PaaS** = Du får ferdig deig og topping, du setter den sammen
- **SaaS** = Du får ferdig pizza levert på døren`,
    },
    {
      id: 'im-1-4-text-2',
      type: 'text',
      title: 'Samarbeidsverktøy i skyen',
      content: `### Samarbeidsverktøy

Skytjenester gjør det mulig å samarbeide i sanntid, uansett hvor deltakerne befinner seg.

**Google Workspace:**
- Google Docs, Sheets, Slides - samskriving i sanntid
- Google Drive - delt fillagring
- Google Meet - videomøter

**Microsoft 365:**
- Word, Excel, PowerPoint - nettversjoner med samarbeid
- OneDrive - skylagring
- Teams - kommunikasjon og videomøter

**Andre verktøy:**
- Figma - samarbeidsdesign i sanntid
- Notion - delt notater og prosjektstyring
- Trello/Asana - oppgavestyring
- GitHub - samarbeid om kode

### Fordeler og ulemper med skyen

**Fordeler:** Tilgjengelig overalt, automatisk sikkerhetskopiering, lett å dele og samarbeide, skalerer etter behov, ingen vedlikehold av maskinvare.

**Ulemper:** Krever internett, personvernbekymringer (data lagres hos tredjepart), løpende kostnader, avhengig av leverandørens oppetid, kan være tregt med store filer.`,
    },
    {
      id: 'im-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Skytjenester i medieproduksjon',
      problem: 'Et medieproduksjonsteam med fem personer jobber fra ulike steder. De trenger å dele store videofiler, samarbeide om manus og gi hverandre tilbakemelding. Hvilke skytjenester vil du anbefale?',
      solution: `**Fildeling:** Google Drive eller OneDrive for deling av store filer. For svært store videofiler (over 15 GB) kan Dropbox Professional eller Frame.io være bedre egnet.

**Samskriving av manus:** Google Docs for sanntidsredigering med kommentarfunksjon, slik at alle kan bidra samtidig.

**Tilbakemelding på video:** Frame.io er spesiallaget for video-tilbakemelding med tidskodede kommentarer direkte på videoen.

**Kommunikasjon:** Slack eller Microsoft Teams for daglig kommunikasjon og Zoom/Google Meet for videomøter.

**Prosjektstyring:** Trello eller Notion for å holde oversikt over oppgaver og frister.`,
    },
    {
      id: 'im-1-4-summary',
      type: 'text',
      content: `## Oppsummering

- Cloud computing leverer IT-tjenester over internett i stedet for lokalt.
- De tre skymodellene er IaaS (infrastruktur), PaaS (plattform) og SaaS (programvare).
- Google Workspace og Microsoft 365 er populære skybaserte samarbeidsverktøy.
- Fordeler med skyen inkluderer fleksibilitet, skalerbarhet og tilgang fra alle enheter.
- Ulemper inkluderer avhengighet av internett, personvern og leverandørinnlåsing.
- Sikkerhetskopiering i skyen beskytter data mot tap ved maskinvarefeil.`,
    },
    {
      id: 'im-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-1-4-ex-1',
        number: '1.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «nettskyen» i IT-sammenheng?',
        options: [
          { id: 'a', text: 'En spesiell type trådløst nettverk', isCorrect: false, feedback: 'Nettskyen handler om tjenester levert over internett, ikke om nettverkstypen.' },
          { id: 'b', text: 'IT-tjenester levert over internett fra store datasentre', isCorrect: true },
          { id: 'c', text: 'En type programvare som bare fungerer offline', isCorrect: false, feedback: 'Skytjenester krever nettopp internett-tilkobling.' },
          { id: 'd', text: 'Lagring av filer bare på din egen datamaskin', isCorrect: false, feedback: 'Det er lokal lagring, ikke skylagring.' },
        ],
        solution: 'Nettskyen er IT-ressurser (lagring, databehandling, programvare) som leveres over internett fra store datasentre eid av leverandører som Microsoft, Amazon og Google.',
      },
    },
    {
      id: 'im-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-1-4-ex-2',
        number: '1.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken skytjenestemodell gir deg ferdig programvare du bruker direkte i nettleseren?',
        options: [
          { id: 'a', text: 'IaaS', isCorrect: false, feedback: 'IaaS gir deg infrastruktur som servere og lagring.' },
          { id: 'b', text: 'PaaS', isCorrect: false, feedback: 'PaaS gir en utviklingsplattform.' },
          { id: 'c', text: 'SaaS', isCorrect: true },
          { id: 'd', text: 'DaaS', isCorrect: false, feedback: 'DaaS (Desktop as a Service) finnes, men er ikke en av de tre hovedmodellene.' },
        ],
        solution: 'SaaS (Software as a Service) gir deg ferdig programvare i nettleseren. Google Docs, Canva og Microsoft 365 Online er eksempler på SaaS.',
      },
    },
    {
      id: 'im-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-1-4-ex-3',
        number: '1.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom IaaS, PaaS og SaaS med egne ord. Bruk gjerne pizza-analogien eller en egen analogi.',
        hints: ['Tenk på hvem som har ansvaret for hva i hver modell.'],
        solution: 'IaaS: Du leier den grunnleggende infrastrukturen (servere, lagring) og gjør resten selv - som å leie et kjøkken. PaaS: Du får en ferdig plattform å bygge på - som å få deig og ingredienser. SaaS: Du bruker ferdig programvare - som å bestille ferdig pizza. Jo høyere i modellen, jo mindre teknisk ansvar har du.',
      },
    },
    {
      id: 'im-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-1-4-ex-4',
        number: '1.4.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en viktig ulempe med skytjenester?',
        options: [
          { id: 'a', text: 'De er alltid dyrere enn lokal programvare', isCorrect: false, feedback: 'Mange skytjenester er gratis eller billigere enn lokal programvare.' },
          { id: 'b', text: 'De krever internett-tilkobling for å fungere', isCorrect: true },
          { id: 'c', text: 'De kan aldri brukes til samarbeid', isCorrect: false, feedback: 'Samarbeid er nettopp en av de store fordelene.' },
          { id: 'd', text: 'De er alltid tregere enn lokal programvare', isCorrect: false, feedback: 'For mange oppgaver er hastigheten sammenlignbar.' },
        ],
        solution: 'En viktig ulempe er at skytjenester krever internett-tilkobling. Uten internett mister du tilgangen til filene og programmene. Noen tjenester tilbyr offline-modus, men med begrenset funksjonalitet.',
      },
    },
    {
      id: 'im-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-1-4-ex-5',
        number: '1.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn tre skytjenester du bruker i hverdagen og forklar hvilken tjenestemodell (IaaS, PaaS eller SaaS) de tilhører.',
        hints: ['De fleste tjenester vanlige brukere møter i hverdagen er SaaS.'],
        solution: 'Eksempler: (1) Google Docs - SaaS (ferdig tekstbehandler i nettleseren), (2) Netflix - SaaS (ferdig strømmetjeneste), (3) iCloud/Google Drive - SaaS (ferdig lagringstjeneste). De fleste forbrukertjenester er SaaS fordi brukerne ikke trenger å tenke på infrastruktur eller plattform.',
      },
    },
    {
      id: 'im-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-1-4-ex-6',
        number: '1.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En skole vurderer å flytte all sin IT-infrastruktur til skyen. Diskuter fordeler og ulemper ved denne beslutningen, og vurder personvern spesielt med tanke på at det dreier seg om elevdata.',
        hints: ['Tenk på GDPR, datalagring i utlandet, kostnader over tid, og hva som skjer ved internettbrudd.'],
        solution: 'Fordeler: Slipper å vedlikeholde egne servere, skalerer etter behov, automatisk sikkerhetskopiering, lett å samarbeide. Ulemper: Avhengig av internett, løpende kostnader kan bli høye, personvern er en utfordring - elevdata kan lagres utenfor Norge/EU, som kan bryte med GDPR. Skolen bør velge leverandører med datalagring i EU, ha god databehandleravtale, og vurdere hybrid løsning der sensitive data lagres lokalt.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.5: Digital kommunikasjon og samarbeid
// ============================================================================

export const CHAPTER_IM_VG1_1_5: TextbookChapter = {
  id: 'im-vg1-1-5',
  courseId: 'im-vg1',
  chapterNumber: '1.5',
  title: 'Digital kommunikasjon og samarbeid',
  description: 'Lær om ulike verktøy for digital kommunikasjon og samarbeid, fra e-post og videokonferanse til prosjektstyringsverktøy.',
  estimatedMinutes: 50,
  prevChapter: 'im-vg1-1-4',
  nextChapter: 'im-vg1-1-6',
  competenceGoals: [
    'bruke digitale verktøy for kommunikasjon og samarbeid på en hensiktsmessig og profesjonell måte',
  ],
  keyTerms: [
    { term: 'Asynkron kommunikasjon', definition: 'Kommunikasjon der deltakerne ikke trenger å være til stede samtidig, f.eks. e-post.' },
    { term: 'Synkron kommunikasjon', definition: 'Kommunikasjon i sanntid der alle er til stede samtidig, f.eks. videokonferanse.' },
    { term: 'Prosjektstyringsverktøy', definition: 'Digitale verktøy for å planlegge, organisere og følge opp oppgaver i et prosjekt.' },
  ],
  content: [
    {
      id: 'im-1-5-intro',
      type: 'text',
      content: `## Digital kommunikasjon og samarbeid

I arbeidslivet bruker vi daglig en rekke digitale verktøy for å kommunisere og samarbeide. Å velge riktig verktøy til riktig situasjon er en viktig ferdighet innen informasjonsteknologi og medieproduksjon.

I dette kapittelet skal du lære:
- Forskjellen mellom synkron og asynkron kommunikasjon
- Når du bør bruke e-post, chat, video eller telefon
- Hvordan prosjektstyringsverktøy effektiviserer teamarbeid
- Nettvett og profesjonell digital kommunikasjon`,
    },
    {
      id: 'im-1-5-def-1',
      type: 'definition',
      title: 'Synkron vs. asynkron kommunikasjon',
      content: `**Synkron kommunikasjon** skjer i sanntid - alle deltakere er til stede samtidig. Eksempler: videokonferanse, telefonsamtale, chat i sanntid. Fordel: umiddelbar tilbakemelding. Ulempe: alle må være tilgjengelige samtidig.

**Asynkron kommunikasjon** skjer med tidsforsinkelse - deltakerne svarer når det passer. Eksempler: e-post, kommentarer i dokumenter, opptaksmeldinger. Fordel: fleksibelt, gir tid til ettertanke. Ulempe: kan ta tid å få svar.`,
    },
    {
      id: 'im-1-5-text-1',
      type: 'text',
      title: 'E-post som kommunikasjonsverktøy',
      content: `### Profesjonell e-post

E-post er fortsatt det viktigste formelle kommunikasjonsverktøyet i arbeidslivet. God e-postkommunikasjon er en ferdighet mange arbeidsgivere verdsetter.

**Gode e-postvaner:**
- Bruk en tydelig og informativ emne-linje
- Start med en høflig hilsen
- Skriv kort og presist - kom til poenget
- Bruk avsnitt for lesbarhet
- Avslutt med en tydelig handlingsoppfordring (hva trenger du svar på?)
- Sjekk mottakerlisten før du sender
- Bruk «svar alle» kun når det er nødvendig

**Vanlige feil:**
- Uklare emnelinjer som «Hei» eller «Spørsmål»
- For lange e-poster uten struktur
- Glemme vedlegg
- Sende til feil person`,
    },
    {
      id: 'im-1-5-text-2',
      type: 'text',
      title: 'Videokonferanse og prosjektstyring',
      content: `### Videokonferanse

Etter pandemien har videomøter blitt en naturlig del av arbeidslivet. Vanlige verktøy er Zoom, Google Meet og Microsoft Teams.

**Tips for gode videomøter:**
- Test lyd og bilde før møtet
- Finn et rolig sted med god belysning
- Slå av mikrofonen når du ikke snakker
- Bruk kamera - det gir bedre kontakt
- Ha en agenda og hold deg til den
- Oppsummer beslutninger og oppgaver til slutt

### Prosjektstyringsverktøy

Når flere personer jobber sammen, trengs det struktur. Prosjektstyringsverktøy hjelper med å holde oversikt.

**Populære verktøy:**
- **Trello:** Visuelt tavle-basert system med kort og kolonner (Kanban)
- **Asana:** Oppgavelister og tidslinje for større prosjekter
- **Notion:** Kombinerer notater, databaser og oppgavestyring
- **Jira:** Mye brukt i IT-bransjen for programvareutvikling
- **Monday.com:** Fleksibelt verktøy med mange visninger

**Kanban-metoden:**
Et populært system der oppgaver flyttes mellom kolonner: «Å gjøre» → «Pågår» → «Ferdig». Gir god visuell oversikt over status.`,
    },
    {
      id: 'im-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Velge kommunikasjonsform',
      problem: 'I hvilke situasjoner bør du bruke e-post, chat, videosamtale og prosjektstyringsverktøy?',
      solution: `**E-post:** Formelle henvendelser, dokumentasjon som skal kunne gjenfinnes, kommunikasjon med eksterne kontakter, saker som ikke haster.

**Chat (Teams/Slack):** Raske spørsmål, uformell kommunikasjon i teamet, deling av lenker og filer, løpende oppdateringer.

**Videosamtale:** Diskusjoner som krever dialog, presentasjoner, vanskelige samtaler der kroppsspråk er viktig, kreative idémyldringsmøter.

**Prosjektstyringsverktøy:** Tildeling av oppgaver med frister, statusoversikt for hele teamet, prioritering av oppgaver, langsiktig planlegging.`,
    },
    {
      id: 'im-1-5-summary',
      type: 'text',
      content: `## Oppsummering

- Digital kommunikasjon omfatter e-post, chat, videokonferanse og samarbeidsplattformer.
- Samarbeidsplattformer som Teams, Slack og Google Workspace gjør teamarbeid effektivt.
- Prosjektstyringsverktøy som Trello og Jira hjelper med planlegging og oppfølging.
- Skybasert dokumentdeling gjør at flere kan jobbe på samme dokument samtidig.
- God digital møtekultur inkluderer forberedelse, tydelig agenda og aktiv deltakelse.
- Valg av kommunikasjonsverktøy bør tilpasses situasjonen og målgruppen.`,
    },
    {
      id: 'im-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-1-5-ex-1',
        number: '1.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken kommunikasjonsform er asynkron?',
        options: [
          { id: 'a', text: 'Videokonferanse', isCorrect: false, feedback: 'Videokonferanse er synkron - alle er til stede samtidig.' },
          { id: 'b', text: 'Telefonsamtale', isCorrect: false, feedback: 'Telefonsamtale er synkron.' },
          { id: 'c', text: 'E-post', isCorrect: true },
          { id: 'd', text: 'Ansikt-til-ansikt-samtale', isCorrect: false, feedback: 'Det er den mest direkte formen for synkron kommunikasjon.' },
        ],
        solution: 'E-post er asynkron fordi avsender og mottaker ikke trenger å være til stede samtidig. Mottaker kan lese og svare når det passer.',
      },
    },
    {
      id: 'im-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-1-5-ex-2',
        number: '1.5.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er Kanban-metoden?',
        options: [
          { id: 'a', text: 'En type programmeringsspråk', isCorrect: false, feedback: 'Kanban er ikke et programmeringsspråk.' },
          { id: 'b', text: 'Et system der oppgaver flyttes mellom kolonner: Å gjøre, Pågår, Ferdig', isCorrect: true },
          { id: 'c', text: 'Et operativsystem fra Japan', isCorrect: false, feedback: 'Kanban er en prosjektstyringsmetode, ikke et operativsystem.' },
          { id: 'd', text: 'Et videokonferanseverktøy', isCorrect: false, feedback: 'Kanban er en metode for oppgavestyring.' },
        ],
        solution: 'Kanban er en visuell metode for oppgavestyring der oppgaver representeres som kort som flyttes mellom kolonner. Det gir god oversikt over status og fremdrift.',
      },
    },
    {
      id: 'im-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-1-5-ex-3',
        number: '1.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en profesjonell e-post til en bedrift der du spør om muligheten for en hospitering i forbindelse med medieproduksjon. Bruk riktig struktur med emnelinje, hilsen, innhold og avslutning.',
        hints: ['Husk: tydelig emnelinje, kort presentasjon av deg selv, hva du ønsker, og en avsluttende høflighetssetning.'],
        solution: 'Emne: Forespørsel om hospitering innen medieproduksjon. Hei, Mitt navn er [navn], og jeg er elev ved [skole] på VG1 informasjonsteknologi og medieproduksjon. I forbindelse med faget ønsker jeg å hospitere hos dere for å lære mer om medieproduksjon i praksis. Er det mulig å komme på besøk i uke [X]? Jeg er fleksibel på dager. Vennlig hilsen [navn, skole, kontaktinfo].',
      },
    },
    {
      id: 'im-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-1-5-ex-4',
        number: '1.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign tre prosjektstyringsverktøy (Trello, Notion og Asana). Beskriv hva hvert verktøy er best egnet til.',
        hints: ['Tenk på enkelhet, fleksibilitet og størrelse på prosjekt.'],
        solution: 'Trello: Best for enkle prosjekter med visuell Kanban-tavle. Lett å lære. Notion: Best for team som trenger kombinasjon av notater, databaser og oppgavestyring. Svært fleksibelt. Asana: Best for større prosjekter med mange deltakere, tidslinje og avhengigheter mellom oppgaver. Mer strukturert enn Trello.',
      },
    },
    {
      id: 'im-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-1-5-ex-5',
        number: '1.5.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Når er videokonferanse et bedre valg enn e-post?',
        options: [
          { id: 'a', text: 'Når du skal sende et dokument til en kollega', isCorrect: false, feedback: 'For ren filoverføring er e-post enklere.' },
          { id: 'b', text: 'Når du trenger raske avklaringer i en diskusjon der kroppsspråk er viktig', isCorrect: true },
          { id: 'c', text: 'Når du skal informere 200 ansatte om en endring', isCorrect: false, feedback: 'For enveis massekommunikasjon kan e-post være mer effektivt.' },
          { id: 'd', text: 'Når saken ikke haster og du trenger dokumentasjon', isCorrect: false, feedback: 'Da er e-post bedre fordi det gir skriftlig dokumentasjon.' },
        ],
        solution: 'Videokonferanse er best når du trenger dialog, diskusjon og umiddelbar tilbakemelding, spesielt i situasjoner der kroppsspråk og tonefall er viktig for å unngå misforståelser.',
      },
    },
    {
      id: 'im-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-1-5-ex-6',
        number: '1.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en plan for hvordan et prosjektteam på fire elever kan bruke digitale verktøy for å gjennomføre en videoproduksjon over fire uker. Beskriv hvilke verktøy dere bruker til kommunikasjon, fildeling, oppgavestyring og feedback.',
        hints: ['Tenk på hele prosessen: planlegging, opptak, redigering, ferdigstilling.'],
        solution: 'Kommunikasjon: Discord/Teams for daglig chat og ukentlige videomøter. Fildeling: Google Drive for manus og planleggingsdokumenter, Dropbox for store videofiler. Oppgavestyring: Trello med kolonnene Planlegging, Opptak, Redigering, Kvalitetssjekk og Ferdig. Feedback: Frame.io for tidskodert feedback på videoklipp. Uke 1: Planlegging og manuskriving i Docs. Uke 2-3: Opptak med daglige statusoppdateringer. Uke 4: Redigering og feedback-runder.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.6: Tallsystemer og datarepresentasjon
// ============================================================================

export const CHAPTER_IM_VG1_1_6: TextbookChapter = {
  id: 'im-vg1-1-6',
  courseId: 'im-vg1',
  chapterNumber: '1.6',
  title: 'Tallsystemer og datarepresentasjon',
  description: 'Forstå hvordan datamaskiner representerer data med binære og heksadesimale tall, ASCII-koder og piksler.',
  estimatedMinutes: 60,
  prevChapter: 'im-vg1-1-5',
  nextChapter: 'im-vg1-1-7',
  competenceGoals: [
    'gjøre rede for hvordan data representeres digitalt, inkludert binære tall, tegnsett og bildepunkter',
  ],
  keyTerms: [
    { term: 'Binært tallsystem', definition: 'Tallsystem med grunntall 2 som kun bruker sifrene 0 og 1.' },
    { term: 'Heksadesimalt tallsystem', definition: 'Tallsystem med grunntall 16 som bruker sifrene 0-9 og bokstavene A-F.' },
    { term: 'ASCII', definition: 'American Standard Code for Information Interchange - tegnsett der hvert tegn har en numerisk kode.' },
    { term: 'Piksel', definition: 'Det minste bildepunktet i et digitalt bilde, med en bestemt fargeverdi.' },
    { term: 'Bit', definition: 'Den minste dataenheten - kan være 0 eller 1.' },
    { term: 'Byte', definition: 'En gruppe på 8 bit som kan representere 256 ulike verdier.' },
  ],
  content: [
    {
      id: 'im-1-6-intro',
      type: 'text',
      content: `## Tallsystemer og datarepresentasjon

Alt en datamaskin gjør, koker ned til nuller og enere. Bilder, tekst, lyd, videoer - alt lagres som lange sekvenser av 0 og 1. For å forstå hvordan dette fungerer, må vi lære om tallsystemer og datarepresentasjon.

I dette kapittelet skal du lære:
- Hvordan det binære tallsystemet fungerer
- Hvordan man konverterer mellom binært, desimalt og heksadesimalt
- Hvordan tekst representeres med ASCII og Unicode
- Hvordan bilder bygges opp av piksler med fargeverdier`,
    },
    {
      id: 'im-1-6-def-1',
      type: 'definition',
      title: 'Bit og byte',
      content: `En **bit** er den minste dataenheten og kan ha verdien 0 eller 1. En **byte** består av 8 bit og kan representere $2^8 = 256$ ulike verdier (0-255).

**Dataenheter:**
| Enhet | Størrelse |
|-------|-----------|
| 1 bit | 0 eller 1 |
| 1 byte | 8 bit |
| 1 kilobyte (KB) | 1024 byte |
| 1 megabyte (MB) | 1024 KB |
| 1 gigabyte (GB) | 1024 MB |
| 1 terabyte (TB) | 1024 GB |`,
    },
    {
      id: 'im-1-6-text-1',
      type: 'text',
      title: 'Det binære tallsystemet',
      content: `### Binære tall

Vi bruker normalt det desimale tallsystemet (grunntall 10) med sifrene 0-9. Datamaskiner bruker det binære tallsystemet (grunntall 2) med kun sifrene 0 og 1.

**Posisjonsverdier i binært:**
Akkurat som i desimalt har hvert siffer en posisjonsverdi, men basert på potenser av 2:

| Posisjon | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|----------|---|---|---|---|---|---|---|---|
| Verdi | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Konvertering binært → desimalt:**
For å konvertere $1011_2$ til desimalt legger vi sammen posisjonsverdiene der det står 1:
$1 \\cdot 8 + 0 \\cdot 4 + 1 \\cdot 2 + 1 \\cdot 1 = 11_{10}$

**Konvertering desimalt → binært:**
Del tallet gjentatte ganger på 2 og noter restene:
- $13 \\div 2 = 6$ rest $1$
- $6 \\div 2 = 3$ rest $0$
- $3 \\div 2 = 1$ rest $1$
- $1 \\div 2 = 0$ rest $1$

Les restene baklengs: $13_{10} = 1101_2$`,
    },
    {
      id: 'im-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Binær konvertering',
      problem: 'Konverter det binære tallet $11010110_2$ til desimalt.',
      solution: `Vi legger sammen posisjonsverdiene der det står 1:

$1 \\cdot 128 + 1 \\cdot 64 + 0 \\cdot 32 + 1 \\cdot 16 + 0 \\cdot 8 + 1 \\cdot 4 + 1 \\cdot 2 + 0 \\cdot 1$

$= 128 + 64 + 16 + 4 + 2 = 214_{10}$

Tallet $11010110_2$ i binært er altså $214$ i desimalt.`,
    },
    {
      id: 'im-1-6-text-2',
      type: 'text',
      title: 'Heksadesimale tall',
      content: `### Heksadesimale tall

Det heksadesimale tallsystemet (grunntall 16) bruker sifrene 0-9 og bokstavene A-F:

| Heks | Desimal | Binær |
|------|---------|-------|
| 0 | 0 | 0000 |
| 1 | 1 | 0001 |
| ... | ... | ... |
| 9 | 9 | 1001 |
| A | 10 | 1010 |
| B | 11 | 1011 |
| C | 12 | 1100 |
| D | 13 | 1101 |
| E | 14 | 1110 |
| F | 15 | 1111 |

Heksadesimale tall brukes mye i IT fordi hvert heksadesimalt siffer representerer nøyaktig 4 bit. Et byte (8 bit) kan skrives med bare to heksadesimale sifre.

**Eksempel:** Fargen hvit i HTML skrives som \`#FFFFFF\`, der FF = 255 i desimalt = 11111111 i binært.`,
    },
    {
      id: 'im-1-6-text-3',
      type: 'text',
      title: 'Tekst- og bilderepresentasjon',
      content: `### ASCII og Unicode

For at datamaskinen skal kunne lagre tekst, får hvert tegn en tallkode.

**ASCII** (7 bit) dekker 128 tegn: engelske bokstaver, tall og vanlige tegn.
- A = 65, B = 66, a = 97, 0 = 48
- Mellomrom = 32, ! = 33

**Unicode** er en utvidelse som dekker over 140 000 tegn fra alle verdens skriftspråk, inkludert norske tegn (æ, ø, å), kinesiske, arabiske, og emoji.

### Pikselrepresentasjon

Et digitalt bilde er et rutenett av piksler. Hver piksel har en fargeverdi.

**RGB-fargemodellen:**
Hver piksel beskrives med tre verdier (rød, grønn, blå), hver fra 0-255:
- Rød: (255, 0, 0)
- Grønn: (0, 255, 0)
- Blå: (0, 0, 255)
- Hvit: (255, 255, 255)
- Svart: (0, 0, 0)

Hver fargeverdi trenger 8 bit (1 byte), så en piksel trenger $3 \\times 8 = 24$ bit.
Et bilde på $1920 \\times 1080$ piksler trenger: $1920 \\times 1080 \\times 3 = 6\\,220\\,800$ byte $\\approx 6$ MB (ukomprimert).`,
    },
    {
      id: 'im-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-1-6-ex-1',
        number: '1.6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det binære tallet $1010_2$ i desimalt?',
        options: [
          { id: 'a', text: '8', isCorrect: false, feedback: '$1000_2 = 8$, men her er det flere enere.' },
          { id: 'b', text: '10', isCorrect: true },
          { id: 'c', text: '12', isCorrect: false, feedback: '$1100_2 = 12$, men det er et annet tall.' },
          { id: 'd', text: '5', isCorrect: false, feedback: '$101_2 = 5$, men her har vi fire sifre.' },
        ],
        solution: '$1010_2 = 1 \\cdot 8 + 0 \\cdot 4 + 1 \\cdot 2 + 0 \\cdot 1 = 8 + 2 = 10_{10}$',
      },
    },
    {
      id: 'im-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-1-6-ex-2',
        number: '1.6.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Konverter det desimale tallet 42 til binært. Vis utregningen steg for steg.',
        hints: ['Del gjentatte ganger på 2 og noter restene. Les restene baklengs.'],
        solution: '$42 \\div 2 = 21$ rest $0$, $21 \\div 2 = 10$ rest $1$, $10 \\div 2 = 5$ rest $0$, $5 \\div 2 = 2$ rest $1$, $2 \\div 2 = 1$ rest $0$, $1 \\div 2 = 0$ rest $1$. Lest baklengs: $42_{10} = 101010_2$.',
      },
    },
    {
      id: 'im-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-1-6-ex-3',
        number: '1.6.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva representerer fargekoden #FF0000 i RGB?',
        options: [
          { id: 'a', text: 'Grønn', isCorrect: false, feedback: 'Grønn er #00FF00.' },
          { id: 'b', text: 'Blå', isCorrect: false, feedback: 'Blå er #0000FF.' },
          { id: 'c', text: 'Rød', isCorrect: true },
          { id: 'd', text: 'Hvit', isCorrect: false, feedback: 'Hvit er #FFFFFF.' },
        ],
        solution: '#FF0000 betyr rød=FF (255), grønn=00 (0), blå=00 (0). Kun den røde kanalen har verdi, altså er fargen ren rød.',
      },
    },
    {
      id: 'im-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-1-6-ex-4',
        number: '1.6.4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk ASCII-tabellen til å skrive bokstavene som svarer til kodene 72, 101, 108, 108, 111. Hva blir ordet?',
        hints: ['H=72, e=101, l=108, o=111.'],
        solution: '72=H, 101=e, 108=l, 108=l, 111=o. Ordet er «Hello».',
      },
    },
    {
      id: 'im-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-1-6-ex-5',
        number: '1.6.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn filstørrelsen (ukomprimert) for et bilde med oppløsning 3840 x 2160 piksler (4K) der hver piksel har 24 bit (RGB). Oppgi svaret i megabyte.',
        hints: ['Antall piksler ganger 3 byte per piksel, deretter del på 1 048 576 for å få MB.'],
        solution: 'Antall piksler: $3840 \\times 2160 = 8\\,294\\,400$. Hver piksel trenger 3 byte (24 bit). Totalt: $8\\,294\\,400 \\times 3 = 24\\,883\\,200$ byte $= 24\\,883\\,200 / 1\\,048\\,576 \\approx 23{,}7$ MB.',
      },
    },
    {
      id: 'im-1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-1-6-ex-6',
        number: '1.6.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Konverter det heksadesimale tallet $\\text{2A}_{16}$ til binært og desimalt. Forklar hvorfor heksadesimale tall er nyttige i IT.',
        hints: ['Hvert heksadesimalt siffer tilsvarer nøyaktig 4 binære sifre.'],
        solution: '$2_{16} = 0010_2$ og $A_{16} = 1010_2$, altså $2A_{16} = 00101010_2$. Desimalt: $2 \\cdot 16 + 10 \\cdot 1 = 42_{10}$. Heksadesimale tall er nyttige fordi de er en kompakt måte å skrive binære tall på - hvert heksadesimalt siffer representerer nøyaktig 4 bit, så en byte kan skrives med bare to heksadesimale sifre i stedet for åtte binære.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.7: Digitalisering og samfunnsendringer
// ============================================================================

export const CHAPTER_IM_VG1_1_7: TextbookChapter = {
  id: 'im-vg1-1-7',
  courseId: 'im-vg1',
  chapterNumber: '1.7',
  title: 'Digitalisering og samfunnsendringer',
  description: 'Forstå hvordan digitalisering og kunstig intelligens endrer samfunnet, og utvikle kritisk tenkning om teknologiens rolle.',
  estimatedMinutes: 45,
  prevChapter: 'im-vg1-1-6',
  nextChapter: undefined,
  competenceGoals: [
    'reflektere over hvordan digitalisering og teknologiutvikling påvirker samfunn, arbeidsliv og individ',
  ],
  keyTerms: [
    { term: 'Digitalisering', definition: 'Prosessen der analoge løsninger erstattes av digitale, og hvordan dette endrer måten vi lever og arbeider på.' },
    { term: 'Kunstig intelligens (AI)', definition: 'Datasystemer som kan utføre oppgaver som normalt krever menneskelig intelligens, som å gjenkjenne bilder eller skrive tekst.' },
    { term: 'Algoritme', definition: 'En trinnvis oppskrift som en datamaskin følger for å løse et problem.' },
    { term: 'Filterboble', definition: 'Når algoritmer bare viser deg innhold som bekrefter dine eksisterende synspunkter.' },
    { term: 'Digital kompetanse', definition: 'Evnen til å bruke digitale verktøy trygt, kritisk og kreativt.' },
  ],
  content: [
    {
      id: 'im-1-7-intro',
      type: 'text',
      content: `## Digitalisering og samfunnsendringer

Digitaliseringen har forandret nesten alle deler av samfunnet. Fra hvordan vi handler, kommuniserer og underholder oss, til hvordan vi jobber, lærer og deltar i demokratiet. I mediebransjen har endringene vært spesielt dramatiske.

I dette kapittelet skal du lære:
- Hva digitalisering betyr og hvordan det påvirker samfunnet
- Hvordan kunstig intelligens (AI) endrer mediebransjen
- Hvordan algoritmene påvirker medievanene våre
- Hvorfor kritisk tenkning er viktigere enn noensinne`,
    },
    {
      id: 'im-1-7-def-1',
      type: 'definition',
      title: 'Digitalisering',
      content: `**Digitalisering** er prosessen der analoge prosesser og tjenester gjøres digitale. Det handler ikke bare om å ta i bruk ny teknologi, men om at teknologien endrer måten vi organiserer arbeid, kommunikasjon og tjenester på.

Eksempler: Papiravis ble nettavis, CD-plater ble strømmetjenester, kontorarbeid ble fjernarbeid, fysisk handel ble netthandel, håndskrevne brev ble e-post.`,
    },
    {
      id: 'im-1-7-text-1',
      type: 'text',
      title: 'Kunstig intelligens og medieproduksjon',
      content: `### AI i mediebransjen

Kunstig intelligens (AI) har skapt store endringer i medieproduksjon:

**Tekst og innhold:**
- ChatGPT og lignende verktøy kan generere tekst, artikler og manus
- AI kan oversette mellom språk i sanntid
- Automatisk tekstsammendrag og korrektur

**Bilde og video:**
- AI kan generere bilder fra tekstbeskrivelser (Midjourney, DALL-E)
- Automatisk bildebehandling og retusjering
- Deepfake-teknologi kan lage realistiske falske videoer

**Lyd og musikk:**
- AI kan klone stemmer og generere tale
- Automatisk musikkomposisjon
- Støyfjerning og lydforsterkning

### Etiske utfordringer med AI

- **Opphavsrett:** Hvem eier innhold generert av AI?
- **Desinformasjon:** Deepfakes kan brukes til å spre falsk informasjon
- **Arbeidsplasser:** Vil AI erstatte kreative yrker?
- **Bias:** AI kan forsterke fordommer som finnes i treningsdataene
- **Personvern:** AI-systemer trenger store mengder data for å trenes`,
    },
    {
      id: 'im-1-7-text-2',
      type: 'text',
      title: 'Medievaner og algoritmenes makt',
      content: `### Algoritmer og filterbobler

Sosiale medier og strømmetjenester bruker algoritmer til å velge hva du ser. Algoritmen analyserer hva du liker, deler og bruker tid på, og viser deg mer av det samme.

**Konsekvenser:**
- **Filterbobler:** Du ser bare synspunkter du allerede er enig i
- **Ekkokammer:** Grupper der alle bekrefter hverandres meninger
- **Avhengighet:** Algoritmene er designet for å holde deg på plattformen lengst mulig
- **Polarisering:** Ekstremt innhold får mer oppmerksomhet og spres raskere

### Kritisk tenkning i den digitale tidsalderen

Evnen til å vurdere informasjon kritisk er viktigere enn noensinne:
- **Sjekk kilden:** Hvem står bak informasjonen? Hva er motivasjonen?
- **Kryss-sjekk:** Finn samme informasjon fra flere uavhengige kilder
- **Vær skeptisk til overskrifter:** Mange er designet for klikk, ikke nøyaktighet
- **Forstå algoritmen:** Vær bevisst på at det du ser er filtrert
- **Tenk før du deler:** Er informasjonen verifisert?`,
    },
    {
      id: 'im-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Avsløre desinformasjon',
      problem: 'Du ser en oppsiktsvekkende nyhetsartikkel om en kjent person som deles mye i sosiale medier. Bildet ser ekte ut, men noe virker rart. Hvordan bør du gå frem for å sjekke om artikkelen er ekte?',
      solution: `**Steg for å avsløre desinformasjon:**

1. **Sjekk kilden:** Er artikkelen publisert av et anerkjent nyhetsmedium, eller er det en ukjent nettside? Se på URL-en - ligner den på en kjent avis men har en litt annen adresse?

2. **Omvendt bildesøk:** Last opp bildet i Google Bildesøk for å se om det er brukt andre steder i en annen kontekst.

3. **Kryss-sjekk:** Søk etter saken hos etablerte medier (NRK, VG, Dagbladet). Hvis ingen store medier dekker en «stor nyhet», er det et varselskilt.

4. **Se etter AI-tegn:** Er bildet AI-generert? Se etter unaturlige detaljer i hender, øyne, bakgrunn og tekst.

5. **Bruk faktasjekkere:** Faktisk.no (Norge) og Snopes.com (internasjonalt) sjekker virale påstander.`,
    },
    {
      id: 'im-1-7-summary',
      type: 'text',
      content: `## Oppsummering

- Digitalisering endrer samfunnet, arbeidslivet og hverdagen grunnleggende.
- Kunstig intelligens og automatisering erstatter noen jobber, men skaper også nye.
- Mediebruk og medievaner endres kontinuerlig med nye plattformer og teknologier.
- Kritisk tenkning om teknologi innebærer å vurdere kilder, påstander og digitalt innhold.
- Digitalisering gir nye muligheter, men også utfordringer knyttet til personvern og ulikhet.
- Forståelse av teknologisk utvikling er viktig for å delta aktivt i samfunnet.`,
    },
    {
      id: 'im-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-1-7-ex-1',
        number: '1.7.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med en «filterboble»?',
        options: [
          { id: 'a', text: 'Et antivirusprogram som filtrerer skadelig innhold', isCorrect: false, feedback: 'Filterboble handler om innholdsalgoritmer, ikke sikkerhet.' },
          { id: 'b', text: 'Når algoritmer bare viser deg innhold som bekrefter dine eksisterende synspunkter', isCorrect: true },
          { id: 'c', text: 'En type kryptering av meldinger', isCorrect: false, feedback: 'Filterboble har ingenting med kryptering å gjøre.' },
          { id: 'd', text: 'Et filformat for bilder', isCorrect: false, feedback: 'Filterboble er et sosialt fenomen, ikke et teknisk format.' },
        ],
        solution: 'En filterboble oppstår når algoritmene i sosiale medier og søkemotorer bare viser deg innhold som matcher dine eksisterende interesser og synspunkter. Dette kan føre til et ensidig verdensbilde.',
      },
    },
    {
      id: 'im-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-1-7-ex-2',
        number: '1.7.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken AI-teknologi kan brukes til å lage falske, men realistiske videoer av virkelige personer?',
        options: [
          { id: 'a', text: 'Blockchain', isCorrect: false, feedback: 'Blockchain er en teknologi for sikker datalagring.' },
          { id: 'b', text: 'Deepfake', isCorrect: true },
          { id: 'c', text: 'Firewall', isCorrect: false, feedback: 'Firewall er en sikkerhetsmekanisme for nettverk.' },
          { id: 'd', text: 'SaaS', isCorrect: false, feedback: 'SaaS er en tjenestemodell for programvare.' },
        ],
        solution: 'Deepfake-teknologi bruker AI til å manipulere video og lyd slik at det ser ut som en person sier eller gjør noe de aldri har gjort. Dette skaper store utfordringer for tillit til medieinnhold.',
      },
    },
    {
      id: 'im-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-1-7-ex-3',
        number: '1.7.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tre eksempler på hvordan digitalisering har endret hverdagen din sammenlignet med hvordan foreldrene dine levde da de var på din alder.',
        hints: ['Tenk på kommunikasjon, underholdning, handel og informasjonstilgang.'],
        solution: 'Eksempler: (1) Kommunikasjon: I dag bruker vi chat og sosiale medier, foreldrene brukte fasttelefon og brev. (2) Underholdning: Vi strømmer musikk og film, de kjøpte CD-er og leide VHS/DVD. (3) Informasjon: Vi googler svar på sekunder, de måtte slå opp i leksikon på biblioteket. (4) Handel: Vi bestiller varer på nett, de handlet i fysiske butikker.',
      },
    },
    {
      id: 'im-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-1-7-ex-4',
        number: '1.7.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn to fordeler og to ulemper ved bruk av AI-verktøy (som ChatGPT) i medieproduksjon.',
        hints: ['Tenk på effektivitet, kvalitet, opphavsrett og autentisitet.'],
        solution: 'Fordeler: (1) Raskere produksjon - AI kan generere utkast, forslag og variasjoner på kort tid. (2) Tilgjengelig for alle - reduserer terskelen for å lage innhold. Ulemper: (1) Opphavsrettsproblemer - uklart hvem som eier AI-generert innhold, og AI kan ha trent på opphavsrettslig beskyttet materiale. (2) Fare for desinformasjon - AI kan generere overbevisende men feilaktig innhold.',
      },
    },
    {
      id: 'im-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-1-7-ex-5',
        number: '1.7.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er det VIKTIGSTE du bør gjøre når du ser en oppsiktsvekkende nyhetsartikkel i sosiale medier?',
        options: [
          { id: 'a', text: 'Dele den med flest mulig så andre også får vite om det', isCorrect: false, feedback: 'Du bør aldri dele uten å verifisere først - det kan bidra til å spre desinformasjon.' },
          { id: 'b', text: 'Sjekke kilden og kryss-sjekke med andre medier', isCorrect: true },
          { id: 'c', text: 'Ignorere den helt fordi alt på sosiale medier er falskt', isCorrect: false, feedback: 'Ikke alt er falskt, men man bør alltid vurdere kritisk.' },
          { id: 'd', text: 'Stole på den fordi mange har delt den', isCorrect: false, feedback: 'Antall delinger sier ingenting om sannhetsgehalten.' },
        ],
        solution: 'Det viktigste er å sjekke kilden og verifisere informasjonen mot uavhengige, etablerte medier. Mange deler saker uten å sjekke, noe som bidrar til spredning av feilinformasjon.',
      },
    },
    {
      id: 'im-1-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-1-7-ex-6',
        number: '1.7.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (ca. 200 ord) der du diskuterer om kunstig intelligens er en trussel eller en mulighet for mediebransjen. Begrunn synspunktene dine med konkrete eksempler.',
        hints: ['Vurder begge sider. Tenk på nye muligheter AI gir, men også hvilke utfordringer det skaper for kvalitet, arbeidsplasser og tillit.'],
        solution: 'AI er både en mulighet og en utfordring for mediebransjen. Muligheter: AI effektiviserer arbeidsprosesser (automatisk teksting, oversettelse, bildebehandling), senker terskelen for innholdsproduksjon, og muliggjør nye kreative uttrykk. Utfordringer: Deepfakes truer tilliten til medieinnhold, AI-generert innhold kan erstatte arbeidsplasser, opphavsrettslige spørsmål er uavklarte, og kvaliteten kan svekkes. Konklusjon: AI er et kraftig verktøy som kan brukes både til gode og dårlige formål. Nøkkelen er å utvikle regelverk, etiske retningslinjer og digital kompetanse slik at teknologien brukes ansvarlig.',
        allowsUpload: true,
      },
    },
    {
      id: 'im-1-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Digitalisering** endrer hvordan vi lever, jobber og kommuniserer
- **AI** skaper nye muligheter i medieproduksjon, men også etiske utfordringer
- **Algoritmer** i sosiale medier kan skape filterbobler og polarisering
- **Kritisk tenkning** er avgjørende for å navigere i det digitale landskapet
- **Kildekritikk** er viktigere enn noensinne med AI-generert innhold`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const IM_VG1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IM_VG1_1_1,
  CHAPTER_IM_VG1_1_2,
  CHAPTER_IM_VG1_1_3,
  CHAPTER_IM_VG1_1_4,
  CHAPTER_IM_VG1_1_5,
  CHAPTER_IM_VG1_1_6,
  CHAPTER_IM_VG1_1_7,
];
