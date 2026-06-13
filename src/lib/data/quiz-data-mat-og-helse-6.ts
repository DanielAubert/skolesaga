import type { QuizQuestion } from './quiz-data';

const quizData_mat_og_helse_6: Record<string, QuizQuestion[]> = {
  'mat-6-1-1': [
    {
      question: 'Hva omdannes karbohydrater til når kroppen bruker dem som drivstoff?',
      options: ['Glukose (blodsukker)', 'Proteiner', 'Vitaminer', 'Vann'],
      explanation: 'Karbohydrater er kroppens viktigste energikilde. De omdannes til glukose (blodsukker) som cellene bruker som drivstoff.',
    },
    {
      question: 'Hvilken type karbohydrater gir jevn og langvarig energi?',
      options: [
        'Sammensatte karbohydrater (fullkorn, grønnsaker)',
        'Enkle karbohydrater (godteri, brus)',
        'Hvitt sukker',
        'Hvitt brød',
      ],
      explanation: 'Sammensatte karbohydrater finnes i fullkorn, grønnsaker og belgfrukter. De tas saktere opp i blodet og gir jevn, langvarig energi.',
    },
    {
      question: 'Hva er hovedoppgaven til proteiner i kroppen?',
      options: [
        'Å bygge nye celler, muskler, hår og negler',
        'Å lagre energi som fett',
        'Å holde kroppen varm',
        'Å gi kroppen vann',
      ],
      explanation: 'Proteiner er byggestoffer som kroppen bruker til å lage nye celler, muskler, hår og negler. Barn trenger proteiner for å vokse.',
    },
    {
      question: 'Hvilken type fett er bra for hjertet?',
      options: [
        'Umettet fett (fisk, nøtter, avokado, olivenolje)',
        'Transfett',
        'Mettet fett fra smør og fløte',
        'Alt fett er like usunt',
      ],
      explanation: 'Umettet fett finnes i fisk, nøtter, avokado og olivenolje og er bra for hjertet. Mettet fett bør du spise mindre av, og transfett bør unngås.',
    },
    {
      question: 'Hvilket mineral er viktig for sterke tenner og knokler?',
      options: ['Kalsium', 'Jern', 'Sink', 'Vitamin C'],
      explanation: 'Kalsium gir sterke tenner og knokler, og finnes i melk og ost. Jern frakter oksygen i blodet, og sink hjelper med sårtilheling.',
    },
  ],
  'mat-6-1-2': [
    {
      question: 'Hva betyr det å ha et balansert kosthold?',
      options: [
        'Å spise variert mat som gir kroppen alle næringsstoffene den trenger',
        'Å spise perfekt hver eneste dag',
        'Å bare spise grønnsaker',
        'Å aldri spise mellom måltidene',
      ],
      explanation: 'Et balansert kosthold betyr å spise variert mat som gir kroppen alle næringsstoffene den trenger. Det handler om gode vaner over tid, ikke å spise perfekt hver dag.',
    },
    {
      question: 'Ifølge tallerkenmodellen, hva bør utgjøre halve tallerkenen?',
      options: ['Grønnsaker', 'Kornprodukter', 'Kjøtt', 'Dessert'],
      explanation: 'I tallerkenmodellen skal halve tallerkenen være grønnsaker, en fjerdedel kornprodukter/poteter og en fjerdedel proteinkilde.',
    },
    {
      question: 'Hvor mange ganger i uken anbefaler de norske kostrådene at du spiser fisk?',
      options: ['2-3 ganger', 'Aldri', 'Hver dag', 'Én gang i måneden'],
      explanation: 'De norske kostholdsrådene anbefaler å spise fisk 2-3 ganger i uken, velge grove kornprodukter og spise mye grønnsaker, frukt og bær.',
    },
    {
      question: 'Hvorfor er det viktig å spise regelmessige måltider?',
      options: [
        'Det holder blodsukkeret stabilt og gir jevn energi gjennom dagen',
        'Det gjør at du aldri blir sulten igjen',
        'Det er bare viktig for voksne',
        'Det gjør maten billigere',
      ],
      explanation: 'Regelmessige måltider holder blodsukkeret stabilt, gir jevn energi, forebygger overspising og hjelper konsentrasjonen på skolen.',
    },
    {
      question: 'Hva er den beste tørstedrikken?',
      options: ['Vann', 'Brus', 'Saft med sukker', 'Energidrikk'],
      explanation: 'Vann er den beste tørstedrikken. Kroppen består av ca. 60 % vann. Brus, saft og energidrikker bør begrenses fordi de inneholder mye sukker.',
    },
  ],
  'mat-6-1-3': [
    {
      question: 'Hvordan er ingrediensene sortert i en ingrediensliste?',
      options: [
        'Etter mengde, slik at det det er mest av kommer først',
        'I tilfeldig rekkefølge',
        'Etter pris',
        'Alfabetisk',
      ],
      explanation: 'Ingrediensene er listet opp etter mengde. Den ingrediensen det er mest av kommer først. Står sukker tidlig, er det mye sukker i produktet.',
    },
    {
      question: 'Hva finner du IKKE på en ferdigpakket matvare?',
      options: [
        'Hvor mange som har laget produktet',
        'Ingrediensliste',
        'Næringsinnhold',
        'Holdbarhetsdato',
      ],
      explanation: 'På pakken finner du ingrediensliste, næringsinnhold, holdbarhetsdato og allergiinformasjon, men ikke hvor mange som laget produktet.',
    },
    {
      question: 'Hva betyr det hvis sukker står tidlig i ingredienslisten?',
      options: [
        'Det er mye sukker i produktet',
        'Det er lite sukker i produktet',
        'Produktet er sukkerfritt',
        'Sukkeret er sunt',
      ],
      explanation: 'Siden ingrediensene er sortert etter mengde, betyr det at det er mye sukker i produktet hvis sukker står tidlig i listen.',
    },
    {
      question: 'Hva betyr Nøkkelhullet-merket på en matvare?',
      options: [
        'Produktet er et sunnere valg med mindre fett, sukker og salt',
        'Produktet er økologisk',
        'Produktet er det dyreste i butikken',
        'Produktet inneholder mye sukker',
      ],
      explanation: 'Nøkkelhullet er et norsk/nordisk merke for sunnere valg. Produktet har mindre fett, sukker og salt, og mer fiber og fullkorn.',
    },
    {
      question: 'Hvorfor er det lurt å se på næringsinnhold "per 100 gram"?',
      options: [
        'Det gjør det lett å sammenligne ulike produkter',
        'Det viser nøyaktig hva du spiser i én porsjon',
        'Det viser prisen',
        'Det er det eneste som står på pakken',
      ],
      explanation: 'Per 100 gram gjør det lett å sammenligne ulike produkter. Per porsjon viser hva du faktisk får i deg, men da må du sjekke hvor stor porsjonen er.',
    },
  ],
  'mat-6-2-1': [
    {
      question: 'Hvordan bør du holde maten når du kutter med kniv?',
      options: [
        'Med fingertuppene bøyd inn (klogrep)',
        'Med fingrene rett ut mot kniven',
        'Med bare én finger på maten',
        'Uten å holde maten i det hele tatt',
      ],
      explanation: 'Du holder maten med den andre hånden og bøyer fingertuppene inn (klogrep), og kutter bort fra kroppen. Da unngår du å skjære deg.',
    },
    {
      question: 'Hva betyr det å koke mat?',
      options: [
        'Å varme mat i vann som bobler',
        'Å varme mat i en tørr panne',
        'Å la maten stå i kaldt vann',
        'Å sette maten i fryseren',
      ],
      explanation: 'Koking betyr å varme mat i vann som bobler. Du fyller en kjele med vann, setter på høy varme til det koker, og legger så i maten.',
    },
    {
      question: 'Omtrent hvor lenge må poteter koke?',
      options: ['15-25 minutter', '1-2 minutter', '45-60 minutter', 'Poteter skal ikke kokes'],
      explanation: 'Poteter koker ca. 15-25 minutter avhengig av størrelse. Pasta koker 8-12 minutter, og ris koker 15-20 minutter.',
    },
    {
      question: 'Hva gjør steking med maten?',
      options: [
        'Gir maten en fin brun overflate og god smak',
        'Gjør maten kald',
        'Fjerner all smak fra maten',
        'Gjør maten flytende',
      ],
      explanation: 'Steking gir maten en fin brun overflate og god smak. Du varmer pannen, har i olje eller smør, og lar maten bli gyllenbrun før du snur.',
    },
    {
      question: 'Hvorfor bør du ikke overfylle stekepannen?',
      options: [
        'Maten skal ha plass for å bli ordentlig stekt',
        'Pannen blir for tung',
        'Det bruker mer strøm',
        'Maten blir for varm',
      ],
      explanation: 'Du bør ikke overfylle pannen fordi maten trenger plass for å bli ordentlig brun og stekt. For mye mat samtidig gjør at den koker i stedet for å steke.',
    },
  ],
  'mat-6-2-2': [
    {
      question: 'Hva gjør gjær med en deig?',
      options: [
        'Lager bobler av gass som får deigen til å heve',
        'Gjør deigen hard og flat',
        'Gjør deigen kald',
        'Gir deigen en blå farge',
      ],
      explanation: 'Gjær er mikroorganismer som spiser sukker og produserer karbondioksid (gass). Gassen lager bobler i deigen og får den til å heve.',
    },
    {
      question: 'Hvor varm bør væsken være når du løser opp gjær?',
      options: [
        'Lunken, ca. 37 grader',
        'Kokende varm',
        'Iskald',
        'Det spiller ingen rolle',
      ],
      explanation: 'Væsken må være lunken, ca. 37 grader. Hvis den er for varm, dør gjæren og deigen vil ikke heve.',
    },
    {
      question: 'Hva gjør elting med en gjærdeig?',
      options: [
        'Utvikler glutenet så brødet blir seigt og elastisk',
        'Gjør deigen kald',
        'Får deigen til å heve med en gang',
        'Fjerner all luft fra deigen',
      ],
      explanation: 'Elting utvikler glutenet i melet, som gjør brødet seigt og elastisk. Du bør elte i 10-15 minutter til deigen er glatt og smidig.',
    },
    {
      question: 'Hva er forskjellen på bakepulver og gjær?',
      options: [
        'Bakepulver virker raskt, mens gjær trenger tid til å heve',
        'De er helt like',
        'Gjær virker raskere enn bakepulver',
        'Bakepulver brukes bare i brød',
      ],
      explanation: 'Bakepulver virker raskt og deigen må stekes med en gang (brukes i kaker og muffins). Gjær trenger tid til å heve og brukes i brød, boller og pizza.',
    },
    {
      question: 'Hvordan kan du sjekke om en gjærdeig er eltet nok?',
      options: [
        'Den er glatt, smidig og spretter tilbake når du trykker på den',
        'Den er hard og tørr',
        'Den er veldig klebrig',
        'Den faller fra hverandre',
      ],
      explanation: 'En ferdig eltet deig er glatt og smidig, ikke lenger klebrig, og spretter tilbake når du trykker på den. Du kan også strekke den tynn uten at den ryker.',
    },
  ],
  'mat-6-3-1': [
    {
      question: 'Hva er kryssforurensning?',
      options: [
        'Når bakterier overføres fra én matvare til en annen',
        'Når mat blir for varm',
        'Når maten mister smak',
        'Når man bruker for mye krydder',
      ],
      explanation: 'Kryssforurensning er når bakterier overføres fra en matvare til en annen, for eksempel fra rått kjøtt til salat via skjærefjøl eller hender.',
    },
    {
      question: 'Hva kan dårlig hygiene på kjøkkenet føre til?',
      options: ['Matforgiftning', 'Bedre smak', 'Raskere matlaging', 'Mer næring i maten'],
      explanation: 'Dårlig hygiene kan føre til matforgiftning. Bakterier, virus og andre mikroorganismer kan formere seg i mat og gjøre oss syke.',
    },
    {
      question: 'Hvor kald bør et kjøleskap være for å oppbevare mat trygt?',
      options: ['Under 4 grader', 'Under 18 grader', 'Akkurat 10 grader', 'Over 20 grader'],
      explanation: 'Kjøleskapet bør være under 4 grader, og fryseboksen under -18 grader. Rått kjøtt og fisk bør stå nederst i kjøleskapet.',
    },
    {
      question: 'Hvordan unngår du best kryssforurensning når du lager mat?',
      options: [
        'Bruk ulike skjærefjøler for kjøtt og grønnsaker',
        'Bruk samme fjøl til alt',
        'Hopp over håndvask',
        'La rått kjøtt ligge sammen med salat',
      ],
      explanation: 'For å unngå kryssforurensning bør du bruke ulike skjærefjøler for kjøtt og grønnsaker, vaske fjøler, kniver og hender mellom bruk, og holde rått kjøtt adskilt.',
    },
    {
      question: 'Hva er et tegn på matforgiftning?',
      options: [
        'Magesmerter, kvalme og diaré',
        'Bedre humør',
        'Mer energi',
        'Sterkere muskler',
      ],
      explanation: 'Tegn på matforgiftning er magesmerter, kvalme, oppkast, diaré og feber. De fleste blir friske etter noen dager, men det kan være alvorlig for noen.',
    },
  ],
  'mat-6-3-2': [
    {
      question: 'Hvorfor kan stumpe (sløve) kniver være farligere enn skarpe?',
      options: [
        'Du må presse hardere, så kniven sklir lettere',
        'De er tyngre',
        'De er alltid skitne',
        'De koster mer',
      ],
      explanation: 'Stumpe kniver er farligere fordi du må presse hardere, og da sklir kniven lettere og du kan skjære deg. Bruk derfor en skarp kniv.',
    },
    {
      question: 'Hva skal du IKKE gjøre hvis det begynner å brenne i en stekepanne?',
      options: [
        'Bruke vann på flammene',
        'Legge lokk på pannen',
        'Slå av varmen',
        'La lokket ligge til pannen er avkjølt',
      ],
      explanation: 'Du skal ALDRI bruke vann på en brennende stekepanne, det gjør det verre. Legg heller lokk på for å kvele ilden, og slå av varmen.',
    },
    {
      question: 'Hvor lenge bør du kjøle en brannskade med rennende vann?',
      options: ['Ca. 20 minutter', 'Ca. 5 sekunder', 'Ca. 2 minutter', 'Du skal ikke bruke vann'],
      explanation: 'Ved brannskade bør du kjøle med rennende, lunkent vann i 20 minutter, dekke til med ren bandasje og søke legehjelp ved alvorlige skader.',
    },
    {
      question: 'Hva må du IKKE ha i en mikrobølgeovn?',
      options: [
        'Metall',
        'Mikrobølgesikre beholdere',
        'Vann',
        'Mat',
      ],
      explanation: 'Du må aldri ha metall i mikrobølgeovnen. Bruk kun mikrobølgesikre beholdere, og vær forsiktig fordi innholdet kan være varmt selv om beholderen er kald.',
    },
    {
      question: 'Hva er en god regel for å unngå kuttskader når du er ferdig med kniven?',
      options: [
        'Vask kniven med en gang og legg den aldri i oppvaskvann',
        'La den ligge i en bunke oppvask',
        'Legg den i en skål med vann',
        'La den ligge på gulvet',
      ],
      explanation: 'Vask kniven med en gang og oppbevar den i knivblokk eller skuff. Legg aldri kniv i oppvaskvann, da den er usynlig under vannet og kan skade deg.',
    },
  ],
  'mat-6-4-1': [
    {
      question: 'Hva har formet norsk tradisjonell mat?',
      options: [
        'Naturen, det kalde klimaet og den lange kysten',
        'Bare moderne butikker',
        'Mat fra andre land',
        'Tilfeldigheter uten grunn',
      ],
      explanation: 'Norsk mat er formet av naturen, klimaet og historien. Kaldt klima og lang kyst har gjort fisk, kjøtt og konservering viktig.',
    },
    {
      question: 'Hvilken rett regnes som den norske nasjonalretten?',
      options: ['Fårikål', 'Pizza', 'Sushi', 'Taco'],
      explanation: 'Fårikål regnes som den norske nasjonalretten. Den lages av sau (får) kokt med kål.',
    },
    {
      question: 'Hvilke metoder ble brukt til å konservere mat i gamle dager?',
      options: [
        'Tørking, røyking og sylting',
        'Fryser og mikrobølgeovn',
        'Bare kjøleskap',
        'Bare salting med sukker',
      ],
      explanation: 'Før i tiden var konservering ved tørking, røyking og sylting viktig for å få maten til å holde seg gjennom det lange og kalde norske vinterhalvåret.',
    },
    {
      question: 'Hvilken mat er typisk for norsk julefeiring?',
      options: [
        'Ribbe, pinnekjøtt eller lutefisk',
        'Gresk salat',
        'Sushi og ramen',
        'Tacos og guacamole',
      ],
      explanation: 'Til jul spiser nordmenn ribbe (Østlandet), pinnekjøtt (Vestlandet), lutefisk, risgrøt med mandel og julekaker.',
    },
    {
      question: 'Hva er en regional spesialitet i Norge?',
      options: [
        'Smalahove på Vestlandet',
        'Pizza på Østlandet',
        'Curry i Trøndelag',
        'Sushi i Nord-Norge',
      ],
      explanation: 'Norge har regionale spesialiteter, som smalahove og pinnekjøtt på Vestlandet, ribbe og lutefisk på Østlandet, og mølje i Nord-Norge.',
    },
  ],
  'mat-6-4-2': [
    {
      question: 'Hvorfor er maten forskjellig i ulike land?',
      options: [
        'Ulike råvarer, klima, religion og tradisjoner',
        'Bare fordi folk har ulik smak',
        'Bare på grunn av prisen',
        'Det er egentlig helt likt overalt',
      ],
      explanation: 'Maten er forskjellig fordi ulike råvarer vokser i ulike klimaer, religion påvirker hva folk spiser, tradisjoner går i arv, og handel og innvandring sprer matkultur.',
    },
    {
      question: 'Hvilke krydder er typiske for indisk mat?',
      options: [
        'Gurkemeie, spisskummin og garam masala',
        'Bare salt og pepper',
        'Kanel og vanilje',
        'Oregano og basilikum',
      ],
      explanation: 'Indisk mat bruker krydder som gurkemeie, spisskummin og garam masala, og har mange vegetariske retter som curry og dal.',
    },
    {
      question: 'Hvilket land bruker mye olivenolje, tomatsaus og basilikum?',
      options: ['Italia', 'Japan', 'India', 'Mexico'],
      explanation: 'Italia er kjent for pizza, pasta og risotto, og bruker mye ferske grønnsaker, olivenolje, tomatsaus, basilikum og oster som parmesan.',
    },
    {
      question: 'Hva brukes ofte som bestikk i kinesisk/asiatisk mat?',
      options: ['Spisepinner', 'Kniv og gaffel bare', 'Skje bare', 'Hendene'],
      explanation: 'I kinesisk og mye asiatisk mat brukes spisepinner som bestikk. Maten er ofte wok, nudler og ris med soyasaus og ingefær.',
    },
    {
      question: 'Hvilket krydder gir maten en varm, jordaktig smak og brukes mye i India?',
      options: ['Gurkemeie', 'Oregano', 'Kanel', 'Chili'],
      explanation: 'Gurkemeie gir maten en varm, jordaktig smak og brukes mye i India. Chili gir styrke, og oregano er urteaktig og brukes i Italia og Hellas.',
    },
  ],
};

export default quizData_mat_og_helse_6;
