/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

/**
 * Tekstbok innhold for Kommunikasjon og kultur 2 (VG3) - Del 6: Digital kultur
 *
 * Kapittel 6.1-6.5
 *
 * LK20-kompetansemaal:
 * - analysere korleis digitale medium paverkar identitet, kommunikasjon og kultur
 * - droefte algoritmar og filterboblar si rolle i informasjonssamfunnet
 * - reflektere over nettkultur, memes og digital deling som kulturelle fenomen
 * - vurdere opphavsrett og etiske problemstillingar knytt til digital deling
 * - droefte digital kompetanse og danning i eit demokratisk perspektiv
 */

// ============================================================================
// Kapittel 6.1: Sosiale medier og identitet
// ============================================================================

const CHAPTER_KOMKULT2_6_1: TextbookChapter = {
  id: 'komkult2-6-1',
  courseId: 'komkult-2',
  chapterNumber: '6.1',
  title: 'Sosiale medier og identitet',
  description: 'Selvfremstilling, iscenesettelse, digital identitet og sosiale mediers pavirkning pa selvbilde og relasjoner.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere korleis digitale medium paverkar identitet, kommunikasjon og kultur',
  ],
  keyTerms: [
    { term: 'Digital identitet', definition: 'Den versjonen av oss selv vi skaper og presenterer i digitale omgivelser, gjennom profiler, innlegg, bilder og interaksjoner pa nett.' },
    { term: 'Selvfremstilling', definition: 'Goffmans begrep for hvordan mennesker bevisst og ubevisst styrer andres inntrykk av seg selv, ogsa kalt impression management.' },
    { term: 'Frontstage og backstage', definition: 'Goffmans skille mellom det offentlige selvet vi viser frem (frontstage) og det private selvet vi holder skjult (backstage).' },
    { term: 'Sosial sammenligning', definition: 'Psykologisk prosess der vi vurderer oss selv ved a sammenligne oss med andre, forsterket av sosiale mediers kurerte innhold.' },
    { term: 'Doomscrolling', definition: 'Tvangsmessig scrolling gjennom negativt nyhetsinnhold pa nett, ofte drevet av algoritmenes engasjementslogikk.' },
  ],
  exercises: [],
  content: [
    {
      id: 'kk2-6-1-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Sosiale medier har forandret maten vi presenterer oss selv, bygger relasjoner og forstaar hvem vi er. Plattformer som Instagram, TikTok, Snapchat og BeReal gir oss mulighet til a konstruere og formidle en digital versjon av oss selv til et stort publikum. Men hva skjer med identiteten var nar den formes i samspill med likes, kommentarer og algoritmer? I dette kapittelet undersoeker vi forholdet mellom sosiale medier og identitet, med utgangspunkt i sosiologiske og kommunikasjonsfaglige perspektiver.',
    },
    {
      id: 'kk2-6-1-def-1',
      type: 'definition',
      title: 'Digital identitet',
      content:
        'Digital identitet er den versjonen av oss selv vi skaper og vedlikeholder i digitale omgivelser. Den formes gjennom profilbilder, brukernavn, innlegg, delinger, kommentarer og interaksjoner pa nett. Digital identitet er ikke et speilvbilde av den fysiske personen, men en konstruert fremstilling som kan vaere mer eller mindre bevisst kuratert. Sosiologen Erving Goffman beskrev allerede pa 1950-tallet hvordan mennesker driver selvfremstilling, eller impression management, i sosiale situasjoner. I hans dramaturgiske modell er livet en scene der vi veksler mellom frontstage (den offentlige fremstillingen) og backstage (det private selvet). Sosiale medier har gjort frontstage langt stoerre og mer permanent enn Goffman kunne forestille seg.',
    },
    {
      id: 'kk2-6-1-example-1',
      type: 'example',
      title: 'Instagram versus BeReal',
      content:
        'Instagram og BeReal representerer to ulike tilnaerminger til digital selvfremstilling. Pa Instagram kuraterer brukerne noeye hvilke bilder som legges ut: de velger de beste vinklene, bruker filtre, og skaper en polert versjon av livene sine. Frontstage er dominerende. BeReal ble lansert som et motstykke: appen sender et tilfeldig varsel en gang om dagen, og brukeren har to minutter pa a ta et bilde med bade front- og bakkamera. Tanken er a vise livet slik det faktisk er, altsa a bringe backstage inn i det digitale rommet. Likevel viser forskning at mange BeReal-brukere ogsa poserer, venter med a ta bildet til de gjor noe interessant, eller lar vaere a poste nar de har en kjedelig dag. Dette illustrerer at selvfremstilling er dypt forankret i sosial interaksjon, uavhengig av plattform.',
    },
    {
      id: 'kk2-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva innebærer Goffmans begrep «frontstage» nar det brukes om sosiale medier?',
        options: [
          { id: 'a', text: 'Den private og ufiltrerte siden av en persons liv som deles i lukkede grupper', isCorrect: false },
          { id: 'b', text: 'Den offentlige og bevisst kuraterte versjonen av seg selv som brukeren viser frem', isCorrect: true },
          { id: 'c', text: 'En algoritme som bestemmer hvilke innlegg som far mest synlighet', isCorrect: false },
          { id: 'd', text: 'Et verktoy for a analysere engasjement pa sosiale medier', isCorrect: false },
        ],
        solution: 'Frontstage i Goffmans dramaturgiske modell refererer til den offentlige fremstillingen av selvet, der man bevisst styrer inntrykket man gir andre. Pa sosiale medier tilsvarer dette det kuraterte innholdet brukeren velger a dele offentlig, inkludert noeye utvalgte bilder, tekster og presentasjoner av egen livsstil.',
      },
    },
    {
      id: 'kk2-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom frontstage og backstage i Goffmans teori. Gi eksempler pa hvordan dette skillet kommer til uttrykk pa en selvvalgt sosial medieplattform.',
        hints: ['Tenk pa hva slags innhold du deler offentlig versus hva du holder privat. Hvordan styrer plattformens design hva som blir frontstage?'],
        solution: 'Svaret boer forklare at frontstage er den bevisste, offentlige selvfremstillingen, mens backstage er det private selvet som holdes skjult. Pa for eksempel Instagram er frontstage det kuraterte feeden med noeye utvalgte bilder, mens backstage er alle bildene som ble forkastet, usikkerheten rundt hva man skal poste, og livet bak kamera. Stories kan vaere en mellomposisjon med mer uformelt innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-1-def-2',
      type: 'definition',
      title: 'Sosial sammenligning',
      content:
        'Sosial sammenligning er en psykologisk prosess der vi vurderer oss selv ved a sammenligne oss med andre. Psykologen Leon Festinger formulerte teorien om sosial sammenligning i 1954. Vi sammenligner oss oppover (med noen vi oppfatter som bedre) eller nedover (med noen vi oppfatter som verre). Sosiale medier forsterker oppover-sammenligning fordi vi hovedsakelig ser andres kuraterte frontstage. Vi sammenligner vart eget backstage med andres frontstage, noe som kan foere til urealistiske forventninger, lavt selvbilde og psykisk uhelse. Forskning fra blant annet Royal Society for Public Health i Storbritannia har vist at Instagram er den plattformen som har stoerst negativ innvirkning pa unges psykiske helse, saeaerlig knyttet til kroppspress og sosial sammenligning.',
    },
    {
      id: 'kk2-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva sosial sammenligning er og hvordan sosiale medier forsterker dette fenomenet. Bruk begrepene frontstage, backstage og oppover-sammenligning i svaret ditt.',
        hints: ['Tenk pa forskjellen mellom hva du ser av andres liv pa nett og hva du vet om ditt eget liv.'],
        solution: 'Sosial sammenligning er prosessen der vi vurderer oss selv ved a sammenligne oss med andre. Sosiale medier forsterker oppover-sammenligning fordi vi primaert ser andres frontstage (kuraterte hoydepunkter), mens vi kjenner vart eget backstage (hverdagsliv med usikkerhet og mangler). Resultatet kan vaere lavt selvbilde og urealistiske forventninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Droeft hvordan sosiale medier kan pavirke unges identitetsutvikling bade positivt og negativt. Bruk begrepene digital identitet, selvfremstilling og sosial sammenligning i svaret ditt.',
        hints: [
          'Tenk pa muligheter for selvutforskning og fellesskap, men ogsa press og sammenligning.',
          'Bruk konkrete eksempler fra plattformer du kjenner.',
        ],
        solution: 'Positivt: Sosiale medier gir mulighet til a utforske ulike sider av identiteten, finne fellesskap med likesinnede, og fa bekreftelse pa hvem man er. Negativt: Konstant sosial sammenligning med kuraterte fremstillinger kan gi lavt selvbilde, identitetspress og psykisk uhelse. Digital identitet kan bli en belastning nar man foeler man ma opprettholde en bestemt fasade.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Digital identitet er den versjonen av oss selv vi konstruerer pa nett. Goffmans begreper frontstage og backstage er nyttige for a forsta hvordan selvfremstilling fungerer pa sosiale medier: vi viser en kuratert offentlig versjon av oss selv, mens det private holdes skjult. Sosial sammenligning forsterkes av sosiale medier fordi vi hovedsakelig ser andres hoydepunkter. Forskning viser at dette kan ha negativ innvirkning pa psykisk helse, saerlig blant unge. Bevissthet om disse mekanismene er viktig for a navigere i det digitale medielandskapet pa en sunn mate.',
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfoer en analyse av din egen eller en fiktiv persons digitale identitet pa en selvvalgt plattform. Beskriv hvordan profilen fremstaar (frontstage), hva som utelates (backstage), og droeft hvilke identitetsaspekter som fremheves og hvorfor. Skriv en sammenhengende tekst pa 300-400 ord.',
        hints: [
          'Bruk Goffmans begreper systematisk.',
          'Vaer konkret: beskriv profilbilde, biografi, innholdstyper og tone.',
        ],
        solution: 'Svaret boer inneholde en konkret beskrivelse av den digitale profilen, en analyse av hva som er frontstage (det kurerte, synlige) og backstage (det skjulte), og en droefting av hvilke identitetsaspekter som fremheves. God besvarelse viser forstaelse for at digital identitet er en konstruksjon, og reflekterer over motivasjonen bak valgene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva var Goffmans hovedpoeng i den dramaturgiske modellen?',
        options: [
          { id: 'a', text: 'At mennesker er som maskiner som reagerer automatisk pa stimuli', isCorrect: false },
          { id: 'b', text: 'At sosial interaksjon kan forstaaes som et rollespill der vi styrer andres inntrykk av oss', isCorrect: true },
          { id: 'c', text: 'At digital kommunikasjon alltid er mer autentisk enn kommunikasjon ansikt til ansikt', isCorrect: false },
          { id: 'd', text: 'At identitet er medfodt og ikke paavirkes av sosiale omgivelser', isCorrect: false },
        ],
        solution: 'Goffmans dramaturgiske modell sammenligner sosial interaksjon med et teater: vi spiller roller, styrer inntrykk (impression management), og veksler mellom frontstage og backstage. Hovedpoenget er at selvfremstilling er en grunnleggende del av all sosial interaksjon, ikke bare noe som foregaar pa sosiale medier.',
      },
    },
  ],
};

