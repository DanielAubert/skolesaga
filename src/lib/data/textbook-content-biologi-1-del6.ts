/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Kapittel 6: Mikroorganismer og smittevern
 *
 * Dekker LK20-kompetansemaal for biologi 1 (BIO01-02):
 * - kompetansemaal 7: gjore rede for virale og mikrobielle sykdommer
 * - kompetansemaal 9: gjore rede for antibiotika og antibiotikaresistens
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
  description: 'Oversikt over mikroorganismer: bakterier, virus, sopp og protister. Stoerrelse, organisering og roller i naturen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for hovedgruppene av mikroorganismer og deres kjennetegn',
    'beskrive mikroorganismers roller i naturen som nedbrytere, symbionter og patogener',
    'forklare hva normalfloraen er og hvorfor den er viktig for helsen',
  ],
  content: [
    {
      id: 'bio1-6-1-intro',
      type: 'text',
      content: `# Mikroorganismenes mangfold

Mikroorganismer er livets usynlige arbeidere. De finnes overalt – i jorda, i havet, i lufta og inne i kroppen vaar. De fleste mikroorganismer er helt ufarlige, og mange er livsnodvendige for oekosystemene og for vaar egen helse. Likevel er det noen faa som kan foraarsake alvorlig sykdom.

I dette kapittelet faar du en oversikt over de viktigste gruppene av mikroorganismer: bakterier, virus, sopp og protister. Du laerer om hvordan de skiller seg fra hverandre, og hvilke roller de spiller i naturen og i kroppen vaar.

## Hva er en mikroorganisme?

En mikroorganisme er en organisme som er saa liten at den ikke kan sees med det blotte oeyet. For aa se mikroorganismer trenger vi et mikroskop. De viktigste gruppene er:

- **Bakterier** – encellede prokaryoter
- **Virus** – partikler som ikke er celler (diskuteres om de er «levende»)
- **Sopp** – inkluderer gjaersopp og muggsopp
- **Protister** – encellede eukaryoter (f.eks. amober, malaria-parasitter)`,
    },
    {
      id: 'bio1-6-1-def-1',
      type: 'definition',
      title: 'Mikroorganisme',
      content: 'En mikroorganisme (mikrobe) er en organisme som er for liten til aa sees med det blotte oeyet. Gruppen inkluderer bakterier, arker, virus, sopp (gjaersopp og muggsopp) og protister. Mikroorganismer finnes i nesten alle miljoer paa jorda, fra dyphavskildene til is paa Antarktis.',
    },
    {
      id: 'bio1-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Stoerrelsesskala for mikroorganismer',
      content: `**Stoerrelsesskala:**

| Organisme | Typisk stoerrelse | Synlig for? |
|-----------|-------------------|-------------|
| Virus | 20–300 nm | Elektronmikroskop |
| Bakterier | 0,5–5 μm | Lysmikroskop |
| Gjaersopp | 5–10 μm | Lysmikroskop |
| Protister (amoebe) | 100–700 μm | Lysmikroskop / lupeglass |
| Menneskecelle | 10–100 μm | Lysmikroskop |

**Stoerrelsesforhold:**
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
        solution: 'Virus er de minste «mikroorganismene» med en typisk stoerrelse paa 20–300 nanometer. Bakterier er vanligvis 0,5–5 mikrometer, altsaa rundt 10–100 ganger stoerre enn virus. Sopp og protister er enda stoerre.',
      },
    },
    {
      id: 'bio1-6-1-roller',
      type: 'text',
      content: `## Mikroorganismers roller i naturen

Mikroorganismer spiller mange viktige roller i oekosystemene:

### Nedbrytere (dekomponenter)
Bakterier og sopp bryter ned dodt organisk materiale og resirkulerer naeringsstoffer tilbake til jorda. Uten nedbrytere ville doede planter og dyr hope seg opp, og naeringsstoffene ville vaere utilgjengelige for nye organismer. Nedbrytning er en forutsetning for alt liv paa jorda.

### Symbionter
Mange mikroorganismer lever i naert samarbeid med andre organismer:
- **Nitrogenfikserende bakterier** i rotknoller hos belgplanter omdanner nitrogen fra lufta til ammonium som plantene kan bruke
- **Tarmbakterier** hos mennesker og dyr hjelper med fordoeyelsen og produserer vitaminer (f.eks. vitamin K og B12)
- **Mykorrhiza-sopp** lever i symbiose med plantetoetter og hjelper plantene med aa ta opp vann og mineraler

### Patogener
Noen faa mikroorganismer kan foraarsake sykdom. Disse kalles patogener. Eksempler er bakterien *Salmonella* (matforgiftning), viruset SARS-CoV-2 (COVID-19) og soppen *Candida* (soppinfeksjon).`,
    },
    {
      id: 'bio1-6-1-def-2',
      type: 'definition',
      title: 'Patogen',
      content: 'Et patogen er en mikroorganisme eller et agens som kan foraarsake sykdom hos en vert. Patogener omfatter visse bakterier, virus, sopp og parasitter. Evnen til aa foraarsake sykdom kalles virulens. Ikke alle mikroorganismer er patogene – de aller fleste er ufarlige eller nyttige.',
    },
    {
      id: 'bio1-6-1-example-2',
      type: 'example',
      title: 'Eksempel: Nitrogenfiksering – samarbeid mellom bakterier og planter',
      problem: 'Kvitkloever dyrkes ofte sammen med gras paa beitemarkene i Norge. Hvorfor er dette gunstig for graset?',
      solution: `**Svar:**

Kvitkloever er en belgplante som har **nitrogenfikserende bakterier** (Rhizobium) i rotknoller. Disse bakteriene omdanner nitrogengass (N₂) fra lufta til ammonium (NH₄⁺), som plantene kan bruke.

Nitrogen er et viktig naeringsstoff som ofte begrenser plantevekst. Naar kvitkloever vokser sammen med gras, lekker noe av det fikserte nitrogenet ut i jorda og gjoer det tilgjengelig for graset. Dette er et eksempel paa **symbiose** mellom bakterier og planter, og det reduserer behovet for kunstgjoedsel.`,
    },
    {
      id: 'bio1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom en nedbryterrolle og en patogenrolle for mikroorganismer. Gi ett eksempel paa hver.',
        hints: ['Tenk paa hva mikroorganismen «lever av» og hvem som paavirkes.'],
        solution: 'Nedbrytere bryter ned dodt organisk materiale og resirkulerer naeringsstoffer i oekosystemet. Eksempel: Sopparter som bryter ned loevfall paa skogbunnen. Patogener lever paa eller i levende organismer og foraarsaker sykdom. Eksempel: Bakterien Mycobacterium tuberculosis som foraarsaker tuberkulose. Hovedforskjellen er at nedbrytere lever av dodt materiale, mens patogener angriper levende organismer.',
      },
    },
    {
      id: 'bio1-6-1-normalflora',
      type: 'text',
      content: `## Normalfloraen – nyttige mikroorganismer i og paa kroppen

Kroppen vaar er hjem for billioner av mikroorganismer, saerlig bakterier. Til sammen kalles disse for **normalfloraen** (eller mikrobiomet). De fleste befinner seg i tarmen, paa huden, i munnen og i de oevre luftveiene.

### Normalfloraens funksjoner

1. **Beskyttelse mot patogener**: Normalfloraen konkurrerer med sykdomsfremkallende bakterier om plass og naeringsstoffer. Dette kalles **koloniseringsresistens**.
2. **Fordoeyelse**: Tarmbakterier hjelper med aa bryte ned naeringsfiber og produserer kortkjedede fettsyrer som tarmcellene bruker som energi.
3. **Vitaminproduksjon**: Noen tarmbakterier produserer vitamin K og B-vitaminer.
4. **Immunsystemet**: Normalfloraen stimulerer immunsystemet og bidrar til at det utvikler seg normalt.

### Hva kan forstyrre normalfloraen?

- **Antibiotikabehandling** dreper baade patogener og normalfloraen, noe som kan foere til ubalanse
- **Endret kosthold** paavirker sammensetningen av tarmbakterier
- **Stress og sykdom** kan endre normalfloraen`,
    },
    {
      id: 'bio1-6-1-def-3',
      type: 'definition',
      title: 'Normalflora (mikrobiom)',
      content: 'Normalfloraen er alle mikroorganismene som normalt lever i og paa kroppen vaar uten aa foraarsake sykdom. Tarmens normalflora alene bestaar av anslagsvis 100 billioner bakterier – det er ca. ti ganger saa mange som kroppens egne celler. Normalfloraen spiller en viktig rolle for fordoeyelsen, immunforsvaret og beskyttelse mot patogener.',
    },
    {
      id: 'bio1-6-1-example-3',
      type: 'example',
      title: 'Eksempel: Clostridium difficile – naar normalfloraen svikter',
      content: `Etter langvarig antibiotikabehandling kan normalfloraen i tarmen bli kraftig redusert. Dette gir mulighet for den sykdomsfremkallende bakterien *Clostridioides difficile* (C. diff) til aa formere seg uhemmet.

**Hva skjer?**
1. Antibiotika dreper bade patogener og normalflorabakterier
2. Normalfloraens koloniseringsresistens forsvinner
3. *C. difficile*-sporer spirer og bakterien formerer seg
4. Bakterien produserer toksiner som gir alvorlig diaré og tarmbetennelse

**Behandling:**
I alvorlige tilfeller kan fekaltransplantasjon (overforing av normalflora fra en frisk donor) vaere effektivt – dette viser hvor viktig en sunn normalflora er.`,
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
          { id: 'a', text: 'Normalfloraen beskytter mot patogener ved aa konkurrere om plass og naering', isCorrect: true },
          { id: 'b', text: 'Evnen en bakterie har til aa motstaa antibiotika', isCorrect: false },
          { id: 'c', text: 'Immunsystemets evne til aa drepe virus', isCorrect: false },
          { id: 'd', text: 'Hudens evne til aa stoppe alle bakterier fra aa trenge inn', isCorrect: false },
        ],
        solution: 'Koloniseringsresistens er normalfloraens evne til aa hindre patogene mikroorganismer i aa etablere seg. Normalflorabakteriene konkurrerer med patogener om plass paa slimhinner og hud, om naeringsstoffer, og kan ogsa produsere antimikrobielle stoffer. Naar normalfloraen reduseres (f.eks. av antibiotika), svekkes koloniseringsresistensen, og patogener kan lettere faa fotfeste.',
      },
    },
    {
      id: 'bio1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar kort hva som menes med at normalfloraen kan «forstyrres» av antibiotikabruk, og gi et konkret eksempel paa en mulig konsekvens.',
        hints: ['Tenk paa hvilke bakterier antibiotika dreper – bare de sykdomsfremkallende?'],
        solution: 'Antibiotika skiller ikke mellom nyttige normalflorabakterier og patogene bakterier. Naar man tar antibiotika, dreper man derfor baade sykdomsbakteriene og store deler av normalfloraen. Dette kan gi plass til sykdomsfremkallende mikroorganismer som normalt holdes i sjakk. Et konkret eksempel er Clostridioides difficile-infeksjon: etter antibiotikabehandling kan denne bakterien ta over i tarmen og foraarsake alvorlig diaré og tarmbetennelse.',
      },
    },
    {
      id: 'bio1-6-1-summary',
      type: 'text',
      content: `## Oppsummering

- Mikroorganismer er organismer som er for smaa til aa sees med det blotte oeyet
- De viktigste gruppene er bakterier, virus, sopp og protister
- Virus er minst (nm), bakterier er stoerre (μm), sopp og protister er stoerst
- Mikroorganismer spiller roller som nedbrytere, symbionter og patogener
- De fleste mikroorganismer er ufarlige eller nyttige – kun noen faa er sykdomsfremkallende
- Normalfloraen bestaar av billioner av mikroorganismer som lever paa og i kroppen
- Normalfloraen beskytter mot patogener, hjelper fordoeyelsen og stimulerer immunsystemet`,
    },
    // --- Samleoppgaver ---
    {
      id: 'bio1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en oversiktstabell som sammenligner bakterier, virus, sopp og protister med hensyn til: celletype (prokaryot/eukaryot/ingen), stoerrelse, formering og et eksempel paa sykdom foraarsaket av gruppen.',
        hints: ['Husk at virus ikke har celler, mens bakterier er prokaryoter og sopp/protister er eukaryoter.'],
        solution: 'Bakterier: prokaryot, 0,5–5 μm, binaer fisjon, tuberkulose. Virus: ikke celle, 20–300 nm, vertscelle (replikasjon), influensa. Sopp: eukaryot, 5–100 μm, knoppskyting/sporer, ringorm. Protister: eukaryot, 10–700 μm, celledeling, malaria. Virus er spesielle fordi de ikke har egen cellulae struktur og maa bruke vertsceller for aa formere seg.',
      },
    },
    {
      id: 'bio1-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Droeft paastanden: «Uten mikroorganismer ville livet paa jorda stoppet opp.» Bruk minst tre konkrete eksempler i svaret ditt.',
        hints: ['Tenk paa naeringskretslop, symbiose med planter og fordoeyelse.'],
        solution: 'Paastanden er riktig. Eksempler: 1) Nedbrytere (bakterier og sopp) resirkulerer naeringsstoffer fra dodt organisk materiale tilbake til jorda – uten dem ville naeringsstoffene vaere utilgjengelige for nye organismer. 2) Nitrogenfikserende bakterier omdanner nitrogengass fra atmosfaeren til former plantene kan bruke – uten dette ville plantevekst vaere sterkt begrenset. 3) Tarmbakterier hos mennesker og dyr hjelper med fordoeyelsen og produserer livsviktige vitaminer. 4) Fotosyntetiske cyanobakterier produserer en betydelig del av jordens oksygen. Uten mikroorganismer ville naeringskretslop bryte sammen, planter faa for lite nitrogen, og vi ville mangle viktige vitaminer og fordoeyelseshjelp.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Mikroorganisme', definition: 'Organisme for liten til aa sees med det blotte oeyet' },
    { term: 'Patogen', definition: 'Sykdomsfremkallende mikroorganisme' },
    { term: 'Normalflora', definition: 'Mikroorganismer som normalt lever paa og i kroppen' },
    { term: 'Koloniseringsresistens', definition: 'Normalfloraens evne til aa hindre patogener i aa etablere seg' },
    { term: 'Symbiose', definition: 'Naert samspill mellom to arter som lever tett sammen' },
    { term: 'Nedbryting', definition: 'Omdanning av dodt organisk materiale til uorganiske stoffer' },
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
  description: 'Bakteriecellens struktur, gram-positiv vs. gram-negativ, binaer fisjon, vekstkurve og bakteriers roller i natur og samfunn.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive bakteriecellens oppbygning og sammenligne med eukaryote celler',
    'forklare forskjellen mellom gram-positive og gram-negative bakterier',
    'gjore rede for binaer fisjon og bakteriell vekstkurve',
    'gi eksempler paa nyttige og sykdomsfremkallende bakterier',
  ],
  content: [
    {
      id: 'bio1-6-2-intro',
      type: 'text',
      content: `# Bakterier – oppbygning, formering og betydning

Bakterier er de mest tallrike organismene paa jorda. De har vaert her i over 3,5 milliarder aar og finnes i nesten alle miljoer – fra varme kilder til isbreer, fra dypt nede i jordskorpa til hoyt oppe i atmosfaeren. Bakterier er prokaryoter, som betyr at de mangler cellekjerne og andre membranbundne organeller.

I dette kapittelet ser vi naermere paa bakteriecellens oppbygning, hvordan bakterier formerer seg, og hvilken betydning de har baade som sykdomsfremkallere og som nyttige organismer.`,
    },
    {
      id: 'bio1-6-2-def-1',
      type: 'definition',
      title: 'Bakterie',
      content: 'Bakterier er encellede prokaryote mikroorganismer. De mangler cellekjerne og membranbundne organeller, men har sitt DNA i et kromosom som ligger fritt i cytoplasmaet (i et omraade kalt nukleoiden). Bakterier har cellevegg, plasmamembran og ribosomer for proteinsyntese. De formerer seg vanligvis ved binaer fisjon.',
    },
    {
      id: 'bio1-6-2-oppbygning',
      type: 'text',
      content: `## Bakteriecellens oppbygning

En typisk bakteriecelle har foelgende strukturer:

### Obligatoriske strukturer (alle bakterier har disse)

**Plasmamembran**
Et dobbelt lipidlag som omgir cytoplasmaet. Regulerer transport av stoffer inn og ut av cellen. Inneholder proteiner for energiproduksjon (elektrontransportkjeden).

**Cellevegg**
Ligger utenfor plasmamembranen. Gir cellen form og beskyttelse mot osmotisk stress. Hovedkomponenten er **peptidoglykan** – et nettverk av sukker- og aminosyrekjeder som er unikt for bakterier.

**Ribosomer**
Smaa partikler (70S-type) der proteinsyntese foregaar. Bakterielle ribosomer er mindre enn eukaryote ribosomer (80S), noe som er viktig for antibiotikas virkning.

**Kromosom (DNA)**
Et enkelt, sirkulaert DNA-molekyl som inneholder bakteriens gener. Ligger i et omraade kalt nukleoiden (ikke omgitt av membran).

### Valgfrie strukturer (noen bakterier har disse)

**Kapsel**
Et slimlag utenfor celleveggen som beskytter mot immunforsvaret og uttorking.

**Flageller**
Lange piskeformede strukturer som brukes til bevegelse. Noen bakterier har en flagell, andre har mange.

**Pili (fimbriae)**
Korte, haarlignende strukturer som brukes til aa feste seg til overflater eller til genoverfoering mellom bakterier (konjugasjon).

**Plasmider**
Smaa, sirkulaere DNA-molekyler utenom kromosomet. Baerer ofte gener for antibiotikaresistens.`,
    },
    {
      id: 'bio1-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av prokaryot og eukaryot celle',
      content: `| Egenskap | Bakterie (prokaryot) | Dyrecelle (eukaryot) |
|----------|---------------------|---------------------|
| Cellekjerne | Nei (nukleoid) | Ja |
| Kromosom | 1, sirkulaert | Flere, lineaere |
| Ribosomer | 70S | 80S |
| Organeller med membran | Nei | Ja (mitokondrier, ER osv.) |
| Cellevegg | Ja (peptidoglykan) | Nei |
| Plasmider | Ofte | Nei |
| Stoerrelse | 0,5–5 μm | 10–100 μm |
| Formering | Binaer fisjon | Mitose |

**Hovedforskjell:** Bakterier mangler cellekjerne og membranbundne organeller. DNA-et ligger fritt i cytoplasmaet. Denne enkle oppbygningen gjoer at bakterier kan formere seg raskt.`,
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
        solution: 'Peptidoglykan er hovedkomponenten i bakteriers cellevegg. Det bestaar av et nettverk av sukker- og aminosyrekjeder som gir cellen form og styrke. Peptidoglykan er unikt for bakterier og finnes ikke i eukaryote celler, noe som gjoer det til et viktig maal for antibiotika.',
      },
    },
    {
      id: 'bio1-6-2-gram',
      type: 'text',
      content: `## Gram-positiv og gram-negativ

I 1884 utviklet den danske bakteriologen Hans Christian Gram en fargemetode som deler bakterier i to hovedgrupper basert paa celleveggens oppbygning:

### Gram-positive bakterier
- **Tykk cellevegg** med mye peptidoglykan
- Farges **lilla/blaa** i gramfarging
- Mangler ytre membran
- Eksempler: *Staphylococcus aureus*, *Streptococcus*, *Bacillus*

### Gram-negative bakterier
- **Tynn cellevegg** med lite peptidoglykan
- Har en **ytre membran** med lipopolysakkarid (LPS)
- Farges **rosa/roed** i gramfarging
- LPS kan foraarsake kraftig immunrespons (endotoksin)
- Eksempler: *Escherichia coli*, *Salmonella*, *Neisseria*

### Klinisk betydning

Skillet mellom gram-positiv og gram-negativ er viktig i medisin fordi:
1. Den ytre membranen hos gram-negative bakterier gjoer dem mer motstandsdyktige mot mange antibiotika
2. Gramfarging hjelper legen med aa velge riktig antibiotika raskt
3. LPS hos gram-negative bakterier kan utloese septisk sjokk`,
    },
    {
      id: 'bio1-6-2-def-2',
      type: 'definition',
      title: 'Gramfarging',
      content: 'Gramfarging er en fargemetode for bakterier utviklet av Hans Christian Gram. Bakterier farges foerst med krystallfiolett og deretter med safranin. Gram-positive bakterier har tykk cellevegg og beholder den lilla fargen, mens gram-negative bakterier har tynn cellevegg med ytre membran og farges rosa. Metoden er et viktig foerste steg i identifisering av ukjente bakterier.',
    },
    {
      id: 'bio1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvorfor er gram-negative bakterier ofte vanskeligere aa behandle med antibiotika enn gram-positive?',
        options: [
          { id: 'a', text: 'Fordi de har en ytre membran som blokkerer mange antibiotika', isCorrect: true },
          { id: 'b', text: 'Fordi de formerer seg raskere enn gram-positive', isCorrect: false },
          { id: 'c', text: 'Fordi de har stoerre ribosomer', isCorrect: false },
          { id: 'd', text: 'Fordi de ikke har cellevegg', isCorrect: false },
        ],
        solution: 'Gram-negative bakterier har en ytre membran utenpaa den tynne celleveggen. Denne ytre membranen fungerer som en ekstra barriere som hindrer mange antibiotikamolekyler i aa naa inn til cellens indre. Antibiotika som maa trenge gjennom celleveggen for aa virke, blokkeres derfor ofte av den ytre membranen.',
      },
    },
    {
      id: 'bio1-6-2-formering',
      type: 'text',
      content: `## Binaer fisjon og vekstkurve

### Binaer fisjon

Bakterier formerer seg ukjoennet ved **binaer fisjon** (toedeling):

1. DNA-et kopieres (replikasjon)
2. Cellen vokser i stoerrelse
3. En cellevegg dannes paa midten
4. Cellen deles i to identiske datterceller

Under optimale forhold kan noen bakterier (som *E. coli*) dele seg hvert 20. minutt. Det betyr at en enkelt bakterie teoretisk kan bli til over 16 millioner paa 8 timer!

### Bakteriell vekstkurve

Naar bakterier dyrkes i et lukket system (f.eks. et reagensglads med naeringsmedium), folger populasjonsveksten et karakteristisk monster:

**1. Lagfase** – Bakteriene tilpasser seg det nye miljoet. Lite celledeling, men aktiv metabolisme.

**2. Eksponentiell fase (log-fase)** – Bakteriene deler seg med konstant hastighet. Populasjonen vokser eksponentielt.

**3. Stasjonaer fase** – Veksten bremser fordi naeringsstoffer brukes opp og avfallsstoffer hoper seg opp. Antall nye celler ≈ antall doede celler.

**4. Doedsfase** – Naeringsstoffene er oppbrukt. Flere celler doer enn som dannes. Populasjonen avtar.`,
    },
    {
      id: 'bio1-6-2-def-3',
      type: 'definition',
      title: 'Binaer fisjon',
      content: 'Binaer fisjon er bakteriers vanligste formeringsmetode. Prosessen innebærer at bakteriens DNA kopieres, cellen vokser, og en ny cellevegg dannes paa midten slik at cellen deles i to genetisk identiske datterceller. Under optimale forhold kan dette skje svært raskt – noen bakterier deler seg hvert 20. minutt.',
    },
    {
      id: 'bio1-6-2-example-2',
      type: 'example',
      title: 'Eksempel: Eksponentiell vekst av bakterier',
      problem: 'En bakteriekultur starter med 100 bakterier. Bakteriene deler seg hvert 30. minutt. Hvor mange bakterier er det etter 3 timer?',
      solution: `**Losning:**

Antall delinger paa 3 timer = 180 min / 30 min = **6 delinger**

Etter binaer fisjon dobles antallet for hver deling:

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
        hints: ['Regn ut antall delinger i 4 timer foerst, del saa populasjonen paa to, og regn ut videre vekst i 1 time.'],
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
- *Borrelia burgdorferi* – borreliose (flaattpaafoert)

### Nyttige bakterier
- **Matproduksjon**: Melkesyrebakterier brukes til aa lage yoghurt, ost, surkaal og sylteagurk
- **Bioteknologi**: *E. coli* brukes til aa produsere insulin og andre proteiner ved hjelp av genteknologi
- **Nitrogenkretslop**: Nitrogenfikserende bakterier omdanner N₂ til ammoniakk, og nitrifikasjonsbakterier omdanner ammoniakk til nitrat
- **Biorensning**: Bakterier brukes til aa rense avlopsvann
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
        hints: ['Husk aa nevne peptidoglykantykkelse, ytre membran og LPS.'],
        solution: 'Gram-positive bakterier har tykk cellevegg med mye peptidoglykan og mangler ytre membran. De farges lilla/blaa i gramfarging. Gram-negative bakterier har tynn cellevegg med lite peptidoglykan, men har en ytre membran som inneholder lipopolysakkarid (LPS). De farges rosa/roede. Klinisk er skillet viktig fordi den ytre membranen hos gram-negative bakterier gjoer dem mer motstandsdyktige mot mange antibiotika. LPS kan dessuten utloese kraftig immunrespons og septisk sjokk ved alvorlige infeksjoner. Gramfarging er derfor et viktig foerste steg i aa velge riktig antibiotikabehandling.',
      },
    },
    {
      id: 'bio1-6-2-summary',
      type: 'text',
      content: `## Oppsummering

- Bakterier er prokaryote encellede organismer uten cellekjerne
- Bakteriecellen har cellevegg (peptidoglykan), plasmamembran, ribosomer (70S) og sirkulaert DNA
- Valgfrie strukturer inkluderer kapsel, flageller, pili og plasmider
- Gram-positive bakterier har tykk cellevegg, gram-negative har tynn cellevegg pluss ytre membran
- Bakterier formerer seg ved binaer fisjon og kan dele seg svært raskt
- Vekstkurven har fire faser: lagfase, eksponentiell fase, stasjonaer fase og doedsfase
- Bakterier er baade sykdomsfremkallere og nyttige i matproduksjon, bioteknologi og oekosystemer`,
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
          { id: 'c', text: 'Stasjonaer fase', isCorrect: false },
          { id: 'd', text: 'Doedsfase', isCorrect: false },
        ],
        solution: 'I den eksponentielle fasen (log-fasen) deler bakteriene seg med konstant, maksimal hastighet. Naeringsstoffer er rikelig tilgjengelige og avfallsstoffer har ikke bygget seg opp. Populasjonen dobles med jevne mellomrom, og veksten er eksponentiell.',
      },
    },
    {
      id: 'bio1-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Droeft hvorfor bakterier er viktige baade for jordbruket og for matindustrien. Gi minst to eksempler fra hvert omraade.',
        hints: ['Tenk paa nitrogenfikseking, nedbrytning, fermentering og konservering.'],
        solution: 'Jordbruk: 1) Nitrogenfikserende bakterier (Rhizobium) i rotknoller hos belgplanter omdanner N₂ til ammoniakk, noe som reduserer behovet for kunstgjoedsel. 2) Nedbryterbakterier i jorda omdanner dodt organisk materiale til naeringsstoffer som plantene kan ta opp. 3) Bakterier brukes i biogjoedsel og kompostering. Matindustri: 1) Melkesyrebakterier (Lactobacillus) brukes i produksjon av yoghurt, ost og kefir gjennom fermentering. 2) Bakterier brukes til aa lage surkaal, kimchi og andre fermenterte groennssaker. 3) Eddiksyrebakterier brukes i eddikproduksjon. Bakterier er altsaa uunnvaerlige baade for matproduksjon og for aa opprettholde fruktbar jord.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Prokaryot', definition: 'Celle uten cellekjerne og membranbundne organeller' },
    { term: 'Peptidoglykan', definition: 'Hovedkomponent i bakteriers cellevegg, unikt for bakterier' },
    { term: 'Gramfarging', definition: 'Fargemetode som skiller gram-positive og gram-negative bakterier' },
    { term: 'Binaer fisjon', definition: 'Bakteriers formeringsmetode der cellen deles i to identiske datterceller' },
    { term: 'Plasmid', definition: 'Lite, sirkulaert DNA-molekyl utenom kromosomet' },
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
    'gi eksempler paa viktige virussykdommer og hvordan de smitter',
    'drofte om virus er levende organismer',
  ],
  content: [
    {
      id: 'bio1-6-3-intro',
      type: 'text',
      content: `# Virus – struktur, livssyklus og sykdom

Virus er blant de enkleste biologiske enhetene vi kjenner. De befinner seg i grenseland mellom det levende og det ikke-levende: de har arvemateriale og kan evolve, men de kan ikke formere seg uten aa kapre en vertscelle. Virus er ansvarlige for mange alvorlige sykdommer, fra forkjoelelse til COVID-19 og AIDS.

I dette kapittelet laerer du om virusets oppbygning, hvordan virus formerer seg, og hvilke sykdommer de foraarsaker.`,
    },
    {
      id: 'bio1-6-3-def-1',
      type: 'definition',
      title: 'Virus',
      content: 'Et virus er en submikroskopisk, infektioes partikkel som bestaar av arvemateriale (DNA eller RNA) omgitt av et proteinskall (kapsid). Virus har ikke egen metabolisme og kan kun formere seg inne i en levende vertscelle. De er derfor obligate intracellulare parasitter. Virus er mye mindre enn bakterier (20–300 nm).',
    },
    {
      id: 'bio1-6-3-struktur',
      type: 'text',
      content: `## Virusets oppbygning

Et virus er mye enklere enn en celle. Det bestaar av bare noen faa komponenter:

### 1. Arvemateriale (genom)
- Kan vaere **DNA** eller **RNA** (aldri begge)
- Kan vaere enkeltttraadet eller dobbeltttraadet
- Kan vaere lineaert eller sirkulaert

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
- **Kappekledde virus** (f.eks. influensa, SARS-CoV-2) er saarbare for saape og alkohol, fordi disse oedelegger lipidlaget
- **Nakne virus** (f.eks. norovirus) mangler kappe og er mer motstandsdyktige`,
    },
    {
      id: 'bio1-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Hvorfor virker haandvask mot SARS-CoV-2?',
      content: `SARS-CoV-2 (viruset som foraarsaker COVID-19) er et kappekledd virus. Kappen bestaar av et lipidlag hentet fra vertscellens membran.

**Saape oedelaegger viruset:**
1. Saapemolekyler har en fettloeselig del og en vannloeselig del
2. Den fettloeselige delen traenger inn i virusets lipidkappe
3. Lipidlaget loeses opp og faller fra hverandre
4. Uten kappe kan viruset ikke lenger binde seg til vertscellens reseptorer
5. Viruset er dermed inaktivert

**Derfor er haandvask med saape og vann svært effektivt** mot kappekledde virus. Nakne virus (som norovirus) er vanskeligere aa fjerne fordi de mangler lipidlag.`,
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
          { id: 'b', text: 'Virus har bade DNA og RNA, pluss en cellekjerne', isCorrect: false },
          { id: 'c', text: 'Virus har ribosomer for aa lage egne proteiner', isCorrect: false },
          { id: 'd', text: 'Virus har plasmamembran og egen metabolisme', isCorrect: false },
        ],
        solution: 'Et virus bestaar av arvemateriale (DNA eller RNA, aldri begge) omgitt av et proteinskall kalt kapsid. Noen virus har i tillegg en lipidkappe. Virus har IKKE ribosomer, plasmamembran eller egen metabolisme – de er avhengige av vertsceller for aa formere seg.',
      },
    },
    {
      id: 'bio1-6-3-sykluser',
      type: 'text',
      content: `## Virusets livssyklus

Virus kan ikke formere seg paa egen haand. De maa infisere en vertscelle og bruke cellens maskineri til aa lage nye viruskopier. Det finnes to hovedtyper av formering:

### Lytisk syklus (dreper vertscellen)

1. **Festing**: Viruset binder seg til spesifikke reseptorer paa vertscellens overflate
2. **Injeksjon/penetrasjon**: Virusets arvemateriale foeres inn i vertscellen
3. **Replikasjon**: Vertscellens maskineri kopierer virusets DNA/RNA og produserer virale proteiner
4. **Sammensetting**: Nye viruspartikler settes sammen inne i cellen
5. **Frigjoring (lysis)**: Cellen sprekker og frigjoer hundrevis av nye virus som kan infisere nye celler

### Lysogen syklus (viruset «gjemmer seg»)

1. **Festing og injeksjon**: Som i lytisk syklus
2. **Integrasjon**: Virusets DNA bygges inn i vertscellens kromosom (kalles naa **profag**)
3. **Replikasjon med verten**: Naar vertscellen deler seg, kopieres ogsa virusets DNA
4. **Aktivering**: Under stress (UV-lys, kjemikalier) kan profagen aktiveres og gaa over i lytisk syklus

### Betydning av de to syklusene

- **Lytisk syklus**: Gir rask infeksjon og celledoed – typisk for akutte sykdommer
- **Lysogen syklus**: Viruset kan vaere latent i aarevispaa – typisk for kroniske infeksjoner (f.eks. herpesvirus)`,
    },
    {
      id: 'bio1-6-3-def-2',
      type: 'definition',
      title: 'Lytisk syklus',
      content: 'Den lytiske syklusen er en virusvermering der viruset tar over vertscellens maskineri, produserer mange nye viruspartikler, og til slutt sprenger (lyserer) vertscellen. De nye virusene frigjoeres og kan infisere nye celler. Denne syklusen gir rask spredning og celledoed.',
    },
    {
      id: 'bio1-6-3-def-3',
      type: 'definition',
      title: 'Lysogen syklus',
      content: 'Den lysogene syklusen er en virusvermering der virusets DNA integreres i vertscellens kromosom og kalles en profag. Profagen kopieres passivt naar vertscellen deler seg, uten aa drepe cellen. Under visse forhold (stress, UV-straaling) kan profagen aktiveres og gaa over til lytisk syklus.',
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
- Immunsystemet kan ikke naa viruset her

**Reaktivering (tilbake til lytisk):**
- Ved stress, sollys, feber eller svekket immunforsvar aktiveres viruset
- Det vandrer tilbake langs nerven til huden
- Ny lytisk syklus gir nye blemmer paa samme sted

Derfor faar man gjentatte utbrudd av munnsaar – viruset er aldri helt borte fra kroppen.`,
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
        solution: 'Trinnene i lytisk syklus: 1) Festing – viruset binder til spesifikke reseptorer paa vertscellens overflate. 2) Penetrasjon – virusets arvemateriale injiseres inn i vertscellen. 3) Replikasjon – vertscellens eget maskineri (ribosomer, enzymer) brukes til aa kopiere virusets DNA/RNA og produsere virale proteiner. 4) Sammensetting – nye viruspartikler settes sammen inne i cellen. 5) Lysis – cellen sprekker og hundrevis av nye virus frigjoeres. Cellen doer fordi viruset tar fullstendig kontroll over cellens maskineri, slutter aa produsere cellens egne proteiner, og til slutt sprenger cellemembranen for aa slippe ut nye viruspartikler.',
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
- **Saerpreg**: Spike-protein binder til ACE2-reseptorer paa menneskeceller

### HIV/AIDS
- **Virus**: Humant immunsviktvirus (HIV)
- **Smitte**: Seksuell kontakt, blodoverfoering, mor-til-barn
- **Saerpreg**: Angriper T-hjelpeceller (CD4+) i immunsystemet
- **Konsekvens**: Uten behandling utvikles AIDS – immunsystemet oedelegges og pasienten doer av opportunistiske infeksjoner

### HPV (humant papillomavirus)
- **Smitte**: Seksuell kontakt og hudkontakt
- **Saerpreg**: Noen HPV-typer kan foraarsake livmorhalskreft
- **Forebygging**: HPV-vaksinen gis til alle ungdommer i Norge (barnevaksinasjonsprogrammet)`,
    },
    {
      id: 'bio1-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvorfor maa influensavaksinen fornyes hvert aar?',
        options: [
          { id: 'a', text: 'Fordi influensaviruset muterer raskt og endrer sine overflateproteiner', isCorrect: true },
          { id: 'b', text: 'Fordi vaksinen oedelegges i kroppen etter ett aar', isCorrect: false },
          { id: 'c', text: 'Fordi immunsystemet glemmer alle virus etter 12 maaneder', isCorrect: false },
          { id: 'd', text: 'Fordi influensa bare finnes om vinteren', isCorrect: false },
        ],
        solution: 'Influensaviruset endrer stadig sine overflateproteiner gjennom antigendrift (smaa mutasjoner) og antigenshift (stoerre endringer ved utbytting av gensegmenter). Immunsystemet gjenkjenner virus via overflateproteiner, saa naar disse endres, virker ikke fjorets immunitet. Derfor maa WHO hvert aar analysere hvilke virusstammer som sirkulerer og tilpasse vaksinen.',
      },
    },
    {
      id: 'bio1-6-3-levende',
      type: 'text',
      content: `## Er virus levende organismer?

Dette er et av biologiens store graensespoersmaal. Svaret avhenger av hvordan vi definerer «liv».

### Argumenter FOR at virus er levende:
- De har arvemateriale (DNA eller RNA) og kan evolve
- De gjennomgaar naturlig utvalg
- De har genetisk kode som ligner alle andre organismer
- De kan tilpasse seg nye verter

### Argumenter MOT at virus er levende:
- De har **ikke egen metabolisme** – ingen energiproduksjon
- De kan **ikke formere seg uten vertscelle**
- De har **ingen celler** – de er partikler, ikke celler
- De har **ikke ribosomer** og kan ikke lage proteiner selv
- Utenfor en vertscelle er de inaktive «krystaller»

### Konklusjon
De fleste biologer regner virus som **ikke-levende biologiske enheter**. De befinner seg i et grenseland og utfordrer vaar definisjon av liv. Virus er helt avhengige av levende celler for aa «leve», men de paavirker livets utvikling enormt gjennom evolusjon og sykdom.`,
    },
    {
      id: 'bio1-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Droeft om virus boer regnes som levende organismer. Gi minst to argumenter for og to mot.',
        hints: ['Tenk paa kjennetegn paa liv: metabolisme, formering, celler, evolusjon.'],
        solution: 'For: 1) Virus har arvemateriale (DNA eller RNA) og kan evolve gjennom mutasjoner og naturlig utvalg. 2) De kan tilpasse seg nye verter og utvikle resistens mot medisiner, noe som viser evolusjonsevne. Mot: 1) Virus har ikke egen metabolisme – de kan ikke produsere energi eller utfoere kjemiske reaksjoner paa egen haand. 2) De kan ikke formere seg uten aa bruke en vertscelles maskineri – alene er de inaktive partikler. Konklusjon: Virus har noen, men ikke alle, kjennetegnene paa liv. De fleste biologer klassifiserer dem som ikke-levende biologiske enheter som befinner seg i et grenseland mellom det levende og det ikke-levende.',
      },
    },
    {
      id: 'bio1-6-3-summary',
      type: 'text',
      content: `## Oppsummering

- Virus bestaar av arvemateriale (DNA eller RNA) omgitt av et proteinskall (kapsid), noen har ogsa lipidkappe
- Virus har ikke egen metabolisme og kan bare formere seg inne i vertsceller
- Lytisk syklus: viruset overtar cellen, lager nye virus og sprenger cellen
- Lysogen syklus: virusets DNA integreres i vertens kromosom og forblir latent
- Viktige virussykdommer: influensa, COVID-19, HIV/AIDS og HPV
- Kappekledde virus (influensa, SARS-CoV-2) oedelegges av saape – nakne virus er mer motstandsdyktige
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
        task: 'Lag en sammenligning av bakterier og virus i tabellform. Inkluder foelgende punkter: stoerrelse, celletype, arvemateriale, formering, metabolisme og behandling.',
        hints: ['Husk at antibiotika ikke virker mot virus.'],
        solution: 'Bakterier: 0,5–5 μm, prokaryot celle, DNA (sirkulaert), binaer fisjon, egen metabolisme, behandles med antibiotika. Virus: 20–300 nm, ingen celle, DNA eller RNA, krever vertscelle (lytisk/lysogen syklus), ingen metabolisme, behandles med antivirale midler (antibiotika virker IKKE). Viktigste forskjeller: Virus er mye mindre, har ingen celler og ingen metabolisme, og kan ikke formere seg uten vertscelle. Derfor virker antibiotika bare mot bakterier.',
      },
    },
    {
      id: 'bio1-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'HIV angriper T-hjelpeceller (CD4+) i immunsystemet. Forklar hvorfor dette gjoer HIV saerlig farlig, og hvorfor ubehandlet HIV til slutt foerer til AIDS.',
        hints: ['Tenk paa hva T-hjelpeceller gjoer i immunforsvaret – hva skjer naar de forsvinner?'],
        solution: 'T-hjelpeceller (CD4+) er sentrale i immunforsvaret. De koordinerer immunresponsen ved aa aktivere B-celler (antistoffproduksjon), cytotoksiske T-celler (dreper infiserte celler) og makrofager. Naar HIV infiserer og dreper T-hjelpeceller, svekkes hele immunforsvaret gradvis. Nar antallet T-hjelpeceller faller under et kritisk nivaa (under ca. 200 per μL blod), har pasienten AIDS. Immunsystemet er da saa svekket at kroppen ikke kan bekjempe infeksjoner som friske mennesker lett klarer (opportunistiske infeksjoner). Pasienten doer altsaa ikke av HIV direkte, men av andre infeksjoner og kreftsykdommer som immunsystemet ikke lenger kan holde i sjakk.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kapsid', definition: 'Proteinskallet som omgir virusets arvemateriale' },
    { term: 'Kappe (konvolutt)', definition: 'Lipidmembran rundt noen virus, hentet fra vertscellen' },
    { term: 'Lytisk syklus', definition: 'Virusvermering som ender med at vertscellen sprekker' },
    { term: 'Lysogen syklus', definition: 'Virusets DNA integreres i vertens kromosom og forblir latent' },
    { term: 'Profag', definition: 'Virusets DNA naar det er integrert i vertscellens kromosom' },
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
    'gjore rede for hva antibiotika er og hvordan det virker',
    'forklare ulike virkemater for antibiotika',
    'beskrive forskjellen mellom bredspektret og smalspektret antibiotika',
    'argumentere for riktig bruk av antibiotika',
  ],
  content: [
    {
      id: 'bio1-6-4-intro',
      type: 'text',
      content: `# Antibiotika – virkemate og bruk

Antibiotika er blant de viktigste medisinske oppdagelsene i historien. Foer antibiotika var selv en enkel saarinfeksjon potensielt doedelig. I dag kan vi behandle de fleste bakterielle infeksjoner effektivt – men denne evnen er truet av antibiotikaresistens.

I dette kapittelet laerer du om hvordan antibiotika ble oppdaget, hvordan ulike typer antibiotika virker, og hvorfor det er saa viktig aa bruke antibiotika riktig.

## En revolusjon i medisin

Foer antibiotika ble tatt i bruk paa 1940-tallet, var bakterielle infeksjoner den vanligste doedsaarsaken. Lungebetennelse, tuberkulose, blodforgiftning og saarinfeksjoner tok millioner av liv hvert aar. Oppdagelsen av antibiotika forandret dette fullstendig.`,
    },
    {
      id: 'bio1-6-4-def-1',
      type: 'definition',
      title: 'Antibiotika',
      content: 'Antibiotika er legemidler som dreper bakterier (baktericide) eller hemmer bakterievekst (bakteriostatiske). Antibiotika virker ved aa angripe strukturer eller prosesser som er spesifikke for bakterier, slik at kroppens egne celler ikke skades. Antibiotika virker IKKE mot virus.',
    },
    {
      id: 'bio1-6-4-historie',
      type: 'text',
      content: `## Historien om antibiotika

### Alexander Flemings oppdagelse (1928)

Den skotske bakteriologen Alexander Fleming gjorde en av medisinhistoriens viktigste oppdagelser – delvis ved en tilfeldighet.

**Hva skjedde:**
1. Fleming dro paa ferie og glemte aa rydde bort noen bakteriekulturer (stafylokokker)
2. Da han kom tilbake, oppdaget han at en muggsopp (*Penicillium notatum*) hadde forurenset en av skaelene
3. Rundt muggsoppen var det en sone der bakteriene ikke vokste
4. Fleming innSaa at muggsoppen produserte et stoff som drepte bakterier
5. Han kalte stoffet **penicillin**

### Fra oppdagelse til medisin

Det tok over ti aar foer penicillin ble tilgjengelig som medisin:
- **1928**: Fleming oppdager penicillin
- **1940**: Howard Florey og Ernst Boris Chain renser og konsentrerer penicillin
- **1941**: Foerste kliniske forsoek paa mennesker
- **1943**: Masseproduksjon starter – brukt paa slagmarkene i andre verdenskrig
- **1945**: Fleming, Florey og Chain faar Nobelprisen i medisin

### Penicillinets «gullalper»

Etter krigen ble mange nye typer antibiotika oppdaget. Perioden 1940–1960 kalles antibiotikaalderens «gullalder». Sykdommer som foer var doedelige, kunne naa behandles enkelt.`,
    },
    {
      id: 'bio1-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Flemings tilfeldige oppdagelse',
      content: `Flemings oppdagelse illustrerer at tilfeldigheter kan spille en rolle i vitenskap, men at det ogsaa kreves et forberedt sinn for aa gjenkjenne viktigheten av det man observerer.

**Fleming sa selv:** *«One sometimes finds what one is not looking for.»*

Mange foer ham hadde trolig sett lignende muggsoppvekst paa bakteriekulturer, men ingen hadde stoppet opp og undersoeekt fenomenet naermere. Fleming hadde bakgrunnen og nysgjerrigheten til aa forstaa at dette kunne vaere medisinsk viktig.

**Laerdom:** Vitenskap handler ikke bare om planlagte eksperimenter, men ogsa om aa vaere oppmerksom paa uventede observasjoner og forfolgee dem videre.`,
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
          { id: 'c', text: 'At bakterier kan overfoere gener seg imellom', isCorrect: false },
          { id: 'd', text: 'At immunsystemet produserer antistoffer mot bakterier', isCorrect: false },
        ],
        solution: 'Fleming oppdaget at muggsoppen Penicillium notatum produserte et stoff som hemmet veksten av stafylokokk-bakterier. Han kalte stoffet penicillin. Dette ble utgangspunktet for det foerste antibiotikumet, men det tok over ti aar foer Florey og Chain klarte aa rense og masseprodusere penicillin til klinisk bruk.',
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
- Hindrer bakterien i aa bygge opp celleveggen (peptidoglykan)
- Bakterien sprekker paa grunn av osmotisk trykk
- Menneskeceller har ikke cellevegg og paavirkes ikke

**2. Hemmer proteinsyntese**
- Eksempel: Tetracyklin, erytromycin, gentamicin
- Binder til bakterielle ribosomer (70S) og stopper proteinproduksjonen
- Menneskelige ribosomer (80S) paavirkes ikke

**3. Hemmer DNA-replikasjon eller -reparasjon**
- Eksempel: Fluorokinoloner (ciprofloksacin)
- Blokkerer enzymer som er nodvendige for aa kopiere eller reparere bakteriens DNA

**4. Hemmer folsyresyntese**
- Eksempel: Sulfonamider, trimetoprim
- Bakterier maa lage sin egen folsyre (vitamin B9), mens mennesker faar det gjennom kosten
- Uten folsyre kan ikke bakterien lage DNA

**5. Oedelegger cellemembranens funksjon**
- Eksempel: Polymyksiner
- Forstyrrer bakteriens plasmamembran saa den lekker`,
    },
    {
      id: 'bio1-6-4-def-2',
      type: 'definition',
      title: 'Selektiv toksisitet',
      content: 'Selektiv toksisitet betyr at et legemiddel (som antibiotika) skader maalorganismen (bakterien) uten aa skade verten (mennesket). Dette er mulig fordi bakterier har strukturer og prosesser som er forskjellige fra menneskecellene – for eksempel cellevegg (peptidoglykan) og 70S-ribosomer. Jo stoerre forskjellen er mellom bakterie- og menneskecelle, jo bedre selektiv toksisitet.',
    },
    {
      id: 'bio1-6-4-example-2',
      type: 'example',
      title: 'Eksempel: Hvorfor virker penicillin?',
      problem: 'Forklar trinn for trinn hvorfor penicillin dreper bakterier, men ikke skader menneskeceller.',
      solution: `**Svar:**

**Penicillinets virkemate:**
1. Penicillin binder til enzymet **transpeptidase** (ogsa kalt penicillinbindende protein, PBP)
2. Transpeptidase er ansvarlig for aa tverrbinde peptidoglykantrader i celleveggen
3. Naar transpeptidase blokkeres, kan bakterien ikke bygge ny cellevegg
4. Bakterien fortsetter aa vokse, men celleveggen svekkes
5. Osmotisk trykk faar vannet til aa stroemme inn i cellen
6. Uten en sterk cellevegg svulmer cellen opp og sprekker (**lysis**)

**Hvorfor skades ikke menneskeceller?**
Menneskeceller har **ingen cellevegg** og dermed heller ingen peptidoglykan eller transpeptidase. Penicillin har ingen virkning paa menneskeceller – dette er et godt eksempel paa selektiv toksisitet.`,
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
          { id: 'b', text: 'Fordi virus er for smaa til at antibiotika kan naa dem', isCorrect: false },
          { id: 'c', text: 'Fordi virus har allerede utviklet resistens mot alle antibiotika', isCorrect: false },
          { id: 'd', text: 'Fordi antibiotika bare virker i blodet, og virus befinner seg i cellene', isCorrect: false },
        ],
        solution: 'Antibiotika angriper spesifikke strukturer i bakterier: cellevegg (peptidoglykan), 70S-ribosomer, bakterielle enzymer osv. Virus har INGEN av disse strukturene – de har verken cellevegg, ribosomer eller egen metabolisme. Derfor har antibiotika ingenting aa angripe i et virus. Mot virusinfeksjoner brukes i stedet antivirale legemidler som angriper virusets egne prosesser (f.eks. replikasjon av virus-DNA/RNA).',
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
- **Ulempe**: Krever at legen vet hvilken bakterie som foraarsaker infeksjonen

