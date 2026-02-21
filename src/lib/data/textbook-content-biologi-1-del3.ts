/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Del 3: Anatomi og fysiologi
 *
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 * Kapittel 3.1-3.5: Kroppens organisering, fordøyelse og ernæring,
 * sirkulasjon og gassutveksling, muskel- og skjelettsystemet,
 * hud, sanser og kroppens beskyttelse
 *
 * Kompetansemål: Eleven skal kunne gjøre rede for oppbygningen og
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
  description: 'Fra celler til organsystemer – dei fire vevstypane og korleis kroppen er bygd opp i organisasjonsnivåer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive organisasjonsnivåene i kroppen: celler, vev, organer, organsystemer, organisme',
    'gjøre rede for dei fire hovudtypane av vev og deira funksjonar',
    'forklare samanhengen mellom struktur og funksjon i ulike vevstypar',
  ],
  content: [
    {
      id: 'bio1-3-1-intro',
      type: 'text',
      content: `# Kroppens organisering

Menneskekroppen er bygd opp av omtrent 37 billionar celler. Desse cellene er ikkje tilfeldig plasserte – dei er organiserte i lag på lag av strukturar med aukande kompleksitet. For å forstå korleis kroppen fungerer, må vi kjenne til organisasjonsnivåene som bygger opp kroppen.

## Organisasjonsnivåene

Kroppen kan beskrivast på fem nivåer:

1. **Celler** – den minste levande eininga i kroppen. Ulike celletypar har ulik form og funksjon.
2. **Vev** – grupper av like celler som samarbeider om ei felles oppgåve. Det finst fire hovudtypar av vev.
3. **Organer** – strukturar som består av to eller fleire vevstypar som samarbeider. Eksempel: hjartet består av muskelvev, bindevev, nervevev og epitelvev.
4. **Organsystem** – grupper av organer som samarbeider om ein overordna funksjon. Eksempel: fordøyelsessystemet.
5. **Organisme** – alle organsystema fungerer saman og utgjer ein heil organisme.

Kvart nivå bygger på det føregåande. Celler med liknande funksjon dannar vev, ulike vev bygger opp organer, og organer samarbeider i organsystem. Denne hierarkiske organiseringa er ein grunntanke i anatomien.

## Cellens tilpassing

Cellene i kroppen er spesialiserte – det betyr at dei har utvikla særlege eigenskapar som gjer dei eigna til bestemte oppgåver. Ei muskelcelle er lang og tynn slik at ho kan trekke seg saman, medan ei nervecelle har lange utløpar for å sende signal over store avstandar. Ei epitelcelle i tarmen har mikrovilli på overflata for å auke absorpsjonsarealet. Denne spesialiseringa er avgjerande for at kroppen skal fungere.

## Dei fire vevstypane

Alt vev i menneskekroppen kan klassifiserast i fire hovudtypar:

- **Epitelvev** (dekkevev) – dekker overflater og kler holrom
- **Bindevev** – gjev støtte, samanbinding og transport
- **Muskelvev** – kan trekke seg saman og gjev bevegelse
- **Nervevev** – sender elektriske signal og koordinerer kroppsfunksjonar

Alle organer i kroppen er bygde opp av kombinasjonar av desse fire vevstypane, men i ulike mengdeforhold avhengig av organets funksjon.`,
    },
    {
      id: 'bio1-3-1-def-1',
      type: 'definition',
      title: 'Vev',
      content: 'Vev er ei samling av celler med lik struktur og funksjon, saman med mellomcellesubstans (ekstracellulærmatriks). Kroppen har fire hovudtypar av vev: epitelvev (dekkevev), bindevev, muskelvev og nervevev. Alle organer er bygde opp av kombinasjonar av desse fire vevstypane. Mellomcellesubstansen varierer sterkt mellom vevstypane – frå nesten fråverande i epitelvev til dominerande i bindevev.',
    },
    {
      id: 'bio1-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Magesekken som organ',
      problem: 'Forklar korleis magesekken illustrerer samspelet mellom ulike vevstypar i eit organ.',
      solution: `**Løysing:**

Magesekken er eit organ som inneheld alle fire vevstypar:

- **Epitelvev**: Kler innsida av magesekken. Epitelcellene produserer slim som vernar slimhinna mot saltsyre, og kjertleceller skil ut saltsyre og enzymet pepsinogen.
- **Bindevev**: Gjev støtte og held dei andre vevstypane saman. Inneheld blodårer som forsyner magesekken med næring og oksygen.
- **Muskelvev**: Tre lag med glatt muskulatur (långs, sirkulært og skråt) som blandar og eltar maten (peristaltikk).
- **Nervevev**: Nervefibre i veggen styrer muskelkontraksjonen og regulerer kjertelsekresjon via det autonome nervesystemet.

Samspelet mellom desse fire vevstypane gjer at magesekken kan utføre sin funksjon: mekanisk og kjemisk nedbryting av mat.`,
    },
    {
      id: 'bio1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Kva er riktig rekkjefølgje av organisasjonsnivåene i kroppen, frå lågest til høgst?',
        options: [
          { id: 'a', text: 'Celle → vev → organ → organsystem → organisme', isCorrect: true },
          { id: 'b', text: 'Vev → celle → organ → organisme → organsystem', isCorrect: false },
          { id: 'c', text: 'Celle → organ → vev → organsystem → organisme', isCorrect: false },
          { id: 'd', text: 'Organsystem → organ → vev → celle → organisme', isCorrect: false },
        ],
        solution: 'Den riktige rekkjefølgja er celle → vev → organ → organsystem → organisme. Celler er den minste levande eininga. Celler med same funksjon dannar vev, ulike vev bygger opp organer, organer samarbeider i organsystem, og alle organsystema saman utgjer organismen.',
      },
    },
    {
      id: 'bio1-3-1-def-2',
      type: 'definition',
      title: 'Epitelvev (dekkevev)',
      content: 'Epitelvev dekker overflater og kler holrom i kroppen. Det dannar huda, slimhinner og kjertlar. Epitelvev er tett pakka med lite mellomcellesubstans, og cellene sit på ei basalmembran. Epitelvev har inga eigne blodårer – næring diffunderer frå underliggjande bindevev. Epitelvev har høg fornyingsevne fordi cellene deler seg hyppig. Typar epitelvev inkluderer fleirlagd plateepitel (hud), einlagd sylinderepitel (tarm) og einlagd kubisk epitel (nyretubuli).',
    },
    {
      id: 'bio1-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Bindevev – stor variasjon',
      problem: 'Forklar kvifor blod, bein og feittvev alle reknast som bindevev, trass i at dei ser svært ulike ut.',
      solution: `**Løysing:**

Alle tre vevstypar deler det viktigaste kjenneteiknet til bindevev: cellene ligg spreidde i ein stor mengde mellomcellesubstans (ekstracellulærmatriks).

- **Blod**: Cellene (raude og kvite blodceller, blodplater) flyt fritt i ei flytande mellomcellesubstans – plasma. Blod vert difor kalla flytande bindevev.
- **Bein**: Beincellene (osteocyttar) er innleira i ei hard, mineralisert mellomcellesubstans av kalsiumfosfat og kollagenfibre. Den harde matriksen gjev skjelettet styrke.
- **Feittvev**: Feittcellene (adipocyttar) er store celler fylte med feitdropar, omgjevne av laust bindevev med kollagenfibre.

Fellesnemaren er at cellene utgjer ein relativt liten del av vevet, og mellomcellesubstansen dominerer – men matriksen har svært ulik konsistens (flytande, halvfast eller hard) avhengig av funksjonen.`,
    },
    {
      id: 'bio1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gjer greie for dei tre typane muskelvev: skjelettmuskulatur, glatt muskulatur og hjartemuskulatur. For kvar type, beskriv korleis cellene ser ut, kvar vevet finst, og om det er viljestyrt eller ikkje.',
        hints: ['Viljestyrt betyr at du kan styre det med viljen – tenk på kva musklar du kan kontrollere bevisst', 'Tverrstripet betyr at cellene har eit stripemønster under mikroskop'],
        solution: 'Skjelettmuskulatur: Lange, fleirkjerna celler med tverrstripet mønster. Festa til skjelettet via sener. Viljestyrt – vi kan bevisst bestemme å bevege armane, beina osv. Ansvarleg for viljestyrte bevegelser. Glatt muskulatur: Spolforma celler med eitt kjerne, utan tydelege striper. Finst i veggen til indre organ som magesekk, tarm, blodårer og urinblære. Ikkje-viljestyrt – styrt av det autonome nervesystemet. Ansvarleg for t.d. peristaltikk. Hjartemuskulatur: Forgreina celler med eitt eller to kjerner, tverrstripete. Cellene er knytte saman med intercalerte skivar som overfører elektriske signal. Finst berre i hjartet. Ikkje-viljestyrt – hjartet slår automatisk. Kombinerer eigenskapar frå begge dei andre typane: tverrstripet som skjelettmuskel, men sjølvstartande som glatt muskel.',
      },
    },
    {
      id: 'bio1-3-1-def-3',
      type: 'definition',
      title: 'Organsystem',
      content: 'Eit organsystem er ei samling av organer som samarbeider om ein overordna funksjon. Menneskekroppen har fleire organsystem, mellom anna: sirkulasjonssystemet (hjarte og blodårer), respirasjonssystemet (lunger og luftvegar), fordøyelsessystemet (frå munn til endetarm), nervesystemet (hjerne, ryggmarg og nervar), hormonsystemet (endokrine kjertlar), muskel-skjelettsystemet, urinsystemet (nyrer og urinvegar), immunsystemet, og det integumentære systemet (hud). Organsystema er ikkje uavhengige – dei påverkar kvarandre stadig.',
    },
    {
      id: 'bio1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Kva for ein vevstype har inga eigne blodårer og får næring ved diffusjon?',
        options: [
          { id: 'a', text: 'Epitelvev', isCorrect: true },
          { id: 'b', text: 'Bindevev', isCorrect: false },
          { id: 'c', text: 'Muskelvev', isCorrect: false },
          { id: 'd', text: 'Nervevev', isCorrect: false },
        ],
        solution: 'Epitelvev har inga eigne blodårer (det er avaskulært). Næring og oksygen diffunderer frå blodårene i det underliggjande bindevevet, gjennom basalmembranen og inn i epitelcellene. Difor kan epitelvev ikkje vere for tjukt – cellene lengst frå blodforsyninga må framleis få nok næring.',
      },
    },
    {
      id: 'bio1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nervevev består av nerveceller og støtteceller. Beskriv oppbygningen av ei nervecelle og forklar kvifor nerveceller er forma slik dei er.',
        hints: ['Nerveceller har ein cellekropp, dendrittar og eit akson', 'Tenk på samanhengen mellom struktur og funksjon'],
        solution: 'Nervevev består av nerveceller (nevronar) og støtteceller (gliaceller). Ei nervecelle har ein cellekropp med cellekjerne, korte utløpar kalla dendrittar som tek imot signal frå andre celler, og eitt langt utløpar kalla akson som sender signal vidare. Nokre akson er dekte av ei myelinskjede (danna av gliaceller) som aukar signalhastigheita. Forma er tilpassa funksjonen: dei lange aksona gjer at signal kan sendast over store avstandar (opptil 1 meter frå ryggmarg til fot), og forgreininga av dendrittane gjer at ei nervecelle kan ta imot signal frå mange hundre andre celler samstundes. Gliacellene støttar, isolerer og nærer nervecellene.',
      },
    },
    {
      id: 'bio1-3-1-summary',
      type: 'text',
      content: `## Oppsummering

Kroppen er organisert i fem nivåer: celler, vev, organer, organsystem og organisme. Dei fire hovudtypane av vev er:

| Vevstype | Kjenneteikn | Eksempel |
|----------|-------------|----------|
| Epitelvev | Tett pakka celler, dekker overflater | Hud, slimhinner, kjertlar |
| Bindevev | Mykje mellomcellesubstans | Bein, brusk, blod, feittvev |
| Muskelvev | Celler som kan trekke seg saman | Skjelettmuskel, glatt muskel, hjartemuskel |
| Nervevev | Celler som sender elektriske signal | Hjerne, ryggmarg, nervar |

Kvart organ er bygd opp av fleire vevstypar. Organer med relaterte funksjonar dannar organsystem. Alle organsystema samarbeider for å oppretthalde liv og helse.

Forståinga av desse organisasjonsnivåene er grunnleggjande for resten av anatomien og fysiologien. I dei neste kapitla skal vi sjå nærmare på korleis kvart enkelt organsystem er bygd opp og fungerer.`,
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
        hints: ['Tenk på kva funksjonar organet har, og kva vevstypar som trengst for kvar funksjon'],
        solution: 'Eksempel med hjartet: Epitelvev (endokard) kler innsida av hjartekammera og hindrar blodpropp. Muskelvev (myokard) utgjer hovuddelen av hjartveggen – hjartamuskelceller trekkjer seg saman rytmisk og pumpar blod. Bindevev dannar hjartesekkjen (perikard), hjarteventilane og inneheld blodårer (koronararene) som forsyner hjartamuskelen. Nervevev styrer hjarterytmen via det autonome nervesystemet og leidingssystemet (sinusknuten, AV-knuten). Samspelet mellom desse fire vevstypane gjer at hjartet kan pumpe blod effektivt.',
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
        solution: 'Muskelvev kjennest på at cellene (muskelfibre) kan trekke seg saman (kontrahera) og dermed skape bevegelse. Det finst tre typar muskelvev: skjelettmuskulatur (viljestyrt, tverrstripet), glatt muskulatur (ikkje-viljestyrt, finst i indre organ) og hjartemuskulatur (tverrstripet, ikkje-viljestyrt, finst berre i hjartet).',
      },
    },
    {
      id: 'bio1-3-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar kvifor cellespesialisering er nødvendig i ein fleircella organisme som mennesket. Kva hadde skjedd om alle cellene var like?',
        hints: ['Tenk på effektivitet og arbeidsdeling', 'Samanlikn med eit samfunn der alle har ulike yrke kontra eitt der alle gjer det same'],
        solution: 'Cellespesialisering er nødvendig fordi ulike oppgåver krev ulike eigenskapar. Ei muskelcelle må kunne trekke seg saman, ei nervecelle må sende signal raskt, og ei epitelcelle må danne ein tett barriere. Dersom alle cellene var like, ville ingen av dei utføre nokon av desse oppgåvene optimalt. Spesialisering gjev arbeidsdeling – kvar celletype er ekstremt god på sin oppgåve. Kostnaden ved spesialisering er at cellene vert avhengige av kvarandre – ei nervecelle kan ikkje sjølv skaffe seg næring, og ei muskelcelle kan ikkje sende signal. Difor treng kroppen eit transportsystem (blod) og kommunikasjonssystem (nervar og hormon) for å koordinere alle dei spesialiserte cellene.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Vev', definition: 'Samling av celler med lik struktur og funksjon pluss mellomcellesubstans' },
    { term: 'Epitelvev', definition: 'Dekkevev som kler overflater og holrom, tett pakka celler på basalmembran' },
    { term: 'Bindevev', definition: 'Vev med mykje mellomcellesubstans som gjev støtte og samanbinding' },
    { term: 'Muskelvev', definition: 'Vev med celler som kan trekke seg saman og skape bevegelse' },
    { term: 'Nervevev', definition: 'Vev med nerveceller som sender elektriske signal' },
    { term: 'Organsystem', definition: 'Gruppe av organer som samarbeider om ein overordna funksjon' },
    { term: 'Cellespesialisering', definition: 'At celler utviklar særlege eigenskapar tilpassa bestemte oppgåver' },
  ],
};

