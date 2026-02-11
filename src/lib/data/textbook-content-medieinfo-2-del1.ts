/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 2 (VG3) - Del 1: Avansert medieanalyse
 * Kapittel 1.1–1.5
 * LK20-kompetansemål:
 * - bruke semiotiske begreper til å analysere medietekster
 * - gjennomføre diskursanalyse av medietekster
 * - analysere samspillet mellom ulike modaliteter i medietekster
 * - anvende narrativ teori på medieproduksjoner
 * - analysere retoriske virkemidler i medietekster
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Semiotikk og tegnanalyse
// ============================================================================

export const CHAPTER_MEDIEINFO_2_1_1: TextbookChapter = {
  id: 'medieinfo-2-1-1',
  courseId: 'medieinfo-2',
  chapterNumber: '1.1',
  title: 'Semiotikk og tegnanalyse',
  description: 'Saussure, Peirce og analyse av tegn i medietekster.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke semiotiske begreper til å analysere medietekster',
    'gjøre rede for sentrale teorier innen tegnanalyse',
  ],
  content: [
    {
      id: 'mi2-1-1-intro',
      type: 'text' as const,
      content: `# Semiotikk og tegnanalyse

Alt vi ser, hører og leser i mediene er bygd opp av **tegn**. Et bilde i en reklame, en logo, et filmklipp, en overskrift i en avis – alt dette er tegn som bærer mening. Men hvordan skapes mening gjennom tegn, og hvordan kan vi analysere tegnene systematisk?

**Semiotikk** er vitenskapen om tegn og tegnenes betydning. Fagfeltet gir oss verktøy til å avdekke hvordan mening skapes, formidles og tolkes i medietekster. Gjennom semiotisk analyse kan vi avsløre skjulte meninger, ideologier og maktstrukturer i medieinnhold som ellers kan virke «naturlig» og selvfølgelig.

To av de mest innflytelsesrike tenkerne innen semiotikk er den sveitsiske lingvisten **Ferdinand de Saussure** og den amerikanske filosofen **Charles Sanders Peirce**. Begge utviklet sine teorier rundt forrige århundreskifte, og de har hatt avgjørende betydning for moderne medieanalyse.`
    },
    {
      id: 'mi2-1-1-def-1',
      type: 'definition' as const,
      title: 'Semiotikk',
      content: `**Semiotikk** er studiet av tegn, tegnsystemer og hvordan tegn skaper mening. Ordet kommer fra det greske *semeion*, som betyr «tegn».

Sentrale begreper:
- **Tegn:** Noe som står for noe annet – det representerer en mening utover seg selv
- **Tegnbærer:** Den fysiske formen til tegnet (lyden, bildet, bokstavene)
- **Innhold/referent:** Det tegnet viser til eller betyr
- **Kode:** Det regelsystemet som kobler tegnbærer og innhold sammen

I medieanalyse bruker vi semiotikk til å forstå hvordan bilder, tekst, lyd og andre uttrykk skaper mening – og hvorfor den samme medieteksten kan tolkes ulikt av forskjellige mennesker.`
    },
    {
      id: 'mi2-1-1-example-1',
      type: 'example' as const,
      title: 'Eksempel: Tegn i en mobilreklame',
      content: `**Situasjon:** En reklame for en ny smarttelefon viser en ung person på en fjelltopp, med utsikt over et vakkert landskap, mens de tar et bilde med telefonen.

**Semiotisk analyse av elementene:**

| Tegn | Tegnbærer | Innhold/konnotasjon |
|------|-----------|---------------------|
| Fjelltoppen | Bilde av person på topp | Frihet, mestring, å nå sine mål |
| Vakkert landskap | Panoramautsikt | Naturopplevelse, eventyr, det unike |
| Ung person | Modell i friluftklær | Målgruppen, ungdommelig energi |
| Smarttelefon | Produktet i bruk | Verktøy for å fange øyeblikkene |
| Bildetaking | Handlingen å fotografere | Telefonen som kreativt verktøy |

Reklamen kommuniserer ikke bare at telefonen har et godt kamera. Gjennom tegnene skapes en fortelling om at **dette produktet er nøkkelen til frihet, eventyr og selvrealisering**. Tegn og mening er altså tett sammenvevd.`
    },
    {
      id: 'mi2-1-1-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva betyr det greske ordet «semeion», som semiotikk er avledet fra?',
        options: [
          { id: 'a', text: 'Tegn', isCorrect: true },
          { id: 'b', text: 'Mening', isCorrect: false },
          { id: 'c', text: 'Språk', isCorrect: false },
          { id: 'd', text: 'Bilde', isCorrect: false },
        ],
        solution: 'Riktig svar er a. «Semeion» er gresk for «tegn». Semiotikk er altså vitenskapen om tegn – hvordan tegn skaper, formidler og tolkes som mening.',
      },
    },
    {
      id: 'mi2-1-1-def-2',
      type: 'definition' as const,
      title: 'Saussures tegnmodell: signifikant og signifikat',
      content: `**Ferdinand de Saussure** (1857–1913) er grunnleggeren av moderne lingvistikk og strukturell semiotikk. Han så på tegnet som en tosidig enhet:

- **Signifikant** (uttrykksside): Den fysiske formen til tegnet – lyden, bokstavene, bildet. Det vi kan sanse.
- **Signifikat** (innholdsside): Den mentale forestillingen eller begrepet som tegnet vekker. Det vi tenker.

**Nøkkelprinsipp – vilkårlighet (arbitraritet):** Forholdet mellom signifikant og signifikat er vilkårlig. Det er ingen naturlig grunn til at lyden «hund» skal bety et firbeint dyr – det er en konvensjon, en avtale innenfor et språksamfunn.

**Denotasjon og konnotasjon (utvidet av Roland Barthes):**
- **Denotasjon:** Den bokstavelige, direkte betydningen av et tegn (et bilde av en rose = en blomst)
- **Konnotasjon:** De assosiasjoner og tilleggsbetydninger tegnet vekker (rose = kjærlighet, romantikk, skjønnhet)`
    },
    {
      id: 'mi2-1-1-example-2',
      type: 'example' as const,
      title: 'Eksempel: Denotasjon og konnotasjon i avisforside',
      content: `**Situasjon:** En avisforside viser et bilde av en politiker som holder en tale med knyttet neve.

**Denotasjon (bokstavelig betydning):**
En person står på et podium og snakker mens den ene hånden er knyttet.

**Konnotasjon (tilleggsbetydninger):**
- Knyttet neve konnoterer **styrke, besluttsomhet, kamp**
- Podium konnoterer **autoritet, makt, offentlighet**
- Politisk kontekst konnoterer **ideologisk overbevisning**

**Barthes' poeng:** Vi leser ofte konnotasjonene som om de var «naturlige», men de er kulturelt betingede. I en annen kultur kan knyttet neve konnotere noe helt annet – for eksempel undertrykkelse eller vold. Den semiotiske analysen avslører at medietekster aldri er nøytrale, men alltid bærer med seg kulturelle verdier og ideologier.`
    },
    {
      id: 'mi2-1-1-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Ifølge Saussure er forholdet mellom signifikant og signifikat:',
        options: [
          { id: 'a', text: 'Naturlig og universelt', isCorrect: false },
          { id: 'b', text: 'Vilkårlig – basert på sosial konvensjon', isCorrect: true },
          { id: 'c', text: 'Bestemt av staten', isCorrect: false },
          { id: 'd', text: 'Biologisk forankret i hjernen', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Et av Saussures viktigste prinsipper er at tegnet er arbitrært (vilkårlig). Det finnes ingen naturlig forbindelse mellom lyden «hund» og dyret den refererer til – forbindelsen er en konvensjon, en avtale i et språksamfunn.',
      },
    },
    {
      id: 'mi2-1-1-def-3',
      type: 'definition' as const,
      title: 'Peirces tegntypologi: ikon, indeks og symbol',
      content: `**Charles Sanders Peirce** (1839–1914) utviklet en annen tilnærming til tegn. Han delte tegn inn i tre kategorier etter forholdet mellom tegnet og det det representerer:

- **Ikon:** Tegnet ligner det det representerer. Forholdet er basert på likhet.
  - Eksempler: Et portrettfoto (ligner personen), et kart (ligner terrenget), et piktogram av en person (ligner en menneskefigur)

- **Indeks:** Tegnet har en direkte, årsaksbasert forbindelse til det det representerer.
  - Eksempler: Røyk er indeks for ild, fotspor er indeks for at noen har gått der, feber er indeks for sykdom

- **Symbol:** Tegnet har en vilkårlig forbindelse til det det representerer, basert på konvensjon.
  - Eksempler: Bokstaver, tall, trafikkskilt, flagg, logoer

**Merk:** Mange tegn kan tilhøre flere kategorier samtidig. Et emoji-hjerte er både et ikon (det ligner et hjerte) og et symbol (det står for kjærlighet etter konvensjon).`
    },
    {
      id: 'mi2-1-1-example-3',
      type: 'example' as const,
      title: 'Eksempel: Peirces tegntyper i en nyhetsartikkel',
      content: `**Situasjon:** En nettavis publiserer en artikkel om en skogbrann.

| Element | Tegntype | Forklaring |
|---------|----------|------------|
| Foto av flammene | Ikon | Bildet ligner det virkelige brannscenariet |
| Røyk over skogen | Indeks | Røyk har en direkte årsaksrelasjon til brannen |
| Rødt varseltrekant-ikon | Symbol | Faren kommuniseres gjennom en konvensjonell kode |
| Kart med brannområde | Ikon + symbol | Kartet ligner terrenget (ikon), men bruker symbolske farger (rødt = fare) |
| Overskriften «Brann» | Symbol | Bokstavene er vilkårlige tegn basert på språkkonvensjon |

Ved å identifisere tegntypene kan vi forstå hvordan nyhetsartikkelen bygger opp sin troverdighet og emosjonelle appell: Ikoniske bilder skaper nærhet, indeksikalske tegn gir autentisitet, og symbolske tegn gir struktur og kontekst.`
    },
    {
      id: 'mi2-1-1-text-summary',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- **Semiotikk** er vitenskapen om tegn og hvordan tegn skaper mening
- **Saussure** definerte tegnet som en tosidig enhet av signifikant (uttrykk) og signifikat (innhold)
- Forholdet mellom signifikant og signifikat er **vilkårlig** (arbitrært)
- **Denotasjon** er den bokstavelige betydningen, **konnotasjon** er tilleggsbetydninger
- **Peirce** delte tegn inn i tre typer: **ikon** (likhet), **indeks** (årsak) og **symbol** (konvensjon)
- Semiotisk analyse avslører at medietekster aldri er nøytrale, men bærer kulturelle verdier
- Tegn i medier kombinerer ofte flere tegntyper for å skape kompleks mening`
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-1-1-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg en reklame (trykt eller digital). Identifiser minst fem tegn i reklamen og analyser dem ved hjelp av Saussures begreper: Hva er signifikanten og signifikatet for hvert tegn? Skill mellom denotasjon og konnotasjon.',
        hints: [
          'Start med de mest fremtredende visuelle elementene – farger, personer, objekter',
          'Tenk på hva reklamen vil at du skal føle, og hvilke konnotasjoner som skaper denne følelsen',
        ],
        solution: 'Et godt svar identifiserer minst fem tegn, beskriver signifikant (hva vi ser/hører) og signifikat (hva det betyr) for hvert, og skiller tydelig mellom denotasjon (bokstavelig betydning) og konnotasjon (kulturelle assosiasjoner). Analysen bør vise at reklamen bruker konnotasjoner bevisst for å skape ønskede assosiasjoner til produktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-1-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Finn tre eksempler fra medier som illustrerer Peirces tre tegntyper: ikon, indeks og symbol. Forklar hvorfor hvert eksempel hører til den aktuelle kategorien, og drøft om noen av eksemplene kan tilhøre flere kategorier samtidig.',
        hints: [
          'Se på nyhetsartikler, sosiale medier eller reklame for gode eksempler',
          'Husk at et tegn kan kombinere flere tegntyper – f.eks. kan en emoji være både ikon og symbol',
        ],
        solution: 'Svaret bør inneholde tre konkrete medieeksempler med korrekt kategorisering: et ikon (f.eks. et foto som ligner det avbildede), en indeks (f.eks. en overskrift som peker direkte til en hendelse), og et symbol (f.eks. en logo som betyr noe etter konvensjon). Drøftingen bør vise forståelse for at grensene mellom kategoriene kan være flytende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-1-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign Saussures og Peirces tilnærminger til tegn. Hva er likhetene og forskjellene mellom de to teoriene? Hvilken tilnærming mener du er mest nyttig for analyse av moderne medietekster, og hvorfor?',
        hints: [
          'Saussure fokuserer på forholdet mellom uttrykk og innhold, Peirce på forholdet mellom tegn og referent',
          'Tenk på hvilken teori som best fanger kompleksiteten i moderne medietekster med bilder, lyd og tekst',
        ],
        solution: 'En god sammenligning peker på at Saussure ser tegnet som todelt (signifikant/signifikat) med vekt på vilkårlighet, mens Peirce opererer med tre tegntyper (ikon/indeks/symbol) som også inkluderer ikke-vilkårlige tegn. Drøftingen bør argumentere for at Peirces typologi kan være mer nyttig for medieanalyse fordi den fanger opp ulike typer tegnrelasjoner i multimediale tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-1-ex-6',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft påstanden: «Ingen medietekst er nøytral – alle medietekster bærer med seg ideologiske konnotasjoner.» Bruk Roland Barthes sine begreper om denotasjon og konnotasjon i argumentasjonen din, med konkrete eksempler fra norske medier.',
        hints: [
          'Tenk på at det som virker «naturlig» og selvsagt, ofte er kulturelt betinget',
          'Bruk eksempler fra nyhetsbilder, reklame eller sosiale medier for å underbygge argumentasjonen',
        ],
        solution: 'Et sterkt svar bruker Barthes aktivt og viser at denotasjonen (det bokstavelige) alltid ledsages av konnotasjoner (kulturelle tilleggsbetydninger). Eksemplene bør vise at valg av vinkel, bilde, ordbruk og komposisjon i norske medier aldri er tilfeldig, men reflekterer verdier og ideologi. Drøftingen bør nyanseres med at graden av ideologisk ladning varierer mellom ulike mediesjangre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Semiotikk', definition: 'Vitenskapen om tegn, tegnsystemer og hvordan tegn skaper mening.' },
    { term: 'Signifikant', definition: 'Uttrykkssiden av tegnet – den fysiske formen (lyd, bilde, bokstaver).' },
    { term: 'Signifikat', definition: 'Innholdssiden av tegnet – den mentale forestillingen det vekker.' },
    { term: 'Denotasjon', definition: 'Den bokstavelige, direkte betydningen av et tegn.' },
    { term: 'Konnotasjon', definition: 'Tilleggsbetydninger og assosiasjoner et tegn vekker, ofte kulturelt betinget.' },
    { term: 'Ikon', definition: 'Tegn som ligner det det representerer (Peirce).' },
    { term: 'Indeks', definition: 'Tegn som har en direkte, årsaksbasert forbindelse til det det representerer (Peirce).' },
    { term: 'Symbol', definition: 'Tegn som har en vilkårlig, konvensjonsbasert forbindelse til det det representerer (Peirce).' },
  ],
};

// ============================================================================
// Kapittel 1.2: Diskursanalyse
// ============================================================================

export const CHAPTER_MEDIEINFO_2_1_2: TextbookChapter = {
  id: 'medieinfo-2-1-2',
  courseId: 'medieinfo-2',
  chapterNumber: '1.2',
  title: 'Diskursanalyse',
  description: 'Språk, makt og ideologi i medietekster.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjennomføre diskursanalyse av medietekster',
    'analysere forholdet mellom språk, makt og ideologi i medier',
  ],
  content: [
    {
      id: 'mi2-1-2-intro',
      type: 'text' as const,
      content: `# Diskursanalyse

Språk er ikke bare et nøytralt verktøy for å beskrive virkeligheten – språk former vår oppfatning av virkeligheten. Når medier skriver om «flyktningstrøm» i stedet for «mennesker på flukt», eller «klimahysteri» i stedet for «klimaengasjement», påvirker ordvalgene hvordan vi forstår og forholder oss til fenomenene.

**Diskursanalyse** er en metode for å undersøke hvordan språk brukes til å konstruere virkeligheten, opprettholde maktstrukturer og fremme bestemte ideologier. I medieanalyse er diskursanalyse et uunnværlig verktøy fordi mediene spiller en sentral rolle i å produsere og reprodusere de diskursene som preger samfunnet.

Fagfeltet bygger blant annet på arbeidene til den franske filosofen **Michel Foucault** og den britiske lingvisten **Norman Fairclough**, som har utviklet ulike tilnærminger til diskursanalyse.`
    },
    {
      id: 'mi2-1-2-def-1',
      type: 'definition' as const,
      title: 'Diskurs og diskursanalyse',
      content: `**Diskurs** er en bestemt måte å forstå og snakke om et fenomen på. En diskurs utgjør et sett av begreper, forestillinger og argumenter som former vår forståelse av virkeligheten.

**Diskursanalyse** er en metode for å undersøke hvordan diskurser fungerer – hvordan bestemte måter å snakke om noe på former vår forståelse, og hvem som tjener på dette.

**Eksempler på diskurser i norske medier:**
- **Innvandringsdiskurs:** Mediene kan ramme inn innvandring som «trussel» eller «berikelse» – valget av diskurs påvirker opinionen
- **Klimadiskurs:** Klimaendringer kan omtales som «krise», «utfordring» eller «naturlig variasjon»
- **Helsediskurs:** Psykiske lidelser kan rammes inn som «svakhet» eller «sykdom» – med store konsekvenser for stigma

En diskurs er aldri nøytral. Den fremmer noen perspektiver på bekostning av andre, og dermed henger diskurs uløselig sammen med makt.`
    },
    {
      id: 'mi2-1-2-example-1',
      type: 'example' as const,
      title: 'Eksempel: Diskursanalyse av nyhetsoverskrifter',
      content: `**Situasjon:** Samme hendelse – 500 flyktninger ankommer Norge – dekkes ulikt av ulike medier.

**Overskrift A:** «500 flyktninger strømmer til Norge»
**Overskrift B:** «500 mennesker søker trygghet i Norge»
**Overskrift C:** «Ny bølge av asylsøkere utfordrer mottaksapparatet»

**Diskursanalyse:**

| Element | Overskrift A | Overskrift B | Overskrift C |
|---------|-------------|-------------|-------------|
| Ordvalg | «strømmer» (naturkatastrofe-metafor) | «søker trygghet» (humanitært perspektiv) | «bølge» (naturmetafor), «utfordrer» (problem) |
| Subjektposisjon | Flyktningene som masse | Mennesker med behov | Asylsøkere som belastning |
| Implisitt ideologi | Innvandring som ukontrollerbar kraft | Humanitært ansvar | Systempress og bekymring |

Diskursanalysen viser at ordvalg, metaforer og vinkling er ideologiske valg. Ingen av overskriftene er «objektiv» – alle konstruerer virkeligheten på en bestemt måte.`
    },
    {
      id: 'mi2-1-2-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva mener vi med en «diskurs» i medieanalyse?',
        options: [
          { id: 'a', text: 'En nøytral beskrivelse av virkeligheten', isCorrect: false },
          { id: 'b', text: 'En bestemt måte å forstå og snakke om et fenomen på, som former vår virkelighetsoppfatning', isCorrect: true },
          { id: 'c', text: 'En journalistisk sjanger for debattartikler', isCorrect: false },
          { id: 'd', text: 'En statistisk analyse av mediedekning', isCorrect: false },
        ],
        solution: 'Riktig svar er b. En diskurs er en bestemt måte å forstå og snakke om et fenomen på. Diskurser er ikke nøytrale, men former vår virkelighetsoppfatning og er knyttet til maktforhold i samfunnet.',
      },
    },
    {
      id: 'mi2-1-2-def-2',
      type: 'definition' as const,
      title: 'Foucault og maktdiskurser',
      content: `**Michel Foucault** (1926–1984) viste at diskurser ikke bare beskriver virkeligheten, men aktivt **konstruerer** den. Hans sentrale ideer for medieanalyse:

- **Makt og kunnskap henger sammen:** Den som kontrollerer diskursen, kontrollerer hva som regnes som «sant» og «normalt». Mediene har stor makt fordi de definerer hvilke diskurser som dominerer i offentligheten.

- **Diskursiv formasjon:** Et mønster av utsagn, begreper og temaer som tilhører en bestemt diskurs. Eksempel: «Kriminalitetsdiskursen» i mediene former hvem som ses som «kriminell» og hvilke løsninger som presenteres.

- **Eksklusjon:** Diskurser fungerer ved å utelukke – noen perspektiver, stemmer og erfaringer blir systematisk ekskludert. Hvem får uttale seg i nyhetsmedier? Hvem blir ikke hørt?

- **Subjektposisjonering:** Diskurser skaper bestemte roller og posisjoner for aktører. Er en ung person «narkoman» eller «rusavhengig»? Valget av begrep plasserer personen i ulike subjektposisjoner med ulike konsekvenser.`
    },
    {
      id: 'mi2-1-2-example-2',
      type: 'example' as const,
      title: 'Eksempel: Faircloughs tredimensjonale modell',
      content: `**Norman Faircloughs** tredimensjonale modell for kritisk diskursanalyse analyserer medietekster på tre nivåer:

**1. Tekstnivå (mikroanalyse):**
Analyse av selve teksten – ordvalg, setningsstrukturer, metaforer, modalitet.
- Eksempel: Er det brukt aktiv eller passiv form? «Politiet skjøt mannen» vs. «Mannen ble skutt.» Passiv form skjuler handlingsansvar.

**2. Diskursiv praksis (mesonivå):**
Hvordan teksten er produsert, distribuert og konsumert. Hvem har skrevet teksten? Hvilke kilder er brukt? Hvordan spres den?
- Eksempel: En NTB-melding som brukes av mange medier, skaper en ensartet dekning uten at leseren er klar over det.

**3. Sosial praksis (makronivå):**
Teksten satt i en bredere sosial, politisk og kulturell kontekst. Hvilke maktforhold og ideologier gjenspeiles?
- Eksempel: At medier konsekvent omtaler kvinnelige politikere med referanser til utseende, reflekterer kjønnsideologier i samfunnet.

Modellen viser at en full diskursanalyse krever at vi ser på teksten, produksjonsprosessen og den samfunnsmessige konteksten i sammenheng.`
    },
    {
      id: 'mi2-1-2-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Ifølge Foucault, hva er forholdet mellom makt og diskurs?',
        options: [
          { id: 'a', text: 'Makt og diskurs har ingenting med hverandre å gjøre', isCorrect: false },
          { id: 'b', text: 'Diskurser beskriver makt objektivt', isCorrect: false },
          { id: 'c', text: 'Den som kontrollerer diskursen, kontrollerer hva som regnes som sant og normalt', isCorrect: true },
          { id: 'd', text: 'Makt opphever alle diskurser', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Et sentralt poeng hos Foucault er at makt og kunnskap henger uløselig sammen. Den som kontrollerer diskursen – altså måten vi snakker om et fenomen på – kontrollerer også hva som regnes som sannhet og normalitet i et samfunn.',
      },
    },
    {
      id: 'mi2-1-2-text-summary',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- **Diskurs** er en bestemt måte å forstå og snakke om et fenomen på
- Diskurser er aldri nøytrale – de fremmer bestemte perspektiver og er knyttet til **makt**
- **Foucault** viste at diskurser konstruerer virkeligheten, og at makt og kunnskap henger sammen
- **Faircloughs tredimensjonale modell** analyserer tekst, diskursiv praksis og sosial praksis
- Ordvalg, metaforer og vinkling i medier er ideologiske valg
- Diskursanalyse avslører hvem som får definere virkeligheten gjennom mediene
- Mediene spiller en sentral rolle i å produsere og reprodusere dominerende diskurser`
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-1-2-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg et aktuelt tema (f.eks. klima, innvandring, skolepress eller sosiale medier). Finn tre nyhetsartikler om temaet fra ulike norske medier og gjennomfør en diskursanalyse: Hvilke diskurser dominerer? Hvilke ord og metaforer brukes? Hvem får uttale seg, og hvem er fraværende?',
        hints: [
          'Bruk Faircloughs tredimensjonale modell som ramme for analysen',
          'Se etter mønstre i ordvalg og kildvalg på tvers av de tre artiklene',
        ],
        solution: 'En god analyse identifiserer dominerende diskurser i de tre artiklene, peker på sentrale ord, metaforer og vinklinger, og drøfter hvem som får komme til orde og hvem som er fraværende. Analysen bør bruke Faircloughs tre nivåer: tekstnivå (ordvalg, metaforer), diskursiv praksis (kilder, produksjon), og sosial praksis (maktforhold, ideologi).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-2-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser bruken av passiv og aktiv setningsform i nyhetsdekning av en kriminalitetssak. Finn minst tre eksempler på passiv form og forklar hvilken effekt dette har: Hvem blir usynliggjort, og hvilke ideologiske konsekvenser kan det ha?',
        hints: [
          'Passiv form skjuler subjektet: «Mannen ble pågrepet» – hvem pågep?',
          'Tenk på hvordan passiv form kan beskytte makthavere eller fjerne ansvar',
        ],
        solution: 'Svaret bør identifisere konkrete eksempler på passiv form i nyhetsdekning og vise hvordan dette skjuler handlingsansvar. Analysen bør drøfte at passiv form ofte brukes for å beskytte institusjoner (politi, myndigheter) eller for å avpersonifisere ofre. Ideologisk fungerer dette ved å naturalisere maktforhold og gjøre systemisk ansvar usynlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-2-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv to korte nyhetsartikler (ca. 100 ord hver) om samme hendelse, men bruk bevisst to ulike diskurser. Forklar deretter hvilke språklige virkemidler du brukte for å konstruere de ulike diskursene, og reflekter over hva øvelsen viser om medienes makt.',
        hints: [
          'Velg en tydelig hendelse der ulike vinklinger er mulig (f.eks. en streik, en demonstrasjon, en politisk beslutning)',
          'Tenk på ordvalg, metaforer, kildevalg og vinkling som diskursive verktøy',
        ],
        solution: 'Svaret bør inneholde to artikler som tydelig representerer ulike diskurser gjennom bevisst bruk av ordvalg, metaforer, kilder og vinkling. Refleksjonen bør vise at øvelsen demonstrerer at «objektiv» journalistikk er en illusjon – alle mediefremstillinger er diskursive konstruksjoner som gjør valg om hva som inkluderes og ekskluderes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-2-ex-6',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft Foucaults påstand om at den som kontrollerer diskursen, kontrollerer hva som regnes som «sannhet». Bruk eksempler fra norske medier for å belyse hvordan medieeierskap, redaksjonelle valg og kildepraksis kan forme den offentlige diskursen.',
        hints: [
          'Tenk på medieeierskap (Schibsted, Amedia) og hvilke konsekvenser konsentrasjon kan ha',
          'Reflekter over hva som skjer når de fleste medier bruker de samme kildene og ekspertene',
        ],
        solution: 'Et sterkt svar knytter Foucaults maktbegrep til konkrete mekanismer i norske medier: medieeierskap, redaksjonelle prioriteringer, kildepraksis (hvem som regnes som «ekspert»), og algoritmisk kurasjon i digitale medier. Drøftingen bør nyansere med at Norge har pressesubsidier og allmennkringkasting som motvirker diskursmonopol, men at utfordringer knyttet til digital mediekonsentrasjon vedvarer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Diskurs', definition: 'En bestemt måte å forstå og snakke om et fenomen på, som former virkelighetsoppfatningen.' },
    { term: 'Diskursanalyse', definition: 'Metode for å undersøke hvordan diskurser fungerer og hvem som tjener på dem.' },
    { term: 'Subjektposisjonering', definition: 'Hvordan diskurser skaper bestemte roller og posisjoner for aktører.' },
    { term: 'Kritisk diskursanalyse', definition: 'Faircloughs tilnærming som analyserer tekst, diskursiv praksis og sosial praksis.' },
    { term: 'Diskursiv formasjon', definition: 'Et mønster av utsagn, begreper og temaer som tilhører en bestemt diskurs.' },
    { term: 'Eksklusjon', definition: 'At diskurser systematisk utelukker visse perspektiver, stemmer og erfaringer.' },
  ],
};

