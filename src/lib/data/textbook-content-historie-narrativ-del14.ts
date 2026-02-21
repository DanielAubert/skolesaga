/**
 * Tekstbok innhold for Historie - NARRATIV VERSJON DEL 14
 * Kapittel 15: Etterkrigstid Norge (15.1 - 15.4)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 15.1 NARRATIV: Gjenreisning etter krigen
// ============================================================================

export const CHAPTER_HISTORIE_15_1_NARRATIV: TextbookChapter = {
  id: 'historie-15-1-narrativ',
  courseId: 'historie',
  chapterNumber: '15.1',
  title: 'Gjenreisning etter krigen',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan Norge reiste seg fra ruinene etter andre verdenskrig og la grunnlaget for det moderne velferdssamfunnet.',
  estimatedMinutes: 40,
  competenceGoals: ['velferdsutviklingen i Norge på 1900-tallet'],
  linkedChapterId: 'historie-15-1',
  content: [
    {
      id: 'historie-15-1-n-intro',
      type: 'text',
      content: `## Da freden endelig kom

Tenk deg at du star pa Karl Johan i Oslo den 8. mai 1945. Flaggene vaier, folk grar og ler om hverandre, fremmede klemmer hverandre. Fem ar med okkupasjon er over. Norge er fritt.

Men bak gleden ventet enorme utfordringer. Store deler av landet la i ruiner, saerlig i nord. Okonomi var utarmet, infrastruktur odelagt, og tusenvis av nordmenn slet med traumer fra krigsarene. Hvordan skulle dette lille landet reise seg?

La oss folge historien om gjenreisningen -- en tid da nordmenn samlet seg om et felles prosjekt og la grunnlaget for det velferdssamfunnet vi kjenner i dag.`,
    },
    {
      id: 'historie-15-1-n-section1',
      type: 'text',
      content: `## Et fellesskap etter krigen

Noe merkelig skjedde i norsk politikk etter krigen: partier som vanligvis krangler, ble enige. I 1945 stilte alle de store partiene, bortsett fra kommunistene (NKP), seg bak et felles dokument kalt **Fellesprogrammet**.

Hvorfor? Fordi krigserfaringen hadde skapt en dyp folelse av nasjonal samhorighet. Politikere fra ulike partier hadde sittet sammen i tyske fangeleirer. De hadde kjempet side om side i motstandsbevegelsen. Na ville de unnga mellomkrigstideens politiske splittelse, som mange mente hadde svekket Norge for krigen.

Fellesprogrammet var ambisiost: gjenreisning av landet, utbygging av sosiale ordninger, statlig styring av okonomien, boligbygging og full sysselsetting. Det var et kompromiss mellom sosialisme og kapitalisme -- det vi kaller **blandingsokonomi**. Staten skulle ta ansvar, men det private naeringslivet skulle fortsatt eksistere.

Denne brede politiske enigheten -- som var skapt av krigens traumer og laerdommer fra mellomkrigstiden -- la grunnlaget for det vi i dag kaller "den norske modellen".`,
    },
    {
      id: 'historie-15-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-15-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa politisk samarbeid etter krigen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-1-n-quiz1-q0',
            task: 'Hva var Fellesprogrammet fra 1945?',
            options: [
              { id: 'a', text: 'Et partiprogram for Arbeiderpartiet alene', isCorrect: false },
              { id: 'b', text: 'Et politisk samarbeidsdokument som nesten alle partier stilte seg bak, med mal om gjenreisning og velferdsutbygging', isCorrect: true },
              { id: 'c', text: 'En avtale med Tyskland om krigsoppgjor', isCorrect: false },
              { id: 'd', text: 'Et radioprogram som sendte nyheter til hele landet', isCorrect: false },
            ],
            solution: 'Fellesprogrammet var et politisk dokument fra 1945 som alle partier unntatt NKP stilte seg bak. Det omfattet gjenreisning, utbygging av sosiale ordninger, og statlig styring av okonomien.',
          },
          {
            id: 'historie-15-1-n-quiz1-q1',
            task: 'Hvorfor var det sa bred politisk enighet i Norge etter krigen?',
            options: [
              { id: 'a', text: 'Fordi det bare fantes ett politisk parti', isCorrect: false },
              { id: 'b', text: 'Fordi krigserfaringen hadde skapt nasjonal samhorighet -- politikere fra ulike partier hadde sittet i fangeleirer og kjempet sammen', isCorrect: true },
              { id: 'c', text: 'Fordi USA tvang partiene til a samarbeide', isCorrect: false },
              { id: 'd', text: 'Fordi Stortinget var lagt ned', isCorrect: false },
            ],
            solution: 'Krigen skapte dyp nasjonal samhorighet. Politikere fra ulike partier hadde sittet i tyske fangeleirer og kjempet i motstandsbevegelsen. De ville unnga mellomkrigstideens splittelse som de mente hadde svekket Norge.',
          },
          {
            id: 'historie-15-1-n-quiz1-q2',
            task: 'Hva er en blandingsokonomi?',
            options: [
              { id: 'a', text: 'En okonomi der bare staten eier alt', isCorrect: false },
              { id: 'b', text: 'En okonomi uten noen form for styring', isCorrect: false },
              { id: 'c', text: 'Et kompromiss mellom sosialisme og kapitalisme, der staten tar ansvar men privat naeringsliv ogsa eksisterer', isCorrect: true },
              { id: 'd', text: 'En okonomi basert utelukkende pa handel med utlandet', isCorrect: false },
            ],
            solution: 'Blandingsokonomien var et kompromiss mellom sosialisme og kapitalisme. Staten tok ansvar for sentrale oppgaver som velferd og infrastruktur, men privat naeringsliv fikk fortsette. Dette ble kjernen i "den norske modellen".',
          },
        ],
      },
    },
    {
      id: 'historie-15-1-n-section2',
      type: 'text',
      content: `## Marshall-hjelpen: Amerika rekker ut handen

Selv med god vilje var det ikke nok med norsk innsats alene. Landet trengte penger, maskiner og ravarer for a bygge seg opp igjen. Her kom USA inn i bildet med **Marshall-planen**.

Oppkalt etter USAs utenriksminister George Marshall, var dette et gigantisk hjelpepogram for Vest-Europa. Norge mottok rundt tre milliarder kroner -- en enorm sum pa den tiden. Pengene gikk til a importere maskiner, ravarer og mat som var nodvendige for gjenreisningen.

Men Marshall-hjelpen var ikke bare generositet. Den var ogsa kald krig-politikk. USA var redd for at fattigdom i Europa ville fore til at flere land valgte kommunismen. Ved a skape velstand, ville de binde Vest-Europa til den vestlige blokken.

For Norge betydde Marshall-hjelpen to ting: raskere gjenreisning enn vi hadde klart pa egen hand, og en tettere tilknytning til Vesten. Det siste la grunnlaget for NATO-medlemskapet i 1949. Noytrallitetspolitikken som hadde sviktet i 1940, ble forlatt. Norge valgte side i den kalde krigen.`,
    },
    {
      id: 'historie-15-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-15-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Marshall-hjelpen og Norges vestvendning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-1-n-quiz2-q0',
            task: 'Hva var hovedformalet med Marshall-planen fra USAs side?',
            options: [
              { id: 'a', text: 'A straffe Tyskland for krigen', isCorrect: false },
              { id: 'b', text: 'A hjelpe Europa okonomisk og hindre kommunismens spredning', isCorrect: true },
              { id: 'c', text: 'A fa tilgang til europeiske kolonier', isCorrect: false },
              { id: 'd', text: 'A bygge amerikanske militaerbaser i Europa', isCorrect: false },
            ],
            solution: 'Marshall-planen hadde to hovedmal: a hjelpe Vest-Europa okonomisk og a hindre kommunismens spredning. USA mente at velstand var det beste forsvaret mot kommunismen.',
          },
          {
            id: 'historie-15-1-n-quiz2-q1',
            task: 'Hva betydde Marshall-hjelpen for Norge konkret?',
            options: [
              { id: 'a', text: 'Norge fikk militaert utstyr, men ingen okonomisk hjelp', isCorrect: false },
              { id: 'b', text: 'Norge mottok rundt tre milliarder kroner til maskiner, ravarer og mat for gjenreisningen', isCorrect: true },
              { id: 'c', text: 'Norge nektet a ta imot hjelpen', isCorrect: false },
              { id: 'd', text: 'Norge brukte pengene utelukkende pa militaer opprustning', isCorrect: false },
            ],
            solution: 'Norge mottok rundt tre milliarder kroner gjennom Marshall-planen. Pengene gikk til a importere maskiner, ravarer og mat som var nodvendige for gjenreisningen. Det ga raskere gjenreisning og knyttet Norge tettere til Vesten.',
          },
          {
            id: 'historie-15-1-n-quiz2-q2',
            task: 'Hvordan hang Marshall-hjelpen sammen med Norges NATO-medlemskap?',
            options: [
              { id: 'a', text: 'Det var ingen sammenheng', isCorrect: false },
              { id: 'b', text: 'NATO tvang Norge til a ta imot Marshall-hjelp', isCorrect: false },
              { id: 'c', text: 'Marshall-hjelpen knyttet Norge tettere til Vesten og la grunnlaget for NATO-medlemskapet i 1949', isCorrect: true },
              { id: 'd', text: 'Norge matte melde seg ut av NATO for a fa Marshall-hjelp', isCorrect: false },
            ],
            solution: 'Marshall-hjelpen knyttet Norge tettere til den vestlige blokken og la grunnlaget for NATO-medlemskapet i 1949. Noytrallitetspolitikken som hadde sviktet i 1940 ble forlatt, og Norge valgte side i den kalde krigen.',
          },
        ],
      },
    },
    {
      id: 'historie-15-1-n-section3',
      type: 'text',
      content: `## Nord-Norge: fra ruiner til nytt liv

Mens store deler av Norge slapp relativt lett unna krigens odeleggelser, var situasjonen i Nord-Norge katastrofal. Da tyskerne trakk seg tilbake hosten 1944, brukte de "brent jords taktikk". De brant ned nesten alt -- ca. 11 000 hus, kirker, skoler, broer og kaier. Over 50 000 mennesker ble tvangsevakuert.

Da freden kom, vendte folk tilbake til ruiner. Mange bodde den forste tiden i jordgammer og brakker. Temperaturen kunne synke til minus 30, og vinteren 1945-46 var brutal.

Staten tok ansvar. En egen gjenreisningsadministrasjon ble opprettet, og ressurser ble mobilisert fra hele landet. For a fa fart pa byggingen ble det utviklet standardiserte "gjenreisningshus" -- enkle, funksjonelle boliger som kunne settes opp raskt. Tusenvis av slike hus ble bygget, og mange star fortsatt i dag.

Gjenreisningen av Nord-Norge tok nesten 15 ar. Den ble en demonstrasjon av hva fellesskapet kunne fa til nar alle dro i samme retning. For mange nordnorske familier representerte de nye husene ogsa en standardheving -- fra de gamle, ofte kummerlige forholdene til moderne boliger med stromm og innlagt vann.`,
    },
    {
      id: 'historie-15-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-15-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa gjenreisningen av Nord-Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-1-n-quiz3-q0',
            task: 'Hvorfor var Nord-Norge saerlig hardt rammet etter krigen?',
            options: [
              { id: 'a', text: 'Fordi de allierte bombet omradet kraftig', isCorrect: false },
              { id: 'b', text: 'Fordi tyskerne brukte "brent jords taktikk" under tilbaketrekningen i 1944', isCorrect: true },
              { id: 'c', text: 'Fordi det var borgerkrig mellom nordmenn', isCorrect: false },
              { id: 'd', text: 'Fordi omradet var okkupert lengst', isCorrect: false },
            ],
            solution: 'Tyskerne brukte "brent jords taktikk" under tilbaketrekningen hosten 1944 og brant ned nesten alt -- ca. 11 000 hus, kirker og infrastruktur. Over 50 000 mennesker ble tvangsevakuert.',
          },
          {
            id: 'historie-15-1-n-quiz3-q1',
            task: 'Hva var "gjenreisningshus"?',
            options: [
              { id: 'a', text: 'Luksusvilla bygget for rike nordmenn', isCorrect: false },
              { id: 'b', text: 'Midlertidige telt brukt de forste ukene', isCorrect: false },
              { id: 'c', text: 'Standardiserte, funksjonelle boliger som kunne settes opp raskt for a gjenreise Nord-Norge', isCorrect: true },
              { id: 'd', text: 'Tyske brakker som ble gjenbrukt etter krigen', isCorrect: false },
            ],
            solution: 'Gjenreisningshus var standardiserte, funksjonelle boliger utviklet for a settes opp raskt. Tusenvis ble bygget, og mange star fortsatt. For mange familier representerte de faktisk en standardheving fra de gamle, kummerlige forholdene.',
          },
          {
            id: 'historie-15-1-n-quiz3-q2',
            task: 'Omtrent hvor lang tid tok gjenreisningen av Nord-Norge?',
            options: [
              { id: 'a', text: 'Ca. 2 ar', isCorrect: false },
              { id: 'b', text: 'Ca. 5 ar', isCorrect: false },
              { id: 'c', text: 'Ca. 15 ar', isCorrect: true },
              { id: 'd', text: 'Den ble aldri fullfort', isCorrect: false },
            ],
            solution: 'Gjenreisningen av Nord-Norge tok nesten 15 ar. Det var et enormt prosjekt som mobiliserte ressurser fra hele landet og ble en demonstrasjon av hva fellesskapet kunne fa til nar alle dro i samme retning.',
          },
        ],
      },
    },
    {
      id: 'historie-15-1-n-section4',
      type: 'text',
      content: `## Arbeiderpartiets gullalder

En mann kom til a dominere norsk politikk i etterkrigsarene: **Einar Gerhardsen**. Han hadde sittet i tysk konsentrasjonsleir under krigen og kom ut med enorm personlig autoritet. Som statsminister i det meste av perioden 1945-1965 ble han kalt "landsfaderen".

Arbeiderpartiet hadde rent flertall pa Stortinget fra 1945 til 1961 -- noe som er helt usedvanlig i norsk politikk. Dette ga dem muligheten til a gjennomfore store reformer uten a matte forhandle med opposisjonen.

Hvorfor ble Arbeiderpartiet sa dominerende? Flere faktorer spilte inn: partiets ledere hadde hoy troverdighet fra motstandskampen, de leverte resultater i form av boliger og jobber, og de appellerte bredt -- ikke bare til arbeidere, men ogsa til bonder og funksjonaerer. Partiet var ogsa pragmatisk -- det aksepterte privat eiendom og NATO-medlemskap, noe som beroliget dem som fryktet radikal sosialisme.

Arbeiderpartiets dominans betydde stabilitet og kontinuitet. Den samme politikken ble fort gjennom over mange ar, noe som muliggjorde langsiktig planlegging. Men det betydde ogsa at opposisjonen var svak, og kritikk av det radende systemet ble ofte avfeid.`,
    },
    {
      id: 'historie-15-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-15-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Arbeiderpartiets dominans:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-1-n-quiz4-q0',
            task: 'Hvorfor ble Arbeiderpartiet sa dominerende i etterkrigsarene?',
            options: [
              { id: 'a', text: 'Fordi de andre partiene ble forbudt', isCorrect: false },
              { id: 'b', text: 'Fordi partiets ledere hadde hoy troverdighet fra motstandskampen, og partiet leverte resultater', isCorrect: true },
              { id: 'c', text: 'Fordi de fikk stotte fra Sovjet', isCorrect: false },
              { id: 'd', text: 'Fordi det bare var ett parti som stilte til valg', isCorrect: false },
            ],
            solution: 'Arbeiderpartiets dominans skyldtes ledernes troverdighet fra motstandskampen, konkrete resultater i form av boliger og jobber, bred appell, og pragmatisk politikk som aksepterte privat eiendom og NATO.',
          },
          {
            id: 'historie-15-1-n-quiz4-q1',
            task: 'Hvem var Einar Gerhardsen, og hvorfor ble han kalt "landsfaderen"?',
            options: [
              { id: 'a', text: 'Norges konge etter krigen', isCorrect: false },
              { id: 'b', text: 'Arbeiderpartiets statsminister i det meste av perioden 1945-1965, som hadde sittet i konsentrasjonsleir og ledet gjenreisningen', isCorrect: true },
              { id: 'c', text: 'Lederen for motstandsbevegelsen som nektet a ga inn i politikken', isCorrect: false },
              { id: 'd', text: 'USAs ambassador til Norge', isCorrect: false },
            ],
            solution: 'Einar Gerhardsen hadde sittet i tysk konsentrasjonsleir og kom ut med enorm personlig autoritet. Som statsminister i det meste av 1945-1965 ledet han gjenreisningen og velferdsutbyggingen. Han ble kalt "landsfaderen" for sin rolle i a bygge det moderne Norge.',
          },
          {
            id: 'historie-15-1-n-quiz4-q2',
            task: 'I hvilken periode hadde Arbeiderpartiet rent flertall pa Stortinget?',
            options: [
              { id: 'a', text: '1920-1940', isCorrect: false },
              { id: 'b', text: '1945-1961', isCorrect: true },
              { id: 'c', text: '1965-1985', isCorrect: false },
              { id: 'd', text: 'De har aldri hatt rent flertall', isCorrect: false },
            ],
            solution: 'Arbeiderpartiet hadde rent flertall pa Stortinget fra 1945 til 1961 -- helt usedvanlig i norsk politikk. Dette ga dem muligheten til a gjennomfore store reformer uten a matte forhandle med opposisjonen.',
          },
        ],
      },
    },
    {
      id: 'historie-15-1-n-section5',
      type: 'text',
      content: `## Laerdom fra krigen: aldri mer 1940

Erfaringene fra krigen og mellomkrigstiden preget etterkrigstidens politikk pa dypt vis. Nordmenn husket hvordan den politiske splittelsen pa 1930-tallet hadde svekket landet. De husket arbeidsloshet og fattigdom. Og de husket 9. april 1940, da noytrallitetspolitikken viste seg makteslos mot tysk aggresjon.

Disse erfaringene skapte en felles forstaelse: samfunnet matte vaere forberedt, og staten matte ta ansvar for borgernes velferd. Full sysselsetting ble et hovedmal -- arbeidsloshet som pa 1930-tallet skulle aldri komme tilbake. Velferdsstaten skulle sikre at ingen falt utenfor, uansett livssituasjon.

Sikkerhetspolitisk betydde "aldri mer 1940" at Norge ikke lenger kunne sta alene. NATO-medlemskapet i 1949 var et brudd med den tidligere noytrallitetspolitikken. Norge valgte a vaere del av en vestlig forsvarsallianse fremfor a sta alene.

Gjenreisningsarene la grunnlaget for det Norge vi kjenner i dag: et velferdssamfunn med sterk stat, hoy tillit mellom borgere og myndigheter, og en utenrikspolitikk forankret i vestlig samarbeid. Det var ikke tilfeldig at det ble slik -- det var resultat av bevisste valg, tatt av mennesker som hadde opplevd hva som skjer nar samfunnet svikter.`,
    },
    {
      id: 'historie-15-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-15-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa laerdommene fra krig og mellomkrigstid:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-1-n-quiz5-q0',
            task: 'Hvordan pavirket laerdommene fra krigen og mellomkrigstiden norsk politikk etter 1945?',
            options: [
              { id: 'a', text: 'Norge fortsatte den samme politikken som for krigen', isCorrect: false },
              { id: 'b', text: 'Erfaringene forte til storre vekt pa velferdsstat, full sysselsetting og vestlig forsvarssamarbeid', isCorrect: true },
              { id: 'c', text: 'Norge ble kommunistisk som reaksjon pa krigen', isCorrect: false },
              { id: 'd', text: 'Alle politiske partier ble forbudt', isCorrect: false },
            ],
            solution: 'Erfaringene forte til grunnleggende endringer: velferdsstat, full sysselsetting som hovedmal, og NATO-medlemskap som erstattet den mislykkede noytralitetspolitikken.',
          },
          {
            id: 'historie-15-1-n-quiz5-q1',
            task: 'Hva mente man med slagordet "aldri mer 9. april"?',
            options: [
              { id: 'a', text: 'At Norge aldri mer skulle feire 9. april', isCorrect: false },
              { id: 'b', text: 'At Norge aldri mer skulle la seg overraske uten allierte -- noytralilet var ikke nok', isCorrect: true },
              { id: 'c', text: 'At Norge skulle hevne seg pa Tyskland', isCorrect: false },
              { id: 'd', text: 'At datoen 9. april ble gjort til helligdag', isCorrect: false },
            ],
            solution: '"Aldri mer 9. april" refererte til den tyske invasjonen i 1940, da noytralitetspolitikken sviktet. Slagordet uttrykte overbevisningen om at Norge aldri mer kunne sta alene -- sterke allierte var nodvendige for a sikre landets frihet.',
          },
        ],
      },
    },
    {
      id: 'historie-15-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Gjenreisningen etter krigen var en formativ periode i norsk historie. Pa forbausende kort tid reiste Norge seg fra ruinene og la grunnlaget for et moderne velferdssamfunn.

**Nokkelbegreperdu na kjenner:**
- **Fellesprogrammet**: Politisk samarbeidsdokument fra 1945 som naesten alle partier stilte seg bak
- **Marshall-hjelpen**: Amerikansk okonomisk bistand til Vest-Europa (1948-1952)
- **Blandingsokonomi**: System som kombinerer privat og statlig eierskap, marked og regulering
- **Gjenreisningshus**: Standardiserte boliger bygget for a gjenreise Nord-Norge

**Det viktigste du tar med deg:**
Gjenreisningen var et nasjonalt fellesprosjekt preget av politisk enighet, internasjonal stotte og hard arbeidsinnsats. Erfaringene fra krigen og mellomkrigstiden skapte en felles forstaelse om at staten matte ta ansvar for borgernes velferd, og at Norge trengte vestlig forsvarssamarbeid. Denne perioden la grunnlaget for det velferdssamfunnet vi har i dag.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 15.2 NARRATIV: Velferdsstatens utbygging
// ============================================================================

export const CHAPTER_HISTORIE_15_2_NARRATIV: TextbookChapter = {
  id: 'historie-15-2-narrativ',
  courseId: 'historie',
  chapterNumber: '15.2',
  title: 'Velferdsstatens utbygging',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan Norge gikk fra fattigforsorg til universelle velferdsordninger -- en revolusjon i forholdet mellom stat og borger.',
  estimatedMinutes: 40,
  competenceGoals: ['velferdsutviklingen i Norge på 1900-tallet'],
  linkedChapterId: 'historie-15-2',
  content: [
    {
      id: 'historie-15-2-n-intro',
      type: 'text',
      content: `## Fra skam til rett

Tenk deg at du lever pa 1930-tallet og mister jobben. Det finnes ingen arbeidsledighetstrygd. Nar sparepengene tar slutt, ma du ga til fattigkassa og be om hjelp. Der blir okonomien din gransket. Du mister stemmeretten. Alle vet at du er "pa fattigkassa" -- det er en skam som henger ved deg.

Na hopp femti ar frem i tid. Du mister jobben. Du gar til Nav og soker dagpenger. Det er en rett du har opptjent gjennom arbeid. Ingen skam, ingen tap av rettigheter. Samfunnet fanger deg opp.

Forskjellen mellom disse to scenariene er velferdsstaten. I lopet av noen fa tiar gikk Norge fra et samfunn der de svake var avhengige av veldedighet og nedverdigende fattigforsorg, til et samfunn der alle borgere har rett til grunnleggende trygghet. Dette er kanskje den storste forandringen i norsk samfunnsliv i moderne tid.`,
    },
    {
      id: 'historie-15-2-n-section1',
      type: 'text',
      content: `## Hva er en velferdsstat?

En **velferdsstat** er en stat som tar ansvar for borgernes grunnleggende velferd. Men det finnes ulike typer velferdsstater. Den norske -- eller nordiske -- modellen har noen saertrekk.

For det forste er ordningene **universelle**. Barnetrygd gar til alle familier med barn, ikke bare de fattigste. Alle har rett til sykehusbehandling, ikke bare de som har rad. Dette skiller seg fra land der velferdsordninger er behovsprovd og kun gar til de mest trengende.

For det andre er velferd en **rett**, ikke en almisse. Du soker ikke om nade -- du far det du har krav pa. Dette er et fundamentalt brudd med den gamle fattigforsorgen, der mottakere matte vise ydmykhet og takknemlighet.

For det tredje er systemet **skattefinansiert**. Alle bidrar etter evne gjennom skatter og avgifter. Til gjengjeld far alle tilgang til velferdstjenester. Det er en sosial kontrakt: vi betaler inn til fellesskapet, og fellesskapet stiller opp for oss nar vi trenger det.

Den nordiske modellen kombinerer denne velferdsstaten med markedsokonomi og hoy sysselsetting. Malet er ikke a erstatte markedet, men a dempe dets hardeste konsekvenser.`,
    },
    {
      id: 'historie-15-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-15-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa den nordiske velferdsmodellen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-2-n-quiz1-q0',
            task: 'Hva kjennetegner den nordiske velferdsmodellen?',
            options: [
              { id: 'a', text: 'Velferdsordninger kun for de aller fattigste', isCorrect: false },
              { id: 'b', text: 'Universelle ordninger finansiert av skatter, der velferd er en rett', isCorrect: true },
              { id: 'c', text: 'Private forsikringsordninger for alle', isCorrect: false },
              { id: 'd', text: 'Veldedighet organisert av kirken', isCorrect: false },
            ],
            solution: 'Den nordiske velferdsmodellen kjennetegnes av universelle ordninger for alle, velferd som rett, og skattefinansiering. Den kombinerer velferdsstat med markedsokonomi.',
          },
          {
            id: 'historie-15-2-n-quiz1-q1',
            task: 'Hva er forskjellen mellom universelle og behovsprovde velferdsordninger?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'b', text: 'Universelle ordninger gar til alle borgere, mens behovsprovde kun gar til de som kan bevise at de trenger det', isCorrect: true },
              { id: 'c', text: 'Behovsprovde ordninger er alltid bedre', isCorrect: false },
              { id: 'd', text: 'Universelle ordninger finnes bare i USA', isCorrect: false },
            ],
            solution: 'Universelle ordninger gar til alle (f.eks. barnetrygd til alle familier), mens behovsprovde ordninger kun gar til dem som kan bevise behov. Den nordiske modellen er universell, noe som fjerner stigma og skaper bredere oppslutning.',
          },
          {
            id: 'historie-15-2-n-quiz1-q2',
            task: 'Hvordan skiller den moderne velferdsstaten seg fra den gamle fattigforsorgen?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell -- begge gir samme hjelp', isCorrect: false },
              { id: 'b', text: 'Fattigforsorgen var ydmykende almisse, mens velferdsstaten gir ytelser som en rett', isCorrect: true },
              { id: 'c', text: 'Fattigforsorgen var bedre fordi den var mer malstyrt', isCorrect: false },
              { id: 'd', text: 'Velferdsstaten er dyrere men gir doarligere hjelp', isCorrect: false },
            ],
            solution: 'Under den gamle fattigforsorgen matte man be om nade, bli gransket, og miste stemmeretten. Det var skam. I velferdsstaten er ytelser en rett du har opptjent -- ingen skam, ingen tap av rettigheter. Det er et fundamentalt skifte fra almisse til rettighet.',
          },
        ],
      },
    },
    {
      id: 'historie-15-2-n-section2',
      type: 'text',
      content: `## Milepaler pa veien

Velferdsstaten ble ikke bygget over natten. Den vokste frem gjennom en rekke reformer over flere tiar.

**Barnetrygden** kom i 1946, og den var banebrytende. For forste gang fikk alle familier med barn en statlig ytelse -- uansett inntekt. Pengene ble utbetalt til mor, noe som var viktig for kvinners okonomiske selvstendighet i en tid da mange var hjemmevaerende.

Sa kom reform etter reform: syketrygd, arbeidsledighetstrygd, uforepensjon. Hver for seg var de viktige, men det var **Folketrygden** i 1967 som virkelig fullforte prosjektet. Folketrygden samlet mange spredte ordninger i ett helhetlig system som dekket alle fra vugge til grav.

Med Folketrygden fikk alle nordmenn rett til alderspensjon, ufortrygd, sykepenger og foreldrepenger. Ytelsene var delvis knyttet til tidligere inntekt, slik at folk ikke bare fikk et minimum, men kunne opprettholde noenlunde samme levestandard. Samtidig sikret minstepensjon at ingen falt helt gjennom.

Folketrygden representerte en ny sosial kontrakt: vi betaler inn gjennom livet, og far ut nar vi trenger det. Den ga nordmenn en trygghet som tidligere generasjoner bare kunne dromme om.`,
    },
    {
      id: 'historie-15-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-15-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa velferdsstatens milepaler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-2-n-quiz2-q0',
            task: 'Hvorfor var Folketrygden (1967) en milepal i norsk velferdshistorie?',
            options: [
              { id: 'a', text: 'Fordi den var den forste velferdsordningen i Norge', isCorrect: false },
              { id: 'b', text: 'Fordi den samlet mange ordninger i ett system og ga universell dekning fra vugge til grav', isCorrect: true },
              { id: 'c', text: 'Fordi den kun gjaldt pensjonister', isCorrect: false },
              { id: 'd', text: 'Fordi den erstattet alle private forsikringer', isCorrect: false },
            ],
            solution: 'Folketrygden samlet mange spredte ordninger i ett helhetlig system med universell dekning: alderspensjon, ufortrygd, sykepenger og foreldrepenger. Den fullforte byggingen av den universelle velferdsstaten.',
          },
          {
            id: 'historie-15-2-n-quiz2-q1',
            task: 'Hva var barnetrygden (1946), og hvorfor var den banebrytende?',
            options: [
              { id: 'a', text: 'En skattelettelse for familier med mange barn', isCorrect: false },
              { id: 'b', text: 'Den forste universelle velferdsordningen -- alle familier med barn fikk stotte, uansett inntekt', isCorrect: true },
              { id: 'c', text: 'En ordning kun for enslige modre', isCorrect: false },
              { id: 'd', text: 'Et forsikringskrav for barn', isCorrect: false },
            ],
            solution: 'Barnetrygden (1946) var banebrytende som den forste universelle velferdsordningen. Alle familier med barn fikk stotte, uansett inntekt. Pengene ble utbetalt til mor, noe som styrket kvinners okonomiske selvstendighet.',
          },
          {
            id: 'historie-15-2-n-quiz2-q2',
            task: 'Hva dekket Folketrygden?',
            options: [
              { id: 'a', text: 'Bare alderspensjon', isCorrect: false },
              { id: 'b', text: 'Bare sykepenger', isCorrect: false },
              { id: 'c', text: 'Alderspensjon, ufortrygd, sykepenger og foreldrepenger -- fra vugge til grav', isCorrect: true },
              { id: 'd', text: 'Bare arbeidsledighetstrygd', isCorrect: false },
            ],
            solution: 'Folketrygden var et helhetlig system som dekket alle livsfaser: alderspensjon for de eldre, ufortrygd for dem som ikke kunne jobbe, sykepenger ved sykdom, og foreldrepenger ved fodsel. Den sikret alle nordmenn fra vugge til grav.',
          },
        ],
      },
    },
    {
      id: 'historie-15-2-n-section3',
      type: 'text',
      content: `## Utdanningseksplosjonen

En av velferdsstatens viktigste bestanddeler var utdanning. Etter krigen skjedde en dramatisk utbygging som forvandlet norsk samfunn.

**Grunnskolen** ble utvidet fra syv til ni ar i 1969. Alle barn, uansett hvor de bodde eller hva foreldrene tjente, skulle fa samme grunnopplaering. Standardiserte laereplaner sikret at en elev i Finnmark larte det samme som en elev i Oslo.

**Videregaende opplaering** gikk fra a vaere et elitetilbud til a bli et massetilbud. For var gymnaset for de fa som skulle bli akademikere. Na ble det bygget videregaende skoler over hele landet, og yrkesfagene ble likestilt med de teoretiske fagene. Med Reform 94 fikk alle ungdommer rett til videregaende opplaering.

**Hoyre utdanning** ekspanderte ogsa enormt. Nye universiteter ble grunnlagt i Bergen, Trondheim og Tromso. Distriktshoysko lene fra 1970-tallet brakte hoyre utdanning ut til alle deler av landet.

Men det viktigste var kanskje **Lanekassen**, opprettet allerede i 1947. Plutselig kunne talentfulle ungdommer fra arbeiderfamilier studere -- ikke bare de som hadde rike foreldre. Utdanning ble et sporsmal om evner, ikke okonomi.

Resultatet var en utdanningsrevolusjon. I 1950 hadde nesten ingen i arbeiderklassen hoyre utdanning. I 2020 har nesten halvparten av unge nordmenn universitets- eller hogskolegrad. Denne forandringen er noe av det viktigste som har skjedd med det norske samfunnet.`,
    },
    {
      id: 'historie-15-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-15-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa utdanningsrevolusjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-2-n-quiz3-q0',
            task: 'Hvordan bidro Lanekassen til sosial utjevning?',
            options: [
              { id: 'a', text: 'Ved a gjore utdanning dyrere for de rikeste', isCorrect: false },
              { id: 'b', text: 'Ved a gjore det mulig for ungdom fra alle okonomiske bakgrunner a ta hoyre utdanning', isCorrect: true },
              { id: 'c', text: 'Ved a redusere antall studieplasser', isCorrect: false },
              { id: 'd', text: 'Ved a bygge flere universiteter i Oslo', isCorrect: false },
            ],
            solution: 'Lanekassen (1947) gjorde det mulig for ungdom a studere uavhengig av familiens okonomi. Utdanning ble et sporsmal om evner og innsats, ikke okonomi.',
          },
          {
            id: 'historie-15-2-n-quiz3-q1',
            task: 'Nar ble grunnskolen utvidet fra syv til ni ar?',
            options: [
              { id: 'a', text: '1945', isCorrect: false },
              { id: 'b', text: '1955', isCorrect: false },
              { id: 'c', text: '1969', isCorrect: true },
              { id: 'd', text: '1994', isCorrect: false },
            ],
            solution: 'Grunnskolen ble utvidet fra syv til ni ar i 1969. Alle barn, uansett hvor de bodde eller hva foreldrene tjente, skulle fa samme grunnopplaering med standardiserte laereplaner.',
          },
          {
            id: 'historie-15-2-n-quiz3-q2',
            task: 'Hva var det viktigste resultatet av utdanningseksplosjonen etter krigen?',
            options: [
              { id: 'a', text: 'At faerre mennesker tok utdanning', isCorrect: false },
              { id: 'b', text: 'At utdanning ble et elitetilbud for de fa', isCorrect: false },
              { id: 'c', text: 'At nesten halvparten av unge nordmenn etter hvert fikk hoyre utdanning, uavhengig av bakgrunn', isCorrect: true },
              { id: 'd', text: 'At bare kvinner fikk tilgang til universitetene', isCorrect: false },
            ],
            solution: 'I 1950 hadde nesten ingen i arbeiderklassen hoyre utdanning. I dag har nesten halvparten av unge nordmenn universitets- eller hogskolegrad. Lanekassen, utbyggingen av universiteter og hogskoler, og Reform 94 gjorde utdanning tilgjengelig for alle.',
          },
        ],
      },
    },
    {
      id: 'historie-15-2-n-section4',
      type: 'text',
      content: `## Bolig for alle: Husbanken og boligdrommen

Etter krigen var det akutt boligmangel. Mange familier bodde trangt og kummerlig. Staten grep inn med et ambisiost mal: alle nordmenn skulle ha en god bolig.

**Husbanken**, opprettet i 1946, var det viktigste verktoymet. Banken ga gunstige lan til boligbygging -- lavere rente og lengre nedbetalingstid enn private banker. Dette gjorde det mulig for vanlige familier a eie sin egen bolig, noe som tidligere hadde vaert forbeholdt de velstaende.

Resultatet var en massiv boligbygging. I tiaret etter krigen ble det bygget hundretusener av boliger. Boligkooperativer som OBOS og USBL organiserte byggingen og holdt prisene nede. Drabantbyer vokste opp rundt de store byene -- Lambertseter, Manglerud, Ammerud i Oslo, tilsvarende rundt andre byer.

I dag eier nesten 80 prosent av nordmenn sin egen bolig -- et av de hoyeste tallene i verden. Dette er ikke tilfeldig. Det er resultat av en bevisst politikk der staten la til rette for at vanlige folk kunne bli boligeiere.

Men boligpolitikken hadde ogsa sine skyggesider. Drabantbyene ble kritisert for a vaere ensformige og anonyme. Noen omrader utviklet sosiale problemer. Og boligprisene har i senere ar skutt i vaeret, slik at unge i dag sliter med a komme inn pa boligmarkedet -- et paradoks i et land som har hatt "bolig for alle" som mal.`,
    },
    {
      id: 'historie-15-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-15-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa boligpolitikken etter krigen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-2-n-quiz4-q0',
            task: 'Hva var Husbankens rolle i etterkrigstidens boligpolitikk?',
            options: [
              { id: 'a', text: 'A bygge offentlige utleieboliger', isCorrect: false },
              { id: 'b', text: 'A gi gunstige lan som gjorde det mulig for vanlige familier a eie bolig', isCorrect: true },
              { id: 'c', text: 'A drive private banker ut av markedet', isCorrect: false },
              { id: 'd', text: 'A hindre boligbygging i distriktene', isCorrect: false },
            ],
            solution: 'Husbanken (1946) ga gunstige lan til boligbygging -- lavere rente og lengre nedbetalingstid enn private banker. Dette gjorde det mulig for vanlige familier a bli boligeiere.',
          },
          {
            id: 'historie-15-2-n-quiz4-q1',
            task: 'Hva var drabantbyene, og hvorfor ble de bygget?',
            options: [
              { id: 'a', text: 'Luksusboliger for de rikeste', isCorrect: false },
              { id: 'b', text: 'Nye bydeler utenfor storbyene med mange boliger for a lose boligmangelen', isCorrect: true },
              { id: 'c', text: 'Militaerforlegninger for NATO-soldater', isCorrect: false },
              { id: 'd', text: 'Ferieboliger ved kysten', isCorrect: false },
            ],
            solution: 'Drabantbyer som Lambertseter, Manglerud og Ammerud i Oslo vokste opp for a lose den akutte boligmangelen etter krigen. Boligkooperativer som OBOS organiserte byggingen og holdt prisene nede. Drabantbyene ble senere kritisert for a vaere ensformige.',
          },
          {
            id: 'historie-15-2-n-quiz4-q2',
            task: 'Omtrent hvor stor andel av nordmenn eier sin egen bolig i dag?',
            options: [
              { id: 'a', text: 'Ca. 30 prosent', isCorrect: false },
              { id: 'b', text: 'Ca. 50 prosent', isCorrect: false },
              { id: 'c', text: 'Nesten 80 prosent -- blant de hoyeste i verden', isCorrect: true },
              { id: 'd', text: 'Over 95 prosent', isCorrect: false },
            ],
            solution: 'Nesten 80 prosent av nordmenn eier sin egen bolig -- et av de hoyeste tallene i verden. Dette er resultat av en bevisst politikk der Husbanken la til rette for at vanlige folk kunne bli boligeiere.',
          },
        ],
      },
    },
    {
      id: 'historie-15-2-n-section5',
      type: 'text',
      content: `## En ny sosial kontrakt

Velferdsstaten forandret forholdet mellom stat og borger fundamentalt. For var staten noema fjern -- den krevde skatt og militaertjeneste, men ga lite tilbake til vanlige folk. Fattigforsorg var ydmykende, og de fleste matte klare seg selv eller stole pa familie og veldedighet.

Med velferdsstaten oppsto en ny sosial kontrakt. Borgerne betaler skatt, og til gjengjeld garanterer staten trygghet ved sykdom, arbeidsloshet, alderdom og andre livskriser. Det er et gjensidig forhold: vi gir til fellesskapet, og fellesskapet stiller opp for oss.

Denne kontrakten har skapt noe unikt: et samfunn med hoy tillit. Nordmenn stoler pa hverandre og pa institusjonene i usedvanlig stor grad. Vi betaler skatt relativt villig fordi vi ser at pengene kommer tilbake i form av tjenester alle bruker. Vi aksepterer reguleringer fordi vi tror de er der for fellesskapets beste.

Kritikere vil si at velferdsstaten er dyr, at den skaper avhengighet, og at hoye skatter hemmer innsats og innovasjon. Disse innvendingene fortjener a bli tatt pa alvor. Men det er vanskelig a benekte at velferdsstaten har skapt et samfunn med mindre fattigdom, storre likhet og hoyere livskvalitet for de fleste enn det som fantes for.

Velferdsstaten er ikke noe som bare "skjedde". Den ble kjempet frem av mennesker som mente at samfunnet kunne og burde vaere mer rettferdig. Den ma ogsa forsvares og fornyes av hver generasjon.`,
    },
    {
      id: 'historie-15-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-15-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa den sosiale kontrakten og velferdsstatens betydning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-2-n-quiz5-q0',
            task: 'Hvordan endret velferdsstaten forholdet mellom stat og borger?',
            options: [
              { id: 'a', text: 'Staten ble mer fjern og byrakratisk', isCorrect: false },
              { id: 'b', text: 'Borgerne mistet alle rettigheter til fordel for staten', isCorrect: false },
              { id: 'c', text: 'Det oppsto en gjensidig kontrakt der borgere betaler skatt og staten garanterer trygghet', isCorrect: true },
              { id: 'd', text: 'Staten sluttet a kreve skatt', isCorrect: false },
            ],
            solution: 'Velferdsstaten skapte en ny sosial kontrakt: borgere betaler skatt, og staten garanterer trygghet ved livskriser som sykdom, arbeidsloshet og alderdom. Velferd ble en rett, ikke almisse. Dette gjensidige forholdet har bidratt til hoy tillit mellom borgere og myndigheter i Norge.',
          },
          {
            id: 'historie-15-2-n-quiz5-q1',
            task: 'Hva menes med at nordmenn har "hoy tillit" til hverandre og til institusjonene?',
            options: [
              { id: 'a', text: 'At nordmenn aldri er uenige om noe', isCorrect: false },
              { id: 'b', text: 'At folk betaler skatt villig fordi de ser at pengene kommer tilbake som tjenester, og stoler pa at systemet er rettferdig', isCorrect: true },
              { id: 'c', text: 'At alle nordmenn kjenner hverandre personlig', isCorrect: false },
              { id: 'd', text: 'At ingen kontrollerer om folk betaler skatt', isCorrect: false },
            ],
            solution: 'Hoy tillit betyr at nordmenn stoler pa hverandre og pa institusjonene. Vi betaler skatt relativt villig fordi vi ser at pengene kommer tilbake i form av tjenester alle bruker. Denne tilliten er delvis et resultat av den sosiale kontrakten velferdsstaten representerer.',
          },
          {
            id: 'historie-15-2-n-quiz5-q2',
            task: 'Hva er et vanlig argument fra kritikere av velferdsstaten?',
            options: [
              { id: 'a', text: 'At velferdsstaten ikke koster noe', isCorrect: false },
              { id: 'b', text: 'At alle land i verden har identiske velferdsordninger', isCorrect: false },
              { id: 'c', text: 'At den er dyr, kan skape avhengighet, og at hoye skatter hemmer innovasjon', isCorrect: true },
              { id: 'd', text: 'At den gir for lite hjelp til de rikeste', isCorrect: false },
            ],
            solution: 'Kritikere mener velferdsstaten er kostbar, at den kan skape avhengighet hos mottakere, og at hoye skatter hemmer personlig innsats og innovasjon. Disse innvendingene fortjener a bli tatt pa alvor, men det er vanskelig a benekte at velferdsstaten har skapt mindre fattigdom og storre likhet.',
          },
        ],
      },
    },
    {
      id: 'historie-15-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Utbyggingen av velferdsstaten var en av de storste endringene i norsk samfunn pa 1900-tallet. Fra fattigforsorg basert pa skam og nade, gikk vi til universelle ordninger basert pa rettigheter og fellesskap.

**Nokkelbegreper du na kjenner:**
- **Velferdsstat**: Stat som tar ansvar for borgernes grunnleggende velferd
- **Universelle ordninger**: Ytelser til alle, ikke bare de fattigste
- **Folketrygden** (1967): Samlet system for sosial trygghet
- **Barnetrygd** (1946): Forste universelle velferdsordning
- **Husbanken** (1946): Statlig bank for boligfinansiering
- **Lanekassen** (1947): Gjor hoyre utdanning mulig for alle

**Det viktigste du tar med deg:**
Velferdsstaten representerer en sosial kontrakt mellom borgere og stat. Vi betaler skatt og far trygghet tilbake. Den har skapt et samfunn med mindre fattigdom, storre likhet og hoy tillit. Velferdsstaten ble bygget gradvis gjennom mange reformer, og den ma forsvares og fornyes av hver generasjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 15.3 NARRATIV: Oljen og det moderne Norge
// ============================================================================

export const CHAPTER_HISTORIE_15_3_NARRATIV: TextbookChapter = {
  id: 'historie-15-3-narrativ',
  courseId: 'historie',
  chapterNumber: '15.3',
  title: 'Oljen og det moderne Norge',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan funnet av olje i Nordsjøen forvandlet Norge fra et relativt fattig land til et av verdens rikeste -- og dilemmaene som fulgte.',
  estimatedMinutes: 40,
  competenceGoals: ['velferdsutviklingen i Norge på 1900-tallet'],
  linkedChapterId: 'historie-15-3',
  content: [
    {
      id: 'historie-15-3-n-intro',
      type: 'text',
      content: `## Julen 1969: en gave fra havet

Lille julaften 1969 kom en melding som skulle forandre Norges skjebne: det var funnet olje pa Ekofisk-feltet i Nordsoen. Ikke bare litt olje -- et gigantisk felt med enorme reserver.

For dette var Norge et relativt fattig land i europeisk sammenheng. Vi hadde fisk, tommer og vannkraft, men ingen store naturrikdommer som kunne mase seg med de store industrinasjonene. Sa kom oljen, og alt endret seg.

Men oljeeventyret var ikke bare flaks. Det var ogsa resultat av kloke politiske valg om hvordan ressursene skulle forvaltes. Norge kunne ha endt opp som mange andre oljerike land -- med korrupsjon, okonomisk skjevutvikling og eliter som stakk av med gevinsten. I stedet valgte vi en annen vei. La oss se hvordan.`,
    },
    {
      id: 'historie-15-3-n-section1',
      type: 'text',
      content: `## De ti oljebud: visdom fra start

Allerede i 1971, bare to ar etter Ekofisk-funnet, vedtok Stortinget noen prinsipper for forvaltningen av oljeressursene. De ble kalt "de ti oljebud", og de la grunnlaget for alt som fulgte.

Kjernen i prinsippene var enkel: oljeressursene tilhorer fellesskapet, ikke oljeselskapene. Staten skulle ha nasjonal styring og kontroll. Oljeinntektene skulle komme hele samfunnet til gode. Utbyggingen skulle bidra til a utvikle norsk industri og kompetanse. Og hensynet til miljo og sikkerhet skulle sta sentralt.

For a sikre kontroll opprettet staten sitt eget oljeselskap, **Statoil**, i 1972. I stedet for bare a gi lisenser til utenlandske selskaper og ta inn skatt, engasjerte staten seg direkte i virksomheten. Statoil ble etter hvert et av verdens storste oljeselskaper.

I tillegg kom **hoye skatter**. Oljeselskapene betaler over 70 prosent skatt pa overskuddet -- langt mer enn andre naeringer. Dette sikrer at mesteparten av verdiskapingen tilflyter fellesskapet.

Oljebuda var et uttrykk for noe dypt i norsk politisk kultur: en skepsis mot a la markedet styre fritt, og en tro pa at fellesskapet bor forvalte naturressursene. Denne tankegangen har roter tilbake til vannkraften, der Norge ogsa valgte offentlig eierskap og kontroll.`,
    },
    {
      id: 'historie-15-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-15-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa de ti oljebud og statlig oljeforvaltning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-3-n-quiz1-q0',
            task: 'Hva var hovedbudskapet i "de ti oljebud" fra 1971?',
            options: [
              { id: 'a', text: 'At oljeselskapene skulle fa beholde all profitten', isCorrect: false },
              { id: 'b', text: 'At oljeressursene tilhorer fellesskapet og staten skulle ha kontroll', isCorrect: true },
              { id: 'c', text: 'At Norge ikke burde utvinne olje av miljoohensyn', isCorrect: false },
              { id: 'd', text: 'At bare utenlandske selskaper skulle fa lete etter olje', isCorrect: false },
            ],
            solution: 'De ti oljebud slo fast at oljeressursene tilhorer det norske fellesskapet, at staten skulle ha nasjonal styring og kontroll, og at inntektene skulle komme hele samfunnet til gode. Dette la grunnlaget for norsk oljeforvaltning med statlig eierskap (Statoil) og hoye skatter.',
          },
          {
            id: 'historie-15-3-n-quiz1-q1',
            task: 'Hvorfor opprettet staten Statoil i 1972?',
            options: [
              { id: 'a', text: 'For a selge bensin til norske forbrukere', isCorrect: false },
              { id: 'b', text: 'For a sikre statlig deltakelse og kontroll i oljevirksomheten, ikke bare gi lisenser til utenlandske selskaper', isCorrect: true },
              { id: 'c', text: 'For a konkurrere med svenske oljeselskaper', isCorrect: false },
              { id: 'd', text: 'For a stanse all oljeutvinning i Nordsoen', isCorrect: false },
            ],
            solution: 'Statoil ble opprettet i 1972 slik at staten kunne engasjere seg direkte i oljevirksomheten, ikke bare gi lisenser og ta inn skatt. Dette sikret statlig kontroll og at en stor del av verdiskapingen tilfalt fellesskapet.',
          },
          {
            id: 'historie-15-3-n-quiz1-q2',
            task: 'Omtrent hvor mye skatt betaler oljeselskaper pa overskuddet i Norge?',
            options: [
              { id: 'a', text: 'Ca. 20 prosent, som andre naeringer', isCorrect: false },
              { id: 'b', text: 'Ca. 50 prosent', isCorrect: false },
              { id: 'c', text: 'Over 70 prosent -- langt mer enn andre naeringer', isCorrect: true },
              { id: 'd', text: 'De betaler ingen skatt', isCorrect: false },
            ],
            solution: 'Oljeselskapene betaler over 70 prosent skatt pa overskuddet -- langt mer enn andre naeringer. Sammen med statlig eierskap sikrer dette at mesteparten av verdiskapingen fra oljen tilflyter fellesskapet.',
          },
          {
            id: 'historie-15-3-n-quiz1-q3',
            task: 'Hvilken norsk tradisjon hadde oljebuda roter i?',
            options: [
              { id: 'a', text: 'Vikingtiden og sjofart', isCorrect: false },
              { id: 'b', text: 'Tradisjon for offentlig eierskap av naturressurser, som vannkraften', isCorrect: true },
              { id: 'c', text: 'Tradisjon for a la utenlandske selskaper styre fritt', isCorrect: false },
              { id: 'd', text: 'Norsk sjomannstradisjon', isCorrect: false },
            ],
            solution: 'Oljebuda bygget pa en norsk politisk tradisjon med offentlig eierskap og kontroll over naturressurser. Allerede med vannkraften hadde Norge valgt at fellesskapet skulle eie og kontrollere viktige naturressurser, heller enn a la private selskaper styre fritt.',
          },
        ],
      },
    },
    {
      id: 'historie-15-3-n-section2',
      type: 'text',
      content: `## Oljefondet: a spare for fremtiden

Pa slutten av 1980-tallet begynte norske politikere a bekymre seg. Oljeinntektene strommet inn, men hva skulle skje nar oljen tok slutt? Og hva om vi brukte alle pengene na og overhetet okonomien?

Andre land hadde gjort akkurat denne feilen. Fenomenet kalles "hollandsk syke" etter Nederland, som opplevde okonomiske problemer da de brukte gassinntektene for raskt. Lonnningene steg, valutakursen styrket seg, og annen industri tapte konkurranseevne.

Losningen ble **Statens pensjonsfond utland** -- bedre kjent som **oljefondet**. Ideen er genial i sin enkelhet: statens oljeinntekter settes inn i fondet, som investerer pengene i utlandet. Kun avkastningen -- rundt tre prosent arlig -- kan brukes over statsbudsjettet. Dette kalles "handlingsregelen".

Hvorfor investere i utlandet? Fordi hvis pengene ble brukt hjemme, ville de drive opp priser og lonninger og svekke andre naeringers konkurranseevne. Ved a investere i utenlandske aksjer, obligasjoner og eiendom holder vi pengene borte fra norsk okonomi til de trengs.

I dag er oljefondet verdens storste statlige investeringsfond, verdt over 15 000 milliarder kroner. Det eier smabiter av tusenvis av selskaper verden over. Hver nordmann har i prinsippet flere millioner stende i fondet.

Oljefondet handler om noe dypt moralsk: generasjonsrettferdighet. Oljen er en engangsgave fra naturen. De som lever na har ikke mer rett til den enn de som kommer etter oss. Ved a spare deler vi rikdommen med fremtidige generasjoner.`,
    },
    {
      id: 'historie-15-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-15-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa oljefondet og handlingsregelen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-3-n-quiz2-q0',
            task: 'Hvorfor investerer oljefondet pengene i utlandet?',
            options: [
              { id: 'a', text: 'Fordi norske investeringer er for risikable', isCorrect: false },
              { id: 'b', text: 'For a unnga at pengene overheter norsk okonomi og svekker andre naeringers konkurranseevne', isCorrect: true },
              { id: 'c', text: 'Fordi norske lover forbyr investeringer hjemme', isCorrect: false },
              { id: 'd', text: 'Fordi utenlandske aksjer alltid gir hoyere avkastning', isCorrect: false },
            ],
            solution: 'Oljefondet investerer i utlandet for a unnga "hollandsk syke" -- at for mye penger i norsk okonomi driver opp lonninger og priser, og svekker annen industris konkurranseevne. Ved a holde pengene borte til de trengs, beskytter vi okonomisk mangfold og deler rikdommen med fremtidige generasjoner.',
          },
          {
            id: 'historie-15-3-n-quiz2-q1',
            task: 'Hva er "handlingsregelen"?',
            options: [
              { id: 'a', text: 'En regel om at all olje ma utvinnes innen 2050', isCorrect: false },
              { id: 'b', text: 'En regel om at kun avkastningen av oljefondet -- rundt tre prosent arlig -- kan brukes over statsbudsjettet', isCorrect: true },
              { id: 'c', text: 'En regel om at oljefondet ikke kan investere i aksjer', isCorrect: false },
              { id: 'd', text: 'En regel om at alle nordmenn far en arlig utbetaling fra fondet', isCorrect: false },
            ],
            solution: 'Handlingsregelen sier at kun avkastningen av oljefondet -- rundt tre prosent arlig -- kan brukes over statsbudsjettet. Dette sikrer at selve kapitalen bevares for fremtidige generasjoner, og at norsk okonomi ikke overopphetes.',
          },
          {
            id: 'historie-15-3-n-quiz2-q2',
            task: 'Hva er "hollandsk syke"?',
            options: [
              { id: 'a', text: 'En sykdom som rammet nederlandske oljearbeidere', isCorrect: false },
              { id: 'b', text: 'En epidemi pa 1980-tallet', isCorrect: false },
              { id: 'c', text: 'Okonomiske problemer nar et land bruker ressursinntekter for raskt, slik at lonninger stiger og annen industri taper konkurranseevne', isCorrect: true },
              { id: 'd', text: 'En politisk krise i Nederland', isCorrect: false },
            ],
            solution: '"Hollandsk syke" er oppkalt etter Nederland, som opplevde okonomiske problemer da de brukte gassinntektene for raskt. Lonningene steg, valutakursen styrket seg, og annen industri tapte konkurranseevne. Norge ville unnga det samme og opprettet oljefondet.',
          },
          {
            id: 'historie-15-3-n-quiz2-q3',
            task: 'Hva handler ideen om "generasjonsrettferdighet" i forbindelse med oljefondet om?',
            options: [
              { id: 'a', text: 'At bare eldre nordmenn far bruke oljepenger', isCorrect: false },
              { id: 'b', text: 'At oljen er en engangsgave fra naturen, og de som lever na har ikke mer rett til den enn fremtidige generasjoner', isCorrect: true },
              { id: 'c', text: 'At unge nordmenn ma jobbe hardere enn eldre', isCorrect: false },
              { id: 'd', text: 'At oljefondet bare kan brukes av mennesker fodt etter 2000', isCorrect: false },
            ],
            solution: 'Generasjonsrettferdighet betyr at oljen er en engangsgave fra naturen. De som lever na har ikke storre rett til rikdommen enn kommende generasjoner. Ved a spare i oljefondet deler vi rikdommen med dem som kommer etter oss.',
          },
        ],
      },
    },
    {
      id: 'historie-15-3-n-section3',
      type: 'text',
      content: `## Oljens velsignelser og forbannelser

Det er ingen tvil om at oljen har forandret Norge. Fra a vaere et av Vest-Europas fattigere land er vi blitt et av verdens rikeste. Velferdsstaten er solid finansiert. Infrastrukturen er god. Arbeidsloosheten er lav.

Oljeindustrien har ogsa bygget kompetanse og teknologi. Norske selskaper er verdensledende pa offshore-teknologi. Denne kunnskapen kan ogsa brukes til havvind og andre gronne naeringer.

Men rikdommen har kostet. Andre naeringer sliter med a konkurrere nar oljebransjen kan betale de hoyeste lonnningene. Unge ingeniorer soker seg til olje fremfor andre bransjer. Dette gjor omstilling vanskeligere.

Og sa er det det store sporsmaalet: klimaet. Norge tjener penger pa a eksportere fossil energi som bidrar til global oppvarming. Samtidig onsker vi a vaere en klimanasjon som kutter utslipp. Er dette forenlig?

Noen mener at norsk gass er renere enn kull, og dermed hjelper verden i overgangsfasen. Andre mener vi ma la oljen ligge for a vaere troverdige pa klima. Dette er et genuint politisk dilemma som Norge ma handtere i arene fremover.`,
    },
    {
      id: 'historie-15-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-15-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa oljens velsignelser og forbannelser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-3-n-quiz3-q0',
            task: 'Hva er "det norske paradokset" i klimasammenheng?',
            options: [
              { id: 'a', text: 'At Norge har bade mye sol og mye regn', isCorrect: false },
              { id: 'b', text: 'At Norge tjener penger pa fossil energi samtidig som vi onsker a vaere en klimanasjon', isCorrect: true },
              { id: 'c', text: 'At Norge har mange fjorder men fa innsjooer', isCorrect: false },
              { id: 'd', text: 'At Norge eksporterer stroom men importerer olje', isCorrect: false },
            ],
            solution: 'Det norske paradokset er at vi tjener enorme summer pa a eksportere olje og gass -- fossil energi som bidrar til klimaendringer -- samtidig som vi onsker a fremsta som en klimanasjon. Dette skaper et dilemma: kan vi vaere troverdige pa klima nar hele var velstand hviler pa fossil energi?',
          },
          {
            id: 'historie-15-3-n-quiz3-q1',
            task: 'Hvordan har oljen pavirket andre norske naeringer negativt?',
            options: [
              { id: 'a', text: 'Andre naeringer har ikke blitt pavirket i det hele tatt', isCorrect: false },
              { id: 'b', text: 'Oljebransjen kan betale de hoyeste lonningene, sa andre naeringer sliter med a tiltrekke seg kompetanse', isCorrect: true },
              { id: 'c', text: 'Oljen har gjort all annen industri ulovlig', isCorrect: false },
              { id: 'd', text: 'Andre naeringer har fatt for mye offentlig stotte', isCorrect: false },
            ],
            solution: 'Oljebransjen tilbyr de hoyeste lonningene, noe som gjor det vanskelig for andre naeringer a konkurrere om arbeidskraft. Unge ingeniorer soker seg til olje fremfor andre bransjer, og dette gjor omstillingen til nye naeringer vanskeligere.',
          },
          {
            id: 'historie-15-3-n-quiz3-q2',
            task: 'Hvilket argument bruker de som mener Norge fortsatt bor utvinne gass?',
            options: [
              { id: 'a', text: 'At gass ikke har noe med klima a gjore', isCorrect: false },
              { id: 'b', text: 'At norsk gass er renere enn kull og kan hjelpe verden i overgangsfasen bort fra fossil energi', isCorrect: true },
              { id: 'c', text: 'At Norge aldri har tjent penger pa gass', isCorrect: false },
              { id: 'd', text: 'At gass er en fornybar energikilde', isCorrect: false },
            ],
            solution: 'Tilhengerne argumenterer med at norsk gass er renere enn kull, og at den derfor kan hjelpe verden i overgangsfasen til fornybar energi. Motstandere mener derimot at vi ma la oljen ligge for a vaere troverdige pa klima.',
          },
        ],
      },
    },
    {
      id: 'historie-15-3-n-section4',
      type: 'text',
      content: `## Fra industrisamfunn til kunnskapssamfunn

Oljealderen falt sammen med en annen stor forandring: overgangen fra industri- til kunnskapssamfunn. Mens oljen ga Norge penger, gjennomgikk resten av okonomien en fundamental omstilling.

Tradisjonell industri som tekstil og verft ble nedbygget. Arbeidsplassene forsvant til lavkostland. Men nye naeringer vokste frem: teknologi, tjenesteyting, kreative naeringer. Arbeidslivet ble mer kunnskapsbasert.

Samtidig skjedde store sosiale endringer. Kvinners yrkesdeltakelse okte dramatisk. Utdanningsnivaaet steg. Folk flyttet fra bygd til by. Og innvandring forandret befolkningssammensetningen.

Na star vi kanskje overfor en ny omstilling. Oljen vil ikke vare evig, og klimahensyn presser pa for en gronnnere okonomi. Kan kompetansen fra oljebransjen brukes til havvind, hydrogen og karbonfangst? Kan oljefondet finansiere overgangen til et barekraftig samfunn?

Historien viser at Norge har klart store omstillinger for. Fra jordbruk til industri, fra fiske til olje. Hver gang har vi matte la det gamle fare for at det nye kunne vokse frem. Kanskje star vi ved et slikt veiskille igjen.`,
    },
    {
      id: 'historie-15-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-15-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa overgangen til kunnskapssamfunnet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-3-n-quiz4-q0',
            task: 'Hvilke store samfunnsendringer skjedde parallelt med oljealderen?',
            options: [
              { id: 'a', text: 'Norge ble et jordbrukssamfunn igjen', isCorrect: false },
              { id: 'b', text: 'Overgang til kunnskapssamfunn, okende kvinnelig yrkesdeltakelse, urbanisering og innvandring', isCorrect: true },
              { id: 'c', text: 'Alle flyttet fra byen til bygda', isCorrect: false },
              { id: 'd', text: 'Utdanningsnivaaet sank', isCorrect: false },
            ],
            solution: 'Oljealderen falt sammen med overgangen fra industrisamfunn til kunnskapssamfunn: tradisjonell industri ble nedbygget, tjenestenaeringer vokste, kvinners yrkesdeltakelse okte dramatisk, utdanningsnivaaet steg, urbaniseringen fortsatte, og innvandring forandret befolkningen.',
          },
          {
            id: 'historie-15-3-n-quiz4-q1',
            task: 'Hva skjedde med tradisjonell norsk industri som tekstil og verft under oljealderen?',
            options: [
              { id: 'a', text: 'Den ble storre og mer lonnsom enn noen gang', isCorrect: false },
              { id: 'b', text: 'Den forble uendret', isCorrect: false },
              { id: 'c', text: 'Den ble nedbygget da arbeidsplassene forsvant til lavkostland', isCorrect: true },
              { id: 'd', text: 'Den ble overtatt av oljeselskapene', isCorrect: false },
            ],
            solution: 'Tradisjonell industri som tekstil og verft ble nedbygget fordi arbeidsplassene forsvant til lavkostland. I stedet vokste nye naeringer frem: teknologi, tjenesteyting og kunnskapsbaserte naeringer.',
          },
          {
            id: 'historie-15-3-n-quiz4-q2',
            task: 'Hvilke nye naeringer kan bruke kompetanse fra oljeindustrien?',
            options: [
              { id: 'a', text: 'Tradisjonelt fiske og jordbruk', isCorrect: false },
              { id: 'b', text: 'Havvind, hydrogen og karbonfangst', isCorrect: true },
              { id: 'c', text: 'Turistindustri og underholdning', isCorrect: false },
              { id: 'd', text: 'Oljeindustrien har ingen overforbar kompetanse', isCorrect: false },
            ],
            solution: 'Norske selskaper er verdensledende pa offshore-teknologi, og denne kompetansen kan overforees til gronne naeringer som havvind, hydrogen og karbonfangst. Dette kan bli sentralt i omstillingen bort fra fossil energi.',
          },
        ],
      },
    },
    {
      id: 'historie-15-3-n-section5',
      type: 'text',
      content: `## Forberede fremtiden

Oljealderen har gitt Norge en unik mulighet. Vi har bygget et enormt fond og en solid velferdsstat. Men olje er ikke-fornybar, og verden ma kutte fossil energibruk. Hvordan forbereder vi oss pa tiden etter oljen?

Optimistene peker pa at oljefondet kan finansiere velferdsstaten lenge etter at siste oljedraape er hentet opp. Avkastningen kan erstatte oljeinntektene. Og kompetansen fra offshore-industrien kan brukes til gronne naeringer som havvind.

Pessimistene bekymrer seg for at vi har blitt for avhengige av oljen. Det hoye lonnsnivaet gjor det vanskelig a konkurrere internasjonalt. Ungdom velger "trygge" oljekarrierer fremfor a ta sjanser med nye naeringer. Og viljen til omstilling kan mangle sa lenge oljepengene strommeor inn.

Uansett hvilket syn man har, er det klart at Norge star overfor store valg i arene fremover. Skal vi lete etter mer olje, eller la noe ligge? Hvordan skal oljefondet investeres -- ogsa i gronne selskaper? Og hvordan bygger vi nye naeringer som kan erstatte oljeinntektene?

Historien gir oss ingen fasitsvar, men den gir oss perspektiv. Norge har forvaltet oljerikdommen bedre enn de fleste oljerike land. Sporsmalet er om vi kan vise samme visdom i overgangen til en tid etter oljen.`,
    },
    {
      id: 'historie-15-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-15-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa Norges fremtid etter oljen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-3-n-quiz5-q0',
            task: 'Hva er hovedutfordringen for Norge nar det gjelder a forberede seg pa tiden etter oljen?',
            options: [
              { id: 'a', text: 'At oljefondet er for lite', isCorrect: false },
              { id: 'b', text: 'At vi har blitt avhengige av oljeokonomien og ma omstille til nye naeringer', isCorrect: true },
              { id: 'c', text: 'At andre land vil ta oljen var', isCorrect: false },
              { id: 'd', text: 'At oljeprisen alltid vil vaere hoy', isCorrect: false },
            ],
            solution: 'Hovedutfordringen er at Norge har blitt avhengig av oljeokonomien -- hoyt lonnsnivaer, mye kompetanse i oljebransjen, og velferdsstaten er delvis finansiert av oljepenger. Vi ma bygge nye naeringer som kan erstatte oljeinntektene, uten a miste den velstanden vi har oppbygget.',
          },
          {
            id: 'historie-15-3-n-quiz5-q1',
            task: 'Hva mener optimistene om Norges fremtid etter oljen?',
            options: [
              { id: 'a', text: 'At oljen aldri vil ta slutt', isCorrect: false },
              { id: 'b', text: 'At oljefondet kan finansiere velferdsstaten lenge etter siste oljedraape, og offshore-kompetanse kan brukes til gronne naeringer', isCorrect: true },
              { id: 'c', text: 'At Norge bor bruke alle oljepengene na', isCorrect: false },
              { id: 'd', text: 'At Norge ikke trenger a forberede seg', isCorrect: false },
            ],
            solution: 'Optimistene peker pa at avkastningen fra oljefondet kan erstatte oljeinntektene, og at kompetansen fra offshore-industrien kan brukes til gronne naeringer som havvind. Norge har ogsa vist evne til a gjennomfore store omstillinger tidligere.',
          },
          {
            id: 'historie-15-3-n-quiz5-q2',
            task: 'Hva bekymrer pessimistene seg for nar det gjelder Norges oljeavhengighet?',
            options: [
              { id: 'a', text: 'At oljen forandrer klimaet i Norge', isCorrect: false },
              { id: 'b', text: 'At det hoye lonnsnivaet gjor det vanskelig a konkurrere internasjonalt, og at viljen til omstilling mangler sa lenge oljepengene strommer inn', isCorrect: true },
              { id: 'c', text: 'At oljefondet investerer i feil selskaper', isCorrect: false },
              { id: 'd', text: 'At ungdommer ikke vil studere', isCorrect: false },
            ],
            solution: 'Pessimistene bekymrer seg for at det hoye lonnsnivaet gjor det vanskelig a konkurrere internasjonalt, at ungdom velger "trygge" oljekarrierer fremfor a satse pa nye naeringer, og at viljen til omstilling mangler sa lenge oljepengene strommer inn.',
          },
        ],
      },
    },
    {
      id: 'historie-15-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Oljen har forvandlet Norge pa femti ar. Fra et relativt fattig land er vi blitt et av verdens rikeste. Men rikdommen kommer med utfordringer og ansvar.

**Nokkelbegreper du na kjenner:**
- **Ekofisk**: Norges forste store oljefunn (1969)
- **De ti oljebud** (1971): Prinsipper for forvaltning av oljeressursene
- **Statoil** (na Equinor): Statlig oljeselskap opprettet i 1972
- **Oljefondet**: Statens pensjonsfond utland, verdens storste investeringsfond
- **Handlingsregelen**: Kun avkastningen av oljefondet kan brukes over statsbudsjettet
- **Hollandsk syke**: Okonomiske problemer nar et land bruker ressursinntekter for raskt

**Det viktigste du tar med deg:**
Norges oljerikdom er ikke bare flaks -- den er ogsa resultat av kloke politiske valg om nasjonal kontroll, hoye skatter og fondssparing for fremtiden. Men oljen skaper ogsa dilemmaer: klimaparadokset, avhengighet av en naering, og utfordringen med a omstille til en tid etter oljen. Hvordan vi handterer disse utfordringene, vil forme Norges fremtid.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 15.4 NARRATIV: Likestilling og sosiale reformer
// ============================================================================

export const CHAPTER_HISTORIE_15_4_NARRATIV: TextbookChapter = {
  id: 'historie-15-4-narrativ',
  courseId: 'historie',
  chapterNumber: '15.4',
  title: 'Likestilling og sosiale reformer',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om kampen for likestilling og hvordan Norge gikk fra husmorsidealet til et av verdens mest likestilte samfunn.',
  estimatedMinutes: 40,
  competenceGoals: ['myndiggjøring og frigjøring - norsk og samisk historie'],
  linkedChapterId: 'historie-15-4',
  content: [
    {
      id: 'historie-15-4-n-intro',
      type: 'text',
      content: `## Husmorens oppgjor

Det er 1960. En typisk norsk familie ser slik ut: far gar pa jobb, mor er hjemme med barna. Hun lager mat, vasker klaoer, steller hus. Nar far kommer hjem, er middagen klar. Sa sitter han og leser avisen mens hun rydder opp.

De fleste tenkte ikke over at det kunne vaere annerledes. "Slik er det bare". Kvinner hadde formell stemmerett siden 1913, men i praksis var livet deres styrt av forventninger om a vaere gode husmoodre.

Ti ar senere var alt i endring. En ny generasjon kvinner krevde mer enn formelle rettigheter -- de krevde reell likestilling. Retten til a bestemme over egen kropp. Retten til a ha karriere. Retten til lik lonn for likt arbeid. Og retten til a dele pa ansvaret for barn og hjem.

La oss folge denne kampen -- en av de storste sosiale revolusjonene i moderne norsk historie.`,
    },
    {
      id: 'historie-15-4-n-section1',
      type: 'text',
      content: `## Nyfeminismen: det personlige er politisk

Rundt 1970 vokste det frem en ny kvinnebevegelse -- **nyfeminismen**. Den var inspirert av internasjonale stromninger og av studentoppjoret i 1968, men den tok opp sakene til norske kvinner.

Nyfeminismen skilte seg fra den tidligere kvinnebevegelsen pa viktige mater. Den gamle bevegelsen hadde kjempet for formelle rettigheter -- stemmerett, tilgang til utdanning. Nyfeminismen gikk dypere. De stilte sporsmal som: Hvorfor er det kvinner som vasker gulvene? Hvorfor er det kvinner som alltid tar oppvasken?

Slagordet var "det personlige er politisk". Ting som tidligere var "private" -- hvordan man fordelte husarbeid, hvem som passet barna, sex og prevensjon -- ble na politiske sporsmal. Disse "smaatinga" var egentlig maktsporsmal. Og makten skulle endres.

Organisasjoner som Nyfeministene og Kvinnefronten ble dannet. De arrangerte demonstrasjoner, skrev debattinnlegg, og skapte bevisstgjoringsgrupper der kvinner kunne dele erfaringer. Mange kvinner opplevde for forste gang at deres frustrasjon ikke var privat -- den var delt av tusenvis av andre.`,
    },
    {
      id: 'historie-15-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-15-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa nyfeminismen og 1970-tallets kvinnebevegelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-4-n-quiz1-q0',
            task: 'Hva mente nyfeminismen med at "det personlige er politisk"?',
            options: [
              { id: 'a', text: 'At alle burde vaere medlemmer av et politisk parti', isCorrect: false },
              { id: 'b', text: 'At privatsfaeren (husarbeid, barneomsorg, kropp) ogsa handler om makt og ma endres politisk', isCorrect: true },
              { id: 'c', text: 'At politikere burde bestemme over folks privatliv', isCorrect: false },
              { id: 'd', text: 'At kvinner ikke burde stemme', isCorrect: false },
            ],
            solution: '"Det personlige er politisk" betydde at ting som tidligere ble sett som private -- fordeling av husarbeid, hvem som passet barna, kontroll over egen kropp -- egentlig var maktsporsmal som matte lossses politisk. Kvinners undertrykkelse skjedde ikke bare i arbeidslivet, men ogsa i hjemmet.',
          },
          {
            id: 'historie-15-4-n-quiz1-q1',
            task: 'Hvordan skilte nyfeminismen seg fra den eldre kvinnebevegelsen?',
            options: [
              { id: 'a', text: 'Nyfeminismen kjempet bare for stemmerett', isCorrect: false },
              { id: 'b', text: 'Den eldre bevegelsen kjempet for formelle rettigheter som stemmerett, mens nyfeminismen ogsa tok opp maktforhold i privatsfaeren', isCorrect: true },
              { id: 'c', text: 'Nyfeminismen var mot at kvinner jobbet', isCorrect: false },
              { id: 'd', text: 'Det var ingen forskjell mellom dem', isCorrect: false },
            ],
            solution: 'Den eldre kvinnebevegelsen hadde kjempet for formelle rettigheter som stemmerett og tilgang til utdanning. Nyfeminismen gikk dypere og stilte sporsmal om maktforhold i hjemmet: hvorfor kvinner vasket gulvene, tok oppvasken og passet barna. De sa dette som politiske maktsporsmal.',
          },
          {
            id: 'historie-15-4-n-quiz1-q2',
            task: 'Hva var bevisstgjoringsgrupper i nyfeminismen?',
            options: [
              { id: 'a', text: 'Politiske partier for kvinner', isCorrect: false },
              { id: 'b', text: 'Skoleundervisning om likestilling', isCorrect: false },
              { id: 'c', text: 'Grupper der kvinner delte erfaringer og oppdaget at deres frustrasjon var felles, ikke privat', isCorrect: true },
              { id: 'd', text: 'Kampanjer for a fa flere kvinner til a lese aviser', isCorrect: false },
            ],
            solution: 'Bevisstgjoringsgrupper var samlinger der kvinner delte personlige erfaringer. Mange opplevde for forste gang at deres frustrasjon ikke var privat -- den var delt av tusenvis av andre kvinner. Dette styrket forstaelsen av at problemet var strukturelt, ikke individuelt.',
          },
        ],
      },
    },
    {
      id: 'historie-15-4-n-section2',
      type: 'text',
      content: `## Gjennombrudd pa 1970-tallet

1970-tallet ble et tiaar med store seire for likestillingskampen.

I 1978 kom **abortloven**, som ga kvinner rett til selvbestemt abort inntil 12. uke. Kampen hadde vaert bitter. Motstandere mente staten tillot drap pa ufodte barn. Tilhengere mente kvinner matte ha rett til a bestemme over egen kropp. Loven ble vedtatt, og har bestaatt i snart femti ar.

Samme ar kom **likestillingsloven**, som forbod diskriminering pa grunnlag av kjonn. Et eget **likestillingsombud** ble opprettet for a handheve loven. Senere ble det innfort krav om kjonnsbalanse i styrer for store selskaper.

Men kanskje viktigst var utbyggingen av **barnehager**. Sa lenge moodre var alene om barneomsorg, kunne de ikke jobbe fullt. Med barnehager ble det mulig a kombinere barn og karriere. Det tok tid -- full barnehagedekning ble forst et mal pa 2000-tallet -- men retningen var klar.

Disse reformene hang sammen. Abortloven ga kvinner kontroll over om og nar de ville fa barn. Barnehager ga dem mulighet til a jobbe selv om de hadde barn. Og likestillingsloven beskyttet dem mot diskriminering i arbeidslivet. Sammen la de grunnlaget for en revolusjon i kvinners yrkesdeltakelse.`,
    },
    {
      id: 'historie-15-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-15-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa likestillingsreformene pa 1970-tallet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-4-n-quiz2-q0',
            task: 'Hvorfor var barnehageutbygging viktig for likestillingen?',
            options: [
              { id: 'a', text: 'Fordi barnehager larte barn om likestilling', isCorrect: false },
              { id: 'b', text: 'Fordi barnehager gjorde det mulig for modre a jobbe utenfor hjemmet', isCorrect: true },
              { id: 'c', text: 'Fordi barnehager var gratis', isCorrect: false },
              { id: 'd', text: 'Fordi fedre jobbet i barnehager', isCorrect: false },
            ],
            solution: 'Barnehageutbygging var avgjorende fordi det frigjorde moodre fra heldagsomsorg for barn. Sa lenge kvinner var alene om barneomsorgen, kunne de ikke ha full jobb. Barnehager gjorde det mulig a kombinere barn og karriere, og var dermed en forutsetning for kvinners yrkesdeltakelse.',
          },
          {
            id: 'historie-15-4-n-quiz2-q1',
            task: 'Hva innebar abortloven fra 1978?',
            options: [
              { id: 'a', text: 'At abort ble forbudt i alle tilfeller', isCorrect: false },
              { id: 'b', text: 'At kvinner fikk rett til selvbestemt abort inntil 12. uke', isCorrect: true },
              { id: 'c', text: 'At bare leger kunne bestemme om abort', isCorrect: false },
              { id: 'd', text: 'At abort ble pabudt ved komplikasjoner', isCorrect: false },
            ],
            solution: 'Abortloven fra 1978 ga kvinner rett til selvbestemt abort inntil 12. uke. Kampen hadde vaert bitter, men loven ga kvinner kontroll over om og nar de ville fa barn -- en grunnleggende forutsetning for reell likestilling.',
          },
          {
            id: 'historie-15-4-n-quiz2-q2',
            task: 'Hvordan hang abortloven, barnehageutbygging og likestillingsloven sammen?',
            options: [
              { id: 'a', text: 'De hadde ingen sammenheng', isCorrect: false },
              { id: 'b', text: 'De var alle vedtatt i 1945', isCorrect: false },
              { id: 'c', text: 'Abortloven ga kontroll over fruktbarhet, barnehager muliggjorde yrkesdeltakelse, og likestillingsloven beskyttet mot diskriminering -- sammen la de grunnlaget for kvinners frigjoring', isCorrect: true },
              { id: 'd', text: 'De ble alle avskaffet pa 1990-tallet', isCorrect: false },
            ],
            solution: 'Reformene hang tett sammen: abortloven ga kvinner kontroll over om og nar de ville fa barn, barnehager ga dem mulighet til a jobbe selv med barn, og likestillingsloven beskyttet dem mot diskriminering pa arbeidsplassen. Sammen la de grunnlaget for en revolusjon i kvinners yrkesdeltakelse.',
          },
          {
            id: 'historie-15-4-n-quiz2-q3',
            task: 'Hva var likestillingsombudet?',
            options: [
              { id: 'a', text: 'En organisasjon som kjempet mot likestilling', isCorrect: false },
              { id: 'b', text: 'Et offentlig ombud opprettet for a handheve likestillingsloven og motvirke kjonnssdiskriminering', isCorrect: true },
              { id: 'c', text: 'En privat stiftelse som drev barnehager', isCorrect: false },
              { id: 'd', text: 'En domstol som kun behandlet skilsmissesaker', isCorrect: false },
            ],
            solution: 'Likestillingsombudet ble opprettet for a handheve likestillingsloven fra 1978, som forbod diskriminering pa grunnlag av kjonn. Ombudet sikret at loven ble fulgt opp i praksis, og ble et viktig verktoy i kampen mot diskriminering.',
          },
        ],
      },
    },
    {
      id: 'historie-15-4-n-section3',
      type: 'text',
      content: `## Fedrekvoten: pappaer pa banen

En ting var at kvinner kunne jobbe. En annen var at menn skulle ta sin del hjemme. Her kom en norsk oppfinnelse: **fedrekvoten**.

I 1993 innforte Norge som forste land i verden en del av foreldrepermisjonen forbeholdt far. Hvis far ikke tok ut disse ukene, forfalt de. Han kunne ikke gi dem til mor.

Logikken var enkel men effektiv. Mange fedre ville gjerne vaere mer hjemme med barna, men folte press fra arbeidsgivere og kollegaer for a komme raskt tilbake pa jobb. Med fedrekvoten kunne de si: "Beklager, jeg ma ta ut permisjon -- ellers mister familien pengene."

Og det virket. For fedrekvoten tok ca. 4 prosent av fedre ut permisjon. Na tar nesten alle fedre ut i hvert fall fedrekvoten, og mange tar mer.

Fedrekvoten har endret mer enn statistikk. Den har endret normer. I dag tar norske fedre for gitt at de skal vaere hjemme med nyfodte barn. De laerer omsorgsoppgaver som deres egne fedre aldri larte. Og arbeidsgivere kan ikke lenger anta at bare kvinner tar permisjon.

Norge har blitt et foregangsland, og fedrekvoten har inspirert andre land. Det viser at politikk kan endre dypt forankrede kjonnsmonstre.`,
    },
    {
      id: 'historie-15-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-15-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa fedrekvoten og fedres rolle:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-4-n-quiz3-q0',
            task: 'Hva var poenget med fedrekvoten?',
            options: [
              { id: 'a', text: 'A gi fedre storre arbeidsplikter', isCorrect: false },
              { id: 'b', text: 'A sikre at ogsa fedre tok ut permisjon ved at ukene ellers forfalt', isCorrect: true },
              { id: 'c', text: 'A redusere den totale foreldrepermisjonen', isCorrect: false },
              { id: 'd', text: 'A hindre modre fra a ta permisjon', isCorrect: false },
            ],
            solution: 'Fedrekvoten (1993) er uker forbeholdt far som forfaller hvis han ikke tar dem ut. Poenget var a sikre at ogsa fedre tok permisjon, selv om det var press for a komme raskt tilbake pa jobb. Det har virket: fra 4 prosent for tar na nesten alle fedre ut permisjon.',
          },
          {
            id: 'historie-15-4-n-quiz3-q1',
            task: 'Omtrent hvor mange fedre tok ut foreldrepermisjon for fedrekvoten ble innfort?',
            options: [
              { id: 'a', text: 'Ca. 50 prosent', isCorrect: false },
              { id: 'b', text: 'Ca. 25 prosent', isCorrect: false },
              { id: 'c', text: 'Nesten alle', isCorrect: false },
              { id: 'd', text: 'Ca. 4 prosent', isCorrect: true },
            ],
            solution: 'For fedrekvoten tok bare ca. 4 prosent av fedre ut foreldrepermisjon. Mange folte press fra arbeidsgivere og kollegaer for a komme raskt tilbake pa jobb. Fedrekvoten endret dette dramatisk -- na tar nesten alle fedre ut permisjon.',
          },
          {
            id: 'historie-15-4-n-quiz3-q2',
            task: 'Nar innforte Norge fedrekvoten, og hvorfor var det historisk?',
            options: [
              { id: 'a', text: 'I 2010, som et av de siste landene i Europa', isCorrect: false },
              { id: 'b', text: 'I 1978, samtidig med abortloven', isCorrect: false },
              { id: 'c', text: 'I 1993, som forste land i verden', isCorrect: true },
              { id: 'd', text: 'I 1945, like etter krigen', isCorrect: false },
            ],
            solution: 'Norge innforte fedrekvoten i 1993 som forste land i verden. Det var historisk fordi det viste at politikk kan endre dypt forankrede kjonnsmonstre. Ordningen har inspirert mange andre land til a innfore lignende ordninger.',
          },
          {
            id: 'historie-15-4-n-quiz3-q3',
            task: 'Hvordan har fedrekvoten endret norske fedres rolle utover statistikken?',
            options: [
              { id: 'a', text: 'Den har ikke endret noe i praksis', isCorrect: false },
              { id: 'b', text: 'Den har endret normer -- fedre tar for gitt at de skal vaere hjemme med nyfodte, og arbeidsgivere kan ikke anta at bare kvinner tar permisjon', isCorrect: true },
              { id: 'c', text: 'Den har gjort at fedre jobber mer enn for', isCorrect: false },
              { id: 'd', text: 'Den har bare pavirket fedre i offentlig sektor', isCorrect: false },
            ],
            solution: 'Fedrekvoten har endret normer, ikke bare statistikk. Norske fedre tar for gitt at de skal vaere hjemme med nyfodte barn. De laerer omsorgsoppgaver som deres egne fedre aldri larte. Og arbeidsgivere kan ikke lenger anta at bare kvinner tar permisjon.',
          },
        ],
      },
    },
    {
      id: 'historie-15-4-n-section4',
      type: 'text',
      content: `## Fra husmorsamfunn til toinntektsfamilier

Forandringen har vaert enorm. Pa 1960-tallet var de fleste gifte kvinner hjemmevaerende. I dag er over 75 prosent av kvinner yrkesaktive -- blant de hoyeste tallene i verden.

Dette er ikke bare statistikk. Det handler om at kvinner har fatt okonomisk selvstendighet. De trenger ikke vaere avhengige av en mann for a forsoorge seg. De kan ta utdanning og karriere uten a matte velge bort barn. De kan forlate ekteskap som ikke fungerer.

Men likestillingen er ikke fullfort. Kvinner tjener fortsatt ca. 12-14 prosent mindre enn menn. Arbeidsmarkedet er kjonnsdelt -- kvinner dominerer i omsorg og undervisning, menn i teknologi og finans. Fa kvinner nar toppstillinger, et fenomen som kalles "glasstaket".

Og selv om menn gjor mer hjemme enn for, gjor kvinner fortsatt mest husarbeid og tar stoorst ansvar for barns hverdag. Den "doble byrden" -- full jobb pluss hovedansvar hjemme -- rammer mange kvinner.

Norge er blant verdens mest likestilte land pa de fleste malinger. Men det betyr ikke at kampen er over. Formell likhet i lov er ikke det samme som reell likhet i praksis.`,
    },
    {
      id: 'historie-15-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-15-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa likestilling i Norge i dag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-4-n-quiz4-q0',
            task: 'Hvilke likestillingsutfordringer gjenstaar i Norge i dag?',
            options: [
              { id: 'a', text: 'Kvinner har ikke stemmerett', isCorrect: false },
              { id: 'b', text: 'Lonnsforskjeller, kjonnsdelt arbeidsmarked, glasstaket og ulik arbeidsdeling hjemme', isCorrect: true },
              { id: 'c', text: 'Kvinner far ikke ta utdanning', isCorrect: false },
              { id: 'd', text: 'Det finnes ingen utfordringer -- Norge er helt likestilt', isCorrect: false },
            ],
            solution: 'Selv om Norge er blant verdens mest likestilte land, gjenstaar utfordringer: lonnsforskjeller pa 12-14 prosent, kjonnsdelt arbeidsmarked (kvinner i omsorg, menn i teknikk), fa kvinner i toppstillinger ("glasstaket"), og ulik fordeling av husarbeid og barneansvar.',
          },
          {
            id: 'historie-15-4-n-quiz4-q1',
            task: 'Hva menes med "glasstaket"?',
            options: [
              { id: 'a', text: 'At kvinner ikke far lov til a jobbe i byggebransjen', isCorrect: false },
              { id: 'b', text: 'En usynlig barriere som hindrer kvinner i a na toppstillinger, selv om det ikke finnes formelle hindringer', isCorrect: true },
              { id: 'c', text: 'Et fysisk tak i bygninger som er laget av glass', isCorrect: false },
              { id: 'd', text: 'At menn far hoyre lonninger for det samme arbeidet', isCorrect: false },
            ],
            solution: '"Glasstaket" er en metafor for den usynlige barrieren som hindrer kvinner i a na toppstillinger. Selv om det ikke finnes formelle forbud, forer uformelle strukturer, nettverk og forventninger til at fa kvinner nar de aller oyverste posisjonene i naeringslivet.',
          },
          {
            id: 'historie-15-4-n-quiz4-q2',
            task: 'Hva er den "doble byrden" som rammer mange kvinner?',
            options: [
              { id: 'a', text: 'At kvinner ma ta to jobber for a tjene like mye som menn', isCorrect: false },
              { id: 'b', text: 'At kvinner har full jobb ute og samtidig tar storst ansvar for husarbeid og barns hverdag hjemme', isCorrect: true },
              { id: 'c', text: 'At kvinner betaler dobbelt sa mye skatt som menn', isCorrect: false },
              { id: 'd', text: 'At kvinner ma pendle lenger til jobb enn menn', isCorrect: false },
            ],
            solution: 'Den "doble byrden" betyr at mange kvinner bade har full jobb utenfor hjemmet og tar hovedansvaret for husarbeid og barns hverdag. Selv om menn gjor mer hjemme enn for, gjor kvinner fortsatt mest. Dette viser at formell likhet i lov ikke er det samme som reell likhet i praksis.',
          },
        ],
      },
    },
    {
      id: 'historie-15-4-n-section5',
      type: 'text',
      content: `## Utvidet frigjoring: flere grupper pa banen

Likestillingskampen inspirerte ogsa andre grupper til a kreve sine rettigheter.

**Homofiles kamp** har kanskje vaert den mest synlige. I 1972 ble homofili avkriminalisert -- for da var det faktisk ulovlig. I 1993 kom partnerskapsloven, som ga homofile par juridisk anerkjennelse. Og i 2008 fikk Norge felles ekteskapslov, der likekjonnnede par har samme rettigheter som alle andre.

Fra stigma og kriminalisering til Pride-parader og likekjonnet ekteskap pa femti ar -- det er en enorm holdningsendring. I dag oppgir de fleste nordmenn at de aksepterer homofili fullt ut.

**Funksjonshemmedes rettigheter** har ogsa blitt styrket. HVPU-institusjonene -- store sentralinstitusjoner for utviklingshemmede -- ble lagt ned pa 1990-tallet. Malet ble integrering i samfunnet fremfor adskillelse. Universell utforming skal gjore bygninger og tjenester tilgjengelige for alle.

**Barns rettigheter** har fatt sterkere vern. I 1987 ble fysisk avstraffelse av barn forbudt -- det var faktisk lov for. Barneombudet ble opprettet i 1981, og barnekonvensjonen er na del av norsk lov.

Felles for disse kampene er ideen om menneskeverd og likeverd. Alle mennesker har verdi uansett kjonn, legning eller funksjonsevne. Det hores selvfolggelig ut i dag, men det har vaert -- og er fortsatt -- noe som ma kjempes for.`,
    },
    {
      id: 'historie-15-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-15-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa utvidet frigjoring og rettigheter for flere grupper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-15-4-n-quiz5-q0',
            task: 'Hvordan har holdningene til homofili endret seg i Norge fra 1970 til i dag?',
            options: [
              { id: 'a', text: 'Holdningene har vaert uendret', isCorrect: false },
              { id: 'b', text: 'Fra kriminalisering og stigma til avkriminalisering, partnerskap og felles ekteskapslov', isCorrect: true },
              { id: 'c', text: 'Norge har alltid vaert aksepterende overfor homofili', isCorrect: false },
              { id: 'd', text: 'Homofili ble forbudt i 2008', isCorrect: false },
            ],
            solution: 'Holdningene har endret seg dramatisk: homofili var kriminalisert frem til 1972, partnerskapsloven kom i 1993, og felles ekteskapslov i 2008. Fra stigma og kriminalisering til Pride-parader og full juridisk likestilling pa femti ar -- en av de storste holdningsendringene i moderne norsk historie.',
          },
          {
            id: 'historie-15-4-n-quiz5-q1',
            task: 'Hva skjedde med HVPU-institusjonene pa 1990-tallet?',
            options: [
              { id: 'a', text: 'De ble bygget ut og utvidet', isCorrect: false },
              { id: 'b', text: 'De ble lagt ned, og malet ble integrering av utviklingshemmede i samfunnet fremfor adskillelse', isCorrect: true },
              { id: 'c', text: 'De ble privatisert og ble lonnssomme', isCorrect: false },
              { id: 'd', text: 'De ble flyttet til utlandet', isCorrect: false },
            ],
            solution: 'HVPU-institusjonene -- store sentralinstitusjoner for utviklingshemmede -- ble lagt ned pa 1990-tallet. Det nye malet var integrering i samfunnet, ikke adskillelse. Sammen med universell utforming ble dette et skritt mot et mer inkluderende samfunn.',
          },
          {
            id: 'historie-15-4-n-quiz5-q2',
            task: 'Nar ble fysisk avstraffelse av barn forbudt i Norge?',
            options: [
              { id: 'a', text: 'Det har alltid vaert forbudt', isCorrect: false },
              { id: 'b', text: 'I 1945, rett etter krigen', isCorrect: false },
              { id: 'c', text: 'I 2008, samtidig med felles ekteskapslov', isCorrect: false },
              { id: 'd', text: 'I 1987 -- for da var det faktisk lov', isCorrect: true },
            ],
            solution: 'Fysisk avstraffelse av barn ble forbudt i 1987 -- for da var det faktisk lov a sla barn som del av oppdragelsen. Barneombudet var blitt opprettet i 1981, og barns rettigheter ble gradvis styrket, ogsa gjennom innlemmelse av barnekonvensjonen i norsk lov.',
          },
          {
            id: 'historie-15-4-n-quiz5-q3',
            task: 'Hva er den felles ideen bak kampene for kvinners, homofiles, funksjonshemmedes og barns rettigheter?',
            options: [
              { id: 'a', text: 'At alle grupper bor ha egne lover', isCorrect: false },
              { id: 'b', text: 'At staten bor bestemme over alle borgeres liv', isCorrect: false },
              { id: 'c', text: 'Ideen om menneskeverd og likeverd -- alle mennesker har verdi uansett kjonn, legning eller funksjonsevne', isCorrect: true },
              { id: 'd', text: 'At bare de sterkeste fortjener rettigheter', isCorrect: false },
            ],
            solution: 'Den felles ideen er menneskeverd og likeverd: alle mennesker har verdi uansett kjonn, legning eller funksjonsevne. Det hores selvfolggelig ut i dag, men det har vaert -- og er fortsatt -- noe som ma kjempes for. Likestillingskampen inspirerte andre grupper til a kreve sine rettigheter.',
          },
        ],
      },
    },
    {
      id: 'historie-15-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Fra husmorsamfunnet pa 1960-tallet til dagens toinntektsfamilier har Norge gjennomgaatt en likestillingsrevolusjon. Endringene har skjedd gjennom bade politisk kamp og politiske reformer.

**Nokkelbegreper du na kjenner:**
- **Nyfeminismen**: Ny kvinnebevegelse fra 1970-tallet med slagordet "det personlige er politisk"
- **Abortloven** (1978): Selvbestemt abort inntil 12. uke
- **Likestillingsloven** (1978): Forbud mot diskriminering pa grunnlag av kjonn
- **Fedrekvoten** (1993): Del av foreldrepermisjon forbeholdt far
- **Felles ekteskapslov** (2008): Likekjonnede par far samme rettigheter som alle andre

**Det viktigste du tar med deg:**
Likestilling handler om mer enn formelle rettigheter -- det handler om reell makt og muligheter i hverdagen. Norge har kommet langt, men utfordringer gjenstaar. Kampen for likestilling har ogsa inspirert andre grupper til a kreve sine rettigheter. Endringene viser at samfunnet kan forandres gjennom bevisst politisk innsats -- men ogsa at endring tar tid og krever kontinuerlig innsats.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT AV ALLE KAPITLER
// ============================================================================

export const HISTORIE_NARRATIV_DEL14_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HISTORIE_15_1_NARRATIV,
  CHAPTER_HISTORIE_15_2_NARRATIV,
  CHAPTER_HISTORIE_15_3_NARRATIV,
  CHAPTER_HISTORIE_15_4_NARRATIV,
];
