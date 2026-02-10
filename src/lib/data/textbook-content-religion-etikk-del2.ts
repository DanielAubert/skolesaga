/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Religion og etikk VG3
 *
 * Seksjon 2: Kristendom og islam (Kapittel 2.1–2.7)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Kristendommens opprinnelse og tidlige historie
// ============================================================================

const CHAPTER_RELIGION_ETIKK_2_1: TextbookChapter = {
  id: 'religion-etikk-2-1',
  courseId: 'religion-etikk',
  title: 'Kristendommens opprinnelse og tidlige historie',
  chapterNumber: '2.1',
  estimatedMinutes: 20,
  content: [
    {
      id: 're-2-1-intro',
      type: 'text',
      title: 'Innledning',
      content:
        `Kristendommen er verdens største religion med over to milliarder tilhengere. Den oppstod i det første århundret i den østlige delen av Romerriket, med utgangspunkt i livet og forkynnelsen til Jesus fra Nasaret. For å forstå kristendommens utvikling må vi se på den historiske konteksten den vokste frem i, de sentrale skikkelsene som formet den tidlige bevegelsen, og de avgjørende beslutningene som ble tatt i de første århundrene. I dette kapitlet følger vi utviklingen fra den jødiske konteksten Jesus virket i, via urkirken og Paulus' misjonsreiser, til kristendommen ble Romerrikets offisielle religion.`,
    },
    {
      id: 're-2-1-def-1',
      type: 'definition',
      title: 'Jesus fra Nasaret',
      content:
        'Jesus fra Nasaret (ca. 4 f.Kr.–ca. 30 e.Kr.) er kristendommens sentrale skikkelse. Ifølge de kristne evangeliene var han en jødisk lærer og forkynner som virket i Galilea og Judea. Han samlet disipler rundt seg, forkynte om Guds rike, og ble henrettet ved korsfestelse under den romerske prefekten Pontius Pilatus. For kristne er Jesus Kristus – Messias, Guds sønn og verdens frelser.',
    },
    {
      id: 're-2-1-text-1',
      type: 'text',
      title: 'Jesus og den jødiske konteksten',
      content:
        'Jesus vokste opp i et jødisk miljø i Galilea, en region i det nordlige Palestina under romersk overherredømme. Hans forkynnelse var dypt forankret i jødisk tradisjon, og han refererte til Den hebraiske bibelen (Tanakh) i sine taler. Sentrale temaer i Jesu forkynnelse var Guds rikes komme, nestekjærlighet, tilgivelse og omsorg for de svake i samfunnet. Jesus samlet tolv nærmeste disipler (apostler) og en bredere krets av tilhengere. Etter Jesu død og det hans tilhengere opplevde som hans oppstandelse, begynte disiplene å forkynne budskapet videre. Denne tidligste gruppen av Jesu tilhengere kalles urkirken.',
    },
    {
      id: 're-2-1-ex-1',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Forklar med egne ord hvordan Jesu forkynnelse var knyttet til jødisk tradisjon. Nevn minst to sentrale temaer i hans budskap.',
      exercises: [],
    },
    {
      id: 're-2-1-def-2',
      type: 'definition',
      title: 'Urkirken',
      content:
        'Urkirken betegner den tidligste kristne menigheten, fra Jesu død (ca. 30 e.Kr.) og de påfølgende tiårene. De første kristne var jøder som trodde at Jesus var Messias. De holdt samlinger i private hjem, delte måltider, og forkynte budskapet om Jesu oppstandelse. Et sentralt spørsmål i urkirken var om ikke-jøder (hedninger) måtte følge jødisk lov for å bli del av fellesskapet.',
    },
    {
      id: 're-2-1-text-2',
      type: 'text',
      title: 'Paulus og misjonsreisene',
      content:
        `Paulus fra Tarsus (ca. 5–ca. 64 e.Kr.) er en av de mest innflytelsesrike skikkelsene i kristendommens historie. Opprinnelig var han en fariseer som forfulgte de tidlige kristne. Ifølge Apostlenes gjerninger opplevde han en dramatisk omvendelse på veien til Damaskus, der han fikk et syn av den oppstandne Jesus. Etter dette ble Paulus en av de mest aktive misjonærene i den tidlige kirken.\n\nPaulus gjennomførte flere misjonsreiser rundt det østlige Middelhavet, der han grunnla menigheter i byer som Korint, Efesos, Filippi og Tessalonika. Han skrev brev (epistler) til disse menighetene, og mange av disse brevene ble senere del av Det nye testamentet. Paulus argumenterte sterkt for at hedninger kunne bli kristne uten å følge den jødiske loven, noe som var avgjørende for kristendommens utbredelse utenfor den jødiske verden. Apostelmøtet i Jerusalem (ca. 49 e.Kr.) støttet i hovedsak Paulus' posisjon.`,
    },
    {
      id: 're-2-1-ex-2',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Hvilken betydning hadde Paulus for kristendommens utbredelse? Diskuter hvorfor hans standpunkt om hedningemisjonen var viktig for religionens vekst.',
      exercises: [],
    },
    {
      id: 're-2-1-def-3',
      type: 'definition',
      title: 'Konsil',
      content:
        'Et konsil er et kirkemøte der biskoper og andre ledere samles for å avgjøre teologiske spørsmål og fastsette lære. De økumeniske konsilene er spesielt viktige fordi de samlet ledere fra hele den kristne kirken. Det første økumeniske konsilet ble holdt i Nikea i 325 e.Kr.',
    },
    {
      id: 're-2-1-text-3',
      type: 'text',
      title: 'Oldkirken, konsilene og trosbekjennelsene',
      content:
        'I de første århundrene etter Kristus spredte kristendommen seg gradvis gjennom Romerriket, til tross for perioder med forfølgelse. De kristne menighetene utviklet organisasjonsstrukturer med biskoper, prester og diakoner. Etter hvert oppstod det teologiske uenigheter om sentrale lærespørsmål, særlig om forholdet mellom Gud Fader og Jesus Kristus.\n\nDet første konsilet i Nikea (325 e.Kr.), sammenkalt av keiser Konstantin, fastslo at Sønnen (Jesus Kristus) er «av samme vesen» som Faderen – en avvisning av arianismen, som hevdet at Sønnen var et skapt vesen. Den nikenske trosbekjennelsen ble formulert her og er fortsatt sentral i de fleste kristne kirkesamfunn. Konsilet i Kalkedon (451 e.Kr.) fastslo at Kristus har to naturer – en guddommelig og en menneskelig – forent i én person. Disse avgjørelsene formet det som ble ortodoks kristen lære.',
    },
    {
      id: 're-2-1-ex-3',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Hva er et konsil, og hvorfor var konsilet i Nikea (325 e.Kr.) viktig for utformingen av kristen lære?',
      exercises: [],
    },
    {
      id: 're-2-1-text-4',
      type: 'text',
      title: 'Kristendommen blir statsreligion',
      content:
        'Et vendepunkt i kristendommens historie kom med keiser Konstantin den store (regjeringstid 306–337 e.Kr.). Med toleranseediktet i Milano (313 e.Kr.) ble kristendommen en lovlig religion i Romerriket etter perioder med til dels brutal forfølgelse. Konstantin selv favoriserte kristendommen og spilte en aktiv rolle i kirkens anliggender, blant annet ved å sammenkalle konsilet i Nikea.\n\nI 380 e.Kr. erklærte keiser Theodosius I kristendommen som Romerrikets offisielle statsreligion gjennom ediktet i Tessalonika. Hedenske kulter ble etter hvert forbudt, og kristendommen gikk fra å være en forfulgt minoritetsreligion til å bli den dominerende makten i europeisk kultur og politikk. Denne overgangen hadde enorme konsekvenser: kirken fikk økonomiske ressurser, politisk innflytelse og ansvar for utdanning og sosialt arbeid, men forbindelsen med statsmakten reiste også spørsmål om maktmisbruk og trosfrihet.',
    },
    {
      id: 're-2-1-ex-4',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Gjør rede for de viktigste stegene fra kristendommens status som forfulgt minoritetsreligion til offisiell statsreligion i Romerriket. Hvilke konsekvenser fikk denne endringen?',
      exercises: [],
    },
    {
      id: 're-2-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        `Kristendommen oppstod i en jødisk kontekst i det første århundret, med Jesus fra Nasaret som sentral skikkelse. Urkirken bestod av jødiske tilhengere som trodde Jesus var Messias. Paulus spilte en avgjørende rolle i å åpne religionen for ikke-jøder gjennom sine misjonsreiser og teologiske argumenter. I de påfølgende århundrene ble sentrale lærespørsmål avklart gjennom konsilene, og trosbekjennelsene formulerte det som ble kristen ortodoksi. Med Konstantins støtte og Theodosius' lovgivning gikk kristendommen fra å være en forfulgt bevegelse til Europas dominerende religion.`,
    },
    {
      id: 're-2-1-ex-5',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Lag en tidslinje over kristendommens utvikling fra Jesu virke (ca. 30 e.Kr.) til kristendommen ble statsreligion (380 e.Kr.). Marker minst fem viktige hendelser og forklar kort hvorfor hver hendelse var betydningsfull.',
      exercises: [],
    },
    {
      id: 're-2-1-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Diskuter i hvilken grad det var en fordel eller ulempe for kristendommen å bli statsreligion i Romerriket. Bruk konkrete eksempler fra teksten i argumentasjonen din.',
      exercises: [],
    },
  ],
};

// ============================================================================
// Kapittel 2.2: Kristne retninger og konfesjonskunnskap
// ============================================================================

const CHAPTER_RELIGION_ETIKK_2_2: TextbookChapter = {
  id: 'religion-etikk-2-2',
  courseId: 'religion-etikk',
  title: 'Kristne retninger og konfesjonskunnskap',
  chapterNumber: '2.2',
  estimatedMinutes: 22,
  content: [
    {
      id: 're-2-2-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'I dag finnes det tusenvis av kristne kirkesamfunn og retninger over hele verden. Denne mangfoldigheten har vokst frem gjennom to tusen års historie, med store splittelser og reformer som har formet kristendommens landskap. De tre hovedgrenene – katolisisme, ortodoksi og protestantisme – skiller seg fra hverandre i spørsmål om kirkens autoritet, sakramenter, gudstjenestepraksis og teologi. I dette kapitlet ser vi nærmere på de viktigste kristne retningene og hva som kjennetegner dem.',
    },
    {
      id: 're-2-2-def-1',
      type: 'definition',
      title: 'Konfesjonskunnskap',
      content:
        'Konfesjonskunnskap er studiet av de ulike kristne retningene (konfesjonene), deres lære, praksis, organisasjon og historie. Begrepet «konfesjon» kommer fra det latinske «confessio», som betyr bekjennelse, og viser til at ulike kristne grupper bekjenner seg til ulike trosformuleringer og tradisjoner.',
    },
    {
      id: 're-2-2-text-1',
      type: 'text',
      title: 'Den katolske kirke',
      content:
        'Den romersk-katolske kirke er verdens største kristne kirkesamfunn med over én milliard medlemmer. Kirken ledes av paven i Roma, som ifølge katolsk lære er Peterss etterfølger og Kristi stedfortreder på jord. Den katolske kirken legger stor vekt på tradisjonen som autoritetskilde ved siden av Bibelen, og læreembetet (magisterium) har myndighet til å tolke Skriften og fastsette lære.\n\nSentrale trekk ved katolisismen inkluderer de syv sakramentene (dåp, konfirmasjon, eukaristi, bot, de sykes salving, ordinasjon og ekteskap), Marias spesielle stilling som Guds mor, helgendyrkelse, og et rikt liturgisk liv. Den katolske kirken har et hierarkisk system med pave, kardinaler, erkebiskoper, biskoper, prester og diakoner. Det andre vatikankonsil (1962–1965) førte til betydelige reformer, blant annet at messen ble feiret på lokalspråk i stedet for latin.',
    },
    {
      id: 're-2-2-ex-1',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Hva menes med pavens autoritet i den katolske kirke? Nevn tre kjennetegn ved katolsk kristendom.',
      exercises: [],
    },
    {
      id: 're-2-2-def-2',
      type: 'definition',
      title: 'Det store skismaet (1054)',
      content:
        'Det store skismaet i 1054 var den formelle splittelsen mellom den vestlige (katolske) kirken med sete i Roma og den østlige (ortodokse) kirken med sete i Konstantinopel. Bakgrunnen var langvarige uenigheter om pavens autoritet, teologiske formuleringer (særlig filioque-tillegget i trosbekjennelsen) og liturgiske forskjeller. Splittelsen markerte fremveksten av to distinkte kristne tradisjoner.',
    },
    {
      id: 're-2-2-text-2',
      type: 'text',
      title: 'De ortodokse kirkene',
      content:
        'De ortodokse kirkene er en familie av selvstyrte (autokefale) kirker som deler samme tro, sakramenter og liturgisk tradisjon, men som ledes av egne patriarker eller erkebiskoper. De største ortodokse kirkene finnes i Russland, Hellas, Romania, Serbia, Bulgaria og Georgia. Den økumeniske patriarken av Konstantinopel (Istanbul) har en æresforrang blant de ortodokse lederne, men har ikke samme myndighet som paven i den katolske kirke.\n\nOrtodoks kristendom kjennetegnes av rik ikonkunst, detaljerte liturgiske tradisjoner og en teologi som legger vekt på guddommeliggjørelse (theosis) – tanken om at menneskets mål er å bli delaktig i Guds natur. Gudstjenesten (den guddommelige liturgi) er sentral og inneholder sang, røkelse, ikoner og prosesjon. De ortodokse kirkene anerkjenner de syv første økumeniske konsilene som autoritative.',
    },
    {
      id: 're-2-2-ex-2',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Sammenlign den katolske og den ortodokse kirken. Hva er de viktigste likhetene og forskjellene når det gjelder organisasjon, gudstjenesteform og teologi?',
      exercises: [],
    },
    {
      id: 're-2-2-def-3',
      type: 'definition',
      title: 'Reformasjonen',
      content:
        'Reformasjonen var en religiøs og politisk omveltning i Europa på 1500-tallet som førte til fremveksten av protestantiske kirkesamfunn. Martin Luther regnes som reformasjonens initiativtaker med sine 95 teser i 1517, der han kritiserte avlatshandelen og vektla frelse ved tro alene (sola fide), Skriften alene (sola scriptura) og nåden alene (sola gratia).',
    },
    {
      id: 're-2-2-text-3',
      type: 'text',
      title: 'Protestantisme: lutherske, reformerte og anglikanske kirker',
      content:
        'Protestantismen omfatter et bredt spekter av kirkesamfunn som historisk har sin bakgrunn i reformasjonen. De lutherske kirkene bygger på Martin Luthers teologi og er særlig utbredt i Skandinavia og Nord-Europa. Sentrale prinsipper er rettferdiggjørelse ved tro alene, Bibelen som høyeste autoritet, og det allmenne prestedømme – tanken om at alle kristne har direkte tilgang til Gud uten behov for en geistlig mellommann.\n\nDe reformerte kirkene har sine røtter i teologien til Jean Calvin og Huldrych Zwingli, med vekt på Guds suverenitet og predestinasjon. Disse kirkene er utbredt i Sveits, Nederland, Skottland og deler av USA. Den anglikanske kirken oppstod i England da Henrik VIII brøt med paven i 1534. Anglikanismen beskrives ofte som en «via media» (mellomvei) mellom katolisisme og protestantisme, med elementer fra begge tradisjoner.\n\nFelles for protestantiske kirker er vekten på Bibelen som øverste autoritet, færre sakramenter enn i katolisismen (vanligvis to: dåp og nattverd), og en enklere gudstjenesteform. Samtidig er det stor variasjon mellom ulike protestantiske retninger.',
    },
    {
      id: 're-2-2-ex-3',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Gjør rede for de tre protestantiske hovedtradisjonene (luthersk, reformert, anglikansk). Hva har de til felles, og hva skiller dem?',
      exercises: [],
    },
    {
      id: 're-2-2-text-4',
      type: 'text',
      title: 'Pinsebevegelsen og karismatiske retninger',
      content:
        'Pinsebevegelsen er en av de raskest voksende kristne retningene i verden, med anslagsvis over 600 millioner tilhengere globalt. Bevegelsen har sitt utspring i vekkelser i USA tidlig på 1900-tallet, særlig Azusa Street-vekkelsen i Los Angeles i 1906. Navnet «pinsebevegelsen» viser til pinseberetningen i Apostlenes gjerninger, der Den hellige ånd kom over disiplene.\n\nKjennetegn ved pinsebevegelsen og karismatiske retninger er vektlegging av Den hellige ånds gaver (nådegaver eller karismer), som tungetale (glossolali), helbredelse, profeti og åndelig fornyelse. Gudstjenestene er ofte preget av engasjert lovsang, spontan bønn og personlige vitnesbyrd. Teologisk legger pinsebevegelsen vekt på personlig omvendelse, dåp i Den hellige ånd som en egen erfaring utover frelsen, og en bokstavelig lesning av Bibelen.\n\nKarismatisk fornyelse har også funnet sted innenfor etablerte kirkesamfunn, inkludert den katolske og lutherske kirken, der medlemmer har tatt opp karismatiske praksiser uten å forlate sitt opprinnelige kirkesamfunn.',
    },
    {
      id: 're-2-2-ex-4',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Hva kjennetegner pinsebevegelsen? Forklar hva som menes med «karismatiske gaver» og hvorfor denne retningen har vokst så raskt.',
      exercises: [],
    },
    {
      id: 're-2-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Kristendommen har gjennom historien delt seg i tre hovedgrener: den katolske kirken, de ortodokse kirkene og protestantismen. Det store skismaet i 1054 skilte øst- og vestkirken, mens reformasjonen på 1500-tallet førte til fremveksten av protestantiske retninger. Innenfor protestantismen finnes lutherske, reformerte og anglikanske tradisjoner, i tillegg til nyere bevegelser som pinsebevegelsen. Til tross for forskjeller i lære, organisasjon og praksis deler de fleste kristne retninger troen på Jesus Kristus som frelser, Bibelens autoritet og sakramentene dåp og nattverd.',
    },
    {
      id: 're-2-2-ex-5',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Lag en oversikt (for eksempel en tabell) der du sammenligner katolisisme, ortodoksi og protestantisme med hensyn til: lederskap, sakramenter, autoritetskilde, gudstjenesteform og utbredelse.',
      exercises: [],
    },
    {
      id: 're-2-2-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Diskuter hva som er de viktigste årsakene til at kristendommen har delt seg i så mange retninger. Bruk konkrete historiske eksempler i svaret ditt.',
      exercises: [],
    },
  ],
};

// ============================================================================
// Kapittel 2.3: Islam – tro og grunnlag
// ============================================================================

const CHAPTER_RELIGION_ETIKK_2_3: TextbookChapter = {
  id: 'religion-etikk-2-3',
  courseId: 'religion-etikk',
  title: 'Islam – tro og grunnlag',
  chapterNumber: '2.3',
  estimatedMinutes: 22,
  content: [
    {
      id: 're-2-3-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Islam er verdens nest største religion med nærmere to milliarder tilhengere, kalt muslimer. Religionen oppstod på den arabiske halvøy på 600-tallet e.Kr. og spredte seg raskt til store deler av verden. Islam betyr «underkastelse» eller «overgivelse» (til Guds vilje), og en muslim er «en som underkaster seg». I dette kapitlet ser vi på islams opprinnelse, de sentrale hellige tekstene og de fem søylene som utgjør grunnlaget for islamsk tro og praksis.',
    },
    {
      id: 're-2-3-def-1',
      type: 'definition',
      title: 'Islam',
      content:
        'Islam er en monoteistisk religion som bygger på troen på én Gud (Allah). Ifølge islamsk tradisjon er islam den siste og fullstendige åpenbaringen fra Gud til menneskeheten, formidlet gjennom profeten Muhammad (ca. 570–632 e.Kr.). Islam ser seg selv i forlengelsen av den jødiske og kristne tradisjonen og anerkjenner bibelske skikkelser som Abraham (Ibrahim), Moses (Musa) og Jesus (Isa) som profeter.',
    },
    {
      id: 're-2-3-text-1',
      type: 'text',
      title: 'Muhammad og åpenbaringen',
      content:
        'Muhammad ibn Abdullah ble født rundt 570 e.Kr. i Mekka, et viktig handels- og religiøst senter på den arabiske halvøy. Han vokste opp som foreldreløs og ble oppdratt av sin bestefar og deretter sin onkel. Som voksen ble han kjent som en pålitelig handelsmann.\n\nIfølge islamsk tradisjon mottok Muhammad den første åpenbaringen fra Gud gjennom engelen Jibril (Gabriel) i en hule på fjellet Hira rundt år 610 e.Kr. Åpenbaringene fortsatte over en periode på omtrent 23 år og utgjør til sammen Koranen. Muhammad begynte å forkynne budskapet om den ene Gud i Mekka, men møtte sterk motstand fra byens ledere. I 622 e.Kr. emigrerte Muhammad og hans tilhengere til Medina – en hendelse kjent som hijra, som markerer starten på den islamske tidsregningen. I Medina bygde Muhammad opp et muslimsk samfunn og ble både religiøs og politisk leder. I 630 e.Kr. vendte han tilbake til Mekka, som aksepterte islam. Muhammad døde i Medina i 632 e.Kr.',
    },
    {
      id: 're-2-3-ex-1',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Gjør rede for de viktigste hendelsene i Muhammads liv. Hvorfor er hijra (622 e.Kr.) et så viktig vendepunkt i islams historie?',
      exercises: [],
    },
    {
      id: 're-2-3-def-2',
      type: 'definition',
      title: 'Koranen',
      content:
        'Koranen (al-Qur\'an, «resitasjonen») er islams hellige bok. Muslimer tror at Koranen er Guds ord, åpenbart på arabisk til profeten Muhammad gjennom engelen Jibril. Koranen består av 114 kapitler (suraer) og omhandler teologi, etikk, lovgivning, formaninger og fortellinger om tidligere profeter. Den regnes som den øverste autoritetskilden i islam.',
    },
    {
      id: 're-2-3-text-2',
      type: 'text',
      title: 'Koranen, hadith og sunna',
      content:
        'Koranen er den primære kilden for islamsk tro og praksis. Muslimer tror at Koranen er Guds uforandrede ord, og den resiteres på arabisk i bønn og gudstjeneste over hele verden. Koranen ble samlet i sin nåværende form kort tid etter Muhammads død, under kalif Uthmans ledelse (ca. 650 e.Kr.).\n\nVed siden av Koranen er hadith og sunna sentrale kilder. Hadith er overleveringer om hva Muhammad sa, gjorde eller godkjente, nedskrevet av hans følgesvenner og senere samlet i store samlinger. De mest anerkjente hadithsamlingene innenfor sunniislam er Sahih al-Bukhari og Sahih Muslim. Sunna betyr «vane» eller «praksis» og viser til Muhammads levemåte slik den fremgår av hadith-litteraturen. Sunnaen fungerer som et forbilde for hvordan muslimer bør leve sine liv.\n\nSammen med Koranen utgjør hadith og sunna grunnlaget for islamsk rettslære (sharia), som gir veiledning for alle aspekter av livet – fra religiøse ritualer til hverdagsliv, økonomi og familieforhold.',
    },
    {
      id: 're-2-3-ex-2',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Forklar forskjellen mellom Koranen, hadith og sunna. Hvorfor er alle tre kildene viktige for å forstå islamsk tro og praksis?',
      exercises: [],
    },
    {
      id: 're-2-3-def-3',
      type: 'definition',
      title: 'De fem søylene i islam',
      content:
        'De fem søylene (arkan al-islam) er de grunnleggende religiøse pliktene som alle muslimer forventes å følge. De utgjør selve rammeverket for islamsk praksis og gir struktur til den troendes liv. De fem søylene er: trosbekjennelsen (shahada), bønnen (salat), fasten (sawm), den religiøse avgiften (zakat) og pilegrimsreisen (hajj).',
    },
    {
      id: 're-2-3-text-3',
      type: 'text',
      title: 'Trosbekjennelsen og bønnen',
      content:
        `Den første søylen er trosbekjennelsen (shahada): «Det er ingen gud uten Gud, og Muhammad er Guds sendebud» (La ilaha illa Allah, Muhammadur rasul Allah). Å uttale shahada med oppriktig overbevisning foran vitner er det som gjør en person til muslim. Trosbekjennelsen uttrykker islams to grunnleggende prinsipper: monoteisme (tawhid) og anerkjennelsen av Muhammad som den siste profeten.\n\nDen andre søylen er bønnen (salat). Muslimer oppfordres til å be fem ganger daglig: ved daggry (fajr), midt på dagen (dhuhr), ettermiddag (asr), solnedgang (maghrib) og kveld (isha). Bønnen utføres vendt mot Mekka og følger et bestemt mønster av stående, bøyende og knelende stillinger, ledsaget av resitasjon av Koranvers. Fredagsbønnen (jumu'a) er en fellesbønn i moskeen med preken (khutba) og har spesiell betydning som ukens viktigste samlingsstund.`,
    },
    {
      id: 're-2-3-ex-3',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Hva uttrykker den islamske trosbekjennelsen (shahada)? Beskriv hvordan den daglige bønnen (salat) gjennomføres.',
      exercises: [],
    },
    {
      id: 're-2-3-text-4',
      type: 'text',
      title: 'Fasten, den religiøse avgiften og pilegrimsreisen',
      content:
        'Den tredje søylen er fasten i måneden ramadan (sawm). I denne måneden, den niende i den islamske kalenderen, faster muslimer fra soloppgang til solnedgang – de avstår fra mat, drikke og andre fysiske behov. Fasten er ment å styrke selvdisiplin, takknemlighet og medfølelse med de som lever i fattigdom. Ramadan avsluttes med feiringen eid al-fitr.\n\nDen fjerde søylen er den religiøse avgiften (zakat). Muslimer som har tilstrekkelige økonomiske midler, er forpliktet til å gi en bestemt andel (vanligvis 2,5 prosent) av sin formue til veldedige formål. Zakat skal gå til fattige, trengende, gjeldstyngede og andre som er i behov. Prinsippet er at rikdom er en gave fra Gud og at det å dele er en religiøs plikt.\n\nDen femte søylen er pilegrimsreisen til Mekka (hajj). Alle muslimer som er fysisk og økonomisk i stand til det, forventes å gjennomføre hajj minst én gang i livet. Pilegrimsreisen finner sted i den tolvte måneden i den islamske kalenderen og inkluderer en rekke ritualer, blant annet å gå rundt Kabaen syv ganger (tawaf), å gå mellom høydene Safa og Marwa, og å stå ved Arafat-sletten. Hajj symboliserer likhet blant muslimer – alle pilegrimer bærer enkle, hvite klær uavhengig av sosial status.',
    },
    {
      id: 're-2-3-ex-4',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Velg to av de fem søylene og forklar hvordan de gir uttrykk for sentrale verdier i islam, som fellesskap, rettferdighet og fromhet.',
      exercises: [],
    },
    {
      id: 're-2-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Islam oppstod på den arabiske halvøy på 600-tallet med profeten Muhammad som sentral skikkelse. Koranen, hadith og sunna utgjør de viktigste kildene for islamsk tro og praksis. De fem søylene – trosbekjennelsen, bønnen, fasten, den religiøse avgiften og pilegrimsreisen – gir struktur og innhold til det religiøse livet og uttrykker kjerneverdier som monoteisme, fellesskap, disiplin, sosial rettferdighet og hengivenhet til Gud. Islam er i dag en verdensreligion med stor intern variasjon, men de fem søylene er felles for praktisk talt alle muslimer.',
    },
    {
      id: 're-2-3-ex-5',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Lag en oversikt over de fem søylene i islam. For hver søyle: beskriv hva den innebærer, og forklar hvilken religiøs og sosial funksjon den har.',
      exercises: [],
    },
    {
      id: 're-2-3-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Sammenlign islams hellige tekster (Koranen og hadith) med kristendommens hellige tekster (Bibelen). Hvilke likheter og forskjeller finner du med hensyn til opprinnelse, autoritet og bruk i religiøs praksis?',
      exercises: [],
    },
  ],
};

// ============================================================================
// Kapittel 2.4: Islam – retninger og mangfold
// ============================================================================

const CHAPTER_RELIGION_ETIKK_2_4: TextbookChapter = {
  id: 'religion-etikk-2-4',
  courseId: 'religion-etikk',
  title: 'Islam – retninger og mangfold',
  chapterNumber: '2.4',
  estimatedMinutes: 20,
  content: [
    {
      id: 're-2-4-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Islam er en verdensreligion med nærmere to milliarder tilhengere, og det finnes et stort mangfold innad i religionen. Allerede kort tid etter profeten Muhammads død i 632 e.Kr. oppstod det uenigheter om hvem som skulle lede det muslimske samfunnet. Denne uenigheten la grunnlaget for den historiske splittelsen mellom sunni- og shiaislam, som fortsatt preger den islamske verden i dag. Ved siden av disse to hovedretningene finnes sufisme – islams mystiske tradisjon – og en rekke moderne reformbevegelser. I dette kapitlet ser vi nærmere på islams indre mangfold og de viktigste retningene.',
    },
    {
      id: 're-2-4-def-1',
      type: 'definition',
      title: 'Sunniislam',
      content:
        'Sunniislam er den største retningen innenfor islam og omfatter anslagsvis 85–90 prosent av verdens muslimer. Navnet kommer av «sunna», som betyr Muhammads praksis og tradisjon. Sunnimuslimer anerkjenner de fire første kalifene (Abu Bakr, Umar, Uthman og Ali) som rettmessige etterfølgere av Muhammad. Sunniislam har fire hovedsaklige rettsskoler (madhhab): hanafi, maliki, shafii og hanbali.',
    },
    {
      id: 're-2-4-text-1',
      type: 'text',
      title: 'Sunni og shia: den historiske splittelsen',
      content:
        `Da profeten Muhammad døde i 632 e.Kr. uten å ha utpekt en etterfølger på en entydig måte, oppstod det uenighet i det muslimske samfunnet om hvem som skulle lede ummaen (det islamske fellesskapet). Flertallet støttet Abu Bakr, Muhammads svigerfar og nære følgesvenn, som ble valgt til den første kalifen. Et mindretall mente derimot at lederskapet burde gå til Ali ibn Abi Talib, Muhammads fetter og svigersønn, som de anså som Muhammads utpekte etterfølger.\n\nDe som støttet Abu Bakr og de påfølgende kalifene, ble til det som i dag er sunniislam. De som holdt fast ved at Ali og hans etterkommere hadde rett til lederskapet, ble til shiaislam (fra «shi'at Ali» – «Alis parti»). Splittelsen ble ytterligere forsterket da Alis sønn Husayn ble drept i slaget ved Karbala i 680 e.Kr. – en hendelse som er sentral i shiamuslimsk identitet og som minnes årlig under ashura-høytiden.\n\nDet er viktig å understreke at sunni- og shiamuslimer deler de grunnleggende troselementene i islam: troen på én Gud, Koranen som hellig skrift, Muhammad som profet, og de fem søylene. Forskjellene handler i stor grad om lederskap, religiøs autoritet og visse rituelle praksiser.`,
    },
    {
      id: 're-2-4-ex-1',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Gjør rede for den historiske bakgrunnen for splittelsen mellom sunni- og shiaislam. Hva var det uenigheten egentlig handlet om?',
      exercises: [],
    },
    {
      id: 're-2-4-def-2',
      type: 'definition',
      title: 'Shiaislam',
      content:
        'Shiaislam er den nest største retningen innenfor islam og utgjør anslagsvis 10–15 prosent av verdens muslimer. Shiamuslimer tror at Ali ibn Abi Talib og hans etterkommere (imamene) var de rettmessige lederne av det muslimske samfunnet etter Muhammad. Den største undergruppen er tolvershia, som tror på tolv imamer. Shiaislam har en sterk tradisjon for religiøst lederskap gjennom lærde (ayatollaher). Iran, Irak, Bahrain og Aserbajdsjan har shiamuslimsk flertall.',
    },
    {
      id: 're-2-4-text-2',
      type: 'text',
      title: 'Sufisme – islams mystiske tradisjon',
      content:
        'Sufisme (tasawwuf) er den mystiske dimensjonen av islam. Sufier søker en direkte, personlig opplevelse av Guds nærhet gjennom indre renselse, meditasjon, bønn og åndelige øvelser. Sufismen har vokst frem innenfor både sunni- og shiaislam og er ikke en egen sekt, men snarere en åndelig tilnærming som kan praktiseres innenfor ulike islamske retninger.\n\nSentrale elementer i sufismen inkluderer dhikr (gjentatt påkallelse av Guds navn), samā (åndelig musikk og dans, kjent fra de hvirvlende dervishene), og et mester-elev-forhold der en åndelig veileder (shaykh eller murshid) leder den søkende (murid) på den åndelige veien (tariqa). Kjente sufier som Rumi, al-Ghazali og Ibn Arabi har bidratt med rik poesi, filosofi og teologi som har hatt dyp innflytelse på islamsk kultur.\n\nSufismen har historisk spilt en viktig rolle i spredningen av islam, særlig i Sør-Asia, Sørøst-Asia og Afrika sør for Sahara, der sufi-ordener tilpasset det islamske budskapet til lokale kulturer. Samtidig har sufismen i perioder blitt kritisert av mer puritanske retninger som mener at enkelte sufi-praksiser avviker fra ren islamsk lære.',
    },
    {
      id: 're-2-4-ex-2',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Hva er sufisme, og hvordan skiller den seg fra andre islamske retninger? Beskriv minst to sentrale praksiser innenfor sufismen.',
      exercises: [],
    },
    {
      id: 're-2-4-text-3',
      type: 'text',
      title: 'Islam i moderne tid: reformbevegelser og politisk islam',
      content:
        'Fra 1800-tallet og fremover har ulike reformbevegelser preget den islamske verden. Disse bevegelsene har oppstått som svar på modernisering, kolonialisme og globalisering, og de har hatt svært ulike tilnærminger.\n\nIslamsk modernisme, representert av tenkere som Muhammad Abduh og Jamal al-Din al-Afghani på slutten av 1800-tallet, søkte å forene islamsk tro med moderne vitenskap og demokratiske verdier. De argumenterte for at islam i sitt vesen er forenlig med fremskritt og rasjonalitet, og at det muslimske samfunnet måtte reformere seg gjennom utdanning og kritisk tenkning.\n\nPå den andre siden finnes salafisme og wahhabisme, konservative retninger som ønsker å vende tilbake til det de anser som de tidligste muslimers praksis. Disse retningene er kritiske til det de ser som uislamske nyskapninger (bid\'a) og legger vekt på en bokstavelig tolkning av Koranen og hadith.\n\nPolitisk islam (islamisme) er en bred betegnelse for bevegelser som mener at islam bør spille en sentral rolle i politikk og samfunnsstyring. Det muslimske brorskapet, grunnlagt i Egypt i 1928, er en av de mest kjente slike bevegelsene. Det er stor variasjon innenfor politisk islam, fra demokratisk deltakelse til mer radikale retninger. Det er viktig å skille mellom politisk islam som et bredt fenomen og de voldelige ekstremistgruppene som utgjør en liten minoritet.',
    },
    {
      id: 're-2-4-ex-3',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Forklar forskjellen mellom islamsk modernisme og salafisme. Hvordan representerer disse to retningene ulike svar på utfordringene i moderne tid?',
      exercises: [],
    },
    {
      id: 're-2-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Islam rommer et stort mangfold av retninger og tradisjoner. Splittelsen mellom sunni- og shiaislam har sin bakgrunn i uenigheter om lederskap etter Muhammads død, men de to retningene deler de grunnleggende troselementene. Sufismen representerer islams mystiske tradisjon og har bidratt til spredningen av religionen gjennom sin tilpasningsdyktighet. I moderne tid har islamske reformbevegelser beveget seg i ulike retninger – fra modernister som ønsker å forene islam med moderne verdier, til konservative retninger som søker tilbake til de tidligste kildene. Mangfoldet innenfor islam gjenspeiler en levende og dynamisk religiøs tradisjon.',
    },
    {
      id: 're-2-4-ex-4',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Lag en oversikt over de viktigste retningene innenfor islam (sunni, shia, sufisme) og beskriv hva som kjennetegner hver av dem. Hva har de til felles, og hva skiller dem?',
      exercises: [],
    },
    {
      id: 're-2-4-ex-5',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Drøft hvordan ulike islamske reformbevegelser har forsøkt å møte utfordringene i moderne tid. Bruk eksempler fra teksten og diskuter fordeler og utfordringer ved de ulike tilnærmingene.',
      exercises: [],
    },
  ],
};

// ============================================================================
// Kapittel 2.5: Kristendom i dag – tro og samfunn
// ============================================================================

const CHAPTER_RELIGION_ETIKK_2_5: TextbookChapter = {
  id: 'religion-etikk-2-5',
  courseId: 'religion-etikk',
  title: 'Kristendom i dag – tro og samfunn',
  chapterNumber: '2.5',
  estimatedMinutes: 20,
  content: [
    {
      id: 're-2-5-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Kristendommen er i dag en global religion med over to milliarder tilhengere på alle kontinenter. Mens religionen historisk har hatt sitt tyngdepunkt i Europa, har det globale sør – Afrika, Asia og Latin-Amerika – blitt stadig viktigere. Kristne kirker engasjerer seg aktivt i samfunnsspørsmål som fattigdomsbekjempelse, menneskerettigheter, miljøvern og sosial rettferdighet. I dette kapitlet ser vi på kristne verdier i møte med samfunnet, frigjøringsteologiens bidrag, og kristendommens stilling i Norge i dag.',
    },
    {
      id: 're-2-5-def-1',
      type: 'definition',
      title: 'Sosialetikk',
      content:
        'Sosialetikk er den delen av etikken som handler om rettferdighet, ansvar og moral i samfunnet som helhet. Kristen sosialetikk bygger på bibelske prinsipper om nestekjærlighet, rettferdighet og omsorg for de svake, og søker å anvende disse prinsippene på spørsmål om politikk, økonomi, miljø og sosiale strukturer. Ulike kristne tradisjoner vektlegger sosialetikken på forskjellige måter.',
    },
    {
      id: 're-2-5-text-1',
      type: 'text',
      title: 'Kristne verdier og sosialetikk',
      content:
        `Kristne kirker og organisasjoner har gjennom historien engasjert seg i sosiale spørsmål med utgangspunkt i evangeliets budskap om nestekjærlighet og rettferdighet. Jesu undervisning om å elske sin neste, hjelpe de fattige og stå opp for de undertrykte har inspirert kristent sosialt arbeid i mange former – fra diakonale institusjoner og sykehus til internasjonale hjelpeorganisasjoner.\n\nI den katolske kirken har sosial lære (Catholic Social Teaching) utviklet seg som en sammenhengende tradisjon fra pave Leo XIIIs encyklika Rerum Novarum (1891), som tok opp arbeidernes rettigheter. Sentrale prinsipper inkluderer menneskets ukrenkelige verdighet, solidaritet, det felles gode, subsidiaritet og en preferensiell omsorg for de fattige. Pave Frans har i sine encyklikaer Laudato Si' (2015) og Fratelli Tutti (2020) lagt særlig vekt på miljøansvar og global solidaritet.\n\nInnenfor protestantisk tradisjon har diakoni – praktisk tjeneste for mennesker i nød – vært en sentral uttrykksform for kristen nestekjærlighet. I den lutherske tradisjonen har to-regimentslæren, som skiller mellom Guds åndelige og verdslige styring, preget synet på forholdet mellom kirke og stat. Økumeniske organisasjoner som Kirkenes Verdensråd arbeider for fred, rettferdighet og forsoning på tvers av konfesjonelle grenser.`,
    },
    {
      id: 're-2-5-ex-1',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Gjør rede for sentrale prinsipper i kristen sosialetikk. Hvordan kommer disse prinsippene til uttrykk i praktisk engasjement?',
      exercises: [],
    },
    {
      id: 're-2-5-def-2',
      type: 'definition',
      title: 'Frigjøringsteologi',
      content:
        'Frigjøringsteologi er en teologisk retning som oppstod i Latin-Amerika på 1960- og 1970-tallet. Den tolker det kristne budskapet i lys av de fattiges og undertryktes situasjon og argumenterer for at Gud tar parti med de marginaliserte. Sentrale skikkelser inkluderer Gustavo Gutiérrez og Leonardo Boff. Frigjøringsteologi har inspirert lignende bevegelser globalt, inkludert svart teologi og feministisk teologi.',
    },
    {
      id: 're-2-5-text-2',
      type: 'text',
      title: 'Frigjøringsteologi',
      content:
        'Frigjøringsteologien vokste frem i Latin-Amerika i en periode preget av stor sosial ulikhet, autoritære regimer og fattigdom. Teologer som Gustavo Gutiérrez argumenterte i sitt banebrytende verk «A Theology of Liberation» (1971) for at teologi ikke bare handler om abstrakte trosspørsmål, men må ta utgangspunkt i de fattiges konkrete virkelighet. Å arbeide for rettferdighet og frigjøring fra undertrykkelse er ifølge frigjøringsteologien en sentral del av det kristne evangeliet.\n\nEt viktig konsept i frigjøringsteologien er «Guds preferensielle valg for de fattige» – tanken om at Gud i bibelsk tradisjon konsekvent stiller seg på de svakes side. Basismenigheter (comunidades eclesiales de base) ble dannet som små, lokale fellesskap der vanlige mennesker leste Bibelen i lys av sine egne livserfaringer og organiserte seg for sosial endring.\n\nFrigjøringsteologien har vært gjenstand for debatt. Tilhengere ser den som en autentisk kristen respons på urettferdighet. Kritikere, inkludert deler av det katolske læreembetet under pave Johannes Paul II, uttrykte bekymring for at den i for stor grad lånte begreper fra marxistisk samfunnsanalyse. Uavhengig av denne debatten har frigjøringsteologien hatt varig innflytelse på kristne kirkers sosiale engasjement verden over.',
    },
    {
      id: 're-2-5-ex-2',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Hva menes med frigjøringsteologi? Diskuter både tilhengernes og kritikernes synspunkter på denne teologiske retningen.',
      exercises: [],
    },
    {
      id: 're-2-5-text-3',
      type: 'text',
      title: 'Kristendommen i Norge: Den norske kirke og frikirker',
      content:
        'Norge har en lang kristen historie som strekker seg tilbake til vikingtiden. Den norske kirke (Den evangelisk-lutherske kirke) har vært den dominerende religiøse institusjonen i landet i over tusen år. Frem til 2012 var Den norske kirke en statskirke, men fikk da en friere stilling gjennom en grunnlovsendring. Kirken er fortsatt nevnt i Grunnloven som «Norges folkekirke» og mottar offentlig støtte.\n\nI dag er omtrent 64 prosent av den norske befolkningen medlemmer av Den norske kirke, men andelen har vært synkende over tid. Kirkens rolle har endret seg fra å være en maktfaktor i samfunnet til å bli mer en tilbyder av ritualer, fellesskap og åndelig veiledning. Dåp, konfirmasjon, bryllup og begravelse er de mest brukte kirkelige handlingene.\n\nVed siden av Den norske kirke finnes en rekke frikirker og kristne trossamfunn. Pinsemenighetene er den største frikirkelige bevegelsen i Norge, etterfulgt av Den Evangelisk Lutherske Frikirke, Metodistkirken, Baptistkirken og ulike karismatiske menigheter. Katolikker utgjør den nest største kristne gruppen i Norge, i stor grad på grunn av innvandring fra katolske land. Til sammen vitner dette om et mangfoldig kristent landskap der ulike tradisjoner lever side om side.\n\nDen norske kirke har de siste tiårene tatt stilling til en rekke kontroversielle samfunnsspørsmål, blant annet likestilling i kirkelige embeter (kvinner ble ordinert som prester fra 1961) og vigsel av likekjønnede par (innført i 2017). Disse spørsmålene har skapt debatt både innad i kirken og i samfunnet for øvrig.',
    },
    {
      id: 're-2-5-ex-3',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Beskriv Den norske kirkes stilling i det norske samfunnet i dag. Hvordan har kirkens rolle endret seg over tid?',
      exercises: [],
    },
    {
      id: 're-2-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Kristendommen i dag er preget av globalt mangfold og aktivt samfunnsengasjement. Kristen sosialetikk bygger på prinsipper om nestekjærlighet, rettferdighet og menneskeverd, og kommer til uttrykk gjennom diakoni, sosial lære og politisk engasjement. Frigjøringsteologien har satt de fattiges og undertryktes perspektiv i sentrum av teologisk refleksjon. I Norge har Den norske kirke gått fra å være statskirke til folkekirke, mens et mangfold av frikirker og trossamfunn preger det kristne landskapet. Kristne kirker fortsetter å bidra til samfunnsdebatten om etikk, rettferdighet og det gode liv.',
    },
    {
      id: 're-2-5-ex-4',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Drøft hvordan kristne kirker engasjerer seg i sosiale og politiske spørsmål i dag. Bruk eksempler fra både internasjonal og norsk sammenheng.',
      exercises: [],
    },
    {
      id: 're-2-5-ex-5',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Sammenlign Den norske kirkes rolle i samfunnet med frigjøringsteologiens tilnærming i Latin-Amerika. Hva er likheter og forskjeller i hvordan kristne verdier omsettes i praksis?',
      exercises: [],
    },
  ],
};

// ============================================================================
// Kapittel 2.6: Islam i dag – muslimer i Europa og Norge
// ============================================================================

const CHAPTER_RELIGION_ETIKK_2_6: TextbookChapter = {
  id: 'religion-etikk-2-6',
  courseId: 'religion-etikk',
  title: 'Islam i dag – muslimer i Europa og Norge',
  chapterNumber: '2.6',
  estimatedMinutes: 20,
  content: [
    {
      id: 're-2-6-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Islam er i dag en av de raskest voksende religionene i Europa, og muslimer utgjør en betydelig minoritet i mange europeiske land. I Norge har det muslimske miljøet vokst siden arbeidsinnvandringen på 1960- og 1970-tallet og senere gjennom flyktningstrømmer fra muslimske land. Muslimsk tilstedeværelse i Europa reiser viktige spørsmål om integrering, identitet, religionsfrihet og forholdet mellom majoritet og minoritet. I dette kapitlet ser vi på den muslimske diasporaen i Europa, integreringsspørsmål og utfordringen med islamofobi og fordommer.',
    },
    {
      id: 're-2-6-def-1',
      type: 'definition',
      title: 'Diaspora',
      content:
        'Diaspora (fra gresk «spredning») betegner en folkegruppe eller et religiøst samfunn som lever spredt utenfor sitt opprinnelige hjemland eller kjerneområde. Muslimsk diaspora refererer til muslimer som lever i land der islam ikke er majoritetsreligion, som i Europa, Nord-Amerika og Oseania. Diasporasituasjonen skaper spesielle utfordringer og muligheter knyttet til identitet, tilhørighet og religiøs praksis.',
    },
    {
      id: 're-2-6-text-1',
      type: 'text',
      title: 'Muslimsk diaspora i Europa',
      content:
        'Muslimer har en lang historisk tilstedeværelse i deler av Europa, særlig på Balkan og i Spania (al-Andalus). Den moderne muslimske tilstedeværelsen i Vest-Europa har likevel primært sin bakgrunn i etterkrigstidens arbeidsinnvandring og senere flukt fra konflikter og ustabilitet i den islamske verden.\n\nI dag bor anslagsvis 25–30 millioner muslimer i EU-landene, med de største gruppene i Frankrike, Tyskland, Storbritannia og Nederland. Europeiske muslimer er en svært mangfoldig gruppe med hensyn til etnisk bakgrunn, religiøs praksis, språk og sosial status. Noen er dypt religiøse, andre er sekulære eller kun kulturelt tilknyttet islam. Mange er etterkommere av innvandrere og er født og oppvokst i Europa.\n\nMuslimer i Europa har etablert moskeer, islamske skoler, kultursentre og organisasjoner. I mange europeiske land foregår det en levende debatt om islams plass i det offentlige rom – fra spørsmål om moskebygging og religiøse plagg til halal-mat og islamsk finansvesen. Disse debattene berører grunnleggende spørsmål om religionsfrihet, sekularisme og kulturelt mangfold.',
    },
    {
      id: 're-2-6-ex-1',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Beskriv den muslimske tilstedeværelsen i Europa i dag. Hva kjennetegner mangfoldet blant europeiske muslimer?',
      exercises: [],
    },
    {
      id: 're-2-6-text-2',
      type: 'text',
      title: 'Integrering og identitet',
      content:
        'For muslimer som lever i europeiske land, kan forholdet mellom religiøs identitet og tilhørighet til det bredere samfunnet være en sentral utfordring. Mange opplever å måtte navigere mellom ulike forventninger – fra familien og det religiøse miljøet på den ene siden, og fra storsamfunnet på den andre.\n\nUnge muslimer i Europa utvikler ofte sammensatte identiteter der de kombinerer elementer fra sin religiøse tradisjon med verdier og praksiser fra det europeiske samfunnet de er en del av. Forskning viser at det er fullt mulig å ha en sterk muslimsk identitet samtidig som man identifiserer seg med og deltar aktivt i det norske eller europeiske samfunnet. Mange unge muslimer opplever seg som «norske muslimer» eller «europeiske muslimer» og ser ikke noen motsetning mellom disse tilhørighetene.\n\nIntegrering er en gjensidig prosess som handler om deltakelse i arbeidslivet, utdanningssystemet, sivilsamfunnet og demokratiet. Forskning peker på at faktorer som utdanningsmuligheter, arbeidsdeltakelse, sosiale nettverk og opplevelsen av å bli akseptert er avgjørende for vellykket integrering. Diskriminering og utenforskap kan derimot hemme integreringsprosessen og skape grobunn for marginalisering.',
    },
    {
      id: 're-2-6-ex-2',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Hva menes med at integrering er en «gjensidig prosess»? Drøft hvilke faktorer som fremmer og hemmer integrering for muslimer i Norge.',
      exercises: [],
    },
    {
      id: 're-2-6-def-2',
      type: 'definition',
      title: 'Islamofobi',
      content:
        'Islamofobi betegner frykt for, fiendtlighet mot eller fordommer overfor islam og muslimer. Begrepet omfatter diskriminering, hatkriminalitet, stereotypier og negativ generalisering rettet mot muslimer som gruppe. Islamofobi kan komme til uttrykk i alt fra hverdagslig diskriminering til hatytringer, institusjonell forskjellsbehandling og voldelige angrep. Begrepet er omdiskutert – noen mener det er et nødvendig begrep for å beskrive reelle fordommer, mens andre mener det kan misbrukes til å avvise all kritikk av islam.',
    },
    {
      id: 're-2-6-text-3',
      type: 'text',
      title: 'Islamofobi og fordommer',
      content:
        'Muslimer i Europa opplever i varierende grad fordommer, diskriminering og negative stereotypier. Undersøkelser viser at en betydelig andel av Europas befolkning har negative holdninger til muslimer, og at muslimer rapporterer om diskriminering i arbeidslivet, boligmarkedet og det offentlige rom.\n\nIslamofobi kan ta mange former – fra hverdagslige fordommer og mikroaggresjoner til alvorlige hatforbrytelser. Terrorangrep utført i islams navn, som angrepene i Paris (2015), Brussel (2016) og andre steder, har forsterket negative holdninger til muslimer generelt, til tross for at det store flertallet av muslimer tar sterk avstand fra terrorisme. Mediedekningen av islam og muslimer har også blitt kritisert for å være ensidig negativ og for å bidra til stereotypier.\n\nDet er viktig å skille mellom legitim religionskritikk og islamofobi. I et demokratisk samfunn skal det være rom for å kritisere og debattere religiøse ideer og praksiser – det gjelder islam så vel som alle andre religioner. Men det er en avgjørende forskjell mellom saklig kritikk av religiøse ideer og fiendtlighet mot eller diskriminering av mennesker på grunn av deres religiøse tilhørighet.\n\nKampen mot islamofobi og fordommer er viktig for å sikre like rettigheter, verdighet og deltakelse for alle borgere i et flerkulturelt samfunn. Kunnskap om islam og kontakt mellom mennesker med ulik bakgrunn er blant de mest effektive virkemidlene mot fordommer.',
    },
    {
      id: 're-2-6-ex-3',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Forklar forskjellen mellom legitim religionskritikk og islamofobi. Hvorfor er dette skillet viktig i en demokratisk debatt?',
      exercises: [],
    },
    {
      id: 're-2-6-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Muslimer utgjør i dag en betydelig og mangfoldig minoritet i Europa og Norge. Den muslimske diasporaen er preget av stort indre mangfold med hensyn til etnisk bakgrunn, grad av religiøsitet og sosial tilhørighet. Integrering er en gjensidig prosess som forutsetter åpenhet og deltakelse fra både majoritet og minoritet. Islamofobi og fordommer er reelle utfordringer som kan hemme integrering og samfunnsdeltakelse. Kunnskap, kontakt og dialog er sentrale virkemidler for å bygge et inkluderende samfunn der religionsfrihet og likeverd ivaretas.',
    },
    {
      id: 're-2-6-ex-4',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Drøft utfordringer og muligheter knyttet til muslimsk tilstedeværelse i Norge. Bruk eksempler fra teksten og trekk inn begreper som diaspora, integrering og islamofobi.',
      exercises: [],
    },
    {
      id: 're-2-6-ex-5',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Sammenlign situasjonen for muslimer i to ulike europeiske land (for eksempel Norge og Frankrike, eller Tyskland og Storbritannia). Hva er likt, og hva er forskjellig? Bruk eventuelt egne kunnskaper i tillegg til teksten.',
      exercises: [],
    },
  ],
};

// ============================================================================
// Kapittel 2.7: Sammenligning: kristendom og islam
// ============================================================================

const CHAPTER_RELIGION_ETIKK_2_7: TextbookChapter = {
  id: 'religion-etikk-2-7',
  courseId: 'religion-etikk',
  title: 'Sammenligning: kristendom og islam',
  chapterNumber: '2.7',
  estimatedMinutes: 22,
  content: [
    {
      id: 're-2-7-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Kristendom og islam er verdens to største religioner, med til sammen over fire milliarder tilhengere. Begge tilhører de abrahamittiske religionene og deler felles røtter i den jødiske tradisjonen. De har mange likheter – monoteisme, vekt på etikk og rettferdighet, tro på en endelig dom – men også vesentlige teologiske forskjeller. I dette kapitlet sammenligner vi de to religionene systematisk og ser på hvordan dialog mellom kristendom og islam kan fremme gjensidig forståelse.',
    },
    {
      id: 're-2-7-def-1',
      type: 'definition',
      title: 'Abrahamittiske religioner',
      content:
        'De abrahamittiske religionene er en fellesbetegnelse for jødedom, kristendom og islam – tre monoteistiske religioner som alle ser Abraham (Ibrahim) som en sentral stamfar i sin tradisjon. Betegnelsen understreker det historiske og teologiske slektskapet mellom de tre religionene, som deler en rekke grunnleggende forestillinger om Gud, skapelsen, profeter og etikk, samtidig som de har vesentlige forskjeller.',
    },
    {
      id: 're-2-7-text-1',
      type: 'text',
      title: 'Likheter: monoteisme, etikk og felles arv',
      content:
        'Kristendom og islam deler en rekke grunnleggende trekk som gjenspeiler deres felles abrahamittiske arv. Begge religionene er strengt monoteistiske – de bekjenner troen på én Gud som er verdens skaper, opprettholder og dommer. Begge lærer at Gud har åpenbart sin vilje gjennom profeter og hellige skrifter, og at mennesket står i et ansvarsforhold til Gud.\n\nDe to religionene anerkjenner mange av de samme profetene. Adam, Noah (Nuh), Abraham (Ibrahim), Moses (Musa) og Jesus (Isa) er viktige skikkelser i begge tradisjoner, selv om de forstås på ulike måter. Både Bibelen og Koranen inneholder fortellinger om skapelsen, syndefallet, flommen og exodus.\n\nEtisk sett legger begge religionene stor vekt på rettferdighet, nestekjærlighet, barmhjertighet, ærlighet og omsorg for de fattige og svake. Almisse og veldedighet er sentrale plikter i begge tradisjoner – zakat i islam og diakoni i kristendommen. Begge religionene har også forestillinger om en endelig dom, der mennesket holdes ansvarlig for sine handlinger, og om et liv etter døden med belønning og straff.\n\nI tillegg deler kristendom og islam visse praksiser: regelmessig bønn, faste (ramadan i islam, fastetiden i kristendommen), pilegrimsferd og fellesskapssamlinger. Begge tradisjonene har også utviklet rike tradisjoner innenfor filosofi, kunst, arkitektur og vitenskap.',
    },
    {
      id: 're-2-7-ex-1',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Gjør rede for minst fire likheter mellom kristendom og islam. Hvorfor regnes de som «søsterreligioner» innenfor den abrahamittiske tradisjonen?',
      exercises: [],
    },
    {
      id: 're-2-7-def-2',
      type: 'definition',
      title: 'Tawhid og treenigheten',
      content:
        'Tawhid er det islamske begrepet for Guds absolutte enhet og unikhet. Det er det mest grunnleggende prinsippet i islamsk teologi: Gud er én og uten partnere. Treenigheten er den kristne læren om at den ene Gud eksisterer som tre personer – Faderen, Sønnen (Jesus Kristus) og Den hellige ånd – som er forent i én guddommelig natur. Disse to gudsbegrepene representerer en av de mest sentrale teologiske forskjellene mellom islam og kristendom.',
    },
    {
      id: 're-2-7-text-2',
      type: 'text',
      title: 'Forskjeller: kristologi, profetologi og gudsbilde',
      content:
        'Til tross for mange likheter har kristendom og islam vesentlige teologiske forskjeller. Den kanskje mest grunnleggende gjelder synet på Jesus. I kristendommen er Jesus Kristus Guds sønn, den andre personen i treenigheten, som ble menneske for å frelse menneskeheten gjennom sin død og oppstandelse. Jesus er altså guddommelig – sann Gud og sant menneske. I islam er Jesus (Isa) en av de store profetene, født av jomfru Maria (Maryam), og han tillegges mirakler. Men islam avviser at Jesus er Guds sønn eller guddommelig. Koranen sier uttrykkelig at Gud hverken har fått barn eller er født.\n\nDette henger sammen med en dypere forskjell i gudsbildet. Islam vektlegger Guds absolutte enhet (tawhid) og avviser treenigheten som en form for flergudetro (shirk). Kristendommen lærer derimot at treenigheten nettopp ikke er flergudetro, men uttrykker den ene Guds indre relasjonelle liv. Denne teologiske uenigheten har vært sentral i dialogen mellom de to religionene gjennom historien.\n\nAndre viktige forskjeller inkluderer synet på frelse (kristendommens vekt på nåde og tro versus islams vekt på underkastelse under Guds vilje og gode gjerninger), synet på hellige tekster (Koranen som Guds direkte ord versus Bibelen som Guds ord formidlet gjennom menneskelige forfattere), og forholdet mellom religion og samfunnsstyring (som historisk har vært organisert ulikt i de to tradisjonene).',
    },
    {
      id: 're-2-7-ex-2',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Sammenlign kristendommens og islams syn på Jesus. Hva er de viktigste likhetene og forskjellene i hvordan de to religionene forstår hans rolle?',
      exercises: [],
    },
    {
      id: 're-2-7-text-3',
      type: 'text',
      title: 'Dialog mellom kristendom og islam',
      content:
        'Forholdet mellom kristendom og islam har gjennom historien vekslet mellom konflikt, sameksistens og dialog. Korstogene (1096–1291), den osmanske erobringen av Konstantinopel (1453) og europeisk kolonialisme i muslimske land er eksempler på konflikter som har satt dype spor. Samtidig har det også vært perioder med fredelig sameksistens og gjensidig intellektuell påvirkning, som i middelalderens al-Andalus (Spania), der muslimer, kristne og jøder levde side om side.\n\nI moderne tid har den interreligiøse dialogen fått stadig større oppmerksomhet. Det andre vatikankonsil (1962–1965) markerte et vendepunkt for den katolske kirkens holdning til andre religioner, med erklæringen Nostra Aetate som uttrykte respekt for islam og oppfordret til dialog og samarbeid. «A Common Word Between Us and You» (2007), et åpent brev fra 138 muslimske lærde til kristne ledere, er et annet viktig dokument som pekte på kjærlighet til Gud og nestekjærlighet som felles grunnlag.\n\nInterreligiøs dialog foregår på flere nivåer: teologisk dialog mellom lærde, praktisk samarbeid om sosiale utfordringer, og hverdagsdialog mellom naboer, kolleger og klassekamerater med ulik religiøs bakgrunn. Formålet med dialog er ikke nødvendigvis å bli enige, men å forstå hverandre bedre, bygge respekt og samarbeide om felles utfordringer. I et flerkulturelt og flerreligiøst samfunn som det norske er slik dialog avgjørende for fredelig sameksistens.',
    },
    {
      id: 're-2-7-ex-3',
      type: 'exercise',
      title: 'Oppgave',
      content:
        'Hva er interreligiøs dialog, og hvorfor er den viktig? Gi eksempler på dialog mellom kristendom og islam, både historisk og i dag.',
      exercises: [],
    },
    {
      id: 're-2-7-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Kristendom og islam er to nært beslektede religioner med felles abrahamittiske røtter. De deler troen på én Gud, anerkjenner mange av de samme profetene, vektlegger etikk og rettferdighet, og har forestillinger om en endelig dom. Samtidig finnes det vesentlige forskjeller, særlig i synet på Jesus (guddommelig Kristus versus menneskelig profet), gudsbildet (treenighet versus tawhid) og frelsesforståelsen. Gjennom historien har forholdet mellom de to religionene vekslet mellom konflikt og sameksistens. I vår tid er interreligiøs dialog et viktig verktøy for gjensidig forståelse og fredelig sameksistens i flerkulturelle samfunn.',
    },
    {
      id: 're-2-7-ex-4',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Lag en oversikt (for eksempel en tabell) der du sammenligner kristendom og islam med hensyn til: gudsbilde, syn på Jesus, hellige tekster, sentrale praksiser og etikk. Bruk eksempler fra teksten.',
      exercises: [],
    },
    {
      id: 're-2-7-ex-5',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Diskuter hvilken betydning kunnskap om både likheter og forskjeller mellom kristendom og islam har for interreligiøs dialog og for et flerkulturelt samfunn som det norske.',
      exercises: [],
    },
    {
      id: 're-2-7-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        'Vurder påstanden: «Kristendom og islam har mer til felles enn det som skiller dem.» Drøft påstanden med utgangspunkt i det du har lært i dette kapitlet og de foregående kapitlene om de to religionene.',
      exercises: [],
    },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const RELIGION_ETIKK_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RELIGION_ETIKK_2_1,
  CHAPTER_RELIGION_ETIKK_2_2,
  CHAPTER_RELIGION_ETIKK_2_3,
  CHAPTER_RELIGION_ETIKK_2_4,
  CHAPTER_RELIGION_ETIKK_2_5,
  CHAPTER_RELIGION_ETIKK_2_6,
  CHAPTER_RELIGION_ETIKK_2_7,
];