// ============================================================================
// Kapittel 1.3: Multimodal analyse
// ============================================================================

export const CHAPTER_MEDIEINFO_2_1_3: TextbookChapter = {
  id: 'medieinfo-2-1-3',
  courseId: 'medieinfo-2',
  chapterNumber: '1.3',
  title: 'Multimodal analyse',
  description: 'Samspillet mellom tekst, bilde, lyd og bevegelse.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere samspillet mellom ulike modaliteter i medietekster',
    'bruke multimodale begreper i analyse av sammensatte tekster',
  ],
  content: [
    {
      id: 'mi2-1-3-intro',
      type: 'text' as const,
      content: `# Multimodal analyse

Moderne medietekster er sjelden rene tekstbaserte eller rene visuelle uttrykk. En nyhetsartikkel på nett kombinerer skriftlig tekst, bilder, videoklipp, grafikk og interaktive elementer. En Instagram-post forener bilde, tekst, emojier, hashtagger og kanskje musikk. En dokumentarfilm fletter sammen tale, musikk, naturlyder, bilder og grafiske elementer.

Slike tekster som bruker flere **modaliteter** – altså flere uttrykksmåter – kalles **multimodale tekster**. Og det er nettopp **samspillet** mellom modalitetene som skaper den helhetlige meningen. Et bilde betyr noe annet når det ledsages av en dramatisk overskrift enn når det står alene.

**Multimodal analyse** er en metode for å undersøke hvordan ulike modaliteter samvirker for å skape mening i sammensatte medietekster. Fagfeltet bygger særlig på arbeidene til **Gunther Kress** og **Theo van Leeuwen**, som har utviklet et systematisk rammeverk for multimodal analyse.`
    },
    {
      id: 'mi2-1-3-def-1',
      type: 'definition' as const,
      title: 'Modaliteter og multimodalitet',
      content: `**Modalitet** er en uttrykksmåte eller meningsressurs som brukes i kommunikasjon. De viktigste modalitetene i medietekster er:

- **Verbalspråk (skrift):** Ord, setninger, typografi, layout
- **Visuell modalitet:** Bilder, fotografier, illustrasjoner, farger, komposisjon
- **Auditiv modalitet:** Tale, musikk, lydeffekter, stillhet
- **Bevegelse/kinetisk modalitet:** Film, animasjon, gestikk, dans
- **Romlig modalitet:** Layout, plassering, avstand, 3D-rom

**Multimodalitet** betyr at en tekst bruker flere modaliteter samtidig for å skape mening.

**Multimodal tekst:** En tekst der mening skapes gjennom samspill mellom to eller flere modaliteter. Nesten alle moderne medietekster er multimodale.

**Semiotisk ressurs:** Ethvert middel som brukes til å kommunisere mening – skrift, bilde, farge, typografi, lyd, gester osv.`
    },
    {
      id: 'mi2-1-3-example-1',
      type: 'example' as const,
      title: 'Eksempel: Multimodal analyse av en nettavisforside',
      content: `**Situasjon:** VGs forside (nettutgave) med toppnyheten om en klimarapport.

**Modaliteter i samspill:**

| Modalitet | Element | Funksjon |
|-----------|---------|----------|
| Skrift | Stor, rød overskrift: «ALARMEN GÅR» | Skaper dramatikk og hastverk |
| Bilde | Foto av oversvømmet landsby | Gjør abstrakt trussel konkret og emosjonell |
| Farge | Rødt på overskrift | Signaliserer fare og viktighet |
| Typografi | Stor, fet skrift | Markerer toppnyhet, fanger oppmerksomhet |
| Layout | Plassert øverst, stort format | Prioritet – dette er dagens viktigste sak |
| Video (ikon) | Avspillingsknapp på bildet | Inviterer til ytterligere fordypning |

**Samspill:** Hver modalitet bidrar med sin del av meningen. Overskriften alene er dramatisk, men det er bildet av den oversvømmede landsbyen som gjør abstraksjonen «klimaendringer» til en konkret, emosjonell realitet. Fargen rødt forsterker faresignalet. Samspillet mellom modalitetene skaper en helhet som er mer enn summen av delene.`
    },
    {
      id: 'mi2-1-3-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva menes med en «multimodal tekst»?',
        options: [
          { id: 'a', text: 'En tekst som er oversatt til flere språk', isCorrect: false },
          { id: 'b', text: 'En tekst som er publisert på flere plattformer', isCorrect: false },
          { id: 'c', text: 'En tekst der mening skapes gjennom samspill mellom to eller flere modaliteter', isCorrect: true },
          { id: 'd', text: 'En tekst som er skrevet av flere forfattere', isCorrect: false },
        ],
        solution: 'Riktig svar er c. En multimodal tekst skaper mening gjennom samspill mellom to eller flere uttrykksmåter (modaliteter), for eksempel skrift og bilde, eller tale, musikk og bevegelige bilder.',
      },
    },
    {
      id: 'mi2-1-3-def-2',
      type: 'definition' as const,
      title: 'Funksjonelle relasjoner mellom modaliteter',
      content: `Kress og van Leeuwen beskriver ulike måter modaliteter kan forholde seg til hverandre på:

**Utdyping (elaboration):**
Den ene modaliteten utdyper eller presiserer den andre. Teksten under et bilde forklarer hva vi ser.
- Eksempel: «Statsminister Jonas Gahr Støre under pressekonferansen i dag» (teksten presiserer hvem personen på bildet er)

**Utvidelse (extension):**
Den ene modaliteten legger til ny informasjon som den andre ikke inneholder.
- Eksempel: Et nyhetsinnslag der reporterens tale gir fakta og tall, mens bildene viser konsekvenser som ikke nevnes i teksten

**Forsterkning (enhancement):**
Den ene modaliteten forsterker eller understreker budskapet i den andre.
- Eksempel: Dramatisk musikk i en dokumentar som forsterker den alvorlige stemningen i bildene

**Kontrast/motsetning:**
Modalitetene kan stå i motsetning til hverandre, noe som skaper ironi, humor eller ambivalens.
- Eksempel: Et gledesstrålende bilde med en overskrift som avslører at personen er avslørt for svindel`
    },
    {
      id: 'mi2-1-3-example-2',
      type: 'example' as const,
      title: 'Eksempel: Multimodal analyse av en Instagram-post',
      content: `**Situasjon:** En influencer poster et bilde med tekst, emojier og hashtagger.

**Bilde:** Influenceren sitter ved et pent dekket frokostbord med sunn mat.

**Tekst:** «God morgen, verden! Starter dagen med min favorittfrokost. Livet er godt.»

**Emojier:** Solskinn, hjerte, avokado

**Hashtagger:** #godmorgen #sunnfrokost #livetsgodt #annonse

**Multimodal analyse:**

| Relasjon | Analyse |
|----------|---------|
| Bilde + tekst | **Utdyping:** Teksten bekrefter det bildet viser (frokost, god start på dagen) |
| Bilde + emojier | **Forsterkning:** Emojiene forsterker den positive stemningen i bildet |
| Bilde + #annonse | **Kontrast:** Hashtaggen avslører at det «spontane» bildet er betalt reklame – dette skaper en spenning mellom autentisitet og kommersiell hensikt |
| Tekst + hashtagger | **Utvidelse:** Hashtaggene legger til en sosial/søkbar dimensjon som teksten alene ikke har |

**Konklusjon:** Den multimodale analysen avdekker spenningen mellom autentisitet og reklame som er sentral i influencerkultur. Samspillet mellom modalitetene konstruerer en illusjon av spontanitet som hashtaggen #annonse delvis avslører.`
    },
    {
      id: 'mi2-1-3-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Når dramatisk musikk i en dokumentarfilm forsterker alvoret i bildene, er dette et eksempel på hvilken funksjonell relasjon mellom modalitetene?',
        options: [
          { id: 'a', text: 'Utdyping (elaboration)', isCorrect: false },
          { id: 'b', text: 'Utvidelse (extension)', isCorrect: false },
          { id: 'c', text: 'Forsterkning (enhancement)', isCorrect: true },
          { id: 'd', text: 'Kontrast (motsetning)', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Forsterkning (enhancement) innebærer at den ene modaliteten understreker og intensiverer budskapet i den andre. Dramatisk musikk som forsterker alvoret i bildene er et klassisk eksempel på forsterkning mellom auditiv og visuell modalitet.',
      },
    },
    {
      id: 'mi2-1-3-text-summary',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- **Modalitet** er en uttrykksmåte: skrift, bilde, lyd, bevegelse, rom
- **Multimodale tekster** skaper mening gjennom samspill mellom flere modaliteter
- Nesten alle moderne medietekster er multimodale
- **Kress og van Leeuwen** har utviklet et systematisk rammeverk for multimodal analyse
- Modaliteter kan forholde seg til hverandre gjennom **utdyping**, **utvidelse**, **forsterkning** eller **kontrast**
- Det er samspillet mellom modalitetene som skaper helheten – den er mer enn summen av delene
- Multimodal analyse avslører hvordan medietekster bruker flere uttrykksmåter strategisk for å skape ønsket effekt`
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-1-3-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg en forside fra en norsk nettavis (f.eks. VG, Dagbladet, NRK). Gjennomfør en multimodal analyse der du identifiserer alle modaliteter som er i bruk, og analyser samspillet mellom dem. Bruk begrepene utdyping, utvidelse, forsterkning og kontrast.',
        hints: [
          'Ta et skjermbilde av forsiden og bruk det som utgangspunkt',
          'Lag gjerne en tabell som systematiserer modaliteter, elementer og funksjonelle relasjoner',
        ],
        solution: 'En god analyse identifiserer modaliteter (skrift, bilde, farge, typografi, layout, video/animasjon), beskriver konkrete elementer og analyserer samspillet mellom dem med bruk av Kress og van Leeuwens begreper. Analysen bør vise at forsiden er en strategisk multimodal komposisjon som prioriterer, dramatiserer og inviterer til klikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-3-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser et TV-reklameinnslag multimodalt. Beskriv hvordan tale, musikk, bilder, tekst og farger samvirker for å skape et bestemt budskap og en bestemt stemning. Hvilken modalitet er mest fremtredende, og hvorfor tror du den er valgt som dominant?',
        hints: [
          'Se reklamen flere ganger og noter hva du legger merke til i hver modalitet separat',
          'Tenk på at valg av dominant modalitet ofte henger sammen med produkttype og målgruppe',
        ],
        solution: 'Svaret bør inneholde en systematisk gjennomgang av alle modaliteter i reklameinnslaget, med analyse av hvordan de samvirker. Den dominante modaliteten bør identifiseres og begrunnes – for eksempel at parfymereklamer ofte domineres av visuell modalitet (estetikk, drøm), mens matreklamer kan domineres av auditiv modalitet (appetittlyder, stemmebruk).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-3-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag to versjoner av en nyhetspresentasjon om samme hendelse, der du bevisst manipulerer samspillet mellom bilde og tekst. I den ene versjonen skal modalitetene forsterke hverandre, i den andre skal de stå i kontrast. Forklar virkningen av de to versjonene.',
        hints: [
          'Velg et bilde som kan tolkes på ulike måter avhengig av teksten som følger med',
          'Tenk på at kontrast mellom bilde og tekst kan skape ironi, humor eller ubehag',
        ],
        solution: 'Svaret bør inneholde to konkrete nyhetspresentasjoner med samme bilde men ulik tekst (eller omvendt). Forsterkningsversjonen bør vise koherent samspill der tekst og bilde underbygger hverandre. Kontrastversjonen bør vise hvordan uventede kombinasjoner skaper ny mening. Refleksjonen bør demonstrere at meningsskaping i multimodale tekster alltid er et resultat av samspill, ikke av enkeltelementer alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-3-ex-6',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft hvordan utviklingen av digitale medier har endret mulighetene for multimodal kommunikasjon. Sammenlign en papiravis med en nettavis, og analyser hvilke modaliteter som er tilgjengelige i hver, og hva dette betyr for meningsskapingen.',
        hints: [
          'Tenk på at nettaviser kan bruke video, animasjon, interaktivitet og lyd – noe papir ikke kan',
          'Reflekter over om flere modaliteter nødvendigvis betyr bedre kommunikasjon',
        ],
        solution: 'En god drøfting sammenligner papiravisen (skrift, bilde, typografi, layout) med nettavisen (pluss video, lyd, animasjon, interaktivitet, lenker) og analyserer hvordan tilgangen på flere modaliteter endrer meningsskapingen. Drøftingen bør nyanseres: flere modaliteter gir rikere uttrykk, men kan også skape informasjonsoverflod, distraksjon og konkurranse mellom modalitetene om leserens oppmerksomhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Modalitet', definition: 'En uttrykksmåte eller meningsressurs brukt i kommunikasjon (skrift, bilde, lyd, bevegelse, rom).' },
    { term: 'Multimodal tekst', definition: 'En tekst der mening skapes gjennom samspill mellom to eller flere modaliteter.' },
    { term: 'Semiotisk ressurs', definition: 'Ethvert middel som brukes til å kommunisere mening.' },
    { term: 'Utdyping', definition: 'Funksjonell relasjon der den ene modaliteten presiserer den andre.' },
    { term: 'Utvidelse', definition: 'Funksjonell relasjon der den ene modaliteten legger til ny informasjon.' },
    { term: 'Forsterkning', definition: 'Funksjonell relasjon der den ene modaliteten understreker budskapet i den andre.' },
    { term: 'Kontrast', definition: 'Funksjonell relasjon der modalitetene står i motsetning til hverandre.' },
  ],
};

// ============================================================================
// Kapittel 1.4: Narrativ analyse
// ============================================================================

export const CHAPTER_MEDIEINFO_2_1_4: TextbookChapter = {
  id: 'medieinfo-2-1-4',
  courseId: 'medieinfo-2',
  chapterNumber: '1.4',
  title: 'Narrativ analyse',
  description: 'Fortellerstrukturer, sjangre og narrative grep i medier.',
  estimatedMinutes: 20,
  competenceGoals: [
    'anvende narrativ teori på medieproduksjoner',
    'analysere fortellerstrukturer og narrative grep i ulike medier',
  ],
  content: [
    {
      id: 'mi2-1-4-intro',
      type: 'text' as const,
      content: `# Narrativ analyse

Mennesker er fortellerverker. Vi forstår oss selv og verden gjennom fortellinger – fra eventyr og myter til nyhetsreportasjer og reklamefilmer. Fortelling er en av de mest grunnleggende måtene å organisere erfaring og skape mening på.

I medieanalyse bruker vi **narrativ analyse** for å undersøke hvordan fortellinger er bygd opp i medietekster. Hvordan er handlingen strukturert? Hvem er helt og hvem er skurk? Hvilken fortellerstemme styrer vår opplevelse? Og hvorfor velger mediene bestemte narrative grep fremfor andre?

Narrativ teori bygger på en lang tradisjon fra Aristoteles' dramaturgiske modell til moderne strukturalisme og narratologi. Sentrale teoretikere inkluderer **Vladimir Propp**, som analyserte eventyrstrukturer, **Tzvetan Todorov**, som utviklet den narrative likevektsmodellen, og **Gérard Genette**, som systematiserte fortellerteori.`
    },
    {
      id: 'mi2-1-4-def-1',
      type: 'definition' as const,
      title: 'Narrativ og narratologi',
      content: `**Narrativ** (fortelling) er en strukturert fremstilling av hendelser i en tidsmessig rekkefølge, med minst én aktør og en form for forandring eller utvikling.

**Narratologi** er den vitenskapelige studien av fortellinger – deres strukturer, virkemåter og funksjoner.

**Sentrale narratologiske begreper:**
- **Historie (fabula):** Hendelsene slik de kronologisk fant sted
- **Diskurs (sjuzjet):** Måten historien er fortalt på – rekkefølge, tempo, vinkel
- **Plot:** Handlingens kjernestruktur – årsak-virkning-kjeden som driver fortellingen
- **Karakter:** Aktørene i fortellingen, med ulike roller og funksjoner
- **Forteller:** Den instansen som forteller historien – med større eller mindre pålitelighet
- **Fokalisering:** Gjennom hvem vi opplever historien – hvem «ser» vi gjennom?

Skillet mellom historie og diskurs er sentralt: Den samme historien kan fortelles på utallige måter, og valget av narrativ form påvirker hvordan vi opplever og tolker innholdet.`
    },
    {
      id: 'mi2-1-4-example-1',
      type: 'example' as const,
      title: 'Eksempel: Todorovs likevektsmodell i en nyhetsreportasje',
      content: `**Todorovs modell** beskriver den klassiske narrative strukturen i fem faser:

1. **Likevekt (equilibrium):** En tilstand av orden og stabilitet
2. **Forstyrrelse (disruption):** Noe forstyrrer likevekten
3. **Erkjennelse (recognition):** Forstyrrelsen oppdages og erkjennes
4. **Forsøk på gjenoppretting:** Aktører handler for å gjenopprette orden
5. **Ny likevekt:** En ny normalitet etableres (som kan være annerledes enn den opprinnelige)

**Anvendelse på en NRK-reportasje om flomkatastrofe:**

| Fase | Innhold i reportasjen |
|------|----------------------|
| Likevekt | Fredelig bygdesamfunn ved elven, arkivbilder av idyll |
| Forstyrrelse | Ekstremvær og flom – dramatiske bilder av vannmasser |
| Erkjennelse | Intervju med ordfører som beskriver omfanget |
| Gjenoppretting | Redningsarbeid, evakuering, krisestab i arbeid |
| Ny likevekt | Gjenoppbygging, intervju med innbyggere som ser fremover |

**Innsikt:** Nyhetsmedier bruker ofte den klassiske fortellerstrukturen for å gjøre komplekse hendelser forståelige og engasjerende. Modellen skaper dramaturgi, identifikasjon og avslutning.`
    },
    {
      id: 'mi2-1-4-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom «historie» (fabula) og «diskurs» (sjuzjet) i narratologien?',
        options: [
          { id: 'a', text: 'Historie er fiksjon, diskurs er fakta', isCorrect: false },
          { id: 'b', text: 'Historie er hendelsene slik de kronologisk skjedde, diskurs er måten de er fortalt på', isCorrect: true },
          { id: 'c', text: 'Historie er skriftlig, diskurs er muntlig', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begrepene betyr det samme', isCorrect: false },
        ],
        solution: 'Riktig svar er b. «Historie» (fabula) refererer til hendelsene i kronologisk rekkefølge, mens «diskurs» (sjuzjet) er måten historien presenteres på – inkludert rekkefølge, tempo, perspektiv og fortellermessige valg. Den samme historien kan fortelles gjennom ulike diskurser.',
      },
    },
    {
      id: 'mi2-1-4-def-2',
      type: 'definition' as const,
      title: 'Propps aktantmodell og karakterfunksjoner',
      content: `**Vladimir Propp** (1895–1970) analyserte russiske folkeeventyr og fant at de alle hadde en fast struktur med bestemte **karakterfunksjoner** (roller). Disse har blitt svært innflytelsesrike i medieanalyse:

- **Helten:** Hovedpersonen som søker noe og gjennomgår en utvikling
- **Skurken (antagonisten):** Den som motarbeider helten
- **Hjelperen:** Den som bistår helten (mentor, venn, alliert)
- **Prinsessen/belønningen:** Målet helten streber mot
- **Avsenderen:** Den som sender helten ut på oppdraget
- **Giveren:** Den som gir helten magiske hjelpemidler eller kunnskap

**Greimas' aktantmodell** forenklet Propp til tre akser:
- **Subjekt → Objekt** (helten søker noe)
- **Avsender → Mottaker** (noen initierer, noen mottar resultatet)
- **Hjelper → Motstander** (krefter som bistår eller motarbeider)

**I moderne medier:** Disse rollene gjenfinnes i alt fra TV-serier og filmer til nyhetsreportasjer og politisk kommunikasjon. Politikere fremstiller seg selv som helter som kjemper mot skurker (motstandere) for å oppnå goder for folket (mottaker).`
    },
    {
      id: 'mi2-1-4-example-2',
      type: 'example' as const,
      title: 'Eksempel: Aktantmodellen i en politisk nyhetssak',
      content: `**Situasjon:** Nyhetsdekning av regjeringens helsereform.

**Aktantanalyse:**

| Aktant | Rolle i nyhetsdekningen |
|--------|------------------------|
| **Subjekt (helt)** | Helseministeren som lanserer reformen |
| **Objekt (mål)** | Bedre helsetjenester for alle |
| **Avsender** | Regjeringen / velgernes mandat |
| **Mottaker** | Pasientene / befolkningen |
| **Hjelper** | Fageksperter som støtter reformen, tall og forskning |
| **Motstander** | Opposisjonen, legeuninger som protesterer, kostnadsbekymringer |

**Innsikt:** Nyhetsmedier bruker ofte – bevisst eller ubevisst – narrative roller for å strukturere politiske saker. Hvem som plasseres i rollen som «helt» og «skurk» påvirker publikums holdninger. En opposisjonsavis ville kanskje snu aktantene: gjøre helseministeren til motstander og de protesterende legene til helter.

Narrativ analyse avslører dermed at nyhetsdekning aldri er nøytral gjenfortelling av fakta, men alltid innebærer narrative valg.`
    },
    {
      id: 'mi2-1-4-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'I Todorovs likevektsmodell, hva skjer i fasen «forstyrrelse» (disruption)?',
        options: [
          { id: 'a', text: 'En ny normalitet etableres', isCorrect: false },
          { id: 'b', text: 'Helten mottar en belønning', isCorrect: false },
          { id: 'c', text: 'Noe bryter den eksisterende ordenen og stabiliteten', isCorrect: true },
          { id: 'd', text: 'Fortellingen avslutter med en moralsk lærdom', isCorrect: false },
        ],
        solution: 'Riktig svar er c. I Todorovs modell er «forstyrrelsen» hendelsen som bryter den opprinnelige likevekten og setter handlingen i gang. Dette driver fortellingen fremover mot erkjennelse, forsøk på gjenoppretting og til slutt en ny likevekt.',
      },
    },
    {
      id: 'mi2-1-4-text-summary',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- **Narrativ** er en strukturert fremstilling av hendelser med aktører og forandring
- Skillet mellom **historie** (hva som skjer) og **diskurs** (hvordan det fortelles) er sentralt
- **Todorovs likevektsmodell** beskriver fortellingens fem faser fra likevekt via forstyrrelse til ny likevekt
- **Propps karakterfunksjoner** identifiserer faste roller i fortellinger: helt, skurk, hjelper osv.
- **Greimas' aktantmodell** forenkler dette til tre akser: subjekt–objekt, avsender–mottaker, hjelper–motstander
- Medier bruker narrative strukturer i alt fra nyheter til reklame for å skape engasjement og mening
- Narrativ analyse avslører at nyhetsdekning innebærer narrative valg som påvirker tolkningen`
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-1-4-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg en norsk TV-serie eller film og analyser den ved hjelp av Todorovs likevektsmodell. Identifiser de fem fasene og drøft om modellen passer godt eller om fortellingen avviker fra den klassiske strukturen.',
        hints: [
          'Velg gjerne en serie/film du kjenner godt, slik at du kan gå i dybden',
          'Mange moderne fortellinger bryter bevisst med den klassiske strukturen – drøft hva effekten er',
        ],
        solution: 'Et godt svar identifiserer de fem fasene i den valgte serien/filmen med konkrete eksempler fra handlingen. Drøftingen bør vurdere om modellen passer godt (mange mainstreamfortellinger følger den) eller om fortellingen avviker (f.eks. åpen slutt uten ny likevekt, eller brudd med lineær struktur). Avviket bør forklares som et bevisst kunstnerisk valg med en bestemt effekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-4-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Finn en nyhetssak fra en norsk avis eller nettavis og analyser den ved hjelp av Greimas sin aktantmodell. Hvem er subjekt, objekt, hjelper, motstander, avsender og mottaker? Drøft hvordan den narrative strukturen påvirker hvordan vi oppfatter saken.',
        hints: [
          'Politiske saker, kriminalsaker og konfliktsaker har ofte tydelige aktantstrukturer',
          'Tenk på at det ikke alltid er opplagt hvem som er «helt» og «skurk» – det avhenger av mediets vinkling',
        ],
        solution: 'Svaret bør identifisere alle seks aktanter i nyhetssaken med konkrete begrunnelser, og drøfte hvordan denne narrative struktureringen påvirker leserens oppfatning. Et sterkt svar viser også hvordan en alternativ aktantfordeling ville gitt en helt annen fortelling om samme hendelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-4-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign hvordan to ulike medier (f.eks. en tabloidavis og NRK) dekker den samme hendelsen. Analyser de narrative grepene som brukes: Hvem er helter og skurker? Hvordan er dramaturgien bygd opp? Hva er effekten av de ulike narrative valgene?',
        hints: [
          'Se etter forskjeller i vinkling, kildvalg, ordbruk og bildebruk',
          'Tenk på at tabloidmedier og allmennkringkastere ofte har ulike narrative strategier',
        ],
        solution: 'En god sammenligning identifiserer konkrete narrative forskjeller: tabloidmedier bruker ofte sterkere dramatisering, tydeligere helte-/skurkroller og emosjonell appellering, mens allmennkringkastere kan ha en mer balansert, men likevel narrativ, tilnærming. Drøftingen bør vise at alle medier gjør narrative valg, men at valgene varierer etter medietype og formål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-4-ex-6',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft påstanden: «Nyhetsmedier forteller ikke virkeligheten – de forteller fortellinger om virkeligheten.» Bruk begreper fra narrativ teori og gi konkrete eksempler fra norske medier.',
        hints: [
          'Tenk på at enhver journalistisk fremstilling innebærer utvalg, vinkling og strukturering – altså narrative valg',
          'Drøft om dette betyr at nyheter er «usanne», eller om narrativisering er uunngåelig og kanskje nødvendig',
        ],
        solution: 'Et sterkt svar bruker narratologiske begreper (historie/diskurs, plot, karakterfunksjoner, fokalisering) for å vise at enhver nyhetsfortelling innebærer narrative valg. Eksemplene bør være konkrete og fra norske medier. Drøftingen bør nyansere: narrativisering er uunngåelig fordi vi forstår verden gjennom fortellinger, men det betyr ikke at nyheter er «oppdiktede» – det betyr at vi må være bevisste på de narrative rammene som strukturerer vår forståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Narrativ', definition: 'En strukturert fremstilling av hendelser med aktører og forandring.' },
    { term: 'Narratologi', definition: 'Vitenskapelig studie av fortellingers strukturer, virkemåter og funksjoner.' },
    { term: 'Historie (fabula)', definition: 'Hendelsene slik de kronologisk fant sted.' },
    { term: 'Diskurs (sjuzjet)', definition: 'Måten historien er fortalt på – rekkefølge, tempo, vinkel.' },
    { term: 'Plot', definition: 'Handlingens kjernestruktur – årsak-virkning-kjeden som driver fortellingen.' },
    { term: 'Fokalisering', definition: 'Gjennom hvems perspektiv vi opplever historien.' },
    { term: 'Aktantmodell', definition: 'Greimas\' modell med seks roller: subjekt, objekt, avsender, mottaker, hjelper, motstander.' },
    { term: 'Likevektsmodell', definition: 'Todorovs modell med fem faser: likevekt, forstyrrelse, erkjennelse, gjenoppretting, ny likevekt.' },
  ],
};

// ============================================================================
// Kapittel 1.5: Retorikk i medier
// ============================================================================

export const CHAPTER_MEDIEINFO_2_1_5: TextbookChapter = {
  id: 'medieinfo-2-1-5',
  courseId: 'medieinfo-2',
  chapterNumber: '1.5',
  title: 'Retorikk i medier',
  description: 'Retorisk analyse av medietekster og overtalelsesstrategier.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere retoriske virkemidler i medietekster',
    'anvende retorisk teori på ulike typer medietekster',
  ],
  content: [
    {
      id: 'mi2-1-5-intro',
      type: 'text' as const,
      content: `# Retorikk i medier

Retorikk er kunsten å overbevise. Allerede i antikken utviklet Aristoteles et systematisk rammeverk for å analysere og utøve overtalende kommunikasjon. I dag er retorisk analyse et sentralt verktøy for å forstå hvordan medietekster forsøker å påvirke oss – enten det dreier seg om politiske taler, reklame, nyhetsdekning eller debattinnlegg.

Medier er grunnleggende retoriske – de forsøker alltid å overbevise oss om noe, enten direkte (som i en lederartikkel eller reklame) eller indirekte (som i valg av nyhetsvinkling og bildebruk). **Retorisk analyse** gir oss verktøy til å gjennomskue disse overtalelsesstrategiene og bli mer kritiske mediebrukere.

I dette kapittelet skal vi se på klassisk retorisk teori og anvende den på moderne medietekster. Vi skal lære om de tre appellformene **etos**, **patos** og **logos**, om retoriske troper og figurer, og om den retoriske situasjonen.`
    },
    {
      id: 'mi2-1-5-def-1',
      type: 'definition' as const,
      title: 'Den retoriske situasjonen (kairos)',
      content: `**Den retoriske situasjonen** er de omstendighetene som omgir en kommunikasjonssituasjon og gjør retorisk handling relevant. Begrepet ble utviklet av **Lloyd Bitzer** og omfatter:

- **Det påtrengende problem (exigence):** En situasjon som krever en respons. Noe som mangler eller trenger å endres.
  - Eksempel: En klimarapport som viser alarmerende tall, skaper et påtrengende problem som krever retorisk respons.

- **Publikum (audience):** De som kan påvirkes av det retoriske budskapet og eventuelt handle.
  - Eksempel: Velgere som kan stemme for klimapolitikk, forbrukere som kan endre atferd.

- **De retoriske vilkårene (constraints):** Begrensninger og muligheter i situasjonen – normer, sjanger, medium, tid, forventninger.

**Kairos** er det greske begrepet for «det rette øyeblikket» – tidspunktet der et retorisk budskap har størst sjanse for å nå frem. I medier handler kairos om timing: Når publiserer man en kronikk? Når lanserer man en kampanje? Når sender man en pressemelding?`
    },
    {
      id: 'mi2-1-5-example-1',
      type: 'example' as const,
      title: 'Eksempel: Den retoriske situasjonen i en klimakampanje',
      content: `**Situasjon:** En miljøorganisasjon lanserer en kampanje for strengere klimapolitikk.

**Analyse av den retoriske situasjonen:**

| Element | Analyse |
|---------|---------|
| **Påtrengende problem** | Ny FN-rapport viser at klimamålene ikke nås – dette skaper urgency |
| **Publikum** | Norske velgere og politikere som kan påvirke klimapolitikken |
| **Retoriske vilkår** | Medielandskapet, politisk klima, eksisterende holdninger, sjanger (kampanjefilm) |
| **Kairos** | Kampanjen lanseres rett etter FN-rapporten og rett før stortingsvalget – timing er alt |

**Innsikt:** Kampanjens effektivitet avhenger ikke bare av budskapet, men av den retoriske situasjonen. En identisk kampanje lansert på et annet tidspunkt, til et annet publikum, eller i et annet politisk klima, ville ha en helt annen virkning. Retorisk analyse handler derfor ikke bare om hva som sies, men om når, til hvem og under hvilke omstendigheter det sies.`
    },
    {
      id: 'mi2-1-5-ex-1',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er «kairos» i retorisk teori?',
        options: [
          { id: 'a', text: 'Talerens troverdighet og karakter', isCorrect: false },
          { id: 'b', text: 'Det rette øyeblikket for et retorisk budskap', isCorrect: true },
          { id: 'c', text: 'Den logiske argumentasjonen i en tale', isCorrect: false },
          { id: 'd', text: 'Den emosjonelle appellen i en tekst', isCorrect: false },
        ],
        solution: 'Riktig svar er b. Kairos er det greske begrepet for «det rette øyeblikket» – tidspunktet der et retorisk budskap har størst sjanse for å nå frem og påvirke publikum. I medier handler kairos om timing og kontekst.',
      },
    },
    {
      id: 'mi2-1-5-def-2',
      type: 'definition' as const,
      title: 'Aristoteles\' tre appellformer: etos, patos og logos',
      content: `**Aristoteles** (384–322 f.Kr.) identifiserte tre grunnleggende måter å overbevise på, kalt **appellformer**:

**Etos – appell til troverdighet:**
Overbevisning gjennom avsenderens karakter, kompetanse og pålitelighet.
- I medier: Bruk av eksperter, referanse til forskning, avsenderens omdømme
- Eksempel: «Ifølge forskere ved Universitetet i Oslo...» styrker budskapet gjennom faglig autoritet

**Patos – appell til følelser:**
Overbevisning gjennom å vekke følelser hos mottakeren – frykt, medfølelse, sinne, glede, stolthet.
- I medier: Enkeltmenneskers historier, dramatiske bilder, emosjonelt språk
- Eksempel: En nyhetsreportasje som forteller historien til en enkeltfamilie rammet av fattigdom

**Logos – appell til fornuft:**
Overbevisning gjennom logisk argumentasjon, fakta, statistikk og rasjonelle resonnementer.
- I medier: Tall, grafer, forskningsresultater, logiske slutninger
- Eksempel: «Statistikk viser at 73 % av befolkningen støtter reformen...»

**I praksis:** De fleste effektive medietekster kombinerer alle tre appellformene. En god nyhetsreportasje bruker ekspertkilder (etos), enkeltmenneskers historier (patos) og statistikk (logos).`
    },
    {
      id: 'mi2-1-5-example-2',
      type: 'example' as const,
      title: 'Eksempel: Retorisk analyse av en valgkampvideo',
      content: `**Situasjon:** En politisk partileder publiserer en valgkampvideo på sosiale medier.

**Retorisk analyse:**

**Etos (troverdighet):**
- Lederen er kledd i uformelle klær, filmet i et vanlig hjem → signaliserer «jeg er som dere»
- Refererer til egen erfaring som sykepleier → faglig kompetanse
- «Vi har levert resultater de siste fire årene» → viser til track record

**Patos (følelser):**
- Forteller historien om en eldre dame som ventet i åtte timer på legevakt → vekker medfølelse og sinne
- Dramatisk musikk i bakgrunnen → forsterker emosjonell stemning
- «Dine foreldre fortjener bedre» → appellerer til familielojalitet

**Logos (fornuft):**
- «Vi vil ansette 5000 nye sykepleiere» → konkret, kvantifiserbart løfte
- «Ventetidene har økt med 40 % under den nåværende regjeringen» → statistikk
- «Forskning viser at tidlig innsats sparer samfunnet for milliarder» → forskningsbasert argumentasjon

**Samspill:** Videoen starter med patos (den eldre damens historie) for å fange oppmerksomhet og skape følelsesmessig engasjement, bygger etos gjennom personlig erfaring, og avslutter med logos (konkrete løsninger og tall). Denne rekkefølgen er en klassisk retorisk strategi.`
    },
    {
      id: 'mi2-1-5-ex-2',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'En reklame bruker en kjent idrettsutøver for å promotere et produkt. Hvilken appellform er dette primært et eksempel på?',
        options: [
          { id: 'a', text: 'Logos – appell til fornuft', isCorrect: false },
          { id: 'b', text: 'Patos – appell til følelser', isCorrect: false },
          { id: 'c', text: 'Etos – appell til troverdighet', isCorrect: true },
          { id: 'd', text: 'Kairos – det rette øyeblikket', isCorrect: false },
        ],
        solution: 'Riktig svar er c. Bruk av en kjent idrettsutøver i reklame er primært en etos-appell: utøverens status, prestasjoner og omdømme overføres til produktet. Mottakeren tenker (bevisst eller ubevisst) at «hvis denne suksessrike personen bruker dette produktet, må det være bra». Det kan også ha patos-elementer (beundring, inspirasjon), men etos er den primære strategien.',
      },
    },
    {
      id: 'mi2-1-5-def-3',
      type: 'definition' as const,
      title: 'Retoriske troper og figurer i medietekster',
      content: `**Retoriske troper** og **figurer** er språklige virkemidler som brukes for å forsterke budskapet og gjøre det mer engasjerende og minneverdig.

**Viktige troper (betydningsoverføringer):**
- **Metafor:** Skjult sammenligning – «innvandringsbølgen» (innvandring er som en naturkraft)
- **Metonymi:** Erstatter noe med noe nærliggende – «Stortinget bestemte» (det er personene, ikke bygningen)
- **Synekdoke:** Del for helhet – «Norge vant» (idrettsutøvere, ikke hele landet)
- **Ironi:** Sier det motsatte av hva man mener – «Så bra at strømprisene stiger igjen!»

**Viktige figurer (formskapende grep):**
- **Anafor:** Gjentakelse i begynnelsen – «Vi skal. Vi kan. Vi vil.»
- **Antitese:** Motsetninger satt opp mot hverandre – «Ikke hva landet kan gjøre for deg, men hva du kan gjøre for landet»
- **Retorisk spørsmål:** Spørsmål der svaret er gitt – «Er vi virkelig villige til å akseptere dette?»
- **Klimaks:** Oppbygging til et høydepunkt – «Vi er bekymret, vi er sinte, vi krever endring!»

I medier er metaforer spesielt viktige fordi de former hvordan vi **tenker** om fenomener. Å omtale innvandring som «bølge» eller «strøm» aktiverer et helt annet tankemønster enn å si «mennesker som flytter».`
    },
    {
      id: 'mi2-1-5-example-3',
      type: 'example' as const,
      title: 'Eksempel: Metaforer i nyhetsdekning',
      content: `**Metaforanalyse av mediedekning av økonomi:**

| Metafor | Eksempel i medier | Implisitt tankemønster |
|---------|-------------------|----------------------|
| Økonomi som kropp | «Sunn økonomi», «syke markeder» | Økonomi er en organisme som kan bli syk |
| Økonomi som maskin | «Motoren i økonomien», «bremse veksten» | Økonomi er en mekanisk innretning |
| Økonomi som vær | «Finansiell storm», «økonomisk tørke» | Økonomiske kriser er naturkrefter vi ikke kontrollerer |
| Økonomi som krig | «Priskrig», «handelsangrep» | Økonomi er en kamp med vinnere og tapere |

**Innsikt:** Metaforer er ikke bare dekorasjon – de er **kognitive rammer** som former vår forståelse. Når medier konsekvent bruker naturmetaforer om økonomiske kriser («storm», «flom»), impliserer det at krisene er uunngåelige naturkrefter – ikke resultat av menneskelige beslutninger. Retorisk analyse avslører at metaforvalg er ideologiske valg med politiske konsekvenser.`
    },
    {
      id: 'mi2-1-5-text-summary',
      type: 'text' as const,
      title: 'Oppsummering',
      content: `**Hva vi har lært i dette kapittelet:**

- **Retorikk** er kunsten å overbevise, og medietekster er grunnleggende retoriske
- **Den retoriske situasjonen** omfatter påtrengende problem, publikum og retoriske vilkår
- **Kairos** er det rette øyeblikket for et retorisk budskap – timing er avgjørende i medier
- Aristoteles identifiserte tre **appellformer**: etos (troverdighet), patos (følelser) og logos (fornuft)
- Effektive medietekster kombinerer typisk alle tre appellformene
- **Retoriske troper** (metafor, metonymi, ironi) og **figurer** (anafor, antitese, retorisk spørsmål) forsterker budskapet
- Metaforer er ikke bare språklige virkemidler, men **kognitive rammer** som former vår forståelse
- Retorisk analyse gjør oss til mer kritiske og bevisste mediebrukere`
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-1-5-ex-3',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg en kronikk eller lederartikkel fra en norsk avis. Gjennomfør en retorisk analyse der du identifiserer bruken av etos, patos og logos. Vurder hvilken appellform som dominerer, og drøft hvorfor dette kan være et bevisst retorisk valg.',
        hints: [
          'Les teksten flere ganger og marker ulike appellformer med ulike farger',
          'Tenk på at sjangeren (kronikk vs. lederartikkel) påvirker hvilke appellformer som er forventet',
        ],
        solution: 'En god analyse identifiserer konkrete eksempler på alle tre appellformene i teksten, vurderer hvilken som dominerer, og begrunner dette med referanse til sjanger, tema og formål. Kronikker av fagpersoner domineres ofte av etos og logos, mens mer aktivistiske tekster kan domineres av patos. Analysen bør vise at appellformene samspiller og forsterker hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-5-ex-4',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjør en metaforanalyse av nyhetsdekning av et selvvalgt tema (f.eks. klima, kriminalitet, innvandring eller teknologi). Finn minst fem metaforer som brukes, og drøft hvilke tankemønstre metaforene aktiverer og hvilke ideologiske konsekvenser dette kan ha.',
        hints: [
          'Les flere artikler om samme tema og se etter gjentakende metaforer',
          'Tenk på at metaforer fremhever visse aspekter og skjuler andre – hva utelates?',
        ],
        solution: 'Svaret bør identifisere minst fem metaforer med konkrete kildehenvisninger og analysere hvilke tankemønstre de aktiverer. For eksempel: klimametaforer som «kamp» (vi kan vinne), «katastrofe» (det er for sent) eller «utfordring» (vi kan løse det) skaper vidt forskjellige forståelsesrammer. Drøftingen bør vise at metaforvalg har reelle ideologiske og politiske konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-5-ex-5',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Analyser en reklamefilm retorisk: Identifiser den retoriske situasjonen (påtrengende problem, publikum, kairos), appellformene (etos, patos, logos) og retoriske troper/figurer. Vurder om reklamen er retorisk vellykket, og begrunn svaret.',
        hints: [
          'Velg en reklame med tydelige retoriske strategier – valgkampvideoer og samfunnsreklamer fungerer godt',
          'Husk å vurdere kairos: er reklamen tilpasset sin tid og kontekst?',
        ],
        solution: 'Et godt svar dekker alle elementer: retorisk situasjon, appellformer og troper/figurer. Vurderingen av retorisk suksess bør bygge på om reklamen når sitt tilsiktede publikum med et budskap som er tilpasset den retoriske situasjonen. Svaret bør vise forståelse for at retorisk analyse handler om å forstå overtalelsesstrategier, ikke om å bedømme sannhetsgehalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mi2-1-5-ex-6',
      type: 'exercise' as const,
      exercise: {
        id: 'mi2-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft påstanden: «I en tid med desinformasjon og falske nyheter er retorisk kompetanse viktigere enn noensinne.» Bruk begreper fra retorisk teori og gi eksempler fra aktuelle mediedebatter. Hva kan retorisk analyse bidra med for å styrke den kritiske mediekompetansen?',
        hints: [
          'Tenk på hvordan populistisk retorikk, konspirasjonsteorier og kommersiell påvirkning bruker retoriske virkemidler',
          'Reflekter over om retorisk bevissthet kan gjøre oss immune mot manipulasjon, eller om den har begrensninger',
        ],
        solution: 'Et sterkt svar bruker retoriske begreper (appellformer, troper, retorisk situasjon) for å analysere desinformasjon og falske nyheter. Drøftingen bør vise at retorisk kompetanse hjelper oss å gjennomskue manipulasjon (identifisere overdreven patos-appell, svak logos, falsk etos), men også nyansere: retorisk analyse har begrensninger fordi vi alle er sårbare for retorisk påvirkning, og fordi algoritmestyrte medier skaper nye utfordringer som klassisk retorisk teori ikke fullt ut fanger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Retorikk', definition: 'Kunsten å overbevise gjennom effektiv kommunikasjon.' },
    { term: 'Retorisk situasjon', definition: 'Omstendighetene som omgir en kommunikasjonssituasjon: påtrengende problem, publikum, vilkår.' },
    { term: 'Kairos', definition: 'Det rette øyeblikket for et retorisk budskap.' },
    { term: 'Etos', definition: 'Appell til troverdighet – overbevisning gjennom avsenderens karakter og kompetanse.' },
    { term: 'Patos', definition: 'Appell til følelser – overbevisning gjennom å vekke følelser hos mottakeren.' },
    { term: 'Logos', definition: 'Appell til fornuft – overbevisning gjennom logisk argumentasjon og fakta.' },
    { term: 'Metafor', definition: 'Skjult sammenligning som overfører egenskaper fra ett fenomen til et annet.' },
    { term: 'Retorisk spørsmål', definition: 'Spørsmål der svaret er gitt – brukt for å engasjere og overbevise.' },
  ],
};

// ============================================================================
// Eksporter alle kapitler i seksjon 1
// ============================================================================

export const MEDIEINFO_2_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MEDIEINFO_2_1_1,
  CHAPTER_MEDIEINFO_2_1_2,
  CHAPTER_MEDIEINFO_2_1_3,
  CHAPTER_MEDIEINFO_2_1_4,
  CHAPTER_MEDIEINFO_2_1_5,
];
