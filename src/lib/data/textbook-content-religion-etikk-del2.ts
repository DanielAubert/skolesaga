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
        `Kristendommen er verdens største religion med over to milliarder tilhengere. Den oppstod i det første århundret i den østlige delen av Romerriket, med utgangspunkt i livet og forkynnelsen til Jesus fra Nasaret. For å forstå kristendommens utvikling må vi se på den historiske konteksten den vokste frem i, de sentrale skikkelsene som formet den tidlige bevegelsen, og de avgjørende beslutningene som ble tatt i de første århundrene. I dette kapitlet følger vi utviklingen fra den jødiske konteksten Jesus virket i, via urkirken og Paulus' misjonsreiser, til kristendommen ble Romerrikets offisielle religion.\n\nKristendommens historie er uløselig knyttet til den politiske, kulturelle og religiøse situasjonen i Middelhavsområdet i de første århundrene av vår tidsregning. Romerrikets infrastruktur – veier, felles språk (gresk som lingua franca) og relativt stabile samfunnsforhold – la til rette for rask spredning av nye ideer og bevegelser. Samtidig var det en tid med religiøs søken: mange i Romerriket var på utkikk etter mer personlige og meningsfulle religiøse erfaringer enn det de tradisjonelle romerske kultene kunne tilby. Det var i dette landskapet kristendommen ble født og spredte seg.`,
    },
    {
      id: 're-2-1-def-1',
      type: 'definition',
      title: 'Jesus fra Nasaret',
      content:
        `Jesus fra Nasaret (ca. 4 f.Kr.–ca. 30 e.Kr.) er kristendommens sentrale skikkelse. Ifølge de kristne evangeliene var han en jødisk lærer og forkynner som virket i Galilea og Judea. Han samlet disipler rundt seg, forkynte om Guds rike, og ble henrettet ved korsfestelse under den romerske prefekten Pontius Pilatus. For kristne er Jesus Kristus – Messias, Guds sønn og verdens frelser. Betegnelsen «Kristus» kommer fra det greske «Christos», som er en oversettelse av det hebraiske «Mashiach» (Messias), og betyr «den salvede».`,
    },
    {
      id: 're-2-1-text-1',
      type: 'text',
      title: 'Jesus og den jødiske konteksten',
      content:
        `Jesus vokste opp i et jødisk miljø i Galilea, en region i det nordlige Palestina under romersk overherredømme. Hans forkynnelse var dypt forankret i jødisk tradisjon, og han refererte til Den hebraiske bibelen (Tanakh) i sine taler. Sentrale temaer i Jesu forkynnelse var Guds rikes komme, nestekjærlighet, tilgivelse og omsorg for de svake i samfunnet. Jesus samlet tolv nærmeste disipler (apostler) og en bredere krets av tilhengere. Etter Jesu død og det hans tilhengere opplevde som hans oppstandelse, begynte disiplene å forkynne budskapet videre. Denne tidligste gruppen av Jesu tilhengere kalles urkirken.\n\nJesu forkynnelse inneholdt også radikale elementer som utfordret det religiøse og sosiale hierarkiet i samtiden. Han omgikk tollere, syndere og andre marginaliserte grupper, noe som vakte oppsikt og kritikk fra religiøse ledere. Bergprekenen (Matteus 5–7) regnes som et av de mest sentrale avsnittene i Jesu undervisning, med saligprisningene som åpning: «Salige er de fattige i ånden, for himmelriket er deres.» (Matt 5,3). Her finner vi også det dobbelte kjærlighetsbudet og den gylne regel: «Alt dere vil at andre skal gjøre mot dere, det skal også dere gjøre mot dem» (Matt 7,12). Jesu lignelser – korte fortellinger med en moralsk eller teologisk pointe – var et karakteristisk trekk ved hans forkynnelse. Lignelsen om den barmhjertige samaritan og lignelsen om den fortapte sønn er blant de mest kjente.`,
    },
    {
      id: 're-2-1-def-4',
      type: 'definition',
      title: 'Evangeliene',
      content:
        `Evangeliene er de fire første bøkene i Det nye testamentet: Matteusevangeliet, Markusevangeliet, Lukasevangeliet og Johannesevangeliet. Ordet «evangelium» betyr «godt budskap» (gresk: euangelion). De tre første evangeliene kalles de synoptiske evangeliene fordi de har mange felles tekster og et lignende perspektiv. Johannesevangeliet skiller seg ut med en mer teologisk og symbolsk fremstilling. Evangeliene ble skrevet mellom ca. 70 og 100 e.Kr. og er de viktigste kildene til kunnskap om Jesu liv og virke.`,
    },
    {
      id: 're-2-1-text-1b',
      type: 'text',
      title: 'Den historiske Jesus og troens Kristus',
      content:
        `I moderne forskning skiller man ofte mellom «den historiske Jesus» og «troens Kristus». Den historiske Jesus refererer til det vi kan vite om Jesus som historisk person gjennom kildekritisk forskning. Troens Kristus er den oppstandne frelseren slik han forstås i kristen tro og forkynnelse. De fire evangeliene er ikke nøytrale biografier, men trosdokumenter skrevet av og for kristne menigheter. De gir likevel verdifull informasjon om Jesu virke.\n\nHistorikere er generelt enige om visse grunnleggende fakta: Jesus var en jødisk mann fra Galilea som virket som omreisende forkynner og helbreder, at han samlet tilhengere, og at han ble korsfestet under Pontius Pilatus rundt år 30 e.Kr. Utover dette er det stor diskusjon om detaljer, og historikere tolker kildene ulikt. Den jødisk-romerske historikeren Josefus (ca. 37–100 e.Kr.) og den romerske historikeren Tacitus (ca. 56–120 e.Kr.) er blant de ikke-kristne kildene som nevner Jesus.`,
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
      id: 're-2-1-ex-1b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva betyr ordet «Kristus»?',
      exercises: [
        {
          id: 're-2-1-ex-1b-mc',
          type: 'multiple-choice' as const,
          task: 'Hva betyr ordet «Kristus»?',
          options: [
            { id: 'a', text: 'Den salvede', isCorrect: true },
            { id: 'b', text: 'Den hellige', isCorrect: false },
            { id: 'c', text: 'Den rettferdige', isCorrect: false },
            { id: 'd', text: 'Den utvalgte', isCorrect: false },
          ],
          solution: `«Kristus» kommer fra det greske «Christos», som er en oversettelse av det hebraiske «Mashiach» (Messias). Begge ordene betyr «den salvede». I Det gamle testamentet ble konger og prester salvet med olje som tegn på at de var utvalgt av Gud til en spesiell oppgave.`,
        },
      ],
    },
    {
      id: 're-2-1-example-1',
      type: 'example',
      title: 'Primærkilde: Bergprekenen',
      content:
        `Et sentralt utdrag fra Bergprekenen (Matteus 5,43–45) viser kjernen i Jesu etiske forkynnelse:\n\n«Dere har hørt det er sagt: Du skal elske din neste og hate din fiende. Men jeg sier dere: Elsk deres fiender, be for dem som forfølger dere. Slik kan dere være barn av deres Far i himmelen.»\n\nDette sitatet illustrerer hvordan Jesus radikaliserte den jødiske tradisjonen. Han gikk ut over det som allerede var påbudt – å elske sin neste – og utvidet kjærlighetskravet til å omfatte også fiender. Denne radikale nestekjærligheten ble et kjennemerke for kristen etikk og har inspirert bevegelser for ikkevold og forsoning gjennom historien, fra de tidlige kristne til Martin Luther King Jr.`,
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
      id: 're-2-1-text-2b',
      type: 'text',
      title: 'Det nye testamentet tar form',
      content:
        `Det nye testamentet er den kristne delen av Bibelen og består av 27 skrifter. Disse inkluderer de fire evangeliene, Apostlenes gjerninger, Paulus' brev og andre brev, samt Johannes' åpenbaring. Skriftene ble skrevet over en periode fra ca. 50 til ca. 120 e.Kr. Paulus' brev er de eldste bevarte kristne tekstene – hans første brev til tessalonikerne dateres gjerne til ca. 50 e.Kr., altså bare tjue år etter Jesu død.\n\nKanondannelsen – prosessen med å avgjøre hvilke skrifter som skulle inngå i Det nye testamentet – tok flere hundre år. Det var først på 300-tallet at man nådde bred enighet om den listen vi kjenner i dag. Kriterier for å bli inkludert var blant annet at skriftet skulle kunne spores tilbake til en apostel, at det var i bruk i menighetene, og at innholdet var i samsvar med den apostoliske tro. En rekke skrifter som ikke ble inkludert – de såkalte apokryfe eller deuterokanoniske skriftene – gir likevel verdifull innsikt i mangfoldet i tidlig kristendom.`,
    },
    {
      id: 're-2-1-def-5',
      type: 'definition',
      title: 'Apostel',
      content:
        `En apostel (fra gresk «apostolos», utsending) er i kristen tradisjon en som er sendt ut av Jesus for å forkynne evangeliet. De tolv apostlene var Jesu nærmeste disipler, utvalgt av ham under hans virke. Paulus regnes også som apostel, selv om han ikke var blant de opprinnelige tolv, fordi han hevdet å ha mottatt sin oppgave direkte fra den oppstandne Kristus. Apostlene spilte en avgjørende rolle i å forme den tidligste kirken og spre det kristne budskapet.`,
    },
    {
      id: 're-2-1-ex-2b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hvilke skrifter er de eldste bevarte kristne tekstene?',
      exercises: [
        {
          id: 're-2-1-ex-2b-mc',
          type: 'multiple-choice' as const,
          task: 'Hvilke skrifter er de eldste bevarte kristne tekstene?',
          options: [
            { id: 'a', text: `Paulus' brev`, isCorrect: true },
            { id: 'b', text: 'Evangeliene', isCorrect: false },
            { id: 'c', text: `Johannes' åpenbaring`, isCorrect: false },
            { id: 'd', text: 'Apostlenes gjerninger', isCorrect: false },
          ],
          solution: `Paulus' brev er de eldste bevarte kristne tekstene. Hans første brev til tessalonikerne dateres til ca. 50 e.Kr., omtrent tjue år etter Jesu død. Evangeliene ble skrevet senere, fra ca. 70 e.Kr. (Markus) til ca. 90–100 e.Kr. (Johannes).`,
        },
      ],
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
      id: 're-2-1-def-6',
      type: 'definition',
      title: 'Arianismen',
      content:
        `Arianismen er en tidlig kristen lære oppkalt etter presten Arius fra Alexandria (ca. 256–336 e.Kr.). Arius hevdet at Sønnen (Jesus Kristus) var skapt av Faderen og derfor ikke av samme vesen som Gud. Ifølge Arius var det en tid da Sønnen ikke eksisterte. Denne læren ble fordømt ved konsilet i Nikea i 325 e.Kr., som fastslo at Sønnen er «av samme vesen» (homoousios) som Faderen. Likevel forble arianismen innflytelsesrik i flere tiår etter Nikea.`,
    },
    {
      id: 're-2-1-example-2',
      type: 'example',
      title: 'Primærkilde: Den nikenske trosbekjennelsen (utdrag)',
      content:
        `Den nikenske trosbekjennelsen, formulert ved konsilet i Nikea (325) og utvidet i Konstantinopel (381), er fortsatt sentral i de fleste kristne kirker:\n\n«Vi tror på én Gud, den allmektige Fader, som har skapt himmel og jord, alt synlig og usynlig. Vi tror på én Herre, Jesus Kristus, Guds enbårne Sønn, født av Faderen før alle tider, Gud av Gud, lys av lys, sann Gud av sann Gud, født, ikke skapt, av samme vesen som Faderen.»\n\nFormuleringen «av samme vesen som Faderen» (gresk: homoousios) var det avgjørende begrepet som avgjorde striden med arianerne. Trosbekjennelsen slår fast at Jesus Kristus er fullt ut guddommelig, ikke et skapt vesen, og dermed likeverdig med Gud Fader. Denne formuleringen la grunnlaget for den kristne treenighetslæren.`,
    },
    {
      id: 're-2-1-text-3b',
      type: 'text',
      title: 'Kristenforfølgelsene i Romerriket',
      content:
        `I de første tre århundrene opplevde de kristne flere perioder med forfølgelse i Romerriket. De tidligste forfølgelsene var ofte lokale og sporadiske, men under keisere som Decius (250 e.Kr.) og Diokletian (303–311 e.Kr.) ble forfølgelsene mer systematiske og omfattende. Kristne ble pålagt å ofre til de romerske gudene og keiserkulten, og de som nektet, risikerte fengsel, tortur og henrettelse.\n\nMartyrene – de som døde for sin tro – ble svært viktige for den tidlige kirken. Martyrfortellingene inspirerte andre kristne og styrket fellesskapet. Tertullian, en tidlig kirkefader, skrev det berømte utsagnet: «Martyrenes blod er kirkens sæd» – med andre ord, forfølgelsene førte paradoksalt nok til at kristendommen vokste. De kristnes villighet til å dø for sin tro imponerte mange og vakte nysgjerrighet for det kristne budskapet.\n\nMellom forfølgelsene levde kristne i relativ fred og bygde opp sine menigheter med gudstjenesteordninger, diakonalt arbeid og teologisk refleksjon. Katakomber – underjordiske gravkamre – i Roma er kjente eksempler på tidlig kristen kunst og praksis fra denne perioden.`,
    },
    {
      id: 're-2-1-ex-3b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva ble avgjort ved konsilet i Nikea i 325 e.Kr.?',
      exercises: [
        {
          id: 're-2-1-ex-3b-mc',
          type: 'multiple-choice' as const,
          task: 'Hva ble avgjort ved konsilet i Nikea i 325 e.Kr.?',
          options: [
            { id: 'a', text: `At Sønnen er «av samme vesen» som Faderen`, isCorrect: true },
            { id: 'b', text: 'At kristendommen ble Romerrikets statsreligion', isCorrect: false },
            { id: 'c', text: 'At Bibelen fikk sin endelige form', isCorrect: false },
            { id: 'd', text: 'At paven ble kirkens øverste leder', isCorrect: false },
          ],
          solution: `Konsilet i Nikea i 325 e.Kr. fastslo at Sønnen (Jesus Kristus) er «av samme vesen» (homoousios) som Faderen. Dette var en avvisning av arianismen, som hevdet at Sønnen var et skapt vesen. Kristendommen ble statsreligion først i 380 e.Kr. under Theodosius I.`,
        },
      ],
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
      id: 're-2-1-def-7',
      type: 'definition',
      title: 'Kirkefedre',
      content:
        `Kirkefedre (latin: patres ecclesiae) er en betegnelse for innflytelsesrike kristne tenkere og forfattere fra de første århundrene. De la grunnlaget for kristen teologi, etikk og kirkelig praksis. Blant de mest kjente er Augustin av Hippo (354–430), som utviklet læren om arvesynden og nåden; Athanasius av Alexandria (ca. 296–373), som forsvarte Nikea-vedtaket; og Johannes Krysostomos (ca. 349–407), kjent for sine prekener. Kirkefedretradisjonen er viktig for alle de store kristne retningene.`,
    },
    {
      id: 're-2-1-text-4b',
      type: 'text',
      title: 'Augustin og vestlig teologi',
      content:
        `Augustin av Hippo (354–430 e.Kr.) er kanskje den mest innflytelsesrike teologen i vestlig kristendom etter Paulus. Han vokste opp i Nordafrika, levde et urolig ungdomsliv, og gjennomgikk en dramatisk omvendelse som han skildrer i selvbiografien «Bekjennelser» (Confessiones). Augustin utviklet sentrale teologiske konsepter som har preget vestlig kristendom i 1600 år.\n\nHans lære om arvesynden – at alle mennesker fødes med en iboende tilbøyelighet til synd, arvet fra Adam – ble normativ for den vestlige kirken. Likeledes ble hans vektlegging av Guds nåde som den avgjørende faktoren i menneskets frelse svært innflytelsesrik. Augustin argumenterte for at mennesket ikke kan frelse seg selv gjennom egne gjerninger, men er avhengig av Guds ufortjente nåde. Denne tanken ble senere sentral i reformasjonen.\n\nI sitt storverk «Gudsstaten» (De civitate Dei) utviklet Augustin en kristen historiefilosofi der han skilte mellom «Guds by» (det åndelige fellesskapet av troende) og «den jordiske by» (verdslige maktstrukturer). Dette verket påvirket vestlig politisk tenkning i århundrer og ga en teologisk ramme for å forstå forholdet mellom kirke og stat.`,
    },
    {
      id: 're-2-1-example-3',
      type: 'example',
      title: 'Eksempel: Tidslinje over kristendommens tidlige historie',
      content:
        `Her er en oversikt over de viktigste hendelsene:\n\n- **Ca. 4 f.Kr.**: Jesus fra Nasaret fødes\n- **Ca. 30 e.Kr.**: Jesu korsfestelse og det hans tilhengere opplever som oppstandelsen\n- **Ca. 35 e.Kr.**: Paulus' omvendelse\n- **Ca. 49 e.Kr.**: Apostelmøtet i Jerusalem – hedninger trenger ikke følge jødisk lov\n- **Ca. 50 e.Kr.**: Paulus skriver sitt første brev (1. Tessalonikerbrev)\n- **Ca. 70 e.Kr.**: Markusevangeliet skrives; Tempelet i Jerusalem ødelegges\n- **250 e.Kr.**: Systematisk forfølgelse under keiser Decius\n- **313 e.Kr.**: Toleranseediktet i Milano – kristendom lovlig\n- **325 e.Kr.**: Konsilet i Nikea – den nikenske trosbekjennelsen\n- **380 e.Kr.**: Kristendommen blir Romerrikets statsreligion\n- **451 e.Kr.**: Konsilet i Kalkedon – Kristus har to naturer`,
    },
    {
      id: 're-2-1-ex-4b',
      type: 'exercise',
      title: 'Oppgave',
      content:
        `Hva var Augustins viktigste teologiske bidrag? Diskuter hvordan hans lære om arvesynden og nåden fikk betydning for vestlig kristendom.`,
      exercises: [],
    },
    {
      id: 're-2-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        `Kristendommen oppstod i en jødisk kontekst i det første århundret, med Jesus fra Nasaret som sentral skikkelse. Jesu forkynnelse om Guds rike, nestekjærlighet og omsorg for de svake var forankret i jødisk tradisjon, men inneholdt også radikale elementer. Urkirken bestod av jødiske tilhengere som trodde Jesus var Messias. Paulus spilte en avgjørende rolle i å åpne religionen for ikke-jøder gjennom sine misjonsreiser og teologiske argumenter.\n\nI de påfølgende århundrene ble sentrale lærespørsmål avklart gjennom konsilene, og trosbekjennelsene formulerte det som ble kristen ortodoksi. Konsilet i Nikea (325) fastslo Jesu guddommelighet, mens konsilet i Kalkedon (451) definerte forholdet mellom hans guddommelige og menneskelige natur. Kirkefedre som Augustin la grunnlaget for vestlig teologisk tenkning. Med Konstantins støtte og Theodosius' lovgivning gikk kristendommen fra å være en forfulgt bevegelse til Europas dominerende religion – en overgang med vidtrekkende konsekvenser for europeisk kultur, politikk og samfunnsliv.`,
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
    {
      id: 're-2-1-ex-7',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hvilken kirkefar er mest kjent for læren om arvesynden og nåden?',
      exercises: [
        {
          id: 're-2-1-ex-7-mc',
          type: 'multiple-choice' as const,
          task: 'Hvilken kirkefar er mest kjent for læren om arvesynden og nåden?',
          options: [
            { id: 'a', text: 'Augustin av Hippo', isCorrect: true },
            { id: 'b', text: 'Athanasius av Alexandria', isCorrect: false },
            { id: 'c', text: 'Johannes Krysostomos', isCorrect: false },
            { id: 'd', text: 'Origenes', isCorrect: false },
          ],
          solution: `Augustin av Hippo (354–430) er den kirkefaren som er mest kjent for sin lære om arvesynden og Guds nåde. Han argumenterte for at alle mennesker er født med en tilbøyelighet til synd og er avhengig av Guds nåde for frelse. Denne læren preget vestlig kristendom i århundrer.`,
        },
      ],
    },
    {
      id: 're-2-1-ex-8',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        `Forklar hva som menes med «den historiske Jesus» og «troens Kristus». Hvorfor er dette skillet viktig i akademisk religionsstudium? Bruk eksempler fra kapitlet.`,
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
        `I dag finnes det tusenvis av kristne kirkesamfunn og retninger over hele verden. Denne mangfoldigheten har vokst frem gjennom to tusen års historie, med store splittelser og reformer som har formet kristendommens landskap. De tre hovedgrenene – katolisisme, ortodoksi og protestantisme – skiller seg fra hverandre i spørsmål om kirkens autoritet, sakramenter, gudstjenestepraksis og teologi. I dette kapitlet ser vi nærmere på de viktigste kristne retningene og hva som kjennetegner dem.\n\nFordelt på verdensbasis er den katolske kirken størst med over 1,3 milliarder medlemmer, etterfulgt av protestantiske kirker (ca. 900 millioner, inkludert pinsebevegelsen) og de ortodokse kirkene (ca. 220 millioner). Men bildet er i stadig endring: mens kristendommen har opplevd tilbakegang i Europa, vokser den raskt i Afrika, Asia og Latin-Amerika, ofte i karismatiske og pinsepregede former. Denne globale utviklingen endrer kristendommens tyngdepunkt og gjør det viktigere enn noen gang å forstå religionens indre mangfold.`,
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
      id: 're-2-2-def-4',
      type: 'definition',
      title: 'Sakrament',
      content:
        `Et sakrament er en hellig handling som ifølge kristen lære formidler Guds nåde. Den katolske og den ortodokse kirken anerkjenner syv sakramenter: dåp, konfirmasjon (krismering), eukaristi (nattverd), bot (skriftemål), de sykes salving, ordinasjon (prestevielse) og ekteskap. De fleste protestantiske kirker anerkjenner kun to sakramenter – dåp og nattverd – fordi de mener bare disse to er direkte innstiftet av Jesus ifølge Bibelen.`,
    },
    {
      id: 're-2-2-text-1b',
      type: 'text',
      title: 'Katolsk praksis og fromhetsliv',
      content:
        `Den katolske kirken har et rikt fromhetsliv som strekker seg langt utover den ukentlige messen. Rosenkransbønnen, der troende mediterer over hendelser i Jesu og Marias liv mens de ber Ave Maria, er en av de mest utbredte andaktsformene. Helgendyrkelse er et annet karakteristisk trekk – katolikker ærer helgener som forbilder i troen og ber dem om forbønn hos Gud. Hver helgen har en minnedag i den liturgiske kalenderen.\n\nJomfru Maria inntar en spesielt opphøyd stilling i katolsk tro. Hun æres som Theotokos (Guds mor), et begrep fastsatt ved konsilet i Efesos (431). De katolske Maria-dogmene inkluderer den ubesmittede unnfangelse (at Maria ble unnfanget uten arvesynd) og Marias opptagelse i himmelen. Maria-fromheten kommer til uttrykk gjennom pilegrimsreiser til steder som Lourdes i Frankrike og Fatima i Portugal, der man tror Maria har vist seg.\n\nKatolsk sosiallære har også preget kirkens praktiske engasjement. Ordensfellesskap som fransiskanerne og dominikanerne har gjennom århundrer drevet skoler, sykehus og veldedig arbeid. I moderne tid er organisasjoner som Caritas sentrale i katolsk humanitært arbeid verden over.`,
    },
    {
      id: 're-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Det andre vatikankonsil (1962–1965)',
      content:
        `Det andre vatikankonsil, sammenkalt av pave Johannes XXIII, var et vendepunkt i den katolske kirkens nyere historie. Konsilet innførte en rekke reformer:\n\n- **Liturgi**: Messen kunne nå feires på lokalspråk i stedet for latin, og lekfolk fikk en mer aktiv rolle i gudstjenesten.\n- **Økumenikk**: Kirken åpnet for dialog med andre kristne kirkesamfunn og erklærte at også protestantiske og ortodokse kirker har elementer av sannhet og hellighet.\n- **Religionsdialog**: Erklæringen Nostra Aetate uttrykte respekt for andre religioner, inkludert islam, jødedom, hinduisme og buddhisme.\n- **Religionsfrihet**: Konsilet anerkjente religionsfrihet som en grunnleggende menneskerettighet.\n\nDisse reformene moderniserte den katolske kirken betydelig, men skapte også interne spenninger mellom progressive og konservative krefter som fortsatt preger kirken i dag.`,
    },
    {
      id: 're-2-2-ex-1b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hvor mange sakramenter anerkjenner den katolske kirken?',
      exercises: [
        {
          id: 're-2-2-ex-1b-mc',
          type: 'multiple-choice' as const,
          task: 'Hvor mange sakramenter anerkjenner den katolske kirken?',
          options: [
            { id: 'a', text: 'Syv', isCorrect: true },
            { id: 'b', text: 'To', isCorrect: false },
            { id: 'c', text: 'Fem', isCorrect: false },
            { id: 'd', text: 'Tre', isCorrect: false },
          ],
          solution: `Den katolske kirken anerkjenner syv sakramenter: dåp, konfirmasjon, eukaristi (nattverd), bot, de sykes salving, ordinasjon og ekteskap. Protestantiske kirker anerkjenner vanligvis bare to: dåp og nattverd.`,
        },
      ],
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
      id: 're-2-2-def-5',
      type: 'definition',
      title: 'Theosis (guddommeliggjørelse)',
      content:
        `Theosis (gresk: guddommeliggjørelse) er et sentralt begrep i ortodoks teologi. Det refererer til prosessen der mennesket, gjennom Guds nåde og et liv i bønn og sakramenter, gradvis blir delaktig i Guds natur. Ortodoks teologi baserer dette på 2. Petersbrev 1,4: «dere skal få del i guddommelig natur». Theosis handler ikke om at mennesket blir Gud i sitt vesen, men om å bli forvandlet til Guds likhet gjennom fellesskap med Ham. Kirkefaderen Athanasius uttrykte det slik: «Gud ble menneske for at mennesket skulle bli guddommeliggjort.»`,
    },
    {
      id: 're-2-2-text-2b',
      type: 'text',
      title: 'Ikoner og ortodoks spiritualitet',
      content:
        `Ikoner spiller en helt sentral rolle i ortodoks fromhetsliv. En ikon er et hellig bilde – vanligvis malt på treplate – som fremstiller Kristus, Guds mor, helgener eller bibelske hendelser. I ortodoks teologi er ikonet ikke bare en illustrasjon, men et «vindu mot himmelen» som formidler den avbildede personens nærvær. Å be foran en ikon er å stå i fellesskap med den hellige personen som er avbildet.\n\nIkonbildet ble gjenstand for en langvarig strid i Bysants, den såkalte ikonoklasmen (bildestormen) på 700- og 800-tallet. Bildemotstandere (ikonoklaster) mente at å ære ikoner var avgudsdyrkelse. Bildeforkjempere (ikonoduler), med teologen Johannes av Damaskus i spissen, argumenterte for at fordi Gud selv ble menneske i Kristus, er det legitimt å fremstille det guddommelige i bilder. Det syvende økumeniske konsil i Nikea (787) fastslo at ikoner skal æres (men ikke tilbes), og denne avgjørelsen er fortsatt normativ i ortodoks kristendom.\n\nOrtodoks spiritualitet legger også stor vekt på jesusbønnen – den stadige gjentakelsen av «Herre Jesus Kristus, Guds Sønn, ha barmhjertighet med meg, en synder» – som en vei til indre stillhet og gudsnærvær. Klostervesenet har en spesielt sterk stilling i ortodoks tradisjon, med Athosfjellet i Hellas som det viktigste senteret for ortodoks monastisk liv.`,
    },
    {
      id: 're-2-2-ex-2b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva er en ikon i ortodoks tradisjon?',
      exercises: [
        {
          id: 're-2-2-ex-2b-mc',
          type: 'multiple-choice' as const,
          task: 'Hva er en ikon i ortodoks tradisjon?',
          options: [
            { id: 'a', text: `Et hellig bilde som fungerer som «vindu mot himmelen»`, isCorrect: true },
            { id: 'b', text: 'En skulptur av en helgen', isCorrect: false },
            { id: 'c', text: 'En type korsmerke', isCorrect: false },
            { id: 'd', text: 'En liturgisk bok', isCorrect: false },
          ],
          solution: `I ortodoks tradisjon er en ikon et hellig bilde, vanligvis malt på treplate, som fremstiller Kristus, Guds mor, helgener eller bibelske hendelser. Ikonet forstås som et «vindu mot himmelen» som formidler den avbildede personens hellige nærvær for den som ber.`,
        },
      ],
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
      id: 're-2-2-def-6',
      type: 'definition',
      title: 'Sola scriptura (Skriften alene)',
      content:
        `Sola scriptura er et sentralt protestantisk prinsipp som innebærer at Bibelen er den øverste og tilstrekkelige autoriteten i spørsmål om tro og liv. Dette prinsippet ble formulert av Martin Luther som et alternativ til den katolske vektleggingen av både Bibelen og kirkens tradisjon som autoritetskilde. For Luther var det avgjørende at alle trosspørsmål kunne begrunnes ut fra Skriften, og han oversatte Bibelen til tysk for å gjøre den tilgjengelig for vanlige mennesker.`,
    },
    {
      id: 're-2-2-example-2',
      type: 'example',
      title: 'Primærkilde: Martin Luthers 95 teser (1517)',
      content:
        `Martin Luthers 95 teser, angivelig slått opp på kirkedøren i Wittenberg 31. oktober 1517, var den utløsende hendelsen for reformasjonen. Tesene var i utgangspunktet en invitasjon til akademisk debatt om avlatshandelen – praksisen med å selge avlatsbrev som skulle redusere tiden i skjærsilden. Her er noen sentrale teser:\n\n- **Tese 1**: «Da vår Herre og mester Jesus Kristus sa: 'Gjør bot', ville han at hele den troendes liv skulle være en bot.»\n- **Tese 36**: «Enhver kristen som angrer sine synder oppriktig, har fullstendig forlatelse for straff og skyld, også uten avlatsbrev.»\n- **Tese 62**: «Kirkens sanne skatt er det hellige evangeliet om Guds herlighet og nåde.»\n\nLuthers teser spredte seg raskt takket være den nye boktrykkkunsten og utløste en bredere debatt om kirkens autoritet, frelseslæren og forholdet mellom pave og Bibel. Det som startet som en teologisk diskusjon, vokste til en bevegelse som omformet det religiøse og politiske kartet i Europa.`,
    },
    {
      id: 're-2-2-text-3b',
      type: 'text',
      title: 'Protestantismens spredning og samfunnsendringer',
      content:
        `Reformasjonen fikk store konsekvenser utover det rent teologiske. Luthers oversettelse av Bibelen til tysk (Det nye testamentet i 1522, hele Bibelen i 1534) bidro til standardiseringen av det tyske språket og fremmet folkeopplysning. Det protestantiske prinsippet om at alle troende har direkte tilgang til Gud og Skriften, styrket idealet om allmenn leseferdighet og utdanning.\n\nI de skandinaviske landene ble reformasjonen innført «ovenfra» av kongene. I Danmark-Norge innførte Christian III lutherdommen som statsreligion i 1537. Kirkens eiendommer ble overtatt av kronen, klostrene ble stengt, og latinske messer ble erstattet av gudstjenester på folkespråket. For Norge betydde dette en dyp kulturell endring som preget samfunnet i århundrer.\n\nReformasjonen utløste også motreformasjonen – den katolske kirkens svar på protestantismens utfordringer. Gjennom konsilet i Trent (1545–1563) reformerte den katolske kirken seg innenfra, bekreftet sentrale lærepunkter og etablerte nye ordener som jesuittene, som ble ledende innen utdanning og misjon.`,
    },
    {
      id: 're-2-2-ex-3b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hvilket protestantisk prinsipp betyr at Bibelen er den øverste autoriteten i trosspørsmål?',
      exercises: [
        {
          id: 're-2-2-ex-3b-mc',
          type: 'multiple-choice' as const,
          task: 'Hvilket protestantisk prinsipp betyr at Bibelen er den øverste autoriteten i trosspørsmål?',
          options: [
            { id: 'a', text: 'Sola scriptura', isCorrect: true },
            { id: 'b', text: 'Sola fide', isCorrect: false },
            { id: 'c', text: 'Sola gratia', isCorrect: false },
            { id: 'd', text: 'Soli Deo gloria', isCorrect: false },
          ],
          solution: `Sola scriptura («Skriften alene») er det protestantiske prinsippet om at Bibelen er den øverste og tilstrekkelige autoriteten i trosspørsmål. Sola fide betyr «troen alene» (frelse ved tro), sola gratia betyr «nåden alene» (frelse ved nåde), og soli Deo gloria betyr «Gud alene æren».`,
        },
      ],
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
      id: 're-2-2-text-5',
      type: 'text',
      title: 'Økumenikk: samarbeid mellom kristne kirker',
      content:
        `Økumenikk (fra gresk oikoumene, «den bebodde verden») er betegnelsen på bevegelsen for enhet og samarbeid mellom kristne kirker og retninger. Den moderne økumeniske bevegelsen fikk sitt gjennombrudd med grunnleggelsen av Kirkenes Verdensråd (World Council of Churches) i Amsterdam i 1948. I dag er over 350 kirkesamfunn fra mer enn 120 land medlemmer.\n\nØkumenisk arbeid foregår på flere plan. Teologisk dialog søker å avklare og i noen tilfeller overvinne læremessige forskjeller mellom kirkene. Et viktig eksempel er «Felleserklæringen om rettferdiggjørelseslæren» (1999) mellom Den lutherske verdensforbund og den katolske kirken, der de ble enige om en felles forståelse av rettferdiggjørelse ved tro – det sentrale stridsspørsmålet i reformasjonen.\n\nPraktisk økumenikk handler om samarbeid i diakonalt arbeid, fredsarbeid og humanitær innsats. I Norge samarbeider kristne kirker gjennom Norges Kristne Råd og i lokale fellesprosjekter. Økumenisk gudstjeneste, der kristne fra ulike retninger feirer gudstjeneste sammen, er blitt stadig vanligere. Samtidig gjenstår det vesentlige teologiske forskjeller som gjør full kirkelig enhet vanskelig.`,
    },
    {
      id: 're-2-2-example-3',
      type: 'example',
      title: 'Eksempel: Kristendommens globale tyngdepunktskifte',
      content:
        `I 1900 bodde omtrent 80 prosent av verdens kristne i Europa og Nord-Amerika. I dag bor over 60 prosent i Afrika, Asia og Latin-Amerika. Dette tyngdepunktskiftet har fått store konsekvenser for kristendommens karakter.\n\nI Afrika har kristendommen vokst fra ca. 10 millioner i 1900 til over 600 millioner i dag. Mye av denne veksten drives av pinsepregede og karismatiske bevegelser som kombinerer kristen forkynnelse med lokal kultur. I Sør-Korea har protestantisk kristendom fått stor utbredelse, med megakirker som samler titusenvis av troende. I Latin-Amerika utfordrer pinsebevegelsen den tradisjonelle katolske dominansen.\n\nDette globale mangfoldet reiser spørsmål om kulturell tilpasning: I hvilken grad kan og bør kristen tro tilpasses lokale kulturer? Inkulturering – prosessen med å uttrykke kristen tro i lokale kulturelle former – er et viktig tema i moderne misjonsteologi.`,
    },
    {
      id: 're-2-2-ex-4b',
      type: 'exercise',
      title: 'Oppgave',
      content:
        `Hva menes med økumenikk? Gi eksempler på økumenisk samarbeid og diskuter utfordringer ved arbeidet for kristen enhet.`,
      exercises: [],
    },
    {
      id: 're-2-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        `Kristendommen har gjennom historien delt seg i tre hovedgrener: den katolske kirken, de ortodokse kirkene og protestantismen. Det store skismaet i 1054 skilte øst- og vestkirken, mens reformasjonen på 1500-tallet førte til fremveksten av protestantiske retninger. Innenfor protestantismen finnes lutherske, reformerte og anglikanske tradisjoner, i tillegg til nyere bevegelser som pinsebevegelsen.\n\nDen katolske kirken kjennetegnes av pavens autoritet, syv sakramenter, Maria-fromhet og et rikt liturgisk liv. De ortodokse kirkene vektlegger theosis (guddommeliggjørelse), ikonkunst og den guddommelige liturgien. Protestantiske kirker holder fast ved Skriften som øverste autoritet (sola scriptura), rettferdiggjørelse ved tro (sola fide) og det allmenne prestedømme. Pinsebevegelsen legger vekt på Den hellige ånds gaver og personlig omvendelse.\n\nTil tross for forskjeller i lære, organisasjon og praksis deler de fleste kristne retninger troen på Jesus Kristus som frelser, Bibelens autoritet og sakramentene dåp og nattverd. Den økumeniske bevegelsen arbeider for gjensidig forståelse og samarbeid mellom kirkene. I vår tid gjennomgår kristendommen et globalt tyngdepunktskifte fra nord til sør, noe som gir religionen nye uttrykksformer og perspektiver.`,
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
    {
      id: 're-2-2-ex-7',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva var det sentrale stridsspørsmålet i reformasjonen?',
      exercises: [
        {
          id: 're-2-2-ex-7-mc',
          type: 'multiple-choice' as const,
          task: 'Hva var det sentrale stridsspørsmålet i reformasjonen?',
          options: [
            { id: 'a', text: 'Hvordan mennesket blir frelst (rettferdiggjørelseslæren)', isCorrect: true },
            { id: 'b', text: 'Hvor mange sakramenter kirken skal ha', isCorrect: false },
            { id: 'c', text: 'Hvordan ikoner skal brukes i gudstjenesten', isCorrect: false },
            { id: 'd', text: 'Hvilke bøker som skal inkluderes i Bibelen', isCorrect: false },
          ],
          solution: `Rettferdiggjørelseslæren – spørsmålet om hvordan mennesket blir frelst – var det sentrale stridsspørsmålet i reformasjonen. Luther hevdet at mennesket rettferdiggjøres ved tro alene (sola fide) og nåde alene (sola gratia), mens den katolske kirken vektla at både tro og gjerninger er nødvendig for frelse.`,
        },
      ],
    },
    {
      id: 're-2-2-ex-8',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        `Kristendommens tyngdepunkt flytter seg fra Europa til det globale sør. Diskuter hvilke konsekvenser dette kan ha for kristendommens uttrykksformer, teologi og forhold til andre religioner.`,
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
        `Islam er verdens nest største religion med nærmere to milliarder tilhengere, kalt muslimer. Religionen oppstod på den arabiske halvøy på 600-tallet e.Kr. og spredte seg raskt til store deler av verden. Islam betyr «underkastelse» eller «overgivelse» (til Guds vilje), og en muslim er «en som underkaster seg». I dette kapitlet ser vi på islams opprinnelse, de sentrale hellige tekstene og de fem søylene som utgjør grunnlaget for islamsk tro og praksis.\n\nIslam ser seg selv som den siste i rekken av åpenbaringer fra den ene Gud til menneskeheten. Ifølge islamsk tradisjon har Gud sendt profeter til alle folkeslag gjennom historien – deriblant Adam, Noah (Nuh), Abraham (Ibrahim), Moses (Musa) og Jesus (Isa) – men mennesker har gang på gang forvrengt eller glemt budskapet. Muhammad forstås som «profetenes segl» – den siste profeten som brakte Guds fullstendige og uforanderlige åpenbaring gjennom Koranen. Denne forståelsen av islam som den endelige åpenbaringen er grunnleggende for å forstå religionens selvforståelse og dens forhold til jødedom og kristendom.`,
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
      id: 're-2-3-def-4',
      type: 'definition',
      title: 'Tawhid (Guds enhet)',
      content:
        `Tawhid er det mest grunnleggende begrepet i islamsk teologi og betyr Guds absolutte enhet og unikhet. Tawhid innebærer at Gud (Allah) er den eneste guddommen, uten partnere, avkom eller likemenn. Å sette noe eller noen ved siden av Gud – kalt shirk – anses som den alvorligste synden i islam. Tawhid gjennomsyrer alle aspekter av islamsk tro og praksis og er kjernen i trosbekjennelsen (shahada).`,
    },
    {
      id: 're-2-3-text-1b',
      type: 'text',
      title: 'De seks trosartiklene i islam',
      content:
        `Ved siden av de fem søylene (praktiske plikter) har islam seks sentrale trosartikler (arkan al-iman) som utgjør det teologiske grunnlaget. Disse er:\n\n1. **Tro på Gud (Allah)**: Islams strengt monoteistiske gudsbegrep. Gud er én (tawhid), evig, allmektig, allvitende og barmhjertig. Koranen beskriver Gud gjennom 99 skjønne navn (al-asma al-husna), som «den barmhjertige» (ar-Rahman), «den nåderike» (ar-Rahim) og «den allmektige» (al-Aziz).\n\n2. **Tro på englene (mala'ika)**: Engler er åndelige vesener skapt av lys, som utfører Guds vilje. Jibril (Gabriel) er den viktigste engelen – han formidlet Koranen til Muhammad. Andre viktige engler er Mikail (Mikael), Israfil og Azrail (dødsengelen).\n\n3. **Tro på de hellige bøkene**: Islam anerkjenner at Gud har sendt hellige bøker gjennom ulike profeter: Toraen (Tawrat) til Moses, Salmene (Zabur) til David, Evangeliet (Injil) til Jesus, og Koranen til Muhammad. Koranen forstås som den endelige og uforanderlige åpenbaringen.\n\n4. **Tro på profetene**: Muslimer tror at Gud har sendt profeter til alle folkeslag. Koranen nevner 25 profeter ved navn. Muhammad er den siste i rekken – «profetenes segl».\n\n5. **Tro på dommens dag (yawm al-qiyama)**: Alle mennesker vil stå til regnskap for sine handlinger på dommens dag. De rettferdige vil belønnes med paradis (janna), mens de urettferdige vil straffes i helvete (jahannam).\n\n6. **Tro på forutbestemmelsen (qadar)**: Gud har kunnskap om og makt over alt som skjer. Samtidig har mennesket en viss valgfrihet og er ansvarlig for sine handlinger. Forholdet mellom Guds allmakt og menneskets frie vilje er et viktig teologisk diskusjonstema i islam.`,
    },
    {
      id: 're-2-3-example-1',
      type: 'example',
      title: 'Primærkilde: Koranens åpningssure (al-Fatiha)',
      content:
        `Al-Fatiha (Åpningen) er Koranens første sure og den viktigste bønnen i islam. Den resiteres i hver av de fem daglige bønnene:\n\n«I Guds, den barmhjertiges, den nåderikes navn. Lovpriset være Gud, all verdens Herre, den barmhjertige, den nåderike, Herre over dommens dag. Deg tilber vi, og til Deg søker vi hjelp. Led oss på den rette vei, veien til dem Du har vist nåde, ikke dem som har pådratt seg vrede, og ikke dem som har gått seg vill.» (Koranen 1:1–7)\n\nAl-Fatiha sammenfatter kjernen i islamsk tro: Guds enhet og barmhjertighet, menneskets tilbedelse og avhengighet av Gud, og bønnen om rettledning. Suren kalles også «Bokens mor» (umm al-kitab) fordi den rommer essensen av hele Koranens budskap.`,
    },
    {
      id: 're-2-3-ex-1b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva betyr begrepet tawhid i islam?',
      exercises: [
        {
          id: 're-2-3-ex-1b-mc',
          type: 'multiple-choice' as const,
          task: 'Hva betyr begrepet tawhid i islam?',
          options: [
            { id: 'a', text: 'Guds absolutte enhet og unikhet', isCorrect: true },
            { id: 'b', text: 'Guds barmhjertighet', isCorrect: false },
            { id: 'c', text: 'Profetenes kall', isCorrect: false },
            { id: 'd', text: 'Dommedag', isCorrect: false },
          ],
          solution: `Tawhid er det mest grunnleggende begrepet i islamsk teologi og betyr Guds absolutte enhet og unikhet. Det innebærer at Gud er den eneste guddommen, uten partnere eller likemenn. Tawhid er kjernen i trosbekjennelsen (shahada) og gjennomsyrer alle aspekter av islamsk tro.`,
        },
      ],
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
      id: 're-2-3-def-5',
      type: 'definition',
      title: 'Sharia (islamsk rettslære)',
      content:
        `Sharia (bokstavelig «veien til vannkilden») er betegnelsen for islamsk lov og rettslære. Sharia er ikke en enhetlig lovbok, men et system av rettslige og moralske normer utledet fra Koranen, hadith, konsensus blant lærde (ijma) og analogislutninger (qiyas). Sharia dekker alt fra religiøse ritualer og familierett til handelsrett og strafferett. Tolkningene varierer betydelig mellom ulike rettsskoler (madhhab) og mellom ulike muslimske samfunn.`,
    },
    {
      id: 're-2-3-text-2b',
      type: 'text',
      title: 'Moskeen og den religiøse kalender',
      content:
        `Moskeen (masjid, «sted for bønn») er det sentrale samlingsstedet for muslimsk gudstjenesteliv. En moske har vanligvis en bønnesal orientert mot Mekka, markert med en nisje kalt mihrab. Minbaren er en talerstol der imamen holder fredagsprekenen (khutba). Mange moskeer har også et minaret – et tårn hvorfra bønneropet (adhan) lyder.\n\nDen islamske kalenderen er en månekalender med tolv måneder og ca. 354 dager per år. De to viktigste høytidene er eid al-fitr (festen som markerer avslutningen av ramadan-fasten) og eid al-adha (offerfesten, som feires under hajj og minner om Abrahams villighet til å ofre sin sønn). Under eid al-adha slaktes et offerdyr, og kjøttet fordeles blant familie, venner og fattige.\n\nAndre viktige dager i den islamske kalenderen inkluderer mawlid al-nabi (feiringen av Muhammads fødsel, som feires av mange men ikke alle muslimer), laylat al-qadr (kraftens natt, som minnes den første åpenbaringen til Muhammad i ramadan) og den islamske nyttårsdagen (1. muharram). Ashura-dagen (10. muharram) har ulik betydning for sunni- og shiamuslimer – for shia er det en viktig sørgedag til minne om Husayns martyrium ved Karbala.`,
    },
    {
      id: 're-2-3-example-2',
      type: 'example',
      title: 'Primærkilde: Koranen om Guds enhet (Sura 112)',
      content:
        `Sura 112 (al-Ikhlas, «Den rene tro») er en av Koranens korteste surer, men anses som en av de viktigste fordi den sammenfatter islams gudsbegrep:\n\n«Si: Han er Gud, den Ene, Gud, den Evige. Han har ikke avlet og er ikke blitt avlet, og ingen er Hans like.» (Koranen 112:1–4)\n\nDenne korte suren uttrykker tawhid – Guds absolutte enhet – i sin reneste form. Den avviser enhver form for flergudetro og enhver forestilling om at Gud har avkom. Mange muslimske lærde anser denne suren som likeverdig med en tredjedel av Koranen i teologisk betydning, fordi den formulerer det mest grunnleggende i islamsk tro.`,
    },
    {
      id: 're-2-3-ex-2b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva er en mihrab i en moske?',
      exercises: [
        {
          id: 're-2-3-ex-2b-mc',
          type: 'multiple-choice' as const,
          task: 'Hva er en mihrab i en moske?',
          options: [
            { id: 'a', text: 'En nisje som viser retningen mot Mekka', isCorrect: true },
            { id: 'b', text: 'En talerstol for fredagsprekenen', isCorrect: false },
            { id: 'c', text: 'Et tårn for bønneropet', isCorrect: false },
            { id: 'd', text: 'Et rom for rituell vask', isCorrect: false },
          ],
          solution: `En mihrab er en nisje i moskeens vegg som markerer retningen mot Mekka (qibla). Alle muslimer vender seg mot Mekka under bønnen. Talerstolen kalles minbar, og tårnet for bønneropet kalles minaret.`,
        },
      ],
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
      id: 're-2-3-text-5',
      type: 'text',
      title: 'Islamsk etikk og leveregler',
      content:
        `Islamsk etikk bygger på Koranen og sunna og gir veiledning for alle aspekter av livet. Et grunnleggende prinsipp er at mennesket er Guds stedfortreder (khalifa) på jorden og har ansvar for å forvalte skaperverket med rettferdighet og omsorg. Islamsk etikk vektlegger rettferdighet (adl), barmhjertighet (rahma), sannferdighet (sidq) og troskap til avtaler.\n\nInnenfor familielivet legger islam stor vekt på respekt for foreldre, omsorg for barn og familiære forpliktelser. Ekteskapet forstås som en pakt (mithaq) mellom mann og kvinne med gjensidig ansvar. Islamsk arverett gir detaljerte regler for fordeling av arv. Forholdet mellom menn og kvinner i islam er gjenstand for ulike tolkninger – fra konservative til progressive – og dette er et område med aktiv debatt innenfor den muslimske verden.\n\nNår det gjelder mat og drikke, har islam regler om halal (tillatt) og haram (forbudt). Svinekjøtt og alkohol er forbudt, og dyr skal slaktes på en bestemt måte (dhabh) for at kjøttet skal være halal. Disse reglene forankres i Koranen og forstås som uttrykk for Guds omsorg for menneskets velvære.\n\nIslamsk økonomisk etikk forbyr rente (riba) og spekulativ handel, og vektlegger rettferdig forretningspraksis. Islamsk bankvirksomhet har vokst frem som et alternativt finanssystem basert på disse prinsippene.`,
    },
    {
      id: 're-2-3-def-6',
      type: 'definition',
      title: 'Halal og haram',
      content:
        `Halal (arabisk: «tillatt», «lovlig») og haram (arabisk: «forbudt») er sentrale begreper i islamsk rettslære som angir hva som er tillatt og forbudt for en muslim. Begrepene gjelder ikke bare mat og drikke, men alle aspekter av livet – fra økonomiske transaksjoner til sosiale relasjoner. Mellom halal og haram finnes det også kategorier som makruh (frarådet, men ikke forbudt) og mustahabb (anbefalt, men ikke påbudt).`,
    },
    {
      id: 're-2-3-ex-4b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva betyr begrepet halal i islam?',
      exercises: [
        {
          id: 're-2-3-ex-4b-mc',
          type: 'multiple-choice' as const,
          task: 'Hva betyr begrepet halal i islam?',
          options: [
            { id: 'a', text: 'Tillatt eller lovlig', isCorrect: true },
            { id: 'b', text: 'Hellig eller ukrenkelig', isCorrect: false },
            { id: 'c', text: 'Forbudt eller ulovlig', isCorrect: false },
            { id: 'd', text: 'Anbefalt eller ønskelig', isCorrect: false },
          ],
          solution: `Halal betyr «tillatt» eller «lovlig» på arabisk og refererer til alt som er tillatt ifølge islamsk lov. Begrepet brukes ofte om mat (halal-mat), men gjelder egentlig alle aspekter av livet. Motsetningen er haram, som betyr «forbudt».`,
        },
      ],
    },
    {
      id: 're-2-3-ex-4c',
      type: 'exercise',
      title: 'Oppgave',
      content:
        `Gjør rede for sentrale prinsipper i islamsk etikk. Diskuter hvordan disse prinsippene gir veiledning i hverdagslivet for en muslim.`,
      exercises: [],
    },
    {
      id: 're-2-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        `Islam oppstod på den arabiske halvøy på 600-tallet med profeten Muhammad som sentral skikkelse. Koranen, hadith og sunna utgjør de viktigste kildene for islamsk tro og praksis. De seks trosartiklene – tro på Gud, engler, hellige bøker, profeter, dommens dag og forutbestemmelsen – utgjør det teologiske grunnlaget, mens de fem søylene – trosbekjennelsen, bønnen, fasten, den religiøse avgiften og pilegrimsreisen – gir struktur og innhold til det religiøse livet.\n\nTawhid (Guds enhet) er det mest grunnleggende prinsippet i islamsk teologi og gjennomsyrer alle aspekter av troen. Moskeen er det sentrale samlingsstedet for bønn og fellesskap, og den islamske kalenderen strukturerer det religiøse året med høytider og minnedager. Islamsk etikk gir veiledning for alle sider av livet – fra religiøse ritualer til familieliv, økonomi og mat. De fem søylene er felles for praktisk talt alle muslimer og uttrykker kjerneverdier som monoteisme, fellesskap, disiplin, sosial rettferdighet og hengivenhet til Gud.`,
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
    {
      id: 're-2-3-ex-7',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hvor mange trosartikler (arkan al-iman) har islam?',
      exercises: [
        {
          id: 're-2-3-ex-7-mc',
          type: 'multiple-choice' as const,
          task: 'Hvor mange trosartikler (arkan al-iman) har islam?',
          options: [
            { id: 'a', text: 'Seks', isCorrect: true },
            { id: 'b', text: 'Fem', isCorrect: false },
            { id: 'c', text: 'Syv', isCorrect: false },
            { id: 'd', text: 'Fire', isCorrect: false },
          ],
          solution: `Islam har seks trosartikler (arkan al-iman): tro på Gud, engler, hellige bøker, profeter, dommens dag og forutbestemmelsen (qadar). Disse skal ikke forveksles med de fem søylene (arkan al-islam), som er praktiske plikter.`,
        },
      ],
    },
    {
      id: 're-2-3-ex-8',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        `Forklar hva som menes med at islam ser seg selv som den endelige åpenbaringen fra Gud. Hvordan forholder islam seg til de andre abrahamittiske religionene (jødedom og kristendom) i lys av dette?`,
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
        `Islam er en verdensreligion med nærmere to milliarder tilhengere, og det finnes et stort mangfold innad i religionen. Allerede kort tid etter profeten Muhammads død i 632 e.Kr. oppstod det uenigheter om hvem som skulle lede det muslimske samfunnet. Denne uenigheten la grunnlaget for den historiske splittelsen mellom sunni- og shiaislam, som fortsatt preger den islamske verden i dag. Ved siden av disse to hovedretningene finnes sufisme – islams mystiske tradisjon – og en rekke moderne reformbevegelser. I dette kapitlet ser vi nærmere på islams indre mangfold og de viktigste retningene.\n\nÅ forstå mangfoldet innenfor islam er avgjørende for å unngå generaliseringer og stereotypier. Når vi snakker om «islam», refererer vi til en tradisjon som rommer alt fra sunnimuslimer i Indonesia til shiamuslimer i Iran, fra sufibrødreskap i Vest-Afrika til progressive muslimske tenkere i Europa. Dette mangfoldet gjenspeiler islams lange historie og geografiske spredning over et enormt kulturelt landskap.`,
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
      id: 're-2-4-def-3',
      type: 'definition',
      title: 'Kalif og kalifat',
      content:
        `En kalif (arabisk: khalifa, «etterfølger» eller «stedfortreder») var lederen for det muslimske samfunnet etter Muhammads død. Kalifatet var det politisk-religiøse riket under kalifens ledelse. De fire første kalifene – Abu Bakr, Umar, Uthman og Ali – kalles i sunniislam for «de rettledede kalifene» (al-khulafa al-rashidun). Etter dem fulgte dynastiske kalifater: Umayyade-kalifatet (661–750) med sete i Damaskus, og Abbaside-kalifatet (750–1258) med sete i Bagdad. Det osmanske riket hevdet kalifverdigheten fra 1517 til den ble avskaffet i 1924.`,
    },
    {
      id: 're-2-4-text-1b',
      type: 'text',
      title: 'De fire sunni-rettsskolene',
      content:
        `Innenfor sunniislam har det utviklet seg fire hovedsaklige rettsskoler (madhhab) som representerer ulike tilnærminger til tolkning av islamsk lov:\n\n**Hanafi-skolen**, grunnlagt av Abu Hanifa (699–767), er den mest utbredte rettsretningen og dominerer i Tyrkia, Sentral-Asia, Sør-Asia og deler av Midtøsten. Den er kjent for å vektlegge rasjonell resonnering og analogi (qiyas) i tolkningen av loven.\n\n**Maliki-skolen**, grunnlagt av Malik ibn Anas (711–795), er utbredt i Nord-Afrika og Vest-Afrika. Den legger særlig vekt på praksisen i Medina (der Muhammads sunna var best bevart) som rettskilde.\n\n**Shafii-skolen**, grunnlagt av al-Shafii (767–820), er utbredt i Sørøst-Asia, Øst-Afrika og deler av Midtøsten. Al-Shafii utviklet en systematisk metode for å utlede lov fra kildene og regnes som grunnleggeren av islamsk rettsvitenskap (usul al-fiqh).\n\n**Hanbali-skolen**, grunnlagt av Ahmad ibn Hanbal (780–855), er den mest konservative retningen og dominerer i Saudi-Arabia. Den legger størst vekt på Koranen og hadith og er skeptisk til utstrakt bruk av rasjonelle metoder.\n\nDe fire rettsskolene anerkjenner hverandre som legitime tolkninger av islamsk lov, og forskjellene mellom dem er i mange tilfeller mer graduelle enn absolutte.`,
    },
    {
      id: 're-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Ashura – ulik feiring i sunni og shia',
      content:
        `Ashura-dagen (10. muharram) illustrerer godt forskjellene mellom sunni- og shiaislam. For sunnimuslimer er ashura en frivillig fastedag, forbundet med at Moses (Musa) og israelittene ble reddet fra farao. For shiamuslimer er ashura derimot den viktigste sørgedagen i kalenderen – en dag for dyp sorg over martyriet til Husayn ibn Ali (Muhammads barnebarn) i slaget ved Karbala i 680 e.Kr.\n\nShiamuslimers ashura-markeringer kan inkludere sørgeprosesjoner (mawakib), resitasjon av elegier, dramaoppsetninger (ta'ziyeh) som gjenskaper Karbala-hendelsene, og i noen tradisjoner også selvpiskende ritualer (som er omdiskutert og frarås av mange shia-lærde). Hendelsen ved Karbala er sentral i shia-identiteten og symboliserer kampen for rettferdighet mot undertrykkelse – et motiv som har politisk resonans den dag i dag.`,
    },
    {
      id: 're-2-4-ex-1b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva er en madhhab i sunniislam?',
      exercises: [
        {
          id: 're-2-4-ex-1b-mc',
          type: 'multiple-choice' as const,
          task: 'Hva er en madhhab i sunniislam?',
          options: [
            { id: 'a', text: 'En rettsskole for tolkning av islamsk lov', isCorrect: true },
            { id: 'b', text: 'En mystisk sufi-orden', isCorrect: false },
            { id: 'c', text: 'En politisk bevegelse', isCorrect: false },
            { id: 'd', text: 'En type moske', isCorrect: false },
          ],
          solution: `En madhhab er en rettsskole innenfor sunniislam. De fire hovedskolene – hanafi, maliki, shafii og hanbali – representerer ulike tilnærminger til tolkning av islamsk lov (sharia) og anerkjenner hverandre som legitime.`,
        },
      ],
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
      id: 're-2-4-def-4',
      type: 'definition',
      title: 'Imam (i shiaislam)',
      content:
        `I shiaislam har begrepet imam en særskilt teologisk betydning som skiller seg fra sunniislam (der imam vanligvis betyr bønneleder). For shiamuslimer er imamene Ali og hans etterkommere – de guddommelig utpekte lederne av det muslimske samfunnet. Tolvershia tror på tolv imamer, der den tolvte imamen, Muhammad al-Mahdi, gikk i skjul (ghayba) i 874 e.Kr. og vil vende tilbake som verdens forløser ved tidens ende. I fravær av den skjulte imamen ledes shiasamfunnet av religiøse lærde, med ayatollaher som de høyeste autoriteter.`,
    },
    {
      id: 're-2-4-text-2b',
      type: 'text',
      title: 'Islams gylne tidsalder: kultur, vitenskap og filosofi',
      content:
        `Fra 700-tallet til 1200-tallet opplevde den islamske verden en kulturell og intellektuell blomstringsperiode ofte kalt «islams gylne tidsalder». Med Bagdad som sentrum ble det muslimske riket et knutepunkt for vitenskap, filosofi, medisin, matematikk og kunst.\n\nKalif al-Mamun grunnla Visdommens hus (Bayt al-Hikma) i Bagdad rundt 830, der lærde oversatte greske, persiske og indiske vitenskapelige verker til arabisk. Denne oversettelsesbevegelsen bevarte og videreutviklet antikkens kunnskap og ble senere en avgjørende kilde for den europeiske renessansen.\n\nBlant de store tenkerne fra denne perioden er filosofen Ibn Sina (Avicenna, 980–1037), som skrev banebrytende verker om medisin og filosofi; matematikeren al-Khwarizmi (ca. 780–850), som la grunnlaget for algebra (navnet kommer fra hans verk «al-jabr»); og filosofen Ibn Rushd (Averroes, 1126–1198), som skrev innflytelsesrike kommentarer til Aristoteles.\n\nInnenfor islamsk teologi og filosofi var al-Ghazali (1058–1111) en viktig skikkelse som søkte å forene teologi med sufisme. Hans verk «Gjenopplivelsen av religionsvitenskap» (Ihya Ulum al-Din) regnes som et av de mest innflytelsesrike verkene i islamsk intellektuell historie. Denne rike intellektuelle arven viser at islam historisk har rommet en sterk tradisjon for rasjonell tenkning og vitenskapelig undersøkelse.`,
    },
    {
      id: 're-2-4-example-2',
      type: 'example',
      title: 'Primærkilde: Rumi om kjærlighet og Gud',
      content:
        `Jalal al-Din Rumi (1207–1273) er en av de mest elskede poetene i verden og en sentral skikkelse innenfor sufismen. Hans poesi uttrykker lengsel etter Gud og den mystiske kjærligheten:\n\n«La skjønnheten i det du elsker, være det du gjør. Det finnes hundrevis av måter å knele og kysse jorden.»\n\n«Bortenfor riktig og galt finnes det et felt. Jeg møter deg der.»\n\nRumis poesi, særlig hans store verk Masnavi (over 25 000 verspar), utforsker temaer som guddommelig kjærlighet, enhet, sjelens reise og forholdet mellom menneske og Gud. Masnavi kalles noen ganger «Koranens tolk» på grunn av sin rike teologiske innhold. Rumis mevlevi-orden – de hvirvlende dervishene – er kjent for sin meditasjonsdans (sema), der den roterende bevegelsen symboliserer sjelens reise mot Gud.`,
    },
    {
      id: 're-2-4-ex-2b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hvem grunnla Visdommens hus (Bayt al-Hikma) i Bagdad?',
      exercises: [
        {
          id: 're-2-4-ex-2b-mc',
          type: 'multiple-choice' as const,
          task: 'Hvem grunnla Visdommens hus (Bayt al-Hikma) i Bagdad?',
          options: [
            { id: 'a', text: 'Kalif al-Mamun', isCorrect: true },
            { id: 'b', text: 'Ibn Sina (Avicenna)', isCorrect: false },
            { id: 'c', text: 'Al-Ghazali', isCorrect: false },
            { id: 'd', text: 'Rumi', isCorrect: false },
          ],
          solution: `Kalif al-Mamun (regjering 813–833) grunnla Visdommens hus (Bayt al-Hikma) i Bagdad rundt 830. Det fungerte som et akademi der lærde oversatte greske, persiske og indiske vitenskapelige verker til arabisk, og det ble et viktig sentrum for vitenskap og filosofi.`,
        },
      ],
    },
    {
      id: 're-2-4-text-2c',
      type: 'text',
      title: 'Shia-retningens undergrupperinger',
      content:
        `Shiaislam er ikke en enhetlig retning, men består av flere undergrupperinger. De viktigste er:\n\n**Tolvershia** (ithna ashariyya) er den klart største undergruppen og utgjør flertallet av shiamuslimer. De tror på tolv imamer, der den tolvte – Muhammad al-Mahdi – gikk i skjul i 874 e.Kr. og forventes å vende tilbake. Tolvershia er dominerende i Iran, Irak, Bahrain og Libanon. Den iranske revolusjonen i 1979, ledet av ayatollah Khomeini, etablerte en islamsk republikk basert på tolvershia-teologi med konseptet velayat-e faqih (de rettslærdes styre).\n\n**Ismailittene** (syvershia) delte seg fra tolvershia i et spørsmål om den syvende imamens etterfølger. I dag ledes den største ismailittiske gruppen av Aga Khan, som er et aktivt globalt lederskap med vekt på utdanning, helse og utvikling. Aga Khan Development Network er en av verdens største private utviklingsorganisasjoner.\n\n**Zaydittene** (femershia) anerkjenner bare de fem første imamene og har en teologi som ligger nærmere sunniislam enn de andre shia-gruppene. Zayditter finnes hovedsakelig i Jemen.\n\nDisse undergruppene illustrerer det store mangfoldet innenfor shiaislam og viser at enkle kategoriseringer sjelden gjør rettferdighet til religionens kompleksitet.`,
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
      id: 're-2-4-text-3b',
      type: 'text',
      title: 'Islamsk feminisme og kjønnsdebatter',
      content:
        `En viktig debatt innenfor moderne islam handler om kjønn og likestilling. Islamsk feminisme er en bevegelse som argumenterer for kjønnsrettferdighet med utgangspunkt i islamske kilder. Islamske feminister hevder at patriarkalske tolkninger av Koranen og hadith reflekterer historiske og kulturelle kontekster, ikke islams egentlige budskap.\n\nTenkere som Amina Wadud, Fatima Mernissi og Asma Barlas har utviklet feministiske lesninger av Koranen der de argumenterer for at Koranens budskap er likestilling og rettferdighet mellom kjønnene. De peker på koranvers som fastslår at menn og kvinner er skapt av «én sjel» (Koranen 4:1) og at «den beste blant dere i Guds øyne er den mest gudfryktige» (Koranen 49:13), uavhengig av kjønn.\n\nDebatten om hijab (hodeplagg) illustrerer spenningene i feltet. For noen muslimske kvinner er hijab et uttrykk for religiøs identitet og personlig valg; for andre kan det oppleves som sosialt press. Både forsvar av og motstand mot hijab finnes innenfor det muslimske miljøet. I europeisk kontekst har hijab-debatten også politiske dimensjoner, der spørsmål om religionsfrihet, kvinnerettigheter og sekularisme møtes.\n\nDet er viktig å anerkjenne at det finnes et bredt spekter av syn på kjønn innenfor islam, fra konservative til progressive, og at muslimske kvinner selv er aktive deltakere i denne debatten.`,
    },
    {
      id: 're-2-4-ex-3b',
      type: 'exercise',
      title: 'Oppgave',
      content:
        `Hva menes med islamsk feminisme? Diskuter hvordan ulike tolkninger av islamske kilder kan lede til ulike syn på kjønn og likestilling.`,
      exercises: [],
    },
    {
      id: 're-2-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        `Islam rommer et stort mangfold av retninger og tradisjoner. Splittelsen mellom sunni- og shiaislam har sin bakgrunn i uenigheter om lederskap etter Muhammads død, men de to retningene deler de grunnleggende troselementene. Sunniislam har fire rettsskoler (hanafi, maliki, shafii, hanbali) som representerer ulike tilnærminger til tolkning av islamsk lov. Shiaislam har en sterk tradisjon for religiøst lederskap gjennom imamer og lærde.\n\nSufismen representerer islams mystiske tradisjon og har bidratt til spredningen av religionen gjennom sin tilpasningsdyktighet og fokus på den indre, åndelige dimensjonen. Islams gylne tidsalder viser at den islamske sivilisasjonen har frembrakt banebrytende bidrag innen vitenskap, filosofi og kunst.\n\nI moderne tid har islamske reformbevegelser beveget seg i ulike retninger – fra modernister som ønsker å forene islam med moderne verdier, til konservative retninger som søker tilbake til de tidligste kildene. Islamsk feminisme representerer en viktig stemme i debatten om kjønn og likestilling. Mangfoldet innenfor islam gjenspeiler en levende og dynamisk religiøs tradisjon som stadig utvikler seg.`,
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
    {
      id: 're-2-4-ex-6',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva var Visdommens hus i Bagdad kjent for?',
      exercises: [
        {
          id: 're-2-4-ex-6-mc',
          type: 'multiple-choice' as const,
          task: 'Hva var Visdommens hus i Bagdad kjent for?',
          options: [
            { id: 'a', text: 'Oversettelse og utvikling av vitenskapelige verker', isCorrect: true },
            { id: 'b', text: 'Utdanning av imamer og religiøse ledere', isCorrect: false },
            { id: 'c', text: 'Produksjon av Koraner i ulike språk', isCorrect: false },
            { id: 'd', text: 'Diplomatisk arbeid mellom muslimske og kristne riker', isCorrect: false },
          ],
          solution: `Visdommens hus (Bayt al-Hikma) i Bagdad, grunnlagt ca. 830, var et akademi der lærde oversatte greske, persiske og indiske vitenskapelige verker til arabisk og drev original forskning. Det var et sentralt knutepunkt i islams gylne tidsalder for vitenskap, filosofi og matematikk.`,
        },
      ],
    },
    {
      id: 're-2-4-ex-7',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        `Diskuter islams gylne tidsalder og dens bidrag til verdens intellektuelle arv. Hvordan utfordrer denne historien vanlige stereotypier om forholdet mellom islam og vitenskap?`,
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
        `Kristendommen er i dag en global religion med over to milliarder tilhengere på alle kontinenter. Mens religionen historisk har hatt sitt tyngdepunkt i Europa, har det globale sør – Afrika, Asia og Latin-Amerika – blitt stadig viktigere. Kristne kirker engasjerer seg aktivt i samfunnsspørsmål som fattigdomsbekjempelse, menneskerettigheter, miljøvern og sosial rettferdighet. I dette kapitlet ser vi på kristne verdier i møte med samfunnet, frigjøringsteologiens bidrag, og kristendommens stilling i Norge i dag.\n\nKristendommens samtidige relevans kan ikke forstås uten å se på forholdet mellom tro og samfunn. Gjennom historien har kristne grupper både støttet og utfordret politiske og sosiale strukturer. Kristne argumenter har blitt brukt både for å forsvare slaveri og for å kjempe for dets avskaffelse, for å legitimere kolonialisme og for å kritisere den. Denne tosidigheten gjør det viktig å undersøke hvordan kristne verdier faktisk omsettes i praksis i ulike sammenhenger.`,
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
      id: 're-2-5-def-3',
      type: 'definition',
      title: 'Diakoni',
      content:
        `Diakoni (fra gresk diakonein, «å tjene») er kristne kirkers omsorgstjeneste. Begrepet omfatter alt fra praktisk hjelp til mennesker i nød – som matutdeling, boligtilbud og rådgivningstjenester – til strukturelt arbeid for rettferdighet og menneskerettigheter. I Den norske kirke er diakonien en av fire grunnpilarer i menighetens arbeid, ved siden av forkynnelse, undervisning og gudstjenesteliv. Diakonale institusjoner som Kirkens Bymisjon er viktige aktører i det norske velferdssamfunnet.`,
    },
    {
      id: 're-2-5-text-1b',
      type: 'text',
      title: 'Kristne miljøbevegelser og klimaetikk',
      content:
        `I de siste tiårene har miljø- og klimaspørsmål blitt stadig viktigere på kristne kirkers agenda. Pave Frans' encyklika Laudato Si' (2015) – med undertittelen «Om omsorg for vårt felles hjem» – er et av de mest innflytelsesrike dokumentene i kristen miljøteologi. Paven argumenterer for at miljøkrisen er uatskillelig fra sosial urettferdighet: de fattigste er hardest rammet av klimaendringer de ikke har forårsaket.\n\nI ortodoks kristendom har den økumeniske patriarken Bartholomeos I av Konstantinopel (ofte kalt «den grønne patriarken») vært en pioner innen kristen miljøtenkning siden 1990-tallet. Han har argumentert for at miljøødeleggelse er en synd mot Guds skaperverk og at kristne har et åndelig ansvar for å beskytte naturen.\n\nProtestantiske kirker har også engasjert seg gjennom organisasjoner som A Rocha (en internasjonal kristen naturvernorganisasjon) og gjennom uttalelser fra Kirkenes Verdensråd. I Norge har Den norske kirke vedtatt ambisiøse klimamål og oppfordrer menighetene til å arbeide for bærekraft.\n\nTeologisk bygger kristen miljøetikk på forvaltertanken – at mennesket har fått ansvar for å ta vare på skaperverket. Mens noen kritikere har hevdet at kristendommens vektlegging av menneskets herredømme over naturen (1. Mosebok 1,28) har bidratt til miljøkrisen, svarer kristen miljøteologi at herredømme innebærer ansvar, ikke ubegrenset utnyttelse.`,
    },
    {
      id: 're-2-5-example-1',
      type: 'example',
      title: 'Primærkilde: Fra Laudato Si (2015)',
      content:
        `Pave Frans skriver i Laudato Si' (paragraf 49):\n\n«Det er ikke tilstrekkelig å si at vi bør vise mer omsorg for naturen. Vi må også erkjenne at blant jordens fattige er det mange som i dag er de mest sårbare. Hva slags verden ønsker vi å etterlate til dem som kommer etter oss, til barna som vokser opp?»\n\nDette utdraget illustrerer hvordan pave Frans knytter miljøspørsmål til sosial rettferdighet. Encyklikaen argumenterer for en «integrert økologi» der omsorg for miljøet og omsorg for de fattige henger uløselig sammen. Laudato Si' er et tydelig eksempel på hvordan kristen sosialetikk utvikler seg i møte med nye globale utfordringer.`,
    },
    {
      id: 're-2-5-ex-1b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva er hovedbudskapet i pave Frans encyklika Laudato Si (2015)?',
      exercises: [
        {
          id: 're-2-5-ex-1b-mc',
          type: 'multiple-choice' as const,
          task: `Hva er hovedbudskapet i pave Frans' encyklika Laudato Si' (2015)?`,
          options: [
            { id: 'a', text: 'At miljøkrisen er uatskillelig fra sosial urettferdighet', isCorrect: true },
            { id: 'b', text: 'At kirken bør holde seg utenfor politikk', isCorrect: false },
            { id: 'c', text: 'At klimaendringer er Guds vilje', isCorrect: false },
            { id: 'd', text: 'At teknologi alene kan løse miljøproblemene', isCorrect: false },
          ],
          solution: `Laudato Si' argumenterer for at miljøkrisen er uatskillelig fra sosial urettferdighet – de fattigste er hardest rammet av klimaendringer. Pave Frans foreslår en «integrert økologi» der omsorg for miljøet og omsorg for de fattige henger sammen.`,
        },
      ],
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
      id: 're-2-5-def-4',
      type: 'definition',
      title: 'Sekularisering',
      content:
        `Sekularisering betegner den prosessen der religion mister sin dominerende stilling i samfunnet, kulturen og enkeltmenneskers liv. I en sekulær stat er statlige institusjoner uavhengige av religiøse myndigheter, og religionsfrihet er sikret. Sekularisering er en sentral utviklingstrend i de fleste vesteuropeiske land, inkludert Norge, der kirkens innflytelse på politikk, lovgivning og hverdagsliv har minket betydelig over de siste hundre årene. Begrepet brukes både deskriptivt (beskrivende) og normativt (som et ideal om at samfunnet bør være sekulært).`,
    },
    {
      id: 're-2-5-text-2b',
      type: 'text',
      title: 'Kristen bioetikk og moderne utfordringer',
      content:
        `Kristne kirker står i dag overfor en rekke etiske utfordringer knyttet til medisinsk teknologi, bioteknologi og livsvilkår. Spørsmål om abort, aktiv dødshjelp (eutanasi), assistert befruktning, stamcelleforskning og genredigering er alle områder der kristne etiske perspektiver er relevante i samfunnsdebatten.\n\nInnenfor disse spørsmålene finnes det et bredt spekter av posisjoner. Den katolske kirken har generelt konservative standpunkter: den avviser abort, aktiv dødshjelp, assistert befruktning som involverer destruksjon av embryoer, og de fleste former for genredigering av menneskelige celler. Disse standpunktene begrunnes i læren om livets hellighet fra unnfangelsen av.\n\nProtestantiske kirker har mer varierende standpunkter. Mange lutherske og reformerte kirker aksepterer abort under visse omstendigheter og er mer åpne for assistert befruktning. Den norske kirke har ikke et enhetlig standpunkt til alle bioetiske spørsmål, men vektlegger respekt for menneskeverdet og behovet for etisk refleksjon.\n\nFelles for kristne perspektiver på bioetikk er vektleggingen av menneskets verdighet som skapt i Guds bilde (imago Dei), solidaritet med de sårbare, og behovet for å balansere vitenskapelig fremskritt med etisk ansvarlighet.`,
    },
    {
      id: 're-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Kirkens Bymisjon i Norge',
      content:
        `Kirkens Bymisjon er et eksempel på kristen diakoni i praksis i norsk kontekst. Organisasjonen ble grunnlagt i Kristiania (Oslo) i 1855 og er i dag en av Norges største diakonale organisasjoner.\n\nKirkens Bymisjon driver blant annet:\n- **Møtestedet**: Kafeer og aktivitetstilbud for mennesker som opplever ensomhet eller utenforskap\n- **Rushjelpstilbud**: Behandling, bo-tilbud og skadereduksjon for mennesker med rusutfordringer\n- **Migrant- og flyktninghjelp**: Språkopplæring, juridisk rådgivning og sosiale tilbud\n- **Barnevern**: Tiltak for barn og unge i vanskelige livssituasjoner\n- **Sjelesorg og samtaletilbud**: Åndelig og psykososial støtte\n\nOrganisasjonen er et tydelig eksempel på hvordan kristen nestekjærlighet kan omsettes i systematisk sosialt arbeid. Kirkens Bymisjon har som motto «Ingen er satisfi med å ha det dritt» og arbeider ut fra et menneskesyn der alle har uendelig verdi uavhengig av livssituasjon.`,
    },
    {
      id: 're-2-5-ex-2b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva menes med sekularisering?',
      exercises: [
        {
          id: 're-2-5-ex-2b-mc',
          type: 'multiple-choice' as const,
          task: 'Hva menes med sekularisering?',
          options: [
            { id: 'a', text: 'At religion mister sin dominerende stilling i samfunnet', isCorrect: true },
            { id: 'b', text: 'At religioner slår seg sammen', isCorrect: false },
            { id: 'c', text: 'At staten forbyr all religiøs praksis', isCorrect: false },
            { id: 'd', text: 'At nye religiøse bevegelser oppstår', isCorrect: false },
          ],
          solution: `Sekularisering betegner prosessen der religion mister sin dominerende stilling i samfunnet, kulturen og enkeltmenneskers liv. Det innebærer ikke nødvendigvis at religion forsvinner, men at dens innflytelse på politikk, lovgivning og hverdagsliv reduseres. Norge er et eksempel på et sterkt sekularisert samfunn.`,
        },
      ],
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
      id: 're-2-5-text-3b',
      type: 'text',
      title: 'Kristendom og menneskerettigheter',
      content:
        `Forholdet mellom kristendom og menneskerettigheter er komplekst og mangefasettert. På den ene siden har kristne verdier som menneskeverdet, nestekjærlighet og rettferdighet bidratt til utviklingen av moderne menneskerettighetstankegang. Tanken om at hvert menneske er skapt i Guds bilde (imago Dei) har vært et viktig teologisk fundament for argumenter om universelle rettigheter og ukrenkelig menneskeverd.\n\nKristne aktører har spilt sentrale roller i kampen for menneskerettigheter gjennom historien. William Wilberforce, en evangelisk kristen, ledet kampen mot slaveriet i Storbritannia på 1800-tallet. Martin Luther King Jr. brukte kristen teologi og ikke-voldsprinsipper i borgerrettighetskampen i USA. Desmond Tutu, anglikansk erkebiskop, var en nøkkelfigur i kampen mot apartheid i Sør-Afrika. Dietrich Bonhoeffer, en luthersk teolog, ga sitt liv i motstanden mot nazistenes overgrep.\n\nPå den andre siden har kristne grupper også historisk bidratt til undertrykkelse – gjennom korstog, inkvisisjon, legitimering av slaveri og kolonialisme, og diskriminering av kvinner og seksuelle minoriteter. Denne tosidigheten gjør det viktig å skille mellom kristen etikk som ideal og kristne gruppers historiske praksis.\n\nI dag engasjerer kristne organisasjoner seg bredt i menneskerettighetsarbeid, fra Kirkenes Verdensråds fredsarbeid til katolske ordener som arbeider mot menneskehandel og tvangsarbeid.`,
    },
    {
      id: 're-2-5-ex-3b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hvilket teologisk begrep har vært viktig for kristen argumentasjon for menneskerettigheter?',
      exercises: [
        {
          id: 're-2-5-ex-3b-mc',
          type: 'multiple-choice' as const,
          task: 'Hvilket teologisk begrep har vært viktig for kristen argumentasjon for menneskerettigheter?',
          options: [
            { id: 'a', text: 'Imago Dei – at mennesket er skapt i Guds bilde', isCorrect: true },
            { id: 'b', text: 'Sola fide – troen alene', isCorrect: false },
            { id: 'c', text: 'Theosis – guddommeliggjørelse', isCorrect: false },
            { id: 'd', text: 'Arvesynd – den iboende syndigheten', isCorrect: false },
          ],
          solution: `Imago Dei – tanken om at hvert menneske er skapt i Guds bilde (1. Mosebok 1,27) – har vært et viktig teologisk fundament for argumenter om universelle rettigheter og ukrenkelig menneskeverd i kristen menneskerettighetstenkning.`,
        },
      ],
    },
    {
      id: 're-2-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        `Kristendommen i dag er preget av globalt mangfold og aktivt samfunnsengasjement. Kristen sosialetikk bygger på prinsipper om nestekjærlighet, rettferdighet og menneskeverd, og kommer til uttrykk gjennom diakoni, sosial lære og politisk engasjement. Miljø- og klimaspørsmål har blitt en viktig del av kristen etikk, med Laudato Si' som et sentralt dokument.\n\nFrigjøringsteologien har satt de fattiges og undertryktes perspektiv i sentrum av teologisk refleksjon og inspirert lignende bevegelser globalt. Moderne bioetiske utfordringer krever at kristne kirker tar stilling til komplekse spørsmål om liv, død og teknologi.\n\nI Norge har Den norske kirke gått fra å være statskirke til folkekirke, mens et mangfold av frikirker og trossamfunn preger det kristne landskapet. Sekularisering har redusert religionens innflytelse på samfunnet, men kristne organisasjoner som Kirkens Bymisjon spiller fortsatt en viktig rolle i velferdssamfunnet. Kristne kirker fortsetter å bidra til samfunnsdebatten om etikk, rettferdighet og det gode liv.`,
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
    {
      id: 're-2-5-ex-6',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva er diakoni?',
      exercises: [
        {
          id: 're-2-5-ex-6-mc',
          type: 'multiple-choice' as const,
          task: 'Hva er diakoni?',
          options: [
            { id: 'a', text: `Kristne kirkers omsorgstjeneste for mennesker i nød`, isCorrect: true },
            { id: 'b', text: 'En type gudstjeneste i den ortodokse kirken', isCorrect: false },
            { id: 'c', text: 'En teologisk retning innenfor protestantismen', isCorrect: false },
            { id: 'd', text: 'En form for kristen meditasjon', isCorrect: false },
          ],
          solution: `Diakoni (fra gresk diakonein, «å tjene») er kristne kirkers omsorgstjeneste. Det omfatter praktisk hjelp til mennesker i nød, som matutdeling, boligtilbud og rådgivning, men også strukturelt arbeid for rettferdighet og menneskerettigheter.`,
        },
      ],
    },
    {
      id: 're-2-5-ex-7',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        `Diskuter hvordan kristne kirker forholder seg til klimakrisen. Hvilke teologiske argumenter brukes, og hvordan omsettes disse i praksis? Bruk eksempler fra teksten.`,
      exercises: [],
    },
    {
      id: 're-2-5-ex-8',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        `Velg et bioetisk spørsmål (for eksempel abort, aktiv dødshjelp eller stamcelleforskning) og gjør rede for ulike kristne perspektiver på dette spørsmålet. Diskuter hvorfor kristne kan komme til forskjellige konklusjoner.`,
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
        `Islam er i dag en av de raskest voksende religionene i Europa, og muslimer utgjør en betydelig minoritet i mange europeiske land. I Norge har det muslimske miljøet vokst siden arbeidsinnvandringen på 1960- og 1970-tallet og senere gjennom flyktningstrømmer fra muslimske land. Muslimsk tilstedeværelse i Europa reiser viktige spørsmål om integrering, identitet, religionsfrihet og forholdet mellom majoritet og minoritet. I dette kapitlet ser vi på den muslimske diasporaen i Europa, integreringsspørsmål og utfordringen med islamofobi og fordommer.\n\nForholdet mellom islam og Europa er ikke noe nytt fenomen. Gjennom historien har det vært utstrakt kontakt mellom den islamske og den europeiske verden – fra maurernes Spania (711–1492) og det osmanske rikets ekspansjon til handel, kulturutveksling og intellektuell påvirkning. Den moderne situasjonen, med store muslimske minoriteter i vesteuropeiske land, representerer imidlertid en ny fase i denne langvarige historien.`,
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
      id: 're-2-6-def-3',
      type: 'definition',
      title: 'Religionsfrihet',
      content:
        `Religionsfrihet er en grunnleggende menneskerettighet som innebærer retten til å ha, utøve, skifte eller ikke ha en religion. Den er nedfelt i FNs verdenserklæring om menneskerettigheter (artikkel 18), Den europeiske menneskerettskonvensjon (artikkel 9) og den norske Grunnloven (paragraf 16). Religionsfriheten omfatter retten til å praktisere sin religion privat og offentlig, men kan begrenses av hensyn til offentlig orden, sikkerhet og andres rettigheter. I praksis oppstår det ofte spenninger mellom religionsfrihet og andre rettigheter eller verdier.`,
    },
    {
      id: 're-2-6-text-1b',
      type: 'text',
      title: 'Islam i Norge: historie og utvikling',
      content:
        `Islams historie i Norge strekker seg tilbake til 1960- og 1970-tallet, da arbeidsinnvandrere fra Pakistan, Tyrkia og Marokko kom til landet. Den første moskeen i Norge – Islamic Cultural Centre – ble grunnlagt i Oslo i 1974 av pakistanske arbeidsinnvandrere. Etter innvandringsstoppen i 1975 fortsatte det muslimske samfunnet å vokse gjennom familiegjenforening og senere gjennom flyktninger fra blant annet Somalia, Irak, Afghanistan, Syria og Eritrea.\n\nI dag anslås det at det bor mellom 200 000 og 250 000 muslimer i Norge, noe som utgjør ca. 4–5 prosent av befolkningen. Det islamske miljøet i Norge er preget av stort etnisk, kulturelt og religiøst mangfold. De største gruppene har bakgrunn fra Pakistan, Somalia, Irak og Afghanistan, men det finnes også muslimer med bakgrunn fra mange andre land.\n\nIslamske organisasjoner i Norge er samlet under paraplyen Islamsk Råd Norge (IRN), som ble grunnlagt i 1993. Det finnes i dag over 200 registrerte muslimske trossamfunn i landet. De største moskéorganisasjonene inkluderer Det islamske forbundet (tilknyttet pakistansk islam), Islamsk Kulturforening og Norsk Muslimsk Ungdom. I 2014 åpnet Bait-un-Nasr-moskeen i Oslo som en av Norges mest synlige moskeer.\n\nMuslimske trossamfunn mottar statlig støtte på lik linje med andre trossamfunn i Norge, i tråd med prinsippet om likebehandling av religioner.`,
    },
    {
      id: 're-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Ulike modeller for religionspolitikk i Europa',
      content:
        `Europeiske land har ulike modeller for forholdet mellom stat og religion, noe som påvirker muslimers situasjon:\n\n- **Frankrike (laïcité)**: Streng statlig nøytralitet. Religion er en privatsak. Religiøse symboler (inkludert hijab) er forbudt i offentlige skoler og for offentlig ansatte. Moskebygging finansieres privat.\n\n- **Storbritannia (multikulturalisme)**: Pragmatisk tilnærming med rom for religiøs og kulturell pluralisme. Sharia-råd opererer som uformelle meklingsinstanser. Religiøse skoler, inkludert islamske, mottar statlig støtte.\n\n- **Tyskland (korporativisme)**: Anerkjente trossamfunn har spesielle rettigheter, inkludert religionsundervisning i offentlige skoler. Islam er på vei inn i dette systemet, med islamsk religionsundervisning i flere delstater.\n\n- **Norge (likebehandlingsmodell)**: Alle trossamfunn behandles likt med hensyn til statlig støtte. Den norske kirke har en særstilling som «Norges folkekirke» i Grunnloven, men andre trossamfunn mottar tilsvarende økonomisk støtte per medlem.\n\nDisse ulike modellene fører til forskjellige erfaringer for muslimer i ulike europeiske land.`,
    },
    {
      id: 're-2-6-ex-1b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Når ble den første moskeen i Norge grunnlagt?',
      exercises: [
        {
          id: 're-2-6-ex-1b-mc',
          type: 'multiple-choice' as const,
          task: 'Når ble den første moskeen i Norge grunnlagt?',
          options: [
            { id: 'a', text: '1974', isCorrect: true },
            { id: 'b', text: '1985', isCorrect: false },
            { id: 'c', text: '1960', isCorrect: false },
            { id: 'd', text: '1993', isCorrect: false },
          ],
          solution: `Den første moskeen i Norge – Islamic Cultural Centre – ble grunnlagt i Oslo i 1974 av pakistanske arbeidsinnvandrere. Den norske islamske historien strekker seg tilbake til arbeidsinnvandringen på 1960- og 1970-tallet.`,
        },
      ],
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
      id: 're-2-6-def-4',
      type: 'definition',
      title: 'Multikulturell versus interkulturell',
      content:
        `Multikulturalisme og interkulturalisme er to ulike tilnærminger til kulturelt mangfold. Multikulturalisme vektlegger anerkjennelse av ulike kulturelle grupper og deres rett til å bevare sin kultur innenfor et felles samfunn. Interkulturalisme legger mer vekt på dialog, møter og utveksling mellom ulike kulturelle grupper, og ser integrering som en gjensidig prosess der alle parter utvikler seg. I norsk kontekst har integreringspolitikken beveget seg mellom disse tilnærmingene, med økende vekt på dialog og gjensidig tilpasning.`,
    },
    {
      id: 're-2-6-text-2b',
      type: 'text',
      title: 'Utdanning og religionsdialog i norsk kontekst',
      content:
        `Skolen er en viktig arena for møte mellom elever med ulik religiøs og kulturell bakgrunn. Faget «Religion og etikk» i videregående skole og «KRLE» i grunnskolen er designet for å gi elever kunnskap om ulike religioner og livssyn og dermed bidra til gjensidig forståelse og respekt.\n\nReligionsdialog foregår også utenfor skolen. Dialogsenteret på Grønland i Oslo er et eksempel på et møtested for interreligiøs dialog. Organisasjoner som Samarbeidsrådet for tros- og livssynssamfunn arbeider for å fremme samarbeid mellom ulike religiøse grupper i Norge. Ungdomsprosjekter som «Ung Dialog» (i regi av Oslo politidistrikt og Kirkens Bymisjon) bruker dialog som verktøy for å forebygge radikalisering og fremme tilhørighet.\n\nSpørsmålet om religiøse plagg og symboler i det offentlige rom har vært gjenstand for debatt i Norge. I motsetning til Frankrike har Norge generelt en liberal tilnærming, der hijab er tillatt i de fleste sammenhenger. Debatten om niqab (ansiktsslør) førte til et forbud mot ansiktsdekkende plagg i undervisningssituasjoner i 2018, men dette er et snevrere forbud enn det man finner i flere andre europeiske land.\n\nDet norske samfunnets håndtering av religiøst mangfold er ikke uten spenninger, men den norske modellen – med likebehandling av trossamfunn, religionsundervisning i skolen og aktiv støtte til dialogarbeid – representerer en bestemt tilnærming til utfordringene.`,
    },
    {
      id: 're-2-6-ex-2b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva er hovedforskjellen mellom multikulturalisme og interkulturalisme?',
      exercises: [
        {
          id: 're-2-6-ex-2b-mc',
          type: 'multiple-choice' as const,
          task: 'Hva er hovedforskjellen mellom multikulturalisme og interkulturalisme?',
          options: [
            { id: 'a', text: 'Multikulturalisme vektlegger gruppenes rettigheter, interkulturalisme vektlegger dialog og utveksling', isCorrect: true },
            { id: 'b', text: 'Multikulturalisme tillater bare to kulturer, interkulturalisme tillater flere', isCorrect: false },
            { id: 'c', text: 'Multikulturalisme er et norsk begrep, interkulturalisme er et fransk begrep', isCorrect: false },
            { id: 'd', text: 'Det er ingen vesentlig forskjell mellom begrepene', isCorrect: false },
          ],
          solution: `Multikulturalisme vektlegger anerkjennelse av ulike kulturelle grupper og deres rett til å bevare sin kultur. Interkulturalisme legger mer vekt på dialog, møter og utveksling mellom grupper, og ser integrering som en gjensidig prosess der alle parter utvikler seg.`,
        },
      ],
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
      id: 're-2-6-text-4',
      type: 'text',
      title: 'Radikalisering og forebygging',
      content:
        `Radikalisering – prosessen der individer utvikler ekstreme holdninger som kan føre til vold – er en utfordring som berører alle samfunn. I europeisk kontekst har islamistisk ekstremisme (jihadisme) fått mye oppmerksomhet, men det er viktig å påpeke at radikalisering forekommer i mange former – høyreekstremisme, venstreekstremisme og andre typer voldelig ideologi.\n\nNorge ble rammet av høyreekstrem terror 22. juli 2011, da en norsk mann gjennomførte angrepene mot Regjeringskvartalet og Utøya. Angrepet var motivert av islamfiendtlig og antimuslimsk ideologi. Denne hendelsen illustrerer at islamofobi ikke bare er et spørsmål om fordommer, men i ytterste konsekvens kan lede til vold.\n\nForebygging av radikalisering krever en bred tilnærming som inkluderer utdanning, inkludering, dialog og tidlig intervensjon. I Norge samarbeider kommuner, politi, skoler og sivilsamfunnsorganisasjoner om forebyggingsstrategier. Kunnskap om religion og kultur er et viktig verktøy i dette arbeidet, fordi det reduserer misforståelser og bygger broer mellom grupper.\n\nDet er viktig å unngå å knytte radikalisering ensidig til islam. Det store flertallet av muslimer tar sterk avstand fra terrorisme og vold. Muslimske organisasjoner i Norge har gjentatte ganger fordømt voldelige handlinger utført i islams navn.`,
    },
    {
      id: 're-2-6-example-2',
      type: 'example',
      title: 'Eksempel: Muslimsk deltagelse i norsk samfunnsliv',
      content:
        `Norske muslimer deltar aktivt i alle deler av norsk samfunnsliv – politikk, kulturliv, idrett, næringsliv og akademia. Noen eksempler som illustrerer dette mangfoldet:\n\n- **Politikk**: Muslimer er representert i alle de store politiske partiene i Norge og har sittet på Stortinget, i kommunestyrer og fylkesting.\n- **Kultur og media**: Norske muslimer bidrar som forfattere, skuespillere, journalister, filmskapere og musikere, og beriker det norske kulturlandskapet.\n- **Akademia**: Forskere med muslimsk bakgrunn arbeider ved norske universiteter og forskningsmiljøer innenfor et bredt spekter av fagfelt.\n- **Frivillig arbeid**: Muslimske organisasjoner driver utstrakt frivillig arbeid, fra leksehjelp og språkopplæring til humanitær hjelp.\n- **Idrett**: Muslimske utøvere har representert Norge i en rekke idretter.\n\nDenne brede deltakelsen viser at det å være muslim og norsk ikke er noen motsetning, og at muslimer bidrar til samfunnet på mange og varierte måter.`,
    },
    {
      id: 're-2-6-ex-3b',
      type: 'exercise',
      title: 'Oppgave',
      content:
        `Diskuter hvorfor det er viktig å skille mellom islam som religion og islamistisk ekstremisme. Bruk eksempler fra teksten i svaret ditt.`,
      exercises: [],
    },
    {
      id: 're-2-6-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        `Muslimer utgjør i dag en betydelig og mangfoldig minoritet i Europa og Norge. Den muslimske diasporaen er preget av stort indre mangfold med hensyn til etnisk bakgrunn, grad av religiøsitet og sosial tilhørighet. I Norge har det muslimske samfunnet vokst siden 1960-tallet og teller i dag mellom 200 000 og 250 000 mennesker.\n\nIntegrering er en gjensidig prosess som forutsetter åpenhet og deltakelse fra både majoritet og minoritet. Skolen, arbeidslivet og dialogarbeid er viktige arenaer for integrering og gjensidig forståelse. Norske muslimer deltar aktivt i alle deler av samfunnslivet.\n\nIslamofobi og fordommer er reelle utfordringer som kan hemme integrering og samfunnsdeltakelse. Det er viktig å skille mellom legitim religionskritikk og fiendtlighet mot mennesker på grunn av deres religiøse tilhørighet. Ulike europeiske land har ulike modeller for å håndtere religiøst mangfold. Kunnskap, kontakt og dialog er sentrale virkemidler for å bygge et inkluderende samfunn der religionsfrihet og likeverd ivaretas.`,
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
    {
      id: 're-2-6-ex-6',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva er en diaspora?',
      exercises: [
        {
          id: 're-2-6-ex-6-mc',
          type: 'multiple-choice' as const,
          task: 'Hva er en diaspora?',
          options: [
            { id: 'a', text: 'En folkegruppe som lever spredt utenfor sitt opprinnelige hjemland', isCorrect: true },
            { id: 'b', text: 'En religiøs leder innenfor islam', isCorrect: false },
            { id: 'c', text: 'Et religiøst lovverk', isCorrect: false },
            { id: 'd', text: 'En form for pilegrimsreise', isCorrect: false },
          ],
          solution: `Diaspora (fra gresk «spredning») betegner en folkegruppe eller et religiøst samfunn som lever spredt utenfor sitt opprinnelige hjemland eller kjerneområde. Muslimsk diaspora refererer til muslimer som lever i land der islam ikke er majoritetsreligion, som i Europa og Nord-Amerika.`,
        },
      ],
    },
    {
      id: 're-2-6-ex-7',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        `Religionsdialog og utdanning nevnes som viktige virkemidler mot fordommer og for integrering. Diskuter hvordan skolen kan bidra til gjensidig forståelse mellom elever med ulik religiøs bakgrunn. Bruk eksempler fra egen erfaring og fra teksten.`,
      exercises: [],
    },
    {
      id: 're-2-6-ex-8',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        `Hva menes med religionsfrihet, og hvilke spenninger kan oppstå mellom religionsfrihet og andre rettigheter eller verdier i et demokratisk samfunn? Diskuter med konkrete eksempler.`,
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
        `Kristendom og islam er verdens to største religioner, med til sammen over fire milliarder tilhengere. Begge tilhører de abrahamittiske religionene og deler felles røtter i den jødiske tradisjonen. De har mange likheter – monoteisme, vekt på etikk og rettferdighet, tro på en endelig dom – men også vesentlige teologiske forskjeller. I dette kapitlet sammenligner vi de to religionene systematisk og ser på hvordan dialog mellom kristendom og islam kan fremme gjensidig forståelse.\n\nSammenligning av religioner er en krevende disiplin som forutsetter respekt for begge tradisjonene og en vilje til å forstå dem på deres egne premisser. Det er viktig å unngå å bruke den ene religionen som målestokk for den andre – begge tradisjonene har sin egen indre logikk og sammenheng. Samtidig kan sammenligning avdekke både overraskende likheter og avgjørende forskjeller som beriker vår forståelse av begge religionene.`,
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
      id: 're-2-7-def-3',
      type: 'definition',
      title: 'Eskatologi (endetidslære)',
      content:
        `Eskatologi (fra gresk eschatos, «siste») er læren om de siste ting – døden, dommen, himmelen og helvete. Både kristendom og islam har omfattende eskatologier. I kristendommen forventes Jesu gjenkomst, oppstandelsen av de døde, den endelige dommen og etableringen av Guds rike. I islam forventes dommens dag (yawm al-qiyama), der alle mennesker stilles til ansvar, og en tydelig todeling mellom paradis (janna) og helvete (jahannam). Begge religionene understreker at livet på jorden har konsekvenser for evigheten.`,
    },
    {
      id: 're-2-7-text-1b',
      type: 'text',
      title: 'Felles profetarv og ulike tolkninger',
      content:
        `Et fascinerende aspekt ved forholdet mellom kristendom og islam er at de deler mange av de samme bibelske fortellingene, men tolker dem forskjellig. Abraham (Ibrahim) er kanskje det tydeligste eksempelet. I jødisk og kristen tradisjon er Abraham stamfar til israelittene gjennom sin sønn Isak. I islamsk tradisjon er Ibrahim en av de største profetene, og den arabiske tradisjonen knyttes til hans sønn Ismail. Koranen forteller at Ibrahim og Ismail sammen bygde Kabaen i Mekka – islams helligste sted.\n\nMoses (Musa) er en viktig profet i begge tradisjoner. I kristendommen forstås Moses som lovgiveren som mottok De ti bud og ledet israelittene ut av Egypt. I Koranen er Musa en av de mest omtalte profetene, nevnt over 130 ganger, og hans historie fortelles med mange av de samme elementene som i Bibelen.\n\nJesus (Isa) er som nevnt den mest markante forskjellen: guddommelig Frelser i kristendommen, menneskelig profet i islam. Men selv her finnes det likheter – begge tradisjonene anerkjenner hans jomfrufødsel, hans mirakler og hans spesielle status. I islamsk tradisjon vil Isa vende tilbake ved tidens ende for å bekjempe ondskapen, noe som har paralleller til den kristne forventningen om Jesu gjenkomst.\n\nDisse felles fortellingene er både et grunnlag for dialog og en kilde til spenning, fordi de tolkes forskjellig i de to tradisjonene.`,
    },
    {
      id: 're-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Abraham i Bibelen og Koranen',
      content:
        `Abraham/Ibrahim er en sentral skikkelse i begge tradisjoner. Sammenlign disse to tekstene:\n\n**Bibelen (1. Mosebok 22,1–2)**: «Noen tid etter dette satte Gud Abraham på prøve. Han sa til ham: Abraham! Han svarte: Her er jeg. Da sa Gud: Ta Isak, din eneste sønn, ham du elsker, og dra til Moria-landet! Der skal du ofre ham som brennoffer på et av fjellene som jeg vil vise deg.»\n\n**Koranen (37:102–107)**: «Da gutten var blitt gammel nok til å vandre med [Ibrahim], sa han: 'Min kjære sønn, jeg har sett i drømme at jeg ofrer deg. Hva mener du?' Han sa: 'Far, gjør som du er befalt. Du vil, om Gud vil, finne meg tålmodig.' Da begge hadde underkastet seg, og han la sønnen ned (...) ropte Vi: 'Ibrahim! Du har oppfylt drømmesynet.' (...) Vi løskjøpte ham med et storslått offerdyr.»\n\nLegg merke til at Koranen ikke navngir sønnen som skal ofres (de fleste muslimske lærde mener det er Ismail), mens Bibelen spesifiserer at det er Isak. Begge fortellingene handler om troens lydighet og Guds barmhjertighet, men de ulike tolkningene reflekterer de to tradisjonenes ulike selvforståelse.`,
    },
    {
      id: 're-2-7-ex-1b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hvilken profet nevnes flest ganger i Koranen?',
      exercises: [
        {
          id: 're-2-7-ex-1b-mc',
          type: 'multiple-choice' as const,
          task: 'Hvilken profet nevnes flest ganger i Koranen?',
          options: [
            { id: 'a', text: 'Moses (Musa)', isCorrect: true },
            { id: 'b', text: 'Jesus (Isa)', isCorrect: false },
            { id: 'c', text: 'Abraham (Ibrahim)', isCorrect: false },
            { id: 'd', text: 'Muhammad', isCorrect: false },
          ],
          solution: `Moses (Musa) er den profeten som nevnes flest ganger i Koranen – over 130 ganger. Hans historie, fra fødselen i Egypt til utledelsen av israelittene, fortelles utførlig. Muhammad nevnes relativt sjeldent ved navn i Koranen (bare fire ganger direkte).`,
        },
      ],
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
      id: 're-2-7-def-4',
      type: 'definition',
      title: 'Inkarnasjon og profetologi',
      content:
        `Inkarnasjon (latin: incarnatio, «kjødspåtagelse») er den kristne læren om at Gud ble menneske i Jesus Kristus. Ifølge kristen teologi tok Guds evige Sønn menneskelig natur for å frelse menneskeheten – dette er det mest grunnleggende i kristen tro. Islam avviser inkarnasjonen og hevder at Gud er absolutt transcendent – hinsides menneskets natur. I stedet vektlegger islam profetologi – læren om profetene som Guds sendebud. Profetene er mennesker utvalgt av Gud til å formidle hans vilje, ikke guddommelige vesener.`,
    },
    {
      id: 're-2-7-text-2b',
      type: 'text',
      title: 'Frelse og fortjeneste: ulike veier til Gud',
      content:
        `En av de mest grunnleggende teologiske forskjellene mellom kristendom og islam gjelder frelsesforståelsen – spørsmålet om hvordan menneskets forhold til Gud ordnes.\n\nI kristen teologi er syndefallet – Adams og Evas ulydighet i Edens hage – utgangspunktet. Ifølge den kristne forståelsen (særlig i vestlig kristendom, preget av Augustin) medførte syndefallet en radikal skade på menneskenaturen: arvesynden. Mennesket er ute av stand til å frelse seg selv og er helt avhengig av Guds nåde, gitt gjennom Jesus Kristus. I protestantisk teologi er dette formulert som «sola gratia» (nåden alene) og «sola fide» (troen alene). Katolsk teologi vektlegger også nåden, men gir mer rom for menneskets samarbeid med nåden gjennom gode gjerninger og sakramenter.\n\nI islamsk teologi finnes det ingen lære om arvesynd. Koranen forteller at Adam og Eva (Hawwa) syndet i Edens hage, men at Gud tilga dem da de angret. Hvert menneske fødes i en tilstand av renhet (fitra) og er ansvarlig for sine egne handlinger. Frelse i islam handler om å underkaste seg Guds vilje, følge Hans påbud og gjøre gode gjerninger. På dommens dag veies den enkeltes gode og onde handlinger. Guds barmhjertighet (rahma) er avgjørende – ingen fortjener paradis av seg selv, men Guds barmhjertighet overgår Hans vrede.\n\nDisse forskjellige perspektivene på synd, nåde og frelse preger de to religionenes spiritualitet, etikk og gudstjenesteliv på grunnleggende måter.`,
    },
    {
      id: 're-2-7-example-2',
      type: 'example',
      title: 'Eksempel: Bønnepraksis – sammenligning',
      content:
        `Bønn er sentralt i begge religioner, men praktiseres på ulike måter:\n\n**Kristen bønn**:\n- Ingen fastsatte tidspunkter (bortsett fra i klostertradisjoner som tidebønnene)\n- Kan bes stående, knelende, sittende eller liggende\n- Bes vanligvis i Jesu navn og avsluttes med «amen»\n- Inneholder lovprisning, takk, bekjennelse og forbønn\n- Fadervår er den mest sentrale bønnen, gitt av Jesus selv\n- Fellesbønn i gudstjenesten, men også personlig, spontan bønn\n\n**Islamsk bønn (salat)**:\n- Fem fastsatte tidspunkter daglig (fajr, dhuhr, asr, maghrib, isha)\n- Bestemt fysisk mønster med stående, bøyende og knelende stillinger\n- Vendt mot Mekka (qibla-retningen)\n- Inneholder resitasjon av Koranvers (alltid på arabisk)\n- Rituell renselse (wudu) kreves før bønnen\n- Fredagsbønnen (jumu'a) er den viktigste fellesbønnen\n\nTil tross for disse forskjellene deler begge tradisjonene overbevisningen om at bønn er et essensielt uttrykk for forholdet mellom menneske og Gud.`,
    },
    {
      id: 're-2-7-ex-2b',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva er den største forskjellen mellom kristen og islamsk forståelse av synd og frelse?',
      exercises: [
        {
          id: 're-2-7-ex-2b-mc',
          type: 'multiple-choice' as const,
          task: 'Hva er den største forskjellen mellom kristen og islamsk forståelse av synd og frelse?',
          options: [
            { id: 'a', text: 'Kristendommen lærer arvesynd, islam lærer at mennesket fødes rent', isCorrect: true },
            { id: 'b', text: 'Islam tror på dommens dag, kristendommen gjør det ikke', isCorrect: false },
            { id: 'c', text: 'Kristendommen vektlegger gjerninger, islam vektlegger tro', isCorrect: false },
            { id: 'd', text: 'Det er ingen vesentlig forskjell', isCorrect: false },
          ],
          solution: `Kristendommen (særlig vestlig) lærer om arvesynd – at alle mennesker fødes med en skadet natur etter Adams fall. Islam avviser arvesynd og lærer at hvert menneske fødes i en tilstand av renhet (fitra). Begge tradisjonene tror på dommens dag, men de forstår menneskets utgangspunkt og frelsesvei forskjellig.`,
        },
      ],
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
      id: 're-2-7-text-3b',
      type: 'text',
      title: 'Hellige steder og pilegrimstradisjon',
      content:
        `Både kristendom og islam har sterke tradisjoner for hellige steder og pilegrimsferd, og flere steder er viktige for begge religioner.\n\nJerusalem er kanskje det tydeligste eksempelet. For kristne er Jerusalem stedet der Jesus ble korsfestet og gikk ut av graven – Gravkirken (Den hellige gravs kirke) er det helligste stedet i kristendommen. For muslimer er Jerusalem (al-Quds, «den hellige») den tredje helligste byen etter Mekka og Medina. Al-Aqsa-moskeen og Klippedomen på Tempelhøyden er viktige islamske helligdommer. Ifølge islamsk tradisjon var det fra denne klippen Muhammad ble tatt opp til himmelen under sin nattreise (al-isra wa-l-miraj).\n\nAndre viktige kristne hellige steder inkluderer Betlehem (Jesu fødested), Nasaret (Jesu oppvekststed), Roma (Peterskirken og Vatikanet) og Konstantinopel/Istanbul (Hagia Sofia, som har vært både kirke og moske). For islam er Mekka (med Kabaen) det helligste stedet, etterfulgt av Medina (der Muhammads moske og grav er) og Jerusalem.\n\nPilegrimsferd er en viktig praksis i begge religioner. Hajj – pilegrimsreisen til Mekka – er en av islams fem søyler. I kristendommen er pilegrimsferd ikke en plikt, men en utbredt fromhetspraksis. Santiago de Compostela i Spania, Lourdes i Frankrike og Jerusalem er blant de mest besøkte kristne pilegrimsmålene.`,
    },
    {
      id: 're-2-7-def-5',
      type: 'definition',
      title: 'Interreligiøs dialog',
      content:
        `Interreligiøs dialog er møter og samtaler mellom mennesker fra ulike religiøse tradisjoner med mål om gjensidig forståelse, respekt og samarbeid. Dialogen kan foregå på flere nivåer: teologisk dialog mellom lærde og eksperter; livsdialog der mennesker med ulik tro deler sine erfaringer; praktisk samarbeid om felles utfordringer som fattigdom, miljø og fred; og åndelig dialog der deltakere deler sine åndelige erfaringer. Interreligiøs dialog forutsetter ikke enighet, men vilje til å lytte og lære.`,
    },
    {
      id: 're-2-7-example-3',
      type: 'example',
      title: 'Primærkilde: A Common Word Between Us and You (2007)',
      content:
        `«A Common Word Between Us and You» er et åpent brev fra 138 fremstående muslimske lærde til ledere for kristne kirker verden over, publisert i 2007. Brevet peker på kjærlighet til Gud og kjærlighet til nesten som felles grunnlag for de to religionene:\n\n«Muslimer og kristne utgjør til sammen over 55 prosent av verdens befolkning. (...) Uten fred og rettferdighet mellom disse to religiøse fellesskapene kan det ikke bli meningsfull fred i verden. (...) Grunnlaget for denne freden og den gjensidige forståelsen finnes allerede som en del av de mest grunnleggende prinsippene i begge religionene: kjærlighet til den Ene Gud og kjærlighet til nesten.»\n\nBrevet utløste en omfattende dialogprosess og regnes som et av de viktigste dokumentene i moderne kristen-muslimsk dialog. Det førte til etableringen av faste dialogfora ved flere universiteter og religiøse institusjoner verden over.`,
    },
    {
      id: 're-2-7-ex-3b',
      type: 'exercise',
      title: 'Oppgave',
      content:
        `Jerusalem er hellig for både kristne og muslimer. Gjør rede for hva som gjør byen hellig for hver av de to religionene, og diskuter utfordringer knyttet til at ulike religioner deler hellige steder.`,
      exercises: [],
    },
    {
      id: 're-2-7-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        `Kristendom og islam er to nært beslektede religioner med felles abrahamittiske røtter. De deler troen på én Gud, anerkjenner mange av de samme profetene (Abraham, Moses, Jesus), vektlegger etikk og rettferdighet, og har forestillinger om en endelig dom. Begge har rike tradisjoner for bønn, faste, pilegrimsferd og veldedighet. Hellige steder som Jerusalem er viktige for begge religioner.\n\nSamtidig finnes det vesentlige forskjeller. Den mest grunnleggende gjelder synet på Jesus: guddommelig Kristus som døde for menneskets frelse i kristendommen, versus menneskelig profet med høy status i islam. Gudsbildet skiller seg – treenigheten i kristendommen versus tawhid (Guds absolutte enhet) i islam. Frelsesforståelsen er forskjellig: kristendommen vektlegger nåden og Jesu soningsdød, islam vektlegger underkastelse under Guds vilje og balansen mellom tro og gjerninger. Menneskesynet skiller seg gjennom ulike syn på arvesynd.\n\nGjennom historien har forholdet mellom de to religionene vekslet mellom konflikt, sameksistens og gjensidig påvirkning. I vår tid er interreligiøs dialog – som «A Common Word»-initiativet – et viktig verktøy for gjensidig forståelse og fredelig sameksistens i flerkulturelle samfunn. Kunnskap om både likheter og forskjeller er avgjørende for en meningsfull dialog.`,
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
    {
      id: 're-2-7-ex-7',
      type: 'exercise',
      title: 'Flervalgsoppgave',
      content: 'Hva er den kristne læren om inkarnasjon?',
      exercises: [
        {
          id: 're-2-7-ex-7-mc',
          type: 'multiple-choice' as const,
          task: 'Hva er den kristne læren om inkarnasjon?',
          options: [
            { id: 'a', text: 'At Gud ble menneske i Jesus Kristus', isCorrect: true },
            { id: 'b', text: 'At mennesket kan bli guddommelig gjennom bønn', isCorrect: false },
            { id: 'c', text: `At Guds ord ble nedskrevet i Bibelen`, isCorrect: false },
            { id: 'd', text: 'At englene formidler Guds vilje til profetene', isCorrect: false },
          ],
          solution: `Inkarnasjonen er den kristne læren om at Gud ble menneske i Jesus Kristus. Begrepet kommer fra latin «incarnatio» (kjødspåtagelse). Ifølge kristen teologi tok Guds evige Sønn menneskelig natur for å frelse menneskeheten. Islam avviser inkarnasjonen og hevder at Gud er absolutt transcendent.`,
        },
      ],
    },
    {
      id: 're-2-7-ex-8',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        `Sammenlign bønnepraksis i kristendom og islam. Hva er de viktigste likhetene og forskjellene? Diskuter hva bønnens form og innhold sier om de to religionenes gudsbilde.`,
      exercises: [],
    },
    {
      id: 're-2-7-ex-9',
      type: 'exercise',
      title: 'Samleoppgave',
      content:
        `Gjør rede for ulike frelsesforståelser i kristendom og islam. Hvordan påvirker disse forskjellene de troendes religiøse praksis og livsholdning? Bruk konkrete eksempler.`,
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
