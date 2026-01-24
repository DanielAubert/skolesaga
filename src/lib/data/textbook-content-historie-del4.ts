/**
 * Tekstbok innhold for Historie DEL 4: Kapittel 13-17
 * Andre verdenskrig, kald krig, velferdsstat, identitet og samtidshistorie
 *
 * Dekker LK20 kompetansemål for VG2 og VG3.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 13: Andre verdenskrig og Holocaust
// ============================================================================

export const CHAPTER_HISTORIE_13_1: TextbookChapter = {
  id: 'historie-13-1',
  courseId: 'historie',
  chapterNumber: '13.1',
  title: 'Årsaker og krigens gang',
  description: 'Krigens faser fra 1939 til 1945.',
  estimatedMinutes: 55,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  content: [
    {
      id: 'historie-13-1-intro',
      type: 'text',
      content: `## Andre verdenskrig (1939-1945)

Andre verdenskrig var den mest ødeleggende konflikten i menneskehetens historie. Mellom 70 og 85 millioner mennesker mistet livet, og store deler av Europa og Asia lå i ruiner da krigen var over. Krigen markerte et vendepunkt i verdenshistorien og la grunnlaget for den verden vi lever i i dag.

Krigen hadde dype røtter i fredsslutningen etter første verdenskrig, den økonomiske krisen på 1930-tallet, og fremveksten av totalitære ideologier som fascisme og nazisme. Den startet i Europa i september 1939 og spredte seg til å bli en global konflikt som involverte nesten alle verdens nasjoner.`,
    },
    {
      id: 'historie-13-1-def-1',
      type: 'definition',
      title: 'Versailles-traktaten',
      content: `**Versailles-traktaten** (1919) var fredsavtalen som avsluttet første verdenskrig. Tyskland ble pålagt:
- Å akseptere skylden for krigen (krigskyldparagrafen)
- Å betale enorme krigserstatninger
- Å avstå territorier (Alsace-Lorraine, polsk korridor)
- Å begrense militæret til 100 000 mann
- Forbud mot å ha flyvåpen og ubåter

Traktaten skapte dyp bitterhet i Tyskland og ble utnyttet av nazistene.`,
    },
    {
      id: 'historie-13-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-13-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan Versailles-traktaten bidro til fremveksten av nazismen i Tyskland.',
        solution: 'Versailles-traktaten skapte dyp bitterhet i Tyskland. Krigskyldparagrafen ble opplevd som urettferdig, og de enorme krigserstatningene førte til økonomisk krise. Nazistene utnyttet denne misnøyen ved å love å rive i stykker traktaten og gjenreise Tysklands storhet. Mange tyskere støttet Hitler fordi han lovte å fjerne "Versailles-skammen".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-1-def-2',
      type: 'definition',
      title: 'Appeasement-politikken',
      content: `**Appeasement** (ettergivenhetspolitikk) var Storbritannias og Frankrikes strategi på 1930-tallet for å unngå krig ved å gi etter for Hitlers krav.

Eksempler på appeasement:
- **1936:** Ingen reaksjon da Tyskland remilitariserte Rhinland
- **1938:** München-avtalen - Hitler fikk annektere Sudetenland
- **1939:** Ingen militær hjelp da Tyskland tok resten av Tsjekkoslovakia

Politikken mislyktes fordi Hitler aldri var fornøyd og fortsatte ekspansjonen.`,
    },
    {
      id: 'historie-13-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-13-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor valgte Storbritannia og Frankrike appeasement-politikken? Vurder om dette var en forståelig strategi gitt tiden de levde i.',
        solution: 'Storbritannia og Frankrike valgte appeasement fordi: 1) Minnene fra første verdenskrig var ferske - de ville unngå en ny blodig krig. 2) De var militært svake og trengte tid til opprustning. 3) Mange mente Versailles-traktaten hadde vært for hard og at Tysklands krav var rimelige. 4) Frykten for kommunismen gjorde at noen så Hitler som en buffer mot Sovjet. Strategien var forståelig i samtiden, men viste seg katastrofal fordi den bare gav Hitler tid til å bli sterkere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-1-text-2',
      type: 'text',
      content: `## Krigens utbrudd og første fase (1939-1941)

**1. september 1939** angrep Tyskland Polen. To dager senere erklærte Storbritannia og Frankrike krig mot Tyskland. Andre verdenskrig hadde begynt.

### Blitzkrig
Tyskland brukte en ny krigføringsstrategi kalt **blitzkrig** (lynkrig). Denne kombinerte:
- Massive flyangrep for å ødelegge fiendens luftvåpen
- Raske panserangrep som brøt gjennom fiendens linjer
- Motorisert infanteri som fulgte opp gjennombruddene

Med blitzkrig erobret Tyskland Polen på fem uker, Danmark og Norge i april 1940, og Frankrike på seks uker i mai-juni 1940.`,
    },
    {
      id: 'historie-13-1-def-3',
      type: 'definition',
      title: 'Total krig',
      content: `**Total krig** er en konflikt der hele samfunnet mobiliseres for krigsinnsatsen. Dette innebærer:
- Hele økonomien omstilles til krigsproduksjon
- Sivilbefolkningen er mål for angrep (bombing av byer)
- Ideologisk mobilisering og propaganda
- Ingen forskjell mellom front og hjemmefront

Andre verdenskrig var historiens mest totale krig. Sivile tap utgjorde over halvparten av alle dødsfall.`,
    },
    {
      id: 'historie-13-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-13-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi eksempler på hvordan andre verdenskrig var en "total krig" og forklar hvorfor sivile tap ble så omfattende.',
        solution: 'Andre verdenskrig var total krig fordi: 1) Økonomien ble omstilt - fabrikker produserte våpen i stedet for forbruksvarer. 2) Sivilbefolkningen ble angrepet direkte gjennom bombing av byer (London Blitz, Dresden, Hiroshima). 3) Alle ressurser ble mobilisert - kvinner overtok menns arbeidsplasser. 4) Propaganda mobiliserte befolkningen ideologisk. Sivile tap ble massive fordi: strategisk bombing målrettet industri i byer, Holocaust utryddet millioner, og okkupasjonspolitikk førte til sult og henrettelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-1-text-3',
      type: 'text',
      content: `## Vendepunkter (1941-1943)

### Operasjon Barbarossa (juni 1941)
Hitler brøt ikke-angrepspakten med Stalin og invaderte Sovjetunionen. Dette var et strategisk vendepunkt fordi Tyskland nå måtte kjempe på to fronter.

### Pearl Harbor (desember 1941)
Japans angrep på den amerikanske flåtebasen Pearl Harbor førte USA inn i krigen. Med USAs enorme industrielle kapasitet og befolkning ble akseemaktenes nederlag bare et spørsmål om tid.

### Stalingrad (1942-1943)
Den tyske 6. armé ble omringet og tilintetgjort ved Stalingrad. Dette var det psykologiske vendepunktet - Tysklands første store nederlag viste at de kunne beseires.`,
    },
    {
      id: 'historie-13-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-13-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hvorfor 1941 regnes som et avgjørende år i andre verdenskrig. Hvilke hendelser dette året endret krigens gang?',
        solution: '1941 var avgjørende fordi to hendelser endret krigens karakter fundamentalt: 1) Operasjon Barbarossa (juni) åpnet østfronten. Hitler undervurderte Sovjet, og tofrontskrigen tappet Tysklands ressurser. Den brutale okkupasjonen mobiliserte sovjet-befolkningen til motstand. 2) Pearl Harbor (desember) brakte USA inn i krigen. Amerikas enorme industri og befolkning tippet maktbalansen mot aksemaktene. Begge hendelsene utvidet krigen fra en europeisk til en virkelig global konflikt og sikret at aksemaktene til slutt ville tape mot de alliertes overlegne ressurser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-1-text-4',
      type: 'text',
      content: `## Krigens slutt (1944-1945)

### D-dagen (6. juni 1944)
De allierte landsatte styrker i Normandie, Frankrike. Dette åpnet en vestfront som tvang Tyskland til å kjempe på tre fronter (øst, vest og Italia).

### Tysklands kapitulasjon (8. mai 1945)
Sovjetiske styrker inntok Berlin. Hitler begikk selvmord 30. april, og Tyskland kapitulerte betingelsesløst 8. mai 1945.

### Japans kapitulasjon (15. august 1945)
Etter atombombene over Hiroshima og Nagasaki kapitulerte Japan. Andre verdenskrig var over.`,
    },
    {
      id: 'historie-13-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-13-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft de ulike årsakene til andre verdenskrig. Hvilke faktorer mener du var viktigst?',
        solution: 'Årsakene til andre verdenskrig var sammensatte: 1) Versailles-traktaten skapte bitterhet og revansjelyst i Tyskland. 2) Den økonomiske depresjonen på 1930-tallet destabiliserte demokratier og styrket ekstreme bevegelser. 3) Fremveksten av nazismen med Hitlers aggressive ekspansjonspolitikk. 4) Appeasement-politikken som ikke stanset Hitler tidlig nok. 5) Svakheter ved Folkeforbundet som ikke kunne håndheve internasjonal orden. De viktigste faktorene var trolig kombinasjonen av Versailles-traktatens urettferdighet, økonomisk krise som radikaliserte befolkningen, og appeasement som gav Hitler mulighet til å bli sterk nok til å starte krig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_13_2: TextbookChapter = {
  id: 'historie-13-2',
  courseId: 'historie',
  chapterNumber: '13.2',
  title: 'Holocaust og folkemord',
  description: 'Det systematiske folkemordet på jødene.',
  estimatedMinutes: 60,
  competenceGoals: ['ideologier, undertrykkelse, terror og Holocaust'],
  content: [
    {
      id: 'historie-13-2-intro',
      type: 'text',
      content: `## Holocaust - Det systematiske folkemordet

Holocaust, også kalt Shoah (hebraisk for "katastrofe"), var nazistenes systematiske forsøk på å utrydde alle jøder i Europa. Mellom 1941 og 1945 ble omkring seks millioner jøder myrdet - omtrent to tredjedeler av Europas jødiske befolkning.

Holocaust representerer et sivilisasjonsbrudd - et industrialisert massemord gjennomført av en moderne stat med bruk av byråkrati, teknologi og ideologi. Det er viktig å forstå hvordan dette kunne skje, for å hindre at noe lignende skjer igjen.`,
    },
    {
      id: 'historie-13-2-def-1',
      type: 'definition',
      title: 'Antisemittisme',
      content: `**Antisemittisme** er hat mot og diskriminering av jøder. Antisemittismen har røtter tilbake til middelalderen og tok ulike former:

- **Religiøs antisemittisme:** Jøder ble beskyldt for å ha drept Jesus
- **Økonomisk antisemittisme:** Fordommer om jøder og penger/makt
- **Rasistisk antisemittisme:** Nazistenes ide om jøder som en "mindreverdig rase"

Nazistenes antisemittisme var rasistisk - de mente jøder var biologisk underlegne og en trussel mot den "ariske rasen".`,
    },
    {
      id: 'historie-13-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-13-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom religiøs og rasistisk antisemittisme. Hvorfor var den rasistiske formen mer farlig?',
        solution: 'Religiøs antisemittisme var basert på religion - jøder kunne teoretisk unnslippe forfølgelse ved å konvertere til kristendommen. Rasistisk antisemittisme var basert på biologi - nazistene mente jødiskhet var nedarvede egenskaper som ikke kunne endres. Dette var farligere fordi det ikke fantes noen utvei. Selv jøder som hadde konvertert for generasjoner siden, eller som ikke praktiserte jødedommen, ble definert som jøder og drept. Den rasistiske antisemittismen la grunnlaget for et program for total utryddelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-2-text-2',
      type: 'text',
      content: `## Trinnvis radikalisering

Holocaust skjedde ikke over natten. Forfølgelsen ble gradvis trappet opp:

### 1933-1938: Diskriminering
- Nürnberglovene (1935) fratok jøder statsborgerskap
- Jøder ble utestengt fra yrker og offentlige steder
- Krystallnatten (1938): Organisert vold mot jøder, synagoger brent

### 1939-1941: Konsentrasjon
- Jøder ble tvangsflyttet til gettoer
- Warszawas getto hadde 400 000 mennesker på et lite område
- Sult og sykdom tok mange liv

### 1941-1945: Utryddelse
- "Den endelige løsning" ble vedtatt
- Utryddelsesleirer ble bygget (Auschwitz, Treblinka, Sobibor)
- Industrialisert massedrap i gasskamre`,
    },
    {
      id: 'historie-13-2-def-2',
      type: 'definition',
      title: 'Wannsee-konferansen',
      content: `**Wannsee-konferansen** (20. januar 1942) var et møte der høytstående nazister koordinerte gjennomføringen av "den endelige løsning på det jødiske spørsmålet".

Konferansen:
- Ble ledet av Reinhard Heydrich
- Samlet 15 høytstående embetsmenn
- Koordinerte deportasjoner fra alle okkuperte land
- Varte bare 90 minutter

Konferansen viser hvordan folkemordet ble planlagt byråkratisk og systematisk.`,
    },
    {
      id: 'historie-13-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-13-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv de ulike fasene i jødeforfølgelsen fra 1933 til 1945. Hvordan ble forfølgelsen gradvis mer ekstrem?',
        solution: 'Fase 1 (1933-38): Diskriminering - Jøder ble fratatt rettigheter, utestengt fra yrker og offentlige steder. Nürnberglovene definerte jøder juridisk og forbød ekteskap med "ariere". Krystallnatten var organisert vold. Fase 2 (1939-41): Konsentrasjon - Jøder ble tvangsflyttet til gettoer i okkuperte områder. Der levde de under forferdelige forhold med sult og sykdom. Fase 3 (1941-45): Utryddelse - "Den endelige løsning" betydde systematisk mord. Innsatsgrupper skjøt jøder i øst, og utryddelsesleirer med gasskamre ble bygget. Radikaliseringen var gradvis - hvert skritt gjorde det neste mulig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-2-text-3',
      type: 'text',
      content: `## Utryddelsesleirene

Nazistene bygget seks utryddelsesleirer, alle i det okkuperte Polen:
- **Auschwitz-Birkenau** - Den største, over 1 million drept
- **Treblinka** - Ca. 900 000 drept
- **Belzec** - Ca. 500 000 drept
- **Sobibor** - Ca. 250 000 drept
- **Chelmno** - Ca. 150 000 drept
- **Majdanek** - Ca. 80 000 drept

I utryddelsesleirene ble mennesker transportert i kvegtog, selektert ved ankomst (de fleste rett til gasskamrene), og deres eiendeler ble stjålet. Det var industrialisert massemord.`,
    },
    {
      id: 'historie-13-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-13-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med at Holocaust var et "industrialisert massemord"? Hvilken rolle spilte moderne teknologi og byråkrati?',
        solution: 'Holocaust var industrialisert fordi det brukte moderne metoders effektivitet for massemord: 1) Byråkrati - Deportasjoner ble planlagt med togfrekvenstabeller, ofre ble registrert med kartotek. 2) Teknologi - Gasskamre kunne drepe tusenvis på kort tid, krematorier fjernet likene. 3) Arbeidsdeling - Ulike personer hadde ansvar for ulike deler (transport, vakthold, kremering), noe som spredte ansvar. 4) Fabrikklignende prosesser - Leirene var designet for maksimal "effektivitet". Dette viser at moderne sivilisasjon ikke beskytter mot barbari - tvert imot kan moderne metoder gjøre ondskap mer effektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-2-text-4',
      type: 'text',
      content: `## Andre offergrupper

Holocaust rammet primært jøder, men nazistene forfulgte også andre grupper:

- **Rom (sigøynere):** 200 000-500 000 drept
- **Funksjonshemmede:** 200 000+ drept i "eutanasi"-programmet
- **Sovjetiske krigsfanger:** 3 millioner døde i fangenskap
- **Polske intellektuelle:** Systematisk eliminert
- **Homofile:** Tusener sendt til konsentrasjonsleirer
- **Jehovas vitner:** Forfulgt for å nekte militærtjeneste
- **Politiske motstandere:** Kommunister, sosialdemokrater`,
    },
    {
      id: 'historie-13-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-13-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hvorfor det er viktig å huske og lære om Holocaust i dag. Hvilke lærdommer kan vi trekke?',
        solution: 'Det er viktig å huske Holocaust fordi: 1) Respekt for ofrene - Vi skylder de millionene som døde å ikke glemme dem. 2) Forebygging - Ved å forstå hvordan folkemord utvikler seg, kan vi gjenkjenne og stoppe tidlige varselstegn. 3) Motvirke benektelse - Benektelse av Holocaust er en form for fortsatt forfølgelse. 4) Menneskerettigheter - Holocaust førte til FNs menneskerettighetserklæring. Lærdommer inkluderer: Fare ved dehumanisering, viktigheten av å stå opp mot urett tidlig, at "vanlige mennesker" kan bli gjerningsmenn, og at moderne sivilisasjon ikke beskytter mot barbari uten aktiv innsats.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-13-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft spørsmålet om skyld og ansvar for Holocaust. Hvem var ansvarlige - bare lederne, eller også "vanlige" mennesker som deltok eller så bort?',
        solution: 'Spørsmålet om ansvar er komplekst: 1) Lederne (Hitler, Himmler, Heydrich) bar hovedansvaret for å planlegge og beordre Holocaust. 2) Direkte gjerningsmenn (leirvakter, innsatsgrupper) utførte mordene. 3) Byråkrater organiserte transportene og visste hva som skjedde. 4) Vanlige soldater og politimenn deltok i masseskytinger. 5) Sivilbefolkningen så deportasjoner og profiterte på stjålet eiendom. Historikere som Christopher Browning har vist at "vanlige menn" ble mordere under gruppepress. Dette betyr ikke at alle er like skyldige, men at passivitet og "bare følge ordre" også innebærer et moralsk ansvar. Nürnberg-prinsippet slår fast at man ikke kan skylde på ordre ovenfra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_13_3: TextbookChapter = {
  id: 'historie-13-3',
  courseId: 'historie',
  chapterNumber: '13.3',
  title: 'Norge under okkupasjonen',
  description: 'Okkupasjon, samarbeid og motstand.',
  estimatedMinutes: 55,
  competenceGoals: ['handlingsrom i konfliktsituasjoner'],
  content: [
    {
      id: 'historie-13-3-intro',
      type: 'text',
      content: `## Norge under tysk okkupasjon (1940-1945)

9. april 1940 angrep Tyskland Norge uten forvarsel. Etter to måneders kamp kapitulerte de norske styrkene, og landet var okkupert i fem år. Kongen og regjeringen flyktet til London og ledet motstandskampen derfra.

Okkupasjonstiden preget Norge dypt. Nordmenn ble stilt overfor vanskelige valg: Skulle man samarbeide med okkupasjonsmakten, tilpasse seg, eller gjøre motstand? De fleste valgte en form for tilpasning, men mange deltok også i aktiv motstand.`,
    },
    {
      id: 'historie-13-3-def-1',
      type: 'definition',
      title: 'Nasjonal Samling (NS)',
      content: `**Nasjonal Samling** var det norske nazistpartiet, stiftet av Vidkun Quisling i 1933.

Fakta om NS:
- Før krigen hadde partiet bare noen tusen medlemmer
- Under okkupasjonen vokste medlemstallet til ca. 45 000
- Quisling ble ministerpresident i 1942
- NS samarbeidet aktivt med tyske myndigheter
- Etter krigen ble NS-medlemmer dømt for landssvik

Navnet "Quisling" ble et internasjonalt begrep for landsforræder.`,
    },
    {
      id: 'historie-13-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-13-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvem var Vidkun Quisling, og hvorfor ble navnet hans et internasjonalt begrep?',
        solution: 'Vidkun Quisling var leder for det norske nazistpartiet Nasjonal Samling. Den 9. april 1940 forsøkte han å gjennomføre et statskupp og erklære seg selv som statsminister via radio, men kuppet mislyktes. Under okkupasjonen ble han likevel innsatt som ministerpresident av tyskerne i 1942. Han samarbeidet aktivt med okkupantene og bidro til deportasjonen av norske jøder. Navnet hans ble et internasjonalt begrep for landsforræder fordi hans kupp var så åpenbart et svik mot eget land. Etter krigen ble han dømt til døden og skutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-3-text-2',
      type: 'text',
      content: `## Hverdagsliv under okkupasjonen

For vanlige nordmenn var okkupasjonen preget av:

### Knapphet og rasjonering
- Mat, klær og brensel var rasjonert
- Svartebørs blomstret
- "Ersatz"-produkter erstattet manglende varer

### Kontroll og sensur
- Pressen var sensurert
- Radio ble beslaglagt (kun NS-kontrollert radio lovlig)
- Forsamlingsforbud og portforbud

### Nazifisering
- NS forsøkte å nazifisere skolen, kirken og organisasjonslivet
- Lærerne nektet og 1100 ble sendt til Kirkenes
- Kirken protesterte mot jødeforfølgelsen`,
    },
    {
      id: 'historie-13-3-def-2',
      type: 'definition',
      title: 'Holdningskampen',
      content: `**Holdningskampen** var den sivile motstanden mot nazifisering av det norske samfunnet.

Eksempler på holdningskamp:
- **Lærernes motstand:** 12 000 lærere nektet å melde seg inn i nazistisk lærerorganisasjon
- **Kirkens motstand:** Biskopene la ned sine embeter i protest
- **Idrettsstreik:** Norsk idrett nektet å konkurrere under NS-kontroll
- **Foreldreaksjonen:** Foreldre protesterte mot NS-påvirkning i skolen

Holdningskampen viste at sivil ulydighet kunne fungere mot okkupasjonsmakten.`,
    },
    {
      id: 'historie-13-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-13-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var holdningskampen, og hvorfor var den viktig for norsk motstand mot okkupasjonen?',
        solution: 'Holdningskampen var den sivile, ikke-voldelige motstanden mot nazistenes forsøk på å ensrette det norske samfunnet. Den inkluderte lærernes nekting av å melde seg inn i NS-organisasjoner (1100 ble sendt til tvangsarbeid), kirkens protest der biskopene la ned embetene, idrettsstreiken, og foreldreaksjoner mot propaganda i skolen. Holdningskampen var viktig fordi: 1) Den viste at nordmenn ikke aksepterte nazismen frivillig. 2) Den bevarte viktige samfunnsinstitusjoner utenfor NS-kontroll. 3) Den opprettholdt moralen og samholdet i befolkningen. 4) Den demonstrerte at sivil ulydighet kunne være effektiv motstand.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-3-text-3',
      type: 'text',
      content: `## De norske jødene

Ved krigsutbruddet bodde det omtrent 2100 jøder i Norge. Fra høsten 1942 ble de systematisk arrestert og deportert.

### Hendelsene
- **Oktober 1942:** Mannlige jøder over 15 år arrestert
- **26. november 1942:** Kvinner, barn og eldre arrestert
- **Deportasjon:** 773 norske jøder sendt til Auschwitz med skipet Donau
- **Bare 38 overlevde** utryddelsesleirene

Norsk politi og NS-myndigheter deltok aktivt i arrestasjonene. Samtidig hjalp motstandsfolk rundt 900 jøder med å flykte til Sverige.`,
    },
    {
      id: 'historie-13-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-13-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv hva som skjedde med de norske jødene under okkupasjonen. Hvilke handlingsvalg hadde nordmenn i møte med jødeforfølgelsen?',
        solution: 'Høsten 1942 ble norske jøder systematisk arrestert. Først menn over 15 år i oktober, så kvinner, barn og eldre 26. november. 773 jøder ble deportert til Auschwitz med skipet Donau - bare 38 overlevde. Norsk politi deltok i arrestasjonene. Nordmenn hadde ulike handlingsvalg: 1) Aktivt samarbeid - noen politi og NS-medlemmer deltok i arrestasjoner. 2) Passivitet - de fleste gjorde ingenting. 3) Hjelp - motstandsfolk og vanlige borgere hjalp ca. 900 jøder å flykte til Sverige. Kirkens biskoper protesterte offentlig. Dette viser at det fantes et handlingsrom selv under okkupasjon, og at valg om å hjelpe eller ikke var moralsk betydningsfulle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-3-text-4',
      type: 'text',
      content: `## Mellom motstand og samarbeid

De fleste nordmenn befant seg i en gråsone mellom aktiv motstand og aktivt samarbeid:

### Samarbeid med tyskerne
- Ca. 50 000 nordmenn arbeidet for den tyske okkupasjonsmakten
- Næringslivet produserte for tyske behov
- Noen kvinner hadde forhold til tyske soldater ("tyskertøser")

### Tilpasning
- De fleste prøvde å leve så normalt som mulig
- Man fulgte pålegg for å unngå problemer
- Mange hadde liten kontakt med motstandsbevegelsen

### Motstand
- Ca. 40 000 deltok i organisert militær eller sivil motstand
- Mange flere deltok i mindre handlinger (illegale aviser, hjelpe folk i skjul)`,
    },
    {
      id: 'historie-13-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-13-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft begrepene "motstand", "tilpasning" og "samarbeid" under okkupasjonen. Hvorfor er det vanskelig å trekke klare grenser?',
        solution: 'Grensene mellom motstand, tilpasning og samarbeid var uklare fordi: 1) Kontekst varierte - å arbeide for tyskerne kunne være tvang eller frivillig valg. 2) Motivene var sammensatte - noen "samarbeidet" for å skaffe informasjon til motstandsbevegelsen. 3) Grad av valg - mange hadde begrenset handlingsrom. 4) Gradvise overganger - fra passiv tilpasning til å lese illegale aviser til aktiv motstand. Eksempler på gråsoner: En fabrikkeier som produserte for tyskerne men også finansierte motstand. En politimann som arresterte motstandsfolk men varslet ved razzia. En kvinne som hadde forhold til tysk soldat for beskyttelse. Etterkrigsoppgjøret slet med disse nyansene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-13-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvilke faktorer som påvirket nordmenns valg om å gjøre motstand, tilpasse seg eller samarbeide under okkupasjonen.',
        solution: 'Faktorer som påvirket valgene: 1) Personlig risiko - motstand kunne bety tortur, henrettelse eller konsentrasjonsleir. 2) Familie - ansvar for barn og familie gjorde det vanskeligere å ta risiko. 3) Geografisk plassering - lettere å drive motstand nær svenskegrensen. 4) Sosial posisjon - lærere, prester og andre med offentlige roller ble tvunget til å ta stilling. 5) Tilgang til nettverk - kjennskap til motstandsbevegelsen. 6) Ideologi - noen var overbeviste nazister, andre sterkt anti-nazistiske. 7) Økonomiske hensyn - arbeidsløshet kunne presse folk til å arbeide for tyskerne. 8) Gradvis utvikling - mange ble mer motstandsvennlige etter hvert som krigen utviklet seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_13_4: TextbookChapter = {
  id: 'historie-13-4',
  courseId: 'historie',
  chapterNumber: '13.4',
  title: 'Motstand og handlingsrom',
  description: 'Motstandskamp og moralske valg under krigen.',
  estimatedMinutes: 55,
  competenceGoals: ['handlingsrom i konfliktsituasjoner'],
  content: [
    {
      id: 'historie-13-4-intro',
      type: 'text',
      content: `## Motstandskampen

Motstanden mot den tyske okkupasjonen tok mange former - fra sivil ulydighet til væpnet kamp. Den norske motstandsbevegelsen var koordinert med eksilregjeringen i London og de allierte, og spilte en viktig rolle både militært og for å opprettholde moralen i befolkningen.

Motstandsarbeid var farlig. De som ble tatt, risikerte tortur, konsentrasjonsleir eller henrettelse. Likevel valgte tusenvis av nordmenn å ta denne risikoen.`,
    },
    {
      id: 'historie-13-4-def-1',
      type: 'definition',
      title: 'Hjemmefronten',
      content: `**Hjemmefronten** var betegnelsen på den organiserte motstandsbevegelsen i Norge under okkupasjonen.

Hjemmefronten besto av:
- **Sivorg (Sivil organisasjon):** Koordinerte sivil motstand, illegale aviser
- **Milorg (Militær organisasjon):** Forberedte væpnet motstand, sabotasje
- **XU:** Hemmelig etterretningsorganisasjon

Ved krigens slutt hadde Milorg ca. 40 000 mann under våpen, klar til å ta over når tyskerne kapitulerte.`,
    },
    {
      id: 'historie-13-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-13-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv organiseringen av den norske motstandsbevegelsen. Hva var forskjellen mellom Milorg og Sivorg?',
        solution: 'Milorg (Militær organisasjon) var den væpnede delen av motstandsbevegelsen. Den samlet frivillige som ble trent for geriljakrig og sabotasje, og skulle være klar til å ta over kontrollen når tyskerne kapitulerte. Ved krigens slutt hadde Milorg ca. 40 000 mann. Sivorg (Sivil organisasjon) koordinerte den sivile motstanden: illegale aviser, holdningskampen, hjelp til folk som måtte skjule seg, og forberedelse av sivil administrasjon etter krigen. XU var etterretningsorganisasjonen som samlet informasjon for de allierte. Sammen utgjorde disse Hjemmefronten, som var koordinert med eksilregjeringen i London.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-4-text-2',
      type: 'text',
      content: `## Sabotasje og militær motstand

Milorg og britisk-trente kommandosoldater gjennomførte flere viktige sabotasjeaksjoner:

### Tungtvannsaksjonen (1943)
Norske kommandosoldater ødela tungtvannsproduksjonen på Vemork. Tungtvannet var viktig for det tyske atomprogrammet. Aksjonen regnes som en av krigens viktigste sabotasjeaksjoner.

### Jernbanesabotasje
Systematisk sabotasje mot jernbanen hindret tyske troppetransporter.

### Skipssabotasje
Motstandsfolk senket skip som fraktet viktige varer til Tyskland.

### Etterretning
XU samlet informasjon om tyske militære installasjoner som ble sendt til de allierte.`,
    },
    {
      id: 'historie-13-4-def-2',
      type: 'definition',
      title: 'Utefronten',
      content: `**Utefronten** var nordmenn som kjempet mot tyskerne utenfor Norge.

Former for utefrontinnsats:
- **Handelsflåten:** Norske sjøfolk fraktet forsyninger i konvoier over Atlanterhavet
- **Militære styrker:** Norske avdelinger kjempet i Storbritannia, ved Narvik, i Italia
- **Kompani Linge:** Kommandosoldater trent i Storbritannia for aksjoner i Norge
- **Flyskvadroner:** 330 og 331 skvadron i RAF

Over 4000 nordmenn mistet livet på utefronten, de fleste sjøfolk.`,
    },
    {
      id: 'historie-13-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-13-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar betydningen av tungtvannsaksjonen på Vemork i 1943. Hvorfor regnes denne som en av krigens viktigste sabotasjeaksjoner?',
        solution: 'Tungtvannsaksjonen i februar 1943 var viktig fordi: 1) Tungtvannet (deuteriumoksid) var essensielt for det tyske atomprogrammet - det ble brukt i forsøk på å lage en atomreaktor. 2) Vemork på Rjukan var verdens eneste industrielle produsent av tungtvannet. 3) Aksjonen ble utført av norske kommandosoldater fra Kompani Linge, som tok seg inn i fabrikken og ødela produksjonsutstyret uten å drepe noen. 4) Den forsinket det tyske atomprogrammet betydelig. Hadde Tyskland utviklet atomvåpen, kunne krigens utfall blitt annerledes. Aksjonen viste også verdien av norsk motstandsarbeid og kompetanse i vinterforhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-4-text-3',
      type: 'text',
      content: `## Illegale aviser og informasjonskamp

Under okkupasjonen var all presse sensurert. Motstandsbevegelsen svarte med å utgi illegale aviser:

- Over 300 ulike illegale aviser ble utgitt
- De spredte nyheter fra BBC og London-regjeringen
- De motvirket tysk propaganda
- Å lese, skrive eller distribuere illegale aviser var straffbart med konsentrasjonsleir eller døden

De illegale avisene var viktige for å opprettholde moralen og motstandsviljen i befolkningen.`,
    },
    {
      id: 'historie-13-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-13-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor var de illegale avisene viktige for motstandskampen, selv om de ikke var direkte militær motstand?',
        solution: 'De illegale avisene var viktige fordi: 1) Informasjonskamp - De motvirket tysk propaganda og ga folk tilgang til sannferdig informasjon fra BBC og eksilregjeringen. 2) Moralsk motstand - De viste at motstanden levde og at folk ikke var alene i sin holdning mot okkupantene. 3) Samhold - De skapte fellesskap mellom lesere som delte en felles holdning. 4) Koordinering - De formidlet instrukser fra hjemmefrontledelsen. 5) Preparering - De forberedte folk mentalt på at frigjøringen ville komme. Selv om det "bare" var aviser, var risikoen stor - mange ble tatt og sendt til konsentrasjonsleir eller henrettet for å lese eller spre illegale aviser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-4-text-4',
      type: 'text',
      content: `## Handlingsrom og moralske valg

Begrepet **handlingsrom** brukes for å beskrive de valgmulighetene mennesker hadde under okkupasjonen. Selv i ekstreme situasjoner fantes det valg.

### Faktorer som utvidet handlingsrommet:
- Nettverk og kontakter i motstandsbevegelsen
- Geografisk plassering (nær Sverige, i utkantstrøk)
- Ressurser og posisjon i samfunnet
- Kunnskap og kompetanse

### Faktorer som begrenset handlingsrommet:
- Ansvar for familie og barn
- Frykt for represalier
- Manglende nettverk
- Synlig posisjon som gjorde en til mål`,
    },
    {
      id: 'historie-13-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-13-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hva som kan forklare at noen mennesker valgte å ta stor personlig risiko for å hjelpe andre under okkupasjonen, mens andre ikke gjorde det.',
        solution: 'Flere faktorer kan forklare forskjellene: 1) Moralske overbevisninger - Noen hadde sterke verdier om at urett må bekjempes. 2) Empati og personlig kjennskap - De som kjente jøder eller andre forfulgte personlig, var mer tilbøyelige til å hjelpe. 3) Sosialt nettverk - Tilgang til motstandsmiljøer gjorde det lettere å handle. 4) Praktiske muligheter - Ressurser, geografisk plassering, kompetanse. 5) Personlighet - Noen er mer risikovillige enn andre. 6) Ansvarsfølelse - Noen følte større personlig ansvar for å gripe inn. 7) Familiesituasjon - Enslige kunne ta større risiko enn foreldre. Det er viktig å unngå å dømme de som ikke handlet for hardt - handlingsrommet var reelt begrenset, og de fleste ville aldri bli testet i en slik situasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-13-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvilken betydning den norske motstandsbevegelsen hadde - militært, politisk og moralsk.',
        solution: 'Militær betydning: Sabotasjeaksjoner (særlig tungtvannet) hindret tysk krigsinnsats. Etterretning ga verdifull informasjon til de allierte. Milorg sikret fredelig overtakelse ved krigens slutt. Utefronten (særlig handelsflåten) var viktig for alliert logistikk. Politisk betydning: Motstandskampen legitimerte eksilregjeringen og sikret Norges plass blant de allierte. Den hindret at NS fikk kontroll over samfunnet. Den la grunnlaget for et legitimt politisk system etter krigen. Moralsk betydning: Motstandskampen opprettholdt folkets motstandsvilje og selvrespekt. Den viste at nordmenn ikke aksepterte okkupasjonen passivt. Den skapte helter og forbilder. Den ga nasjonen en stolt fortelling etter krigen - selv om denne fortellingen kanskje overdrev motstandens omfang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_13_5: TextbookChapter = {
  id: 'historie-13-5',
  courseId: 'historie',
  chapterNumber: '13.5',
  title: 'Fredsslutninger og oppgjør',
  description: 'Krigens slutt og rettsoppgjøret.',
  estimatedMinutes: 50,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  content: [
    {
      id: 'historie-13-5-intro',
      type: 'text',
      content: `## Krigens slutt og en ny verdensorden

Da andre verdenskrig tok slutt i 1945, lå store deler av Europa og Asia i ruiner. Mellom 70 og 85 millioner mennesker var døde. Seierherrene stod overfor enorme utfordringer: Hvordan skulle freden organiseres? Hvordan skulle krigsforbrytere straffes? Hvordan kunne man hindre at noe lignende skjedde igjen?

Svarene på disse spørsmålene formet etterkrigstiden og verden vi lever i i dag.`,
    },
    {
      id: 'historie-13-5-def-1',
      type: 'definition',
      title: 'Nürnbergprosessen',
      content: `**Nürnbergprosessen** (1945-1946) var rettsoppgjøret mot ledende nazister etter krigen.

Fakta om Nürnbergprosessen:
- 24 ledende nazister ble tiltalt
- Anklagene: Forbrytelser mot freden, krigsforbrytelser, forbrytelser mot menneskeheten
- 12 ble dømt til døden, 7 til fengselsstraff, 3 frikjent
- Prosessen etablerte prinsippet om individuelt ansvar for krigsforbrytelser
- Grunnla moderne internasjonal strafferett

"Jeg fulgte bare ordre" ble avvist som forsvar.`,
    },
    {
      id: 'historie-13-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-13-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var Nürnbergprosessen, og hvilke prinsipper for internasjonal rett etablerte den?',
        solution: 'Nürnbergprosessen var rettssaken mot 24 ledende nazister i 1945-46. Den etablerte flere viktige prinsipper: 1) Individuelt ansvar - Enkeltpersoner kan holdes ansvarlige for krigsforbrytelser, ikke bare stater. 2) "Ordre ovenfra" er ingen unnskyldning - Man kan ikke skylde på at man fulgte ordre. 3) Forbrytelser mot menneskeheten - En ny kategori som dekket systematiske angrep på sivilbefolkning. 4) Forbrytelser mot freden - Å starte angrepskrig er en forbrytelse. 5) Universell jurisdiksjon - Noen forbrytelser er så alvorlige at de angår hele menneskeheten. Disse prinsippene la grunnlaget for moderne internasjonal strafferett og senere tribunaler som ICC.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-5-text-2',
      type: 'text',
      content: `## De forente nasjoner (FN)

For å hindre nye verdskriger ble **De forente nasjoner (FN)** grunnlagt i 1945.

### FNs struktur:
- **Generalforsamlingen:** Alle medlemsland har én stemme
- **Sikkerhetsrådet:** 5 faste medlemmer med vetorett (USA, Sovjet/Russland, Storbritannia, Frankrike, Kina)
- **Sekretariatet:** FNs administrasjon, ledet av generalsekretæren

### FNs formål:
- Bevare internasjonal fred og sikkerhet
- Utvikle vennlige relasjoner mellom nasjoner
- Fremme samarbeid om internasjonale problemer
- Beskytte menneskerettighetene`,
    },
    {
      id: 'historie-13-5-def-2',
      type: 'definition',
      title: 'Menneskerettighetserklæringen',
      content: `**Verdenserklæringen om menneskerettigheter** ble vedtatt av FN 10. desember 1948.

Erklæringen fastslår at alle mennesker har:
- Rett til liv, frihet og personlig sikkerhet
- Likhet for loven
- Tanke-, samvittighets- og religionsfrihet
- Ytringsfrihet
- Rett til arbeid og utdanning
- Forbud mot tortur og slaveri

Erklæringen var et direkte svar på Holocaust og andre verdenskrig.`,
    },
    {
      id: 'historie-13-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-13-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar sammenhengen mellom andre verdenskrig, Holocaust og Menneskerettighetserklæringen fra 1948.',
        solution: 'Menneskerettighetserklæringen var et direkte svar på krigens grusomheter: 1) Holocaust viste at stater kunne begå uhyrlige forbrytelser mot egne borgere - erklæringen fastslår at menneskerettigheter gjelder uavhengig av statsborgerskap. 2) Nazi-Tysklands undertrykkelse av ytringsfrihet, religionsfrihet og politisk opposisjon viste behovet for å beskytte disse rettighetene internasjonalt. 3) Bruken av tortur og umenneskelig behandling førte til absolutt forbud mot dette. 4) Erklæringen var uttrykk for "aldri mer" - et forsøk på å skape felles standarder som kunne hindre fremtidige overgrep. Eleanor Roosevelt, som ledet arbeidet, kalte den "et internasjonalt Magna Carta for hele menneskeheten".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-5-text-3',
      type: 'text',
      content: `## Det norske rettsoppgjøret

I Norge ble det gjennomført et omfattende rettsoppgjør mot de som hadde samarbeidet med okkupasjonsmakten.

### Omfang:
- Ca. 90 000 personer etterforsket
- Ca. 50 000 dømt for landssvik
- 45 henrettet, inkludert Quisling
- De fleste fikk bøter, tap av stemmerett, eller korte fengselsstraffer

### Kritikk av oppgjøret:
- Rammet ofte "småfolk" hardere enn næringslivsledere
- "Tyskerjentene" ble behandlet hardt
- Noen mente straffen var for mild, andre for hard
- Spørsmål om lover med tilbakevirkende kraft`,
    },
    {
      id: 'historie-13-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-13-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv hovedtrekkene i det norske landssvikoppgjøret. Hvilke grupper ble rammet, og hva slags straff fikk de?',
        solution: 'Det norske landssvikoppgjøret var Europas mest omfattende: Ca. 90 000 ble etterforsket, og ca. 50 000 dømt. Grupper som ble rammet: 1) NS-medlemmer - de fleste av de dømte. 2) Frontkjempere som hadde kjempet for Tyskland. 3) Angivere og torturister - de hardeste straffene. 4) Økonomiske kollaboratører. 5) "Tyskerjenter" - kvinner som hadde hatt forhold til tyske soldater. Straffer varierte fra bøter og tap av stemmerett (vanligst) til lange fengselsstraffer og dødsstraff. 45 ble henrettet, inkludert Quisling. Oppgjøret har blitt kritisert for å ramme "småfolk" hardere enn store næringslivsledere, og for behandlingen av "tyskerjentene" som ikke hadde begått lovbrudd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-5-text-4',
      type: 'text',
      content: `## Etterkrigstidens Europa

Etter krigen ble Europa delt:
- **Vest-Europa:** Under amerikansk innflytelse, Marshall-hjelp, demokrati, markedsøkonomi
- **Øst-Europa:** Under sovjetisk kontroll, kommunistiske regimer, planøkonomi

Dette la grunnlaget for den kalde krigen som skulle prege verdenshistorien de neste 45 årene.

### Andre konsekvenser:
- Israel opprettet (1948) - delvis som respons på Holocaust
- Europeisk integrasjon begynte (forløperen til EU)
- Avkolonisering akselererte
- USA og Sovjet ble supermakter`,
    },
    {
      id: 'historie-13-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-13-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hvordan freden etter andre verdenskrig var forskjellig fra freden etter første verdenskrig. Hvorfor ble ikke Versailles-feilene gjentatt?',
        solution: 'Freden etter andre verdenskrig unngikk mange av Versailles-feilene: 1) Ingen hard straff av Tyskland - i stedet Marshall-hjelp for gjenoppbygging. Seierherrene forsto at et ydmyket Tyskland var farlig. 2) Tyskland ble delt, ikke bare straffet - dette ga kontroll uten ydmykelse. 3) Internasjonale institusjoner - FN var sterkere enn Folkeforbundet, med stormaktene forpliktet. 4) Økonomisk samarbeid - Marshall-planen og senere EF/EU skapte gjensidig avhengighet. 5) Militær tilstedeværelse - allierte tropper ble i Europa. 6) Fokus på menneskerettigheter - ikke bare territorielle spørsmål. Disse forskjellene skyldes at man hadde lært av historien, og at USAs engasjement (i motsetning til etter 1918) sikret langsiktig stabilitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-13-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-13-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvorfor andre verdenskrig regnes som et vendepunkt i verdenshistorien. Hvilke varige endringer førte krigen til?',
        solution: 'Andre verdenskrig var et vendepunkt fordi: 1) Maktbalansen endret seg - Europa mistet sin dominerende stilling, USA og Sovjet ble supermakter. 2) Internasjonal orden - FN og menneskerettighetsregimet skapte nye rammer for internasjonal politikk. 3) Avkolonisering - Europas svekkelse akselererte frigjøring av kolonier. 4) Europeisk integrasjon - Krigen overbeviste mange om at europeisk samarbeid var nødvendig, noe som førte til EU. 5) Teknologi - Atomvåpen endret internasjonal politikk fundamentalt. 6) Velferdsstaten - Mange land bygget ut velferdsordninger som svar på krigens lidelser. 7) Minnekultur - Holocaust ble en sentral referanse for menneskerettighetstanken. Krigen skapte den verden vi lever i i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14: Den kalde krigen
// ============================================================================

export const CHAPTER_HISTORIE_14_1: TextbookChapter = {
  id: 'historie-14-1',
  courseId: 'historie',
  chapterNumber: '14.1',
  title: 'Supermaktene og blokksystemet',
  description: 'Øst mot vest og den todelte verden.',
  estimatedMinutes: 55,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  content: [
    {
      id: 'historie-14-1-intro',
      type: 'text',
      content: `## Den kalde krigen (1947-1991)

Etter andre verdenskrig oppstod en ny type konflikt mellom de to supermaktene USA og Sovjetunionen. Denne konflikten kalles **den kalde krigen** fordi det aldri kom til direkte krig mellom supermaktene, selv om verden flere ganger var nær atomkrig.

Den kalde krigen handlet om mer enn militær rivalisering. Det var en ideologisk kamp mellom to systemer: Det kapitalistiske, demokratiske Vesten ledet av USA, og det kommunistiske Øst ledet av Sovjetunionen.`,
    },
    {
      id: 'historie-14-1-def-1',
      type: 'definition',
      title: 'Supermakt',
      content: `En **supermakt** er en stat med overveldende global militær, økonomisk og politisk innflytelse.

Etter 1945 fantes bare to supermakter:
- **USA:** Verdens største økonomi, atommakt fra 1945, leder av den vestlige blokken
- **Sovjetunionen:** Verdens største landområde, atommakt fra 1949, leder av østblokken

Ingen andre stater kunne måle seg med disse i global innflytelse.`,
    },
    {
      id: 'historie-14-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-14-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor USA og Sovjetunionen ble supermakter etter andre verdenskrig, mens de tradisjonelle stormaktene i Europa mistet sin posisjon.',
        solution: 'USA og Sovjet ble supermakter fordi: 1) De hadde enorme ressurser - USA hadde verdens største økonomi, Sovjet hadde store naturressurser og befolkning. 2) De var militært overlegne - begge hadde massive hærer og atomvåpen. 3) Europeiske stormakter var svekket - krigen hadde ødelagt Storbritannia, Frankrike og Tyskland økonomisk og militært. 4) Geografisk fordel - USA og store deler av Sovjet unngikk krigsødeleggelser på eget territorium. 5) Ideologisk appell - Begge representerte universelle ideer (demokrati/kapitalisme vs kommunisme) som appellerte globalt. Europa mistet sin dominerende posisjon fordi krigen hadde tappet kontinentet for ressurser og prestige, og avkoloniseringen svekket Europas globale makt ytterligere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-1-text-2',
      type: 'text',
      content: `## Blokksystemet

Verden ble delt i to blokker med hvert sitt allianssystem:

### Vestblokken
- **NATO (1949):** North Atlantic Treaty Organization
- Medlemmer: USA, Canada, Vest-Europa
- Artikkel 5: Et angrep på ett medlem er angrep på alle
- Støttet av Marshall-hjelpen (amerikansk økonomisk støtte)

### Østblokken
- **Warszawapakten (1955):** Militærallianse ledet av Sovjet
- Medlemmer: Sovjetunionen og østeuropeiske satellittstater
- COMECON: Økonomisk samarbeid i østblokken
- Sovjet hadde reell kontroll over medlemslandene`,
    },
    {
      id: 'historie-14-1-def-2',
      type: 'definition',
      title: 'Jernteppet',
      content: `**Jernteppet** var betegnelsen på den ideologiske og fysiske grensen som delte Europa i øst og vest under den kalde krigen.

Winston Churchill brukte begrepet i en tale i 1946:
*"Fra Stettin ved Østersjøen til Trieste ved Adriaterhavet har et jernteppe senket seg over kontinentet."*

Jernteppet var:
- Ideologisk: Skillet mellom kommunisme og kapitalisme
- Fysisk: Piggtråd, murer, minefelter langs grensene
- Symbolsk: Berlinmuren (bygget 1961) ble selve symbolet`,
    },
    {
      id: 'historie-14-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-14-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var jernteppet, og hvordan delte det Europa i to under den kalde krigen?',
        solution: 'Jernteppet var grensen som delte Europa i en vestlig og østlig del. Begrepet ble brukt av Churchill i 1946. Det var ideologisk - kapitalisme/demokrati i vest mot kommunisme/ettpartistater i øst. Det var også fysisk - piggtråd, vakttårn, minefelter og murer hindret folk fra å flykte fra øst til vest. Berlinmuren (1961-1989) ble det fremste symbolet. Jernteppet betydde at familier ble splittet, at informasjon ble blokkert, og at to helt ulike samfunn utviklet seg på hver side. De som forsøkte å flykte fra øst risikerte å bli skutt. Jernteppet representerte den kalde krigens deling av verden i to fiendtlige leirer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-1-text-3',
      type: 'text',
      content: `## Våpenkappløpet

Begge supermaktene rustet opp massivt:

### Atomvåpen
- **1945:** USA utvikler atombomben
- **1949:** Sovjet tester sin første atombombe
- **1952:** USA utvikler hydrogenbomben
- **1953:** Sovjet følger etter

### MAD - Mutual Assured Destruction
Begge sider bygget opp så mange atomvåpen at en krig ville utslette begge. Denne "terrorbalansen" kan ha forhindret direkte krig mellom supermaktene.

### Romkappløpet
- **1957:** Sovjet sender opp Sputnik, verdens første satellitt
- **1961:** Jurij Gagarin blir første menneske i verdensrommet
- **1969:** USA lander på månen`,
    },
    {
      id: 'historie-14-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-14-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva MAD (Mutual Assured Destruction) innebar, og diskuter om denne strategien gjorde verden tryggere eller farligere.',
        solution: 'MAD betydde at både USA og Sovjet hadde nok atomvåpen til å utslette hverandre fullstendig, selv etter et førsteslag. Dette skapte en "terrorbalanse" - ingen kunne angripe uten å bli ødelagt selv. Argumenter for at MAD gjorde verden tryggere: 1) Avskrekking fungerte - det kom aldri til direkte krig. 2) Begge sider var forsiktige i kriser. 3) Det oppmuntret til diplomati og avtaler. Argumenter for at MAD var farlig: 1) Teknisk svikt eller misforståelse kunne utløst atomkrig. 2) Den oppmuntret til massive arsenaler. 3) Kriser som Cuba-krisen viste at verden var nær katastrofe. 4) Mindre aktører kunne utløse konflikt. MAD var paradoksal - sikkerhet gjennom garantert gjensidig ødeleggelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-1-text-4',
      type: 'text',
      content: `## Ideologisk kamp

Den kalde krigen var også en kamp om ideer:

### Vestlig ideologi:
- Liberalt demokrati med flerpartisystem
- Kapitalisme og markedsøkonomi
- Individuelle rettigheter og friheter
- Ytringsfrihet og pressefrihet

### Kommunistisk ideologi:
- Ettpartistyre ledet av kommunistpartiet
- Planøkonomi og statlig eierskap
- Kollektive rettigheter og økonomisk likhet
- Sensur og kontroll av informasjon

Begge sider brukte propaganda for å fremstille sitt system som overlegen.`,
    },
    {
      id: 'historie-14-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-14-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft den ideologiske konflikten mellom supermaktene. Hvilke verdier stod mot hverandre?',
        solution: 'Den ideologiske konflikten handlet om grunnleggende verdier: 1) Politisk system - Vest: flerpartisystem, demokrati, maktfordeling. Øst: ettpartistyre, "proletariatets diktatur". 2) Økonomi - Vest: privat eiendom, markedsøkonomi, profittmotiv. Øst: statlig eierskap, planøkonomi, likhet. 3) Individ vs kollektiv - Vest: individuelle rettigheter, personlig frihet. Øst: kollektive interesser over individuelle. 4) Informasjon - Vest: ytringsfrihet, fri presse. Øst: sensur, statskontrollerte medier. Begge sider mente deres system var best for menneskeheten og fremtiden. Vesten fremhevet frihet, Øst fremhevet likhet. Denne ideologiske dimensjonen gjorde kompromiss vanskelig og ga konflikten en moralsk karakter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-14-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft årsakene til den kalde krigen. Kunne konflikten mellom USA og Sovjet vært unngått?',
        solution: 'Årsakene til den kalde krigen: 1) Ideologisk uforenlighet - Kapitalisme og kommunisme hadde motstridende mål. 2) Sikkerhetsbehov - Sovjet ville ha buffersone i Øst-Europa, USA så dette som ekspansjonisme. 3) Maktvakuum - Europas svekkelse skapte rom for rivalisering. 4) Mistenksomhet - Historien (Vestens intervensjon 1918-20, Stalin-Hitler-pakten) skapte gjensidig mistillit. 5) Atombomben - Amerikansk monopol (til 1949) truet Sovjet. Kunne den vært unngått? Trolig ikke, gitt de ideologiske motsetningene. Men den kunne kanskje blitt mildere med mer dialog og mindre mistenksomhet tidlig. Roosevelts mer samarbeidsorienterte linje ble erstattet av Trumans hardere kurs. Uansett var grunnleggende interesser og verdier så forskjellige at konflikt var sannsynlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_14_2: TextbookChapter = {
  id: 'historie-14-2',
  courseId: 'historie',
  chapterNumber: '14.2',
  title: 'Konflikter og kriger',
  description: 'Korea, Vietnam, Cuba og andre konflikter.',
  estimatedMinutes: 55,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  content: [
    {
      id: 'historie-14-2-intro',
      type: 'text',
      content: `## Stedfortrederkriger

Selv om USA og Sovjet aldri kjempet direkte mot hverandre, utkjempet de konflikten gjennom såkalte **stedfortrederkriger**. I disse konfliktene støttet supermaktene hver sin side med våpen, penger, rådgivere og noen ganger egne soldater.

Stedfortrederkrigene førte til enorme lidelser i landene der de ble utkjempet, ofte i den tredje verden som ble en arena for stormaktenes rivalisering.`,
    },
    {
      id: 'historie-14-2-def-1',
      type: 'definition',
      title: 'Stedfortrederkrig',
      content: `En **stedfortrederkrig** er en væpnet konflikt der stormakter kjemper indirekte ved å støtte lokale parter.

Kjennetegn ved stedfortrederkriger:
- Supermaktene unngår direkte konfrontasjon
- Lokale konflikter får tilførsel av våpen og ressurser utenfra
- Ideologisk dimensjon - "kommunisme vs kapitalisme"
- Ofte langvarige og ødeleggende for sivilbefolkningen

Eksempler: Korea, Vietnam, Afghanistan, Angola, Nicaragua`,
    },
    {
      id: 'historie-14-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-14-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var stedfortrederkriger, og hvorfor valgte supermaktene å kjempe på denne måten i stedet for direkte krig?',
        solution: 'Stedfortrederkriger var konflikter der supermaktene støttet hver sin side uten å kjempe direkte mot hverandre. De valgte denne formen fordi: 1) Atomvåpen - Direkte krig kunne eskalere til atomkrig og gjensidig ødeleggelse (MAD). 2) Internasjonal opinion - Åpen krig mellom supermaktene ville skapt internasjonal fordømmelse. 3) Økonomiske kostnader - Fullskala krig var ekstremt kostbart. 4) Ideologisk kamp - Man kunne vise støtte til sine ideologiske allierte uten full risiko. Konsekvensene ble at lokale konflikter ble forsterket og forlenget, at millioner av mennesker i den tredje verden døde, og at landene der krigene ble utkjempet ble ødelagt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-2-text-2',
      type: 'text',
      content: `## Koreakrigen (1950-1953)

Koreakrigen var den første store stedfortrederkrigen.

### Bakgrunn
Etter andre verdenskrig ble Korea delt ved 38. breddegrad:
- **Nord-Korea:** Kommunistisk, støttet av Sovjet og Kina
- **Sør-Korea:** Pro-vestlig, støttet av USA

### Krigens gang
- **1950:** Nord-Korea invaderer Sør-Korea
- FN (ledet av USA) griper inn til forsvar for Sør
- Kinesiske "frivillige" hjelper Nord-Korea
- Fronten stabiliseres rundt 38. breddegrad

### Resultat
Våpenhvile i 1953, men ingen fredsavtale. Korea er fortsatt delt langs samme linje i dag.`,
    },
    {
      id: 'historie-14-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-14-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv Koreakrigen og forklar hvorfor den regnes som en viktig hendelse i den kalde krigen.',
        solution: 'Koreakrigen (1950-53) begynte da Nord-Korea invaderte Sør-Korea. FN-styrker ledet av USA drev nordkoreanerne tilbake, men Kinas inngripen presset fronten sørover igjen. Krigen endte med våpenhvile ved den opprinnelige delingen. Krigen var viktig fordi: 1) Den viste at den kalde krigen kunne bli varm - supermaktene var villige til å bruke militær makt. 2) Den etablerte mønsteret for stedfortrederkriger. 3) Den førte til massiv amerikansk opprustning. 4) Den bekreftet delingen av verden i blokker. 5) Den viste Kinas rolle som kommunistisk stormakt. 6) Den satte presedens for "containment" - politikken om å stoppe kommunismens spredning. Korea er fortsatt delt, noe som viser krigens varige konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-2-text-3',
      type: 'text',
      content: `## Vietnamkrigen (1955-1975)

Vietnamkrigen ble den kalde krigens lengste og mest kontroversielle konflikt.

### Bakgrunn
- Vietnam var fransk koloni til 1954
- Landet ble delt: Kommunistisk Nord vs pro-vestlig Sør
- USA engasjerte seg gradvis for å hindre kommunistisk seier

### Amerikanske engasjement
- **1965:** USA sender bakkestyrker, på det meste 500 000 soldater
- Massiv bombing av Nord-Vietnam
- Geriljakrig mot Viet Cong i sør

### Utfall
- **1973:** USA trekker seg ut etter massiv motstand hjemme
- **1975:** Nord-Vietnam seirer, landet samles under kommunistisk styre
- Ca. 3 millioner vietnamesere og 58 000 amerikanere drept`,
    },
    {
      id: 'historie-14-2-def-2',
      type: 'definition',
      title: 'Dominoteorien',
      content: `**Dominoteorien** var ideen om at hvis ett land falt til kommunismen, ville naboleandene følge etter - som dominobrikker.

Teorien ble brukt til å rettferdiggjøre amerikansk intervensjon:
*"Hvis Vietnam faller, faller snart hele Sørøst-Asia til kommunismen."*

Dominoteorien drev amerikansk politikk i Vietnam, men viste seg å være overdrevet - kommunismens seier i Vietnam førte ikke til at alle naboland ble kommunistiske.`,
    },
    {
      id: 'historie-14-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-14-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar dominoteorien og vurder dens betydning for USAs engasjement i Vietnam.',
        solution: 'Dominoteorien var ideen om at hvis ett land ble kommunistisk, ville nabolandene følge etter. Den ble brukt for å rettferdiggjøre Vietnam-engasjementet - USA måtte stoppe kommunismen der for å hindre hele Sørøst-Asia fra å falle. Teoriens betydning: 1) Den ga en logisk begrunnelse for kostbar intervensjon. 2) Den gjorde tilbaketrekning politisk vanskelig - man kunne ikke "tape" uten konsekvenser. 3) Den overdrev trusselen - lokale konflikter ble sett som del av en global kamp. Teorien viste seg delvis feil: Vietnam ble kommunistisk, men de fleste naboland gjorde det ikke. Lokale forhold var viktigere enn teorien antok. Kritikere mente teorien forenklet komplekse konflikter og ignorerte nasjonalisme som drivkraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-2-text-4',
      type: 'text',
      content: `## Cuba-krisen (1962)

Cuba-krisen var den kalde krigens farligste øyeblikk - verden var nærmere atomkrig enn noen gang.

### Bakgrunn
- **1959:** Fidel Castro tar makten i Cuba
- Cuba blir kommunistisk og alliert med Sovjet
- **1961:** USA mislykkes med invasjon (Grisebukta)

### Krisen
- **Oktober 1962:** USA oppdager sovjetiske atomraketter på Cuba
- President Kennedy krever rakettene fjernet
- Marineblokade av Cuba
- 13 dager med intens spenning

### Løsning
Kompromiss: Sovjet fjerner rakettene, USA lover å ikke invadere Cuba og fjerner (hemmelig) raketter fra Tyrkia.`,
    },
    {
      id: 'historie-14-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-14-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hvorfor Cuba-krisen regnes som det farligste øyeblikket under den kalde krigen, og hvilke lærdommer den ga.',
        solution: 'Cuba-krisen var farligst fordi: 1) Direkte konfrontasjon - For første gang stod supermaktene direkte mot hverandre militært. 2) Atomvåpen - Rakettene på Cuba kunne nå amerikanske byer på minutter. 3) Eskaleringsfare - Flere hendelser kunne utløst krig (et U-2 fly ble skutt ned, et sovjetisk ubåtmannskap vurderte å bruke atomtorpedo). 4) Begrenset kommunikasjon - Lederne hadde vanskelig for å kommunisere raskt. Lærdommer: 1) Behov for direkte kommunikasjon - "den røde telefonen" ble opprettet. 2) Våpenkontroll ble viktigere - begge sider forsto faren. 3) Diplomati var nødvendig - selv fiender måtte snakke sammen. 4) Brinksmanship (å gå til kanten) var farlig. Krisen paradoksalt nok forbedret kommunikasjon mellom supermaktene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-14-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft konsekvensene av stedfortrederkrigene for landene der de ble utkjempet. Bruk gjerne Korea eller Vietnam som eksempel.',
        solution: 'Konsekvensene for landene var katastrofale: Vietnam: 1) Enorme tap - ca. 3 millioner døde, mange sivile. 2) Miljøødeleggelser - Agent Orange (kjemisk avløving) skadet naturen og mennesker i generasjoner. 3) Infrastruktur ødelagt - byer, veier, broer bombet. 4) Samfunnsødeleggelse - familier splittet, traumer. 5) Langsiktig utvikling hemmet - fattigdom og gjenoppbygging tok tiår. Korea: 1) Landet permanent delt - familier splittet. 2) Nord-Korea isolert og forarmet. 3) Fortsatt militær spenning. 4) Enorme ressurser til forsvar i stedet for utvikling. Generelt: Stedfortrederkrigene påførte den tredje verden enorme lidelser mens supermaktene kjempet ut sine konflikter på andres territorium. Lokale befolkninger betalte prisen for stormaktsrivaliseringen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_14_3: TextbookChapter = {
  id: 'historie-14-3',
  courseId: 'historie',
  chapterNumber: '14.3',
  title: 'Norge i den kalde krigen',
  description: 'NATO-medlemskap og norsk utenrikspolitikk.',
  estimatedMinutes: 50,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  content: [
    {
      id: 'historie-14-3-intro',
      type: 'text',
      content: `## Norge i den kalde krigen

Norge befant seg i en strategisk viktig posisjon under den kalde krigen. Med grense til Sovjetunionen i nord og kontroll over viktige havområder, ble Norge en frontlinjestat i konflikten mellom øst og vest.

Norges valg om å bli medlem av NATO i 1949 var et av de viktigste utenrikspolitiske valgene i moderne norsk historie. Samtidig forsøkte Norge å balansere allianseforpliktelsene med en politikk for å unngå å provosere naboen i øst.`,
    },
    {
      id: 'historie-14-3-def-1',
      type: 'definition',
      title: 'NATO-medlemskapet',
      content: `Norge ble medlem av **NATO (North Atlantic Treaty Organization)** i 1949 som ett av de tolv grunnleggerlandene.

Bakgrunn for medlemskapet:
- Erfaringen fra 1940 - nøytralitet beskyttet ikke
- Sovjetisk press på Finland og Tsjekkoslovakia-kuppet (1948)
- Geografisk nærhet til Sovjet
- USA som garantist for sikkerheten

Artikkel 5: Et angrep på ett medlemsland skal betraktes som angrep på alle.`,
    },
    {
      id: 'historie-14-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-14-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor Norge valgte å bli med i NATO i 1949. Hvilke erfaringer og hendelser påvirket dette valget?',
        solution: 'Norge valgte NATO av flere grunner: 1) 9. april 1940 - Nøytralitetspolitikken hadde feilet, Norge trengte allierte for sikkerhet. 2) Sovjetisk press - Sovjets press på Finland (vinterkriden 1939-40, Porkkalapakten) og kuppet i Tsjekkoslovakia 1948 viste at småstater var sårbare. 3) Geografisk beliggenhet - Grense til Sovjet og strategisk viktige havområder gjorde Norge utsatt. 4) Skandinavisk forsvarsforbund mislyktes - Sverige ville ikke garantere bistand ved angrep. 5) USA som garantist - NATO med USA ga sterkere sikkerhet enn nordisk samarbeid alene. 6) Marshall-hjelpen - Økonomisk samarbeid med Vest hadde allerede knyttet Norge til USA. Valget markerte et brudd med mellomkrigstideens nøytralitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-3-text-2',
      type: 'text',
      content: `## Basepolitikken og selvpålagte restriksjoner

Selv om Norge var NATO-medlem, førte landet en forsiktig politikk for å unngå å provosere Sovjet:

### Basepolitikken (1949)
Norge sa nei til permanente utenlandske baser på norsk jord i fredstid. NATO-tropper og fly kunne øve i Norge, men ikke stasjoneres permanent.

### Atompolitikken (1957)
Norge sa nei til atomvåpen på norsk jord.

### Begrensninger i nord
- Ingen allierte øvelser øst for 24. lengdegrad
- Ingen allierte fly nær sovjetgrensen

Disse selvpålagte restriksjonene var ment å berolige Sovjet og redusere spenningen i nordområdene.`,
    },
    {
      id: 'historie-14-3-def-2',
      type: 'definition',
      title: 'Brobyggingspolitikk',
      content: `**Brobyggingspolitikken** var Norges forsøk på å kombinere NATO-medlemskap med gode relasjoner til Sovjet.

Elementer i brobyggingspolitikken:
- Selvpålagte restriksjoner på alliert aktivitet
- Dialog med Sovjet om nordområdene
- Støtte til avspenning og nedrustning
- Aktiv rolle i FN og fredsdiplomati

Norge ønsket å være en "lojal, men ikke lydig" NATO-alliert.`,
    },
    {
      id: 'historie-14-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-14-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var basepolitikken, og hvorfor valgte Norge denne linjen selv om landet var NATO-medlem?',
        solution: 'Basepolitikken (vedtatt 1949) innebar at Norge sa nei til permanente utenlandske militærbaser i fredstid. Norge valgte denne linjen fordi: 1) Geografisk nærhet til Sovjet - Baser ville øke spenningen og gjøre Norge til mål. 2) Berolige naboen - Ved å vise tilbakeholdenhet ville Norge signalisere at NATO-medlemskapet var defensivt. 3) Nasjonal suverenitet - Mange var ukomfortable med permanent fremmed militært nærvær. 4) Innenrikspolitikk - Basemotstand samlet også deler av venstresiden som var skeptiske til NATO. 5) Forebygge konflikt - Ved å unngå provokasjon håpet Norge å hindre at nordområdene ble en arena for stormaktskonflikt. Politikken ble en balansegang mellom allianseforpliktelser og avspenning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-3-text-3',
      type: 'text',
      content: `## Overvåking og etterretning

Norges beliggenhet gjorde landet viktig for vestlig etterretning:

### Nordområdene
- Sovjet hadde sin nordflåte med atomubåter på Kolahalvøya
- Norge overvåket sovjetisk aktivitet for NATO
- Etterretningssamarbeid med USA og Storbritannia

### Hendelser
- **1960:** U-2-affæren - Et amerikansk spionfly ble skutt ned over Sovjet etter å ha lettet fra Pakistan
- Flere hendelser med sovjetiske ubåter i norske farvann
- Kontinuerlig overvåking av grensen i nord

Norge var en "øyne og ører" for NATO i nord.`,
    },
    {
      id: 'historie-14-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-14-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor var Norge strategisk viktig under den kalde krigen, og hvilken rolle spilte etterretning?',
        solution: 'Norge var strategisk viktig fordi: 1) Geografisk plassering - Grense til Sovjet og kontroll over innløpet til Østersjøen og nordlige Atlanterhavet. 2) Kolahalvøya - Sovjets nordflåte med atomubåter lå like ved Norge, overvåking herfra var avgjørende. 3) GIUK-gapet (Grønland-Island-UK) - Viktig for å spore sovjetiske ubåter. 4) Nordkalotten - Mulig invasjonsrute og rakett-varslingsområde. Etterretningsrollen: Norge var "øyne og ører" for NATO, overvåket sovjetiske militære bevegelser, samlet elektronisk etterretning, og delte informasjon med allierte. Dette gjorde Norge verdifull for NATO, men også til et potensielt mål. Rollen var delvis hemmelig og skapte spenning mellom brobyggingsambisjoner og etterretningssamarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-3-text-4',
      type: 'text',
      content: `## Innenrikspolitiske følger

Den kalde krigen preget også norsk innenrikspolitikk:

### Kommunistfrykten
- NKP (Norges Kommunistiske Parti) ble marginalisert
- Overvåking av kommunister og "radikale elementer"
- Yrkesforbuds-saker i forsvaret og offentlig sektor

### Sikkerhets- og beredskap
- Sivilforsvar og tilfluktsrom
- Beredskapsplaner for krig
- Lagring av NATO-materiell

### Debatt
- EEC/EU-spørsmålet delte Norge
- Atompolitikken var omstridt
- Vietnamkrigen skapte protestbevegelse på 1960-70-tallet`,
    },
    {
      id: 'historie-14-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-14-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft balansen Norge forsøkte å opprettholde mellom NATO-lojalitet og forholdet til Sovjetunionen. Var denne balansen vellykket?',
        solution: 'Norge forsøkte å balansere ved: 1) NATO-lojalitet - Medlemskap, forsvarssamarbeid, etterretning. 2) Berolige Sovjet - Basepolitikk, atompolitikk, restriksjoner i nord. Vurdering av suksess: Positive sider: Norge unngikk å bli en slagmark, opprettholdt rimelige relasjoner med Sovjet (fiskeriavtaler, grensesamarbeid), bidro til avspenning. NATO aksepterte restriksjonene. Negative sider: Sovjet mistenkte likevel Norge for å være USAs forlengede arm. Noen i NATO mente Norge var for forsiktige. Den doble politikken kunne virke motsetningsfull (overvåking + avspenning). Konklusjon: Politikken var sannsynligvis vellykket gitt Norges vanskelige posisjon. Landet forble trygt gjennom hele den kalde krigen uten å bli overkjørt av stormaktene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-14-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan erfaringene fra 9. april 1940 påvirket norsk sikkerhets- og utenrikspolitikk under den kalde krigen.',
        solution: '9. april-erfaringen påvirket norsk politikk fundamentalt: 1) Nøytralitet forkastet - Mellomkrigstideens nøytralitetspolitikk hadde ikke beskyttet Norge. Allianse med sterke garantister (USA/NATO) ble sett som nødvendig. 2) Aldri mer 9. april - Slagordet uttrykte besluttsomheten om at Norge skulle være forberedt og ha allierte. 3) Forsvarsvilje - Større satsing på forsvar, verneplikt og beredskap. 4) Skepsis til løfter - Tyskland hadde lovet å respektere norsk nøytralitet. Nå stolte man på harde sikkerhetsgarantier, ikke løfter. 5) Geopolitisk realisme - Småstater må tilpasse seg stormaktsrealitetene. Samtidig: Erfaringen med okkupasjon ga også motstand mot fremmed militært nærvær (basepolitikken). 9. april ble en formativ erfaring for hele etterkrigsgenerasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_14_4: TextbookChapter = {
  id: 'historie-14-4',
  courseId: 'historie',
  chapterNumber: '14.4',
  title: 'Murens fall og Sovjetunionens oppløsning',
  description: 'Slutten på den kalde krigen.',
  estimatedMinutes: 50,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  content: [
    {
      id: 'historie-14-4-intro',
      type: 'text',
      content: `## Slutten på den kalde krigen (1985-1991)

Den kalde krigen tok slutt raskere og mer fredelig enn noen hadde forventet. På bare seks år gikk verden fra konfrontasjon til samarbeid, Berlinmuren falt, og Sovjetunionen opphørte å eksistere.

Denne dramatiske omveltningen endret verdenskartet og skapte den verdenen vi lever i i dag. Men overgangen skapte også nye utfordringer og konflikter.`,
    },
    {
      id: 'historie-14-4-def-1',
      type: 'definition',
      title: 'Glasnost og perestrojka',
      content: `**Glasnost** (åpenhet) og **perestrojka** (omstrukturering) var reformene som sovjetlederen Mikhail Gorbatsjov innførte fra 1985.

**Glasnost:**
- Større ytringsfrihet
- Åpnere debatt om problemer i samfunnet
- Lettelser i sensur

**Perestrojka:**
- Økonomiske reformer
- Mer markedsøkonomi
- Desentralisering av beslutninger

Reformene var ment å redde kommunismen, men bidro i stedet til dens fall.`,
    },
    {
      id: 'historie-14-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-14-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva glasnost og perestrojka innebar, og hvorfor disse reformene paradoksalt nok bidro til Sovjetunionens fall.',
        solution: 'Glasnost (åpenhet) ga større ytringsfrihet, perestrojka (omstrukturering) innførte økonomiske reformer. Gorbatsjov ville modernisere kommunismen, men reformene bidro til systemets fall fordi: 1) Glasnost avslørte problemer - Kritikk av kommunistpartiet, miljøkatastrofer (Tsjernobyl), historiske overgrep kom fram. Dette undergravde systemets legitimitet. 2) Nasjonalisme våknet - Økt ytringsfrihet lot undertrykte nasjonale bevegelser i Baltikum, Kaukasus og andre steder kreve selvstendighet. 3) Økonomisk kaos - Halvhjertede reformer skapte mangel og frustrasjon uten å levere fordeler. 4) Maktens svekkelse - Når kommunistpartiet ikke lenger kontrollerte informasjonen, mistet det grepet. Gorbatsjov løste opp limet som holdt systemet sammen uten å erstatte det med noe nytt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-4-text-2',
      type: 'text',
      content: `## Revolusjonsåret 1989

1989 ble året da kommunismen falt i Øst-Europa:

### Hendelser
- **Polen:** Frie valg, Solidaritet vinner (juni)
- **Ungarn:** Åpner grensen til Østerrike (mai)
- **Øst-Tyskland:** Berlinmuren faller 9. november
- **Tsjekkoslovakia:** "Fløyelsrevolusjonen" (november)
- **Romania:** Blodig opprør, Ceausescu henrettet (desember)

### Gorbatsjovs rolle
Sovjet grep ikke inn militært slik de hadde gjort i Ungarn (1956) og Tsjekkoslovakia (1968). Gorbatsjov aksepterte at østeuropeerne valgte sin egen vei.`,
    },
    {
      id: 'historie-14-4-def-2',
      type: 'definition',
      title: 'Berlinmurens fall',
      content: `**Berlinmuren** ble bygget i 1961 for å hindre østtyskere fra å flykte til Vest-Berlin. Den 9. november 1989 falt muren.

Bakgrunnen:
- Massedemonstrasjoner i Øst-Tyskland
- Masseflukten via Ungarn og Tsjekkoslovakia
- Forvirring i østtysk ledelse

Den 9. november kunngjorde en østtysk talsmann ved en feil at grensen var åpen. Tusenvis strømmet til, og grensevaktene lot dem passere. Muren var historie.

Murens fall ble symbolet på den kalde krigens slutt.`,
    },
    {
      id: 'historie-14-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-14-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hvordan Berlinmuren falt i 1989 og forklar hvorfor denne hendelsen ble så symbolsk viktig.',
        solution: 'Murens fall 9. november 1989 kom etter måneders protester i Øst-Tyskland og masseflukt via Ungarn. En forvirret pressekonferanse der en talsmann feilaktig sa at grensen var åpen umiddelbart, førte til at tusenvis strømmet til. Grensevaktene lot dem passere. Hendelsen var symbolsk viktig fordi: 1) Muren var den kalde krigens fremste symbol - fysisk bevis på delingen av Europa. 2) Familier hadde vært splittet i 28 år - gjenforeningen var emosjonelt sterk. 3) Den viste at folkets vilje kunne overvinne undertrykkelse. 4) Den var uventet og fredelig - et historisk øyeblikk. 5) Den varslet slutten på ikke bare Øst-Tyskland, men hele det kommunistiske systemet. Bildene av jublende mennesker på muren spredte seg verden rundt og markerte en ny epoke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-4-text-3',
      type: 'text',
      content: `## Tysklands gjenforening

Etter murens fall ble Øst- og Vest-Tyskland gjenforent:

### Prosessen
- **1989:** Muren faller
- **1990:** Frie valg i Øst-Tyskland, enighet om gjenforening
- **3. oktober 1990:** Offisiell gjenforening

### Utfordringer
- Økonomisk ulikhet mellom øst og vest
- "Mauer im Kopf" (muren i hodet) - mentale forskjeller
- Enorme kostnader ved oppgradering av østtysk infrastruktur

### Betydning
Et gjenforent Tyskland ble Europas største økonomi og en sentral aktør i EU og NATO.`,
    },
    {
      id: 'historie-14-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-14-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke utfordringer møtte Tyskland etter gjenforeningen i 1990?',
        solution: 'Tyskland møtte flere utfordringer: 1) Økonomisk gap - Øst-Tyskland var mye fattigere, med utdatert industri og infrastruktur. Kostnaden ved oppgradering var enorm. 2) Arbeidsløshet - Østtyske bedrifter kollapset i konkurranse med vestlige, millioner mistet jobben. 3) Mentale forskjeller ("Mauer im Kopf") - 40 års ulik utvikling hadde skapt ulike holdninger og livserfaringer. 4) "Ostalgie" - Noen østtyskere savnet trygghetselementer fra kommunisttiden. 5) Integrasjon - Statlig byråkrati, rettsvesen og utdanningssystem måtte samkjøres. 6) Stasi-arven - Spørsmål om hvordan håndtere tidligere sikkerhetstjenesteinformanter. Mange utfordringer vedvarer selv i dag, med fortsatte forskjeller mellom øst og vest i økonomi og politiske holdninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-4-text-4',
      type: 'text',
      content: `## Sovjetunionens oppløsning (1991)

To år etter murens fall opphørte Sovjetunionen å eksistere:

### Bakgrunn
- Økonomisk krise og tomme butikkhyller
- Nasjonalistiske bevegelser i republikkene
- Baltikum erklærte uavhengighet (1990)

### Kuppet august 1991
Hardlinere forsøkte statskupp mot Gorbatsjov. Boris Jeltsin ledet motstanden, kuppet mislyktes.

### Oppløsningen
- Ukraina stemte for uavhengighet (desember 1991)
- SUS (Samveldet av uavhengige stater) dannet
- **25. desember 1991:** Gorbatsjov går av, Sovjet opphører

15 nye stater oppstod fra det tidligere Sovjetunionen.`,
    },
    {
      id: 'historie-14-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-14-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft årsakene til Sovjetunionens oppløsning i 1991. Var oppløsningen uunngåelig?',
        solution: 'Årsaker til oppløsningen: 1) Økonomisk krise - Planøkonomien fungerte ikke, levestandarden var langt bak Vesten. 2) Gorbatsjovs reformer - Glasnost og perestrojka løste opp kontrollen uten å skape nytt system. 3) Nasjonalisme - Undertrykte nasjoner i Baltikum, Kaukasus og andre steder krevde frihet. 4) Kommunismens delegitimering - Folk trodde ikke lenger på ideologien. 5) Afghanistan - Den mislykkede krigen (1979-89) tappet ressurser og moral. 6) Reagan-opprustningen - Våpenkappløp tappet sovjetøkonomien. Var det uunngåelig? Noen historikere mener systemets indre motsetninger gjorde kollaps uunngåelig på sikt. Andre mener at med andre ledere eller beslutninger kunne Sovjet reformert seg og overlevd i endret form. Gorbatsjovs rolle var avgjørende - han valgte å ikke bruke vold for å holde imperiet sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-14-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-14-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft konsekvensene av den kalde krigens slutt for verdensordenen. Hva ble bedre, og hvilke nye utfordringer oppstod?',
        solution: 'Positive konsekvenser: 1) Faren for atomkrig mellom supermaktene ble redusert drastisk. 2) Frihet i Øst-Europa - Millioner fikk demokrati og menneskerettigheter. 3) Nedrustning - Våpenarsenaler ble redusert. 4) Europeisk integrasjon - EU kunne utvides østover. 5) Global handel og samarbeid økte. Nye utfordringer: 1) USA som eneste supermakt - "Unipolar" verden uten motvekt. 2) Etniske konflikter - Jugoslavia, Kaukasus, andre steder der kommunismen hadde holdt motsetninger nede. 3) Økonomisk kaos - Overgangen til markedsøkonomi var brutal i mange land. 4) Russisk ydmykelse - La grunnlag for senere nasjonalisme og konflikt. 5) Spredning av våpen - Atomvåpen fra tidligere Sovjet skapte bekymring. Den kalde krigens slutt skapte nye muligheter, men også nye problemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 15: Velferdsstaten Norge
// ============================================================================

export const CHAPTER_HISTORIE_15_1: TextbookChapter = {
  id: 'historie-15-1',
  courseId: 'historie',
  chapterNumber: '15.1',
  title: 'Gjenreisning etter krigen',
  description: 'Norge bygges opp igjen etter 1945.',
  estimatedMinutes: 50,
  competenceGoals: ['velferdsutviklingen i Norge på 1900-tallet'],
  content: [
    {
      id: 'historie-15-1-intro',
      type: 'text',
      content: `## Norge etter krigen

Da freden kom i mai 1945, lå store deler av Norge i ruiner. Særlig Nord-Norge var hardt rammet - der hadde tyskerne brent ned det meste under tilbaketrekningen. Men også resten av landet var preget av fem års okkupasjon med mangel og forsakelser.

Gjenreisningen ble et nasjonalt fellesprosjekt. Med politisk samarbeid, hard arbeidsinnsats og støtte fra utlandet ble Norge gjenoppbygd på forbausende kort tid. Samtidig la etterkrigstiden grunnlaget for den moderne velferdsstaten.`,
    },
    {
      id: 'historie-15-1-def-1',
      type: 'definition',
      title: 'Fellesprogram',
      content: `**Fellesprogrammet** (1945) var et politisk samarbeidsdokument som alle partiene (unntatt NKP) stilte seg bak etter krigen.

Hovedpunkter:
- Gjenreisning av landet
- Utbygging av sosiale ordninger
- Statlig styring av økonomien
- Boligbygging og full sysselsetting

Fellesprogrammet uttrykte enigheten om å bygge en velferdsstat med blandingsøkonomi - et kompromiss mellom sosialisme og kapitalisme.`,
    },
    {
      id: 'historie-15-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-15-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var Fellesprogrammet fra 1945, og hvorfor var det mulig å oppnå så bred politisk enighet etter krigen?',
        solution: 'Fellesprogrammet var et politisk dokument alle partier (unntatt NKP) støttet, med mål om gjenreisning, sosiale ordninger og statlig styring. Bred enighet var mulig fordi: 1) Krigserfaring - Okkupasjonen hadde skapt nasjonal samhørighet på tvers av politiske skillelinjer. 2) Felles fiende - Kampen mot nazismen hadde samlet folk. 3) Felleskapet i motstandskampen - Politikere fra ulike partier hadde samarbeidet. 4) Frykten for splittelse - Mellomkrigstideens politiske konflikter og svake regjeringer ble sett som medvirkende til 1940. 5) Arbeiderpartiets moderering - Partiet aksepterte privat eiendom og demokrati. 6) Borgerlig aksept av velferdsstat - Høyresiden aksepterte mer statlig ansvar. Krisen skapte vilje til kompromiss.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-1-text-2',
      type: 'text',
      content: `## Marshall-hjelpen

USA tilbød økonomisk hjelp til gjenreisningen gjennom **Marshall-planen** (1948-1952).

### Omfang
- Norge mottok ca. 3 milliarder kroner (i datidens verdi)
- Både lån og gaver
- Brukt til import av råvarer, maskiner og mat

### Betydning
- Raskere gjenreisning enn ellers mulig
- Knyttet Norge tettere til Vest og USA
- Bidro til aksept for NATO-medlemskap
- Del av en større vestlig integrasjon

Marshall-hjelpen var både økonomisk støtte og del av den kalde krigens politikk - målet var å hindre kommunismens spredning gjennom å skape velstand.`,
    },
    {
      id: 'historie-15-1-def-2',
      type: 'definition',
      title: 'Blandingsøkonomi',
      content: `**Blandingsøkonomi** er et økonomisk system som kombinerer privat og statlig eierskap, markedsøkonomi og offentlig regulering.

I norsk etterkrigstid innebar dette:
- Privat eierskap i de fleste næringer
- Statlige selskaper i nøkkelsektorer (energi, transport)
- Regulering av priser, kreditt og import
- Aktiv finanspolitikk for å sikre full sysselsetting
- Forhandlinger mellom stat, arbeidsgivere og fagbevegelse

Blandingsøkonomien var et kompromiss mellom ren kapitalisme og kommunistisk planøkonomi.`,
    },
    {
      id: 'historie-15-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-15-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva Marshall-hjelpen var, og drøft dens betydning for Norges gjenreisning og utenrikspolitiske orientering.',
        solution: 'Marshall-hjelpen var amerikansk økonomisk bistand til Vest-Europa 1948-52. Norge mottok ca. 3 milliarder kroner til import av varer som var nødvendige for gjenreisning. Betydning for gjenreisning: 1) Raskere gjenoppbygging enn med egne ressurser alene. 2) Import av maskiner og råvarer som muliggjorde industrialisering. 3) Matforsyninger lettet rasjonering. Utenrikspolitisk betydning: 1) Knyttet Norge til Vesten økonomisk og politisk. 2) Forberedte grunnen for NATO-medlemskap. 3) Etablerte samarbeidsmønster med USA som fortsatte. 4) Var del av kald krig-strategi - velstand skulle hindre kommunisme. Marshall-hjelpen var dermed både økonomisk redning og politisk veivalg som orienterte Norge vestover.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-1-text-3',
      type: 'text',
      content: `## Gjenreisningen i Nord-Norge

Finnmark og Nord-Troms var særlig hardt rammet. Der hadde den tyske tilbaketrekningen høsten 1944 ("den brente jords taktikk") lagt det meste i ruiner.

### Ødeleggelsene
- Ca. 11 000 hus brent ned
- Over 50 000 mennesker tvangsevakuert
- Kirker, skoler, broer og kaier ødelagt

### Gjenreisningen
- Staten overtok hovedansvaret
- Gjenreisningsadministrasjon opprettet
- Standardiserte "gjenreisningshus"
- Fullført rundt 1960

Gjenreisningen demonstrerte statens evne til å mobilisere ressurser for et felles mål.`,
    },
    {
      id: 'historie-15-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-15-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv ødeleggelsene i Nord-Norge under krigen og hvordan gjenreisningen ble organisert.',
        solution: 'Ødeleggelsene skyldtes tysk "brent jords taktikk" under tilbaketrekningen høsten 1944: Ca. 11 000 hus ble brent, over 50 000 mennesker tvangsevakuert, og infrastruktur (kirker, skoler, broer) ødelagt. Gjenreisningen ble organisert ved: 1) Statlig ansvar - Staten tok hovedansvaret gjennom egen gjenreisningsadministrasjon. 2) Standardiserte løsninger - "Gjenreisningshus" med faste tegninger for effektiv bygging. 3) Nasjonal dugnad - Arbeidskraft og materialer ble mobilisert fra hele landet. 4) Prioritering - Boliger og nødvendig infrastruktur først. 5) Fullført rundt 1960 - 15 år tok det før gjenreisningen var fullført. Prosessen viste statens kapasitet til å lede store samfunnsprosjekter og styrket troen på offentlig planlegging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-1-text-4',
      type: 'text',
      content: `## Arbeiderpartiets dominans

Perioden 1945-1965 var preget av Arbeiderpartiets dominerende posisjon:

### Valgresultater
- Rent flertall på Stortinget 1945-1961
- Einar Gerhardsen statsminister i mesteparten av perioden

### Politikk
- Utbygging av velferdsstaten
- Statlig styring av økonomien
- Industrivekst og modernisering
- Full sysselsetting som hovedmål

Arbeiderpartiet kombinerte sosialistisk retorikk med pragmatisk politikk og samarbeid med næringslivet.`,
    },
    {
      id: 'historie-15-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-15-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hvorfor Arbeiderpartiet ble så dominerende i norsk politikk i etterkrigsårene.',
        solution: 'Arbeiderpartiets dominans hadde flere årsaker: 1) Motstandskampen - Partiets ledere (Gerhardsen m.fl.) hadde deltatt i motstandskampen og hadde høy troverdighet. 2) Gjenreisningen - Partiet leverte resultater i form av boligbygging, full sysselsetting og velstandsøkning. 3) Bred appell - Politikken appellerte til både arbeidere og deler av middelklassen. 4) Moderasjon - Partiet var pragmatisk, aksepterte privat eiendom og NATO. 5) Svak opposisjon - Høyresiden var splittet og defensiv etter krigen. 6) Organisasjonsbygging - LO og Arbeiderpartiet hadde tette bånd og god organisasjon. 7) Resultatene - Velferdsstaten og økonomisk vekst ga velgerne gode grunner til å fortsette å stemme på partiet. Dominansen varte til 1960-tallet da nye konfliktlinjer (EF-spørsmålet) oppstod.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-15-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan erfaringene fra krigen og mellomkrigstiden formet norsk politikk i etterkrigsårene.',
        solution: 'Krigserfaring: 1) Nasjonal samling - Motstandskampen skapte fellesskap som lettet politisk samarbeid. 2) Statens rolle - Okkupasjonen viste behov for sterk stat, gjenreisningen krevde statlig ledelse. 3) Sikkerhetspolitikk - Nøytralitetens fallitt førte til NATO-medlemskap. 4) Aldri mer 9. april - Beredskap og forsvar prioritert. Mellomkrigstidserfaring: 1) Massearbeidsløshet - Full sysselsetting ble hovedmål for å unngå gjentakelse. 2) Politisk splittelse - Bred konsensus ble verdsatt etter 1930-tallets konflikter. 3) Økonomisk ustabilitet - Statlig regulering og planlegging for å sikre stabilitet. 4) Sosial uro - Velferdsordninger for å dempe klassekonflikter. Både krig og krise lærte at staten måtte ta større ansvar, og at politisk samarbeid var nødvendig for å unngå katastrofe.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_15_2: TextbookChapter = {
  id: 'historie-15-2',
  courseId: 'historie',
  chapterNumber: '15.2',
  title: 'Velferdsstatens utbygging',
  description: 'Fra fattigforsorg til velferdsstat.',
  estimatedMinutes: 55,
  competenceGoals: ['velferdsutviklingen i Norge på 1900-tallet'],
  content: [
    {
      id: 'historie-15-2-intro',
      type: 'text',
      content: `## Velferdsstaten bygges ut

I årene etter krigen ble den norske velferdsstaten systematisk utbygd. Gamle ordninger fra mellomkrigstiden ble utvidet, og nye ble innført. Målet var å sikre alle borgere en grunnleggende trygghet mot sykdom, alderdom, arbeidsløshet og andre livskriser.

Velferdsstaten var basert på ideen om universelle rettigheter - alle skulle ha lik tilgang til velferdsordninger, uavhengig av inntekt eller bakgrunn. Dette var et brudd med den gamle fattigforsorgen, som var behovsprøvd og stigmatiserende.`,
    },
    {
      id: 'historie-15-2-def-1',
      type: 'definition',
      title: 'Velferdsstat',
      content: `En **velferdsstat** er en stat som tar ansvar for borgernes grunnleggende velferd gjennom offentlige ordninger.

Kjennetegn ved den norske velferdsstaten:
- **Universalitet:** Ordninger for alle, ikke bare de fattige
- **Rettighetsbasert:** Velferd som rett, ikke almisse
- **Skattefinansiert:** Betalt gjennom skatter og avgifter
- **Offentlig styrt:** Staten eller kommunene administrerer

Den nordiske modellen kombinerer velferdsstat med markedsøkonomi og høy sysselsetting.`,
    },
    {
      id: 'historie-15-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-15-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som kjennetegner en velferdsstat og hvordan den skiller seg fra den gamle fattigforsorgen.',
        solution: 'Velferdsstaten kjennetegnes av: 1) Universalitet - Ordninger for alle borgere, ikke bare de fattigste. 2) Rettigheter - Velferd er en rett man har krav på, ikke en almisse. 3) Skattefinansiering - Alle bidrar etter evne, alle får etter behov. 4) Offentlig ansvar - Staten garanterer ytelsene. Forskjell fra fattigforsorgen: Fattigforsorgen var behovsprøvd (man måtte bevise at man var fattig), stigmatiserende (mottakere mistet stemmerett), og lokal (varierende tilbud). Velferdsstaten gir alle like rettigheter uten stigma. For eksempel: Barnetrygd til alle familier vs fattigstøtte kun til de som dokumenterte nød. Overgangen innebar at sosiale ytelser gikk fra å være skam til å være rett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-2-text-2',
      type: 'text',
      content: `## Viktige velferdsreformer

### Barnetrygd (1946)
- Universell ytelse til alle familier med barn
- Utbetalt til mor (viktig for kvinners økonomi)
- Første virkelig universelle velferdsordning

### Folketrygden (1967)
Samlet flere ordninger til ett system:
- Alderspensjon til alle over 67 år
- Uførepensjon ved varig sykdom
- Sykepenger ved korttidsfravær
- Arbeidsledighetstrygd
- Fødselspenger

### Helsevesenet
- Offentlige sykehus og helsevesen utbygd
- Folketrygden dekket store deler av helseutgiftene
- Sykehusene overtatt av staten (2002)`,
    },
    {
      id: 'historie-15-2-def-2',
      type: 'definition',
      title: 'Folketrygden',
      content: `**Folketrygden** (innført 1967) er det norske trygdesystemet som sikrer alle innbyggere økonomisk trygghet.

Folketrygden omfatter:
- **Alderspensjon:** Inntekt i pensjonsalderen
- **Uføretrygd:** Ved varig nedsatt arbeidsevne
- **Sykepenger:** Ved kortvarig sykdom
- **Foreldrepenger:** Ved fødsel og adopsjon
- **Dagpenger:** Ved arbeidsløshet

Folketrygden finansieres gjennom trygdeavgift og arbeidsgivaravgift. Den er basert på opptjente rettigheter kombinert med minstesikring.`,
    },
    {
      id: 'historie-15-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-15-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hva Folketrygden omfatter og forklar hvorfor den regnes som en milepæl i norsk velferdshistorie.',
        solution: 'Folketrygden (1967) omfatter alderspensjon, uføretrygd, sykepenger, arbeidsledighetstrygd og foreldrepenger. Den var en milepæl fordi: 1) Samordning - Den samlet mange tidligere spredte ordninger til ett helhetlig system. 2) Universell dekning - Alle innbyggere var dekket, ikke bare visse yrkesgrupper. 3) Inntektssikring - Ytelsene var delvis knyttet til tidligere inntekt, noe som ga trygghet for middelklassen. 4) Minstesikring - Alle fikk minst en grunnpensjon, uavhengig av tidligere inntekt. 5) Administrativ forenkling - Ett system i stedet for mange. 6) Nasjonalt ansvar - Staten tok ansvar for borgernes trygghet. Folketrygden fullførte den universelle velferdsstaten og ga nordmenn trygghet "fra vugge til grav".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-2-text-3',
      type: 'text',
      content: `## Utdanningseksplosjonen

Etterkrigstiden så en dramatisk utbygging av utdanningssystemet:

### Grunnskolen
- 7-årig folkeskole utvidet til 9-årig grunnskole (1969)
- Obligatorisk for alle
- Standardisert læreplan over hele landet

### Videregående opplæring
- Massiv utbygging av gymnas og yrkesskole
- Fra elite til massetilbud
- Reform 94 ga alle rett til videregående

### Høyere utdanning
- Nye universiteter (Bergen, Trondheim, Tromsø)
- Distriktshøyskoler fra 1970-tallet
- Lånekassen (1947) muliggjorde studier for alle`,
    },
    {
      id: 'historie-15-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-15-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan ble utdanningssystemet utbygd i etterkrigstiden, og hvilken betydning hadde dette for sosial mobilitet?',
        solution: 'Utbyggingen omfattet: 1) Lengre grunnskole - Fra 7 til 9 år, obligatorisk for alle. 2) Videregående - Fra elitetilbud til massetilbud, senere rett for alle. 3) Høyere utdanning - Nye universiteter og høyskoler over hele landet. 4) Lånekassen - Gjorde studier mulig uavhengig av familieøkonomi. Betydning for sosial mobilitet: 1) Flere fra arbeiderklassen kunne ta utdanning og få bedre jobber enn foreldrene. 2) Kvinner fikk økte muligheter - utdanningsrevolusjonen var særlig viktig for kvinners yrkesdeltakelse. 3) Distriktene fikk tilgang - man trengte ikke flytte til Oslo for å studere. 4) Kompetansenivået i befolkningen steg dramatisk. 5) Klasseskillene ble mindre determinerende for livsløp. Utdanningspolitikken var velferdsstatens kanskje viktigste verktøy for utjevning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-2-text-4',
      type: 'text',
      content: `## Boligpolitikken

Staten tok aktivt del i å løse boligmangelen:

### Husbanken (1946)
- Statlig bank for boligfinansiering
- Gunstige lån til boligbygging
- Muliggjorde at vanlige familier kunne eie bolig

### Resultater
- Massiv boligbygging i etterkrigsårene
- Boligstandarden økte dramatisk
- Norge ble et land av selveiere (ca. 80% eier bolig i dag)

### Problemet
- "Drabantbyene" ble kritisert for ensformighet
- Sosial segregering oppstod i noen områder`,
    },
    {
      id: 'historie-15-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-15-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved den norske velferdsstaten.',
        solution: 'Fordeler: 1) Trygghet - Folk kan møte livskriser (sykdom, arbeidsløshet) uten å bli fattige. 2) Likhet - Sosiale forskjeller reduseres, utjevning av levekår. 3) Sosial mobilitet - Utdanning og helse for alle gir like muligheter. 4) Tillit - Høy tillit i samfunnet fordi alle bidrar og alle får noe. 5) Produktivitet - Trygge arbeidstakere er mer produktive, villige til å ta risiko. Ulemper: 1) Høyt skattenivå - Kan redusere arbeidsincentiver og innovasjon. 2) Byråkrati - Stor offentlig sektor kan bli tungrodd. 3) Avhengighet - Noen mener generøse ytelser skaper passivitet. 4) Kostbart - Vanskelig å opprettholde med aldrende befolkning. 5) Rigiditet - Vanskelig å reformere etablerte rettigheter. Velferdsstaten er en balansegang mellom trygghet og incentiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-15-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan velferdsstaten endret forholdet mellom stat og borger sammenlignet med tidligere tider.',
        solution: 'Tidligere forhold: 1) Stat-borger = undersått-øvrighet - Staten krevde skatt og militærtjeneste, ga lite tilbake. 2) Fattigforsorg var ydmykende - Mottakere mistet stemmerett. 3) Privat ansvar - Familie, kirke, veldedighet tok seg av de svake. 4) Stat som nattvekterstat - Kun politi, forsvar, rettsvesen. Med velferdsstaten: 1) Sosial kontrakt - Borgere betaler skatt og får velferdstjenester tilbake. 2) Rettigheter - Velferd er en rett, ikke en almisse. 3) Statlig ansvar - Staten garanterer borgernes trygghet. 4) Borgeridentitet - Man er statsborger med rettigheter og plikter. 5) Demokratisk legitimitet - Velferdsstaten styrker demokratiet ved å gi alle en interesse i systemet. Forholdet ble mer likeverdig og gjensidig - staten tjener borgerne, borgerne støtter staten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_15_3: TextbookChapter = {
  id: 'historie-15-3',
  courseId: 'historie',
  chapterNumber: '15.3',
  title: 'Oljen og det moderne Norge',
  description: 'Oljealderen og det norske oljeeventyret.',
  estimatedMinutes: 50,
  competenceGoals: ['velferdsutviklingen i Norge på 1900-tallet'],
  content: [
    {
      id: 'historie-15-3-intro',
      type: 'text',
      content: `## Oljeeventyret

I 1969 ble det funnet olje på Ekofisk-feltet i Nordsjøen. Dette var starten på det norske oljeeventyret som skulle forvandle Norge fra et relativt fattig land til et av verdens rikeste.

Oljerikdommen kom ikke av seg selv. Den var resultatet av kloke politiske beslutninger om hvordan ressursene skulle forvaltes. Norge valgte en annen vei enn mange andre oljerike land, og unngikk dermed den såkalte "ressursforbannelsen" der oljerikdom fører til korrupsjon og økonomisk skjevutvikling.`,
    },
    {
      id: 'historie-15-3-def-1',
      type: 'definition',
      title: 'De ti oljebud',
      content: `**De ti oljebud** (1971) var prinsipper vedtatt av Stortinget for forvaltning av oljeressursene.

Hovedprinsipper:
1. Nasjonal styring og kontroll med aktiviteten
2. Oljeressursene skal komme hele samfunnet til gode
3. Utbygging skal bidra til å utvikle norsk industri
4. Utviklingen skal ta hensyn til eksisterende næringer (fiske)
5. Hensynet til miljø og sikkerhet skal være sentralt
6. Staten skal engasjere seg direkte i virksomheten (Statoil)

De ti oljebud sikret at fellesskapet fikk en stor del av oljeinntektene.`,
    },
    {
      id: 'historie-15-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-15-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var "de ti oljebud" og hvilken betydning hadde disse prinsippene for norsk oljeforvaltning?',
        solution: 'De ti oljebud (1971) var prinsipper vedtatt av Stortinget for å sikre nasjonal kontroll med oljeressursene. Hovedpunkter var nasjonal styring, at ressursene skulle komme hele samfunnet til gode, utvikling av norsk industri, hensyn til fiske og miljø, og direkte statlig engasjement. Betydningen: 1) Norge unngikk at utenlandske selskaper tok all profitten. 2) Staten fikk store inntekter gjennom skatter, avgifter og eierskap. 3) Norsk leverandørindustri ble utviklet. 4) Miljø og sikkerhet ble prioritert (selv om ulykker skjedde). 5) Grunnlaget for senere fondsoppsparing ble lagt. Oljebuda representerte en bred politisk enighet om at oljerikdommen tilhørte fellesskapet, ikke bare oljeselskapene. Dette var avgjørende for at Norge ble et velstående oljeland.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-3-text-2',
      type: 'text',
      content: `## Statoil og statlig engasjement

Staten engasjerte seg direkte i oljevirksomheten:

### Statoil (1972)
- Statlig oljeselskap opprettet
- Skulle sikre statlig ekspertise og kontroll
- Ble et av verdens største oljeselskaper
- Delvis privatisert i 2001 (nå Equinor)

### Andre virkemidler
- **Høye skatter:** Oljeselskapene betaler over 70% skatt
- **SDØE:** Statens direkte økonomiske engasjement i felt
- **Konsesjonssystem:** Staten kontrollerer hvem som får lete og utvinne

Kombinasjonen sikret at mesteparten av verdiskapingen forble i Norge.`,
    },
    {
      id: 'historie-15-3-def-2',
      type: 'definition',
      title: 'Oljefondet',
      content: `**Statens pensjonsfond utland** (populært kalt oljefondet) ble opprettet i 1990 for å forvalte Norges oljeinntekter.

Hvordan fungerer det:
- Statens oljeinntekter settes inn i fondet
- Pengene investeres i utlandet (aksjer, obligasjoner, eiendom)
- Kun avkastningen (ca. 3% årlig) brukes over statsbudsjettet

Formål:
- Bevare rikdommen for fremtidige generasjoner
- Unngå "hollandsk syke" (overoppheting av økonomien)
- Sikre langsiktig bærekraft når oljen tar slutt

Per 2024 er fondet verdens største statlige investeringsfond.`,
    },
    {
      id: 'historie-15-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-15-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvordan oljefondet fungerer og drøft hvorfor Norge valgte denne måten å forvalte oljerikdommen på.',
        solution: 'Oljefondet mottar statens oljeinntekter og investerer dem i utlandet. Kun avkastningen (ca. 3% årlig, "handlingsregelen") brukes over statsbudsjettet. Norge valgte denne modellen fordi: 1) Unngå overoppheting - Å bruke alle oljepengene med en gang ville drevet opp priser, lønninger og kronekurs, og skadet konkurranseevnen til annen industri ("hollandsk syke"). 2) Generasjonsrettferdighet - Oljen er en engangsgave som tilhører også fremtidige generasjoner. 3) Stabilitet - Oljeprisene svinger voldsomt; fondet gir stabil finansiering av velferdsstaten. 4) Bufferfunksjon - Fondet kan brukes i kriser (som under Covid-19). 5) Investering utenlands hindrer kronestyrking. Fondskonstruksjonen er internasjonalt anerkjent som et forbilde for ressursforvaltning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-3-text-3',
      type: 'text',
      content: `## Oljerikdommens konsekvenser

Oljen forandret Norge fundamentalt:

### Positive konsekvenser
- Enorm velstandsøkning
- Finansiering av velferdsstat og infrastruktur
- Høyteknologisk industri utviklet
- Arbeidsplasser langs kysten

### Utfordringer
- Sårbarhet for oljeprissving
- Andre næringer taper i konkurranse om arbeidskraft
- Miljø- og klimautfordringer ved fossil energi
- Omstilling til en tid etter oljen

### Det norske paradokset
Norge tjener penger på å eksportere fossil energi som bidrar til klimaendringer, samtidig som landet ønsker å være en klimanasjon.`,
    },
    {
      id: 'historie-15-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-15-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft positive og negative konsekvenser av oljerikdommen for det norske samfunnet.',
        solution: 'Positive konsekvenser: 1) Velstand - Norge ble et av verdens rikeste land. 2) Velferdsstat - Oljefondet finansierer velferdstjenester. 3) Høyteknologi - Oljebransjen utviklet norsk ingeniørkompetanse. 4) Arbeidsplasser - Titusener jobber i oljerelatert virksomhet. 5) Distriktsutvikling - Aktivitet langs kysten. Negative konsekvenser: 1) "Hollandsk syke" - Høyt lønnsnivå svekker annen industri. 2) Oljedependens - Økonomien er sårbar for oljeprissving. 3) Klimaparadoks - Norge tjener på fossil energi som skader klimaet. 4) Omstillingsutfordring - Hva gjør Norge når oljen tar slutt? 5) Urettferdighet - Noen mener pengene er ufortjent flaks. Oljerikdommen er en gave, men den kommer med forpliktelser og utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-3-text-4',
      type: 'text',
      content: `## Fra industrisamfunn til kunnskapssamfunn

Parallelt med oljealderen gjennomgikk Norge en omfattende samfunnsendring:

### Økonomisk omstilling
- Tradisjonell industri nedbygget (tekstil, verft)
- Tjenesteytende næringer vokste
- Teknologi og kunnskapsnæringer ble viktigere

### Sosiale endringer
- Kvinners yrkesdeltakelse økte dramatisk
- Utdanningsnivået steg
- Urbanisering fortsatte
- Innvandring forandret befolkningssammensetningen

### Det moderne Norge
Norge gikk fra å være et relativt fattig jordbruks- og industriland til å bli en av verdens rikeste kunnskaps- og serviceøkonomier.`,
    },
    {
      id: 'historie-15-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-15-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft "det norske paradokset" - at Norge tjener penger på fossil energi samtidig som landet ønsker å være en klimanasjon.',
        solution: 'Det norske paradokset innebærer: 1) Norge eksporterer olje og gass som bidrar til klimautslipp globalt. 2) Samtidig fremstiller Norge seg som en klimanasjon med høye ambisjoner. 3) Oljefondet investerer i selskaper verden over, inkludert fossil energi. Ulike syn: Forsvarere mener: Norsk gass er renere enn kull og hjelper overgang. Oljefondet trekker seg ut av de verste klimaselskapene. Andre land ville utvinnet om ikke Norge gjorde det. Kritikere mener: Det er hyklerisk å snakke om klima mens man tjener på olje. Norge bør la oljen ligge. Fondet bør utelukke all fossil energi. Paradokset gjenspeiler reelle dilemmaer: Hvordan omstille seg uten å miste velstanden? Har rike land særlig ansvar? Finnes det "god" fossil energi? Dette er spørsmål Norge må håndtere i årene fremover.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-15-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan Norge kan forberede seg på en fremtid der olje- og gassinntektene blir mindre.',
        solution: 'Utfordringen: Olje og gass er ikke-fornybare ressurser, og verden må redusere fossil energibruk for klimaets skyld. Mulige strategier: 1) Oljefondet - Avkastningen kan finansiere velferden, men krever at fondet vokser videre. 2) Kompetanseoverføring - Offshore-teknologi kan brukes til havvind og havbruk. 3) Ny industri - Grønn teknologi, batterier, hydrogen, fiskeoppdrett. 4) Utdanning - Investere i kunnskap som ikke er oljeavhengig. 5) Innovasjon - Støtte nye næringer og grundere. 6) Effektivisering - Offentlig sektor må bli mer produktiv. Utfordringer: Høyt lønnsnivå gjør det vanskelig å konkurrere. Velferdsstaten er kostbar. Politisk vilje til omstilling kan mangle. Norge har en historisk sjanse til å bruke oljerikdommen til å forberede en bærekraftig fremtid, men det krever langsiktig planlegging og vilje til endring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_15_4: TextbookChapter = {
  id: 'historie-15-4',
  courseId: 'historie',
  chapterNumber: '15.4',
  title: 'Likestilling og sosiale reformer',
  description: 'Kampen for likestilling og sosiale rettigheter.',
  estimatedMinutes: 50,
  competenceGoals: ['myndiggjøring og frigjøring - norsk og samisk historie'],
  content: [
    {
      id: 'historie-15-4-intro',
      type: 'text',
      content: `## Kampen for likestilling

Selv om Norge fikk allmenn stemmerett for kvinner i 1913, tok det mange tiår før likestilling ble en realitet i praksis. Fra 1970-tallet ble kampen for kvinners rettigheter intensivert, og en rekke reformer endret norsk samfunnsliv fundamentalt.

Likestillingskampen handlet om mer enn formelle rettigheter. Den handlet om økonomisk selvstendighet, retten til å bestemme over egen kropp, lik lønn for likt arbeid, og muligheten til å kombinere familie og yrkesliv.`,
    },
    {
      id: 'historie-15-4-def-1',
      type: 'definition',
      title: 'Nyfeminismen',
      content: `**Nyfeminismen** (eller "den nye kvinnebevegelsen") var kvinnekampen som vokste fram fra slutten av 1960-tallet.

Kjennetegn:
- Radikale krav om grunnleggende samfunnsendringer
- "Det personlige er politisk" - private spørsmål som arbeidsdeling i hjemmet ble politiske
- Slagord som "frigjøring" og "kvinnefrigjøring"
- Organisasjoner som Nyfeministene og Kvinnefronten

Nyfeminismen var del av en internasjonal bevegelse og var inspirert av studentopprøret i 1968.`,
    },
    {
      id: 'historie-15-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-15-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegnet nyfeminismen fra 1970-tallet, og hvordan skilte den seg fra den tidligere kvinnebevegelsen?',
        solution: 'Nyfeminismen skilte seg fra tidligere kvinnebevegelse på flere måter: 1) Radikale krav - Ikke bare formell likestilling, men grunnleggende samfunnsendring. 2) "Det personlige er politisk" - Privat sfære (arbeidsdeling i hjemmet, seksualitet, kropp) ble politiske spørsmål. 3) Bred agenda - Abort, barnehager, vold mot kvinner, pornografi, likelønn, representasjon. 4) Organisasjonsformer - Grasrotbevegelser, bevisstgjøringsgrupper, aksjoner. 5) Ideologisk mangfold - Fra liberal til sosialistisk feminisme. Tidligere kvinnebevegelse (1880-1920) fokuserte hovedsakelig på formelle rettigheter som stemmerett og tilgang til utdanning. Nyfeminismen gikk dypere og utfordret hele kjønnsordningen i samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-4-text-2',
      type: 'text',
      content: `## Viktige likestillingsreformer

### Abortloven (1978)
- Selvbestemt abort inntil 12. uke
- Kvinner fikk retten til å bestemme over egen kropp
- Svært omstridt, men har bestått

### Likestillingsloven (1978)
- Forbud mot diskriminering på grunnlag av kjønn
- Likestillingsombud opprettet
- Regler om kjønnsbalanse i styrer (fra 2003)

### Barnehageutbygging
- Massiv utbygging fra 1970-tallet
- Muliggjorde kvinners yrkesdeltakelse
- Full barnehagedekning mål fra 2000-tallet

### Foreldrepermisjon
- Utvidet over tid
- Fedrekvote (1993) sikret at også menn tok permisjon`,
    },
    {
      id: 'historie-15-4-def-2',
      type: 'definition',
      title: 'Fedrekvoten',
      content: `**Fedrekvoten** (innført 1993) er en del av foreldrepermisjonen som er forbeholdt far.

Formål:
- Sikre at også fedre tar ut permisjon
- Styrke fars rolle i barns oppvekst
- Fremme likestilling i arbeidslivet

Utvikling:
- 1993: 4 uker
- Senere utvidet til 15 uker (per 2024)
- Hvis far ikke tar ut, forfaller kvoten

Fedrekvoten var en norsk nyvinning som har inspirert andre land.`,
    },
    {
      id: 'historie-15-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-15-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvordan barnehageutbygging og fedrekvote har bidratt til likestilling i Norge.',
        solution: 'Barnehageutbyggingens betydning: 1) Muliggjorde at mødre kunne jobbe - før måtte kvinner ofte velge mellom barn og karriere. 2) Profesjonell omsorg - Barn fikk pedagogisk tilbud, ikke bare "oppbevaring". 3) Delt ansvar - Barneomsorg ble et samfunnsansvar, ikke bare familiens. 4) Økonomisk - Rimelige barnehager gjorde det lønnsomt for begge foreldre å jobbe. Fedrekvotens betydning: 1) Normendring - Fedre tar nå ut permisjon som en selvfølge. 2) Tilknytning - Barn får sterkere bånd til far. 3) Arbeidslivseffekt - Arbeidsgivere må regne med at også menn tar permisjon. 4) Hjemmejobben - Fedre lærer omsorgskompetanse. Begge ordninger viser at politikk kan endre kjønnsmønstre. De har bidratt til at Norge har høy kvinnelig yrkesdeltakelse og relativt høy fruktbarhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-4-text-3',
      type: 'text',
      content: `## Kvinners yrkesdeltakelse

Utviklingen har vært dramatisk:

### 1960-tallet
- De fleste gifte kvinner var hjemmeværende
- "Husmorsidealet" dominerte
- Yrkesaktive kvinner var ofte ugifte

### 2020-tallet
- Over 75% av kvinner er yrkesaktive
- Blant verdens høyeste kvinnelige yrkesdeltakelse
- Fortsatt noen forskjeller i lønn og yrkesvall

### Utfordringer som gjenstår
- Lønnsgap på ca. 12-14%
- Kjønnsdelt arbeidsmarked (kvinner i omsorg, menn i teknikk)
- Få kvinner i topplederstillinger
- "Glasstaket" - usynlige barrierer for kvinner`,
    },
    {
      id: 'historie-15-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-15-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv utviklingen i kvinners yrkesdeltakelse fra 1960-tallet til i dag, og forklar hva som muliggjorde denne endringen.',
        solution: 'Utviklingen: 1960-tallet: Flertallet av gifte kvinner var hjemmeværende, husmorsidealet dominerte. 2020-tallet: Over 75% av kvinner er yrkesaktive, blant verdens høyeste. Hva muliggjorde endringen: 1) Barnehageutbygging - Omsorgsansvaret ble delt med samfunnet. 2) Utdanning - Kvinner fikk høyere utdanning og kvalifiserte seg til jobber. 3) Permisjonsordninger - Muliggjorde å kombinere barn og jobb. 4) Likestillingslovgivning - Forbud mot diskriminering. 5) Holdningsendring - "Tobarnssystemet" og yrkesaktive mødre ble normalt. 6) Økonomisk nødvendighet - Høyere boligpriser og levestandard krevde to inntekter. 7) Tjenestesektoren vokste - Nye jobber som passet kvinner. Dette var en "stille revolusjon" som fundamentalt endret norsk samfunn på én generasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-4-text-4',
      type: 'text',
      content: `## Andre sosiale reformer

Likestillingskampen inspirerte også andre grupper:

### Homofiles rettigheter
- Homofili avkriminalisert (1972)
- Partnerskapsloven (1993)
- Felles ekteskapslov (2008)
- Fra stigma til aksept på 50 år

### Funksjonshemmedes rettigheter
- Fra institusjon til integrering
- Ansvarsreformen (1991) - HVPU-institusjonene nedlagt
- Tilrettelegging og universell utforming
- FN-konvensjon ratifisert (2013)

### Barns rettigheter
- Fysisk avstraffelse forbudt (1987)
- Barneombud opprettet (1981)
- Barnekonvensjonen innlemmet i norsk lov`,
    },
    {
      id: 'historie-15-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-15-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hvordan holdningene til homofili har endret seg i Norge fra 1970-tallet til i dag, og hvilken rolle lovgivning har spilt.',
        solution: 'Holdningsendring: 1970-tallet: Homofili var tabubelagt, mange skjulte sin legning, sett som sykdom eller avvik. 2020-tallet: Bred aksept, åpne homofile i alle samfunnslag, Pride-feiringer, likekjønnet ekteskap. Lovgivningens rolle: 1) Avkriminalisering (1972) - Signaliserte at homofili ikke var forbudt. 2) Antidiskrimineringsbestemmelser - Beskyttet mot diskriminering. 3) Partnerskapsloven (1993) - Anerkjente homofile forhold juridisk. 4) Felles ekteskapslov (2008) - Full likestilling i ekteskapsrett. 5) Adopsjon - Homofile par fikk adoptere. Lovene både reflekterte og drev holdningsendring. Da staten anerkjente homofiles rettigheter, signaliserte det at dette var akseptabelt. Samtidig kom lovene fordi holdningene allerede var i endring. Det er et samspill mellom lov og holdninger der begge påvirker hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-15-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-15-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om Norge i dag er et likestilt samfunn. Hvilke utfordringer gjenstår?',
        solution: 'Norge er kommet langt: 1) Høy kvinnelig yrkesdeltakelse. 2) Likestilling i lovverket. 3) God representasjon av kvinner i politikken. 4) Fedrekvote og barnehagedekning. 5) Holdninger har endret seg fundamentalt. Utfordringer som gjenstår: 1) Lønnsgap på 12-14% - Kvinner tjener fortsatt mindre. 2) Kjønnsdelt arbeidsmarked - Kvinner dominerer i omsorg/undervisning, menn i teknologi. 3) Få kvinner i toppjobber - "Glasstaket" eksisterer fortsatt. 4) Vold og overgrep - Kvinner er mer utsatt for vold i nære relasjoner. 5) Ulik arbeidsdeling hjemme - Kvinner gjør fortsatt mest husarbeid. 6) Deltid - Mange kvinner jobber deltid, ofte ufrivillig. Norge er blant verdens mest likestilte land, men full likestilling er ikke oppnådd. Formell likhet i lov betyr ikke automatisk reell likhet i praksis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 16: Norsk og samisk identitet
// ============================================================================

export const CHAPTER_HISTORIE_16_1: TextbookChapter = {
  id: 'historie-16-1',
  courseId: 'historie',
  chapterNumber: '16.1',
  title: 'Nasjonsbygging og identitet',
  description: 'Norsk nasjonal identitet i historisk perspektiv.',
  estimatedMinutes: 50,
  competenceGoals: ['nasjonal identitet i Norge'],
  content: [
    {
      id: 'historie-16-1-intro',
      type: 'text',
      content: `## Norsk nasjonal identitet

Hva er det som gjør oss til nordmenn? Nasjonal identitet er ikke noe naturgitt - den er skapt gjennom historiske prosesser. I dette kapittelet skal vi se på hvordan norsk nasjonal identitet har blitt formet og forandret gjennom tiden.

Norge ble selvstendig i 1905, men nasjonsbyggingen begynte allerede på 1800-tallet. Nasjonalromantikerne søkte etter det "ekte norske" i folkekultur, natur og historie. Denne prosessen skapte symboler og fortellinger som fortsatt preger vår oppfatning av hva det vil si å være norsk.`,
    },
    {
      id: 'historie-16-1-def-1',
      type: 'definition',
      title: 'Nasjonalisme',
      content: `**Nasjonalisme** er ideen om at verden er delt inn i nasjoner, og at hver nasjon bør ha sin egen stat.

Kjennetegn ved nasjonalisme:
- En nasjon defineres ofte gjennom felles språk, kultur, historie
- Nasjonalisme skaper lojalitet til "nasjonen" fremfor andre fellesskap
- Den kan være inkluderende (statsborgerskap) eller ekskluderende (etnisitet)
- Nasjonalisme var en drivkraft bak 1800-tallets nasjonsbygging

I Norge var nasjonalismen viktig for selvstendigheten i 1905 og for å skape felles identitet i en ung nasjon.`,
    },
    {
      id: 'historie-16-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-16-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva nasjonalisme er og drøft hvordan nasjonalismen påvirket Norge på 1800-tallet.',
        solution: 'Nasjonalisme er ideen om at verden består av nasjoner med felles språk, kultur og historie, og at hver nasjon bør styre seg selv. I Norge på 1800-tallet: 1) Selvstendighetskrav - Nasjonalismen ga legitimitet til krav om frigjøring fra unionen med Sverige. 2) Kulturell bevisstgjøring - Nasjonalromantikerne samlet folkeeventyr (Asbjørnsen og Moe), folkemusikk, og søkte det "ekte norske" i bondekulturen. 3) Språkstrid - Landsmål/nynorsk ble utviklet som et "norskere" alternativ til dansk-norsk. 4) Historieskriving - Fokus på vikingtid og middelalder som Norges storhetstid. 5) Symboler - Flagg, bunad, nasjonaldag ble viktige identitetsmarkører. Nasjonalismen forente nordmenn i et fellesskap og mobiliserte for selvstendighet, men den definerte også hvem som var "ekte" norske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-1-text-2',
      type: 'text',
      content: `## Nasjonalromantikken

På 1800-tallet søkte kunstnere og intellektuelle etter det særegent norske:

### Folkekultur
- Asbjørnsen og Moe samlet folkeeventyr
- Landstad og Lindeman samlet folkeviser
- Bondekulturen ble idealisert som "urnorsk"

### Kunst og litteratur
- Malere som Tidemand og Gude viste norsk natur og folkeliv
- Forfattere som Wergeland og Bjørnson skapte nasjonale verk
- Grieg brukte folkemusikk i sin kunstmusikk

### Historie
- Vikingtiden og middelalderen ble fremhevet
- Fokus på Norges storhetstid før unionen med Danmark
- Snorres kongesagaer ble gjenoppdaget`,
    },
    {
      id: 'historie-16-1-def-2',
      type: 'definition',
      title: 'Forestilte fellesskap',
      content: `**Forestilte fellesskap** er et begrep fra Benedict Anderson som beskriver hvordan nasjoner er sosiale konstruksjoner.

Ideen:
- En nasjon er for stor til at alle kan kjenne hverandre personlig
- Følelsen av tilhørighet er derfor "forestilt" - basert på forestillingen om et fellesskap
- Medier (aviser, bøker) og symboler (flagg, nasjonalsang) skaper og vedlikeholder forestillingen

Dette betyr ikke at nasjoner er "falske", men at de er menneskeskapte og endrer seg over tid.`,
    },
    {
      id: 'historie-16-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-16-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar begrepet "forestilte fellesskap" og drøft hvordan Norge ble et slikt forestilt fellesskap.',
        solution: 'Forestilte fellesskap betyr at nasjoner er for store til personlig kjennskap - tilhørigheten baseres på en forestilling om felles trekk. Norge ble et forestilt fellesskap gjennom: 1) Felles historie - Fortellingen om vikingtid, middelalderkonger og dansketiden skapte et felles narrativ. 2) Symboler - Flagg, bunad, 17. mai, "Ja, vi elsker" skapte gjenkjennelige symboler. 3) Språk - Språkstrid og målsak skapte fokus på "norsk" språk. 4) Medier - Aviser, bøker, senere radio/TV spredte felles referanser. 5) Utdanning - Felles pensum i historie og norsk skapte felles kunnskap. 6) Kontrast til andre - Definisjonen av "norsk" ble delvis til i motsetning til dansk og svensk. Nasjonen er "forestilt" fordi den ikke eksisterer naturlig, men skapes gjennom aktiv kulturell og politisk virksomhet. Likevel oppleves fellesskapet som reelt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-1-text-3',
      type: 'text',
      content: `## Norsk identitet i forandring

Norsk nasjonal identitet har ikke vært statisk:

### Før 1905
- Fokus på å definere det "norske" i kontrast til dansk og svensk
- Bondekulturen som kjernen i norsk identitet
- Språkstrid mellom dansk-norsk og landsmål

### 1905-1945
- Selvstendighet ga nytt innhold til nasjonen
- Industri og modernisering forandret samfunnet
- Okkupasjonen styrket nasjonal samhørighet

### Etterkrigstiden
- Velferdsstat og likhet ble del av identiteten
- Norge som "fredsnasjon" og bistandsland
- Oljenasjonen og velstand

### I dag
- Innvandring utfordrer tradisjonelle definisjoner
- Globalisering og europeisk integrasjon
- Samisk og minoritetenes plass i det norske`,
    },
    {
      id: 'historie-16-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-16-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv hvordan innholdet i norsk nasjonal identitet har forandret seg fra 1800-tallet til i dag.',
        solution: '1800-tallet: Identitet definert gjennom bondekultur, natur, vikinghistorie, og kontrast til Danmark/Sverige. Bunader, folkeeventyr og "det urnorske". Etter 1905: Selvstendigheten fylte identiteten med nytt innhold. Industrialisering og modernisering supplerte bondeidealene. Etterkrigstid: Velferdsstaten, likhet og felleskap ble sentrale verdier. Norge som "fredsnasjon" og bistandsland ga internasjonal identitet. Oljenasjonen skapte ny velstand og selvtillit. I dag: Identiteten utfordres av mangfold - innvandring, samiske rettigheter, europeisk integrasjon. Debatt om hvem som er "norsk" og hva det betyr. Kontinuitet: Noen elementer vedvarer - 17. mai, naturen, friluftsliv, "likhetskulturen". Men innholdet er ikke fast - det forhandles og endres kontinuerlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-1-text-4',
      type: 'text',
      content: `## Kritikk av nasjonsbyggingen

Nasjonsbyggingen hadde også problematiske sider:

### Ekskludering
- Samene ble ikke regnet med i nasjonsprosjektet
- Kvener og andre minoriteter ble marginalisert
- "Det norske" ble definert snevert

### Homogenisering
- Nasjonsbyggingen la vekt på likhet og enhet
- Lokale og regionale forskjeller ble nedtonet
- Avvik fra "det norske" ble sett negativt

### Historiebruk
- Selektiv bruk av historien - vikingtiden fremhevet, dansketiden nedvurdert
- Myter og fortellinger som ikke alltid stemte med virkeligheten
- Nasjonale helter ble idealisert`,
    },
    {
      id: 'historie-16-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-16-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hvordan den norske nasjonsbyggingen på 1800-tallet bidro til å marginalisere samer og andre minoriteter.',
        solution: 'Nasjonsbyggingen marginaliserte minoriteter fordi: 1) Definisjon av "norsk" - Det norske ble knyttet til bondekultur, kristendom og norsk/dansk språk. Samisk kultur passet ikke inn. 2) Homogeniseringside - Nasjonen skulle være enhetlig, mangfold ble sett som trussel. 3) Evolusjonistisk tenkning - Samene ble sett som "primitive" som burde "utvikles" til nordmenn. 4) Territoriekrav - Samenes bruk av land kolliderte med statens interesser. 5) Språkideologi - Ett nasjonalt språk var idealet, samisk ble sett som hinder. 6) Rasistiske ideer - Biologisk rasisme ga vitenskapelig legitimitet til diskriminering. Nasjonsbyggingen skapte et "vi" som aktivt ekskluderte dem som var annerledes. Minoritetene ble enten usynliggjort eller definert som problem som måtte løses gjennom assimilering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-16-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hva det vil si å være norsk i dag. Er det mulig å definere en felles norsk identitet i et mangfoldig samfunn?',
        solution: 'Utfordringen: Norge er mer mangfoldig enn noen gang - innvandring, globalisering, samiske rettigheter. Tradisjonelle definisjoner (etnisitet, kultur, religion) passer ikke alle som bor her. Ulike syn: Noen mener nasjonal identitet bør baseres på statsborgerskap og felles verdier (demokrati, likestilling, menneskerettigheter). Andre mener kulturelt fellesskap (språk, tradisjoner, historie) er nødvendig. Noen frykter at mangfoldet svekker samholdet. Mulige løsninger: En inkluderende identitet som er åpen for nye borgere, samtidig som den anerkjenner historisk kontinuitet. Plass til ulike måter å være norsk på - samisk, nynorsk, innvandrer. Felles verdier fremfor felles opphav. Balanse mellom tradisjon og fornyelse. Svaret er ikke gitt - det forhandles kontinuerlig i den offentlige samtalen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_16_2: TextbookChapter = {
  id: 'historie-16-2',
  courseId: 'historie',
  chapterNumber: '16.2',
  title: 'Fornorskingspolitikk og oppgjør',
  description: 'Assimileringspolitikken overfor samer og minoriteter.',
  estimatedMinutes: 55,
  competenceGoals: ['myndiggjøring og frigjøring - norsk og samisk historie'],
  content: [
    {
      id: 'historie-16-2-intro',
      type: 'text',
      content: `## Fornorskingspolitikken

Fra midten av 1800-tallet og frem til 1960-tallet førte den norske staten en aktiv politikk for å assimilere samer, kvener og andre minoriteter. Målet var at alle som bodde i Norge skulle bli norske i språk og kultur. Denne politikken påførte minoritetsbefolkningene store tap av språk, kultur og identitet.

Fornorskingspolitikken er et mørkt kapittel i norsk historie. I dag har Norge offisielt erkjent uretten og forsøker å rette opp skadene, men virkningene av politikken merkes fortsatt.`,
    },
    {
      id: 'historie-16-2-def-1',
      type: 'definition',
      title: 'Fornorskingspolitikk',
      content: `**Fornorskingspolitikk** var statens systematiske forsøk på å assimilere samer, kvener og andre minoriteter til norsk språk og kultur.

Virkemidler:
- **Skolen:** Samisk og kvensk språk forbudt, internatdrift
- **Jordsalg:** Krav om norsk språk for å kjøpe jord (Jordsalgsloven 1902)
- **Kirken:** Norsk som eneste kirkespråk
- **Holdningsskaping:** Samisk kultur fremstilt som mindreverdig

Politikken var offisiell statspolitikk fra ca. 1850 til ca. 1960.`,
    },
    {
      id: 'historie-16-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-16-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var fornorskingspolitikken, og hvilke virkemidler brukte staten?',
        solution: 'Fornorskingspolitikken var statens systematiske forsøk på å gjøre samer og kvener til "nordmenn" ved å få dem til å skifte språk og kultur. Virkemidler: 1) Skolen - Norsk som eneste undervisningsspråk, samisk og kvensk forbudt. Internat tok barna bort fra hjemmemiljøet. 2) Jordsalgsloven (1902) - Krevde at jordkjøpere måtte snakke og bruke norsk. 3) Kirken - Kun norsk språk i gudstjenester. 4) Navnepolitikk - Press for å ta norske navn. 5) Propaganda - Samisk kultur fremstilt som primitiv og mindreverdig. 6) Økonomiske incentiver - Lærere som kunne vise fremgang i fornorsking fikk bonus. Politikken var basert på at minoritetene burde "heves" til norsk kulturnivå, og at mangfold var et problem som måtte løses.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-2-text-2',
      type: 'text',
      content: `## Konsekvenser av fornorskingen

Fornorskingspolitikken fikk alvorlige konsekvenser:

### Språktap
- Mange sluttet å snakke samisk/kvensk
- Språkene ble ikke overført til nye generasjoner
- I dag er flere samiske språk truet av utryddelse

### Kulturelt tap
- Tradisjonell kunnskap gikk tapt
- Skam knyttet til egen bakgrunn
- Mange skjulte sin identitet

### Personlige konsekvenser
- Barn ble tatt fra familiene på internat
- Traumatiske opplevelser med straff for å snakke eget språk
- Identitetsforvirring og lavt selvbilde

### Kollektive konsekvenser
- Svekket samisk samfunn
- Tap av autonomi og selvbestemmelse
- Mistillit til norske myndigheter`,
    },
    {
      id: 'historie-16-2-def-2',
      type: 'definition',
      title: 'Internatsystem',
      content: `**Internatsystemet** var ordningen der samiske og kvenske barn bodde på skoleinternater, ofte langt fra hjemmet.

Kjennetegn:
- Barna var borte fra hjemmemiljøet i lange perioder
- Kun norsk språk var tillatt
- Straff for å snakke samisk eller kvensk
- Dårlige forhold på mange internater

Internatsystemet var et effektivt virkemiddel for fornorsking fordi det brøt båndet mellom barn og foreldre/besteforeldre som normalt overfører språk og kultur.`,
    },
    {
      id: 'historie-16-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-16-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv internatsystemet og forklar hvorfor det var et så effektivt virkemiddel for fornorsking.',
        solution: 'Internatsystemet innebar at samiske og kvenske barn bodde på skoler langt fra hjemmet, der kun norsk var tillatt. Det var effektivt fordi: 1) Språkoverføring brytes - Barn lærer normalt språk fra foreldre og besteforeldre. På internatet var de isolert fra dem som kunne lære dem morsmålet. 2) Totalt språkmiljø - På internatet var alt norsk, ingen naturlig samisk-/kvensktale. 3) Skam - Barn lærte at deres språk og kultur var mindreverdige, noe som gjorde dem uvillige til å bruke det senere. 4) Generasjonseffekt - Barn som hadde mistet språket, kunne ikke overføre det til egne barn. 5) Langvarig eksponering - Barna var borte i lange perioder, ikke bare skoletimer. Systemet var traumatisk for mange barn og har etterlatt seg dype sår i samisk og kvensk samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-2-text-3',
      type: 'text',
      content: `## Begrunnelser og ideologi

Fornorskingspolitikken var basert på samtidens ideologi:

### Nasjonalisme
- Ett folk, ett språk, én kultur
- Mangfold sett som trussel mot nasjonal enhet

### Evolusjonistisk tenkning
- Kulturer rangert etter "utviklingsnivå"
- Samisk kultur sett som "primitiv"
- "Sivilisering" av minoritetene som fremskritt

### Sikkerhetspolitikk
- Kvener og samer i grenseområder sett som sikkerhetsrisiko
- Frykt for finsk og russisk irredentisme

### Sosialdarwinisme
- Biologisk rasisme ga "vitenskapelig" støtte
- Forskning på "raser" ved norske universiteter`,
    },
    {
      id: 'historie-16-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-16-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke ideologiske begrunnelser lå bak fornorskingspolitikken?',
        solution: 'Ideologiske begrunnelser: 1) Nasjonalisme - Ideen om at en nasjon burde ha ett språk og én kultur. Mangfold ble sett som en svakhet. 2) Evolusjonisme - Kulturer ble rangert fra "primitive" til "siviliserte". Samisk kultur ble plassert lavt, og assimilering ble sett som "hjelp" til å nå høyere nivå. 3) Sosialdarwinisme - Biologisk rasisme ga "vitenskapelig" støtte til hierarkisk syn på folkegrupper. 4) Sikkerhetspolitikk - Kvener og samer i grenseområder ble sett som upålitelige. Man fryktet at de var mer lojale mot Finland/Russland. 5) Moderniseringsideologi - Tradisjonelt levesett (reindrift, fiskerinomadisme) ble sett som utdatert. Disse ideene var mainstream i samtiden og ble fremmet av universiteter, kirke og stat. Politikken var ikke bare ondsinnete enkeltpersoner, men et helt samfunnssystem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-2-text-4',
      type: 'text',
      content: `## Oppgjøret med fornorskingspolitikken

Fra 1960-tallet begynte holdningene å endre seg:

### Politikkendring
- Fornorskingspolitikken ble gradvis avviklet
- Samisk fikk plass i skolen igjen
- Samerettutvalget oppnevnt (1980)

### Offisielle unnskyldninger
- Kong Harald beklaget fornorskingspolitikken (1997)
- Stortinget ga beklagelse (2018)
- Kommuner og kirken har gitt lokale beklagelser

### Sannhets- og forsoningskommisjonen
- Oppnevnt 2018, rapport 2023
- Dokumenterte uretten
- Anbefalte tiltak for forsoning og oppreisning`,
    },
    {
      id: 'historie-16-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-16-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hva som kan være formålet med offisielle unnskyldninger og sannhetskommisjoner.',
        solution: 'Formål med unnskyldninger og sannhetskommisjoner: 1) Anerkjennelse - Ofrene får bekreftet at det som skjedde var galt. Staten tar ansvar. 2) Dokumentasjon - Historien blir grundig utredet og bevart for ettertiden. 3) Undervisning - Kunnskapen spres til hele befolkningen. 4) Forsoning - Prosessen kan bidra til å hele sår og bygge tillit. 5) Forebygging - Ved å forstå hvordan urett skjedde, kan man hindre gjentakelse. 6) Symbolsk oppreisning - Selv om det ikke kan gjøres om, anerkjennes ofrenes verdighet. Kritiske spørsmål: Er unnskyldning nok uten konkrete tiltak? Kan skadene repareres? Hvem representerer "staten" som ber om unnskyldning - er det de samme som begikk uretten? Hvordan balansere mellom å se fremover og å gjøre opp for fortiden?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-16-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft fornorskingspolitikkens langtidsvirkninger og hva som kan gjøres for å rette opp skadene.',
        solution: 'Langtidsvirkninger: 1) Språktap - Flere samiske språk er utrydningstruet, kvensk nesten utdødd. 2) Kulturelt tap - Tradisjonell kunnskap gått tapt. 3) Psykologiske skader - Traumer som går i arv, skam knyttet til identitet. 4) Mistillit - Mange samer har dårlige erfaringer med norske myndigheter. 5) Identitetsforvirring - Folk som ikke vet om sin bakgrunn eller føler seg "mellom kulturer". Mulige tiltak: 1) Språkrevitalisering - Språksentre, undervisning, medieproduksjon. 2) Kompensasjonsordninger - Erstatning til dem som led. 3) Styrket samisk selvbestemmelse - Makt til Sametinget. 4) Utdanning - Alle nordmenn bør lære om fornorskingen. 5) Kulturstøtte - Midler til samisk og kvensk kultur. 6) Konkret oppfølging av sannhetskommisjonens anbefalinger. Full oppreisning er vanskelig - noe er tapt for alltid - men mye kan gjøres for å rette opp og hindre at det gjentas.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_16_3: TextbookChapter = {
  id: 'historie-16-3',
  courseId: 'historie',
  chapterNumber: '16.3',
  title: 'Samisk myndiggjøring',
  description: 'Samebevegelsen og kampen for rettigheter.',
  estimatedMinutes: 55,
  competenceGoals: ['myndiggjøring og frigjøring - norsk og samisk historie'],
  content: [
    {
      id: 'historie-16-3-intro',
      type: 'text',
      content: `## Samisk myndiggjøring

Fra 1960-tallet begynte samene å organisere seg for å kjempe for sine rettigheter. Denne bevegelsen førte til grunnleggende endringer i forholdet mellom den norske staten og det samiske folket. I dag er samene anerkjent som urfolk med egne rettigheter, og Sametinget gir dem en stemme i norsk politikk.

Samisk myndiggjøring er en prosess som fortsatt pågår. Mange spørsmål om landrettigheter, selvbestemmelse og kulturvern er fortsatt omstridte.`,
    },
    {
      id: 'historie-16-3-def-1',
      type: 'definition',
      title: 'Urfolk',
      content: `**Urfolk** er folkegrupper som befolket et område før kolonisering eller statsdannelse, og som har bevart særegen kultur og identitet.

Samene ble anerkjent som urfolk i Norge gjennom:
- Grunnlovens §108 (1988): "Det påligger statens myndigheter å legge forholdene til rette for at den samiske folkegruppe kan sikre og utvikle sitt språk, sin kultur og sitt samfunnsliv"
- ILO-konvensjon 169 om urfolks rettigheter (ratifisert 1990)
- FNs erklæring om urfolks rettigheter (2007)

Urfolksstatus gir særlige rettigheter knyttet til land, kultur og selvbestemmelse.`,
    },
    {
      id: 'historie-16-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-16-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr det at samene er anerkjent som urfolk, og hvilke rettigheter følger av denne statusen?',
        solution: 'Urfolk er folkegrupper som bebodde et område før kolonisering og har bevart særegen identitet. Samenes urfolksstatus betyr: 1) Konstitusjonelt vern - Grunnloven pålegger staten å sikre samisk språk og kultur. 2) Rett til konsultasjon - Staten må konsultere Sametinget i saker som angår samiske interesser (konsultasjonsplikten). 3) Landrettigheter - ILO-konvensjon 169 gir rett til land og ressurser samene tradisjonelt har brukt. 4) Selvbestemmelse - Samene har rett til å bestemme over indre anliggender. 5) Kulturvern - Særlig beskyttelse av samisk språk, kultur og næringer. 6) Internasjonal beskyttelse - FN overvåker urfolks rettigheter. Urfolksstatus gir sterkere rettigheter enn vanlig minoritetsvern og anerkjenner samenes historiske tilknytning til Sápmi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-3-text-2',
      type: 'text',
      content: `## Alta-saken (1979-1981)

Alta-saken ble et vendepunkt for samisk politikk:

### Bakgrunn
- Planer om å demme opp Altaelva for kraftutbygging
- Utbyggingen ville oversvømme samisk land og skade reindriften
- Samiske organisasjoner protesterte

### Protestene
- Demonstrasjoner og sivil ulydighet
- Lenkegjenger ved byggeplassen
- Sultestreik foran Stortinget
- Stor medieoppmerksomhet nasjonalt og internasjonalt

### Utfall
- Utbyggingen ble gjennomført (men i redusert form)
- Politisk seier: Saken satte samiske rettigheter på dagsorden
- Førte til opprettelsen av Samerettsutvalget og senere Sametinget`,
    },
    {
      id: 'historie-16-3-def-2',
      type: 'definition',
      title: 'Sametinget',
      content: `**Sametinget** ble etablert i 1989 som samenes folkevalgte organ.

Om Sametinget:
- Velges av og for den samiske befolkningen
- 39 representanter fra 7 valgkretser
- Rådgivende organ overfor norske myndigheter
- Forvalter deler av kulturstøtten til samisk kultur
- Har konsultasjonsrett i saker som angår samer

Sametinget er ikke et parlament med lovgivende myndighet, men en viktig kanal for samisk innflytelse på norsk politikk.`,
    },
    {
      id: 'historie-16-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-16-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar betydningen av Alta-saken for samisk politikk og rettigheter.',
        solution: 'Alta-saken var et vendepunkt fordi: 1) Synliggjøring - For første gang ble samiske rettigheter et stort tema i norsk offentlighet. Mediedekningen var enorm. 2) Mobilisering - Saken samlet samer fra ulike områder og grupper i felles kamp. 3) Allianser - Samene fikk støtte fra miljøbevegelsen og andre solidaritetsgrupper. 4) Sivil ulydighet - Demonstrantene viste at de var villige til å ta konsekvensene av sin overbevisning, noe som skapte respekt. 5) Politiske konsekvenser - Selv om demningen ble bygget, førte saken til Samerettsutvalget (1980) og senere Sametinget (1989), grunnlovsendring (1988) og ratifisering av ILO 169 (1990). Alta-saken var et "tapt slag, men vunnet krig" - den tapte den konkrete saken, men vant den politiske kampen om samiske rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-3-text-3',
      type: 'text',
      content: `## Samiske rettigheter i dag

I dag har samene flere viktige rettigheter:

### Språkrettigheter
- Samisk er offisielt språk i forvaltningsområdet for samisk språk
- Rett til undervisning i og på samisk
- Samisk radio og TV (NRK Sápmi)

### Konsultasjonsrett
- Staten plikter å konsultere Sametinget i saker som angår samer
- Lovfestet i 2021

### Reindrift
- Reindriftsloven sikrer samisk reindrift
- Kun samer kan drive reindrift

### Landrettigheter
- Finnmarksloven (2005) ga Finnmarkseiendommen (FeFo) forvaltningsansvar
- Samiske interesser skal ivaretas`,
    },
    {
      id: 'historie-16-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-16-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er Sametinget og hvilken rolle har det i norsk politikk?',
        solution: 'Sametinget er samenes folkevalgte organ, etablert 1989. 39 representanter velges hvert fjerde år av samer som er registrert i samemanntallet. Sametingets rolle: 1) Rådgivende - Gir uttalelser til Stortinget og regjeringen i samiske saker. 2) Konsultasjon - Staten må konsultere Sametinget i saker som angår samiske interesser. 3) Forvaltning - Forvalter midler til samisk kultur, språk og organisasjoner. 4) Synliggjøring - Gir samene en offisiell stemme i norsk politikk. 5) Symbolsk - Representerer samisk selvbestemmelse. Begrensninger: Sametinget har ikke lovgivende myndighet, kan ikke overstyre Stortinget, og avhenger av at norske myndigheter tar hensyn til dets uttalelser. Noen samer mener Sametinget bør ha mer makt, andre er skeptiske til institusjonen. Det er uansett den viktigste kanalen for samisk politisk innflytelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-3-text-4',
      type: 'text',
      content: `## Utfordringer og konflikter

Samisk myndiggjøring er ikke konfliktfri:

### Landrettigheter
- Konflikter om gruvedrift, vindkraft og annen utbygging i samiske områder
- Fosen-saken (2021): Høyesterett slo fast at vindmøller krenket reindriftens rettigheter, men anlegget står fortsatt

### Klimaendringer
- Reindriften trues av klimaendringer og tap av beiteområder

### Identitetsspørsmål
- Hvem er "ekte" same? Debatt om samemanntallet
- Sjøsamer vs reindriftssamer - ulike interesser

### Selvbestemmelse
- Hvor mye makt bør Sametinget ha?
- Forholdet mellom samisk og norsk suverenitet`,
    },
    {
      id: 'historie-16-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-16-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar Fosen-saken og drøft hva den forteller om forholdet mellom samiske rettigheter og andre samfunnsinteresser.',
        solution: 'Fosen-saken: I 2021 slo Høyesterett fast at vindmøllene på Fosen krenket reindriftssamenes rettigheter etter FNs konvensjon om sivile og politiske rettigheter. Utbyggingen hadde redusert beiteområdene så mye at det truet den samiske kulturen. Men selv etter dommen står vindmøllene fortsatt. Hva saken forteller: 1) Rettigheter vs interesser - Selv når samene vinner juridisk, veier andre hensyn (grønn energi, arbeidsplasser, investeringer) tungt. 2) Gjennomføringsproblem - Rettigheter uten håndhevelse er lite verdt. 3) Grønn kolonialisme - Grønt skifte kan gå på bekostning av urfolk hvis deres land brukes til vindkraft. 4) Tillitskrise - Manglende oppfølging skaper mistillit mellom samer og staten. 5) Verdikonflikt - Hvordan veier man urfolksrettigheter mot klimamål? Fosen viser at kampen for samiske rettigheter langt fra er over.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-16-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft i hvilken grad samene har oppnådd reell selvbestemmelse i Norge.',
        solution: 'Fremgang: 1) Sametinget gir en offisiell stemme og konsultasjonsrett. 2) Grunnlovsvern og internasjonale konvensjoner. 3) Samisk språk og kultur har fått økt støtte. 4) Reindriftslovgivning sikrer samisk næring. 5) Finnmarkseiendommen ga lokal forvaltning. 6) Økt anerkjennelse og synlighet. Begrensninger: 1) Sametinget har ikke lovgivende makt - kan rådgi, ikke bestemme. 2) Konsultasjonsplikt betyr ikke vetorett - staten kan overkjøre samiske interesser. 3) Fosen-saken viser at selv rettsavgjørelser ikke nødvendigvis følges. 4) Klimaendringer og arealinngrep truer reindriften. 5) Strukturelle problemer fra fornorskingen lever videre. Konklusjon: Samene har oppnådd betydelig mer innflytelse og anerkjennelse enn for 50 år siden, men full selvbestemmelse er ikke oppnådd. Forholdet mellom samisk og norsk suverenitet er fortsatt uavklart, og konflikter oppstår når samiske interesser kolliderer med andre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_16_4: TextbookChapter = {
  id: 'historie-16-4',
  courseId: 'historie',
  chapterNumber: '16.4',
  title: 'Minoriteter og mangfold i Norge',
  description: 'Nasjonale minoriteter og det flerkulturelle Norge.',
  estimatedMinutes: 50,
  competenceGoals: ['myndiggjøring og frigjøring - norsk og samisk historie'],
  content: [
    {
      id: 'historie-16-4-intro',
      type: 'text',
      content: `## Et mangfoldig Norge

Norge har aldri vært etnisk ensartet. I tillegg til den samiske befolkningen har flere andre grupper lang historie i landet. Disse gruppene har møtt ulik behandling gjennom tidene - fra forfølgelse og diskriminering til anerkjennelse og vern.

I dag er Norge i tillegg et innvandringsland der folk fra hele verden har slått seg ned. Dette skaper nye spørsmål om identitet, tilhørighet og inkludering.`,
    },
    {
      id: 'historie-16-4-def-1',
      type: 'definition',
      title: 'Nasjonale minoriteter',
      content: `**Nasjonale minoriteter** er grupper med langvarig tilknytning til Norge som anerkjennes særskilt.

Norges fem nasjonale minoriteter (anerkjent 1999):
- **Kvener/norskfinner:** Etterkommere av finsk innvandring til Nord-Norge
- **Skogfinner:** Etterkommere av finner som slo seg ned i Finnskogen
- **Jøder:** Til stede i Norge siden 1800-tallet (etter at forbudet ble opphevet)
- **Rom (sigøynere):** Historisk tilstedeværelse i flere hundre år
- **Romani/tatere:** Omreisende gruppe med lang historie i Norden

Disse gruppene har rett til beskyttelse av sin kultur og sitt språk.`,
    },
    {
      id: 'historie-16-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-16-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke grupper regnes som nasjonale minoriteter i Norge, og hva innebærer denne statusen?',
        solution: 'De fem nasjonale minoritetene er: 1) Kvener/norskfinner - finskspråklige i Nord-Norge. 2) Skogfinner - etterkommere av finske innvandrere i Hedmark/Värmland. 3) Jøder - til stede siden 1851. 4) Rom (sigøynere) - romanifolket med europeisk opprinnelse. 5) Romani/tatere - reisende gruppe med lang historie. Statusen innebærer: 1) Anerkjennelse - Staten erkjenner gruppenes historiske tilstedeværelse og særpreg. 2) Kulturvern - Rett til å bevare og utvikle egen kultur og språk. 3) Europarådets rammekonvensjon - Norge har forpliktet seg til å beskytte minoritetene. 4) Språkstøtte - Kvensk og romani har fått økt støtte. 5) Synliggjøring - Minoritetenes historie skal læres i skolen. Statusen skiller disse fra nyere innvandrere ved at de har historisk tilknytning over generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-4-text-2',
      type: 'text',
      content: `## Kvener og skogfinner

### Kvener
- Innvandret fra Finland/Sverige til Nord-Norge fra 1700-tallet
- Fisker- og jordbruksbefolkning
- Rammet av fornorskingspolitikken - kvensk språk undertrykt
- I dag anerkjent som nasjonal minoritet, kvensk som språk

### Skogfinner
- Innvandret til Finnskogen (Hedmark/Värmland) på 1600-tallet
- Drev svedjebruk (brenning av skog for jordbruk)
- Assimilert tidlig, men interessen for kulturarven har økt
- Finnskogen er i dag kulturvernområde`,
    },
    {
      id: 'historie-16-4-def-2',
      type: 'definition',
      title: 'Romani/tatere',
      content: `**Romani/tatere** er en omreisende minoritet med flere hundre års historie i Norge.

Historisk behandling:
- **Omstreiferlovgivning:** Lover som kriminaliserte omreisende livsstil
- **Tvangssterilisering:** Mange romani-kvinner ble sterilisert mot sin vilje
- **Barnebortføring:** Barn ble tatt fra familier og plassert i institusjoner
- **Lobotomering:** Noen ble lobotomert for "asocial" atferd

Staten har beklaget overgrepene, og det er opprettet erstatningsordninger.`,
    },
    {
      id: 'historie-16-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-16-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv den norske statens historiske behandling av romani/tatere og forklar hvorfor denne behandlingen i dag anses som overgrep.',
        solution: 'Statens behandling av romani/tatere: 1) Omstreiferlovgivning - Omreisende livsstil ble kriminalisert, folk ble tvunget til bofast liv. 2) Tvangssterilisering - Romani-kvinner ble sterilisert uten samtykke, for å hindre "formering" av gruppen. 3) Barnebortføring - Barn ble tatt fra foreldrene og plassert på institusjoner eller i fosterhjem, der de mistet språk og kultur. 4) Lobotomering - Noen ble lobotomert for "asocial" atferd. 5) Arbeidstjeneste - Tvangsarbeid på institusjoner som Svanviken. Dette anses som overgrep fordi: Det krenket grunnleggende menneskerettigheter (kroppslig integritet, familieliv). Det var rasistisk motivert - gruppen ble definert som mindreverdig. Det var systematisk statspolitikk, ikke enkelttilfeller. Metodene (sterilisering, lobotomering) er sammenlignbare med det som skjedde i Nazi-Tyskland.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-4-text-3',
      type: 'text',
      content: `## Jødene i Norge

### Historisk bakgrunn
- Jødeforbud i Grunnloven 1814 ("Jødeparagrafen")
- Forbudet opphevet 1851
- Liten, men etablert jødisk befolkning før 1940

### Holocaust og norske jøder
- 773 norske jøder deportert til Auschwitz
- Bare 38 overlevde
- Norsk politi og NS-myndigheter deltok aktivt

### I dag
- Liten jødisk befolkning (1500-2000)
- To synagoger (Oslo, Trondheim)
- Fortsatt utfordringer med antisemittisme`,
    },
    {
      id: 'historie-16-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-16-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv jødenes historie i Norge fra 1814 til i dag.',
        solution: 'Jødenes historie i Norge: 1814-1851: Jødeparagrafen i Grunnloven forbød jøder adgang til riket. 1851: Forbudet opphevet etter lang debatt, bl.a. drevet av Wergeland. 1851-1940: Gradvis etablering av et lite jødisk samfunn, synagoger i Oslo og Trondheim. 1940-1945: Under okkupasjonen ble 773 norske jøder deportert til Auschwitz med aktiv deltakelse fra norsk politi. Bare 38 overlevde. Dette var omtrent halvparten av den jødiske befolkningen. Etterkrigstid: Det jødiske samfunnet ble gjenoppbygd, men forblir lite (1500-2000 i dag). Erstatningsordninger og beklagelser er gitt. Staten tok delansvar for deportasjonene først i 1998. I dag: Jødisk kultur og religion lever videre, men antisemittisme er fortsatt et problem. Sikkerhetsutfordringer gjør at synagoger må beskyttes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-4-text-4',
      type: 'text',
      content: `## Innvandring og det flerkulturelle Norge

Norge har endret seg dramatisk de siste 50 årene:

### Innvandringshistorie
- **1960-70-tallet:** Arbeidsinnvandring fra Pakistan, Tyrkia, Marokko
- **1980-tallet:** Flyktninger fra Vietnam, Chile, Iran
- **1990-tallet:** Flyktninger fra Balkan, Somalia
- **2000-tallet:** EØS-arbeidsinnvandring fra Øst-Europa, flyktninger fra Syria, Afghanistan

### Demografi
- Ca. 18% av befolkningen har innvandrerbakgrunn (2024)
- Stor variasjon i bakgrunn, religion, kultur
- Konsentrasjon i storbyene, særlig Oslo

### Debatt
- Integrering vs assimilering
- Multikulturalisme vs "norske verdier"
- Arbeid, språk, deltakelse`,
    },
    {
      id: 'historie-16-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-16-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft likheter og forskjeller mellom behandlingen av de nasjonale minoritetene og debatten om integrering av nyere innvandrere.',
        solution: 'Likheter: 1) Spenning mellom assimilering og mangfold - Både fornorsking og deler av integreringsdebatten handler om hvor mye minoriteter skal tilpasse seg majoriteten. 2) Språkspørsmål - Morsmålsundervisning vs norskopplæring er tema både for nasjonale minoriteter og innvandrere. 3) Stereotypier - Begge grupper har møtt fordommer og negative generaliseringer. 4) Sosioøkonomisk marginalisering - Både romani og noen innvandrergrupper har opplevd fattigdom og utenforskap. Forskjeller: 1) Historisk tilknytning - Nasjonale minoriteter har vært i Norge i generasjoner. 2) Frivillighet - Innvandring er ofte valgt, fornorskingen var påtvunget. 3) Statens rolle - Fornorskingen var aktiv statspolitikk, innvandringspolitikken er mer kompleks. 4) Internasjonalt rammeverk - Urfolks- og minoritetsvern vs flyktningrett. Lærdommer fra fornorskingen bør gjøre oss varsomme med assimileringspress, men også bevisste på at integrering krever både tilpasning og aksept.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-16-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-16-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan Norge bør håndtere kulturelt og religiøst mangfold. Hvilke erfaringer fra historien kan være relevante?',
        solution: 'Lærdommer fra historien: 1) Fornorskingspolitikken viste at tvungen assimilering skader både individer og kulturer - og fungerer dårlig. 2) Mangfold har alltid eksistert - Norge har aldri vært homogent. 3) Anerkjennelse av urfolk og minoriteter viser at det er mulig å kombinere norsk fellesskap med kulturell egenart. 4) Menneskerettigheter bør sette grenser - verken majoriteten eller minoriteter kan påtvinge verdier som krenker grunnleggende rettigheter. Prinsipper for fremtiden: 1) Integrering, ikke assimilering - Deltakelse i samfunnet uten å gi opp egen identitet. 2) Felles verdier - Demokrati, likestilling, ytringsfrihet som felles fundament. 3) Gjensidig tilpasning - Både majoritet og minoriteter må tilpasse seg. 4) Ikke-diskriminering - Like muligheter uavhengig av bakgrunn. 5) Dialog - Konflikter løses gjennom samtale, ikke tvang. Balansen mellom fellesskap og mangfold er ikke gitt, men forhandles kontinuerlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 17: Globalisering og samtidshistorie
// ============================================================================

export const CHAPTER_HISTORIE_17_1: TextbookChapter = {
  id: 'historie-17-1',
  courseId: 'historie',
  chapterNumber: '17.1',
  title: 'Globalisering og teknologi',
  description: 'Den digitale revolusjonen og globaliseringen.',
  estimatedMinutes: 50,
  competenceGoals: ['teknologiske omveltninger fra industriell revolusjon'],
  content: [
    {
      id: 'historie-17-1-intro',
      type: 'text',
      content: `## Globaliseringen

Globalisering er prosessen der verden blir stadig tettere sammenkoblet økonomisk, kulturelt og politisk. Selv om globaliseringen har dype historiske røtter, har den akselerert dramatisk de siste tiårene, drevet av teknologisk utvikling og politiske beslutninger.

Internett og digital teknologi har skapt muligheter som var utenkelige for bare en generasjon siden. Samtidig har globaliseringen skapt nye utfordringer og ulikheter.`,
    },
    {
      id: 'historie-17-1-def-1',
      type: 'definition',
      title: 'Globalisering',
      content: `**Globalisering** er prosessen der økonomisk, kulturell og politisk aktivitet i økende grad skjer på tvers av landegrenser.

Dimensjoner av globalisering:
- **Økonomisk:** Internasjonal handel, investeringer, multinasjonale selskaper
- **Kulturell:** Spredning av ideer, verdier, populærkultur
- **Politisk:** Internasjonale organisasjoner, avtaler, samarbeid
- **Teknologisk:** Internett, kommunikasjon, transport

Globalisering er ikke ny - verden har vært koblet sammen gjennom handel og migrasjon i tusenvis av år - men tempoet har økt dramatisk.`,
    },
    {
      id: 'historie-17-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-17-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er globalisering, og hva har drevet akselerasjonen av globalisering de siste tiårene?',
        solution: 'Globalisering er prosessen der verden kobles tettere sammen økonomisk, kulturelt og politisk. Drivkrefter bak akselerasjonen: 1) Teknologi - Internett, mobiltelefoner og digital kommunikasjon gjør global samhandling mulig og billig. Containertransport har revolusjonert handel. 2) Politikk - Etter den kalde krigen åpnet tidligere kommunistiske land seg for verdensøkonomien. Frihandelsavtaler (WTO, EU) har redusert barrierer. 3) Økonomiske interesser - Multinasjonale selskaper søker globale markeder og billig arbeidskraft. Investorer søker avkastning verden over. 4) Den kalde krigens slutt - Fjernet ideologiske hindre for global integrasjon. 5) Utdanning - Flere mennesker kan kommunisere på tvers av kulturer. Disse faktorene har sammen skapt en verden der varer, tjenester, kapital, ideer og mennesker beveger seg raskere og lenger enn noen gang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-1-text-2',
      type: 'text',
      content: `## Den digitale revolusjonen

Digitaliseringen har forandret samfunnet fundamentalt:

### Internettets fremvekst
- **1990-tallet:** World Wide Web blir tilgjengelig
- **2000-tallet:** Bredbånd, sosiale medier, smarttelefoner
- **2010-tallet:** Strømmetjenester, skyløsninger, IoT
- **2020-tallet:** AI, maskinlæring, digital transformasjon

### Konsekvenser
- Kommunikasjon: Alle kan nå alle, overalt, hele tiden
- Informasjon: Kunnskap er tilgjengelig for alle
- Handel: E-handel og global distribusjon
- Arbeid: Hjemmekontor, plattformøkonomi
- Sosiale relasjoner: Sosiale medier endrer hvordan vi forholder oss til hverandre`,
    },
    {
      id: 'historie-17-1-def-2',
      type: 'definition',
      title: 'Plattformøkonomi',
      content: `**Plattformøkonomi** er en økonomisk modell der digitale plattformer kobler sammen tilbydere og etterspørrere.

Eksempler:
- **Uber:** Kobler sjåfører og passasjerer
- **Airbnb:** Kobler utleiere og gjester
- **Amazon:** Kobler selgere og kjøpere
- **Facebook/Meta:** Kobler brukere og annonsører

Kjennetegn:
- Plattformen eier ofte ikke produktene/tjenestene selv
- Nettverkseffekter: Verdien øker med antall brukere
- "Winner takes all": Tenderer mot monopol
- Utfordrer tradisjonell regulering`,
    },
    {
      id: 'historie-17-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-17-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan har internett og digital teknologi forandret hverdagslivet de siste 30 årene?',
        solution: 'Endringer i hverdagslivet: 1) Kommunikasjon - Fra brev og fasttelefon til e-post, sosiale medier, videosamtaler. Konstant tilgjengelighet. 2) Informasjon - Fra bibliotek og leksikon til Google og Wikipedia. All verdens kunnskap i lomma. 3) Handel - Fra fysiske butikker til e-handel. Varer fra hele verden med noen klikk. 4) Underholdning - Fra TV-programmer til strømmetjenester. Brukervalgt innhold. 5) Arbeid - Hjemmekontor, videomøter, fleksible arbeidstider. 6) Sosiale relasjoner - Sosiale medier kobler folk, men endrer også sosiale dynamikker. 7) Bank og økonomi - Nettbank, Vipps, kryptovaluta. 8) Navigasjon - GPS i alle telefoner. 9) Fotografering - Alle har kamera, deling er umiddelbar. Disse endringene har skjedd så raskt at de er vanskelige å fullt ut forstå. Noen er udelt positive, andre har problematiske sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-1-text-3',
      type: 'text',
      content: `## Globaliseringens vinnere og tapere

Globaliseringen har ikke fordelt gevinstene jevnt:

### Vinnere
- Forbrukere: Billigere varer fra hele verden
- Utviklingsland: Hundrevis av millioner løftet ut av fattigdom (særlig Kina, India)
- Multinasjonale selskaper: Tilgang til globale markeder
- Høyt utdannede: Flere muligheter

### Tapere
- Industriarbeidere i Vesten: Jobber flyttet til lavkostland
- Småbønder i sør: Kan ikke konkurrere med storprodusenter
- Lokalsamfunn: Bedrifter som forsvinner
- Miljøet: Økt transport og produksjon belaster planeten

### Reaksjoner
- Antiglobaliseringsbevegelser
- Populisme og nasjonalisme
- Brexit og America First
- Krav om rettferdig handel`,
    },
    {
      id: 'historie-17-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-17-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvem har vunnet og hvem har tapt på globaliseringen? Gi eksempler og forklar.',
        solution: 'Vinnere: 1) Forbrukere globalt - Billigere varer (klær, elektronikk) gjennom internasjonal handel. 2) Kina og andre utviklingsland - Hundrevis av millioner løftet ut av fattigdom gjennom eksportindustri. 3) Multinasjonale selskaper - Tilgang til globale markeder og billig produksjon. 4) Høyt utdannede - Flere jobbmuligheter i global økonomi. 5) Investorer - Avkastning fra global vekst. Tapere: 1) Industriarbeidere i Vesten - Fabrikker flyttet til lavkostland, arbeidsplasser forsvant. 2) Småbønder i utviklingsland - Kan ikke konkurrere med subsidierte storbønder. 3) Lokalsamfunn - Bedriftsnedleggelser uten erstatning. 4) Miljøet - Økt produksjon, transport og forbruk. 5) Kulturer - Homogenisering, engelsk dominans. Globaliseringens gevinster er reelle, men ujevnt fordelt. De som har tapt, føler seg ofte ignorert av eliter som har tjent på utviklingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-1-text-4',
      type: 'text',
      content: `## Utfordringer og kritikk

Globaliseringen og digitaliseringen har også mørke sider:

### Maktkonsentrasjon
- Noen få tech-giganter dominerer (Google, Amazon, Meta, Apple)
- Demokratisk underskudd i globale beslutninger
- Skatteunngåelse gjennom internasjonale strukturer

### Informasjonssamfunnets skyggesider
- Desinformasjon og falske nyheter
- Personvern under press
- Digitale ekkokamre og polarisering
- Avhengighet og mental helse

### Sårbarhet
- Pandemien viste hvor sårbare globale forsyningskjeder er
- Cyberangrep kan lamme samfunn
- Avhengighet av noen få aktører`,
    },
    {
      id: 'historie-17-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-17-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved sosiale medier.',
        solution: 'Fordeler: 1) Kontakt - Holder kontakt med familie og venner over avstand. 2) Demokratisering - Alle kan nå et publikum, grasrotbevegelser kan mobilisere. 3) Informasjonsdeling - Nyheter spres raskt, urett kan dokumenteres. 4) Fellesskap - Folk med sjeldne interesser finner hverandre. 5) Underholdning - Kreativt innhold fra hele verden. Ulemper: 1) Desinformasjon - Falske nyheter spres like lett som sanne. 2) Polarisering - Algoritmer forsterker ekkokamre og konflikt. 3) Personvern - Data samles og misbrukes. 4) Mental helse - Sosial sammenligning, avhengighet, mobbing. 5) Demokratitrussel - Valgmanipulasjon, hatprat, radikalisering. 6) Maktkonsentrasjon - Noen få selskaper kontrollerer informasjonsstrømmen. Sosiale medier er verktøy som kan brukes til godt og ondt. Utfordringen er å bevare fordelene mens man begrenser skadene gjennom regulering og bevissthet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-17-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om globaliseringen bør begrenses eller styres annerledes. Hvilke alternativer finnes?',
        solution: 'Argumenter for å begrense/styre: 1) Ulikhet - Gevinstene fordeles ujevnt, taperne trenger beskyttelse. 2) Miljø - Global produksjon og transport belaster klimaet. 3) Demokrati - Globale beslutninger tas utenfor demokratisk kontroll. 4) Sårbarhet - Pandemien viste risikoen ved lange forsyningskjeder. 5) Kulturelt mangfold - Homogenisering truer lokal kultur. Alternativer: 1) Rettferdig handel - Standarder for arbeidsmiljø, miljø, skatt. 2) Reshoring - Flytte produksjon tilbake, kortere verdikjeder. 3) Skattereformer - Stoppe skatteunngåelse, global minimumsskatt. 4) Regulering av tech - Konkurranserett, personvern, ansvarlighet. 5) Internasjonal koordinering - Sterkere globale institusjoner med demokratisk legitimitet. Full de-globalisering er verken mulig eller ønskelig, men globaliseringen kan styres bedre for å fordele gevinstene jevnere og redusere skadene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_17_2: TextbookChapter = {
  id: 'historie-17-2',
  courseId: 'historie',
  chapterNumber: '17.2',
  title: 'Migrasjon i moderne tid',
  description: 'Flyktningstrømmer og det flerkulturelle samfunnet.',
  estimatedMinutes: 55,
  competenceGoals: ['migrasjon og kulturmøter fra ulike perspektiver'],
  content: [
    {
      id: 'historie-17-2-intro',
      type: 'text',
      content: `## Migrasjon i vår tid

Migrasjon - at mennesker flytter fra ett sted til et annet - har alltid vært en del av menneskehetens historie. I vår tid har globaliseringen ført til at flere mennesker enn noen gang beveger seg over landegrenser, enten frivillig i søken etter arbeid og bedre liv, eller ufrivillig som flyktninger fra krig og forfølgelse.

Migrasjon skaper muligheter og utfordringer for både de som flytter og samfunnene de kommer til. Hvordan vi håndterer migrasjon er et av vår tids viktigste politiske spørsmål.`,
    },
    {
      id: 'historie-17-2-def-1',
      type: 'definition',
      title: 'Migrasjonstyper',
      content: `**Migrasjon** kan deles inn i ulike kategorier:

- **Arbeidsinnvandring:** Folk som søker arbeid og bedre levekår
- **Familieinnvandring:** Familiegjenforening med personer som allerede bor i landet
- **Flukt:** Folk som flykter fra krig, forfølgelse eller katastrofer
- **Studieinnvandring:** Folk som kommer for å studere

Juridiske kategorier:
- **Flyktning:** Rett til beskyttelse etter folkeretten
- **Asylsøker:** Søker om beskyttelse, ikke avgjort ennå
- **Økonomisk migrant:** Søker bedre økonomiske forhold`,
    },
    {
      id: 'historie-17-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-17-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom en flyktning og en økonomisk migrant. Hvorfor er dette skillet viktig i internasjonal rett?',
        solution: 'Forskjellen: En flyktning er ifølge FNs flyktningkonvensjon en person som har flyktet fra sitt land på grunn av velbegrunnet frykt for forfølgelse basert på rase, religion, nasjonalitet, politisk oppfatning eller medlemskap i en bestemt sosial gruppe. En økonomisk migrant flytter primært for å forbedre sin økonomiske situasjon. Hvorfor skillet er viktig: 1) Juridiske rettigheter - Flyktninger har rett til beskyttelse og kan ikke returneres til forfølgelse (non-refoulement). Økonomiske migranter har ikke samme krav. 2) Ansvar - Stater har folkerettslige forpliktelser overfor flyktninger. 3) Politikk - Ulike tiltak trengs for ulike grupper. I praksis er skillet ofte uklart: Er en som flykter fra ekstrem fattigdom "økonomisk" migrant? Hva med klimaflyktninger? Mange reiser av flere grunner. Debatter om migrasjon handler ofte om hvem som "fortjener" beskyttelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-2-text-2',
      type: 'text',
      content: `## Årsaker til migrasjon

Folk migrerer av mange grunner:

### Push-faktorer (det som driver folk bort)
- Krig og konflikt
- Forfølgelse og menneskerettighetsbrudd
- Fattigdom og mangel på muligheter
- Naturkatastrofer og klimaendringer
- Politisk ustabilitet

### Pull-faktorer (det som trekker folk til)
- Fred og sikkerhet
- Arbeidsmuligheter og velstand
- Velferdssystem og rettssikkerhet
- Familie og nettverk
- Utdanningsmuligheter

I praksis er migrasjon ofte resultat av en kombinasjon av faktorer.`,
    },
    {
      id: 'historie-17-2-def-2',
      type: 'definition',
      title: 'Flyktningkonvensjonen',
      content: `**FNs flyktningkonvensjon** (1951) definerer hvem som er flyktning og hvilke rettigheter de har.

Hovedprinsipper:
- **Definisjonen:** En flyktning er en person med velbegrunnet frykt for forfølgelse
- **Non-refoulement:** Forbud mot å returnere flyktninger til forfølgelse
- **Ikke-diskriminering:** Flyktninger skal ikke diskrimineres
- **Rettigheter:** Flyktninger har rett til arbeid, utdanning, bolig

Konvensjonen ble laget i etterkrigstiden for europeiske flyktninger, men er fortsatt grunnlaget for internasjonal flyktningrett.`,
    },
    {
      id: 'historie-17-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-17-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke faktorer driver mennesker til å migrere i dag? Gi eksempler på både push- og pull-faktorer.',
        solution: 'Push-faktorer (driver folk bort): 1) Krig - Syria, Afghanistan, Ukraina. Millioner flyktet fra krigshandlinger. 2) Forfølgelse - Politisk undertrykkelse, religiøs forfølgelse, forfølgelse av LHBT+. 3) Fattigdom - Mangel på arbeid og muligheter i hjemlandet. 4) Klimaendringer - Tørke, flom, stigende havnivå gjør områder ubeboelige. 5) Korrupsjon og dårlig styresett. Pull-faktorer (trekker folk mot): 1) Sikkerhet - Stabile demokratier tilbyr trygghet. 2) Arbeid - Høy etterspørsel etter arbeidskraft i rike land. 3) Velferdsordninger - Tilgang til helse, utdanning, trygd. 4) Nettverk - Familie og venner som allerede har migrert. 5) Utdanning - Muligheter for utdanning og karriere. I praksis kombineres ofte flere faktorer - en som flykter fra krig søker også et sted med arbeidsmuligheter og nettverk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-2-text-3',
      type: 'text',
      content: `## Integrering og mangfold

Når migranter kommer til et nytt land, oppstår spørsmål om integrering:

### Hva er integrering?
- Deltakelse i arbeidsliv og samfunn
- Språkkunnskap
- Aksept av grunnleggende verdier
- Sosiale nettverk

### Ulike modeller
- **Assimilering:** Migranter gir opp egen kultur, blir som majoriteten
- **Multikulturalisme:** Parallelle kulturer lever side om side
- **Integrering:** Deltakelse med rom for kulturell egenart

### Utfordringer
- Diskriminering i arbeidsmarkedet
- Språkbarrierer
- Boligsegregering
- Kulturelle forskjeller`,
    },
    {
      id: 'historie-17-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-17-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er integrering, og hva kreves for at den skal lykkes - både fra samfunnet og fra innvandrerne?',
        solution: 'Integrering er prosessen der innvandrere blir deltakere i samfunnet de kommer til, uten nødvendigvis å gi opp egen kulturell identitet. Fra innvandrerne kreves: 1) Språklæring - Norskkunnskaper er nøkkel til arbeid og deltakelse. 2) Arbeid eller utdanning - Økonomisk selvstendighet og kontakt med samfunnet. 3) Aksept av grunnregler - Demokrati, likestilling, ytringsfrihet. 4) Vilje til å delta - Engasjement i lokalsamfunn, foreninger. Fra samfunnet kreves: 1) Ikke-diskriminering - Like muligheter uavhengig av bakgrunn. 2) Tilrettelegging - Språkopplæring, godkjenning av utdanning, integreringstiltak. 3) Åpenhet - Villighet til å inkludere nye borgere. 4) Realistiske forventninger - Integrering tar tid. 5) Bekjempe rasisme - Strukturelle og individuelle barrierer. Integrering er en toveis prosess der både innvandrere og mottakersamfunn må bidra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-2-text-4',
      type: 'text',
      content: `## Debatter om migrasjon

Migrasjon er politisk omstridt:

### Argumenter for liberal innvandringspolitikk
- Humanitært ansvar for å hjelpe flyktninger
- Økonomisk gevinst av arbeidskraft
- Kulturell berikelse og mangfold
- Demografisk behov i aldrende samfunn

### Argumenter for restriktiv politikk
- Integreringsutfordringer
- Press på velferdsordninger
- Kulturelle verdikonflikter
- Sikkerhetshensyn

### Den politiske debatten
- Høyre/venstre-skillelinjen brytes
- Populistiske bevegelser fokuserer på innvandring
- Fakta og følelser blandes ofte sammen`,
    },
    {
      id: 'historie-17-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-17-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft forholdet mellom migrasjon og velferdsstaten. Kan en generøs velferdsstat kombineres med høy innvandring?',
        solution: 'Utfordringen: Velferdsstaten er basert på solidaritet innenfor et avgrenset fellesskap. Høy innvandring kan utfordre dette. Argumenter for at det er vanskelig: 1) Kostnader - Integrering og ytelser koster i oppstartsfasen. 2) Tillit - Velferdsstat krever tillit, som kan svekkes i heterogene samfunn. 3) Press - Innvandrere kan bli overrepresentert blant trygdemottakere. 4) Velferdsturisme - Frykt for at generøse ytelser tiltrekker migranter. Argumenter for at det er mulig: 1) Arbeidskraft - Innvandrere som jobber bidrar med skatt. 2) Demografi - Innvandring kan motvirke aldring. 3) Integreringsinvestering - Kostnader i dag gir gevinst på sikt. 4) Nordiske eksempler - Norge har klart å kombinere innvandring med velferdsstat. Nøkkelen er trolig vellykket integrering i arbeidslivet. Hvis innvandrere jobber og betaler skatt, bidrar de til velferdsstaten. Hvis de blir stående utenfor, blir de en kostnad. Politikkens kvalitet, ikke innvandringens størrelse alene, avgjør.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-17-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan klimaendringer kan påvirke fremtidig migrasjon.',
        solution: 'Klimaendringer og migrasjon: 1) Direkte effekter - Stigende havnivå truer kystområder og øystater. Ekstremvær (flom, orkaner) ødelegger boområder. Ørkenspredning og tørke gjør jordbruk umulig. 2) Indirekte effekter - Ressursmangel (vann, mat) kan utløse konflikter som driver folk på flukt. Økonomisk kollaps i sårbare land. 3) Omfang - Estimater varierer fra titalls til hundrevis av millioner "klimaflyktninger" dette århundret. 4) Juridiske hull - Klimaflyktninger er ikke dekket av flyktningkonvensjonen (som krever forfølgelse). 5) Geografi - De fattigste landene rammes hardest, men har minst ansvar for utslippene. Implikasjoner: Rike land som har forårsaket klimaendringene vil måtte ta imot flere som flykter fra konsekvensene. Dette reiser spørsmål om rettferdighet, ansvar og internasjonal solidaritet. Klimapolitikk og migrasjonspolitikk henger tett sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_17_3: TextbookChapter = {
  id: 'historie-17-3',
  courseId: 'historie',
  chapterNumber: '17.3',
  title: 'Konflikter etter den kalde krigen',
  description: 'Jugoslavia, terror og nye konflikter.',
  estimatedMinutes: 55,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  content: [
    {
      id: 'historie-17-3-intro',
      type: 'text',
      content: `## En ny verdensorden?

Da den kalde krigen tok slutt, håpet mange på en fredelig "ny verdensorden". Sovjetunionens fall lot USA igjen som eneste supermakt, og det så ut til at demokrati og markedsøkonomi hadde seiret.

Men historien var ikke slutt. Nye konflikter brøt ut - etniske kriger, terrorisme, sammenbrudd av stater. Noen av disse konfliktene hadde røtter tilbake til den kalde krigen, andre var av ny karakter. Verdenssamfunnet måtte forholde seg til en ny type trusler.`,
    },
    {
      id: 'historie-17-3-def-1',
      type: 'definition',
      title: 'Etnisk rensing',
      content: `**Etnisk rensing** er systematisk fordrivelse av en etnisk eller religiøs gruppe fra et område gjennom vold, terror, drap eller trusler.

Kjennetegn:
- Målet er et etnisk "rent" område
- Virkemidler: Drap, massakrer, voldtekt, ødeleggelse av hjem
- Skiller seg fra folkemord ved at målet primært er fordrivelse, ikke utryddelse

Etnisk rensing er en krigsforbrytelse og forbrytelse mot menneskeheten etter internasjonal rett.`,
    },
    {
      id: 'historie-17-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-17-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er etnisk rensing, og hvordan skiller det seg fra folkemord?',
        solution: 'Etnisk rensing er systematisk fordrivelse av en etnisk eller religiøs gruppe fra et område gjennom vold, terror og trusler. Folkemord er systematisk utryddelse av en gruppe. Forskjellen: 1) Mål - Etnisk rensing vil fjerne folk fra et område. Folkemord vil utslette gruppen helt. 2) Metode - Etnisk rensing bruker fordrivelse, ødeleggelse av hjem, voldtekt, massakrer for å få folk til å flykte. Folkemord bruker systematiske drap og utryddelsesleirer. 3) Omfang - Folkemord er mer omfattende i intensjon. I praksis overlapper kategoriene. Etnisk rensing kan inkludere massakrer (som Srebrenica), og Holocaust inkluderte fordrivelse før utryddelsen. Begge er alvorlige forbrytelser under internasjonal rett. Skillet kan være juridisk viktig (folkemordskonvensjonen har spesifikke krav), men for ofrene er begge katastrofale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-3-text-2',
      type: 'text',
      content: `## Jugoslavias sammenbrudd

Den sosialistiske føderasjonen Jugoslavia falt sammen i en serie blodige kriger på 1990-tallet:

### Bakgrunn
- Multietnisk stat: Serbere, kroater, bosniere, slovenere, albanere m.fl.
- Holdt sammen av Tito og kommunistpartiet
- Etter Titos død (1980) vokste nasjonalistiske bevegelser

### Krigene
- **Slovenia (1991):** Kort krig, Slovenia uavhengig
- **Kroatia (1991-1995):** Krig mellom serbere og kroater
- **Bosnia (1992-1995):** Den blodigste konflikten, Srebrenica-massakren
- **Kosovo (1998-1999):** NATO-bombing av Serbia

### Konsekvenser
- Ca. 140 000 døde
- Millioner på flukt
- Krigsforbrytelser og etnisk rensing`,
    },
    {
      id: 'historie-17-3-def-2',
      type: 'definition',
      title: 'Srebrenica',
      content: `**Srebrenica-massakren** (juli 1995) var det verste massedrapet i Europa siden andre verdenskrig.

Hendelsen:
- Srebrenica var erklært "sikker sone" av FN
- Bosnisk-serbiske styrker inntok byen
- Nederlandske FN-soldater kunne ikke forhindre det
- Over 8000 bosnisk-muslimske menn og gutter ble drept

Srebrenica ble et symbol på det internasjonale samfunnets svikt og førte til at NATO grep inn i Bosnia.`,
    },
    {
      id: 'historie-17-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-17-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var bakgrunnen for krigene i det tidligere Jugoslavia på 1990-tallet?',
        solution: 'Bakgrunnen var kompleks: 1) Multietnisk stat - Jugoslavia besto av mange folk (serbere, kroater, bosniere, slovenere, makedonere, albanere) med ulike religioner og historiske motsetninger. 2) Kommunismens fall - Titos kommunistparti hadde holdt motsetningene nede. Etter hans død (1980) og kommunismens fall mistet staten limet. 3) Nasjonalisme - Politikere som Slobodan Milosevic i Serbia og Franjo Tudjman i Kroatia mobiliserte nasjonalistiske følelser. 4) Historiske traumer - Minner fra andre verdenskrig (ustasja-regimet i Kroatia, tsjetniker-bevegelsen) ble brukt for å skape frykt og hat. 5) Økonomisk krise - 1980-tallets økonomiske problemer skapte grobunn for konflikt. 6) Selvstendighetsønsker - Slovenia og Kroatia ville ut, Serbia ville holde føderasjonen sammen. Når staten begynte å falle fra hverandre, ble etniske grupper som levde blandet, plutselig "minoriteter" i andres territorier. Det utløste voldsspiraler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-3-text-3',
      type: 'text',
      content: `## Terrorisme og 11. september

Terrorisme ble en sentral trussel etter den kalde krigen:

### 11. september 2001
- Al-Qaida kapret fire fly i USA
- To fly styrtet inn i World Trade Center, New York
- Ett fly traff Pentagon
- Ett fly styrtet i Pennsylvania etter passasjermotstand
- Ca. 3000 mennesker ble drept

### "Krigen mot terror"
- USA invaderte Afghanistan (2001) for å knuse al-Qaida
- USA invaderte Irak (2003) - kontroversielt, svak begrunnelse
- Langvarige kriger med store kostnader
- Nye sikkerhetstiltak og overvåking

### IS og "kalifatet"
- Den islamske stat (IS) erobret store områder i Syria og Irak (2014)
- Brutalt styre, terrorangrep i Europa
- Nedkjempet militært, men ideologien lever videre`,
    },
    {
      id: 'historie-17-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-17-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft konsekvensene av angrepene 11. september 2001 for internasjonal politikk.',
        solution: 'Konsekvenser av 11. september: 1) "Krigen mot terror" - USA erklærte global krig mot terrorisme. Afghanistan ble invadert i 2001 for å knuse al-Qaida. 2) Irak-krigen (2003) - Kontroversielt, USA hevdet Irak hadde masseødeleggelsesvåpen. Invasjonen destabiliserte regionen og bidro til fremveksten av IS. 3) Sikkerhetstiltak - Økt overvåking, kontroll på flyplasser, terrorlovgivning. Debatt om sikkerhet vs frihet. 4) Islamofobi - Økt mistenkeliggjøring av muslimer i Vesten. 5) Geopolitikk - USA konsentrerte seg om Midtøsten, Kina og Russland fikk større spillerom. 6) Langvarige kriger - Afghanistan og Irak ble årelange konflikter med enorme kostnader i liv og penger. 7) Radikalisering - Krigende bidro til ny rekruttering til ekstremisme. 11. september endret USAs utenrikspolitikk og skapte konflikter som fortsatt preger verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-3-text-4',
      type: 'text',
      content: `## Nye stormaktsrivaliseringer

Det 21. århundret har sett fremveksten av nye stormaktsrivaliseringer:

### Kinas fremvekst
- Verdens største økonomi målt i kjøpekraft
- Militær modernisering
- Belt and Road Initiative - global infrastrukturinvestering
- Spenning med USA om handel og teknologi

### Russlands gjenreisning
- Putin har gjenetablert Russland som stormakt
- Annektering av Krim (2014)
- Invasjon av Ukraina (2022)
- Konfrontasjon med Vesten

### En multipolar verden
- USAs relative posisjon svekket
- Flere maktsentra konkurrerer
- Internasjonal orden under press`,
    },
    {
      id: 'historie-17-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-17-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft den russiske invasjonen av Ukraina i 2022 i lys av historien.',
        solution: 'Historisk kontekst: 1) Sovjetarven - Ukraina var del av Sovjetunionen. Putin ser Sovjets fall som en katastrofe og vil gjenopprette russisk innflytelse. 2) NATOs utvidelse - Russland ser vestlig utvidelse østover som trussel. 3) Krim 2014 - Annekteringen var et forvarsel, uten at Vesten reagerte tilstrekkelig. 4) Ukrainsk demokrati - Ukrainas vestorientering truet Putins autokratiske modell. Konsekvenser: 1) Humanitær katastrofe - Titusener døde, millioner på flukt. 2) Europeisk sikkerhet - Den kalde krigens frontlinjer trekkes på nytt. 3) NATO styrket - Sverige og Finland ble medlemmer. 4) Sanksjoner og økonomisk krig. 5) Energi - Europa måtte finne alternativer til russisk gass. Historiske paralleller: Appeasement i 1930-årene vs fasthet nå. Suverenitetsprinsippet fra 1945. Lærdommen synes å være at ettergivenhet overfor aggressive diktatorer ikke fungerer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-17-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft utfordringene for internasjonal orden i det 21. århundret. Er det internasjonale systemet fra etterkrigstiden i krise?',
        solution: 'Utfordringer for internasjonal orden: 1) Maktforskyvning - USAs relative svekkelse, Kinas og Russlands fremvekst utfordrer etterkrigssystemet. 2) Folkerettens svekkelse - Russlands invasjon av Ukraina, USAs Irak-krig - stormakter bryter folkeretten. 3) FNs handlingslammelse - Vetomakter blokkerer handling i Sikkerhetsrådet. 4) Nasjonalisme og populisme - "America First", Brexit - tilbaketrekning fra internasjonalt samarbeid. 5) Nye trusler - Klima, cyber, pandemier krever globale løsninger, men samarbeidet svikter. Er systemet i krise? Ja: Regelbryting blir vanligere, institusjoner svekkes, stormaktskonflikt øker. Nei: FN, WTO, folkeretten eksisterer fortsatt. Kriser har skjedd før. Kanskje: Systemet tilpasser seg, men prosessen er smertefull. Historien viser at internasjonale ordener forandrer seg - spørsmålet er om endringen blir fredelig eller konfliktfylt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_17_4: TextbookChapter = {
  id: 'historie-17-4',
  courseId: 'historie',
  chapterNumber: '17.4',
  title: 'Klimakrise og bærekraft',
  description: 'Miljøutfordringer i historisk perspektiv.',
  estimatedMinutes: 50,
  competenceGoals: ['mennesket og naturen, bærekraft'],
  content: [
    {
      id: 'historie-17-4-intro',
      type: 'text',
      content: `## Klimakrisen i historisk perspektiv

Klimaendringene er vår tids største utfordring. De er resultatet av menneskers aktivitet gjennom de siste 200 årene - siden den industrielle revolusjonen begynte å pumpe klimagasser inn i atmosfæren.

For å forstå klimakrisen må vi se den i historisk sammenheng: Hvordan har forholdet mellom mennesker og natur utviklet seg? Hvorfor har vi kommet dit vi er? Og hvilke valg står vi overfor?`,
    },
    {
      id: 'historie-17-4-def-1',
      type: 'definition',
      title: 'Antropocen',
      content: `**Antropocen** (menneskets tidsalder) er en foreslått geologisk epoke der menneskets aktivitet har blitt den dominerende kraften som former jordkloden.

Kjennetegn på antropocen:
- Klimaendringer forårsaket av drivhusgasser
- Masseutryddelse av arter
- Plastforurensing i havene
- Endret landskap gjennom jordbruk og urbanisering
- Radioaktivt avfall fra atomvåpenprøver

Begrepet understreker at mennesket nå påvirker jordens systemer i samme skala som naturlige geologiske krefter.`,
    },
    {
      id: 'historie-17-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-17-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med antropocen, og hvordan har den industrielle revolusjonen bidratt til denne utviklingen?',
        solution: 'Antropocen er en foreslått geologisk epoke der menneskets aktivitet dominerer jordens systemer på samme måte som naturlige krefter. Den industrielle revolusjonen var vendepunktet fordi: 1) Fossil energi - Kull, senere olje og gass, ga enorm energi men frigjorde CO2 bundet i millioner av år. 2) Produksjonsøkning - Industriell produksjon økte forbruk og avfall dramatisk. 3) Befolkningsvekst - Forbedret helse og mat ga befolkningseksplosjon (1 til 8 milliarder på 200 år). 4) Urbanisering - Byer spredte seg og endret landskapet. 5) Landbruksintensivering - Kunstgjødsel, mekanisering økte produksjonen men også miljøbelastningen. Den industrielle revolusjonen skapte velstand men også problemene vi nå må løse. Utslippene har akselerert eksponentielt siden 1950 - den "store akselerasjonen".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-4-text-2',
      type: 'text',
      content: `## Miljøbevegelsens historie

Bekymringen for miljøet er ikke ny:

### Tidlige advarsler
- **1800-tallet:** Romantikernes naturbeundring, nasjonalparker
- **1962:** Rachel Carsons "Silent Spring" om sprøytemidler
- **1972:** "Limits to Growth" - dattersimulering av ressursknapphet

### Miljøbevegelsen vokser (1970-tallet)
- Første Earth Day (1970)
- Miljøpartier i mange land (inkl. norske MDG 1988)
- Miljøorganisasjoner får innflytelse

### Klimasaken (1990-tallet-)
- FNs klimapanel (IPCC) etablert 1988
- Kyoto-protokollen (1997) - første klimaavtale
- Paris-avtalen (2015) - globalt mål om å begrense oppvarming

### I dag
- Unge klimaaktivister (Greta Thunberg)
- Økende erkjennelse av krisens alvor`,
    },
    {
      id: 'historie-17-4-def-2',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** er utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter til å dekke sine behov.

Begrepet ble popularisert av Brundtland-kommisjonen (1987) ledet av Gro Harlem Brundtland.

Tre pilarer:
- **Økonomisk:** Økonomisk vekst og velstand
- **Sosial:** Rettferdighet, helse, utdanning
- **Miljømessig:** Bevaring av naturressurser og økosystemer

FNs bærekraftsmål (2015) operasjonaliserer dette i 17 konkrete mål.`,
    },
    {
      id: 'historie-17-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-17-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er bærekraftig utvikling, og hvorfor er dette begrepet sentralt i miljødebatten?',
        solution: 'Bærekraftig utvikling er utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter. Begrepet har tre pilarer: økonomisk vekst, sosial rettferdighet og miljøvern - alle må balanseres. Hvorfor sentralt: 1) Kobler utvikling og miljø - Man kan ikke velge enten eller, man må finne veier som tar hensyn til begge. 2) Generasjonsrettferdighet - Vi har ansvar overfor våre etterkommere. 3) Politisk nyttig - Begrepet kan forene ulike interesser fordi alle kan støtte "bærekraft". 4) Operasjonaliserbart - FNs bærekraftsmål gir konkrete delmål. Kritikk: Noen mener begrepet er for vagt og brukes til "grønnvasking". Andre mener økonomisk vekst og miljøvern ikke kan kombineres. Likevel har begrepet formet miljøpolitikken i over 30 år og vil fortsette å gjøre det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-4-text-3',
      type: 'text',
      content: `## Klimakrisens dimensjoner

Klimaendringene er et sammensatt problem:

### Vitenskapelig
- CO2-nivået høyere enn på millioner av år
- Global temperatur stiger
- Ekstremvær, smelting av is, havnivåstigning

### Rettferdighetsutfordringer
- Rike land har sluppet ut mest historisk
- Fattige land rammes hardest
- Fremtidige generasjoner betaler prisen
- Innenfor land: Fattige rammes hardest

### Politiske utfordringer
- Globalt problem - krever global koordinering
- Langsiktig problem - kortsiktige politiske sykluser
- Mektige interesser i status quo
- Gratispassasjerproblemet`,
    },
    {
      id: 'historie-17-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-17-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft rettferdighetsutfordringene knyttet til klimaendringene.',
        solution: 'Rettferdighetsutfordringer: 1) Historisk ansvar - Rike land har sluppet ut mest CO2 gjennom industrialiseringen, men krever at fattige land begrenser sin utvikling. 2) Sårbarhet - De fattigste landene, som har sluppet ut minst, rammes hardest av flom, tørke, havnivåstigning. 3) Generasjonsrettferdighet - Dagens generasjoner høster fordelene av fossil energi, fremtidige generasjoner betaler prisen. 4) Innenlands ulikhet - Også innenfor land rammes fattige hardest (dårligere boliger, færre ressurser til tilpasning). 5) Tap og skade - Hvem skal betale for ødeleggelsene som allerede skjer? Spørsmål som må besvares: Skal historiske utslipp telle? Har alle rett til samme utslipp per innbygger? Hvordan skal rike land kompensere fattige? Klimarettferdighet er kjernen i forhandlingene mellom rike og fattige land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-4-text-4',
      type: 'text',
      content: `## Veier fremover

Hva kan gjøres?

### Utslippsreduksjon
- Fornybar energi i stedet for fossil
- Energieffektivisering
- Endret transport, forbruk, kosthold
- Karbonfangst og -lagring

### Tilpasning
- Forberede samfunn på endringer som allerede kommer
- Flomsikring, tørketålende avlinger
- Klimaflyktningberedskap

### Systemendring
- Noen mener grønn kapitalisme kan løse problemet
- Andre mener vi trenger grunnleggende endring i økonomisk system
- Debatt om vekst vs nedvekst

### Individ vs system
- Hvor mye kan individuelle valg bidra?
- Behov for politiske og strukturelle endringer`,
    },
    {
      id: 'historie-17-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-17-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft Norges rolle i klimaspørsmålet. Er Norge en del av løsningen eller problemet?',
        solution: 'Norge som del av løsningen: 1) Høy andel fornybar energi (vannkraft) - nesten all strøm er ren. 2) Elbil-satsing - verdensledende på elektriske biler. 3) Klimafinansiering - Norge bidrar til klimatiltak i fattige land. 4) Regnskogbevaring - Norsk støtte til regnskogvern. 5) Teknologiutvikling - Karbonfangst, havvind, hydrogen. Norge som del av problemet: 1) Olje og gass - Eksporten bidrar til enorme utslipp globalt. 2) Høyt forbruk - Nordmenn har blant verdens høyeste fotavtrykk. 3) Klimahykleri - Snakker grønt, produserer fossil energi. 4) Manglende kutt hjemme - Nasjonale utslipp har ikke falt raskt nok. Konklusjon: Norge har både gode og dårlige sider. Det norske paradokset - tjene på olje, snakke om klima - gjør posisjonen vanskelig. Spørsmålet er om Norge kan omstille seg før oljen tar slutt eller verden slutter å kjøpe den.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-17-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om klimakrisen kan løses innenfor dagens økonomiske system, eller om den krever grunnleggende systemendring.',
        solution: 'Argumenter for at dagens system kan løse det (grønn kapitalisme): 1) Teknologi - Solceller, vindkraft, batterier blir stadig billigere. Markedet driver innovasjon. 2) Prissignaler - Karbonprising kan gjøre forurensing dyrt. 3) Grønn vekst - Økonomien kan vokse mens utslippene faller (frakobling). 4) Pragmatisme - Systemendring tar for lang tid, vi må jobbe med det vi har. Argumenter for systemendring: 1) Vekstlogikk - Kapitalismen krever evig vekst, som er uforenlig med begrenset klode. 2) Utilstrekkelig tempo - Utslippene faller ikke raskt nok tross gode intensjoner. 3) Ulikhet - Dagens system produserer ulikhet som hindrer kollektiv handling. 4) Historien - Ingen grønn vekst har vist seg i praksis - utslipp følger BNP. Sannsynlig: En mellomposisjon - verken ren kapitalisme eller total systemendring, men sterke reguleringer, offentlige investeringer og endret forbrukskultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_17_5: TextbookChapter = {
  id: 'historie-17-5',
  courseId: 'historie',
  chapterNumber: '17.5',
  title: 'Historie og fremtiden',
  description: 'Hva kan historien lære oss om fremtiden?',
  estimatedMinutes: 45,
  competenceGoals: ['fortolkninger av fortiden preget av nåtid', 'historiebruk av ulike aktører'],
  content: [
    {
      id: 'historie-17-5-intro',
      type: 'text',
      content: `## Historiens relevans

Hvorfor studerer vi historie? Ikke bare for å lære fakta om fortiden, men fordi historien hjelper oss å forstå nåtiden og navigere fremtiden. Historien gir oss perspektiv, den viser at verden har vært annerledes og kan bli annerledes igjen.

I dette avsluttende kapittelet skal vi reflektere over hva historien kan lære oss, hvordan historie brukes og misbrukes, og hvilke lærdommer vi kan ta med oss inn i fremtiden.`,
    },
    {
      id: 'historie-17-5-def-1',
      type: 'definition',
      title: 'Historiebevissthet',
      content: `**Historiebevissthet** er forståelsen av sammenhengen mellom fortid, nåtid og fremtid.

Historiebevissthet innebærer:
- Å forstå at nåtiden er formet av fortiden
- Å se at fortiden ble opplevd som nåtid av dem som levde da
- Å innse at våre valg i dag former fremtiden
- Å kunne sette seg inn i fortidens menneskers situasjon

Historiebevissthet er ikke bare kunnskap om fortiden, men evnen til å tenke historisk - å se sammenhenger og endringer over tid.`,
    },
    {
      id: 'historie-17-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-17-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er historiebevissthet, og hvorfor er det viktig å utvikle historiebevissthet?',
        solution: 'Historiebevissthet er forståelsen av sammenhengen mellom fortid, nåtid og fremtid - evnen til å tenke historisk. Det er viktig fordi: 1) Forståelse av nåtiden - Dagens samfunn er et produkt av historiske prosesser. Uten historiekunnskap mangler vi kontekst. 2) Perspektiv - Historien viser at ting har vært annerledes og kan bli annerledes. Det som virker naturlig i dag, er historisk betinget. 3) Kritisk tenkning - Historiebevissthet hjelper oss å gjennomskue manipulering og misbruk av historie. 4) Empati - Å forstå fortidens menneskers valg i deres kontekst utvikler evnen til å forstå andre. 5) Fremtidsorientering - Å se hvordan fortiden formet nåtiden, hjelper oss å tenke om hvordan våre valg former fremtiden. 6) Identitet - Historien gir oss felles referanser og tilhørighet. Historiebevissthet er en demokratisk kompetanse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-5-text-2',
      type: 'text',
      content: `## Historiebruk og historiekultur

Historie brukes på mange måter:

### Politisk bruk
- Legitimering av makt og politikk
- Nasjonalisme og identitetsbygging
- Rettferdiggjøring av krav og konflikter

### Kommersiell bruk
- Filmer, serier, spill
- Turisme og kulturarv
- Markedsføring med "tradisjon"

### Pedagogisk bruk
- Skolen og lærebøkene
- Museer og minnesteder
- Folkeopplysning

### Privat bruk
- Slektsgransking
- Lokalhistorie
- Personlig identitet`,
    },
    {
      id: 'historie-17-5-def-2',
      type: 'definition',
      title: 'Historiemisbruk',
      content: `**Historiemisbruk** er når historien forvrengers, forfalskes eller brukes på måter som er faglig uholdbare, for å tjene bestemte formål.

Eksempler på historiemisbruk:
- **Holocaust-benektelse:** Nekter for at Holocaust fant sted
- **Nasjonalistisk historieskriving:** Glorifiserer egen nasjon, demoniserer fiender
- **Propaganda:** Bruker selektive fakta for politiske formål
- **"Begge sider":** Falsk balanse mellom overgripere og ofre

Historiemisbruk er farlig fordi det kan legitimere urett, spre hat og hindre forsoning.`,
    },
    {
      id: 'historie-17-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-17-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi eksempler på hvordan historie kan misbrukes, og forklar hvorfor historiemisbruk er problematisk.',
        solution: 'Eksempler på historiemisbruk: 1) Holocaust-benektelse - Nekter for dokumenterte fakta, krenker ofre og etterlatte. 2) Nasjonalistisk historieskriving - Glorifiserer egen nasjon, nedvurderer andre. Brukt av Putin for å rettferdiggjøre Ukraina-invasjonen. 3) Rasistisk historiebruk - Fremstiller kolonialisme positivt, nedvurderer ikke-vestlige kulturer. 4) Idealisering av fortiden - "Make America/Norway/etc. great again" ignorerer fortidens problemer. 5) Selektiv hukommelse - Husker egne lidelser, glemmer egne overgrep. Hvorfor problematisk: 1) Legitimerer urett - Misbruk kan rettferdiggjøre diskriminering, vold, krig. 2) Hindrer forsoning - Falsk historieforståelse gjør det umulig å lære av fortiden. 3) Undergraver tillit - Når fakta forvrengres, undergraves felles virkelighetsforståelse. 4) Krenker ofre - Benektelse og relativisering er sekundær viktimisering. Kritisk historiekompetanse er forsvar mot misbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-5-text-3',
      type: 'text',
      content: `## Lærdommer fra historien

Hva kan historien lære oss?

### Om mennesket
- Mennesker er i stand til både ondskap og godhet
- Gruppepress og ideologi kan få vanlige folk til å begå grusomheter
- Mot og medmenneskelighet finnes også i de mørkeste tider

### Om samfunn
- Ingen samfunnsform er "naturlig" eller evig - alt er historisk
- Demokrati må vedlikeholdes og forsvares aktivt
- Velstand kan forsvinne, fremgang er ikke garantert

### Om endring
- Endring er mulig - mye av det vi tar for gitt var utenkelig for noen generasjoner siden
- Endring tar tid, men kan akselerere plutselig
- Enkeltpersoner kan gjøre en forskjell

### Forsiktighetsregler
- Historien gjentar seg ikke eksakt
- Lettvinte paralleller kan villede
- Kontekst er avgjørende`,
    },
    {
      id: 'historie-17-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-17-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke lærdommer fra det 20. århundret mener du er viktigst for det 21. århundret?',
        solution: 'Viktige lærdommer: 1) Demokrati er sårbart - Det 20. århundret viste at demokratier kan falle for autoritære bevegelser. Demokrati må forsvares aktivt. 2) Dehumanisering fører til katastrofe - Holocaust og andre folkemord startet med propaganda som fremstilte grupper som mindreverdige. Når mennesker reduseres til "dem", blir alt mulig. 3) Internasjonalt samarbeid er nødvendig - To verdenskriger viste at nasjonalisme uten rammer fører til krig. FN og EU er forsøk på å institusjonalisere fred. 4) Teknologi er ikke nøytral - Samme teknologi kan brukes til fremgang og ødeleggelse. 5) Velstand er ikke naturlig - Velferdsstaten ble bygget gjennom politiske valg og kan demonteres. 6) Forandring er mulig - Avkolonisering, kvinnefrigjøring, demokratisering viser at undertrykkelse kan overvinnes. Disse lærdommene krever at vi er årvåkne og engasjerte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-5-text-4',
      type: 'text',
      content: `## Fremtiden

Historien handler også om fremtiden:

### Historiens rolle
- Historien viser at fremtiden er åpen - den er ikke forutbestemt
- Våre valg i dag former morgendagen
- Å kjenne fortiden gir verktøy til å forme fremtiden

### Utfordringer fremover
- Klimaendringer krever handling nå
- Demokrati under press fra populisme og autoritære bevegelser
- Teknologi som endrer samfunnet raskere enn vi forstår
- Ulikhet og rettferdighet mellom land og innenfor land

### Håp og muligheter
- Mennesker har løst tilsynelatende umulige problemer før
- Nye generasjoner bringer nye perspektiver
- Historien er full av overraskelser - også positive

Som historiker George Santayana skrev: "De som ikke husker fortiden, er dømt til å gjenta den." Men å huske er ikke nok - vi må også handle.`,
    },
    {
      id: 'historie-17-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-17-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft påstanden "De som ikke husker fortiden, er dømt til å gjenta den."',
        solution: 'Argumenter for påstanden: 1) Historiske paralleller - Mange kriser har likheter med tidligere kriser. Å kjenne historien kan hjelpe oss å gjenkjenne mønstrene. 2) Forebygging - Kunnskap om hvordan fascisme vokste frem, kan hjelpe oss å motvirke lignende utviklinger. 3) Advarsler - Holocaust-utdanning skal hindre gjentakelse. 4) Erfaring - Samfunn som kjenner sin historie, tar bedre beslutninger. Begrensninger ved påstanden: 1) Historien gjentar seg ikke eksakt - Kontekst er alltid forskjellig. For enkle paralleller villeder. 2) Å kjenne historien er ikke nok - Man må også lære de riktige lærdommene. Nazi-Tyskland kjente historien godt. 3) Determinisme - Påstanden kan antyde at vi er fanget i sykluser, men historien er åpen. 4) Misbruk - Historiske paralleller kan misbrukes for å rettferdiggjøre dårlig politikk. Balansert syn: Historiekunnskap er nødvendig men ikke tilstrekkelig. Det krever også kritisk tenkning og vilje til å handle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-17-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-17-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Reflekter over hva du har lært i historiefaget. Hvordan har historiekunnskapen din endret måten du ser på verden?',
        solution: 'Dette er en personlig refleksjonsoppgave. Et godt svar kan inkludere: Nye perspektiver: 1) Forståelse av at dagens samfunn er resultat av historiske prosesser - ingenting er "naturlig". 2) Evne til å se konflikter fra flere sider - forstå hvorfor folk handlet som de gjorde. 3) Bevissthet om endring - at ting har vært annerledes og kan bli annerledes. Konkrete innsikter: 1) Eksempler på historiske hendelser som har gitt deg ny forståelse. 2) Sammenhenger du ikke så før. 3) Historiske paralleller til dagsaktuelle saker. Kritisk tenkning: 1) Evne til å gjennomskue propaganda og misbruk av historie. 2) Bevissthet om at historien skrives fra ulike perspektiver. 3) Forståelse av at kilder må vurderes kritisk. For fremtiden: 1) Hvordan historiekunnskapen påvirker dine valg og engasjement. 2) Hvilke lærdommer du tar med deg. 3) Hvordan du vil bruke historien konstruktivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const HISTORIE_CHAPTERS_DEL4 = [
  CHAPTER_HISTORIE_13_1,
  CHAPTER_HISTORIE_13_2,
  CHAPTER_HISTORIE_13_3,
  CHAPTER_HISTORIE_13_4,
  CHAPTER_HISTORIE_13_5,
  CHAPTER_HISTORIE_14_1,
  CHAPTER_HISTORIE_14_2,
  CHAPTER_HISTORIE_14_3,
  CHAPTER_HISTORIE_14_4,
  CHAPTER_HISTORIE_15_1,
  CHAPTER_HISTORIE_15_2,
  CHAPTER_HISTORIE_15_3,
  CHAPTER_HISTORIE_15_4,
  CHAPTER_HISTORIE_16_1,
  CHAPTER_HISTORIE_16_2,
  CHAPTER_HISTORIE_16_3,
  CHAPTER_HISTORIE_16_4,
  CHAPTER_HISTORIE_17_1,
  CHAPTER_HISTORIE_17_2,
  CHAPTER_HISTORIE_17_3,
  CHAPTER_HISTORIE_17_4,
  CHAPTER_HISTORIE_17_5,
];
