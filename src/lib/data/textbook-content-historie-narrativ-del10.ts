/**
 * Tekstbok innhold for Historie - NARRATIV VERSJON DEL 10
 * Kapittel 11: Første verdenskrig (11.1 - 11.4)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 11.1 NARRATIV: Årsaker til første verdenskrig
// ============================================================================

export const CHAPTER_HISTORIE_11_1_NARRATIV: TextbookChapter = {
  id: 'historie-11-1-narrativ',
  courseId: 'historie',
  chapterNumber: '11.1',
  title: 'Årsaker til første verdenskrig',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan nasjonalisme, imperialisme og allianser førte Europa mot katastrofe.',
  estimatedMinutes: 45,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  linkedChapterId: 'historie-11-1',
  content: [
    {
      id: 'historie-11-1-n-intro',
      type: 'text',
      content: `## Skuddene som forandret verden

Tenk deg at du star pa et hjorne i Sarajevo, en varm sommerdag i 1914. Det er den 28. juni. En apen bil kjorer sakte forbi med erkehertug Franz Ferdinand av Osterrike-Ungarn og hans kone Sophie. Plutselig horer du to skudd. Erkehertugen og kona hans synker sammen. En ung mann med pistol blir overmannet av mengden.

Denne unge mannen, Gavrilo Princip, ante neppe hva han hadde satt i gang. Pa seks uker ville skuddene hans fore til at alle Europas stormakter var i krig med hverandre. Fire ar senere var 17 millioner mennesker dode, fire imperier hadde kollapset, og verden var forandret for alltid.

Men hvordan kunne et attentat i en liten by pa Balkan utlose den storste krigen verden hadde sett? Svaret ligger ikke bare i hendelsene den sommeren. Det ligger i tiars spenninger, rivaliseringer og frykt som hadde bygget seg opp i Europa. La oss se naermere pa hva som egentlig ledde til forste verdenskrig.`,
    },
    {
      id: 'historie-11-1-n-section1',
      type: 'text',
      content: `## MAIN - Fire faktorer som la grunn for krig

Historikere bruker ofte forkortelsen MAIN for a huske de langsiktige arsakene til forste verdenskrig. La oss ga gjennom hver av dem.

**Militarisme** gjennomsyret Europa i arene for krigen. Alle stormaktene bygget opp enorme haerer og flater. Tyskland og Storbritannia konkurrerte om a ha den mektigste marinen. A vaere en stor nasjon betydde a ha et sterkt militar - og et sterkt militar var noe a vaere stolt av. Uniformer, parader og militaer aere ble dyrket overalt. Generalene hadde enorm innflytelse pa politikken.

**Allianser** delte Europa i to fiendtlige blokker. Pa den ene siden hadde vi Trippelalliansen: Tyskland, Osterrike-Ungarn og Italia. Pa den andre siden Trippelententen: Frankrike, Russland og Storbritannia. Tanken bak alliansene var avskrekking - ingen ville angripe fordi de visste at fiendens allierte ville komme til unnsetning. Men i praksis skapte alliansene en dominoeffekt der enhver konflikt kunne trekke inn alle stormaktene.

**Imperialisme** - konkurransen om kolonier og innflytelse - skapte spenninger mellom stormaktene. Storbritannia og Frankrike hadde de storste imperiene, mens Tyskland - som ble samlet forst i 1871 - kom sent til kolonikapplopet og folte seg forbigatt. Rivaliseringen om Afrika og Asia forgiftet forholdet mellom maktene.

**Nasjonalisme** var kanskje den kraftigste kraften av alle. Folk identifiserte seg sterkt med nasjonen sin og trodde den var overlegen andre nasjoner. Pan-slavisme - ideen om at alle slaviske folk burde sta sammen - drev Russland til a stotte Serbia. Pan-germanisme drev onsket om a samle alle tysktalende. Og pa Balkan, der mange folkegrupper levde om hverandre, var nasjonalismen spesielt eksplosiv.`,
    },
    {
      id: 'historie-11-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-11-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa MAIN-faktorene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-1-n-quiz1-q0',
            task: 'Hva star MAIN for i sammenheng med arsakene til forste verdenskrig?',
            options: [
              { id: 'a', text: 'Militarisme, Allianser, Imperialisme, Nasjonalisme', isCorrect: true },
              { id: 'b', text: 'Militarisme, Allianser, Industrialisering, Nasjonalisme', isCorrect: false },
              { id: 'c', text: 'Mobilisering, Allianser, Imperialisme, Nøytralitet', isCorrect: false },
              { id: 'd', text: 'Militarisme, Avskrekking, Imperialisme, Nasjonalisme', isCorrect: false },
            ],
            solution: 'MAIN star for Militarisme, Allianser, Imperialisme og Nasjonalisme -- de fire langsiktige arsakene til forste verdenskrig.',
          },
          {
            id: 'historie-11-1-n-quiz1-q1',
            task: 'Hvordan skapte alliansesystemet en dominoeffekt?',
            options: [
              { id: 'a', text: 'Alliansene fungerte avskrekkende slik at ingen turde a angripe forst, noe som holdt freden stabil', isCorrect: false },
              { id: 'b', text: 'Enhver konflikt mellom to land kunne trekke inn alle stormaktene fordi de var bundet til a stotte sine allierte', isCorrect: true },
              { id: 'c', text: 'Alliansene ga stormaktene diplomatiske kanaler som kunne brukes til a løse konflikter fredelig før de eskalerte', isCorrect: false },
              { id: 'd', text: 'Alliansene skapte en maktbalanse der stormaktene avtalte a dele Europa i interessesfærer for a unnga krig', isCorrect: false },
            ],
            solution: 'Alliansene delte Europa i to blokker: Trippelalliansen (Tyskland, Osterrike-Ungarn, Italia) og Trippelententen (Frankrike, Russland, Storbritannia). Nar ett land i en blokk ble angrepet, var de allierte forpliktet til a hjelpe. Slik kunne en lokal konflikt utlose en verdenskrig.',
          },
          {
            id: 'historie-11-1-n-quiz1-q2',
            task: 'Hva var sammenhengen mellom imperialisme og spenningene mellom stormaktene?',
            options: [
              { id: 'a', text: 'Imperialismen styrket samarbeidet mellom stormaktene fordi de delte pa koloniomradene gjennom Berlin-konferansen i 1884', isCorrect: false },
              { id: 'b', text: 'Imperialismen skapte spenninger fordi Storbritannia forsøkte a hindre alle andre land fra a skaffe seg kolonier', isCorrect: false },
              { id: 'c', text: 'Konkurransen om kolonier og innflytelse forgiftet forholdet mellom stormaktene, særlig Tyskland som kom sent til kolonikapplopet', isCorrect: true },
              { id: 'd', text: 'Imperialismen skapte spenninger hovedsakelig mellom Frankrike og Russland, som konkurrerte om innflytelse i Midtøsten', isCorrect: false },
            ],
            solution: 'Imperialismen -- konkurransen om kolonier og innflytelse -- skapte spenninger mellom stormaktene. Storbritannia og Frankrike hadde de storste imperiene, mens Tyskland, samlet forst i 1871, folte seg forbigatt. Rivaliseringen om Afrika og Asia forgiftet forholdet mellom maktene.',
          },
        ],
      },
    },
    {
      id: 'historie-11-1-n-section2',
      type: 'text',
      content: `## Balkan - Europas kruttonne

Hvis MAIN-faktorene var kruttet, var Balkan lunta. Denne regionen i sorøst-Europa ble kalt "Europas kruttønne" fordi den var full av eksplosive spenninger.

Det osmanske riket, som hadde styrt Balkan i hundrevis av ar, var pa vei ut. Etter hvert som osmanerne trakk seg tilbake, oppstod det et maktvakuum. Nye nasjonalstater som Serbia, Bulgaria, Romania og Hellas vokste fram, og alle hadde overlappende krav pa territorier og befolkninger.

Serbia var spesielt ambisios. Landet drømte om a samle alle serbere - og alle sørslavere - i ett stort rike. Problemet var at mange serbere bodde i Osterrike-Ungarn, særlig i Bosnia-Hercegovina som Osterrike hadde annektert i 1908. Serbia sa pa Osterrike-Ungarn som en undertrykker som matte bekjempes.

Osterrike-Ungarn, pa sin side, fryktet serbisk nasjonalisme. Keiserriket var et lappeteppe av ulike folkegrupper - tyskere, ungarere, tsjekkere, polakker, kroater, serbere og mange flere. Hvis serbisk nasjonalisme spredte seg, kunne hele riket falle sammen. Osterrike-Ungarn ville knuse Serbia for det var for sent.

Og bak Serbia stod Russland. Russerne sa seg selv som beskyttere av slaviske folk og ville ikke la Osterrike-Ungarn ødelegge Serbia. Sa da Gavrilo Princip skjøt erkehertugen, var det ikke bare et attentat pa en enkelt mann - det var en gnist i et rom fullt av krutt.`,
    },
    {
      id: 'historie-11-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-11-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Balkan som kruttønne:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-1-n-quiz2-q0',
            task: 'Hvorfor ble Balkan kalt "Europas kruttønne"?',
            options: [
              { id: 'a', text: 'Fordi Balkan hadde de storste militaerbasene i Europa og var et sentralt rustninsomrade for stormaktene', isCorrect: false },
              { id: 'b', text: 'Fordi regionen var full av nasjonalistiske spenninger, overlappende territoriekrav og stormaktsinteresser', isCorrect: true },
              { id: 'c', text: 'Fordi Balkan var delt mellom Russland og Osterrike-Ungarn gjennom en formell avtale som begge sider var misfornøyde med', isCorrect: false },
              { id: 'd', text: 'Fordi Balkan hadde store naturressurser som kull og jernmalm som stormaktene konkurrerte om a kontrollere', isCorrect: false },
            ],
            solution: 'Balkan var fullt av spenninger: Det osmanske rikets tilbaketrekning skapte maktvakuum, nye nasjonalstater hadde overlappende krav, og stormaktene hadde motstridende interesser.',
          },
          {
            id: 'historie-11-1-n-quiz2-q1',
            task: 'Hvorfor fryktet Osterrike-Ungarn serbisk nasjonalisme?',
            options: [
              { id: 'a', text: 'Fordi Serbia hadde inngatt en militaerallianse med Russland som truet Osterrike-Ungarns grenser direkte', isCorrect: false },
              { id: 'b', text: 'Fordi serbisk nasjonalisme kunne inspirere andre folkegrupper i keiserriket til a gjore opprør, og hele riket kunne falle sammen', isCorrect: true },
              { id: 'c', text: 'Fordi Serbia ønsket a annektere Bosnia-Hercegovina tilbake, noe som ville gi dem kontroll over Adriaterhavet', isCorrect: false },
              { id: 'd', text: 'Fordi serbiske militaere hadde planlagt et direkte angrep pa Wien som østerriksk etterretning hadde avdekket', isCorrect: false },
            ],
            solution: 'Osterrike-Ungarn var et lappeteppe av ulike folkegrupper. Hvis serbisk nasjonalisme spredte seg, kunne ogsa tsjekkere, polakker, kroater og andre kreve selvstendighet, og hele riket falle sammen.',
          },
          {
            id: 'historie-11-1-n-quiz2-q2',
            task: 'Hvilken rolle spilte Russland i spenningene pa Balkan?',
            options: [
              { id: 'a', text: 'Russland ønsket a holde seg nøytralt, men ble tvunget inn fordi Tyskland erklærte krig mot dem forst', isCorrect: false },
              { id: 'b', text: 'Russland støttet Osterrike-Ungarns krav pa Balkan i bytte mot innflytelse over Det osmanske rikets territorier', isCorrect: false },
              { id: 'c', text: 'Russland sa seg som beskytter av slaviske folk og ville ikke la Osterrike-Ungarn knuse Serbia', isCorrect: true },
              { id: 'd', text: 'Russland hadde en formell forsvarsallianse med Serbia som forpliktet dem til automatisk mobilisering ved angrep', isCorrect: false },
            ],
            solution: 'Russland sa seg som beskytter av slaviske folk (pan-slavisme) og var fast bestemt pa a stotte Serbia mot Osterrike-Ungarn. Dette betydde at enhver konflikt mellom Serbia og Osterrike-Ungarn risikerte a trekke inn Russland.',
          },
        ],
      },
    },
    {
      id: 'historie-11-1-n-section3',
      type: 'text',
      content: `## Julikrisen - seks uker som forandret alt

Etter attentatet 28. juni 1914 stod Europa ved et veiskille. Det fantes fortsatt muligheter for a unnga krig. Men beslutning etter beslutning drev Europa naermere avgrunnen.

Forst ga Tyskland Osterrike-Ungarn det som er blitt kalt "blankosjekken" - et lofte om full støtte uansett hva Osterrike valgte a gjøre mot Serbia. Dette ga Osterrike frihet til a handle aggressivt.

Den 23. juli sendte Osterrike-Ungarn et ultimatum til Serbia med krav som var designet for a vaere uakseptable - inkludert at østerrikske tjenestemenn skulle delta i etterforskningen pa serbisk jord. Overraskende nok aksepterte Serbia nesten alt, men Osterrike-Ungarn var ikke fornøyd. Den 28. juli erklarte de krig mot Serbia.

Na begynte dominoene a falle. Russland ville ikke la Serbia bli knust og begynte a mobilisere hæren sin. Tyskland krevde at Russland skulle stoppe mobiliseringen. Da Russland nektet, erklarte Tyskland krig mot Russland den 1. august.

Men Tyskland hadde et problem: De hadde lenge fryktet a matte kjempe pa to fronter - mot Russland i øst og Frankrike i vest. Deres løsning var Schlieffenplanen: a knuse Frankrike raskt for russerne rakk a mobilisere. Sa selv om Frankrike ikke hadde gjort noe, erklarte Tyskland krig ogsa mot dem og invaderte gjennom Belgia.

Dette trakk inn Storbritannia. Britene hadde garantert Belgias nøytralitet, og de var allierte med Frankrike. Den 4. august var ogsa Storbritannia i krig. Pa seks uker hadde et attentat i Sarajevo blitt til en verdenskrig.`,
    },
    {
      id: 'historie-11-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-11-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa julikrisen 1914:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-1-n-quiz3-q0',
            task: 'Hva var "blankosjekken" som Tyskland ga Osterrike-Ungarn?',
            options: [
              { id: 'a', text: 'En diplomatisk note der Tyskland ba Osterrike-Ungarn om a vise tilbakeholdenhet og søke fredelig løsning', isCorrect: false },
              { id: 'b', text: 'Et løfte om full støtte uansett hva Osterrike valgte a gjøre mot Serbia', isCorrect: true },
              { id: 'c', text: 'En hemmelig avtale mellom Tyskland og Osterrike-Ungarn om a dele Serbias territorium etter en rask krig', isCorrect: false },
              { id: 'd', text: 'Et betinget støtteløfte der Tyskland lovte a hjelpe Osterrike-Ungarn bare dersom Russland grep inn militaert', isCorrect: false },
            ],
            solution: '"Blankosjekken" var Tysklands løfte om full støtte til Osterrike-Ungarn uansett hva de valgte a gjøre mot Serbia. Dette ga Osterrike frihet til a handle aggressivt.',
          },
          {
            id: 'historie-11-1-n-quiz3-q1',
            task: 'Hva var spesielt med Osterrike-Ungarns ultimatum til Serbia?',
            options: [
              { id: 'a', text: 'Kravene var moderate og Serbia avviste dem alle, noe som ga Osterrike-Ungarn en legitim grunn til krig', isCorrect: false },
              { id: 'b', text: 'Kravene var rimelige, men Serbia avviste dem fordi Russland hadde garantert full militaer støtte pa forhand', isCorrect: false },
              { id: 'c', text: 'Kravene var designet for a vaere uakseptable, men Serbia aksepterte overraskende nok nesten alt', isCorrect: true },
              { id: 'd', text: 'Kravene var strengere enn vanlig, men Serbia aksepterte alle punkter uten unntak for a bevare freden', isCorrect: false },
            ],
            solution: 'Ultimatumet inneholdt krav designet for a vaere uakseptable, blant annet at østerrikske tjenestemenn skulle delta i etterforskningen pa serbisk jord. Serbia aksepterte overraskende nok nesten alt, men Osterrike-Ungarn var ikke fornøyd og erklærte likevel krig.',
          },
          {
            id: 'historie-11-1-n-quiz3-q2',
            task: 'I hvilken rekkefølge eskalerte krisen til verdenskrig sommeren 1914?',
            options: [
              { id: 'a', text: 'Russland mobiliserte forst, Tyskland erklærte krig mot Serbia, Osterrike angrep Frankrike, og Storbritannia gikk inn sist', isCorrect: false },
              { id: 'b', text: 'Osterrike erklærte krig mot Serbia, Russland mobiliserte, Tyskland erklærte krig mot Russland og Frankrike, og Storbritannia gikk inn da Tyskland invaderte Belgia', isCorrect: true },
              { id: 'c', text: 'Tyskland erklærte krig mot Russland, Osterrike angrep Serbia, Frankrike mobiliserte mot Tyskland, og Storbritannia gikk inn pa grunn av alliansen med Frankrike', isCorrect: false },
              { id: 'd', text: 'Osterrike erklærte krig mot Russland, Tyskland angrep Frankrike gjennom Sveits, og Storbritannia gikk inn for a beskytte Frankrikes nordgrense', isCorrect: false },
            ],
            solution: 'Dominoeffekten: Osterrike-Ungarn erklærte krig mot Serbia (28. juli). Russland mobiliserte. Tyskland erklærte krig mot Russland (1. august) og Frankrike, og invaderte gjennom Belgia. Storbritannia gikk inn for a forsvare Belgias nøytralitet (4. august).',
          },
          {
            id: 'historie-11-1-n-quiz3-q3',
            task: 'Hvorfor trakk Tysklands invasjon av Belgia Storbritannia inn i krigen?',
            options: [
              { id: 'a', text: 'Fordi Storbritannia hadde garantert Belgias nøytralitet', isCorrect: true },
              { id: 'b', text: 'Fordi Storbritannia var forpliktet gjennom Trippelententen til a støtte Frankrike militaert ved ethvert angrep', isCorrect: false },
              { id: 'c', text: 'Fordi tyske u-bater hadde senket britiske handelsskip i Den engelske kanal', isCorrect: false },
              { id: 'd', text: 'Fordi Storbritannia fryktet at en tysk seier over Frankrike ville true den britiske maktbalansen i Europa', isCorrect: false },
            ],
            solution: 'Storbritannia hadde garantert Belgias nøytralitet. Da Tyskland invaderte det nøytrale Belgia som en del av Schlieffenplanen, følte Storbritannia seg forpliktet til a gripe inn. De var ogsa allierte med Frankrike gjennom Trippelententen.',
          },
        ],
      },
    },
    {
      id: 'historie-11-1-n-section4',
      type: 'text',
      content: `## Kunne krigen vaert unngått?

Etterpåklokskap er lett. Men det er verdt a spørre: Var forste verdenskrig uunngåelig?

Det fantes flere punkter der andre valg kunne vaert gjort. Osterrike-Ungarn kunne akseptert Serbias svar pa ultimatumet - Serbia ga nesten etter pa alle punkter. Tyskland kunne latt vaere a gi blankosjekken. Russland kunne utsatt mobiliseringen for a gi tid til diplomati. Stormaktene kunne kalt inn en internasjonal konferanse, slik de hadde gjort i tidligere kriser.

Men flere faktorer arbeidet mot fred. Folkeopinionen i mange land var preget av nasjonalistisk entusiasme og krigsstemning. Militære planer krevde rask mobilisering - a utsette kunne bety a tape. Lederne undervurderte hva en moderne krig ville koste. Og prestisje stod pa spill - ingen ville fremsta som svak.

Kanskje var det ikke en enkelt beslutning som utløste krigen, men hele systemet. Europa hadde bygget opp en krigsmaskin gjennom opprustning, allianser og rivalisering. Det trengtes bare en gnist for a sette det hele i brann.

Laerdommen er tung: Internasjonale systemer basert pa frykt, opprustning og nullsumtenkning kan fore selv demokratiske og siviliserte nasjoner ut i katastrofe. Nar alle forbereder seg pa krig, øker sjansen for at krig faktisk bryter ut.`,
    },
    {
      id: 'historie-11-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-11-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Schlieffenplanen og om krigen kunne vaert unngatt:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-1-n-quiz4-q0',
            task: 'Hva var Schlieffenplanen?',
            options: [
              { id: 'a', text: 'Tysklands plan for a forsvare østfronten mot Russland ved a konsentrere alle styrker der forst', isCorrect: false },
              { id: 'b', text: 'Tysklands plan for a knuse Frankrike raskt gjennom Belgia før Russland rakk a mobilisere', isCorrect: true },
              { id: 'c', text: 'Tysklands plan for a føre en langvarig utmattelseskrig pa begge fronter samtidig med forsvarsstillinger', isCorrect: false },
              { id: 'd', text: 'Tysklands plan for a slå Russland raskt i øst før de vendte styrkene vestover mot Frankrike', isCorrect: false },
            ],
            solution: 'Schlieffenplanen var Tysklands strategi for a unnga tofrontskrig: knuse Frankrike raskt gjennom Belgia, deretter flytte troppene østover mot Russland.',
          },
          {
            id: 'historie-11-1-n-quiz4-q1',
            task: 'Hvilke faktorer arbeidet mot fred under julikrisen?',
            options: [
              { id: 'a', text: 'Diplomatiske misligheter mellom ambassadørene, forsinket kommunikasjon og tilfeldige misforstaelser', isCorrect: false },
              { id: 'b', text: 'Nasjonalistisk folkeopinion, militaere planer som krevde rask handling, undervurdering av krigens kostnad, og prestisje', isCorrect: true },
              { id: 'c', text: 'Hovedsakelig økonomiske interesser -- stormaktene ønsket kontroll over Balkans ressurser og handelsveier', isCorrect: false },
              { id: 'd', text: 'Hemmelige avtaler mellom militaere ledere som handlet uten politikernes samtykke eller kunnskap', isCorrect: false },
            ],
            solution: 'Flere faktorer arbeidet mot fred: Folkeopinionen var preget av nasjonalisme og krigsstemning. Militaere planer krevde rask mobilisering. Lederne undervurderte hva en moderne krig ville koste. Og ingen ville fremsta som svak.',
          },
          {
            id: 'historie-11-1-n-quiz4-q2',
            task: 'Hva er den viktigste laerdommen fra hvordan forste verdenskrig brøt ut?',
            options: [
              { id: 'a', text: 'At stormaktsdiplomati og internasjonale konferanser er de mest effektive verktøyene for a unnga krig', isCorrect: false },
              { id: 'b', text: 'At maktbalanse mellom allianser er den beste garantien for fred, selv om den krever opprustning', isCorrect: false },
              { id: 'c', text: 'At kriger primært skyldes enkeltpersoners beslutninger, og at bedre ledere kunne forhindret katastrofen', isCorrect: false },
              { id: 'd', text: 'At systemer basert pa frykt, opprustning og nullsumtenkning kan fore siviliserte nasjoner ut i katastrofe', isCorrect: true },
            ],
            solution: 'Forste verdenskrig viste at internasjonale systemer basert pa frykt, opprustning og nullsumtenkning kan fore selv demokratiske nasjoner ut i katastrofe. Nar alle forbereder seg pa krig, øker sjansen for at krig bryter ut.',
          },
        ],
      },
    },
    {
      id: 'historie-11-1-n-section5',
      type: 'text',
      content: `## Hvem hadde skylden?

Spørsmalet om skyld for forste verdenskrig har vaert debattert i over hundre ar. Versailles-traktaten i 1919 la skylden pa Tyskland, men var det rettferdig?

Tyskland ga blankosjekken og fulgte Schlieffenplanen aggressivt. Men Osterrike-Ungarn utformet ultimatumet som skulle provosere krig. Russland mobiliserte raskt og bidro til eskalering. Serbia hadde tolerert nasjonalistiske grupper som den Gavrilo Princip tilhørte. Frankrike og Storbritannia hadde sine egne motiver for a slutte seg til krigen.

Kanskje er det mer fruktbart a se pa systemet enn enkeltaktører. Alliansene skapte en dominoeffekt der enhver konflikt kunne bli global. Militarismen gjorde at ledere tenkte i militaere løsninger. Nasjonalismen skapte hat og frykt mellom folk. Imperialismen gjorde stormaktene til rivaler.

Det viktigste vi kan laere, er ikke hvem som var skyldig, men hvordan slike katastrofer kan unngås i fremtiden. Forste verdenskrig viste at selv "siviliserte" nasjoner kan miste kontrollen og styrte ut i avgrunnene. Det er en advarsel som fortsatt er relevant i dag.`,
    },
    {
      id: 'historie-11-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-11-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa skyldspørsmalet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-1-n-quiz5-q0',
            task: 'Hvilken av disse pastandene om skyld for forste verdenskrig er mest nyansert?',
            options: [
              { id: 'a', text: 'Tyskland og Osterrike-Ungarn bar hovedansvaret fordi de bevisst ønsket krig for a utvide sin makt i Europa', isCorrect: false },
              { id: 'b', text: 'Russland bar størst ansvar fordi deres tidlige mobilisering gjorde diplomatisk løsning umulig og tvang Tyskland til a handle', isCorrect: false },
              { id: 'c', text: 'Alle stormaktene bidro pa ulike mater, og selve systemet med allianser, militarisme og nasjonalisme økte faren for krig', isCorrect: true },
              { id: 'd', text: 'Storbritannia hadde størst skyld fordi de kunne ha forhindret krigen ved a erklære støtte til Frankrike tidligere', isCorrect: false },
            ],
            solution: 'En nyansert forstaelse anerkjenner at flere aktører bidro, men viktigst var kanskje selve systemet -- alliansene, militarismen, nasjonalismen og imperialismen skapte en stadig farligere situasjon.',
          },
          {
            id: 'historie-11-1-n-quiz5-q1',
            task: 'Hva sa Versailles-traktaten om skyldspørsmalet?',
            options: [
              { id: 'a', text: 'At Tyskland og Osterrike-Ungarn delte skylden for krigen, men at erstatningene skulle fordeles mellom alle sentralmaktene', isCorrect: false },
              { id: 'b', text: 'At skylden var delt mellom Tyskland, Osterrike-Ungarn og Det osmanske riket som sentralmaktenes hovedmedlemmer', isCorrect: false },
              { id: 'c', text: 'At Tyskland hadde skylden for krigen', isCorrect: true },
              { id: 'd', text: 'At alle stormaktene delte ansvaret, men at Tyskland matte betale størst andel av erstatningene', isCorrect: false },
            ],
            solution: 'Versailles-traktaten la skylden pa Tyskland gjennom krigsskyldsklausulen. Men mange historikere mener dette var urettferdig -- flere stormakter bidro til krigen, og selve systemet bar mye av ansvaret.',
          },
          {
            id: 'historie-11-1-n-quiz5-q2',
            task: 'Hvorfor er det kanskje mer fruktbart a se pa systemet enn enkeltaktører nar vi diskuterer skyld?',
            options: [
              { id: 'a', text: 'Fordi det er umulig a vite nøyaktig hva enkeltpersoner tenkte, sa historikere ma fokusere pa strukturer i stedet', isCorrect: false },
              { id: 'b', text: 'Fordi alliansene, militarismen, nasjonalismen og imperialismen skapte en situasjon der enhver gnist kunne utlose verdenskrig', isCorrect: true },
              { id: 'c', text: 'Fordi enkeltlederne som Clemenceau og Wilhelm egentlig ønsket fred, men ble presset av folkeopinionen i sine land', isCorrect: false },
              { id: 'd', text: 'Fordi de diplomatiske kildene fra julikrisen viser at alle statsledere forsøkte a unnga krig, men mislyktes pa grunn av tilfeldigheter', isCorrect: false },
            ],
            solution: 'Systemet med allianser, opprustning og nasjonalistisk rivalisering hadde gjort Europa til en kruttønne. Mange ulike handlinger -- blankosjekken, ultimatumet, mobiliseringen -- bidro. Det var summen av systemet og beslutningene som skapte katastrofen.',
          },
        ],
      },
    },
    {
      id: 'historie-11-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Forste verdenskrig brøt ut i 1914 etter at erkehertug Franz Ferdinand ble skutt i Sarajevo. Men de virkelige arsakene la i arevis med spenninger og rivaliseringer mellom Europas stormakter.

**Nøkkelbegreper du na kjenner:**
- **MAIN:** Militarisme, Allianser, Imperialisme, Nasjonalisme - de fire langsiktige arsakene
- **Trippelalliansen:** Tyskland, Osterrike-Ungarn, Italia
- **Trippelententen:** Frankrike, Russland, Storbritannia
- **Balkan - "Europas kruttønne":** Ustabil region med overlappende nasjonale krav
- **Attentatet i Sarajevo:** 28. juni 1914 - den utløsende hendelsen
- **Blankosjekken:** Tysklands støtteløfte til Osterrike-Ungarn
- **Schlieffenplanen:** Tysklands strategi for a unnga tofrontskrig
- **Julikrisen:** Seks uker fra attentat til verdenskrig

**Det viktigste du tar med deg:**
Krigen var ikke uunngåelig, men systemet med allianser, opprustning og nasjonalistisk rivalisering gjorde den stadig mer sannsynlig. En lokal konflikt pa Balkan kunne utløse en verdenskrig fordi alle stormaktene var bundet sammen i et nett av allianser og frykt. Det er en advarsel om hvordan internasjonale systemer basert pa mistillit kan føre til katastrofe.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 11.2 NARRATIV: Krigens gang og karakter
// ============================================================================

export const CHAPTER_HISTORIE_11_2_NARRATIV: TextbookChapter = {
  id: 'historie-11-2-narrativ',
  courseId: 'historie',
  chapterNumber: '11.2',
  title: 'Krigens gang og karakter',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om skyttergravenes helvete, ny våpenteknologi og total krig.',
  estimatedMinutes: 50,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  linkedChapterId: 'historie-11-2',
  content: [
    {
      id: 'historie-11-2-n-intro',
      type: 'text',
      content: `## Over til jul?

Da europeiske soldater marsjerte ut til krigen sommeren 1914, vinket de farvel med et smil. "Vi er hjemme til jul," ropte de. Mange trodde krigen ville vaere et kort, glorios eventyr - akkurat som krigene deres bestefedre hadde fortalt om.

De tok grundig feil.

Fire ar senere hadde over 17 millioner mennesker mistet livet. Europa la i ruiner. En hel generasjon unge menn var drept eller ødelagt. Og de som overlevde, bar med seg minner som hjemsøkte dem resten av livet.

Forste verdenskrig ble helt annerledes enn noen hadde forestilt seg. Industrialiseringen hadde forandret krigføring fundamentalt, men generalene hadde ikke forstatt det. Resultatet var et blodig stillingskrig der millioner døde for noen fa meter jord.

La oss ga ned i skyttergravene og forstå hvorfor denne krigen ble sa brutal.`,
    },
    {
      id: 'historie-11-2-n-section1',
      type: 'text',
      content: `## Skyttergravenes helvete

Hosten 1914 stoppet den tyske fremrykningen gjennom Frankrike opp. Schlieffenplanen hadde mislyktes. Begge sider gravde seg ned for a beskytte seg mot fiendens ild. Det som begynte som midlertidige forsvarsverk, ble snart et enormt system av grøfter som strakte seg fra Nordsjøen til Sveits.

**Skyttergravssystemet** var et ingeniørkunstverk av død. Fremst la frontlinjen - den grøften som vendte mot fienden. Bak den la støttegraver og reservegraver, alle forbundet med kommunikasjonsgrøfter. Soldatene levde, sov, spiste og døde i disse trange, gjørmete hullene.

Mellom de fiendtlige skyttergravene la **ingenmannsland** - et landskap av kratere, piggtråd og lik. A krysse dette dødsomradet var nesten umulig. Maskingevær kunne meje ned hundrevis av menn pa minutter.

Livet i skyttergravene var et mareritt. **Gjørme** var overalt - nar det regnet, stod soldatene i vann til knærne. **Rotter** levde av de døde og var sa tamme at de spiste maten fra hendene pa sovende soldater. **Lus** spredte sykdom. Mange utviklet "skyttergravsfot" - føttene ratnet bokstavelig talt i den konstante fuktigheten.

Og over alt hang **frykten**. Snikskyttere kunne ta livet ditt hvis du tittet over kanten. Artillerigranater kunne rive deg i stykker uten varsel. Mange soldater utviklet det de kalte "granatsjokk" - det vi i dag kaller PTSD. De ristet, hadde mareritt, mistet evnen til a fungere.`,
    },
    {
      id: 'historie-11-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-11-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa skyttergravskrigen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-2-n-quiz1-q0',
            task: 'Hva var hovedarsakene til at krigen utviklet seg til stillingskrig i skyttergraver?',
            options: [
              { id: 'a', text: 'Begge sider manglet nok soldater til a gjennomføre offensive operasjoner, sa de matte grave seg ned for a kompensere', isCorrect: false },
              { id: 'b', text: 'Ny våpenteknologi gjorde forsvar mye enklere enn angrep', isCorrect: true },
              { id: 'c', text: 'Terrenget i Frankrike og Belgia var sa flatt og gjørmete at bevegelseskrig var fysisk umulig', isCorrect: false },
              { id: 'd', text: 'Begge sider valgte bevisst en forsvarsstrategi for a spare soldater mens de ventet pa at fiendens økonomi kollapset', isCorrect: false },
            ],
            solution: 'Ny våpenteknologi, særlig maskingeværet, gjorde det nesten umulig a gjennomføre vellykkede angrep over apent terreng. Begge sider gravde seg ned i skyttergraver, og fronten stivnet.',
          },
          {
            id: 'historie-11-2-n-quiz1-q1',
            task: 'Hva var "ingenmannsland"?',
            options: [
              { id: 'a', text: 'Det demilitariserte omradet langs grensen mellom Frankrike og Tyskland som var forbudt a befeste', isCorrect: false },
              { id: 'b', text: 'Reserveomradet bak frontlinjen der sarede soldater ble behandlet og forsyninger ble lagret', isCorrect: false },
              { id: 'c', text: 'Dødsomradet mellom de fiendtlige skyttergravene, fullt av kratere, piggtrad og lik', isCorrect: true },
              { id: 'd', text: 'Den smale kommunikasjonsgrøften som forbandt frontlinjen med støttegravene bak', isCorrect: false },
            ],
            solution: 'Ingenmannsland var det dødsomradet mellom de fiendtlige skyttergravene -- et landskap av kratere, piggtrad og lik. A krysse det var nesten umulig pa grunn av maskingeværild.',
          },
          {
            id: 'historie-11-2-n-quiz1-q2',
            task: 'Hva var "granatsjokk", og hva kaller vi det i dag?',
            options: [
              { id: 'a', text: 'Hjerneskader forårsaket av trykkbølger fra eksplosjoner, i dag kalt traumatisk hjerneskade (TBI)', isCorrect: false },
              { id: 'b', text: 'Psykiske traumer fra krigen, i dag kalt PTSD', isCorrect: true },
              { id: 'c', text: 'En fysisk lammelse i bena forårsaket av langvarig eksponering for kulde og fuktighet i skyttergravene', isCorrect: false },
              { id: 'd', text: 'Kombinerte fysiske og psykiske reaksjoner pa giftgassangrep, i dag kalt kjemisk stresslidelse', isCorrect: false },
            ],
            solution: 'Granatsjokk var psykiske traumer forårsaket av den konstante frykten, bombardementet og grusomhetene i skyttergravene. Soldatene ristet, hadde mareritt og mistet evnen til a fungere. I dag kaller vi det PTSD (posttraumatisk stresslidelse).',
          },
        ],
      },
    },
    {
      id: 'historie-11-2-n-section2',
      type: 'text',
      content: `## Industriell drap - ny våpenteknologi

Forste verdenskrig var den forste virkelig industrielle krigen. Fabrikkene som hadde laget maskiner og forbruksvarer, produserte na dødsmaskineri i enorme mengder.

**Maskingeværet** var kanskje det viktigste våpenet. Et enkelt maskingevær kunne avfyre 400-600 skudd per minutt. En håndfull soldater med maskingevær kunne stoppe tusenvis av angripere. Hele ideen om glorios kavaleriangrepet døde i maskingeværets kuleregn.

**Artilleri** stod for flest dødsfall. Enorme kanoner sendte granater som eksploderte med forferdelig kraft. For store angrep kunne artilleribombardering vare i dager. Ved Verdun i 1916 ble det avfyrt rundt 40 millioner granater. Landskapet ble forvandlet til et kraterlandskap av død.

**Giftgass** var kanskje det mest fryktede våpenet. Tyskerne brukte klorgas forste gang i 1915 ved Ypres. Soldater som pustet inn gassen, druknet i sine egne lunger. Sennepsgass brant huden og blindet ofrene. Gassmasker ble en del av utstyret, men de var upålitelige og forferdelige a baere.

**Stridsvogner** - tanks - ble introdusert av britene i 1916. De kunne krysse skyttergraver og motstå maskingeværild. Men de var langsomme, upålitelige og brakk ofte sammen. Først i andre verdenskrig ble stridsvogner virkelig effektive.

**Fly** utviklet seg fra enkle rekognoseringsfartøy til kampfly og bombefly. Legendariske piloter - "ess" - ble helter. Men flyene var fortsatt for primitive til a avgjøre krigen.

**U-båter** forte krigen under vannet. Tyske u-båter angrep skip som fraktet forsyninger til Storbritannia. Det var u-båtenes angrep pa amerikanske skip som til slutt trakk USA inn i krigen.`,
    },
    {
      id: 'historie-11-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-11-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa ny våpenteknologi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-2-n-quiz2-q0',
            task: 'Hvilket våpen stod for flest dødsfall under forste verdenskrig?',
            options: [
              { id: 'a', text: 'Maskingevær, som meidet ned flest soldater under infanteriangrep', isCorrect: false },
              { id: 'b', text: 'Giftgass, som tok flest liv fordi soldatene ikke hadde effektiv beskyttelse', isCorrect: false },
              { id: 'c', text: 'Artilleri', isCorrect: true },
              { id: 'd', text: 'Geværild fra snikskyttere, som var den mest konstante trusselen i skyttergravene', isCorrect: false },
            ],
            solution: 'Artilleri stod for flest dødsfall. De enorme kanonene sendte granater som ødela hele omrader. Ved Verdun i 1916 ble det avfyrt rundt 40 millioner granater.',
          },
          {
            id: 'historie-11-2-n-quiz2-q1',
            task: 'Hvorfor var maskingeværet sa avgjørende for skyttergravskrigen?',
            options: [
              { id: 'a', text: 'Det var lett a flytte mellom stillinger, noe som ga forsvarerne fleksibilitet til a dekke hele frontlinjen', isCorrect: false },
              { id: 'b', text: 'Et enkelt maskingevær med noen fa soldater kunne stoppe tusenvis av angripere', isCorrect: true },
              { id: 'c', text: 'Det hadde lengre rekkevidde enn artilleri, noe som gjorde det mulig a beskyte fienden pa lang avstand', isCorrect: false },
              { id: 'd', text: 'Det kunne ødelegge piggtrad og bunkere, slik at forsvarsstillinger ble ubrukelige', isCorrect: false },
            ],
            solution: 'Maskingeværet kunne avfyre 400-600 skudd per minutt. En håndfull soldater med maskingevær kunne meje ned hundrevis av angripere. Det gjorde tradisjonelle infanteriangrep over apent terreng til selvmord.',
          },
          {
            id: 'historie-11-2-n-quiz2-q2',
            task: 'Hva trakk til slutt USA inn i forste verdenskrig?',
            options: [
              { id: 'a', text: 'Zimmermann-telegrammet der Tyskland forsøkte a lokke Mexico til krig mot USA, uten at u-batkrigen spilte noen rolle', isCorrect: false },
              { id: 'b', text: 'USAs økonomiske interesser i a sikre at Storbritannia og Frankrike kunne betale tilbake sine krigslan', isCorrect: false },
              { id: 'c', text: 'Tyske u-båters angrep pa amerikanske skip', isCorrect: true },
              { id: 'd', text: 'President Wilsons personlige overbevisning om at demokratiske verdier matte forsvares mot tysk militarisme', isCorrect: false },
            ],
            solution: 'Tyske u-båter angrep skip som fraktet forsyninger til Storbritannia, inkludert amerikanske skip. Det var u-båtenes angrep pa amerikanske fartøy som til slutt trakk USA inn i krigen pa alliert side i 1917.',
          },
        ],
      },
    },
    {
      id: 'historie-11-2-n-section3',
      type: 'text',
      content: `## Total krig - hele samfunnet mobiliseres

Forste verdenskrig var ikke bare en krig mellom haerer - det var en krig mellom hele nasjoner. Dette kaller vi **total krig**.

I en total krig mobiliseres hele samfunnet. Industrien ble omstilt fra a lage forbruksvarer til a produsere våpen, ammunisjon og utstyr. Staten tok kontroll over økonomien pa en mate som hadde vaert utenkelig for krigen. Fabrikkeiere, arbeidere og bonder - alle matte bidra til krigsinnsatsen.

**Kvinner** spilte en avgjørende rolle. Med millioner av menn i skyttergravene, matte kvinner ta over jobbene deres. De arbeidet i våpenfabrikker, kjørte busser, arbeidet pa gardene. Dette bidro til at kvinner fikk stemmerett i mange land etter krigen - de hadde bevist at de kunne gjøre menns arbeid.

**Rasjonering** ble innført fordi det ikke var nok mat og varer til alle. Folk fikk tildelt bestemte mengder kjøtt, brød, sukker og andre nødvendigheter. I Tyskland var blokaden sa effektiv at hundretusenvis døde av underernæring.

**Propaganda** ble et mektig våpen. Regjeringene trengte a holde moralen oppe hjemme og na folk matte ofre sa mye. Fienden ble fremstilt som umenneskelig og ond. Plakater oppfordret menn til a verve seg og kvinner til a støtte krigsinnsatsen.

Og sivilbefolkningen ble selv mal for krigen. Tyske luftskip - **zepp elinere** - bombet britiske byer. U-båter senket skip med sivile passasjerer. Grensen mellom front og hjemmefront ble utvisket.`,
    },
    {
      id: 'historie-11-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-11-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa total krig:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-2-n-quiz3-q0',
            task: 'Hva menes med "total krig"?',
            options: [
              { id: 'a', text: 'At krigen føres pa alle fronter samtidig -- til lands, til sjøs og i luften', isCorrect: false },
              { id: 'b', text: 'At hele samfunnet mobiliseres - industri, økonomi og sivilbefolkning, ikke bare militaeret', isCorrect: true },
              { id: 'c', text: 'At krigen rammer alle sosiale klasser likt, bade rike og fattige, fordi alle ma tjenestegjøre', isCorrect: false },
              { id: 'd', text: 'At det ikke er noen begrensninger pa hvilke militaere mål som kan angripes, inkludert byer og sivil infrastruktur', isCorrect: false },
            ],
            solution: 'Total krig betyr at hele samfunnet mobiliseres: industrien produserer våpen, staten styrer økonomien, mat rasjoneres, og grensen mellom front og hjemmefront utviskes.',
          },
          {
            id: 'historie-11-2-n-quiz3-q1',
            task: 'Hvilken rolle spilte kvinner under forste verdenskrig?',
            options: [
              { id: 'a', text: 'De arbeidet hovedsakelig som sykepleiere ved fronten, noe som ga dem politisk innflytelse etter krigen', isCorrect: false },
              { id: 'b', text: 'De organiserte fredsbevegelser og demonstrasjoner som presset regjeringene til a forhandle om vapenvilkar', isCorrect: false },
              { id: 'c', text: 'De tok over menns jobber i fabrikker, transport og pa garder, og dette bidro til at kvinner fikk stemmerett etter krigen', isCorrect: true },
              { id: 'd', text: 'De fikk stemmerett under krigen fordi regjeringene trengte deres støtte til a opprettholde krigsmoralen', isCorrect: false },
            ],
            solution: 'Med millioner av menn i skyttergravene tok kvinner over jobbene deres -- de arbeidet i våpenfabrikker, kjørte busser og arbeidet pa gardene. Innsatsen bidro til at kvinner fikk stemmerett i mange land etter krigen.',
          },
          {
            id: 'historie-11-2-n-quiz3-q2',
            task: 'Hva var propagandaens rolle under forste verdenskrig?',
            options: [
              { id: 'a', text: 'Den ble hovedsakelig brukt for a rekruttere soldater gjennom plakater og aviser, men hadde liten effekt pa sivilbefolkningens holdninger', isCorrect: false },
              { id: 'b', text: 'Den var basert pa sannferdige rapporter fra fronten, men ble presentert pa en mate som skulle inspirere patriotisme', isCorrect: false },
              { id: 'c', text: 'Den ble brukt av alle sider for a holde moralen oppe, fremstille fienden som umenneskelig, og oppfordre til krigsinnsats', isCorrect: true },
              { id: 'd', text: 'Den ble forbudt av Folkeforbundets forløper fordi den brøt med internasjonale regler for krigføring', isCorrect: false },
            ],
            solution: 'Propaganda var et mektig våpen brukt av alle sider. Fienden ble fremstilt som umenneskelig og ond. Plakater oppfordret menn til a verve seg og kvinner til a støtte krigsinnsatsen. Regjeringene trengte a holde moralen oppe nar folk matte ofre sa mye.',
          },
        ],
      },
    },
    {
      id: 'historie-11-2-n-section4',
      type: 'text',
      content: `## Slaget ved Somme - krigens meningsloshet

For a forstå forste verdenskrigs gru, ma vi se pa et av de verste slagene: **Slaget ved Somme** i 1916.

Britene og franskmennene planla et stort gjennombrudd pa vestfronten. I en uke bombarderte de de tyske stillingene med millioner av granater. Tanken var at bombardementet skulle ødelegge de tyske forsvarerne og piggtråden, slik at infanteriet bare kunne spasere over.

De tok feil.

**1. juli 1916** - krigens verste dag for britiske styrker. Klokken 07.30 om morgenen gikk titusenvis av britiske soldater "over toppen" av skyttergravene. De var lastet med utstyr, noen bar til og med fotballer for a sparke foran seg. De gikk sakte - de trodde jo at fienden var knust.

Fienden var ikke knust. De tyske soldatene hadde overlevd i dype bunkers. Da bombardementet stoppet, stormet de opp til maskingeværene. Og sa begynte de a skyte.

Pa **en eneste dag** led britene 57 470 tap - 19 240 døde. Det var flere tap enn i hele Boerkrigen. Noen bataljoner ble praktisk talt utslettet pa minutter.

Og likevel fortsatte slaget i over fire maneder. Da det var slutt, hadde de allierte avansert maksimalt ti kilometer. Prisen: over en million drepte og sarede pa begge sider.

Somme har blitt stående som symbol pa forste verdenskrigs meningsloshet - enorme tap for minimale gevinster. Det stiller et ubehagelig spørsmal: Hvorfor fortsatte generalene a beordre angrep nar de visste hva som ville skje?`,
    },
    {
      id: 'historie-11-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-11-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Slaget ved Somme:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-2-n-quiz4-q0',
            task: 'Hva var de britiske tapene pa 1. juli 1916, krigens verste dag?',
            options: [
              { id: 'a', text: 'Rundt 30 000 drepte og sarede, hvorav omtrent 10 000 drepte', isCorrect: false },
              { id: 'b', text: 'Rundt 40 000 drepte og sarede, hvorav omtrent 15 000 drepte', isCorrect: false },
              { id: 'c', text: 'Rundt 57 000 drepte og sarede, hvorav nesten 20 000 drepte', isCorrect: true },
              { id: 'd', text: 'Rundt 75 000 drepte og sarede, hvorav omtrent 25 000 drepte', isCorrect: false },
            ],
            solution: 'Pa 1. juli 1916 led britene 57 470 tap, hvorav 19 240 drepte. Det var krigens verste dag for britiske styrker.',
          },
          {
            id: 'historie-11-2-n-quiz4-q1',
            task: 'Hvorfor mislyktes det britiske angrepet ved Somme sa katastrofalt den forste dagen?',
            options: [
              { id: 'a', text: 'Fordi det britiske artilleriet ikke hadde nok ammunisjon til a opprettholde bombardementet lenge nok', isCorrect: false },
              { id: 'b', text: 'Fordi artilleribombardementet ikke hadde ødelagt de tyske forsvarerne, som overlevde i dype bunkers', isCorrect: true },
              { id: 'c', text: 'Fordi de tyske forsterkningene ankom fra østfronten akkurat i tide til a forsterke forsvaret', isCorrect: false },
              { id: 'd', text: 'Fordi de britiske soldatene rykket frem for raskt og mistet kontakten med sitt eget artilleri', isCorrect: false },
            ],
            solution: 'Britene trodde en ukes bombardement ville ødelegge de tyske stillingene. Men de tyske soldatene hadde overlevd i dype bunkers. Da bombardementet stoppet, stormet de opp til maskingeværene og begynte a skyte pa de langsomt fremrykkende britene.',
          },
          {
            id: 'historie-11-2-n-quiz4-q2',
            task: 'Hvorfor har Slaget ved Somme blitt stående som symbol pa forste verdenskrigs meningsloshet?',
            options: [
              { id: 'a', text: 'Fordi det var det forste slaget der giftgass ble brukt i stor skala, noe som sjokkerte opinionen', isCorrect: false },
              { id: 'b', text: 'Fordi over en million ble drept eller saret for en fremrykking pa maksimalt ti kilometer', isCorrect: true },
              { id: 'c', text: 'Fordi det var det avgjørende vendepunktet som forandret krigens utfall til de alliertes fordel', isCorrect: false },
              { id: 'd', text: 'Fordi det var det forste slaget der stridsvogner ble brukt, men de klarte ikke a endre utfallet', isCorrect: false },
            ],
            solution: 'Somme varte i over fire maneder. Da det var slutt, hadde de allierte avansert maksimalt ti kilometer. Prisen: over en million drepte og sarede pa begge sider. De enorme tapene for minimale gevinster symboliserer krigens meningsloshet.',
          },
        ],
      },
    },
    {
      id: 'historie-11-2-n-section5',
      type: 'text',
      content: `## Hvorfor holdt de ut?

Et av de storste spørsmalene om forste verdenskrig er dette: Hvordan kunne millioner av menn utholde slike forhold i fire ar? Hvorfor deserterte de ikke, gjorde mytteri, eller bare ga opp?

Svaret er sammensatt. **Kameratskap** var kanskje den viktigste faktoren. Soldatene kjempet ikke for flagg eller konge - de kjempet for kameratene sine. A flykte ville vaere a svikte de andre i skyttergraven. Lojaliteten til den lille gruppen var sterkere enn frykten for døden.

**Plikt** spilte ogsa inn. De fleste soldater hadde vokst opp med sterke forestillinger om nasjon, aere og mannlighet. A vaere feig var verre enn a dø. Familien hjemme forventet at de gjorde sin plikt.

**Militaer disiplin** var hard. Desertering kunne straffes med døden. Rundt 300 britiske soldater ble skutt for feighet eller desertering. Frykt for straff holdt mange i geleddet.

Men det fantes ogsa lyspunkter. Soldatene roterte mellom frontlinjen og reserve - de var ikke i frontlinjen hele tiden. **Kameratskap** skapte varme i elendigheten. Humor og sang holdt moralen oppe. Brev hjemmefra ga hap.

Og sa var det den merkelige **julefreden i 1914**, da tyske og britiske soldater gikk ut i ingenmannsland, utvekslet gaver, sang julesanger, og til og med spilte fotball sammen. Det viste at fienden ogsa var mennesker. Men myndighetene sørget for at det aldri skjedde igjen.`,
    },
    {
      id: 'historie-11-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-11-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa hvorfor soldatene holdt ut:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-2-n-quiz5-q0',
            task: 'Hva var sannsynligvis den viktigste grunnen til at soldatene holdt ut i skyttergravene?',
            options: [
              { id: 'a', text: 'Patriotisme og nasjonalfølelse -- soldatene kjempet primært for fedreland og nasjonal aere', isCorrect: false },
              { id: 'b', text: 'Streng militaer disiplin og frykt for straff, inkludert henrettelse for desertering', isCorrect: false },
              { id: 'c', text: 'Lojalitet til kameratene i skyttergraven - de ville ikke svikte dem', isCorrect: true },
              { id: 'd', text: 'Pliktfølelse overfor familien hjemme som forventet at de tjenestegjorde med aere', isCorrect: false },
            ],
            solution: 'Kameratskap var den viktigste faktoren. Soldater kjempet ikke primært for landet, men for hverandre. Lojaliteten til den lille gruppen var sterkere enn bade frykt og patriotisme.',
          },
          {
            id: 'historie-11-2-n-quiz5-q1',
            task: 'Hva var julefreden i 1914?',
            options: [
              { id: 'a', text: 'En midlertidig våpenhvile avtalt mellom lokale offiserer pa begge sider for a hente inn sarede fra ingenmannsland', isCorrect: false },
              { id: 'b', text: 'En spontan hendelse der fiendtlige soldater gikk ut i ingenmannsland, utvekslet gaver og spilte fotball', isCorrect: true },
              { id: 'c', text: 'En organisert våpenhvile initiert av paven som varte i tre dager langs hele vestfronten', isCorrect: false },
              { id: 'd', text: 'Et arrangert møte mellom offiserer fra begge sider for a forhandle om fangeutveksling i julehøytiden', isCorrect: false },
            ],
            solution: 'Julefreden i 1914 var en spontan hendelse der tyske og britiske soldater gikk ut i ingenmannsland, utvekslet gaver, sang julesanger og spilte fotball. Det viste at fienden ogsa var mennesker, men myndighetene sørget for at det aldri skjedde igjen.',
          },
          {
            id: 'historie-11-2-n-quiz5-q2',
            task: 'Hva var konsekvensene for soldater som deserterte?',
            options: [
              { id: 'a', text: 'De ble degradert og sendt til straffekompanier med de farligste oppdragene ved fronten', isCorrect: false },
              { id: 'b', text: 'De ble fengslet og satt til tvangsarbeid bak frontlinjene til krigen var over', isCorrect: false },
              { id: 'c', text: 'Desertering kunne straffes med døden -- rundt 300 britiske soldater ble skutt', isCorrect: true },
              { id: 'd', text: 'De ble sendt tilbake til fronten etter en kort fengselsstraff, da hæren trengte alle tilgjengelige soldater', isCorrect: false },
            ],
            solution: 'Militaer disiplin var hard. Desertering kunne straffes med døden, og rundt 300 britiske soldater ble skutt for feighet eller desertering. Frykt for straff var en av faktorene som holdt soldatene i geleddet.',
          },
        ],
      },
    },
    {
      id: 'historie-11-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Forste verdenskrig ble en industriell slakting som ingen hadde forestilt seg. Ny teknologi gjorde forsvar enkelt og angrep nesten umulig, og resultatet var fire ar med stillestående fronter og enorme tap.

**Nøkkelbegreper du na kjenner:**
- **Skyttergravskrig:** Krigføring fra befestede grøfter med statiske fronter
- **Ingenmannsland:** Dødsomradet mellom de fiendtlige skyttergravene
- **Maskingevær:** Automatvåpen som revolusjonerte forsvarskamp
- **Artilleri:** Store kanoner som stod for flest dødsfall
- **Giftgass:** Kjemiske våpen som skapte forferdelig lidelse
- **Total krig:** Mobilisering av hele samfunnet for krigsinnsats
- **Slaget ved Somme:** Symbol pa krigens meningsloshet - over en million tap
- **Granatsjokk:** Psykiske traumer fra krigen (PTSD)

**Det viktigste du tar med deg:**
Forste verdenskrig viste hva som skjer når militaer tenkning ikke holder tritt med teknologisk utvikling. Generalene forsto ikke at maskingevær og artilleri hadde gjort de gamle angrepsmetodene selvmorderiske. Resultatet var millioner av døde for minimale gevinster. Krigen traumatiserte en hel generasjon og forandret synet pa krig for alltid - fra glorios til meningslos.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 11.3 NARRATIV: Norge og Norden under krigen
// ============================================================================

export const CHAPTER_HISTORIE_11_3_NARRATIV: TextbookChapter = {
  id: 'historie-11-3-narrativ',
  courseId: 'historie',
  chapterNumber: '11.3',
  title: 'Norge og Norden under krigen',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan det nøytrale Norge likevel ble dratt inn i verdenskrigen.',
  estimatedMinutes: 40,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  linkedChapterId: 'historie-11-3',
  content: [
    {
      id: 'historie-11-3-n-intro',
      type: 'text',
      content: `## Nøytrale - men ikke uberørte

Da krigen brøt ut sommeren 1914, pustet nordmenn lettet ut. Norge erklærte seg nøytralt, akkurat som Sverige og Danmark. Vi skulle holde oss utenfor dette galskapen. Vi hadde ingen del i stormaktenes krangler.

Men virkeligheten var ikke sa enkel.

Norge var et lite land klemt mellom mektige naboer. Vi hadde akkurat blitt selvstendige fra Sverige i 1905 - bare ni ar tidligere. Vi hadde en av verdens største handelsflater, men ingen militær makt til a forsvare den. Og vi var avhengige av handel med bade Storbritannia og Tyskland.

I løpet av de neste fire arene skulle krigen forandre det norske samfunnet dypt. Over 2000 norske sjømenn mistet livet. Hundrevis av skip ble senket. Vanlige nordmenn sultet og frøs mens noen fa ble steinrike. Krigen viste at selv nøytrale land ikke kan stenge ute verdens stormer.

La oss se nærmere pa hvordan forste verdenskrig pavirket Norge.`,
    },
    {
      id: 'historie-11-3-n-section1',
      type: 'text',
      content: `## Nøytralitetens dilemma

Norsk nøytralitetspolitikk var enkel i teorien: Vi tar ikke parti. Vi handler med alle. Vi holder oss unna.

I praksis var det umulig.

Norge var dypt avhengig av **import**. Vi importerte kull fra Storbritannia for a varme husene våre og drive fabrikkene. Vi importerte mat fordi vi ikke produserte nok selv. Og denne importen kom sjøveien - gjennom farvann som Storbritannia kontrollerte.

Samtidig hadde vi sterke økonomiske band til **Tyskland**. Vi solgte fisk dit. Vi hadde handelsavtaler. Og Tyskland la like i naerheten - deres u-båter kunne nå alle norske havner.

Slik ble Norge fanget i klemma. Storbritannia krevde at vi ikke solgte varer til Tyskland. Tyskland truet med u-båtangrep hvis vi samarbeidet for mye med britene. Begge sider presset oss.

I praksis ble norsk nøytralitet **skjev**. Vi var mer avhengige av Storbritannia enn av Tyskland, og norske skip fraktet hovedsakelig varer for de allierte. Tyskland sa pa Norge som reelt alliert med fienden. Men vi hadde ikke noe valg - a nekte britene kunne bety at de stoppet importen vi var avhengige av.

Regjeringen Knudsen forsøkte a balansere, men det var som a ga pa line mellom to avgrunner.`,
    },
    {
      id: 'historie-11-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-11-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Norges nøytralitetsdilemma:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-3-n-quiz1-q0',
            task: 'Hvorfor var det umulig for Norge a vaere fullstendig nøytralt under forste verdenskrig?',
            options: [
              { id: 'a', text: 'Fordi Norges allianse med Storbritannia fra 1905 forpliktet dem til a støtte de allierte diplomatisk', isCorrect: false },
              { id: 'b', text: 'Fordi Norge var økonomisk avhengig av handel gjennom britisk-kontrollerte sjøveier', isCorrect: true },
              { id: 'c', text: 'Fordi norske politikere sympatiserte med de allierte og aktivt valgte a stotte dem mot Tyskland', isCorrect: false },
              { id: 'd', text: 'Fordi Tyskland krevde at Norge stoppet all handel med Storbritannia, noe Norge nektet a gjøre', isCorrect: false },
            ],
            solution: 'Norge var avhengig av import gjennom farvann Storbritannia kontrollerte. Kull og mat matte passere britisk kontroll, noe som ga Storbritannia pressmiddel.',
          },
          {
            id: 'historie-11-3-n-quiz1-q1',
            task: 'Hvorfor ble norsk nøytralitet "skjev" i praksis?',
            options: [
              { id: 'a', text: 'Fordi Norge hadde en hemmelig avtale med Storbritannia om a begrense eksporten til Tyskland', isCorrect: false },
              { id: 'b', text: 'Fordi Norge var mer avhengig av Storbritannia enn av Tyskland, og norske skip fraktet hovedsakelig varer for de allierte', isCorrect: true },
              { id: 'c', text: 'Fordi den norske handelsflaten var for liten til a betjene begge sider, sa regjeringen valgte a prioritere den mest lønnsomme handelspartneren', isCorrect: false },
              { id: 'd', text: 'Fordi norsk folkeopinion var sterkt pro-britisk etter unionstiden med Sverige, og regjeringen fulgte opinionen', isCorrect: false },
            ],
            solution: 'Norge var mer avhengig av Storbritannia enn av Tyskland for import av kull og mat. Norske skip fraktet hovedsakelig varer for de allierte. A nekte britene kunne bety at de stoppet den livsviktige importen.',
          },
          {
            id: 'historie-11-3-n-quiz1-q2',
            task: 'Hvor lenge hadde Norge vaert selvstendig da forste verdenskrig brøt ut?',
            options: [
              { id: 'a', text: 'Ca. 20 ar -- Norge ble selvstendig fra Sverige i 1895', isCorrect: false },
              { id: 'b', text: 'Ca. 14 ar -- Norge ble selvstendig fra Danmark i 1900', isCorrect: false },
              { id: 'c', text: 'Bare 9 ar -- Norge ble selvstendig fra Sverige i 1905', isCorrect: true },
              { id: 'd', text: 'Bare 3 ar -- Norge ble selvstendig fra Sverige i 1911', isCorrect: false },
            ],
            solution: 'Norge hadde bare vaert selvstendig i ni ar da krigen brøt ut -- uavhengigheten fra Sverige kom i 1905. Det var et ungt og sårbart land uten militaer makt til a forsvare seg.',
          },
        ],
      },
    },
    {
      id: 'historie-11-3-n-section2',
      type: 'text',
      content: `## Norske sjømenn i dodens farvann

Norges største bidrag til krigen - og storste offer - kom fra handelsflaten. Vi hadde verdens fjerde største handelsflate, og skipene våre var livsviktige for de allierte.

Norske skip fraktet kull fra Storbritannia, mat fra Amerika, krigsmateriell til fronten. De seilte gjennom farvann der tyske u-båter lurte under overflaten. Hver reise var en risiko. Hver avgang kunne vaere den siste.

**Torpedoene** kom uten varsel. Et skip kunne vaere trygt det ene øyeblikket og synkende det neste. Sjømenn som overlevde selve torpederingen, kunne fryse eller drukne i det kalde havet for de ble reddet. Andre ble skutt av u-båtbesetninger som ikke ville ha vitner.

Tallene taler for seg: Over **800 norske skip** ble senket under krigen. Rundt **2000 norske sjømenn** mistet livet - i en krig vi offisielt ikke deltok i. Det var flere enn mange land som faktisk kjempet mistet.

For rederne var krigen lønnsom. **Fraktratene** eksploderte fordi det var sa farlig a seile. Noen ble styrtrike. Men for sjømennene og familiene deres var det en helt annen virkelighet. De risikerte alt for noen andres profitt.

Staten forsøkte a gripe inn. Mot slutten av krigen tok myndighetene mer kontroll over flaten gjennom ordninger som skulle bli til **Nortraship** under andre verdenskrig. Men beskyttelsen av sjømennene var for lite, for sent.`,
    },
    {
      id: 'historie-11-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-11-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa norske sjømenn under forste verdenskrig:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-3-n-quiz2-q0',
            task: 'Hvor mange norske sjømenn mistet livet under forste verdenskrig?',
            options: [
              { id: 'a', text: 'Rundt 800, omtrent det samme som antall skip som ble senket', isCorrect: false },
              { id: 'b', text: 'Rundt 1200, hovedsakelig fra torpederinger i Nordsjøen', isCorrect: false },
              { id: 'c', text: 'Rundt 2000', isCorrect: true },
              { id: 'd', text: 'Rundt 3500, omtrent like mange som Norge mistet under andre verdenskrig', isCorrect: false },
            ],
            solution: 'Rundt 2000 norske sjømenn mistet livet under forste verdenskrig, til tross for at Norge var nøytralt. Over 800 norske skip ble senket av tyske u-båter.',
          },
          {
            id: 'historie-11-3-n-quiz2-q1',
            task: 'Hvorfor var den norske handelsflaten sa viktig for de allierte under krigen?',
            options: [
              { id: 'a', text: 'Fordi Norge hadde spesialiserte skip som kunne navigere i farlige minefelt der andre nasjoners skip ikke kunne operere', isCorrect: false },
              { id: 'b', text: 'Fordi norske skip fraktet kull, mat og krigsmateriell som de allierte var avhengige av', isCorrect: true },
              { id: 'c', text: 'Fordi norske skip seilte under nøytralt flagg og dermed var beskyttet mot u-båtangrep etter internasjonal lov', isCorrect: false },
              { id: 'd', text: 'Fordi Norge stilte handelsflaten til disposisjon for den britiske marinen som del av en hemmelig avtale', isCorrect: false },
            ],
            solution: 'Norge hadde verdens fjerde største handelsflate. Norske skip fraktet kull fra Storbritannia, mat fra Amerika og krigsmateriell til fronten. Denne transporten var livsviktig for de alliertes krigføring.',
          },
          {
            id: 'historie-11-3-n-quiz2-q2',
            task: 'Hvem tjente pa den farlige sjøfarten under krigen?',
            options: [
              { id: 'a', text: 'Sjømennene selv, som fikk betydelig høyere hyre og risikotillegg for a seile i krigsomrader', isCorrect: false },
              { id: 'b', text: 'Den norske staten, som tok inn store skatteinntekter fra handelsflaten og brukte dem til a bygge opp forsvaret', isCorrect: false },
              { id: 'c', text: 'Rederne som tjente enormt pa de høye fraktratene', isCorrect: true },
              { id: 'd', text: 'De allierte landene, som fikk norske skip til a frakte varer gratis som del av nøytralitetsavtalen', isCorrect: false },
            ],
            solution: 'Fraktratene eksploderte fordi det var sa farlig a seile. Rederne ble styrtrike, mens sjømennene risikerte livet for noen andres profitt. Staten forsøkte a gripe inn mot slutten av krigen, men beskyttelsen var for lite, for sent.',
          },
        ],
      },
    },
    {
      id: 'historie-11-3-n-section3',
      type: 'text',
      content: `## Dyrtid og sult

For vanlige nordmenn hjemme ble krigen merkbar pa en helt konkret mate: i magen.

Norge importerte mye av maten vi spiste. Da krigen kuttet forsyningslinjene og senket skip, ble det varemangel. Prisene skjøt i vaeret. En familie som hadde klart seg greit, kunne plutselig ikke ha rad til nok mat.

**Dyrtiden**, som det ble kalt, rammet hardest de som hadde minst fra for. Arbeiderfamilier og smakaarsfolk slet med a fa endene til a møtes. Mat som for hadde vaert selvfølgelig - hvetebrød, kjøtt, sukker - ble luksus.

I 1917 ble **rasjonering** innført. Folk fikk tildelt bestemte mengder av viktige varer. Det skulle sikre at alle fikk litt, i stedet for at de rike kjøpte opp alt. Men rasjoneringen var ofte utilstrekkelig, og svartebørs blomstret.

Mens folk flest slet, var det noen som **tjente stort** pa krigen. Rederiene ble rike pa de hoye fraktratene. Spekulanter - "jobbere" - kjøpte og solgte varer for rask fortjeneste. Ordet "jobbetid" ble et uttrykk for grisk profittering pa andres nød.

Kontrasten var provoserende. Mens arbeiderbarn gikk sultne, feiret nyrike sine formuer med luksus og fest. Dette skapte **sosial uro**. Dyrtidsaksjoner og protester spredte seg. I noen tilfeller ble det regelrette "potetopprør" der folk krevde lavere priser.

Klassemotsetningene ble tydeligere enn noensinne. Arbeiderbevegelsen vokste. Folk begynte a spørre: Er det rettferdig at noen blir rike mens andre sulter?`,
    },
    {
      id: 'historie-11-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-11-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa dyrtid og sosiale spenninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-3-n-quiz3-q0',
            task: 'Hva var "jobbetiden"?',
            options: [
              { id: 'a', text: 'En periode med høy økonomisk vekst der nye industrijobber ble skapt av krigsproduksjonen', isCorrect: false },
              { id: 'b', text: 'En periode der spekulanter tjente store penger pa varemangel og hoye priser', isCorrect: true },
              { id: 'c', text: 'En betegnelse pa den generelle økonomiske oppgangen i Norge som fulgte av økt eksport til krigførende land', isCorrect: false },
              { id: 'd', text: 'En periode der arbeiderklassen fikk bedre vilkar fordi det var mangel pa arbeidskraft i norsk industri', isCorrect: false },
            ],
            solution: '"Jobbetiden" var et negativt uttrykk for perioden under forste verdenskrig da spekulanter ("jobbere") tjente store penger pa a kjøpe og selge varer mens vanlige folk slet med dyrtid og sult.',
          },
          {
            id: 'historie-11-3-n-quiz3-q1',
            task: 'Hva var "dyrtiden", og hvem ble hardest rammet?',
            options: [
              { id: 'a', text: 'En periode med moderat prisøkning som rammet alle klasser omtrent likt fordi rasjoneringen sikret rettferdig fordeling', isCorrect: false },
              { id: 'b', text: 'En periode med hoye priser og varemangel som rammet hardest de som hadde minst -- arbeiderfamilier og smakaarsfolk', isCorrect: true },
              { id: 'c', text: 'En periode med prisøkning hovedsakelig pa importvarer, men norskprodusert mat forble rimelig og tilgjengelig', isCorrect: false },
              { id: 'd', text: 'En periode der prisene steg mest i byene, mens folk pa landsbygda klarte seg godt fordi de produserte sin egen mat', isCorrect: false },
            ],
            solution: 'Dyrtiden var perioden med hoye priser og varemangel under forste verdenskrig. Krigen kuttet forsyningslinjer og senket skip, noe som skapte mangel. Arbeiderfamilier og smakaarsfolk ble hardest rammet -- mat som hvetebrød, kjøtt og sukker ble luksus.',
          },
          {
            id: 'historie-11-3-n-quiz3-q2',
            task: 'Nar ble rasjonering innført i Norge, og hvorfor?',
            options: [
              { id: 'a', text: 'I 1915, da u-båtkrigen begynte a ramme norske forsyningslinjer for alvor', isCorrect: false },
              { id: 'b', text: 'I 1916, etter at Storbritannia innførte sin sjøblokade som begrenset norsk import drastisk', isCorrect: false },
              { id: 'c', text: 'I 1917, for a sikre at alle fikk litt i stedet for at de rike kjøpte opp alt', isCorrect: true },
              { id: 'd', text: 'I 1918, rett for krigen tok slutt, da matmangelen hadde nådd et kritisk nivå', isCorrect: false },
            ],
            solution: 'Rasjonering ble innført i 1917. Folk fikk tildelt bestemte mengder av viktige varer for a sikre at alle fikk litt, i stedet for at de rike kjøpte opp alt. Men rasjoneringen var ofte utilstrekkelig, og svartebørs blomstret.',
          },
          {
            id: 'historie-11-3-n-quiz3-q3',
            task: 'Hvilken politisk konsekvens hadde dyrtiden og jobbetiden i Norge?',
            options: [
              { id: 'a', text: 'Regjeringen Knudsen fikk økt støtte fordi folk mente nøytralitetspolitikken hadde beskyttet Norge', isCorrect: false },
              { id: 'b', text: 'De sosiale motsetningene ble tydeligere og arbeiderbevegelsen vokste', isCorrect: true },
              { id: 'c', text: 'Det ble bred politisk enighet om a styrke forsvaret og forberede seg pa fremtidige konflikter', isCorrect: false },
              { id: 'd', text: 'Nasjonalismen ble styrket og folk samlet seg rundt kongehuset som symbol pa norsk selvstendighet', isCorrect: false },
            ],
            solution: 'Kontrasten mellom nyrike som feiret med luksus og arbeiderbarn som gikk sultne skapte sosial uro. Dyrtidsaksjoner og protester spredte seg, klassemotsetningene ble tydeligere, og arbeiderbevegelsen ble styrket.',
          },
        ],
      },
    },
    {
      id: 'historie-11-3-n-section4',
      type: 'text',
      content: `## Norden samlet - og splittet

Norge var ikke alene om a vaere nøytralt. Sverige og Danmark erklærte ogsa nøytralitet. Men de tre landene opplevde krigen pa ulike mater.

**Danmark** delte grense med Tyskland og var mest sårbart. Danskene holdt seg mer tyskvennlige av ren nødvendighet - de var redde for invasjon. De solgte mat til begge sider og klarte seg relativt bra økonomisk.

**Sverige** var mer splittet. Kongehuset og konservative kretser sympatiserte med Tyskland. Sverige eksporterte jernmalm som var livsviktig for tysk rustningsindustri. Men Sverige led ogsa - vinteren 1917-18 ble kalt "kalrotsvinteren" pa grunn av matmangelen.

**Norge** var mest utsatt til sjøs. Var store handelsflate gjorde oss til mal for u-båtene. Vi var ogsa mest avhengige av britisk import.

Likevel forsøkte de tre landene a sta sammen. Kongene av Norge, Sverige og Danmark møttes i **Malmö i 1914** for a demonstrere nordisk solidaritet og felles nøytralitet. Det var et viktig symbol pa at Norden holdt sammen - selv om praktiske interesser av og til dro i ulike retninger.

Krigen styrket ogsa tanken om **nordisk samarbeid**. Nar verden rundt oss var i brann, virket det fornuftig at de sma, fredelige nordiske landene holdt sammen. Dette la grunnlag for tettere samarbeid i mellomkrigstiden.`,
    },
    {
      id: 'historie-11-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-11-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Norden under forste verdenskrig:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-3-n-quiz4-q0',
            task: 'Hvordan skilte Norges situasjon seg fra Sveriges under forste verdenskrig?',
            options: [
              { id: 'a', text: 'Norge eksporterte jernmalm til Tyskland og var derfor mer økonomisk knyttet til sentralmaktene enn Sverige', isCorrect: false },
              { id: 'b', text: 'Norge var mer utsatt pa grunn av handelsflaten og avhengigheten av sjøimport', isCorrect: true },
              { id: 'c', text: 'Norge opplevde verre matmangel enn Sverige fordi norsk jordbruk var mindre produktivt', isCorrect: false },
              { id: 'd', text: 'Sverige var mer presset av Russland langs østgrensen, mens Norge hovedsakelig ble pavirket av britisk sjøblokade', isCorrect: false },
            ],
            solution: 'Norge var mer utsatt enn Sverige fordi vi hadde en stor handelsflate som ble mal for u-båter, og fordi vi var avhengige av sjøimport. Sverige var mer landlast og hadde ressurser som jernmalm de kunne handle med.',
          },
          {
            id: 'historie-11-3-n-quiz4-q1',
            task: 'Hva skjedde da kongene av Norge, Sverige og Danmark møttes i Malmö i 1914?',
            options: [
              { id: 'a', text: 'De inngikk en felles nordisk forsvarsavtale om gjensidig militaer beskyttelse ved angrep', isCorrect: false },
              { id: 'b', text: 'De avtalte en felles nordisk handelspolitikk for a sikre at alle tre land fikk like vilkar fra stormaktene', isCorrect: false },
              { id: 'c', text: 'De demonstrerte nordisk solidaritet og felles nøytralitet', isCorrect: true },
              { id: 'd', text: 'De koordinerte en felles nordisk nøytralitetserklæring som de sendte til begge krigførende parter', isCorrect: false },
            ],
            solution: 'Kongemøtet i Malmö i 1914 var et viktig symbol pa nordisk samhold. De tre kongene demonstrerte felles nøytralitet og nordisk solidaritet, selv om de nordiske landene i praksis hadde noe ulike interesser.',
          },
          {
            id: 'historie-11-3-n-quiz4-q2',
            task: 'Hvorfor var Danmark mest sårbart blant de nordiske landene?',
            options: [
              { id: 'a', text: 'Fordi Danmark hadde mistet Slesvig-Holstein til Tyskland i 1864 og fryktet ytterligere territorielle krav', isCorrect: false },
              { id: 'b', text: 'Fordi Danmark kontrollerte innløpet til Østersjøen og begge sider presset dem til a stenge eller apne stredene', isCorrect: false },
              { id: 'c', text: 'Fordi Danmark var mest avhengig av britisk handel og ville bli hardest rammet av en tysk sjøblokade', isCorrect: false },
              { id: 'd', text: 'Fordi Danmark delte grense med Tyskland og var redd for invasjon', isCorrect: true },
            ],
            solution: 'Danmark delte grense med Tyskland og var derfor mest sårbart for en eventuell invasjon. Dette tvang danskene til a holde seg mer tyskvennlige av ren nødvendighet.',
          },
        ],
      },
    },
    {
      id: 'historie-11-3-n-section5',
      type: 'text',
      content: `## Laerdommer fra krigen

Da krigen endelig var slutt i november 1918, hadde Norge forandret seg. Nøytraliteten hadde holdt oss utenfor skyttergravene, men vi hadde likevel betalt en høy pris.

De **2000 sjømennene** som døde, var et varig sår. Mange familier langs kysten hadde mistet fedre, sønner og brødre. Minnene om u-båtkrigen preget norsk sjøfart i generasjoner.

**Dyrtiden og jobbetiden** hadde vist hvor sårbart samfunnet var. De sosiale motsetningene som ble synlige under krigen, la grunnlag for politisk uro i mellomkrigstiden. Arbeiderbevegelsen ble styrket av erfaringene.

Men krigen ga ogsa noen **laerdommer** om nøytralitet:
- Et lite land kan ikke isolere seg fra stormaktskonflikter
- Økonomisk avhengighet begrenser handlefriheten
- Nøytralitet beskytter ikke automatisk mot krigens konsekvenser
- Beredskap og forsvar er viktig, selv for nøytrale land

Ironisk nok lærte Norge **feil lekse** av forste verdenskrig. Fordi nøytraliteten "fungerte" - vi ble ikke invadert - trodde mange at den ville fungere igjen. Norge forsømte forsvaret i mellomkrigstiden og satset pa nøytralitet.

I 1940 skulle denne strategien mislykkes totalt. Da tyske skip seilte inn i norske fjorder, viste det seg at nøytralitet uten militaer styrke bare er en illusjon.`,
    },
    {
      id: 'historie-11-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-11-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa laerdommer fra krigen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-3-n-quiz5-q0',
            task: 'Hvilken "feil laerdom" trakk Norge av forste verdenskrig?',
            options: [
              { id: 'a', text: 'At Norge burde bygge opp en sterk marine for a beskytte handelsflaten i fremtidige konflikter', isCorrect: false },
              { id: 'b', text: 'At nøytralitet ville beskytte oss igjen, slik at forsvar var unødvendig', isCorrect: true },
              { id: 'c', text: 'At Norge burde innga en formell allianse med Storbritannia for a sikre seg mot fremtidige trusler', isCorrect: false },
              { id: 'd', text: 'At nordisk samarbeid og felles forsvarspolitikk var nøkkelen til a unnga fremtidige kriger', isCorrect: false },
            ],
            solution: 'Fordi nøytraliteten "fungerte" under forste verdenskrig, trodde mange at den ville fungere igjen. Norge forsømte forsvaret i mellomkrigstiden. I 1940 viste det seg at nøytralitet uten militaer styrke bare er en illusjon.',
          },
          {
            id: 'historie-11-3-n-quiz5-q1',
            task: 'Hva viste forste verdenskrig om nøytralitet for et lite land som Norge?',
            options: [
              { id: 'a', text: 'At nøytralitet fungerte godt sa lenge landet opprettholdt likeverdig handel med begge parter i konflikten', isCorrect: false },
              { id: 'b', text: 'At et lite land ikke kan isolere seg fra stormaktskonflikter -- økonomisk avhengighet begrenser handlefriheten', isCorrect: true },
              { id: 'c', text: 'At nøytralitet var det riktige valget fordi Norge unngikk de verste konsekvensene og beholdt sin selvstendighet', isCorrect: false },
              { id: 'd', text: 'At nordisk nøytralitetssamarbeid var effektivt og burde videreføres som sikkerhetsstrategi etter krigen', isCorrect: false },
            ],
            solution: 'Forste verdenskrig viste at et lite land ikke kan isolere seg fra stormaktskonflikter. Økonomisk avhengighet begrenser handlefriheten, og nøytralitet beskytter ikke automatisk mot krigens konsekvenser. Norge mistet 2000 sjømenn og opplevde dyrtid og sosial uro.',
          },
          {
            id: 'historie-11-3-n-quiz5-q2',
            task: 'Hva skjedde i 1940 som beviste at Norges laerdom fra forste verdenskrig var feil?',
            options: [
              { id: 'a', text: 'Storbritannia og Frankrike landsatte tropper i Nord-Norge for a sikre malmtransporten fra Narvik, uten norsk samtykke', isCorrect: false },
              { id: 'b', text: 'Norge ble tvunget inn i krigen etter at tyske u-bater senket norske handelsskip i stort omfang', isCorrect: false },
              { id: 'c', text: 'Tyske skip seilte inn i norske fjorder og invaderte det nøytrale Norge', isCorrect: true },
              { id: 'd', text: 'Norge ble dratt inn i krigen fordi Sverige brøt nøytraliteten og tillot tyske tropper a passere gjennom svensk territorium', isCorrect: false },
            ],
            solution: 'I 1940 invaderte Tyskland det nøytrale Norge. Nøytralitetsstrategien som hadde "fungert" under forste verdenskrig, mislyktes totalt. Norge hadde forsømt forsvaret og var ikke forberedt. Det viste at nøytralitet uten militaer styrke bare er en illusjon.',
          },
        ],
      },
    },
    {
      id: 'historie-11-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Selv om Norge var nøytralt under forste verdenskrig, ble landet dypt pavirket. Sjømenn døde, folk sultet, og samfunnet ble mer splittet. Krigen viste at sma land ikke kan isolere seg fra store konflikter.

**Nøkkelbegreper du na kjenner:**
- **Norsk nøytralitet:** Offisielt nøytralt, men i praksis naermere de allierte pa grunn av økonomisk avhengighet
- **Handelsflaten:** Norges største bidrag og offer - over 800 skip senket, 2000 sjømenn døde
- **Dyrtid:** Periode med hoye priser og varemangel
- **Jobbetid:** Periode der spekulanter tjente pa krisen
- **Rasjonering:** Innført i 1917 for a fordele knappe ressurser
- **Nordisk samarbeid:** Styrket av felles nøytralitetspolitikk

**Det viktigste du tar med deg:**
Nøytralitet er ingen garanti mot a bli rammet av krig. Et lite land som er økonomisk avhengig av andre, har begrenset handlefrihet. Norge betalte en høy pris for krigens konsekvenser - sjømenn døde, folk sultet, samfunnet ble mer ulikhet. Og laerdommen Norge trakk - at nøytralitet ville fungere igjen - viste seg a vaere feil bare 22 ar senere.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 11.4 NARRATIV: Fredsslutninger og konsekvenser
// ============================================================================

export const CHAPTER_HISTORIE_11_4_NARRATIV: TextbookChapter = {
  id: 'historie-11-4-narrativ',
  courseId: 'historie',
  chapterNumber: '11.4',
  title: 'Fredsslutninger og konsekvenser',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om Versailles-traktaten og hvordan freden sådde kimen til ny krig.',
  estimatedMinutes: 45,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  linkedChapterId: 'historie-11-4',
  content: [
    {
      id: 'historie-11-4-n-intro',
      type: 'text',
      content: `## Freden som skapte ny krig

11. november 1918, klokken 11 om formiddagen, ble det stille pa vestfronten. Etter fire ar med helvete - 17 millioner døde, fire imperier kollapset - var forste verdenskrig endelig over.

Men freden som fulgte, skulle vise seg a vaere nesten like katastrofal som krigen.

I Paris samlet seierherrene seg for a tegne et nytt Europa. De skulle skape en verden der krig aldri kunne skje igjen. De hadde gode intensjoner. Men resultatet - særlig Versailles-traktaten med Tyskland - ble en bitter fred som ydmyket en stolt nasjon og ga næring til den revansjelysten som skulle føre til andre verdenskrig.

Hvordan kunne fredsskaperne gjøre det sa galt? La oss folge med til Paris 1919 og se hva som skjedde.`,
    },
    {
      id: 'historie-11-4-n-section1',
      type: 'text',
      content: `## Krigens slutt og imperiene som falt

1917 var vendepunktet. To hendelser forandret krigens gang fullstendig.

I april gikk **USA** inn pa alliert side. Den umiddelbare arsaken var Tysklands ubegrensede u-båtkrig - de senket alle skip, ogsa amerikanske. Men Zimmermann-telegrammet, der Tyskland forsøkte a lokke Mexico til krig mot USA, var drapen. Amerikanske tropper og ressurser veltet inn i Europa.

I oktober brøt **revolusjon** ut i Russland. Bolsjevikene under Lenin tok makten og trakk Russland ut av krigen. Tyskland kunne endelig flytte tropper fra østfronten.

I 1918 forsøkte Tyskland en siste desperat offensiv i vest. Den mislyktes. Med amerikanske forsterkninger motangrep de allierte. Tysklands allierte kollapset: Bulgaria, Det osmanske riket, Osterrike-Ungarn - alle ba om våpenhvile.

I Tyskland selv brøt det ut revolusjon. Matroser i Kiel nektet a seile ut i et siste slag. Opprøret spredte seg. Keiser Wilhelm abdiserte og flyktet til Nederland. Den 11. november signerte den nye tyske regjeringen våpenhvilen.

**Fire imperier** hadde falt: Det tyske keiserriket, Osterrike-Ungarn, Det osmanske riket og Det russiske tsarriket. Pa ruinene vokste det fram en mengde nye stater: Polen, Tsjekkoslovakia, Jugoslavia, Finland, de baltiske landene og flere. Europas kart ble fullstendig omtegnet.`,
    },
    {
      id: 'historie-11-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-11-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa krigens slutt og imperiene som falt:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-4-n-quiz1-q0',
            task: 'Hvilke fire imperier kollapset som følge av forste verdenskrig?',
            options: [
              { id: 'a', text: 'Det tyske, østerriksk-ungarske, osmanske og britiske', isCorrect: false },
              { id: 'b', text: 'Det tyske, østerriksk-ungarske, osmanske og russiske', isCorrect: true },
              { id: 'c', text: 'Det tyske, russiske, franske og osmanske', isCorrect: false },
              { id: 'd', text: 'Det østerriksk-ungarske, osmanske, russiske og italienske', isCorrect: false },
            ],
            solution: 'De fire imperiene som kollapset var: Det tyske keiserriket, Osterrike-Ungarn, Det osmanske riket og Det russiske tsarriket. Pa ruinene vokste nye nasjonalstater fram.',
          },
          {
            id: 'historie-11-4-n-quiz1-q1',
            task: 'Hvilke to hendelser i 1917 forandret krigens gang fullstendig?',
            options: [
              { id: 'a', text: 'USA gikk inn pa alliert side og den tyske haeren kollapset pa vestfronten etter en mislykket offensiv', isCorrect: false },
              { id: 'b', text: 'Revolusjon i Russland trakk russerne ut av krigen og det osmanske rikets sammenbrudd apnet en ny front i Midtøsten', isCorrect: false },
              { id: 'c', text: 'USA gikk inn pa alliert side og revolusjon i Russland trakk russerne ut av krigen', isCorrect: true },
              { id: 'd', text: 'Den tyske u-båtkrigen ble avgjort og britene brøt gjennom de tyske linjene ved Somme', isCorrect: false },
            ],
            solution: 'I 1917 gikk USA inn i krigen pa alliert side (blant annet pa grunn av Tysklands ubegrensede u-båtkrig og Zimmermann-telegrammet), og den russiske revolusjonen under Lenin trakk Russland ut av krigen.',
          },
          {
            id: 'historie-11-4-n-quiz1-q2',
            task: 'Hva var Zimmermann-telegrammet?',
            options: [
              { id: 'a', text: 'Et hemmelig tysk telegram som tilbød Japan territorier i Stillehavet i bytte mot a angripe amerikanske styrker', isCorrect: false },
              { id: 'b', text: 'Et tysk forslag til USA om felles fredsmegling mellom de krigførende partene i Europa', isCorrect: false },
              { id: 'c', text: 'Et hemmelig tysk telegram som forsøkte a lokke Mexico til krig mot USA', isCorrect: true },
              { id: 'd', text: 'Et hemmelig tysk telegram som varslet om gjenopptagelse av ubegrenset u-båtkrig mot alle nøytrale skip', isCorrect: false },
            ],
            solution: 'Zimmermann-telegrammet var et hemmelig tysk telegram der Tyskland forsøkte a lokke Mexico til krig mot USA. Da telegrammet ble avdekket, bidro det sterkt til a trekke USA inn i krigen pa alliert side.',
          },
          {
            id: 'historie-11-4-n-quiz1-q3',
            task: 'Hva utløste den tyske revolusjonen i november 1918?',
            options: [
              { id: 'a', text: 'Soldater ved vestfronten nektet a følge ordrer om nye angrep etter fire ar med meningslose tap', isCorrect: false },
              { id: 'b', text: 'Matroser i Kiel nektet a seile ut i et siste slag, og opprøret spredte seg', isCorrect: true },
              { id: 'c', text: 'Arbeidere og sosialister i Berlin organiserte en generalstreik inspirert av den russiske revolusjonen', isCorrect: false },
              { id: 'd', text: 'Generalene Hindenburg og Ludendorff krevde at keiseren abdiserte for a redde haerens aere', isCorrect: false },
            ],
            solution: 'Den tyske revolusjonen begynte da matroser i Kiel nektet a seile ut i et siste desperat slag. Opprøret spredte seg raskt over hele Tyskland. Keiser Wilhelm abdiserte og flyktet til Nederland, og en ny regjering signerte våpenhvilen 11. november 1918.',
          },
        ],
      },
    },
    {
      id: 'historie-11-4-n-section2',
      type: 'text',
      content: `## Versailles - diktatet

I januar 1919 samlet seierherrene seg i Paris for fredskonferansen. **"De fire store"** dominerte: President Woodrow Wilson fra USA, statsminister Georges Clemenceau fra Frankrike, statsminister David Lloyd George fra Storbritannia, og statsminister Vittorio Orlando fra Italia.

Tyskland ble ikke invitert til forhandlingene. De skulle bare fa presentert resultatet og signere. Dette er grunnen til at tyskerne kalte traktaten for et "**diktat**" - den ble paktvunget, ikke forhandlet.

De fire store hadde svært ulike mal. **Clemenceau** ville ha sikkerhet - Frankrike hadde lidd enormt og fryktet ny tysk aggresjon. Han ville svekke Tyskland permanent. **Lloyd George** var mer moderat, men hadde lovet det britiske folk at Tyskland skulle betale. **Wilson** drømte om en rettferdig fred basert pa hans "14 punkter" - selvbestemmelse for folk, åpen diplomati, Folkeforbundet. **Orlando** ville ha de territoriene Italia var blitt lovet.

Resultatet ble et kompromiss som ikke tilfredsstilte noen fullt ut - og skapte enorm bitterhet i Tyskland.

**Versailles-traktaten** inneholdt harde vilkar:
- **Territorielle tap:** Tyskland mistet Alsace-Lorraine til Frankrike, omrader til Polen, alle kolonier
- **Militaere begrensninger:** Haeren begrenset til 100 000 mann, ingen u-båter eller luftvåpen, Rhinland demilitarisert
- **Krigsskyldsklausulen (artikkel 231):** Tyskland matte akseptere skylden for hele krigen
- **Erstatninger:** Enorme summer som skulle betales til de allierte`,
    },
    {
      id: 'historie-11-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-11-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Versailles-traktaten:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-4-n-quiz2-q0',
            task: 'Hvorfor kalte tyskerne Versailles-traktaten et "diktat"?',
            options: [
              { id: 'a', text: 'Fordi vilkarene var sa strenge at de minte om krav en diktator ville stille til et erobret land', isCorrect: false },
              { id: 'b', text: 'Fordi Tyskland ikke fikk delta i forhandlingene -- traktaten ble patvunget dem', isCorrect: true },
              { id: 'c', text: 'Fordi Tyskland fikk bare tre dager til a gjennomga og signere traktaten, uten mulighet for endringer', isCorrect: false },
              { id: 'd', text: 'Fordi Clemenceau personlig dikterte vilkarene uten a konsultere de andre allierte lederne', isCorrect: false },
            ],
            solution: 'Tyskerne kalte traktaten et "diktat" fordi de ikke fikk delta i forhandlingene. De ble bare presentert for det ferdige resultatet og tvunget til a signere under trussel om fortsatt krig.',
          },
          {
            id: 'historie-11-4-n-quiz2-q1',
            task: 'Hvem var "de fire store" pa fredskonferansen i Paris?',
            options: [
              { id: 'a', text: 'Wilson (USA), Clemenceau (Frankrike), Lloyd George (Storbritannia) og en representant fra Russland', isCorrect: false },
              { id: 'b', text: 'Wilson (USA), Clemenceau (Frankrike), Lloyd George (Storbritannia) og en representant fra Japan', isCorrect: false },
              { id: 'c', text: 'Wilson (USA), Clemenceau (Frankrike), Lloyd George (Storbritannia) og Orlando (Italia)', isCorrect: true },
              { id: 'd', text: 'Wilson (USA), Clemenceau (Frankrike), Orlando (Italia) og en representant fra Belgia', isCorrect: false },
            ],
            solution: '"De fire store" var President Wilson fra USA, statsminister Clemenceau fra Frankrike, statsminister Lloyd George fra Storbritannia og statsminister Orlando fra Italia. De dominerte fredskonferansen i Paris i 1919.',
          },
          {
            id: 'historie-11-4-n-quiz2-q2',
            task: 'Hva var artikkel 231 i Versailles-traktaten?',
            options: [
              { id: 'a', text: 'Artikkelen som fastsatte de konkrete erstatningssummene Tyskland matte betale til de allierte', isCorrect: false },
              { id: 'b', text: 'Artikkelen som begrenset den tyske haeren til 100 000 mann og forbød u-bater og luftvapen', isCorrect: false },
              { id: 'c', text: 'Artikkelen som overførte Alsace-Lorraine tilbake til Frankrike og andre tyske territorier til Polen', isCorrect: false },
              { id: 'd', text: 'Krigsskyldsklausulen -- kravet om at Tyskland aksepterte skylden for hele krigen', isCorrect: true },
            ],
            solution: 'Artikkel 231 var krigsskyldsklausulen som krevde at Tyskland aksepterte skylden for hele krigen. Den var særlig ydmykende for tyskerne, som mente skylden burde deles mellom flere land.',
          },
          {
            id: 'historie-11-4-n-quiz2-q3',
            task: 'Hva var Clemenceaus viktigste mal pa fredskonferansen?',
            options: [
              { id: 'a', text: 'A fa Tyskland til a betale tilbake alle Frankrikes krigskostnader og gjenoppbygge de ødelagte omradene', isCorrect: false },
              { id: 'b', text: 'A sikre Frankrike mot ny tysk aggresjon ved a svekke Tyskland permanent', isCorrect: true },
              { id: 'c', text: 'A opprette Folkeforbundet som en internasjonal organisasjon med makt til a forhindre fremtidige kriger', isCorrect: false },
              { id: 'd', text: 'A sikre at Wilsons fjorten punkter ble fulgt, inkludert selvbestemmelsesrett for alle europeiske folk', isCorrect: false },
            ],
            solution: 'Clemenceau representerte Frankrike, som hadde lidd enormt under krigen med 1,4 millioner drepte. Hans viktigste mal var sikkerhet -- a svekke Tyskland permanent slik at Frankrike aldri igjen skulle trues av tysk aggresjon.',
          },
        ],
      },
    },
    {
      id: 'historie-11-4-n-section3',
      type: 'text',
      content: `## Bitterheten i Tyskland

For å forstå hvorfor Versailles-traktaten var så eksplosiv, må vi sette oss inn i hvordan tyskere opplevde den.

**Krigsskyldsklausulen** var særlig ydmykende. Tyskerne matte akseptere at de alene var skyld i krigen - noe mange mente var urettferdig. Hadde ikke Russland mobilisert? Hadde ikke Osterrike-Ungarn utløst krisen? Hvorfor skulle Tyskland ta all skylden?

**Territorietapene** betydde at millioner av tyskere plutselig bodde i andre land. Sudetenland gikk til Tsjekkoslovakia. Korridoren til Østersjoen gikk til Polen. Tanken om at tyskere skulle styres av "fremmede" var provoserende for nasjonalister.

**Erstatningene** var astronomiske. De endelige summene ble satt til 132 milliarder gullmark - mer enn noen kunne forestille seg. Mange økonomer, inkludert John Maynard Keynes, advarte om at slike erstatninger ville ødelegge tysk økonomi.

Og sa var det **dolkestøtlegenden**. Tyske generaler spredte myten om at haeren hadde vaert ubeseiret - at den hadde blitt "dolket i ryggen" av sosialister, jøder og andre "forrædere" hjemme. Dette var løgn - haeren var i oppløsning - men legenden ble trodd av mange. Den ga skylden til indre fiender og gjorde det lettere a fornekte nederlaget.

Inn i denne bitterheten kunne ekstremister som Adolf Hitler sa sine frø. Han lovte a rive opp "Versailles-diktatet", gjenreise Tysklands storhet, og straffe dem som hadde "forrådt" landet.`,
    },
    {
      id: 'historie-11-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-11-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa bitterheten i Tyskland:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-4-n-quiz3-q0',
            task: 'Hva var "dolkestøtlegenden"?',
            options: [
              { id: 'a', text: 'Pástanden om at de allierte brukte ulovlige metoder som forgiftet mat og sabotasje for a underminere den tyske haeren', isCorrect: false },
              { id: 'b', text: 'Myten om at den tyske haeren var ubeseiret, men ble forrådt av "indre fiender" hjemme', isCorrect: true },
              { id: 'c', text: 'Pástanden om at Versailles-traktaten var sa urettferdig at den var det egentlige "dolkestøtet" mot det tyske folket', isCorrect: false },
              { id: 'd', text: 'Myten om at den tyske haeren tapte fordi politikerne i Berlin nektet a sende nok forsterkninger og forsyninger til fronten', isCorrect: false },
            ],
            solution: 'Dolkestøtlegenden var myten om at den tyske haeren aldri hadde tapt militaert, men ble "dolket i ryggen" av forrædere hjemme. Legenden ble spredt av generaler og utnyttet av nazistene.',
          },
          {
            id: 'historie-11-4-n-quiz3-q1',
            task: 'Hvorfor var krigsskyldsklausulen særlig ydmykende for tyskerne?',
            options: [
              { id: 'a', text: 'Fordi den krevde at Tyskland offentlig beklaget overfor hver enkelt alliert nasjon for skadene krigen hadde forårsaket', isCorrect: false },
              { id: 'b', text: 'Fordi den krevde at Tyskland aksepterte all skyld for krigen, noe mange mente var urettferdig da flere land hadde bidratt til krigsutbruddet', isCorrect: true },
              { id: 'c', text: 'Fordi den tvang Tyskland til a utlevere keiser Wilhelm og tyske generaler til en internasjonal krigsdomstol', isCorrect: false },
              { id: 'd', text: 'Fordi den krevde at Tyskland ga fra seg alle kolonier og betalte erstatninger, men selve skyldspørsmalet var sekundært', isCorrect: false },
            ],
            solution: 'Krigsskyldsklausulen krevde at Tyskland aksepterte all skyld for krigen. Mange tyskere mente dette var urettferdig -- hadde ikke Russland mobilisert? Hadde ikke Osterrike-Ungarn utløst krisen? A matte ta all skylden alene var dypt ydmykende.',
          },
          {
            id: 'historie-11-4-n-quiz3-q2',
            task: 'Hvordan utnyttet Adolf Hitler bitterheten over Versailles-traktaten?',
            options: [
              { id: 'a', text: 'Han fokuserte hovedsakelig pa den økonomiske krisen og arbeidsledigheten, og brukte Versailles mest som bakgrunn', isCorrect: false },
              { id: 'b', text: 'Han arbeidet gjennom Folkeforbundet for a fa endret de verste vilkarene i traktaten pa fredelig vis', isCorrect: false },
              { id: 'c', text: 'Han lovte a rive opp "Versailles-diktatet", gjenreise Tysklands storhet og straffe dem som hadde "forrådt" landet', isCorrect: true },
              { id: 'd', text: 'Han krevde at de allierte holdt sine egne løfter om nedrustning fra traktaten, og brukte dette som diplomatisk pressmiddel', isCorrect: false },
            ],
            solution: 'Hitler utnyttet bitterheten ved a love a rive opp "Versailles-diktatet", gjenreise Tysklands storhet og straffe de som hadde "forrådt" landet. Kombinasjonen av ydmykelse, dolkestøtlegenden og økonomisk krise skapte grobunn for Hitlers ekstreme budskap.',
          },
        ],
      },
    },
    {
      id: 'historie-11-4-n-section4',
      type: 'text',
      content: `## Folkeforbundet - håpet som sviktet

Midt i alt det negative var det ett lyspunkt: **Folkeforbundet**. President Wilson kjempet hardt for dette, og det ble en del av fredstraktaten.

Folkeforbundet var verdens første forsøk pa en internasjonal organisasjon for å bevare freden. Tanken var enkel og edel: **Kollektiv sikkerhet**. Hvis et land angrep et annet, skulle alle medlemsland stå sammen mot angriperen. Konflikter skulle løses gjennom forhandlinger, ikke krig. Verden skulle nedruste.

Men fra starten hadde Folkeforbundet alvorlige svakheter.

For det forste ble **USA ikke medlem**. Det amerikanske Senatet nektet å ratifisere traktaten. Uten verdens mektigste nasjon var forbundet svekket.

For det andre hadde forbundet **ingen egen militaermakt**. Det kunne vedta sanksjoner og fordømmelser, men kunne ikke tvinge noen til å adlyde. Da Japan invaderte Mandsjuria i 1931 og Italia invaderte Etiopia i 1935, viste det seg at Folkeforbundet var maktesløst mot aggressive stormakter.

For det tredje var **Tyskland og Sovjetunionen** først utenfor. Forbundet representerte seierherrene, ikke hele verden.

Likevel var Folkeforbundet viktig. Det skapte presedens for internasjonal organisering og la grunnlaget for **FN** etter andre verdenskrig. Lærdommene fra Folkeforbundets feil - særlig behovet for stormaktenes deltakelse og reelle maktmidler - preget hvordan FN ble utformet.`,
    },
    {
      id: 'historie-11-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-11-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Folkeforbundet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-4-n-quiz4-q0',
            task: 'Hvorfor mislyktes Folkeforbundet i a bevare freden?',
            options: [
              { id: 'a', text: 'Fordi medlemslandene var uenige om grunnleggende prinsipper som selvbestemmelsesrett og kolonitidens avvikling', isCorrect: false },
              { id: 'b', text: 'Fordi USA ikke ble medlem, forbundet manglet militaermakt, og stormaktene ignorerte det nar det passet dem', isCorrect: true },
              { id: 'c', text: 'Fordi Storbritannia og Frankrike brukte forbundet til a fremme egne interesser i stedet for kollektiv sikkerhet', isCorrect: false },
              { id: 'd', text: 'Fordi forbundet ikke hadde mekanismer for a løse økonomiske konflikter, som var de viktigste arsakene til spenning', isCorrect: false },
            ],
            solution: 'Folkeforbundet mislyktes fordi USA ikke ble medlem, det hadde ingen egen militaermakt, og stormaktene ignorerte det nar de ønsket det -- som da Japan invaderte Mandsjuria og Italia invaderte Etiopia.',
          },
          {
            id: 'historie-11-4-n-quiz4-q1',
            task: 'Hva var prinsippet om "kollektiv sikkerhet" som la til grunn for Folkeforbundet?',
            options: [
              { id: 'a', text: 'At alle land skulle nedruste til et minimumsniva og stole pa diplomati og internasjonal rett i stedet for militaer makt', isCorrect: false },
              { id: 'b', text: 'At stormaktene skulle garantere sikkerheten til mindre nasjoner gjennom bilaterale forsvarsavtaler', isCorrect: false },
              { id: 'c', text: 'At hvis et land angrep et annet, skulle alle medlemsland sta sammen mot angriperen', isCorrect: true },
              { id: 'd', text: 'At konflikter mellom nasjoner skulle løses av en internasjonal domstol med bindende myndighet', isCorrect: false },
            ],
            solution: 'Kollektiv sikkerhet betød at alle medlemsland skulle sta sammen mot en angriper. Tanken var at ingen nasjon ville va a angripe et annet land hvis de visste at hele verden ville motsta dem. Men uten USA og uten militaer makt forble det et ideal uten innhold.',
          },
          {
            id: 'historie-11-4-n-quiz4-q2',
            task: 'Hvorfor ble ikke USA medlem av Folkeforbundet, selv om president Wilson kjempet for det?',
            options: [
              { id: 'a', text: 'Fordi Wilson døde før traktaten ble ferdigforhandlet, og hans etterfølger var mot medlemskap', isCorrect: false },
              { id: 'b', text: 'Fordi det amerikanske Senatet nektet a ratifisere traktaten', isCorrect: true },
              { id: 'c', text: 'Fordi USA krevde vetorett i Folkeforbundet og de andre medlemmene nektet a gi dem det', isCorrect: false },
              { id: 'd', text: 'Fordi det amerikanske Representantenes hus stemte mot a bevilge penger til a finansiere medlemskapet', isCorrect: false },
            ],
            solution: 'Selv om president Wilson hadde kjempet hardt for Folkeforbundet, nektet det amerikanske Senatet a ratifisere traktaten. Uten verdens mektigste nasjon var forbundet alvorlig svekket fra starten.',
          },
          {
            id: 'historie-11-4-n-quiz4-q3',
            task: 'Hvilken organisasjon ble opprettet etter andre verdenskrig basert pa laerdommene fra Folkeforbundets feil?',
            options: [
              { id: 'a', text: 'NATO (Den nordatlantiske forsvarsalliansen)', isCorrect: false },
              { id: 'b', text: 'Det europeiske kull- og stalfelleskapet (forløperen til EU)', isCorrect: false },
              { id: 'c', text: 'FN (De forente nasjoner)', isCorrect: true },
              { id: 'd', text: 'Den internasjonale domstolen i Haag', isCorrect: false },
            ],
            solution: 'FN (De forente nasjoner) ble opprettet etter andre verdenskrig med laerdommene fra Folkeforbundets feil. FN fikk Sikkerhetsradet med vetorett for stormaktene, noe som sikret at de viktigste nasjonene var med. USA, Sovjetunionen og andre stormakter ble medlemmer.',
          },
        ],
      },
    },
    {
      id: 'historie-11-4-n-section5',
      type: 'text',
      content: `## Var en bedre fred mulig?

Historikere har diskutert Versailles-traktaten i over hundre år. Et berømt sitat sier at den var "**for hard til å skape varig fred, men for mild til å hindre tysk revansje**". Er det rettferdig?

La oss se pa alternativene.

En **mildere fred** - uten krigsskyld, med lavere erstatninger - kunne kanskje skapt mindre bitterhet i Tyskland. Men ville seierherrenes befolkninger akseptert det? Frankrike hadde mistet 1,4 millioner menn. De krevde sikkerhet og erstatning. Lloyd George hadde vunnet valg pa løfter om a "presse Tyskland til frøene pip". Folkemeningen var ikke mild.

En **hardere fred** - oppdeling av Tyskland i mindre stater - kunne kanskje hindret at Tyskland ble sterkt nok til ny krig. Men ville det vaert rettferdig? Og ville det vaert mulig å håndheve?

Kanskje var ikke selve freden problemet, men **hvordan den ble håndhevet etterpå**. Pa 1930-tallet, da Hitler begynte å bryte Versailles, grep ikke seierherrene inn. De var krigstrette og håpet at ettergivenhet ville tilfredsstille ham. Det var denne **appeasement-politikken** som tillot Hitler å ruste opp og til slutt starte ny krig.

Den viktigste lærdommen fra Versailles er kanskje denne: **Freder må være både rettferdige nok til å aksepteres og sterke nok til å håndheves.** Versailles var verken det ene eller det andre.`,
    },
    {
      id: 'historie-11-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-11-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa Versailles-traktatens arv og laerdommer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-11-4-n-quiz5-q0',
            task: 'Hvilken laerdom fra Versailles ble brukt etter andre verdenskrig?',
            options: [
              { id: 'a', text: 'At tapende land ma deles opp i mindre stater for a forhindre at de blir sterke nok til a true freden igjen', isCorrect: false },
              { id: 'b', text: 'At ydmykelse skaper bitterhet -- heller gjenoppbygging og integrasjon enn straff', isCorrect: true },
              { id: 'c', text: 'At seierherrene ma okkupere tapende land i lang tid for a sikre at demokrati og fred far fotfeste', isCorrect: false },
              { id: 'd', text: 'At militaere allianser som NATO er viktigere for fredsbygging enn økonomisk samarbeid og gjenoppbygging', isCorrect: false },
            ],
            solution: 'Etter andre verdenskrig laerte man av Versailles feil: I stedet for ydmykelse og straff kom Marshallhjelpen som gjenoppbygde Tyskland. Vest-Tyskland ble integrert i vestlig samarbeid. Fokus var pa forsoning, ikke revansje.',
          },
          {
            id: 'historie-11-4-n-quiz5-q1',
            task: 'Hva menes med at Versailles-traktaten var "for hard til a skape varig fred, men for mild til a hindre tysk revansje"?',
            options: [
              { id: 'a', text: 'At traktaten var for mild fordi den ikke la nok begrensninger pa tysk militaer kapasitet til a forhindre opprustning', isCorrect: false },
              { id: 'b', text: 'At traktaten ydmyket Tyskland nok til a skape bitterhet, men ikke svekket landet nok til a hindre det i a ruste opp igjen', isCorrect: true },
              { id: 'c', text: 'At traktaten var rettferdig, men at den økonomiske krisen pa 1920-tallet underminerte Tysklands evne til a akseptere vilkarene', isCorrect: false },
              { id: 'd', text: 'At traktaten var for hard i sine territorielle krav, men for mild i de militaere begrensningene den la pa Tyskland', isCorrect: false },
            ],
            solution: 'Traktaten skapte enorm bitterhet gjennom krigsskyldsklausulen, territoritap og erstatninger. Men den svekket ikke Tyskland nok til a hindre opprustning. Pa 1930-tallet kunne Hitler bryte vilkarene uten at noen grep inn.',
          },
          {
            id: 'historie-11-4-n-quiz5-q2',
            task: 'Hva var "appeasement-politikken" pa 1930-tallet?',
            options: [
              { id: 'a', text: 'En politikk der Storbritannia og Frankrike forsøkte a bygge nye allianser med Sovjetunionen og USA for a avskrekke Tyskland', isCorrect: false },
              { id: 'b', text: 'En politikk der seierherrene strammet inn Versailles-vilkarene og innførte strengere sanksjoner mot tysk opprustning', isCorrect: false },
              { id: 'c', text: 'En ettergivende politikk der seierherrene lot Hitler bryte Versailles i hapet om at det ville tilfredsstille ham', isCorrect: true },
              { id: 'd', text: 'En politikk der Folkeforbundet forsøkte a megle mellom Tyskland og de allierte for a finne en fredelig løsning pa traktattvistene', isCorrect: false },
            ],
            solution: 'Appeasement-politikken var seierherrenes strategi pa 1930-tallet. De var krigstrette og lot Hitler bryte Versailles -- ruste opp, ta tilbake Rhinland, annektere Osterrike -- i hapet om at ettergivenhet ville tilfredsstille ham. Det gjorde den ikke.',
          },
        ],
      },
    },
    {
      id: 'historie-11-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Forste verdenskrig endte med kolossale ødeleggelser og en fred som sådde kimen til ny krig. Versailles-traktaten ydmyket Tyskland og skapte bitterhet som ekstremister utnyttet. Folkeforbundet var et edelt eksperiment som mislyktes fordi det manglet makt.

**Nøkkelbegreper du nå kjenner:**
- **Våpenhvilen 11. november 1918:** Krigens slutt, klokken 11
- **De fire store:** Wilson, Clemenceau, Lloyd George, Orlando - fredskonferansens ledere
- **Versailles-traktaten:** Fredsavtalen med Tyskland
- **Krigsskyldsklausulen (artikkel 231):** Kravet om at Tyskland aksepterte skylden
- **Diktat:** Tysk betegnelse pa den patvungne traktaten
- **Dolkestøtlegenden:** Myten om at haeren ble forrådt hjemmefra
- **Folkeforbundet:** Første forsøk pa internasjonal fredsorganisasjon
- **Erstatninger:** De enorme summene Tyskland matte betale

**Det viktigste du tar med deg:**
Versailles-traktaten var en advarsel om at fred må vaere bade rettferdig og håndhevbar. Den var hard nok til a skape bitterhet, men ikke sterk nok til a hindre tysk revansje. Kombinasjonen av ydmykelse, økonomisk krise og manglende håndhevelse skapte grobunn for Hitler. Laerdommene ble brukt etter andre verdenskrig - da valgte man gjenoppbygging og integrasjon fremfor straff.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i del 10
// ============================================================================

export const HISTORIE_NARRATIV_DEL10_CHAPTERS = [
  CHAPTER_HISTORIE_11_1_NARRATIV,
  CHAPTER_HISTORIE_11_2_NARRATIV,
  CHAPTER_HISTORIE_11_3_NARRATIV,
  CHAPTER_HISTORIE_11_4_NARRATIV,
];
