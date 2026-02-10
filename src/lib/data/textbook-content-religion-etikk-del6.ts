/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Religion og etikk VG3
 *
 * Seksjon 6: Dialog, mangfold og eksistensielle spørsmål (Kapittel 6.1–6.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1 – Religionsdialog – prinsipper og praksis
// ============================================================================

const CHAPTER_RELIGION_ETIKK_6_1: TextbookChapter = {
  id: 'religion-etikk-6-1',
  courseId: 'religion-etikk',
  title: 'Religionsdialog – prinsipper og praksis',
  estimatedReadingTime: 20,
  exercises: [],
  content: [
    // --- Introduksjon ---
    {
      id: 're-6-1-intro',
      type: 'text',
      title: 'Religionsdialog – prinsipper og praksis',
      content:
        'I en verden preget av religiøst mangfold er dialog mellom ulike tros- og livssynstradisjoner viktigere enn noen gang. Religionsdialog handler om å møte mennesker med en annen tro enn sin egen med respekt, nysgjerrighet og vilje til å forstå. I dette kapittelet ser vi på hva religionsdialog innebærer, hvilke former den kan ta, og hvilke prinsipper som ligger til grunn for en fruktbar dialog.',
    },

    // --- Hva er religionsdialog? ---
    {
      id: 're-6-1-def-1',
      type: 'definition',
      title: 'Religionsdialog',
      content:
        'Religionsdialog er en samtale mellom representanter for ulike religioner og livssyn der målet er gjensidig forståelse, respekt og samarbeid – ikke å overbevise den andre om at ens egen tro er den rette.',
    },
    {
      id: 're-6-1-text-1',
      type: 'text',
      title: 'Hvorfor religionsdialog?',
      content:
        'Religionsdialog bygger på erkjennelsen av at mennesker med ulik tro lever side om side i moderne samfunn. Dialog kan bidra til å bygge ned fordommer, forebygge konflikter og skape grunnlag for fredelig sameksistens. I en globalisert verden der kulturer og religioner møtes stadig oftere, er evnen til å føre en respektfull samtale på tvers av livssynsgrenser en nøkkelkompetanse.\n\nEn viktig forutsetning for religionsdialog er at deltakerne er trygge i sin egen tradisjon, samtidig som de er åpne for å lære av andre. Dialog krever ikke at man gir opp sin egen overbevisning, men at man anerkjenner den andres rett til å ha en annen tro.',
    },
    {
      id: 're-6-1-example-1',
      type: 'example',
      title: 'Parlamentet for verdens religioner',
      content:
        'Parlamentet for verdens religioner (Parliament of the World\'s Religions) ble første gang avholdt i Chicago i 1893 og regnes som starten på den moderne interreligiøse dialogen. Her møttes representanter fra hinduisme, buddhisme, jødedom, kristendom, islam og andre tradisjoner for første gang i en formell dialogsetting. Siden den gang har parlamentet blitt avholdt jevnlig og har bidratt til å sette religionsdialog på den internasjonale dagsordenen.',
    },
    {
      id: 're-6-1-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva er hovedmålet med religionsdialog?',
      options: [
        'Å overbevise andre om at egen religion er den rette',
        'Gjensidig forståelse, respekt og samarbeid',
        'Å lage en felles verdensreligion',
        'Å bevise at alle religioner er like',
      ],
      correctAnswer: 1,
      explanation:
        'Religionsdialog handler om gjensidig forståelse, respekt og samarbeid mellom representanter for ulike tros- og livssynstradisjoner. Målet er ikke å overbevise den andre, men å forstå og respektere.',
    },

    // --- Økumenikk og interreligiøs dialog ---
    {
      id: 're-6-1-def-2',
      type: 'definition',
      title: 'Økumenikk',
      content:
        'Økumenikk betegner dialogen og samarbeidet mellom ulike kristne kirkesamfunn. Begrepet kommer fra det greske ordet «oikoumene», som betyr «den bebodde verden». Økumenikkens mål er å fremme enhet og forståelse mellom kristne konfessjoner.',
    },
    {
      id: 're-6-1-def-3',
      type: 'definition',
      title: 'Interreligiøs dialog',
      content:
        'Interreligiøs dialog er samtale og samarbeid mellom representanter for ulike religioner, for eksempel mellom kristendom, islam, jødedom, hinduisme og buddhisme. Til forskjell fra økumenikk omfatter interreligiøs dialog møter på tvers av religionsgrensene.',
    },
    {
      id: 're-6-1-text-2',
      type: 'text',
      title: 'Fra økumenikk til interreligiøs dialog',
      content:
        'Den økumeniske bevegelsen vokste frem på begynnelsen av 1900-tallet som et forsøk på å overvinne splittelsen mellom ulike kristne kirkesamfunn. Kirkenes Verdensråd, grunnlagt i 1948, har vært den viktigste plattformen for økumenisk dialog.\n\nParallelt med den økumeniske bevegelsen har den interreligiøse dialogen utviklet seg. Særlig etter andre verdenskrig og Holocaust ble dialogen mellom kristne og jøder intensivert. Det andre satisfaserens katolske kirkemøte (1962–1965) markerte et vendepunkt for Den katolske kirkes holdning til andre religioner gjennom dokumentet «Nostra Aetate», som anerkjente positive elementer i andre religioner.\n\nI Norge har Samarbeidsrådet for tros- og livssynssamfunn (STL) vært en viktig arena for interreligiøs dialog siden 1996. Her møtes representanter fra kristne kirkesamfunn, islamske trossamfunn, jødiske organisasjoner, buddhistiske foreninger, humanetikere og andre livssyn.',
    },
    {
      id: 're-6-1-example-2',
      type: 'example',
      title: 'Samarbeidsrådet for tros- og livssynssamfunn (STL)',
      content:
        'STL ble grunnlagt i 1996 og er Norges fremste arena for dialog mellom ulike tros- og livssynssamfunn. Rådet arbeider for likebehandling av alle tros- og livssynssamfunn i Norge og gir innspill til myndighetene i religions- og livssynspolitiske spørsmål. STL arrangerer også dialogmøter, seminarer og felles markeringer, som for eksempel minnemarkeringer etter terrorangrep.',
    },
    {
      id: 're-6-1-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hva er forskjellen mellom økumenikk og interreligiøs dialog?',
      options: [
        'Økumenikk handler om dialog mellom ulike kristne kirkesamfunn, mens interreligiøs dialog går på tvers av religionsgrensene',
        'Interreligiøs dialog handler bare om kristendom og islam',
        'Økumenikk er et politisk begrep, ikke et religiøst',
        'Det er ingen forskjell mellom de to begrepene',
      ],
      correctAnswer: 0,
      explanation:
        'Økumenikk er dialog og samarbeid mellom ulike kristne kirkesamfunn, mens interreligiøs dialog omfatter samtale og samarbeid mellom representanter for ulike religioner.',
    },

    // --- Dialogmodeller ---
    {
      id: 're-6-1-text-3',
      type: 'text',
      title: 'Dialogmodeller',
      content:
        'Det finnes flere ulike modeller for hvordan religionsdialog kan gjennomføres. Hver modell har sine styrker og begrensninger, og valget av modell avhenger av kontekst og formål.\n\n**Livsdialog** er den mest uformelle formen for dialog. Den oppstår i hverdagen når mennesker med ulik religiøs bakgrunn møtes som naboer, kollegaer eller medstudenter. Her handler det om å leve side om side med respekt og forståelse.\n\n**Handlingsdialog** innebærer at mennesker fra ulike religioner samarbeider om praktiske oppgaver, som humanitært arbeid, miljøvern eller fattigdomsbekjempelse. Samarbeidet bygger broer uten at man nødvendigvis diskuterer teologi.\n\n**Teologisk dialog** er en mer formell samtale der representanter for ulike religioner drøfter teologiske spørsmål, som gudsbegrep, frelse, etikk og menneskesyn. Denne typen dialog krever god kunnskap om egen og andres tradisjon.\n\n**Erfaringsdialog** fokuserer på den personlige religiøse erfaringen. Deltakerne deler sine opplevelser av bønn, meditasjon, ritualer og åndelig praksis. Denne formen for dialog kan skape dypere forståelse for den andres tro på et personlig plan.',
    },
    {
      id: 're-6-1-example-3',
      type: 'example',
      title: 'Handlingsdialog i praksis',
      content:
        'Etter terrorangrepet mot Al-Noor-moskeen i Bærum i 2019 stilte representanter fra ulike tros- og livssynssamfunn opp for å vise solidaritet med det muslimske miljøet. Kristne, jøder, humanetikere og andre dannet en «ring av fred» rundt moskeer i flere norske byer. Dette er et eksempel på handlingsdialog der konkrete handlinger uttrykker solidaritet og samhold på tvers av religiøse skillelinjer.',
    },
    {
      id: 're-6-1-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content:
        'Forklar de fire dialogmodellene (livsdialog, handlingsdialog, teologisk dialog og erfaringsdialog) med egne ord. Gi et eksempel på hver.',
    },
    {
      id: 're-6-1-exercise-4',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 4',
      content: 'Hvilken dialogmodell handler om at mennesker fra ulike religioner samarbeider om praktiske oppgaver?',
      options: [
        'Teologisk dialog',
        'Livsdialog',
        'Handlingsdialog',
        'Erfaringsdialog',
      ],
      correctAnswer: 2,
      explanation:
        'Handlingsdialog innebærer at mennesker fra ulike religioner samarbeider om praktiske oppgaver som humanitært arbeid, miljøvern eller fattigdomsbekjempelse.',
    },
    {
      id: 're-6-1-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 5',
      content:
        'Diskuter: Hvilke utfordringer kan oppstå i religionsdialog? Hva kan gjøre dialogen vanskelig, og hvordan kan man overkomme disse utfordringene?',
    },

    // --- Oppsummering ---
    {
      id: 're-6-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Religionsdialog er en samtale mellom ulike tros- og livssynstradisjoner med mål om gjensidig forståelse og respekt. Økumenikk handler om dialog innenfor kristendommen, mens interreligiøs dialog går på tvers av religionsgrensene. Det finnes flere dialogmodeller – livsdialog, handlingsdialog, teologisk dialog og erfaringsdialog – som hver har sine styrker og begrensninger. Organisasjoner som STL spiller en viktig rolle for dialogen i det norske samfunnet.',
    },

    // --- Samleoppgaver ---
    {
      id: 're-6-1-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Tenk deg at du skal arrangere et dialogmøte mellom representanter for tre ulike religioner eller livssyn. Beskriv hvem du ville invitert, hvilken dialogmodell du ville brukt, og hvilke temaer du ville tatt opp. Begrunn valgene dine.',
    },
  ],
};

// ============================================================================
// Kapittel 6.2 – Religion og konflikt
// ============================================================================

const CHAPTER_RELIGION_ETIKK_6_2: TextbookChapter = {
  id: 'religion-etikk-6-2',
  courseId: 'religion-etikk',
  title: 'Religion og konflikt',
  estimatedReadingTime: 22,
  exercises: [],
  content: [
    // --- Introduksjon ---
    {
      id: 're-6-2-intro',
      type: 'text',
      title: 'Religion og konflikt',
      content:
        'Religion har gjennom historien vært både en kilde til konflikt og en drivkraft for fred. I dette kapittelet undersøker vi det komplekse forholdet mellom religion og konflikt. Vi ser på hvordan religiøse overbevisninger kan brukes til å legitimere vold, men også hvordan religiøse tradisjoner har sterke ressurser for forsoning og fredsskaping.',
    },

    // --- Religion som kilde til konflikt ---
    {
      id: 're-6-2-def-1',
      type: 'definition',
      title: 'Religionskrig',
      content:
        'En religionskrig er en væpnet konflikt der religiøse motsetninger er en sentral årsak til, eller legitimering av, krigshandlinger. Historiske eksempler inkluderer korstogene (1096–1291) og de europeiske religionskrigene på 1500- og 1600-tallet.',
    },
    {
      id: 're-6-2-text-1',
      type: 'text',
      title: 'Hvordan kan religion bidra til konflikt?',
      content:
        'Religion kan bidra til konflikt på flere måter. For det første kan religion brukes til å skape skarpe skiller mellom «oss» og «dem». Når egen religion oppfattes som den eneste sanne veien, kan dette føre til mistillit og fiendtlighet mot andre grupper.\n\nFor det andre kan religiøse tekster tolkes slik at de legitimerer vold. Både Bibelen, Koranen og andre hellige skrifter inneholder passasjer som i visse kontekster kan brukes til å rettferdiggjøre krigføring eller undertrykking.\n\nFor det tredje kan religion knyttes til etnisk, nasjonal eller politisk identitet på en måte som forsterker konflikter. I slike tilfeller er det ofte vanskelig å skille mellom religiøse og politiske årsaker til konflikten.\n\nDet er imidlertid viktig å påpeke at de fleste konflikter der religion spiller en rolle, har sammensatte årsaker. Økonomiske, politiske og sosiale faktorer er nesten alltid til stede sammen med religiøse motsetninger.',
    },
    {
      id: 're-6-2-example-1',
      type: 'example',
      title: 'Konflikten i Nord-Irland',
      content:
        'Konflikten i Nord-Irland (ofte kalt «The Troubles», ca. 1968–1998) blir gjerne fremstilt som en konflikt mellom katolikker og protestanter. I virkeligheten var konflikten langt mer sammensatt og handlet like mye om politiske rettigheter, nasjonal tilhørighet (britisk vs. irsk), økonomisk ulikhet og historisk undertrykkelse. Religiøs tilhørighet fungerte som en identitetsmarkør som forsterket de politiske skillelinjene, men var ikke den eneste eller nødvendigvis den viktigste årsaken til konflikten.',
    },
    {
      id: 're-6-2-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hvilken påstand om religion og konflikt er mest presis?',
      options: [
        'Religion er alltid den viktigste årsaken til krig',
        'De fleste konflikter der religion spiller en rolle, har sammensatte årsaker',
        'Religion har aldri noe med konflikter å gjøre',
        'Bare monoteistiske religioner fører til konflikter',
      ],
      correctAnswer: 1,
      explanation:
        'De fleste konflikter der religion er involvert, har sammensatte årsaker der økonomiske, politiske og sosiale faktorer spiller sammen med religiøse motsetninger.',
    },

    // --- Religion som fredsstifter ---
    {
      id: 're-6-2-text-2',
      type: 'text',
      title: 'Religion som fredsstifter',
      content:
        'Alle store religioner har sterke tradisjoner for fred, forsoning og rettferdighet. Jesu budskap om nestekjærlighet, Buddhas lære om ikke-vold (ahimsa), islams vektlegging av fred (islam betyr «underkastelse under Guds vilje» og er beslektet med det arabiske ordet for fred, «salam»), og hinduismens ideal om ahimsa er alle eksempler på religiøse ressurser for fredsskaping.\n\nReligiøse ledere har ofte spilt viktige roller i fredsprosesser. Kvekernes tradisjon for pasifisme, Mahatma Gandhis ikke-voldelige motstand, Martin Luther King Jr.s borgerrettighetskamp inspirert av kristne verdier, og Desmond Tutus rolle i forsoningsprosessen i Sør-Afrika viser hvordan religion kan være en kraftfull drivkraft for rettferdighet og fred.\n\nReligiøse organisasjoner driver også omfattende humanitært arbeid over hele verden. Kirkens Nødhjelp, Caritas, Islamic Relief og mange andre religiøst funderte organisasjoner arbeider for å lindre nød og bygge fred.',
    },
    {
      id: 're-6-2-example-2',
      type: 'example',
      title: 'Desmond Tutu og forsoningsprosessen',
      content:
        'Erkebiskop Desmond Tutu ledet Sannhets- og forsoningskommisjonen i Sør-Afrika etter apartheids fall. Hans arbeid var dypt forankret i kristen teologi om tilgivelse og forsoning. Kommisjonen ga ofre for apartheid mulighet til å fortelle sine historier, og gjerningsmenn kunne innrømme sine handlinger og søke amnesti. Tutus tilnærming var inspirert av det afrikanske begrepet «ubuntu» – «jeg er fordi vi er» – som han knyttet til kristen nestekjærlighet.',
    },
    {
      id: 're-6-2-exercise-2',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 2',
      content:
        'Velg en religiøs fredsskaper (for eksempel Gandhi, Martin Luther King Jr. eller Desmond Tutu). Forklar hvordan denne personens religiøse overbevisning påvirket arbeidet for fred og rettferdighet.',
    },

    // --- Fundamentalisme og ekstremisme ---
    {
      id: 're-6-2-def-2',
      type: 'definition',
      title: 'Religiøs fundamentalisme',
      content:
        'Religiøs fundamentalisme er en retning innenfor ulike religioner som vektlegger en bokstavelig tolkning av hellige tekster og avviser modernisering og liberal teologi. Fundamentalister ønsker gjerne å gjenopprette det de oppfatter som religionens opprinnelige og rene form.',
    },
    {
      id: 're-6-2-def-3',
      type: 'definition',
      title: 'Religiøs ekstremisme',
      content:
        'Religiøs ekstremisme innebærer at religiøse overbevisninger brukes til å rettferdiggjøre voldshandlinger eller undertrykkelse. Mens fundamentalisme ikke nødvendigvis innebærer vold, krysser ekstremisme grensen til å legitimere eller utøve vold i religionens navn.',
    },
    {
      id: 're-6-2-text-3',
      type: 'text',
      title: 'Forståelse av fundamentalisme og ekstremisme',
      content:
        'Begrepet «fundamentalisme» stammer opprinnelig fra en protestantisk bevegelse i USA tidlig på 1900-tallet som ønsket å verne om «the fundamentals» – grunnleggende kristne læresetninger. I dag brukes begrepet om konservative strømninger i flere religioner.\n\nDet er viktig å skille mellom fundamentalisme og ekstremisme. Mange fundamentalister er fredelige mennesker som lever etter strenge religiøse regler uten å ty til vold. Ekstremisme derimot innebærer en vilje til å bruke vold eller tvang for å fremme religiøse mål.\n\nForskning viser at religiøs ekstremisme ofte har sammensatte årsaker. Fattigdom, politisk marginalisering, opplevelse av urettferdighet, personlige kriser og sosiale faktorer spiller ofte sammen med religiøse tolkninger i radikaliseringsprosesser. Det er derfor misvisende å peke på religion alene som årsak til terrorisme og voldelig ekstremisme.',
    },
    {
      id: 're-6-2-example-3',
      type: 'example',
      title: 'Fundamentalisme i ulike religioner',
      content:
        'Fundamentalistiske bevegelser finnes i alle store religioner. Innenfor kristendommen finnes det fundamentalistiske retninger i USA som insisterer på bokstavelig bibeltolkning. Innenfor islam representerer salafismen en retning som ønsker å vende tilbake til islams tidligste tid. Innenfor jødedommen finnes det ultraortodokse grupper som avviser moderne levesett. Innenfor hinduismen finnes det nasjonalistiske bevegelser som kobler hinduisme til nasjonal identitet. Felles for disse er en opplevelse av at moderniteten truer tradisjonelle verdier.',
    },
    {
      id: 're-6-2-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 3',
      content: 'Hva er den viktigste forskjellen mellom fundamentalisme og ekstremisme?',
      options: [
        'Fundamentalisme finnes bare i islam, mens ekstremisme finnes i alle religioner',
        'Fundamentalisme innebærer ikke nødvendigvis vold, mens ekstremisme legitimerer eller utøver vold',
        'Ekstremisme er alltid religiøst motivert, mens fundamentalisme er politisk',
        'Det er ingen forskjell mellom de to begrepene',
      ],
      correctAnswer: 1,
      explanation:
        'Mens fundamentalisme handler om en strengt konservativ tolkning av religion uten nødvendigvis å innebære vold, krysser ekstremisme grensen til å legitimere eller utøve vold i religionens navn.',
    },
    {
      id: 're-6-2-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content:
        'Diskuter påstanden: «All religion fører til vold.» Bruk eksempler fra kapittelet til å argumentere for og imot denne påstanden.',
    },
    {
      id: 're-6-2-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 5',
      content:
        'Forklar med egne ord hva radikalisering er, og drøft hvilke faktorer som kan bidra til at en person radikaliseres. Hva kan samfunnet gjøre for å forebygge radikalisering?',
    },

    // --- Oppsummering ---
    {
      id: 're-6-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Religion har et tvetydig forhold til konflikt. Den kan brukes til å legitimere vold og skape skarpe skiller mellom grupper, men den har også sterke ressurser for fred, forsoning og rettferdighet. Fundamentalisme innebærer en strengt konservativ tolkning av religion, mens ekstremisme krysser grensen til vold. De fleste konflikter der religion spiller en rolle, har sammensatte årsaker der politiske, økonomiske og sosiale faktorer virker sammen.',
    },

    // --- Samleoppgaver ---
    {
      id: 're-6-2-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Skriv et essay der du drøfter religionens rolle som både konfliktskapende og fredsskapende kraft. Bruk minst tre konkrete eksempler fra ulike religioner i drøftingen din.',
    },
  ],
};

// ============================================================================
// Kapittel 6.3 – Religion i det norske samfunnet
// ============================================================================

const CHAPTER_RELIGION_ETIKK_6_3: TextbookChapter = {
  id: 'religion-etikk-6-3',
  courseId: 'religion-etikk',
  title: 'Religion i det norske samfunnet',
  estimatedReadingTime: 20,
  exercises: [],
  content: [
    // --- Introduksjon ---
    {
      id: 're-6-3-intro',
      type: 'text',
      title: 'Religion i det norske samfunnet',
      content:
        'Norge har i løpet av de siste tiårene gått fra å være et relativt homogent luthersk samfunn til å bli et flerreligiøst og flerkulturelt samfunn. I dette kapittelet ser vi på Den norske kirkes rolle, det religiøse mangfoldet i Norge, og overgangen fra statskirkeordning til folkekirke.',
    },

    // --- Den norske kirke og dens rolle ---
    {
      id: 're-6-3-def-1',
      type: 'definition',
      title: 'Den norske kirke',
      content:
        'Den norske kirke (Dnk) er det største tros- og livssynssamfunnet i Norge. Kirken tilhører den evangelisk-lutherske tradisjonen og har vært nært knyttet til den norske staten siden reformasjonen i 1537. Per 2024 er om lag 64 % av Norges befolkning medlemmer av Den norske kirke.',
    },
    {
      id: 're-6-3-text-1',
      type: 'text',
      title: 'Kirkens rolle i samfunnet',
      content:
        'Den norske kirke har historisk sett hatt en sentral rolle i det norske samfunnet. Kirken har vært ansvarlig for viktige overgangsritualer som dåp, konfirmasjon, bryllup og begravelse. For mange nordmenn er disse ritualene en viktig del av livet, selv om den personlige troen kan variere.\n\nKirken har også spilt en viktig rolle som kulturinstitusjon. Kirkebygg er ofte de eldste og mest betydningsfulle bygningene i norske lokalsamfunn. Kirkens musikk-, kor- og kulturvirksomhet er viktig for mange mennesker.\n\nI tillegg har kirken en diakonale rolle – den driver sosialt arbeid, møteplasser for ensomme, rusomsorg og bistandsarbeid gjennom organisasjoner som Kirkens Bymisjon og Kirkens Nødhjelp. Denne delen av kirkens virksomhet når langt utover kretsen av aktive kirkemedlemmer.',
    },
    {
      id: 're-6-3-example-1',
      type: 'example',
      title: 'Kirken etter 22. juli 2011',
      content:
        'Etter terrorangrepene 22. juli 2011 spilte Den norske kirke en viktig rolle som samlende institusjon. Kirker over hele landet ble åpnet som sorgsteder der mennesker uavhengig av tro og livssyn kunne komme sammen. Oslo domkirke ble et naturlig samlingspunkt for minnesmarkeringer. Dette illustrerer kirkens rolle som en institusjon som strekker seg utover det strengt religiøse og fungerer som et felles rom i krisetider.',
    },
    {
      id: 're-6-3-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Omtrent hvor stor andel av Norges befolkning er medlemmer av Den norske kirke (2024)?',
      options: [
        'Ca. 85 %',
        'Ca. 64 %',
        'Ca. 45 %',
        'Ca. 30 %',
      ],
      correctAnswer: 1,
      explanation:
        'Per 2024 er om lag 64 % av Norges befolkning medlemmer av Den norske kirke. Andelen har sunket gradvis over flere tiår.',
    },

    // --- Religiøst mangfold i Norge ---
    {
      id: 're-6-3-text-2',
      type: 'text',
      title: 'Religiøst mangfold i Norge',
      content:
        'Selv om Den norske kirke fortsatt er det klart største trossamfunnet, har det religiøse mangfoldet i Norge økt betydelig de siste tiårene. Innvandring fra ulike deler av verden har ført til at det nå finnes etablerte miljøer innenfor islam, hinduisme, buddhisme, sikhisme og mange andre religioner og livssyn.\n\nIslam er den nest største religionen i Norge, med om lag 200 000 medlemmer fordelt på ulike moskeer og islamske organisasjoner. Den katolske kirke har også vokst betydelig og er det nest største kristne trossamfunnet. Human-Etisk Forbund er det største livssynssamfunnet utenfor de religiøse tradisjonene.\n\nDette mangfoldet stiller nye krav til samfunnet. Spørsmål om religionsfrihet, tilpasning av offentlige institusjoner, religiøse hodeplagg, religiøse helligdager og religiøse skoler er alle temaer som debatteres jevnlig i norsk offentlighet.',
    },
    {
      id: 're-6-3-example-2',
      type: 'example',
      title: 'Mangfold i skolens hverdag',
      content:
        'I mange norske skoler, særlig i de store byene, er religiøst mangfold en del av hverdagen. Elever feirer ulike høytider, har ulike kostholdsbehov knyttet til religion, og kan ha ulik praksis knyttet til bønn, bekledning og religiøse markeringer. KRLE-faget (kristendom, religion, livssyn og etikk) i grunnskolen og religion og etikk i videregående skole er utformet for å gi alle elever kunnskap om ulike religioner og livssyn, uavhengig av egen bakgrunn.',
    },
    {
      id: 're-6-3-exercise-2',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 2',
      content:
        'Beskriv det religiøse mangfoldet i Norge i dag. Hvilke utfordringer og muligheter kan dette mangfoldet innebære for det norske samfunnet?',
    },

    // --- Fra statskirkeordning til folkekirke ---
    {
      id: 're-6-3-def-2',
      type: 'definition',
      title: 'Statskirkeordning',
      content:
        'En statskirkeordning innebærer at én bestemt kirke har en formell, juridisk tilknytning til staten. I Norge var Den norske kirke statskirke fra reformasjonen i 1537 til grunnlovsendringene i 2012. Kongen var kirkens øverste leder, og prester var statsansatte.',
    },
    {
      id: 're-6-3-text-3',
      type: 'text',
      title: 'Fra statskirke til folkekirke',
      content:
        'I 2012 ble Grunnloven endret slik at Den norske kirke ikke lenger er en statskirke i tradisjonell forstand. De viktigste endringene var:\n\n• Kongen er ikke lenger kirkens øverste leder – kirken styrer seg selv gjennom Kirkemøtet.\n• Regjeringen utnevner ikke lenger biskoper og proster – kirken velger sine egne ledere.\n• Grunnlovens paragraf 2 slår fast at «Den norske kirke, en evangelisk-luthersk kirke, forblir Norges folkekirke og understøttes som sådan av staten.»\n• Grunnlovens paragraf 16 fastslår at alle tros- og livssynssamfunn skal understøttes på lik linje.\n\nEndringene innebar en overgang fra statskirke til folkekirke. Kirken fikk større selvstendighet, samtidig som den beholdt en særskilt plass i Grunnloven. Den norske kirke er fortsatt finansiert av staten gjennom offentlige bevilgninger, og alle tros- og livssynssamfunn har rett til tilsvarende økonomisk støtte per medlem.\n\nDenne ordningen har vært gjenstand for debatt. Noen mener at én kirke ikke bør ha en særstilling i Grunnloven i et flerreligiøst samfunn, mens andre argumenterer for at Den norske kirkes historiske og kulturelle rolle tilsier en slik posisjon.',
    },
    {
      id: 're-6-3-example-3',
      type: 'example',
      title: 'Finansiering av trossamfunn',
      content:
        'I Norge finansieres tros- og livssynssamfunn gjennom offentlige bevilgninger. Alle registrerte tros- og livssynssamfunn har rett til støtte basert på antall medlemmer. I 2021 trådte en ny trossamfunnslov i kraft som samlet reglene for alle tros- og livssynssamfunn i én lov. Loven stiller krav om at trossamfunn som mottar støtte, blant annet må ha demokratiske prosesser og respektere medlemmenes rettigheter.',
    },
    {
      id: 're-6-3-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 3',
      content: 'Hva skjedde med forholdet mellom kirke og stat i 2012?',
      options: [
        'Den norske kirke ble helt skilt fra staten og fikk ingen offentlig støtte',
        'Grunnloven ble endret slik at kirken gikk fra statskirke til folkekirke med større selvstendighet',
        'Alle kirker i Norge ble slått sammen til ett trossamfunn',
        'Norge innførte en ny statsreligion',
      ],
      correctAnswer: 1,
      explanation:
        'I 2012 ble Grunnloven endret slik at Den norske kirke gikk fra å være statskirke til å bli folkekirke. Kirken fikk større selvstendighet, men beholdt en særskilt plass i Grunnloven og offentlig finansiering.',
    },
    {
      id: 're-6-3-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content:
        'Drøft om Den norske kirke bør ha en særstilling i Grunnloven. Presenter argumenter for og imot.',
    },
    {
      id: 're-6-3-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 5',
      content:
        'Hvordan bør offentlige institusjoner (for eksempel skolen, sykehus, forsvaret) forholde seg til religiøst mangfold? Drøft med konkrete eksempler.',
    },

    // --- Oppsummering ---
    {
      id: 're-6-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Den norske kirke har historisk hatt en dominerende rolle i det norske samfunnet, men Norges religiøse landskap har endret seg betydelig. Overgangen fra statskirke til folkekirke i 2012 reflekterer en utvikling mot større likebehandling av ulike tros- og livssynssamfunn. Det religiøse mangfoldet i Norge stiller nye krav til dialog, tilpasning og respekt for ulike tradisjoner.',
    },

    // --- Samleoppgaver ---
    {
      id: 're-6-3-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Skriv en tekst der du gjør rede for utviklingen av forholdet mellom religion og stat i Norge fra reformasjonen til i dag. Diskuter hva denne utviklingen kan bety for det norske samfunnet fremover.',
    },
  ],
};

// ============================================================================
// Kapittel 6.4 – Eksistensielle spørsmål – liv, død og mening
// ============================================================================

const CHAPTER_RELIGION_ETIKK_6_4: TextbookChapter = {
  id: 'religion-etikk-6-4',
  courseId: 'religion-etikk',
  title: 'Eksistensielle spørsmål – liv, død og mening',
  estimatedReadingTime: 22,
  exercises: [],
  content: [
    // --- Introduksjon ---
    {
      id: 're-6-4-intro',
      type: 'text',
      title: 'Eksistensielle spørsmål – liv, død og mening',
      content:
        'Hva skjer etter døden? Hva er meningen med livet? Hvorfor finnes lidelse? Dette er eksistensielle spørsmål som mennesker har stilt til alle tider og i alle kulturer. Religioner og livssyn gir ulike svar på disse spørsmålene, og svarene former hvordan mennesker lever, håper og møter livets utfordringer. I dette kapittelet utforsker vi hvordan ulike tradisjoner forholder seg til døden, mening og lidelse.',
    },

    // --- Døden i ulike religioner og livssyn ---
    {
      id: 're-6-4-def-1',
      type: 'definition',
      title: 'Eskatologi',
      content:
        'Eskatologi (av gresk «eschatos» – siste) er læren om de siste ting, det vil si religiøse forestillinger om døden, dommen, etterlivet og verdens ende. Alle store religioner har eskatologiske forestillinger, selv om innholdet varierer betydelig.',
    },
    {
      id: 're-6-4-text-1',
      type: 'text',
      title: 'Døden i ulike tradisjoner',
      content:
        'De ulike religionene og livssynene gir svært forskjellige svar på spørsmålet om hva som skjer etter døden.\n\n**Kristendommen** lærer at mennesket har et evig liv etter døden. Tradisjonelt har man skilt mellom himmel og helvete, men det finnes ulike syn innenfor kristendommen. Mange moderne teologer vektlegger håpet om oppstandelse og Guds nåde fremfor forestillinger om evig straff.\n\n**Islam** har en tydelig lære om dommens dag (Yawm al-Qiyama), der alle mennesker skal stå til regnskap for sine handlinger. De rettferdige kommer til paradiset (Jannah), mens de som har avvist Gud, møter straff.\n\n**Jødedommen** har tradisjonelt vært mer tilbakeholden med å beskrive etterlivet detaljert. Fokuset har i større grad vært på dette livet og forpliktelsene overfor Gud og medmennesker.\n\n**Hinduismen** og **buddhismen** har forestillinger om reinkarnasjon – at sjelen (atman i hinduismen) eller bevisstheten gjenfødes i en ny kropp. Målet er å bryte fri fra gjenfødelsens syklus og oppnå moksha (hinduisme) eller nirvana (buddhisme).\n\n**Humanistiske livssyn** avviser typisk forestillinger om et liv etter døden. Livet her og nå er det eneste vi har, og mening må skapes i dette livet. Denne oppfatningen kan føre til en sterkere vektlegging av å leve et godt og meningsfullt liv her og nå.',
    },
    {
      id: 're-6-4-example-1',
      type: 'example',
      title: 'Ritualer knyttet til døden',
      content:
        'Religionenes syn på døden gjenspeiles i deres ritualer. I kristendommen begraves den døde med en begravelsesseremoni som uttrykker håp om oppstandelse. I hinduismen kremeres den døde, og asken spres helst i en hellig elv som Ganges, som et ledd i å frigjøre sjelen. I islam begraves den døde så raskt som mulig, vendt mot Mekka, og det holdes bønner for den avdøde. I jødedommen holdes en syv dagers sorgperiode (shiva) der familien mottar besøk og trøst.',
    },
    {
      id: 're-6-4-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva betyr begrepet «eskatologi»?',
      options: [
        'Læren om skapelsen',
        'Læren om de siste ting – døden, dommen og etterlivet',
        'Læren om religiøse ritualer',
        'Læren om religiøs etikk',
      ],
      correctAnswer: 1,
      explanation:
        'Eskatologi kommer fra gresk «eschatos» (siste) og er læren om de siste ting, det vil si religiøse forestillinger om døden, dommen, etterlivet og verdens ende.',
    },
    {
      id: 're-6-4-exercise-2',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 2',
      content:
        'Sammenlign synet på døden i to selvvalgte religioner eller livssyn. Hva er likhetene og forskjellene?',
    },

    // --- Meningen med livet ---
    {
      id: 're-6-4-text-2',
      type: 'text',
      title: 'Meningen med livet',
      content:
        'Spørsmålet om livets mening er kanskje det mest grunnleggende eksistensielle spørsmålet. Ulike tradisjoner gir ulike svar.\n\nInnenfor **kristendommen** er livets mening å leve i relasjon til Gud, elske sin neste og forberede seg på det evige livet. Mennesket er skapt i Guds bilde og har en unik verdi og et formål.\n\nI **islam** er livets mening å underkaste seg Guds vilje og leve i tråd med hans bud. Mennesket er Guds stedfortreder (khalifa) på jorden og har et ansvar for å forvalte skaperverket.\n\nI **buddhismen** handler livets mening om å oppnå frigjøring fra lidelse gjennom å følge den åttedelte veien. Veien til nirvana går gjennom rett innsikt, rett etikk og rett meditasjon.\n\nI **hinduismen** har livet mening gjennom å oppfylle sin dharma (plikt) og arbeide mot moksha – frigjøring fra gjenfødelsens syklus.\n\n**Eksistensialismen**, representert ved filosofer som Jean-Paul Sartre og Simone de Beauvoir, hevder at livet ikke har en forhåndsbestemt mening. Mennesket er «dømt til å være fritt» og må selv skape mening gjennom sine valg og handlinger.\n\n**Viktor Frankl**, den østerrikske psykiateren som overlevde Holocaust, utviklet logoterapien – en terapiform basert på ideen om at menneskets dypeste drivkraft er søken etter mening. Frankl mente at mening kan finnes gjennom kreativt arbeid, kjærlighet og den holdningen man inntar overfor uunngåelig lidelse.',
    },
    {
      id: 're-6-4-example-2',
      type: 'example',
      title: 'Viktor Frankls søken etter mening',
      content:
        'Viktor Frankl overlevde flere nazistiske konsentrasjonsleirer under andre verdenskrig. I sin berømte bok «Menneskets søken etter mening» (1946) beskriver han hvordan de fangene som klarte å finne mening – selv under de mest grufulle forhold – hadde størst sjanse for å overleve. Frankl fant selv mening gjennom tanken på sin kone, drømmen om å fullføre sitt livsverk, og viljen til å hjelpe medfanger. Hans erfaring viser at søken etter mening er en fundamental menneskelig drivkraft.',
    },
    {
      id: 're-6-4-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 3',
      content: 'Hva menes med at mennesket ifølge Sartre er «dømt til å være fritt»?',
      options: [
        'At mennesket er fysisk fritt og kan gjøre hva det vil uten konsekvenser',
        'At mennesket selv må skape mening i livet gjennom sine valg, fordi det ikke finnes en forhåndsbestemt mening',
        'At mennesket er fritt fra alle moralske forpliktelser',
        'At mennesket er fritt til å velge hvilken religion det vil tilhøre',
      ],
      correctAnswer: 1,
      explanation:
        'For eksistensialisten Sartre har livet ingen forhåndsbestemt mening. Mennesket er «dømt til å være fritt» i den forstand at det selv må ta ansvar for å skape mening gjennom sine valg og handlinger.',
    },

    // --- Lidelsens problem (teodicéproblemet) ---
    {
      id: 're-6-4-def-2',
      type: 'definition',
      title: 'Teodicéproblemet',
      content:
        'Teodicéproblemet (av gresk «theos» – Gud og «dike» – rettferdighet) er det filosofiske spørsmålet om hvordan en allmektig, allvitende og god Gud kan tillate lidelse og ondskap i verden. Problemet er særlig aktuelt innenfor monoteistiske religioner.',
    },
    {
      id: 're-6-4-text-3',
      type: 'text',
      title: 'Lidelsens problem',
      content:
        'Teodicéproblemet kan formuleres som et logisk dilemma: Hvis Gud er allmektig, kan han forhindre lidelse. Hvis Gud er god, ønsker han å forhindre lidelse. Men lidelse eksisterer. Altså er Gud enten ikke allmektig, ikke god, eller så eksisterer Gud ikke.\n\nGjennom historien har tenkere forsøkt å løse dette problemet på ulike måter:\n\n**Den frie vilje-forsvaret** argumenterer for at Gud har gitt mennesket fri vilje, og at mye lidelse skyldes menneskelige valg. En verden med fri vilje er bedre enn en verden uten, selv om friheten åpner for ondskap.\n\n**Sjeleutviklingsteorien** (utviklet av blant andre John Hick) hevder at lidelse har en pedagogisk funksjon. Gjennom lidelse kan mennesket utvikle moralske dyder som medfølelse, mot og utholdenhet.\n\n**Jobs bok** i Bibelen gir ikke et enkelt svar på hvorfor den rettferdige lider, men peker på at Guds veier er uutgrunnelige og at mennesket må vise tillit til Gud selv i lidelsen.\n\nI **buddhismen** er lidelse (dukkha) utgangspunktet for hele den religiøse veien. De fire edle sannheter handler nettopp om lidelsens natur, årsak og opphør.\n\nFor **humanistiske livssyn** er lidelse et faktum ved tilværelsen som ikke har noen dypere religiøs mening. Oppgaven er å bekjempe unødvendig lidelse gjennom vitenskap, medisin og solidaritet.',
    },
    {
      id: 're-6-4-example-3',
      type: 'example',
      title: 'Naturkatastrofer og teodicéproblemet',
      content:
        'Tsunamien i Indiahavet i 2004, som drepte over 230 000 mennesker, aktualiserte teodicéproblemet for mange. Hvordan kunne en god Gud tillate en slik katastrofe som rammet uskyldige mennesker – deriblant tusenvis av barn? Ulike religiøse ledere ga ulike svar: Noen pekte på naturens lovmessighet, andre på Guds uutgrunnelige vilje, og atter andre på at katastrofen viste behovet for menneskelig solidaritet og omsorg.',
    },
    {
      id: 're-6-4-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content:
        'Forklar teodicéproblemet med egne ord. Presenter deretter minst to ulike forsøk på å løse problemet, og vurder hvilke styrker og svakheter disse løsningsforslagene har.',
    },
    {
      id: 're-6-4-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hva innebærer «den frie vilje-forsvaret» som svar på teodicéproblemet?',
      options: [
        'At Gud ikke eksisterer',
        'At lidelse har en pedagogisk funksjon og gjør mennesket sterkere',
        'At mye lidelse skyldes menneskelige valg, og at fri vilje er et gode som veier opp for muligheten for ondskap',
        'At naturkatastrofer er Guds straff',
      ],
      correctAnswer: 2,
      explanation:
        'Den frie vilje-forsvaret argumenterer for at Gud har gitt mennesket fri vilje, og at en verden med fri vilje er bedre enn en verden uten, selv om friheten åpner for at mennesker kan velge ondskap.',
    },

    // --- Oppsummering ---
    {
      id: 're-6-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Eksistensielle spørsmål om liv, død og mening er sentrale i alle religioner og livssyn. Synet på hva som skjer etter døden varierer fra tro på oppstandelse og evig liv, via reinkarnasjon, til oppfatningen om at døden er endelig. Spørsmålet om livets mening besvares ulikt – fra religiøse svar om å leve i tråd med Guds vilje, til eksistensialistiske svar om at mennesket selv må skape mening. Teodicéproblemet – spørsmålet om hvorfor lidelse eksisterer hvis Gud er god og allmektig – forblir en av de mest utfordrende filosofiske og teologiske problemstillingene.',
    },

    // --- Samleoppgaver ---
    {
      id: 're-6-4-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Skriv en refleksjonstekst der du drøfter ett av følgende eksistensielle spørsmål: Hva gir livet mening? Hva skjer etter døden? Hvorfor finnes lidelse? Bruk perspektiver fra minst to ulike religioner eller livssyn i drøftingen.',
    },
  ],
};

// ============================================================================
// Kapittel 6.5 – Religion og vitenskap
// ============================================================================

const CHAPTER_RELIGION_ETIKK_6_5: TextbookChapter = {
  id: 'religion-etikk-6-5',
  courseId: 'religion-etikk',
  title: 'Religion og vitenskap',
  estimatedReadingTime: 22,
  exercises: [],
  content: [
    // --- Introduksjon ---
    {
      id: 're-6-5-intro',
      type: 'text',
      title: 'Religion og vitenskap',
      content:
        'Forholdet mellom religion og vitenskap er et tema som har engasjert tenkere i århundrer. Er religion og vitenskap motsetninger som utelukker hverandre, eller kan de utfylle hverandre? I dette kapittelet ser vi på ulike modeller for forholdet mellom religion og naturvitenskap, debatten om skapelse og evolusjon, og spørsmålet om de to kan forenes.',
    },

    // --- Forholdet mellom religion og naturvitenskap ---
    {
      id: 're-6-5-def-1',
      type: 'definition',
      title: 'Naturvitenskap',
      content:
        'Naturvitenskap er en systematisk tilnærming til å forstå naturen basert på observasjon, eksperiment og logisk resonnering. Naturvitenskapen studerer den fysiske virkeligheten og søker naturlige forklaringer på fenomener gjennom hypoteser som kan testes empirisk.',
    },
    {
      id: 're-6-5-text-1',
      type: 'text',
      title: 'Fire modeller for forholdet mellom religion og vitenskap',
      content:
        'Fysikeren og teologen Ian Barbour har foreslått fire modeller for å forstå forholdet mellom religion og vitenskap:\n\n**1. Konfliktmodellen** ser religion og vitenskap som uforenlige motsetninger. Denne modellen forfektes både av ateistiske vitenskapsfolk som Richard Dawkins, som mener at vitenskapen har gjort religion overflødig, og av religiøse fundamentalister som avviser vitenskapelige funn som strider mot hellige tekster.\n\n**2. Uavhengighetsmodellen** hevder at religion og vitenskap opererer på helt ulike områder og derfor verken kan bekrefte eller motsi hverandre. Vitenskapen svarer på «hvordan»-spørsmål om naturens mekanismer, mens religionen svarer på «hvorfor»-spørsmål om mening, formål og verdier. Biologen Stephen Jay Gould kalte dette «NOMA» – Non-Overlapping Magisteria (ikke-overlappende autoritetsområder).\n\n**3. Dialogmodellen** anerkjenner at religion og vitenskap er ulike, men mener at de kan berike hverandre gjennom samtale. Vitenskapelige oppdagelser kan reise spørsmål som religionen reflekterer over, og religiøse perspektiver kan inspirere vitenskapelig utforskning.\n\n**4. Integrasjonsmodellen** søker å forene religion og vitenskap i en helhetlig forståelse av virkeligheten. Noen tenkere, som Teilhard de Chardin, har forsøkt å utvikle teologiske systemer som integrerer vitenskapelige innsikter.',
    },
    {
      id: 're-6-5-example-1',
      type: 'example',
      title: 'Galileo og konflikt mellom religion og vitenskap',
      content:
        'Galileo Galilei (1564–1642) er kanskje det mest kjente eksempelet på konflikt mellom religion og vitenskap. Galileo støttet Kopernikus\' teori om at jorden kretser rundt solen (heliosentrisk modell), noe som ble oppfattet som stridende mot Bibelens fremstilling. Den katolske kirken tvang Galileo til å tilbakekalle sine påstander i 1633 og satte ham i husarrest. Først i 1992 innrømmet pave Johannes Paul II at kirken hadde gjort feil overfor Galileo. Historien illustrerer hvordan konflikter mellom religion og vitenskap ofte har handlet om makt og tolkning, ikke bare om fakta.',
    },
    {
      id: 're-6-5-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva innebærer uavhengighetsmodellen (NOMA) for forholdet mellom religion og vitenskap?',
      options: [
        'At religion og vitenskap alltid er i konflikt',
        'At religion og vitenskap opererer på helt ulike områder og verken bekrefter eller motsier hverandre',
        'At religion og vitenskap bør slås sammen til ett kunnskapssystem',
        'At vitenskap er viktigere enn religion',
      ],
      correctAnswer: 1,
      explanation:
        'Uavhengighetsmodellen (NOMA) hevder at religion og vitenskap opererer på ulike områder – vitenskapen svarer på «hvordan»-spørsmål, mens religionen svarer på «hvorfor»-spørsmål – og at de derfor ikke kan bekrefte eller motsi hverandre.',
    },

    // --- Skapelse og evolusjon ---
    {
      id: 're-6-5-def-2',
      type: 'definition',
      title: 'Kreasjonisme',
      content:
        'Kreasjonisme er troen på at universet og livet ble skapt direkte av Gud slik det er beskrevet i religiøse skapelsesfortellinger. Ung-jord-kreasjonisme hevder at jorden er ca. 6 000–10 000 år gammel, mens gammel-jord-kreasjonisme aksepterer en eldre jord men avviser evolusjon som forklaring på artenes utvikling.',
    },
    {
      id: 're-6-5-def-3',
      type: 'definition',
      title: 'Evolusjonsteori',
      content:
        'Evolusjonsteori er den vitenskapelige forklaringen på artenes utvikling gjennom naturlig utvalg. Teorien ble først formulert av Charles Darwin og Alfred Russel Wallace på 1800-tallet og er i dag den rådende vitenskapelige forklaringen på biologisk mangfold. Den støttes av omfattende bevis fra fossiler, genetikk, anatomi og molekylærbiologi.',
    },
    {
      id: 're-6-5-text-2',
      type: 'text',
      title: 'Skapelsesfortellinger og evolusjon',
      content:
        'Debatten om skapelse og evolusjon er et av de mest kjente møtepunktene mellom religion og vitenskap. Ulike standpunkter finnes:\n\n**Bokstavelig kreasjonisme** avviser evolusjonsteorien og holder fast ved at skapelsesfortellingene i Bibelen eller andre hellige skrifter er bokstavelig sanne. Denne posisjonen er mest utbredt innenfor protestantisk fundamentalisme i USA.\n\n**Intelligent design** hevder at visse biologiske strukturer er så komplekse at de ikke kan forklares av evolusjon alene, og at de peker mot en intelligent skaper. Tilhengerne presenterer dette som vitenskap, men det vitenskapelige miljøet har i hovedsak avvist intelligent design som pseudovitenskap.\n\n**Teistisk evolusjon** aksepterer evolusjonsteorien som den vitenskapelige forklaringen på artenes utvikling, men ser evolusjon som Guds skapelsesmetode. Denne posisjonen er utbredt blant mange kristne, inkludert Den katolske kirke og de fleste protestantiske kirker i Europa.\n\n**Sekulær naturalisme** ser evolusjon som en rent naturlig prosess uten noen guddommelig styring. Denne posisjonen er typisk for ateistiske og agnostiske tenkere.\n\nDet er verdt å merke seg at mange religiøse tradisjoner – inkludert jødedommen, store deler av kristendommen og islam – ikke ser noen grunnleggende motsetning mellom tro på Gud som skaper og aksept av evolusjonsteorien. De leser skapelsesfortellingene som teologiske tekster om livets mening og Guds forhold til verden, ikke som naturvitenskapelige beskrivelser.',
    },
    {
      id: 're-6-5-example-2',
      type: 'example',
      title: 'Pave Frans om evolusjon',
      content:
        'I 2014 uttalte pave Frans at «evolusjon i naturen er ikke uforenlig med begrepet om skapelse» og at «Big Bang-teorien, som i dag anses som universets opprinnelse, ikke motsier Guds skapende inngripen, men snarere forutsetter den». Den katolske kirke har siden pave Pius XII i 1950 akseptert at evolusjonsteorien er forenlig med katolsk tro, forutsatt at man anerkjenner Gud som den ultimate årsaken bak skaperverket.',
    },
    {
      id: 're-6-5-exercise-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 2',
      content: 'Hva menes med teistisk evolusjon?',
      options: [
        'At evolusjonsteorien er feil og at Gud skapte artene direkte',
        'At evolusjon er en rent naturlig prosess uten noen guddommelig styring',
        'At evolusjonsteorien er vitenskapelig korrekt, men at evolusjon er Guds skapelsesmetode',
        'At intelligent design er den beste forklaringen på artenes utvikling',
      ],
      correctAnswer: 2,
      explanation:
        'Teistisk evolusjon aksepterer evolusjonsteorien som den vitenskapelige forklaringen på artenes utvikling, men ser evolusjon som den metoden Gud har brukt for å skape artsmangfoldet.',
    },

    // --- Kan religion og vitenskap forenes? ---
    {
      id: 're-6-5-text-3',
      type: 'text',
      title: 'Kan religion og vitenskap forenes?',
      content:
        'Spørsmålet om religion og vitenskap kan forenes, avhenger i stor grad av hva man mener med «forenes» og hvilke former for religion og vitenskap man snakker om.\n\nPå den ene siden er det klart at bokstavelig lesning av religiøse skapelsesfortellinger kommer i konflikt med veletablerte vitenskapelige teorier. Hvis man insisterer på at jorden er 6 000 år gammel, kommer man i konflikt med geologi, fysikk og biologi.\n\nPå den andre siden finnes det mange fremtredende vitenskapsfolk som også er troende. Den britiske fysikeren John Polkinghorne, den amerikanske genetikeren Francis Collins (som ledet Human Genome Project) og den norske astrofysikeren Sjur Refsdal er alle eksempler på personer som har kombinert vitenskapelig arbeid på høyt nivå med religiøs tro.\n\nMange tenkere argumenterer for at religion og vitenskap stiller ulike typer spørsmål. Vitenskapen forklarer **hvordan** naturen fungerer – den beskriver naturlovene, prosessene og mekanismene. Religionen spør **hvorfor** – om livets mening, moralske verdier, formål og den dypere hensikten med tilværelsen. Hvis dette er riktig, trenger de to ikke å komme i konflikt.\n\nAndre peker på at det likevel finnes overlappende områder, for eksempel spørsmålet om bevissthetens natur, spørsmålet om universets opprinnelse og spørsmålet om fri vilje. På disse områdene kan religion og vitenskap komme i berøring med hverandre, og dialog mellom de to kan være fruktbar.\n\nUansett standpunkt er det viktig å unngå forenklinger. Verken påstanden «vitenskap har gjort religion overflødig» eller påstanden «vitenskap kan ikke si noe om livets store spørsmål» gjør rettferdighet til det komplekse forholdet mellom religion og vitenskap.',
    },
    {
      id: 're-6-5-example-3',
      type: 'example',
      title: 'Francis Collins – vitenskapsmann og troende',
      content:
        'Francis Collins er en amerikansk genetiker som ledet Human Genome Project – det internasjonale prosjektet som kartla hele det menneskelige genomet. Collins er også en bekjennende kristen og har skrevet boken «The Language of God» (2006), der han argumenterer for at vitenskapelige oppdagelser og kristen tro er forenlige. Collins beskriver sin vei fra ateisme til tro og argumenterer for at den genetiske koden kan sees som Guds «språk». Hans eksempel viser at det er mulig å kombinere vitenskapelig arbeid på høyeste nivå med personlig religiøs tro.',
    },
    {
      id: 're-6-5-exercise-3',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 3',
      content:
        'Gjør rede for Ian Barbours fire modeller for forholdet mellom religion og vitenskap (konflikt, uavhengighet, dialog og integrasjon). Hvilken modell synes du best beskriver forholdet mellom religion og vitenskap? Begrunn svaret.',
    },
    {
      id: 're-6-5-exercise-4',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 4',
      content: 'Hvorfor avviser det vitenskapelige miljøet i hovedsak intelligent design som vitenskap?',
      options: [
        'Fordi vitenskapsfolk er ateister',
        'Fordi intelligent design ikke kan testes empirisk og dermed ikke oppfyller kravene til naturvitenskap',
        'Fordi intelligent design er for ny til å bli akseptert',
        'Fordi intelligent design støttes av for mange religiøse grupper',
      ],
      correctAnswer: 1,
      explanation:
        'Det vitenskapelige miljøet avviser intelligent design fordi hypotesen om en intelligent skaper ikke kan testes empirisk gjennom observasjon og eksperiment, noe som er et grunnleggende krav til naturvitenskapelige teorier.',
    },
    {
      id: 're-6-5-exercise-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 5',
      content:
        'Diskuter følgende påstand: «Vitenskap og religion svarer på helt ulike spørsmål og kan derfor aldri komme i konflikt.» Finn argumenter for og imot denne påstanden.',
    },

    // --- Oppsummering ---
    {
      id: 're-6-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Forholdet mellom religion og vitenskap kan forstås gjennom ulike modeller: konflikt, uavhengighet, dialog og integrasjon. Debatten om skapelse og evolusjon illustrerer spenningen mellom bokstavelig skrifttolkning og vitenskapelige funn, men mange religiøse tradisjoner aksepterer evolusjonsteorien. Spørsmålet om religion og vitenskap kan forenes, avhenger av hvordan man definerer de to og hvilke spørsmål de stiller. Mange fremtredende vitenskapsfolk har kombinert vitenskapelig arbeid med religiøs tro, noe som viser at forholdet mellom de to er mer nyansert enn konfliktmodellen alene tilsier.',
    },

    // --- Samleoppgaver ---
    {
      id: 're-6-5-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Skriv et essay der du drøfter forholdet mellom religion og vitenskap. Bruk konkrete eksempler og vis at du kjenner til ulike perspektiver og modeller. Vær nøye med å presentere ulike synspunkter på en balansert måte.',
    },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const RELIGION_ETIKK_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RELIGION_ETIKK_6_1,
  CHAPTER_RELIGION_ETIKK_6_2,
  CHAPTER_RELIGION_ETIKK_6_3,
  CHAPTER_RELIGION_ETIKK_6_4,
  CHAPTER_RELIGION_ETIKK_6_5,
];