### Bredspektret antibiotika
- Virker mot **mange forskjellige** bakteriearter (baade gram-positive og gram-negative)
- Eksempel: Amoksicillin, tetracyklin, ciprofloksacin
- **Fordel**: Kan brukes naar man ikke vet noyaktig hvilken bakterie det er
- **Ulempe**: Dreper ogsa mye av normalfloraen, stoerre risiko for resistensutvikling

### Riktig bruk av antibiotika

For aa bevare antibiotikaenes effekt er det viktig aa foelge disse reglene:

1. **Bruk antibiotika bare naar legen foreskriver det** – ikke for virusinfeksjoner
2. **Fullfloer hele kuren** – selv om du foeler deg frisk etter noen dager
3. **Ikke del antibiotika med andre** – dosen er tilpasset deg
4. **Ikke bruk antibiotika «i reserve»** fra tidligere behandlinger
5. **Ikke krev antibiotika for forkjoelelse eller influensa** – dette er virusinfeksjoner`,
    },
    {
      id: 'bio1-6-4-def-3',
      type: 'definition',
      title: 'Bredspektret antibiotika',
      content: 'Bredspektret antibiotika er legemidler som virker mot mange ulike bakteriearter, baade gram-positive og gram-negative. De brukes naar man ikke vet noyaktig hvilken bakterie som foraarsaker infeksjonen. Ulempen er at de ogsa dreper normalflorabakterier og bidrar til oeekt risiko for antibiotikaresistens. Smalspektret antibiotika virker mot faerre arter og er aa foretrekke naar bakterien er identifisert.',
    },
    {
      id: 'bio1-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom bredspektret og smalspektret antibiotika. Naar er det mest hensiktsmessig aa bruke smalspektret antibiotika?',
        hints: ['Tenk paa fordeler og ulemper for baade pasienten og for antibiotikaresistens.'],
        solution: 'Bredspektret antibiotika virker mot mange ulike bakteriearter (baade gram-positive og gram-negative), mens smalspektret antibiotika virker mot et begrenset utvalg. Smalspektret antibiotika er mest hensiktsmessig naar legen har identifisert hvilken bakterie som foraarsaker infeksjonen (f.eks. ved hjelp av dyrking og resistensbestemmelse). Fordelen med smalspektret antibiotika er at det skaaner normalfloraen (ferre bivirkninger som diaré) og reduserer risikoen for resistensutvikling. Bredspektret brukes naar man ennaa ikke vet hvilken bakterie det er, eller naar infeksjonen er alvorlig og man maa starte behandling raskt.',
      },
    },
    {
      id: 'bio1-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'En pasient med forkjoelelse ber legen om antibiotika. Forklar hvorfor legen boer si nei, og hva pasienten heller boer gjoere.',
        hints: ['Hva foraarsaker forkjoelelse – bakterier eller virus?'],
        solution: 'Legen boer si nei fordi forkjoelelse foraarsakes av virus (rhinovirus, koronavirus o.a.), og antibiotika virker bare mot bakterier. Aa ta antibiotika mot virusinfeksjon har ingen effekt paa sykdommen, men kan gi bivirkninger (som diaré og soppinfeksjon) og bidra til antibiotikaresistens. Pasienten boer i stedet hvile, drikke nok vaeske, og eventuelt bruke smertestillende/febernedsettende midler (paracetamol/ibuprofen). Forkjoelelse gaar over av seg selv i loepet av 1–2 uker.',
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
- Bredspektret antibiotika virker mot mange arter men dreper ogsa normalfloraen
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
          { id: 'c', text: 'Hemmer bakteriens ribosomer saa proteinsyntesen stopper', isCorrect: false },
          { id: 'd', text: 'Hindrer bakterien i aa ta opp naering', isCorrect: false },
        ],
        solution: 'Penicillin hemmer celleveggsyntesen ved aa binde til enzymet transpeptidase (PBP), som er ansvarlig for aa tverrbinde peptidoglykantrader. Uten en intakt cellevegg kan bakterien ikke motstaa det osmotiske trykket, og den svulmer opp og sprekker (lysis). Menneskeceller har ingen cellevegg, saa penicillin er ufarlig for oss.',
      },
    },
    {
      id: 'bio1-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Droeft paastaanden: «Det er ikke farlig aa slutte med antibiotikakuren naar man foeler seg frisk.» Forklar hvorfor det er viktig aa fullfloere hele kuren.',
        hints: ['Tenk paa hva som skjer med bakteriene som ennaa er igjen naar man slutter for tidlig.'],
        solution: 'Paastaanden er feil og kan vaere farlig. Naar man foeler seg frisk, betyr det at immunsystemet og antibiotika har redusert bakteriemengden kraftig, men det kan fortsatt vaere bakterier igjen. Hvis man slutter for tidlig, kan de gjenvaerende bakteriene – som kanskje er de mest motstandsdyktige – overleve, formere seg og foraarsake ny infeksjon. I tillegg oeker risikoen for resistensutvikling: de bakteriene som overlevde den ufullstendige behandlingen, kan vaere delvis resistente. Ved aa fullfloere kuren sikrer man at alle bakteriene drepes, noe som reduserer baade risiko for tilbakefall og for resistensutvikling.',
      },
    },
    {
      id: 'bio1-6-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'Lag en oversikt over fire ulike virkemater for antibiotika. For hver virkemate, nevn maalet i bakterien og gi ett eksempel paa et antibiotikum.',
        hints: ['De fire vanligste: celleveggsyntese, proteinsyntese, DNA-replikasjon og folsyresyntese.'],
        solution: '1) Hemmer celleveggsyntese – maal: transpeptidase/peptidoglykan – eksempel: penicillin. 2) Hemmer proteinsyntese – maal: 70S-ribosomer – eksempel: tetracyklin. 3) Hemmer DNA-replikasjon – maal: DNA-gyrase – eksempel: ciprofloksacin (fluorokinolon). 4) Hemmer folsyresyntese – maal: enzymer for folsyreproduksjon – eksempel: trimetoprim. Alle disse virker fordi de angriper strukturer/prosesser som er forskjellige fra de tilsvarende i menneskeceller (selektiv toksisitet).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Antibiotika', definition: 'Legemidler som dreper eller hemmer vekst av bakterier' },
    { term: 'Selektiv toksisitet', definition: 'At et legemiddel skader bakterier uten aa skade menneskeceller' },
    { term: 'Penicillin', definition: 'Det foerste antibiotikumet, oppdaget av Fleming i 1928' },
    { term: 'Baktericid', definition: 'Antibiotikum som dreper bakterier' },
    { term: 'Bakteriostatisk', definition: 'Antibiotikum som hemmer bakterievekst uten aa drepe dem' },
    { term: 'Bredspektret', definition: 'Antibiotika som virker mot mange ulike bakteriearter' },
    { term: 'Smalspektret', definition: 'Antibiotika som virker mot faa, spesifikke bakteriearter' },
  ],
};

// ============================================================================
// Kapittel 6.5: Antibiotikaresistens – aarsaker, konsekvenser og tiltak
// ============================================================================

export const CHAPTER_BIOLOGI_1_6_5: TextbookChapter = {
  id: 'biologi-1-6-5',
  courseId: 'biologi-1',
  chapterNumber: '6.5',
  title: 'Antibiotikaresistens – aarsaker, konsekvenser og tiltak',
  description: 'Mekanismer bak antibiotikaresistens, MRSA, horisontal genoverfoering, og globale og norske tiltak mot resistens.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for hva antibiotikaresistens er og hvordan det oppstaar',
    'forklare mekanismene for horisontal genoverfoering hos bakterier',
    'beskrive konsekvensene av antibiotikaresistens for folkehelsen',
    'drofte globale og norske tiltak mot antibiotikaresistens',
  ],
  content: [
    {
      id: 'bio1-6-5-intro',
      type: 'text',
      content: `# Antibiotikaresistens – aarsaker, konsekvenser og tiltak

