/**
 * Norsk VG1 - Narrative versjoner Del 5 (Kapittel 4.1, 4.2, 4.3, 4.4, 4.5)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Hovedfil: textbook-content-norsk-vg1-narrativ.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1 NARRATIV: Sprak og identitet
// ============================================================================

export const CHAPTER_NORSK_VG1_4_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-4-1-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '4.1',
  title: 'Sprak og identitet',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hvordan spraket ditt forteller hvem du er - og hvordan du tilpasser deg ulike situasjoner.',
  estimatedMinutes: 40,
  competenceGoals: [
    'reflektere over sammenhengen mellom sprak, kultur og identitet',
  ],
  linkedChapterId: 'norsk-vg1-4-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-4-1-n-intro',
      type: 'text',
      content: `## Du er det du snakker

Har du noen gang tenkt over at maten du snakker pa forteller en hel historie om hvem du er? Nar du apner munnen, avslorer du ikke bare hva du tenker, men ogsa hvor du kommer fra, hvem du omgas, og kanskje til og med hva du drommer om.

Tenk deg at du treffer noen for forste gang. For de har sagt et eneste innholdsrikt ord, har du allerede gjort deg opp en mening. Er det en tronder? En bergenser? Noen fra Oslo ost eller vest? Snakker de ungdommelig eller voksent? Akademisk eller folkelig? Alle disse signalene far vi fra sprak, og vi sender dem selv hele tiden uten a tenke over det.

Men her er det virkelig fascinerende: Du snakker ikke likt hele tiden. Tenk etter. Hvordan snakker du med vennene dine pa Snapchat? Og hvordan snakker du med laereren i et muntlig fremlegg? Med bestemor? Med en fremmed pa gata? Du tilpasser deg hele tiden, og det er ikke noe falskt eller kunstig ved det. Det er en superkraft alle mennesker har. Det kalles kodeveksling, og det er beviset pa at sprak og identitet henger uloserlig sammen.

I dette kapittelet skal vi utforske denne koblingen. Vi skal se pa dialekter, sosiolekter og idiolekter. Vi skal forstå hvorfor sprak kan gi makt, og hvorfor holdninger til ulike mater a snakke pa sier mer om oss enn om dem vi dommer.`,
    },

    // ========== SEKSJON 1: Dialekt - hvor du kommer fra ==========
    {
      id: 'norsk-vg1-4-1-n-section1',
      type: 'text',
      content: `## Dialekt - spraket som forteller hvor du kommer fra

Norge er et lite land med mange dialekter. I motsetning til mange andre land, der folk forsoker a snakke mest mulig likt et standardsprak, har vi i Norge en sterk tradisjon for a bruke dialekt i nesten alle sammenhenger. En tronder kan lese nyheter pa TV. En nordlending kan holde foredrag pa universitetet. En bergenser kan vaere statsminister. Dette er faktisk ganske uvanlig i verdenssammenheng.

Vi deler gjerne norske dialekter inn i fire hoveddialektomrader. Ostnorsk strekker seg over Ostlandet og kjennetegnes av tjukk l og retroflekser, de lydene som oppstar nar r smoyer sammen med d, t, n eller l. Vestnorsk finner vi langs kysten fra Rogaland til More, med sterke diftonger og ofte mer melodios uttale. Trondersk har sin palatalisering, de myke lydene som gjor at "ball" blir "ballj" og "mann" blir "mannj", pluss apokope, der endelser faller bort. Nordnorsk, som strekker seg fra Helgeland til Finnmark, har sine helt egne trekk med vokalutjevning og spesielle ordformer.

Men dialekt handler om mer enn geografi. Den forteller om historie. De spraklige grensene vi ser i dag, gjenspeiler ofte gamle kommunikasjonsmoinstre. Folk som bodde i samme dal, som handlet pa samme marked, som giftet seg med hverandre, utviklet lignende sprak. Fjell og fjorder skapte naturlige barrierer som gjorde at dialektene ble forskjellige.

Og sa er det folelsene. For mange er dialekten tett knyttet til identitet, til minner om oppvekst og familie. A snakke dialekt er a baere med seg hjemstedet, uansett hvor i verden du befinner deg.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner trondersk dialekt?',
        options: [
          { id: 'a', text: 'Tjukk l og retroflekser', isCorrect: false },
          { id: 'b', text: 'Palatalisering og apokope', isCorrect: true },
          { id: 'c', text: 'Sterke diftonger og melodios uttale', isCorrect: false },
          { id: 'd', text: 'Vokalutjevning og spesielle ordformer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Trondersk kjennetegnes av palatalisering, der lyder blir "myke" (ball blir ballj, mann blir mannj), og apokope, der endelser faller bort. Dette skaper den karakteristiske tronderske klangen.',
      },
    },

    // ========== SEKSJON 2: Sosiolekt - hvem du omgas ==========
    {
      id: 'norsk-vg1-4-1-n-section2',
      type: 'text',
      content: `## Sosiolekt - spraket som forteller hvem du omgas

Mens dialekten forteller hvor du kommer fra geografisk, forteller sosiolekten noe om din sosiale bakgrunn og tilhorighet. Sosiolekt handler om hvordan sprak varierer mellom ulike grupper i samfunnet, ikke basert pa geografi, men pa faktorer som alder, utdanning, yrke og sosial klasse.

Tenk pa forskjellen mellom hvordan en advokat snakker og hvordan en bygningsarbeider snakker. Det handler ikke om at den ene snakker "bedre" enn den andre, men om at de har utviklet ulike mater a uttrykke seg pa, tilpasset sine miljoer og behov. Advokaten bruker kanskje mer formelt sprak, lengre setninger og flere fagtermer. Bygningsarbeideren bruker kanskje mer direkte sprak, flere slanguttrykk og et annet ordforrad.

Alder er kanskje den mest synlige faktoren. Ungdomssprak skiller seg tydelig fra voksent sprak. Ord som "cringe", "vansen" eller "no cap" kan vaere helt uforstaelige for eldre generasjoner, mens ungdom bruker dem daglig. Men dette er ikke nytt. Hver generasjon har hatt sitt eget ungdomssprak, sine egne uttrykk som de voksne ikke forstod.

I flerkulturelle byer har det dessuten vokst fram nye sprakvarieteter, ofte kalt kebabnorsk eller multietnolekt. Her blandes norsk med elementer fra ulike innvandrerspraak, og resultatet er en kreativ sprakform som uttrykker en bestemt identitet: ung, urban, flerkulturell. Igjen handler det ikke om "daarlig" norsk, men om sprak som uttrykker tilhorighet til en gruppe.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-4-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er en sosiolekt?',
        options: [
          { id: 'a', text: 'En dialekt som bare snakkes i byer', isCorrect: false },
          { id: 'b', text: 'Sprakvariasjoner knyttet til sosiale grupper, ikke geografi', isCorrect: true },
          { id: 'c', text: 'Et skriftsprak som brukes i akademiske tekster', isCorrect: false },
          { id: 'd', text: 'En dialekt som er i ferd med a do ut', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Sosiolekt er sprakvariasjoner som er knyttet til sosiale faktorer som alder, utdanning, yrke og sosial klasse, i motsetning til dialekt som er geografisk bestemt.',
      },
    },

    // ========== SEKSJON 3: Idiolekt og kodeveksling ==========
    {
      id: 'norsk-vg1-4-1-n-section3',
      type: 'text',
      content: `## Din personlige sprakstil - og kunsten a tilpasse seg

Alle har en idiolekt. Det er din helt personlige mate a snakke pa, en unik kombinasjon av dialekt, sosiolekt og individuelle trekk. Kanskje har du et spesielt ord du bruker mye, en maanere, eller en karakteristisk intonasjon. Idiolekten din er like unik som fingeravtrykket ditt.

Men sa kommer det virkelig interessante: Du endrer idiolekten din hele tiden. Dette kalles kodeveksling, og det er noe alle mennesker gjor, mer eller mindre bevisst. Nar du snakker med laereren din, velger du sannsynligvis et mer formelt sprak enn nar du chatter med vennene dine. Nar du er hjemme hos besteforeldrene dine, dropper du kanskje slangen og bruker mer tradisjonelle uttrykk. Nar du er pa jobbintervju, skjerper du deg spraklig.

Er dette falskt? Absolutt ikke. Det er spraklig kompetanse. Det viser at du forstar at ulike situasjoner krever ulike tilnaerminger. En person som snakker akkurat likt i alle situasjoner, viser ikke autentisitet, men manglende sosial bevissthet.

Kodeveksling kan ogsa vaere mer dramatisk. Flerspraklige personer veksler ofte mellom sprak i samme samtale, kanskje norsk med foreldrene men engelsk nar de snakker om dataspill. Dette er ikke et tegn pa forvirring, men pa spraklig rikdom. Hjernen jonglerer flere systemer og velger det som passer best i oyeblikket.

Tenk pa din egen kodeveksling. Hvordan snakker du ulikt i ulike situasjoner? Dette er ikke noe du bor skamme deg over. Det er et bevis pa at du er en dyktig kommunikator.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-4-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva betyr kodeveksling?',
        options: [
          { id: 'a', text: 'A bytte mellom bokmal og nynorsk i samme tekst', isCorrect: false },
          { id: 'b', text: 'A endre dialekten sin permanent nar man flytter', isCorrect: false },
          { id: 'c', text: 'A tilpasse spraket sitt til ulike situasjoner og samtalepartnere', isCorrect: true },
          { id: 'd', text: 'A oversette fra et sprak til et annet', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Kodeveksling er a tilpasse spraket sitt til ulike situasjoner og samtalepartnere. Det er en naturlig del av spraklig kompetanse og viser evne til sosial tilpasning.',
      },
    },

    // ========== SEKSJON 4: Sprak og makt ==========
    {
      id: 'norsk-vg1-4-1-n-section4',
      type: 'text',
      content: `## Sprakets skjulte maktspill

Her kommer vi til noe viktig: Sprak er aldri noytral. Det er alltid knyttet til makt. Noen mater a snakke pa har hoyere status enn andre, og dette har konsekvenser for mennesker i det virkelige liv.

Tenk pa spraakholdninger. Nar du horer noen snakke, gjor du deg automatisk opp en mening om dem. Forskning viser at nordmenn ofte assosierer ostlandsk med noytraltiet og intelligens, bergensk med selvsikkerhet og arroganse, og nordnorsk med varme og hjerrtelikhet. Men er disse assosiasjonene sanne? Selvfolgelig ikke. De er stereotypier, fordommer, forutinntatthet. Likevel pavirker de hvordan vi behandler mennesker.

I jobbintervjuer, i rettssaler, i klasserom, overalt der vi vurderer andre, spiller spraaholdninger inn. En person med "feil" dialekt eller sosiolekt kan oppleve a bli tatt mindre seriost, selv om det de sier er like klokt som det noen med "riktig" sprak sier. Dette er spraklig diskriminering, og det skjer hele tiden, ofte uten at vi er klar over det selv.

Standardspraket, det spraket som brukes i nyheter, laereboker og offentlige dokumenter, har en spesiell posisjon. Det oppfattes som "noytral" og "korrekt", men det er ogsa et valg. Noen har bestemt at dette skal vaere normen. Og de som vokser opp med et annet sprak hjemme, ma laere seg dette i tillegg, noe som krever ekstra innsats.

Bevissthet om disse mekanismene er forste steg mot a motvirke dem. Nar du merker at du gjor deg opp en mening om noen basert pa maten de snakker pa, stopp opp og spor deg selv: Er dette en fornuftig slutning, eller er det en fordom?`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-4-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er spraakholdninger?',
        options: [
          { id: 'a', text: 'Regler for hvordan man skal skrive korrekt', isCorrect: false },
          { id: 'b', text: 'Holdninger og fordommer knyttet til ulike mater a snakke pa', isCorrect: true },
          { id: 'c', text: 'Fagtermer som brukes i spraakvitenskap', isCorrect: false },
          { id: 'd', text: 'Motivasjon for a laere nye sprak', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Spraakholdninger er holdninger, fordommer og vurderinger vi har til ulike mater a snakke pa. De er ofte ubevisste og kan fore til spraklig diskriminering.',
      },
    },

    // ========== SEKSJON 5: Flerspraklig Norge ==========
    {
      id: 'norsk-vg1-4-1-n-section5',
      type: 'text',
      content: `## Norge - et flerspraklig land

Visste du at det snakkes over 150 sprak i Norge i dag? Vi er et langt mer spraklig mangfoldig land enn mange tror.

Forst har vi de offisielle sprakene. Norsk, med sine to skriftformer bokmal og nynorsk, er selvfolgelig hovedspraket. Men samisk har ogsa offisiell status i deler av landet. Faktisk er det flere samiske sprak: nordsamisk, lulesamisk og sorsamisk. Disse er ikke dialekter av hverandre, men egne sprak, like forskjellige som norsk og svensk.

Sa har vi de nasjonale minoritetssprakene: kvensk, som er beslektet med finsk og snakkes i Nord-Norge; romani, spraket til romanifolket; og romanes, spraket til romfolk. Disse sprakene har blitt undertrykt gjennom historien, men har na formal beskyttelse.

Norsk tegnsprak er et fullverdig sprak med egen grammatikk, brukt av dove og hoerselshemmede. Det er ikke bare "norsk med hendene", men et helt eget spraaksystem.

Og sa har vi alle sprakene som innvandrere har med seg: polsk, arabisk, urdu, somalisk, tyrkisk, vietnamesisk, og mange, mange flere. Disse sprakene beriker det norske samfunnet og gir barn som vokser opp med dem en uvurderlig ressurs: flerspraklig kompetanse.

For a vaere flerspraklig er en fordel, ikke et problem. Forskning viser at flerspraklige barn ofte har bedre kognitive evner, storre kulturell forstaelse, og flere muligheter i arbeidslivet. Sprakmangfold er ikke noe vi bor frykte, men noe vi bor feire.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-4-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilke sprak har offisiell status som minoritetssprak i Norge?',
        options: [
          { id: 'a', text: 'Engelsk, tysk og fransk', isCorrect: false },
          { id: 'b', text: 'Samisk, kvensk, romani og romanes', isCorrect: true },
          { id: 'c', text: 'Svensk, dansk og islandsk', isCorrect: false },
          { id: 'd', text: 'Polsk, arabisk og somalisk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Samisk, kvensk, romani og romanes har offisiell status som minoritetssprak i Norge. I tillegg er norsk tegnsprak anerkjent som et fullverdig sprak.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Sprak forteller hvem du er

Du har na utforsket den tette sammenhengen mellom sprak og identitet. Her er det viktigste a ta med seg:

**Dialekt, sosiolekt og idiolekt:**
Dialekten din forteller hvor du kommer fra geografisk. Sosiolekten forteller noe om din sosiale bakgrunn og tilhorighet. Idiolekten er din helt personlige mate a snakke pa. Til sammen utgjor de din spraklige identitet.

**Kodeveksling:**
Du tilpasser spraket ditt til ulike situasjoner, og det er ikke falskt - det er spraklig kompetanse. Evnen til a veksle mellom ulike sprakstiler er en verdifull ferdighet.

**Sprak og makt:**
Spraakholdninger pavirker hvordan vi behandler mennesker. Noen mater a snakke pa har hoyere status enn andre, og dette kan fore til spraklig diskriminering. Bevissthet er forste steg mot endring.

**Flerspraklig Norge:**
Norge er et spraklig mangfoldig land med mange dialekter, to offisielle skriftsprak, flere minoritetssprak og over 150 innvandrerspraak. Dette mangfoldet er en ressurs.

**Nokkeltermer:**
Dialekt (geografisk variasjon), sosiolekt (sosial variasjon), idiolekt (personlig variasjon), kodeveksling (tilpasning til situasjon), spraakholdninger (fordommer mot sprak), flerspraklioghet (a beherske flere sprak).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2 NARRATIV: Norsk sammenlignet med andre sprak
// ============================================================================

export const CHAPTER_NORSK_VG1_4_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-4-2-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '4.2',
  title: 'Norsk sammenlignet med andre sprak',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag norskens slektninger og forstaa hvorfor du nesten kan snakke med svensker og dansker.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjore rede for utvikling og variasjon i norsk sprak',
    'reflektere over sammenhengen mellom sprak, kultur og identitet',
  ],
  linkedChapterId: 'norsk-vg1-4-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-4-2-n-intro',
      type: 'text',
      content: `## Norsk - en del av en stor familie

Har du noen gang tenkt over hvorfor du nesten kan forstaa svensk? Hvorfor noen engelske ord ligner sa mye pa norske? Eller hvorfor "hus" heter nesten det samme pa norsk, tysk, nederlandsk og engelsk?

Svaret ligger i sprakhistorien. Sprak er som familier. De har forfedre, sosken og fettere. Norsk tilhorer en stor familie som kalles de germanske sprakene, og innenfor denne familien har vi noen spesielt naere slektninger.

Forestill deg et stort slektstre. Helt oppe, for mange tusen ar siden, finner vi et sprak som kalles urgermansk. Ingen vet noyaktig hvordan det lot, for det ble aldri skrevet ned. Men fra dette spraket har alle germanske sprak utviklet seg, som grener pa et tre.

En gren ble til de nordgermanske sprakene, altsaa de skandinaviske. Her finner vi norsk, svensk, dansk, islandsk og faroysk. En annen gren ble til de vestgermanske sprakene: engelsk, tysk, nederlandsk og frisisk. Det fantes ogsa en ostgermansk gren, men disse sprakene, som gotisk, har dodd ut for lenge siden.

I dette kapittelet skal vi utforske denne sprakfamilien. Vi skal se pa hva som gjor sprakene like og hva som skiller dem. Og vi skal forstaa hvorfor nordmenn har en helt spesiell evne til a forstaa naboene sine.`,
    },

    // ========== SEKSJON 1: Den germanske familien ==========
    {
      id: 'norsk-vg1-4-2-n-section1',
      type: 'text',
      content: `## Sosken og fettere i sprakfamilien

La oss begynne med de naermeste slektningene: de skandinaviske sprakene. Norsk, svensk og dansk er som sosken som vokste opp i samme hus, men flyttet til hver sin leilighet og utviklet sine egne vaner.

De har sa mye til felles at vi kan snakke med hverandre uten a ha laert hverandres sprak formelt. Dette kalles nabosprakforstaelse eller semikommunikasjon, og det er faktisk ganske unikt i verden. Tenk etter: En spanjoler kan ikke bare snakke med en italiener og forvente a bli forstatt, selv om sprakene er beslektet. Men en nordmann kan faktisk snakke norsk med en svenske og bli forstatt, i hvert fall stort sett.

Hvorfor forstar nordmenn ofte svensk og dansk bedre enn svensker og dansker forstar hverandre? Det har flere forklaringer. Norsk ligger spraklig midt imellom de to andre. Svensk og norsk deler mye uttale, mens dansk og norsk deler mye skriftsprak. Dessuten horer vi mer svensk i Norge gjennom musikk og media enn svensker horer norsk. Og kanskje viktigst: nordmenn er vant til mye dialektvariasjon, sa vi er trent i a "tolke" litt annerledes sprak.

Men pass deg for falske venner! Noen ord ser like ut, men betyr helt forskjellige ting. Pa svensk betyr "rolig" morsom, ikke fredelig. "Rar" pa svensk betyr snill, ikke merkelig. Og spor du om "frokost" i Danmark, far du lunsj, ikke morgenmaltid. Disse falske vennene kan skape morsomme, men ogsa pinlige misforstaelser.

Islandsk og faroysk er ogsa nordgermanske, men de har bevart sa mye av det gamle norrone spraket at de er vanskelige a forstaa for oss. De er som eldre sosken som flyttet bort for lenge siden og beholdt de gamle vanene.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken sprakgruppe tilhorer norsk?',
        options: [
          { id: 'a', text: 'Romanske sprak', isCorrect: false },
          { id: 'b', text: 'Slaviske sprak', isCorrect: false },
          { id: 'c', text: 'Nordgermanske (skandinaviske) sprak', isCorrect: true },
          { id: 'd', text: 'Vestgermanske sprak', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Norsk tilhorer de nordgermanske eller skandinaviske sprakene, sammen med svensk, dansk, islandsk og faroysk. Disse stammer alle fra norront.',
      },
    },

    // ========== SEKSJON 2: Norsk og engelsk ==========
    {
      id: 'norsk-vg1-4-2-n-section2',
      type: 'text',
      content: `## Fettere pa tvers av Nordsjoen

Engelsk og norsk er ikke sosken, men de er absolutt i slekt. De tilhorer begge den germanske familien, bare pa forskjellige grener. Og historien om forholdet deres er fascinerende.

La oss starte med det apenbare: mange ord ligner. Hus og house. Mann og man. Fot og foot. Hand og hand. Gron og green. Dette er ikke tilfeldig. Disse ordene er kognater, ord som stammer fra det samme opprinnelige ordet i urgermansk. De har utviklet seg litt forskjellig i hvert sprak, men slektskapet er tydelig.

Men sa blir det mer interessant. For engelsk har faktisk fatt mange ord fra norront, det gamle norske spraket fra vikingtiden. Nar vikingene invaderte England og bosatte seg der, tok de med seg spraket sitt. Ord som "egg", "sky", "window" (fra vindauga, vindoye), og til og med pronomenene "they", "their" og "them" kommer fra norront. Hvis du reiser til Yorkshire eller andre steder i Nord-England, vil du finne mange stedsnavn som ender pa "-by" (som Whitby) eller "-thorpe" (som Cleethorpes). Disse er norrone ord for gard og landsby.

Sa mens vi i dag laaner masse fra engelsk, kan vi faktisk se pa det som a fa tilbake noe av det vi laante ut for tusen ar siden!

Til tross for slektskapet er det ogsa store forskjeller. Engelsk har mistet det grammatiske kjonnet som norsk har. Vi sier "en stol", "ei bok", "et hus", men pa engelsk er alt bare "a chair", "a book", "a house". Engelsk har ogsa et mye mer komplisert verbsystem med alle sine progressive former: "I am reading", "I have been reading". Pa norsk klarer vi oss med enkle "jeg leser" og "jeg har lest".`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-4-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilket av disse engelske ordene stammer fra norront (gammelnosk)?',
        options: [
          { id: 'a', text: 'Computer', isCorrect: false },
          { id: 'b', text: 'Window (fra vindauga)', isCorrect: true },
          { id: 'c', text: 'Telephone', isCorrect: false },
          { id: 'd', text: 'Restaurant', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Window kommer fra det norrone ordet vindauga, som betyr vindoye. Vikingene brakte dette og mange andre ord til engelsk nar de invaderte England.',
      },
    },

    // ========== SEKSJON 3: Laneord gjennom historien ==========
    {
      id: 'norsk-vg1-4-2-n-section3',
      type: 'text',
      content: `## Spraket som lar av naboene

Norsk har aldri vaert et isolert sprak. Gjennom hele historien har vi laant ord fra de folkene vi har hatt kontakt med. Og disse laneordene forteller en historie om norsk kultur og samfunn.

I middelalderen kom hanseatene, tyske kjopmaenn som dominerte handelen i Bergen og andre byer. De brakte med seg et hav av ord: arbeid, billig, handel, flink, prove, straff, snekker, bekjent, og mange flere. Faktisk er det anslatt at rundt 30 prosent av det norske ordforradet har tysk opprinnelse. Det meste av dette er sa integrert i spraket at vi ikke tenker pa det som "fremmed" i det hele tatt.

Pa 1700- og 1800-tallet var det fransk som var det fine spraket. De som ville vaere elegante og sofistikerte, brukte franske ord. Derav: elegant, sofistikert, restaurant, garderobe, parfyme, sjafor, balkong. Mange av disse ordene kom via dansk-norsk hoffliv og overklassekultur.

Sa kom det tjuende arhundret og med det amerikansk og britisk kulturpavirkning. Film, rock, jobb, stress, mail, cool, sjekke, date, laptop, podcast, streame. Den engelske pavirkningen har akselerert voldsomt de siste tiaarene, saerlig gjennom teknologi, underholdning og sosiale medier.

Hva skal vi synes om dette? Noen mener at for mange engelske ord truer norsk sprak og identitet. Andre mener at laneord er en naturlig del av sprakutviklingen og at norsk har overlevd tysk og fransk pavirkning, sa det vil nok overleve engelsk ogsa. Spraakradet arbeider med a finne gode norske alternativer til engelske ord, men det er opp til sprakbrukerne, altsaa oss, hvilke ord som faktisk blir brukt.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-4-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilket sprak ga flest laneord til norsk i middelalderen (hansatiden)?',
        options: [
          { id: 'a', text: 'Engelsk', isCorrect: false },
          { id: 'b', text: 'Fransk', isCorrect: false },
          { id: 'c', text: 'Lavtysk (nedertysk)', isCorrect: true },
          { id: 'd', text: 'Latin', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Lavtysk (nedertysk) ga svart mange laneord til norsk i hansatiden (1200-1500). Ord som arbeid, billig, prove, flink og handel kommer fra lavtysk.',
      },
    },

    // ========== SEKSJON 4: Norsk vs. andre sprak ==========
    {
      id: 'norsk-vg1-4-2-n-section4',
      type: 'text',
      content: `## Hva gjor norsk spesielt?

Nar vi sammenligner norsk med andre sprak, oppdager vi bade ting som gjor oss like og ting som gjor oss unike.

La oss ta setningsstruktur. Norsk, som de fleste germanske sprak, folger en subjekt-verb-objekt-rekkefolge i enkle setninger: "Jeg leser en bok" speiler "I read a book". Men norsk har ogsa V2-regelen, som betyr at verbet alltid skal sta pa andre plass i hovedsetninger. "I gar gikk jeg pa kino", ikke "I gar jeg gikk pa kino". Denne regelen deler vi med tysk og nederlandsk, men engelsk har den ikke.

Norsk har tre grammatiske kjonn: hankjonn, hunkjonn og intekjonn. "En bil", "ei bok", "et hus". Svensk har bare to (men med endelsen -et/-en), dansk har to (men bruker dem annerledes), og engelsk har mistet grammatisk kjonn helt. Tysk har tre, som oss, men bruker dem i et langt mer komplisert kasussystem.

Uttalen var er ganske spesiell. Norsk har tonelag eller tonal aksent, der maten vi legger trykk pa ordene faktisk endrer betydningen. "Bonder" (gaardsfolk) og "bonner" (belgfrukten) skrives likt, men uttales med forskjellig melodi. Svensk har dette ogsa, men pa en litt annen mate. Dansk har til gengield mistet det og fatt "stot" i stedet.

Og sa har vi selvfolgelig det mest unike ved norsk: vi har to offisielle skriftsprak, bokmal og nynorsk. Det finnes ingen andre land i verden som har to sa naert beslektede, men likevel distinkte skriftsprak med full likestilling. Sveits har flere sprak, men de er helt forskjellige fra hverandre.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-4-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er V2-regelen i norsk?',
        options: [
          { id: 'a', text: 'At verbet alltid star sist i setningen', isCorrect: false },
          { id: 'b', text: 'At verbet alltid star pa andre plass i hovedsetninger', isCorrect: true },
          { id: 'c', text: 'At setninger alltid har to verb', isCorrect: false },
          { id: 'd', text: 'At verb alltid boyes i to former', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'V2-regelen betyr at det finite verbet alltid star pa andre plass i hovedsetninger. "I gar gikk jeg...", ikke "I gar jeg gikk...". Denne regelen deler norsk med tysk og nederlandsk.',
      },
    },

    // ========== SEKSJON 5: Flerspraklighetens verdi ==========
    {
      id: 'norsk-vg1-4-2-n-section5',
      type: 'text',
      content: `## Hvorfor spraakunnskap er gull verdt

Nar du forstar hvordan norsk forholder seg til andre sprak, apner det seg muligheter. Du kan bruke kunnskapen strategisk nar du laerer nye sprak. Du kan gjenkjenne slektskap og monstre. Du kan sette spraket ditt i et storre perspektiv.

For en nordmann er veien til a forstaa svensk og dansk kort. Med litt bevisst oving kan du utvide din nabosprakforstaelse betydelig. Les svenske aviser, se danske filmer uten tekst, prov a folge med pa skandinaviske samtaler. Du vil bli overrasket over hvor mye du forstar nar du forst tror at du kan.

For en nordmann er ogsa veien til engelsk kortere enn for mange andre. Vi har allerede et slektskap, vi har mange felles ord, og vi har vaert eksponert for engelsk hele livet. Men pass pa de falske vennene: "actual" betyr ikke aktuell, "eventually" betyr ikke eventuelt, og "fabric" betyr ikke fabrikk.

Tysk kan ogsa vaere overraskende tilgjengelig for nordmenn. Grammatikken er riktignok mer komplisert med fire kasus og kompliserte verbregeler, men mange ord ligner, og setningsstrukturen har likheter. "Ich habe ein Haus" ligger ikke sa langt fra "Jeg har et hus".

Og selv sprak som ser helt fremmed ut, kan ha overraskende forbindelser. Mange fagtermer i norsk kommer fra gresk og latin. Forstaar du at "telefon" betyr "fjernstemme" og "mikroskop" betyr "se det lille", blir det lettere a huske. Sprak er aldri helt fremmede nar du laerer a se forbindelsene.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-4-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor forstar nordmenn ofte svensk og dansk bedre enn svensker og dansker forstar hverandre?',
        options: [
          { id: 'a', text: 'Fordi norsk er eldre enn svensk og dansk', isCorrect: false },
          { id: 'b', text: 'Fordi norsk ligger spraklig midt imellom, og nordmenn er vant til dialektvariasjon', isCorrect: true },
          { id: 'c', text: 'Fordi nordmenn laerer svensk og dansk pa skolen', isCorrect: false },
          { id: 'd', text: 'Fordi svensk og dansk er identiske sprak', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Norsk ligger spraklig midt imellom svensk og dansk. I tillegg er nordmenn vant til stor dialektvariasjon, noe som gjor dem flinkere til a "tolke" sprak som er litt annerledes.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Norsk i sprakfamilien

Du har na utforsket norskens plass i den germanske sprakfamilien. Her er det viktigste a huske:

**Den germanske familien:**
Norsk tilhorer de nordgermanske (skandinaviske) sprakene, sammen med svensk, dansk, islandsk og faroysk. Engelsk og tysk er vestgermanske "fettere". Alle stammer fra urgermansk.

**Nabosprakforstaelse:**
Nordmenn kan forstaa svensk og dansk uten formal opplaering. Dette er unikt og skyldes spraklig naerhet. Pass deg for falske venner som "rolig" (svensk: morsom) og "frokost" (dansk: lunsj).

**Historiske laneord:**
Norsk har laant fra tysk (middelalderen), fransk (1700-tallet) og engelsk (1900-tallet til na). Disse laneordene gjenspeiler historiske kontakter og kulturell pavirkning.

**Norskens saertrekk:**
V2-regelen, tre grammatiske kjonn, tonelag, og to offisielle skriftsprak gjor norsk spesielt.

**Nokkelord:**
Kognat (beslektet ord), nabosprakforstaelse (a forstaa naert beslektede sprak), laneord (ord fra andre sprak), nordgermansk/vestgermansk (sprakgrupper), V2-regel (verbet pa andre plass).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.3 NARRATIV: Nynorsk og bokmal
// ============================================================================

export const CHAPTER_NORSK_VG1_4_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-4-3-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '4.3',
  title: 'Nynorsk og bokmal',
  subtitle: 'Narrativ versjon',
  description: 'Forstaa hvorfor Norge har to skriftsprak og laer forskjellene mellom dem.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive tekster pa hovedmal og sidemal',
    'gjore rede for utvikling og variasjon i norsk sprak',
  ],
  linkedChapterId: 'norsk-vg1-4-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-4-3-n-intro',
      type: 'text',
      content: `## To sprak, en nasjon

Norge er det eneste landet i verden med to offisielle skriftsprak som er sa like at alle kan forstaa begge, men likevel forskjellige nok til at vi har egne regler, egne ordboker og egne tradisjoner for hvert av dem.

Hvordan havnet vi her? For a forstaa det, ma vi reise tilbake i tid, til et Norge som nettopp hadde lost seg fra Danmark etter 400 ar i union. I 1814 fikk vi var egen grunnlov, men vi hadde ikke noe eget skriftsprak. Vi skrev dansk, eller dansk-norsk som det kalles, et sprak som var utviklet i Kobenhavn og bar lite preg av hvordan nordmenn faktisk snakket.

To menn med svart forskjellige tilnaerminger ville endre dette. Den ene het Ivar Aasen, en selvlaert sprakforsker fra Sunnmore som reiste landet rundt og samlet dialekter. Han mente at det norske folket fortjente et skriftsprak basert pa sitt eget talemaal, ikke et patvunget dansk. Sa han skapte landsmaal, det vi i dag kaller nynorsk, fra bunnen av.

Den andre strategien var gradvis fornorsking av det eksisterende dansk-norske skriftspraket. Her var det ikke en enkelt person, men mange over tid, som dyttet spraket i norsk retning. Ord ble byttet ut, skrivemater ble endret, og sakte, sakte ble dansk-norsk til riksmaal, som vi i dag kaller bokmal.

I dette kapittelet skal vi se naermere pa begge malformene: historien deres, forskjellene, og ikke minst, hvordan du kan mestre begge.`,
    },

    // ========== SEKSJON 1: Ivar Aasen og nynorskens fodsel ==========
    {
      id: 'norsk-vg1-4-3-n-section1',
      type: 'text',
      content: `## Mannen som skapte et sprak

Ivar Aasen ble fodt i 1813 pa Sunnmore, i en enkel bondegaard. Han hadde minimal formell utdanning, men en enorm nysgjerrighet og vilje til a laere. Som ung mann laerte han seg latin, gresk, fransk og flere andre sprak pa egen haand. Men det var de norske dialektene som fanget hans interesse.

Pa 1840-tallet begynte Aasen sitt store prosjekt. Med stotte fra Det Kongelige Norske Videnskabers Selskab reiste han rundt i Norge og samlet spraklig materiale. Han gikk fra gaard til gaard, snakket med folk, noterte ord og uttrykk, studerte grammatikk og uttale. Dette var systematisk feltarbeid av et slag ingen hadde gjort for ham.

Det Aasen oppdaget var at de norske dialektene, til tross for all sin variasjon, hadde felles trekk som skilte dem fra dansk. De hadde egne ordformer, egne boyingsmonster, egen syntaks. Og disse trekkene, mente Aasen, kunne danne grunnlaget for et genuint norsk skriftsprak.

I 1848 ga han ut "Det norske Folkesprogs Grammatik" og i 1850 "Ordbog over det norske Folkesprog". Sa, i 1853, presenterte han sitt landsmaal, et konstruert skriftsprak basert pa fellestrekkene i de norske dialektene, med saerlig vekt pa vestlandsk og midtlandsk. Det var et radikalt forslag: a gi nordmenn et sprak som faktisk lignet det de snakket.

Reaksjonene var delte. Noen sa i Aasens arbeid en nasjonal oppvakning, en befrielse fra dansk kulturell dominans. Andre mente det var et tilbakeskritt, et kunstig forsok pa a gjenopplive noe som ikke lenger eksisterte. Denne debatten, malstriden, skulle prega norsk kulturliv i generasjoner.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvordan skapte Ivar Aasen nynorsk (landsmaal)?',
        options: [
          { id: 'a', text: 'Han oversatte dansk til norsk ord for ord', isCorrect: false },
          { id: 'b', text: 'Han samlet dialekter fra hele Norge og fant felles trekk', isCorrect: true },
          { id: 'c', text: 'Han kopierte islandsk som var naermere det opprinnelige norske', isCorrect: false },
          { id: 'd', text: 'Han forenklet svensk og tilpasset det norsk uttale', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Ivar Aasen reiste rundt i Norge og samlet dialekter. Han identifiserte felles trekk i de norske dialektene og skapte et skriftsprak basert pa disse fellestrekkene.',
      },
    },

    // ========== SEKSJON 2: Fra dansk-norsk til bokmal ==========
    {
      id: 'norsk-vg1-4-3-n-section2',
      type: 'text',
      content: `## Den langsomme fornorskingen

Mens Aasen bygget sitt sprak fra dialektene, foregikk det en annen prosess: den gradvise fornorskingen av det dansk-norske skriftspraket.

Tenk deg 1814. Vi hadde nettopp fatt var egen grunnlov, men vi skrev fortsatt dansk. Dokumenter, aviser, boker - alt var pa et sprak utviklet i Kobenhavn. Det var det spraket de dannede brukte, det spraket som ble undervist i skolen, det spraket som hadde prestisje.

Men over tid begynte folk a dytte spraket i norsk retning. Forfattere som Henrik Wergeland experimenterte med norske ord og uttrykk. Bjornstjerne Bjornson og Henrik Ibsen skrev stadig mer norsk-klingende tekster. Ord ble byttet ut: "ei" i stedet for "en" (for hunkjormsord), "aa" i stedet for det danske "at".

Pa 1900-tallet kom de store rettskrivningsreformene. I 1907 ble "haard" til "hard", "Steen" til "stein". I 1917 kom enda storre endringer. Og i 1938 forsoykte staten a presse bokmal og nynorsk naermere hverandre gjennom den kontroversielle samnorsk-politikken, som ga valgfrihet mellom radikale og konservative former.

Samnorsk-prosjektet mislyktes. Folk likte ikke at staten blandet seg inn i spraket deres. Konservative bokmalsbrukere protesterte mot former de oppfattet som "for nynorske", og radikale former som "mjolk" og "beina" ble aldri akseptert av flertallet. Etter 1981 har politikken vaert a la sprakbrukerne velge, og bokmal har gradvis vendt tilbake til mer tradisjonelle former.

I dag har bokmal sin plass som det mest brukte skriftspraket i Norge, med omtrent 85-87 prosent av elevene som har det som hovedmaal. Men det er et annet sprak enn det var for 100 ar siden, og det er definitivt norsk, ikke dansk.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-4-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var samnorsk-politikken?',
        options: [
          { id: 'a', text: 'A gjore norsk og svensk til ett sprak', isCorrect: false },
          { id: 'b', text: 'Et forsok pa a smelette bokmal og nynorsk sammen til ett sprak', isCorrect: true },
          { id: 'c', text: 'A innfore et helt nytt tredje sprak', isCorrect: false },
          { id: 'd', text: 'A avskaffe begge malformer og bruke engelsk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Samnorsk var et forsok pa a smeltesammen bokmal og nynorsk ved a innfore valgfrie former fra begge maalformer. Prosjektet var kontroversielt og ble oppgitt etter 1981.',
      },
    },

    // ========== SEKSJON 3: Forskjellene i praksis ==========
    {
      id: 'norsk-vg1-4-3-n-section3',
      type: 'text',
      content: `## Praktiske forskjeller mellom bokmal og nynorsk

Na skal vi se pa de konkrete forskjellene. Nar du forst ser monsteret, er det lettere a huske.

La oss starte med personlige pronomen. Pa bokmal sier vi "jeg", pa nynorsk "eg". "Ikke" blir "ikkje". "Hva" blir "kva". "Hvordan" blir "korleis". "Noe" blir "noko". "Mye" blir "mykje". Disse smaa ordene avslorer umiddelbart hvilken maalform du leser.

Verbene har ogsa klare monstre. Pa nynorsk har vi typisk a-infinitiv: "a kaste", "a lese", "a skrive". I presens far svake verb endelsen -ar: "eg kastar", "eg hoppar". I preteritum far de -a: "eg kasta", "eg hoppa". Sammenlign med bokmal "jeg kaster", "jeg kastet".

Sterke verb er litt mer krevende fordi de har vokalskifte. Pa nynorsk: "a skrive - skriv - skreiv - har skrive". Pa bokmal: "a skrive - skriver - skrev - har skrevet". "A finne - finn - fann - har funne" pa nynorsk, "a finne - finner - fant - har funnet" pa bokmal.

Substantivene boyes ogsa litt forskjellig. Hankjonnsord i bestemt form flertall far -ane pa nynorsk: "bilane", "gutane", "hestane". Pa bokmal blir det -ene: "bilene", "guttene", "hestene". Hunkjonnsord er likere, men nynorsk bruker -ene i bestemt form flertall: "jentene", "dokene".

Adjektiv har samsvarsboyning pa nynorsk: "ein fin bil", "ei fin jente", "eit fint hus". Pa bokmal er det mer valgfrihet, og mange skriver "en fin bil", "en fin jente" uten a markere hunkjonn.

Na tenker du kanskje at dette er mye a huske. Men det gode er at monstrene er konsistente. Nar du forst laerer regelen, gjelder den for mange ord.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-4-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvordan boyes svake verb i preteritum pa nynorsk?',
        options: [
          { id: 'a', text: 'De far endelsen -et (kasta blir kastet)', isCorrect: false },
          { id: 'b', text: 'De far endelsen -a (kastar blir kasta)', isCorrect: true },
          { id: 'c', text: 'De far endelsen -te (kastar blir kaste)', isCorrect: false },
          { id: 'd', text: 'De forblir uendret', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Pa nynorsk far svake verb endelsen -a i preteritum: eg kastar (presens) blir eg kasta (preteritum). Pa bokmal er det typisk -et eller valgfritt -a.',
      },
    },

    // ========== SEKSJON 4: Nynorsk litteratur og kultur ==========
    {
      id: 'norsk-vg1-4-3-n-section4',
      type: 'text',
      content: `## Spraket som ble litteratur

Nynorsk er ikke bare et sprak for skjemaer og laereboker. Det er et sprak med en rik litteraer tradisjon som har gitt Norge noen av sine storste forfattere.

Allerede Ivar Aasen selv var dikter. Hans "Nordmannen" fra 1863 er en nasjonalromantisk hymne som fortsatt synges: "Millom bakkar og berg ut med havet / heve nordmannen funne sin heim." Aasen ville vise at det nye spraket kunne baere poesi, ikke bare grammatikk.

Aasmund Olavsson Vinje var en annen pioner. Hans "Ferdaminni" fra 1861 er en reiseskildring gjennom Norge, skrevet pa et levende, personlig nynorsk. Vinje viste at spraket kunne vaere humoristisk, reflekterende og observant.

Arne Garborg tok nynorsken inn i realismen med romaner som "Bondestudentar" (1883), der han skildret spenningen mellom by og bygd, mellom det moderne og det tradisjonelle. Hans nynorsk er kraftfull og uttrykksfull.

Pa 1900-tallet fikk vi Olav Duun, Tarjei Vesaas, Olav H. Hauge. Vesaas' "Is-slottet" (1963) er en av de mest anerkjente norske romanene, en poetisk skildring av vennskap og tap. Hauges dikt er blant de mest siterte i norsk litteratur.

Og i var egen tid: Jon Fosse, som i 2023 vant Nobelprisen i litteratur. Fosse skriver pa nynorsk, og hans minimalistiske, repetitive stil har gjort ham til en av verdens mest spilte dramatikere. Nobelkomiteen roste hans "innovative skuespill og prosa som gir stemme til det usigelige."

Nynorsk litteratur er ikke en fottnote i norsk kulturhistorie. Den er en sentral del av den.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-4-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilken nynorsk forfatter vant Nobelprisen i litteratur i 2023?',
        options: [
          { id: 'a', text: 'Tarjei Vesaas', isCorrect: false },
          { id: 'b', text: 'Olav H. Hauge', isCorrect: false },
          { id: 'c', text: 'Jon Fosse', isCorrect: true },
          { id: 'd', text: 'Arne Garborg', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Jon Fosse vant Nobelprisen i litteratur i 2023. Han skriver pa nynorsk og er kjent for sin minimalistiske stil i dramatikk og prosa.',
      },
    },

    // ========== SEKSJON 5: Malformene i dag ==========
    {
      id: 'norsk-vg1-4-3-n-section5',
      type: 'text',
      content: `## To sprak, en fremtid?

I dag har omtrent 13 prosent av elevene nynorsk som hovedmaal, og resten har bokmal. Nynorsk er sterkt i Vestland, Rogaland, More og Romsdal, og deler av Viken og Innlandet. Bokmal dominerer i byene og pa Ostlandet.

Alle norske elever laerer begge maalformer. Du har et hovedmaal som du bruker mest, og et sidemaal som du ogsa skal mestre. Dette er en del av det a vaere norsk: a forholde seg til begge tradisjonene.

Maaloven sikrer at begge sprak har rett til a brukes i offentligheten. Statsinstitusjoner skal svare pa den maalformen de mottar brev i. NRK skal ha minst 25 prosent nynorsk. Laereboker skal finnes pa begge maalformer. Dette er spraaklig demokrati i praksis.

Men nynorsk er under press. Urbanisering gjor at faerre vokser opp i nynorskomrader. Digital pavirkning er ofte pa bokmal eller engelsk. Mange opplever nynorsk hovedsakelig som et skolefag, ikke som et levende sprak.

Samtidig finnes det et sterkt nynorskmiljo. Aviser som Dag og Tid, forlag som Samlaget, organisasjoner som Noregs Mallag arbeider for spraket. Unge nynorskforfattere vinner priser. Artister synger pa nynorsk.

Fremtiden for begge maalformer avhenger av sprakbrukerne. Hvert valg du gjor nar du skriver, er med pa a forme hva norsk blir. Det er et ansvar, men ogsa en mulighet.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-4-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva sikrer maalloven?',
        options: [
          { id: 'a', text: 'At alle ma skrive nynorsk', isCorrect: false },
          { id: 'b', text: 'At bokmal og nynorsk har lik rett til bruk i offentligheten', isCorrect: true },
          { id: 'c', text: 'At nynorsk skal fases ut innen 2050', isCorrect: false },
          { id: 'd', text: 'At privatpersoner ma bruke begge maalformer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Maalloven sikrer at bokmal og nynorsk har lik rett til bruk i offentligheten. Offentlige institusjoner skal svare pa den maalformen de mottar henvendelser i.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-4-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Norges to skriftsprak

Du har na utforsket historien og forskjellene mellom bokmal og nynorsk. Her er det viktigste a huske:

**Historien:**
Nynorsk ble skapt av Ivar Aasen pa 1800-tallet, basert pa norske dialekter. Bokmal utviklet seg gradvis fra dansk-norsk gjennom fornorsking. Begge sprak er resultat av nasjonsbygging.

**Hovedforskjeller:**
Pronomen (jeg/eg, ikke/ikkje, hva/kva). Verb (kaster/kastar, kastet/kasta). Substantiv i flertall (bilene/bilane). Adjektiv samsvarsboyning pa nynorsk.

**Nynorsk litteratur:**
Ivar Aasen, Aasmund Olavsson Vinje, Arne Garborg, Tarjei Vesaas, Olav H. Hauge, Jon Fosse. Rik tradisjon fra nasjonalromantikk til nobelprisen.

**I dag:**
Ca. 13% har nynorsk som hovedmaal. Maalloven sikrer likestilling. Alle elever laerer begge maalformer.

**Nokkelbegreper:**
Landsmaal (gammel betegnelse for nynorsk), riksmaal (gammel betegnelse for bokmal), samnorsk (mislykket sammenslaaing), maalstrid (debatten om de to sprakene), sidemaal (den andre maalformen).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.4 NARRATIV: Sprakmangfold i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_4_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-4-4-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '4.4',
  title: 'Sprakmangfold i Norge',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk Norges rike sprakmangfold - fra dialekter til samisk og minoritetssprak.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over spraklig mangfold i Norge',
    'gjore rede for utvikling og variasjon i norsk sprak',
  ],
  linkedChapterId: 'norsk-vg1-4-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-4-4-n-intro',
      type: 'text',
      content: `## Et land av mange stemmer

Lukk oynene og forestill deg lydene i Norge. Du horer kanskje bolgene mot kysten i Bergen. Vinden over vidda i Finnmark. Trafikken i Oslo. Men hor naermere. Hor pa stemmene. Pa sprakene.

En tronder forteller en historie med sin karakteristiske melodi. En same synger en joik pa nordsamisk. En pakistansk-norsk ungdom blander norsk med urdu hjemme. En polsk bygningsarbeider ringer hjem til familien. En dov person samtaler pa norsk tegnsprak.

Dette er det virkelige Norge. Ikke et monolittisk land der alle snakker likt, men et lappeteppe av sprak, dialekter og mater a uttrykke seg pa. Over 150 sprak snakkes i Norge i dag. Vi har urfolkssprak som har vaert her i tusener av ar, minoritetssprak med hundrevis av ars historie, innvandrerspraak som har kommet de siste tiaarene, og selvfolgelig alle de norske dialektene som gjor at en nordlending og en sorlending kan hore helt forskjellige ut selv om begge snakker "norsk".

I dette kapittelet skal vi utforske dette mangfoldet. Vi skal se pa dialektene, urfolkssprakene, minoritetssprakene og det nye spraklige landskapet som innvandring har skapt. For a forstaa Norge i dag, ma vi forstaa alle stemmene som utgjor det norske koret.`,
    },

    // ========== SEKSJON 1: Dialektlandet Norge ==========
    {
      id: 'norsk-vg1-4-4-n-section1',
      type: 'text',
      content: `## Dialektenes rike

Norge er et dialektparadis. Sammenlignet med nabolandene vare har vi en bemerkelsesverdig aksept for dialektbruk i nesten alle sammenhenger. En tronder kan vaere statsminister og snakke trondersk i Stortinget. En bergenser kan lese nyheter pa TV. En nordlending kan foreleser pa universitetet. Dette er ikke selvfolgelig. I mange land ville det vaert utenkelig.

Men hvorfor har vi sa mange dialekter? Geografien spiller en stor rolle. Fjell, fjorder og lange avstander skapte naturlige barrierer som gjorde at sprakutviklingen gikk i ulike retninger i ulike deler av landet. Folk som bodde i samme dal, handlet pa samme marked, giftet seg med hverandre. De utviklet felles sprak. Men naboene pa den andre siden av fjellet utviklet sitt.

De fire hoveddialektomradene er ostnorsk, vestnorsk, trondersk og nordnorsk. Ostnorsk kjennetegnes av tjukk l og retroflekser, de lydene som oppstar nar r smelter sammen med andre lyder. Vestnorsk har sterke diftonger og ofte tydeligere uttale av konsonanter. Trondersk har sin beronte palatalisering der "mann" blir "mannj" og "ball" blir "ballj", pluss apokope der endelser faller bort. Nordnorsk har sine helt egne trekk, varierende fra Helgeland til Finnmark.

Innenfor hvert omrade finnes det enorme variasjoner. Bergensk skiller seg fra stavangerdialekt, som skiller seg fra sognemaalet. Oslomaal er ikke det samme som drobakdialekt. Det finnes faktisk sa mange variasjoner at sprakforskere diskuterer om vi egentlig kan snakke om fire hoveddialektomrader i det hele tatt.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-4-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er de fire hoveddialektomradene i Norge?',
        options: [
          { id: 'a', text: 'Bergensk, oslomaal, trondheimdialekt og nordlandsk', isCorrect: false },
          { id: 'b', text: 'Ostnorsk, vestnorsk, trondersk og nordnorsk', isCorrect: true },
          { id: 'c', text: 'Bokmal, nynorsk, samisk og kvensk', isCorrect: false },
          { id: 'd', text: 'Kystdialekt, innlandsdialekt, fjellmaaal og daalmaal', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'De fire hoveddialektomradene i Norge er ostnorsk, vestnorsk, trondersk og nordnorsk. Hvert omrade har mange underdialekter.',
      },
    },

    // ========== SEKSJON 2: Samene og urfolkssprakene ==========
    {
      id: 'norsk-vg1-4-4-n-section2',
      type: 'text',
      content: `## Spraket som nesten forsvant

For vi kom, var samene her. De er Norges urfolk, med en historie i dette omradet som strekker seg tusenvis av aar tilbake. Og de har sine egne sprak, sprak som naesten ble utslettet av norsk politikk.

Det finnes flere samiske sprak i Norge: nordsamisk, lulesamisk og sorsamisk. Disse er ikke dialekter av hverandre, men egne sprak, sa forskjellige at en nordsame og en sorsame ikke nodvendigvis forstar hverandre. Nordsamisk har flest talere, kanskje 15 000-25 000. Lulesamisk har noen hundre, sorsamisk enda faerre.

Fra omtrent 1850 til 1960-tallet forte den norske staten en aktiv fornorskingspolitikk overfor samene. Barn ble sendt til internatskoler der de ble straffet for a snakke samisk. Foreldrene ble oppfordret til a snakke norsk med barna. Malet var assimilering: samene skulle bli "vanlige nordmenn".

Konsekvensene var katastrofale. Mange mistet spraket sitt helt. Foreldre som selv hadde blitt straffet for a snakke samisk, turte ikke laere det videre til barna sine. En hel generasjon vokste opp uten spraklig forbindelse til sin egen kultur.

I dag arbeides det intenst med revitalisering. Samiske barnehager og skoler, samisk media som NRK Sapmi, spraakkurs for voksne som vil laere spraket de aldri fikk som barn. Det er et kapplop mot tiden. Sorsamisk og lulesamisk er alvorlig truet. Men det er ogsa hap. Unge samer laerer og bruker spraket. Joik og samisk musikk far oppmerksomhet. Spraket lever, selv om det har vart naer doden.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-4-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var fornorskingspolitikken?',
        options: [
          { id: 'a', text: 'En politikk for a fremme nynorsk i skolen', isCorrect: false },
          { id: 'b', text: 'En politikk som undertrykte samisk og andre minoritetssprak for a assimilere minoriteter', isCorrect: true },
          { id: 'c', text: 'En politikk for a gjore dansk til offisielt sprak', isCorrect: false },
          { id: 'd', text: 'En politikk for a fremme dialektbruk i media', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Fornorskingspolitikken (ca. 1850-1960) var en assimileringspolitikk som undertrykte samisk og andre minoritetssprak. Barn ble straffet for a snakke samisk pa skolen.',
      },
    },

    // ========== SEKSJON 3: Andre minoritetssprak ==========
    {
      id: 'norsk-vg1-4-4-n-section3',
      type: 'text',
      content: `## De glemte sprakene

Samene er ikke de eneste med en lang sprakhistorie i Norge. Det finnes flere nasjonale minoritetssprak, sprak som har vaert her i hundrevis av ar, men som ofte har vaert usynlige.

Kvensk er et finsk-beslektet sprak som snakkes i Nord-Norge, saerlig i Troms og Finnmark. Kvenene kom til Norge for flere hundre ar siden, og spraket har vaert i kontinuerlig bruk. Ogsa kvenene ble utsatt for fornorskingspolitikk, og i dag er det kanskje bare noen tusen som snakker spraket. Men det arbeides med revitalisering, og kvensk fikk status som nasjonalt minoritetssprak i 2005.

Romani er spraket til romanifolket, ogsa kalt tatere eller de reisende. De har vaert i Norge i flere hundre ar. Romani har elementer fra mange sprak, inkludert indiske, og er et vitnesbyrd om et folk som har reist gjennom hele Europa. Norske myndigheter behandlet romanifolket brutalt, med tvangssterilisering og tvungen bosetting. Spraket deres overlevde, men er truet.

Romanes er spraket til romfolk, som har en annen historie enn romanifolket. Det er ogsa et indisk-basert sprak, men forskjellig fra romani.

Norsk tegnsprak er ogsa anerkjent som et minoritetssprak. Det er ikke bare "norsk med hendene", men et fullverdig sprak med egen grammatikk, eget ordforraad og egen kultur. For dove er tegnspraket morsmalet, det spraket de tenker, drommer og kommuniserer pa.

Alle disse sprakene er del av norsk mangfold. De forteller historier om folk som har levd her, ofte i skyggen, men likevel med egne tradisjoner, egen kultur, egen identitet.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-4-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er kvensk?',
        options: [
          { id: 'a', text: 'En dialekt fra Vestlandet', isCorrect: false },
          { id: 'b', text: 'Et finsk-beslektet sprak som snakkes i Nord-Norge', isCorrect: true },
          { id: 'c', text: 'Et annet navn pa samisk', isCorrect: false },
          { id: 'd', text: 'Et slangsprak brukt av ungdom i Oslo', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kvensk er et finsk-beslektet sprak som snakkes av kvenene i Nord-Norge. Det har status som nasjonalt minoritetssprak i Norge.',
      },
    },

    // ========== SEKSJON 4: Det nye spraklige landskapet ==========
    {
      id: 'norsk-vg1-4-4-n-section4',
      type: 'text',
      content: `## 150 sprak i ett land

I dag snakkes over 150 sprak i Norge. De fleste av disse er kommet med innvandring de siste tiaarene. Polsk, arabisk, urdu, somalisk, tyrkisk, vietnamesisk, spansk, mandarin, pashto, dari. Hvert sprak representerer en gruppe mennesker som har valgt eller blitt nodt til a bygge et nytt liv her.

For mange innvandrerfamilier er sprakvalget komplisert. Skal de snakke morsmalet hjemme, sa barna beholder tilknytningen til opprinnelseskulturen? Eller skal de satse pa norsk, sa barna far lettere integrering? I praksis ender mange opp med en blanding, der barna blir flerspraklige med norsk som det dominerende spraket, men med morsmalet som en viktig del av identiteten.

I flerkulturelle bydeler i Oslo og andre storbyer har det vokst frem nye sprakvarieteter. Kebabnorsk, eller multietnolekt som sprakforskerne kaller det, er en kreativ blanding av norsk med elementer fra flere innvandrerspraak. Det er ikke "feil norsk", det er en ny varietet med egne regler og monstre. Ungdom som snakker slik, veksler gjerne til standard norsk i andre sammenhenger. Det er kodeveksling i praksis.

Flerspraklioghet er en ressurs, ikke et problem. Forskning viser at barn som vokser opp med flere sprak, ofte har kognitive fordeler. De laerer lettere nye sprak, har storre kulturell forstaelse, og har flere muligheter i arbeidslivet. Det norske samfunnet har mye a vinne pa a verdsette alle sprakene som snakkes her.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-4-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er multietnolekt (kebabnorsk)?',
        options: [
          { id: 'a', text: 'Et eget sprak som har erstattet norsk i byer', isCorrect: false },
          { id: 'b', text: 'En sprakvaritet som blander norsk med elementer fra flere innvandrerspraak', isCorrect: true },
          { id: 'c', text: 'Feil norsk som bor rettes', isCorrect: false },
          { id: 'd', text: 'En dialekt fra kebabrestaurantnaringen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Multietnolekt er en sprakvaritet som har vokst fram i flerkulturelle miljoer, med elementer fra norsk og flere innvandrerspraak. Det er ikke "feil" sprak, men en kreativ varietet med egne monstre.',
      },
    },

    // ========== SEKSJON 5: Spraklige rettigheter ==========
    {
      id: 'norsk-vg1-4-4-n-section5',
      type: 'text',
      content: `## Retten til eget sprak

Sprak er ikke bare et kommunikasjonsverktoy. Det er knyttet til identitet, til kultur, til menneskers grunnleggende rettigheter. Nar et sprak undertrykes, er det mennesker som undertrykes.

Norge har de siste tiaarene utviklet et omfattende spraklig rettighetssystem. Grunnloven slaar fast at "dei samiske folk" har rett til a "utvikle sitt sprak". Sameloven gir samisk offisiell status i samiske forvaltningsomrader, der innbyggerne har rett til a bruke samisk i kontakt med offentlige myndigheter.

Den europeiske pakten om regions- eller minoritetssprak, som Norge har ratifisert, gir beskyttelse til samisk, kvensk, romani og romanes. Sprakloven fra 2021 slaar fast at norsk tegnsprak er et fullverdig sprak.

Men lovverk er ikke nok. Sprak lever bare sa lenge det er mennesker som snakker det. Revitalisering av truede sprak krever ressurser: laerere, laeremateriell, barnehager, skoler, media, kultur. Det krever ogsa holdningsendringer. Vi ma verdsette spraklig mangfold, ikke bare tolerere det.

Hva kan du gjore? Du kan vaere bevisst pa egne spraakholdninger. Du kan utfordre fordommer mot mater a snakke pa som er annerledes enn din egen. Du kan stotte tiltak for sprakbevaring. Og du kan vaere glad for at du lever i et land der sa mange stemmer far synge.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-4-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilke sprak har offisiell beskyttelse som minoritetssprak i Norge?',
        options: [
          { id: 'a', text: 'Bare samisk', isCorrect: false },
          { id: 'b', text: 'Samisk, kvensk, romani og romanes', isCorrect: true },
          { id: 'c', text: 'Alle innvandrerspraak', isCorrect: false },
          { id: 'd', text: 'Bare norsk tegnsprak', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Samisk, kvensk, romani og romanes har beskyttelse som minoritetssprak i Norge gjennom den europeiske pakten. I tillegg er norsk tegnsprak anerkjent som fullverdig sprak.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-4-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Mange sprak, en nasjon

Du har na utforsket det norske sprakmangfoldet i all sin rikdom. Her er det viktigste a huske:

**Dialekter:**
Fire hoveddialektomrader: ostnorsk, vestnorsk, trondersk, nordnorsk. Norge har stor dialektaksept sammenlignet med andre land.

**Samiske sprak:**
Nordsamisk, lulesamisk og sorsamisk er egne sprak, ikke dialekter. Fornorskingspolitikken naesten utslettet dem, men revitaliseringsarbeid pagar.

**Andre minoritetssprak:**
Kvensk (finsk-beslektet), romani (romanifolkets sprak), romanes (romfolkets sprak) og norsk tegnsprak har alle offisiell beskyttelse.

**Det nye mangfoldet:**
Over 150 sprak snakkes i Norge. Multietnolekt er en ny, kreativ sprakvaritet i flerkulturelle miljoer.

**Rettigheter:**
Sprakloven, sameloven og europeiske konvensjoner gir spraklig beskyttelse, men holdningsarbeid er like viktig.

**Nokkelbegreper:**
Dialekt (geografisk variasjon), minoritetssprak (sprak med historisk tilknytning), urfolkssprak (samisk), fornorskingspolitikk (assimilering), revitalisering (gjenoppliving), multietnolekt (flerkulturell varietet).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.5 NARRATIV: Sprak i endring
// ============================================================================

export const CHAPTER_NORSK_VG1_4_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-4-5-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '4.5',
  title: 'Sprak i endring',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hvordan norsk har endret seg gjennom historien og fortsetter a endre seg i dag.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjore rede for utvikling og variasjon i norsk sprak',
  ],
  linkedChapterId: 'norsk-vg1-4-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-4-5-n-intro',
      type: 'text',
      content: `## Spraket som aldri star stille

Har du noen gang lest en gammel tekst og tenkt "dette later rart"? Kanskje en salme fra 1700-tallet, eller et brev fra besteforeldrenes tid. Ordene er annerledes. Setningene har en annen rytme. Det foler seg... gammeldags.

Det er fordi sprak aldri star stille. Det endrer seg hele tiden, sakte men sikkert, generasjon for generasjon. Ordene du bruker i dag, vil kanskje forsvares om 100 ar. Ord som ikke finnes enna, vil vaere selvfolgelige for barnebarna dine. Grammatikken vil forskyve seg. Uttalen vil endres.

Tenk pa det slik: Hvis du kunne reise tilbake til vikingtiden og prove a snakke med folk, ville du nesten ikke forstaa hverandre. Norront, spraket de snakket da, er sa forskjellig fra moderne norsk at det naermest er et fremmedsprak. Og det tok ikke tusener av ar, bare omtrent tusen.

Sprakendring er ikke tilfeldig. Det folger monstre. Det drives av krefter vi kan identifisere: kontakt med andre sprak, samfunnsendringer, teknologisk utvikling, generasjonskonflikter, bevisst politikk. Nar vi forstar disse kreftene, kan vi ogsa forstaa vart eget sprak bedre, bade hvor det kommer fra og hvor det kanskje er pa vei.

I dette kapittelet skal vi utforske sprak i endring. Vi skal se pa hvordan norsk har endret seg gjennom historien, og vi skal se pa endringene som skjer akkurat na, mens du leser dette.`,
    },

    // ========== SEKSJON 1: Typer sprakendring ==========
    {
      id: 'norsk-vg1-4-5-n-section1',
      type: 'text',
      content: `## Hvordan sprak forandres

Sprakendring skjer pa flere nivaer samtidig. La oss se pa de viktigste typene.

Ordforraadsendring er den mest synlige. Nye ord kommer til, gamle ord forsvinner. For hundre ar siden fantes ikke ord som "datamaskin", "internett", "selfie" eller "streame". De hadde ingen mening fordi fenomenene de beskriver ikke fantes. Samtidig har ord som "telefon", "telegraf" og "kinematograf" enten fatt ny betydning eller blitt sjeldne.

Betydningsendring er mer subtil. Et ord kan beholde formen, men endre hva det betyr. Ta ordet "dust". I norront betydde det "modig" eller "dristig", noe positivt. I dag betyr det "dum" eller "taapelig", noe negativt. Betydningen har snudd helt. Eller "snill", som opprinnelig betydde "flink" eller "dyktig", men na betyr "vennlig" eller "godhjertet".

Lydendring pavirker uttalen. Over generasjoner forskjever lydene seg. Det er derfor vi uttaler ord annerledes enn de skrives. Skriftspraket endrer seg saktere enn talespraket, sa skrivematen reflekterer ofte eldre uttale.

Grammatisk endring er langsomt, men det skjer. Norsk har over tid mistet kasussystemet som norront hadde. Vi har gaatt fra fire kasus til ingen. Verbboying har blitt enklere. Kjonnssystemet er i ferd med a forenkles i noen dialekter.

Alle disse endringene skjer samtidig, hele tiden. Sprak er som en elv: det ser likt ut fra dag til dag, men over tid har det flyttet seg langt.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-4-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er betydningsendring?',
        options: [
          { id: 'a', text: 'Nar et ord far ny uttale', isCorrect: false },
          { id: 'b', text: 'Nar et ord beholder formen men endrer betydning over tid', isCorrect: true },
          { id: 'c', text: 'Nar et nytt ord laanes fra et annet sprak', isCorrect: false },
          { id: 'd', text: 'Nar grammatikken endres', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Betydningsendring er nar et ord beholder formen men endrer betydning. For eksempel betydde "dust" opprinnelig "modig", men betyr na "dum".',
      },
    },

    // ========== SEKSJON 2: Laneord gjennom historien ==========
    {
      id: 'norsk-vg1-4-5-n-section2',
      type: 'text',
      content: `## Ord pa reise

Det norske spraket har aldri vaert isolert. Gjennom hele historien har vi tatt imot ord fra de kulturene vi har hatt kontakt med. Disse laneordene forteller en historie om norsk kultur og samfunn.

I vikingtiden gaav norront ord til andre sprak. Nar vikingene dro til England, tok de med seg ord som ble en del av engelsk: "egg", "window" (fra vindauga), "sky" (himmel), "take", og til og med pronomenene "they", "their" og "them". Det er faktisk ganske overraskende at sa grunnleggende engelske ord har skandinavisk opphav.

Sa kom middelalderen og hanseatene. Tyske kjopmaenn dominerte handelen i Bergen og andre byer, og de brakte med seg et hav av ord: "arbeid", "billig", "handel", "flink", "prove", "straff", "snekker". Dette er ord vi bruker hver dag uten a tenke pa at de er "fremmede".

Pa 1700- og 1800-tallet var fransk kulturens sprak. De som ville vaere dannede, brukte franske ord: "elegant", "restaurant", "garderobe", "parfyme", "sjafor". Mote, mat, kultur - omradene der fransk hadde hoyest prestisje.

Og sa kom det 20. arhundret med amerikansk kulturell dominans. Film, musikk, teknologi, sport, forretningsliv: "film", "jobb", "stress", "cool", "laptop", "mail", "streame", "podcast". Den engelske pavirkningen akselererer stadig.

Merk at vi nesten alltid tilpasser laneord til norsk. Vi boyer dem som norske verb (a streame, streamer, streamet), vi lager norske sammensettninger (nettbank, epost), vi fornorsker skrivematen (gaid for guide). Spraket absorber og tilpasser.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-4-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Fra hvilket sprak har norsk fatt flest laneord historisk sett?',
        options: [
          { id: 'a', text: 'Engelsk', isCorrect: false },
          { id: 'b', text: 'Fransk', isCorrect: false },
          { id: 'c', text: 'Tysk (lavtysk)', isCorrect: true },
          { id: 'd', text: 'Latin', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Tysk (saerlig lavtysk fra hansatiden) har gitt norsk flest laneord historisk. Anslag tyder pa at rundt 30% av norsk ordforraad har tysk opprinnelse.',
      },
    },

    // ========== SEKSJON 3: Sprakendring i var tid ==========
    {
      id: 'norsk-vg1-4-5-n-section3',
      type: 'text',
      content: `## Spraket endres mens du leser dette

Akkurat na, i dette oyeblikket, er norsk i endring. De endringene som skjer i var tid, er kanskje vanskeligere a se fordi vi star midt oppi dem. Men de er der.

Den mest apenbare er den fortsatte engelske pavirkningen. Ikke bare laaner vi ord, vi begynner a laane strukturer. "Saa hva betyr det for deg?" (What does that mean for you?) har en struktur som foler seg fremmed pa norsk, men som blir vanligere. "Ta en beslutning" er en oversettelse av "take a decision". Noen kaller dette anglisismer, engelske monstre som sniker seg inn i norsk grammatikk.

I sosiale medier og meldingsapper skjer sprakutvikling i ekspressfart. Forkortelser som "omg", "lol", "btw" blandes med norsk. Emojier blir en del av kommunikasjonen. Skriftspraket naermer seg talespraket, uformelt og raskt. Ungdom skriver som de snakker: "assa jalla bro", "fr fr", "no cap".

Dialektene er ogsa i endring. Urbanisering gjor at faerre vokser opp i tradisjonelle dialektomrader. Mediepavirkning gjor at alle horer standardsprak hele tiden. Resultatet er dialektutjevning: lokale saertrekk forsvinner, dialektene naermer seg hverandre og standardspraket.

Samtidig ser vi motkrefter. Dialektbevissthet oker. Mange velger bevisst a beholde dialekten sin. Sosiale medier gjor det mulig a finne fellesskap med andre som snakker likt, selv om de bor langt unna. Sprak er aldri en enkel historie om tilbakegang.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-4-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er dialektutjevning?',
        options: [
          { id: 'a', text: 'At alle tvinges til a snakke standardsprak', isCorrect: false },
          { id: 'b', text: 'At dialektene naermer seg hverandre og standardspraket over tid', isCorrect: true },
          { id: 'c', text: 'At dialekter bevisst bevares av myndighetene', isCorrect: false },
          { id: 'd', text: 'At dialekter blir mer forskjellige fra hverandre', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Dialektutjevning er at dialektene gradvis naermer seg hverandre og standardspraket, ofte som folge av urbanisering og mediepavirkning. Lokale saertrekk forsvinner.',
      },
    },

    // ========== SEKSJON 4: Debatten om sprakendring ==========
    {
      id: 'norsk-vg1-4-5-n-section4',
      type: 'text',
      content: `## Skal vi vaere bekymret?

Hver generasjon bekymrer seg for spraket. For hundre ar siden klaget folk over tyske laneord. For femti ar siden var det engelske ord. I dag diskuterer vi om sosiale medier odelegger spraket.

Men historien viser at norsk har overlevd all pavirkning. Vi tok opp tusenvis av tyske ord i middelalderen og forble norsk. Vi tok opp franske ord og forble norsk. Det er ingen grunn til a tro at engelsk pavirkning vil vaere annerledes.

Likevel finnes det legitime bekymringer. Domenetap er et begrep som beskriver nar norsk mister terreng pa bestemte omrader. Hvis all forskning skrives pa engelsk, hvis all teknologiutvikling skjer pa engelsk, hvis hele omrader av livet bare fungerer pa engelsk, da svekkes norsk som et fullverdig sprak. Det handler ikke om enkelttord, men om hele domener.

Spraakradet arbeider med a finne gode norske alternativer til engelske ord. Noen av forslagene slaar an (datamaskin), andre gjor det ikke (heimesida). Det er sprakbrukerne, altsaa oss, som til slutt bestemmer hvilke ord som overlever.

Det er ogsa et demokratisk argument. Hvis du ma kunne flytende engelsk for a delta i bestemte deler av samfunnet, da ekskluderer vi dem som ikke kan det. Sprakpolitikk handler ogsa om hvem som far delta.

Samtidig er det viktig a huske at sprakendring ikke er det samme som sprakdod. Norsk i dag er forskjellig fra norsk for hundre ar siden, men det er fortsatt norsk. Endring er ikke nedgang, det er utvikling.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-4-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er domenetap?',
        options: [
          { id: 'a', text: 'Nar ord mister sin opprinnelige betydning', isCorrect: false },
          { id: 'b', text: 'Nar et sprak mister terreng pa bestemte omrader til et annet sprak', isCorrect: true },
          { id: 'c', text: 'Nar dialekter forsvinner', isCorrect: false },
          { id: 'd', text: 'Nar grammatikken forenkles', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Domenetap er nar et sprak mister terreng pa bestemte omrader (domener) til et annet sprak. Eksempel: Hvis all forskning bare publiseres pa engelsk, mister norsk vitenskapsdomeneet.',
      },
    },

    // ========== SEKSJON 5: Du og framtidens norsk ==========
    {
      id: 'norsk-vg1-4-5-n-section5',
      type: 'text',
      content: `## Spraket tilhorer deg

Her er det viktigste a forstaa: Sprak tilhorer ikke grammatikkboker eller sprakraad. Det tilhorer menneskene som bruker det. Og det betyr at du er med pa a forme hva norsk blir.

Hvert ord du velger a bruke eller ikke bruke, er en liten stemme i et stort kor. Hvis du velger a si "influenser" i stedet for "pavirker", er det et valg. Hvis du velger a bruke dialekt i formelle sammenhenger, er det et valg. Hvis du velger a skrive pa nynorsk selv om du bor i en bokmalkommune, er det et valg. Ingen av disse valgene er "riktige" eller "feil", men de har konsekvenser.

Spraakradet kan gi anbefalinger, men de kan ikke tvinge deg til a folge dem. Laerere kan rette oppgavene dine, men de kan ikke kontrollere hvordan du snakker med vennene dine. Sprak er demokratisk pa den maten: det er summen av millioner av individuelle valg som bestemmer retningen.

Vaer bevisst. Nar du velger ord, tenk over hva du vil uttrykke og hvem du vil vaere. Nar du horer andre snakke annerledes enn deg, vaer nysgjerrig i stedet for dommende. Sprakmangfold er en ressurs.

Om hundre ar vil norsk vaere annerledes enn i dag. Kanskje vil det vaere ord du bruker daglig som ikke lenger finnes. Kanskje vil det vaere grammatiske regler du folger som har endret seg. Men norsk vil fortsatt vaere norsk, formet av generasjonene som brukte det, inkludert din.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-4-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-4-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvem bestemmer egentlig hvordan norsk sprak utvikler seg?',
        options: [
          { id: 'a', text: 'Spraakradet alene', isCorrect: false },
          { id: 'b', text: 'Stortinget gjennom lover', isCorrect: false },
          { id: 'c', text: 'Summen av alle sprakbrukeres valg over tid', isCorrect: true },
          { id: 'd', text: 'Laerere og forfattere', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Sprakutvikling styres av summen av alle sprakbrukeres valg. Spraakradet kan anbefale, men det er folk flest som avgjar hvilke ord og former som faktisk brukes.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-4-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Sprak i evig forandring

Du har na utforsket hvordan og hvorfor sprak endrer seg. Her er det viktigste a huske:

**Typer sprakendring:**
Ordforraadsendring (nye ord, ord som forsvinner), betydningsendring (ord far ny betydning), lydendring (uttale forskyves), grammatisk endring (regler forenkles/endres).

**Laneord:**
Norsk har laant fra tysk (middelalderen), fransk (1700-tallet) og engelsk (na). Laneord tilpasses norsk grammatikk og skrivemaate.

**Endringer i dag:**
Engelsk pavirkning, sosiale medier-sprak, dialektutjevning. Men ogsa motreaksjoner: dialektbevissthet, bevisste sprakvalg.

**Debatten:**
Domenetap er en reell bekymring, men sprakendring er ikke det samme som sprakdod. Norsk har overlevd tidligere pavirkning og vil trolig overleve videre.

**Du og spraket:**
Sprak tilhorer brukerne. Dine valg er med pa a forme framtidens norsk.

**Nokkelbegreper:**
Laneord (ord fra andre sprak), nyord (nylagde ord), betydningsendring (ord far ny mening), domenetap (sprak mister terreng), dialektutjevning (dialekter naermer seg hverandre), anglisisme (engelsk pavirkning).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// SAMLET EKSPORT FOR DEL 5 (NARRATIV)
// ============================================================================

export const NORSK_VG1_NARRATIV_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_4_1_NARRATIV,
  CHAPTER_NORSK_VG1_4_2_NARRATIV,
  CHAPTER_NORSK_VG1_4_3_NARRATIV,
  CHAPTER_NORSK_VG1_4_4_NARRATIV,
  CHAPTER_NORSK_VG1_4_5_NARRATIV,
];
