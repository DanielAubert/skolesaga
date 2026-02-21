/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Kapittel 6: Mikroorganismer og smittevern
 *
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02):
 * - kompetansemål 7: gjøre rede for virale og mikrobielle sykdommer
 * - kompetansemål 9: gjøre rede for antibiotika og antibiotikaresistens
 *
 * 5 delkapitler: 6.1-6.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Mikroorganismenes mangfold
// ============================================================================

export const CHAPTER_BIOLOGI_1_6_1: TextbookChapter = {
  id: 'biologi-1-6-1',
  courseId: 'biologi-1',
  chapterNumber: '6.1',
  title: 'Mikroorganismenes mangfold',
  description: 'Oversikt over mikroorganismer: bakterier, virus, sopp og protister. Størrelse, organisering og roller i naturen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for hovedgruppene av mikroorganismer og deres kjennetegn',
    'beskrive mikroorganismers roller i naturen som nedbrytere, symbionter og patogener',
    'forklare hva normalfloraen er og hvorfor den er viktig for helsen',
  ],
  content: [
    {
      id: 'bio1-6-1-intro',
      type: 'text',
      content: `# Mikroorganismenes mangfold

Mikroorganismer er livets usynlige arbeidere. De finnes overalt – i jorda, i havet, i lufta og inne i kroppen vår. De fleste mikroorganismer er helt ufarlige, og mange er livsnødvendige for økosystemene og for vår egen helse. Likevel er det noen få som kan forårsake alvorlig sykdom.

I dette kapittelet får du en oversikt over de viktigste gruppene av mikroorganismer: bakterier, virus, sopp og protister. Du lærer om hvordan de skiller seg fra hverandre, og hvilke roller de spiller i naturen og i kroppen vår.

## Hva er en mikroorganisme?

En mikroorganisme er en organisme som er så liten at den ikke kan sees med det blotte øyet. For å se mikroorganismer trenger vi et mikroskop. De viktigste gruppene er:

- **Bakterier** – encellede prokaryoter
- **Virus** – partikler som ikke er celler (diskuteres om de er «levende»)
- **Sopp** – inkluderer gjærsopp og muggsopp
- **Protister** – encellede eukaryoter (f.eks. amøber, malaria-parasitter)`,
    },
    {
      id: 'bio1-6-1-def-1',
      type: 'definition',
      title: 'Mikroorganisme',
      content: 'En mikroorganisme (mikrobe) er en organisme som er for liten til å sees med det blotte øyet. Gruppen inkluderer bakterier, arker, virus, sopp (gjærsopp og muggsopp) og protister. Mikroorganismer finnes i nesten alle miljøer på jorda, fra dyphavskildene til is på Antarktis.',
    },
    {
      id: 'bio1-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Størrelsesskala for mikroorganismer',
      content: `**Størrelsesskala:**

| Organisme | Typisk størrelse | Synlig for? |
|-----------|-------------------|-------------|
| Virus | 20–300 nm | Elektronmikroskop |
| Bakterier | 0,5–5 μm | Lysmikroskop |
| Gjærsopp | 5–10 μm | Lysmikroskop |
| Protister (amøbe) | 100–700 μm | Lysmikroskop / lupeglass |
| Menneskecelle | 10–100 μm | Lysmikroskop |

**Størrelsesforhold:**
1 mm = 1000 μm (mikrometer) = 1 000 000 nm (nanometer).
Det betyr at du kan stable ca. 1000 bakterier etter hverandre langs 1 mm, mens du trenger ca. 50 000 virus for det samme.`,
    },
    {
      id: 'bio1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken type mikroorganisme er minst?',
        options: [
          { id: 'a', text: 'Bakterier', isCorrect: false },
          { id: 'b', text: 'Virus', isCorrect: true },
          { id: 'c', text: 'Gjaersopp', isCorrect: false },
          { id: 'd', text: 'Protister', isCorrect: false },
        ],
        solution: 'Virus er de minste «mikroorganismene» med en typisk størrelse på 20–300 nanometer. Bakterier er vanligvis 0,5–5 mikrometer, altså rundt 10–100 ganger større enn virus. Sopp og protister er enda større.',
      },
    },
    {
      id: 'bio1-6-1-roller',
      type: 'text',
      content: `## Mikroorganismers roller i naturen

Mikroorganismer spiller mange viktige roller i økosystemene:

### Nedbrytere (dekomponenter)
Bakterier og sopp bryter ned dødt organisk materiale og resirkulerer næringsstoffer tilbake til jorda. Uten nedbrytere ville døde planter og dyr hope seg opp, og næringsstoffene ville være utilgjengelige for nye organismer. Nedbrytning er en forutsetning for alt liv på jorda.

### Symbionter
Mange mikroorganismer lever i nært samarbeid med andre organismer:
- **Nitrogenfikserende bakterier** i rotknoller hos belgplanter omdanner nitrogen fra lufta til ammonium som plantene kan bruke
- **Tarmbakterier** hos mennesker og dyr hjelper med fordøyelsen og produserer vitaminer (f.eks. vitamin K og B12)
- **Mykorrhiza-sopp** lever i symbiose med planteroetter og hjelper plantene med å ta opp vann og mineraler

### Patogener
Noen få mikroorganismer kan forårsake sykdom. Disse kalles patogener. Eksempler er bakterien *Salmonella* (matforgiftning), viruset SARS-CoV-2 (COVID-19) og soppen *Candida* (soppinfeksjon).`,
    },
    {
      id: 'bio1-6-1-def-2',
      type: 'definition',
      title: 'Patogen',
      content: 'Et patogen er en mikroorganisme eller et agens som kan forårsake sykdom hos en vert. Patogener omfatter visse bakterier, virus, sopp og parasitter. Evnen til å forårsake sykdom kalles virulens. Ikke alle mikroorganismer er patogene – de aller fleste er ufarlige eller nyttige.',
    },
    {
      id: 'bio1-6-1-example-2',
      type: 'example',
      title: 'Eksempel: Nitrogenfiksering – samarbeid mellom bakterier og planter',
      problem: 'Kvitkløver dyrkes ofte sammen med gras på beitemarkene i Norge. Hvorfor er dette gunstig for graset?',
      solution: `**Svar:**

Kvitkløver er en belgplante som har **nitrogenfikserende bakterier** (Rhizobium) i rotknoller. Disse bakteriene omdanner nitrogengass (N₂) fra lufta til ammonium (NH₄⁺), som plantene kan bruke.

Nitrogen er et viktig næringsstoff som ofte begrenser plantevekst. Når kvitkløver vokser sammen med gras, lekker noe av det fikserte nitrogenet ut i jorda og gjør det tilgjengelig for graset. Dette er et eksempel på **symbiose** mellom bakterier og planter, og det reduserer behovet for kunstgjødsel.`,
    },
    {
      id: 'bio1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom en nedbryterrolle og en patogenrolle for mikroorganismer. Gi ett eksempel på hver.',
        hints: ['Tenk på hva mikroorganismen «lever av» og hvem som påvirkes.'],
        solution: 'Nedbrytere bryter ned dødt organisk materiale og resirkulerer næringsstoffer i økosystemet. Eksempel: Sopparter som bryter ned løvfall på skogbunnen. Patogener lever på eller i levende organismer og forårsaker sykdom. Eksempel: Bakterien Mycobacterium tuberculosis som forårsaker tuberkulose. Hovedforskjellen er at nedbrytere lever av dødt materiale, mens patogener angriper levende organismer.',
      },
    },
    {
      id: 'bio1-6-1-normalflora',
      type: 'text',
      content: `## Normalfloraen – nyttige mikroorganismer i og på kroppen

Kroppen vår er hjem for billioner av mikroorganismer, særlig bakterier. Til sammen kalles disse for **normalfloraen** (eller mikrobiomet). De fleste befinner seg i tarmen, på huden, i munnen og i de øvre luftveiene.

### Normalfloraens funksjoner

1. **Beskyttelse mot patogener**: Normalfloraen konkurrerer med sykdomsfremkallende bakterier om plass og næringsstoffer. Dette kalles **koloniseringsresistens**.
2. **Fordøyelse**: Tarmbakterier hjelper med å bryte ned næringsfiber og produserer kortkjedede fettsyrer som tarmcellene bruker som energi.
3. **Vitaminproduksjon**: Noen tarmbakterier produserer vitamin K og B-vitaminer.
4. **Immunsystemet**: Normalfloraen stimulerer immunsystemet og bidrar til at det utvikler seg normalt.

### Hva kan forstyrre normalfloraen?

- **Antibiotikabehandling** dreper både patogener og normalfloraen, noe som kan føre til ubalanse
- **Endret kosthold** påvirker sammensetningen av tarmbakterier
- **Stress og sykdom** kan endre normalfloraen`,
    },
    {
      id: 'bio1-6-1-def-3',
      type: 'definition',
      title: 'Normalflora (mikrobiom)',
      content: 'Normalfloraen er alle mikroorganismene som normalt lever i og på kroppen vår uten å forårsake sykdom. Tarmens normalflora alene består av anslagsvis 100 billioner bakterier – det er ca. ti ganger så mange som kroppens egne celler. Normalfloraen spiller en viktig rolle for fordøyelsen, immunforsvaret og beskyttelse mot patogener.',
    },
    {
      id: 'bio1-6-1-example-3',
      type: 'example',
      title: 'Eksempel: Clostridium difficile – når normalfloraen svikter',
      content: `Etter langvarig antibiotikabehandling kan normalfloraen i tarmen bli kraftig redusert. Dette gir mulighet for den sykdomsfremkallende bakterien *Clostridioides difficile* (C. diff) til å formere seg uhemmet.

**Hva skjer?**
1. Antibiotika dreper både patogener og normalflorabakterier
2. Normalfloraens koloniseringsresistens forsvinner
3. *C. difficile*-sporer spirer og bakterien formerer seg
4. Bakterien produserer toksiner som gir alvorlig diaré og tarmbetennelse

**Behandling:**
I alvorlige tilfeller kan fekaltransplantasjon (overføring av normalflora fra en frisk donor) være effektivt – dette viser hvor viktig en sunn normalflora er.`,
    },
    {
      id: 'bio1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er koloniseringsresistens?',
        options: [
          { id: 'a', text: 'Normalfloraen beskytter mot patogener ved å konkurrere om plass og næring', isCorrect: true },
          { id: 'b', text: 'Evnen en bakterie har til å motstå antibiotika', isCorrect: false },
          { id: 'c', text: 'Immunsystemets evne til å drepe virus', isCorrect: false },
          { id: 'd', text: 'Hudens evne til å stoppe alle bakterier fra å trenge inn', isCorrect: false },
        ],
        solution: 'Koloniseringsresistens er normalfloraens evne til å hindre patogene mikroorganismer i å etablere seg. Normalflorabakteriene konkurrerer med patogener om plass på slimhinner og hud, om næringsstoffer, og kan også produsere antimikrobielle stoffer. Når normalfloraen reduseres (f.eks. av antibiotika), svekkes koloniseringsresistensen, og patogener kan lettere få fotfeste.',
      },
    },
    {
      id: 'bio1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar kort hva som menes med at normalfloraen kan «forstyrres» av antibiotikabruk, og gi et konkret eksempel på en mulig konsekvens.',
        hints: ['Tenk på hvilke bakterier antibiotika dreper – bare de sykdomsfremkallende?'],
        solution: 'Antibiotika skiller ikke mellom nyttige normalflorabakterier og patogene bakterier. Når man tar antibiotika, dreper man derfor både sykdomsbakteriene og store deler av normalfloraen. Dette kan gi plass til sykdomsfremkallende mikroorganismer som normalt holdes i sjakk. Et konkret eksempel er Clostridioides difficile-infeksjon: etter antibiotikabehandling kan denne bakterien ta over i tarmen og forårsake alvorlig diaré og tarmbetennelse.',
      },
    },
    {
      id: 'bio1-6-1-summary',
      type: 'text',
      content: `## Oppsummering

- Mikroorganismer er organismer som er for små til å sees med det blotte øyet
- De viktigste gruppene er bakterier, virus, sopp og protister
- Virus er minst (nm), bakterier er større (μm), sopp og protister er størst
- Mikroorganismer spiller roller som nedbrytere, symbionter og patogener
- De fleste mikroorganismer er ufarlige eller nyttige – kun noen få er sykdomsfremkallende
- Normalfloraen består av billioner av mikroorganismer som lever på og i kroppen
- Normalfloraen beskytter mot patogener, hjelper fordøyelsen og stimulerer immunsystemet`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en oversiktstabell som sammenligner bakterier, virus, sopp og protister med hensyn til: celletype (prokaryot/eukaryot/ingen), størrelse, formering og et eksempel på sykdom forårsaket av gruppen.',
        hints: ['Husk at virus ikke har celler, mens bakterier er prokaryoter og sopp/protister er eukaryoter.'],
        solution: 'Bakterier: prokaryot, 0,5–5 μm, binær fisjon, tuberkulose. Virus: ikke celle, 20–300 nm, vertscelle (replikasjon), influensa. Sopp: eukaryot, 5–100 μm, knoppskyting/sporer, ringorm. Protister: eukaryot, 10–700 μm, celledeling, malaria. Virus er spesielle fordi de ikke har egen cellulær struktur og må bruke vertsceller for å formere seg.',
      },
    },
    {
      id: 'bio1-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft påstanden: «Uten mikroorganismer ville livet på jorda stoppet opp.» Bruk minst tre konkrete eksempler i svaret ditt.',
        hints: ['Tenk på næringskretsl øp, symbiose med planter og fordøyelse.'],
        solution: 'Påstanden er riktig. Eksempler: 1) Nedbrytere (bakterier og sopp) resirkulerer næringsstoffer fra dødt organisk materiale tilbake til jorda – uten dem ville næringsstoffene være utilgjengelige for nye organismer. 2) Nitrogenfikserende bakterier omdanner nitrogengass fra atmosfæren til former plantene kan bruke – uten dette ville plantevekst være sterkt begrenset. 3) Tarmbakterier hos mennesker og dyr hjelper med fordøyelsen og produserer livsviktige vitaminer. 4) Fotosyntetiske cyanobakterier produserer en betydelig del av jordens oksygen. Uten mikroorganismer ville næringskretsl øp bryte sammen, planter få for lite nitrogen, og vi ville mangle viktige vitaminer og fordøyelseshjelp.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Mikroorganisme', definition: 'Organisme for liten til å sees med det blotte øyet' },
    { term: 'Patogen', definition: 'Sykdomsfremkallende mikroorganisme' },
    { term: 'Normalflora', definition: 'Mikroorganismer som normalt lever på og i kroppen' },
    { term: 'Koloniseringsresistens', definition: 'Normalfloraens evne til å hindre patogener i å etablere seg' },
    { term: 'Symbiose', definition: 'Nært samspill mellom to arter som lever tett sammen' },
    { term: 'Nedbryting', definition: 'Omdanning av dødt organisk materiale til uorganiske stoffer' },
  ],
};