Antibiotikaresistens regnes av Verdens helseorganisasjon (WHO) som en av de stoerste truslene mot global folkehelse. Bakterier som er resistente mot antibiotika, kan ikke behandles paa vanlig maate, og infeksjoner som vi i dag behandler enkelt, kan igjen bli doedelige.

I dette kapittelet laerer du om hvordan resistens oppstaar, hvordan bakterier sprer resistensgener, og hva vi kan gjoere for aa bremse utviklingen.

## Problemets omfang

- I 2019 doede anslagsvis **1,27 millioner mennesker** direkte av infeksjoner med antibiotikaresistente bakterier globalt
- Uten tiltak kan antibiotikaresistens foraarsake **10 millioner doedsfall per aar** innen 2050
- Utviklingen av nye antibiotika har naesten stoppet opp – det er for lite loennsomt for legemiddelselskapene`,
    },
    {
      id: 'bio1-6-5-def-1',
      type: 'definition',
      title: 'Antibiotikaresistens',
      content: 'Antibiotikaresistens betyr at bakterier har utviklet evnen til aa overleve i naevaeret av antibiotika som normalt ville drept dem eller hemmet veksten deres. Resistens oppstaar gjennom genetiske endringer (mutasjoner) eller ved at bakterier mottar resistensgener fra andre bakterier (horisontal genoverfoering). Resistens er et naturlig biologisk fenomen som akselereres kraftig av overforbruk og feilbruk av antibiotika.',
    },
    {
      id: 'bio1-6-5-evolusjon',
      type: 'text',
      content: `## Hvordan oppstaar antibiotikaresistens?

