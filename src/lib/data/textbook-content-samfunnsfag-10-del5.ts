/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - Del 5 (Kapittel 17-22)
 *
 * Følger LK20 læreplan for samfunnsfag ungdomstrinn.
 * Grundig og dyptgående innhold for avsluttende år.
 *
 * Tema: Historie — Fra 1900 til i dag
 *
 * Kapittel 17: Første verdenskrig og mellomkrigstiden
 * Kapittel 18: Andre verdenskrig og Holocaust
 * Kapittel 19: Den kalde krigen
 * Kapittel 20: Avkolonisering og den tredje verden
 * Kapittel 21: Norge etter 1945
 * Kapittel 22: Terrorisme og sikkerhet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 17: Første verdenskrig og mellomkrigstiden
// LK20: Utforske korleis menneske har kjempa og kjempar for endringar i
//        samfunnet og samstundes vurdere korleis endringar i samfunnet
//        har påverka og påverkar levekår og sjølvforståing
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_17: TextbookChapter = {
  id: 'samfunnsfag-10-17',
  courseId: 'samfunnsfag-10',
  chapterNumber: '17',
  title: 'Første verdenskrig og mellomkrigstiden',
  description: 'Forstå årsakene til første verdenskrig, krigens gang og konsekvenser, og hvordan mellomkrigstiden la grunnlaget for nye konflikter.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske korleis menneske har kjempa og kjempar for endringar i samfunnet',
    'gjere greie for årsaker til og konsekvensar av sentrale historiske og notidige konfliktar',
    'reflektere over korleis hendingar i fortida har påverka vår eiga tid',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-17-intro',
      type: 'text',
      content: `## Krigen som forandret alt

Sommeren 1914 trodde de fleste europeere at krigen ville være over til jul. Unge menn meldte seg frivillig, fulle av patriotisme og eventyrlyst. Fire år senere lå Europa i ruiner. Over 17 millioner mennesker var døde, imperier var falt, og en hel generasjon var merket for livet.

Første verdenskrig (1914–1918) var den mest ødeleggende konflikten verden hadde sett. Den endret landegrenser, styrtet kongehus og la grunnlaget for en ustabil mellomkrigstid som til slutt førte til en ny, enda mer brutal krig.

Men hvorfor brøt krigen ut? Hvordan ble et attentat i en liten by på Balkan til en verdensomspennende katastrofe? Og hva skjedde i årene etterpå som gjorde at Europa ikke klarte å bevare freden?

I dette kapittelet skal du lære om:
- Årsakene til første verdenskrig
- Krigens gang og dens nye, brutale karakter
- Konsekvensene av krigen og fredsoppgjøret
- Den russiske revolusjonen
- Mellomkrigstidens politiske og økonomiske uro
- Fremveksten av fascisme og nazisme`,
    },

    // ========== DEFINISJON: ÅRSAKER TIL KRIGEN ==========
    {
      id: 'samfunnsfag-10-17-def-1',
      type: 'definition',
      title: 'Årsakene til første verdenskrig',
      content: `Første verdenskrig hadde ikke én enkelt årsak, men skyldtes et samspill av flere langvarige spenninger:

**1. Nasjonalisme**
Sterk nasjonalfølelse preget Europa. Hvert folk ville ha sin egen stat, og mange mente at deres nasjon var overlegen. På Balkan kjempet flere folkegrupper for uavhengighet fra det østerriksk-ungarske riket og det osmanske riket. Dette skapte gjentatte kriser.

**2. Imperialisme**
De europeiske stormaktene konkurrerte om kolonier i Afrika og Asia. Denne konkurransen skapte rivalisering og mistillit, særlig mellom Storbritannia, Frankrike og Tyskland.

**3. Militarisme**
Stormaktene rustet opp militæret i et voldsomt tempo. Tyskland bygde en stor krigsflåte for å utfordre Storbritannias overlegenhet til sjøs. Et våpenkappløp økte spenningen og gjorde krig mer sannsynlig.

**4. Allianser**
Europa var delt i to alliansesystemer:
- **Trippelententen:** Frankrike, Russland og Storbritannia
- **Trippelalliansen:** Tyskland, Østerrike-Ungarn og Italia

Disse alliansene betydde at en konflikt mellom to land raskt kunne trekke inn alle stormaktene — som dominobrikker som faller.

**Den utløsende årsaken:**
28. juni 1914 ble den østerriksk-ungarske tronarvingen erkehertug Franz Ferdinand skutt og drept i Sarajevo av den bosnisk-serbiske nasjonalisten Gavrilo Princip. Østerrike-Ungarn stilte Serbia et ultimatum. Serbia avviste deler av det. Østerrike-Ungarn erklærte krig. Alliansesystemet trakk inn den ene stormakten etter den andre.`,
    },

    // ========== EKSEMPEL: SKUDDENE I SARAJEVO ==========
    {
      id: 'samfunnsfag-10-17-example-1',
      type: 'example',
      title: 'Eksempel: Skuddene i Sarajevo — den utløsende gnisten',
      problem: 'Hvordan kunne et attentat i en liten by på Balkan utløse en verdenskrig?',
      solution: `**Hendelsesforløpet:**

28. juni 1914 besøkte den østerriksk-ungarske tronfølgeren Franz Ferdinand byen Sarajevo i Bosnia. Bosnia var blitt annektert (innlemmet) av Østerrike-Ungarn i 1908, noe mange serbere var sterkt imot. De mente Bosnia burde tilhøre Serbia.

Den unge nasjonalisten Gavrilo Princip (19 år) tilhørte en serbisk nasjonalistgruppe. Da Franz Ferdinands bil tilfeldig stoppet rett foran ham etter en feilkjøring, benyttet han muligheten og skjøt både erkehertug Franz Ferdinand og hans kone Sophie.

**Dominoeffekten:**
1. Østerrike-Ungarn ga Serbia skylden og stilte et strengt ultimatum
2. Serbia godtok mesteparten, men ikke alt — Østerrike-Ungarn erklærte krig
3. Russland mobiliserte for å støtte Serbia (slavisk broderfolk)
4. Tyskland støttet Østerrike-Ungarn og erklærte krig mot Russland
5. Tyskland erklærte krig mot Frankrike (Russlands allierte) og marsjerte gjennom Belgia
6. Storbritannia erklærte krig mot Tyskland (hadde garantert Belgias nøytralitet)

**På bare fem uker** i juli–august 1914 gikk Europa fra fred til storkrig — fordi alliansesystemet fungerte som en kjedereaksjon.

**Viktig poeng:** Attentatet var bare den utløsende årsaken. De underliggende årsakene — nasjonalisme, imperialisme, militarisme og alliansene — hadde bygget opp spenningen over mange år. Uten disse ville ikke et enkelt attentat ha utløst en verdenskrig.`,
    },

    // ========== OPPGAVE 17.1 ==========
    {
      id: 'samfunnsfag-10-17-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-17-ex-1',
        number: '17.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var den utløsende årsaken til første verdenskrig?',
        options: [
          {
            id: 'a',
            text: 'Tysklands invasjon av Frankrike',
            isCorrect: false,
            feedback: 'Feil. Tysklands invasjon av Frankrike skjedde som en følge av krigen, ikke som den utløsende årsaken.',
          },
          {
            id: 'b',
            text: 'Attentatet mot erkehertug Franz Ferdinand i Sarajevo',
            isCorrect: true,
            feedback: 'Riktig! Skuddene i Sarajevo 28. juni 1914 var den utløsende årsaken, selv om de underliggende årsakene hadde bygget seg opp over lang tid.',
          },
          {
            id: 'c',
            text: 'Kappløpet om kolonier i Afrika',
            isCorrect: false,
            feedback: 'Feil. Imperialisme og kappløpet om kolonier var en underliggende årsak, ikke den utløsende hendelsen.',
          },
          {
            id: 'd',
            text: 'Den russiske revolusjonen',
            isCorrect: false,
            feedback: 'Feil. Den russiske revolusjonen skjedde i 1917, altså etter at krigen allerede hadde pågått i tre år.',
          },
        ],
        solution: 'Attentatet mot erkehertug Franz Ferdinand i Sarajevo 28. juni 1914 var den utløsende årsaken til første verdenskrig. De underliggende årsakene var nasjonalisme, imperialisme, militarisme og alliansesystemet.',
      },
    },

    // ========== OPPGAVE 17.2 ==========
    {
      id: 'samfunnsfag-10-17-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-17-ex-2',
        number: '17.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Årsakene til første verdenskrig.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom underliggende årsaker og utløsende årsaker. Bruk første verdenskrig som eksempel.',
            solution: 'Underliggende årsaker er de langvarige forholdene som bygger opp spenning over tid (nasjonalisme, imperialisme, militarisme, alliansesystemet). Utløsende årsaker er den konkrete hendelsen som setter i gang konflikten (attentatet i Sarajevo). Uten de underliggende årsakene ville ikke attentatet alene ha ført til verdenskrig.',
          },
          {
            label: 'b',
            task: 'Forklar hvordan alliansesystemet bidro til at en lokal konflikt på Balkan ble til en verdenskrig.',
            solution: 'Alliansesystemet fungerte som en kjedereaksjon. Da Østerrike-Ungarn gikk til krig mot Serbia, mobiliserte Russland for å hjelpe Serbia. Tyskland støttet Østerrike-Ungarn og gikk til krig mot Russland og Frankrike. Storbritannia gikk inn fordi Tyskland brøt Belgias nøytralitet. Slik ble en lokal konflikt til en storkrig på noen få uker.',
          },
        ],
        hints: ['Tenk på årsaker som et isfjell — det meste ligger under overflaten.'],
        solution: 'Første verdenskrig skyldtes et samspill mellom langvarige underliggende årsaker og en utløsende hendelse. Alliansesystemet var avgjørende for at en lokal konflikt ble til en verdenskrig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: KRIGENS KARAKTER ==========
    {
      id: 'samfunnsfag-10-17-def-2',
      type: 'definition',
      title: 'En ny type krig — skyttergravene',
      content: `Første verdenskrig var fundamentalt annerledes enn tidligere kriger. Ny teknologi gjorde krigen mer dødelig enn noen hadde forestilt seg:

**Skyttergravskrig:**
På vestfronten (i Frankrike og Belgia) gravde begge sider seg ned i et enormt system av skyttergraver. Frontlinjen beveget seg knapt på fire år. Mellom skyttergravene lå «ingenmannsland» — et øde landskap av gjørme, piggtråd og kratere.

**Ny teknologi:**
- **Maskingevær:** Kunne skyte hundrevis av kuler per minutt, noe som gjorde det selvmorderisk å storme motstanderens stillinger
- **Giftgass:** Brukt for første gang i 1915, forårsaket fryktelige lidelser
- **Stridsvogner (tanks):** Introdusert av britene i 1916 for å bryte gjennom skyttergravene
- **Fly:** Brukt til rekognosering og bombing for første gang i krigshistorien
- **Ubåter:** Tysklands ubåtkrig rammet allierte forsyningsskip

**Total krig:**
Første verdenskrig var den første «totale krigen» — hele samfunnet ble mobilisert. Fabrikker ble lagt om til våpenproduksjon. Kvinner overtok mennenes jobber. Matrasjonering ble innført. Propaganda ble brukt for å opprettholde kampmoralen.

**Menneskelige kostnader:**
- Over 17 millioner døde (soldater og sivile)
- 20 millioner sårede
- Millioner med varige psykiske skader — «skjellettersjokk» (det vi i dag kaller PTSD)
- En hel generasjon unge menn ble desimert`,
    },

    // ========== OPPGAVE 17.3 ==========
    {
      id: 'samfunnsfag-10-17-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-17-ex-3',
        number: '17.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med at første verdenskrig var en «total krig»?',
        options: [
          {
            id: 'a',
            text: 'At absolutt alle land i verden deltok i krigen',
            isCorrect: false,
            feedback: 'Feil. Ikke alle land deltok — mange var nøytrale, blant dem Norge. «Total krig» handler om noe annet.',
          },
          {
            id: 'b',
            text: 'At hele samfunnet ble mobilisert — industri, økonomi og sivilbefolkning, ikke bare soldatene',
            isCorrect: true,
            feedback: 'Riktig! En total krig betyr at hele samfunnet er involvert: fabrikker produserer våpen, kvinner overtar sivile jobber, mat rasjoneres, og propaganda brukes for å holde moralen oppe.',
          },
          {
            id: 'c',
            text: 'At krigen varte i alle årstider uten pauser',
            isCorrect: false,
            feedback: 'Feil. Krigen pågikk riktignok hele året, men «total krig» handler om mobilisering av hele samfunnet, ikke om tidsaspektet.',
          },
          {
            id: 'd',
            text: 'At alle soldatene kjempet til siste mann',
            isCorrect: false,
            feedback: 'Feil. «Total krig» beskriver mobiliseringen av hele samfunnet, ikke soldatenes kampvilje.',
          },
        ],
        solution: '«Total krig» betyr at hele samfunnet mobiliseres for krigsinnsatsen — industrien, økonomien og sivilbefolkningen. Det skiller seg fra tidligere kriger der det hovedsakelig var profesjonelle soldater som var involvert.',
      },
    },

    // ========== DEFINISJON: KONSEKVENSENE ==========
    {
      id: 'samfunnsfag-10-17-def-3',
      type: 'definition',
      title: 'Konsekvensene av første verdenskrig',
      content: `Første verdenskrig forandret Europa og verden fundamentalt:

**Politiske konsekvenser:**
- **Imperier falt:** Det osmanske riket, det østerriksk-ungarske riket, det russiske tsarriket og det tyske keiserriket brøt alle sammen
- **Nye stater:** En rekke nye nasjonalstater ble opprettet, blant dem Polen, Tsjekkoslovakia, Jugoslavia og de baltiske statene
- **Den russiske revolusjonen (1917):** Krigen førte til revolusjon i Russland. Tsaren ble styrtet, og bolsjevikene under Lenin grep makten. Sovjet-staten ble grunnlagt — verdens første kommunistiske stat

**Versailles-traktaten (1919):**
Fredsoppgjøret etter krigen la hovedskylden på Tyskland:
- Tyskland måtte akseptere «krigsskylden»
- Enorme erstatningsbetalinger (krigsskadeerstatning)
- Store landområder ble fratatt Tyskland
- Militæret ble sterkt begrenset
- Mange tyskere opplevde traktaten som dypt urettferdig — den skapte bitterhet og hevnlyst

**Folkeforbundet:**
USAs president Woodrow Wilson tok initiativ til Folkeforbundet — en internasjonal organisasjon som skulle sikre fred gjennom diplomati og samarbeid. Det var forløperen til FN. Men Folkeforbundet hadde store svakheter: USA ble aldri medlem, og organisasjonen manglet maktmidler til å håndheve sine beslutninger.

**Samfunnsmessige konsekvenser:**
- Kvinner hadde bevist at de kunne gjøre «mennenes arbeid» — dette styrket kravet om stemmerett
- Klasseforskjeller ble utfordret
- Troen på fremskritt og europeisk overlegenhet ble rystet`,
    },

    // ========== EKSEMPEL: VERSAILLES-TRAKTATEN ==========
    {
      id: 'samfunnsfag-10-17-example-2',
      type: 'example',
      title: 'Eksempel: Versailles-traktaten — fred eller frø til ny krig?',
      problem: 'Var Versailles-traktaten en rettferdig fred, eller sådde den frøene til en ny krig?',
      solution: `**Argumenter for at traktaten var rimelig:**
- Tyskland hadde startet krigen (sammen med Østerrike-Ungarn)
- Frankrike og Belgia hadde lidd enorme ødeleggelser og hadde rett til kompensasjon
- Det var viktig å svekke Tysklands militære kapasitet for å hindre ny aggresjon
- Prinsippet om nasjonalstatens rett ga undertrykte folk selvstendighet

**Argumenter for at traktaten var for streng:**
- «Krigsskylden» var ydmykende og historisk upresis — flere land bar ansvar
- Erstatningskravene var så store at de knuste den tyske økonomien
- Millioner av tyskere havnet plutselig i andre land da grensene ble tegnet om
- Bitterheten ga grobunn for ekstreme politiske bevegelser

**Den franske marskalken Ferdinand Foch** uttalte profetisk om Versailles-traktaten: *«Dette er ikke fred. Det er en våpenhvile for tjue år.»* Han fikk rett — nesten på dagen. Andre verdenskrig brøt ut 20 år og 65 dager senere.

**Lærdommen:** Etter andre verdenskrig lærte seierherrene av feilene. I stedet for å straffe Tyskland hardt, ble det satset på gjenoppbygging (Marshallplanen). Dette bidro til varig fred i Vest-Europa.`,
    },

    // ========== OPPGAVE 17.4 ==========
    {
      id: 'samfunnsfag-10-17-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-17-ex-4',
        number: '17.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Versailles-traktaten og dens konsekvenser.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre viktige bestemmelser i Versailles-traktaten som rammet Tyskland.',
            solution: 'Tre viktige bestemmelser: 1) Tyskland måtte akseptere krigsskylden. 2) Tyskland ble pålagt enorme erstatningsbetalinger. 3) Store landområder ble fratatt Tyskland (Alsace-Lorraine til Frankrike, områder til Polen, kolonier ble delt mellom seierherrene). I tillegg ble det tyske militæret sterkt begrenset.',
          },
          {
            label: 'b',
            task: 'Drøft: Bidro Versailles-traktaten til å legge grunnlaget for andre verdenskrig? Begrunn svaret ditt.',
            solution: 'Versailles-traktaten bidro til andre verdenskrig ved å skape dyp bitterhet i Tyskland. Erstatningskravene og krigsskylden ble opplevd som urettferdige og ydmykende. Denne bitterheten ga grobunn for ekstreme bevegelser som nazistene, som lovte å gjøre Tyskland stort igjen. Samtidig var traktaten ikke streng nok til å hindre Tyskland i å ruste opp igjen. Folkeforbundet var for svakt til å håndheve freden.',
          },
        ],
        hints: ['Tenk på sammenhengen mellom ydmykelse og ekstremisme.'],
        solution: 'Versailles-traktaten var streng nok til å skape bitterhet, men ikke streng nok til å hindre Tyskland i å ruste opp igjen. Denne kombinasjonen bidro til å legge grunnlaget for andre verdenskrig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: MELLOMKRIGSTIDEN ==========
    {
      id: 'samfunnsfag-10-17-mellomkrigstid',
      type: 'text',
      content: `## Mellomkrigstiden — uro, krise og fremvekst av diktatur

Årene mellom 1918 og 1939 var en periode preget av store motsetninger. «De glade 1920-årene» med økonomisk vekst og kulturell blomstring ble etterfulgt av verdens verste økonomiske krise. Demokratiet seiret noen steder, men ble knust andre.

### Den russiske revolusjonen og Sovjetunionen
I 1917 førte krigens lidelser til revolusjon i Russland. Tsar Nikolaj II abdiserte, og etter en kaotisk periode grep bolsjevikene under Vladimir Lenin makten i oktober 1917. De innførte kommunisme — et system der staten eide produksjonsmidlene og styrte økonomien.

Etter Lenins død i 1924 tok Josef Stalin makten. Under hans styre ble Sovjetunionen en industriell stormakt, men til en fryktelig pris: millioner døde av sult, i arbeidsleire (gulag) eller i politiske utrenskninger. All opposisjon ble knust.

### Børskrakket og den store depresjonen (1929)
I oktober 1929 kollapset børsen i New York. Krisen spredte seg som en bølge over hele verden:
- Fabrikker stengte, banker gikk konkurs, og millioner mistet jobben
- I USA nådde arbeidsledigheten 25 prosent
- I Tyskland ble over 6 millioner arbeidsløse — det skapte desperasjon og radikalisering
- Krisen rammet også Norge hardt, med massearbeidsløshet og sosial nød

### Fascismens og nazismens fremvekst
Den økonomiske krisen, ydmykelsen etter Versailles og frykten for kommunisme skapte grobunn for fascistiske bevegelser:

**Italia:** Benito Mussolini grep makten allerede i 1922 og innførte et fascistisk diktatur. Fascismen lovte nasjonal gjenreisning, lov og orden, og et sterkt lederskap.

**Tyskland:** Adolf Hitler og det nasjonalsosialistiske partiet (NSDAP) utnyttet den økonomiske krisen og den tyske bitterheten. Hitler ble utnevnt til rikskansler i 1933 og innførte raskt et totalitært diktatur. Han avskaffet demokratiet, forbød alle andre partier, og begynte systematisk forfølgelse av jøder og andre minoriteter.`,
    },

    // ========== OPPGAVE 17.5 ==========
    {
      id: 'samfunnsfag-10-17-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-17-ex-5',
        number: '17.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken sammenheng var det mellom den store depresjonen (1929) og fremveksten av nazismen i Tyskland?',
        options: [
          {
            id: 'a',
            text: 'Det var ingen sammenheng — Hitler ville ha kommet til makten uansett',
            isCorrect: false,
            feedback: 'Feil. Den økonomiske krisen var avgjørende for at nazistene fikk masseoppslutning. Før krakket var NSDAP et lite parti.',
          },
          {
            id: 'b',
            text: 'Den økonomiske krisen skapte massearbeidsløshet og desperasjon, noe Hitler utnyttet ved å love arbeid og nasjonal gjenreisning',
            isCorrect: true,
            feedback: 'Riktig! Da millioner mistet jobben, mistet mange også troen på demokratiet. Hitler lovte arbeid, brød og nasjonal stolthet — og ga de frustrerte massene syndebukker å skylde på.',
          },
          {
            id: 'c',
            text: 'Den store depresjonen ble forårsaket av nazistene for å gripe makten',
            isCorrect: false,
            feedback: 'Feil. Børskrakket i 1929 startet i USA og hadde ingenting med nazistene å gjøre. Men nazistene utnyttet krisen politisk.',
          },
          {
            id: 'd',
            text: 'Hitler ble valgt fordi han var bankmann og lovte å fikse økonomien',
            isCorrect: false,
            feedback: 'Feil. Hitler var ikke bankmann. Han appellerte til folkelige frustrasjoner gjennom nasjonalisme, propaganda og løfter om arbeid og gjenreisning.',
          },
        ],
        solution: 'Den store depresjonen skapte massearbeidsløshet og desperasjon i Tyskland. Hitler utnyttet dette ved å love arbeid og nasjonal gjenreisning, gi folk syndebukker (jøder, kommunister), og fremstille seg som Tysklands redningsmann.',
      },
    },

    // ========== OPPGAVE 17.6 ==========
    {
      id: 'samfunnsfag-10-17-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-17-ex-6',
        number: '17.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Mellomkrigstidens politiske utvikling.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar kort hva fascisme er, og nevn to kjennetegn ved fascistiske regimer.',
            solution: 'Fascisme er en autoritær politisk ideologi som kjennetegnes av: sterk nasjonalisme, en karismatisk leder med nærmest uinnskrenket makt, undertrykkelse av opposisjon, kontroll over medier og utdanning, forherligelse av militærmakt, og ofte rasisme eller forakt for svakhet. To typiske kjennetegn: ettpartistyre og bruk av propaganda og vold for å kontrollere befolkningen.',
          },
          {
            label: 'b',
            task: 'Hvorfor tror du at mange mennesker i mellomkrigstiden støttet sterke ledere som Mussolini og Hitler, selv om de avskaffet demokratiet?',
            solution: 'Mange følte at demokratiet hadde feilet — det hadde ikke klart å skape stabilitet, forhindre økonomisk krise eller gjenopprette nasjonal stolthet. Sterke ledere lovte handlekraft, lov og orden, arbeid og nasjonal gjenreisning. Frykten for kommunisme fikk også deler av overklassen og middelklassen til å støtte fascistene som et «bolverk» mot revolusjon.',
          },
        ],
        hints: ['Tenk på hvilke behov og følelser disse lederne appellerte til.'],
        solution: 'Fascismens fremvekst skyldtes en kombinasjon av økonomisk krise, nasjonal ydmykelse, frykt for kommunisme, og en følelse av at demokratiet ikke fungerte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-17-oppsummering',
      type: 'text',
      content: `## Oppsummering: Første verdenskrig og mellomkrigstiden

Første verdenskrig (1914–1918) var en katastrofe som forandret verden for alltid. Årsakene var sammensatte — nasjonalisme, imperialisme, militarisme og alliansesystemer skapte en eksplosiv situasjon som ble antent av attentatet i Sarajevo.

**De viktigste punktene:**
- Krigen kostet over 17 millioner menneskeliv og introduserte ny, brutal krigsteknologi
- Store imperier falt og nye nasjonalstater ble opprettet
- Versailles-traktaten la skylden på Tyskland og skapte dyp bitterhet
- Den russiske revolusjonen førte til opprettelsen av Sovjetunionen
- Børskrakket i 1929 utløste en global økonomisk krise
- Krisen skapte grobunn for fascisme og nazisme i Europa
- Demokratiet ble truet da ekstreme bevegelser fikk masseoppslutning`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-17-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-17-ex-7',
        number: '17.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand: «Første verdenskrig og andre verdenskrig var egentlig én lang konflikt med en pause i midten.»',
        subTasks: [
          {
            label: 'a',
            task: 'Presenter argumenter for at de to krigene hang sammen som én lang konflikt.',
            solution: 'Argumenter for: Versailles-traktatens harde vilkår skapte bitterhet som førte til nazismens fremvekst. De uløste nasjonale spenningene fra første verdenskrig fortsatte. Mange av de samme landene og konfliktlinjene var involvert. Mellomkrigstiden kan ses som en ustabil pause der de underliggende spenningene aldri ble løst.',
          },
          {
            label: 'b',
            task: 'Presenter argumenter mot — altså for at de var to separate kriger med ulike årsaker.',
            solution: 'Argumenter mot: Andre verdenskrig hadde nye årsaker (nazisme, Holocaust, ideologisk kamp). Nye aktører spilte andre roller (Japan, USA). Krigen hadde en annen karakter (mer ideologisk, mer totalitær). Mange faktorer mellom krigene — som børskrakket, fascismens fremvekst — var ikke direkte konsekvenser av første verdenskrig.',
          },
          {
            label: 'c',
            task: 'Gi din egen vurdering: Hang de to verdenskrigene sammen, eller var de separate konflikter?',
            solution: 'En god vurdering erkjenner at det er sterke sammenhenger mellom krigene (Versailles-traktaten, uløste spenninger), men at andre verdenskrig også hadde egne årsaker (nazisme som ideologi, Hitlers personlige rolle, Holocaust). Den mest nyanserte konklusjonen er at første verdenskrig skapte forholdene som muliggjorde andre verdenskrig, men at det ikke var uunngåelig.',
          },
        ],
        hints: ['Tenk på sammenhengen mellom årsak og virkning over tid.'],
        solution: 'Det er sterke sammenhenger mellom de to verdenskrigene, men andre verdenskrig hadde også egne årsaker og en annen karakter. Historikere kaller ofte perioden 1914–1945 for «den andre trettiårskrigen».',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-17-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-17-ex-8',
        number: '17.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kan vi lære av mellomkrigstiden i dag? Drøft om det finnes paralleller mellom mellomkrigstiden og vår egen tid.',
        hints: [
          'Tenk på økonomisk usikkerhet, politisk polarisering og fremvekst av populisme.',
          'Er det noen forskjeller som gjør at det ikke vil skje igjen?',
        ],
        solution: 'Mulige paralleller: økonomiske kriser kan skape politisk radikalisering, populistiske ledere utnytter frustrasjon, demokratiet kan utfordres av ekstreme bevegelser. Viktige forskjeller: internasjonale organisasjoner (EU, FN, NATO) er sterkere, økonomisk samarbeid er tettere, og erfaringen fra mellomkrigstiden har gjort demokratier mer bevisste på faresignalene. En god drøfting viser at historisk kunnskap er viktig for å forstå — og forebygge — fremtidige trusler mot demokratiet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Nasjonalisme', definition: 'Sterk kjærlighet til og identifikasjon med egen nasjon, ofte med tro på at ens egen nasjon er overlegen' },
    { term: 'Imperialisme', definition: 'Stormakters politikk med å skaffe seg kolonier og utvide sitt maktområde' },
    { term: 'Militarisme', definition: 'Vektlegging av militær styrke som avgjørende for en stats sikkerhet og prestisje' },
    { term: 'Alliansesystem', definition: 'Avtaler mellom land om å støtte hverandre militært ved angrep — trippelententen og trippelalliansen' },
    { term: 'Skyttergravskrig', definition: 'Krigføring fra gravde stillinger der frontlinjen knapt beveger seg, typisk for vestfronten 1914–1918' },
    { term: 'Total krig', definition: 'Krig der hele samfunnet mobiliseres — industri, økonomi og sivilbefolkning' },
    { term: 'Versailles-traktaten', definition: 'Fredstraktaten fra 1919 som la krigsskylden på Tyskland og påla strenge vilkår' },
    { term: 'Folkeforbundet', definition: 'Internasjonal fredsorganisasjon opprettet i 1920, forløper til FN, men med begrensede maktmidler' },
    { term: 'Kommunisme', definition: 'Politisk ideologi der staten eier produksjonsmidlene og styrer økonomien, innført i Russland etter revolusjonen i 1917' },
    { term: 'Fascisme', definition: 'Autoritær politisk ideologi med sterk nasjonalisme, diktatorisk lederskap og undertrykkelse av opposisjon' },
    { term: 'Den store depresjonen', definition: 'Global økonomisk krise etter børskrakket i 1929, med massearbeidsløshet og sosial nød' },
    { term: 'NSDAP', definition: 'Det nasjonalsosialistiske tyske arbeiderparti — Hitlers nazistparti' },
  ],
};

