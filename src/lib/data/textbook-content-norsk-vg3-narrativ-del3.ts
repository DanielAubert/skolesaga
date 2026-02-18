/**
 * Norsk VG3 - Narrative versjoner Del 3 (Kapittel 1.9-1.13)
 *
 * Engasjerende, fortellende versjoner av kapitlene om det moderne gjennombruddets
 * avslutning - naturalismen, nyromantikken og symbolismen.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.9 NARRATIV: Amalie Skram - Hellemyrsfolket
// ============================================================================

export const CHAPTER_NORSK_VG3_1_9_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-9-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.9',
  title: 'Amalie Skram - Hellemyrsfolket',
  subtitle: 'Narrativ versjon',
  description: 'Opplev Norges mest kompromisslose skildring av fattigdom og arv - en romansyklus som fulgte en slekt gjennom fire generasjoners fall.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-1-9',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-9-n-intro',
      type: 'text',
      content: `## En slekt som faller

Forestill deg en fattiggard et sted pa Vestlandet pa 1800-tallet. Regnet pisker mot de radne veggene. Inne sitter en mann og stirrer tomt foran seg. Han heter Sjur Gabriel. Han skulle onske han kunne slutte a drikke, men kroppen hans krever det. Han skulle onske han kunne gi barna et bedre liv, men fattigdommen holder ham fanget.

Pa den andre siden av rommet sitter kona Oline og forsaker a holde familien sammen. Hun vet at mannen hennes er svak. Hun vet at barna deres arver denne svakheten. Men hva kan hun gjore? Samfunnet gir henne ingen muligheter, ingen vei ut.

Dette er apningen pa "Hellemyrsfolket" - Amalie Skrams naturalistiske mesterverk. Over fire bind folger vi denne slekten gjennom fire generasjoner. Og for hver generasjon blir det verre. Arv og miljo knuser ethvert hap om et bedre liv.

Det er brutal lesning. Skram sparer oss ikke for noe. Hun viser oss sulten, skitten, alkoholismen, desperasjonen. Men nettopp derfor er det ogsa stor litteratur - fordi den tvinger oss til a se det vi helst vil lukke oynene for.`,
    },

    // ========== SEKSJON 1: Amalie Skram og naturalismen ==========
    {
      id: 'norsk-vg3-1-9-n-section1',
      type: 'text',
      content: `## Den kompromisslose forfatteren

Amalie Skram visste hva hun skrev om. Hun var selv fra Bergen og kjente til de sosiale forholdene pa Vestlandet. Og hun hadde sin egen historie med institusjonsmakt og undertrykkelse - hun ble selv innlagt pa sinnsykeasyl, en erfaring som senere inspirerte romanene "Professor Hieronimus" og "Pa St. Jorgen".

Skram var den fremste norske representanten for naturalismen, den litteraere retningen som tok realismen til sin ytterste konsekvens. Mens realistene ville skildre virkeligheten som den var, gikk naturalistene enda lenger. De ville vise hvordan mennesker er determinert - bestemt pa forhand - av arv og miljo.

Den franske forfatteren Emile Zola var naturalismens far. Hans store romansyklus "Les Rougon-Macquart" fulgte en familie gjennom flere generasjoner og viste hvordan alkoholisme, sinnssykdom og kriminalitet gikk i arv. Skram tok denne metoden og brukte den pa norske forhold.

Men Skram var ingen slaveisk etterligner. Hun tilforte naturalismen noe eget - et sarlig blikk for kvinnenes situasjon. I "Hellemyrsfolket" ser vi hvordan de fattige kvinnene sliter og kjemper, uten a fa anerkjennelse, uten mulighet til a forandre sin skjebne. Skrams sympati med disse kvinnene loser teksten fra den kalde objektiviteten naturalismen ofte preget av.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-9-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-9-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Skram og naturalismen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-9-n-quiz1-q0',
            task: 'Hva er hovedtanken i naturalismens syn pa mennesket?',
            options: [
              { id: 'a', text: 'Mennesket er fritt til a velge sin egen skjebne', isCorrect: false },
              { id: 'b', text: 'Mennesket er determinert av arv og miljo', isCorrect: true },
              { id: 'c', text: 'Mennesket styres av guddommelig forsyn', isCorrect: false },
              { id: 'd', text: 'Mennesket kan overvinne alle hindringer med viljestyrke', isCorrect: false },
            ],
            solution: 'Naturalismen hevdet at mennesket er determinert av sin biologiske arv og det sosiale miljoet.',
          },
          {
            id: 'norsk-vg3-1-9-n-quiz1-q1',
            task: 'Hva tilforte Skram naturalismen ut over Zolas program?',
            options: [
              { id: 'a', text: 'Hun la til overnaturlige elementer', isCorrect: false },
              { id: 'b', text: 'Et saerlig blikk for kvinnenes situasjon', isCorrect: true },
              { id: 'c', text: 'Vitenskapelige fotnoter', isCorrect: false },
              { id: 'd', text: 'Humoristiske innslag', isCorrect: false },
            ],
            solution: 'Skram tilforte naturalismen et saerlig blikk for kvinnenes situasjon. Hennes sympati med de fattige kvinnene loste teksten fra den kalde objektiviteten naturalismen ofte var preget av.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: De fire bindene ==========
    {
      id: 'norsk-vg3-1-9-n-section2',
      type: 'text',
      content: `## En nedadgaende kurve

"Hellemyrsfolket" bestar av fire romaner utgitt mellom 1887 og 1898. Sammen danner de en uavbrutt nedadgaende kurve - en skildring av hvordan en slekt gradvis gar til grunne.

I det forste bindet, "Sjur Gabriel", moter vi stamfaren pa fattiggarden. Han er svak og drikfeldig, men ikke ond. Han vil jo gjerne vaere en god far og ektemann. Men kroppen svikter ham, viljen svikter ham, samfunnet gir ham ingen sjanser. Kona Oline holder familien sammen med de midlene hun har, men det er aldri nok.

"To Venner" folger neste generasjon - sonnene Sivert og Anders. Anders dor, og med ham forsvinner noe av hapet. Sivert forsaker a arbeide seg opp, a komme seg vekk fra fattigdommen. Men arven henger ved ham som en skygge.

I "S.G. Myre" har Sivert blitt handelsmann. Han har til og med skiftet navn - fra Hellemyrsfolk til det finere "Myre". Han prover a skjule bakgrunnen sin, a bli respektabel. Men det fungerer ikke. Fortiden innhenter ham. De arvelige svakhetene bryter gjennom den polerte overflaten.

Det siste bindet, "Afkom", folger Siverts sonn Severin. Her er vi ved bunnen. Severin representerer den endelige degenerasjonen - han havner i kriminalitet og galskap. Det naturalistiske eksperimentet er fullfort: Arven har seiret, miljoet har seiret, individet har tapt.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-9-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-9-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa de fire bindene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-9-n-quiz2-q0',
            task: 'Hvor mange bind omfatter romansyklusen "Hellemyrsfolket"?',
            options: [
              { id: 'a', text: 'To bind', isCorrect: false },
              { id: 'b', text: 'Tre bind', isCorrect: false },
              { id: 'c', text: 'Fire bind', isCorrect: true },
              { id: 'd', text: 'Seks bind', isCorrect: false },
            ],
            solution: '"Hellemyrsfolket" bestar av fire bind: "Sjur Gabriel", "To Venner", "S.G. Myre" og "Afkom".',
          },
          {
            id: 'norsk-vg3-1-9-n-quiz2-q1',
            task: 'Hva prover Sivert a gjore i "S.G. Myre"?',
            options: [
              { id: 'a', text: 'Han reiser til Amerika', isCorrect: false },
              { id: 'b', text: 'Han skifter navn og prover a skjule sin bakgrunn', isCorrect: true },
              { id: 'c', text: 'Han blir prest', isCorrect: false },
              { id: 'd', text: 'Han tar opp kampen mot fattigdommen politisk', isCorrect: false },
            ],
            solution: 'I "S.G. Myre" har Sivert blitt handelsmann og skiftet navn fra Hellemyrsfolk til "Myre" for a skjule bakgrunnen. Men fortiden innhenter ham - de arvelige svakhetene bryter gjennom.',
          },
          {
            id: 'norsk-vg3-1-9-n-quiz2-q2',
            task: 'Hvordan beskrives den nedadgaende kurven gjennom generasjonene?',
            options: [
              { id: 'a', text: 'Hver generasjon far det litt bedre', isCorrect: false },
              { id: 'b', text: 'Forholdene er stabile gjennom alle generasjoner', isCorrect: false },
              { id: 'c', text: 'For hver generasjon forsterkes forfallet - fra svakhet til kriminalitet og galskap', isCorrect: true },
              { id: 'd', text: 'Den siste generasjonen bryter endelig fri', isCorrect: false },
            ],
            solution: 'Degenerasjonen folger et monster der det blir verre for hver generasjon. Sjur Gabriel er svak men godhjertet, Sivert prover men mislykkes, og Severin havner i kriminalitet og galskap.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Det naturalistiske programmet ==========
    {
      id: 'norsk-vg3-1-9-n-section3',
      type: 'text',
      content: `## Forfatterens laboratorium

Zola kalte sin metode for "det naturlige eksperimentet". Forfatteren skulle vaere som en vitenskapsmann som plasserer mennesker i bestemte forhold og observerer hva som skjer. Ingen moral, ingen dom - bare kald, objektiv observasjon.

Skram folger dette programmet konsekvent i "Hellemyrsfolket". Hun viser oss hvordan Sjur Gabriels svakheter gar i arv til sonnene. Alkoholismen, den svake viljen, det "darlige blodet" - alt dette forfrer slekten. Det hjelper ikke hvor hardt de prover a kjempe imot.

Miljoet forsterker arven. Fattigdommen pa Hellemyrsfolk tillater ingen utvikling, ingen flukt. Barna vokser opp i sult og skitt, uten utdanning, uten muligheter. Selv nar Sivert lykkes i a komme seg opp som handelsmann, henger miljoet ved ham. Han kan skifte navn, men han kan ikke skifte identitet.

Degenerasjonen - forfallet over generasjonene - folger et monster. For hver generasjon blir det verre, ikke bedre. Forsakene pa a bryte ut feiler. Sivert prover a skjule sin bakgrunn, men fortiden innhenter ham. Severin, i siste generasjon, har ikke engang krefter til a forspke. Han faller rett ned i avgrunnen.

Det er et mprkt verdensbilde. Mennesket fremstar som et hjelpeløst offer for biologiske og sosiale krefter det ikke kan kontrollere. Men nettopp denne kompromissløsheten gir verket sin kraft.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-9-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-9-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa det naturalistiske programmet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-9-n-quiz3-q0',
            task: 'Hva kalte Emile Zola sin naturalistiske metode?',
            options: [
              { id: 'a', text: 'Det sosiale eksperimentet', isCorrect: false },
              { id: 'b', text: 'Det naturlige eksperimentet', isCorrect: true },
              { id: 'c', text: 'Den vitenskapelige metoden', isCorrect: false },
              { id: 'd', text: 'Den objektive observasjonen', isCorrect: false },
            ],
            solution: 'Zola kalte sin metode for "det naturlige eksperimentet" - forfatteren observerer mennesker i bestemte forhold og registrerer resultatene objektivt.',
          },
          {
            id: 'norsk-vg3-1-9-n-quiz3-q1',
            task: 'Hvordan forsterker miljoet arven i "Hellemyrsfolket"?',
            options: [
              { id: 'a', text: 'Miljoet gir barna muligheter til utdanning', isCorrect: false },
              { id: 'b', text: 'Fattigdommen tillater ingen utvikling eller flukt', isCorrect: true },
              { id: 'c', text: 'Miljoet har ingen effekt pa karakterene', isCorrect: false },
              { id: 'd', text: 'Det gode miljoet kompenserer for darlig arv', isCorrect: false },
            ],
            solution: 'Fattigdommen pa Hellemyrsfolk tillater ingen utvikling eller flukt. Barna vokser opp i sult og skitt uten utdanning eller muligheter. Selv nar Sivert skifter navn, henger miljoet ved ham.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Kvinneperspektivet ==========
    {
      id: 'norsk-vg3-1-9-n-section4',
      type: 'text',
      content: `## Stemmer fra skyggene

Selv om "Hellemyrsfolket" handler om en mannslinje - fra Sjur Gabriel til Sivert til Severin - er det kvinnene som gir verket mye av sin emosjonelle dybde. Skram hadde et sarlig blikk for de undertrykte kvinnenes situasjon.

Oline, Sjur Gabriels kone, er en av romanens sterkeste skikkelser. Hun kjemper dag etter dag for a holde familien sammen. Hun arbeider, hun sparer, hun forsaker a beskytte barna. Alt dette uten noen anerkjennelse, uten hap om belonning. Skram viser oss hennes styrke - men ogsa hennes hjelpeloshet. For hva kan en fattig kvinne pa 1800-tallet gjore? Samfunnet gir henne ingen muligheter, ingen rettigheter.

Dette var Skrams eget tema, som hun utforsket i hele sitt forfatterskap. Kvinnene i hennes boker er fanget - av ekteskap, av konvensjoner, av okonomi. De har ofte mer styrke og innsikt enn mennene rundt dem, men ingen mulighet til a bruke disse egenskapene.

I "Hellemyrsfolket" er kvinnene de som holder ut lengst. De ser klarere, de arbeider hardere, de gir mindre opp. Men det hjelper ikke. De er like fanget som mennene - kanskje mer. For de har ikke engang illusjonen om frihet.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-9-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-9-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa kvinneperspektivet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-9-n-quiz4-q0',
            task: 'Hva kjennetegner Skrams kvinneskikkelser i "Hellemyrsfolket"?',
            options: [
              { id: 'a', text: 'De er passive ofre uten egen vilje', isCorrect: false },
              { id: 'b', text: 'De har styrke og innsikt, men ingen muligheter', isCorrect: true },
              { id: 'c', text: 'De klarer alltid a bryte ut av undertrykkelsen', isCorrect: false },
              { id: 'd', text: 'De er mindre viktige enn de mannlige karakterene', isCorrect: false },
            ],
            solution: 'Skrams kvinner har styrke og innsikt, men samfunnet gir dem ingen muligheter. De holder ut lenger enn mennene, men er like fanget.',
          },
          {
            id: 'norsk-vg3-1-9-n-quiz4-q1',
            task: 'Hvilken rolle spiller Oline i "Sjur Gabriel"?',
            options: [
              { id: 'a', text: 'Hun forlater familien', isCorrect: false },
              { id: 'b', text: 'Hun kjemper for a holde familien sammen uten anerkjennelse', isCorrect: true },
              { id: 'c', text: 'Hun er den som drikker mest', isCorrect: false },
              { id: 'd', text: 'Hun finner en vei ut av fattigdommen', isCorrect: false },
            ],
            solution: 'Oline kjemper dag etter dag for a holde familien sammen - arbeider, sparer, beskytter barna. Alt dette uten anerkjennelse, uten hap om belonning. Hun er en av romanens sterkeste skikkelser.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Verkets betydning ==========
    {
      id: 'norsk-vg3-1-9-n-section5',
      type: 'text',
      content: `## En ubehagelig sannhet

"Hellemyrsfolket" ble anerkjent av kritikerne i samtiden, men nadde aldri et stort publikum. Det var for morkt, for ubehagelig, for kompromissløst. Folk ville ikke se fattigdommen og elendigheten skildret sa nart og sa hardt.

Men i ettertid har verket fatt sin rettmessige plass som et hovedverk i norsk litteratur. Det representerer det ypperste av norsk naturalisme - en skildring som tar Zolas program alvorlig og gjennomforer det med kunstnerisk presisjon.

Skrams sprak fanger miljoet med stor noyaktighet. Hun bruker dialekt og muntlig sprak for a skape autentisitet. Scenene er korte og intense, uten sentimentalitet. Hun moraliserer ikke - hun viser bare, og lar leseren trekke sine egne slutninger.

Er verket fortsatt aktuelt? Spørsmalet om sosial arv - om fattigdom og problemer gar i arv fra generasjon til generasjon - er fortsatt brennbart. Vi forstar arv og miljo annerledes i dag, men grunnproblemet er det samme: Hvordan kan samfunnet bryte onde sirkler? Hvordan kan vi gi alle mennesker like muligheter?

Skram hadde ingen losninger a tilby. Men hun viste oss problemet med en klarhet som fortsatt utfordrer oss.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-9-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-9-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa verkets betydning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-9-n-quiz5-q0',
            task: 'Hvorfor nadde "Hellemyrsfolket" ikke et stort publikum i samtiden?',
            options: [
              { id: 'a', text: 'Fordi spraker var for vanskelig a forsta', isCorrect: false },
              { id: 'b', text: 'Fordi det var for morkt og ubehagelig', isCorrect: true },
              { id: 'c', text: 'Fordi Skram var ukjent som forfatter', isCorrect: false },
              { id: 'd', text: 'Fordi naturalismen var umoderne', isCorrect: false },
            ],
            solution: '"Hellemyrsfolket" var for morkt og kompromissløst for det brede publikum. Men denne kompromissløsheten har gitt verket varig verdi.',
          },
          {
            id: 'norsk-vg3-1-9-n-quiz5-q1',
            task: 'Hvorfor er sporsmaalet om sosial arv fortsatt aktuelt?',
            options: [
              { id: 'a', text: 'Fordi alle familier opplever det samme', isCorrect: false },
              { id: 'b', text: 'Fordi sporsmaalet om hvordan samfunnet kan bryte onde sirkler fortsatt er brennbart', isCorrect: true },
              { id: 'c', text: 'Fordi naturalismen er den mest populaere litteraere retningen i dag', isCorrect: false },
              { id: 'd', text: 'Fordi vi fortsatt ikke har noen vitenskap om arv og miljo', isCorrect: false },
            ],
            solution: 'Sporsmaalet om sosial arv er fortsatt brennbart. Vi forstar arv og miljo annerledes i dag, men grunnproblemet er det samme: Hvordan kan samfunnet bryte onde sirkler og gi alle like muligheter?',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-9-n-summary',
      type: 'text',
      content: `## Oppsummering

**"Hellemyrsfolket"** (1887-1898) er Amalie Skrams naturalistiske hovedverk og regnes som den fremste romansyklusen i norsk naturalisme.

**De fire bindene:**
- "Sjur Gabriel" (1887): Stamfaren pa fattiggarden
- "To Venner" (1887): Neste generasjon, sonnene Sivert og Anders
- "S.G. Myre" (1890): Sivert som handelsmann, forsoker a skjule bakgrunnen
- "Afkom" (1898): Severin, den endelige degenerasjonen

**Det naturalistiske programmet:**
- Arv: Svakheter gar i arv fra generasjon til generasjon
- Miljo: Fattigdommen tillater ingen utvikling eller flukt
- Degenerasjon: For hver generasjon blir det verre
- Objektivitet: Skram moraliserer ikke, bare viser

**Sarpreg:**
- Sterkt kvinneperspektiv
- Presist, autentisk sprak
- Kompromissløs skildring av fattigdom

**Betydning:**
Verket representerer det ypperste av norsk naturalisme og har i ettertid fatt status som et hovedverk i norsk litteraturhistorie.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.10 NARRATIV: Reaksjon mot realismen
// ============================================================================

export const CHAPTER_NORSK_VG3_1_10_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-10-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.10',
  title: 'Reaksjon mot realismen',
  subtitle: 'Narrativ versjon',
  description: 'Opplev hvordan en ny generasjon forfattere pa 1890-tallet gjorde oppror mot realismens begrensninger og sokte mystikk, stemning og det indre liv.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-1-10',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-10-n-intro',
      type: 'text',
      content: `## Nar sjelen krever mer

Vi er pa 1890-tallet. Det moderne gjennombruddets program har dominert skandinavisk litteratur i to tiar. Forfattere har skrevet om samfunnsproblemer, om kvinners rettigheter, om klasseskiller og dobbeltmoral. Problemdiktningen har forandret litteraturen - og samfunnet.

Men noe begynner a ulme. En ny generasjon forfattere finner det hele litt... trangt. De er lei av a lese om sosiale forhold og ytre konflikter. De savner noe annet - noe dypere, noe mer mystisk. Hva med sjelen? Hva med de merkelige stemningene som ikke lar seg fange i realistisk prosa? Hva med drommene, lengslene, det uforklarlige?

I Frankrike har symbolistene allerede begynt a utforske dette territoriet. Diktere som Mallarme og Verlaine skriver om det usigelige, det som ligger bak ordene. I England dyrker Oscar Wilde skjonnheten for skjonnhetens egen skyld. I Tyskland og Osterrike vokser interessen for psykologi og det ubevisste.

Snart skal denne bolgen na Skandinavia. Og den unge mannen som skal formulere oppgjøret tydeligst, heter Knut Hamsun.`,
    },

    // ========== SEKSJON 1: Trøtthet med realismen ==========
    {
      id: 'norsk-vg3-1-10-n-section1',
      type: 'text',
      content: `## Nar formelen blir tom

Det moderne gjennombruddet hadde vaert en revolusjon. Men revolusjoner har en tendens til a stivne. Det som en gang var radikalt, blir etter hvert en ny ortodoksi. Og pa 1890-tallet begynte mange a fole at problemdiktningen hadde blitt nettopp det - en formel, et monster som forfattere fylte ut naermest mekanisk.

Tenk pa det: Enda et drama om en kvinne fanget i et ulykkelig ekteskap. Enda en roman som avslører borgerskapets hykleri. Enda en novelle om klasseskiller. Viktige temaer, javel - men etter et par tiar begynner det a kjennes utslitt.

Og det var mer enn det. Realismen fokuserte pa det ytre - pa samfunnsstrukturer, pa sosiale roller, pa det som kunne observeres og males. Men hva med det indre livet? Hva med de merkelige tankene som farer gjennom hodet midt pa natten? Hva med lengslene vi ikke kan forklare? Hva med den irrasjonelle delen av mennesket?

De nye filosofene stilte spørsmalet annerledes. Friedrich Nietzsche kritiserte det borgerlige samfunnets verdier og hyllet det sterke, skapende individet. Henri Bergson utforsket tidens og bevissthetens mysterier. Plotselig virket positivismens tro pa malbar virkelighet naiv og begrenset.

En ny generasjon var klar for noe annet.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-10-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-10-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa reaksjonen mot realismen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-10-n-quiz1-q0',
            task: 'Hva kritiserte de nye 1890-tallsforfatterne ved realismen?',
            options: [
              { id: 'a', text: 'At den var for opptatt av det indre livet', isCorrect: false },
              { id: 'b', text: 'At den var for opptatt av ytre samfunnsforhold', isCorrect: true },
              { id: 'c', text: 'At den var for poetisk og stemningsfull', isCorrect: false },
              { id: 'd', text: 'At den var for individualistisk', isCorrect: false },
            ],
            solution: 'Nyromantikerne mente realismen var for opptatt av det ytre. De savnet utforsking av det indre livet, stemningene og det mystiske.',
          },
          {
            id: 'norsk-vg3-1-10-n-quiz1-q1',
            task: 'Hvilke nye filosofer utfordret positivismens verdensbilde?',
            options: [
              { id: 'a', text: 'Darwin og Taine', isCorrect: false },
              { id: 'b', text: 'Nietzsche og Bergson', isCorrect: true },
              { id: 'c', text: 'Marx og Engels', isCorrect: false },
              { id: 'd', text: 'Platon og Aristoteles', isCorrect: false },
            ],
            solution: 'Friedrich Nietzsche kritiserte borgerlige verdier og hyllet det skapende individet, mens Henri Bergson utforsket tidens og bevissthetens mysterier. Begge utfordret positivismens tro pa malbar virkelighet.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Nyromantikkens kjennetegn ==========
    {
      id: 'norsk-vg3-1-10-n-section2',
      type: 'text',
      content: `## En ny sensibilitet

Den nye retningen fikk mange navn: nyromantikk, fin de siecle, dekadens, symbolisme. Navnene peker pa ulike aspekter, men fellesnevneren er tydelig - en bevegelse bort fra realismens ytre fokus mot noe mer subjektivt, mer mystisk, mer stemningsfullt.

Subjektiviteten var nøkkelen. Hvor realismen hadde forsokt a skildre verden objektivt, ville de nye forfatterne utforske hvordan verden oppleves innenfra. Ikke virkeligheten "som den er", men virkeligheten slik den farges av sanser, stemninger og folelser. Hvert menneskes opplevelse er unik - og litteraturen skulle fange denne unike opplevelsen.

Mystikken lokket. Det irrasjonelle, det ubevisste, drommene - alt det realismen hadde ignorert eller bortforklart. Symbolistene trodde det fantes en dypere virkelighet bak det synlige, og at kunsten kunne ane denne virkeligheten gjennom symboler og antydninger.

Naturen fikk ny betydning. Ikke som realistisk kulisse, men som sjelslandskap - et speil for indre tilstander. Nar Hamsun skildrer nordnorsk natur, er det like mye en skildring av sinnstilstander som av fysisk landskap.

Og stilen forandret seg. Den nøkterne, observerende realismens sprak ble erstattet av noe mer poetisk, mer musikalsk, mer suggestivt. Ordene skulle ikke bare beskrive - de skulle fremkalle stemninger.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-10-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-10-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa nyromantikkens kjennetegn:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-10-n-quiz2-q0',
            task: 'Hva menes med at naturen ble et «sjelslandskap» i nyromantikken?',
            options: [
              { id: 'a', text: 'At forfatterne kun skrev om natur, ikke mennesker', isCorrect: false },
              { id: 'b', text: 'At naturen ble brukt som speil for indre tilstander', isCorrect: true },
              { id: 'c', text: 'At naturen ble beskrevet vitenskapelig noyaktig', isCorrect: false },
              { id: 'd', text: 'At forfatterne flyttet ut pa landet', isCorrect: false },
            ],
            solution: 'I nyromantikken ble naturskildringene uttrykk for karakterenes indre tilstander. Naturen var ikke bare kulisse, men sjelslandskap.',
          },
          {
            id: 'norsk-vg3-1-10-n-quiz2-q1',
            task: 'Hva var nyromantikkens syn pa subjektivitet?',
            options: [
              { id: 'a', text: 'De ville skildre verden objektivt som realistene', isCorrect: false },
              { id: 'b', text: 'De ville utforske hvordan verden oppleves innenfra, farget av sanser og folelser', isCorrect: true },
              { id: 'c', text: 'De mente at subjektivitet var uvitenskapelig og uinteressant', isCorrect: false },
              { id: 'd', text: 'De mente alle opplevde verden likt', isCorrect: false },
            ],
            solution: 'Subjektiviteten var nokkelen i nyromantikken. I stedet for a skildre verden objektivt, ville de utforske hvordan virkeligheten farges av sanser, stemninger og folelser. Hvert menneskes opplevelse er unik.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Hamsuns angrep ==========
    {
      id: 'norsk-vg3-1-10-n-section3',
      type: 'text',
      content: `## Skandale i Studentersamfundet

I oktober 1890 holdt en ung, naesten ukjent forfatter tre forelesninger i Kristiania. Han het Knut Hamsun, og han var kommet for a skape oppstyr. Det lyktes han med til fulle.

Hamsun angrep hele det litteraere etablissementet - inkludert de fire store: Ibsen, Bjornson, Kielland og Lie. Han beskyldte dem for a skrive litteratur som var overfladisk, for opptatt av ytre samfunnsforhold, for opptatt av "typer" i stedet for virkelige mennesker.

Den realistiske litteraturen, hevdet Hamsun, oversa det viktigste: det indre livet. Menneskesinnet er komplekst, motsetningsfylt, uforutsigbart. Vi tenker merkelige tanker, vi har impulser vi ikke forstar, vi skifter stemning uten grunn. Realismen med sine "typer" og "problemer" fanget ikke noe av dette.

I stedet krevde Hamsun en litteratur som skildret "det ubevisste sjeleliv", de "hemmelighetsfulde nervevirksomheter". Forfatteren skulle ga inn i bevissthetens irrganger og skildre det som foregikk der - ikke for a lose sosiale problemer, men for a utforske menneskesjelen.

Forelesningene skapte skandale. De etablerte forfatterne ble fornaermet. Men Hamsun hadde formulert noe som la i tiden - en tretthet med det gamle, en lengsel etter noe nytt. Han talte for en ny generasjon.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-10-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-10-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa Hamsuns angrep:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-10-n-quiz3-q0',
            task: 'Hva krevde Hamsun at litteraturen skulle skildre?',
            options: [
              { id: 'a', text: 'Sosiale problemer og klassekamp', isCorrect: false },
              { id: 'b', text: 'Historiske hendelser og nasjonale myter', isCorrect: false },
              { id: 'c', text: 'Det ubevisste sjeleliv og irrasjonelle impulser', isCorrect: true },
              { id: 'd', text: 'Naturvitenskap og darwinisme', isCorrect: false },
            ],
            solution: 'Hamsun krevde litteratur som utforsket «det ubevisste sjeleliv» - de irrasjonelle impulsene og merkelige tankene under bevissthetens overflate.',
          },
          {
            id: 'norsk-vg3-1-10-n-quiz3-q1',
            task: 'Hvem angrep Hamsun i sine forelesninger i 1890?',
            options: [
              { id: 'a', text: 'Bare utenlandske forfattere', isCorrect: false },
              { id: 'b', text: 'De fire store: Ibsen, Bjornson, Kielland og Lie', isCorrect: true },
              { id: 'c', text: 'Bare Georg Brandes', isCorrect: false },
              { id: 'd', text: 'Bare naturalistene', isCorrect: false },
            ],
            solution: 'Hamsun angrep hele det litteraere etablissementet, inkludert de fire store. Han beskyldte dem for overfladiskhet og for a vaere for opptatt av ytre samfunnsforhold i stedet for det indre livet.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Europeisk kontekst ==========
    {
      id: 'norsk-vg3-1-10-n-section4',
      type: 'text',
      content: `## En europeisk bevegelse

Nyromantikken i Skandinavia var ikke et isolert fenomen. Den var del av en bredere europeisk bevegelse som sokte nye veier ut av 1800-tallets materialisme og positivisme.

I Frankrike hadde symbolismen blomstret siden 1880-tallet. Charles Baudelaire hadde vaert forloperen med sine "Ondets blomster". Stephane Mallarme, Paul Verlaine og Arthur Rimbaud utviklet en poesi som sokte a uttrykke det usigelige gjennom symboler, klang og suggestive bilder. De trodde pa "correspondances" - skjulte sammenhenger mellom sansene, mellom det synlige og det usynlige.

I England representerte Oscar Wilde og Walter Pater estetisismen - bevegelsen som hevdet at kunsten skulle vaere fri fra moralske og sosiale krav. "Kunst for kunstens skyld" var slagordet. Skjonnheten var sin egen berettigelse.

I Tyskland og Osterrike vokste det frem en ny interesse for psykologi. Freud holdt pa a utvikle psykoanalysen. Filosofer som Nietzsche utfordret de etablerte verdiene. Forfattere som Arthur Schnitzler utforsket det erotiske og det ubevisste.

Alle disse stromningene hang sammen. De representerte et opprør mot 1800-tallets trygge, rasjonelle verdensbilde. Og de pekte fremover mot det 20. arhundrets modernisme.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-10-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-10-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa den europeiske konteksten:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-10-n-quiz4-q0',
            task: 'Hvilken litteraer bevegelse i Frankrike inspirerte nyromantikerne?',
            options: [
              { id: 'a', text: 'Naturalismen', isCorrect: false },
              { id: 'b', text: 'Symbolismen', isCorrect: true },
              { id: 'c', text: 'Parnassismen', isCorrect: false },
              { id: 'd', text: 'Surrealismen', isCorrect: false },
            ],
            solution: 'Symbolismen med Mallarme, Verlaine og Rimbaud var en viktig inspirasjonskilde. De sokte a uttrykke det usigelige gjennom symboler, klang og suggestive bilder.',
          },
          {
            id: 'norsk-vg3-1-10-n-quiz4-q1',
            task: 'Hva var estetisismens slagord?',
            options: [
              { id: 'a', text: '«Kunnskap er makt»', isCorrect: false },
              { id: 'b', text: '«Kunst for kunstens skyld»', isCorrect: true },
              { id: 'c', text: '«Sannhet fremfor alt»', isCorrect: false },
              { id: 'd', text: '«Arbeid adler mannen»', isCorrect: false },
            ],
            solution: 'Estetisismen, representert av Oscar Wilde og Walter Pater, hevdet at kunsten skulle vaere fri fra moralske og sosiale krav. «Kunst for kunstens skyld» var slagordet.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Kontinuitet og brudd ==========
    {
      id: 'norsk-vg3-1-10-n-section5',
      type: 'text',
      content: `## Ikke bare et brudd

Det er lett a fremstille nyromantikken som et totalt brudd med realismen. Men virkeligheten er mer kompleks. Mange forfattere utviklet seg gradvis i ny retning uten a forlate alt det gamle.

Ta Ibsen selv. Hans sene dramaer - fra "Vildanden" og utover - har sterke symbolistiske trekk. Vildanden som symbol, taarnvarelset i "Byggmester Solness", havet i "Fruen fra havet" - alt dette peker mot noe mer enn realistisk samfunnskritikk. Ibsen sluttet aldri a vaere realist, men han utvidet realismen innenfra.

Arne Garborg, som hadde skrevet naturalistiske romaner pa 1880-tallet, beveget seg ogsa i symbolsk retning. Hans "Haugtussa" (1895) er en av de store nyromantiske diktsamlingene, full av folkloristisk mystikk og naturpoesi.

Nyromantikken var altsai ikke bare et oppror - den var ogsa en videreutvikling. Den utvidet hva litteraturen kunne handle om, hvilke sider av menneskelivet den kunne utforske. Den aapnet dorer som realismen hadde holdt lukket.

Men det fantes ogsa radikale nyromantikere som Hamsun, som virkelig ville starte helt pa nytt. Hans tidlige romaner representerte noe genuint nytt i skandinavisk litteratur - en intensitet, en naerhet til bevisstheten, som ingen hadde oppnadd for.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-10-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-10-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa kontinuitet og brudd:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-10-n-quiz5-q0',
            task: 'Hvordan forholdt Ibsens sene dramaer seg til nyromantikken?',
            options: [
              { id: 'a', text: 'Ibsen avviste nyromantikken fullstendig', isCorrect: false },
              { id: 'b', text: 'Ibsens sene dramaer har sterke symbolistiske trekk', isCorrect: true },
              { id: 'c', text: 'Ibsen skrev bare realistiske dramaer', isCorrect: false },
              { id: 'd', text: 'Ibsen sluttet a skrive etter 1890', isCorrect: false },
            ],
            solution: 'Ibsens sene dramaer har sterke symbolistiske trekk. Symboler som vildanden og taarnvarelset peker mot noe utover realistisk samfunnskritikk.',
          },
          {
            id: 'norsk-vg3-1-10-n-quiz5-q1',
            task: 'Hvilken diktsamling viser Arne Garborgs overgang til nyromantikken?',
            options: [
              { id: 'a', text: '«Bondestudentar»', isCorrect: false },
              { id: 'b', text: '«Haugtussa»', isCorrect: true },
              { id: 'c', text: '«Fred»', isCorrect: false },
              { id: 'd', text: '«Mannfolk»', isCorrect: false },
            ],
            solution: 'Arne Garborg, som hadde skrevet naturalistiske romaner pa 1880-tallet, beveget seg i symbolsk retning med «Haugtussa» (1895) - en av de store nyromantiske diktsamlingene, full av folkloristisk mystikk.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-10-n-summary',
      type: 'text',
      content: `## Oppsummering

**Nyromantikken** (ca. 1890-1910) var en reaksjon mot realismens dominans i skandinavisk litteratur.

**Bakgrunn for reaksjonen:**
- Tretthet med problemdiktningens formler
- Nye filosofer (Nietzsche, Bergson) utfordret positivismen
- Kunstnerisk lengsel etter a utforske det indre livet
- Internasjonal pavirkning fra symbolisme og estetisisme

**Nyromantikkens kjennetegn:**
- Subjektivitet og introspeksjon
- Interesse for det mystiske og irrasjonelle
- Naturen som sjelslandskap
- Poetisk, stemningsskapende stil
- Individualisme

**Hamsuns angrep (1890):**
- Kritiserte de fire store for overfladiskhet
- Krevde litteratur om "det ubevisste sjeleliv"
- Formulerte et nytt litteraert program

**Europeisk kontekst:**
- Fransk symbolisme (Mallarme, Verlaine)
- Engelsk estetisisme (Wilde)
- Tysk/osterriksk psykologi og filosofi

**Kontinuitet og brudd:**
- Ikke bare oppror, ogsa videreutvikling
- Ibsens sene dramaer har symbolistiske trekk
- Nyromantikken utvidet litteraturens muligheter`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.11 NARRATIV: Knut Hamsun - Sult og Mysterier
// ============================================================================

export const CHAPTER_NORSK_VG3_1_11_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-11-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.11',
  title: 'Knut Hamsun - Sult og Mysterier',
  subtitle: 'Narrativ versjon',
  description: 'Møt mannen som revolusjonerte romankunsten - fra fattig omstreifer til Nobelprisvinner, og kontroversene som fortsatt preger hans ettermæle.',
  estimatedMinutes: 45,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litterære analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-1-11',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-11-n-intro',
      type: 'text',
      content: `## Inne i et sultende sinn

"Det var i den Tid, jeg gik omkring og sulted i Kristiania, denne forunderlige By, som ingen forlader, før han har faaet Mærker af den..."

Med disse ordene apner en av de mest revolusjonerende romanene i verdenslitteraturen. Vi er i 1890, og en navnlos ung mann vandrer gjennom Kristianias gater. Han er sulten - sa sulten at tankene hans begynner a gli ut av kontroll. Han har merkelige impulser, handler irrasjonelt, lyver uten grunn.

Dette er "Sult" av Knut Hamsun. Og det er noe helt nytt.

For forste gang i litteraturhistorien befinner vi oss inne i et sinn - ikke som observatorer, men som deltakere. Vi folger tankenes springende bevegelser, de plutselige innskytelsene, de irrasjonelle impulsene. Det finnes ingen forteller som ordner og forklarer. Vi er bare der, i sulten, i forvirringen, i den merkelige lykken og desperasjonen.

Forfatteren selv kjente til fattigdom. Knut Pedersen, som han egentlig het, hadde vandret sulten i mange byer. Han hadde arbeidet som traktkararbeider i Amerika, som landhandler og laerer i Norge. Han visste hva det ville si a ikke ha rad til mat.

Men "Sult" er mer enn selvbiografi. Det er en litteraer revolusjon.`,
    },

    // ========== SEKSJON 1: Fra Hamarøy til verden ==========
    {
      id: 'norsk-vg3-1-11-n-section1',
      type: 'text',
      content: `## En omflakkende sjel

Knut Pedersen ble født 4. august 1859 i Lom i Gudbrandsdalen. Da han var tre ar gammel, flyttet familien til Hamaroy i Nordland. Her, i det majestetiske nordnorske landskapet, vokste gutten opp - og her fant han bildene og stemningene som skulle prege hele forfatterskapet hans.

Men oppveksten var hard. Han ble sendt bort til en onkel som behandlet ham darlig. Han fikk lite skolegang. Som tenaring begynte han a drive omkring - som butikkmedarbeider, som omreisende handelsmann, som laerer. Han forsokte a skrive, men ingen ville gi ut bøkene hans.

I 1882 reiste han til Amerika for forste gang. Her arbeidet han som traktkararbeider og strevde for a overleve. Han kom hjem, forsokte igjen i Norge, reiste tilbake til Amerika i 1886. Det var ar preget av fattigdom, slit og ensomhet.

Men ogsa av skriving. Hamsun skrev hele tiden - artikler, dikt, romanforsok. Han var besatt av tanken pa a bli forfatter. Og han utviklet gradvis noe eget: en stil, en stemme, en mate a skrive pa som ingen hadde hort for.

I 1888 publiserte han et fragment av det som skulle bli "Sult" i et tidsskrift. Responsen var overveldende. Her var noe nytt, noe annerledes. I 1890 kom romanen i bokform - og Hamsuns liv forandret seg for alltid.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-11-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-11-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Hamsuns bakgrunn:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-11-n-quiz1-q0',
            task: 'Hvor vokste Knut Hamsun opp?',
            options: [
              { id: 'a', text: 'I Kristiania', isCorrect: false },
              { id: 'b', text: 'I Bergen', isCorrect: false },
              { id: 'c', text: 'I Hamaroy i Nordland', isCorrect: true },
              { id: 'd', text: 'I Trondheim', isCorrect: false },
            ],
            solution: 'Hamsun ble født i Lom, men vokste opp i Hamaroy i Nordland fra han var tre ar. Det nordnorske landskapet preget forfatterskapet hans dypt.',
          },
          {
            id: 'norsk-vg3-1-11-n-quiz1-q1',
            task: 'Hva preget Hamsuns ungdom?',
            options: [
              { id: 'a', text: 'Velstand og gode studieforhold', isCorrect: false },
              { id: 'b', text: 'Fattigdom, omflakking og reiser til Amerika', isCorrect: true },
              { id: 'c', text: 'En rolig barndom i prestegarden', isCorrect: false },
              { id: 'd', text: 'Kunstutdanning i Paris', isCorrect: false },
            ],
            solution: 'Hamsuns ungdom var preget av fattigdom og rastloshet. Han arbeidet som traktkararbeider i Amerika, som landhandler og laerer i Norge, og vandret sulten i mange byer.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Sult - en litterær revolusjon ==========
    {
      id: 'norsk-vg3-1-11-n-section2',
      type: 'text',
      content: `## Inne i hodets irrganger

"Sult" handler pa overflaten om enkle ting: En ung mann gar rundt i Kristiania og forsoker a skrive artikler for a tjene penger til mat. Han har det trangt, veldig trangt. Av og til far han solgt noe, av og til ma han pantsette det lille han eier.

Men det er ikke handlingen som gjor romanen revolusjonerende. Det er maten den er fortalt pa.

Vi er inne i hovedpersonens hode hele tiden. Vi folger tankene hans nar de springer fra det ene til det andre - fra en observasjon pa gaten til en merkelig assosiasjon til en plutselig impuls. Sulten pavirker tenkningen. Jo mer sulten han blir, jo mer usammenhengende og irrasjonelle blir tankene.

Og hovedpersonen handler ofte uforklarlig. Han gir bort penger han desperat trenger. Han lyver til fremmede uten grunn. Han oppsøker ydmykelser nesten med vilje. Hvorfor? Romanen forklarer ikke. Den bare viser.

Dette var det nye. For forste gang ble bevissthetens strøm gjengitt direkte, uten en ordnende forteller som forklarte og kommenterte. Leseren kastes rett inn i et sinn - og ma selv forsøke a finne mening.

Teknikken peker fremover mot modernismens store navn: Joyce, Woolf, Proust. Hamsun var forloperen som aapnet veien.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-11-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-11-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa «Sult»:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-11-n-quiz2-q0',
            task: 'Hva var det revolusjonerende ved «Sult»?',
            options: [
              { id: 'a', text: 'At den handlet om fattigdom', isCorrect: false },
              { id: 'b', text: 'At tankenes strom ble gjengitt direkte, uten forklarende forteller', isCorrect: true },
              { id: 'c', text: 'At den var skrevet pa dialekt', isCorrect: false },
              { id: 'd', text: 'At den kritiserte samfunnet', isCorrect: false },
            ],
            solution: '«Sult» var revolusjonerende fordi den gjengav bevissthetens strom direkte - uten en forteller som ordnet og forklarte. Teknikken pekte fremover mot modernismen.',
          },
          {
            id: 'norsk-vg3-1-11-n-quiz2-q1',
            task: 'Hvordan handler hovedpersonen i «Sult»?',
            options: [
              { id: 'a', text: 'Logisk og systematisk for a overleve', isCorrect: false },
              { id: 'b', text: 'Ofte uforklarlig - gir bort penger, lyver uten grunn', isCorrect: true },
              { id: 'c', text: 'Rolig og kontrollert hele tiden', isCorrect: false },
              { id: 'd', text: 'Han ber om hjelp fra venner og familie', isCorrect: false },
            ],
            solution: 'Hovedpersonen handler ofte uforklarlig: gir bort penger han trenger, lyver til fremmede uten grunn, oppsoker ydmykelser. Romanen forklarer ikke - den bare viser. Dette var det nye.',
          },
          {
            id: 'norsk-vg3-1-11-n-quiz2-q2',
            task: 'Hvordan pavirker sulten hovedpersonens tenkning?',
            options: [
              { id: 'a', text: 'Den gjor ham mer fokusert og klar', isCorrect: false },
              { id: 'b', text: 'Den har ingen effekt pa tankene hans', isCorrect: false },
              { id: 'c', text: 'Jo mer sulten han blir, jo mer usammenhengende og irrasjonelle blir tankene', isCorrect: true },
              { id: 'd', text: 'Den gjor ham kreativ og produktiv', isCorrect: false },
            ],
            solution: 'Sulten pavirker tenkningen direkte. Jo mer sulten hovedpersonen blir, jo mer springer tankene og jo mer irrasjonelle blir de. Leseren opplever dette innenfra.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Mysterier - gaten uten svar ==========
    {
      id: 'norsk-vg3-1-11-n-section3',
      type: 'text',
      content: `## En fremmed kommer til byen

To ar etter "Sult" kom "Mysterier" (1892). Hvis "Sult" var en revolusjon, var "Mysterier" en fordypning av det nye.

En fremmed mann dukker opp i en liten kystby. Han heter Johan Nilsen Nagel - eller gjor han det? Han er kledd i en gul dress som far folk til a snu seg. Han har penger, men ingen vet hvor de kommer fra. Han oppforer seg merkelig, provoserer de respektable borgerne, sier ting som ikke gir mening.

Hvem er Nagel? Hva vil han? Romanen gir ingen svar. Nagel er selvmotsigende, uforutsigbar, et mysterium. Han lyver konstant, spiller roller, skifter identitet. Kanskje vet han ikke selv hvem han er.

Han forelsker seg i to kvinner - den unge Dagny og den eldre Martha. Han provoserer byens menn, saerlig ved a være vennlig mot "Minutten", en stakkarslig figur alle andre forakter. Han filosoferer, deklamerer, gjor narr av alt og alle - inkludert seg selv.

Og sa, til slutt, drukner han seg. Eller gjor han det med vilje? Ogsa dette forblir et mysterium.

"Mysterier" er Hamsuns mest komplekse verk. Nagel er blitt et ikon pa den moderne, splittede bevissthet - mennesket som ikke lenger vet hvem det er eller hva det vil.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-11-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-11-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa «Mysterier»:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-11-n-quiz3-q0',
            task: 'Hva kjennetegner hovedpersonen Nagel i «Mysterier»?',
            options: [
              { id: 'a', text: 'Han er en typisk realistisk karakter med klare motiver', isCorrect: false },
              { id: 'b', text: 'Han er selvmotsigende, uforutsigbar og gatefull', isCorrect: true },
              { id: 'c', text: 'Han er en enkel helt som kjemper mot urett', isCorrect: false },
              { id: 'd', text: 'Han er en tydelig skurk med onde hensikter', isCorrect: false },
            ],
            solution: 'Nagel er Hamsuns mest komplekse karakter - selvmotsigende, uforutsigbar, et mysterium. Han lyver, spiller roller, skifter identitet. Han representerer den moderne, splittede bevissthet.',
          },
          {
            id: 'norsk-vg3-1-11-n-quiz3-q1',
            task: 'Hva gjor Nagel som provoserer byens borgere?',
            options: [
              { id: 'a', text: 'Han skriver avisinnlegg mot dem', isCorrect: false },
              { id: 'b', text: 'Han nekter a betale skatt', isCorrect: false },
              { id: 'c', text: 'Han oppforer seg merkelig, sier ting som ikke gir mening og er vennlig mot «Minutten»', isCorrect: true },
              { id: 'd', text: 'Han forsøker a overta butikkene i byen', isCorrect: false },
            ],
            solution: 'Nagel provoserer de respektable borgerne ved sin uforutsigbare oppforsel - han sier ting som ikke gir mening, utfordrer konvensjonene, og viser vennlighet mot «Minutten», en stakkarslig figur alle andre forakter.',
          },
          {
            id: 'norsk-vg3-1-11-n-quiz3-q2',
            task: 'Hvordan ender «Mysterier»?',
            options: [
              { id: 'a', text: 'Nagel forlater byen med Dagny', isCorrect: false },
              { id: 'b', text: 'Nagel drukner - men det er uklart om det er med vilje', isCorrect: true },
              { id: 'c', text: 'Nagel blir akseptert av byens borgere', isCorrect: false },
              { id: 'd', text: 'Nagel avsloerer sin sanne identitet', isCorrect: false },
            ],
            solution: 'Romanen ender med at Nagel drukner, men det forblir et mysterium om han tok sitt eget liv eller om det var et uhell. Dette ubesvarte sporsmalet er karakteristisk for hele romanen.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Hamsuns betydning ==========
    {
      id: 'norsk-vg3-1-11-n-section4',
      type: 'text',
      content: `## Forloperen

Hamsuns tidlige romaner var ikke bare gode boker - de aapnet nye veier for hele verdenslitteraturen. Det han gjorde i "Sult" og "Mysterier", skulle senere bli kalt "bevissthetsstrøm" (stream of consciousness) - men Hamsun var der forst, for Joyce, for Woolf, for Proust.

Hva var det nye? For det forste: intensiteten. Vi er ikke observatører av karakterene, vi er inne i dem. Avstanden mellom leser og karakter forsvinner naermest helt.

For det andre: det irrasjonelle. Hamsuns karakterer handler ikke logisk. De har impulser de ikke forstar, motiver de ikke kan forklare. Dette var en radikal utfordring til realismens syn pa mennesket som rasjonelt vesen.

For det tredje: fragmenteringen. "Sult" har ingen tradisjonell plot med begynnelse, midtdel og slutt. Den bare slutter - nar hovedpersonen gar om bord i et skip. Det er ingen opplosning, ingen konklusjon.

Forfattere over hele verden lot seg pavirke. Franz Kafka, Ernest Hemingway, Isaac Bashevis Singer - alle har nevnt Hamsun som inspirasjonskilde. I 1920 fikk han Nobelprisen i litteratur, for "Markens grode".

Men sa kom krigen. Og med den, Hamsuns storste feilgrep.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-11-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-11-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Hamsuns betydning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-11-n-quiz4-q0',
            task: 'Hvilken litteraer teknikk var Hamsun pioner for?',
            options: [
              { id: 'a', text: 'Den allvitende fortelleren', isCorrect: false },
              { id: 'b', text: 'Bevissthetsstrøm (stream of consciousness)', isCorrect: true },
              { id: 'c', text: 'Naturalismens determinisme', isCorrect: false },
              { id: 'd', text: 'Det vellagede dramaet', isCorrect: false },
            ],
            solution: 'Hamsun var en pioner for bevissthetsstrøm-teknikken - gjengivelsen av tankenes strom direkte, uten ordnende forteller. Denne teknikken ble senere sentral i modernismen.',
          },
          {
            id: 'norsk-vg3-1-11-n-quiz4-q1',
            task: 'Hva var nytt ved Hamsuns behandling av karakterene sine?',
            options: [
              { id: 'a', text: 'De var typiske representanter for sosiale klasser', isCorrect: false },
              { id: 'b', text: 'De handlet alltid logisk og rasjonelt', isCorrect: false },
              { id: 'c', text: 'De hadde impulser de ikke forsto og motiver de ikke kunne forklare', isCorrect: true },
              { id: 'd', text: 'De var helt uten indre liv', isCorrect: false },
            ],
            solution: 'Hamsuns karakterer handler irrasjonelt - de har impulser de ikke forstar og motiver de ikke kan forklare. Dette var en radikal utfordring til realismens syn pa mennesket som rasjonelt vesen.',
          },
          {
            id: 'norsk-vg3-1-11-n-quiz4-q2',
            task: 'Hvilke forfattere lot seg inspirere av Hamsun?',
            options: [
              { id: 'a', text: 'Ibsen, Bjornson og Lie', isCorrect: false },
              { id: 'b', text: 'Kafka, Hemingway og Singer', isCorrect: true },
              { id: 'c', text: 'Dickens, Balzac og Tolstoj', isCorrect: false },
              { id: 'd', text: 'Obstfelder, Krag og Garborg', isCorrect: false },
            ],
            solution: 'Forfattere som Franz Kafka, Ernest Hemingway og Isaac Bashevis Singer har alle nevnt Hamsun som inspirasjonskilde. Han fikk Nobelprisen i 1920 for «Markens grode».',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Kontroversene ==========
    {
      id: 'norsk-vg3-1-11-n-section5',
      type: 'text',
      content: `## Den vanskelige arven

Under andre verdenskrig støttet Hamsun nazistene. Han møtte Hitler. Da Hitler dode, skrev Hamsun en nekrolog som hyllet ham som en "krigersk skikkelse".

For Norge var dette et sjokk. Landets store forfatter, Nobelprisvinneren, hadde stilt seg pa feil side i historien. Etter krigen ble Hamsun tiltalt for landssvik. Han ble erklært "varig svekkede sjelsevner" og slapp fengsel, men ble dømt til a betale en stor erstatning.

Hvorfor gjorde han det? Noen peker pa hans livslange skepsis til England og beundring for Tyskland. Andre peker pa alderdommen og isolasjonen. Hamsun var i 80-arene under krigen, naesten dov, avskaaret fra omverdenen.

Men forklaringene gjor ikke saken bedre. Faktum er at en av verdenslitteraturens store forfattere støttet en av historiens verste regimer.

Hvordan skal vi forholde oss til dette? Kan vi skille verket fra mannen? Noen mener at kunsten ma vurderes pa egne premisser - at "Sult" og "Pan" er mesterverk uavhengig av forfatterens politiske villfarelser. Andre mener at vi ikke kan ignorere hvem Hamsun var og hva han sto for.

Debatten fortsetter. Men uansett standpunkt: Hamsuns litteraere betydning forblir ubestridelig. Han forandret romankunsten - og den forandringen lever videre, uavhengig av mannens feilgrep.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-11-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-11-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa Hamsuns kontroversielle ettermæle:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-11-n-quiz5-q0',
            task: 'Hva gjor Hamsuns ettermæle kontroversielt?',
            options: [
              { id: 'a', text: 'At han kritiserte andre forfattere', isCorrect: false },
              { id: 'b', text: 'At han støttet nazistene under andre verdenskrig', isCorrect: true },
              { id: 'c', text: 'At han skrev for mye', isCorrect: false },
              { id: 'd', text: 'At han flyttet fra Norge', isCorrect: false },
            ],
            solution: 'Hamsuns støtte til nazistene under krigen, inkludert hans mote med Hitler og nekrologen over ham, har kastet en skygge over hans ettermæle.',
          },
          {
            id: 'norsk-vg3-1-11-n-quiz5-q1',
            task: 'Hva skjedde med Hamsun etter krigen?',
            options: [
              { id: 'a', text: 'Han flyktet til Tyskland', isCorrect: false },
              { id: 'b', text: 'Han fikk en ny Nobelpris', isCorrect: false },
              { id: 'c', text: 'Han ble tiltalt for landssvik og domt til a betale erstatning', isCorrect: true },
              { id: 'd', text: 'Han ble frikjent og hyllet', isCorrect: false },
            ],
            solution: 'Etter krigen ble Hamsun tiltalt for landssvik. Han ble erklært «varig svekkede sjelsevner» og slapp fengsel, men ble domt til a betale en stor erstatning.',
          },
          {
            id: 'norsk-vg3-1-11-n-quiz5-q2',
            task: 'Hva er kjernen i debatten om Hamsuns arv?',
            options: [
              { id: 'a', text: 'Om han fortjente Nobelprisen', isCorrect: false },
              { id: 'b', text: 'Om han var en bedre forfatter enn Ibsen', isCorrect: false },
              { id: 'c', text: 'Om vi kan skille verket fra mannen - kunsten fra politikken', isCorrect: true },
              { id: 'd', text: 'Om han egentlig var norsk', isCorrect: false },
            ],
            solution: 'Debatten handler om hvorvidt vi kan skille verket fra mannen. Noen mener «Sult» og «Pan» er mesterverk uavhengig av forfatterens villfarelser, andre mener vi ikke kan ignorere hvem Hamsun var og hva han sto for.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-11-n-summary',
      type: 'text',
      content: `## Oppsummering

**Knut Hamsun** (1859-1952) regnes som en av de mest innflytelsesrike forfatterne i verdenslitteraturen.

**Biografi:**
- Født i Lom, oppvokst i Hamaroy
- Omflakkende ungdom med mange yrker
- Reiste to ganger til Amerika
- Gjennombrudd med "Sult" i 1890
- Nobelpris i 1920

**Viktige tidlige verk:**
- "Sult" (1890): Bevissthetsstrømmens gjennombrudd
- "Mysterier" (1892): Gatefull karakter uten svar
- "Pan" (1894): Naturmystikk
- "Victoria" (1898): Kaerlighetsskildring

**Det litteraere nybrottet:**
- Bevissthetsstrøm-teknikk
- Fokus pa det irrasjonelle
- Fragmentert form
- Intensitet og naerhet til bevisstheten

**Pavirkning:**
- Forloiper for modernismen
- Inspirerte Joyce, Kafka, Hemingway og andre
- Forandret romankunsten varig

**Kontroversene:**
- Støttet nazismen under krigen
- Debatten om verk og person fortsetter`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.12 NARRATIV: Symbolisme og stemningsdiktning
// ============================================================================

export const CHAPTER_NORSK_VG3_1_12_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-12-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.12',
  title: 'Symbolisme og stemningsdiktning',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hvordan symbolistene sokte det usigelige gjennom klang, stemning og mystiske bilder - en poesi som antyder mer enn den sier.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-1-12',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-12-n-intro',
      type: 'text',
      content: `## Det som ikke kan sies

Tenk deg at du star ved havet en sen kveld. Solen er i ferd med a ga ned, og himmelen farges i rosa og gull. Bolene slår rolig mot stranden. Du foler noe - en lengsel, kanskje, en sorg, en glede du ikke kan sette ord pa.

Hvordan skulle du beskrive dette oyeblikket? Du kan liste opp fakta: solnedgang, hav, bolger. Men da mister du det viktigste - stemningen, folelsen, det som ikke lar seg fange i direkte ord.

Symbolistene forsto dette. De visste at de viktigste tingene i livet - kjærlighet, dod, skjonnhet, lengsel - ikke kan uttrykkes direkte. De ma antydes, suggereres, symboliseres.

Derfor utviklet de en helt ny type poesi. En poesi der klangen var like viktig som meningen. Der symboler pekte mot noe som la bakom ordene. Der leseren ikke skulle forsta, men fole.

Denne bevegelsen startet i Frankrike pa 1880-tallet med diktere som Mallarme og Verlaine. Snart spredte den seg til resten av Europa - inkludert Norge, der Sigbjorn Obstfelder og Vilhelm Krag skulle bli de fremste representantene.`,
    },

    // ========== SEKSJON 1: Den franske symbolismen ==========
    {
      id: 'norsk-vg3-1-12-n-section1',
      type: 'text',
      content: `## Fra Paris til verden

Det hele begynte med Charles Baudelaire. Hans diktsamling "Ondets blomster" (1857) var en skandale - men ogsa en apenbaring. Baudelaire skrev om det forbudte, det morke, det usigelige. Og han gjorde det med en formbevissthet og en sanselig intensitet som var helt ny.

Baudelaires mest berømte dikt heter "Correspondances" - "Korrespondanser". Det handler om skjulte sammenhenger mellom sansene og mellom det synlige og det usynlige. "Parfymene, fargene og tonene svarer til hverandre," skrev han. Dette ble symbolismens grunnide: at det finnes en dypere virkelighet bak overflaten, og at kunsten kan ane denne virkeligheten.

Stephane Mallarme tok ideen videre. Hans dikt er naermest hermetiske - sa vanskelige at selv franske lesere sliter. Men det var meningen. Mallarme mente at diktet skulle vaere som en gate, et mysterium som gradvis avslorer seg. Han arbeidet i arevis med sine dikt, slipte hvert ord til det var perfekt.

Paul Verlaine var mer tilgjengelig, mer musikalsk. "Musikk fremfor alt," var hans motto. Diktene hans flyter og synger, fulle av vage stemninger og myke klanger. De handler sjelden om noe konkret - de skaper stemninger.

Arthur Rimbaud var geniet som brant ut for tidlig. Han skrev all sin poesi mellom 15 og 19 ar, sa sluttet han helt. Hans "Opplevelser i helvete" og "Illuminasjoner" er visjonære tekster som sprenger alle grenser.

Disse fire - Baudelaire, Mallarme, Verlaine, Rimbaud - skapte symbolismen. Snart skulle ideene deres spre seg over hele Europa.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-12-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-12-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa den franske symbolismen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-12-n-quiz1-q0',
            task: 'Hvem regnes som symbolismens forloperen i Frankrike?',
            options: [
              { id: 'a', text: 'Victor Hugo', isCorrect: false },
              { id: 'b', text: 'Charles Baudelaire', isCorrect: true },
              { id: 'c', text: 'Emile Zola', isCorrect: false },
              { id: 'd', text: 'Gustave Flaubert', isCorrect: false },
            ],
            solution: 'Charles Baudelaire regnes som symbolismens forloperen med sin diktsamling «Ondets blomster» (1857). Hans ide om «correspondances» - skjulte sammenhenger mellom sansene - ble grunnleggende for symbolismen.',
          },
          {
            id: 'norsk-vg3-1-12-n-quiz1-q1',
            task: 'Hva handlet Baudelaires berømte dikt «Correspondances» om?',
            options: [
              { id: 'a', text: 'Om brevveksling mellom to elskende', isCorrect: false },
              { id: 'b', text: 'Om politiske sammenhenger i samfunnet', isCorrect: false },
              { id: 'c', text: 'Om skjulte sammenhenger mellom sansene og mellom det synlige og usynlige', isCorrect: true },
              { id: 'd', text: 'Om korrespondanse mellom dikter og forlegger', isCorrect: false },
            ],
            solution: '«Correspondances» handler om skjulte sammenhenger mellom sansene og mellom det synlige og usynlige. «Parfymene, fargene og tonene svarer til hverandre» - dette ble symbolismens grunnide.',
          },
          {
            id: 'norsk-vg3-1-12-n-quiz1-q2',
            task: 'Hva var Paul Verlaines motto?',
            options: [
              { id: 'a', text: '«Kunst for kunstens skyld»', isCorrect: false },
              { id: 'b', text: '«Musikk fremfor alt»', isCorrect: true },
              { id: 'c', text: '«Sannhet i alle ting»', isCorrect: false },
              { id: 'd', text: '«Naturen er den storste laerer»', isCorrect: false },
            ],
            solution: 'Verlaines motto var «Musikk fremfor alt». Diktene hans flyter og synger, fulle av vage stemninger og myke klanger. De skaper stemninger fremfor a beskrive noe konkret.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Symbolismens estetikk ==========
    {
      id: 'norsk-vg3-1-12-n-section2',
      type: 'text',
      content: `## A antyde det usigelige

Symbolistene hadde en filosofi. De trodde at den synlige virkeligheten bare var en overflate - og at det fantes en dypere, skjult virkelighet bakom. Denne virkeligheten kunne ikke uttrykkes direkte. Den kunne bare antydes, suggereres, symboliseres.

Symbolet var nokkeleen. Et symbol er ikke bare et tegn som star for noe annet - som et flagg star for et land. Et symbolistisk symbol er mer apent, mer gatefylt. Det peker mot noe som ikke helt lar seg definere.

Ta havet som eksempel. I et realistisk dikt kan havet vaere bare hav - et fysisk sted der handling utspiller seg. Men i et symbolistisk dikt er havet et symbol: for det uendelige, for lengsel, for dod, for det ubevisste. Det betyr ikke bare en av disse tingene - det vibrerer av alle mulige betydninger.

Musikaliteten var like viktig. Verlaines motto - "Musikk fremfor alt" - ble symbolistenes credo. Ordenes klang, rytmen, rimet - alt dette skulle skape en stemning som traff direkte, for forstand og analyse.

Og de avviste realismens direkte meddelelse. Et dikt skulle ikke forklare, ikke argumentere, ikke beskrive. Det skulle fremkalle. Leseren skulle ikke forsta med hodet, men fole med hele kroppen.

"A navngi en ting er a odelegge tre fjerdedeler av nytelsen," skrev Mallarme. "A antyde, det er drommen." Dette er symbolismens kjerne i en setning.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-12-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-12-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa symbolismens estetikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-12-n-quiz2-q0',
            task: 'Hva mente symbolistene med at diktet skulle «antyde» fremfor a «navngi»?',
            options: [
              { id: 'a', text: 'At diktet skulle vaere uforstaelig', isCorrect: false },
              { id: 'b', text: 'At diktet skulle fremkalle stemninger fremfor a forklare', isCorrect: true },
              { id: 'c', text: 'At diktet skulle vaere kort', isCorrect: false },
              { id: 'd', text: 'At diktet bare skulle bruke abstrakte ord', isCorrect: false },
            ],
            solution: 'Symbolistene mente at det viktigste ikke kunne uttrykkes direkte. Diktet skulle antyde og suggerere, fremkalle stemninger og folelser, i stedet for a forklare og beskrive.',
          },
          {
            id: 'norsk-vg3-1-12-n-quiz2-q1',
            task: 'Hva er forskjellen pa et symbolistisk symbol og et vanlig tegn?',
            options: [
              { id: 'a', text: 'Et symbolistisk symbol betyr bare en ting', isCorrect: false },
              { id: 'b', text: 'Et symbolistisk symbol er mer apent og gatefylt - det vibrerer av mange mulige betydninger', isCorrect: true },
              { id: 'c', text: 'Et symbolistisk symbol er alltid et dyr', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Et symbolistisk symbol er ikke bare et tegn som star for noe bestemt. Det er apent og gatefylt - havet kan bety det uendelige, lengsel, dod eller det ubevisste. Det vibrerer av alle mulige betydninger.',
          },
          {
            id: 'norsk-vg3-1-12-n-quiz2-q2',
            task: 'Hva sa Mallarme om det a navngi ting i diktet?',
            options: [
              { id: 'a', text: '«A navngi er a skape virkelighet»', isCorrect: false },
              { id: 'b', text: '«A navngi er dikterens forste plikt»', isCorrect: false },
              { id: 'c', text: '«A navngi en ting er a odelegge tre fjerdedeler av nytelsen»', isCorrect: true },
              { id: 'd', text: '«A navngi er a forstaa»', isCorrect: false },
            ],
            solution: 'Mallarme sa: «A navngi en ting er a odelegge tre fjerdedeler av nytelsen. A antyde, det er drommen.» Dette oppsummerer symbolismens kjerne - diktet skal fremkalle, ikke forklare.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Symbolismen i Norge ==========
    {
      id: 'norsk-vg3-1-12-n-section3',
      type: 'text',
      content: `## Norske stemmer

Pa 1890-tallet nadde symbolismen Norge. Her tok den en saeregen form, blandet med den norske tradisjonen for naturskildring og med nyromantikkens interesse for folkloristikk og mystikk.

Sigbjorn Obstfelder ble den fremste norske symbolisten. Hans dikt er enkle pa overflaten - korte setninger, hverdagslige ord. Men under overflaten vibrerer det av eksistensiell uro. Hans berømmte dikt "Jeg ser" fanger folelsen av fremmedgjoering med forbausende enkelhet: "Jeg er vist kommet paa en feil klode! Her er saa underligt..."

Vilhelm Krag representerte en annen variant - mer musikalsk, mer formet, men like stemningsfull. Hans lyrikk fanger sørlandsnaturen i toner av lengsel og melankoli. Diktet "Fandansen" med sitt refrent "Aa, jeg ved en sorgelig vise" ble folkekjaert og synges fortsatt.

Men symbolismen pavirket ogsa prosaen. Hamsuns tidlige romaner har klare symbolistiske trekk - den lyriske stilen, naturen som sjelslandskap, de uforklarlige stemningene.

Og i dramaet? Ibsens sene stykker beveget seg i symbolistisk retning. "Vildanden" med sin mystiske fugl, "Bygmester Solness" med sitt taarn, "Nar vi dode vaagner" med sin symbolmetning - alt dette viser at symbolismens pavirkning rakk langt utover lyrikken.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-12-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-12-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa symbolismen i Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-12-n-quiz3-q0',
            task: 'Hvem regnes som Norges fremste symbolist?',
            options: [
              { id: 'a', text: 'Henrik Ibsen', isCorrect: false },
              { id: 'b', text: 'Knut Hamsun', isCorrect: false },
              { id: 'c', text: 'Sigbjorn Obstfelder', isCorrect: true },
              { id: 'd', text: 'Bjornstjerne Bjornson', isCorrect: false },
            ],
            solution: 'Sigbjorn Obstfelder regnes som Norges fremste symbolist. Hans dikt, saerlig «Jeg ser», fanger eksistensiell fremmedgjoering med forbausende enkelhet og intensitet.',
          },
          {
            id: 'norsk-vg3-1-12-n-quiz3-q1',
            task: 'Hvilket dikt av Vilhelm Krag ble folkekjaert og synges fortsatt?',
            options: [
              { id: 'a', text: '«Jeg ser»', isCorrect: false },
              { id: 'b', text: '«Fandansen»', isCorrect: true },
              { id: 'c', text: '«Haugtussa»', isCorrect: false },
              { id: 'd', text: '«Regn»', isCorrect: false },
            ],
            solution: 'Vilhelm Krags «Fandansen» med sitt refrent «Aa, jeg ved en sorgelig vise» ble folkekjaert og synges fortsatt. Krag representerte en musikalsk, stemningsfull variant av symbolismen.',
          },
          {
            id: 'norsk-vg3-1-12-n-quiz3-q2',
            task: 'Hvordan viste symbolismens pavirkning seg i Ibsens sene dramaer?',
            options: [
              { id: 'a', text: 'Ibsen sluttet a skrive dramaer', isCorrect: false },
              { id: 'b', text: 'Ibsen begynte a skrive lyrikk i stedet', isCorrect: false },
              { id: 'c', text: 'Gjennom mystiske symboler som vildanden, taarnet i «Bygmester Solness» og havet', isCorrect: true },
              { id: 'd', text: 'Ibsen avviste symbolismen fullstendig', isCorrect: false },
            ],
            solution: 'Ibsens sene stykker beveget seg i symbolistisk retning med mystiske symboler: vildanden, taarnet i «Bygmester Solness», og symbolmetningen i «Nar vi dode vaagner». Symbolismens pavirkning rakk langt utover lyrikken.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Synestesi og correspondances ==========
    {
      id: 'norsk-vg3-1-12-n-section4',
      type: 'text',
      content: `## Nar sansene blandes

Et sarlig kjennetegn ved symbolistisk poesi er synestesi - sansenes blanding. Farger kan "lyde", toner kan "glitre", dufter kan vaere "morke". Sansegrensene brytes ned.

"Bla toner", "varm farge", "skarp smak", "mork stemme" - dette er synestesier vi bruker i dagligtale uten a tenke over det. Men symbolistene gjorde teknikken bevisst og tok den mye lenger.

Baudelaires "Correspondances" er noykkelteksten. Her beskrives sammenhengen mellom sansene som et "dypt enhetens tempel" der "parfymene, fargene og tonene svarer til hverandre". Det finnes skjulte forbindelser mellom alt - og dikteren er den som kan ane disse forbindelsene.

I norsk litteratur finner vi synestesi saerlig hos Obstfelder. Hans forvirrede jeg-personer opplever verden gjennom sanser som ikke holder seg pa plass. Grenene mellom det horte, det sette, det faste er usikre. Dette speiler den eksistensielle usikkerheten - folelsen av a ikke vaere helt til stede i verden.

Synestesien har en filosofisk funksjon: Den viser at virkeligheten ikke er ordnet i pene kategorier. Den synlige verden flyter sammen i en dypere enhet som ordene bare kan antyde.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-12-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-12-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa synestesi og correspondances:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-12-n-quiz4-q0',
            task: 'Hva er synestesi?',
            options: [
              { id: 'a', text: 'En type rim i diktet', isCorrect: false },
              { id: 'b', text: 'Nar sanseinntrykk fra ett omrade overfores til et annet', isCorrect: true },
              { id: 'c', text: 'En form for gjentakelse', isCorrect: false },
              { id: 'd', text: 'En type strofeform', isCorrect: false },
            ],
            solution: 'Synestesi er en teknikk der sanseinntrykk blandes - for eksempel «bla toner» (syn + horsel) eller «varm farge» (temperatur + syn). Symbolistene brukte dette bevisst for a antyde dypere sammenhenger.',
          },
          {
            id: 'norsk-vg3-1-12-n-quiz4-q1',
            task: 'Hvilket av disse er et eksempel pa synestesi?',
            options: [
              { id: 'a', text: '«En stor, gammel eik»', isCorrect: false },
              { id: 'b', text: '«Himmelen var bla»', isCorrect: false },
              { id: 'c', text: '«Bla toner» eller «mork stemme»', isCorrect: true },
              { id: 'd', text: '«Fuglene sang i treet»', isCorrect: false },
            ],
            solution: '«Bla toner» blander syn (farge) med horsel (lyd), og «mork stemme» blander syn (morke) med horsel. Dette er synestesier - sanseinntrykk overfores mellom omrader.',
          },
          {
            id: 'norsk-vg3-1-12-n-quiz4-q2',
            task: 'Hva er synestesiens filosofiske funksjon i symbolistisk poesi?',
            options: [
              { id: 'a', text: 'A gjore diktet vanskeligere a forsta', isCorrect: false },
              { id: 'b', text: 'A vise at virkeligheten ikke er ordnet i pene kategorier, men flyter sammen i en dypere enhet', isCorrect: true },
              { id: 'c', text: 'A beskrive naturen mer noyaktig', isCorrect: false },
              { id: 'd', text: 'A underholde leseren med overraskende bilder', isCorrect: false },
            ],
            solution: 'Synestesien har en filosofisk funksjon: Den viser at virkeligheten ikke er ordnet i pene kategorier. Den synlige verden flyter sammen i en dypere enhet som ordene bare kan antyde.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Symbolismens arv ==========
    {
      id: 'norsk-vg3-1-12-n-section5',
      type: 'text',
      content: `## En langvarig pavirkning

Symbolismen var ikke bare en kortvarig mote. Den la grunnlaget for mye av det 20. arhundrets litteratur - saerlig modernismen.

Tenk pa T.S. Eliots "The Waste Land" (1922), et av modernismens hovedverk. Det er fullt av symboler, uklare sammenhenger, bruddstykker som ikke forklares. Eliot hadde laert av symbolistene. Hans dikt krever at leseren arbeider aktivt for a finne mening - akkurat som Mallarmes.

Virginia Woolfs romaner, med sin subjektive tid og sine flytende bevisstheter, skylder ogsa symbolismen mye. Ideen om at virkeligheten formes av sansene og folelsene, at den ikke finnes objektivt "der ute", var symbolistenes ide for den ble modernistenes.

I lyrikken er pavirkningen enda tydeligere. Hele den moderne poesitradisjonen - fra Rilke til Transtromer, fra Olav H. Hauge til Tor Ulven - bygger pa det symbolistene startet. Ideen om at diktet skal fremkalle, ikke forklare, er blitt en selvfolge.

Og selv i poplarer finner vi arven. Nar Bob Dylan skriver "Tangled Up in Blue" med sine gatefylte bilder, nar Leonard Cohen fyller sangene sine med religiose og erotiske symboler - da fortsetter de en tradisjon som Baudelaire startet for over 150 ar siden.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-12-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-12-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa symbolismens arv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-12-n-quiz5-q0',
            task: 'Hvordan pavirket symbolismen senere litteratur?',
            options: [
              { id: 'a', text: 'Den ble glemt og hadde ingen varig betydning', isCorrect: false },
              { id: 'b', text: 'Den la grunnlaget for modernismen og preger fortsatt lyrikken', isCorrect: true },
              { id: 'c', text: 'Den pavirket bare fransk litteratur', isCorrect: false },
              { id: 'd', text: 'Den forte kun til mer realistisk diktning', isCorrect: false },
            ],
            solution: 'Symbolismen la grunnlaget for modernismen og har pavirket lyrikken helt frem til i dag. Ideen om at diktet skal antyde og fremkalle fremfor a forklare, er blitt en grunnleggende del av moderne poesi.',
          },
          {
            id: 'norsk-vg3-1-12-n-quiz5-q1',
            task: 'Hvilket modernistisk hovedverk er tydelig pavirket av symbolismen?',
            options: [
              { id: 'a', text: 'Hemingways «Den gamle mannen og havet»', isCorrect: false },
              { id: 'b', text: 'Orwells «1984»', isCorrect: false },
              { id: 'c', text: 'T.S. Eliots «The Waste Land»', isCorrect: true },
              { id: 'd', text: 'Kafkas «Prosessen»', isCorrect: false },
            ],
            solution: 'T.S. Eliots «The Waste Land» (1922) er fullt av symboler, uklare sammenhenger og bruddstykker som ikke forklares - teknikker Eliot laerte av symbolistene.',
          },
          {
            id: 'norsk-vg3-1-12-n-quiz5-q2',
            task: 'Hvordan lever symbolismens arv videre i populaerkulturen ifølge teksten?',
            options: [
              { id: 'a', text: 'Gjennom filmadaptasjoner av symbolistiske dikt', isCorrect: false },
              { id: 'b', text: 'Gjennom gatefylte bilder og symboler hos artister som Bob Dylan og Leonard Cohen', isCorrect: true },
              { id: 'c', text: 'Gjennom oversettelser av Mallarmes dikt til popmusikk', isCorrect: false },
              { id: 'd', text: 'Symbolismen har ikke pavirket populaerkulturen', isCorrect: false },
            ],
            solution: 'Teksten trekker linjen fra Baudelaire til Bob Dylans gatefylte bilder i «Tangled Up in Blue» og Leonard Cohens religiose og erotiske symboler - som en fortsettelse av den symbolistiske tradisjonen.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-12-n-summary',
      type: 'text',
      content: `## Oppsummering

**Symbolismen** oppsto i Frankrike pa 1880-tallet som en reaksjon mot realismens direkte meddelelse.

**Sentrale franske symbolister:**
- Charles Baudelaire (forloperen)
- Stephane Mallarme
- Paul Verlaine
- Arthur Rimbaud

**Symbolismens estetikk:**
- Symbolet som vei til dypere sannhet
- "A antyde, ikke navngi"
- Musikalitet i spraker
- Synestesi (sansenes blanding)
- Avvisning av direkte beskrivelse

**Symbolismen i Norge:**
- Sigbjorn Obstfelder (fremste representant)
- Vilhelm Krag (stemningslyrikk)
- Pavirket ogsa Hamsuns prosa
- Ibsens sene dramaer har symbolistiske trekk

**Synestesi:**
- Sanseinntrykk overfores mellom omrader
- "Bla toner", "varm farge"
- Antyder dypere sammenhenger

**Arv:**
- Grunnlag for modernismen
- Preger fortsatt lyrikken
- Ideen om a fremkalle fremfor a forklare`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.13 NARRATIV: Sigbjørn Obstfelder
// ============================================================================

export const CHAPTER_NORSK_VG3_1_13_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-1-13-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '1.13',
  title: 'Sigbjorn Obstfelder',
  subtitle: 'Narrativ versjon',
  description: 'Møt dikteren som folte seg som en fremmed pa jorden - hans korte liv, intense diktning og tidlose sporsmal om menneskets plass i verden.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-1-13',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg3-1-13-n-intro',
      type: 'text',
      content: `## Den fremmede

"Jeg ser paa den hvide himmel, jeg ser paa de graablaa skyer, jeg ser paa den blodige sol."

En mann star og ser pa verden. Han registrerer det han ser - himmelen, skyene, solen. Det er enkle observasjoner, hverdagslige ting.

Men noe er galt. Eller rettere: Alt er galt. For mannen som ser, foler seg ikke hjemme. Verden virker underlig, fremmed, som om han har havnet pa feil sted.

"Jeg er vist kommet paa en feil klode! Her er saa underligt..."

Disse linjene, fra diktet "Jeg ser" av Sigbjorn Obstfelder, er blitt noe av det mest siterte i norsk litteratur. De fanger en folelse mange kjenner igjen - folelsen av a ikke hore til, av a se verden utenfra, av a vaere en fremmed i sitt eget liv.

Obstfelder selv var en fremmed. Han vandret rastløst mellom land og byer, plaget av psykiske problemer, aldri helt til stede. Han levde bare 33 ar. Men i den korte tiden rakk han a skape noen av de mest intense og tidlose diktene i norsk litteratur.`,
    },

    // ========== SEKSJON 1: Et rastløst liv ==========
    {
      id: 'norsk-vg3-1-13-n-section1',
      type: 'text',
      content: `## Vandreren

Sigbjorn Obstfelder ble født 21. november 1866 i Stavanger. Han kom fra en borgerlig familie og begynte a studere filologi ved universitetet. Sa skiftet han til ingeniorfag. Han fullforte ingen av delene.

Dette monsteret - a begynne pa noe, sa gi opp - skulle prege hele livet hans. Obstfelder var rastløs, ute av stand til a slaa seg til ro. Han reiste til Amerika, til Tyskland, til Frankrike, til Danmark. Overalt var han en fremmed.

I 1891 ble han innlagt pa asyl. Vi vet ikke noyaktig hva som plaget ham - diagnosene var annerledes den gang. Men han slet tydelig med noe, en indre uro som ikke ga seg.

Etter asylet fortsatte han a reise. Han skrev - dikt, noveller, et drama, en ufullendt roman. Han var streng mot seg selv, naermest ute av stand til a fullføre noe. Det lille han ga ut, ble mottat med respekt, men nadde ikke et stort publikum.

I 1898 giftet han seg med den danske pianisten Ingeborg Weeke. De fikk en datter, Lili, aret etter. Endelig virket det som om Obstfelder hadde funnet en viss ro.

Men det varte ikke. Den 29. juli 1900 dode han av tuberkulose i Kobenhavn. Han var bare 33 ar gammel.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg3-1-13-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-13-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Obstfelders liv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-13-n-quiz1-q0',
            task: 'Hvor gammel ble Sigbjorn Obstfelder?',
            options: [
              { id: 'a', text: '25 ar', isCorrect: false },
              { id: 'b', text: '33 ar', isCorrect: true },
              { id: 'c', text: '45 ar', isCorrect: false },
              { id: 'd', text: '52 ar', isCorrect: false },
            ],
            solution: 'Obstfelder levde bare 33 ar - han ble fodt i 1866 og dode av tuberkulose i Kobenhavn i 1900.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz1-q1',
            task: 'Hva preget Obstfelders livsmonster?',
            options: [
              { id: 'a', text: 'Han var en stabil og produktiv forfatter hele livet', isCorrect: false },
              { id: 'b', text: 'Han reiste rastløst mellom land og fullforte lite', isCorrect: true },
              { id: 'c', text: 'Han bodde hele livet i Stavanger', isCorrect: false },
              { id: 'd', text: 'Han hadde en lang og suksessrik karriere som ingenipr', isCorrect: false },
            ],
            solution: 'Obstfelder var rastløs og ute av stand til a sla seg til ro. Han begynte pa bade filologi og ingeniorfag uten a fullfoere noen av delene, og reiste mellom Amerika, Tyskland, Frankrike og Danmark.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz1-q2',
            task: 'Hva skjedde med Obstfelder i 1891?',
            options: [
              { id: 'a', text: 'Han ga ut sin forste diktsamling', isCorrect: false },
              { id: 'b', text: 'Han giftet seg', isCorrect: false },
              { id: 'c', text: 'Han ble innlagt pa asyl', isCorrect: true },
              { id: 'd', text: 'Han reiste til Amerika for forste gang', isCorrect: false },
            ],
            solution: 'I 1891 ble Obstfelder innlagt pa asyl. Vi vet ikke noyaktig hva som plaget ham, men han slet tydelig med en indre uro som ikke ga seg.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Diktningen ==========
    {
      id: 'norsk-vg3-1-13-n-section2',
      type: 'text',
      content: `## Det lille som ble

Obstfelders samlede verk er lite i omfang. En diktsamling, "Digte" (1893). To noveller. Et drama, "Korset" (1896). Og en roman, "En prests dagbog", som ble utgitt etter hans dod og aldri ble fullfort.

Men det lille han skrev, er rikt i intensitet. Hvert dikt er komprimert, ladet, fullt av undertekst. Obstfelder arbeidet sakte og var streng mot seg selv. Han kastet mer enn han beholdt.

Diktsamlingen fra 1893 er hovedverket. Her finner vi "Jeg ser", "Regn" og andre dikt som har blitt klassikere. De er korte - noen bare fa linjer. Spraker er enkelt, naermest barnlig. Men virkningen er enorm.

Obstfelder bruker gjentakelse som virkemiddel. "Jeg ser... jeg ser... jeg ser..." Ordene hamres inn, skaper en hypnotisk effekt. Og under den enkle overflaten vibrerer en intens folelse - av fremmedhet, av lengsel, av eksistensiell uro.

Novellene og dramaet fortsetter de samme temaene. Karakterene hans er alltid litt ved siden av, aldri helt til stede. De ser pa verden med et blikk som gjor det velkjente fremmed. De soker kontakt, men finner den ikke.

"En prests dagbog" ble aldri fullfort, men fragmentene som finnes, viser en forfatter som utforsket bevissthetens irrganger med den samme intensiteten som Hamsun - bare mer melankolsk, mer innadvendt.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg3-1-13-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-13-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Obstfelders diktning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-13-n-quiz2-q0',
            task: 'Hva kjennetegner Obstfelders dikteriske stil?',
            options: [
              { id: 'a', text: 'Lange, kompliserte setninger', isCorrect: false },
              { id: 'b', text: 'Enkelt sprak med gjentakelser og dyp undertekst', isCorrect: true },
              { id: 'c', text: 'Tradisjonelle rim og strofeformer', isCorrect: false },
              { id: 'd', text: 'Detaljerte naturskildringer', isCorrect: false },
            ],
            solution: 'Obstfelders dikt har enkelt, naermest barnlig sprak pa overflaten, men med dyp undertekst. Han bruker gjentakelse som virkemiddel for a skape en hypnotisk effekt.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz2-q1',
            task: 'Hva er Obstfelders hovedverk?',
            options: [
              { id: 'a', text: 'Dramaet «Korset»', isCorrect: false },
              { id: 'b', text: 'Romanen «En prests dagbog»', isCorrect: false },
              { id: 'c', text: 'Novellene «To novelletter»', isCorrect: false },
              { id: 'd', text: 'Diktsamlingen «Digte» fra 1893', isCorrect: true },
            ],
            solution: 'Diktsamlingen «Digte» (1893) regnes som Obstfelders hovedverk. Her finner vi klassikerne «Jeg ser» og «Regn» - korte dikt med enorm virkning.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz2-q2',
            task: 'Hva kjennetegner karakterene i Obstfelders noveller og drama?',
            options: [
              { id: 'a', text: 'De er handlekraftige og maalbevisste', isCorrect: false },
              { id: 'b', text: 'De er alltid litt ved siden av, aldri helt til stede', isCorrect: true },
              { id: 'c', text: 'De representerer typiske samfunnsroller', isCorrect: false },
              { id: 'd', text: 'De er realistiske hverdagsskikkelser', isCorrect: false },
            ],
            solution: 'Obstfelders karakterer er alltid litt ved siden av, aldri helt til stede. De ser pa verden med et blikk som gjor det velkjente fremmed, og de soker kontakt uten a finne den.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz2-q3',
            task: 'Hvilken roman av Obstfelder ble aldri fullfort?',
            options: [
              { id: 'a', text: '«Korset»', isCorrect: false },
              { id: 'b', text: '«To novelletter»', isCorrect: false },
              { id: 'c', text: '«En prests dagbog»', isCorrect: true },
              { id: 'd', text: '«Digte»', isCorrect: false },
            ],
            solution: '«En prests dagbog» ble utgitt etter Obstfelders dod og ble aldri fullfort. Fragmentene som finnes, viser en forfatter som utforsket bevissthetens irrganger med stor intensitet.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Jeg ser - en analyse ==========
    {
      id: 'norsk-vg3-1-13-n-section3',
      type: 'text',
      content: `## Pa feil klode

La oss se naermere pa Obstfelders mest berømte dikt, "Jeg ser" fra 1893.

Diktet er bygget opp av tre parallelle sekvenser. Forst ser jeg-et pa himmelen, skyene, solen. Sa pa husene, vinduene, kirketarnet. Sa pa menneskene - de velklaedde herrene, de smilende damene, de ludende hestene.

For hver sekvens registrerer dikteren det han ser med tilsynelatende noytralitet. Det er bare observasjoner. Men de folges av refleksjoner: "Dette er altsaa verden... Dette er altsaa jorden... Dette er altsaa menneskenes hjem."

Det lille ordet "altsaa" er noykkelen. Det uttrykker forundring, kanskje skepsis. Som om jeg-et ikke helt kan tro det det ser. Er dette virkelig verden? Er dette virkelig hjem?

Og sa kommer den berømte sluttlinjen: "Jeg er vist kommet paa en feil klode! Her er saa underligt..."

Med ett snus alt pa hodet. Jeg-et ser ikke lenger pa verden som en fremmed - det er en fremmed. Det horer ikke hjemme her. Det har havnet pa feil sted.

Denne folelsen - av a vaere fremmed i verden, av a se det selvfolgelige som underlig - er kanskje den mest moderne av alle folelser. Den forespeiler 1900-tallets eksistensialisme. Obstfelder var der forst.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg3-1-13-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-13-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa «Jeg ser»:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-13-n-quiz3-q0',
            task: 'Hvordan er diktet «Jeg ser» strukturert?',
            options: [
              { id: 'a', text: 'Som en sammenhengende fortelling', isCorrect: false },
              { id: 'b', text: 'Tre parallelle sekvenser: himmel, jord, mennesker', isCorrect: true },
              { id: 'c', text: 'Som en dialog mellom to personer', isCorrect: false },
              { id: 'd', text: 'Kronologisk fra morgen til kveld', isCorrect: false },
            ],
            solution: 'Diktet er bygget opp av tre parallelle sekvenser der jeg-et forst ser pa himmelen, sa pa jorden (hus, vinduer), og til slutt pa menneskene. Hver sekvens folges av en refleksjon.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz3-q1',
            task: 'Hvilket lite ord er noykkelen til a forsta diktet «Jeg ser»?',
            options: [
              { id: 'a', text: '«hvide»', isCorrect: false },
              { id: 'b', text: '«ser»', isCorrect: false },
              { id: 'c', text: '«altsaa»', isCorrect: true },
              { id: 'd', text: '«underligt»', isCorrect: false },
            ],
            solution: 'Ordet «altsaa» er noykkelen. Det uttrykker forundring og skepsis - som om jeg-et ikke helt kan tro det det ser. «Dette er altsaa verden» - den lille tvilen som gjennomsyrer hele diktet.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz3-q2',
            task: 'Hva uttrykker sluttlinjen «Jeg er vist kommet paa en feil klode»?',
            options: [
              { id: 'a', text: 'At dikteren onsker a reise til verdensrommet', isCorrect: false },
              { id: 'b', text: 'At dikteren er forvirret etter en lang reise', isCorrect: false },
              { id: 'c', text: 'At dikteren kritiserer bylivet', isCorrect: false },
              { id: 'd', text: 'En dyp folelse av fremmedhet og av a ikke hore til i verden', isCorrect: true },
            ],
            solution: 'Sluttlinjen uttrykker en eksistensiell fremmedfolelse - jeg-et ser ikke bare pa verden som en fremmed, det er en fremmed. Det horer ikke hjemme her. Denne folelsen forespeiler 1900-tallets eksistensialisme.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Tematikken ==========
    {
      id: 'norsk-vg3-1-13-n-section4',
      type: 'text',
      content: `## De store temaene

Gjennom hele Obstfelders forfatterskap kretser de samme temaene. De henger sammen og forsterker hverandre.

Fremmedgjoering er det mest gjennomgaende. Obstfelders jeg-personer foler seg aldri hjemme. De ser verden utenfra, som fremmede observatorer. Det som for andre er selvfolgelig - at man horer til, at man er del av fellesskapet - er for dem en gate.

Ensomhet folger naturlig. Nar man foler seg fremmed, finner man ikke kontakt med andre. Obstfelders karakterer er isolerte, lukket inne i seg selv. De lengter etter naerhet, men nar de aldri frem.

Lengsel er et eget tema - en udefinert lengsel etter noe annet, noe mer, noe som ikke kan settes ord pa. Kanskje er det kjærlighet, kanskje er det mening, kanskje er det bare en tilstand av fred. Men det forblir uoppnaelig.

Angst ligger under overflaten - ikke angst for noe bestemt, men en eksistensiell uro overfor tilvaerelsens grunnvilkar. Hvorfor er jeg her? Hva er meningen? Sporsmaalene faar aldri svar.

Disse temaene gjor Obstfelder til en forloperen for eksistensialismen. Nar Sartre og Camus senere skrev om fremmedgjoering og absurditet, var de inne pa samme territorium som den norske dikteren hadde utforsket et halvt arhundre for.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg3-1-13-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-13-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Obstfelders tematikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-13-n-quiz4-q0',
            task: 'Hvilket hovedtema preger Obstfelders forfatterskap?',
            options: [
              { id: 'a', text: 'Sosial kritikk av samfunnsforhold', isCorrect: false },
              { id: 'b', text: 'Naturskildringer fra Norge', isCorrect: false },
              { id: 'c', text: 'Fremmedgjoering og eksistensiell uro', isCorrect: true },
              { id: 'd', text: 'Kjærlighetsforviklinger', isCorrect: false },
            ],
            solution: 'Fremmedgjoering er det mest gjennomgaende temaet hos Obstfelder - folelsen av a ikke hore til, av a se verden utenfra. Dette kobles til ensomhet, lengsel og eksistensiell angst.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz4-q1',
            task: 'Hvordan henger temaene ensomhet og fremmedgjoering sammen hos Obstfelder?',
            options: [
              { id: 'a', text: 'De har ingen sammenheng', isCorrect: false },
              { id: 'b', text: 'Nar man foler seg fremmed, finner man ikke kontakt med andre', isCorrect: true },
              { id: 'c', text: 'Ensomheten forer til fremmedgjoering', isCorrect: false },
              { id: 'd', text: 'Begge skyldes fattigdom', isCorrect: false },
            ],
            solution: 'Nar man foler seg fremmed, finner man ikke kontakt med andre. Obstfelders karakterer er isolerte og lukket inne i seg selv. De lengter etter naerhet, men nar aldri frem.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz4-q2',
            task: 'Hvilken filosofisk retning forespeiler Obstfelders tematikk?',
            options: [
              { id: 'a', text: 'Positivismen', isCorrect: false },
              { id: 'b', text: 'Marxismen', isCorrect: false },
              { id: 'c', text: 'Romantikken', isCorrect: false },
              { id: 'd', text: 'Eksistensialismen', isCorrect: true },
            ],
            solution: 'Obstfelders temaer om fremmedgjoering og absurditet forespeiler eksistensialismen. Da Sartre og Camus skrev om dette pa 1900-tallet, var de inne pa samme territorium som Obstfelder hadde utforsket et halvt arhundre for.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz4-q3',
            task: 'Hva kjennetegner «lengselen» som tema hos Obstfelder?',
            options: [
              { id: 'a', text: 'En lengsel etter a reise til utlandet', isCorrect: false },
              { id: 'b', text: 'En klar lengsel etter en bestemt person', isCorrect: false },
              { id: 'c', text: 'En udefinert lengsel etter noe som ikke kan settes ord pa', isCorrect: true },
              { id: 'd', text: 'En lengsel etter barndomshjemmet i Stavanger', isCorrect: false },
            ],
            solution: 'Lengselen hos Obstfelder er udefinert - rettet mot noe annet, noe mer, noe som ikke kan settes ord pa. Kanskje kjærlighet, kanskje mening, kanskje bare en tilstand av fred. Men det forblir uoppnaelig.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Betydningen ==========
    {
      id: 'norsk-vg3-1-13-n-section5',
      type: 'text',
      content: `## En stemme som vokser

I sin samtid var Obstfelder ikke videre kjent. Diktsamlingen solgte darlig. Kritikerne var respektfulle, men entusiasmen uteble. Han dode ung og fattig, naermest glemt.

Men sa skjedde noe. Etter hans dod begynte ryktet a vokse. Nye generasjoner oppdaget ham. Hans dikt ble inkludert i antologier, sitert, analysert. "Jeg ser" ble pensum pa skolen. Obstfelder ble en klassiker.

Hvorfor? Kanskje fordi temaene hans ble stadig mer aktuelle. Det 20. arhundret var fremmedgjoringens arhundre. Verdenskrigene, urbaniseringen, sekulariseringen - alt bidro til a forsterke folelsen av a vaere fremmed i verden. Obstfelder hadde fanget dette for det skjedde.

Hans stil har ogsa holdt seg. Den ekstreme enkelheten, gjentakelsene, den dype underteksten - dette er moderne lyrikk for modernismen offisielt kom. Obstfelder pekte fremover, mot en diktning som stolte pa antydning fremfor forklaring.

I dag regnes han som en av de viktigste norske dikterne. Det er paradoksalt: Mannen som folte seg som en fremmed pa jorden, har funnet en varig plass i den. Hans vers om a vaere pa feil klode leses av generasjon etter generasjon - og hver gang finner lesere som kjenner seg igjen.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg3-1-13-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-13-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa Obstfelders betydning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg3-1-13-n-quiz5-q0',
            task: 'Hvorfor har Obstfelders diktning fatt okt betydning etter hans dod?',
            options: [
              { id: 'a', text: 'Fordi han ble populaer i utlandet', isCorrect: false },
              { id: 'b', text: 'Fordi temaene ble stadig mer aktuelle gjennom 1900-tallet', isCorrect: true },
              { id: 'c', text: 'Fordi staten bestemte at han skulle vaere pa pensum', isCorrect: false },
              { id: 'd', text: 'Fordi han var Hamsuns venn', isCorrect: false },
            ],
            solution: 'Obstfelders temaer - fremmedgjoering, ensomhet, eksistensiell uro - ble stadig mer aktuelle gjennom 1900-tallet. Han hadde fanget en moderne erfaring for den ble allmen.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz5-q1',
            task: 'Hvordan ble Obstfelder mottat i sin samtid?',
            options: [
              { id: 'a', text: 'Han ble umiddelbart hyllet som en stor dikter', isCorrect: false },
              { id: 'b', text: 'Han ble sterkt kritisert og avvist', isCorrect: false },
              { id: 'c', text: 'Kritikerne var respektfulle, men diktsamlingen solgte darlig', isCorrect: true },
              { id: 'd', text: 'Han var Norges mest populaere forfatter', isCorrect: false },
            ],
            solution: 'I sin samtid var Obstfelder ikke videre kjent. Diktsamlingen solgte darlig, og kritikerne var respektfulle men uten entusiasme. Han dode ung og fattig, naermest glemt.',
          },
          {
            id: 'norsk-vg3-1-13-n-quiz5-q2',
            task: 'Hva gjor Obstfelders stil moderne for modernismens tid?',
            options: [
              { id: 'a', text: 'Hans bruk av tradisjonelle rim og vers', isCorrect: false },
              { id: 'b', text: 'Hans detaljerte realistiske skildringer', isCorrect: false },
              { id: 'c', text: 'Hans lange og komplekse romaner', isCorrect: false },
              { id: 'd', text: 'Den ekstreme enkelheten og stotten pa antydning fremfor forklaring', isCorrect: true },
            ],
            solution: 'Obstfelders ekstreme enkelhet, gjentakelser og dype undertekst er moderne lyrikk for modernismen offisielt kom. Han pekte fremover mot en diktning som stolte pa antydning fremfor forklaring.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg3-1-13-n-summary',
      type: 'text',
      content: `## Oppsummering

**Sigbjorn Obstfelder** (1866-1900) regnes som Norges fremste symbolist og en viktig forloperen for modernismen.

**Biografi:**
- Født i Stavanger 1866
- Rastløst liv med mange reiser
- Innlagt pa asyl 1891
- Gift 1898 med Ingeborg Weeke
- Dode av tuberkulose 1900, 33 ar gammel

**Verk:**
- "Digte" (1893) - diktsamlingen med "Jeg ser"
- "To novelletter" (1895)
- "Korset" (1896) - drama
- "En prests dagbog" (1900, posthumt) - ufullendt roman

**Litteraere kjennetegn:**
- Enkel overflate med dyp undertekst
- Gjentakelse som virkemiddel
- Fragmentarisk form
- Symbolistisk stil

**Tematikk:**
- Fremmedgjoering
- Ensomhet
- Lengsel
- Eksistensiell angst

**Betydning:**
- Norges fremste symbolist
- Forloperen for eksistensialismen
- Fatt stadig storre anerkjennelse etter sin dod
- "Jeg ser" er blitt en norsk klassiker`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG3_NARRATIV_DEL3_CHAPTERS = [
  CHAPTER_NORSK_VG3_1_9_NARRATIV,
  CHAPTER_NORSK_VG3_1_10_NARRATIV,
  CHAPTER_NORSK_VG3_1_11_NARRATIV,
  CHAPTER_NORSK_VG3_1_12_NARRATIV,
  CHAPTER_NORSK_VG3_1_13_NARRATIV,
];
