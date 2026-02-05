/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Kapittel 7: Økologi og økosystemer
 * Utvidet til 5 delkapitler
 *
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Økosystemets oppbygning
// ============================================================================

export const CHAPTER_BIOLOGI_1_7_1: TextbookChapter = {
  id: 'biologi-1-7-1',
  courseId: 'biologi-1',
  chapterNumber: '7.1',
  title: 'Økosystemets oppbygning',
  description: 'Biotiske og abiotiske faktorer, økologiske nivåer, habitat og nisje.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive forskjellen mellom biotiske og abiotiske faktorer',
    'forklare de ulike økologiske nivåene',
    'gjøre rede for begrepene habitat og nisje',
    'analysere samspillet mellom organismer og deres miljø',
  ],
  content: [
    {
      id: 'bio1-7-1-intro',
      type: 'text',
      content: `# Økosystemets oppbygning

Økologi er læren om hvordan organismer samspiller med hverandre og med sine omgivelser. Ordet økologi kommer fra det greske "oikos" (hus) og "logos" (lære) - altså læren om organismenes "hjem".

## Hva er et økosystem?

Et økosystem er et avgrenset område der levende organismer og det ikke-levende miljøet fungerer som en enhet. Økosystemer kan være av alle størrelser - fra en liten dam til hele biosfæren.

I et økosystem:
- **Energi strømmer** gjennom systemet (fra solen via produsenter til konsumenter)
- **Stoffer sirkulerer** mellom organismer og miljø (karbon, nitrogen, vann)
- **Organismer påvirker hverandre** gjennom ulike interaksjoner`,
    },
    {
      id: 'bio1-7-1-def-biotisk',
      type: 'definition',
      title: 'Biotiske faktorer',
      content: 'Biotiske faktorer er alle levende komponenter i et økosystem som påvirker andre organismer. Dette inkluderer produsenter (planter), konsumenter (dyr), nedbrytere (sopp og bakterier), samt interaksjonene mellom dem som konkurranse, predasjon og mutualisme.',
    },
    {
      id: 'bio1-7-1-def-abiotisk',
      type: 'definition',
      title: 'Abiotiske faktorer',
      content: 'Abiotiske faktorer er alle ikke-levende komponenter i et økosystem som påvirker levende organismer. De viktigste er temperatur, lys, vann, næringsstoffer i jord, pH, saltholdighet, oksygen og vindforhold. Disse faktorene setter rammer for hvilke arter som kan leve i et område.',
    },
    {
      id: 'bio1-7-1-biotisk-abiotisk',
      type: 'text',
      content: `## Biotiske og abiotiske faktorer

### Abiotiske faktorer i detalj

**Klimatiske faktorer:**
- **Temperatur**: Påvirker enzymaktivitet og metabolisme
- **Lys**: Nødvendig for fotosyntese, styrer døgnrytmer
- **Nedbør og luftfuktighet**: Avgjørende for vannbalanse
- **Vind**: Påvirker fordampning og spredning

**Edafiske faktorer (jordfaktorer):**
- **Jordtype og struktur**: Vannlagringsevne og lufttilgang
- **Næringsstoffer**: Nitrogen, fosfor, kalium osv.
- **pH**: Påvirker næringstilgjengelighet
- **Jordorganismer**: Nedbrytere og mykorrhiza

**Topografiske faktorer:**
- **Høyde over havet**: Lavere temperatur og lufttrykk
- **Eksposisjon**: Nord- vs. sørvendte skråninger
- **Terrengform**: Påvirker drenering og lokalklima

### Biotiske faktorer i detalj

**Innenfor egen art:**
- Konkurranse om ressurser
- Parring og reproduksjon
- Sosiale strukturer

**Mellom arter:**
- Konkurranse
- Predasjon (rovdyr-byttedyr)
- Parasittisme
- Mutualisme
- Kommensalisme`,
    },
    {
      id: 'bio1-7-1-okologiske-nivaer',
      type: 'text',
      content: `## Økologiske nivåer

Økologien studerer naturen på ulike organisasjonsnivåer:

### 1. Individ
Det enkelte organisme - den grunnleggende enheten i økologien. Studerer fysiologi, adferd og tilpasninger.

### 2. Populasjon
Alle individer av samme art som lever i et bestemt område og kan pare seg med hverandre. Studerer:
- Populasjonsstørrelse og tetthet
- Fødsels- og dødsrater
- Aldersstruktur
- Vekstmønstre

### 3. Samfunn (biocønose)
Alle populasjoner av ulike arter som lever sammen i et område. Studerer:
- Artsrikdom og diversitet
- Interaksjoner mellom arter
- Næringsnett
- Suksesjon

### 4. Økosystem
Samfunnet pluss de abiotiske faktorene. Studerer:
- Energistrøm
- Stoffkretsløp
- Produktivitet

### 5. Biom
Store geografiske områder med karakteristisk klima og artsammensetning (regnskog, taiga, ørken, tundra osv.)

### 6. Biosfæren
Alle økosystemer på jorden - det tynne laget der liv finnes.`,
    },
    {
      id: 'bio1-7-1-def-habitat',
      type: 'definition',
      title: 'Habitat',
      content: 'Habitat er det fysiske stedet eller miljøet der en art lever - artens "adresse". Et habitat karakteriseres av bestemte abiotiske og biotiske forhold. Eksempler: skogbunn, korallrev, gresslette. En art kan ha ulike habitater i ulike livsstadier (f.eks. frosk: vann som yngel, land som voksen).',
    },
    {
      id: 'bio1-7-1-habitat-nisje',
      type: 'text',
      content: `## Habitat og nisje

### Habitat - artens "adresse"
Habitatet beskriver **hvor** en art lever. Det er det fysiske stedet med sine karakteristiske forhold:
- Skogsbunn med løvfall
- Grunt vann langs kysten
- Høyfjellsvidder

### Nisje - artens "yrke"
Nisjen beskriver **hvordan** arten lever - dens rolle i økosystemet:
- Hva den spiser
- Når den er aktiv (dag/natt, årstid)
- Hvor i habitatet den oppholder seg
- Hvilke ressurser den bruker
- Hvem den konkurrerer med

### Fundamental vs. realisert nisje

**Fundamental nisje**: Alle forhold en art teoretisk kan tolerere og ressurser den kan utnytte i fravær av konkurrenter og fiender.

**Realisert nisje**: Den delen av den fundamentale nisjen arten faktisk bruker når konkurranse og predasjon tas med. Alltid mindre enn eller lik den fundamentale nisjen.

### Konkurranseeksklusjonsprinsippet
To arter kan ikke ha helt identisk nisje i samme habitat over tid. Den ene vil utkonkurrere den andre. Arter som sameksisterer har **nisjeseparasjon** - de bruker ressursene på litt forskjellige måter.`,
    },
    {
      id: 'bio1-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Nisjeseparasjon hos meiser',
      problem: 'Flere meisearter lever i samme skog. Forklar hvordan de unngår å utkonkurrere hverandre.',
      solution: `**Løsning:**

Selv om blåmeis, kjøttmeis og granmeis lever i samme skog, har de utviklet **nisjeseparasjon**:

**Blåmeis:**
- Foretrekker de ytterste greinene
- Liten og lett, kan henge i tynne kvister
- Spiser små insekter og frø

**Kjøttmeis:**
- Søker føde på stamme og tykke greiner
- Større og sterkere nebb
- Kan åpne større nøtter og frø

**Granmeis:**
- Ofte høyere oppe i trærne
- Spesialisert på barksprekker
- Hamstrer frø i gjemmesteder

**Konklusjon:**
Ved å utnytte ulike deler av treet og ulike matkilder, reduseres konkurransen mellom artene. De har overlappende habitater, men delvis adskilte nisjer.`,
    },
    {
      id: 'bio1-7-1-example-2',
      type: 'example',
      title: 'Eksempel: Abiotiske faktorer i en innsjø',
      problem: 'Beskriv hvordan abiotiske faktorer varierer med dypet i en innsjø og hvordan dette påvirker livet.',
      solution: `**Løsning:**

**Lys:**
- Avtar raskt med dypet
- Fotosyntese bare i øvre lag (eufotisk sone, 0-20m)
- Mørkere dypere lag (afotisk sone)

**Temperatur:**
- Om sommeren: Varm overflate, kald bunn
- Termokline: Lag med rask temperaturendring
- Om vinteren: Omvendt (4°C på bunnen)

**Oksygen:**
- Høyest ved overflaten (kontakt med luft, fotosyntese)
- Kan være lavt på bunnen (nedbrytning bruker O₂)

**Næringsstoffer:**
- Ofte høyere konsentrasjon på bunnen
- Sirkulerer ved vår- og høstomrøring

**Konsekvenser for livet:**
- Planteplankton: Bare i lyssonen
- Dyreplankton: Vandrer opp og ned
- Fisk: Ulike arter i ulike dybder
- Bunnorganismer: Tilpasset mørke og kulde`,
    },
  ],
  exercises: [
    {
      id: 'bio1-7-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken av følgende er en abiotisk faktor?',
      options: [
        { id: 'a', text: 'Temperatur', isCorrect: true },
        { id: 'b', text: 'Konkurranse', isCorrect: false },
        { id: 'c', text: 'Predasjon', isCorrect: false },
        { id: 'd', text: 'Parasittisme', isCorrect: false },
      ],
      solution: 'Temperatur er en abiotisk (ikke-levende) faktor. Konkurranse, predasjon og parasittisme er alle biotiske faktorer som involverer levende organismer.',
    },
    {
      id: 'bio1-7-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom habitat og nisje med et konkret eksempel.',
      solution: 'Habitat er artens "adresse" - hvor den fysisk lever. Nisje er artens "yrke" - hvordan den lever og hvilken rolle den har. Eksempel: En hares habitat er skogen/åkerkanten. Dens nisje inkluderer at den spiser gress og urter, er aktiv i skumringen, lever på bakken, er byttedyr for rev og ørn, og konkurrerer med andre planteetere om mat.',
    },
    {
      id: 'bio1-7-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er riktig rekkefølge fra laveste til høyeste økologiske nivå?',
      options: [
        { id: 'a', text: 'Individ → Populasjon → Samfunn → Økosystem', isCorrect: true },
        { id: 'b', text: 'Populasjon → Individ → Økosystem → Samfunn', isCorrect: false },
        { id: 'c', text: 'Samfunn → Populasjon → Individ → Økosystem', isCorrect: false },
        { id: 'd', text: 'Økosystem → Samfunn → Populasjon → Individ', isCorrect: false },
      ],
      solution: 'De økologiske nivåene fra laveste til høyeste er: Individ (enkeltorganisme) → Populasjon (individer av samme art) → Samfunn (alle arter i et område) → Økosystem (samfunn + abiotiske faktorer).',
    },
    {
      id: 'bio1-7-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi tre eksempler på abiotiske faktorer og forklar hvordan hver av dem påvirker levende organismer.',
      solution: '1) Temperatur: Påvirker enzymaktivitet og metabolismehastighet. Kaldblodige dyr er avhengige av omgivelsestemperaturen. Varmblodige må bruke energi på termoregulering. 2) Lys: Nødvendig for fotosyntese i planter. Påvirker døgnrytmer og sesongadferd hos dyr. Styrer blomstring og frøsetting. 3) Vann: Essensielt for alle livsprosesser. Begrenser utbredelse i ørkener. Ferskvannsorganismer må regulere saltbalanse. Påvirker plantenes transpirasjon.',
    },
    {
      id: 'bio1-7-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar konkurranseeksklusjonsprinsippet og hvordan nisjeseparasjon gjør det mulig for arter å sameksistere.',
      solution: 'Konkurranseeksklusjonsprinsippet sier at to arter med identisk nisje ikke kan sameksistere i samme habitat over tid - den ene vil utkonkurrere den andre. For å sameksistere må arter ha nisjeseparasjon - de må bruke ressurser på ulike måter. Dette kan være ved å spise ulik mat, være aktive på ulike tider, leve i ulike deler av habitatet, eller ha ulike spesialiseringer. Realisert nisje blir dermed mindre enn fundamental nisje på grunn av konkurranse fra andre arter.',
    },
    {
      id: 'bio1-7-1-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva beskriver en populasjon?',
      options: [
        { id: 'a', text: 'Alle individer av samme art i et område', isCorrect: true },
        { id: 'b', text: 'Alle arter i et område', isCorrect: false },
        { id: 'c', text: 'Alle økosystemer på jorden', isCorrect: false },
        { id: 'd', text: 'De abiotiske faktorene i et område', isCorrect: false },
      ],
      solution: 'En populasjon er alle individer av samme art som lever i et bestemt område og kan pare seg med hverandre. "Alle arter i et område" beskriver et samfunn.',
    },
  ],
};

