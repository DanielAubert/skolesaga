/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - NARRATIV VERSJON DEL 5
 * Kapittel 17-22: Historie — Fra 1900 til i dag (Narrativ versjon)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 17 NARRATIV: Foerste verdenskrig og mellomkrigstiden
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_17_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-17-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '17',
  title: 'Første verdenskrig og mellomkrigstiden',
  subtitle: 'Narrativ versjon',
  description: 'Engasjerende fortelling om hvordan et enkelt attentat utloeste en verdenskrig, og hvordan freden som fulgte bar froeene til nye katastrofer.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for sentrale historiske hendelser og forklare sammenhenger mellom dem'],
  linkedChapterId: 'samfunnsfag-10-17',
  content: [
    {
      id: 'samfunnsfag-10-17-n-intro',
      type: 'text',
      content: `## Et skudd som forandret verden

Forestill deg at du staar paa en gate i Sarajevo den 28. juni 1914. Det er varmt, og menneskene rundt deg venter paa aa faa et glimt av den oesterriksk-ungarske tronfoealgeren Franz Ferdinand. Saa hoerer du to skudd. Erkehertugen og hans kone Sofie synker sammen i bilen. Gjerningsmannen er Gavrilo Princip, en ung serbisk nasjonalist.

Disse to skuddene utloeste en kjedereaksjon som ingen kunne ha forutsett. Innen seks uker var Europas stormakter i krig med hverandre. Men attentatet var bare gnisten -- kruttet hadde ligget klart i aarevis.

**Nasjonalisme** -- den sterke foelelsen av tilhoerighet til ens eget folk -- hadde spredt seg over hele Europa. Paa Balkan kjempet flere folkegrupper for uavhengighet. **Imperialisme** drev stormaktene til aa konkurrere om kolonier i Afrika og Asia. Et vanvittig **vaapenkapploep** gjorde at alle hadde enorme haerer klare. Og saa var det **alliansene**: Europa var delt i to blokker -- Trippelententen (Frankrike, Russland, Storbritannia) og Trippelalliansen (Tyskland, OEsterrike-Ungarn, Italia). Naar ett land gikk til krig, dro det resten med seg.`,
    },
    {
      id: 'samfunnsfag-10-17-n-section1',
      type: 'text',
      content: `## Fire aar i helvete

De unge mennene som marsjerte ut sommeren 1914, trodde de ville vaere hjemme til jul. De tok grundig feil. Paa vestfronten gravde soldatene seg ned i **skyttergraver** -- kilometervis med gjoearmete groper i jorden, fra Nordsjoen til Sveits. Mellom de to frontlinjene laa ingenmannsland, et oeydemark av piggtrad, kratere og doede.

Krigen introduserte ny, fryktinngytende teknologi: **maskingevaer** som meidde ned hundrevis paa minutter, **giftgass** som brente lungene, **stridsvogner** og **fly**. Paa oestfronten var krigen mer bevegende, men like brutal. Millioner av russiske, tyske og oesterrikske soldater falt.

I 1917 skjedde to avgjoerende hendelser. For det foerste trakk Russland seg ut av krigen etter den **russiske revolusjonen**, der tsaren ble styrtet og bolsjevikene under Lenin tok makten. For det andre gikk **USA** inn i krigen paa ententens side, noe som ga de allierte et avgjoerende overtak. I november 1918 var det endelig over. Over 17 millioner mennesker var doede.

**Versaillesfreden** i 1919 ga Tyskland skylden for krigen. Landet maatte betale enorme **krigserstatninger**, gi fra seg landomraader og redusere militaeret drastisk. Mange tyskere opplevde dette som dypt urettferdig. Denne bitterheten skulle faa alvorlige konsekvenser.`,
    },
    {
      id: 'samfunnsfag-10-17-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-17-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa foerste verdenskrig:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-17-n-quiz1-q0',
            task: 'Hva var den utloesende aarsaken til foerste verdenskrig?',
            options: [
              { id: 'a', text: 'Invasjonen av Polen', isCorrect: false },
              { id: 'b', text: 'Attentatet mot erkehertugen Franz Ferdinand i Sarajevo', isCorrect: true },
              { id: 'c', text: 'Senkningen av Lusitania', isCorrect: false },
              { id: 'd', text: 'Den russiske revolusjonen', isCorrect: false },
            ],
            solution: 'Det var attentatet mot erkehertugen Franz Ferdinand i Sarajevo 28. juni 1914 som utloeste kjedereaksjonen av allianseforpliktelser som foerte til krig.',
          },
          {
            id: 'samfunnsfag-10-17-n-quiz1-q1',
            task: 'Hvilke fire underliggende aarsaker pleier vi aa trekke frem for foerste verdenskrig?',
            options: [
              { id: 'a', text: 'Religion, oekonomi, teknologi og geografi', isCorrect: false },
              { id: 'b', text: 'Demokrati, kommunisme, fascisme og liberalisme', isCorrect: false },
              { id: 'c', text: 'Nasjonalisme, imperialisme, militarisme og allianser', isCorrect: true },
              { id: 'd', text: 'Handel, industri, urbanisering og utvandring', isCorrect: false },
            ],
            solution: 'De fire underliggende aarsakene er nasjonalisme, imperialisme, militarisme og allianser -- ofte forkortet NIMA.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-17-n-section2',
      type: 'text',
      content: `## Mellomkrigstiden -- en ustabil fred

Aarene mellom 1918 og 1939 kalles mellomkrigstiden. Det var en tid preget av baade haap og fortvilelse. Paa den ene siden ble **Folkeforbundet** opprettet for aa sikre fred, kvinner fikk stemmerett i flere land, og demokratiet spredte seg. Paa den andre siden skapte oekonomisk krise og politisk uro grobunn for ekstremisme.

I 1929 krasjet boersen i New York, og en global **oekonomisk depresjon** fulgte. Millioner mistet jobben. I Tyskland var situasjonen saerlig desperat: inflasjonen hadde allerede i 1923 vaert saa vill at folk trengte trillebaarer med pengesedler for aa kjoepe broed. Naa kom massearbeidsloesheet paa toppen.

I dette kaoset fant **Adolf Hitler** og det nazistiske partiet (NSDAP) sitt publikum. Hitler lovet arbeid, stolthet og hevn for Versaillesfreden. I 1933 ble han utnevnt til rikskansler, og innen kort tid hadde han gjort Tyskland til et **diktatur**. I Italia hadde **Benito Mussolini** allerede i 1922 innfoert et fascistisk styre. I Sovjetunionen styrte **Josef Stalin** med jernhaand.

Europa stod ved et veiskille. Demokratiet var under press, og krefter som satte nasjon og leder over alt annet, vokste seg sterke. Den skjoere freden fra 1918 var i ferd med aa rakne.`,
    },
    {
      id: 'samfunnsfag-10-17-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-17-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa mellomkrigstiden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-17-n-quiz2-q0',
            task: 'Hvorfor opplevde mange tyskere Versaillesfreden som urettferdig?',
            options: [
              { id: 'a', text: 'Fordi de ikke visste at krigen var over', isCorrect: false },
              { id: 'b', text: 'Fordi Tyskland fikk skylden for krigen og maatte betale enorme erstatninger', isCorrect: true },
              { id: 'c', text: 'Fordi Frankrike tok over hele Tyskland', isCorrect: false },
              { id: 'd', text: 'Fordi Folkeforbundet nektet Tyskland medlemskap for alltid', isCorrect: false },
            ],
            solution: 'Versaillesfreden la skylden for krigen paa Tyskland. Landet maatte betale enorme krigserstatninger, avgi landomraader og redusere militaeret. Mange tyskere opplevde dette som et ydmykende diktat.',
          },
          {
            id: 'samfunnsfag-10-17-n-quiz2-q1',
            task: 'Hva kjennetegnet fascismen og nazismen som vokste frem i mellomkrigstiden?',
            options: [
              { id: 'a', text: 'Fokus paa individuell frihet og menneskerettigheter', isCorrect: false },
              { id: 'b', text: 'Internasjonalt samarbeid og nedrusting', isCorrect: false },
              { id: 'c', text: 'Sterk leder, nasjonalisme og undertrykkelse av politisk opposisjon', isCorrect: true },
              { id: 'd', text: 'Demokratisk sosialisme og fagforeningsrettigheter', isCorrect: false },
            ],
            solution: 'Fascismen og nazismen var preget av en sterk leder, aggressiv nasjonalisme, forakt for demokrati og systematisk undertrykkelse av opposisjon og minoriteter.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-17-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi fulgt veien fra sommeren 1914 til terskelen av en ny verdenskrig. Vi har sett at foerste verdenskrig skyldtes et samspill av **nasjonalisme, imperialisme, militarisme og allianser**, og at attentatet i Sarajevo utloeste kjedereaksjonen.

Krigen var preget av skyttergravskrig, ny teknologi og enorme tap. **Versaillesfreden** ga Tyskland skylden og paafoerte landet harde straffer, noe som skapte bitterhet og uro.

I mellomkrigstiden foerte oekonomisk krise og politisk ustabilitet til fremveksten av **fascisme** i Italia og **nazisme** i Tyskland. Diktaturer vokste frem mens demokratiet vaklet. Det europeiske fredsprosjektet fra 1918 hadde slaat feil -- og en ny, enda mer oedeleggende krig naermet seg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 18 NARRATIV: Andre verdenskrig og Holocaust
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_18_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-18-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '18',
  title: 'Andre verdenskrig og Holocaust',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om historiens mest oedeleggende krig, okkupasjonen av Norge, Holocaust og veien til frigjoeringen.',
  estimatedMinutes: 50,
  competenceGoals: ['gjøre rede for sentrale historiske hendelser og forklare sammenhenger mellom dem'],
  linkedChapterId: 'samfunnsfag-10-18',
  content: [
    {
      id: 'samfunnsfag-10-18-n-intro',
      type: 'text',
      content: `## Da moekretet senket seg over Europa

Den 1. september 1939 rullet tyske stridsvogner inn i Polen. To dager senere erklaerete Storbritannia og Frankrike krig mot Tyskland. Andre verdenskrig var i gang -- en krig som skulle bli den mest oedeleggende i menneskehetens historie.

Hitler hadde i aarene foer krigen systematisk brutt Versaillesfredens bestemmelser. Han gjeninnfoerte verneplikten, militariserte Rhinlandet, annekterte OEsterrike og tok Sudetenland fra Tsjekkoslovakia. Vestmaktene hadde foert en **ettergivelsespolitikk** -- de haapet at Hitler ville vaere fornoyd hvis han bare fikk litt mer. Det var han ikke.

Krigen spredte seg raskt. I loepet av 1940 okkuperte Tyskland Danmark, Norge, Nederland, Belgia og Frankrike. Storbritannia stod alene mot Hitler, med bare Den engelske kanal som beskyttelse. I 1941 utvidet krigen seg ytterligere da Tyskland angrep Sovjetunionen og Japan bombet Pearl Harbor, noe som brakte USA inn i krigen.`,
    },
    {
      id: 'samfunnsfag-10-18-n-section1',
      type: 'text',
      content: `## Norge under okkupasjonen

Den 9. april 1940 vaaknet nordmenn til lyden av tyske fly og skudd. Operasjon Weseruebung var i gang, og innen faa uker var hele Norge under tysk kontroll. Kongen og regjeringen flyktet til Storbritannia, der de ledet motstandskampen i eksil.

De fem aarene under **okkupasjonen** (1940-1945) var en moerk tid. Vidkun **Quisling** og hans parti Nasjonal Samling samarbeidet med tyskerne. Quislings navn ble et internasjonalt synonym for landssvikere. Nordmenn ble utsatt for sensur, rasjonering og kontroll. Aa lytte til radio fra London var forbudt, men mange gjorde det likevel.

Samtidig vokste **motstandsbevegelsen**. Sivil motstand tok mange former: laerere nektet aa undervise nazistisk ideologi, aviser ble trykt i hemmelighet, og folk bar binders paa jakkeslaget som et stille tegn paa motstand. Militaer motstand omfattet sabotasjeaksjoner -- den mest kjente var **tungtvannsaksjonen** paa Vemork, der norske motstandsfolk oedela anlegget som produserte tungtvann til det tyske atomvaapenprogrammet.

Men okkupasjonen hadde ogsaa en moerkere side av samarbeid. Noen nordmenn tjente paa aa samarbeide med tyskerne, og andre lot vaere aa gripe inn naar naboer ble hentet av Gestapo.`,
    },
    {
      id: 'samfunnsfag-10-18-n-section2',
      type: 'text',
      content: `## Holocaust -- et sivilisasjonssammenbrudd

Det moerkeste kapittelet i krigen var **Holocaust** -- det nazistiske folkmordet paa Europas joeder. Nazistenes joedehat bygde paa gammel antisemittisme, men tok det til et helt nytt og uhyrlig nivaa.

Det begynte med diskriminering og utestengelse. **Nuernberglovene** i 1935 fratok joedene borgerrettigheter. Under **Krystallnatten** i 1938 ble joeadiske forretninger, synagoger og hjem angrepet over hele Tyskland. Etter krigsutbruddet ble joedene tvunget inn i **gettoer** -- avlukkede bydeler med elendige forhold.

Fra 1942 ble folkmordet industrialisert. Paa **Wannsee-konferansen** planla nazistene \"den endelige loesningen\" -- systematisk utryddelse av alle joeder i Europa. Millioner ble fraktet med tog til **utryddelsesleirer** som Auschwitz-Birkenau, Treblinka og Sobibor, der de ble drept i gasskamre. Totalt ble omtrent **seks millioner joeder** myrdet, i tillegg til romfolk, funksjonshemmede, homofile og politiske motstandere.

Ogsaa i Norge ble joeder forfulgt. I november 1942 ble 773 norske joeder arrestert og deportert med skipet Donau til Auschwitz. Bare 38 av dem overlevde. Dette er et av de moerkeste kapitlene i norsk historie, og det minner oss om at folkemord kan skje ogsaa i land vi anser som siviliserte.`,
    },
    {
      id: 'samfunnsfag-10-18-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-18-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa andre verdenskrig og Holocaust:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-18-n-quiz1-q0',
            task: 'Hva var tungtvannsaksjonen?',
            options: [
              { id: 'a', text: 'Et norsk angrep paa tyske ubaat-baser', isCorrect: false },
              { id: 'b', text: 'En sabotasjeaksjon mot et anlegg som produserte tungtvann til Tysklands atomvaapenprogram', isCorrect: true },
              { id: 'c', text: 'Flukten til den norske kongen i 1940', isCorrect: false },
              { id: 'd', text: 'En britisk bombing av norske havner', isCorrect: false },
            ],
            solution: 'Tungtvannsaksjonen paa Vemork i 1943 var en sabotasjeaksjon utfoert av norske motstandsfolk. De oedela produksjonen av tungtvann som Tyskland trengte for aa utvikle atomvaapen.',
          },
          {
            id: 'samfunnsfag-10-18-n-quiz1-q1',
            task: 'Omtrent hvor mange joeder ble drept under Holocaust?',
            options: [
              { id: 'a', text: 'Omtrent 600 000', isCorrect: false },
              { id: 'b', text: 'Omtrent 2 millioner', isCorrect: false },
              { id: 'c', text: 'Omtrent 6 millioner', isCorrect: true },
              { id: 'd', text: 'Omtrent 15 millioner', isCorrect: false },
            ],
            solution: 'Under Holocaust ble omtrent seks millioner joeder myrdet av nazistene. I tillegg ble romfolk, funksjonshemmede, homofile og politiske motstandere ogsaa drept.',
          },
          {
            id: 'samfunnsfag-10-18-n-quiz1-q2',
            task: 'Hva skjedde med de 773 norske joedene som ble deportert med Donau i november 1942?',
            options: [
              { id: 'a', text: 'De ble satt i fangenskap i Tyskland og frigitt etter krigen', isCorrect: false },
              { id: 'b', text: 'De ble sendt til Auschwitz, og bare 38 overlevde', isCorrect: true },
              { id: 'c', text: 'De flyktet til Sverige underveis', isCorrect: false },
              { id: 'd', text: 'De ble reddet av norske motstandsfolk', isCorrect: false },
            ],
            solution: 'Av de 773 norske joedene som ble deportert med Donau til Auschwitz, overlevde bare 38. Dette var en del av nazistenes systematiske folkemord ogsaa i Norge.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-18-n-section3',
      type: 'text',
      content: `## Krigens slutt og frigjoeringen

Vendepunktet kom i 1942-1943. Ved **Stalingrad** led den tyske haeren et katastrofalt nederlag mot Sovjetunionen. I Nord-Afrika og Italia presset de allierte frem. Den 6. juni 1944 -- **D-dagen** -- gikk allierte styrker i land i Normandie i Frankrike, og Europa ble sakte frigjort fra vest.

I mai 1945 kapitulerte Tyskland. I Norge kom frigjoeringen den 8. mai, en dato som fortsatt markeres hvert aar. Gleden var enorm, men prisen hadde vaert hoey. Mellom 50 og 80 millioner mennesker hadde mistet livet, og store deler av Europa laa i ruiner.

Etter krigen kom **rettsoppgjoeret**. **Nuernbergprosessen** stilte nazistiske ledere for retten for krigsforbrytelser og forbrytelser mot menneskeheten. I Norge ble over 90 000 nordmenn etterfoerskt for landssvik. Krigen la ogsaa grunnlaget for **FN** (De forente nasjoner) og **Verdens menneskerettighetserklæring** i 1948 -- et felles loefte om at noe slikt aldri skulle skje igjen.`,
    },
    {
      id: 'samfunnsfag-10-18-n-summary',
      type: 'text',
      content: `## Oppsummering

Andre verdenskrig (1939-1945) var den mest oedeleggende konflikten i historien. Hitlers aggressive ekspansjonspolitikk og vestmaktenes ettergivelse foerte til krig. Norge var okkupert i fem aar, med baade motstand og samarbeid.

**Holocaust** -- folkmordet paa seks millioner joeder -- staar som en paaminnelse om hva som kan skje naar hat, fordom og likegyldighet faar fritt spillerom. Ogsaa norske joeder ble rammet.

Krigen endte med Tysklands kapitulasjon i mai 1945. Rettsoppgjoeret ved Nuernberg og opprettelsen av FN var forsoak paa aa bygge en mer rettferdig verden. Men spoersmaalene krigen reiste -- om ansvar, motstand og likegyldighet -- er like aktuelle i dag.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 19 NARRATIV: Den kalde krigen
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_19_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-19-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '19',
  title: 'Den kalde krigen',
  subtitle: 'Narrativ versjon',
  description: 'Historien om da verden ble delt i to og stod paa randen av atomkrig -- fra jernteppets fall til Berlinmurens fall.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for sentrale historiske hendelser og forklare sammenhenger mellom dem'],
  linkedChapterId: 'samfunnsfag-10-19',
  content: [
    {
      id: 'samfunnsfag-10-19-n-intro',
      type: 'text',
      content: `## Da verden ble delt i to

Tenk deg en verden der to supermakter staar mot hverandre med tusenvis av atomvaapen, og hele menneskeheten lever i skyggen av at en feilberegning kan utrydde alt. Det var virkeligheten under **den kalde krigen** (1947-1991).

Etter andre verdenskrig ble seierherrene raskt uenige. **USA** og **Sovjetunionen** hadde kjempet paa samme side mot Hitler, men representerte to helt ulike verdensbilder. USA stod for **kapitalisme**, fritt marked og demokrati. Sovjetunionen stod for **kommunisme**, planoekonomi og ettpartistyre. Mistilliten vokste, og et usynlig **jernteppe** -- som Winston Churchill kalte det -- delte Europa i to: et vestlig og et oestlig blokk.

Krigen ble kalt «kald» fordi supermaktene aldri gikk direkte til krig mot hverandre. Men den var likevel farlig. Vaapenkapploepet, spionasjenn, propagandaen og stedfortrederkrigene gjorde at verden gjentatte ganger svaevde paa randen av katastrofe.`,
    },
    {
      id: 'samfunnsfag-10-19-n-section1',
      type: 'text',
      content: `## Allianser, kriser og vaapenkapploep

For aa beskytte seg mot hverandre dannet de to blokkene militaerae allianser. I 1949 opprettet vestmaktene **NATO** (North Atlantic Treaty Organization), der ogsaa Norge ble medlem. Sovjetunionen svarte i 1955 med **Warszawapakten**, som samlet de oesteuropeiske landene.

Den kalde krigen ble ogsaa en kamp om vitenskap og prestisje. Da Sovjetunionen sendte opp **Sputnik** -- verdens foerste satellitt -- i 1957, sjokkerte det USA. **Romkapploepet** var i gang, og i 1969 vant USA da Neil Armstrong tok de foerste skrittene paa maanen.

Men de farligste oeyeblikkene handlet om atomvaapen. Under **Cubakrisen** i 1962 plasserte Sovjetunionen atomraketter paa Cuba, bare 150 kilometer fra Florida. I tretten dager stod verden naermere atomkrig enn noen gang foer eller etter. President Kennedy og Sovjet-lederen Khrusjtsjov klarte til slutt aa finne en loesning, men krisen viste hvor tynn traaden var.

Konflikten ble ogsaa utkjempet gjennom **stedfortrederkrigene** -- kriger der supermaktene stoettet hver sin side uten aa moete hverandre direkte. Korea-krigen (1950-1953) og Vietnam-krigen (1955-1975) var de mest kjente. Millioner av mennesker i Asia, Afrika og Latin-Amerika betalte prisen for stormaktenes rivalisering.`,
    },
    {
      id: 'samfunnsfag-10-19-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-19-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa den kalde krigen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-19-n-quiz1-q0',
            task: 'Hvorfor ble konflikten kalt «den kalde krigen»?',
            options: [
              { id: 'a', text: 'Fordi den hovedsakelig foregikk i kalde omraader', isCorrect: false },
              { id: 'b', text: 'Fordi supermaktene aldri gikk til direkte krig mot hverandre', isCorrect: true },
              { id: 'c', text: 'Fordi det ikke var noen konflikter i denne perioden', isCorrect: false },
              { id: 'd', text: 'Fordi den varte over vinteren 1947', isCorrect: false },
            ],
            solution: 'Krigen ble kalt «kald» fordi USA og Sovjetunionen aldri kriget direkte mot hverandre, selv om de stod i intens rivalisering gjennom vaapenkapploep, propaganda og stedfortrederkrigere.',
          },
          {
            id: 'samfunnsfag-10-19-n-quiz1-q1',
            task: 'Hva var Cubakrisen?',
            options: [
              { id: 'a', text: 'En borgerkrig paa Cuba mellom kommunister og demokrater', isCorrect: false },
              { id: 'b', text: 'En krise der Sovjetunionen plasserte atomraketter paa Cuba, naer USA', isCorrect: true },
              { id: 'c', text: 'USAs invasjon av Cuba i 1960', isCorrect: false },
              { id: 'd', text: 'En oekonomisk blokade som foerte til hungersnoed paa Cuba', isCorrect: false },
            ],
            solution: 'Under Cubakrisen i 1962 plasserte Sovjetunionen atomraketter paa Cuba, bare 150 km fra Florida. I tretten dager stod verden naermere atomkrig enn noen gang foer.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-19-n-section2',
      type: 'text',
      content: `## Berlinmuren og den kalde krigens slutt

Ingenting symboliserte den kalde krigen bedre enn **Berlinmuren**. I 1961 bygde OEst-Tyskland en mur tvers gjennom Berlin for aa hindre folk i aa flykte til vest. Familier ble splittet over natten. De som proevde aa krysse, risikerte aa bli skutt.

Paa 1980-tallet begynte den kalde krigen aa ta slutt. Sovjetunionens nye leder, **Mikhail Gorbatsjov**, innfoerte reformer: **glasnost** (aapenhet) og **perestrojka** (omstrukturering). Han innroemmet at systemet trengte endring.

Reformene utloeste en boelge av endring i OEst-Europa. Land etter land krevde frihet. Den 9. november 1989 falt **Berlinmuren**. Folk fra begge sider klatret opp paa muren, danset, lo og graet. Det var et av det 20. aarhundrets mest foelelsesladede oeyeblikk.

To aar senere, i 1991, ble **Sovjetunionen opploest**. Den kalde krigen var over. Men sluttresultatet var ikke bare frihet og glede. Mange av de tidligere sovjetstatene opplevde oekonomisk kaos, og nye konflikter oppstod. Verden var ikke lenger delt i to, men den var heller ikke blitt enkel.

For Norges del betydde den kalde krigen at vi var et **NATO-land paa grensen til Sovjetunionen**. Nordomraadene var strategisk viktige, og norsk forsvar var rettet mot oest. Da den kalde krigen tok slutt, endret truselbildet seg dramatisk.`,
    },
    {
      id: 'samfunnsfag-10-19-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-19-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa avslutningen av den kalde krigen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-19-n-quiz2-q0',
            task: 'Hva symboliserte Berlinmuren?',
            options: [
              { id: 'a', text: 'Det europeiske samarbeidet etter krigen', isCorrect: false },
              { id: 'b', text: 'Delingen av Europa i en oestlig og en vestlig blokk', isCorrect: true },
              { id: 'c', text: 'Tysklands militaere styrke', isCorrect: false },
              { id: 'd', text: 'FNs rolle i verdenspolitikken', isCorrect: false },
            ],
            solution: 'Berlinmuren ble bygd i 1961 for aa hindre folk i aa flykte fra OEst-Berlin til Vest-Berlin. Den symboliserte delingen av Europa i to blokker under den kalde krigen.',
          },
          {
            id: 'samfunnsfag-10-19-n-quiz2-q1',
            task: 'Hvem var den sovjetiske lederen som innfoerte glasnost og perestrojka?',
            options: [
              { id: 'a', text: 'Josef Stalin', isCorrect: false },
              { id: 'b', text: 'Nikita Khrusjtsjov', isCorrect: false },
              { id: 'c', text: 'Mikhail Gorbatsjov', isCorrect: true },
              { id: 'd', text: 'Vladimir Lenin', isCorrect: false },
            ],
            solution: 'Mikhail Gorbatsjov innfoerte glasnost (aapenhet) og perestrojka (omstrukturering) paa 1980-tallet. Reformene hans bidro til slutten paa den kalde krigen og opploesningen av Sovjetunionen.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-19-n-summary',
      type: 'text',
      content: `## Oppsummering

Den kalde krigen (1947-1991) delte verden i to blokker: den vestlige, ledet av **USA** og organisert i **NATO**, og den oestlige, ledet av **Sovjetunionen** og samlet i **Warszawapakten**. Konflikten ble utkjempet gjennom vaapenkapploep, romkapploep, propaganda og stedfortrederkrigere.

**Cubakrisen** i 1962 brakte verden naermest atomkrig. **Berlinmuren** symboliserte delingen av Europa. Da muren falt i 1989 og Sovjetunionen ble opploest i 1991, var den kalde krigen over.

For Norge betoed den kalde krigen at vi var et NATO-land paa grensen til Sovjetunionen, med en strategisk viktig beliggenhet i nord. Arven etter den kalde krigen preger fortsatt internasjonal politikk i dag.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 20 NARRATIV: Avkolonisering og den tredje verden
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_20_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-20-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '20',
  title: 'Avkolonisering og den tredje verden',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan koloniene kjempet seg fri fra europeisk herredoemme, og hva arven etter imperialismen betyr i dag.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for sentrale historiske hendelser og forklare sammenhenger mellom dem'],
  linkedChapterId: 'samfunnsfag-10-20',
  content: [
    {
      id: 'samfunnsfag-10-20-n-intro',
      type: 'text',
      content: `## Da verden krevde frihet

I 1945, da andre verdenskrig tok slutt, kontrollerte europeiske makter fortsatt enorme deler av Afrika og Asia. Storbritannia styrte India, Frankrike styrte store deler av Vest-Afrika, og Belgia kontrollerte Kongo. I loepet av de neste tiaarene skulle dette bildet endres dramatisk.

**Avkolonisering** -- prosessen der kolonier ble selvstendige stater -- var en av det 20. aarhundrets stoerste omveltninger. Mellom 1945 og 1975 ble over 80 land uavhengige. Men hvorfor skjedde det akkurat da?

Andre verdenskrig hadde svekket de europeiske kolonimaktene oekonomisk og militaert. Krigen hadde ogsaa vaert en krig mot rasisme og undertrykkelse -- i hvert fall i retorikken. Det ble stadig vanskeligere aa forsvare at europeere skulle styre over andre folk. Samtidig hadde nasjonalistiske bevegelser i koloniene vokst seg sterke, inspirert av idealer om frihet og selvbestemmelse.`,
    },
    {
      id: 'samfunnsfag-10-20-n-section1',
      type: 'text',
      content: `## Veien til frihet -- ulike veier

Avkoloniseringen foreaagikk paa ulike maater. Noen steder var prosessen relativt fredelig, andre steder blodig.

**India** ble uavhengig i 1947 etter en lang kamp ledet av **Mahatma Gandhi**. Gandhi brukte **ikke-voldelig motstand** -- sivil ulydighet, boikott og fredelige demonstrasjoner -- for aa presse britene til aa gi India frihet. Uavhengigheten foerte samtidig til en smertefull deling av landet i India (hindudominert) og Pakistan (muslimsk), med enorm vold og flyktningestromaer.

I Afrika var veien ofte vanskeligere. Noen land, som Ghana under **Kwame Nkrumah** i 1957, oppnaadde uavhengighet gjennom politisk kamp. Andre, som **Algerie**, maatte kjempe en brutal frigjoeringskrig mot Frankrike (1954-1962). I Kongo forlot Belgia landet saa braat i 1960 at det nesten ikke fantes utdannede kongolesere til aa styre.

Soer-Afrika hadde en saeregen historie med **apartheid** -- et system for lovfestet raseskille. Kampen mot apartheid, ledet av **Nelson Mandela** og ANC, varte i tiaar. Mandela satt i fengsel i 27 aar foer han ble frigitt i 1990 og deretter valgt til Soer-Afrikas foerste svarte president i 1994.`,
    },
    {
      id: 'samfunnsfag-10-20-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-20-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa avkoloniseringen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-20-n-quiz1-q0',
            task: 'Hvilken metode brukte Gandhi i kampen for indisk uavhengighet?',
            options: [
              { id: 'a', text: 'Vaepnet revolusjon', isCorrect: false },
              { id: 'b', text: 'Ikke-voldelig motstand og sivil ulydighet', isCorrect: true },
              { id: 'c', text: 'Diplomatisk forhandling uten folkelig mobilisering', isCorrect: false },
              { id: 'd', text: 'Samarbeid med den britiske haeren', isCorrect: false },
            ],
            solution: 'Gandhi brukte ikke-voldelig motstand (sivil ulydighet, boikott, fredelige demonstrasjoner) for aa presse Storbritannia til aa gi India uavhengighet.',
          },
          {
            id: 'samfunnsfag-10-20-n-quiz1-q1',
            task: 'Hva var apartheid?',
            options: [
              { id: 'a', text: 'Et system for oekonomisk utvikling i Afrika', isCorrect: false },
              { id: 'b', text: 'Et system for lovfestet raseskille i Soer-Afrika', isCorrect: true },
              { id: 'c', text: 'En fredsavtale mellom afrikanske land', isCorrect: false },
              { id: 'd', text: 'En internasjonal organisasjon for avkolonisering', isCorrect: false },
            ],
            solution: 'Apartheid var et system for lovfestet raseskille i Soer-Afrika, der den hvite minoriteten kontrollerte politikk, oekonomi og samfunnsliv. Det varte fra 1948 til 1994.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-20-n-section2',
      type: 'text',
      content: `## Arven etter imperialismen -- neokolonialisme

Selv om flaggene ble byttet og nasjonalsangene endret, var avkoloniseringen langt fra fullkommen. Mange av de nye statene arvet **kunstige grenser** trukket av europeere uten hensyn til etniske, spraaklige eller religioeae skillelinjer. Dette skapte indre konflikter som fortsatt preger mange land.

Dessuten fortsatte de gamle kolonimaktene -- og nye aktorer som USA og Sovjetunionen -- aa utnytte de nye statenes ressurser. Dette fenomenet kalles **neokolonialisme**: formell uavhengighet, men reell oekonomisk avhengighet. Mange land i det som ble kalt **den tredje verden** ble fanget i fattigdom, gjeldsfeller og avhengighet av eksport av raa varer.

Under den kalde krigen ble ogsaa mange nye stater brikker i supermaktenes spill. Baade USA og Sovjetunionen stoettet diktatorer saa lenge de var paa «riktig side». Resultatet var korrupte regimer og undertrykkelse i mange land.

I dag ser vi fortsatt konsekvensene av kolonitiden. Oekonomisk ulikhet mellom det globale nord og soer, ressurskonflikter og kulturelle spenninger har roetter i imperialismens tidsalder. Aa forstaa denne historien er avgjoerender for aa forstaa dagens verden.`,
    },
    {
      id: 'samfunnsfag-10-20-n-summary',
      type: 'text',
      content: `## Oppsummering

**Avkoloniseringen** etter 1945 foerte til at over 80 land ble uavhengige. Prosessen foreaagikk paa ulike maater -- fra Gandhis ikke-voldelige motstand i India til blodige frigjoeringskrigere i Algerie.

Arven etter imperialismen er kompleks. **Kunstige grenser**, oekonomisk utbytting og **neokolonialisme** har skapt vedvarende utfordringer. Under den kalde krigen ble mange nye stater brikker i supermaktenes rivalisering.

Aa forstaa avkoloniseringen er noedvendig for aa forstaa hvorfor verden ser ut som den gjoer i dag -- med sine ulikheter, konflikter og spenninger mellom det globale nord og soer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 21 NARRATIV: Norge etter 1945
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_21_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-21-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '21',
  title: 'Norge etter 1945',
  subtitle: 'Narrativ versjon',
  description: 'Fortellingen om hvordan Norge gikk fra krigsskadet land til et av verdens rikeste samfunn -- gjennom gjenreisning, oljefunn og velferdsstat.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for sentrale historiske hendelser og forklare sammenhenger mellom dem'],
  linkedChapterId: 'samfunnsfag-10-21',
  content: [
    {
      id: 'samfunnsfag-10-21-n-intro',
      type: 'text',
      content: `## Fra ruiner til rikdom

I mai 1945 var Norge fritt, men skadet. Finnmark og Nord-Troms var brent ned til grunnen av den tyske haeren under tilbaketrekningen. Hele landet bar preg av fem aars okkupasjon. Veier, broer og jernbaner var oedelagte, og mange nordmenn hadde mistet alt.

Men det som skjedde i tiaarene som fulgte, er en av de mest bemerkelsesverdige historiene i nyere tid. Norge gikk fra aa vaere et fattig, krigsskadet land til aa bli et av verdens rikeste og mest velfungerende samfunn. Hvordan var det mulig?

Svaret ligger i en kombinasjon av **gjenreisning, velferdsstatsbygging, oljefunn** og en saeregen norsk modell for samarbeid mellom stat, arbeidsgivere og arbeidstakere. La oss foelge denne reisen.`,
    },
    {
      id: 'samfunnsfag-10-21-n-section1',
      type: 'text',
      content: `## Gjenreisningen og velferdsstatens foeadsel

De foerste aarene etter krigen var preget av felles innsats. Nordmenn stod sammen om aa bygge landet paa nytt. **Marshallhjelpen** fra USA ga oekonomisk stoette, men den viktigste drivkraften var nordmenn selv. Finnmark ble gjenreist, industrien ble modernisert, og infrastrukturen ble bygd opp.

Samtidig la politikerne grunnlaget for **velferdsstaten**. Ideen var enkel men revolusjonaer: alle borgere skulle ha rett til grunnleggende trygghet, uavhengig av bakgrunn eller inntekt. **Folketrygden**, innfoert i 1967, ble hjoearesteinen. Den ga alle rett til alderspensjon, sykepenger, foedselspermisjon og arbeidsloeshetstrygd.

Gratisutdanning, offentlige sykehus, barnetrygd og sosiale boligprogrammer ble bygd ut. Norge gikk fra et samfunn med store klaseforskjeller til et av verdens mest likestilte land. Det var ikke et prosjekt for ett parti -- baade Arbeiderpartiet og de borgerlige partiene bidro til aa bygge velferdsstaten.`,
    },
    {
      id: 'samfunnsfag-10-21-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-21-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa gjenreisningen og velferdsstaten:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-21-n-quiz1-q0',
            task: 'Hva var Marshallhjelpen?',
            options: [
              { id: 'a', text: 'Militaer stoette fra NATO til norsk forsvar', isCorrect: false },
              { id: 'b', text: 'OEkonomisk stoette fra USA til europeisk gjenreisning etter krigen', isCorrect: true },
              { id: 'c', text: 'Et laaneprogram fra den norske staten til bonder', isCorrect: false },
              { id: 'd', text: 'Et FN-program for flyktninger', isCorrect: false },
            ],
            solution: 'Marshallhjelpen var et amerikansk oekonomisk hjelpsprogram for europeiske land etter andre verdenskrig. Norge mottok betydelig stoette som bidro til gjenreisningen.',
          },
          {
            id: 'samfunnsfag-10-21-n-quiz1-q1',
            task: 'Hva er Folketrygden?',
            options: [
              { id: 'a', text: 'En privat forsikringsordning for de rikeste', isCorrect: false },
              { id: 'b', text: 'En ordning som gir alle borgere rett til pensjon, sykepenger og andre ytelser', isCorrect: true },
              { id: 'c', text: 'Et statlig laanefond for studenter', isCorrect: false },
              { id: 'd', text: 'En forsikring kun for statsansatte', isCorrect: false },
            ],
            solution: 'Folketrygden, innfoert i 1967, er hjoerensteinen i den norske velferdsstaten. Den gir alle borgere rett til alderspensjon, sykepenger, foedselspermisjon og andre ytelser.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-21-n-section2',
      type: 'text',
      content: `## Oljen, EU-debattene og det moderne Norge

Paa julaften 1969 ble det gjort et funn som skulle forandre Norge for alltid. Oljeselskapet Phillips fant olje paa **Ekofisk**-feltet i Nordsjoen. Da foelgte tiaar med oljeboom. Norge ble en av verdens stoerste oljenasjoner, og rikdommen forvandlet landet.

Men politikerne tok en klok beslutning: i stedet for aa bruke alt med en gang, opprettet de **Oljefondet** (i dag Statens pensjonsfond utland) i 1990. Ideen var aa spare oljeinntektene for fremtidige generasjoner. I dag er fondet verdens stoerste statlige investeringsfond, verdt over 15 000 milliarder kroner.

En av de stoerste politiske debattene i etterkrigstiden var spoersmaalet om **EU-medlemskap**. Nordmenn stemte nei til EF i **1972** og nei til EU i **1994**. Begge folkeavstemningene var intense og splittende. Motstanderne fryktet tap av suverenitet, saerlig over fiskeri og landbruk. Tilhengerne mente at Norge trengte aa vaere en del av det europeiske fellesskapet. I stedet ble Norge tilknyttet EU gjennom **EOeS-avtalen**, som gir tilgang til det indre markedet uten fullt medlemskap.

Det moderne Norge er preget av innvandring og kulturelt mangfold, teknologisk utvikling, klimadebatt og et stadig sterkere fokus paa likestilling. Fra et land med knapt fire millioner innbyggere i 1945 har Norge vokst til over fem millioner, med mennesker fra hele verden som kaller Norge hjem.`,
    },
    {
      id: 'samfunnsfag-10-21-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-21-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa oljen og EU-debattene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-21-n-quiz2-q0',
            task: 'Hva er Oljefondet (Statens pensjonsfond utland)?',
            options: [
              { id: 'a', text: 'Et fond som finansierer oljeutvinning i Nordsjoen', isCorrect: false },
              { id: 'b', text: 'Et fond der norske oljeinntekter spares og investeres for fremtidige generasjoner', isCorrect: true },
              { id: 'c', text: 'Et privat fond eid av oljeselskapene', isCorrect: false },
              { id: 'd', text: 'Et fond som gir laan til oljearbeidere', isCorrect: false },
            ],
            solution: 'Oljefondet (Statens pensjonsfond utland) ble opprettet i 1990 for aa spare norske oljeinntekter for fremtidige generasjoner. Det er i dag verdens stoerste statlige investeringsfond.',
          },
          {
            id: 'samfunnsfag-10-21-n-quiz2-q1',
            task: 'Naar stemte Norge nei til EU-medlemskap?',
            options: [
              { id: 'a', text: '1970 og 1990', isCorrect: false },
              { id: 'b', text: '1972 og 1994', isCorrect: true },
              { id: 'c', text: '1986 og 2000', isCorrect: false },
              { id: 'd', text: 'Norge har aldri hatt folkeavstemning om EU', isCorrect: false },
            ],
            solution: 'Norge stemte nei til EF-medlemskap i 1972 og nei til EU-medlemskap i 1994. I stedet er Norge tilknyttet EU gjennom EOeS-avtalen.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-21-n-summary',
      type: 'text',
      content: `## Oppsummering

Norges reise etter 1945 er en historie om **gjenreisning, velferdsstat og oljerikdom**. Fra et krigsskadet land bygde nordmenn et av verdens mest velfungerende samfunn, med **Folketrygden** som baerebjelke.

Oljefunnet paa Ekofisk i 1969 ga enorm rikdom, og opprettelsen av **Oljefondet** sikret at verdiene ble spart for fremtiden. Norge sa nei til EU-medlemskap i **1972 og 1994**, men er tilknyttet gjennom EOeS-avtalen.

Det moderne Norge er preget av mangfold, velstand og debatt om fremtiden -- fra klima og innvandring til spoersmaalet om hvordan vi skal forvalte rikdommen videre.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 22 NARRATIV: Terrorisme og sikkerhet
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_22_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-22-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '22',
  title: 'Terrorisme og sikkerhet',
  subtitle: 'Narrativ versjon',
  description: 'En balansert og varsam gjennomgang av terrorisme som fenomen, med saerlig vekt paa 22. juli, radikalisering og sikkerhetspolitikk.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for sentrale historiske hendelser og forklare sammenhenger mellom dem'],
  linkedChapterId: 'samfunnsfag-10-22',
  content: [
    {
      id: 'samfunnsfag-10-22-n-intro',
      type: 'text',
      content: `## Naar det utenkelige skjer

Noen hendelser forandrer et samfunn for alltid. For USA var det 11. september 2001. For Norge var det **22. juli 2011**. Disse dagene minner oss om at vold kan ramme ogsaa der vi foeler oss trygge, og de tvinger oss til aa tenke paa vanskelige spoersmaal: Hva driver mennesker til aa begaa slike handlinger? Hvordan beskytter vi oss uten aa miste friheten? Og hvordan gaar vi videre som samfunn?

**Terrorisme** er bruk av vold eller trusler om vold for aa skape frykt og oppnaa politiske, religioeae eller ideologiske maal. Det som skiller terrorisme fra annen vold, er at den retter seg mot tilfeldige, uskyldige mennesker for aa sende et budskap. Terroren rammer ikke bare ofrene direkte -- den er ment aa skremme hele samfunn.

Det er viktig aa understreke at terrorisme kommer i mange former. Den kan vaere motivert av hoeyreekstremisme, islamistisk ekstremisme, venstreekstremisme eller andre ideologier. Ingen religion, nasjon eller folkegruppe «eier» terrorismen -- det er en metode som brukes av ulike grupper med ulike maal.`,
    },
    {
      id: 'samfunnsfag-10-22-n-section1',
      type: 'text',
      content: `## 22. juli 2011 -- Norges moerkeste dag

Den 22. juli 2011 ble Norge rammet av det verste terrorangrepet i landets moderne historie. En norsk hoeyreekstrem mann detonerte foerst en bombe i Regjeringskvartalet i Oslo, der aatte mennesker ble drept. Deretter tok han seg til AUFs sommerleir paa Utoeya, der han drepte 69 mennesker, de fleste av dem ungdommer.

Angrepet var motivert av hat mot det flerkulturelle samfunnet og politisk radikalisering over tid. Gjerningsmannen hadde gradvis beveget seg mot stadig mer ekstreme holdninger, mye av det forstrerket gjennom aktivitet i nettmiljoeer.

Reaksjonen i Norge var preget av sorg, men ogsaa av samhold. Statsminister Jens Stoltenberg sa de beroemte ordene: «Vaart svar er mer demokrati, mer aapenhet, og mer menneskelighet.» Rosetog med hundretusenvis av deltakere over hele landet viste en nasjon som valgte kjaeralighet fremfor hat.

Samtidig reiste 22. juli viktige spoersmaal. Beredskapen hadde sviktet -- politiets respons tok for lang tid. Gjoeningsmannen hadde operert alene, noe som gjorde det vanskelig for sikkerhetsrjenestene aa oppdage ham. Rapporten fra 22. juli-kommisjonen i 2012 avdekket alvorlige svakheter i beredskapen og foerte til omfattende endringer i politi og sikkerhetstjenester.`,
    },
    {
      id: 'samfunnsfag-10-22-n-section2',
      type: 'text',
      content: `## Radikalisering -- hvordan det skjer

Hvordan kan et menneske komme til det punktet at det er villig til aa drepe uskyldige for en sak? Prosessen kalles **radikalisering**, og den foelger ofte et moenster.

Det begynner gjerne med at noen foeler seg utenfor -- kanskje de opplever urettferdighet, ensomhet eller manglende tilhoerighet. Saa finner de et miljoee, ofte paa nett, der deres frustrasjon faar naering. En forenklet verdensforståaelse blir presentert: «vi mot dem». Fienden er tydelig, og loesningen er vold.

Radikalisering kan foereagaa innenfor mange ideologier. Hoeyreekstreme miljoeer lokker med myter om kulturell renhet og trusselen fra «de andre». Islamistiske ekstremister lokker med en forenklet religion og loefte om mening og tilhoerighet. Felles for dem er at de tilbyr enkle svar paa komplekse spoersmaal.

Forebygging av radikalisering handler om aa gripe inn tidlig. Det betyr aa vaere oppmerksom paa faresignaler, skape tilhoerighet og mestring, og tilby alternativer til de som er paa vei inn i ekstreme miljoeer. I Norge arbeider blant annet PST (Politiets sikkerhetstjeneste), kommunale forebyggingsteam og frivillige organisasjoner med dette.`,
    },
    {
      id: 'samfunnsfag-10-22-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-22-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa terrorisme og sikkerhet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-22-n-quiz1-q0',
            task: 'Hva skiller terrorisme fra annen type vold?',
            options: [
              { id: 'a', text: 'Terrorisme er alltid religioes motivert', isCorrect: false },
              { id: 'b', text: 'Terrorisme retter seg mot uskyldige for aa skape frykt og oppnaa politiske maal', isCorrect: true },
              { id: 'c', text: 'Terrorisme utfoeres alltid av grupper, aldri enkeltpersoner', isCorrect: false },
              { id: 'd', text: 'Terrorisme skjer bare i krig', isCorrect: false },
            ],
            solution: 'Terrorisme skiller seg fra annen vold ved at den retter seg mot tilfeldige, uskyldige mennesker for aa skape frykt og oppnaa politiske, religioeae eller ideologiske maal.',
          },
          {
            id: 'samfunnsfag-10-22-n-quiz1-q1',
            task: 'Hva er radikalisering?',
            options: [
              { id: 'a', text: 'En prosess der noen gradvis utvikler ekstreme holdninger som kan foere til vold', isCorrect: true },
              { id: 'b', text: 'Det aa stemme paa et radikalt politisk parti', isCorrect: false },
              { id: 'c', text: 'En form for militaer trening', isCorrect: false },
              { id: 'd', text: 'Det aa flytte til et annet land', isCorrect: false },
            ],
            solution: 'Radikalisering er en prosess der en person gradvis utvikler stadig mer ekstreme holdninger, som i ytterste konsekvens kan foere til aksept for og bruk av vold.',
          },
          {
            id: 'samfunnsfag-10-22-n-quiz1-q2',
            task: 'Hva var Norges svar paa terrorangrepet 22. juli?',
            options: [
              { id: 'a', text: 'Innfoering av unntakstilstand og militaer opprusting', isCorrect: false },
              { id: 'b', text: 'Mer demokrati, mer aapenhet og mer menneskelighet', isCorrect: true },
              { id: 'c', text: 'Stengning av landets grenser', isCorrect: false },
              { id: 'd', text: 'Forbud mot alle ekstreme organisasjoner', isCorrect: false },
            ],
            solution: 'Norges offisielle svar var «mer demokrati, mer aapenhet og mer menneskelighet», uttrykt av statsminister Stoltenberg. Rosetogene viste et samfunn som valgte samhold fremfor frykt.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-22-n-section3',
      type: 'text',
      content: `## Sikkerhetspolitikk -- balansen mellom trygghet og frihet

Etter store terrorangrep oppstaar det gjerne krav om strengere sikkerhetstiltak. Mer overvaaking, mer politi, strengere grensekontroll. Men dette reiser et viktig dilemma: **hvor mye frihet er vi villige til aa gi opp for trygghet?**

Etter 11. september 2001 innfoerte USA omfattende overvaakingsprogrammer, og mange land fulgte etter. I Norge har debatten handlet om blant annet datalagring, PSTs overvaakningsmuligheter og bruk av skjulte tvangsmidler.

Norsk **sikkerhetspolitikk** bygger paa flere soeyer. Vi er medlem av **NATO**, som gir kollektiv sikkerhet -- et angrep paa ett medlemsland regnes som et angrep paa alle. Vi har et nasjonalt **forsvar** og en **sikkerhetstjeneste** (PST) som arbeider med aa avdekke trusler. Og vi har et **sivilt beredskapsapparat** som skal haandtere kriser.

Men den viktigste forsvarslinjen mot terrorisme er kanskje det samfunnet vi bygger til daglig. Et inkluderende samfunn med lav ulikhet, gode velferdsordninger og reelle muligheter for alle gir mindre grobunn for radikalisering. Forebygging handler ikke bare om politi og etterretning -- det handler om at alle skal foele seg sett, inkludert og verdifulle.`,
    },
    {
      id: 'samfunnsfag-10-22-n-summary',
      type: 'text',
      content: `## Oppsummering

**Terrorisme** er bruk av vold mot uskyldige for aa skape frykt og oppnaa politiske maal. Den kan vaere motivert av ulike ideologier og kommer i mange former.

**22. juli 2011** var Norges moerkeste dag. Angrepet drepte 77 mennesker og avdekket beredskapssvikt, men Norges svar var mer demokrati og aapenhet. **Radikalisering** -- prosessen der noen utvikler ekstreme holdninger -- forebygges best gjennom tidlig innsats, tilhoerighet og inkludering.

Sikkerhetspolitikk handler om balansen mellom trygghet og frihet. Norge stoetter seg paa **NATO**, et nasjonalt forsvar og sikkerhetstjenester, men den viktigste forebyggingen er et inkluderende og rettferdig samfunn.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for Del 5 Narrativ
// ============================================================================

export const SAMFUNNSFAG_10_NARRATIV_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSFAG_10_17_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_18_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_19_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_20_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_21_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_22_NARRATIV,
];
