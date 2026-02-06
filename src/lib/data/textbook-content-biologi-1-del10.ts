/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 - Kapittel 10: Kropp og helse (delkapitler)
 *
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 * Utvidet innhold med 5 delkapitler om immunforsvar, vaksiner og helse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 10.1: Immunforsvarets oppbygning
// ============================================================================

export const CHAPTER_BIOLOGI_1_10_1: TextbookChapter = {
  id: 'biologi-1-10-1',
  courseId: 'biologi-1',
  chapterNumber: '10.1',
  title: 'Immunforsvarets oppbygning',
  description: 'Medfodt immunforsvar, ervervet immunforsvar og det lymfatiske systemet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive immunforsvarets oppbygning og funksjon',
    'forklare forskjellen mellom medfodt og ervervet immunforsvar',
    'gjore rede for det lymfatiske systemets rolle',
  ],
  content: [
    {
      id: 'bio1-10-1-intro',
      type: 'text',
      content: `# Immunforsvarets oppbygning

Kroppen er under konstant angrep fra patogener - sykdomsfremkallende organismer som virus, bakterier, sopp og parasitter. For a beskytte oss har vi utviklet et sofistikert forsvarssystem: immunforsvaret.

## To hovedtyper immunforsvar

Immunforsvaret deles i to hovedsystemer som jobber sammen:

1. **Medfodt (uspesifikt) immunforsvar** - Forste forsvarslinje, rask respons
2. **Ervervet (spesifikt) immunforsvar** - Tregere, men mer presist og med hukommelse

Disse systemene kommuniserer og samarbeider for a bekjempe infeksjoner effektivt.`,
    },
    {
      id: 'bio1-10-1-def-medfodt',
      type: 'definition',
      title: 'Medfodt immunforsvar',
      content: 'Det medfodte immunforsvaret er kroppens forste forsvarslinje mot patogener. Det reagerer raskt (minutter til timer) og pa samme mate uansett hvilken patogen som angriper. Inkluderer fysiske barrierer (hud, slimhinner), kjemiske barrierer (magesyre, enzymer) og cellulart forsvar (fagocytter, NK-celler).',
    },
    {
      id: 'bio1-10-1-barrierer',
      type: 'text',
      content: `## Medfodt immunforsvar

### Fysiske barrierer
Huden er kroppens storste organ og en effektiv barriere mot de fleste patogener. Slimhinner i luftveier, fordoyelsessystem og urinveier produserer slim som fanger mikroorganismer. Flimmerhar i luftveiene beveger slimet opp og ut.

### Kjemiske barrierer
- **Magesyre (pH 1-3)**: Dreper de fleste mikroorganismer
- **Lysozym**: Enzym i tarer, spytt og nesesekret som bryter ned bakterievegger
- **Defensiner**: Antimikrobielle peptider i hud og slimhinner
- **Sebum**: Fettstoffer pa huden med antibakterielle egenskaper

### Cellulart forsvar
**Fagocytter** er celler som "spiser" patogener gjennom fagocytose:
- **Makrofager**: Store etere som patruljerer vev
- **Noytrofile granulocytter**: Forste celler pa infeksjonsstedet
- **Dendrittiske celler**: Bindeledd mellom medfodt og ervervet immunforsvar

**NK-celler (Natural Killer-celler)** dreper virusinfiserte celler og kreftceller uten a trenge forhandsaktivering.`,
    },
    {
      id: 'bio1-10-1-def-inflammasjon',
      type: 'definition',
      title: 'Inflammasjon (betennelse)',
      content: 'Inflammasjon er kroppens respons pa vevsskade eller infeksjon. Kjennetegnes av rodhet, hevelse, varme og smerte. Blodkarene utvider seg (vasodilatasjon) og blir mer gjennomtrengelige, slik at immunceller og plasmaproteiner kan na infeksjonsstedet. Dette er en viktig del av immunforsvaret, selv om det foler ubehagelig.',
    },
    {
      id: 'bio1-10-1-ervervet',
      type: 'text',
      content: `## Ervervet immunforsvar

Det ervervede immunforsvaret er spesifikt - det gjenkjenner og husker bestemte patogener. Det tar lenger tid a aktivere (dager til uker), men gir langvarig beskyttelse.

### B-celler (humoral immunitet)
- Dannes og modnes i beinmargen
- Produserer antistoffer mot spesifikke antigener
- Kan utvikle seg til plasmaceller (antistoffproduserende) eller hukommelsesceller

### T-celler (cellulart immunitet)
- Dannes i beinmargen, modnes i thymus
- **Hjelper-T-celler (CD4+)**: Koordinerer immunresponsen, aktiverer andre immunceller
- **Cytotoksiske T-celler (CD8+)**: Dreper infiserte celler direkte
- **Regulatoriske T-celler**: Demper immunresponsen for a hindre overdreven reaksjon

### Samspillet mellom B- og T-celler
Hjelper-T-celler er nodvendige for full aktivering av B-celler. Dendrittiske celler presenterer antigener for T-celler og starter den ervervede immunresponsen.`,
    },
    {
      id: 'bio1-10-1-def-lymfatisk',
      type: 'definition',
      title: 'Det lymfatiske systemet',
      content: 'Det lymfatiske systemet er et nettverk av kar, vev og organer som transporterer lymfe (vevsvaske) tilbake til blodet. Viktige deler inkluderer lymfeknuter (filtrerer lymfe og inneholder mange immunceller), milten (filtrerer blod), thymus (modning av T-celler) og beinmargen (produksjon av blodceller og B-cellemodning).',
    },
    {
      id: 'bio1-10-1-lymfatisk',
      type: 'text',
      content: `## Det lymfatiske systemet

Det lymfatiske systemet spiller en sentral rolle i immunforsvaret ved a transportere immunceller og antigener.

### Lymfekar
Lymfekar samler opp vevsvaske (lymfe) som har lekket ut av blodkapillarene. Lymfen transporteres gjennom lymfeknuter og til slutt tilbake til blodomlopet.

### Lymfeknuter
Lymfeknuter er sma, bonneformede organer spredt langs lymfekarene. De:
- Filtrerer lymfe for patogener
- Inneholder mange B- og T-celler
- Er stedet der immunresponsen ofte starter
- Kan hovne opp under infeksjon (hovne lymfekjertler)

### Andre lymfatiske organer
- **Milten**: Filtrerer blod, fjerner gamle blodceller, inneholder mange immunceller
- **Thymus**: Hvor T-celler modnes og larer a skille "selv" fra "ikke-selv"
- **Tonsiller og adenoid**: Forsvarer inngangene til luft- og fordoyelsesveier
- **Beinmarg**: Produserer alle blodceller, inkludert immunceller`,
    },
    {
      id: 'bio1-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Hva skjer nar du far en flenge?',
      problem: 'Beskriv trinn for trinn hva som skjer i immunforsvaret nar du skjarer deg i fingeren og bakterier kommer inn i saret.',
      solution: `**Immunrespons ved sarkutt:**

**1. Fysiske barrierer brytes:**
Huden er gjennombrutt, og bakterier far tilgang til vevet under.

**2. Medfodt immunrespons (minutter-timer):**
- Vevsskade frigjor alarmsignaler (cytokiner, histamin)
- Blodkar utvider seg - rodhet og varme
- Kar blir mer gjennomtrengelige - hevelse
- Noytrofile granulocytter ankommer forst og begynner fagocytose
- Makrofager folger etter og spiser bakterier
- Inflammasjon oppstar - smerte

**3. Kobling til ervervet immunrespons:**
- Dendrittiske celler tar opp antigener og reiser til narmeste lymfeknute
- Antigener presenteres for T-celler

**4. Ervervet immunrespons (dager):**
- Hjelper-T-celler aktiveres og koordinerer responsen
- B-celler aktiveres og produserer antistoffer
- Antistoffer merker bakterier for destruksjon
- Infeksjonen bekjempes

**5. Hukommelse dannes:**
- Hukommelses-B- og T-celler lagres
- Neste gang samme bakterie angriper, reagerer kroppen raskere`,
    },
    {
      id: 'bio1-10-1-example-2',
      type: 'example',
      title: 'Eksempel: Hvorfor far vi feber?',
      problem: 'Forklar hvorfor kroppen oker temperaturen ved infeksjon, og hvordan dette hjelper immunforsvaret.',
      solution: `**Feber som forsvarsmekanism:**

Feber er ikke en sykdom, men et forsvar. Nar immunforsvaret oppdager patogener, frigjor immunceller stoffer (pyrogener) som pavirker temperatursenteret i hypothalamus.

**Fordeler med forhøyet temperatur:**
1. **Hemmer patogenvekst**: Mange bakterier og virus formerer seg darligere ved hoyere temperatur
2. **Oker immunaktivitet**: Immunceller fungerer mer effektivt
3. **Oker metabolismen**: Raskere produksjon av antistoffer og immunceller
4. **Senker jernniva i blodet**: Bakterier trenger jern for a vokse

**Normal feber (38-39°C)** er derfor nyttig og bor ikke alltid behandles. Hoy feber (over 40°C) kan vare farlig og krever medisinsk oppfolging.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-10-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken celletype kalles "kroppens store etere" og patruljerer vev for a finne patogener?',
      options: [
        { id: 'a', text: 'Makrofager', isCorrect: true },
        { id: 'b', text: 'B-celler', isCorrect: false },
        { id: 'c', text: 'T-celler', isCorrect: false },
        { id: 'd', text: 'Rodblodceller', isCorrect: false },
      ],
      solution: 'Makrofager (som betyr "store etere") er fagocytter som patruljerer vev og spiser patogener, dode celler og fremmedlegemer gjennom fagocytose.',
    },
    {
      id: 'bio1-10-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom medfodt og ervervet immunforsvar. Gi minst tre forskjeller.',
      solution: '1) Medfodt immunforsvar reagerer raskt (minutter-timer), ervervet tar dager-uker. 2) Medfodt er uspesifikt og reagerer likt pa alle patogener, ervervet er spesifikt mot bestemte antigener. 3) Medfodt har ingen hukommelse, ervervet utvikler immunologisk hukommelse. 4) Medfodt inkluderer barrierer og fagocytter, ervervet inkluderer B- og T-celler med antistoffer.',
    },
    {
      id: 'bio1-10-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor modnes T-celler?',
      options: [
        { id: 'a', text: 'I thymus', isCorrect: true },
        { id: 'b', text: 'I beinmargen', isCorrect: false },
        { id: 'c', text: 'I milten', isCorrect: false },
        { id: 'd', text: 'I lymfeknuter', isCorrect: false },
      ],
      solution: 'T-celler dannes i beinmargen, men modnes i thymus (T for Thymus). Her larer de a gjenkjenne kroppens egne celler og reagere pa fremmede antigener.',
    },
    {
      id: 'bio1-10-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva som skjer i kroppen under en inflammasjon (betennelsesreaksjon). Hvorfor er dette nyttig selv om det foler vondt?',
      solution: 'Ved inflammasjon utvider blodkarene seg (gir rodhet og varme) og blir mer gjennomtrengelige (gir hevelse). Smertesignaler varsler om skade. Dette er nyttig fordi: 1) Flere immunceller kan na omradet. 2) Antistoffer og komplementproteiner lekker til vevet. 3) Okt blodtilforsel gir naringsstoffer for reparasjon. 4) Smerte minner oss om a beskytte omradet.',
    },
    {
      id: 'bio1-10-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan det medfodte og ervervede immunforsvaret samarbeider ved en infeksjon. Inkluder dendrittiske cellers rolle.',
      solution: 'Ved infeksjon reagerer det medfodte forsvaret forst med barrierer og fagocytter. Dendrittiske celler tar opp antigener fra patogener og transporterer dem til lymfeknuter. Der presenterer de antigenene for T-celler, noe som starter den ervervede immunresponsen. Hjelper-T-celler aktiverer B-celler til a produsere antistoffer. Antistoffer merker patogener for fagocytose (opsonisering), slik at det medfodte forsvaret blir mer effektivt. Slik forsterker systemene hverandre.',
    },
    {
      id: 'bio1-10-1-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedfunksjonen til lymfeknuter?',
      options: [
        { id: 'a', text: 'Filtrere lymfe og starte immunrespons', isCorrect: true },
        { id: 'b', text: 'Produsere rode blodceller', isCorrect: false },
        { id: 'c', text: 'Lagre fett', isCorrect: false },
        { id: 'd', text: 'Produsere hormoner', isCorrect: false },
      ],
      solution: 'Lymfeknuter filtrerer lymfe for patogener og er stedet der B- og T-celler motes med antigener. Nar vi har infeksjon, kan lymfeknutene hovne opp fordi immunceller formerer seg der.',
    },
  ],
};

// ============================================================================
// Kapittel 10.2: Antistoffer og immunitet
// ============================================================================

export const CHAPTER_BIOLOGI_1_10_2: TextbookChapter = {
  id: 'biologi-1-10-2',
  courseId: 'biologi-1',
  chapterNumber: '10.2',
  title: 'Antistoffer og immunitet',
  description: 'Antistoffers struktur, antigen-antistoff-binding og immunologisk hukommelse.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive antistoffers struktur og funksjon',
    'forklare prinsippet bak immunologisk hukommelse',
    'gjore rede for primar og sekundar immunrespons',
  ],
  content: [
    {
      id: 'bio1-10-2-intro',
      type: 'text',
      content: `# Antistoffer og immunitet

Antistoffer er noe av det mest fascinerende ved immunforsvaret. Disse Y-formede proteinene kan gjenkjenne millioner av forskjellige fremmede molekyler med ekstrem presisjon.

## Hva er antistoffer?

Antistoffer (immunglobuliner) er proteiner produsert av B-celler (mer presist: plasmaceller). De sirkulerer i blodet og lymfen, og binder seg spesifikt til antigener pa patogener.

Nar et antistoff binder et antigen, gjor det patogenen ufarlig pa flere mater:
- Noytraliser patogenet direkte
- Merker det for destruksjon av fagocytter (opsonisering)
- Aktiverer komplementsystemet`,
    },
    {
      id: 'bio1-10-2-def-antistoff',
      type: 'definition',
      title: 'Antistoff',
      content: 'Et antistoff (immunglobulin, Ig) er et Y-formet protein produsert av plasmaceller (aktiverte B-celler). Antistoffet har to bindingsseter som spesifikt gjenkjenner et bestemt antigen. Det finnes fem hovedklasser: IgG, IgM, IgA, IgE og IgD, med ulike funksjoner i immunforsvaret.',
    },
    {
      id: 'bio1-10-2-struktur',
      type: 'text',
      content: `## Antistoffenes struktur

Antistoffer har en karakteristisk Y-form bestaende av:

### Fire polypeptidkjeder
- **To tunge kjeder (H)**: Lengre kjeder som danner "stammen" og deler av "armene"
- **To lette kjeder (L)**: Kortere kjeder i "armene"
- Kjedene holdes sammen av disulfidbroer

### Regioner
**Variable region (V)**
- I enden av "armene"
- Varierer mellom antistoffer
- Inneholder antigenbindingssetet
- Gir spesifisitet mot et bestemt antigen

**Konstant region (C)**
- "Stammen" av antistoffet
- Lik innenfor hver antistoffklasse
- Bestemmer antistoffets funksjon
- Binder til reseptorer pa immunceller

### Antistoffklasser
| Klasse | Funksjon |
|--------|----------|
| IgG | Vanligst i blodet, krysser placenta |
| IgM | Forste antistoff produsert, aktiverer komplement |
| IgA | I slim og melk, beskytter slimhinner |
| IgE | Allergiske reaksjoner, parasittforsvar |
| IgD | Pa overflaten av B-celler, signalering |`,
    },
    {
      id: 'bio1-10-2-def-antigen',
      type: 'definition',
      title: 'Antigen og epitop',
      content: 'Et antigen er ethvert molekyl som kan utlose en immunrespons. Antigener er ofte proteiner eller polysakkarider pa overflaten av patogener. En epitop er den spesifikke delen av antigenet som antistoffet binder til. Et antigen kan ha flere ulike epitoper, og dermed binde ulike antistoffer.',
    },
    {
      id: 'bio1-10-2-binding',
      type: 'text',
      content: `## Antigen-antistoff-binding

Bindingen mellom antigen og antistoff er som en nokkel i en las - de ma passe perfekt sammen.

### Las-og-nokkel-prinsippet
- Antigenbindingssetet pa antistoffet har en spesifikk 3D-form
- Epitopen pa antigenet ma ha komplementar form
- Bindingen er spesifikk men reversibel (ikke-kovalent)

### Hva skjer nar antistoffer binder?

**1. Noytraliseringering**
Antistoffet dekker patogenet og blokkerer dets evne til a infisere celler.

**2. Opsonisering**
Antistoffmerking gjor at fagocytter gjenkjenner og spiser patogenet mer effektivt.

**3. Komplementaktivering**
Antistoffbinding aktiverer komplementsystemet som:
- Lager hull i patogenmembraner
- Oker opsonisering
- Rekrutterer flere immunceller

**4. Agglutinering**
Antistoffer kan binde flere patogener sammen i klumper, som er lettere a fagocyttere.`,
    },
    {
      id: 'bio1-10-2-def-immunrespons',
      type: 'definition',
      title: 'Primar og sekundar immunrespons',
      content: 'Primarrespons er immunsystemets forste respons mot et nytt antigen - den tar 1-2 uker a utvikle. Sekundarrespons oppstar ved ny eksponering for samme antigen - den er raskere (1-3 dager), sterkere og varer lenger. Forskjellen skyldes immunologisk hukommelse fra hukommelsesceller dannet under primarresponsen.',
    },
    {
      id: 'bio1-10-2-hukommelse',
      type: 'text',
      content: `## Immunologisk hukommelse

Det som gjor det ervervede immunforsvaret sa kraftfullt, er dets evne til a huske tidligere moter med patogener.

### Klonal seleksjon
1. Kroppen har millioner av B-celler med ulike antistoffspesifisiteter
2. Nar et antigen motes, aktiveres kun B-celler som gjenkjenner det
3. Disse cellene formerer seg (klonal ekspansjon)
4. Noen blir plasmaceller (produserer antistoffer)
5. Andre blir hukommelsesceller (lever i arti)

### Primarrespons vs. sekundarrespons

**Primarrespons:**
- Tar 1-2 uker a utvikle
- Produserer hovedsakelig IgM forst, sa IgG
- Moderat antistoffniva
- Dannes hukommelsesceller

**Sekundarrespons:**
- Starter innen 1-3 dager
- Produserer raskt store mengder IgG
- 100-1000 ganger hoyere antistoffniva
- Raskere og mer effektiv patogeneliminering

### Livslang immunitet
For noen sykdommer (meslinger, kusma) gir en infeksjon livslang immunitet. Hukommelsesceller lever i arti og kan reaktiveres raskt ved ny eksponering.`,
    },
    {
      id: 'bio1-10-2-example-1',
      type: 'example',
      title: 'Eksempel: Hvorfor virker vaksinasjon?',
      problem: 'Forklar hvorfor en person som har blitt vaksinert mot meslinger sjelden blir syk hvis de utsettes for meslingvirus.',
      solution: `**Vaksinasjon og immunologisk hukommelse:**

**1. Ved vaksinasjon:**
- Personen far vaksine med svekkede eller inaktiverte meslingvirus (eller deler av viruset)
- Disse kan ikke forarsake sykdom
- Men immunforsvaret gjenkjenner antigenene og starter en immunrespons

**2. Primarrespons utvikles:**
- B-celler som gjenkjenner meslingantigener aktiveres
- De formerer seg og produserer antistoffer
- Viktigst: Hukommelsesceller dannes og lagres

**3. Ved senere eksponering for ekte virus:**
- Hukommelsescellene gjenkjenner antigenene umiddelbart
- Sekundarrespons starter innen 1-3 dager
- Store mengder spesifikke antistoffer produseres raskt
- Viruset elimineres for det rekker a forarsake sykdom

**Derfor:** Den vaksinerte personen har "fatt" immunologisk hukommelse uten a ha vart syk, og kan bekjempe infeksjonen sa raskt at symptomer aldri utvikles.`,
    },
    {
      id: 'bio1-10-2-example-2',
      type: 'example',
      title: 'Eksempel: Blodtypeantistoffer',
      problem: 'Forklar hvorfor en person med blodtype A ikke kan motta blod fra en person med blodtype B.',
      solution: `**Blodtyper og antistoffer:**

**Bakgrunn:**
- Blodtyper bestemmes av antigener (A og B) pa rode blodceller
- Personer utvikler antistoffer mot antigener de selv ikke har

**Blodtype A:**
- Har A-antigener pa rode blodceller
- Har anti-B-antistoffer i plasma (utvikles naturlig)

**Hva skjer ved feil blodoverføring:**
1. Person med blodtype A mottar blod med B-antigener
2. Anti-B-antistoffene i mottakerens blod gjenkjenner B-antigenene
3. Antistoffer binder til de fremmede blodcellene
4. Dette forer til:
   - Agglutinering (klumping) av blodceller
   - Komplementaktivering
   - Hemolyse (ødeleggelse av rode blodceller)
5. Resultatet kan vare alvorlig transfusjonsreaksjon, nyresvikt og dod

**Kompatibilitet:**
| Blodtype | Kan motta fra |
|----------|---------------|
| A | A, O |
| B | B, O |
| AB | A, B, AB, O |
| O | O |`,
    },
  ],
  exercises: [
    {
      id: 'bio1-10-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken form har antistoffer?',
      options: [
        { id: 'a', text: 'Y-form', isCorrect: true },
        { id: 'b', text: 'Sirkular', isCorrect: false },
        { id: 'c', text: 'Spiralformet', isCorrect: false },
        { id: 'd', text: 'Kubisk', isCorrect: false },
      ],
      solution: 'Antistoffer har en karakteristisk Y-form med to "armer" (antigenbindingsseter) og en "stamme" (som binder til reseptorer pa immunceller).',
    },
    {
      id: 'bio1-10-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom et antigen og en epitop.',
      solution: 'Et antigen er hele molekylet som kan utlose en immunrespons, for eksempel et protein pa overflaten av et virus. En epitop er den spesifikke lille delen av antigenet som antistoffet faktisk binder til. Et stort antigen kan ha mange forskjellige epitoper, slik at ulike antistoffer kan binde til det samme antigenet.',
    },
    {
      id: 'bio1-10-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken antistoffklasse er vanligst i blodet og kan krysse placenta?',
      options: [
        { id: 'a', text: 'IgG', isCorrect: true },
        { id: 'b', text: 'IgM', isCorrect: false },
        { id: 'c', text: 'IgA', isCorrect: false },
        { id: 'd', text: 'IgE', isCorrect: false },
      ],
      solution: 'IgG er den vanligste antistoffklassen i blodet (ca. 75%) og den eneste som kan krysse placenta. Dette gir nyfodte passiv immunitet fra moren i de forste manedene.',
    },
    {
      id: 'bio1-10-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre ulike mater antistoffer kan gjore patogener ufarlige pa.',
      solution: '1) Noytraliseringering: Antistoffer dekker patogenet og blokkerer dets evne til a binde til og infisere celler. 2) Opsonisering: Antistoffmerking gjor at fagocytter lettere gjenkjenner og spiser patogenet. 3) Komplementaktivering: Antistoffbinding aktiverer komplementsystemet som lager hull i membraner og oker betennelse. 4) Agglutinering: Antistoffer kan binde flere patogener sammen i klumper som er lettere a fjerne.',
    },
    {
      id: 'bio1-10-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor sekundarresponsen er raskere og sterkere enn primarresponsen. Bruk begrepene hukommelsesceller og klonal seleksjon.',
      solution: 'Ved primarresponsen ma kroppen forst finne de fa B-cellene som tilfeldigvis gjenkjenner antigenet (klonal seleksjon), deretter ma disse formere seg og differensiere til plasmaceller. Ved sekundarresponsen finnes allerede mange hukommelsesceller som er klare til a reagere - de trenger ikke forst a bli "funnet" og behover kortere tid for a aktiveres og differensiere. I tillegg har hukommelsesceller gjennomgatt affinitetsmodning, slik at de produserer antistoffer med bedre binding til antigenet.',
    },
    {
      id: 'bio1-10-2-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke celler produserer antistoffer?',
      options: [
        { id: 'a', text: 'Plasmaceller (aktiverte B-celler)', isCorrect: true },
        { id: 'b', text: 'T-celler', isCorrect: false },
        { id: 'c', text: 'Makrofager', isCorrect: false },
        { id: 'd', text: 'NK-celler', isCorrect: false },
      ],
      solution: 'Plasmaceller er fullt differensierte B-celler som har spesialisert seg pa a produsere store mengder antistoffer. En plasmacelle kan produsere tusenvis av antistoffmolekyler per sekund.',
    },
  ],
};

// ============================================================================
// Kapittel 10.3: Vaksiner
// ============================================================================

export const CHAPTER_BIOLOGI_1_10_3: TextbookChapter = {
  id: 'biologi-1-10-3',
  courseId: 'biologi-1',
  chapterNumber: '10.3',
  title: 'Vaksiner',
  description: 'Hvordan vaksiner virker, ulike vaksinetyper, flokkimmunitet og vaksinasjonsprogrammer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hvordan vaksiner virker',
    'beskrive ulike typer vaksiner',
    'gjore rede for flokkimmunitet og folkehelse',
  ],
  content: [
    {
      id: 'bio1-10-3-intro',
      type: 'text',
      content: `# Vaksiner

Vaksiner er et av de mest effektive verktoyene vi har for a forebygge smittsomme sykdommer. De har reddet millioner av liv og bidratt til a utrydde kopper og nesten utrydde polio.

## Vaksinasjonens historie

Ideen om vaksinasjon er gammel. I Kina og India ble folk eksponert for material fra mild kopper for a beskytte mot den dodelige varianten.

**Edward Jenner (1796)** regnes som "vaksinasjonens far". Han oppdaget at melkepiker som hadde hatt kukopper ikke fikk kopper. Ved a smitte en gutt med kukopper, viste han at dette ga beskyttelse mot kopper.

Ordet "vaksine" kommer fra latin "vacca" = ku.

Siden har vaksiner blitt utviklet mot hundrevis av sykdommer, og vaksinasjonsprogrammer har dramatisk redusert forekomsten av mange farlige sykdommer.`,
    },
    {
      id: 'bio1-10-3-def-vaksine',
      type: 'definition',
      title: 'Vaksine',
      content: 'En vaksine er et preparat som stimulerer immunforsvaret til a danne beskyttelse mot en sykdom uten a forarsake selve sykdommen. Vaksinen inneholder antigener (eller genetisk kode for antigener) som far immunforsvaret til a danne antistoffer og hukommelsesceller. Ved senere eksponering for patogenet vil kroppen kunne bekjempe det raskt.',
    },
    {
      id: 'bio1-10-3-hvordan',
      type: 'text',
      content: `## Hvordan vaksiner virker

Vaksiner "lurer" immunforsvaret til a tro at det har motet en farlig patogen, uten at personen blir syk.

### Prinsippet
1. **Vaksinen injiseres** (eller gis oralt/nasalt)
2. **Immunforsvaret aktiveres** - gjenkjenner fremmede antigener
3. **Primarrespons utvikles** - B- og T-celler aktiveres
4. **Hukommelsesceller dannes** - langtidsbeskyttelse etableres
5. **Ved senere eksponering** - rask sekundarrespons eliminerer patogenet

### Krav til en god vaksine
- **Sikker**: Ma ikke forarsake sykdom
- **Effektiv**: Ma gi god beskyttelse
- **Langvarig**: Beskyttelsen bor vare lenge
- **Stabil**: Ma tale lagring og transport
- **Rimelig**: Ma kunne produseres og distribueres bredt`,
    },
    {
      id: 'bio1-10-3-typer',
      type: 'text',
      content: `## Ulike typer vaksiner

### 1. Levende, svekkede vaksiner
- Inneholder levende, men svekkede (attenuerte) patogener
- Gir sterk og langvarig immunitet
- Kan ikke gis til immunsvekkede
- Eksempler: MMR (meslinger, kusma, rode hunder), oral polio

### 2. Inaktiverte (drept) vaksiner
- Inneholder drepte patogener
- Tryggere enn levende vaksiner
- Krever ofte oppfriskningsdoser
- Eksempler: Influensa (injeksjon), hepatitt A

### 3. Subenhetsvaksiner
- Inneholder bare deler av patogenet (proteiner/polysakkarider)
- Svart trygge
- Kan kreve adjuvans (forsterker) for god effekt
- Eksempler: Hepatitt B, HPV

### 4. Toksoider (toksoidvaksiner)
- Inneholder inaktivert toksin
- Beskytter mot sykdommer forarsaker av bakterietoksiner
- Eksempler: Difteri, stivkrampe (tetanus)

### 5. mRNA-vaksiner
- Inneholder genetisk kode (mRNA) for et antigen
- Kroppens celler lager antigenet selv
- Rask a utvikle og produsere
- Eksempler: COVID-19-vaksiner (Pfizer, Moderna)

### 6. Virale vektorvaksiner
- Bruker ufarlig virus til a levere genetisk kode for antigen
- Eksempler: COVID-19-vaksiner (AstraZeneca, Johnson & Johnson)`,
    },
    {
      id: 'bio1-10-3-def-flokkimmunitet',
      type: 'definition',
      title: 'Flokkimmunitet',
      content: 'Flokkimmunitet (besetningsimmunitet) oppstar nar en tilstrekkelig andel av befolkningen er immun mot en sykdom, slik at smittespredningen stopper opp. Vaksinerte personer beskytter ogsa uvaksinerte ved a bryte smittekjeder. Terskel for flokkimmunitet varierer - for meslinger trengs ca. 95% immunitet, for influensa ca. 50-70%.',
    },
    {
      id: 'bio1-10-3-flokkimmunitet',
      type: 'text',
      content: `## Flokkimmunitet

Flokkimmunitet beskytter hele samfunn, inkludert de som ikke kan vaksineres.

### Hvem kan ikke vaksineres?
- Spedbarn (for unge)
- Gravide (for noen vaksiner)
- Immunsvekkede (kreft, HIV, immunsuppresjon)
- Allergiske mot vaksinekomponenter

### Smittetall (R0)
R0 (reproduksjonstall) angir gjennomsnittlig antall personer en smittet person smitter.

| Sykdom | R0 | Flokkimmunitetsterskel |
|--------|-----|------------------------|
| Meslinger | 12-18 | 92-95% |
| Kikhoste | 12-17 | 92-94% |
| Polio | 5-7 | 80-86% |
| Influensa | 2-3 | 50-67% |

### Nar flokkimmunitet brytes
Hvis vaksinasjonsdekningen faller under terskelen, kan sykdommer som var under kontroll komme tilbake. Dette har skjedd med meslinger i flere land der vaksineskepsis har okt.`,
    },
    {
      id: 'bio1-10-3-def-vaksinasjonsprogram',
      type: 'definition',
      title: 'Barnevaksinasjonsprogrammet',
      content: 'Barnevaksinasjonsprogrammet er et nasjonalt program som tilbyr gratis vaksiner til alle barn. I Norge anbefales vaksiner mot difteri, stivkrampe, kikhoste, polio, Hib-infeksjon, hepatitt B, pneumokokk, meslinger, kusma, rode hunder, HPV og rotavirus. Programmet administreres av helsestasjoner og skoler.',
    },
    {
      id: 'bio1-10-3-program',
      type: 'text',
      content: `## Vaksinasjonsprogrammer

### Det norske barnevaksinasjonsprogrammet
Norge har et veletablert program med hoy oppslutning (ca. 95%).

**Vaksiner gitt i lopet av barndom:**
- 6 uker: Rotavirus
- 3, 5 og 12 md: DTP-IPV-Hib-HepB (6-i-1-vaksine)
- 3, 5 og 12 md: Pneumokokkvaksine
- 15 md: MMR (meslinger, kusma, rode hunder)
- 6 ar: 4-arsvaksine (oppfriskning)
- 7. klasse: HPV
- 10. klasse: DTP-IPV oppfriskning

### Globalt perspektiv
- WHO koordinerer globale vaksinasjonsprogrammer
- Kopper ble utryddet i 1980 gjennom vaksinasjon
- Polio er nesten utryddet (kun endemisk i noen fa land)
- GAVI (vaksinealliansen) hjelper lavinntektsland

### Utfordringer
- Vaksineskepsis og feilinformasjon
- Logistikk (koldekjede) i fattige omrader
- Kostnader for nye vaksiner
- Utvikling av vaksiner mot vanskelige patogener (HIV, malaria)`,
    },
    {
      id: 'bio1-10-3-example-1',
      type: 'example',
      title: 'Eksempel: Hvorfor trenger vi arlig influensavaksine?',
      problem: 'Forklar hvorfor influensavaksinen ma tas pa nytt hvert ar, mens meslingvaksinen gir livslang beskyttelse.',
      solution: `**Forskjell mellom influensa- og meslingvirus:**

**Meslingvirus:**
- Svart stabil - muterer lite
- Alle meslingvirus har nesten identiske antigener
- En gang vaksinert gir hukommelsesceller livslang beskyttelse
- Sekundarrespons fungerer mot alle meslingvirus

**Influensavirus:**
- Muterer raskt (antigen drift)
- Kan ogsa gjennomga store endringer (antigen shift)
- Nye virusvarianter har endrede antigener
- Fjorarets antistoffer gjenkjenner ikke arets virus godt nok

**Konsekvens:**
Influensavaksinen ma oppdateres arlig basert pa hvilke virusstammer som forventes a dominere. WHO overvaker influensavirus globalt og anbefaler sammensetningen av neste sesongs vaksine.

**Eksempel pa antigen shift:**
I 2009 oppsto en helt ny H1N1-variant ("svineinfluensa") som fa hadde immunitet mot - dette forarsaker pandemier.`,
    },
    {
      id: 'bio1-10-3-example-2',
      type: 'example',
      title: 'Eksempel: mRNA-vaksiner',
      problem: 'Forklar hvordan mRNA-vaksiner (som Pfizer og Moderna COVID-19-vaksiner) virker. Hvorfor ble de utviklet sa raskt?',
      solution: `**Hvordan mRNA-vaksiner virker:**

**1. Vaksinen inneholder mRNA**
- mRNA er genetisk kode for et virusprotein (spike-proteinet for COVID-19)
- mRNA er pakket inn i lipidnanopartikler for beskyttelse

**2. Opptak i celler**
- Lipidnanopartiklene fusjonerer med cellemembraner
- mRNA slippes inn i cytoplasma

**3. Proteinsyntese**
- Cellens ribosomer leser mRNA og lager spike-protein
- mRNA brytes ned etter kort tid (timer-dager)

**4. Immunrespons**
- Spike-proteinet presenteres pa celleoverflaten
- Immunforsvaret gjenkjenner det som fremmed
- B- og T-celler aktiveres, hukommelsesceller dannes

**Hvorfor rask utvikling?**
1. **Teknologien var klar**: mRNA-forskning paskjonte i arati
2. **Parallelle prosesser**: Testing og produksjon skjedde samtidig
3. **Massiv finansiering**: Milliardbelop investert raskt
4. **Stor rekruttering**: Mange frivillige i kliniske forsok
5. **Regulatorisk prioritering**: Myndigheter behandlet soknader raskt

**Viktig:** Ingen sikkerhetssteg ble hoppet over - prosessene ble bare gjort parallelt i stedet for sekvensielt.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-10-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedprinsippet bak vaksinasjon?',
      options: [
        { id: 'a', text: 'A trene immunforsvaret til a gjenkjenne en patogen uten a forarsake sykdom', isCorrect: true },
        { id: 'b', text: 'A gi antibiotika som dreper patogener', isCorrect: false },
        { id: 'c', text: 'A styrke huden som barriere', isCorrect: false },
        { id: 'd', text: 'A oke kroppstemperaturen', isCorrect: false },
      ],
      solution: 'Vaksiner inneholder antigener (eller kode for antigener) som aktiverer immunforsvaret til a danne hukommelsesceller, uten at man blir syk. Ved senere eksponering kan kroppen raskt bekjempe patogenet.',
    },
    {
      id: 'bio1-10-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre forskjellige typer vaksiner og gi et eksempel pa hver.',
      solution: '1) Levende, svekkede vaksiner: Inneholder svekkede patogener som gir sterk immunitet (eks: MMR-vaksine). 2) Inaktiverte vaksiner: Inneholder drepte patogener (eks: influensainjeksjon). 3) mRNA-vaksiner: Inneholder genetisk kode som far kroppen til a lage antigen (eks: Pfizer/Moderna COVID-vaksiner). Andre typer: Subenhetsvaksiner (HPV), toksoider (tetanus), virale vektorer (AstraZeneca).',
    },
    {
      id: 'bio1-10-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er flokkimmunitet?',
      options: [
        { id: 'a', text: 'Nar nok mennesker er immune til at smittespredningen stopper', isCorrect: true },
        { id: 'b', text: 'Nar alle i en flokk har fatt samme vaksine', isCorrect: false },
        { id: 'c', text: 'Immunitet man arver fra foreldrene', isCorrect: false },
        { id: 'd', text: 'Nar dyr og mennesker deler immunitet', isCorrect: false },
      ],
      solution: 'Flokkimmunitet oppstar nar tilstrekkelig mange er immune (gjennom vaksinasjon eller tidligere sykdom) til at smittekjedene brytes. Dette beskytter ogsa de som ikke kan vaksineres.',
    },
    {
      id: 'bio1-10-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor flokkimmunitet er viktig for de som ikke kan vaksineres. Gi eksempler pa hvem dette gjelder.',
      solution: 'Flokkimmunitet beskytter folk som ikke kan vaksineres ved a bryte smittekjedene i samfunnet. Disse personene inkluderer: 1) Spedbarn som er for unge til vaksiner, 2) Immunsvekkede pasienter (kreftpasienter, organtransplanterte), 3) Personer med alvorlige allergier mot vaksinekomponenter, 4) Noen gravide. Nar nok mennesker rundt dem er immune, er sjansen for at de mater smitte mye lavere.',
    },
    {
      id: 'bio1-10-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drofter hvorfor vaksineskepsis kan vare et problem for folkehelsen. Bruk begrepet flokkimmunitet i svaret.',
      solution: 'Vaksineskepsis reduserer vaksinasjonsdekningen i befolkningen. Hvis dekningen faller under terskelen for flokkimmunitet, kan sykdommer som var under kontroll komme tilbake og spre seg raskt. Dette har skjedd med meslinger i flere land. Konsekvensene rammer sarlig de som ikke kan vaksineres - spedbarn, immunsvekkede og allergikere. Feilinformasjon om vaksinerbivirkninger (som den feilaktig pastand om sammenheng mellom MMR og autisme) har bidratt til synkende oppslutning. Folkehelsemyndighetene ma jobbe aktivt med informasjon og tilgjengelighet for a opprettholde hoy vaksinasjonsdekning.',
    },
    {
      id: 'bio1-10-3-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken sykdom er utryddet globalt gjennom vaksinasjon?',
      options: [
        { id: 'a', text: 'Kopper', isCorrect: true },
        { id: 'b', text: 'Polio', isCorrect: false },
        { id: 'c', text: 'Meslinger', isCorrect: false },
        { id: 'd', text: 'Influensa', isCorrect: false },
      ],
      solution: 'Kopper ble erklart utryddet av WHO i 1980 etter en global vaksinasjonskampanje. Det er den forste og hittil eneste menneskelige sykdommen som er helt utryddet. Polio er nesten utryddet, men finnes fortsatt i noen fa land.',
    },
  ],
};