// ============================================================================
// Kapittel 7.2: Energistrøm i økosystemet
// ============================================================================

export const CHAPTER_BIOLOGI_1_7_2: TextbookChapter = {
  id: 'biologi-1-7-2',
  courseId: 'biologi-1',
  chapterNumber: '7.2',
  title: 'Energistrøm i økosystemet',
  description: 'Produsenter, konsumenter, nedbrytere, næringskjeder, næringsnett og økologiske pyramider.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare rollene til produsenter, konsumenter og nedbrytere',
    'beskrive energistrøm gjennom næringskjeder og næringsnett',
    'beregne energioverføring mellom trofiske nivåer',
    'tolke ulike typer økologiske pyramider',
  ],
  content: [
    {
      id: 'bio1-7-2-intro',
      type: 'text',
      content: `# Energistrøm i økosystemet

Alle levende organismer trenger energi for å overleve. I økosystemer strømmer energien fra solen gjennom de ulike organismene i én retning - fra produsenter via konsumenter til nedbrytere.

## Energiens vei gjennom økosystemet

**Sol → Produsenter → Konsumenter → Nedbrytere → Varme**

I motsetning til næringsstoffer som sirkulerer, er energistrømmen **enveis**. På hvert trinn tapes mesteparten av energien som varme gjennom metabolisme. Derfor må økosystemet kontinuerlig tilføres ny energi fra solen.`,
    },
    {
      id: 'bio1-7-2-def-produsent',
      type: 'definition',
      title: 'Produsenter (autotrofe)',
      content: 'Produsenter er organismer som kan lage sitt eget organiske materiale fra uorganiske stoffer ved hjelp av en energikilde. De fleste produsenter er fotoautotrofe (bruker sollys) som planter, alger og cyanobakterier. Noen er kjemoautotrofe (bruker kjemisk energi) som visse bakterier ved hydrotermiske ventiler. Produsenter danner grunnlaget for nesten alle næringskjeder.',
    },
    {
      id: 'bio1-7-2-trofiske-nivaer',
      type: 'text',
      content: `## Trofiske nivåer

Organismer grupperes etter hvor de får energien fra:

### Trofisk nivå 1: Produsenter
- **Autotrofe** - lager egen mat
- Planter, alger, fytoplankton, cyanobakterier
- Fotosynetse: $6CO_2 + 6H_2O + lys → C_6H_{12}O_6 + 6O_2$
- Grunnlaget for all mat i økosystemet

### Trofisk nivå 2: Primærkonsumenter
- **Herbivorer** (planteetere)
- Spiser produsenter direkte
- Eksempler: Hare, hjort, gresshoppe, dyreplankton

### Trofisk nivå 3: Sekundærkonsumenter
- **Karnivorer** eller omnivorer
- Spiser primærkonsumenter
- Eksempler: Rev (spiser hare), frosk (spiser insekter)

### Trofisk nivå 4: Tertiærkonsumenter
- Ofte **toppredatorer**
- Spiser sekundærkonsumenter
- Eksempler: Ørn, ulv, hai

### Nedbrytere (dekomponenter)
- Bryter ned dødt organisk materiale
- Frigjør næringsstoffer tilbake til miljøet
- Sopp og bakterier
- Finnes på alle nivåer i økosystemet`,
    },
    {
      id: 'bio1-7-2-def-neringskjede',
      type: 'definition',
      title: 'Næringskjede',
      content: 'En næringskjede viser overføringen av energi og næring fra ett trofisk nivå til det neste i en enkel, lineær sekvens. Eksempel: Gress → Hare → Rev → Ørn. Hver pil viser retningen energien strømmer. I virkeligheten er næringskjeder deler av mer komplekse næringsnett.',
    },
    {
      id: 'bio1-7-2-neringskjeder',
      type: 'text',
      content: `## Næringskjeder og næringsnett

### Næringskjede
En enkel sekvens som viser energioverføring:

**Terrestrisk eksempel:**
Eik → Sommerfugllarve → Meisunge → Spurvehauk

**Marin eksempel:**
Fytoplankton → Dyreplankton → Sild → Torsk → Sel → Spekkhogger

### Næringsnett
I virkeligheten spiser de fleste organismer flere ulike byttedyr og blir selv spist av flere predatorer. Et **næringsnett** viser alle disse forbindelsene.

**Egenskaper ved næringsnett:**
- Mer realistisk enn enkle kjeder
- Viser kompleksiteten i økosystemet
- Mange arter har flere roller (omnivorer)
- Viser hvor sårbart et økosystem er

### Beitedrevne vs. detritusbaserte kjeder

**Beitedrevne kjeder:**
- Starter med levende planter
- Dominerer på land og i produktive vannmasser

**Detritusbaserte kjeder:**
- Starter med dødt organisk materiale
- Nedbrytere → detritusedere → predatorer
- Viktig i skog (løvfall) og dyphav`,
    },
    {
      id: 'bio1-7-2-energitap',
      type: 'text',
      content: `## Energitap mellom trofiske nivåer

### 10%-regelen
Bare ca. **10%** av energien i ett trofisk nivå overføres til neste nivå. De resterende 90% tapes som:

1. **Metabolisme (celleånding)**: Mesteparten av energien brukes til livsprosesser og avgis som varme

2. **Ikke-spist materiale**: Røtter, bein, hår som ikke konsumeres

3. **Ikke-fordøyd materiale**: Avføring som inneholder ufordøyd mat

4. **Ekskresjon**: Energi i urinutskillelse

### Konsekvenser av energitapet

**Begrenset antall trofiske nivåer:**
- Etter 4-5 nivåer er det så lite energi igjen at det ikke kan støtte flere predatorer
- Derfor er næringskjeder sjelden lengre enn 5 ledd

**Biomasse avtar:**
- Totalt kan et økosystem støtte mye mer plantebiomasse enn dyrebiomasse
- Toppredatorer finnes i små antall

**Energieffektivitet:**
- Plantekost er mer energieffektivt enn kjøttkost
- Det tar 10x mer planteenergi å produsere kjøtt`,
    },
    {
      id: 'bio1-7-2-def-pyramide',
      type: 'definition',
      title: 'Økologisk pyramide',
      content: 'En økologisk pyramide er en grafisk fremstilling som viser fordelingen av en egenskap (energi, biomasse eller antall) på de ulike trofiske nivåene. Produsentnivået er alltid på bunnen, og hvert konsumentnivå danner lag oppover. Pyramideformen illustrerer hvordan verdien avtar oppover i næringskjeden.',
    },
    {
      id: 'bio1-7-2-pyramider',
      type: 'text',
      content: `## Økologiske pyramider

### Energipyramide
- Viser energimengde på hvert trofisk nivå
- **Alltid** pyramideformet
- Energi måles i kJ/m²/år
- Bred base (produsenter) → smal topp (toppredatorer)

### Biomassepyramide
- Viser total masse av organismer på hvert nivå
- Vanligvis pyramideformet
- **Unntak:** Akvatiske systemer kan ha invertert pyramide
  - Lite fytoplankton (rask omsetning)
  - Mer dyreplankton (langsom omsetning)

### Tallpyramide
- Viser antall individer på hvert nivå
- Kan være invertert
  - Én eik støtter tusenvis av insekter
- Tar ikke hensyn til størrelse

### Primærproduksjon

**Bruttoprimærproduksjon (BPP):**
Total energi fanget av produsenter gjennom fotosyntese

**Nettoprimærproduksjon (NPP):**
BPP minus energi brukt til plantenes egen respirasjon
NPP = BPP - Respirasjon

NPP representerer energien tilgjengelig for resten av økosystemet.`,
    },
    {
      id: 'bio1-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av energioverføring',
      problem: 'Planter i et økosystem produserer 20 000 kJ/m²/år. Beregn hvor mye energi som er tilgjengelig for: a) primærkonsumenter, b) sekundærkonsumenter, c) tertiærkonsumenter.',
      solution: `**Løsning:**

Bruker 10%-regelen for energioverføring:

**Trofisk nivå 1 - Produsenter:**
20 000 kJ/m²/år

**a) Trofisk nivå 2 - Primærkonsumenter:**
20 000 × 0,10 = **2 000 kJ/m²/år**

**b) Trofisk nivå 3 - Sekundærkonsumenter:**
2 000 × 0,10 = **200 kJ/m²/år**

**c) Trofisk nivå 4 - Tertiærkonsumenter:**
200 × 0,10 = **20 kJ/m²/år**

**Oppsummering:**
- Bare 10% (2 000 kJ) når primærkonsumentene
- Bare 1% (200 kJ) når sekundærkonsumentene
- Bare 0,1% (20 kJ) når tertiærkonsumentene

Dette forklarer hvorfor toppredatorer er sjeldne og trenger store territorier.`,
    },
    {
      id: 'bio1-7-2-example-2',
      type: 'example',
      title: 'Eksempel: Næringsnett i skog',
      problem: 'Beskriv et forenklet næringsnett i norsk barskog og forklar hva som skjer hvis en nøkkelart forsvinner.',
      solution: `**Løsning:**

**Produsenter:** Gran, furu, blåbærlyng, mose

**Primærkonsumenter:**
- Hare (spiser bark, knopper)
- Ekorn (spiser kongler, nøtter)
- Mus (spiser frø, bær)
- Skogsfugl (spiser bær, skudd)

**Sekundærkonsumenter:**
- Rev (spiser hare, mus, fugler)
- Hønsehauk (spiser ekorn, fugler, mus)
- Røyskatt (spiser mus)

**Tertiærkonsumenter:**
- Gaupe (spiser hare, rådyr, skogsfugl)
- Kongeørn (spiser hare, fugler)

**Hvis haren forsvinner:**
1. Rev får mindre mat → revpopulasjonen synker
2. Gaupe mister viktig byttedyr → må finne alternativer
3. Plantebeiting reduseres → vegetasjonsendring
4. Mus-populasjonen kan øke (mindre konkurranse)
5. Predatorer må bytte til andre byttedyr

**Konklusjon:** Næringsnettets kompleksitet gir stabilitet - tap av én art påvirker mange, men systemet kan ofte kompensere.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-7-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en produsent i økologisk forstand?',
      options: [
        { id: 'a', text: 'En organisme som lager organisk materiale fra uorganisk', isCorrect: true },
        { id: 'b', text: 'En organisme som spiser planter', isCorrect: false },
        { id: 'c', text: 'En organisme som bryter ned dødt materiale', isCorrect: false },
        { id: 'd', text: 'En toppredator', isCorrect: false },
      ],
      solution: 'Produsenter (autotrofe) lager sitt eget organiske materiale fra uorganiske stoffer, vanligvis gjennom fotosyntese. De er grunnlaget for økosystemets energitilførsel.',
    },
    {
      id: 'bio1-7-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor næringskjeder sjelden har mer enn 5 ledd.',
      solution: 'Bare ca. 10% av energien overføres mellom hvert trofisk nivå - resten tapes som varme gjennom metabolisme. Etter 5 nivåer er det så lite energi igjen at det ikke kan støtte levedyktige populasjoner av predatorer. Eksempel: Fra 10 000 kJ hos produsenter, har tertiærkonsumenter (nivå 4) bare 10 kJ tilgjengelig. Et femte nivå ville kun ha ca. 1 kJ - for lite til å opprettholde liv.',
    },
    {
      id: 'bio1-7-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type økologisk pyramide er alltid pyramideformet?',
      options: [
        { id: 'a', text: 'Energipyramide', isCorrect: true },
        { id: 'b', text: 'Biomassepyramide', isCorrect: false },
        { id: 'c', text: 'Tallpyramide', isCorrect: false },
        { id: 'd', text: 'Alle pyramidetyper', isCorrect: false },
      ],
      solution: 'Energipyramiden er alltid pyramideformet fordi energi alltid tapes mellom trofiske nivåer. Biomassepyramiden kan være invertert i akvatiske systemer, og tallpyramiden kan være invertert når produsenter er store (f.eks. trær med mange insekter).',
    },
    {
      id: 'bio1-7-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom bruttoprimærproduksjon (BPP) og nettoprimærproduksjon (NPP).',
      solution: 'Bruttoprimærproduksjon (BPP) er den totale mengden energi som produsenter fanger gjennom fotosyntese. Nettoprimærproduksjon (NPP) er BPP minus den energien plantene selv bruker til respirasjon. NPP = BPP - Respirasjon. NPP representerer energien som faktisk lagres i plantebiomasse og er tilgjengelig for konsumenter. Typisk er NPP 40-50% av BPP.',
    },
    {
      id: 'bio1-7-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor et vegetarisk kosthold er mer energieffektivt enn et kosthold basert på kjøtt.',
      solution: 'Når mennesker spiser planter direkte, får vi ca. 10% av plantenes energi. Når vi spiser kjøtt fra dyr som har spist planter, får vi 10% av 10% = 1% av plantenes energi. For å produsere 1 kg kjøtt trengs det ca. 10 kg plantefor (energimessig). Dermed kan et område med korn/grønnsaker brødfø ca. 10 ganger flere mennesker enn hvis kornet brukes til kjøttproduksjon. Dette har store konsekvenser for ressursbruk, arealbruk og klimagassutslipp fra matproduksjon.',
    },
    {
      id: 'bio1-7-2-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er rollen til nedbrytere i et økosystem?',
      options: [
        { id: 'a', text: 'Bryte ned dødt materiale og frigjøre næringsstoffer', isCorrect: true },
        { id: 'b', text: 'Produsere oksygen gjennom fotosyntese', isCorrect: false },
        { id: 'c', text: 'Være toppredatorer i næringskjeden', isCorrect: false },
        { id: 'd', text: 'Spise levende planter', isCorrect: false },
      ],
      solution: 'Nedbrytere (dekomponenter) som sopp og bakterier bryter ned dødt organisk materiale. Dette frigjør næringsstoffer (nitrogen, fosfor osv.) tilbake til jord og vann, slik at produsenter kan ta dem opp igjen. Nedbrytere er essensielle for stoffkretsløpene.',
    },
  ],
};

// ============================================================================
// Kapittel 7.3: Stoffkretsløp
// ============================================================================

export const CHAPTER_BIOLOGI_1_7_3: TextbookChapter = {
  id: 'biologi-1-7-3',
  courseId: 'biologi-1',
  chapterNumber: '7.3',
  title: 'Stoffkretsløp',
  description: 'Karbonkretsløpet, nitrogenkretsløpet og fosforkretsløpet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive hovedtrinnene i karbonkretsløpet',
    'forklare nitrogenkretsløpet og bakterienes rolle',
    'gjøre rede for fosforkretsløpet',
    'drøfte menneskelig påvirkning på stoffkretsløpene',
  ],
  content: [
    {
      id: 'bio1-7-3-intro',
      type: 'text',
      content: `# Stoffkretsløp

I motsetning til energi, som strømmer gjennom økosystemet i én retning, **sirkulerer stoffer** (grunnstoffer) i kretsløp mellom organismer og det abiotiske miljøet.

## Biogeokjemiske kretsløp

De viktigste næringsstoffene sirkulerer mellom:
- **Atmosfæren** (luft)
- **Hydrosfæren** (vann)
- **Litosfæren** (berggrunn og jord)
- **Biosfæren** (levende organismer)

Stoffene endrer kjemisk form gjennom kretsløpet, men atomene forsvinner ikke - de resirkuleres kontinuerlig.

### De viktigste kretsløpene
- **Karbonkretsløpet** (C)
- **Nitrogenkretsløpet** (N)
- **Fosforkretsløpet** (P)
- Vannkretsløpet (H₂O)
- Svovelkretsløpet (S)`,
    },
    {
      id: 'bio1-7-3-def-karbonkretslop',
      type: 'definition',
      title: 'Karbonkretsløpet',
      content: 'Karbonkretsløpet beskriver bevegelsen av karbon mellom atmosfæren, havet, biosfæren og litosfæren. Hovedprosessene er fotosyntese (CO₂ → organisk karbon), celleånding (organisk karbon → CO₂), nedbrytning, og langsiktig lagring i fossilt brensel og sedimenter. Mennesker har påvirket kretsløpet sterkt gjennom forbrenning av fossil brensel.',
    },
    {
      id: 'bio1-7-3-karbonkretslop',
      type: 'text',
      content: `## Karbonkretsløpet

Karbon er grunnstoffet i alle organiske molekyler og fundamentalt for alt liv.

### Reservoarer
- **Atmosfæren**: CO₂ (ca. 0,04%)
- **Havet**: Oppløst CO₂ og karbonater
- **Biosfæren**: I levende organismer
- **Litosfæren**: Kalkstein, fossilt brensel

### Hovedprosesser

**1. Fotosyntese (CO₂-opptak)**
$6CO_2 + 6H_2O + lys → C_6H_{12}O_6 + 6O_2$
- Planter, alger og cyanobakterier
- Binder atmosfærisk CO₂ i organiske molekyler

**2. Celleånding (CO₂-frigjøring)**
$C_6H_{12}O_6 + 6O_2 → 6CO_2 + 6H_2O + energi$
- Alle levende organismer
- Frigjør CO₂ tilbake til atmosfæren

**3. Nedbrytning**
- Nedbrytere bryter ned dødt organisk materiale
- Frigjør CO₂ til atmosfæren

**4. Forbrenning**
- Naturlige branner
- Menneskers bruk av fossilt brensel
- Rask frigjøring av lagret karbon

**5. Havets rolle**
- Absorberer CO₂ fra atmosfæren
- Fytoplankton driver marin fotosyntese
- Karbonater i skjell og koraller`,
    },
    {
      id: 'bio1-7-3-karbonpavirkning',
      type: 'text',
      content: `## Menneskelig påvirkning på karbonkretsløpet

### Økte CO₂-utslipp
- Forbrenning av fossilt brensel (kull, olje, gass)
- Avskoging og bruk av land
- Sementproduksjon

### Konsekvenser
**Drivhuseffekten:**
- CO₂ absorberer varmestråling
- Økt CO₂ → sterkere drivhuseffekt
- Global oppvarming

**Havforsuring:**
- CO₂ løst i vann danner karbonsyre
- Havet blir surere (lavere pH)
- Skader koraller og skalldyr

### CO₂-konsentrasjon
- Før-industrielt nivå: ca. 280 ppm
- I dag: over 420 ppm
- Raskeste økning på minst 800 000 år

### Karbonsluk
- **Skog**: Absorberer CO₂ gjennom fotosyntese
- **Hav**: Løser CO₂ og binder i marine organismer
- Disse slukene demper, men kan ikke fullstendig kompensere utslippene`,
    },
    {
      id: 'bio1-7-3-def-nitrogenkretslop',
      type: 'definition',
      title: 'Nitrogenkretsløpet',
      content: 'Nitrogenkretsløpet beskriver sirkulasjonen av nitrogen mellom atmosfæren (N₂), jord, vann og organismer. Nitrogen er essensielt for aminosyrer og nukleinsyrer. Spesielle bakterier utfører nøkkelprosesser: nitrogenfiksering (N₂ → NH₄⁺), nitrifikasjon (NH₄⁺ → NO₃⁻), og denitrifikasjon (NO₃⁻ → N₂).',
    },
    {
      id: 'bio1-7-3-nitrogenkretslop',
      type: 'text',
      content: `## Nitrogenkretsløpet

Nitrogen utgjør 78% av atmosfæren, men er utilgjengelig for de fleste organismer i gassform (N₂).

### Hovedprosesser

**1. Nitrogenfiksering (N₂ → NH₄⁺)**
- Utføres av spesialiserte bakterier
- **Frittlevende**: Cyanobakterier, Azotobacter
- **Symbiotiske**: Rhizobium i belgfruktrøtter
- Krever mye energi (nitrogenaseenzym)
- Også: Lynnedslag, industriell prosess (Haber-Bosch)

**2. Nitrifikasjon (NH₄⁺ → NO₃⁻)**
- Utføres av nitrifikasjonsbakterier
- Totrinnsprosess:
  - NH₄⁺ → NO₂⁻ (Nitrosomonas)
  - NO₂⁻ → NO₃⁻ (Nitrobacter)
- Nitrat (NO₃⁻) er hovedformen planter tar opp

**3. Assimilasjon**
- Planter tar opp NO₃⁻ eller NH₄⁺
- Bygger inn nitrogen i aminosyrer og proteiner
- Dyr får nitrogen ved å spise planter

**4. Ammonifikasjon**
- Nedbrytere bryter ned dødt organisk materiale
- Frigjør ammonium (NH₄⁺)
- Også urinutskillelse fra dyr

**5. Denitrifikasjon (NO₃⁻ → N₂)**
- Anaerobe bakterier i våtmarker og sedimenter
- Fjerner nitrogen fra økosystemet
- Tilbake til atmosfæren som N₂`,
    },
    {
      id: 'bio1-7-3-def-fosforkretslop',
      type: 'definition',
      title: 'Fosforkretsløpet',
      content: 'Fosforkretsløpet er sirkulasjonen av fosfor mellom berggrunn, jord, vann og organismer. I motsetning til karbon og nitrogen har fosfor ingen gassfase - det er et sedimentært kretsløp. Fosfor frigjøres langsomt ved forvitring og er ofte en begrensende faktor for vekst. Menneskelig tilførsel gjennom gjødsel kan føre til eutrofiering.',
    },
    {
      id: 'bio1-7-3-fosforkretslop',
      type: 'text',
      content: `## Fosforkretsløpet

Fosfor er essensielt for DNA, RNA, ATP og cellemembraner.

### Særtrekk ved fosforkretsløpet
- **Ingen atmosfærisk fase** (ulikt C og N)
- Hovedreservoar er berggrunn og sedimenter
- Langsommere kretsløp enn C og N
- Ofte **begrensende næringsstoff** i økosystemer

### Hovedtrinn

**1. Forvitring og erosjon**
- Fosfat frigjøres fra berggrunn
- Langsom prosess
- Fosfat (PO₄³⁻) løses i jordvann

**2. Opptak av planter**
- Planter absorberer fosfat fra jord
- Bygges inn i organiske molekyler
- Mykorrhiza hjelper mange planter med opptak

**3. Gjennom næringskjeden**
- Dyr får fosfor fra mat
- Brukes til bein, tenner, DNA, ATP

**4. Nedbrytning**
- Dødt materiale brytes ned
- Fosfat frigjøres tilbake til jord

**5. Sedimentasjon**
- Fosfor vaskes ut til hav og innsjøer
- Akkumuleres i sedimenter
- Langsiktig lagring (geologisk tidsskala)

### Menneskelig påvirkning
- **Kunstgjødsel**: Fosfatgruver → jordbruk
- **Avløpsvann**: Fosfor fra vaskemidler og avføring
- **Eutrofiering**: Overskudd av næring i vann`,
    },
    {
      id: 'bio1-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Eutrofiering',
      problem: 'Forklar prosessen eutrofiering og hvilke konsekvenser den har for et økosystem.',
      solution: `**Løsning:**

**Hva er eutrofiering?**
Eutrofiering er overgjødsling av vannmasser med næringsstoffer, særlig nitrogen og fosfor.

**Årsaker:**
1. Avrenning fra landbruk (kunstgjødsel)
2. Utslipp av kloakk og avløpsvann
3. Fosfor fra vaskemidler

**Prosessen:**
1. **Økt næringstilførsel** → Eksplosiv vekst av alger og cyanobakterier (algeoppblomstring)
2. **Algene dør** → Synker til bunnen
3. **Nedbrytning** → Bakterier forbruker oksygen
4. **Oksygenmangel** → Fisk og bunndyr dør
5. **Døde soner** → Områder uten liv

**Konsekvenser:**
- Tap av biologisk mangfold
- Forgiftede drikkevannkilder
- Ubrukelig badevann
- Fiskedød
- Illeluktende vann

**Tiltak:**
- Redusere gjødselbruk
- Rense avløpsvann
- Gjenopprette våtmarker som filtre`,
    },
    {
      id: 'bio1-7-3-example-2',
      type: 'example',
      title: 'Eksempel: Biologisk nitrogenfiksering',
      problem: 'Forklar hvordan belgfrukter og nitrogenfikserende bakterier samarbeider, og hvorfor dette er viktig i landbruket.',
      solution: `**Løsning:**

**Symbiosepartnerene:**
- **Plante**: Belgfrukter (kløver, erter, bønner, lupin)
- **Bakterie**: Rhizobium-arter

**Samarbeidet:**
1. Bakterien infiserer planterøttene
2. Planten danner rotknuter (noduler)
3. Inne i nodulene fikserer bakterien nitrogen:
   N₂ + 8H⁺ + energi → 2NH₃ + H₂

**Gjensidig nytte:**
- **Planten får**: Tilgang til nitrogen i form planten kan bruke
- **Bakterien får**: Karbohydrater (sukker) fra fotosyntesen, beskyttet miljø

**Betydning for landbruk:**

1. **Redusert gjødselbehov**
   - Belgfrukter trenger ikke nitrogengjødsel
   - Sparer penger og energi

2. **Vekstskifte**
   - Belgfrukter etterlater nitrogen i jorden
   - Neste avling nyter godt av dette

3. **Grønngjødsling**
   - Kløver dyrkes og pløyes ned
   - Beriker jorden naturlig

4. **Bærekraftig landbruk**
   - Mindre avhengighet av kunstgjødsel
   - Lavere miljøbelastning`,
    },
  ],
  exercises: [
    {
      id: 'bio1-7-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken prosess fjerner CO₂ fra atmosfæren og binder det i organiske molekyler?',
      options: [
        { id: 'a', text: 'Fotosyntese', isCorrect: true },
        { id: 'b', text: 'Celleånding', isCorrect: false },
        { id: 'c', text: 'Nedbrytning', isCorrect: false },
        { id: 'd', text: 'Forbrenning', isCorrect: false },
      ],
      solution: 'Fotosyntese er prosessen der planter tar opp CO₂ fra atmosfæren og, ved hjelp av sollys, omdanner det til organiske molekyler (glukose). Dette er den viktigste prosessen som fjerner CO₂ fra atmosfæren.',
    },
    {
      id: 'bio1-7-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hovedtrinnene i nitrogenkretsløpet og hvilke organismer som utfører de viktigste prosessene.',
      solution: '1) Nitrogenfiksering: Spesialiserte bakterier (Rhizobium, cyanobakterier) omdanner N₂ til NH₄⁺. 2) Nitrifikasjon: Nitrosomonas omdanner NH₄⁺ til NO₂⁻, deretter omdanner Nitrobacter NO₂⁻ til NO₃⁻. 3) Assimilasjon: Planter tar opp NO₃⁻ eller NH₄⁺ og bygger proteiner. 4) Ammonifikasjon: Nedbrytere frigjør NH₄⁺ fra dødt organisk materiale. 5) Denitrifikasjon: Anaerobe bakterier omdanner NO₃⁻ tilbake til N₂.',
    },
    {
      id: 'bio1-7-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skiller fosforkretsløpet fra karbon- og nitrogenkretsløpet?',
      options: [
        { id: 'a', text: 'Fosfor har ingen atmosfærisk fase', isCorrect: true },
        { id: 'b', text: 'Fosfor er ikke nødvendig for liv', isCorrect: false },
        { id: 'c', text: 'Fosfor sirkulerer raskere enn andre stoffer', isCorrect: false },
        { id: 'd', text: 'Fosfor finnes bare i havet', isCorrect: false },
      ],
      solution: 'Fosforkretsløpet er et sedimentært kretsløp uten atmosfærisk fase. Fosfor frigjøres langsomt fra berggrunn gjennom forvitring og akkumuleres i sedimenter. Karbon og nitrogen har begge gassfaser (CO₂ og N₂) som gjør sirkulasjonen raskere.',
    },
    {
      id: 'bio1-7-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan menneskelig aktivitet har påvirket karbonkretsløpet og hvilke konsekvenser dette har.',
      solution: 'Mennesker har tilført store mengder CO₂ til atmosfæren gjennom: 1) Forbrenning av fossilt brensel (frigjør karbon lagret over millioner av år), 2) Avskoging (fjerner karbonsluk), 3) Sementproduksjon. Konsekvenser: Global oppvarming på grunn av forsterket drivhuseffekt, havforsuring når CO₂ løses i havet og danner karbonsyre, endrede klimamønstre og økosystemer. CO₂-nivået har økt fra 280 ppm (før-industrielt) til over 420 ppm.',
    },
    {
      id: 'bio1-7-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva eutrofiering er, hvordan det oppstår, og hvorfor det kan føre til "døde soner" i vannmasser.',
      solution: 'Eutrofiering er overgjødsling av vann med næringsstoffer (N og P) fra landbruk, kloakk og industri. Prosessen: 1) Økt næringstilgang stimulerer kraftig algevekst (oppblomstring). 2) Når algene dør, synker de til bunnen. 3) Nedbryterbakterier bryter ned det døde materialet og forbruker oksygen. 4) Oksygennivået synker dramatisk. 5) Fisk og bunndyr kveles. 6) Det oppstår "døde soner" der nesten ingenting kan leve. Problemet forverres av at nedbrytningen frigjør mer næring som gir ny algevekst - en positiv tilbakekobling.',
    },
    {
      id: 'bio1-7-3-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken bakterie lever i symbiose med belgfrukter og utfører nitrogenfiksering?',
      options: [
        { id: 'a', text: 'Rhizobium', isCorrect: true },
        { id: 'b', text: 'E. coli', isCorrect: false },
        { id: 'c', text: 'Nitrobacter', isCorrect: false },
        { id: 'd', text: 'Lactobacillus', isCorrect: false },
      ],
      solution: 'Rhizobium-bakterier lever i symbiose med belgfrukter (kløver, erter, bønner) i rotknuter (noduler). Der fikserer de atmosfærisk nitrogen (N₂) til ammonium som planten kan bruke, mens planten gir bakterien karbohydrater og et beskyttet miljø.',
    },
  ],
};

// ============================================================================
// Kapittel 7.4: Populasjonsøkologi
// ============================================================================

export const CHAPTER_BIOLOGI_1_7_4: TextbookChapter = {
  id: 'biologi-1-7-4',
  courseId: 'biologi-1',
  chapterNumber: '7.4',
  title: 'Populasjonsøkologi',
  description: 'Populasjonsvekst, eksponentiell og logistisk vekst, bæreevne og regulerende faktorer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive eksponentiell og logistisk populasjonsvekst',
    'forklare begrepet bæreevne',
    'skille mellom tetthetsuavhengige og tetthetsavhengige faktorer',
    'analysere populasjonsdynamikk og vekstmodeller',
  ],
  content: [
    {
      id: 'bio1-7-4-intro',
      type: 'text',
      content: `# Populasjonsøkologi

Populasjonsøkologi studerer hvordan populasjoner endrer seg over tid - vekst, nedgang og svingninger i antall individer.

## Populasjonsbegrepet

En **populasjon** er alle individer av samme art som lever i et avgrenset område og kan pare seg med hverandre.

### Populasjonsparametere
- **Populasjonsstørrelse (N)**: Antall individer
- **Tetthet**: Individer per arealenhet
- **Fødselsrate (b)**: Antall fødsler per individ per tidsenhet
- **Dødsrate (d)**: Antall dødsfall per individ per tidsenhet
- **Immigrasjon**: Innvandring
- **Emigrasjon**: Utvandring

### Populasjonsvekst
$\\Delta N = (b - d + i - e) \\times N$

Hvis b > d og i > e: Populasjonen vokser
Hvis b < d og i < e: Populasjonen avtar`,
    },
    {
      id: 'bio1-7-4-def-eksponentiell',
      type: 'definition',
      title: 'Eksponentiell vekst',
      content: 'Eksponentiell (geometrisk) vekst oppstår når en populasjon øker med en konstant prosentandel per tidsenhet. Veksten beskrives av formelen dN/dt = rN, der r er den spesifikke vekstraten. Denne vekstformen gir en J-formet kurve og forutsetter ubegrensede ressurser. I naturen ses eksponentiell vekst kun i korte perioder, som ved kolonisering av nye habitater.',
    },
    {
      id: 'bio1-7-4-eksponentiell',
      type: 'text',
      content: `## Eksponentiell populasjonsvekst

### Kjennetegn
- Ubegrensede ressurser
- Ingen konkurranse
- Ingen predasjon eller sykdom
- Konstant vekstrate

### Matematisk modell
$\\frac{dN}{dt} = rN$

Der:
- N = populasjonsstørrelse
- t = tid
- r = spesifikk vekstrate (fødselsrate - dødsrate)

### Løsning
$N_t = N_0 \\times e^{rt}$

### J-kurven
Grafen viser en J-formet kurve som stiger stadig brattere.

### Eksempler i naturen
- Bakterievekst i næringsbasseng
- Introduserte arter uten naturlige fiender
- Populasjoner etter katastrofer
- Algeoppblomstring

### Begrensninger
Eksponentiell vekst kan ikke fortsette uendelig - ressursene tar slutt. Darwin beregnet at et par elefanter teoretisk kunne gi opphav til 19 millioner etterkommere på 750 år med ubegrenset vekst.`,
    },
    {
      id: 'bio1-7-4-def-baereevne',
      type: 'definition',
      title: 'Bæreevne (K)',
      content: 'Bæreevnen (K) er det maksimale antall individer av en art som et miljø kan opprettholde over tid gitt tilgjengelige ressurser. Når populasjonen nærmer seg K, øker konkurransen, fødselsraten synker og dødsraten øker. Bæreevnen er ikke konstant, men varierer med årstid, klima og tilgjengelighet av ressurser.',
    },
    {
      id: 'bio1-7-4-logistisk',
      type: 'text',
      content: `## Logistisk populasjonsvekst

### Kjennetegn
- Begrensede ressurser
- Vekstraten avhenger av populasjonstetthet
- Veksten avtar når N nærmer seg bæreevnen K
- Gir en S-formet kurve (sigmoid)

### Matematisk modell
$\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)$

Der:
- K = bæreevne
- $(1 - N/K)$ = bremsefaktor

### Tolkning av formelen
- Når N er liten: $(1-N/K) ≈ 1$ → vekst nesten eksponentiell
- Når N = K/2: Maksimal veksthastighet
- Når N nærmer seg K: $(1-N/K) → 0$ → vekst stopper
- Når N = K: Ingen netto vekst (likevekt)
- Når N > K: Negativ vekst (populasjonen synker)

### S-kurven (sigmoid kurve)
1. **Etableringsfase**: Langsom vekst (få individer)
2. **Vekstfase**: Rask, nesten eksponentiell vekst
3. **Avmatningsfase**: Veksten bremser
4. **Likevektsfase**: Populasjonen stabiliserer ved K`,
    },
    {
      id: 'bio1-7-4-regulering',
      type: 'text',
      content: `## Regulering av populasjoner

### Tetthetsavhengige faktorer
Effekten øker med populasjonstettheten:

**Konkurranse:**
- Om mat, territorier, parringspartnere
- Innen arten (intraspesifikk)
- Mellom arter (interspesifikk)

**Predasjon:**
- Predatorer fokuserer på tallrike byttedyr
- Predator-byttedyr-svingninger

**Sykdom og parasitter:**
- Spres lettere i tette populasjoner
- Kan redusere populasjoner drastisk

**Stress og aggresjon:**
- Økt aggresjon ved høy tetthet
- Redusert reproduksjon

### Tetthetsuavhengige faktorer
Effekten er uavhengig av populasjonstettheten:

**Værforhold:**
- Ekstrem kulde eller varme
- Tørke, flom

**Naturkatastrofer:**
- Branner
- Vulkanutbrudd
- Jordskjelv

**Sesongvariasjoner:**
- Vinter i tempererte strøk
- Tørketid i tropene

### Forskjellen i praksis
- Tetthetsavhengige faktorer **regulerer** populasjonen mot K
- Tetthetsuavhengige faktorer kan føre til store, uforutsigbare svingninger`,
    },
    {
      id: 'bio1-7-4-strategier',
      type: 'text',
      content: `## Livshistoriestrategier

Arter har utviklet ulike strategier for reproduksjon og overlevelse.

### r-strateger (opportunister)
- **Høy reproduksjonsrate** (mange avkom)
- Lite foreldreomsorg
- Rask modning
- Kort levetid
- Små kroppsstørrelse
- Utnytter ustabile miljøer
- Populasjonen svinger mye

**Eksempler:** Insekter, mus, ugress, bakterier

### K-strateger (likevektarter)
- **Lav reproduksjonsrate** (få avkom)
- Mye foreldreomsorg
- Sen modning
- Lang levetid
- Stor kroppsstørrelse
- Tilpasset stabile miljøer
- Populasjonen nær bæreevnen

**Eksempler:** Elefanter, hvaler, mennesker, store trær

### r/K-kontinuumet
De fleste arter ligger et sted mellom ytterpunktene. Strategien påvirkes av:
- Miljøets stabilitet
- Predatortrykk
- Konkurranseintensitet`,
    },
    {
      id: 'bio1-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Logistisk vekst',
      problem: 'En populasjon av hjort har bæreevne K = 500 og vekstrate r = 0,5 per år. Beregn populasjonsveksten når N = 100, N = 250 og N = 450.',
      solution: `**Løsning:**

Bruker formelen: $\\frac{dN}{dt} = rN(1 - \\frac{N}{K})$

**Når N = 100:**
$\\frac{dN}{dt} = 0,5 \\times 100 \\times (1 - \\frac{100}{500})$
$= 50 \\times (1 - 0,2) = 50 \\times 0,8 = 40$ individer/år

**Når N = 250 (= K/2):**
$\\frac{dN}{dt} = 0,5 \\times 250 \\times (1 - \\frac{250}{500})$
$= 125 \\times (1 - 0,5) = 125 \\times 0,5 = 62,5$ individer/år

**Når N = 450:**
$\\frac{dN}{dt} = 0,5 \\times 450 \\times (1 - \\frac{450}{500})$
$= 225 \\times (1 - 0,9) = 225 \\times 0,1 = 22,5$ individer/år

**Konklusjon:**
Maksimal veksthastighet oppnås ved N = K/2 = 250. Ved lav tetthet bremses veksten av få individer, ved høy tetthet av ressursbegrensning.`,
    },
    {
      id: 'bio1-7-4-example-2',
      type: 'example',
      title: 'Eksempel: Predator-byttedyr-svingninger',
      problem: 'Forklar hvorfor populasjonene av gaupe og snøhare i Nord-Amerika viser regelmessige svingninger med ca. 10 års mellomrom.',
      solution: `**Løsning:**

**Observasjonene:**
Data fra pelsjakt viser at populasjonene av snøhare og gaupe svinger med ca. 10 års syklus, der gaupens svingninger følger harens med 1-2 års forsinkelse.

**Forklaringsmodellen:**

1. **Fase 1 - Harepopulasjonen øker:**
   - God mattilgang, få predatorer
   - Nesten eksponentiell vekst

2. **Fase 2 - Gaupepopulasjonen øker:**
   - Mye byttedyr tilgjengelig
   - Økt reproduksjon og overlevelse hos gaupe

3. **Fase 3 - Harepopulasjonen synker:**
   - Høyt predatortrykk fra mange gauper
   - Harepopulasjonen faller dramatisk

4. **Fase 4 - Gaupepopulasjonen synker:**
   - Lite mat tilgjengelig
   - Gauper sulter, reproduserer mindre
   - Gaupepopulasjonen faller

5. **Syklusen gjentas:**
   - Få gauper → harepopulasjonen kan øke igjen

**Andre faktorer:**
- Vegetasjonssykluser (harens mat)
- Sykdom og stress ved høye tettheter
- Værforhold

**Økologisk betydning:**
Dette er et klassisk eksempel på tetthetsavhengig populasjonsregulering gjennom predasjon.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-7-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva beskriver bæreevnen (K)?',
      options: [
        { id: 'a', text: 'Maksimalt antall individer miljøet kan opprettholde over tid', isCorrect: true },
        { id: 'b', text: 'Veksthastigheten til en populasjon', isCorrect: false },
        { id: 'c', text: 'Antall arter i et økosystem', isCorrect: false },
        { id: 'd', text: 'Energimengden i produsentnivået', isCorrect: false },
      ],
      solution: 'Bæreevnen (K) er det maksimale antall individer av en art som et miljø kan opprettholde over tid, gitt tilgjengelige ressurser som mat, vann og plass.',
    },
    {
      id: 'bio1-7-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom eksponentiell og logistisk populasjonsvekst.',
      solution: 'Eksponentiell vekst skjer med konstant prosentvis økning uten ressursbegrensning, gir J-kurve. Formelen er dN/dt = rN. Logistisk vekst inkluderer bæreevne (K) - veksten avtar når populasjonen nærmer seg K, gir S-kurve. Formelen er dN/dt = rN(1-N/K). I virkeligheten er logistisk vekst mer realistisk fordi alle miljøer har begrensede ressurser.',
    },
    {
      id: 'bio1-7-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Ved hvilken populasjonsstørrelse er veksthastigheten høyest i logistisk vekst?',
      options: [
        { id: 'a', text: 'Ved N = K/2 (halvparten av bæreevnen)', isCorrect: true },
        { id: 'b', text: 'Ved N = K (bæreevnen)', isCorrect: false },
        { id: 'c', text: 'Ved N = 0', isCorrect: false },
        { id: 'd', text: 'Ved N > K (over bæreevnen)', isCorrect: false },
      ],
      solution: 'I logistisk vekst er veksthastigheten høyest ved N = K/2. Ved lavere N er det få individer til å reprodusere, ved høyere N bremser ressursbegrensningen. Ved N = K er veksten null, og over K blir veksten negativ.',
    },
    {
      id: 'bio1-7-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi eksempler på tetthetsavhengige og tetthetsuavhengige faktorer som regulerer populasjoner.',
      solution: 'Tetthetsavhengige faktorer (effekten øker med tetthet): Konkurranse om mat og territorier, predasjon (predatorer søker tette populasjoner), sykdom og parasitter (spres lettere i tette populasjoner), stress. Tetthetsuavhengige faktorer (effekten er uavhengig av tetthet): Ekstremvær (kulde, tørke, flom), naturkatastrofer (brann, vulkanutbrudd), sesongendringer. Tetthetsavhengige faktorer regulerer mot bæreevnen, tetthetsuavhengige gir uforutsigbare svingninger.',
    },
    {
      id: 'bio1-7-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign r-strateger og K-strateger og forklar hvordan miljøet påvirker hvilken strategi som er fordelaktig.',
      solution: 'r-strateger: Mange avkom, lite omsorg, rask modning, kort liv, små. Fordelaktig i ustabile/uforutsigbare miljøer der rask kolonisering er viktig (eks: insekter, ugress). K-strateger: Få avkom, mye omsorg, sen modning, langt liv, store. Fordelaktig i stabile miljøer nær bæreevnen der konkurranse er viktig (eks: elefanter, mennesker). I tidlig suksesjon dominerer r-strateger, i modne økosystemer dominerer K-strateger. De fleste arter ligger på et kontinuum mellom disse ytterpunktene.',
    },
    {
      id: 'bio1-7-4-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken faktor er tetthetsUavhengig?',
      options: [
        { id: 'a', text: 'En ekstrem frostperiode', isCorrect: true },
        { id: 'b', text: 'Konkurranse om mat', isCorrect: false },
        { id: 'c', text: 'Predasjon', isCorrect: false },
        { id: 'd', text: 'Sykdomsspredning', isCorrect: false },
      ],
      solution: 'Ekstrem frost dreper organismer uavhengig av hvor mange det er i populasjonen - effekten er tetthetsuavhengig. Konkurranse, predasjon og sykdomsspredning er alle tetthetsavhengige - effekten øker når populasjonstettheten øker.',
    },
  ],
};

