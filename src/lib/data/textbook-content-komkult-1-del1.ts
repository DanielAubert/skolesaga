/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 1 (VG2) - Del 1: Hva er kommunikasjon?
 *
 * Kapittel 1.1–1.5
 *
 * LK20-kompetansemål:
 * - gjøre rede for ulike kommunikasjonsmodeller og kommunikasjonsprosessen
 * - drøfte barrierer i kommunikasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Kommunikasjonsbegrepet
// ============================================================================

export const CHAPTER_KOMKULT_1_1_1: TextbookChapter = {
  id: 'komkult-1-1-1',
  courseId: 'komkult-1',
  chapterNumber: '1.1',
  title: 'Kommunikasjonsbegrepet',
  description: 'Hva kommunikasjon er, definisjoner, dagligkommunikasjon vs. faglig forståelse.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for hva kommunikasjon er og hvorfor det er viktig',
    'skille mellom dagligdags og faglig forståelse av kommunikasjon',
  ],
  content: [
    {
      id: 'kk-1-1-intro',
      type: 'text',
      content: `# Kommunikasjonsbegrepet

Vi kommuniserer hele tiden. Fra vi våkner om morgenen og sjekker telefonen, til vi snakker med venner på skolen eller sender en melding til familien. Men hva betyr egentlig «kommunikasjon»? Og er det forskjell på hvordan vi bruker ordet til daglig og hvordan det forstås faglig?

I dette kapittelet skal vi utforske selve kommunikasjonsbegrepet. Vi skal se på ulike definisjoner, forstå hva som skiller dagligdags bruk av ordet fra den faglige forståelsen, og reflektere over hvorfor det er så viktig å studere kommunikasjon i dagens samfunn.`,
    },
    {
      id: 'kk-1-1-def-1',
      type: 'definition',
      title: 'Kommunikasjon',
      content: `Ordet **kommunikasjon** kommer fra det latinske *communicare*, som betyr «å gjøre felles». Kommunikasjon handler altså om å dele noe med andre – tanker, følelser, informasjon eller meninger.

**Faglig definisjon:**
Kommunikasjon er en prosess der en sender formidler et budskap gjennom en kanal til en mottaker, som tolker budskapet og eventuelt gir tilbakemelding.

**Viktige kjennetegn:**
- Kommunikasjon er en prosess, ikke en enkelthendelse
- Det krever minst to parter
- Budskapet kan være bevisst eller ubevisst
- Tolkning spiller en avgjørende rolle`,
    },
    {
      id: 'kk-1-1-example-1',
      type: 'example',
      title: 'Daglig vs. faglig forståelse',
      problem: 'Hva er forskjellen mellom hvordan vi bruker begrepet kommunikasjon til daglig og den faglige forståelsen?',
      solution: `**Dagligdags bruk:**
Når vi sier «vi hadde god kommunikasjon», mener vi gjerne at vi forsto hverandre godt og at samtalen gikk greit. Begrepet brukes løst og ofte som et synonym for «samtale» eller «prat».

**Faglig forståelse:**
I faget kommunikasjon og kultur ser vi på kommunikasjon som et komplekst system med mange elementer. Vi analyserer hvem som sender budskapet, hva budskapet inneholder, hvilken kanal som brukes, hvordan mottakeren tolker budskapet, og hvilken kontekst det foregår i.

**Eksempel:**
Når du sender en tekstmelding til en venn, vil du til daglig bare tenke «jeg sendte en melding». Faglig sett kan vi analysere deg som sender, meldingsteksten som budskap, telefonen som kanal, vennens lesing som mottakerprosess, og misforståelser som kan oppstå fordi mottakeren ikke hører tonefall.`,
    },
    {
      id: 'kk-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det latinske ordet "communicare"?',
        options: [
          { id: 'a', text: 'Å gjøre felles', isCorrect: true },
          { id: 'b', text: 'Å snakke høyt', isCorrect: false },
          { id: 'c', text: 'Å sende brev', isCorrect: false },
          { id: 'd', text: 'Å lytte oppmerksomt', isCorrect: false },
        ],
        hints: ['Tenk på hva som er kjernen i all kommunikasjon – å dele noe.'],
        solution: 'Det latinske ordet communicare betyr «å gjøre felles». Det handler om å dele tanker, følelser eller informasjon med andre.',
      },
    },
    {
      id: 'kk-1-1-def-2',
      type: 'definition',
      title: 'Intensjonell og ikke-intensjonell kommunikasjon',
      content: `Kommunikasjon kan være bevisst (intensjonell) eller ubevisst (ikke-intensjonell).

**Intensjonell kommunikasjon:**
Senderen har et bevisst mål med budskapet. Du velger ordene dine, planlegger hva du vil si, og ønsker å oppnå en bestemt reaksjon.
- Eksempler: En tale, en reklame, en jobbsøknad

**Ikke-intensjonell kommunikasjon:**
Du sender signaler uten å være klar over det. Kroppsspråk, ansiktsuttrykk og klesvalg kommuniserer noe enten du vil eller ikke.
- Eksempler: Å rødme, nervøs kroppsholdning, valg av klær

**Viktig poeng:** Selv om du ikke har tenkt å kommunisere noe, kan andre tolke atferden din som kommunikasjon. Du kan ikke *ikke* kommunisere.`,
    },
    {
      id: 'kk-1-1-example-2',
      type: 'example',
      title: 'Ikke-intensjonell kommunikasjon i klasserommet',
      problem: 'Hvordan kan en elev sende signaler uten å mene det?',
      solution: `**Situasjon:** Lars sitter bakerst i klasserommet. Han ser ut av vinduet, lener seg bakover i stolen og gjesper.

**Intensjon:** Lars har kanskje ikke sovet godt og er bare sliten. Han forsøker ikke å sende noe budskap.

**Tolkning:** Læreren kan tolke dette som at Lars er uinteressert eller umotivert. Medelevene kan tenke at han synes timen er kjedelig.

**Analyse:**
Lars sender ikke-intensjonelle signaler gjennom kroppsspråket sitt. Selv om han ikke mente å kommunisere noe, tolker andre hans atferd. Dette viser at vi alltid kommuniserer, enten vi vil eller ikke.`,
    },
    {
      id: 'kk-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken påstand om kommunikasjon er mest riktig ifølge faglig forståelse?',
        options: [
          { id: 'a', text: 'Du kan ikke unngå å kommunisere', isCorrect: true },
          { id: 'b', text: 'Kommunikasjon skjer bare gjennom ord', isCorrect: false },
          { id: 'c', text: 'Kommunikasjon krever alltid en bevisst sender', isCorrect: false },
          { id: 'd', text: 'Kommunikasjon er det samme som informasjon', isCorrect: false },
        ],
        hints: ['Tenk på kroppsspråk og andre ubevisste signaler.'],
        solution: 'Vi sender alltid signaler gjennom kroppsspråk, ansiktsuttrykk og atferd. Selv det å være helt stille kommuniserer noe. Derfor kan du ikke unngå å kommunisere.',
      },
    },
    {
      id: 'kk-1-1-note-1',
      type: 'note',
      title: 'Kommunikasjon vs. informasjon',
      content: `Det er viktig å skille mellom kommunikasjon og informasjon:

- **Informasjon** er enveisoverføring av fakta eller data. Et skilt med «Stopp» gir informasjon.
- **Kommunikasjon** innebærer en prosess med tolkning og gjerne tilbakemelding. Når du diskuterer hva skiltet betyr med en venn, kommuniserer dere.

All kommunikasjon inneholder informasjon, men ikke all informasjon er kommunikasjon.`,
    },
    {
      id: 'kk-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi to eksempler på intensjonell kommunikasjon og to eksempler på ikke-intensjonell kommunikasjon fra din egen hverdag. Forklar hvorfor du plasserer dem i de ulike kategoriene.',
        hints: ['Tenk på situasjoner hjemme, på skolen og i sosiale medier.'],
        solution: 'Intensjonelle eksempler kan være å sende en tekstmelding for å avtale et møte (bevisst mål) eller å rekke opp hånden i timen (ønsker å bli valgt). Ikke-intensjonelle eksempler kan være å rødme når man er flau (ubevisst reaksjon) eller å se ned i bakken fordi man er usikker (uten å tenke over signalet). Forskjellen ligger i om senderen har et bevisst mål med signalet eller ikke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk-1-1-text-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- Kommunikasjon kommer fra det latinske *communicare* og betyr «å gjøre felles»
- Faglig sett er kommunikasjon en prosess med sender, budskap, kanal, mottaker og tilbakemelding
- Kommunikasjon kan være intensjonell (bevisst) eller ikke-intensjonell (ubevisst)
- Du kan ikke unngå å kommunisere – kroppsspråk og atferd sender alltid signaler
- Det er viktig å skille mellom informasjon (enveis) og kommunikasjon (prosess)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «I dagens digitale samfunn kommuniserer vi mer enn noensinne, men forstår hverandre kanskje dårligere.» Bruk begreper fra kapittelet i svaret ditt.',
        hints: ['Tenk på forskjellen mellom mengde kommunikasjon og kvalitet, og om digital kommunikasjon mangler noe som ansikt-til-ansikt-kommunikasjon har.'],
        solution: 'I drøftingen kan man peke på at digitale kanaler gjør det mulig å sende flere budskap enn noen gang, men at mye ikke-verbal kommunikasjon (kroppsspråk, tonefall) går tapt. Tekstmeldinger og sosiale medier er i stor grad intensjonell kommunikasjon, men mottakeren mangler informasjon fra den ikke-intensjonelle kommunikasjonen. Dette kan føre til misforståelser fordi mottakeren tolker budskapet uten kontekst. Man bør også drøfte at «å gjøre felles» krever gjensidig forståelse, ikke bare informasjonsoverføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-1-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste forskjellen mellom informasjon og kommunikasjon?',
        options: [
          { id: 'a', text: 'Kommunikasjon er en prosess med tolkning og tilbakemelding, informasjon er enveis', isCorrect: true },
          { id: 'b', text: 'Informasjon er muntlig, kommunikasjon er skriftlig', isCorrect: false },
          { id: 'c', text: 'Kommunikasjon er alltid digital, informasjon er analog', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell mellom begrepene', isCorrect: false },
        ],
        solution: 'Kommunikasjon er en prosess der budskap tolkes og det gjerne gis tilbakemelding. Informasjon er enveisoverføring av fakta eller data uten nødvendig tolkning eller respons fra mottakeren.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kommunikasjon', definition: 'Prosess der et budskap formidles fra sender til mottaker gjennom en kanal.' },
    { term: 'Communicare', definition: 'Latinsk opprinnelse som betyr «å gjøre felles».' },
    { term: 'Intensjonell kommunikasjon', definition: 'Kommunikasjon der senderen har et bevisst mål med budskapet.' },
    { term: 'Ikke-intensjonell kommunikasjon', definition: 'Kommunikasjon der signaler sendes uten bevisst hensikt.' },
    { term: 'Informasjon', definition: 'Enveisoverføring av fakta eller data, til forskjell fra kommunikasjon som innebærer prosess og tolkning.' },
  ],
};