// ============================================================================
// Kapittel 6.2: Bakterier – oppbygning, formering og betydning
// ============================================================================

export const CHAPTER_BIOLOGI_1_6_2: TextbookChapter = {
  id: 'biologi-1-6-2',
  courseId: 'biologi-1',
  chapterNumber: '6.2',
  title: 'Bakterier – oppbygning, formering og betydning',
  description: 'Bakteriecellens struktur, gram-positiv vs. gram-negativ, binær fisjon, vekstkurve og bakteriers roller i natur og samfunn.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive bakteriecellens oppbygning og sammenligne med eukaryote celler',
    'forklare forskjellen mellom gram-positive og gram-negative bakterier',
    'gjøre rede for binær fisjon og bakteriell vekstkurve',
    'gi eksempler på nyttige og sykdomsfremkallende bakterier',
  ],
  content: [
    {
      id: 'bio1-6-2-intro',
      type: 'text',
      content: `# Bakterier – oppbygning, formering og betydning

Bakterier er de mest tallrike organismene på jorda. De har vært her i over 3,5 milliarder år og finnes i nesten alle miljøer – fra varme kilder til isbreer, fra dypt nede i jordskorpa til høyt oppe i atmosfæren. Bakterier er prokaryoter, som betyr at de mangler cellekjerne og andre membranbundne organeller.

I dette kapittelet ser vi nærmere på bakteriecellens oppbygning, hvordan bakterier formerer seg, og hvilken betydning de har både som sykdomsfremkallere og som nyttige organismer.`,
    },
    {
      id: 'bio1-6-2-def-1',
      type: 'definition',
      title: 'Bakterie',
      content: 'Bakterier er encellede prokaryote mikroorganismer. De mangler cellekjerne og membranbundne organeller, men har sitt DNA i et kromosom som ligger fritt i cytoplasmaet (i et område kalt nukleoiden). Bakterier har cellevegg, plasmamembran og ribosomer for proteinsyntese. De formerer seg vanligvis ved binær fisjon.',
    },
    {
      id: 'bio1-6-2-oppbygning',
      type: 'text',
      content: `## Bakteriecellens oppbygning

En typisk bakteriecelle har følgende strukturer:

### Obligatoriske strukturer (alle bakterier har disse)

**Plasmamembran**
Et dobbelt lipidlag som omgir cytoplasmaet. Regulerer transport av stoffer inn og ut av cellen. Inneholder proteiner for energiproduksjon (elektrontransportkjeden).

**Cellevegg**
Ligger utenfor plasmamembranen. Gir cellen form og beskyttelse mot osmotisk stress. Hovedkomponenten er **peptidoglykan** – et nettverk av sukker- og aminosyrekjeder som er unikt for bakterier.

**Ribosomer**
Små partikler (70S-type) der proteinsyntese foregår. Bakterielle ribosomer er mindre enn eukaryote ribosomer (80S), noe som er viktig for antibiotikas virkning.

**Kromosom (DNA)**
Et enkelt, sirkulært DNA-molekyl som inneholder bakteriens gener. Ligger i et område kalt nukleoiden (ikke omgitt av membran).

### Valgfrie strukturer (noen bakterier har disse)

**Kapsel**
Et slimlag utenfor celleveggen som beskytter mot immunforsvaret og uttørking.

**Flageller**
Lange piskeformede strukturer som brukes til bevegelse. Noen bakterier har en flagell, andre har mange.

**Pili (fimbriae)**
Korte, hårlignende strukturer som brukes til å feste seg til overflater eller til genoverføring mellom bakterier (konjugasjon).

**Plasmider**
Små, sirkulære DNA-molekyler utenom kromosomet. Bærer ofte gener for antibiotikaresistens.`,
    },
    {
      id: 'bio1-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av prokaryot og eukaryot celle',
      content: `| Egenskap | Bakterie (prokaryot) | Dyrecelle (eukaryot) |
|----------|---------------------|---------------------|
| Cellekjerne | Nei (nukleoid) | Ja |
| Kromosom | 1, sirkulært | Flere, lineære |
| Ribosomer | 70S | 80S |
| Organeller med membran | Nei | Ja (mitokondrier, ER osv.) |
| Cellevegg | Ja (peptidoglykan) | Nei |
| Plasmider | Ofte | Nei |
| Størrelse | 0,5–5 μm | 10–100 μm |
| Formering | Binær fisjon | Mitose |

**Hovedforskjell:** Bakterier mangler cellekjerne og membranbundne organeller. DNA-et ligger fritt i cytoplasmaet. Denne enkle oppbygningen gjør at bakterier kan formere seg raskt.`,
    },
    {
      id: 'bio1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er peptidoglykan?',
        options: [
          { id: 'a', text: 'Et nettverk av sukker- og aminosyrekjeder i bakteriens cellevegg', isCorrect: true },
          { id: 'b', text: 'Arvematerialet i bakteriens cellekjerne', isCorrect: false },
          { id: 'c', text: 'Et enzym som bryter ned antibiotika', isCorrect: false },
          { id: 'd', text: 'En type protein i bakteriens flageller', isCorrect: false },
        ],
        solution: 'Peptidoglykan er hovedkomponenten i bakteriers cellevegg. Det består av et nettverk av sukker- og aminosyrekjeder som gir cellen form og styrke. Peptidoglykan er unikt for bakterier og finnes ikke i eukaryote celler, noe som gjør det til et viktig mål for antibiotika.',
      },
    },
    {
      id: 'bio1-6-2-gram',
      type: 'text',
      content: `## Gram-positiv og gram-negativ

I 1884 utviklet den danske bakteriologen Hans Christian Gram en fargemetode som deler bakterier i to hovedgrupper basert på celleveggens oppbygning:

### Gram-positive bakterier
- **Tykk cellevegg** med mye peptidoglykan
- Farges **lilla/blå** i gramfarging
- Mangler ytre membran
- Eksempler: *Staphylococcus aureus*, *Streptococcus*, *Bacillus*

### Gram-negative bakterier
- **Tynn cellevegg** med lite peptidoglykan
- Har en **ytre membran** med lipopolysakkarid (LPS)
- Farges **rosa/rød** i gramfarging
- LPS kan forårsake kraftig immunrespons (endotoksin)
- Eksempler: *Escherichia coli*, *Salmonella*, *Neisseria*

### Klinisk betydning

Skillet mellom gram-positiv og gram-negativ er viktig i medisin fordi:
1. Den ytre membranen hos gram-negative bakterier gjør dem mer motstandsdyktige mot mange antibiotika
2. Gramfarging hjelper legen med å velge riktig antibiotika raskt
3. LPS hos gram-negative bakterier kan utløse septisk sjokk`,
    },
    {
      id: 'bio1-6-2-def-2',
      type: 'definition',
      title: 'Gramfarging',
      content: 'Gramfarging er en fargemetode for bakterier utviklet av Hans Christian Gram. Bakterier farges først med krystallfiolett og deretter med safranin. Gram-positive bakterier har tykk cellevegg og beholder den lilla fargen, mens gram-negative bakterier har tynn cellevegg med ytre membran og farges rosa. Metoden er et viktig første steg i identifisering av ukjente bakterier.',
    },
    {
      id: 'bio1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvorfor er gram-negative bakterier ofte vanskeligere å behandle med antibiotika enn gram-positive?',
        options: [
          { id: 'a', text: 'Fordi de har en ytre membran som blokkerer mange antibiotika', isCorrect: true },
          { id: 'b', text: 'Fordi de formerer seg raskere enn gram-positive', isCorrect: false },
          { id: 'c', text: 'Fordi de har større ribosomer', isCorrect: false },
          { id: 'd', text: 'Fordi de ikke har cellevegg', isCorrect: false },
        ],
        solution: 'Gram-negative bakterier har en ytre membran utenpå den tynne celleveggen. Denne ytre membranen fungerer som en ekstra barriere som hindrer mange antibiotikamolekyler i å nå inn til cellens indre. Antibiotika som må trenge gjennom celleveggen for å virke, blokkeres derfor ofte av den ytre membranen.',
      },
    },
    {
      id: 'bio1-6-2-formering',
      type: 'text',
      content: `## Binær fisjon og vekstkurve

### Binær fisjon

Bakterier formerer seg ukjønnet ved **binær fisjon** (todeling):

1. DNA-et kopieres (replikasjon)
2. Cellen vokser i størrelse
3. En cellevegg dannes på midten
4. Cellen deles i to identiske datterceller

Under optimale forhold kan noen bakterier (som *E. coli*) dele seg hvert 20. minutt. Det betyr at en enkelt bakterie teoretisk kan bli til over 16 millioner på 8 timer!

### Bakteriell vekstkurve

Når bakterier dyrkes i et lukket system (f.eks. et reagensglads med næringsmedium), følger populasjonsveksten et karakteristisk mønster:

**1. Lagfase** – Bakteriene tilpasser seg det nye miljøet. Lite celledeling, men aktiv metabolisme.

**2. Eksponentiell fase (log-fase)** – Bakteriene deler seg med konstant hastighet. Populasjonen vokser eksponentielt.

**3. Stasjonær fase** – Veksten bremser fordi næringsstoffer brukes opp og avfallsstoffer hoper seg opp. Antall nye celler ≈ antall døde celler.

**4. Dødsfase** – Næringsstoffene er oppbrukt. Flere celler dør enn som dannes. Populasjonen avtar.`,
    },
    {
      id: 'bio1-6-2-def-3',
      type: 'definition',
      title: 'Binær fisjon',
      content: 'Binær fisjon er bakteriers vanligste formeringsmetode. Prosessen innebærer at bakteriens DNA kopieres, cellen vokser, og en ny cellevegg dannes på midten slik at cellen deles i to genetisk identiske datterceller. Under optimale forhold kan dette skje svært raskt – noen bakterier deler seg hvert 20. minutt.',
    },
    {
      id: 'bio1-6-2-example-2',
      type: 'example',
      title: 'Eksempel: Eksponentiell vekst av bakterier',
      problem: 'En bakteriekultur starter med 100 bakterier. Bakteriene deler seg hvert 30. minutt. Hvor mange bakterier er det etter 3 timer?',
      solution: `**Løsning:**

Antall delinger på 3 timer = 180 min / 30 min = **6 delinger**

Etter binær fisjon dobles antallet for hver deling:

| Tid (min) | Delinger | Antall bakterier |
|-----------|----------|-----------------|
| 0 | 0 | 100 |
| 30 | 1 | 200 |
| 60 | 2 | 400 |
| 90 | 3 | 800 |
| 120 | 4 | 1 600 |
| 150 | 5 | 3 200 |
| 180 | 6 | 6 400 |

**Formel:** N = N₀ × 2ⁿ = 100 × 2⁶ = 100 × 64 = **6 400 bakterier**

Denne eksponentielle veksten forklarer hvorfor bakterielle infeksjoner kan utvikle seg raskt.`,
    },
    {
      id: 'bio1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'En bakterie deler seg hvert 20. minutt. Etter 4 timer deler man populasjonen i to like store kulturer og lar dem vokse i ytterligere 1 time. Hvor mange bakterier er det i hver kultur til slutt, dersom man startet med 1 bakterie?',
        hints: ['Regn ut antall delinger i 4 timer først, del så populasjonen på to, og regn ut videre vekst i 1 time.'],
        solution: 'Etter 4 timer (240 min / 20 min = 12 delinger): N = 1 × 2¹² = 4096 bakterier. Deler populasjonen i to: 4096 / 2 = 2048 bakterier i hver kultur. Etter 1 time til (60 min / 20 min = 3 delinger): N = 2048 × 2³ = 2048 × 8 = 16 384 bakterier i hver kultur.',
      },
    },
    {
      id: 'bio1-6-2-nyttige',
      type: 'text',
      content: `## Bakteriers betydning for mennesker

### Sykdomsfremkallende bakterier
- *Mycobacterium tuberculosis* – tuberkulose
- *Staphylococcus aureus* – hudinfeksjoner, blodforgiftning
- *Salmonella* – matforgiftning
- *Streptococcus pneumoniae* – lungebetennelse
- *Borrelia burgdorferi* – borreliose (flåttpåført)

### Nyttige bakterier
- **Matproduksjon**: Melkesyrebakterier brukes til å lage yoghurt, ost, surkål og sylteagurk
- **Bioteknologi**: *E. coli* brukes til å produsere insulin og andre proteiner ved hjelp av genteknologi
- **Nitrogenkretsløp**: Nitrogenfikserende bakterier omdanner N₂ til ammoniakk, og nitrifikasjonsbakterier omdanner ammoniakk til nitrat
- **Biorensning**: Bakterier brukes til å rense avløpsvann
- **Kompostering**: Bakterier er sentrale i nedbrytning av matavfall til jord`,
    },
    {
      id: 'bio1-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom gram-positive og gram-negative bakterier med hensyn til cellevegg-oppbygning, fargereaksjon og klinisk betydning.',
        hints: ['Husk å nevne peptidoglykantykkelse, ytre membran og LPS.'],
        solution: 'Gram-positive bakterier har tykk cellevegg med mye peptidoglykan og mangler ytre membran. De farges lilla/blå i gramfarging. Gram-negative bakterier har tynn cellevegg med lite peptidoglykan, men har en ytre membran som inneholder lipopolysakkarid (LPS). De farges rosa/røde. Klinisk er skillet viktig fordi den ytre membranen hos gram-negative bakterier gjør dem mer motstandsdyktige mot mange antibiotika. LPS kan dessuten utløse kraftig immunrespons og septisk sjokk ved alvorlige infeksjoner. Gramfarging er derfor et viktig første steg i å velge riktig antibiotikabehandling.',
      },
    },
    {
      id: 'bio1-6-2-summary',
      type: 'text',
      content: `## Oppsummering

- Bakterier er prokaryote encellede organismer uten cellekjerne
- Bakteriecellen har cellevegg (peptidoglykan), plasmamembran, ribosomer (70S) og sirkulært DNA
- Valgfrie strukturer inkluderer kapsel, flageller, pili og plasmider
- Gram-positive bakterier har tykk cellevegg, gram-negative har tynn cellevegg pluss ytre membran
- Bakterier formerer seg ved binær fisjon og kan dele seg svært raskt
- Vekstkurven har fire faser: lagfase, eksponentiell fase, stasjonær fase og dødsfase
- Bakterier er både sykdomsfremkallere og nyttige i matproduksjon, bioteknologi og økosystemer`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'I hvilken fase av vekstkurven deler bakteriene seg raskest?',
        options: [
          { id: 'a', text: 'Lagfasen', isCorrect: false },
          { id: 'b', text: 'Eksponentiell fase (log-fase)', isCorrect: true },
          { id: 'c', text: 'Stasjonær fase', isCorrect: false },
          { id: 'd', text: 'Dødsfase', isCorrect: false },
        ],
        solution: 'I den eksponentielle fasen (log-fasen) deler bakteriene seg med konstant, maksimal hastighet. Næringsstoffer er rikelig tilgjengelige og avfallsstoffer har ikke bygget seg opp. Populasjonen dobles med jevne mellomrom, og veksten er eksponentiell.',
      },
    },
    {
      id: 'bio1-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft hvorfor bakterier er viktige både for jordbruket og for matindustrien. Gi minst to eksempler fra hvert område.',
        hints: ['Tenk på nitrogenfiksering, nedbrytning, fermentering og konservering.'],
        solution: 'Jordbruk: 1) Nitrogenfikserende bakterier (Rhizobium) i rotknoller hos belgplanter omdanner N₂ til ammoniakk, noe som reduserer behovet for kunstgjødsel. 2) Nedbryterbakterier i jorda omdanner dødt organisk materiale til næringsstoffer som plantene kan ta opp. 3) Bakterier brukes i biogjødsel og kompostering. Matindustri: 1) Melkesyrebakterier (Lactobacillus) brukes i produksjon av yoghurt, ost og kefir gjennom fermentering. 2) Bakterier brukes til å lage surkål, kimchi og andre fermenterte grønnsaker. 3) Eddiksyrebakterier brukes i eddikproduksjon. Bakterier er altså uunnværlige både for matproduksjon og for å opprettholde fruktbar jord.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Prokaryot', definition: 'Celle uten cellekjerne og membranbundne organeller' },
    { term: 'Peptidoglykan', definition: 'Hovedkomponent i bakteriers cellevegg, unikt for bakterier' },
    { term: 'Gramfarging', definition: 'Fargemetode som skiller gram-positive og gram-negative bakterier' },
    { term: 'Binær fisjon', definition: 'Bakteriers formeringsmetode der cellen deles i to identiske datterceller' },
    { term: 'Plasmid', definition: 'Lite, sirkulært DNA-molekyl utenom kromosomet' },
    { term: 'Flagell', definition: 'Lang, piskeformet struktur for bevegelse' },
  ],
};

