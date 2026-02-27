/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - NARRATIV VERSJON DEL 3
 * Kapittel 8-10: Medier, Identitet/mangfold, Eksamensforberedelse
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8 NARRATIV: Medier og kommunikasjon
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_8_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-8-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '8',
  title: 'Medier og kommunikasjon',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvordan algoritmene styrer hva du ser, hvorfor ekkokamre truer demokratiet, og hva ytringsfrihet egentlig betyr i en digital verden.',
  estimatedMinutes: 35,
  competenceGoals: [
    'reflektere over korleis algoritmar, ekkokammer og digitale medium påverkar meiningsdanning og demokrati',
    'drøfte korleis ytringsfridom og medborgarskap heng saman',
    'vurdere kjelder og kjeldekritisk kompetanse i ein digital kvardag',
  ],
  linkedChapterId: 'samfunnsfag-10-8',
  content: [
    {
      id: 'samfunnsfag-10-8-n-intro',
      type: 'text',
      content: `## Hvem bestemmer hva du ser?

Forrige gang du aapnet TikTok, Instagram eller YouTube -- tenkte du over hvorfor nettopp de videoene dukket opp? Var det tilfeldig? Nei. Bak det du ser paa skjermen staar **algoritmer** -- avanserte dataprogrammer som analyserer hva du liker, hva du klikker paa, og hvor lenge du ser paa noe. Basert paa disse dataene velger algoritmene ut innhold som de tror vil holde deg engasjert saa lenge som mulig.

Det hoeres uskyldig ut. Men tenk over konsekvensene. Hvis du liker en video med konspirasjonsteori, vil algoritmen vise deg flere. Klikker du paa en sint kommentar, faar du mer sinne. Engasjerer du deg i politiske debatter, blir feeden din stadig mer polarisert. Algoritmene bryr seg ikke om hva som er sant eller godt for deg -- de bryr seg om hva som holder deg klistret til skjermen.

Mediene har alltid hatt enorm makt i samfunnet. I et demokrati kaller vi mediene ofte **den fjerde statsmakt** -- ved siden av Stortinget, regjeringen og domstolene. Tanken er at frie medier fungerer som en vaktbikkje som avdekker maktmisbruk, informerer innbyggerne og legger grunnlaget for offentlig debatt. Uten frie medier kan ikke et demokrati fungere.

Men i en digital tid er mediebildet grunnleggende forandret. Vi har gaat fra et system der noen faa aviser og TV-kanaler styrte informasjonsflyten, til et kaos der alle kan publisere hva som helst, og der algoritmene bestemmer hva som naar fram.`,
    },
    {
      id: 'samfunnsfag-10-8-n-section1',
      type: 'text',
      content: `## Ekkokamre og filterbobler

Naar algoritmene stadig serverer deg innhold som samsvarer med det du allerede mener og liker, oppstaar det forskere kaller **ekkokamre** og **filterbobler**. Et ekkokammer er et informasjonsmiljoe der du bare hoerer meninger som ligner dine egne -- som et rom der din egen stemme kastes tilbake som et ekko. En filterboble er det som oppstaar naar algoritmene filtrerer bort informasjon som utfordrer ditt verdensbilde.

Konsekvensene for demokratiet kan vaere alvorlige. Naar mennesker lever i ulike informasjonsvirkeligheter, blir det vanskelig aa foere en felles samtale. En person som bare leser hoeyre-orienterte medier og en person som bare leser venstre-orienterte medier, lever naermest i to forskjellige verdener -- med ulike fakta, ulike fortellinger og ulike fiender. Polariseringen oeker, og tillit mellom grupper brytes ned.

**Falske nyheter** og **desinformasjon** gjor problemet enda stoerre. I en verden der alle kan publisere, og der sensasjonelt innhold sprer seg raskere enn kjedelig sannhet, blir det stadig vanskeligere aa skille fakta fra fiktiv. Stater, politiske grupper og kommersielle aktoerer bruker bevisst falsk informasjon for aa paavirke opinionen -- det vi kaller desinformasjon.

Derfor er **kildekritikk** viktigere enn noen gang. Hvem staar bak denne informasjonen? Hva er kilden? Er det andre troverdige kilder som bekrefter det samme? Har avsenderen en agenda? Disse spoersmaalene maa vi stille oss selv hver eneste dag, for evnen til aa vurdere informasjon kritisk er blitt en av de viktigste ferdighetene i et moderne demokrati.`,
    },
    {
      id: 'samfunnsfag-10-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa algoritmer og ekkokamre:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-8-n-quiz1-q0',
            task: 'Hva gjor en algoritme paa sosiale medier?',
            options: [
              { id: 'a', text: 'Viser deg tilfeldig innhold', isCorrect: false },
              { id: 'b', text: 'Velger ut innhold basert paa dine data for aa holde deg engasjert', isCorrect: true },
              { id: 'c', text: 'Sletter innhold som er feil', isCorrect: false },
              { id: 'd', text: 'Sender innholdet ditt til myndighetene', isCorrect: false },
            ],
            solution: 'Algoritmer analyserer hva du liker, klikker paa og ser paa, og velger ut innhold som de tror vil holde deg engasjert saa lenge som mulig -- uavhengig av om innholdet er sant eller godt for deg.',
          },
          {
            id: 'samfunnsfag-10-8-n-quiz1-q1',
            task: 'Hva er et ekkokammer?',
            options: [
              { id: 'a', text: 'Et rom med god akustikk', isCorrect: false },
              { id: 'b', text: 'Et informasjonsmiljoe der du bare hoerer meninger som ligner dine egne', isCorrect: true },
              { id: 'c', text: 'En type sosiale medier', isCorrect: false },
              { id: 'd', text: 'Et politisk parti', isCorrect: false },
            ],
            solution: 'Et ekkokammer er et informasjonsmiljoe der du hovedsakelig blir eksponert for meninger og synspunkter som ligner dine egne -- som om din egen stemme kastes tilbake til deg.',
          },
          {
            id: 'samfunnsfag-10-8-n-quiz1-q2',
            task: 'Hva er forskjellen mellom falske nyheter og desinformasjon?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'b', text: 'Falske nyheter er alltid ulovlige', isCorrect: false },
              { id: 'c', text: 'Desinformasjon er bevisst falsk informasjon spredd med hensikt', isCorrect: true },
              { id: 'd', text: 'Falske nyheter er mer farlige enn desinformasjon', isCorrect: false },
            ],
            solution: 'Desinformasjon er bevisst falsk informasjon som spres med hensikt for aa villede -- for eksempel av stater eller politiske grupper. Falske nyheter er et bredere begrep for feilinformasjon.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-8-n-section2',
      type: 'text',
      content: `## Ytringsfrihet og ytringskultur

**Ytringsfrihet** er en av de mest grunnleggende rettighetene i et demokrati. Den er beskyttet i Grunnlovens paragraf 100 og i menneskerettighetene. Ytringsfrihet betyr at du har rett til aa si, skrive og mene hva du vil -- ogsaa ting som er kontroversielle, upopulaere eller provoserende.

Men ytringsfrihet er ikke det samme som at alt du sier er klokt, riktig eller uten konsekvenser. Ytringsfriheten har noen grenser: du har ikke lov til aa true noen, oppfordre til vold, eller spre hatefulle ytringer mot grupper basert paa etnisitet, religion eller seksuell orientering. Og selv innenfor lovens rammer kan ytringer vaere saarende, uskikkelige eller oedeleggende.

Her kommer **ytringskultur** inn -- hvordan vi faktisk bruker ytringsfriheten vaar. I kommentarfelt paa nett ser vi ofte en ytringskultur preget av anonymitet, aggresjon og mangel paa respekt. Folk sier ting til hverandre digitalt som de aldri ville sagt ansikt til ansikt. Nettmobbing, hets og trakassering er alvorlige problemer som rammer mange unge.

I Norge har vi **Vaer Varsom-plakaten** -- et sett med etiske retningslinjer som journalister og redaktoerer skal foelge. Plakaten sier blant annet at mediene skal soeke sannheten, vaere uavhengige, beskytte enkeltmennesker mot unoedvendig skade, og gi folk mulighet til aa svare paa beskyldninger. Disse prinsippene er viktige fordi de minner oss om at makt foelger ansvar -- ogsaa mediemakt.

Presseetikken utfordres i en digital tid der enhver med en smarttelefon kan vaere sin egen redaktoer. Hvem passer paa at informasjonen er riktig naar den kommer fra en anonym Twitter-konto eller en YouTube-kanal uten redaktoer? Ansvaret faller i stadig stoerre grad paa deg som leser og seer -- paa din evne til aa tenke kritisk.`,
    },
    {
      id: 'samfunnsfag-10-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa ytringsfrihet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-8-n-quiz2-q0',
            task: 'Hvor er ytringsfriheten beskyttet i Norge?',
            options: [
              { id: 'a', text: 'I arbeidsmiljoeloven', isCorrect: false },
              { id: 'b', text: 'I Grunnlovens paragraf 100', isCorrect: true },
              { id: 'c', text: 'I straffeloven alene', isCorrect: false },
              { id: 'd', text: 'Den er ikke lovbeskyttet', isCorrect: false },
            ],
            solution: 'Ytringsfriheten er beskyttet i Grunnlovens paragraf 100. Den er ogsaa beskyttet i internasjonale menneskerettighetskonvensjoner som Norge har ratifisert.',
          },
          {
            id: 'samfunnsfag-10-8-n-quiz2-q1',
            task: 'Hva er Vaer Varsom-plakaten?',
            options: [
              { id: 'a', text: 'En lov som regulerer sosiale medier', isCorrect: false },
              { id: 'b', text: 'Etiske retningslinjer for journalister og redaktoerer', isCorrect: true },
              { id: 'c', text: 'Et regjeringsdokument om ytringsfrihet', isCorrect: false },
              { id: 'd', text: 'En plakat som henges opp i alle klasserom', isCorrect: false },
            ],
            solution: 'Vaer Varsom-plakaten er et sett med etiske retningslinjer for norske journalister og redaktoerer. Den handler om aa soeke sannheten, beskytte kilder og behandle mennesker med respekt.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-8-n-summary',
      type: 'text',
      content: `## Oppsummering

**Algoritmer** paa sosiale medier velger ut innhold basert paa dine data for aa holde deg engasjert. Dette kan fore til **ekkokamre** og **filterbobler**, der du bare eksponeres for meninger du allerede er enig i. **Falske nyheter** og **desinformasjon** truer demokratiet, og **kildekritikk** er derfor viktigere enn noen gang.

**Ytringsfrihet** er en grunnleggende rettighet beskyttet i Grunnloven, men den har grenser (trusler, hatefulle ytringer). **Ytringskultur** handler om hvordan vi bruker friheten vaar -- og den er under press i digitale rom. **Vaer Varsom-plakaten** gir etiske retningslinjer for mediene, men i en tid der alle kan publisere, faller mer ansvar paa den enkelte leser og seer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9 NARRATIV: Identitet og mangfold
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_9_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-9-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '9',
  title: 'Identitet og mangfold',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hva som gjor deg til deg -- fra etnisitet og religion til kulturmoeter og mangfold, og hvorfor kampen mot rasisme og diskriminering angaar alle.',
  estimatedMinutes: 35,
  competenceGoals: [
    'reflektere over korleis identitet, sjølvbilde og eigne grenser blir utvikla og utfordra',
    'utforske korleis samisk identitet og rettar er sikra i Noreg',
    'drøfte problemstillingar knytte til mangfald, inkludering og rasisme',
  ],
  linkedChapterId: 'samfunnsfag-10-9',
  content: [
    {
      id: 'samfunnsfag-10-9-n-intro',
      type: 'text',
      content: `## Hvem er du -- egentlig?

Hvis noen ber deg beskrive deg selv, hva sier du? Kanskje nevner du navnet ditt, alderen din, hvor du bor. Kanskje snakker du om interessene dine, vennene dine, familien. Men hvem er du egentlig? Hva er det som gjor deg til deg?

**Identitet** er summen av alt som gjor deg til den du er. Det er et komplekst puslespill satt sammen av mange brikker: kjoenn, alder, familienebakgrunn, spraak, religion, etnisitet, seksualitet, interesser, verdier og erfaringer. Noen av disse brikkene er du foedt med, andre har du faatt gjennom oppveksten, og enda andre har du selv valgt.

Vi skiller gjerne mellom **personlig identitet** og **sosial identitet**. Den personlige identiteten handler om hvem du opplever at du er -- dine egenskaper, tanker og foelelser. Den sosiale identiteten handler om hvilke grupper du tilhoerer og identifiserer deg med -- nordmann, muslim, fotballspiller, gamer, sameeting.

Det som gjor identitet fascinerende -- og noen ganger vanskelig -- er at den ikke er statisk. Du er ikke den samme personen i dag som du var for fem aar siden, og du vil vaere en annen person om ti aar. Identiteten din utvikler seg stadig i moetet med andre mennesker, nye erfaringer og nye utfordringer. Og noen ganger opplever vi at ulike sider av identiteten vaar staar i spenning med hverandre.`,
    },
    {
      id: 'samfunnsfag-10-9-n-section1',
      type: 'text',
      content: `## Etnisitet, religion og kulturmoeter

**Etnisitet** handler om tilhoerighet til en gruppe mennesker med felles kultur, spraak, historie og tradisjoner. Det er ikke det samme som nasjonalitet eller hudfarge -- det er en kulturell og sosial identitet. I Norge finner vi et rikt mangfold av etniske grupper, fra samer og kvener som har bodd her i tusenvis av aar, til nyere innvandrergrupper fra hele verden.

**Samene** er Norges urfolk -- de har levd i det nordlige Skandinavia lenge foer nasjonalstatene ble dannet. I dag har samene egne rettigheter beskyttet i Grunnloven og gjennom internasjonale konvensjoner om urfolksrettigheter. **Sametinget** er samenes folkevalgte organ, som representerer samiske interesser overfor norske myndigheter. Men det har ikke alltid vaert slik. I store deler av 1800- og 1900-tallet foerte Norge en **fornorskningspolitikk** der samisk spraak og kultur ble aktivt undertrykt. Barn ble sendt paa internatskoler der de ikke fikk snakke samisk. Denne moerke historien er viktig aa kjenne til, fordi den minner oss om at ogsaa Norge har behandlet sine minoriteter urettferdig.

**Religion** er en viktig del av mange menneskers identitet. I Norge har vi religionsfrihet, og samfunnet er stadig mer mangfoldig religiost. Kristendommen har vaert den dominerende religionen, men i dag finner vi ogsaa store muslimske, hinduistiske, buddhistiske og humanistiske miljioeer. Kulturmoeter mellom mennesker med ulik religioes bakgrunn kan vaere berikende, men kan ogsaa skape misforstaaelser og spenninger naar verdier og tradisjoner kolliderer.

Mangfold er en ressurs. Naar mennesker med ulik bakgrunn moetes, oppstaar nye ideer, kreativitet og innovasjon. Det norske samfunnet er rikere fordi det rommer mange kulturer, spraak og perspektiver. Men mangfold krever ogsaa at vi jobber aktivt med inkludering, forstaaelse og respekt.`,
    },
    {
      id: 'samfunnsfag-10-9-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa identitet og mangfold:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-9-n-quiz1-q0',
            task: 'Hva er forskjellen mellom personlig og sosial identitet?',
            options: [
              { id: 'a', text: 'Personlig identitet handler om grupper, sosial om deg selv', isCorrect: false },
              { id: 'b', text: 'Personlig identitet handler om hvem du er inni deg, sosial om hvilke grupper du tilhoerer', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'd', text: 'Sosial identitet er noe du foedes med, personlig er noe du velger', isCorrect: false },
            ],
            solution: 'Personlig identitet handler om dine egne egenskaper, tanker og foelelser. Sosial identitet handler om hvilke grupper du tilhoerer og identifiserer deg med.',
          },
          {
            id: 'samfunnsfag-10-9-n-quiz1-q1',
            task: 'Hva var fornorskningspolitikken?',
            options: [
              { id: 'a', text: 'En politikk for aa gjore Norge mer demokratisk', isCorrect: false },
              { id: 'b', text: 'En politikk der samisk og kvensk spraak og kultur ble aktivt undertrykt', isCorrect: true },
              { id: 'c', text: 'En politikk for aa oeke innvandringen til Norge', isCorrect: false },
              { id: 'd', text: 'En politikk for aa beskytte norske tradisjoner i utlandet', isCorrect: false },
            ],
            solution: 'Fornorskningspolitikken var en assimileringspolitikk paa 1800- og 1900-tallet der samer og kvener ble tvunget til aa gi opp spraak og kultur. Barn ble sendt paa internatskoler der de ikke fikk snakke samisk.',
          },
          {
            id: 'samfunnsfag-10-9-n-quiz1-q2',
            task: 'Hva er Sametinget?',
            options: [
              { id: 'a', text: 'En norsk domstol for samiske saker', isCorrect: false },
              { id: 'b', text: 'Samenes folkevalgte organ', isCorrect: true },
              { id: 'c', text: 'En avdeling i Stortinget', isCorrect: false },
              { id: 'd', text: 'En frivillig organisasjon for samisk kultur', isCorrect: false },
            ],
            solution: 'Sametinget er samenes folkevalgte organ i Norge. Det representerer samiske interesser overfor norske myndigheter og jobber for aa ivareta samisk spraak, kultur og rettigheter.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-9-n-section2',
      type: 'text',
      content: `## Rasisme og kampen for inkludering

**Rasisme** er diskriminering, fordommer eller fiendtlighet rettet mot mennesker paa grunn av hudfarge, etnisitet eller opprinnelse. Rasisme kan vaere aapenbar -- som hatefulle kommentarer, vold eller systematisk forskjellsbehandling -- men den kan ogsaa vaere subtil og ubevisst, det vi kaller **strukturell rasisme**.

Strukturell rasisme betyr at samfunnets systemer og strukturer -- som arbeidsmarkedet, boligmarkedet eller rettssystemet -- kan vaere innrettet paa maater som systematisk gir noen grupper daarligere muligheter enn andre. Forskning viser for eksempel at jobbsoekere med utenlandske navn faar faerre innkallelser til intervju enn soekere med norske navn, selv naar kvalifikasjonene er identiske.

**Diskriminering** er et bredere begrep som omfatter urettferdig forskjellsbehandling basert paa kjoenn, alder, etnisitet, religion, funksjonsnedsettelse, seksuell orientering eller andre kjennetegn. I Norge er diskriminering forbudt ved lov, og **Likestillings- og diskrimineringsombudet** jobber med aa fremme likestilling og hindre diskriminering.

Men lover alene er ikke nok. Kampen mot rasisme og diskriminering handler ogsaa om holdninger, bevissthet og hverdagslige handlinger. Det handler om aa staa opp naar noen blir trakassert, om aa vaere bevisst paa egne fordommer, og om aa bygge et samfunn der alle foeeler seg velkomne og verdsatt uansett bakgrunn.

Norge er i dag et flerkulturelt samfunn. Det betyr at vi rommer mange kulturer, spraak og tradisjoner. For at dette mangfoldet skal vaere en styrke og ikke en kilde til konflikt, trenger vi dialog, respekt og vilje til aa forstaa hverandre -- uten aa gi opp verdier som likestilling, ytringsfrihet og menneskerettigheter.`,
    },
    {
      id: 'samfunnsfag-10-9-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa rasisme og diskriminering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-9-n-quiz2-q0',
            task: 'Hva er strukturell rasisme?',
            options: [
              { id: 'a', text: 'Rasisme som bare finnes i bygningskonstruksjoner', isCorrect: false },
              { id: 'b', text: 'Rasisme som er skrevet inn i loven', isCorrect: false },
              { id: 'c', text: 'Naar samfunnets systemer systematisk gir noen grupper daarligere muligheter', isCorrect: true },
              { id: 'd', text: 'Rasisme som bare finnes i andre land enn Norge', isCorrect: false },
            ],
            solution: 'Strukturell rasisme betyr at samfunnets systemer -- som arbeidsmarkedet, boligmarkedet eller rettssystemet -- kan vaere innrettet slik at noen grupper systematisk faar daarligere muligheter.',
          },
          {
            id: 'samfunnsfag-10-9-n-quiz2-q1',
            task: 'Hva gjor Likestillings- og diskrimineringsombudet?',
            options: [
              { id: 'a', text: 'Doemer folk som diskriminerer', isCorrect: false },
              { id: 'b', text: 'Fremmer likestilling og hindrer diskriminering', isCorrect: true },
              { id: 'c', text: 'Bestemmer hvem som faar jobb', isCorrect: false },
              { id: 'd', text: 'Skriver lover om innvandring', isCorrect: false },
            ],
            solution: 'Likestillings- og diskrimineringsombudet jobber for aa fremme likestilling og hindre diskriminering i Norge -- basert paa kjoenn, etnisitet, religion, funksjonsnedsettelse og andre grunnlag.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-9-n-summary',
      type: 'text',
      content: `## Oppsummering

**Identitet** er summen av alt som gjor deg til den du er, og deles i **personlig identitet** (hvem du er) og **sosial identitet** (hvilke grupper du tilhoerer). **Etnisitet** handler om kulturell tilhoerighet, og samene er Norges urfolk med egne rettigheter og eget **Sameting**. **Fornorskningspolitikken** paa 1800- og 1900-tallet undertrykte samisk kultur og spraak.

**Rasisme** kan vaere baade aapenbar og strukturell. **Diskriminering** er forbudt ved lov, og **Likestillings- og diskrimineringsombudet** jobber for likestilling. Et flerkulturelt samfunn krever dialog, respekt og aktiv innsats for inkludering -- mangfold er en ressurs naar vi forvalter det riktig.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10 NARRATIV: Eksamensforberedelse
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_10_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-10-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '10',
  title: 'Eksamensforberedelse',
  subtitle: 'Narrativ versjon',
  description: 'Din guide til muntlig eksamen i samfunnsfag -- fra presentasjon og fagsamtale til hvordan du kobler temaer og viser at du kan tenke selvstendig.',
  estimatedMinutes: 30,
  competenceGoals: [
    'presentere samfunnsfaglege tema og problemstillingar ved å bruke ulike kjelder og vise kjeldemedvit',
    'drøfte og argumentere med utgangspunkt i fagstoff og aktuelle hendingar',
    'vise samanheng mellom ulike tema og kompetansemål i faget',
  ],
  linkedChapterId: 'samfunnsfag-10-10',
  content: [
    {
      id: 'samfunnsfag-10-10-n-intro',
      type: 'text',
      content: `## Muntlig eksamen -- din sjanse til aa skinne

Tenk paa muntlig eksamen som en mulighet, ikke en trussel. Det er din sjanse til aa vise hva du kan -- ikke bare fakta du har pugget, men ogsaa evnen din til aa tenke, argumentere og se sammenhenger. I samfunnsfag handler eksamen om aa forstaa verden rundt deg og kunne snakke klokt om den.

Muntlig eksamen i samfunnsfag bestaar vanligvis av to deler: en **presentasjon** du forbereder paa forhaand, og en **fagsamtale** der sensor og laeerer stiller deg spoersmaal. Presentasjonen varer gjerne 10-15 minutter, og fagsamtalen 15-20 minutter. Du faar vanligvis vite temaet 48 timer foer eksamen -- nok tid til aa forberede en god presentasjon, men ikke nok til aa pugge alt.

Det viktigste raad du kan faa, er dette: **forstaa, ikke pugge**. En elev som har pugget fakta men ikke forstaar sammenhengene, vil slite naar sensor stiller uventede spoersmaal. En elev som forstaar de underliggende prinsippene, kan reflektere, droeefte og argumentere -- ogsaa om temaer som dukker opp overraskende.`,
    },
    {
      id: 'samfunnsfag-10-10-n-section1',
      type: 'text',
      content: `## Presentasjonen -- din mulighet til aa styre samtalen

I presentasjonen faar du muligheten til aa vise ditt beste. Her er noen tips som kan gjore en reell forskjell.

**Velg en tydelig problemstilling.** Ikke presenter bare et tema -- still et spoersmaal. I stedet for "Jeg skal snakke om demokrati" kan du si "Jeg skal undersoeke om det norske demokratiet er truet av sosiale medier." En god problemstilling gir presentasjonen retning og dybde.

**Bruk eksempler og aktuelle hendelser.** Teori alene er kjedelig. Koble fagstoffet til noe konkret -- en nyhetssak, en personlig erfaring, eller et historisk eksempel. Hvis du snakker om menneskerettigheter, kan du bruke en aktuell konflikt som eksempel. Hvis du snakker om globalisering, kan du spoore verdikjeden til et produkt du bruker.

**Vis at du kan droeefte.** Det betyr aa se saker fra flere sider. Presenter argumenter for og mot, og vis at du forstaar at det finnes ulike perspektiver. Droefting er noe av det viktigste sensorene ser etter.

**Bruk fagbegreper naturlig.** Du trenger ikke aa definere hvert begrep formelt, men vis at du forstaar og kan bruke dem riktig i sammenheng. Ord som maktfordeling, baerekraftig utvikling, interessekonflikt og kulturell globalisering boer vaere en naturlig del av vokabularet ditt.

**Hold strukturen enkel og tydelig.** Innledning med problemstilling, hoveddel med 2-3 hovedpunkter, og avslutning med oppsummering og egen refleksjon.`,
    },
    {
      id: 'samfunnsfag-10-10-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa eksamensforberedelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-10-n-quiz1-q0',
            task: 'Hva er det viktigste tipset for muntlig eksamen?',
            options: [
              { id: 'a', text: 'Pugge saa mange fakta som mulig', isCorrect: false },
              { id: 'b', text: 'Forstaa sammenhenger slik at du kan reflektere og droeefte', isCorrect: true },
              { id: 'c', text: 'Snakke saa fort som mulig for aa rekke gjennom alt', isCorrect: false },
              { id: 'd', text: 'Bare fokusere paa presentasjonen, ikke forberede seg til fagsamtalen', isCorrect: false },
            ],
            solution: 'Det viktigste er aa forstaa sammenhengene i faget, slik at du kan reflektere, droeefte og argumentere -- ogsaa naar sensor stiller uventede spoersmaal.',
          },
          {
            id: 'samfunnsfag-10-10-n-quiz1-q1',
            task: 'Hva kjennetegner en god problemstilling til presentasjonen?',
            options: [
              { id: 'a', text: 'Den er saa bred som mulig', isCorrect: false },
              { id: 'b', text: 'Den stiller et tydelig spoersmaal som gir presentasjonen retning', isCorrect: true },
              { id: 'c', text: 'Den bare beskriver et tema uten spoersmaal', isCorrect: false },
              { id: 'd', text: 'Den handler om noe som ikke staar i pensum', isCorrect: false },
            ],
            solution: 'En god problemstilling stiller et tydelig spoersmaal -- f.eks. "Er det norske demokratiet truet av sosiale medier?" Det gir presentasjonen retning, dybde og noe aa droeefte.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-10-n-section2',
      type: 'text',
      content: `## Fagsamtalen og tverrfaglige koblinger

I **fagsamtalen** stiller sensor og laeerer deg spoersmaal -- baade om presentasjonen din og om andre deler av pensum. Her er det viktig aa vaere forberedt paa at samtalen kan ta uventede vendinger. Noen tips:

Naar du faar et spoersmaal, ta deg tid til aa tenke foer du svarer. Det er helt greit aa si "La meg tenke litt" -- det viser at du reflekterer i stedet for aa bare gjengi noe du har pugget. Proev aa bygge opp svaret ditt med en tydelig struktur: paastand, begrunnelse, eksempel.

Noe av det som virkelig imponerer paa eksamen, er evnen til aa se **sammenhenger paa tvers av temaer**. LK20 har tre tverrfaglige temaer som gaar igjen i alle fag: **demokrati og medborgerskap**, **baerekraftig utvikling** og **folkehelse og livsmestring**. Kan du koble temaet ditt til ett eller flere av disse, viser du stor faglig modenhet.

For eksempel: hvis temaet er globalisering, kan du koble det til demokrati (hvordan pavirker globaliseringen demokratiet?), baerekraft (er global handel baerekraftig?), og menneskerettigheter (hva med arbeidernes rettigheter i verdikjeden?). Slike koblinger viser at du ser det store bildet.

Til slutt: husk at muntlig eksamen ogsaa handler om kommunikasjon. Snakk tydelig, ha blikkontakt, og vaer ikke redd for aa vise engasjement. Sensor oensker aa se en elev som bryr seg om faget og kan foeere en intelligent samtale om samfunnet vi lever i. Det er akkurat det samfunnsfag handler om.`,
    },
    {
      id: 'samfunnsfag-10-10-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa fagsamtalen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-10-n-quiz2-q0',
            task: 'Hva boer du gjore naar du faar et vanskelig spoersmaal paa eksamen?',
            options: [
              { id: 'a', text: 'Svare saa raskt som mulig', isCorrect: false },
              { id: 'b', text: 'Si at du ikke vet svaret', isCorrect: false },
              { id: 'c', text: 'Ta deg tid til aa tenke, og bygge opp svaret med paastand, begrunnelse og eksempel', isCorrect: true },
              { id: 'd', text: 'Skifte tema til noe du kan bedre', isCorrect: false },
            ],
            solution: 'Det er helt greit aa ta seg tid til aa tenke. Bygg svaret med en tydelig struktur: si hva du mener (paastand), begrunn det, og gi et eksempel. Det viser faglig modenhet.',
          },
          {
            id: 'samfunnsfag-10-10-n-quiz2-q1',
            task: 'Hvilke tre tverrfaglige temaer gaar igjen i LK20?',
            options: [
              { id: 'a', text: 'Matte, norsk og engelsk', isCorrect: false },
              { id: 'b', text: 'Demokrati og medborgerskap, baerekraftig utvikling, folkehelse og livsmestring', isCorrect: true },
              { id: 'c', text: 'Historie, geografi og oekonomi', isCorrect: false },
              { id: 'd', text: 'Globalisering, teknologi og miljoevern', isCorrect: false },
            ],
            solution: 'De tre tverrfaglige temaene i LK20 er demokrati og medborgerskap, baerekraftig utvikling, og folkehelse og livsmestring. Aa koble temaer til disse viser faglig modenhet.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-10-n-summary',
      type: 'text',
      content: `## Oppsummering

Muntlig eksamen bestaar av en **presentasjon** og en **fagsamtale**. Det viktigste er aa **forstaa sammenhenger**, ikke bare pugge fakta. En god presentasjon har en tydelig **problemstilling**, bruker eksempler og aktuelle hendelser, og viser evne til **droefting** fra flere sider.

I fagsamtalen boer du ta deg tid til aa tenke, bygge svar med **paastand, begrunnelse og eksempel**, og vise evne til aa koble temaer paa tvers -- saerlig til LK20s tre tverrfaglige temaer: **demokrati og medborgerskap**, **baerekraftig utvikling** og **folkehelse og livsmestring**. Muntlig eksamen handler til syvende og sist om aa vise at du forstaar samfunnet og kan snakke klokt om det.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Alle narrativkapitler i del 3
// ============================================================================

export const SAMFUNNSFAG_10_NARRATIV_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSFAG_10_8_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_9_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_10_NARRATIV,
];
