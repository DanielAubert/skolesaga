/**
 * Norsk VG3 - Narrative versjoner Del 9 (Kapittel 9.1-9.4)
 *
 * Engasjerende, fortellende versjoner av kapitlene om lyrikk og drama,
 * optimalisert for lesing/lytting.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 9.1 NARRATIV: Norsk lyrikk fra 1850 til i dag
// ============================================================================

export const CHAPTER_NORSK_VG3_9_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-9-1-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '9.1',
  title: 'Norsk lyrikk fra 1850 til i dag',
  subtitle: 'Narrativ versjon',
  description: 'En reise gjennom 170 år med norsk poesi - fra Wergeland til i dag.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'sammenligne tekster fra ulike tider',
  ],
  linkedChapterId: 'norsk-vg3-9-1',
  content: [
    {
      id: 'norsk-vg3-9-1-n-intro',
      type: 'text',
      content: `## Ordenes musikk

Et dikt kan forandre måten du ser verden på. Et dikt kan fange et øyeblikk, en følelse, en sannhet som prosa aldri helt når. Et dikt kan synges, ropes, hviskes - eller bare ligge stille på papiret og vente.

Norsk lyrikk har en rik historie. Fra Henrik Wergelands frihetsdikt til Jan Erik Volds jazzpoesi, fra Sigbjørn Obstfelders fremmedgjøring til Olav H. Hauges østlige visdom - diktet har vært en sentral stemme i norsk kultur.

I dette kapittelet skal vi reise gjennom 170 år med norsk poesi. Du vil møte diktere som formet sin tid, og dikt som fortsatt lever.`,
    },
    {
      id: 'norsk-vg3-9-1-n-section1',
      type: 'text',
      content: `## Nasjonalromantikken - diktets fødsel

Midt på 1800-tallet var Norge en ung nasjon på leting etter sin identitet. Dikterne spilte en avgjørende rolle. De ga oss bilder av hvem vi var - et fjellfolk, et fritt folk, et folk med røtter i sagn og eventyr.

**Henrik Wergeland** (1808-1845) var den store visjonæren. Hans dikt strømmer over av begeistring, frihetstrang og kjærlighet til menneskeheten. Han drømte stort - om frihet for alle folk, om opplysning for alle klasser.

**Johan Sebastian Welhaven** (1807-1873) var hans motpol. Der Wergeland var kaotisk og overstrømmende, var Welhaven kontrollert og formfullendt. De to krangler om norsk kultur - og begge hadde rett på sin måte.

**Bjørnstjerne Bjørnson** ga oss nasjonalsangen "Ja, vi elsker dette landet" - et dikt som fortsatt synges med tårer i øynene på 17. mai. Hans poesi var folkelig og direkte.

**Aasmund Olavsson Vinje** skrev på nynorsk og ga oss "Ved Rondane" - kanskje det vakreste norske naturdiktet. "No ser eg atter slike fjell og dalar / som dei eg i min fyrste ungdom såg."`,
    },
    {
      id: 'norsk-vg3-9-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvem skrev nasjonalsangen "Ja, vi elsker dette landet"?',
        options: [
          { id: 'a', text: 'Henrik Wergeland', isCorrect: false },
          { id: 'b', text: 'Bjørnstjerne Bjørnson', isCorrect: true },
          { id: 'c', text: 'Henrik Ibsen', isCorrect: false },
          { id: 'd', text: 'Aasmund Olavsson Vinje', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bjørnstjerne Bjørnson skrev "Ja, vi elsker dette landet" i 1859. Melodien ble skrevet av Rikard Nordraak, og sangen ble offisiell nasjonalsang.',
      },
    },
    {
      id: 'norsk-vg3-9-1-n-section2',
      type: 'text',
      content: `## Symbolisme og nyromantikk - inn i det mystiske

Rundt 1890 snudde stemningen. Dikterne var lei av realismens gråhet. De søkte mot det mystiske, det drømmeaktige, det symbolske.

**Sigbjørn Obstfelder** (1866-1900) skrev det berømte diktet "Jeg ser":

*Jeg ser på den hvide himmel,
jeg ser på de gråblå skyer,
jeg ser på den blodige sol.
Dette er altså verden.
Dette er altså klodernes hjem.*

Diktet uttrykker en intens fremmedgjøring - som om dikteren er falt ned fra en annen planet og ikke forstår det han ser. Obstfelder døde ung, men diktene hans lever videre som uttrykk for det moderne menneskets rotløshet.

**Vilhelm Krag** skrev stemningslyrikk som fanget øyeblikk av skjønnhet og vemod. Hans dikt om Sørlandet ble folkekjære.

Symbolistene brukte bilder og symboler for å uttrykke det som ikke kan sies direkte. Et dikt handler ikke bare om det det ser ut til å handle om - det peker mot noe dypere, noe som unnslipper ordene.`,
    },
    {
      id: 'norsk-vg3-9-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilket tema uttrykker Obstfelders dikt "Jeg ser"?',
        options: [
          { id: 'a', text: 'Nasjonal stolthet', isCorrect: false },
          { id: 'b', text: 'Kjærlighet til naturen', isCorrect: false },
          { id: 'c', text: 'Fremmedgjøring og eksistensiell forvirring', isCorrect: true },
          { id: 'd', text: 'Sosial kritikk', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"Jeg ser" uttrykker intens fremmedgjøring - som om dikteren er en fremmed i verden som ikke forstår det han ser. Det er et klassisk uttrykk for det moderne menneskets rotløshet.',
      },
    },
    {
      id: 'norsk-vg3-9-1-n-section3',
      type: 'text',
      content: `## Mellomkrigstiden - mellom tradisjon og fornyelse

Mellomkrigstiden var en tid med spenning og uro. Første verdenskrig hadde rystet Europa. Dikterne stilte nye spørsmål om liv og død, mening og meningsløshet.

**Olaf Bull** (1883-1933) var en mester i den tradisjonelle formen. Hans dikt er elegante, filosofiske, fulle av innsikt. Han grublet over tid og forgjengelighet med en visdom som fortsatt treffer.

**Arnulf Øverland** (1889-1968) brukte diktet som våpen. Hans berømte "Du må ikke sove" advarte mot nazismen med en kraft som fortsatt gir gåsehud:

*Du må ikke tåle så inderlig vel
den urett som ikke rammer deg selv!*

**Nordahl Grieg** (1902-1943) skrev "Til ungdommen" - et dikt som ble til en sang, som ble til et symbol på motstand og håp. Grieg falt selv i krigen, skutt ned over Berlin på et bombetokt.

Mellomkrigstidens diktere viste at poesien kunne være både skjønn og viktig - både kunst og handling.`,
    },
    {
      id: 'norsk-vg3-9-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva advarte Arnulf Øverland mot i "Du må ikke sove"?',
        options: [
          { id: 'a', text: 'Industrialiseringen', isCorrect: false },
          { id: 'b', text: 'Nazismen og fascismen', isCorrect: true },
          { id: 'c', text: 'Moderniteten', isCorrect: false },
          { id: 'd', text: 'Kapitalismen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Du må ikke sove" (1936) var en kraftfull advarsel mot nazismen. Øverland så klart hva som var i ferd med å skje i Tyskland og oppfordret til motstand. Han ble selv sendt til Sachsenhausen under krigen.',
      },
    },
    {
      id: 'norsk-vg3-9-1-n-section4',
      type: 'text',
      content: `## Modernismens gjennombrudd - frigjøring av formen

Etter andre verdenskrig kom modernismen for fullt til Norge. Dikterne brøt med de tradisjonelle formene - rim og fast rytme ble erstattet av frie vers. Nye temaer kom inn: angst, fremmedgjøring, eksistensielle spørsmål.

**Tarjei Vesaas** (1897-1970) skrev dikt som er enkle på overflaten, men fulle av dybde. Hans poesi er symbolsk og eksistensiell, preget av naturen i Telemark.

**Rolf Jacobsen** (1907-1994) var pioneren for modernistisk lyrikk i Norge. Han skrev om den moderne verden - maskiner, byer, teknologi - men også om naturens motstandskraft. Han fant poesi i det hverdagslige.

**Olav H. Hauge** (1908-1994) levde tilbaketrukket som fruktbonde i Ulvik. Hans dikt er korte, konsentrerte, påvirket av østlig filosofi og japansk haiku. Et helt liv kan rommes i tre linjer.

**Gunvor Hofmo** (1921-1995) skrev eksistensiell, mørk lyrikk, preget av Holocaust og psykisk lidelse. Hennes dikt er intense og ubehagelige - men også nødvendige.`,
    },
    {
      id: 'norsk-vg3-9-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Olav H. Hauges dikt?',
        options: [
          { id: 'a', text: 'Lange, episke dikt om vikinghistorie', isCorrect: false },
          { id: 'b', text: 'Korte, konsentrerte dikt påvirket av østlig filosofi', isCorrect: true },
          { id: 'c', text: 'Politiske protestdikt', isCorrect: false },
          { id: 'd', text: 'Tradisjonelle rim og faste vers', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Olav H. Hauge skrev korte, konsentrerte dikt påvirket av østlig filosofi og japansk haiku. Han levde tilbaketrukket som fruktbonde i Ulvik og fant dype sannheter i det enkle.',
      },
    },
    {
      id: 'norsk-vg3-9-1-n-section5',
      type: 'text',
      content: `## Fra 1970 til i dag - mangfold og eksperiment

De siste tiårene har norsk lyrikk blitt stadig mer mangfoldig. 1970-tallet var politisk - dikterne engasjerte seg i samfunnskampen. 1980- og 90-tallet ble mer personlig. I dag ser vi et rikt mangfold av stemmer og stiler.

**Jan Erik Vold** (f. 1939) brakte jazz og lek inn i poesien. Hans konkrete poesi eksperimenterer med ordenes lyd og utseende på papiret.

**Paal-Helge Haugen** (f. 1945) skriver eksperimentell nynorsk lyrikk som utfordrer leseren.

Nyere poeter som **Øyvind Rimbereid**, **Nils Chr. Moe-Repstad** og mange andre fortsetter å fornye norsk lyrikk. Noen skriver i dialekt, noen i nynorsk, noen i bokmål. Noen eksperimenterer radikalt, andre holder på tradisjonen.

Det diktet gjør best - å fange et øyeblikk, en følelse, en sannhet i få ord - det er like viktig i dag som det var for 170 år siden. Formen endrer seg, men behovet for poesi forsvinner aldri.`,
    },
    {
      id: 'norsk-vg3-9-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Jan Erik Volds poesi?',
        options: [
          { id: 'a', text: 'Tradisjonelle nasjonalromantiske temaer', isCorrect: false },
          { id: 'b', text: 'Jazz-inspirasjon, lek og konkret poesi', isCorrect: true },
          { id: 'c', text: 'Bare politiske dikt', isCorrect: false },
          { id: 'd', text: 'Bare naturlyrikk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Jan Erik Vold brakte jazz og lek inn i norsk poesi. Hans konkrete poesi eksperimenterer med ordenes lyd og utseende på papiret, og han er kjent for å fremføre dikt med jazzmusikere.',
      },
    },
    {
      id: 'norsk-vg3-9-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Nasjonalromantikken (1850-1890):**
- Wergeland, Welhaven, Bjørnson, Vinje
- Nasjonal identitet, natur, frihet

**Symbolisme/nyromantikk (1890-1920):**
- Obstfelder, Krag
- Det mystiske, stemningsfulle, symbolske

**Mellomkrigstiden (1920-1940):**
- Olaf Bull, Arnulf Øverland, Nordahl Grieg
- Tradisjon og politisk engasjement

**Modernismens gjennombrudd (1950-1970):**
- Vesaas, Jacobsen, Hauge, Hofmo
- Fri form, eksistensielle temaer

**1970 til i dag:**
- Jan Erik Vold, Paal-Helge Haugen, mange nye stemmer
- Mangfold, eksperiment, personlig uttrykk`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.4 NARRATIV: Drama fra Ibsen til Fosse
// ============================================================================

export const CHAPTER_NORSK_VG3_9_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-9-4-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '9.4',
  title: 'Drama fra Ibsen til Fosse',
  subtitle: 'Narrativ versjon',
  description: 'Fra Ibsens realistiske dramaer til Fosses minimalistiske teater - norsk dramas verdensarv.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'sammenligne tekster fra ulike tider',
  ],
  linkedChapterId: 'norsk-vg3-9-4',
  content: [
    {
      id: 'norsk-vg3-9-4-n-intro',
      type: 'text',
      content: `## Scener som forandret verden

Tenk deg: Det er 1879. I teatre over hele Europa går teppet ned etter siste akt av "Et dukkehjem". En kvinne har nettopp forlatt mann og barn. Døren smeller. Publikum sitter i sjokkert stillhet.

Nora Helmer hadde nettopp forandret teaterhistorien.

Norge - et lite land i utkanten av Europa - har gitt verden to av de viktigste dramatikerne noensinne: Henrik Ibsen og Jon Fosse. Den ene skapte det moderne realistiske drama på 1800-tallet. Den andre fikk Nobelprisen i 2023 for å fornye dramaet igjen.

Hvordan ble liten nasjon en stormakt i teater? Det er historien vi skal fortelle.`,
    },
    {
      id: 'norsk-vg3-9-4-n-section1',
      type: 'text',
      content: `## Ibsen - det moderne dramaets far

Henrik Ibsen (1828-1906) regnes som grunnleggeren av det moderne drama. Før ham var teater gjerne underholdning, melodrama, historiske kostymeoppsetninger. Ibsen gjorde teater til en arena for å diskutere virkelige problemer.

Hans realistiske dramaer tok opp temaer som sjokkerte samtiden: Kvinners ufrihet. Ekteskapets hykleri. Samfunnets dobbeltmoral. Fortidens hemmeligheter som innhenter oss.

Ibsen utviklet en dramatisk teknikk som fortsatt brukes: **Det analytiske dramaet**, der fortiden gradvis avdekkes gjennom dialog. **Symboler** som forsterker tematikken - juletræet som visner, pistolene som venter. **Komplekse karakterer** som ikke er gode eller onde, men menneskelige.

Fra "Et dukkehjem" (1879) via "Gengangere" (1881) til "Hedda Gabler" (1890) skapte Ibsen verk som fortsatt spilles over hele verden. Han er den mest spilte dramatikeren etter Shakespeare.`,
    },
    {
      id: 'norsk-vg3-9-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Ibsens analytiske drama?',
        options: [
          { id: 'a', text: 'Handlingen foregår over mange år', isCorrect: false },
          { id: 'b', text: 'Fortiden avdekkes gradvis gjennom dialog i nåtiden', isCorrect: true },
          { id: 'c', text: 'Karakterene synger og danser', isCorrect: false },
          { id: 'd', text: 'Alt foregår i drømmer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I det analytiske dramaet ligger hovedhandlingen i å avdekke fortiden. Hemmeligheter og skjulte sannheter kommer gradvis frem gjennom dialog, og spenningen ligger i å oppdage hva som egentlig har skjedd.',
      },
    },
    {
      id: 'norsk-vg3-9-4-n-section2',
      type: 'text',
      content: `## Mellom Ibsen og Fosse - et århundre med drama

Etter Ibsen fortsatte norsk drama å utvikle seg. I mellomkrigstiden skrev **Nordahl Grieg** politisk drama - "Vår ære og vår makt" (1935) og "Nederlaget" (1937) angrep kapitalisme og fascisme med Brechts teknikker.

Etter krigen kom nytt engasjement. **Jens Bjørneboe** skrev provoserende stykker som "Fugleelskerne" (1966) og trilogien "Bestialitetens historie" (i dramatisk form). Han utfordret alt og alle.

**Cecilie Løveid** fornyet norsk drama fra 1980-tallet med eksperimentell, poetisk teater. **Tormod Skagestad** og andre fulgte med politisk og kunstnerisk vågestykker.

Men det var først med Jon Fosse at norsk drama igjen fikk verdensomspennende betydning.`,
    },
    {
      id: 'norsk-vg3-9-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvem skrev politiske dramaer som "Vår ære og vår makt"?',
        options: [
          { id: 'a', text: 'Henrik Ibsen', isCorrect: false },
          { id: 'b', text: 'Jon Fosse', isCorrect: false },
          { id: 'c', text: 'Nordahl Grieg', isCorrect: true },
          { id: 'd', text: 'Jens Bjørneboe', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Nordahl Grieg skrev politiske dramaer som "Vår ære og vår makt" (1935), som kritiserte rederne som tjente på første verdenskrig, og "Nederlaget" (1937) om Pariserkommunen.',
      },
    },
    {
      id: 'norsk-vg3-9-4-n-section3',
      type: 'text',
      content: `## Jon Fosse - det usagtes mester

Jon Fosse (f. 1959) fikk Nobelprisen i litteratur i 2023 "for hans nyskapande skodespel og prosa som gjev røyst til det usegjelege." Han regnes som en av verdens viktigste nålevende dramatikere.

Fosses drama er helt annerledes enn Ibsens. Der Ibsen er full av avsløringer og konfrontasjoner, er Fosse full av taushet og venting. Karakterene snakker forbi hverandre. Setningene er korte, ofte ufullstendige. Det som ikke sies, er like viktig som det som sies.

Et typisk Fosse-drama: En mann og en kvinne. Et hus ved fjorden. De venter på noen som kanskje kommer, kanskje ikke. De snakker om hverdagslige ting. Under overflaten aner vi ensomhet, lengsel, angst. Ingenting skjer - og alt skjer.

Fosses første teaterstykke "Og aldri skal vi skiljast" (1994) viste en ny vei for dramaet. Siden har han skrevet over 30 stykker som spilles over hele verden.`,
    },
    {
      id: 'norsk-vg3-9-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Jon Fosses dramatikk?',
        options: [
          { id: 'a', text: 'Mange karakterer og komplisert handling', isCorrect: false },
          { id: 'b', text: 'Minimalistisk språk, pauser og det usagte', isCorrect: true },
          { id: 'c', text: 'Historiske kostymedrama', isCorrect: false },
          { id: 'd', text: 'Musikalske komedier', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Fosses drama kjennetegnes av minimalistisk språk, mange pauser, gjentakelser og fokus på det usagte. Karakterene snakker ofte forbi hverandre, og det som ikke sies er like viktig som ordene.',
      },
    },
    {
      id: 'norsk-vg3-9-4-n-section4',
      type: 'text',
      content: `## Fra Ibsen til Fosse - hva forbinder dem?

Ved første øyekast er Ibsen og Fosse motsetninger. Ibsen er full av ord, avsløringer, konfrontasjoner. Fosse er full av taushet, venting, det uuttalte.

Men de har også noe felles: Begge bruker tilsynelatende enkle, hverdagslige situasjoner for å utforske dype menneskelige spørsmål. Begge er opptatt av det som skjer under overflaten. Begge skriver om mennesker som strever med å forstå hverandre og seg selv.

Ibsen avdekker det skjulte gjennom dialog. Fosse lar det skjulte forbli delvis skjult - men vi aner det.

Begge har preget verdensteatret. Ibsen la grunnlaget for det moderne realistiske drama. Fosse fornyer det igjen, med en minimalisme som svarer til vår egen urolige tid.

Norge - et land med fem millioner mennesker - har gitt verden to av teaterhistoriens viktigste stemmer. Det er en arv å være stolt av.`,
    },
    {
      id: 'norsk-vg3-9-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva har Ibsen og Fosse til felles?',
        options: [
          { id: 'a', text: 'De bruker samme dramatiske teknikk', isCorrect: false },
          { id: 'b', text: 'Begge utforsker det som skjer under overflaten i hverdagslige situasjoner', isCorrect: true },
          { id: 'c', text: 'Begge skriver bare komedier', isCorrect: false },
          { id: 'd', text: 'Begge skriver på nynorsk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Til tross for ulik stil, har Ibsen og Fosse felles at de bruker tilsynelatende enkle, hverdagslige situasjoner for å utforske dype menneskelige spørsmål - det som skjer under overflaten.',
      },
    },
    {
      id: 'norsk-vg3-9-4-n-section5',
      type: 'text',
      content: `## Dramaets framtid

Teater har overlevd filmen, fjernsynet og internett. Det er noe med det å sitte i et mørkt rom med andre mennesker og se levende aktører på scenen som ikke kan erstattes.

Norsk drama lever videre. Nye dramatikere som **Arne Lygre**, **Fredrik Brattberg** og mange andre skriver stykker som utforsker samtiden. Teatrene i Oslo, Bergen, Trondheim og ellers i landet setter opp nye norske stykker ved siden av klassikerne.

Kanskje vil det komme en ny Ibsen, en ny Fosse - noen som finner en helt ny måte å fortelle historier på scenen. Kanskje sitter de allerede og skriver på sitt første stykke.

Det som er sikkert, er at behovet for drama ikke forsvinner. Mennesker vil alltid trenge historier om andre mennesker - og teater er en av de eldste og kraftigste måtene å fortelle dem på.`,
    },
    {
      id: 'norsk-vg3-9-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Når fikk Jon Fosse Nobelprisen i litteratur?',
        options: [
          { id: 'a', text: '2010', isCorrect: false },
          { id: 'b', text: '2015', isCorrect: false },
          { id: 'c', text: '2020', isCorrect: false },
          { id: 'd', text: '2023', isCorrect: true },
        ],
        correctAnswer: 'd',
        solution: 'Jon Fosse fikk Nobelprisen i litteratur i 2023 "for hans nyskapande skodespel og prosa som gjev røyst til det usegjelege." Han er den fjerde nordmannen som har fått litteraturprisen.',
      },
    },
    {
      id: 'norsk-vg3-9-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Henrik Ibsen (1828-1906):**
- Grunnleggeren av det moderne realistiske drama
- Analytisk dramaturgi, symbolbruk, komplekse karakterer
- "Et dukkehjem", "Gengangere", "Hedda Gabler"
- Mest spilt etter Shakespeare

**Mellom Ibsen og Fosse:**
- Nordahl Grieg: Politisk drama ("Vår ære og vår makt")
- Jens Bjørneboe: Provoserende teater
- Cecilie Løveid: Eksperimentell, poetisk

**Jon Fosse (f. 1959):**
- Nobelprisen 2023
- Minimalistisk, fokus på det usagte
- Pauser, gjentakelser, korte setninger
- "Og aldri skal vi skiljast", 30+ stykker

**Felles for Ibsen og Fosse:**
- Hverdagslige situasjoner, dype spørsmål
- Fokus på det som skjer under overflaten
- Verdensomspennende innflytelse`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG3_NARRATIV_DEL9_CHAPTERS = [
  CHAPTER_NORSK_VG3_9_1_NARRATIV,
  CHAPTER_NORSK_VG3_9_4_NARRATIV,
];
