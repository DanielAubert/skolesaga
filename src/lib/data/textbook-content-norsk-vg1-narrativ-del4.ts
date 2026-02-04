/**
 * Norsk VG1 - Narrative versjoner Del 4 (Kapittel 3.1-3.5)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Hovedfil: textbook-content-norsk-vg1-narrativ.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1 NARRATIV: Flerkulturell litteratur i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_3_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-3-1-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '3.1',
  title: 'Flerkulturell litteratur i Norge',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag stemmene som forandrer norsk litteratur - fortellinger om a tilhore flere steder samtidig.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og tolke tekster som utforsker kulturmoter og identitet',
    'reflektere over hvordan litteratur speiler samfunnet',
  ],
  linkedChapterId: 'norsk-vg1-3-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-3-1-n-intro',
      type: 'text',
      content: `## Nye stemmer, nye historier

Tenk deg at du vokser opp pa Stovner i Oslo. Hjemme snakker dere urdu og ser pakistansk TV. Pa skolen snakker du norsk med ord fra arabisk, somali og engelsk blandet inn. Besteforeldrene dine bor i Lahore og har aldri sett sno. Laereren din, som er fra Bergen, sier at du snakker "rart". Men dette er jo sprakene dine. Dette er jo deg.

I lang tid fantes det nesten ingen boker som fortalte slike historier. Norsk litteratur handlet om fjord og fjell, om bondelivet pa 1800-tallet, om borgerskapet i Kristiania. Men sa begynte noe a endre seg. Forfattere som selv hadde vokst opp mellom kulturer, begynte a skrive. Og de skrev ikke om fjorder. De skrev om drabantbyer og postnumre, om familier der tre sprak snakkes rundt middagsbordet, om a kjenne seg "for norsk" hjemme og "for utenlandsk" ute.

Maria Navarro Skaranger debuterte i 2015 med "Alle utlendinger har lukka gardiner". Zeshan Shakar sendte sjokkbolger gjennom det litteraere Norge med "Tante Ulrikkes vei" i 2017. Gulraiz Sharif fikk ungdom over hele landet til a le og grate med "Hor her'a!" i 2020. Disse forfatterne har ikke bare beriket norsk litteratur, de har utvidet selve ideen om hva "norsk" kan vaere.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg1-3-1-n-section1',
      type: 'text',
      content: `## Hybrididentitet - a vaere flere ting pa en gang

Nar vi snakker om flerkulturell litteratur, stoter vi raskt pa et begrep som er sentralt: hybrididentitet. Det horest kanskje akademisk ut, men det beskriver noe veldig menneskelig. En hybrididentitet er ikke halv-norsk og halv-pakistansk, som om identitet var en kake du kunne dele i to. Det er noe helt eget, en tredje ting som oppstar nar to kulturer moter hverandre i ett menneske.

Tenk pa Jamal og Mo i "Tante Ulrikkes vei". De vokser opp pa samme sted, men de navigerer den flerkulturelle virkeligheten pa helt ulike mater. Mo jobber hardt pa skolen, tar avstand fra gatas koder, og ender opp pa Blindern. Jamal lever midt i spenningen mellom familiens forventninger og gatens regler. Begge har hybride identiteter, men hybriditeten ser helt forskjellig ut.

Den postkoloniale teoretikeren Homi Bhabha bruker begrepet "det tredje rommet" for a beskrive dette. Det tredje rommet er ikke India og ikke England, ikke Pakistan og ikke Norge. Det er stedet der kulturer moter hverandre og skaper noe nytt. Det er der Maria Navarro Skarangers Mariana lever - i en drabantby i Oslo som verken er spansk, chilensk eller "typisk norsk", men noe helt eget.

Bindestrek-identiteter som "norsk-pakistansk" eller "norsk-somalisk" kan vaere tveegget. Pa den ene siden anerkjenner de at mennesker har rorter i flere steder. Pa den andre siden kan de oppleves som en beskjed om at du aldri blir helt norsk. Du er alltid norsk-noe, aldri bare norsk.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva menes med "hybrididentitet" i flerkulturell litteratur?',
        options: [
          { id: 'a', text: 'A vaere halv norsk og halv utenlandsk', isCorrect: false },
          { id: 'b', text: 'En identitet som kombinerer elementer fra flere kulturer til noe nytt og eget', isCorrect: true },
          { id: 'c', text: 'A fornekte sin opprinnelige kultur', isCorrect: false },
          { id: 'd', text: 'A bare snakke ett sprak hjemme', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Hybrididentitet handler ikke om a vaere "halvt-halvt", men om a skape noe nytt. Nar kulturer moter hverandre i ett menneske, oppstar en unik identitet som ikke kan reduseres til summen av delene.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg1-3-1-n-section2',
      type: 'text',
      content: `## Maria Navarro Skaranger - sprakets opprorer

I 2015 var Maria Navarro Skaranger 21 ar gammel da hun ga ut "Alle utlendinger har lukka gardiner". Boka slo ned som en bombe i norsk litteratur. Ikke fordi historien var sa oppsiktsvekkende - den handler om Mariana, en sektenaring som vokser opp i en drabantby i Oslo - men pa grunn av spraket.

"Hu moren min var full av hat. Hu hata hu nabodama som hadde BMW og nese i sky." Slik skrives det ikke i norske romaner. Eller gjorde det ikke, for Skaranger gjorde det. Hun skrev slik folk faktisk snakker pa Romsas. Hun brukte "hu" i stedet for "hun", hun lot karakterene veksle mellom norsk og spansk, hun fanget rytmen og melodien i et sprak som millioner av nordmenn snakker, men som nesten aldri har fatt plass i litteraturen.

Det er dette vi kaller kodeveksling - a veksle mellom ulike sprak eller dialekter. Nar Mariana sier "wallah" (arabisk for "ved Gud") og "bro" (engelsk for "brother") i samme setning som "liksom" og "ass", er det ikke fordi hun ikke kan "ordentlig norsk". Det er fordi dette er hennes norsk. Dette er spraket til ungdommer som vokser opp i flerespraklige miljoer, og det er like ekte og levende som bokmalet i Aftenposten.

Skaranger viste at norsk litteratur hadde et blindsone. Den hadde ignorert en hel verden av erfaringer og stemmer. Ved a skrive pa sitt eget sprak, apnet hun en dor som mange flere forfattere har gatt gjennom siden.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er "kodeveksling" i spraklig sammenheng?',
        options: [
          { id: 'a', text: 'A skrive hemmelige koder', isCorrect: false },
          { id: 'b', text: 'A oversette mellom sprak', isCorrect: false },
          { id: 'c', text: 'A veksle mellom ulike sprak eller dialekter i dagligtale', isCorrect: true },
          { id: 'd', text: 'A lare et nytt sprak pa skolen', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Kodeveksling er nar en person naturlig veksler mellom flere sprak eller dialekter i samtale. Det er typisk for flerespraklige miljoer og signaliserer ofte tilhorighet og kulturell kompetanse.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg1-3-1-n-section3',
      type: 'text',
      content: `## Zeshan Shakar - klasseperspektivet

Zeshan Shakar er samfunnsokonomnok utdannet samfunnsokonom, og det merkes. Nar du leser "Tante Ulrikkes vei", leser du ikke bare om to gutter som vokser opp pa Stovner. Du leser om hvordan klassebakgrunn former muligheter, om hvordan postnummeret ditt kan bestemme fremtiden din.

Romanen veksler mellom Mo, som skriver formelle e-poster til sin veileder pa universitetet, og Jamal, som skriver uformelle dagboknotater fulle av gateslang. Kontrasten er slående. Mo klatrer i systemet, laerer a snakke som dem pa Blindern, tilpasser seg. Jamal blir igjen, fanget i forventninger fra familien og presset fra gata.

Det geniale med "Tante Ulrikkes vei" er at Shakar ikke dommer. Han viser bare. Han viser hvordan to mennesker med ganske lik bakgrunn kan ende opp i helt ulike liv, ikke fordi den ene er bedre enn den andre, men fordi strukturene rundt dem dytter dem i ulike retninger.

Klasseperspektivet er sentralt i mye flerkulturell litteratur. For det a vaere innvandrer eller etterkommer av innvandrere i Norge handler ikke bare om kultur og identitet. Det handler ogsa om okonomi, om hvilke nabolag du har rad til a bo i, om hvilke skoler barna dine gar pa, om hvilke nettverk du har tilgang til. Flerkulturell litteratur avslorer ofte at Norge er et mer klassedelt samfunn enn vi liker a tro.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-3-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilken fortellerteknikk bruker Zeshan Shakar i "Tante Ulrikkes vei"?',
        options: [
          { id: 'a', text: 'En allvitende forteller som beskriver alle karakterene utenfra', isCorrect: false },
          { id: 'b', text: 'Veksling mellom Jamals dagboknotater og Mos e-poster', isCorrect: true },
          { id: 'c', text: 'Forste person entall gjennom hele boka', isCorrect: false },
          { id: 'd', text: 'Brev til en ukjent mottaker', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Shakar bruker to kontrasterende stemmer: Jamals uformelle dagboknotater og Mos formelle e-poster. Denne teknikken lar oss se to ulike mater a navigere verden pa, og viser hvordan sprak og sjanger speiler sosial posisjon.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg1-3-1-n-section4',
      type: 'text',
      content: `## Flere viktige stemmer

Flerkulturell norsk litteratur er mer enn Skaranger og Shakar. En hel generasjon forfattere har kommet til i de siste arene, hver med sin unike stemme.

Sumaya Jirde Ali er poet og samfunnsdebattant. I diktsamlingen "Ikkje ver redd, jiansen" skriver hun direkte og ufiltrert om a vaere ung, svart og muslimsk i Norge. Hun nekter a vaere taus, nekter a passe inn i forventningene til hvordan en ung kvinne med hijab skal oppfore seg. Diktet hennes konfronterer rasisme og fordommer med en styrke som kan ta pusten fra deg.

Gulraiz Sharif debuterte i 2020 med "Hor her'a!", en roman der femtenaringen Mahmoud skriver brev til lillbroren Simen. Boka er morsom, hjerteskjaerende og full av innsikt om maskulinitet, aeire og familieforventninger. Sharif klarer a vaere politisk uten a vaere belærende, a ta opp alvorlige temaer uten a miste humoren.

Det disse forfatterne har til felles, er at de insisterer pa a fortelle sine egne historier. De nekter a vaere representanter for en hel gruppe. De skriver som individer, med alle motsetningene og kompleksitetene det innebærer. Og de utvider hele tiden hva norsk litteratur kan vaere.

For representasjon handler ikke bare om a se noen som "ligner deg" i en bok. Det handler om a se kompleksiteten i dine erfaringer gjengitt, ikke som kuriositeter eller problemer, men som like gyldige som alle andres liv.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-3-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor er representasjon viktig i litteraturen?',
        options: [
          { id: 'a', text: 'Det gjor det lettere a selge boker til bestemte grupper', isCorrect: false },
          { id: 'b', text: 'Det oppfyller politiske krav om mangfold', isCorrect: false },
          { id: 'c', text: 'Det lar lesere se kompleksiteten i egne erfaringer gjengitt som like gyldige som andres', isCorrect: true },
          { id: 'd', text: 'Det er bare viktig for minoriteter', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Representasjon handler om at alle skal kunne se sine erfaringer gjengitt i litteraturen - ikke som kuriositeter eller problemer, men som like komplekse og gyldige som alle andres liv. Det utvider ogsa leserens forstaelse av verden.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg1-3-1-n-section5',
      type: 'text',
      content: `## Sprak som identitet

Noe av det mest slående ved flerkulturell litteratur er hvordan den bruker sprak. Sprak er ikke bare et verktoy for kommunikasjon. Det er en del av hvem vi er.

Nar Maria Navarro Skaranger skriver "hu" i stedet for "hun", gjor hun et valg som handler om mer enn grammatikk. Hun velger a anerkjenne et sprak som ofte blir sett ned pa. Hun velger a gi verdighet til hvordan folk faktisk snakker. Det samme gjor de andre forfatterne nar de lar karakterene si "wallah", "bro", "sjopp" og "ass" i samme setning.

Men spraket i flerkulturell litteratur handler ogsa om noe annet: om det a vaere mellom sprak. Mange av karakterene vi moter, lever i familier der foreldrene snakker et sprak, besteforeldrene et annet, og barna kanskje et tredje med hverandre. A miste sprak, a ikke kunne snakke med sine egne besteforeldre, er et sentralt tema i mange av disse bofene.

Spraket markerer ogsa tilhorighet. Nar Jamal skriver pa gateslang, signaliserer han hvem han er og hvor han kommer fra. Nar Mo skriver formelle e-poster, viser han at han har laert kodene til en annen verden. Begge bruker sprak strategisk, enten de er klar over det eller ikke.

A lese flerkulturell litteratur er derfor ogsa a lese om sprak selv - om makt, tilhorighet og identitet uttrykt gjennom ordene vi velger.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-3-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner flerkulturell litteratur?',
        options: [
          { id: 'a', text: 'Den handler alltid om innvandring og flyktninger', isCorrect: false },
          { id: 'b', text: 'Den er alltid skrevet pa dialekt', isCorrect: false },
          { id: 'c', text: 'Den utforsker kulturmoter, identitet mellom kulturer, og ofte bruker nyskapende sprak', isCorrect: true },
          { id: 'd', text: 'Den er bare for lesere med innvandrerbakgrunn', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Flerkulturell litteratur kjennetegnes ved at den utforsker kulturmoter, hybrididentitet og erfaringen av a tilhore flere steder. Den bruker ofte nyskapende sprak som speiler flerespraklige virkeligheter.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Flerkulturell litteratur i Norge

Du har na fatt en innforing i flerkulturell norsk litteratur - en av de mest vitale og nyskapende delene av norsk litteratur i dag. Her er de viktigste innsiktene:

**Hybrididentitet:**
Hybrididentitet er ikke "halv-halv", men noe helt eget som oppstar nar kulturer moter hverandre i ett menneske. "Det tredje rommet" (Bhabha) beskriver dette mellomrommet der nye identiteter skapes.

**Viktige forfattere:**
Maria Navarro Skaranger revolusjonerte norsk litteratur med sitt nyskapende sprak. Zeshan Shakar satte klasseperspektivet pa dagsordenen. Sumaya Jirde Ali og Gulraiz Sharif tilforer nye stemmer og perspektiver.

**Sprak og identitet:**
Kodeveksling - a veksle mellom sprak - er typisk for flerespraklige miljoer. Spraket i flerkulturell litteratur speiler hvordan folk faktisk snakker og gir verdighet til sprakformer som ofte har vaert usynlige i litteraturen.

**Representasjon:**
Flerkulturell litteratur utvider norsk litteratur ved a fortelle historier som tidligere har manglet. Det handler ikke bare om a "se seg selv", men om a se kompleksiteten i alle slags erfaringer gjengitt som like gyldige.

**Klasseperspektiv:**
Mange av disse tekstene viser at det a vaere innvandrer i Norge ogsa handler om klasse - om postnumre, muligheter og strukturer som former livene vare.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2 NARRATIV: Kulturmoter og identitet i tekster
// ============================================================================

export const CHAPTER_NORSK_VG1_3_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-3-2-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '3.2',
  title: 'Kulturmoter og identitet i tekster',
  subtitle: 'Narrativ versjon',
  description: 'Laer a lese med kritisk blikk - hvordan makt og perspektiv former fremstillingen av kulturer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese tekster med et kritisk og kulturelt perspektiv',
    'reflektere over representasjon og stereotypier i tekster',
  ],
  linkedChapterId: 'norsk-vg1-3-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-3-2-n-intro',
      type: 'text',
      content: `## A lese med nye oyne

Forestill deg at du leser en gammel reiseskildring fra 1800-tallet. Forfatteren, en europeisk oppdager, beskriver menneskene han moter i Afrika som "primitive", "barnslige" og "eksotiske". Han er fascinert av ritualene deres, som han finner "merkelige". Han tar med seg gjenstander hjem som "kuriositeter". Han skriver med selvsikkerhet om folk han knapt har snakket med.

Nar du leser dette i dag, kjenner du kanskje et ubehag. Noe stemmer ikke. Men hva er det egentlig som er galt? Og viktigere: Hvordan kan vi lare a gjenkjenne slike monstre, ogsa i tekster som ikke er sa opplagt problematiske?

Dette er kjernen i postkolonial lesning. Det handler ikke om a sensurere eller fordamme gamle tekster. Det handler om a lese med bevissthet - om a forstå hvem som forteller, hvem som har makt til a definere, og hvordan dette former teksten vi leser.

Postkolonial teori gir oss verktoy for a stille kritiske sporsmål til tekster. Hvem forteller historien? Fra hvilket perspektiv? Hvem fremstilles som "normale" og hvem som "annerledes"? Hvem har stemme, og hvem er tause? Svarene pa disse sporsmalene kan avslife mye om maktforhold og fordomemer vi ellers ikke ville sett.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg1-3-2-n-section1',
      type: 'text',
      content: `## Den andre - hvem er "de"?

Et av de viktigste begrepene i postkolonial teori er "den andre" - pa engelsk "the Other". Begrepet stammer fra den palestinsk-amerikanske tenkeren Edward Said, som i 1978 ga ut boka "Orientalismen". Said viste hvordan Vesten gjennom arhundrer hadde skapt et bilde av "Orienten" - Midtosten, Asia, "det eksotiske osten" - som var mer fantasi enn virkelighet.

"Den andre" er den som er fundamentalt annerledes fra "oss". Nar vi definerer "oss selv", gjor vi det ofte i kontrast til noen andre. "Vi" er siviliserte, "de" er primitive. "Vi" er rasjonelle, "de" er mystiske. "Vi" er moderne, "de" er tradisjonelle.

Dette er ikke bare akademisk teori. Du ser det overalt. Nar mediene skriver om "innvandrermiljoer" som om alle innvandrere var like. Nar reklame bruker "eksotiske" mennesker som kulisser for vestlige produkter. Nar filmer fremstiller andre kulturer som kulisser for hvite hovedpersoners eventyr.

Men her er noe viktig: A vaere "den andre" handler ikke om hvem du faktisk er. Det handler om hvordan du blir fremstilt av dem med makt til a definere. En same i norsk litteratur pa 1800-tallet ble ofte fremstilt som "den andre" - mystisk, primitiv, i pakt med naturen. Denne fremstillingen sa mer om dem som skrev enn om samene selv.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva menes med "den andre" i postkolonial teori?',
        options: [
          { id: 'a', text: 'Den andre hovedpersonen i en roman', isCorrect: false },
          { id: 'b', text: 'Fremstilling av folk som fundamentalt annerledes fra "oss"', isCorrect: true },
          { id: 'c', text: 'En karakter som kommer senere i handlingen', isCorrect: false },
          { id: 'd', text: 'En person som oversetter mellom kulturer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Den andre" (the Other) beskriver hvordan grupper fremstilles som fundamentalt annerledes fra "oss". Dette skaper et skille mellom "vi" (normale, siviliserte) og "de" (eksotiske, primitive). Begrepet kommer fra Edward Said.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg1-3-2-n-section2',
      type: 'text',
      content: `## Stereotypier og forenklinger

En stereotypi er et forenklet, ofte negativt bilde av en gruppe. Vi kjenner dem alle: den late soreuropeeren, den undertrykte muslimske kvinnen, den farlige innvandreren, den vise asiatiske mesteren. Stereotypier fungerer ved a ta noe som kanskje er sant for noen mennesker i noen situasjoner, og gjore det til en "sannhet" om alle i en gruppe.

I litteraturen finner vi stereotypier overalt, spesielt i eldre tekster. "Den edle ville" er en klassiker - forestillingen om at "primitive" folk lever enkle, uskyldige liv i harmoni med naturen. Det horess nesten positivt ut, men det er fortsatt en stereotypi som fratar mennesker kompleksitet og individualitet.

"Den eksotiske kvinnen" er en annen. I vestlig litteratur har kvinner fra andre kulturer ofte blitt fremstilt som mystiske, forforende, og tilgjengelige for vestlige menn. Tenk pa alle filmene der den hvite helten "redder" en kvinne fra hennes "undertrykkende" kultur.

"Den farlige fremmede" trenger neppe forklaring. Den finnes i alt fra eventyr til nyhetsmedier - den truende outsidedern som truer var trygge verden.

Men her er det viktige: A gjenkjenne stereotypier handler ikke om a bli fornarmet pa vegne av andre. Det handler om a lese smartere. Nar vi ser stereotypier, kan vi sporre: Hvorfor er denne karakteren fremstilt slik? Hva sier det om forfatteren og tiden teksten ble skrevet i? Og hvordan pavirker det var forstaelse?`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er en stereotypi i litteraer sammenheng?',
        options: [
          { id: 'a', text: 'En kompleks og nyansert karakterskildring', isCorrect: false },
          { id: 'b', text: 'Et forenklet, generalisert bilde av en gruppe', isCorrect: true },
          { id: 'c', text: 'En karakter som utvikler seg gjennom handlingen', isCorrect: false },
          { id: 'd', text: 'En historisk korrekt fremstilling', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Stereotypier er forenklede, ofte negative bilder av grupper. De tar noe som kanskje gjelder noen og gjor det til en "sannhet" om alle. Eksempler: "den edle ville", "den eksotiske kvinnen", "den farlige fremmede".',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg1-3-2-n-section3',
      type: 'text',
      content: `## Definisjonsmakt - hvem bestemmer hva som er normalt?

Definisjonsmakt er et nokkelbegrep. Hvem har makt til a bestemme hva som er "normalt"? Hvem far definere hvordan verden beskrives?

Gjennom historien har det i stor grad vaert vestlige, hvite, mannlige forfattere og forleggere som har hatt denne makten. De har bestemt hvilke historier som ble fortalt, hvordan andre kulturer ble beskrevet, og hva som ble regnet som "god litteratur".

Dette betyr ikke at alle disse forfatterne var onde eller bevisst rasistiske. Det betyr at de sa verden fra sitt perspektiv, og at dette perspektivet ble presentert som universelt og noytalt. Nar en europeisk forfatter pa 1800-tallet skrev om Afrika, presenterte han sine observasjoner som objektive sannheter. Men de var alltid preget av hans bakgrunn, hans fordommer, hans begrensede forstaelse.

I dag er definisjonsmakten mer spredt. Forfattere fra ulike bakgrunner far utgi boker, fortelle sine egne historier, definere seg selv. Men de gamle monstrenene henger igjen. Fortsatt er det slik at noen stemmer horess lettere enn andre. Fortsatt er det slik at noen perspektiver presenteres som "universelle" mens andre behandles som "nisje" eller "identitetspolitikk".

A lese postkolonialt er a vaere bevisst pa dette - a sportre hvem som forteller, og a huske at ethvert perspektiv er et perspektiv, ikke en noytral sannhet.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-3-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva menes med "definisjonsmakt"?',
        options: [
          { id: 'a', text: 'Makten til a skrive definisjoner i en ordbok', isCorrect: false },
          { id: 'b', text: 'Makten til a bestemme hva som er "normalt" og hvordan verden beskrives', isCorrect: true },
          { id: 'c', text: 'Makten til a velge hvilke boker som skal utgis', isCorrect: false },
          { id: 'd', text: 'Makten til a bestemme hvem som far skrive', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Definisjonsmakt handler om hvem som har makt til a definere virkeligheten - hva som er "normalt", hvordan grupper beskrives, hvilke perspektiver som regnes som "universelle". Historisk har vestlige perspektiver dominert.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg1-3-2-n-section4',
      type: 'text',
      content: `## Hvordan lese postkolonialt

Postkolonial lesning er ikke vanskelig. Det handler om a stille noen enkle sporsmål til teksten du leser:

**Om perspektiv:** Hvem forteller denne historien? Er det en insider (noen fra kulturen som beskrives) eller en outsider? Hvordan pavirker dette hva vi far vite og hvordan det presenteres?

**Om representasjon:** Hvordan fremstilles karakterer fra ulike kulturer? Er de komplekse individer eller stereotyper? Hvem er aktive subjekter som handler, og hvem er passive objekter som blir beskrevet?

**Om makt:** Hvilke maktforhold vises i teksten? Er noen fremstilt som overlegne eller underlegne? Hvem far snakke, og hvem er tause?

**Om sprak:** Hvordan omtales kulturer og grupper? Er spraket eksotifiserende ("den mystiske Orienten") eller generaliserende ("de innfodte")?

**Om kontekst:** Nar ble teksten skrevet? Hvilke holdninger var vanlige da? Hvordan kan vi lese teksten i dag?

Det viktigste er at postkolonial lesning ikke handler om a domme eller sensurere. Eldre tekster kan ha problematiske elementer og likevel ha litteraer verdi. Vi kan kritisere aspekter ved en tekst uten a forkaste hele teksten.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-3-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er formalet med postkolonial lesning?',
        options: [
          { id: 'a', text: 'A sensurere og fjerne problematiske tekster', isCorrect: false },
          { id: 'b', text: 'A bare lese tekster skrevet av minoriteter', isCorrect: false },
          { id: 'c', text: 'A lese med bevissthet om maktforhold, perspektiv og representasjon', isCorrect: true },
          { id: 'd', text: 'A finne feil i klassiske tekster', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Postkolonial lesning handler om a lese med kritisk bevissthet - a se hvordan maktforhold, perspektiv og representasjon former tekster. Det handler ikke om sensur, men om a forstå tekster dypere.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg1-3-2-n-section5',
      type: 'text',
      content: `## Motfortellinger - a fortelle tilbake

Postkolonial teori handler ikke bare om a kritisere gamle tekster. Den handler ogsa om a verdsette motfortellinger - tekster som forteller historien fra et annet perspektiv enn det dominerende.

Tenk tilbake pa reiseskildringen vi startet med, der europeeren beskrev afrikanerne som "primitive". En motfortelling kunne vaere en tekst fra samme tid, eller fra var tid, der afrikanerne selv forteller. Kanskje de ser pa europeeren som rar - en fremmed som kommer med underlige klaer, stiller ufine sporsmål, og tar ting uten a sportre.

Chimamanda Ngozi Adichies roman "Ting faller fra hverandre" (opprinnelig skrevet av Chinua Achebe) er en klassisk motfortelling. Den skildrer igbo-kulturen i Nigeria for koloniseringen - ikke som "primitiv" eller "eksotisk", men som et komplekst samfunn med egne verdier, konflikter og nyanser. Boka ble skrevet som et svar pa vestlige fremstillinger av Afrika.

I norsk sammenheng er flerkulturell litteratur ofte motfortellinger. Nar Maria Navarro Skaranger skriver om drabantbyen fra innsiden, gir hun en motfortelling til alle beskrivelsene av "gettoer" og "problemomrader" fra utsiden. Nar Zeshan Shakar lar Jamal og Mo fortelle selv, gir han en motfortelling til alle stereotypene om "innvandrerungdom".

Motfortellinger er viktige fordi de viser at det alltid finnes flere sider av en historie. De minner oss om at "den andre" ogsa har et perspektiv - og at det perspektivet kanskje er like gyldig som vart eget.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-3-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er en "motfortelling" i postkolonial sammenheng?',
        options: [
          { id: 'a', text: 'En tekst som motsier all tidligere litteratur', isCorrect: false },
          { id: 'b', text: 'En tekst som forteller historien fra et annet perspektiv enn det dominerende', isCorrect: true },
          { id: 'c', text: 'En tekst som er skrevet mot en bestemt forfatter', isCorrect: false },
          { id: 'd', text: 'En tekst som bare kritiserer uten a tilby alternativ', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Motfortellinger er tekster som forteller historien fra et annet perspektiv enn det dominerende. De gir stemme til de som tidligere har vaert objekter i andres fortellinger, og viser at det alltid finnes flere sider av en historie.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Postkolonial lesning

Du har na fatt verktoy for a lese tekster med et mer kritisk og kulturelt bevisst blikk. Her er de viktigste begrepene og innsiktene:

**"Den andre" (the Other):**
Begrepet beskriver hvordan grupper fremstilles som fundamentalt annerledes fra "oss". "Vi" definerer oss selv i kontrast til "dem", ofte med negative stereotyper.

**Stereotypier:**
Forenklede, generaliserte bilder av grupper. Eksempler: "den edle ville", "den eksotiske kvinnen", "den farlige fremmede". De fratar mennesker kompleksitet og individualitet.

**Definisjonsmakt:**
Hvem har makt til a definere hva som er "normalt"? Historisk har vestlige perspektiver dominert, og blitt presentert som noytrale og universelle.

**Postkolonial lesning:**
A stille kritiske sporsmål til tekster: Hvem forteller? Fra hvilket perspektiv? Hvordan fremstilles ulike grupper? Hvilke maktforhold avslores?

**Motfortellinger:**
Tekster som forteller historien fra et annet perspektiv enn det dominerende. De gir stemme til de som tidligere har vaert objekter i andres fortellinger.

**Viktig a huske:**
Postkolonial lesning handler ikke om sensur, men om bevissthet. Eldre tekster kan ha problematiske elementer og likevel ha litteraer verdi. Kritisk lesning gjor oss til bedre lesere.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3 NARRATIV: Samisk litteratur
// ============================================================================

export const CHAPTER_NORSK_VG1_3_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-3-3-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '3.3',
  title: 'Samisk litteratur',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag joikens magi og samiske forfatteres stemmer - litteratur fra Norges urfolk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese og tolke tekster fra samisk litteratur',
    'reflektere over joiken som litterer og kulturell uttrykksform',
    'forsta samisk litteratur i en historisk og samtidig kontekst',
  ],
  linkedChapterId: 'norsk-vg1-3-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-3-3-n-intro',
      type: 'text',
      content: `## Stemmer fra vidda

Lukk oynene og forestill deg at du star pa vidda en sommernatt. Midnattssolen henger lavt over horisonten. Rundt deg er det stille, bare vinden og noen rein i det fjerne. Sa begynner noen a joike. Det er ikke sang slik du kjenner det. Det er noe annet - en lyd som synes a komme fra selve landskapet, fra fjellet og elven og himmelen.

Dette er starten pa var reise inn i samisk litteratur. For a forstå denne litteraturen, ma vi forst forstå noe viktig: Samisk kultur har alltid vaert en muntlig kultur. I tusenvis av ar ble kunnskap, historier og identitet overlevert gjennom fortelling og joik, ikke gjennom skrift.

Joiken er ikke bare musikk. Den er en hel filosofi i lyd. Nar du joiker et menneske, synger du ikke om dem - du synger dem frem. Du fremkaller deres vesen gjennom lyd. Det er som om ordene og melodien skaper et naerver av den du joiker.

Sa kom fornorskingen. I over hundre ar forsokte norske myndigheter a utslette samisk kultur. Barn ble sendt pa internatskoler der de ble straffet for a snakke samisk. Joiken ble forbudt av kirken som "djevelens musikk". Spar ble forbudt, tradisjoner ble undertrykt.

Men kulturen overlevde. Og fra 1970-tallet begynte en renessanse. I dag har vi en blomstrende samisk litteratur som kombinerer tusenar med muntlig tradisjon med moderne uttrykksformer.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg1-3-3-n-section1',
      type: 'text',
      content: `## Joik - mer enn sang

For a forstå samisk litteratur, ma vi forst forstå joiken. Og for a forstå joiken, ma vi glemme det meste vi vet om vestlig musikk.

I vestlig musikk synger vi om ting. "Jeg elsker deg", synger vi, og beskriver en folelse. "Sommeren er vakker", synger vi, og beskriver en arstid. Men joiken fungerer annerledes. Nar du joiker et fjell, synger du ikke om fjellet. Du synger fjellet frem. Du fremkaller fjellets vesen gjennom lyd.

Tenk pa det slik: Hvis du skulle beskrive en person du er glad i, kunne du liste opp egenskaper. "Hun er snill, morsom, har brunt har." Men ville det fange henne? Joiken prover noe annet. Den prover a fange selve essensen av personen, ikke gjennom beskrivelse, men gjennom a skape et lydlig naervver.

Det finnes ulike typer joik. Personjoik tilhorer et bestemt menneske - hver person har tradisjonelt sin egen joik, en slags musikalsk signatur. Dyrejoik fanger dyrets karakter og bevegelser - reinjoik, ulvejoik, ornejoik. Landskapsjoik fremkaller steder - et bestemt fjell, en elv, et omrade som har betydning.

Joiken har fa eller ingen vanlige ord. Den bruker vokaler og stavelser - "vuoi-vuoi-nana-nana" - som ikke har direkte mening, men som skaper stemning og naervver. Det er poesi uten ord, eller kanskje poesi hinsides ord.

I dag kombinerer artister som Mari Boine, Sofia Jannok og Ella Marie Hætta Isaksen joik med moderne musikkformer. De viser at tradisjonen lever og utvikler seg.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom joik og vanlig vestlig sang?',
        options: [
          { id: 'a', text: 'Joik har alltid tekst pa samisk', isCorrect: false },
          { id: 'b', text: 'Joik synger noe frem i stedet for a synge om det', isCorrect: true },
          { id: 'c', text: 'Joik brukes bare ved religiose seremonier', isCorrect: false },
          { id: 'd', text: 'Joik har fast melodi og rytme', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Den grunnleggende forskjellen er at joik ikke synger om noe, men synger noe frem. Man fremkaller essensen av en person, et dyr eller et sted gjennom lyd, i stedet for a beskrive det med ord.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg1-3-3-n-section2',
      type: 'text',
      content: `## Nils-Aslak Valkeapaa - den moderne samiske litteraturens far

Hvis det er en person som definerer moderne samisk litteratur, er det Nils-Aslak Valkeapaa. Han er kjent under artistnavnet Aillohas, som betyr "lille orn" pa samisk.

Valkeapaa ble fodt i 1943 i en reindriftsfamilie i Finland. Han vokste opp med joik, med reinflokkens rytmer, med viddas landskap innskrevet i kroppen. Han ble laerer, men valgte kunsten. Han joiket, han skrev, han fotograferte, han malte. Han var det vi kaller en multimediekunstner for begrepet fantes.

Hans mesterverk er "Ruoktu vaimmus" (Hjertet mitt er herfra) fra 1985. Det er ikke en vanlig bok. Det er en kombinasjon av poesi og fotografier, der tekst og bilde ikke illustrerer hverandre, men sammen skaper en helhet. Boka vant Nordisk Rads litteraturpris i 1991 - forste gang en samisk tekst fikk denne aeren.

Les disse linjene: "Jeg bor i meg selv / i en lavvo av ord / alle ordene er mine". I disse fa ordene ligger mye av Valkeapaas prosjekt. Spraket er bosted. Ordene er arv fra forfedrene. Identitet og sprak er uatskillelige.

Valkeapaa viste at samisk kultur ikke var "primitiv" eller "utdoende", men levende, moderne og verdifull. Han nektet a la majoritetssamfunnet definere hva samisk kultur kunne vaere. I stedet skapte han kunst som talte til mennesker over hele verden, og som samtidig var dypt forankret i samisk tradisjon.

Da han dode i 2001, etterlot han seg et forfatterskap som har inspirert generasjoner av samiske kunstnere.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvorfor er Nils-Aslak Valkeapaa (Aillohas) viktig for samisk litteratur?',
        options: [
          { id: 'a', text: 'Han oversatte alle gamle samiske tekster til norsk', isCorrect: false },
          { id: 'b', text: 'Han regnes som den moderne samiske litteraturens far og vant Nordisk Rads litteraturpris', isCorrect: true },
          { id: 'c', text: 'Han grunnla det forste samiske forlaget', isCorrect: false },
          { id: 'd', text: 'Han var den forste samen som skrev pa norsk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Valkeapaa regnes som den moderne samiske litteraturens far. Han kombinerte joik, poesi og visuell kunst pa nyskapende mater, og viste at samisk kultur var levende og verdifull. "Ruoktu vaimmus" vant Nordisk Rads litteraturpris i 1991.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg1-3-3-n-section3',
      type: 'text',
      content: `## Fornorskingen og dens spar

For a forstå samisk litteratur i dag, ma vi forstå fornorskingen. Fra midten av 1800-tallet til langt ut pa 1900-tallet forte norske myndigheter en aktiv politikk for a assimilere samer. Malet var at samene skulle bli "norske" - glemme spraket sitt, kulturen sin, identiteten sin.

Barn ble sendt pa internatskoler der de ble straffet for a snakke samisk. En jente kunne fa kofta si - selve symbolet pa samisk identitet - fratatt seg forste skoledag. "Vi snakker norsk her", sa laereren. Og kofta ble liggende i et skap i femti ar, til skammen langsomt begynte a slippe taket.

Denne historien, fra Laila Stiens novelle "Skolebilde", viser fornorskingens menneskelige kostnad. Det handler ikke bare om tapte ord og glemte melodier. Det handler om skam, om a laere a skamme seg over sin egen familie, sitt eget sprak, sin egen identitet.

Sigbjorn Skaden skriver om dette i diktet "Morsmal": "Morsmalet mitt / ble tatt fra meg / for jeg ble fodt". Hans morsmal - samisk - ble tatt fra familien hans for han selv ble fodt. Han "graver det opp / ord for ord / som arkeolog i eget liv". Noen ord finner han hele, andre er knust, noen mangler helt.

Denne sorgen over tapt sprak, og kampen for a gjenvinne det, er et gjennomgangstema i samisk litteratur. Det handler ikke bare om fortiden. Det handler om a reparere skaden, om a gi fremtidige generasjoner det som nesten ble tatt fra dem.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-3-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva var fornorskingspolitikken?',
        options: [
          { id: 'a', text: 'En politikk for a fremme samisk sprak i skolen', isCorrect: false },
          { id: 'b', text: 'En politikk for a assimilere samer til norsk kultur og sprak', isCorrect: true },
          { id: 'c', text: 'En politikk for a gi samer selvstyre', isCorrect: false },
          { id: 'd', text: 'En politikk som bare gjaldt i Sverige', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Fornorskingspolitikken var en assimileringspolitikk der samiske (og kvenske) barn skulle laere norsk og "bli norske". Samisk sprak og kultur ble undertrykt i skole og samfunn over mange generasjoner.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg1-3-3-n-section4',
      type: 'text',
      content: `## Samtidsforfattere - nye stemmer

Etter Valkeapaa har en ny generasjon samiske forfattere vokst frem. De skriver om identitet, sprak og tilhorighet i en moderne virkelighet, ofte med ett ben i tradisjonen og ett i samtiden.

Sigbjorn Skaden (fodt 1976) skriver bade pa nordsamisk og norsk. Diktet hans "Morsmal" ble en klassiker fordi det satte ord pa erfaringen til sa mange - a vaere etterkommer av fornorskingen, a grave etter et sprak som nesten ble tatt. Men Skaden skriver ogsa om moderne samisk liv, om klimaendringer i nord, om a finne seg selv mellom kulturer.

Rawdna Carita Eira (fodt 1970) er lyriker, dramatiker og joiker fra Kautokeino. Hun eksperimenterer med grensene mellom joik, poesi og performance. Kunsten hennes spor: Hva kan samisk kunst vaere i dag? Hvordan kan tradisjon og modernitet motes?

Synnove Persen (fodt 1950) er lyriker og billedkunstner fra Tana. Hun var en av de forste kvinnelige samiske dikterne, og skriver pa nordsamisk om natur og menneske, kjenn og spiritualitet.

Felles for disse forfatterne er at de nekter forenklinger. De skriver som individer, ikke som representanter for "samisk kultur". De viser at samisk identitet er like mangfoldig og kompleks som enhver annen identitet. Og de fortsetter a utvide hva samisk litteratur kan vaere.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-3-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner de nye generasjonene av samiske forfattere?',
        options: [
          { id: 'a', text: 'De skriver bare om tradisjonelt reindriftsliv', isCorrect: false },
          { id: 'b', text: 'De skriver bare pa samisk', isCorrect: false },
          { id: 'c', text: 'De kombinerer tradisjon med samtid og nekter forenklinger av samisk identitet', isCorrect: true },
          { id: 'd', text: 'De har tatt avstand fra joiketradisjonen', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Samtidsforfatterne kombinerer tradisjon med moderne uttrykksformer. De skriver om spraktap og gjenerobring, om klimaendringer i nord, om identitet mellom kulturer - og de nekter a la samisk identitet reduseres til stereotyper.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg1-3-3-n-section5',
      type: 'text',
      content: `## Naturen - mer enn kulisse

I samisk litteratur er naturen ikke bakgrunn. Den er deltaker. Mennesket er del av et storre hele der dyr, landskap og naturkrefter har egenverdi og handlekraft.

Dette er fundamentalt annerledes fra mye vestlig litteratur, der naturen ofte er noe mennesket beseirer, utnytter eller beundrer pa avstand. I samisk tradisjon er du ikke herre over naturen - du er del av den. Reinen er ikke bare en ressurs, men en medskaping i et fellesliv. Fjellet er ikke bare geografi, men et vesen med egen historie.

Valkeapaa skriver: "Reinflokken min / - de lange vandringenes folk / tusen ar / tusen vintre / alltid framover mot horisonten". Reinen er ikke bare dyr her. De er "de lange vandringenes folk", med en tusenar med historie. Og dikteren tilhorer dem like mye som de tilhorer ham.

Denne naturforstaelsen har fatt ny aktualitet i klimakrisens tid. Nar arktiske omrader varmes opp raskere enn noe annet sted pa jorda, rammes samiske omrader forst. Nar vindkraftutbygging truer reinbeiteomrader, er det ikke bare okonomi som star pa spill - det er en hel matte a vaere i verden pa.

Samisk litteratur tilbyr derfor noe vi trenger: et alternativ til ideen om mennesket som naturens herre. Den minner oss om at vi er del av noe storre, og at det vi gjor mot naturen, gjor vi mot oss selv.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-3-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvordan fremstilles naturen i samisk litteratur?',
        options: [
          { id: 'a', text: 'Som noe mennesket skal beseire og kontrollere', isCorrect: false },
          { id: 'b', text: 'Som en vakker kulisse for menneskelig drama', isCorrect: false },
          { id: 'c', text: 'Som deltaker der mennesket er del av et storre hele', isCorrect: true },
          { id: 'd', text: 'Som farlig og truende', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'I samisk litteratur er naturen ikke bakgrunn, men deltaker. Mennesket er del av et storre hele der dyr, landskap og naturkrefter har egenverdi. Dette skiller seg fra mye vestlig litteratur der mennesket er naturens herre.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Samisk litteratur

Du har na fatt en innforing i samisk litteratur - fra joikens magi til samtidsforfatternes stemmer. Her er de viktigste innsiktene:

**Joiken:**
Joik er ikke vanlig sang. Man synger ikke om noe, men synger noe frem - fremkaller essensen av en person, et dyr eller et sted gjennom lyd. Det finnes personjoik, dyrejoik og landskapsjoik.

**Nils-Aslak Valkeapaa:**
Regnes som den moderne samiske litteraturens far. Hans mesterverk "Ruoktu vaimmus" vant Nordisk Rads litteraturpris i 1991. Han kombinerte joik, poesi og visuell kunst pa nyskapende mater.

**Fornorskingen:**
Fra midten av 1800-tallet til langt ut pa 1900-tallet forte norske myndigheter en politikk for a assimilere samer. Barn ble straffet for a snakke samisk. Dette traumet preger fortsatt samisk litteratur.

**Samtidsforfattere:**
Sigbjorn Skaden, Rawdna Carita Eira og andre kombinerer tradisjon med samtid. De skriver om spraktap og gjenerobring, om klimaendringer, om identitet mellom kulturer.

**Naturen:**
I samisk litteratur er naturen ikke kulisse, men deltaker. Mennesket er del av et storre hele. Denne naturforstaelsen tilbyr et alternativ til ideen om mennesket som naturens herre.

**Viktig a huske:**
Samisk litteratur er del av Norges kulturarv. A lese den gir oss alternative perspektiver pa natur, identitet og historie - og utvider var forstaelse av hva "norsk" litteratur kan vaere.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4 NARRATIV: Litteratur fra andre kulturer
// ============================================================================

export const CHAPTER_NORSK_VG1_3_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-3-4-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '3.4',
  title: 'Litteratur fra andre kulturer',
  subtitle: 'Narrativ versjon',
  description: 'Reis verden rundt gjennom boker - fra afrikanske fortellinger til latinamerikansk magi.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og tolke skjonnlitteraere tekster i oversettelse fra ulike kulturer',
    'reflektere over kulturelle likheter og forskjeller i litteratur',
    'forsta oversettelsens rolle i kulturformidling',
  ],
  linkedChapterId: 'norsk-vg1-3-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-3-4-n-intro',
      type: 'text',
      content: `## En verden av historier

Tenk deg at du sitter i en landsby i Nigeria pa 1800-tallet. En eldre mann forteller om Okonkwo, en stolt kriger som kjemper for a vaere alt hans svake far ikke var. I Japan pa ar 1000 skriver en kvinne ved keiserens hoff verdens forste roman - "Fortellingen om Genji". I Colombia lytterer et barn til bestemoren fortelle om en landsby der det regner i fire ar, elleve maneder og to dager.

Historier har alltid reist. Lenge for fly og internett spredde fortellinger seg langs handelsruter og pilegrimsveier. Tusen og en natt vandret fra Persia til Arabia til Europa. Indiske fabler ble greske, ble latinske, ble norske.

I dag har vi tilgang til mer verdenslitteratur enn noen gang. Du kan lese nigerianske romaner, japanske haiku, colombianske familiesagaer - alt oversatt til norsk. Men med denne tilgangen folger ogsa sporsmål: Hva gar tapt i oversettelse? Hvem bestemmer hva som blir oversatt? Og hvordan leser vi tekster fra kulturer vi ikke kjenner?

Verdenslitteratur er ikke bare "boker fra andre land". Det er et vindu inn i andres erfaringer, tenkemater og verdener. Det er ogsa et speil som viser oss noe om oss selv - for nar vi leser om det fremmede, ser vi ofte vart eget tydeligere.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg1-3-4-n-section1',
      type: 'text',
      content: `## Oversettelse - mer enn a bytte ord

Nar du leser Gabriel Garcia Marquez pa norsk, leser du egentlig to forfattere: Marquez og hans oversetter. Oversettelse er ikke bare a bytte ut spanske ord med norske. Det er a gjenskape en hel verden i et nytt sprak.

Tenk pa alle utfordringene. Ordspill som fungerer pa ett sprak, fungerer sjelden pa et annet. Rytme og klang endrer seg. Kulturelle referanser som er selvfolgeligheter for en colombianer, kan vaere uforstaeelige for en nordmann. Hva gjor du med et ord som ikke finnes pa norsk?

Oversetteren ma ta valg. Skal hun "hjemliggjore" teksten - gjore den mer norsk, lettere a forstå? Eller skal hun "fremmedgjore" - beholde det fremmede, minne leseren om at dette er en annen verden? Begge strategier har fordeler og ulemper.

Her er et eksempel: Japanske ord for familiemedlemmer er mer nyanserte enn norske. "Onee-san" betyr omtrent "storesoster", men brukes ogsa om eldre jenter man ikke er i slekt med. Hvordan oversetter du det? "Storesoster" mister nyanser. "Onee-san" i kursiv beholder originalen, men krever forklaring.

Det viktige a huske er at enhver oversettelse er en tolkning. Ulike oversettere gir ulike versjoner av samme verk. Det finnes ikke en "riktig" oversettelse - bare bedre og darligere forsok pa a fange noe som alltid delvis unnslipper.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-3-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er den storste utfordringen ved litteraer oversettelse?',
        options: [
          { id: 'a', text: 'A finne nok tid til a gjore jobben', isCorrect: false },
          { id: 'b', text: 'A gjenskape mening, stil, rytme og kulturelle nyanser i et nytt sprak', isCorrect: true },
          { id: 'c', text: 'A lese originalteksten', isCorrect: false },
          { id: 'd', text: 'A fa betalt nok for arbeidet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Oversettelse handler ikke bare om a bytte ord. Det handler om a gjenskape hele teksten - mening, stil, rytme, humor, kulturelle nyanser - i et nytt sprak. Mye gar alltid tapt, men mye kan ogsa vinnes.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg1-3-4-n-section2',
      type: 'text',
      content: `## Afrikansk litteratur - et kontinent av stemmer

Afrika er et kontinent med over 50 land, tusenvis av sprak og en litteraer tradisjon som strekker seg tilbake til tidenes morgen. A snakke om "afrikansk litteratur" som en ting er nesten meningsleost - det er som a snakke om "europeisk litteratur" som om Island og Italia hadde samme kultur.

Likevel finnes det noen fellestrekk. Muntlig tradisjon star sterkt. Griots i Vest-Afrika var historikere, fortellere og sangere som bar hele folks hukommelse i hodet. Fortellinger om Anansi edderkopkoppa vandret med slaveskipene til Karibia og lever videre i dag.

Moderne afrikansk litteratur oppsto i skyggen av kolonialismen. Mange av de storste forfatterne - Chinua Achebe, Ngugi wa Thiong'o, Wole Soyinka - skriver pa kolonisprakene, engelsk eller fransk. Dette er et paradoks og en nodvendighet: kolonisprakene nar et storre publikum, men de er ogsa undertrykkernes sprak.

Achebe skrev "Ting faller fra hverandre" i 1958 som et svar pa vestlige fremstillinger av Afrika. Han ville vise igbo-kulturen i Nigeria slik den var for europeerne kom - ikke som "primitiv", men som et komplekst samfunn med egne verdier, konflikter og nyanser.

Nyere forfattere som Chimamanda Ngozi Adichie fortsetter i denne tradisjonen. "Americanah" handler om en nigeriansk kvinne i USA og tar opp sporsmal om rase, identitet og tilhorighet med skarpt blikk og humor.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-3-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvorfor skrev Chinua Achebe "Ting faller fra hverandre"?',
        options: [
          { id: 'a', text: 'For a vise at afrikansk kultur var primitiv', isCorrect: false },
          { id: 'b', text: 'Som et svar pa vestlige fremstillinger - for a vise igbo-kulturen som et komplekst samfunn', isCorrect: true },
          { id: 'c', text: 'For a kritisere nigeriansk politikk', isCorrect: false },
          { id: 'd', text: 'For a laere barn om afrikansk historie', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Achebe skrev "Ting faller fra hverandre" som et svar pa vestlige fremstillinger av Afrika som "primitivt". Han ville vise igbo-kulturen som et komplekst samfunn med egne verdier, konflikter og nyanser.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg1-3-4-n-section3',
      type: 'text',
      content: `## Magisk realisme - nar det umulige blir hverdagslig

I en liten landsby i Colombia fortsetter en dod bestemor a dukke opp til middag hver sondag. Ingen kommenterer dette. Det er bare slik det er.

Dette er magisk realisme - en litteraer stil der det overnaturlige behandles som en naturlig del av virkeligheten. Det er ikke fantasy eller eventyr. Det er noe annet: en matte a se verden pa der grensen mellom det mulige og det umulige er flytende.

Gabriel Garcia Marquez fra Colombia er den mest berømte utøveren av denne stilen. Hans roman "Hundre ars ensomhet" folger syv generasjoner av familien Buendia i den oppdiktede landsbyen Macondo. Det regner i fire ar. Folk lever i over hundre ar. De dode gar blant de levende. Og alt dette presenteres med samme nodterne tone som hverdagslige hendelser.

Hvorfor fungerer dette? Kanskje fordi magisk realisme fanger noe sant om menneskelig erfaring. Sorgen over en dod kan foles som om de fortsatt er her. Tiden kan foles som om den gar annerledes i ulike perioder av livet. Det "magiske" i magisk realisme er ofte metaforisk sant selv nar det er bokstavelig umulig.

Stilen har spredt seg over hele verden. Isabel Allende fra Chile, Salman Rushdie fra India, Toni Morrison fra USA - alle har brukt elementer av magisk realisme. Det har blitt et universelt litteraert sprak for a uttrykke erfaringer som realismen ikke helt fanger.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-3-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner magisk realisme?',
        options: [
          { id: 'a', text: 'Det overnaturlige forklares alltid rasjonelt til slutt', isCorrect: false },
          { id: 'b', text: 'Overnaturlige elementer behandles som en naturlig del av virkeligheten', isCorrect: true },
          { id: 'c', text: 'Handlingen foregar alltid i en fantasy-verden', isCorrect: false },
          { id: 'd', text: 'Det handler alltid om magi og trolldom', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Magisk realisme kjennetegnes ved at det overnaturlige behandles som hverdagslig og akseptert. Det er ikke fantasy - det realistiske rammefortellingen opprettholdes, men det magiske glir naturlig inn.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg1-3-4-n-section4',
      type: 'text',
      content: `## Universelle temaer, kulturelle sarpreg

Nar du leser litteratur fra andre kulturer, vil du oppdage noe merkelig: Mye er gjenkjennelig. Kjarlighet, tap, vennskap, svik, kampen mellom generasjoner, soken etter mening - disse temaene gar igjen overalt. Et japansk dikt om hoststens forgjengelighet kan berore deg like dypt som et norsk.

Samtidig vil du ogsa oppdage forskjeller. Hvordan kjarlighet uttrykkes, varierer. Forholdet mellom individ og fellesskap vektlegges ulikt. Religiose forestillinger former moral og verdier. Historisk kontekst - kriger, kolonialisme, revolusjoner - preger litteraturen.

Ta forholdet til naturen som eksempel. I mye vestlig litteratur er naturen noe mennesket skal beseire eller utnytte. I japansk litteratur er det ofte annerledes - naturen er noe a vaere i harmoni med, noe a betrakte og verdsette. Et haiku av Basho - "En gammel dam / en frosk hopper uti / lyden av vann" - handler om et øyeblikks oppmerksomhet, en stillhet som brytes og fylles igjen.

A lese verdenslitteratur krever bade åpenhet og ydmykhet. Apenhet for det fremmede, vilje til a la seg overraske. Ydmykhet i motet med det du ikke forstar - for det er alltid noe som unnslipper, kulturelle lag du ikke ser.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-3-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er sant om universelle temaer i verdenslitteraturen?',
        options: [
          { id: 'a', text: 'Alle kulturer behandler temaene pa noyaktig samme matte', isCorrect: false },
          { id: 'b', text: 'Noen temaer gar igjen overalt, men behandles ulikt i ulike kulturer', isCorrect: true },
          { id: 'c', text: 'Det finnes ingen universelle temaer - alt er kulturelt betinget', isCorrect: false },
          { id: 'd', text: 'Universelle temaer finnes bare i vestlig litteratur', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kjarlighet, tap, soken etter mening - slike temaer finnes i all verdens litteratur. Men hvordan de behandles varierer: kulturelle verdier, religiose forestillinger og historisk kontekst preger fremstillingen.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg1-3-4-n-section5',
      type: 'text',
      content: `## A lese med respekt

A lese verdenslitteratur er ikke bare a "samle" eksotiske opplevelser. Det krever en bevisst holdning - en matte a lese pa som respekterer bade teksten og kulturen den kommer fra.

For det forste: Unnga eksotisering. Det er fristende a lese andre kulturer som "fargerike" og "pittoreske". Men dette reduserer komplekse samfunn til kulisser for var underholdning. Mennesker i Nigeria, Japan eller Colombia lever like komplekse liv som oss - de er ikke mer "eksotiske" for seg selv enn vi er for oss.

For det andre: Skaff kontekst. Les om forfatterens bakgrunn. Forstå historisk kontekst. Et forord eller etterord kan avsløre mye. Jo mer du vet, jo mer vil du se i teksten.

For det tredje: Tenk pa hvem som forteller. Er forfatteren fra kulturen som beskrives, eller er det en outsider? Dette pavirker perspektivet. En nigerianer som skriver om Nigeria, og en brite som skriver om Nigeria, gir ulike blikk.

For det fjerde: Vaer oppmerksom pa maktforhold. Hvem far bli oversatt og utgitt? Hvem definerer "verdenslitteratur"? Lenge var det vestlige forlag og kritikere som bestemte. Dette har endret seg, men strukturene henger igjen.

Til slutt: Nyt det. Verdenslitteratur er et eventyr. Den utvider horisonten din, utfordrer forestillingene dine, gir deg nye oyne a se med. Det er en gave - ta imot den med glede og respekt.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-3-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva bor du unnga nar du leser litteratur fra andre kulturer?',
        options: [
          { id: 'a', text: 'A sette deg inn i historisk kontekst', isCorrect: false },
          { id: 'b', text: 'A lese oversettelser', isCorrect: false },
          { id: 'c', text: 'A eksotisere - redusere komplekse kulturer til "fargerike" kulisser', isCorrect: true },
          { id: 'd', text: 'A sammenligne med norsk litteratur', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Eksotisering - a se andre kulturer som "pittoreske" eller "eksotiske" - reduserer komplekse samfunn til kulisser. Les med respekt: skaff kontekst, forstå perspektiver, og husk at mennesker overalt lever like komplekse liv.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-3-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Verdenslitteratur

Du har na fatt en innforing i litteratur fra andre kulturer. Her er de viktigste innsiktene:

**Oversettelse:**
Oversettelse er mer enn a bytte ord. Det handler om a gjenskape mening, stil og kulturelle nyanser i et nytt sprak. Enhver oversettelse er en tolkning, og mye gar bade tapt og vinnes i prosessen.

**Afrikansk litteratur:**
Afrika har en rik litteraer tradisjon fra muntlig fortelling til moderne romaner. Chinua Achebe og andre skrev for a vise afrikanske samfunn som komplekse, ikke "primitive".

**Magisk realisme:**
En stil der det overnaturlige behandles som hverdagslig. Gabriel Garcia Marquez er den mest kjente, men stilen har spredt seg globalt.

**Universelle temaer:**
Kjarlighet, tap, soken etter mening - slike temaer finnes overalt. Men hvordan de behandles varierer med kultur, religion og historie.

**A lese med respekt:**
Unnga eksotisering. Skaff kontekst. Tenk pa hvem som forteller. Vaer oppmerksom pa maktforhold. Nyt eventyret med glede og respekt.

**Viktige forfattere:**
Chinua Achebe (Nigeria), Chimamanda Ngozi Adichie (Nigeria), Gabriel Garcia Marquez (Colombia), Haruki Murakami (Japan), Arundhati Roy (India).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5 NARRATIV: Samtidslitteratur og aktuelle temaer
// ============================================================================

export const CHAPTER_NORSK_VG1_3_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-3-5-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '3.5',
  title: 'Samtidslitteratur og aktuelle temaer',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hvordan forfattere tar pulsen pa var tid - fra klimakrise til digital ensomhet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og tolke samtidige tekster som tar opp aktuelle samfunnstemaer',
    'reflektere over litteraturens rolle som samfunnskritikk og samtidskommentar',
    'forsta hvordan litteratur kan bidra til samtalen om var tids utfordringer',
  ],
  linkedChapterId: 'norsk-vg1-3-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-3-5-n-intro',
      type: 'text',
      content: `## Boker om var egen tid

Aret er 2098. Biene er borte. Du star i en fruktplantasje i Kina med en liten borste i handen. Blomst for blomst, time etter time, gjor du jobben biene pleide a gjore gratis. For at barna dine skal ha mat, ma du pollinere for hand.

Dette er ikke virkelighet - enna. Det er et utdrag fra Maja Lundes roman "Bienes historie" fra 2015. Boka ble en internasjonal bestselger, oversatt til over 30 sprak. Hvorfor? Fordi den tar en abstrakt, overveldende trussel - klimakrisen - og gjor den konkret, menneskelig, folbar.

Samtidslitteratur er litteratur om var egen tid. Den tar opp temaer vi lever midt oppi: klimakrisen, teknologiens innmarsj i alle livets omrader, migrasjon og globalisering, ulikhet og klasse, mental helse, identitet og tilhorighet.

Noen vil kanskje si at litteratur ikke kan "lose" slike problemer. Og det stemmer - en roman stopper ikke klimaendringene. Men litteratur kan noe annet. Den kan fa oss til a fole det vi ellers bare vet. Den kan gjore abstrakte statistikker om til mennesker vi bryr oss om. Den kan vise oss verden gjennom andres oyne. Og kanskje, bare kanskje, kan den endre hvordan vi tenker og handler.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg1-3-5-n-section1',
      type: 'text',
      content: `## Klimafiksjon - nar fremtiden blir nar

Klimafiksjon, eller "cli-fi" som det ofte kalles, er en relativt ny sjanger. Det er skjonnlitteratur som tar opp klimaendringer og miljokrise - enten som hovedtema eller viktig bakgrunn.

Maja Lundes "Bienes historie" er kanskje det mest kjente norske eksemplet. Boka forteller tre parallelle historier fra tre ulike tider: en biefarmer i England pa 1850-tallet, en biefarmer i USA i 2007, og en arbeider i Kina i 2098. De tre historiene bindes sammen av bier og pollinering - og av sporsmalet om hva som skjer nar dette livsviktige systemet kollapser.

Det geniale med klimafiksjon er at den gjor det abstrakte konkret. Vi vet alle at bier er viktige for okosystemet. Vi har lest artiklene. Men nar Lunde lar oss folge en mor i 2098 som pollinerer for hand for at sonne skal ha mat, foler vi det pa en helt annen mate.

Internasjonalt har forfattere som Richard Powers ("The Overstory"), Barbara Kingsolver ("Flight Behavior") og Kim Stanley Robinson ("The Ministry for the Future") skapt viktige klimaromaner. De bruker fiksjonens verktoy - karakterer vi bryr oss om, spenning, emosjonell investering - til a engasjere oss i var tids storste utfordring.

Men klimafiksjon kan ogsa kritiseres. Forenkler den komplekse problemer? Gir den falskt hap eller handlingslammende fortvilelse? Hvor gar grensen mellom kunst og propaganda? Dette er sporsmål uten enkle svar.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-3-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er styrken til klimafiksjon som sjanger?',
        options: [
          { id: 'a', text: 'Den gir presise vitenskapelige data om klimaendringer', isCorrect: false },
          { id: 'b', text: 'Den gjor abstrakte trusler konkrete og emosjonelt tilgjengelige', isCorrect: true },
          { id: 'c', text: 'Den unngår a ta stilling til kontroversielle sporsmal', isCorrect: false },
          { id: 'd', text: 'Den er alltid optimistisk om fremtiden', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Klimafiksjonens styrke er at den gjor abstrakte, statistiske trusler om til konkrete, menneskelige opplevelser. Vi foler det vi ellers bare vet, gjennom karakterer vi bryr oss om.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg1-3-5-n-section2',
      type: 'text',
      content: `## Teknologi og digital ensomhet

Klokka er 19:43. Du legger ut et bilde pa Instagram. Klokka 19:44 sjekker du om noen har likt det. Klokka 19:45 sjekker du igjen. Ingen likes enna. Kanskje filteret var feil. Kanskje vinkelen. Kanskje deg. Klokka 19:47 sletter du det. Klokka 19:48 angrer du.

Denne lille sekvensen - fem minutter av et liv - sier noe om var tid som hundre artikler om sosiale medier ikke klarer. Det er skjonnlitteraturens evne: a fange det levde livet i ord.

Agnes Ravatn skriver om digital avhengighet i "Operasjon sjolvdisiplin". Hun sjekket Facebook for hun stod opp, i lunsjpausen, pa do, for hun sovna. Det var aldri noe viktig der. Bare bilder av mat og meninger om ting hun ikke brydde seg om. Likevel sjekket hun. Igjen og igjen.

Teknologi er overalt i samtidslitteraturen. Dave Eggers' "The Circle" forestiller seg et teknologiselskap som vet alt om alle. Kazuo Ishiguros "Klara and the Sun" ser verden gjennom oynene til en kunstig intelligent robot. Sally Rooneys romaner er fulle av meldinger, e-poster, digital kommunikasjon som bade forbinder og skiller.

Litteraturen stiller sporsmål vi alle lever med: Hva gjor teknologien med relasjonene vare? Med selvbildet vart? Med evnen var til a vaere til stede? Svarene er ikke enkle. Men sporsmalene er viktige.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-3-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er et sentralt tema i litteratur om teknologi og digitalisering?',
        options: [
          { id: 'a', text: 'Teknologi er alltid positivt for menneskeheten', isCorrect: false },
          { id: 'b', text: 'Vi bor slutte a bruke alle digitale verktoy', isCorrect: false },
          { id: 'c', text: 'Sporsmål om hvordan teknologi pavirker relasjoner, identitet og varemater', isCorrect: true },
          { id: 'd', text: 'Bare eldre mennesker sliter med ny teknologi', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Samtidslitteratur om teknologi stiller kritiske sporsmål om hvordan digitalisering pavirker relasjonene vare, selvbildet, evnen til naervver - uten nodvendigvis a gi enkle svar.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg1-3-5-n-section3',
      type: 'text',
      content: `## Migrasjon og dorer til nye verdener

I Mohsin Hamids roman "Exit West" finnes det svarte dorer som forer til andre steder. Du gar inn i en dor i en krigsherjet by og kommer ut i London. Bare rykter, sier folk. Men noen har sett dem. Noen har gatt gjennom.

Dette er magisk realisme brukt pa migrasjon. Hamid velger a ikke skildre den farlige reisen over Middelhavet, smuglerne, overfylte bater. I stedet fokuserer han pa valget - valget om a forlate alt du kjenner og ga gjennom en dor til det ukjente.

Migrasjon er et av var tids store temaer, og litteraturen tar det opp fra ulike vinkler. Zeshan Shakar skriver om a vokse opp som etterkommer av innvandrere i Norge. Chimamanda Ngozi Adichie skriver om a vaere nigeriansk i USA. Abdulrazak Gurnah - nobelprisvinner i 2021 - skriver om flyktningers erfaringer og kolonialismens ettervirkninger.

Det litteraturen kan som statistikk ikke kan, er a gi ansikter til tallene. Nar vi leser om Saeed og Nadia i "Exit West", er de ikke "flyktninger" - de er to mennesker vi bryr oss om, med drommer og frykt og kjarlighet. Og plutselig er debatten om migrasjon ikke lenger abstrakt.

Dette er litteraturens politiske kraft: ikke a fortelle oss hva vi skal mene, men a utvide empatien var, a la oss se verden gjennom andres oyne.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-3-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvordan bruker Mohsin Hamid magisk realisme i "Exit West"?',
        options: [
          { id: 'a', text: 'Han lar dode karakterer komme tilbake til livet', isCorrect: false },
          { id: 'b', text: 'Han bruker magiske dorer for a fokusere pa valget om a forlate, ikke reisen', isCorrect: true },
          { id: 'c', text: 'Han lar karakterene fly', isCorrect: false },
          { id: 'd', text: 'Han skriver om trolldom og magi', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Hamid bruker magiske dorer som et litteraert grep for a omga den fysiske reisen og fokusere pa det emosjonelle: valget om a forlate alt du kjenner og ga inn i det ukjente.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg1-3-5-n-section4',
      type: 'text',
      content: `## Litteratur som samfunnskritikk

Litteratur har alltid vaert et sted for samfunnskritikk. Fra Ibsens "Et dukkehjem" til Knausgards "Min kamp" har norske forfattere brukt kunsten til a sette sokelys pa det samfunnet helst vil skjule.

I dag fortsetter denne tradisjonen. Zeshan Shakars "Tante Ulrikkes vei" er en roman om oppvekst pa Stovner, men den er ogsa en kritikk av klasseskiller og ulikhet i Norge. Vigdis Hjorths "Arv og miljo" handler om en familie, men den reiste ogsa en debatt om taushet og traumer.

Samfunnskritikk i litteratur kan ta mange former. Sosialrealisme viser samfunnsproblemer direkte. Satire latterliggjor makt og konvensjoner. Dystopi advarer gjennom skrekkscenarioer. Autofaksjon - som Knausgards verk - gjor det personlige politisk.

Men kan litteratur faktisk forandre noe? Kanskje ikke direkte. En roman stopper ikke ulikhet eller rasisme. Men litteratur kan endre hvordan vi ser ting. Den kan gi ord til erfaringer som var ordlose. Den kan skape empati der det var likegyldighet. Og endring begynner ofte med a se annerledes.

Jan Kjærstad, Hanne Orstavik, Nina Lykke - mange norske forfattere skriver kritisk om samtiden. De holder opp et speil og spor: Er dette virkelig slik vi vil ha det?`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-3-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva kan litteratur som samfunnskritikk gjore?',
        options: [
          { id: 'a', text: 'Direkte lose samfunnsproblemer', isCorrect: false },
          { id: 'b', text: 'Endre hvordan vi ser ting, skape empati, gi ord til erfaringer', isCorrect: true },
          { id: 'c', text: 'Erstatte politisk debatt', isCorrect: false },
          { id: 'd', text: 'Bare underholde uten a pavirke', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Litteratur forandrer sjelden verden direkte, men den kan endre perspektiver, skape empati, gi ord til taushetsbelagte erfaringer - og slik bidra til endring pa sikt.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg1-3-5-n-section5',
      type: 'text',
      content: `## A lese sin egen tid

A lese samtidslitteratur er annerledes enn a lese klassikere. Vi mangler historisk avstand. Vi vet ikke enna hvilke boker som vil overleve og hvilke som vil bli glemt. Vi star midt oppi det teksten handler om.

Dette har fordeler. Samtidslitteratur snakker direkte til var erfaring. Nar Agnes Ravatn skriver om digital avhengighet, kjenner vi oss igjen pa en matte vi ikke gjor i Hamsuns "Sult". Nar Maja Lunde skriver om bier, handler det om var fremtid, ikke fortiden.

Men det har ogsa utfordringer. Vi kan bli sa opptatt av det aktuelle at vi glemmer det tidlose. En bok kan vaere "aktuell" uten a vaere god. Og vi risikerer a bare lese det som bekrefter det vi allerede tror.

De beste samtidsromanene klarer begge deler. De er aktuelle - de tar pulsen pa var tid. Men de er ogsa tidlose - de handler om ting som alltid vil vaere relevante: kjarlighet, tap, tilhorighet, soken etter mening. Om hundre ar vil noen kanskje lese "Bienes historie" ikke for a laere om klimakrisen, men for a forstå hvordan det foltes a leve i var tid.

Til slutt: Litteratur lost ikke verdens problemer. Men den hjelper oss a leve med dem. Den gir rom for refleksjon i en verden som alltid haster videre. Den minner oss om at vi ikke er alene med sporsmalene vare. Og noen ganger er det nok.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-3-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-3-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner de beste samtidsromanene?',
        options: [
          { id: 'a', text: 'De handler bare om aktuelle hendelser', isCorrect: false },
          { id: 'b', text: 'De unngår a ta opp kontroversielle temaer', isCorrect: false },
          { id: 'c', text: 'De er bade aktuelle og tidlose - tar opp samtiden, men ogsa evige temaer', isCorrect: true },
          { id: 'd', text: 'De er alltid skrevet av unge forfattere', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'De beste samtidsromanene balanserer aktualitet med tidloshet. De tar pulsen pa var tid, men handler ogsa om evige temaer som kjarlighet, tap og soken etter mening.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-3-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Samtidslitteratur

Du har na fatt en innforing i samtidslitteratur og hvordan den tar opp var tids utfordringer. Her er de viktigste innsiktene:

**Klimafiksjon:**
Klimafiksjon (cli-fi) gjor abstrakte miljotrusler konkrete og folbare. Maja Lundes "Bienes historie" er et sentralt norsk eksempel. Sjangeren bruker fiksjonens verktoy til a engasjere oss i klimakrisen.

**Teknologi og digitalisering:**
Samtidslitteraturen utforsker hvordan teknologi pavirker relasjoner, identitet og varemater. Agnes Ravatns "Operasjon sjolvdisiplin" er et norsk eksempel pa denne tematikken.

**Migrasjon:**
Forfattere som Mohsin Hamid bruker litteraere grep for a gi ansikter til migrasjonsstatistikk. Litteraturen utvider empatien var ved a la oss se gjennom andres oyne.

**Samfunnskritikk:**
Litteratur kan ikke direkte lose problemer, men kan endre perspektiver, skape empati og gi ord til taushetsbelagte erfaringer. Zeshan Shakar, Vigdis Hjorth og andre norske forfattere fortsetter tradisjonen med kritisk samtidslitteratur.

**Aktualitet og tidloshet:**
De beste samtidsromanene er bade aktuelle og tidlose. De tar pulsen pa var tid, men handler ogsa om evige menneskelige temaer.

**Viktige forfattere:**
Maja Lunde, Agnes Ravatn, Zeshan Shakar, Vigdis Hjorth, Karl Ove Knausgard, Mohsin Hamid.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG1_NARRATIV_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_3_1_NARRATIV,
  CHAPTER_NORSK_VG1_3_2_NARRATIV,
  CHAPTER_NORSK_VG1_3_3_NARRATIV,
  CHAPTER_NORSK_VG1_3_4_NARRATIV,
  CHAPTER_NORSK_VG1_3_5_NARRATIV,
];