// ============================================================================
// Kapittel 6.3: Virus – struktur, livssyklus og sykdom
// ============================================================================

export const CHAPTER_BIOLOGI_1_6_3: TextbookChapter = {
  id: 'biologi-1-6-3',
  courseId: 'biologi-1',
  chapterNumber: '6.3',
  title: 'Virus – struktur, livssyklus og sykdom',
  description: 'Virusstruktur (kapsid, arvemateriale, kappe), lytisk og lysogen syklus, viktige virussykdommer og diskusjonen om virus er levende.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive virusets oppbygning og sammenligne med celler',
    'forklare lytisk og lysogen syklus',
    'gi eksempler på viktige virussykdommer og hvordan de smitter',
    'drøfte om virus er levende organismer',
  ],
  content: [
    {
      id: 'bio1-6-3-intro',
      type: 'text',
      content: `# Virus – struktur, livssyklus og sykdom

Virus er blant de enkleste biologiske enhetene vi kjenner. De befinner seg i grenseland mellom det levende og det ikke-levende: de har arvemateriale og kan evolve, men de kan ikke formere seg uten å kapre en vertscelle. Virus er ansvarlige for mange alvorlige sykdommer, fra forkjølelse til COVID-19 og AIDS.

I dette kapittelet lærer du om virusets oppbygning, hvordan virus formerer seg, og hvilke sykdommer de forårsaker.`,
    },
    {
      id: 'bio1-6-3-def-1',
      type: 'definition',
      title: 'Virus',
      content: 'Et virus er en submikroskopisk, infektiøs partikkel som består av arvemateriale (DNA eller RNA) omgitt av et proteinskall (kapsid). Virus har ikke egen metabolisme og kan kun formere seg inne i en levende vertscelle. De er derfor obligate intracellulære parasitter. Virus er mye mindre enn bakterier (20–300 nm).',
    },
    {
      id: 'bio1-6-3-struktur',
      type: 'text',
      content: `## Virusets oppbygning

Et virus er mye enklere enn en celle. Det består av bare noen fåkomponenter:

### 1. Arvemateriale (genom)
- Kan være **DNA** eller **RNA** (aldri begge)
- Kan være enkeltttraadet eller dobbeltttraadet
- Kan være lineaert eller sirkulært

### 2. Kapsid (proteinskall)
- Proteinlag som omgir og beskytter arvematerialet
- Bygd opp av mange like proteinenheter kalt **kapsomerer**
- Tre vanlige former:
  - **Ikosaedrisk** (20-sidet, kulelignende) – f.eks. adenovirus
  - **Helikal** (spiralformet, stavlignende) – f.eks. tobakksmosaikkvirus
  - **Kompleks** (sammensatt form) – f.eks. bakteriofager (T4)

### 3. Kappe (konvolutt) – hos noen virus
- Lipidmembran som stammer fra vertscellens membran
- Inneholder virale proteiner (f.eks. spike-proteiner)
- **Kappekledde virus** (f.eks. influensa, SARS-CoV-2) er sårbare for saape og alkohol, fordi disse ødelegger lipidlaget
- **Nakne virus** (f.eks. norovirus) mangler kappe og er mer motstandsdyktige`,
    },
    {
      id: 'bio1-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Hvorfor virker haandvask mot SARS-CoV-2?',
      content: `SARS-CoV-2 (viruset som forårsaker COVID-19) er et kappekledd virus. Kappen består av et lipidlag hentet fra vertscellens membran.

**Saape ødelaegger viruset:**
1. Saapemolekyler har en fettløselig del og en vannløselig del
2. Den fettløselige delen traenger inn i virusets lipidkappe
3. Lipidlaget løses opp og faller fra hverandre
4. Uten kappe kan viruset ikke lenger binde seg til vertscellens reseptorer
5. Viruset er dermed inaktivert

**Derfor er haandvask med saape og vann svært effektivt** mot kappekledde virus. Nakne virus (som norovirus) er vanskeligere åfjerne fordi de mangler lipidlag.`,
    },
    {
      id: 'bio1-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er korrekt om virusets oppbygning?',
        options: [
          { id: 'a', text: 'Virus har enten DNA eller RNA som arvemateriale, omgitt av et proteinskall (kapsid)', isCorrect: true },
          { id: 'b', text: 'Virus har både DNA og RNA, pluss en cellekjerne', isCorrect: false },
          { id: 'c', text: 'Virus har ribosomer for ålage egne proteiner', isCorrect: false },
          { id: 'd', text: 'Virus har plasmamembran og egen metabolisme', isCorrect: false },
        ],
        solution: 'Et virus består av arvemateriale (DNA eller RNA, aldri begge) omgitt av et proteinskall kalt kapsid. Noen virus har i tillegg en lipidkappe. Virus har IKKE ribosomer, plasmamembran eller egen metabolisme – de er avhengige av vertsceller for åformere seg.',
      },
    },
    {
      id: 'bio1-6-3-sykluser',
      type: 'text',
      content: `## Virusets livssyklus

Virus kan ikke formere seg påegen haand. De måinfisere en vertscelle og bruke cellens maskineri til ålage nye viruskopier. Det finnes to hovedtyper av formering:

### Lytisk syklus (dreper vertscellen)

1. **Festing**: Viruset binder seg til spesifikke reseptorer påvertscellens overflate
2. **Injeksjon/penetrasjon**: Virusets arvemateriale føres inn i vertscellen
3. **Replikasjon**: Vertscellens maskineri kopierer virusets DNA/RNA og produserer virale proteiner
4. **Sammensetting**: Nye viruspartikler settes sammen inne i cellen
5. **Frigjoring (lysis)**: Cellen sprekker og frigjør hundrevis av nye virus som kan infisere nye celler

### Lysogen syklus (viruset «gjemmer seg»)

1. **Festing og injeksjon**: Som i lytisk syklus
2. **Integrasjon**: Virusets DNA bygges inn i vertscellens kromosom (kalles nå **profag**)
3. **Replikasjon med verten**: Nårvertscellen deler seg, kopieres også virusets DNA
4. **Aktivering**: Under stress (UV-lys, kjemikalier) kan profagen aktiveres og gå over i lytisk syklus

### Betydning av de to syklusene

- **Lytisk syklus**: Gir rask infeksjon og celledoed – typisk for akutte sykdommer
- **Lysogen syklus**: Viruset kan være latent i årevis på – typisk for kroniske infeksjoner (f.eks. herpesvirus)`,
    },
    {
      id: 'bio1-6-3-def-2',
      type: 'definition',
      title: 'Lytisk syklus',
      content: 'Den lytiske syklusen er en virusvermering der viruset tar over vertscellens maskineri, produserer mange nye viruspartikler, og til slutt sprenger (lyserer) vertscellen. De nye virusene frigjøres og kan infisere nye celler. Denne syklusen gir rask spredning og celledoed.',
    },
    {
      id: 'bio1-6-3-def-3',
      type: 'definition',
      title: 'Lysogen syklus',
      content: 'Den lysogene syklusen er en virusvermering der virusets DNA integreres i vertscellens kromosom og kalles en profag. Profagen kopieres passivt nårvertscellen deler seg, uten ådrepe cellen. Under visse forhold (stress, UV-stråling) kan profagen aktiveres og gå over til lytisk syklus.',
    },
    {
      id: 'bio1-6-3-example-2',
      type: 'example',
      title: 'Eksempel: Herpesvirus – lytisk og lysogen syklus i praksis',
      problem: 'Forklar hvorfor herpes-blemmer kommer tilbake gjentatte ganger gjennom livet.',
      solution: `**Svar:**

Herpesvirus (f.eks. HSV-1 som gir munnsaar) illustrerer begge livssyklusene:

**Foerste infeksjon (lytisk):**
- Viruset infiserer hudceller rundt munnen
- Lytisk syklus gir blemmer og saar
- Immunsystemet begrenser infeksjonen, og saarene leges

**Latent fase (lysogen):**
- Viruset trekker seg tilbake til nerveceller (sensoriske ganglier)
- Virusets DNA integreres og forblir latent i nervecellen
- Immunsystemet kan ikke nå viruset her

**Reaktivering (tilbake til lytisk):**
- Ved stress, sollys, feber eller svekket immunforsvar aktiveres viruset
- Det vandrer tilbake langs nerven til huden
- Ny lytisk syklus gir nye blemmer påsamme sted

Derfor fårman gjentatte utbrudd av munnsaar – viruset er aldri helt borte fra kroppen.`,
    },
    {
      id: 'bio1-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv trinnene i den lytiske syklusen og forklar hvorfor denne syklusen dreper vertscellen.',
        hints: ['Start med festing til reseptorer og avslutt med lysis.'],
        solution: 'Trinnene i lytisk syklus: 1) Festing – viruset binder til spesifikke reseptorer påvertscellens overflate. 2) Penetrasjon – virusets arvemateriale injiseres inn i vertscellen. 3) Replikasjon – vertscellens eget maskineri (ribosomer, enzymer) brukes til åkopiere virusets DNA/RNA og produsere virale proteiner. 4) Sammensetting – nye viruspartikler settes sammen inne i cellen. 5) Lysis – cellen sprekker og hundrevis av nye virus frigjøres. Cellen dør fordi viruset tar fullstendig kontroll over cellens maskineri, slutter åprodusere cellens egne proteiner, og til slutt sprenger cellemembranen for åslippe ut nye viruspartikler.',
      },
    },
    {
      id: 'bio1-6-3-sykdommer',
      type: 'text',
      content: `## Viktige virussykdommer

### Influensa
- **Virus**: Influensavirus (type A, B, C)
- **Smitte**: Draapeinfeksjon (hoste, nyse) og kontaktsmitte
- **Symptomer**: Feber, muskelsmerter, hoste, utmattelse
- **Saerpreg**: Viruset muterer raskt (antigendrift og antigenshift), derfor trengs ny vaksine hvert aar

### COVID-19
- **Virus**: SARS-CoV-2 (koronavirus)
- **Smitte**: Draapeinfeksjon og aerosoler, kontaktsmitte
- **Symptomer**: Feber, hoste, tap av smak/lukt, pustebesveer
- **Saerpreg**: Spike-protein binder til ACE2-reseptorer påmenneskeceller

### HIV/AIDS
- **Virus**: Humant immunsviktvirus (HIV)
- **Smitte**: Seksuell kontakt, blodoverføring, mor-til-barn
- **Saerpreg**: Angriper T-hjelpeceller (CD4+) i immunsystemet
- **Konsekvens**: Uten behandling utvikles AIDS – immunsystemet ødelegges og pasienten dør av opportunistiske infeksjoner

### HPV (humant papillomavirus)
- **Smitte**: Seksuell kontakt og hudkontakt
- **Saerpreg**: Noen HPV-typer kan forårsake livmorhalskreft
- **Forebygging**: HPV-vaksinen gis til alle ungdommer i Norge (barnevaksinasjonsprogrammet)`,
    },
    {
      id: 'bio1-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvorfor måinfluensavaksinen fornyes hvert aar?',
        options: [
          { id: 'a', text: 'Fordi influensaviruset muterer raskt og endrer sine overflateproteiner', isCorrect: true },
          { id: 'b', text: 'Fordi vaksinen ødelegges i kroppen etter ett aar', isCorrect: false },
          { id: 'c', text: 'Fordi immunsystemet glemmer alle virus etter 12 måneder', isCorrect: false },
          { id: 'd', text: 'Fordi influensa bare finnes om vinteren', isCorrect: false },
        ],
        solution: 'Influensaviruset endrer stadig sine overflateproteiner gjennom antigendrift (småmutasjoner) og antigenshift (større endringer ved utbytting av gensegmenter). Immunsystemet gjenkjenner virus via overflateproteiner, så nårdisse endres, virker ikke fjorets immunitet. Derfor måWHO hvert aar analysere hvilke virusstammer som sirkulerer og tilpasse vaksinen.',
      },
    },
    {
      id: 'bio1-6-3-levende',
      type: 'text',
      content: `## Er virus levende organismer?

Dette er et av biologiens store graensespørsmaal. Svaret avhenger av hvordan vi definerer «liv».

### Argumenter FOR at virus er levende:
- De har arvemateriale (DNA eller RNA) og kan evolve
- De gjennomgår naturlig utvalg
- De har genetisk kode som ligner alle andre organismer
- De kan tilpasse seg nye verter

### Argumenter MOT at virus er levende:
- De har **ikke egen metabolisme** – ingen energiproduksjon
- De kan **ikke formere seg uten vertscelle**
- De har **ingen celler** – de er partikler, ikke celler
- De har **ikke ribosomer** og kan ikke lage proteiner selv
- Utenfor en vertscelle er de inaktive «krystaller»

### Konklusjon
De fleste biologer regner virus som **ikke-levende biologiske enheter**. De befinner seg i et grenseland og utfordrer vaar definisjon av liv. Virus er helt avhengige av levende celler for å«leve», men de påvirker livets utvikling enormt gjennom evolusjon og sykdom.`,
    },
    {
      id: 'bio1-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Droeft om virus boer regnes som levende organismer. Gi minst to argumenter for og to mot.',
        hints: ['Tenk påkjennetegn påliv: metabolisme, formering, celler, evolusjon.'],
        solution: 'For: 1) Virus har arvemateriale (DNA eller RNA) og kan evolve gjennom mutasjoner og naturlig utvalg. 2) De kan tilpasse seg nye verter og utvikle resistens mot medisiner, noe som viser evolusjonsevne. Mot: 1) Virus har ikke egen metabolisme – de kan ikke produsere energi eller utføre kjemiske reaksjoner påegen haand. 2) De kan ikke formere seg uten åbruke en vertscelles maskineri – alene er de inaktive partikler. Konklusjon: Virus har noen, men ikke alle, kjennetegnene påliv. De fleste biologer klassifiserer dem som ikke-levende biologiske enheter som befinner seg i et grenseland mellom det levende og det ikke-levende.',
      },
    },
    {
      id: 'bio1-6-3-summary',
      type: 'text',
      content: `## Oppsummering

- Virus består av arvemateriale (DNA eller RNA) omgitt av et proteinskall (kapsid), noen har også lipidkappe
- Virus har ikke egen metabolisme og kan bare formere seg inne i vertsceller
- Lytisk syklus: viruset overtar cellen, lager nye virus og sprenger cellen
- Lysogen syklus: virusets DNA integreres i vertens kromosom og forblir latent
- Viktige virussykdommer: influensa, COVID-19, HIV/AIDS og HPV
- Kappekledde virus (influensa, SARS-CoV-2) ødelegges av saape – nakne virus er mer motstandsdyktige
- Virus regnes vanligvis ikke som levende organismer fordi de mangler metabolisme og celler`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en sammenligning av bakterier og virus i tabellform. Inkluder følgende punkter: størrelse, celletype, arvemateriale, formering, metabolisme og behandling.',
        hints: ['Husk at antibiotika ikke virker mot virus.'],
        solution: 'Bakterier: 0,5–5 μm, prokaryot celle, DNA (sirkulært), binær fisjon, egen metabolisme, behandles med antibiotika. Virus: 20–300 nm, ingen celle, DNA eller RNA, krever vertscelle (lytisk/lysogen syklus), ingen metabolisme, behandles med antivirale midler (antibiotika virker IKKE). Viktigste forskjeller: Virus er mye mindre, har ingen celler og ingen metabolisme, og kan ikke formere seg uten vertscelle. Derfor virker antibiotika bare mot bakterier.',
      },
    },
    {
      id: 'bio1-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'HIV angriper T-hjelpeceller (CD4+) i immunsystemet. Forklar hvorfor dette gjør HIV særlig farlig, og hvorfor ubehandlet HIV til slutt fører til AIDS.',
        hints: ['Tenk påhva T-hjelpeceller gjør i immunforsvaret – hva skjer nårde forsvinner?'],
        solution: 'T-hjelpeceller (CD4+) er sentrale i immunforsvaret. De koordinerer immunresponsen ved åaktivere B-celler (antistoffproduksjon), cytotoksiske T-celler (dreper infiserte celler) og makrofager. NårHIV infiserer og dreper T-hjelpeceller, svekkes hele immunforsvaret gradvis. Nar antallet T-hjelpeceller faller under et kritisk nivå (under ca. 200 per μL blod), har pasienten AIDS. Immunsystemet er da så svekket at kroppen ikke kan bekjempe infeksjoner som friske mennesker lett klarer (opportunistiske infeksjoner). Pasienten dør altså ikke av HIV direkte, men av andre infeksjoner og kreftsykdommer som immunsystemet ikke lenger kan holde i sjakk.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kapsid', definition: 'Proteinskallet som omgir virusets arvemateriale' },
    { term: 'Kappe (konvolutt)', definition: 'Lipidmembran rundt noen virus, hentet fra vertscellen' },
    { term: 'Lytisk syklus', definition: 'Virusvermering som ender med at vertscellen sprekker' },
    { term: 'Lysogen syklus', definition: 'Virusets DNA integreres i vertens kromosom og forblir latent' },
    { term: 'Profag', definition: 'Virusets DNA nårdet er integrert i vertscellens kromosom' },
    { term: 'Obligat intracellulae parasitt', definition: 'Organisme som kun kan formere seg inne i en vertscelle' },
  ],
};

