/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Strategisk forretningsplanlegging
// ============================================================================

export const CHAPTER_ENTREBED_2_1_1: TextbookChapter = {
  id: 'entrebed-2-1-1',
  courseId: 'entrebed-2',
  chapterNumber: '1.1',
  title: 'Strategisk forretningsplanlegging',
  description: 'Visjon, misjon, verdier, SWOT-analyse og PESTEL-analyse som verktoy for strategisk planlegging.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utvikle avanserte forretningsstrategier',
    'anvende strategiske analyseverktoy i forretningsplanlegging',
  ],
  content: [
    {
      id: 'eb2-1-1-intro',
      type: 'text',
      content: `## Strategisk forretningsplanlegging

Strategisk forretningsplanlegging handler om a definere en langsiktig retning for bedriften og utvikle konkrete planer for a na dit. En god strategi bygger pa en klar forstaelse av hvem bedriften er, hva den vil oppna, og hvilke omgivelser den opererer i.

I dette kapittelet skal vi se pa de grunnleggende byggesteinene i strategisk planlegging: visjon, misjon og verdier. Deretter laerer vi a bruke SWOT- og PESTEL-analyse for a kartlegge bedriftens situasjon og omgivelser.`,
    },
    {
      id: 'eb2-1-1-def-1',
      type: 'definition',
      title: 'Visjon',
      content: `En visjon er et fremtidsbilde som beskriver hva bedriften onsker a oppna pa lang sikt. Visjonen skal vaere inspirerende og retningsgivende, og gir hele organisasjonen noe a strekke seg mot. En god visjon er ambisios, men realistisk nok til a vaere troverdig.`,
    },
    {
      id: 'eb2-1-1-def-2',
      type: 'definition',
      title: 'Misjon',
      content: `Misjonen beskriver bedriftens formal og eksistensgrunnlag - hvorfor bedriften finnes. Mens visjonen peker fremover, forklarer misjonen hva bedriften gjor her og na, hvem den tjener, og hvordan den skaper verdi. Misjonen er mer konkret enn visjonen.`,
    },
    {
      id: 'eb2-1-1-def-3',
      type: 'definition',
      title: 'Verdier',
      content: `Bedriftens verdier er de grunnleggende prinsippene og holdningene som styrer atferd og beslutninger i organisasjonen. Verdiene utgjor bedriftskulturen og hjelper ansatte med a ta riktige valg i hverdagen. Eksempler kan vaere innovasjon, barekraft, integritet og samarbeid.`,
    },
    {
      id: 'eb2-1-1-ex-1',
      type: 'example',
      title: 'Visjon, misjon og verdier for en teknologibedrift',
      problem: 'En norsk teknologibedrift som utvikler programvare for helsetjenester onsker a formulere sin visjon, misjon og verdier. Hvordan kan dette se ut?',
      solution: `**Visjon:** "Vi skal gjore helsetjenester tilgjengelig for alle gjennom teknologi."

**Misjon:** "Vi utvikler brukervennlig programvare som hjelper helsepersonell med a gi bedre og mer effektiv behandling til pasienter i Norge og Norden."

**Verdier:**
- **Pasientfokus** - Pasienten star alltid i sentrum for det vi gjor
- **Innovasjon** - Vi soker stadig nye og bedre losninger
- **Tillit** - Vi behandler helsedata med storste aktsomhet
- **Samarbeid** - Vi jobber tett med helsepersonell for a forsta deres behov`,
    },
    {
      id: 'eb2-1-1-def-4',
      type: 'definition',
      title: 'SWOT-analyse',
      content: `SWOT-analyse er et strategisk verktoy som kartlegger bedriftens styrker (Strengths), svakheter (Weaknesses), muligheter (Opportunities) og trusler (Threats). Styrker og svakheter er interne faktorer bedriften kan pavirke selv, mens muligheter og trusler er eksterne faktorer i omgivelsene.`,
    },
    {
      id: 'eb2-1-1-ex-2',
      type: 'example',
      title: 'SWOT-analyse for en kafekjede',
      problem: 'Gjennomfor en forenklet SWOT-analyse for en liten kafekjede med tre utsalg i Oslo.',
      solution: `**Styrker:**
- Hoy kvalitet pa kaffe og mat
- Lojale stamgjester og godt rykte
- Sentral beliggenhet i alle tre utsalgene

**Svakheter:**
- Begrenset markedsforingsbudsjett
- Avhengig av fa nockelleverandorer
- Mangler digital bestillingslosning

**Muligheter:**
- Voksende interesse for spesialkaffe i Norge
- Mulighet for a lansere nettbutikk med kaffebonner
- Samarbeid med lokale matprodusenter

**Trusler:**
- Stor konkurranse fra internasjonale kafekjeder
- Okte ravarepiser pa kaffe globalt
- Endrede forbrukervaner etter pandemien`,
    },
    {
      id: 'eb2-1-1-def-5',
      type: 'definition',
      title: 'PESTEL-analyse',
      content: `PESTEL-analyse er et rammeverk for a analysere makroomgivelsene til en bedrift. Bokstavene star for Politiske, Ekonomiske, Sosiokulturelle, Teknologiske, Miljo-relaterte (Environmental) og Juridiske (Legal) faktorer. Analysen gir et helhetlig bilde av de ytre kreftene som pavirker bedriften.`,
    },
    {
      id: 'eb2-1-1-ex-3',
      type: 'example',
      title: 'PESTEL-analyse for et transportselskap',
      problem: 'Identifiser minst en faktor for hver PESTEL-kategori som pavirker et norsk transportselskap.',
      solution: `**Politisk:** Statlige subsidier til elbiler og gronn transport pavirker kostnadsstrukturen.

**Ekonomisk:** Hoy inflasjon oker drivstoffkostnader og lonnskrav.

**Sosiokulturell:** Okt miljobevissthet blant kunder som foretrekker gronne transportlosninger.

**Teknologisk:** Utvikling innen selvkjorende kjoretoy og elektriske lastebiler.

**Miljo (Environmental):** Strengere utslippskrav fra EU og norske myndigheter.

**Juridisk (Legal):** Nye regler for kabotasje og arbeidstidsbestemmelser for sjaforer.`,
    },
    {
      id: 'eb2-1-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom en visjon og en misjon?',
        options: [
          { id: 'a', text: 'En visjon er kort, mens en misjon er lang', isCorrect: false },
          { id: 'b', text: 'En visjon beskriver fremtidig mal, mens en misjon forklarer navaerende formal', isCorrect: true },
          { id: 'c', text: 'En visjon er for ledelsen, mens en misjon er for de ansatte', isCorrect: false },
          { id: 'd', text: 'En visjon handler om penger, mens en misjon handler om kunder', isCorrect: false },
        ],
        solution: 'Visjonen er et fremtidsbilde av hva bedriften onsker a oppna pa lang sikt, mens misjonen beskriver bedriftens navaerende formal, hvem den tjener, og hvordan den skaper verdi i dag.',
      },
    },
    {
      id: 'eb2-1-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-1-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilke av folgende er en ekstern faktor i en SWOT-analyse?',
        options: [
          { id: 'a', text: 'Hoy kompetanse blant ansatte', isCorrect: false },
          { id: 'b', text: 'Darlig okonomi i bedriften', isCorrect: false },
          { id: 'c', text: 'Nye reguleringer fra myndighetene', isCorrect: true },
          { id: 'd', text: 'Effektive interne prosesser', isCorrect: false },
        ],
        solution: 'Nye reguleringer fra myndighetene er en ekstern faktor (trussel eller mulighet) som bedriften ikke direkte kan kontrollere. De andre alternativene er interne faktorer (styrker eller svakheter).',
      },
    },
    {
      id: 'eb2-1-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-1-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Velg en bedrift du kjenner til. Formuler en visjon, en misjon og tre kjerneverdier for denne bedriften. Forklar hvorfor du mener disse er passende.',
        hints: [
          'Tenk pa hva bedriften er mest kjent for og hva de onsker a oppna.',
          'Visjonen bor vaere inspirerende og ambisios, mens misjonen bor vaere konkret.',
          'Verdiene bor gjenspeile bedriftens kultur og hvordan de onsker a bli oppfattet.',
        ],
        solution: 'Et godt svar velger en reell bedrift og formulerer en visjon som peker mot et fremtidig mal, en misjon som forklarer hva bedriften gjor i dag og for hvem, og tre verdier som henger naturlig sammen med bedriftens identitet. Eksempel for Rema 1000: Visjon - "Gjore sunn og god mat tilgjengelig for alle nordmenn", Misjon - "Vi tilbyr dagligvarer av hoy kvalitet til lave priser", Verdier - Enkelhet, Ansvarlighet, Handlekraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-1-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfor en fullstendig SWOT-analyse for din egen skole eller en lokal bedrift. Identifiser minst tre faktorer i hver kategori.',
        hints: [
          'Start med styrker - hva gjor skolen/bedriften bra?',
          'Tenk pa svakheter som omrader med forbedringspotensial.',
          'Se etter muligheter i omgivelsene, som nye trender eller teknologi.',
          'Trusler kan vaere konkurranse, okonomiske endringer eller regelendringer.',
        ],
        solution: 'Et godt svar inneholder minst tre punkter under hver kategori (S, W, O, T) som er relevante og godt begrunnede. Analysen bor vise forstaelse for forskjellen mellom interne faktorer (styrker/svakheter) og eksterne faktorer (muligheter/trusler). Eksempelvis kan en skole ha styrker som dyktige laerere og godt utstyr, svakheter som lite plass, muligheter som digitalisering, og trusler som synkende elevtall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-1-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Gjennomfor en PESTEL-analyse for en bedrift som onsker a starte med produksjon og salg av plantebasert mat i Norge. Identifiser minst to faktorer per kategori.',
        hints: [
          'Politisk: Tenk pa landbrukspolitikk og stotte til gronne naeringer.',
          'Ekonomisk: Vurder kjopekraft, matpriser og investeringsklima.',
          'Sosiokulturell: Se pa trender innen kosthold og helse.',
          'Teknologisk: Tenk pa matteknologi og produksjonsmetoder.',
        ],
        solution: 'Et godt svar dekker alle seks PESTEL-kategorier med relevante faktorer. Politisk: Norsk landbrukspolitikk, EU-reguleringer for matproduksjon. Ekonomisk: Hoy kjopekraft i Norge, okte ravarekostnader. Sosiokulturell: Voksende vegetar-trend, fokus pa barekraft. Teknologisk: Ny matteknologi, automatisert produksjon. Miljo: Klimamal, redusert karbonavtrykk. Juridisk: Matmerking-krav, allergiregler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-1-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvordan en SWOT-analyse og en PESTEL-analyse utfyller hverandre i strategisk planlegging. Bruk et konkret eksempel for a illustrere sammenhengen.',
        hints: [
          'PESTEL ser pa makroomgivelsene, mens SWOT inkluderer bade interne og eksterne faktorer.',
          'Funn fra PESTEL kan brukes som input til muligheter og trusler i SWOT.',
          'Tenk pa et konkret eksempel der begge analysene gir ulik, men utfyllende innsikt.',
        ],
        solution: 'PESTEL analyserer ytre krefter som pavirker hele bransjen, og resultatene brukes som grunnlag for de eksterne delene av SWOT (muligheter og trusler). SWOT gir i tillegg innsikt i bedriftens egne styrker og svakheter. For eksempel: En PESTEL for en norsk nettbutikk kan avdekke at ny personvernlovgivning (juridisk) og okt netthandel (sosiokulturell) er viktige faktorer. Disse blir trusler og muligheter i SWOT. SWOT legger sa til interne faktorer som sterk IT-kompetanse (styrke) og begrenset lagerkapasitet (svakhet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert om de grunnleggende elementene i strategisk forretningsplanlegging:

- **Visjon** gir bedriften en langsiktig retning og noe a strekke seg mot
- **Misjon** forklarer hvorfor bedriften finnes og hva den gjor
- **Verdier** styrer atferd og beslutninger i organisasjonen
- **SWOT-analyse** kartlegger interne styrker og svakheter samt eksterne muligheter og trusler
- **PESTEL-analyse** gir et helhetlig bilde av makroomgivelsene gjennom politiske, okonomiske, sosiokulturelle, teknologiske, miljo-relaterte og juridiske faktorer

Sammen gir disse verktoyene et solid grunnlag for a utvikle en gjennomtenkt forretningsstrategi.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Visjon', definition: 'Et inspirerende fremtidsbilde av hva bedriften onsker a oppna pa lang sikt.' },
    { term: 'Misjon', definition: 'Bedriftens formal og eksistensgrunnlag - hvorfor bedriften finnes.' },
    { term: 'Verdier', definition: 'Grunnleggende prinsipper og holdninger som styrer atferd og beslutninger.' },
    { term: 'SWOT-analyse', definition: 'Verktoy som kartlegger styrker, svakheter, muligheter og trusler.' },
    { term: 'PESTEL-analyse', definition: 'Rammeverk for a analysere politiske, okonomiske, sosiokulturelle, teknologiske, miljo-relaterte og juridiske omgivelser.' },
  ],
};