Antibiotikaresistens er et eksempel paa **naturlig utvalg** (evolusjon) i praksis:

### Trinn for trinn

1. **Variasjon**: I en bakteriepopulasjon finnes det naturlig variasjon. Noen faa bakterier kan ha mutasjoner som gir dem en viss motstandsdyktighet mot antibiotika.

2. **Seleksjon**: Naar antibiotika tilfoeres, drepes de fleste bakteriene. Men de faa som har resistensmutasjoner, overlever.

3. **Formering**: De overlevende resistente bakteriene har naa lite konkurranse og rikelig med naeringsstoffer. De formerer seg raskt.

4. **Dominans**: Etter kort tid bestaar hele populasjonen av resistente bakterier.

### Viktig: Antibiotika skaper ikke resistens

Et vanlig missforstaaelse er at antibiotika «foraarsaker» resistens. I virkeligheten **selekterer** antibiotika for allerede eksisterende resistente varianter. Resistensmutasjoner oppstaar tilfeldig og uavhengig av antibiotika. Men antibiotika gir de resistente bakteriene en enorm fordel, slik at de overtar populasjonen.`,
    },
    {
      id: 'bio1-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Naturlig utvalg og antibiotikaresistens',
      content: `**Tenk deg en bakteriepopulasjon:**

