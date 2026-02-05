/**
 * Norsk VG3 - Narrative versjoner Del 6 (Kapittel 4.1-4.11)
 *
 * Engasjerende, fortellende versjoner av kapitlene om lyrikk, drama og sakprosa,
 * optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1 NARRATIV: Lyrikk fra 1850 til i dag
// ============================================================================

export const CHAPTER_NORSK_VG3_4_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-4-1-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '4.1',
  title: 'Lyrikk fra 1850 til i dag',
  subtitle: 'Narrativ versjon',
  description: 'Reis gjennom 170 år med norsk lyrikk - fra Wergelands veldige verselinjer til samtidens frie dikt.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litteraere analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-4-1',
  content: [
    {
      id: 'norsk-vg3-4-1-n-intro',
      type: 'text',
      content: `## En reise gjennom diktets landskap

Forestill deg at du star foran et stort maleri. Det viser et landskap som strekker seg fra fjerne fjell til nare kyster, fra morke skoger til apne sletter. Dette maleriet er norsk lyrikk fra 1850 til i dag - et landskap i stadig forandring, men alltid med noe gjenkjennelig norsk.

Vi skal na legge ut pa en reise gjennom dette landskapet. Vi starter i romantikkens tid, der diktene var som store katedraler av rim og rytme. Vi beveger oss gjennom realismens noe stillere periode, videre til nyromantikkens drommeaktige stemninger. Sa bryter modernismen inn som et jordskjelv, og plutselig ser alt annerledes ut. Til slutt nar vi var egen tid, der lyrikken har tatt utallige former.

Pa denne reisen vil du mote diktere som har formet det norske spraket og den norske sjelen. Du vil lare a lytte til rytmer og bilder, og du vil oppdage at et lite dikt kan romme hele universer av mening.`,
    },
    {
      id: 'norsk-vg3-4-1-n-section1',
      type: 'text',
      content: `## Romantikken - diktets gullalder

La oss starte reisen i romantikkens tid, rundt forste halvdel av 1800-tallet. Her moter vi to giganter som star som motpoler i norsk litteratur: Henrik Wergeland og Johan Sebastian Welhaven.

Wergeland var den viltre entusiasten. Hans dikt strommet over av folelser, naturbilder og politisk engasjement. Han skrev om alt fra universets storhet til den minste blomst, alltid med en glod som kunne varme eller brenne. Diktene hans var som fossefallet - veldige, ukontrollerte, fulle av kraft.

Welhaven var den elegante klassisisten. Han ville ha form og balanse, ro og harmoni. Der Wergeland sprutet, var Welhaven polert. Hans dikt var som stille fjordvann som speiler fjellene - vakre, klare, beherskede.

Mellom disse to polene utfoldet romantikken seg. Diktene handlet om naturen som speil for sjelen, om folkeeventyr og sagn, om nasjonal identitet i et nylig selvstendig Norge. Formen var fast: rim og rytme holdt diktene sammen som et stillas holder en bygning.

Denne perioden la grunnlaget for alt som skulle komme. Nar vi leser romantikkens dikt i dag, horer vi ekkoet av et folk som sokte sin egen stemme.`,
    },
    {
      id: 'norsk-vg3-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva kjennetegnet lyrikken i romantikken?',
        options: [
          { id: 'a', text: 'Fri vers uten rim og rytme', isCorrect: false },
          { id: 'b', text: 'Fast form med rim og rytme, nasjonale og romantiske temaer', isCorrect: true },
          { id: 'c', text: 'Politisk agitasjon og arbeiderdikt', isCorrect: false },
          { id: 'd', text: 'Eksperimentell spraklek og fragmentering', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Romantikkens lyrikk var preget av fast form med rim og rytme. Temaene var ofte nasjonale og romantiske, med fokus pa natur, folkeeventyr og nasjonal identitet. Wergeland og Welhaven representerte ulike stiler innenfor denne tradisjonen.',
      },
    },
    {
      id: 'norsk-vg3-4-1-n-section2',
      type: 'text',
      content: `## Realismen og nyromantikken - mellom to verdener

Nar vi beveger oss inn i realismens tid, fra 1850 til 1890, skjer noe merkelig med lyrikken: Den trer i bakgrunnen. Romanene og dramaene tar over scenen. Ibsen, Bjornson, Kielland og Lie skriver prosa som ryster samfunnet. Lyrikken blir stille.

Men den dor ikke. Bjornson skriver fortsatt dikt, og Ibsen skaper poetiske dramaer som "Peer Gynt". Lyrikken venter pa sin tid.

Sa, pa 1890-tallet, kommer nyromantikken som en reaksjon. Plutselig er det ikke lenger nok a skildre virkeligheten noktert. Dikterne vil tilbake til dromme, stemninger, det uutsigelige.

Sigbjorn Obstfelder blir en nokkelfigur. Hans beroemte dikt "Jeg ser" begynner slik: "Jeg ser paa den hvide himmel, jeg ser paa de graabla skyer..." Obstfelder skriver om fremmedgjoring, om a ikke passe inn i verden. Han peker fremover mot modernismen med sin symbolske, gategfull stil.

Vilhelm Krag skaper stemningsdikt fulle av lengsel og melankoli. Hans "Fandansen" og andre dikt formidler en atmosfaere som er vanskelig a sette ord pa - nettopp det nyromantikerne ville.

Formen losner litt. Rimene er der fortsatt, men rytmen blir friere. Dikterne begynner a eksperimentere. Noe nytt er pa vei.`,
    },
    {
      id: 'norsk-vg3-4-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva skjedde med lyrikken i realismens tid (1850-1890)?',
        options: [
          { id: 'a', text: 'Den ble den dominerende sjangeren', isCorrect: false },
          { id: 'b', text: 'Den tapte terreng for prosa og drama', isCorrect: true },
          { id: 'c', text: 'Den ble forbudt av myndighetene', isCorrect: false },
          { id: 'd', text: 'Den ble kun skrevet pa nynorsk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I realismens periode tapte lyrikken terreng for prosa og drama. Forfattere som Ibsen, Bjornson, Kielland og Lie dominerte med sine romaner og skuespill. Lyrikken ble ikke borte, men tok en tilbaketrukket rolle for sa a vende tilbake med nyromantikken pa 1890-tallet.',
      },
    },
    {
      id: 'norsk-vg3-4-1-n-section3',
      type: 'text',
      content: `## Modernismens gjennombrudd - alt forandres

Sa kommer jordskjelvet. Modernismen er en revolusjon i hvordan vi tenker om kunst, og lyrikken star i sentrum.

I Europa skjer gjennombruddet tidlig pa 1900-tallet. Men i Norge tar det tid. Rolf Jacobsen debuterer i 1933 med "Jord og jern" - dikt om fabrikker, maskiner, byer. Det er noe helt nytt i norsk lyrikk. Jacobsen skriver om trafikklys og tog, om asfalt og strom. Han bruker fri vers, uten rim, med en rytme som folger innholdet, ikke en fast oppskrift.

Likevel er det forst pa 1950-tallet at modernismen virkelig bryter gjennom i Norge. Da kommer debatten: Er dette lyrikk? Tradisjonalistene rister pa hodet. Modernistene svarer med stadig dristigere eksperimenter.

Hva kjennetegner modernistisk lyrikk? Fri vers er det mest synlige: Ingen fast rim eller rytme. Men det handler om mer enn form. Modernistene vil vise fremfor a fortelle. De bruker bilder, fragmenter, sprang i tid og rom. De utforsker det moderne livets fremmedgjoring, byens puls, teknologiens dobbelthet.

Paal Brekke introduserer europeisk modernisme for norske lesere. Olav H. Hauge finner sin helt egne vei - enkle, dype dikt inspirert av japansk haiku. Georg Johannesen leker med sprak og retorikk. Jan Erik Vold skaper lydpoesi som sprenger grenser.

Etter modernismen kommer lyrikken aldri tilbake til det den var. Doren er apnet for uendelig mangfold.`,
    },
    {
      id: 'norsk-vg3-4-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Nar kom det modernistiske gjennombruddet i norsk lyrikk for alvor?',
        options: [
          { id: 'a', text: 'Pa 1910-tallet', isCorrect: false },
          { id: 'b', text: 'Pa 1930-tallet', isCorrect: false },
          { id: 'c', text: 'Pa 1950-tallet', isCorrect: true },
          { id: 'd', text: 'Pa 1970-tallet', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Selv om Rolf Jacobsen debuterte med modernistiske dikt allerede i 1933, kom det brede gjennombruddet for modernistisk lyrikk i Norge forst pa 1950-tallet. Da ble det stor debatt mellom tradisjonalister og modernister, og nye former ble gradvis akseptert.',
      },
    },
    {
      id: 'norsk-vg3-4-1-n-section4',
      type: 'text',
      content: `## Hvordan analysere et dikt

Na som vi har reist gjennom historien, la oss stoppe opp og snakke om verktoyene. Hvordan gar man egentlig frem nar man skal forsta et dikt?

Tenk pa det som en samtale. Diktet snakker til deg, og du lytter - men du lytter pa flere nivaer samtidig.

Forst: Hva er forsteinntrykkket? Les diktet hoyt. Kjen hvordan ordene foler seg i munnen. Hvilken stemning skapes? Ikke analyser enna - bare opplev.

Deretter: Se pa formen. Er det strofeinndeling? Rim? Fast rytme - eller fri vers? Formen er ikke bare pynt; den er mening. Et dikt med hard, fast rytme sier noe annet enn et dikt som flyter fritt.

Sa: Spraklige virkemidler. Hvilke bilder brukes? Er det metaforer som sammenligner noe med noe annet? Similer som sier "som"? Gjentakelser som hamrer inn et poeng? Kontraster som setter ting mot hverandre? Lydlige virkemidler som allitterasjon og rim?

Videre: Innholdet. Hva er temaet - det diktet handler om pa overflaten? Og hva er motivet - de konkrete bildene og situasjonene? Hvem er "jeg" i diktet? Hvilke symboler kan du finne?

Til slutt: Tolkningen. Hva vil diktet si? Hvordan henger alt sammen? Og like viktig: Hva betyr diktet for deg, her og na?

Denne modellen er ikke en tvangstroye. Den er et kart. Noen ganger tar du snarveier, andre ganger utforsker du omveier. Men kartet hjelper deg a finne vei inn i diktets landskap.`,
    },
    {
      id: 'norsk-vg3-4-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva bor vaere det forste steget i en diktanalyse?',
        options: [
          { id: 'a', text: 'Telle antall rim og strofer', isCorrect: false },
          { id: 'b', text: 'Sla opp forfatterens biografi', isCorrect: false },
          { id: 'c', text: 'Lese diktet og notere forsteinntrykkket', isCorrect: true },
          { id: 'd', text: 'Skrive konklusjonen forst', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'En god diktanalyse starter med forsteinntrykket. Les diktet hoyt, opplev det, og noter hvilken stemning det skaper. Forst nar du har fatt et helhetlig inntrykk, gar du videre til detaljanalysen av form, sprak og innhold.',
      },
    },
    {
      id: 'norsk-vg3-4-1-n-section5',
      type: 'text',
      content: `## Lyrikken i dag - uendelig mangfold

Var reise ender i samtiden, men egentlig ender den aldri. Lyrikken lever og forandrer seg hele tiden.

I dag finnes alle former side om side. Noen diktere skriver fortsatt med rim og rytme, andre eksperimenterer med visuelle dikt der ordene danner bilder pa siden. Noen skriver lange, flytende tekster, andre kondenserer alt ned til fa ord.

Tor Ulven skrev eksistensielle dikt om dod og mening, i et sprak sa presist at hvert ord veier tungt. Hanne Bramness utforsker kroppens og sansenes verden. Ruth Lillegraven skriver om morskap og barndom med et blikk som er bade omt og skarpt. Og mange flere bidrar til det rike landskapet.

Lyrikken har ogsa funnet nye former utenfor boken. Slam poetry bringer diktet tilbake til muntlig fremforing. Raplyrikk kombinerer ord med musikk. Sosiale medier gir diktere nye plattformer.

Det som forener all lyrikk - fra Wergelands romantiske fossefalle til dagens digitale dikt - er at den kondenserer sprak til sin mest intense form. Et dikt sier mye med fa ord. Det inviterer leseren inn som medskapere av mening.

Nar du leser et dikt, deltar du i en tradisjon som strekker seg tusenvis av ar tilbake. Og nar du selv skriver - kanskje bare noen linjer i en dagbok - fortsetter du den tradisjonen. Lyrikken tilhorer alle som vil lytte til sprakets musikk.`,
    },
    {
      id: 'norsk-vg3-4-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner samtidens lyrikk?',
        options: [
          { id: 'a', text: 'Alle diktere ma folge strenge formkrav', isCorrect: false },
          { id: 'b', text: 'Lyrikk eksisterer ikke lenger som sjanger', isCorrect: false },
          { id: 'c', text: 'Stort mangfold der ulike former eksisterer side om side', isCorrect: true },
          { id: 'd', text: 'Kun digital poesi er akseptert', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Samtidens lyrikk preges av stort mangfold. Tradisjonelle former med rim og rytme lever side om side med eksperimentell lyrikk, slam poetry, raplyrikk og digital poesi. Det finnes ingen dominerende stil - alle former har sin plass.',
      },
    },
    {
      id: 'norsk-vg3-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Lyrikkens utvikling fra 1850 til i dag:**

**Romantikken (for 1850):**
- Henrik Wergeland og Johan Sebastian Welhaven
- Fast form med rim og rytme
- Nasjonale og romantiske temaer

**Realismen (1850-1890):**
- Lyrikken tapte terreng for prosa og drama
- Ibsen og Bjornson skrev fortsatt dikt

**Nyromantikken (1890-tallet):**
- Sigbjorn Obstfelder og Vilhelm Krag
- Symbolistisk lyrikk og stemningsdikt
- Friere former begynte a utvikle seg

**Modernismen (1900-tallet):**
- Rolf Jacobsen: Teknologi og natur
- Olav H. Hauge: Enkelt og dypt
- Fri vers ble dominerende
- Gjennombruddet pa 1950-tallet

**Samtiden:**
- Jan Erik Vold, Tor Ulven, Hanne Bramness, Ruth Lillegraven
- Stort mangfold av former og stiler
- Nye plattformer som slam poetry og sosiale medier

**Analysemodell for dikt:**
1. Forsteinntrykk og stemning
2. Form: strofer, rim, rytme
3. Spraklige virkemidler: bilder, gjentakelser, kontraster
4. Innhold: tema, motiv, jeg-et, symboler
5. Tolkning og aktualitet`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2 NARRATIV: Modernistisk lyrikk
// ============================================================================

export const CHAPTER_NORSK_VG3_4_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-4-2-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '4.2',
  title: 'Modernistisk lyrikk',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag revolusjonen som snudde norsk lyrikk pa hodet - fra fri vers til fragmenterte bilder.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-4-2',
  content: [
    {
      id: 'norsk-vg3-4-2-n-intro',
      type: 'text',
      content: `## Da lyrikken sluttet a rime

Tenk deg at du har hoert klassisk musikk hele livet - vakre melodier, harmoniske akkorder, forutsigbare strukturer. Sa en dag gar du pa en konsert og horer noe helt annet: Dissonans. Brudd. Uventede vendinger. Forst er du forvirret, kanskje irritert. Men sa begynner du a hore noe nytt - en annen slags skoennhet.

Slik var det for mange da modernismen kom til norsk lyrikk. Plutselig forsvant rimene. Rytmen ble uforutsigbar. Bildene hang ikke sammen pa den vanlige maten. Mange spurte: Er dette i det hele tatt poesi?

Svaret viste seg a vaere ja - men en ny slags poesi for en ny tid. Modernismen var ikke bare et opproer mot det gamle. Den var et forsok pa a finne et sprak som kunne uttrykke det moderne menneskets erfaring: byen, maskinen, fremmedgjoringen, den splittede bevisstheten.

I Norge kom denne revolusjonen sent, men kraftig. La oss se naermere pa hvordan det skjedde.`,
    },
    {
      id: 'norsk-vg3-4-2-n-section1',
      type: 'text',
      content: `## Forloperne - de som pekte fremover

For modernismen slo gjennom for alvor, var det noen modige enkeltpersoner som pekte vei. De var kanskje ikke fullt ut modernister selv, men de apnet dorer som andre senere skulle ga gjennom.

Sigbjorn Obstfelder er kanskje den viktigste. Pa 1890-tallet skrev han dikt som "Jeg ser" - et dikt om fremmedgjoring som fortsatt foler overraskende moderne. "Jeg ser paa den hvide himmel, / jeg ser paa de graabla skyer, / jeg ser paa den blodige sol. / Dette er altsaa verden. / Dette er altsaa klodernes hjem." Obstfelder fanget en folelse av a sta utenfor, av a ikke passe inn, som skulle bli sentral i modernismen.

Rolf Jacobsen debuterte i 1933 med samlingen "Jord og jern". Her er dikt om fabrikker, tog, elektrisitet, byer - helt nye temaer i norsk lyrikk. Jacobsen skrev pa fri vers, uten rim, med et sprak som var enkelt men bilderrikt. Han viste at lyrikken kunne handle om det moderne livet uten a miste sin poetiske kraft.

Claes Gill var en annen forloeper. Pa 1930-tallet skrev han dikt som eksperimenterte med form og innhold pa mater som pekte mot det som skulle komme.

Men disse forloperne ble ikke umiddelbart anerkjent som det de var. Det tok tid for det norske litteraere miljoet a forstatte hva de holdt pa med. Forst etter krigen skulle modernismen virkelig bryte gjennom.`,
    },
    {
      id: 'norsk-vg3-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvem regnes som den forste modernisten i norsk lyrikk?',
        options: [
          { id: 'a', text: 'Henrik Wergeland', isCorrect: false },
          { id: 'b', text: 'Rolf Jacobsen', isCorrect: true },
          { id: 'c', text: 'Jan Erik Vold', isCorrect: false },
          { id: 'd', text: 'Olav H. Hauge', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Rolf Jacobsen regnes som den forste modernisten i norsk lyrikk. Hans debut "Jord og jern" i 1933 var banebrytende med dikt om teknologi og byliv skrevet pa fri vers. Selv om anerkjennelsen kom sent, apnet han veien for modernismens gjennombrudd.',
      },
    },
    {
      id: 'norsk-vg3-4-2-n-section2',
      type: 'text',
      content: `## 1950-tallet - gjennombruddet

Etter andre verdenskrig var verden forandret. De gamle sannhetene hadde vist seg utilstrekkelige. Atombomben hadde vist menneskelig ondskap og makt pa nye mater. Hvordan kunne kunsten fortsette som for?

Pa 1950-tallet kom "det modernistiske gjennombrudd" i norsk lyrikk. Paal Brekke ble en nokkelfigur - ikke bare som dikter, men som formidler av europeisk modernisme. Han oversatte og introduserte poeter som T.S. Eliot og Ezra Pound for norske lesere. Han argumenterte for at lyrikken matte fornye seg.

Det ble strid. Tradisjonalistene mente at modernistisk lyrikk ikke var ordentlig poesi. Arnulf Overland, den store arbeiderdikteren, var blant kritikerne. Han mente at diktning matte kommunisere med vanlige folk, og at modernistenes eksperimenter var elitistiske.

Modernistene svarte at kunsten matte vaere fri til a utforske nye former. De mente at de tradisjonelle formene ikke lenger kunne uttrykke samtidsmenneskets erfaring. Verden var fragmentert - da matte ogsa kunsten vaere det.

Debatten raste i aviser og tidsskrifter. Men gradvis vant modernismen terreng. Nye tidsskrifter og forlag ga plass til eksperimentell lyrikk. En ny generasjon lesere vokste opp med andre forventninger til hva et dikt kunne vaere.`,
    },
    {
      id: 'norsk-vg3-4-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var Paal Brekkes rolle i det modernistiske gjennombruddet?',
        options: [
          { id: 'a', text: 'Han var hovedkritikeren av modernismen', isCorrect: false },
          { id: 'b', text: 'Han introduserte europeisk modernisme for norske lesere', isCorrect: true },
          { id: 'c', text: 'Han grunnla den forste litteraturfestivalen', isCorrect: false },
          { id: 'd', text: 'Han skrev kun tradisjonelle dikt med rim', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Paal Brekke var sentral i det modernistiske gjennombruddet pa 1950-tallet. Han oversatte og introduserte europeiske modernister som T.S. Eliot og Ezra Pound, og argumenterte for fornyelse av lyrikken. Han var bade dikter og formidler.',
      },
    },
    {
      id: 'norsk-vg3-4-2-n-section3',
      type: 'text',
      content: `## Kjennetegn ved modernistisk lyrikk

Hva er det egentlig som gjor et dikt modernistisk? La oss se pa de viktigste kjennetegnene.

Det mest synlige er fri vers. Modernistiske dikt har ofte verken fast rim eller fast rytme. Linjelengden varierer. Rytmen folger innholdet, ikke en oppskrift. Dette gir dikteren frihet - men ogsa ansvar. Nar de tradisjonelle strukturene forsvinner, ma diktet finne andre mater a henge sammen pa.

Bildene er sentrale. Modernistiske dikt viser fremfor a fortelle. I stedet for a si "jeg er trist", viser diktet et bilde som formidler tristhet. Bildene kan vaere overraskende, uventede, til og med forstyrrende. De krever at leseren arbeider aktivt med a skape mening.

Fragmentering er et annet kjennetegn. Modernistiske dikt kan hoppe i tid og rom, bryte av midt i setninger, stille ulike elementer mot hverandre uten tydelige overganger. Dette speiler den moderne bevissthetens oppsplitting.

Spraket selv blir utforsket. Modernistene leker med ord, bryter opp vanlige malformer, finner nye kombinasjoner. Noen ganger blir spraket nesten abstrakt, som musikk eller maleri.

Tematikken er ofte urban og moderne. Byen, maskinen, trafikken, teknologien - dette er modernismens landskap. Men ogsa fremmedgjoring, ensomhet, meningsloeshet utforskes.

Alt dette kan gjore modernistisk lyrikk krevende a lese. Men det kan ogsa gjore den utrolig rik nar man forst kommer inn i den.`,
    },
    {
      id: 'norsk-vg3-4-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er "fri vers"?',
        options: [
          { id: 'a', text: 'Dikt som handler om frihet', isCorrect: false },
          { id: 'b', text: 'Dikt uten fast rim eller rytme', isCorrect: true },
          { id: 'c', text: 'Dikt som er gratis a lese', isCorrect: false },
          { id: 'd', text: 'Dikt skrevet pa dialekt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Fri vers (vers libre) er dikt uten fast rim eller rytme. Linjelengden varierer, og rytmen folger innholdet fremfor en fast oppskrift. Denne formen ble utviklet i Frankrike pa 1880-tallet og ble standardformen for modernistisk lyrikk.',
      },
    },
    {
      id: 'norsk-vg3-4-2-n-section4',
      type: 'text',
      content: `## De store modernistene

La oss mote noen av de viktigste stemmene i norsk modernistisk lyrikk.

Rolf Jacobsen fortsatte a skrive etter gjennombruddet og ble stadig mer anerkjent. Hans dikt balanserer mellom beundring og bekymring for det moderne. Han ser skoennheten i trafikklys og signaler, men ogsa truslene mot naturen og menneskeligheten. Diktene hans er tilgjengelige - enkle pa overflaten, men med dybde under.

Olav H. Hauge fant en helt egen vei. Han bodde som fruktbonde i Ulvik i Hardanger, langt fra byens stoy. Hans dikt er korte, enkle, dype - inspirert av japansk haiku og kinesisk lyrikk. Hauge viser at modernisme ikke ma bety urban kaos. Det kan ogsa bety a skrape bort alt overflodig og sta igjen med det vesentlige.

Georg Johannesen brakte humor, ironi og intellektuell lek inn i modernismen. Han var opptatt av retorikk og maktsprak, og diktene hans utfordrer leseren pa stadig nye mater.

Jan Erik Vold drev eksperimentene videre med lydpoesi og konkret poesi. For ham var diktet ikke bare noe man leste stille - det var noe som matte hores, oppleves, fremfores.

Paal-Helge Haugen eksperimenterte med lange, flytende tekster og utforsket grensene for hva lyrikk kunne vaere.

Disse dikterne er svart forskjellige, men de deler en vilje til a utforske, utfordre og fornye. De viste at modernismen ikke var en stil, men en holdning.`,
    },
    {
      id: 'norsk-vg3-4-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Olav H. Hauges lyrikk?',
        options: [
          { id: 'a', text: 'Lange, kompliserte dikt om byliv', isCorrect: false },
          { id: 'b', text: 'Korte, enkle dikt inspirert av japansk haiku', isCorrect: true },
          { id: 'c', text: 'Politiske agitasjonsdikt', isCorrect: false },
          { id: 'd', text: 'Dikt skrevet kun pa bokmal', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Olav H. Hauge er kjent for korte, enkle men dype dikt inspirert av japansk haiku og kinesisk lyrikk. Han bodde som fruktbonde i Ulvik og skrev pa nynorsk. Hans dikt viser at modernisme ogsa kan bety a skrape bort det overfledige.',
      },
    },
    {
      id: 'norsk-vg3-4-2-n-section5',
      type: 'text',
      content: `## Arven etter modernismen

Modernismen forandret norsk lyrikk for alltid. Etter 1950-tallet var det ikke lenger mulig a late som om ingenting hadde skjedd. Selv diktere som skrev mer tradisjonelt, gjorde det i bevissthet om modernismens utfordringer.

Men modernismen ble ogsa kritisert. Noen mente den var for elitistisk, for vanskelig tilgjengelig. Pa 1960- og 70-tallet kom reaksjoner i form av mer politisk engasjert lyrikk som ville na ut til folk. Arbeiderlyrikk og feministisk lyrikk tok i bruk enklere former for a kommunisere budskap.

Likevel er modernismens arv tydelig i all senere norsk lyrikk. Friheten til a velge form - til a skrive med rim eller uten, til a eksperimentere eller folge tradisjonen - er noe modernismen kjempet frem. Betoningen av bildet, av a vise fremfor a fortelle, har blitt en selvfolge.

I dag kan en dikter velge fritt fra hele paletten. Noen skriver minimalistiske dikt i Hauges and, andre eksperimenterer med visuelle former, andre igjen blander lyrikk med andre uttrykk. Denne friheten er modernismens gave.

Nar du leser et moderne dikt, moter du alltid ekkoen av den kampen som ble utkjempet pa 1950-tallet - kampen for lyrikkens frihet til a utforske alle muligheter.`,
    },
    {
      id: 'norsk-vg3-4-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er modernismens viktigste arv til senere norsk lyrikk?',
        options: [
          { id: 'a', text: 'At alle dikt ma skrives pa fri vers', isCorrect: false },
          { id: 'b', text: 'At lyrikk bare kan handle om byliv', isCorrect: false },
          { id: 'c', text: 'Friheten til a velge form og eksperimentere', isCorrect: true },
          { id: 'd', text: 'At dikt ikke lenger kan ha rim', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Modernismens viktigste arv er friheten til a velge form. Etter modernismens gjennombrudd kunne diktere velge fritt - eksperimentere eller folge tradisjonen, skrive med eller uten rim. Denne formelle friheten preger all senere norsk lyrikk.',
      },
    },
    {
      id: 'norsk-vg3-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Modernistisk lyrikk i Norge:**

**Forloperne:**
- Sigbjorn Obstfelder (1890-tallet): Fremmedgjoring, symbolisme
- Rolf Jacobsen (debut 1933): Forste modernist, teknologi og byliv
- Claes Gill (1930-tallet): Eksperimentell

**Gjennombruddet pa 1950-tallet:**
- Paal Brekke introduserte europeisk modernisme
- Debatt mellom tradisjonalister og modernister
- Gradvis aksept for nye former

**Kjennetegn ved modernistisk lyrikk:**
- Fri vers (uten rim og fast rytme)
- Bilder fremfor fortelling
- Fragmentering og sprang
- Eksperimentelt sprak
- Ofte urban tematikk
- Fremmedgjoring og moderne erfaring

**Viktige modernistiske lyrikere:**
- Rolf Jacobsen: Teknologi og natur
- Olav H. Hauge: Enkelt og dypt, haiku-inspirert
- Georg Johannesen: Ironi og spraklek
- Jan Erik Vold: Lydpoesi
- Paal-Helge Haugen: Eksperimentell

**Arven:**
- Frihet til a velge form
- Bildet som sentralt element
- Apning for mangfold i lyrikken`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.3 NARRATIV: Olav H. Hauge og Rolf Jacobsen
// ============================================================================

export const CHAPTER_NORSK_VG3_4_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-4-3-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '4.3',
  title: 'Olav H. Hauge og Rolf Jacobsen',
  subtitle: 'Narrativ versjon',
  description: 'Mot to mestere - fruktbonden fra Hardanger og journalisten fra Hamar som revolusjonerte norsk lyrikk.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litteraere analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-4-3',
  content: [
    {
      id: 'norsk-vg3-4-3-n-intro',
      type: 'text',
      content: `## To verdener, to stemmer

De kunne knapt vaert mer forskjellige. Den ene bodde i en fruktgard i Hardanger, omgitt av fjell og fjord, og pleiet epltreer med de samme hendene som skrev dikt. Den andre var journalist i Hamar, omgitt av trykkerier og nyheter, og skrev om trafikklys og jernbanestasjoner.

Olav H. Hauge og Rolf Jacobsen representerer to poler i norsk lyrikk. Hauge er naturen, stillheten, det tidloese. Jacobsen er byen, bevegelsen, det moderne. Men begge er mestere i det korte, pregnante diktet - diktet som sier mye med fa ord.

A sammenligne disse to er som a sammenligne fjellet og havet. Begge er storslatte, begge er uunnvaerlige, men de er grunnleggende forskjellige. I dette kapittelet skal vi mote dem begge og se hva som gjor dem unike - og hva de tross alt har til felles.`,
    },
    {
      id: 'norsk-vg3-4-3-n-section1',
      type: 'text',
      content: `## Olav H. Hauge - fruktbonden fra Ulvik

Olav Haakonson Hauge ble fodt 18. august 1908 i Ulvik i Hardanger, og han bodde der hele livet. Han var fruktbonde - ikke som hobby, men som levebroed. Han pleiet epltreer, hoestet frukt, solgte den pa markedet. Hendene hans bar spor av fysisk arbeid.

Men Hauge var ogsa en av de mest beleste menneskene i Norge. Selvlaert leste han pa flere sprak - engelsk, tysk, fransk, kinesisk. Han oversatte dikt fra hele verden. Biblioteket hans i den lille stuen i Ulvik var enormt.

Denne dobbeltheten preger diktene hans. De er jordnaere, konkrete, fulle av bilder fra hverdagen: eplehagen, bekken, fjellene. Men de er ogsa dype, filosofiske, universelle. Hauge kunne skrive om a rake lov og samtidig si noe om livets storste sporsmaal.

Hans poesi er inspirert av japansk haiku - den korte, billedsterke formen som fanger et oyeblikk og apner det mot noe storre. Hauge skraper bort alt overflodig. Hvert ord ma fortjene sin plass. Resultatet er dikt som er enkle a lese, men vanskelige a glemme.

Hauge slet med psykisk sykdom gjennom perioder av livet. Han var sjenert og tilbaketrukket. Men gjennom diktene kommuniserte han med verden. Da han doede i 1994, etterlot han seg noen av de mest elskede diktene i norsk litteratur.`,
    },
    {
      id: 'norsk-vg3-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var Olav H. Hauges yrke ved siden av a vaere dikter?',
        options: [
          { id: 'a', text: 'Journalist', isCorrect: false },
          { id: 'b', text: 'Laeerer', isCorrect: false },
          { id: 'c', text: 'Fruktbonde', isCorrect: true },
          { id: 'd', text: 'Prest', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Olav H. Hauge var fruktbonde i Ulvik i Hardanger. Han dyrket epler og annen frukt, og dette fysiske arbeidet preger bildene i diktene hans. Samtidig var han en ekstremt belest mann som leste og oversatte fra mange sprak.',
      },
    },
    {
      id: 'norsk-vg3-4-3-n-section2',
      type: 'text',
      content: `## "Det er den draumen" - et dikt a huske

La oss se naermere pa et av Hauges mest kjaere dikt: "Det er den draumen".

"Det er den draumen me ber pa / at noko vedunderleg skal skje, / at det ma skje - / at tidi skal opna seg / at hjarta skal opna seg / at doerer skal opna seg / at berget skal opna seg / at kjeldor skal springa - / at draumen skal opna seg, / at me ei morgonstund skal glida inn / pa ein vag me ikkje har visst um."

Legg merke til strukturen. Diktet bygger seg opp gjennom gjentakelse: "skal opna seg" gjentas med stadig nye subjekter. Tid, hjerte, doerer, berg, kilder - alt skal apne seg. Denne gjentakelsen skaper en stigende bevegelse, som en boelge som vokser.

Og sa kommer sluttbildet: "glida inn pa ein vag me ikkje har visst um". Det ukjente. Det nye. Hapet om at det finnes noe der ute vi ikke engang kan forestille oss.

Diktet handler om lengsel - en lengsel som er allment menneskelig. Vi baerer alle pa droemmer om at noe vidunderlig skal skje. Hauge fanger denne folelsen i et sprak som er sa enkelt at alle kan forsta det, men sa presist at ingen glemmer det.

Dette er Hauges mesterskap: a si det universelle med de enkleste ord.`,
    },
    {
      id: 'norsk-vg3-4-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilket virkemiddel er sentralt i diktet "Det er den draumen"?',
        options: [
          { id: 'a', text: 'Rim og fast rytme', isCorrect: false },
          { id: 'b', text: 'Gjentakelse ("skal opna seg")', isCorrect: true },
          { id: 'c', text: 'Ironi og sarkasme', isCorrect: false },
          { id: 'd', text: 'Lange, kompliserte setninger', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Diktet bygger pa gjentakelse av "skal opna seg" med ulike subjekter: tid, hjerte, doerer, berg, kilder. Denne anaforen skaper en stigende bevegelse mot sluttbildet. Gjentakelsen er typisk for Hauges stil - enkel, men kraftfull.',
      },
    },
    {
      id: 'norsk-vg3-4-3-n-section3',
      type: 'text',
      content: `## Rolf Jacobsen - modernismens pioner

Rolf Jacobsen ble fodt i 1907 i Oslo og vokste opp i et helt annet miljo enn Hauge. Han ble journalist og bodde mesteparten av livet i Hamar. Byen, ikke bygda, var hans verden.

Da Jacobsen debuterte med "Jord og jern" i 1933, var det noe helt nytt i norsk lyrikk. Her var dikt om fabrikker og maskiner, om trafikklys og jernbaner. Titelen selv sier alt: jord OG jern. Naturen OG teknologien. Jacobsen sa ikke nei til det moderne - han omfavnet det, utforsket det, fant poesi i det.

Hans dikt er billedrike. Et trafikklys blir noe mer enn et trafikklys - det blir et symbol pa rytmen i det moderne livet. En jernbanestasjon blir et sted der menneskelige skaebner krysser hverandre. Jacobsen hadde oye for det poetiske i det hverdagslige.

Men Jacobsen var ikke naiv. Etter hvert ble han ogsa mer kritisk til teknologiens skadevirkninger. Diktene hans reflekterer over forurensning, naturodeleggelse, menneskelig fremmedgjoring. Han elsket maskinen, men han fryktet ogsa hva den kunne gjore med oss.

Jacobsen skrev pa fri vers, uten rim, men med en rytme som folger innholdet. Diktene hans er tilgjengelige - de krever ikke spesialkunnskap for a bli forstatt. Men under den enkle overflaten ligger dybde.`,
    },
    {
      id: 'norsk-vg3-4-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva var nytt og banebrytende med Jacobsens debutsamling "Jord og jern"?',
        options: [
          { id: 'a', text: 'Den var skrevet pa nynorsk', isCorrect: false },
          { id: 'b', text: 'Den handlet om fabrikker, maskiner og det moderne bylivet', isCorrect: true },
          { id: 'c', text: 'Den var den forste diktsamlingen i Norge', isCorrect: false },
          { id: 'd', text: 'Den brukte kun tradisjonelle rim', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Jacobsens "Jord og jern" (1933) var banebrytende fordi den handlet om teknologi, fabrikker, byer og det moderne livet - temaer som var helt nye i norsk lyrikk. Titelen selv peker pa kombinasjonen av natur og industri.',
      },
    },
    {
      id: 'norsk-vg3-4-3-n-section4',
      type: 'text',
      content: `## Sammenligning - to veier til mesterskapet

La oss na stille Hauge og Jacobsen opp mot hverandre. Hva skiller dem, og hva forener dem?

Tematisk er de svart forskjellige. Hauge skriver om naturen, om arbeidet i hagen, om fjell og vann og arstider. Jacobsen skriver om byen, om teknologi, om det moderne livets tempo. Hauges verden er tidlos - diktene hans kunne vaert skrevet for hundre ar siden eller om hundre ar. Jacobsens verden er tydelig moderne - preget av sin tid.

Stilistisk er begge mestere i det korte diktet. Begge skraper bort det overfloedige og star igjen med det vesentlige. Begge bruker bilder fremfor abstrakte forklaringer. Men Hauge er enda mer minimalistisk - hans dikt er ofte bare noen fa linjer. Jacobsen tillater seg lengre utlegninger.

Spraklig skriver Hauge pa nynorsk, Jacobsen pa bokmal. Dette er ikke bare et formelt valg - det preger hele klangen i diktene. Hauges nynorsk gir diktene en jordnaer, arkaisk kvalitet. Jacobsens bokmal folger byens rytme.

Men det som forener dem, er kanskje det viktigste: begge tar lyrikken pa alvor som kunstform. Begge arbeider med presisjon og omhu. Begge vet at et dikt ikke bare skal si noe - det skal fa leseren til a se, foele, oppleve. Og begge har skapt dikt som lever videre i norsk litteratur.`,
    },
    {
      id: 'norsk-vg3-4-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Pa hvilke sprak skrev Hauge og Jacobsen?',
        options: [
          { id: 'a', text: 'Begge skrev pa bokmal', isCorrect: false },
          { id: 'b', text: 'Begge skrev pa nynorsk', isCorrect: false },
          { id: 'c', text: 'Hauge pa nynorsk, Jacobsen pa bokmal', isCorrect: true },
          { id: 'd', text: 'Hauge pa bokmal, Jacobsen pa nynorsk', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Olav H. Hauge skrev pa nynorsk, mens Rolf Jacobsen skrev pa bokmal. Dette sprakvalget preger stilen: Hauges nynorsk gir en jordnaer, arkaisk tone, mens Jacobsens bokmal folger byens moderne rytme.',
      },
    },
    {
      id: 'norsk-vg3-4-3-n-section5',
      type: 'text',
      content: `## Arven etter to mestere

Bade Hauge og Jacobsen doede i 1994, med bare noen maneders mellomrom. De etterlot seg forfatterskap som har preget norsk lyrikk dypt.

Hauges innflytelse ses i alle som soeker det enkle og dype. Hans vei - den minimalistiske, naturnaere, filosofiske - har inspirert generasjoner av diktere. Nar noen skriver et kort dikt om et konkret oyeblikk som apner seg mot noe storre, folger de i Hauges spor.

Jacobsens innflytelse ses i alle som finner poesi i det moderne. Han viste at lyrikken ikke ma handle om solnedganger og fjell - den kan handle om motorveier og datamaskiner. Denne apningen har gjort det mulig for diktere a skrive om hva som helst.

Begge viser at det finnes mange veier til god lyrikk. Du trenger ikke velge mellom natur og kultur, mellom det tidloese og det moderne. Du kan lese Hauge en dag og Jacobsen den neste, og begge kan berike deg.

Nar du selv leser eller skriver dikt, kan du sporge: Er dette et "Hauge-dikt" eller et "Jacobsen-dikt"? Ikke fordi det ma vaere det ene eller det andre, men fordi det hjelper deg a se hvilke valg dikteren har gjort - og hvilke valg du selv kan gjore.`,
    },
    {
      id: 'norsk-vg3-4-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er den viktigste likheten mellom Hauge og Jacobsen?',
        options: [
          { id: 'a', text: 'De skrev om de samme temaene', isCorrect: false },
          { id: 'b', text: 'De bodde i samme by', isCorrect: false },
          { id: 'c', text: 'Begge var mestere i det korte, pregnante diktet', isCorrect: true },
          { id: 'd', text: 'De samarbeidet om alle diktene sine', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Tross alle forskjeller er den viktigste likheten at begge var mestere i det korte, pregnante diktet. Begge skrapet bort det overfloedige og brukte bilder fremfor abstrakte forklaringer. De tok lyrikken pa alvor som presist handverk.',
      },
    },
    {
      id: 'norsk-vg3-4-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Olav H. Hauge (1908-1994):**
- Fruktbonde fra Ulvik, Hardanger
- Selvlaert, stor leser og oversetter
- Skrev pa nynorsk
- Inspirert av japansk haiku
- Temaer: natur, arbeid, filosofi, tidloese sporsmal
- Hovedverk: "Under bergfallet", "Dropar i austavind"
- Kjennetegn: Kort, enkelt, dypt

**Rolf Jacobsen (1907-1994):**
- Journalist fra Hamar
- Modernismens pioner i norsk lyrikk
- Skrev pa bokmal
- Temaer: teknologi, by, det moderne livet
- Hovedverk: "Jord og jern", "Stillheten efterpa"
- Kjennetegn: Bilderikt, moderne, tilgjengelig

**Sammenligning:**
- Hauge: Natur, tradisjon, enkelhet, tidloes
- Jacobsen: By, teknologi, modernitet
- Felles: Korte dikt, presisjon, bilder fremfor abstraksjon

**Arven:**
- To veier til lyrikk som fortsatt inspirerer
- Hauge: Det enkle og dype
- Jacobsen: Poesi i det moderne`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.4 NARRATIV: Drama og teater
// ============================================================================

export const CHAPTER_NORSK_VG3_4_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-4-4-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '4.4',
  title: 'Drama og teater',
  subtitle: 'Narrativ versjon',
  description: 'Fra Ibsens borgerlige stuer til Fosses minimalistiske scener - en reise gjennom norsk dramatikk.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-4-4',
  content: [
    {
      id: 'norsk-vg3-4-4-n-intro',
      type: 'text',
      content: `## Nar ordene far kropp

Tenk deg at du sitter i en mork teatersal. Scenen foran deg er opplyst. Der star mennesker som later som de er andre mennesker, som sier ord noen har skrevet for dem, som beveger seg i et rom som later som det er et annet rom. Og likevel - likevel griper det tak i deg. Du ler, du grater, du holder pusten.

Dette er dramaets magi. Ordene pa papiret far kropp, stemme, bevegelse. De blir til noe som skjer her og na, foran oynene dine. Ingen andre kunstformer har denne umiddelbarheten.

Norge har en stolt dramatradisjon. Fra Henrik Ibsen, som regnes som grunnleggeren av det moderne drama, til Jon Fosse, som mottok Nobelprisen i 2023. La oss ta en reise gjennom dette landskapet.`,
    },
    {
      id: 'norsk-vg3-4-4-n-section1',
      type: 'text',
      content: `## Ibsen - grunnleggeren

Vi har allerede mott Henrik Ibsen som forfatter. Men la oss se pa ham spesifikt som grunnlegger av det moderne drama.

For Ibsen var dramaet ofte spektakulaert og overdrevent. Melodramaer med helter og skurker, romantiske intriger, eksotiske kulisser. Ibsen gjorde noe radikalt: Han flyttet handlingen inn i den borgerlige stuen. Han lot vanlige mennesker snakke om hverdagslige ting. Men under overflaten ulmet de store sporsmalene.

Ibsens teknikk var banebrytende. Han lot fortiden gradvis avdekkes gjennom dialogen. Han brukte symboler som var realistiske men ladet med mening. Han skapte karakterer som var komplekse og selvmotsigende - som virkelige mennesker.

Dramaene hans spilles fortsatt over hele verden. De har pavirket dramatikere i generasjoner.`,
    },
    {
      id: 'norsk-vg3-4-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var radikalt med Ibsens dramaer?',
        options: [
          { id: 'a', text: 'De var skrevet pa vers', isCorrect: false },
          { id: 'b', text: 'De flyttet handlingen til borgerlige stuer med vanlige mennesker', isCorrect: true },
          { id: 'c', text: 'De hadde bare en skuespiller', isCorrect: false },
          { id: 'd', text: 'De varte i over ti timer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Ibsen bryt med melodramaets overdrivelser ved a flytte handlingen til borgerlige stuer der vanlige mennesker snakket om tilsynelatende hverdagslige ting.',
      },
    },
    {
      id: 'norsk-vg3-4-4-n-section2',
      type: 'text',
      content: `## Mellomkrigstiden og etterkrigstiden

Etter Ibsen fortsatte norsk drama a utvikle seg. Gunnar Heiberg skrev skuespill som utforsket kjarlighet og erotikk. Nordahl Grieg kombinerte politisk engasjement med dramatisk kraft. Helge Krog skrev om moderne samliv.

Etter krigen kom nye stemmer. Jens Bjorneboe utfordret samfunnets selvbilde. Torborg Nedreaas brakte kvinners erfaringer til scenen. Cecilie Loveid eksperimenterte med form.

Denne perioden var preget av mangfold - noen fulgte i Ibsens realistiske spor, andre eksperimenterte vilt.`,
    },
    {
      id: 'norsk-vg3-4-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva kjennetegnet norsk drama etter Ibsen?',
        options: [
          { id: 'a', text: 'All dramatikk ble forbudt', isCorrect: false },
          { id: 'b', text: 'Mangfold av stemmer og stiler', isCorrect: true },
          { id: 'c', text: 'Kun komedier ble skrevet', isCorrect: false },
          { id: 'd', text: 'Alle matte kopiere Ibsen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Perioden etter Ibsen var preget av mangfold. Dramatikere representerte ulike stiler og temaer, fra politisk engasjement til kunstnerisk eksperimentering.',
      },
    },
    {
      id: 'norsk-vg3-4-4-n-section3',
      type: 'text',
      content: `## Jon Fosse - Nobelprisen 2023

Sa kom Jon Fosse. Hans dramaer er som ingenting annet. Dialogen bestar ofte av korte, gjentatte fraser. Det usagte er like viktig som det sagte. Pausene er ladet med mening.

"Nokon kjem til a komme" fra 1996 er et godt eksempel. Et par sitter i et hus og venter. Det er nesten ikke handling i tradisjonell forstand. Men spenningen er nesten uutholdelig.

I 2023 mottok Fosse Nobelprisen for "hans nyskapande dramatikk og prosa som gjev stemme til det usigelege".`,
    },
    {
      id: 'norsk-vg3-4-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Jon Fosses dramatiske stil?',
        options: [
          { id: 'a', text: 'Lange dialoger med mye handling', isCorrect: false },
          { id: 'b', text: 'Minimalistisk stil med korte, gjentatte fraser og pauser', isCorrect: true },
          { id: 'c', text: 'Komedier med mange vitser', isCorrect: false },
          { id: 'd', text: 'Historiske dramaer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Jon Fosses stil er minimalistisk med korte, gjentatte fraser. Det usagte og pausene er like viktige som ordene.',
      },
    },
    {
      id: 'norsk-vg3-4-4-n-section4',
      type: 'text',
      content: `## Hvordan analysere et drama

Handling og struktur er forste steg. Hva skjer? Hvordan er stykket bygget opp? Er det vendepunkt og klimaks?

Karakterene er sentrale. Hvem er de? Hva vil de? Hvordan forholder de seg til hverandre?

Sceneanvisningene forteller om setting, kroppssprak og symbolske elementer.

Dialogen er dramaets hjerte. Se pa underteksten - hva mener karakterene egentlig, under ordene?

Til slutt: tematikken. Hva handler stykket egentlig om pa et dypere plan?`,
    },
    {
      id: 'norsk-vg3-4-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er "undertekst" i dramaanalyse?',
        options: [
          { id: 'a', text: 'Teksten pa en skjerm under forestillingen', isCorrect: false },
          { id: 'b', text: 'Det karakterene egentlig mener, under ordene de sier', isCorrect: true },
          { id: 'c', text: 'Fotnoter i manuskriptet', isCorrect: false },
          { id: 'd', text: 'Regissorens notater', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Undertekst er det karakterene egentlig mener eller foler, under ordene de faktisk sier. Meningen ligger mellom linjene.',
      },
    },
    {
      id: 'norsk-vg3-4-4-n-section5',
      type: 'text',
      content: `## Dramaets fremtid

Dramaet lever. Nye teknologier bringer nye muligheter - streaming, virtuelle forestillinger. Men det fysiske teatret har fortsatt noe ingen skjerm kan erstatte: at det skjer her og na, at hver forestilling er unik.

Fra Ibsen til Fosse har norsk drama vist at det er mulig a utforske de dypeste menneskelige sporsmal pa en scene. Denne tradisjonen fortsetter.`,
    },
    {
      id: 'norsk-vg3-4-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvor mange nordmenn har mottatt Nobelprisen i litteratur?',
        options: [
          { id: 'a', text: 'To', isCorrect: false },
          { id: 'b', text: 'Tre', isCorrect: false },
          { id: 'c', text: 'Fire', isCorrect: true },
          { id: 'd', text: 'Fem', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Fire nordmenn har mottatt Nobelprisen: Bjornson (1903), Hamsun (1920), Undset (1928) og Fosse (2023).',
      },
    },
    {
      id: 'norsk-vg3-4-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Norsk dramas utvikling:**

**Henrik Ibsen:** Grunnleggeren av det moderne drama
**Mellomkrigstiden:** Heiberg, Grieg, Krog
**Etterkrigstiden:** Bjorneboe, Nedreaas, Loveid
**Jon Fosse (Nobelpris 2023):** Minimalistisk stil, det usagte

**Dramaanalyse:**
1. Handling og struktur
2. Karakterer
3. Sceneanvisninger
4. Dialog og undertekst
5. Tematikk`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.5 NARRATIV: Jon Fosse
// ============================================================================

export const CHAPTER_NORSK_VG3_4_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-4-5-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '4.5',
  title: 'Jon Fosse',
  subtitle: 'Narrativ versjon',
  description: 'Mot forfatteren som fikk Nobelprisen for a gi stemme til det uutsigelige.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-4-5',
  content: [
    {
      id: 'norsk-vg3-4-5-n-intro',
      type: 'text',
      content: `## Stemmen til det ordlose

Det er oktober 2023. Den svenske Akademien kunngjor arets Nobelprisvinner i litteratur: Jon Fosse, "for hans nyskapande dramatikk og prosa som gjev stemme til det usigelege".

Det uutsigelige. Det som ikke kan sies. Det som ligger mellom ordene, i pausene. Dette er Jon Fosses territorium.

Fosse krever noe av leseren. Han gir ikke ferdige svar. I stedet inviterer han deg inn i et rom der ting skjer langsomt, der ordene gjentar seg, der stillheten er like viktig som lyden.`,
    },
    {
      id: 'norsk-vg3-4-5-n-section1',
      type: 'text',
      content: `## Liv og bakgrunn

Jon Fosse ble fodt 29. september 1959 i Haugesund, men vokste opp i Strandebarm i Hardanger. Landskapet der - fjordene, fjellene - har preget forfatterskapet hans dypt.

Han debuterte i 1983, men det var som dramatiker han forst fikk internasjonalt gjennombrudd pa 1990-tallet. I 2012 konverterte han til katolisismen. Han skriver pa nynorsk - det er en del av stemmens klang.`,
    },
    {
      id: 'norsk-vg3-4-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvor vokste Jon Fosse opp?',
        options: [
          { id: 'a', text: 'I Oslo', isCorrect: false },
          { id: 'b', text: 'I Strandebarm i Hardanger', isCorrect: true },
          { id: 'c', text: 'I Trondheim', isCorrect: false },
          { id: 'd', text: 'I utlandet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Jon Fosse vokste opp i Strandebarm i Hardanger. Landskapet preger forfatterskapet hans.',
      },
    },
    {
      id: 'norsk-vg3-4-5-n-section2',
      type: 'text',
      content: `## Dramatikken

"Nokon kjem til a komme" fra 1996 er et godt eksempel pa Fosses stil. Et ungt par har kjopt et hus ved sjoen. De venter. Kanskje kommer noen.

Korte setninger. Gjentakelser. Nesten ingenting skjer. Men spenningen bygger seg opp. Hvem kommer? Hvorfor venter de? Det usagte blir det viktigste.`,
    },
    {
      id: 'norsk-vg3-4-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er tittelen pa Fosses gjennombruddsdrama fra 1996?',
        options: [
          { id: 'a', text: '"Et dukkehjem"', isCorrect: false },
          { id: 'b', text: '"Nokon kjem til a komme"', isCorrect: true },
          { id: 'c', text: '"Vildanden"', isCorrect: false },
          { id: 'd', text: '"Septologien"', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Nokon kjem til a komme" (1996) var gjennombruddsdramaet.',
      },
    },
    {
      id: 'norsk-vg3-4-5-n-section3',
      type: 'text',
      content: `## Septologien - mesterverket

I 2019-2021 utga Fosse "Septologien" - syv deler, tre bind, skrevet som en lang setning uten punktum.

Vi folger maleren Asle, som bor ved fjorden. Han har en dobbeltgjenger i byen. Gjennom tankestommer, minner og refleksjoner utforskes liv og dod, kunst og tro. Det er krevende, men dyp lesning.`,
    },
    {
      id: 'norsk-vg3-4-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er spesielt med strukturen i Septologien?',
        options: [
          { id: 'a', text: 'Den er skrevet som et drama', isCorrect: false },
          { id: 'b', text: 'Den er skrevet som en lang setning uten punktum', isCorrect: true },
          { id: 'c', text: 'Den har bare ti sider', isCorrect: false },
          { id: 'd', text: 'Den er skrevet pa bokmal', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Septologien er skrevet som en flytende tekst uten punktum.',
      },
    },
    {
      id: 'norsk-vg3-4-5-n-section4',
      type: 'text',
      content: `## Fosses stil

Repetisjon er det mest slaende - ord gjentas med sma variasjoner. Enkelhet preger spraket - korte, hverdagslige ord. Pausene er like viktige som ordene. Eksistensielle temaer gar igjen: dod, kjarlighet, ensomhet, tro.`,
    },
    {
      id: 'norsk-vg3-4-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor bruker Fosse sa mye repetisjon?',
        options: [
          { id: 'a', text: 'Han har darlig hukommelse', isCorrect: false },
          { id: 'b', text: 'For a skape rytme og understreke kommunikasjonens vanskelighet', isCorrect: true },
          { id: 'c', text: 'For a gjore tekstene lengre', isCorrect: false },
          { id: 'd', text: 'Det er et krav fra forlaget', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Repetisjonen skaper rytme og viser det vanskelige ved a kommunisere virkelig.',
      },
    },
    {
      id: 'norsk-vg3-4-5-n-section5',
      type: 'text',
      content: `## Nobelprisen og arven

Nobelprisen 2023 bekreftet Fosses posisjon. Han er forste nynorskforfatter med prisen. Han viser at det eksperimentelle kan na ut. Han tilbyr langsomhet og dybde i en rask tid.`,
    },
    {
      id: 'norsk-vg3-4-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva var Nobelkomiteens begrunnelse?',
        options: [
          { id: 'a', text: 'For hans lange romaner', isCorrect: false },
          { id: 'b', text: 'For hans nyskapende dramatikk og prosa som gir stemme til det uutsigelige', isCorrect: true },
          { id: 'c', text: 'For hans politiske engasjement', isCorrect: false },
          { id: 'd', text: 'For hans humor', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nobelkomiteen ga prisen "for hans nyskapande dramatikk og prosa som gjev stemme til det usigelege".',
      },
    },
    {
      id: 'norsk-vg3-4-5-n-summary',
      type: 'text',
      content: `## Oppsummering

**Jon Fosse:** Fodt 1959, Nobelprisen 2023
**Hovedverk:** "Nokon kjem til a komme", "Septologien"
**Stil:** Repetisjon, enkelhet, pauser, eksistensielle temaer, nynorsk
**Betydning:** Forste nynorskforfatter med Nobelprisen`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.6 NARRATIV: Essay og kreativ sakprosa
// ============================================================================

export const CHAPTER_NORSK_VG3_4_6_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-4-6-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '4.6',
  title: 'Essay og kreativ sakprosa',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag essayet - sjangeren der personlig stemme moter faglig refleksjon.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive essay som utforsker tekster',
    'orientere seg i faglitteratur og bruke kilder kritisk',
  ],
  linkedChapterId: 'norsk-vg3-4-6',
  content: [
    {
      id: 'norsk-vg3-4-6-n-intro',
      type: 'text',
      content: `## A tenke hoyt pa papiret

Tenk deg at du sitter med en kopp kaffe og lar tankene vandre. Du begynner med en observasjon - kanskje noe du leste i avisen. Sa forer tanken deg videre, til en personlig erfaring, til et sitat du husker, til et sporsmal du ikke har svar pa. Tankene slynger seg, tar omveier, finner uventede forbindelser.

Dette er essayet. Ikke en vitenskapelig artikkel med streng struktur. Ikke en roman med handling og karakterer. Men noe midt imellom - en utforskende tekst der du tenker hoyt pa papiret.

Essayet er en av de eldste og mest fleksible sjangerne. Det kan handle om alt - fra store filosofiske sporsmal til hverdagslige observasjoner. Det eneste kravet er at du er til stede i teksten, med din egen stemme og dine egne refleksjoner.`,
    },
    {
      id: 'norsk-vg3-4-6-n-section1',
      type: 'text',
      content: `## Essayets historie

Ordet "essay" kommer fra franske "essayer" - a forsoke. Det var Michel de Montaigne som skapte sjangeren pa 1500-tallet. Hans "Essais" var nettopp forsok - forsok pa a forsta seg selv og verden gjennom skriving.

Montaigne skrev om alt: om venskap, om doden, om kannibaler, om tommeltotter. Han var personlig og utforskende. Han stilte sporsmal uten a kreve svar. Han viste at skriving kunne vaere en mate a tenke pa.

Etter Montaigne spredte essayet seg over Europa. Francis Bacon skrev mer systematiske essay i England. I Norge fikk sjangeren tidlig fotfeste. Vinje, Garborg, Skram - alle bidro til en norsk essaytradisjon.`,
    },
    {
      id: 'norsk-vg3-4-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvem regnes som essayets grunnlegger?',
        options: [
          { id: 'a', text: 'William Shakespeare', isCorrect: false },
          { id: 'b', text: 'Michel de Montaigne', isCorrect: true },
          { id: 'c', text: 'Henrik Ibsen', isCorrect: false },
          { id: 'd', text: 'Georg Brandes', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Michel de Montaigne skapte essaysjangeren pa 1500-tallet med sine "Essais" - forsok pa a forsta seg selv og verden.',
      },
    },
    {
      id: 'norsk-vg3-4-6-n-section2',
      type: 'text',
      content: `## Kjennetegn ved essayet

Personlig stemme er det viktigste. I et essay er du til stede - ikke som en noytral observator, men som et tenkende, folende menneske. Du kan si "jeg", du kan dele erfaringer, du kan vise tvil.

Utforskende holdning preger sjangeren. Et essay konkluderer ikke for tidlig. Det lar tankene vandre, stiller sporsmal, folger assosiasjoner. Det handler om reisen, ikke bare malet.

Blanding av erfaring og refleksjon gjor essayet rikt. En personlig opplevelse kan fores inn i dialog med fagkunnskap, sitater, kulturelle referanser.

Fri form betyr at essayet ikke folger en fast oppskrift. Det kan vaere assosiativt, det kan ta omveier, det kan overraske.`,
    },
    {
      id: 'norsk-vg3-4-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er det viktigste kjennetegnet ved essayet?',
        options: [
          { id: 'a', text: 'Streng vitenskapelig metode', isCorrect: false },
          { id: 'b', text: 'Personlig stemme og utforskende holdning', isCorrect: true },
          { id: 'c', text: 'Fiktive karakterer og handling', isCorrect: false },
          { id: 'd', text: 'Fast struktur med innledning, hoveddel og konklusjon', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Essayet kjennetegnes av personlig stemme og utforskende holdning. Forfatteren er til stede i teksten og lar tankene vandre.',
      },
    },
    {
      id: 'norsk-vg3-4-6-n-section3',
      type: 'text',
      content: `## Typer essay

Personlig essay tar utgangspunkt i egne erfaringer og refleksjoner. Det kan handle om noe selvopplevd som forer til bredere tanker.

Fagessay kombinerer personlig refleksjon med fagkunnskap. Her moter din stemme kilder og forskning.

Litterart essay utforsker litteratur og kunst. Det analyserer, men med en personlig tilnaerming.

Debattessay tar stilling til et aktuelt sporsmal, men utforsker mer enn det argumenterer.`,
    },
    {
      id: 'norsk-vg3-4-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner et "fagessay"?',
        options: [
          { id: 'a', text: 'Det handler bare om forfatterens egen erfaring', isCorrect: false },
          { id: 'b', text: 'Det kombinerer personlig refleksjon med fagkunnskap', isCorrect: true },
          { id: 'c', text: 'Det er en ren vitenskapelig artikkel', isCorrect: false },
          { id: 'd', text: 'Det handler bare om litteratur', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Et fagessay kombinerer personlig refleksjon med fagkunnskap. Din stemme moter kilder og forskning.',
      },
    },
    {
      id: 'norsk-vg3-4-6-n-section4',
      type: 'text',
      content: `## Hvordan skrive essay

Velg et tema som engasjerer deg. Du ma bry deg for a skrive godt. Temaet kan kobles til pensum, men det ma vaere noe du vil utforske.

Utforsk, ikke konkluder for tidlig. La tankene vandre. Folg assosiasjonene. Vaer apen for overraskelser.

Bruk personlig stemme. Du er til stede i teksten. Egne erfaringer kan brukes - men ikke bli selvopptatt.

Strukturen skal vaere gjennomtenkt, men ikke stiv. En innledning som fanger, en utvikling av tankene, en avslutning som apner heller enn lukker.

Bruk kilder. Sitater og referanser gir dybde. Men din stemme skal dominere.`,
    },
    {
      id: 'norsk-vg3-4-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva bor du gjore nar du skriver essay?',
        options: [
          { id: 'a', text: 'Konkludere sa fort som mulig', isCorrect: false },
          { id: 'b', text: 'Utforske og la tankene vandre', isCorrect: true },
          { id: 'c', text: 'Unnga personlige erfaringer', isCorrect: false },
          { id: 'd', text: 'Kopiere andres meninger', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I et essay bor du utforske og la tankene vandre. Ikke konkluder for tidlig - vaer apen for overraskelser.',
      },
    },
    {
      id: 'norsk-vg3-4-6-n-section5',
      type: 'text',
      content: `## Essayet i dag

Essayet lever - i aviser, tidsskrifter, boker, blogger. Det er en arena for refleksjon i en tid preget av rask meningsutveksling.

Kanskje trenger vi essayet mer enn noen gang. I en verden av korte meldinger og raske reaksjoner tilbyr essayet noe annet: langsomhet, dybde, ettertanke. En invitasjon til a tenke sammen.`,
    },
    {
      id: 'norsk-vg3-4-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva betyr ordet "essay"?',
        options: [
          { id: 'a', text: 'A konkludere', isCorrect: false },
          { id: 'b', text: 'A forsoke', isCorrect: true },
          { id: 'c', text: 'A argumentere', isCorrect: false },
          { id: 'd', text: 'A fortelle', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Ordet "essay" kommer fra franske "essayer" som betyr a forsoke. Essayet er nettopp et forsok pa a utforske et tema.',
      },
    },
    {
      id: 'norsk-vg3-4-6-n-summary',
      type: 'text',
      content: `## Oppsummering

**Essayet:**
- Grunnlagt av Montaigne pa 1500-tallet
- Kjennetegn: Personlig stemme, utforskende holdning, fri form
- Typer: Personlig, fag-, litterar, debattessay

**Hvordan skrive essay:**
1. Velg engasjerende tema
2. Utforsk, ikke konkluder for tidlig
3. Bruk personlig stemme
4. Strukturer gjennomtenkt
5. Bruk kilder i dialog`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.7 NARRATIV: Norske essayister
// ============================================================================

export const CHAPTER_NORSK_VG3_4_7_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-4-7-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '4.7',
  title: 'Norske essayister',
  subtitle: 'Narrativ versjon',
  description: 'Fra Vinje til i dag - mot norske forfattere som har mestret den utforskende kunsten.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive essay som utforsker tekster',
    'orientere seg i faglitteratur og bruke kilder kritisk',
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
  ],
  linkedChapterId: 'norsk-vg3-4-7',
  content: [
    {
      id: 'norsk-vg3-4-7-n-intro',
      type: 'text',
      content: `## Stemmer som utforsker

Norge har en rik essaytradisjon. Fra Aasmund Olavsson Vinje pa 1800-tallet til samtidens forfattere har norske essayister kombinert personlig stemme med skarp observasjon og kulturkritikk.

Disse forfatterne har ikke bare skrevet om verden - de har tenkt hoyt pa papiret, utforsket ideer, utfordret leserne. La oss mote noen av de viktigste.`,
    },
    {
      id: 'norsk-vg3-4-7-n-section1',
      type: 'text',
      content: `## Aasmund Olavsson Vinje - grunnleggeren

Vinje (1818-1870) regnes som den norske essayets far. Han grunnla bladet Dolen og skrev pa landsmaal (nynorsk).

Hans mesterverk er "Ferdaminne fra sumaren 1860" - en reiseskildring fra en fottur fra Kristiania til Trondheim. Men det er langt mer enn en reisebeskrivelse. Vinje observerer landskapet, folket han moter, samfunnsforholdene. Han reflekterer, kritiserer, ler. Tonen er ironisk men varm.

Vinje viste at landsmaal kunne brukes til sofistikert, intelligent prosa. Han etablerte en stil som kombinerer det personlige med det allmenne.`,
    },
    {
      id: 'norsk-vg3-4-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvem regnes som den norske essayets grunnlegger?',
        options: [
          { id: 'a', text: 'Henrik Ibsen', isCorrect: false },
          { id: 'b', text: 'Aasmund Olavsson Vinje', isCorrect: true },
          { id: 'c', text: 'Bjornstjerne Bjornson', isCorrect: false },
          { id: 'd', text: 'Knut Hamsun', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Aasmund Olavsson Vinje regnes som den norske essayets grunnlegger med sitt hovedverk "Ferdaminne fra sumaren 1860".',
      },
    },
    {
      id: 'norsk-vg3-4-7-n-section2',
      type: 'text',
      content: `## Videre tradisjon

Arne Garborg (1851-1924) fulgte opp med filosofiske og kulturkritiske essay. Sigurd Hoel (1890-1960) tok opp psykologiske temaer. Aksel Sandemose (1899-1965) formulerte Janteloven i en klassisk kulturkritikk.

Georg Johannesen (1931-2005) fornyet essayet med ironi, spraklek og kritikk av maktsprak. Hans "Rhetorica Norvegica" larte nordmenn a lese kritisk.

Samtidige essayister som Jan Kjaerstad, Agnes Ravatn og Trygve Riiser Gundersen forer tradisjonen videre.`,
    },
    {
      id: 'norsk-vg3-4-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var Georg Johannesen opptatt av i sine essay?',
        options: [
          { id: 'a', text: 'Naturskildringer', isCorrect: false },
          { id: 'b', text: 'Retorikk og maktsprak', isCorrect: true },
          { id: 'c', text: 'Historiske hendelser', isCorrect: false },
          { id: 'd', text: 'Matoppskrifter', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Georg Johannesen var opptatt av retorikk og maktsprak. Hans verk larte nordmenn a lese kritisk.',
      },
    },
    {
      id: 'norsk-vg3-4-7-n-section3',
      type: 'text',
      content: `## Vinjes stil

La oss se naermere pa hva som gjor Vinje til en mester.

Personlig stemme: Vinje er alltid til stede. Han deler meninger, reaksjoner, folelser. Leseren blir kjent med ham som person.

Skarp observasjon: Han ser alt - naturen, folk, samfunnsforhold. Han skildrer med detaljrikdom.

Humor og ironi: Vinjes ironi er aldri ond, men skarp. Han ser absurditeter og peker pa dem med et skjevt smil.

Kulturkritikk: Gjennom observasjonene kommer refleksjonen. Vinje tenker over norsk identitet, sprak, klasse, politikk.`,
    },
    {
      id: 'norsk-vg3-4-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Vinjes essaystil?',
        options: [
          { id: 'a', text: 'Noytral og distansert', isCorrect: false },
          { id: 'b', text: 'Personlig stemme, ironi og kulturkritikk', isCorrect: true },
          { id: 'c', text: 'Streng vitenskapelig metode', isCorrect: false },
          { id: 'd', text: 'Kun fokus pa natur', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Vinjes stil kjennetegnes av personlig stemme, humor og ironi, og kulturkritikk bakt inn i observasjonene.',
      },
    },
    {
      id: 'norsk-vg3-4-7-n-section4',
      type: 'text',
      content: `## Hvordan lese essay

Les aktivt. Merk deg forfatterens stemme. Folg tankerekken. Noter interessante observasjoner.

Se etter struktur. Hvordan er essayet bygget opp? Folger det en rod trad?

Identifiser virkemidler. Ironi, personlige anekdoter, sitater og referanser.

Reflekter selv. Et godt essay inviterer til egen refleksjon. Hva mener du?

Sett i kontekst. Nar er essayet skrevet? Hvilken debatt deltar det i?`,
    },
    {
      id: 'norsk-vg3-4-7-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-7-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva bor du gjore nar du leser et essay?',
        options: [
          { id: 'a', text: 'Lese raskt og glemme det', isCorrect: false },
          { id: 'b', text: 'Folge tankerekken og reflektere selv', isCorrect: true },
          { id: 'c', text: 'Bare se etter fakta', isCorrect: false },
          { id: 'd', text: 'Ignorere forfatterens stemme', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nar du leser essay bor du folge tankerekken aktivt og reflektere selv. Et godt essay inviterer til egen refleksjon.',
      },
    },
    {
      id: 'norsk-vg3-4-7-n-section5',
      type: 'text',
      content: `## Arven

Norske essayister har laert oss a tenke kritisk, a se det vi tar for gitt med nye oyne. De har vist at personlig refleksjon kan ha allmenn verdi.

Denne tradisjonen lever videre. Hver gang noen skriver en tekst som utforsker et tema med personlig stemme og kritisk blikk, folger de i Vinjes fotspor.`,
    },
    {
      id: 'norsk-vg3-4-7-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-7-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva het Vinjes hovedverk?',
        options: [
          { id: 'a', text: '"Gift"', isCorrect: false },
          { id: 'b', text: '"Ferdaminne fra sumaren 1860"', isCorrect: true },
          { id: 'c', text: '"Brand"', isCorrect: false },
          { id: 'd', text: '"Sult"', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Ferdaminne fra sumaren 1860" er Vinjes hovedverk - en reiseskildring som ogsa er kulturkritikk og personlig refleksjon.',
      },
    },
    {
      id: 'norsk-vg3-4-7-n-summary',
      type: 'text',
      content: `## Oppsummering

**Norske essayister:**
- Vinje (1818-1870): Grunnleggeren, "Ferdaminne"
- Garborg, Hoel, Sandemose: Videre tradisjon
- Georg Johannesen: Retorikk og maktsprak
- Samtidige: Kjaerstad, Ravatn, Gundersen

**Vinjes stil:**
- Personlig stemme
- Skarp observasjon
- Humor og ironi
- Kulturkritikk`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.8 NARRATIV: Retorisk analyse
// ============================================================================

export const CHAPTER_NORSK_VG3_4_8_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-4-8-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '4.8',
  title: 'Retorisk analyse',
  subtitle: 'Narrativ versjon',
  description: 'Laer a gjennomskue hvordan sprak brukes til a overbevise - fra antikken til sosiale medier.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive retoriske analyser av sakprosa',
    'bruke fagkunnskap i muntlige presentasjoner',
  ],
  linkedChapterId: 'norsk-vg3-4-8',
  content: [
    {
      id: 'norsk-vg3-4-8-n-intro',
      type: 'text',
      content: `## Kunsten a overbevise

Hver dag blir vi forsakt pavirket. Reklame vil at vi skal kjope. Politikere vil at vi skal stemme. Venner vil at vi skal vaere enige. Overalt brukes sprak for a overbevise.

Retorikken - laeren om overtalelsens kunst - gir oss verktoy til a forsta hvordan dette skjer. Nar du laerer retorikk, blir du vanskeligere a manipulere. Du gjennomskuer triksene. Men du laerer ogsa a kommunisere bedre selv.

La oss utforske denne eldgamle kunsten som er mer aktuell enn noen gang.`,
    },
    {
      id: 'norsk-vg3-4-8-n-section1',
      type: 'text',
      content: `## De tre appellformene

Antikkens retorikere oppdaget at overtalelse virker pa tre mater.

Etos handler om avsenderens troverdighet. Stoler vi pa den som snakker? Virker vedkommende kunnskapsrik, aerlig, sympatisk? Etos bygges gjennom hvordan du fremstar - men det kan ogsa vaere falsk.

Patos handler om folelser. Blir vi rorte, sinte, redde, begeistrede? Folelser driver handling. Den som behersker patos, kan fa folk til a gjore nesten hva som helst.

Logos handler om logikk og fornuft. Er argumentene holdbare? Henger slutningene sammen? Logos appellerer til var rasjonelle side.

De beste talene kombinerer alle tre. Etos far oss til a lytte. Patos far oss til a bry oss. Logos far oss til a nikke enig.`,
    },
    {
      id: 'norsk-vg3-4-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er de tre appellformene i retorikken?',
        options: [
          { id: 'a', text: 'Innledning, hoveddel, avslutning', isCorrect: false },
          { id: 'b', text: 'Etos, patos, logos', isCorrect: true },
          { id: 'c', text: 'Fortid, natid, fremtid', isCorrect: false },
          { id: 'd', text: 'Tese, antitese, syntese', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'De tre appellformene er etos (troverdighet), patos (folelser) og logos (logikk). De brukes for a overbevise pa ulike mater.',
      },
    },
    {
      id: 'norsk-vg3-4-8-n-section2',
      type: 'text',
      content: `## Toulmins argumentmodell

Den engelske filosofen Stephen Toulmin ga oss en nyttig modell for a analysere argumenter.

Pastand er det du vil bevise. Det du mener er sant eller bor gjores.

Belegg er beviset. Fakta, eksempler, statistikk som stotter pastanden.

Hjemmel er koblingen mellom belegg og pastand. Hvorfor forer beviset til konklusjonen? Ofte er hjemmelen uuttalt.

Eksempel: "Vi bor spise mindre kjott (pastand) fordi kjottindustrien star for store klimautslipp (belegg)." Hjemmelen her er at vi bor redusere klimautslipp - men det sies ikke hoyt.

A analysere argumenter med denne modellen avslorer hva som faktisk hevdes - og hva som tas for gitt.`,
    },
    {
      id: 'norsk-vg3-4-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er "belegg" i Toulmins modell?',
        options: [
          { id: 'a', text: 'Det du vil bevise', isCorrect: false },
          { id: 'b', text: 'Beviset som stotter pastanden', isCorrect: true },
          { id: 'c', text: 'Den uuttalte forutsetningen', isCorrect: false },
          { id: 'd', text: 'Konklusjonen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Belegg er beviset eller stoetten for pastanden - fakta, eksempler, statistikk som underbygger det du hevder.',
      },
    },
    {
      id: 'norsk-vg3-4-8-n-section3',
      type: 'text',
      content: `## Den retoriske situasjonen

All kommunikasjon skjer i en kontekst. For a forsta en tekst, ma vi forsta situasjonen.

Hvem er avsender? Hva er deres bakgrunn, interesser, troverdighet?

Hvem er mottaker? Hvem er teksten skrevet for? Hva vet de fra for?

Hva er konteksten? Nar og hvor skjer kommunikasjonen? I en avis, pa sosiale medier, i en tale?

Hva er formalet? Hva vil avsenderen oppna? Informere, overbevise, underholde, selge?

A stille disse sporsmarlene for du analyserer, hjelper deg a forsta hvorfor teksten er utformet som den er.`,
    },
    {
      id: 'norsk-vg3-4-8-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-8-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva inngar i "den retoriske situasjonen"?',
        options: [
          { id: 'a', text: 'Bare hvem som snakker', isCorrect: false },
          { id: 'b', text: 'Avsender, mottaker, kontekst og formal', isCorrect: true },
          { id: 'c', text: 'Bare tidspunktet', isCorrect: false },
          { id: 'd', text: 'Bare budskapet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Den retoriske situasjonen omfatter avsender, mottaker, kontekst og formal. Alle disse pavirker hvordan teksten utformes.',
      },
    },
    {
      id: 'norsk-vg3-4-8-n-section4',
      type: 'text',
      content: `## Hvordan gjore retorisk analyse

1. Start med den retoriske situasjonen. Hvem, til hvem, hvor, hvorfor?

2. Identifiser hovedpastand og argumenter. Hva vil teksten overbevise oss om?

3. Analyser appellformene. Hvordan bygges etos? Hvilke folelser appelleres til? Hvilken logikk brukes?

4. Se etter virkemidler. Metaforer, gjentakelser, kontraster, retoriske sporsmal.

5. Vurder effektiviteten. Fungerer teksten? Hva fungerer, hva fungerer ikke?`,
    },
    {
      id: 'norsk-vg3-4-8-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-8-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva bor du starte med i en retorisk analyse?',
        options: [
          { id: 'a', text: 'A telle ord', isCorrect: false },
          { id: 'b', text: 'Den retoriske situasjonen', isCorrect: true },
          { id: 'c', text: 'A skrive konklusjonen', isCorrect: false },
          { id: 'd', text: 'A finne stavefeil', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Start med den retoriske situasjonen: Hvem kommuniserer, til hvem, i hvilken sammenheng, med hvilket formal?',
      },
    },
    {
      id: 'norsk-vg3-4-8-n-section5',
      type: 'text',
      content: `## Retorikk i var tid

Retorikken er mer relevant enn noen gang. Sosiale medier flommer over av forsok pa a pavirke. Falske nyheter sprer seg. Reklame er overalt.

A kunne gjennomskue retoriske grep er en borgerplikt. Men retorikk handler ikke bare om forsvar - det handler ogsa om a kommunisere effektivt selv.

Nar du holder en presentasjon, nar du skriver en soknad, nar du argumenterer for noe du tror pa - da bruker du retorikk. Jo bedre du forstuar den, jo bedre kommuniserer du.`,
    },
    {
      id: 'norsk-vg3-4-8-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-8-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor er retorikk relevant i dag?',
        options: [
          { id: 'a', text: 'Det er det ikke', isCorrect: false },
          { id: 'b', text: 'Fordi vi overoeses med forsok pa a pavirke oss', isCorrect: true },
          { id: 'c', text: 'Fordi alle vil bli politikere', isCorrect: false },
          { id: 'd', text: 'Fordi det star pa pensum', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Retorikk er relevant fordi vi konstant utsettes for forsok pa pavirkning - i sosiale medier, reklame, politikk. A forsta retorikk hjelper oss a gjennomskue og kommunisere bedre.',
      },
    },
    {
      id: 'norsk-vg3-4-8-n-summary',
      type: 'text',
      content: `## Oppsummering

**De tre appellformene:**
- Etos: Avsenderens troverdighet
- Patos: Appell til folelser
- Logos: Logisk argumentasjon

**Toulmins modell:**
- Pastand: Det du vil bevise
- Belegg: Beviset
- Hjemmel: Koblingen

**Retorisk analyse:**
1. Retorisk situasjon
2. Hovedpastand og argumenter
3. Appellformer
4. Virkemidler
5. Vurdering`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.9 NARRATIV: Retoriske virkemidler i dybden
// ============================================================================

export const CHAPTER_NORSK_VG3_4_9_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-4-9-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '4.9',
  title: 'Retoriske virkemidler i dybden',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk verktoyene som gjor sprak kraftfullt - fra metaforer til trikolon.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive retoriske analyser av sakprosa',
    'bruke fagkunnskap i muntlige presentasjoner',
    'orientere seg i faglitteratur og bruke kilder kritisk',
  ],
  linkedChapterId: 'norsk-vg3-4-9',
  content: [
    {
      id: 'norsk-vg3-4-9-n-intro',
      type: 'text',
      content: `## Sprakets hemmelige verktoy

"Jeg har en drom..." Disse fire ordene, gjentatt gang pa gang av Martin Luther King, forandret Amerika. Hvorfor? Fordi King forsto retorikkens virkemidler. Han visste at gjentakelse skaper kraft. At bilder fester seg. At rytme beveger.

Retoriske virkemidler er sprakets hemmelige verktoy. De har vaert brukt i tusenvis av ar - av talere, forfattere, reklamemakere, politikere. A kjenne dem gir deg makt bade til a gjennomskue og til a kommunisere.

La oss apne verktorkassen.`,
    },
    {
      id: 'norsk-vg3-4-9-n-section1',
      type: 'text',
      content: `## Troper - overfort betydning

Metafor er kanskje det viktigste virkemiddelet. "Livet er en reise." "Tid er penger." "Han er en love i kamp." Metaforer overforer egenskaper fra ett omrade til et annet. De gjor det abstrakte konkret, det fremmede kjent.

Vi tenker i metaforer oftere enn vi tror. "Argumentet holder ikke vann." "Hun skjot ned forslaget." "Vi ma komme til bunns i saken." Spraket vart er fullt av dodee metaforer vi ikke engang legger merke til.

Metonymi bytter ut et uttrykk med noe naerliggende. "Kronen har bestemt" (kongen). "Pennen er mektigere enn sverdet" (skrift vs. vold).

Ironi sier det motsatte av det man mener. "For en fin dag!" (nar det regner). Ironi krever at mottaker forstua sammenhengen.`,
    },
    {
      id: 'norsk-vg3-4-9-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-9-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er en metafor?',
        options: [
          { id: 'a', text: 'A si det motsatte av det man mener', isCorrect: false },
          { id: 'b', text: 'A overfore egenskaper fra ett omrade til et annet', isCorrect: true },
          { id: 'c', text: 'A gjenta ord', isCorrect: false },
          { id: 'd', text: 'A stille sporsmal uten svar', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'En metafor overforer egenskaper fra ett omrade til et annet. "Livet er en reise" overforer reisens egenskaper til livet.',
      },
    },
    {
      id: 'norsk-vg3-4-9-n-section2',
      type: 'text',
      content: `## Figurer - spraklige monstre

Anafor er gjentakelse i begynnelsen av setninger. "Jeg har en drom... Jeg har en drom..." Anaforen skaper rytme, bygger intensitet, gjor budskapet minneverdig.

Antitese stiller motsetninger mot hverandre. "Spor ikke hva landet kan gjore for deg - spor hva du kan gjore for landet." Kontrasten gjor poenget skarpt.

Trikolon er tre elementer sammen. "Veni, vidi, vici" - Jeg kom, jeg sa, jeg vant. Tre foeles komplett.

Retorisk sporsmal forventer ikke svar, men inviterer til enighet. "Skal vi virkelig akseptere dette?"

Klimaks bygger opp mot et hoydepunkt. Elementene oker i intensitet.`,
    },
    {
      id: 'norsk-vg3-4-9-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-9-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er anafor?',
        options: [
          { id: 'a', text: 'A stille motsetninger mot hverandre', isCorrect: false },
          { id: 'b', text: 'Gjentakelse av samme ord i begynnelsen av setninger', isCorrect: true },
          { id: 'c', text: 'A bruke tre elementer', isCorrect: false },
          { id: 'd', text: 'A overdrive', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Anafor er gjentakelse av samme ord eller frase i begynnelsen av pafolgende setninger. Kings "I have a dream" er et klassisk eksempel.',
      },
    },
    {
      id: 'norsk-vg3-4-9-n-section3',
      type: 'text',
      content: `## Martin Luther Kings tale

La oss se pa et mestereksempel: Kings "I Have a Dream" fra 1963.

Anafor: "I have a dream" gjentas atte ganger. Hver gang bygges visjonen ut.

Metaforer: Borgerrettigheter som okonomisk gjeld ("a check marked insufficient funds"). Motsetning mellom morke og lys.

Antitese: "Not by the color of their skin but by the content of their character."

Klimaks: Hele talen bygger mot "Free at last! Free at last!"

King kombinerte alle verktoyene. Resultatet var en tale som fortsatt beveger.`,
    },
    {
      id: 'norsk-vg3-4-9-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-9-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvor mange ganger gjentas "I have a dream" i Kings tale?',
        options: [
          { id: 'a', text: 'To ganger', isCorrect: false },
          { id: 'b', text: 'Fire ganger', isCorrect: false },
          { id: 'c', text: 'Atte ganger', isCorrect: true },
          { id: 'd', text: 'Tolv ganger', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"I have a dream" gjentas atte ganger, som en anafor som bygger intensitet og gjor visjonen levende.',
      },
    },
    {
      id: 'norsk-vg3-4-9-n-section4',
      type: 'text',
      content: `## Lydlige virkemidler

Allitterasjon er gjentakelse av konsonantlyder. "Stovet siver stille ned." Lyden skaper rytme og sammenheng.

Assonans er gjentakelse av vokallyder. Den gir teksten en sang.

Rim er det mest kjente lydlige virkemiddelet - likhet i lyd pa slutten av ord.

Disse virkemidlene gjor tekst mer minneverdig. De appellerer til oret, ikke bare til hjernen.`,
    },
    {
      id: 'norsk-vg3-4-9-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-9-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er allitterasjon?',
        options: [
          { id: 'a', text: 'Gjentakelse av vokallyder', isCorrect: false },
          { id: 'b', text: 'Gjentakelse av konsonantlyder', isCorrect: true },
          { id: 'c', text: 'Rim pa slutten av linjer', isCorrect: false },
          { id: 'd', text: 'Gjentakelse av hele ord', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Allitterasjon er gjentakelse av konsonantlyder, som i "stovet siver stille".',
      },
    },
    {
      id: 'norsk-vg3-4-9-n-section5',
      type: 'text',
      content: `## A bruke virkemidlene selv

Nar du skriver eller taler, kan du bevisst bruke disse verktoyene.

Bruk metaforer for a gjore det abstrakte konkret. "Klimakrisen er en bomb med lang lunte."

Bruk anafor for a bygge kraft. "Vi ma handle na. Vi ma handle sammen. Vi ma handle rett."

Bruk antitese for a tydeliggjore valg. "Sporsmalet er ikke om vi har rad til dette - sporsmalet er om vi har rad til a la vaere."

Men vaer forsiktig. Overforbruk kan virke kunstig. De beste talerne bruker virkemidlene med matehold - nok til a forsterke, ikke sa mye at det distraherer.`,
    },
    {
      id: 'norsk-vg3-4-9-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-9-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er den viktigste regelen for bruk av retoriske virkemidler?',
        options: [
          { id: 'a', text: 'Bruk sa mange som mulig', isCorrect: false },
          { id: 'b', text: 'Bruk dem med matehold', isCorrect: true },
          { id: 'c', text: 'Unnga dem helt', isCorrect: false },
          { id: 'd', text: 'Bruk bare metaforer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Virkemidler bor brukes med matehold - nok til a forsterke, men ikke sa mye at det distraherer eller virker kunstig.',
      },
    },
    {
      id: 'norsk-vg3-4-9-n-summary',
      type: 'text',
      content: `## Oppsummering

**Troper (overfort betydning):**
- Metafor: Overforing av egenskaper
- Metonymi: Naerliggende uttrykk
- Ironi: Det motsatte

**Figurer (spraklige monstre):**
- Anafor: Gjentakelse i begynnelsen
- Antitese: Motsetninger
- Trikolon: Tre elementer
- Klimaks: Oppbygging
- Retorisk sporsmal

**Lydlige virkemidler:**
- Allitterasjon: Konsonantgjentakelse
- Assonans: Vokalgjentakelse`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.10 NARRATIV: Litterar analyse og tolkning
// ============================================================================

export const CHAPTER_NORSK_VG3_4_10_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-4-10-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '4.10',
  title: 'Litterar analyse og tolkning',
  subtitle: 'Narrativ versjon',
  description: 'Laer metodene som gjor deg til en bedre leser - fra naerlesing til sammenligning.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive litteraere analyser og sammenligninger',
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
  ],
  linkedChapterId: 'norsk-vg3-4-10',
  content: [
    {
      id: 'norsk-vg3-4-10-n-intro',
      type: 'text',
      content: `## A lese med nye oyne

Du har lest tekster hele livet. Men a analysere en tekst er noe annet enn bare a lese den. Det er a stille sporsmal, se monstre, grave dypere.

Litterar analyse handler om a forsta tekster bedre - ikke bare hva de sier, men hvordan de sier det, hvorfor de er skrevet slik, og hva de kan bety.

Det finnes mange mater a naerme seg en tekst pa. La oss utforske de viktigste.`,
    },
    {
      id: 'norsk-vg3-4-10-n-section1',
      type: 'text',
      content: `## Naerlesing

Naerlesing er detaljert analyse av sprak og form. Du gar taet pa teksten, ord for ord, setning for setning.

Hva star det egentlig? Ikke hva du tror det betyr - hva star der bokstavelig?

Hvilke ord er valgt? Kunne andre ord vaert brukt? Hvorfor akkurat disse?

Hvordan er setningene bygget? Lange eller korte? Komplekse eller enkle?

Hvilke virkemidler brukes? Bilder, gjentakelser, kontraster, rytme?

Naerlesing krever talmodighet. Men den avdekker ting du ellers ville oversett.`,
    },
    {
      id: 'norsk-vg3-4-10-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-10-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner naerlesing?',
        options: [
          { id: 'a', text: 'A lese sa fort som mulig', isCorrect: false },
          { id: 'b', text: 'Detaljert analyse av sprak og form', isCorrect: true },
          { id: 'c', text: 'A bare lese sammendraget', isCorrect: false },
          { id: 'd', text: 'A fokusere pa forfatterens biografi', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Naerlesing er detaljert analyse der du gar taet pa teksten - ordvalg, setningsbygning, virkemidler.',
      },
    },
    {
      id: 'norsk-vg3-4-10-n-section2',
      type: 'text',
      content: `## Kontekstuell lesning

Ingen tekst eksisterer i et vakuum. Kontekstuell lesning setter teksten i sammenheng.

Historisk kontekst: Nar ble teksten skrevet? Hva skjedde i samfunnet? Hvordan preget tiden teksten?

Forfatterens biografi: Hvem skrev dette? Hva visste de, opplevde de, trodde pa? Hvordan preget livet verket?

Litteraer kontekst: Hvilken tradisjon tilhorer teksten? Hvilke andre tekster var den i dialog med?

Kontekstuell lesning gir dybde. Du forstuar ikke bare hva teksten sier, men hvorfor den sier det.`,
    },
    {
      id: 'norsk-vg3-4-10-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-10-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva inngar i kontekstuell lesning?',
        options: [
          { id: 'a', text: 'Bare a telle ord', isCorrect: false },
          { id: 'b', text: 'Historisk kontekst, forfatterens biografi, litteraer tradisjon', isCorrect: true },
          { id: 'c', text: 'Bare a lese fotnoter', isCorrect: false },
          { id: 'd', text: 'A ignorere nar teksten ble skrevet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kontekstuell lesning inkluderer historisk kontekst, forfatterens biografi og den litteraere tradisjonen teksten tilhorer.',
      },
    },
    {
      id: 'norsk-vg3-4-10-n-section3',
      type: 'text',
      content: `## Tematisk lesning

Tematisk lesning fokuserer pa hva teksten handler om - de underliggende ideene.

Tema er det abstrakte sporsmalet teksten utforsker. Kjarlighet, dod, frihet, identitet.

Motiv er de konkrete elementene som barer temaet. En rose, en reise, et speil.

Tematisk lesning ser etter monstre. Hvordan behandler denne teksten sitt tema? Hva sier den som er annerledes enn andre tekster om samme tema?`,
    },
    {
      id: 'norsk-vg3-4-10-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-10-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er forskjellen pa tema og motiv?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
          { id: 'b', text: 'Tema er abstrakt, motiv er konkret', isCorrect: true },
          { id: 'c', text: 'Tema er kort, motiv er langt', isCorrect: false },
          { id: 'd', text: 'Tema er nytt, motiv er gammelt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Tema er det abstrakte (kjarlighet, dod), mens motiv er de konkrete elementene som barer temaet (en rose, en reise).',
      },
    },
    {
      id: 'norsk-vg3-4-10-n-section4',
      type: 'text',
      content: `## Sammenlignende analyse

A sammenligne tekster avslorer ting du ikke ville sett i hver tekst alene.

Velg sammenlignbare tekster. De ma ha noe felles - tema, periode, forfatter, form.

Analyser hver tekst forst. Forstua dem individuelt for du sammenligner.

Pek pa likheter og forskjeller. Ikke bare list dem opp - diskuter hva de betyr.

Trekk konklusjoner. Hva laerer vi av sammenligningen? Hva forteller forskjellene oss?`,
    },
    {
      id: 'norsk-vg3-4-10-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-10-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er viktig i sammenlignende analyse?',
        options: [
          { id: 'a', text: 'A bare liste opp likheter', isCorrect: false },
          { id: 'b', text: 'A diskutere hva likhetene og forskjellene betyr', isCorrect: true },
          { id: 'c', text: 'A sammenligne helt tilfeldige tekster', isCorrect: false },
          { id: 'd', text: 'A bare se pa lengde', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'I sammenlignende analyse holder det ikke a liste likheter og forskjeller - du ma diskutere hva de betyr og hvilke slutninger vi kan trekke.',
      },
    },
    {
      id: 'norsk-vg3-4-10-n-section5',
      type: 'text',
      content: `## A bli en bedre leser

Litterar analyse er en ferdighet som utvikles. Jo mer du praktiserer, jo mer ser du.

Les aktivt. Still sporsmal mens du leser. Marker teksten. Ta notater.

Vaer nysgjerrig. Hvorfor valgte forfatteren akkurat dette? Hva skjuler seg under overflaten?

Aksepter flertydighet. Gode tekster har ofte flere mulige tolkninger. Det er ikke en svakhet - det er en styrke.

Del tankene dine. Diskusjon med andre avslorer nye perspektiver.`,
    },
    {
      id: 'norsk-vg3-4-10-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-10-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva bor du akseptere nar du tolker tekster?',
        options: [
          { id: 'a', text: 'At det bare finnes en riktig tolkning', isCorrect: false },
          { id: 'b', text: 'At gode tekster ofte har flere mulige tolkninger', isCorrect: true },
          { id: 'c', text: 'At tolkning er umulig', isCorrect: false },
          { id: 'd', text: 'At din forste tanke alltid er riktig', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Gode tekster er ofte flertydige - de har flere mulige tolkninger. Dette er ikke en svakhet, men en del av tekstens rikdom.',
      },
    },
    {
      id: 'norsk-vg3-4-10-n-summary',
      type: 'text',
      content: `## Oppsummering

**Analysemetoder:**

**Naerlesing:**
- Detaljert analyse av sprak og form
- Ordvalg, setningsbygning, virkemidler

**Kontekstuell lesning:**
- Historisk kontekst
- Forfatterens biografi
- Litterar tradisjon

**Tematisk lesning:**
- Tema (abstrakt) og motiv (konkret)
- Monstre pa tvers av tekster

**Sammenlignende analyse:**
- Velg sammenlignbare tekster
- Analyser, sammenlign, konkluder`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.11 NARRATIV: Tolkning og hermeneutikk
// ============================================================================

export const CHAPTER_NORSK_VG3_4_11_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-4-11-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '4.11',
  title: 'Tolkning og hermeneutikk',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk hvordan vi forstaar tekster - og hvorfor forstaelse aldri er ferdig.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive litteraere analyser og sammenligninger',
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'orientere seg i faglitteratur og bruke kilder kritisk',
  ],
  linkedChapterId: 'norsk-vg3-4-11',
  content: [
    {
      id: 'norsk-vg3-4-11-n-intro',
      type: 'text',
      content: `## Mysteriet med a forsta

Du leser en bok. Du forstaar ordene. Men hva betyr det egentlig a forsta?

Hermeneutikk er filosofien om forstaelse og tolkning. Den stiller grunnleggende sporsmal: Hvordan forstaar vi tekster? Hva bringer vi med oss inn i lesningen? Kan vi noen gang forsta "riktig"?

Dette hoeres kanskje abstrakt ut. Men hermeneutikken har praktiske konsekvenser. Den forandrer hvordan du leser, hvordan du tolker, hvordan du tenker om mening.

La oss utforske denne gamle visdomstradisjonen.`,
    },
    {
      id: 'norsk-vg3-4-11-n-section1',
      type: 'text',
      content: `## Den hermeneutiske sirkel

Her er hermeneutikkens viktigste innsikt: Vi forstaar delene ut fra helheten, og helheten ut fra delene.

Tenk pa det slik: Du leser forste setning i en roman. Du forstaar ordene, men du vet ikke hva boken handler om. Etter hvert som du leser, bygger du opp en forstaelse av helheten. Men denne helhetsforstaelsen endrer hvordan du forstaar de enkelte setningene.

Det er en sirkel - eller rettere sagt, en spiral. For hver runde oker forstaelsen. Du veksler mellom del og helhet, og begge utdypes.

Dette gjelder ikke bare tekster. Det gjelder all forstaelse. Du forstaar et ord ut fra setningen, setningen ut fra avsnittet, avsnittet ut fra teksten, teksten ut fra forfatterskapet, forfatterskapet ut fra perioden...`,
    },
    {
      id: 'norsk-vg3-4-11-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-11-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva beskriver den hermeneutiske sirkel?',
        options: [
          { id: 'a', text: 'At tekster er skrevet i sirkler', isCorrect: false },
          { id: 'b', text: 'At vi forstaar delene ut fra helheten og omvendt', isCorrect: true },
          { id: 'c', text: 'At all forstaelse er umulig', isCorrect: false },
          { id: 'd', text: 'At vi bare kan lese en bok en gang', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Den hermeneutiske sirkel beskriver vekslingen mellom del og helhet i forstaelse. Vi forstaar delene ut fra helheten, og helheten bygges opp av delene.',
      },
    },
    {
      id: 'norsk-vg3-4-11-n-section2',
      type: 'text',
      content: `## Forforstaelse

Vi moter aldri en tekst med blanke ark. Vi har alltid en forforstaelse - forutsetninger vi bringer med.

Hva vet du om sjangeren? Om forfatteren? Om temaet? Hva forventer du?

Forforstaelse er ikke bare en hindring. Uten den kunne vi ikke forsta noe som helst. Du ma vite hva en roman er for a lese en roman.

Men forforstaelsen kan ogsa fore pa villspor. Du kan lese inn ting som ikke er der. Du kan ga glipp av ting fordi du ikke forventet dem.

Den gode leser er bevisst pa sin forforstaelse. Hva tar jeg for gitt? Er jeg apen for a bli overrasket?`,
    },
    {
      id: 'norsk-vg3-4-11-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-11-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er forforstaelse?',
        options: [
          { id: 'a', text: 'A ikke forsta noe', isCorrect: false },
          { id: 'b', text: 'Forutsetningene vi bringer med til lesningen', isCorrect: true },
          { id: 'c', text: 'A forsta for fort', isCorrect: false },
          { id: 'd', text: 'En type sjanger', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Forforstaelse er forutsetningene vi har med oss nar vi moter en tekst - kunnskap, forventninger, tidligere erfaringer.',
      },
    },
    {
      id: 'norsk-vg3-4-11-n-section3',
      type: 'text',
      content: `## Hans-Georg Gadamer

Den tyske filosofen Gadamer (1900-2002) utviklet moderne hermeneutikk. Hans hovedverk "Sannhet og metode" (1960) er en klassiker.

Gadamer argumenterte for at all forstaelse er historisk. Vi kan aldri komme helt ut av var egen tid og se teksten "objektivt". Men det er ikke et problem - det er en forutsetning.

Han brukte begrepet horisontsammensmeltning. Leseren har sin horisont (forforstaelse). Teksten har sin horisont (historisk kontekst). I tolkningen smelter disse sammen til noe nytt.

Mening oppstaar i motet mellom tekst og leser. Det er ikke noe som ligger ferdig i teksten og bare venter pa a bli funnet.`,
    },
    {
      id: 'norsk-vg3-4-11-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-11-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva menes med "horisontsammensmeltning"?',
        options: [
          { id: 'a', text: 'At solen gar ned', isCorrect: false },
          { id: 'b', text: 'At leserens og tekstens horisont smelter sammen i tolkningen', isCorrect: true },
          { id: 'c', text: 'At alle tekster handler om det samme', isCorrect: false },
          { id: 'd', text: 'At vi ikke kan se horisonten', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Horisontsammensmeltning beskriver hvordan leserens forforstaelse og tekstens historiske kontekst moeter og smelter sammen i tolkningsprosessen.',
      },
    },
    {
      id: 'norsk-vg3-4-11-n-section4',
      type: 'text',
      content: `## Tolkningens grenser

Kan en tekst bety hva som helst? Nei.

En god tolkning ma ta utgangspunkt i teksten selv. Du kan ikke bare finne pa noe.

En god tolkning ma vaere konsistent. Den ma henge sammen innvortes.

En god tolkning ma kunne begrunnes. Du ma kunne vise til teksten og forklare hvorfor.

En god tolkning ma vaere apen for diskusjon. Andre kan vaere uenige, og det er greit.

Men det betyr ikke at det finnes bare en riktig tolkning. Ulike tolkninger kan vaere gyldige samtidig.`,
    },
    {
      id: 'norsk-vg3-4-11-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-11-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en god tolkning?',
        options: [
          { id: 'a', text: 'Den trenger ikke begrunnes', isCorrect: false },
          { id: 'b', text: 'Den tar utgangspunkt i teksten og kan begrunnes', isCorrect: true },
          { id: 'c', text: 'Den er alltid den samme som alle andres', isCorrect: false },
          { id: 'd', text: 'Den ignorerer teksten helt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'En god tolkning tar utgangspunkt i teksten selv, er konsistent, og kan begrunnes med referanse til teksten.',
      },
    },
    {
      id: 'norsk-vg3-4-11-n-section5',
      type: 'text',
      content: `## Hermeneutikk i praksis

Hvordan bruker du dette nar du leser og tolker?

Vaer bevisst pa forforstaelsen. Hva forventer du? Hva antar du?

Veksle mellom del og helhet. Les naert, men se ogsa det store bildet.

Vaer apen for at teksten overrasker deg. La den utfordre forforstaelsen.

Aksepter at tolkning er en prosess. Forstaelsen utvikles - den er aldri ferdig.

Still teksten sporsmal - og la teksten stille deg sporsmal.`,
    },
    {
      id: 'norsk-vg3-4-11-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-11-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva betyr det at forstaelse "aldri er ferdig"?',
        options: [
          { id: 'a', text: 'At vi aldri kan lese ferdig en bok', isCorrect: false },
          { id: 'b', text: 'At tolkningen kan utvikles og utdypes stadig', isCorrect: true },
          { id: 'c', text: 'At vi aldri forstaar noe', isCorrect: false },
          { id: 'd', text: 'At boker aldri tar slutt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Forstaelse er en prosess som kan utvikles og utdypes. Hver gang du vender tilbake til en tekst, kan du se noe nytt.',
      },
    },
    {
      id: 'norsk-vg3-4-11-n-summary',
      type: 'text',
      content: `## Oppsummering

**Hermeneutikk - hovedbegreper:**

**Den hermeneutiske sirkel:**
- Veksling mellom del og helhet
- Forstaelsen utvikles spiralaktig

**Forforstaelse:**
- Forutsetninger vi bringer med
- Bade nodvendig og potensielt villedende

**Gadamer og horisontsammensmeltning:**
- Mening oppstar i motet mellom leser og tekst
- All forstaelse er historisk

**Tolkningens grenser:**
- Ma ta utgangspunkt i teksten
- Ma vaere konsistent og begrunnes
- Flere gyldige tolkninger er mulig`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG3_NARRATIV_DEL6_CHAPTERS = [
  CHAPTER_NORSK_VG3_4_1_NARRATIV,
  CHAPTER_NORSK_VG3_4_2_NARRATIV,
  CHAPTER_NORSK_VG3_4_3_NARRATIV,
  CHAPTER_NORSK_VG3_4_4_NARRATIV,
  CHAPTER_NORSK_VG3_4_5_NARRATIV,
  CHAPTER_NORSK_VG3_4_6_NARRATIV,
  CHAPTER_NORSK_VG3_4_7_NARRATIV,
  CHAPTER_NORSK_VG3_4_8_NARRATIV,
  CHAPTER_NORSK_VG3_4_9_NARRATIV,
  CHAPTER_NORSK_VG3_4_10_NARRATIV,
  CHAPTER_NORSK_VG3_4_11_NARRATIV,
];