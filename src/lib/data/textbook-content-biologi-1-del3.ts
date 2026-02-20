/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Del 3: Anatomi og fysiologi
 *
 * Dekker LK20-kompetansemaal for biologi 1 (BIO01-02)
 * Kapittel 3.1-3.5: Kroppens organisering, fordoeyelse og ernaering,
 * sirkulasjon og gassutveksling, muskel- og skjelettsystemet,
 * hud, sanser og kroppens beskyttelse
 *
 * Kompetansemaal: Eleven skal kunne gjore rede for oppbygningen og
 * funksjonen til sentrale organsystemer i menneskekroppen og
 * forklare samspillet mellom dem.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Kroppens organisering
// ============================================================================

export const CHAPTER_BIOLOGI_1_3_1: TextbookChapter = {
  id: 'biologi-1-3-1',
  courseId: 'biologi-1',
  chapterNumber: '3.1',
  title: 'Kroppens organisering',
  description: 'Fra celler til organsystemer – dei fire vevstypane og korleis kroppen er bygd opp i organisasjonsnivaaer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive organisasjonsnivaaene i kroppen: celler, vev, organer, organsystemer, organisme',
    'gjore rede for dei fire hovudtypane av vev og deira funksjonar',
    'forklare samanhengen mellom struktur og funksjon i ulike vevstypar',
  ],
  content: [
    {
      id: 'bio1-3-1-intro',
      type: 'text',
      content: `# Kroppens organisering

Menneskekroppen er bygd opp av omtrent 37 billionar celler. Desse cellene er ikkje tilfeldig plasserte – dei er organiserte i lag paa lag av strukturar med aukande kompleksitet. For aa forstaa korleis kroppen fungerer, maa vi kjenne til organisasjonsnivaaene som bygger opp kroppen.

## Organisasjonsnivaaene

Kroppen kan beskrivast paa fem nivaaer:

1. **Celler** – den minste levande eininga i kroppen. Ulike celletypar har ulik form og funksjon.
2. **Vev** – grupper av like celler som samarbeider om ei felles oppgaave. Det finst fire hovudtypar av vev.
3. **Organer** – strukturar som bestaar av to eller fleire vevstypar som samarbeider. Eksempel: hjartet bestaar av muskelvev, bindevev, nervevev og epitelcvev.
4. **Organsystem** – grupper av organer som samarbeider om ein overordna funksjon. Eksempel: fordoeygelsessystemet.
5. **Organisme** – alle organsystema fungerer saman og utgjer ein heil organisme.

Kvart nivaa bygger paa det foregaaande. Celler med liknande funksjon dannar vev, ulike vev bygger opp organer, og organer samarbeider i organsystem. Denne hierarkiske organiseringa er ein grunntanke i anatomien.

## Cellens tilpassing

Cellene i kroppen er spesialiserte – det betyr at dei har utvikla saerlege eigenskapar som gjer dei eigna til bestemte oppgaaver. Ei muskelcelle er lang og tynn slik at ho kan trekke seg saman, medan ei nervecelle har lange utloepar for aa sende signal over store avstandar. Ei epitelcelle i tarmen har mikrovilli paa overflata for aa auke absorpsjonsarealet. Denne spesialiseringa er avgjerande for at kroppen skal fungere.

## Dei fire vevstypane

Alt vev i menneskekroppen kan klassifiserast i fire hovudtypar:

- **Epitelcvev** (dekkevev) – dekker overflater og kler holrom
- **Bindevev** – gjev stoette, samanbinding og transport
- **Muskelvev** – kan trekke seg saman og gjev bevegelse
- **Nervevev** – sender elektriske signal og koordinerer kroppsfunksjonar

Alle organer i kroppen er bygde opp av kombinasjonar av desse fire vevstypane, men i ulike mengdeforhold avhengig av organets funksjon.`,
    },
    {
      id: 'bio1-3-1-def-1',
      type: 'definition',
      title: 'Vev',
      content: 'Vev er ei samling av celler med lik struktur og funksjon, saman med mellomcellesubstans (ekstracellulaermatriks). Kroppen har fire hovudtypar av vev: epitelcvev (dekkevev), bindevev, muskelvev og nervevev. Alle organer er bygde opp av kombinasjonar av desse fire vevstypane. Mellomcellesubstansen varierer sterkt mellom vevstypane – fraa nesten fråverande i epitelcvev til dominerande i bindevev.',
    },
    {
      id: 'bio1-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Magesekken som organ',
      problem: 'Forklar korleis magesekken illustrerer samspelet mellom ulike vevstypar i eit organ.',
      solution: `**Loesning:**

Magesekken er eit organ som inneheld alle fire vevstypar:

- **Epitelcvev**: Kler innsida av magesekken. Epitelcellene produserer slim som vernar slimhinna mot saltsyre, og kjertleceller skil ut saltsyre og enzymet pepsinogen.
- **Bindevev**: Gjev stoette og held dei andre vevstypane saman. Inneheld blodaarer som forsyner magesekken med naering og oksygen.
- **Muskelvev**: Tre lag med glatt muskulatur (laangs, sirkulaert og skraat) som blandar og eltar maten (peristaltikk).
- **Nervevev**: Nervefibre i veggen styrer muskelkontraksjonen og regulerer kjertelsekresjon via det autonome nervesystemet.

Samspelet mellom desse fire vevstypane gjer at magesekken kan utfoere sin funksjon: mekanisk og kjemisk nedbryting av mat.`,
    },
    {
      id: 'bio1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Kva er riktig rekkjefoelgje av organisasjonsnivaaene i kroppen, fraa laagest til hoegst?',
        options: [
          { id: 'a', text: 'Celle → vev → organ → organsystem → organisme', isCorrect: true },
          { id: 'b', text: 'Vev → celle → organ → organisme → organsystem', isCorrect: false },
          { id: 'c', text: 'Celle → organ → vev → organsystem → organisme', isCorrect: false },
          { id: 'd', text: 'Organsystem → organ → vev → celle → organisme', isCorrect: false },
        ],
        solution: 'Den riktige rekkjefoelgja er celle → vev → organ → organsystem → organisme. Celler er den minste levande eininga. Celler med same funksjon dannar vev, ulike vev bygger opp organer, organer samarbeider i organsystem, og alle organsystema saman utgjer organismen.',
      },
    },
    {
      id: 'bio1-3-1-def-2',
      type: 'definition',
      title: 'Epitelcvev (dekkevev)',
      content: 'Epitelcvev dekker overflater og kler holrom i kroppen. Det dannar huda, slimhinner og kjertlar. Epitelcvev er tett pakka med lite mellomcellesubstans, og cellene sit paa ei basalmembran. Epitelcvev har inga eigne blodaarer – naering diffunderer fraa underliggjande bindevev. Epitelcvev har hoeg fornyingsevne fordi cellene deler seg hyppig. Typar epitelcvev inkluderer fleirlagd plateepitel (hud), einlagd sylinderepitel (tarm) og einlagd kubisk epitel (nyretubuli).',
    },
    {
      id: 'bio1-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Bindevev – stor variasjon',
      problem: 'Forklar kvifor blod, bein og feittvev alle reknast som bindevev, trass i at dei ser svart ulike ut.',
      solution: `**Loesning:**

Alle tre vevstypar deler det viktigaste kjenneteiknet til bindevev: cellene ligg spreidde i ein stor mengde mellomcellesubstans (ekstracellulaermatriks).

- **Blod**: Cellene (raude og kvite blodceller, blodplater) flyt fritt i ei flytande mellomcellesubstans – plasma. Blod vert difor kalla flytande bindevev.
- **Bein**: Beincellene (osteocyttar) er innleira i ei hard, mineralisert mellomcellesubstans av kalsiumfosfat og kollagenfibre. Den harde matriksen gjev skjelettet styrke.
- **Feittvev**: Feittcellene (adipocyttar) er store celler fylte med feitdropar, omgjevne av laust bindevev med kollagenfibre.

Fellesnemaren er at cellene utgjer ein relativt liten del av vevet, og mellomcellesubstansen dominerer – men matriksen har svart ulik konsistens (flytande, halvfast eller hard) avhengig av funksjonen.`,
    },
    {
      id: 'bio1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gjer greie for dei tre typane muskelvev: skjelettmuskulatur, glatt muskulatur og hjartemuskulatur. For kvar type, beskriv korleis cellene ser ut, kvar vevet finst, og om det er viljestyrt eller ikkje.',
        hints: ['Viljestyrt betyr at du kan styre det med viljen – tenk paa kva musklar du kan kontrollere bevisst', 'Tverrstripet betyr at cellene har eit stripemoester under mikroskop'],
        solution: 'Skjelettmuskulatur: Lange, fleirckjerna celler med tverrstripet moernster. Festa til skjelettet via sener. Viljestyrt – vi kan bevisst bestemme aa bevege armane, beina osv. Ansvarleg for viljestyrte bevegelsar. Glatt muskulatur: Spolforma celler med eitt kjerne, utan tydelege striper. Finst i veggen til indre organ som magesekk, tarm, blodaarer og urinblore. Ikkje-viljestyrt – styrt av det autonome nervesystemet. Ansvarleg for t.d. peristaltikk. Hjartemuskulatur: Forgreina celler med eitt eller to kjerner, tverrstripete. Cellene er knytte saman med intercalerte skivar som overforer elektriske signal. Finst berre i hjartet. Ikkje-viljestyrt – hjartet slaar automatisk. Kombinerer eigenskapar fraa begge dei andre typane: tverrstripet som skjelettmuskel, men sjolvstartande som glatt muskel.',
      },
    },
    {
      id: 'bio1-3-1-def-3',
      type: 'definition',
      title: 'Organsystem',
      content: 'Eit organsystem er ei samling av organer som samarbeider om ein overordna funksjon. Menneskekroppen har fleire organsystem, mellom anna: sirkulasjonssystemet (hjarte og blodaarer), respirasjonssystemet (lunger og luftvegar), fordoeygelsessystemet (fraa munn til endetarm), nervesystemet (hjerne, ryggmarg og nervar), hormonsystemet (endokrine kjertlar), muskel-skjelettsystemet, urinsystemet (nyrer og urinvegar), immunsystemet, og det integumentaere systemet (hud). Organsystema er ikkje uavhengige – dei paaverkar kvarandre stadig.',
    },
    {
      id: 'bio1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Kva for ein vevstype har inga eigne blodaarer og faar naering ved diffusjon?',
        options: [
          { id: 'a', text: 'Epitelcvev', isCorrect: true },
          { id: 'b', text: 'Bindevev', isCorrect: false },
          { id: 'c', text: 'Muskelvev', isCorrect: false },
          { id: 'd', text: 'Nervevev', isCorrect: false },
        ],
        solution: 'Epitelcvev har inga eigne blodaarer (det er avaskulaert). Naering og oksygen diffunderer fraa blodaarene i det underliggjande bindevevet, gjennom basalmembranen og inn i epitelcellene. Difor kan epitelcvev ikkje vere for tjukt – cellene lengst fraa blodforsyninga maa framleis faa nok naering.',
      },
    },
    {
      id: 'bio1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nervevev bestaar av nerveceller og stoetteceller. Beskriv oppbygningen av ei nervecelle og forklar kvifor nerveceller er forma slik dei er.',
        hints: ['Nerveceller har ein cellekropp, dendrittar og eit akson', 'Tenk paa samanhengen mellom struktur og funksjon'],
        solution: 'Nervevev bestaar av nerveceller (nevronar) og stoetteceller (gliaceller). Ei nervecelle har ein cellekropp med cellekjerne, korte utloepar kalla dendrittar som tek imot signal fraa andre celler, og eitt langt utloepar kalla akson som sender signal vidare. Nokre akson er dekte av ei myelinskjede (danna av gliaceller) som aukar signalhastigheita. Forma er tilpassa funksjonen: dei lange aksona gjer at signal kan sendast over store avstandar (opptil 1 meter fraa ryggmarg til fot), og forgreininga av dendrittane gjer at ei nervecelle kan ta imot signal fraa mange hundre andre celler samstundes. Gliacellene stottar, isolerer og naerer nervecellene.',
      },
    },
    {
      id: 'bio1-3-1-summary',
      type: 'text',
      content: `## Oppsummering

Kroppen er organisert i fem nivaaer: celler, vev, organer, organsystem og organisme. Dei fire hovudtypane av vev er:

| Vevstype | Kjenneteikn | Eksempel |
|----------|-------------|----------|
| Epitelcvev | Tett pakka celler, dekker overflater | Hud, slimhinner, kjertlar |
| Bindevev | Mykje mellomcellesubstans | Bein, brusk, blod, feittvev |
| Muskelvev | Celler som kan trekke seg saman | Skjelettmuskel, glatt muskel, hjartemuskel |
| Nervevev | Celler som sender elektriske signal | Hjerne, ryggmarg, nervar |

Kvart organ er bygd opp av fleire vevstypar. Organer med relaterte funksjonar dannar organsystem. Alle organsystema samarbeider for aa oppretthalde liv og helse.

Forstainga av desse organisasjonsnivaaene er grunnleggjande for resten av anatomien og fysiologien. I dei neste kapitla skal vi sjaa naermare paa korleis kvart enkelt organsystem er bygd opp og fungerer.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Vel eit organ du kjenner til (t.d. hjartet, lungene eller huda) og forklar korleis alle fire vevstypar er representerte i dette organet.',
        hints: ['Tenk paa kva funksjonar organet har, og kva vevstypar som trengst for kvar funksjon'],
        solution: 'Eksempel med hjartet: Epitelcvev (endokard) kler innsida av hjartekammera og hindrar blodpropp. Muskelvev (myokard) utgjer hovuddelen av hjartveggen – hjartamuskelceller trekkjer seg saman rytmisk og pumpar blod. Bindevev dannar hjartesekkjen (perikard), hjarteventilane og inneheld blodaarer (koronaraarene) som forsyner hjartamuskelen. Nervevev styrer hjarterytmen via det autonome nervesystemet og leidingssystemet (sinusknuten, AV-knuten). Samspelet mellom desse fire vevstypane gjer at hjartet kan pumpe blod effektivt.',
      },
    },
    {
      id: 'bio1-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Kva kjenneteiknar muskelvev?',
        options: [
          { id: 'a', text: 'Cellene kan trekke seg saman (kontrahera) og gjev bevegelse', isCorrect: true },
          { id: 'b', text: 'Cellene er tett pakka og dekker overflater i kroppen', isCorrect: false },
          { id: 'c', text: 'Cellene har stor mengde mellomcellesubstans', isCorrect: false },
          { id: 'd', text: 'Cellene sender elektriske signal over lange avstandar', isCorrect: false },
        ],
        solution: 'Muskelvev kjennest paa at cellene (muskelfibre) kan trekke seg saman (kontrahera) og dermed skape bevegelse. Det finst tre typar muskelvev: skjelettmuskulatur (viljestyrt, tverrstripet), glatt muskulatur (ikkje-viljestyrt, finst i indre organ) og hjartemuskulatur (tverrstripet, ikkje-viljestyrt, finst berre i hjartet).',
      },
    },
    {
      id: 'bio1-3-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar kvifor cellespesialisering er noedvendig i ein fleircella organisme som mennesket. Kva hadde skjedd om alle cellene var like?',
        hints: ['Tenk paa effektivitet og arbeidsdeling', 'Samanlikn med eit samfunn der alle har ulike yrke kontra eitt der alle gjer det same'],
        solution: 'Cellespesialisering er noedvendig fordi ulike oppgaaver krev ulike eigenskapar. Ei muskelcelle maa kunne trekke seg saman, ei nervecelle maa sende signal raskt, og ei epitelcelle maa danne ein tett barriere. Dersom alle cellene var like, ville ingen av dei utfoere nokon av desse oppgaavene optimalt. Spesialisering gjev arbeidsdeling – kvar celletype er ekstremt god paa sin oppgaave. Kostnaden ved spesialisering er at cellene vert avhengige av kvarandre – ei nervecelle kan ikkje sjolv skaffe seg naering, og ei muskelcelle kan ikkje sende signal. Difor treng kroppen eit transportsystem (blod) og kommunikasjonssystem (nervar og hormon) for aa koordinere alle dei spesialiserte cellene.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Vev', definition: 'Samling av celler med lik struktur og funksjon pluss mellomcellesubstans' },
    { term: 'Epitelcvev', definition: 'Dekkevev som kler overflater og holrom, tett pakka celler paa basalmembran' },
    { term: 'Bindevev', definition: 'Vev med mykje mellomcellesubstans som gjev stoette og samanbinding' },
    { term: 'Muskelvev', definition: 'Vev med celler som kan trekke seg saman og skape bevegelse' },
    { term: 'Nervevev', definition: 'Vev med nerveceller som sender elektriske signal' },
    { term: 'Organsystem', definition: 'Gruppe av organer som samarbeider om ein overordna funksjon' },
    { term: 'Cellespesialisering', definition: 'At celler utviklar saerlege eigenskapar tilpassa bestemte oppgaaver' },
  ],
};

// ============================================================================
// Kapittel 3.2: Fordoeyelse og ernaering
// ============================================================================

export const CHAPTER_BIOLOGI_1_3_2: TextbookChapter = {
  id: 'biologi-1-3-2',
  courseId: 'biologi-1',
  chapterNumber: '3.2',
  title: 'Fordoeyelse og ernaering',
  description: 'Fordoeyelseskanalen fraa munn til endetarm, enzymer, naeringsopptak og regulering av fordoeyelsen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive fordoeyelseskanalens oppbygning og funksjonen til dei ulike delane',
    'forklare korleis enzymer bryt ned naeringstoffer og korleis naeringsopptak skjer i tynntarmen',
    'gjore rede for dei ulike naeringsstoffgruppene og deira funksjonar i kroppen',
    'forklare korleis fordoeyelsen vert regulert av nervar og hormon',
  ],
  content: [
    {
      id: 'bio1-3-2-intro',
      type: 'text',
      content: `# Fordoeyelse og ernaering

Maten vi et inneheld store, komplekse molekyl som kroppen ikkje kan ta opp direkte. Fordoeyelsessystemet har som hovudoppgaave aa bryte ned naeringstoffer til smaa nok molekyl til at dei kan absorberast gjennom tarmveggen og fraktast til cellene der dei trengst.

## Fordoeyelseskanalens oppbygning

Fordoeyelseskanalen er eit samanhengande roer som strekkjer seg fraa munnen til endetarmen – omtrent 9 meter langt. Langs kanalen vert maten behandla paa ulike maatar:

### Munnhola
- **Mekanisk nedbryting**: Tennene tygg maten til smaa bitar, og tunga blandar maten med spytt.
- **Kjemisk nedbryting**: Spyttkjertlane produserer spytt med enzymet amylase, som byrjar nedbrytinga av stivelse til maltose.
- Maten formast til ein bolus (matklump) som svelgjast.

### Spiseroyret (oesophagus)
- Eit muskuloest roer (ca. 25 cm) som fraktar maten fraa svelget til magesekken.
- Peristaltikk – boelgjeforma muskelkontraksjoner – driv maten nedover uavhengig av tyngdekrafta.

### Magesekken (ventriculus)
- Produserer **magesaft** som inneheld saltsyre (HCl) og enzymet pepsinogen.
- Saltsyra drep bakteriar, aktiverer pepsinogen til pepsin, og denaturerer protein.
- **Pepsin** byrjar nedbrytinga av proteinar til kortare peptidkjeder.
- Glatte musklar i mageveggen blandar maten til ein halvflytande masse kalla **chyme** (naeringsbrei).
- Slimceller produserer eit beskyttande slimlag som hindrar at saltsyra skadar mageveggen.

### Tynntarmen (intestinum tenue)
- Ca. 6 meter lang, delt i duodenum (tolvfingertarmen), jejunum og ileum.
- **Duodenum**: Mottek bukspytt fraa bukspyttkjertelen (pankreas) og galle fraa levra/galleblora.
- Bukspyttet inneheld enzyma **trypsin** (protein), **lipase** (fett) og **amylase** (stivelse), pluss bikarbonat som noeytraliserer saltsyra fraa magesekken.
- Galle emulgerer fett – det vil seie at feittdropane vert brotne opp i mindre dropar, slik at lipase faar storre angrepsflate.
- **Naeringsopptaket** skjer hovudsakleg i jejunum og ileum. Tarmveggen har tarmtottar (villi) og mikrovilli som aukar overflata enormt – totalt ca. 250 m².

### Tjukktarmen (colon)
- Ca. 1,5 meter lang. Absorberer vatn, salt og nokre vitaminar.
- Inneheld ein rik tarmflora (mikrobiom) som bryt ned fiberrikt materiale og produserer K-vitamin og B-vitaminar.
- Restavfallet vert komprimert til avfoering (feces).

### Endetarmen (rectum) og anus
- Lagrar avfoering til den vert eliminert gjennom defekasjon.`,
    },
    {
      id: 'bio1-3-2-def-1',
      type: 'definition',
      title: 'Enzymer i fordoeyelsen',
      content: 'Fordoeyelsesenzymane er biologiske katalysatorar som aukar farten paa dei kjemiske reaksjonane som bryt ned naeringstoffer. Kvart enzym er spesifikt – det verkar berre paa eitt bestemt substrat. Amylase bryt ned stivelse, proteaser (pepsin, trypsin) bryt ned proteinar, og lipase bryt ned fett. Enzymane verkar optimalt ved bestemt pH og temperatur.',
    },
    {
      id: 'bio1-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Nedbrytinga av eit broedstykkje',
      problem: 'Beskriv kva som skjer med stivelsen i eit broedstykkje fraa du tek den foerste biten til glukosen er teken opp i blodet.',
      solution: `**Loesning:**

1. **Munnhola**: Tennene tygg broedet til smaa bitar. Amylase i spyttet byrjar aa bryte ned stivelse til maltose (eit disakkarid).

2. **Magesekken**: Amylasen vert inaktivert av den sure pH-en (ca. 2). Stivelsen vert ikkje vidare broten ned her, men maten vert blanda til chyme.

3. **Duodenum (tolvfingertarmen)**: Bikarbonat fraa bukspyttkjertelen noeytraliserer syra. Pankreatisk amylase held fram med aa bryte ned stivelse til maltose.

4. **Tynntarmen (jejunum)**: Enzymet maltase, som sit fast i cellemembranen paa tarmepitelet, bryt maltose ned til to glukosemolekyl.

5. **Absorpsjon**: Glukose vert teken opp gjennom tarmepitelet via aktiv transport (med natrium-glukose-kotransportoer) og passerer inn i blodkapillaera i tarmtottane.

6. **Transport**: Blodet fraa tarmen gaar via portvena til levra, der glukosen vert prosessert foer den naar resten av kroppen.

Heile prosessen fraa munn til absorpsjon tek ca. 4-6 timar.`,
    },
    {
      id: 'bio1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Kvar skjer det meste av naeringsopptaket i fordoeyelseskanalen?',
        options: [
          { id: 'a', text: 'I tynntarmen (jejunum og ileum)', isCorrect: true },
          { id: 'b', text: 'I magesekken', isCorrect: false },
          { id: 'c', text: 'I tjukktarmen', isCorrect: false },
          { id: 'd', text: 'I munnhola', isCorrect: false },
        ],
        solution: 'Det meste av naeringsopptaket skjer i tynntarmen, saerleg i jejunum og ileum. Tynntarmen har ein enorm overflate (ca. 250 m²) takka vaere tarmtottar (villi) og mikrovilli. Magesekken bryt ned maten, men absorberer lite (berre vatn, alkohol og nokre medikament). Tjukktarmen absorberer hovudsakleg vatn og salt.',
      },
    },
    {
      id: 'bio1-3-2-def-2',
      type: 'definition',
      title: 'Naeringsstoffer',
      content: 'Naeringsstoffa kan delast i makronaeringstoffer og mikronaeringstoffer. Makronaeringstoffa er karbohydrat, proteinar og fett – desse gjev energi og byggjemateriale. Mikronaeringstoffa er vitaminar og mineralar – desse trengst i smaa mengder, men er avgjerande for enzymfunksjon, beinbygging og mange andre prosessar. Vatn er ogso eit essensielt naeringsstoff.',
    },
    {
      id: 'bio1-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Energiinnhaldet i naeringsstoffa',
      problem: 'Eit maaltid inneheld 80 g karbohydrat, 30 g protein og 20 g fett. Rekn ut det totale energiinnhaldet i kilojoule (kJ). Bruk foelgjande verdiar: karbohydrat gjev 17 kJ/g, protein gjev 17 kJ/g, fett gjev 38 kJ/g.',
      solution: `**Loesning:**

- Karbohydrat: 80 g x 17 kJ/g = 1 360 kJ
- Protein: 30 g x 17 kJ/g = 510 kJ
- Fett: 20 g x 38 kJ/g = 760 kJ

**Totalt energiinnhald: 1 360 + 510 + 760 = 2 630 kJ**

Legg merke til at fett gjev meir enn dobbelt saa mykje energi per gram som karbohydrat og protein. Dette forklarar kvifor feittrik mat er energitett. Eit dagleg energibehov for ein ungdom ligg typisk paa ca. 8 000–12 000 kJ, avhengig av aktivitetsnivaa og kjoenn.`,
    },
    {
      id: 'bio1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar kva rolle galle spelar i fordoeyelsen av fett. Kvifor er galle noedvendig sjolv om galle ikkje er eit enzym?',
        hints: ['Tenk paa kva som skjer naar du blandar olje og vatn', 'Lipase er eit vassloeyseleg enzym – korleis kan det verke paa feittdropar?'],
        solution: 'Galle er ikkje eit enzym – ho bryt ikkje ned fett kjemisk. I staden emulgerer ho fett, det vil seie at store feittdropar vert brotne opp i mange smaa dropar. Dette er noedvendig fordi lipase (det feittspaltande enzymet) er vassloeyseleg og kan berre verke paa overflata av feittdropane. Naar store dropar vert delte i mange smaa dropar, aukar den totale overflata enormt, og lipase faar tilgang til mykje meir fett samstundes. Utan galle ville feittfordoeyinga gaa svart sakte. Galle vert produsert i levra, lagra i galleblora, og frigjort til duodenum naar feitthaldig mat naar tolvfingertarmen.',
      },
    },
    {
      id: 'bio1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Kva for eit enzym byrjar nedbrytinga av protein i magesekken?',
        options: [
          { id: 'a', text: 'Pepsin', isCorrect: true },
          { id: 'b', text: 'Trypsin', isCorrect: false },
          { id: 'c', text: 'Amylase', isCorrect: false },
          { id: 'd', text: 'Lipase', isCorrect: false },
        ],
        solution: 'Pepsin er enzymet som byrjar proteinnedbrytinga i magesekken. Det vert utskilt som den inaktive forloeparen pepsinogen, som aktiverast til pepsin av saltsyra (HCl). Pepsin verkar best ved svart sur pH (ca. 2). Trypsin er ogso ein protease, men verkar i tynntarmen ved noytral pH. Amylase bryt ned stivelse og lipase bryt ned fett.',
      },
    },
    {
      id: 'bio1-3-2-def-3',
      type: 'definition',
      title: 'Peristaltikk',
      content: 'Peristaltikk er boelgjeforma muskelkontraksjoner i veggen til fordoeyelseskanalen som driv maten framover. Ringmuskulaturen bak matklumpen trekkjer seg saman, medan muskulaturen framfor slappar av. Denne koordinerte kontraksjonen flyttar innhaldet i ein retning – fraa munn mot endetarm. Peristaltikk vert styrt av det enteriske nervesystemet (tarmnervesystemet) og det autonome nervesystemet.',
    },
    {
      id: 'bio1-3-2-example-3',
      type: 'example',
      title: 'Eksempel: Regulering av fordoeyelsen',
      problem: 'Forklar korleis hormonet sekretin regulerer fordoeyelsen i tynntarmen.',
      solution: `**Loesning:**

Naar sur chyme fraa magesekken naar duodenum, skjer foelgjande:

1. **Stimulus**: Den sure pH-en i duodenum stimulerer S-celler i tarmveggen.
2. **Hormonproduksjon**: S-cellene skil ut hormonet **sekretin** til blodet.
3. **Verknader av sekretin**:
   - Stimulerer bukspyttkjertelen til aa produsere bikarbonatrik vaske som noeytraliserer syra i duodenum
   - Hemmer saltsyreproduksjonen i magesekken (negativ tilbakekobling)
   - Stimulerer galleproduksjonen i levra

4. **Resultat**: pH i duodenum stig til eit nivaa (ca. 7-8) der fordoeyelsesenzyma i tynntarmen fungerer optimalt.

Dette er eit godt eksempel paa hormonell regulering med negativ tilbakekobling: sur chyme utloeser ein respons (bikarbonat) som motverkar det opphavlege problemet (for sur pH).`,
    },
    {
      id: 'bio1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv oppbygningen til ein tarmtotte (villus) og forklar korleis strukturen er tilpassa naeringsopptak.',
        hints: ['Tenk paa overflateauke', 'Kva ligg inni ein tarmtotte?'],
        solution: 'Ein tarmtotte (villus) er eit fingerforma utspring fraa tarmveggen, ca. 0,5–1 mm hoegt. Kvar tarmtotte er dekt av eit lag sylinderepitel med mikrovilli (boerstesaum) paa overflata. Inni tarmtotten finst eit nettverk av blodkapillaarar og eit lymfekar (mjolkekar). Strukturen er tilpassa naeringsopptak paa fleire maatar: (1) Tarmtottane og mikrovilli aukar absorpsjonsoverflata enormt (ca. 250 m²). (2) Blodkapillaarnettverket gjev kort diffusjonsavstand – naeringstoffer treng berre passere epitelet for aa naa blodet. (3) Mjolkekaret tek opp fett i form av kylomikronar. (4) Epitelcellene har transportprotein for aktiv transport av glukose, aminosyrer og andre naeringstoffer.',
      },
    },
    {
      id: 'bio1-3-2-summary',
      type: 'text',
      content: `## Oppsummering

Fordoeyelsessystemet bryt ned mat mekanisk og kjemisk, og tek opp naeringstoffer til kroppen:

| Del | Hovudfunksjon | Viktige enzym/stoff |
|-----|---------------|---------------------|
| Munnhola | Tygging, start stivelsenedbryting | Amylase i spytt |
| Magesekken | Proteinnedbyting, desinfeksjon | HCl, pepsin |
| Tynntarmen | Hovudnedbryting og naeringsopptak | Trypsin, lipase, amylase, galle |
| Tjukktarmen | Vatnopptak, tarmflora | Bakterielle enzym |

Naeringsstoffa delast i makronaeringstoffer (karbohydrat, protein, fett) og mikronaeringstoffer (vitaminar, mineralar). Fordoeyelsen vert regulert av baade nervar (det enteriske nervesystemet) og hormon (gastrin, sekretin, CCK).

Tynntarmen er hovudstaden for naeringsopptak, med ein overflate paa ca. 250 m² takka vaere tarmtottar og mikrovilli.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Ein person har faatt fjerna galleblora. Forklar korleis dette kan paaverke fordoeyelsen og kva for naeringstoffer som vert hardast ramma.',
        hints: ['Galleblora lagrar galle – men kva organ produserer gallen?', 'Tenk paa kva galle gjer med fett'],
        solution: 'Galleblora lagrar og konsentrerer galle, men det er levra som produserer henne. Utan galleblore vil galle framleis produserast, men ho vert dryppa kontinuerleg inn i tynntarmen i staden for aa frigjerast i ein stor dose naar det trengst. Ved feittrike maaltid vil det ikkje vere nok galle tilgjengeleg til aa emulgere alt fettet. Resultatet er at feittfordoeyinga vert mindre effektiv, saerleg ved store maaltid. Fett er det naeringstoffet som vert hardast ramma. Personen kan oppleve ubehag, oppblaastring og feittrik avfoering (steatorre) etter feittrike maaltid. Feittloeyelege vitaminar (A, D, E og K) kan ogso verte daarlegare absorbert.',
      },
    },
    {
      id: 'bio1-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Kva for ein paastand om tjukktarmen er riktig?',
        options: [
          { id: 'a', text: 'Tjukktarmen absorberer vatn og salt, og inneheld ein rik tarmflora', isCorrect: true },
          { id: 'b', text: 'Tjukktarmen er hovudstaden for nedbryting av protein og karbohydrat', isCorrect: false },
          { id: 'c', text: 'Tjukktarmen produserer fordoeyelsesenzym som lipase og amylase', isCorrect: false },
          { id: 'd', text: 'Tjukktarmen har tarmtottar for effektivt naeringsopptak', isCorrect: false },
        ],
        solution: 'Tjukktarmen (colon) absorberer hovudsakleg vatn og salt fraa det ufordoeyelege materialet. Ho inneheld ein rik tarmflora (ca. 100 billionar bakteriar) som bryt ned fiber og produserer nokre vitaminar (K og B). Tjukktarmen har ikkje tarmtottar og produserer ikkje fordoeyelsesenzym – naeringsnedbryting og -opptak skjer hovudsakleg i tynntarmen.',
      },
    },
    {
      id: 'bio1-3-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar kvifor det er viktig at pepsin vert produsert som den inaktive forloeparen pepsinogen, og fyrst aktiverast i magesekken.',
        hints: ['Kva hadde skjedd dersom pepsin var aktivt allereie inne i cellene som produserer det?', 'Pepsin bryt ned protein – kva er cellene sjolve bygde opp av?'],
        solution: 'Pepsin er ein protease – eit enzym som bryt ned protein. Cellene som produserer pepsin er sjolve bygde opp av protein. Dersom pepsin var aktivt allereie inne i cellene, ville enzymet byrje aa bryte ned cellenes eigne protein og oydeleggje dei. Ved aa produsere den inaktive forloeparen pepsinogen, beskytar cellene seg sjolve. Pepsinogen vert fyrst aktivert til pepsin av saltsyra (HCl) ute i magesekken, der det beskyttande slimlaget vernar mageveggen. Dette er eit viktig prinsipp i biologi: mange potensielt farlege enzym vert produsert som inaktive forloeparar (zymogen) og aktiverast fyrst der dei trengst.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fordoeyelseskanalen', definition: 'Samanhengande roer fraa munn til endetarm som bryt ned og absorberer naering' },
    { term: 'Peristaltikk', definition: 'Boelgjeforma muskelkontraksjoner som driv maten framover i fordoeyelseskanalen' },
    { term: 'Chyme', definition: 'Halvflytande naeringsbrei som magesekken sender vidare til tynntarmen' },
    { term: 'Emulgering', definition: 'Oppbrytning av store feittdropar til smaa dropar ved hjelp av galle' },
    { term: 'Tarmtotte (villus)', definition: 'Fingerforma utspring i tynntarmen som aukar overflata for naeringsopptak' },
    { term: 'Makronaeringstoffer', definition: 'Karbohydrat, protein og fett – gjev energi og byggjemateriale' },
    { term: 'Sekretin', definition: 'Tarmhormon som stimulerer bikarbonatproduksjon i bukspyttkjertelen' },
  ],
};