// ============================================================================
// Kapittel 6.4: Antibiotika – virkemate og bruk
// ============================================================================

export const CHAPTER_BIOLOGI_1_6_4: TextbookChapter = {
  id: 'biologi-1-6-4',
  courseId: 'biologi-1',
  chapterNumber: '6.4',
  title: 'Antibiotika – virkemate og bruk',
  description: 'Historien om antibiotika, ulike virkemater, bredspektret vs. smalspektret antibiotika, og riktig antibiotikabruk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for hva antibiotika er og hvordan det virker',
    'forklare ulike virkemater for antibiotika',
    'beskrive forskjellen mellom bredspektret og smalspektret antibiotika',
    'argumentere for riktig bruk av antibiotika',
  ],
  content: [
    {
      id: 'bio1-6-4-intro',
      type: 'text',
      content: `# Antibiotika – virkemate og bruk

Antibiotika er blant de viktigste medisinske oppdagelsene i historien. Førantibiotika var selv en enkel saarinfeksjon potensielt dødelig. I dag kan vi behandle de fleste bakterielle infeksjoner effektivt – men denne evnen er truet av antibiotikaresistens.

I dette kapittelet lærer du om hvordan antibiotika ble oppdaget, hvordan ulike typer antibiotika virker, og hvorfor det er så viktig åbruke antibiotika riktig.

## En revolusjon i medisin

Førantibiotika ble tatt i bruk på1940-tallet, var bakterielle infeksjoner den vanligste doedsårsaken. Lungebetennelse, tuberkulose, blodforgiftning og saarinfeksjoner tok millioner av liv hvert aar. Oppdagelsen av antibiotika forandret dette fullstendig.`,
    },
    {
      id: 'bio1-6-4-def-1',
      type: 'definition',
      title: 'Antibiotika',
      content: 'Antibiotika er legemidler som dreper bakterier (baktericide) eller hemmer bakterievekst (bakteriostatiske). Antibiotika virker ved åangripe strukturer eller prosesser som er spesifikke for bakterier, slik at kroppens egne celler ikke skades. Antibiotika virker IKKE mot virus.',
    },
    {
      id: 'bio1-6-4-historie',
      type: 'text',
      content: `## Historien om antibiotika

### Alexander Flemings oppdagelse (1928)

Den skotske bakteriologen Alexander Fleming gjorde en av medisinhistoriens viktigste oppdagelser – delvis ved en tilfeldighet.

**Hva skjedde:**
1. Fleming dro påferie og glemte årydde bort noen bakteriekulturer (stafylokokker)
2. Da han kom tilbake, oppdaget han at en muggsopp (*Penicillium notatum*) hadde forurenset en av skålene
3. Rundt muggsoppen var det en sone der bakteriene ikke vokste
4. Fleming innså at muggsoppen produserte et stoff som drepte bakterier
5. Han kalte stoffet **penicillin**

### Fra oppdagelse til medisin

Det tok over ti aar førpenicillin ble tilgjengelig som medisin:
- **1928**: Fleming oppdager penicillin
- **1940**: Howard Florey og Ernst Boris Chain renser og konsentrerer penicillin
- **1941**: Foerste kliniske forsøk påmennesker
- **1943**: Masseproduksjon starter – brukt påslagmarkene i andre verdenskrig
- **1945**: Fleming, Florey og Chain fårNobelprisen i medisin

### Penicillinets «gullalper»

Etter krigen ble mange nye typer antibiotika oppdaget. Perioden 1940–1960 kalles antibiotikaalderens «gullalder». Sykdommer som førvar dødelige, kunne nå behandles enkelt.`,
    },
    {
      id: 'bio1-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Flemings tilfeldige oppdagelse',
      content: `Flemings oppdagelse illustrerer at tilfeldigheter kan spille en rolle i vitenskap, men at det ogsåa kreves et forberedt sinn for ågjenkjenne viktigheten av det man observerer.

**Fleming sa selv:** *«One sometimes finds what one is not looking for.»*

Mange førham hadde trolig sett lignende muggsoppvekst påbakteriekulturer, men ingen hadde stoppet opp og undersøekt fenomenet nærmere. Fleming hadde bakgrunnen og nysgjerrigheten til åforstaa at dette kunne være medisinsk viktig.

**Laerdom:** Vitenskap handler ikke bare om planlagte eksperimenter, men også om åvære oppmerksom påuventede observasjoner og forfølge dem videre.`,
    },
    {
      id: 'bio1-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva oppdaget Alexander Fleming i 1928?',
        options: [
          { id: 'a', text: 'At en muggsopp (Penicillium) produserte et stoff som drepte bakterier', isCorrect: true },
          { id: 'b', text: 'At virus kan bruke bakterier som vertsceller', isCorrect: false },
          { id: 'c', text: 'At bakterier kan overføre gener seg imellom', isCorrect: false },
          { id: 'd', text: 'At immunsystemet produserer antistoffer mot bakterier', isCorrect: false },
        ],
        solution: 'Fleming oppdaget at muggsoppen Penicillium notatum produserte et stoff som hemmet veksten av stafylokokk-bakterier. Han kalte stoffet penicillin. Dette ble utgangspunktet for det foerste antibiotikumet, men det tok over ti aar førFlorey og Chain klarte årense og masseprodusere penicillin til klinisk bruk.',
      },
    },
    {
      id: 'bio1-6-4-virkemater',
      type: 'text',
      content: `## Hvordan virker antibiotika?

Antibiotika utnytter forskjeller mellom bakterieceller og menneskeceller. De angriper strukturer eller prosesser som finnes i bakterier, men ikke i vare celler. Dette kalles **selektiv toksisitet**.

### Hovedtyper av virkemater

**1. Hemmer celleveggsyntese**
- Eksempel: Penicilliner, cefalosporiner
- Hindrer bakterien i åbygge opp celleveggen (peptidoglykan)
- Bakterien sprekker pågrunn av osmotisk trykk
- Menneskeceller har ikke cellevegg og påvirkes ikke

**2. Hemmer proteinsyntese**
- Eksempel: Tetracyklin, erytromycin, gentamicin
- Binder til bakterielle ribosomer (70S) og stopper proteinproduksjonen
- Menneskelige ribosomer (80S) påvirkes ikke

**3. Hemmer DNA-replikasjon eller -reparasjon**
- Eksempel: Fluorokinoloner (ciprofloksacin)
- Blokkerer enzymer som er nødvendige for åkopiere eller reparere bakteriens DNA

**4. Hemmer folsyresyntese**
- Eksempel: Sulfonamider, trimetoprim
- Bakterier målage sin egen folsyre (vitamin B9), mens mennesker fårdet gjennom kosten
- Uten folsyre kan ikke bakterien lage DNA

**5. Oedelegger cellemembranens funksjon**
- Eksempel: Polymyksiner
- Forstyrrer bakteriens plasmamembran så den lekker`,
    },
    {
      id: 'bio1-6-4-def-2',
      type: 'definition',
      title: 'Selektiv toksisitet',
      content: 'Selektiv toksisitet betyr at et legemiddel (som antibiotika) skader maalorganismen (bakterien) uten åskade verten (mennesket). Dette er mulig fordi bakterier har strukturer og prosesser som er forskjellige fra menneskecellene – for eksempel cellevegg (peptidoglykan) og 70S-ribosomer. Jo større forskjellen er mellom bakterie- og menneskecelle, jo bedre selektiv toksisitet.',
    },
    {
      id: 'bio1-6-4-example-2',
      type: 'example',
      title: 'Eksempel: Hvorfor virker penicillin?',
      problem: 'Forklar trinn for trinn hvorfor penicillin dreper bakterier, men ikke skader menneskeceller.',
      solution: `**Svar:**

**Penicillinets virkemate:**
1. Penicillin binder til enzymet **transpeptidase** (også kalt penicillinbindende protein, PBP)
2. Transpeptidase er ansvarlig for åtverrbinde peptidoglykantrader i celleveggen
3. Nårtranspeptidase blokkeres, kan bakterien ikke bygge ny cellevegg
4. Bakterien fortsetter åvokse, men celleveggen svekkes
5. Osmotisk trykk fårvannet til åstroemme inn i cellen
6. Uten en sterk cellevegg svulmer cellen opp og sprekker (**lysis**)

**Hvorfor skades ikke menneskeceller?**
Menneskeceller har **ingen cellevegg** og dermed heller ingen peptidoglykan eller transpeptidase. Penicillin har ingen virkning påmenneskeceller – dette er et godt eksempel påselektiv toksisitet.`,
    },
    {
      id: 'bio1-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvorfor virker ikke antibiotika mot virus?',
        options: [
          { id: 'a', text: 'Fordi virus mangler de strukturene antibiotika angriper (cellevegg, ribosomer, DNA-replikasjonsenzymer)', isCorrect: true },
          { id: 'b', text: 'Fordi virus er for småtil at antibiotika kan nå dem', isCorrect: false },
          { id: 'c', text: 'Fordi virus har allerede utviklet resistens mot alle antibiotika', isCorrect: false },
          { id: 'd', text: 'Fordi antibiotika bare virker i blodet, og virus befinner seg i cellene', isCorrect: false },
        ],
        solution: 'Antibiotika angriper spesifikke strukturer i bakterier: cellevegg (peptidoglykan), 70S-ribosomer, bakterielle enzymer osv. Virus har INGEN av disse strukturene – de har verken cellevegg, ribosomer eller egen metabolisme. Derfor har antibiotika ingenting åangripe i et virus. Mot virusinfeksjoner brukes i stedet antivirale legemidler som angriper virusets egne prosesser (f.eks. replikasjon av virus-DNA/RNA).',
      },
    },
    {
      id: 'bio1-6-4-spekter',
      type: 'text',
      content: `## Bredspektret og smalspektret antibiotika

### Smalspektret antibiotika
- Virker mot et **begrenset utvalg** av bakteriearter
- Eksempel: Penicillin G (hovedsakelig mot gram-positive)
- **Fordel**: Skaaner normalfloraen, mindre risiko for resistensutvikling
- **Ulempe**: Krever at legen vet hvilken bakterie som forårsaker infeksjonen

### Bredspektret antibiotika
- Virker mot **mange forskjellige** bakteriearter (bådegram-positive og gram-negative)
- Eksempel: Amoksicillin, tetracyklin, ciprofloksacin
- **Fordel**: Kan brukes nårman ikke vet noyaktig hvilken bakterie det er
- **Ulempe**: Dreper også mye av normalfloraen, større risiko for resistensutvikling

### Riktig bruk av antibiotika

For åbevare antibiotikaenes effekt er det viktig åfølge disse reglene:

1. **Bruk antibiotika bare nårlegen foreskriver det** – ikke for virusinfeksjoner
2. **Fullfloer hele kuren** – selv om du foeler deg frisk etter noen dager
3. **Ikke del antibiotika med andre** – dosen er tilpasset deg
4. **Ikke bruk antibiotika «i reserve»** fra tidligere behandlinger
5. **Ikke krev antibiotika for forkjoelelse eller influensa** – dette er virusinfeksjoner`,
    },
    {
      id: 'bio1-6-4-def-3',
      type: 'definition',
      title: 'Bredspektret antibiotika',
      content: 'Bredspektret antibiotika er legemidler som virker mot mange ulike bakteriearter, bådegram-positive og gram-negative. De brukes nårman ikke vet noyaktig hvilken bakterie som forårsaker infeksjonen. Ulempen er at de også dreper normalflorabakterier og bidrar til oeekt risiko for antibiotikaresistens. Smalspektret antibiotika virker mot faerre arter og er åforetrekke nårbakterien er identifisert.',
    },
    {
      id: 'bio1-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom bredspektret og smalspektret antibiotika. Nårer det mest hensiktsmessig åbruke smalspektret antibiotika?',
        hints: ['Tenk påfordeler og ulemper for bådepasienten og for antibiotikaresistens.'],
        solution: 'Bredspektret antibiotika virker mot mange ulike bakteriearter (bådegram-positive og gram-negative), mens smalspektret antibiotika virker mot et begrenset utvalg. Smalspektret antibiotika er mest hensiktsmessig nårlegen har identifisert hvilken bakterie som forårsaker infeksjonen (f.eks. ved hjelp av dyrking og resistensbestemmelse). Fordelen med smalspektret antibiotika er at det skaaner normalfloraen (ferre bivirkninger som diaré) og reduserer risikoen for resistensutvikling. Bredspektret brukes nårman ennaa ikke vet hvilken bakterie det er, eller nårinfeksjonen er alvorlig og man måstarte behandling raskt.',
      },
    },
    {
      id: 'bio1-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'En pasient med forkjoelelse ber legen om antibiotika. Forklar hvorfor legen boer si nei, og hva pasienten heller boer gjøre.',
        hints: ['Hva forårsaker forkjoelelse – bakterier eller virus?'],
        solution: 'Legen boer si nei fordi forkjoelelse forårsakes av virus (rhinovirus, koronavirus o.a.), og antibiotika virker bare mot bakterier. Aa ta antibiotika mot virusinfeksjon har ingen effekt påsykdommen, men kan gi bivirkninger (som diaré og soppinfeksjon) og bidra til antibiotikaresistens. Pasienten boer i stedet hvile, drikke nok vaeske, og eventuelt bruke smertestillende/febernedsettende midler (paracetamol/ibuprofen). Forkjoelelse gårover av seg selv i loepet av 1–2 uker.',
      },
    },
    {
      id: 'bio1-6-4-summary',
      type: 'text',
      content: `## Oppsummering

- Antibiotika er legemidler som dreper bakterier eller hemmer bakterievekst
- Alexander Fleming oppdaget penicillin i 1928 – Florey og Chain utviklet det til medisin
- Antibiotika utnytter selektiv toksisitet: angriper bakterielle strukturer som ikke finnes i menneskeceller
- Hovedvirkemater: hemmer celleveggsyntese, proteinsyntese, DNA-replikasjon, folsyresyntese
- Antibiotika virker IKKE mot virus
- Smalspektret antibiotika skaaner normalfloraen og gir mindre resistens
- Bredspektret antibiotika virker mot mange arter men dreper også normalfloraen
- Riktig bruk: bare ved bakteriell infeksjon, fullfloer kuren, ikke del med andre`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilken virkemate har penicillin?',
        options: [
          { id: 'a', text: 'Hemmer celleveggsyntese (peptidoglykan) slik at bakterien sprekker', isCorrect: true },
          { id: 'b', text: 'Oedelegger bakteriens DNA direkte', isCorrect: false },
          { id: 'c', text: 'Hemmer bakteriens ribosomer så proteinsyntesen stopper', isCorrect: false },
          { id: 'd', text: 'Hindrer bakterien i åta opp næring', isCorrect: false },
        ],
        solution: 'Penicillin hemmer celleveggsyntesen ved åbinde til enzymet transpeptidase (PBP), som er ansvarlig for åtverrbinde peptidoglykantrader. Uten en intakt cellevegg kan bakterien ikke motstaa det osmotiske trykket, og den svulmer opp og sprekker (lysis). Menneskeceller har ingen cellevegg, så penicillin er ufarlig for oss.',
      },
    },
    {
      id: 'bio1-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Droeft paastaanden: «Det er ikke farlig åslutte med antibiotikakuren nårman foeler seg frisk.» Forklar hvorfor det er viktig åfullfloere hele kuren.',
        hints: ['Tenk påhva som skjer med bakteriene som ennaa er igjen nårman slutter for tidlig.'],
        solution: 'Paastaanden er feil og kan være farlig. Nårman foeler seg frisk, betyr det at immunsystemet og antibiotika har redusert bakteriemengden kraftig, men det kan fortsatt være bakterier igjen. Hvis man slutter for tidlig, kan de gjenværende bakteriene – som kanskje er de mest motstandsdyktige – overleve, formere seg og forårsake ny infeksjon. I tillegg øker risikoen for resistensutvikling: de bakteriene som overlevde den ufullstendige behandlingen, kan være delvis resistente. Ved åfullfloere kuren sikrer man at alle bakteriene drepes, noe som reduserer båderisiko for tilbakefall og for resistensutvikling.',
      },
    },
    {
      id: 'bio1-6-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'Lag en oversikt over fire ulike virkemater for antibiotika. For hver virkemate, nevn maalet i bakterien og gi ett eksempel pået antibiotikum.',
        hints: ['De fire vanligste: celleveggsyntese, proteinsyntese, DNA-replikasjon og folsyresyntese.'],
        solution: '1) Hemmer celleveggsyntese – maal: transpeptidase/peptidoglykan – eksempel: penicillin. 2) Hemmer proteinsyntese – maal: 70S-ribosomer – eksempel: tetracyklin. 3) Hemmer DNA-replikasjon – maal: DNA-gyrase – eksempel: ciprofloksacin (fluorokinolon). 4) Hemmer folsyresyntese – maal: enzymer for folsyreproduksjon – eksempel: trimetoprim. Alle disse virker fordi de angriper strukturer/prosesser som er forskjellige fra de tilsvarende i menneskeceller (selektiv toksisitet).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Antibiotika', definition: 'Legemidler som dreper eller hemmer vekst av bakterier' },
    { term: 'Selektiv toksisitet', definition: 'At et legemiddel skader bakterier uten åskade menneskeceller' },
    { term: 'Penicillin', definition: 'Det foerste antibiotikumet, oppdaget av Fleming i 1928' },
    { term: 'Baktericid', definition: 'Antibiotikum som dreper bakterier' },
    { term: 'Bakteriostatisk', definition: 'Antibiotikum som hemmer bakterievekst uten ådrepe dem' },
    { term: 'Bredspektret', definition: 'Antibiotika som virker mot mange ulike bakteriearter' },
    { term: 'Smalspektret', definition: 'Antibiotika som virker mot få, spesifikke bakteriearter' },
  ],
};

