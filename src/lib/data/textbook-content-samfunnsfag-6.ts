/**
 * Tekstbok kapitler for Samfunnsfag 6. klasse
 * Innhold tilpasset elever på 6. trinn basert på LK20
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: NORGES HISTORIE
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_6_1_1: TextbookChapter = {
  id: 'samfunnsfag-6-1-1',
  courseId: 'samfunnsfag-6',
  chapterNumber: '1.1',
  title: 'Vikingtiden',
  description: 'Utforsk vikingenes liv, reiser og betydning for Norges historie.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['presentere historiske hendelser og personer'],
  content: [
    {
      id: 'samfunnsfag-6-1-1-intro',
      type: 'text',
      content: `## Vikingene - Nordens sjøfarere

For over tusen år siden seilte modige nordmenn ut i verden. De ble kalt vikinger, og de forandret historien!`,
    },
    {
      id: 'samfunnsfag-6-1-1-def-viking',
      type: 'definition',
      title: 'Hvem var vikingene?',
      content: `**Vikingtiden:** ca. 793-1066

**Vikingene var:**
- Skandinaver (fra Norge, Sverige, Danmark)
- Bønder, handelsmenn og krigere
- Dyktige sjøfarere og skipbyggere

**Vikingtokt:**
Noen vikinger dro på tokt for å plyndre, handle eller finne nytt land. Men de fleste var vanlige bønder som aldri dro langt hjemmefra.`,
    },
    {
      id: 'samfunnsfag-6-1-1-def-skip',
      type: 'definition',
      title: 'Vikingskipene',
      content: `**Vikingskipene var teknologiske mesterverk:**

**Langskip:**
- Brukt til krig og tokt
- Lange og smale
- Kunne ha 30-60 roere
- Hadde seil OG årer

**Kjennetegn:**
- Lite dyptgående (kunne seile opp elver)
- Sterke og fleksible
- Dekorert med drakehoveder

**Berømte skip:** Osebergskipet og Gokstadskipet (funnet i Norge)`,
    },
    {
      id: 'samfunnsfag-6-1-1-def-reiser',
      type: 'definition',
      title: 'Vikingenes reiser',
      content: `**Vikingene reiste langt:**

**Vest:**
- England og Irland (plyndring og bosetting)
- Island (bosetting ca. 870)
- Grønland (Erik Raude ca. 985)
- Nord-Amerika (Leiv Eiriksson ca. 1000)

**Øst:**
- Russland (handelsruter)
- Konstantinopel (dagens Istanbul)

**Sør:**
- Frankrike (Normandie = "nordmannenes land")`,
    },
    {
      id: 'samfunnsfag-6-1-1-def-liv',
      type: 'definition',
      title: 'Hverdagsliv i vikingtiden',
      content: `**De fleste vikinger var bønder:**

**Hjemme på gården:**
- Dyrket korn og grønnsaker
- Holdt kyr, sauer, geiter og griser
- Jaktet og fisket
- Lagde klær og verktøy

**Langhuset:**
- Det viktigste bygget på gården
- Hele familien bodde sammen
- Ildsted midt i huset
- Dyr bodde i den ene enden

**Samfunnet:**
- Tre grupper: treller (slaver), frie bønder, høvdinger/konger`,
    },
    {
      id: 'samfunnsfag-6-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Når var vikingtiden, og hvor kom vikingene fra?',
        solution: 'Vikingtiden var ca. 793-1066. Vikingene kom fra Skandinavia (Norge, Sverige og Danmark).',
      },
    },
    {
      id: 'samfunnsfag-6-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn tre steder vikingene reiste til.',
        solution: 'Eksempler: England, Irland, Island, Grønland, Nord-Amerika (Vinland), Russland, Konstantinopel, Frankrike.',
      },
    },
    {
      id: 'samfunnsfag-6-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hva var spesielt med vikingskipene som gjorde at vikingene kunne reise så langt?',
        solution: 'Vikingskipene var lette, raske og hadde grunt kjøl slik at de kunne seile opp elver. De hadde både seil og årer, var sterke men fleksible, og kunne tåle tøffe forhold på havet.',
        hints: ['Tenk på hva som gjorde skipene så gode til lange reiser'],
      },
    },
  ],
};

export const CHAPTER_SAMFUNNSFAG_6_1_2: TextbookChapter = {
  id: 'samfunnsfag-6-1-2',
  courseId: 'samfunnsfag-6',
  chapterNumber: '1.2',
  title: 'Middelalderen i Norge',
  description: 'Lær om Norge i middelalderen, kristningen og svartedauden.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['beskrive samfunnsendringer gjennom historien'],
  content: [
    {
      id: 'samfunnsfag-6-1-2-intro',
      type: 'text',
      content: `## Middelalderen - en tid med store endringer

Etter vikingtiden kom middelalderen. Norge ble kristnet, konger samlet landet, og så kom en forferdelig pest...`,
    },
    {
      id: 'samfunnsfag-6-1-2-def-kristning',
      type: 'definition',
      title: 'Kristningen av Norge',
      content: `**Fra norrøn tro til kristendom:**

**Før kristendommen:**
- Vikingene trodde på Odin, Tor, Frøya og andre guder
- Ofret til gudene
- Trodde på Valhall

**Kristningen:**
- Startet på 900-tallet
- Olav Tryggvason og Olav den hellige innførte kristendommen
- Ofte med tvang
- Norrøne templer ble revet, kirker ble bygd

**Resultatet:**
- Norge ble en del av det kristne Europa
- Kirken fikk stor makt`,
    },
    {
      id: 'samfunnsfag-6-1-2-def-konger',
      type: 'definition',
      title: 'De første kongene',
      content: `**Viktige konger:**

**Harald Hårfagre (ca. 872):**
- Regnes som Norges første konge
- Samlet Norge til ett rike

**Olav den hellige (ca. 1015-1030):**
- Fullførte kristningen
- Ble Norges helgen etter sin død
- Bygde opp kirken og lovverket

**Håkon Håkonsson (1217-1263):**
- Norges storhetstid
- Bygde Håkonshallen i Bergen
- Kontrollerte store deler av Nord-Atlanteren`,
    },
    {
      id: 'samfunnsfag-6-1-2-def-stavkirker',
      type: 'definition',
      title: 'Stavkirkene',
      content: `**Stavkirker er unike norske trekirker:**

**Kjennetegn:**
- Bygd helt i tre
- Reist på "staver" (stolper)
- Utskjæringer med draker og ornamenter
- Blanding av kristen og norrøn stil

**Berømte stavkirker:**
- Urnes stavkirke (eldst, på UNESCO-listen)
- Borgund stavkirke
- Heddal stavkirke (størst)

Det ble bygd over 1000 stavkirker, men bare ca. 28 står igjen i dag!`,
    },
    {
      id: 'samfunnsfag-6-1-2-def-svartedauden',
      type: 'definition',
      title: 'Svartedauden',
      content: `**Svartedauden (1349-1350) var en forferdelig pest:**

**Hva var det?**
- En sykdom (pest) som kom fra Asia
- Spredte seg med lopper på rotter
- Folk fikk svarte flekker på huden

**Konsekvenser for Norge:**
- Omtrent halvparten av befolkningen døde
- Mange gårder ble forlatt
- Fattigdom og nedgang
- Tok 200 år før befolkningen var like stor igjen

Svartedauden svekket Norge så mye at vi mistet selvstendigheten.`,
    },
    {
      id: 'samfunnsfag-6-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvem innførte kristendommen i Norge?',
        solution: 'Olav Tryggvason og Olav den hellige innførte kristendommen i Norge.',
      },
    },
    {
      id: 'samfunnsfag-6-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er en stavkirke, og hvorfor er de spesielle?',
        solution: 'Stavkirker er norske trekirker bygd på staver (stolper). De er spesielle fordi de er bygd helt i tre, har unike utskjæringer, og blander kristen og norrøn stil. Det er bare ca. 28 igjen.',
      },
    },
    {
      id: 'samfunnsfag-6-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvilke konsekvenser fikk svartedauden for Norge?',
        solution: 'Omtrent halvparten av befolkningen døde. Mange gårder ble forlatt. Det ble fattigdom og nedgang i samfunnet. Norge ble så svekket at vi mistet selvstendigheten.',
      },
    },
  ],
};

export const CHAPTER_SAMFUNNSFAG_6_1_3: TextbookChapter = {
  id: 'samfunnsfag-6-1-3',
  courseId: 'samfunnsfag-6',
  chapterNumber: '1.3',
  title: 'Norge under Danmark og Sverige',
  description: 'Forstå Norges historie som del av Danmark-Norge og unionen med Sverige.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['reflektere over hvordan fortiden preger nåtiden'],
  content: [
    {
      id: 'samfunnsfag-6-1-3-intro',
      type: 'text',
      content: `## 400 år uten selvstendighet

Etter svartedauden var Norge svekket. I over 400 år var vi styrt av andre land - først Danmark, så Sverige. Men nordmenn ga aldri opp drømmen om frihet!`,
    },
    {
      id: 'samfunnsfag-6-1-3-def-danmark',
      type: 'definition',
      title: 'Dansketiden (1380-1814)',
      content: `**Norge i union med Danmark:**

**Hva skjedde?**
- Norge ble en del av Danmark-Norge
- Kongen bodde i København
- Dansk ble skriftspråket
- Nordmenn hadde lite å si

**"400-årsnatten":**
- Mange norske tradisjoner forsvant
- Men bøndene beholdt sin frihet
- Norsk identitet levde videre

**Mot slutten:**
- Napoleonskrigene (1800-tallet)
- Danmark var på tapersiden
- Måtte gi opp Norge`,
    },
    {
      id: 'samfunnsfag-6-1-3-def-1814',
      type: 'definition',
      title: '1814 - et viktig år',
      content: `**1814 er det viktigste året i norsk historie:**

**Hva skjedde?**
1. Danmark måtte gi Norge til Sverige (jan.)
2. Nordmenn nektet å godta dette
3. 112 menn møttes på Eidsvoll (april-mai)
4. De skrev Grunnloven (17. mai 1814)
5. Valgte Christian Frederik som konge
6. Krig med Sverige (juli-aug.)
7. Norge måtte gå i union med Sverige

**Grunnloven:**
- En av verdens eldste grunnlover
- Ga Norge egen regjering og storting
- Var veldig moderne for sin tid`,
    },
    {
      id: 'samfunnsfag-6-1-3-def-sverige',
      type: 'definition',
      title: 'Unionen med Sverige (1814-1905)',
      content: `**Norge i union med Sverige:**

**Hva hadde vi felles?**
- Samme konge (svensk)
- Felles utenrikspolitikk

**Hva bestemte vi selv?**
- Eget storting
- Egen regjering
- Egne lover

**Veien til frihet:**
- Nordmenn ville ha full selvstendighet
- Konflikter om utenrikspolitikk
- 1905: Unionen ble oppløst
- Norge ble selvstendig!`,
    },
    {
      id: 'samfunnsfag-6-1-3-def-17mai',
      type: 'definition',
      title: '17. mai - nasjonaldagen',
      content: `**Vi feirer Grunnloven:**

**Hvorfor 17. mai?**
- Grunnloven ble underskrevet 17. mai 1814
- Vi feirer frihet og demokrati

**Tradisjoner:**
- Barnetog med flagg
- Bunader og finstasen
- Is og pølser
- "Ja, vi elsker" og "Hurra!"
- Taler om frihet og demokrati

17. mai er vår feiring av at Norge er et fritt og demokratisk land!`,
    },
    {
      id: 'samfunnsfag-6-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva skjedde 17. mai 1814?',
        solution: 'Grunnloven ble underskrevet på Eidsvoll.',
      },
    },
    {
      id: 'samfunnsfag-6-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Når ble Norge helt selvstendig, og fra hvilket land løsrev vi oss?',
        solution: 'Norge ble helt selvstendig i 1905 da unionen med Sverige ble oppløst.',
      },
    },
    {
      id: 'samfunnsfag-6-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvorfor er Grunnloven så viktig for Norge?',
        solution: 'Grunnloven ga Norge egen regjering og storting selv om vi var i union med Sverige. Den er grunnlaget for demokratiet vårt og en av verdens eldste grunnlover som fortsatt er i bruk.',
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 2: GEOGRAFI
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_6_2_1: TextbookChapter = {
  id: 'samfunnsfag-6-2-1',
  courseId: 'samfunnsfag-6',
  chapterNumber: '2.1',
  title: 'Norges geografi',
  description: 'Lær om Norges landskap, fjorder, fjell og klima.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['beskrive geografiske hovedtrekk i Norge'],
  content: [
    {
      id: 'samfunnsfag-6-2-1-intro',
      type: 'text',
      content: `## Norges varierte natur

Norge er et langstrakt land med utrolig variert natur - fra høye fjell og dype fjorder til vidder og kystlandskap.`,
    },
    {
      id: 'samfunnsfag-6-2-1-def-fjell',
      type: 'definition',
      title: 'Fjell og vidder',
      content: `**Norges høye fjell:**
- Galdhøpiggen (2469 m) - Norges høyeste
- Jotunheimen - "Kjempenes hjem"
- Hardangervidda - Europas største høyfjellsplatå

**Fjellkjeden:**
- Langfjella strekker seg gjennom hele Norge
- Deler landet i øst og vest
- Skapt av istidene`,
    },
    {
      id: 'samfunnsfag-6-2-1-def-fjorder',
      type: 'definition',
      title: 'Fjordene',
      content: `**Hva er en fjord?**
En fjord er en lang, smal havarm som strekker seg inn i landet.

**Hvordan ble de til?**
- Isbreer gravde ut daler
- Da isen smeltet, fyltes dalene med vann

**Berømte fjorder:**
- Sognefjorden (lengst: 204 km, dypest: 1308 m)
- Geirangerfjorden (UNESCO)
- Hardangerfjorden`,
    },
    {
      id: 'samfunnsfag-6-2-1-def-regioner',
      type: 'definition',
      title: 'Norges regioner',
      content: `**Norge deles inn i landsdeler:**

- **Østlandet:** Flatere landskap, jordbruk, Oslo
- **Sørlandet:** Kystlandskap, skjærgård, mildt klima
- **Vestlandet:** Fjorder, fjell, mye nedbør
- **Trøndelag:** Brede daler, jordbruk, Trondheim
- **Nord-Norge:** Midnattssol, nordlys, lange avstander`,
    },
    {
      id: 'samfunnsfag-6-2-1-def-klima',
      type: 'definition',
      title: 'Klima i Norge',
      content: `**Norge har variert klima:**

**Vest:** Mye nedbør, milde vintre (Golfstrømmen)
**Øst:** Mindre nedbør, kalde vintre
**Nord:** Kalde vintre, korte somre, midnattssol/mørketid

**Golfstrømmen:**
Varm havstrøm fra Mexico som varmer opp kysten vår. Uten den ville Norge vært mye kaldere!`,
    },
    {
      id: 'samfunnsfag-6-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er Norges høyeste fjell, og hvor høyt er det?',
        solution: 'Galdhøpiggen er Norges høyeste fjell, 2469 meter over havet.',
      },
    },
    {
      id: 'samfunnsfag-6-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan fjordene ble dannet.',
        solution: 'Fjordene ble dannet av isbreer under istidene. Isbreene gravde ut dype daler, og da isen smeltet, fyltes dalene med havvann.',
      },
    },
    {
      id: 'samfunnsfag-6-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvorfor er klimaet på Vestlandet så annerledes enn på Østlandet?',
        solution: 'Vestlandet får mye nedbør fordi fuktig luft fra havet treffer fjellene og må stige. Østlandet er i "regnskyggen" av fjellene og får mindre nedbør. Golfstrømmen gjør også kysten mildere.',
      },
    },
  ],
};

export const CHAPTER_SAMFUNNSFAG_6_2_2: TextbookChapter = {
  id: 'samfunnsfag-6-2-2',
  courseId: 'samfunnsfag-6',
  chapterNumber: '2.2',
  title: 'Europa',
  description: 'Utforsk Europas land, hovedsteder og kulturer.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['bruke kart og digitale ressurser'],
  content: [
    {
      id: 'samfunnsfag-6-2-2-intro',
      type: 'text',
      content: `## Vår verdensdel - Europa

Europa er en liten verdensdel, men med mange land, språk og kulturer. Her lærer du om våre naboer!`,
    },
    {
      id: 'samfunnsfag-6-2-2-def-fakta',
      type: 'definition',
      title: 'Fakta om Europa',
      content: `**Europa:**
- Ca. 750 millioner mennesker
- Ca. 50 land
- Nest minste verdensdel (etter Oseania)
- Mange ulike språk og kulturer

**Grenser:**
- Nord: Nordishavet
- Vest: Atlanterhavet
- Sør: Middelhavet
- Øst: Uralfjellene (grense mot Asia)`,
    },
    {
      id: 'samfunnsfag-6-2-2-def-norden',
      type: 'definition',
      title: 'Norden',
      content: `**De nordiske landene:**

| Land | Hovedstad | Innbyggere |
|------|-----------|------------|
| Norge | Oslo | 5,5 mill. |
| Sverige | Stockholm | 10,5 mill. |
| Danmark | København | 5,9 mill. |
| Finland | Helsingfors | 5,5 mill. |
| Island | Reykjavik | 0,4 mill. |

**Fellestrekk:**
- Lignende språk (unntatt finsk)
- Demokratiske land
- Høy levestandard
- Samarbeid (Nordisk Råd)`,
    },
    {
      id: 'samfunnsfag-6-2-2-def-storeland',
      type: 'definition',
      title: 'Store europeiske land',
      content: `**De største landene:**

**Tyskland:**
- Hovedstad: Berlin
- EUs største land (83 mill.)
- Industri og bilindustri

**Frankrike:**
- Hovedstad: Paris
- Kunst, kultur, Eiffeltårnet
- Vin og mat

**Storbritannia:**
- Hovedstad: London
- Kongehus, Big Ben
- Tidligere EU-medlem

**Spania:**
- Hovedstad: Madrid
- Sol og strand
- Flamenco og fotball`,
    },
    {
      id: 'samfunnsfag-6-2-2-def-eu',
      type: 'definition',
      title: 'EU - Den europeiske union',
      content: `**EU er et samarbeid mellom europeiske land:**

**Hva er EU?**
- 27 medlemsland
- Samarbeid om økonomi, lover, fred
- Egen valuta (euro) for mange land

**Hva gjør EU?**
- Fri handel mellom medlemslandene
- Fri bevegelse av mennesker
- Felles regler

**Norge og EU:**
- Norge er IKKE medlem av EU
- Men vi samarbeider gjennom EØS
- Vi følger mange EU-regler`,
    },
    {
      id: 'samfunnsfag-6-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er hovedstedene i de nordiske landene?',
        solution: 'Norge: Oslo, Sverige: Stockholm, Danmark: København, Finland: Helsingfors, Island: Reykjavik.',
      },
    },
    {
      id: 'samfunnsfag-6-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn tre ting EU-landene samarbeider om.',
        solution: 'Eksempler: Fri handel, fri bevegelse av mennesker, felles valuta (euro), felles regler, fred og sikkerhet.',
      },
    },
    {
      id: 'samfunnsfag-6-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Er Norge medlem av EU? Forklar hvordan Norge likevel samarbeider med EU.',
        solution: 'Nei, Norge er ikke medlem av EU. Men vi samarbeider gjennom EØS-avtalen. Gjennom EØS følger Norge mange EU-regler og deltar i det indre markedet.',
      },
    },
  ],
};

export const CHAPTER_SAMFUNNSFAG_6_2_3: TextbookChapter = {
  id: 'samfunnsfag-6-2-3',
  courseId: 'samfunnsfag-6',
  chapterNumber: '2.3',
  title: 'Verdensdelene',
  description: 'Lær om de ulike verdensdelene og deres kjennetegn.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['beskrive og sammenligne ulike regioner i verden'],
  content: [
    {
      id: 'samfunnsfag-6-2-3-intro',
      type: 'text',
      content: `## De sju verdensdelene

Jorden er delt inn i sju verdensdeler. Hver har sin egen geografi, kultur og historie.`,
    },
    {
      id: 'samfunnsfag-6-2-3-def-verdensdeler',
      type: 'definition',
      title: 'De sju verdensdelene',
      content: `**Verdensdelene (fra størst til minst):**

1. **Asia** - Størst, mest folkerik
2. **Afrika** - Nest størst, mange land
3. **Nord-Amerika** - USA, Canada, Mexico
4. **Sør-Amerika** - Amazonas, Andes
5. **Antarktis** - Iskontinentet, ingen fastboende
6. **Europa** - Liten, men viktig
7. **Oseania** - Australia og øyer`,
    },
    {
      id: 'samfunnsfag-6-2-3-def-asia',
      type: 'definition',
      title: 'Asia',
      content: `**Asia - verdens største verdensdel:**

**Fakta:**
- Over 4 milliarder mennesker
- Kina og India har flest folk
- Himalayas med Mount Everest

**Kjente land:**
- Kina (Beijing)
- Japan (Tokyo)
- India (New Delhi)
- Russland (strekker seg inn i Europa)`,
    },
    {
      id: 'samfunnsfag-6-2-3-def-afrika',
      type: 'definition',
      title: 'Afrika',
      content: `**Afrika - mangfoldets kontinent:**

**Fakta:**
- 54 land
- Verdens nest største verdensdel
- Sahara - verdens største ørken

**Kjennetegn:**
- Store kontraster (ørken, regnskog, savanne)
- Ung befolkning
- Rik kultur og historie`,
    },
    {
      id: 'samfunnsfag-6-2-3-def-amerika',
      type: 'definition',
      title: 'Amerika',
      content: `**Nord- og Sør-Amerika:**

**Nord-Amerika:**
- USA (Washington D.C.)
- Canada (Ottawa)
- Mexico (Mexico City)

**Sør-Amerika:**
- Brasil (Brasilia) - størst
- Argentina (Buenos Aires)
- Peru (Lima)

**Kjennetegn:**
- Amazonas (verdens største regnskog)
- Andesfjellene (lengste fjellkjede)`,
    },
    {
      id: 'samfunnsfag-6-2-3-def-oseania',
      type: 'definition',
      title: 'Oseania',
      content: `**Oseania - øyenes verdensdel:**

**Inkluderer:**
- Australia (Canberra)
- New Zealand (Wellington)
- Tusenvis av stillehavsøyer

**Kjennetegn:**
- Australia er både land og kontinent
- Mange små øystater
- Unik dyreliv (kenguru, koala)`,
    },
    {
      id: 'samfunnsfag-6-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken verdensdel er størst?',
        solution: 'Asia er verdens største verdensdel.',
      },
    },
    {
      id: 'samfunnsfag-6-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn de sju verdensdelene.',
        solution: 'Asia, Afrika, Nord-Amerika, Sør-Amerika, Antarktis, Europa, Oseania.',
      },
    },
    {
      id: 'samfunnsfag-6-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvilken verdensdel har ingen fastboende, og hvorfor?',
        solution: 'Antarktis har ingen fastboende fordi det er for kaldt. Det er bare forskere som bor der midlertidig på forskningsstasjoner.',
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3: SAMFUNNSKUNNSKAP
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_6_3_1: TextbookChapter = {
  id: 'samfunnsfag-6-3-1',
  courseId: 'samfunnsfag-6',
  chapterNumber: '3.1',
  title: 'Demokrati',
  description: 'Forstå hva demokrati er og hvordan vi styres i Norge.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['beskrive demokratiske prosesser'],
  content: [
    {
      id: 'samfunnsfag-6-3-1-intro',
      type: 'text',
      content: `## Folkestyre - demokrati

I Norge bestemmer folket hvem som skal styre landet. Dette kalles demokrati, og det er noe vi skal være stolte av!`,
    },
    {
      id: 'samfunnsfag-6-3-1-def-demokrati',
      type: 'definition',
      title: 'Hva er demokrati?',
      content: `**Demokrati** betyr "folkestyre" (fra gresk).

**Kjennetegn på demokrati:**
- Folket velger sine ledere
- Alle har rett til å si sin mening
- Flertallet bestemmer
- Mindretallet respekteres
- Menneskerettighetene gjelder

**Det motsatte (diktatur):**
- Én person eller gruppe bestemmer alt
- Ingen frie valg
- Ikke lov å kritisere makten`,
    },
    {
      id: 'samfunnsfag-6-3-1-def-valg',
      type: 'definition',
      title: 'Valg i Norge',
      content: `**Stortingsvalg:**
- Hvert 4. år
- Vi velger representanter til Stortinget
- 169 representanter

**Kommunevalg:**
- Hvert 4. år (2 år etter stortingsvalg)
- Vi velger kommunestyre og fylkesting
- Lokale saker

**Hvem kan stemme?**
- Norske statsborgere
- 18 år eller eldre
- Ved kommunevalg: også noen utlendinger`,
    },
    {
      id: 'samfunnsfag-6-3-1-def-storting',
      type: 'definition',
      title: 'Stortinget og regjeringen',
      content: `**Stortinget:**
- Norges parlament (nasjonalforsamling)
- 169 representanter fra hele landet
- Lager lover
- Vedtar statsbudsjettet
- Kontrollerer regjeringen

**Regjeringen:**
- Styrer landet til daglig
- Ledet av statsministeren
- Foreslår lover og budsjett
- Ansvarlig overfor Stortinget

**Kongen:**
- Norges statsoverhode
- Symbolsk rolle
- Åpner Stortinget
- Representerer Norge`,
    },
    {
      id: 'samfunnsfag-6-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr demokrati?',
        solution: 'Demokrati betyr folkestyre - at folket bestemmer.',
      },
    },
    {
      id: 'samfunnsfag-6-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er forskjellen på Stortinget og regjeringen?',
        solution: 'Stortinget lager lover og vedtar budsjett. Regjeringen styrer landet til daglig og foreslår lover. Stortinget kontrollerer regjeringen.',
      },
    },
    {
      id: 'samfunnsfag-6-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvorfor er det viktig at vi har demokrati?',
        solution: 'Med demokrati får alle være med å bestemme, menneskerettighetene respekteres, vi kan si hva vi mener uten å bli straffet, og makten deles mellom mange.',
      },
    },
  ],
};

export const CHAPTER_SAMFUNNSFAG_6_3_2: TextbookChapter = {
  id: 'samfunnsfag-6-3-2',
  courseId: 'samfunnsfag-6',
  chapterNumber: '3.2',
  title: 'Rettigheter og plikter',
  description: 'Lær om menneskerettigheter, barns rettigheter og våre plikter.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['reflektere over egne og andres rettigheter'],
  content: [
    {
      id: 'samfunnsfag-6-3-2-intro',
      type: 'text',
      content: `## Rettigheter og plikter hører sammen

Alle mennesker har rettigheter - ting vi har krav på. Men vi har også plikter - ting vi må gjøre for at samfunnet skal fungere.`,
    },
    {
      id: 'samfunnsfag-6-3-2-def-mr',
      type: 'definition',
      title: 'Menneskerettighetene',
      content: `**FNs menneskerettigheter (1948):**

**Alle mennesker har rett til:**
- Liv og frihet
- Å ikke bli diskriminert
- Ytringsfrihet
- Utdanning
- Helsehjelp
- Et verdig liv

**Disse rettighetene gjelder:**
- Alle mennesker
- Overalt i verden
- Uansett bakgrunn`,
    },
    {
      id: 'samfunnsfag-6-3-2-def-barn',
      type: 'definition',
      title: 'Barnekonvensjonen',
      content: `**FNs barnekonvensjon (1989):**

**Barns spesielle rettigheter:**
- Rett til omsorg og trygghet
- Rett til utdanning
- Rett til å leke
- Rett til beskyttelse mot vold
- Rett til å si sin mening
- Rett til å bli hørt

**Barnets beste:**
- Skal alltid komme først
- Voksne må tenke på barna`,
    },
    {
      id: 'samfunnsfag-6-3-2-def-plikter',
      type: 'definition',
      title: 'Våre plikter',
      content: `**Med rettigheter følger plikter:**

**Plikter som borger:**
- Følge lovene
- Betale skatt (voksne)
- Stemme (valgfritt, men viktig!)
- Respektere andres rettigheter

**Plikter på skolen:**
- Møte opp (opplæringsplikt)
- Følge skolereglene
- Respektere medelever og lærere

**Plikter hjemme:**
- Hjelpe til
- Følge familiens regler`,
    },
    {
      id: 'samfunnsfag-6-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Nevn tre menneskerettigheter.',
        solution: 'Eksempler: Rett til liv, rett til utdanning, rett til ytringsfrihet, rett til helsehjelp.',
      },
    },
    {
      id: 'samfunnsfag-6-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva sier barnekonvensjonen om "barnets beste"?',
        solution: 'Barnets beste skal alltid komme først. Når voksne tar avgjørelser som påvirker barn, skal de tenke på hva som er best for barna.',
      },
    },
    {
      id: 'samfunnsfag-6-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar sammenhengen mellom rettigheter og plikter med et eksempel.',
        solution: 'Eksempel: Vi har rett til utdanning, men plikt til å møte opp på skolen. Vi har rett til å si vår mening, men plikt til å respektere andres meninger. Rettigheter og plikter balanserer hverandre.',
      },
    },
  ],
};

export const CHAPTER_SAMFUNNSFAG_6_3_3: TextbookChapter = {
  id: 'samfunnsfag-6-3-3',
  courseId: 'samfunnsfag-6',
  chapterNumber: '3.3',
  title: 'Mangfold og inkludering',
  description: 'Forstå betydningen av mangfold og hvordan vi kan skape et inkluderende samfunn.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['drøfte hvordan vi kan bidra til et inkluderende samfunn'],
  content: [
    {
      id: 'samfunnsfag-6-3-3-intro',
      type: 'text',
      content: `## Forskjellige sammen

Norge er et mangfoldig land. Vi har ulik bakgrunn, religion, kultur og meninger. Dette mangfoldet gjør samfunnet rikt - hvis vi klarer å inkludere alle!`,
    },
    {
      id: 'samfunnsfag-6-3-3-def-mangfold',
      type: 'definition',
      title: 'Hva er mangfold?',
      content: `**Mangfold** betyr variasjon og forskjeller.

**Mangfold i Norge:**
- Forskjellige kulturer og religioner
- Forskjellige språk
- Forskjellige meninger og interesser
- Forskjellige familier og levemåter
- Forskjellige evner og funksjonsvariasjoner

**Hvorfor er mangfold bra?**
- Vi lærer av hverandre
- Flere perspektiver
- Mer kreativitet
- Rikere samfunn`,
    },
    {
      id: 'samfunnsfag-6-3-3-def-inkludering',
      type: 'definition',
      title: 'Inkludering',
      content: `**Inkludering** betyr at alle får være med.

**Et inkluderende samfunn:**
- Alle føler seg velkomne
- Alle får delta
- Forskjeller respekteres
- Ingen holdes utenfor

**Det motsatte (ekskludering):**
- Noen holdes utenfor
- Mobbing og diskriminering
- Fordommer`,
    },
    {
      id: 'samfunnsfag-6-3-3-def-respekt',
      type: 'definition',
      title: 'Respekt og toleranse',
      content: `**Respekt:**
- Behandle andre slik du vil bli behandlet
- Lytte til andre
- Akseptere at folk er forskjellige

**Toleranse:**
- Tåle at andre er annerledes
- Ikke dømme folk
- Akseptere ulike meninger

**Husk:**
Du trenger ikke være enig med alle, men du må respektere at andre har rett til sin mening.`,
    },
    {
      id: 'samfunnsfag-6-3-3-def-bidra',
      type: 'definition',
      title: 'Hvordan kan du bidra?',
      content: `**Du kan bidra til inkludering:**
- Si hei til alle
- Inkluder noen som sitter alene
- Stå opp mot mobbing
- Vær nysgjerrig, ikke dømmende
- Respekter at folk er forskjellige
- Lær om andre kulturer og religioner
- Ikke spre rykter eller sladder`,
    },
    {
      id: 'samfunnsfag-6-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr inkludering?',
        solution: 'Inkludering betyr at alle får være med, føler seg velkomne og kan delta.',
      },
    },
    {
      id: 'samfunnsfag-6-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvorfor er mangfold bra for samfunnet?',
        solution: 'Mangfold er bra fordi vi lærer av hverandre, får flere perspektiver, blir mer kreative og får et rikere samfunn.',
      },
    },
    {
      id: 'samfunnsfag-6-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-6-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gi tre konkrete eksempler på hvordan du kan bidra til inkludering i klassen din.',
        solution: 'Eksempler: Si hei til alle om morgenen, spørre om noen som sitter alene vil være med, stå opp for noen som blir ertet, være nysgjerrig på andres bakgrunn istedenfor å dømme.',
      },
    },
  ],
};

// ============================================================================
// EKSPORTERE ALLE KAPITLER
// ============================================================================

export const SAMFUNNSFAG_6_CHAPTERS: TextbookChapter[] = [
  // Kapittel 1: Norges historie
  CHAPTER_SAMFUNNSFAG_6_1_1,
  CHAPTER_SAMFUNNSFAG_6_1_2,
  CHAPTER_SAMFUNNSFAG_6_1_3,
  // Kapittel 2: Geografi
  CHAPTER_SAMFUNNSFAG_6_2_1,
  CHAPTER_SAMFUNNSFAG_6_2_2,
  CHAPTER_SAMFUNNSFAG_6_2_3,
  // Kapittel 3: Samfunnskunnskap
  CHAPTER_SAMFUNNSFAG_6_3_1,
  CHAPTER_SAMFUNNSFAG_6_3_2,
  CHAPTER_SAMFUNNSFAG_6_3_3,
];
