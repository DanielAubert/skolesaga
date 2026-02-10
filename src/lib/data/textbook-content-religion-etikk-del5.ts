/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Religion og etikk VG3
 *
 * Seksjon 5: Livssyn og menneskerettigheter (Kapittel 5.1–5.6)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1: Humanisme og ateisme
// ============================================================================

const CHAPTER_RELIGION_ETIKK_5_1: TextbookChapter = {
  id: 'religion-etikk-5-1',
  courseId: 'religion-etikk',
  title: 'Humanisme og ateisme',
  chapterNumber: '5.1',
  estimatedMinutes: 20,
  content: [
    {
      id: 're-5-1-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Ikke alle mennesker forholder seg til tilværelsen gjennom en religiøs ramme. Mange finner mening, moral og fellesskap uten å tro på en gud eller et overnaturlig vesen. I dette kapittelet ser vi nærmere på sekulær humanisme som livssyn, ateisme og agnostisisme som posisjoner, og noen av de mest innflytelsesrike religionskritikerne i vestlig idéhistorie. Vi undersøker hvordan disse tradisjonene begrunner etikk, menneskeverd og samfunnsansvar uten religiøse premisser.',
    },
    {
      id: 're-5-1-def-1',
      type: 'definition',
      title: 'Sekulær humanisme',
      content:
        'Sekulær humanisme er et livssyn som setter mennesket i sentrum. Det bygger på fornuft, vitenskap og erfaring som grunnlag for kunnskap, og på menneskerettighetene og medmenneskelighet som grunnlag for etikk. Sekulær humanisme avviser overnaturlige forklaringer og mener at mennesket selv har ansvar for å skape mening og et godt samfunn.',
    },
    {
      id: 're-5-1-text-1',
      type: 'text',
      title: 'Humanismens røtter',
      content:
        'Humanismen har dype røtter i europeisk idéhistorie. Allerede i antikken finner vi filosofer som Protagoras, som hevdet at «mennesket er alle tings mål». I renessansen blomstret humanistiske idealer med vekt på individets verdighet, klassisk dannelse og kritisk tenkning. Opplysningstiden på 1700-tallet forsterket dette med idealer om fornuft, frihet og likhet.\n\nDen moderne sekulære humanismen vokste frem på 1800- og 1900-tallet som et alternativ til religiøse livssyn. Den skiller seg fra den bredere humanistiske tradisjonen ved å eksplisitt avvise gudsforestillinger og overnaturlige forklaringer. Samtidig fastholder den at mennesket har iboende verdighet og at etikk kan begrunnes rasjonelt.',
    },
    {
      id: 're-5-1-def-2',
      type: 'definition',
      title: 'Human-Etisk Forbund',
      content:
        'Human-Etisk Forbund (HEF) ble stiftet i Norge i 1956 og er den største livssynsorganisasjonen utenfor Den norske kirke. Forbundet arbeider for humanistiske verdier, livssynslikestilling og tilbyr seremoniordninger som navnefest, konfirmasjon (humanistisk konfirmasjon) og gravferd. HEF er tilsluttet den internasjonale humanistbevegelsen gjennom Humanists International.',
    },
    {
      id: 're-5-1-example-1',
      type: 'example',
      title: 'Humanistisk konfirmasjon',
      content:
        'Hvert år velger tusenvis av norske ungdommer humanistisk konfirmasjon i regi av Human-Etisk Forbund. Kurset fokuserer på etikk, menneskerettigheter, kritisk tenkning og filosofi. Ungdommene deltar i diskusjoner om livets store spørsmål uten at svarene er gitt på forhånd. Seremonien markerer overgangen til en mer voksen tilværelse og feirer den enkeltes evne til å tenke selvstendig og ta ansvar for egne valg.',
    },
    {
      id: 're-5-1-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva er et sentralt kjennetegn ved sekulær humanisme?',
      options: [
        'Den bygger på guddommelig åpenbaring som kunnskapskilde',
        'Den setter mennesket i sentrum og bygger på fornuft og vitenskap',
        'Den avviser at mennesket har noen form for verdighet',
        'Den mener at moral bare kan begrunnes religiøst',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-1-def-3',
      type: 'definition',
      title: 'Ateisme og agnostisisme',
      content:
        'Ateisme er posisjonen at det ikke finnes noen gud eller guder. En ateist avviser aktivt gudsforestillinger. Agnostisisme er posisjonen at vi ikke kan vite sikkert om det finnes en gud eller ikke. En agnostiker mener at spørsmålet om Guds eksistens er uavklart eller uavklarbart. Begge posisjonene finnes i mange varianter, fra milde til sterke former.',
    },
    {
      id: 're-5-1-text-2',
      type: 'text',
      title: 'Nyanser i gudsspørsmålet',
      content:
        'Det er viktig å forstå at ateisme og agnostisisme ikke er det samme, selv om de ofte forveksles. En sterk ateist hevder med overbevisning at det ikke finnes noen gud. En svak ateist mangler simpelthen tro på en gud, uten å hevde å ha bevist at ingen gud finnes. En agnostiker kan leve som om det ikke finnes noen gud (agnostisk ateist), eller holde spørsmålet helt åpent.\n\nDet er heller ikke slik at alle som ikke er religiøse, er ateister. Mange mennesker har et uavklart eller likegyldig forhold til gudsspørsmålet, noe som noen ganger kalles apatheisme. Andre kan ha en personlig spiritualitet uten å tilhøre noen organisert religion.',
    },
    {
      id: 're-5-1-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva skiller agnostisisme fra ateisme?',
      options: [
        'Agnostisisme er en religion, ateisme er et livssyn',
        'Agnostikeren mener vi ikke kan vite sikkert om Gud finnes, ateisten avviser Guds eksistens',
        'Agnostisisme betyr det samme som ateisme',
        'Ateisten er usikker, agnostikeren er sikker',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-1-text-3',
      type: 'text',
      title: 'Religionskritikk i vestlig idéhistorie',
      content:
        'Fra 1800-tallet utviklet flere tenkere systematisk kritikk av religion. Denne kritikken tok ulike former og hadde ulike motiver, men til felles hadde den at religion ble analysert og utfordret med filosofiske og vitenskapelige verktøy. Fire tenkere har vært særlig innflytelsesrike i denne tradisjonen.',
    },
    {
      id: 're-5-1-def-4',
      type: 'definition',
      title: 'Feuerbachs projeksjonsteori',
      content:
        'Ludwig Feuerbach (1804–1872) hevdet at Gud er en projeksjon av menneskets egne egenskaper og idealer. Når mennesker tilber Gud, tilber de egentlig en idealisert versjon av seg selv. Religion er ifølge Feuerbach et uttrykk for menneskets lengsel etter fullkommenhet, men denne lengselen bør rettes tilbake mot mennesket selv og jordiske forhold.',
    },
    {
      id: 're-5-1-def-5',
      type: 'definition',
      title: 'Marx og religion som opium',
      content:
        'Karl Marx (1818–1883) bygde videre på Feuerbach, men la til en sosial dimensjon. Marx mente at religion fungerer som «opium for folket» – en trøst som demper smerten ved sosial undertrykkelse, men som samtidig hindrer folk i å kjempe for reell endring. Religion legitimerer ifølge Marx urettferdige maktstrukturer ved å love belønning i et liv etter døden.',
    },
    {
      id: 're-5-1-def-6',
      type: 'definition',
      title: 'Nietzsches «Gud er død»',
      content:
        'Friedrich Nietzsche (1844–1900) proklamerte at «Gud er død», ikke som en faktapåstand, men som en diagnose av den vestlige kulturen: Troen på Gud hadde mistet sin kraft som grunnlag for moral og mening. Nietzsche mente dette var en enorm utfordring, fordi hele det vestlige verdigrunnlaget hvilte på kristendommen. Mennesket måtte nå skape egne verdier.',
    },
    {
      id: 're-5-1-def-7',
      type: 'definition',
      title: 'Freuds religionskritikk',
      content:
        'Sigmund Freud (1856–1939) tolket religion psykologisk. Han mente at gudsforestillingen er en illusjon som springer ut av barnets behov for en beskyttende farsfigur. Religion gir trygghet i en utrygg verden, men er ifølge Freud et uttrykk for umodenhet. Et voksent, rasjonelt menneske bør ifølge Freud klare seg uten slike illusjoner.',
    },
    {
      id: 're-5-1-example-2',
      type: 'example',
      title: 'Religionskritikk i praksis',
      content:
        `Religionskritikken fra 1800-tallet har hatt varig innflytelse. Marx' analyse brukes fremdeles i sosiologisk religionsforskning for å studere hvordan religion kan legitimere makt. Freuds perspektiver har inspirert religionspsykologien, selv om mange av hans spesifikke teorier er omstridt. Samtidig har religiøse tenkere svart på denne kritikken. For eksempel har teologer påpekt at Marx' analyse overser religionens rolle i frigjøringsbevegelser, som i borgerrettsbevegelsen i USA eller frigjøringsteologien i Latin-Amerika.`,
    },
    {
      id: 're-5-1-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva mente Feuerbach med at Gud er en projeksjon?',
      options: [
        'At Gud finnes, men bare som et bilde på en vegg',
        'At mennesker skaper gudsforestillingen ut fra egne idealer og egenskaper',
        'At religion er et bevisst bedrag fra presteskapet',
        'At Gud er en vitenskapelig hypotese',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-1-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave',
      content:
        'Sammenlign religionskritikken til Marx og Freud. Hva er likt og hva er ulikt i deres tilnærming? Diskuter også om kritikken deres er like relevant i dag som da den ble formulert.',
      exercises: [],
    },
    {
      id: 're-5-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Sekulær humanisme er et livssyn som bygger på fornuft, vitenskap og medmenneskelighet uten religiøse premisser. Human-Etisk Forbund er den viktigste humanistiske organisasjonen i Norge. Ateisme og agnostisisme representerer ulike posisjoner i gudsspørsmålet. Religionskritikere som Feuerbach, Marx, Nietzsche og Freud har analysert religion fra filosofiske, sosiale og psykologiske perspektiver og bidratt til å forme den sekulære tenkningens utvikling. Denne kritikken har vært innflytelsesrik, men har også blitt møtt med motargumenter fra religiøse tenkere.',
    },
    {
      id: 're-5-1-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Gjør rede for sekulær humanisme som livssyn. Forklar hvordan humanismen begrunner etikk uten religion, og drøft om en slik begrunnelse er tilstrekkelig. Trekk inn synspunkter fra både humanistisk og religiøst hold.',
    },
    {
      id: 're-5-1-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Nietzsche sa at «Gud er død». Forklar hva han mente med dette utsagnet. Diskuter hvilke konsekvenser det kan ha for moral og mening dersom samfunnet mister et felles religiøst grunnlag.',
      exercises: [],
    },
  ],
};

// ============================================================================
// KAPITTEL 5.2: Eksistensialisme og meningssøken
// ============================================================================

const CHAPTER_RELIGION_ETIKK_5_2: TextbookChapter = {
  id: 'religion-etikk-5-2',
  courseId: 'religion-etikk',
  title: 'Eksistensialisme og meningssøken',
  chapterNumber: '5.2',
  estimatedMinutes: 20,
  content: [
    {
      id: 're-5-2-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Hva gir livet mening? Er mennesket fritt, eller er vi styrt av krefter utenfor vår kontroll? Eksistensialismen er en filosofisk retning som setter slike spørsmål i sentrum. Den oppsto i en tid preget av krig, usikkerhet og oppbrudd fra tradisjonelle verdier. I dette kapittelet ser vi på tre sentrale eksistensialistiske tenkere – Kierkegaard, Sartre og Camus – og deres ulike svar på spørsmålet om frihet, ansvar og mening.',
    },
    {
      id: 're-5-2-def-1',
      type: 'definition',
      title: 'Eksistensialisme',
      content:
        'Eksistensialisme er en filosofisk retning som setter den enkeltes eksistens, frihet og ansvar i sentrum. Eksistensialistene er opptatt av hva det vil si å være menneske i en verden uten gitte svar. Et sentralt prinsipp hos mange eksistensialister er at «eksistens går forut for essens» – det betyr at mennesket ikke har en forhåndsbestemt natur, men skaper seg selv gjennom sine valg.',
    },
    {
      id: 're-5-2-text-1',
      type: 'text',
      title: 'Kierkegaard – eksistensialismens far',
      content:
        'Søren Kierkegaard (1813–1855) regnes ofte som eksistensialismens grunnlegger, selv om begrepet ble brukt først senere. Kierkegaard var kritisk til den abstrakte filosofien i sin samtid, særlig Hegels systemtenkning. Han mente at filosofien hadde glemt det viktigste: den enkeltes konkrete, levde erfaring.\n\nKierkegaard beskrev tre eksistensstadier som mennesket kan bevege seg gjennom. Det estetiske stadiet er preget av nytelse og øyeblikkets gleder. Det etiske stadiet innebærer ansvar, forpliktelse og moralske valg. Det religiøse stadiet er et troens sprang der mennesket overgir seg til Gud. For Kierkegaard var dette siste stadiet det høyeste, men det krever et irrasjonelt sprang – et valg som ikke kan begrunnes med fornuft alene.\n\nKierkegaard skiller seg fra senere eksistensialister ved å være dypt religiøs. Hans eksistensialisme er kristen: frihet og angst henger sammen med forholdet til Gud.',
    },
    {
      id: 're-5-2-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva mente Kierkegaard med «troens sprang»?',
      options: [
        'At troen kan bevises vitenskapelig',
        'At mennesket må ta et irrasjonelt valg om å tro på Gud, fordi troen ikke kan begrunnes med fornuft alene',
        'At religion er et lavere stadium enn etikken',
        'At mennesket automatisk blir religiøst gjennom oppdragelse',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-2-def-2',
      type: 'definition',
      title: 'Eksistensiell frihet og angst',
      content:
        'Eksistensiell angst er ifølge eksistensialistene en grunnleggende erfaring som følger av menneskets frihet. Når vi innser at vi er radikalt frie – at ingen ting bestemmer våre valg for oss – oppstår en svimmelhet eller angst. Denne angsten er ikke en sykdom, men en naturlig reaksjon på frihetens byrde. Den tvinger oss til å ta ansvar for vårt eget liv.',
    },
    {
      id: 're-5-2-text-2',
      type: 'text',
      title: 'Sartre – radikal frihet og ansvar',
      content:
        'Jean-Paul Sartre (1905–1980) er kanskje den mest kjente eksistensialisten. Han formulerte det berømte prinsippet «eksistens går forut for essens». Med dette mente han at mennesket ikke har en forhåndsbestemt natur eller mening. Vi kastes inn i verden uten bruksanvisning og må selv skape vår identitet gjennom valgene vi tar.\n\nFor Sartre er mennesket «dømt til å være fritt». Selv det å ikke velge er et valg. Denne radikale friheten innebærer et tilsvarende radikalt ansvar: Vi kan ikke skylde på Gud, skjebnen, genene eller samfunnet for den vi er. Sartre kalte forsøket på å flykte fra dette ansvaret for «vond tro» (mauvaise foi).\n\nSartre var ateist og mente at Guds fravær gjør friheten enda mer absolutt. Uten en Gud som har bestemt hva mennesket skal være, er det helt opp til oss selv. Dette er både befriende og skremmende.',
    },
    {
      id: 're-5-2-example-1',
      type: 'example',
      title: 'Vond tro i hverdagen',
      content:
        'Sartre brukte eksemplet med en kelner som spiller rollen som kelner så overbevisende at han later som om det er hele hans identitet. Han gjemmer seg bak rollen for å slippe å forholde seg til sin egen frihet. Et annet eksempel kan være en person som sier «jeg kan ikke noe for at jeg er slik» eller «det ligger i genene mine». Ifølge Sartre er dette vond tro – et forsøk på å fornekte at man alltid har et valg, selv om valget kan være vanskelig.',
    },
    {
      id: 're-5-2-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva mente Sartre med «vond tro» (mauvaise foi)?',
      options: [
        'At all religiøs tro er ond',
        'At mennesker lyver bevisst for å lure andre',
        'At mennesker flykter fra sin egen frihet ved å late som de ikke har noe valg',
        'At ateisme er den eneste sanne posisjonen',
      ],
      correctAnswer: 2,
      exercises: [],
    },
    {
      id: 're-5-2-text-3',
      type: 'text',
      title: 'Camus – det absurde og opprøret',
      content:
        'Albert Camus (1913–1960) delte mange av eksistensialismens spørsmål, selv om han selv avviste merkelappen «eksistensialist». Camus var opptatt av det absurde – den grunnleggende konflikten mellom menneskets lengsel etter mening og en verden som ikke gir noe svar.\n\nI essayet «Myten om Sisyfos» brukte Camus den greske myten om Sisyfos, som er dømt til å rulle en stein opp en bakke i all evighet, bare for å se den rulle ned igjen. For Camus er dette et bilde på menneskets situasjon. Likevel konkluderer han med at «vi må forestille oss Sisyfos lykkelig». Mening skapes ikke gjennom et endelig mål, men gjennom selve kampen og engasjementet.\n\nCamus avviste både religiøse og ideologiske løsninger på det absurde. Han mente at verken Gud eller politiske utopier kan fjerne absurditeten. I stedet forfektet han opprøret – å leve fullt ut i møte med meningsløsheten, med solidaritet og medmenneskelighet som ledestjerner.',
    },
    {
      id: 're-5-2-def-3',
      type: 'definition',
      title: 'Det absurde',
      content:
        'Hos Camus betegner det absurde spenningen mellom menneskets dype behov for mening og orden, og universets taushet og likegyldighet. Det absurde oppstår i møtet mellom mennesket og verden – det er verken i mennesket alene eller i verden alene, men i forholdet mellom dem. Camus mente at vi verken skal flykte fra det absurde gjennom religion eller gi opp gjennom selvmord, men leve modig midt i det.',
    },
    {
      id: 're-5-2-example-2',
      type: 'example',
      title: 'Meningssøken i litteraturen',
      content:
        `Eksistensialismens spørsmål gjenspeiles i mye av 1900-tallets litteratur. Sartres roman «Kvalmen» beskriver en mann som plutselig opplever tilværelsens meningsløshet. Camus' «Den fremmede» handler om en mann som lever uten å engasjere seg i tilværelsens konvensjoner, og som først i møte med døden finner en form for aksept. Disse verkene viser hvordan eksistensielle spørsmål ikke bare er abstrakt filosofi, men berører konkrete, menneskelige erfaringer.`,
    },
    {
      id: 're-5-2-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva er «det absurde» ifølge Camus?',
      options: [
        'At livet er morsomt og meningsløst',
        'Spenningen mellom menneskets behov for mening og universets taushet',
        'At religion er absurd',
        'At filosofi er unødvendig',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-2-text-4',
      type: 'text',
      title: 'Tre svar på meningsspørsmålet',
      content:
        'De tre tenkerne gir ulike svar på spørsmålet om mening. Kierkegaard finner mening i troen på Gud – et personlig, lidenskapelig forhold som overskrider fornuften. Sartre mener at mennesket selv skaper mening gjennom frie valg og engasjement – det finnes ingen mening som er gitt på forhånd. Camus mener at mening ikke kan finnes i noen endelig forstand, men at mennesket kan leve meningsfullt gjennom opprør, solidaritet og tilstedeværelse i øyeblikket.\n\nTil tross for forskjellene deler de tre en grunnleggende overbevisning: At hvert enkelt menneske må forholde seg aktivt og ærlig til spørsmålet om mening. Passivitet og selvbedrag er fienden, enten man er troende eller ateist.',
    },
    {
      id: 're-5-2-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave',
      content:
        'Sammenlign Kierkegaards og Sartres syn på frihet. Hvilken rolle spiller Gud i deres tenkning, og hvordan påvirker dette synet på ansvar?',
      exercises: [],
    },
    {
      id: 're-5-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Eksistensialismen setter den enkeltes eksistens, frihet og ansvar i sentrum. Kierkegaard la grunnlaget med sin vektlegging av subjektiv erfaring og troens sprang. Sartre utviklet en ateistisk eksistensialisme der mennesket er radikalt fritt og må skape sin egen mening. Camus konfronterte det absurde og fant en vei gjennom opprør og solidaritet. Alle tre utfordrer oss til å ta ansvar for våre egne liv og møte tilværelsens spørsmål med ærlighet og engasjement.',
    },
    {
      id: 're-5-2-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Camus hevdet at «vi må forestille oss Sisyfos lykkelig». Gjør rede for hva han mente med dette. Drøft om det er mulig å finne mening i livet uten å tro på en høyere mening eller et endelig mål. Trekk inn perspektiver fra minst to av tenkerne i dette kapittelet.',
      exercises: [],
    },
    {
      id: 're-5-2-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Eksistensialismen har hatt stor innflytelse på kunst, litteratur og samfunnsdebatt. Velg et eksempel fra populærkultur, film eller litteratur som du mener berører eksistensialistiske temaer. Forklar hvilke eksistensialistiske ideer du finner, og drøft om de gir et dekkende bilde av eksistensialismen.',
      exercises: [],
    },
  ],
};

// ============================================================================
// KAPITTEL 5.3: Religionsfrihet og menneskerettigheter
// ============================================================================

const CHAPTER_RELIGION_ETIKK_5_3: TextbookChapter = {
  id: 'religion-etikk-5-3',
  courseId: 'religion-etikk',
  title: 'Religionsfrihet og menneskerettigheter',
  chapterNumber: '5.3',
  estimatedMinutes: 22,
  content: [
    {
      id: 're-5-3-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Religionsfrihet regnes som en grunnleggende menneskerettighet. Men hva innebærer denne friheten egentlig? Betyr den at alle skal kunne praktisere sin religion uten begrensninger? Og hva skjer når religionsfrihet kommer i konflikt med andre rettigheter? I dette kapittelet ser vi på de viktigste internasjonale avtalene som beskytter religionsfrihet, og drøfter noen av de vanskeligste dilemmaene knyttet til religionsfrihetens grenser.',
    },
    {
      id: 're-5-3-def-1',
      type: 'definition',
      title: 'Religionsfrihet',
      content:
        'Religionsfrihet er retten til å ha, velge, endre eller forkaste en religion eller et livssyn, samt retten til å utøve sin tro alene eller i fellesskap med andre. Religionsfrihet omfatter også retten til ikke å ha en religion. Denne friheten har to dimensjoner: en indre (retten til å tro hva man vil) og en ytre (retten til å praktisere sin tro). Den indre dimensjonen er absolutt, mens den ytre kan begrenses under visse omstendigheter.',
    },
    {
      id: 're-5-3-text-1',
      type: 'text',
      title: 'FNs verdenserklæring om menneskerettigheter – artikkel 18',
      content:
        'FNs verdenserklæring om menneskerettigheter ble vedtatt i 1948, i kjølvannet av andre verdenskrig og holocaust. Artikkel 18 slår fast:\n\n«Enhver har rett til tanke-, samvittighets- og religionsfrihet. Denne rett omfatter frihet til å skifte religion eller tro, og frihet til enten alene eller sammen med andre, og offentlig eller privat, å gi uttrykk for sin religion eller tro gjennom undervisning, utøvelse, tilbedelse og etterlevelse.»\n\nDette er en av de mest vidtrekkende formuleringene i erklæringen. Den beskytter ikke bare retten til å tilhøre en religion, men også retten til å skifte religion – noe som er kontroversielt i deler av verden der frafall fra religion kan straffes.',
    },
    {
      id: 're-5-3-def-2',
      type: 'definition',
      title: 'FNs konvensjon om sivile og politiske rettigheter (SP) artikkel 18',
      content:
        'SP artikkel 18 utdyper og forsterker religionsfriheten fra verdenserklæringen. Den er juridisk bindende for stater som har ratifisert konvensjonen. Artikkelen fastslår at ingen skal utsettes for tvang som innskrenker friheten til å ha eller ta til seg en religion eller tro etter eget valg. Den slår også fast at foreldre har rett til å sikre at barna får religiøs og moralsk oppdragelse i samsvar med foreldrenes overbevisning.',
    },
    {
      id: 're-5-3-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva omfatter religionsfrihet ifølge FNs verdenserklæring artikkel 18?',
      options: [
        'Bare retten til å tro på Gud',
        'Retten til å ha, skifte eller forkaste religion, og til å utøve sin tro offentlig eller privat',
        'Bare retten til privat religionsutøvelse',
        'Retten til å tvinge andre til å følge ens egen religion',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-3-text-2',
      type: 'text',
      title: 'Den europeiske menneskerettighetskonvensjonen (EMK)',
      content:
        'Den europeiske menneskerettighetskonvensjonen (EMK) ble vedtatt i 1950 av Europarådet. Artikkel 9 beskytter tanke-, samvittighets- og religionsfriheten. EMK er særlig viktig fordi den håndheves av Den europeiske menneskerettighetsdomstolen (EMD) i Strasbourg, som kan dømme stater som bryter rettighetene.\n\nEMK artikkel 9 har to ledd. Første ledd beskytter den absolutte indre friheten til å ha en tro eller overbevisning. Andre ledd åpner for at den ytre religionsutøvelsen kan begrenses, men bare dersom begrensningen er fastsatt ved lov, er nødvendig i et demokratisk samfunn, og tjener et legitimt formål som offentlig sikkerhet, orden, helse, moral eller andres rettigheter og friheter.',
    },
    {
      id: 're-5-3-def-3',
      type: 'definition',
      title: 'Begrensninger i religionsfriheten',
      content:
        'Den ytre religionsfriheten kan begrenses dersom tre vilkår er oppfylt: (1) begrensningen må ha hjemmel i lov, (2) den må tjene et legitimt formål (som offentlig sikkerhet, helse eller andres rettigheter), og (3) den må være nødvendig i et demokratisk samfunn. Den indre religionsfriheten – retten til å tro hva man vil – kan derimot aldri begrenses.',
    },
    {
      id: 're-5-3-example-1',
      type: 'example',
      title: 'Religionsfrihet i Norge',
      content:
        'I Norge er religionsfriheten beskyttet av Grunnloven § 16 og menneskerettsloven, som inkorporerer EMK i norsk rett. Historisk var Norge et land med sterke bånd mellom stat og kirke. Først i 2012 ble Den norske kirke formelt skilt fra staten, selv om den fortsatt har en særstilling i Grunnloven. I dag er Norge et mangfoldig samfunn der tros- og livssynssamfunn mottar statlig støtte, og der religionsfrihet er et sentralt prinsipp i lovgivningen.',
    },
    {
      id: 're-5-3-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hvilke tre vilkår må være oppfylt for å begrense ytre religionsutøvelse etter EMK?',
      options: [
        'Lovhjemmel, legitimt formål og nødvendighet i et demokratisk samfunn',
        'Flertallsbeslutning, økonomisk grunnlag og tradisjon',
        'Regjeringsbeslutning, mediestøtte og folkelig oppslutning',
        'Religiøs begrunnelse, historisk praksis og statlig godkjenning',
      ],
      correctAnswer: 0,
      exercises: [],
    },
    {
      id: 're-5-3-text-3',
      type: 'text',
      title: 'Religionsfrihet i praksis – grenser og utfordringer',
      content:
        'Religionsfrihet er sjelden et ukomplisert spørsmål. I praksis oppstår det mange situasjoner der religionsfrihet kolliderer med andre rettigheter eller samfunnshensyn. Disse dilemmaene har ingen enkle svar, og ulike demokratiske land har valgt ulike løsninger.',
    },
    {
      id: 're-5-3-example-2',
      type: 'example',
      title: 'Religiøse plagg og symboler',
      content:
        'Spørsmålet om religiøse plagg og symboler i det offentlige rom har vært gjenstand for intens debatt i mange europeiske land. Frankrike har innført forbud mot ansiktsdekkende plagg i det offentlige rom og mot religiøse symboler i offentlige skoler. Tilhengere argumenterer for at dette fremmer likestilling, sekularisme og samhørighet. Kritikere mener at forbudet rammer religiøse minoriteter uforholdsmessig og begrenser deres religionsfrihet. Andre land, som Storbritannia, har valgt en mer liberal tilnærming. Debatten illustrerer spenningen mellom ulike verdier: religionsfrihet, likestilling, sekularisme og kulturell identitet.',
    },
    {
      id: 're-5-3-example-3',
      type: 'example',
      title: 'Samvittighetsfrihet og profesjonsutøvelse',
      content:
        'Et annet dilemma oppstår når religiøst begrunnede overbevisninger kommer i konflikt med profesjonskrav. Kan en lege nekte å utføre abort med begrunnelse i sin tro? Kan en offentlig ansatt nekte å vie likekjønnede par? I Norge har man i hovedsak landet på at profesjonsplikter går foran personlige overbevisninger når man utfører offentlige oppgaver, men det finnes reservasjonsordninger på noen områder. Ulike synspunkter finnes: Noen mener samvittighetsfrihet må respekteres også i yrkeslivet, mens andre mener at offentlige tjenester må være tilgjengelige for alle uavhengig av den ansattes tro.',
    },
    {
      id: 're-5-3-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hvorfor er spørsmålet om religiøse plagg i det offentlige rom kontroversielt?',
      options: [
        'Fordi alle land er enige om at religiøse plagg bør forbys',
        'Fordi det berører spenningen mellom religionsfrihet, likestilling og sekularisme',
        'Fordi religiøse plagg alltid er en sikkerhetsrisiko',
        'Fordi EMK forbyr alle religiøse symboler',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-3-text-4',
      type: 'text',
      title: 'Blasfemi, hatefulle ytringer og religionskritikk',
      content:
        'Forholdet mellom ytringsfrihet og religionsfrihet er et annet krevende spørsmål. Kan man kritisere, satirisere eller til og med håne andres religion? Mange land har avskaffet blasfemilover, mens andre opprettholder dem. I Norge ble blasfemiparagrafen opphevet i 2015.\n\nYtringsfrihetens forsvarere mener at religionskritikk – også skarp og provoserende – er en viktig del av et fritt samfunn. Andre peker på at hatefulle ytringer rettet mot religiøse grupper kan bidra til diskriminering og undertrykking, og at slike ytringer bør begrenses. Det norske straffebudet mot hatefulle ytringer (strl. § 185) verner om religiøse grupper, men skiller mellom kritikk av en religion og hets mot personer på grunn av deres religion.',
    },
    {
      id: 're-5-3-text-5',
      type: 'text',
      title: 'Forfølgelse og manglende religionsfrihet globalt',
      content:
        'Selv om religionsfrihet er en anerkjent menneskerettighet, er den langt fra en realitet overalt. Ifølge internasjonale rapporter lever store deler av verdens befolkning i land med betydelige begrensninger på religionsfriheten. I noen land straffes frafall fra statsreligionen med fengsel eller død. Religiøse minoriteter kan oppleve diskriminering, trakassering eller direkte forfølgelse. Organisasjoner som FN, Amnesty International og Forum 18 dokumenterer og arbeider mot brudd på religionsfriheten verden over.',
    },
    {
      id: 're-5-3-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave',
      content:
        'Forklar forskjellen mellom den indre og den ytre dimensjonen av religionsfriheten. Gi eksempler på situasjoner der den ytre religionsfriheten kan komme i konflikt med andre rettigheter.',
      exercises: [],
    },
    {
      id: 're-5-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Religionsfrihet er en grunnleggende menneskerettighet beskyttet av FNs verdenserklæring, SP-konvensjonen, EMK og Norges grunnlov. Friheten har en indre dimensjon (retten til å tro) som er absolutt, og en ytre dimensjon (retten til å praktisere) som kan begrenses under strenge vilkår. I praksis oppstår vanskelige dilemmaer når religionsfrihet kolliderer med andre rettigheter og samfunnshensyn, som i spørsmål om religiøse plagg, samvittighetsfrihet og forholdet mellom ytringsfrihet og religionsvern. Globalt er manglende religionsfrihet fortsatt et alvorlig problem.',
    },
    {
      id: 're-5-3-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Gjør rede for religionsfrihetens vern i internasjonale menneskerettighetsdokumenter. Drøft deretter om religionsfrihet bør være absolutt, eller om det finnes situasjoner der den med rette kan begrenses. Bruk konkrete eksempler i drøftingen, og sørg for å presentere ulike synspunkter.',
      exercises: [],
    },
    {
      id: 're-5-3-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'I Norge ble blasfemiparagrafen opphevet i 2015. Diskuter argumentene for og mot blasfemilover. Er det riktig at man skal kunne kritisere og satirisere religion fritt, eller bør det finnes grenser? Trekk inn perspektiver fra både religionsfrihet og ytringsfrihet.',
      exercises: [],
    },
  ],
};

// ============================================================================
// KAPITTEL 5.4: Sekularisme og religion i det offentlige rom
// ============================================================================

const CHAPTER_RELIGION_ETIKK_5_4: TextbookChapter = {
  id: 'religion-etikk-5-4',
  courseId: 'religion-etikk',
  title: 'Sekularisme og religion i det offentlige rom',
  chapterNumber: '5.4',
  estimatedMinutes: 22,
  content: [
    {
      id: 're-5-4-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Hvordan bør forholdet mellom religion og stat organiseres? Skal staten være nøytral overfor alle livssyn, eller kan den gi plass til religiøse uttrykk i det offentlige rom? Spørsmålet om sekularisme handler om grunnleggende prinsipper for hvordan et mangfoldig samfunn kan innrettes. I dette kapittelet ser vi på ulike modeller for forholdet mellom stat og religion, religionens plass i skolen og debatten om religiøse symboler i det offentlige rom.',
    },
    {
      id: 're-5-4-def-1',
      type: 'definition',
      title: 'Sekularisme',
      content:
        'Sekularisme er prinsippet om at stat og religion skal være atskilt. Begrepet brukes på ulike måter. I vid forstand innebærer sekularisme at politiske beslutninger skal fattes på ikke-religiøst grunnlag og at staten ikke skal favorisere noen bestemt religion eller livssyn. Sekularisme er ikke det samme som ateisme: En sekulær stat tar ikke stilling til om Gud finnes, men organiserer seg slik at borgerne fritt kan ha ulike trosoppfatninger.',
    },
    {
      id: 're-5-4-text-1',
      type: 'text',
      title: 'To modeller: statssekulær og livssynsåpen',
      content:
        'Det finnes ulike måter å organisere forholdet mellom stat og religion på. To hovedmodeller skiller seg ut i europeisk sammenheng.\n\nDen statssekulære modellen, slik vi finner den i Frankrike (laïcité), innebærer at religion i størst mulig grad holdes utenfor det offentlige rom. Staten er strengt nøytral, og religiøse symboler og uttrykk skal ikke prege offentlige institusjoner som skoler, rettsvesen og forvaltning. Begrunnelsen er at det offentlige rom skal være et felles, nøytralt rom der alle borgere møtes som likeverdige, uavhengig av tro.\n\nDen livssynsåpne modellen, som Norge i økende grad har beveget seg mot, innebærer at staten anerkjenner og gir rom for religiøst og livssynsmessig mangfold i det offentlige rom. Staten er ikke nøytral i den forstand at religion er usynlig, men i den forstand at ulike tros- og livssynssamfunn behandles likt. Begrunnelsen er at religion er en viktig del av mange menneskers identitet, og at et inkluderende samfunn bør gi rom for dette mangfoldet.\n\nBegge modellene har styrker og svakheter. Den statssekulære modellen kan kritiseres for å usynliggjøre religiøse minoriteter og for i praksis å favorisere majoritetsbefolkningens kulturelle normer. Den livssynsåpne modellen kan kritiseres for å gjøre det vanskelig å trekke grenser og for å kunne gi religiøse grupper uforholdsmessig innflytelse.',
    },
    {
      id: 're-5-4-example-1',
      type: 'example',
      title: 'Frankrike og Norge – to tilnærminger',
      content:
        'I Frankrike forbyr en lov fra 2004 elever å bære synlige religiøse symboler i offentlige skoler, inkludert hijab, kippa og store kors. Begrunnelsen er prinsippet om laïcité – at skolen skal være et nøytralt rom. I Norge har man valgt en annen tilnærming: Elever kan bære religiøse symboler fritt, og KRLE-faget underviser om ulike religioner og livssyn. Begge tilnærmingene har tilhengere og motstandere, og debatten berører fundamentale spørsmål om frihet, likhet og tilhørighet.',
    },
    {
      id: 're-5-4-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva er hovedforskjellen mellom den statssekulære og den livssynsåpne modellen?',
      options: [
        'Den statssekulære modellen er ateistisk, den livssynsåpne er kristen',
        'Den statssekulære holder religion utenfor det offentlige rom, den livssynsåpne gir rom for religiøst mangfold i det offentlige',
        'Det er ingen forskjell mellom modellene',
        'Den livssynsåpne modellen forbyr all religion i offentligheten',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-4-text-2',
      type: 'text',
      title: 'Religion i skolen – KRLE-faget',
      content:
        'Religionsundervisningen i norsk skole har gjennomgått store endringer. Fra å være et fag med kristen forkynnelse har det utviklet seg til KRLE – kristendom, religion, livssyn og etikk. Faget skal gi kunnskap om ulike religioner og livssyn uten å fremme noen bestemt tro.\n\nKRLE-faget har vært gjenstand for debatt. Kritikere har pekt på at kristendommen fortsatt har en dominerende plass i læreplanen, noe som kan oppleves som favorisering. Andre mener det er naturlig at kristendommen har større plass fordi den har vært den dominerende religionen i norsk kultur og historie. Noen religiøse grupper har ønsket seg fritak fra deler av undervisningen, mens andre har argumentert for at felles religionskunnskap er viktig for å bygge gjensidig forståelse.\n\nDen europeiske menneskerettighetsdomstolen har behandlet klager mot det norske religionsfaget (KRL-dommen i 2007) og konkluderte med at faget ikke i tilstrekkelig grad sikret likebehandling av ulike livssyn. Dette førte til endringer i faget.',
    },
    {
      id: 're-5-4-def-2',
      type: 'definition',
      title: 'KRLE-faget',
      content:
        'KRLE (kristendom, religion, livssyn og etikk) er et obligatorisk skolefag i norsk grunnskole. Faget skal gi elevene kunnskap om kristendom, islam, jødedom, hinduisme, buddhisme, andre religioner, sekulære livssyn og etikk. Undervisningen skal være objektiv, kritisk og pluralistisk, og skal ikke være forkynnende. Faget har vært gjenstand for debatt om balansen mellom ulike religioner og livssyn.',
    },
    {
      id: 're-5-4-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva kritiserte Den europeiske menneskerettighetsdomstolen ved det norske religionsfaget i 2007?',
      options: [
        'At faget underviste om for mange religioner',
        'At faget ikke i tilstrekkelig grad sikret likebehandling av ulike livssyn',
        'At faget var for sekulært',
        'At faget ikke underviste om kristendom',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-4-text-3',
      type: 'text',
      title: 'Religiøse symboler i det offentlige rom',
      content:
        'Debatten om religiøse symboler i det offentlige rom er en av de mest synlige konfliktene knyttet til sekularisme. Diskusjonen handler om alt fra hijab og nikab til kors i rettssaler og klesregler for offentlig ansatte.\n\nTilhengere av å tillate religiøse symboler argumenterer med religionsfrihet, ytringsfrihet og retten til å uttrykke sin identitet. De mener at et forbud vil ramme religiøse minoriteter uforholdsmessig og bidra til marginalisering. Tilhengere av begrensninger argumenterer med nøytralitet, likestilling og behovet for at offentlige institusjoner fremstår som upartiske.\n\nI Norge har debatten særlig dreid seg om politiuniform og dommerkappe. Spørsmålet om hvorvidt politi og dommere skal kunne bære religiøse hodeplagg har engasjert sterkt. Ulike politiske partier og organisasjoner har inntatt ulike posisjoner, og debatten berører dype spørsmål om identitet, tillit og representasjon i et mangfoldig samfunn.',
    },
    {
      id: 're-5-4-example-2',
      type: 'example',
      title: 'Hijabdebatten i Norge',
      content:
        'I 2009 foreslo daværende politidirektør å tillate hijab som del av politiuniformen. Forslaget utløste en intens debatt. De som støttet forslaget, argumenterte med at det ville øke rekrutteringen fra minoritetsmiljøer og gjøre politiet mer representativt. De som var imot, mente at politiuniformen skal uttrykke nøytralitet og at religiøse symboler undergraver tilliten til politiets upartiskhet. Forslaget ble til slutt trukket tilbake. Debatten viste tydelig at spørsmålet om religiøse symboler i det offentlige rom ikke har enkle svar, og at ulike verdier som religionsfrihet, nøytralitet og inkludering kan trekke i ulike retninger.',
    },
    {
      id: 're-5-4-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hvilket argument brukes ofte for å tillate religiøse symboler hos offentlig ansatte?',
      options: [
        'At religion bør være usynlig i det offentlige rom',
        'At religiøse symboler er en del av religionsfrihet og identitetsuttrykk, og at forbud kan marginalisere minoriteter',
        'At alle offentlig ansatte bør ha lik uniform uten unntak',
        'At kun kristne symboler bør tillates fordi Norge har kristen tradisjon',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-4-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave',
      content:
        'Gjør rede for forskjellen mellom den statssekulære og den livssynsåpne modellen. Hvilke fordeler og ulemper har hver modell for et mangfoldig samfunn?',
      exercises: [],
    },
    {
      id: 're-5-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Sekularisme handler om forholdet mellom stat og religion. Den statssekulære modellen holder religion utenfor det offentlige rom, mens den livssynsåpne modellen gir rom for religiøst mangfold. Begge modellene har styrker og svakheter. I norsk sammenheng har KRLE-faget og debatten om religiøse symboler vært sentrale arenaer for diskusjon om sekularisme. Disse debattene berører grunnleggende spørsmål om frihet, likhet og tilhørighet i et pluralistisk samfunn, og det finnes legitime synspunkter på flere sider.',
    },
    {
      id: 're-5-4-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Drøft om religiøse symboler bør tillates i offentlige institusjoner (for eksempel politiet eller domstolene). Presenter argumenter fra begge sider, og ta stilling til hva du mener er den beste løsningen. Begrunn svaret ditt med henvisning til menneskerettigheter og ulike sekularismemodeller.',
      exercises: [],
    },
    {
      id: 're-5-4-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'KRLE-faget skal gi en «objektiv, kritisk og pluralistisk» fremstilling av ulike religioner og livssyn. Diskuter om dette er mulig å oppnå i praksis. Hvilke utfordringer kan oppstå, og hvordan kan faget best bidra til gjensidig forståelse i et mangfoldig samfunn?',
      exercises: [],
    },
  ],
};

// ============================================================================
// KAPITTEL 5.5: Urfolksreligioner og naturbaserte livssyn
// ============================================================================

const CHAPTER_RELIGION_ETIKK_5_5: TextbookChapter = {
  id: 'religion-etikk-5-5',
  courseId: 'religion-etikk',
  title: 'Urfolksreligioner og naturbaserte livssyn',
  chapterNumber: '5.5',
  estimatedMinutes: 20,
  content: [
    {
      id: 're-5-5-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Lenge før verdensreligionene oppsto, hadde mennesker over hele kloden utviklet religiøse forestillinger knyttet til naturen, forfedrene og den åndelige verden. Disse tradisjonene, ofte kalt urfolksreligioner eller naturreligioner, lever videre i mange kulturer den dag i dag. I dette kapittelet ser vi nærmere på samisk religion som en urfolksreligion med røtter i vår egen del av verden, på urfolksreligioner globalt, og på moderne naturbaserte livssyn som har hentet inspirasjon fra eldre tradisjoner.',
    },
    {
      id: 're-5-5-def-1',
      type: 'definition',
      title: 'Urfolksreligioner',
      content:
        'Urfolksreligioner er religiøse tradisjoner som har vokst frem hos urfolk over hele verden. De er ofte muntlig overleverte, tett knyttet til et bestemt landskap og naturmiljø, og preget av et helhetlig syn der menneske, natur og åndeverden henger sammen. Urfolksreligioner er ikke én religion, men et mangfold av lokale tradisjoner med visse fellestrekk, som animisme, sjamanisme, forfedrekult og ritualer knyttet til årstidene.',
    },
    {
      id: 're-5-5-text-1',
      type: 'text',
      title: 'Samisk religion – den førkristne tradisjonen',
      content:
        'Samene, Nordens urfolk, hadde en rik religiøs tradisjon før kristendommen ble innført gjennom misjonsvirksomhet fra 1600-tallet. Den samiske religionen var nært knyttet til livet i naturen og bygde på en forståelse av at alt i tilværelsen henger sammen – mennesker, dyr, landskap og åndelige krefter.\n\nSentralt i samisk religion sto noaiden, den samiske sjamanen. Noaiden fungerte som formidler mellom menneskenes verden og åndeverden. Ved hjelp av runebommen (den samiske trommen) og joik kunne noaiden entre en transetilstand og reise til åndeverden for å søke kunnskap, helbrede syke eller sikre gode jaktforhold.\n\nNaturen var hellig i samisk religiøs tenkning. Bestemte steder i landskapet – fjell, innsjøer, store steiner – ble ansett som særlig kraftfulle. Sieidi var hellige steiner eller naturformasjoner der det ble lagt ned offergaver. Disse stedene ble behandlet med dyp respekt og var viktige samlingspunkter for religiøs praksis.',
    },
    {
      id: 're-5-5-def-2',
      type: 'definition',
      title: 'Noaidi',
      content:
        'Noaidi er den samiske betegnelsen for sjaman. Noaiden var en religiøs spesialist som fungerte som formidler mellom menneskenes verden og åndeverden. Ved hjelp av runebommen (goavddis), joik og transe kunne noaiden kommunisere med ånder, helbrede sykdom, forutsi fremtiden og ivareta fellesskapets åndelige behov. Noaidene spilte en sentral rolle i samisk samfunnsliv frem til kristningen.',
    },
    {
      id: 're-5-5-def-3',
      type: 'definition',
      title: 'Sieidi',
      content:
        'Sieidi er hellige steder i samisk religiøs tradisjon, typisk steiner, fjell eller naturformasjoner med uvanlig form. Sieidi ble betraktet som steder der den åndelige kraften var særlig sterk, og der mennesker kunne komme i kontakt med åndeverden. Det ble lagt ned offergaver ved sieidi for å sikre hell i jakt, fiske og reindrift. Mange sieidi-steder er fortsatt kjent og behandles med respekt.',
    },
    {
      id: 're-5-5-example-1',
      type: 'example',
      title: 'Kristningen av samene',
      content:
        'Fra 1600-tallet drev den dansk-norske og svenske staten aktiv misjonsvirksomhet blant samene. Runebommer ble konfiskert og brent, noaider ble straffet, og samiske religiøse praksiser ble forbudt. Denne prosessen var del av en bredere fornorskningspolitikk som også rammet samisk språk og kultur. Til tross for dette overlevde elementer av den samiske religiøse tradisjonen, ofte blandet med kristne forestillinger. I dag arbeider samiske kulturinstitusjoner med å dokumentere og revitalisere den tradisjonelle religiøse kunnskapen.',
    },
    {
      id: 're-5-5-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva var noaidens rolle i samisk religion?',
      options: [
        'En politisk leder som styrte lokalsamfunnet',
        'En formidler mellom menneskenes verden og åndeverden, som brukte runebomme og joik',
        'En kristen prest som forkynte evangeliet',
        'En lærer som underviste i samisk språk',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-5-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva er en sieidi?',
      options: [
        'En samisk stavkirke',
        'Et hellig sted i naturen, typisk en stein eller naturformasjon, der det ble lagt ned offergaver',
        'En samisk bibel',
        'Et redskap brukt til reindrift',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-5-text-2',
      type: 'text',
      title: 'Urfolksreligioner globalt',
      content:
        'Urfolksreligioner finnes over hele verden og viser et enormt mangfold. Likevel deler mange av dem visse fellestrekk. Animisme – forestillingen om at ting i naturen har en ånd eller sjel – er utbredt i mange urfolkstradisjoner. Forfedrekult, der de avdøde forfedrene æres og anses som viktige veiledere, finnes i mange afrikanske, asiatiske og oseaniske tradisjoner.\n\nI Nord- og Sør-Amerika har urfolk som lakota, navajo, maya og mapuche religiøse tradisjoner med dype røtter. I Australia har aboriginene konseptet «drømmetiden» – en mytisk urtid da forfedrene skapte landskapet og ga lovene for menneskelig sameksistens. I Afrika finnes det hundrevis av ulike religiøse tradisjoner blant ulike folkegrupper.\n\nDisse tradisjonene har til felles at de ofte ser verden som en helhet der menneske, natur og åndeverden er flettet inn i hverandre. De er typisk muntlig overleverte og knyttet til bestemte steder og landskaper.',
    },
    {
      id: 're-5-5-def-4',
      type: 'definition',
      title: 'Animisme',
      content:
        'Animisme er forestillingen om at naturfenomener, dyr, planter, steiner og andre elementer i naturen har en ånd, sjel eller livskraft. Begrepet ble introdusert av den britiske antropologen Edward Tylor på 1870-tallet. Animistiske forestillinger finnes i mange urfolksreligioner verden over. Moderne religionsforskere har nyansert begrepet og peker på at animisme ikke nødvendigvis innebærer at alt har en menneskelignende sjel, men snarere at naturen oppfattes som levende og relasjonell.',
    },
    {
      id: 're-5-5-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva er et fellestrekk ved mange urfolksreligioner?',
      options: [
        'De har et skriftlig hellig dokument som er grunnlaget for troen',
        'De ser verden som en helhet der menneske, natur og åndeverden henger sammen',
        'De har en sentralisert organisasjon med en øverste leder',
        'De avviser alle former for ritualer og seremonier',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-5-text-3',
      type: 'text',
      title: 'Neopaganisme og moderne naturreligion',
      content:
        'Siden 1900-tallet har det vokst frem nye religiøse bevegelser som henter inspirasjon fra førkristne, naturbaserte tradisjoner. Disse kalles ofte neopaganisme eller nyhedendom. Wicca, grunnlagt i England på 1950-tallet, er en av de mest kjente. Wicca kombinerer elementer fra keltisk tradisjon, folketro og esoteriske tradisjoner og legger vekt på naturens sykluser, gudinnedyrkelse og ritualer knyttet til årstidene.\n\nÅsatru er en annen neopaganistisk retning som søker å gjenskape den norrøne religionen. I Island er Ásatrúarfélagið et offisielt registrert trossamfunn. I Skandinavia finnes det flere åsatruorganisasjoner med ulike tilnærminger, fra dem som forsøker å rekonstruere historisk praksis til dem som tilpasser tradisjonen til moderne verdier.\n\nFelles for mange av disse bevegelsene er en vektlegging av naturens hellighet, økologisk bevissthet og skepsis mot monoteistiske religioners dominans. Kritikere peker på at neopaganismen ofte romantiserer fortiden og at forbindelsen til faktiske historiske tradisjoner kan være svak. Noen retninger har også blitt kritisert for forbindelser til nasjonalistiske miljøer, noe de fleste neopaganistiske organisasjoner tar avstand fra.',
    },
    {
      id: 're-5-5-example-2',
      type: 'example',
      title: 'Årshjulet i wicca',
      content:
        'I wicca markeres åtte høytider gjennom året, ofte kalt «årshjulet». Disse følger naturens syklus: vintersolverv, vårjevndøgn, sommersolverv og høstjevndøgn, samt fire mellomhøytider. Hver høytid feires med ritualer som reflekterer årstidens karakter – mørke og hvile om vinteren, vekst og fruktbarhet om våren og sommeren, høsting og takknemlighet om høsten. Årshjulet illustrerer den tette forbindelsen mellom religiøs praksis og naturens rytmer som kjennetegner mange naturreligiøse bevegelser.',
    },
    {
      id: 're-5-5-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave',
      content:
        'Sammenlign den samiske førkristne religionen med et eksempel på en urfolksreligion fra en annen del av verden. Hva er likt og hva er ulikt?',
      exercises: [],
    },
    {
      id: 're-5-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Urfolksreligioner er mangfoldige tradisjoner som ofte er preget av nær forbindelse mellom menneske, natur og åndeverden. Den samiske religionen, med noaiden, runebommen og sieidi, er en viktig del av vår egen kulturarv og ble undertrykt gjennom kristningen. Globalt finner vi urfolksreligioner med fellestrekk som animisme, forfedrekult og naturhellighet. Moderne neopaganistiske bevegelser som wicca og åsatru søker å gjenopplive naturbasert religiøsitet, men har et komplekst forhold til de historiske tradisjonene de henter inspirasjon fra.',
    },
    {
      id: 're-5-5-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Gjør rede for sentrale trekk ved samisk førkristen religion. Diskuter hvordan kristningen påvirket samisk religiøs praksis, og reflekter over hvilken betydning revitalisering av urfolks religiøse tradisjoner kan ha i dag.',
      exercises: [],
    },
    {
      id: 're-5-5-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Neopaganistiske bevegelser som wicca og åsatru henter inspirasjon fra førkristne tradisjoner. Drøft om slike bevegelser kan betraktes som en videreføring av urfolksreligioner, eller om de representerer noe fundamentalt nytt. Trekk inn eksempler og ulike perspektiver i drøftingen.',
      exercises: [],
    },
  ],
};

// ============================================================================
// KAPITTEL 5.6: Livssynsmangfold og det flerkulturelle samfunn
// ============================================================================

const CHAPTER_RELIGION_ETIKK_5_6: TextbookChapter = {
  id: 'religion-etikk-5-6',
  courseId: 'religion-etikk',
  title: 'Livssynsmangfold og det flerkulturelle samfunn',
  chapterNumber: '5.6',
  estimatedMinutes: 20,
  content: [
    {
      id: 're-5-6-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Norge har i løpet av noen tiår gått fra å være et relativt homogent samfunn til å bli et land med betydelig religiøst og kulturelt mangfold. Innvandring, globalisering og sekularisering har skapt et livssynslandskap der kristne, muslimer, hinduer, buddhister, sikher, humanister og mange andre lever side om side. Hvordan kan et slikt mangfoldig samfunn organiseres? Hvilke muligheter og utfordringer følger med pluralismen? I dette kapittelet ser vi på begreper som pluralisme og toleranse, diskuterer integrering og assimilering, og vurderer mangfold som både ressurs og utfordring.',
    },
    {
      id: 're-5-6-def-1',
      type: 'definition',
      title: 'Pluralisme',
      content:
        'Pluralisme betegner både en faktisk tilstand – at det finnes et mangfold av religioner, livssyn og kulturer i et samfunn – og et normativt ideal om at dette mangfoldet er verdifullt og bør anerkjennes. Religiøs pluralisme innebærer at ulike tros- og livssynstradisjoner eksisterer side om side og behandles med respekt. Pluralisme skiller seg fra relativisme: Man trenger ikke mene at alle livssyn er like «sanne» for å anerkjenne at de har rett til å eksistere.',
    },
    {
      id: 're-5-6-def-2',
      type: 'definition',
      title: 'Toleranse',
      content:
        'Toleranse er viljen til å akseptere og tåle synspunkter, praksiser og levemåter man selv kan være uenig i. Toleranse er ikke det samme som likegyldighet eller enighet – tvert imot forutsetter toleranse at det finnes reelle forskjeller og uenigheter. Toleranse har imidlertid grenser: De fleste mener at toleranse ikke innebærer å akseptere handlinger som krenker andre menneskers grunnleggende rettigheter. Spørsmålet om hvor grensen for toleranse går, er et sentralt filosofisk og politisk tema.',
    },
    {
      id: 're-5-6-text-1',
      type: 'text',
      title: 'Toleransens paradoks',
      content:
        'Filosofen Karl Popper formulerte det som kalles «toleransens paradoks»: Dersom et tolerant samfunn tolererer intoleranse uten grenser, vil de intolerante til slutt kunne ødelegge toleransen. Popper mente derfor at et tolerant samfunn har rett og plikt til å sette grenser for intoleranse – ikke med en gang, men dersom intolerante grupper nekter å delta i rasjonell dialog og tyr til vold eller undertrykkelse.\n\nDette paradokset er svært relevant i vår tid. Hvor skal grensen gå mellom å respektere andres rett til å mene og tro det de vil, og å beskytte samfunnets grunnleggende verdier som demokrati, likestilling og menneskerettigheter? Ulike politiske retninger gir ulike svar på dette spørsmålet.',
    },
    {
      id: 're-5-6-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva innebærer «toleransens paradoks» ifølge Karl Popper?',
      options: [
        'At toleranse alltid fører til et bedre samfunn',
        'At et tolerant samfunn må tolerere absolutt alt for å være konsekvent',
        'At ubegrenset toleranse for intoleranse kan føre til at toleransen ødelegges',
        'At toleranse og likegyldighet er det samme',
      ],
      correctAnswer: 2,
      exercises: [],
    },
    {
      id: 're-5-6-text-2',
      type: 'text',
      title: 'Integrering og assimilering',
      content:
        'Når mennesker med ulik bakgrunn skal leve sammen, oppstår spørsmålet om hvordan dette skal organiseres. To begreper står sentralt i denne debatten: integrering og assimilering.\n\nAssimilering innebærer at minoriteter tilpasser seg majoritetskulturen og i praksis gir opp sine egne kulturelle og religiøse særtrekk. Historisk har dette vært den dominerende tilnærmingen i mange land, også i Norge, der fornorskningspolitikken overfor samer og kvener er et tydelig eksempel.\n\nIntegrering innebærer en gjensidig prosess der både minoriteter og majoritet tilpasser seg hverandre. Minoritetene deltar i samfunnets felles institusjoner og følger felles regler, men beholder sine kulturelle og religiøse særtrekk. Samfunnet tilpasser seg på sin side til det nye mangfoldet.\n\nI norsk politisk debatt er det bred enighet om at integrering er å foretrekke fremfor assimilering, men det er uenighet om hva integrering konkret innebærer og hva som kan forventes av henholdsvis minoriteter og majoritet.',
    },
    {
      id: 're-5-6-example-1',
      type: 'example',
      title: 'Tros- og livssynsmangfold i norsk hverdag',
      content:
        'I norske storbyer er livssynsmangfoldet synlig i hverdagen. Moskeer, templer, synagoger og kirker ligger ofte i samme nabolag. Skoleklasser kan bestå av elever med bakgrunn fra mange ulike religioner og livssyn. Arbeidsplasser må forholde seg til ulike religiøse høytider, mat- og klesregler. Dette mangfoldet kan by på praktiske utfordringer, men det gir også muligheter for gjensidig læring og kulturutveksling. For eksempel har feiringen av Eid og Diwali blitt mer synlig i norsk offentlighet, og mange opplever dette som en berikelse av kulturlivet.',
    },
    {
      id: 're-5-6-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva er den viktigste forskjellen mellom integrering og assimilering?',
      options: [
        'Integrering krever at minoriteter gir opp sin kultur, assimilering gir dem lov til å beholde den',
        'Integrering er en gjensidig prosess der begge parter tilpasser seg, assimilering innebærer at minoriteter tilpasser seg majoritetskulturen',
        'Det er ingen forskjell, begrepene betyr det samme',
        'Assimilering er nyere og mer moderne enn integrering',
      ],
      correctAnswer: 1,
      exercises: [],
    },
    {
      id: 're-5-6-text-3',
      type: 'text',
      title: 'Mangfold som ressurs',
      content:
        'Mange argumenterer for at religiøst og kulturelt mangfold er en ressurs for samfunnet. Mangfold kan bidra til kreativitet, innovasjon og nye perspektiver. Kontakt med mennesker som tenker og lever annerledes enn oss selv, kan utfordre fordommer og utvide horisonten. I arbeidslivet kan mangfold gi tilgang til bredere kompetanse og bedre forståelse for ulike markeder og behov.\n\nFor den enkelte kan det å vokse opp i et mangfoldig miljø styrke evnen til perspektivtaking, empati og fleksibilitet. Forskning viser at eksponering for ulike synspunkter kan styrke kritisk tenkning og motvirke gruppetenkning.',
    },
    {
      id: 're-5-6-text-4',
      type: 'text',
      title: 'Mangfold som utfordring',
      content:
        'Samtidig er det viktig å erkjenne at mangfold også kan skape utfordringer. Kulturelle og religiøse forskjeller kan føre til misforståelser, spenninger og konflikter. Ulike syn på kjønnsroller, oppdragelse, ytringsfrihet og individets rettigheter kan kollidere. Noen opplever at rask endring i befolkningssammensetningen truer deres identitet og tilhørighet.\n\nFor å håndtere slike utfordringer kreves det åpen dialog, gjensidig respekt og vilje til å finne felles løsninger. Det kreves også klare rammeverk – som menneskerettighetene og demokratiske spilleregler – som gir felles grunnlag for sameksistens. Forskning på vellykket integrering peker på at sosial kontakt mellom grupper, felles arenaer og rettferdig fordeling av ressurser er avgjørende.',
    },
    {
      id: 're-5-6-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave',
      content: 'Hva peker forskning på som viktig for vellykket integrering?',
      options: [
        'At minoriteter holder seg for seg selv i egne nabolag',
        'At staten bestemmer hvilke religioner som er tillatt',
        'Sosial kontakt mellom grupper, felles arenaer og rettferdig fordeling av ressurser',
        'At alle har samme livssyn og kulturelle bakgrunn',
      ],
      correctAnswer: 2,
      exercises: [],
    },
    {
      id: 're-5-6-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave',
      content:
        'Forklar begrepene pluralisme og toleranse. Gi eksempler på situasjoner der toleransens grenser kan bli satt på prøve i et flerkulturelt samfunn.',
      exercises: [],
    },
    {
      id: 're-5-6-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Norge er blitt et livssynsmangfoldig samfunn der mange ulike religioner og livssyn lever side om side. Pluralisme og toleranse er sentrale verdier for å håndtere dette mangfoldet, men toleransen har grenser som må diskuteres. Integrering, forstått som en gjensidig prosess, er å foretrekke fremfor assimilering. Mangfold kan være en ressurs som beriker samfunnet gjennom nye perspektiver og kompetanse, men det kan også skape utfordringer som krever dialog, felles arenaer og klare rammeverk. Menneskerettighetene og demokratiske verdier gir et felles grunnlag for sameksistens i et pluralistisk samfunn.',
    },
    {
      id: 're-5-6-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Gjør rede for forskjellen mellom integrering og assimilering. Drøft hvilken tilnærming som best ivaretar både minoriteters rettigheter og samfunnets samhold. Bruk eksempler fra norsk kontekst i drøftingen.',
      exercises: [],
    },
    {
      id: 're-5-6-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Diskuter påstanden: «Livssynsmangfold er en styrke for demokratiet.» Presenter argumenter både for og mot, og ta stilling til påstanden. Trekk inn begreper som pluralisme, toleranse og menneskerettigheter i drøftingen.',
      exercises: [],
    },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const RELIGION_ETIKK_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RELIGION_ETIKK_5_1,
  CHAPTER_RELIGION_ETIKK_5_2,
  CHAPTER_RELIGION_ETIKK_5_3,
  CHAPTER_RELIGION_ETIKK_5_4,
  CHAPTER_RELIGION_ETIKK_5_5,
  CHAPTER_RELIGION_ETIKK_5_6,
];