// ============================================================================
// Kapittel 7.5: Samspill mellom arter
// ============================================================================

export const CHAPTER_BIOLOGI_1_7_5: TextbookChapter = {
  id: 'biologi-1-7-5',
  courseId: 'biologi-1',
  chapterNumber: '7.5',
  title: 'Samspill mellom arter',
  description: 'Predasjon, konkurranse, mutualisme, kommensalisme og parasittisme.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive ulike typer økologiske interaksjoner mellom arter',
    'forklare koevolusjon mellom arter',
    'analysere predator-byttedyr-dynamikk',
    'gi eksempler på mutualisme, kommensalisme og parasittisme',
  ],
  content: [
    {
      id: 'bio1-7-5-intro',
      type: 'text',
      content: `# Samspill mellom arter

I alle økosystemer interagerer arter med hverandre på mange ulike måter. Disse interaksjonene former artenes utvikling, utbredelse og antall.

## Kategorisering av interaksjoner

Interaksjoner klassifiseres etter effekten på de involverte artene:

| Interaksjon | Art 1 | Art 2 |
|-------------|-------|-------|
| Mutualisme | + | + |
| Kommensalisme | + | 0 |
| Predasjon | + | - |
| Parasittisme | + | - |
| Konkurranse | - | - |
| Amensalisme | 0 | - |

*+ = positiv effekt, - = negativ effekt, 0 = nøytral*

Disse interaksjonene er drivkrefter i evolusjonen og fører ofte til **koevolusjon** - der artene gjensidig påvirker hverandres utvikling.`,
    },
    {
      id: 'bio1-7-5-def-predasjon',
      type: 'definition',
      title: 'Predasjon',
      content: 'Predasjon er en interaksjon der ett individ (predatoren/rovdyret) dreper og spiser et annet individ (byttedyret). Predatoren har positiv effekt (+), byttedyret negativ (-). Predasjon omfatter karnivore som jakter, men også herbivori (planter som "bytte") og frøpredasjon. Predasjon er en sterk seleksjonskraft som driver evolusjon av forsvar og jaktstrategier.',
    },
    {
      id: 'bio1-7-5-predasjon',
      type: 'text',
      content: `## Predasjon (+/-)

### Predatorens tilpasninger
**Fange bytte:**
- Klør, tenner, gift
- Rask bevegelse
- Kamuflasje for bakholdsangrep
- Sanseorganer (syn, hørsel, lukt)
- Jaktstrategier (flokk, bakhold, utholdenhet)

### Byttedyrets forsvar
**Unngå oppdagelse:**
- Kamuflasje
- Gjemmesteder
- Nattaktivitet

**Unngå fangst:**
- Flukt
- Varselfarger (aposematisme)
- Mimikry (etterligne farlige arter)
- Pigger, skall, gift
- Flokkadferd (fortynningseffekt)

### Predator-byttedyr-dynamikk
Populasjonene påvirker hverandre gjensidig:
1. Mange byttedyr → predatorpopulasjonen øker
2. Mange predatorer → byttedyrpopulasjonen synker
3. Få byttedyr → predatorpopulasjonen synker
4. Få predatorer → byttedyrpopulasjonen øker

Dette gir karakteristiske sykliske svingninger.`,
    },
    {
      id: 'bio1-7-5-def-konkurranse',
      type: 'definition',
      title: 'Konkurranse',
      content: 'Konkurranse oppstår når to eller flere individer bruker samme begrensede ressurs (mat, vann, lys, territorium, parringspartnere). Begge parter påvirkes negativt (-/-). Intraspesifikk konkurranse er mellom individer av samme art, interspesifikk er mellom ulike arter. Konkurranse fører til nisjeseparasjon og ressursfordeling.',
    },
    {
      id: 'bio1-7-5-konkurranse',
      type: 'text',
      content: `## Konkurranse (-/-)

### Typer konkurranse

**Intraspesifikk konkurranse (innen arten):**
- Ofte mest intens (samme ressursbehov)
- Om mat, territorier, parringspartnere
- Viktig tetthetsavhengig regulering

**Interspesifikk konkurranse (mellom arter):**
- Arter med overlappende nisjer
- Kan føre til konkurranseeksklusjon
- Driver nisjeseparasjon og spesialisering

### Konkurranse om...
- **Ressurser** (exploitative): Begge bruker samme ressurs
- **Interferens**: Direkte konfrontasjon, territorialitet

### Konkurranseeksklusjonsprinsippet
To arter med identisk nisje kan ikke sameksistere permanent i samme habitat - én vil utkonkurrere den andre.

### Karakterforskyvning
Når konkurrerende arter lever sammen, utvikler de ofte større forskjeller (divergens) enn når de lever adskilt. Dette reduserer konkurransen.

### Eksempel: Darwinfinker
På Galapagos har finkearter utviklet ulike nebbformer for å utnytte ulike frøstørrelser, noe som reduserer konkurransen mellom dem.`,
    },
    {
      id: 'bio1-7-5-def-mutualisme',
      type: 'definition',
      title: 'Mutualisme',
      content: 'Mutualisme er en interaksjon der begge arter har fordel av forholdet (+/+). Det kan være obligat (artene kan ikke overleve uten hverandre) eller fakultativ (begge kan overleve alene, men har fordel av forholdet). Eksempler: pollinering, mykorrhiza, koraller og zooxantheller, og nitrogenfikserende bakterier i belgfruktrøtter.',
    },
    {
      id: 'bio1-7-5-mutualisme',
      type: 'text',
      content: `## Mutualisme (+/+)

### Eksempler på mutualisme

**Pollinering:**
- Plante: Får spredd pollen
- Insekt/fugl/flaggermus: Får nektar/pollen som mat
- Ofte koevolusjon av blomsterform og pollinator

**Mykorrhiza:**
- Sopp: Får karbohydrater fra planten
- Plante: Får bedre opptak av vann og mineraler
- 80-90% av alle planter har mykorrhiza

**Tarmbakterier:**
- Bakterier: Får næring og levested
- Vert: Får hjelp til fordøyelse, vitaminer, immunforsvar

**Koraller og zooxantheller:**
- Korall: Får organiske forbindelser fra algenes fotosyntese
- Alger: Får beskyttelse og næringsstoffer
- Obligat mutualisme - koraller dør uten alger (korallbleking)

**Nitrogenfiksering:**
- Bakterie (Rhizobium): Får karbohydrater og beskyttelse
- Belgfrukt: Får tilgang til nitrogen

### Fakultativ vs. obligat
- **Fakultativ**: Artene kan overleve alene (eks: mange pollineringsforhold)
- **Obligat**: Artene er helt avhengige av hverandre (eks: fiken og fikenvesp)`,
    },
    {
      id: 'bio1-7-5-andre',
      type: 'text',
      content: `## Kommensalisme og parasittisme

### Kommensalisme (+/0)
Én art har fordel, den andre påvirkes ikke.

**Eksempler:**
- **Remorafisk på hai**: Får mat og transport
- **Epifytter** (luftplanter): Vokser på trær for lys
- **Fugler som følger beitende dyr**: Spiser oppskremte insekter
- **Eremittkreps i sneglehus**: Bruker tomme skall

*I praksis er det vanskelig å bevise at "verten" er helt upåvirket - mange kommensalistiske forhold kan ha svake positive eller negative effekter.*

### Parasittisme (+/-)
Parasitten lever på eller i verten og trekker næring fra den.

**Typer parasitter:**
- **Ektoparasitter**: Lever utenpå verten (lopper, flått, lus)
- **Endoparasitter**: Lever inne i verten (orm, malaria, virus)

**Parasittens strategier:**
- Unngå immunforsvaret
- Manipulere vertens adferd
- Spre seg til nye verter
- Ikke drepe verten for raskt

**Parasitt vs. predator:**
- Parasitt er ofte mindre enn verten
- Dreper vanligvis ikke verten direkte
- Lever lenger på/i én vert
- Kan ha komplekse livssykluser

**Parasittisme og evolusjon:**
Parasitter driver evolusjonen av immunforsvar og resistens. Verter med god motstandskraft har fortrinn - kontinuerlig kappløp (Red Queen-hypotesen).`,
    },
    {
      id: 'bio1-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Koevolusjon mellom rovdyr og byttedyr',
      problem: 'Forklar hvordan koevolusjon mellom gepard og gaselle har formet begge artenes egenskaper.',
      solution: `**Løsning:**

**Koevolusjon** er gjensidig evolusjonær tilpasning mellom interagerende arter.

**Geparden:**
- Verdens raskeste landpattedyr (110 km/t)
- Lett, strømlinjeformet kropp
- Lange bein, fleksibel ryggrad
- Store neseåpninger for oksygentilførsel
- Grep med kløyner for grep
- Akselerasjon: 0-100 km/t på 3 sek

**Gasellen:**
- Også svært rask (80-100 km/t)
- Utholdenhet (kan holde høy fart lenger)
- Raske retningsendringer
- Gode sanser (store øyne, ører)
- Varselssignaler til flokken
- Hoppende flukt ("stotting")

**Koevolusjonært "våpenkappløp":**
1. Raskere gepard → overlever og får avkom
2. Raskere gaseller unnslipper → overlever og får avkom
3. Seleksjon for enda raskere gepard
4. Seleksjon for enda raskere gaselle
5. Prosessen fortsetter over generasjoner

**Resultat:**
Begge arter har utviklet ekstreme hastighetsevner gjennom millioner av år med gjensidig seleksjonspress.`,
    },
    {
      id: 'bio1-7-5-example-2',
      type: 'example',
      title: 'Eksempel: Mykorrhiza',
      problem: 'Beskriv mykorrhiza-symbiosen og forklar hvorfor den er så viktig for planter.',
      solution: `**Løsning:**

**Hva er mykorrhiza?**
En mutualisme mellom planterøtter og sopp. "Myco" = sopp, "rhiza" = rot.

**To hovedtyper:**

**1. Ektomykorrhiza:**
- Soppens hyfer omgir roten utvendig
- Vanlig hos trær i tempererte skoger
- Eksempler: Kantareller, steinsopp med gran/furu

**2. Arbuskulær mykorrhiza (AM):**
- Hyfer trenger inn i rotcellene
- Danner forgrenede strukturer (arbuskler)
- 80-90% av alle plantarter

**Bytteforholdet:**

**Planten gir:**
- Karbohydrater fra fotosyntesen (sukker)
- Kan utgjøre 10-30% av plantens fotosyntese

**Soppen gir:**
- Økt vannopptak (hyfene når lenger)
- Bedre mineralopptak, særlig fosfor
- Beskyttelse mot patogener
- Tungmetalltolerans

**Hvorfor så viktig?**
1. Fosfor er ofte begrensende næringsstoff
2. Hyfenettverk når langt utenfor røttene
3. Overflatearealet for opptak øker enormt
4. Planter med mykorrhiza vokser bedre
5. Uten mykorrhiza klarer mange planter seg dårlig

**Mycelnettverk:**
Soppen kan koble sammen flere trær og overføre næring mellom dem - "skogens internett".`,
    },
  ],
  exercises: [
    {
      id: 'bio1-7-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken interaksjon beskriver et forhold der begge arter har fordel?',
      options: [
        { id: 'a', text: 'Mutualisme (+/+)', isCorrect: true },
        { id: 'b', text: 'Kommensalisme (+/0)', isCorrect: false },
        { id: 'c', text: 'Parasittisme (+/-)', isCorrect: false },
        { id: 'd', text: 'Konkurranse (-/-)', isCorrect: false },
      ],
      solution: 'Mutualisme er en interaksjon der begge arter har fordel av forholdet (+/+). Eksempler er pollinering, mykorrhiza og tarmbakterier.',
    },
    {
      id: 'bio1-7-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom intraspesifikk og interspesifikk konkurranse, og gi eksempler på hver.',
      solution: 'Intraspesifikk konkurranse er mellom individer av SAMME art. Eksempler: Hjorter som slåss om territorium, trær som konkurrerer om lys i en skog. Ofte den mest intense konkurransen fordi behovene er identiske. Interspesifikk konkurranse er mellom ULIKE arter. Eksempler: Rev og ugle som konkurrerer om mus, ulike meisearter som konkurrerer om insekter. Kan føre til nisjeseparasjon der artene spesialiserer seg på ulike ressurser.',
    },
    {
      id: 'bio1-7-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er kommensalisme?',
      options: [
        { id: 'a', text: 'Én art har fordel, den andre påvirkes ikke (+/0)', isCorrect: true },
        { id: 'b', text: 'Begge arter har fordel (+/+)', isCorrect: false },
        { id: 'c', text: 'Én art har fordel, den andre skades (+/-)', isCorrect: false },
        { id: 'd', text: 'Begge arter skades (-/-)', isCorrect: false },
      ],
      solution: 'Kommensalisme (+/0) er når én art har fordel mens den andre verken skades eller har fordel. Eksempler: Remorafisk som henger på hai, fugler som følger beitende dyr for å spise oppskremte insekter.',
    },
    {
      id: 'bio1-7-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv mykorrhiza-symbiosen og forklar hva hver partner bidrar med.',
      solution: 'Mykorrhiza er mutualisme mellom planterøtter og sopp. Planten bidrar med: Karbohydrater (sukker) fra fotosyntesen - kan være 10-30% av fotosynteseproduktet. Soppen bidrar med: Økt opptak av vann og mineraler (særlig fosfor) gjennom et utstrakt hyfenettverk, samt beskyttelse mot patogener. 80-90% av alle plantearter har mykorrhiza. Forholdet er spesielt viktig i næringsfattig jord der fosfor er begrensende.',
    },
    {
      id: 'bio1-7-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva koevolusjon er og gi et eksempel på hvordan det fungerer.',
      solution: 'Koevolusjon er gjensidig evolusjonær tilpasning mellom to eller flere arter som interagerer tett over lang tid. Artene utøver seleksjonspress på hverandre, og endringer i én art driver endringer i den andre. Eksempel - blomster og pollinatorer: 1) Blomster med mer nektar tiltrekker flere pollinatorer → flere frø. 2) Pollinatorer med bedre tilpasset munnpart får mer nektar → bedre overlevelse. 3) Blomster utvikler spesifikke former, farger og dufter. 4) Pollinatorer utvikler spesialiserte munnpart. 5) Resultatet kan bli høy spesialisering der blomst og pollinator er helt avhengige av hverandre.',
    },
    {
      id: 'bio1-7-5-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skiller parasittisme fra predasjon?',
      options: [
        { id: 'a', text: 'Parasitten dreper vanligvis ikke verten', isCorrect: true },
        { id: 'b', text: 'Parasitten er alltid større enn verten', isCorrect: false },
        { id: 'c', text: 'Predasjon gir fordel for begge parter', isCorrect: false },
        { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
      ],
      solution: 'Parasitter lever typisk lenger på/i én vert og dreper vanligvis ikke verten direkte (det ville vært dårlig strategi). Predatorer dreper byttedyret. I tillegg er parasitter ofte mindre enn verten (mens predatorer ofte er større), og parasitter kan ha komplekse livssykluser med flere verter.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const BIOLOGI_1_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_7_1,
  CHAPTER_BIOLOGI_1_7_2,
  CHAPTER_BIOLOGI_1_7_3,
  CHAPTER_BIOLOGI_1_7_4,
  CHAPTER_BIOLOGI_1_7_5,
];

export function getBiologi1Del7Chapter(chapterId: string): TextbookChapter | undefined {
  return BIOLOGI_1_DEL7_CHAPTERS.find(chapter => chapter.id === chapterId);
}