// ============================================================================
// Kapittel 1.2: Forretningsmodellinnovasjon
// ============================================================================

export const CHAPTER_ENTREBED_2_1_2: TextbookChapter = {
  id: 'entrebed-2-1-2',
  courseId: 'entrebed-2',
  chapterNumber: '1.2',
  title: 'Forretningsmodellinnovasjon',
  description: 'Blue Ocean Strategy, Lean Canvas og disruptiv innovasjon som verktoy for a skape nye forretningsmuligheter.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere og utvikle innovative forretningsmodeller',
    'vurdere hvordan disrupsjon pavirker eksisterende markeder',
  ],
  content: [
    {
      id: 'eb2-1-2-intro',
      type: 'text',
      content: `## Forretningsmodellinnovasjon

I en verden i rask endring er det ikke nok a ha et godt produkt - bedrifter ma ogsa innovere maten de skaper og leverer verdi pa. Forretningsmodellinnovasjon handler om a tenke nytt rundt hvordan bedriften tjener penger, hvem den betjener, og hvordan den skiller seg fra konkurrentene.

Vi skal se pa tre sentrale tilnaerminger: Blue Ocean Strategy, Lean Canvas og disruptiv innovasjon.`,
    },
    {
      id: 'eb2-1-2-def-1',
      type: 'definition',
      title: 'Blue Ocean Strategy',
      content: `Blue Ocean Strategy (blatt hav-strategi) ble utviklet av W. Chan Kim og Renee Mauborgne. Strategien handler om a skape nye, ubestridte markedsrom ("blatt hav") i stedet for a konkurrere i eksisterende markeder med hard konkurranse ("rodt hav"). Man gjor dette ved a eliminere, redusere, oke og skape faktorer som endrer spillereglene i bransjen.`,
    },
    {
      id: 'eb2-1-2-ex-1',
      type: 'example',
      title: 'Blue Ocean i praksis: Cirque du Soleil',
      problem: 'Hvordan brukte Cirque du Soleil Blue Ocean Strategy til a revolusjonere sirkusbransjen?',
      solution: `Cirque du Soleil skapte et nytt markedsrom ved a kombinere elementer fra sirkus og teater:

**Eliminerte:** Dyrenumre, stjerneartister, flere manasjer
**Reduserte:** Humor og moro (mindre klovner), fare og spenning
**Okte:** Kunstnerisk kvalitet, unik stemning og atmosfaere
**Skapte:** Tematiske forestillinger, raffinert musikk og dans, eksklusiv opplevelse

Resultatet var en helt ny underholdningskategori som tiltrakk et voksent, betalingsvillig publikum som aldri ville gatt i et tradisjonelt sirkus.`,
    },
    {
      id: 'eb2-1-2-def-2',
      type: 'definition',
      title: 'Lean Canvas',
      content: `Lean Canvas er en forenklet versjon av Business Model Canvas, utviklet av Ash Maurya. Det er et ensides verktoy med ni felter som hjelper grundere med a beskrive og teste forretningsideen sin raskt. Feltene er: Problem, Losning, Unikt verdiforslag, Urettferdig fordel, Kundesegmenter, Kanaler, Inntektsstrommer, Kostnadsstruktur og Nokkeltall.`,
    },
    {
      id: 'eb2-1-2-ex-2',
      type: 'example',
      title: 'Lean Canvas for en elevbedrift',
      problem: 'Fyll ut et forenklet Lean Canvas for en elevbedrift som selger gjenbruksmote.',
      solution: `**Problem:** Unge kaster klonnstoffer som fortsatt er i god stand; darlig samvittighet for klima.
**Kundesegmenter:** Miljobevisste unge (16-25 ar) i naerlokalsamfunnet.
**Unikt verdiforslag:** Trendy og rimelig bruktmote med garanti for kvalitet.
**Losning:** Kuratert nettbutikk og pop-up-butikker med handplukket bruktmote.
**Kanaler:** Instagram, TikTok, skolens arrangementer, lokale markeder.
**Inntektsstrommer:** Salg av klonnstoffer, styling-tjenester.
**Kostnadsstruktur:** Innkjop av bruktklonnstoffer, frakt, emballasje, markedsforing.
**Nokkeltall:** Antall solgte plagg, gjennomsnittlig ordrevarighet, kundetilfredshet.
**Urettferdig fordel:** Lokalt nettverk og kunnskap om ungdomstrender.`,
    },
    {
      id: 'eb2-1-2-def-3',
      type: 'definition',
      title: 'Disruptiv innovasjon',
      content: `Disruptiv innovasjon er et begrep introdusert av Clayton Christensen. Det beskriver prosessen der et mindre selskap utfordrer etablerte aktorer ved a tilby enklere, billigere eller mer tilgjengelige losninger. Disrupsjonen starter gjerne i bunnen av markedet eller i et nytt markedssegment, og vokser gradvis til a true de etablerte.`,
    },
    {
      id: 'eb2-1-2-ex-3',
      type: 'example',
      title: 'Disrupsjon: Streaming vs. tradisjonell TV',
      problem: 'Forklar hvordan strommmetjenester som Netflix disrumperte tradisjonell TV og filmbransje.',
      solution: `Netflix startet som en DVD-utleietjeneste per post - enklere og billigere enn fysiske utleiebutikker (som Blockbuster). Deretter lanserte de stromming, som var enda mer tilgjengelig.

**Disruptive trekk:**
- Lavere pris enn kabel-TV-abonnement
- Tilgjengelig nar som helst, hvor som helst
- Ingen reklame (i starten)
- Personaliserte anbefalinger basert pa data

De etablerte aktorene undervurderte trusselen fordi kvaliteten i starten var lavere. Men etter hvert som teknologien ble bedre og innholdsbiblioteket vokste, foretrakk stadig flere stromming fremfor tradisjonell TV. I dag er det de tradisjonelle aktorene som ma tilpasse seg strommeverdenen.`,
    },
    {
      id: 'eb2-1-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedideen bak Blue Ocean Strategy?',
        options: [
          { id: 'a', text: 'A konkurrere hardere enn konkurrentene i eksisterende markeder', isCorrect: false },
          { id: 'b', text: 'A skape nye, ubestridte markedsrom der konkurransen er irrelevant', isCorrect: true },
          { id: 'c', text: 'A senke prisene for a ta markedsandeler', isCorrect: false },
          { id: 'd', text: 'A kopiere konkurrentenes forretningsmodell', isCorrect: false },
        ],
        solution: 'Blue Ocean Strategy handler om a skape helt nye markedsrom ("blatt hav") der bedriften ikke konkurrerer direkte med andre, i stedet for a kjempe om kunder i eksisterende markeder med hard konkurranse ("rodt hav").',
      },
    },
    {
      id: 'eb2-1-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-2-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner disruptiv innovasjon ifoolge Clayton Christensen?',
        options: [
          { id: 'a', text: 'Den starter alltid med et overlegent produkt som er dyrere enn eksisterende losninger', isCorrect: false },
          { id: 'b', text: 'Den krever alltid ny teknologi som ikke eksisterte for', isCorrect: false },
          { id: 'c', text: 'Den starter gjerne med enklere, billigere losninger som gradvis forbedres og utfordrer etablerte aktorer', isCorrect: true },
          { id: 'd', text: 'Den handler kun om digital teknologi og apper', isCorrect: false },
        ],
        solution: 'Disruptiv innovasjon kjennetegnes ved at nye aktorer tilbyr enklere eller billigere alternativer som i starten appellerer til et lite segment. Over tid forbedres produktet og vokser seg stort nok til a true de etablerte aktorene.',
      },
    },
    {
      id: 'eb2-1-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-2-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Velg en bransje du kjenner til og bruk Blue Ocean Strategy-rammeverket (eliminer, reduser, ok, skap) til a foreslaa en ny forretningsmodell.',
        hints: [
          'Tenk pa hva bransjen tar for gitt som kanskje kan elimineres.',
          'Hva gjor bransjen for mye av som kan reduseres?',
          'Hva kan okes utover bransjens standard?',
          'Hva nytt kan skapes som bransjen aldri har tilbudt?',
        ],
        solution: 'Et godt svar velger en konkret bransje og fyller ut alle fire kategorier med gjennomtenkte forslag. For eksempel i hotellbransjen: Eliminer - resepsjon og lobby, Reduser - romstoorrelse, Ok - lokal opplevelse og personlig service, Skap - digitale nokkler og app-basert concierge. Forslagene bor henge logisk sammen og skape et nytt verdiforslag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-2-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Lag et Lean Canvas for en forretningside du selv har, eller for en tenkt elevbedrift. Fyll ut alle ni feltene.',
        hints: [
          'Start med problemet - hvilket reelt problem loser du?',
          'Hvem er kundene dine? Vaer sa spesifikk som mulig.',
          'Hva gjor din losning unik sammenlignet med alternativene?',
          'Tenk gjennom hvordan du skal tjene penger og hva det koster.',
        ],
        solution: 'Et godt Lean Canvas har alle ni felter utfylt med konkrete og sammenhengende punkter. Problemet bor vaere reelt og verifiserbart. Kundesegmentet bor vaere tydelig definert. Verdiforslaget bor klart skille seg fra alternativer. Inntektsstrommene og kostnadsstrukturen bor vaere realistiske. Nokkeltallene bor vaere malbare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-2-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Gi et eksempel pa en bransje som har blitt eller kan bli disrumpert. Forklar hvem som disrumperer, hvordan de gjor det, og hvorfor de etablerte aktoorene sliter med a svare.',
        hints: [
          'Tenk pa bransjer der teknologi har endret spillereglene.',
          'Disruptorer starter ofte med et darligere produkt til lavere pris.',
          'Etablerte aktorer har ofte investert tungt i eksisterende infrastruktur.',
          'Se pa hva som gjor det vanskelig for de etablerte a tilpasse seg.',
        ],
        solution: 'Et godt svar identifiserer en konkret bransje og forklarer disrupsjonsmekanismen. For eksempel: Taxibransjen disrumperes av Uber/Bolt. De tilbyr lavere priser, bedre brukeropplevelse via app, og fleksibilitet. Etablerte taxiselskaper sliter fordi de har investert i dyre loyvesystemer, har hoyere kostnader med faste ansatte, og reguleringsrammeverket de opererer under gjor det vanskelig a tilpasse seg raskt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-2-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign Blue Ocean Strategy og disruptiv innovasjon. Hva er likheter og forskjeller mellom de to tilnaermingene? Bruk eksempler.',
        hints: [
          'Begge handler om a skape noe nytt, men pa forskjellige mater.',
          'Tenk pa hvor de starter i markedet - toppen eller bunnen?',
          'Vurder om fokuset er pa a unnga konkurranse eller a utfordre etablerte.',
          'Bruk konkrete eksempler for a illustrere forskjellene.',
        ],
        solution: 'Likheter: Begge fokuserer pa a skape ny verdi og bryte ut av tradisjonell konkurranse. Forskjeller: Blue Ocean skaper helt nye markeder ved a kombinere elementer pa nye mater (f.eks. Cirque du Soleil), mens disrupsjon starter med enklere losninger i bunnen av eksisterende markeder (f.eks. Netflix). Blue Ocean er en bevisst strategi for a unnga konkurranse, mens disrupsjon er en prosess der nye aktorer gradvis overtar. Blue Ocean sikter ofte mot premiumsegmentet, mens disrupsjon starter med lavprissegmentet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett pa tre viktige tilnaerminger til forretningsmodellinnovasjon:

- **Blue Ocean Strategy** handler om a skape nye markedsrom ved a eliminere, redusere, oke og skape faktorer som endrer bransjen
- **Lean Canvas** er et praktisk verktoy for raskt a beskrive og teste en forretningsmodell pa en enkelt side
- **Disruptiv innovasjon** forklarer hvordan nye aktorer kan utfordre etablerte selskaper med enklere, billigere losninger

Disse tilnaermingene hjelper bedrifter med a tenke kreativt og strategisk om hvordan de kan skape og levere verdi pa nye mater.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Blue Ocean Strategy', definition: 'Strategi for a skape nye, ubestridte markedsrom i stedet for a konkurrere i eksisterende markeder.' },
    { term: 'Lean Canvas', definition: 'Ensides verktoy med ni felter for raskt a beskrive og teste en forretningsmodell.' },
    { term: 'Disruptiv innovasjon', definition: 'Prosess der nye aktorer utfordrer etablerte ved a tilby enklere, billigere losninger som gradvis forbedres.' },
    { term: 'Rodt hav', definition: 'Eksisterende markeder med hard konkurranse der aktorer kjemper om de samme kundene.' },
    { term: 'Blatt hav', definition: 'Nye, ubestridte markedsrom der konkurransen er irrelevant.' },
  ],
};