- 1 000 000 bakterier i en infeksjon
- 999 990 er foelsome for antibiotika (blaa)
- 10 har en tilfeldig mutasjon som gir resistens (roede)

**Foer antibiotika:**
De 10 resistente bakteriene har ingen fordel – de vokser like raskt som de andre.

**Under antibiotika-behandling:**
- 999 990 foelsome bakterier dreper → pasienten foeler seg bedre
- 10 resistente bakterier overlever og begynner aa formere seg

**Etter ufullstendig behandling:**
- De 10 resistente bakteriene formerer seg eksponentielt
- Etter noen dager: millioner av resistente bakterier
- Samme antibiotikum virker ikke lenger

**Laerdom:** Det er viktig aa fullfloere antibiotikakaur for aa drepe ALLE bakterier, inkludert de faa som er delvis resistente.`,
    },
    {
      id: 'bio1-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er riktig om hvordan antibiotikaresistens oppstaar?',
        options: [
          { id: 'a', text: 'Resistensmutasjoner oppstaar tilfeldig, og antibiotika selekterer for de resistente bakteriene', isCorrect: true },
          { id: 'b', text: 'Antibiotika foraarsaker mutasjoner i bakterienes DNA som gjoer dem resistente', isCorrect: false },
          { id: 'c', text: 'Bakterier laerer aa motstaa antibiotika etter gjentatt eksponering', isCorrect: false },
          { id: 'd', text: 'Resistens oppstaar bare i sykehus og aldri i naturen', isCorrect: false },
        ],
        solution: 'Resistensmutasjoner oppstaar tilfeldig og uavhengig av antibiotika – de finnes i populasjonen foer behandling starter. Naar antibiotika tilfoeres, drepes de foelsome bakteriene, men de resistente overlever og formerer seg. Dette er naturlig utvalg (evolusjon) i aksjon. Antibiotika «skaper» altsaa ikke resistens, men selekterer for resistente varianter.',
      },
    },
    {
      id: 'bio1-6-5-mekanismer',
      type: 'text',
      content: `## Resistensmekanismer