// ============================================================================
// Kapittel 10.4: Smittsomme sykdommer
// ============================================================================

export const CHAPTER_BIOLOGI_1_10_4: TextbookChapter = {
  id: 'biologi-1-10-4',
  courseId: 'biologi-1',
  chapterNumber: '10.4',
  title: 'Smittsomme sykdommer',
  description: 'Virus, bakterier, parasitter, smitteveier og antibiotikaresistens.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for ulike typer smittsomme sykdommer',
    'beskrive smitteveier og forebygging',
    'drofte antibiotikaresistens som folkehelseproblem',
  ],
  content: [
    {
      id: 'bio1-10-4-intro',
      type: 'text',
      content: `# Smittsomme sykdommer

Smittsomme sykdommer forarsakes av patogener - mikroorganismer som kan spre seg fra person til person eller fra miljo til menneske. Forstaelse av patogener og smitteveier er avgjorende for forebygging og behandling.

## Patogentyper

De viktigste typene sykdomsfremkallende organismer er:
- **Virus**: Ikke-levende partikler
- **Bakterier**: Enkeltcellede prokaryoter
- **Sopp**: Eukaryoter (gjar, mugg)
- **Protozoer**: Encellede eukaryoter (parasitter)
- **Parasittiske ormer**: Flercellede parasitter

Hver type krever ulike behandlingsstrategier.`,
    },
    {
      id: 'bio1-10-4-def-virus',
      type: 'definition',
      title: 'Virus',
      content: 'Virus er submikroskopiske partikler som bestar av genetisk material (DNA eller RNA) omgitt av en proteinkappe (kapsid), noen ganger med en lipidmembran (envelope). Virus er ikke levende - de kan ikke formere seg uten a infisere en vertscelle og bruke dens maskineri. Virus forarsaker sykdommer som influensa, forkjolelse, COVID-19, HIV, meslinger og hepatitt.',
    },
    {
      id: 'bio1-10-4-virus',
      type: 'text',
      content: `## Virus

Virus er de enkleste "organismene" som kan forarsake sykdom.

### Virusstruktur
- **Arvemateriale**: DNA eller RNA (aldri begge)
- **Kapsid**: Proteinkappe som beskytter genomet
- **Envelope**: Noen virus har lipidmembran (fra vertscellen)
- **Spiker**: Proteiner for binding til vertsceller

### Virusformering
1. **Adsorpsjon**: Virus binder til reseptor pa vertscelle
2. **Penetrasjon**: Virus eller dets genom kommer inn i cellen
3. **Replikasjon**: Vertscellen kopierer virusgenomet
4. **Syntese**: Vertscellen lager virusproteiner
5. **Sammensetning**: Nye viruspartikler settes sammen
6. **Frigjoring**: Nye virus forlater cellen (ofte ved a drepe den)

### Virusbehandling
- **Antibiotika virker IKKE mot virus**
- Antivirale legemidler finnes for noen virus (HIV, herpes, hepatitt)
- Vaksiner er beste forebygging
- Immunforsvaret bekjemper de fleste virusinfeksjoner selv`,
    },
    {
      id: 'bio1-10-4-def-bakterier',
      type: 'definition',
      title: 'Patogene bakterier',
      content: 'Patogene bakterier er sykdomsfremkallende prokaryoter. De kan forarsake sykdom ved a invadere vev, produsere giftstoffer (toksiner), eller utlose skadelige immunresponser. Eksempler inkluderer Streptococcus (halsbetennelse), Salmonella (matforgiftning), Mycobacterium tuberculosis (tuberkulose) og Staphylococcus aureus (hudinfeksjoner). De fleste bakterieinfeksjoner kan behandles med antibiotika.',
    },
    {
      id: 'bio1-10-4-bakterier',
      type: 'text',
      content: `## Bakterier

De fleste bakterier er ufarlige eller nyttige, men noen er patogene.

### Bakteriestruktur
- **Kromosom**: Sirkurlert DNA i nukleoid
- **Cellevegg**: Peptidoglykan (ma l for antibiotika)
- **Plasmider**: Sma DNA-ringer, kan bare resistensgener
- **Flageller**: Bevegelse (hos noen)
- **Pili**: Feste og konjugasjon

### Hvordan bakterier gjor oss syke
1. **Invasjon**: Bakterier formerer seg i vev
2. **Toksinproduksjon**: Skadelige stoffer frigjores
3. **Immunreaksjon**: Overdreven betennelse kan skade

### Bakterielle sykdommer
| Bakterie | Sykdom |
|----------|--------|
| Streptococcus pyogenes | Halsbetennelse |
| Salmonella | Matforgiftning |
| E. coli (visse stammer) | Tarminfeksjon |
| Mycobacterium tuberculosis | Tuberkulose |
| Borrelia burgdorferi | Borreliose |`,
    },
    {
      id: 'bio1-10-4-smitteveier',
      type: 'text',
      content: `## Smitteveier

Patogener spres pa ulike mater. A kjenne smitteveiene er viktig for forebygging.

### Direkte kontaktsmitte
- Fysisk kontakt mellom mennesker
- Eksempler: MRSA, herpes, seksuelt overforbare infeksjoner

### Drapesmitte
- Sma draper fra hosting/nysing
- Draper faller til bakken innen 1-2 meter
- Eksempler: Influensa, forkjolelse, COVID-19

### Luftsmitte
- Sma partikler (aerosoler) som svever i luften lenge
- Kan smitte over storre avstander
- Eksempler: Meslinger, tuberkulose

### Fekal-oral smitte
- Smitte via avforing som forurenser mat/vann
- Eksempler: Norovirus, salmonella, hepatitt A

### Vektorborn smitte
- Smitte via insekter eller andre dyr
- Eksempler: Malaria (mygg), borreliose (flatt)

### Blodbaren smitte
- Smitte via blod eller kroppsvesker
- Eksempler: HIV, hepatitt B og C`,
    },
    {
      id: 'bio1-10-4-def-antibiotika',
      type: 'definition',
      title: 'Antibiotika',
      content: 'Antibiotika er legemidler som dreper eller hemmer veksten av bakterier. De virker ved a angripe strukturer eller prosesser som finnes i bakterier men ikke i menneskeceller (f.eks. cellevegg, ribosomer). Antibiotika virker IKKE mot virus. Feil eller overflodig bruk av antibiotika bidrar til utvikling av antibiotikaresistens.',
    },
    {
      id: 'bio1-10-4-resistens',
      type: 'text',
      content: `## Antibiotikaresistens

Antibiotikaresistens er en av var tids storste helsetrusler.

### Hva er resistens?
Resistente bakterier har utviklet mekanismer for a overleve antibiotikabehandling:
- Enzymer som bryter ned antibiotika
- Endrede malproteiner som antibiotika ikke binder til
- Pumper som fjerner antibiotika fra cellen
- Redusert opptak av antibiotika

### Hvordan utvikles resistens?
1. **Naturlig seleksjon**: Noen bakterier har tilfeldige mutasjoner som gir resistens
2. **Seleksjon**: Antibiotika dreper folsomme bakterier, resistente overlever
3. **Formering**: Resistente bakterier formerer seg og dominerer
4. **Spredning**: Resistensgener kan spres til andre bakterier via plasmider

### Arsaker til okt resistens
- Overflodig antibiotikabruk hos mennesker
- Antibiotika i landbruk (dyrefôr)
- Manglende fullforelse av behandlinger
- Spredning pa sykehus

### Konsekvenser
- Infeksjoner blir vanskeligere a behandle
- Lengre sykdom, mer komplikasjoner
- Okt dodelighet
- Kirurgi og kreftbehandling blir farligere

### MRSA
Meticillinresistent Staphylococcus aureus (MRSA) er et eksempel pa en farlig resistent bakterie som er spesielt problematisk pa sykehus.`,
    },
    {
      id: 'bio1-10-4-pandemi',
      type: 'text',
      content: `## Epidemi og pandemi

### Definisjoner
- **Endemisk**: Sykdom som stadig finnes i et omrade
- **Utbrudd**: Plutselig okning over normalt niva
- **Epidemi**: Stort utbrudd i en region
- **Pandemi**: Epidemi som sprer seg globalt

### Historiske pandemier
| Pandemi | Arsak | Tidspunkt | Dodsfall |
|---------|-------|-----------|----------|
| Svartedauden | Bakterie (Yersinia pestis) | 1347-1351 | 75-200 millioner |
| Spanskesyken | Influensavirus H1N1 | 1918-1920 | 50-100 millioner |
| HIV/AIDS | HIV | 1981- | 40+ millioner |
| COVID-19 | SARS-CoV-2 | 2019- | 7+ millioner |

### Pandemiforebygging
- Overvaking av nye patogener
- Rask identifisering og respons
- Vaksineutvikling
- Internasjonal koordinering (WHO)
- Folkehelseprepardness`,
    },
    {
      id: 'bio1-10-4-example-1',
      type: 'example',
      title: 'Eksempel: Hvorfor virker ikke antibiotika mot virus?',
      problem: 'Forklar pa celleniva hvorfor antibiotika ikke kan drepe virus.',
      solution: `**Antibiotika vs. virus:**

**Hvordan antibiotika virker:**
Antibiotika angriper strukturer og prosesser som er unike for bakterier:
- **Cellevegg**: Penicillin hindrer celleveggproduksjon (virus har ikke cellevegg)
- **Ribosomer**: Noen antibiotika hemmer bakterielle 70S-ribosomer
- **DNA-replikasjon**: Visse antibiotika hemmer bakterie-spesifikke enzymer

**Hvorfor virus er immune:**
1. Virus har ikke cellevegg - penicillin har ingenting a angripe
2. Virus har ikke egne ribosomer - de bruker vertscellens
3. Virus har ikke egen metabolisme - de "lever" ikke
4. Virusreplikasjon skjer inne i vertsceller med vertens maskineri

**Alternativ for virus:**
- Antivirale legemidler (designet for a hemme virusspesifikke prosesser)
- Vaksiner (forebygging)
- Immunforsvaret (behandling av de fleste virusinfeksjoner)

**Viktig for folkehelse:**
A ta antibiotika mot virusinfeksjoner (f.eks. forkjolelse) hjelper ikke, men bidrar til antibiotikaresistens!`,
    },
    {
      id: 'bio1-10-4-example-2',
      type: 'example',
      title: 'Eksempel: Hvordan oppstar antibiotikaresistens?',
      problem: 'En pasient far antibiotika mot en bakterieinfeksjon, men slutter a ta tablettene nar symptomene forsvinner (etter 3 dager i stedet for 7). Forklar hvordan dette kan bidra til resistensutvikling.',
      solution: `**Scenario: Ufullstendig antibiotikabehandling**

**Dag 1-3 (behandlingen pagar):**
- Antibiotika dreper de fleste bakteriene
- Symptomene bedres fordi bakterietallet synker
- Men de mest resistente bakteriene overlever lengst

**Nar pasienten slutter:**
- Det er fortsatt noen bakterier igjen
- Disse er typisk de mest motstandsdyktige
- Uten antibiotika kan de na formere seg fritt

**Resultatet:**
1. Infeksjonen kan komme tilbake (residiv)
2. De gjenvarende bakteriene er mer resistente
3. Ved ny behandling vil antibiotika vare mindre effektivt
4. Resistente bakterier kan spres til andre

**Lardommen:**
- Fullfor alltid hele antibiotikakuren, selv om du foler deg bedre
- Antibiotika skal kun brukes nar det er nodvendig
- Riktig dose i riktig tid er viktig

**Analogien:**
Det er som a presse ned ugress i hagen, men gi opp for alt er borte - de sterkeste ugressplantene vokser tilbake sterkere.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-10-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken pastand om virus er korrekt?',
      options: [
        { id: 'a', text: 'Virus kan ikke formere seg uten en vertscelle', isCorrect: true },
        { id: 'b', text: 'Virus har bade DNA og RNA', isCorrect: false },
        { id: 'c', text: 'Antibiotika er effektiv behandling mot virus', isCorrect: false },
        { id: 'd', text: 'Virus er store nok til a ses i vanlig mikroskop', isCorrect: false },
      ],
      solution: 'Virus er ikke levende og kan ikke formere seg pa egen hand. De ma infisere en vertscelle og bruke dens maskineri til a kopiere seg selv. Virus har enten DNA eller RNA (aldri begge), og antibiotika virker ikke mot dem.',
    },
    {
      id: 'bio1-10-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom drapesmitte og luftsmitte. Gi et eksempel pa hver.',
      solution: 'Drapesmitte: Patogener spres via store draper som produseres ved hosting/nysing. Drapene er tunge og faller til bakken innen 1-2 meter. Eksempler: influensa, forkjolelse. Luftsmitte: Patogener spres via sma partikler (aerosoler) som kan sveve i luften i lengre tid og over storre avstander. Eksempler: meslinger, tuberkulose. Luftbarne sykdommer er ofte mer smittsomme fordi de kan na flere mennesker.',
    },
    {
      id: 'bio1-10-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den viktigste arsaken til at antibiotikaresistens utvikler seg?',
      options: [
        { id: 'a', text: 'Naturlig seleksjon der resistente bakterier overlever antibiotikabehandling', isCorrect: true },
        { id: 'b', text: 'Virus som overforer resistensgener til bakterier', isCorrect: false },
        { id: 'c', text: 'Menneskekroppen som tilpasser seg antibiotika', isCorrect: false },
        { id: 'd', text: 'Antibiotika som forandrer seg over tid', isCorrect: false },
      ],
      solution: 'Antibiotikaresistens utvikles gjennom naturlig seleksjon. Nar antibiotika brukes, dreper de folsomme bakterier mens resistente (som har tilfeldige mutasjoner) overlever og formerer seg. Over tid dominerer de resistente. Overflodig bruk av antibiotika oker dette seleksjonspresset.',
    },
    {
      id: 'bio1-10-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn tre ting du kan gjore for a bidra til a bremse utviklingen av antibiotikaresistens.',
      solution: '1) Bruk antibiotika kun nar legen foreskriver det (ikke for virusinfeksjoner). 2) Fullfor alltid hele antibiotikakuren, selv om du foler deg bedre. 3) Ikke del antibiotika med andre eller bruk rester fra tidligere. Andre tiltak: god handhygiene for a unnga infeksjoner, hold vaksinene oppdatert, ikke press legen om antibiotika ved forkjolelse.',
    },
    {
      id: 'bio1-10-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor en pandemi kan vare vanskeligere a kontrollere enn en lokal epidemi. Bruk COVID-19 som eksempel.',
      solution: 'En pandemi sprer seg globalt og krever koordinert innsats mellom mange land med ulike ressurser og politiske systemer. Utfordringer: 1) Internasjonal reise sprer smitte raskt for tiltak kan settes inn. 2) Ulike land har ulik kapasitet til testing, behandling og vaksinering. 3) Informasjonsdeling og koordinering tar tid. 4) Okonomiske interesser kan sta mot folkehelsetiltak. 5) Vaksineproduksjon og distribusjon ma skaleres globalt. COVID-19 viste at selv rike land slet med a kontrollere spredningen, og at virus i ett land kan mutere og spre seg tilbake til andre.',
    },
    {
      id: 'bio1-10-4-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken av disse sykdommene forarsakes av en bakterie?',
      options: [
        { id: 'a', text: 'Tuberkulose', isCorrect: true },
        { id: 'b', text: 'Influensa', isCorrect: false },
        { id: 'c', text: 'COVID-19', isCorrect: false },
        { id: 'd', text: 'Meslinger', isCorrect: false },
      ],
      solution: 'Tuberkulose forarsakes av bakterien Mycobacterium tuberculosis. De andre alternativene er alle virussykdommer: influensa (influensavirus), COVID-19 (SARS-CoV-2), meslinger (meslingvirus).',
    },
  ],
};

// ============================================================================
// Kapittel 10.5: Livsstil og helse
// ============================================================================

export const CHAPTER_BIOLOGI_1_10_5: TextbookChapter = {
  id: 'biologi-1-10-5',
  courseId: 'biologi-1',
  chapterNumber: '10.5',
  title: 'Livsstil og helse',
  description: 'Kosthold, fysisk aktivitet, rusmidler og psykisk helse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for sammenhenger mellom livsstil og helse',
    'beskrive hvordan kosthold og fysisk aktivitet pavirker kroppen',
    'drofte rusmidlers effekt pa kropp og helse',
  ],
  content: [
    {
      id: 'bio1-10-5-intro',
      type: 'text',
      content: `# Livsstil og helse

Helse er ikke bare fravar av sykdom. Verdens helseorganisasjon (WHO) definerer helse som "en tilstand av fullstendig fysisk, psykisk og sosialt velvare."

## Livsstilssykdommer

I moderne samfunn er mange av de vanligste helsproblemene knyttet til livsstil:
- Hjerte- og karsykdommer
- Type 2-diabetes
- Enkelte krefttyper
- Fedme
- Psykiske lidelser

Disse sykdommene kan i stor grad forebygges gjennom gode livsstilsvalg.`,
    },
    {
      id: 'bio1-10-5-def-kosthold',
      type: 'definition',
      title: 'Balansert kosthold',
      content: 'Et balansert kosthold gir kroppen alle nodvendige naringsstoffer i riktige mengder: karbohydrater (energi), proteiner (bygging/reparasjon), fett (energi, cellemembraner), vitaminer, mineraler, fiber og vann. Helsedirektoratets kostrad anbefaler mye gronnsaker, frukt, fisk, grove kornprodukter og magre meieriprodukter, samt begrenset inntak av rodt kjott, sukker, salt og mettet fett.',
    },
    {
      id: 'bio1-10-5-kosthold',
      type: 'text',
      content: `## Kosthold og ernaring

Maten vi spiser gir energi og byggematerialer til kroppen.

### Makronaringsstoffer
**Karbohydrater (4 kcal/g)**
- Hovedenergililde for kroppen
- Brytes ned til glukose
- Grove karbohydrater gir langsom energifrigjoring
- Sukker gir rask blodsukkerstigning

**Proteiner (4 kcal/g)**
- Byggemateriale for muskler, enzymer, antistoffer
- Bestar av aminosyrer (9 essensielle ma vi fa i kosten)
- Kilder: kjott, fisk, egg, meieri, belgfrukter

**Fett (9 kcal/g)**
- Hoy energitetthet
- Viktig for cellemembraner og hormoner
- Umettet fett (fisk, noatter, olje) er sunnere enn mettet (animalsk)
- Transfett bor unngaes

### Mikronaringsstoffer
- **Vitaminer**: Organiske stoffer nodvendig i sma mengder
- **Mineraler**: Uorganiske stoffer (jern, kalsium, sink)
- Mangel kan gi sykdom (skjorbuk, anemi, rakitt)

### Fiber og vann
- Fiber fra planter er viktig for fordoyelsen
- Vann (1.5-2 liter/dag) er essensielt for alle kroppsfunksjoner`,
    },
    {
      id: 'bio1-10-5-def-aktivitet',
      type: 'definition',
      title: 'Fysisk aktivitet',
      content: 'Fysisk aktivitet er all kroppsbevegelse som forer til energiforbruk. Helsedirektoratet anbefaler minst 150 minutter moderat aktivitet eller 75 minutter hoy intensitet per uke for voksne. For barn og unge anbefales 60 minutter moderat til hoy intensitet daglig. Regelmessig fysisk aktivitet reduserer risiko for hjertesykdom, diabetes, fedme og flere krefttyper.',
    },
    {
      id: 'bio1-10-5-aktivitet',
      type: 'text',
      content: `## Fysisk aktivitet

Kroppen er laget for bevegelse. Stillesittende livsstil er skadelig.

### Helseeffekter av fysisk aktivitet

**Hjerte-karsystemet:**
- Styrker hjertemuskelen
- Senker hvilepuls og blodtrykk
- Oker HDL (godt kolesterol), senker LDL (darlig)
- Reduserer risiko for hjerteinfarkt og hjerneslag

**Muskel-skjelettsystemet:**
- Oker muskelstyrke og utholdenhet
- Styrker knokler (forebygger osteoporose)
- Forbedrer balanse og koordinasjon

**Metabolisme:**
- Oker insulinfolsomhet (forebygger diabetes)
- Hjelper vektkontroll
- Oker forbrenning ogsa i hvile

**Immunforsvaret:**
- Moderat trening styrker immunforsvaret
- OBS: Overtrening kan svekke det

**Psykisk helse:**
- Frigjor endorfiner (naturlig "lykkrus")
- Reduserer stress, angst og depresjon
- Forbedrer sovn og konsentrasjon

### Treningstyper
- **Kondisjon**: Loping, sykling, svomming - styrker hjerte og lunger
- **Styrke**: Vekttrening - bygger muskler og bein
- **Bevegelighet**: Toying, yoga - oker fleksibilitet
- **Balanse**: Viktig for fallforebygging hos eldre`,
    },
    {
      id: 'bio1-10-5-def-rusmiddel',
      type: 'definition',
      title: 'Rusmidler',
      content: 'Rusmidler er stoffer som pavirker sentralnervesystemet og endrer stemningsleie, tenkning eller atferd. De kan vare legale (alkohol, nikotin, koffein) eller illegale (cannabis, amfetamin, heroin). Mange rusmidler skaper avhengighet - en kronisk hjernesykdom der personen tvangsmessig soker rusmidlet til tross for negative konsekvenser.',
    },
    {
      id: 'bio1-10-5-rusmidler',
      type: 'text',
      content: `## Rusmidler og helse

Rusmidler pavirker hjernens belonningssystem og kan fore til avhengighet.

### Alkohol
- Vanligste rusmiddel i Norge
- Pavirker GABA-reseptorer (dempende)
- Akutte effekter: rus, redusert doommekraft, koordinasjonsproblemer
- Kronisk bruk: leverskade, hjernesykdom, okt kreftrisiko
- Avhengighet: fysisk og psykisk

### Nikotin (tobakk)
- Svart avhengighetsskapende
- Stimulerer dopaminfrigjoring
- Helseskader: lungekreft, KOLS, hjertesykdom
- Passiv roking skader andre
- E-sigaretter: usikre langtidseffekter

### Cannabis
- THC pavirker cannabinoidreseptorer i hjernen
- Effekter: endret tidsfornemmelse, oykt matlyst, svekkede kognitive funksjoner
- Risiko: psykose (sarlig ved tidlig debut), avhengighet
- Kan pavirke hjerneutvikling hos unge

### Andre rusmidler
- **Stimulanter** (amfetamin, kokain): Oker dopamin, hoy avhengighetsrisiko
- **Opiater** (heroin, morfin): Smertelindring, ekstrem avhengighet, overdosedod
- **Hallusinogener** (LSD, psilocybin): Endret virkelighetsoppfatning

### Avhengighet
Avhengighet endrer hjernens belonningssystem. Det kreves stadig mer for samme effekt (toleranse), og abstinens oppstar ved stopp. Behandling inkluderer medisiner, terapi og sosial stotte.`,
    },
    {
      id: 'bio1-10-5-psykisk',
      type: 'text',
      content: `## Psykisk helse

Psykisk helse er like viktig som fysisk helse, og de henger sammen.

### Vanlige psykiske lidelser

**Depresjon:**
- Vedvarende nedstemt hurmor, tap av interesse
- Sovnproblemer, apetittendringer
- Kan vare alvorlig og livstruende
- Behandling: terapi, medisiner, livsstilsendringer

**Angst:**
- Overdreven frykt eller bekymring
- Fysiske symptomer: hjertebank, svette, pustevansker
- Ulike typer: generalisert angst, sosial angst, panikk

**Spiseforstyrrelser:**
- Anoreksi (anorexia nervosa): overdreven slanking og frykt for vektøkning
- Bulimi (bulimia nervosa): episoder med overspising etterfulgt av renselse (oppkast, avføringsmidler)
- Overspisingslidelse (binge eating disorder): gjentatte episoder med ukontrollert overspising uten renselse, ofte forbundet med skam og ubehag
- Alle spiseforstyrrelser kan ha alvorlige fysiske og psykiske konsekvenser

*Ved mistanke om spiseforstyrrelser er det viktig å søke profesjonell hjelp. Kontakt fastlege, helsesykepleier eller ROS (Rådgivning om spiseforstyrrelser) på telefon 948 17 818.*

### Faktorer som pavirker psykisk helse
- **Biologiske**: Genetikk, hjernebiokjemi
- **Psykologiske**: Traumer, tankemsonstre
- **Sosiale**: Relasjoner, ekonomi, diskriminering

### Forebygging og hjelp
- Fysisk aktivitet (naturlig antidepressiv)
- Sovn (viktig for psykisk velvere)
- Sosiale relasjoner
- Mening og mestring
- Profesjonell hjelp ved behov

### Stigma
Mange vegrer seg for a soke hjelp pa grunn av stigma. Det er viktig a snakke apent om psykisk helse og behandle det pa lik linje med fysisk helse.`,
    },
    {
      id: 'bio1-10-5-example-1',
      type: 'example',
      title: 'Eksempel: Hvordan pavirker fysisk aktivitet immunforsvaret?',
      problem: 'Beskriv sammenhengen mellom fysisk aktivitet og immunforsvar. Er det alltid positivt a trene mer?',
      solution: `**Fysisk aktivitet og immunforsvar:**

**Moderat regelmessig trening (positivt):**
- Oker sirkulasjonen av immunceller i blodet
- Forbedrer overvakingen av kroppen for patogener
- Reduserer kronisk lavgradig betennelse
- Styrker slimhinneimmuniteten
- Gir bedre sovn som er viktig for immunforsvaret
- Reduserer stress (stress svekker immunforsvaret)

**For mye eller for intens trening (negativt):**
- "Det apne vinduet": Etter svart hard trening er immunforsvaret midlertidig svekket (noen timer til dager)
- Kronisk overtrening kan svekke immunforsvaret over tid
- Utholdenehetsutovere har okt risiko for luftveisinfeksjoner

**Konklusjon:**
Moderat, regelmessig fysisk aktivitet styrker immunforsvaret. Men ekstremt hard trening uten tilstrekkelig restitusjon kan ha motsatt effekt. Balanse er nokelen.

**Praktisk rad:**
- Tren regelmessig men varier intensiteten
- Hvile er en del av treningen
- Ikke tren hardt nar du er syk
- Lytt til kroppen`,
    },
    {
      id: 'bio1-10-5-example-2',
      type: 'example',
      title: 'Eksempel: Hvorfor er ungdomshjernen sarlig sarbar for rusmidler?',
      problem: 'Forklar hvorfor rusmiddelbruk i tenårene kan vare sarlig skadelig for hjerneutvikling.',
      solution: `**Hjerneutvikling i ungdomsarene:**

**Hjernen er ikke ferdig utviklet:**
- Hjernen fortsetter a utvikle seg til ca. 25-arig alder
- Prefrontal cortex (doommekraft, impulskontroll) modnes sist
- Synapsebeskjaring pagar - ubrukte forbindelser fjernes, viktige styrkes

**Rusmidlers pavirkning:**
1. **Plastisitet**: Ungdomshjernen er mer formbar, og rusmidler kan "feilprogrammere" utviklingen

2. **Belonningssystemet**: Er hypersensitivt i ungdomsaren, noe som gjor det lettere a utvikle avhengighet

3. **Cannabiseksempel**:
   - Endocannabinoidsystemet er viktig for normal hjerneutvikling
   - THC forstyrrer dette systemet
   - Studier viser at tidlig cannabisbruk er knyttet til:
     - Lavere IQ
     - Okt risiko for psykose
     - Darligere skoleprestasjoner

4. **Alkoholeksempel**:
   - Kan skade hippocampus (hukommelse)
   - Pavirker hvit substans-utvikling
   - Oker risiko for alkoholisme senere

**Konsekvens:**
Jo tidligere debut med rusmidler, jo storre risiko for:
- Langvarig hjerneskade
- Avhengighet
- Psykiske problemer

**Beskyttende faktor:**
A utsette rusmiddeldebut til hjernen er mer moden (etter 25 ar) reduserer risikoen betydelig.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-10-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mye fysisk aktivitet anbefaler Helsedirektoratet for voksne per uke?',
      options: [
        { id: 'a', text: 'Minst 150 minutter moderat aktivitet', isCorrect: true },
        { id: 'b', text: 'Minst 30 minutter moderat aktivitet', isCorrect: false },
        { id: 'c', text: 'Minst 300 minutter moderat aktivitet', isCorrect: false },
        { id: 'd', text: 'Minst 60 minutter hoy intensitet daglig', isCorrect: false },
      ],
      solution: 'Helsedirektoratet anbefaler minst 150 minutter moderat aktivitet eller 75 minutter hoy intensitet per uke for voksne. For barn og unge anbefales 60 minutter daglig.',
    },
    {
      id: 'bio1-10-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar minst fire positive helseeffekter av regelmessig fysisk aktivitet.',
      solution: '1) Hjerte-kar: Styrker hjertet, senker blodtrykk og forbedrer kolesterolprofil. 2) Metabolisme: Oker insulinfolsomhet (forebygger diabetes) og hjelper vektkontroll. 3) Muskel-skjelett: Bygger styrke, oker beintetthet og forebygger osteoporose. 4) Psykisk helse: Frigjor endorfiner, reduserer stress, angst og depresjon. 5) Immunforsvar: Moderat trening styrker immunforsvaret.',
    },
    {
      id: 'bio1-10-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken pastand om alkohol er korrekt?',
      options: [
        { id: 'a', text: 'Alkohol pavirker GABA-reseptorer og har dempende effekt pa nervesystemet', isCorrect: true },
        { id: 'b', text: 'Alkohol er trygt i alle mengder sa lenge man ikke kjorer bil', isCorrect: false },
        { id: 'c', text: 'Alkohol har kun akutte effekter og er ikke avhengighetsskapende', isCorrect: false },
        { id: 'd', text: 'Alkohol styrker immunforsvaret', isCorrect: false },
      ],
      solution: 'Alkohol binder til og forsterker GABA-reseptorer, som er hjernens viktigste hemmende signalsystem. Dette gir den dempende ruseffekten. Kronisk bruk kan fore til avhengighet og alvorlige helseskader.',
    },
    {
      id: 'bio1-10-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom makro- og mikronaringsstoffer? Gi eksempler pa hver.',
      solution: 'Makronaringsstoffer trengs i store mengder og gir energi (malt i gram per dag): karbohydrater (brød, ris, pasta), proteiner (kjott, fisk, egg) og fett (olje, noatter). Mikronaringsstoffer trengs i sma mengder men er livsnodvendige (malt i milligram/mikrogram): vitaminer (C, D, B-vitaminer) og mineraler (jern, kalsium, sink). Mangel pa mikronaringsstoffer kan gi mangelsykdommer.',
    },
    {
      id: 'bio1-10-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drofter sammenhengen mellom fysisk og psykisk helse. Hvorfor bor vi se pa disse som deler av samme helhetlige helse?',
      solution: 'Fysisk og psykisk helse pavirker hverandre gjensidlig: 1) Fysisk aktivitet frigjor endorfiner og forbedrer psykisk helse. 2) Psykisk stress kan svekke immunforsvaret og oke risiko for fysisk sykdom. 3) Kronisk fysisk sykdom oker risiko for depresjon. 4) Sovn er viktig for bade fysisk og psykisk helse. 5) Kosthold pavirker bade kropp og hjernebiokjemi. WHO definerer helse som "fullstendig fysisk, psykisk og sosialt velvare" - ikke bare fravar av sykdom. Behandling bor ogsa vare helhetlig.',
    },
    {
      id: 'bio1-10-5-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke av disse er viktige deler av et balansert kosthold ifølge Helsedirektoratet?',
      options: [
        { id: 'a', text: 'Mye gronnsaker, frukt, grove kornprodukter og fisk', isCorrect: true },
        { id: 'b', text: 'Mye rodt kjott og meieriprodukter med hoy fettandel', isCorrect: false },
        { id: 'c', text: 'Hoyt inntak av sukker for energi', isCorrect: false },
        { id: 'd', text: 'Lite fiber og vann', isCorrect: false },
      ],
      solution: 'Helsedirektoratets kostrad vektlegger gronnsaker, frukt, bær, grove kornprodukter, fisk og magre meieriprodukter. De anbefaler a begrense rodt kjott, sukker, salt og mettet fett.',
    },
  ],
};

// ============================================================================
// Eksport av alle delkapitler
// ============================================================================

export const BIOLOGI_1_DEL10_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_10_1,
  CHAPTER_BIOLOGI_1_10_2,
  CHAPTER_BIOLOGI_1_10_3,
  CHAPTER_BIOLOGI_1_10_4,
  CHAPTER_BIOLOGI_1_10_5,
];