// ============================================================================
// Kapittel 1.2: Kommunikasjonsmodeller
// ============================================================================

export const CHAPTER_KOMKULT_1_1_2: TextbookChapter = {
  id: 'komkult-1-1-2',
  courseId: 'komkult-1',
  chapterNumber: '1.2',
  title: 'Kommunikasjonsmodeller',
  description: 'Shannon-Weaver-modellen, transaksjonell kommunikasjon, semiotisk modell.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for ulike kommunikasjonsmodeller',
    'sammenligne lineære og transaksjonelle modeller',
  ],
  content: [
    {
      id: 'kk-1-2-intro',
      type: 'text',
      content: `# Kommunikasjonsmodeller

For å forstå kommunikasjon bedre har forskere utviklet ulike modeller. En modell er en forenklet fremstilling av virkeligheten som hjelper oss å analysere og forstå komplekse prosesser. Kommunikasjonsmodeller viser oss de viktigste elementene i kommunikasjon og hvordan de henger sammen.

Vi skal se på tre sentrale modeller som representerer ulike måter å forstå kommunikasjon på:
- **Shannon-Weaver-modellen** – den klassiske lineære modellen
- **Den transaksjonelle modellen** – kommunikasjon som gjensidig prosess
- **Den semiotiske modellen** – kommunikasjon som tegn og tolkning`,
    },
    {
      id: 'kk-1-2-def-1',
      type: 'definition',
      title: 'Shannon-Weaver-modellen',
      content: `**Shannon-Weaver-modellen** (1949) er den eldste og mest kjente kommunikasjonsmodellen. Den ble opprinnelig utviklet for å beskrive telefonkommunikasjon.

**Elementene i modellen:**
1. **Informasjonskilde** – den som har et budskap å sende
2. **Sender (transmitter)** – koder budskapet til et signal
3. **Kanal** – mediet signalet sendes gjennom
4. **Mottaker (receiver)** – dekoder signalet tilbake til et budskap
5. **Destinasjon** – den som mottar budskapet
6. **Støy** – alt som forstyrrer signalet underveis

**Kjennetegn:**
- Lineær modell: Kommunikasjonen går én vei
- Fokus på overføring av informasjon
- Støy kan oppstå i alle ledd
- Opprinnelig teknisk, senere overført til menneskelig kommunikasjon`,
    },
    {
      id: 'kk-1-2-example-1',
      type: 'example',
      title: 'Shannon-Weaver i praksis',
      problem: 'Hvordan kan vi bruke Shannon-Weaver-modellen til å analysere en telefonsamtale?',
      solution: `**Situasjon:** Maria ringer farmoren sin for å invitere henne til middag.

**Analyse med Shannon-Weaver:**
- **Informasjonskilde:** Marias ønske om å invitere farmor til middag
- **Sender:** Maria koder budskapet til ord og setninger
- **Kanal:** Telefonsignalet (lydbølger omgjort til elektriske signaler)
- **Støy:** Dårlig dekning, bakgrunnsstøy, farmor hører dårlig
- **Mottaker:** Telefonen hos farmor dekoder signalene tilbake til lyd
- **Destinasjon:** Farmor som hører og tolker ordene

**Begrensning:** Modellen viser ikke at farmor svarer tilbake – den er lineær og viser bare én retning. I virkeligheten er samtalen en toveis prosess.`,
    },
    {
      id: 'kk-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedkritikken mot Shannon-Weaver-modellen?',
        options: [
          { id: 'a', text: 'Den er lineær og viser ikke tilbakemelding', isCorrect: true },
          { id: 'b', text: 'Den er for ny og utestet', isCorrect: false },
          { id: 'c', text: 'Den inkluderer for mange elementer', isCorrect: false },
          { id: 'd', text: 'Den ble utviklet for internett', isCorrect: false },
        ],
        hints: ['Tenk på hva som mangler når kommunikasjonen bare går én vei.'],
        solution: 'Shannon-Weaver-modellen er lineær, noe som betyr at den bare viser kommunikasjon i én retning. Den tar ikke hensyn til tilbakemelding, tolkning eller at kommunikasjon i virkeligheten er en gjensidig prosess.',
      },
    },
    {
      id: 'kk-1-2-def-2',
      type: 'definition',
      title: 'Den transaksjonelle modellen',
      content: `**Den transaksjonelle modellen** ser kommunikasjon som en samtidig, gjensidig prosess der begge parter er sendere og mottakere på samme tid.

**Kjennetegn:**
- Kommunikasjon er **sirkulær**, ikke lineær
- Begge parter sender og mottar budskap samtidig
- **Tilbakemelding** (feedback) er en integrert del av prosessen
- **Kontekst** påvirker kommunikasjonen (tid, sted, relasjon, kultur)
- Partene påvirker hverandre gjensidig

**Viktige begreper:**
- **Transaksjon:** Begge parter bidrar aktivt til kommunikasjonen
- **Felles referanseramme:** Overlappende erfaring og kunnskap mellom partene
- **Simultanitet:** Koding og dekoding skjer samtidig (du observerer reaksjoner mens du snakker)`,
    },
    {
      id: 'kk-1-2-example-2',
      type: 'example',
      title: 'Transaksjonell kommunikasjon i klasserommet',
      problem: 'Hvordan viser en klasseromsituasjon at kommunikasjon er transaksjonell?',
      solution: `**Situasjon:** Læreren forklarer et vanskelig tema i timen.

**Transaksjonell analyse:**
- Læreren snakker (sender), men leser samtidig elevenes kroppsspråk (mottar)
- Elevene lytter (mottar), men sender samtidig signaler gjennom ansiktsuttrykk og nikk (sender)
- Læreren ser at flere elever ser forvirret ut → tilpasser forklaringen
- En elev rekker opp hånden → læreren stopper og lar eleven spørre
- Hele prosessen er gjensidig og samtidig

**Kontekst som påvirker:**
- Klasserommet som fysisk ramme
- Relasjonen lærer–elev
- Tidspunkt (morgentimen vs. siste time)
- Elevenes forkunnskaper (felles referanseramme)

Dette viser at kommunikasjonen ikke er lineær – begge parter bidrar aktivt hele tiden.`,
    },
    {
      id: 'kk-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr det at kommunikasjon er «transaksjonell»?',
        options: [
          { id: 'a', text: 'Begge parter er sendere og mottakere samtidig', isCorrect: true },
          { id: 'b', text: 'Kommunikasjon handler om økonomiske transaksjoner', isCorrect: false },
          { id: 'c', text: 'Budskapet sendes gjennom mange kanaler samtidig', isCorrect: false },
          { id: 'd', text: 'Kommunikasjon alltid er planlagt og bevisst', isCorrect: false },
        ],
        hints: ['Tenk på hva som skjer samtidig når du snakker med noen ansikt til ansikt.'],
        solution: 'Transaksjonell kommunikasjon betyr at begge parter i en samtale er sendere og mottakere på samme tid. Mens du snakker, leser den andre ditt kroppsspråk, og mens du lytter, sender du signaler tilbake gjennom ansiktsuttrykk og nikk.',
      },
    },
    {
      id: 'kk-1-2-def-3',
      type: 'definition',
      title: 'Den semiotiske modellen',
      content: `**Den semiotiske modellen** er basert på semiotikk – læren om tegn og tegnenes betydning. Den er knyttet til lingvisten Ferdinand de Saussure og filosofen Charles Sanders Peirce.

**Grunnide:** All kommunikasjon handler om å sende og tolke tegn.

**De Saussures tegnmodell:**
- **Signifikant (uttrykk):** Selve tegnet – lyden, ordet, bildet
- **Signifikat (innhold):** Betydningen vi knytter til tegnet
- Forholdet mellom uttrykk og innhold er vilkårlig (konvensjonelt)

**Peirces tre tegntyper:**
- **Ikon:** Tegnet ligner det det representerer (et fotografi, et kart)
- **Indeks:** Tegnet har en direkte forbindelse til det det representerer (røyk som tegn på ild)
- **Symbol:** Tegnet har ingen naturlig forbindelse – betydningen er avtalt (ord, flagg, trafikkskilt)`,
    },
    {
      id: 'kk-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-1-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av følgende er et eksempel på et indeksikalt tegn?',
        options: [
          { id: 'a', text: 'Røyk som tegn på ild', isCorrect: true },
          { id: 'b', text: 'Det norske flagget', isCorrect: false },
          { id: 'c', text: 'Et fotografi av en person', isCorrect: false },
          { id: 'd', text: 'Ordet «hund»', isCorrect: false },
        ],
        hints: ['Et indeksikalt tegn har en direkte, naturlig forbindelse til det det representerer.'],
        solution: 'Røyk er et indeksikalt tegn fordi det har en direkte, fysisk forbindelse til ild. Et fotografi er et ikon (det ligner), flagget og ordet «hund» er symboler (avtalt betydning).',
      },
    },
    {
      id: 'kk-1-2-text-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `**De tre kommunikasjonsmodellene sammenlignet:**

| Modell | Perspektiv | Styrke | Svakhet |
|--------|-----------|--------|---------|
| Shannon-Weaver | Lineær overføring | Enkel, tydelig | Ingen tilbakemelding |
| Transaksjonell | Gjensidig prosess | Viser kompleksitet | Kan bli vanskelig å analysere |
| Semiotisk | Tegn og tolkning | Viser tolkningens rolle | Mindre fokus på prosess |

Ingen modell er «riktig» alene – de belyser ulike sider ved kommunikasjon. Ved å kombinere dem får vi en rikere forståelse.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en kommunikasjonssituasjon fra hverdagen din (f.eks. en samtale, en reklame, en post på sosiale medier). Analyser situasjonen ved å bruke alle tre kommunikasjonsmodellene. Hva avdekker hver modell som de andre ikke fanger opp?',
        hints: ['Start med å beskrive situasjonen kort, og gå deretter gjennom modellene én for én.'],
        solution: 'Et godt svar beskriver situasjonen og anvender alle tre modellene: Shannon-Weaver viser den grunnleggende overføringen og mulige støykilder. Den transaksjonelle modellen avdekker gjensidighet, tilbakemelding og kontekstens rolle. Den semiotiske modellen viser hvordan tegn og symboler tolkes ulikt av ulike mottakere. Konklusjonen bør peke på at modellene utfyller hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-1-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «felles referanseramme» i den transaksjonelle modellen?',
        options: [
          { id: 'a', text: 'Overlappende erfaring og kunnskap mellom partene', isCorrect: true },
          { id: 'b', text: 'At begge parter bruker samme språk', isCorrect: false },
          { id: 'c', text: 'At kommunikasjonen skjer på samme sted', isCorrect: false },
          { id: 'd', text: 'At budskapet sendes gjennom samme kanal', isCorrect: false },
        ],
        solution: 'Felles referanseramme betyr at partene har overlappende erfaringer, kunnskaper og kulturell bakgrunn. Jo større overlap, desto bedre fungerer kommunikasjonen fordi partene tolker budskap på lignende måter.',
      },
    },
    {
      id: 'kk-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-1-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom ikon, indeks og symbol med egne eksempler for hver tegntype.',
        hints: ['Et ikon ligner, en indeks har direkte forbindelse, et symbol er avtalt.'],
        solution: 'Ikon: Et kart er et ikon fordi det ligner landskapet det representerer. Indeks: Feber er en indeks for sykdom fordi det har en direkte forbindelse. Symbol: Et rødt lys i trafikken er et symbol fordi det er en avtalt konvensjon at rødt betyr «stopp». Forskjellen handler om typen forbindelse mellom tegnet og det tegnet står for.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Shannon-Weaver-modellen', definition: 'Lineær kommunikasjonsmodell med sender, kanal, støy og mottaker.' },
    { term: 'Transaksjonell modell', definition: 'Modell der kommunikasjon er gjensidig og samtidig prosess.' },
    { term: 'Semiotisk modell', definition: 'Modell basert på tegn og tolkning av tegn.' },
    { term: 'Signifikant', definition: 'Tegnets uttrykksside – selve lyden, ordet eller bildet.' },
    { term: 'Signifikat', definition: 'Tegnets innholdsside – betydningen vi knytter til tegnet.' },
    { term: 'Ikon', definition: 'Tegn som ligner det det representerer.' },
    { term: 'Indeks', definition: 'Tegn med direkte forbindelse til det det representerer.' },
    { term: 'Symbol', definition: 'Tegn med avtalt, konvensjonell betydning.' },
  ],
};