// ============================================================================
// Kapittel 3.3: Sirkulasjon og gassutveksling
// ============================================================================

export const CHAPTER_BIOLOGI_1_3_3: TextbookChapter = {
  id: 'biologi-1-3-3',
  courseId: 'biologi-1',
  chapterNumber: '3.3',
  title: 'Sirkulasjon og gassutveksling',
  description: 'Hjartets oppbygning, det doble kretsloepet, blodets sammensetning og gassutveksling i lungene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive hjartets oppbygning og forklare korleis det pumpar blod gjennom kroppen',
    'gjore rede for det doble kretsloepet: litle og store krinsloepet',
    'forklare blodets sammensetning og oppgaaver',
    'beskrive gassutveksling i lungene og i veva',
  ],
  content: [
    {
      id: 'bio1-3-3-intro',
      type: 'text',
      content: `# Sirkulasjon og gassutveksling

Alle cellene i kroppen treng ein kontinuerleg tilfoersel av oksygen og naeringstoffer, og avfallsstoff som karbondioksid maa fraktast bort. Sirkulasjonssystemet og respirasjonssystemet samarbeider taett for aa loeyse desse oppgaavene.

## Hjartets oppbygning

Hjartet er ein muskuloes pumpe paa storleik med ein knyttneve, plassert midt i brystkassa, litt til venstre. Det veg ca. 300 g og pumpar omlag 5 liter blod per minutt i kvile – det vil seie over 7 000 liter per doegn.

Hjartet har fire kammer:
- **Hoegre forkammer (atrium)**: Tek imot oksygenfattig blod fraa kroppen via oevre og nedre holevene (vena cava superior og inferior).
- **Hoegre hovudkammer (ventrikkel)**: Pumpar blod til lungene via lungearterien (arteria pulmonalis).
- **Venstre forkammer (atrium)**: Tek imot oksygenrikt blod fraa lungene via lungevenane.
- **Venstre hovudkammer (ventrikkel)**: Pumpar oksygenrikt blod ut i kroppen via aorta.

Mellom forkammera og hovudkammera ligg **seglventilane** (mitralventilen paa venstre side, trikuspidalventilen paa hoegre side) som hindrar tilbakestroyming. Mellom hovudkammera og dei store arteriane ligg **lommeventilane** (aortaventilen og pulmonalventilen).

Venstre hovudkammer har tjukkare vegg enn hoegre fordi det maa pumpe blod med hoegt trykk til heile kroppen, medan hoegre berre pumpar til lungene (kort avstand, laaegt trykk).

## Hjarterytme og leidingssystem

Hjartet slaar rytmisk utan ytre stimulering – det er **myogent** (sjolvstartande). Signalet startar i **sinusknuten** (SA-knuten) i hoegre forkammer, som fungerer som hjartets naturlege pacemaker. Fraa sinusknuten spreier det elektriske signalet seg gjennom forkammera og vidare til **AV-knuten** (atrioventrikulaerknuten), deretter gjennom **His-bunten** og **Purkinje-fibrene** til hovudkammera.

Normal kvilefrekvens er 60–80 slag per minutt. Hjarterytmen vert regulert av det autonome nervesystemet: sympatikus aukar frekvensen (t.d. ved fysisk aktivitet), parasympatikus (vagusnerven) senkar den.`,
    },
    {
      id: 'bio1-3-3-def-1',
      type: 'definition',
      title: 'Det doble kretsloepet',
      content: 'Mennesket har eit dobbelt kretsloep: (1) Det litle krinsloepet (lungekrinsloepet) gaar fraa hoegre hovudkammer til lungene og tilbake til venstre forkammer. Her vert blodet oksygenert. (2) Det store krinsloepet (systemkrinsloepet) gaar fraa venstre hovudkammer ut til heile kroppen og tilbake til hoegre forkammer. Her vert oksygen levert til cellene og karbondioksid henta opp. Det doble kretsloepet gjer at oksygenrikt og oksygenfattig blod vert halde adskilt, noko som gjev effektiv oksygentransport.',
    },
    {
      id: 'bio1-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Blodets veg gjennom kroppen',
      problem: 'Foelg ein raud blodcelle gjennom ein komplett runde i kroppen, fraa hoegre forkammer og tilbake dit igjen.',
      solution: `**Loesning:**

1. Raud blodcelle med lite oksygen ligg i **hoegre forkammer**.
2. Passerer gjennom **trikuspidalventilen** til **hoegre hovudkammer**.
3. Pumpast gjennom **pulmonalventilen** og ut i **lungearterien**.
4. Naar kapillaarane rundt alveolane i **lungene**.
5. **Gassutveksling**: CO₂ diffunderer ut, O₂ diffunderer inn – blodcella er no oksygenrik.
6. Reiser tilbake via **lungevenane** til **venstre forkammer**.
7. Passerer gjennom **mitralventilen** til **venstre hovudkammer**.
8. Pumpast gjennom **aortaventilen** ut i **aorta**.
9. Reiser via arteriar og arterioler til eit **kapillaernettverk** i kroppens vev.
10. **Gassutveksling**: O₂ diffunderer ut til cellene, CO₂ diffunderer inn – blodcella er no oksygenfattig igjen.
11. Reiser tilbake via venoler og vener til **oevre/nedre holevene**.
12. Tilbake i **hoegre forkammer** – ein full runde er fullfoert.

Merk: I lungearterien stroeymer oksygenfattig blod, og i lungevenane stroeymer oksygenrikt blod. Arteriar foerer blod bort fraa hjartet, vener foerer blod mot hjartet – uavhengig av oksygeninnhald.`,
    },
    {
      id: 'bio1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Kvifor har venstre hovudkammer tjukkare vegg enn hoegre hovudkammer?',
        options: [
          { id: 'a', text: 'Fordi det maa pumpe blod med hoegre trykk til heile kroppen', isCorrect: true },
          { id: 'b', text: 'Fordi det pumpar meir blod per slag enn hoegre', isCorrect: false },
          { id: 'c', text: 'Fordi det tek imot blod fraa lungene under hoegt trykk', isCorrect: false },
          { id: 'd', text: 'Fordi oksygenrikt blod krev sterkare pumping', isCorrect: false },
        ],
        solution: 'Venstre hovudkammer maa generere hoegt trykk for aa pumpe blod gjennom det store krinsloepet – heile kroppen fraa hovud til taa. Hoegre hovudkammer pumpar berre til lungene, som ligg rett ved sida av hjartet og har eit laagtrykkssystem. Begge kammera pumpar same mengde blod per slag (slagvolum), men venstre krev meir kraft (og dermed tjukkare muskelvegg) paa grunn av den lengre transportvegen.',
      },
    },
    {
      id: 'bio1-3-3-def-2',
      type: 'definition',
      title: 'Blodets sammensetning',
      content: 'Blod bestaar av blodplasma (ca. 55 %) og blodceller (ca. 45 %). Plasma er ei gulaktig vaeske som inneheld vatn, protein (albumin, antistoff, koagulasjonsfaktorar), naeringstoffer, hormon og avfallsstoff. Blodcellene omfattar raude blodceller (erytrocyttar) som transporterer oksygen ved hjelp av hemoglobin, kvite blodceller (leukocyttar) som er del av immunforsvaret, og blodplater (trombocyttar) som er viktige for blodkoagulering. Ein vaksen person har ca. 5 liter blod.',
    },
    {
      id: 'bio1-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Gassutveksling i lungene',
      problem: 'Forklar korleis gassutveksling skjer i lungealveolane og kva som driv prosessen.',
      solution: `**Loesning:**

Gassutveksling i lungene skjer i **alveolane** – dei ca. 300 millionar smaa luftsekkjane i lungene. Den totale alveoloverflata er ca. 70 m².

**Kva driv gassutvekslinga?**
Prosessen vert driven av **diffusjon** langs konsentrasjonsgradientar (partialtrykk):

- **Oksygen (O₂)**: Partialtrycket av O₂ er hoegt i alveolelufta (ca. 100 mmHg) og laaegt i det oksygenfattige blodet som kjem til lungene (ca. 40 mmHg). O₂ diffunderer difor fraa alveolelufta inn i blodet.

- **Karbondioksid (CO₂)**: Partialtrycket av CO₂ er hoegt i det venoese blodet (ca. 46 mmHg) og laaegt i alveolelufta (ca. 40 mmHg). CO₂ diffunderer difor fraa blodet ut i alveolelufta og pustast ut.

**Strukturelle tilpassingar for effektiv diffusjon:**
1. Svart tynn barriere – berre to cellelag (alveolvegg + kapillaarvegg), tilsaman ca. 0,5 μm
2. Enorm overflate – ca. 70 m² (storleiken av ei lita leilegheit)
3. Rik blodforsyning – tett kapillaernettverk rundt kvar alveol
4. Fuktig overflate – gassar loeyser seg i vaeskelaget foer diffusjon`,
    },
    {
      id: 'bio1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar skilnaden mellom arteriar, vener og kapillaarar med omsyn til struktur og funksjon.',
        hints: ['Tenk paa veggtjukkleik, trykk og kva retning blodet stroeymer', 'Kva for blodaarer er tilpassa utveksling av stoff?'],
        solution: 'Arteriar foerer blod bort fraa hjartet. Dei har tjukk, elastisk vegg med mykje glatt muskulatur fordi dei maa tole hoegt blodtrykk. Dei storste arteriane (t.d. aorta) er saerleg elastiske for aa jamne ut trykkpulsane fraa hjartet. Vener foerer blod tilbake mot hjartet. Dei har tynnare vegg og laaegare trykk. Mange vener har veneklappar som hindrar tilbakestroyming. Kapillaarar er dei minste blodaarene – berre eitt cellelag tjukke. Dei dannar eit nettverk mellom arteriar og vener og er staden der utveksling av oksygen, naeringstoffer og avfallsstoff skjer mellom blod og vev. Den tynne veggen gjer at stoff lett kan passere gjennom.',
      },
    },
    {
      id: 'bio1-3-3-def-3',
      type: 'definition',
      title: 'Hemoglobin',
      content: 'Hemoglobin (Hb) er eit protein i raude blodceller som transporterer oksygen. Kvart hemoglobinmolekyl bestaar av fire polypeptidkjeder (to alfa og to beta), kvar med ei hemgruppe som inneheld eit jernatom. Kvart jernatom kan binde eitt O₂-molekyl, saa eitt hemoglobinmolekyl kan bere fire O₂-molekyl. Naar hemoglobin er bunde til oksygen kallast det oksyhemoglobin (HbO₂) og har ein klar raud farge. Utan oksygen (deoksyhemoglobin) er fargen moerkare raud.',
    },
    {
      id: 'bio1-3-3-example-3',
      type: 'example',
      title: 'Eksempel: Kvifor andpusten ved fysisk aktivitet?',
      problem: 'Forklar kva som skjer i sirkulasjonssystemet og respirasjonssystemet naar du spring raskt.',
      solution: `**Loesning:**

Naar du spring, aukar muskelcellene sitt behov for oksygen dramatisk og produserer meir CO₂. Kroppen responderer med fleire tilpassingar:

**Hjartet:**
- Hjartefrekvensen aukar (fraa ca. 70 til opptil 180 slag/min)
- Slagvolumet aukar (meir blod per slag)
- Hjartets minuttvolum (cardiac output) kan auke fraa ca. 5 L/min til 25 L/min

**Blodomfordeling:**
- Blodaarene i aktive musklar utvidar seg (vasodilatasjon) → meir blod til musklane
- Blodaarene til fordoeyelsesorgana og huda trekkjer seg saman (vasokonstriksjon) → blod omdirigerast

**Lungene:**
- Pustefrekvensen og pustevolumet aukar
- Meir luft naar alveolane → betre gassutveksling
- Aukt blodstraum gjennom lungekapillaarane

**Kvifor andpusten?**
Du kjenner deg andpusten fordi kjemoreseptorar i hjernen og blodaarene registrerer aukande CO₂-nivaa i blodet. Respirasjonssenteret i hjernestammen aukar pustesignala for aa kvitte seg med CO₂ raskare. Det er primaert aukt CO₂ (ikkje laaegt O₂) som driv pusterefleksen.`,
    },
    {
      id: 'bio1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Kva for ein paastand om lungearterien er riktig?',
        options: [
          { id: 'a', text: 'Lungearterien foerer oksygenfattig blod fraa hjartet til lungene', isCorrect: true },
          { id: 'b', text: 'Lungearterien foerer oksygenrikt blod fraa lungene til hjartet', isCorrect: false },
          { id: 'c', text: 'Lungearterien foerer oksygenrikt blod fraa hjartet til kroppen', isCorrect: false },
          { id: 'd', text: 'Lungearterien foerer oksygenfattig blod fraa kroppen til hjartet', isCorrect: false },
        ],
        solution: 'Lungearterien (arteria pulmonalis) foerer oksygenfattig blod fraa hoegre hovudkammer til lungene for gassutveksling. Sjolv om arteriar vanlegvis assosierast med oksygenrikt blod, er definisjonen av ei arterie eit blodkar som foerer blod BORT fraa hjartet – uavhengig av oksygeninnhaldet. Lungearterien er det viktigaste eksempelet paa ei arterie med oksygenfattig blod.',
      },
    },
    {
      id: 'bio1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hemoglobin kan binde baade oksygen og karbonmonoksid (CO). Karbonmonoksid bind seg ca. 200 gonger sterkare til hemoglobin enn oksygen. Forklar kvifor CO-forgifting er saa farleg.',
        hints: ['Tenk paa kva som skjer med oksygentransporten naar CO tek opp plassane paa hemoglobin', 'Kor lett er det aa fjerne CO fraa hemoglobin?'],
        solution: 'Karbonmonoksid (CO) bind seg til dei same jernatomia paa hemoglobin som oksygen, men med ca. 200 gonger hoegare affinitet. Det betyr at sjolv smaa mengder CO i pusteluft vil fortrengje oksygen fraa hemoglobin. CO-hemoglobin (karboksyhemoglobin, HbCO) kan ikkje transportere oksygen. Sidan bindinga er saa sterk, slepper CO svart langsamt fraa hemoglobin. Resultatet er at cellene ikkje faar nok oksygen (hypoksi), sjolv om ein pustar normal luft. Hjernen er saerleg saarbar. CO-forgifting er ekstra farleg fordi CO er luktfri og fargelaus, saa ein merkar det ikkje foer det er for seint. Behandling er aa puste rein O₂ (eller hyperbar O₂) for aa fortrengje CO fraa hemoglobin.',
      },
    },
    {
      id: 'bio1-3-3-summary',
      type: 'text',
      content: `## Oppsummering

Sirkulasjonssystemet og respirasjonssystemet samarbeider om aa forsyne cellene med oksygen og fjerne karbondioksid:

**Hjartet:**
- Fire kammer: to forkammer og to hovudkammer
- Ventilane hindrar tilbakestroyming
- Sinusknuten styrer hjarterytmen

**Det doble kretsloepet:**
- Litle krinsloepet: Hjarte → lunger → hjarte (gassutveksling)
- Store krinsloepet: Hjarte → kroppen → hjarte (levering av O₂, opptak av CO₂)

**Blodet:**
- Plasma (55 %) + blodceller (45 %)
- Raude blodceller med hemoglobin transporterer O₂
- Kvite blodceller forsvarar mot infeksjon
- Blodplater er viktige for koagulering

**Gassutveksling:**
- Skjer ved diffusjon i alveolane (lunger) og i veva
- Drives av partialtrykksforskjellar
- Alveolane har enorm overflate og svart tynn barriere

Forstainga av sirkulasjon og gassutveksling er sentral for aa forstaa korleis kroppen responderer paa fysisk aktivitet, sjukdom og miljoeendringar.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar korleis gassutveksling i veva (systemisk gassutveksling) skil seg fraa gassutveksling i lungene. Bruk omgrepa partialtrykk og diffusjon.',
        hints: ['I lungene gaar O₂ inn i blodet – kva skjer i veva?', 'Tenk paa konsentrasjonsgradientane paa dei to stadene'],
        solution: 'I lungene er partialtrycket av O₂ hoegare i alveolelufta enn i blodet, saa O₂ diffunderer inn i blodet. CO₂ gaar motsett veg. I veva er situasjonen omvendt: cellene brukar O₂ og produserer CO₂, saa partialtrycket av O₂ er laaegare i veva enn i blodet. O₂ diffunderer difor fraa blodet ut til cellene. CO₂-partialtrycket er hoegare i cellene enn i blodet, saa CO₂ diffunderer fraa cellene og inn i blodet. Begge stader drives prosessen av diffusjon langs konsentrasjonsgradientar, men retningane er motsette: inn i blodet i lungene, ut av blodet i veva.',
      },
    },
    {
      id: 'bio1-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Kva er hovudfunksjonen til blodplatene (trombocyttane)?',
        options: [
          { id: 'a', text: 'Dei spelar ein sentral rolle i blodkoagulering (stoppar blodningar)', isCorrect: true },
          { id: 'b', text: 'Dei transporterer oksygen til cellene', isCorrect: false },
          { id: 'c', text: 'Dei produserer antistoff mot bakteriar', isCorrect: false },
          { id: 'd', text: 'Dei regulerer blodtrykket', isCorrect: false },
        ],
        solution: 'Blodplater (trombocyttar) er cellefragment fraa megakaryocyttar i beinmargen. Hovudfunksjonen deira er blodkoagulering (hemostase). Naar eit blodkar vert skadd, festar blodplatene seg til skadestaden (adhesjon), klumpar seg saman (aggregering) og dannar ein mellombels plateplugg. Dei frigjer ogso stoff som aktiverer koagulasjonskaskaden, som lagar eit fibrinnettverk som forsterkar pluggen til ein stabil blodpropp.',
      },
    },
    {
      id: 'bio1-3-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-7',
        number: '7',
        type: 'classic',
        task: 'Eit foster har ei opning mellom hoegre og venstre forkammer kalla foramen ovale, og ein kanal mellom lungearterien og aorta kalla ductus arteriosus. Forklar kvifor desse strukturane er noedvendige foer foedsel og kva som ville skjedd dersom dei ikkje lukkast etter foedsel.',
        hints: ['Fosteret bruker ikkje lungene sine – kvar faar det oksygen fraa?', 'Kva skjer med blodstraumen dersom blodet kan gaa utanom lungene etter foedsel?'],
        solution: 'Foer foedsel faar fosteret oksygen fraa morkaka via navlestrengen – lungene er ikkje i bruk og er fylte med vaske. Det ville vaere bortkasta aa pumpe alt blodet gjennom lungene. Foramen ovale let blod stroyme direkte fraa hoegre til venstre forkammer, og ductus arteriosus let blod gaa fraa lungearterien direkte over til aorta. Begge shuntane omgaar lungekrinsloepet. Ved foedsel tek babyen sine foerste andedrag, lungeblodkara utvidar seg, og trykket i venstre forkammer stig. Dette trykkjer foramen ovale att (lukkast vanlegvis i loepet av dagar). Ductus arteriosus trekkjer seg saman og lukkast (vanlegvis innan 24–48 timar). Dersom dei ikkje lukkast, vil oksygenfattig blod blande seg med oksygenrikt, og kroppen faar for lite oksygen – ein tilstand som kan krevje kirurgisk behandling.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Det doble kretsloepet', definition: 'To krinsloep: litle (lunger) og store (kroppen) som held oksygenrikt og oksygenfattig blod adskilt' },
    { term: 'Sinusknuten', definition: 'Hjartets naturlege pacemaker i hoegre forkammer som startar kvart hjarteslag' },
    { term: 'Hemoglobin', definition: 'Protein i raude blodceller som bind og transporterer oksygen' },
    { term: 'Alveol', definition: 'Liten luftsekk i lungene der gassutveksling skjer' },
    { term: 'Diffusjon', definition: 'Passiv transport av stoff fraa hoeg til laag konsentrasjon' },
    { term: 'Slagvolum', definition: 'Mengda blod hjartet pumpar per slag' },
    { term: 'Arterie', definition: 'Blodkar som foerer blod bort fraa hjartet' },
  ],
};

// ============================================================================
// Kapittel 3.4: Muskel- og skjelettsystemet
// ============================================================================

export const CHAPTER_BIOLOGI_1_3_4: TextbookChapter = {
  id: 'biologi-1-3-4',
  courseId: 'biologi-1',
  chapterNumber: '3.4',
  title: 'Muskel- og skjelettsystemet',
  description: 'Skjelettet, leddtypar, muskeltypar og korleis musklar og skjelett samarbeider om bevegelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive hovuddelane av skjelettet og skilje mellom aksialskjelettet og appendikulaerskjelettet',
    'gjore rede for ulike leddtypar og korleis dei mogeleggjer ulike bevegelsar',
    'forklare oppbygningen av skjelettmuskulatur og mekanismen bak muskelkontraksjon',
    'forklare prinsippet om agonist og antagonist i muskelsamarbeid',
  ],
  content: [
    {
      id: 'bio1-3-4-intro',
      type: 'text',
      content: `# Muskel- og skjelettsystemet

Muskel- og skjelettsystemet gjev kroppen form, stoette og evne til bevegelse. Skjelettet dannar rammeverket, ledda gjev fleksibilitet, og musklane produserer kreftene som driv bevegelsane. Saman utgjer dei eit elegant samarbeid mellom passive og aktive strukturar.

## Skjelettet

Det vaksne menneskeskjelettet bestaar av 206 bein. Skjelettet har fleire viktige funksjonar:

- **Stoette**: Gjev kroppen form og held den oppreist
- **Bevegelse**: Fungerer som heftestadar og vektarmar for musklane
- **Vern**: Beskytar vitale organ (kraniet vernar hjernen, ribbena vernar hjartet og lungene)
- **Blodcelleproduksjon**: Raud beinmarg i dei store beina produserer blodceller (hematopoese)
- **Minerallagring**: Lagrar kalsium og fosfor som kan frigjerast naar kroppen treng det

### Aksialskjelettet og appendikulaerskjelettet

Skjelettet kan delast i to hovuddelar:

**Aksialskjelettet** (80 bein) utgjer kroppens sentrale akse:
- Kraniet (22 bein) – vernar hjernen og sanseorgana
- Ryggsoeyla (33 ryggvirvlar, inkludert korsbeinet og halebeinet) – ber kroppsvekta og vernar ryggmargen
- Brystkassa (brystbeinet + 12 par ribbein) – vernar hjarte og lunger, og hjelper med pustebevegelsane

**Appendikulaerskjelettet** (126 bein) omfattar lemmene og festepunkta deira:
- Skulderbeltet (kragebein og skulderblad) og armane
- Hoftebeltet (hoftebein) og beina

Ryggsoeyla er S-forma og bestar av virvlar skilde av mellomvirvelskiver (diskar) av brusk. Diskane fungerer som stoetdemparar og gjev ryggsoeyla fleksibilitet.`,
    },
    {
      id: 'bio1-3-4-def-1',
      type: 'definition',
      title: 'Ledd',
      content: 'Eit ledd er ein stad der to eller fleire bein moeter kvarandre. Ledd kan klassifiserast etter bevegelsegrad: Fibrose ledd (ubevegelegge, t.d. skallesoemer), bruskledds (lite bevegelegge, t.d. mellomvirvelskivene) og synovialledd (fritt bevegelegge, t.d. kne og skulder). Synovialledd har ein leddkapsel fylt med synovialvaeske (leddvaeske) som smoerer og naerer leddbrusken. Leddband (ligament) stabiliserer ledda, medan sener festar musklar til bein.',
    },
    {
      id: 'bio1-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Ulike leddtypar og bevegelsar',
      problem: 'Beskriv tre ulike typar synovialledd og kva for bevegelsar kvar av dei tillet.',
      solution: `**Loesning:**

1. **Hengselledd** (t.d. kneet og albogen): Tillater bevegelse i berre eitt plan – boeyging (fleksjon) og strekning (ekstensjon). Fungerer som eit doerhengsle. Kneet kan boeyast og strekkjast, men ikkje roterast nemneverdig.

2. **Kuleledd** (t.d. skulder og hofte): Tillater bevegelse i alle retningar – fleksjon, ekstensjon, abduksjon (fraa kroppen), adduksjon (mot kroppen) og rotasjon. Skulderleddet er kroppens mest bevegelegge ledd, noko som ogso gjer det meir utsett for skadar.

3. **Dreieledd** (t.d. mellom foerste og andre halsvirvel, og mellom radius og ulna i underarmen): Tillater rotasjon rundt ei akse. Leddet mellom atlas og axis (dei to oeverste halsvirvlane) leet deg dreje hovudet fraa side til side.

Kvar leddtype har ein form som er tilpassa den bevegelsetypen som trengst paa den aktuelle staden i kroppen.`,
    },
    {
      id: 'bio1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Kva for ein del av skjelettet høyrer til aksialskjelettet?',
        options: [
          { id: 'a', text: 'Ryggsoeyla, kraniet og brystkassa', isCorrect: true },
          { id: 'b', text: 'Armane, beina og hoftebeinet', isCorrect: false },
          { id: 'c', text: 'Skulderbeltet og hoftebeltet', isCorrect: false },
          { id: 'd', text: 'Hendene, foettene og kneledda', isCorrect: false },
        ],
        solution: 'Aksialskjelettet utgjer kroppens sentrale akse og bestaar av kraniet (22 bein), ryggsoeyla (33 virvlar) og brystkassa (brystbeinet og 12 par ribbein). Appendikulaerskjelettet omfattar lemmene (armar og bein) og belta som festar dei til aksialskjelettet (skulderbeltet og hoftebeltet).',
      },
    },
    {
      id: 'bio1-3-4-def-2',
      type: 'definition',
      title: 'Skjelettmuskelfiber',
      content: 'Ein skjelettmuskelfiber er ei lang, sylindrisk celle med fleire cellekjerner. Kvar fiber inneheld mange myofibrillar – lange traadforma strukturar som bestaar av dei kontraktile proteina aktin (tynne filament) og myosin (tjukke filament). Myofibrillane er organiserte i repeterte einingar kalla sarkomerar, som er den funksjonelle kontraksjonseininga i muskelen. Naar muskelen kontraherer, glir aktinfilamenta langs myosinfilamenta – dette kallast glidefialmentmodellen.',
    },
    {
      id: 'bio1-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Agonist og antagonist – biceps og triceps',
      problem: 'Forklar korleis biceps og triceps samarbeider naar du boeyger og strekkjer albogen.',
      solution: `**Loesning:**

Musklar kan berre trekke – dei kan ikkje dytte. Difor maa musklar jobbe i par der dei har motsett verknad:

**Boeyging av albogen (fleksjon):**
- **Agonist** (utfoerer bevegelesa): Biceps brachii kontraherer og boeyger armen
- **Antagonist** (motverkar agonisten): Triceps brachii slappar av og vert strekt

**Strekning av albogen (ekstensjon):**
- **Agonist**: Triceps brachii kontraherer og strekkjer armen
- **Antagonist**: Biceps brachii slappar av og vert strekt

Rollene er altsaa bytte om – kva muskel som er agonist avheng av kva bevegelse som utfoerast. Denne organiseringa i agonist-antagonist-par er noedvendig fordi ein muskel som har trukke seg saman, treng ein annan muskel for aa strekke seg tilbake til utgangslengda.

I tillegg finst det **synergister** – musklar som hjelper agonisten med bevegelesa – og **fiksatorar** – musklar som stabiliserer eit naboledd slik at agonisten kan jobbe effektivt.`,
    },
    {
      id: 'bio1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar korleis muskelkontraksjon skjer paa molekylaert nivaa. Bruk omgrepa aktin, myosin, sarkomer og kalsiumion i svaret ditt.',
        hints: ['Tenk paa kva som utloeser kontraksjonen og kva som skjer med filamenta', 'Kva rolle spelar ATP?'],
        solution: 'Muskelkontraksjon startar med eit nervesignal som faar muskelcella til aa frigjere kalsiumion (Ca²⁺) fraa sarkoplasmatisk retikulum. Kalsiumiona bind seg til proteinet troponin paa aktinfilamenta, noko som avdekkjer bindingsstadene paa aktin. Myosinhovuda (paa dei tjukke filamenta) bind seg til aktin og utfoerer ein kraftslag som dreg aktinfilamenta mot midten av sarkomeren. ATP bind seg til myosinhovudet, faar det til aa losne fraa aktin, og gjev energi til eit nytt kraftslag. Denne syklusen gjentek seg saa lenge Ca²⁺ og ATP er tilgjengelege. Resultatet er at sarkomeren forkortar seg – aktin- og myosinfilamenta glir langs kvarandre (glidefilamentmodellen). Naar nervestimuleringa stoppar, pumpast Ca²⁺ tilbake til sarkoplasmatisk retikulum, og muskelen slappar av.',
      },
    },
    {
      id: 'bio1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Kva for ein paastand om muskelkontraksjon er riktig?',
        options: [
          { id: 'a', text: 'Aktin- og myosinfilamenta glir langs kvarandre slik at sarkomeren vert kortare', isCorrect: true },
          { id: 'b', text: 'Aktin- og myosinfilamenta vert sjolve kortare under kontraksjon', isCorrect: false },
          { id: 'c', text: 'Muskelkontraksjon krev ikkje energi (ATP)', isCorrect: false },
          { id: 'd', text: 'Kalsiumion hemmar muskelkontraksjon', isCorrect: false },
        ],
        solution: 'Ifoelje glidefilamentmodellen glir aktin- og myosinfilamenta langs kvarandre – sjolve filamenta vert ikkje kortare. Sarkomeren (kontraksjonseininga) vert kortare fordi aktinfilamenta vert dregne mot midten. Prosessen krev ATP (energi) og vert utloest av kalsiumion som frigjerast fraa sarkoplasmatisk retikulum.',
      },
    },
    {
      id: 'bio1-3-4-def-3',
      type: 'definition',
      title: 'Sener og leddband',
      content: 'Sener er sterke baand av tett, fiberrikt bindevev som festar musklar til bein. Dei overforer kreftene fraa muskelkontraksjonen til skjelettet og moegeleggjer bevegelse. Leddband (ligament) er ogso baand av bindevev, men dei festar bein til bein over eit ledd. Leddbanda stabiliserer ledda og avgrensar bevegelsa slik at ledda ikkje vert overbevegde. Baade sener og leddband bestaar hovudsakleg av kollagenfibre, som gjev dei stor strekkstyrke.',
    },
    {
      id: 'bio1-3-4-example-3',
      type: 'example',
      title: 'Eksempel: Bein som levande vev',
      problem: 'Mange trur at bein er doedt materiale, men bein er faktisk levande vev. Forklar kvifor.',
      solution: `**Loesning:**

Bein er levande vev som stadig vert brote ned og bygd opp att (remodellering):

**Levande komponentar:**
- **Osteoblastar** – celler som bygger nytt bein ved aa produsere kollagen og mineralisere det med kalsiumfosfat
- **Osteocyttar** – modne beinceller innleira i beinmatriksen som kommuniserer med andre celler
- **Osteoklastar** – store celler som bryt ned bein ved aa frigjere syrer og enzym

**Beinets oppbygning:**
- **Organisk komponent** (ca. 35 %): Hovudsakleg kollagenfibre som gjev bein fleksibilitet og slagfastheit
- **Uorganisk komponent** (ca. 65 %): Hovudsakleg hydroksyapatitt (kalsiumfosfat) som gjev bein hardheit og trykkstyrke

**Remodellering:**
Osteoklastar bryt ned gammalt bein, og osteoblastar bygger nytt – ca. 10 % av skjelettet vert fornya kvart aar. Denne prosessen er regulert av hormon (paratyroideahormon, kalsitonin, vitamin D) og mekanisk belasting. Fysisk aktivitet stimulerer beinbygging – difor er veketberande trening viktig for aa forebyggje beinskjoerheit (osteoporose).`,
    },
    {
      id: 'bio1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Samanlikn dei tre typane muskelvev: skjelettmuskulatur, glatt muskulatur og hjartemuskulatur. Lag ei tabell som viser skilnader i utsjaanad, plassering og styring (viljestyrt/ikkje-viljestyrt).',
        hints: ['Tenk paa kvar kvar type finst, og om du kan styre dei bevisst'],
        solution: 'Skjelettmuskulatur: Tverrstripet moernster, lange fleirckjerna celler. Festa til skjelettet via sener. Viljestyrt – styrt av somatiske nervar. Eksempel: biceps, quadriceps. Glatt muskulatur: Ingen striper, spolforma celler med eitt kjerne. Finst i veggen til indre organ (tarm, blodaarer, urinblore, livmor). Ikkje-viljestyrt – styrt av det autonome nervesystemet. Eksempel: peristaltikk i tarmen. Hjartemuskulatur: Tverrstripet, forgreina celler med eitt–to kjerne, knytte saman av intercalerte skivar. Finst berre i hjartet. Ikkje-viljestyrt – sjolvstartande (sinusknuten), men regulert av autonome nervar. Hjartemuskulatur har unike eigenskapar: den er tverrstripet som skjelettmuskel, men automatisk som glatt muskel.',
      },
    },
    {
      id: 'bio1-3-4-summary',
      type: 'text',
      content: `## Oppsummering

Muskel- og skjelettsystemet gjev stoette, vern og bevegelse:

**Skjelettet (206 bein):**
- Aksialskjelettet: kraniet, ryggsoeyla, brystkassa
- Appendikulaerskjelettet: armar, bein og belta
- Bein er levande vev som stadig vert remodellert

**Ledd:**
- Synovialledd (fritt bevegelegge) er viktigast for bevegelse
- Typar: hengselledd, kuleledd, dreieledd m.fl.
- Leddband stabiliserer, sener festar muskel til bein

**Skjelettmuskulatur:**
- Kontraktile protein: aktin og myosin organisert i sarkomerar
- Glidefilamentmodellen: filamenta glir langs kvarandre
- Krev Ca²⁺ og ATP for kontraksjon

**Muskelsamarbeid:**
- Agonist utfoerer bevegelsa, antagonist motverkar
- Musklar jobbar alltid i par (t.d. biceps/triceps)

Forstainga av muskel- og skjelettsystemet er viktig for aa forstaa bevegelse, skadar og korleis fysisk aktivitet paaverkar kroppen.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Ein person bryt laarbeinet (femur) og faar gips i 8 veker. Etter at gipsen er fjerna, er musklane i det skadde beinet tydeleg tynnare enn i det friske beinet. Forklar kvifor dette skjer og kva som maa til for aa bygge opp musklane igjen.',
        hints: ['Tenk paa kva som skjer med musklar som ikkje vert brukte', 'Kva stimulerer muskeloppbygging?'],
        solution: 'Naar musklar ikkje vert brukte (immobilisert i gips), skjer muskelatrofi – muskelfibrene vert tynnare og svakare. Proteinnedbrytinga aukar og proteinoppbygginga minkar. Etter 8 veker kan muskelstorleiken vere betydeleg redusert. For aa bygge opp musklane igjen (rehabilitering) trengst progressiv styrketrening. Fysisk belasting stimulerer muskelcellene til aa auke proteinsyntesen, saerleg av aktin og myosin. Muskelfibrene vert tjukkare (hypertrofi), ikkje fleire. Full rehabilitering tek typisk 2–3 gonger saa lang tid som immobiliseringsperioden. I tillegg til muskelatrofi kan beintettheita i det immobiliserte beinet ha minka (bruksosteoporose), fordi bein ogso treng mekanisk belasting for aa oppretthalde styrken.',
      },
    },
    {
      id: 'bio1-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Kva er funksjonen til synovialvaeske (leddvaeske) i eit synovialledd?',
        options: [
          { id: 'a', text: 'Ho smoerer leddflata og reduserer friksjon mellom beina', isCorrect: true },
          { id: 'b', text: 'Ho festar beina til kvarandre over leddet', isCorrect: false },
          { id: 'c', text: 'Ho produserer raud blodceller for sirkulasjonssystemet', isCorrect: false },
          { id: 'd', text: 'Ho sender nervsignal mellom beina i leddet', isCorrect: false },
        ],
        solution: 'Synovialvaeske (leddvaeske) er ein viskoes vaeske som finst inne i leddkapselen i synovialledd. Hovudfunksjonane er: (1) Smoeering – reduserer friksjon mellom leddflatene ved bevegelse. (2) Stoetdemping – absorberer stoeyt og trykk. (3) Naering – leverer naeringstoffer til leddbrusken, som ikkje har eigne blodaarer. Leddbrusken faar naering ved diffusjon fraa synovialvaesken, og denne prosessen vert stimulert av bevegelse – endaa ein grunn til at fysisk aktivitet er viktig for leddhelse.',
      },
    },
    {
      id: 'bio1-3-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar kvifor rigor mortis (doedssstivheit) oppstaar etter doeden. Bruk kunnskapen din om muskelkontraksjon til aa forklare fenomenet.',
        hints: ['Tenk paa kva som trengst for at myosin skal loesne fraa aktin', 'Kva skjer med ATP-produksjonen naar ein person doer?'],
        solution: 'Etter doeden stoppar ATP-produksjonen fordi cellene ikkje lenger faar oksygen og naering. Ved muskelkontraksjon bind myosinhovuda seg til aktin og utfoerer eit kraftslag. For at myosinhovuda skal loesne fraa aktin og gjere muskelen klar for eit nytt slag (eller relaksasjon), maa eit nytt ATP-molekyl binde seg til myosinhovudet. Utan ATP forblir myosinhovuda fastklistra til aktin i ein permanent kontraksjon – dette er rigor mortis. Stivheita byrjar typisk 2–6 timar etter doeden og forsvinn att etter 24–72 timar naar nedbrytingsprosessar (autolyse) bryt ned muskelproteina.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Aksialskjelettet', definition: 'Kroppens sentrale akse: kraniet, ryggsoeyla og brystkassa' },
    { term: 'Appendikulaerskjelettet', definition: 'Lemmene (armar og bein) og belta som festar dei til aksialskjelettet' },
    { term: 'Synovialledd', definition: 'Fritt bevegelegge ledd med leddkapsel og synovialvaeske' },
    { term: 'Sarkomer', definition: 'Den funksjonelle kontraksjonseininga i skjelettmuskel, mellom to Z-liner' },
    { term: 'Glidefilamentmodellen', definition: 'Modell som forklarer kontraksjon ved at aktin og myosin glir langs kvarandre' },
    { term: 'Agonist', definition: 'Muskelen som utfoerer ein bestemt bevegelse' },
    { term: 'Antagonist', definition: 'Muskelen som motverkar agonisten og moegeleggjer motsett bevegelse' },
  ],
};