// ============================================================================
// Kapittel 6.2: Algoritmer og filterbobler
// ============================================================================

const CHAPTER_KOMKULT2_6_2: TextbookChapter = {
  id: 'komkult2-6-2',
  courseId: 'komkult-2',
  chapterNumber: '6.2',
  title: 'Algoritmer og filterbobler',
  description: 'Algoritmestyrt innhold, filterboblen, ekkokamre, personalisering og demokratiske konsekvenser.',
  estimatedMinutes: 24,
  competenceGoals: [
    'droefte algoritmar og filterboblar si rolle i informasjonssamfunnet',
  ],
  keyTerms: [
    { term: 'Algoritme', definition: 'Et sett med regler og instruksjoner som et dataprogram foelger for a loeser en oppgave, for eksempel a sortere og prioritere innhold i en nyhetsstroem.' },
    { term: 'Filterboble', definition: 'Eli Parisers begrep for situasjonen der algoritmene tilpasser innholdet sa sterkt til brukerens preferanser at alternative perspektiver filtreres bort.' },
    { term: 'Ekkokammer', definition: 'Et lukket informasjonsmiljoe der man hovedsakelig eksponeres for synspunkter man allerede deler, noe som forsterker eksisterende oppfatninger.' },
    { term: 'Personalisering', definition: 'Tilpasning av digitalt innhold til den enkelte brukerens interesser, adferd og preferanser, basert pa datainnsamling og algoritmisk analyse.' },
    { term: 'Oppmerksomhetsoekonomi', definition: 'Oekonomisk modell der brukerens oppmerksomhet er den knappe ressursen teknologiselskaper konkurrerer om, og som finansieres gjennom annonseinntekter.' },
  ],
  exercises: [],
  content: [
    {
      id: 'kk2-6-2-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Hver gang du aapner sosiale medier, en nyhetstjeneste eller en soekemotor, moeters du av innhold som er valgt ut spesielt for deg. Algoritmer analyserer din adferd, dine preferanser og din historie for a vise deg innhold du sannsynligvis vil engasjere deg med. Men hvem bestemmer egentlig hva du ser? Og hva er konsekvensene nar algoritmene styrer informasjonsflyten? I dette kapittelet undersoekes hvordan algoritmer fungerer, hva filterbobler og ekkokamre er, og hvilke konsekvenser personalisert innhold har for demokratiet.',
    },
    {
      id: 'kk2-6-2-def-1',
      type: 'definition',
      title: 'Algoritmer og personalisering',
      content:
        'En algoritme er et sett med regler og instruksjoner som et dataprogram foelger for a loeser en oppgave. I konteksten av sosiale medier og soekemotorer brukes algoritmer til a sortere, filtrere og prioritere innhold for den enkelte bruker. Personaliseringsalgoritmene analyserer store mengder data: hva du klikker pa, hvor lenge du ser pa et innlegg, hva du liker og deler, hvem du foelger, og hvilke soekeord du bruker. Basert pa denne dataen bygger algoritmene en profil av dine preferanser og viser deg innhold som matcher denne profilen. Forretningsmodellen bak er oppmerksomhetsoekonomien: jo lenger du bruker plattformen, jo mer reklame kan vises, og jo hoeyere blir annonseinntektene.',
    },
    {
      id: 'kk2-6-2-example-1',
      type: 'example',
      title: 'TikToks For You-side',
      content:
        'TikToks For You Page (FYP) er et av de mest avanserte eksemplene pa algoritmestyrt innhold. Algoritmen laerer ekstremt raskt: allerede etter noen faa minutter med bruk kan den vise innhold som treffer brukerens interesser med hoy presisjon. Den analyserer ikke bare hva du liker og deler, men ogsa hvor lenge du ser pa en video foer du scroller videre, om du ser en video flere ganger, og hvilke lyder og hashtagger du engasjerer deg med. Resultatet er en svart tilpasset innholdsstroem som kan vaere vanskelig a legge fra seg. Kritikere peker pa at TikToks algoritme er saa effektiv at den kan foere brukere inn i saakalt «rabbit holes», der stadig mer ekstremt eller nisjepreget innhold vises etter hvert som engasjementet oekes. For unge brukere kan dette bety eksponering for innhold om spiseforstyrrelser, selvskading eller ekstremisme, fordi algoritmens maal er engasjement, ikke brukerens ve og vel.',
    },
    {
      id: 'kk2-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedmaalet til personaliseringsalgoritmene pa sosiale medier?',
        options: [
          { id: 'a', text: 'A sikre at brukerne faar tilgang til all tilgjengelig informasjon', isCorrect: false },
          { id: 'b', text: 'A beskytte brukernes personvern ved a filtrere bort skadelig innhold', isCorrect: false },
          { id: 'c', text: 'A maksimere brukerens tid pa plattformen for a oeke annonseinntektene', isCorrect: true },
          { id: 'd', text: 'A gi brukerne det mest objektive og balanserte nyhetsbildet', isCorrect: false },
        ],
        solution: 'Personaliseringsalgoritmene er designet for a maksimere engasjement, det vil si tid brukt pa plattformen. Jo mer tid brukeren tilbringer, jo mer reklame kan vises, og jo hoeyere blir annonseinntektene. Dette er kjernen i oppmerksomhetsoekonomien. Algoritmene optimaliserer for profitt, ikke for brukerens beste interesse eller informasjonskvalitet.',
      },
    },
    {
      id: 'kk2-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva oppmerksomhetsoekonomi innebærer og hvordan den pavirker innholdet vi ser pa sosiale medier. Gi konkrete eksempler.',
        hints: ['Tenk pa hva som skjer nar brukerens oppmerksomhet er produktet som selges til annonsorer.'],
        solution: 'Oppmerksomhetsoekonomi betyr at brukerens oppmerksomhet er den knappe ressursen som teknologiselskaper konkurrerer om. Forretningsmodellen er a holde brukerne engasjert sa lenge som mulig for a selge annonseplass. Dette foerer til at algoritmene prioriterer innhold som vekker sterke foelelser (engasjement), ofte paa bekostning av nyanser og kvalitet. Eksempler: clickbait-overskrifter, autoplay-videoer, uendelig scrolling, push-varsler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-2-def-2',
      type: 'definition',
      title: 'Filterbobler og ekkokamre',
      content:
        'Filterboble er et begrep lansert av internettaktivisten Eli Pariser i 2011. Det beskriver situasjonen der algoritmene tilpasser informasjonsstroemmen sa sterkt til brukerens eksisterende preferanser at alternative perspektiver filtreres bort. Brukeren lever i en «boble» av informasjon som bekrefter det hun allerede mener og tror. Ekkokammer er et beslektet begrep som beskriver et lukket informasjonsmiljoe der meninger og oppfatninger forsterkes gjennom gjentakelse, mens motargumenter og alternative perspektiver er fraavaaerende. Mens filterboblen hovedsakelig er teknologidrevet (algoritmene filtrerer), er ekkokammeret ogsa sosialt drevet (vi velger selv a foelge likesinnede og blokkere meningsmotstandere).',
    },
    {
      id: 'kk2-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom en filterboble og et ekkokammer. Gi eksempler pa hvordan begge fenomenene kan oppstaa i praksis.',
        hints: ['Tenk pa hva som er teknologidrevet og hva som er sosialt drevet.'],
        solution: 'Filterboblen er primaert teknologidrevet: algoritmene tilpasser informasjonsstroemmen basert pa brukerdata slik at alternative perspektiver filtreres bort. Ekkokammeret har ogsa en sosial komponent: vi velger aktivt a foelge likesinnede og blokkere meningsmotstandere. Eksempel pa filterboble: Google viser ulike soekeresultater til ulike brukere. Eksempel pa ekkokammer: en Facebook-gruppe der alle er enige og avvikende meninger moetes med utestengelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Droeft paastanden: «Algoritmene vet bedre enn deg selv hva du vil se.» Er dette positivt eller problematisk? Bruk begrepene filterboble, personalisering og oppmerksomhetsoekonomi.',
        hints: [
          'Tenk pa fordeler (relevans, tidsbesparelse) og ulemper (innsnevring, manipulasjon).',
          'Hvem tjener egentlig pa personaliseringen?',
        ],
        solution: 'Svaret boer drofte at algoritmisk personalisering kan vaere nyttig (relevant innhold, tidsbesparelse), men ogsa problematisk (filterbobler, begrenset verdensbilde, avhengighet). Kjerneproblemet er at algoritmene optimaliserer for engasjement og profitt, ikke for brukerens opplyste valg. Gode besvarelser problematiserer hvem som definerer hva brukeren «vil» se, og skiller mellom kortsiktig engasjement og langsiktig nytte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Algoritmer sorterer og prioriterer innhold basert pa brukerdata for a maksimere engasjement og annonseinntekter. Personaliseringen skaper filterbobler der alternative perspektiver filtreres bort. Ekkokamre forsterker eksisterende oppfatninger gjennom bade teknologiske og sosiale mekanismer. Oppmerksomhetsoekonomien driver utviklingen mot stadig mer engasjementsfokusert innhold. Bevissthet om disse mekanismene er avgjoeerende for a kunne navigere kritisk i det digitale informasjonslandskapet.',
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfoer et lite eksperiment: sammenlikn For You-siden pa TikTok, forsiden pa YouTube eller nyhetsstroemen pa Facebook for to ulike brukere (deg selv og en venn eller familiemedlem). Beskriv forskjellene dere finner og analyser dem ved hjelp av begrepene algoritme, filterboble og personalisering. Skriv 300-400 ord.',
        hints: [
          'Vurder hva slags innhold som prioriteres for de ulike brukerne.',
          'Diskuter hva forskjellene sier om algoritmenes arbeidsmate.',
        ],
        solution: 'Svaret boer inneholde en konkret beskrivelse av forskjellene mellom de to brukeropplevelsene og en analyse som bruker begrepene algoritmisk personalisering og filterboble. God besvarelse reflekterer over at den samme plattformen gir fundamentalt ulike informasjonsvirkeligheter for ulike brukere, og drooefter konsekvensene av dette.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvem lanserte begrepet «filterboble»?',
        options: [
          { id: 'a', text: 'Mark Zuckerberg', isCorrect: false },
          { id: 'b', text: 'Eli Pariser', isCorrect: true },
          { id: 'c', text: 'Erving Goffman', isCorrect: false },
          { id: 'd', text: 'Marshall McLuhan', isCorrect: false },
        ],
        solution: 'Eli Pariser lanserte begrepet filterboble (filter bubble) i sin bok «The Filter Bubble: What the Internet Is Hiding from You» i 2011. Han advarte mot at algoritmisk personalisering av nettinnhold kan foere til at borgere lever i isolerte informasjonsbobler der de bare eksponeres for synspunkter de allerede er enige i.',
      },
    },
  ],
};