// ============================================================================
// Kapittel 6.5: Antibiotikaresistens – årsaker, konsekvenser og tiltak
// ============================================================================

export const CHAPTER_BIOLOGI_1_6_5: TextbookChapter = {
  id: 'biologi-1-6-5',
  courseId: 'biologi-1',
  chapterNumber: '6.5',
  title: 'Antibiotikaresistens – årsaker, konsekvenser og tiltak',
  description: 'Mekanismer bak antibiotikaresistens, MRSA, horisontal genoverføring, og globale og norske tiltak mot resistens.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for hva antibiotikaresistens er og hvordan det oppstår',
    'forklare mekanismene for horisontal genoverføring hos bakterier',
    'beskrive konsekvensene av antibiotikaresistens for folkehelsen',
    'drofte globale og norske tiltak mot antibiotikaresistens',
  ],
  content: [
    {
      id: 'bio1-6-5-intro',
      type: 'text',
      content: `# Antibiotikaresistens – årsaker, konsekvenser og tiltak

Antibiotikaresistens regnes av Verdens helseorganisasjon (WHO) som en av de stoerste truslene mot global folkehelse. Bakterier som er resistente mot antibiotika, kan ikke behandles påvanlig måte, og infeksjoner som vi i dag behandler enkelt, kan igjen bli dødelige.

I dette kapittelet lærer du om hvordan resistens oppstår, hvordan bakterier sprer resistensgener, og hva vi kan gjøre for åbremse utviklingen.

## Problemets omfang

- I 2019 døde anslagsvis **1,27 millioner mennesker** direkte av infeksjoner med antibiotikaresistente bakterier globalt
- Uten tiltak kan antibiotikaresistens forårsake **10 millioner doedsfall per aar** innen 2050
- Utviklingen av nye antibiotika har naesten stoppet opp – det er for lite loennsomt for legemiddelselskapene`,
    },
    {
      id: 'bio1-6-5-def-1',
      type: 'definition',
      title: 'Antibiotikaresistens',
      content: 'Antibiotikaresistens betyr at bakterier har utviklet evnen til åoverleve i naeværet av antibiotika som normalt ville drept dem eller hemmet veksten deres. Resistens oppstår gjennom genetiske endringer (mutasjoner) eller ved at bakterier mottar resistensgener fra andre bakterier (horisontal genoverføring). Resistens er et naturlig biologisk fenomen som akselereres kraftig av overforbruk og feilbruk av antibiotika.',
    },
    {
      id: 'bio1-6-5-evolusjon',
      type: 'text',
      content: `## Hvordan oppstår antibiotikaresistens?

Antibiotikaresistens er et eksempel på**naturlig utvalg** (evolusjon) i praksis:

### Trinn for trinn

1. **Variasjon**: I en bakteriepopulasjon finnes det naturlig variasjon. Noen fåbakterier kan ha mutasjoner som gir dem en viss motstandsdyktighet mot antibiotika.

2. **Seleksjon**: Nårantibiotika tilføres, drepes de fleste bakteriene. Men de fåsom har resistensmutasjoner, overlever.

3. **Formering**: De overlevende resistente bakteriene har nå lite konkurranse og rikelig med næringsstoffer. De formerer seg raskt.

4. **Dominans**: Etter kort tid består hele populasjonen av resistente bakterier.

### Viktig: Antibiotika skaper ikke resistens

Et vanlig missforstaaelse er at antibiotika «forårsaker» resistens. I virkeligheten **selekterer** antibiotika for allerede eksisterende resistente varianter. Resistensmutasjoner oppstår tilfeldig og uavhengig av antibiotika. Men antibiotika gir de resistente bakteriene en enorm fordel, slik at de overtar populasjonen.`,
    },
    {
      id: 'bio1-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Naturlig utvalg og antibiotikaresistens',
      content: `**Tenk deg en bakteriepopulasjon:**

- 1 000 000 bakterier i en infeksjon
- 999 990 er foelsome for antibiotika (blaa)
- 10 har en tilfeldig mutasjon som gir resistens (roede)

**Førantibiotika:**
De 10 resistente bakteriene har ingen fordel – de vokser like raskt som de andre.

**Under antibiotika-behandling:**
- 999 990 foelsome bakterier dreper → pasienten foeler seg bedre
- 10 resistente bakterier overlever og begynner åformere seg

**Etter ufullstendig behandling:**
- De 10 resistente bakteriene formerer seg eksponentielt
- Etter noen dager: millioner av resistente bakterier
- Samme antibiotikum virker ikke lenger

**Laerdom:** Det er viktig åfullfloere antibiotikakaur for ådrepe ALLE bakterier, inkludert de fåsom er delvis resistente.`,
    },
    {
      id: 'bio1-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er riktig om hvordan antibiotikaresistens oppstår?',
        options: [
          { id: 'a', text: 'Resistensmutasjoner oppstår tilfeldig, og antibiotika selekterer for de resistente bakteriene', isCorrect: true },
          { id: 'b', text: 'Antibiotika forårsaker mutasjoner i bakterienes DNA som gjør dem resistente', isCorrect: false },
          { id: 'c', text: 'Bakterier lærer åmotstaa antibiotika etter gjentatt eksponering', isCorrect: false },
          { id: 'd', text: 'Resistens oppstår bare i sykehus og aldri i naturen', isCorrect: false },
        ],
        solution: 'Resistensmutasjoner oppstår tilfeldig og uavhengig av antibiotika – de finnes i populasjonen førbehandling starter. Nårantibiotika tilføres, drepes de foelsome bakteriene, men de resistente overlever og formerer seg. Dette er naturlig utvalg (evolusjon) i aksjon. Antibiotika «skaper» altså ikke resistens, men selekterer for resistente varianter.',
      },
    },
    {
      id: 'bio1-6-5-mekanismer',
      type: 'text',
      content: `## Resistensmekanismer

Bakterier kan være resistente mot antibiotika påflere måter:

### 1. Enzymatisk nedbrytning
Bakterien produserer enzymer som bryter ned antibiotikumet. Eksempel: **beta-laktamaser** klipper opp penicillinets kjemiske struktur slik at det ikke virker.

### 2. Endret maalmolekyl
Bakterien endrer proteinet som antibiotikumet normalt binder til, slik at antibiotikumet ikke lenger fester seg. Eksempel: Endret transpeptidase (PBP) hos MRSA.

### 3. Utpumping (efflukspumper)
Bakterien har proteiner i cellemembranen som aktivt pumper antibiotikumet ut av cellen førdet rekker åvirke.

### 4. Redusert opptak
Bakterien endrer poriner (proteinkanaler) i den ytre membranen slik at antibiotikumet ikke kommer inn.

### 5. Alternativ metabolsk vei
Bakterien utvikler en alternativ biokjemisk vei som omgår det steget antibiotikumet blokkerer.`,
    },
    {
      id: 'bio1-6-5-def-2',
      type: 'definition',
      title: 'Horisontal genoverføring',
      content: 'Horisontal genoverføring er overføring av genetisk materiale mellom bakterier som ikke er forelder og avkom. I motsetning til vertikal genoverføring (fra mor til datter ved celledeling), kan horisontal genoverføring spree gener – inkludert resistensgener – mellom ubeslektede bakteriearter. De tre hovedmekanismene er konjugasjon, transformasjon og transduksjon.',
    },
    {
      id: 'bio1-6-5-horisontal',
      type: 'text',
      content: `## Horisontal genoverføring – slik sprer resistens seg

Det som gjør antibiotikaresistens særlig farlig, er at resistensgener kan spres mellom bakterier – også mellom helt ulike arter. Dette skjer gjennom tre hovedmekanismer:

### 1. Konjugasjon («bakteriell sex»)
- To bakterier kobles sammen gjennom en **pilus** (sexpilus)
- Et **plasmid** med resistensgener kopieres og overføres til mottakerbakterien
- Svært effektiv spredning – kan skje mellom ulike arter
- Viktigste mekanisme for spredning av resistensgener

### 2. Transformasjon (opptak av fritt DNA)
- En bakterie tar opp fritt DNA fra miljøet (fra døde bakterier)
- Hvis DNA-et inneholder resistensgener, kan bakterien bli resistent
- Skjer naturlig hos noen bakteriearter

### 3. Transduksjon (virusmidlet overføring)
- En **bakteriofag** (bakterievirus) infiserer en bakterie
- Ved et uhell pakkes bakteriens DNA (inkl. resistensgener) inn i nye viruspartikler
- Nårdisse virusene infiserer en ny bakterie, overføres resistensgenene
- Kan spree resistens mellom ubeslektede bakterier`,
    },
    {
      id: 'bio1-6-5-example-2',
      type: 'example',
      title: 'Eksempel: Konjugasjon – plasmidoverføring mellom bakterier',
      problem: 'Forklar hvordan et resistensgen kan spree seg fra en resistent E. coli-bakterie til en foelsom Salmonella-bakterie.',
      solution: `**Svar:**

1. En **E. coli**-bakterie har et **plasmid** som baerer et gen for antibiotikaresistens (f.eks. et gen for beta-laktamase)
2. E. coli danner en **sexpilus** som fester seg til en naevarende **Salmonella**-bakterie
3. Gjennom pilus dannes en **konjugasjonskanal** mellom de to cellene
4. Plasmidet kopieres og en kopi overføres til Salmonella-cellen
5. Salmonella har nå resistensgenet og kan produsere beta-laktamase
6. Salmonella er nå **resistent mot penicillin**

**Viktig:** Dette viser at resistens ikke bare spres ved celledeling (vertikalt), men også mellom helt ulike bakteriearter (horisontalt). Eén resistent bakterie kan gjøre mange andre arter resistente.`,
    },
    {
      id: 'bio1-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er konjugasjon hos bakterier?',
        options: [
          { id: 'a', text: 'Overfoering av plasmid-DNA mellom to bakterier gjennom en sexpilus', isCorrect: true },
          { id: 'b', text: 'Opptak av fritt DNA fra miljøet', isCorrect: false },
          { id: 'c', text: 'Overfoering av DNA via bakteriofager', isCorrect: false },
          { id: 'd', text: 'Binær fisjon der en bakterie deler seg i to', isCorrect: false },
        ],
        solution: 'Konjugasjon er overføring av genetisk materiale (vanligvis et plasmid) fra en donorbakterie til en mottakerbakterie gjennom en sexpilus. Dette er den viktigste mekanismen for horisontal spredning av resistensgener. Alternativ b (transformasjon) er opptak av fritt DNA fra miljøet, og alternativ c (transduksjon) er DNA-overføring via bakteriofager.',
      },
    },
    {
      id: 'bio1-6-5-mrsa',
      type: 'text',
      content: `## MRSA og andre resistente bakterier

### MRSA – meticillinresistent Staphylococcus aureus

MRSA er kanskje den mest kjente resistente bakterien:

- *Staphylococcus aureus* er en vanlig bakterie som finnes påhuden hos ca. 30 % av befolkningen
- MRSA har ervervet genet **mecA**, som koder for et endret penicillinbindende protein (PBP2a)
- PBP2a binder ikke penicillin eller andre beta-laktam-antibiotika
- Dermed er MRSA resistent mot nesten alle penicilliner og cefalosporiner
- MRSA-infeksjoner måbehandles med andre (ofte dyrere og mer toksiske) antibiotika

### Andre resistente bakterier

- **VRE** (vankomycinresistente enterokokker) – resistent mot «siste utvei»-antibiotikumet vankomycin
- **ESBL-produserende bakterier** – gram-negative bakterier med enzymer som bryter ned bredspektrede antibiotika
- **Multiresistent tuberkulose (MDR-TB)** – resistent mot de to viktigste tuberkulosemedisinene
- **Karbapenemresistente Enterobacterales (CRE)** – resistente mot karbapenemer, som er blant de sterkeste antibiotika vi har

### «Superbakterier»

Bakterier som er resistente mot nær sagt alle tilgjengelige antibiotika, kalles noen ganger «superbakterier». I verste fall finnes det ingen effektiv behandling, og vi er tilbake til tilstander som førantibiotikas tid.`,
    },
    {
      id: 'bio1-6-5-def-3',
      type: 'definition',
      title: 'MRSA',
      content: 'MRSA (meticillinresistent Staphylococcus aureus) er en variant av den vanlige hudbakterien S. aureus som er resistent mot beta-laktam-antibiotika (penicilliner og cefalosporiner). Resistensen skyldes genet mecA, som koder for et endret penicillinbindende protein. MRSA er et alvorlig problem påsykehus og sykehjem, der sårbare pasienter kan fåvanskelig behandlbare infeksjoner.',
    },
    {
      id: 'bio1-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor MRSA er vanskelig åbehandle, og beskriv mekanismen som gjør bakterien resistent mot penicilliner.',
        hints: ['Stikkord: mecA-genet, endret penicillinbindende protein (PBP2a), beta-laktam.'],
        solution: 'MRSA har ervervet genet mecA som koder for et endret penicillinbindende protein kalt PBP2a. Normalt binder penicillin til PBP (transpeptidase) og blokkerer celleveggsyntesen. Men PBP2a har en annerledes form slik at penicillin ikke kan binde seg til det. Dermed kan MRSA bygge cellevegg selv i naeværet av penicillin og andre beta-laktam-antibiotika. Dette gjør MRSA resistent mot en hel klasse antibiotika (penicilliner og cefalosporiner) som normalt er foerstevalgbehandling for stafylokokkinfeksjoner. Behandling måi stedet bruke dyrere og mer toksiske alternativer som vankomycin.',
      },
    },
    {
      id: 'bio1-6-5-tiltak',
      type: 'text',
      content: `## Globale og norske tiltak mot antibiotikaresistens

### One Health – en samlet tilnærming

Antibiotikaresistens er et problem som krysser grenser mellom mennesker, dyr og miljø. **One Health**-tilnærmingen anerkjenner at:

- Resistente bakterier kan spree seg mellom mennesker og dyr
- Antibiotikabruk i landbruket bidrar til resistensutvikling
- Resistensgener finnes i miljøet (jord, vann)
- Effektive tiltak måadressere alle tre omraadene samtidig

### Globale tiltak
1. **Redusere unødvendig antibiotikabruk** – bådehos mennesker og i landbruket
2. **Bedre diagnostikk** – raskere identifisering av bakterier slik at smalspektret antibiotika kan brukes
3. **Forskning pånye antibiotika** – oekonomiske insentiver for legemiddelselskaper
4. **Vaksineutvikling** – forebygge infeksjoner så antibiotika ikke trengs
5. **Bedre hygiene og smittevern** – hindre spredning av resistente bakterier

### Norges strategi

Norge har et av verdens laveste forbruk av antibiotika og relativt lite resistens sammenlignet med mange andre land. Norske tiltak inkluderer:

- **Nasjonal strategi mot antibiotikaresistens (2015–2020, forlenget)** – maal om 30 % reduksjon i antibiotikabruk
- **NORM/NORM-VET** – overvåkingsprogrammer for resistens hos mennesker og dyr
- **Restriktiv forskrivning** – leger oppfordres til åbruke smalspektret antibiotika
- **Forbud mot vekstfremmende antibiotika** i husdyrproduksjon (Norge var tidlig ute)
- **Smitteverntiltak påsykehus** – screening for MRSA, isolering av baerera

### Hvorfor Norge lykkes bedre

- Lav befolkningstetthet
- Godt utbygd helsevesen med god tilgang til diagnostikk
- Tradisjon for restriktiv antibiotikaforskrivning
- Strengt regulert landbruk med lavt antibiotikaforbruk
- Høy tillit til helsemyndighetenes raad`,
    },
    {
      id: 'bio1-6-5-example-3',
      type: 'example',
      title: 'Eksempel: Antibiotikabruk i landbruket – et globalt problem',
      content: `I mange land brukes antibiotika i enorme mengder i husdyrproduksjon – ikke bare for åbehandle syke dyr, men også som **vekstfremmere** (for åfå dyrene til åvokse raskere).

**Stoerrelsen påproblemet:**
- Globalt gårca. **73 % av all antibiotika** til husdyr, ikke til mennesker
- I noen land tilsettes antibiotika rutinemessig i foerikr
- Resistente bakterier fra dyr kan overføres til mennesker gjennom mat, direkte kontakt eller miljøet

**Norsk tilnærming:**
- Norge forboed vekstfremmende antibiotika i 1995
- Norske bonder bruker ca. 90 % mindre antibiotika enn mange europeiske land
- Likevel: gjennom importert mat og reisevirksomhet kan resistente bakterier komme til Norge

**Laerdom:** Kampen mot antibiotikaresistens er global – det hjelper lite om Norge er flinke dersom andre land fortsetter med hørt forbruk.`,
    },
    {
      id: 'bio1-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er One Health-tilnærmingen til antibiotikaresistens?',
        options: [
          { id: 'a', text: 'En tilnærming som ser påsammenhengen mellom helse hos mennesker, dyr og miljø', isCorrect: true },
          { id: 'b', text: 'Et nytt antibiotikum som virker mot alle typer bakterier', isCorrect: false },
          { id: 'c', text: 'En vaksine som beskytter mot alle resistente bakterier', isCorrect: false },
          { id: 'd', text: 'En metode for åteste antibiotikaresistens i laboratoriet', isCorrect: false },
        ],
        solution: 'One Health er en tilnærming som anerkjenner at helsen til mennesker, dyr og miljø henger sammen. For antibiotikaresistens betyr dette at tiltak mårettes mot alle tre omraadene: redusere antibiotikabruk bådehos mennesker og i landbruket, overvake resistens i miljøet, og hindre spredning av resistente bakterier mellom mennesker, dyr og miljø.',
      },
    },
    {
      id: 'bio1-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar de tre mekanismene for horisontal genoverføring (konjugasjon, transformasjon og transduksjon) og beskriv hvorfor horisontal genoverføring er særlig farlig for spredning av antibiotikaresistens.',
        hints: ['Tenk påhvordan horisontal overføring skiller seg fra vanlig arv (vertikal), og hva det betyr at resistensgener kan spres mellom ULIKE arter.'],
        solution: 'Konjugasjon: En bakterie overfører et plasmid (med resistensgener) til en annen bakterie gjennom en sexpilus. Transformasjon: En bakterie tar opp fritt DNA fra miljøet, f.eks. fra døde bakterier. Transduksjon: En bakteriofag (virus) overforer DNA fra en bakterie til en annen. Horisontal genoverføring er særlig farlig fordi resistensgener kan spres mellom ULIKE bakteriearter – ikke bare fra forelder til avkom. Det betyr at en resistent tarmbakterie kan overføre resistensgener til en sykdomsfremkallende bakterie av en helt annen art. På denne måten kan resistens spres raskt gjennom et helt bakteriesamfunn.',
      },
    },
    {
      id: 'bio1-6-5-summary',
      type: 'text',
      content: `## Oppsummering

- Antibiotikaresistens oppstår gjennom naturlig utvalg: antibiotika selekterer for allerede resistente bakterier
- Resistensmekanismer: enzymatisk nedbrytning, endret maalmolekyl, efflukspumper, redusert opptak
- Horisontal genoverføring (konjugasjon, transformasjon, transduksjon) sprer resistensgener mellom arter
- MRSA, VRE, ESBL og MDR-TB er eksempler påfarlige resistente bakterier
- One Health-tilnærmingen ser menneske-, dyre- og miljøehelse i sammenheng
- Norge har lavt antibiotikaforbruk og streng regulering, men er ikke isolert fra globale trender
- Viktige tiltak: riktig antibiotikabruk, ny forskning, bedre diagnostikk, vaksinasjon og hygiene`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Droeft paastanden: «Antibiotikaresistens er et evolusjonært problem som ikke kan løses med mer antibiotika.» Bruk begreper som naturlig utvalg, mutasjon, seleksjon og horisontal genoverføring i svaret.',
        hints: ['Tenk påat jo mer antibiotika vi bruker, jo staerkere er seleksjonstrykket for resistens.'],
        solution: 'Paastaanden er i stor grad riktig. Antibiotikaresistens er et evolusjonært fenomen drevet av naturlig utvalg: nårantibiotika er til stede, har bakterier med resistensmutasjoner en enorm seleksjonsfordel og overlever mens foelsome bakterier dør. Jo mer antibiotika vi bruker, jo staerkere er dette seleksjonstrykket. I tillegg kan resistensgener spres raskt gjennom horisontal genoverføring (konjugasjon, transformasjon, transduksjon) – også mellom ulike bakteriearter. Aa utvikle flere antibiotika er viktig som midlertidig loesning, men det loser ikke grunnproblemet: bakterier vil alltid utvikle resistens mot nye antibiotika gjennom mutasjoner og naturlig utvalg. Derfor måvi også satse påforebygging (vaksiner, hygiene), redusert antibiotikabruk og alternativ forskning (f.eks. fagterapi, antimikrobielle peptider).',
      },
    },
    {
      id: 'bio1-6-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Norge har et av verdens laveste antibiotikaforbruk. Forklar minst tre grunner til dette, og drøft om Norge likevel kan bli påvirket av antibiotikaresistens fra andre land.',
        hints: ['Tenk påreiser, matimport og bakterienes evne til åspree seg globalt.'],
        solution: 'Tre grunner til lavt norsk forbruk: 1) Streng forskrivningspraksis – norske leger er opplært til åbruke smalspektret antibiotika og unngå unødvendig forskrivning. 2) Forbud mot vekstfremmende antibiotika i landbruket siden 1995, noe som har redusert resistensutvikling hos husdyr drastisk. 3) Gode overvåkingsprogrammer (NORM/NORM-VET) som overvaker resistensnivåer og gir tidlig varsling. Norge kan likevel bli påvirket fordi: 1) Nordmenn reiser mye og kan bringe med seg resistente bakterier hjem (særlig fra land med hørt antibiotikaforbruk). 2) Import av mat fra land med større antibiotikabruk i landbruket kan introdusere resistente bakterier. 3) Bakterier kjenner ingen landegrenser – resistensgener kan spres gjennom migrasjon, handel og miljøet. Antibiotikaresistens er derfor et globalt problem som krever internasjonalt samarbeid.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Antibiotikaresistens', definition: 'Bakteriers evne til åoverleve i naeværet av antibiotika' },
    { term: 'Horisontal genoverføring', definition: 'Overfoering av genetisk materiale mellom ubeslektede bakterier' },
    { term: 'Konjugasjon', definition: 'Overfoering av plasmid via sexpilus mellom bakterier' },
    { term: 'Transformasjon', definition: 'Bakteriers opptak av fritt DNA fra miljøet' },
    { term: 'Transduksjon', definition: 'DNA-overføring mellom bakterier via bakteriofager' },
    { term: 'MRSA', definition: 'Meticillinresistent Staphylococcus aureus – resistent mot beta-laktam-antibiotika' },
    { term: 'One Health', definition: 'Tilnærming som ser menneske-, dyre- og miljøehelse i sammenheng' },
  ],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const BIOLOGI_1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_6_1,
  CHAPTER_BIOLOGI_1_6_2,
  CHAPTER_BIOLOGI_1_6_3,
  CHAPTER_BIOLOGI_1_6_4,
  CHAPTER_BIOLOGI_1_6_5,
];

export function getBiologi1Del6Chapter(chapterId: string): TextbookChapter | undefined {
  return BIOLOGI_1_DEL6_CHAPTERS.find(chapter => chapter.id === chapterId);
}
