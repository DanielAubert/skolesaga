/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 1 (VG2) - Del 1: Introduksjon til medier
 * Kapittel 1.1–1.5
 * LK20-kompetansemål:
 * - gjøre rede for hva medier er og hvilke funksjoner de har
 * - beskrive ulike medietyper og medieplattformer
 * - analysere det norske medielandskapet
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hva er medier?
// ============================================================================

export const CHAPTER_MEDIEINFO_1_1_1: TextbookChapter = {
  id: 'medieinfo-1-1-1',
  courseId: 'medieinfo-1',
  chapterNumber: '1.1',
  title: 'Hva er medier?',
  description: 'Mediebegrepet, definisjoner, massemedier vs. personlige medier.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for hva medier er og hvilke funksjoner de har',
  ],
  content: [
    {
      id: 'mi-1-1-intro',
      type: 'text' as const,
      content: `# Hva er medier?

Du bruker medier hver eneste dag. Kanskje starter du morgenen med å sjekke mobilen, hører på en podcast på vei til skolen, leser nyheter i friminuttet og strømmer en serie om kvelden. Medier omgir oss hele tiden og former måten vi forstår verden på.

Men hva er egentlig et medium? Ordet **medium** kommer fra latin og betyr «det som er i midten» eller «et mellomledd». Et medium er altså noe som formidler et budskap mellom en avsender og en mottaker. Flertallsformen er **medier**.

I vid forstand kan nesten hva som helst fungere som et medium – en bok, en avis, en TV-skjerm, en mobiltelefon eller til og med et veiskilt. Felles for alle medier er at de bærer innhold fra én part til en annen.`
    },
    {
      id: 'mi-1-1-def-1',
      type: 'definition' as const,
      title: 'Medium og medier',
      content: `**Medium** (flertall: **medier**) er en kanal eller et verktøy som formidler informasjon, budskap eller uttrykk mellom en avsender og en mottaker.

Begrepet brukes i flere betydninger:
- **Teknologisk betydning:** Den fysiske kanalen (papir, skjerm, radiobølger)
- **Institusjonell betydning:** Organisasjonen bak innholdet (VG, NRK, TV 2)
- **Innholdsmessig betydning:** Typen innhold som formidles (nyheter, underholdning, reklame)`
    },
    {
      id: 'mi-1-1-example-1',
      type: 'example' as const,
      title: 'Eksempel: Samme nyhet – ulike medier',
      content: `**Situasjon:** En stor trafikkulykke har skjedd på E6 utenfor Oslo.

**Hvordan ulike medier dekker hendelsen:**

- **NRK radio:** Kort nyhetsmelding i radioen, lest av nyhetsoppleseren. Når mange raskt.
- **VG nett:** Direktesendt oppdatering med bilder, kart og øyenvitneskildringer. Oppdateres fortløpende.
- **Aftenposten papiravis:** Større reportasje dagen etter med bakgrunnsinformasjon og analyse.
- **Instagram:** Øyenvitner deler bilder og korte videoer. Spres raskt, men uten redaksjonell kontroll.
- **NRK TV:** Innslag i Dagsrevyen med reporterbilder fra stedet og intervju med politi.

Eksempelet viser at ulike medier har ulike egenskaper og formidler det samme innholdet på forskjellige måter. Valg av medium påvirker hvordan vi opplever nyheten.`
    },
    {
      id: 'mi-1-1-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva betyr det latinske ordet «medium»?',
        options: [
          { id: 'a', text: 'Det som er i midten / et mellomledd', isCorrect: true },
          { id: 'b', text: 'Det som er størst / det viktigste', isCorrect: false },
          { id: 'c', text: 'Det som beveger seg / transport', isCorrect: false },
          { id: 'd', text: 'Det som forandrer seg / endring', isCorrect: false },
        ],
        solution: 'Riktig svar er a. «Medium» kommer fra latin og betyr «det som er i midten» eller «et mellomledd». Et medium er noe som formidler et budskap mellom avsender og mottaker.',
      },
    },
    {
      id: 'mi-1-1-def-2',
      type: 'definition' as const,
      title: 'Massemedier og personlige medier',
      content: `**Massemedier** er medier som når ut til et stort, ofte ukjent publikum samtidig. Budskapet går fra én avsender til mange mottakere (en-til-mange-kommunikasjon).

Eksempler: Aviser, radio, TV, nettaviser, filmvisning på kino.

**Personlige medier** (også kalt individuelle medier) er medier som brukes til kommunikasjon mellom enkeltpersoner eller små grupper (en-til-en eller få-til-få).

Eksempler: Telefon, e-post, brev, direktemeldinger (SMS, Snapchat, iMessage).

**Sosiale medier** er en hybrid: De kan fungere som både massemedier og personlige medier. En TikTok-video kan nå millioner (massemedie), mens en privat gruppesamtale på Messenger er personlig kommunikasjon.`
    },
    {
      id: 'mi-1-1-example-2',
      type: 'example' as const,
      title: 'Eksempel: Massemedier vs. personlige medier i hverdagen',
      content: `**Sofies mediebruk en vanlig dag:**

| Tidspunkt | Aktivitet | Type |
|-----------|-----------|------|
| 07:00 | Hører på P3 morgen | Massemedie |
| 07:30 | Sender Snapchat til bestekompis | Personlig medie |
| 08:15 | Leser Aftenposten-artikkel | Massemedie |
| 12:00 | Gruppesamtale på Messenger | Personlig medie |
| 15:00 | Scroller Instagram-feeden | Hybridmedie (sosiale medier) |
| 19:00 | Ser Dagsrevyen på NRK1 | Massemedie |
| 21:00 | Sender iMessage til mamma | Personlig medie |

Legg merke til hvordan Sofie veksler mellom massemedier og personlige medier gjennom hele dagen. Grensene mellom de to kan ofte være uklare, særlig når det gjelder sosiale medier.`
    },
    {
      id: 'mi-1-1-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er det beste eksempelet på et massemedie?',
        options: [
          { id: 'a', text: 'En SMS til en venn', isCorrect: false },
          { id: 'b', text: 'En nyhetsartikkel i Dagbladet', isCorrect: true },
          { id: 'c', text: 'En privat e-post til læreren', isCorrect: false },
          { id: 'd', text: 'En telefonsamtale med bestemor', isCorrect: false },
        ],
        solution: 'Riktig svar er b. En nyhetsartikkel i Dagbladet er rettet mot et stort, ukjent publikum (en-til-mange), og er dermed et typisk massemedie. De andre alternativene er personlig kommunikasjon mellom enkeltpersoner.',
      },
    },
    {
      id: 'mi-1-1-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvorfor regnes sosiale medier som en hybrid mellom massemedier og personlige medier?',
        options: [
          { id: 'a', text: 'Fordi de bare finnes på internett', isCorrect: false },
          { id: 'b', text: 'Fordi de kan brukes til både offentlig massekommunikasjon og privat kommunikasjon mellom enkeltpersoner', isCorrect: true },
          { id: 'c', text: 'Fordi de er gratis å bruke', isCorrect: false },
          { id: 'd', text: 'Fordi de ble oppfunnet etter både aviser og telefon', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Sosiale medier er en hybrid fordi en TikTok-video kan nå millioner (massemedie-funksjon), mens en direktemelding på Instagram er personlig kommunikasjon (personlig medie-funksjon).',
      },
    },
    {
      id: 'mi-1-1-text-summary',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- Et **medium** er en kanal som formidler budskap mellom avsender og mottaker
- Begrepet kan forstås teknologisk, institusjonelt og innholdsmessig
- **Massemedier** retter seg mot et stort, ofte ukjent publikum (en-til-mange)
- **Personlige medier** brukes mellom enkeltpersoner eller små grupper
- **Sosiale medier** er en hybrid som kan fungere som begge deler
- Valg av medium påvirker hvordan innholdet formidles og oppleves`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-1-1-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Før en mediedigge over to dager: Skriv ned alle medier du bruker, hvor lang tid du bruker på hvert, og kategoriser dem som massemedier, personlige medier eller hybrid. Hva legger du merke til?',
        hints: [
          'Husk å inkludere både digitale og analoge medier',
          'Tenk også på mediebruk du kanskje ikke tenker over, som bakgrunnsmusikk eller skilt',
        ],
        solution: 'En god mediedigge bør inneholde en systematisk oversikt over all mediebruk, kategorisering av hvert medium, tidsbruk, og en refleksjon over mønstre – for eksempel at personlige medier dominerer morgen og kveld, mens massemedier er mer fremtredende i pauser og fritid.',
      },
    },
    {
      id: 'mi-1-1-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar med egne ord hva et medium er, og gi tre eksempler på hvordan det samme budskapet kan formidles gjennom ulike medier. Drøft hvordan valg av medium påvirker budskapet.',
        hints: [
          'Start med å definere begrepet medium',
          'Velg ett konkret budskap og vis hvordan det endrer seg i ulike medier',
        ],
        solution: 'Svaret bør inneholde en klar definisjon av medium som et mellomledd for formidling av budskap, tre konkrete eksempler (f.eks. en nyhet formidlet via TV, avis og sosiale medier), og en drøfting av hvordan mediet påvirker budskapet – tempo, dybde, visuelt uttrykk, interaktivitet og rekkevidde.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Medium', definition: 'Kanal eller verktøy som formidler budskap mellom avsender og mottaker.' },
    { term: 'Massemedier', definition: 'Medier som når ut til et stort, ofte ukjent publikum samtidig (en-til-mange).' },
    { term: 'Personlige medier', definition: 'Medier brukt til kommunikasjon mellom enkeltpersoner eller små grupper.' },
    { term: 'Sosiale medier', definition: 'Hybridmedier som kan fungere som både massemedier og personlige medier.' },
    { term: 'En-til-mange-kommunikasjon', definition: 'Kommunikasjonsform der ett budskap sendes til et stort publikum.' },
  ],
};

// ============================================================================
// Kapittel 1.2: Medietyper og medieplattformer
// ============================================================================

export const CHAPTER_MEDIEINFO_1_1_2: TextbookChapter = {
  id: 'medieinfo-1-1-2',
  courseId: 'medieinfo-1',
  chapterNumber: '1.2',
  title: 'Medietyper og medieplattformer',
  description: 'Trykte, elektroniske og digitale medier, samt mediekonvergens.',
  estimatedMinutes: 24,
  competenceGoals: [
    'beskrive ulike medietyper og medieplattformer',
  ],
  content: [
    {
      id: 'mi-1-2-intro',
      type: 'text' as const,
      content: `# Medietyper og medieplattformer

Gjennom historien har mennesker utviklet stadig nye måter å formidle budskap på. Fra de første håndskrevne brevene til dagens strømmetjenester har medielandskapet gjennomgått enorme forandringer. For å forstå dagens mediesamfunn er det nyttig å kjenne til de ulike medietypene og hvordan de har utviklet seg.

Medier kan deles inn etter hvilken teknologi de bygger på. De tre hovedkategoriene er **trykte medier**, **elektroniske medier** og **digitale medier**. I tillegg ser vi i dag en sterk trend mot **mediekonvergens** – at ulike medietyper smelter sammen på digitale plattformer.`
    },
    {
      id: 'mi-1-2-def-1',
      type: 'definition' as const,
      title: 'Trykte medier',
      content: `**Trykte medier** er medier der innholdet er trykt på papir eller lignende fysisk materiale. De er blant de eldste formene for massemedier.

**Eksempler:**
- Aviser (Aftenposten, VG, Bergens Tidende)
- Tidsskrifter og magasiner (Vi Menn, KK, Teknisk Ukeblad)
- Bøker (romaner, fagbøker, lærebøker)
- Brosjyrer, plakater og flygeblader

**Kjennetegn:**
- Fysisk format som kan holdes i hånden
- Permanent innhold som ikke kan endres etter trykking
- Krever distribusjon gjennom transport
- Har lange tradisjoner i det norske samfunnet`
    },
    {
      id: 'mi-1-2-def-2',
      type: 'definition' as const,
      title: 'Elektroniske medier',
      content: `**Elektroniske medier** er medier som bruker elektronisk teknologi til å formidle lyd og/eller bilde. De oppstod med oppfinnelsen av telegrafen, radioen og fjernsynet.

**Eksempler:**
- Radio (NRK P1, P4, Radio Norge)
- Fjernsyn (NRK1, TV 2, TVNorge)
- Film (kino, DVD, Blu-ray)

**Kjennetegn:**
- Formidler lyd, bilder eller begge deler
- Kan nå publikum i sanntid (direktesendinger)
- Krever mottakerutstyr (radio, TV-apparat)
- Tradisjonelt lineære – sendes på faste tidspunkter`
    },
    {
      id: 'mi-1-2-def-3',
      type: 'definition' as const,
      title: 'Digitale medier',
      content: `**Digitale medier** er medier der innholdet lagres og formidles som digital informasjon (0 og 1). De omfatter alle medier som finnes på internett og digitale plattformer.

**Eksempler:**
- Nettaviser (vg.no, nrk.no, dagbladet.no)
- Sosiale medier (Instagram, TikTok, Snapchat, Facebook)
- Strømmetjenester (Netflix, Spotify, NRK TV)
- Podkaster og nettbasert video (YouTube)
- Blogger og nettmagasiner

**Kjennetegn:**
- Interaktivitet – brukeren kan delta, kommentere og dele
- Tilgjengelig når og hvor som helst (on demand)
- Innholdet kan oppdateres og endres fortløpende
- Brukerne kan selv produsere og dele innhold`
    },
    {
      id: 'mi-1-2-example-1',
      type: 'example' as const,
      title: 'Eksempel: Avisens utvikling gjennom tre mediealder',
      content: `**Trykt medie (1800-tallet til i dag):**
Aftenposten har gitt ut papiraviser siden 1860. Innholdet er ferdig når avisen trykkes, og den distribueres fysisk til abonnenter og utsalgssteder.

**Elektronisk medie (1920-tallet til i dag):**
Med radio og TV kunne nyhetene fra avisene formidles raskere. NRK Dagsrevyen sendte de viktigste nyhetene til hele landet samtidig hver kveld.

**Digitalt medie (1990-tallet til i dag):**
Aftenposten.no oppdateres kontinuerlig med nyheter, bilder, video og interaktive elementer. Leserne kan kommentere, dele på sosiale medier og velge selv hva de vil lese og når.

Denne utviklingen viser hvordan nye medietyper ikke nødvendigvis erstatter de gamle, men legger nye lag til medielandskapet.`
    },
    {
      id: 'mi-1-2-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner digitale medier til forskjell fra trykte medier?',
        options: [
          { id: 'a', text: 'Digitale medier er alltid gratis å bruke', isCorrect: false },
          { id: 'b', text: 'Digitale medier tillater interaktivitet og kan oppdateres fortløpende', isCorrect: true },
          { id: 'c', text: 'Digitale medier har alltid høyere kvalitet enn trykte medier', isCorrect: false },
          { id: 'd', text: 'Digitale medier finnes bare på mobiltelefoner', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Det viktigste skillet er at digitale medier tillater interaktivitet (brukeren kan kommentere, dele, produsere innhold) og at innholdet kan oppdateres og endres fortløpende, i motsetning til trykte medier der innholdet er permanent etter trykking.',
      },
    },
    {
      id: 'mi-1-2-convergence',
      type: 'text' as const,
      content: `## Mediekonvergens

Et av de viktigste begrepene for å forstå dagens mediesamfunn er **mediekonvergens**. Konvergens betyr «å nærme seg hverandre» eller «å smelte sammen».

Mediekonvergens skjer på flere nivåer:

**Teknologisk konvergens:** Samme enhet (f.eks. smarttelefonen) kan brukes til å ringe, lese nyheter, se TV, høre radio, ta bilder og publisere på sosiale medier. Tidligere krevde dette mange forskjellige apparater.

**Innholdskonvergens:** En nettavis kombinerer tekst, bilder, video, lyd og interaktive grafikker i samme artikkel. Grensene mellom avis, TV og radio viskes ut.

**Økonomisk konvergens:** Medieselskaper som tidligere bare drev med ett medium, opererer nå på tvers av flere plattformer. Schibsted eier både aviser, nettaviser og digitale markedsplasser.

**Kulturell konvergens:** Medieinnhold flyter på tvers av plattformer. En TV-serie diskuteres på sosiale medier, som igjen påvirker innholdet i serien.`
    },
    {
      id: 'mi-1-2-def-4',
      type: 'definition' as const,
      title: 'Medieplattform og mediekonvergens',
      content: `**Medieplattform** er den tekniske og organisatoriske infrastrukturen som medieinnhold distribueres gjennom. Eksempler er NRK TV (strømmeplattform), Spotify (musikkplattform), YouTube (videoplattform) og Snapchat (sosial plattform).

**Mediekonvergens** betyr at ulike medieformer, teknologier og plattformer smelter sammen. Resultatet er at skillet mellom for eksempel avis, radio og TV blir stadig mindre tydelig.

**Flerplattformstrategi** er når et medieselskap distribuerer innhold på flere plattformer samtidig – for eksempel når NRK sender et program på TV, legger det ut på NRK TV, lager klipp for sosiale medier og publiserer en artikkel på nrk.no.`
    },
    {
      id: 'mi-1-2-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er det beste eksempelet på teknologisk konvergens?',
        options: [
          { id: 'a', text: 'At aviser trykkes på bedre papir', isCorrect: false },
          { id: 'b', text: 'At smarttelefonen fungerer som telefon, kamera, TV, radio og avis i én enhet', isCorrect: true },
          { id: 'c', text: 'At flere TV-kanaler sender samme program', isCorrect: false },
          { id: 'd', text: 'At journalister jobber raskere enn før', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Teknologisk konvergens betyr at funksjonene til mange ulike apparater samles i én enhet. Smarttelefonen er det tydeligste eksempelet, fordi den erstatter det som tidligere krevde separate apparater for telefoni, fotografering, TV-titting, radiolytting og avislesing.',
      },
    },
    {
      id: 'mi-1-2-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva menes med en flerplattformstrategi?',
        options: [
          { id: 'a', text: 'At et medieselskap bare bruker digitale plattformer', isCorrect: false },
          { id: 'b', text: 'At publikum bruker flere apper samtidig', isCorrect: false },
          { id: 'c', text: 'At et medieselskap distribuerer innhold på flere plattformer samtidig', isCorrect: true },
          { id: 'd', text: 'At medieselskapene samarbeider om å lage felles innhold', isCorrect: false },
        ],
        solution: 'Riktig svar er c. En flerplattformstrategi innebærer at et medieselskap distribuerer innholdet sitt på flere plattformer – for eksempel TV, nettavis, strømmetjeneste og sosiale medier – for å nå publikum der de er.',
      },
    },
    {
      id: 'mi-1-2-text-summary',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- **Trykte medier** er basert på papir (aviser, bøker, magasiner) og har permanent innhold
- **Elektroniske medier** bruker elektronisk teknologi til å formidle lyd og bilde (radio, TV)
- **Digitale medier** lagrer innhold digitalt og kjennetegnes av interaktivitet og tilgjengelighet
- **Mediekonvergens** betyr at ulike medietyper smelter sammen, særlig på digitale plattformer
- Konvergens skjer teknologisk, innholdsmessig, økonomisk og kulturelt
- En **flerplattformstrategi** betyr at innhold distribueres på flere plattformer samtidig
- Nye medietyper erstatter sjelden de gamle helt, men endrer bruken av dem`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-1-2-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg et stort norsk medieselskap (f.eks. NRK, Schibsted eller TV 2). Beskriv hvilke plattformer de bruker, og forklar hvordan dette illustrerer mediekonvergens.',
        hints: [
          'Tenk på ulike plattformer: TV, radio, nettside, apper, sosiale medier',
          'Vurder hvordan det samme innholdet tilpasses ulike plattformer',
        ],
        solution: 'Svaret bør beskrive selskapets tilstedeværelse på flere plattformer, gi konkrete eksempler på innhold som tilpasses de ulike plattformene, og knytte dette til begrepet mediekonvergens. For eksempel har NRK lineær TV, NRK TV-appen, nrk.no, radio, podkaster og kontoer på sosiale medier.',
      },
    },
    {
      id: 'mi-1-2-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en tidslinje som viser utviklingen fra trykte medier til digitale medier i Norge. Inkluder minst seks viktige milepæler og forklar betydningen av hver.',
        hints: [
          'Start med trykte medier på 1800-tallet og jobb deg fremover',
          'Inkluder radio, TV, internett, sosiale medier og strømmetjenester',
        ],
        solution: 'Tidslinjen bør inneholde milepæler som: første norske avis (Norske Intelligenz-Seddeler, 1763), NRK radio (1933), NRK TV (1960), TV 2 (1992), nettaviser (midt på 1990-tallet), Facebook i Norge (ca. 2007), strømmetjenester (2010-tallet). Forklaringene bør vise hvordan hver milepæl endret medielandskapet.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Trykte medier', definition: 'Medier der innholdet er trykt på papir, som aviser, bøker og magasiner.' },
    { term: 'Elektroniske medier', definition: 'Medier som bruker elektronisk teknologi til å formidle lyd og/eller bilde, som radio og TV.' },
    { term: 'Digitale medier', definition: 'Medier der innholdet lagres og formidles digitalt, med mulighet for interaktivitet.' },
    { term: 'Mediekonvergens', definition: 'At ulike medieformer, teknologier og plattformer smelter sammen.' },
    { term: 'Medieplattform', definition: 'Teknisk og organisatorisk infrastruktur som medieinnhold distribueres gjennom.' },
    { term: 'Flerplattformstrategi', definition: 'Distribusjon av innhold på flere plattformer samtidig for å nå publikum der de er.' },
  ],
};

