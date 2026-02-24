/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geografi VG1/VG2 - Del 6: Byer og urbanisering
 *
 * Dekker LK20-kompetansemaal for geografi
 * Delkapitler 6.1 - 6.6
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Urbanisering – drivkrefter og prosesser
// ============================================================================

export const CHAPTER_GEOGRAFI_6_1: TextbookChapter = {
  id: 'geografi-1-6-1',
  courseId: 'geografi',
  chapterNumber: '6.1',
  title: 'Urbanisering – drivkrefter og prosesser',
  description: 'Hva urbanisering er, hvordan den har utviklet seg historisk, og hvilke faktorer som driver flytting fra bygd til by.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for urbanisering og drøfte årsaker til og konsekvenser av denne utviklingen',
    'utforske sammenhengen mellom befolkningsutvikling og samfunnsendringer',
  ],
  content: [
    {
      id: 'geo-6-1-intro',
      type: 'text',
      content: `# Urbanisering – drivkrefter og prosesser

I 2007 passerte verden en historisk milepæl: for første gang bodde mer enn halvparten av jordens befolkning i byer. I dag bor omtrent 56 prosent av verdens befolkning i urbane områder, og andelen fortsetter å stige. Denne utviklingen – **urbanisering** – er en av de mest gjennomgripende prosessene i moderne tid.

Urbanisering handler ikke bare om at folk flytter til byer. Det innebærer dyptgripende endringer i økonomi, kultur, miljø og levemåte. For å forstå dagens verden må vi forstå hvorfor og hvordan urbaniseringen skjer.`,
    },
    {
      id: 'geo-6-1-def-urbanisering',
      type: 'definition',
      title: 'Urbanisering',
      content: 'Urbanisering er prosessen der en stadig større andel av befolkningen bor i byer og tettbygde strøk. Begrepet omfatter både den fysiske veksten av byer og den kulturelle og økonomiske omstillingen som følger med.',
    },
    {
      id: 'geo-6-1-historisk',
      type: 'text',
      content: `## Urbanisering i historisk perspektiv

Urbaniseringen har skjedd i flere bølger gjennom historien:

### De første byene (ca. 3500 f.Kr.)
De tidligste byene vokste fram i Mesopotamia, Egypt og Indusdalen. Jordbruksoverskudd gjorde det mulig for noen å drive med håndverk, handel og administrasjon i stedet for matproduksjon.

### Den industrielle revolusjonen (1750–1900)
Urbaniseringen skjøt fart i Europa og Nord-Amerika da fabrikkene trengte arbeidskraft. Byer som London, Manchester og New York vokste eksplosivt. I 1800 bodde bare tre prosent av verdens befolkning i byer – i 1900 var andelen steget til 14 prosent.

### Urbanisering i utviklingsland (1950–i dag)
Etter andre verdenskrig akselererte urbaniseringen i Asia, Afrika og Latin-Amerika. Denne bølgen er langt større i omfang enn den europeiske. I dag skjer mesteparten av den globale byveksten i lav- og mellominntektsland.`,
    },
    {
      id: 'geo-6-1-def-urbaniseringsgrad',
      type: 'definition',
      title: 'Urbaniseringsgrad',
      content: 'Urbaniseringsgrad er andelen av et lands befolkning som bor i byer eller tettbygde strøk, uttrykt i prosent. Land med høy urbaniseringsgrad har typisk over 75 prosent av befolkningen i byer (f.eks. Japan, Brasil, Norge), mens land med lav urbaniseringsgrad kan ha under 30 prosent (f.eks. Burundi, Niger).',
    },
    {
      id: 'geo-6-1-push-pull',
      type: 'text',
      content: `## Push- og pull-faktorer for bygd-til-by-migrasjon

Folk flytter til byer av ulike grunner. Disse kan deles inn i **push-faktorer** (forhold som driver folk vekk fra landsbygda) og **pull-faktorer** (forhold som trekker folk mot byene).

### Push-faktorer (fra bygda)
- **Fattigdom og mangel på arbeid** – begrenset inntektsmuligheter på landsbygda
- **Naturkatastrofer og klimaendringer** – tørke, flom og dårlige avlinger
- **Mangel på tjenester** – dårlig tilgang til utdanning, helsevesen og infrastruktur
- **Konflikter og uroligheter** – krig og usikkerhet driver folk mot byene
- **Mekanisering av jordbruket** – færre jobber i primærnæringene

### Pull-faktorer (til byen)
- **Arbeidsmuligheter** – flere og mer varierte jobber i industri og tjenesteyting
- **Utdanning** – universiteter, høyskoler og fagskoler
- **Helsetjenester** – sykehus og spesialisthelsetjenester
- **Kultur og underholdning** – teater, kino, restauranter, sosiale nettverk
- **Høyere levestandard** – bedre bolig, vann, strøm og sanitær`,
    },
    {
      id: 'geo-6-1-example-pushpull',
      type: 'example',
      title: 'Push og pull i praksis: Lagos, Nigeria',
      problem: 'Forklar hvorfor Lagos i Nigeria vokser med omtrent 3 000 nye innbyggere per dag.',
      solution: `**Push-faktorer fra landsbygda i Nigeria:**
- Utbredt fattigdom og arbeidsledighet i rurale områder
- Konflikter og uroligheter (særlig i nord)
- Tørke og ørkenspredning i Sahel-beltet
- Begrenset tilgang til utdanning og helsetjenester

**Pull-faktorer mot Lagos:**
- Lagos er Nigerias økonomiske hovedstad med mange arbeidsplasser
- Store markeder og handelsmuligheter (også i uformell sektor)
- Universiteter og utdanningsinstitusjoner
- Forestillingen om et bedre liv – «Lagos-drømmen»

Resultatet er at Lagos har vokst fra ca. 1 million innbyggere i 1960 til over 20 millioner i dag, og veksten fortsetter.`,
    },
    {
      id: 'geo-6-1-verdensdeler',
      type: 'text',
      content: `## Urbaniseringsgrad i ulike verdensdeler

Urbaniseringsnivået varierer kraftig mellom verdensdeler:

| Verdensdel | Urbaniseringsgrad (ca.) |
|---|---|
| Nord-Amerika | 83 % |
| Latin-Amerika | 81 % |
| Europa | 75 % |
| Oseania | 68 % |
| Asia | 52 % |
| Afrika | 44 % |

Selv om Afrika og Asia har lavest urbaniseringsgrad, er det her byveksten er raskest. Innen 2050 forventes det at omtrent 68 prosent av verdens befolkning bor i byer, og størsteparten av veksten vil skje i afrikanske og asiatiske byer.

### Viktige trender
- **Latin-Amerika** er svært urbanisert, med megabyer som São Paulo og Mexico City
- **Afrika** gjennomgår den raskeste urbaniseringen i verden
- **Asia** har flest innbyggere i byer i absolutte tall (Kina, India)
- **Europa og Nord-Amerika** har stabilisert seg, med moderate vekstrater`,
    },
    {
      id: 'geo-6-1-konsekvenser',
      type: 'text',
      content: `## Konsekvenser av urbanisering

Urbanisering har både positive og negative sider:

**Positive konsekvenser:**
- Mer effektiv bruk av ressurser og infrastruktur
- Bedre tilgang til utdanning, helse og kultur
- Økonomisk vekst og innovasjon
- Lavere utslipp per innbygger (tettere bebyggelse, kollektivtransport)

**Negative konsekvenser:**
- Press på boliger, transport og infrastruktur
- Luftforurensning og støy
- Sosiale problemer som segregering og kriminalitet
- Tap av jordbruksarealer og naturområder
- Sårbarhet for naturkatastrofer i tettbygde områder`,
    },
  
    {
      id: 'geo-6-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Urbanisering** er prosessen der en stadig stoerre andel av befolkningen bor i byer
- Over halvparten av verdens befolkning bor i dag i byer, og andelen oeker
- Urbanisering drives av **push-faktorer** fra bygda og **pull-faktorer** i byen
- Urbaniseringsgraden varierer sterkt mellom verdensdeler, med Latin-Amerika og Europa hoeyest
- Historisk urbanisering startet med den industrielle revolusjonen i Europa`,
    },
  ],
  exercises: [
    {
      id: 'geo-6-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Omtrent hvor stor andel av verdens befolkning bor i byer i dag?',
      options: [
        { id: 'a', text: 'Ca. 35 prosent', isCorrect: false },
        { id: 'b', text: 'Ca. 56 prosent', isCorrect: true },
        { id: 'c', text: 'Ca. 72 prosent', isCorrect: false },
        { id: 'd', text: 'Ca. 90 prosent', isCorrect: false },
      ],
      solution: 'I dag bor omtrent 56 prosent av verdens befolkning i urbane områder. Andelen har økt jevnt og passerte 50 prosent rundt 2007.',
    },
    {
      id: 'geo-6-1-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken av disse er en typisk push-faktor for urbanisering?',
      options: [
        { id: 'a', text: 'Gode jobbtilbud i byen', isCorrect: false },
        { id: 'b', text: 'Universiteter og utdanningsmuligheter', isCorrect: false },
        { id: 'c', text: 'Mangel på arbeid og tjenester på landsbygda', isCorrect: true },
        { id: 'd', text: 'Kultur- og underholdningstilbud i byen', isCorrect: false },
      ],
      solution: 'Push-faktorer er forhold som driver folk vekk fra landsbygda, som mangel på arbeid og tjenester. De andre alternativene er pull-faktorer som trekker folk mot byene.',
    },
    {
      id: 'geo-6-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor urbaniseringen i Afrika og Asia skiller seg fra den historiske urbaniseringen i Europa.',
      solution: 'Urbaniseringen i Europa skjedde gradvis over 150–200 år, drevet av den industrielle revolusjonen og økonomisk vekst. I Afrika og Asia skjer urbaniseringen mye raskere og i mye større omfang. Den er ofte ikke koblet til tilsvarende industrialisering, noe som betyr at mange flytter til byer uten at det finnes nok formelle arbeidsplasser, boliger eller infrastruktur. Dette fører til vekst av uformelle bosettinger og store sosiale utfordringer.',
    },
    {
      id: 'geo-6-1-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken verdensdel har den raskeste urbaniseringsveksten i dag?',
      options: [
        { id: 'a', text: 'Europa', isCorrect: false },
        { id: 'b', text: 'Nord-Amerika', isCorrect: false },
        { id: 'c', text: 'Afrika', isCorrect: true },
        { id: 'd', text: 'Latin-Amerika', isCorrect: false },
      ],
      solution: 'Afrika gjennomgår den raskeste urbaniseringen i verden. Selv om urbaniseringsgraden fortsatt er relativt lav (ca. 44 %), vokser byene svært raskt. Europa og Nord-Amerika har allerede høy urbaniseringsgrad, men veksten har stabilisert seg.',
    },
    {
      id: 'geo-6-1-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Drøft to positive og to negative konsekvenser av urbanisering.',
      solution: 'Positive konsekvenser: (1) Urbanisering gir bedre tilgang til utdanning, helse og kultur for mange mennesker. (2) Tett bebyggelse gjør det mulig å bruke infrastruktur som kollektivtransport, vann og avløp mer effektivt, noe som kan gi lavere utslipp per innbygger. Negative konsekvenser: (1) Rask byvekst legger press på boliger og infrastruktur, og kan føre til slum og dårlige levekår. (2) Urbanisering fører til tap av jordbruksarealer og naturområder rundt byene, og økt forurensning av luft og vann.',
    },
  ],
};

// ============================================================================
// Kapittel 6.2: Byers funksjon og struktur
// ============================================================================

export const CHAPTER_GEOGRAFI_6_2: TextbookChapter = {
  id: 'geografi-1-6-2',
  courseId: 'geografi',
  chapterNumber: '6.2',
  title: 'Byers funksjon og struktur',
  description: 'Hvordan byer er organisert, ulike bymodeller, byers funksjoner og grunnleggende prinsipper for byplanlegging.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive byers indre struktur og funksjoner',
    'bruke modeller for å analysere byutvikling',
  ],
  content: [
    {
      id: 'geo-6-2-intro',
      type: 'text',
      content: `# Byers funksjon og struktur

Byer er ikke tilfeldig organisert. De har en indre struktur som gjenspeiler økonomi, historie, topografi og planlegging. Geografer har utviklet flere modeller for å beskrive og forstå hvordan byer er bygd opp. Disse modellene hjelper oss å se mønstre og forklare hvorfor ulike aktiviteter og boligtyper finnes der de gjør.`,
    },
    {
      id: 'geo-6-2-funksjoner',
      type: 'text',
      content: `## Byers funksjoner

Byer fyller mange funksjoner i samfunnet. En by kan ha én dominerende funksjon eller flere samtidige:

### Handel og tjenesteyting
De fleste byer fungerer som handelssentre for et større omland. Butikker, markeder, banker og andre tjenester er konsentrert i byene. Store byer har gjerne et **CBD** (Central Business District) – et forretningssentrum med kontorer, banker og butikker.

### Industri og produksjon
Mange byer har vokst opp rundt industriell virksomhet. Havnebyer ble viktige for transport og handel, mens byer med tilgang til råvarer utviklet fabrikker og foredlingsindustri.

### Administrasjon og politikk
Hovedsteder og regionale sentre har viktige administrative funksjoner. Regjeringer, domstoler, departementer og offentlige institusjoner er ofte samlet i byene.

### Utdanning og forskning
Universitetsbyer som Oxford, Trondheim og Heidelberg har utdanning som en sentral funksjon. Forskningsmiljøer tiltrekker seg bedrifter og skaper innovasjon.

### Kultur og turisme
Noen byer er kjent for kulturinstitusjoner, festivaler eller historiske severdigheter som tiltrekker besøkende fra hele verden.`,
    },
    {
      id: 'geo-6-2-def-cbd',
      type: 'definition',
      title: 'CBD (Central Business District)',
      content: 'CBD er det sentrale forretningsområdet i en by, der man finner den høyeste konsentrasjonen av kontorer, banker, butikker og offentlige tjenester. CBD har typisk høye tomtepriser, høyhusbebyggelse og god tilgjengelighet med kollektivtransport. I norske byer tilsvarer dette ofte «sentrum» eller «bykjernen».',
    },
    {
      id: 'geo-6-2-modeller',
      type: 'text',
      content: `## Bymodeller

Geografer har utviklet tre klassiske modeller for å beskrive byers indre struktur:

### 1. Konsentrisk sonemodell (Burgess, 1925)
Denne modellen beskriver byen som en serie ringer rundt et sentrum:
- **Sone 1**: CBD – forretningssentrum
- **Sone 2**: Overgangssone – eldre industri, slitne boliger
- **Sone 3**: Arbeiderboliger – rimelige boliger nær arbeidsplasser
- **Sone 4**: Middelklasseboliger – bedre boligområder
- **Sone 5**: Forsteder – pendlerområder med eneboliger

### 2. Sektormodellen (Hoyt, 1939)
Hoyt mente at byen vokser i sektorer (kiler) ut fra sentrum, gjerne langs transportårer. Industrien følger jernbanelinjer, mens velstående boligområder kan strekke seg langs en bestemt akse.

### 3. Flerkjernemodellen (Harris og Ullman, 1945)
Denne modellen beskriver byen som et lappeteppe av spesialiserte områder med flere kjerner. I stedet for ett sentrum har byen flere sentre for ulike funksjoner: et handelssentrum, et industriområde, et universitetsområde osv.`,
    },
    {
      id: 'geo-6-2-example-modeller',
      type: 'example',
      title: 'Bymodeller i praksis',
      problem: 'Hvilken bymodell passer best for å beskrive Oslo?',
      solution: `Oslo passer best med en kombinasjon av modellene:

- **Konsentrisk preg**: Oslo har et tydelig sentrum (CBD rundt Karl Johan og Bjørvika) med boligområder som strekker seg utover.
- **Sektorpreg**: Vest-Oslo (Frogner, Vestre Aker) har tradisjonelt vært mer velstående, mens Groruddalen i øst har hatt mer industri og arbeiderboliger. Disse sektorene strekker seg ut fra sentrum.
- **Flerkjernepreg**: Oslo har utviklet flere bydelskjerner som Majorstuen, Grünerløkka, Nydalen og Økern, som fungerer som lokale sentre.

De fleste moderne byer er for komplekse til å passe perfekt inn i én modell. Modellene er forenklinger som hjelper oss å identifisere mønstre.`,
    },
    {
      id: 'geo-6-2-sentrum-periferi',
      type: 'text',
      content: `## Sentrum–periferi

I bygeografi bruker vi begrepsparet **sentrum–periferi** for å beskrive forholdet mellom bykjernen og utkantene:

- **Sentrum** har høy tetthet av arbeidsplasser, handel og tjenester, men også høye tomtepriser og ofte lite grøntareal
- **Periferien** (forstedene) har lavere tetthet, mer plass, rimeligere boliger, men lengre avstand til sentrale funksjoner

### Gentrifisering
I mange byer ser vi **gentrifisering** – en prosess der eldre, slitte byområder oppgraderes og tiltrekker seg mer velstående beboere. Boligprisene stiger, og de opprinnelige beboerne presses ut. Grünerløkka i Oslo er et kjent norsk eksempel.

### Suburbanisering
**Suburbanisering** er prosessen der folk flytter ut av bykjernen til forsteder. Dette har vært en sterk trend i mange vestlige land, drevet av bilbruk og ønske om mer plass.`,
    },
    {
      id: 'geo-6-2-def-gentrifisering',
      type: 'definition',
      title: 'Gentrifisering',
      content: 'Gentrifisering er en prosess der eldre, ofte nedslitte byområder gjennomgår oppgradering og tiltrekker seg mer velstående beboere. Prosessen fører typisk til stigende boligpriser, renovering av bygninger og endret sosialt miljø. De opprinnelige beboerne, ofte med lavere inntekt, kan bli presset ut av området.',
    },
    {
      id: 'geo-6-2-byplanlegging',
      type: 'text',
      content: `## Byplanlegging

Byplanlegging handler om å styre byenes utvikling gjennom bevisste valg om arealbruk, transport, boligbygging og grøntområder.

### Sentrale mål i moderne byplanlegging:
- **Kompakt byutvikling** – bygge tett for å redusere transportbehov og bevare natur
- **Funksjonsblanding** – kombinere boliger, arbeidsplasser og tjenester i samme område
- **Grønn infrastruktur** – parker, grøntdrag og åpne vannveier i byen
- **Tilgjengelighet** – god kollektivtransport og tilrettelegging for gåing og sykling
- **Medvirkning** – involvere innbyggerne i planleggingsprosessen

### Reguleringsplan
I Norge styres arealbruken gjennom **reguleringsplaner** som bestemmer hva ulike arealer kan brukes til (bolig, næring, friområde osv.). Plan- og bygningsloven gir rammene for denne planleggingen.`,
    },
    {
      id: 'geo-6-2-sonering',
      type: 'text',
      content: `## Sonering og arealbruk

Sonering er et viktig virkemiddel i byplanlegging. Det innebærer at ulike deler av byen tildeles bestemte funksjoner:

- **Boligområder** – med ulik tetthet (villastrøk, blokkbebyggelse, rekkehus)
- **Næringsområder** – kontor, handel, industri
- **Sentrumsområder** – blanding av handel, kontor, kultur og boliger
- **Grøntområder** – parker, friluftsliv, idrettsanlegg
- **Samferdselsarealer** – veier, jernbane, flyplasser

Utfordringen er å finne en god balanse mellom ulike behov og interesser, og sikre at byen fungerer godt for alle innbyggerne.`,
    },
  
    {
      id: 'geo-6-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Byer har ulike **funksjoner**: bolig, handel, industri, forvaltning og kultur
- **Sonemodellen** (Burgess), **sektormodellen** (Hoyt) og **flerkjernemodellen** (Harris og Ullman) beskriver bystruktur
- Byplanlegging handler om aa styre byens utvikling for aa skape gode boomraader
- **Sentrum-periferi** beskriver forholdet mellom byens kjerne og ytteromraadene
- Moderne byer har ofte en mer kompleks struktur enn de klassiske modellene antyder`,
    },
  ],
  exercises: [
    {
      id: 'geo-6-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva står forkortelsen CBD for i bygeografi?',
      options: [
        { id: 'a', text: 'Central Business District', isCorrect: true },
        { id: 'b', text: 'City Building Department', isCorrect: false },
        { id: 'c', text: 'Commercial Business Development', isCorrect: false },
        { id: 'd', text: 'Central Borough District', isCorrect: false },
      ],
      solution: 'CBD står for Central Business District, det sentrale forretningsområdet i en by med høy konsentrasjon av kontorer, banker og butikker.',
    },
    {
      id: 'geo-6-2-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'I Burgess\' konsentriske sonemodell, hva finner man typisk i sone 2 (overgangssonen)?',
      options: [
        { id: 'a', text: 'Villabebyggelse for middelklassen', isCorrect: false },
        { id: 'b', text: 'Det sentrale forretningsområdet (CBD)', isCorrect: false },
        { id: 'c', text: 'Eldre industri og slitne boliger', isCorrect: true },
        { id: 'd', text: 'Pendlerforsteder med eneboliger', isCorrect: false },
      ],
      solution: 'I Burgess\' modell er sone 2 overgangssonen som ligger rundt CBD. Her finner man eldre industri, nedslitte boliger og ofte immigrantmiljøer. Det er et område i endring mellom det kommersielle sentrum og boligområdene.',
    },
    {
      id: 'geo-6-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva gentrifisering er, og gi et eksempel på hvordan det kan påvirke et byområde.',
      solution: 'Gentrifisering er en prosess der eldre, ofte nedslitte byområder oppgraderes og tiltrekker seg mer velstående beboere. Et eksempel er Grünerløkka i Oslo, som gikk fra å være et arbeiderstrøk med rimelige boliger til å bli et populært og dyrt boligområde med kafeer, restauranter og designbutikker. Konsekvensen er at boligprisene stiger kraftig, og de opprinnelige beboerne med lavere inntekt kan bli presset ut til andre bydeler.',
    },
    {
      id: 'geo-6-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Sammenlign de tre klassiske bymodellene (konsentrisk sone, sektor og flerkjerne) og vurder hvilken som er mest relevant for moderne byer.',
      solution: 'Den konsentriske sonemodellen (Burgess) ser byen som ringer rundt et sentrum, sektormodellen (Hoyt) beskriver vekst i kiler langs transportårer, og flerkjernemodellen (Harris og Ullman) viser en by med flere spesialiserte sentre. Moderne byer passer ofte best med flerkjernemodellen, fordi byene har utviklet seg med flere knutepunkter og sentre. Utviklingen av kjøpesentre, teknologiparker og bydelssentre betyr at byen ikke lenger har én enkelt kjerne. I praksis bruker geografer elementer fra alle tre modellene for å analysere en by.',
    },
    {
      id: 'geo-6-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er suburbanisering?',
      options: [
        { id: 'a', text: 'Prosessen der bykjernen fornyes og oppgraderes', isCorrect: false },
        { id: 'b', text: 'Prosessen der folk flytter fra bykjernen til forsteder', isCorrect: true },
        { id: 'c', text: 'Prosessen der flere byer vokser sammen', isCorrect: false },
        { id: 'd', text: 'Prosessen der landsbygda avfolkes', isCorrect: false },
      ],
      solution: 'Suburbanisering er prosessen der folk flytter ut av den tette bykjernen til forsteder (suburbs) med lavere tetthet. Dette har vært drevet av bilbruk, ønske om mer plass og lavere boligpriser utenfor sentrum.',
    },
  ],
};

