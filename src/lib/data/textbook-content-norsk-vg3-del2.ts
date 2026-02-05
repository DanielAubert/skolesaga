/**
 * Norsk VG3 - Del 2: Modernisme og mellomkrigstid (utvidet)
 *
 * Følger LK20 læreplan for norsk på videregående skole.
 * Utvidede kapitler med dypere analyse og flere eksempler.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2: MODERNISME OG MELLOMKRIGSTID (1900-1945) - UTVIDET
// ============================================================================

// ----------------------------------------------------------------------------
// 2.5 Politisk engasjert litteratur (UTVIDET)
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_2_5_EXTENDED: TextbookChapter = {
  id: 'norsk-vg3-2-5-ext',
  courseId: 'norsk-vg3',
  chapterNumber: '2.5',
  title: 'Politisk engasjert litteratur',
  description: 'Litteraturen i mellomkrigstiden - mellom idealisme og ideologi, kunst og kamp.',
  estimatedMinutes: 75,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
    'sammenligne tekster fra ulike tider og utforske hvordan de er påvirket av samtida si og litteraturhistoria',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-2-5-ext-intro',
      type: 'text',
      content: `## Mellomkrigstiden - litteratur i en krisetid

Mellomkrigstiden (1918-1940) var en av de mest turbulente periodene i moderne historie. Europa lå i ruiner etter første verdenskrig, og nye ideologier kjempet om makten. For forfattere og intellektuelle var det nesten umulig å stå på sidelinjen. Litteraturen ble et våpen i kampen om fremtiden.

**Den historiske konteksten:**

For å forstå mellomkrigstidens litteratur må vi forstå den historiske situasjonen:

**1918-1929: Den skjøre freden**
Første verdenskrig hadde kostet millioner av liv og knust troen på fremskrittet. I Russland hadde bolsjevikene tatt makten (1917), og revolusjonen inspirerte arbeiderbevegelser over hele verden. Samtidig vokste fascismen frem i Italia (Mussolini 1922). Perioden var preget av både optimisme og uro.

**1929-1933: Den store depresjonen**
Børskrakket i 1929 utløste en verdensomspennende økonomisk krise. Arbeidsledigheten eksploderte, fattigdommen økte, og misnøyen vokste. I Tyskland førte krisen til at nazistene tok makten i 1933.

**1933-1939: Veien mot krig**
Hitlers maktovertakelse endret alt. Forfølgelsen av jøder, sosialister og intellektuelle begynte. Mange forfattere flyktet. I Spania brøt det ut borgerkrig (1936-1939), som ble en generalprøve på den kommende verdenskrigen.

**Litteraturen tar stilling:**

I denne situasjonen stilte mange forfattere seg spørsmålet: Kan kunst være nøytral når demokratiet er truet? Svaret for mange var nei.

**Arbeiderlitteraturen:**
I Norge og andre land vokste det frem en litteratur skrevet av og for arbeiderklassen. Forfattere som Johan Falkberget skildret gruvearbeidernes harde liv. Kristofer Uppdal skrev om rallarne som bygde jernbanen. Denne litteraturen var ofte realistisk og solidarisk med de undertrykte.

**Antifascistisk litteratur:**
Etter Hitlers maktovertakelse ble kampen mot fascismen et hovedtema. Forfattere som Arnulf Øverland og Nordahl Grieg advarte mot nazismen og oppfordret til motstand. Deres dikt og dramaer ble våpen i kampen for demokratiet.

**Tendenskunst og dens dilemmaer:**
Når litteraturen blir politisk, oppstår dilemmaer: Kan kunst med et tydelig budskap fortsatt være god kunst? Blir karakterene bare talsmenn for ideer? Mister verket sin kompleksitet?

Disse spørsmålene preget debatten. Noen mente at kunstens oppgave var å tjene saken - andre at kunsten måtte bevare sin autonomi selv i krisetider.

**Internasjonale impulser:**

Den norske litteraturen var ikke isolert. Forfattere lot seg inspirere av:

- **Bertolt Brecht** (Tyskland): Utviklet det «episke teater» som skulle vekke publikum til politisk bevissthet
- **Ernest Hemingway** (USA): Skildret krigen i Spania i «For Whom the Bell Tolls»
- **George Orwell** (England): Kjempet i Spania og skrev om totalitarismens farer
- **Pablo Neruda** (Chile): Engasjert politisk lyrikk

Denne internasjonale solidariteten mellom forfattere var et trekk ved perioden.`,
    },
    {
      id: 'norsk-vg3-2-5-ext-def-1',
      type: 'definition',
      title: 'Tendenskunst',
      content: `**Tendenskunst** er kunst som har et bevisst politisk eller ideologisk budskap som hovedformål.

**Kjennetegn:**
- Klart politisk standpunkt
- Ønske om å påvirke holdninger og handlinger
- Ofte realistisk form for å nå bredt publikum
- Karakterer kan representere klasser eller ideer
- Handlingen illustrerer en politisk tese
- Tydelig skille mellom "gode" og "onde" krefter

**Historisk bakgrunn:**
Begrepet ble vanlig i det moderne gjennombruddet, men fikk fornyet aktualitet i mellomkrigstiden. Georg Brandes' krav om at litteraturen skulle «sette problemer under debatt» kan sees som en forløper.

**Argumenter FOR tendenskunst:**
- All kunst er politisk, bevisst eller ubevisst
- I krisetider har kunsten et ansvar
- Litteraturen kan bidra til samfunnsendring
- Nøytralitet kan bety å støtte undertrykkelse

**Argumenter MOT tendenskunst:**
- Kunsten reduseres til propaganda
- Estetisk kvalitet ofres for budskapet
- Karakterer blir talsmenn, ikke levende mennesker
- Kompleksitet og flertydighet forsvinner
- Kunsten mister sin autonomi

**Motsetningen: L'art pour l'art**
«Kunst for kunstens skyld» - ideen om at kunst skal vurderes på estetiske kriterier alene, uavhengig av moralsk eller politisk innhold.

**I dag:**
Debatten om kunstens politiske ansvar er fortsatt levende. Skal forfattere ta stilling til klimakrisen? Migrasjon? Ulikhet?`,
    },
    {
      id: 'norsk-vg3-2-5-ext-def-2',
      type: 'definition',
      title: 'Arbeiderlitteratur',
      content: `**Arbeiderlitteratur** er litteratur skrevet av, om eller for arbeiderklassen.

**Historisk bakgrunn:**
Vokste frem med industrialiseringen og arbeiderbevegelsen på 1800- og 1900-tallet. Fikk sin storhetstid i mellomkrigstiden.

**Kjennetegn:**
- Skildrer arbeiderklassens liv og kår
- Solidaritet med de undertrykte
- Ofte selvbiografisk preg
- Realistisk stil
- Klassekamp som tema
- Kollektivet viktigere enn individet

**Norske arbeiderlitterater:**
- **Johan Falkberget** (1879-1967): Gruvearbeidernes liv i «Christianus Sextus»
- **Kristofer Uppdal** (1878-1961): Rallarne i «Dansen gjennom skuggeheimen»
- **Oskar Braaten** (1881-1939): Østkantens folk i romaner og drama
- **Alf Prøysen** (1914-1970): Husmannsfolk og arbeidere med varme og humor

**Internasjonalt:**
- Maksim Gorkij (Russland): «Mors»
- John Steinbeck (USA): «Vredens druer»
- Upton Sinclair (USA): «Jungelen»

**Betydning:**
Arbeiderlitteraturen ga stemme til mennesker som tidligere var usynlige i litteraturen. Den bidro til klassebevisstheten og solidariteten i arbeiderbevegelsen.

**Kritikk:**
Kunne bli for ensidig og propagandistisk. De «gode» arbeiderne mot de «onde» kapitalistene.`,
    },
    {
      id: 'norsk-vg3-2-5-ext-def-3',
      type: 'definition',
      title: 'Sosialistisk realisme',
      content: `**Sosialistisk realisme** var den offisielle kunstdoktrinen i Sovjetunionen fra 1934.

**Krav til kunsten:**
- Skildre virkeligheten i dens «revolusjonære utvikling»
- Vise den sosialistiske fremtiden som mål
- Fremstille positive helter som forbilder
- Være forståelig for massene
- Tjene partiets politikk

**Problemer:**
- Sensur og forfølgelse av avvikende kunst
- Kunstnerisk frihet ofret for ideologi
- Glorifisering av regimet
- Mange store forfattere forfulgt eller drept

**I Vesten:**
Mange vestlige forfattere sympatiserte med kommunismen, men ble desillusjonerte etter Stalins terror og Moskva-prosessene (1936-38).

**Lærdommen:**
Sosialistisk realisme viser farene ved å underordne kunsten politisk kontroll. Selv velmenende ideologier kan kvele kunsten.`,
    },
    {
      id: 'norsk-vg3-2-5-ext-example-1',
      type: 'example',
      title: 'Analyse: Johan Falkbergets «Christianus Sextus»',
      problem: `Johan Falkberget (1879-1967) skrev om gruvearbeidernes liv ved Røros-gruvene. Hvordan kombinerer han arbeiderskildring med litterær kvalitet?`,
      solution: `**Om verket:**
«Christianus Sextus» (1927-1935) er en romantrilogi som skildrer gruvesamfunnet ved Røros på 1700-tallet. Verket er oppkalt etter gruven Christian den sjettes gruve.

**Tematikk:**

**1. Arbeidernes kår:**
Falkberget skildrer det harde slitet i gruvene, fattigdommen, sykdom og tidlig død. Han kjente dette fra eget liv - han vokste selv opp i gruvesamfunnet og arbeidet i gruvene.

**2. Klassemotsetninger:**
Konflikten mellom gruvearbeiderne og verksledelsen er sentral. Men Falkberget unngår svart-hvitt-skildring - også blant ledelsen finnes menneskelighet.

**3. Religiøsitet:**
Den pietistiske vekkelsen på 1700-tallet spiller en viktig rolle. Falkberget viser hvordan troen ga mening og trøst, men også hvordan den kunne misbrukes.

**4. Natur og arbeid:**
Naturen rundt Røros er alltid til stede - det barske klimaet, fjellet, skogen. Mennesket kjemper mot naturen og med den.

**Litterære kvaliteter:**

Falkberget løfter arbeiderskildringen til episk nivå:
- Rik, poetisk språkføring
- Komplekse, troverdige karakterer
- Historisk autentisitet kombinert med dramatikk
- Mytiske undertoner
- Balanse mellom det kollektive og individuelle

**Sammenligning med tendenskunst:**
Falkberget har sympati med arbeiderne, men reduserer dem ikke til typer. Hans verk har blitt stående fordi de er god litteratur, ikke bare politiske budskap.

**Betydning:**
Falkberget viser at arbeiderlitteratur kan nå kunstneriske høyder uten å ofre solidariteten med de undertrykte.`,
    },
    {
      id: 'norsk-vg3-2-5-ext-example-2',
      type: 'example',
      title: 'Analyse: Bertolt Brechts episke teater',
      problem: `Bertolt Brecht (1898-1956) utviklet en ny form for politisk teater. Hvordan fungerer hans «verfremdungseffekt»?`,
      solution: `**Brechts prosjekt:**
Brecht ville skape et teater som vekket publikum til kritisk tenkning i stedet for å rive dem med følelsesmessig.

**Verfremdungseffekt (V-effekt):**
«Fremmedgjøringseffekten» innebærer teknikker som bryter illusjonen og minner publikum om at de ser teater:

**Teknikker:**
- **Sanger:** Avbryter handlingen og kommenterer den
- **Plakater:** Forteller hva som skal skje (fjerner spenningen)
- **Direkte henvendelse:** Skuespillere snakker til publikum
- **Synlig teknikk:** Belysningsrigg, sceneskift vises
- **Historisering:** Handlingen legges til fortiden for å skape distanse

**Hensikten:**
Når publikum ikke «forsvinner» inn i handlingen, kan de tenke kritisk over det som skjer. De ser samfunnsstrukturer i stedet for bare individuelle skjebner.

**Eksempel: «Mor Courage og barna hennes» (1939):**
Anna Fierling, kalt Mor Courage, driver handel under Trettiårskrigen. Hun mister alle tre barna, men fortsetter å handle. Publikum ser hvordan krigen ødelegger, men også hvordan vanlige mennesker bidrar til å opprettholde den.

**Brechts innflytelse i Norge:**
Nordahl Grieg var påvirket av Brecht, særlig i dramaene «Vår ære og vår makt» og «Nederlaget».

**Kritikk:**
Noen mener V-effekten gjør teatret kaldt og didaktisk. Andre hevder at Brechts stykker faktisk fungerer følelsesmessig tross teorien.

**Relevans i dag:**
Brechts teknikker brukes fortsatt, blant annet i dokumentarteater og performancekunst.`,
    },
    {
      id: 'norsk-vg3-2-5-ext-tip-1',
      type: 'tip',
      title: 'Forfattere i eksil',
      content: `**Eksilforfatterne - litteratur på flukt**

Etter 1933 flyktet tusenvis av tyske forfattere og intellektuelle fra nazismen. Dette skapte en «eksillitteratur» med egne kjennetegn.

**Berømte eksil-forfattere:**
- **Thomas Mann:** Nobelprisvinner, flyktet til USA
- **Bertolt Brecht:** Via flere land til USA, siden Øst-Berlin
- **Heinrich Mann:** Thomas' bror, flyktet til Frankrike, siden USA
- **Anna Seghers:** Kommunist, flyktet til Mexico
- **Lion Feuchtwanger:** Historiske romaner, flyktet til USA

**Norske forfattere i eksil under krigen:**
- Sigrid Undset (USA)
- Nordahl Grieg (England)
- Arnulf Øverland (konsentrasjonsleir, siden frigjort)

**Eksillets temaer:**
- Tap av hjemland og språk
- Kampen mot fascismen fra utsiden
- Håpet om å vende tilbake
- Fremmedhet og rotløshet

**Litteraturhistorisk betydning:**
Eksillitteraturen vitner om fascismens ødeleggelse av europeisk kultur. Mange forfattere vendte aldri tilbake, og noen tok sine egne liv i eksil (Stefan Zweig, Walter Benjamin).`,
    },
    {
      id: 'norsk-vg3-2-5-ext-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-5-ext-ex-1',
        number: '1',
        type: 'classic',
        task: 'Diskuter forholdet mellom kunst og politikk i mellomkrigstiden.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke argumenter ble brukt for at forfattere burde ta politisk stilling?',
            solution: 'Argumenter: Kunstens samfunnsansvar, demokratiet var truet, nøytralitet = passiv støtte til undertrykkelse, litteraturen kunne vekke og mobilisere.',
          },
          {
            label: 'b',
            task: 'Hvilke argumenter ble brukt mot tendenskunst?',
            solution: 'Argumenter: Kunsten mister sin autonomi, blir propaganda, karakterer blir talsmenn, kompleksitet forsvinner, estetisk kvalitet ofres.',
          },
          {
            label: 'c',
            task: 'Hvor står du i denne debatten? Begrunn svaret.',
            solution: 'Åpent svar, men bør vise forståelse for begge sider og evne til å begrunne eget standpunkt.',
          },
        ],
        solution: 'Diskusjonen bør vise forståelse for periodens dilemmaer og evne til selvstendig refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-5-ext-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-5-ext-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign mellomkrigstiden med vår egen tid.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke paralleller kan du se mellom 1930-tallet og i dag?',
            solution: 'Mulige paralleller: Økende nasjonalisme, polarisering, mistillit til institusjoner, klimakrise som eksistensiell trussel, sosiale mediers rolle vs. propagandaens.',
          },
          {
            label: 'b',
            task: 'Bør dagens forfattere ta stilling til klimakrisen eller andre politiske spørsmål?',
            solution: 'Åpent svar, men bør reflektere over kunstens rolle og ansvar i vår tid.',
          },
        ],
        solution: 'Oppgaven krever evne til historisk sammenligning og aktualisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-5-ext-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-5-ext-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser et verk fra arbeiderlitteraturen.',
        hints: [
          'Velg en tekst av Falkberget, Uppdal, Braaten eller en annen arbeiderlitterat',
          'Hvordan skildres arbeiderklassen?',
          'Er det tendenskunst eller mer kompleks litteratur?',
          'Hvilke litterære virkemidler brukes?',
        ],
        solution: 'Analysen skal vise evne til å vurdere både politisk innhold og litterær kvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-5-ext-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-5-ext-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et essay om «Kunstens frihet i ufrie tider».',
        hints: [
          'Ta utgangspunkt i mellomkrigstiden',
          'Diskuter dilemmaene forfatterne sto overfor',
          'Trekk linjer til andre perioder eller vår egen tid',
          'Presenter ditt eget syn',
        ],
        solution: 'Essayet skal vise evne til drøfting, historisk kunnskap og selvstendig refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.6 Arnulf Øverland (UTVIDET)
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_2_6_EXTENDED: TextbookChapter = {
  id: 'norsk-vg3-2-6-ext',
  courseId: 'norsk-vg3',
  chapterNumber: '2.6',
  title: 'Arnulf Øverland',
  description: 'Arnulf Øverlands lyrikk, hans kamp mot nazismen, og arven etter dikteren som ikke ville tie.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
    'bruke retoriske ferdigheter og litterære virkemidler i egen tekst- og medieproduksjon',
    'skrive litterære analyser og sammenligninger',
  ],
  content: [
    {
      id: 'norsk-vg3-2-6-ext-intro',
      type: 'text',
      content: `## Arnulf Øverland - dikteren som ikke tiet

Arnulf Øverland (1889-1968) står som en av de mest betydningsfulle skikkelsene i norsk litteratur- og kulturhistorie. Han var ikke bare en fremragende lyriker, men også en modig stemme mot fascismen i en tid da mange valgte å tie. Hans berømte ord «Du må ikke tåle så inderlig vel den urett som ikke rammer deg selv» har blitt stående som et moralsk imperativ for generasjoner.

**Liv og bakgrunn:**

Arnulf Øverland ble født 27. april 1889 i Kristiansund. Han vokste opp i en borgerlig familie, men brøt tidlig med sin bakgrunn og ble en radikal stemme i norsk kulturliv.

Han debuterte som lyriker i 1911 med samlingen «Den ensomme fest». De tidlige diktene var preget av dekadense og pessimisme, men gradvis utviklet han en mer samfunnsengasjert stemme.

**Den formbevisste lyrikeren:**

Øverland var en mester i tradisjonell versekunst. Han skrev i klassiske former - sonetter, ballader, dikt med fast rim og rytme. Denne formelle mestringen ga diktene kraft og minneverdi. Linjer som «Du må ikke sove» har slik pregnans fordi de er utsøkt formet.

Men formen var aldri pynt. Øverland mente at det som var viktig å si, måtte sies på en måte som festet seg. Den strenge formen var i tjeneste for budskapet.

**Kristendommen og ateismen:**

I 1933 holdt Øverland foredraget «Kristendommen - den tiende landeplage», som førte til at han ble tiltalt for blasfemi. Han ble frikjent, men saken viste hans kompromissløse holdning til det han så som hykleri og undertrykkelse.

Øverlands ateisme var ikke likegyldig. Han var opptatt av etikk og humanisme - men mente at mennesket måtte ta ansvar selv, uten å lene seg på religiøse forklaringer.

**Kampen mot nazismen:**

Fra midten av 1930-tallet ble kampen mot nazismen Øverlands hovedsak. Han så klart hva som var i ferd med å skje i Tyskland og advarte utrættelig.

I 1936 holdt han talen «Du må ikke sove» i Studentersamfundet. Talen, som også ble utgitt som dikt, er et kraftfullt varsel om nazismens brutalitet og en appell om å ikke lukke øynene.

**Under krigen:**

Da Norge ble okkupert i 1940, fortsatte Øverland sin motstand. Han ble arrestert i 1941 og sendt til konsentrasjonsleiren Sachsenhausen, der han satt til krigens slutt. Mange trodde han var død.

I leiren fortsatte han å skrive dikt - noen risset inn med en spiker på treplanker, andre memorert og skrevet ned etter frigjøringen.

**Etter krigen:**

Øverland vendte hjem som en nasjonal helt. Men han fortsatte å være kompromissløs og upopulær i mange spørsmål. Han kritiserte kirkens rolle under krigen og stilte ubehagelige spørsmål om nordmenns samvittighet.

Han mottok utallige æresbevisninger, inkludert Stockholms Universitets gullmedalje for «Du må ikke sove». Han døde 25. mars 1968.

**Arven:**

Øverlands dikt leses fortsatt. «Du må ikke sove» brukes ved minnemarkeringer og i undervisning. Hans insistering på det moralske ansvaret - at taushet er medvirkning - forblir aktuell.`,
    },
    {
      id: 'norsk-vg3-2-6-ext-def-1',
      type: 'definition',
      title: 'Arnulf Øverland (1889-1968)',
      content: `**Biografi:**
- Født 27. april 1889 i Kristiansund
- Debuterte 1911 med «Den ensomme fest»
- Tiltalt for blasfemi 1933, frikjent
- Holdt «Du må ikke sove» 1936
- Fanget i Sachsenhausen 1941-1945
- Døde 25. mars 1968 i Oslo

**Hovedverk:**
- «Den ensomme fest» (1911)
- «Brød og vin» (1919)
- «Berget det blå» (1927)
- «Hustavler» (1929)
- «Den røde front» (1937)
- «Vi overlever alt» (1945)

**Litterære kjennetegn:**
- Tradisjonell verseform
- Klangfull, rytmisk lyrikk
- Presist og kraftfullt språk
- Moralsk alvor
- Politisk engasjement i sen fase
- Ateistisk humanisme

**Sitater:**
«Du må ikke tåle så inderlig vel / den urett som ikke rammer deg selv!»

«Jeg valgte meg april / i den det stirrer slik sårhet / mens wood grow into april stillness.»

**Utmerkelser:**
- Stockholms Universitets gullmedalje
- Æresmedlem i flere organisasjoner
- Nasjonalt ikon for motstanden`,
    },
    {
      id: 'norsk-vg3-2-6-ext-def-2',
      type: 'definition',
      title: 'Retoriske virkemidler i «Du må ikke sove»',
      content: `**Anaforer (gjentakelse):**
Gjentakelsen av «Du må ikke» i begynnelsen av strofene skaper rytme og hamrer inn budskapet.

**Direkte tiltale:**
Diktet henvender seg direkte til «du» - leseren/lytteren. Dette skaper nærhet og ansvarliggjøring.

**Kontraster:**
Kontrasten mellom den trygge tilværelsen «hjemme» og grusomhetene «der ute» understreker at ingen kan lukke øynene.

**Konkrete bilder:**
Øverland bruker konkrete, visuelle bilder fra nazistenes forfølgelser for å gjøre abstrakt ondskap håndgripelig.

**Imperativ (bydeform):**
«Du må ikke...» er en befaling, ikke en oppfordring. Formen understreker det kategoriske i kravet.

**Pathos:**
Diktet appellerer til følelser - medfølelse med ofrene, skam over passivitet, ansvar for å handle.

**Ethos:**
Øverlands egen modige holdning ga ham troverdighet. Han talte ikke bare om å stå opp - han gjorde det selv.

**Klimaks:**
Diktet bygger opp mot en emosjonell topp der leseren ikke kan unngå å føle ansvar.`,
    },
    {
      id: 'norsk-vg3-2-6-ext-example-1',
      type: 'example',
      title: 'Analyse: «Du må ikke sove» (1936)',
      problem: `Analyser diktet «Du må ikke sove» med fokus på form, innhold og retoriske virkemidler.

Jeg ropte derifra:
Du må ikke sitte trygt i ditt hjem
og si: Det er sørgelig, stakkars dem!
Du må ikke tåle så inderlig vel
den urett som ikke rammer deg selv!
Jeg ropte, men du hørte det ikke.`,
      solution: `**Kontekst:**
Diktet/talen ble holdt i 1936, da nazistene hadde sittet med makten i Tyskland i tre år. Forfølgelsen av jøder, sosialister og andre var i gang. Mange i Norge ville ikke se eller høre.

**Form:**
Diktet bruker tradisjonell versform med enderim og fast rytme. Denne formen gjør teksten lettere å huske og gir den en nærmest rituell kraft.

**Innhold:**
Diktet er en appell om å våkne opp til det som skjer i verden. Det kritiserer dem som sier «stakkars dem» uten å handle, dem som godtar urett så lenge den ikke rammer dem selv.

**Retorisk analyse:**

**Anaforer:**
Gjentakelsen av «Du må ikke» skaper en hamrende rytme som understreker det kategoriske i kravet. Det er ikke et forslag - det er en moralsk befaling.

**Direkte tiltale:**
«Du» gjør leseren personlig ansvarlig. Det er ikke «folk» eller «vi» - det er DU som må handle.

**Kontrastene:**
- «Trygt i ditt hjem» vs. grusomhetene utenfor
- «Sørgelig» (passiv medfølelse) vs. aktiv motstand
- «Dem» (de andre) vs. «deg selv» (du er del av menneskeheten)

**Ironien:**
Uttrykket «tåle så inderlig vel» avslører hykleriet i tilsynelatende medlidenhet som ikke fører til handling.

**Avslutningen:**
«Jeg ropte, men du hørte det ikke» - en tragisk konstatering av at varselet kom for sent, eller at det ikke ble hørt.

**Tidsløs relevans:**
Diktet har beholdt sin kraft fordi det taler til en allmennmenneskelig fristelse: å lukke øynene for urett som ikke rammer en selv. Det brukes derfor fortsatt ved minnemarkeringer for Holocaust, og aktualiseres ved nye kriser.

**Sammenheng med Øverlands liv:**
Øverland talte ikke bare - han handlet. Han risikerte (og ofret) friheten for sin overbevisning. Dette gir diktet ekstra tyngde.`,
    },
    {
      id: 'norsk-vg3-2-6-ext-example-2',
      type: 'example',
      title: 'Analyse: «Brød og vin» (1919)',
      problem: `Øverlands tidlige lyrikk var mindre politisk. Analyser diktet «Brød og vin» som eksempel på hans formkunst.`,
      solution: `**Om diktsamlingen:**
«Brød og vin» (1919) representerer Øverlands overgang fra dekadent til mer klassisk og allment tilgjengelig lyrikk. Tittelen alluderer til det elementære, livgivende.

**Formelle kvaliteter:**
Diktene i samlingen viser Øverlands mestring av tradisjonell verskunst:
- Presist rim og rytme
- Musikalsk språkføring
- Balanse mellom det høytidelige og det enkle

**Tematikk:**
- Livets grunnleggende verdier
- Kjærlighet og død
- Naturens skjønnhet og forgjengelighet
- Humanistisk livsbekreftelse

**Diktet «April»:**
«Jeg valgte meg april
i det har våren
slik smerte
Og våren har meg»

Dette diktet viser Øverlands evne til å si mye med få ord. Valget av april - den smertefulle våren - som «sin» måned, uttrykker en eksistensiell holdning.

**Utviklingen:**
Fra «Brød og vin» og utover utviklet Øverland seg mot et mer samfunnsengasjert uttrykk, men uten å miste den formelle mestringen. De politiske diktene fra 1930-tallet er like utsøkt formet som de tidlige.

**Betydning:**
Samlingen etablerte Øverland som en av sin generasjons fremste lyrikere. Den viser at hans politiske engasjement ikke var en motsetning til kunstnerisk kvalitet, men vokste ut av den samme evnen til presist uttrykk.`,
    },
    {
      id: 'norsk-vg3-2-6-ext-tip-1',
      type: 'tip',
      title: 'Øverland i konsentrasjonsleiren',
      content: `**Dikt fra Sachsenhausen**

Øverland satt i Sachsenhausen fra 1941 til 1945. Under umenneskelige forhold fortsatte han å skrive.

**«Vi overlever alt» (1945):**
Samlingen inneholder dikt skrevet i leiren. Noen ble memorert og nedtegnet etter frigjøringen, andre risset inn i tre.

**Temaer:**
- Motstand og utholdenhet
- Solidaritet mellom fangene
- Håp om frigjøring
- Vitnesbyrd om grusomhetene

**Sitater:**
«Døden er intet å frykte...»

«Vi går med hodene bøyde
som kornet for regn,
men vi skal reis oss på ny
når sola stiger igjen.»

**Betydning:**
Diktene fra leiren vitner om kunstens kraft til å overleve selv i de mørkeste tider. Øverland nektet å la nazistene knekke ham åndelig.

**Etter krigen:**
Øverland forble uredd. Han kritiserte dem som hadde samarbeidet, og stilte ubehagelige spørsmål. Ikke alle ville høre.`,
    },
    {
      id: 'norsk-vg3-2-6-ext-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-6-ext-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gjør en retorisk analyse av «Du må ikke sove».',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser og forklar bruken av anaforer i diktet.',
            solution: 'Anaforen «Du må ikke» gjentas i begynnelsen av flere linjer/strofer. Dette skaper rytme, understreker det kategoriske i kravet, og gjør teksten minneverdig.',
          },
          {
            label: 'b',
            task: 'Hvordan brukes pathos (appell til følelser) i diktet?',
            solution: 'Konkrete bilder av lidelse, kontrasten mellom trygghet hjemme og grusomheter ute, direkte tiltale som skaper ansvarsfølelse, og den tragiske avslutningen «du hørte det ikke».',
          },
          {
            label: 'c',
            task: 'Hvordan styrker Øverlands ethos (troverdighet) budskapet?',
            solution: 'Øverland talte ikke bare - han handlet. Hans modige motstand og senere fengsling ga ham moralsk autoritet. Han krevde ikke mer av andre enn av seg selv.',
          },
        ],
        solution: 'Analysen skal vise forståelse for retoriske virkemidler og hvordan de tjener budskapet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-6-ext-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-6-ext-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter «Du må ikke sove»s aktualitet i dag.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke former for «urett som ikke rammer deg selv» finnes i dag?',
            solution: 'Eksempler: Klimakrisen (rammer fattige land hardest), flyktningkrisen, fattigdom i andre land, diskriminering av grupper man ikke tilhører.',
          },
          {
            label: 'b',
            task: 'Er diktet fortsatt relevant? Begrunn svaret.',
            solution: 'Argumenter for: Menneskets tilbøyelighet til å lukke øynene er tidløs. Argumenter mot: Konteksten var spesifikk (nazismen). Eleven bør begrunne sitt syn.',
          },
        ],
        solution: 'Oppgaven krever evne til å aktualisere litteratur og reflektere over moralske spørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-6-ext-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-6-ext-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign Øverlands tidlige og sene lyrikk.',
        hints: [
          'Les dikt fra «Brød og vin» (1919) og «Den røde front» (1937)',
          'Hva er likt i form?',
          'Hva er forskjellig i tema?',
          'Er det samme dikter?',
        ],
        solution: 'Sammenligningen skal vise forståelse for Øverlands utvikling fra estetisk til politisk fokus, uten at den formelle mestringen forsvinner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-6-ext-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-6-ext-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et essay om «Dikterens ansvar».',
        hints: [
          'Ta utgangspunkt i Øverlands liv og verk',
          'Har forfattere et særlig ansvar?',
          'Hva skjer når kunsten blir politisk?',
          'Finn eksempler fra andre perioder eller land',
        ],
        solution: 'Essayet skal vise evne til drøfting med litterære eksempler og selvstendig refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.7 Nordahl Grieg (UTVIDET)
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_2_7_EXTENDED: TextbookChapter = {
  id: 'norsk-vg3-2-7-ext',
  courseId: 'norsk-vg3',
  chapterNumber: '2.7',
  title: 'Nordahl Grieg',
  description: 'Nordahl Griegs liv, forfatterskap og død - dikteren som ga alt i kampen mot fascismen.',
  estimatedMinutes: 75,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
    'skrive litterære analyser og sammenligninger',
    'bruke fagkunnskap i muntlige presentasjoner',
  ],
  content: [
    {
      id: 'norsk-vg3-2-7-ext-intro',
      type: 'text',
      content: `## Nordahl Grieg - dikteren som falt

Nordahl Grieg (1902-1943) var forfatter, journalist, dramatiker og aktivist. Han falt 41 år gammel da flyet han var med på ble skutt ned over Berlin i desember 1943. Hans korte, intense liv og dramatiske død har gjort ham til en nesten mytisk skikkelse i norsk kulturhistorie.

**Oppvekst og bakgrunn:**

Nordahl Grieg ble født 1. november 1902 i Bergen som sønn av en kjøpmann. Han var grandnevø av komponisten Edvard Grieg. Familien var velstående og kulturelt orientert.

Allerede som ungdom viste han litterært talent. Han debuterte som 20-åring med diktsamlingen «Rundt Kap det Gode Haab» (1922), inspirert av sjøfart og eventyr.

**Den unge idealisten:**

Griegs tidlige verk preges av romantisk idealisme og eventyrlyst. Han reiste mye - til sjøs, til Kina, til Sovjetunionen, til Spania. Han søkte etter mening og fellesskap i en tid preget av uro.

Gradvis utviklet han et politisk engasjement på venstresiden. Besøket i Sovjetunionen på 1930-tallet imponerte ham, selv om han senere ble mer kritisk. Han trodde på internasjonalismen, på kampen for de undertrykte.

**Dramatikeren:**

Griegs dramaer vakte oppsikt og kontrovers. De viktigste er:

**«Vår ære og vår makt» (1935):**
Stykket tar opp norsk skipsfart under første verdenskrig. Rederne tjente store penger på å frakte varer for de krigførende, mens sjøfolk døde. Stykket kritiserer profittering på andres ulykke og spør: Hva er ære verdt?

**«Nederlaget» (1937):**
Handler om Paris-kommunen i 1871 - arbeideropprøret som ble slått ned. Stykket utforsker revolusjonens dilemmaer: Kan målet hellige midlene? Hva gjør man når opprøret taper?

Begge dramaene viser påvirkning fra Brechts episke teater, med sanger, direkte henvendelser og politisk budskap.

**Spania-krigen:**

I 1937 reiste Grieg til Spania for å dekke borgerkrigen som journalist. Han støttet republikanerne mot Francos fascister. Opplevelsene preget ham dypt - han så idealisme møte brutal virkelighet.

Diktene fra Spania, som «Spania i våre hjerter», vitner om hans engasjement og sorg over nederlaget.

**Krigen kommer:**

Da Norge ble okkupert i april 1940, flyktet Grieg til England. Der virket han for den norske motstandskampen som taler, skribent og propagandist. Han holdt radiotaler til det okkuperte Norge, og diktene hans ble spredt illegalt hjemme.

**«Til ungdommen»:**

Hans mest kjente dikt, «Til ungdommen» (egentlig «Til de unge»), ble skrevet i 1936. Det er en appell til den oppvoksende generasjonen om å kjempe for fred og rettferdighet:

«Kringsatt av fiender, gå inn i din tid!
Under en blodig storm - vi deg til strid!»

Diktet ble tonesatt av Otto Mortensen og synges fortsatt ved nasjonale anledninger.

**Siste ferd:**

Den 2. desember 1943 var Nordahl Grieg om bord i et britisk bombefly over Berlin som observatør. Flyet ble truffet av tysk luftvern. Det fantes ingen overlevende.

Han var 41 år gammel. Hans død styrket myten om dikteren som ofret alt for saken.

**Ettermælet:**

Grieg ble en nasjonal helt. Gatene er oppkalt etter ham, diktene hans synges. Men ettertiden har også stilt kritiske spørsmål: Var han naiv i sin idealisme? Var dramaene for tendensiøse? Var hans kommunistsympatier problematiske?

Uansett svarer forblir han en sentral skikkelse - dikteren som levde som han skrev.`,
    },
    {
      id: 'norsk-vg3-2-7-ext-def-1',
      type: 'definition',
      title: 'Nordahl Grieg (1902-1943)',
      content: `**Biografi:**
- Født 1. november 1902 i Bergen
- Grandnevø av Edvard Grieg
- Debuterte 1922 med «Rundt Kap det Gode Haab»
- Reiste mye: Kina, Sovjet, Spania
- Dekket Spania-krigen som journalist
- Flyktet til England 1940
- Falt over Berlin 2. desember 1943

**Hovedverk:**

*Lyrikk:*
- «Rundt Kap det Gode Haab» (1922)
- «Norge i våre hjerter» (1929)
- «Til ungdommen» (1936)
- «17. mai 1940»

*Drama:*
- «Vår ære og vår makt» (1935)
- «Nederlaget» (1937)

*Romaner:*
- «Skibet går videre» (1924)
- «Ung må verden ennu være» (1938)

**Litterære kjennetegn:**
- Idealistisk tone
- Politisk engasjement
- Påvirket av Brecht
- Lyrisk kraft
- Dramatisk nerve
- Appell til ungdommen

**Sitat:**
«Kringsatt av fiender, gå inn i din tid!»`,
    },
    {
      id: 'norsk-vg3-2-7-ext-def-2',
      type: 'definition',
      title: 'Episk teater hos Grieg',
      content: `**Brechts innflytelse:**
Grieg var påvirket av Bertolt Brechts episke teater, som søkte å vekke publikum til kritisk tenkning.

**Kjennetegn i Griegs dramaer:**

**Sanger:**
Handlingen avbrytes av sanger som kommenterer og generaliserer. I «Vår ære og vår makt» synger sjøfolkene om sin skjebne.

**Historiske paralleller:**
Ved å legge handlingen til fortiden (første verdenskrig, Paris-kommunen) skaper Grieg distanse som gjør kritikk lettere.

**Tydelige standpunkt:**
Grieg tar klart parti - med arbeiderne, mot profitørene. Dette skiller seg fra Ibsens mer flertydige dramaer.

**Kollektivt fokus:**
Grupper (sjøfolk, kommunarder) er viktigere enn enkeltindivider. Det er klasser som står mot hverandre.

**Kritikk:**
Griegs dramaer er blitt kritisert for å være for tendensiøse - karakterene blir talsmenn for ideer, ikke komplekse mennesker. Men forsvarerne peker på den sceniske kraften og det historiske engasjementet.

**Sammenligning med Ibsen:**
Der Ibsen lot spørsmålene stå åpne, gir Grieg klare svar. Der Ibsen utforsket individets psykologi, fokuserer Grieg på kollektivet. Ulike prosjekter, ulike kvaliteter.`,
    },
    {
      id: 'norsk-vg3-2-7-ext-example-1',
      type: 'example',
      title: 'Analyse: «Til ungdommen» (1936)',
      problem: `Analyser Nordahl Griegs dikt «Til ungdommen» med fokus på budskap, form og retoriske virkemidler.

Kringsatt av fiender,
gå inn i din tid!
Under en blodig storm -
vi deg til strid!

Kanskje du spør i angst,
udekket, åpen:
hva skal jeg kjempe med,
hva er mitt våpen?

Her er ditt vern mot vold,
her er ditt sverd:
troen på livet vårt,
menneskets verd.`,
      solution: `**Kontekst:**
Diktet ble skrevet i 1936, da fascismen var på fremmarsj i Europa. Det er en appell til den unge generasjonen om å kjempe - men med andre våpen enn vold.

**Form:**
Diktet har en enkel, sangbar form med korte linjer og klar rytme. Det ble tonesatt av Otto Mortensen og har blitt nærmest en sekulær salme.

**Budskap:**

**Strofene vi har:**
1. «Kringsatt av fiender» - situasjonen er alvorlig, kamp er nødvendig
2. «Kanskje du spør» - den unges naturlige angst møtes
3. «Her er ditt vern» - svaret: tro på menneskets verdi, ikke vold

**Det paradoksale:**
Diktet oppfordrer til strid, men våpenet er «troen på livet» og «menneskets verd». Det er en humanistisk appell som avviser vold som svar på vold.

**Retoriske virkemidler:**

**Direkte tiltale:**
«Du» og «din» skaper nærhet og ansvarliggjør den unge leseren/lytteren.

**Spørsmål og svar:**
Diktet stiller det spørsmålet den unge selv ville stilt («hva er mitt våpen?») og gir et overraskende svar.

**Kontraster:**
- Fiender vs. vern
- Vold vs. tro
- Angst vs. mot
- Storm vs. verdi

**Bildespråk:**
«Kringsatt av fiender» skaper et bilde av beleiring. «Blodig storm» konkretiserer trusselen.

**Klang og rytme:**
Den sangbare formen gjør diktet lett å huske og fremføre kollektivt.

**Resepsjon:**
Diktet synges fortsatt ved 17. mai, skoleavslutninger og minnemarkeringer. Det har blitt en del av den nasjonale kanonen, men også kritisert for naivitet.

**Aktualitet:**
Spørsmålet om hvordan man møter vold og undertrykkelse er tidløst. Griegs svar - humanisme, tro på menneskets verdi - kan virke idealistisk, men representerer en tradisjon i fredsarbeidet.`,
    },
    {
      id: 'norsk-vg3-2-7-ext-example-2',
      type: 'example',
      title: 'Analyse: «Vår ære og vår makt» (1935)',
      problem: `Analyser Nordahl Griegs drama «Vår ære og vår makt» som politisk teater.`,
      solution: `**Handling:**
Stykket er lagt til første verdenskrig og handler om norsk skipsfart. Rederne tjener enorme summer på å frakte varer for de krigførende, mens sjøfolk dør i torpedoangrep. Konflikten står mellom profitt og menneskeliv.

**Historisk bakgrunn:**
Under første verdenskrig var Norge nøytralt, men norske skip fraktet varer. Over 2000 norske sjøfolk døde. Samtidig tjente rederne seg rike. Dette var kjent, men ikke bearbeidet litterært.

**Tema: Profitt og moral**
Stykket stiller spørsmålet: Hva er æren verdt når den er bygget på andres død? Tittelen er ironisk - «æren» skjuler utbytting.

**Brechtianske trekk:**

**Sanger:**
Sjøfolkene synger om sin skjebne. Sangene løfter de individuelle skjebnene til et kollektivt nivå.

**Tydelig konflikt:**
Skillet mellom redere og sjøfolk er klart. Det er klassekamp.

**Historisk distanse:**
Ved å legge handlingen til fortiden (1914-18) unngår Grieg direkte angrep på navngitte samtidige.

**Kritikk:**
Stykket ble kritisert for å være ensidig. Rederne fremstår som kyniske, sjøfolkene som ofre. Nyansene mangler, mente kritikerne.

**Forsvar:**
Forsvarerne pekte på at stykket avslørte noe virkelig - at norsk velstand delvis var bygget på andres lidelse. Kunsten trenger ikke alltid være balansert.

**Resepsjon:**
Stykket vakte enorm oppmerksomhet og debatt. Det ble spilt på Nationaltheatret og bidro til Griegs gjennombrudd som dramatiker.

**Sammenligning med Ibsen:**
Der Ibsen utforsker individuelle dilemmaer, fokuserer Grieg på kollektive interesser. Der Ibsen er flertydig, er Grieg entydig. Ulike prosjekter.`,
    },
    {
      id: 'norsk-vg3-2-7-ext-tip-1',
      type: 'tip',
      title: 'Griegs radiotaler fra London',
      content: `**Stemmen fra London**

Under krigen holdt Grieg radiotaler til det okkuperte Norge via BBC. Disse talene ble lyttet til i hemmelighet og spredt videre.

**Karakteristiske trekk:**
- Direkte, personlig henvendelse
- Appell til motstand og utholdenhet
- Hyllest til de som kjempet
- Fordømmelse av kollaboratørene
- Håp om frigjøring

**«17. mai 1940»:**
En av hans mest kjente tekster fra krigsårene. Skrevet til nasjonaldagen etter okkupasjonen. Diktet insisterer på at Norge lever selv under okkupasjon.

**Effekt:**
Talene og diktene var viktige for moralen. De minnet folk hjemme om at de ikke var glemt, at verden så hva som skjedde.

**Personlig risiko:**
Grieg kunne ha sittet i trygghet i England. I stedet valgte han å dra på farlige oppdrag, inkludert den siste over Berlin.

**Arven:**
Griegs stemme fra London ble en del av motstandshistorien. Den viste litteraturens kraft til å inspirere og samle.`,
    },
    {
      id: 'norsk-vg3-2-7-ext-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-7-ext-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser «Til ungdommen» med fokus på retoriske virkemidler.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan brukes direkte tiltale i diktet?',
            solution: '«Du», «din», «deg» skaper nærhet og ansvarliggjør leseren direkte. Den unge føler seg tiltalt personlig.',
          },
          {
            label: 'b',
            task: 'Hvordan fungerer spørsmål-svar-strukturen?',
            solution: 'Diktet stiller det spørsmålet den unge selv ville stilt («hva er mitt våpen?») og gir et overraskende svar (tro, ikke vold). Dette skaper dialog.',
          },
          {
            label: 'c',
            task: 'Hva gjør diktet sangbart og minneverdig?',
            solution: 'Kort linjer, klar rytme, enkle rim, gjentakelser, konkrete bilder. Alt bidrar til at diktet fester seg.',
          },
        ],
        solution: 'Analysen skal vise forståelse for diktets retoriske virkemidler og hvordan de tjener budskapet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-7-ext-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-7-ext-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign Nordahl Grieg og Arnulf Øverland.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er felles i deres prosjekt?',
            solution: 'Begge var antifascister som brukte litteraturen i kampen mot nazismen. Begge appellerte til motstand og ansvar.',
          },
          {
            label: 'b',
            task: 'Hva skiller dem som lyrikere?',
            solution: 'Øverland: tradisjonell form, mer pessimistisk tone, ironisk skarphet. Grieg: enklere form, mer idealistisk, kollektiv appell.',
          },
          {
            label: 'c',
            task: 'Hvem er mest «aktuell» i dag? Begrunn.',
            solution: 'Åpent svar, men bør vise evne til å vurdere tekstenes tidløshet og aktualitet.',
          },
        ],
        solution: 'Sammenligningen skal vise evne til litterær komparasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-7-ext-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-7-ext-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter myten om Nordahl Grieg.',
        hints: [
          'Hvordan har hans død påvirket ettermælet?',
          'Er han overvurdert på grunn av omstridenhetene?',
          'Er kritikken av tendenskunsten berettiget?',
          'Hva ville vi tenkt om ham hvis han hadde levd?',
        ],
        solution: 'Diskusjonen bør vise evne til kritisk refleksjon over litteraturhistoriens myteskapning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-7-ext-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-7-ext-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en litterær analyse av et verk av Nordahl Grieg.',
        hints: [
          'Velg et dikt, en scene fra et drama, eller et utdrag fra en roman',
          'Plasser verket i kontekst',
          'Analyser form og innhold',
          'Vurder verkets kvalitet og aktualitet',
        ],
        solution: 'Analysen skal vise evne til selvstendig litterær analyse med bruk av fagterminologi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Eksporter alle utvidede kapitler
export const NORSK_VG3_DEL2_EXTENDED_CHAPTERS = [
  CHAPTER_NORSK_VG3_2_5_EXTENDED,
  CHAPTER_NORSK_VG3_2_6_EXTENDED,
  CHAPTER_NORSK_VG3_2_7_EXTENDED,
];