// ============================================================================
// Kapittel 6.3: Nettkultur og memes
// ============================================================================

const CHAPTER_KOMKULT2_6_3: TextbookChapter = {
  id: 'komkult2-6-3',
  courseId: 'komkult-2',
  chapterNumber: '6.3',
  title: 'Nettkultur og memes',
  description: 'Internettkultur, memes som kulturelt fenomen, viral spredning, intertekstualitet og humor pa nett.',
  estimatedMinutes: 20,
  competenceGoals: [
    'reflektere over nettkultur, memes og digital deling som kulturelle fenomen',
  ],
  keyTerms: [
    { term: 'Mem (meme)', definition: 'Et kulturelt innholdselement som spres og endres gjennom imitasjon og variasjon, ofte i form av bilder med tekst, videoklipp eller formater som kopieres og tilpasses.' },
    { term: 'Intertekstualitet', definition: 'Samspillet mellom tekster, der en tekst refererer til, siterer eller bygger pa andre tekster. Memes er gjennomgaaende intertekstuelle.' },
    { term: 'Viral spredning', definition: 'Nar innhold spres eksponensielt gjennom deling pa nett, analogt med hvordan et virus sprer seg fra person til person.' },
    { term: 'Remiks', definition: 'A ta eksisterende kulturelt materiale og bearbeide, kombinere eller omforme det til noe nytt. Sentral praksis i nettkultur.' },
    { term: 'Deltakelseskultur', definition: 'Henry Jenkins\' begrep for en kultur der brukerne er aktive produsenter og distributorer av innhold, ikke bare passive konsumenter.' },
  ],
  exercises: [],
  content: [
    {
      id: 'kk2-6-3-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Memes er blitt et av de mest karakteristiske kulturuttrykkene i var digitale tid. Fra «Distracted Boyfriend» til «Woman Yelling at a Cat» har memes en evne til a fange komplekse foelelser, kommentere aktuelle hendelser og skape fellesskap gjennom humor. Men memes er mer enn bare underholdning. De er kulturelle uttrykk som kan analyseres med kommunikasjonsfaglige verktoy. I dette kapittelet undersoekes nettkultur og memes som fenomen, med vekt pa hvordan de skapes, spres og betyr noe i en kulturell sammenheng.',
    },
    {
      id: 'kk2-6-3-def-1',
      type: 'definition',
      title: 'Mem og memkultur',
      content:
        'Begrepet «mem» (meme pa engelsk) ble opprinnelig brukt av biologen Richard Dawkins i boken «The Selfish Gene» (1976) for a beskrive kulturelle enheter som spres gjennom imitasjon, analogt med hvordan gener spres biologisk. I dag brukes begrepet primaert om internettmemes: kulturelle innholdselementer som spres og endres gjennom kopiering, variasjon og deling pa nett. Typiske memeformater inkluderer bilder med tekst (image macros), videoklipp med lyd eller tekst, gif-animasjoner, og formater der et gjenkjennelig moenster fylles med nytt innhold. Det som kjennetegner memes som kulturelt fenomen er at de baseres pa imitasjon og variasjon, de er intertekstuelle (refererer til andre memes og kulturuttrykk), de spres horisontalt mellom brukere, og de krever kulturell kompetanse for a forstaaes.',
    },
    {
      id: 'kk2-6-3-example-1',
      type: 'example',
      title: 'Memens anatomi: «Drake Hotline Bling»',
      content:
        'Drake Hotline Bling-memet er et av de mest brukte memeformatene og illustrerer memens struktur. Det bestaar av to paneler med rapperen Drake: i det oeverste panelet avviser han noe (negativt kroppspraak), i det nederste panelet godkjenner han noe (positivt kroppspraak). Brukerne fyller inn tekst som representerer noe de avviser og noe de foretrekker. Formatet er intertekstuelt: det refererer til Drakes musikkvideo, men har loesrevet seg fra den opprinnelige konteksten og blitt et selvstendig uttrykksformat. Det kan brukes til alt fra hverdagshumor til politisk kommentar. Suksessen skyldes at formatet er enkelt a fylle med nytt innhold, det kommuniserer en universell foelelse (preferanse), og det er visuelt umiddelbart gjenkjennelig. Memet er et eksempel pa remiks: eksisterende kulturelt materiale (musikkvideoklipp) omformes til noe nytt gjennom kollektiv kreativitet.',
    },
    {
      id: 'kk2-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvem brukte opprinnelig begrepet «mem» for a beskrive kulturelle enheter som spres gjennom imitasjon?',
        options: [
          { id: 'a', text: 'Henry Jenkins', isCorrect: false },
          { id: 'b', text: 'Marshall McLuhan', isCorrect: false },
          { id: 'c', text: 'Richard Dawkins', isCorrect: true },
          { id: 'd', text: 'Eli Pariser', isCorrect: false },
        ],
        solution: 'Richard Dawkins introduserte begrepet «mem» (meme) i boken «The Selfish Gene» (1976). Han brukte det som en kulturell parallell til genet: en enhet for kulturell informasjon som spres gjennom imitasjon fra person til person. I dag brukes begrepet primaert om internettmemes, men grunnideen om kulturell spredning gjennom kopiering og variasjon er den samme.',
      },
    },
    {
      id: 'kk2-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et mem du kjenner godt. Beskriv formatet og forklar hva som gjoer det intertekstuelt. Hva ma man vite for a forstaa memet?',
        hints: ['Tenk pa hvilke kulturelle referanser memet bygger pa, og hvilken forkunnskapsgrense det har.'],
        solution: 'Svaret boer inneholde en konkret beskrivelse av memet, en forklaring av dets intertekstuelle referanser (hva det refererer til, hvilken kulturell kontekst det forutsetter), og en refleksjon over at memeforstaelse krever kulturell kompetanse. God besvarelse viser ogsa at memet kan ha ulike betydninger i ulike kontekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-3-def-2',
      type: 'definition',
      title: 'Deltakelseskultur',
      content:
        'Deltakelseskultur er et begrep utviklet av medieforskeren Henry Jenkins. Det beskriver en kultur der grensene mellom produsenter og konsumenter av medieinnhold er visket ut. I en deltakelseskultur er brukerne aktive medprodusenter: de lager, remikser og deler innhold, og bidrar til a forme medielandskapet. Jenkins identifiserte flere kjennetegn ved deltakelseskultur: lav terskel for kreativt uttrykk, stoette for a skape og dele innhold, uformell veiledning fra erfarne til nybegynnere, en folelse av at ens bidrag betyr noe, og sosiale forbindelser mellom medlemmene. Memes er et fremragende eksempel pa deltakelseskultur: hvem som helst kan lage en meme, barrierene for deltakelse er lave, og det eksisterer et fellesskap der memes verdsettes, kritiseres og videreutvikles.',
    },
    {
      id: 'kk2-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar Henry Jenkins\' begrep deltakelseskultur og gi tre eksempler pa hvordan det kommer til uttrykk pa internett i dag.',
        hints: ['Tenk pa plattformer og praksiser der vanlige brukere skaper og deler innhold.'],
        solution: 'Deltakelseskultur kjennetegnes av at skillet mellom produsenter og konsumenter er visket ut, terskelen for kreativt uttrykk er lav, og det eksisterer fellesskap der innhold verdsettes og videreutvikles. Eksempler: 1) Memes der brukere fyller kjente formater med nytt innhold, 2) YouTube der hvem som helst kan publisere videoer, 3) Fanfiction-fellesskap der lesere skriver videre pa andres historier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan memes kan fungere som en form for samfunnskommentar. Gi eksempler pa memes som kommenterer politiske eller sosiale forhold.',
        hints: [
          'Tenk pa memes som har gatt viralt i forbindelse med politiske hendelser.',
          'Vurder hvordan humor og satire fungerer som retoriske virkemidler i memeformatet.',
        ],
        solution: 'Memes kan vaere en form for folkelig politisk kommentar fordi de forenkler komplekse saker til gjenkjennelige formater, bruker humor og ironi for a kritisere makthavere, spres raskt og nar bredt. Eksempler: memes om klimapolitikk, valgkampmemes, koronamemes som kommenterte myndighetenes haandtering. Memes kan vaere satiriske verktoy som gjoer politikk tilgjengelig for et yngre publikum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Memes er kulturelle innholdselementer som spres og endres gjennom kopiering og variasjon pa nett. De er grunnleggende intertekstuelle og krever kulturell kompetanse for a forstaaes. Richard Dawkins introduserte begrepet mem i 1976, men i dag brukes det primaert om internettfenomener. Deltakelseskultur, slik Henry Jenkins beskriver den, kjennetegner nettkulturen der brukerne er aktive medprodusenter. Memes fungerer ikke bare som underholdning, men ogsa som politisk kommentar, identitetsmarkerer og fellesskapsbygger i den digitale offentligheten.',
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en analyse av et selvvalgt memeformat. Beskriv formatet, forklar hvordan det fungerer som kommunikasjon, analyser det med begrepene intertekstualitet, remiks og deltakelseskultur, og vurder hva memet uttrykker kulturelt. Skriv 300-400 ord.',
        hints: [
          'Velg et memeformat du kjenner godt, og vaer konkret i beskrivelsen.',
          'Analyser bade innhold og form: hva sier memet, og hvordan sier det det?',
        ],
        solution: 'Svaret boer inneholde en klar beskrivelse av memeformatet, en analyse av dets intertekstuelle referanser, en droefting av hvordan det eksemplifiserer remiks og deltakelseskultur, og en vurdering av dets kulturelle betydning. God besvarelse viser at memes er komplekse kulturelle uttrykk som kan analyseres med kommunikasjonsfaglige begreper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva betyr «intertekstualitet» i sammenheng med memes?',
        options: [
          { id: 'a', text: 'At memes bare brukes i skriftlig kommunikasjon', isCorrect: false },
          { id: 'b', text: 'At en meme refererer til, siterer eller bygger pa andre tekster og kulturuttrykk', isCorrect: true },
          { id: 'c', text: 'At memes kun spres internt i lukkede nettsamfunn', isCorrect: false },
          { id: 'd', text: 'At memes overfloediggjor tradisjonelle tekster og medier', isCorrect: false },
        ],
        solution: 'Intertekstualitet betyr at en tekst forholder seg til og bygger pa andre tekster. Memes er gjennomgaaende intertekstuelle: de refererer til filmer, musikk, nyheter, andre memes og kulturelle fenomener. For a forstaa en meme maa man ofte kjenne til de referansene den bygger pa, noe som gjoer memeforstaelse til en form for kulturell kompetanse.',
      },
    },
  ],
};