// ============================================================================
// Kapittel 6.3: Megabyer og slum
// ============================================================================

export const CHAPTER_GEOGRAFI_6_3: TextbookChapter = {
  id: 'geografi-1-6-3',
  courseId: 'geografi',
  chapterNumber: '6.3',
  title: 'Megabyer og slum',
  description: 'Megabyer med over 10 millioner innbyggere, rask byvekst i utviklingsland, slum og uformelle bosettinger, og utfordringene disse byene står overfor.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for levekår i megabyer og drøfte utfordringer knyttet til rask urbanisering',
    'reflektere over globale forskjeller i urban utvikling',
  ],
  content: [
    {
      id: 'geo-6-3-intro',
      type: 'text',
      content: `# Megabyer og slum

Noen av verdens byer har vokst til enorme størrelser. Byer med mer enn 10 millioner innbyggere kalles **megabyer**. I 1950 fantes det bare to slike byer – New York og Tokyo. I dag er det over 30, og de fleste ligger i lav- og mellominntektsland. Denne raske veksten skaper både muligheter og alvorlige utfordringer.`,
    },
    {
      id: 'geo-6-3-def-megaby',
      type: 'definition',
      title: 'Megaby',
      content: 'En megaby er et byområde med mer enn 10 millioner innbyggere. FN definerer megabyer ut fra det samlede urbane området (agglomerasjonen), ikke bare kommunegrensene. Eksempler inkluderer Tokyo (ca. 37 mill.), Delhi (ca. 32 mill.), Shanghai (ca. 29 mill.) og São Paulo (ca. 22 mill.).',
    },
    {
      id: 'geo-6-3-vekst',
      type: 'text',
      content: `## Megabyenes vekst

De største megabyene i dag er:

| By | Land | Innbyggere (ca.) |
|---|---|---|
| Tokyo | Japan | 37 millioner |
| Delhi | India | 32 millioner |
| Shanghai | Kina | 29 millioner |
| São Paulo | Brasil | 22 millioner |
| Mexico City | Mexico | 22 millioner |
| Dhaka | Bangladesh | 22 millioner |
| Kairo | Egypt | 21 millioner |
| Lagos | Nigeria | 16 millioner |

### Vekstmønsteret
- I høyinntektsland (Tokyo, New York, London) har byveksten stabilisert seg
- I lav- og mellominntektsland vokser megabyene raskt, ofte med 3–5 prosent per år
- Mye av veksten er **uplanlagt** – den skjer raskere enn myndighetenes evne til å bygge infrastruktur

### Årsaker til vekst i utviklingsland
- Fortsatt sterk bygd-til-by-migrasjon
- Høy naturlig befolkningsvekst (fødselsoverskudd)
- Annektering av nærliggende tettsteder`,
    },
    {
      id: 'geo-6-3-slum',
      type: 'text',
      content: `## Slum og uformelle bosettinger

En av de mest synlige konsekvensene av rask, uplanlagt urbanisering er framveksten av slum. Omtrent **en milliard** mennesker bor i slumområder verden over.

### Hva kjennetegner slum?
FN definerer slumboliger ut fra fem kriterier – en bolig regnes som slum dersom den mangler ett eller flere av disse:
1. **Tilstrekkelig boareal** – ikke overbefolket
2. **Varig konstruksjon** – solid tak og vegger
3. **Rent vann** – tilgang i eller nær boligen
4. **Sanitæranlegg** – tilgang til toalett
5. **Boligsikkerhet** – rett til å bli boende (eiendomsrett eller leiekontrakt)

### Uformelle bosettinger
Mange slumområder er **uformelle bosettinger** – bebyggelse som har vokst fram uten offentlig godkjenning, ofte på offentlig eller privat grunn. Beboerne mangler ofte formelle rettigheter til jorda de bor på, noe som gjør dem sårbare for tvangsfravikelser.`,
    },
    {
      id: 'geo-6-3-def-slum',
      type: 'definition',
      title: 'Slum',
      content: 'Slum er et tettbygd boligområde preget av dårlige boforhold, mangel på grunnleggende tjenester som rent vann og sanitær, overbefolkning og ofte usikker boligsituasjon. Begrepet brukes globalt, men forholdene varierer fra sted til sted. Eksempler er Dharavi i Mumbai, Kibera i Nairobi og favelaene i Rio de Janeiro.',
    },
    {
      id: 'geo-6-3-utfordringer',
      type: 'text',
      content: `## Utfordringer i megabyer

Megabyer i utviklingsland står overfor en rekke sammensatte utfordringer:

### Vann og sanitær
- Mange beboere i slumområder har ikke tilgang til rent vann
- Mangel på toaletter og kloakksystem fører til vannbårne sykdommer
- Grunnvannet kan være forurenset av søppel og avløp

### Transport
- Veiene er ofte overbelastet med ekstreme køer
- Kollektivtransport er utilstrekkelig for befolkningens behov
- Lang pendlertid reduserer livskvaliteten
- Luftforurensning fra trafikk er et alvorlig helseproblem

### Avfallshåndtering
- Mange byer klarer ikke å samle inn og behandle avfallet
- Søppelberg og ulovlige fyllinger forurenser jord og vann
- Uformell resirkulering av søppelplukkere er viktig, men helsefarlig

### Sosiale utfordringer
- Store økonomiske forskjeller mellom rike og fattige bydeler
- Kriminalitet og usikkerhet i mange områder
- Mangel på utdanning og helsetjenester for de fattigste
- Barnearbeid og utnyttelse i uformell sektor`,
    },
    {
      id: 'geo-6-3-example-dharavi',
      type: 'example',
      title: 'Dharavi – slum med ressurser',
      problem: 'Dharavi i Mumbai, India, omtales ofte bare som en slum. Hva gjør Dharavi til mer enn bare et fattig boligområde?',
      solution: `**Dharavi – en kompleks bydel:**

Dharavi er et av Asias største slumområder med omtrent 1 million innbyggere på bare 2,1 kvadratkilometer. Men Dharavi er også et pulserende økonomisk område:

- **Uformell økonomi**: Dharavi har anslagsvis 5 000 bedrifter og en årlig omsetning på over 1 milliard dollar
- **Resirkulering**: Bydelen er Mumbais viktigste resirkuleringssentrum, der plast, metall og tekstiler bearbeides
- **Håndverk**: Keramikk, lærvarer og tekstilproduksjon skaper arbeidsplasser
- **Sterke sosiale nettverk**: Tette fellesskap med gjensidig støtte og hjelp

Eksempelet viser at slumområder er komplekse samfunn med ressurser og kreativitet, ikke bare steder preget av elendighet. God bypolitikk bør bygge videre på eksisterende strukturer i stedet for å rive dem.`,
    },
    {
      id: 'geo-6-3-tiltak',
      type: 'text',
      content: `## Tiltak mot slum

Ulike strategier brukes for å forbedre forholdene i slumområder:

### Oppgradering (in situ)
- Forbedre eksisterende boliger og infrastruktur
- Bygge vanntilførsel, kloakk, veier og strømnett
- Gi beboerne eiendomsrettigheter
- Denne tilnærmingen bevarer sosiale nettverk og er ofte mest effektiv

### Restrukturering
- Rive slum og bygge nye boliger
- Kan føre til at beboere mister hjem og nettverk
- Ofte kontroversiell, særlig når beboere ikke involveres

### Forebygging
- Investere i infrastruktur før byveksten skjer
- Regulere tomtemarkedet for å sikre rimelige boliger
- Desentralisere veksten til mellomstore byer
- Styrke offentlige tjenester i landlige områder for å redusere migrasjonspresset`,
    },
  
    {
      id: 'geo-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Megabyer** har over 10 millioner innbyggere og finnes hovedsakelig i Asia og Latin-Amerika
- **Slum** og uformelle bosettinger huser over 1 milliard mennesker globalt
- Utfordringer inkluderer manglende infrastruktur, fattigdom, forurensning og helserisiko
- Rask urbanisering i utviklingsland skjer uten tilstrekkelig planlegging og ressurser
- Det er store kontraster mellom rike og fattige omraader innenfor samme by`,
    },
  ],
  exercises: [
    {
      id: 'geo-6-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange innbyggere må et byområde ha for å kalles en megaby?',
      options: [
        { id: 'a', text: 'Mer enn 1 million', isCorrect: false },
        { id: 'b', text: 'Mer enn 5 millioner', isCorrect: false },
        { id: 'c', text: 'Mer enn 10 millioner', isCorrect: true },
        { id: 'd', text: 'Mer enn 20 millioner', isCorrect: false },
      ],
      solution: 'En megaby defineres som et byområde med mer enn 10 millioner innbyggere. I dag finnes det over 30 slike byer i verden.',
    },
    {
      id: 'geo-6-3-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket av disse er IKKE ett av FNs kriterier for å definere en bolig som slum?',
      options: [
        { id: 'a', text: 'Mangel på rent vann', isCorrect: false },
        { id: 'b', text: 'Mangel på internettilgang', isCorrect: true },
        { id: 'c', text: 'Overbefolket boareal', isCorrect: false },
        { id: 'd', text: 'Usikker boligsituasjon', isCorrect: false },
      ],
      solution: 'FNs fem kriterier for slum er mangel på tilstrekkelig boareal, varig konstruksjon, rent vann, sanitæranlegg og boligsikkerhet. Internettilgang er ikke ett av kriteriene, selv om digital tilgang er viktig for utvikling.',
    },
    {
      id: 'geo-6-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for minst tre utfordringer som megabyer i utviklingsland står overfor.',
      solution: 'Megabyer i utviklingsland står overfor mange utfordringer: (1) Vann og sanitær – mange innbyggere, særlig i slumområder, mangler tilgang til rent vann og toaletter, noe som fører til vannbårne sykdommer som kolera. (2) Transport – veiene er overbelastet, kollektivtransporten er utilstrekkelig, og lang pendlertid reduserer livskvaliteten. Trafikkforurensning er et alvorlig helseproblem. (3) Avfallshåndtering – mange byer klarer ikke å samle inn og behandle alt avfallet, noe som fører til forurensning av jord og vann. (4) Sosiale utfordringer – store økonomiske forskjeller, kriminalitet, mangel på utdanning og helsetjenester for de fattigste.',
    },
    {
      id: 'geo-6-3-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft fordeler og ulemper ved å rive slumområder og bygge nye boliger, sammenlignet med å oppgradere eksisterende bosettinger.',
      solution: 'Riving og nybygging kan gi moderne boliger med god standard, men har store ulemper: beboerne mister sine hjem og sosiale nettverk, prosessen er dyr, og de nye boligene kan bli for dyre for de opprinnelige beboerne. Oppgradering av eksisterende bosettinger bevarer sosiale nettverk og lokalt næringsliv, er ofte billigere, og beboerne kan bli boende under prosessen. Ulempen er at det kan være vanskelig å oppnå samme fysiske standard som ved nybygging, og trange gater gjør det vanskelig å legge inn moderne infrastruktur. Forskning viser at oppgradering (in situ) ofte er mest effektivt fordi det bygger videre på eksisterende strukturer og involverer beboerne i prosessen.',
    },
    {
      id: 'geo-6-3-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor mesteparten av verdens megabyer i dag ligger i lav- og mellominntektsland, og gjør rede for minst to konsekvenser av denne utviklingen.',
      solution: 'De fleste megabyer ligger i lav- og mellominntektsland fordi det er her den raskeste befolkningsveksten og urbaniseringen skjer. Bygd-til-by-migrasjon drives av fattigdom og mangel på muligheter på landsbygda (push-faktorer) og arbeidsplasser og tjenester i byene (pull-faktorer). I tillegg er den naturlige befolkningsveksten høyere i disse landene. Konsekvenser: (1) Infrastrukturpress – byveksten skjer raskere enn myndighetenes evne til å bygge ut vann, kloakk, transport og helsetjenester, noe som fører til slum og uformelle bosettinger. (2) Miljøbelastning – rask urbanisering fører til forurensning, avfallsproblemer og tap av naturområder rundt byene. (3) Sosiale utfordringer – store forskjeller mellom rike og fattige bydeler, kriminalitet og mangel på grunnleggende tjenester for de mest sårbare.',
    },
  ],
};

// ============================================================================
// Kapittel 6.4: Bærekraftig byutvikling
// ============================================================================

export const CHAPTER_GEOGRAFI_6_4: TextbookChapter = {
  id: 'geografi-1-6-4',
  courseId: 'geografi',
  chapterNumber: '6.4',
  title: 'Bærekraftig byutvikling',
  description: 'Smarte byer, grønn transport, FNs bærekraftsmål 11 og konkrete eksempler på bærekraftige byprosjekter.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte tiltak for bærekraftig byutvikling',
    'vurdere hvordan byer kan utvikles i tråd med FNs bærekraftsmål',
  ],
  content: [
    {
      id: 'geo-6-4-intro',
      type: 'text',
      content: `# Bærekraftig byutvikling

Byer står for omtrent 70 prosent av verdens energiforbruk og CO₂-utslipp, samtidig som de bare dekker rundt 3 prosent av jordas landareal. Hvordan vi bygger og utvikler byene våre er derfor avgjørende for om vi kan nå klimamålene og skape gode samfunn. **Bærekraftig byutvikling** handler om å bygge byer som fungerer godt for mennesker i dag uten å ødelegge mulighetene for kommende generasjoner.`,
    },
    {
      id: 'geo-6-4-def-barekraftig',
      type: 'definition',
      title: 'Bærekraftig byutvikling',
      content: 'Bærekraftig byutvikling innebærer å planlegge og utvikle byer slik at de dekker innbyggernes behov for boliger, transport, tjenester og livskvalitet, samtidig som miljøbelastningen minimeres og sosiale forskjeller reduseres. Det handler om å balansere økonomisk, sosial og miljømessig bærekraft.',
    },
    {
      id: 'geo-6-4-smartebyer',
      type: 'text',
      content: `## Smarte byer (Smart Cities)

Begrepet **smart city** brukes om byer som bruker teknologi og data for å forbedre tjenester, effektivisere ressursbruk og øke livskvaliteten.

### Kjennetegn ved smarte byer:
- **Sensorteknologi** – sensorer som overvåker luftkvalitet, trafikk, energiforbruk og avfallshåndtering
- **Dataanalyse** – bruk av stordata for å ta bedre beslutninger om byutvikling
- **Digitale tjenester** – apper for kollektivtransport, bysykler, parkering og offentlige tjenester
- **Smart energi** – smartnett som balanserer strømforbruk og produksjon fra fornybare kilder
- **Innbyggermedvirkning** – digitale plattformer for dialog mellom innbyggere og myndigheter

### Eksempler
- **Singapore** – bruker sensorer og AI for trafikkstyring og avfallshåndtering
- **Barcelona** – smart belysning som dimmes når ingen er i nærheten, og sensorer i søppelkasser
- **Amsterdam** – smart energistyring og plattform for åpne data`,
    },
    {
      id: 'geo-6-4-transport',
      type: 'text',
      content: `## Grønn transport og byplanlegging

Transport er en av de største kildene til utslipp i byer. Bærekraftig byplanlegging handler i stor grad om å redusere behovet for bilkjøring og legge til rette for grønnere alternativer.

### Strategier for grønn bytransport:
- **Kollektivtransport** – buss, trikk, T-bane og tog som ryggraden i transportsystemet
- **Sykkelinfrastruktur** – separate sykkelfelt, bysykler og sikker sykkelparkering
- **Gangvennlige byer** – brede fortau, fotgjengersoner og korte avstander mellom funksjoner
- **Nullutslippskjøretøy** – elbiler, elbusser og elektrifisert varetransport
- **Bilfrie soner** – stenge sentrumsområder for biltrafikk
- **Fortetting rundt knutepunkter** – bygge boliger og arbeidsplasser nær kollektivstasjoner

### Kompakt byutvikling
I stedet for å spre byen utover (urban sprawl) satser mange byer nå på **kompakt byutvikling** – å bygge tettere og høyere. Dette gir kortere avstander, bedre grunnlag for kollektivtransport og mindre press på natur og jordbruksareal.`,
    },
    {
      id: 'geo-6-4-sdg11',
      type: 'text',
      content: `## Bærekraftsmål 11: Bærekraftige byer og lokalsamfunn

FNs bærekraftsmål 11 handler om å «gjøre byer og lokalsamfunn inkluderende, trygge, motstandsdyktige og bærekraftige». Dette er et av de 17 bærekraftsmålene som verdens land har forpliktet seg til å nå innen 2030.

### Delmål under mål 11:
- **11.1** – Sikre trygge og rimelige boliger for alle
- **11.2** – Tilgjengelig, bærekraftig transport for alle
- **11.3** – Inkluderende og bærekraftig urbanisering
- **11.4** – Beskytte verdens kultur- og naturarv
- **11.5** – Redusere tap av menneskeliv og økonomiske tap fra katastrofer
- **11.6** – Redusere byenes miljøbelastning (luftkvalitet, avfall)
- **11.7** – Sikre tilgang til trygge og inkluderende grøntområder

### Utfordringer
Mange byer er langt fra å nå disse målene. Rask urbanisering i lav-inntektsland gjør det vanskelig å sikre grunnleggende tjenester for alle, og klimaendringer øker risikoen for naturkatastrofer i tettbygde områder.`,
    },
    {
      id: 'geo-6-4-example-prosjekter',
      type: 'example',
      title: 'Bærekraftige byprosjekter',
      problem: 'Gi eksempler på konkrete byprosjekter som fremmer bærekraftig utvikling.',
      solution: `**Eksempler på bærekraftige byprosjekter:**

1. **Bjørvika, Oslo (Norge)**: Transformasjon av et gammelt havne- og industriområde til en moderne bydel med boliger, kulturinstitusjoner (Operaen, Munch-museet, Deichman bibliotek) og grøntområder. Bilfritt sentrumsområde med god kollektivtilknytning.

2. **Hammarby Sjöstad, Stockholm (Sverige)**: En bydel bygd med integrert miljøtenkning der avfall brukes til energiproduksjon, regnvann renses lokalt, og området har svært god kollektivdekning. Målet var å halvere miljøbelastningen sammenlignet med tradisjonelle boligområder.

3. **Medellín (Colombia)**: Fra en av verdens farligste byer til et forbilde for sosial bærekraft. Taubaner (Metrocable) ble bygd for å koble fattige fjellsideområder til sentrum, med biblioteker, parker og offentlige rom i de fattigste bydelene.

4. **Curitiba (Brasil)**: Pioner innen bussbasert kollektivtransport (BRT – Bus Rapid Transit) som har inspirert byer over hele verden. Byen har også et kreativt avfallsprogram der innbyggere kan bytte søppel mot mat og bussbilletter.`,
    },
    {
      id: 'geo-6-4-sirkulaer',
      type: 'text',
      content: `## Sirkulær økonomi i byer

En viktig del av bærekraftig byutvikling er overgangen til en **sirkulær økonomi**, der ressurser brukes om igjen i stedet for å kastes.

### Prinsipper for sirkulære byer:
- **Redusere** – bruke mindre ressurser og energi
- **Gjenbruke** – gi bygninger, materialer og produkter nytt liv
- **Resirkulere** – sortere og gjenvinne avfall som ressurs
- **Dele** – delingsøkonomi for biler, verktøy og lokaler

### Eksempler i praksis:
- Bygninger som kan demonteres og materialene gjenbrukes
- Matavfall som omdannes til biogass for busser
- Kommunale utlånsordninger for sportsutstyr og verktøy
- Næringshager der ledige lokaler deles mellom små bedrifter`,
    },
    {
      id: 'geo-6-4-groenn-infra',
      type: 'text',
      content: `## Grønn infrastruktur i byer

Grønn infrastruktur handler om å integrere natur i byplanleggingen:

- **Bytrær og grønne lunger** – filtrerer luft, gir skygge og reduserer varmeøyeffekten
- **Grønne tak og vegger** – isolerer bygninger, tar opp regnvann og øker biologisk mangfold
- **Åpne vannveier** – gjenåpning av bekker og elver som har vært lagt i rør
- **Urbant landbruk** – parsellhager, takhager og vertikalt jordbruk
- **Blågrønn infrastruktur** – systemer som håndterer overvann naturlig gjennom grøntområder og permeable overflater

Grønn infrastruktur gjør byene mer robuste mot klimaendringer, forbedrer luftkvaliteten og øker innbyggernes trivsel og helse.`,
    },
  
    {
      id: 'geo-6-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **FNs baerekraftsmaal 11** handler om aa gjore byer og lokalsamfunn baerekraftige
- Baerekraftig byutvikling inkluderer **groenn transport**, **fortetting** og **blaagroenn infrastruktur**
- **Smarte byer** bruker teknologi for aa effektivisere energi, transport og avfallshaandtering
- Kompakt byutvikling reduserer transportbehov og arealforbruk
- Klimatilpasning av byer er noedvendig for aa haandtere flom, heteboelger og havnivaasstigning`,
    },
  ],
  exercises: [
    {
      id: 'geo-6-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Omtrent hvor stor andel av verdens CO₂-utslipp kommer fra byer?',
      options: [
        { id: 'a', text: 'Ca. 30 prosent', isCorrect: false },
        { id: 'b', text: 'Ca. 50 prosent', isCorrect: false },
        { id: 'c', text: 'Ca. 70 prosent', isCorrect: true },
        { id: 'd', text: 'Ca. 90 prosent', isCorrect: false },
      ],
      solution: 'Byer står for omtrent 70 prosent av verdens energiforbruk og CO₂-utslipp, til tross for at de bare dekker rundt 3 prosent av jordas landareal. Derfor er bærekraftig byutvikling avgjørende for å nå klimamålene.',
    },
    {
      id: 'geo-6-4-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva innebærer kompakt byutvikling?',
      options: [
        { id: 'a', text: 'Å spre byen utover med eneboliger og kjøpesentre', isCorrect: false },
        { id: 'b', text: 'Å bygge tettere og høyere for å redusere transportbehov og arealbruk', isCorrect: true },
        { id: 'c', text: 'Å begrense innflyttingen til byen', isCorrect: false },
        { id: 'd', text: 'Å flytte industrien ut av byen', isCorrect: false },
      ],
      solution: 'Kompakt byutvikling handler om å bygge tettere og høyere i stedet for å spre byen utover (urban sprawl). Dette gir kortere avstander, bedre grunnlag for kollektivtransport og mindre press på natur og jordbruksareal.',
    },
    {
      id: 'geo-6-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva FNs bærekraftsmål 11 handler om, og nevn tre av delmålene.',
      solution: 'FNs bærekraftsmål 11 handler om å gjøre byer og lokalsamfunn inkluderende, trygge, motstandsdyktige og bærekraftige. Tre delmål er: (1) Sikre trygge og rimelige boliger for alle (11.1). (2) Tilgjengelig og bærekraftig transport for alle (11.2). (3) Redusere byenes miljøbelastning, blant annet bedre luftkvalitet og avfallshåndtering (11.6).',
    },
    {
      id: 'geo-6-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Velg ett av de bærekraftige byprosjektene nevnt i kapitlet, og forklar hva som gjør det til et godt eksempel på bærekraftig byutvikling.',
      solution: 'Hammarby Sjöstad i Stockholm er et godt eksempel fordi bydelen ble designet med miljøhensyn integrert i alle deler: avfallet brukes til energiproduksjon, regnvann renses lokalt, og bydelen har god kollektivdekning. Det viser at det er mulig å halvere miljøbelastningen sammenlignet med tradisjonelle boligområder dersom man planlegger helhetlig fra starten. Bydelen kombinerer miljømessig bærekraft (lavere utslipp, ressursgjenvinning) med sosial bærekraft (gode bomiljøer, grøntområder) og viser at bærekraft og livskvalitet kan gå hånd i hånd.',
    },
    {
      id: 'geo-6-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et «smart city»-kjennetegn?',
      options: [
        { id: 'a', text: 'Byen har mange høyhus', isCorrect: false },
        { id: 'b', text: 'Byen bruker teknologi og data for å forbedre tjenester og effektivisere ressursbruk', isCorrect: true },
        { id: 'c', text: 'Byen har mange universiteter', isCorrect: false },
        { id: 'd', text: 'Byen har mer enn 1 million innbyggere', isCorrect: false },
      ],
      solution: 'En smart city bruker teknologi og data – som sensorer, stordata og digitale tjenester – for å forbedre offentlige tjenester, effektivisere ressursbruk og øke innbyggernes livskvalitet. Det handler ikke om størrelse eller antall bygninger.',
    },
  ],
};