// ============================================================================
// Kapittel 1.3: Konkurranseanalyse
// ============================================================================

export const CHAPTER_ENTREBED_2_1_3: TextbookChapter = {
  id: 'entrebed-2-1-3',
  courseId: 'entrebed-2',
  chapterNumber: '1.3',
  title: 'Konkurranseanalyse',
  description: 'Porters fem krefter og verdikjedeanalyse som verktoy for a forsta konkurransesituasjonen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere konkurranseforhold i en bransje ved hjelp av Porters fem krefter',
    'gjennomfore en verdikjedeanalyse for a identifisere konkurransefortrinn',
  ],
  content: [
    {
      id: 'eb2-1-3-intro',
      type: 'text',
      content: `## Konkurranseanalyse

For a utvikle en vellykket strategi ma bedriften forsta sitt konkurransemiljo. Hvem er konkurrentene? Hvor stor makt har leverandorer og kunder? Hvilke trusler finnes fra nye aktorer og substitutter?

I dette kapittelet laerer vi a bruke to sentrale rammeverk: Porters fem krefter for a analysere bransjen, og verdikjedeanalyse for a forsta hvordan bedriften skaper verdi internt.`,
    },
    {
      id: 'eb2-1-3-def-1',
      type: 'definition',
      title: 'Porters fem krefter',
      content: `Porters fem krefter er et rammeverk utviklet av Michael Porter for a analysere konkurranseintensiteten i en bransje. De fem kreftene er: (1) Trussel fra nye aktorer, (2) Trussel fra substitutter, (3) Kundenes forhandlingsmakt, (4) Leverandorenes forhandlingsmakt, og (5) Rivalisering mellom eksisterende konkurrenter. Jo sterkere kreftene er, jo vanskeligere er det a oppna hoy lonnsomhet i bransjen.`,
    },
    {
      id: 'eb2-1-3-ex-1',
      type: 'example',
      title: 'Porters fem krefter: Dagligvarebransjen i Norge',
      problem: 'Analyser den norske dagligvarebransjen ved hjelp av Porters fem krefter.',
      solution: `**1. Trussel fra nye aktorer (LAV):**
Hoye etableringshindre pa grunn av behov for stort distribusjonsnettverk, innkjopsavtaler og merkevarebygging. De tre store (NorgesGruppen, Coop, Rema) dominerer.

**2. Trussel fra substitutter (MIDDELS):**
Matlevering pa door (Oda), abonnementsbokser og restauranter er alternativer, men mat er et grunnleggende behov som alltid vil kreve dagligvarehandel.

**3. Kundenes forhandlingsmakt (MIDDELS):**
Kunder kan lett bytte mellom kjeder, men har begrenset makt over priser. Lav byttekostnad oker kundenes makt noe.

**4. Leverandorenes forhandlingsmakt (LAV):**
Dagligvarekjedene har stor innkjopsmakt og kan presse leverandorene pa pris. Egne merkevarer oker dette ytterligere.

**5. Rivalisering mellom eksisterende konkurrenter (HOY):**
Intens priskonkurranse, hyppige kampanjer og kamp om de beste lokasjonene. Markedet er modent med lav vekst.

**Konklusjon:** Bransjen har moderat lonnsomhet. Hoye etableringshindre beskytter de eksisterende aktoorene, men den intense rivaliseringen presser marginene.`,
    },
    {
      id: 'eb2-1-3-def-2',
      type: 'definition',
      title: 'Verdikjedeanalyse',
      content: `Verdikjedeanalyse er et rammeverk utviklet av Michael Porter for a identifisere hvordan en bedrift skaper verdi gjennom sine aktiviteter. Verdikjeden deles inn i primaer-aktiviteter (inngaende logistikk, produksjon, utgaende logistikk, markedsforing og salg, service) og stotte-aktiviteter (infrastruktur, HR, teknologiutvikling, innkjop). Malet er a finne aktiviteter der bedriften kan skape konkurransefortrinn.`,
    },
    {
      id: 'eb2-1-3-ex-2',
      type: 'example',
      title: 'Verdikjedeanalyse for et bakeri',
      problem: 'Gjennomfor en forenklet verdikjedeanalyse for et lokalt bakeri.',
      solution: `**Primaer-aktiviteter:**
- **Inngaende logistikk:** Innkjop av mel, smorr, egg og andre ravarer fra lokale og nasjonale leverandorer.
- **Produksjon:** Baking av brod, boller, kaker og andre produkter. Handverkspreget prosess.
- **Utgaende logistikk:** Daglig levering til egne utsalg og lokale kafeer.
- **Markedsforing og salg:** Instagram, lokal annonsering, smaksprover. Fokus pa ferskt og lokalt.
- **Service:** Spesialbestillinger til bryllup og selskaper, kundeservice.

**Stotte-aktiviteter:**
- **Infrastruktur:** Regnskap, ledelse, kvalitetskontroll.
- **HR:** Opplaering av bakere, rekruttering.
- **Teknologiutvikling:** Nettbestilling, kassesystem.
- **Innkjop:** Forhandling med leverandorer, sesongbaserte ravarer.

**Konkurransefortrinn:** Bakeriet kan skille seg ut gjennom overlegen produksjonskvalitet (handverk), unik service (spesialbestillinger) og sterk lokal markedsforing.`,
    },
    {
      id: 'eb2-1-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken av Porters fem krefter handler om hvor lett det er for nye selskaper a entre bransjen?',
        options: [
          { id: 'a', text: 'Kundenes forhandlingsmakt', isCorrect: false },
          { id: 'b', text: 'Rivalisering mellom eksisterende konkurrenter', isCorrect: false },
          { id: 'c', text: 'Trussel fra nye aktorer', isCorrect: true },
          { id: 'd', text: 'Trussel fra substitutter', isCorrect: false },
        ],
        solution: 'Trussel fra nye aktorer handler om hvor lett eller vanskelig det er for nye selskaper a etablere seg i bransjen. Hoye etableringshindre (som stort kapitalbehov eller sterke merkevarer) gjor det vanskeligere for nye aktorer.',
      },
    },
    {
      id: 'eb2-1-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-3-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er formalet med en verdikjedeanalyse?',
        options: [
          { id: 'a', text: 'A beregne bedriftens totale omsetning', isCorrect: false },
          { id: 'b', text: 'A identifisere hvilke aktiviteter som skaper verdi og konkurransefortrinn', isCorrect: true },
          { id: 'c', text: 'A telle antall ansatte i hver avdeling', isCorrect: false },
          { id: 'd', text: 'A sammenligne priser med konkurrentene', isCorrect: false },
        ],
        solution: 'Verdikjedeanalysen brukes til a identifisere hvilke aktiviteter i bedriften som bidrar mest til verdiskaping, og hvor bedriften kan skape eller styrke sine konkurransefortrinn.',
      },
    },
    {
      id: 'eb2-1-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-3-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Velg en bransje (for eksempel treningssenter, frisorer eller restaurant) og gjennomfor en analyse med Porters fem krefter. Vurder styrken pa hver kraft som hoy, middels eller lav.',
        hints: [
          'Tenk pa hvor vanskelig det er a starte en ny bedrift i denne bransjen.',
          'Finnes det gode alternativer (substitutter) for kundene?',
          'Hvor lett kan kunder bytte mellom leverandorer?',
          'Hvor mange direkte konkurrenter finnes det?',
        ],
        solution: 'Et godt svar analyserer alle fem kreftene systematisk for den valgte bransjen. Hver kraft vurderes med en begrunnelse. For treningssenterbransjen kan svaret vaere: Nye aktorer (middels - krever investering men ikke enorm kapital), Substitutter (hoy - hjemmetrening, utendors aktiviteter, YouTube), Kundenes makt (hoy - mange valg, lave byttekostnader), Leverandorenes makt (lav - mange utstyrsleverandorer), Rivalisering (hoy - mange sentre, priskonkurranse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-3-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfor en verdikjedeanalyse for en bedrift du kjenner til. Identifiser alle primaer-aktiviteter og minst to stotte-aktiviteter. Pek pa hvor bedriften har eller kan utvikle konkurransefortrinn.',
        hints: [
          'Primaer-aktiviteter: inngaende logistikk, produksjon, utgaende logistikk, markedsforing/salg, service.',
          'Stotte-aktiviteter: infrastruktur, HR, teknologiutvikling, innkjop.',
          'Tenk pa hva som skiller bedriften fra konkurrentene i hver aktivitet.',
          'Hvor kan bedriften forbedre seg for a skape mer verdi?',
        ],
        solution: 'Et godt svar identifiserer alle fem primaer-aktiviteter og minst to stotte-aktiviteter med konkrete beskrivelser for den valgte bedriften. Svaret peker pa spesifikke aktiviteter der bedriften skiller seg ut eller har potensial for forbedring. For eksempel kan IKEA ha konkurransefortrinn i produksjon (flatpakke-design) og utgaende logistikk (selvbetjent lager), men forbedringspotensial i service (kundesupport).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-3-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvordan en bedrift kan bruke Porters fem krefter til a velge hvilken bransje den bor entre. Gi et konkret eksempel.',
        hints: [
          'Tenk pa at noen bransjer er mer lonnsomme enn andre pa grunn av konkurransestrukturen.',
          'En investor ville foretrekke bransjer med svake krefter (lavere konkurransepress).',
          'Sammenlign to bransjer og vis hvordan analysen kan pavirke beslutningen.',
        ],
        solution: 'Porters fem krefter kan brukes til a vurdere en bransjes attraktivitet for det er investeres. Bransjer med svake krefter (hoye etableringsbarrierer, fa substitutter, lav kunde- og leverandormakt, moderat rivalisering) er mer lonnsomme. Eksempel: En investor som vurderer a entre enten dagligvarebransjen (hoye barrierer men intens rivalisering) eller nisjekosmetikk (lavere barrierer men ogsa lavere rivalisering og hoyere marginer) kan bruke analysen til a velge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-3-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Forklar sammenhengen mellom verdikjedeanalyse og konkurransefortrinn. Hvordan kan en bedrift bruke verdikjedeanalysen til a bygge et varig konkurransefortrinn?',
        hints: [
          'Konkurransefortrinn oppstar nar bedriften gjor noe bedre eller billigere enn konkurrentene.',
          'Verdikjedeanalysen viser hvilke aktiviteter som bidrar mest til verdiskaping.',
          'Tenk pa kostnadslederskap og differensiering som to typer fortrinn.',
          'Varige fortrinn er vanskelige for konkurrenter a kopiere.',
        ],
        solution: 'Verdikjedeanalysen hjelper bedriften med a identifisere hvilke aktiviteter den gjor bedre enn konkurrentene (differensiering) eller billigere (kostnadslederskap). Ved a investere i de aktivitetene som gir storst verdi, kan bedriften bygge konkurransefortrinn. Varige fortrinn oppstar nar aktivitetene henger sammen pa mater som er vanskelige a kopiere. For eksempel har Zara bygget et varig fortrinn gjennom tight integrering av design, produksjon og distribusjon som gir ekstremt rask "fast fashion"-respons.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert om to sentrale verktoy for konkurranseanalyse:

- **Porters fem krefter** analyserer konkurranseintensiteten i en bransje gjennom trussel fra nye aktorer, trussel fra substitutter, kundenes forhandlingsmakt, leverandorenes forhandlingsmakt og rivalisering mellom eksisterende konkurrenter
- **Verdikjedeanalyse** identifiserer hvordan bedriften skaper verdi gjennom primaer-aktiviteter (logistikk, produksjon, markedsforing, service) og stotte-aktiviteter (infrastruktur, HR, teknologi, innkjop)

Sammen gir disse rammeverkene innsikt i bade det eksterne konkurransemiljoet og bedriftens interne verdiskapning, noe som er essensielt for a utvikle en vellykket strategi.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Porters fem krefter', definition: 'Rammeverk for a analysere konkurranseintensiteten i en bransje gjennom fem strukturelle krefter.' },
    { term: 'Etableringshindre', definition: 'Faktorer som gjor det vanskelig for nye aktorer a entre en bransje, som kapitalkrav og merkevarer.' },
    { term: 'Substitutter', definition: 'Alternative produkter eller tjenester som kan dekke det samme behovet.' },
    { term: 'Verdikjedeanalyse', definition: 'Rammeverk for a identifisere aktiviteter som skaper verdi og konkurransefortrinn i en bedrift.' },
    { term: 'Konkurransefortrinn', definition: 'Egenskaper som gjor at en bedrift presterer bedre enn konkurrentene over tid.' },
  ],
};