// ============================================================================
// Kapittel 6.4: Digital deling og opphavsrett
// ============================================================================

const CHAPTER_KOMKULT2_6_4: TextbookChapter = {
  id: 'komkult2-6-4',
  courseId: 'komkult-2',
  chapterNumber: '6.4',
  title: 'Digital deling og opphavsrett',
  description: 'Opphavsrett i den digitale tidsalderen, Creative Commons, piratkopiering, KI-generert innhold og delingskultur.',
  estimatedMinutes: 22,
  competenceGoals: [
    'vurdere opphavsrett og etiske problemstillingar knytt til digital deling',
  ],
  keyTerms: [
    { term: 'Opphavsrett', definition: 'Juridisk beskyttelse som gir skaperen av et aandsverk enerett til a raade over verket, inkludert kopiering, distribusjon og bearbeiding.' },
    { term: 'Creative Commons', definition: 'Et lisensieringssystem som gjoer det mulig for skapere a gi andre tillatelse til a bruke verkene sine pa bestemte vilkaar, som en mellomting mellom full opphavsrett og fri bruk.' },
    { term: 'Piratkopiering', definition: 'Uautorisert kopiering og distribusjon av opphavsrettsbeskyttet materiale, som musikk, film, programvare eller tekst.' },
    { term: 'Fair use', definition: 'Juridisk prinsipp (saerlig i amerikansk rett) som tillater begrenset bruk av opphavsrettsbeskyttet materiale til formaal som kritikk, kommentar, undervisning og forskning.' },
    { term: 'KI-generert innhold', definition: 'Tekst, bilder, lyd eller video skapt av kunstig intelligens, som reiser nye spoensmaal om opphavsrett og eierskap.' },
  ],
  exercises: [],
  content: [
    {
      id: 'kk2-6-4-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Den digitale revolusjonen har gjort det enklere enn noensinne a kopiere, dele og bearbeide innhold. Med noen faa klikk kan du dele en sang, et bilde eller en tekst med hele verden. Men hvem eier det digitale innholdet? Og hva er grensene for hva du har lov til a dele? Spenningen mellom delingskultur og opphavsrett er et av de sentrale konfliktomraadene i den digitale tidsalderen. I dette kapittelet undersoekes opphavsrettens grunnlag, utfordringene den staar overfor i en digital tid, og nye tilnaerminger som Creative Commons og debatten om KI-generert innhold.',
    },
    {
      id: 'kk2-6-4-def-1',
      type: 'definition',
      title: 'Opphavsrett',
      content:
        'Opphavsrett er den juridiske beskyttelsen som gir skaperen av et aandsverk enerett til a raade over verket sitt. I Norge reguleres opphavsretten av aandsverkloven. Et aandsverk kan vaere litteraere tekster, musikk, bilder, film, programvare, arkitektur eller andre kreative uttrykk. Opphavsretten oppstaar automatisk i det oyeblikket verket skapes, og krever ingen registrering. Den varer i skaperens levetid pluss 70 aar etter skaperens dod. Opphavsretten gir skaperen oekonomiske rettigheter (enerett til kopiering, distribusjon, offentlig visning) og ideelle rettigheter (rett til a bli navngitt som opphavsmann og til a motsette seg krenkende bruk). I en digital verden der kopiering er naer gratis og spredning skjer momentant, er opphavsretten under stadig press.',
    },
    {
      id: 'kk2-6-4-example-1',
      type: 'example',
      title: 'Napster og musikkbransjens digitale sjokk',
      content:
        'Da Napster ble lansert i 1999, revolusjonerte det maten musikk ble distribuert. For foerste gang kunne vanlige internettbrukere dele musikkfiler direkte med hverandre gjennom saakalt peer-to-peer-teknologi (P2P). Pa sitt hoeyeste hadde Napster over 80 millioner registrerte brukere. Platebransjen reagerte med soeksmaal, og Napster ble stengt i 2001. Men fenomenet endret bransjen for alltid: det viste at forbrukerne oensket enkel digital tilgang til musikk, og banet veien for lovlige stroemmetjenester som Spotify og Apple Music. Napster-saken illustrerer en grunnleggende spenning: teknologien gjor det mulig a dele kultur bredt og enkelt, men opphavsrettens oekonomiske modell forutsetter at skaperne faar betalt for arbeidet sitt. Loesningen ble ikke a stoppe digital deling, men a finne nye forretningsmodeller som forener tilgjengelighet med kompensasjon til skaperne.',
    },
    {
      id: 'kk2-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Naar oppstaar opphavsretten til et verk i Norge?',
        options: [
          { id: 'a', text: 'Naar verket er registrert hos Patentstyret', isCorrect: false },
          { id: 'b', text: 'Naar verket er publisert og gjort tilgjengelig for offentligheten', isCorrect: false },
          { id: 'c', text: 'Automatisk i det oyeblikket verket skapes', isCorrect: true },
          { id: 'd', text: 'Naar skaperen merker verket med copyright-symbolet', isCorrect: false },
        ],
        solution: 'I Norge oppstaar opphavsretten automatisk i det oyeblikket aandverket skapes. Det kreves ingen registrering, merking eller publisering. Dette er et viktig prinsipp i norsk og internasjonal opphavsrett (Bernkonvensjonen). Kravet er at verket maa ha verkshoeyde, det vil si at det maa vaere et resultat av en selvstendig skapende innsats.',
      },
    },
    {
      id: 'kk2-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva piratkopiering er og droeft hvorfor det er et etisk dilemma. Vurder argumentene bade for og mot fri deling av digitalt innhold.',
        hints: ['Tenk pa bade skaperens rettigheter og brukerens oenske om tilgang til kultur.'],
        solution: 'Piratkopiering er uautorisert kopiering og distribusjon av opphavsrettsbeskyttet materiale. Det er et etisk dilemma fordi: For fri deling: Kultur boer vaere tilgjengelig for alle, hoye priser ekskluderer folk, skaperne kan tjene penger pa andre maater. Mot fri deling: Skapere har rett til kompensasjon for arbeidet, piratkopiering undergraver insentivene til a skape, det er ulovlig. Gode besvarelser nyanserer mellom ulike typer innhold og kontekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-4-def-2',
      type: 'definition',
      title: 'Creative Commons',
      content:
        'Creative Commons (CC) er et internasjonalt lisensieringssystem grunnlagt i 2001 av jusprofessor Lawrence Lessig. CC-lisenser gjoer det mulig for skapere a gi andre tillatelse til a bruke verkene sine pa bestemte vilkaar, uten at mottakeren maa spoerre om lov. CC er en mellomting mellom full opphavsrettsbeskyttelse og offentlig domene. Lisensene kombinerer fire elementer: Navngivelse (BY) krever at opphavsmannen krediteres. Ikkekommersiell (NC) tillater bare ikke-kommersiell bruk. IngenBearbeidelser (ND) forbyr endringer. DelPaaSammeVilkaar (SA) krever at bearbeidelser deles med samme lisens. Den mest aapne lisensen, CC BY, krever bare navngivelse. Den mest restriktive, CC BY-NC-ND, krever navngivelse og forbyr bade kommersiell bruk og bearbeiding. Creative Commons er viktig for deltakelseskultur fordi det gjoer det juridisk trygt a remikse og dele innhold.',
    },
    {
      id: 'kk2-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar Creative Commons-systemet og gi eksempler pa hvordan ulike CC-lisenser kan brukes i praksis. Hvilken CC-lisens ville du valgt dersom du publiserte et bilde pa nett? Begrunn valget ditt.',
        hints: ['Tenk pa de fire elementene: BY (navngivelse), NC (ikkekommersiell), ND (ingen bearbeidelse), SA (del pa samme vilkaar).'],
        solution: 'Creative Commons er et lisensieringssystem der skapere gir andre tillatelse til a bruke verkene sine pa bestemte vilkaar. CC BY krever bare navngivelse, CC BY-NC forbyr kommersiell bruk, CC BY-NC-ND forbyr bade kommersiell bruk og bearbeiding. Valg av lisens avhenger av om man oensker at andre skal kunne remikse verket og om kommersiell bruk er akseptabelt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kunstig intelligens kan na generere bilder, tekst og musikk. Droeft hvem som eier opphavsretten til KI-generert innhold. Er det brukeren som ga KI-en instruksjoner, selskapet som laget KI-en, eller ingen?',
        hints: [
          'Tenk pa at opphavsrett tradisjonelt forutsetter en menneskelig skaper.',
          'Vurder hvordan dette pavirker kunstnere, musikere og forfattere.',
        ],
        solution: 'Spora er nytt og rettstilstanden usikker. Tradisjonell opphavsrett krever en menneskelig skaper, noe som tilsier at KI-generert innhold ikke har opphavsrettsbeskyttelse. Samtidig har brukeren gitt instruksjoner (prompts) og KI-selskapet har laget verktoeyet. Flere rettsavgjorelser har slaat fast at rent KI-generert innhold ikke faar opphavsrett. Gode besvarelser reflekterer over konsekvensene for kreative bransjer og behovet for ny regulering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Opphavsretten gir skapere enerett til a raade over sine verk og oppstaar automatisk i Norge. Digital teknologi har utfordret opphavsretten gjennom enkel kopiering og distribusjon, illustrert av Napster-saken. Creative Commons tilbyr et fleksibelt lisensieringssystem som balanserer skapernes rettigheter med oensket om deling og gjenbruk. Piratkopiering reiser etiske dilemmaer om tilgang til kultur versus skapernes rettigheter. KI-generert innhold representerer en ny utfordring for opphavsretten, ettersom tradisjonell lov forutsetter en menneskelig skaper.',
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droeft paastanden: «Opphavsrett slik vi kjenner den, er utdatert i en digital verden.» Bruk eksempler fra musikkbransjen, memekulturen og KI-generert innhold i svaret ditt. Vurder ogsa om Creative Commons kan vaere en del av loesningen. Skriv 300-400 ord.',
        hints: [
          'Ta hensyn til bade skapernes behov for beskyttelse og samfunnets behov for tilgang til kultur.',
          'Vurder om det finnes en middelvei mellom streng opphavsrett og fri deling.',
        ],
        solution: 'Svaret boer drofte spenningen mellom tradisjonell opphavsrett og digital delingskultur, med konkrete eksempler. God besvarelse viser at opphavsretten staar overfor reelle utfordringer (enkel kopiering, memes, KI), men ogsa at skapere trenger beskyttelse. Creative Commons presenteres som en mulig mellomloesning. Fremragende besvarelse reflekterer over behovet for oppdatert lovgivning som tar hensyn til bade teknologisk utvikling og kreative rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvor lenge varer opphavsretten til et verk i Norge?',
        options: [
          { id: 'a', text: '20 aar etter at verket ble publisert', isCorrect: false },
          { id: 'b', text: 'Skaperens levetid pluss 50 aar', isCorrect: false },
          { id: 'c', text: 'Skaperens levetid pluss 70 aar', isCorrect: true },
          { id: 'd', text: 'Opphavsretten varer evig saa lenge arvinger hevder den', isCorrect: false },
        ],
        solution: 'I Norge varer opphavsretten i skaperens levetid pluss 70 aar etter skaperens dod. Etter dette faller verket i det offentlige domene og kan brukes fritt av alle. Vernetiden pa 70 aar etter doed er harmonisert i EU/EOES og er lengre enn Bernkonvensjonens minstekrav pa 50 aar.',
      },
    },
  ],
};

