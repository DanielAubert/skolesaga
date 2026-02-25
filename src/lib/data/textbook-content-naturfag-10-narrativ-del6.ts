/**
 * Naturfag 10 - Narrativ versjon DEL 6
 * Seksjon 6: Teknologi og forskning (6.1-6.5)
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1 NARRATIV: Teknologiske systemer
// ============================================================================

export const CHAPTER_NATURFAG_10_6_1_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-6-1-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '6.1',
  title: 'Teknologiske systemer',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag hvordan alt fra mobiltelefonen din til smarthjem-systemer fungerer som teknologiske systemer med input, prosess og output, og forstå utfordringene med personvern i en verden av tingenes internett.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare hva et teknologisk system er og beskrive input, prosess og output',
    'forklare sender-mottaker-systemer og kommunikasjon mellom enheter',
    'forklare hva Internet of Things (IoT) er og gi eksempler',
    'beskrive utfordringer knyttet til sikkerhet og personvern i teknologiske systemer',
  ],
  linkedChapterId: 'naturfag-10-6-1',
  content: [
    {
      id: 'naturfag-10-6-1-n-intro',
      type: 'text',
      content: `## Usynlige systemer overalt

Du tar opp telefonen, trykker på Spotify, og musikken strømmer ut av øretelefonen. Du sender en snap, og tre sekunder senere leser vennen din den i et annet hus. Du åpner Google Maps, og en blå prikk viser nøyaktig hvor du står. Alt dette føles magisk, men bak kulissene jobber teknologiske systemer i lynfart.

Vi er omgitt av slike systemer hele tiden, ofte uten å tenke over det. Mobiltelefoner, WiFi-rutere, GPS-satellitter, fjernkontroller, smartklokker, trafikklys og brannalarmer er alle eksempler på teknologiske systemer. I dette kapittelet skal vi pakke opp hva et teknologisk system egentlig er, hvordan enheter snakker sammen, hva Internet of Things betyr, og hvorfor sikkerhet og personvern er viktigere enn noensinne.`,
    },
    {
      id: 'naturfag-10-6-1-n-section1',
      type: 'text',
      content: `## Input, prosess, output: Byggesteinene i alle systemer

Et teknologisk system er en samling av deler, altså komponenter, som jobber sammen for å utføre en bestemt oppgave. Og uansett hvor komplisert systemet virker, kan det alltid brytes ned i tre hoveddeler.

Først har vi input, som betyr inndata. Det er informasjonen, energien eller signalet som kommer inn i systemet. Når du trykker på en knapp på fjernkontrollen, er det input. Når en bevegelsessensor registrerer at du nærmer deg en dør, er det også input.

Deretter kommer prosess, altså behandling. Systemet tar imot inputen og gjør noe med den. Fjernkontrollen omdanner knapptrykket til et infrarødt signal. En mikrobølgeovn gjør om tidinnstillingen din til mikrobølgestråling som varmer maten.

Til slutt får vi output, som betyr utdata. Det er resultatet av prosessen. TV-en bytter kanal. Maten blir varm. Døren glir opp.

Men mange systemer har også noe ekstra som kalles tilbakekobling, eller feedback. Det betyr at output sendes tilbake som ny input, slik at systemet kan justere seg selv. Tenk på en termostat. Den måler temperaturen i rommet. Hvis den er under 21 grader, slår den på varmen. Når temperaturen når 21 grader, slår den av igjen. Output blir altså ny input. Denne mekanismen kalles negativ tilbakekobling, og den skaper stabilitet. Positiv tilbakekobling er det motsatte: den forsterker endringen, som når en mikrofon plassert for nær en høyttaler lager en hvinende lyd som bare blir sterkere.

Systemtenkning handler om å se helheten. En mobiltelefon er ikke bare en skjerm pluss et batteri pluss et kamera. Alle delene må kommunisere og samarbeide for at telefonen skal fungere.`,
    },
    {
      id: 'naturfag-10-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på teknologiske systemer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-1-n-quiz1-q0',
            task: 'Hva er de tre hoveddelene i et teknologisk system?',
            options: [
              { id: 'a', text: 'Sensor, motor, batteri', isCorrect: false },
              { id: 'b', text: 'Input, prosess, output', isCorrect: true },
              { id: 'c', text: 'Hardware, software, nettverk', isCorrect: false },
              { id: 'd', text: 'Sender, signal, mottaker', isCorrect: false },
            ],
            solution:
              'Alle teknologiske systemer består av input (inndata), prosess (behandling) og output (utdata). Sender-signal-mottaker beskriver kommunikasjon mellom systemer, men er ikke de tre grunnleggende delene av et system.',
          },
          {
            id: 'naturfag-10-6-1-n-quiz1-q1',
            task: 'En termostat holder temperaturen stabil på 21°C. Hvilken type tilbakekobling bruker den?',
            options: [
              { id: 'a', text: 'Positiv tilbakekobling', isCorrect: false },
              { id: 'b', text: 'Ingen tilbakekobling', isCorrect: false },
              { id: 'c', text: 'Negativ tilbakekobling', isCorrect: true },
              { id: 'd', text: 'Digital tilbakekobling', isCorrect: false },
            ],
            solution:
              'Termostaten bruker negativ tilbakekobling fordi den motvirker avvik fra ønsket temperatur. Når temperaturen er for lav, slås varmen på. Når den er for høy, slås varmen av. Systemet regulerer seg selv mot et stabilt punkt.',
          },
          {
            id: 'naturfag-10-6-1-n-quiz1-q2',
            task: 'Hva er forskjellen mellom positiv og negativ tilbakekobling?',
            options: [
              { id: 'a', text: 'Positiv tilbakekobling er bra, negativ er dårlig', isCorrect: false },
              { id: 'b', text: 'Positiv tilbakekobling forsterker endringen, negativ motvirker den', isCorrect: true },
              { id: 'c', text: 'De betyr det samme', isCorrect: false },
              { id: 'd', text: 'Positiv brukes i teknologi, negativ i biologi', isCorrect: false },
            ],
            solution:
              'Positiv tilbakekobling forsterker en endring, som når en mikrofon nær en høyttaler gir stadig sterkere hvinelyd. Negativ tilbakekobling motvirker endringer og skaper stabilitet, som en termostat. Begge finnes både i teknologi og biologi.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-1-n-section2',
      type: 'text',
      content: `## Sender, mottaker og det usynlige signalet

Mange teknologiske systemer kommuniserer med hverandre. Da trenger vi et sender-mottaker-system. Senderen er enheten som sender informasjon, for eksempel en fjernkontroll eller mobiltelefon. Mottakeren er enheten som tar imot, for eksempel en TV eller høyttaler. Mellom dem reiser et signal, som kan være radiosignal, lyssignal eller lydsignal.

Ta Bluetooth-høyttaleren din som eksempel. Mobiltelefonen er senderen. Den koder musikken til et radiosignal og sender det gjennom luften. Høyttaleren er mottakeren. Den dekoder signalet tilbake til musikk og spiller den. For at dette skal fungere, må sender og mottaker snakke samme språk, altså bruke samme koding og dekoding.

GPS-systemet er et annet fascinerende eksempel. Satellitter i verdensrommet sender kontinuerlig radiosignaler ned til jorden. GPS-mottakeren i telefonen din plukker opp signaler fra minst fire satellitter samtidig. Ved å beregne tidsforskjellen mellom signalene kan den finne din nøyaktige posisjon. Mobiltelefonen din er forresten både sender og mottaker. Når du ringer noen, sender den radiosignaler til en basestasjon, og den mottar signaler tilbake. Det er toveiskommunikasjon.`,
    },
    {
      id: 'naturfag-10-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kommunikasjon mellom enheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-1-n-quiz2-q0',
            task: 'Hvilken teknologi bruker GPS for å finne din posisjon?',
            options: [
              { id: 'a', text: 'WiFi-signaler fra ruteren din', isCorrect: false },
              { id: 'b', text: 'Signal fra satellitter i verdensrommet', isCorrect: true },
              { id: 'c', text: 'Bluetooth-signaler fra andre enheter', isCorrect: false },
              { id: 'd', text: 'Mobilnettverk fra basestasjoner', isCorrect: false },
            ],
            solution:
              'GPS bruker signaler fra satellitter som kretser rundt jorden. GPS-mottakeren din trenger signal fra minst fire satellitter for å beregne din nøyaktige posisjon. Mobilnettverk kan gi grov posisjon, men det er ikke GPS.',
          },
          {
            id: 'naturfag-10-6-1-n-quiz2-q1',
            task: 'Hva må til for at en mottaker skal forstå signalet fra en sender?',
            options: [
              { id: 'a', text: 'De må bruke samme koding og dekoding', isCorrect: true },
              { id: 'b', text: 'De må være fysisk koblet med kabel', isCorrect: false },
              { id: 'c', text: 'De må ha samme størrelse', isCorrect: false },
              { id: 'd', text: 'De må være laget av samme produsent', isCorrect: false },
            ],
            solution:
              'For at kommunikasjonen skal fungere, må senderen kode informasjonen til et signal, og mottakeren må kunne dekode signalet tilbake til informasjon. De må altså bruke samme kommunikasjonsprotokoll, litt som å snakke samme språk.',
          },
          {
            id: 'naturfag-10-6-1-n-quiz2-q2',
            task: 'Mobiltelefonen din er et eksempel på en enhet som er:',
            options: [
              { id: 'a', text: 'Bare sender', isCorrect: false },
              { id: 'b', text: 'Bare mottaker', isCorrect: false },
              { id: 'c', text: 'Både sender og mottaker', isCorrect: true },
              { id: 'd', text: 'Verken sender eller mottaker', isCorrect: false },
            ],
            solution:
              'Mobiltelefonen er både sender og mottaker. Når du ringer eller sender en melding, fungerer den som sender. Når du mottar en samtale eller melding, er den mottaker. Den kommuniserer med basestasjoner via radiosignaler i begge retninger.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-1-n-section3',
      type: 'text',
      content: `## Internet of Things: Når tingene snakker sammen

Nå som du forstår teknologiske systemer og sender-mottaker-kommunikasjon, skal vi ta det et steg videre. Hva skjer når vi kobler hverdagslige gjenstander til internett og lar dem kommunisere med hverandre helt uten menneskelig hjelp? Det er ideen bak Internet of Things, forkortet IoT, som betyr «tingenes internett».

I et smart hjem kan en termostat justere temperaturen automatisk basert på værmelding fra internett og om du er hjemme eller ikke. Lys kan skru seg på når du kommer inn døren. Kjøleskapet kan i teorien bestille melk når det er tomt. Alt dette er IoT i praksis.

Men det stopper ikke hjemme. Smartklokker måler pulsen din, teller skritt og sender data til telefonen din. Smartbyer bruker sensorer i søppelbøtter som varsler renovasjonsselskapet når de er fulle, gatbelysning som tilpasser seg trafikken, og parkeringsplasser som viser ledige plasser i en app. I industrien brukes sensorer på maskiner som varsler om vedlikeholdsbehov før noe går i stykker.

Hvordan fungerer IoT egentlig? Steg for steg ser det slik ut: Sensorer samler inn data, for eksempel temperatur eller bevegelse. Internett-tilkobling sender data til en server. Databehandling på serveren analyserer informasjonen. Basert på analysen utføres en handling, som å justere temperaturen. Til slutt viser et brukergrensesnitt, vanligvis en app på telefonen din, hva som skjer. Fordelene er mange: bekvemmelighet, energisparing, bedre sikkerhet, helseovervåking og automatisering av rutineoppgaver.`,
    },
    {
      id: 'naturfag-10-6-1-n-section4',
      type: 'text',
      content: `## Sikkerhet og personvern: Baksiden av medaljen

Med alle disse enhetene som samler data om oss, oppstår nye og alvorlige utfordringer. Personvern handler om retten din til å bestemme hvem som skal ha tilgang til informasjon om deg. Smartklokker samler helsedata. Smarte høyttalere lytter hele tiden etter stikkord som «Hei Google» eller «Alexa». Apper på telefonen vet hvor du er. Hvem har egentlig tilgang til alle disse dataene? Selskapene som lager enhetene, tredjeparter som kjøper dataene, og potensielt hackere som bryter seg inn.

Hacking er å bryte seg inn i et datasystem uten tillatelse. IoT-enheter er spesielt sårbare fordi mange har svake standardpassord som «admin» eller «1234» som brukerne aldri endrer, manglende oppdateringer med kjente sikkerhetshull, og usikret kommunikasjon der data sendes uten kryptering.

Men du kan beskytte deg. Bruk sterke og unike passord for hver enhet, minst 12 tegn med bokstaver, tall og spesialtegn. Hold programvaren oppdatert og skru på automatiske oppdateringer. Bruk kryptering som HTTPS og WPA3 på WiFi-nettverket. Ikke bruk offentlig WiFi for sensitive handlinger. Begrens datadelingen ved å lese personvernregler og skru av unødvendige funksjoner. Endre standard ruterpassord og vurder å bruke et eget nettverk for IoT-enheter.

Her dukker det også opp viktige etiske spørsmål. Hvem eier dataene smartklokken din samler inn? Skal et selskap kunne selge dem? Kameraer i byen øker sikkerheten, men hvor går grensen mellom sikkerhet og overvåkning? Og hvis en selvkjørende bil krasjer, hvem er ansvarlig? Dette er spørsmål samfunnet må ta stilling til etter hvert som teknologien utvikler seg.`,
    },
    {
      id: 'naturfag-10-6-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på IoT og sikkerhet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-1-n-quiz3-q0',
            task: 'Hva betyr IoT (Internet of Things)?',
            options: [
              { id: 'a', text: 'At alle datamaskiner er koblet til internett', isCorrect: false },
              { id: 'b', text: 'At fysiske gjenstander er koblet til internett og kan kommunisere med hverandre', isCorrect: true },
              { id: 'c', text: 'En spesiell type trådløst internett', isCorrect: false },
              { id: 'd', text: 'Et sosialt nettverk for elektroniske enheter', isCorrect: false },
            ],
            solution:
              'IoT, tingenes internett, betyr at hverdagslige fysiske gjenstander som termostater, klokker, kjøleskap og lamper er koblet til internett, kan samle data, og kan kommunisere med hverandre uten menneskelig inngripen.',
          },
          {
            id: 'naturfag-10-6-1-n-quiz3-q1',
            task: 'Hvilken av disse er en vanlig sikkerhetsrisiko ved IoT-enheter?',
            options: [
              { id: 'a', text: 'De bruker for mye strøm', isCorrect: false },
              { id: 'b', text: 'De er for store', isCorrect: false },
              { id: 'c', text: 'Svake standardpassord som brukerne aldri endrer', isCorrect: true },
              { id: 'd', text: 'De virker bare innendørs', isCorrect: false },
            ],
            solution:
              'Mange IoT-enheter leveres med svake standardpassord som «admin» eller «1234», og brukerne endrer dem sjelden. Dette gjør enhetene sårbare for hacking. Andre vanlige risikoer er manglende oppdateringer og usikret kommunikasjon uten kryptering.',
          },
          {
            id: 'naturfag-10-6-1-n-quiz3-q2',
            task: 'Hva er det viktigste du kan gjøre for å beskytte IoT-enhetene dine?',
            options: [
              { id: 'a', text: 'Koble dem fra internett permanent', isCorrect: false },
              { id: 'b', text: 'Bruke sterke, unike passord og holde programvaren oppdatert', isCorrect: true },
              { id: 'c', text: 'Bare bruke dem om natten', isCorrect: false },
              { id: 'd', text: 'Dekke til kameraet med tape', isCorrect: false },
            ],
            solution:
              'De to viktigste tiltakene er å bruke sterke, unike passord for hver enhet og å holde programvaren oppdatert. I tillegg bør du bruke kryptering på WiFi-nettverket, begrense datadeling og vurdere et eget nettverk for IoT-enheter.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket teknologiske systemer fra bunnen av. Vi har sett at alle teknologiske systemer kan brytes ned i tre hoveddeler: input (inndata), prosess (behandling) og output (utdata). Mange systemer bruker også tilbakekobling, der output sendes tilbake som ny input for selvregulering. Negativ tilbakekobling skaper stabilitet, mens positiv tilbakekobling forsterker endringer.

Vi har lært om sender-mottaker-systemer, der enheter kommuniserer ved at senderen koder informasjon til et signal og mottakeren dekoder det. Eksempler inkluderer mobiltelefoner, Bluetooth-høyttalere og GPS, der satellittsignaler beregner din posisjon.

Vi har oppdaget Internet of Things, der fysiske gjenstander kobles til internett og kommuniserer med hverandre. IoT gjør hverdagen enklere med smarte hjem, smartklokker og smartbyer, men bringer også utfordringer med sikkerhet og personvern. IoT-enheter samler store mengder data om oss, og uten gode tiltak som sterke passord, oppdateringer og kryptering er de sårbare for hacking og misbruk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2 NARRATIV: Sensorer og målinger
// ============================================================================

export const CHAPTER_NATURFAG_10_6_2_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-6-2-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '6.2',
  title: 'Sensorer og målinger',
  subtitle: 'Narrativ versjon',
  description:
    'Utforsk hvordan sensorer fungerer som teknologiens sanseorganer, fra temperatursensorer og lyssensorer til pH-målere, og lær hvordan dataloggere revolusjonerer naturfagsforsøk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare hva en sensor er og hvordan den fungerer',
    'kjenne til ulike typer sensorer og deres bruksområder',
    'forklare forskjellen mellom analoge og digitale målinger',
    'bruke datalogger til å samle og analysere data i naturfagsforsøk',
  ],
  linkedChapterId: 'naturfag-10-6-2',
  content: [
    {
      id: 'naturfag-10-6-2-n-intro',
      type: 'text',
      content: `## Teknologiens sanseorganer

Hvordan vet smarttelefonen din hvilken vei er opp? Hvordan kan en bil bremse automatisk hvis den oppdager en hindring? Hvordan måler vi temperaturen i et rom, luftfuktigheten i et drivhus, eller surheten i et akvarium over tid?

Svaret er sensorer. Sensorer er teknologiens sanseorganer. Akkurat som øynene dine registrerer lys og ørene dine registrerer lyd, registrerer sensorer fysiske og kjemiske egenskaper i omgivelsene og gjør dem om til elektriske signaler som datamaskiner kan forstå. I dette kapittelet skal vi utforske hva sensorer er, hvilke typer som finnes, forskjellen mellom analog og digital måling, og hvordan dataloggere gjør naturfagsforsøk mye enklere og mer nøyaktige.`,
    },
    {
      id: 'naturfag-10-6-2-n-section1',
      type: 'text',
      content: `## Fra kvikksølv til mikrobrikker: Hva er en sensor?

En sensor er et instrument som gjør tre ting. Først registrerer den en fysisk eller kjemisk egenskap, for eksempel temperatur, lys eller trykk. Deretter måler den størrelsen på denne egenskapen. Til slutt omformer den informasjonen til et elektrisk signal som kan leses av et elektronisk system.

Før sensorer fantes, brukte vi analoge måleinstrumenter. Et gammelt kvikksølvtermometer er et godt eksempel: kvikksølvet utvider seg når temperaturen stiger, og du leser av verdien på en skala med øynene. Resultatet er kontinuerlig, kvikksølvet kan stoppe mellom to streker, og nøyaktigheten avhenger av hvor godt du klarer å lese av. Men det kan ikke kobles til en datamaskin.

Moderne digitale sensorer fungerer annerledes. En elektronisk komponent, for eksempel en termistor, endrer sin elektriske motstand når temperaturen endrer seg. Motstanden omregnes til et eksakt tall av en mikroprosessor, og resultatet vises som et nøyaktig tall, for eksempel 22,3 grader Celsius. Alle får samme avlesning, og sensoren kan kobles til dataloggere og datamaskiner for automatisk lagring og analyse av tusenvis av målinger.

Kalibrering er en viktig del av sensorbruk. Det betyr å justere sensoren slik at den gir nøyaktige målinger ved å sammenligne dens avlesning med en kjent standardverdi. For eksempel kalibreres en pH-sensor ved å senke den i løsninger med kjent pH, som pH 4 og pH 7, og justere sensoren til den viser riktig. Uten kalibrering kan sensoren gi feil verdier.`,
    },
    {
      id: 'naturfag-10-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på sensorer og målinger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-2-n-quiz1-q0',
            task: 'Hva gjør en sensor?',
            options: [
              { id: 'a', text: 'Den lagrer data på en harddisk', isCorrect: false },
              { id: 'b', text: 'Den registrerer, måler og omformer en fysisk eller kjemisk egenskap til et elektrisk signal', isCorrect: true },
              { id: 'c', text: 'Den sender informasjon til internett', isCorrect: false },
              { id: 'd', text: 'Den viser tall på en skjerm', isCorrect: false },
            ],
            solution:
              'En sensor registrerer en fysisk eller kjemisk egenskap, måler størrelsen på den, og omformer informasjonen til et elektrisk signal. Lagring, visning og sending er oppgaver for andre deler av systemet.',
          },
          {
            id: 'naturfag-10-6-2-n-quiz1-q1',
            task: 'Hva er hovedforskjellen mellom analog og digital måling?',
            options: [
              { id: 'a', text: 'Analog er nyere enn digital', isCorrect: false },
              { id: 'b', text: 'Analog gir et kontinuerlig signal, digital gir et tallverdi-signal', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'd', text: 'Digital fungerer bare innendørs', isCorrect: false },
            ],
            solution:
              'Analog betyr at signalet varierer kontinuerlig og kan ha uendelig mange verdier, som kvikksølvet i et termometer. Digital betyr at signalet er omgjort til bestemte tallverdier som kan lagres og analyseres av datamaskiner.',
          },
          {
            id: 'naturfag-10-6-2-n-quiz1-q2',
            task: 'Hva er kalibrering?',
            options: [
              { id: 'a', text: 'Å slå av sensoren etter bruk', isCorrect: false },
              { id: 'b', text: 'Å koble sensoren til en datamaskin', isCorrect: false },
              { id: 'c', text: 'Å justere sensoren mot en kjent standard slik at målingene blir nøyaktige', isCorrect: true },
              { id: 'd', text: 'Å bytte batteri i sensoren', isCorrect: false },
            ],
            solution:
              'Kalibrering er å justere en sensor ved å sammenligne avlesningen med en kjent standardverdi. For eksempel kalibreres en pH-sensor med bufferløsninger med kjent pH. Kalibrering bør gjøres før hvert forsøk for pålitelige resultater.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-2-n-section2',
      type: 'text',
      content: `## Sensorenes mangfold: Fra temperatur til pH

Det finnes en sensor for nesten alt du kan tenke deg. La oss ta en rask rundtur gjennom de viktigste typene.

Temperatursensoren er kanskje den mest kjente. Den bruker materialer som endrer egenskaper ved temperaturendring, som en termistor der motstanden endres. Du finner den i termometre, termostater, kjøleskap, værstasjoner og naturfagsforsøk der du vil måle temperaturendring i kjemiske reaksjoner.

Lyssensoren, eller fotocellen, måler lysstyrke i enheten lux. Når lys treffer sensoren, endres den elektriske motstanden. Den brukes i gatelamper som slår seg på automatisk når det blir mørkt, i smarttelefoner som justerer skjermens lysstyrke, og i naturfagsforsøk der du måler lysstyrke under fotosyntese.

Trykksensoren måler kraft per areal ved hjelp av trykkfølsomme materialer. Den sitter i værstasjoner for å måle lufttrykk, i biler for å overvåke dekktrykk, og i høydemålere der høyden beregnes fra lufttrykket.

Bevegelsessensoren, eller akselerometeret, måler endring i hastighet eller retning. Det er den som roterer skjermen på telefonen din når du snur den, den som teller skrittene dine i en smartklokke, og den som utløser kollisjonsputer i biler.

pH-sensoren måler surhetsgraden i en løsning ved å registrere konsentrasjonen av hydrogenioner. Den brukes i naturfagsforsøk, akvarier, vannkvalitetstesting og jordbruk.

Fuktighetssensoren måler mengden vanndamp i luften ved å registrere endring i elektrisk motstand eller kapasitans ved fuktighet. Du finner den i værstasjoner, drivhus der den regulerer vanning, og badeventilatorer som slår seg på ved høy fuktighet.`,
    },
    {
      id: 'naturfag-10-6-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på sensortyper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-2-n-quiz2-q0',
            task: 'Hvilken sensor brukes for å automatisk slå på gatelys når det blir mørkt?',
            options: [
              { id: 'a', text: 'Temperatursensor', isCorrect: false },
              { id: 'b', text: 'Lyssensor', isCorrect: true },
              { id: 'c', text: 'Trykksensor', isCorrect: false },
              { id: 'd', text: 'pH-sensor', isCorrect: false },
            ],
            solution:
              'En lyssensor (fotocelle) måler lysstyrken i omgivelsene. Når lysstyrken faller under en viss grense, sendes signal om å slå på gatelyset. Når det blir lyst igjen, slås lyset av. Slik spares energi og lyset tilpasser seg årstidene automatisk.',
          },
          {
            id: 'naturfag-10-6-2-n-quiz2-q1',
            task: 'Hva måler et akselerometer?',
            options: [
              { id: 'a', text: 'Temperatur', isCorrect: false },
              { id: 'b', text: 'Lysstyrke', isCorrect: false },
              { id: 'c', text: 'Endring i hastighet eller retning', isCorrect: true },
              { id: 'd', text: 'Luftfuktighet', isCorrect: false },
            ],
            solution:
              'Et akselerometer måler akselerasjon, altså endring i hastighet eller retning. Det er denne sensoren som gjør at telefonen din kan rotere skjermen, telle skritt i en smartklokke, og utløse kollisjonsputer i biler.',
          },
          {
            id: 'naturfag-10-6-2-n-quiz2-q2',
            task: 'Hvorfor er det viktig å ha riktig pH i et akvarium?',
            options: [
              { id: 'a', text: 'pH påvirker vannets farge', isCorrect: false },
              { id: 'b', text: 'Feil pH kan skade fiskenes gjeller og helse', isCorrect: true },
              { id: 'c', text: 'pH har ingen betydning for fisk', isCorrect: false },
              { id: 'd', text: 'pH bestemmer vanntemperaturen', isCorrect: false },
            ],
            solution:
              'De fleste akvariumfisk trenger pH mellom 6,5 og 7,5. For lav pH kan skade gjellene og gi pusteproblemer. For høy pH gjør ammoniakk mer giftig for fiskene. pH-sensorer brukes til å overvåke vannet regelmessig.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-2-n-section3',
      type: 'text',
      content: `## Dataloggeren: Din usynlige forskningsassistent

Forestill deg at du skal måle temperaturen i et klasserom gjennom en hel skoledag. Du kunne sitte ved siden av termometeret og notere verdien hvert tiende minutt, hele dagen. Eller du kunne bruke en datalogger og la den gjøre jobben for deg.

En datalogger er et elektronisk system som automatisk samler inn data fra en eller flere sensorer over tid. Dataene lagres med nøyaktig tidsstempel og kan senere analyseres som grafer eller tabeller. Komponenten består av selve sensoren eller sensorene, en datalogger-enhet som mottar signaler og lagrer data, og programvare som viser dataene som graf eller tabell og kan eksportere dem til Excel for videre analyse.

Fordelene med en datalogger er mange. Du får kontinuerlig måling uten å måtte sitte og passe på. Alle målinger har nøyaktig tidsstempel. Du kan samle tusenvis av målinger automatisk. Og dataene vises som grafer der du enkelt kan se mønstre og trender.

I naturfagsforsøk er dataloggere uvurderlige. Du kan måle temperaturendring ved fordamping og se nøyaktig hvordan temperaturen synker over tid. Du kan følge pH-endringen i en kjemisk reaksjon sekund for sekund. Du kan logge lysstyrke gjennom et helt døgn og se soloppgang, middag og solnedgang som tydelige kurver. Eller du kan måle CO₂-nivået i et klasserom gjennom en skoledag og se at det øker når mange elever er til stede og synker etter lufting.`,
    },
    {
      id: 'naturfag-10-6-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på dataloggere:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-2-n-quiz3-q0',
            task: 'Hva er hovedfordelen med å bruke en datalogger i stedet for å måle manuelt?',
            options: [
              { id: 'a', text: 'Dataloggeren er billigere enn et termometer', isCorrect: false },
              { id: 'b', text: 'Den samler data automatisk og kontinuerlig over tid med nøyaktige tidsstempler', isCorrect: true },
              { id: 'c', text: 'Den gir alltid helt nøyaktige resultater', isCorrect: false },
              { id: 'd', text: 'Den trenger ikke kalibrering', isCorrect: false },
            ],
            solution:
              'Dataloggeren samler data automatisk og kontinuerlig uten at du trenger å sitte og passe på. Alle målinger lagres med nøyaktig tidsstempel, og du kan samle tusenvis av datapunkter som vises som grafer for enkel analyse.',
          },
          {
            id: 'naturfag-10-6-2-n-quiz3-q1',
            task: 'I et forsøk bruker du en datalogger med temperatursensor for å måle avkjøling av varmt vann. Hva forventer du å se i grafen?',
            options: [
              { id: 'a', text: 'En rett linje som synker jevnt', isCorrect: false },
              { id: 'b', text: 'En kurve som synker raskt først, deretter saktere mot romtemperatur', isCorrect: true },
              { id: 'c', text: 'En kurve som stiger hele tiden', isCorrect: false },
              { id: 'd', text: 'En graf som hopper tilfeldig opp og ned', isCorrect: false },
            ],
            solution:
              'Varmt vann avkjøles raskest i starten når temperaturforskjellen mellom vannet og omgivelsene er stor. Etter hvert som vannet nærmer seg romtemperatur, avtar avkjølingen. Grafen viser derfor en kurve som synker bratt først og deretter flater ut.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket sensorer som teknologiens sanseorganer. En sensor registrerer, måler og omformer fysiske eller kjemiske egenskaper til elektriske signaler. Vi har sett forskjellen mellom analog måling, der signalet er kontinuerlig, og digital måling, der signalet er omgjort til tallverdier som datamaskiner kan behandle.

Vi har blitt kjent med mange sensortyper: temperatursensorer, lyssensorer, trykksensorer, bevegelsessensorer, pH-sensorer og fuktighetssensorer, alle med sine spesielle bruksområder i hverdagen og i forsøk. Vi har lært at kalibrering, det å justere sensoren mot kjente standardverdier, er avgjørende for nøyaktige målinger.

Til slutt har vi oppdaget dataloggeren som en uvurderlig forskningsassistent som automatisk samler data over tid med nøyaktige tidsstempler og presenterer resultatene som grafer der mønstre og trender blir tydelige.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3 NARRATIV: Programmering i naturfag
// ============================================================================

export const CHAPTER_NATURFAG_10_6_3_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-6-3-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '6.3',
  title: 'Programmering i naturfag',
  subtitle: 'Narrativ versjon',
  description:
    'Lær hvordan programmering med Python gjør naturfag kraftigere, fra å automatisere beregninger og analysere store datasett til å visualisere resultater og simulere naturprosesser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke digitale verktøy til datainnsamling, databehandling og presentasjon',
    'utforske og teste teknologiske systemer',
    'forstå grunnleggende programmeringskonsepter som variabler, løkker og funksjoner',
  ],
  linkedChapterId: 'naturfag-10-6-3',
  content: [
    {
      id: 'naturfag-10-6-3-n-intro',
      type: 'text',
      content: `## Når koden møter naturen

Tenk deg at du har målt temperaturen i klasserommet ditt hver time i en uke. Det er 168 målinger. Skal du sitte og regne ut gjennomsnittet for hånd? Eller lage en graf med alle datapunktene manuelt? Det ville tatt timer.

Med programmering tar det sekunder. Du skriver noen få linjer med kode, og datamaskinen gjør resten. Den finner gjennomsnittet, den laveste og høyeste verdien, lager en vakker graf, og kan til og med fortelle deg på hvilken tid det var varmest i rommet. Programmering er ikke bare for spillutviklere og hackere. Det er et kraftig verktøy for alle som jobber med data, og i naturfag jobber vi med data hele tiden.

I dette kapittelet lærer du de grunnleggende byggeklossene i programmering, hvordan Python brukes til å analysere og visualisere naturfagsdata, og hvordan du kan lage enkle simuleringer av naturprosesser.`,
    },
    {
      id: 'naturfag-10-6-3-n-section1',
      type: 'text',
      content: `## Algoritmer og de fire grunnsteinene

Før vi begynner å kode, må vi forstå hva en algoritme er. En algoritme er ganske enkelt en steg-for-steg-oppskrift som beskriver nøyaktig hvordan en oppgave skal løses. En bakeoppskrift er en algoritme. Du har ingredienser (input), følger steg i rekkefølge (prosess), og ender opp med en kake (output). I programmering skriver vi algoritmene som kode datamaskinen kan utføre.

Den første grunnsteinen er variabler. En variabel er som en merket boks der du lagrer informasjon. Du kan lagre tall, tekst eller sann-usann-verdier. For eksempel kan du skrive temperatur er lik 20, og da har du lagret tallet 20 i variabelen som heter temperatur. Verdien kan endres underveis i programmet.

Den andre grunnsteinen er løkker. En løkke gjentar en handling flere ganger. En for-løkke brukes når du vet hvor mange ganger koden skal gjentas, for eksempel «for hver temperatur i listen, skriv ut verdien». En while-løkke gjentar koden så lenge en betingelse er sann, for eksempel «så lenge tallet er større enn null, trekk fra 1». Løkker er essensielle når du har store datasett.

Den tredje grunnsteinen er betingelser, altså if-else-strukturer. De lar programmet ta beslutninger. Hvis temperaturen er over 30 grader, skriv «Veldig varmt!». Ellers, hvis den er over 20, skriv «Behagelig». Ellers, skriv «Kaldt».

Den fjerde grunnsteinen er funksjoner. En funksjon er en gjenbrukbar blokk med kode som utfører en bestemt oppgave. Du definerer den én gang og kan bruke den mange ganger. For eksempel kan en funksjon som heter celsius-til-fahrenheit ta inn en temperatur i Celsius og returnere verdien i Fahrenheit. Du skriver koden bare én gang, men kan bruke den tusenvis av ganger.`,
    },
    {
      id: 'naturfag-10-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grunnleggende programmering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-3-n-quiz1-q0',
            task: 'Hva er en algoritme?',
            options: [
              { id: 'a', text: 'Et programmeringsspråk', isCorrect: false },
              { id: 'b', text: 'En steg-for-steg-oppskrift for å løse en oppgave', isCorrect: true },
              { id: 'c', text: 'En type datamaskin', isCorrect: false },
              { id: 'd', text: 'Et matematisk symbol', isCorrect: false },
            ],
            solution:
              'En algoritme er en steg-for-steg-oppskrift som beskriver nøyaktig hvordan en oppgave skal løses. Algoritmer er grunnlaget for all programmering. Et hverdagseksempel er en bakeoppskrift.',
          },
          {
            id: 'naturfag-10-6-3-n-quiz1-q1',
            task: 'Hva brukes en for-løkke til?',
            options: [
              { id: 'a', text: 'Å lagre en verdi', isCorrect: false },
              { id: 'b', text: 'Å gjenta kode et bestemt antall ganger', isCorrect: true },
              { id: 'c', text: 'Å slette variabler', isCorrect: false },
              { id: 'd', text: 'Å skrive ut tekst én gang', isCorrect: false },
            ],
            solution:
              'En for-løkke brukes når du vet hvor mange ganger koden skal gjentas. For eksempel kan du gå gjennom alle temperaturmålingene i en liste og gjøre noe med hver eneste verdi automatisk.',
          },
          {
            id: 'naturfag-10-6-3-n-quiz1-q2',
            task: 'Hva er fordelen med å bruke funksjoner i et program?',
            options: [
              { id: 'a', text: 'Programmet kjører raskere', isCorrect: false },
              { id: 'b', text: 'Du kan gjenbruke kode uten å skrive den på nytt', isCorrect: true },
              { id: 'c', text: 'Funksjoner er obligatoriske i Python', isCorrect: false },
              { id: 'd', text: 'De gjør programmet kortere, men vanskeligere å forstå', isCorrect: false },
            ],
            solution:
              'Funksjoner lar deg definere en blokk med kode én gang og deretter kalle den så mange ganger du vil. Du slipper å skrive samme kode om igjen, og programmet blir lettere å lese og vedlikeholde.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-3-n-section2',
      type: 'text',
      content: `## Python i naturfag: Fra data til innsikt

Python er et populært programmeringsspråk som er lett å lære og kraftig nok til profesjonell forskning. Det er gratis, brukes av forskere over hele verden, og har kraftige biblioteker. Et bibliotek er en samling ferdigskrevet kode som du kan bruke i egne programmer, som å bruke ferdige byggesteiner i stedet for å lage alt selv. NumPy brukes for beregninger, Matplotlib for grafer, og Pandas for dataanalyse.

Automatisering er den første styrken. I stedet for å gjøre samme beregning tusen ganger, lar du datamaskinen gjøre det. Med noen få linjer Python-kode kan du finne gjennomsnittet, høyeste og laveste verdi, og sortere et helt datasett.

Dataanalyse er den andre styrken. Moderne naturfag handler om å samle og analysere data. Python lar deg lese data fra filer, finne mønstre, og trekke konklusjoner basert på statistikk. Du kan for eksempel analysere klimadata og se temperaturutviklingen over tid.

Visualisering er den tredje styrken. Grafer og diagrammer gjør data lettere å forstå. Med Matplotlib kan du lage linjediagrammer som viser temperaturendring, søylediagrammer som sammenligner verdier, og spredningsplott som viser sammenhenger mellom variabler.

Simulering er den fjerde styrken, og kanskje den mest spennende. Noen eksperimenter er for farlige, for dyre, eller tar for lang tid. Med simulering kan du modellere kjemiske reaksjoner, simulere bevegelse av planeter, eller teste hvordan en populasjon av dyr utvikler seg over generasjoner, alt fra en datamaskin.`,
    },
    {
      id: 'naturfag-10-6-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på Python i naturfag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-3-n-quiz2-q0',
            task: 'Hva er et bibliotek i programmering?',
            options: [
              { id: 'a', text: 'Et sted der du låner bøker om programmering', isCorrect: false },
              { id: 'b', text: 'En samling ferdigskrevet kode du kan bruke i egne programmer', isCorrect: true },
              { id: 'c', text: 'En type variabel', isCorrect: false },
              { id: 'd', text: 'Et programmeringsspråk', isCorrect: false },
            ],
            solution:
              'Et bibliotek (library) er en samling ferdigskrevet kode som du kan importere og bruke i dine egne programmer. I stedet for å skrive alt fra bunnen av, bruker du biblioteket som ferdige byggesteiner. Matplotlib for grafer og NumPy for beregninger er eksempler.',
          },
          {
            id: 'naturfag-10-6-3-n-quiz2-q1',
            task: 'Hvorfor er Python populært i naturfag?',
            options: [
              { id: 'a', text: 'Fordi det er det eneste programmeringsspråket som finnes', isCorrect: false },
              { id: 'b', text: 'Fordi det er lett å lære, har kraftige biblioteker og er mye brukt i forskning', isCorrect: true },
              { id: 'c', text: 'Fordi det er det raskeste språket', isCorrect: false },
              { id: 'd', text: 'Fordi det bare kan brukes til naturfag', isCorrect: false },
            ],
            solution:
              'Python er populært i naturfag fordi det er lett å lese og skrive, har mange kraftige biblioteker for beregning, dataanalyse og visualisering, er gratis og åpen kildekode, og brukes av forskere over hele verden.',
          },
          {
            id: 'naturfag-10-6-3-n-quiz2-q2',
            task: 'Hvilken av disse er IKKE en typisk bruk av programmering i naturfag?',
            options: [
              { id: 'a', text: 'Beregne gjennomsnittstemperatur fra målinger', isCorrect: false },
              { id: 'b', text: 'Lage grafer av eksperimentdata', isCorrect: false },
              { id: 'c', text: 'Skrive noveller om naturfenomener', isCorrect: true },
              { id: 'd', text: 'Simulere populasjonsvekst over tid', isCorrect: false },
            ],
            solution:
              'Programmering i naturfag brukes til automatisering av beregninger, dataanalyse, visualisering med grafer, og simulering av naturprosesser. Å skrive noveller er en kreativ oppgave som ikke er typisk for programmering i naturfag.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett hvordan programmering gjør naturfag kraftigere og mer effektivt. Vi har lært at en algoritme er en steg-for-steg-oppskrift, og at de fire grunnsteinene i programmering er variabler for å lagre verdier, løkker for å gjenta handlinger, betingelser for å ta beslutninger, og funksjoner for å gjenbruke kode.

Vi har blitt kjent med Python som et populært og tilgjengelig programmeringsspråk med kraftige biblioteker som NumPy for beregninger, Matplotlib for grafer og Pandas for dataanalyse. Programmering brukes i naturfag til å automatisere beregninger, analysere store datasett, visualisere resultater som grafer, og simulere naturprosesser som ville vært for farlige, dyre eller tidkrevende å utføre i virkeligheten.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4 NARRATIV: Simuleringer og modellering
// ============================================================================

export const CHAPTER_NATURFAG_10_6_4_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-6-4-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '6.4',
  title: 'Simuleringer og modellering',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hvordan digitale simuleringer lar oss forutsi været, teste biler uten å krasje dem og studere klimaendringer, og lær å vurdere både styrker og begrensninger ved modeller.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare hva en simulering er og hvordan den brukes i naturfag',
    'beskrive fordeler og begrensninger ved simuleringer',
    'forstå hvordan datamodeller representerer virkelige systemer',
    'evaluere kvaliteten på simuleringer og modeller gjennom validering',
  ],
  linkedChapterId: 'naturfag-10-6-4',
  content: [
    {
      id: 'naturfag-10-6-4-n-intro',
      type: 'text',
      content: `## Virkeligheten i en datamaskin

Hvordan kan forskere forutsi været for neste uke? Hvordan tester ingeniører nye biler uten å krasje dem? Hvordan studerer klimaforskere Jordens fremtid uten å vente hundre år?

Svaret er simuleringer, digitale modeller som etterlikner virkeligheten inne i en datamaskin. En simulering lar oss eksperimentere med systemer som ville vært for farlige, for dyre eller for tidkrevende å teste i den virkelige verden. Vi kan simulere en orkan uten å stå midt i den, teste en bro før vi bygger den, og forutsi klimaet hundre år frem i tid, alt fra en skjerm.

I dette kapittelet skal vi forstå hva simuleringer og modeller er, utforske hvor de brukes, se hvorfor de er så nyttige, og lære om begrensningene vi alltid må ha i bakhodet.`,
    },
    {
      id: 'naturfag-10-6-4-n-section1',
      type: 'text',
      content: `## Modeller og simuleringer: Fra forenkling til forutsigelse

La oss starte med det helt grunnleggende. En modell er en forenklet representasjon av virkeligheten som fokuserer på de viktigste egenskapene til et system og utelater detaljer som ikke er nødvendige. Modeller kan være fysiske, som en globus som representerer jorden, matematiske, som formler for bevegelse, eller digitale, som datasimuleringer. Ingen modell er perfekt, men gode modeller gir nyttig innsikt.

En simulering tar modellen et steg videre. Det er en digital etterlikning av et virkelig system der datamaskinen bruker matematiske regler til å beregne hvordan systemet oppfører seg over tid. Prosessen har fire steg: Først lager du en modell ved å representere systemet med matematiske formler. Deretter setter du startbetingelser, altså situasjonen i utgangspunktet, for eksempel dagens temperatur, lufttrykk og vind. Så lar du datamaskinen beregne hva som skjer neste sekund, neste time, neste år. Til slutt analyserer du resultatene.

Startbetingelsene er svært viktige. I en værsimulering er startbetingelsene dagens målinger fra værstasjoner, satellitter og værballonger over hele kloden. Nøyaktige startbetingelser er avgjørende for pålitelige resultater.

For å sjekke om en simulering er til å stole på, bruker vi validering. Det betyr å sammenligne simuleringens resultater med virkelige målinger eller observasjoner. En klimamodell kan for eksempel valideres ved å sjekke om den klarer å gjenskape historiske klimadata vi allerede kjenner.`,
    },
    {
      id: 'naturfag-10-6-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på modeller og simuleringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-4-n-quiz1-q0',
            task: 'Hva er en simulering?',
            options: [
              { id: 'a', text: 'En fysisk modell bygget av papp og lim', isCorrect: false },
              { id: 'b', text: 'En digital etterlikning av et virkelig system', isCorrect: true },
              { id: 'c', text: 'En måte å lagre data på', isCorrect: false },
              { id: 'd', text: 'Et program for å redigere bilder', isCorrect: false },
            ],
            solution:
              'En simulering er en digital modell som bruker datamaskiner til å etterligne hvordan et virkelig system oppfører seg over tid. Eksempler er værsimuleringer, flysimulatorer og klimamodeller.',
          },
          {
            id: 'naturfag-10-6-4-n-quiz1-q1',
            task: 'Hva betyr det at en modell er en «forenklet representasjon av virkeligheten»?',
            options: [
              { id: 'a', text: 'At modellen alltid er 100 % nøyaktig', isCorrect: false },
              { id: 'b', text: 'At modellen utelater detaljer som ikke er nødvendige for formålet', isCorrect: true },
              { id: 'c', text: 'At modellen bare kan brukes én gang', isCorrect: false },
              { id: 'd', text: 'At modellen er vanskeligere enn virkeligheten', isCorrect: false },
            ],
            solution:
              'En modell fokuserer på de viktigste egenskapene og ignorerer detaljer som ikke påvirker resultatet vesentlig. En værmodell inkluderer temperatur, trykk og vind, men utelater for eksempel antall biler på veiene. Forenkling gjør modellen raskere og enklere å forstå.',
          },
          {
            id: 'naturfag-10-6-4-n-quiz1-q2',
            task: 'Hva er validering av en simulering?',
            options: [
              { id: 'a', text: 'Å gjøre simuleringen dyrere', isCorrect: false },
              { id: 'b', text: 'Å kjøre simuleringen raskere', isCorrect: false },
              { id: 'c', text: 'Å sjekke om resultatene stemmer overens med virkeligheten', isCorrect: true },
              { id: 'd', text: 'Å slette gamle simuleringer', isCorrect: false },
            ],
            solution:
              'Validering er å sammenligne simuleringens resultater med virkelige målinger for å sjekke om modellen er pålitelig. For eksempel kan en klimamodell valideres mot historiske klimadata. En validert modell gir mer pålitelige forutsigelser.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-4-n-section2',
      type: 'text',
      content: `## Simuleringer i aksjon: Fra vær til verdensrom

Simuleringer brukes på utallige områder. La oss se på de viktigste.

Værvarsling er kanskje det mest kjente eksempelet. Jordens overflate deles inn i bokser, typisk 10 ganger 10 kilometer. For hver boks beregnes temperatur, lufttrykk, vind og fuktighet, time for time fremover. Utfordringen er at atmosfæren er et kaotisk system: små feil i startbetingelsene vokser raskt og kan føre til store feil i varselet. Derfor blir værvarsler mindre nøyaktige jo lengre frem i tid vi forsøker å varsle.

Klimamodeller ligner på værmodeller, men jobber i en helt annen tidsskala. De forutsier gjennomsnittlige forhold over tiår og århundrer, ikke enkeltdager. De inkluderer atmosfæren, havet, is, jordsmonn, vegetasjon og CO₂-nivåer. Klimamodeller viser at hvis vi fortsetter med dagens utslipp, vil gjennomsnittstemperaturen øke med 2 til 4 grader innen 2100. Men her kommer et interessant poeng: Vi kan forutsi klimaet langt frem, men ikke været. Grunnen er at klima handler om gjennomsnitt og trender som følger fysiske lover, mens vær er kaotisk og uforutsigbart dag for dag.

Flysimulatorer etterlikner opplevelsen av å fly et ekte fly. Piloten sitter i en kopi av cockpiten med ekte instrumenter og skjermer. Modellen inkluderer aerodynamikk, vær, terreng og motorytelse. Pilotene kan øve på nødprosedyrer, landing i tåke og motorhavari helt uten risiko. Under COVID-19-pandemien brukte forskere epidemimodeller for å forutsi smittespredning og evaluere tiltak som vaksinasjon og karantene. Og i astrofysikken simulerer forskere planeter, stjerner og galakser for å forstå universet, blant annet at Melkeveien og Andromedagalaksen vil kollidere om fire milliarder år.`,
    },
    {
      id: 'naturfag-10-6-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på bruk av simuleringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-4-n-quiz2-q0',
            task: 'Hvorfor blir værvarsler mindre nøyaktige jo lengre frem i tid vi varsler?',
            options: [
              { id: 'a', text: 'Fordi meteorologene slutter å regne', isCorrect: false },
              { id: 'b', text: 'Fordi små feil i startdata forsterkes i et kaotisk system', isCorrect: true },
              { id: 'c', text: 'Fordi satellittene slutter å sende data', isCorrect: false },
              { id: 'd', text: 'Fordi været faktisk er helt tilfeldig', isCorrect: false },
            ],
            solution:
              'Atmosfæren er et kaotisk system der små feil i startbetingelsene vokser raskt over tid. En liten feil i dagens temperaturmåling kan gi stor feil i varselet om en uke. I tillegg kan vi aldri måle været perfekt overalt samtidig.',
          },
          {
            id: 'naturfag-10-6-4-n-quiz2-q1',
            task: 'Hvorfor kan vi forutsi klimaet 50 år frem, men ikke været 2 uker frem?',
            options: [
              { id: 'a', text: 'Fordi klimamodeller er mer nøyaktige enn værmodeller', isCorrect: false },
              { id: 'b', text: 'Fordi klima handler om gjennomsnitt og trender, mens vær er kaotisk dag for dag', isCorrect: true },
              { id: 'c', text: 'Fordi klimaforskere har bedre datamaskiner', isCorrect: false },
              { id: 'd', text: 'Det er umulig å forutsi klima', isCorrect: false },
            ],
            solution:
              'Klima handler om gjennomsnittlige forhold over lang tid og styres av kjente fysiske lover som drivhuseffekten. Vær handler om spesifikke forhold dag for dag og er kaotisk. Analogi: Du kan forutsi at vannet koker ved 100 grader (klima), men ikke nøyaktig hvilken boble som dukker opp neste sekund (vær).',
          },
          {
            id: 'naturfag-10-6-4-n-quiz2-q2',
            task: 'Hvilken av disse er IKKE en fordel med simuleringer?',
            options: [
              { id: 'a', text: 'Teste uten risiko', isCorrect: false },
              { id: 'b', text: 'Spare tid og penger', isCorrect: false },
              { id: 'c', text: 'Simuleringer er alltid 100 % nøyaktige', isCorrect: true },
              { id: 'd', text: 'Utforske scenarioer som er umulige i virkeligheten', isCorrect: false },
            ],
            solution:
              'Simuleringer er aldri 100 % nøyaktige fordi modeller er forenklinger, startdata har usikkerhet, og datamaskiner gjør avrundingsfeil. Fordelene er at du kan teste uten risiko, spare tid og penger, og utforske scenarioer som hva-om-spørsmål.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-4-n-section3',
      type: 'text',
      content: `## Begrensninger: Hvorfor simuleringer aldri er perfekte

Det er viktig å forstå at selv de beste simuleringene har begrensninger.

For det første er modeller forenklinger. Vi kan ikke inkludere alle detaljer i virkeligheten. En klimamodell kan ikke modellere hver eneste sky på kloden. I stedet gjør den antagelser om gjennomsnittlig skydekke. Jo enklere modellen er, jo mindre nøyaktig er den, men jo mer detaljert den er, jo mer beregningskraft krever den.

For det andre har startbetingelsene alltid usikkerhet. Vi kan aldri måle alt perfekt overalt samtidig. Værstasjoner har mellomrom, og alle målinger har feil. I kaotiske systemer som atmosfæren vokser disse små feilene raskt.

For det tredje er beregningskraft en begrensning. Noen simuleringer krever enorme superdatamaskiner. Klimamodeller kan ta uker å kjøre, og en værmodell med 1 kilometers oppløsning over hele kloden ville kreve uoppnåelig beregningskraft.

For det fjerde er validering vanskelig for fremtidsscenarier. Vi kan validere en klimamodell mot historiske data, men vi kan ikke sjekke om forutsigelsene for år 2100 stemmer før vi er der.

For det femte kan menneskelige feil snike seg inn. Feil i koden, feil antagelser i modellen, eller feiltolkning av resultatene. I 1999 krasjet Mars Climate Orbiter fordi en del av programmet brukte engelske enheter mens en annen del brukte metriske. Simuleringer er kraftige verktøy, men resultatene må alltid tolkes kritisk.`,
    },
    {
      id: 'naturfag-10-6-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på begrensninger ved simuleringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-4-n-quiz3-q0',
            task: 'Hvorfor kan en klimamodell aldri være 100 % nøyaktig?',
            options: [
              { id: 'a', text: 'Fordi forskerne ikke prøver hardt nok', isCorrect: false },
              { id: 'b', text: 'Fordi modeller er forenklinger, startdata har usikkerhet, og kaotiske systemer forsterker feil', isCorrect: true },
              { id: 'c', text: 'Fordi datamaskiner ikke er oppfunnet ennå', isCorrect: false },
              { id: 'd', text: 'Fordi klimaet ikke følger fysiske lover', isCorrect: false },
            ],
            solution:
              'Klimamodeller kan aldri bli perfekte av flere grunner: Modeller må forenkle virkeligheten, startbetingelsene har alltid noe usikkerhet, kaotiske systemer forsterker feil, og vi kan ikke inkludere alle detaljer. Men de er likevel svært nyttige verktøy.',
          },
          {
            id: 'naturfag-10-6-4-n-quiz3-q1',
            task: 'Hva var årsaken til at Mars Climate Orbiter krasjet i 1999?',
            options: [
              { id: 'a', text: 'En meteoritt traff romfartøyet', isCorrect: false },
              { id: 'b', text: 'Solstråling ødela elektronikken', isCorrect: false },
              { id: 'c', text: 'En del av programmet brukte engelske enheter mens en annen brukte metriske', isCorrect: true },
              { id: 'd', text: 'Datamaskinen gikk tom for strøm', isCorrect: false },
            ],
            solution:
              'Mars Climate Orbiter krasjet fordi et team brukte engelske enheter (pund-sekunder) mens et annet team brukte metriske enheter (newton-sekunder) i simuleringen. Denne menneskelige feilen i koden førte til at romfartøyet havnet i feil bane og ble ødelagt.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket simuleringer og modellering. Vi har lært at en modell er en forenklet representasjon av virkeligheten, og at en simulering er en digital etterlikning som bruker datamaskinen til å beregne hvordan et system oppfører seg over tid. Prosessen innebærer å lage en modell, sette startbetingelser, la datamaskinen beregne, og analysere resultatene. Validering sikrer at resultatene stemmer med virkeligheten.

Vi har sett simuleringer i aksjon: værvarsling med bokser over jordoverflaten, klimamodeller som forutsier gjennomsnittlige forhold over tiår, flysimulatorer for pilottrening, epidemimodeller for smittespredning, og astrofysiske simuleringer av galaksekollisjon.

Vi har også lært om begrensningene: modeller er forenklinger, startdata har usikkerhet, beregningskraft er begrenset, validering av fremtidsscenarier er vanskelig, og menneskelige feil kan snike seg inn. Simuleringer er kraftige verktøy, men resultatene må alltid tolkes med kritisk blikk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.5 NARRATIV: Forskning og innovasjon
// ============================================================================

export const CHAPTER_NATURFAG_10_6_5_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-6-5-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '6.5',
  title: 'Forskning og innovasjon',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hvordan forskere skaper ny kunnskap gjennom den vitenskapelige metoden, hvordan grunnforskning kan føre til banebrytende innovasjon, og hvorfor kildekritikk og etikk er avgjørende i en verden full av informasjon.',
  estimatedMinutes: 35,
  competenceGoals: [
    'gi eksempler på dagsaktuell forskning og dens betydning for samfunnet',
    'forklare forskjellen mellom grunnforskning og anvendt forskning',
    'beskrive forskningsprosessen fra idé til publisering',
    'vurdere påliteligheten til ulike informasjonskilder med kildekritikk',
  ],
  linkedChapterId: 'naturfag-10-6-5',
  content: [
    {
      id: 'naturfag-10-6-5-n-intro',
      type: 'text',
      content: `## Jakten på ny kunnskap

Hvordan vet vi at klimaet endrer seg? Fordi forskere har studert isborekjerner, havtemperaturer og atmosfærens sammensetning systematisk i tiår etter tiår. Hvordan ble COVID-19-vaksinen utviklet på rekordtid? Fordi seksti års grunnforskning på mRNA la grunnlaget. Hvordan gikk vi fra Einsteins relativitetsteori til GPS i lomma? Gjennom en kjede av forskning og innovasjon som strakte seg over et helt århundre.

Forskning og innovasjon er to krefter som sammen driver samfunnet fremover. Forskning skaper ny kunnskap, og innovasjon omsetter denne kunnskapen til praktiske løsninger. I dette kapittelet skal vi forstå hvordan forskere jobber, hva som skiller grunnforskning fra anvendt forskning, hvordan forskning fører til innovasjon, og hvorfor kildekritikk og forskningsetikk er avgjørende i vår tid.`,
    },
    {
      id: 'naturfag-10-6-5-n-section1',
      type: 'text',
      content: `## Forskningsprosessen: Fra nysgjerrighet til publisering

Forskning er systematisk og kritisk arbeid for å skape ny kunnskap om verden. Den kjennetegnes ved at den følger en planlagt metode, er transparent, det vil si åpen om metoder og resultater, og at resultatene kan etterprøves av andre. Forskningen bygger alltid på eksisterende kunnskap og følger etiske retningslinjer.

Prosessen starter med en idé og et spørsmål. Forskeren lurer på noe: «Hvorfor smelter isen på Grønland så raskt?» Deretter gjør forskeren en litteraturstudie for å finne ut hva andre allerede har funnet ut. Så formulerer forskeren en hypotese, en testbar påstand om hva svaret kan være: «Isen smelter raskere fordi havtemperaturen øker.» Hypotesen må være spesifikk, målbar og mulig å motbevise.

Neste steg er planlegging og gjennomføring av forsøk eller undersøkelser. Forskeren samler data, for eksempel havtemperatur og issmelting over flere år. Deretter analyseres dataene: Hva viser resultatene? Støtter de hypotesen? Forskeren trekker en konklusjon og skriver en vitenskapelig artikkel.

Men artikkelen publiseres ikke uten videre. Først gjennomgår den fagfellevurdering, også kalt peer review. Det betyr at andre eksperter innenfor samme fagfelt vurderer metodene, analysen og konklusjonene. De sjekker om forskningen holder mål. Artikler som har gjennomgått fagfellevurdering regnes som mer pålitelige. Og til slutt fører ny kunnskap til nye spørsmål, som setter i gang nye forskningsprosjekter. Slik bygger vitenskapen seg opp lag for lag.`,
    },
    {
      id: 'naturfag-10-6-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på forskning og den vitenskapelige metoden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-5-n-quiz1-q0',
            task: 'Hva er forskning?',
            options: [
              { id: 'a', text: 'Å lese bøker om naturfag', isCorrect: false },
              { id: 'b', text: 'Systematisk arbeid for å skape ny kunnskap', isCorrect: true },
              { id: 'c', text: 'Å gjette svaret på et spørsmål', isCorrect: false },
              { id: 'd', text: 'Å kopiere andres arbeid', isCorrect: false },
            ],
            solution:
              'Forskning er systematisk arbeid for å skape ny kunnskap. Det innebærer å stille spørsmål, teste hypoteser, samle data og trekke konklusjoner basert på bevis. Å lese eksisterende kunnskap er viktig, men forskning handler om å skape ny kunnskap.',
          },
          {
            id: 'naturfag-10-6-5-n-quiz1-q1',
            task: 'Hva er fagfellevurdering (peer review)?',
            options: [
              { id: 'a', text: 'Studenter gir tilbakemelding på en oppgave', isCorrect: false },
              { id: 'b', text: 'Forskeren vurderer sin egen forskning', isCorrect: false },
              { id: 'c', text: 'Andre eksperter vurderer kvaliteten på forskningen før publisering', isCorrect: true },
              { id: 'd', text: 'En avis skriver om forskningsresultater', isCorrect: false },
            ],
            solution:
              'Fagfellevurdering er en kvalitetssikringsprosess der uavhengige eksperter innenfor fagfeltet gjennomgår en vitenskapelig artikkel før den publiseres. De sjekker metoder, analyser og konklusjoner. Artikler som har gjennomgått peer review regnes som mer pålitelige.',
          },
          {
            id: 'naturfag-10-6-5-n-quiz1-q2',
            task: 'Hva kjennetegner en god hypotese?',
            options: [
              { id: 'a', text: 'Den er vag og generell', isCorrect: false },
              { id: 'b', text: 'Den er umulig å teste', isCorrect: false },
              { id: 'c', text: 'Den er spesifikk, målbar og kan motbevises', isCorrect: true },
              { id: 'd', text: 'Den er alltid riktig', isCorrect: false },
            ],
            solution:
              'En god hypotese er spesifikk, målbar og kan motbevises. For eksempel: «Planter som vannes med 50 ml vann daglig vokser høyere enn planter som vannes med 20 ml.» Denne hypotesen kan testes og kan vise seg å være feil, noe som er viktig i vitenskap.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-5-n-section2',
      type: 'text',
      content: `## To typer forskning som jobber sammen

Det finnes to hovedtyper forskning som utfyller hverandre. Grunnforskning, også kalt teoretisk forskning, handler om å forstå hvordan verden fungerer uten å ha et umiddelbart praktisk mål. Eksempler er å studere mørk materie i universet, utforske bakteriers genetikk, eller forstå hjernens hukommelsessystemer. Grunnforskning virker kanskje unyttig der og da, men kan vise seg å være helt avgjørende mange år senere.

Anvendt forskning handler om å løse konkrete problemer eller utvikle nye produkter. Eksempler er å utvikle nye vaksiner, lage mer effektive solceller, eller finne metoder for å rense plast fra havet.

Samspillet mellom dem er der magien skjer. Grunnforskning gir oss kunnskap, og anvendt forskning bruker den til å løse problemer. Et fantastisk eksempel er GPS. Einstein utviklet relativitetsteorien i 1905 og 1915 som ren grunnforskning. Han oppdaget at tid går saktere jo raskere du beveger deg, og raskere jo lenger fra en tung masse du er. GPS-satellitter kretser rundt jorden i 20 200 kilometers høyde med 14 000 kilometer i timen. På grunn av relativistiske effekter er satellittklokken 38 mikrosekunder feil per dag. Uten korreksjon ville det gi en posisjonsfeil på 10 kilometer per dag. GPS ville vært helt ubrukelig uten Einsteins grunnforskning.

Innovasjon er steget der forskning blir til noe nyttig for samfunnet: nye løsninger, produkter eller tjenester. Smarttelefoner kom fra forskning på mikroelektronikk og trådløs kommunikasjon. mRNA-vaksiner kom fra seksti års forskning på budbringer-RNA. Solceller kom fra forskning på den fotoelektriske effekten. Norge er spesielt god på innovasjon innen fornybar energi, havbruk, maritim teknologi og helseteknologi.`,
    },
    {
      id: 'naturfag-10-6-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på forskningstyper og innovasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-5-n-quiz2-q0',
            task: 'Hva er forskjellen mellom grunnforskning og anvendt forskning?',
            options: [
              { id: 'a', text: 'Grunnforskning søker å forstå verden, anvendt forskning søker å løse konkrete problemer', isCorrect: true },
              { id: 'b', text: 'Grunnforskning er viktigere enn anvendt forskning', isCorrect: false },
              { id: 'c', text: 'Anvendt forskning er bare for private selskaper', isCorrect: false },
              { id: 'd', text: 'Grunnforskning er enklere å gjennomføre', isCorrect: false },
            ],
            solution:
              'Grunnforskning handler om å forstå verden uten nødvendigvis å ha et umiddelbart praktisk mål. Anvendt forskning bruker kunnskap til å løse konkrete problemer og utvikle nye produkter. Begge er like viktige og utfyller hverandre.',
          },
          {
            id: 'naturfag-10-6-5-n-quiz2-q1',
            task: 'Hvilken av disse er et eksempel på grunnforskning?',
            options: [
              { id: 'a', text: 'Utvikle en ny vaksine mot influensa', isCorrect: false },
              { id: 'b', text: 'Studere mørk materie i universet for å forstå universets struktur', isCorrect: true },
              { id: 'c', text: 'Lage en mer energieffektiv solcelle', isCorrect: false },
              { id: 'd', text: 'Teste en ny medisin på pasienter', isCorrect: false },
            ],
            solution:
              'Å studere mørk materie er grunnforskning fordi målet er å forstå universets struktur, ikke å lage et produkt. De andre alternativene er alle eksempler på anvendt forskning med konkrete praktiske mål.',
          },
          {
            id: 'naturfag-10-6-5-n-quiz2-q2',
            task: 'Hvorfor var Einsteins relativitetsteori nødvendig for å lage GPS?',
            options: [
              { id: 'a', text: 'Fordi Einstein oppfant GPS', isCorrect: false },
              { id: 'b', text: 'Fordi satellittklokker går feil på grunn av relativistiske effekter som må korrigeres', isCorrect: true },
              { id: 'c', text: 'Fordi GPS bruker Einsteins navn som merkevare', isCorrect: false },
              { id: 'd', text: 'Relativitetsteorien er ikke relevant for GPS', isCorrect: false },
            ],
            solution:
              'GPS-satellitter beveger seg raskt og befinner seg langt fra jorden, noe som gir relativistiske tidseffekter på 38 mikrosekunder per dag. Uten korreksjon for dette ville posisjonsfeilen vokse med ca. 10 km per dag. Einsteins grunnforskning fra 1905/1915 var altså helt nødvendig.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-5-n-section3',
      type: 'text',
      content: `## Kildekritikk og etikk: Navigere i informasjonshavet

I en verden der informasjon flyter fritt fra alle retninger, er kildekritikk en livsviktig ferdighet. Ikke all informasjon er pålitelig. Du må spørre: Hvem står bak? Er det en anerkjent forsker eller institusjon, eller en anonym blogg? Er det fagfellevurdert? Peer-reviewed artikler er kvalitetssikret av eksperter. Er fremstillingen balansert, eller vises bare én side? Er det en primærkilde, altså den opprinnelige forskningsartikkelen, eller en sekundærkilde der noen skriver om forskningen? Og finnes det økonomiske interesser som kan påvirke resultatet?

Pålitelige kilder inkluderer vitenskapelige tidsskrifter som Nature og Science, forskningsformidling som Forskning.no, og universiteter som publiserer om egen forskning. Vær spesielt kritisk til sensasjonelle overskrifter. «Ny studie: Sjokolade gjør deg smartere!» kan bety at en liten studie fant en svak sammenheng mellom kakao og blodgjennomstrømning i hjernen, langt fra den sterke påstanden i overskriften.

Forskningsetikk er like viktig. Forskere må følge regler om å ikke gjøre skade, sikre informert samtykke der deltakere vet hva de er med på og kan trekke seg, beskytte personvern og data, og være ærlige om resultater. Forskning finansieres av enten staten gjennom Norges forskningsråd og universiteter, eller av private bedrifter. Uansett finansiering må forskningen være transparent og uavhengig.

Dagsaktuell forskning er aktiv på mange spennende fronter: klimaforskning med issmelting og karbonfangst, medisinsk forskning med immunterapi og genredigering, fornybar energi med flytende vindmøller og batteriteknologi, kunstig intelligens med selvkjørende biler og språkmodeller, og marin biologi med mikroplast og korallrev. Å følge med på og forstå forskning gjør deg i stand til å ta informerte valg og delta i viktige samfunnsdebatter.`,
    },
    {
      id: 'naturfag-10-6-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-6-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på kildekritikk og etikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-6-5-n-quiz3-q0',
            task: 'Du leser en nyhetssak om en studie. Hva er det viktigste du bør sjekke for å vurdere påliteligheten?',
            options: [
              { id: 'a', text: 'Om overskriften er spennende', isCorrect: false },
              { id: 'b', text: 'Om studien er publisert i et fagfellevurdert tidsskrift', isCorrect: true },
              { id: 'c', text: 'Om artikkelen er lang', isCorrect: false },
              { id: 'd', text: 'Om mange har delt den på sosiale medier', isCorrect: false },
            ],
            solution:
              'En studie publisert i et fagfellevurdert tidsskrift har blitt vurdert av uavhengige eksperter som har sjekket metoder, analyser og konklusjoner. Dette er den viktigste kvalitetssikringen i vitenskap. Overskrifter, lengde og popularitet på sosiale medier sier ingenting om vitenskapelig kvalitet.',
          },
          {
            id: 'naturfag-10-6-5-n-quiz3-q1',
            task: 'Hva betyr informert samtykke i forskning?',
            options: [
              { id: 'a', text: 'At forskeren bestemmer alt selv', isCorrect: false },
              { id: 'b', text: 'At deltakerne forstår hva de er med på, kjenner risikoene, og frivillig samtykker', isCorrect: true },
              { id: 'c', text: 'At forskningen er finansiert av staten', isCorrect: false },
              { id: 'd', text: 'At resultatene er publisert', isCorrect: false },
            ],
            solution:
              'Informert samtykke betyr at deltakere i forskning får full informasjon om formål, risiko og fordeler, forstår informasjonen, frivillig samtykker uten press, og kan trekke seg når som helst uten konsekvenser. Dette er et grunnleggende etisk prinsipp.',
          },
          {
            id: 'naturfag-10-6-5-n-quiz3-q2',
            task: 'Hvilken av disse er den mest pålitelige kilden til informasjon om klimaendringer?',
            options: [
              { id: 'a', text: 'Et innlegg på sosiale medier fra en influenser', isCorrect: false },
              { id: 'b', text: 'En anonym blogg uten vitenskapelige referanser', isCorrect: false },
              { id: 'c', text: 'En artikkel på Forskning.no som refererer til en fagfellevurdert studie i Nature', isCorrect: true },
              { id: 'd', text: 'En kommersiell reklame for et produkt', isCorrect: false },
            ],
            solution:
              'En artikkel på Forskning.no som refererer til en fagfellevurdert studie i Nature er mest pålitelig fordi den bygger på kvalitetssikret forskning, er åpen om kilder, og kommer fra en anerkjent norsk formidlingskanal. Sosiale medier, anonyme blogger og reklamer mangler disse kvalitetssikringene.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-6-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket forskning og innovasjon som drivkrefter i samfunnet. Vi har lært at forskning er systematisk arbeid for å skape ny kunnskap, og at forskningsprosessen går fra spørsmål og hypotese via datainnsamling og analyse til publisering med fagfellevurdering.

Vi har sett at grunnforskning søker å forstå verden uten umiddelbart praktisk mål, mens anvendt forskning bruker kunnskap til å løse konkrete problemer. Sammen fører de til innovasjon, der forskningsresultater omsettes til nye produkter og løsninger som GPS, mRNA-vaksiner og solceller.

Vi har lært at kildekritikk er avgjørende: sjekk hvem som står bak, om forskningen er fagfellevurdert, om fremstillingen er balansert, og om det finnes interessekonflikter. Og vi har forstått at forskningsetikk med prinsipper om å ikke gjøre skade, informert samtykke, personvern og ærlighet er grunnmuren i all god forskning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle narrative kapitler i DEL 6
// ============================================================================

export const NATURFAG_10_NARRATIV_DEL6_CHAPTERS = [
  CHAPTER_NATURFAG_10_6_1_NARRATIV,
  CHAPTER_NATURFAG_10_6_2_NARRATIV,
  CHAPTER_NATURFAG_10_6_3_NARRATIV,
  CHAPTER_NATURFAG_10_6_4_NARRATIV,
  CHAPTER_NATURFAG_10_6_5_NARRATIV,
];