// ============================================================================
// Kapittel 1.3: Kommunikasjonsprosessen
// ============================================================================

export const CHAPTER_KOMKULT_1_1_3: TextbookChapter = {
  id: 'komkult-1-1-3',
  courseId: 'komkult-1',
  chapterNumber: '1.3',
  title: 'Kommunikasjonsprosessen',
  description: 'Sender, mottaker, budskap, kanal, kontekst, tilbakemelding.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for elementene i kommunikasjonsprosessen',
    'analysere konkrete kommunikasjonssituasjoner ved hjelp av prosessmodellen',
  ],
  content: [
    {
      id: 'kk-1-3-intro',
      type: 'text',
      content: `# Kommunikasjonsprosessen

I forrige kapittel så vi på ulike kommunikasjonsmodeller. Nå skal vi gå dypere inn i de enkelte elementene som inngår i kommunikasjonsprosessen. Når vi forstår hvert element godt, kan vi bedre analysere hvorfor kommunikasjon lykkes – eller mislykkes.

Kommunikasjonsprosessen består av seks hovedelementer: **sender**, **budskap**, **koding**, **kanal**, **dekoding**, **mottaker**, **tilbakemelding** og **kontekst**. Hvert element spiller en viktig rolle for om budskapet kommer frem slik det var ment.`,
    },
    {
      id: 'kk-1-3-def-1',
      type: 'definition',
      title: 'Sender og mottaker',
      content: `**Sender** er den som har et budskap å formidle. Senderen har en intensjon – noe han eller hun ønsker å oppnå med kommunikasjonen.

**Koding:** Senderen må kode budskapet – det vil si oversette tanker og følelser til ord, bilder, kroppsspråk eller andre tegn som mottakeren kan forstå.

**Mottaker** er den som tar imot budskapet. Mottakeren må dekode budskapet – det vil si tolke de tegnene senderen har brukt.

**Dekoding:** Prosessen der mottakeren tolker og gir mening til de mottatte signalene.

**Viktig:** Senderen og mottakeren kan ha ulike referanserammer, erfaringer og kulturell bakgrunn. Dette påvirker både kodingen og dekodingen, og er en vanlig årsak til misforståelser.`,
    },
    {
      id: 'kk-1-3-example-1',
      type: 'example',
      title: 'Koding og dekoding',
      problem: 'Hvordan kan koding og dekoding føre til misforståelser?',
      solution: `**Situasjon:** Anja sender en tekstmelding til Erik: «Det var jo kjempefint gjort.»

**Anjas koding (intensjon):** Anja er irritert og bruker ironi. Hun mener det motsatte av det hun skriver.

**Eriks dekoding (tolkning):** Erik leser meldingen og tar den bokstavelig. Han tror Anja er fornøyd.

**Hva gikk galt?**
- Anja kodet budskapet med ironi, men i en tekstmelding mangler tonefall og ansiktsuttrykk
- Erik hadde ikke nok kontekst til å forstå at det var ironisk
- Kanalen (SMS) støtter ikke de ikke-verbale signalene som gjør ironi tydelig

**Løsning:** Anja kunne lagt til en emoji eller skrevet mer direkte. Kanalen må passe til budskapet.`,
    },
    {
      id: 'kk-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «koding» i kommunikasjonsprosessen?',
        options: [
          { id: 'a', text: 'Å oversette tanker og følelser til tegn som kan formidles', isCorrect: true },
          { id: 'b', text: 'Å kryptere meldingen slik at ingen andre kan lese den', isCorrect: false },
          { id: 'c', text: 'Å skrive med datakode som HTML eller Python', isCorrect: false },
          { id: 'd', text: 'Å velge riktig kanal for budskapet', isCorrect: false },
        ],
        hints: ['Tenk på hva senderen gjør for å formidle tankene sine.'],
        solution: 'Koding betyr å oversette tanker, følelser eller informasjon til tegn som kan formidles – for eksempel ord, bilder, gester eller symboler. Det er senderens jobb å kode budskapet.',
      },
    },
    {
      id: 'kk-1-3-def-2',
      type: 'definition',
      title: 'Budskap og kanal',
      content: `**Budskapet** er innholdet i kommunikasjonen – det senderen ønsker å formidle. Et budskap har alltid to nivåer:
- **Denotasjon:** Den bokstavelige, direkte betydningen
- **Konnotasjon:** De assosiasjoner og følelser budskapet vekker

**Kanalen** er mediet eller verktøyet som brukes til å formidle budskapet:
- **Muntlig kanal:** Samtale, foredrag, telefonsamtale
- **Skriftlig kanal:** Brev, e-post, SMS, chat
- **Visuell kanal:** Bilder, video, grafikk
- **Digital kanal:** Sosiale medier, nettsider, apper

**Kanalvalg er viktig:** Budskapet må passe til kanalen. Å gi en oppsigelse via SMS er et dårlig kanalvalg – alvorlige budskap krever gjerne ansikt-til-ansikt-kommunikasjon.`,
    },
    {
      id: 'kk-1-3-example-2',
      type: 'example',
      title: 'Denotasjon og konnotasjon',
      problem: 'Hva er forskjellen mellom denotasjon og konnotasjon i et budskap?',
      solution: `**Ordet «hjem»:**
- **Denotasjon:** Et sted der noen bor. En bolig.
- **Konnotasjon:** Trygghet, varme, familie, tilhørighet – eller for noen: uro, konflikt, ensomhet.

**Reklameeksempel:**
En bilreklame viser en bil foran et flott fjelllandskap.
- **Denotasjon:** En bil av en bestemt modell.
- **Konnotasjon:** Frihet, eventyr, natur, status, livsstil.

Reklameskapere jobber bevisst med konnotasjoner for å knytte positive følelser til produktet. Som mottaker er det viktig å være bevisst på dette skillet.`,
    },
    {
      id: 'kk-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er konnotasjon?',
        options: [
          { id: 'a', text: 'De assosiasjonene og følelsene et ord eller tegn vekker', isCorrect: true },
          { id: 'b', text: 'Den bokstavelige betydningen av et ord', isCorrect: false },
          { id: 'c', text: 'En type kommunikasjonskanal', isCorrect: false },
          { id: 'd', text: 'Tegnets grammatiske funksjon i en setning', isCorrect: false },
        ],
        hints: ['Tenk på hva du forbinder med et ord utover den rene ordbokdefinisjonen.'],
        solution: 'Konnotasjon er de assosiasjoner, følelser og bibetydninger vi knytter til et ord eller tegn. Det skiller seg fra denotasjon, som er den bokstavelige, direkte betydningen.',
      },
    },
    {
      id: 'kk-1-3-def-3',
      type: 'definition',
      title: 'Kontekst og tilbakemelding',
      content: `**Kontekst** er omstendighetene rundt kommunikasjonen. Konteksten påvirker hvordan budskapet sendes, mottas og tolkes.

**Typer kontekst:**
- **Fysisk kontekst:** Sted, rom, omgivelser (klasserom, kafé, nettmøte)
- **Sosial kontekst:** Relasjon mellom partene (venner, lærer-elev, sjef-ansatt)
- **Kulturell kontekst:** Kulturelle normer, verdier og skikker
- **Tidskontekst:** Tidspunkt, tidspress, historisk sammenheng

**Tilbakemelding (feedback)** er mottakerens respons på budskapet. Den kan være:
- **Verbal:** Ord og setninger som svar
- **Non-verbal:** Nikk, smil, rynkede bryn
- **Direkte:** Umiddelbar respons i en samtale
- **Indirekte:** Forsinket respons (f.eks. likes på sosiale medier)

Tilbakemelding gjør kommunikasjonen til en toveis prosess og gir senderen mulighet til å justere budskapet.`,
    },
    {
      id: 'kk-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv en konkret kommunikasjonssituasjon og identifiser alle elementene i kommunikasjonsprosessen: sender, budskap, koding, kanal, dekoding, mottaker, kontekst og tilbakemelding.',
        hints: ['Du kan bruke en situasjon fra skolen, hjemme eller fra sosiale medier.'],
        solution: 'Et godt svar identifiserer alle elementene i en konkret situasjon. For eksempel: En lærer (sender) ønsker å forklare en regel (budskap) og bruker ord og tavletegning (koding) i klasserommet (kanal). Elevene (mottaker) lytter og tolker forklaringen (dekoding). Konteksten er klasserommet i en undervisningssituasjon. Tilbakemeldingen er at en elev rekker opp hånden og spør om noe er uklart.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk-1-3-text-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `**Elementene i kommunikasjonsprosessen:**

- **Sender** – den som formidler budskapet
- **Koding** – å oversette tanker til formidlbare tegn
- **Budskap** – innholdet, med denotasjon og konnotasjon
- **Kanal** – mediet budskapet formidles gjennom
- **Dekoding** – mottakerens tolkning av budskapet
- **Mottaker** – den som tar imot budskapet
- **Kontekst** – omstendighetene rundt kommunikasjonen
- **Tilbakemelding** – mottakerens respons

Alle elementene henger sammen, og svikt i ett element kan føre til misforståelser.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du er leder for et skoleprosjekt og skal informere gruppa om en endring i planen. Hvordan ville du tilpasset budskapet, kanalen og kommunikasjonsformen avhengig av om du informerer ansikt til ansikt, via e-post eller via en gruppechat? Drøft fordeler og ulemper ved hvert valg.',
        hints: ['Tenk på hva som går tapt og hva som vinnes i de ulike kanalene.'],
        solution: 'Ansikt til ansikt: Fordelen er umiddelbar tilbakemelding, mulighet for å lese kroppsspråk og tilpasse budskapet underveis. Ulempen er at det krever at alle er til stede. E-post: Fordelen er at budskapet kan formuleres nøye og dokumenteres. Ulempen er forsinkelse i tilbakemelding og fare for misforståelser uten tonefall. Gruppechat: Fordelen er rask og tilgjengelig kommunikasjon. Ulempen er at viktig informasjon kan drukne i andre meldinger, og det er vanskelig å formidle nyanserte budskap. Kanalvalget bør tilpasses budskapets alvorlighetsgrad og kompleksitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-1-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken type kontekst handler om relasjonen mellom partene i kommunikasjonen?',
        options: [
          { id: 'a', text: 'Sosial kontekst', isCorrect: true },
          { id: 'b', text: 'Fysisk kontekst', isCorrect: false },
          { id: 'c', text: 'Kulturell kontekst', isCorrect: false },
          { id: 'd', text: 'Tidskontekst', isCorrect: false },
        ],
        solution: 'Sosial kontekst handler om relasjonen mellom partene i kommunikasjonen, for eksempel om de er venner, kolleger, eller har en maktrelasjon som lærer-elev.',
      },
    },
    {
      id: 'kk-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-1-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er tilbakemelding (feedback) i kommunikasjonsprosessen?',
        options: [
          { id: 'a', text: 'Mottakerens respons på budskapet', isCorrect: true },
          { id: 'b', text: 'Støy som forstyrrer budskapet', isCorrect: false },
          { id: 'c', text: 'Senderens forberedelse av budskapet', isCorrect: false },
          { id: 'd', text: 'Kanalen budskapet sendes gjennom', isCorrect: false },
        ],
        solution: 'Tilbakemelding er mottakerens respons på budskapet. Den kan være verbal (ord), non-verbal (nikk, smil), direkte (umiddelbar) eller indirekte (forsinket). Tilbakemelding gjør kommunikasjonen toveis.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sender', definition: 'Den som formidler et budskap i kommunikasjonsprosessen.' },
    { term: 'Mottaker', definition: 'Den som tar imot og tolker budskapet.' },
    { term: 'Koding', definition: 'Å oversette tanker til formidlbare tegn (ord, bilder, gester).' },
    { term: 'Dekoding', definition: 'Mottakerens tolkning av de mottatte tegnene.' },
    { term: 'Denotasjon', definition: 'Den bokstavelige, direkte betydningen av et ord eller tegn.' },
    { term: 'Konnotasjon', definition: 'Assosiasjoner og følelser knyttet til et ord eller tegn.' },
    { term: 'Kontekst', definition: 'Omstendighetene rundt kommunikasjonen (fysisk, sosial, kulturell, tid).' },
    { term: 'Tilbakemelding', definition: 'Mottakerens respons som gjør kommunikasjonen toveis.' },
  ],
};

