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
  estimatedReadingTime: 45,
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
      id: 're-6-1-text-1b',
      type: 'text',
      title: 'Forutsetninger for en god dialog',
      content:
        'For at religionsdialog skal fungere, kreves det visse forutsetninger hos deltakerne og i rammene rundt samtalen. Den tyske teologen Hans Kung formulerte et berømt prinsipp: «Ingen verdensfred uten religionsfred. Ingen religionsfred uten religionsdialog.» Med dette pekte Kung på at fred mellom folkeslag forutsetter at religiøse tradisjoner finner måter å sameksistere på.\n\n**Gjensidighet** er et sentralt prinsipp. Dialog forutsetter at begge parter er villige til å lytte like mye som de snakker. Det innebærer at man ikke bare presenterer sitt eget syn, men genuint forsøker å forstå den andres perspektiv.\n\n**Likeverd** betyr at ingen part i dialogen regnes som overordnet den andre. Selv om deltakerne kan ha ulike syn på teologiske spørsmål, møtes de som likeverdige samtalepartnere.\n\n**Ærlighet** krever at deltakerne er åpne om hva de tror og mener, uten å skjule eller bagatellisere forskjeller. En dialog der man later som om alle mener det samme, er ikke genuin dialog.\n\n**Selvkritikk** innebærer evnen til å reflektere over problematiske sider ved egen tradisjon. De beste dialogdeltakerne er de som kjenner sin egen tradisjons skyggesider og er villige til å snakke åpent om dem.\n\n**Tålmodighet** er nødvendig fordi dialog er en langsom prosess. Dype misforståelser og historiske konflikter kan ikke løses i et enkelt møte. Dialog krever utholdenhet og vilje til å fortsette selv når samtalen er vanskelig.',
    },
    {
      id: 're-6-1-def-1b',
      type: 'definition',
      title: 'Inklusivisme, eksklusivisme og pluralisme',
      content:
        `Innenfor teologien skiller man ofte mellom tre grunnholdninger til andre religioner: **Eksklusivisme** hevder at bare én religion har sannheten og veien til frelse. **Inklusivisme** anerkjenner at det finnes sannhet og verdi i andre religioner, men ser fortsatt sin egen tradisjon som den mest fullstendige. **Pluralisme** hevder at flere religioner kan være like gyldige veier til det guddommelige. Disse holdningene påvirker sterkt hvordan man går inn i religionsdialog.`,
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
        'Den økumeniske bevegelsen vokste frem på begynnelsen av 1900-tallet som et forsøk på å overvinne splittelsen mellom ulike kristne kirkesamfunn. Kirkenes Verdensråd (World Council of Churches, WCC), grunnlagt i 1948 i Amsterdam, har vært den viktigste plattformen for økumenisk dialog. WCC samler i dag over 350 kirkesamfunn fra mer enn 120 land og arbeider for kristen enhet, sosial rettferdighet og fred. Organisasjonen har også opprettet egne programmer for interreligiøs dialog og samarbeid.\n\nParallelt med den økumeniske bevegelsen har den interreligiøse dialogen utviklet seg. Særlig etter andre verdenskrig og Holocaust ble dialogen mellom kristne og jøder intensivert. Det andre satisfaserens katolske kirkemøte, Vatikankonsilet II (1962–1965), markerte et avgjørende vendepunkt for Den katolske kirkes holdning til andre religioner. Gjennom dokumentet «Nostra Aetate» (I vår tid) anerkjente kirken for første gang offisielt at det finnes sannhet og verdi i andre religioner. Dokumentet fordømte også antisemittisme og oppfordret til dialog med jøder, muslimer, hinduer og buddhister. Vatikankonsilet II opprettet i tillegg Det pavelige råd for interreligiøs dialog, som har vært en viktig drivkraft for katolsk-muslimsk og katolsk-jødisk dialog helt frem til i dag.\n\nI Norge har Samarbeidsrådet for tros- og livssynssamfunn (STL) vært en viktig arena for interreligiøs dialog siden 1996. Her møtes representanter fra kristne kirkesamfunn, islamske trossamfunn, jødiske organisasjoner, buddhistiske foreninger, humanetikere og andre livssyn. STL har spilt en sentral rolle i å utvikle en norsk modell for tros- og livssynsdialog som er basert på likeverd mellom alle deltakende samfunn.',
    },
    {
      id: 're-6-1-text-2b',
      type: 'text',
      title: 'Interreligiøse initiativer i Norge og internasjonalt',
      content:
        `Utover STL finnes det en rekke andre viktige arenaer for religionsdialog i Norge og internasjonalt. **Norges Kristne Råd** samler kristne kirkesamfunn i økumenisk dialog og har også programmer for interreligiøst samarbeid. **Dialogforum Østfold**, **Drammen Dialogforum** og lignende lokale initiativer viser at dialog også foregår på grasrotnivå i norske byer og kommuner.\n\nInternasjonalt har FN spilt en viktig rolle gjennom «United Nations Alliance of Civilizations» (UNAOC), som ble opprettet i 2005 for å fremme dialog mellom kulturer og religioner. Kong Abdullah av Saudi-Arabia tok i 2008 initiativet til opprettelsen av «King Abdullah Bin Abdulaziz International Centre for Interreligious and Intercultural Dialogue» (KAICIID) i Wien, som arbeidet aktivt for dialog mellom kristendom, islam, jødedom og andre religioner frem til senteret ble flyttet til Lisboa i 2022.\n\nI akademisk sammenheng har universitetene bidratt med viktig forskning på religionsdialog. **Senter for studier av Holocaust og livssynsminoriteter** i Oslo forsker på antisemittisme og minoriteters vilkår. **Teologisk fakultet** ved Universitetet i Oslo har egne programmer for interreligiøse studier. Denne forskningen bidrar til å utvikle bedre teoretiske rammer for dialogen og til å dokumentere hva som gjør dialoginitiativ vellykkede.\n\nEt viktig eksempel på dialog i praksis er «A Common Word Between Us and You» – et åpent brev fra 138 muslimske lærde til kristne ledere i 2007. Brevet argumenterte for at kjærlighet til Gud og nestekjærlighet er felles grunnverdier i kristendom og islam, og inviterte til dialog basert på disse verdiene. Brevet fikk et bredt positivt mottak og førte til en rekke dialogkonferanser ved universiteter og kirker over hele verden.`,
    },
    {
      id: 're-6-1-def-3b',
      type: 'definition',
      title: 'Nostra Aetate',
      content:
        `«Nostra Aetate» (latin for «I vår tid») er et dokument fra Det andre satisfaserens katolske kirkemøte (1965) som omhandler Den katolske kirkes forhold til ikke-kristne religioner. Dokumentet anerkjenner at det finnes sannhet og hellighet i andre religiøse tradisjoner, fordømmer antisemittisme og oppfordrer til respektfull dialog. Det regnes som et av de viktigste vendepunktene i den interreligiøse dialogens historie.`,
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
      id: 're-6-1-text-3b',
      type: 'text',
      title: 'Utfordringer og kritikk av religionsdialog',
      content:
        `Religionsdialog er ikke uten utfordringer og kritikk. En vanlig innvending er at dialogen kan bli **overfladisk** – at man fokuserer på det man har felles og unngår de vanskelige spørsmålene. Hvis dialogen bare handler om å være enige, mister den sin verdi som en reell utveksling av perspektiver.\n\nEn annen utfordring er spørsmålet om **representativitet**. Hvem snakker på vegne av en hel religion? Religioner er ikke monolittiske blokker, men mangfoldige tradisjoner med interne spenninger og ulike retninger. En dialogdeltaker fra en progressiv retning innenfor islam representerer ikke nødvendigvis det syn som konservative muslimer har, og omvendt.\n\n**Maktasymmetri** kan også være et problem. I et samfunn der én religion har en dominerende posisjon, kan dialogen bli skjev. Minoriteter kan oppleve at de må tilpasse seg majoritetens premisser for å bli inkludert i dialogen. I norsk kontekst har dette vært en utfordring ettersom Den norske kirke historisk har hatt en dominerende posisjon.\n\nNoen kritikere hevder at religionsdialog kan fungere som et **alibi** – at politikere og religiøse ledere viser til dialogmøter for å gi inntrykk av at alt er vel, uten å ta tak i reelle konflikter og strukturell diskriminering.\n\nTil tross for disse utfordringene er de fleste forskere og praktikere enige om at dialog er nødvendig. Alternativet – manglende kommunikasjon og gjensidig uvitenhet – er langt verre enn en ufullkommen dialog. Utfordringen er å utvikle dialogformer som er ærlige, inkluderende og modige nok til å ta opp vanskelige temaer.`,
    },
    {
      id: 're-6-1-example-3b',
      type: 'example',
      title: 'Dialogarbeid i skoler',
      content:
        `Mange norske skoler har tatt initiativ til dialogprosjekter der elever med ulik religiøs og livssynsmessig bakgrunn møtes for å lære om hverandres tradisjoner. Organisasjonen «Ung Dialog» arbeider med å trene ungdommer som dialogambassadører. I Oslo har prosjektet «Tro og tanke» brakt sammen elever fra ulike skoler for å diskutere tro, tvil og identitet i trygge rammer. Slike initiativer viser at dialog ikke bare er noe som foregår mellom religiøse ledere, men at den kan og bør involvere vanlige mennesker – særlig unge mennesker som vokser opp i flerkulturelle samfunn.`,
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

    {
      id: 're-6-1-exercise-7',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 7',
      content: 'Hva innebar dokumentet Nostra Aetate (1965)?',
      options: [
        'At Den katolske kirke avviste alle andre religioner som falske',
        `At Den katolske kirke anerkjente sannhet og verdi i andre religioner og fordømte antisemittisme`,
        'At alle katolikker ble pålagt å delta i interreligiøs dialog',
        `At Den katolske kirke slo seg sammen med protestantiske kirker`,
      ],
      correctAnswer: 1,
      explanation:
        'Nostra Aetate var et banebrytende dokument fra Vatikankonsilet II som anerkjente at det finnes sannhet og hellighet i andre religiøse tradisjoner, fordømte antisemittisme og oppfordret til respektfull dialog.',
    },
    {
      id: 're-6-1-exercise-8',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 8',
      content:
        `Gjør rede for tre utfordringer som kan oppstå i religionsdialog (for eksempel representativitet, maktasymmetri eller overflate). Foreslå konkrete tiltak som kan bidra til å overkomme disse utfordringene.`,
    },
    {
      id: 're-6-1-exercise-9',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 9',
      content: 'Hva er Kirkenes Verdensråd (WCC)?',
      options: [
        'En organisasjon som samler alle verdens religioner',
        'Et økumenisk fellesskap av over 350 kristne kirkesamfunn fra mer enn 120 land',
        'Den norske kirkes øverste ledelse',
        'En FN-organisasjon for religionsdialog',
      ],
      correctAnswer: 1,
      explanation:
        'Kirkenes Verdensråd (World Council of Churches) ble grunnlagt i 1948 og er et økumenisk fellesskap av over 350 kirkesamfunn fra mer enn 120 land. Det er den viktigste internasjonale plattformen for dialog og samarbeid mellom kristne kirkesamfunn.',
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
  estimatedReadingTime: 45,
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
      id: 're-6-2-text-1b',
      type: 'text',
      title: 'Religion, etnisitet og nasjonalisme',
      content:
        `I mange konflikter er religiøs identitet tett sammenvevd med etnisk og nasjonal identitet. Når religion blir en markør for tilhørighet til en bestemt folkegruppe eller nasjon, kan konflikter som egentlig handler om land, makt eller ressurser, få et religiøst uttrykk. Dette gjør det vanskeligere å løse konflikten, fordi religiøse overbevisninger oppleves som absolutte og ikke-forhandlingsbare.\n\n**Sakralisering av konflikter** betyr at politiske konflikter tillegges religiøs betydning. Når et stykke land blir betraktet som hellig, eller når en politisk kamp fremstilles som en kamp mellom godt og ondt, blir kompromisser langt vanskeligere. Sakralisering kan skje fra begge sider av en konflikt og er et velkjent fenomen i både historiske og moderne konflikter.\n\n**Dehumanisering** er en prosess der motparten fremstilles som mindre menneskelig, og religion kan dessverre bidra til dette. Når «de andre» fremstilles som vantro, hedninger eller fiender av Gud, senkes terskelen for vold. Alle store religioner har ressurser som kan brukes til dehumanisering, men de har også sterke tradisjoner som motvirker det – som buddhismens medfølelse, kristendommens nestekjærlighet, islams rettferdighetskrav og jødedommens vektlegging av ethvert menneskes verdighet som skapt i Guds bilde.`,
    },
    {
      id: 're-6-2-def-1b',
      type: 'definition',
      title: 'Sakralisering',
      content:
        `Sakralisering innebærer at noe verdslig – for eksempel et landområde, en politisk kamp eller en nasjonal identitet – tillegges hellig eller religiøs betydning. Sakralisering av konflikter gjør dem vanskeligere å løse fordi kompromisser kan oppfattes som kompromisser med det hellige.`,
    },
    {
      id: 're-6-2-example-1',
      type: 'example',
      title: 'Konflikten i Nord-Irland',
      content:
        'Konflikten i Nord-Irland (ofte kalt «The Troubles», ca. 1968–1998) blir gjerne fremstilt som en konflikt mellom katolikker og protestanter. I virkeligheten var konflikten langt mer sammensatt og handlet like mye om politiske rettigheter, nasjonal tilhørighet (britisk vs. irsk), økonomisk ulikhet og historisk undertrykkelse. Religiøs tilhørighet fungerte som en identitetsmarkør som forsterket de politiske skillelinjene, men var ikke den eneste eller nødvendigvis den viktigste årsaken til konflikten. Langfredagsavtalen i 1998, som i stor grad avsluttet volden, var et politisk kompromiss der religiøse ledere fra begge sider spilte en viktig støtterolle i fredsprosessen.',
    },
    {
      id: 're-6-2-example-1b',
      type: 'example',
      title: 'Israel-Palestina-konflikten',
      content:
        `Konflikten mellom Israel og palestinerne er et av de tydeligste eksemplene på sammenfletting av religion, nasjonalisme og territorialstrid. For religiøse jøder er landet Israel gitt av Gud i pakten med Abraham. For muslimer er Jerusalem (al-Quds) den tredje helligste byen med al-Aqsa-moskeen. For kristne er det det hellige land der Jesus levde og døde. Denne sakraliseringen av landområdet gjør konflikten ekstra vanskelig å løse. Samtidig er det viktig å understreke at konflikten primært er en politisk og territoriell konflikt – den handler om land, grenser, flyktningers rettigheter og statsdannelse. Religion forsterker konflikten, men er ikke dens eneste årsak. Det finnes også mange religiøse fredsaktivister på begge sider, som organisasjonen «Rabbis for Human Rights» og «Sabeel Ecumenical Liberation Theology Center».`,
    },
    {
      id: 're-6-2-example-1c',
      type: 'example',
      title: 'Forfølgelsen av rohingya i Myanmar',
      content:
        `Forfølgelsen av den muslimske rohingya-minoriteten i Myanmar (Burma) viser hvordan religion kan brukes til å legitimere etnisk rensing. Buddhistiske nasjonalister, anført av munker som Ashin Wirathu, har brukt religiøs retorikk til å fremstille den muslimske minoriteten som en trussel mot buddhistisk kultur og identitet. FN har beskrevet volden mot rohingya som folkemord. Denne konflikten utfordrer oppfatningen om at buddhisme alltid er en fredelig religion, og viser at alle religiøse tradisjoner kan misbrukes til å legitimere vold når de kobles til nasjonalisme og frykt.`,
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
      id: 're-6-2-text-2b',
      type: 'text',
      title: 'Religiøse fredsressurser i ulike tradisjoner',
      content:
        `Alle de store religionene har rike tradisjoner og tekster som fremmer fred, forsoning og rettferdighet. Disse ressursene har blitt mobilisert i en rekke historiske og aktuelle fredsprosesser.\n\nInnenfor **kristendommen** er Bergprekenen sentral, der Jesus sier «Salige er de som skaper fred, for de skal kalles Guds barn» (Matt 5,9). Det kristne begrepet om forsoning – at Gud forsonte verden med seg selv gjennom Kristus – har inspirert forsoningsprosesser over hele verden. Kvekerne (Vennenes samfunn) har en lang tradisjon for pasifisme og har vært aktive i fredsmeklingsarbeid siden 1600-tallet.\n\nInnenfor **islam** betyr begrepet «jihad» bokstavelig «anstrengelse» eller «kamp», og den tradisjonelle tolkningen skiller mellom den store jihad (den indre, åndelige kampen mot egoisme og synd) og den lille jihad (ytre forsvar). Det islamske begrepet «sulh» (forsoning) og «islah» (reform/fredsskaping) er viktige ressurser for konfliktløsning. Profeten Muhammeds siste tale understreket alle menneskers likeverd uavhengig av rase og etnisitet.\n\nInnenfor **buddhismen** er ahimsa (ikke-vold) et kjernebegrep. Den 14. Dalai Lama, Tenzin Gyatso, har gjort ikkevold til et politisk prinsipp i kampen for tibetansk autonomi og er tildelt Nobels fredspris for dette arbeidet.\n\nInnenfor **jødedommen** er begrepet «tikkun olam» (å reparere verden) sentralt. Det innebærer et ansvar for å bidra til rettferdighet og fred i verden. Mange jødiske organisasjoner er aktive i fredsarbeid og menneskerettighetsarbeid.`,
    },
    {
      id: 're-6-2-def-2b',
      type: 'definition',
      title: 'Ahimsa',
      content:
        `Ahimsa er et begrep fra hinduismen, buddhismen og jainismen som betyr «ikkevold» eller «å ikke påføre skade». Prinsippet omfatter ikke bare fravær av fysisk vold, men en grunnleggende respekt for alt levende. Mahatma Gandhi gjorde ahimsa til et politisk virkemiddel gjennom sin strategi for ikkevoldelig motstand (satyagraha).`,
    },
    {
      id: 're-6-2-example-2',
      type: 'example',
      title: 'Desmond Tutu og forsoningsprosessen',
      content:
        'Erkebiskop Desmond Tutu ledet Sannhets- og forsoningskommisjonen i Sør-Afrika etter apartheids fall. Hans arbeid var dypt forankret i kristen teologi om tilgivelse og forsoning. Kommisjonen ga ofre for apartheid mulighet til å fortelle sine historier, og gjerningsmenn kunne innrømme sine handlinger og søke amnesti. Tutus tilnærming var inspirert av det afrikanske begrepet «ubuntu» – «jeg er fordi vi er» – som han knyttet til kristen nestekjærlighet.',
    },
    {
      id: 're-6-2-example-2b',
      type: 'example',
      title: `Thich Nhat Hanh og engasjert buddhisme`,
      content:
        `Den vietnamesiske buddhistmunken Thich Nhat Hanh (1926–2022) grunnla bevegelsen «engasjert buddhisme», som kombinerer meditasjon og mindfulness med aktivt fredsarbeid og sosial rettferdighet. Under Vietnamkrigen arbeidet han for å beskytte sivile og bygge opp landsbyer som var ødelagt av krigen. Martin Luther King Jr. nominerte ham til Nobels fredspris i 1967. Thich Nhat Hanh viste at buddhistisk praksis ikke bare handler om indre fred, men også om å engasjere seg aktivt for fred og rettferdighet i verden.`,
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

    {
      id: 're-6-2-text-3b',
      type: 'text',
      title: 'Forebygging av religiøs ekstremisme',
      content:
        `Forebygging av religiøs ekstremisme og radikalisering er blitt et viktig tema i mange land, inkludert Norge. Forskning viser at radikalisering sjelden har én enkelt årsak, men oppstår i et samspill mellom individuelle, sosiale og ideologiske faktorer.\n\n**Pushfaktorer** er forhold som skyver en person mot ekstremisme: marginalisering, diskriminering, opplevelse av urettferdighet, psykiske problemer, traumer og sosial isolasjon. **Pullfaktorer** er det som trekker: tilhørighet til en gruppe, en enkel forklaring på en kompleks virkelighet, opplevelse av mening og formål, og karismatiske ledere.\n\nI Norge arbeider flere instanser med å forebygge radikalisering. **Politiets sikkerhetstjeneste (PST)** følger med på ekstreme miljøer. **Kommunale forebyggingsteam** arbeider med unge i risikosonen. **Exit-programmer** hjelper mennesker som ønsker å forlate ekstreme miljøer. Religiøse ledere og trossamfunn spiller også en viktig rolle ved å tilby alternative fellesskap og tolkninger som motvirker ekstremistisk propaganda.\n\nEn viktig erkjennelse er at religiøs kunnskap og dialog er blant de beste virkemidlene mot ekstremisme. Mennesker som har god kunnskap om sin egen og andres religion, er mindre sårbare for forenklede og ekstreme tolkninger. Religionsundervisningen i skolen spiller dermed en viktig forebyggende rolle.`,
    },
    {
      id: 're-6-2-def-3b',
      type: 'definition',
      title: 'Radikalisering',
      content:
        `Radikalisering er en prosess der en person gradvis utvikler ekstreme holdninger som kan føre til aksept av eller vilje til å bruke vold for å oppnå politiske eller religiøse mål. Radikalisering er ikke det samme som å ha sterke meninger – det handler spesifikt om bevegelsen mot aksept av vold som virkemiddel.`,
    },
    {
      id: 're-6-2-exercise-6b',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 6',
      content: 'Hva betyr begrepet «sakralisering» i en konfliktsammenheng?',
      options: [
        'At religiøse bygninger blir bombet under krig',
        'At en politisk konflikt tillegges religiøs eller hellig betydning',
        `At religiøse ledere tar avstand fra vold`,
        'At konflikten løses gjennom religiøs dialog',
      ],
      correctAnswer: 1,
      explanation:
        `Sakralisering innebærer at noe verdslig – som et landområde eller en politisk kamp – tillegges hellig eller religiøs betydning. Dette gjør konflikter vanskeligere å løse fordi kompromisser kan oppfattes som brudd med det hellige.`,
    },
    {
      id: 're-6-2-exercise-7',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 7',
      content:
        `Velg én av følgende konflikter: Nord-Irland, Israel-Palestina eller Myanmar. Gjør rede for konflikten og analyser hvilken rolle religion spiller sammenlignet med andre faktorer som politikk, økonomi og etnisitet.`,
    },
    {
      id: 're-6-2-exercise-8',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 8',
      content: `Hva var Thich Nhat Hanhs bidrag til forholdet mellom religion og fred?`,
      options: [
        'Han grunnla en ny religion basert på ikkevold',
        `Han grunnla bevegelsen «engasjert buddhisme» som kombinerer meditasjon med aktivt fredsarbeid`,
        'Han var politisk leder i Vietnam under krigen',
        'Han avviste all form for politisk engasjement fra religiøse mennesker',
      ],
      correctAnswer: 1,
      explanation:
        `Thich Nhat Hanh grunnla bevegelsen «engasjert buddhisme» som viste at buddhistisk praksis ikke bare handler om indre fred, men også om aktivt engasjement for fred og sosial rettferdighet i verden.`,
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
  estimatedReadingTime: 45,
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
      id: 're-6-3-text-1b',
      type: 'text',
      title: 'Sekularisering og privatisering av religion',
      content:
        `Parallelt med kirkens rolle har Norge gjennomgått en omfattende sekulariseringsprosess. **Sekularisering** betyr at religionens innflytelse på samfunnslivet gradvis avtar – færre deltar i gudstjenester, religiøse normer har mindre innflytelse på lovgivning og offentlig liv, og individuelle livsvalg baseres i mindre grad på religiøse regler.\n\nStatistikk fra Den norske kirke viser tydelige trender: I 1960 ble om lag 97 % av alle barn i Norge døpt i Den norske kirke. I 2023 var dette tallet sunket til under 40 %. Andelen som gifter seg i kirken har også falt betydelig, mens borgerlige vigsler har økt. Antall gudstjenestedeltakere har sunket jevnt over flere tiår.\n\nSamtidig er bildet mer nyansert enn tallene alene tyder på. Mange nordmenn beskriver seg som «troende på sin egen måte» – de har en form for personlig tro eller spiritualitet uten å delta aktivt i organisert religion. Forskere kaller dette «privatisering av religion» – troen forsvinner ikke nødvendigvis, men den endrer form og flyttes fra det offentlige til det private.\n\nDet er også verdt å merke seg at mens tradisjonell kirkelig aktivitet har gått ned, har interessen for alternativ spiritualitet – mindfulness, yoga, meditasjon, nyåndelighet – økt. Noen forskere tolker dette som et tegn på at behovet for mening og åndelig praksis ikke forsvinner med sekulariseringen, men finner nye uttrykk.`,
    },
    {
      id: 're-6-3-def-1b',
      type: 'definition',
      title: 'Sekularisering',
      content:
        `Sekularisering er en prosess der religionens innflytelse på samfunnslivet gradvis avtar. Dette kan innebære at færre deltar i religiøse ritualer, at religiøse normer har mindre innflytelse på lovgivning, og at offentlige institusjoner blir mer uavhengige av religiøse autoriteter. Sekularisering betyr ikke nødvendigvis at individuell tro forsvinner.`,
    },
    {
      id: 're-6-3-example-1',
      type: 'example',
      title: 'Kirken etter 22. juli 2011',
      content:
        'Etter terrorangrepene 22. juli 2011 spilte Den norske kirke en viktig rolle som samlende institusjon. Kirker over hele landet ble åpnet som sorgsteder der mennesker uavhengig av tro og livssyn kunne komme sammen. Oslo domkirke ble et naturlig samlingspunkt for minnesmarkeringer. Dette illustrerer kirkens rolle som en institusjon som strekker seg utover det strengt religiøse og fungerer som et felles rom i krisetider.',
    },
    {
      id: 're-6-3-example-1b',
      type: 'example',
      title: 'Religiøs statistikk i Norge',
      content:
        `Tall fra Statistisk sentralbyrå og trossamfunnene selv gir et bilde av det religiøse landskapet i Norge: Den norske kirke har om lag 3,5 millioner medlemmer (ca. 64 % av befolkningen). Islamske trossamfunn har om lag 200 000 medlemmer. Den katolske kirke har rundt 165 000 registrerte medlemmer. Human-Etisk Forbund har om lag 100 000 medlemmer. Pinsemenigheter, baptister, metodister og andre frikirker har til sammen over 200 000 medlemmer. Buddhistiske, hinduistiske og sikhistiske organisasjoner har til sammen noen titusener medlemmer. Om lag 15–20 % av befolkningen er ikke medlem av noe tros- eller livssynssamfunn.`,
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
      id: 're-6-3-text-2b',
      type: 'text',
      title: 'Debatter om religion i det offentlige rom',
      content:
        `Det religiøse mangfoldet i Norge har ført til en rekke debatter om religionens plass i det offentlige rom. Disse debattene berører grunnleggende spørsmål om forholdet mellom religionsfrihet, ytringsfrihet og likestilling.\n\n**Hijab-debatten** har vært en gjennomgangstema i norsk offentlighet. Spørsmålet om religiøse hodeplagg i politi og rettsvesen har vært omdiskutert, med argumenter om religionsfrihet på den ene siden og nøytralitet i uniform på den andre. I 2009 ble det vedtatt at hijab ikke er tillatt som del av politiuniformen, mens det ellers er tillatt i arbeidslivet.\n\n**Religiøse skoler og barnehager** er et annet debattert tema. Noen argumenterer for at religiøse skoler bidrar til mangfold og foreldre bør ha valgfrihet, mens andre frykter at religiøse skoler kan skape parallellsamfunn og motvirke integrering.\n\n**Omskjæring av gutter** er et tema der religiøs praksis (viktig i jødedommen og islam) møter spørsmål om barnets rettigheter og selvbestemmelse. Norge har siden 2015 en lov som regulerer omskjæring av gutter og sikrer at inngrepet utføres forsvarlig.\n\n**Helligdagsspørsmålet** handler om hvorvidt det norske samfunnet bør tilrettelegge for andre religioners helligdager i tillegg til de kristne. Noen skoler og arbeidsplasser har innført fleksible ordninger som gir mulighet for fri på viktige religiøse høytider.`,
    },
    {
      id: 're-6-3-def-2b',
      type: 'definition',
      title: 'Livssynsåpen stat',
      content:
        `Begrepet «livssynsåpen stat» ble lansert av Stålsett-utvalget (Tros- og livssynsutvalget) i 2013 som et alternativ til begrepene «sekulær stat» og «kristen stat». En livssynsåpen stat er verken religiøst nøytral eller religiøst forankret, men åpen og inkluderende overfor alle tros- og livssynstradisjoner. Staten beskytter religionsfriheten, behandler trossamfunn likeverdig og gir rom for religiøse uttrykk i det offentlige.`,
    },
    {
      id: 're-6-3-example-2',
      type: 'example',
      title: 'Mangfold i skolens hverdag',
      content:
        'I mange norske skoler, særlig i de store byene, er religiøst mangfold en del av hverdagen. Elever feirer ulike høytider, har ulike kostholdsbehov knyttet til religion, og kan ha ulik praksis knyttet til bønn, bekledning og religiøse markeringer. KRLE-faget (kristendom, religion, livssyn og etikk) i grunnskolen og religion og etikk i videregående skole er utformet for å gi alle elever kunnskap om ulike religioner og livssyn, uavhengig av egen bakgrunn.',
    },
    {
      id: 're-6-3-example-2b',
      type: 'example',
      title: 'Trossamfunnsloven av 2021',
      content:
        `I 2021 trådte den nye trossamfunnsloven i kraft. Loven samlet for første gang reglene for alle tros- og livssynssamfunn i én felles lov, noe som erstattet den gamle dissenterlovgivningen. Loven gir alle registrerte tros- og livssynssamfunn rett til offentlig støtte basert på medlemstall, men stiller også krav: Trossamfunn må ha minst 50 medlemmer, føre regnskap, ha tilfredsstillende styringsstrukturer og ikke krenke medlemmenes rettigheter. Støtten kan bli avkortet eller falt bort dersom trossamfunnet oppfordrer til vold, utøver tvang eller bryter andre lovkrav. Loven representerer en balanse mellom religionsfrihet og samfunnets krav om transparens og rettigheter.`,
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

    {
      id: 're-6-3-text-3b',
      type: 'text',
      title: 'Religionsfrihet som menneskerettighet',
      content:
        `Religionsfrihet er en grunnleggende menneskerettighet som er nedfelt i FNs verdenserklæring om menneskerettigheter (artikkel 18) og i Den europeiske menneskerettskonvensjonen (artikkel 9). Religionsfrihet omfatter flere dimensjoner:\n\n**Trosfrihet** betyr at alle har rett til å tro det de vil – eller å ikke tro. Ingen kan tvinges til å ha eller oppgi en bestemt tro.\n\n**Utøvelsesfrihet** innebærer retten til å praktisere sin religion gjennom gudstjenester, ritualer, bønn og religiøse markeringer.\n\n**Ytringsfrihet** i religiøse spørsmål betyr at man har rett til å gi uttrykk for sin tro, forkynne og forsøke å overbevise andre – innenfor de grenser som gjelder for ytringsfrihet generelt.\n\n**Organisasjonsfrihet** gir rett til å organisere seg i tros- og livssynssamfunn.\n\nSamtidig er religionsfriheten ikke absolutt. Den kan begrenses når den kommer i konflikt med andre rettigheter – for eksempel barns rettigheter, likestilling eller andres rettigheter. Grensedragningen mellom religionsfrihet og andre rettigheter er en av de viktigste og vanskeligste debattene i moderne demokratier. Har foreldre rett til å nekte barn medisinsk behandling av religiøse grunner? Har et trossamfunn rett til å diskriminere på grunnlag av kjønn eller seksuell legning? Slike spørsmål viser at religionsfrihet alltid må avveies mot andre verdier og rettigheter.`,
    },
    {
      id: 're-6-3-exercise-6b',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 6',
      content: `Hva menes med begrepet «livssynsåpen stat»?`,
      options: [
        'En stat der alle er pålagt å ha et livssyn',
        'En stat som forbyr religiøse uttrykk i det offentlige rom',
        `En stat som er åpen og inkluderende overfor alle tros- og livssynstradisjoner`,
        'En stat der Det humanistiske forbund har en ledende rolle',
      ],
      correctAnswer: 2,
      explanation:
        `Begrepet «livssynsåpen stat» ble lansert av Stålsett-utvalget i 2013. Det innebærer at staten verken er religiøst nøytral eller religiøst forankret, men åpen for alle tros- og livssynstradisjoner og behandler dem likeverdig.`,
    },
    {
      id: 're-6-3-exercise-7',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 7',
      content:
        `Gjør rede for hovedtrekkene i trossamfunnsloven av 2021. Hvilke krav stiller loven til trossamfunn som mottar offentlig støtte, og hvorfor er disse kravene viktige?`,
    },
    {
      id: 're-6-3-exercise-8',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 8',
      content: `Hva innebærer begrepet «sekularisering»?`,
      options: [
        'At staten forbyr all religiøs praksis',
        `At religionens innflytelse på samfunnslivet gradvis avtar`,
        'At alle blir ateister',
        'At kirken får mer makt i samfunnet',
      ],
      correctAnswer: 1,
      explanation:
        `Sekularisering innebærer at religionens innflytelse på samfunnslivet gradvis avtar, for eksempel gjennom lavere deltakelse i religiøse ritualer og mindre religiøs innflytelse på lovgivning. Det betyr ikke nødvendigvis at individuell tro forsvinner.`,
    },
    {
      id: 're-6-3-exercise-9',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 9',
      content:
        `Diskuter: Bør Norge feire religiøse helligdager for flere religioner enn bare kristendommen? Presenter argumenter for og imot, og ta stilling til spørsmålet.`,
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
  estimatedReadingTime: 45,
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
      id: 're-6-4-text-1b',
      type: 'text',
      title: 'Synet på døden i dybden: kristendom, islam og buddhisme',
      content:
        `La oss se nærmere på hvordan tre store tradisjoner forholder seg til døden i dybden.\n\nI **kristendommen** er troen på oppstandelsen helt sentral. Påskens budskap – at Jesus stod opp fra de døde – er selve kjernen i kristen tro og gir håp om at døden ikke er det endelige. Apostelen Paulus skriver: «Døden er oppslukt, seieren er vunnet» (1. Kor 15,54). Innenfor kristendommen finnes det likevel ulike syn på hva som skjer mellom døden og oppstandelsen. Katolsk teologi har tradisjonelt lært om skjærsilden (purgatorium) – en mellomtilstand der sjelen renses før den kan tre inn i Guds nærvær. Protestantiske teologer har i hovedsak avvist skjærsildslæren. I moderne kristendom er det også en voksende diskusjon om universalisme – tanken om at Guds kjærlighet til syvende og sist vil frelse alle.\n\nI **islam** er forestillingen om dommens dag (Yawm al-Qiyama) svært detaljert. Etter døden gjennomgår sjelen en mellomtilstand kalt «barzakh», der den venter på den endelige dommen. På dommens dag vil Gud veie hver enkelts handlinger. Koranen beskriver paradiset (Jannah) som et sted med hager, rennende vann og evig lykke, mens helvete (Jahannam) beskrives som et sted med ild og lidelse. Det er verdt å merke seg at mange moderne muslimske teologer tolker disse beskrivelsene symbolsk heller enn bokstavelig.\n\nI **buddhismen** er forholdet til døden nært knyttet til læren om forgjengelighet (anicca). Alt er i endring, ingenting varer evig – heller ikke selvet. Buddhismen lærer at det ikke finnes en uforanderlig sjel (anatman-læren), noe som skiller den fra hinduismen. Det som gjenfødes er ikke en sjel, men en strøm av bevissthet formet av karma. Tibetansk buddhisme har en rik tradisjon for å forberede seg på døden, uttrykt blant annet i «Den tibetanske dødeboken» (Bardo Thodol), som gir detaljerte beskrivelser av mellomtilstandene mellom død og gjenfødsel.`,
    },
    {
      id: 're-6-4-def-1b',
      type: 'definition',
      title: 'Reinkarnasjon og oppstandelse',
      content:
        `**Reinkarnasjon** (gjenfødsel) er troen på at sjelen eller bevisstheten etter døden fødes inn i en ny kropp. Denne troen er sentral i hinduisme, buddhisme, jainisme og sikhisme. **Oppstandelse** er troen på at den døde kroppen vil bli gjenoppvekket og forent med sjelen ved tidenes ende. Denne troen er sentral i kristendom og islam. De to forestillingene representerer grunnleggende ulike syn på døden: reinkarnasjon innebærer en syklisk prosess, mens oppstandelse innebærer en lineær tidslinje med en endelig avslutning.`,
    },
    {
      id: 're-6-4-example-1',
      type: 'example',
      title: 'Ritualer knyttet til døden',
      content:
        'Religionenes syn på døden gjenspeiles i deres ritualer. I kristendommen begraves den døde med en begravelsesseremoni som uttrykker håp om oppstandelse. I hinduismen kremeres den døde, og asken spres helst i en hellig elv som Ganges, som et ledd i å frigjøre sjelen. I islam begraves den døde så raskt som mulig, vendt mot Mekka, og det holdes bønner for den avdøde. I jødedommen holdes en syv dagers sorgperiode (shiva) der familien mottar besøk og trøst.',
    },
    {
      id: 're-6-4-example-1b',
      type: 'example',
      title: 'Hospicebevegelsen og omsorg ved livets slutt',
      content:
        `Hospicebevegelsen ble grunnlagt av den britiske legen Dame Cicely Saunders (1918–2005), som i 1967 åpnet St. Christopher's Hospice i London – det første moderne hospicet. Saunders, som var dypt kristen, var overbevist om at omsorg for døende ikke bare handlet om medisinsk smertelindring, men om å ivareta hele mennesket – fysisk, psykisk, sosialt og åndelig. Hospicefilosofien bygger på at døden er en naturlig del av livet, og at mennesker fortjener å dø med verdighet og omsorg. I dag finnes det hospice og palliative avdelinger over hele verden. I Norge har Lovisenberg Lindring og Livshjelp og flere sykehus palliative team som arbeider etter lignende prinsipper. Hospicebevegelsen er et eksempel på hvordan religiøs motivasjon kan inspirere til samfunnsnyttig arbeid.`,
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
      id: 're-6-4-text-2b',
      type: 'text',
      title: 'Absurditet, angst og autentisitet',
      content:
        `Den eksistensialistiske filosofien, som fikk sitt gjennombrudd etter andre verdenskrig, utforsket spørsmålet om mening på en radikal måte.\n\n**Albert Camus** (1913–1960) beskrev tilværelsens «absurditet» – det sprik som oppstår mellom menneskets lengsel etter mening og en tilsynelatende likegyldig verden. I essayet «Myten om Sisyfos» (1942) bruker Camus den greske myten om Sisyfos – som er dømt til å rulle en stein opp en bakke bare for å se den rulle ned igjen – som et bilde på menneskets tilstand. Camus konkluderer likevel med at «vi må forestille oss Sisyfos lykkelig». Mening skapes i selve kampen, ikke i resultatet.\n\n**Søren Kierkegaard** (1813–1855), den danske filosofen som regnes som eksistensialismens far, mente at mennesket må gjøre et «troens sprang» – en personlig, subjektiv avgjørelse om å tro som ikke kan begrunnes rasjonelt. For Kierkegaard var angsten ikke bare noe negativt, men en forutsetning for autentisk eksistens. Gjennom å møte angsten konfronteres mennesket med sin frihet og sitt ansvar.\n\n**Martin Buber** (1878–1965), den jødiske filosofen, argumenterte for at mening finnes i relasjoner – i det ekte møtet mellom «jeg» og «du». For Buber er det ultimate «Du» Gud, og alle genuine menneskelige møter er i siste instans møter med det guddommelige. Bubers relasjonelle filosofi har hatt stor innflytelse på dialogtenkningen.\n\nDisse tenkerne viser at spørsmålet om mening ikke har et enkelt svar, men at det er mange veier til å finne – eller skape – mening i tilværelsen.`,
    },
    {
      id: 're-6-4-def-2b',
      type: 'definition',
      title: 'Eksistensialisme',
      content:
        `Eksistensialisme er en filosofisk retning som vektlegger individets frihet, ansvar og eksistens. Sentrale tenkere inkluderer Søren Kierkegaard, Jean-Paul Sartre, Simone de Beauvoir og Albert Camus. Et kjernebegrep er at «eksistensen går forut for essensen» – mennesket er ikke forhåndsbestemt, men definerer seg selv gjennom sine valg og handlinger.`,
    },
    {
      id: 're-6-4-example-2',
      type: 'example',
      title: 'Viktor Frankls søken etter mening',
      content:
        'Viktor Frankl overlevde flere nazistiske konsentrasjonsleirer under andre verdenskrig. I sin berømte bok «Menneskets søken etter mening» (1946) beskriver han hvordan de fangene som klarte å finne mening – selv under de mest grufulle forhold – hadde størst sjanse for å overleve. Frankl fant selv mening gjennom tanken på sin kone, drømmen om å fullføre sitt livsverk, og viljen til å hjelpe medfanger. Hans erfaring viser at søken etter mening er en fundamental menneskelig drivkraft.',
    },
    {
      id: 're-6-4-example-2b',
      type: 'example',
      title: 'Meditasjon og mening i zen-buddhismen',
      content:
        `I zen-buddhismen er spørsmålet om livets mening ikke noe som besvares gjennom intellektuell analyse, men gjennom direkte erfaring i meditasjon (zazen). Zen-mesteren Shunryu Suzuki skriver i sin klassiker «Zen Mind, Beginner's Mind» (1970) at mening ikke er noe vi finner utenfor oss selv, men noe som åpner seg når sinnet blir stille. Zen bruker også «koaner» – tilsynelatende paradoksale spørsmål som «hva er lyden av én hånd som klapper?» – for å bryte ned vanlige tankemønstre og åpne for en dypere innsikt i tilværelsens natur. Denne tilnærmingen viser en fundamentalt annerledes måte å forholde seg til eksistensielle spørsmål på.`,
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

    {
      id: 're-6-4-text-3b',
      type: 'text',
      title: 'Sorg, trøst og håp i møte med døden',
      content:
        `Uavhengig av hvilket livssyn man har, er møtet med døden – enten egen eller andres – en av livets mest krevende erfaringer. Religioner og livssyn tilbyr ulike ressurser for å håndtere sorg og finne trøst.\n\nI **kristendommen** er trøsten knyttet til håpet om oppstandelse og gjenforening med den avdøde. Salmer, bønner og gravferdsritualer gir en ramme for sorgen. Begravelsesliturgien uttrykker at den døde er i Guds hender, og at livet ikke tar slutt, men forvandles.\n\nI **islam** er tålmodighet (sabr) i møte med tap en sentral dyd. Muslimer trøster seg med at alt skjer etter Guds vilje, og at den rettferdige vil bli belønnet i paradiset. Koranens ord «Vi tilhører Gud, og til Ham vender vi tilbake» (2:156) resiteres ved dødsfall.\n\nI **buddhismen** er refleksjon over døden en sentral del av den åndelige praksisen. Meditasjon over forgjengelighet (maranasati) er ment å hjelpe den troende til å akseptere døden som en naturlig del av tilværelsen og dermed leve mer bevisst og meningsfullt.\n\nI **humanistiske livssyn** er trøsten knyttet til minnet om den avdøde, til fellesskapet med de etterlatte, og til tanken om at den avdødes handlinger og innflytelse lever videre gjennom andre. Humanistisk gravferd fokuserer på å feire livet som ble levd, heller enn å forestille seg et liv etter døden.\n\nI moderne tid har sorgforskning vist at det ikke finnes én «riktig» måte å sørge på. Psykologen Elisabeth Kubler-Ross (1926–2004) beskrev fem stadier av sorg – benektelse, sinne, forhandling, depresjon og aksept – men nyere forskning viser at sorgprosessen er mer individuell og mindre lineær enn denne modellen tilsier. Det viktigste er at sørgende får støtte, rom for sine følelser og tid til å bearbeide tapet.`,
    },
    {
      id: 're-6-4-exercise-6b',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 6',
      content: 'Hva kjennetegner hospicebevegelsens tilnærming til omsorg ved livets slutt?',
      options: [
        'At man bruker alle tilgjengelige medisiner for å utsette døden lengst mulig',
        `At man ivaretar hele mennesket – fysisk, psykisk, sosialt og åndelig – og ser døden som en naturlig del av livet`,
        'At man overlater den døende til familien uten medisinsk inngripen',
        'At man fokuserer utelukkende på religiøse ritualer',
      ],
      correctAnswer: 1,
      explanation:
        `Hospicebevegelsen bygger på at omsorg for døende handler om å ivareta hele mennesket – fysisk, psykisk, sosialt og åndelig. Filosofien er at døden er en naturlig del av livet, og at mennesker fortjener å dø med verdighet.`,
    },
    {
      id: 're-6-4-exercise-7',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 7',
      content:
        `Sammenlign Albert Camus og Viktor Frankls tilnærminger til spørsmålet om mening. Begge levde i en tid preget av krig og lidelse – hvordan påvirket dette deres tenkning? Hvem er du mest enig med, og hvorfor?`,
    },
    {
      id: 're-6-4-exercise-8',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 8',
      content: `Hva skiller buddhismens syn på gjenfødsel fra hinduismens syn på reinkarnasjon?`,
      options: [
        'Buddhismen avviser gjenfødsel helt',
        'Hinduismen tror på gjenfødsel, men buddhismen tror på et evig etterliv',
        `Buddhismen lærer at det ikke finnes en uforanderlig sjel (anatman), mens hinduismen tror at sjelen (atman) gjenfødes`,
        'Det er ingen forskjell mellom de to synene',
      ],
      correctAnswer: 2,
      explanation:
        `I hinduismen er det sjelen (atman) som gjenfødes i nye kropper. Buddhismen derimot avviser at det finnes en uforanderlig sjel (anatman-læren). Det som «gjenfødes» i buddhismen er en strøm av bevissthet formet av karma, ikke en fast sjel.`,
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
  estimatedReadingTime: 45,
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
      id: 're-6-5-text-1b',
      type: 'text',
      title: 'Historisk perspektiv: Kirkens rolle i vitenskapens utvikling',
      content:
        `Det er en vanlig oppfatning at religion alltid har stått i veien for vitenskapelig fremgang. Den historiske virkeligheten er imidlertid langt mer nyansert. I middelalderen var klostrene viktige sentre for lærdom og bevaring av kunnskap. De første universitetene i Europa – Bologna (1088), Paris (ca. 1150) og Oxford (1167) – ble grunnlagt med sterk kirkelig støtte.\n\nManye av historiens største vitenskapsfolk var dypt religiøse. **Nikolaus Kopernikus** (1473–1543), som formulerte den heliosentriske modellen, var katolsk kannik. **Gregor Mendel** (1822–1884), genetikkens far, var augustinermunk. **Georges Lemaître** (1894–1966), som formulerte Big Bang-teorien, var katolsk prest. **Isac Newton** (1643–1727) brukte store deler av sitt liv på teologiske studier og mente at vitenskapelig arbeid var en måte å forstå Guds skaperverk på.\n\nDen islamske gullalderen (ca. 750–1250) er et annet eksempel på at religion og vitenskap kan sameksistere og berike hverandre. Muslimske lærde gjorde banebrytende bidrag innenfor matematikk, astronomi, medisin, kjemi og optikk. Bagdads «Visdommens hus» (Bayt al-Hikma) var et av verdens fremste vitenskapelige sentre. Disse lærde så ikke noen motsetning mellom sin tro og sin vitenskap – tvert imot mente mange at utforskning av naturen var en form for tilbedelse av Skaperen.\n\nDette betyr ikke at det aldri har vært konflikter. Men den utbredte forestillingen om en evig «krig» mellom religion og vitenskap er en forenkling som ikke gjør rettferdighet til den sammensatte historien.`,
    },
    {
      id: 're-6-5-def-1b',
      type: 'definition',
      title: 'Naturteologi',
      content:
        `Naturteologi (også kalt «teologia naturalis») er forsøket på å finne tegn på Guds eksistens og egenskaper gjennom studiet av naturen, uten å støtte seg på åpenbaring eller hellige tekster. Det teleologiske gudsbeviset – argumentet om at naturens orden og kompleksitet peker mot en intelligent skaper – er et klassisk eksempel på naturteologi. William Paleys klokkemaker-analogi (1802) er en kjent versjon av dette argumentet.`,
    },
    {
      id: 're-6-5-example-1',
      type: 'example',
      title: 'Galileo-saken i sin historiske kontekst',
      content:
        `Galileo Galilei (1564–1642) er kanskje det mest kjente eksempelet på konflikt mellom religion og vitenskap. Galileo støttet Kopernikus\' teori om at jorden kretser rundt solen (heliosentrisk modell), noe som ble oppfattet som stridende mot Bibelens fremstilling. Den katolske kirken tvang Galileo til å tilbakekalle sine påstander i 1633 og satte ham i husarrest.\n\nHistorikere har imidlertid nyansert bildet: Galileos problemer skyldtes ikke bare hans vitenskapelige syn, men også hans polemiske stil og politiske konflikter med paven. Flere høytstående kirkemenn støttet faktisk Galileos forskning. Saken handlet delvis om kirkens autoritet til å tolke Bibelen – et følsomt tema under motreformasjonen – og ikke utelukkende om vitenskapelige fakta.\n\nFørst i 1992 innrømmet pave Johannes Paul II at kirken hadde gjort feil overfor Galileo, etter en 13 år lang granskning. Galileo-saken illustrerer hvordan konflikter mellom religion og vitenskap ofte er mer komplekse enn de først synes, og involverer makt, politikk og tolkning – ikke bare fakta.`,
    },
    {
      id: 're-6-5-example-1b',
      type: 'example',
      title: 'Darwin-debatten i Oxford 1860',
      content:
        `Da Charles Darwins «Om artenes opprinnelse» ble publisert i 1859, utløste den en intens debatt. Den mest berømte konfrontasjonen fant sted ved Oxford-debatten i juni 1860, der biskop Samuel Wilberforce konfronterte Thomas Henry Huxley – Darwins fremste forsvarer, kjent som «Darwins bulldogg». Ifølge legenden spurte Wilberforce sarkastisk om Huxley nedstammet fra aper på mors- eller farssiden, og Huxley svarte at han heller ville nedstamme fra en ape enn fra en mann som misbrukte sin posisjon til å undertrykke vitenskapelig debatt.\n\nDenne debatten er blitt et symbol på konflikten mellom religion og evolusjonsteori. Men bildet er mer sammensatt: Mange kristne aksepterte raskt evolusjonsteorien og mente den var forenlig med troen på Gud som skaper. Darwins venn og botaniker Asa Gray var både evolusjonist og troende kristen. Selv Darwin skrev i en senere utgave av sitt hovedverk om «livets storhet, som opprinnelig ble blåst inn i noen få former, eller i én».`,
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
      id: 're-6-5-text-3b',
      type: 'text',
      title: 'Kvantefysikk, bevissthet og mystikk',
      content:
        `I de siste tiårene har noen tenkere forsøkt å finne forbindelser mellom moderne fysikk – spesielt kvantefysikk – og religiøs mystikk. Kvantefysikkens oppdagelser på begynnelsen av 1900-tallet utfordret det klassiske, mekanistiske verdensbildet på grunnleggende måter.\n\n**Kvantefysikken** viste at partikler på subatomært nivå oppfører seg på måter som strider mot vår dagligdagse intuisjon: de kan eksistere i flere tilstander samtidig (superposisjon), de kan påvirke hverandre øyeblikkelig over store avstander (sammenfiltring), og observasjon ser ut til å påvirke resultatet av eksperimenter. Noen av kvantefysikkens grunnleggere – som Niels Bohr, Werner Heisenberg og Erwin Schrodinger – var selv fascinert av parallellene mellom deres oppdagelser og østlig filosofi.\n\nFysikeren Fritjof Capra utforsket disse parallellene i sin innflytelsesrike bok «The Tao of Physics» (1975), der han argumenterte for likheter mellom kvantefysikkens verdensbilde og mystiske tradisjoner i hinduisme, buddhisme og taoisme. Capra pekte på at begge utfordrer den dagligdagse oppfatningen av virkeligheten som bestående av separate, faste objekter.\n\nDet er imidlertid viktig å være kritisk til slike sammenligninger. Mange fysikere advarer mot å trekke for direkte paralleller mellom kvantefysikk og religiøs mystikk. Kvantefysikk er en matematisk presis teori som beskriver subatomære fenomener, mens mystikk er en subjektiv, åndelig erfaring. At begge utfordrer vår dagligdagse forståelse av virkeligheten, betyr ikke nødvendigvis at de beskriver det samme.\n\n**Bevissthetsproblemet** er et annet område der vitenskap og religion møtes. Nevrovitenskap har gjort store fremskritt i å forstå hjernens funksjoner, men spørsmålet om hvordan fysiske prosesser i hjernen gir opphav til subjektiv opplevelse (det filosofen David Chalmers kaller «the hard problem of consciousness») forblir uløst. Noen ser dette som et argument for at bevissthet ikke kan reduseres til fysikk, noe som åpner for religiøse tolkninger. Andre mener at vitenskapen vil løse problemet med tid.`,
    },
    {
      id: 're-6-5-def-3b',
      type: 'definition',
      title: 'Scientisme',
      content:
        `Scientisme er oppfatningen om at naturvitenskapen er den eneste gyldige kilden til kunnskap, og at alle meningsfulle spørsmål i prinsippet kan besvares vitenskapelig. Kritikere av scientisme – både religiøse og sekulære – hevder at vitenskap ikke kan besvare normative spørsmål (hva er rett og galt?), estetiske spørsmål (hva er vakkert?) eller eksistensielle spørsmål (hva er meningen med livet?) og at scientisme dermed er en for snever kunnskapsforståelse.`,
    },
    {
      id: 're-6-5-example-3',
      type: 'example',
      title: 'Francis Collins – vitenskapsmann og troende',
      content:
        'Francis Collins er en amerikansk genetiker som ledet Human Genome Project – det internasjonale prosjektet som kartla hele det menneskelige genomet. Collins er også en bekjennende kristen og har skrevet boken «The Language of God» (2006), der han argumenterer for at vitenskapelige oppdagelser og kristen tro er forenlige. Collins beskriver sin vei fra ateisme til tro og argumenterer for at den genetiske koden kan sees som Guds «språk». Hans eksempel viser at det er mulig å kombinere vitenskapelig arbeid på høyeste nivå med personlig religiøs tro.',
    },
    {
      id: 're-6-5-example-3b',
      type: 'example',
      title: `Etikk og teknologi: nye utfordringer`,
      content:
        `Moderne vitenskap og teknologi reiser stadig nye etiske spørsmål som berører forholdet mellom religion og vitenskap. Genredigering med CRISPR-teknologi gjør det mulig å endre menneskers DNA – noe som reiser spørsmål om vi «leker Gud». Kunstig intelligens utfordrer våre forestillinger om bevissthet, fri vilje og hva det betyr å være menneske. Klimakrisen aktualiserer spørsmålet om menneskets ansvar som forvalter av skaperverket. I alle disse spørsmålene kan religiøse perspektiver berike den vitenskapelige og politiske debatten, samtidig som vitenskapelig kunnskap er nødvendig for å forstå konsekvensene av våre valg.`,
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

    {
      id: 're-6-5-exercise-6b',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 6',
      content: `Hva er naturteologi?`,
      options: [
        'En vitenskapelig teori om naturens opprinnelse',
        'Forsøket på å finne tegn på Guds eksistens gjennom studiet av naturen',
        'En religiøs retning som avviser all vitenskap',
        'Studiet av naturkatastrofer i religiøs sammenheng',
      ],
      correctAnswer: 1,
      explanation:
        `Naturteologi er forsøket på å finne tegn på Guds eksistens og egenskaper gjennom studiet av naturen, uten å støtte seg på åpenbaring eller hellige tekster. Det teleologiske gudsbeviset er et klassisk eksempel.`,
    },
    {
      id: 're-6-5-exercise-7',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 7',
      content:
        `Gjør rede for den islamske gullalderen og forklar hvordan religion og vitenskap eksisterte side om side i denne perioden. Hva kan vi lære av dette historiske eksempelet?`,
    },
    {
      id: 're-6-5-exercise-8',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 8',
      content: `Hva menes med «scientisme»?`,
      options: [
        'En form for religiøs tro basert på vitenskap',
        'At vitenskap og religion er likeverdige kunnskapsformer',
        `Oppfatningen om at naturvitenskapen er den eneste gyldige kilden til kunnskap`,
        'Studiet av vitenskapens historie',
      ],
      correctAnswer: 2,
      explanation:
        `Scientisme er oppfatningen om at naturvitenskapen er den eneste gyldige kilden til kunnskap. Kritikere hevder at vitenskap ikke kan besvare normative, estetiske eller eksistensielle spørsmål, og at scientisme dermed er en for snever kunnskapsforståelse.`,
    },
    {
      id: 're-6-5-exercise-9',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 9',
      content:
        `Noen tenkere har trukket paralleller mellom kvantefysikk og religiøs mystikk. Gjør rede for disse parallellene og diskuter om de er overbevisende. Hva er styrkene og svakhetene ved slike sammenligninger?`,
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