// ============================================================================
// Kapittel 1.3: Medienes funksjoner i samfunnet
// ============================================================================

export const CHAPTER_MEDIEINFO_1_1_3: TextbookChapter = {
  id: 'medieinfo-1-1-3',
  courseId: 'medieinfo-1',
  chapterNumber: '1.3',
  title: 'Medienes funksjoner i samfunnet',
  description: 'Informasjon, underholdning, vaktbikkje, debattarena og sosialisering.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for hva medier er og hvilke funksjoner de har',
  ],
  content: [
    {
      id: 'mi-1-3-intro',
      type: 'text' as const,
      content: `# Medienes funksjoner i samfunnet

Mediene spiller en avgjørende rolle i et demokratisk samfunn. De er langt mer enn bare kanaler for nyheter og underholdning – de former vår forståelse av verden, legger til rette for offentlig debatt og holder makthavere ansvarlige.

Men hvilke konkrete funksjoner har mediene? Medieforskere har identifisert flere sentrale funksjoner som mediene fyller i samfunnet. Disse funksjonene overlapper ofte, og et enkelt medieinnhold kan fylle flere funksjoner samtidig.

La oss se nærmere på de fem viktigste funksjonene.`
    },
    {
      id: 'mi-1-3-def-1',
      type: 'definition' as const,
      title: 'Medienes fem hovedfunksjoner',
      content: `**1. Informasjonsfunksjonen:**
Mediene formidler nyheter, fakta og kunnskap til befolkningen. Dette gir borgerne det kunnskapsgrunnlaget de trenger for å delta i demokratiet.

**2. Vaktbikkjefunksjonen:**
Mediene overvåker og kontrollerer makthavere – politikere, næringsliv og offentlige institusjoner. Pressen avdekker maktmisbruk, korrupsjon og feil.

**3. Arenafunksjonen (debattfunksjonen):**
Mediene er en arena for offentlig debatt. Gjennom debattinnlegg, kommentarfelt og diskusjonsprogrammer kan borgerne delta i den demokratiske samtalen.

**4. Underholdningsfunksjonen:**
Mediene tilbyr underholdning i form av serier, filmer, spill, humor og kultur. Underholdning er en viktig del av menneskers liv og trivsel.

**5. Sosialiseringsfunksjonen:**
Mediene bidrar til sosialisering ved å formidle verdier, normer og kulturelle referanser. De er med på å forme vår oppfatning av hva som er normalt og akseptabelt i samfunnet.`
    },
    {
      id: 'mi-1-3-example-1',
      type: 'example' as const,
      title: 'Eksempel: Vaktbikkjefunksjonen i praksis',
      content: `**VG og den såkalte «ambulansesaken» (2007):**
VG avslørte at en bevisstløs mann med innvandrerbakgrunn ikke fikk hjelp av ambulansepersonell på Sofienberg i Oslo. Saken førte til stor offentlig debatt om rasisme i helsevesenet og resulterte i endringer i ambulansetjenestens rutiner.

**Dagbladets dekning av «Nav-skandalen» (2019):**
Mediene avdekket at Nav feilaktig hadde anmeldt og fått dømt personer som hadde oppholdt seg i EØS-land mens de mottok trygd. Myndighetenes egen feiltolkning av EØS-reglene ble avslørt gjennom journalistisk arbeid.

**Felles for begge sakene:**
- Mediene avdekket feil begått av myndigheter
- Sakene førte til offentlig debatt og endringer
- Uten medienes vaktbikkjerolle ville feilen kanskje ikke blitt rettet opp

Disse eksemplene viser hvorfor en fri presse er avgjørende for demokratiet.`
    },
    {
      id: 'mi-1-3-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva innebærer medienes vaktbikkjefunksjon?',
        options: [
          { id: 'a', text: 'At mediene underholder befolkningen', isCorrect: false },
          { id: 'b', text: 'At mediene overvåker og kontrollerer makthavere og avdekker maktmisbruk', isCorrect: true },
          { id: 'c', text: 'At mediene formidler nyheter og informasjon', isCorrect: false },
          { id: 'd', text: 'At mediene skaper en arena for offentlig debatt', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Vaktbikkjefunksjonen handler om at mediene overvåker makthavere – som politikere, offentlige institusjoner og næringsliv – og avdekker maktmisbruk, korrupsjon og feil. Dette skiller seg fra informasjonsfunksjonen (c) og arenafunksjonen (d).',
      },
    },
    {
      id: 'mi-1-3-text-fourthpower',
      type: 'text' as const,
      content: `## Den fjerde statsmakt

Mediene omtales ofte som «den fjerde statsmakt». De tre første statsmaktene i Norge er:

1. **Stortinget** (den lovgivende makt)
2. **Regjeringen** (den utøvende makt)
3. **Domstolene** (den dømmende makt)

Mediene regnes som «den fjerde statsmakt» fordi de kontrollerer de tre andre. Gjennom gravende journalistikk, kritisk rapportering og offentlig debatt sørger mediene for at politikere og embetsverk holdes ansvarlige overfor befolkningen.

Det er viktig å understreke at dette er en uformell betegnelse – mediene har ingen formell makt slik de tre andre statsmaktene har. Medienes makt ligger i deres evne til å sette dagsorden, påvirke opinionen og rette søkelyset mot saker som ellers kunne forblitt skjult.`
    },
    {
      id: 'mi-1-3-example-2',
      type: 'example' as const,
      title: 'Eksempel: Én sak – flere funksjoner',
      content: `**NRKs dekning av klimatoppmøtet i Glasgow (2021):**

| Funksjon | Eksempel |
|----------|----------|
| Informasjon | Rapporterer om forhandlingene, hva landene ble enige om, og hva avtalen innebærer |
| Vaktbikkje | Undersøker om norske politikere holder sine klimaløfter |
| Arena | Sender debattprogram der politikere, forskere og aktivister diskuterer klimapolitikk |
| Underholdning | Dokumentarserier om natur og klima som engasjerer med visuell historiefortelling |
| Sosialisering | Formidler normer og verdier rundt klimaansvar og bærekraft |

Eksempelet viser at ett og samme tema kan dekke alle fem mediefunksjonene, avhengig av vinkling og format.`
    },
    {
      id: 'mi-1-3-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvorfor kalles mediene «den fjerde statsmakt»?',
        options: [
          { id: 'a', text: 'Fordi mediene har formell politisk makt i Grunnloven', isCorrect: false },
          { id: 'b', text: 'Fordi mediene kontrollerer og overvåker de tre andre statsmaktene', isCorrect: true },
          { id: 'c', text: 'Fordi mediene er det fjerde største næringslivsområdet i Norge', isCorrect: false },
          { id: 'd', text: 'Fordi mediene ble opprettet som den fjerde statlige institusjonen', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Mediene kalles «den fjerde statsmakt» fordi de kontrollerer de tre andre statsmaktene (Stortinget, regjeringen og domstolene). Det er en uformell betegnelse – mediene har ingen formell makt, men påvirker gjennom journalistikk og opinionsbygging.',
      },
    },
    {
      id: 'mi-1-3-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken mediefunksjon fyller et debattprogram på TV der politikere diskuterer statsbudsjettet?',
        options: [
          { id: 'a', text: 'Underholdningsfunksjonen', isCorrect: false },
          { id: 'b', text: 'Sosialiseringsfunksjonen', isCorrect: false },
          { id: 'c', text: 'Arenafunksjonen (debattfunksjonen)', isCorrect: true },
          { id: 'd', text: 'Kun informasjonsfunksjonen', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Et debattprogram der politikere diskuterer statsbudsjettet fyller primært arenafunksjonen, fordi mediet fungerer som en arena for offentlig debatt. Programmet fyller også informasjonsfunksjonen, men den primære funksjonen er å legge til rette for meningsutveksling.',
      },
    },
    {
      id: 'mi-1-3-text-summary',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- Mediene fyller fem hovedfunksjoner: informasjon, vaktbikkje, arena, underholdning og sosialisering
- **Informasjonsfunksjonen** gir borgerne kunnskap til å delta i demokratiet
- **Vaktbikkjefunksjonen** holder makthavere ansvarlige
- **Arenafunksjonen** legger til rette for offentlig debatt
- **Underholdningsfunksjonen** tilbyr rekreasjon og kulturopplevelser
- **Sosialiseringsfunksjonen** formidler verdier, normer og kulturelle referanser
- Mediene kalles «den fjerde statsmakt» fordi de kontrollerer de tre andre
- Én enkelt mediesak kan fylle flere funksjoner samtidig`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-1-3-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Finn en aktuell nyhetssak i norske medier. Analyser hvilke av de fem mediefunksjonene saken fyller, og begrunn svaret ditt med konkrete eksempler fra dekningen.',
        hints: [
          'Velg en sak som dekkes av flere medier og i ulike formater',
          'Se etter informasjon, kritisk journalistikk, debatt, underholdende vinkling og verdiformidling',
        ],
        solution: 'Analysen bør identifisere hvilke av de fem funksjonene saken fyller, med konkrete eksempler. Et godt svar viser at én nyhetssak kan fylle flere funksjoner, og forklarer hvordan ulike vinklinger og formater aktiverer ulike funksjoner.',
      },
    },
    {
      id: 'mi-1-3-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft følgende påstand: «Underholdningsfunksjonen er like viktig for demokratiet som vaktbikkjefunksjonen.» Bruk eksempler fra norske medier i drøftingen.',
        hints: [
          'Tenk på argumenter for og imot påstanden',
          'Vurder om underholdning kan ha demokratisk verdi, for eksempel gjennom satire',
        ],
        solution: 'En god drøfting bør argumentere for begge sider. For påstanden: Underholdning engasjerer bredere lag av befolkningen, satire kan avsløre maktmisbruk, kulturelle fortellinger former demokratiske verdier. Mot påstanden: Vaktbikkjefunksjonen er mer direkte knyttet til demokratisk kontroll, uten den kan maktmisbruk forbli skjult. Svaret bør konkludere med en begrunnet vurdering.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Informasjonsfunksjonen', definition: 'Medienes formidling av nyheter, fakta og kunnskap til befolkningen.' },
    { term: 'Vaktbikkjefunksjonen', definition: 'Medienes overvåking og kontroll av makthavere i samfunnet.' },
    { term: 'Arenafunksjonen', definition: 'Medienes rolle som arena for offentlig debatt og meningsutveksling.' },
    { term: 'Underholdningsfunksjonen', definition: 'Medienes tilbud av underholdning, kultur og rekreasjon.' },
    { term: 'Sosialiseringsfunksjonen', definition: 'Medienes rolle i å formidle verdier, normer og kulturelle referanser.' },
    { term: 'Den fjerde statsmakt', definition: 'Uformell betegnelse på medienes rolle som kontrollør av de tre statsmaktene.' },
  ],
};

// ============================================================================
// Kapittel 1.4: Mediebruk og medievaner
// ============================================================================

export const CHAPTER_MEDIEINFO_1_1_4: TextbookChapter = {
  id: 'medieinfo-1-1-4',
  courseId: 'medieinfo-1',
  chapterNumber: '1.4',
  title: 'Mediebruk og medievaner',
  description: 'Nordmenns mediebruk, generasjonsforskjeller og skjermtid.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for hva medier er og hvilke funksjoner de har',
    'beskrive ulike medietyper og medieplattformer',
  ],
  content: [
    {
      id: 'mi-1-4-intro',
      type: 'text' as const,
      content: `# Mediebruk og medievaner

Nordmenn er blant verdens mest aktive mediebrukere. Vi bruker i gjennomsnitt mange timer daglig på ulike medier – fra nyhetslesing og strømming til sosiale medier og gaming. Men mediebruken varierer betydelig mellom ulike aldersgrupper og over tid.

For å forstå mediesamfunnet er det viktig å kjenne til hvordan folk faktisk bruker medier. Medietilsynet og Statistisk sentralbyrå (SSB) gjennomfører regelmessige undersøkelser av nordmenns medievaner. Disse dataene gir oss et bilde av et medielandskap i rask endring.`
    },
    {
      id: 'mi-1-4-def-1',
      type: 'definition' as const,
      title: 'Sentrale begreper i mediebruksforskning',
      content: `**Mediebruk** er mengden tid og oppmerksomhet vi bruker på ulike medier, og måten vi bruker dem på.

**Medievaner** er de faste mønstrene i mediebruken vår – hvilke medier vi bruker, når vi bruker dem, og hvordan.

**Skjermtid** er den totale tiden vi bruker foran skjermer (mobil, nettbrett, PC, TV). Begrepet brukes ofte i diskusjoner om helse og velvære.

**Mediedøgnet** er et begrep som beskriver hvordan mediebruken fordeler seg gjennom døgnet – fra morgenens nyhetssjekk til kveldens strømming.

**Reach (rekkevidde)** er andelen av befolkningen som bruker et bestemt medium i løpet av en gitt tidsperiode.

**Mediediet** er en metafor for sammensetningen av medier en person bruker, på samme måte som kosthold beskriver hva vi spiser.`
    },
    {
      id: 'mi-1-4-example-1',
      type: 'example' as const,
      title: 'Eksempel: Generasjonsforskjeller i mediebruk',
      content: `**Besteforeldre-generasjonen (60+):**
- Leser papiravisen til frokost
- Hører på NRK P1 i bilen
- Ser Dagsrevyen kl. 19:00
- Bruker Facebook for å holde kontakten med familie
- Begrenset bruk av strømmetjenester

**Foreldregenerasjonen (35–55):**
- Leser nettaviser på mobilen om morgenen
- Hører podkaster i bilen eller på trening
- Strømmer serier på Netflix eller NRK TV om kvelden
- Bruker Facebook og Instagram
- Leser papiraviser i helgene

**Ungdomsgenerasjonen (15–25):**
- Sjekker TikTok og Instagram som det første om morgenen
- Får nyheter gjennom sosiale medier, ikke tradisjonelle nyhetskilder
- Strømmer musikk på Spotify hele dagen
- Ser YouTube og strømmetjenester fremfor lineær TV
- Kommuniserer via Snapchat og direktemeldinger

Disse forskjellene kalles ofte **generasjonskløften i mediebruk** og har konsekvenser for hvordan mediene må tilpasse seg for å nå ulike målgrupper.`
    },
    {
      id: 'mi-1-4-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva menes med «mediedøgnet»?',
        options: [
          { id: 'a', text: 'At vi bruker medier 24 timer i døgnet uten pause', isCorrect: false },
          { id: 'b', text: 'Hvordan mediebruken fordeler seg gjennom døgnets timer', isCorrect: true },
          { id: 'c', text: 'Det døgnet hvert år der mediebruken er høyest', isCorrect: false },
          { id: 'd', text: 'Tiden det tar før en nyhet sprer seg til alle medier', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Mediedøgnet beskriver hvordan mediebruken fordeler seg gjennom døgnet – fra morgenens nyhetssjekk og sosiale medier, via arbeidsdagens mediebruk, til kveldens strømming og underholdning.',
      },
    },
    {
      id: 'mi-1-4-trends',
      type: 'text' as const,
      content: `## Trender i norsk mediebruk

Norsk mediebruk har endret seg dramatisk de siste tiårene. Her er noen av de viktigste trendene:

**Fra lineært til on demand:**
Tidligere var mediebruken styrt av sendeskjemaer – man måtte se Dagsrevyen kl. 19:00 eller høre nyhetene kl. 18:00. I dag velger vi selv hva vi vil se, høre og lese, og når vi vil gjøre det. Strømmetjenester har erstattet mye av den lineære TV-bruken.

**Fra passiv til aktiv mediebruk:**
Tradisjonelle medier var enveiskommunikasjon – vi leste, så eller hørte. Digitale og sosiale medier gjør oss til aktive deltakere som kommenterer, deler, liker og selv produserer innhold.

**Mobilen som førstevalg:**
Smarttelefonen har blitt det viktigste medieverktøyet for de fleste nordmenn. Vi bruker den til nyheter, sosiale medier, strømming, kommunikasjon og mye mer.

**Fragmentering av publikum:**
I stedet for at alle ser på samme TV-program, sprer publikum seg på mange ulike plattformer og innholdstyper. Det blir vanskeligere for mediene å samle et stort fellesskap.`
    },
    {
      id: 'mi-1-4-def-2',
      type: 'definition' as const,
      title: 'Skjermtid og digital helse',
      content: `**Skjermtid** er den totale tiden en person tilbringer foran digitale skjermer i løpet av en dag. Norske ungdommer bruker gjennomsnittlig flere timer daglig foran skjerm utenom skole og arbeid.

**Passiv skjermtid:** Bruk der man konsumerer innhold uten aktiv deltakelse, som å scrolle gjennom sosiale medier eller se TV.

**Aktiv skjermtid:** Bruk der man aktivt deltar eller skaper noe, som å programmere, lage musikk eller samarbeide digitalt.

**Digital detox:** Å bevisst ta pauser fra digitale medier for å redusere stress og forbedre velvære.

Forskning viser at det ikke nødvendigvis er mengden skjermtid som er avgjørende for velvære, men hva man bruker tiden på og om den går på bekostning av søvn, fysisk aktivitet og sosiale relasjoner.`
    },
    {
      id: 'mi-1-4-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom passiv og aktiv skjermtid?',
        options: [
          { id: 'a', text: 'Passiv skjermtid er på TV, aktiv skjermtid er på mobil', isCorrect: false },
          { id: 'b', text: 'Passiv skjermtid er konsumering av innhold, aktiv skjermtid innebærer deltakelse eller skapende aktivitet', isCorrect: true },
          { id: 'c', text: 'Passiv skjermtid er om natten, aktiv skjermtid er om dagen', isCorrect: false },
          { id: 'd', text: 'Passiv skjermtid er gratis, aktiv skjermtid koster penger', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Passiv skjermtid handler om å konsumere innhold uten å delta aktivt (f.eks. scrolle gjennom sosiale medier), mens aktiv skjermtid innebærer at man deltar, skaper eller samhandler (f.eks. programmerer, lager innhold eller samarbeider digitalt).',
      },
    },
    {
      id: 'mi-1-4-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken trend beskriver best at publikum sprer seg på mange ulike plattformer i stedet for å samles rundt felles programmer?',
        options: [
          { id: 'a', text: 'Mediekonvergens', isCorrect: false },
          { id: 'b', text: 'Digital detox', isCorrect: false },
          { id: 'c', text: 'Fragmentering av publikum', isCorrect: true },
          { id: 'd', text: 'Flerplattformstrategi', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Fragmentering av publikum betyr at publikum sprer seg på stadig flere plattformer og innholdstyper, i stedet for at alle samles rundt de samme programmene og mediene. Dette er en av de viktigste trendene i moderne mediebruk.',
      },
    },
    {
      id: 'mi-1-4-text-summary',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- Nordmenn er blant verdens mest aktive mediebrukere
- Mediebruken varierer betydelig mellom generasjoner (**generasjonskløften**)
- Viktige trender: fra lineært til on demand, fra passiv til aktiv bruk, mobilen som førstevalg, fragmentering
- **Skjermtid** kan deles i passiv og aktiv bruk – hva man gjør er viktigere enn hvor lenge
- **Mediedøgnet** beskriver hvordan mediebruken fordeler seg gjennom dagen
- Medietilsynet og SSB kartlegger norsk mediebruk gjennom jevnlige undersøkelser`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-1-4-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfør en kort undersøkelse blant fem personer i ulike aldersgrupper om deres mediebruk. Still spørsmål om hvilke medier de bruker mest, hvor mye tid de bruker daglig, og hvordan de får nyheter. Presenter funnene dine og drøft generasjonsforskjellene.',
        hints: [
          'Lag 3–5 konkrete spørsmål du stiller til alle',
          'Prøv å dekke minst tre aldersgrupper: ung, voksen og eldre',
        ],
        solution: 'Undersøkelsen bør inneholde en beskrivelse av metode (spørsmål, utvalg), presentasjon av funn (gjerne i tabellform), og en drøfting av generasjonsforskjellene. Typiske funn er at yngre bruker sosiale medier som nyhetskilde, mens eldre foretrekker tradisjonelle nyhetsmedier.',
      },
    },
    {
      id: 'mi-1-4-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft fordeler og ulemper med at ungdom i økende grad får nyheter gjennom sosiale medier i stedet for tradisjonelle nyhetsmedier. Bruk begreper fra kapittelet i svaret ditt.',
        hints: [
          'Tenk på tilgjengelighet, aktualitet og engasjement som fordeler',
          'Tenk på kildevurdering, filterbobler og fragmentering som utfordringer',
        ],
        solution: 'En god drøfting bør inneholde fordeler (tilgjengelighet, engasjement, deltakelse, bredere perspektiver) og ulemper (manglende kildevurdering, algoritmestyrte filterbobler, desinformasjon, fragmentering av felles kunnskapsgrunnlag). Svaret bør bruke relevante begreper som aktiv vs. passiv mediebruk, fragmentering og generasjonskløften.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Mediebruk', definition: 'Mengden tid og oppmerksomhet vi bruker på ulike medier.' },
    { term: 'Medievaner', definition: 'Faste mønstre i mediebruken – hvilke medier vi bruker, når og hvordan.' },
    { term: 'Skjermtid', definition: 'Total tid tilbrakt foran digitale skjermer i løpet av en dag.' },
    { term: 'Mediedøgnet', definition: 'Hvordan mediebruken fordeler seg gjennom døgnets timer.' },
    { term: 'Fragmentering', definition: 'At publikum sprer seg på mange ulike plattformer i stedet for å samles.' },
    { term: 'Digital detox', definition: 'Å bevisst ta pauser fra digitale medier for å redusere stress.' },
  ],
};

// ============================================================================
// Kapittel 1.5: Medielandskapet i Norge
// ============================================================================

export const CHAPTER_MEDIEINFO_1_1_5: TextbookChapter = {
  id: 'medieinfo-1-1-5',
  courseId: 'medieinfo-1',
  chapterNumber: '1.5',
  title: 'Medielandskapet i Norge',
  description: 'NRK, kommersielle medier, medieeierskap, mediestøtte og medieregulering.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analysere det norske medielandskapet',
  ],
  content: [
    {
      id: 'mi-1-5-intro',
      type: 'text' as const,
      content: `# Medielandskapet i Norge

Norge har et av verdens mest utviklede medielandskap. Vi har en sterk allmennkringkaster (NRK), mange kommersielle medieselskaper, hundrevis av lokalaviser og en aktiv mediepolitikk som skal sikre mediemangfold og ytringsfrihet.

Det norske medielandskapet kjennetegnes av en kombinasjon av offentlig og privat medieeierskap, statlig mediestøtte og mediepolitisk regulering. Denne modellen er basert på ideen om at et fungerende demokrati krever et mangfold av medier som kan informere befolkningen og kontrollere makthavere.

La oss se nærmere på de viktigste aktørene og strukturene i det norske medielandskapet.`
    },
    {
      id: 'mi-1-5-def-1',
      type: 'definition' as const,
      title: 'NRK – Norsk rikskringkasting',
      content: `**NRK (Norsk rikskringkasting)** er Norges offentlige allmennkringkaster, eid av den norske staten.

**Finansiering:** NRK finansieres over statsbudsjettet (tidligere gjennom kringkastingsavgiften/«TV-lisensen», som ble avviklet i 2020).

**Oppdrag:** NRK har et bredt allmennkringkastingsoppdrag fastsatt i NRK-plakaten:
- Skal formidle nyheter og informasjon til hele befolkningen
- Skal tilby innhold på norsk (både bokmål og nynorsk) og samisk
- Skal dekke hele landet og alle befolkningsgrupper
- Skal tilby et bredt innholdstilbud: nyheter, kultur, underholdning, barn og unge
- Har ikke reklame

**Plattformer:** NRK TV, NRK radio (P1, P2, P3 m.fl.), nrk.no, NRK Super, podkaster.

**Redaksjonell uavhengighet:** Selv om NRK er statlig eid, er redaksjonen uavhengig av politisk styring.`
    },
    {
      id: 'mi-1-5-example-1',
      type: 'example' as const,
      title: 'Eksempel: NRK vs. TV 2 – ulike modeller',
      content: `**NRK (offentlig allmennkringkaster):**
- Eid av staten, finansiert over statsbudsjettet
- Ingen reklame
- Bredt allmennkringkastingsoppdrag
- Skal nå hele befolkningen, også i distriktene
- Eksempler: Dagsrevyen, Nytt på nytt, Skam, NRK Super

**TV 2 (kommersiell allmennkringkaster):**
- Eid av Egmont (dansk mediekonsern)
- Finansiert av reklame og TV 2 Play-abonnement
- Har avtale med staten om allmennkringkastingsoppdrag (mot kompensasjon)
- Større fokus på underholdning og sport som trekkplaster
- Eksempler: TV 2 Nyhetene, Skal vi danse, Premier League

**Likhet:** Begge har et samfunnsoppdrag og skal tilby nyheter, norsk innhold og allmennkringkasting.
**Forskjell:** NRK er offentlig finansiert og reklamefri; TV 2 er kommersielt og avhengig av reklameinntekter og abonnement.`
    },
    {
      id: 'mi-1-5-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvordan finansieres NRK i dag?',
        options: [
          { id: 'a', text: 'Gjennom reklame og sponsorer', isCorrect: false },
          { id: 'b', text: 'Gjennom kringkastingsavgiften (TV-lisens)', isCorrect: false },
          { id: 'c', text: 'Over statsbudsjettet', isCorrect: true },
          { id: 'd', text: 'Gjennom abonnement betalt av brukerne', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Siden 2020 har NRK vært finansiert over statsbudsjettet. Den gamle kringkastingsavgiften (TV-lisensen) ble avviklet og erstattet med finansiering over skatteseddelen.',
      },
    },
    {
      id: 'mi-1-5-def-2',
      type: 'definition' as const,
      title: 'Medieeierskap i Norge',
      content: `**De største mediekonsernene i Norge:**

**Schibsted:** Eier VG, Aftenposten, Bergens Tidende, Stavanger Aftenblad og flere andre aviser. Eier også den digitale markedsplassen Finn.no.

**Amedia:** Norges største aviskonsern, eier over 80 lokalaviser og regionaviser over hele landet, som Drammens Tidende, Romerikes Blad og Nordlys.

**Polaris Media:** Eier Adresseavisen og en rekke aviser i Midt- og Nord-Norge.

**Egmont:** Dansk mediekonsern som eier TV 2 Norge, samt magasiner og forlag.

**Discovery/Warner Bros. Discovery:** Eier TVNorge, FEM, MAX og Discovery+.

**Mediekonsentrasjon** betyr at eierskapet er samlet på relativt få hender. I Norge er det særlig Schibsted og Amedia som dominerer avismarkedet. Eierskapskonsentrasjon kan true mediemangfoldet dersom økonomiske interesser går foran redaksjonell uavhengighet.`
    },
    {
      id: 'mi-1-5-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilket mediekonsern eier VG og Aftenposten?',
        options: [
          { id: 'a', text: 'Amedia', isCorrect: false },
          { id: 'b', text: 'Polaris Media', isCorrect: false },
          { id: 'c', text: 'Schibsted', isCorrect: true },
          { id: 'd', text: 'Egmont', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Schibsted eier blant annet VG, Aftenposten, Bergens Tidende og Stavanger Aftenblad, og er et av de største mediekonsernene i Skandinavia.',
      },
    },
    {
      id: 'mi-1-5-def-3',
      type: 'definition' as const,
      title: 'Mediestøtte og medieregulering',
      content: `**Mediestøtte** er statlige støtteordninger som skal sikre mediemangfold. Den viktigste formen er:

**Produksjonstilskudd:** Direkte pengestøtte til aviser med lav opplagsinntekt eller som er nummer to i sitt dekningsområde. Formålet er å sikre at det finnes flere stemmer i mediedebatten.

**Innovasjonsstøtte:** Støtte til medier som utvikler nye journalistiske prosjekter eller digitale løsninger.

**Medieregulering** er lover og regler som styrer medienes virksomhet:

**Medietilsynet:** Statlig organ som fører tilsyn med mediene, forvalter mediestøtten og overvåker medieeierskap.

**Medieansvarsoven:** Regulerer redaksjonelt ansvar og redaktørens uavhengighet.

**Åndsverkloven:** Beskytter opphavsrett til journalistisk og kreativt innhold.

**Vær Varsom-plakaten:** Pressens etiske regelverk, forvaltet av Pressens Faglige Utvalg (PFU). Ikke en lov, men et selvjustissystem for pressen.`
    },
    {
      id: 'mi-1-5-example-2',
      type: 'example' as const,
      title: 'Eksempel: Hvorfor trenger vi mediestøtte?',
      content: `**Situasjon:** Tenk deg et lite norsk lokalsamfunn med 5 000 innbyggere. Kommunen har én lokalavis med tre journalister.

**Uten mediestøtte:**
- Avisen sliter med å tjene nok på annonser og abonnement
- Redaksjonen kuttes til én journalist, som ikke rekker å dekke alt
- Kommunestyremøter dekkes sjeldnere, og kritisk journalistikk svekkes
- Innbyggerne mister tilgang til lokal informasjon
- Politikere i kommunen kan fatte vedtak uten medienes søkelys

**Med mediestøtte:**
- Avisen mottar produksjonstilskudd som sikrer grunnleggende drift
- Redaksjonen kan opprettholde bemanning
- Lokale saker dekkes grundig, og politikere holdes ansvarlige
- Innbyggerne er informerte og kan delta i lokalt demokrati

Eksempelet illustrerer hvorfor mediestøtte ses som en investering i demokratiet, ikke bare en utgift.`
    },
    {
      id: 'mi-1-5-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med den statlige mediestøtten i Norge?',
        options: [
          { id: 'a', text: 'Å sikre at alle medier er statseid', isCorrect: false },
          { id: 'b', text: 'Å kontrollere hva mediene skriver', isCorrect: false },
          { id: 'c', text: 'Å sikre mediemangfold og en informert befolkning', isCorrect: true },
          { id: 'd', text: 'Å gjøre aviser billigere for forbrukerne', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Mediestøtten har som hovedformål å sikre mediemangfold – at det finnes mange ulike stemmer i mediene – og en informert befolkning som kan delta i demokratiet. Støtten er ikke ment å kontrollere mediene, men å gi dem økonomisk grunnlag for å drive journalistikk.',
      },
    },
    {
      id: 'mi-1-5-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er Vær Varsom-plakaten?',
        options: [
          { id: 'a', text: 'En norsk lov som regulerer mediene', isCorrect: false },
          { id: 'b', text: 'Pressens eget etiske regelverk, forvaltet av Pressens Faglige Utvalg', isCorrect: true },
          { id: 'c', text: 'En EU-forordning om pressefrihet', isCorrect: false },
          { id: 'd', text: 'Et regjeringsdokument om mediepolitikk', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Vær Varsom-plakaten er pressens eget etiske regelverk – et selvjustissystem. Den forvaltes av Pressens Faglige Utvalg (PFU), som behandler klager på pressen. Den er altså ikke en lov, men normer som pressen selv har vedtatt å følge.',
      },
    },
    {
      id: 'mi-1-5-text-summary',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- **NRK** er Norges offentlige allmennkringkaster, finansiert over statsbudsjettet og uten reklame
- **TV 2** er en kommersiell allmennkringkaster med avtale om samfunnsoppdrag
- De største mediekonsernene i Norge er **Schibsted**, **Amedia**, **Polaris Media** og **Egmont**
- **Mediekonsentrasjon** betyr at eierskapet er samlet på få hender, noe som kan true mangfoldet
- **Mediestøtte** (produksjonstilskudd og innovasjonsstøtte) skal sikre mediemangfold
- **Medietilsynet** fører tilsyn med mediene og forvalter mediestøtten
- **Vær Varsom-plakaten** er pressens etiske regelverk, forvaltet av PFU
- Det norske medielandskapet bygger på en kombinasjon av offentlig og privat eierskap`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-1-5-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Undersøk hvem som eier din lokale avis eller nyhetskanal. Beskriv eierstrukturen og drøft om eierskapet kan ha betydning for det redaksjonelle innholdet.',
        hints: [
          'Sjekk mediebedriftens nettsider eller Medietilsynets oversikt over medieeierskap',
          'Tenk på forskjellen mellom eierskap og redaksjonell uavhengighet',
        ],
        solution: 'Svaret bør beskrive eierskapet (konsern, organisering), og drøfte forholdet mellom eierskap og redaksjonell uavhengighet. Et godt svar nevner redaktøransvaret, Medieansvarsoven og Vær Varsom-plakaten som mekanismer som skal sikre redaksjonell frihet uavhengig av eierskap.',
      },
    },
    {
      id: 'mi-1-5-ex-6',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft følgende spørsmål: «Bør staten gi mediestøtte til private medier?» Presenter argumenter for og mot, og ta stilling til spørsmålet.',
        hints: [
          'For: mediemangfold, demokrati, lokaljournalistikk, markedssvikt',
          'Mot: konkurransevridning, statlig avhengighet, fare for politisk styring',
        ],
        solution: 'For mediestøtte: Sikrer mediemangfold, finansierer lokaljournalistikk som markedet ikke bærer, styrker demokratiet gjennom informert offentlighet. Mot mediestøtte: Kan skape avhengighet av staten, kan vri konkurransen, fare for politisk innflytelse. Et godt svar tar stilling med begrunnelse og viser forståelse for begge sider.',
      },
    },
    {
      id: 'mi-1-5-ex-7',
      type: 'exercise' as const,
      exercise: {
        id: 'mi-1-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Sammenlign NRK og TV 2 på minst tre punkter: finansiering, eierskap og innholdsprofil. Forklar hvorfor begge er viktige for det norske medielandskapet.',
        hints: [
          'Bruk definisjoner fra kapittelet om allmennkringkasting',
          'Tenk på hva som ville gått tapt dersom en av dem ikke fantes',
        ],
        solution: 'Sammenligningen bør dekke: 1) Finansiering: NRK via statsbudsjett, TV 2 via reklame/abonnement. 2) Eierskap: NRK statseid, TV 2 eid av Egmont. 3) Innholdsprofil: NRK bredere oppdrag uten kommersielt press, TV 2 mer underholdningsorientert med sport som trekkplaster. Begge er viktige fordi de utfyller hverandre og sikrer at det finnes alternativer for publikum.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'NRK', definition: 'Norges offentlige allmennkringkaster, statseid og finansiert over statsbudsjettet.' },
    { term: 'Allmennkringkaster', definition: 'Kringkaster med et bredt samfunnsoppdrag om å nå hele befolkningen.' },
    { term: 'Mediekonsentrasjon', definition: 'At medieeierskap er samlet på relativt få aktører.' },
    { term: 'Mediestøtte', definition: 'Statlige støtteordninger som skal sikre mediemangfold.' },
    { term: 'Medietilsynet', definition: 'Statlig organ som fører tilsyn med mediene og forvalter mediestøtten.' },
    { term: 'Vær Varsom-plakaten', definition: 'Pressens etiske regelverk, forvaltet av Pressens Faglige Utvalg (PFU).' },
    { term: 'Redaksjonell uavhengighet', definition: 'At redaksjonen tar selvstendige valg uavhengig av eiere og myndigheter.' },
  ],
};

// ============================================================================
// Eksporter alle kapitler i seksjon 1
// ============================================================================

export const MEDIEINFO_1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MEDIEINFO_1_1_1,
  CHAPTER_MEDIEINFO_1_1_2,
  CHAPTER_MEDIEINFO_1_1_3,
  CHAPTER_MEDIEINFO_1_1_4,
  CHAPTER_MEDIEINFO_1_1_5,
];