// ============================================================================
// KAPITTEL 18: Andre verdenskrig og Holocaust
// LK20: Gjere greie for årsaker til og konsekvensar av sentrale historiske
//        og notidige konfliktar og reflektere over om endringar av nokre
//        føresetnader kunne ha hindra konfliktane
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_18: TextbookChapter = {
  id: 'samfunnsfag-10-18',
  courseId: 'samfunnsfag-10',
  chapterNumber: '18',
  title: 'Andre verdenskrig og Holocaust',
  description: 'Forstå årsakene til andre verdenskrig, krigens gang, okkupasjonen av Norge, Holocaust og krigens varige konsekvenser.',
  estimatedMinutes: 100,
  competenceGoals: [
    'gjere greie for årsaker til og konsekvensar av sentrale historiske og notidige konfliktar',
    'reflektere over om endringar av nokre føresetnader kunne ha hindra konfliktane',
    'utforske korleis menneske har kjempa og kjempar for endringar i samfunnet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-18-intro',
      type: 'text',
      content: `## Krigen som aldri må glemmes

Andre verdenskrig (1939–1945) var den mest ødeleggende konflikten i menneskehetens historie. Mellom 70 og 85 millioner mennesker mistet livet — soldater, sivile, krigsfanger og ofre for folkemord. Krigen rammet alle kontinenter og forandret verden for alltid.

Midt i denne krigen ble det begått et av historiens verste forbrytelser: Holocaust — det systematiske folkemordet på seks millioner jøder og millioner av andre mennesker som naziregimet anså som «uønskede». Denne tragedien er en påminnelse om hva som kan skje når hat, rasisme og likegyldighet får vokse uhindret.

For Norge betydde krigen fem år med okkupasjon, motstandskamp og store offer. Erfaringene fra krigen formet det norske samfunnet i generasjoner etterpå.

I dette kapittelet skal du lære om:
- Veien mot krig — Hitlers aggresjon og ettergivenhetspolitikken
- Krigens gang i Europa og verden
- Norge under okkupasjonen
- Holocaust — folkemord og menneskelig ondskap
- Krigens konsekvenser og arven vi bærer`,
    },

    // ========== DEFINISJON: VEIEN MOT KRIG ==========
    {
      id: 'samfunnsfag-10-18-def-1',
      type: 'definition',
      title: 'Veien mot krig — Hitlers aggresjon',
      content: `Etter at Adolf Hitler kom til makten i Tyskland i 1933, begynte han systematisk å bryte bestemmelsene i Versailles-traktaten og utvide Tysklands maktområde:

**Hitlers steg mot krig:**
1. **1933:** Hitler trekker Tyskland ut av Folkeforbundet
2. **1935:** Alminnelig verneplikt gjeninnføres — åpent brudd med Versailles-traktaten
3. **1936:** Tyske tropper marsjerer inn i Rhinlandet (demilitarisert sone)
4. **1938 (mars):** Anschluss — Østerrike innlemmes i Tyskland
5. **1938 (september):** Sudetenland (del av Tsjekkoslovakia) avståes til Tyskland etter München-avtalen
6. **1939 (mars):** Resten av Tsjekkoslovakia okkuperes
7. **1939 (september):** Tyskland invaderer Polen — andre verdenskrig begynner

**Ettergivenhetspolitikken (appeasement):**
Storbritannia og Frankrike forsøkte å unngå krig ved å gi etter for Hitlers krav. Den britiske statsministeren Neville Chamberlain møtte Hitler i München i september 1938 og godtok at Tyskland annekterte Sudetenland. Chamberlain kom hjem og erklærte «fred i vår tid».

Ettergivenhetspolitikken feilet fordi:
- Hitler tolket ettergivenheten som svakhet og ble bare modigere
- Hver innrømmelse ble fulgt av nye krav
- Tsjekkoslovakia ble ofret uten å bli spurt
- Politikken ga Hitler tid til å ruste opp

**Molotov-Ribbentrop-pakten (august 1939):**
Tyskland og Sovjetunionen inngikk en ikke-angrepspakt som sjokkerte verden. I en hemmelig tilleggsprotokoll delte de Øst-Europa mellom seg. Pakten ga Hitler frie hender til å angripe Polen uten å frykte krig på to fronter.`,
    },

    // ========== OPPGAVE 18.1 ==========
    {
      id: 'samfunnsfag-10-18-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-18-ex-1',
        number: '18.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var ettergivenhetspolitikken (appeasement)?',
        options: [
          {
            id: 'a',
            text: 'En politikk der Storbritannia og Frankrike ga etter for Hitlers krav for å unngå krig',
            isCorrect: true,
            feedback: 'Riktig! Ettergivenhetspolitikken gikk ut på å godta Hitlers krav i håp om å bevare freden — men den feilet fordi Hitler bare stilte nye krav.',
          },
          {
            id: 'b',
            text: 'En politikk der Tyskland ga etter for Storbritannias krav',
            isCorrect: false,
            feedback: 'Feil. Det var omvendt — det var Storbritannia og Frankrike som ga etter for Tysklands krav.',
          },
          {
            id: 'c',
            text: 'En militær allianse mellom Storbritannia og Tyskland',
            isCorrect: false,
            feedback: 'Feil. Storbritannia og Tyskland var ikke allierte. Ettergivenhetspolitikken var et forsøk på å unngå krig gjennom diplomati.',
          },
          {
            id: 'd',
            text: 'En økonomisk handelsavtale mellom europeiske land',
            isCorrect: false,
            feedback: 'Feil. Ettergivenhetspolitikken handlet om territorielle og politiske innrømmelser, ikke handel.',
          },
        ],
        solution: 'Ettergivenhetspolitikken (appeasement) var Storbritannias og Frankrikes strategi om å gi etter for Hitlers krav for å unngå krig. Den feilet fordi Hitler tolket ettergivenheten som svakhet og bare stilte nye krav.',
      },
    },

    // ========== DEFINISJON: KRIGENS GANG ==========
    {
      id: 'samfunnsfag-10-18-def-2',
      type: 'definition',
      title: 'Andre verdenskrig — krigens gang',
      content: `Andre verdenskrig ble utkjempet i Europa, Asia, Afrika og på verdenshavene. Den kan deles inn i flere faser:

**Fase 1: Tysk ekspansjon (1939–1941)**
- September 1939: Tyskland invaderer Polen. Storbritannia og Frankrike erklærer krig.
- April 1940: Tyskland okkuperer Danmark og Norge
- Mai-juni 1940: Tyskland erobrer Nederland, Belgia og Frankrike på bare seks uker (blitzkrieg — lynkrig)
- 1940–1941: Slaget om Storbritannia — Tyskland bomber britiske byer, men klarer ikke å invadere

**Fase 2: Krigen blir global (1941)**
- Juni 1941: Tyskland bryter ikke-angrepspakten og invaderer Sovjetunionen (Operasjon Barbarossa)
- Desember 1941: Japan angriper Pearl Harbor — USA går inn i krigen
- Krigen er nå en verdensomspennende konflikt med to hovedfronter

**Fase 3: Vendepunktet (1942–1943)**
- Slaget om Stalingrad (1942–1943): Tysk nederlag — vendepunktet på østfronten
- Slaget om El-Alamein (1942): Britisk seier i Nord-Afrika
- Alliert invasjon av Italia (1943): Mussolini styrtes

**Fase 4: Alliert seier (1944–1945)**
- 6. juni 1944 (D-dagen): Alliert invasjon av Normandie — den største amfibieoperasjonen i historien
- Sovjetunionen presser Tyskland tilbake fra øst
- Mai 1945: Tyskland kapitulerer. Hitler har begått selvmord 30. april.
- August 1945: USA slipper atombomber over Hiroshima og Nagasaki. Japan kapitulerer.

**Krigens omfang:**
- 70–85 millioner døde (flertallet sivile)
- Enorme materielle ødeleggelser over hele Europa og Asia
- Bruk av atombomben innledet atomalderen`,
    },

    // ========== TEKST: NORGE UNDER OKKUPASJONEN ==========
    {
      id: 'samfunnsfag-10-18-norge',
      type: 'text',
      content: `## Norge under okkupasjonen (1940–1945)

9. april 1940 angrep Tyskland Norge i en overraskende invasjon. Til tross for motstand i to måneder, ble Norge okkupert. Kong Haakon VII og regjeringen flyktet til London, der de ledet en eksilregjering.

### Okkupasjonen i praksis
- **Vidkun Quisling** forsøkte et statskupp 9. april, men mislyktes. Han ble likevel innsatt som ministerpresident av tyskerne i 1942. Navnet hans ble et internasjonalt ord for «landsforræder».
- Hverdagen under okkupasjonen var preget av matmangel, rasjonering, sensur og frykt
- Tyskerne innførte unntakstilstand og straffet motstand med fengsel, tortur og henrettelser
- Over 300 000 tyske soldater var stasjonert i Norge

### Motstandskampen
Nordmenn gjorde motstand på mange måter:
- **Sivil motstand:** Lærere nektet å undervise nazistisk ideologi (læreraksjonen 1942), idrettsutøvere og prester protesterte
- **Militær motstand:** Milorg (hjemmestyrkene) drev sabotasje og etterretning. Tungtvannsaksjonene på Rjukan (1943) saboterte Tysklands atombombeprogram.
- **Holdningskamp:** Mange nordmenn nektet å samarbeide med okkupasjonsmakten i hverdagen — de viste at de ikke aksepterte okkupasjonen

### Rettsoppgjøret
Etter frigjøringen 8. mai 1945 fulgte et rettsoppgjør:
- Omtrent 90 000 nordmenn ble etterforsket for landssvik
- Rundt 50 000 ble dømt, de fleste til bøter eller kortere fengselsstraffer
- 25 nordmenn og 12 tyskere ble henrettet, blant dem Vidkun Quisling
- Rettsoppgjøret var omstridt — noen mente det var for mildt, andre at det var for strengt`,
    },

    // ========== OPPGAVE 18.2 ==========
    {
      id: 'samfunnsfag-10-18-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-18-ex-2',
        number: '18.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norge under okkupasjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre ulike former for motstand som nordmenn utøvde under okkupasjonen.',
            solution: 'Tre former for motstand: 1) Sivil motstand — lærere nektet å undervise nazistisk ideologi, idrettsutøvere boikottet. 2) Militær motstand — Milorg drev sabotasje og etterretning, tungtvannsaksjonene på Rjukan. 3) Holdningskamp — folk nektet å samarbeide med okkupasjonsmakten i hverdagen, bar binders som protest.',
          },
          {
            label: 'b',
            task: 'Hva tror du motiverte vanlige mennesker til å gjøre motstand, til tross for risikoen for straff, tortur og død?',
            solution: 'Motivasjon kunne være: patriotisme og kjærlighet til Norge, pliktfølelse, ønske om å bevare demokrati og frihet, moralsk overbevisning om at okkupasjonen var galt, solidaritet med medmennesker, og tro på at motstand nyttet. Mange handlet ut fra samvittighet — de følte at de ikke kunne stå passivt og se på urett.',
          },
        ],
        hints: ['Tenk på hva du ville ha gjort om du levde i okkupert Norge.'],
        solution: 'Motstandskampen i Norge hadde mange former — fra væpnet sabotasje til stille sivil protest. Den var drevet av patriotisme, moralsk overbevisning og ønske om frihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: HOLOCAUST ==========
    {
      id: 'samfunnsfag-10-18-def-3',
      type: 'definition',
      title: 'Holocaust — folkemordet på Europas jøder',
      content: `**Holocaust** (også kalt Shoah) var det systematiske, statlig organiserte folkemordet på omtrent seks millioner jøder utført av Nazi-Tyskland og dets medhjelpere under andre verdenskrig.

**Bakgrunn — antisemittisme:**
Jødehat (antisemittisme) hadde dype røtter i europeisk historie. Nazistene tok denne fordommen til et ekstremt nivå. De mente at jøder var en «underlegent rase» som truet den «ariske rasen». Denne raseideologien ble brukt til å rettferdiggjøre systematisk forfølgelse og til slutt massedrap.

**Trappene mot folkemord:**
1. **Definisjon:** Nürnberg-lovene (1935) definerte hvem som var jøde og fratok dem borgerrettigheter
2. **Diskriminering:** Jøder ble utestengt fra yrker, skoler og offentlige steder
3. **Forfølgelse:** Krystallnatten (1938) — organiserte angrep på jødiske butikker, synagoger og hjem
4. **Konsentrasjon:** Jøder ble samlet i gettoer — avgrensede bydeler med elendige forhold
5. **Utryddelse:** Fra 1942 ble «den endelige løsningen» iverksatt — systematisk massedrap i utryddelsesleirer som Auschwitz, Treblinka og Sobibor

**Metodene:**
Nazistene brukte industrielle metoder for å drepe mennesker — gasskamre, masseskytinger og tvangsarbeid under umenneskelige forhold. Logistikken bak folkemordet var nøye planlagt med jernbanetransporter, registreringssystemer og byråkrati.

**Andre offergrupper:**
Nazistenes massedrap rammet også:
- Romani (sigøynere) — opptil 500 000 drept
- Mennesker med funksjonsnedsettelser — over 200 000 drept i «eutanasi»-programmet
- Sovjetiske krigsfanger — rundt 3 millioner døde i fangenskap
- Homofile, Jehovas vitner, politiske motstandere og andre

**Holocaust i Norge:**
772 norske jøder ble deportert til tyske utryddelsesleirer. Bare 34 overlevde. Den mest kjente deportasjonen skjedde 26. november 1942, da skipet «Donau» fraktet 532 norske jøder til Auschwitz. Norsk politi og embetsverk deltok i arrestasjonene — et mørkt kapittel i norsk historie.`,
    },

    // ========== EKSEMPEL: HOLOCAUST I NORGE ==========
    {
      id: 'samfunnsfag-10-18-example-1',
      type: 'example',
      title: 'Eksempel: Norges ansvar under Holocaust',
      problem: 'Hvilket ansvar hadde norske myndigheter og nordmenn i deportasjonen av norske jøder under andre verdenskrig?',
      solution: `**Faktiske forhold:**
26. november 1942 ble 532 jødiske menn, kvinner og barn arrestert over hele Norge og fraktet til Oslo havn. Der ble de stuet om bord i lasteskipet «Donau» og sendt til Auschwitz. De fleste ble drept i gasskamrene like etter ankomst.

**Norsk deltakelse:**
- Norsk politi gjennomførte arrestasjonene — ikke tyske soldater
- Norske drosjesjåfører kjørte jødene til havna
- Norske embetsmenn hadde registrert jødene og stemplet passene deres med «J»
- NS-regimet (Quisling-styret) samarbeidet aktivt med tyskerne

**Norsk motstand:**
- Mange nordmenn hjalp jøder med å flykte til Sverige — rundt 1 100 norske jøder ble reddet slik
- Motstandsbevegelsen organiserte rømningsruter over grensen
- Noen nordmenn skjulte jødiske familier med fare for eget liv

**Etterkrigstiden:**
Det tok lang tid før Norge tok et oppgjør med sin rolle i Holocaust. Først i 1998 ble det opprettet en offentlig kommisjon som kartla konfiskeringen av jødisk eiendom. I 1999 ga den norske regjeringen en offentlig unnskyldning og tilbakebetaling til de norske jødene og deres etterkommere.

**Lærdommen:**
Historien om Holocaust i Norge viser at folkemord ikke bare begås av fjerne diktatorer — det krever aktiv eller passiv medvirkning fra vanlige mennesker og institusjoner. Det understreker hvor viktig det er å stå opp mot urettferdighet, også når det er farlig.`,
    },

    // ========== OPPGAVE 18.3 ==========
    {
      id: 'samfunnsfag-10-18-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-18-ex-3',
        number: '18.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var «den endelige løsningen» (Endlösung)?',
        options: [
          {
            id: 'a',
            text: 'Nazistenes plan for å vinne krigen mot Sovjetunionen',
            isCorrect: false,
            feedback: 'Feil. «Den endelige løsningen» handlet ikke om militærstrategi, men om massedrap på jøder.',
          },
          {
            id: 'b',
            text: 'Nazistenes plan for systematisk utryddelse av Europas jøder gjennom gasskamre og utryddelsesleirer',
            isCorrect: true,
            feedback: 'Riktig. «Den endelige løsningen» var nazistenes kodeord for det planlagte folkemordet på alle Europas jøder, vedtatt på Wannsee-konferansen i januar 1942.',
          },
          {
            id: 'c',
            text: 'En fredsavtale Tyskland tilbød de allierte',
            isCorrect: false,
            feedback: 'Feil. Det var ingen fredsavtale. «Den endelige løsningen» var kodenavnet for folkemordet.',
          },
          {
            id: 'd',
            text: 'Planen for å tvangsflytte alle jøder til Madagaskar',
            isCorrect: false,
            feedback: 'Feil. En slik plan ble diskutert tidlig, men ble forkastet. «Den endelige løsningen» var massedrap i industriell skala.',
          },
        ],
        solution: '«Den endelige løsningen» (Endlösung) var nazistenes betegnelse for den systematiske utryddelsen av Europas jøder. Planen ble koordinert på Wannsee-konferansen i januar 1942 og resulterte i drapet på seks millioner jøder i gasskamre og utryddelsesleirer.',
      },
    },

    // ========== OPPGAVE 18.4 ==========
    {
      id: 'samfunnsfag-10-18-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-18-ex-4',
        number: '18.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Holocaust og ansvar.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva begrepet «tilskuere» (bystanders) betyr i sammenheng med Holocaust.',
            solution: '«Tilskuere» var de som verken deltok direkte i overgrepene eller aktivt motarbeidet dem. De visste hva som skjedde — eller valgte å ikke vite — men grep ikke inn. Tilskuerne var den største gruppen under Holocaust, og deres passivitet muliggjorde folkemordet. Når folk ser bort, får overgriperne fritt spillerom.',
          },
          {
            label: 'b',
            task: 'Hvorfor tror du det er viktig å lære om Holocaust også i dag, over 80 år etter at det skjedde?',
            solution: 'Det er viktig fordi: 1) For å hedre ofrenes minne. 2) For å forstå hvordan folkemord kan skje — trinnene fra fordommer til diskriminering til forfølgelse til massedrap. 3) For å gjenkjenne tidlige faresignaler i vår egen tid. 4) For å forstå at antisemittisme og rasisme fortsatt finnes. 5) For å styrke forsvaret av menneskerettigheter og demokrati. Som den italienske Holocaust-overleveren Primo Levi sa: «Det har skjedd, derfor kan det skje igjen.»',
          },
        ],
        hints: ['Tenk på sammenhengen mellom likegyldighet og ondskap.'],
        solution: 'Holocaust lærer oss at folkemord ikke skjer plutselig — det bygger seg opp gjennom fordommer, diskriminering og dehumanisering. Passivitet og likegyldighet er medvirkende faktorer. Kunnskap om Holocaust er avgjørende for å forsvare menneskerettighetene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: KONSEKVENSER AV KRIGEN ==========
    {
      id: 'samfunnsfag-10-18-def-4',
      type: 'definition',
      title: 'Konsekvensene av andre verdenskrig',
      content: `Andre verdenskrig forandret verden fundamentalt og la grunnlaget for den verdensordenen vi kjenner i dag:

**1. De forente nasjoner (FN)**
FN ble opprettet i 1945 for å forhindre nye kriger. I motsetning til det svake Folkeforbundet fikk FN et sikkerhetsråd med vetorett for stormaktene og mulighet til å sende fredsbevarende styrker.

**2. Verdenserklæringen om menneskerettighetene (1948)**
Erfaringene fra Holocaust og krigens grusomheter førte til at FN vedtok Verdenserklæringen om menneskerettighetene. For første gang ble det slått fast at alle mennesker har universelle, umistelige rettigheter — uavhengig av nasjonalitet, rase, kjønn eller religion.

**3. Nürnberg-domstolen**
For første gang i historien ble krigsforbrytere stilt for en internasjonal domstol. Nürnberg-prosessene (1945–1946) slo fast at «å følge ordre» ikke er et gyldig forsvar for krigsforbrytelser og forbrytelser mot menneskeheten.

**4. Ny verdensorden**
- USA og Sovjetunionen sto igjen som verdens to supermakter
- Europa var svekket og delt — starten på den kalde krigen
- Marshallplanen (1948): USA ga massiv økonomisk hjelp til å gjenoppbygge Europa
- Europeisk samarbeid: Ønsket om å unngå nye kriger førte til opprettelsen av kull- og stålunionen (1951), som etter hvert utviklet seg til EU

**5. Atomalderen**
Bruken av atombomber over Hiroshima og Nagasaki innledet atomalderen. Trusselen om atomkrig ble et definerende trekk ved etterkrigstiden.`,
    },

    // ========== OPPGAVE 18.5 ==========
    {
      id: 'samfunnsfag-10-18-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-18-ex-5',
        number: '18.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var hovedformålet med opprettelsen av FN i 1945?',
        options: [
          {
            id: 'a',
            text: 'Å straffe Tyskland og Japan for krigen',
            isCorrect: false,
            feedback: 'Feil. Straff av krigsforbrytere ble håndtert av Nürnberg-domstolen og Tokyo-domstolen. FN ble opprettet for å sikre varig fred.',
          },
          {
            id: 'b',
            text: 'Å fordele koloniene mellom seiersmaktene',
            isCorrect: false,
            feedback: 'Feil. FN ble tvert imot en viktig pådriver for avkolonisering. Formålet var fredsbevaring.',
          },
          {
            id: 'c',
            text: 'Å forhindre nye kriger gjennom internasjonalt samarbeid og sikre menneskerettighetene',
            isCorrect: true,
            feedback: 'Riktig! FN ble opprettet for å bevare internasjonal fred og sikkerhet, fremme menneskerettigheter og løse konflikter gjennom samarbeid og diplomati.',
          },
          {
            id: 'd',
            text: 'Å styre verdensøkonomien',
            isCorrect: false,
            feedback: 'Feil. Selv om FN har organisasjoner som jobber med økonomi, var hovedformålet fred og sikkerhet.',
          },
        ],
        solution: 'FN ble opprettet i 1945 med hovedformål å forhindre nye kriger gjennom internasjonalt samarbeid, fremme menneskerettigheter og løse konflikter med fredelige midler.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-18-oppsummering',
      type: 'text',
      content: `## Oppsummering: Andre verdenskrig og Holocaust

Andre verdenskrig (1939–1945) var den mest ødeleggende konflikten i menneskehetens historie, med 70–85 millioner døde.

**De viktigste punktene:**
- Hitler utnyttet ettergivenhetspolitikken til å utvide Tyskland trinn for trinn før krigen brøt ut i 1939
- Krigen ble utkjempet i Europa, Asia og Afrika, med USA og Sovjetunionen som avgjørende aktører
- Norge var okkupert i fem år (1940–1945), med motstandskamp, samarbeid og rettsoppgjør
- Holocaust var det systematiske folkemordet på seks millioner jøder og millioner av andre ofre — planlagt og utført med industriell presisjon
- 772 norske jøder ble deportert, bare 34 overlevde
- Krigen førte til opprettelsen av FN, Verdenserklæringen om menneskerettighetene og en ny verdensorden
- Nürnberg-prosessene slo fast prinsippet om individuelt ansvar for krigsforbrytelser

Holocaust er en påminnelse om hva som kan skje når fordommer, dehumanisering og likegyldighet får vokse uhindret. Å lære om det er ikke bare historieundervisning — det er et forsvar for menneskeverdet.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-18-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-18-ex-6',
        number: '18.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Kunne andre verdenskrig ha vært forhindret?»',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn minst tre tidspunkter der andre verdenskrig kanskje kunne ha vært stoppet, og forklar hvordan.',
            solution: 'Mulige tidspunkter: 1) Versailles-traktaten (1919) — en mer rettferdig fred kunne ha redusert bitterheten i Tyskland. 2) Hitlers maktovertakelse (1933) — sterkere demokratiske krefter i Tyskland kunne ha stoppet ham. 3) Rhinlandet (1936) — militær reaksjon fra Frankrike/Storbritannia kunne ha stoppet Hitler tidlig. 4) München (1938) — avvisning av Hitlers krav i stedet for ettergivenhet. 5) Invasjonen av Tsjekkoslovakia (1939) — dette var det definitive beviset på at Hitler ikke nøyde seg med «tyske» områder.',
          },
          {
            label: 'b',
            task: 'Hvorfor er det lettere å se disse mulighetene i ettertid enn det var for folk som levde den gangen?',
            solution: 'I ettertid kjenner vi utfallet. Folk som levde da, hadde ferske minner fra første verdenskrig og ville gjøre alt for å unngå en ny krig. De visste ikke at ettergivenheten ville feile. Frykten for kommunisme fikk noen til å undervurdere faren fra nazismen. Og Hitlers sanne hensikter ble ikke tatt på alvor tidlig nok. Dette er viktig å huske — historisk etterklokskap er enklere enn å ta riktige beslutninger i øyeblikket.',
          },
        ],
        hints: ['Tenk på forskjellen mellom det vi vet nå og det folk visste da.'],
        solution: 'Det er mange tidspunkter der andre verdenskrig kanskje kunne ha vært forhindret, men det er viktig å forstå at de som levde da, ikke hadde fordelen av etterpåklokskap. Historien lærer oss å ta trusler mot demokratiet på alvor tidlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-18-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-18-ex-7',
        number: '18.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Folkemord og forebygging. FN har vedtatt folkemordkonvensjonen som forplikter alle land til å forhindre og straffe folkemord.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kort de viktigste trinnene som leder frem mot et folkemord (fra fordommer til massedrap).',
            solution: 'Trinnene mot folkemord (basert på Gregory Stantons modell): 1) Klassifisering — «oss» vs. «dem». 2) Symbolisering — gruppen merkes eller identifiseres. 3) Dehumanisering — gruppen omtales som undermennesker, dyr eller sykdom. 4) Organisering — overgrepene planlegges. 5) Polarisering — moderate stemmer knebles. 6) Forberedelse — lister lages, våpen samles. 7) Forfølgelse — drap, deportasjon. 8) Utryddelse — systematisk massedrap. 9) Fornektelse — gjerningspersonene prøver å skjule bevisene.',
          },
          {
            label: 'b',
            task: 'Hva kan enkeltmennesker og samfunnet gjøre for å forhindre at fordommer utvikler seg til forfølgelse?',
            solution: 'Tiltak: Stå opp mot hatefulle ytringer og rasisme i hverdagen. Styrke opplæring om menneskerettigheter og Holocaust. Fremme kontakt og forståelse mellom ulike grupper. Støtte frie medier som avdekker overgrep. Bygge sterke demokratiske institusjoner. Støtte internasjonale organisasjoner som kan gripe inn. Det viktigste er at enkeltmennesker ikke er passive tilskuere, men tar stilling mot urettferdighet.',
          },
        ],
        hints: ['Tenk på hva som skjer når «den andre» blir fratatt sin menneskelighet.'],
        solution: 'Folkemord er en prosess som utvikler seg gradvis fra fordommer til massedrap. Det viktigste tiltaket for å forebygge folkemord er å gripe inn tidlig — mot dehumanisering, diskriminering og hatretorikk — og aldri være en passiv tilskuer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Ettergivenhetspolitikk', definition: 'Politikken med å gi etter for Hitlers krav for å unngå krig — feilet fordi Hitler bare stilte nye krav' },
    { term: 'Blitzkrieg', definition: 'Lynkrig — Tysklands militærstrategi med raske, konsentrerte angrep med stridsvogner og fly' },
    { term: 'Okkupasjon', definition: 'Militær besettelse av et annet lands territorium' },
    { term: 'Holocaust', definition: 'Det systematiske folkemordet på seks millioner jøder utført av Nazi-Tyskland under andre verdenskrig' },
    { term: 'Antisemittisme', definition: 'Fiendtlighet og fordommer rettet mot jøder' },
    { term: 'Folkemord', definition: 'Bevisste handlinger begått med hensikt å helt eller delvis ødelegge en nasjonal, etnisk, rasemessig eller religiøs gruppe' },
    { term: 'FN', definition: 'De forente nasjoner — internasjonal organisasjon opprettet i 1945 for å sikre fred og fremme menneskerettigheter' },
    { term: 'Verdenserklæringen', definition: 'FNs verdenserklæring om menneskerettighetene fra 1948 — slår fast alle menneskers universelle rettigheter' },
    { term: 'Nürnberg-prosessene', definition: 'Rettssakene mot nazistiske krigsforbrytere etter krigen — slo fast individuelt ansvar for krigsforbrytelser' },
    { term: 'Motstandskamp', definition: 'Aktiv motstand mot en okkupasjonsmakt, sivilt og/eller militært' },
    { term: 'Quisling', definition: 'Vidkun Quisling — norsk landssviker som samarbeidet med nazistene. Navnet ble et internasjonalt ord for forræder' },
    { term: 'Marshallplanen', definition: 'USAs program for økonomisk gjenoppbygging av Europa etter krigen (1948–1952)' },
  ],
};

// ============================================================================
// KAPITTEL 19: Den kalde krigen
// LK20: Gjere greie for årsaker til og konsekvensar av sentrale historiske
//        og notidige konfliktar
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_19: TextbookChapter = {
  id: 'samfunnsfag-10-19',
  courseId: 'samfunnsfag-10',
  chapterNumber: '19',
  title: 'Den kalde krigen',
  description: 'Forstå konflikten mellom USA og Sovjetunionen, hvordan verden ble delt i to blokker, og hvordan den kalde krigen påvirket Norge og verden.',
  estimatedMinutes: 90,
  competenceGoals: [
    'gjere greie for årsaker til og konsekvensar av sentrale historiske og notidige konfliktar',
    'utforske korleis menneske har kjempa og kjempar for endringar i samfunnet',
    'reflektere over korleis hendingar i fortida har påverka vår eiga tid',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-19-intro',
      type: 'text',
      content: `## En verden delt i to

Etter andre verdenskrig lå Europa i ruiner. Men i stedet for varig fred oppsto en ny, annerledes type konflikt — **den kalde krigen** (1947–1991). De to supermaktene USA og Sovjetunionen sto mot hverandre i en ideologisk, politisk og militær konfrontasjon som varte i over fire tiår.

Den kalde krigen var «kald» fordi de to supermaktene aldri gikk til direkte krig mot hverandre. Men den var likevel livsfarlig: begge sider hadde nok atomvåpen til å utslette hele menneskeheten. Verden levde under den konstante trusselen om atomkrig.

Konflikten delte verden i to leirer — Øst og Vest — og påvirket alt fra politikk og økonomi til kultur, vitenskap og hverdagsliv. Norge, som grenseland mot Sovjetunionen, ble direkte berørt.

I dette kapittelet skal du lære om:
- Hva den kalde krigen var og hvorfor den oppsto
- Jernteppet og delingen av Europa
- NATO og Warszawapakten
- De viktigste krisene under den kalde krigen
- Norges rolle i den kalde krigen
- Hvordan og hvorfor den kalde krigen tok slutt`,
    },

    // ========== DEFINISJON: DEN KALDE KRIGEN ==========
    {
      id: 'samfunnsfag-10-19-def-1',
      type: 'definition',
      title: 'Den kalde krigen — to systemer mot hverandre',
      content: `**Den kalde krigen** (ca. 1947–1991) var den langvarige konflikten mellom de to supermaktene USA og Sovjetunionen, og deres respektive allierte. Konflikten var drevet av grunnleggende ideologiske motsetninger:

**USA og Vesten — kapitalisme og demokrati:**
- Flerpartisystem og frie valg
- Markedsøkonomi og privat eiendomsrett
- Ytringsfrihet og individuelle rettigheter
- Militærallianse: **NATO** (North Atlantic Treaty Organization, grunnlagt 1949)

**Sovjetunionen og Østblokken — kommunisme og planøkonomi:**
- Ettpartistyre under kommunistpartiet
- Statlig eierskap og planøkonomi
- Begrenset ytringsfrihet, statlig kontroll over medier
- Militærallianse: **Warszawapakten** (grunnlagt 1955)

**Jernteppet:**
Etter krigen ble Europa delt av det Winston Churchill kalte et «jernteppe» — en usynlig grense mellom det demokratiske Vest-Europa og det kommunistiske Øst-Europa. Tyskland ble delt i to stater: Vest-Tyskland (BRD) og Øst-Tyskland (DDR). Berlin ble delt av **Berlinmuren** (bygget 1961), som ble det mest konkrete symbolet på den kalde krigen.

**Kjernevåpenkappløpet:**
Begge supermaktene bygde opp enorme lagre av atomvåpen. Logikken var «gjensidig garantert ødeleggelse» (MAD — Mutual Assured Destruction): Hvis den ene angrep, ville den andre slå tilbake med like ødeleggende kraft. Paradoksalt nok bidro denne terrorbalansen til å forhindre direkte krig — men den holdt verden i et grep av frykt.`,
    },

    // ========== EKSEMPEL: BERLINMUREN ==========
    {
      id: 'samfunnsfag-10-19-example-1',
      type: 'example',
      title: 'Eksempel: Berlinmuren — delingen av en by og et kontinent',
      problem: 'Hvorfor ble Berlinmuren bygget, og hva symboliserte den?',
      solution: `**Bakgrunn:**
Etter krigen ble Berlin — som lå inne i Øst-Tyskland — delt i fire soner kontrollert av USA, Storbritannia, Frankrike og Sovjetunionen. De tre vestlige sonene ble til Vest-Berlin, en vestlig enklave midt i Øst-Tyskland.

**Hvorfor muren ble bygget (1961):**
Mellom 1949 og 1961 flyktet nesten 3,5 millioner østtyskere til Vest-Berlin og videre til Vesten. DDR mistet sine best utdannede innbyggere — leger, ingeniører, lærere. For å stoppe flukten bygde DDR-regimet natten til 13. august 1961 en mur tvers gjennom Berlin.

**Muren i praksis:**
- 155 km lang, med vakttårn, piggtråd og skuddordre
- Familier ble splittet over natten — noen våknet opp og oppdaget at de ikke lenger kunne besøke slektninger på den andre siden
- Minst 140 mennesker ble drept i forsøk på å flykte over muren

**Murens fall (9. november 1989):**
Da DDR-myndighetene i november 1989 lettet reiserestriksjoner, strømmet tusenvis av østberlinere til grenseovergangene. Vaktstyrkene klarte ikke å stoppe dem. Folk klatret opp på muren, danset, gråt og begynte å hakke den ned med hammere. Det var en av historiens mest følelsesladde øyeblikk.

Berlinmurens fall ble symbolet på den kalde krigens slutt og kommunismens sammenbrudd i Europa. Året etter, 3. oktober 1990, ble Tyskland gjenforent.`,
    },

    // ========== OPPGAVE 19.1 ==========
    {
      id: 'samfunnsfag-10-19-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-19-ex-1',
        number: '19.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor kalles konflikten mellom USA og Sovjetunionen den «kalde» krigen?',
        options: [
          {
            id: 'a',
            text: 'Fordi den ble utkjempet i kalde land som Russland og Alaska',
            isCorrect: false,
            feedback: 'Feil. Navnet handler ikke om temperaturen, men om at supermaktene unngikk direkte militær konfrontasjon.',
          },
          {
            id: 'b',
            text: 'Fordi de to supermaktene aldri gikk til direkte krig mot hverandre, men konkurrerte gjennom ideologi, diplomati, våpenkappløp og stedfortrederkriger',
            isCorrect: true,
            feedback: 'Riktig! Den kalde krigen var «kald» fordi USA og Sovjetunionen aldri kjempet direkte mot hverandre. Konflikten ble ført gjennom andre midler — ideologi, diplomati, spionasje, våpenkappløp og stedfortrederkriger i andre land.',
          },
          {
            id: 'c',
            text: 'Fordi krigen varte så kort at den knapt rakk å bli «varm»',
            isCorrect: false,
            feedback: 'Feil. Den kalde krigen varte i over 40 år (ca. 1947–1991). Den var «kald» fordi den aldri ble en direkte krig mellom supermaktene.',
          },
          {
            id: 'd',
            text: 'Fordi atomvåpnene var så farlige at ingen turte å bruke dem',
            isCorrect: false,
            feedback: 'Delvis riktig tanke — terrorbalansen bidro til å forhindre direkte krig — men «kald» refererer mer generelt til at det ikke var direkte militær konfrontasjon mellom supermaktene.',
          },
        ],
        solution: 'Den kalde krigen kalles «kald» fordi USA og Sovjetunionen aldri kjempet direkte mot hverandre. Konflikten ble ført gjennom ideologi, diplomati, spionasje, våpenkappløp og stedfortrederkriger i andre land.',
      },
    },

    // ========== OPPGAVE 19.2 ==========
    {
      id: 'samfunnsfag-10-19-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-19-ex-2',
        number: '19.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ideologiene bak den kalde krigen.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar de viktigste forskjellene mellom det vestlige systemet (kapitalisme/demokrati) og det østlige systemet (kommunisme/planøkonomi).',
            solution: 'Vestlig system: flerpartisystem med frie valg, markedsøkonomi med privat eiendomsrett, ytringsfrihet og individuelle rettigheter. Østlig system: ettpartistyre under kommunistpartiet, statlig eierskap og planøkonomi (staten bestemmer hva som skal produseres), begrenset ytringsfrihet og statlig kontroll over medier. Kjernekonflikten: individuell frihet vs. kollektiv likhet.',
          },
          {
            label: 'b',
            task: 'Hvorfor tror du at begge sider mente at deres system var det beste?',
            solution: 'USA mente at frihet, demokrati og markedsøkonomi ga mennesker de beste mulighetene. Sovjetunionen mente at kommunismen ga rettferdig fordeling og beskyttet arbeiderklassen mot utbytting. Begge sider brukte propaganda for å fremstille sitt eget system positivt og motstanderens negativt. I virkeligheten hadde begge systemene styrker og svakheter.',
          },
        ],
        hints: ['Tenk på hva hvert system prioriterte — frihet eller likhet.'],
        solution: 'Den kalde krigen var drevet av en grunnleggende ideologisk konflikt mellom kapitalisme/demokrati og kommunisme/planøkonomi. Begge sider mente at deres system var best for menneskeheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: KRISER UNDER DEN KALDE KRIGEN ==========
    {
      id: 'samfunnsfag-10-19-def-2',
      type: 'definition',
      title: 'De viktigste krisene under den kalde krigen',
      content: `Selv om den kalde krigen ikke førte til direkte krig mellom supermaktene, var det flere situasjoner der verden var farlig nær atomkrig:

**Berlin-blokaden (1948–1949)**
Sovjetunionen stengte alle vei- og jernbaneforbindelser til Vest-Berlin for å presse vestmaktene ut. USA og Storbritannia svarte med en massiv luftbro — i nesten et år ble alt Vest-Berlin trengte fløyet inn med fly. Blokaden mislyktes, og Sovjetunionen ga opp.

**Korea-krigen (1950–1953)**
Nord-Korea (støttet av Sovjetunionen og Kina) invaderte Sør-Korea (støttet av USA og FN). Krigen endte uten klar seier, med en våpenhvile som delte Korea ved den 38. breddegrad — en deling som fortsatt eksisterer i dag.

**Cubakrisen (1962)**
Den farligste krisen under hele den kalde krigen. Sovjetunionen plasserte atomraketter på Cuba, bare 150 km fra USAs kyst. USAs president John F. Kennedy krevde at rakettene ble fjernet og innførte sjøblokade rundt Cuba. I 13 intense dager sto verden på randen av atomkrig. Til slutt ble man enige: Sovjetunionen fjernet rakettene mot at USA lovet å ikke invadere Cuba.

**Vietnam-krigen (1955–1975)**
USA engasjerte seg militært i Vietnam for å hindre kommunistisk maktovertagelse. Krigen ble et traume for USA — over 58 000 amerikanske soldater døde, og hundretusener av vietnamesere ble drept. Krigen ble svært upopulær og førte til massive protester. USA trakk seg ut i 1973, og Nord-Vietnam vant i 1975.

**Afghanistan (1979–1989)**
Sovjetunionen invaderte Afghanistan for å støtte et kommunistisk regime. USA støttet afghanske motstandsgrupper (mujahidin). Krigen ble Sovjetunionens «Vietnam» — en kostbar og upopulær krig som bidro til Sovjetunionens svekkelse.`,
    },

    // ========== OPPGAVE 19.3 ==========
    {
      id: 'samfunnsfag-10-19-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-19-ex-3',
        number: '19.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor var Cubakrisen i 1962 den farligste krisen under den kalde krigen?',
        options: [
          {
            id: 'a',
            text: 'Fordi Cuba invaderte USA',
            isCorrect: false,
            feedback: 'Feil. Cuba invaderte ikke USA. Krisen handlet om at Sovjetunionen plasserte atomraketter på Cuba.',
          },
          {
            id: 'b',
            text: 'Fordi atomraketter på Cuba ga Sovjetunionen mulighet til å nå USA på få minutter, og begge sider sto på randen av atomkrig i 13 dager',
            isCorrect: true,
            feedback: 'Riktig! Sovjetiske atomraketter bare 150 km fra USA skapte en ekstremt farlig situasjon der begge sider var klare til å bruke atomvåpen. I 13 dager hang verdens skjebne i en tynn tråd.',
          },
          {
            id: 'c',
            text: 'Fordi krigen på Cuba varte i mange år og kostet millioner av liv',
            isCorrect: false,
            feedback: 'Feil. Cubakrisen varte bare 13 dager (16.–28. oktober 1962) og ble løst diplomatisk uten at krig brøt ut.',
          },
          {
            id: 'd',
            text: 'Fordi Cuba hadde utviklet egne atomvåpen',
            isCorrect: false,
            feedback: 'Feil. Cuba hadde ikke egne atomvåpen. Det var Sovjetunionen som plasserte sine raketter på Cuba.',
          },
        ],
        solution: 'Cubakrisen var den farligste krisen under den kalde krigen fordi sovjetiske atomraketter på Cuba kunne nå USA på få minutter. I 13 dager i oktober 1962 sto verden på randen av atomkrig.',
      },
    },

    // ========== TEKST: NORGE I DEN KALDE KRIGEN ==========
    {
      id: 'samfunnsfag-10-19-norge',
      type: 'text',
      content: `## Norge i den kalde krigen

Norge hadde en spesiell posisjon i den kalde krigen som NATO-land med felles grense med Sovjetunionen i nord.

### NATO-medlem
Norge var et av grunnleggermedlemmene i NATO i 1949. Erfaringene fra 9. april 1940 — da nøytralitetspolitikken hadde feilet — overbeviste norske politikere om at Norge trengte allierte for sin sikkerhet.

### Basepolitikken
Norge valgte en balansegang:
- **Ja** til NATO-medlemskap og vestlig tilhørighet
- **Nei** til utenlandske militærbaser og atomvåpen på norsk jord i fredstid

Denne «basepolitikken» var et forsøk på å ivareta sikkerheten gjennom NATO uten å provosere Sovjetunionen unødig.

### Nordområdene
Norges grense mot Sovjetunionen i Finnmark gjorde Norge strategisk viktig:
- Sovjetunionens nordflåte, med atomubåter, lå på Kolahalvøya nær norskegrensen
- NATO brukte Norge for overvåking og etterretning
- Fiskevernsonen rundt Svalbard var et potensielt konfliktområde

### Påvirkning på det norske samfunnet
- **Forsvarsvilje:** Verneplikten og et sterkt forsvar ble prioritert
- **Kommunistfrykt:** Overvåking av norske kommunister og venstreradikale (avdekket av Lund-kommisjonen i 1996)
- **Protestbevegelser:** Mange nordmenn protesterte mot atomvåpen og NATO, særlig på 1960- og 1970-tallet
- **Beredskapslager:** Matlagre og tilfluktsrom ble bygget over hele landet`,
    },

    // ========== OPPGAVE 19.4 ==========
    {
      id: 'samfunnsfag-10-19-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-19-ex-4',
        number: '19.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norges rolle i den kalde krigen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gikk den norske basepolitikken ut på, og hvorfor ble den innført?',
            solution: 'Basepolitikken betydde at Norge ikke ville tillate fremmede militærbaser eller atomvåpen på norsk jord i fredstid. Den ble innført for å balansere to hensyn: sikkerheten gjennom NATO-medlemskap og ønsket om ikke å provosere naboen Sovjetunionen unødig. Det var en form for avspenningspolitikk.',
          },
          {
            label: 'b',
            task: 'Hvorfor var erfaringene fra 9. april 1940 viktige for Norges beslutning om å bli NATO-medlem?',
            solution: '9. april 1940 viste at nøytralitetspolitikken ikke beskyttet Norge mot invasjon. Norge ble okkupert til tross for sin erklærte nøytralitet. Denne erfaringen overbeviste norske politikere om at Norge trengte allierte som kunne komme til hjelp ved et angrep. NATO-medlemskapet ga kollektive sikkerhetsgarantier.',
          },
        ],
        hints: ['Tenk på forholdet mellom Norges erfaring under andre verdenskrig og valget om NATO.'],
        solution: 'Norges NATO-medlemskap var en direkte konsekvens av erfaringen fra 9. april 1940. Basepolitikken var et forsøk på å balansere sikkerhet gjennom NATO med et ønske om ikke å provosere Sovjetunionen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: SLUTTEN PÅ DEN KALDE KRIGEN ==========
    {
      id: 'samfunnsfag-10-19-def-3',
      type: 'definition',
      title: 'Den kalde krigens slutt',
      content: `Den kalde krigen tok slutt uten en direkte militær konfrontasjon. Flere faktorer bidro:

**Mikhail Gorbatsjov og reformer:**
I 1985 ble Mikhail Gorbatsjov leder for Sovjetunionen. Han innførte to viktige reformpolitikker:
- **Glasnost** (åpenhet): Mer ytringsfrihet og åpenhet i sovjetisk samfunn og politikk
- **Perestrojka** (ombygging): Økonomiske reformer for å modernisere det stagnerende sovjetiske systemet

**Murens fall og Østeuropas frigjøring (1989):**
Gorbatsjovs reformer inspirerte frihetsbevegelser i hele Østblokken:
- Polen: Solidaritetsbevegelsen vant frie valg
- Ungarn: Åpnet grensen til Østerrike
- Øst-Tyskland: Berlinmuren falt 9. november 1989
- Tsjekkoslovakia: «Fløyelsrevolusjonen» — fredelig maktskifte
- Romania: Kommunistregimet ble styrtet (den eneste voldelige omveltningen)

**Sovjetunionens oppløsning (1991):**
Reformene utløste krefter Gorbatsjov ikke kunne kontrollere. Nasjonale bevegelser i Sovjetunionens delrepublikker krevde selvstendighet. 25. desember 1991 trakk Gorbatsjov seg, og Sovjetunionen ble offisielt oppløst. 15 nye stater ble opprettet, med Russland som den største.

**Konsekvenser:**
- USA sto igjen som verdens eneste supermakt
- Demokrati og markedsøkonomi spredte seg i Øst-Europa
- Tyskland ble gjenforent (1990)
- NATO utvidet seg østover
- Nye konflikter oppsto i det post-sovjetiske rommet (Tsjetsjenia, Georgia, Ukraina)`,
    },

    // ========== OPPGAVE 19.5 ==========
    {
      id: 'samfunnsfag-10-19-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-19-ex-5',
        number: '19.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var de to viktigste reformene Gorbatsjov innførte i Sovjetunionen?',
        options: [
          {
            id: 'a',
            text: 'Kapitalisme og demokrati',
            isCorrect: false,
            feedback: 'Feil. Gorbatsjov forsøkte å reformere det kommunistiske systemet innenfra, ikke å innføre vestlig kapitalisme og demokrati.',
          },
          {
            id: 'b',
            text: 'Glasnost (åpenhet) og perestrojka (ombygging/økonomiske reformer)',
            isCorrect: true,
            feedback: 'Riktig! Glasnost ga mer ytringsfrihet og åpenhet, mens perestrojka var økonomiske reformer for å modernisere Sovjetunionen. Sammen utløste de krefter som til slutt førte til Sovjetunionens oppløsning.',
          },
          {
            id: 'c',
            text: 'Atomopprustning og militær ekspansjon',
            isCorrect: false,
            feedback: 'Feil. Gorbatsjov gikk i motsatt retning — han ønsket nedrustning og avspenning med Vesten.',
          },
          {
            id: 'd',
            text: 'Invasjon av Øst-Europa og gjenforening av Sovjetunionen',
            isCorrect: false,
            feedback: 'Feil. Gorbatsjov valgte å la Øst-Europa gå sin egen vei, i stedet for å bruke militærmakt for å opprettholde kontroll.',
          },
        ],
        solution: 'Gorbatsjovs to hovedreformer var glasnost (åpenhet i samfunn og politikk) og perestrojka (ombygging av det økonomiske systemet). Disse reformene utløste krefter som førte til kommunismens fall i Østblokken og Sovjetunionens oppløsning.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-19-oppsummering',
      type: 'text',
      content: `## Oppsummering: Den kalde krigen

Den kalde krigen (ca. 1947–1991) var en ideologisk, politisk og militær konfrontasjon mellom USA og Sovjetunionen som formet verden i over fire tiår.

**De viktigste punktene:**
- Konflikten var drevet av motsetningen mellom kapitalisme/demokrati og kommunisme/planøkonomi
- Europa ble delt av «jernteppet» — Berlinmuren var det mest synlige symbolet
- Atomvåpenkappløpet skapte terrorbalanse — gjensidig garantert ødeleggelse forhindret direkte krig
- Cubakrisen (1962) var det nærmeste verden kom atomkrig
- Stedfortrederkriger ble utkjempet i Korea, Vietnam, Afghanistan og andre steder
- Norge hadde en spesiell rolle som NATO-land med grense mot Sovjetunionen
- Gorbatsjovs reformer (glasnost og perestrojka) utløste endringer som førte til Berlinmurens fall (1989) og Sovjetunionens oppløsning (1991)
- Den kalde krigens slutt formet den verdensordenen vi lever i dag`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-19-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-19-ex-6',
        number: '19.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Den kalde krigen er over, men arven lever videre.» Drøft hvordan den kalde krigen fortsatt påvirker verden i dag.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn minst tre eksempler på hvordan den kalde krigen fortsatt påvirker verden.',
            solution: 'Eksempler: 1) Korea er fortsatt delt. 2) NATO eksisterer fortsatt og har utvidet seg østover, noe som skaper spenning med Russland. 3) Russlands invasjon av Ukraina (2022) har røtter i den kalde krigens arvegods. 4) Cuba er fortsatt kommunistisk. 5) Konflikten mellom USA og Kina har elementer av den gamle kalde krigen. 6) Atomvåpenkappløpet — verden har fortsatt tusenvis av atomvåpen.',
          },
          {
            label: 'b',
            task: 'Vurder: Har den kalde krigens slutt gjort verden tryggere, eller har nye trusler erstattet de gamle?',
            solution: 'Verden har blitt tryggere på noen måter (mindre risiko for atomkrig mellom supermaktene, demokrati spredt seg), men nye trusler har dukket opp (terrorisme, regional ustabilitet, nye stormaktsrivaliseringer, cybertrusler). Den kalde krigens enkle todeling er erstattet av en mer kompleks verdensorden med flere aktører og uforutsigbare konflikter.',
          },
        ],
        hints: ['Tenk på aktuelle konflikter og spenninger i verden.'],
        solution: 'Den kalde krigens arv er tydelig i mange av dagens konflikter og maktstrukturer. Verdens todeling er over, men nye spenninger og trusler har oppstått.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-19-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-19-ex-7',
        number: '19.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du lever i Øst-Berlin i 1988, ett år før muren falt. Skriv et dagbokinnlegg der du beskriver hverdagen og drømmene dine.',
        hints: [
          'Tenk på hva du visste og ikke visste om verden utenfor muren.',
          'Hva betød begrenset frihet i hverdagen?',
          'Turte du å si hva du mente?',
        ],
        solution: 'Et godt svar viser forståelse for hvordan det var å leve i et diktatur: begrensninger i reisefrihet, ytringsfrihet og informasjonstilgang, overvåking fra Stasi (hemmelig politi), drømmer om frihet, frykt for å si feil ting. Svaret bør også vise empati og evne til å sette seg inn i andres situasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Den kalde krigen', definition: 'Konflikten mellom USA og Sovjetunionen (ca. 1947–1991) — ideologisk, politisk og militær, men uten direkte krig' },
    { term: 'Jernteppet', definition: 'Betegnelse på den usynlige grensen som delte Europa i en vestlig og en østlig blokk under den kalde krigen' },
    { term: 'NATO', definition: 'North Atlantic Treaty Organization — vestlig militærallianse grunnlagt i 1949' },
    { term: 'Warszawapakten', definition: 'Østblokens militærallianse under Sovjetunionens ledelse, grunnlagt i 1955' },
    { term: 'Terrorbalanse', definition: 'Gjensidig garantert ødeleggelse (MAD) — begge sider hadde nok atomvåpen til å utslette hverandre, noe som paradoksalt bidro til å forhindre krig' },
    { term: 'Stedfortrederkrig', definition: 'Krig der stormaktene kjemper gjennom allierte i stedet for direkte mot hverandre' },
    { term: 'Cubakrisen', definition: 'Den farligste krisen under den kalde krigen (1962) — Sovjetunionen plasserte atomraketter på Cuba nær USA' },
    { term: 'Basepolitikken', definition: 'Norges politikk om å ikke tillate fremmede militærbaser eller atomvåpen på norsk jord i fredstid' },
    { term: 'Glasnost', definition: 'Gorbatsjovs reformpolitikk om åpenhet i det sovjetiske samfunnet' },
    { term: 'Perestrojka', definition: 'Gorbatsjovs reformpolitikk for økonomisk ombygging av Sovjetunionen' },
    { term: 'Berlinmuren', definition: 'Muren som delte Berlin i to fra 1961 til 1989 — det mest synlige symbolet på den kalde krigen' },
  ],
};

// ============================================================================
// KAPITTEL 20: Avkolonisering og den tredje verden
// LK20: Utforske korleis menneske har kjempa og kjempar for endringar i
//        samfunnet og samstundes vurdere korleis endringar i samfunnet
//        har påverka og påverkar levekår og sjølvforståing
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_20: TextbookChapter = {
  id: 'samfunnsfag-10-20',
  courseId: 'samfunnsfag-10',
  chapterNumber: '20',
  title: 'Avkolonisering og den tredje verden',
  description: 'Forstå hvordan koloniveldet ble oppløst etter andre verdenskrig, hvordan nye stater ble til, og hvilke utfordringer de sto overfor.',
  estimatedMinutes: 85,
  competenceGoals: [
    'utforske korleis menneske har kjempa og kjempar for endringar i samfunnet',
    'gjere greie for årsaker til og konsekvensar av sentrale historiske og notidige konfliktar',
    'reflektere over korleis hendingar i fortida har påverka vår eiga tid',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-20-intro',
      type: 'text',
      content: `## Frihet etter århundrer med fremmedstyre

I 1945, da andre verdenskrig tok slutt, var store deler av Asia, Afrika og Midtøsten fortsatt kontrollert av europeiske kolonimakter. Storbritannia, Frankrike, Nederland, Belgia og Portugal styrte over hundrevis av millioner mennesker i andre verdensdeler.

Men tiårene etter krigen brakte en dramatisk endring. I løpet av bare et par generasjoner ble det meste av koloniveldet oppløst. Nye stater ble født, og folk som hadde vært undertrykt i århundrer, krevde — og fikk — sin frihet.

Avkoloniseringen var en av de mest omveltende prosessene i det 20. århundre. Den forandret verdenskartet, skapte nye nasjoner og endret maktbalansen i verden. Men frihet brakte ikke alltid fred og velstand — mange nye stater kjempet med fattigdom, konflikter og ustabile grenser arvet fra kolonitiden.

I dette kapittelet skal du lære om:
- Hva kolonialisme var og hvordan den påvirket befolkningen
- Hvorfor og hvordan avkoloniseringen skjedde
- Sentrale frigjøringsbevegelser og ledere
- Utfordringene de nye statene sto overfor
- Begrepet «den tredje verden» og den alliansefrie bevegelsen
- Kolonialismens arv i dag`,
    },

    // ========== DEFINISJON: KOLONIALISME ==========
    {
      id: 'samfunnsfag-10-20-def-1',
      type: 'definition',
      title: 'Kolonialisme og dens konsekvenser',
      content: `**Kolonialisme** er et system der en stat (kolonimakten) tar kontroll over et annet territorium (kolonien) og utnytter det økonomisk og politisk. Den europeiske kolonialismen nådde sitt høydepunkt på 1800-tallet og begynnelsen av 1900-tallet.

**Kjennetegn ved kolonistyret:**
- **Økonomisk utnyttelse:** Kolonienes naturressurser (mineraler, landbruksprodukter) ble tatt ut for å berike kolonimakten
- **Politisk dominans:** Koloniene ble styrt fra Europa. Lokalbefolkningen hadde ingen eller minimal politisk innflytelse
- **Kulturell undertrykkelse:** Europeiske språk, religion og skikker ble påtvunget. Lokal kultur og tradisjoner ble nedvurdert
- **Rasisme:** Kolonialismen bygde på ideen om at europeere var overlegne andre folkeslag — en ideologi som rettferdiggjorde undertrykkelsen

**Omfanget:**
Ved starten av 1900-tallet kontrollerte europeiske makter nesten hele Afrika, store deler av Asia og deler av Midtøsten og Stillehavet. Storbritannia hadde det største imperiet — «imperiet der solen aldri går ned».

**Grensedragning:**
Kolonigrensene ble trukket av europeere, ofte uten hensyn til lokale etniske, språklige eller kulturelle grenser. Under Berlin-konferansen i 1884–85 delte europeiske stormakter Afrika mellom seg — med linjaler på et kart, uten at en eneste afrikaner var til stede. Disse kunstige grensene skapte konflikter som varer den dag i dag.

Noen har pekt på at kolonimaktene også bygde veier, skoler og sykehus i koloniene. Historikere er imidlertid enige om at disse tiltakene primært tjente kolonialistenes egne interesser, og at totalvirkningen av kolonialismen var overveiende negativ for de koloniserte folkene.`,
    },

    // ========== EKSEMPEL: INDIAS UAVHENGIGHET ==========
    {
      id: 'samfunnsfag-10-20-example-1',
      type: 'example',
      title: 'Eksempel: Indias vei til uavhengighet — Gandhis ikke-voldelige motstand',
      problem: 'Hvordan klarte India å frigjøre seg fra Storbritannia uten militær revolusjon?',
      solution: `**Bakgrunn:**
India var Storbritannias viktigste koloni — «juvelen i kronen». Britisk kontroll gikk tilbake til 1700-tallet, og India ble styrt for å tjene britiske økonomiske interesser.

**Mohandas (Mahatma) Gandhi:**
Gandhi utviklet en strategi for **ikke-voldelig motstand** (satyagraha). Han mente at man kunne bekjempe urettferdighet gjennom sivil ulydighet — å nekte å følge urettferdige lover — uten å bruke vold.

**Nøkkelhendelser:**
- **Saltmarsjen (1930):** Gandhi ledet en 390 km lang marsj til havet for å lage salt — i protest mot britisk saltmonopol og saltskatten. Enkelt, symbolsk og genialt. Tusener sluttet seg til.
- **«Slutt India»-bevegelsen (1942):** Massivt krav om at britene skulle forlate India
- **Sivil ulydighet:** Boikott av britiske varer, nekting av å betale skatt, fredelige demonstrasjoner

**Uavhengigheten (1947):**
India ble uavhengig 15. august 1947, men ble delt i to stater: India (med hinduflertall) og Pakistan (med muslimsk flertall). Delingen førte til enorme flyktningstrømmer og voldelige opptøyer der opptil to millioner mennesker mistet livet.

**Gandhis arv:**
Gandhis metode med ikke-voldelig motstand inspirerte frihetsbevegelser over hele verden, blant dem Martin Luther Kings borgerrettighetsbevegelse i USA og anti-apartheid-bevegelsen i Sør-Afrika.`,
    },

    // ========== OPPGAVE 20.1 ==========
    {
      id: 'samfunnsfag-10-20-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-20-ex-1',
        number: '20.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var Gandhis strategi for å kjempe mot britisk kolonistyre i India?',
        options: [
          {
            id: 'a',
            text: 'Væpnet revolusjon og geriljakrig mot britiske styrker',
            isCorrect: false,
            feedback: 'Feil. Gandhi avviste vold som virkemiddel. Hans strategi var ikke-voldelig motstand.',
          },
          {
            id: 'b',
            text: 'Ikke-voldelig motstand gjennom sivil ulydighet, boikott og fredelige protester',
            isCorrect: true,
            feedback: 'Riktig! Gandhi utviklet satyagraha — ikke-voldelig motstand gjennom sivil ulydighet, boikott av britiske varer og fredelige masseprotester. Han viste at man kan bekjempe urettferdighet uten å ty til vold.',
          },
          {
            id: 'c',
            text: 'Diplomatisk forhandling med britiske myndigheter uten noen form for protest',
            isCorrect: false,
            feedback: 'Feil. Gandhi brukte også forhandlinger, men kjernen i hans strategi var aktiv, ikke-voldelig motstand — sivil ulydighet og masseprotester.',
          },
          {
            id: 'd',
            text: 'Å be FN om hjelp til å kaste ut britene',
            isCorrect: false,
            feedback: 'Feil. Indias uavhengighetskamp begynte lenge før FN ble opprettet (1945), og Gandhi stolte på folkets egne krefter.',
          },
        ],
        solution: 'Gandhis strategi var ikke-voldelig motstand (satyagraha) — sivil ulydighet, boikott av britiske varer og fredelige masseprotester. Denne metoden inspirerte frihetsbevegelser over hele verden.',
      },
    },

    // ========== DEFINISJON: AVKOLONISERINGEN ==========
    {
      id: 'samfunnsfag-10-20-def-2',
      type: 'definition',
      title: 'Avkoloniseringen — frigjøring av en hel verden',
      content: `**Avkolonisering** er prosessen der koloniene ble selvstendige stater. Den skjedde hovedsakelig mellom 1945 og 1975.

**Hvorfor skjedde avkoloniseringen?**
1. **Andre verdenskrig svekket kolonimaktene:** Storbritannia og Frankrike var utmattet etter krigen og hadde ikke ressurser til å opprettholde koloniene
2. **Selvbestemmelsesretten:** FNs charter (1945) slo fast at alle folk har rett til selvbestemmelse
3. **Nasjonale frigjøringsbevegelser:** Lokale ledere og bevegelser krevde uavhengighet med stadig større styrke
4. **Endret holdning:** Etter Holocaust og kampen mot nazismens rasisme ble det vanskeligere å forsvare kolonialismens rasistiske grunnlag
5. **Supermaktene:** Både USA og Sovjetunionen var motstandere av kolonialisme (av ulike grunner)

**Ulike veier til uavhengighet:**

**Fredelig overgang:**
- India (1947): Ikke-voldelig motstand under Gandhi
- Ghana (1957): Første afrikanske koloni som ble uavhengig, under Kwame Nkrumah

**Væpnet frigjøringskamp:**
- Algerie (1954–1962): Blodig krig mot Frankrike, over en million døde
- Vietnam (1946–1954): Krig mot Frankrike, deretter mot USA
- Angola og Mosambik: Langvarige frigjøringskriger mot Portugal

**Kongo — et skrekkeksempel:**
Belgia forlot Kongo i 1960 nesten uten forberedelse. Kolonimakten hadde ikke utdannet lokale ledere eller bygget institusjoner. Resultatet ble kaos, borgerkrig og et diktatur under Mobutu som varte i over 30 år.`,
    },

    // ========== OPPGAVE 20.2 ==========
    {
      id: 'samfunnsfag-10-20-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-20-ex-2',
        number: '20.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avkolonisering — årsaker og variasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre årsaker til at avkoloniseringen skjedde etter andre verdenskrig.',
            solution: 'Tre årsaker: 1) Kolonimaktene var svekket etter krigen og manglet ressurser til å opprettholde imperiene. 2) FN-charteret slo fast retten til selvbestemmelse. 3) Nasjonale frigjøringsbevegelser i koloniene ble sterkere og bedre organisert. Andre årsaker: endret holdning til rasisme etter Holocaust, supermaktenes motstand mot kolonialisme.',
          },
          {
            label: 'b',
            task: 'Forklar forskjellen mellom fredelig og voldelig avkolonisering med ett eksempel av hver.',
            solution: 'Fredelig: India (1947) — Gandhi ledet ikke-voldelig motstand som til slutt overbeviste Storbritannia om å gi India uavhengighet. Voldelig: Algerie (1954–1962) — Frankrike nektet å gi opp kolonien, noe som førte til en brutal frigjøringskrig der over en million mennesker døde.',
          },
        ],
        hints: ['Tenk på hvilke faktorer som avgjorde om avkoloniseringen ble fredelig eller voldelig.'],
        solution: 'Avkoloniseringen skyldtes en kombinasjon av svekkede kolonimakter, sterkere frigjøringsbevegelser og endrede internasjonale normer. Noen kolonier ble fredelig uavhengige, mens andre måtte kjempe blodige frigjøringskriger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: DEN TREDJE VERDEN ==========
    {
      id: 'samfunnsfag-10-20-def-3',
      type: 'definition',
      title: 'Den tredje verden og den alliansefrie bevegelsen',
      content: `Under den kalde krigen ble verden delt i tre:
- **Den første verden:** USA og de vestlige allierte (kapitalistiske demokratier)
- **Den andre verden:** Sovjetunionen og Østblokken (kommunistiske stater)
- **Den tredje verden:** De nylig uavhengige landene som ikke tilhørte noen av blokkene

**Den alliansefrie bevegelsen:**
Mange nye stater ønsket å stå utenfor den kalde krigens blokkpolitikk. I 1955 møttes ledere fra 29 asiatiske og afrikanske land i Bandung, Indonesia, for å markere solidaritet og uavhengighet fra begge supermaktene. I 1961 ble den alliansefrie bevegelsen formelt grunnlagt.

Sentrale ledere: Jawaharlal Nehru (India), Gamal Abdel Nasser (Egypt), Josip Broz Tito (Jugoslavia) og Kwame Nkrumah (Ghana).

**Utfordringer for de nye statene:**
- **Kunstige grenser:** Kolonigrensene delte etniske grupper og skapte stater med mange rivaliserende grupper
- **Økonomisk avhengighet:** Økonomiene var basert på eksport av råvarer til de gamle kolonimaktene — et urettferdig bytteforhold
- **Mangel på infrastruktur:** Kolonimaktene hadde investert lite i utdanning, helse og institusjoner for lokalbefolkningen
- **Politisk ustabilitet:** Mangel på demokratisk tradisjon førte mange steder til diktaturer og militærkupp
- **Stormaktsinnblanding:** Både USA og Sovjetunionen blandet seg inn i de nye statene for å vinne allierte

**Begrepet i dag:**
Begrepet «den tredje verden» brukes sjeldnere i dag fordi den kalde krigen er over. I stedet brukes begreper som «utviklingsland», «det globale sør» eller «lavinntektsland» — selv om også disse er omdiskuterte.`,
    },

    // ========== EKSEMPEL: APARTHEID ==========
    {
      id: 'samfunnsfag-10-20-example-2',
      type: 'example',
      title: 'Eksempel: Apartheid i Sør-Afrika — kampen mot raseskille',
      problem: 'Hva var apartheid, og hvordan ble systemet til slutt avskaffet?',
      solution: `**Hva var apartheid?**
Apartheid (afrikaans for «atskilthet») var Sør-Afrikas offisielle system for rasesegregering fra 1948 til 1994. Det hvite mindretallet kontrollerte all politisk og økonomisk makt, mens det svarte flertallet ble systematisk diskriminert.

**Apartheids regler:**
- Svarte og hvite skulle leve adskilt — egne boområder, skoler, sykehus, busser
- Svarte hadde ikke stemmerett
- Blandede ekteskap var forbudt
- Svarte ble tvangsflyttet til «hjemland» (bantustaner) — fattige og overbefolkede områder

**Motstand:**
- **ANC** (African National Congress) ledet motstanden under ledere som Nelson Mandela
- **Sharpeville-massakren (1960):** Politiet skjøt og drepte 69 fredelige demonstranter — sjokkerte verden
- **Soweto-opprøret (1976):** Skoleelever protesterte mot påbudet om undervisning på afrikaans
- Mandela ble fengslet i 27 år (1964–1990)

**Avskaffelsen:**
Internasjonalt press gjennom økonomiske sanksjoner og boikott, kombinert med intern motstand, tvang til slutt regimet til å forhandle. President F.W. de Klerk løslot Mandela i 1990 og innledet forhandlinger. I 1994 ble det holdt frie valg for første gang — Nelson Mandela ble Sør-Afrikas første demokratisk valgte president.

**Sannhets- og forsoningskommisjonen:**
I stedet for hevn valgte Sør-Afrika forsoning. En kommisjon ledet av erkebiskop Desmond Tutu lot overgripere innrømme sine handlinger i bytte mot amnesti. Dette var en banebrytende tilnærming til overgangsrettferdighet.`,
    },

    // ========== OPPGAVE 20.3 ==========
    {
      id: 'samfunnsfag-10-20-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-20-ex-3',
        number: '20.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Apartheid og kampen for likhet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var de viktigste kjennetegnene ved apartheidsystemet i Sør-Afrika?',
            solution: 'Apartheid var et system for lovfestet raseskille. Viktige kjennetegn: Det svarte flertallet hadde ikke stemmerett. Svarte og hvite ble pålagt å leve adskilt — egne boområder, skoler, sykehus. Blandede ekteskap var forbudt. Svarte ble tvangsflyttet til fattige «hjemland». Systemet var designet for å opprettholde det hvite mindretallets makt og privilegier.',
          },
          {
            label: 'b',
            task: 'Nelson Mandela satt 27 år i fengsel, men valgte forsoning i stedet for hevn da han ble president. Hva tror du motiverte ham?',
            solution: 'Mandela forsto at hevn ville føre til borgerkrig og ødelegge landet. Han ønsket å bygge en nasjon der alle — uansett hudfarge — kunne leve sammen i fred. Han visste at forsoning ville kreve at begge sider måtte gi noe. Hans visjon var et «regnbuenasjon» — et Sør-Afrika forenet i mangfold. Mandela valgte landets fremtid fremfor personlig bitterhet.',
          },
        ],
        hints: ['Tenk på forskjellen mellom rettferdighet og hevn.'],
        solution: 'Apartheid var et rasistisk system som ble avskaffet gjennom en kombinasjon av intern motstand, internasjonalt press og modige ledere som valgte forsoning fremfor hevn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 20.4 ==========
    {
      id: 'samfunnsfag-10-20-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-20-ex-4',
        number: '20.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor skapte de koloniale grensene i Afrika problemer etter avkoloniseringen?',
        options: [
          {
            id: 'a',
            text: 'Fordi grensene ble trukket av europeere uten hensyn til lokale etniske og kulturelle grupper, slik at rivaliserende grupper ble tvangssamlet i samme stat',
            isCorrect: true,
            feedback: 'Riktig! Europeerne tegnet grensene etter sine egne interesser, ikke etter lokale forhold. Dette splittet etniske grupper mellom flere stater og tvang rivaliserende grupper sammen — en oppskrift på konflikter.',
          },
          {
            id: 'b',
            text: 'Fordi det fantes for få land i Afrika etter avkoloniseringen',
            isCorrect: false,
            feedback: 'Feil. Problemet var ikke antallet land, men at grensene var trukket kunstig uten hensyn til lokale etniske og kulturelle grupper.',
          },
          {
            id: 'c',
            text: 'Fordi afrikanske ledere ønsket å beholde kolonigrensene slik de var',
            isCorrect: false,
            feedback: 'Delvis riktig — Den afrikanske union vedtok å beholde grensene for å unngå enda mer kaos — men problemet var at grensene var kunstig trukket av europeere i utgangspunktet.',
          },
          {
            id: 'd',
            text: 'Fordi grensene var for lange til å forsvare militært',
            isCorrect: false,
            feedback: 'Feil. Problemet med grensene var ikke militært forsvar, men at de delte etniske grupper og tvang rivaliserende grupper sammen.',
          },
        ],
        solution: 'De koloniale grensene ble trukket av europeere uten hensyn til lokale etniske, språklige og kulturelle grupper. Dette tvang rivaliserende grupper sammen og splittet andre grupper mellom flere stater — en vedvarende kilde til konflikter.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-20-oppsummering',
      type: 'text',
      content: `## Oppsummering: Avkolonisering og den tredje verden

Avkoloniseringen etter andre verdenskrig var en av de mest omveltende prosessene i det 20. århundre. Hundrevis av millioner mennesker fikk sin frihet, men frihet brakte ikke automatisk fred og velstand.

**De viktigste punktene:**
- Kolonialismen utnyttet folkeslag og ressurser i Asia, Afrika og andre steder i århundrer
- Avkoloniseringen skjedde hovedsakelig mellom 1945 og 1975, drevet av svekkede kolonimakter og sterke frigjøringsbevegelser
- Noen kolonier ble fredelig uavhengige (India, Ghana), andre måtte kjempe blodige frigjøringskriger (Algerie, Vietnam)
- De nye statene sto overfor enorme utfordringer: kunstige grenser, økonomisk avhengighet, mangel på institusjoner
- Apartheid i Sør-Afrika var det siste offisielle systemet for raseskille — det ble avskaffet i 1994
- Kolonialismens arv preger fortsatt global ulikhet, konflikter og maktforhold i dag`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-20-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-20-ex-5',
        number: '20.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Kolonialismens virkninger preger fortsatt verden i dag.» Drøft denne påstanden.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn minst tre måter kolonialismen fortsatt påvirker verden.',
            solution: 'Kolonialismen påvirker fortsatt: 1) Kunstige grenser i Afrika og Asia skaper konflikter mellom etniske grupper. 2) Økonomisk ulikhet — mange tidligere kolonier er fortsatt fattige og eksporterer billige råvarer til rike land. 3) Språklige og kulturelle ettervirkninger — europeiske språk er fortsatt offisielle språk i mange afrikanske land. 4) Rasisme og fordommer har røtter i kolonialismens tankegods. 5) Institusjoner og infrastruktur er ofte svake fordi kolonimaktene ikke investerte i dem.',
          },
          {
            label: 'b',
            task: 'Har de gamle kolonimaktene et ansvar for å bøte på kolonialismens skader? Begrunn svaret.',
            solution: 'Argumenter for: Kolonimaktene tjente enormt på utnyttelsen og bør bidra til utvikling. Rikdommen i Europa er delvis bygget på kolonial utbytting. Noen land har bedt om unnskyldning og gitt erstatning. Argumenter mot: Nålevende europeere bar ikke ansvaret personlig. Bistand kan skape avhengighet. Mange tidligere kolonier har hatt over 60 år med selvstyre. En god drøfting viser at spørsmålet er komplekst og krever nyansert tenkning.',
          },
        ],
        hints: ['Tenk på sammenhengen mellom fortid og nåtid i global ulikhet.'],
        solution: 'Kolonialismens virkninger er tydelige i dagens ulikhet, konflikter og maktstrukturer. Spørsmålet om ansvar og oppreisning er komplekst og krever nyansert diskusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-20-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-20-ex-6',
        number: '20.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Gandhis ikke-voldelige motstand i India med Nelson Mandelas kamp mot apartheid i Sør-Afrika. Hva hadde de til felles, og hva var ulikt?',
        hints: [
          'Tenk på metoder, mål, resultater og kontekst.',
          'Begge kjempet mot undertrykkelse, men under ulike omstendigheter.',
        ],
        solution: 'Felles: Begge kjempet mot et rasistisk system. Begge brukte sivil ulydighet og fredelige protester som viktige virkemidler. Begge ble fengslet for sin motstand. Begge inspirerte hele verden. Ulikt: Gandhi avviste all vold, mens ANC til slutt gikk til væpnet motstand (Mandela var med på å grunnlegge ANC militærfløy). Konteksten var forskjellig — India mot kolonimakt, Sør-Afrika mot internt regime. Gandhi ble drept, Mandela ble president. Begge viser at enkeltmennesker kan forandre historiens gang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kolonialisme', definition: 'System der en stat tar kontroll over og utnytter et annet territorium politisk og økonomisk' },
    { term: 'Avkolonisering', definition: 'Prosessen der koloniene ble selvstendige stater, hovedsakelig mellom 1945 og 1975' },
    { term: 'Selvbestemmelsesrett', definition: 'Prinsippet om at alle folk har rett til å bestemme over sin egen politiske fremtid' },
    { term: 'Den tredje verden', definition: 'Betegnelse fra den kalde krigen for de nylig uavhengige landene som ikke tilhørte Vest- eller Østblokken' },
    { term: 'Den alliansefrie bevegelsen', definition: 'Organisasjon av land som ønsket å stå utenfor den kalde krigens blokkpolitikk' },
    { term: 'Ikke-voldelig motstand', definition: 'Strategi for å bekjempe urettferdighet gjennom sivil ulydighet og fredelige protester, utviklet av Gandhi' },
    { term: 'Apartheid', definition: 'Sør-Afrikas system for lovfestet rasesegregering fra 1948 til 1994' },
    { term: 'Nelson Mandela', definition: 'Sørafrikansk frihetskjemper, fanget i 27 år, ble landets første demokratisk valgte president i 1994' },
    { term: 'Berlin-konferansen', definition: 'Konferansen i 1884–85 der europeiske stormakter delte Afrika mellom seg uten afrikansk deltakelse' },
    { term: 'Sannhets- og forsoningskommisjonen', definition: 'Sør-Afrikas tilnærming til oppgjør etter apartheid — overgripere kunne få amnesti mot å innrømme sine handlinger' },
  ],
};

// ============================================================================
// KAPITTEL 21: Norge etter 1945
// LK20: Utforske korleis menneske har kjempa og kjempar for endringar i
//        samfunnet og samstundes vurdere korleis endringar i samfunnet
//        har påverka og påverkar levekår og sjølvforståing
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_21: TextbookChapter = {
  id: 'samfunnsfag-10-21',
  courseId: 'samfunnsfag-10',
  chapterNumber: '21',
  title: 'Norge etter 1945',
  description: 'Forstå hvordan Norge ble bygget opp etter krigen, utviklingen av velferdsstaten, oljeeventyret og de store samfunnsendringene frem til i dag.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske korleis menneske har kjempa og kjempar for endringar i samfunnet',
    'gjere greie for hovudtrekk i norsk historie etter 1945 og reflektere over korleis Noreg har endra seg',
    'reflektere over korleis hendingar i fortida har påverka vår eiga tid',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-21-intro',
      type: 'text',
      content: `## Fra fattigdom til verdens rikeste land

Da krigen sluttet 8. mai 1945, lå store deler av Norge i ruiner — særlig Nord-Norge, som var brent og ødelagt av den tyske tilbaketrekningen. Landet var fattig, slitt og preget av fem år med okkupasjon.

Åtti år senere er Norge et av verdens rikeste og mest velstående land, med en omfattende velferdsstat, høy levestandard og et solid demokrati. Hvordan skjedde denne forvandlingen?

Svaret ligger i en kombinasjon av gjenoppbygging, politisk vilje, oljerikdom og sosiale reformer som forandret hverdagen til vanlige mennesker. Men utviklingen har ikke vært uten konflikter og omstridte valg.

I dette kapittelet skal du lære om:
- Gjenoppbyggingen etter krigen
- Velferdsstaten — fra vugge til grav
- EF/EU-debattene
- Oljeeventyret og dets betydning
- Likestilling og sosiale endringer
- Innvandring og det flerkulturelle Norge
- Norges rolle i verden`,
    },

    // ========== DEFINISJON: GJENOPPBYGGING ==========
    {
      id: 'samfunnsfag-10-21-def-1',
      type: 'definition',
      title: 'Gjenoppbygging og velferdsstat',
      content: `**Gjenoppbyggingen (1945–1960-tallet):**
Etter krigen ble Norge bygget opp igjen gjennom et imponerende nasjonalt samarbeid:
- **Marshallplanen:** USA ga økonomisk hjelp som var avgjørende for gjenoppbyggingen
- **Arbeiderpartiet** dominerte norsk politikk fra 1945 til 1965 under ledere som Einar Gerhardsen («landsfaderen»). Partiet kombinerte demokrati med sterk statlig styring av økonomien
- **Industrivekst:** Kraftkrevende industri (aluminium, gjødsel) ble bygget opp basert på Norges rike vannkraftressurser
- **Full sysselsetting** ble et overordnet mål — arbeid til alle

**Velferdsstaten:**
Norge utviklet gradvis en omfattende **velferdsstat** — et system der staten tar ansvar for innbyggernes grunnleggende trygghet og velferd:

- **Folketrygden (1967):** Samlet ulike trygdeordninger i ett system. Sikret alle nordmenn alderspensjon, sykepenger, arbeidsledighetstrygd og uførepensjon
- **Gratis utdanning:** Fra grunnskole til universitet
- **Offentlig helsevesen:** Tilgang til helsehjelp for alle, uavhengig av inntekt
- **Barnetrygd:** Økonomisk støtte til alle familier med barn
- **Arbeidsmiljøloven:** Beskyttelse av arbeidstakeres rettigheter

**Prinsippet:**
Velferdsstaten bygger på en **samfunnskontrakt**: Alle bidrar gjennom skatter og avgifter, og alle får tilbake gjennom offentlige tjenester og trygdeordninger. De som har mye, bidrar mer — de som trenger hjelp, får det. Prinsippet er solidaritet og lik tilgang til viktige tjenester.`,
    },

    // ========== OPPGAVE 21.1 ==========
    {
      id: 'samfunnsfag-10-21-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-21-ex-1',
        number: '21.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det grunnleggende prinsippet bak den norske velferdsstaten?',
        options: [
          {
            id: 'a',
            text: 'At staten tar vare på de rikeste innbyggerne',
            isCorrect: false,
            feedback: 'Feil. Velferdsstaten er for alle, men hjelper særlig de som trenger det mest. Prinsippet er solidaritet, ikke at de rikeste prioriteres.',
          },
          {
            id: 'b',
            text: 'At alle bidrar gjennom skatter, og alle får tilbake gjennom offentlige tjenester og trygdeordninger',
            isCorrect: true,
            feedback: 'Riktig! Velferdsstaten bygger på solidaritet — alle betaler inn gjennom skatter, og alle har rett til tjenester som helsevesen, utdanning og trygd. De som har mye, bidrar mer.',
          },
          {
            id: 'c',
            text: 'At folk må klare seg selv uten hjelp fra staten',
            isCorrect: false,
            feedback: 'Feil. Det er det motsatte av velferdsstatens prinsipp. Velferdsstaten er nettopp at staten tar ansvar for innbyggernes grunnleggende trygghet.',
          },
          {
            id: 'd',
            text: 'At bare de som er født i Norge har rett til velferd',
            isCorrect: false,
            feedback: 'Feil. Velferdsstaten gjelder alle som bor og arbeider i Norge, ikke bare de som er født her.',
          },
        ],
        solution: 'Velferdsstaten bygger på solidaritetsprinsippet: alle bidrar gjennom skatter og avgifter, og alle har rett til grunnleggende tjenester som helsehjelp, utdanning og økonomisk sikkerhetsnett.',
      },
    },

    // ========== DEFINISJON: OLJEEVENTYRET ==========
    {
      id: 'samfunnsfag-10-21-def-2',
      type: 'definition',
      title: 'Oljeeventyret — Norges sorte gull',
      content: `Funnet av olje og gass i Nordsjøen på slutten av 1960-tallet forandret Norge for alltid.

**Tidslinje:**
- **1969:** Det store Ekofisk-feltet oppdages i Nordsjøen
- **1971:** Oljeproduksjonen starter
- **1972:** Statoil (nå Equinor) opprettes som statlig oljeselskap
- **1990:** Statens pensjonsfond utland (Oljefondet) opprettes for å spare oljeinntektene til fremtidige generasjoner
- **2024:** Oljefondet er verdt over 17 000 milliarder kroner — verdens største statlige investeringsfond

**De «ti oljebud» (1971):**
Stortinget vedtok ti prinsipper for forvaltningen av oljeressursene:
- Nasjonalt eierskap og kontroll
- Staten skal ha betydelig eierandel
- Inntektene skal komme hele samfunnet til gode
- Hensynet til miljø skal ivaretas

**Oljefondet:**
For å unngå «hollandsk syke» — at plutselig rikdom ødelegger økonomien — vedtok Norge å spare det meste av oljeinntektene i et fond. **Handlingsregelen** (innført 2001) sier at staten bare skal bruke den forventede avkastningen av fondet (ca. 3 prosent) over statsbudsjettet. Slik bevares formuen for fremtidige generasjoner.

**Konsekvenser:**
- Norge ble et av verdens rikeste land
- Oljesektoren ble Norges viktigste næring
- Velferdsstaten ble finansiert og utvidet
- Men: Avhengighet av fossil energi er en utfordring i møte med klimakrisen`,
    },

    // ========== EKSEMPEL: OLJEFONDET ==========
    {
      id: 'samfunnsfag-10-21-example-1',
      type: 'example',
      title: 'Eksempel: Oljefondet — rikdom og ansvar',
      problem: 'Hvordan forvalter Norge sin oljerikdom, og hvilke dilemmaer oppstår?',
      solution: `**Oljefondets størrelse:**
Med over 17 000 milliarder kroner er Oljefondet verdens største statlige investeringsfond. Det eier i gjennomsnitt 1,5 prosent av alle børsnoterte selskaper i verden. Det betyr at nordmenn indirekte er medeiere i Apple, Google, Nestlé og tusenvis av andre selskaper.

**Etiske retningslinjer:**
Fondet har etiske retningslinjer som utelukker investering i selskaper involvert i:
- Produksjon av visse typer våpen (klasebomber, atomvåpen)
- Alvorlig miljøskade
- Alvorlige brudd på menneskerettigheter
- Tobakksproduksjon

**Dilemmaer:**
1. **Klima vs. olje:** Norge tjener penger på å selge olje og gass — fossil energi som bidrar til klimaendringer. Er det moralsk riktig å fortsette oljeproduksjonen?
2. **Handlingsregelen:** Politikere diskuterer stadig om det skal brukes mer av fondet til viktige formål (helse, utdanning, infrastruktur) — men høyere pengebruk kan føre til inflasjon og økonomisk ustabilitet.
3. **Fremtidige generasjoner:** Fondet er ment å sikre velstand for kommende generasjoner — men klarer vi å holde igjen på bruken?
4. **Global ulikhet:** Er det rettferdig at et lite land med 5,5 millioner innbyggere sitter på en slik enorm formue?

**Nøkkelpoenget:** Norges oljeforvaltning regnes som et av de mest vellykkede eksemplene i verden på ansvarlig forvaltning av naturressurser. Mange oljerike land har opplevd korrupsjon, krig og økonomisk kaos — den norske modellen viser at det finnes alternativer.`,
    },

    // ========== OPPGAVE 21.2 ==========
    {
      id: 'samfunnsfag-10-21-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-21-ex-2',
        number: '21.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oljeeventyret og dets betydning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er handlingsregelen, og hvorfor ble den innført?',
            solution: 'Handlingsregelen sier at staten bare skal bruke den forventede avkastningen av Oljefondet (ca. 3 prosent) over statsbudsjettet. Den ble innført for å unngå at høy oljepengebruk fører til økonomisk ustabilitet (inflasjon, tap av konkurranseevne), og for å bevare formuen for fremtidige generasjoner.',
          },
          {
            label: 'b',
            task: 'Drøft: Er det riktig at Norge fortsetter å produsere olje og gass samtidig som landet har ambisiøse klimamål?',
            solution: 'Argumenter for videre produksjon: oljen finansierer velferdsstaten, Norge produserer med lave utslipp, verden trenger energi i overgangsperioden. Argumenter mot: fossil energi driver klimaendringer, Norge bør lede an i omstillingen, det er etisk problematisk å tjene penger på klimaskadelig virksomhet. En god drøfting viser at dette er et genuint dilemma uten enkle svar.',
          },
        ],
        hints: ['Tenk på spenningen mellom økonomi og miljø.'],
        solution: 'Oljeeventyret har gjort Norge rikt, men skaper dilemmaer knyttet til klimaendringer og ansvarlig ressursforvaltning. Handlingsregelen er et forsøk på å forvalte rikdommen langsiktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: SAMFUNNSENDRINGER ==========
    {
      id: 'samfunnsfag-10-21-endringer',
      type: 'text',
      content: `## Store samfunnsendringer i etterkrigs-Norge

Norges utvikling etter 1945 handler om mer enn økonomi. En rekke sosiale og kulturelle endringer har formet det samfunnet du lever i:

### Likestilling
- **1913:** Kvinner fikk stemmerett i Norge
- **1978:** Likestillingsloven vedtatt — forbud mot diskriminering på grunn av kjønn
- **1981:** Gro Harlem Brundtland ble Norges første kvinnelige statsminister
- **1986:** Brundtlands «kvinneregjering» med nesten halvparten kvinner i statsrådstolene
- **2003:** Lov om 40 prosent kjønnsrepresentasjon i bedriftsstyrer

I dag er Norge et av verdens mest likestilte land, men utfordringer gjenstår: lønnsforskjeller mellom kvinner og menn, kjønnsdelt arbeidsmarked og ulik fordeling av omsorgsarbeid.

### EF/EU-debattene
Norge har to ganger stemt nei til EU-medlemskap:
- **1972:** 53,5 % stemte nei til EF (det som ble EU)
- **1994:** 52,2 % stemte nei til EU

Disse avstemningene var blant de mest opprivende politiske debattene i norsk etterkrigstid. Hovedmotsetningen gikk mellom dem som mente at EU-medlemskap ville sikre norsk innflytelse i Europa, og dem som fryktet for norsk suverenitet, fiskeri, landbruk og distriktspolitikk. Norge er i stedet tilknyttet EU gjennom EØS-avtalen.

### Innvandring og det flerkulturelle Norge
Fra 1960-tallet begynte arbeidsinnvandring til Norge — først fra Pakistan og Tyrkia, senere fra mange andre land. Fra 1980-tallet kom også flyktninger fra ulike krigs- og konfliktområder. I dag har rundt 20 prosent av Norges befolkning innvandrerbakgrunn.

Innvandringen har beriket Norge kulturelt og bidratt til økonomien, men har også skapt debatter om integrering, verdier og nasjonal identitet. Et velfungerende flerkulturelt samfunn krever gjensidig respekt, likeverd og vilje til dialog.`,
    },

    // ========== OPPGAVE 21.3 ==========
    {
      id: 'samfunnsfag-10-21-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-21-ex-3',
        number: '21.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange ganger har Norge stemt over EU-medlemskap, og hva ble resultatet begge gangene?',
        options: [
          {
            id: 'a',
            text: 'Én gang (1994) — resultatet ble nei',
            isCorrect: false,
            feedback: 'Feil. Norge har stemt over EU-medlemskap to ganger, ikke én.',
          },
          {
            id: 'b',
            text: 'To ganger (1972 og 1994) — begge gangene ble resultatet nei',
            isCorrect: true,
            feedback: 'Riktig! Norge stemte nei til EF i 1972 (53,5 % nei) og nei til EU i 1994 (52,2 % nei). Begge ganger var det svært jevnt.',
          },
          {
            id: 'c',
            text: 'To ganger — ja i 1972, nei i 1994',
            isCorrect: false,
            feedback: 'Feil. Norge stemte nei begge gangene — i 1972 og 1994.',
          },
          {
            id: 'd',
            text: 'Tre ganger — nei alle gangene',
            isCorrect: false,
            feedback: 'Feil. Norge har kun hatt to folkeavstemninger om EU/EF-medlemskap.',
          },
        ],
        solution: 'Norge har stemt over EU-medlemskap to ganger — i 1972 (53,5 % nei til EF) og i 1994 (52,2 % nei til EU). Norge er i stedet tilknyttet EU gjennom EØS-avtalen.',
      },
    },

    // ========== OPPGAVE 21.4 ==========
    {
      id: 'samfunnsfag-10-21-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-21-ex-4',
        number: '21.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Likestilling i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre viktige milepæler i norsk likestillingshistorie etter 1945.',
            solution: 'Tre milepæler: 1) Likestillingsloven (1978) — forbud mot diskriminering basert på kjønn. 2) Gro Harlem Brundtland ble Norges første kvinnelige statsminister (1981). 3) Lovpålagt 40 prosent kjønnsrepresentasjon i bedriftsstyrer (2003). Andre viktige milepæler: Selvbestemt abort (1978), pappapermisjonskvoten (1993).',
          },
          {
            label: 'b',
            task: 'Er Norge ferdig med likestillingskampen, eller gjenstår det utfordringer? Begrunn svaret.',
            solution: 'Selv om Norge er blant verdens mest likestilte land, gjenstår utfordringer: Kvinner tjener fortsatt i gjennomsnitt mindre enn menn. Arbeidsmarkedet er kjønnsdelt (kvinner dominerer i helse og omsorg, menn i teknologi og bygg). Kvinner er underrepresentert i lederstillinger og toppnæringslivet. Vold i nære relasjoner rammer kvinner i større grad. Likestilling er en pågående prosess, ikke et ferdig prosjekt.',
          },
        ],
        hints: ['Tenk på forskjellen mellom formell likestilling (lovgivning) og reell likestilling (praksis).'],
        solution: 'Norge har kommet langt i likestilling, men det gjenstår utfordringer. Formell likestilling i lovverket er oppnådd, men reell likestilling i praksis er fortsatt et pågående arbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL: BRUNDTLAND ==========
    {
      id: 'samfunnsfag-10-21-example-2',
      type: 'example',
      title: 'Eksempel: Gro Harlem Brundtland — «Landsmoren»',
      problem: 'Hvilken betydning hadde Gro Harlem Brundtland for Norge og verden?',
      solution: `**Norsk politikk:**
Gro Harlem Brundtland ble Norges første kvinnelige statsminister i 1981 og ledet tre regjeringer. I 1986 utnevnte hun en regjering med nesten halvparten kvinner — den gangen revolusjonerende og internasjonalt oppsiktsvekkende. Hun fikk tilnavnet «Landsmoren».

**Brundtland-kommisjonen:**
I 1987 ledet hun FNs verdenskommisjon for miljø og utvikling, som ga ut rapporten «Vår felles fremtid». Rapporten introduserte begrepet **bærekraftig utvikling** — «utvikling som tilfredsstiller dagens behov uten å ødelegge mulighetene for kommende generasjoner til å tilfredsstille sine behov.» Dette begrepet er i dag grunnleggende for global miljøpolitikk.

**Arv:**
Brundtland viste at kvinner kunne lede på høyeste nivå i politikken. Hun satte likestilling, miljø og folkehelse på dagsordenen — temaer som fortsatt preger norsk og internasjonal debatt.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-21-oppsummering',
      type: 'text',
      content: `## Oppsummering: Norge etter 1945

Norge har gjennomgått en dramatisk utvikling fra et fattig, krigsherjet land til et av verdens rikeste og mest velstående samfunn.

**De viktigste punktene:**
- Gjenoppbyggingen etter krigen ble støttet av Marshallplanen og sterk statlig styring
- Velferdsstaten ble gradvis utbygget med Folketrygden (1967) som et sentralt element
- Oljefunnet i 1969 forandret Norges økonomi — Oljefondet sikrer rikdommen for fremtiden
- Handlingsregelen begrenser bruken av oljepenger for å unngå økonomisk ustabilitet
- Likestillingskampen har gjort Norge til et av verdens mest likestilte land
- Norge stemte nei til EU to ganger, men er tilknyttet gjennom EØS-avtalen
- Innvandring har gjort Norge til et flerkulturelt samfunn
- Norges utvikling viser at politiske valg og forvaltning av ressurser kan forandre et samfunn fundamentalt`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-21-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-21-ex-5',
        number: '21.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Uten oljen ville Norge vært et helt annet land.» Drøft denne påstanden.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan har oljen forandret Norge? Nevn minst tre konkrete eksempler.',
            solution: 'Oljen har forandret Norge ved: 1) Massiv velstandsøkning — fra et av Europas fattigere land til et av verdens rikeste. 2) Oljefondet gir økonomisk trygghet og handlefrihet. 3) Velferdsstaten er utvidet og finansiert med oljeinntekter. 4) Oljeindustrien har skapt tusenvis av arbeidsplasser. 5) Norges internasjonale posisjon er styrket.',
          },
          {
            label: 'b',
            task: 'Kunne Norge ha blitt et velstående land også uten oljen? Begrunn svaret.',
            solution: 'Argumenter for: Andre nordiske land (Sverige, Danmark, Finland) er velstående uten olje. Norge hadde sterke demokratiske tradisjoner, god utdanning og en sterk arbeiderbevegelse. Norges vannkraft og fiskeriressurser ga et solid økonomisk grunnlag. Argumenter mot: Velferdsstaten ville vært mindre sjenerøs, Norge ville hatt høyere statsgjeld, og mange av de store infrastrukturprosjektene ville ikke vært mulige uten oljepenger.',
          },
        ],
        hints: ['Sammenlign gjerne med andre nordiske land som ikke har olje.'],
        solution: 'Oljen har utvilsomt gjort Norge ekstraordinært rikt, men landets demokratiske tradisjoner, utdanningssystem og velferdsorientering hadde trolig ført til et velstående samfunn også uten oljen — om enn ikke like rikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-21-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-21-ex-6',
        number: '21.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velferdsstatens fremtid. Noen mener velferdsstaten er under press fra flere sider: en aldrende befolkning, økte kostnader og krav om lavere skatter.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor en aldrende befolkning utfordrer velferdsstaten.',
            solution: 'Når folk lever lenger og det fødes færre barn, blir det færre yrkesaktive som betaler skatt, og flere pensjonister og eldre som trenger helse- og omsorgstjenester. Forholdet mellom de som betaler inn og de som mottar ytelser, forskyves — det blir vanskeligere å finansiere velferdsstaten på samme nivå.',
          },
          {
            label: 'b',
            task: 'Hva mener du er viktigst for å sikre velferdsstatens fremtid? Begrunn svaret.',
            solution: 'Mulige tiltak: Høy yrkesdeltakelse (særlig blant innvandrere og eldre). Effektivisering av offentlig sektor. Teknologi i helse og omsorg. Bærekraftig bruk av oljefondet. Prioritering — ikke alt kan være gratis. Innvandring som bidrar til arbeidsstyrken. En god drøfting viser forståelse for at velferdsstaten krever aktiv politisk innsats for å opprettholdes.',
          },
        ],
        hints: ['Tenk på balansen mellom inntekter (skatt) og utgifter (velferd).'],
        solution: 'Velferdsstaten er under press fra en aldrende befolkning og økte kostnader. For å sikre den for fremtiden trengs politisk vilje, omstilling og kloke prioriteringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Velferdsstat', definition: 'Et system der staten tar ansvar for innbyggernes grunnleggende trygghet gjennom helse, utdanning og trygdeordninger' },
    { term: 'Folketrygden', definition: 'Norges universelle trygdesystem fra 1967 som sikrer alderspensjon, sykepenger, uførepensjon og andre ytelser' },
    { term: 'Marshallplanen', definition: 'USAs program for økonomisk gjenoppbygging av Europa etter andre verdenskrig' },
    { term: 'Oljeeventyret', definition: 'Norges utvikling etter oljefunnet i 1969, som forvandlet landet fra relativt fattig til svært rikt' },
    { term: 'Oljefondet', definition: 'Statens pensjonsfond utland — verdens største statlige investeringsfond, finansiert av Norges olje- og gassinntekter' },
    { term: 'Handlingsregelen', definition: 'Regelen om at staten kun skal bruke den forventede avkastningen av Oljefondet (ca. 3 %) over statsbudsjettet' },
    { term: 'Likestillingsloven', definition: 'Norsk lov fra 1978 som forbyr diskriminering basert på kjønn' },
    { term: 'EØS-avtalen', definition: 'Avtalen som knytter Norge til EUs indre marked uten fullt EU-medlemskap' },
    { term: 'Bærekraftig utvikling', definition: 'Utvikling som tilfredsstiller dagens behov uten å ødelegge mulighetene for kommende generasjoner' },
    { term: 'Gro Harlem Brundtland', definition: 'Norges første kvinnelige statsminister (1981), introduserte begrepet bærekraftig utvikling gjennom FN' },
    { term: 'Integrering', definition: 'Prosessen der innvandrere blir en del av det norske samfunnet samtidig som de kan beholde sin kulturelle identitet' },
  ],
};

