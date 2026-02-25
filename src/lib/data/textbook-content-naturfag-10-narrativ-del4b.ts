/**
 * Naturfag 10 - Narrativ versjon DEL 4B
 * Seksjon 4: Økologi (4.4-4.6)
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.4 NARRATIV: Økosystemer og næringskjeder
// ============================================================================

export const CHAPTER_NATURFAG_10_4_4_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-4-4-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '4.4',
  title: 'Økosystemer og næringskjeder',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag hvordan alt liv på jorden henger sammen gjennom næringskjeder og energiflyt, fra den minste plante til den mektigste toppredatoren.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare hva et økosystem er og forskjellen mellom biotiske og abiotiske faktorer',
    'beskrive forskjellen mellom produsenter, konsumenter og nedbrytere',
    'forklare hvordan energi flyter i næringskjeder og næringsnett',
    'beskrive energipyramiden og 10%-regelen',
    'forklare hvordan stoffer sirkulerer i naturen',
  ],
  linkedChapterId: 'naturfag-10-4-4',
  content: [
    {
      id: 'naturfag-10-4-4-n-intro',
      type: 'text',
      content: `## Alt henger sammen

Forestill deg at du står i en norsk granskog en varm sommerdag. Sollyset siler gjennom trekronene, gresset bølger i vinden, en hare sitter musestille bak en busk, og høyt oppe i et tre sitter en ørn og speider med skarpe øyne. Det virker kanskje som om disse organismene lever uavhengig av hverandre, men sannheten er at de er uløselig knyttet sammen i et usynlig nettverk av energi og næring.

Gresset fanger solenergi og gjør den om til mat gjennom fotosyntese. Haren spiser gresset og bruker energien til å løpe, vokse og holde seg varm. Ørnen jakter på haren og får energi videre. Og når disse organismene til slutt dør, bryter sopp og bakterier dem ned og frigjør næringsstoffene tilbake til jorden, slik at nye planter kan vokse.

Denne sammenhengen mellom alt levende er det vi kaller et økosystem. I dette kapittelet skal vi utforske hvordan økosystemer fungerer, hvordan energi strømmer fra planter til toppredatorer, og hvorfor det alltid er mange flere gressplanter enn ørner i naturen. Gjør deg klar for en reise inn i naturens eget kretsløp.`,
    },
    {
      id: 'naturfag-10-4-4-n-section1',
      type: 'text',
      content: `## Hva er et økosystem?

Et økosystem er et geografisk område hvor levende organismer samhandler med hverandre og med det ikke-levende miljøet rundt seg. Det kan være en hel skog, en innsjø, et korallrev eller til og med en liten pytt i veikanten.

For å forstå et økosystem må du kjenne til to typer faktorer. De biotiske faktorene er alt som lever, altså planter, dyr, sopp, bakterier og andre mikroorganismer. De abiotiske faktorene er alt som ikke lever, men som likevel påvirker livet. Her snakker vi om temperatur, lys, vann, jord, luft og pH. Temperaturen avgjør hvilke arter som kan leve i et område. Lys er nødvendig for at planter skal drive fotosyntese. Vann er livsviktig for alle organismer, og jordens næringsstoffer gir plantene det de trenger for å vokse.

Tenk på en norsk innsjø. De biotiske faktorene er fisk, alger, vannplanter og bakterier. De abiotiske faktorene er vanntemperaturen, lyset som trenger ned, oksygennivået i vannet og pH-verdien. Alle disse faktorene påvirker hverandre. Hvis temperaturen stiger, endres oksygennivået, og det påvirker hvilke fiskearter som kan overleve. Et økosystem er altså ikke bare en samling organismer, det er et komplekst samspill der alt påvirker alt.`,
    },
    {
      id: 'naturfag-10-4-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-4-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på økosystemer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-4-4-n-quiz1-q0',
            task: 'Hvilken av disse er en abiotisk faktor i et økosystem?',
            options: [
              { id: 'a', text: 'Temperatur', isCorrect: true },
              { id: 'b', text: 'Busker', isCorrect: false },
              { id: 'c', text: 'Edderkopper', isCorrect: false },
              { id: 'd', text: 'Bakterier', isCorrect: false },
            ],
            solution:
              'Temperatur er en abiotisk faktor fordi den ikke er levende. Abiotiske faktorer inkluderer temperatur, lys, vann, jord, luft og pH. Busker, edderkopper og bakterier er alle biotiske faktorer fordi de er levende organismer.',
          },
          {
            id: 'naturfag-10-4-4-n-quiz1-q1',
            task: 'Hva er et økosystem?',
            options: [
              { id: 'a', text: 'Bare de levende organismene i et område', isCorrect: false },
              { id: 'b', text: 'Et område der levende organismer samhandler med hverandre og det ikke-levende miljøet', isCorrect: true },
              { id: 'c', text: 'Bare de abiotiske faktorene i naturen', isCorrect: false },
              { id: 'd', text: 'En samling av bare planter', isCorrect: false },
            ],
            solution:
              'Et økosystem er et geografisk område der levende organismer (biotiske faktorer) samhandler med hverandre og med det ikke-levende miljøet (abiotiske faktorer). Det er samspillet mellom alt levende og ikke-levende som utgjør økosystemet.',
          },
          {
            id: 'naturfag-10-4-4-n-quiz1-q2',
            task: 'En kanin spiser gress i en skog. Hva er kaninen i dette økosystemet?',
            options: [
              { id: 'a', text: 'Produsent', isCorrect: false },
              { id: 'b', text: 'Primærkonsument', isCorrect: true },
              { id: 'c', text: 'Sekundærkonsument', isCorrect: false },
              { id: 'd', text: 'Nedbryter', isCorrect: false },
            ],
            solution:
              'Kaninen er en primærkonsument fordi den spiser planter direkte. Primærkonsumenter er planteetere (herbivorer) som får sin energi fra produsenter. Gresset er produsenten, og en rødrev som spiser kaninen ville vært sekundærkonsument.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-4-4-n-section2',
      type: 'text',
      content: `## Produsenter, konsumenter og nedbrytere

Alle organismer i et økosystem har en rolle å spille, og vi deler dem inn i tre hovedgrupper.

Produsenter er grunnlaget for alt liv. De er organismer som kan lage sin egen mat fra sollys, vann og karbondioksid gjennom fotosyntese. Planter, alger og cyanobakterier er produsenter, og vi kaller dem også autotrofe, som betyr «selvnærende». De fanger solenergi og gjør den tilgjengelig for alle andre organismer, og de produserer oksygenet som alle dyr trenger for å puste.

Konsumenter er organismer som må spise andre organismer for å få energi. De kalles heterotrofe, som betyr «andrenærende». Vi deler dem inn i flere nivåer. Primærkonsumenter er planteetere som kanin, rein og insekter. Sekundærkonsumenter er kjøttetere som rødrev, gaupe og edderkopper som spiser planteterne. Tertiærkonsumenter er toppredatorer som ulv, ørn og hai, som spiser andre kjøttetere. Og så har vi alltetere som bjørn og mennesker, som spiser både planter og dyr.

Nedbrytere er kanskje de mest undervurderte organismene i naturen. Sopp, bakterier og meitemark bryter ned døde organismer og avfall til enkle næringsstoffer som nitrogen, fosfor og karbon. Disse næringsstoffene returneres til jorden, slik at planter kan bruke dem på nytt. Uten nedbrytere ville døde organismer hope seg opp, næringsstoffer ville bli låst fast, planter ville gå tom for næring, og livet ville rett og slett stoppe opp.`,
    },
    {
      id: 'naturfag-10-4-4-n-section3',
      type: 'text',
      content: `## Næringskjeder, næringsnett og energipyramiden

En næringskjede viser hvordan energi flyter fra en organisme til en annen. Den starter alltid med solenergi som fanges av en produsent, og fortsetter oppover gjennom konsumenter. Et typisk eksempel fra norsk skog er: gress fanges av sollys og danner energi, kaninen spiser gresset, rødreven spiser kaninen, og ørnen spiser rødreven. Pilene i en næringskjede betyr «gir energi til» eller «blir spist av».

I virkeligheten spiser de fleste dyr flere typer mat. Rødreven spiser både kanin, mus, fugler og bær. Ørnen spiser både rødrev, kanin og fisk. Et næringsnett viser alle disse forbindelsene, og det er langt mer realistisk enn en enkel næringskjede. Næringsnett gjør økosystemer mer stabile, for hvis én matressurs forsvinner, kan dyrene finne alternativer.

Men her kommer noe fascinerende. Når energi overføres fra ett nivå til det neste, går det meste tapt. Bare omtrent 10 prosent av energien overføres videre, og resten brukes til varme, bevegelse, vekst og avfall. Dette kalles 10-prosentregelen, og den forklarer formen på energipyramiden. Hvis gress inneholder 1000 kilojoule energi, får kaninen bare 100, rødreven 10 og ørnen bare 1 kilojoule. Det er derfor det alltid er langt flere planter enn planteetere, og langt flere planteetere enn rovdyr. Toppredatorer trenger enorme territorier for å finne nok mat, og det forklarer også hvorfor det sjelden finnes mer enn fire til fem ledd i en næringskjede.`,
    },
    {
      id: 'naturfag-10-4-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-4-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på næringskjeder og energipyramiden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-4-4-n-quiz2-q0',
            task: 'Hva sier 10-prosentregelen?',
            options: [
              { id: 'a', text: 'Bare 10 prosent av artene i et økosystem er produsenter', isCorrect: false },
              { id: 'b', text: 'Bare 10 prosent av energien overføres fra ett trofisk nivå til det neste', isCorrect: true },
              { id: 'c', text: '10 prosent av alle arter er truet', isCorrect: false },
              { id: 'd', text: 'Økosystemer kan bare ha 10 arter', isCorrect: false },
            ],
            solution:
              'Bare omtrent 10 prosent av energien overføres fra ett trofisk nivå til det neste. De resterende 90 prosent brukes til organismens egne livsprosesser som varme, bevegelse og vekst, eller går tapt som avfall. Derfor er det alltid langt færre rovdyr enn byttedyr i et økosystem.',
          },
          {
            id: 'naturfag-10-4-4-n-quiz2-q1',
            task: 'Hvorfor er næringsnett mer realistiske enn næringskjeder?',
            options: [
              { id: 'a', text: 'Fordi næringsnett bare viser én matsti', isCorrect: false },
              { id: 'b', text: 'Fordi de fleste dyr spiser flere typer mat, og nettet viser alle forbindelsene', isCorrect: true },
              { id: 'c', text: 'Fordi næringsnett er enklere å forstå', isCorrect: false },
              { id: 'd', text: 'Fordi næringskjeder ikke finnes i naturen', isCorrect: false },
            ],
            solution:
              'I virkeligheten spiser de fleste dyr flere typer mat. Rødreven spiser kanin, mus, fugler og bær. Et næringsnett viser alle disse forbindelsene og gir et mer realistisk bilde av økosystemet. Nettverket gjør også økosystemer mer stabile fordi dyr har alternative matkilder hvis én art forsvinner.',
          },
          {
            id: 'naturfag-10-4-4-n-quiz2-q2',
            task: 'Planter i et økosystem fanger 100 000 kJ energi. Hvor mye energi er tilgjengelig for sekundærkonsumenter?',
            options: [
              { id: 'a', text: '10 000 kJ', isCorrect: false },
              { id: 'b', text: '1 000 kJ', isCorrect: true },
              { id: 'c', text: '50 000 kJ', isCorrect: false },
              { id: 'd', text: '100 000 kJ', isCorrect: false },
            ],
            solution:
              'Med 10-prosentregelen: Planter har 100 000 kJ. Primærkonsumenter (planteetere) får 10 prosent, altså 10 000 kJ. Sekundærkonsumenter (kjøttetere) får 10 prosent av det igjen, altså 1 000 kJ. For hvert ledd i næringskjeden mister vi 90 prosent av energien.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-4-4-n-section4',
      type: 'text',
      content: `## Stoffkretsløp: Naturens gjenbruk

Mens energi strømmer i én retning gjennom økosystemet, fra solen via planter til dyr og til slutt ut som varme, oppfører stoffer seg helt annerledes. Stoffer sirkulerer i kretsløp og brukes om og om igjen. De samme karbonatomene som en gang var en del av en dinosaur, kan i dag være en del av deg.

Karbonkretsløpet er et av de viktigste. Karbondioksid finnes i luften og tas opp av planter gjennom fotosyntese. Karbonet blir en del av plantenes molekyler, som glukose og cellulose. Når dyr spiser planter, overføres karbonet videre. Alle levende organismer driver celleånding, som frigjør karbondioksid tilbake til luften. Og når organismer dør, bryter nedbrytere dem ned og sender enda mer karbondioksid tilbake til atmosfæren. Sirkelen er komplett.

Nitrogenkretsløpet er også avgjørende. Selv om 78 prosent av luften er nitrogen, kan planter ikke bruke nitrogengass direkte fordi det er et veldig stabilt molekyl med en sterk trippelbinding. Spesielle bakterier i jorden gjør jobben med å omdanne nitrogen til ammonium og nitrat, former som planter kan ta opp gjennom røttene. Dyr får nitrogen gjennom maten, og nedbrytere returnerer nitrogen tilbake til jorden når organismer dør.

I alle disse kretsløpene er nedbrytere helt avgjørende. Uten dem ville næringsstoffer bli permanent låst fast i døde organismer, og planter ville gå tom for nitrogen, fosfor og karbon. Nedbrytere er naturens gjenbruksstasjon.`,
    },
    {
      id: 'naturfag-10-4-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-4-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på stoffkretsløp:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-4-4-n-quiz3-q0',
            task: 'Hva er hovedforskjellen mellom energiflyt og stoffkretsløp i et økosystem?',
            options: [
              { id: 'a', text: 'Energi sirkulerer i kretsløp, stoffer flyter én vei', isCorrect: false },
              { id: 'b', text: 'Energi flyter én vei og tapes som varme, stoffer sirkulerer i kretsløp', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell, begge sirkulerer', isCorrect: false },
              { id: 'd', text: 'Stoffer kommer fra solen, energi kommer fra jorden', isCorrect: false },
            ],
            solution:
              'Energi flyter én vei gjennom økosystemet: fra solen, via planter og dyr, til varme som stråler ut i rommet. Energien må tilføres hele tiden via sollys. Stoffer derimot sirkulerer i kretsløp. De samme atomene brukes om og om igjen av levende organismer og det ikke-levende miljøet.',
          },
          {
            id: 'naturfag-10-4-4-n-quiz3-q1',
            task: 'Hva er nedbryternes viktigste rolle i stoffkretsløpene?',
            options: [
              { id: 'a', text: 'De produserer oksygen gjennom fotosyntese', isCorrect: false },
              { id: 'b', text: 'De jakter på andre dyr', isCorrect: false },
              { id: 'c', text: 'De returnerer næringsstoffer fra døde organismer tilbake til jorden og luften', isCorrect: true },
              { id: 'd', text: 'De fanger solenergi', isCorrect: false },
            ],
            solution:
              'Nedbrytere som sopp og bakterier bryter ned døde organismer og avfall til enkle næringsstoffer. Disse næringsstoffene returneres til jorden og luften, slik at planter kan ta dem opp på nytt. Uten nedbrytere ville næringsstoffer bli låst fast i dødt materiale, og økosystemet ville bryte sammen.',
          },
          {
            id: 'naturfag-10-4-4-n-quiz3-q2',
            task: 'Hvorfor kan ikke planter bruke nitrogengass direkte fra luften?',
            options: [
              { id: 'a', text: 'Fordi nitrogen er giftig for planter', isCorrect: false },
              { id: 'b', text: 'Fordi nitrogenmolekylet har en svært sterk trippelbinding som planter ikke kan bryte', isCorrect: true },
              { id: 'c', text: 'Fordi det ikke er nitrogen i luften', isCorrect: false },
              { id: 'd', text: 'Fordi planter bare trenger karbon', isCorrect: false },
            ],
            solution:
              'Nitrogen i luften (N₂) har en svært sterk trippelbinding mellom de to nitrogenatomene. Planter mangler enzymer til å bryte denne bindingen. Spesielle bakterier i jorden kan omdanne N₂ til ammonium og nitrat, som planter tar opp gjennom røttene og bruker til å bygge proteiner og DNA.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-4-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket hvordan alt liv i naturen henger sammen gjennom økosystemer. Vi har sett at et økosystem består av biotiske faktorer (alt som lever) og abiotiske faktorer (det ikke-levende miljøet), og at disse samspiller på komplekse måter.

Vi har lært om de tre rollene i et økosystem. Produsenter som planter og alger fanger solenergi gjennom fotosyntese. Konsumenter som planteetere, kjøttetere og toppredatorer overfører energien videre gjennom næringskjeden. Og nedbrytere som sopp og bakterier returnerer næringsstoffene til jorden slik at sirkelen kan fortsette.

Vi har oppdaget 10-prosentregelen, som forteller oss at bare 10 prosent av energien overføres fra ett trofisk nivå til det neste. Resten brukes til varme, bevegelse og vekst. Dette forklarer hvorfor det alltid er langt flere planter enn planteetere, og langt flere planteetere enn toppredatorer.

Til slutt har vi sett den store forskjellen mellom energiflyt og stoffkretsløp. Energi flyter i én retning og tapes som varme, mens stoffer som karbon og nitrogen sirkulerer i evige kretsløp der nedbrytere spiller en avgjørende rolle.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.5 NARRATIV: Biologisk mangfold
// ============================================================================

export const CHAPTER_NATURFAG_10_4_5_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-4-5-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '4.5',
  title: 'Biologisk mangfold',
  subtitle: 'Narrativ versjon',
  description:
    'Utforsk variasjonen av liv på jorda, fra gener til hele økosystemer, og forstå hvorfor dette mangfoldet er uvurderlig og truet.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive hva biologisk mangfold er på tre nivåer',
    'forklare økosystemtjenester og deres betydning',
    'identifisere trusler mot biologisk mangfold',
    'beskrive tiltak for bevaring av biologisk mangfold',
  ],
  linkedChapterId: 'naturfag-10-4-5',
  content: [
    {
      id: 'naturfag-10-4-5-n-intro',
      type: 'text',
      content: `## Livets fantastiske variasjon

Jorda er hjem til en nesten ufattelig variasjon av liv. Fra bittesmå bakterier som lever i kokende vulkanske kilder, til enorme blåhvaler som krysser verdenshavene. Fra regnskoger som sumrer av insektliv, til dype havgroper der rare skapninger lyser i mørket. Denne variasjonen av alt levende kalles biologisk mangfold, eller biodiversitet.

Men dette mangfoldet er truet som aldri før. Arter dør ut hundre til tusen ganger raskere enn hva som er naturlig. Regnskoger forsvinner, korallrev blekes hvite, og insektbestander kollapser. FN kaller det en krise for hele planeten.

Hvorfor bør vi bry oss? Fordi biologisk mangfold ikke bare handler om sjeldne dyr i fjerne land. Det handler om maten du spiser, luften du puster, vannet du drikker og medisinene som kan redde livet ditt. Naturen gir oss tjenester vi er helt avhengige av, og disse tjenestene krever et rikt og variert naturliv.

I dette kapittelet skal du lære hva biologisk mangfold egentlig er, hvorfor det er så viktig for oss mennesker, hvilke trusler det står overfor, og hva vi kan gjøre for å ta vare på det.`,
    },
    {
      id: 'naturfag-10-4-5-n-section1',
      type: 'text',
      content: `## Tre nivåer av mangfold

Biologisk mangfold kan beskrives på tre ulike nivåer, og alle tre er viktige.

Det første nivået er genetisk mangfold, altså variasjonen i gener innenfor en og samme art. Tenk på alle hundene du har sett. Schæfer, puddel, golden retriever og chihuahua tilhører alle samme art, men genene deres gir dem vilt forskjellig utseende og egenskaper. Det samme gjelder mennesker med ulik hudfarge, øyenfarge og høyde, eller epler som finnes i hundrevis av sorter. Genetisk mangfold er viktig fordi det gjør en art mer robust. Hvis en sykdom rammer, vil noen individer ha gener som gir motstandskraft, og arten overlever. Uten genetisk variasjon kan én eneste sykdom utslette hele bestanden.

Det andre nivået er artsmangfold, som er antallet ulike arter i et område. En tropisk regnskog har tusenvis av arter av planter, insekter, fugler og pattedyr, og har derfor et enormt artsmangfold. Tropiske regnskoger dekker bare 6 prosent av jordas landareal, men inneholder over halvparten av alle kjente arter. Korallrev kalles «havets regnskoger» fordi de har tilsvarende høyt artsmangfold under vann.

Det tredje nivået er økosystemmangfold, altså variasjonen i ulike naturtyper. Regnskoger, gressletter, korallrev, fjellområder, våtmarker og havområder er alle unike økosystemer med sine egne arter og prosesser. Variasjonen mellom disse økosystemene sikrer at naturen fungerer på globalt nivå.`,
    },
    {
      id: 'naturfag-10-4-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-4-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på biologisk mangfold:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-4-5-n-quiz1-q0',
            task: 'At det finnes mange ulike sorter epler (Gravenstein, Discovery, Aroma) er et eksempel på hvilket nivå av biologisk mangfold?',
            options: [
              { id: 'a', text: 'Genetisk mangfold', isCorrect: true },
              { id: 'b', text: 'Artsmangfold', isCorrect: false },
              { id: 'c', text: 'Økosystemmangfold', isCorrect: false },
              { id: 'd', text: 'Populasjonsmangfold', isCorrect: false },
            ],
            solution:
              'Alle eplesortene tilhører samme art (epletre), men har forskjellige genetiske varianter som gir ulik smak, farge og størrelse. Dette er genetisk mangfold, altså variasjon i gener innenfor en art.',
          },
          {
            id: 'naturfag-10-4-5-n-quiz1-q1',
            task: 'Hvor på jorda finnes det størst artsmangfold?',
            options: [
              { id: 'a', text: 'I Arktis', isCorrect: false },
              { id: 'b', text: 'I ørkenområder', isCorrect: false },
              { id: 'c', text: 'I tropiske regnskoger', isCorrect: true },
              { id: 'd', text: 'I tempererte skoger', isCorrect: false },
            ],
            solution:
              'Tropiske regnskoger har det klart største artsmangfoldet. De dekker bare 6 prosent av jordas landareal, men inneholder over 50 prosent av alle kjente arter. Det varme og fuktige klimaet hele året gir optimale vekstforhold og mange økologiske nisjer.',
          },
          {
            id: 'naturfag-10-4-5-n-quiz1-q2',
            task: 'Hvorfor er genetisk mangfold viktig for en art?',
            options: [
              { id: 'a', text: 'Fordi det gjør alle individer helt like', isCorrect: false },
              { id: 'b', text: 'Fordi variasjon gjør arten mer robust mot sykdommer og miljøendringer', isCorrect: true },
              { id: 'c', text: 'Fordi det bare er viktig for mennesker, ikke dyr', isCorrect: false },
              { id: 'd', text: 'Fordi det gjør at arten trenger mindre mat', isCorrect: false },
            ],
            solution:
              'Genetisk mangfold gjør en art mer robust fordi ulike individer har ulike gener. Hvis en sykdom rammer, vil noen individer ha naturlig motstandskraft og overleve. Uten genetisk variasjon kan en hel populasjon bli utslettet av én enkelt sykdom eller miljøendring.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-4-5-n-section2',
      type: 'text',
      content: `## Økosystemtjenester: Det naturen gir oss gratis

Biologisk mangfold gir oss det vi kaller økosystemtjenester, altså fordeler naturen gir oss helt gratis. Disse tjenestene deles inn i fire kategorier.

Forsyningstjenester er det mest håndgripelige, nemlig direkte produkter vi henter fra naturen. Mat som korn, frukt, kjøtt og fisk. Ferskvann til drikke og vanning. Tre og fiber til tømmer, bomull og papir. Og noe du kanskje ikke tenker over: omtrent 25 prosent av alle medisiner stammer fra planter, som aspirin fra piletre. Uten biologisk mangfold mister vi potensielle fremtidige medisiner vi ennå ikke har oppdaget.

Reguleringstjenester er naturlige prosesser som holder miljøet i balanse. Bier, humler og andre insekter pollinerer 75 prosent av matplantene våre, en tjeneste som er verdt milliarder av kroner. Planter absorberer karbondioksid og renser luften. Våtmarker fungerer som naturlige vannrenseanlegg og svamper som demper flom. Skoger og hav regulerer klimaet ved å absorbere drivhusgasser.

Kulturelle tjenester er alt det immaterielle naturen gir oss: friluftsliv, vakre landskap, inspirasjon til kunst og den roen vi føler i naturen. Og støttetjenester er de grunnleggende prosessene som holder alt annet i gang: fotosyntese, næringsstoffkretsløp og jorddannelse. Uten disse ville ingen av de andre tjenestene eksistere.

Tenk over dette: Hvis alle bier forsvant, ville 75 prosent av matplantene våre miste pollinering. Resultatet ville vært global matmangel. Naturen er ikke bare fin å se på, den holder oss i live.`,
    },
    {
      id: 'naturfag-10-4-5-n-section3',
      type: 'text',
      content: `## Trusler mot mangfoldet

Biologisk mangfold er truet over hele verden, og arter dør ut hundre til tusen ganger raskere enn det som er naturlig. De fem hovedtruslene kan huskes med forkortelsen HIPCO.

Habitatødeleggelse er den viktigste trusselen. Når regnskoger hogges for soyaplantasjer, våtmarker dreneres for jordbruk eller byer bygges ut over naturområder, mister planter og dyr levestedene sine. Amazonas-regnskogen, som inneholder 10 prosent av alle arter på jorden, krymper hvert år.

Invasive arter er fremmede arter som mennesker bringer til nye områder der de ikke har naturlige fiender. I Norge er kanadagås, mink og kjempebjørnekjeks eksempler. Kjempebjørnekjeks kan bli opptil fem meter høy, skygger ut alle andre planter, og plantesaften gir alvorlige brannskader i kombinasjon med sollys.

Forurensning tar mange former. Plastforurensning dreper sjøfugl og fisk. Gjødsel som renner ut i vann forårsaker eutrofiering, der alger vokser eksplosivt, bruker opp oksygenet og kveler alt annet liv. Pesticider dreper ikke bare skadedyr, men også nyttige insekter som bier.

Klimaendringer endrer temperatur, nedbør og havnivå over hele kloden. Isbjørnen mister levested når havisen smelter. Koraller blekes og dør når havet blir for varmt. Fugler ankommer for tidlig til hekkeplassene og finner ikke mat.

Overutnyttelse betyr at vi tar for mye fra naturen. Overfiske truer fiskebestander verden over. Elefanter jaktes for elfenben og neshorn for horn. Ulovlig handel med ville dyr er en milliardvirksomhet.`,
    },
    {
      id: 'naturfag-10-4-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-4-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på økosystemtjenester og trusler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-4-5-n-quiz2-q0',
            task: 'At bier pollinerer epleblomster slik at vi får epler, er et eksempel på hvilken type økosystemtjeneste?',
            options: [
              { id: 'a', text: 'Forsyningstjeneste', isCorrect: false },
              { id: 'b', text: 'Reguleringstjeneste', isCorrect: true },
              { id: 'c', text: 'Kulturell tjeneste', isCorrect: false },
              { id: 'd', text: 'Støttetjeneste', isCorrect: false },
            ],
            solution:
              'Pollinering er en reguleringstjeneste fordi det er en naturlig prosess som regulerer økosystemet. Bier og andre insekter pollinerer 75 prosent av matplantene våre. Eplet i seg selv er en forsyningstjeneste (mat), men prosessen med pollinering er en reguleringstjeneste.',
          },
          {
            id: 'naturfag-10-4-5-n-quiz2-q1',
            task: 'Hvilken trussel mot biologisk mangfold regnes som den viktigste?',
            options: [
              { id: 'a', text: 'Forurensning', isCorrect: false },
              { id: 'b', text: 'Klimaendringer', isCorrect: false },
              { id: 'c', text: 'Habitatødeleggelse', isCorrect: true },
              { id: 'd', text: 'Overutnyttelse', isCorrect: false },
            ],
            solution:
              'Habitatødeleggelse er den viktigste trusselen mot biologisk mangfold. Når naturområder ødelegges for å gi plass til landbruk, byer eller veier, mister arter levestedene sine. Avskoging av regnskoger, drenering av våtmarker og urbanisering er de mest alvorlige formene.',
          },
          {
            id: 'naturfag-10-4-5-n-quiz2-q2',
            task: 'Hva betyr HIPCO som huskeregel for trusler mot biologisk mangfold?',
            options: [
              { id: 'a', text: 'Havstigning, Issmelting, Plastforurensning, CO₂-utslipp, Oljeutslipp', isCorrect: false },
              { id: 'b', text: 'Habitatødeleggelse, Invasive arter, Forurensning (Pollution), Klimaendringer (Climate change), Overutnyttelse (Overexploitation)', isCorrect: true },
              { id: 'c', text: 'Hogst, Industri, Plast, Cellulose, Oljebruk', isCorrect: false },
              { id: 'd', text: 'Hav, Is, Planter, CO₂, Oksygen', isCorrect: false },
            ],
            solution:
              'HIPCO står for de fem hovedtruslene mot biologisk mangfold: Habitatødeleggelse (tap av levesteder), Invasive arter (fremmede arter uten naturlige fiender), Pollution/Forurensning, Climate change/Klimaendringer, og Overexploitation/Overutnyttelse. Habitatødeleggelse regnes som den viktigste trusselen.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-4-5-n-section4',
      type: 'text',
      content: `## Rødlista og bevaring

For å holde oversikt over truede arter bruker vi Rødlista, et internasjonalt klassifiseringssystem utviklet av IUCN. Arter rangeres fra livskraftig, som rødrev og grantre, via nær truet, sårbar og sterkt truet, til kritisk truet, som er den høyeste farenivået for arter som fortsatt finnes i naturen. Utdødd i vill tilstand betyr at arten bare finnes i fangenskap, og utdødd betyr at det ikke finnes noen individer igjen, slik som dodo og mammut.

I Norge er ulven kritisk truet med bare omtrent hundre individer. Hubro og polarhare er sårbare, og storsalamanderen er kritisk truet. Mange av disse artene trues av habitatødeleggelse, klimaendringer og jakt.

Men det er håp. Vi har mange verktøy for å bevare biologisk mangfold. Verneområder som nasjonalparker og naturreservater gir arter trygge levesteder. Jotunheimen og Dovrefjell er norske eksempler. Lovvern av arter, som CITES internasjonalt og Naturmangfoldloven i Norge, forbyr jakt og handel med truede arter. Svalbard globale frøhvelv, også kalt «dommedagshvelvet», lagrer frø fra over en million plantesorter som forsikring mot katastrofer. Gjeninnføring av arter, som moskusfe på Dovrefjell, kan gjenopprette økosystemer. Og bærekraftig bruk, som fiskekvoter og økologisk landbruk, sikrer at vi kan bruke naturen uten å ødelegge den for fremtidige generasjoner.

Bærekraftig utvikling handler nettopp om dette: å møte dagens behov uten å ødelegge for dem som kommer etter oss.`,
    },
    {
      id: 'naturfag-10-4-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-4-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på Rødlista og bevaring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-4-5-n-quiz3-q0',
            task: 'En art er klassifisert som CR (Critically Endangered) på Rødlista. Hva betyr dette?',
            options: [
              { id: 'a', text: 'Arten er livskraftig og ikke truet', isCorrect: false },
              { id: 'b', text: 'Arten har ekstremt høy risiko for utryddelse', isCorrect: true },
              { id: 'c', text: 'Arten er allerede utdødd', isCorrect: false },
              { id: 'd', text: 'Arten finnes bare i dyreparker', isCorrect: false },
            ],
            solution:
              'CR (Critically Endangered) betyr kritisk truet, altså ekstremt høy risiko for utryddelse. Det er det høyeste farenivået for arter som fortsatt finnes i naturen. Eksempler inkluderer sumatra-neshorn og vaquita. Utdødd i vill tilstand (EW) betyr at arten bare finnes i fangenskap, og utdødd (EX) betyr ingen individer igjen.',
          },
          {
            id: 'naturfag-10-4-5-n-quiz3-q1',
            task: 'Hva er Svalbard globale frøhvelv?',
            options: [
              { id: 'a', text: 'En turistattraksjon på Svalbard', isCorrect: false },
              { id: 'b', text: 'Et lager for frø fra over en million plantesorter som forsikring mot katastrofer', isCorrect: true },
              { id: 'c', text: 'Et forsøk på å dyrke planter i arktisk klima', isCorrect: false },
              { id: 'd', text: 'En genbank for norske husdyrraser', isCorrect: false },
            ],
            solution:
              'Svalbard globale frøhvelv, ofte kalt «dommedagshvelvet», lagrer frø fra over 1,1 millioner plantesorter fra hele verden. Det ligger dypt inne i en fjellside på Svalbard og er verdens viktigste forsikring mot at matplanter går tapt på grunn av klimaendringer, sykdommer, krig eller andre katastrofer. Det bevarer genetisk mangfold for fremtiden.',
          },
          {
            id: 'naturfag-10-4-5-n-quiz3-q2',
            task: 'Hva betyr bærekraftig utvikling?',
            options: [
              { id: 'a', text: 'At vi bruker opp alle naturressursene nå', isCorrect: false },
              { id: 'b', text: 'At vi aldri bruker naturressurser', isCorrect: false },
              { id: 'c', text: 'At vi møter dagens behov uten å ødelegge for fremtidige generasjoner', isCorrect: true },
              { id: 'd', text: 'At bare rike land kan bruke naturressurser', isCorrect: false },
            ],
            solution:
              'Bærekraftig utvikling betyr å møte dagens behov uten å ødelegge mulighetene for fremtidige generasjoner. Det hviler på tre pilarer: miljø (bevare natur og mangfold), økonomi (sikre vekst) og samfunn (rettferdig fordeling av ressurser). Huskeregel: Bruk naturen, men ikke bruk den opp.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-4-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket biologisk mangfold, variasjonen av alt levende på jorden. Vi har sett at det beskrives på tre nivåer: genetisk mangfold er variasjon i gener innenfor en art, artsmangfold er antallet ulike arter i et område, og økosystemmangfold er variasjonen i naturtyper og økosystemer.

Vi har lært at biologisk mangfold gir oss økosystemtjenester vi er helt avhengige av. Forsyningstjenester gir oss mat, vann og medisiner. Reguleringstjenester som pollinering og klimaregulering holder miljøet i balanse. Kulturelle tjenester gir oss rekreasjon og naturopplevelser. Og støttetjenester som fotosyntese og næringsstoffkretsløp holder alt annet i gang.

Vi har sett at mangfoldet er truet av fem hovedtrusler som vi husker med HIPCO: habitatødeleggelse, invasive arter, forurensning, klimaendringer og overutnyttelse. Arter dør ut hundre til tusen ganger raskere enn naturlig.

Til slutt har vi lært om Rødlista som klassifiserer arter fra livskraftig til utdødd, og om bevaringstiltak som verneområder, lovvern, frøbanker, gjeninnføring av arter og bærekraftig bruk. Bærekraftig utvikling handler om å møte dagens behov uten å ødelegge for fremtidige generasjoner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.6 NARRATIV: Jordens utvikling og platetektonikk
// ============================================================================

export const CHAPTER_NATURFAG_10_4_6_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-4-6-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '4.6',
  title: 'Jordens utvikling og platetektonikk',
  subtitle: 'Narrativ versjon',
  description:
    'Reis inn i jordens indre og oppdag hvordan bevegelige plater former overflaten vår med jordskjelv, vulkaner og fjellkjeder.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive jordens oppbygning (kjerne, kappe, skorpe)',
    'forklare platetektonikk og hvordan plater beveger seg',
    'beskrive ulike plategrenser og hva som skjer der',
    'forklare hvordan jordskjelv og vulkaner oppstår',
    'beskrive jordens geologiske historie og kontinentaldrift',
    'forklare Norges geologi og fjellkjededannelse',
  ],
  linkedChapterId: 'naturfag-10-4-6',
  content: [
    {
      id: 'naturfag-10-4-6-n-intro',
      type: 'text',
      content: `## En urolig planet

Forestill deg at du kunne skjære jorden i to som et eple og se hva som er inni. Du ville oppdage at planeten vår ikke er solid hele veien gjennom, men bygget opp i lag som en løk, med en kjerne av glødende metall omgitt av sakte flytende fjell. Og helt ytterst, der vi bor, flyter en tynn skorpe av fast fjell på det varme underlaget, delt opp i store plater som beveger seg noen centimeter hvert år.

Det høres kanskje ufarlig ut, men disse bittesmå bevegelsene har enorm kraft over tid. De bygger fjellkjeder som Himalaya, åpner opp hav som Atlanterhavet, utløser jordskjelv som jevner byer med jorden, og skaper vulkaner som sender lava og aske mot himmelen. For fire hundre millioner år siden kolliderte to kontinenter og skapte fjellene du ser i Norge i dag. Og akkurat nå, mens du leser dette, beveger kontinentene seg videre.

Platetektonikk er en av vitenskapens viktigste teorier fordi den forklarer så utrolig mye: hvorfor jordskjelv rammer Japan men sjelden Norge, hvorfor det finnes vulkaner på Island men ikke i Sverige, og hvorfor fossiler av tropiske dyr kan finnes på Svalbard. La oss dykke ned i jordens indre og oppdage hva som driver denne urolige planeten.`,
    },
    {
      id: 'naturfag-10-4-6-n-section1',
      type: 'text',
      content: `## Jordens lag og tektoniske plater

Jorden er bygget opp i fire hovedlag. Helt innerst finner vi den indre kjernen, en kule av solid metall, hovedsakelig jern og nikkel, med en temperatur på rundt 5000 til 6000 grader. Den er fast til tross for den ekstreme varmen fordi trykket er så enormt. Rundt denne ligger den ytre kjernen, som er flytende metall med en temperatur på 4000 til 5000 grader. Bevegelsen i dette flytende metallet skaper jordens magnetfelt, som beskytter oss mot farlig stråling fra rommet.

Over kjernen ligger kappen, et tykt lag av fast, men varmt fjell som oppfører seg plastisk over lang tid, omtrent som tyggegummi som er hard når du slår den, men som langsomt forandrer form under konstant press. Temperaturen i kappen varierer fra tusen til 3700 grader. Det er i kappen de sakte bevegelsene skjer som driver alt det dramatiske på overflaten.

Helt ytterst ligger skorpen, det tynne laget av fast fjell vi lever på. Havskorpen er bare 5 til 10 kilometer tykk og består av tung basalt. Kontinentalskorpen er 30 til 70 kilometer tykk og består av lettere granitt. Skorpen og den øverste delen av kappen kalles litosfæren, og den er delt opp i omtrent syv til åtte store plater og mange mindre. Disse platene flyter på et delvis smeltet lag under som kalles astenosfæren. Varme fra jordens kjerne skaper konveksjonsstrømmer i kappen, der varmt fjell stiger opp, avkjøles og synker ned igjen, akkurat som kokende vann i en kjele. Disse strømmene drar med seg platene over jordoverflaten, med en hastighet på 1 til 10 centimeter per år, omtrent like fort som neglene dine vokser.`,
    },
    {
      id: 'naturfag-10-4-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-4-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på jordens oppbygning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-4-6-n-quiz1-q0',
            task: 'Hvilket lag i jorden er flytende metall og skaper jordens magnetfelt?',
            options: [
              { id: 'a', text: 'Indre kjerne', isCorrect: false },
              { id: 'b', text: 'Ytre kjerne', isCorrect: true },
              { id: 'c', text: 'Kappen', isCorrect: false },
              { id: 'd', text: 'Skorpen', isCorrect: false },
            ],
            solution:
              'Den ytre kjernen består av flytende metall, hovedsakelig jern og nikkel, med en temperatur på 4000 til 5000 grader. Bevegelsen i dette flytende metallet skaper jordens magnetfelt. Den indre kjernen er også metall, men solid på grunn av det ekstremt høye trykket.',
          },
          {
            id: 'naturfag-10-4-6-n-quiz1-q1',
            task: 'Hvor raskt beveger tektoniske plater seg?',
            options: [
              { id: 'a', text: '1 til 10 centimeter per år', isCorrect: true },
              { id: 'b', text: '1 til 10 meter per år', isCorrect: false },
              { id: 'c', text: '1 til 10 kilometer per år', isCorrect: false },
              { id: 'd', text: 'De beveger seg ikke', isCorrect: false },
            ],
            solution:
              'Tektoniske plater beveger seg 1 til 10 centimeter per år, omtrent like fort som neglene dine vokser. Over millioner av år blir dette enorme avstander. Atlanterhavet har vokst fra ingenting til dagens bredde over 200 millioner år fordi platene beveger seg omtrent 2 til 3 centimeter fra hverandre hvert år.',
          },
          {
            id: 'naturfag-10-4-6-n-quiz1-q2',
            task: 'Hva driver bevegelsen av tektoniske plater?',
            options: [
              { id: 'a', text: 'Vinden på jordoverflaten', isCorrect: false },
              { id: 'b', text: 'Tidevannet fra månen', isCorrect: false },
              { id: 'c', text: 'Konveksjonsstrømmer i kappen drevet av varme fra jordens kjerne', isCorrect: true },
              { id: 'd', text: 'Jordas rotasjon rundt sin egen akse', isCorrect: false },
            ],
            solution:
              'Varme fra jordens kjerne varmer opp fjellet i kappen. Det varme fjellet stiger opp, avkjøles og synker ned igjen. Disse sirkulerende bevegelsene kalles konveksjonsstrømmer, og de drar med seg de tektoniske platene over jordoverflaten.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-4-6-n-section2',
      type: 'text',
      content: `## Tre typer plategrenser

Det meste av geologisk drama skjer der plater møtes, ved plategrensene. Det finnes tre typer, og hver skaper sine egne fenomener.

Ved divergerende plategrenser beveger platene seg fra hverandre. Når de drar fra hverandre, oppstår en sprekk der magma stiger opp fra kappen, størkner og danner ny havbunn. Over tid bygger dette opp undersjøiske fjellrygger som kalles midthavsrygger. Midt-Atlanterhavsryggen er et berømt eksempel, og Island er faktisk toppen av denne ryggen som stikker over havoverflaten. Det er derfor Island har så mange aktive vulkaner, og øya vokser med omtrent 2 centimeter per år. Atlanterhavet blir også stadig bredere fordi den eurasiske og den nordamerikanske plata glir fra hverandre.

Ved konvergerende plategrenser beveger platene seg mot hverandre. Her kan to ting skje. Hvis en tung havskorpeplata møter en lettere kontinentalskorpeplata, dyttes havskorpen under i en prosess som kalles subduksjon. Havskorpen synker ned i kappen, smelter, og magmaen stiger opp og danner vulkaner. Andesfjellene langs Sør-Amerikas vestkyst ble dannet slik, og hele «Ring of Fire» rundt Stillehavet skyldes subduksjon. Hvis to kontinentalskorpeplater kolliderer, kan ingen dyttes under fordi begge er for lette. I stedet krølles fjellet opp og danner enorme fjellkjeder. Himalaya dannes akkurat nå fordi den indiske plata presser mot den eurasiske.

Ved transforme plategrenser glir platene langs hverandre sideveis. Enorme spenninger bygger seg opp over tid, og når platene plutselig slipper, utløses kraftige jordskjelv. San Andreas-forkastningen i California er det mest kjente eksempelet.`,
    },
    {
      id: 'naturfag-10-4-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-4-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på plategrenser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-4-6-n-quiz2-q0',
            task: 'Hva kalles plategrenser der plater beveger seg fra hverandre?',
            options: [
              { id: 'a', text: 'Divergerende plategrenser', isCorrect: true },
              { id: 'b', text: 'Konvergerende plategrenser', isCorrect: false },
              { id: 'c', text: 'Transforme plategrenser', isCorrect: false },
              { id: 'd', text: 'Kollisjonsoner', isCorrect: false },
            ],
            solution:
              'Divergerende plategrenser er der plater beveger seg fra hverandre. Divergere betyr å gå fra hverandre. Her stiger magma opp og danner ny havbunn og midthavsrygger. Midt-Atlanterhavsryggen og Island er klassiske eksempler.',
          },
          {
            id: 'naturfag-10-4-6-n-quiz2-q1',
            task: 'Hvorfor finnes det mange vulkaner langs Andesfjellene, men ikke i Himalaya?',
            options: [
              { id: 'a', text: 'Fordi Himalaya er for høyt for vulkaner', isCorrect: false },
              { id: 'b', text: 'Fordi Andes har subduksjon der havskorpe smelter og danner magma, mens Himalaya har kollisjon mellom to kontinentalplater uten smelting', isCorrect: true },
              { id: 'c', text: 'Fordi det er kaldere i Himalaya', isCorrect: false },
              { id: 'd', text: 'Fordi Andes er en eldre fjellkjede', isCorrect: false },
            ],
            solution:
              'Ved Andes dykker tung havskorpe under kontinentalskorpe (subduksjon). Havskorpen smelter i kappen, magma stiger opp, og vulkaner dannes. I Himalaya kolliderer to kontinentalskorper som begge er for lette til å dykke ned. Fjellet presses opp, men ingenting smelter, så det dannes ingen vulkaner.',
          },
          {
            id: 'naturfag-10-4-6-n-quiz2-q2',
            task: 'Hvorfor har Norge svært få store jordskjelv?',
            options: [
              { id: 'a', text: 'Fordi norsk fjell er for hardt til å riste', isCorrect: false },
              { id: 'b', text: 'Fordi Norge ligger midt på den eurasiske plata, langt fra plategrenser', isCorrect: true },
              { id: 'c', text: 'Fordi Norge har mange fjorder som demper jordskjelv', isCorrect: false },
              { id: 'd', text: 'Fordi det er for kaldt i Norge for jordskjelv', isCorrect: false },
            ],
            solution:
              'De fleste jordskjelv oppstår ved plategrenser der store spenninger bygger seg opp. Norge ligger midt på den eurasiske plata, langt fra aktive plategrenser, og har derfor lite spenning i jordskorpen. Japan og California ligger derimot ved aktive plategrenser og opplever hyppige og kraftige jordskjelv.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-4-6-n-section3',
      type: 'text',
      content: `## Jordskjelv, vulkaner og tsunamier

Jordskjelv oppstår når spenning som har bygget seg opp mellom tektoniske plater plutselig frigjøres. Platene setter seg fast mot hverandre, spenningen øker over år, tiår eller århundrer, og når fjellet til slutt gir etter, beveger det seg flere meter på sekunder. Energien forplanter seg som seismiske bølger gjennom jordskorpen, og det er disse bølgene vi kjenner som jordskjelv. Vi måler styrken med Richterskalaen, der hvert trinn er ti ganger sterkere enn det forrige. Et jordskjelv på 5 er merkbart med liten skade, 7 gir store ødeleggelser, og 9 eller mer er katastrofalt. Punktet på overflaten rett over der jordskjelvet starter kalles episenteret, og selve utgangspunktet inne i jordskorpen kalles hyposenteret.

Vulkaner er åpninger i jordskorpen der magma kommer opp fra jordens indre. De oppstår ved subduksjonssoner, der havskorpe smelter og magma stiger opp. De oppstår ved divergerende grenser, der magma fyller sprekken mellom plater som drar fra hverandre. Og de oppstår ved såkalte hot spots, der varme plumer stiger opp fra dypt i kappen og borer hull i platen over, som på Hawaii. Skjoldvulkaner som på Hawaii og Island er flate og har rolige utbrudd med tynnflytende lava. Stratovulkaner som Mount Fuji og Vesuvius er bratte og har eksplosive utbrudd som kan sende pyroklastiske strømmer, blandinger av het gass og aske, nedover fjellsidene med enorm fart.

Når store jordskjelv skjer under havet, kan de løfte havbunnen og forskyve enorme vannmasser. Resultatet er tsunamier, gigantiske bølger som beveger seg med 600 til 800 kilometer i timen over åpent hav. Ute på dypet er de knapt merkbare, men når de når grunt vann ved kysten, kan de vokse til 10 til 30 meter høye og skylle inn over land med katastrofal kraft.`,
    },
    {
      id: 'naturfag-10-4-6-n-section4',
      type: 'text',
      content: `## Pangea, kontinentaldrift og Norges geologi

For 200 til 300 millioner år siden var alle kontinentene samlet i ett gigantisk superkontinent kalt Pangea, som betyr «hele jorden». Det var omgitt av ett enormt hav kalt Panthalassa. Så begynte Pangea å splitte opp. Atlanterhavet åpnet seg mellom Europa og Amerika, India drev nordover og kolliderte med Asia, og kontinentene seilte sakte mot sine nåværende posisjoner.

Bevisene for Pangea er overbevisende. Sør-Amerikas østkyst passer med Afrikas vestkyst som biter i et puslespill. Identiske fossiler av ferskvannsdyret Mesosaurus er funnet i både Sør-Amerika og Afrika, et dyr som umulig kunne ha svømt over et hav. Gamle fjellkjeder i Europa matcher med fjellkjeder i Nord-Amerika, og havbunnen er yngst ved midthavsryggene og blir eldre jo lenger unna man kommer, noe som beviser at ny havbunn dannes kontinuerlig.

Norges egen historie er like dramatisk. For omtrent 400 millioner år siden kolliderte kontinentet Baltika, som er dagens Skandinavia, med Laurentia, som er dagens Nord-Amerika og Grønland. Sammenstøtet skapte den kaledonske fjellkjeden, som opprinnelig var like høy som Himalaya. Men 400 millioner år med erosjon fra vind, vann og is har slitt den ned til fjellene vi ser i dag. Det vi vandrer på er egentlig røttene av en enorm fjellkjede. I løpet av de siste 2,6 millioner årene ble Norge gjentatte ganger dekket av is opptil 3 kilometer tykk, som gravde ut fjordene og dalene som gjør landskapet vårt så karakteristisk. Da isen smeltet for 10 000 år siden, begynte landet å heve seg, en prosess som fortsatt pågår med opptil 1 centimeter per år.`,
    },
    {
      id: 'naturfag-10-4-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-4-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på Pangea og Norges geologi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-4-6-n-quiz3-q0',
            task: 'Hva var Pangea?',
            options: [
              { id: 'a', text: 'En gammel sivilisasjon', isCorrect: false },
              { id: 'b', text: 'Et superkontinent der alle dagens kontinenter var samlet for 200 til 300 millioner år siden', isCorrect: true },
              { id: 'c', text: 'En type vulkan', isCorrect: false },
              { id: 'd', text: 'Et gammelt hav', isCorrect: false },
            ],
            solution:
              'Pangea, som betyr «hele jorden», var et superkontinent der alle dagens kontinenter var samlet i ett landområde for 200 til 300 millioner år siden. Det var omgitt av ett stort hav kalt Panthalassa. Pangea begynte å splitte opp for omtrent 200 millioner år siden, og kontinentene har drevet til sine nåværende posisjoner.',
          },
          {
            id: 'naturfag-10-4-6-n-quiz3-q1',
            task: 'Hvordan ble den kaledonske fjellkjeden i Norge dannet?',
            options: [
              { id: 'a', text: 'Av vulkanutbrudd langs norskekysten', isCorrect: false },
              { id: 'b', text: 'Av isbreer som gravde ut fjellene', isCorrect: false },
              { id: 'c', text: 'Ved kollisjon mellom kontinentene Baltika og Laurentia for 400 millioner år siden', isCorrect: true },
              { id: 'd', text: 'Av jordskjelv som presset fjellet opp', isCorrect: false },
            ],
            solution:
              'For omtrent 400 millioner år siden kolliderte Baltika (dagens Skandinavia) med Laurentia (dagens Nord-Amerika og Grønland). Ingen av platene kunne dykke ned fordi begge var kontinentalskorpe, så fjellet krøllet seg opp og dannet den kaledonske fjellkjeden. Opprinnelig var den like høy som Himalaya, men 400 millioner år med erosjon har slitt den ned.',
          },
          {
            id: 'naturfag-10-4-6-n-quiz3-q2',
            task: 'Hvorfor er havbunnen yngst ved midthavsryggene?',
            options: [
              { id: 'a', text: 'Fordi den eldste havbunnen synker ned ved ryggene', isCorrect: false },
              { id: 'b', text: 'Fordi ny havbunn dannes kontinuerlig fra magma som stiger opp ved ryggene, og dras utover med platebevegelsen', isCorrect: true },
              { id: 'c', text: 'Fordi havbunnen har samme alder overalt', isCorrect: false },
              { id: 'd', text: 'Fordi ryggene ble dannet sist', isCorrect: false },
            ],
            solution:
              'Ved midthavsrygger (divergerende plategrenser) stiger magma opp fra kappen og størkner til ny havbunn. Denne nye havbunnen dras deretter utover med platebevegelsene. Jo lenger fra ryggen du kommer, jo eldre er havbunnen. Dette er sterke bevis for at platene beveger seg og at ny havbunn dannes kontinuerlig.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-4-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi reist inn i jordens indre og oppdaget hva som driver den urolige overflaten vår. Jorden er bygget opp i lag: den indre kjernen av solid metall, den ytre kjernen av flytende metall som skaper magnetfeltet, kappen av plastisk fjell der konveksjonsstrømmene driver platebevegelsene, og den tynne skorpen vi lever på.

Vi har lært at jordens litosfære er delt i store plater som beveger seg 1 til 10 centimeter per år på den plastiske astenosfæren under. Ved divergerende grenser drar platene fra hverandre og ny havbunn dannes, som på Island. Ved konvergerende grenser kolliderer platene, enten gjennom subduksjon som skaper vulkaner og havgraver, eller gjennom kollisjon som bygger fjellkjeder som Himalaya. Ved transforme grenser glir platene langs hverandre og utløser kraftige jordskjelv.

Vi har forstått jordskjelv som plutselig frigjøring av oppbygd spenning, vulkaner som åpninger der magma når overflaten, og tsunamier som gigantiske bølger utløst av jordskjelv under havet.

Vi har sett bevisene for Pangea, superkontinentet der alle landmasser var samlet for 200 til 300 millioner år siden, og vi har lært om Norges geologi: den kaledonske fjellkjeden dannet ved kollisjon for 400 millioner år siden, istidene som gravde ut fjorder og daler, og den pågående landhevingen etter at isen smeltet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle narrative kapitler i DEL 4B
// ============================================================================

export const NATURFAG_10_NARRATIV_DEL4B_CHAPTERS = [
  CHAPTER_NATURFAG_10_4_4_NARRATIV,
  CHAPTER_NATURFAG_10_4_5_NARRATIV,
  CHAPTER_NATURFAG_10_4_6_NARRATIV,
];
