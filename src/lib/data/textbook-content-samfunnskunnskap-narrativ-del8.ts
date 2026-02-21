/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8.1 NARRATIV: Den norske velferdsstaten
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_8_1_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-8-1-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.1',
  title: 'Den norske velferdsstaten',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om hvordan Norge ble en velferdsstat, hvilke prinsipper som ligger til grunn, og hvordan hele systemet finansieres og fungerer i hverdagen din.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare kjennetegnene ved den norske velferdsstaten',
    'forstå hvordan velferdsstaten finansieres og fungerer',
  ],
  linkedChapterId: 'samfunnskunnskap-8-1',
  content: [
    {
      id: 'samfunnskunnskap-8-1-n-intro',
      type: 'text',
      content: `## Et sikkerhetsnett du kanskje tar for gitt

Tenk deg at du brekker beinet i morgen. Du ringer 113, blir hentet av ambulanse, operert på sykehuset og får gips. Etterpå får du fysioterapi og eventuelt sykepenger dersom du ikke kan jobbe. Hele denne kjeden koster deg nesten ingenting. Prislappen? Noen hundrelapper i egenandel, kanskje.

Slik er det ikke i de fleste land. I USA kan en ambulansetur alene koste deg 50 000 kroner, og en operasjon kan gi deg gjeld resten av livet. I mange utviklingsland finnes det knapt et helsevesen å snakke om.

Det du nettopp forestilte deg, er den norske **velferdsstaten** i aksjon. En velferdsstat er en stat som tar ansvar for innbyggernes velferd gjennom offentlige ordninger. Det betyr at fellesskapet -- gjennom staten -- sørger for at alle har tilgang til helsetjenester, utdanning, trygd og pensjon. Norge er et av landene i verden som har bygget ut denne modellen aller mest.

Hva kjennetegner den norske velferdsstaten? Vi kan peke på fire hovedtrekk. For det første har vi **universelle ordninger** som gjelder alle -- ikke bare de fattigste. For det andre er den **finansiert gjennom skatter og avgifter** som vi alle bidrar med. For det tredje har vi en **omfattende offentlig sektor** med hundretusenvis av ansatte i skoler, sykehus og kommuner. Og for det fjerde er målet **likhet og trygghet** -- at ingen skal falle utenfor.

Men hvordan ble det slik? Det er det vi skal se nærmere på nå.`,
    },
    {
      id: 'samfunnskunnskap-8-1-n-section1',
      type: 'text',
      content: `## Fra fattiglover til folketrygd

Velferdsstaten oppsto ikke over natten. Den er resultatet av over hundre år med kamp, reformer og politiske kompromisser.

**På 1800-tallet** var det minimalt med offentlig hjelp. Det fantes fattiglover som ga de aller fattigste noe støtte, men det var ofte knyttet til skam og stigma. Fabrikklovgivningen begynte å beskytte arbeidere mot de verste utnyttelsene, men det var frivillige organisasjoner og kirken som i stor grad tok seg av de svakeste.

**I mellomkrigstiden** begynte moderne trygdeordninger å ta form. Arbeidsledighets- og syketrygd ble innført, og grunnlaget for en mer systematisk velferdsstat ble lagt. Arbeiderbevegelsen og det organiserte arbeidslivet presset på for bedre rettigheter for vanlige folk.

**Etter andre verdenskrig** kom det store gjennombruddet. Med gjenoppbyggingen av landet fulgte en storstilt utbygging av velferdsstaten. Folketrygden ble innført i 1967 og samlet en rekke trygdeordninger under ett system. Gratis utdanning og helsetjenester ble en selvfølge. Det er i denne perioden "den nordiske modellen" virkelig tar form -- en velferdsstat bygget på universelle ordninger, høye skatter og sterk omfordeling.

**I nyere tid** har velferdsstaten vært gjenstand for videreutvikling og reformer. Det pågår stadig debatter om bærekraft: Har vi råd til alt dette i fremtiden? Bør mer overlates til private aktører, eller bør det offentlige beholde sin sentrale rolle? Pensjonsreformer har blitt gjennomført, NAV ble opprettet i 2006, og balansen mellom offentlig og privat drift er et stadig politisk stridstema.`,
    },
    {
      id: 'samfunnskunnskap-8-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'samfunnskunnskap-8-1-n-quiz1-q0',
            task: 'Hva kjennetegner den norske velferdsstaten?',
            options: [
              { id: 'a', text: 'Behovsprøvde ordninger som kun gjelder de fattigste', isCorrect: false },
              { id: 'b', text: 'Universelle ordninger finansiert gjennom skatter og avgifter', isCorrect: true },
              { id: 'c', text: 'Et system der alle må tegne privat forsikring', isCorrect: false },
              { id: 'd', text: 'En modell der familien har hovedansvaret for velferd', isCorrect: false },
            ],
            solution: 'Den norske velferdsstaten kjennetegnes av universelle ordninger som gjelder alle, finansiert gjennom skatter og avgifter, med en omfattende offentlig sektor og mål om likhet og sosial trygghet.',
          },
          {
            id: 'samfunnskunnskap-8-1-n-quiz1-q1',
            task: 'Når ble Folketrygden innført i Norge?',
            options: [
              { id: 'a', text: '1945', isCorrect: false },
              { id: 'b', text: '1957', isCorrect: false },
              { id: 'c', text: '1967', isCorrect: true },
              { id: 'd', text: '1977', isCorrect: false },
            ],
            solution: 'Folketrygden ble innført i 1967 og samlet en rekke trygdeordninger under ett felles system. Den dekker blant annet sykepenger, dagpenger, uføretrygd, alderspensjon og foreldrepenger.',
          },
          {
            id: 'samfunnskunnskap-8-1-n-quiz1-q2',
            task: 'Hva betyr universalisme i velferdssammenheng?',
            options: [
              { id: 'a', text: 'At bare de som har betalt mest skatt får hjelp', isCorrect: false },
              { id: 'b', text: 'At ordningene gjelder alle, ikke bare de fattige', isCorrect: true },
              { id: 'c', text: 'At hjelpen er lik i alle land i verden', isCorrect: false },
              { id: 'd', text: 'At private selskaper administrerer velferdstjenestene', isCorrect: false },
            ],
            solution: 'Universalisme betyr at velferdsordningene gjelder alle innbyggere, uavhengig av inntekt. Dette skaper fellesskap og legitimitet, og unngår stigmatisering av de som mottar hjelp.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'samfunnskunnskap-8-1-n-section2',
      type: 'text',
      content: `## Prinsippene bak -- hvorfor det fungerer

Velferdsstaten hviler på noen grunnleggende prinsipper. Det første og kanskje viktigste er **universalisme**. Det betyr at ordningene gjelder alle -- ikke bare de fattige. Alle barn går på den samme offentlige skolen, alle kan gå til fastlegen, alle har rett på pensjon. Denne universelle tilnærmingen har en viktig fordel: den skaper fellesskap og legitimitet. Når alle bruker de samme tjenestene, er alle villige til å betale for dem gjennom skatt. Den unngår også stigmatisering -- du trenger ikke å "bevise" at du er fattig nok til å fortjene hjelp.

Det andre prinsippet er **omfordeling**. I Norge yter vi skatt etter evne og får ytelser etter behov. De som tjener mest, betaler mest i skatt, og de pengene brukes til å finansiere tjenester som alle har tilgang til. Slik reduseres de økonomiske forskjellene mellom rik og fattig. Det gamle idealet "yte etter evne, få etter behov" lever videre som en bærende tanke i den norske modellen.

Det tredje prinsippet er **sosial trygghet**. Velferdsstaten fungerer som et sikkerhetsnett. Blir du syk, mister du jobben, eller blir du gammel, skal du ikke falle ned i fattigdom. Alle skal ha verdige levekår, uansett hva livet bringer.

Det fjerde prinsippet er **likhet** -- eller mer presist, like muligheter. Gratis utdanning og helsetjenester skal sikre at alle barn har de samme mulighetene, uavhengig av foreldrenes økonomi. Et barn fra en lavinntektsfamilie skal kunne bli lege like gjerne som et barn fra en velstående familie.`,
    },
    {
      id: 'samfunnskunnskap-8-1-n-section3',
      type: 'text',
      content: `## Pengene inn og pengene ut -- finansiering og ordninger

Men alt dette koster penger. Enorme summer, faktisk. Hvordan finansieres velferdsstaten?

Den viktigste inntektskilden er **skatter**. Inntektsskatt fra lønn og næring, formuesskatt på nettoformue og selskapsskatt fra bedrifter strømmer inn til staten. I tillegg kommer **avgifter**: merverdiavgift (moms) på nesten alt du kjøper, særavgifter på alkohol, tobakk og drivstoff, og arbeidsgiveravgift som arbeidsgiverne betaler. Til sammen utgjør skatter og avgifter rundt 80 prosent av statens inntekter.

Den andre store kilden er **Oljefondet**. Overskuddet fra olje- og gassvirksomheten spares i Statens pensjonsfond utland, og kun avkastningen brukes -- det er det vi kaller handlingsregelen. Det sikrer at fremtidige generasjoner også får glede av oljepengene.

Hvor går pengene? Statsbudsjettet fordeles på helse og omsorg, trygder og pensjoner, utdanning, forsvar og politi, samferdsel og overføringer til kommunene.

Og hva får du tilbake? La oss se på noen av de viktigste velferdsordningene. Innen **helse** har du fastlegeordningen, sykehusene, psykisk helsevern og gratis tannhelse for barn og unge. Innen **utdanning** er grunnskole og videregående gratis, og Lånekassen gir lån og stipend for høyere utdanning. **Folketrygden** gir deg sykepenger når du er syk, dagpenger når du er arbeidsledig, uføretrygd hvis du varig mister arbeidsevnen, alderspensjon når du er gammel, og foreldrepenger når du får barn. I tillegg finnes **sosiale tjenester** som sosialhjelp, barnevern, rusomsorg og flyktningmottak. Og alt dette administreres i stor grad gjennom **NAV** -- Arbeids- og velferdsforvaltningen -- som samler arbeidsformidling og trygdeutbetalinger under ett tak.`,
    },
    {
      id: 'samfunnskunnskap-8-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'samfunnskunnskap-8-1-n-quiz2-q0',
            task: 'Hva er handlingsregelen?',
            options: [
              { id: 'a', text: 'En regel om at staten ikke kan bruke mer enn 50% av skatteinntektene', isCorrect: false },
              { id: 'b', text: 'En regel om at kun forventet realavkastning (3%) fra Oljefondet skal brukes', isCorrect: true },
              { id: 'c', text: 'En regel om at alle må jobbe minst 37,5 timer i uken', isCorrect: false },
              { id: 'd', text: 'En regel om at skattene ikke kan økes uten folkeavstemning', isCorrect: false },
            ],
            solution: 'Handlingsregelen sier at staten kun skal bruke forventet realavkastning (3%) fra Oljefondet i statsbudsjettet. Formålet er å sikre at fondet varer over tid og at fremtidige generasjoner også får glede av oljepengene.',
          },
          {
            id: 'samfunnskunnskap-8-1-n-quiz2-q1',
            task: 'Hvilket prinsipp sier at velferd ytes etter behov og skatt betales etter evne?',
            options: [
              { id: 'a', text: 'Universalisme', isCorrect: false },
              { id: 'b', text: 'Sosial trygghet', isCorrect: false },
              { id: 'c', text: 'Omfordeling', isCorrect: true },
              { id: 'd', text: 'Behovsprøving', isCorrect: false },
            ],
            solution: 'Omfordeling betyr at man yter skatt etter evne og får ytelser etter behov. De som tjener mest betaler mest i skatt, og pengene brukes til å finansiere tjenester for alle, noe som reduserer økonomiske forskjeller.',
          },
          {
            id: 'samfunnskunnskap-8-1-n-quiz2-q2',
            task: 'Hva er NAV?',
            options: [
              { id: 'a', text: 'Norges allmenne velferdsbank', isCorrect: false },
              { id: 'b', text: 'Arbeids- og velferdsforvaltningen som samler arbeidsformidling og trygdeutbetalinger', isCorrect: true },
              { id: 'c', text: 'Et privat forsikringsselskap for arbeidsledige', isCorrect: false },
              { id: 'd', text: 'Nasjonalt avtaleverk for velferdsordninger', isCorrect: false },
            ],
            solution: 'NAV er Arbeids- og velferdsforvaltningen, som ble opprettet i 2006 ved å slå sammen Aetat, trygdeetaten og sosialtjenesten. NAV forvalter folketrygden, driver arbeidsformidling og utbetaler trygder og stønader.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'samfunnskunnskap-8-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om den norske velferdsstaten -- et system der fellesskapet tar ansvar for innbyggernes trygghet. De fire grunnprinsippene er **universalisme** (ordningene gjelder alle), **omfordeling** (skatt etter evne, ytelser etter behov), **sosial trygghet** (sikkerhetsnett mot fattigdom) og **likhet** (like muligheter uavhengig av bakgrunn). Velferdsstaten finansieres gjennom skatter, avgifter og avkastning fra Oljefondet. Folketrygden gir rett til sykepenger, dagpenger, uføretrygd, pensjon og foreldrepenger, og NAV administrerer disse ordningene. Historisk har den utviklet seg fra 1800-tallets fattiglover, gjennom mellomkrigstidens trygdeordninger, til etterkrigtidens store utbygging med Folketrygden i 1967.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2 NARRATIV: Skatter og avgifter
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_8_2_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-8-2-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.2',
  title: 'Skatter og avgifter',
  subtitle: 'Narrativ versjon',
  description: 'En grundig fortelling om hvorfor vi betaler skatt, hvordan det progressive skattesystemet fungerer, og hva skattepengene dine faktisk går til.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare ulike typer skatter og avgifter',
    'forstå progressiv beskatning og omfordeling',
  ],
  linkedChapterId: 'samfunnskunnskap-8-2',
  content: [
    {
      id: 'samfunnskunnskap-8-2-n-intro',
      type: 'text',
      content: `## Tenk deg en verden uten skatt

Forestill deg at du våkner i morgen og all skatt er avskaffet. Høres fristende ut? La oss tenke litt videre. Hvem skal betale for veien du kjører på til skolen? Hvem skal lønne læreren som underviser deg? Hvem skal bemanne sykehuset når bestemor trenger en operasjon? Hvem skal betale politiet som rykker ut når noen ringer 112?

Uten **skatter og avgifter** ville alt dette forsvinne. Skatt er rett og slett samfunnets måte å finansiere fellesgodene på -- de tingene vi alle trenger, men ingen enkeltperson kan betale for alene.

Skatten har fire viktige funksjoner. Den skal **finansiere offentlige tjenester** som helse, utdanning og politi. Den skal **omfordele ressurser** fra de som har mye til de som har lite. Den skal **styre atferd** -- avgifter på tobakk og alkohol gjør helseskadelige produkter dyrere, mens CO2-avgiften gjør forurensning kostbart. Og den skal **stabilisere økonomien** -- i dårlige tider kan staten bruke mer av skattepengene for å holde hjulene i gang.

Men ikke alle skatter er like. La oss se nærmere på de to hovedtypene.`,
    },
    {
      id: 'samfunnskunnskap-8-2-n-section1',
      type: 'text',
      content: `## Direkte og indirekte skatter -- to veier til statskassen

**Direkte skatter** er skatter du betaler direkte til staten fra din egen lommebok. Den viktigste er **inntektsskatten**, som du betaler på lønn og næringsinntekt. I Norge har vi en trinnsskatt som er progressiv -- det betyr at skatteprosenten øker jo mer du tjener. I tillegg betaler alle en flat sats på 22 prosent på det som kalles alminnelig inntekt (inntekt etter fradrag). **Formuesskatt** betaler du hvis nettoformuen din er over et visst bunnfradrag, og den betales til både stat og kommune. Og bedrifter betaler **selskapsskatt** -- 22 prosent av overskuddet.

**Indirekte skatter** merker du kanskje ikke like godt, fordi de er bakt inn i prisen på det du kjøper. **Merverdiavgift** (moms) er den viktigste: 25 prosent på de fleste varer, 15 prosent på mat og 12 prosent på ting som kultur, transport og overnatting. I tillegg finnes **særavgifter** på spesifikke varer: alkohol- og tobakksavgift, drivstoffavgift, CO2-avgift og sukkeravgift. Disse avgiftene har en dobbeltfunksjon -- de gir staten inntekter, og de gjør det dyrere å kjøpe ting samfunnet ønsker å begrense.

Forskjellen mellom de to typene er viktig: Direkte skatter kan tilpasses inntektsnivå og være progressive. Indirekte skatter rammer alle relativt likt -- en liter melk koster like mye i moms for en millionær som for en student. Noen mener derfor at indirekte skatter er "urettferdige" fordi de utgjør en større andel av inntekten for de med lavest lønn.`,
    },
    {
      id: 'samfunnskunnskap-8-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'samfunnskunnskap-8-2-n-quiz1-q0',
            task: 'Hva er forskjellen på direkte og indirekte skatter?',
            options: [
              { id: 'a', text: 'Direkte skatter betales av bedrifter, indirekte av privatpersoner', isCorrect: false },
              { id: 'b', text: 'Direkte skatter betales direkte av den som ilegges dem, indirekte er inkludert i vareprisene', isCorrect: true },
              { id: 'c', text: 'Direkte skatter er høye, indirekte er lave', isCorrect: false },
              { id: 'd', text: 'Det finnes ingen reell forskjell, det er bare ulike navn', isCorrect: false },
            ],
            solution: 'Direkte skatter betales direkte av den som ilegges dem (inntektsskatt, formuesskatt, selskapsskatt). Indirekte skatter er inkludert i prisen på varer og tjenester (moms, særavgifter). Direkte skatter kan være progressive, mens indirekte rammer alle relativt likt.',
          },
          {
            id: 'samfunnskunnskap-8-2-n-quiz1-q1',
            task: 'Hva er merverdiavgiften (moms) på de fleste varer i Norge?',
            options: [
              { id: 'a', text: '12%', isCorrect: false },
              { id: 'b', text: '15%', isCorrect: false },
              { id: 'c', text: '22%', isCorrect: false },
              { id: 'd', text: '25%', isCorrect: true },
            ],
            solution: 'Merverdiavgiften (moms) er 25% på de fleste varer i Norge. Mat har en redusert sats på 15%, og kultur, transport og overnatting har en sats på 12%.',
          },
          {
            id: 'samfunnskunnskap-8-2-n-quiz1-q2',
            task: 'Hva er skattens fire hovedfunksjoner?',
            options: [
              { id: 'a', text: 'Finansiere tjenester, omfordele, styre atferd og stabilisere økonomien', isCorrect: true },
              { id: 'b', text: 'Straffe de rike, hjelpe de fattige, redusere forbruk og spare til fremtiden', isCorrect: false },
              { id: 'c', text: 'Finansiere militæret, betale gjeld, bygge veier og drive sykehus', isCorrect: false },
              { id: 'd', text: 'Betale politikere, drive skoler, redusere kriminalitet og sikre grensene', isCorrect: false },
            ],
            solution: 'Skattens fire hovedfunksjoner er: 1) Finansiere offentlige tjenester (helse, utdanning, politi), 2) Omfordele ressurser (fra rik til fattig), 3) Styre atferd (avgifter på tobakk, alkohol, miljøskadelig) og 4) Stabilisere økonomien.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'samfunnskunnskap-8-2-n-section2',
      type: 'text',
      content: `## Progressiv beskatning -- jo mer du tjener, jo mer bidrar du

Norge har et **progressivt skattesystem**. Det betyr at skatteprosenten øker med inntekten. De som tjener mest, betaler mest -- ikke bare i kroner, men også i prosent av inntekten.

Hvordan fungerer det i praksis? Det viktigste virkemiddelet er **trinnsskatten**. Den er delt inn i fire trinn med stigende satser (2024-tall): Trinn 1 gir 1,7 prosent på inntekt over 208 050 kroner. Trinn 2 gir 4,0 prosent over 292 850 kroner. Trinn 3 gir 13,6 prosent over 670 000 kroner. Og trinn 4 gir 16,6 prosent over 937 900 kroner. Legg merke til at du bare betaler den høyere satsen på den delen av inntekten som overstiger trinnet -- ikke på hele inntekten.

La oss ta et konkret eksempel. Si at du tjener 500 000 kroner i året. Da betaler du trinnsskatt slik: på trinn 1 (fra 208 050 til 292 850) betaler du 1,7 prosent, altså ca. 1 442 kroner. På trinn 2 (fra 292 850 til 500 000) betaler du 4,0 prosent, altså ca. 8 286 kroner. Total trinnsskatt: rundt 9 728 kroner. I tillegg betaler du 22 prosent på alminnelig inntekt etter fradrag -- med et fradrag på ca. 100 000 kroner blir det 22 prosent av 400 000, altså 88 000 kroner. Og arbeidsgiveren din betaler i tillegg arbeidsgiveravgift på 14,1 prosent, som på 500 000 kroner blir 70 500 kroner.

Hvorfor progressiv skatt? Det finnes flere begrunnelser. **Rettferdighet**: de som har mest, bør bidra mest. **Betalingsevne**: den siste kronen er verdt mindre for en som tjener en million enn for en som tjener 200 000. **Omfordeling**: det reduserer ulikhet i samfunnet. Og **stabilisering**: skatten fungerer som en automatisk stabilisator -- i dårlige tider faller skatteinnbetalingene automatisk, noe som demper nedturen.`,
    },
    {
      id: 'samfunnskunnskap-8-2-n-section3',
      type: 'text',
      content: `## Skattdebatten -- en kamp om verdier

Spørsmålet om skatt er kanskje det mest sentrale politiske stridsspørsmålet i Norge. Det handler ikke bare om tall og prosenter -- det handler om hva slags samfunn vi vil ha.

**Argumentene for høye skatter** er mange: Høye skatter finansierer gode fellesgoder som alle har glede av. De omfordeler og skaper likhet, noe som igjen gir et tryggere samfunn med høy tillit. De sikrer sosial trygghet for alle. Og de investerer i fremtiden gjennom utdanning og forskning.

**Argumentene for lavere skatter** er like mange: Lavere skatter stimulerer arbeidsvilje og innovasjon -- folk jobber hardere når de får beholde mer av det de tjener. Enkeltpersoner disponerer sine egne penger mer effektivt enn staten. Privat sektor er bedre enn offentlig sektor til å bruke ressursene. Og Norge må konkurrere med andre land om å tiltrekke seg bedrifter og arbeidskraft.

**Politisk** faller skillelinjene nokså forutsigbart. Venstresiden forsvarer høye skatter og vil gjerne øke formues- og inntektsskatten for de rikeste, med prioritering av omfordeling. Høyresiden vil redusere skatter og avgifter, mener privat sektor er mer effektiv, og vil stimulere investeringer og verdiskaping.

I tillegg finnes det **internasjonale hensyn** som kompliserer bildet. Land konkurrerer om å tiltrekke seg bedrifter ved å tilby lave skattesatser -- det kalles skattekonkurranse. Skatteparadiser tillater selskaper og rike enkeltpersoner å gjemme penger unna beskatning. Og multinasjonale selskaper driver sofistikert skatteplanlegging for å betale minst mulig skatt. Alt dette begrenser hva enkeltland kan gjøre med sine skattesatser.`,
    },
    {
      id: 'samfunnskunnskap-8-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'samfunnskunnskap-8-2-n-quiz2-q0',
            task: 'Hva betyr progressiv beskatning?',
            options: [
              { id: 'a', text: 'At alle betaler det samme beløpet i skatt', isCorrect: false },
              { id: 'b', text: 'At alle betaler den samme prosentandelen i skatt', isCorrect: false },
              { id: 'c', text: 'At skatteprosenten øker med inntekten', isCorrect: true },
              { id: 'd', text: 'At skatten beregnes ut fra formue, ikke inntekt', isCorrect: false },
            ],
            solution: 'Progressiv beskatning betyr at skatteprosenten øker med inntekten. De som tjener mest, betaler mest både i kroner og i prosent. Trinnsskatten er et eksempel: satsene stiger fra 1,7% til 16,6% ved høyere inntekter.',
          },
          {
            id: 'samfunnskunnskap-8-2-n-quiz2-q1',
            task: 'Hva er et viktig argument for høye skatter?',
            options: [
              { id: 'a', text: 'De gjør det vanskeligere å starte bedrifter', isCorrect: false },
              { id: 'b', text: 'De finansierer gode fellesgoder og skaper likhet', isCorrect: true },
              { id: 'c', text: 'De gjør at folk jobber hardere for å betale skatten', isCorrect: false },
              { id: 'd', text: 'De gjør Norge mer attraktivt for utenlandske investorer', isCorrect: false },
            ],
            solution: 'Et sentralt argument for høye skatter er at de finansierer gode fellesgoder som helse, utdanning og politi, og at de omfordeler ressurser, noe som skaper et mer likeverdig samfunn med sosial trygghet for alle.',
          },
          {
            id: 'samfunnskunnskap-8-2-n-quiz2-q2',
            task: 'Hva menes med skattekonkurranse mellom land?',
            options: [
              { id: 'a', text: 'At land konkurrerer om å ha de høyeste skattene', isCorrect: false },
              { id: 'b', text: 'At land senker skattesatsene for å tiltrekke seg bedrifter og investeringer', isCorrect: true },
              { id: 'c', text: 'At innbyggerne i ulike land konkurrerer om å betale mest skatt', isCorrect: false },
              { id: 'd', text: 'At FN bestemmer hva skattesatsene skal være i hvert land', isCorrect: false },
            ],
            solution: 'Skattekonkurranse betyr at land senker sine skattesatser for å tiltrekke seg bedrifter, investeringer og arbeidskraft. Dette kan føre til et "kappløp mot bunnen" og gjør det vanskeligere for enkeltland å opprettholde høye skattesatser.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'samfunnskunnskap-8-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om skatter og avgifter som samfunnets viktigste finansieringsmekanisme. Skatt har fire funksjoner: finansiere fellesgoder, omfordele ressurser, styre atferd og stabilisere økonomien. Vi skiller mellom **direkte skatter** (inntektsskatt, formuesskatt, selskapsskatt) som betales direkte av den som ilegges dem, og **indirekte skatter** (moms, særavgifter) som er inkludert i vareprisene. Norges **progressive skattesystem** betyr at skatteprosenten øker med inntekten gjennom trinnsskatten, med satser fra 1,7% til 16,6%. Skattedebattens kjerne handler om balansen mellom fellesskap og individ -- venstresiden forsvarer høye skatter og omfordeling, høyresiden vil senke skattetrykket for å stimulere vekst. Internasjonalt utfordres skattesystemet av skattekonkurranse, skatteparadiser og multinasjonale selskapers skatteplanlegging.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3 NARRATIV: Statsbudsjettet
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_8_3_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-8-3-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.3',
  title: 'Statsbudsjettet',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om statsbudsjettet -- Norges viktigste politiske dokument, hvordan det lages, hva pengene går til, og hvorfor handlingsregelen er avgjørende.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forstå hvordan statsbudsjettet utarbeides',
    'kjenne til hovedpostene i statsbudsjettet',
  ],
  linkedChapterId: 'samfunnskunnskap-8-3',
  content: [
    {
      id: 'samfunnskunnskap-8-3-n-intro',
      type: 'text',
      content: `## Norges viktigste dokument

Hver høst, vanligvis tidlig i oktober, skjer det noe som får alle politikere, journalister og samfunnsinteresserte til å følge med: Finansministeren legger frem **statsbudsjettet**. Det er statens økonomiske plan for det kommende året -- et dokument som viser hvordan regjeringen planlegger å bruke og skaffe tusenvis av milliarder kroner.

Statsbudsjettet er mye mer enn tall og tabeller. Det er et politisk dokument som avslører regjeringens virkelige prioriteringer. Det er lett å si at man er for bedre helse, mer utdanning og tryggere veier. Men statsbudsjettet tvinger politikerne til å vise hva de faktisk prioriterer -- for pengene strekker ikke til alt.

Prosessen starter lenge før dokumentet legges frem. Hvert **departement** utarbeider forslag til sitt budsjettområde: Helsedepartementet ber om penger til sykehus, Kunnskapsdepartementet til skoler, Forsvarsdepartementet til militæret. Deretter koordinerer **Finansdepartementet** alle forslagene og sørger for at helheten henger sammen. Til slutt samler **regjeringen** seg om et felles forslag som legges frem for Stortinget i oktober.`,
    },
    {
      id: 'samfunnskunnskap-8-3-n-section1',
      type: 'text',
      content: `## Fra forslag til vedtak -- budsjettprosessen

Når regjeringens forslag er lagt frem, begynner den parlamentariske behandlingen. Først tar **Finanskomitéen** seg av helheten og de store tallene. Deretter behandler **fagkomiteene** hvert sitt område -- Helse- og omsorgskomiteen ser på helsebudsjettet, Utdannings- og forskningskomiteen på skoler og universiteter, og så videre. Til slutt debatterer og vedtar **Stortinget** budsjettet, vanligvis i desember.

I mindretallsregjeringer -- som er vanlig i Norge -- må regjeringen forhandle med støttepartier for å få flertall. Disse forhandlingene kan endre budsjettet betydelig, og den endelige avtalen reflekterer ofte kompromisser mellom flere partier.

Men budsjettet lever ikke bare i et år. Det neste årets budsjett bygger alltid på det foregående. Endringer skjer vanligvis på marginen -- noen poster økes, andre kuttes, nye satsinger legges til. Budsjettet tilpasses også den økonomiske situasjonen: I dårlige tider bruker staten mer for å stimulere økonomien, i gode tider strammer den inn.

Og året er ikke over med desembervedtaket. I mai legger regjeringen frem et **revidert budsjett** som justerer for endringer som har skjedd siden budsjettet ble vedtatt. Kanskje har arbeidsledigheten økt mer enn forventet, eller oljeinntektene blitt høyere. Det reviderte budsjettet behandles av Stortinget i juni.`,
    },
    {
      id: 'samfunnskunnskap-8-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'samfunnskunnskap-8-3-n-quiz1-q0',
            task: 'Når legger regjeringen vanligvis frem statsbudsjettet?',
            options: [
              { id: 'a', text: 'Januar', isCorrect: false },
              { id: 'b', text: 'Mai', isCorrect: false },
              { id: 'c', text: 'Oktober', isCorrect: true },
              { id: 'd', text: 'Desember', isCorrect: false },
            ],
            solution: 'Regjeringen legger vanligvis frem statsbudsjettet i oktober. Deretter behandles det av Stortinget og vedtas i desember. Et revidert budsjett legges frem i mai.',
          },
          {
            id: 'samfunnskunnskap-8-3-n-quiz1-q1',
            task: 'Hvilken komité behandler helheten i statsbudsjettet?',
            options: [
              { id: 'a', text: 'Helse- og omsorgskomiteen', isCorrect: false },
              { id: 'b', text: 'Kontroll- og konstitusjonskomiteen', isCorrect: false },
              { id: 'c', text: 'Finanskomitéen', isCorrect: true },
              { id: 'd', text: 'Utenrikskomiteen', isCorrect: false },
            ],
            solution: 'Finanskomitéen behandler helheten i statsbudsjettet. Deretter behandler fagkomiteene hvert sitt budsjettområde, før Stortinget vedtar det endelige budsjettet.',
          },
          {
            id: 'samfunnskunnskap-8-3-n-quiz1-q2',
            task: 'Hva er det reviderte budsjettet?',
            options: [
              { id: 'a', text: 'Et helt nytt budsjettforslag som erstatter det opprinnelige', isCorrect: false },
              { id: 'b', text: 'En justert versjon av statsbudsjettet som legges frem i mai', isCorrect: true },
              { id: 'c', text: 'Et budsjett for kommunene som lages av fylkeskommunen', isCorrect: false },
              { id: 'd', text: 'Et hemmelig dokument som bare regjeringen ser', isCorrect: false },
            ],
            solution: 'Det reviderte budsjettet er en justert versjon av statsbudsjettet som legges frem i mai. Det tar høyde for endringer som har skjedd etter det opprinnelige vedtaket, for eksempel endrede økonomiske forutsetninger.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'samfunnskunnskap-8-3-n-section2',
      type: 'text',
      content: `## Pengene inn -- statens inntekter

Hvor kommer alle pengene fra? Statens inntekter har tre hovedkilder.

Den desidert viktigste er **skatter og avgifter**, som utgjør omtrent 80 prosent av inntektene. Hit hører skatt på inntekt og formue, merverdiavgift, arbeidsgiveravgift og særavgifter. Hver gang du jobber, handler eller fyller bensin, bidrar du til statskassen.

Den andre kilden er **petroleumsinntekter** -- skatt på oljeselskaper, avgifter og utbytte fra Equinor (som staten eier 67 prosent av). Disse inntektene varierer kraftig med oljeprisen. I gode år strømmer det inn enorme beløp; i dårlige år faller de betraktelig.

Den tredje kilden er **andre inntekter** -- utbytte fra statlige selskaper som Telenor og DNB, gebyrer og avgifter, og tilbakebetaling av lån.

Og så har vi **handlingsregelen** -- kanskje den viktigste finanspolitiske spilleregelen i Norge. Statsbudsjettet har normalt et strukturelt underskudd, som betyr at staten bruker mer enn den henter inn i skatter og avgifter. Forskjellen dekkes av overføringer fra Oljefondet. Handlingsregelen sier at vi bare skal bruke forventet realavkastning av fondet, som er satt til 3 prosent. Med et fond på over 15 000 milliarder kroner tilsvarer det rundt 450 milliarder i året -- en enorm sum som gir fleksibilitet til å finansiere velferden vår.`,
    },
    {
      id: 'samfunnskunnskap-8-3-n-section3',
      type: 'text',
      content: `## Pengene ut -- statens utgifter

Totalbudsjettet for den norske staten er på omtrent 1 800 milliarder kroner i året (2024-tall). Hvor går pengene?

Den klart største posten er **Folketrygden** med rundt 550 milliarder kroner. Dette dekker pensjoner, sykepenger, dagpenger, uføretrygd og foreldrepenger. Nummer to er **helse og omsorg** med ca. 250 milliarder -- sykehus, fastleger, psykisk helsevern og eldreomsorg. Deretter kommer **kommuneoverføringer** med ca. 200 milliarder -- penger som sendes til kommunene for å drive skoler, barnehager og lokale tjenester. **Utdanning og forskning** ligger på ca. 90 milliarder, **forsvar** på ca. 90 milliarder, og **samferdsel** (veier, jernbane, ferger) på ca. 80 milliarder.

Et viktig skille i budsjettet er mellom **bundne** og **frie midler**. Bundne utgifter er ting staten er forpliktet til å betale -- pensjoner og trygder er rettighetsbaserte, og renteutgifter må betales. Disse er vanskelige å kutte uten å endre lovverket. Frie midler, derimot, kan prioriteres politisk -- kulturbudsjettet, bistand, forskning. Det er her det politiske handlingsrommet ligger, og det er her de hardeste debattene står.

Men det finnes en utfordring som henger over alt dette: Bruker vi for mye av Oljefondet, tar vi fra fremtidige generasjoner. Bruker vi for lite, holder vi tilbake velferd vi kunne hatt. Hvor mye bør vi bruke? Hva bør pengene gå til? Hvordan sikrer vi bærekraft på lang sikt? Disse spørsmålene er kjernen i den politiske debatten om statsbudsjettet hvert eneste år.`,
    },
    {
      id: 'samfunnskunnskap-8-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'samfunnskunnskap-8-3-n-quiz2-q0',
            task: 'Hva er den største utgiftsposten i statsbudsjettet?',
            options: [
              { id: 'a', text: 'Forsvar', isCorrect: false },
              { id: 'b', text: 'Utdanning og forskning', isCorrect: false },
              { id: 'c', text: 'Helse og omsorg', isCorrect: false },
              { id: 'd', text: 'Folketrygden (pensjon, trygd)', isCorrect: true },
            ],
            solution: 'Folketrygden er den klart største utgiftsposten med ca. 550 milliarder kroner (2024). Den dekker pensjoner, sykepenger, dagpenger, uføretrygd og foreldrepenger. Helse og omsorg er nest størst med ca. 250 milliarder.',
          },
          {
            id: 'samfunnskunnskap-8-3-n-quiz2-q1',
            task: 'Hva er handlingsregelen?',
            options: [
              { id: 'a', text: 'At Stortinget må vedta budsjettet med to tredjedels flertall', isCorrect: false },
              { id: 'b', text: 'At staten kun bruker forventet realavkastning (3%) fra Oljefondet', isCorrect: true },
              { id: 'c', text: 'At budsjettet ikke kan ha et underskudd', isCorrect: false },
              { id: 'd', text: 'At regjeringen må følge finanskomiteens anbefalinger', isCorrect: false },
            ],
            solution: 'Handlingsregelen sier at staten kun skal bruke forventet realavkastning (3%) fra Oljefondet. Formålet er å sikre at fondet varer, unngå overoppheting av økonomien og ta vare på fremtidige generasjoner.',
          },
          {
            id: 'samfunnskunnskap-8-3-n-quiz2-q2',
            task: 'Hva er forskjellen på bundne og frie midler i statsbudsjettet?',
            options: [
              { id: 'a', text: 'Bundne midler er lån, frie midler er skatteinntekter', isCorrect: false },
              { id: 'b', text: 'Bundne midler er rettighetsbaserte utgifter som er vanskelig å kutte, frie midler kan prioriteres politisk', isCorrect: true },
              { id: 'c', text: 'Bundne midler går til kommunene, frie midler går til staten', isCorrect: false },
              { id: 'd', text: 'Bundne midler er øremerket av EU, frie midler bestemmes av Stortinget', isCorrect: false },
            ],
            solution: 'Bundne utgifter er ting staten er forpliktet til å betale, som pensjoner og trygder (rettighetsbaserte). De er vanskelige å kutte. Frie midler kan prioriteres politisk -- det er her det politiske handlingsrommet og de hardeste debattene befinner seg.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'samfunnskunnskap-8-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om statsbudsjettet -- Norges viktigste politiske dokument. Det viser regjeringens prioriteringer og behandles gjennom en prosess der departementene utarbeider forslag, Finansdepartementet koordinerer, regjeringen legger frem i oktober, **Finanskomitéen** og fagkomiteene behandler, og Stortinget vedtar i desember. Statens inntekter kommer fra **skatter og avgifter** (ca. 80%), petroleumsinntekter og overføringer fra Oljefondet. De største utgiftspostene er **Folketrygden** (ca. 550 mrd.), helse og omsorg (ca. 250 mrd.) og kommuneoverføringer (ca. 200 mrd.). **Handlingsregelen** sikrer at vi kun bruker forventet realavkastning (3%) fra Oljefondet, og skillet mellom bundne og frie midler viser hvor det politiske handlingsrommet ligger.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4 NARRATIV: Velferdsordninger (kortere kapittel)
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_8_4_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-8-4-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.4',
  title: 'Velferdsordninger',
  subtitle: 'Narrativ versjon',
  description: 'En oversiktlig fortelling om de viktigste velferdsordningene i Norge -- fra sykepenger til pensjon -- og hvordan NAV holder det hele sammen.',
  estimatedMinutes: 15,
  competenceGoals: [
    'kjenne til de viktigste velferdsordningene',
    'forstå hvordan NAV og folketrygden fungerer',
  ],
  linkedChapterId: 'samfunnskunnskap-8-4',
  content: [
    {
      id: 'samfunnskunnskap-8-4-n-intro',
      type: 'text',
      content: `## Et sikkerhetsnett for hele livet

Tenk deg livets mange faser -- og alt som kan skje underveis. Du blir født, og foreldrene dine trenger permisjon for å ta vare på deg. Du vokser opp og trenger barnehage, skole og helsetjenester. Du begynner å jobbe, men kanskje blir du syk eller mister jobben. Du blir gammel og trenger pensjon og kanskje omsorgstjenester.

I Norge er du dekket i alle disse fasene. De norske **velferdsordningene** fungerer som et sikkerhetsnett gjennom hele livsløpet, og det meste administreres av én organisasjon: **NAV**.

NAV -- Arbeids- og velferdsforvaltningen -- ble opprettet i 2006 ved å slå sammen tre etater: Aetat (arbeidsformidling), trygdeetaten (trygdeutbetalinger) og den kommunale sosialtjenesten. Tanken var at folk som trenger hjelp fra det offentlige, ikke skal bli sendt fra kontor til kontor, men få all hjelp på ett sted. NAVs hovedoppgaver er å forvalte folketrygden, drive arbeidsformidling, følge opp arbeidssøkere, utbetale trygder og stønader, og tilby sosialtjenester i samarbeid med kommunene.`,
    },
    {
      id: 'samfunnskunnskap-8-4-n-section1',
      type: 'text',
      content: `## Ordningene du bør kjenne til

La oss gå gjennom de viktigste velferdsordningene som folketrygden gir deg rett til.

**Sykepenger** er det du får dersom du blir syk og ikke kan jobbe. Du får 100 prosent av lønnen din (opp til 6G, som er ca. 710 000 kroner) i inntil ett år. De første 16 dagene betaler arbeidsgiveren, deretter tar NAV over. Du trenger sykmelding fra legen for å motta sykepenger.

**Dagpenger** er det du får dersom du mister jobben. Beløpet er ca. 62 prosent av din tidligere inntekt, og du må være aktiv arbeidssøker -- det vil si at du aktivt leter etter ny jobb og er tilgjengelig for arbeidsmarkedet.

**Arbeidsavklaringspenger (AAP)** er en mellomting. Du får dem mens det avklares om du kan komme tilbake i jobb etter sykdom eller skade. Du må delta aktivt i tiltak, som behandling, arbeidsrettede tiltak eller utdanning.

**Uføretrygd** er for deg som varig har fått nedsatt arbeidsevne. For å få uføretrygd kreves det at arbeidsevnen din er grundig prøvd -- du kan ikke få den uten at det er forsøkt å hjelpe deg tilbake i jobb. Ytelsen er 66 prosent av tidligere inntekt.

**Alderspensjon** får du fra du fyller 67 år, med mulighet for fleksibelt uttak allerede fra 62. Pensjonen opptjenes gjennom arbeid og består av en grunnpensjon og en tilleggspensjon.

**Foreldrepenger** sikrer inntekt ved fødsel eller adopsjon. Du kan velge mellom 100 prosent lønn i en kortere periode eller 80 prosent i en lengre periode, og permisjonen fordeles mellom foreldrene.

Legg merke til den logiske sammenhengen: Sykepenger er for kortvarig sykdom, AAP er for avklaring, og uføretrygd er for varig nedsatt arbeidsevne. Du går fra det kortsiktige til det langsiktige etter hvert som situasjonen avklares.`,
    },
    {
      id: 'samfunnskunnskap-8-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'samfunnskunnskap-8-4-n-quiz1-q0',
            task: 'Hva er NAV, og når ble det opprettet?',
            options: [
              { id: 'a', text: 'Et privat forsikringsselskap, opprettet i 1990', isCorrect: false },
              { id: 'b', text: 'Arbeids- og velferdsforvaltningen, opprettet i 2006', isCorrect: true },
              { id: 'c', text: 'Et departement under regjeringen, opprettet i 1967', isCorrect: false },
              { id: 'd', text: 'En stortingskomité for velferd, opprettet i 2010', isCorrect: false },
            ],
            solution: 'NAV er Arbeids- og velferdsforvaltningen, opprettet i 2006 ved å slå sammen Aetat, trygdeetaten og den kommunale sosialtjenesten. NAV forvalter folketrygden, driver arbeidsformidling og utbetaler trygder.',
          },
          {
            id: 'samfunnskunnskap-8-4-n-quiz1-q1',
            task: 'Hva er forskjellen på sykepenger, AAP og uføretrygd?',
            options: [
              { id: 'a', text: 'De gir alle 100% av lønnen, men i ulik lengde', isCorrect: false },
              { id: 'b', text: 'Sykepenger er for kortvarig sykdom, AAP for avklaring, uføretrygd for varig nedsatt arbeidsevne', isCorrect: true },
              { id: 'c', text: 'Sykepenger er for ansatte, AAP for studenter, uføretrygd for pensjonister', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell, bare ulike navn på samme ytelse', isCorrect: false },
            ],
            solution: 'Sykepenger er for kortvarig sykdom (100% i inntil ett år). AAP er under avklaring av arbeidsevne, med aktive tiltak. Uføretrygd er for varig nedsatt arbeidsevne (66% av inntekt). Man går fra kortsiktig til langsiktig etter hvert som situasjonen avklares.',
          },
          {
            id: 'samfunnskunnskap-8-4-n-quiz1-q2',
            task: 'Hvor mye utgjør dagpengene i prosent av tidligere inntekt?',
            options: [
              { id: 'a', text: 'Ca. 45%', isCorrect: false },
              { id: 'b', text: 'Ca. 62%', isCorrect: true },
              { id: 'c', text: 'Ca. 80%', isCorrect: false },
              { id: 'd', text: '100%', isCorrect: false },
            ],
            solution: 'Dagpenger utgjør ca. 62% av din tidligere inntekt. For å motta dagpenger må du være aktiv arbeidssøker, det vil si aktivt lete etter ny jobb og være tilgjengelig for arbeidsmarkedet.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'samfunnskunnskap-8-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om Norges viktigste velferdsordninger. **NAV** samler arbeidsformidling, trygdeforvaltning og sosialtjenester i én etat etter sammenslåingen av Aetat, trygdeetaten og sosialtjenesten i 2006. De sentrale ordningene i folketrygden er **sykepenger** (100% i inntil ett år), **dagpenger** (ca. 62% ved arbeidsledighet), **arbeidsavklaringspenger** (under avklaring av arbeidsevne), **uføretrygd** (66% ved varig nedsatt arbeidsevne), **alderspensjon** (fra 67 år, fleksibelt fra 62) og **foreldrepenger** (100% eller 80% ved fødsel). Ordningene danner en logisk kjede fra kortsiktige til langsiktige ytelser.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5 NARRATIV: Oljefondet (kortere kapittel)
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_8_5_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-8-5-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.5',
  title: 'Oljefondet',
  subtitle: 'Narrativ versjon',
  description: 'Fortellingen om verdens største statlige fond -- hvordan det ble til, hvordan det forvaltes, og hvorfor etiske retningslinjer er en del av pakken.',
  estimatedMinutes: 15,
  competenceGoals: [
    'forstå Oljefondets betydning for Norge',
    'kjenne til handlingsregelen og etiske retningslinjer',
  ],
  linkedChapterId: 'samfunnskunnskap-8-5',
  content: [
    {
      id: 'samfunnskunnskap-8-5-n-intro',
      type: 'text',
      content: `## 15 000 milliarder grunner til å være takknemlig

Visste du at du, som norsk innbygger, er medeier i et av verdens største fond? **Statens pensjonsfond utland** -- bedre kjent som Oljefondet -- forvalter over 15 000 milliarder kroner. For å sette det i perspektiv: Deler du fondet på alle nordmenn, eier hver og en av oss rundt 2,7 millioner kroner. Fondet eier aksjer i over 9 000 selskaper i over 70 land -- faktisk eier det ca. 1,5 prosent av alle børsnoterte selskaper i hele verden.

Men hvorfor har vi dette fondet? Svaret er enkel klokskap: Olje og gass tar slutt en dag. Da fant man ut at det var lurt å spare oljeinntektene i stedet for å bruke dem opp med det samme. Fondets hovedformål er å sikre langsiktig forvaltning av petroleumsinntektene, støtte opp under statsfinansene og -- ikke minst -- ivareta fremtidige generasjoners interesser. Dine barnebarn skal også ha glede av oljepengene.

Det finnes også en økonomisk grunn til å spare: fenomenet kjent som **hollandsk syke**. Navnet stammer fra Nederland, der enorme gassinntekter på 1960-tallet førte til overoppheting av økonomien -- valutaen ble for sterk, annen industri ble utkonkurrert, og da gassen tok slutt sto landet igjen med en svekket økonomi. Norge ville unngå samme feil, og Oljefondet er svaret.`,
    },
    {
      id: 'samfunnskunnskap-8-5-n-section1',
      type: 'text',
      content: `## Forvaltning og etikk

Fondet forvaltes av **Norges Bank Investment Management (NBIM)**, en del av Norges Bank. De investerer pengene globalt etter en tydelig strategi: Ca. 70 prosent er plassert i aksjer, ca. 27 prosent i obligasjoner (lån til stater og selskaper), og ca. 3 prosent i eiendom. Denne spredningen sørger for at fondet ikke er for avhengig av én type investering.

Og så er det handlingsregelen igjen. Den sier at vi bare skal bruke forventet realavkastning av fondet -- 3 prosent -- i statsbudsjettet. Med et fond på 15 000 milliarder betyr det omtrent 450 milliarder i året. Resten av avkastningen legges tilbake i fondet slik at det vokser.

Men Oljefondet handler ikke bare om penger. Det handler også om **etikk**. Norge har bestemt at fondet ikke skal tjene penger på hva som helst. Et uavhengig **Etikkråd** gir anbefalinger om å utelukke selskaper som bryter med etiske normer. Kriteriene for utelukkelse inkluderer produksjon av visse våpentyper (klasevåpen, atomvåpen), alvorlig miljøskade, grove menneskerettighetsbrudd, alvorlig korrupsjon og andre grove brudd på etiske normer.

I praksis har fondet utelukket en rekke selskaper: våpenprodusenter, tobakksprodusenter og kullselskaper over visse grenser er blant dem. Denne etiske profilen har gjort fondet til en internasjonal rollemodell for ansvarlig investering -- andre land ser til Norge for hvordan man kan investere stort og lønnsomt samtidig som man tar hensyn til menneskerettigheter og miljø.`,
    },
    {
      id: 'samfunnskunnskap-8-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'samfunnskunnskap-8-5-n-quiz1-q0',
            task: 'Hva er hovedformålet med Oljefondet?',
            options: [
              { id: 'a', text: 'Å gjøre alle nordmenn rike umiddelbart', isCorrect: false },
              { id: 'b', text: 'Å sikre langsiktig forvaltning av petroleumsinntektene for fremtidige generasjoner', isCorrect: true },
              { id: 'c', text: 'Å investere kun i norske bedrifter', isCorrect: false },
              { id: 'd', text: 'Å erstatte skatteinnbetalingene helt', isCorrect: false },
            ],
            solution: 'Hovedformålet er å sikre langsiktig forvaltning av petroleumsinntektene, støtte statsfinansene og ivareta fremtidige generasjoners interesser. Oljefondet ble opprettet fordi olje og gass tar slutt, og for å unngå hollandsk syke.',
          },
          {
            id: 'samfunnskunnskap-8-5-n-quiz1-q1',
            task: 'Hvordan er Oljefondet investert?',
            options: [
              { id: 'a', text: 'Kun i norsk eiendom', isCorrect: false },
              { id: 'b', text: 'Ca. 70% aksjer, 27% obligasjoner, 3% eiendom -- globalt', isCorrect: true },
              { id: 'c', text: '100% i norske statsobligasjoner', isCorrect: false },
              { id: 'd', text: '50% gull, 50% aksjer', isCorrect: false },
            ],
            solution: 'Fondet er investert med ca. 70% i aksjer, 27% i obligasjoner og 3% i eiendom, spredt over mer enn 70 land. Det eier ca. 1,5% av verdens børsnoterte selskaper. NBIM (Norges Bank Investment Management) forvalter fondet.',
          },
          {
            id: 'samfunnskunnskap-8-5-n-quiz1-q2',
            task: 'Hva er hollandsk syke?',
            options: [
              { id: 'a', text: 'En sykdom som rammet Nederland på 1800-tallet', isCorrect: false },
              { id: 'b', text: 'At store naturressursinntekter fører til overoppheting og svekket konkurranseevne', isCorrect: true },
              { id: 'c', text: 'At for mange hollendere flytter til Norge', isCorrect: false },
              { id: 'd', text: 'At oljeindustrien forurenser grunnvannet', isCorrect: false },
            ],
            solution: 'Hollandsk syke er et økonomisk fenomen der store naturressursinntekter fører til overoppheting av økonomien -- valutaen styrkes, annen industri utkonkurreres, og landet står svekket igjen når ressursen tar slutt. Oljefondet er Norges vern mot dette.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'samfunnskunnskap-8-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om **Oljefondet** (Statens pensjonsfond utland) -- verdens største statlige investeringsfond med over 15 000 milliarder kroner. Fondets formål er å sikre langsiktig forvaltning av petroleumsinntektene for fremtidige generasjoner og å unngå hollandsk syke. Det forvaltes av **NBIM** og er investert i ca. 70% aksjer, 27% obligasjoner og 3% eiendom, spredt over mer enn 70 land. **Handlingsregelen** begrenser bruken til forventet realavkastning (3%). **Etikkrådet** kan anbefale utelukkelse av selskaper som bryter med normer knyttet til våpenproduksjon, miljø, menneskerettigheter og korrupsjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.6 NARRATIV: Økonomisk ulikhet (kortere kapittel)
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_8_6_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-8-6-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.6',
  title: 'Økonomisk ulikhet',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om ulikhet i et av verdens mest likestilte land -- hvordan vi måler den, hvem som rammes, og hva vi gjør med den.',
  estimatedMinutes: 15,
  competenceGoals: [
    'forstå hvordan ulikhet måles',
    'kjenne til debatter om ulikhet og omfordeling',
  ],
  linkedChapterId: 'samfunnskunnskap-8-6',
  content: [
    {
      id: 'samfunnskunnskap-8-6-n-intro',
      type: 'text',
      content: `## Likhet med sprekker

Norge blir ofte trukket frem som et av de mest likestilte landene i verden. Og sammenlignet med de fleste andre land stemmer det -- inntektsforskjellene er relativt små, og de aller fleste har en akseptabel levestandard. Men bildet er ikke fullstendig rosa. Ulikheten har faktisk økt de siste tiårene, barnefattigdom er en voksende bekymring, og formuesforskjellene er betydelig større enn inntektsforskjellene.

Hvordan måler vi egentlig ulikhet? Det mest brukte verktøyet er **Gini-koeffisienten**. Den er et tall mellom 0 og 1. Hvis koeffisienten er 0, betyr det fullstendig likhet -- alle har akkurat like mye. Hvis den er 1, betyr det at én enkelt person har absolutt alt. Norge ligger på ca. 0,27, som er relativt lavt internasjonalt. Til sammenligning ligger USA på rundt 0,39 og Sør-Afrika på over 0,60.

Men Gini-koeffisienten forteller ikke hele historien. Vi kan også se på **inntektsandeler** -- hvor mye de rikeste 10 prosentene tjener sammenlignet med de fattigste 10 prosentene. Vi kan se på **formuesulikhet**, som er mye større enn inntektsulikhet fordi formue akkumuleres over tid og generasjoner. Og vi kan se på **sosial mobilitet** -- altså mulighetene for å klatre oppover den økonomiske stigen. Her gjør Norge det faktisk ganske bra: Det er lettere å bevege seg fra lavinntekt til høyinntekt her enn i mange andre land.`,
    },
    {
      id: 'samfunnskunnskap-8-6-n-section1',
      type: 'text',
      content: `## Fattigdom og omfordeling

Men selv i Norge finnes det fattigdom. Vi snakker da om **relativ fattigdom** -- det vil si at man har inntekt under 60 prosent av medianinntekten i samfunnet. Etter denne definisjonen lever ca. 10-12 prosent av befolkningen i relativ fattigdom. Hvem er de? Grupper som er særlig utsatt inkluderer enslige forsørgere, innvandrerfamilier (særlig nyankomne), personer som av ulike grunner står utenfor arbeidslivet, og mottakere av sosialhjelp. Økt barnefattigdom er et tema som bekymrer mange: Barn som vokser opp i lavinntektsfamilier, risikerer dårligere helse, lavere utdanning, sosial ekskludering -- og dessverre kan fattigdom overføres til neste generasjon.

Hvordan prøver staten å motvirke ulikheten? Gjennom **omfordeling**. Progressiv skatt betyr at de rikeste betaler mest. Universelle velferdsordninger sikrer at alle har tilgang til helse og utdanning. Behovsprøvde stønader gir ekstra hjelp til dem som trenger det mest. Og gratis utdanning og helse gir like muligheter uavhengig av bakgrunn.

Debatten om ulikhet spenner mellom ulike perspektiver. Noen vektlegger individuelt ansvar og insentiver -- at inntektsforskjeller motiverer til innsats, at for mye omfordeling kan svekke arbeidsmotivasjonen, og at økonomisk vekst kommer alle til gode over tid. Andre vektlegger strukturelle barrierer og fellesskap -- at ulikhet kan hindre like muligheter, at fattigdom går i arv, og at for stor ulikhet skader samfunnsfellesskapet og tilliten mellom mennesker. De fleste er likevel enige om at fattigdom bør bekjempes -- uenigheten handler om hvordan: Skal man satse på arbeidslinjen og få folk i jobb, eller skal man øke overføringene til de som sliter mest?`,
    },
    {
      id: 'samfunnskunnskap-8-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'samfunnskunnskap-8-6-n-quiz1-q0',
            task: 'Hva er Gini-koeffisienten?',
            options: [
              { id: 'a', text: 'Et mål på bruttonasjonalprodukt per innbygger', isCorrect: false },
              { id: 'b', text: 'Et mål på ulikhet fra 0 (full likhet) til 1 (én har alt)', isCorrect: true },
              { id: 'c', text: 'Et mål på arbeidsløshet i et land', isCorrect: false },
              { id: 'd', text: 'Et mål på inflasjon og prisøkning', isCorrect: false },
            ],
            solution: 'Gini-koeffisienten måler ulikhet på en skala fra 0 (fullstendig likhet) til 1 (én person har alt). Norge har en Gini-koeffisient på ca. 0,27, som er relativt lavt sammenlignet med for eksempel USA (ca. 0,39).',
          },
          {
            id: 'samfunnskunnskap-8-6-n-quiz1-q1',
            task: 'Hva menes med relativ fattigdom?',
            options: [
              { id: 'a', text: 'At man ikke har råd til mat og husly', isCorrect: false },
              { id: 'b', text: 'At man har inntekt under 60% av medianinntekten', isCorrect: true },
              { id: 'c', text: 'At man er fattigere enn naboen sin', isCorrect: false },
              { id: 'd', text: 'At man tjener mindre enn gjennomsnittet i EU', isCorrect: false },
            ],
            solution: 'Relativ fattigdom betyr å ha inntekt under 60% av medianinntekten i samfunnet. Ca. 10-12% av Norges befolkning lever i relativ fattigdom. Enslige forsørgere, innvandrerfamilier og personer utenfor arbeidslivet er mest utsatt.',
          },
          {
            id: 'samfunnskunnskap-8-6-n-quiz1-q2',
            task: 'Hvilke grupper er mest utsatt for fattigdom i Norge?',
            options: [
              { id: 'a', text: 'Pensjonister og studenter', isCorrect: false },
              { id: 'b', text: 'Ansatte i privat sektor', isCorrect: false },
              { id: 'c', text: 'Enslige forsørgere, innvandrerfamilier og personer utenfor arbeidslivet', isCorrect: true },
              { id: 'd', text: 'Selvstendig næringsdrivende og gårdbrukere', isCorrect: false },
            ],
            solution: 'Gruppene som er mest utsatt for fattigdom i Norge er enslige forsørgere, innvandrerfamilier (særlig nyankomne), personer utenfor arbeidslivet og mottakere av sosialhjelp. Økt barnefattigdom er en voksende bekymring.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'samfunnskunnskap-8-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om økonomisk ulikhet i Norge. **Gini-koeffisienten** (ca. 0,27 i Norge) er det vanligste målet på ulikhet, og viser at Norge har relativt lav ulikhet internasjonalt -- men den har økt. Ca. 10-12% lever i **relativ fattigdom** (under 60% av medianinntekten), og enslige forsørgere, innvandrerfamilier og personer utenfor arbeidslivet er mest utsatt. Konsekvensene av fattigdom inkluderer dårligere helse, lavere utdanning og sosial ekskludering. Staten omfordeler gjennom progressiv skatt, universelle ordninger, behovsprøvde stønader og gratis utdanning og helse. Debatten om ulikhet handler om balansen mellom individuelt ansvar og strukturelle barrierer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.7 NARRATIV: Velferdsmodeller i verden (kortere kapittel)
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_8_7_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-8-7-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.7',
  title: 'Velferdsmodeller i verden',
  subtitle: 'Narrativ versjon',
  description: 'En sammenligning av tre velferdsmodeller -- den nordiske, den konservative og den liberale -- og hva som gjør den norske modellen spesiell.',
  estimatedMinutes: 15,
  competenceGoals: [
    'sammenligne ulike velferdsmodeller',
    'forstå den nordiske modellens særtrekk',
  ],
  linkedChapterId: 'samfunnskunnskap-8-7',
  content: [
    {
      id: 'samfunnskunnskap-8-7-n-intro',
      type: 'text',
      content: `## Tre veier til velferd

Ikke alle land organiserer velferden på samme måte som Norge. Forskere deler gjerne verdens velferdsstater inn i tre hovedmodeller, og forskjellene er overraskende store.

Den **sosialdemokratiske modellen** -- også kalt den nordiske modellen -- finnes i Norge, Sverige, Danmark, Finland og Island. Her er kjennetegnene universelle ordninger som gjelder alle, høyt skattenivå, en omfattende offentlig sektor, sterk omfordeling og et unikt **trepartssamarbeid** mellom stat, arbeidsgivere og fagbevegelse. I dette systemet er det staten som har hovedansvaret for velferden, og tanken er at alle skal ha lik tilgang uavhengig av bakgrunn.

Styrkene ved den nordiske modellen er tydelige: Landene har lav fattigdom og høy sosial mobilitet, høy tillit mellom folk, og sterk arbeidsdeltakelse -- også blant kvinner, noe som er uvanlig i mange andre land. Men det finnes også kritikk og utfordringer: Høyt skattetrykk kan hemme investeringer og innovasjon. Den store offentlige sektoren kan bli byråkratisk og tungrodd. Det pågår debatter om bærekraften med tanke på eldrebølgen. Og hele modellen er avhengig av at en stor andel av befolkningen faktisk jobber og betaler skatt.`,
    },
    {
      id: 'samfunnskunnskap-8-7-n-section1',
      type: 'text',
      content: `## De to andre modellene

Den **konservative modellen** -- også kalt den kontinentaleuropeiske modellen -- finnes i land som Tyskland, Frankrike og Italia. Her er velferdsordningene i stor grad knyttet til arbeidsdeltakelse. Du får trygd og pensjon basert på hva du har jobbet og betalt inn. Systemet er forsikringsbasert -- du betaler inn til trygdesystemer gjennom jobben, og får utbetalt basert på det. Familien spiller også en viktigere rolle som velferdsaktør enn i den nordiske modellen.

Den **liberale modellen** -- også kalt den angloamerikanske modellen -- finnes i USA, Storbritannia og Australia. Her er den offentlige velferden begrenset, og mange ordninger er behovsprøvde -- det vil si at du må bevise at du trenger hjelp for å få den. Marked og privat forsikring spiller en mye større rolle. Skattenivået er lavt, og den enkelte forventes å ta et større ansvar for egen velferd.

Hva betyr disse forskjellene i praksis? I USA, for eksempel, har mange ikke helseforsikring fordi den er knyttet til arbeidsgiveren eller må kjøpes privat. En tur på legevakten kan koste tusenvis av dollar. I Tyskland får du gode ytelser hvis du har vært i jobb lenge, men innvandrere og de som aldri har vært i arbeidslivet kan falle utenfor. I Norge får alle tilgang til de samme tjenestene uavhengig av bakgrunn og arbeidshistorikk.

Hver modell har sine avveininger. Den nordiske gir mer likhet, men krever høyere skatter. Den liberale gir mer individuell valgfrihet, men større ulikhet. Den konservative gir god beskyttelse for arbeidstakere, men kan ekskludere de som står utenfor arbeidslivet.`,
    },
    {
      id: 'samfunnskunnskap-8-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'samfunnskunnskap-8-7-n-quiz1-q0',
            task: 'Hva kjennetegner den nordiske velferdsmodellen?',
            options: [
              { id: 'a', text: 'Behovsprøvde ordninger, lave skatter og stort privat ansvar', isCorrect: false },
              { id: 'b', text: 'Universelle ordninger, høye skatter, sterk omfordeling og trepartssamarbeid', isCorrect: true },
              { id: 'c', text: 'Forsikringsbaserte ordninger knyttet til arbeidshistorikk', isCorrect: false },
              { id: 'd', text: 'Familien som viktigste velferdsaktør med minimalt offentlig ansvar', isCorrect: false },
            ],
            solution: 'Den nordiske modellen kjennetegnes av universelle ordninger for alle, høyt skattenivå, omfattende offentlig sektor, sterk omfordeling og trepartssamarbeid mellom stat, arbeidsgivere og fagbevegelse. Den finnes i Norge, Sverige, Danmark, Finland og Island.',
          },
          {
            id: 'samfunnskunnskap-8-7-n-quiz1-q1',
            task: 'Hvilken velferdsmodell er typisk for USA?',
            options: [
              { id: 'a', text: 'Den nordiske (sosialdemokratiske) modellen', isCorrect: false },
              { id: 'b', text: 'Den konservative (kontinentaleuropeiske) modellen', isCorrect: false },
              { id: 'c', text: 'Den liberale (angloamerikanske) modellen', isCorrect: true },
              { id: 'd', text: 'Den universelle modellen', isCorrect: false },
            ],
            solution: 'USA har en liberal velferdsmodell med begrenset offentlig velferd, behovsprøving, lave skatter og stor vekt på marked og privat forsikring. Storbritannia og Australia har lignende modeller.',
          },
          {
            id: 'samfunnskunnskap-8-7-n-quiz1-q2',
            task: 'Hva er trepartssamarbeidet?',
            options: [
              { id: 'a', text: 'Samarbeid mellom regjering, Storting og domstolene', isCorrect: false },
              { id: 'b', text: 'Samarbeid mellom stat, arbeidsgivere og fagbevegelse', isCorrect: true },
              { id: 'c', text: 'Samarbeid mellom Norge, Sverige og Danmark', isCorrect: false },
              { id: 'd', text: 'Samarbeid mellom offentlig sektor, privat sektor og frivillige organisasjoner', isCorrect: false },
            ],
            solution: 'Trepartssamarbeidet er samarbeid mellom stat, arbeidsgivere og fagbevegelse om lønn, arbeidsvilkår og samfunnsutvikling. Det er et kjennetegn ved den nordiske modellen og bidrar til stabilitet og forutsigbarhet i arbeidslivet.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'samfunnskunnskap-8-7-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om de tre velferdsmodellene. Den **nordiske (sosialdemokratiske) modellen** har universelle ordninger, høye skatter, sterk omfordeling og trepartssamarbeid -- den finnes i Norge, Sverige, Danmark, Finland og Island. Den **konservative (kontinentaleuropeiske) modellen** i Tyskland, Frankrike og Italia er forsikringsbasert og knyttet til arbeidsdeltakelse, med familien som viktig enhet. Den **liberale (angloamerikanske) modellen** i USA, Storbritannia og Australia har begrenset offentlig velferd, behovsprøving, lavt skattenivå og stor vekt på marked og privat forsikring. Hver modell har avveininger mellom likhet, frihet og kostnader.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.8 NARRATIV: Velferdsstatens utfordringer (kortere kapittel)
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_8_8_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-8-8-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.8',
  title: 'Velferdsstatens utfordringer',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om truslene mot velferdsstaten -- eldrebølgen, utenforskap og avtagende oljeinntekter -- og de mulige løsningene vi har å velge mellom.',
  estimatedMinutes: 15,
  competenceGoals: [
    'forstå utfordringene velferdsstaten står overfor',
    'vurdere løsninger på bærekraftsutfordringer',
  ],
  linkedChapterId: 'samfunnskunnskap-8-8',
  content: [
    {
      id: 'samfunnskunnskap-8-8-n-intro',
      type: 'text',
      content: `## En velferdsstat under press

Den norske velferdsstaten er en imponerende konstruksjon. Men den er ikke uforgjengelig. Flere utfordringer truer bærekraften på lang sikt, og hvordan vi møter dem vil avgjøre hva slags samfunn Norge er om 30 år.

Den mest omtalte utfordringen er **eldrebølgen**. Andelen eldre i befolkningen øker kraftig ettersom de store etterkrigskullene -- de som ble født mellom 1945 og 1960 -- nå pensjonerer seg. Konsekvensene er enorme: Flere mottar pensjon, færre er i jobb og betaler skatt, og utgiftene til helse og omsorg skyter i været. Tallene taler for seg selv: I 1970 var det 5 yrkesaktive per pensjonist. Mot 2050 anslås det at tallet har sunket til ca. 2,5 yrkesaktive per pensjonist. Det betyr at hver arbeidstaker må "forsørge" dobbelt så mange som før.

Men eldrebølgen er bare én av flere utfordringer. **Innvandring** er et tveegget sverd: Innvandrere kan bidra med verdifull arbeidskraft som samfunnet trenger, men integrering koster, og mye avhenger av om innvandrere kommer i jobb. **Utenforskap** er en annen bekymring -- mange står utenfor arbeidslivet på grunn av helseutfordringer, uførhet eller manglende kvalifikasjoner, og unge utenfor utdanning og arbeid er en særlig bekymring. **Petroleumsinntektene** vil uunngåelig avta etter hvert som olje- og gassreservene tømmes. Og **globaliseringen** skaper skattekonkurranse mellom land og gjør at multinasjonale selskaper kan unngå å betale sin del av skatteregningen.`,
    },
    {
      id: 'samfunnskunnskap-8-8-n-section1',
      type: 'text',
      content: `## Veien videre -- mulige løsninger

Hva kan vi gjøre? Det finnes ingen enkle svar, men flere tiltak diskuteres.

**Øke pensjonsalderen** er ett av de mest åpenbare grepene. Dersom folk jobber lenger, betaler de skatt lenger og mottar pensjon kortere. Allerede i dag er det mulig å jobbe etter fylte 67, og mange gjør det. Pensjonsreformer har gjort det mer lønnsomt å stå lenger i jobb.

**Få flere i arbeid** er kanskje det viktigste tiltaket. Det handler om bedre integrering av innvandrere, satsing på helse og rehabilitering for å få folk tilbake fra utenforskap, og tilrettelegging for at flere kan delta i arbeidslivet. Jo flere som jobber og betaler skatt, jo sterkere er finansieringsgrunnlaget for velferden.

**Effektivisere offentlig sektor** handler om å gjøre mer med mindre -- digitalisering, bedre organisering og smartere bruk av ressurser. Kan teknologi erstatte noe av det menneskene gjør i dag? Kan vi organisere helsetjenester smartere?

**Øke skattene** er et alternativ, men da møter man motstand fra de som mener skattene allerede er høye nok -- og risikoen for at bedrifter og arbeidskraft flytter til land med lavere skatter.

**Prioritere hardere** betyr å si nei til noe for å ha råd til det viktigste. Det er smertefullt politisk, men kanskje nødvendig.

Og til sist: **Teknologi og innovasjon** kan gi oss verktøy vi knapt aner i dag -- velferdsteknologi, kunstig intelligens i helsesektoren, automatisering av rutineoppgaver. Men slike løsninger krever investeringer nå for å gi gevinster senere.

Det er ingen tvil om at velferdsstaten må tilpasse seg nye virkeligheter. Spørsmålet er ikke om den vil endre seg, men hvordan.`,
    },
    {
      id: 'samfunnskunnskap-8-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: 'samfunnskunnskap-8-8-n-quiz1-q0',
            task: 'Hva er eldrebølgen?',
            options: [
              { id: 'a', text: 'At eldre mennesker flytter til kysten for å bo', isCorrect: false },
              { id: 'b', text: 'At andelen eldre i befolkningen øker kraftig når store etterkrigskull pensjoneres', isCorrect: true },
              { id: 'c', text: 'At eldre mennesker lever sunnere enn før', isCorrect: false },
              { id: 'd', text: 'At det blir flere barnehageplasser enn pensjonister', isCorrect: false },
            ],
            solution: 'Eldrebølgen er den kraftige økningen i andelen eldre når de store etterkrigskullene pensjoneres. Det betyr flere pensjonister, færre i arbeid, økte utgifter til helse/omsorg og færre skattebetalere per pensjonist -- fra 5 i 1970 til ca. 2,5 i 2050.',
          },
          {
            id: 'samfunnskunnskap-8-8-n-quiz1-q1',
            task: 'Hva var forsørgelsesbyrden i 1970 og hva anslås den å bli i 2050?',
            options: [
              { id: 'a', text: '10 yrkesaktive per pensjonist i 1970, 5 i 2050', isCorrect: false },
              { id: 'b', text: '3 yrkesaktive per pensjonist i 1970, 1 i 2050', isCorrect: false },
              { id: 'c', text: '5 yrkesaktive per pensjonist i 1970, ca. 2,5 i 2050', isCorrect: true },
              { id: 'd', text: '2 yrkesaktive per pensjonist i 1970, 1 i 2050', isCorrect: false },
            ],
            solution: 'I 1970 var det 5 yrkesaktive per pensjonist. Mot 2050 anslås det at tallet synker til ca. 2,5 yrkesaktive per pensjonist. Det betyr at hver arbeidstaker må "forsørge" dobbelt så mange som før.',
          },
          {
            id: 'samfunnskunnskap-8-8-n-quiz1-q2',
            task: 'Nevn en mulig løsning på velferdsstatens utfordringer.',
            options: [
              { id: 'a', text: 'Avvikle alle velferdsordninger', isCorrect: false },
              { id: 'b', text: 'Øke pensjonsalderen og få flere i arbeid', isCorrect: true },
              { id: 'c', text: 'Slutte å investere Oljefondet', isCorrect: false },
              { id: 'd', text: 'Redusere antallet eldre ved å senke levealderen', isCorrect: false },
            ],
            solution: 'Mulige løsninger inkluderer å øke pensjonsalderen, få flere i arbeid gjennom bedre integrering og rehabilitering, effektivisere offentlig sektor, øke skattene, prioritere hardere og satse på teknologi og innovasjon.',
          },
        ],
        solution: '',
      },
    },
    {
      id: 'samfunnskunnskap-8-8-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om utfordringene den norske velferdsstaten står overfor. **Eldrebølgen** er den største trusselen -- forsørgelsesbyrden går fra 5 yrkesaktive per pensjonist i 1970 til ca. 2,5 i 2050. Andre utfordringer inkluderer **utenforskap** (mange utenfor arbeidslivet), avtagende **petroleumsinntekter**, **innvandring** som krever integrering, og **skattekonkurranse** i en globalisert verden. Mulige løsninger inkluderer å øke pensjonsalderen, få flere i arbeid, effektivisere offentlig sektor, øke skattene, prioritere hardere og satse på teknologi og innovasjon. Velferdsstaten må tilpasse seg nye virkeligheter for å overleve.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// SAMLET EKSPORT
// ============================================================================

export const SAMFUNNSKUNNSKAP_NARRATIV_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSKUNNSKAP_8_1_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_8_2_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_8_3_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_8_4_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_8_5_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_8_6_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_8_7_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_8_8_NARRATIV,
];
