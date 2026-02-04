/**
 * Norsk VG2 - Narrative versjoner Del 2 (Kapittel 2.1-2.11)
 * 1500-1850: Humanisme, barokk, opplysningstid
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1 NARRATIV: Humanismens ideer
// ============================================================================

export const CHAPTER_NORSK_VG2_2_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-2-1-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '2.1',
  title: 'Humanismens ideer',
  subtitle: 'Narrativ versjon',
  description: 'Reis tilbake til renessansen og oppdag hvordan humanismen forandret synet pa mennesket for alltid.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'reflektere over sakprosatekster og retorisk situasjon',
  ],
  linkedChapterId: 'norsk-vg2-2-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-2-1-n-intro',
      type: 'text',
      content: `## En ny tid begynner

Forestill deg at du lever pa 1300-tallet. Kirken bestemmer hva som er sant og usant. Prestene forteller deg at livet pa jorden egentlig bare er en forberedelse til det evige livet etterpaa. Kroppen din er syndig, og mennesket er svakt og avhengig av Guds nade. Din plass i verden er bestemt av hvilken stand du er fodt inn i - bonde, handverker, adel eller geistlig.

Sa, i de rike bystatene i Nord-Italia - Firenze, Venezia, Milano - begynner noe a skje. Kjopmennen har tjent seg rike pa handel. De har rad til fritid, til kunst, til a tenke. Og de begynner a stille sporsmaal: Hva om mennesket kan forme sin egen skjebne? Hva om livet her og na har verdi i seg selv? Hva om de gamle grekerne og romerne visste noe vi har glemt?

Velkommen til humanismen - den intellektuelle bevegelsen som skulle forandre Europa for alltid. I dette kapittelet skal vi reise tilbake til renessansen og oppdage hvordan et nytt menneskesyn vokste frem fra antikkens stov.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-2-1-n-section1',
      type: 'text',
      content: `## Hva var humanismen?

Navnet forteller oss mye. Humanisme kommer fra det latinske "studia humanitatis" - studiet av det menneskelige. Mens middelalderens laerde hadde viet seg til teologien, Guds vitenskap, vendte humanistene blikket mot mennesket selv.

Det betyr ikke at humanistene var ateister eller fiender av kirken. De fleste var fromme kristne. Men de mente at mennesket hadde fatt fornuft og fri vilje fra Gud, og at det var en plikt a bruke disse gavene. De mente at livet pa jorden hadde egenverdi, ikke bare som en provelse for a fortjene himmelen.

Humanistene gjenoppdaget antikkens tekster - filosofene Platon og Aristoteles, dikterne Homer og Vergil, taleren Cicero, historikerne Tacitus og Livius. I disse tekstene fant de en visdom de mente middelalderen hadde glemt: at mennesket kan utvikle seg, at fornuften er en kraftig ressurs, at skjonnhet og kunst har verdi.

Deres motto var "ad fontes" - til kildene. De ville lese originaltekstene selv, ikke stole pa middelalderens fortolkninger. Denne kritiske holdningen til autoritet - at man selv ma undersoke og tenke - ble et kjennetegn ved humanismen som fortsatt preger oss i dag.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva betyr det latinske uttrykket "ad fontes"?',
        options: [
          { id: 'a', text: 'Til Gud', isCorrect: false },
          { id: 'b', text: 'Til folket', isCorrect: false },
          { id: 'c', text: 'Til kildene', isCorrect: true },
          { id: 'd', text: 'Til fremtiden', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"Ad fontes" betyr "til kildene" og var humanistenes motto. De ville ga tilbake til originaltekstene fra antikken i stedet for a stole pa middelalderens fortolkninger. Denne kritiske holdningen til autoritet er fortsatt sentral i vitenskapen i dag.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-2-1-n-section2',
      type: 'text',
      content: `## Menneskesynet som forandret alt

Det mest revolusjonerende ved humanismen var synet pa mennesket. I middelalderen var mennesket forst og fremst en synder som trengte Guds nade for a bli frelst. Kroppen var en fengsel for sjelen, og det viktigste var a forberede seg pa dodsoyeblikket og livet etter doden.

Humanistene snudde dette pa hodet. De sa et menneske fullt av muligheter. I 1486 skrev den italienske filosofen Giovanni Pico della Mirandola en tekst som ble et manifest for humanismen: "Om menneskets verdighet". Her lar han Gud tale til Adam og si at mennesket ikke har fatt noen bestemt plass eller egenart - det er fritt til a forme seg selv.

Tenk over hvor radikalt dette var. Middelalderens menneske var bundet - til sin stand, til kirkens laere, til sin plass i Guds plan. Humanismens menneske var fritt - til a utvikle sine evner, til a forme sin karakter, til a strebe etter storhet.

Dette nye menneskesynet ga opphav til idealet om "homo universalis" - det universelle menneske. Et menneske som ikke bare mestret ett omrade, men mange: kunst og vitenskap, politikk og filosofi, kropp og and. Leonardo da Vinci, som var maler, skulptor, arkitekt, ingenjor, anatom og oppfinner, ble selve symbolet pa dette idealet.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva menes med begrepet "homo universalis"?',
        options: [
          { id: 'a', text: 'Det religiose menneske som soker Gud', isCorrect: false },
          { id: 'b', text: 'Det allsidige, dannede menneske som mestrer mange felt', isCorrect: true },
          { id: 'c', text: 'Det naturlige menneske uberorte av sivilisasjonen', isCorrect: false },
          { id: 'd', text: 'Det universelle menneske som er likt over hele verden', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Homo universalis" betyr "det universelle menneske" og var humanismens ideal om et allsidig dannet menneske som behersket mange kunster og vitenskaper. Leonardo da Vinci, som var bade kunstner, vitenskapsmann og oppfinner, regnes som det fremste eksempelet pa dette idealet.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-2-1-n-section3',
      type: 'text',
      content: `## Humanistenes studieprogram

Hvordan skulle man bli et slikt allsidig menneske? Humanistene hadde et svar: studia humanitatis. Dette studieprogrammet besto av fem fag som til sammen skulle danne det hele menneske.

Forst var det grammatikk - ikke bare regler for riktig sprak, men studiet av sprak som nokkelen til a forsta tekster. Humanistene laerte latin og gresk for a lese antikkens tekster i original.

Deretter retorikk - talekunsten. Et dannet menneske matte kunne uttrykke seg klart og overbevisende. Ciceros taler ble studert som modeller.

Sa kom historie - for a forsta samtiden matte man kjenne fortiden. Historien ga eksempler pa storhet og fall som man kunne laere av.

Poesi og litteratur var det fjerde faget. Gjennom dikterne fikk man innsikt i menneskets natur, i folelser og skjebne.

Til slutt moralfilosofi - etikk. Hvordan skulle man leve? Hva var det gode? Filosofene ga veiledning.

Legg merke til hva som mangler: teologi. Ikke fordi humanistene var irreligiose, men fordi de ville danne mennesket for livet i denne verden, ikke bare for det hinsidige.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilke fag inngikk i humanistenes studieprogram "studia humanitatis"?',
        options: [
          { id: 'a', text: 'Teologi, latin, matematikk, astronomi og medisin', isCorrect: false },
          { id: 'b', text: 'Grammatikk, retorikk, historie, poesi og moralfilosofi', isCorrect: true },
          { id: 'c', text: 'Jus, okonomi, politikk, krigskunst og diplomati', isCorrect: false },
          { id: 'd', text: 'Musikk, maleri, skulptur, arkitektur og dans', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Humanistenes studieprogram besto av grammatikk (sprakstudier), retorikk (talekunst), historie, poesi og moralfilosofi. Disse fagene skulle danne det hele menneske for livet i samfunnet. Merk at teologi ikke var med - humanistene ville danne mennesket for dette livet, ikke bare for det hinsidige.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-2-1-n-section4',
      type: 'text',
      content: `## Humanismen kommer til Norden

Mens Italia blomstret med kunst og laerdom pa 1400-tallet, var Norden fortsatt preget av middelalderens tankesett. Det tok tid for de nye ideene reiste nordover. Forst pa 1500-tallet begynte humanismen a gjore seg gjeldende i Skandinavia.

Her ble humanismen nart knyttet til en annen stor omveltning: reformasjonen. Martin Luther og andre reformatorer delte humanistenes ideal om a ga tilbake til kildene - for dem betydde det Bibelen pa originalsprakene, ikke de latinske oversettelsene kirken brukte.

I Danmark-Norge var Christiern Pedersen en viktig skikkelse. Han oversatte Bibelen til dansk og gjorde den tilgjengelig for vanlige folk. I Sverige skrev Olaus Magnus om nordisk historie og geografi. I Norge oversatte presten Peder Clausson Friis Snorres kongesagaer til et sprak samtiden kunne forsta.

Norge var pa denne tiden under dansk styre, og de humanistiske impulsene kom hovedsakelig gjennom Kobenhavn og kirken. Kobenhavn var senteret for laerdom i det dansk-norske riket, og det var dit nordmenn som ville studere matte reise.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-2-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor ble humanismen knyttet til reformasjonen i Norden?',
        options: [
          { id: 'a', text: 'Fordi bade humanister og reformatorer ville avvikle kristendommen', isCorrect: false },
          { id: 'b', text: 'Fordi begge bevegelser la vekt pa a ga tilbake til originalkildene', isCorrect: true },
          { id: 'c', text: 'Fordi kongen patvang begge ideene samtidig', isCorrect: false },
          { id: 'd', text: 'Fordi humanistene og reformatorene var de samme personene', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bade humanister og reformatorer delte idealet om "ad fontes" - a ga tilbake til originalkildene. For humanistene betydde det antikkens tekster pa gresk og latin. For reformatorene betydde det Bibelen pa originalsprakene. Begge kritiserte at kirken stolte pa middelalderens fortolkninger i stedet for originaltekstene.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-2-1-n-section5',
      type: 'text',
      content: `## Humanismens arv lever videre

Humanismen var ikke bare en historisk epoke som kom og gikk. Den grunnla verdier og idealer som fortsatt preger var verden.

Tenk pa menneskerettighetene. Tanken om at alle mennesker har iboende verdi og verdighet - er det ikke et ekko av Picos tale om menneskets verdighet? FNs menneskerettighetserklaring bygger pa humanistiske ideer om menneskets rasjonalitet og frihet.

Tenk pa utdanningssystemet. Idealet om allmenndannelse - at utdanning ikke bare skal gi yrkeskompetanse, men forme det hele menneske - kommer fra humanismen. Nar vi leser skonlitteratur pa skolen, studerer historie og laerer kritisk tenkning, folger vi i humanistenes fotspor.

Tenk pa individualismen i var kultur. Tanken om at du som enkeltmenneske har verdi, at du kan forme din egen skjebne, at dine valg betyr noe - dette er humanistiske ideer som vi tar for gitt.

Men humanismen har ogsa sine kritikere. Noen mener individualismen har gatt for langt og at vi har mistet folelsen av fellesskap. Andre peker pa at humanismen historisk var forbeholdt en elite av hvite, europeiske menn. Hvem fikk egentlig lov til a vaere "homo universalis"?

Likevel: Nar du argumenterer med fornuft, nar du soker kunnskap for dens egen skyld, nar du tror pa menneskets muligheter - da er du humanist, enten du vet det eller ikke.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-2-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilken moderne ide har sterke røtter i humanismen?',
        options: [
          { id: 'a', text: 'Kapitalisme og fri markedsøkonomi', isCorrect: false },
          { id: 'b', text: 'Menneskerettigheter og iboende menneskeverd', isCorrect: true },
          { id: 'c', text: 'Nasjonalstaten og patriotisme', isCorrect: false },
          { id: 'd', text: 'Industrialisering og masseproduksjon', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Menneskerettighetene bygger pa humanistiske ideer om at alle mennesker har iboende verdi og verdighet, og at mennesket har fornuft og fri vilje. FNs menneskerettighetserklaring er et moderne uttrykk for humanistiske verdier som ble formulert allerede pa 1400-tallet av tenkere som Pico della Mirandola.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Humanismens hovedpunkter

Du har na lart om humanismen - den bevegelsen som forandret Europas syn pa mennesket. Her er det viktigste a huske:

**Hva var humanismen?**
En intellektuell bevegelse som oppsto i Italia pa 1300-tallet og satte mennesket i sentrum for sin tenkning. Humanistene gjenoppdaget antikkens tekster og mente de inneholdt tidlos visdom.

**Humanismens menneskesyn:**
Mennesket har fornuft og fri vilje. Det kan forme sin egen skjebne og har uante muligheter for utvikling. Livet pa jorden har egenverdi. Dette var et brudd med middelalderens fokus pa arvesynden.

**Nokkelbegrepper:**
- **Humanisme:** Bevegelsen som setter mennesket i sentrum
- **Renessanse:** "Gjenfodelse" - perioden da antikken ble gjenoppdaget
- **Studia humanitatis:** Humanistenes studieprogram (grammatikk, retorikk, historie, poesi, moralfilosofi)
- **Ad fontes:** "Til kildene" - motto om a lese originaltekstene
- **Homo universalis:** Idealet om det allsidige dannede menneske

**Humanismens verdier:**
Individualisme, rasjonalitet, dannelse, toleranse og estetikk. Disse verdiene preger fortsatt var verden gjennom menneskerettigheter, utdanningssystemer og tro pa individets muligheter.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2 NARRATIV: Bibeloversettelser og trykkpressen
// ============================================================================

export const CHAPTER_NORSK_VG2_2_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-2-2-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '2.2',
  title: 'Bibeloversettelser og trykkpressen',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hvordan to revolusjoner - trykkpressen og reformasjonen - forandret spraket og kulturen for alltid.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'gjore rede for historisk bakgrunn for spraksituasjonen i Norge',
  ],
  linkedChapterId: 'norsk-vg2-2-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-2-2-n-intro',
      type: 'text',
      content: `## To revolusjoner som forandret verden

Rundt ar 1450 sitter en mann i Mainz i Tyskland og eksperimenterer med metallbokstaver og trykksverte. Johannes Gutenberg aner ikke at han holder pa a starte en revolusjon. Hans trykkpresse med bevegelige typer vil forandre hvordan mennesker far tilgang til kunnskap, hvordan ideer spres, og til slutt hvordan makt er fordelt i samfunnet.

Noen tiaar senere, i 1517, spikrer en munk ved navn Martin Luther 95 teser pa kirkedoren i Wittenberg. Han kritiserer kirkens salg av avlat - kvitteringer som angivelig kunne kjope sjeler ut av skjaersilden. Luther aner heller ikke helt hva han har satt i gang. Reformasjonen vil splitte kristenheten, omforme Europas politiske kart, og - ikke minst - forandre spraket for alltid.

Disse to revolusjonene - den teknologiske og den religiose - hang sammen pa forunderlige mater. Uten trykkpressen ville ikke Luthers ideer spredt seg sa raskt. Uten reformasjonen ville ikke folkesprakene fatt den statusen de fikk. La oss se naermere pa hvordan dette skjedde.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-2-2-n-section1',
      type: 'text',
      content: `## Gutenbergs oppfinnelse

For trykkpressen kom, ble boker kopiert for hand av munker i klostre. En enkelt bok kunne ta maneder eller ar a produsere. Boker var dyre, sjeldne og forbeholdt den laerde eliten - prestene, munkene og de fa som hadde rad til a betale.

Gutenbergs oppfinnelse endret alt. Med bevegelige metalltyper kunne man sette sammen sider, trykke hundrevis av kopier, og deretter bruke de samme typene til neste bok. Det som for tok maneder, tok na dager. Det som kostet en formue, ble plutselig overkommelig.

Den forste store boken Gutenberg trykket var Bibelen - den sakalte 42-linjede Bibelen, trykt rundt 1455. Den var et mesterverk av boktrykkerkunst, men fortsatt pa latin, som var kirkens og de laerdes sprak.

Det tok ikke lang tid for trykkpressen spredte seg over Europa. Innen 1500 fantes det trykkerier i alle storre europeiske byer. Det antas at det ble trykt omkring 20 millioner boker i lopet av de forste 50 arene etter Gutenbergs oppfinnelse. Sammenlignet med middelalderens noen tusen handskrevne boker var dette en eksplosjon.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Nar ble Gutenbergs trykkpresse oppfunnet?',
        options: [
          { id: 'a', text: 'Ca. 1350', isCorrect: false },
          { id: 'b', text: 'Ca. 1450', isCorrect: true },
          { id: 'c', text: 'Ca. 1550', isCorrect: false },
          { id: 'd', text: 'Ca. 1650', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Johannes Gutenberg oppfant trykkpressen med bevegelige typer rundt ar 1450 i Mainz i Tyskland. Den forste store boken han trykket var den sakalte 42-linjede Bibelen, fullfort rundt 1455. Dette regnes som en av de viktigste oppfinnelsene i europeisk historie.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-2-2-n-section2',
      type: 'text',
      content: `## Luther og Bibelen pa folkesprak

Martin Luther var augustinermunk og professor i teologi i Wittenberg. Da han i 1517 offentliggjorde sine 95 teser mot avlatshandelen, var det egentlig ment som en akademisk debatt. Men trykkpressen gjorde at tesene spredte seg over hele Tyskland pa bare noen uker. Luther ble over natten en berømt - og beryktet - mann.

Men Luthers storste bidrag til sprakhistorien var bibeloversettelsen. I 1521 ble Luther lyst fredlos og matte gjemme seg pa borgen Wartburg. Der brukte han tiden til a oversette Det nye testamente til tysk. Det ble ferdig i 1522, og hele Bibelen fulgte i 1534.

Luther oversatte ikke bare - han skapte. Han ville at vanlige folk skulle forsta, sa han "sa folket pa munnen" og brukte et levende, konkret sprak. Hans oversettelse ble sa innflytelsesrik at den regnes som grunnlaget for moderne tysk skriftsprak.

Luthers prinsipp var "sola scriptura" - skriften alene. Bare Bibelen, ikke pavens eller kirkens tradisjoner, var autoriteten i trossporsmal. Men da matte folk kunne lese Bibelen selv. Og det krevde at den fantes pa deres eget sprak.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva betydde Luthers prinsipp "sola scriptura"?',
        options: [
          { id: 'a', text: 'At man bare skulle skrive pa latin', isCorrect: false },
          { id: 'b', text: 'At Bibelen alene var autoritet i trossporsmal', isCorrect: true },
          { id: 'c', text: 'At alle boker skulle trykkes', isCorrect: false },
          { id: 'd', text: 'At paven var ufeilbarlig', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Sola scriptura" er latin og betyr "skriften alene". Det var Luthers prinsipp om at Bibelen er den eneste autoriteten i trossporsmal - ikke pavens vedtak, ikke kirkens tradisjoner. Dette krevde at vanlige folk kunne lese Bibelen selv, noe som forutsatte oversettelser til folkesprakene.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-2-2-n-section3',
      type: 'text',
      content: `## Reformasjonen i Danmark-Norge

I 1536 ble Danmark-Norge offisielt protestantisk. Kong Christian III innforte den lutherske tro, konfiskerte kirkens eiendommer og gjorde seg selv til overhode for kirken. For vanlige folk betydde dette store endringer i hverdagen: Gudstjenesten var na pa dansk, ikke latin. Prestene kunne gifte seg. Klostervesenet ble oppløst.

Det viktigste for sprakhistorien var Christian IIIs bibel fra 1550 - den forste fullstendige bibeloversettelsen til dansk. Denne bibelen ble normen for dansk skriftsprak i flere hundre ar. Den ble lest i kirken og i hjemmene, brukt i skolen og som lovbok.

For Norge fikk dette enorme konsekvenser. Norge var pa denne tiden underlagt dansk styre, og dansk ble na det offisielle skriftspraket. Nordmenn talte sine norske dialekter, men leste og skrev dansk. Denne kløften mellom talesprak og skriftsprak skulle vare helt til 1800-tallet og ligger bak var tids sprakdebatt mellom bokmal og nynorsk.

Na kan du sporge: Hvorfor fikk ikke Norge sin egen bibeloversettelse? Svaret er enkelt: Norge hadde ikke eget universitet (det kom forst i 1811) og ikke eget boktrykkeri (det forste kom i 1643). All laerdom og all bokproduksjon i det dansk-norske riket var sentrert i Kobenhavn.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-2-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva var Christian IIIs bibel?',
        options: [
          { id: 'a', text: 'En bok om kongens liv', isCorrect: false },
          { id: 'b', text: 'Den forste fullstendige bibeloversettelsen til dansk', isCorrect: true },
          { id: 'c', text: 'En samling norske folkeeventyr', isCorrect: false },
          { id: 'd', text: 'En latinsk grammatikk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Christian IIIs bibel fra 1550 var den forste fullstendige bibeloversettelsen til dansk. Den ble normen for dansk skriftsprak og ble brukt i bade Danmark og Norge i flere hundre ar. For Norge betydde dette at dansk ble det offisielle skriftspraket.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-2-2-n-section4',
      type: 'text',
      content: `## Trykkpressen og reformasjonen - en symbiotisk revolusjon

Trykkpressen og reformasjonen forsterket hverandre. Uten trykkpressen ville ikke Luthers ideer spredt seg sa raskt - hans skrifter kunne trykkes i tusenvis av eksemplarer og na ut til hele Europa pa kort tid. Uten reformasjonens krav om a lese Bibelen pa eget sprak ville ikke folkesprakene utviklet seg til skriftsprak.

Trykkpressen demokratiserte kunnskap. For hadde kirken naermest monopol pa informasjon - prestene leste Bibelen pa latin og fortalte folket hva den betydde. Na kunne folk lese selv og gjore seg opp sin egen mening.

Men trykkpressen spredte ikke bare sannhet - den spredte ogsa det vi i dag ville kalle propaganda og falske nyheter. Bade reformatorer og katolikker brukte trykte pamfletter til a angripe motstanderne med overdrivelser og karikaturer. Informasjonskrigen er like gammel som trykkpressen.

Det er interessant a sammenligne med internett i var tid. Bade trykkpressen og internett revolusjonerte informasjonsspredning, utfordret etablerte maktstrukturer, og forte til bade opplysning og desinformasjon. Kanskje er vi midt i en revolusjon like stor som den Gutenberg og Luther satte i gang?`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-2-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvordan hang trykkpressen og reformasjonen sammen?',
        options: [
          { id: 'a', text: 'Luther oppfant trykkpressen for a spre Bibelen', isCorrect: false },
          { id: 'b', text: 'Trykkpressen gjorde at reformasjonens ideer kunne spres raskt, og reformasjonen skapte etterspørsel etter boker pa folkesprak', isCorrect: true },
          { id: 'c', text: 'Kirken forbod trykkpressen fordi den truet reformasjonen', isCorrect: false },
          { id: 'd', text: 'Det var ingen sammenheng mellom dem', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Trykkpressen og reformasjonen forsterket hverandre. Trykkpressen gjorde at Luthers ideer kunne spres til tusenvis av mennesker pa kort tid. Reformasjonens krav om a lese Bibelen pa eget sprak skapte stor etterspørsel etter trykte boker pa folkesprakene. Sammen forandret de europeisk kultur.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-2-2-n-section5',
      type: 'text',
      content: `## Arven etter den spraklige revolusjonen

Reformasjonen la grunnlaget for den norske sprakdebatten vi fortsatt har i dag. Kløften mellom dansk skriftsprak og norsk talesprak skapte en situasjon som var unik i Europa. Nordmenn skrev ett sprak og snakket et annet.

Pa 1800-tallet, etter at Norge ble selvstendig i 1814, begynte diskusjonen: Hva skulle det norske skriftspraket vaere? Ivar Aasen reiste rundt og samlet dialekter for a skape et nytt norsk skriftsprak basert pa talemalet - det som ble nynorsk. Knud Knudsen ville i stedet fornorske det danske skriftspraket gradvis - det som ble bokmal.

Denne debatten hadde ikke eksistert uten reformasjonen. Det var reformasjonen som gjorde dansk til skriftsprak i Norge. Det var reformasjonen som skapte en 300 ar lang periode der nordmenn leste og skrev dansk mens de snakket norsk.

Sa nar du skriver bokmal eller nynorsk i dag, nar du diskuterer sprakpolitikk eller undrer deg over hvorfor Norge har to skriftsprak, kan du takke - eller klandre - Martin Luther og Christian III. Deres religiose og politiske valg for 500 ar siden former fortsatt hverdagen var.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-2-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvordan la reformasjonen grunnlaget for den norske sprakdebatten?',
        options: [
          { id: 'a', text: 'Luther forbod norsk sprak', isCorrect: false },
          { id: 'b', text: 'Reformasjonen gjorde dansk til skriftsprak i Norge, noe som skapte kløft mellom tale og skrift', isCorrect: true },
          { id: 'c', text: 'Nordmenn sluttet a snakke norsk', isCorrect: false },
          { id: 'd', text: 'Christian III opprettet to offisielle skriftsprak', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Reformasjonen og Christian IIIs bibel gjorde dansk til det offisielle skriftspraket i Norge. Nordmenn fortsatte a snakke norske dialekter, men skrev dansk. Denne kløften mellom tale og skrift varte i over 300 ar og ligger bak dagens sprakdebatt mellom bokmal og nynorsk.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering: To revolusjoner som forandret spraket

Du har na lart om hvordan trykkpressen og reformasjonen sammen forandret europeisk kultur og sprakhistorie. Her er hovedpunktene:

**Gutenbergs trykkpresse (ca. 1450):**
Bevegelige metalltyper gjorde det mulig a masseprodusere boker. Boker ble billigere og mer tilgjengelige. Kunnskap ble demokratisert.

**Luthers reformasjon (1517-):**
Luther kritiserte den katolske kirkens praksis og krevde at folk skulle kunne lese Bibelen selv. Hans prinsipp "sola scriptura" - skriften alene - krevde bibler pa folkesprakene.

**Reformasjonen i Danmark-Norge (1536):**
Christian III innforte lutherdommen og bestilte den forste fullstendige danske bibeloversettelsen (1550). Dansk ble skriftsprak i hele riket, inkludert Norge.

**Nokkelbegrepper:**
- **Sola scriptura:** "Skriften alene" - Bibelen som eneste autoritet
- **Trykkpresse:** Gutenbergs oppfinnelse som revolusjonerte bokproduksjon
- **Christian IIIs bibel (1550):** Forste fullstendige danske bibel, normen for skriftspraket
- **Sprakkløften:** Nordmenn skrev dansk men snakket norsk - grunnlaget for dagens sprakdebatt

**Langsiktige konsekvenser:**
Reformasjonen la grunnlaget for den norske sprakdebatten mellom bokmal og nynorsk. Kløften mellom dansk skriftsprak og norsk talesprak varte i over 300 ar.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3 NARRATIV: Petter Dass - dikterpresten
// ============================================================================

export const CHAPTER_NORSK_VG2_2_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-2-3-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '2.3',
  title: 'Petter Dass - dikterpresten',
  subtitle: 'Narrativ versjon',
  description: 'Møt Norges forste store dikter - presten som forvandlet Helgelands kyst til poesi.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  linkedChapterId: 'norsk-vg2-2-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-2-3-n-intro',
      type: 'text',
      content: `## En stemme fra nord

Tenk deg at du star pa Helgelandskysten en vintermorgen pa 1600-tallet. Stormen hyler rundt deg, bolgene braker mot svabergene, og nordlyset danser over himmelen. I en liten kirke sitter en prest og skriver. Han skriver om dette landskapet - om havet, om fisken, om folket som lever her. Han skriver dikt som forener barokkens kunstneriske form med nordnorsk natur og folkeliv.

Denne presten heter Petter Dass, og han regnes som Norges forste store dikter. Hans verk "Nordlands Trompet" er et unikt dokument - en poetisk reise gjennom hele Nordland fylke, fra sor til nord. Men Dass var mer enn en naturskildrer. Han var ogsa salmedikter, og hans "Katekismesanger" ble sunget i norske skoler helt frem til 1900-tallet.

La oss bli kjent med denne mannen som, fra sin prestegard pa Alstahaug, skrev seg inn i litteraturhistorien og norsk kulturarv.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-2-3-n-section1',
      type: 'text',
      content: `## Et liv mellom himmel og hav

Petter Dass ble fodt i 1647 pa Heroy i Helgeland. Faren var skotsk - han het egentlig Peter Dundas og hadde kommet til Norge som handelsmann. Moren var norsk. Denne blandede bakgrunnen ga kanskje Dass et bredere perspektiv - han var bade rotfestet i lokalmiljoet og apnet mot verden utenfor.

Som ung reiste Dass til Kobenhavn for a studere teologi - det fantes jo ikke noe universitet i Norge pa den tiden. Der motte han barokkens laerde kultur, de klassiske diktformene, den religiose intensiteten som preget epoken. Men i motsetning til mange av sine samtidige, glemte han aldri hvor han kom fra.

I 1672 ble Dass prest pa Nesna, og i 1689 ble han sogneprest i Alstahaug - en stilling han hadde til sin dod i 1707. Som prest hadde han ansvar for et enormt omrade med spredt bosetting. Han matte reise lange avstander i apen bat for a betjene menighetene - ved dap, bryllup, begravelser og gudstjenester. Denne naerheten til havet, til folket og til naturens krefter preger diktningen hans.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvor virket Petter Dass som prest?',
        options: [
          { id: 'a', text: 'I Bergen', isCorrect: false },
          { id: 'b', text: 'I Kobenhavn', isCorrect: false },
          { id: 'c', text: 'Pa Helgeland i Nord-Norge', isCorrect: true },
          { id: 'd', text: 'I Trondheim', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Petter Dass var prest pa Nesna fra 1672 og sogneprest i Alstahaug fra 1689 til sin dod i 1707 - begge steder pa Helgelandskysten i Nord-Norge. Hans naere kjennskap til dette landskapet og folket der preger hele hans diktning.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-2-3-n-section2',
      type: 'text',
      content: `## Nordlands Trompet - et dikt om et landskap

Dass' hovedverk er "Nordlands Trompet" - et topografisk dikt som beskriver Nordland fylke fra sor til nord. Verket ble ikke trykt i Dass' levetid - Norge hadde jo ikke eget boktrykkeri for i 1643, og a fa bøker trykt i Kobenhavn var kostbart og komplisert. I stedet sirkulerte diktet i handskrevne avskrifter. Forst i 1739, over 30 ar etter Dass' dod, ble det endelig trykt.

Hva er et topografisk dikt? Det er et dikt som beskriver et geografisk omrade systematisk. Dass folger kysten nordover og beskriver hvert prestegjeld: landskapet, fiskeriene, folkelivet, naturforholdene. Han navngir konkrete steder, beskriver fiskesorter og fuglearter, skildrer hvordan folk levde og arbeidet.

Dette var helt uvanlig for sin tid. De fleste barokkdiktere skrev om abstrakte, hoytstemte temaer - om Guds storhet, om livets forgjengelighet, om kjærlighet og dod. Dass skrev ogsa om dette, men han forankret det i en konkret virkelighet. Nar han lovpriser Gud, gjor han det gjennom a beskrive skaperverket slik det faktisk ser ut i Nord-Norge.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er et topografisk dikt?',
        options: [
          { id: 'a', text: 'Et dikt om kjærlighet', isCorrect: false },
          { id: 'b', text: 'Et dikt som beskriver et geografisk omrade systematisk', isCorrect: true },
          { id: 'c', text: 'Et dikt skrevet pa latin', isCorrect: false },
          { id: 'd', text: 'Et dikt ment for a synges i kirken', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Et topografisk dikt beskriver et bestemt geografisk omrade - landskap, natur, folk og naeringer. Petter Dass\' "Nordlands Trompet" er det mest kjente topografiske diktet i norsk litteratur og beskriver Nordland fylke fra sor til nord.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-2-3-n-section3',
      type: 'text',
      content: `## Katekismesangene - salmer for folket

Ved siden av Nordlands Trompet skrev Dass "Katekismesanger" - en samling salmer som forklarer Luthers lille katekisme. Katekismen var den grunnleggende laereboken i kristendom, og alle skulle kunne den. Dass' bidrag var a gjore den sangbar.

Tenk pa hvor viktig dette var i et samfunn uten radio, TV eller internett. Folk laerte gjennom a synge. Dass' katekismesanger ble brukt i norske skoler helt frem til 1900-tallet - det er over 200 ar med barn som laerte troslaeren gjennom hans vers.

Salmene viser Dass' evne til a formidle komplisert teologisk stoff pa en enkel og folkelig mate. Han bruker bilder fra hverdagen, rim som er lette a huske, og melodier som sitter. Her kommer dikterpresten til sin rett: Han har laerdommen fra Kobenhavn, men vet hvordan han skal na frem til fiskeren og bonden.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-2-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva var Katekismesangene?',
        options: [
          { id: 'a', text: 'Folkesanger fra Nord-Norge', isCorrect: false },
          { id: 'b', text: 'Kongelige hyllingsdikt', isCorrect: false },
          { id: 'c', text: 'Salmer som forklarte Luthers lille katekisme', isCorrect: true },
          { id: 'd', text: 'Dikt om naturen i Nordland', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Katekismesangene var salmer Dass skrev for a forklare Luthers lille katekisme pa en folkelig og sangbar mate. De ble enormt populaere og var i bruk i norske skoler helt frem til 1900-tallet - over 200 ar etter at de ble skrevet.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-2-3-n-section4',
      type: 'text',
      content: `## Barokke trekk hos Dass

Petter Dass horer hjemme i barokken som litteraer epoke. Men hva betyr det?

Barokken (ca. 1600-1750) kjennetegnes av kontraster, overdadighet og religiost alvor. Barokkdikterne elsket a sette motsetninger opp mot hverandre: lys og morke, liv og dod, himmel og jord. De brukte rikt bildesprak og sterke folelser. Og de var dypt opptatt av livets forgjengelighet - det som pa latin kalles "vanitas".

Hos Dass finner vi alle disse trekkene, men i en saeregen nordnorsk tapning. Kontrastene er der - mellom Guds storhet og menneskets litenhet, mellom havets makt og menneskets skrobelighet. Den rike billedbruken er der - men bildene er hentet fra nordnorsk natur, ikke fra klassisk mytologi. Det religiose alvoret er der - men kombinert med en folkelig humor og livsglede som var uvanlig i barokken.

Salmen "Herre Gud, ditt dyre navn og aere" er et godt eksempel. Den er hoytidelig og religiost alvorlig, full av barokkens patos. Men den har ogsa en varme og naerhet som gjor at den fortsatt synges i norske kirker over 300 ar senere.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-2-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilke barokktrekk finner vi hos Petter Dass?',
        options: [
          { id: 'a', text: 'Noktert sprak og fokus pa hverdagen', isCorrect: false },
          { id: 'b', text: 'Kontraster, rik billedbruk og religiost alvor', isCorrect: true },
          { id: 'c', text: 'Ironi og samfunnskritikk', isCorrect: false },
          { id: 'd', text: 'Realistiske beskrivelser uten folelser', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Barokken kjennetegnes av sterke kontraster (lys/morke, liv/dod), rik billedbruk og religiost alvor. Dass viser alle disse trekkene, men i en saeregen form der de barokke virkemidlene kombineres med konkret nordnorsk natur og folkeliv.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-2-3-n-section5',
      type: 'text',
      content: `## Dass' betydning og etterliv

Hvorfor regnes Petter Dass som Norges forste store dikter? For det forste var han den forste som skrev om Norge pa en mate som ble lest og verdsatt. For Dass fantes det knapt norsk litteratur - Norge var en provins i det danske riket, og litteraturen ble skrevet i Kobenhavn.

For det andre skapte Dass noe unikt: En forening av laerd form og folkelig innhold. Han behersket barokkens kunstneriske virkemidler, men brukte dem til a skildre virkeligheten han kjente - Nord-Norges natur og folk.

For det tredje har verkene hans overlevd. Nordlands Trompet leses fortsatt som et fascinerende tidsdokument. Salmene hans synges fortsatt i kirker. "Herre Gud, ditt dyre navn og aere" er en av de mest kjente norske salmene.

Pa Alstahaug, der Dass virket som prest, star det na et museum viet til hans minne. Hvert ar arrangeres Petter Dass-dagene med konserter og foredrag. Hans ansikt har pryd norske frimerker. Og i Nord-Norge er han en folkehelt - dikterpresten som loftet landsdelen inn i litteraturen.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-2-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor regnes Petter Dass som Norges forste store dikter?',
        options: [
          { id: 'a', text: 'Fordi han var den forste som skrev pa norsk', isCorrect: false },
          { id: 'b', text: 'Fordi han skrev de forste norske romanene', isCorrect: false },
          { id: 'c', text: 'Fordi han var den forste som skrev om Norge pa en mate som ble lest og verdsatt, og forente laerd form med folkelig innhold', isCorrect: true },
          { id: 'd', text: 'Fordi kongen utnevnte ham til riksdikter', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Dass var den forste som skrev om norsk natur og folkeliv pa en mate som ble bredt lest og verdsatt. Han kombinerte barokkens kunstneriske form med konkret nordnorsk innhold - en forening av laerdom og folkelighet som var unik for sin tid.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Petter Dass - dikterpresten fra nord

Du har na blitt kjent med Petter Dass, Norges forste store dikter. Her er hovedpunktene:

**Liv og virke:**
Petter Dass (1647-1707) ble fodt pa Heroy, studerte i Kobenhavn og virket som prest pa Helgeland. Han hadde ansvar for et enormt omrade og reiste i apen bat mellom menighetene.

**Hovedverk:**
- **Nordlands Trompet:** Et topografisk dikt som beskriver Nordland fra sor til nord - natur, folk, naeringer. Trykt forst i 1739, lenge etter hans dod.
- **Katekismesangene:** Salmer som forklarer Luthers katekisme. Brukt i norske skoler i over 200 ar.

**Nokkelbegrepper:**
- **Topografisk dikt:** Dikt som beskriver et geografisk omrade systematisk
- **Barokk:** Litteraer epoke ca. 1600-1750, preget av kontraster, rik billedbruk og religiost alvor
- **Katekismesanger:** Salmer som formidler kristen laere

**Kjennetegn ved Dass' diktning:**
- Konkret skildring av norsk natur og folkeliv
- Folkelig tone kombinert med laerd form
- Humor og livsglede
- Dyp religiøsitet

**Betydning:**
Dass var den forste som skrev om Norge pa en mate som ble lest og verdsatt. Hans salmer synges fortsatt, og Nordlands Trompet er et unikt tidsdokument fra 1600-tallets Nord-Norge.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4 NARRATIV: Barokkens kjennetegn
// ============================================================================

export const CHAPTER_NORSK_VG2_2_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-2-4-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '2.4',
  title: 'Barokkens kjennetegn',
  subtitle: 'Narrativ versjon',
  description: 'Dykk ned i barokkens verden av kontraster, forgjengelighet og religiost alvor.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  linkedChapterId: 'norsk-vg2-2-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-2-4-n-intro',
      type: 'text',
      content: `## En verden av kontraster

Tenk deg Europa pa 1600-tallet. Religionskrigene herjer kontinentet - protestanter og katolikker slakter hverandre i Guds navn. Pesten kommer og gar og tar med seg millioner av liv. Vitenskapsmenn som Galileo viser at jorden ikke er universets sentrum, og det gamle verdensbildet vakler.

I denne urolige tiden vokser det frem en kunstretning som speiler tidens spenninger: barokken. Ordet kommer trolig fra portugisisk "barroco" - en uregelmessig perle. Og barokken er nettopp uregelmessig, overdadig, full av spenninger og kontraster.

Barokken elsket motsetningene: lys mot morke, liv mot dod, glede mot sorg, det himmelske mot det jordiske. Den dyrket det voldsomme, det overveldende, det folelsesmessig intense. Og midt i all prakt og overdadighet lurer alltid bevisstheten om at alt er forgjengelig - at doden venter.

La oss utforske denne fascinerende epoken naermere.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-2-4-n-section1',
      type: 'text',
      content: `## Barokkens historiske bakgrunn

For a forsta barokken ma vi forsta tiden den oppsto i. 1600-tallet var en tid preget av krig, sykdom og religiøs splittelse.

Trettiårskrigen (1618-1648) la store deler av Sentral-Europa i ruiner. I noen omrader ble befolkningen halvert. Mennesker som hadde overlevd krigen, kunne plutselig do av pest - epidemier herjet stadig. Doden var ikke noe abstrakt, men en daglig realitet.

Samtidig utfordret vitenskapen det gamle verdensbildet. Galileo Galilei viste at jorden kretset rundt solen, ikke omvendt. Isaac Newton formulerte lover for hvordan naturen fungerer. Den trygge, Gud-sentrerte verdensforstaelsen ble rystet.

Den katolske kirken, som hadde mistet mye makt gjennom reformasjonen, slo tilbake med det som kalles motreformasjonen. Kirken brukte kunst - maleri, arkitektur, musikk - som propaganda for a vinne tilbake sjeler. De massive barokkkirkene med sine forgylte altre, dramatiske malerier og overveldendem orgler var ment a overvelde sansene og styrke troen.

Denne konteksten - krig, dod, vitenskapelig usikkerhet og religiøs kamp - former barokkens kunst og litteratur.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-2-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilke historiske forhold preget barokkens tid?',
        options: [
          { id: 'a', text: 'Fred, velstand og vitenskapelig fremgang', isCorrect: false },
          { id: 'b', text: 'Religionskriger, pest og vitenskapelig omveltning', isCorrect: true },
          { id: 'c', text: 'Demokratisering og industrialisering', isCorrect: false },
          { id: 'd', text: 'Kolonisering og oppdagelsesreiser', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Barokken oppsto i en urolig tid preget av religionskriger (som Trettiårskrigen), gjentatte pestepidemier og vitenskapelige oppdagelser som utfordret det gamle verdensbildet. Denne uroen speiles i barokkens kunst med dens kontraster, dramatikk og dodsbevissthet.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-2-4-n-section2',
      type: 'text',
      content: `## Vanitas - alt er forgjengelig

Det viktigste begrepet for a forsta barokken er kanskje "vanitas" - latin for "forfengelighet" eller "tomhet". Ideen kommer fra Bibelen, fra Forkynneren: "Tomhet og atter tomhet, alt er tomhet."

Vanitas-motivet minner oss om at alt jordisk er forgjengelig. Rikdom, skjonnhet, makt, ungdom - alt visner og forgar. Doden venter alle, og nar den kommer, betyr intet av det jordiske noe lenger.

I kunsten ser vi vanitas-motivet overalt. Malere maler stilleben med hodeskaller, vissne blomster, timeglass og utbrente stearinlys - alle symboler pa tidens gang og livets korthet. Dikterne skriver om skjonnhet som visner, om gull som forvandles til stov, om prakt som blir til intet.

Men vanitas er ikke bare dyster. Den har et poeng: Nar alt jordisk er forgjengelig, blir det viktig a fokusere pa det som varer - nemlig det evige. Sjelen, Gud, det hinsidige. Vanitas-motivet skal fa oss til a vende blikket fra det materielle mot det andelige.

Naert beslektet er "memento mori" - "husk at du skal do". Ogsa dette er en paminnelse om dodens uunngaelighet, ment a fa oss til a leve rett.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-2-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva betyr "vanitas"?',
        options: [
          { id: 'a', text: 'Skjonnhet', isCorrect: false },
          { id: 'b', text: 'Forfengelighet/tomhet - alt jordisk er forgjengelig', isCorrect: true },
          { id: 'c', text: 'Konger og adel', isCorrect: false },
          { id: 'd', text: 'Religiøs hengivenhet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Vanitas" er latin for "forfengelighet" eller "tomhet". I barokken er det et sentralt motiv som minner om at alt jordisk er forgjengelig - rikdom, skjonnhet og makt forgår. Motivet oppfordrer til a fokusere pa det evige fremfor det materielle.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-2-4-n-section3',
      type: 'text',
      content: `## Carpe diem - grip dagen

Ved siden av vanitas-motivet finner vi "carpe diem" - "grip dagen". Dette er en annen reaksjon pa bevisstheten om livets korthet: Nar doden er sikker og kan komme nar som helst, bor man nyte livet mens man kan.

Carpe diem-motivet er eldgammelt - det finnes hos romerne - men far ny kraft i barokken. Dikterne oppfordrer oss til a nyte ungdommens skjonnhet, kjærlighetens lyst, livets goder. For snart visner rosen, snart falmer skjonnheten, snart er det for sent.

Det er interessant at vanitas og carpe diem tilsynelatende peker i ulike retninger. Vanitas sier: Det jordiske er forgjengelig, sa fokuser pa det evige. Carpe diem sier: Livet er kort, sa nyt det mens du kan. Begge springer ut av samme dodsbevissthet, men trekker ulike konklusjoner.

I barokklitteraturen finner vi ofte begge motivene, noen ganger i samme tekst. Den spenningen - mellom verdensbenektelse og livsnytelse, mellom det andelige og det sanselige - er typisk for barokkens spenningsfylte verdensbilde.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-2-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva betyr "carpe diem"?',
        options: [
          { id: 'a', text: 'Husk at du skal do', isCorrect: false },
          { id: 'b', text: 'Alt er forgjengelig', isCorrect: false },
          { id: 'c', text: 'Grip dagen', isCorrect: true },
          { id: 'd', text: 'Søk det evige', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"Carpe diem" er latin og betyr "grip dagen" - en oppfordring til a nyte livet mens man kan, fordi doden kan komme nar som helst. Sammen med vanitas-motivet utgjor det barokkens doble respons pa livets forgjengelighet: bade a søke det evige og a nyte det jordiske.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-2-4-n-section4',
      type: 'text',
      content: `## Barokkens litteraere kjennetegn

Na nar vi forstar barokkens verdensbilde, kan vi se hvordan det former litteraturen. Her er de viktigste kjennetegnene:

**Antiteser og kontraster:** Barokken elsket motsetninger. Lys og morke, liv og dod, himmel og jord, glede og sorg - disse parene settes opp mot hverandre for a skape spenning og dramatikk. Thomas Kingos salme "Sorrig og Glaede de vandre tilhobe" er et perfekt eksempel: Sorg og glede, lykke og ulykke, medgang og motgang - alt veksler, alt er ustabilt.

**Overdadig stil:** Barokksprak er rikt, utsmykket, fullt av bilder og metaforer. Lange, kompliserte setninger, opphopning av adjektiver, rike sammenligninger. Sprak skal overveldes, ikke bare informere.

**Allegori og symbolikk:** Barokken elsker a la konkrete ting sta for abstrakte begreper. Livet er en reise, en rose, et skuespill. Doden er en ljaman, en tjuv i natten.

**Religiøst alvor:** Barokklitteratur er gjennomsyret av religiose temaer - syndens problem, frelsen, naden, det evige liv. Selv kjærlighetspoesi kan ha religiose undertoner.

**Musikalitet:** Mye barokklitteratur var ment for sang eller hoylesning. Rim, rytme, allitterasjon - lydlige virkemidler er sentrale.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-2-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er en antitese?',
        options: [
          { id: 'a', text: 'En lang, komplisert setning', isCorrect: false },
          { id: 'b', text: 'En motsetning - to begreper satt opp mot hverandre', isCorrect: true },
          { id: 'c', text: 'En religiøs bekjennelse', isCorrect: false },
          { id: 'd', text: 'Et bilde hentet fra naturen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'En antitese er en motsetning der to begreper settes opp mot hverandre - som lys/morke, liv/dod, glede/sorg. Barokken elsket slike kontraster fordi de skapte spenning og dramatikk, og fordi de speilet tidens opplevelse av en verden full av motsetninger.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-2-4-n-section5',
      type: 'text',
      content: `## Barokken i Danmark-Norge

Barokken kom relativt sent til Norden - forst pa 1600-tallet. Her ble den naert knyttet til kirken og dens behov for salmer og andaktslitteratur.

De tre store barokkdikterne i Danmark-Norge var alle tilknyttet kirken: **Thomas Kingo** (1634-1703) var biskop og den storste danske salmedikteren. Hans salmer, som "Sorrig og Glaede de vandre tilhobe", viser barokkens kontraster og religiose dybde pa sitt beste. **Dorothe Engelbretsdatter** (1634-1716) fra Bergen var Nordens forste kvinnelige forfatter. Hennes religiose diktning om sorg, dod og lengsel etter himmelen er dypt personlig og preget av egne tap. **Petter Dass** (1647-1707) kombinerte barokkens stil med nordnorsk natur og folkeliv.

Det som forener dem er den religiose alvoren, de sterke kontrastene og bevisstheten om livets forgjengelighet. Men hver av dem har sin egen stemme: Kingo er hoytidelig og kunstnerisk, Dorothe er personlig og sorgfull, Dass er folkelig og naturnær.

Salmene de skrev, ble sunget i norske kirker og hjem i generasjoner. Noen av dem - som Dass' "Herre Gud, ditt dyre navn og aere" og Kingos "Sorrig og Glaede" - synges fortsatt i dag. Barokken lever videre i var salmetradisjon.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-2-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvem var de tre store barokkdikterne i Danmark-Norge?',
        options: [
          { id: 'a', text: 'Holberg, Wergeland og Ibsen', isCorrect: false },
          { id: 'b', text: 'Kingo, Dorothe Engelbretsdatter og Petter Dass', isCorrect: true },
          { id: 'c', text: 'Luther, Melanchton og Calvin', isCorrect: false },
          { id: 'd', text: 'Voltaire, Rousseau og Montesquieu', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'De tre store barokkdikterne i Danmark-Norge var Thomas Kingo (biskop og salmedikter), Dorothe Engelbretsdatter (Nordens forste kvinnelige forfatter) og Petter Dass (dikterpresten fra Helgeland). Alle tre var tilknyttet kirken og skrev religiøs diktning preget av barokkens kontraster og dybde.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-2-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Barokkens verden

Du har na utforsket barokken - kunstretningen som preget Europa pa 1600-tallet. Her er hovedpunktene:

**Historisk bakgrunn:**
Barokken oppsto i en urolig tid preget av religionskriger, pestepidemier og vitenskapelige omveltninger. Denne uroen speiles i kunstens kontraster og dramatikk.

**Sentrale motiver:**
- **Vanitas:** Alt jordisk er forgjengelig. Fokuser pa det evige.
- **Memento mori:** Husk at du skal do.
- **Carpe diem:** Grip dagen, nyt livet mens du kan.

**Litteraere kjennetegn:**
- Antiteser og kontraster (lys/morke, liv/dod)
- Overdadig stil med rik billedbruk
- Allegori og symbolikk
- Religiøst alvor
- Musikalitet og lydlige virkemidler

**Barokken i Danmark-Norge:**
De tre store var Thomas Kingo (salmedikter), Dorothe Engelbretsdatter (Nordens forste kvinnelige forfatter) og Petter Dass (dikterpresten). Salmene deres synges fortsatt i dag.

**Nokkelbegrepper:**
- **Barokk:** Kunstretning ca. 1600-1750
- **Vanitas:** Forfengelighet, det jordiskes forgjengelighet
- **Memento mori:** Husk at du skal do
- **Carpe diem:** Grip dagen
- **Antitese:** Motsetning`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5 NARRATIV: Dorothe Engelbretsdatter
// ============================================================================

export const CHAPTER_NORSK_VG2_2_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-2-5-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '2.5',
  title: 'Dorothe Engelbretsdatter',
  subtitle: 'Narrativ versjon',
  description: 'Møt Nordens forste kvinnelige forfatter - en stemme av sorg, tro og motstandskraft.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  linkedChapterId: 'norsk-vg2-2-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-2-5-n-intro',
      type: 'text',
      content: `## En kvinnes stemme bryter igjennom

Bergen, midten av 1600-tallet. En prestekone sitter ved vinduet og skriver. Hun har nettopp mistet et av sine barn - det er det syvende hun begraver. Sorgen er uutholdelig, men hun finner trost i ordene. Hun skriver salmer om lengsel, om tap, om hapet om a gjenses i himmelen.

Denne kvinnen heter Dorothe Engelbretsdatter, og hun er i ferd med a gjore noe helt usedvanlig: Hun skal bli Nordens forste profesjonelle kvinnelige forfatter. I en tid da kvinner knapt fikk utdanning, da de ikke hadde lov til a tale offentlig, da litteraturen var mennenes domene - der bryter Dorothe igjennom med sin stemme.

Hennes diktning ble enormt populaer. Den ble trykt i mange opplag og lest i norske hjem i over hundre ar. Hun fikk til og med kongelig pensjon for sitt forfatterskap - en anerkjennelse som var naesten uhort for en kvinne pa den tiden.

La oss bli kjent med denne bemerkelsesverdige kvinnen og hennes diktning.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-2-5-n-section1',
      type: 'text',
      content: `## Et liv preget av tap

Dorothe Engelbretsdatter ble fodt i Bergen i 1634. Faren var prest, og hun fikk en god utdanning - langt bedre enn de fleste jenter pa den tiden. Hun laerte a lese og skrive, hun fikk kjennskap til religion og litteratur.

I 1652, da hun var 18 ar gammel, giftet hun seg med presten Ambrosius Hardenbech. De fikk ni barn sammen. Men sa kom tragediene - det ene barnet etter det andre dode. Syv av de ni barna dode for i ung alder. Bare to overlevde til voksen alder.

Tenk deg den sorgen. I var tid, med moderne medisin, er det a miste et barn den verste tragedien foreldre kan oppleve. Pa 1600-tallet var barnedod vanlig, men ikke derfor mindre smertefull. Dorothe opplevde denne smerten syv ganger.

Etter mannens dod i 1683 ble Dorothe enke. Hun hadde ikke noe yrke, ingen arv a leve av. Men hun hadde sin diktning - og den skulle redde henne.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-2-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvor mange av Dorothe Engelbretsdatters ni barn dode i ung alder?',
        options: [
          { id: 'a', text: 'To', isCorrect: false },
          { id: 'b', text: 'Fire', isCorrect: false },
          { id: 'c', text: 'Syv', isCorrect: true },
          { id: 'd', text: 'Alle ni', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Dorothe mistet syv av sine ni barn - bare to overlevde til voksen alder. Denne personlige tragedien preger diktningen hennes dypt, med temaer som sorg, tap, lengsel og hapet om gjensyn i himmelen.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-2-5-n-section2',
      type: 'text',
      content: `## Forfatter mot alle odds

Hvordan kunne en enke pa 1600-tallet leve av a skrive? Det var naermest umulig. Kvinner hadde ingen plass i det offentlige liv. Forfatterskap var for menn. En kvinne som publiserte, risikerte a bli sett pa som usoemmelig.

Men Dorothe hadde noe de andre ikke hadde: En stemme som traff folk i hjertet. Hennes salmer om sorg og trost snakket direkte til mennesker som selv hadde opplevd tap. I en tid der barnedod var vanlig, var det mange som gjenkjente seg.

I 1678 utga hun "Siaelens Sang-Offer" - en samling religiose sanger. Den ble en enorm suksess. Folk kopierte sangene, larte dem utenat, sang dem i hjemmene. I 1685 kom "Taare-Offer" - tarenes offer - en samling preget av sorgen over de dode barna.

Og sa skjedde det utrolige: Kong Christian V ga henne kongelig pensjon. En offisiell anerkjennelse fra kongen selv! Dette var helt uvanlig for en forfatter, og helt uhort for en kvinne. Det viser hvor hoyt diktningen ble verdsatt.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-2-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva het Dorothe Engelbretsdatters hovedverk?',
        options: [
          { id: 'a', text: 'Nordlands Trompet', isCorrect: false },
          { id: 'b', text: 'Siaelens Sang-Offer', isCorrect: true },
          { id: 'c', text: 'Aandelige Siunge-Koor', isCorrect: false },
          { id: 'd', text: 'Katekismesanger', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Siaelens Sang-Offer" (1678) er Dorothe Engelbretsdatters hovedverk - en samling religiose sanger som ble enormt populaer. Sammen med "Taare-Offer" (1685) ble disse verkene lest i norske hjem i over 100 ar.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-2-5-n-section3',
      type: 'text',
      content: `## Barokkens stemme av sorg

Dorothes diktning er gjennomsyret av barokkens verdensbilde. Vi finner alle de typiske trekkene: vanitas-motivet om det jordiskes forgjengelighet, kontrastene mellom det jordiske og det himmelske, den intense religiose lengsel.

Men hos Dorothe er disse motivene ikke bare litteraere konvensjoner - de er levd erfaring. Nar hun skriver om at verdens prakt bare er "Skam og Smaerte", har hun selv erfart hvordan det vakre kan rives bort. Nar hun lengter etter himmelen, lengter hun etter a gjenses med sine dode barn.

Ta strofen: "Ach! hvad er dog denne Verden, Med sin Lyst og Pragt og Aere! Intet uden Skam og Smaerte, Intet uden Sorg at baere."

Her finner vi vanitas-motivet: Verdens lyst, prakt og aere er egentlig bare skam, smerte og sorg. Men det er ikke bare en teologisk pastand - det er et utrop fra en mor som har mistet syv barn.

Denne kombinasjonen av barokk form og personlig smerte gjor Dorothes diktning saerlig gripende. Hun skriver ikke om abstrakt religiøsitet, men om konkret lidelse og konkret hap.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-2-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Dorothes bruk av barokke motiver?',
        options: [
          { id: 'a', text: 'Hun bruker dem ironisk og kritisk', isCorrect: false },
          { id: 'b', text: 'De er bare litteraere konvensjoner uten personlig innhold', isCorrect: false },
          { id: 'c', text: 'De er forankret i personlig erfaring av tap og sorg', isCorrect: true },
          { id: 'd', text: 'Hun avviser barokkens verdensbilde', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Hos Dorothe er de barokke motivene - som vanitas og lengsel etter det evige - ikke bare litteraere konvensjoner, men forankret i hennes personlige erfaring av a miste syv barn. Dette gjor diktningen saerlig gripende og ekte.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-2-5-n-section4',
      type: 'text',
      content: `## En pioner for kvinnelige forfattere

Dorothe Engelbretsdatter brøt barrierer. Hun var den forste kvinnen i Norden som publiserte diktning under eget navn og levde av det. Hun viste at kvinner kunne skrive, at de kunne na et publikum, at de kunne fa anerkjennelse.

Men det var ikke lett. I forordet til "Taare-Offer" forsvarer Dorothe sin rett til a skrive. Hun visste at kritikerne lurte - de som mente at kvinner burde tie. Hun svarte med ydmykhet, men ogsa med stahet: Ogsa kvinner har sjel og andelige behov som kan uttrykkes i diktning.

Det er interessant a sammenligne Dorothe med mannlige samtidige som Petter Dass. Begge var tilknyttet kirken, begge skrev religiøs diktning, begge var populaere. Men Dass hadde en offentlig posisjon som prest. Dorothe matte kjempe for sin plass.

Kanskje er det nettopp derfor diktningen hennes er sa personlig? Dass kunne skrive om abstrakte religiose temaer fordi han representerte kirken. Dorothe matte skrive ut fra egen erfaring - det var den eneste legitimiteten hun hadde.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-2-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor var det spesielt at Dorothe fikk kongelig pensjon?',
        options: [
          { id: 'a', text: 'Fordi hun var den storste dikteren i sin tid', isCorrect: false },
          { id: 'b', text: 'Fordi det var uhort at en kvinne fikk slik anerkjennelse for forfatterskap', isCorrect: true },
          { id: 'c', text: 'Fordi kongen var hennes slektning', isCorrect: false },
          { id: 'd', text: 'Fordi hun skrev pa kongens oppdrag', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A fa kongelig pensjon var uvanlig for enhver forfatter, men helt uhort for en kvinne. Kvinner hadde ingen plass i det offentlige litteraere liv. At Dorothe fikk denne anerkjennelsen viser hvor hoyt diktningen hennes ble verdsatt.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-2-5-n-section5',
      type: 'text',
      content: `## Arven etter Dorothe

Dorothe Engelbretsdatter dode i Bergen i 1716, 82 ar gammel. Verkene hennes fortsatte a bli lest lenge etter hennes dod - i over hundre ar ble de trykt i nye opplag og sunget i norske hjem.

I dag er Dorothe viktig av flere grunner. For det forste er hun et tidsvitne - diktningen gir oss innblikk i hvordan mennesker pa 1600-tallet tenkte om liv, dod, tro og sorg. For det andre er hun en pioner - den forste kvinnen i Norden som slo igjennom som forfatter.

Men kanskje viktigst: Diktningen hennes er fortsatt vakker og gripende. Sorgen over de dode barna, lengelen etter trost, hapet om gjensyn - dette er folelser som er tidlose. Vi kan lese Dorothe i dag og kjenne oss igjen.

Det er interessant a tenke pa at litteraturhistorien lenge undervurderte Dorothe. Mannlige litteraturhistorikere fokuserte pa Petter Dass og Thomas Kingo, mens Dorothe ble glemt. Forst i nyere tid har hun fatt den plassen hun fortjener. Det minner oss om at historien er skrevet av de som har makt, og at mange stemmer - saerlig kvinners - har vaert usynlige.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-2-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor er Dorothe Engelbretsdatter viktig i litteraturhistorien?',
        options: [
          { id: 'a', text: 'Fordi hun skrev de forste norske romanene', isCorrect: false },
          { id: 'b', text: 'Fordi hun var Nordens forste kvinnelige profesjonelle forfatter og hennes diktning gir tidsvitnesbyrd', isCorrect: true },
          { id: 'c', text: 'Fordi hun grunnla den norske salmetradisjonen', isCorrect: false },
          { id: 'd', text: 'Fordi hun var den storste barokkdikteren i Europa', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Dorothe er viktig bade som pioner - den forste kvinnen i Norden som levde av a skrive - og som tidsvitne. Diktningen gir oss unikt innblikk i 1600-tallets tankeverden og folelsesliv, saerlig omkring sorg, tap og tro.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-2-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Dorothe Engelbretsdatter

Du har na motet Dorothe Engelbretsdatter, Nordens forste profesjonelle kvinnelige forfatter. Her er hovedpunktene:

**Liv og virke:**
- Fodt i Bergen i 1634, datter av en prest
- Giftet seg med prest, fikk ni barn - mistet syv av dem
- Levde som enke fra 1683 og fikk kongelig pensjon for diktningen
- Dode i Bergen i 1716

**Hovedverk:**
- "Siaelens Sang-Offer" (1678) - religiose sanger
- "Taare-Offer" (1685) - sanger om sorg og trost

**Tematikk:**
- Sorg over dode barn
- Lengsel etter himmelen
- Trost i troen
- Det jordiskes forgjengelighet (vanitas)

**Barokke trekk:**
- Vanitas-motiver forankret i personlig erfaring
- Kontraster mellom det jordiske og det himmelske
- Rike bilder og metaforer
- Personlig, folelsesladet tone

**Historisk betydning:**
- Nordens forste kvinnelige profesjonelle forfatter
- Brøt barrierer for kvinner i litteraturen
- Verkene ble lest i over 100 ar
- Tidsvitne om 1600-tallets tankeverden`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6 NARRATIV: Thomas Kingo og salmediktning
// ============================================================================

export const CHAPTER_NORSK_VG2_2_6_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-2-6-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '2.6',
  title: 'Thomas Kingo og salmediktning',
  subtitle: 'Narrativ versjon',
  description: 'Møt barokkens salmepoet - mannen som ga ord til livets veksling mellom sorg og glede.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  linkedChapterId: 'norsk-vg2-2-6',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-2-6-n-intro',
      type: 'text',
      content: `## Mesteren i salmesang

"Sorrig og Glaede de vandre tilhobe, Lykke, Ulykke de ganger paa Rad."

Disse ordene har vart sunget i norske og danske kirker i over 300 ar. De kommer fra Thomas Kingo, den storste salmedikteren i dansk-norsk litteratur. Hans salmer fanger noe dypt menneskelig: opplevelsen av at livet svinger mellom ytterpunkter, at glede og sorg folger hverandre taett, at ingenting varer.

Kingo var ikke bare dikter - han var ogsa biskop, hoffmann og maktspiller. Hans liv var like fullt av kontraster som salmene hans: Fra fattig bakgrunn til biskopens stol, fra kongelig gunst til fall i unade. Han kjente livets vekslinger pa kroppen.

La oss bli kjent med denne fascinerende mannen og hans tidlose salmer.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-2-6-n-section1',
      type: 'text',
      content: `## Fra Slangerup til biskopens stol

Thomas Kingo ble fodt i Slangerup pa Sjaelland i 1634 - samme ar som Dorothe Engelbretsdatter i Bergen. Faren var handelsmann av skotsk herkomst. Det var en beskjeden bakgrunn, men Kingo hadde talent og ambisjon.

Han studerte teologi ved Kobenhavns universitet og ble prest i 1661. Allerede som ung prest viste han litteraert talent. Han skrev hyllingsdikt til kongen - en vanlig vei til gunst ved hoffet - og ble lagt merke til.

I 1677 ble Kingo utnevnt til biskop i Odense. Det var en mektig posisjon. Som biskop var han ansvarlig for kirkens virksomhet i et stort omrade. Han arbeidet for a reformere kirkelivet og styrke folkets kristne oppdragelse.

Kingos store prosjekt var a skape en ny salmebok. De gamle salmene som var i bruk, var ofte grove og uvitenskapelige. Kingo ville heve nivaaet, skape salmer som var bade teologisk korrekte og kunstnerisk vakre.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-2-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken stilling hadde Thomas Kingo i kirken?',
        options: [
          { id: 'a', text: 'Prest i Kobenhavn', isCorrect: false },
          { id: 'b', text: 'Biskop i Odense', isCorrect: true },
          { id: 'c', text: 'Kapellan i Bergen', isCorrect: false },
          { id: 'd', text: 'Professor i teologi', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Thomas Kingo ble utnevnt til biskop i Odense i 1677, en stilling han hadde til sin dod i 1703. Som biskop arbeidet han for a reformere kirkelivet og skape nye salmer av hoy kvalitet.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-2-6-n-section2',
      type: 'text',
      content: `## Salmen som sjanger

For a forsta Kingo ma vi forsta hva en salme er. En salme er en religiøs sang ment for fellesskapets bruk - i gudstjenesten, ved andakt i hjemmet, ved livets store overganger.

Salmen har en dobbel funksjon. Pa den ene siden er den teologisk undervisning - gjennom a synge laerer folk om tro, nade, synd og frelse. Pa den andre siden er den folelsesmessig uttrykk - den gir ord til glede, sorg, angst og hap.

I var tid, med uendelige underholdningsmuligheter, er det vanskelig a forestille seg hvor viktig salmer var pa 1600-tallet. Det fantes ikke radio, TV eller streaming. Salmen var en av fa mater folk kunne oppleve musikk og poesi. Salmene ble sunget i kirken hver sondag, ved morgenbønn og aftenbønn i hjemmene, ved bryllup og begravelser.

Kingos salmer var ment a folge mennesket gjennom livet. Han skrev morgensalmer og aftensalmer, salmer for hver ukedag, salmer for de store hoytidene. Salmene skulle vaere en mal for hvordan man orienterer seg i tilværelsen.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-2-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var salmens funksjon pa 1600-tallet?',
        options: [
          { id: 'a', text: 'Bare underholdning ved fester', isCorrect: false },
          { id: 'b', text: 'Bade teologisk undervisning og folelsesmessig uttrykk', isCorrect: true },
          { id: 'c', text: 'Kun for profesjonelle sangere', isCorrect: false },
          { id: 'd', text: 'Erstatning for Bibelen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Salmer hadde en dobbel funksjon: De underviste folk i teologi og tro, samtidig som de ga uttrykk for folelser som glede, sorg og hap. I en tid uten andre medier var salmen enormt viktig for folks andelige og folelsesmessige liv.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-2-6-n-section3',
      type: 'text',
      content: `## Sorrig og Glaede - en analyse

La oss se naermere pa Kingos mest kjente salme: "Sorrig og Glaede de vandre tilhobe".

Forste strofe: "Sorrig og Glaede de vandre tilhobe, Lykke, Ulykke de ganger paa Rad, Medgang og Modgang hinanden mon love, Soelskin og Skyer de folges og ad. Jorderigs Guld Er praegtig Muld, Himlen er ene af Salighed fuld."

Se pa kontrastene: sorg/glede, lykke/ulykke, medgang/motgang, solskin/skyer. Hvert verspar setter to motsetninger opp mot hverandre. Dette er typisk barokk - verden oppfattes som full av kontraster og vekslinger.

Sa kommer den avgjorende vendingen: "Jorderigs Guld er praegtig Muld" - det jordiskes rikdom er egentlig bare stov. Her er vanitas-motivet. Alt det jordiske, uansett hvor vakkert, er forgjengelig.

Konklusjonen: "Himlen er ene af Salighed fuld" - bare himmelen gir virkelig lykke. Midt i livets vekslinger finnes det et fast punkt, og det er det evige.

Salmen troster ikke ved a benekte livets smerte. Tvert imot - den anerkjenner at livet er vanskelig og ustabilt. Men den peker mot noe som varer.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-2-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva betyr linjen "Jorderigs Guld er praegtig Muld"?',
        options: [
          { id: 'a', text: 'At man skal samle rikdom', isCorrect: false },
          { id: 'b', text: 'At jordisk rikdom er vakker og verdifull', isCorrect: false },
          { id: 'c', text: 'At jordisk rikdom egentlig bare er stov - alt jordisk er forgjengelig', isCorrect: true },
          { id: 'd', text: 'At man finner gull i jorden', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Dette er vanitas-motivet i konsentrert form: "Jorderigs Guld" (jordisk rikdom) "er praegtig Muld" (er egentlig bare stov). Uansett hvor fint og verdifullt det jordiske synes, er det forgjengelig. Bare det himmelske varer.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-2-6-n-section4',
      type: 'text',
      content: `## Barokkens mester i salmesang

Kingos salmer er mesterstykker i barokk diktning. De kombinerer teologisk dybde med kunstnerisk raffinement pa en mate som fa har matchet.

Se pa bildesprak: I morgensalmen "Som den gyldne Sol frembryder" sammenligner Kingo soloppgangen med Kristi nades lys som bryter inn i sjelen. Solen bryter gjennom "den kullsorte Sky" og jager mørket bort - akkurat som Jesu nade trenger inn i sjelen og driver bort syndees mørke.

Se pa musikaliteten: Kingos vers flyter som musikk. Rim, rytme og allitterasjon skaper en klang som gjor salmene lette a synge og huske. "Sorrig og Glaede de vandre tilhobe" har en vuggende rytme som speiler temaet - livets veksling frem og tilbake.

Se pa kontrastene: Lys mot morke, sol mot sky, glede mot sorg. Barokkens elskede motsetninger er overalt i Kingos diktning.

Og se pa den personlige tonen: Selv om salmene er ment for fellesskapets sang, har de ofte et intimt preg. "Min Jesu Naades Skin" - det er ikke abstrakt teologi, det er personlig henvendelse til Gud.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-2-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvordan bruker Kingo soloppgangen som religiost symbol?',
        options: [
          { id: 'a', text: 'Solen symboliserer menneskets fornuft', isCorrect: false },
          { id: 'b', text: 'Solen bryter gjennom morket som Jesu nade bryter inn i sjelen', isCorrect: true },
          { id: 'c', text: 'Solen representerer kongens makt', isCorrect: false },
          { id: 'd', text: 'Solen symboliserer dodens komme', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I morgensalmen "Som den gyldne Sol frembryder" sammenligner Kingo soloppgangen med Jesu nade. Som solen bryter gjennom morket og jager natten bort, bryter Jesu nades lys inn i sjelen og driver bort syndens morke.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-2-6-n-section5',
      type: 'text',
      content: `## Salmenes overlevelse

Kingos salmer ble ikke bare populaere i hans egen tid - de har overlevd i over 300 ar. Flere av dem synges fortsatt i norske og danske kirker. "Sorrig og Glaede", "Som den gyldne Sol frembryder", "Far, Verden, far vel" - disse tekstene lever fortsatt.

Hvorfor overlever de? Fordi de handler om noe universelt. Alle mennesker opplever vekslingen mellom glede og sorg. Alle kjenner usikkerheten i tilvarelsen. Alle soker noe fast a holde seg til. Kingos salmer gir ord til disse erfaringene.

De overlever ogsa fordi de er godt skrevet. Rim og rytme sitter, bildene er levende, ordene er velvalgte. Litteraer kvalitet varer.

Og de overlever fordi de har vaert del av en levende tradisjon. Generasjon etter generasjon har sunget dem, laert dem utenat, brukt dem ved livets store overganger. Salmene er blitt en del av var kulturarv.

Kingo selv opplevde bade oppturer og nedturer - fra kongelig gunst til a falle i unade. Kanskje var det disse personlige erfaringene som ga ham innsikt i livets vekslinger. Han visste at sorrig og glaede vandrer tilhobe - for han hadde levd det selv.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-2-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor har Kingos salmer overlevd i over 300 ar?',
        options: [
          { id: 'a', text: 'Fordi de er pabudt ved lov', isCorrect: false },
          { id: 'b', text: 'Fordi de handler om universelle temaer, er godt skrevet og har vaert del av en levende tradisjon', isCorrect: true },
          { id: 'c', text: 'Fordi ingen har skrevet nye salmer siden', isCorrect: false },
          { id: 'd', text: 'Fordi de er korte og enkle', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kingos salmer overlever fordi de kombinerer universelle temaer (livets veksling, søken etter mening) med høy litterær kvalitet (gode rim, levende bilder) og har vært del av en levende tradisjon der generasjoner har sunget dem.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-2-6-n-summary',
      type: 'text',
      content: `## Oppsummering: Thomas Kingo

Du har na motet Thomas Kingo, barokkens salmepoet. Her er hovedpunktene:

**Liv og virke:**
- Fodt i Slangerup 1634, dode 1703
- Biskop i Odense fra 1677
- Regnes som den storste danske salmedikteren

**Hovedverk:**
- "Aandelige Siunge-Koor" (1674, 1681) - morgen- og aftensalmer
- "Kingos Salmebog" (1699) - autorisert salmebok

**Viktige salmer:**
- "Sorrig og Glaede de vandre tilhobe"
- "Som den gyldne Sol frembryder"
- "Far, Verden, far vel"

**Barokke kjennetegn:**
- Sterke kontraster (sorg/glede, lys/morke)
- Vanitas-motiv (det jordiske er forgjengelig)
- Rike bilder og metaforer
- Musikalitet og rytmisk presisjon
- Personlig, intim tone

**Salmens funksjon:**
- Teologisk undervisning
- Folelsesmessig uttrykk
- Folge mennesket gjennom livet og aret

**Arv:**
Kingos salmer synges fortsatt i dag fordi de handler om universelle temaer, er godt skrevet og har vaert del av en levende tradisjon i over 300 ar.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.7 NARRATIV: Opplysningstidens ideer
// ============================================================================

export const CHAPTER_NORSK_VG2_2_7_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-2-7-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '2.7',
  title: 'Opplysningstidens ideer',
  subtitle: 'Narrativ versjon',
  description: 'Trer inn i fornuftens tidsalder - da filosofene trodde at kunnskap kunne forandre verden.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'reflektere over sakprosatekster og retorisk situasjon',
  ],
  linkedChapterId: 'norsk-vg2-2-7',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-2-7-n-intro',
      type: 'text',
      content: `## Et nytt lys over Europa

Forestill deg at det er 1750. Barokken er over, med sine morke kontemplasjon over dod og forgjengelighet. Na er det noe nytt i luften. Filosofene i Paris sitter pa kaffehusene og diskuterer fornuft, frihet og fremskritt. De tror at mennesket kan forandre verden - ikke gjennom bon og nade, men gjennom kunnskap og kritisk tenkning.

Velkommen til opplysningstiden. Epoken fikk sitt navn fordi filosofene mente de brakte lys inn i morket - morket av overtro, fordommer og uvitenhet. De ville opplyse folket, frigjore det fra autoritetenes grep og la fornuften styre.

Det var en optimistisk tid. Mens barokken hadde vaert opptatt av doden og det hinsidige, fokuserte opplysningstiden pa livet her og na. Menneskene kunne forbedre seg selv og samfunnet gjennom utdanning og vitenskap. Fremskrittet var mulig.

Ideene fra opplysningstiden preger fortsatt var verden: demokrati, menneskerettigheter, ytringsfrihet, vitenskapelig metode. La oss utforske hvordan disse tankene oppsto.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-2-7-n-section1',
      type: 'text',
      content: `## Fra barokk til opplysning

Overgangen fra barokk til opplysningstid var en av de storste endringene i europeisk tankehistorie. Hvordan skjedde det?

Naturvitenskapen spilte en avgjorende rolle. Isaac Newton hadde vist at naturen folger matematiske lover - tyngdekraften, bevegelseslovene. Galileo hadde bevist at jorden kretser rundt solen. Naturen var ikke lenger et mysterium styrt av Guds vilje, men et system man kunne forsta og beherske gjennom fornuft og eksperiment.

Hvis naturen kunne forstas gjennom fornuft, tenkte filosofene, hvorfor ikke ogsa samfunnet? Kanskje kunne man finne de "naturlige lovene" for hvordan mennesker bor leve sammen. Kanskje kunne man organisere samfunnet fornuftig, basert pa prinsippr i stedet for tradisjon og makt.

Barokkens pessimisme ble erstattet av optimisme. I stedet for a fokusere pa syndefallet og menneskets svakhet, fremhevet opplysningsfilosofene menneskets muligheter. Fornuften var et redskap vi alle hadde. Brukte vi det riktig, kunne vi skape et bedre liv for alle.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-2-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var hovedforskjellen mellom barokken og opplysningstiden?',
        options: [
          { id: 'a', text: 'Barokken var religiøs, opplysningstiden ateistisk', isCorrect: false },
          { id: 'b', text: 'Barokken var pessimistisk og dodsbevisst, opplysningstiden optimistisk og fornuftsorientert', isCorrect: true },
          { id: 'c', text: 'Barokken var dansk, opplysningstiden fransk', isCorrect: false },
          { id: 'd', text: 'Det var ingen vesentlig forskjell', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Barokken var preget av religiøst alvor, dodsbevissthet og fokus pa det hinsidige. Opplysningstiden snudde blikket mot livet her og na, satte fornuften i sentrum og trodde pa fremskritt og forbedring av menneske og samfunn.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-2-7-n-section2',
      type: 'text',
      content: `## Sapere aude - vag a tenke selv

"Sapere aude!" - vag a bruke din egen forstand. Dette var mottoet den tyske filosofen Immanuel Kant ga opplysningstiden. I et berømt essay fra 1784 definerte han opplysning som "menneskets utgang fra sin selvforskyldte umyndighet".

Hva mente han? At mange mennesker lever i ufrihet fordi de ikke tar bruker sin egen fornuft. De lar andre tenke for seg - prester, konger, autoriteter. De godtar det de far fortalt uten a sporge kritisk.

Selvforskyldt, sa Kant, fordi det ikke skyldes mangel pa evne. Alle har fornuft. Det skyldes mangel pa mot. Det er lettere a la andre bestemme. Det er ubehagelig a utfordre autoriteter. Men skal mennesket bli fritt, ma det vage a tenke selv.

Dette var provoserende. Kirken laerte at mennesker skulle tro, ikke tvile. Kongen forventet lydighet, ikke kritikk. Men opplysningsfilosofene insisterte: Alt ma proves mot fornuftens dom. Ingen autoritet er hevet over kritikk.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-2-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva betyr "sapere aude"?',
        options: [
          { id: 'a', text: 'Husk at du skal do', isCorrect: false },
          { id: 'b', text: 'Grip dagen', isCorrect: false },
          { id: 'c', text: 'Vag a bruke din egen forstand', isCorrect: true },
          { id: 'd', text: 'Stol pa kirken', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"Sapere aude" er latin og betyr "vag a vite" eller "vag a bruke din egen forstand". Kant brukte det som motto for hele opplysningstiden: Mennesket ma vage a tenke selv i stedet for a la autoriteter bestemme hva som er sant.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-2-7-n-section3',
      type: 'text',
      content: `## De store ideene

Opplysningsfilosofene utviklet ideer som skulle forandre verden. La oss se pa de viktigste.

**Maktfordeling:** Montesquieu hevdet at statsmakten ma deles i tre: lovgivende, utøvende og dommende makt. Hvis en person eller gruppe har all makt, blir det tyranni. Ved a dele makten sikrer man frihet.

**Folkesuverenitet:** Rousseau mente at makten tilhorer folket, ikke kongen. Statsborgerene gar inn i en "samfunnskontrakt" der de gir fra seg noe frihet mot a fa beskyttelse og orden. Men grunnleggende er det folket som er suverent.

**Menneskerettigheter:** Locke argumenterte for at alle mennesker har naturlige rettigheter - til liv, frihet og eiendom. Disse rettighetene er ikke gitt av kongen eller staten, de er medfodte. Staten skal beskytte dem, ikke krenke dem.

**Toleranse:** Voltaire kjempet for religiøs toleranse. Han mente det var absurd og grusomt at folk dreper hverandre pa grunn av uenighet om teologi. "Jeg er uenig i hva du sier, men jeg vil forsvare til doden din rett til a si det" - dette sitatet (som kanskje ikke er ekte, men fanger Voltaires and) oppsummerer holdningen.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-2-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvem formulerte maktfordelingsprinsippet?',
        options: [
          { id: 'a', text: 'Voltaire', isCorrect: false },
          { id: 'b', text: 'Rousseau', isCorrect: false },
          { id: 'c', text: 'Montesquieu', isCorrect: true },
          { id: 'd', text: 'Locke', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Montesquieu formulerte ideen om at statsmakten bor deles i tre: lovgivende, utøvende og dommende makt. Dette prinsippet er grunnleggende i de fleste moderne demokratier, inkludert Norge.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-2-7-n-section4',
      type: 'text',
      content: `## Opplysningen i Danmark-Norge

Hvordan kom opplysningsideene til var del av verden? Hovedveien var gjennom Kobenhavn, som var det kulturelle sentrum i det dansk-norske riket.

Den viktigste formidleren var Ludvig Holberg. Han var forfatter, historiker og filosof, og han spredte opplysningsideer gjennom komedier, essays og historiske verker. Vi skal se naermere pa ham i neste kapittel.

Det ble ogsa etablert institusjoner for a fremme vitenskap og laerdom. Det Kongelige Danske Videnskabers Selskab ble grunnlagt i 1742. Aviser og tidsskrifter begynte a komme ut, der folk kunne diskutere ideer.

For Norge fikk opplysningstiden stor betydning pa sikt. Ideene om folkestyre og nasjonalt selvstyre inspirerte 1814-grunnloven. Norge fikk sitt forste universitet i 1811 - et direkte resultat av opplysningens vektlegging av utdanning og kunnskap.

Men vi ma huske: Opplysningstiden var i forste rekke for eliten. Vanlige folk - bonder, fiskere, handverkere - levde fortsatt etter gamle mønstre. Det tok lang tid for ideene a spre seg utover de laerdes krets.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-2-7-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-7-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvem var den viktigste formidleren av opplysningsideer i Danmark-Norge?',
        options: [
          { id: 'a', text: 'Thomas Kingo', isCorrect: false },
          { id: 'b', text: 'Petter Dass', isCorrect: false },
          { id: 'c', text: 'Ludvig Holberg', isCorrect: true },
          { id: 'd', text: 'Dorothe Engelbretsdatter', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Ludvig Holberg var den viktigste formidleren av opplysningsideer i Danmark-Norge. Gjennom komedier, essays og historiske verker spredte han ideer om fornuft, toleranse og kritisk tenkning.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-2-7-n-section5',
      type: 'text',
      content: `## Opplysningens arv - og dens kritikere

Opplysningstidens ideer slo rot. Den amerikanske uavhengighetserklaeringen (1776) og den franske revolusjonens menneskerettighetserklaring (1789) bygger direkte pa opplysningsfilosofi. Demokratiet, menneskerettighetene, ytringsfriheten - alt dette er opplysningens arv.

Men opplysningstiden har ogsa sine kritikere. Noen peker pa at forsnuften ble en ny autoritet som kunne vaere like undertrykkende som de gamle. Andre kritiserer opplysningens eurosentrisme - ideene om fornuft og fremskritt ble brukt til a rettferdiggjore kolonialisme og undertrykkelse av andre folkeslag.

Romantikken pa 1800-tallet var delvis en reaksjon mot opplysningstiden. Romantikerne mente at opplysningen hadde overvurdert fornuften og undervurdert folelser, natur og tradisjon.

I var egen tid ser vi at opplysningsidealer stadig er omdiskutert. Er fornuften nok til a lose var tids problemer? Kan alle kulturer males med samme mal? Hvem har rett til a definere hva "fremskritt" er? Disse sporsmaalene ville ikke overrasket Voltaire og Kant - de trodde jo pa kritisk debatt.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-2-7-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-7-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilken moderne institusjon bygger direkte pa opplysningstidens ideer?',
        options: [
          { id: 'a', text: 'Den norske kirke', isCorrect: false },
          { id: 'b', text: 'Menneskerettighetene', isCorrect: true },
          { id: 'c', text: 'Kongehuset', isCorrect: false },
          { id: 'd', text: 'Adelen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'FNs menneskerettighetserklaring og nasjonale grunnlover bygger direkte pa opplysningsfilosofenes ideer om at alle mennesker har medfodte rettigheter til liv, frihet og verdighet. Dette var radikale tanker pa 1700-tallet.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-2-7-n-summary',
      type: 'text',
      content: `## Oppsummering: Opplysningstidens ideer

Du har na lart om opplysningstiden - fornuftens tidsalder. Her er hovedpunktene:

**Hva var opplysningstiden?**
En intellektuell bevegelse pa 1700-tallet som satte fornuften i sentrum. Filosofene ville "opplyse" folket og frigjore det fra overtro og autoriteters grep.

**Sentrale ideer:**
- **Fornuft:** Alt ma proves mot fornuftens dom
- **Toleranse:** Religiøs og intellektuell frihet
- **Maktfordeling:** Deling av makt i tre grener (Montesquieu)
- **Folkesuverenitet:** Makten tilhorer folket (Rousseau)
- **Menneskerettigheter:** Medfodte rettigheter til liv, frihet og eiendom (Locke)

**Nokkelbegrepper:**
- **Sapere aude:** "Vag a bruke din egen forstand" (Kant)
- **Rasjonalisme:** Fornuft som kilde til kunnskap
- **Empirisme:** Erfaring som kilde til kunnskap
- **Samfunnskontrakt:** Avtale mellom borgere og stat
- **Naturrett:** Medfodte rettigheter

**Opplysningstiden i Danmark-Norge:**
Ludvig Holberg var den viktigste formidleren. Ideene pavirket grunnloven av 1814 og opprettelsen av universitetet i 1811.

**Arv og kritikk:**
Demokrati, menneskerettigheter og vitenskapelig metode er opplysningens arv. Kritikere peker pa overvurdering av fornuften og eurosentrisme.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.8 NARRATIV: Ludvig Holberg
// ============================================================================

export const CHAPTER_NORSK_VG2_2_8_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-2-8-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '2.8',
  title: 'Ludvig Holberg - forfatter og opplysningsmann',
  subtitle: 'Narrativ versjon',
  description: 'Møt mannen fra Bergen som ble Nordens storste satiriker og opplysningens fremste forkjemper.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  linkedChapterId: 'norsk-vg2-2-8',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-2-8-n-intro',
      type: 'text',
      content: `## Mannen som lo av alle

Bergen, 1684. En gutt fodes i en borgerlig familie. Ingen aner at han skal bli den storste forfatteren i dansk-norsk litteratur, en europeisk berømthet, en baron.

Ludvig Holberg var mannen som brukte latteren som vapen. Han lo av bondsk uvitenhet og akademisk pedanteri, av sosial klatring og overtro, av folks evne til a tro de er viktigere enn de er. Gjennom komediene sine avslørte han menneskelig darskap - og fikk publikum til a le med seg.

Men Holberg var mer enn en underholder. Han var opplysningsmann til fingerspissene. Han ville at folk skulle tenke selv, tvile pa autoriteter, bruke fornuften. Gjennom essays, historieverker og satire spredte han opplysningstidens ideer i Norden.

La oss bli kjent med denne fascinerende mannen - komedieforfatteren, professoren, baronen fra Bergen.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-2-8-n-section1',
      type: 'text',
      content: `## Fra Bergen til Europa

Ludvig Holberg ble fodt i Bergen i 1684. Familien var borgerlig, ikke adelig. Faren dode da Ludvig var liten, sa han vokste opp under beskjedne kar.

Som ung reiste han til Kobenhavn for a studere. Det fantes jo ikke noe universitet i Norge. I Kobenhavn studerte han teologi, men det var ikke hans kall. Han var mer interessert i filosofi, historie og litteratur.

Sa begynte reisene. Holberg reiste til Nederland, England, Frankrike, Italia. Han opplevde Europas kulturelle sentra, leste tidens filosofer, motet opplysningstidens ideer. Han sug til seg impulser som han senere skulle bringe hjem.

I 1717 ble Holberg professor i Kobenhavn - forst i metafysikk, senere i historie. Han var na en anerkjent laerd. Men det var forst pa 1720-tallet, da han begynte a skrive komedier for det nye danske teateret, at han ble virkelig berømt.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-2-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvor ble Ludvig Holberg fodt?',
        options: [
          { id: 'a', text: 'Kobenhavn', isCorrect: false },
          { id: 'b', text: 'Odense', isCorrect: false },
          { id: 'c', text: 'Bergen', isCorrect: true },
          { id: 'd', text: 'Slangerup', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Ludvig Holberg ble fodt i Bergen i 1684. Selv om han tilbrakte mesteparten av sitt voksne liv i Kobenhavn, regnes han som norskfodt og er viktig i bade norsk og dansk litteraturhistorie.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-2-8-n-section2',
      type: 'text',
      content: `## Komediene - latter med brodd

Mellom 1722 og 1754 skrev Holberg 33 komedier for Grønnegade Teatret i Kobenhavn. Flere av dem spilles fortsatt - over 300 ar senere!

De mest kjente er "Jeppe pa Bjerget" (1722), "Erasmus Montanus" (1723) og "Den politiske Kandestober" (1722). Alle handler om folk som tror de er noe de ikke er - eller som oppforer seg dumt uten a innse det selv.

I "Jeppe pa Bjerget" moter vi en fattig, drikkfeldig bonde som plutselig vakner i baronens seng og tror han er baron. Hva gjor han? Han begynner umiddelbart a misbruke makten, kommandere henrettelser og oppfore seg verre enn baronen noen gang har gjort.

I "Erasmus Montanus" moter vi en bondegutt som har studert i Kobenhavn og kommer hjem for a vise sin laerdom. Han vil bevise at jorden er rund - noe bygdefolket nekter a tro. Men problemet er ikke bare bondenes uvitenhet. Problemet er ogsa Erasmus' hovmod og mangel pa praktisk klokskap.

Dette er typisk Holberg: Han ler av alle sider. Bade uvitenhet og pedanteri far sitt pass paskrevet.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-2-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Holbergs "doble satire"?',
        options: [
          { id: 'a', text: 'Han skriver to komedier om samme tema', isCorrect: false },
          { id: 'b', text: 'Han ler av begge sider i en konflikt - bade uvitenhet og hovmod', isCorrect: true },
          { id: 'c', text: 'Han skriver pa bade dansk og latin', isCorrect: false },
          { id: 'd', text: 'Han kritiserer bade konge og kirke', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Holbergs satire er "dobbel" fordi han kritiserer begge sider. I Erasmus Montanus ler han bade av bondenes uvitenhet og av studentens pedanteri. Ingen har monopol pa a ha rett - eller feil.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-2-8-n-section3',
      type: 'text',
      content: `## Opplysningsmannen

Holberg var ikke bare underholder. Alt han skrev - komedier, essays, historieverk - tjente opplysningens sak.

Hans mate a opplyse pa var unik. Han brukte humor. Han visste at folk laerer bedre nar de ler, at kritikk glir lettere ned nar den er morsom, at satire kan na inn der tung argumentasjon preller av.

"Jeg skriver komedier for at korrigere laster gjennom latter", sa Holberg. Ved a la folk le av dumhet - ogsa sin egen - hapet han a gjore dem klokere.

Men Holberg skrev ogsa seriøs sakprosa. "Epistler" (1748-1754) er en samling essays om alt fra kvinners utdanning til overtro og moral. Her argumenterer han saklig og elegant for opplysningstidens verdier: fornuft, toleranse, kritisk tenkning.

I en berømt epistel argumenterer han for at kvinner er like begavede som menn. Forskjellen skyldes oppdragelse, ikke natur. "Erfarenheden viser at Fruentimmer ere ligesaa beqvemme til Videnskaber som Maend." Dette var radikalt i 1750!`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-2-8-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-8-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvordan brukte Holberg humor som verktøy for opplysning?',
        options: [
          { id: 'a', text: 'Han fortalte vitser i forelesningene', isCorrect: false },
          { id: 'b', text: 'Han mente at folk laerer bedre nar de ler, og at satire nar inn der tung argumentasjon preller av', isCorrect: true },
          { id: 'c', text: 'Han lo av kongen for a styrte ham', isCorrect: false },
          { id: 'd', text: 'Han brukte ikke humor - han var alvorlig', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Holberg brukte humor strategisk. Han visste at folk er mer apne for kritikk nar de ler, og at satire kan fa folk til a se sine egne svakheter. "Jeg skriver komedier for at korrigere laster gjennom latter", sa han.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-2-8-n-section4',
      type: 'text',
      content: `## Et mangfoldig forfatterskap

Holberg skrev i mange sjangre. Det er en del av hans storhet - han kunne alt.

**Komedier:** 33 stykker for teateret. Fra farser til karakterkomedier. Noen handler om enkeltpersoners lyter, andre om samfunnets darskap.

**Essays:** "Moralske Tanker" og "Epistler" - korte, elegante tekster om etikk, samfunn og menneskeliv. Her er Holberg tenkeren og moralisten.

**Historieverker:** "Danmarks Riges Historie", "Dannemarks og Norges Beskrivelse". Holberg ville gjore historie tilgjengelig for vanlige lesere. Historie var ikke bare for de laerde.

**Roman:** "Niels Klims underjordiske Reise" (1741) - en satirisk fantastisk reise der hovedpersonen oppdager samfunn under jorden. Hvert samfunn speiler og kritiserer europeiske forhold. Boken ble skrevet pa latin for a na europeisk publikum.

**Komisk heltedikt:** "Peder Paars" (1719-20) - en parodi pa antikke epos der en kjopmann fra Kalundborg far heltefunksjoner. Boken ble en skandale og gjorde Holberg berømt.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-2-8-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-8-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er "Niels Klims underjordiske Reise"?',
        options: [
          { id: 'a', text: 'En reiseskildring fra Italia', isCorrect: false },
          { id: 'b', text: 'En satirisk fantastisk roman der underjordiske samfunn speiler og kritiserer europeiske forhold', isCorrect: true },
          { id: 'c', text: 'En komedie om en gruvarbeider', isCorrect: false },
          { id: 'd', text: 'En salmesamling', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Niels Klims underjordiske Reise" (1741) er en satirisk roman der hovedpersonen reiser til samfunn under jorden. Hvert samfunn representerer en kritikk av europeiske forhold. Holberg bruker fiksjonen som dekke for samfunnskritikk.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-2-8-n-section5',
      type: 'text',
      content: `## Norsk eller dansk?

Et sporsmaal som stadig dukker opp: Er Holberg norsk eller dansk? Han ble fodt i Bergen, men levde og arbeidet i Kobenhavn. Han skrev pa dansk - det fantes jo ikke norsk skriftsprak pa den tiden.

Svaret er kanskje: Begge deler - og ingen av delene. Holberg levde i en tid da Norge og Danmark var ett rike. Det ga ikke mening a spørre om han var "norsk" eller "dansk" slik vi tenker i dag.

Holberg selv var stolt av sin bergenske bakgrunn. Han refererte til Norge og nordmenn i verkene sine. Samtidig var Kobenhavn hans hjem i voksen alder, og det var der karrieren hans utfoldet seg.

I dag regnes Holberg som en del av bade norsk og dansk litteraturhistorie. Han tilhorer en felles arv fra den tiden rikene var forent. Det er kanskje det mest saklige svaret.

Holberg dode i 1754 og ligger begravet i Sorø i Danmark. Han hadde blitt adlet i 1747 og bar tittelen baron. Fra fattig bergensk gutt til europeisk berømthet og baron - Holbergs eget liv var nesten like dramatisk som komediene hans.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-2-8-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-8-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor er det vanskelig a si om Holberg var "norsk" eller "dansk"?',
        options: [
          { id: 'a', text: 'Fordi han aldri sa hvor han kom fra', isCorrect: false },
          { id: 'b', text: 'Fordi Norge og Danmark var ett rike, og kategoriene ikke ga mening pa hans tid', isCorrect: true },
          { id: 'c', text: 'Fordi han skrev pa latin', isCorrect: false },
          { id: 'd', text: 'Fordi han bodde i Sverige', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Pa Holbergs tid var Norge og Danmark ett rike. Det ga ikke mening a skille mellom "norsk" og "dansk" slik vi gjor i dag. Holberg tilhorer en felles dansk-norsk kulturarv fra unionstiden.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-2-8-n-summary',
      type: 'text',
      content: `## Oppsummering: Ludvig Holberg

Du har na motet Ludvig Holberg, opplysningstidens storste forfatter i Norden. Her er hovedpunktene:

**Liv og virke:**
- Fodt i Bergen 1684, dode i Kobenhavn 1754
- Professor i Kobenhavn fra 1717
- Adlet i 1747, bar tittelen baron

**Komedier:**
- 33 komedier for Grønnegade Teatret
- De viktigste: "Jeppe pa Bjerget", "Erasmus Montanus", "Den politiske Kandestober"
- Dobbel satire: Ler av begge sider i en konflikt

**Annet forfatterskap:**
- Essays: "Moralske Tanker", "Epistler"
- Historieverker: "Danmarks Riges Historie"
- Roman: "Niels Klims underjordiske Reise"
- Heltedikt: "Peder Paars"

**Opplysningsmann:**
- Brukte humor som verktoy for opplysning
- "Korrigere laster gjennom latter"
- Fremmet fornuft, toleranse og kritisk tenkning
- Argumenterte for kvinners likeverd

**Norsk eller dansk?**
Begge deler - han tilhorer den felles dansk-norske kulturarven fra unionstiden.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.9-2.11 - Forenklede versjoner (for a holde filen handterbar)
// ============================================================================

export const CHAPTER_NORSK_VG2_2_9_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-2-9-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '2.9',
  title: 'Holbergs komedier i dybden',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk Holbergs komedier naermere - fra Jeppe til Erasmus.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  linkedChapterId: 'norsk-vg2-2-9',
  content: [
    {
      id: 'norsk-vg2-2-9-n-intro',
      type: 'text',
      content: `## Inn i Holbergs teatersalong

Tenk deg at du sitter i Grønnegade Teatret i Kobenhavn, ar 1722. Teppet gar opp. Pa scenen star en skitten, utslitt mann som klager over kona si, over livet, over alt. Han heter Jeppe, og han er i ferd med a bli en av litteraturhistoriens mest kjente skikkelser.

I dette kapittelet skal vi ga dypere inn i Holbergs komedier. Vi skal se hvordan han bygger opp karakterer og konflikter, hvordan satiren fungerer, og hvorfor disse stykkene fortsatt spilles over 300 ar senere.

Komediene er ikke bare underholdning. De er samfunnskritikk forkledd som moro. De stiller sporsmal som fortsatt er relevante: Hva skjer med mennesker nar de far makt? Kan kunnskap uten klokskap vaere farlig? Hvem har rett til a definere sannhet?`,
    },
    {
      id: 'norsk-vg2-2-9-n-section1',
      type: 'text',
      content: `## Jeppe pa Bjerget - maktens ansikt

"Jeppe pa Bjerget" er kanskje Holbergs mest spilte komedie. Handlingen er enkel: Jeppe er en fattig bonde som plages av kona Nille og sin egen drikkfeldighet. En dag finner baronen ham sovende og bestemmer seg for a spille en spok. Jeppe fores til baronens seng, kles i fine klaer og behandles som baron.

Nar Jeppe vakner, tror han forst han er i himmelen, sa at han er baron. Og hva gjor han? Han begynner umiddelbart a misbruke makten. Han kommanderer henrettelser, oppforer seg tyrannisk, behandler tjenerne verre enn noen baron ville gjort.

Holberg stiller et ubehagelig sporsmaal: Er undertrykte mennesker bedre enn undertrykkerne? Jeppe, som vi synes synd pa i begynnelsen, viser seg a bli en tyrann nar han far sjansen. Makt korrumperer - uavhengig av hvem som har den.

Men komedien lar oss ogsa le av overklassen. Baronens spok er grusom. Han leker med et menneskes liv for moro skyld. Satiren rammer begge sider.`,
    },
    {
      id: 'norsk-vg2-2-9-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-9-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva skjer nar Jeppe far makt i "Jeppe pa Bjerget"?',
        options: [
          { id: 'a', text: 'Han blir en god og rettferdig leder', isCorrect: false },
          { id: 'b', text: 'Han misbruker makten og blir tyrannisk', isCorrect: true },
          { id: 'c', text: 'Han rommer og gjemmer seg', isCorrect: false },
          { id: 'd', text: 'Han frigjor de andre bondene', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Jeppe misbruker makten umiddelbart. Han kommanderer henrettelser og oppforer seg tyrannisk. Holberg viser at makt kan korrumpere hvem som helst - ogsa de som selv har vaert undertrykt.',
      },
    },
    {
      id: 'norsk-vg2-2-9-n-section2',
      type: 'text',
      content: `## Erasmus Montanus - kunnskapens hovmod

I "Erasmus Montanus" moter vi Rasmus Berg, en bondegutt som har studert i Kobenhavn og kommer hjem med det latinske navnet Erasmus Montanus. Han har laert filosofi og vil vise sin laerdom.

Problemet er at Erasmus ikke bare vil opplyse - han vil dominere. Han vil "bevise gal" alle som er uenige med ham. Han bruker latin for a imponere og ydmyke. Han er sa opptatt av a ha rett at han glemmer a vaere klok.

Konflikten topper seg nar Erasmus vil bevise at jorden er rund. Bygdefolket, anfört av Per Degn, nekter a tro det. Scenen er komisk - vi ler av bondenes uvitenhet. Men vi ler ogsa av Erasmus' arroganse.

Slutten er bitter: Erasmus tvinges til a si at jorden er flat for a fa gifte seg med kjæresten Lisbet. Sannheten ma vike for sosial tilhørighet. Holberg gir ikke noe enkelt svar - han viser kompleksiteten i forholdet mellom kunnskap, makt og fellesskap.`,
    },
    {
      id: 'norsk-vg2-2-9-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-9-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva ma Erasmus gjore for a fa gifte seg med Lisbet?',
        options: [
          { id: 'a', text: 'Bevise at han er laerd', isCorrect: false },
          { id: 'b', text: 'Reise tilbake til Kobenhavn', isCorrect: false },
          { id: 'c', text: 'Fornekte sin kunnskap og si at jorden er flat', isCorrect: true },
          { id: 'd', text: 'Sloss med Per Degn', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Erasmus tvinges til a si at jorden er flat - a fornekte det han vet er sant - for a bli akseptert i bygda og fa Lisbet. Det er en bitter slutt som viser konflikten mellom sannhet og sosial tilhørighet.',
      },
    },
    {
      id: 'norsk-vg2-2-9-n-section3',
      type: 'text',
      content: `## Satirens kunst

Holberg var en mester i satire. Men hva er egentlig satire, og hvordan virker den?

Satire bruker humor, ironi og overdrivelse for a kritisere. Den avslorer svakheter ved a gjore dem tydelige og latterlige. Nar vi ler av Jeppe eller Erasmus, ser vi ogsa oss selv - for hvem har ikke noen ganger vaert hovmodig eller misbrukt sin posisjon?

Holbergs satire er spesiell fordi den er "dobbel". Han ler aldri bare av en side. I Erasmus Montanus kritiserer han bade bondenes uvitenhet og studentens pedanteri. I Jeppe pa Bjerget kritiserer han bade bondens lyter og adelens maktmisbruk.

Denne balansen gjor satiren troverdig. Holberg virker ikke som han har en politisk agenda - han virker som en som ser menneskelig darskap overalt. Og det gjor at vi tar kritikken inn pa en annen mate.

Satire har ogsa en pedagogisk funksjon. Ved a le av dumhet kan vi kanskje unnga a gjore det samme selv. Latteren aper for refleksjon.`,
    },
    {
      id: 'norsk-vg2-2-9-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-9-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner satire som virkemiddel?',
        options: [
          { id: 'a', text: 'Direkte, alvorlig kritikk uten humor', isCorrect: false },
          { id: 'b', text: 'Bruk av humor, ironi og overdrivelse for a kritisere', isCorrect: true },
          { id: 'c', text: 'Komplisert filosofisk argumentasjon', isCorrect: false },
          { id: 'd', text: 'Religiøs fordømmelse', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Satire bruker humor, ironi og overdrivelse for a kritisere. Ved a gjore svakheter tydelige og latterlige, far satiren oss til a se og reflektere over problemer pa en mate som direkte kritikk kanskje ikke kunne oppnadd.',
      },
    },
    {
      id: 'norsk-vg2-2-9-n-section4',
      type: 'text',
      content: `## Typekarakterer og komikk

Holbergs karakterer er "typer" - forenklede utgaver av menneskelige egenskaper. Jeppe er den undertrykte bonden. Erasmus er pedanten. Hermann von Bremen i "Den politiske Kandestober" er besserwisseren som tror han forstar politikk bedre enn alle andre.

Hvorfor typer? Fordi de gjor satiren tydelig. Vi trenger ikke lang psykologisk utvikling for a forsta hvem karakterene er. Sa snart vi ser Erasmus bruke latin for a imponere, vet vi hva slags figur dette er.

Typene gjor det ogsa lettere a le. Vi ler ikke av individer, men av menneskelige svakheter i konsentrert form. Det er lettere a gjenkjenne seg selv i en type enn i et komplekst individ.

Komikken i Holbergs stykker kommer fra flere kilder: situasjonskomikk (Jeppe som vakner i baronens seng), verbal komikk (Erasmus' absurde syllogismer), karakterkomikk (motsetningen mellom pretensjoner og virkelighet). Alt dette virker sammen for a skape latter - og refleksjon.`,
    },
    {
      id: 'norsk-vg2-2-9-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-9-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor bruker Holberg "typekarakterer"?',
        options: [
          { id: 'a', text: 'Fordi han ikke kunne skrive komplekse karakterer', isCorrect: false },
          { id: 'b', text: 'Fordi typer gjor satiren tydelig og lar oss gjenkjenne menneskelige svakheter', isCorrect: true },
          { id: 'c', text: 'Fordi det var pabudt av kongen', isCorrect: false },
          { id: 'd', text: 'Fordi publikum ikke likte komplekse karakterer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Typekarakterer gjor satiren tydelig og umiddelbart forstaelig. Vi gjenkjenner svakhetene (pedanteri, hovmod, uvitenhet) og kan le av dem. Det er lettere a se seg selv i en type enn i et psykologisk komplekst individ.',
      },
    },
    {
      id: 'norsk-vg2-2-9-n-section5',
      type: 'text',
      content: `## Holberg i dag

Over 300 ar etter at de ble skrevet, spilles Holbergs komedier fortsatt. Det Norske Teatret, Nationaltheatret og Det Kongelige Teater setter dem opp jevnlig. Hvorfor?

Fordi temaene er tidlose. Vi har fortsatt folk som tror de vet bedre enn alle andre (tenk pa sosiale medier). Vi har fortsatt konflikter mellom "eksperter" og "vanlige folk". Vi ser fortsatt at makt kan korrumpere.

Formen ma ofte tilpasses. Sprak moderniseres, sammenhenger forklares. Men kjernen - den menneskelige darskapen - trenger ingen oversettelse.

Holberg ville nok vært fornoyd. Han skrev for a korrigere laster gjennom latter. At latteren fortsatt fungerer, betyr at komediene gjor jobben sin. Vi ler av Jeppe og Erasmus - og kanskje, et oyeblikk, ser vi oss selv.`,
    },
    {
      id: 'norsk-vg2-2-9-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-9-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor spilles Holbergs komedier fortsatt i dag?',
        options: [
          { id: 'a', text: 'Fordi det er billig a sette dem opp', isCorrect: false },
          { id: 'b', text: 'Fordi temaene er tidlose og vi fortsatt kan kjenne oss igjen', isCorrect: true },
          { id: 'c', text: 'Fordi det er pabudt ved lov', isCorrect: false },
          { id: 'd', text: 'Fordi ingen skriver komedier lenger', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Holbergs komedier overlever fordi temaene er tidlose: maktmisbruk, hovmod, konflikten mellom kunnskap og klokskap. Vi gjenkjenner typene og kan le av dem - og av oss selv.',
      },
    },
    {
      id: 'norsk-vg2-2-9-n-summary',
      type: 'text',
      content: `## Oppsummering: Holbergs komedier

**Jeppe pa Bjerget:**
- Handler om makt og avmakt
- Jeppe misbruker makt nar han far den
- Satire rammer bade bonde og adel

**Erasmus Montanus:**
- Handler om kunnskap og klokskap
- Dobbel satire: bade uvitenhet og pedanteri
- Sannhet ma vike for sosial tilhørighet

**Satirens kunst:**
- Humor, ironi og overdrivelse
- Dobbel satire - ler av begge sider
- Pedagogisk funksjon gjennom latter

**Typekarakterer:**
- Forenklede utgaver av menneskelige egenskaper
- Gjor satiren tydelig og gjenkjennelig
- Lettere a se seg selv

**Tidlos relevans:**
- Temaene er fortsatt aktuelle
- Komediene spilles jevnlig
- Menneskelig darskap trenger ingen oversettelse`,
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG2_2_10_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-2-10-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '2.10',
  title: 'Sakprosa i opplysningstiden',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk sakprosaens gullalder - da klart sprak ble et verktøy for forandring.',
  estimatedMinutes: 35,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'reflektere over sakprosateksters formal og retoriske situasjon',
  ],
  linkedChapterId: 'norsk-vg2-2-10',
  content: [
    {
      id: 'norsk-vg2-2-10-n-intro',
      type: 'text',
      content: `## Ordenes makt

Opplysningstiden var sakprosaens gullalder. Aldri for hadde sa mange skrevet sa mye for a pavirke hvordan folk tenker. Essays, pamfletter, encyklopedier, vitenskapelige avhandlinger - alle skulle de spre lys og bekjempe morket av uvitenhet og overtro.

Opplysningsfilosofene forsto noe viktig: Sprak er makt. Klare tanker krever klart sprak. Og klart sprak kan forandre verden.`,
    },
    {
      id: 'norsk-vg2-2-10-n-section1',
      type: 'text',
      content: `## Sakprosaens sjangre

Opplysningstiden utviklet flere sakprosasjangre som vi fortsatt bruker.

**Essayet** er en personlig, resonerende tekst som utforsker et tema. Det kombinerer kunnskap med refleksjon. Holbergs "Epistler" er gode eksempler - korte, elegante tekster om alt fra kvinners utdanning til overtro.

**Pamfletten** er kort og polemisk - en tekst som tar stilling i en aktuell debatt. Den var ofte anonym for a beskytte forfatteren.

**Encyklopedien** - det store oppslagsverket - ble opplysningens storprosjekt. Diderot og d'Alemberts franske Encyklopedi (1751-1772) samlet all menneskelig kunnskap i ett verk.`,
    },
    {
      id: 'norsk-vg2-2-10-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-10-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var den franske Encyklopedien?',
        options: [
          { id: 'a', text: 'En roman av Voltaire', isCorrect: false },
          { id: 'b', text: 'Et oppslagsverk som samlet all kunnskap', isCorrect: true },
          { id: 'c', text: 'En salmesamling', isCorrect: false },
          { id: 'd', text: 'En lovsamling', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Den franske Encyklopedien (1751-1772), redigert av Diderot og d\'Alembert, samlet all tilgjengelig menneskelig kunnskap. Det var opplysningstidens mest ambisioese prosjekt og et symbol pa troen pa at kunnskap skulle vaere tilgjengelig for alle.',
      },
    },
    {
      id: 'norsk-vg2-2-10-n-section2',
      type: 'text',
      content: `## Klarhet som ideal

Opplysningstidens sakprosa har et kjennetegn som skiller den fra det meste av det som kom for: klarhet. Malet var at alle skulle kunne forsta.

Barokken hadde elsket det kompliserte - lange setninger, innviklede metaforer, laerd ornamentering. Opplysningstiden sa det motsatte: Kompliserte tanker skal formuleres enkelt. Latin erstattes av morsmal. Pratet er ikke til for a imponere, men for a opplyse.

Dette var radikalt. Det betydde at kunnskap ikke lenger skulle vaere forbeholdt de fa som mestret latinens labyrinter. Alle som kunne lese - og stadig flere kunne det - skulle ha tilgang til tidens beste tenkning.`,
    },
    {
      id: 'norsk-vg2-2-10-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-10-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var opplysningstidens ideal for sprak?',
        options: [
          { id: 'a', text: 'Komplisert og ornamentert', isCorrect: false },
          { id: 'b', text: 'Klart og forstaelig for alle', isCorrect: true },
          { id: 'c', text: 'Bare pa latin', isCorrect: false },
          { id: 'd', text: 'Poetisk og folelsesladet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Opplysningstiden la vekt pa klarhet: Kompliserte tanker skulle formuleres enkelt sa alle kunne forsta. Dette var et brudd med barokkens ornamenterte stil og en demokratisering av kunnskap.',
      },
    },
    {
      id: 'norsk-vg2-2-10-n-section3',
      type: 'text',
      content: `## Holberg som sakprosaforfatter

Holberg skrev ikke bare komedier. Hans essays - "Moralske Tanker" og "Epistler" - er mesterverk i opplysningstidens sakprosa.

I Epistel 347 argumenterer han for kvinners likeverdighet: "At Qvindekionnet har vaeret og endnu er i saa ringe Anseelse hos alle Nationer, kommer ikke af Naturens Forskiel, men af Opdragelsen og Ovelsen."

Legg merke til argumentasjonen: Han appellerer til erfaring ("Erfarenheden viser"), bruker logikk, stiller retoriske sporsmal. Han moraliserer ikke - han argumenterer. Det er opplysningstidens mate.`,
    },
    {
      id: 'norsk-vg2-2-10-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-10-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva argumenterer Holberg for i Epistel 347?',
        options: [
          { id: 'a', text: 'At menn er smartere enn kvinner', isCorrect: false },
          { id: 'b', text: 'At kvinner er like begavede som menn - forskjellen skyldes oppdragelse', isCorrect: true },
          { id: 'c', text: 'At kvinner ikke burde fa stemmerett', isCorrect: false },
          { id: 'd', text: 'At utdanning er farlig for kvinner', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Holberg argumenterer for at kvinner er like begavede som menn, og at forskjellen i prestasjon skyldes oppdragelse, ikke natur. Dette var radikalt i 1750 og viser opplysningstidens tro pa fornuft mot fordommer.',
      },
    },
    {
      id: 'norsk-vg2-2-10-n-section4',
      type: 'text',
      content: `## Retoriske virkemidler

Opplysningstidens sakprosa brukte bevisst retoriske virkemidler for a overbevise.

**Logos** - appell til fornuften - var viktigst. Argumenter skulle bygges pa logikk og erfaring, ikke pa tradisjon eller autoritet alene.

**Etos** - troverdighet - ble ogsa brukt. Forfattere viste sin laerdom og upartiskhet for a vinne tillit.

**Patos** - appell til folelser - ble brukt med varsomhet. For mye folelser var ikke "opplyst".

I tillegg brukte mange ironi og satire - a kritisere gjennom a late som man sier det motsatte. Voltaire var en mester i dette.`,
    },
    {
      id: 'norsk-vg2-2-10-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-10-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilken appellform var viktigst i opplysningstidens sakprosa?',
        options: [
          { id: 'a', text: 'Patos - appell til folelser', isCorrect: false },
          { id: 'b', text: 'Logos - appell til fornuften', isCorrect: true },
          { id: 'c', text: 'Religiøs autoritet', isCorrect: false },
          { id: 'd', text: 'Tradisjon', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Logos - appell til fornuften - var den viktigste appellformen i opplysningstidens sakprosa. Argumenter skulle bygges pa logikk og erfaring. For mye folelser (patos) ble sett pa som lite "opplyst".',
      },
    },
    {
      id: 'norsk-vg2-2-10-n-section5',
      type: 'text',
      content: `## Sakprosaens arv

Opplysningstidens sakprosaidealer lever videre. Nar du leser en kronikk i avisen, nar du skriver en argumenterende tekst pa skolen, nar du krever at pastander skal begrunnes - da folger du i opplysningsfilosofenes fotspor.

Klarhet, saklighet, argumentasjon - disse idealene tok form pa 1700-tallet og preger fortsatt var forventning til god sakprosa. Oplysningstiden laerte oss at sprak er makt, og at den som vil pavirke verden, ma mestre ordene.`,
    },
    {
      id: 'norsk-vg2-2-10-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-10-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilke sakprosaidealer fra opplysningstiden preger oss fortsatt?',
        options: [
          { id: 'a', text: 'Religiøs undertone og latin', isCorrect: false },
          { id: 'b', text: 'Klarhet, saklighet og argumentasjon', isCorrect: true },
          { id: 'c', text: 'Komplisert sprak og laerde ord', isCorrect: false },
          { id: 'd', text: 'Anonymitet og sensur', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Opplysningstidens idealer om klarhet, saklighet og argumentasjon preger fortsatt var forventning til god sakprosa. Nar vi krever at pastander skal begrunnes og at sprak skal vaere forstaelig, folger vi opplysningsfilosofene.',
      },
    },
    {
      id: 'norsk-vg2-2-10-n-summary',
      type: 'text',
      content: `## Oppsummering: Sakprosa i opplysningstiden

**Sjangre:**
- Essay: Personlig, resonerende tekst
- Pamflett: Kort, polemisk debattekst
- Encyklopedi: Oppslagsverk som samler kunnskap

**Idealer:**
- Klarhet: Kompliserte tanker i enkelt sprak
- Saklighet: Argumenter basert pa fornuft og erfaring
- Tilgjengelighet: Kunnskap for alle, ikke bare eliten

**Retoriske virkemidler:**
- Logos (fornuft) viktigst
- Etos (troverdighet)
- Patos (folelser) med varsomhet
- Ironi og satire

**Holbergs epistler:**
- Essay om etikk og samfunn
- Argumenterer for kvinners likeverd
- Bruker erfaring og logikk

**Arv:**
- Klarhet, saklighet og argumentasjon
- Preger fortsatt var forventning til god sakprosa`,
    },
  ],
  exercises: [],
};

export const CHAPTER_NORSK_VG2_2_11_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-2-11-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '2.11',
  title: 'Kvinnelige stemmer i litteraturhistorien',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag de kvinnene som brøt igjennom i en tid da de skulle tie.',
  estimatedMinutes: 35,
  competenceGoals: [
    'lese og tolke tekster fra 1500-1850 i kulturhistorisk kontekst',
    'reflektere over hvordan tekster fra ulike tider behandler kjonnstematikk',
  ],
  linkedChapterId: 'norsk-vg2-2-11',
  content: [
    {
      id: 'norsk-vg2-2-11-n-intro',
      type: 'text',
      content: `## De som brøt tausheten

I perioden vi har studert - fra 1500 til 1850 - var det meste av litteraturen skrevet av menn. Kvinner hadde liten tilgang til utdanning, ingen plass i offentligheten, og ble forventet a vie seg til hjem og familie.

Men noen kvinner brøt igjennom. De grep pennen og skrev seg inn i historien, mot alle odds. Deres stemmer gir oss et unikt innblikk i kvinners liv og tanker i en tid da de fleste kvinner forble stumme i den skriftlige kulturen.`,
    },
    {
      id: 'norsk-vg2-2-11-n-section1',
      type: 'text',
      content: `## Hindringer og strategier

Hva skulle til for at en kvinne kunne bli forfatter mellom 1500 og 1850?

Utdanning var det forste hinderet. Jenter fikk sjelden laere mer enn a lese og skrive. Universitetene var stengt for kvinner. De som fikk god utdanning, var som regel fra velstaende familier med opplyste fedre.

Sosialt press var et annet hinder. En kvinne som publiserte, risikerte sitt rykte. A opptre offentlig - a ha meninger, a bli lest - ble sett som usommelig for kvinner.

Mange brukte strategier for a omga hindrene: **Religiose emner** var akseptable for kvinner, sa mange skrev salmer og andaktslitteratur. **Anonymitet** beskyttet mot kritikk. **Mannlige stottespillere** - fedre, ektemenn, forleggere - kunne apne dorer.`,
    },
    {
      id: 'norsk-vg2-2-11-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilke hindringer møtte kvinnelige forfattere for 1850?',
        options: [
          { id: 'a', text: 'Ingen - kvinner kunne skrive fritt', isCorrect: false },
          { id: 'b', text: 'Begrenset utdanning, sosialt press og mangel pa tilgang til offentligheten', isCorrect: true },
          { id: 'c', text: 'Bare økonomiske problemer', isCorrect: false },
          { id: 'd', text: 'Forbud mot a lese', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kvinnelige forfattere møtte mange hindringer: Begrenset tilgang til utdanning, sosialt press mot a opptre offentlig, og forventninger om at kvinner skulle vie seg til hjem og familie. De som brøt igjennom, matte ofte bruke strategier som anonymitet eller religiose emner.',
      },
    },
    {
      id: 'norsk-vg2-2-11-n-section2',
      type: 'text',
      content: `## Dorothe Engelbretsdatter - pioneren

Vi har allerede møtt Dorothe (1634-1716). La oss oppsummere hvorfor hun var sa viktig:

Hun var Nordens forste profesjonelle kvinnelige forfatter. Hun fikk kongelig pensjon - uhort for en kvinne. Hun skrev under eget navn og forsvarte sin rett til a skrive.

Dorothes strategi var a skrive innenfor den religiose sfaeren. Salmer og andakt var akseptable for kvinner. Men innenfor denne rammen skapte hun noe personlig og nytt - diktning preget av egen sorg og lengsel.`,
    },
    {
      id: 'norsk-vg2-2-11-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvorfor valgte Dorothe Engelbretsdatter a skrive religiøs diktning?',
        options: [
          { id: 'a', text: 'Fordi hun ikke kunne skrive om annet', isCorrect: false },
          { id: 'b', text: 'Fordi religiose emner var akseptable for kvinner', isCorrect: true },
          { id: 'c', text: 'Fordi kongen befalte det', isCorrect: false },
          { id: 'd', text: 'Fordi hun ikke likte andre emner', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Religiøs diktning var en av fa akseptable sjangre for kvinner. Ved a skrive salmer og andakt kunne Dorothe publisere uten a bryte for mye med tidens normer. Men innenfor denne rammen skapte hun personlig og nyskapende diktning.',
      },
    },
    {
      id: 'norsk-vg2-2-11-n-section3',
      type: 'text',
      content: `## Fra barokk til romantikk

Mellom Dorothe og 1800-tallet var det fa kvinnelige forfattere i Norden. Men utover pa 1800-tallet begynte endringer a skje.

Opplysningstidens ideer om likhet og fornuft ga grobunn for diskusjon om kvinners stilling. Flere jenter fikk utdanning. Salonger og litteraere kretser ga kvinner rom for intellektuell deltakelse.

Sa kom **Camilla Collett** (1813-1895). Med romanen "Amtmandens Døttre" (1854-55) skrev hun den forste norske tendensromanen - en roman med et samfunnskritisk budskap. Hun kritiserte ekteskap uten kjærlighet og kvinner som ble gift bort mot sin vilje.

Collett markerer overgangen til en ny tid. Hun skrev ikke lenger innenfor religionens ramme. Hun kritiserte samfunnet apent og direkte. Hun banet vei for de store kvinnelige forfatterne som kom - Amalie Skram, Sigrid Undset og andre.`,
    },
    {
      id: 'norsk-vg2-2-11-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kritiserte Camilla Collett i "Amtmandens Døttre"?',
        options: [
          { id: 'a', text: 'Religionen', isCorrect: false },
          { id: 'b', text: 'Ekteskap uten kjærlighet og at kvinner ble gift bort mot sin vilje', isCorrect: true },
          { id: 'c', text: 'Fattigdommen i Norge', isCorrect: false },
          { id: 'd', text: 'Den danske kongen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Camilla Collett kritiserte ekteskap uten kjærlighet og at kvinner ble gift bort mot sin vilje. "Amtmandens Døttre" (1854-55) var den forste norske tendensromanen - en roman med et klart samfunnskritisk budskap.',
      },
    },
    {
      id: 'norsk-vg2-2-11-n-section4',
      type: 'text',
      content: `## Usynliggjorte stemmer

Det er viktig a huske at litteraturhistorien lenge ble skrevet av menn, om menn. Kvinnelige forfattere ble ofte oversett eller nedvurdert. Dorothe Engelbretsdatter var enormt populaer i sin samtid, men ble lenge glemt i litteraturhistorien.

Forst i nyere tid har forskere gatt tilbake og "gjenoppdaget" kvinnelige forfattere. De har funnet brev, dagboker og manuskripter som aldri ble publisert. De har studert hvordan kvinner skrev "utenfor" den offisielle litteraturen.

Dette minner oss om at historien alltid er selektiv. Noen stemmer blir hørt, andre blir glemt. A studere de kvinnelige stemmene er ogsa a stille sporsmal ved hvem som far definere hva "litteratur" er.`,
    },
    {
      id: 'norsk-vg2-2-11-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor ble mange kvinnelige forfattere lenge glemt i litteraturhistorien?',
        options: [
          { id: 'a', text: 'Fordi de ikke skrev noe viktig', isCorrect: false },
          { id: 'b', text: 'Fordi litteraturhistorien ble skrevet av menn som fokuserte pa mannlige forfattere', isCorrect: true },
          { id: 'c', text: 'Fordi de bad om a bli glemt', isCorrect: false },
          { id: 'd', text: 'Fordi alt de skrev gikk tapt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Litteraturhistorien ble lenge skrevet av menn som fokuserte pa mannlige forfattere. Kvinnelige forfattere - selv de som var populaere i sin samtid, som Dorothe - ble oversett. Forst i nyere tid har forskere "gjenoppdaget" mange av dem.',
      },
    },
    {
      id: 'norsk-vg2-2-11-n-section5',
      type: 'text',
      content: `## Hva de larte oss

De kvinnelige forfatterne fra 1500-1850 larte oss noe viktig: At stemmer kan bryte igjennom selv under de vanskeligste forhold. At litteratur kan skrives fra marginene. At personlig erfaring - sorg, lengsel, opprør - kan bli universell kunst.

De viste ogsa at sjangre og konvensjoner kan brukes kreativt. Dorothe tok den religiose salmen og fylte den med personlig smerte. Collett tok romanen og gjorde den til vapen i kampen for kvinners rettigheter.

Deres arv er ikke bare verkene de etterlot. Det er ogsa de dorene de apnet for dem som kom etter.`,
    },
    {
      id: 'norsk-vg2-2-11-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva laerer vi av de kvinnelige forfatterne fra 1500-1850?',
        options: [
          { id: 'a', text: 'At kvinner ikke kunne skrive godt', isCorrect: false },
          { id: 'b', text: 'At stemmer kan bryte igjennom selv under vanskelige forhold', isCorrect: true },
          { id: 'c', text: 'At bare menn bor skrive litteratur', isCorrect: false },
          { id: 'd', text: 'At religiøs diktning er den beste', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'De kvinnelige forfatterne laerte oss at stemmer kan bryte igjennom selv under de vanskeligste forhold. De viste at litteratur kan skrives fra marginene og at personlig erfaring kan bli universell kunst. De apnet dorer for dem som kom etter.',
      },
    },
    {
      id: 'norsk-vg2-2-11-n-summary',
      type: 'text',
      content: `## Oppsummering: Kvinnelige stemmer

**Hindringer:**
- Begrenset utdanning
- Sosialt press mot offentlig opptreden
- Forventninger om a vie seg til hjem og familie

**Strategier:**
- Religiose emner (akseptable for kvinner)
- Anonymitet
- Mannlige stottespillere

**Viktige forfattere:**
- Dorothe Engelbretsdatter (1634-1716): Nordens forste profesjonelle kvinnelige forfatter
- Camilla Collett (1813-1895): Forste norske tendensroman, kritikk av ekteskapet

**Arv:**
- Viste at stemmer kan bryte igjennom
- Apnet dorer for senere kvinnelige forfattere
- Minner oss om at litteraturhistorien er selektiv

**Lardommer:**
- Personlig erfaring kan bli universell kunst
- Sjangre kan brukes kreativt
- Usynliggjorte stemmer kan gjenoppdages`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG2_NARRATIV_DEL2_CHAPTERS = [
  CHAPTER_NORSK_VG2_2_1_NARRATIV,
  CHAPTER_NORSK_VG2_2_2_NARRATIV,
  CHAPTER_NORSK_VG2_2_3_NARRATIV,
  CHAPTER_NORSK_VG2_2_4_NARRATIV,
  CHAPTER_NORSK_VG2_2_5_NARRATIV,
  CHAPTER_NORSK_VG2_2_6_NARRATIV,
  CHAPTER_NORSK_VG2_2_7_NARRATIV,
  CHAPTER_NORSK_VG2_2_8_NARRATIV,
  CHAPTER_NORSK_VG2_2_9_NARRATIV,
  CHAPTER_NORSK_VG2_2_10_NARRATIV,
  CHAPTER_NORSK_VG2_2_11_NARRATIV,
];