// ============================================================================
// Kapittel 1.4: Kommunikasjonsformer
// ============================================================================

export const CHAPTER_KOMKULT_1_1_4: TextbookChapter = {
  id: 'komkult-1-1-4',
  courseId: 'komkult-1',
  chapterNumber: '1.4',
  title: 'Kommunikasjonsformer',
  description: 'Enveis vs. toveiskommunikasjon, muntlig, skriftlig, visuell, digital.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for ulike kommunikasjonsformer',
    'vurdere hvilke kommunikasjonsformer som passer i ulike situasjoner',
  ],
  content: [
    {
      id: 'kk-1-4-intro',
      type: 'text',
      content: `# Kommunikasjonsformer

Vi kommuniserer på mange ulike måter i løpet av en dag. Vi snakker, skriver, bruker bilder, sender emojier og legger ut innhold på sosiale medier. Hver av disse kommunikasjonsformene har sine styrker og begrensninger.

I dette kapittelet skal vi se nærmere på de viktigste kommunikasjonsformene: enveis- og toveiskommunikasjon, muntlig, skriftlig, visuell og digital kommunikasjon. Vi skal også diskutere når de ulike formene egner seg best.`,
    },
    {
      id: 'kk-1-4-def-1',
      type: 'definition',
      title: 'Enveis- og toveiskommunikasjon',
      content: `**Enveiskommunikasjon** er kommunikasjon der budskapet går i én retning, fra sender til mottaker, uten umiddelbar mulighet for tilbakemelding.

**Eksempler på enveiskommunikasjon:**
- TV-nyheter, radiosending
- En plakat eller et trafikkskilt
- En massesendt e-post uten svarmulighet
- En lærebok (i tradisjonell forstand)

**Toveiskommunikasjon** er kommunikasjon der begge parter kan sende og motta budskap, og der tilbakemelding er en del av prosessen.

**Eksempler på toveiskommunikasjon:**
- En samtale mellom venner
- Et intervju
- Chat og direktemeldinger
- En klassediskusjon

**Viktig:** Skillet er ikke alltid skarpt. En forelesning er i utgangspunktet enveiskommunikasjon, men blir toveis når studentene stiller spørsmål.`,
    },
    {
      id: 'kk-1-4-example-1',
      type: 'example',
      title: 'Sosiale medier – enveis eller toveis?',
      problem: 'Er kommunikasjon på sosiale medier enveis- eller toveiskommunikasjon?',
      solution: `**Analyse av Instagram-innlegg:**

**Enveisaspekter:**
- Du legger ut et bilde med tekst → budskapet sendes til alle som følger deg
- Du kontrollerer budskapet, men ikke hvem som mottar det
- Mange følgere vil bare scrolle forbi uten å reagere

**Toveisaspekter:**
- Følgere kan like, kommentere og dele innlegget
- Du kan svare på kommentarer
- Det oppstår dialoger i kommentarfeltet

**Konklusjon:**
Sosiale medier er en hybridform. Selve publiseringen er enveiskommunikasjon, men interaksjonsfunksjonene gjør det mulig med toveiskommunikasjon. Det betyr at et og samme medium kan romme begge former.`,
    },
    {
      id: 'kk-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av følgende er det tydeligste eksempelet på enveiskommunikasjon?',
        options: [
          { id: 'a', text: 'En nyhetssending på TV', isCorrect: true },
          { id: 'b', text: 'En telefonsamtale', isCorrect: false },
          { id: 'c', text: 'En gruppechat på Snapchat', isCorrect: false },
          { id: 'd', text: 'Et jobbintervju', isCorrect: false },
        ],
        hints: ['Tenk på hvilken situasjon der mottakeren ikke kan gi umiddelbar tilbakemelding.'],
        solution: 'En nyhetssending på TV er enveiskommunikasjon fordi budskapet sendes fra nyhetsoppleseren til seerne uten mulighet for umiddelbar tilbakemelding. De andre alternativene innebærer dialog.',
      },
    },
    {
      id: 'kk-1-4-def-2',
      type: 'definition',
      title: 'Muntlig og skriftlig kommunikasjon',
      content: `**Muntlig kommunikasjon** bruker tale som hovedkanal. Den er direkte, umiddelbar og støttes av tonefall, pauser, volum og kroppsspråk.

**Styrker ved muntlig kommunikasjon:**
- Umiddelbar tilbakemelding
- Rik på non-verbale signaler
- Kan tilpasses underveis
- Skaper nærhet og tillit

**Svakheter:**
- Ingen dokumentasjon (med mindre det tas opp)
- Kan være upresist
- Begrenset av tid og sted

**Skriftlig kommunikasjon** bruker skrevne ord som hovedkanal. Den er permanent, kan redigeres og er uavhengig av tid og sted.

**Styrker ved skriftlig kommunikasjon:**
- Kan gjennomtenkes og redigeres
- Dokumenterer innholdet
- Uavhengig av tid og sted
- Kan nå mange mottakere

**Svakheter:**
- Mangler non-verbale signaler
- Tilbakemeldingen er forsinket
- Større risiko for misforståelser
- Krever leseferdigheter`,
    },
    {
      id: 'kk-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste fordelen muntlig kommunikasjon har over skriftlig?',
        options: [
          { id: 'a', text: 'Umiddelbar tilbakemelding og rike non-verbale signaler', isCorrect: true },
          { id: 'b', text: 'Det er enklere å dokumentere', isCorrect: false },
          { id: 'c', text: 'Den kan nå flere mennesker', isCorrect: false },
          { id: 'd', text: 'Den er mer presis og tydelig', isCorrect: false },
        ],
        hints: ['Tenk på hva som skjer i en samtale som ikke kan skje i en e-post.'],
        solution: 'Muntlig kommunikasjon gir umiddelbar tilbakemelding og rike non-verbale signaler som tonefall, ansiktsuttrykk og kroppsspråk. Disse elementene gir kontekst som gjør det lettere å tolke budskapet riktig.',
      },
    },
    {
      id: 'kk-1-4-def-3',
      type: 'definition',
      title: 'Visuell og digital kommunikasjon',
      content: `**Visuell kommunikasjon** bruker bilder, farger, former, grafikk og video for å formidle budskap.

**Kjennetegn:**
- Kan formidle komplekse budskap raskt
- Vekker følelser og oppmerksomhet
- Kan være universell (krysse språkbarrierer)
- Sentral i reklame, kunst og design

**Eksempler:** Logoer, infografikk, film, emojier, kroppsspråk

**Digital kommunikasjon** bruker digitale plattformer og teknologi for å formidle budskap.

**Kjennetegn:**
- Kombinerer ofte tekst, bilde, lyd og video (multimodal)
- Kan nå globalt publikum
- Rask og tilgjengelig
- Asynkron (ikke-samtidig) eller synkron (samtidig)
- Ofte interaktiv

**Eksempler:** Sosiale medier, e-post, videomøter, podcaster, nettsider

**Multimodalitet:** Digital kommunikasjon er ofte multimodal – den kombinerer flere uttrykksformer i ett budskap (tekst + bilde + lenke + emoji i en Instagram-post).`,
    },
    {
      id: 'kk-1-4-example-2',
      type: 'example',
      title: 'Multimodal kommunikasjon i TikTok',
      problem: 'Hvordan bruker en TikTok-video flere kommunikasjonsformer samtidig?',
      solution: `**Analyse av en typisk TikTok-video:**

En influenser lager en video om hvordan man lager et måltid.

**Muntlig:** Hun snakker og forklarer hva hun gjør (verbal)
**Visuell:** Videoen viser maten, ingrediensene og tillagingsprosessen
**Skriftlig:** Tekst legges over videoen med oppskriftsinformasjon
**Digital:** Plattformen muliggjør deling, kommentering og liking
**Musikk:** Bakgrunnsmusikk setter stemning (auditiv kommunikasjon)

**Multimodalt samspill:**
Alle disse uttrykksmåtene jobber sammen for å skape et helhetlig budskap. Seeren mottar informasjon gjennom flere sanser samtidig, noe som gjør kommunikasjonen mer engasjerende og effektiv.

Dette viser at moderne digital kommunikasjon sjelden er «ren» – den er nesten alltid multimodal.`,
    },
    {
      id: 'kk-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-1-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «multimodal kommunikasjon»?',
        options: [
          { id: 'a', text: 'Kommunikasjon som kombinerer flere uttrykksformer', isCorrect: true },
          { id: 'b', text: 'Kommunikasjon som bare bruker digitale medier', isCorrect: false },
          { id: 'c', text: 'Kommunikasjon mellom mange personer samtidig', isCorrect: false },
          { id: 'd', text: 'Kommunikasjon som er bevisst og planlagt', isCorrect: false },
        ],
        hints: ['«Multi» betyr mange, og «modal» handler om uttrykksmåte.'],
        solution: 'Multimodal kommunikasjon kombinerer flere uttrykksformer – for eksempel tekst, bilde, lyd og video – i ett budskap. En nettavisartikkel med tekst, bilder og video er et eksempel.',
      },
    },
    {
      id: 'kk-1-4-text-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `**Kommunikasjonsformene oppsummert:**

- **Enveiskommunikasjon:** Budskapet går i én retning uten umiddelbar tilbakemelding
- **Toveiskommunikasjon:** Dialog med tilbakemelding mellom partene
- **Muntlig kommunikasjon:** Direkte, rik på non-verbale signaler, men forgjengelig
- **Skriftlig kommunikasjon:** Permanent og gjennomtenkt, men mangler non-verbale signaler
- **Visuell kommunikasjon:** Bruker bilder og grafikk, kan krysse språkbarrierer
- **Digital kommunikasjon:** Kombinerer ofte flere former (multimodal), rask og global

Valg av kommunikasjonsform bør tilpasses budskapet, mottakeren og konteksten.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du skal planlegge en kampanje for å redusere mobbing på skolen din. Hvilke kommunikasjonsformer ville du brukt, og hvorfor? Lag en kort plan der du begrunner valgene dine med begreper fra kapittelet.',
        hints: ['Vurder hvordan du kan kombinere ulike kommunikasjonsformer for å nå hele elevgruppen.'],
        solution: 'Et godt svar kombinerer flere kommunikasjonsformer: Visuell kommunikasjon gjennom plakater og infografikk som vekker oppmerksomhet. Digital kommunikasjon gjennom sosiale medier for å nå elever der de er. Muntlig kommunikasjon gjennom klassediskusjoner for å skape dialog. Multimodal kommunikasjon gjennom en kampanjevideo som kombinerer bilder, tekst og fortelling. Toveiskommunikasjon gjennom et anonymt spørreskjema der elever kan dele erfaringer. Begrunnelsen bør knyttes til styrker og svakheter ved hver form.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-1-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den største ulempen med skriftlig kommunikasjon sammenlignet med muntlig?',
        options: [
          { id: 'a', text: 'Den mangler non-verbale signaler som tonefall og kroppsspråk', isCorrect: true },
          { id: 'b', text: 'Den kan ikke dokumenteres', isCorrect: false },
          { id: 'c', text: 'Den kan bare nå én person om gangen', isCorrect: false },
          { id: 'd', text: 'Den krever alltid internett', isCorrect: false },
        ],
        solution: 'Skriftlig kommunikasjon mangler non-verbale signaler som tonefall, ansiktsuttrykk og kroppsspråk. Disse signalene gir viktig kontekst i muntlig kommunikasjon og bidrar til riktig tolkning. Uten dem er det lettere å misforstå budskapet.',
      },
    },
    {
      id: 'kk-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-1-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi eksempler på tre digitale kommunikasjonskanaler du bruker i hverdagen. For hver kanal: beskriv om den er enveis eller toveis, synkron eller asynkron, og hva som gjør den multimodal.',
        hints: ['Synkron betyr samtidig (som videochat), asynkron betyr ikke-samtidig (som e-post).'],
        solution: 'Eksempler kan være: 1) Instagram – toveis (kommentarer), asynkron (du poster, andre ser senere), multimodal (bilde + tekst + emojier). 2) Facetime – toveis, synkron (samtale i sanntid), multimodal (lyd + video). 3) E-post – toveis (kan svare), asynkron (leses når det passer), primært skriftlig men kan inneholde bilder og vedlegg. Svaret bør vise forståelse for begrepene og evne til å anvende dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Enveiskommunikasjon', definition: 'Kommunikasjon der budskapet går i én retning uten umiddelbar tilbakemelding.' },
    { term: 'Toveiskommunikasjon', definition: 'Kommunikasjon med dialog og tilbakemelding mellom partene.' },
    { term: 'Muntlig kommunikasjon', definition: 'Kommunikasjon gjennom tale, støttet av non-verbale signaler.' },
    { term: 'Skriftlig kommunikasjon', definition: 'Kommunikasjon gjennom skrevne ord, permanent og redigerbar.' },
    { term: 'Visuell kommunikasjon', definition: 'Kommunikasjon gjennom bilder, farger, former og grafikk.' },
    { term: 'Digital kommunikasjon', definition: 'Kommunikasjon via digitale plattformer og teknologi.' },
    { term: 'Multimodal kommunikasjon', definition: 'Kommunikasjon som kombinerer flere uttrykksformer (tekst, bilde, lyd, video).' },
  ],
};