// ============================================================================
// Kapittel 3.5: Hud, sanser og kroppens beskyttelse
// ============================================================================

export const CHAPTER_BIOLOGI_1_3_5: TextbookChapter = {
  id: 'biologi-1-3-5',
  courseId: 'biologi-1',
  chapterNumber: '3.5',
  title: 'Hud, sanser og kroppens beskyttelse',
  description: 'Hudens oppbygning og funksjonar, sanseceller og sanseorgan, temperaturregulering og refleksbuar.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive hudens oppbygning og forklare dei viktigaste funksjonane til huda',
    'gjore rede for ulike typar sanseceller og sansereseeptorar i huda',
    'forklare korleis huda bidreg til temperaturregulering og beskyttelse',
    'beskrive refleksbuen og forklare betydninga av refleksar for kroppens beskyttelse',
  ],
  content: [
    {
      id: 'bio1-3-5-intro',
      type: 'text',
      content: `# Hud, sanser og kroppens beskyttelse

Huda er kroppens stoerste organ – hos ein vaksen person dekker ho ca. 1,5–2 m² og veg 3–4 kg. Huda er langt meir enn berre eit dekke – ho er ein aktiv barriere som vernar kroppen, regulerer temperaturen, produserer vitamin D og inneheld eit rikt nettverk av sansereseeptorar.

## Hudens oppbygning

Huda bestaar av tre hovudlag:

### Overhuda (epidermis)
- Det ytste laget, 0,05–1,5 mm tjukt (tjukkast paa handflater og fotsolar).
- Bestaar av fleirlagd plateepitel. Cellene vert danna i det djupaste laget (basallaget) og skyva oppover etter kvart som nye celler vert danna under.
- Paa veg oppover fylst cellene med proteinet **keratin** og doer – det ytste laget (hornlaget) bestaar av doede, keratinfylte celler som stadig skallast av.
- Inneheld **melanocyttar** som produserer pigmentet melanin, som gjev huda farge og vernar mot UV-straaling.
- Har ingen blodaarer – faar naering fraa laederhuda under.

### Laederhuda (dermis)
- Under overhuda, 1–4 mm tjukt.
- Bestaar av bindevev med kollagen- og elastinfibre som gjev huda styrke og elastisitet.
- Inneheld blodaarer, nervar, haarsekker, svettekjertlar, talgkjertlar og sansereseeptorar.
- Fingeravtrykka vaare skuldast moensteret av papillar (utbuktningar) i overgangen mellom overhud og laederhud.

### Underhuda (subcutis/hypodermis)
- Det djupaste laget, bestaar hovudsakleg av feittvev.
- Fungerer som isolasjon mot varmetap, stoetdempar og energireserve.
- Festar huda til underliggjande musklar og bein.

## Hudens funksjonar

Huda har mange viktige funksjonar:

- **Barriere**: Vernar mot mikroorganismar, kjemikaliar, UV-straaling og mekanisk skade
- **Temperaturregulering**: Blodaarene og svettekjertlane regulerer varmetap
- **Sensorisk organ**: Inneheld reseeptorar for beroring, trykk, temperatur og smerte
- **Vitamin D-syntese**: UV-B-straaling i sollys omdannar eit forstadie i huda til vitamin D
- **Uttskiljing**: Svette inneheld vatn, salt og noko avfallsstoff
- **Immunforsvar**: Langerhansceller i epidermis er del av immunforsvaret`,
    },
    {
      id: 'bio1-3-5-def-1',
      type: 'definition',
      title: 'Sansereseeptorar i huda',
      content: 'Huda inneheld fleire typar sansereseeptorar (sanseceller) som registrerer ulike stimuli: Meissners legeme registrerer lett beroring (finst i papillane, saerleg i fingertuppar). Pacinis legeme registrerer djupt trykk og vibrasjon (finst i laederhuda og underhuda). Ruffinis legeme registrerer strekk i huda. Frie nerveendar registrerer smerte (nocireseptorar) og temperatur (termoreseptorar). Merkelceller registrerer vedvarande trykk. Tettleiken av reseptorar varierer – fingertuppane og leppene har flest, medan ryggen har faerrest.',
    },
    {
      id: 'bio1-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Temperaturregulering via huda',
      problem: 'Forklar korleis huda bidreg til temperaturregulering naar kroppstemperaturen stig (t.d. ved trening) og naar den synk (t.d. i kulde).',
      solution: `**Loesning:**

**Naar kroppstemperaturen stig:**
Hypothalamus registrerer at blodtemperaturen er over setpunktet (ca. 37 °C) og sender signal som utloeser:

1. **Vasodilatasjon** – blodaarene i laederhuda utvidar seg. Meir blod stroeymer nair hudoverflata, og varme avgjevast til omgjevnadene via straaling og konveksjon. Huda vert raudare.
2. **Svetteproduksjon** – svettekjertlane produserer svette som fordampar fraa hudoverflata. Fordamping krev energi (varme), saa kroppen kjoelast ned. Ein person kan svette opptil 2 liter per time ved intens aktivitet.

**Naar kroppstemperaturen synk:**
Hypothalamus registrerer at blodtemperaturen er under setpunktet og sender signal som utloeser:

1. **Vasokonstriksjon** – blodaarene i laederhuda trekkjer seg saman. Mindre blod naar hudoverflata, saa mindre varme tapast. Huda vert blakare.
2. **Gaasehud** – smaa musklar (arrector pili) trekkjer haarsekkjane opp. Hos dyr fangar oppreist pels eit isolerande luftlag, men hos menneske er effekten minimal.
3. **Skjelving** – ufrivillige, raske muskelkontraksjoner som produserer varme.

Dette er eit klassisk eksempel paa negativ tilbakekobling i homeostase.`,
    },
    {
      id: 'bio1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Kva for eit lag av huda inneheld blodaarer, svettekjertlar og sansereseeptorar?',
        options: [
          { id: 'a', text: 'Laederhuda (dermis)', isCorrect: true },
          { id: 'b', text: 'Overhuda (epidermis)', isCorrect: false },
          { id: 'c', text: 'Underhuda (subcutis)', isCorrect: false },
          { id: 'd', text: 'Hornlaget', isCorrect: false },
        ],
        solution: 'Laederhuda (dermis) er det midterste laget av huda og inneheld blodaarer, nervar, haarsekker, svettekjertlar, talgkjertlar og sansereseeptorar. Overhuda (epidermis) har ingen blodaarer og bestaar hovudsakleg av epitelceller. Underhuda (subcutis) bestaar hovudsakleg av feittvev og fungerer som isolasjon og energilager.',
      },
    },
    {
      id: 'bio1-3-5-def-2',
      type: 'definition',
      title: 'Refleksbue',
      content: 'Ein refleksbue er den nervebanen som ligg til grunn for ein refleks – ein rask, automatisk og uvilleleg respons paa ein stimulus. Ein enkel refleksbue bestaar av fem komponentar: (1) Reseptor – sansecelle som registrerer stimulus (t.d. smertereseeptor i fingeren). (2) Sensorisk nerve (afferent) – foerer signalet til sentralnervesystemet. (3) Integrasjonssenter – vanlegvis i ryggmargen, der signalet vert prosessert. (4) Motorisk nerve (efferent) – foerer responssignalet til effektoren. (5) Effektor – utfoerer responsen (t.d. ein muskel som trekkjer handa bort).',
    },
    {
      id: 'bio1-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Trekkje-bort-refleksen',
      problem: 'Du rorer ved ein varm komfyr og trekkjer handa bort foer du kjenner smerte. Forklar korleis denne refleksen fungerer.',
      solution: `**Loesning:**

Trekkje-bort-refleksen (withdrawal reflex) er ein beskyttelsesrefleks som hindrar vevsksade:

1. **Reseptor**: Smertereseeptorar (nocireseptorar) i fingerhuda registrerer den skadelege varmen.

2. **Sensorisk nerve**: Signalet sendast langs ein sensorisk nervefiber til ryggmargen.

3. **Integrasjonssenter**: I ryggmargen koplar den sensoriske nerva seg paa ein internervon (mellomnervcelle), som koplar vidare til ein motorisk nervecelle. Signalet treng ikkje gaa via hjernen – det prosesserast lokalt i ryggmargen.

4. **Motorisk nerve**: Den motoriske nervcella sender signal til musklane i armen.

5. **Effektor**: Boeygjemusklane i armen kontraherer og trekkjer handa bort fraa den varme flata.

**Kvifor kjenner du smerta foerst etterpaa?**
Refleksen gaar direkte gjennom ryggmargen og tek berre ca. 0,05 sekund. Samstundes vert signalet ogso sendt vidare opp til hjernen via stigande nervebaner, men dette tek lenger tid. Difor trekkjer du handa bort foer du bevisst opplever smerta. Denne organiseringa er livsviktig – aa vente paa at hjernen prosesserer smerta foer du handlar, ville gi alvorlegare brannskadar.`,
    },
    {
      id: 'bio1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar kvifor melanin er viktig for huda, og beskriv samanhengen mellom UV-straaling og melaninproduksjon.',
        hints: ['Tenk paa kva UV-straaling kan gjere med DNA i hudcellene', 'Kvifor vert folk brunare i sola?'],
        solution: 'Melanin er eit pigment som produserast av melanocyttar i basallaget av epidermis. Melanin absorberer UV-straaling og hindrar at den trengjer djupt inn i huda og skadar DNA i dei delande cellene. Naar huda vert eksponert for UV-straaling, aukar melanocyttane produksjonen av melanin – dette er bruninga vi ser etter soling. Melaninet vert overfoert til naboande keratinocyttar og legg seg som ein «parasoll» over cellekjernane for aa verne DNA. Menneske med meir melanin (moerkare hudtype) har betre naturleg vern mot UV-skadar. Utan tilstrekkeleg melaninvern kan UV-straaling skade DNA og auke risikoen for hudkreft (melanom). Solkrem vernar ved aa absorbere eller reflektere UV-straaling.',
      },
    },
    {
      id: 'bio1-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Kva skjer med blodaarene i huda naar kroppstemperaturen stig?',
        options: [
          { id: 'a', text: 'Dei utvidar seg (vasodilatasjon) slik at meir varme avgjevast', isCorrect: true },
          { id: 'b', text: 'Dei trekkjer seg saman (vasokonstriksjon) for aa halde paa varmen', isCorrect: false },
          { id: 'c', text: 'Dei vert ikkje paaverka av endringar i kroppstemperaturen', isCorrect: false },
          { id: 'd', text: 'Dei sluttar aa frakte blod til huda', isCorrect: false },
        ],
        solution: 'Naar kroppstemperaturen stig, utvidar blodaarene i laederhuda seg (vasodilatasjon). Dette aukar blodstraumen til hudoverflata, slik at meir varme kan avgjevast til omgjevnadene via straaling og konveksjon. Huda vert raudare og varmare. Dette er ein av kroppens viktigaste mekanismar for aa kjoele seg ned. Naar temperaturen synk, skjer det motsette – vasokonstriksjon reduserer blodstraumen til huda og minimerer varmetapet.',
      },
    },
    {
      id: 'bio1-3-5-def-3',
      type: 'definition',
      title: 'Nocireseptorar (smertereseeptorar)',
      content: 'Nocireseptorar er frie nerveendar som registrerer potensielt skadelege stimuli – sterk varme eller kulde, mekanisk skade og kjemiske stoff fraa skadd vev. Smerte er eit viktig varselssignal som motiverer oss til aa trekke oss bort fraa faren. Det finst to hovudtypar smertefibre: A-delta-fibre (raske, skarpe smerter – «foerste smerte») og C-fibre (langsame, verkande smerter – «andre smerte»). Nocireseptorar finst i huda, musklar, ledd, indre organ og dei fleste andre vev.',
    },
    {
      id: 'bio1-3-5-example-3',
      type: 'example',
      title: 'Eksempel: Sansar i samspel – aa halde ein kaffekopp',
      problem: 'Forklar kva for sansereseptorar i handa som er aktive naar du held ein kaffekopp, og kvifor dette samspelet er viktig.',
      solution: `**Loesning:**

Naar du held ein kaffekopp, er fleire typar sansereseeptorar aktive samstundes:

1. **Meissners legeme og Merkelceller** – registrerer beroring og trykk fraa koppen mot fingrane. Gjev deg informasjon om koppens overflate og kor hardt du grip.

2. **Termoreseptorar** – registrerer temperaturen paa koppen. Varmereseptorar fortel deg at koppen er varm, slik at du kan justere grepet eller skifte hand.

3. **Pacinis legeme** – registrerer vibrasjonar. Dersom koppen byrjar aa gli, registrerer desse reseptoane vibrasjonane og sender signal som faar deg til aa stramme grepet.

4. **Proprioreseptorar** (i musklar og sener) – gjev informasjon om posisjonen til handa og kor mykje kraft musklane brukar.

5. **Nocireseptorar** – dersom koppen er for varm, utloeser smertesignala ein refleks som faar deg til aa sleppe eller skifte grep.

**Kvifor er samspelet viktig?**
Utan dette samspelet ville du ikkje kunne regulere grepstyrken, du ville brenne deg utan aa merke det, eller du ville miste koppen fordi du ikkje registrerte at den glei. Sanseintegrasjon – hjernens evne til aa kombinere informasjon fraa mange reseptorar samstundes – er avgjerande for daglegdagse handlingar vi tek for gjevne.`,
    },
    {
      id: 'bio1-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Teikn eller beskriv ein refleksbue for knerefleksen (patellarefleksen). Identifiser alle fem komponentane.',
        hints: ['Knerefleksen er ein strekkjefleks – kva skjer naar legen slaar under kneskjela?', 'Denne refleksen har berre to nevronar – det er ein monosynaptisk refleks'],
        solution: 'Knerefleksen (patellarefleksen): (1) Reseptor: Muskelspolar i quadricepsmuskelen registrerer at muskelen vert strekt naar legen slaar paa patellasena rett under kneskjela. (2) Sensorisk nerve: Eit sensorisk nevron foerer signalet fraa muskelspolen til ryggmargen. (3) Integrasjonssenter: I ryggmargen koplar den sensoriske nervecella seg direkte paa ein motorisk nervecelle – ingen internervon (monosynaptisk refleks). (4) Motorisk nerve: Den motoriske nervecella sender signal tilbake til quadricepsmuskelen. (5) Effektor: Quadricepsmuskelen kontraherer og strekkjer kneet – beinet sparkar framover. Knerefleksen er ein viktig klinisk test fordi den viser at dei sensoriske og motoriske nervane og ryggmargen fungerer normalt paa det aktuelle nivaet.',
      },
    },
    {
      id: 'bio1-3-5-summary',
      type: 'text',
      content: `## Oppsummering

Huda er kroppens stoerste organ og har mange viktige funksjonar:

**Hudens oppbygning:**
- Overhuda (epidermis) – keratinisert epitelcvev, melanocyttar
- Laederhuda (dermis) – bindevev med blodaarer, nervar, kjertlar
- Underhuda (subcutis) – feittvev for isolasjon og energi

**Sansereseeptorar i huda:**
| Reseptor | Stimulus | Plassering |
|----------|----------|------------|
| Meissners legeme | Lett beroring | Papillar i dermis |
| Pacinis legeme | Djupt trykk, vibrasjon | Djup dermis/subcutis |
| Ruffinis legeme | Strekk | Dermis |
| Merkelceller | Vedvarande trykk | Basallaget av epidermis |
| Frie nerveendar | Smerte, temperatur | Overalt i huda |

**Temperaturregulering:**
- Varme: vasodilatasjon + svetteproduksjon
- Kulde: vasokonstriksjon + gaasehud + skjelving

**Refleksar:**
- Raske, automatiske responsar via refleksbuar
- Vernar kroppen mot skade (t.d. trekkje-bort-refleksen)
- Prosesserast i ryggmargen – raskare enn bevisst respons

Huda, saman med sansecellene, utgjer kroppens fyrste forsvarslinje og eit viktig grensesnitt mellom den indre og ytre verda.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Ein person med diabetes kan utvikle nedsett foelesans i foettene (diabetisk nevropati). Forklar kvifor dette er farleg og korleis det heng saman med sansereseeptorane i huda.',
        hints: ['Tenk paa kva sansereseeptorane normalt varslar om', 'Kva skjer dersom du ikkje kjenner smerte i foten?'],
        solution: 'Ved diabetisk nevropati skader hoegt blodsukker over tid dei perifere nervane, saerleg dei smaa nervefibrene i foettene. Nocireseptorane (smertereseeptorane) og termoreseptoane fungerer ikkje lenger normalt. Dette er farleg fordi personen ikkje kjenner smerte fraa trykkpunkt, skavankar i sko, smaa saar eller brannskadar. Utan smertesignalet oppdagar ikkje personen skaden, og saara kan bli infiserte og forverrast. I kombinasjon med daarleg blodsirkulasjon (som ogso er vanleg ved diabetes) heler saara sakte. I alvorlege tilfelle kan dette foere til alvorlege infeksjonar og i verste fall amputasjon. Difor er dagleg fotinspeksjon og godt fottoy svart viktig for personar med diabetes.',
      },
    },
    {
      id: 'bio1-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Kva for ein komponent i refleksbuen prosesserer signalet og bestemmer responsen?',
        options: [
          { id: 'a', text: 'Integrasionssenteret (vanlegvis ryggmargen)', isCorrect: true },
          { id: 'b', text: 'Reseptoren', isCorrect: false },
          { id: 'c', text: 'Den sensoriske nerva', isCorrect: false },
          { id: 'd', text: 'Effektoren', isCorrect: false },
        ],
        solution: 'Integrasjonssenteret (vanlegvis i ryggmargen for spinale refleksar) er der det sensoriske signalet vert prosessert og ein respons vert bestemt. I ein enkel refleks kopler den sensoriske nervecella seg paa ein motorisk nervecelle (eventuelt via ein internervon). Reseptoren registrerer stimulus, den sensoriske nerva foerer signalet til integrasjonssenteret, den motoriske nerva foerer responssignalet ut, og effektoren utfoerer responsen.',
      },
    },
    {
      id: 'bio1-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar kvifor vi "venner oss til" kleda vi har paa oss – det vil seie at vi etter ei stund ikkje lenger kjenner kontakten mellom kleda og huda. Bruk omgrepet sensorisk adaptasjon i svaret ditt.',
        hints: ['Tenk paa kva som skjer med sansereseeptorane naar dei vert stimulerte over lang tid', 'Kvifor er det hensiktsmessig at vi ikkje stadig kjenner kleda vaare?'],
        solution: 'Sensorisk adaptasjon er fenomenet der sansereseeptorar gradvis reduserer sin respons paa ein vedvarande, uendra stimulus. Naar du tek paa deg klede, registrerer beroeringsreseptorane i huda (Meissners legeme, Merkelceller) kontakten mellom stoff og hud. Men ettersom stimulusen er konstant og uendra, sluttar reseptoane gradvis aa sende signal – dei adapterer. Etter kort tid merkar du ikkje lenger kleda. Dette er hensiktsmessig fordi det gjer at nervesystemet kan fokusere paa nye og potensielt viktige stimuli i staden for aa verte oversvoemd med irrelevant informasjon. Merk at nocireseptorar (smertereseeptorar) adapterer svart lite – dette er viktig fordi smerte varslar om potensiell skade og bor ikkje ignorerast.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Epidermis', definition: 'Overhuda – det ytste hudlaget med keratiniserte epitelceller og melanocyttar' },
    { term: 'Dermis', definition: 'Laederhuda – bindevev med blodaarer, nervar, kjertlar og sansereseeptorar' },
    { term: 'Melanin', definition: 'Pigment produsert av melanocyttar som vernar huda mot UV-straaling' },
    { term: 'Nocireseptor', definition: 'Smertereseeptor – fri nerveende som registrerer potensielt skadelege stimuli' },
    { term: 'Refleksbue', definition: 'Nervebanen fraa reseptor via integrasjonssenter til effektor i ein refleks' },
    { term: 'Sensorisk adaptasjon', definition: 'Gradvis redusert respons fraa sansereseeptorar paa ein vedvarande stimulus' },
    { term: 'Vasodilatasjon', definition: 'Utvidning av blodaarer – aukar blodstraum og varmetap gjennom huda' },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const BIOLOGI_1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_3_1,
  CHAPTER_BIOLOGI_1_3_2,
  CHAPTER_BIOLOGI_1_3_3,
  CHAPTER_BIOLOGI_1_3_4,
  CHAPTER_BIOLOGI_1_3_5,
];
