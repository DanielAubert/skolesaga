/**
 * Norsk 10. klasse - Narrative versjoner Del 5 (Kapittel 7.1-7.6)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Hovedfil: textbook-content-norsk-10-narrativ.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1 NARRATIV: Fra norrønt til norsk
// ============================================================================

export const CHAPTER_NORSK_10_7_1_NARRATIV: TextbookChapter = {
  id: 'norsk-10-7-1-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '7.1',
  title: 'Fra norrønt til norsk',
  subtitle: 'Narrativ versjon',
  description: 'En reise tilbake til vikingenes språk og videre fremover til det norske du snakker i dag.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjøre rede for noen sentrale forskjeller mellom norrønt og moderne norsk',
    'forklare viktige hendelser i norsk språkhistorie',
  ],
  linkedChapterId: 'norsk-10-7-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-7-1-n-intro',
      type: 'text',
      content: `## Tenk deg at du møter en viking

Forestill deg at en tidsmaskin dukker opp i skolegården din. Du klatrer inn, trykker på en knapp, og plutselig står du på en strand i Norge rundt år 900. Rundt deg hører du folk rope til hverandre mens de drar et langskip opp på land. Du forstår ingenting. Språket de snakker, høres ut som et sært, syngende fremmedspråk.

Men dette er ikke et fremmedspråk. Det er norrønt, forgjengeren til det norske du snakker i dag. Hvert eneste ord du bruker, har røtter som strekker seg tilbake til dette språket. Norrønt var fellesspråket i hele Norden i vikingtiden, fra rundt år 700 til 1350, og det bandt sammen mennesker fra Island til Konstantinopel.

Før det norrøne språket fantes urnordisk, det aller eldste stadiet vi kjenner til, som går tilbake til rundt år 200. Vi kjenner det fra korte runeinnskrifter risset inn i steiner og gjenstander. Runene var vikingenes alfabet. Runerekken, eller futharken som den kalles etter de seks første tegnene, hadde opprinnelig 24 tegn. Senere ble den forenklet til 16 tegn, noe som paradoksalt nok gjorde skriften vanskeligere å lese fordi hvert tegn måtte dekke flere lyder.

Så hva skjedde med dette kraftfulle språket? Hvorfor forstår du ikke norrønt i dag? Det er det vi skal finne ut av nå.`,
    },

    // ========== SEKSJON 1: Lydene som forsvant ==========
    {
      id: 'norsk-10-7-1-n-section1',
      type: 'text',
      content: `## Lydene som forsvant

Språk endrer seg ikke over natten. Det skjer gradvis, nesten umerkelig, generasjon for generasjon. Men over hundrevis av år blir endringene enorme. Norrønt hadde lyder som moderne norsk har mistet helt, og grammatiske strukturer som ville fått dagens tiendeklassinger til å gråte.

Ta for eksempel kasussystemet. I norrønt hadde substantivene fire kasus: nominativ, akkusativ, dativ og genitiv. Det betyr at ett og samme ord kunne ha fire forskjellige former, avhengig av funksjonen det hadde i setningen. Det norrøne ordet for «hest» var hestr i nominativ, hest i akkusativ, hesti i dativ og hests i genitiv. I dag sier vi bare «hest» uansett. Kasussystemet forsvant gradvis fra norsk i løpet av senmiddelalderen, selv om rester av det lever videre i uttrykk som «til fjells» og «til sengs».

Lydendringene var minst like dramatiske. Norrønt hadde diftonger og vokaler som vi ikke lenger bruker. En viktig endring er monoftongering, der to vokallyder smeltet sammen til en. Det norrøne ordet steinn ble til «stein» i noen dialekter, men til «sten» i andre. Denne forskjellen lever faktisk videre i dag og er en av grunnene til at norske dialekter høres så forskjellige ut.

Det skjedde også store endringer i konsonantene. Mange norrøne ord begynte med kombinasjoner som hv-, kn- og gn-, der begge lydene ble uttalt. I dag sier de fleste av oss bare v- i «hval», n- i «kne» og n- i «gnage», selv om stavemåten beholder de gamle bokstavene som stumme vitner om fortiden.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-7-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på norrønt og lydendringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-1-n-quiz1-q0',
            task: 'Hva var futharken?',
            options: [
              { id: 'a', text: 'Et norrønt dikt om gudene', isCorrect: false },
              { id: 'b', text: 'Vikingenes runerekke, oppkalt etter de seks første tegnene', isCorrect: true },
              { id: 'c', text: 'En samling av vikingtidens lover', isCorrect: false },
              { id: 'd', text: 'Et annet ord for det latinske alfabetet', isCorrect: false },
            ],
            solution: 'Futharken er runerekken, navngitt etter de seks første runene: F, U, Th, A, R og K. Den eldre futharken hadde 24 tegn, den yngre 16.',
          },
          {
            id: 'norsk-10-7-1-n-quiz1-q1',
            task: 'Hva betyr monoftongering?',
            options: [
              { id: 'a', text: 'At nye vokaler oppstår i språket', isCorrect: false },
              { id: 'b', text: 'At konsonanter faller bort fra ord', isCorrect: false },
              { id: 'c', text: 'At to vokallyder smelter sammen til en enkelt lyd', isCorrect: true },
              { id: 'd', text: 'At et ord får flere stavelser', isCorrect: false },
            ],
            solution: 'Monoftongering er når en diftong (to vokallyder) blir til en monoftong (en enkelt vokallyd). For eksempel gikk norrønt steinn til «sten» i dialekter med monoftongering.',
          },
          {
            id: 'norsk-10-7-1-n-quiz1-q2',
            task: 'Hvor mange kasus hadde norrønt?',
            options: [
              { id: 'a', text: 'To: nominativ og akkusativ', isCorrect: false },
              { id: 'b', text: 'Tre: nominativ, dativ og genitiv', isCorrect: false },
              { id: 'c', text: 'Fire: nominativ, akkusativ, dativ og genitiv', isCorrect: true },
              { id: 'd', text: 'Seks, akkurat som latin', isCorrect: false },
            ],
            solution: 'Norrønt hadde fire kasus. De ga substantivene ulike endelser basert på funksjonen i setningen. I moderne norsk har kasussystemet nesten helt forsvunnet.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Sporene av norrønt i dag ==========
    {
      id: 'norsk-10-7-1-n-section2',
      type: 'text',
      content: `## Sporene av norrønt rundt deg

Selv om norrønt er «dødt» som talespråk, lever det videre overalt rundt deg. Stedsnavn er kanskje de mest synlige sporene. Hver gang du sier «Oslo», bruker du et norrønt navn som sannsynligvis betyr «åsmunningen» eller «gudesletten». Bergen kommer fra norrønt Bjǫrgvin, som betyr «engen mellom fjellene». Trondheim var Þrándheimr. Tusenvis av norske stedsnavn bærer norrøne elementer som -heim (hjem), -vin (eng/beite), -stad (sted), -nes (halvøy) og -vik (bukt).

Mange hverdagsord er også direkte arv fra norrønt. Ord som «hus», «mann», «barn», «dag», «natt», «vann» og «skog» har røtter som strekker seg ubrutt tilbake til vikingtiden. Faktisk er de mest grunnleggende ordene i norsk de som har endret seg minst. Det er de sjeldne, abstrakte ordene som lettest erstattes av lånord.

Det norrøne språket levde også videre i et bemerkelsesverdig tilfelle: på Island. Fordi Island ble isolert fra resten av Norden etter bosettingen, utviklet islandsk seg svært sakte. Moderne islendinger kan faktisk lese de norrøne sagaene fra 1200-tallet med relativt god forståelse. For oss nordmenn er sagaene derimot nesten uforståelige uten oversettelse.

Og så har vi arven i engelsk. Da vikingene herjet og bosatte seg i England, tok de med seg språket sitt. Engelske ord som «egg», «sky», «window» (vindauga), «knife» (knifr) og «they» (þeir) kommer alle fra norrønt. Så neste gang du snakker engelsk, kan du takke vikingene for en hel del av vokabularet.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-7-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på norrøne spor i moderne språk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-1-n-quiz2-q0',
            task: 'Hvorfor kan islendinger fremdeles lese de norrøne sagaene?',
            options: [
              { id: 'a', text: 'Fordi sagaene er oversatt til moderne islandsk', isCorrect: false },
              { id: 'b', text: 'Fordi Island var isolert og islandsk utviklet seg svært sakte', isCorrect: true },
              { id: 'c', text: 'Fordi islendinger lærer norrønt på skolen', isCorrect: false },
              { id: 'd', text: 'Fordi sagaene ble skrevet på et forenklet norrønt', isCorrect: false },
            ],
            solution: 'Islands isolasjon førte til at islandsk endret seg mye mindre enn norsk, svensk og dansk. Dermed er avstanden mellom moderne islandsk og norrønt mye kortere.',
          },
          {
            id: 'norsk-10-7-1-n-quiz2-q1',
            task: 'Hva betyr det norrøne navneelementet -vin i stedsnavn?',
            options: [
              { id: 'a', text: 'Vind eller vær', isCorrect: false },
              { id: 'b', text: 'Vinne eller erobre', isCorrect: false },
              { id: 'c', text: 'Eng eller beitemark', isCorrect: true },
              { id: 'd', text: 'Vin eller drikke', isCorrect: false },
            ],
            solution: 'Det norrøne -vin betyr eng eller beitemark. Vi finner det i stedsnavn som Bjørgvin (Bergen), Granvin og Sandvin.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Tusen år med forandring

Du har nå reist gjennom tusen år med språkhistorie. Her er det viktigste du bør ta med deg:

**Norrønt** var fellesspråket i Norden fra ca. 700 til 1350. Det ble skrevet med runer (futharken) og senere med det latinske alfabetet.

**Lydendringer** forvandlet språket gradvis. Monoftongering, bortfall av konsonanter og forenkling av kasussystemet gjorde at norrønt ble til middelnorsk og videre til moderne norsk.

**Spor av norrønt** finnes overalt rundt oss: i stedsnavn som Oslo og Bergen, i hverdagsord som «hus» og «barn», og til og med i engelske ord som «window» og «they».

**Island** bevarte norrønt best på grunn av sin isolasjon, mens norsk endret seg kraftig gjennom kontakt med andre språk.

**Nøkkelbegreper:** Norrønt, urnordisk, futharken, runer, kasussystem, monoftongering, lydendring, stedsnavn.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2 NARRATIV: Dansketiden og språkforandring
// ============================================================================

export const CHAPTER_NORSK_10_7_2_NARRATIV: TextbookChapter = {
  id: 'norsk-10-7-2-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '7.2',
  title: 'Dansketiden og språkforandring',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan 400 år under Danmark forandret det norske skriftspråket for alltid.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjøre rede for viktige hendelser i norsk språkhistorie',
    'reflektere over dansk innflytelse på norsk skriftspråk',
  ],
  linkedChapterId: 'norsk-10-7-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-7-2-n-intro',
      type: 'text',
      content: `## Da Norge mistet sitt eget skriftspråk

Tenk deg at du lever i Norge i 1537. Du er kanskje en bonde, en fisker eller en handelsmann. Du snakker norsk med naboene dine. Men all offentlig kommunikasjon, alle lover, alle bøker som trykkes, alle brev fra myndighetene, er skrevet på dansk. Presten i kirken leser fra en dansk Bibel. Lensherren som styrer distriktet ditt, er dansk. Og hvis du en dag skal skrive et offisielt brev, må du skrive det på dansk.

Slik var virkeligheten for nordmenn i over 400 år. Fra 1380 var Norge i union med Danmark, og fra 1537 var unionen så tett at Norge i praksis ble styrt som en dansk provins. Norsk skriftspråk, som hadde blomstret i middelalderen med sagalitteratur og lovtekster, forsvant nesten helt. Dansk tok over som skriftspråk i Norge.

Men talespråket? Det levde videre. Bøndene i dalene, fiskerne langs kysten, alle de vanlige menneskene fortsatte å snakke norsk. Og her ligger kimen til det som senere skulle bli Norges store språkstrid. For hva skjer med et land som snakker ett språk, men skriver et annet? Det er nettopp det vi skal utforske nå.`,
    },

    // ========== SEKSJON 1: Dansk innflytelse ==========
    {
      id: 'norsk-10-7-2-n-section1',
      type: 'text',
      content: `## Hvordan dansk tok over

Det danske herredømmet over norsk skriftspråk skjedde ikke plutselig. Det var en gradvis prosess som begynte allerede før den formelle unionen. Da svartedauden rammet Norge i 1349, døde kanskje så mye som halvparten av befolkningen. Med dem forsvant store deler av den norske skrivekyndige eliten, prester, embetsmenn og munker som hadde holdt den norske skrifttradisjonen i live.

Etter hvert som danske embetsmenn fylte maktposisjonene i Norge, ble dansk det naturlige skriftspråket i administrasjon og kirke. Reformasjonen i 1537 forseglet utviklingen. Bibelen som ble brukt i norske kirker, var oversatt til dansk. Katekismen var dansk. All religiøs litteratur var dansk. Og siden kirken var den viktigste institusjonen for utdanning, betydde dette at alle som lærte å lese og skrive, lærte å lese og skrive dansk.

Samtidig strømmet danske lånord inn i norsk. Ord som «arbeide» (i stedet for det norrøne «vinna»), «betale» (for «gjalda») og «snakke» (for «tala») kom inn i språket. Mange av ordene du bruker daglig uten å tenke over det, er faktisk danske lån som erstattet eldre norske ord for flere hundre år siden. Det betyr ikke at norsk ble identisk med dansk. Det norske talespråket beholdt sine egne lyder, sin egen intonasjon og mange egne ord. Men skriftspråket var dansk, og det skapte en dyp kløft mellom tale og skrift.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-7-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på dansketiden og språkendring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-2-n-quiz1-q0',
            task: 'Hva var en viktig grunn til at norsk skriftspråk forsvant etter svartedauden?',
            options: [
              { id: 'a', text: 'Nordmennene valgte frivillig å skrive dansk', isCorrect: false },
              { id: 'b', text: 'Store deler av den skrivekyndige norske eliten døde', isCorrect: true },
              { id: 'c', text: 'Danmark forbød norsk skriftspråk ved lov', isCorrect: false },
              { id: 'd', text: 'Norrønt var for vanskelig å skrive', isCorrect: false },
            ],
            solution: 'Svartedauden tok livet av opptil halvparten av Norges befolkning, inkludert mange prester, munker og embetsmenn som hadde holdt den norske skrifttradisjonen i gang.',
          },
          {
            id: 'norsk-10-7-2-n-quiz1-q1',
            task: 'Hvorfor ble reformasjonen i 1537 viktig for språkutviklingen i Norge?',
            options: [
              { id: 'a', text: 'Den innførte norsk som kirkespråk', isCorrect: false },
              { id: 'b', text: 'Den forbød all bruk av runer', isCorrect: false },
              { id: 'c', text: 'Bibelen og all religiøs litteratur i Norge ble dansk', isCorrect: true },
              { id: 'd', text: 'Den ga nordmenn rett til å trykke bøker', isCorrect: false },
            ],
            solution: 'Reformasjonen førte til at dansk Bibel og dansk katekisme ble brukt i norske kirker. Siden kirken var sentral for utdanning, lærte alle å lese og skrive dansk.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Dannet dagligtale ==========
    {
      id: 'norsk-10-7-2-n-section2',
      type: 'text',
      content: `## Dannet dagligtale — Da overklassen snakket dansk med norsk aksent

Mot slutten av dansketiden oppstod noe interessant i de norske byene. Den norske overklassen, embetsmenn, prester, kjøpmenn og lærere, begynte å lese dansk tekst høyt med norsk uttale. De tok det danske skriftspråket og ga det norske lyder. Resultatet ble det vi kaller dannet dagligtale, en slags norsk-dansk hybrid som ble talemålet til den urbane overklassen.

Tenk deg at du tar en dansk setning og leser den opp med norsk tonefall, norsk r-lyd og norske diftonger der det passer. Du sier «stein» i stedet for det danske «sten», og du uttaler «jeg» som «jei» i stedet for det danske «ja». Det er dannet dagligtale i praksis, og dette talemålet ble til slutt grunnlaget for det som i dag er bokmål.

Denne fornorskingsprosessen skjedde gradvis og ubevisst. Ingen bestemte at det skulle være slik. Det bare skjedde fordi mennesker naturlig tilpasser et fremmedspråk til sin egen uttale. Etter unionsoppløsningen i 1814 ble det et sentralt spørsmål: Skulle Norge beholde dette fornorskede dansken som skriftspråk, eller skulle landet få et helt nytt skriftspråk basert på de norske dialektene? Svaret ble at Norge fikk begge deler, men den historien hører til neste kapittel.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-7-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på dannet dagligtale og fornorsking:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-2-n-quiz2-q0',
            task: 'Hva var dannet dagligtale?',
            options: [
              { id: 'a', text: 'Et rent norsk talespråk fra middelalderen', isCorrect: false },
              { id: 'b', text: 'Dansk skriftspråk lest opp med norsk uttale av overklassen', isCorrect: true },
              { id: 'c', text: 'Et kunstig språk skapt av språkforskere', isCorrect: false },
              { id: 'd', text: 'En dialekt fra Trøndelag', isCorrect: false },
            ],
            solution: 'Dannet dagligtale oppstod da den norske overklassen leste dansk tekst med norsk uttale. Det ble en hybrid som senere ble grunnlaget for bokmål.',
          },
          {
            id: 'norsk-10-7-2-n-quiz2-q1',
            task: 'Hvilken av disse er et eksempel på et dansk lånord som erstattet et eldre norsk ord?',
            options: [
              { id: 'a', text: '«Fjord» erstattet «bukt»', isCorrect: false },
              { id: 'b', text: '«Arbeide» erstattet det norrøne «vinna»', isCorrect: true },
              { id: 'c', text: '«Hus» erstattet «bolig»', isCorrect: false },
              { id: 'd', text: '«Skog» erstattet «wald»', isCorrect: false },
            ],
            solution: 'Det danske «arbeide» erstattet det norrøne «vinna» i dagligtalen. Mange slike lånord kom inn i norsk i løpet av de 400 årene under dansk styre.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-2-n-summary',
      type: 'text',
      content: `## Oppsummering: 400 år som forandret alt

Her er hovedpoengene fra dette kapittelet:

**Dansketiden** (1380-1814) førte til at norsk skriftspråk forsvant og ble erstattet av dansk. Svartedauden, unionen og reformasjonen var avgjørende hendelser.

**Lånord** fra dansk strømmet inn i norsk talespråk. Mange dagligdagse ord vi bruker i dag, er opprinnelig danske.

**Dannet dagligtale** oppstod da den norske overklassen leste dansk med norsk uttale. Denne hybriden ble grunnlaget for det vi i dag kjenner som bokmål.

**Fornorsking** var en gradvis prosess der det danske skriftspråket ble tilpasset norsk uttale og ordforråd.

**Det norske talespråket** overlevde dansketiden i dialektene, og det var dette som senere muliggjorde skapingen av nynorsk.

**Nøkkelbegreper:** Dansketiden, svartedauden, reformasjonen, lånord, dannet dagligtale, fornorsking.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3 NARRATIV: Språkstriden — Bokmål og nynorsk
// ============================================================================

export const CHAPTER_NORSK_10_7_3_NARRATIV: TextbookChapter = {
  id: 'norsk-10-7-3-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '7.3',
  title: 'Språkstriden — Bokmål og nynorsk',
  subtitle: 'Narrativ versjon',
  description: 'Den dramatiske kampen om hva som skulle være Norges språk etter frigjøringen fra Danmark.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for framveksten av bokmål og nynorsk og forholdet mellom dem',
    'reflektere over bakgrunnen for to norske skriftspråk',
  ],
  linkedChapterId: 'norsk-10-7-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-7-3-n-intro',
      type: 'text',
      content: `## To menn, to drømmer, to skriftspråk

Det er 1814. Norge har nettopp fått sin egen grunnlov og løsrevet seg fra Danmark, bare for å havne i union med Sverige. Men noe gnager. Landet har egen grunnlov, eget storting, egen identitet, men ikke et eget skriftspråk. Offisielt skriver nordmenn fremdeles dansk. Og for et folk som nettopp har smakt friheten, føles det som å gå i andres klær.

To menn skal komme til å prege denne kampen mer enn noen andre. De hadde begge det samme målet, å gi Norge et eget skriftspråk, men de hadde helt forskjellige ideer om hvordan det skulle gjøres. Resultatet ble at Norge fikk ikke ett, men to skriftspråk. Det er ganske unikt i verden, og det er en direkte konsekvens av at disse to mennene var så kraftfullt uenige.

Den ene het Knud Knudsen. Den andre het Ivar Aasen. Og historien om kampen mellom deres visjoner er en av de mest fascinerende kapitlene i norsk kulturhistorie.`,
    },

    // ========== SEKSJON 1: Knudsen og Aasen ==========
    {
      id: 'norsk-10-7-3-n-section1',
      type: 'text',
      content: `## Knudsen mot Aasen — To veier til norsk

Knud Knudsen var lærer og språkmann fra Tvedestrand. Han mente at løsningen var praktisk og gradvis. Siden nordmenn allerede snakket en fornorsket versjon av dansk, den dannede dagligtalen, hvorfor ikke bare fortsette å fornorske det danske skriftspråket steg for steg? Bytt ut danske ord med norske, tilpass stavemåten til norsk uttale, og etter hvert vil det danske bli norsk. Knudsens tilnærming var evolusjon, ikke revolusjon.

Ivar Aasen var en selvlært lingvist fra Sunnmøre. Han hadde en helt annen visjon. Aasen reiste Norge rundt i årevis og samlet dialekter. Han besøkte fjordbygder og fjellgårder, lyttet, noterte og analyserte. Drømmen hans var å bygge et nytt norsk skriftspråk fra grunnen av, basert på de norske folkemålene som hadde overlevd dansketiden. Han ville ikke lappe på noe dansk. Han ville skape noe genuint norsk.

Aasen ga ut sin Norsk Grammatik i 1848 og Norsk Ordbog i 1850. Med disse verkene viste han at de norske dialektene ikke var uregelmessig babling, men et sammenhengende språksystem med egen grammatikk og egne regler. Det han skapte, kalte han landsmål, som senere ble til nynorsk.

Knudsens prosjekt utviklet seg til det som ble kalt riksmål, og senere bokmål. Det var i praksis et gradvis fornorsket dansk, tilpasset den uttalen som ble brukt av den utdannede overklassen i byene.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-7-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på Knudsen, Aasen og språkstriden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-3-n-quiz1-q0',
            task: 'Hva var Ivar Aasens strategi for å skape et norsk skriftspråk?',
            options: [
              { id: 'a', text: 'Å gradvis fornorske det danske skriftspråket', isCorrect: false },
              { id: 'b', text: 'Å bygge et nytt skriftspråk basert på norske dialekter', isCorrect: true },
              { id: 'c', text: 'Å innføre islandsk som norsk skriftspråk', isCorrect: false },
              { id: 'd', text: 'Å beholde dansk skriftspråk uendret', isCorrect: false },
            ],
            solution: 'Aasen reiste rundt i Norge og samlet dialekter. Han bygde et helt nytt skriftspråk fra grunnen av, basert på de norske folkemålene. Dette ble landsmål, senere nynorsk.',
          },
          {
            id: 'norsk-10-7-3-n-quiz1-q1',
            task: 'Hva het de to språkformene opprinnelig?',
            options: [
              { id: 'a', text: 'Bokmål og nynorsk', isCorrect: false },
              { id: 'b', text: 'Norsk og dansk', isCorrect: false },
              { id: 'c', text: 'Riksmål og landsmål', isCorrect: true },
              { id: 'd', text: 'Bymål og bygdemål', isCorrect: false },
            ],
            solution: 'Knudsens fornorskede dansk ble kalt riksmål (senere bokmål), mens Aasens dialektbaserte skriftspråk ble kalt landsmål (senere nynorsk).',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Samnorsk og reformer ==========
    {
      id: 'norsk-10-7-3-n-section2',
      type: 'text',
      content: `## Samnorsktanken og de store rettskrivingsreformene

Gjennom 1900-tallet kom det en rekke rettskrivingsreformer som forsøkte å bringe bokmål og nynorsk nærmere hverandre. Tanken var at de to skriftspråkene gradvis skulle smelte sammen til ett felles norsk, et samnorsk. Det hørtes logisk ut i teorien, men i praksis ble det voldsomt upopulært.

Rettskrivingsreformen i 1917 var den første store endringen. Den innførte folkelige former i begge målformene. I 1938 kom en enda mer radikal reform som tvang gjennom mange endringer. Plutselig måtte bokmålsbrukere skrive «bru» i stedet for «bro», «mjølk» i stedet for «melk», og «sola» i stedet for «solen». Folk ble rasende. Foreldre protesterte, aksjonerte og rettet i barnas skolebøker.

Motstanden mot samnorskpolitikken var så sterk at prosjektet til slutt ble offisielt oppgitt i 2002. I dag har vi to likestilte skriftspråk, bokmål og nynorsk, med bred valgfrihet innenfor begge. Du kan for eksempel skrive både «boka» og «boken» på bokmål. Denne valgfriheten er et kompromiss, et resultat av over hundre år med språkpolitisk kamp.

Spørsmålet om to skriftspråk er fremdeles levende i norsk debatt. Noen mener det er en rikdom, en unik kulturarv som viser respekt for mangfoldet i norsk språk. Andre mener det er upraktisk og at det skaper unødvendige problemer i skolen. Uansett hva du mener, er det viktig å forstå historien bak. Språkstriden handler nemlig ikke bare om ord og grammatikk. Den handler om identitet, makt og hvem som får bestemme hva som er «riktig» norsk.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-7-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på samnorsk og rettskrivingsreformer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-3-n-quiz2-q0',
            task: 'Hva var samnorskprosjektet?',
            options: [
              { id: 'a', text: 'Et forsøk på å innføre engelsk som Norges skriftspråk', isCorrect: false },
              { id: 'b', text: 'Et forsøk på å smelte bokmål og nynorsk sammen til ett felles skriftspråk', isCorrect: true },
              { id: 'c', text: 'Et forsøk på å gjeninnføre norrønt', isCorrect: false },
              { id: 'd', text: 'Et forsøk på å fjerne alle lånord fra norsk', isCorrect: false },
            ],
            solution: 'Samnorskprosjektet forsøkte gjennom rettskrivingsreformer å bringe bokmål og nynorsk nærmere hverandre, med mål om ett felles norsk skriftspråk. Prosjektet ble oppgitt i 2002.',
          },
          {
            id: 'norsk-10-7-3-n-quiz2-q1',
            task: 'Hvorfor ble rettskrivingsreformen i 1938 så kontroversiell?',
            options: [
              { id: 'a', text: 'Den fjernet nynorsk som offisielt skriftspråk', isCorrect: false },
              { id: 'b', text: 'Den innførte radikale endringer i bokmål som folk motsatte seg', isCorrect: true },
              { id: 'c', text: 'Den krevde at alle måtte skrive nynorsk', isCorrect: false },
              { id: 'd', text: 'Den fjernet alle danske lånord fra norsk', isCorrect: false },
            ],
            solution: 'Reformen tvang gjennom folkelige former i bokmål, som «bru» for «bro» og «mjølk» for «melk». Folk opplevde det som et angrep på sitt eget språk og protesterte kraftig.',
          },
          {
            id: 'norsk-10-7-3-n-quiz2-q2',
            task: 'Når ble samnorskprosjektet offisielt oppgitt?',
            options: [
              { id: 'a', text: '1938', isCorrect: false },
              { id: 'b', text: '1972', isCorrect: false },
              { id: 'c', text: '2002', isCorrect: true },
              { id: 'd', text: '2015', isCorrect: false },
            ],
            solution: 'Samnorskprosjektet ble offisielt oppgitt i 2002 etter mange tiår med motstand. I dag har vi to likestilte skriftspråk med bred valgfrihet innenfor begge.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Språkstriden i kortversjon

**Knud Knudsen** ville fornorske det danske skriftspråket gradvis. Hans prosjekt ble til riksmål, senere bokmål.

**Ivar Aasen** samlet norske dialekter og bygde et nytt skriftspråk fra grunnen av. Hans prosjekt ble til landsmål, senere nynorsk.

**Rettskrivingsreformer** gjennom 1900-tallet forsøkte å bringe de to målformene nærmere hverandre gjennom samnorskpolitikken, men møtte sterk motstand.

**Samnorskprosjektet** ble oppgitt i 2002. I dag har Norge to likestilte skriftspråk med bred valgfrihet.

**Språkstriden** handler om mer enn grammatikk. Den handler om identitet, makt og hvem som definerer «norsk».

**Nøkkelbegreper:** Knud Knudsen, Ivar Aasen, riksmål, landsmål, bokmål, nynorsk, samnorsk, rettskrivingsreformer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4 NARRATIV: Dialekter og sosiolekter
// ============================================================================

export const CHAPTER_NORSK_10_7_4_NARRATIV: TextbookChapter = {
  id: 'norsk-10-7-4-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '7.4',
  title: 'Dialekter og sosiolekter',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk det enorme mangfoldet i norsk talemål og hvordan hvor du bor og hvem du er, former språket ditt.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og reflektere over variasjoner i norsk talemål',
    'reflektere over holdninger til ulike talemål og språklig mangfold',
  ],
  linkedChapterId: 'norsk-10-7-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-7-4-n-intro',
      type: 'text',
      content: `## Hvorfor snakker vi så forskjellig?

Norge er et lite land med store avstander. Fjorder, fjell og daler har i hundrevis av år skilt bygder og byer fra hverandre. Resultatet er et av de mest dialektrike landene i Europa. En person fra Bergen snakker helt annerledes enn en fra Tromsø, som igjen snakker annerledes enn en fra Kristiansand. Og det er ikke bare uttalen som er forskjellig. Ordforråd, grammatikk og setningsstruktur kan variere enormt.

Men dialekter er bare halve historien. Du har kanskje lagt merke til at folk i samme by også kan snakke forskjellig. En ungdom snakker annerledes enn en pensjonist. En advokat snakker annerledes enn en rørlegger. Dette handler ikke om geografi, men om sosiale faktorer. Slike variasjoner kalles sosiolekter, og de forteller like mye om hvem du er som dialekten forteller om hvor du kommer fra.

I dette kapittelet skal vi dykke ned i det fascinerende mangfoldet i norsk talemål. Hvorfor har vi så mange dialekter? Hvorfor endrer noen dialektene sine mens andre holder fast på dem? Og hva sier måten du snakker på, egentlig om deg?`,
    },

    // ========== SEKSJON 1: Dialektvariasjoner ==========
    {
      id: 'norsk-10-7-4-n-section1',
      type: 'text',
      content: `## Dialektlandskapet i Norge

De norske dialektene deles tradisjonelt inn i fire hovedgrupper: østnorsk, vestnorsk, trøndersk og nordnorsk. Disse gruppene skiller seg fra hverandre på flere måter. En av de mest påfallende forskjellene er tonefall, det musikalske mønsteret i språket. Østnorsk og trøndersk har to tonelag, som gir ordene en karakteristisk «syngende» kvalitet. Vestnorske dialekter har også tonelag, men med andre melodikurver. Nordnorsk varierer mye, men har ofte et distinkt tonefall som er lett gjenkjennelig.

Andre viktige dialektforskjeller handler om lydsystemet. I noen dialekter har du tjukk l, en lyd som ikke finnes i standardspråket i mange andre land. I noen områder sier folk «e» i stedet for «jeg», «me» i stedet for «vi», og «koss» i stedet for «hvordan». Et og samme objekt kan ha helt forskjellige navn: det som heter «potet» på Østlandet, kan hete «jordeple» i Hordaland og «pottet» i Trøndelag.

Grammatikken varierer også. I mange vestlandsdialekter bruker man dativ i visse sammenhenger, en rest av det norrøne kasussystemet. I trøndersk bruker man ofte «e» som personlig pronomen i stedet for «jeg». I nordnorsk finner man spesielle setningsstrukturer og bøyningsformer som er unike for regionen.

Norge er ganske spesielt i verdenssammenheng fordi det ikke finnes et offisielt muntlig standardspråk. Mens dansker og svensker har klare standarduttaler, har nordmenn i prinsippet lov til å snakke sin egen dialekt i alle sammenhenger, inkludert i Stortinget og på TV. Denne tradisjonen for dialekttoleranse er unik og verdifull.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-7-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på norske dialekter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-4-n-quiz1-q0',
            task: 'Hva er de fire hovedgruppene av norske dialekter?',
            options: [
              { id: 'a', text: 'Bokmål, nynorsk, samisk og kvensk', isCorrect: false },
              { id: 'b', text: 'Østnorsk, vestnorsk, trøndersk og nordnorsk', isCorrect: true },
              { id: 'c', text: 'Bydialekter, bygdedialekter, kystdialekter og fjelldalekter', isCorrect: false },
              { id: 'd', text: 'Gammelnosk, mellomnosk, nynosk og moderne norsk', isCorrect: false },
            ],
            solution: 'De norske dialektene deles tradisjonelt i fire hovedgrupper etter geografi: østnorsk, vestnorsk, trøndersk og nordnorsk.',
          },
          {
            id: 'norsk-10-7-4-n-quiz1-q1',
            task: 'Hva er spesielt med Norges forhold til dialekter sammenlignet med nabolandene?',
            options: [
              { id: 'a', text: 'Norge har færre dialekter enn Sverige og Danmark', isCorrect: false },
              { id: 'b', text: 'I Norge er dialektbruk forbudt i offentlige sammenhenger', isCorrect: false },
              { id: 'c', text: 'Norge har ikke et offisielt muntlig standardspråk, og dialektbruk er akseptert overalt', isCorrect: true },
              { id: 'd', text: 'Alle norske dialekter høres helt like ut', isCorrect: false },
            ],
            solution: 'Norge er unikt ved at det ikke finnes en offisiell standarduttale. Nordmenn kan bruke sin dialekt i alle sammenhenger, inkludert i Stortinget og på TV.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Sosiolekter og språkholdninger ==========
    {
      id: 'norsk-10-7-4-n-section2',
      type: 'text',
      content: `## Sosiolekter — Når klasse og identitet former språket

En sosiolekt er et talemål som knyttes til en bestemt sosial gruppe. Det kan handle om utdanning, yrke, alder, kjønn eller sosioøkonomisk bakgrunn. Tenk på forskjellen mellom «vestkantspråk» og «østkantspråk» i Oslo. Historisk har folk på vestkanten brukt former som lå nærmere riksmål, som «boken», «gaten» og «dansen», mens folk på østkanten har brukt folkelige former som «boka», «gata» og «dansen». Disse forskjellene handlet ikke bare om preferanse, de signaliserte sosial tilhørighet.

I dag er de klassiske sosiolektskillene i Oslo mindre tydelige enn før, men sosiolekter finnes fortsatt overalt. Ungdom utvikler sine egne måter å snakke på, med slang, engelsk påvirkning og spesielle uttrykk. Ulike yrkesgrupper har sine fagsjargonger. Og mange mennesker koder om, det vil si at de tilpasser språket sitt etter situasjonen. Du snakker kanskje annerledes med vennene dine enn med bestemoren din, og annerledes med læreren enn i gjengen.

Språkholdninger er et viktig tema i denne sammenhengen. Forskning viser at folk ofte knytter bestemte egenskaper til ulike talemål. Bergensk kan oppfattes som morsomt, trøndersk som koselig, oslosk som stressa, og nordnorsk som ærlig. Disse assosiasjonene er selvsagt ikke basert på noe reelt, de er fordommer. Men de kan ha reelle konsekvenser. Studier har vist at folk med visse dialekter kan bli oppfattet som mindre kompetente i jobbsituasjoner, selv om de er like kvalifiserte som andre.

Å reflektere over egne og andres språkholdninger er viktig. Alle dialekter og sosiolekter er likeverdige som kommunikasjonsverktøy. Ingen talemål er «finere» eller «riktigere» enn andre. Når vi verdsetter språklig mangfold, verdsetter vi også menneskene som bærer det.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-7-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på sosiolekter og språkholdninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-4-n-quiz2-q0',
            task: 'Hva er en sosiolekt?',
            options: [
              { id: 'a', text: 'Et talemål knyttet til et bestemt geografisk område', isCorrect: false },
              { id: 'b', text: 'Et talemål knyttet til en bestemt sosial gruppe', isCorrect: true },
              { id: 'c', text: 'Et skriftspråk som bare brukes av en elite', isCorrect: false },
              { id: 'd', text: 'Et språk som snakkes i andre land', isCorrect: false },
            ],
            solution: 'En sosiolekt er et talemål knyttet til sosiale faktorer som utdanning, yrke, alder eller sosioøkonomisk bakgrunn, i motsetning til en dialekt som er geografisk bestemt.',
          },
          {
            id: 'norsk-10-7-4-n-quiz2-q1',
            task: 'Hva betyr det å «kode om»?',
            options: [
              { id: 'a', text: 'Å lære seg et nytt språk', isCorrect: false },
              { id: 'b', text: 'Å tilpasse talemålet sitt etter situasjonen man er i', isCorrect: true },
              { id: 'c', text: 'Å glemme sin opprinnelige dialekt', isCorrect: false },
              { id: 'd', text: 'Å oversette fra nynorsk til bokmål', isCorrect: false },
            ],
            solution: 'Kodeombygging betyr at du tilpasser språket ditt etter situasjonen. Du snakker kanskje annerledes med vennene dine enn med læreren. Det er en naturlig del av kommunikasjon.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Mangfold i tale

**Dialekter** er geografisk bestemte talemål. Norge har fire hovedgrupper: østnorsk, vestnorsk, trøndersk og nordnorsk, med store variasjoner innenfor hver gruppe.

**Sosiolekter** er talemål knyttet til sosiale faktorer som klasse, alder, yrke og utdanning.

**Kodeombygging** betyr at vi tilpasser talemålet vårt etter situasjonen.

**Språkholdninger** er de vurderingene vi knytter til ulike talemål. Disse holdningene er ofte fordommer, ikke fakta.

**Norge er unikt** fordi vi ikke har et offisielt muntlig standardspråk. Alle dialekter er i prinsippet likeverdige.

**Nøkkelbegreper:** Dialekt, sosiolekt, tonelag, kodeombygging, språkholdninger, talemålsvariasjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.5 NARRATIV: Nabospråksforståelse
// ============================================================================

export const CHAPTER_NORSK_10_7_5_NARRATIV: TextbookChapter = {
  id: 'norsk-10-7-5-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '7.5',
  title: 'Nabospråksforståelse',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk det skandinaviske språkfellesskapet og de nasjonale minoritetsspråkene som beriker Norge.',
  estimatedMinutes: 40,
  competenceGoals: [
    'sammenligne norsk med nabospråk og reflektere over språklig mangfold',
    'gjøre rede for de nasjonale minoritetsspråkene i Norge',
  ],
  linkedChapterId: 'norsk-10-7-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-7-5-n-intro',
      type: 'text',
      content: `## Forstår du en svenske?

Neste gang du ser en svensk film eller hører en dansk nyhetssending, prøv et eksperiment: Hvor mye forstår du egentlig? De fleste nordmenn forstår ganske mye svensk, spesielt hvis svensken snakker tydelig. Dansk er vanskeligere for mange, selv om dansk skriftspråk er nesten identisk med bokmål. Og islandsk? Det høres ut som noe helt fremmed, selv om det er det språket som ligner mest på det norrøne vi en gang delte.

Det skandinaviske språkfellesskapet er noe helt spesielt i verden. Norsk, svensk og dansk er så nært beslektede at vi i prinsippet kan kommunisere med hverandre uten tolk. Alle tre er nordgermanske språk som nedstammer fra norrønt. De deler grunnleggende grammatikk, ordforråd og setningsstruktur. Forskjellene ligger hovedsakelig i uttale og i noen ordvalg.

Men språkfellesskapet er under press. Forskning viser at unge skandinaver forstår hverandre dårligere enn eldre generasjoner gjorde. En av grunnene er at engelsk har blitt et felles alternativ. Når en nordmann og en svenske møtes, er det stadig vanligere at de bytter til engelsk i stedet for å prøve å forstå hverandres språk. Det er praktisk, men noe går tapt.

Og Norge er mer enn bare norsk. I dette kapittelet skal vi også utforske de nasjonale minoritetsspråkene som beriker det norske språklandskapet.`,
    },

    // ========== SEKSJON 1: Skandinavisk språkforståelse ==========
    {
      id: 'norsk-10-7-5-n-section1',
      type: 'text',
      content: `## Norsk, svensk og dansk — Søsken som har vokst fra hverandre

De skandinaviske språkene er som søsken som vokste opp i samme hus, men flyttet fra hverandre som voksne. Norsk, svensk og dansk nedstammer alle fra norrønt, og de begynte å skille lag i middelalderen. I dag er forskjellene store nok til at vi kaller dem separate språk, men små nok til at vi fortsatt kan forstå hverandre.

Den største utfordringen i skandinavisk kommunikasjon er uttale, ikke ordforråd eller grammatikk. Dansk uttale er beryktet vanskelig for nordmenn og svensker. Mange konsonanter «svelges», og vokalene kan virke uklare. Svensk har en annen utfordring: melodien og rytmen i språket er markant annerledes enn norsk, og noen svenske ord betyr noe helt annet enn de norske ordene de ligner på. «Rolig» betyr «morsomt» på svensk, «frokost» betyr «lunsj» på dansk, og «semester» betyr «ferie» på svensk. Slike falske venner kan skape morsomme misforståelser.

Nordmenn har tradisjonelt hatt en fordel i skandinavisk kommunikasjon. Fordi norsk ligger midt mellom dansk og svensk, og fordi vi har to skriftspråk som gjør oss vant til variasjon, skårer nordmenn generelt best på tester i nabospråksforståelse. Men denne fordelen er i ferd med å skrumpe inn, spesielt blant unge.

Det nordiske språksamarbeidet jobber aktivt for å bevare og styrke nabospråksforståelsen. Tiltak inkluderer utvekslingsprogrammer, felles nordiske medier og undervisning i nabospråk i skolen.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-7-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på skandinavisk språkforståelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-5-n-quiz1-q0',
            task: 'Hvorfor skårer nordmenn generelt best på tester i skandinavisk nabospråksforståelse?',
            options: [
              { id: 'a', text: 'Fordi norsk er det eldste skandinaviske språket', isCorrect: false },
              { id: 'b', text: 'Fordi norsk ligger midt mellom dansk og svensk, og nordmenn er vant til språklig variasjon', isCorrect: true },
              { id: 'c', text: 'Fordi norske skoler har obligatorisk svensk og dansk', isCorrect: false },
              { id: 'd', text: 'Fordi nordmenn ser mest skandinavisk TV', isCorrect: false },
            ],
            solution: 'Norsk ligger geografisk og språklig mellom dansk og svensk. I tillegg gjør Norges to skriftspråk at nordmenn er vant til å håndtere språklig variasjon.',
          },
          {
            id: 'norsk-10-7-5-n-quiz1-q1',
            task: 'Hva er en «falsk venn» i språklig sammenheng?',
            options: [
              { id: 'a', text: 'En person som later som om de forstår et fremmedspråk', isCorrect: false },
              { id: 'b', text: 'Et ord som ser likt ut i to språk, men betyr noe helt annet', isCorrect: true },
              { id: 'c', text: 'Et lånord som er feil oversatt', isCorrect: false },
              { id: 'd', text: 'Et utdatert ord som ikke lenger brukes', isCorrect: false },
            ],
            solution: 'Falske venner er ord som ser like ut på tvers av språk, men har ulik betydning. For eksempel betyr «rolig» morsomt på svensk, mens det på norsk betyr stille og fredelig.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Samisk, kvensk og minoritetsspråk ==========
    {
      id: 'norsk-10-7-5-n-section2',
      type: 'text',
      content: `## Samisk, kvensk og Norges språklige mangfold

Norge er ikke bare et land med to skriftspråk. Det er også hjemmet til flere nasjonale minoritetsspråk som har dype røtter i norsk historie. De viktigste av disse er samisk og kvensk.

Samisk er ikke ett språk, men en gruppe språk som snakkes av det samiske folket i Norge, Sverige, Finland og Russland. I Norge er det tre samiske språk i aktiv bruk: nordsamisk, lulesamisk og sørsamisk. Nordsamisk er det største med rundt 25 000 talere totalt i Skandinavia. Samisk tilhører den finsk-ugriske språkfamilien og er altså ikke i slekt med norsk i det hele tatt. Det har en helt annen grammatikk, et annet lydsystem og et annet ordforråd.

Samisk har offisiell status i Norge og er likestilt med norsk i de samiske forvaltningsområdene. Men veien dit har vært lang og smertefull. I fornorskningsperioden, fra midten av 1800-tallet til langt ut på 1900-tallet, forsøkte norske myndigheter systematisk å utrydde samisk språk og kultur. Samiske barn ble sendt på internatskoler der de ble straffet for å snakke sitt eget språk. Konsekvensene av denne politikken merkes fremdeles.

Kvensk er språket til kvenene, etterkommere av finske innvandrere som slo seg ned i Nord-Norge for flere hundre år siden. Kvensk fikk status som eget språk i Norge i 2005 og er anerkjent som et nasjonalt minoritetsspråk. Det er i dag et truet språk med bare noen hundre aktive talere.

I tillegg har Norge andre nasjonale minoritetsspråk som romani og romanes. Og med innvandring de siste tiårene har det norske språklandskapet blitt enda mer mangfoldig. I Oslo alene snakkes det over 150 ulike språk. Denne flerspråkligheten er en ressurs, ikke en trussel, selv om den også byr på utfordringer for skole og samfunn.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-7-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på minoritetsspråk i Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-5-n-quiz2-q0',
            task: 'Hvilken språkfamilie tilhører samisk?',
            options: [
              { id: 'a', text: 'Den germanske språkfamilien', isCorrect: false },
              { id: 'b', text: 'Den romanske språkfamilien', isCorrect: false },
              { id: 'c', text: 'Den finsk-ugriske språkfamilien', isCorrect: true },
              { id: 'd', text: 'Den slaviske språkfamilien', isCorrect: false },
            ],
            solution: 'Samisk tilhører den finsk-ugriske språkfamilien og er i slekt med finsk og estisk, men ikke med norsk. Det er et helt annet språk med egen grammatikk og eget ordforråd.',
          },
          {
            id: 'norsk-10-7-5-n-quiz2-q1',
            task: 'Hva var fornorskningspolitikken?',
            options: [
              { id: 'a', text: 'Et program for å lære innvandrere norsk', isCorrect: false },
              { id: 'b', text: 'Myndighetenes systematiske forsøk på å utrydde samisk språk og kultur', isCorrect: true },
              { id: 'c', text: 'Et prosjekt for å fjerne danske lånord fra norsk', isCorrect: false },
              { id: 'd', text: 'En reform for å innføre nynorsk i skolene', isCorrect: false },
            ],
            solution: 'Fornorskningspolitikken var myndighetenes systematiske forsøk på å erstatte samisk og kvensk med norsk. Samiske barn ble straffet for å snakke sitt eget språk på internatskolene.',
          },
          {
            id: 'norsk-10-7-5-n-quiz2-q2',
            task: 'Når fikk kvensk status som eget språk i Norge?',
            options: [
              { id: 'a', text: '1905', isCorrect: false },
              { id: 'b', text: '1972', isCorrect: false },
              { id: 'c', text: '2005', isCorrect: true },
              { id: 'd', text: '2015', isCorrect: false },
            ],
            solution: 'Kvensk ble anerkjent som eget språk i Norge i 2005. Før det ble det regnet som en finsk dialekt.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Et rikt språklandskap

**Skandinavisk språkforståelse** er mulig fordi norsk, svensk og dansk nedstammer fra norrønt. Norsk ligger midt mellom de to andre, men forståelsen er under press blant unge.

**Falske venner** er ord som ser like ut, men betyr ulikt på tvers av de skandinaviske språkene.

**Samisk** (nordsamisk, lulesamisk, sørsamisk) er Norges viktigste minoritetsspråk, tilhørende den finsk-ugriske språkfamilien. Samisk har offisiell status i de samiske forvaltningsområdene.

**Kvensk** er språket til kvenene i Nord-Norge, anerkjent som eget språk i 2005. Det er i dag et truet språk.

**Fornorskningspolitikken** var et mørkt kapittel der myndighetene forsøkte å utrydde samisk og kvensk.

**Nøkkelbegreper:** Nabospråksforståelse, skandinavisk, falske venner, samisk, kvensk, fornorskning, språklig mangfold.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.6 NARRATIV: Språk i endring
// ============================================================================

export const CHAPTER_NORSK_10_7_6_NARRATIV: TextbookChapter = {
  id: 'norsk-10-7-6-narrativ',
  courseId: 'norsk-10',
  chapterNumber: '7.6',
  title: 'Språk i endring',
  subtitle: 'Narrativ versjon',
  description: 'Hvordan ungdomsspråk, engelsk påvirkning og flerspråklighet former det norske språket akkurat nå.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og reflektere over språkendringer i norsk i dag',
    'reflektere over forholdet mellom norsk og engelsk og bruk av lånord',
  ],
  linkedChapterId: 'norsk-10-7-6',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-10-7-6-n-intro',
      type: 'text',
      content: `## Språk som aldri står stille

Har du noensinne sagt «cringe», «basic», «vibe» eller «lowkey»? Da har du vært med på å forandre norsk. For språk er ikke noe fast og uforanderlig. Det er en levende organisme som hele tiden vokser, krymper, låner, forkaster og fornyer seg. Og akkurat nå skjer det enorme endringer i norsk, raskere enn noen gang i historien.

Foreldregenerasjonen din vokste opp med SMS og e-post. Du vokser opp med TikTok, Snapchat og AI. Hver teknologisk revolusjon bringer med seg nye måter å kommunisere på, og med dem nye ord, nye uttrykk og nye språklige konvensjoner. «Å google» var ikke et ord for tjue år siden. «Å swipe» fantes ikke for femten år siden. Hva slags nye ord vil oppstå de neste ti årene?

Men det handler ikke bare om nye ord. Hele måten vi skriver og snakker på, er i endring. Grensene mellom formelt og uformelt språk viskes ut. Vi skriver korte, konsise meldinger der vi før skrev lange brev. Vi bruker emojier der vi før brukte ord. Vi mikser norsk og engelsk i en grad som ville fått tidligere generasjoner til å riste på hodet.

Er dette en krise for det norske språket, eller er det bare naturlig utvikling? La oss utforske det.`,
    },

    // ========== SEKSJON 1: Ungdomsspråk og anglisismer ==========
    {
      id: 'norsk-10-7-6-n-section1',
      type: 'text',
      content: `## Ungdomsspråk og den engelske invasjonen

Ungdomsspråk har alltid eksistert. Hver generasjon skaper sine egne uttrykk som markerer tilhørighet og skiller dem fra de voksne. Det som er annerledes i dag, er at mye av ungdomsspråket kommer fra engelsk, formidlet gjennom sosiale medier, musikk, serier og gaming.

Anglisismer, altså engelske ord og uttrykk som brukes i norsk, er ikke et nytt fenomen. Norsk har lånt fra engelsk i over hundre år. Ord som «fotball», «streik» og «sjef» kom inn tidlig og ble fullstendig integrert. Men tempoet har akselerert dramatisk. I dag bruker mange unge en blanding av norsk og engelsk som nesten er et eget språk. Du sier kanskje «det var cringe» i stedet for «det var pinlig», «han er chill» i stedet for «han er rolig», eller «vi chiller» i stedet for «vi slapper av».

Noen ser på denne utviklingen med bekymring. De frykter at norsk er i ferd med å bli utvannet, at viktige nyanser går tapt når norske ord erstattes med engelske. De peker på at mange fagfelt allerede er dominert av engelsk: teknologi, vitenskap, underholdning, business. Hvis denne trenden fortsetter, kan norsk ende opp som et språk som bare brukes rundt middagsbordet, mens alt «viktig» foregår på engelsk. Dette kalles domenetap.

Andre mener at frykten er overdrevet. Norsk har alltid lånt fra andre språk, fra dansk, fra tysk, fra latin, fra fransk, og det har aldri truet språkets eksistens. Tvert imot har lånordene beriket norsk og gjort det mer uttryksfullt. De engelske lånordene vil etter hvert bli integrert i norsk, akkurat som alle de andre lånordene ble det.

Sannheten ligger kanskje et sted midt imellom. Det er naturlig at språk låner og endrer seg. Men det er også viktig å være bevisst på utviklingen og sørge for at norsk forblir et fullverdig språk som kan brukes i alle sammenhenger.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-10-7-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på ungdomsspråk og anglisismer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-6-n-quiz1-q0',
            task: 'Hva betyr domenetap i språklig sammenheng?',
            options: [
              { id: 'a', text: 'At et internettdomene blir slettet', isCorrect: false },
              { id: 'b', text: 'At norsk mister posisjon som bruksspråk innenfor visse fagfelt til fordel for engelsk', isCorrect: true },
              { id: 'c', text: 'At dialekter forsvinner fra et geografisk område', isCorrect: false },
              { id: 'd', text: 'At lånord gradvis blir integrert i norsk', isCorrect: false },
            ],
            solution: 'Domenetap betyr at norsk mister posisjon som bruksspråk innenfor bestemte områder (domener), for eksempel forskning, teknologi eller forretningsliv, der engelsk tar over.',
          },
          {
            id: 'norsk-10-7-6-n-quiz1-q1',
            task: 'Hva er en anglisisme?',
            options: [
              { id: 'a', text: 'Et norsk ord som brukes i engelsk', isCorrect: false },
              { id: 'b', text: 'Et engelsk ord eller uttrykk som brukes i norsk', isCorrect: true },
              { id: 'c', text: 'En grammatisk feil påvirket av engelsk', isCorrect: false },
              { id: 'd', text: 'Et ord som finnes i både norsk og engelsk', isCorrect: false },
            ],
            solution: 'En anglisisme er et engelsk ord eller uttrykk som brukes i et annet språk. Eksempler i norsk er «cringe», «chill», «random» og «deadline».',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Flerspråklighet ==========
    {
      id: 'norsk-10-7-6-n-section2',
      type: 'text',
      content: `## Flerspråklighet og fremtidens norsk

Norge har aldri vært mer flerspråklig enn nå. Med innvandring fra hele verden har det norske språklandskapet blitt radikalt mer mangfoldig. I mange norske klasserom sitter det elever som snakker urdu, somali, arabisk, polsk, litauisk eller tigrinja hjemme, og norsk på skolen.

Denne flerspråkligheten setter spor i norsk. I Oslo har det oppstått det som forskere kaller multietnolekt, et talemål som blander norsk grammatikk med uttale og ord fra ulike innvandrerspråk. Uttrykk som «wolla» (fra arabisk), «sjansen» (med annen betoning) og spesielle setningsmelodier har spredt seg langt utenfor de flerkulturelle miljøene der de oppstod. Multietnolekten er ikke «dårlig norsk». Det er en kreativ språklig nyskaping som følger sine egne mønstre og regler.

Hvordan vil norsk se ut om hundre år? Det er umulig å svare sikkert, men vi kan gjøre noen kvalifiserte gjetninger. Engelsk vil sannsynligvis fortsette å påvirke norsk sterkt, spesielt innenfor teknologi, vitenskap og underholdning. Skillet mellom bokmål og nynorsk vil trolig fortsette å eksistere, men kanskje med enda større valgfrihet. Og norsk vil bære preg av det flerkulturelle samfunnet vi lever i, med nye ord og uttrykk fra mange ulike språk.

Det viktigste er at vi som språkbrukere tar aktive valg. Språk formes av menneskene som bruker det. Hvis vi velger å bruke norsk i alle sammenhenger, vil norsk overleve og trives. Hvis vi gradvis overlater stadig flere områder til engelsk, risikerer vi at norsk blir et annenrangsspråk. Fremtiden til norsk ligger i dine hender, bokstavelig talt.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-10-7-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på flerspråklighet og språkendring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-10-7-6-n-quiz2-q0',
            task: 'Hva er multietnolekt?',
            options: [
              { id: 'a', text: 'Et skriftspråk brukt i flerkulturelle skoler', isCorrect: false },
              { id: 'b', text: 'Et talemål som blander norsk med uttale og ord fra ulike innvandrerspråk', isCorrect: true },
              { id: 'c', text: 'En dialekt som bare snakkes i Oslo sentrum', isCorrect: false },
              { id: 'd', text: 'Et annet ord for nynorsk', isCorrect: false },
            ],
            solution: 'Multietnolekt er et talemål som har oppstått i flerkulturelle miljøer. Det blander norsk grammatikk med uttale, intonasjon og ord fra ulike innvandrerspråk.',
          },
          {
            id: 'norsk-10-7-6-n-quiz2-q1',
            task: 'Hvorfor mener noen at flerspråklighet er en ressurs for samfunnet?',
            options: [
              { id: 'a', text: 'Fordi det gjør norsk unødvendig', isCorrect: false },
              { id: 'b', text: 'Fordi det beriker språklandskapet og gir nye perspektiver', isCorrect: true },
              { id: 'c', text: 'Fordi det gjør det lettere å lære dansk', isCorrect: false },
              { id: 'd', text: 'Fordi det fjerner behovet for rettskrivingsreformer', isCorrect: false },
            ],
            solution: 'Flerspråklighet beriker språklandskapet med nye ord, uttrykk og perspektiver. Det gir også individer kognitive fordeler og samfunnet bedre forutsetninger for internasjonal kommunikasjon.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-6-n-summary',
      type: 'text',
      content: `## Oppsummering: Norsk i bevegelse

**Språk endrer seg alltid.** Teknologi, kultur og kontakt med andre språk driver endringene.

**Ungdomsspråk** er et naturlig fenomen der nye generasjoner skaper egne uttrykk. I dag er mye ungdomsspråk påvirket av engelsk via sosiale medier og gaming.

**Anglisismer** er engelske ord og uttrykk som brukes i norsk. De kan berike språket, men domenetap er en reell bekymring.

**Flerspråklighet** gjør det norske språklandskapet mer mangfoldig. Multietnolekt er et nytt talemål som har oppstått i flerkulturelle miljøer.

**Fremtiden til norsk** avhenger av bevisste valg. Språkbrukerne bestemmer om norsk forblir et fullverdig språk.

**Nøkkelbegreper:** Ungdomsspråk, anglisismer, lånord, domenetap, flerspråklighet, multietnolekt, språkendring.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_10_NARRATIV_DEL5_CHAPTERS = [
  CHAPTER_NORSK_10_7_1_NARRATIV,
  CHAPTER_NORSK_10_7_2_NARRATIV,
  CHAPTER_NORSK_10_7_3_NARRATIV,
  CHAPTER_NORSK_10_7_4_NARRATIV,
  CHAPTER_NORSK_10_7_5_NARRATIV,
  CHAPTER_NORSK_10_7_6_NARRATIV,
];