// ============================================================================
// Kapittel 3.2: Fordoeyelse og ernæring
// ============================================================================

export const CHAPTER_BIOLOGI_1_3_2: TextbookChapter = {
  id: 'biologi-1-3-2',
  courseId: 'biologi-1',
  chapterNumber: '3.2',
  title: 'Fordøyelse og ernæring',
  description: 'Fordøyelseskanalen frå munn til endetarm, enzymer, næringsopptak og regulering av fordøyelsen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive fordøyelseskanalens oppbygning og funksjonen til dei ulike delane',
    'forklare korleis enzymer bryt ned næringsstoffer og korleis næringsopptak skjer i tynntarmen',
    'gjøre rede for dei ulike næringsstoffgruppene og deira funksjonar i kroppen',
    'forklare korleis fordøyelsen vert regulert av nervar og hormon',
  ],
  content: [
    {
      id: 'bio1-3-2-intro',
      type: 'text',
      content: `# Fordøyelse og ernæring

Maten vi et inneheld store, komplekse molekyl som kroppen ikkje kan ta opp direkte. Fordøyelsessystemet har som hovudoppgåve å bryte ned næringsstoffer til små nok molekyl til at dei kan absorberast gjennom tarmveggen og fraktast til cellene der dei trengst.

## Fordøyelseskanalens oppbygning

Fordøyelseskanalen er eit samanhengande rør som strekkjer seg frå munnen til endetarmen – omtrent 9 meter langt. Langs kanalen vert maten behandla på ulike måtar:

### Munnhola
- **Mekanisk nedbryting**: Tennene tygg maten til små bitar, og tunga blandar maten med spytt.
- **Kjemisk nedbryting**: Spyttkjertlane produserer spytt med enzymet amylase, som byrjar nedbrytinga av stivelse til maltose.
- Maten formast til ein bolus (matklump) som svelgjast.

### Spiserøyret (oesophagus)
- Eit muskuløst rør (ca. 25 cm) som fraktar maten frå svelget til magesekken.
- Peristaltikk – bølgjeforma muskelkontraksjoner – driv maten nedover uavhengig av tyngdekrafta.

### Magesekken (ventriculus)
- Produserer **magesaft** som inneheld saltsyre (HCl) og enzymet pepsinogen.
- Saltsyra drep bakteriar, aktiverer pepsinogen til pepsin, og denaturerer protein.
- **Pepsin** byrjar nedbrytinga av proteinar til kortare peptidkjeder.
- Glatte musklar i mageveggen blandar maten til ein halvflytande masse kalla **chyme** (næringsbrei).
- Slimceller produserer eit beskyttande slimlag som hindrar at saltsyra skadar mageveggen.

### Tynntarmen (intestinum tenue)
- Ca. 6 meter lang, delt i duodenum (tolvfingertarmen), jejunum og ileum.
- **Duodenum**: Mottek bukspytt frå bukspyttkjertelen (pankreas) og galle frå levra/galleblæra.
- Bukspyttet inneheld enzyma **trypsin** (protein), **lipase** (fett) og **amylase** (stivelse), pluss bikarbonat som nøytraliserer saltsyra frå magesekken.
- Galle emulgerer fett – det vil seie at feittdropane vert brotne opp i mindre dropar, slik at lipase får større angrepsflate.
- **Næringsopptaket** skjer hovudsakleg i jejunum og ileum. Tarmveggen har tarmtottar (villi) og mikrovilli som aukar overflata enormt – totalt ca. 250 m².

### Tjukktarmen (colon)
- Ca. 1,5 meter lang. Absorberer vatn, salt og nokre vitaminar.
- Inneheld ein rik tarmflora (mikrobiom) som bryt ned fiberrikt materiale og produserer K-vitamin og B-vitaminar.
- Restavfallet vert komprimert til avføring (feces).

### Endetarmen (rectum) og anus
- Lagrar avføring til den vert eliminert gjennom defekasjon.`,
    },
    {
      id: 'bio1-3-2-def-1',
      type: 'definition',
      title: 'Enzymer i fordøyelsen',
      content: 'Fordøyelsesenzymane er biologiske katalysatorar som aukar farten på dei kjemiske reaksjonane som bryt ned næringsstoffer. Kvart enzym er spesifikt – det verkar berre på eitt bestemt substrat. Amylase bryt ned stivelse, proteaser (pepsin, trypsin) bryt ned proteinar, og lipase bryt ned fett. Enzymane verkar optimalt ved bestemt pH og temperatur.',
    },
    {
      id: 'bio1-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Nedbrytinga av eit brødstykkje',
      problem: 'Beskriv kva som skjer med stivelsen i eit brødstykkje frå du tek den første biten til glukosen er teken opp i blodet.',
      solution: `**Løysing:**

1. **Munnhola**: Tennene tygg brødet til små bitar. Amylase i spyttet byrjar å bryte ned stivelse til maltose (eit disakkarid).

2. **Magesekken**: Amylasen vert inaktivert av den sure pH-en (ca. 2). Stivelsen vert ikkje vidare broten ned her, men maten vert blanda til chyme.

3. **Duodenum (tolvfingertarmen)**: Bikarbonat frå bukspyttkjertelen nøytraliserer syra. Pankreatisk amylase held fram med å bryte ned stivelse til maltose.

4. **Tynntarmen (jejunum)**: Enzymet maltase, som sit fast i cellemembranen på tarmepitelet, bryt maltose ned til to glukosemolekyl.

5. **Absorpsjon**: Glukose vert teken opp gjennom tarmepitelet via aktiv transport (med natrium-glukose-kotransportør) og passerer inn i blodkapillæra i tarmtottane.

6. **Transport**: Blodet frå tarmen går via portvena til levra, der glukosen vert prosessert før den når resten av kroppen.

Heile prosessen frå munn til absorpsjon tek ca. 4-6 timar.`,
    },
    {
      id: 'bio1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Kvar skjer det meste av næringsopptaket i fordøyelseskanalen?',
        options: [
          { id: 'a', text: 'I tynntarmen (jejunum og ileum)', isCorrect: true },
          { id: 'b', text: 'I magesekken', isCorrect: false },
          { id: 'c', text: 'I tjukktarmen', isCorrect: false },
          { id: 'd', text: 'I munnhola', isCorrect: false },
        ],
        solution: 'Det meste av næringsopptaket skjer i tynntarmen, særleg i jejunum og ileum. Tynntarmen har ein enorm overflate (ca. 250 m²) takka være tarmtottar (villi) og mikrovilli. Magesekken bryt ned maten, men absorberer lite (berre vatn, alkohol og nokre medikament). Tjukktarmen absorberer hovudsakleg vatn og salt.',
      },
    },
    {
      id: 'bio1-3-2-def-2',
      type: 'definition',
      title: 'Næringsstoffer',
      content: 'Næringsstoffa kan delast i makronæringsstoffer og mikronæringsstoffer. Makronæringstoffa er karbohydrat, proteinar og fett – desse gjev energi og byggjemateriale. Mikronæringstoffa er vitaminar og mineralar – desse trengst i små mengder, men er avgjerande for enzymfunksjon, beinbygging og mange andre prosessar. Vatn er også eit essensielt næringsstoff.',
    },
    {
      id: 'bio1-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Energiinnhaldet i næringsstoffa',
      problem: 'Eit måltid inneheld 80 g karbohydrat, 30 g protein og 20 g fett. Rekn ut det totale energiinnhaldet i kilojoule (kJ). Bruk følgjande verdiar: karbohydrat gjev 17 kJ/g, protein gjev 17 kJ/g, fett gjev 38 kJ/g.',
      solution: `**Løysing:**

- Karbohydrat: 80 g x 17 kJ/g = 1 360 kJ
- Protein: 30 g x 17 kJ/g = 510 kJ
- Fett: 20 g x 38 kJ/g = 760 kJ

**Totalt energiinnhald: 1 360 + 510 + 760 = 2 630 kJ**

Legg merke til at fett gjev meir enn dobbelt så mykje energi per gram som karbohydrat og protein. Dette forklarar kvifor feittrik mat er energitett. Eit dagleg energibehov for ein ungdom ligg typisk på ca. 8 000–12 000 kJ, avhengig av aktivitetsnivå og kjønn.`,
    },
    {
      id: 'bio1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar kva rolle galle spelar i fordøyelsen av fett. Kvifor er galle nødvendig sjølv om galle ikkje er eit enzym?',
        hints: ['Tenk på kva som skjer når du blandar olje og vatn', 'Lipase er eit vassløyseleg enzym – korleis kan det verke på feittdropar?'],
        solution: 'Galle er ikkje eit enzym – ho bryt ikkje ned fett kjemisk. I staden emulgerer ho fett, det vil seie at store feittdropar vert brotne opp i mange små dropar. Dette er nødvendig fordi lipase (det feittspaltande enzymet) er vassløyseleg og kan berre verke på overflata av feittdropane. Når store dropar vert delte i mange små dropar, aukar den totale overflata enormt, og lipase får tilgang til mykje meir fett samstundes. Utan galle ville feittfordøyinga gå svært sakte. Galle vert produsert i levra, lagra i galleblæra, og frigjort til duodenum når feitthaldig mat når tolvfingertarmen.',
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
        solution: 'Pepsin er enzymet som byrjar proteinnedbrytinga i magesekken. Det vert utskilt som den inaktive forløparen pepsinogen, som aktiverast til pepsin av saltsyra (HCl). Pepsin verkar best ved svært sur pH (ca. 2). Trypsin er også ein protease, men verkar i tynntarmen ved nøytral pH. Amylase bryt ned stivelse og lipase bryt ned fett.',
      },
    },
    {
      id: 'bio1-3-2-def-3',
      type: 'definition',
      title: 'Peristaltikk',
      content: 'Peristaltikk er bølgjeforma muskelkontraksjoner i veggen til fordøyelseskanalen som driv maten framover. Ringmuskulaturen bak matklumpen trekkjer seg saman, medan muskulaturen framfor slappar av. Denne koordinerte kontraksjonen flyttar innhaldet i ein retning – frå munn mot endetarm. Peristaltikk vert styrt av det enteriske nervesystemet (tarmnervesystemet) og det autonome nervesystemet.',
    },
    {
      id: 'bio1-3-2-example-3',
      type: 'example',
      title: 'Eksempel: Regulering av fordøyelsen',
      problem: 'Forklar korleis hormonet sekretin regulerer fordøyelsen i tynntarmen.',
      solution: `**Løysing:**

Når sur chyme frå magesekken når duodenum, skjer følgjande:

1. **Stimulus**: Den sure pH-en i duodenum stimulerer S-celler i tarmveggen.
2. **Hormonproduksjon**: S-cellene skil ut hormonet **sekretin** til blodet.
3. **Verknader av sekretin**:
   - Stimulerer bukspyttkjertelen til å produsere bikarbonatrik væske som nøytraliserer syra i duodenum
   - Hemmer saltsyreproduksjonen i magesekken (negativ tilbakekobling)
   - Stimulerer galleproduksjonen i levra

4. **Resultat**: pH i duodenum stig til eit nivå (ca. 7-8) der fordøyelsesenzyma i tynntarmen fungerer optimalt.

Dette er eit godt eksempel på hormonell regulering med negativ tilbakekobling: sur chyme utløyser ein respons (bikarbonat) som motverkar det opphavlege problemet (for sur pH).`,
    },
    {
      id: 'bio1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv oppbygningen til ein tarmtotte (villus) og forklar korleis strukturen er tilpassa næringsopptak.',
        hints: ['Tenk på overflateauke', 'Kva ligg inni ein tarmtotte?'],
        solution: 'Ein tarmtotte (villus) er eit fingerforma utspring frå tarmveggen, ca. 0,5–1 mm høgt. Kvar tarmtotte er dekt av eit lag sylinderepitel med mikrovilli (børstesaum) på overflata. Inni tarmtotten finst eit nettverk av blodkapillærar og eit lymfekar (mjølkekar). Strukturen er tilpassa næringsopptak på fleire måtar: (1) Tarmtottane og mikrovilli aukar absorpsjonsoverflata enormt (ca. 250 m²). (2) Blodkapillærnettverket gjev kort diffusjonsavstand – næringsstoffer treng berre passere epitelet for å nå blodet. (3) Mjølkekaret tek opp fett i form av kylomikronar. (4) Epitelcellene har transportprotein for aktiv transport av glukose, aminosyrer og andre næringsstoffer.',
      },
    },
    {
      id: 'bio1-3-2-summary',
      type: 'text',
      content: `## Oppsummering

Fordøyelsessystemet bryt ned mat mekanisk og kjemisk, og tek opp næringsstoffer til kroppen:

| Del | Hovudfunksjon | Viktige enzym/stoff |
|-----|---------------|---------------------|
| Munnhola | Tygging, start stivelsenedbryting | Amylase i spytt |
| Magesekken | Proteinnedbyting, desinfeksjon | HCl, pepsin |
| Tynntarmen | Hovudnedbryting og næringsopptak | Trypsin, lipase, amylase, galle |
| Tjukktarmen | Vatnopptak, tarmflora | Bakterielle enzym |

Næringsstoffa delast i makronæringsstoffer (karbohydrat, protein, fett) og mikronæringsstoffer (vitaminar, mineralar). Fordøyelsen vert regulert av både nervar (det enteriske nervesystemet) og hormon (gastrin, sekretin, CCK).

Tynntarmen er hovudstaden for næringsopptak, med ein overflate på ca. 250 m² takka være tarmtottar og mikrovilli.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Ein person har fått fjerna galleblæra. Forklar korleis dette kan påverke fordøyelsen og kva for næringsstoffer som vert hardast ramma.',
        hints: ['Galleblæra lagrar galle – men kva organ produserer gallen?', 'Tenk på kva galle gjer med fett'],
        solution: 'Galleblæra lagrar og konsentrerer galle, men det er levra som produserer henne. Utan galleblære vil galle framleis produserast, men ho vert dryppa kontinuerleg inn i tynntarmen i staden for å frigjerast i ein stor dose når det trengst. Ved feittrike måltid vil det ikkje vere nok galle tilgjengeleg til å emulgere alt fettet. Resultatet er at feittfordøyinga vert mindre effektiv, særleg ved store måltid. Fett er det næringsstoffet som vert hardast ramma. Personen kan oppleve ubehag, oppblåstring og feittrik avføring (steatorre) etter feittrike måltid. Feittløyselege vitaminar (A, D, E og K) kan også verte dårlegare absorbert.',
      },
    },
    {
      id: 'bio1-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Kva for ein påstand om tjukktarmen er riktig?',
        options: [
          { id: 'a', text: 'Tjukktarmen absorberer vatn og salt, og inneheld ein rik tarmflora', isCorrect: true },
          { id: 'b', text: 'Tjukktarmen er hovudstaden for nedbryting av protein og karbohydrat', isCorrect: false },
          { id: 'c', text: 'Tjukktarmen produserer fordøyelsesenzym som lipase og amylase', isCorrect: false },
          { id: 'd', text: 'Tjukktarmen har tarmtottar for effektivt næringsopptak', isCorrect: false },
        ],
        solution: 'Tjukktarmen (colon) absorberer hovudsakleg vatn og salt frå det ufordøyelege materialet. Ho inneheld ein rik tarmflora (ca. 100 billionar bakteriar) som bryt ned fiber og produserer nokre vitaminar (K og B). Tjukktarmen har ikkje tarmtottar og produserer ikkje fordøyelsesenzym – næringsnedbryting og -opptak skjer hovudsakleg i tynntarmen.',
      },
    },
    {
      id: 'bio1-3-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar kvifor det er viktig at pepsin vert produsert som den inaktive forløparen pepsinogen, og fyrst aktiverast i magesekken.',
        hints: ['Kva hadde skjedd dersom pepsin var aktivt allereie inne i cellene som produserer det?', 'Pepsin bryt ned protein – kva er cellene sjølve bygde opp av?'],
        solution: 'Pepsin er ein protease – eit enzym som bryt ned protein. Cellene som produserer pepsin er sjølve bygde opp av protein. Dersom pepsin var aktivt allereie inne i cellene, ville enzymet byrje å bryte ned cellenes eigne protein og øydeleggje dei. Ved å produsere den inaktive forløparen pepsinogen, beskytar cellene seg sjølve. Pepsinogen vert fyrst aktivert til pepsin av saltsyra (HCl) ute i magesekken, der det beskyttande slimlaget vernar mageveggen. Dette er eit viktig prinsipp i biologi: mange potensielt farlege enzym vert produsert som inaktive forløparar (zymogen) og aktiverast fyrst der dei trengst.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fordøyelseskanalen', definition: 'Samanhengande rør frå munn til endetarm som bryt ned og absorberer næring' },
    { term: 'Peristaltikk', definition: 'Bølgjeforma muskelkontraksjoner som driv maten framover i fordøyelseskanalen' },
    { term: 'Chyme', definition: 'Halvflytande næringsbrei som magesekken sender vidare til tynntarmen' },
    { term: 'Emulgering', definition: 'Oppbrytning av store feittdropar til små dropar ved hjelp av galle' },
    { term: 'Tarmtotte (villus)', definition: 'Fingerforma utspring i tynntarmen som aukar overflata for næringsopptak' },
    { term: 'Makronæringsstoffer', definition: 'Karbohydrat, protein og fett – gjev energi og byggjemateriale' },
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
  description: 'Hjartets oppbygning, det doble kretsløpet, blodets sammensetning og gassutveksling i lungene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive hjartets oppbygning og forklare korleis det pumpar blod gjennom kroppen',
    'gjøre rede for det doble kretsløpet: litle og store krinsløpet',
    'forklare blodets sammensetning og oppgåver',
    'beskrive gassutveksling i lungene og i veva',
  ],
  content: [
    {
      id: 'bio1-3-3-intro',
      type: 'text',
      content: `# Sirkulasjon og gassutveksling

Alle cellene i kroppen treng ein kontinuerleg tilførsel av oksygen og næringstoffer, og avfallsstoff som karbondioksid må fraktast bort. Sirkulasjonssystemet og respirasjonssystemet samarbeider taett for åløyse desse oppgåvene.

## Hjartets oppbygning

Hjartet er ein muskuløs pumpe på storleik med ein knyttneve, plassert midt i brystkassa, litt til venstre. Det veg ca. 300 g og pumpar omlag 5 liter blod per minutt i kvile – det vil seie over 7 000 liter per døgn.

Hjartet har fire kammer:
- **Hoegre forkammer (atrium)**: Tek imot oksygenfattig blod frå kroppen via øvre og nedre holevene (vena cava superior og inferior).
- **Hoegre hovudkammer (ventrikkel)**: Pumpar blod til lungene via lungearterien (arteria pulmonalis).
- **Venstre forkammer (atrium)**: Tek imot oksygenrikt blod frå lungene via lungevenane.
- **Venstre hovudkammer (ventrikkel)**: Pumpar oksygenrikt blod ut i kroppen via aorta.

Mellom forkammera og hovudkammera ligg **seglventilane** (mitralventilen på venstre side, trikuspidalventilen på høgre side) som hindrar tilbakestrøyming. Mellom hovudkammera og dei store arteriane ligg **lommeventilane** (aortaventilen og pulmonalventilen).

Venstre hovudkammer har tjukkare vegg enn høgre fordi det må pumpe blod med høgt trykk til heile kroppen, medan høgre berre pumpar til lungene (kort avstand, lågt trykk).

## Hjarterytme og leidingssystem

Hjartet slår rytmisk utan ytre stimulering – det er **myogent** (sjølvstartande). Signalet startar i **sinusknuten** (SA-knuten) i høgre forkammer, som fungerer som hjartets naturlege pacemaker. Fråsinusknuten spreier det elektriske signalet seg gjennom forkammera og vidare til **AV-knuten** (atrioventrikulærknuten), deretter gjennom **His-bunten** og **Purkinje-fibrene** til hovudkammera.

Normal kvilefrekvens er 60–80 slag per minutt. Hjarterytmen vert regulert av det autonome nervesystemet: sympatikus aukar frekvensen (t.d. ved fysisk aktivitet), parasympatikus (vagusnerven) senkar den.`,
    },
    {
      id: 'bio1-3-3-def-1',
      type: 'definition',
      title: 'Det doble kretsløpet',
      content: 'Mennesket har eit dobbelt kretsløp: (1) Det litle krinsløpet (lungekrinsløpet) går frå høgre hovudkammer til lungene og tilbake til venstre forkammer. Her vert blodet oksygenert. (2) Det store krinsløpet (systemkrinsløpet) går frå venstre hovudkammer ut til heile kroppen og tilbake til høgre forkammer. Her vert oksygen levert til cellene og karbondioksid henta opp. Det doble kretsløpet gjer at oksygenrikt og oksygenfattig blod vert halde adskilt, noko som gjev effektiv oksygentransport.',
    },
    {
      id: 'bio1-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Blodets veg gjennom kroppen',
      problem: 'Følg ein raud blodcelle gjennom ein komplett runde i kroppen, frå høgre forkammer og tilbake dit igjen.',
      solution: `**Løysing:**

1. Raud blodcelle med lite oksygen ligg i **høgre forkammer**.
2. Passerer gjennom **trikuspidalventilen** til **høgre hovudkammer**.
3. Pumpast gjennom **pulmonalventilen** og ut i **lungearterien**.
4. Naar kapillærane rundt alveolane i **lungene**.
5. **Gassutveksling**: CO₂ diffunderer ut, O₂ diffunderer inn – blodcella er no oksygenrik.
6. Reiser tilbake via **lungevenane** til **venstre forkammer**.
7. Passerer gjennom **mitralventilen** til **venstre hovudkammer**.
8. Pumpast gjennom **aortaventilen** ut i **aorta**.
9. Reiser via arteriar og arterioler til eit **kapillaernettverk** i kroppens vev.
10. **Gassutveksling**: O₂ diffunderer ut til cellene, CO₂ diffunderer inn – blodcella er no oksygenfattig igjen.
11. Reiser tilbake via venoler og vener til **øvre/nedre holevene**.
12. Tilbake i **høgre forkammer** – ein full runde er fullført.

Merk: I lungearterien strøymer oksygenfattig blod, og i lungevenane strøymer oksygenrikt blod. Arteriar fører blod bort frå hjartet, vener fører blod mot hjartet – uavhengig av oksygeninnhald.`,
    },
    {
      id: 'bio1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Kvifor har venstre hovudkammer tjukkare vegg enn høgre hovudkammer?',
        options: [
          { id: 'a', text: 'Fordi det må pumpe blod med høgre trykk til heile kroppen', isCorrect: true },
          { id: 'b', text: 'Fordi det pumpar meir blod per slag enn høgre', isCorrect: false },
          { id: 'c', text: 'Fordi det tek imot blod frå lungene under høgt trykk', isCorrect: false },
          { id: 'd', text: 'Fordi oksygenrikt blod krev sterkare pumping', isCorrect: false },
        ],
        solution: 'Venstre hovudkammer må generere høgt trykk for åpumpe blod gjennom det store krinsløpet – heile kroppen frå hovud til taa. Hoegre hovudkammer pumpar berre til lungene, som ligg rett ved sida av hjartet og har eit laagtrykkssystem. Begge kammera pumpar same mengde blod per slag (slagvolum), men venstre krev meir kraft (og dermed tjukkare muskelvegg) på grunn av den lengre transportvegen.',
      },
    },
    {
      id: 'bio1-3-3-def-2',
      type: 'definition',
      title: 'Blodets sammensetning',
      content: 'Blod består av blodplasma (ca. 55 %) og blodceller (ca. 45 %). Plasma er ei gulaktig væske som inneheld vatn, protein (albumin, antistoff, koagulasjonsfaktorar), næringstoffer, hormon og avfallsstoff. Blodcellene omfattar raude blodceller (erytrocyttar) som transporterer oksygen ved hjelp av hemoglobin, kvite blodceller (leukocyttar) som er del av immunforsvaret, og blodplater (trombocyttar) som er viktige for blodkoagulering. Ein vaksen person har ca. 5 liter blod.',
    },
    {
      id: 'bio1-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Gassutveksling i lungene',
      problem: 'Forklar korleis gassutveksling skjer i lungealveolane og kva som driv prosessen.',
      solution: `**Løysing:**

Gassutveksling i lungene skjer i **alveolane** – dei ca. 300 millionar små luftsekkjane i lungene. Den totale alveoloverflata er ca. 70 m².

**Kva driv gassutvekslinga?**
Prosessen vert driven av **diffusjon** langs konsentrasjonsgradientar (partialtrykk):

- **Oksygen (O₂)**: Partialtrycket av O₂ er høgt i alveolelufta (ca. 100 mmHg) og lågt i det oksygenfattige blodet som kjem til lungene (ca. 40 mmHg). O₂ diffunderer difor frå alveolelufta inn i blodet.

- **Karbondioksid (CO₂)**: Partialtrycket av CO₂ er høgt i det venoese blodet (ca. 46 mmHg) og lågt i alveolelufta (ca. 40 mmHg). CO₂ diffunderer difor frå blodet ut i alveolelufta og pustast ut.

**Strukturelle tilpassingar for effektiv diffusjon:**
1. Svart tynn barriere – berre to cellelag (alveolvegg + kapillærvegg), tilsaman ca. 0,5 μm
2. Enorm overflate – ca. 70 m² (storleiken av ei lita leilegheit)
3. Rik blodforsyning – tett kapillaernettverk rundt kvar alveol
4. Fuktig overflate – gassar løyser seg i væskelaget før diffusjon`,
    },
    {
      id: 'bio1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar skilnaden mellom arteriar, vener og kapillærar med omsyn til struktur og funksjon.',
        hints: ['Tenk på veggtjukkleik, trykk og kva retning blodet strøymer', 'Kva for blodårer er tilpassa utveksling av stoff?'],
        solution: 'Arteriar fører blod bort frå hjartet. Dei har tjukk, elastisk vegg med mykje glatt muskulatur fordi dei må tole høgt blodtrykk. Dei storste arteriane (t.d. aorta) er særleg elastiske for åjamne ut trykkpulsane frå hjartet. Vener fører blod tilbake mot hjartet. Dei har tynnare vegg og lågare trykk. Mange vener har veneklappar som hindrar tilbakestrøyming. Kapillaarar er dei minste blodårene – berre eitt cellelag tjukke. Dei dannar eit nettverk mellom arteriar og vener og er staden der utveksling av oksygen, næringstoffer og avfallsstoff skjer mellom blod og vev. Den tynne veggen gjer at stoff lett kan passere gjennom.',
      },
    },
    {
      id: 'bio1-3-3-def-3',
      type: 'definition',
      title: 'Hemoglobin',
      content: 'Hemoglobin (Hb) er eit protein i raude blodceller som transporterer oksygen. Kvart hemoglobinmolekyl består av fire polypeptidkjeder (to alfa og to beta), kvar med ei hemgruppe som inneheld eit jernatom. Kvart jernatom kan binde eitt O₂-molekyl, såeitt hemoglobinmolekyl kan bere fire O₂-molekyl. Naar hemoglobin er bunde til oksygen kallast det oksyhemoglobin (HbO₂) og har ein klar raud farge. Utan oksygen (deoksyhemoglobin) er fargen mørkare raud.',
    },
    {
      id: 'bio1-3-3-example-3',
      type: 'example',
      title: 'Eksempel: Kvifor andpusten ved fysisk aktivitet?',
      problem: 'Forklar kva som skjer i sirkulasjonssystemet og respirasjonssystemet når du spring raskt.',
      solution: `**Løysing:**

Naar du spring, aukar muskelcellene sitt behov for oksygen dramatisk og produserer meir CO₂. Kroppen responderer med fleire tilpassingar:

**Hjartet:**
- Hjartefrekvensen aukar (frå ca. 70 til opptil 180 slag/min)
- Slagvolumet aukar (meir blod per slag)
- Hjartets minuttvolum (cardiac output) kan auke frå ca. 5 L/min til 25 L/min

**Blodomfordeling:**
- Blodårene i aktive musklar utvidar seg (vasodilatasjon) → meir blod til musklane
- Blodårene til fordøyelsesorgana og huda trekkjer seg saman (vasokonstriksjon) → blod omdirigerast

**Lungene:**
- Pustefrekvensen og pustevolumet aukar
- Meir luft når alveolane → betre gassutveksling
- Aukt blodstraum gjennom lungekapillærane

**Kvifor andpusten?**
Du kjenner deg andpusten fordi kjemoreseptorar i hjernen og blodårene registrerer aukande CO₂-nivåi blodet. Respirasjonssenteret i hjernestammen aukar pustesignala for åkvitte seg med CO₂ raskare. Det er primaert aukt CO₂ (ikkje lågt O₂) som driv pusterefleksen.`,
    },
    {
      id: 'bio1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Kva for ein påstand om lungearterien er riktig?',
        options: [
          { id: 'a', text: 'Lungearterien fører oksygenfattig blod frå hjartet til lungene', isCorrect: true },
          { id: 'b', text: 'Lungearterien fører oksygenrikt blod frå lungene til hjartet', isCorrect: false },
          { id: 'c', text: 'Lungearterien fører oksygenrikt blod frå hjartet til kroppen', isCorrect: false },
          { id: 'd', text: 'Lungearterien fører oksygenfattig blod frå kroppen til hjartet', isCorrect: false },
        ],
        solution: 'Lungearterien (arteria pulmonalis) fører oksygenfattig blod frå høgre hovudkammer til lungene for gassutveksling. Sjolv om arteriar vanlegvis assosierast med oksygenrikt blod, er definisjonen av ei arterie eit blodkar som fører blod BORT frå hjartet – uavhengig av oksygeninnhaldet. Lungearterien er det viktigaste eksempelet på ei arterie med oksygenfattig blod.',
      },
    },
    {
      id: 'bio1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hemoglobin kan binde baade oksygen og karbonmonoksid (CO). Karbonmonoksid bind seg ca. 200 gonger sterkare til hemoglobin enn oksygen. Forklar kvifor CO-forgifting er såfarleg.',
        hints: ['Tenk på kva som skjer med oksygentransporten når CO tek opp plassane på hemoglobin', 'Kor lett er det åfjerne CO frå hemoglobin?'],
        solution: 'Karbonmonoksid (CO) bind seg til dei same jernatomia på hemoglobin som oksygen, men med ca. 200 gonger høgare affinitet. Det betyr at sjølv små mengder CO i pusteluft vil fortrengje oksygen frå hemoglobin. CO-hemoglobin (karboksyhemoglobin, HbCO) kan ikkje transportere oksygen. Sidan bindinga er såsterk, slepper CO svart langsamt frå hemoglobin. Resultatet er at cellene ikkje får nok oksygen (hypoksi), sjølv om ein pustar normal luft. Hjernen er særleg saarbar. CO-forgifting er ekstra farleg fordi CO er luktfri og fargelaus, såein merkar det ikkje før det er for seint. Behandling er åpuste rein O₂ (eller hyperbar O₂) for åfortrengje CO frå hemoglobin.',
      },
    },
    {
      id: 'bio1-3-3-summary',
      type: 'text',
      content: `## Oppsummering

Sirkulasjonssystemet og respirasjonssystemet samarbeider om åforsyne cellene med oksygen og fjerne karbondioksid:

**Hjartet:**
- Fire kammer: to forkammer og to hovudkammer
- Ventilane hindrar tilbakestrøyming
- Sinusknuten styrer hjarterytmen

**Det doble kretsløpet:**
- Litle krinsløpet: Hjarte → lunger → hjarte (gassutveksling)
- Store krinsløpet: Hjarte → kroppen → hjarte (levering av O₂, opptak av CO₂)

**Blodet:**
- Plasma (55 %) + blodceller (45 %)
- Raude blodceller med hemoglobin transporterer O₂
- Kvite blodceller forsvarar mot infeksjon
- Blodplater er viktige for koagulering

**Gassutveksling:**
- Skjer ved diffusjon i alveolane (lunger) og i veva
- Drives av partialtrykksforskjellar
- Alveolane har enorm overflate og svart tynn barriere

Forstainga av sirkulasjon og gassutveksling er sentral for åforstå korleis kroppen responderer på fysisk aktivitet, sjukdom og miljoeendringar.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar korleis gassutveksling i veva (systemisk gassutveksling) skil seg frå gassutveksling i lungene. Bruk omgrepa partialtrykk og diffusjon.',
        hints: ['I lungene går O₂ inn i blodet – kva skjer i veva?', 'Tenk på konsentrasjonsgradientane på dei to stadene'],
        solution: 'I lungene er partialtrycket av O₂ høgare i alveolelufta enn i blodet, såO₂ diffunderer inn i blodet. CO₂ går motsett veg. I veva er situasjonen omvendt: cellene brukar O₂ og produserer CO₂, såpartialtrycket av O₂ er lågare i veva enn i blodet. O₂ diffunderer difor frå blodet ut til cellene. CO₂-partialtrycket er høgare i cellene enn i blodet, såCO₂ diffunderer frå cellene og inn i blodet. Begge stader drives prosessen av diffusjon langs konsentrasjonsgradientar, men retningane er motsette: inn i blodet i lungene, ut av blodet i veva.',
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
        solution: 'Blodplater (trombocyttar) er cellefragment frå megakaryocyttar i beinmargen. Hovudfunksjonen deira er blodkoagulering (hemostase). Naar eit blodkar vert skadd, festar blodplatene seg til skadestaden (adhesjon), klumpar seg saman (aggregering) og dannar ein mellombels plateplugg. Dei frigjer ogso stoff som aktiverer koagulasjonskaskaden, som lagar eit fibrinnettverk som forsterkar pluggen til ein stabil blodpropp.',
      },
    },
    {
      id: 'bio1-3-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-3-ex-7',
        number: '7',
        type: 'classic',
        task: 'Eit foster har ei opning mellom høgre og venstre forkammer kalla foramen ovale, og ein kanal mellom lungearterien og aorta kalla ductus arteriosus. Forklar kvifor desse strukturane er nødvendige før foedsel og kva som ville skjedd dersom dei ikkje lukkast etter foedsel.',
        hints: ['Fosteret bruker ikkje lungene sine – kvar får det oksygen frå?', 'Kva skjer med blodstraumen dersom blodet kan gå utanom lungene etter foedsel?'],
        solution: 'Foer foedsel får fosteret oksygen frå morkaka via navlestrengen – lungene er ikkje i bruk og er fylte med vaske. Det ville være bortkasta åpumpe alt blodet gjennom lungene. Foramen ovale let blod strøyme direkte frå høgre til venstre forkammer, og ductus arteriosus let blod gå frå lungearterien direkte over til aorta. Begge shuntane omgår lungekrinsløpet. Ved foedsel tek babyen sine første andedrag, lungeblodkara utvidar seg, og trykket i venstre forkammer stig. Dette trykkjer foramen ovale att (lukkast vanlegvis i loepet av dagar). Ductus arteriosus trekkjer seg saman og lukkast (vanlegvis innan 24–48 timar). Dersom dei ikkje lukkast, vil oksygenfattig blod blande seg med oksygenrikt, og kroppen får for lite oksygen – ein tilstand som kan krevje kirurgisk behandling.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Det doble kretsløpet', definition: 'To krinsløp: litle (lunger) og store (kroppen) som held oksygenrikt og oksygenfattig blod adskilt' },
    { term: 'Sinusknuten', definition: 'Hjartets naturlege pacemaker i høgre forkammer som startar kvart hjarteslag' },
    { term: 'Hemoglobin', definition: 'Protein i raude blodceller som bind og transporterer oksygen' },
    { term: 'Alveol', definition: 'Liten luftsekk i lungene der gassutveksling skjer' },
    { term: 'Diffusjon', definition: 'Passiv transport av stoff frå høg til laag konsentrasjon' },
    { term: 'Slagvolum', definition: 'Mengda blod hjartet pumpar per slag' },
    { term: 'Arterie', definition: 'Blodkar som fører blod bort frå hjartet' },
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
    'beskrive hovuddelane av skjelettet og skilje mellom aksialskjelettet og appendikulærskjelettet',
    'gjøre rede for ulike leddtypar og korleis dei mogeleggjer ulike bevegelsar',
    'forklare oppbygningen av skjelettmuskulatur og mekanismen bak muskelkontraksjon',
    'forklare prinsippet om agonist og antagonist i muskelsamarbeid',
  ],
  content: [
    {
      id: 'bio1-3-4-intro',
      type: 'text',
      content: `# Muskel- og skjelettsystemet

Muskel- og skjelettsystemet gjev kroppen form, støtte og evne til bevegelse. Skjelettet dannar rammeverket, ledda gjev fleksibilitet, og musklane produserer kreftene som driv bevegelsane. Saman utgjer dei eit elegant samarbeid mellom passive og aktive strukturar.

## Skjelettet

Det vaksne menneskeskjelettet består av 206 bein. Skjelettet har fleire viktige funksjonar:

- **Stoette**: Gjev kroppen form og held den oppreist
- **Bevegelse**: Fungerer som heftestadar og vektarmar for musklane
- **Vern**: Beskytar vitale organ (kraniet vernar hjernen, ribbena vernar hjartet og lungene)
- **Blodcelleproduksjon**: Raud beinmarg i dei store beina produserer blodceller (hematopoese)
- **Minerallagring**: Lagrar kalsium og fosfor som kan frigjerast når kroppen treng det

### Aksialskjelettet og appendikulærskjelettet

Skjelettet kan delast i to hovuddelar:

**Aksialskjelettet** (80 bein) utgjer kroppens sentrale akse:
- Kraniet (22 bein) – vernar hjernen og sanseorgana
- Ryggsoeyla (33 ryggvirvlar, inkludert korsbeinet og halebeinet) – ber kroppsvekta og vernar ryggmargen
- Brystkassa (brystbeinet + 12 par ribbein) – vernar hjarte og lunger, og hjelper med pustebevegelsane

**Appendikulaerskjelettet** (126 bein) omfattar lemmene og festepunkta deira:
- Skulderbeltet (kragebein og skulderblad) og armane
- Hoftebeltet (hoftebein) og beina

Ryggsoeyla er S-forma og bestar av virvlar skilde av mellomvirvelskiver (diskar) av brusk. Diskane fungerer som støtdemparar og gjev ryggsøyla fleksibilitet.`,
    },
    {
      id: 'bio1-3-4-def-1',
      type: 'definition',
      title: 'Ledd',
      content: 'Eit ledd er ein stad der to eller fleire bein møter kvarandre. Ledd kan klassifiserast etter bevegelsegrad: Fibrose ledd (ubevegelegge, t.d. skallesoemer), bruskledds (lite bevegelegge, t.d. mellomvirvelskivene) og synovialledd (fritt bevegelegge, t.d. kne og skulder). Synovialledd har ein leddkapsel fylt med synovialvæske (leddvæske) som smoerer og naerer leddbrusken. Leddband (ligament) stabiliserer ledda, medan sener festar musklar til bein.',
    },
    {
      id: 'bio1-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Ulike leddtypar og bevegelsar',
      problem: 'Beskriv tre ulike typar synovialledd og kva for bevegelsar kvar av dei tillet.',
      solution: `**Løysing:**

1. **Hengselledd** (t.d. kneet og albogen): Tillater bevegelse i berre eitt plan – bøyging (fleksjon) og strekning (ekstensjon). Fungerer som eit dørhengsle. Kneet kan boeyast og strekkjast, men ikkje roterast nemneverdig.

2. **Kuleledd** (t.d. skulder og hofte): Tillater bevegelse i alle retningar – fleksjon, ekstensjon, abduksjon (frå kroppen), adduksjon (mot kroppen) og rotasjon. Skulderleddet er kroppens mest bevegelegge ledd, noko som ogso gjer det meir utsett for skadar.

3. **Dreieledd** (t.d. mellom første og andre halsvirvel, og mellom radius og ulna i underarmen): Tillater rotasjon rundt ei akse. Leddet mellom atlas og axis (dei to oeverste halsvirvlane) leet deg dreje hovudet frå side til side.

Kvar leddtype har ein form som er tilpassa den bevegelsetypen som trengst på den aktuelle staden i kroppen.`,
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
        solution: 'Aksialskjelettet utgjer kroppens sentrale akse og består av kraniet (22 bein), ryggsøyla (33 virvlar) og brystkassa (brystbeinet og 12 par ribbein). Appendikulaerskjelettet omfattar lemmene (armar og bein) og belta som festar dei til aksialskjelettet (skulderbeltet og hoftebeltet).',
      },
    },
    {
      id: 'bio1-3-4-def-2',
      type: 'definition',
      title: 'Skjelettmuskelfiber',
      content: 'Ein skjelettmuskelfiber er ei lang, sylindrisk celle med fleire cellekjerner. Kvar fiber inneheld mange myofibrillar – lange traadforma strukturar som består av dei kontraktile proteina aktin (tynne filament) og myosin (tjukke filament). Myofibrillane er organiserte i repeterte einingar kalla sarkomerar, som er den funksjonelle kontraksjonseininga i muskelen. Naar muskelen kontraherer, glir aktinfilamenta langs myosinfilamenta – dette kallast glidefialmentmodellen.',
    },
    {
      id: 'bio1-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Agonist og antagonist – biceps og triceps',
      problem: 'Forklar korleis biceps og triceps samarbeider når du bøyger og strekkjer albogen.',
      solution: `**Løysing:**

Musklar kan berre trekke – dei kan ikkje dytte. Difor må musklar jobbe i par der dei har motsett verknad:

**Boeyging av albogen (fleksjon):**
- **Agonist** (utfører bevegelesa): Biceps brachii kontraherer og bøyger armen
- **Antagonist** (motverkar agonisten): Triceps brachii slappar av og vert strekt

**Strekning av albogen (ekstensjon):**
- **Agonist**: Triceps brachii kontraherer og strekkjer armen
- **Antagonist**: Biceps brachii slappar av og vert strekt

Rollene er altsåbytte om – kva muskel som er agonist avheng av kva bevegelse som utførast. Denne organiseringa i agonist-antagonist-par er nødvendig fordi ein muskel som har trukke seg saman, treng ein annan muskel for åstrekke seg tilbake til utgangslengda.

I tillegg finst det **synergister** – musklar som hjelper agonisten med bevegelesa – og **fiksatorar** – musklar som stabiliserer eit naboledd slik at agonisten kan jobbe effektivt.`,
    },
    {
      id: 'bio1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar korleis muskelkontraksjon skjer på molekylaert nivaa. Bruk omgrepa aktin, myosin, sarkomer og kalsiumion i svaret ditt.',
        hints: ['Tenk på kva som utloeser kontraksjonen og kva som skjer med filamenta', 'Kva rolle spelar ATP?'],
        solution: 'Muskelkontraksjon startar med eit nervesignal som får muskelcella til åfrigjere kalsiumion (Ca²⁺) frå sarkoplasmatisk retikulum. Kalsiumiona bind seg til proteinet troponin på aktinfilamenta, noko som avdekkjer bindingsstadene på aktin. Myosinhovuda (på dei tjukke filamenta) bind seg til aktin og utfører ein kraftslag som dreg aktinfilamenta mot midten av sarkomeren. ATP bind seg til myosinhovudet, får det til ålosne frå aktin, og gjev energi til eit nytt kraftslag. Denne syklusen gjentek seg sålenge Ca²⁺ og ATP er tilgjengelege. Resultatet er at sarkomeren forkortar seg – aktin- og myosinfilamenta glir langs kvarandre (glidefilamentmodellen). Naar nervestimuleringa stoppar, pumpast Ca²⁺ tilbake til sarkoplasmatisk retikulum, og muskelen slappar av.',
      },
    },
    {
      id: 'bio1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Kva for ein påstand om muskelkontraksjon er riktig?',
        options: [
          { id: 'a', text: 'Aktin- og myosinfilamenta glir langs kvarandre slik at sarkomeren vert kortare', isCorrect: true },
          { id: 'b', text: 'Aktin- og myosinfilamenta vert sjølve kortare under kontraksjon', isCorrect: false },
          { id: 'c', text: 'Muskelkontraksjon krev ikkje energi (ATP)', isCorrect: false },
          { id: 'd', text: 'Kalsiumion hemmar muskelkontraksjon', isCorrect: false },
        ],
        solution: 'Ifoelje glidefilamentmodellen glir aktin- og myosinfilamenta langs kvarandre – sjølve filamenta vert ikkje kortare. Sarkomeren (kontraksjonseininga) vert kortare fordi aktinfilamenta vert dregne mot midten. Prosessen krev ATP (energi) og vert utloest av kalsiumion som frigjerast frå sarkoplasmatisk retikulum.',
      },
    },
    {
      id: 'bio1-3-4-def-3',
      type: 'definition',
      title: 'Sener og leddband',
      content: 'Sener er sterke baand av tett, fiberrikt bindevev som festar musklar til bein. Dei overfører kreftene frå muskelkontraksjonen til skjelettet og moegeleggjer bevegelse. Leddband (ligament) er ogso baand av bindevev, men dei festar bein til bein over eit ledd. Leddbanda stabiliserer ledda og avgrensar bevegelsa slik at ledda ikkje vert overbevegde. Baade sener og leddband består hovudsakleg av kollagenfibre, som gjev dei stor strekkstyrke.',
    },
    {
      id: 'bio1-3-4-example-3',
      type: 'example',
      title: 'Eksempel: Bein som levande vev',
      problem: 'Mange trur at bein er doedt materiale, men bein er faktisk levande vev. Forklar kvifor.',
      solution: `**Løysing:**

Bein er levande vev som stadig vert brote ned og bygd opp att (remodellering):

**Levande komponentar:**
- **Osteoblastar** – celler som bygger nytt bein ved åprodusere kollagen og mineralisere det med kalsiumfosfat
- **Osteocyttar** – modne beinceller innleira i beinmatriksen som kommuniserer med andre celler
- **Osteoklastar** – store celler som bryt ned bein ved åfrigjere syrer og enzym

**Beinets oppbygning:**
- **Organisk komponent** (ca. 35 %): Hovudsakleg kollagenfibre som gjev bein fleksibilitet og slagfastheit
- **Uorganisk komponent** (ca. 65 %): Hovudsakleg hydroksyapatitt (kalsiumfosfat) som gjev bein hardheit og trykkstyrke

**Remodellering:**
Osteoklastar bryt ned gammalt bein, og osteoblastar bygger nytt – ca. 10 % av skjelettet vert fornya kvart aar. Denne prosessen er regulert av hormon (paratyroideahormon, kalsitonin, vitamin D) og mekanisk belasting. Fysisk aktivitet stimulerer beinbygging – difor er veketberande trening viktig for åforebyggje beinskjoerheit (osteoporose).`,
    },
    {
      id: 'bio1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Samanlikn dei tre typane muskelvev: skjelettmuskulatur, glatt muskulatur og hjartemuskulatur. Lag ei tabell som viser skilnader i utsjaanad, plassering og styring (viljestyrt/ikkje-viljestyrt).',
        hints: ['Tenk på kvar kvar type finst, og om du kan styre dei bevisst'],
        solution: 'Skjelettmuskulatur: Tverrstripet mønster, lange fleirkjerna celler. Festa til skjelettet via sener. Viljestyrt – styrt av somatiske nervar. Eksempel: biceps, quadriceps. Glatt muskulatur: Ingen striper, spolforma celler med eitt kjerne. Finst i veggen til indre organ (tarm, blodårer, urinblore, livmor). Ikkje-viljestyrt – styrt av det autonome nervesystemet. Eksempel: peristaltikk i tarmen. Hjartemuskulatur: Tverrstripet, forgreina celler med eitt–to kjerne, knytte saman av intercalerte skivar. Finst berre i hjartet. Ikkje-viljestyrt – sjølvstartande (sinusknuten), men regulert av autonome nervar. Hjartemuskulatur har unike eigenskapar: den er tverrstripet som skjelettmuskel, men automatisk som glatt muskel.',
      },
    },
    {
      id: 'bio1-3-4-summary',
      type: 'text',
      content: `## Oppsummering

Muskel- og skjelettsystemet gjev støtte, vern og bevegelse:

**Skjelettet (206 bein):**
- Aksialskjelettet: kraniet, ryggsøyla, brystkassa
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
- Agonist utfører bevegelsa, antagonist motverkar
- Musklar jobbar alltid i par (t.d. biceps/triceps)

Forstainga av muskel- og skjelettsystemet er viktig for åforstå bevegelse, skadar og korleis fysisk aktivitet påverkar kroppen.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Ein person bryt laarbeinet (femur) og får gips i 8 veker. Etter at gipsen er fjerna, er musklane i det skadde beinet tydeleg tynnare enn i det friske beinet. Forklar kvifor dette skjer og kva som må til for åbygge opp musklane igjen.',
        hints: ['Tenk på kva som skjer med musklar som ikkje vert brukte', 'Kva stimulerer muskeloppbygging?'],
        solution: 'Naar musklar ikkje vert brukte (immobilisert i gips), skjer muskelatrofi – muskelfibrene vert tynnare og svakare. Proteinnedbrytinga aukar og proteinoppbygginga minkar. Etter 8 veker kan muskelstorleiken vere betydeleg redusert. For åbygge opp musklane igjen (rehabilitering) trengst progressiv styrketrening. Fysisk belasting stimulerer muskelcellene til åauke proteinsyntesen, særleg av aktin og myosin. Muskelfibrene vert tjukkare (hypertrofi), ikkje fleire. Full rehabilitering tek typisk 2–3 gonger sålang tid som immobiliseringsperioden. I tillegg til muskelatrofi kan beintettheita i det immobiliserte beinet ha minka (bruksosteoporose), fordi bein ogso treng mekanisk belasting for åoppretthalde styrken.',
      },
    },
    {
      id: 'bio1-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Kva er funksjonen til synovialvæske (leddvæske) i eit synovialledd?',
        options: [
          { id: 'a', text: 'Ho smoerer leddflata og reduserer friksjon mellom beina', isCorrect: true },
          { id: 'b', text: 'Ho festar beina til kvarandre over leddet', isCorrect: false },
          { id: 'c', text: 'Ho produserer raud blodceller for sirkulasjonssystemet', isCorrect: false },
          { id: 'd', text: 'Ho sender nervsignal mellom beina i leddet', isCorrect: false },
        ],
        solution: 'Synovialvæske (leddvæske) er ein viskoes væske som finst inne i leddkapselen i synovialledd. Hovudfunksjonane er: (1) Smoeering – reduserer friksjon mellom leddflatene ved bevegelse. (2) Stoetdemping – absorberer stoeyt og trykk. (3) Naering – leverer næringstoffer til leddbrusken, som ikkje har eigne blodårer. Leddbrusken får næring ved diffusjon frå synovialvæsken, og denne prosessen vert stimulert av bevegelse – endåein grunn til at fysisk aktivitet er viktig for leddhelse.',
      },
    },
    {
      id: 'bio1-3-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar kvifor rigor mortis (doedssstivheit) oppstår etter doeden. Bruk kunnskapen din om muskelkontraksjon til åforklare fenomenet.',
        hints: ['Tenk på kva som trengst for at myosin skal loesne frå aktin', 'Kva skjer med ATP-produksjonen når ein person dør?'],
        solution: 'Etter doeden stoppar ATP-produksjonen fordi cellene ikkje lenger får oksygen og næring. Ved muskelkontraksjon bind myosinhovuda seg til aktin og utfører eit kraftslag. For at myosinhovuda skal loesne frå aktin og gjere muskelen klar for eit nytt slag (eller relaksasjon), må eit nytt ATP-molekyl binde seg til myosinhovudet. Utan ATP forblir myosinhovuda fastklistra til aktin i ein permanent kontraksjon – dette er rigor mortis. Stivheita byrjar typisk 2–6 timar etter doeden og forsvinn att etter 24–72 timar når nedbrytingsprosessar (autolyse) bryt ned muskelproteina.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Aksialskjelettet', definition: 'Kroppens sentrale akse: kraniet, ryggsøyla og brystkassa' },
    { term: 'Appendikulaerskjelettet', definition: 'Lemmene (armar og bein) og belta som festar dei til aksialskjelettet' },
    { term: 'Synovialledd', definition: 'Fritt bevegelegge ledd med leddkapsel og synovialvæske' },
    { term: 'Sarkomer', definition: 'Den funksjonelle kontraksjonseininga i skjelettmuskel, mellom to Z-liner' },
    { term: 'Glidefilamentmodellen', definition: 'Modell som forklarer kontraksjon ved at aktin og myosin glir langs kvarandre' },
    { term: 'Agonist', definition: 'Muskelen som utfører ein bestemt bevegelse' },
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
    'gjøre rede for ulike typar sanseceller og sansereseeptorar i huda',
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

Huda består av tre hovudlag:

### Overhuda (epidermis)
- Det ytste laget, 0,05–1,5 mm tjukt (tjukkast på handflater og fotsolar).
- Består av fleirlagd plateepitel. Cellene vert danna i det djupaste laget (basallaget) og skyva oppover etter kvart som nye celler vert danna under.
- Påveg oppover fylst cellene med proteinet **keratin** og dør – det ytste laget (hornlaget) består av doede, keratinfylte celler som stadig skallast av.
- Inneheld **melanocyttar** som produserer pigmentet melanin, som gjev huda farge og vernar mot UV-stråling.
- Har ingen blodårer – får næring frå læderhuda under.

### Laederhuda (dermis)
- Under overhuda, 1–4 mm tjukt.
- Består av bindevev med kollagen- og elastinfibre som gjev huda styrke og elastisitet.
- Inneheld blodårer, nervar, haarsekker, svettekjertlar, talgkjertlar og sansereseeptorar.
- Fingeravtrykka vaare skuldast moensteret av papillar (utbuktningar) i overgangen mellom overhud og læderhud.

### Underhuda (subcutis/hypodermis)
- Det djupaste laget, består hovudsakleg av feittvev.
- Fungerer som isolasjon mot varmetap, støtdempar og energireserve.
- Festar huda til underliggjande musklar og bein.

## Hudens funksjonar

Huda har mange viktige funksjonar:

- **Barriere**: Vernar mot mikroorganismar, kjemikaliar, UV-stråling og mekanisk skade
- **Temperaturregulering**: Blodårene og svettekjertlane regulerer varmetap
- **Sensorisk organ**: Inneheld reseeptorar for beroring, trykk, temperatur og smerte
- **Vitamin D-syntese**: UV-B-stråling i sollys omdannar eit forstadiet i huda til vitamin D
- **Uttskiljing**: Svette inneheld vatn, salt og noko avfallsstoff
- **Immunforsvar**: Langerhansceller i epidermis er del av immunforsvaret`,
    },
    {
      id: 'bio1-3-5-def-1',
      type: 'definition',
      title: 'Sansereseeptorar i huda',
      content: 'Huda inneheld fleire typar sansereseeptorar (sanseceller) som registrerer ulike stimuli: Meissners legeme registrerer lett beroring (finst i papillane, særleg i fingertuppar). Pacinis legeme registrerer djupt trykk og vibrasjon (finst i læderhuda og underhuda). Ruffinis legeme registrerer strekk i huda. Frie nerveendar registrerer smerte (nocireseptorar) og temperatur (termoreseptorar). Merkelceller registrerer vedvarande trykk. Tettleiken av reseptorar varierer – fingertuppane og leppene har flest, medan ryggen har faerrest.',
    },
    {
      id: 'bio1-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Temperaturregulering via huda',
      problem: 'Forklar korleis huda bidreg til temperaturregulering når kroppstemperaturen stig (t.d. ved trening) og når den synk (t.d. i kulde).',
      solution: `**Løysing:**

**Naar kroppstemperaturen stig:**
Hypothalamus registrerer at blodtemperaturen er over setpunktet (ca. 37 °C) og sender signal som utloeser:

1. **Vasodilatasjon** – blodårene i læderhuda utvidar seg. Meir blod strøymer nair hudoverflata, og varme avgjevast til omgjevnadene via stråling og konveksjon. Huda vert raudare.
2. **Svetteproduksjon** – svettekjertlane produserer svette som fordampar frå hudoverflata. Fordamping krev energi (varme), såkroppen kjoelast ned. Ein person kan svette opptil 2 liter per time ved intens aktivitet.

**Naar kroppstemperaturen synk:**
Hypothalamus registrerer at blodtemperaturen er under setpunktet og sender signal som utloeser:

1. **Vasokonstriksjon** – blodårene i læderhuda trekkjer seg saman. Mindre blod når hudoverflata, såmindre varme tapast. Huda vert blakare.
2. **Gaasehud** – små musklar (arrector pili) trekkjer haarsekkjane opp. Hos dyr fangar oppreist pels eit isolerande luftlag, men hos menneske er effekten minimal.
3. **Skjelving** – ufrivillige, raske muskelkontraksjoner som produserer varme.

Dette er eit klassisk eksempel på negativ tilbakekobling i homeostase.`,
    },
    {
      id: 'bio1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Kva for eit lag av huda inneheld blodårer, svettekjertlar og sansereseeptorar?',
        options: [
          { id: 'a', text: 'Laederhuda (dermis)', isCorrect: true },
          { id: 'b', text: 'Overhuda (epidermis)', isCorrect: false },
          { id: 'c', text: 'Underhuda (subcutis)', isCorrect: false },
          { id: 'd', text: 'Hornlaget', isCorrect: false },
        ],
        solution: 'Laederhuda (dermis) er det midterste laget av huda og inneheld blodårer, nervar, haarsekker, svettekjertlar, talgkjertlar og sansereseeptorar. Overhuda (epidermis) har ingen blodårer og består hovudsakleg av epitelceller. Underhuda (subcutis) består hovudsakleg av feittvev og fungerer som isolasjon og energilager.',
      },
    },
    {
      id: 'bio1-3-5-def-2',
      type: 'definition',
      title: 'Refleksbue',
      content: 'Ein refleksbue er den nervebanen som ligg til grunn for ein refleks – ein rask, automatisk og uvilleleg respons på ein stimulus. Ein enkel refleksbue består av fem komponentar: (1) Reseptor – sansecelle som registrerer stimulus (t.d. smertereseeptor i fingeren). (2) Sensorisk nerve (afferent) – fører signalet til sentralnervesystemet. (3) Integrasjonssenter – vanlegvis i ryggmargen, der signalet vert prosessert. (4) Motorisk nerve (efferent) – fører responssignalet til effektoren. (5) Effektor – utfører responsen (t.d. ein muskel som trekkjer handa bort).',
    },
    {
      id: 'bio1-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Trekkje-bort-refleksen',
      problem: 'Du rorer ved ein varm komfyr og trekkjer handa bort før du kjenner smerte. Forklar korleis denne refleksen fungerer.',
      solution: `**Løysing:**

Trekkje-bort-refleksen (withdrawal reflex) er ein beskyttelsesrefleks som hindrar vevsksade:

1. **Reseptor**: Smertereseeptorar (nocireseptorar) i fingerhuda registrerer den skadelege varmen.

2. **Sensorisk nerve**: Signalet sendast langs ein sensorisk nervefiber til ryggmargen.

3. **Integrasjonssenter**: I ryggmargen koplar den sensoriske nerva seg på ein internervon (mellomnervcelle), som koplar vidare til ein motorisk nervecelle. Signalet treng ikkje gå via hjernen – det prosesserast lokalt i ryggmargen.

4. **Motorisk nerve**: Den motoriske nervcella sender signal til musklane i armen.

5. **Effektor**: Boeygjemusklane i armen kontraherer og trekkjer handa bort frå den varme flata.

**Kvifor kjenner du smerta først etterpå?**
Refleksen går direkte gjennom ryggmargen og tek berre ca. 0,05 sekund. Samstundes vert signalet ogso sendt vidare opp til hjernen via stigande nervebaner, men dette tek lenger tid. Difor trekkjer du handa bort før du bevisst opplever smerta. Denne organiseringa er livsviktig – åvente på at hjernen prosesserer smerta før du handlar, ville gi alvorlegare brannskadar.`,
    },
    {
      id: 'bio1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar kvifor melanin er viktig for huda, og beskriv samanhengen mellom UV-stråling og melaninproduksjon.',
        hints: ['Tenk på kva UV-stråling kan gjere med DNA i hudcellene', 'Kvifor vert folk brunare i sola?'],
        solution: 'Melanin er eit pigment som produserast av melanocyttar i basallaget av epidermis. Melanin absorberer UV-stråling og hindrar at den trengjer djupt inn i huda og skadar DNA i dei delande cellene. Naar huda vert eksponert for UV-stråling, aukar melanocyttane produksjonen av melanin – dette er bruninga vi ser etter soling. Melaninet vert overført til naboande keratinocyttar og legg seg som ein «parasoll» over cellekjernane for åverne DNA. Menneske med meir melanin (mørkare hudtype) har betre naturleg vern mot UV-skadar. Utan tilstrekkeleg melaninvern kan UV-stråling skade DNA og auke risikoen for hudkreft (melanom). Solkrem vernar ved åabsorbere eller reflektere UV-stråling.',
      },
    },
    {
      id: 'bio1-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Kva skjer med blodårene i huda når kroppstemperaturen stig?',
        options: [
          { id: 'a', text: 'Dei utvidar seg (vasodilatasjon) slik at meir varme avgjevast', isCorrect: true },
          { id: 'b', text: 'Dei trekkjer seg saman (vasokonstriksjon) for åhalde på varmen', isCorrect: false },
          { id: 'c', text: 'Dei vert ikkje påverka av endringar i kroppstemperaturen', isCorrect: false },
          { id: 'd', text: 'Dei sluttar åfrakte blod til huda', isCorrect: false },
        ],
        solution: 'Naar kroppstemperaturen stig, utvidar blodårene i læderhuda seg (vasodilatasjon). Dette aukar blodstraumen til hudoverflata, slik at meir varme kan avgjevast til omgjevnadene via stråling og konveksjon. Huda vert raudare og varmare. Dette er ein av kroppens viktigaste mekanismar for åkjoele seg ned. Naar temperaturen synk, skjer det motsette – vasokonstriksjon reduserer blodstraumen til huda og minimerer varmetapet.',
      },
    },
    {
      id: 'bio1-3-5-def-3',
      type: 'definition',
      title: 'Nocireseptorar (smertereseeptorar)',
      content: 'Nocireseptorar er frie nerveendar som registrerer potensielt skadelege stimuli – sterk varme eller kulde, mekanisk skade og kjemiske stoff frå skadd vev. Smerte er eit viktig varselssignal som motiverer oss til åtrekke oss bort frå faren. Det finst to hovudtypar smertefibre: A-delta-fibre (raske, skarpe smerter – «første smerte») og C-fibre (langsame, verkande smerter – «andre smerte»). Nocireseptorar finst i huda, musklar, ledd, indre organ og dei fleste andre vev.',
    },
    {
      id: 'bio1-3-5-example-3',
      type: 'example',
      title: 'Eksempel: Sansar i samspel – åhalde ein kaffekopp',
      problem: 'Forklar kva for sansereseptorar i handa som er aktive når du held ein kaffekopp, og kvifor dette samspelet er viktig.',
      solution: `**Løysing:**

Naar du held ein kaffekopp, er fleire typar sansereseeptorar aktive samstundes:

1. **Meissners legeme og Merkelceller** – registrerer beroring og trykk frå koppen mot fingrane. Gjev deg informasjon om koppens overflate og kor hardt du grip.

2. **Termoreseptorar** – registrerer temperaturen på koppen. Varmereseptorar fortel deg at koppen er varm, slik at du kan justere grepet eller skifte hand.

3. **Pacinis legeme** – registrerer vibrasjonar. Dersom koppen byrjar ågli, registrerer desse reseptoane vibrasjonane og sender signal som får deg til åstramme grepet.

4. **Proprioreseptorar** (i musklar og sener) – gjev informasjon om posisjonen til handa og kor mykje kraft musklane brukar.

5. **Nocireseptorar** – dersom koppen er for varm, utloeser smertesignala ein refleks som får deg til åsleppe eller skifte grep.

**Kvifor er samspelet viktig?**
Utan dette samspelet ville du ikkje kunne regulere grepstyrken, du ville brenne deg utan åmerke det, eller du ville miste koppen fordi du ikkje registrerte at den glei. Sanseintegrasjon – hjernens evne til åkombinere informasjon frå mange reseptorar samstundes – er avgjerande for daglegdagse handlingar vi tek for gjevne.`,
    },
    {
      id: 'bio1-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Teikn eller beskriv ein refleksbue for knerefleksen (patellarefleksen). Identifiser alle fem komponentane.',
        hints: ['Knerefleksen er ein strekkjefleks – kva skjer når legen slår under kneskjela?', 'Denne refleksen har berre to nevronar – det er ein monosynaptisk refleks'],
        solution: 'Knerefleksen (patellarefleksen): (1) Reseptor: Muskelspolar i quadricepsmuskelen registrerer at muskelen vert strekt når legen slår på patellasena rett under kneskjela. (2) Sensorisk nerve: Eit sensorisk nevron fører signalet frå muskelspolen til ryggmargen. (3) Integrasjonssenter: I ryggmargen koplar den sensoriske nervecella seg direkte på ein motorisk nervecelle – ingen internervon (monosynaptisk refleks). (4) Motorisk nerve: Den motoriske nervecella sender signal tilbake til quadricepsmuskelen. (5) Effektor: Quadricepsmuskelen kontraherer og strekkjer kneet – beinet sparkar framover. Knerefleksen er ein viktig klinisk test fordi den viser at dei sensoriske og motoriske nervane og ryggmargen fungerer normalt på det aktuelle nivået.',
      },
    },
    {
      id: 'bio1-3-5-summary',
      type: 'text',
      content: `## Oppsummering

Huda er kroppens stoerste organ og har mange viktige funksjonar:

**Hudens oppbygning:**
- Overhuda (epidermis) – keratinisert epitelcvev, melanocyttar
- Laederhuda (dermis) – bindevev med blodårer, nervar, kjertlar
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
- Kulde: vasokonstriksjon + gåsehud + skjelving

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
        hints: ['Tenk på kva sansereseeptorane normalt varslar om', 'Kva skjer dersom du ikkje kjenner smerte i foten?'],
        solution: 'Ved diabetisk nevropati skader høgt blodsukker over tid dei perifere nervane, særleg dei små nervefibrene i foettene. Nocireseptorane (smertereseeptorane) og termoreseptoane fungerer ikkje lenger normalt. Dette er farleg fordi personen ikkje kjenner smerte frå trykkpunkt, skavankar i sko, små saar eller brannskadar. Utan smertesignalet oppdagar ikkje personen skaden, og saara kan bli infiserte og forverrast. I kombinasjon med dårleg blodsirkulasjon (som ogso er vanleg ved diabetes) heler saara sakte. I alvorlege tilfelle kan dette føre til alvorlege infeksjonar og i verste fall amputasjon. Difor er dagleg fotinspeksjon og godt fottoy svart viktig for personar med diabetes.',
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
        solution: 'Integrasjonssenteret (vanlegvis i ryggmargen for spinale refleksar) er der det sensoriske signalet vert prosessert og ein respons vert bestemt. I ein enkel refleks kopler den sensoriske nervecella seg på ein motorisk nervecelle (eventuelt via ein internervon). Reseptoren registrerer stimulus, den sensoriske nerva fører signalet til integrasjonssenteret, den motoriske nerva fører responssignalet ut, og effektoren utfører responsen.',
      },
    },
    {
      id: 'bio1-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-3-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar kvifor vi "venner oss til" kleda vi har på oss – det vil seie at vi etter ei stund ikkje lenger kjenner kontakten mellom kleda og huda. Bruk omgrepet sensorisk adaptasjon i svaret ditt.',
        hints: ['Tenk på kva som skjer med sansereseeptorane når dei vert stimulerte over lang tid', 'Kvifor er det hensiktsmessig at vi ikkje stadig kjenner kleda vaare?'],
        solution: 'Sensorisk adaptasjon er fenomenet der sansereseeptorar gradvis reduserer sin respons på ein vedvarande, uendra stimulus. Naar du tek på deg klede, registrerer beroeringsreseptorane i huda (Meissners legeme, Merkelceller) kontakten mellom stoff og hud. Men ettersom stimulusen er konstant og uendra, sluttar reseptoane gradvis åsende signal – dei adapterer. Etter kort tid merkar du ikkje lenger kleda. Dette er hensiktsmessig fordi det gjer at nervesystemet kan fokusere på nye og potensielt viktige stimuli i staden for åverte oversvoemd med irrelevant informasjon. Merk at nocireseptorar (smertereseeptorar) adapterer svart lite – dette er viktig fordi smerte varslar om potensiell skade og bor ikkje ignorerast.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Epidermis', definition: 'Overhuda – det ytste hudlaget med keratiniserte epitelceller og melanocyttar' },
    { term: 'Dermis', definition: 'Laederhuda – bindevev med blodårer, nervar, kjertlar og sansereseeptorar' },
    { term: 'Melanin', definition: 'Pigment produsert av melanocyttar som vernar huda mot UV-stråling' },
    { term: 'Nocireseptor', definition: 'Smertereseeptor – fri nerveende som registrerer potensielt skadelege stimuli' },
    { term: 'Refleksbue', definition: 'Nervebanen frå reseptor via integrasjonssenter til effektor i ein refleks' },
    { term: 'Sensorisk adaptasjon', definition: 'Gradvis redusert respons frå sansereseeptorar på ein vedvarande stimulus' },
    { term: 'Vasodilatasjon', definition: 'Utvidning av blodårer – aukar blodstraum og varmetap gjennom huda' },
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