// ============================================================================
// Kapittel 6.5: Byer i Norge
// ============================================================================

export const CHAPTER_GEOGRAFI_6_5: TextbookChapter = {
  id: 'geografi-1-6-5',
  courseId: 'geografi',
  chapterNumber: '6.5',
  title: 'Byer i Norge',
  description: 'Norsk byhistorie, de store byene, sentralisering og regional utvikling, og norsk byplanlegging.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive urbaniseringen i Norge og drøfte konsekvenser av sentralisering',
    'vurdere norsk byplanlegging i et bærekraftsperspektiv',
  ],
  content: [
    {
      id: 'geo-6-5-intro',
      type: 'text',
      content: `# Byer i Norge

Norge er et høyt urbanisert land – omtrent 83 prosent av befolkningen bor i byer og tettsteder. Samtidig er Norge tynt befolket, med bare 5,5 millioner innbyggere fordelt på et langstrakt land. Norske byer er små i global sammenheng, men urbaniseringen har likevel hatt stor betydning for samfunnsutviklingen.`,
    },
    {
      id: 'geo-6-5-historie',
      type: 'text',
      content: `## Norsk byhistorie

Norske byer har en lang, men beskjeden historie sammenlignet med mange europeiske land:

### Middelalderen
De eldste norske byene – Bergen, Trondheim (Nidaros), Oslo og Tønsberg – ble grunnlagt i middelalderen. Bergen var Norges største by gjennom flere hundre år, med hanseatisk handel som drivkraft.

### 1800-tallet: Industrialisering
Norsk urbanisering skjøt fart med industrialiseringen på 1800-tallet. Fabrikkene ble anlagt ved elver og fossefall (vannkraft), og industristedet ble til tettstedet. Byer som Drammen, Sarpsborg og Fredrikstad vokste rundt industri og trelast.

### 1900-tallet: Sentralisering
Etter andre verdenskrig akselererte sentraliseringen. Folk flyttet fra bygda og kystsamfunnene til byene for arbeid og utdanning. Bilens utbredelse fra 1960-tallet førte til byspredning og drabantbyutbygging.

### 2000-tallet: Fortetting og transformasjon
De siste tiårene har norsk byplanlegging dreid mot fortetting, transformasjon av gamle industri- og havneområder, og satsing på kollektivtransport.`,
    },
    {
      id: 'geo-6-5-storbyer',
      type: 'text',
      content: `## Norges fire største byer

### Oslo (ca. 710 000 innbyggere / 1,05 millioner i storbyområdet)
- Norges hovedstad og desidert største by
- Nasjonalt sentrum for politikk, økonomi, utdanning og kultur
- Vokser raskest av de norske byene
- Stor transformasjon av havneområder (Bjørvika, Filipstad, Grünerløkka)

### Bergen (ca. 290 000 innbyggere)
- Norges nest største by, viktig havneby og kulturby
- Historisk handelssentrum med Bryggen (UNESCO verdensarv)
- Sterk tilknytning til sjøfart, olje og fiskeri
- Utfordringer med topografi (trangt mellom fjellene) og nedbør

### Trondheim (ca. 210 000 innbyggere)
- Teknologihovedstad med NTNU og SINTEF
- Viktig for forskning, innovasjon og studentmiljø
- Historisk sentrum med Nidarosdomen
- Voksende by med aktiv byplanlegging

### Stavanger (ca. 145 000 innbyggere / 240 000 i storbyområdet)
- Oljehovedstaden – sentrum for norsk petroleumsvirksomhet
- Omstilling fra olje til fornybar energi og teknologi
- Preget av trehusbyen (Gamle Stavanger)
- Del av byregionen Nord-Jæren med Sandnes`,
    },
    {
      id: 'geo-6-5-def-sentralisering',
      type: 'definition',
      title: 'Sentralisering',
      content: 'Sentralisering er prosessen der befolkning, arbeidsplasser, kapital og makt konsentreres i sentrale strøk – typisk de største byene og byregionene. I Norge betyr dette særlig vekst i Oslo-regionen og de andre storbyene, mens mindre steder og distriktene opplever fraflytting og aldrende befolkning.',
    },
    {
      id: 'geo-6-5-sentralisering',
      type: 'text',
      content: `## Sentralisering og regional utvikling

Sentralisering er en av de viktigste demografiske trendene i Norge. Siden 1950 har andelen som bor i de mest sentrale kommunene økt betydelig, mens mange distriktskommuner har mistet innbyggere.

### Drivkrefter bak sentraliseringen:
- **Arbeidsmarkedet** – de fleste nye arbeidsplassene skapes i byene
- **Utdanning** – universiteter og høyskoler ligger i byene
- **Tjenestetilbud** – bedre helse-, kultur- og fritidstilbud
- **Nettverkseffekter** – jo større byen er, desto flere muligheter tilbyr den

### Konsekvenser:
- **For byene**: Press på boligmarkedet, transport og infrastruktur
- **For distriktene**: Fraflytting, aldrende befolkning, nedleggelse av tjenester
- **For samfunnet**: Økte regionale forskjeller og politisk spenning mellom by og land

### Distriktspolitikk
Norge har lang tradisjon for aktiv distriktspolitikk for å motvirke sentralisering:
- Spredte utdanningsinstitusjoner (desentraliserte høyskoler)
- Statlige arbeidsplasser i distriktene
- Differensiert arbeidsgiveravgift
- Skattefordeler i Nord-Norge og Finnmark
- Bredbåndsutbygging og digital infrastruktur`,
    },
    {
      id: 'geo-6-5-example-oslo',
      type: 'example',
      title: 'Oslos transformasjon',
      problem: 'Hvordan har Oslo forandret seg de siste 20 årene, og hva sier dette om norsk byutvikling?',
      solution: `**Oslos transformasjon – fra industri til kunnskapsby:**

- **Bjørvika**: Tidligere havne- og motorveiområde er blitt Norges mest ambisiøse byutviklingsprosjekt med Operaen, Munch-museet, Deichman hovedbibliotek og Barcode-rekken med kontorbygg
- **Bilfritt byliv**: Oslo har fjernet hundrevis av parkeringsplasser i sentrum og erstattet dem med sykkelfelt, benker og grøntområder
- **Fjorden tilbake til folket**: Havnepromenaden gjør sjøfronten tilgjengelig for alle
- **Grünerløkka og Vulkan**: Gamle industriområder er blitt populære bydeler med boliger, restauranter og kulturliv
- **Kollektivsatsing**: Ny Fornebubane (under bygging), utvidelse av T-bane og trikk

Oslo illustrerer en trend i norsk byutvikling: overgang fra industri til tjenesteøkonomi, fortetting framfor byspredning, og prioritering av gange, sykkel og kollektivtransport framfor bil.`,
    },
    {
      id: 'geo-6-5-byplanlegging',
      type: 'text',
      content: `## Norsk byplanlegging

Norsk byplanlegging styres gjennom **plan- og bygningsloven**, som gir kommunene hovedansvaret for arealplanlegging.

### Sentrale prinsipper:
- **Kompakt byutvikling** – bygge tett rundt kollektivknutepunkter
- **Samordnet areal- og transportplanlegging** – planlegge boliger, arbeidsplasser og transport i sammenheng
- **Nullvekstmålet for biltrafikk** – all vekst i persontransport i byene skal tas med kollektiv, sykkel og gange
- **Medvirkning** – innbyggerne har rett til å uttale seg i planprosesser
- **Fortetting med kvalitet** – tett bebyggelse kombinert med gode uterom og grøntområder

### Byvekstavtaler
Staten har inngått **byvekstavtaler** med de største byområdene (Oslo, Bergen, Trondheim, Stavanger). Disse avtalene innebærer at staten bidrar med penger til kollektivtransport, mot at byene forplikter seg til å begrense biltrafikken.`,
    },
    {
      id: 'geo-6-5-bolig',
      type: 'text',
      content: `## Boligmarkedet i norske byer

Boligmarkedet er en sentral utfordring i norsk byutvikling:

- **Høye priser**: Særlig i Oslo har boligprisene steget kraftig, noe som gjør det vanskelig for unge og lavinntektsgrupper å komme inn på markedet
- **Eierskap**: Norge har en sterk eierkultur – omtrent 80 prosent eier sin egen bolig
- **Boligsegregering**: I storbyer kan det oppstå sosiale forskjeller mellom bydeler basert på boligpriser
- **Fortettingsdilemma**: Behovet for flere boliger i byene kan komme i konflikt med behovet for grøntområder og kvalitet i bomiljøet`,
    },
  
    {
      id: 'geo-6-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Norges byer har historisk utviklet seg langs kysten og ved viktige handelsveier
- **Sentralisering** betyr at befolkning og aktivitet konsentreres i og rundt stoerste byer
- Oslo-regionen er Norges desidert stoerste byomraade med over 1 million innbyggere
- **Regionalpolitikk** handler om aa sikre levekaar og tjenester ogsaa utenfor storbyene
- Norsk byplanlegging fokuserer paa fortetting rundt kollektivknutepunkter`,
    },
  ],
  exercises: [
    {
      id: 'geo-6-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Omtrent hvor stor andel av Norges befolkning bor i byer og tettsteder?',
      options: [
        { id: 'a', text: 'Ca. 55 prosent', isCorrect: false },
        { id: 'b', text: 'Ca. 68 prosent', isCorrect: false },
        { id: 'c', text: 'Ca. 83 prosent', isCorrect: true },
        { id: 'd', text: 'Ca. 95 prosent', isCorrect: false },
      ],
      solution: 'Omtrent 83 prosent av Norges befolkning bor i byer og tettsteder. Norge er et høyt urbanisert land, selv om det er tynt befolket i global sammenheng.',
    },
    {
      id: 'geo-6-5-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken by kalles Norges teknologihovedstad?',
      options: [
        { id: 'a', text: 'Oslo', isCorrect: false },
        { id: 'b', text: 'Bergen', isCorrect: false },
        { id: 'c', text: 'Trondheim', isCorrect: true },
        { id: 'd', text: 'Stavanger', isCorrect: false },
      ],
      solution: 'Trondheim kalles Norges teknologihovedstad på grunn av NTNU (Norges teknisk-naturvitenskapelige universitet) og forskningsinstituttet SINTEF, som gjør byen til et viktig sentrum for forskning og innovasjon.',
    },
    {
      id: 'geo-6-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for hva sentralisering er, og drøft konsekvenser av sentralisering for henholdsvis byene og distriktene.',
      solution: 'Sentralisering er prosessen der befolkning, arbeidsplasser og tjenester konsentreres i de største byene og byregionene. Konsekvenser for byene: Press på boligmarkedet med stigende priser, belastning på transportinfrastruktur, og behov for nye skoler, sykehus og tjenester. Men også positive sider som et bredt arbeidsmarked, kulturliv og innovasjon. Konsekvenser for distriktene: Fraflytting og aldrende befolkning, nedleggelse av skoler, butikker og helsetilbud, tap av kompetanse og arbeidskraft. Dette kan skape en negativ spiral der færre innbyggere gir dårligere tilbud, som igjen fører til mer fraflytting.',
    },
    {
      id: 'geo-6-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva nullvekstmålet for biltrafikk innebærer, og vurder om det er realistisk å nå.',
      solution: 'Nullvekstmålet innebærer at all vekst i persontransport i de store byområdene skal tas med kollektivtransport, sykkel og gange – ikke med bil. Det betyr ikke at biltrafikken skal reduseres til null, men at den ikke skal øke selv om befolkningen vokser. For å nå målet kreves store investeringer i kollektivtransport, sykkelveier og fortetting rundt knutepunkter, samt virkemidler som bompenger og parkeringsrestriksjoner. Målet er ambisiøst, men resultater viser at det er mulig – Oslo har klart å redusere biltrafikken i sentrum samtidig som folketallet har økt. Utfordringen er størst i byområder med spredt bebyggelse og dårlig kollektivtilbud.',
    },
    {
      id: 'geo-6-5-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en byvekstavtale?',
      options: [
        { id: 'a', text: 'En avtale mellom kommuner om å begrense befolkningsveksten', isCorrect: false },
        { id: 'b', text: 'En avtale der staten bidrar med penger til kollektivtransport mot at byene begrenser biltrafikken', isCorrect: true },
        { id: 'c', text: 'En avtale mellom utbyggere og kommunen om nye boligprosjekter', isCorrect: false },
        { id: 'd', text: 'En avtale om å flytte statlige arbeidsplasser til distriktene', isCorrect: false },
      ],
      solution: 'En byvekstavtale er en avtale mellom staten og de største byområdene der staten bidrar med betydelige midler til kollektivtransport, sykling og gange, mot at byene forplikter seg til å nå nullvekstmålet for biltrafikk. Avtalene er et viktig virkemiddel for bærekraftig byutvikling i Norge.',
    },
  ],
};

// ============================================================================
// Kapittel 6.6: Framtidens byer
// ============================================================================

export const CHAPTER_GEOGRAFI_6_6: TextbookChapter = {
  id: 'geografi-1-6-6',
  courseId: 'geografi',
  chapterNumber: '6.6',
  title: 'Framtidens byer',
  description: 'Urbanisering fram mot 2050, klimatilpassede byer, teknologiens rolle i byutviklingen, og sosial bærekraft og segregering.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte framtidens utfordringer for byer i lys av klimaendringer og befolkningsvekst',
    'vurdere sammenhenger mellom teknologi, sosial bærekraft og byutvikling',
  ],
  content: [
    {
      id: 'geo-6-6-intro',
      type: 'text',
      content: `# Framtidens byer

Innen 2050 forventes det at nesten 70 prosent av verdens befolkning bor i byer. Det betyr at omtrent 2,5 milliarder flere mennesker vil bo urbant enn i dag. Hvordan vi former disse byene vil ha avgjørende betydning for klimaet, for livskvaliteten til milliarder av mennesker, og for planetens framtid. Framtidens byer må håndtere klimaendringer, voksende befolkning, teknologisk omveltning og sosiale spenninger – samtidig.`,
    },
    {
      id: 'geo-6-6-urbanisering2050',
      type: 'text',
      content: `## Urbanisering fram mot 2050

FN anslår at verdens urbane befolkning vil vokse fra ca. 4,4 milliarder i dag til over 6,7 milliarder innen 2050. Denne veksten vil ikke skje likt overalt:

### Afrika
- Den raskest urbaniserende verdensdelen
- Bybefolkningen forventes å tredobles innen 2050
- Byer som Lagos, Kinshasa, Dar es Salaam og Nairobi vil vokse enormt
- Utfordring: bygge infrastruktur for en eksplosiv vekst

### Asia
- Kina og India dominerer med enorme bybefolkninger
- Mange mellomstore byer vil vokse til millionbyer
- Asiatiske byer vil stå for størstedelen av global byvekst i absolutte tall

### Europa og Nord-Amerika
- Langsom eller stabil byvekst
- Fokus på fornyelse og klimatilpasning av eksisterende byer
- Aldrende befolkning skaper nye behov i byplanleggingen

### Mellomstore byer
Mye av framtidens urbanisering vil skje i **mellomstore byer** (100 000–1 million innbyggere), ikke bare i megabyene. Disse byene får ofte mindre oppmerksomhet, men står overfor mange av de samme utfordringene.`,
    },
    {
      id: 'geo-6-6-klima',
      type: 'text',
      content: `## Klimatilpassede byer

Klimaendringene rammer byer hardt. Høyere temperaturer, mer ekstremnedbør, stigende havnivå og hyppigere stormer krever at byene tilpasser seg.

### Viktige klimautfordringer for byer:
- **Hetebølger** – byer er varmere enn omgivelsene (varmeøyeffekten), og hetebølger kan bli livstruende
- **Oversvømmelser** – tette flater og manglende grøntområder gir raskere avrenning og flom
- **Havnivåstigning** – mange storbyer ligger ved kysten og er truet av stigende hav
- **Tørke** – vannforsyning til millioner av mennesker kan bli usikker

### Klimatilpasningstiltak:
- **Blågrønn infrastruktur** – regnbed, grønne tak, permeable dekker og åpne vannveier
- **Skygge og kjøling** – bytrær, lysfarget bebyggelse og vannspeil
- **Flombarrierer** – diker, stormflodporter og hevede bygninger
- **Naturbaserte løsninger** – mangroveskog, våtmarker og grøntbelter som buffersoner
- **Varslingssystemer** – tidlig varsling av ekstremvær og evakueringsplaner`,
    },
    {
      id: 'geo-6-6-def-varmeoey',
      type: 'definition',
      title: 'Urban varmeøyeffekt',
      content: 'Urban varmeøyeffekt er fenomenet der byer er merkbart varmere enn de omliggende landlige områdene. Årsaken er at asfalt, betong og bygninger absorberer og lagrer varme, mens mangel på vegetasjon reduserer avkjølingen. Temperaturen i en by kan være 2–5 grader høyere enn i landlige omgivelser, noe som forsterker hetebølger og øker energibehovet til kjøling.',
    },
    {
      id: 'geo-6-6-teknologi',
      type: 'text',
      content: `## Teknologi og byutvikling

Teknologisk utvikling vil endre byene fundamentalt i tiårene framover:

### Mobilitet
- **Autonome kjøretøy** – selvkjørende biler og busser kan frigjøre areal fra parkeringsplasser
- **Mobilitet som tjeneste (MaaS)** – apper som kombinerer kollektivtransport, bysykkel, sparkesykkel og delebil i én tjeneste
- **Droner** – for varetransport, overvåking og nødsituasjoner
- **Hyperloop og hurtigtog** – kobler byer tettere sammen

### Energi
- **Bygningsintegrerte solceller** – fasader og tak som produserer strøm
- **Batteriteknologi** – lagring av fornybar energi lokalt
- **Smarte strømnett** – automatisk balansering av forbruk og produksjon

### Digital infrastruktur
- **5G og 6G** – muliggjør sanntidsstyring av trafikk, energi og tjenester
- **Digitale tvillinger** – virtuelle kopier av byen for simulering og planlegging
- **IoT (tingenes internett)** – sensorer som overvåker alt fra luftkvalitet til vannlekkasjer`,
    },
    {
      id: 'geo-6-6-example-klimaby',
      type: 'example',
      title: 'Rotterdam – klimatilpasset by',
      problem: 'Hvordan arbeider Rotterdam i Nederland med klimatilpasning?',
      solution: `**Rotterdam – Europas fremste klimatilpassede by:**

Rotterdam ligger delvis under havnivå og er særlig utsatt for klimaendringer. Byen har blitt et internasjonalt forbilde for klimatilpasning:

- **Vannplasser**: Parker og idrettsbaner som fungerer som vannbasseng ved kraftig nedbør
- **Grønne tak**: Over 200 000 kvadratmeter med grønne tak som absorberer regnvann
- **Flytende bygninger**: Eksperimentelle boliger og kontorer som flyter på vannet
- **Maeslantkering**: En enorm stormflodbarriere som beskytter byen mot havstigning
- **Klimatilpasningsstrategi**: En helhetlig plan som integrerer vannhåndtering i all byplanlegging
- **Resiliensstrategi**: Forberedelse på uforutsette hendelser gjennom fleksibel infrastruktur

Rotterdam viser at klimatilpasning kan kombineres med god byutvikling og bli en kilde til innovasjon og stolthet.`,
    },
    {
      id: 'geo-6-6-segregering',
      type: 'text',
      content: `## Segregering og sosial bærekraft

Framtidens byer står overfor store sosiale utfordringer. **Segregering** – at ulike grupper lever atskilt – er et voksende problem i mange byer.

### Typer segregering:
- **Økonomisk segregering** – rike og fattige bor i ulike deler av byen
- **Etnisk segregering** – innvandrergrupper konsentrert i bestemte bydeler
- **Demografisk segregering** – ulike aldersgrupper i ulike områder

### Årsaker:
- Boligmarkedet sorterer folk etter betalingsevne
- Diskriminering i bolig- og arbeidsmarkedet
- Selvsortering – folk ønsker å bo nær «sine egne»
- Offentlig politikk (boligtildeling, skolekretsgrenser)

### Konsekvenser:
- Ulike oppvekstvilkår og livssjanser for barn i ulike bydeler
- Svakere sosial tillit og samhold
- Parallelle samfunn med lite kontakt mellom grupper
- Forsterking av sosiale forskjeller over generasjoner`,
    },
    {
      id: 'geo-6-6-sosial-barekraft',
      type: 'text',
      content: `## Sosial bærekraft i byene

For at framtidens byer skal lykkes, må de være sosialt bærekraftige – det vil si inkluderende, rettferdige og gode å leve i for alle.

### Strategier for sosial bærekraft:
- **Variert boligsammensetning** – blande ulike boligtyper og prisklasser i samme område
- **Inkluderende offentlige rom** – parker, biblioteker, kulturhus og møteplasser som er gratis og åpne for alle
- **Rettferdig tilgang til tjenester** – skoler, helsetjenester og kollektivtransport av god kvalitet i alle bydeler
- **Medvirkning og demokrati** – gi alle innbyggere, også marginaliserte grupper, innflytelse over byutviklingen
- **Områdesatsinger** – ekstra investeringer i utsatte bydeler for å utjevne forskjeller

### Hva kan vi lære?
Byer som Wien (sosial boligpolitikk), Medellín (investering i fattige bydeler) og København (inkluderende byrom) viser at det er mulig å bygge mer rettferdige byer gjennom bevisst politikk og langsiktig planlegging.`,
    },
    {
      id: 'geo-6-6-oppsummering',
      type: 'text',
      content: `## Mot 2050 – en oppsummering

Framtidens byer vil formes av tre store krefter:

1. **Befolkningsvekst og urbanisering** – flere mennesker skal bo i byer, særlig i Afrika og Asia
2. **Klimaendringer** – byene må tilpasse seg og samtidig redusere sine utslipp
3. **Teknologisk utvikling** – ny teknologi gir muligheter, men skaper også nye utfordringer

De valgene vi gjør i dag – om transport, boliger, energi, grøntområder og sosial politikk – vil bestemme om framtidens byer blir gode steder å leve for alle, eller om de forsterker ulikheter og miljøproblemer. Byplanlegging handler til syvende og sist om hva slags samfunn vi ønsker å skape.`,
    },
  ],
  exercises: [
    {
      id: 'geo-6-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Omtrent hvor stor andel av verdens befolkning forventes å bo i byer innen 2050?',
      options: [
        { id: 'a', text: 'Ca. 50 prosent', isCorrect: false },
        { id: 'b', text: 'Ca. 60 prosent', isCorrect: false },
        { id: 'c', text: 'Ca. 68 prosent', isCorrect: true },
        { id: 'd', text: 'Ca. 80 prosent', isCorrect: false },
      ],
      solution: 'FN anslår at nesten 68 prosent (ca. 70 prosent) av verdens befolkning vil bo i byer innen 2050. Det betyr at omtrent 2,5 milliarder flere mennesker vil bo urbant enn i dag.',
    },
    {
      id: 'geo-6-6-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den urbane varmeøyeffekten?',
      options: [
        { id: 'a', text: 'At byene ligger på øyer som er varmere enn fastlandet', isCorrect: false },
        { id: 'b', text: 'At byer er merkbart varmere enn omliggende landlige områder på grunn av bebyggelse og asfalt', isCorrect: true },
        { id: 'c', text: 'At byene bruker mer energi til oppvarming', isCorrect: false },
        { id: 'd', text: 'At byene er omringet av varme havstrømmer', isCorrect: false },
      ],
      solution: 'Den urbane varmeøyeffekten betyr at byer er merkbart varmere enn omliggende landlige områder. Dette skyldes at asfalt, betong og bygninger absorberer og lagrer varme, mens mangel på vegetasjon reduserer avkjølingen. Forskjellen kan være 2–5 grader.',
    },
    {
      id: 'geo-6-6-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for minst tre klimautfordringer som byer står overfor, og forklar ett tilpasningstiltak for hver.',
      solution: '(1) Hetebølger: Byer rammes ekstra hardt på grunn av varmeøyeffekten. Tiltak: Planting av bytrær som gir skygge og kjøling gjennom fordamping. (2) Oversvømmelser: Tette flater i byer gir rask avrenning ved kraftig nedbør. Tiltak: Blågrønn infrastruktur som regnbed, grønne tak og permeable dekker som absorberer regnvann. (3) Havnivåstigning: Mange storbyer ligger ved kysten og er truet. Tiltak: Flombarrierer og stormflodporter, slik som Maeslantkering i Rotterdam.',
    },
    {
      id: 'geo-6-6-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hva segregering i byer er, hvorfor det oppstår, og hva som kan gjøres for å motvirke det.',
      solution: 'Segregering i byer betyr at ulike sosiale, økonomiske eller etniske grupper lever atskilt i forskjellige deler av byen. Det oppstår fordi boligmarkedet sorterer folk etter betalingsevne – de med høy inntekt bor i attraktive områder, mens lavinntektsgrupper konsentreres i rimeligere bydeler. Diskriminering og selvsortering forsterker dette. Konsekvensene er ulike oppvekstvilkår, svakere sosial tillit og forsterking av sosiale forskjeller over generasjoner. Tiltak mot segregering inkluderer variert boligsammensetning (blande prisklasser i samme område), inkluderende offentlige rom som parker og biblioteker, rettferdig fordeling av offentlige tjenester som skoler og helse, og målrettede områdesatsinger med ekstra investeringer i utsatte bydeler. Wien er et godt eksempel der kommunen eier og driver rimelige boliger spredt over hele byen.',
    },
    {
      id: 'geo-6-6-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken verdensdel forventes å ha den sterkeste byveksten fram mot 2050?',
      options: [
        { id: 'a', text: 'Europa', isCorrect: false },
        { id: 'b', text: 'Nord-Amerika', isCorrect: false },
        { id: 'c', text: 'Afrika', isCorrect: true },
        { id: 'd', text: 'Oseania', isCorrect: false },
      ],
      solution: 'Afrika forventes å ha den sterkeste byveksten fram mot 2050. Bybefolkningen på kontinentet forventes å tredobles, og byer som Lagos, Kinshasa og Dar es Salaam vil vokse enormt. Europa og Nord-Amerika har allerede høy urbaniseringsgrad og vil oppleve langsom eller stabil vekst.',
    },
  ],
};

// ============================================================================
// Eksport: Alle kapitler i Del 6
// ============================================================================

export const GEOGRAFI_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOGRAFI_6_1, CHAPTER_GEOGRAFI_6_2, CHAPTER_GEOGRAFI_6_3,
  CHAPTER_GEOGRAFI_6_4, CHAPTER_GEOGRAFI_6_5, CHAPTER_GEOGRAFI_6_6,
];