// ============================================================================
// Kapittel 6.5: Digital kompetanse og dannelse
// ============================================================================

const CHAPTER_KOMKULT2_6_5: TextbookChapter = {
  id: 'komkult2-6-5',
  courseId: 'komkult-2',
  chapterNumber: '6.5',
  title: 'Digital kompetanse og dannelse',
  description: 'Digital danning, mediekompetanse, nettvett, personvern og etisk bruk av teknologi.',
  estimatedMinutes: 25,
  competenceGoals: [
    'droefte digital kompetanse og danning i eit demokratisk perspektiv',
  ],
  keyTerms: [
    { term: 'Digital kompetanse', definition: 'Evnen til a bruke digitale verktoy og medier pa en hensiktsmessig, kritisk og etisk mate, inkludert tekniske ferdigheter, informasjonskompetanse og digital doemmeraft.' },
    { term: 'Digital dannelse', definition: 'En bredere kompetanse enn teknisk bruk, som omfatter evnen til a reflektere over teknologiens rolle i samfunnet, handle etisk i digitale omgivelser og delta konstruktivt i den digitale offentligheten.' },
    { term: 'Personvern', definition: 'Retten til a kontrollere informasjon om seg selv, beskyttet gjennom personopplysningsloven og EUs personvernforordning (GDPR).' },
    { term: 'Digital fotavtrykk', definition: 'Sporene vi etterlater oss pa nett gjennom aktiviteter som soek, innlegg, kjop og navigering, bade bevisst og ubevisst.' },
    { term: 'Mediekompetanse', definition: 'Evnen til a finne, vurdere, bruke og skape medieinnhold pa en kritisk og reflektert mate.' },
  ],
  exercises: [],
  content: [
    {
      id: 'kk2-6-5-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'I et samfunn der digital teknologi gjennomsyrer alle omraader av livet, er digital kompetanse blitt like grunnleggende som lesing og skriving. Men det holder ikke bare a kunne bruke teknologien teknisk. Vi trenger ogsa evnen til a tenke kritisk om teknologiens rolle i samfunnet, a handle etisk i digitale omgivelser, og a delta konstruktivt i den digitale offentligheten. I dette kapittelet undersoekes hva digital kompetanse og digital dannelse innebærer, hvorfor personvern er viktig, og hvordan vi kan vaere ansvarlige digitale borgere.',
    },
    {
      id: 'kk2-6-5-def-1',
      type: 'definition',
      title: 'Digital kompetanse og digital dannelse',
      content:
        'Digital kompetanse omfatter de ferdighetene, kunnskapene og holdningene som trengs for a bruke digitale verktoy og medier pa en hensiktsmessig mate. Det norske rammeverket for digital kompetanse identifiserer fire omraader: teknologiske ferdigheter (a kunne bruke digitale verktoy), informasjonskompetanse (a kunne finne, vurdere og bruke informasjon), kommunikasjonskompetanse (a kunne kommunisere hensiktsmessig digitalt), og produksjonskompetanse (a kunne skape digitalt innhold). Digital dannelse gaar lengre enn tekniske ferdigheter. Det handler om a utvikle en reflektert og etisk holdning til teknologiens rolle i livet og samfunnet. En digitalt dannet person forstaar hvordan digitale medier pavirker individ og samfunn, handler etisk i digitale omgivelser, tar informerte valg om egen digital aktivitet, og deltar konstruktivt i den digitale offentligheten.',
    },
    {
      id: 'kk2-6-5-example-1',
      type: 'example',
      title: 'Digital doemmekraft i praksis: kildekritikk',
      content:
        'En elev leter etter informasjon om klimaendringer til en skoleoppgave. Et Google-soek gir tusenvis av resultater: vitenskapelige artikler, nyhetsreportasjer, blogginnlegg, YouTube-videoer og innlegg pa sosiale medier. Noen haevder at klimaendringene er menneskeskapte, andre at de er overdrevne. Digital doemmeraft innebærer a vurdere kilden (hvem staar bak?), kompetansen (har avsenderen faglig bakgrunn?), motivasjonen (er det et oekonomisk eller politisk motiv?), dokumentasjonen (er paastandene underbygget med forskning?), og bredden (finnes det konsensus blant fagfolk?). En digitalt kompetent elev ville raskt identifisere at det er overveldende vitenskapelig konsensus (97-99 % av klimaforskere) om at klimaendringene er menneskeskapte, og at kilder som haevder noe annet ofte mangler vitenskapelig grunnlag eller har tilknytning til fossilindustrien.',
    },
    {
      id: 'kk2-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom digital kompetanse og digital dannelse?',
        options: [
          { id: 'a', text: 'Digital kompetanse handler bare om programmering, mens digital dannelse handler om sosiale medier', isCorrect: false },
          { id: 'b', text: 'Digital kompetanse omfatter tekniske ferdigheter og informasjonskompetanse, mens digital dannelse ogsa inkluderer etisk refleksjon over teknologiens rolle i samfunnet', isCorrect: true },
          { id: 'c', text: 'Digital kompetanse er for unge, mens digital dannelse er for voksne', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell; begrepene betyr det samme', isCorrect: false },
        ],
        solution: 'Digital kompetanse handler om ferdigheter og kunnskaper for a bruke digitale verktoy og medier hensiktsmessig. Digital dannelse gaar videre og inkluderer evnen til etisk refleksjon, kritisk tenkning om teknologiens samfunnsrolle, og konstruktiv deltakelse i den digitale offentligheten. Dannelse innebærer en dypere forstaelse av teknologiens implikasjoner.',
      },
    },
    {
      id: 'kk2-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tre konkrete eksempler pa situasjoner der digital doemmeraft er viktig i hverdagen. Forklar hvilke sporssmaal man boer stille seg i hver situasjon.',
        hints: ['Tenk pa situasjoner knyttet til nyheter, kjop pa nett, og kommunikasjon i sosiale medier.'],
        solution: 'Eksempler: 1) Nar man leser en nyhetssak delt pa sosiale medier: Er kilden troverdig? Er det en serioes nyhetskanal? Finnes saken hos andre medier? 2) Nar man vurderer et produkt basert pa nettanmeldelser: Er anmeldelsene ekte? Er det betalt innhold? 3) Nar man mottar en e-post med en lenke: Er dette phishing? Er avsenderen ekte? Hvorfoor ber de om personlig informasjon?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-5-def-2',
      type: 'definition',
      title: 'Personvern og digitalt fotavtrykk',
      content:
        'Personvern er retten til a kontrollere informasjon om seg selv. I Norge og EU er personvernet regulert gjennom personvernforordningen GDPR (General Data Protection Regulation), som stiller strenge krav til hvordan personopplysninger samles inn, lagres og brukes. Det digitale fotavtrykket er sporene vi etterlater oss pa nett: soekehistorikk, innlegg pa sosiale medier, kjopshistorikk, posisjonsdata og alle andre digitale aktiviteter. Det digitale fotavtrykket er bade aktivt (bevisste handlinger som a poste et bilde) og passivt (ubevisste spor som cookies og posisjonsdata). Mange er ikke klar over omfanget av sporene de etterlater, eller hvordan disse dataene brukes av teknologiselskaper til reklame, profilering og i noen tilfeller overvaaking.',
    },
    {
      id: 'kk2-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva GDPR er og hvilke rettigheter det gir borgere over egne personopplysninger. Gi eksempler pa hvordan GDPR pavirker hverdagen din som bruker av digitale tjenester.',
        hints: ['Tenk pa samtykke-dialoger, retten til innsyn og retten til a bli glemt.'],
        solution: 'GDPR (General Data Protection Regulation) er EUs personvernforordning fra 2018. Den gir borgere rettigheter som innsyn (se hva som lagres om deg), retting (korrigere feil), sletting (retten til a bli glemt), og dataportabilitet (flytte data mellom tjenester). I hverdagen merkes GDPR blant annet gjennom samtykke-dialoger for informasjonskapsler, muligheten til a laste ned egne data, og krav om tydelig informasjon om datainnsamling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom aktivt og passivt digitalt fotavtrykk. Droeft hvorfor det er viktig a vaere bevisst pa sitt eget digitale fotavtrykk, og gi eksempler pa tiltak man kan gjore for a beskytte personvernet sitt.',
        hints: [
          'Aktivt fotavtrykk: ting du bevisst deler. Passivt fotavtrykk: spor som samles uten at du tenker over det.',
          'Tenk pa konsekvenser for fremtidig jobb, forsikring og omdoemme.',
        ],
        solution: 'Aktivt digitalt fotavtrykk er bevisste handlinger: poster pa sosiale medier, kommentarer, bilder. Passivt digitalt fotavtrykk er ubevisste spor: cookies, soekehistorikk, posisjonsdata. Tiltak: bruke sterke passord, begrense deling, sjekke personverninnstillinger, bruke VPN, vaere bevisst pa hva man samtykker til, slette gamle kontoer. Viktig fordi digitale spor kan pavirke jobb, forsikring og omdoemme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Digital kompetanse omfatter tekniske ferdigheter, informasjonskompetanse, kommunikasjonskompetanse og produksjonskompetanse. Digital dannelse gaar videre og inkluderer etisk refleksjon og kritisk tenkning om teknologiens samfunnsrolle. Kildekritikk og digital doemmekraft er avgjorende ferdigheter i en tid med informasjonsoverflod og desinformasjon. Personvern er en grunnleggende rettighet beskyttet av GDPR, og bevissthet om det digitale fotavtrykket er viktig for alle som bruker digitale tjenester. Aa vaere en ansvarlig digital borger krever bade kunnskap og holdninger.',
    },
    // --- Samleoppgaver ---
    {
      id: 'kk2-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et reflekterende essay der du droefter foelgende: «Digital dannelse er viktigere enn digital kompetanse i det 21. aarhundre.» Bruk kunnskap fra alle kapitlene i del 6 (sosiale medier og identitet, algoritmer og filterbobler, nettkultur og memes, digital deling og opphavsrett, digital kompetanse og dannelse) til a belyse paastanden. Skriv 400-500 ord.',
        hints: [
          'Ta stilling til paastanden, men vis at du forstaar argumenter bade for og mot.',
          'Bruk konkrete eksempler fra kapitlene for a underbygge argumentene dine.',
        ],
        solution: 'Svaret boer ta stilling til paastanden og argumentere for at bade kompetanse og dannelse er noedvendig. God besvarelse viser at digital kompetanse uten dannelse kan foere til effektiv men ureflektert bruk (f.eks. a lage deepfakes), mens dannelse uten kompetanse gir liten praktisk verdi. Fremragende svar trekker trad mellom kapitlene: algoritmenes makt krever kritisk forstaelse (dannelse), men ogsa teknisk kunnskap om hvordan de fungerer (kompetanse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-6-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva innebærer retten til a bli glemt, som er en del av GDPR?',
        options: [
          { id: 'a', text: 'At teknologiselskaper maa slette all data hvert aar', isCorrect: false },
          { id: 'b', text: 'At borgere kan kreve at personopplysninger om dem slettes fra digitale tjenester', isCorrect: true },
          { id: 'c', text: 'At staten kan fjerne borgernes digitale identitet', isCorrect: false },
          { id: 'd', text: 'At alle internettbrukere har rett til a vaere anonyme', isCorrect: false },
        ],
        solution: 'Retten til a bli glemt (right to erasure) er en sentral rettighet i GDPR. Den gir borgere rett til a kreve at personopplysninger om dem slettes fra digitale tjenester nar opplysningene ikke lenger er noedvendige for formaalet de ble samlet inn for, nar samtykket trekkes tilbake, eller nar behandlingen er ulovlig. Retten er ikke absolutt og maa balanseres mot andre hensyn som ytringsfrihet og arkivformaal.',
      },
    },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT2_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT2_6_1,
  CHAPTER_KOMKULT2_6_2,
  CHAPTER_KOMKULT2_6_3,
  CHAPTER_KOMKULT2_6_4,
  CHAPTER_KOMKULT2_6_5,
];