// ============================================================================
// Kapittel 1.4: Malstyring og KPIer
// ============================================================================

export const CHAPTER_ENTREBED_2_1_4: TextbookChapter = {
  id: 'entrebed-2-1-4',
  courseId: 'entrebed-2',
  chapterNumber: '1.4',
  title: 'Malstyring og KPIer',
  description: 'SMART-mal, OKR og balansert malstyring som verktoy for a sette og folge opp strategiske mal.',
  estimatedMinutes: 18,
  competenceGoals: [
    'utvikle og anvende ulike malstyringssystemer',
    'velge relevante KPIer for a male bedriftens prestasjoner',
  ],
  content: [
    {
      id: 'eb2-1-4-intro',
      type: 'text',
      content: `## Malstyring og KPIer

En god strategi er ingenting verdt uten evnen til a sette tydelige mal og male fremgang. Malstyring handler om a oversette visjon og strategi til konkrete, malbare mal som hele organisasjonen kan jobbe mot.

I dette kapittelet laerer vi tre tilnaerminger: SMART-mal for a sette gode enkeltmal, OKR for a koble ambisiose mal med konkrete resultater, og balansert malstyring for a se helheten i bedriftens prestasjoner.`,
    },
    {
      id: 'eb2-1-4-def-1',
      type: 'definition',
      title: 'KPI (Key Performance Indicator)',
      content: `En KPI er en nokkeltallsindikator som brukes til a male bedriftens prestasjoner innenfor et bestemt omrade. Gode KPIer er direkte knyttet til bedriftens strategiske mal og gir ledelsen et objektivt grunnlag for a vurdere om bedriften er pa riktig kurs. Eksempler pa KPIer er omsetningsvekst, kundetilfredshet, gjenkjopsrate og ansattes engasjement.`,
    },
    {
      id: 'eb2-1-4-def-2',
      type: 'definition',
      title: 'SMART-mal',
      content: `SMART er et rammeverk for a formulere gode mal. Bokstavene star for: Spesifikt (klart og tydelig), Malbart (kan males med tall), Ambisiost/Oppnaelig (krevende men realistisk), Relevant (knyttet til strategien) og Tidsbestemt (har en frist). SMART-rammeverket hjelper med a unnga vage og uforpliktende malsettinger.`,
    },
    {
      id: 'eb2-1-4-ex-1',
      type: 'example',
      title: 'Fra vagt mal til SMART-mal',
      problem: 'Gjor om det vage malet "Vi skal fa flere kunder" til et SMART-mal.',
      solution: `**Vagt mal:** "Vi skal fa flere kunder."

**SMART-mal:** "Vi skal oke antall betalende kunder fra 500 til 650 (30 % okning) innen 31. desember 2026, gjennom malrettet digital markedsforing og et nytt henvisningsprogram."

- **Spesifikt:** Okning fra 500 til 650 betalende kunder
- **Malbart:** 650 kunder kan telles og verifiseres
- **Ambisiost:** 30 % okning er krevende men oppnaelig
- **Relevant:** Flere kunder stotter vekststrategien
- **Tidsbestemt:** Frist 31. desember 2026`,
    },
    {
      id: 'eb2-1-4-def-3',
      type: 'definition',
      title: 'OKR (Objectives and Key Results)',
      content: `OKR er et malstyringssystem popularisert av Google. Det bestar av et Objective (et ambisiost, kvalitativt mal som beskriver hva man onsker a oppna) og 2-5 Key Results (konkrete, malbare resultater som viser om man er pa vei mot malet). OKR-er settes gjerne kvartalsvis og bor vaere sa ambisiose at 70 % oppnaelse regnes som suksess.`,
    },
    {
      id: 'eb2-1-4-ex-2',
      type: 'example',
      title: 'OKR for en oppstartsbedrift',
      problem: 'Formuler en OKR for en oppstartsbedrift som vil forbedre kundetilfredsheten.',
      solution: `**Objective:** Bli kjent for enestaaende kundeservice i var bransje.

**Key Results:**
1. Oke Net Promoter Score (NPS) fra 35 til 55
2. Redusere gjennomsnittlig responstid pa kundehenvendelser fra 24 timer til 4 timer
3. Oppna en kundetilfredshetsscore pa minst 4,5 av 5 i manedsundersookelsen
4. Redusere kundeklager med 40 % sammenlignet med forrige kvartal

Merk: Objective-et er inspirerende og kvalitativt, mens Key Results er konkrete og malbare.`,
    },
    {
      id: 'eb2-1-4-def-4',
      type: 'definition',
      title: 'Balansert malstyring (Balanced Scorecard)',
      content: `Balansert malstyring er et rammeverk utviklet av Kaplan og Norton som maler bedriftens prestasjoner fra fire perspektiver: (1) Finansielt perspektiv (lonnsomhet, vekst), (2) Kundeperspektiv (tilfredshet, lojalitet), (3) Interne prosesser (effektivitet, kvalitet), og (4) Laering og vekst (kompetanse, innovasjon). Rammeverket sikrer at bedriften ikke kun fokuserer pa okonomiske resultater, men ogsa pa de underliggende faktorene som driver langsiktig suksess.`,
    },
    {
      id: 'eb2-1-4-ex-3',
      type: 'example',
      title: 'Balansert malstyring for en nettbutikk',
      problem: 'Sett opp en forenklet balansert malstyring med ett mal og en KPI for hvert perspektiv for en nettbutikk.',
      solution: `**Finansielt perspektiv:**
- Mal: Oke lonnsomheten
- KPI: Fortjenestemargin (mal: 15 %)

**Kundeperspektiv:**
- Mal: Oke kundetilfredsheten
- KPI: Kundetilfredshetsscore (mal: 4,5/5)

**Interne prosesser:**
- Mal: Effektivisere ordrebehandling
- KPI: Gjennomsnittlig leveringstid (mal: under 2 dager)

**Laering og vekst:**
- Mal: Styrke digital kompetanse
- KPI: Antall gjennomforte kurs per ansatt (mal: 3 per ar)

Sammenhengen: Bedre kompetanse (laering) gir mer effektive prosesser (intern), som gir fornooyde kunder (kunde), som gir bedre okonomiske resultater (finansielt).`,
    },
    {
      id: 'eb2-1-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva star bokstaven "M" for i SMART-mal?',
        options: [
          { id: 'a', text: 'Motiverende', isCorrect: false },
          { id: 'b', text: 'Malbart', isCorrect: true },
          { id: 'c', text: 'Mulig', isCorrect: false },
          { id: 'd', text: 'Mangfoldig', isCorrect: false },
        ],
        solution: 'M i SMART star for Malbart, som betyr at malet ma kunne males med tall eller andre objektive kriterier. Dette gjor det mulig a vurdere om malet er oppnadd eller ikke.',
      },
    },
    {
      id: 'eb2-1-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-4-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilke fire perspektiver inngaar i balansert malstyring?',
        options: [
          { id: 'a', text: 'Marked, Produksjon, Salg, Personal', isCorrect: false },
          { id: 'b', text: 'Finansielt, Kunde, Interne prosesser, Laering og vekst', isCorrect: true },
          { id: 'c', text: 'Styrker, Svakheter, Muligheter, Trusler', isCorrect: false },
          { id: 'd', text: 'Pris, Produkt, Plass, Pavirkning', isCorrect: false },
        ],
        solution: 'Balansert malstyring (Balanced Scorecard) har fire perspektiver: Finansielt, Kundeperspektiv, Interne prosesser, og Laering og vekst. Disse fire perspektivene gir et helhetlig bilde av bedriftens prestasjoner.',
      },
    },
    {
      id: 'eb2-1-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-4-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Formuler tre SMART-mal for en elevbedrift som selger handlagde smykker. Malene bor dekke omsetning, kundebase og sosiale medier.',
        hints: [
          'Husk at hvert mal ma vaere spesifikt, malbart, ambisiost, relevant og tidsbestemt.',
          'Bruk konkrete tall og datoer.',
          'Sorg for at malene er realistiske for en elevbedrift.',
        ],
        solution: 'Gode SMART-mal kan vaere: (1) Omsetning: "Oppna en totalomsetning pa 25 000 kr innen skoleaarets slutt i juni 2026." (2) Kundebase: "Skaffe 100 unike kunder gjennom nettbutikken innen 1. mai 2026." (3) Sosiale medier: "Na 500 folgere pa Instagram og oppna en gjennomsnittlig engasjementsrate pa 5 % innen 1. april 2026." Alle malene er spesifikke, malbare, ambisiose, relevante for virksomheten og tidsbestemte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-4-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Lag en OKR for en bedrift eller organisasjon du kjenner til. Formuler ett Objective og minst tre Key Results. Forklar hvorfor du mener disse er gode.',
        hints: [
          'Objective-et bor vaere inspirerende og kvalitativt - det beskriver retningen.',
          'Key Results bor vaere kvantitative og malbare - de viser fremgangen.',
          'Ha 3-5 Key Results som til sammen viser at Objective-et er oppnadd.',
          'Key Results bor vaere ambisiose - 70 % oppnaelse er bra nok.',
        ],
        solution: 'Et godt svar har et klart, inspirerende Objective og 3-5 malbare Key Results. For eksempel for en idrettsklubb: Objective: "Bli byens mest attraktive fotballklubb for unge." KR1: Oke antall spillere under 18 ar fra 80 til 120. KR2: Vinne minst 60 % av kampene i serien. KR3: Oppna en fornooydhetsscore pa 4/5 i foreldreundersookelsen. Begrunnelsen bor forklare at Key Results til sammen gir et bilde av om Objective-et er nadd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-4-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Sett opp en balansert malstyring for en selvvalgt bedrift. Definer minst ett mal og en KPI for hvert av de fire perspektivene.',
        hints: [
          'Start med det finansielle perspektivet - hva er de okonomiske malene?',
          'Kundeperspektivet handler om hvordan kundene opplever bedriften.',
          'Interne prosesser handler om effektiviteten i bedriftens operasjoner.',
          'Laering og vekst handler om kompetanseutvikling og innovasjon.',
        ],
        solution: 'Et godt svar dekker alle fire perspektiver med relevante mal og KPIer for den valgte bedriften. Malene bor henge logisk sammen (arsak-virkning mellom perspektivene). For eksempel for et IT-konsulentfirma: Finansielt - mal: oke omsetning, KPI: omsetning per konsulent. Kunde - mal: hoy kundelojalitet, KPI: gjenkjopsrate. Prosesser - mal: effektiv prosjektgjennomforing, KPI: prosjekter levert pa tid og budsjett. Laering - mal: spesialistkompetanse, KPI: sertifiseringer per ansatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-4-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign SMART-mal, OKR og balansert malstyring. Nar egner hvert system seg best? Hvilke fordeler og ulemper har de?',
        hints: [
          'SMART er for enkeltmal, OKR kobler visjon med resultater, BSC gir helhetsbilde.',
          'Tenk pa storelsen pa organisasjonen og kompleksiteten i malene.',
          'Vurder hvor lett hvert system er a implementere og vedlikeholde.',
          'Kan de brukes sammen, eller er de alternativer?',
        ],
        solution: 'SMART egner seg best for a formulere presise enkeltmal og er enkelt a bruke i alle organisasjoner. OKR passer godt for innovative bedrifter som onsker ambisiose mal og rask tilpasning (kvartalsvis). Balansert malstyring egner seg for storre organisasjoner som trenger a balansere ulike perspektiver. Fordeler: SMART er enkelt, OKR fremmer ambisjon, BSC gir helhet. Ulemper: SMART mangler helhet, OKR kan vaere krevende a implementere, BSC er komplekst. De kan brukes sammen - f.eks. SMART for a formulere individuelle mal innenfor rammene av en BSC.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert om tre tilnaerminger til malstyring:

- **SMART-mal** gir et rammeverk for a formulere tydelige, malbare enkeltmal (Spesifikt, Malbart, Ambisiost, Relevant, Tidsbestemt)
- **OKR** kobler ambisiose malsettinger (Objectives) med konkrete, malbare resultater (Key Results)
- **Balansert malstyring** sikrer at bedriften maler prestasjoner fra fire perspektiver: finansielt, kunde, prosesser og laering
- **KPIer** er nokkeltall som brukes til a male fremgang mot strategiske mal

Effektiv malstyring er avgjorende for a oversette strategi til handling og sikre at hele organisasjonen jobber mot de samme malene.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'KPI', definition: 'Key Performance Indicator - nokkeltall for a male bedriftens prestasjoner.' },
    { term: 'SMART-mal', definition: 'Rammeverk for malsetting: Spesifikt, Malbart, Ambisiost, Relevant, Tidsbestemt.' },
    { term: 'OKR', definition: 'Objectives and Key Results - malstyringssystem med ambisiose mal og malbare resultater.' },
    { term: 'Balansert malstyring', definition: 'Rammeverk som maler prestasjoner fra fire perspektiver: finansielt, kunde, prosesser, laering og vekst.' },
    { term: 'Objective', definition: 'Et kvalitativt, inspirerende mal som beskriver hva man onsker a oppna i en OKR.' },
  ],
};