Bakterier kan vaere resistente mot antibiotika paa flere maater:

### 1. Enzymatisk nedbrytning
Bakterien produserer enzymer som bryter ned antibiotikumet. Eksempel: **beta-laktamaser** klipper opp penicillinets kjemiske struktur slik at det ikke virker.

### 2. Endret maalmolekyl
Bakterien endrer proteinet som antibiotikumet normalt binder til, slik at antibiotikumet ikke lenger fester seg. Eksempel: Endret transpeptidase (PBP) hos MRSA.

### 3. Utpumping (efflukspumper)
Bakterien har proteiner i cellemembranen som aktivt pumper antibiotikumet ut av cellen foer det rekker aa virke.

### 4. Redusert opptak
Bakterien endrer poriner (proteinkanaler) i den ytre membranen slik at antibiotikumet ikke kommer inn.

### 5. Alternativ metabolsk vei
Bakterien utvikler en alternativ biokjemisk vei som omgaar det steget antibiotikumet blokkerer.`,
    },
    {
      id: 'bio1-6-5-def-2',
      type: 'definition',
      title: 'Horisontal genoverfoering',
      content: 'Horisontal genoverfoering er overfoering av genetisk materiale mellom bakterier som ikke er forelder og avkom. I motsetning til vertikal genoverfoering (fra mor til datter ved celledeling), kan horisontal genoverfoering spree gener – inkludert resistensgener – mellom ubeslektede bakteriearter. De tre hovedmekanismene er konjugasjon, transformasjon og transduksjon.',
    },
    {
      id: 'bio1-6-5-horisontal',
      type: 'text',
      content: `## Horisontal genoverfoering – slik sprer resistens seg

