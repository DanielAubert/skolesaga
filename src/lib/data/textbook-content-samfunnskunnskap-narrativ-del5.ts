/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5 NARRATIV: Politikk og demokrati
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_1_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-1-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.1',
  title: 'Hva er en ideologi?',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende reise inn i politiske ideologier -- hva de er, hvorfor de finnes, og hvordan de former samfunnet vi lever i.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for sentrale politiske ideologier',
    'drøfte hvordan ideologier påvirker politisk debatt',
  ],
  linkedChapterId: 'samfunnskunnskap-5-1',
  content: [
    {
      id: 'samfunnskunnskap-5-1-n-intro',
      type: 'text',
      content: `## Brillene vi ser politikken gjennom

Tenk deg at du og tre venner diskuterer et forslag om å øke skatten for de rikeste i Norge. Den ene vennen sier at det er urettferdig å ta mer fra folk som har jobbet hardt. Den andre mener at vi alle har et ansvar for å dele, slik at alle får like muligheter. Den tredje synes at ting fungerer bra som de er, og at vi ikke bør fikle for mye med systemet.

Uten at dere kanskje vet det, snakker dere ut fra ulike politiske ideologier. En politisk ideologi er nemlig et sammenhengende sett av ideer om hvordan samfunnet bør organiseres. Den gir oss en slags brille vi ser verden gjennom -- en oppfatning om hva som er rettferdig, hvordan økonomien bør styres, og hvilken rolle staten skal ha i livene våre.

Hver ideologi inneholder flere byggesteiner. Den rommer verdier og prinsipper som frihet, likhet eller solidaritet. Den har et syn på menneskenaturen -- er vi grunnleggende egoistiske eller samarbeidsvillige? Den sier noe om hvilken rolle staten bør spille, og den peker mot mål for samfunnet og foreslår hvordan vi kan nå dem.`,
    },
    {
      id: 'samfunnskunnskap-5-1-n-section1',
      type: 'text',
      content: `## Hvorfor ideologier betyr noe

Politiske ideologier er ikke bare abstrakte tankesystemer for filosofer. De påvirker hverdagen din på helt konkrete måter. Når politikere bestemmer hvor mye skatt du skal betale, om du har rett til gratis helsehjelp, eller hvor mye staten skal regulere arbeidslivet, handler det om ideologiske valg.

Ideologiene har fem sentrale kjennetegn. For det første gir de en helhetlig verdensanskuelse -- de forklarer hvorfor ting er som de er og peker mot en ønsket fremtid. For det andre er de normative, som betyr at de ikke bare beskriver virkeligheten, men sier hvordan den bør være. For det tredje er de handlingsorienterte og gir grunnlag for politiske program og konkret handling. For det fjerde er de forenklende -- de gjør en kompleks virkelighet håndterbar. Og for det femte er de konkurrerende -- ulike ideologier kjemper om oppslutning og politisk makt.

Bak de politiske debattene vi hører på nyhetene, ligger noen store spørsmål som ideologiene svarer ulikt på. Hvor mye frihet skal individet ha, og hvor mye likhet bør samfunnet sikre? Hvor mye skal markedet styre økonomien, og hvor mye bør staten regulere? Er individets rettigheter viktigst, eller fellesskapets interesser? Bør samfunnet endres radikalt eller bevares slik det er? Og bør nasjonen prioriteres, eller bør vi tenke globalt?

Et godt eksempel er skattepolitikk. En klassisk liberal vil argumentere for lavest mulig skatter fordi individet bør beholde mest mulig av egen inntekt. En sosialist eller sosialdemokrat vil derimot ønske høyere skatter, særlig for de rike, fordi staten trenger ressurser til omfordeling og velferd. En konservativ vil kanskje foretrekke moderate skatter som finansierer orden og sikkerhet, uten for store endringer. Skattepolitikk handler altså ikke bare om tall -- det handler om hvilken ideologisk brille vi ser gjennom.`,
    },
    {
      id: 'samfunnskunnskap-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-1-n-quiz1-q0',
            task: 'Hva er en politisk ideologi?',
            options: [
              { id: 'a', text: 'En liste over politiske partier', isCorrect: false },
              { id: 'b', text: 'Et sammenhengende sett av ideer om hvordan samfunnet bør organiseres', isCorrect: true },
              { id: 'c', text: 'En vitenskapelig teori om statens opprinnelse', isCorrect: false },
              { id: 'd', text: 'En lov som regulerer politisk virksomhet', isCorrect: false },
            ],
            solution: 'En politisk ideologi er et sammenhengende sett av ideer om hvordan samfunnet bør organiseres. Den inneholder verdier, syn på menneskenaturen, syn på statens rolle, mål for samfunnet og forslag til hvordan målene kan nås.',
          },
          {
            id: 'samfunnskunnskap-5-1-n-quiz1-q1',
            task: 'Hvilket av disse er IKKE et kjennetegn ved politiske ideologier?',
            options: [
              { id: 'a', text: 'De er normative -- de sier hvordan ting bør være', isCorrect: false },
              { id: 'b', text: 'De er vitenskapelig bevist som sanne', isCorrect: true },
              { id: 'c', text: 'De er handlingsorienterte og gir grunnlag for politikk', isCorrect: false },
              { id: 'd', text: 'De forenkler en kompleks virkelighet', isCorrect: false },
            ],
            solution: 'Ideologier er ikke vitenskapelig bevist som sanne. De er verdisystemer som sier noe om hvordan samfunnet bør være, ikke naturlover. Kjennetegnene er at de er normative, handlingsorienterte, forenklende og konkurrerende.',
          },
          {
            id: 'samfunnskunnskap-5-1-n-quiz1-q2',
            task: 'Hvilket motsetningspar handler om hvor mye staten bør blande seg inn i økonomien?',
            options: [
              { id: 'a', text: 'Individ vs. fellesskap', isCorrect: false },
              { id: 'b', text: 'Endring vs. bevaring', isCorrect: false },
              { id: 'c', text: 'Marked vs. stat', isCorrect: true },
              { id: 'd', text: 'Nasjonalt vs. internasjonalt', isCorrect: false },
            ],
            solution: 'Marked vs. stat handler om hvor mye markedet skal styre økonomien versus hvor mye staten bør regulere og omfordele. De andre parene handler om andre dimensjoner av politikken.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket hva politiske ideologier egentlig er. Du har lært at en ideologi er et sammenhengende sett av ideer om hvordan samfunnet bør organiseres, med verdier, syn på menneskenaturen og mål for fremtiden. Ideologiene gir politikken retning, hjelper oss å forstå konflikter, og setter ord på verdier og prioriteringer. De store spørsmålene som skiller ideologiene handler om frihet versus likhet, marked versus stat, individ versus fellesskap, endring versus bevaring, og nasjonalt versus internasjonalt. Ulike ideologier gir ulike svar på konkrete politiske spørsmål som skatt, innvandring og velferd.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2 NARRATIV: De store ideologiene
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_2_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-2-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.2',
  title: 'De store ideologiene',
  subtitle: 'Narrativ versjon',
  description: 'Bli kjent med liberalisme, konservatisme og sosialisme -- de tre ideologiene som har formet moderne politikk.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for liberalisme, konservatisme og sosialisme',
    'sammenligne de store politiske ideologiene',
  ],
  linkedChapterId: 'samfunnskunnskap-5-2',
  content: [
    {
      id: 'samfunnskunnskap-5-2-n-intro',
      type: 'text',
      content: `## Tre ideer som forandret verden

Vi skriver slutten av 1700-tallet. Europa rystes av revolusjon, og de gamle samfunnsstrukturene vakler. Fra denne dramatiske tiden vokser det frem tre store tankesystemer som fortsatt preger politikken i dag: liberalisme, konservatisme og sosialisme. Alle tre har utviklet seg enormt siden den gang, de finnes i mange varianter, og de har til og med lånt ideer fra hverandre. Moderne partier kombinerer ofte elementer fra flere av dem, og de færreste av oss er rendyrkede tilhengere av bare én.

La oss starte med den eldste av de tre.`,
    },
    {
      id: 'samfunnskunnskap-5-2-n-section1',
      type: 'text',
      content: `## Liberalisme -- individets frihet

Liberalismen vokste frem under opplysningstiden på 1600- og 1700-tallet. Kjernen er troen på det frie individet. Tenkere som John Locke, Adam Smith og John Stuart Mill argumenterte for at mennesker er frie, selvstendige individer med naturlige rettigheter som staten ikke kan ta fra dem.

Liberalismens kjerneverdier er individuell frihet, begrenset statsmakt, privat eiendomsrett, markedsøkonomi, likhet for loven og menneskerettigheter. Staten skal beskytte individets rettigheter, men ellers blande seg minst mulig inn i folks liv.

Over tid har liberalismen utviklet seg i ulike retninger. Klassisk liberalisme ønsker en minimal stat, ofte kalt nattvekterstaten, som bare tar seg av de mest grunnleggende fellesoppgavene. Sosialliberalismen, derimot, aksepterer at staten kan gripe inn for å sikre like muligheter -- for eksempel gjennom offentlig utdanning og helsevesen. Nyliberalismen vektlegger marked og privatisering. I Norge finner vi liberale ideer i partier som Venstre, som er sosialliberalt, og Høyre og Frp, som er mer økonomisk liberale.

## Konservatisme -- tradisjon og forsiktighet

Konservatismen oppstod som en reaksjon på den franske revolusjonen i 1789. Tenkere som Edmund Burke så med skrekk på revolusjonens vold og kaos, og argumenterte for at samfunnet ikke bør rives ned og bygges opp på nytt etter abstrakte ideer.

Kjerneverdiene er bevaring av det bestående, tradisjon og kontinuitet, skepsis til raske endringer, respekt for autoriteter og institusjoner, orden og stabilitet, og nasjonale verdier og identitet. Konservative ser på mennesket som ufullkomment og avhengig av fellesskap og tradisjoner for å fungere godt. Staten skal opprettholde orden, men respektere tradisjonelle fellesskap som familie, kirke og lokalsamfunn.

Tradisjonell konservatisme vektlegger institusjoner og nedarvede verdier. Liberalkonservatismen kombinerer konservative verdier med økonomisk liberalisme, mens sosialkonservatismen er opptatt av familien og religiøse verdier. I Norge finner vi konservative ideer særlig i Høyre og KrF.

## Sosialisme -- likhet og solidaritet

Sosialismen vokste frem på 1800-tallet som et svar på industrialiseringens brutale sosiale forhold. Arbeidere jobbet under elendige forhold, barn ble satt i arbeid, og forskjellene mellom fattige og rike var enorme. Karl Marx og Friedrich Engels analyserte kapitalismens urettferdighet, og sosialismen ble arbeiderbevegelsens ideologi.

Kjerneverdiene er likhet, solidaritet, kollektivt eierskap i ulike former, arbeiderbevegelse, omfordeling og en sterk stat. Staten skal aktivt gripe inn for å sikre rettferdig fordeling og motvirke markedets ulikheter.

Den mest radikale varianten, kommunismen, ønsker revolusjonær endring og avskaffelse av privat eiendom. Sosialdemokratiet, derimot, søker gradvis endring gjennom demokrati og aksepterer markedsøkonomi med regulering. Demokratisk sosialisme er radikal, men forblir demokratisk. I Norge representerer Arbeiderpartiet sosialdemokratiet, SV demokratisk sosialisme, og Rødt sosialismen.`,
    },
    {
      id: 'samfunnskunnskap-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-2-n-quiz1-q0',
            task: 'Hvilken ideologi oppstod som en reaksjon på den franske revolusjonen?',
            options: [
              { id: 'a', text: 'Liberalisme', isCorrect: false },
              { id: 'b', text: 'Sosialisme', isCorrect: false },
              { id: 'c', text: 'Konservatisme', isCorrect: true },
              { id: 'd', text: 'Nyliberalisme', isCorrect: false },
            ],
            solution: 'Konservatismen oppstod som en reaksjon på den franske revolusjonen i 1789. Edmund Burke mente at samfunnet ikke burde rives ned og bygges opp på nytt etter abstrakte ideer.',
          },
          {
            id: 'samfunnskunnskap-5-2-n-quiz1-q1',
            task: 'Hva er hovedforskjellen mellom sosialdemokrati og kommunisme?',
            options: [
              { id: 'a', text: 'Sosialdemokrati vil ha mer stat, kommunisme vil ha mindre', isCorrect: false },
              { id: 'b', text: 'Sosialdemokrati søker gradvis endring gjennom demokrati, kommunisme ønsker revolusjon', isCorrect: true },
              { id: 'c', text: 'Kommunisme er mer opptatt av frihet enn sosialdemokrati', isCorrect: false },
              { id: 'd', text: 'De er egentlig det samme', isCorrect: false },
            ],
            solution: 'Sosialdemokrati søker gradvis endring gjennom demokratiske midler og aksepterer markedsøkonomi med regulering. Kommunisme ønsker revolusjonær endring med avskaffelse av privat eiendom og kapitalisme.',
          },
          {
            id: 'samfunnskunnskap-5-2-n-quiz1-q2',
            task: 'Hvordan vil en klassisk liberal typisk se på spørsmålet om fattigdom?',
            options: [
              { id: 'a', text: 'Staten må aktivt omfordele gjennom skatter og velferd', isCorrect: false },
              { id: 'b', text: 'Familien og frivillige organisasjoner bør hjelpe først', isCorrect: false },
              { id: 'c', text: 'Markedet skaper vekst som løfter alle, og for mye velferd gjør folk avhengige', isCorrect: true },
              { id: 'd', text: 'Private bedrifter bør overta alle velferdsoppgaver', isCorrect: false },
            ],
            solution: 'Klassisk liberalisme mener markedet skaper vekst som løfter alle. Staten bør gi folk like muligheter gjennom utdanning, men for mye velferd kan gjøre folk avhengige. En sosialist ville svart A og en konservativ ville svart B.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du blitt kjent med de tre store ideologiene. Liberalismen vektlegger individuell frihet, begrenset statsmakt, markedsøkonomi og menneskerettigheter. Konservatismen vektlegger bevaring av det bestående, tradisjon, orden og skepsis til raske endringer. Sosialismen vektlegger likhet, solidaritet, omfordeling og statlig inngripen mot markedets ulikheter. Alle tre finnes i ulike varianter, og moderne partier kombinerer ofte elementer fra flere ideologier.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3 NARRATIV: Politiske skillelinjer og andre ideologier
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_3_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-3-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.3',
  title: 'Politiske skillelinjer og andre ideologier',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk GAL-TAN-modellen, flere ideologier og de politiske skillelinjene som preger norsk politikk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere politiske skillelinjer i norsk politikk',
    'gjøre rede for andre politiske ideologier',
  ],
  linkedChapterId: 'samfunnskunnskap-5-3',
  content: [
    {
      id: 'samfunnskunnskap-5-3-n-intro',
      type: 'text',
      content: `## Når høyre-venstre ikke er nok

Du har sikkert hørt noen si at et parti er «til venstre» eller «til høyre» i politikken. Denne aksen, som handler om økonomi og statens rolle, er nyttig, men den fanger langt fra opp alt. Moderne politikk har flere dimensjoner som krysser hverandre, og det finnes ideologier som ikke passer pent inn i de tre store vi nettopp lærte om.

Tenk på det slik: To partier kan være helt enige om økonomisk politikk, men stå langt fra hverandre i spørsmål om innvandring, miljø eller verdier. Nye saker som klima, EU-spørsmålet og identitetspolitikk passer ikke alltid inn i de gamle kategoriene. Vi trenger derfor flere verktøy for å forstå det politiske landskapet.`,
    },
    {
      id: 'samfunnskunnskap-5-3-n-section1',
      type: 'text',
      content: `## GAL-TAN -- en ny akse

Et viktig verktøy er GAL-TAN-modellen, som gir oss en akse som går på tvers av høyre-venstre. GAL står for Grønn-Alternativ-Libertær og representerer verdier som miljøvern og bærekraft, personlig frihet i verdispørsmål, åpenhet for nye familieformer, internasjonal orientering, skepsis til tradisjonelle autoriteter, og støtte til mangfold og multikulturalisme.

TAN står for Tradisjonell-Autoritær-Nasjonalistisk og vektlegger nasjonal identitet og suverenitet, tradisjonelle verdier og familieformer, lov og orden, skepsis til innvandring, kritikk av overnasjonale institusjoner som EU, og stabilitet og kontinuitet.

Det fascinerende er at et parti kan være økonomisk til venstre men TAN -- altså for omfordeling, men skeptisk til innvandring. Eller økonomisk til høyre men GAL -- for marked, men også for miljø og liberale verdier. Virkeligheten er altså mer kompleks enn én enkel akse.

## Andre ideologier som utfyller bildet

Ved siden av de tre store ideologiene finnes det flere som spiller viktige roller. Grønn ideologi, også kalt økologisme, har miljøvern som overordnet verdi og er kritisk til ensidig fokus på økonomisk vekst. MDG representerer denne retningen i Norge.

Feminismen arbeider for likestilling mellom kjønnene og har ulike retninger: Liberal feminisme fokuserer på formell likhet, sosialistisk feminisme på økonomiske strukturer, og radikal feminisme på kjønnsmakt.

Nasjonalisme ser nasjonen som det viktigste fellesskapet og kan være alt fra moderat, med vekt på nasjonal identitet, til ekstrem sjåvinisme. Vi skiller mellom civic nasjonalisme, som er basert på statsborgerskap, og etnisk nasjonalisme.

Kristendemokrati bygger på kristen etikk med vekt på familie, solidaritet og subsidiaritet -- at avgjørelser bør tas på lavest mulig nivå. KrF representerer denne retningen i Norge.

Libertarianisme tar den individuelle friheten til det ytterste og ønsker en minimal stat, men skiller seg fra konservatisme ved å også være verdiprogressiv.

## Skillelinjer i norsk politikk

Norsk politikk har vært preget av flere varige skillelinjer. Den økonomiske venstre-høyre-aksen om staten versus markedet er fortsatt viktig. Sentrum-periferi-skillelinjen, som handler om Oslo og storby mot distrikt, har lange røtter og viser seg blant annet i språkstriden mellom nynorsk og bokmål, med Sp som tradisjonelt distriktsparti. Den religiøs-sekulære skillelinjen har preget debatter om abort, alkohol og søndagsåpent, med KrF på den ene siden.

I nyere tid har nye skillelinjer kommet til. Innvandring og integrering setter for eksempel Frp og SV opp mot hverandre, på tvers av den tradisjonelle høyre-venstre-aksen. Miljø og klima skaper en ny front der MDG står mot Frp og Sp. Og EU/EØS-spørsmålet samler Sp, SV og Rødt på nei-siden og Høyre og Venstre på ja-siden, igjen på tvers av andre akser. Norsk politikk er med andre ord en kompleks vev av mange ulike dimensjoner.`,
    },
    {
      id: 'samfunnskunnskap-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-3-n-quiz1-q0',
            task: 'Hva står GAL for i GAL-TAN-modellen?',
            options: [
              { id: 'a', text: 'Generell-Aktiv-Liberal', isCorrect: false },
              { id: 'b', text: 'Grønn-Alternativ-Libertær', isCorrect: true },
              { id: 'c', text: 'Global-Ambisiøs-Likestilt', isCorrect: false },
              { id: 'd', text: 'Gjennomført-Analytisk-Logisk', isCorrect: false },
            ],
            solution: 'GAL står for Grønn-Alternativ-Libertær og representerer verdier som miljøvern, personlig frihet, åpenhet, internasjonalisme og mangfold.',
          },
          {
            id: 'samfunnskunnskap-5-3-n-quiz1-q1',
            task: 'Hvilket parti representerer grønn ideologi i Norge?',
            options: [
              { id: 'a', text: 'Venstre', isCorrect: false },
              { id: 'b', text: 'SV', isCorrect: false },
              { id: 'c', text: 'MDG (Miljøpartiet De Grønne)', isCorrect: true },
              { id: 'd', text: 'Senterpartiet', isCorrect: false },
            ],
            solution: 'MDG (Miljøpartiet De Grønne) representerer grønn ideologi/økologisme i Norge, med miljøvern som overordnet verdi og kritikk av ensidig fokus på økonomisk vekst.',
          },
          {
            id: 'samfunnskunnskap-5-3-n-quiz1-q2',
            task: 'Hvorfor er GAL-TAN-modellen nyttig i tillegg til høyre-venstre-aksen?',
            options: [
              { id: 'a', text: 'Den viser hvilke partier som er størst', isCorrect: false },
              { id: 'b', text: 'Den fanger opp verdispørsmål som ikke handler om økonomi', isCorrect: true },
              { id: 'c', text: 'Den erstatter helt behovet for høyre-venstre-aksen', isCorrect: false },
              { id: 'd', text: 'Den brukes bare i EU-land', isCorrect: false },
            ],
            solution: 'GAL-TAN fanger opp verdispørsmål som innvandring, miljø og identitet som ikke handler om økonomi. Den forklarer hvorfor partier som er enige økonomisk kan være uenige om andre saker.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært at GAL-TAN-modellen gir oss en politisk akse som går på tvers av høyre-venstre og fanger opp verdispørsmål om miljø, identitet og tradisjon. Andre ideologier som grønn ideologi, feminisme, nasjonalisme, kristendemokrati og libertarianisme utfyller de tre store ideologiene. Norsk politikk preges av skillelinjer som økonomisk venstre-høyre, sentrum-periferi, religiøs-sekulær, innvandring og miljø. Partiene skiller seg på mange dimensjoner som krysser hverandre, og velgere har meninger på tvers av tradisjonelle kategorier.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4 NARRATIV: Populisme i vår tid
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_4_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-4-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.4',
  title: 'Populisme i vår tid',
  subtitle: 'Narrativ versjon',
  description: 'Forstå populismens fremmarsj -- fra Trump til Europa -- og hvorfor den utfordrer det liberale demokratiet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte hva populisme er og dens ulike former',
    'reflektere over populismens utfordringer for demokratiet',
  ],
  linkedChapterId: 'samfunnskunnskap-5-4',
  content: [
    {
      id: 'samfunnskunnskap-5-4-n-intro',
      type: 'text',
      content: `## Folket mot eliten

I 2016 stemte britene for å forlate EU, og Donald Trump ble valgt til president i USA. Mange eksperter var sjokkerte. Hva hadde skjedd? Svaret mange pekte på, var populisme -- et begrep som plutselig var på alles lepper.

Populisme er ikke en fullstendig ideologi som liberalisme eller sosialisme. Det er mer en politisk stil eller logikk som kan kombineres med ulike ideologier. Grunnideen er enkel: det finnes en motsetning mellom «folket» -- som er godt, ærlig og hardtarbeidende -- og «eliten» -- som er korrupt, fjern og selvopptatt. Populisten hevder å representere det ekte folket og snakker folkets språk.

Populismens kjennetegn er antielitisme, en fremstilling av folket som en homogen enhet med felles interesser, direkte representasjon gjennom karismatiske ledere, kritikk av mellomliggende institusjoner som partier, medier og domstoler, og forenkling av komplekse problemer. Det er viktig å understreke at populisme ikke er det samme som å være folkelig, at den finnes på både høyre- og venstresiden, og at den ikke nødvendigvis er antidemokratisk, men kan utfordre det liberale demokratiet.`,
    },
    {
      id: 'samfunnskunnskap-5-4-n-section1',
      type: 'text',
      content: `## To sider av samme mynt

Populismen har to hovedformer som skiller seg i hvem de definerer som «eliten» og «folket».

Høyrepopulismen retter skytset mot en kulturell elite -- politikere, akademikere og medier som angivelig har mistet kontakten med vanlige folk. Folket defineres som nasjonen, de som alltid har bodd her. Hovedfiendene er innvandring, globalisering og overnasjonale institusjoner som EU. Eksempler er Frp i Norge, Trump i USA, Le Pen i Frankrike og AfD i Tyskland.

Venstrepopulismen retter skytset mot en økonomisk elite -- de rike og store selskapene. Folket er arbeidere og vanlige folk som holdes nede av kapitalismen. Hovedfiendene er økonomisk ulikhet og kapitalismens maktstrukturer. Eksempler er Podemos i Spania, Syriza i Hellas og Bernie Sanders i USA.

Begge formene kritiserer «systemet», hevder å representere vanlige folk, og bruker ofte karismatiske ledere. Men der høyrepopulismen fokuserer på kultur og identitet, fokuserer venstrepopulismen på økonomi og klasse.

Populismen reiser viktige spørsmål for demokratiet. Den kan undergrave institusjoner som domstoler og medier, forenkle komplekse problemer, føre til flertallstyranni der minoriteters rettigheter settes til side, og skape polarisering med «vi mot dem»-retorikk. Men den representerer også reelle frustrasjoner hos folk som føler seg glemt, den utfordrer en selvtilfreds elite til å lytte, og den kan mobilisere nye stemmer inn i politikken. Populisme er med andre ord både et symptom på problemer i demokratiet og en potensiell trussel mot det.`,
    },
    {
      id: 'samfunnskunnskap-5-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-4-n-quiz1-q0',
            task: 'Hva er den grunnleggende motsetningen i populismen?',
            options: [
              { id: 'a', text: 'Høyre mot venstre', isCorrect: false },
              { id: 'b', text: 'Folket mot eliten', isCorrect: true },
              { id: 'c', text: 'By mot land', isCorrect: false },
              { id: 'd', text: 'Ung mot gammel', isCorrect: false },
            ],
            solution: 'Populismens grunnidé er motsetningen mellom "folket" (godt, ærlig, hardtarbeidende) og "eliten" (korrupt, fjern, selvopptatt). Populisten hevder å representere det ekte folket.',
          },
          {
            id: 'samfunnskunnskap-5-4-n-quiz1-q1',
            task: 'Hva kjennetegner høyrepopulisme til forskjell fra venstrepopulisme?',
            options: [
              { id: 'a', text: 'Høyrepopulisme fokuserer på økonomisk elite og ulikhet', isCorrect: false },
              { id: 'b', text: 'Høyrepopulisme fokuserer på kulturell elite, nasjonal identitet og skepsis til innvandring', isCorrect: true },
              { id: 'c', text: 'Høyrepopulisme ønsker sterkere stat', isCorrect: false },
              { id: 'd', text: 'Høyrepopulisme er ikke kritisk til etablerte institusjoner', isCorrect: false },
            ],
            solution: 'Høyrepopulisme retter kritikk mot en kulturell elite og fokuserer på nasjonal identitet og skepsis til innvandring og globalisering. Venstrepopulisme fokuserer derimot på økonomisk elite og klassekamp.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Du har nå lært at populisme er en politisk stil som bygger på motsetningen mellom «folket» og «eliten», med karismatiske ledere og forenkling av komplekse problemer. Høyrepopulisme fokuserer på kulturell elite og nasjonal identitet, mens venstrepopulisme fokuserer på økonomisk elite og klassekamp. Populismen kan undergrave institusjoner, forenkle komplekse problemer og skape polarisering, men den kan også representere reelle frustrasjoner, utfordre eliter og øke politisk engasjement.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.5 NARRATIV: Grunnloven og maktfordeling
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_5_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-5-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.5',
  title: 'Grunnloven og maktfordeling',
  subtitle: 'Narrativ versjon',
  description: 'Reis tilbake til Eidsvoll i 1814 og forstå hvordan Grunnloven fordeler makten for å beskytte deg.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for Grunnlovens betydning',
    'forklare maktfordelingsprinsippet',
  ],
  linkedChapterId: 'samfunnskunnskap-5-5',
  content: [
    {
      id: 'samfunnskunnskap-5-5-n-intro',
      type: 'text',
      content: `## Dokumentet som bygger Norge

Den 17. mai 1814 samlet 112 menn seg på Eidsvoll for å vedta Norges grunnlov. I en tid da Europa var preget av Napoleonskrigene og stormaktspolitikk, skapte de et av de mest fremtidsrettede dokumentene i sin tid -- inspirert av den amerikanske og den franske revolusjonen. Grunnloven er i dag en av verdens eldste grunnlover som fortsatt er i bruk, og selv om den har blitt endret mange ganger, består grunntrekkene.

Grunnloven er Norges viktigste lov og grunnlaget for hele vårt politiske system. Den fastsetter statens styreform og organisering, fordeler makten mellom statsmaktene, beskytter borgernes grunnleggende rettigheter, og inneholder regler for hvordan den selv kan endres.`,
    },
    {
      id: 'samfunnskunnskap-5-5-n-section1',
      type: 'text',
      content: `## Maktens tredeling

Kjernen i Grunnloven er maktfordelingsprinsippet, en idé som stammer fra den franske tenkeren Montesquieu i 1748. Tanken er enkel men genial: for å hindre at noen får for mye makt, deles statsmakten i tre.

Den lovgivende makten ligger hos Stortinget, med sine 169 folkevalgte representanter. De vedtar lovene og statsbudsjettet og kontrollerer regjeringen. Den utøvende makten ligger hos regjeringen, som leder den daglige styringen av landet, foreslår lover og budsjett, og setter lovene ut i livet. Og den dømmende makten ligger hos domstolene, som avgjør rettstvister, tolker lovene, og kan prøve om lover strider mot Grunnloven, med Høyesterett øverst.

Formålet med denne tredelingen er å hindre maktkonsentrasjon, sikre kontroll og balanse, og beskytte borgerne mot overgrep fra staten.

## Rettighetene dine

Etter en stor revisjon i 2014 inneholder Grunnloven et styrket menneskerettighetskapittel. Her finner vi sivile og politiske rettigheter som ytringsfrihet, religionsfrihet, forsamlings- og foreningsfrihet, stemmerett, rettssikkerhet og vern av privatlivet. Vi finner også økonomiske, sosiale og kulturelle rettigheter som retten til utdanning, retten til arbeid, retten til et sunt miljø og barns rettigheter.

Et viktig prinsipp er at Grunnloven har høyere rang enn vanlige lover. Dersom en vanlig lov strider mot Grunnloven, kan domstolene sette den til side. Dette kalles konstitusjonell prøving og er en viktig sikkerhetsventil i demokratiet.

## Å endre det uforanderlige

Grunnloven er bevisst vanskelig å endre. Et forslag må fremmes i løpet av de tre første stortingsårene i en valgperiode og behandles ikke av det samme Stortinget som foreslår det. Det må altså være et stortingsvalg mellom forslag og vedtak, slik at velgerne indirekte får si sin mening. Og selve vedtaket krever to tredjedels flertall -- minst 113 av 169 representanter.

Hvorfor så vanskelig? Fordi Grunnloven skal være stabil, viktige prinsipper ikke bør endres på impuls, befolkningen skal ha tid til å vurdere endringer, og bred enighet sikrer legitimitet. Grunnlovsrevisjonen i 2014 er et godt eksempel: den tok mange år å forberede, men ble vedtatt med stort flertall og styrket menneskerettighetsvernet betydelig.`,
    },
    {
      id: 'samfunnskunnskap-5-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-5-n-quiz1-q0',
            task: 'Hvilke tre statsmakter inngår i maktfordelingsprinsippet?',
            options: [
              { id: 'a', text: 'Kongen, statsministeren og Stortingspresidenten', isCorrect: false },
              { id: 'b', text: 'Stortinget (lovgivende), regjeringen (utøvende) og domstolene (dømmende)', isCorrect: true },
              { id: 'c', text: 'Kommunene, fylkene og staten', isCorrect: false },
              { id: 'd', text: 'Politiet, forsvaret og domstolene', isCorrect: false },
            ],
            solution: 'De tre statsmaktene er Stortinget (lovgivende makt), regjeringen (utøvende makt) og domstolene (dømmende makt). Denne tredelingen skal hindre maktkonsentrasjon og beskytte borgerne.',
          },
          {
            id: 'samfunnskunnskap-5-5-n-quiz1-q1',
            task: 'Hva kreves for å endre Grunnloven?',
            options: [
              { id: 'a', text: 'Vanlig flertall på Stortinget', isCorrect: false },
              { id: 'b', text: 'Folkeavstemning', isCorrect: false },
              { id: 'c', text: 'To tredjedels flertall og stortingsvalg mellom forslag og vedtak', isCorrect: true },
              { id: 'd', text: 'Godkjennelse fra Høyesterett', isCorrect: false },
            ],
            solution: 'Grunnlovsendring krever at forslaget fremmes tidlig i en periode, at det er et stortingsvalg mellom forslag og vedtak, og at det vedtas med 2/3 flertall. Dette sikrer stabilitet og bred enighet.',
          },
          {
            id: 'samfunnskunnskap-5-5-n-quiz1-q2',
            task: 'Hvilken rettighet er beskyttet i Grunnlovens paragraf 100?',
            options: [
              { id: 'a', text: 'Stemmerett', isCorrect: false },
              { id: 'b', text: 'Ytringsfrihet', isCorrect: true },
              { id: 'c', text: 'Religionsfrihet', isCorrect: false },
              { id: 'd', text: 'Rett til utdanning', isCorrect: false },
            ],
            solution: 'Grunnlovens paragraf 100 beskytter ytringsfriheten. Andre viktige rettigheter er religionsfrihet (§ 16), stemmerett (§ 50), rettssikkerhet (§ 96) og rett til utdanning (§ 109).',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Du har nå lært at Grunnloven fra 1814 er Norges viktigste lov, som fastsetter styreform, maktfordeling og grunnleggende rettigheter. Maktfordelingsprinsippet deler makten mellom Stortinget, regjeringen og domstolene for å hindre maktmisbruk. Grunnloven inneholder rettigheter som ytringsfrihet, religionsfrihet, rettssikkerhet og rett til utdanning. Å endre Grunnloven krever to tredjedels flertall og stortingsvalg mellom forslag og vedtak, for å sikre stabilitet og bred enighet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.6 NARRATIV: Stortinget
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_6_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-6-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.6',
  title: 'Stortinget',
  subtitle: 'Narrativ versjon',
  description: 'Tritt inn i stortingssalen og forstå hvordan Norges 169 folkevalgte representanter styrer landet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for Stortingets oppgaver og organisering',
    'forstå hvordan lovgivning og budsjettering fungerer',
  ],
  linkedChapterId: 'samfunnskunnskap-5-6',
  content: [
    {
      id: 'samfunnskunnskap-5-6-n-intro',
      type: 'text',
      content: `## Folkets forsamling

Midt i Oslo sentrum ligger en ærverdige gul bygning som er selve hjertet i det norske demokratiet: Stortinget. Her samles 169 representanter valgt fra 19 valgdistrikter for å ta de viktigste avgjørelsene i landet. Stortinget er den lovgivende makten -- det er her lovene vedtas, statsbudsjettet bestemmes, og regjeringen holdes ansvarlig.

Stortingets hovedoppgaver er å vedta lover, vedta statsbudsjettet, kontrollere regjeringen, debattere viktige samfunnsspørsmål, og behandle forslag fra regjeringen og representantene. Et viktig prinsipp er at Stortinget ikke kan oppløses -- det sitter alltid hele fireårsperioden ut.`,
    },
    {
      id: 'samfunnskunnskap-5-6-n-section1',
      type: 'text',
      content: `## Hvordan Stortinget er organisert

Øverst i Stortingets ledelse finner vi stortingspresidenten, som leder Stortingets arbeid, styrer debatten i salen og representerer Stortinget utad. Presidentskapet velges av representantene selv.

Representantene organiseres i partigrupper, der de holder gruppemøter for å samordne standpunkter. Hver gruppe har en parlamentarisk leder som er partiets strateg og talsperson på Stortinget.

Men det virkelige grunnarbeidet skjer i komiteene. Stortinget har 12 fagkomiteer -- som finanskomiteen, justiskomiteen og helse- og omsorgskomiteen. Når en sak skal behandles, sendes den først til den relevante komiteen. Der studerer representantene saken grundig, holder høringer, diskuterer seg imellom, og avgir til slutt en innstilling til Stortinget i plenum. Plenum er alle 169 representanter samlet i stortingssalen, der det debatteres og stemmes over saker gjennom elektronisk votering.

## Vaktbikkja over regjeringen

En av Stortingets viktigste roller er å kontrollere regjeringen. Dette gjøres gjennom flere mekanismer. Spørretimen finner sted hver onsdag, der representanter stiller spørsmål direkte til statsrådene. Skriftlige spørsmål kan sendes hele tiden. Interpellasjoner er lengre debatter om viktige saker der statsråden svarer og det blir debatt.

Kontroll- og konstitusjonskomiteen er Stortingets egen etterforsker som kontrollerer regjeringens arbeid og kan gjennomføre høringer. Riksrevisjonen er Stortingets organ for kontroll av statens økonomi -- den sjekker at pengene brukes slik Stortinget har bestemt. Stortingets ombudsmann kontrollerer at forvaltningen behandler borgere riktig.

Den mest dramatiske kontrollmekanismen er mistillitsforslaget. Hvis et flertall på Stortinget stemmer for mistillit mot regjeringen, må den gå av. Dette er den ultimate konsekvensen av parlamentarismen.`,
    },
    {
      id: 'samfunnskunnskap-5-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-6-n-quiz1-q0',
            task: 'Hvor mange fagkomiteer har Stortinget?',
            options: [
              { id: 'a', text: '8', isCorrect: false },
              { id: 'b', text: '10', isCorrect: false },
              { id: 'c', text: '12', isCorrect: true },
              { id: 'd', text: '19', isCorrect: false },
            ],
            solution: 'Stortinget har 12 fagkomiteer der det egentlige grunnarbeidet med sakene foregår. Komiteene avgir innstilling til Stortinget i plenum.',
          },
          {
            id: 'samfunnskunnskap-5-6-n-quiz1-q1',
            task: 'Hva er Riksrevisjonens rolle?',
            options: [
              { id: 'a', text: 'Å lede regjeringens arbeid', isCorrect: false },
              { id: 'b', text: 'Å kontrollere statens pengebruk på vegne av Stortinget', isCorrect: true },
              { id: 'c', text: 'Å utnevne dommere', isCorrect: false },
              { id: 'd', text: 'Å foreslå nye lover', isCorrect: false },
            ],
            solution: 'Riksrevisjonen er Stortingets organ for kontroll av statens økonomi. Den sjekker at pengene brukes slik Stortinget har bestemt.',
          },
          {
            id: 'samfunnskunnskap-5-6-n-quiz1-q2',
            task: 'Hva skjer hvis et flertall på Stortinget stemmer for mistillit mot regjeringen?',
            options: [
              { id: 'a', text: 'Det utlyses nyvalg', isCorrect: false },
              { id: 'b', text: 'Regjeringen må gå av', isCorrect: true },
              { id: 'c', text: 'Statsministeren kan velge å ignorere det', isCorrect: false },
              { id: 'd', text: 'Stortinget oppløses', isCorrect: false },
            ],
            solution: 'Hvis et flertall stemmer for mistillit, må regjeringen gå av. Dette er den ultimate konsekvensen av parlamentarismen -- regjeringen er avhengig av Stortingets tillit.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-6-n-summary',
      type: 'text',
      content: `## Oppsummering

Du har nå lært at Stortinget er Norges nasjonalforsamling med 169 representanter som vedtar lover, budsjett og kontrollerer regjeringen. Stortinget er organisert med en stortingspresident, partigrupper og 12 fagkomiteer der det egentlige grunnarbeidet skjer. Kontrollmekanismene inkluderer spørretimen, interpellasjoner, kontrollkomiteen, Riksrevisjonen og mistillitsforslag som sikrer at regjeringen holdes ansvarlig overfor folket.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.7 NARRATIV: Regjeringen
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_7_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-7-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.7',
  title: 'Regjeringen',
  subtitle: 'Narrativ versjon',
  description: 'Forstå hvordan regjeringen leder Norge, hva parlamentarisme betyr, og hvordan en ny regjering dannes.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for regjeringens oppgaver og organisering',
    'forstå parlamentarismen og hvordan regjeringer dannes',
  ],
  linkedChapterId: 'samfunnskunnskap-5-7',
  content: [
    {
      id: 'samfunnskunnskap-5-7-n-intro',
      type: 'text',
      content: `## De som styrer landet

Mens Stortinget vedtar lovene, er det regjeringen som leder den daglige styringen av Norge. Den utøvende makten, som den kalles, ledes av statsministeren og består vanligvis av 18 til 22 statsråder som hver leder sitt departement. Regjeringens hovedoppgaver er å lede landet og forvaltningen, foreslå lover og budsjett til Stortinget, sette lover og vedtak ut i livet, og representere Norge internasjonalt.

Men regjeringen kan ikke bare gjøre som den vil. Den er bundet av et grunnleggende prinsipp: parlamentarismen.`,
    },
    {
      id: 'samfunnskunnskap-5-7-n-section1',
      type: 'text',
      content: `## Parlamentarisme -- tillitens prinsipp

Parlamentarisme betyr at regjeringen må ha Stortingets tillit for å sitte. Hvis flertallet på Stortinget er mot regjeringen, må den gå av. Norge har det vi kaller negativ parlamentarisme -- det kreves et aktivt flertall mot regjeringen for å felle den, men regjeringen trenger ikke et aktivt flertall for seg. Denne forskjellen er viktig fordi den gjør det mulig med mindretallsregjeringer.

I norsk politikk er mindretallsregjeringer faktisk det vanligste. Da har regjeringspartiene under halvparten av mandatene på Stortinget og må søke støtte fra andre partier sak for sak. Flertallsregjeringer, der partiene har over halvparten av mandatene, er sjeldne i Norge. En koalisjonsregjering betyr at flere partier regjerer sammen.

## Departementene -- regjeringens maskineri

Under statsrådene ligger departementene, som er regjeringens sekretariater. Viktige departementer inkluderer Statsministerens kontor, Finansdepartementet, Utenriksdepartementet, Justis- og beredskapsdepartementet, Helse- og omsorgsdepartementet og Kunnskapsdepartementet. Departementene forbereder saker for statsråden, utformer lovforslag og forskrifter, følger opp vedtak fra Stortinget og styrer underliggende etater.

Under departementene igjen finner vi direktorater og etater som utfører de praktiske oppgavene -- som NAV, Skatteetaten, Utdanningsdirektoratet og Politidirektoratet.

## Når en ny regjering skal dannes

Etter et stortingsvalg starter prosessen med regjeringsdannelse. Først viser valgresultatet hvilke partier som har flertall. Så sonderer man om hvem som kan danne regjering -- kongen gir enten den sittende statsministeren eller valgvinneren i oppdrag å sondere. Deretter forhandler partiene som skal samarbeide om en politisk plattform, slik som Hurdalsplattformen i 2021, og fordeler statsrådsposter. Til slutt utnevner kongen statsminister og statsråder i en formell seremoni på Slottet, og den nye regjeringen presenterer sin politikk for Stortinget.

Etter valget i 2021, for eksempel, ble det klart at Arbeiderpartiet og Senterpartiet ville danne regjering. De forhandlet frem Hurdalsplattformen, mens SV valgte å stå utenfor, men støtter ofte regjeringen i viktige saker.`,
    },
    {
      id: 'samfunnskunnskap-5-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-7-n-quiz1-q0',
            task: 'Hva betyr negativ parlamentarisme?',
            options: [
              { id: 'a', text: 'At regjeringen alltid har negativt syn på Stortinget', isCorrect: false },
              { id: 'b', text: 'At det kreves aktivt flertall MOT regjeringen for å felle den', isCorrect: true },
              { id: 'c', text: 'At regjeringen velges direkte av folket', isCorrect: false },
              { id: 'd', text: 'At opposisjonen alltid er negativ til regjeringens forslag', isCorrect: false },
            ],
            solution: 'Negativ parlamentarisme betyr at det kreves et aktivt flertall MOT regjeringen for å felle den. Regjeringen trenger ikke et aktivt flertall FOR seg, noe som gjør mindretallsregjeringer mulig.',
          },
          {
            id: 'samfunnskunnskap-5-7-n-quiz1-q1',
            task: 'Hva er den vanligste regjeringstypen i Norge?',
            options: [
              { id: 'a', text: 'Flertallsregjering', isCorrect: false },
              { id: 'b', text: 'Mindretallsregjering', isCorrect: true },
              { id: 'c', text: 'Ettpartiregjering med flertall', isCorrect: false },
              { id: 'd', text: 'Storkoalisjon', isCorrect: false },
            ],
            solution: 'Mindretallsregjeringer er vanligst i Norge. Da har regjeringspartiene under halvparten av mandatene og må søke støtte fra andre partier sak for sak.',
          },
          {
            id: 'samfunnskunnskap-5-7-n-quiz1-q2',
            task: 'Hvem utnevner formelt statsministeren i Norge?',
            options: [
              { id: 'a', text: 'Stortingspresidenten', isCorrect: false },
              { id: 'b', text: 'Velgerne direkte', isCorrect: false },
              { id: 'c', text: 'Kongen', isCorrect: true },
              { id: 'd', text: 'Høyesterett', isCorrect: false },
            ],
            solution: 'Kongen utnevner formelt statsminister og statsråder i statsråd, i en seremoni på Slottet. I praksis er dette en formell godkjenning av den politiske prosessen.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-7-n-summary',
      type: 'text',
      content: `## Oppsummering

Du har lært at regjeringen er den utøvende makten som leder den daglige styringen, foreslår lover og budsjett, og setter vedtak ut i livet. Parlamentarismen betyr at regjeringen må ha Stortingets tillit, og Norge har negativ parlamentarisme der det kreves flertall mot regjeringen for å felle den. Departementene er regjeringens sekretariater med underliggende etater som NAV og Skatteetaten. Etter valg dannes regjering gjennom sonderinger, forhandlinger om en politisk plattform og formell utnevnelse av kongen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.8 NARRATIV: Domstolene
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_8_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-8-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.8',
  title: 'Domstolene',
  subtitle: 'Narrativ versjon',
  description: 'Forstå rettssystemets oppbygning, domstolenes uavhengighet og hvorfor rettssikkerhet er så viktig.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for domstolenes rolle og organisering',
    'forstå rettssikkerhetens betydning',
  ],
  linkedChapterId: 'samfunnskunnskap-5-8',
  content: [
    {
      id: 'samfunnskunnskap-5-8-n-intro',
      type: 'text',
      content: `## Den usynlige beskytteren

Forestill deg at du blir urettmessig anklaget for noe du ikke har gjort. Eller at staten vedtar en lov som krenker dine grunnleggende rettigheter. Hvem beskytter deg da? Svaret er domstolene -- den tredje og kanskje mest undervurderte statsmakten.

Domstolene er den dømmende makten i Norge. De avgjør straffesaker, altså om tiltalte er skyldige. De avgjør sivile saker, som er tvister mellom parter. De tolker og anvender lovene. Og de kontrollerer at lovene ikke strider mot Grunnloven. Domstolenes uavhengighet er en grunnpilar i rettsstaten: verken regjering eller Storting kan instruere dommerne i hvordan de skal dømme.`,
    },
    {
      id: 'samfunnskunnskap-5-8-n-section1',
      type: 'text',
      content: `## Stige for stige -- domstolshierarkiet

Det norske rettssystemet er bygget opp som en stige med tre trinn. Nederst finner vi tingrettene, som er første instans for de fleste saker. Det finnes rundt 60 tingretter spredt over hele Norge, og de behandler både straffesaker og sivile saker.

Neste trinn er lagmannsrettene, som fungerer som ankedomstoler. Det finnes 6 lagmannsretter i Norge. Hvis du er misfornøyd med dommen i tingretten, kan du anke til lagmannsretten, som prøver saken på nytt.

Øverst troner Høyesterett, Norges øverste domstol. Den har 20 dommere og ledes av justitiarius. Høyesterett behandler bare prinsipielle saker som er viktige for rettsutviklingen, og avgjørelsene er endelige. Høyesterett har også den viktige rollen å prøve om lover strider mot Grunnloven.

I tillegg finnes det spesialdomstoler for bestemte sakstyper, som jordskifterettene, Arbeidsretten og Trygderetten.

## Rettssikkerhet -- ditt skjold

Rettssikkerhet er borgernes vern mot overgrep fra staten og garantier for en rettferdig behandling. Den bygger på flere grunnleggende prinsipper. Legalitetsprinsippet sier at ingen kan straffes uten at det finnes en lov som forbyr handlingen. Uskyldspresumsjonen betyr at alle er uskyldige inntil det motsatte er bevist -- det er staten som har bevisbyrden. Retten til forsvarer sikrer at alle har rett til juridisk bistand. Offentlighet betyr at rettssaker som hovedregel er åpne for publikum. Kontradiksjon gir deg rett til å imøtegå motpartens påstander. Og ankeretten gir mulighet til å få saken prøvd på nytt i en høyere instans. I tillegg har vi forbudet mot dobbeltstraff -- du kan ikke straffes to ganger for den samme handlingen.

Følger vi en straffesak gjennom systemet, starter det med at politiet etterforsker, samler bevis og avhører vitner. Deretter avgjør påtalemyndigheten om det skal tas ut tiltale. Saken behandles i tingretten med bevisføring og dom, eventuelt med anke til lagmannsrett og i sjeldne tilfeller til Høyesterett. Norge har fokus på rehabilitering, ikke bare straff.`,
    },
    {
      id: 'samfunnskunnskap-5-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-8-n-quiz1-q0',
            task: 'Hva er riktig rekkefølge i domstolshierarkiet, fra lavest til høyest?',
            options: [
              { id: 'a', text: 'Lagmannsrett, tingrett, Høyesterett', isCorrect: false },
              { id: 'b', text: 'Tingrett, lagmannsrett, Høyesterett', isCorrect: true },
              { id: 'c', text: 'Høyesterett, lagmannsrett, tingrett', isCorrect: false },
              { id: 'd', text: 'Tingrett, Høyesterett, lagmannsrett', isCorrect: false },
            ],
            solution: 'Rekkefølgen er tingrett (første instans), lagmannsrett (ankedomstol) og Høyesterett (øverste domstol). De fleste saker starter i tingretten.',
          },
          {
            id: 'samfunnskunnskap-5-8-n-quiz1-q1',
            task: 'Hva betyr uskyldspresumsjonen?',
            options: [
              { id: 'a', text: 'At dommeren alltid frikjenner tiltalte', isCorrect: false },
              { id: 'b', text: 'At alle er uskyldige inntil det motsatte er bevist', isCorrect: true },
              { id: 'c', text: 'At politiet ikke kan pågripe mistenkte', isCorrect: false },
              { id: 'd', text: 'At tiltalte slipper å møte i retten', isCorrect: false },
            ],
            solution: 'Uskyldspresumsjonen betyr at alle er uskyldige inntil det motsatte er bevist. Det er staten/påtalemyndigheten som har bevisbyrden -- de må bevise skyld, ikke den tiltalte som må bevise uskyld.',
          },
          {
            id: 'samfunnskunnskap-5-8-n-quiz1-q2',
            task: 'Hvorfor er domstolenes uavhengighet viktig?',
            options: [
              { id: 'a', text: 'For at dommerne skal tjene mer penger', isCorrect: false },
              { id: 'b', text: 'For å sikre rettferdig behandling uten politisk påvirkning', isCorrect: true },
              { id: 'c', text: 'For at sakene skal gå raskere', isCorrect: false },
              { id: 'd', text: 'For at regjeringen skal slippe ansvar for dommene', isCorrect: false },
            ],
            solution: 'Domstolenes uavhengighet sikrer at alle behandles rettferdig uten politisk påvirkning. Verken regjering eller Storting kan instruere dommerne, noe som er en grunnpilar i rettsstaten.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-8-n-summary',
      type: 'text',
      content: `## Oppsummering

Du har lært at domstolene er den dømmende makten som avgjør straffe- og sivile saker, tolker lover og kontrollerer at de ikke strider mot Grunnloven. Domstolshierarkiet består av tingrettene (første instans), lagmannsrettene (ankedomstol) og Høyesterett (øverste domstol). Rettssikkerheten bygger på prinsipper som legalitet, uskyldspresumsjon, rett til forsvarer og ankerett. Domstolenes uavhengighet fra Storting og regjering er en grunnpilar i rettsstaten.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.9 NARRATIV: Politiske partier
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_9_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-9-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.9',
  title: 'Politiske partier',
  subtitle: 'Narrativ versjon',
  description: 'Forstå partienes rolle som bindeledd mellom folk og makt, og hvordan de organiseres og finansieres.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for partienes funksjon i demokratiet',
    'forstå hvordan partier organiseres og finansieres',
  ],
  linkedChapterId: 'samfunnskunnskap-5-9',
  content: [
    {
      id: 'samfunnskunnskap-5-9-n-intro',
      type: 'text',
      content: `## Bindeleddet mellom deg og makten

Hvert fjerde år går du kanskje til valgurnen og stemmer. Men hva skjer mellom valgene? Hvordan blir dine meninger og ønsker til konkret politikk? Svaret er politiske partier -- organisasjoner som samler folk med lignende synspunkter, utvikler politikk og stiller kandidater til valg.

Partiene har mange viktige funksjoner i demokratiet. De rekrutterer og skolerer politikere, utvikler politiske programmer, mobiliserer velgere og øker engasjement, forenkler valgene for velgerne ved å tilby pakkeløsninger, kobler folkets ønsker til politiske vedtak, og holder regjeringen ansvarlig når de er i opposisjon. Uten partier ville det være vanskelig å organisere demokratisk styring. Partiene gir struktur til politikken og gjør det mulig for velgerne å sammenligne alternativer.`,
    },
    {
      id: 'samfunnskunnskap-5-9-n-section1',
      type: 'text',
      content: `## Fra lokallag til landsmøte

Norske politiske partier er bygget opp hierarkisk, fra grasrota til toppen. Grunnenheten er lokallaget, som driver verving, lokalpolitikk og valgkamp i sin kommune, og nominerer kandidater til kommunestyret. Over lokallaget ligger fylkeslaget, som koordinerer arbeidet i fylket, nominerer stortingskandidater og jobber med fylkestingsvalg. Det sentrale nivået består av partisekretariatet og hovedkontoret, som tar seg av nasjonal strategi og kommunikasjon, og stortingsgruppen med de folkevalgte representantene.

Øverste organ i partiet er landsmøtet, som samles med jevne mellomrom. Det er landsmøtet som vedtar partiprogrammet, velger partileder og sentralstyre, og trekker opp den politiske kursen. Alle stortingspartiene har dessuten ungdomspartier som AUF, Unge Høyre og FpU, som er viktige for rekruttering og politisk skolering.

## Pengene bak politikken

Partiene trenger penger for å drive politisk arbeid, og de har flere inntektskilder. Den viktigste er statlig partistøtte, som utgjør hoveddelen av inntektene og fordeles etter hvor mange stemmer partiet fikk ved valget. I tillegg kommer medlemskontingent, selv om dette er en relativt beskjeden andel. Gaver og bidrag fra private donorer og organisasjoner spiller også en rolle -- LO støtter tradisjonelt Arbeiderpartiet, mens næringskretser kan støtte Høyre. Noen partier har dessuten lotteriinntekter.

For å sikre åpenhet og forhindre korrupsjon finnes det strenge regler. Alle bidrag over 35 000 kroner må offentliggjøres. Anonyme bidrag over 12 000 kroner er forbudt. Og utenlandske bidrag er begrenset.

## Veien til Stortinget

Å bli stortingskandidat krever lang og tålmodig innsats. Du starter med å melde deg inn i et parti og være aktiv i lokallaget. Gradvis tar du verv, bygger nettverk og profilerer deg. Når nominasjonsprosessen starter, setter fylkeslaget ned en nominasjonskomite som foreslår kandidater. Lokallaget uttaler seg, og fylkesårsmøtet eller nominasjonsmøtet vedtar den endelige listen. Plassering på listen avgjør sjansen for å komme inn -- førstekandidaten har størst sjanse, og mange faktorer spiller inn: erfaring, geografi, kjønn og alder. Ved selve valget stemmer velgerne på partiet, og personstemmer kan endre rekkefølgen, men med begrenset effekt. Det tar vanligvis mange år å bygge seg opp i et parti.`,
    },
    {
      id: 'samfunnskunnskap-5-9-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-9-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-9-n-quiz1-q0',
            task: 'Hva er partiets øverste organ?',
            options: [
              { id: 'a', text: 'Stortingsgruppen', isCorrect: false },
              { id: 'b', text: 'Partilederen', isCorrect: false },
              { id: 'c', text: 'Landsmøtet', isCorrect: true },
              { id: 'd', text: 'Fylkeslaget', isCorrect: false },
            ],
            solution: 'Landsmøtet er partiets øverste organ. Det vedtar partiprogram, velger partileder og sentralstyre, og trekker opp den politiske kursen.',
          },
          {
            id: 'samfunnskunnskap-5-9-n-quiz1-q1',
            task: 'Hva er den viktigste inntektskilden for norske politiske partier?',
            options: [
              { id: 'a', text: 'Medlemskontingent', isCorrect: false },
              { id: 'b', text: 'Statlig partistøtte', isCorrect: true },
              { id: 'c', text: 'Private donasjoner', isCorrect: false },
              { id: 'd', text: 'Lotteriinntekter', isCorrect: false },
            ],
            solution: 'Statlig partistøtte utgjør hoveddelen av partienes inntekter og fordeles etter oppslutning ved valg. I tillegg kommer kontingent, gaver og lotteri.',
          },
          {
            id: 'samfunnskunnskap-5-9-n-quiz1-q2',
            task: 'Hva er grensen for at bidrag til partier må offentliggjøres?',
            options: [
              { id: 'a', text: 'Alle bidrag må offentliggjøres', isCorrect: false },
              { id: 'b', text: 'Bidrag over 35 000 kroner', isCorrect: true },
              { id: 'c', text: 'Bidrag over 100 000 kroner', isCorrect: false },
              { id: 'd', text: 'Bidrag trenger aldri offentliggjøres', isCorrect: false },
            ],
            solution: 'Alle bidrag over 35 000 kroner til partier må offentliggjøres. I tillegg er anonyme bidrag over 12 000 kroner forbudt, og utenlandske bidrag er begrenset.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-9-n-summary',
      type: 'text',
      content: `## Oppsummering

Du har lært at politiske partier er bindeleddet mellom folket og makten, med funksjoner som å rekruttere politikere, utvikle programmer og mobilisere velgere. Partiene er organisert hierarkisk fra lokallag via fylkeslag til sentralt nivå, med landsmøtet som øverste organ. Finansieringen kommer hovedsakelig fra statlig partistøtte, pluss medlemskontingent og gaver. Nominasjonsprosessen avgjør hvem som står på listen til stortingsvalg, gjennom nominasjonskomite og fylkesårsmøte.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.10 NARRATIV: Hvordan en lov blir til
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_10_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-10-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.10',
  title: 'Hvordan en lov blir til',
  subtitle: 'Narrativ versjon',
  description: 'Følg en lov fra idé til virkelighet gjennom utredning, høring, debatt og vedtak.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for hvordan lover vedtas i Norge',
    'forstå de ulike stegene i lovprosessen',
  ],
  linkedChapterId: 'samfunnskunnskap-5-10',
  content: [
    {
      id: 'samfunnskunnskap-5-10-n-intro',
      type: 'text',
      content: `## En lang og grundig reise

Du har kanskje lurt på hvorfor det tar så lang tid å lage nye lover i Norge. Svaret er at lovprosessen er designet for å være grundig. Den skal sikre at alle synspunkter blir hørt, at eksperter får vurdere forslaget, at det er demokratisk forankring gjennom debatt, og at det juridiske innholdet er kvalitetssikret.

De fleste lovforslag kommer fra regjeringen i form av proposisjoner, men stortingsrepresentanter kan også foreslå lover gjennom representantforslag. Stortinget kan også be regjeringen om å utrede en sak.`,
    },
    {
      id: 'samfunnskunnskap-5-10-n-section1',
      type: 'text',
      content: `## Syv faser fra idé til lov

Lovprosessen kan deles i syv faser. I initiativfasen oppstår ideen om at det trengs en ny lov. Impulsen kan komme fra regjeringen, Stortinget, organisasjoner, medier eller fra hendelser i samfunnet.

I utredningsfasen analyserer departementet behovet grundig. Ofte settes det ned et offentlig utvalg som utarbeider en NOU -- Norges offentlige utredninger -- som gir en dyp analyse av problemet og mulige løsninger.

Høringsfasen er demokratiet i praksis. Forslaget sendes på høring, vanligvis i tre måneder, og organisasjoner, kommuner, fagmiljøer og andre berørte parter kan uttale seg. Alle høringsuttalelsene er offentlig tilgjengelige.

I proposisjonsfasen utarbeider regjeringen den endelige proposisjonen basert på utredning og høringsinnspill, og fremmer den for Stortinget. Det finnes lovproposisjoner (Prop. L) for lovforslag og stortingsproposisjoner (Prop. S) for andre saker.

I komitéfasen behandler den relevante fagkomiteen på Stortinget forslaget, holder egne høringer, innhenter synspunkter og avgir en innstilling -- sin vurdering og anbefaling -- til Stortinget.

I vedtaksfasen debatteres saken i plenum, og det voteres. Vanlig flertall kreves for å vedta en lov.

Til slutt kommer sanksjon og ikrafttredelse. Kongen sanksjonerer loven -- gir sin formelle godkjennelse -- og loven kunngjøres i Lovdata og trer i kraft.

## Klimaloven som eksempel

Et godt eksempel på prosessen er klimaloven fra 2017. Bakgrunnen var Parisavtalen som forpliktet Norge, behovet for juridisk bindende klimamål, og press fra miljøbevegelsen. Departementet utredet ulike modeller og studerte andre lands klimalover. Brede høringer ga innspill fra miljøorganisasjoner, næringsliv og kommuner. Regjeringen fremmet proposisjon med klimamål for 2030 og 2050. Energi- og miljøkomiteen behandlet saken, og loven ble vedtatt med bredt flertall. Resultatet er en lov som setter langsiktige klimamål med årlig rapportering til Stortinget. Lovprosessen sikret at denne viktige beslutningen ble tatt på et solid grunnlag med bred deltakelse.`,
    },
    {
      id: 'samfunnskunnskap-5-10-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-10-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-10-n-quiz1-q0',
            task: 'Hva er en NOU?',
            options: [
              { id: 'a', text: 'Et lovforslag fra Stortinget', isCorrect: false },
              { id: 'b', text: 'En grundig utredning fra et offentlig utvalg', isCorrect: true },
              { id: 'c', text: 'En dom fra Høyesterett', isCorrect: false },
              { id: 'd', text: 'Et partiprogram', isCorrect: false },
            ],
            solution: 'NOU (Norges offentlige utredninger) er grundige analyser utarbeidet av offentlige utvalg. De er ofte utgangspunkt for lovforslag og gir dyp analyse av problemer og mulige løsninger.',
          },
          {
            id: 'samfunnskunnskap-5-10-n-quiz1-q1',
            task: 'Hva er formålet med en høring i lovprosessen?',
            options: [
              { id: 'a', text: 'Å la dommere vurdere lovligheten', isCorrect: false },
              { id: 'b', text: 'Å gi berørte parter mulighet til å uttale seg', isCorrect: true },
              { id: 'c', text: 'Å teste loven i praksis', isCorrect: false },
              { id: 'd', text: 'Å la velgerne stemme over lovforslaget', isCorrect: false },
            ],
            solution: 'Høringen gir berørte parter som organisasjoner, kommuner og fagmiljøer mulighet til å uttale seg om lovforslaget. Det sikrer at alle stemmer høres, avdekker problemer og styrker demokratisk legitimitet.',
          },
          {
            id: 'samfunnskunnskap-5-10-n-quiz1-q2',
            task: 'Hva er forskjellen mellom en NOU og en proposisjon?',
            options: [
              { id: 'a', text: 'De er det samme', isCorrect: false },
              { id: 'b', text: 'NOU er en analyse, proposisjon er et konkret forslag til Stortinget', isCorrect: true },
              { id: 'c', text: 'NOU lages av Stortinget, proposisjon av regjeringen', isCorrect: false },
              { id: 'd', text: 'Proposisjon kommer alltid før NOU', isCorrect: false },
            ],
            solution: 'NOU er en grundig analyse utarbeidet av et offentlig utvalg. Proposisjon er regjeringens konkrete forslag til Stortinget, som kommer senere i prosessen og inneholder selve lovteksten.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-10-n-summary',
      type: 'text',
      content: `## Oppsummering

Du har fulgt en lov fra idé til virkelighet gjennom syv faser: initiativ, utredning (ofte med NOU), høring der berørte parter uttaler seg, proposisjon fra regjeringen, komitébehandling på Stortinget, vedtak i plenum, og kongelig sanksjon. Viktige dokumenttyper er NOU (utredning), høringssvar (innspill), proposisjon (forslag) og innstilling (komiteens vurdering). Lovprosessen tar tid for å sikre grundig behandling og bred forankring i samfunnet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.11 NARRATIV: Lokalpolitikk
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_11_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-11-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.11',
  title: 'Lokalpolitikk',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk lokalt selvstyre -- fra kommunestyret i din kommune til spenningen mellom stat og lokalsamfunn.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for lokalt selvstyre',
    'forstå forholdet mellom stat og kommune',
  ],
  linkedChapterId: 'samfunnskunnskap-5-11',
  content: [
    {
      id: 'samfunnskunnskap-5-11-n-intro',
      type: 'text',
      content: `## Politikken nærmest deg

Mens rikspolitikken på Stortinget får mest oppmerksomhet i mediene, er det kanskje lokalpolitikken som påvirker hverdagen din mest direkte. Det er kommunen som bestemmer om det skal bygges ny skole i nabolaget ditt, om veien din skal asfalteres, hvordan eldreomsorgen skal organiseres, og hvor mye eiendomsskatt du betaler.

Norge har en lang tradisjon for lokalt selvstyre, forankret i Grunnlovens paragraf 49. Kommunene og fylkeskommunene har ansvar for mange viktige oppgaver og styres av lokalt folkevalgte. Kommuneloven regulerer hvordan kommunene skal organiseres og styres.

Fordelene med lokalt selvstyre er mange. Beslutninger tas nærmere innbyggerne og kan tilpasses lokale forhold og behov. Det gir demokratisk skolering og deltakelse -- mange politikere starter karrieren i lokalpolitikken. Og det kan gi mer effektiv tjenesteproduksjon når de som kjenner de lokale forholdene best, tar avgjørelsene.`,
    },
    {
      id: 'samfunnskunnskap-5-11-n-section1',
      type: 'text',
      content: `## Slik styres kommunen din

Øverste organ i kommunen er kommunestyret, som velges direkte av innbyggerne hvert fjerde år. Antall medlemmer varierer fra 11 til 85 avhengig av folketallet. Kommunestyret vedtar budsjett og tar de viktigste avgjørelsene.

Formannskapet velges av kommunestyret og har en forberedende rolle -- det forbereder saker og behandler hastesaker. Ordføreren leder både kommunestyret og formannskapet og representerer kommunen utad. Kommunedirektøren er den øverste administrative lederen, ansatt av kommunestyret for å lede administrasjonen. I tillegg finnes det ulike utvalg og komiteer som behandler saker innenfor sine områder, som planutvalg og helse- og sosialutvalg.

## Tautrekking mellom stat og kommune

Forholdet mellom stat og kommune preges av en evig spenning. Staten styrer gjennom lover, forskrifter, øremerkede tilskudd og tilsyn -- den setter rammer og minstekrav for å sikre at innbyggere i alle kommuner får gode nok tjenester. Kommunene på sin side vil ha frihet til å gjøre egne prioriteringer, disponere sine frie inntekter fra skatt og rammetilskudd, og organisere seg etter lokale behov.

Statsforvalteren, tidligere kalt fylkesmannen, er statens representant i fylket. Statsforvalteren fører tilsyn med kommunene og behandler klager på kommunale vedtak. Denne rollen illustrerer spenningen: staten vil ha likhet, kommunene vil ha frihet.

Denne spenningen kom tydelig til uttrykk under kommunereformen fra 2014 til 2020. Mange små kommuner hadde utfordringer med kompetanse og kapasitet, og nye oppgaver krevde større fagmiljøer. Målet var større og mer robuste kommuner med bedre tjenester. Resultatet ble at antall kommuner gikk ned fra 428 til 356, men debatten fortsetter. Større enheter gir sterkere fagmiljøer, men kan også bety større avstand til innbyggerne. Balansen mellom effektivitet og nærhet er krevende.`,
    },
    {
      id: 'samfunnskunnskap-5-11-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-11-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-11-n-quiz1-q0',
            task: 'Hva er det øverste organet i en norsk kommune?',
            options: [
              { id: 'a', text: 'Ordføreren', isCorrect: false },
              { id: 'b', text: 'Formannskapet', isCorrect: false },
              { id: 'c', text: 'Kommunestyret', isCorrect: true },
              { id: 'd', text: 'Kommunedirektøren', isCorrect: false },
            ],
            solution: 'Kommunestyret er øverste organ i kommunen. Det velges direkte av innbyggerne, vedtar budsjett og tar de viktigste avgjørelsene.',
          },
          {
            id: 'samfunnskunnskap-5-11-n-quiz1-q1',
            task: 'Hva er statsforvalterens rolle overfor kommunene?',
            options: [
              { id: 'a', text: 'Å lede kommunestyret', isCorrect: false },
              { id: 'b', text: 'Å føre tilsyn med kommunene og behandle klager', isCorrect: true },
              { id: 'c', text: 'Å velge ordføreren', isCorrect: false },
              { id: 'd', text: 'Å fordele statsbudsjettet', isCorrect: false },
            ],
            solution: 'Statsforvalteren (tidligere fylkesmannen) er statens representant i fylket som fører tilsyn med kommunene og behandler klager på kommunale vedtak.',
          },
          {
            id: 'samfunnskunnskap-5-11-n-quiz1-q2',
            task: 'Hva var et viktig resultat av kommunereformen?',
            options: [
              { id: 'a', text: 'Antall kommuner økte til over 500', isCorrect: false },
              { id: 'b', text: 'Alle kommuner ble like store', isCorrect: false },
              { id: 'c', text: 'Antall kommuner gikk ned fra 428 til 356', isCorrect: true },
              { id: 'd', text: 'Kommunene ble erstattet av fylker', isCorrect: false },
            ],
            solution: 'Kommunereformen (2014-2020) reduserte antall kommuner fra 428 til 356 gjennom frivillige og noen tvangssammenslåinger, med mål om større og mer robuste kommuner.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-11-n-summary',
      type: 'text',
      content: `## Oppsummering

Du har lært at det lokale selvstyret betyr at kommunene styres av folkevalgte og har ansvar for viktige tjenester nær innbyggerne. Kommunestyret er øverste organ, formannskapet forbereder saker, ordføreren leder og kommunedirektøren styrer administrasjonen. Det er spenning mellom statlig styring med lover og minstekrav, og kommunalt selvstyre med egne prioriteringer. Kommunereformen reduserte antall kommuner for å skape større enheter, men debatten om størrelse og nærhet fortsetter.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.12 NARRATIV: Påvirkning og lobbyisme
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_12_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-5-12-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.12',
  title: 'Påvirkning og lobbyisme',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk hvem som egentlig påvirker politikken -- fra LO og NHO til medier og PR-byråer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike former for politisk påvirkning',
    'drøfte lobbyisme i et demokratisk perspektiv',
  ],
  linkedChapterId: 'samfunnskunnskap-5-12',
  content: [
    {
      id: 'samfunnskunnskap-5-12-n-intro',
      type: 'text',
      content: `## Makten bak kulissene

Politikk formes ikke bare av politikere i stortingssalen. Bak de offisielle beslutningene finnes et mylder av aktører som prøver å påvirke utfallet -- interesseorganisasjoner som LO og NHO, lobbyister og PR-byråer, medier og journalister, eksperter og forskere, og enkeltborgere og aksjonsgrupper.

Å påvirke politiske beslutninger er i seg selv en del av demokratiet. Problemet oppstår når påvirkningen blir skjev -- når noen har langt mer tilgang og ressurser enn andre, og dermed får uforholdsmessig stor innflytelse.`,
    },
    {
      id: 'samfunnskunnskap-5-12-n-section1',
      type: 'text',
      content: `## Organiserte interesser

Interesseorganisasjoner representerer bestemte gruppers interesser overfor myndighetene. De finnes i mange varianter. Arbeidstaker- og arbeidsgiverorganisasjoner som LO, YS, NHO og Virke forhandler om lønn og arbeidsvilkår. Næringsorganisasjoner som Norges Bondelag og Norges Fiskarlag kjemper for sine bransjers interesser. Ideelle organisasjoner som Norsk Folkehjelp og Røde Kors jobber for humanitære formål. Miljøorganisasjoner som Naturvernforbundet, WWF og Bellona pusher på for grønnere politikk. Og pasient- og brukerorganisasjoner som FFO og Mental Helse representerer sårbare gruppers interesser.

Virkemidlene deres er mangfoldige: de avgir høringssvar på lovforslag, tar direkte kontakt med politikere, driver mediekampanjer, arrangerer demonstrasjoner og aksjoner, og utarbeider forskning og utredninger. I Norge har store organisasjoner tradisjonelt hatt formell innflytelse gjennom det vi kaller korporatisme -- trepartssamarbeidet mellom stat, arbeidsgivere og arbeidstakere, og deltakelse i offentlige utvalg.

## Lobbyistene

Lobbyisme er profesjonell påvirkning av politiske beslutninger på vegne av klienter. Det drives av PR-byråer og kommunikasjonsrådgivere, advokatfirmaer, interesseorganisasjoners egne lobbyister, og ikke minst av tidligere politikere som har gått gjennom «svingdøren» fra politikk til lobbybransjen.

Metodene inkluderer direkte møter med politikere, innspill til høringer, mediepåvirkning, nettverksbygging og utarbeidelse av informasjon og utredninger. I motsetning til EU har ikke Norge noe lobbyregister, noe som betyr at det er begrenset åpenhet om hvem som påvirker hvem. Det finnes imidlertid karantenetid for politikere som går over til lobbybransjen, og etiske retningslinjer.

Lobbyisme er omdiskutert. Det gir ressurssterke aktører en fordel, det mangler åpenhet, og svingdøren mellom politikk og lobby reiser spørsmål om habilitet. Men lobbyisme gir også legitim informasjon til beslutningstakere og er en del av demokratisk påvirkning.

## Den fjerde statsmakt

Mediene spiller en særskilt rolle i å forme politikken. Gjennom dagsordenfunksjonen bestemmer mediene hva som diskuteres -- det som ikke dekkes i mediene, eksisterer knapt politisk. Mediepress kan tvinge politikere til å handle.

Gjennom vaktbikkjerollen avslører mediene kritikkverdige forhold og holder makten ansvarlig. Det er derfor mediene ofte kalles den fjerde statsmakt. Mediene fungerer også som arena for debatt der politikere når ut til velgerne, og partilederdebatter kan påvirke valgutfallet.

Men mediene påvirker også gjennom tolkningsrammer -- hvordan en sak vinkles, kan påvirke holdningene våre. Og sosiale medier har forandret spillereglene: politikere kan nå velgerne direkte uten å gå gjennom tradisjonelle medier, men det åpner også for spredning av falske nyheter. Forholdet mellom medier og politikk er gjensidig -- mediene er mektige, men de er også avhengige av kilder som selv er mektige.`,
    },
    {
      id: 'samfunnskunnskap-5-12-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-12-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-5-12-n-quiz1-q0',
            task: 'Hva betyr korporatisme i norsk sammenheng?',
            options: [
              { id: 'a', text: 'At store selskaper styrer politikken', isCorrect: false },
              { id: 'b', text: 'At store organisasjoner har formell innflytelse gjennom trepartssamarbeid og utvalg', isCorrect: true },
              { id: 'c', text: 'At politikerne eier bedrifter', isCorrect: false },
              { id: 'd', text: 'At staten eier alle bedrifter', isCorrect: false },
            ],
            solution: 'Korporatisme i norsk sammenheng betyr at store organisasjoner som LO og NHO har formell innflytelse gjennom trepartssamarbeidet og deltakelse i offentlige utvalg.',
          },
          {
            id: 'samfunnskunnskap-5-12-n-quiz1-q1',
            task: 'Hva menes med medienes dagsordenfunksjon?',
            options: [
              { id: 'a', text: 'At mediene bestemmer hvem som skal styre landet', isCorrect: false },
              { id: 'b', text: 'At mediene bestemmer hvilke saker som diskuteres i offentligheten', isCorrect: true },
              { id: 'c', text: 'At mediene lager lovforslag', isCorrect: false },
              { id: 'd', text: 'At mediene kontrollerer domstolene', isCorrect: false },
            ],
            solution: 'Dagsordenfunksjonen betyr at mediene har makt til å bestemme hvilke saker som diskuteres i offentligheten. Det som ikke dekkes i mediene, eksisterer knapt politisk.',
          },
          {
            id: 'samfunnskunnskap-5-12-n-quiz1-q2',
            task: 'Hva menes med «svingdører» i lobbyisme?',
            options: [
              { id: 'a', text: 'At lobbyister ofte bytter kontor', isCorrect: false },
              { id: 'b', text: 'At politikere går over til lobbybransjen eller omvendt', isCorrect: true },
              { id: 'c', text: 'At lobbyister har tilgang til Stortingets innganger', isCorrect: false },
              { id: 'd', text: 'At det er rask utskifting av lobbyister', isCorrect: false },
            ],
            solution: 'Svingdører betyr at politikere går over til lobbybransjen eller omvendt. Dette reiser spørsmål om habilitet -- tidligere politikere har nettverk og kunnskap som gir dem stor påvirkningskraft.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-5-12-n-summary',
      type: 'text',
      content: `## Oppsummering

Du har lært at mange aktører påvirker politikken -- fra interesseorganisasjoner og lobbyister til medier og enkeltborgere. Interesseorganisasjoner som LO, NHO og Naturvernforbundet representerer gruppers interesser overfor myndighetene gjennom høringssvar, direkte kontakt og kampanjer. Lobbyisme er profesjonell påvirkning som gir informasjon til beslutningstakere, men kan gi ressurssterke aktører uforholdsmessig stor innflytelse. Mediene påvirker politikken gjennom dagsordenfunksjonen, vaktbikkjerollen, som debattarena og gjennom tolkningsrammer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Alle narrative kapitler i del 5
// ============================================================================

export const SAMFUNNSKUNNSKAP_NARRATIV_DEL5_CHAPTERS = [
  CHAPTER_SAMFUNNSKUNNSKAP_5_1_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_5_2_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_5_3_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_5_4_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_5_5_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_5_6_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_5_7_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_5_8_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_5_9_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_5_10_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_5_11_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_5_12_NARRATIV,
];