// ============================================================================
// KAPITTEL 22: Terrorisme og sikkerhet
// LK20: Gjere greie for årsaker til og konsekvensar av sentrale historiske
//        og notidige konfliktar og reflektere over om endringar av nokre
//        føresetnader kunne ha hindra konfliktane
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_22: TextbookChapter = {
  id: 'samfunnsfag-10-22',
  courseId: 'samfunnsfag-10',
  chapterNumber: '22',
  title: 'Terrorisme og sikkerhet',
  description: 'Forstå hva terrorisme er, viktige terrorhendelser i nyere tid, terroren i Norge 22. juli 2011, og balansen mellom sikkerhet og frihet i et demokrati.',
  estimatedMinutes: 90,
  competenceGoals: [
    'gjere greie for årsaker til og konsekvensar av sentrale historiske og notidige konfliktar',
    'reflektere over korleis demokrati og diktatur behandlar grunnleggjande rettar ulikt',
    'utforske korleis menneske har kjempa og kjempar for endringar i samfunnet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-22-intro',
      type: 'text',
      content: `## Når frykten truer demokratiet

Terrorisme er et av de mest alvorlige truslene mot fred og sikkerhet i vår tid. Terrorangrep rammer uskyldige mennesker og sprer frykt i hele samfunn. Målet med terrorisme er nettopp det — å skape frykt som er uforholdsmessig stor i forhold til den faktiske skaden.

For Norge ble terrorisme en smertefull realitet 22. juli 2011, da landet ble rammet av det verste terrorangrepet i sin historie. 77 mennesker ble drept, de fleste ungdommer på AUFs sommerleir på Utøya. Angrepet forandret Norge og tvang oss til å tenke nytt om sikkerhet, beredskap og demokratiske verdier.

Men terrorisme er ikke bare et norsk fenomen — det er en global utfordring som har formet politikk og sikkerhetstiltak over hele verden. Kampen mot terror reiser vanskelige spørsmål: Hvordan beskytter vi oss uten å ofre de frihetene som gjør demokratiet verdt å forsvare?

I dette kapittelet skal du lære om:
- Hva terrorisme er og ulike former for terror
- 11. september 2001 og dens konsekvenser
- 22. juli 2011 — terroren i Norge
- Radikalisering og forebygging
- Balansen mellom sikkerhet og frihet`,
    },

    // ========== DEFINISJON: TERRORISME ==========
    {
      id: 'samfunnsfag-10-22-def-1',
      type: 'definition',
      title: 'Hva er terrorisme?',
      content: `**Terrorisme** er bruk av vold eller trusler om vold mot sivile for å skape frykt og oppnå politiske, religiøse eller ideologiske mål.

**Kjennetegn ved terrorisme:**
- Rettet mot uskyldige sivile — ikke militære mål
- Hensikten er å skape frykt i en mye større gruppe enn dem som rammes direkte
- Drevet av politiske, religiøse eller ideologiske motiver
- Ulovlig og i strid med internasjonal lov

**Ulike former for terrorisme:**

**Islamistisk terrorisme:**
Ekstreme grupper som al-Qaida og IS (Den islamske stat) bruker en forvrengt tolkning av islam til å rettferdiggjøre vold. Det er viktig å understreke at islamistiske terrorister påberoper seg en tolkning av islam som det store flertallet av verdens muslimer avviser. Terrorisme i islams navn er fordømt av ledende muslimske lærde og organisasjoner verden over.

**Høyreekstrem terrorisme:**
Motivert av rasisme, nasjonalisme og hat mot bestemte grupper. Eksempler inkluderer angrepet 22. juli 2011 i Norge og angrepet mot moskeer i Christchurch, New Zealand, i 2019.

**Venstreekstrem terrorisme:**
Historisk sett begått av grupper som Rote Armee Fraktion (Tyskland) og Brigate Rosse (Italia) på 1970- og 1980-tallet, motivert av revolusjonær ideologi.

**Separatistisk terrorisme:**
Knyttet til frigjøringskamper eller ønsker om selvstendighet, som ETA (Baskerland) og IRA (Nord-Irland).

**Viktig:** Terrorisme er aldri legitimt, uansett formål. Det finnes ingen politisk, religiøs eller ideologisk sak som rettferdiggjør å drepe uskyldige mennesker.`,
    },

    // ========== EKSEMPEL: 11. SEPTEMBER ==========
    {
      id: 'samfunnsfag-10-22-example-1',
      type: 'example',
      title: 'Eksempel: 11. september 2001 — dagen som endret verden',
      problem: 'Hva skjedde 11. september 2001, og hvilke konsekvenser fikk angrepene?',
      solution: `**Hendelsen:**
11. september 2001 kapret 19 terrorister fra al-Qaida fire passasjerfly i USA:
- To fly ble fløyet inn i World Trade Centers tvillingtårn i New York, som kollapset
- Ett fly traff Pentagon (USAs forsvarsdepartement)
- Ett fly styrtet i Pennsylvania etter at passasjerene kjempet mot kaprerne
- Nesten 3 000 mennesker ble drept — det dødeligste terrorangrepet i historien

**Konsekvenser:**

**Krigen mot terror:**
USA erklærte «krig mot terror» og gikk til militær aksjon:
- Afghanistan (2001): USA og NATO invaderte for å styrte Taliban-regimet som ga al-Qaida fristed. Norge deltok med militære styrker.
- Irak (2003): USA invaderte Irak, offisielt for å fjerne masseødeleggelsesvåpen som aldri ble funnet. Krigen var omstridt og førte til langvarig ustabilitet.

**Sikkerhetstiltak:**
- Flyplassikkerheten ble dramatisk skjerpet over hele verden
- USA innførte inngripende overvåkingslover (Patriot Act)
- Grensekontroller ble strengere
- Etterretningstjenester fikk utvidede fullmakter

**Debatt om frihet vs. sikkerhet:**
11. september reiste et grunnleggende spørsmål: Hvor mye frihet er vi villige til å ofre for sikkerhet? Masseovervåking, tortur av terrormistenkte (Guantánamo) og innskrenkede rettigheter ble kritisert av menneskerettighetsorganisasjoner.

**Konsekvensen:** Et sentralt dilemma i demokratier ble tydelig — hvordan beskytte seg mot terror uten å undergrave de verdiene man forsvarer.`,
    },

    // ========== OPPGAVE 22.1 ==========
    {
      id: 'samfunnsfag-10-22-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-22-ex-1',
        number: '22.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det viktigste kjennetegnet ved terrorisme som skiller det fra andre former for vold?',
        options: [
          {
            id: 'a',
            text: 'At terrorisme alltid utføres av store militære styrker',
            isCorrect: false,
            feedback: 'Feil. Terrorisme kan utføres av enkeltpersoner eller små grupper. Det er ikke omfanget som definerer terrorisme.',
          },
          {
            id: 'b',
            text: 'At målet er å skape frykt i en stor gruppe gjennom vold mot sivile for å oppnå politiske, religiøse eller ideologiske mål',
            isCorrect: true,
            feedback: 'Riktig! Det sentrale ved terrorisme er bruken av vold mot uskyldige sivile for å skape frykt og oppnå politiske, religiøse eller ideologiske mål. Frykten rammer langt flere enn de direkte ofrene.',
          },
          {
            id: 'c',
            text: 'At terrorisme kun utføres av religiøse grupper',
            isCorrect: false,
            feedback: 'Feil. Terrorisme kan være motivert av mange ulike ideologier — religiøse, politiske, nasjonalistiske eller andre. Ingen bestemt religion eller ideologi har monopol på terrorisme.',
          },
          {
            id: 'd',
            text: 'At terrorisme bare rammer andre land, aldri ens eget',
            isCorrect: false,
            feedback: 'Feil. Terrorisme kan ramme ethvert land, inkludert terroristens eget. 22. juli 2011 i Norge er et tragisk eksempel.',
          },
        ],
        solution: 'Terrorisme kjennetegnes av bruk av vold mot uskyldige sivile for å skape frykt og oppnå politiske, religiøse eller ideologiske mål. Det er fryktskapingen som er det sentrale virkemiddelet.',
      },
    },

    // ========== DEFINISJON: 22. JULI ==========
    {
      id: 'samfunnsfag-10-22-def-2',
      type: 'definition',
      title: '22. juli 2011 — terroren mot Norge',
      content: `22. juli 2011 ble Norge rammet av det verste terrorangrepet i sin historie, utført av den høyreekstreme terroristen Anders Behring Breivik.

**Hendelsene:**
- **Kl. 15:25:** En bilbombe eksploderte i regjeringskvartalet i Oslo. 8 mennesker ble drept og mange skadet. Flere regjeringsbygg ble ødelagt.
- **Kl. 17:21–18:34:** Terroristen tok seg til AUFs sommerleir på Utøya, der han skjøt og drepte 69 mennesker — de fleste ungdommer mellom 14 og 19 år. Over 30 ble skadet.

**Totalt:** 77 mennesker ble drept. Det var det største tapet av menneskeliv i Norge i fredstid.

**Gjerningsmannens motiv:**
Terroristen var drevet av høyreekstrem ideologi — hat mot multikulturalisme, islam og den politiske venstresiden. Han angrep AUF (Arbeidernes Ungdomsfylking) fordi han holdt Arbeiderpartiet ansvarlig for norsk innvandringspolitikk. Hans handlinger var uttrykk for en ekstrem og hatfylt ideologi som det store flertallet i Norge avviser.

**Rettsoppgjøret:**
Terroristen ble i august 2012 dømt til forvaring i 21 år med mulighet for forlengelse. Retten fant ham strafferettslig tilregnelig — han visste hva han gjorde.

**Viktig:** Det er viktig å omtale denne hendelsen med respekt for ofrene og deres familier. De 77 som ble drept, var uskyldige mennesker som ble tatt fra oss i en meningsløs handling.`,
    },

    // ========== TEKST: NORGES RESPONS ==========
    {
      id: 'samfunnsfag-10-22-respons',
      type: 'text',
      content: `## Norges respons — demokrati og åpenhet

Norges reaksjon på 22. juli-angrepet ble lagt merke til internasjonalt. I stedet for å svare med frykt og hat, valgte Norge å holde fast ved sine demokratiske verdier.

### Rosetogene
Dagen etter angrepet samlet hundretusenvis av nordmenn seg i rosetog over hele landet. Statsminister Jens Stoltenberg uttalte ordene som ble et samlingspunkt: *«Vårt svar er mer demokrati, mer åpenhet og mer humanitet. Men aldri naivitet.»*

### 22. juli-kommisjonen (Gjørv-kommisjonen)
I 2012 la en uavhengig kommisjon frem en kritisk rapport som avdekket alvorlige svakheter i beredskapen:
- Politiet brukte for lang tid på å komme til Utøya
- Kommunikasjonen mellom nødetatene sviktet
- Sikringen av regjeringskvartalet var for dårlig
- Beredskapssystemet var underdimensjonert

Rapporten førte til betydelige forbedringer i norsk beredskap og sikkerhet.

### Gjenreisning
De overlevende fra Utøya og familiene til de drepte har vist en enorm styrke. Mange av dem har engasjert seg i politikk og samfunnsarbeid — og fortsatt kampen for de verdiene som ble angrepet. De har nektet å la terroren vinne.

### Lærdommer
22. juli lærte Norge flere viktige ting:
- Terrorisme kan komme fra alle hold — også fra innsiden
- Demokratiet må forsvares aktivt, ikke tas for gitt
- Beredskap og sikkerhet må prioriteres
- Hat og ekstremisme må bekjempes — men med demokratiske midler`,
    },

    // ========== OPPGAVE 22.2 ==========
    {
      id: 'samfunnsfag-10-22-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-22-ex-2',
        number: '22.2',
        type: 'classic',
        difficulty: 'medium',
        task: '22. juli 2011 og Norges respons.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva mente statsminister Stoltenberg med utsagnet «Vårt svar er mer demokrati, mer åpenhet og mer humanitet»?',
            solution: 'Stoltenberg mente at Norge ikke skulle la terroren endre samfunnet i retning av frykt, innskrenkede rettigheter eller hat. I stedet skulle svaret være å styrke de verdiene terroristen forsøkte å ødelegge — demokratisk deltakelse, åpenhet i samfunnet og medmenneskelighet. Terroren skulle ikke vinne ved å gjøre Norge til et lukket og fryktdrevet samfunn.',
          },
          {
            label: 'b',
            task: 'Hvilke svakheter avdekket Gjørv-kommisjonen i Norges beredskap, og hvorfor var det viktig å granske dette åpent?',
            solution: 'Kommisjonen avdekket at politiet brukte for lang tid, kommunikasjonen mellom nødetatene sviktet, og sikringen av regjeringskvartalet var mangelfull. Det var viktig å granske dette åpent fordi: det viser respekt for ofrene ved å ta feilene på alvor, det gjør det mulig å lære og forbedre beredskapen, og åpenhet om svakheter er et kjennetegn ved et velfungerende demokrati.',
          },
        ],
        hints: ['Tenk på hva slags samfunn terroristen ønsket å skape, og hva slags samfunn Norge valgte å være.'],
        solution: 'Norges respons på 22. juli viste at et demokrati kan møte terror med fasthet og verdighet. Åpen gransking av svakheter og styrking av demokratiske verdier var sentralt i gjenreisningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: RADIKALISERING ==========
    {
      id: 'samfunnsfag-10-22-def-3',
      type: 'definition',
      title: 'Radikalisering — veien mot ekstremisme',
      content: `**Radikalisering** er prosessen der en person gradvis utvikler ekstreme holdninger og til slutt kan bli villig til å bruke vold for å nå sine mål.

**Hvordan skjer radikalisering?**
Det er ingen enkel oppskrift, men flere faktorer kan spille inn:
- **Utenforskap:** Følelse av å ikke høre til, å være utstøtt eller mislykket
- **Søken etter identitet og tilhørighet:** Ekstreme grupper tilbyr fellesskap og en klar identitet
- **Sosiale medier:** Algoritmer kan lede sårbare personer inn i stadig mer ekstremt innhold
- **Fiendebilde:** Et tydelig «dem mot oss»-verdensbilde som gir enkle svar på komplekse problemer
- **Ideologi:** Religiøs, politisk eller annen ideologi som rettferdiggjør vold
- **Karismatiske ledere:** Personer som rekrutterer og manipulerer sårbare individer

**Forebygging:**
- **Tidlig innsats:** Fange opp personer som viser tegn til radikalisering
- **Inkludering:** Motvirke utenforskap gjennom skole, fritidsaktiviteter og arbeid
- **Kritisk tenkning:** Styrke evnen til å gjennomskue propaganda og ekstrem retorikk
- **Motfortellinger:** Tilby alternative perspektiver til de ekstreme
- **Exitprogrammer:** Hjelpe dem som ønsker å forlate ekstreme miljøer

**Viktig poeng:** Å ha sterke meninger er ikke det samme som å være ekstremist. Radikalisering handler om en gradvis prosess der en person blir villig til å bruke vold — det er voldsberedskapen som er grensen.`,
    },

    // ========== OPPGAVE 22.3 ==========
    {
      id: 'samfunnsfag-10-22-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-22-ex-3',
        number: '22.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er radikalisering?',
        options: [
          {
            id: 'a',
            text: 'Å ha sterke politiske meninger og engasjere seg aktivt i politikk',
            isCorrect: false,
            feedback: 'Feil. Å ha sterke meninger og være politisk engasjert er en del av demokratiet, ikke radikalisering. Radikalisering handler om å utvikle beredskap til å bruke vold.',
          },
          {
            id: 'b',
            text: 'Å gradvis utvikle ekstreme holdninger som kan føre til at man aksepterer bruk av vold for politiske, religiøse eller ideologiske mål',
            isCorrect: true,
            feedback: 'Riktig! Radikalisering er en prosess der en person gradvis utvikler stadig mer ekstreme holdninger, og til slutt kan bli villig til å bruke eller støtte vold. Det er voldsberedskapen som er den avgjørende grensen.',
          },
          {
            id: 'c',
            text: 'Å konvertere til en ny religion',
            isCorrect: false,
            feedback: 'Feil. Å konvertere til en religion er en personlig troshandling og har ingenting med radikalisering å gjøre i seg selv. Radikalisering handler om voldsberedskap.',
          },
          {
            id: 'd',
            text: 'Å melde seg inn i et politisk parti',
            isCorrect: false,
            feedback: 'Feil. Politisk deltakelse er en demokratisk rettighet, ikke radikalisering. Radikalisering handler om en prosess mot voldsberedskap.',
          },
        ],
        solution: 'Radikalisering er prosessen der en person gradvis utvikler ekstreme holdninger og til slutt kan bli villig til å bruke vold. Det er voldsberedskapen som skiller radikalisering fra vanlig politisk engasjement.',
      },
    },

    // ========== OPPGAVE 22.4 ==========
    {
      id: 'samfunnsfag-10-22-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-22-ex-4',
        number: '22.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forebygging av radikalisering.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre faktorer som kan bidra til at en person radikaliseres.',
            solution: 'Tre faktorer: 1) Utenforskap og følelsen av å ikke høre til i samfunnet. 2) Sosiale medier og algoritmer som leder inn i stadig mer ekstremt innhold. 3) Søken etter identitet og tilhørighet — ekstreme grupper tilbyr fellesskap og mening. Andre faktorer: fiendebilde («oss mot dem»), karismatiske ledere, personlige kriser, ideologisk overbevisning.',
          },
          {
            label: 'b',
            task: 'Hva kan du som ung person gjøre for å motvirke radikalisering i ditt nærmiljø?',
            solution: 'Du kan: Inkludere folk som virker utenfor — utenforskap er en viktig risikofaktor. Være kritisk til ekstremt innhold på nett og melde fra om hatefulle ytringer. Snakke med en voksen (lærer, rådgiver) hvis du er bekymret for noen. Argumentere mot forenklede «oss mot dem»-fortellinger. Vise at det finnes alternativer til ekstremisme. Det viktigste er å ikke være passiv tilskuer.',
          },
        ],
        hints: ['Tenk på hva som gjør at noen føler seg så utenfor at ekstreme grupper blir attraktive.'],
        solution: 'Radikalisering er en gradvis prosess drevet av utenforskap, ideologi og søken etter tilhørighet. Forebygging handler om inkludering, kritisk tenkning og tidlig innsats.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-22-oppsummering',
      type: 'text',
      content: `## Oppsummering: Terrorisme og sikkerhet

Terrorisme er en alvorlig trussel mot fred, sikkerhet og demokrati. Det er bruk av vold mot uskyldige sivile for å skape frykt og oppnå politiske, religiøse eller ideologiske mål.

**De viktigste punktene:**
- Terrorisme finnes i mange former: islamistisk, høyreekstrem, venstreekstrem og separatistisk
- 11. september 2001 forandret verdens sikkerhetspolitikk og utløste «krigen mot terror»
- 22. juli 2011 er Norges verste terrorangrep — 77 mennesker ble drept av en høyreekstrem terrorist
- Norges respons var «mer demokrati, mer åpenhet og mer humanitet»
- Gjørv-kommisjonen avdekket alvorlige beredskapssvakheter som siden er forbedret
- Radikalisering er en gradvis prosess der utenforskap, ideologi og sosiale medier kan spille inn
- Forebygging handler om inkludering, kritisk tenkning og tidlig innsats
- Det grunnleggende dilemmaet er å balansere sikkerhet med de frihetene som gjør demokratiet verdt å forsvare`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-22-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-22-ex-5',
        number: '22.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «For å beskytte demokratiet mot terrorisme må vi noen ganger begrense demokratiske rettigheter.» Drøft denne påstanden.',
        subTasks: [
          {
            label: 'a',
            task: 'Presenter argumenter for at det kan være nødvendig å begrense noen rettigheter for å bekjempe terrorisme.',
            solution: 'Argumenter for: Overvåking kan avdekke terrorplaner og redde liv. Strengere grensekontroll kan hindre terrorister i å komme inn i landet. Begrensninger i ytringsfriheten kan stoppe spredning av hat og rekruttering. Myndighetene trenger verktøy for å beskytte befolkningen. Sikkerhet er en forutsetning for at andre rettigheter kan utøves.',
          },
          {
            label: 'b',
            task: 'Presenter argumenter mot — for at slike begrensninger truer demokratiet.',
            solution: 'Argumenter mot: Masseovervåking krenker privatlivet og kan misbrukes. Innskrenking av ytringsfriheten kan brukes til å kneble legitim kritikk. Hvis vi ofrer frihetene våre, har terroristene oppnådd målet sitt. Historien viser at nødtiltak ofte blir permanente. Rettssikkerhet må gjelde også for terrormistenkte. Et demokrati som ikke respekterer egne verdier, er ikke verdt å forsvare.',
          },
          {
            label: 'c',
            task: 'Gi din egen vurdering: Hvor går grensen mellom nødvendig sikkerhet og uakseptable inngrep i friheten?',
            solution: 'En god vurdering anerkjenner at dilemmaet er genuint og at det ikke finnes enkle svar. Mulige kriterier: Tiltak må være proporsjonale (stå i forhold til trusselen), midlertidige, under demokratisk kontroll, og med mulighet for rettslig prøving. Det viktigste er at sikkerhetstiltak ikke undergraver de verdiene de skal beskytte.',
          },
        ],
        hints: [
          'Tenk på Benjamin Franklins sitat: «De som gir opp frihet for å oppnå sikkerhet, fortjener verken frihet eller sikkerhet.»',
          'Er dette alltid sant, eller finnes det nyanser?',
        ],
        solution: 'Balansen mellom sikkerhet og frihet er et av demokratiets mest grunnleggende dilemmaer. Tiltak må være proporsjonale, midlertidige og under demokratisk kontroll for å unngå at kampen mot terror selv truer demokratiet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-22-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-22-ex-6',
        number: '22.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Historien du har lært gjennom disse kapitlene dekker over hundre år med konflikter og forandring. Velg én hendelse eller utvikling fra perioden 1914–i dag som du mener er spesielt viktig å huske.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kort hendelsen og konteksten den skjedde i.',
            solution: 'Eleven velger en hendelse og beskriver den med faglig presisjon — hva skjedde, når, hvor, og hva var konteksten.',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor denne hendelsen er viktig å huske — hva kan vi lære av den?',
            solution: 'Eleven forklarer hendelsens betydning og trekker ut relevante lærdommer som er relevante for vår egen tid. En god forklaring kobler historie til nåtid og viser evne til å tenke kritisk om fortidens relevans.',
          },
          {
            label: 'c',
            task: 'Drøft: Hvordan kan kunnskap om fortiden hjelpe oss å ta bedre beslutninger i fremtiden?',
            solution: 'Drøftingen viser forståelse for at historisk kunnskap gir perspektiv, hjelper oss å gjenkjenne faresignaler (ekstremisme, undertrykkelse, dehumanisering), og gir grunnlag for å forsvare demokrati og menneskerettigheter. «Den som ikke kjenner historien, er dømt til å gjenta den.»',
          },
        ],
        hints: ['Velg en hendelse du virkelig bryr deg om og kan forklare godt.'],
        solution: 'Denne oppgaven sammenfatter hele temaet om moderne historie. Den beste besvarelsen viser dybdeforståelse, evne til å koble fortid og nåtid, og selvstendig refleksjon over historiens betydning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Terrorisme', definition: 'Bruk av vold eller trusler om vold mot sivile for å skape frykt og oppnå politiske, religiøse eller ideologiske mål' },
    { term: 'Radikalisering', definition: 'Gradvis prosess der en person utvikler ekstreme holdninger og kan bli villig til å bruke vold' },
    { term: '22. juli 2011', definition: 'Norges verste terrorangrep — 77 mennesker ble drept av en høyreekstrem terrorist i Oslo og på Utøya' },
    { term: '11. september 2001', definition: 'Terrorangrepet mot USA der nesten 3 000 mennesker ble drept — utløste «krigen mot terror»' },
    { term: 'Krigen mot terror', definition: 'USAs militære og politiske kampanje etter 11. september, inkludert krigene i Afghanistan og Irak' },
    { term: 'Gjørv-kommisjonen', definition: 'Den uavhengige kommisjonen som gransket Norges håndtering av 22. juli-angrepet og avdekket alvorlige beredskapssvakheter' },
    { term: 'Høyreekstremisme', definition: 'Ideologi preget av rasisme, ultranasjonalisme og hat mot bestemte grupper, som kan føre til terrorisme' },
    { term: 'Forebygging', definition: 'Tiltak for å forhindre radikalisering og terrorisme, som inkludering, kritisk tenkning og tidlig innsats' },
    { term: 'Utenforskap', definition: 'Følelse av å stå utenfor samfunnet — en viktig risikofaktor for radikalisering' },
    { term: 'Proporsjonalitet', definition: 'Prinsipp om at sikkerhetstiltak må stå i forhold til trusselen — ikke gå lenger enn nødvendig' },
  ],
};

// ============================================================================
// Eksport av alle kapitler i del 5
// ============================================================================

export const SAMFUNNSFAG_10_DEL5_CHAPTERS = [
  CHAPTER_SAMFUNNSFAG_10_17,
  CHAPTER_SAMFUNNSFAG_10_18,
  CHAPTER_SAMFUNNSFAG_10_19,
  CHAPTER_SAMFUNNSFAG_10_20,
  CHAPTER_SAMFUNNSFAG_10_21,
  CHAPTER_SAMFUNNSFAG_10_22,
];