Det som gjoer antibiotikaresistens saerlig farlig, er at resistensgener kan spres mellom bakterier – ogsa mellom helt ulike arter. Dette skjer gjennom tre hovedmekanismer:

### 1. Konjugasjon («bakteriell sex»)
- To bakterier kobles sammen gjennom en **pilus** (sexpilus)
- Et **plasmid** med resistensgener kopieres og overfoeres til mottakerbakterien
- Svært effektiv spredning – kan skje mellom ulike arter
- Viktigste mekanisme for spredning av resistensgener

### 2. Transformasjon (opptak av fritt DNA)
- En bakterie tar opp fritt DNA fra miljoet (fra doede bakterier)
- Hvis DNA-et inneholder resistensgener, kan bakterien bli resistent
- Skjer naturlig hos noen bakteriearter

### 3. Transduksjon (virusmidlet overfoering)
- En **bakteriofag** (bakterievirus) infiserer en bakterie
- Ved et uhell pakkes bakteriens DNA (inkl. resistensgener) inn i nye viruspartikler
- Naar disse virusene infiserer en ny bakterie, overfoeres resistensgenene
- Kan spree resistens mellom ubeslektede bakterier`,
    },
    {
      id: 'bio1-6-5-example-2',
      type: 'example',
      title: 'Eksempel: Konjugasjon – plasmidoverfoering mellom bakterier',
      problem: 'Forklar hvordan et resistensgen kan spree seg fra en resistent E. coli-bakterie til en foelsom Salmonella-bakterie.',
      solution: `**Svar:**

1. En **E. coli**-bakterie har et **plasmid** som baerer et gen for antibiotikaresistens (f.eks. et gen for beta-laktamase)
2. E. coli danner en **sexpilus** som fester seg til en naevarende **Salmonella**-bakterie
3. Gjennom pilus dannes en **konjugasjonskanal** mellom de to cellene
4. Plasmidet kopieres og en kopi overfoeres til Salmonella-cellen
5. Salmonella har naa resistensgenet og kan produsere beta-laktamase
6. Salmonella er naa **resistent mot penicillin**

**Viktig:** Dette viser at resistens ikke bare spres ved celledeling (vertikalt), men ogsa mellom helt ulike bakteriearter (horisontalt). Eén resistent bakterie kan gjoere mange andre arter resistente.`,
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
          { id: 'b', text: 'Opptak av fritt DNA fra miljoet', isCorrect: false },
          { id: 'c', text: 'Overfoering av DNA via bakteriofager', isCorrect: false },
          { id: 'd', text: 'Binaer fisjon der en bakterie deler seg i to', isCorrect: false },
        ],
        solution: 'Konjugasjon er overfoering av genetisk materiale (vanligvis et plasmid) fra en donorbakterie til en mottakerbakterie gjennom en sexpilus. Dette er den viktigste mekanismen for horisontal spredning av resistensgener. Alternativ b (transformasjon) er opptak av fritt DNA fra miljoet, og alternativ c (transduksjon) er DNA-overfoering via bakteriofager.',
      },
    },
    {
      id: 'bio1-6-5-mrsa',
      type: 'text',
      content: `## MRSA og andre resistente bakterier

### MRSA – meticillinresistent Staphylococcus aureus

MRSA er kanskje den mest kjente resistente bakterien:

- *Staphylococcus aureus* er en vanlig bakterie som finnes paa huden hos ca. 30 % av befolkningen
- MRSA har ervervet genet **mecA**, som koder for et endret penicillinbindende protein (PBP2a)
- PBP2a binder ikke penicillin eller andre beta-laktam-antibiotika
- Dermed er MRSA resistent mot nesten alle penicilliner og cefalosporiner
- MRSA-infeksjoner maa behandles med andre (ofte dyrere og mer toksiske) antibiotika

### Andre resistente bakterier

- **VRE** (vankomycinresistente enterokokker) – resistent mot «siste utvei»-antibiotikumet vankomycin
- **ESBL-produserende bakterier** – gram-negative bakterier med enzymer som bryter ned bredspektrede antibiotika
- **Multiresistent tuberkulose (MDR-TB)** – resistent mot de to viktigste tuberkulosemedisinene
- **Karbapenemresistente Enterobacterales (CRE)** – resistente mot karbapenemer, som er blant de sterkeste antibiotika vi har

### «Superbakterier»

Bakterier som er resistente mot naer sagt alle tilgjengelige antibiotika, kalles noen ganger «superbakterier». I verste fall finnes det ingen effektiv behandling, og vi er tilbake til tilstander som foer antibiotikas tid.`,
    },
    {
      id: 'bio1-6-5-def-3',
      type: 'definition',
      title: 'MRSA',
      content: 'MRSA (meticillinresistent Staphylococcus aureus) er en variant av den vanlige hudbakterien S. aureus som er resistent mot beta-laktam-antibiotika (penicilliner og cefalosporiner). Resistensen skyldes genet mecA, som koder for et endret penicillinbindende protein. MRSA er et alvorlig problem paa sykehus og sykehjem, der saarbare pasienter kan faa vanskelig behandlbare infeksjoner.',
    },
    {
      id: 'bio1-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor MRSA er vanskelig aa behandle, og beskriv mekanismen som gjoer bakterien resistent mot penicilliner.',
        hints: ['Stikkord: mecA-genet, endret penicillinbindende protein (PBP2a), beta-laktam.'],
        solution: 'MRSA har ervervet genet mecA som koder for et endret penicillinbindende protein kalt PBP2a. Normalt binder penicillin til PBP (transpeptidase) og blokkerer celleveggsyntesen. Men PBP2a har en annerledes form slik at penicillin ikke kan binde seg til det. Dermed kan MRSA bygge cellevegg selv i naevaeret av penicillin og andre beta-laktam-antibiotika. Dette gjoer MRSA resistent mot en hel klasse antibiotika (penicilliner og cefalosporiner) som normalt er foerstevalgbehandling for stafylokokkinfeksjoner. Behandling maa i stedet bruke dyrere og mer toksiske alternativer som vankomycin.',
      },
    },
    {
      id: 'bio1-6-5-tiltak',
      type: 'text',
      content: `## Globale og norske tiltak mot antibiotikaresistens