// ============================================================================
// Kapittel 1.5: Støy og barrierer
// ============================================================================

export const CHAPTER_KOMKULT_1_1_5: TextbookChapter = {
  id: 'komkult-1-1-5',
  courseId: 'komkult-1',
  chapterNumber: '1.5',
  title: 'Støy og barrierer',
  description: 'Typer støy (fysisk, psykologisk, semantisk, kulturell), kommunikasjonsbarrierer.',
  estimatedMinutes: 24,
  competenceGoals: [
    'drøfte barrierer i kommunikasjon',
    'forklare ulike typer støy og hvordan de påvirker kommunikasjonsprosessen',
  ],
  content: [
    {
      id: 'kk-1-5-intro',
      type: 'text',
      content: `# Støy og barrierer i kommunikasjon

Selv med de beste intensjoner kan kommunikasjon gå galt. Budskapet som mottas, er ikke alltid det samme som budskapet som ble sendt. Hva er det som kommer i veien?

I kommunikasjonsfaget bruker vi begrepet **støy** om alt som forstyrrer kommunikasjonsprosessen og hindrer budskapet i å nå frem slik det var ment. Vi bruker begrepet **barriere** om mer varige hindringer som gjør kommunikasjon mellom bestemte grupper eller personer vanskelig.

Å forstå støy og barrierer er viktig fordi det hjelper oss å kommunisere bedre – vi kan identifisere hva som går galt og ta grep for å unngå misforståelser.`,
    },
    {
      id: 'kk-1-5-def-1',
      type: 'definition',
      title: 'Fysisk støy',
      content: `**Fysisk støy** er konkrete, ytre forstyrrelser som forhindrer at signalet kommer frem.

**Eksempler:**
- Bakgrunnsstøy i et rom (trafikk, byggearbeid, prating)
- Dårlig lydkvalitet i en telefonsamtale
- En uleselig utskrift eller et ødelagt skjerm
- Dårlig belysning som gjør det vanskelig å se
- Tekniske problemer (dårlig nettforbindelse, mikrofon som ikke fungerer)

**Fysisk støy er ofte den letteste typen å identifisere og løse** fordi den er konkret og observerbar. Man kan flytte seg til et roligere rom, bytte kanal eller fikse det tekniske problemet.`,
    },
    {
      id: 'kk-1-5-example-1',
      type: 'example',
      title: 'Fysisk støy i digital undervisning',
      problem: 'Hvordan kan fysisk støy påvirke en digital skoletime?',
      solution: `**Situasjon:** Klasse 2C har nettundervisning via Teams.

**Fysisk støy som oppstår:**
- En elev har dårlig internettforbindelse → bildet fryser og lyden hakker
- En annen elev har ikke headset → ekko og bakgrunnsstøy
- Lærerens mikrofon er for nærme → forvrengt lyd
- En elev sitter på kafé → bakgrunnsprating og maskinlyd
- Strømbrudd hos én elev → hun mister hele forelesningen

**Konsekvenser:**
Elevene går glipp av deler av undervisningen, blir frustrerte, og mister konsentrasjonen. Budskapet (undervisningen) når ikke frem som planlagt.

**Tiltak:** Påminn om headset, sjekk teknikk på forhånd, ta opp forelesningen for de som mister noe.`,
    },
    {
      id: 'kk-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av følgende er et eksempel på fysisk støy?',
        options: [
          { id: 'a', text: 'Byggestøy utenfor klasserommet', isCorrect: true },
          { id: 'b', text: 'At mottakeren er uenig i budskapet', isCorrect: false },
          { id: 'c', text: 'At partene snakker ulike språk', isCorrect: false },
          { id: 'd', text: 'At senderen er nervøs', isCorrect: false },
        ],
        hints: ['Fysisk støy er konkrete, ytre forstyrrelser.'],
        solution: 'Byggestøy er fysisk støy fordi det er en konkret, ytre forstyrrelse som hindrer signalet i å nå frem. De andre alternativene er eksempler på andre typer støy: psykologisk (nervøsitet, uenighet) eller semantisk (språkforskjeller).',
      },
    },
    {
      id: 'kk-1-5-def-2',
      type: 'definition',
      title: 'Psykologisk støy',
      content: `**Psykologisk støy** er indre forstyrrelser hos sender eller mottaker som påvirker kommunikasjonen.

**Eksempler hos senderen:**
- Nervøsitet eller usikkerhet
- Stress eller tidspress
- Fordommer mot mottakeren

**Eksempler hos mottakeren:**
- Dagdrømming eller manglende konsentrasjon
- Forutinntatte holdninger til temaet
- Emosjonell tilstand (sinne, tristhet, begeistring)
- Tidligere negative erfaringer med senderen

**Psykologisk støy er vanskeligere å oppdage** fordi den er usynlig. Man kan se ut som om man lytter mens tankene er helt andre steder. Bevissthet om egne indre forstyrrelser er det første steget for å håndtere psykologisk støy.`,
    },
    {
      id: 'kk-1-5-example-2',
      type: 'example',
      title: 'Psykologisk støy i en viktig samtale',
      problem: 'Hvordan kan psykologisk støy ødelegge en viktig samtale mellom to venner?',
      solution: `**Situasjon:** Sara vil fortelle bestevenninnen Mia om et problem hun har hjemme. Mia har nettopp kranglet med kjæresten sin.

**Psykologisk støy hos Mia:**
- Mia tenker på sin egen krangel mens Sara snakker
- Hun er irritert og emosjonelt opptatt
- Hun klarer ikke å lytte aktivt til det Sara forteller
- Hun tolker kanskje Saras problem som «mindre viktig» fordi hun er oppslukt av sitt eget

**Konsekvens:**
Sara føler seg ikke hørt. Mia gir generelle svar uten å virkelig forstå. Sara angrer på at hun fortalte noe og trekker seg tilbake. Kommunikasjonen mislykkes fordi den psykologiske støyen hos mottakeren (Mia) forhindrer reell lytting.

**Hva Mia kunne gjort:** Vært ærlig om at hun ikke er i stand til å lytte akkurat nå, og bedt om å ta samtalen senere.`,
    },
    {
      id: 'kk-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er psykologisk støy?',
        options: [
          { id: 'a', text: 'Indre forstyrrelser som nervøsitet, fordommer eller manglende konsentrasjon', isCorrect: true },
          { id: 'b', text: 'Bakgrunnslyder som forstyrrer samtalen', isCorrect: false },
          { id: 'c', text: 'At partene bruker fagord mottakeren ikke forstår', isCorrect: false },
          { id: 'd', text: 'Kulturforskjeller mellom sender og mottaker', isCorrect: false },
        ],
        hints: ['Tenk på hva som skjer inni hodet til den som kommuniserer.'],
        solution: 'Psykologisk støy er indre forstyrrelser hos sender eller mottaker, som nervøsitet, fordommer, stress eller manglende konsentrasjon. Den er usynlig og derfor vanskeligere å identifisere enn fysisk støy.',
      },
    },
    {
      id: 'kk-1-5-def-3',
      type: 'definition',
      title: 'Semantisk og kulturell støy',
      content: `**Semantisk støy** oppstår når sender og mottaker legger ulik betydning i de samme ordene eller tegnene.

**Eksempler på semantisk støy:**
- Faguttrykk som mottakeren ikke forstår
- Flertydig ord (f.eks. «gå» kan bety å bevege seg, å slutte, å fungere)
- Ironi eller sarkasme som ikke oppfattes
- Sjargong eller slang som utenforstående ikke kjenner

**Kulturell støy** oppstår på grunn av forskjeller i kulturell bakgrunn, verdier og normer.

**Eksempler på kulturell støy:**
- Ulike regler for blikkontakt (respektfullt å se ned vs. uhøflig)
- Forskjellig kroppsspråk (nikk kan bety «ja» eller «nei» i ulike kulturer)
- Ulik oppfatning av tid (presis vs. fleksibel tidsforståelse)
- Tabuer og følsomme temaer varierer mellom kulturer
- Humor som ikke oversettes på tvers av kulturer

**Både semantisk og kulturell støy handler om tolkning** – at partene har ulike referanserammer.`,
    },
    {
      id: 'kk-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-1-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En norsk elev sier til en utvekslingselev: «Det var jo en kjempeidé!» med ironisk tonefall. Utvekslingseleven tar det bokstavelig og blir glad. Hvilken type støy er dette?',
        options: [
          { id: 'a', text: 'Semantisk støy', isCorrect: true },
          { id: 'b', text: 'Fysisk støy', isCorrect: false },
          { id: 'c', text: 'Psykologisk støy', isCorrect: false },
          { id: 'd', text: 'Teknisk støy', isCorrect: false },
        ],
        hints: ['Tenk på hva som skjer når to personer forstår de samme ordene ulikt.'],
        solution: 'Dette er semantisk støy fordi sender og mottaker legger ulik betydning i de samme ordene. Ironi innebærer at ordene betyr det motsatte av det de sier, og utvekslingseleven mangler den kulturelle og språklige konteksten til å oppfatte ironien.',
      },
    },
    {
      id: 'kk-1-5-note-1',
      type: 'note',
      title: 'Kommunikasjonsbarrierer',
      content: `Mens støy ofte er midlertidig, er **kommunikasjonsbarrierer** mer varige hindringer.

**Eksempler på barrierer:**
- **Språkbarriere:** Partene behersker ikke samme språk
- **Maktbarriere:** Ulik maktposisjon hindrer åpen kommunikasjon (ansatt tør ikke si imot sjefen)
- **Følelsesbarriere:** Sterke følelser som sinne eller frykt blokkerer rasjonell kommunikasjon
- **Teknologibarriere:** Manglende tilgang til eller kunnskap om digitale verktøy
- **Funksjonsnedsettelse:** Nedsatt hørsel, syn eller kognisjon kan kreve tilpasset kommunikasjon

**Viktig:** Barrierer kan reduseres gjennom bevisste tiltak – som tolketjenester, universell utforming, tilpasset kommunikasjon og bevissthet om maktforhold.`,
    },
    {
      id: 'kk-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi ett eksempel på hver av de fire typene støy (fysisk, psykologisk, semantisk, kulturell) fra din egen skolehverdag. Forklar kort hvorfor hvert eksempel tilhører den aktuelle kategorien.',
        hints: ['Tenk på ulike situasjoner i timen, i friminuttet, og i digitale sammenhenger.'],
        solution: 'Fysisk: Støy fra gangen som gjør det vanskelig å høre læreren (ytre forstyrrelse). Psykologisk: Du klarer ikke å konsentrere deg fordi du er spent på en prøve i neste time (indre forstyrrelse). Semantisk: Læreren bruker et fagord du ikke forstår, og du tolker setningen feil (ulik forståelse av ord). Kulturell: En medelev fra et annet land oppfatter det som uhøflig at du bruker fornavn til læreren (ulike kulturelle normer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk-1-5-text-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `**Støy og barrierer i kommunikasjon:**

| Type | Beskrivelse | Eksempel |
|------|------------|----------|
| Fysisk støy | Ytre forstyrrelser | Byggestøy, dårlig nett |
| Psykologisk støy | Indre forstyrrelser | Stress, fordommer |
| Semantisk støy | Ulik tolkning av ord/tegn | Fagsjargong, ironi |
| Kulturell støy | Kulturforskjeller | Ulikt kroppsspråk |
| Barrierer | Varige hindringer | Språk, makt, teknologi |

**Hovedpoeng:** Støy og barrierer kan identifiseres og ofte reduseres. Jo mer bevisst vi er på hva som kan forstyrre kommunikasjonen, desto bedre kan vi tilpasse oss for å bli forstått.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-1-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft: «Kulturell støy er den vanskeligste typen støy å håndtere.» Er du enig eller uenig? Begrunn svaret ditt og bruk eksempler.',
        hints: ['Sammenlign kulturell støy med de andre typene. Tenk på hva som gjør noe vanskelig å håndtere – er det fordi det er usynlig, fordi det er varig, eller fordi det krever endring?'],
        solution: 'Argumenter for: Kulturell støy er ofte ubevisst – vi merker ikke at vi tolker noe annerledes enn den andre. Den krever dyp forståelse av andres kultur, noe som tar tid å opparbeide. Man kan ikke «fikse» kulturelle forskjeller like enkelt som man kan flytte seg vekk fra byggestøy. Argumenter mot: Psykologisk støy kan også være svært vanskelig å håndtere fordi den er usynlig og personlig. Semantisk støy mellom fagfolk og lekfolk kan skape alvorlige misforståelser i helsevesenet. Et godt svar drøfter flere perspektiver og kommer med en begrunnet konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-1-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom støy og barrierer i kommunikasjon?',
        options: [
          { id: 'a', text: 'Støy er ofte midlertidig, barrierer er mer varige hindringer', isCorrect: true },
          { id: 'b', text: 'Støy finnes bare i muntlig kommunikasjon, barrierer bare i skriftlig', isCorrect: false },
          { id: 'c', text: 'Støy er alltid fysisk, barrierer er alltid psykologiske', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell mellom begrepene', isCorrect: false },
        ],
        solution: 'Støy er ofte midlertidige forstyrrelser som kan fjernes (som bakgrunnslyder eller et teknisk problem). Barrierer er mer varige hindringer som krever systematiske tiltak for å overkomme (som språkforskjeller eller maktstrukturer).',
      },
    },
    {
      id: 'kk-1-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kk-1-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en kommunikasjonsbarriere (språk, makt, følelser, teknologi eller funksjonsnedsettelse) og foreslå tre konkrete tiltak for å redusere den.',
        hints: ['Tenk på hva samfunnet, organisasjoner og enkeltpersoner kan gjøre.'],
        solution: 'For eksempel for språkbarriere: 1) Bruke profesjonell tolk i viktige samtaler (helsevesen, skole). 2) Tilby språkkurs og norskopplæring for nyankomne. 3) Bruke visuell kommunikasjon som infografikk og piktogrammer som supplement til tekst. Svaret bør vise forståelse for at barrierer kan reduseres gjennom bevisste tiltak på ulike nivåer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Støy', definition: 'Alt som forstyrrer kommunikasjonsprosessen og hindrer budskapet i å nå frem.' },
    { term: 'Fysisk støy', definition: 'Konkrete, ytre forstyrrelser som byggelyd, dårlig nett eller uleselig skrift.' },
    { term: 'Psykologisk støy', definition: 'Indre forstyrrelser som stress, nervøsitet, fordommer eller manglende konsentrasjon.' },
    { term: 'Semantisk støy', definition: 'Ulik tolkning av ord og tegn mellom sender og mottaker.' },
    { term: 'Kulturell støy', definition: 'Misforståelser som oppstår på grunn av forskjeller i kulturell bakgrunn og normer.' },
    { term: 'Kommunikasjonsbarriere', definition: 'Varig hindring som gjør kommunikasjon mellom grupper eller personer vanskelig.' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT_1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT_1_1_1,
  CHAPTER_KOMKULT_1_1_2,
  CHAPTER_KOMKULT_1_1_3,
  CHAPTER_KOMKULT_1_1_4,
  CHAPTER_KOMKULT_1_1_5,
];