// ============================================================================
// Kapittel 1.5: Endringsledelse
// ============================================================================

export const CHAPTER_ENTREBED_2_1_5: TextbookChapter = {
  id: 'entrebed-2-1-5',
  courseId: 'entrebed-2',
  chapterNumber: '1.5',
  title: 'Endringsledelse',
  description: 'Kotters 8-trinnsmodell, motstand mot endring og strategier for vellykket endringsledelse.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forsta og anvende prinsipper for endringsledelse',
    'analysere arsaker til motstand mot endring og utvikle strategier for a handtere den',
  ],
  content: [
    {
      id: 'eb2-1-5-intro',
      type: 'text',
      content: `## Endringsledelse

I en verden som stadig endrer seg, ma bedrifter kontinuerlig tilpasse seg nye forutsetninger. Men endring er vanskelig - bade for organisasjoner og for enkeltpersoner. Endringsledelse handler om a lede organisasjonen gjennom endringsprocesser pa en systematisk og menneskelig mate.

I dette kapittelet laerer vi om Kotters 8-trinnsmodell for endring, forstaar hvorfor mennesker gjor motstand mot endring, og ser pa strategier for a handtere denne motstanden.`,
    },
    {
      id: 'eb2-1-5-def-1',
      type: 'definition',
      title: 'Endringsledelse',
      content: `Endringsledelse er en systematisk tilnaerming til a lede organisasjoner gjennom overgangen fra en navaerende tilstand til en onsket fremtidig tilstand. Det omfatter planlegging, gjennomforing og forankring av endringer, med saerlig fokus pa mennesker og kultur. God endringsledelse reduserer motstand og oker sannsynligheten for at endringen lykkes.`,
    },
    {
      id: 'eb2-1-5-def-2',
      type: 'definition',
      title: 'Kotters 8-trinnsmodell',
      content: `John P. Kotter utviklet en modell med atte trinn for vellykket endring: (1) Skap en folelse av nodvendighet, (2) Bygg en styrende koalisjon, (3) Utvikle en visjon og strategi, (4) Kommuniser endringsvisjonen, (5) Fjern hindringer og gi ansatte mulighet til a handle, (6) Skap kortsiktige gevinster, (7) Bygg videre pa endringene, (8) Forankre endringene i kulturen. Modellen understreker at endring ma folge en bestemt rekkefolge for a lykkes.`,
    },
    {
      id: 'eb2-1-5-ex-1',
      type: 'example',
      title: 'Kotters modell i praksis: Digital omstilling',
      problem: 'En mellomstor bedrift skal ga fra papirbaserte prosesser til et heldigitalt system. Vis hvordan Kotters 8 trinn kan brukes.',
      solution: `**Trinn 1 - Skap nodvendighet:** Vis tall pa hvor mye tid og penger som gar tapt pa papirbaserte prosesser. Del historier om konkurrenter som allerede er digitale.

**Trinn 2 - Styrende koalisjon:** Sett sammen et team med IT-sjefen, en respektert avdelingsleder, en tillitsvalgt og en digital mentor.

**Trinn 3 - Visjon og strategi:** "Vi skal bli en heldigital arbeidsplass innen 12 maneder for a jobbe smartere og raskere."

**Trinn 4 - Kommuniser visjonen:** Felles informasjonsmoter, intranettsider, ukentlige oppdateringer og en FAQ.

**Trinn 5 - Fjern hindringer:** Tilby opplaering, still sporsmal anonymt, tilpass systemer til brukernes behov.

**Trinn 6 - Kortsiktige gevinster:** Start med en avdeling, vis tidsbesparelser etter forste maned, feir suksessen.

**Trinn 7 - Bygg videre:** Rull ut til flere avdelinger, legg til nye digitale verktoy, del suksesshistorier.

**Trinn 8 - Forankre i kulturen:** Gjor digitale ferdigheter til en del av ansettelsesprosessen, beloon digital innovasjon, fjern papirbaserte alternativer helt.`,
    },
    {
      id: 'eb2-1-5-def-3',
      type: 'definition',
      title: 'Motstand mot endring',
      content: `Motstand mot endring er en naturlig reaksjon der ansatte eller grupper motsetter seg forandringer i organisasjonen. Motstanden kan vaere apen (protester, klager) eller skjult (passivitet, sabotasje). Vanlige arsaker er frykt for det ukjente, tap av kontroll, manglende tillit til ledelsen, darlig kommunikasjon, og bekymring for a miste jobb eller status.`,
    },
    {
      id: 'eb2-1-5-ex-2',
      type: 'example',
      title: 'Haandtering av motstand i praksis',
      problem: 'En bedrift innforer nytt IT-system, og flere ansatte er sterkt imot endringen. Hvordan kan ledelsen handtere motstanden?',
      solution: `**Identifiser arsakene:** Gjennom samtaler og sporreundersookelser kommer det frem at ansatte frykter at det nye systemet er for komplisert, at de mister kompetansefortrinn, og at ingen har spurt dem om mening.

**Strategier for a handtere motstanden:**

1. **Kommunikasjon:** Forklar tydelig hvorfor endringen er nodvendig og hva den betyr for den enkelte. Vaer aerlig om utfordringer.

2. **Involvering:** La ansatte delta i valg av system og utforming av prosesser. De som er mest kritiske kan bli med i prosjektgruppen.

3. **Opplaering:** Tilby grundig opplaering tilpasset ulike nivaer. Gi tid til a laere uten prestasjonspress.

4. **Stotte:** Utnevn "superbrukere" i hver avdeling som kan hjelpe kolleger. Ha en servicedesk for raske svar.

5. **Anerkjennelse:** Ros og belonn de som tar i bruk det nye systemet. Del suksesshistorier internt.`,
    },
    {
      id: 'eb2-1-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er det forste trinnet i Kotters 8-trinnsmodell for endring?',
        options: [
          { id: 'a', text: 'Bygge en styrende koalisjon', isCorrect: false },
          { id: 'b', text: 'Kommunisere endringsvisjonen', isCorrect: false },
          { id: 'c', text: 'Skape en folelse av nodvendighet', isCorrect: true },
          { id: 'd', text: 'Utvikle en visjon og strategi', isCorrect: false },
        ],
        solution: 'Det forste trinnet i Kotters modell er a skape en folelse av nodvendighet - a overbevis organisasjonen om at endring er nodvendig og presserende. Uten denne forstaelsen vil endringsinnsatsen mangle drivkraft.',
      },
    },
    {
      id: 'eb2-1-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-5-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken av folgende er IKKE en vanlig arsak til motstand mot endring?',
        options: [
          { id: 'a', text: 'Frykt for det ukjente', isCorrect: false },
          { id: 'b', text: 'For mye informasjon om endringen', isCorrect: true },
          { id: 'c', text: 'Manglende tillit til ledelsen', isCorrect: false },
          { id: 'd', text: 'Bekymring for a miste status eller jobb', isCorrect: false },
        ],
        solution: 'For mye informasjon er sjelden en arsak til motstand. Tvert imot er manglende eller darlig kommunikasjon en av de vanligste arsakene. God informasjon reduserer usikkerhet og motstand.',
      },
    },
    {
      id: 'eb2-1-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-5-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Tenk deg at skolen din skal innfore en stor endring (for eksempel ny timeplan, nye vurderingsformer eller obligatorisk bruk av nettbrett). Bruk Kotters 8-trinnsmodell til a lage en plan for hvordan endringen kan gjennomfores.',
        hints: [
          'Ga gjennom alle atte trinnene i rekkefolge.',
          'Tenk pa hvem som bor vaere med i den styrende koalisjonen pa en skole.',
          'Hvilke kortsiktige gevinster kan motivere elever og laerere?',
          'Hvordan forankrer man en endring i skolekulturen?',
        ],
        solution: 'Et godt svar gar systematisk gjennom alle atte trinn med konkrete tiltak tilpasset skolekonteksten. For eksempel ved innfooring av ny vurderingsform: (1) Vis forskning pa at dagens system har svakheter, (2) Saml laerere, elever, foreldre i en arbeidsgruppe, (3) Definer visjonen for bedre laering, (4) Informasjonsmoter og nyhetsbrev, (5) Fjern byrakratiske hindringer, tilby opplaering, (6) Prooov i en klasse forst og del positive resultater, (7) Utvid til flere klasser og faggrupper, (8) Gjor det til en del av skolens pedagogiske plattform.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-5-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Analyser en endring du selv har opplevd (pa skolen, i en jobb, i en organisasjon). Beskriv hvilken motstand som oppsto, hva arsakene var, og hvordan den ble (eller burde ha blitt) handtert.',
        hints: [
          'Beskriv endringen konkret - hva ble endret?',
          'Hvem viste motstand? Var den apen eller skjult?',
          'Tenk pa de underliggende arsakene til motstanden.',
          'Vurder om ledelsen handterte motstanden godt eller darlig.',
        ],
        solution: 'Et godt svar beskriver en konkret endringssituasjon med tydelige eksempler pa motstand. Arsakene analyseres med referanse til teori (frykt, tap av kontroll, manglende kommunikasjon). Handteringen vurderes kritisk - hva ble gjort bra og hva kunne vaert gjort bedre? For eksempel: overgang til digital undervisning under pandemien, der motstanden handlet om manglende digital kompetanse og frykt for a miste kontroll over undervisningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-5-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor Kotter mener det er viktig a skape kortsiktige gevinster (trinn 6) i en endringsprosess. Hva kan skje hvis dette trinnet hoppes over?',
        hints: [
          'Tenk pa motivasjon og momentum i en lang endringsprosess.',
          'Mennesker trenger a se at endringen gir resultater.',
          'Hva skjer med tillit og engasjement nar folk ikke ser fremgang?',
          'Gi et konkret eksempel for a illustrere poenget ditt.',
        ],
        solution: 'Kortsiktige gevinster er viktige fordi de gir bevis pa at endringen fungerer, opprettholder motivasjon og momentum, bygger tillit til endringsprosessen, og tar luven fra kritikere. Uten kortsiktige gevinster risikerer man at folk mister troen pa endringen, at motstanden oker, og at endringsprosessen stopper opp. Eksempel: Et selskap som innforer lean-produksjon bor starte med en avdeling og vise konkrete tidsbesparelser for hele organisasjonen ser nytten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-1-5-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Du er leder i en bedrift som skal gjennomfore en stor omorganisering. Lag en kommunikasjonsplan som tar hensyn til motstand mot endring. Inkluder hva som skal kommuniseres, til hvem, nar og hvordan.',
        hints: [
          'Ulike grupper trenger ulik informasjon og tilnaerming.',
          'Timing er viktig - nar bor ulike budskap komme?',
          'Tenk pa toveis kommunikasjon, ikke bare enveis informasjon.',
          'Ha en plan for a handtere ryktespredning og usikkerhet.',
        ],
        solution: 'En god kommunikasjonsplan inkluderer: (1) Kartlegging av malgrupper (ledere, mellomledere, ansatte, fagforening), (2) Tidslinje med budskap (forst varsle om endring, sa forklare hvorfor, deretter vise veien videre), (3) Kanaler tilpasset malgruppe (allmote, avdelingsmoter, en-til-en-samtaler, intranett), (4) Toveis kommunikasjon (sporsmalsseanser, anonym innspillskanal, jevnlige oppdateringer), (5) Handtering av ryktespredning (raske, aerlige svar), (6) Oppfolging (jevnlige pulsmaalinger av stemning). Planen bor vaere proaktiv, aerlig og empatisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert om endringsledelse:

- **Endringsledelse** er en systematisk tilnaerming til a lede organisasjoner gjennom forandring
- **Kotters 8-trinnsmodell** gir en steg-for-steg-tilnaerming: skap nodvendighet, bygg koalisjon, utvikle visjon, kommuniser, fjern hindringer, skap kortsiktige gevinster, bygg videre, forankre i kulturen
- **Motstand mot endring** er naturlig og oppstar av arsaker som frykt, tap av kontroll og manglende kommunikasjon
- God haandtering av motstand krever kommunikasjon, involvering, opplaering, stotte og anerkjennelse

Evnen til a lede endring er en av de viktigste kompetansene for fremtidens ledere, ettersom endringer skjer stadig raskere og mer gjennomgripende.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Endringsledelse', definition: 'Systematisk tilnaerming til a lede organisasjoner gjennom overgangen til en ny tilstand.' },
    { term: 'Kotters 8-trinnsmodell', definition: 'Modell med atte trinn for vellykket organisasjonsendring, fra a skape nodvendighet til a forankre i kulturen.' },
    { term: 'Motstand mot endring', definition: 'Naturlig reaksjon der mennesker motsetter seg forandring, apen eller skjult.' },
    { term: 'Styrende koalisjon', definition: 'En gruppe innflytelsesrike personer som leder endringsprosessen.' },
    { term: 'Kortsiktige gevinster', definition: 'Synlige, tidlige resultater som viser at endringen fungerer og bygger momentum.' },
  ],
};

// ============================================================================
// Eksport av alle kapitler i seksjon 1
// ============================================================================

export const ENTREBED_2_DEL1_CHAPTERS = [
  CHAPTER_ENTREBED_2_1_1,
  CHAPTER_ENTREBED_2_1_2,
  CHAPTER_ENTREBED_2_1_3,
  CHAPTER_ENTREBED_2_1_4,
  CHAPTER_ENTREBED_2_1_5,
];