### One Health – en samlet tilnaerming

Antibiotikaresistens er et problem som krysser grenser mellom mennesker, dyr og miljo. **One Health**-tilnaermingen anerkjenner at:

- Resistente bakterier kan spree seg mellom mennesker og dyr
- Antibiotikabruk i landbruket bidrar til resistensutvikling
- Resistensgener finnes i miljoet (jord, vann)
- Effektive tiltak maa adressere alle tre omraadene samtidig

### Globale tiltak
1. **Redusere unodvendig antibiotikabruk** – baade hos mennesker og i landbruket
2. **Bedre diagnostikk** – raskere identifisering av bakterier slik at smalspektret antibiotika kan brukes
3. **Forskning paa nye antibiotika** – oekonomiske insentiver for legemiddelselskaper
4. **Vaksineutvikling** – forebygge infeksjoner saa antibiotika ikke trengs
5. **Bedre hygiene og smittevern** – hindre spredning av resistente bakterier

### Norges strategi

Norge har et av verdens laveste forbruk av antibiotika og relativt lite resistens sammenlignet med mange andre land. Norske tiltak inkluderer:

- **Nasjonal strategi mot antibiotikaresistens (2015–2020, forlenget)** – maal om 30 % reduksjon i antibiotikabruk
- **NORM/NORM-VET** – overvaakingsprogrammer for resistens hos mennesker og dyr
- **Restriktiv forskrivning** – leger oppfordres til aa bruke smalspektret antibiotika
- **Forbud mot vekstfremmende antibiotika** i husdyrproduksjon (Norge var tidlig ute)
- **Smitteverntiltak paa sykehus** – screening for MRSA, isolering av baerera

### Hvorfor Norge lykkes bedre

- Lav befolkningstetthet
- Godt utbygd helsevesen med god tilgang til diagnostikk
- Tradisjon for restriktiv antibiotikaforskrivning
- Strengt regulert landbruk med lavt antibiotikaforbruk
- Hoey tillit til helsemyndighetenes raad`,
    },
    {
      id: 'bio1-6-5-example-3',
      type: 'example',
      title: 'Eksempel: Antibiotikabruk i landbruket – et globalt problem',
      content: `I mange land brukes antibiotika i enorme mengder i husdyrproduksjon – ikke bare for aa behandle syke dyr, men ogsa som **vekstfremmere** (for aa faa dyrene til aa vokse raskere).

**Stoerrelsen paa problemet:**
- Globalt gaar ca. **73 % av all antibiotika** til husdyr, ikke til mennesker
- I noen land tilsettes antibiotika rutinemessig i foerikr
- Resistente bakterier fra dyr kan overfoeres til mennesker gjennom mat, direkte kontakt eller miljoet

**Norsk tilnaerming:**
- Norge forboed vekstfremmende antibiotika i 1995
- Norske bonder bruker ca. 90 % mindre antibiotika enn mange europeiske land
- Likevel: gjennom importert mat og reisevirksomhet kan resistente bakterier komme til Norge

**Laerdom:** Kampen mot antibiotikaresistens er global – det hjelper lite om Norge er flinke dersom andre land fortsetter med hoert forbruk.`,
    },
    {
      id: 'bio1-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er One Health-tilnaermingen til antibiotikaresistens?',
        options: [
          { id: 'a', text: 'En tilnaerming som ser paa sammenhengen mellom helse hos mennesker, dyr og miljo', isCorrect: true },
          { id: 'b', text: 'Et nytt antibiotikum som virker mot alle typer bakterier', isCorrect: false },
          { id: 'c', text: 'En vaksine som beskytter mot alle resistente bakterier', isCorrect: false },
          { id: 'd', text: 'En metode for aa teste antibiotikaresistens i laboratoriet', isCorrect: false },
        ],
        solution: 'One Health er en tilnaerming som anerkjenner at helsen til mennesker, dyr og miljo henger sammen. For antibiotikaresistens betyr dette at tiltak maa rettes mot alle tre omraadene: redusere antibiotikabruk baade hos mennesker og i landbruket, overvake resistens i miljoet, og hindre spredning av resistente bakterier mellom mennesker, dyr og miljo.',
      },
    },
    {
      id: 'bio1-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar de tre mekanismene for horisontal genoverfoering (konjugasjon, transformasjon og transduksjon) og beskriv hvorfor horisontal genoverfoering er saerlig farlig for spredning av antibiotikaresistens.',
        hints: ['Tenk paa hvordan horisontal overfoering skiller seg fra vanlig arv (vertikal), og hva det betyr at resistensgener kan sprees mellom ULIKE arter.'],
        solution: 'Konjugasjon: En bakterie overfører et plasmid (med resistensgener) til en annen bakterie gjennom en sexpilus. Transformasjon: En bakterie tar opp fritt DNA fra miljoet, f.eks. fra doede bakterier. Transduksjon: En bakteriofag (virus) overforer DNA fra en bakterie til en annen. Horisontal genoverfoering er saerlig farlig fordi resistensgener kan sprees mellom ULIKE bakteriearter – ikke bare fra forelder til avkom. Det betyr at en resistent tarmbakterie kan overfoere resistensgener til en sykdomsfremkallende bakterie av en helt annen art. Paa denne maaten kan resistens sprees raskt gjennom et helt bakteriesamfunn.',
      },
    },
    {
      id: 'bio1-6-5-summary',
      type: 'text',
      content: `## Oppsummering

- Antibiotikaresistens oppstaar gjennom naturlig utvalg: antibiotika selekterer for allerede resistente bakterier
- Resistensmekanismer: enzymatisk nedbrytning, endret maalmolekyl, efflukspumper, redusert opptak
- Horisontal genoverfoering (konjugasjon, transformasjon, transduksjon) sprer resistensgener mellom arter
- MRSA, VRE, ESBL og MDR-TB er eksempler paa farlige resistente bakterier
- One Health-tilnaermingen ser menneske-, dyre- og miljoehelse i sammenheng
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
        task: 'Droeft paastanden: «Antibiotikaresistens er et evolusjonaert problem som ikke kan loeses med mer antibiotika.» Bruk begreper som naturlig utvalg, mutasjon, seleksjon og horisontal genoverfoering i svaret.',
        hints: ['Tenk paa at jo mer antibiotika vi bruker, jo staerkere er seleksjonstrykket for resistens.'],
        solution: 'Paastaanden er i stor grad riktig. Antibiotikaresistens er et evolusjonaert fenomen drevet av naturlig utvalg: naar antibiotika er til stede, har bakterier med resistensmutasjoner en enorm seleksjonsfordel og overlever mens foelsome bakterier doer. Jo mer antibiotika vi bruker, jo staerkere er dette seleksjonstrykket. I tillegg kan resistensgener sprees raskt gjennom horisontal genoverfoering (konjugasjon, transformasjon, transduksjon) – ogsa mellom ulike bakteriearter. Aa utvikle flere antibiotika er viktig som midlertidig loesning, men det loser ikke grunnproblemet: bakterier vil alltid utvikle resistens mot nye antibiotika gjennom mutasjoner og naturlig utvalg. Derfor maa vi ogsa satse paa forebygging (vaksiner, hygiene), redusert antibiotikabruk og alternativ forskning (f.eks. fagterapi, antimikrobielle peptider).',
      },
    },
    {
      id: 'bio1-6-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'bio1-6-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Norge har et av verdens laveste antibiotikaforbruk. Forklar minst tre grunner til dette, og droeft om Norge likevel kan bli paavirket av antibiotikaresistens fra andre land.',
        hints: ['Tenk paa reiser, matimport og bakterienes evne til aa spree seg globalt.'],
        solution: 'Tre grunner til lavt norsk forbruk: 1) Streng forskrivningspraksis – norske leger er opplaert til aa bruke smalspektret antibiotika og unngaa unodvendig forskrivning. 2) Forbud mot vekstfremmende antibiotika i landbruket siden 1995, noe som har redusert resistensutvikling hos husdyr drastisk. 3) Gode overvaakingsprogrammer (NORM/NORM-VET) som overvaker resistensnivaaer og gir tidlig varsling. Norge kan likevel bli paavirket fordi: 1) Nordmenn reiser mye og kan bringe med seg resistente bakterier hjem (saerlig fra land med hoert antibiotikaforbruk). 2) Import av mat fra land med stoerre antibiotikabruk i landbruket kan introdusere resistente bakterier. 3) Bakterier kjenner ingen landegrenser – resistensgener kan sprees gjennom migrasjon, handel og miljoet. Antibiotikaresistens er derfor et globalt problem som krever internasjonalt samarbeid.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Antibiotikaresistens', definition: 'Bakteriers evne til aa overleve i naevaeret av antibiotika' },
    { term: 'Horisontal genoverfoering', definition: 'Overfoering av genetisk materiale mellom ubeslektede bakterier' },
    { term: 'Konjugasjon', definition: 'Overfoering av plasmid via sexpilus mellom bakterier' },
    { term: 'Transformasjon', definition: 'Bakteriers opptak av fritt DNA fra miljoet' },
    { term: 'Transduksjon', definition: 'DNA-overfoering mellom bakterier via bakteriofager' },
    { term: 'MRSA', definition: 'Meticillinresistent Staphylococcus aureus – resistent mot beta-laktam-antibiotika' },
    { term: 'One Health', definition: 'Tilnaerming som ser menneske-, dyre- og miljoehelse i sammenheng' },
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
