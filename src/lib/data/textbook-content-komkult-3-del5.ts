/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 3 (VG3) - Del 5: Påvirkning og propaganda
 *
 * Kapittel 5.1–5.5
 *
 * LK20-kompetansemål:
 * - analysere ulike påvirkningsstrategier og vurdere deres virkning
 * - drøfte propaganda og manipulasjon i historisk og moderne kontekst
 * - utvikle kritisk tenkning og motstandsdyktighet mot påvirkning
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Retoriske påvirkningsstrategier
// ============================================================================

export const CHAPTER_KOMKULT3_5_1: TextbookChapter = {
  id: 'komkult3-5-1',
  courseId: 'komkult-3',
  chapterNumber: '5.1',
  title: 'Retoriske påvirkningsstrategier',
  description: 'Etos, patos, logos, kairos og retoriske virkemidler som brukes for a overbevise et publikum.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere ulike påvirkningsstrategier og vurdere deres virkning',
    'identifisere retoriske virkemidler i ulike teksttyper',
  ],
  content: [
    {
      id: 'kk3-5-1-intro',
      type: 'text',
      content: `## Retoriske påvirkningsstrategier

Retorikk er kunsten a overbevise. Helt siden antikken har mennesker studert hvordan språk, argumentasjon og fremføring kan brukes til a pavirke andre. I et moderne mediesamfunn er retorisk kompetanse viktigere enn noensinne, fordi vi daglig utsettes for forsøk pa a pavirke vare holdninger, meninger og handlinger.

I dette kapittelet skal du lære:
- Hva de klassiske appellformene etos, patos og logos innebærer
- Hvordan kairos og den retoriske situasjonen pavirker kommunikasjon
- Hvilke retoriske virkemidler som brukes i påvirkningskommunikasjon
- Hvordan du kan analysere og gjennomskue retoriske strategier`,
    },
    {
      id: 'kk3-5-1-def-1',
      type: 'definition',
      title: 'De klassiske appellformene',
      content: `**Etos** er avsenderens troverdighet og karakter. Publikum lar seg overbevise av noen de oppfatter som kunnskapsrike, ærlige og velvillige. Etos kan være innledende (rykte og posisjon) eller avledet (bygget opp gjennom selve talen).

**Patos** er appell til følelsene. Avsenderen forsøker a vekke følelser som frykt, medlidenhet, sinne, begeistring eller stolthet for a pavirke publikums holdninger og handlinger.

**Logos** er appell til fornuften. Avsenderen bruker logiske argumenter, fakta, statistikk og resonnementer for a overbevise gjennom rasjonell tenkning.

Aristoteles mente at den mest effektive overtalelsen kombinerer alle tre appellformene, tilpasset situasjonen og publikum.`,
    },
    {
      id: 'kk3-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Appellformene i en klimatale',
      content: `En miljøforkjemper holder tale om klimaendringer:

**Etos:** «Som klimaforsker med 20 ars erfaring ved Universitetet i Oslo, har jeg studert isbreenes tilbaketrekning pa nært hold.»

**Patos:** «Tenk pa barna vare. Hva slags verden overlater vi til dem? Smeltende isbreer, ekstremvær og tapte arter er ikke bare statistikk – det er fremtiden vi stjeler fra neste generasjon.»

**Logos:** «Ifølge FNs klimapanel har den globale gjennomsnittstemperaturen økt med 1,1 grader siden førindustriell tid. Fortsetter utslippene i samme tempo, vil temperaturen stige med ytterligere 2-3 grader innen 2100.»

Legg merke til hvordan alle tre appellformene støtter det samme budskapet, men fra ulike vinkler.`,
    },
    {
      id: 'kk3-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        task: 'Hvilken appellform brukes primært nar en politiker viser til sin lange erfaring og kompetanse for a overbevise velgerne?',
        options: [
          { id: 'a', text: 'Patos – appell til følelsene', isCorrect: false },
          { id: 'b', text: 'Logos – appell til fornuften', isCorrect: false },
          { id: 'c', text: 'Etos – appell til troverdighet', isCorrect: true },
          { id: 'd', text: 'Kairos – appell til timing', isCorrect: false },
        ],
        solution: 'Nar en politiker viser til sin erfaring og kompetanse, bygger vedkommende opp sin troverdighet – altsai etos. Publikum skal overbevises om at politikeren har den bakgrunnen og kunnskapen som trengs for a gjøre gode beslutninger.',
      },
    },
    {
      id: 'kk3-5-1-def-2',
      type: 'definition',
      title: 'Kairos og den retoriske situasjonen',
      content: `**Kairos** betyr «det rette øyeblikket» og handler om timing i kommunikasjon. En dyktig retoriker vet nar det er riktig tidspunkt a fremføre et budskap, og tilpasser innholdet til den aktuelle situasjonen.

Den **retoriske situasjonen** (Lloyd Bitzer) bestar av tre elementer:
- **Det patrængende problem (exigence):** Situasjonen som krever en respons
- **Publikum:** De som kan pavirkes til a handle
- **Begrensninger (constraints):** Rammer som pavirker hva som er mulig a si

Kairos handler om a utnytte den retoriske situasjonen pa riktig tidspunkt – a si de rette ordene til de rette menneskene i det rette øyeblikket.`,
    },
    {
      id: 'kk3-5-1-example-2',
      type: 'example',
      title: 'Eksempel: Kairos i politisk kommunikasjon',
      problem: 'Hvordan kan en politiker utnytte kairos?',
      solution: `Etter en naturkatastrofe holder en politiker en tale der hun argumenterer for økte bevilgninger til beredskap. Timingen er avgjørende: Publikum er følelsesmessig berørt, mediene dekker saken intenst, og det politiske klimaet er mottagelig for handling.

Hadde den samme talen blitt holdt tre maneder senere, nar katastrofen var glemt fra nyhetsbildet, ville den trolig hatt mye mindre gjennomslagskraft. Det er dette kairos handler om – a gripe det retoriske øyeblikket.`,
    },
    {
      id: 'kk3-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        task: 'Forklar begrepet kairos og gi et eget eksempel pa en situasjon der timing er avgjørende for at et budskap skal na frem.',
        hints: ['Tenk pa en aktuell hendelse som skapte debatt.'],
        solution: 'Kairos betyr «det rette øyeblikket» og handler om a tilpasse kommunikasjon til den aktuelle situasjonen og timingen. Et godt eksempel kan være en organisasjon som lanserer en kampanje mot mobbing rett etter at en mobbesak har fatt stor medieoppmerksomhet. Budskapet treffer bedre fordi publikum allerede er engasjert i temaet.',
      },
    },
    {
      id: 'kk3-5-1-def-3',
      type: 'definition',
      title: 'Retoriske virkemidler',
      content: `**Retoriske virkemidler** er spraklige og strukturelle grep som forsterker budskapet:

- **Metafor:** Overført betydning som skaper bilder i hodet («samfunnets søyler», «politisk klima»)
- **Anaforer:** Gjentakelse av ord i begynnelsen av setninger («Vi skal kjempe, vi skal vinne, vi skal aldri gi opp»)
- **Retorisk spørsmal:** Spørsmal der svaret er gitt («Kan vi virkelig akseptere at barn gar sultne?»)
- **Kontrast:** Motsetninger som forsterker budskapet («Ikke hva landet kan gjøre for deg, men hva du kan gjøre for landet»)
- **Triade:** Ting som kommer i tre («Frihet, likhet, brorskap»)
- **Ironi:** Å si det motsatte av hva man mener for a understreke et poeng
- **Hyperbol:** Overdrivelse for a skape effekt`,
    },
    {
      id: 'kk3-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-1-ex-3',
        number: '5.1.3',
        type: 'multiple-choice',
        task: 'Hvilket retorisk virkemiddel brukes i følgende setning: «Vi skal stå opp, vi skal stå sammen, vi skal stå sterke»?',
        options: [
          { id: 'a', text: 'Metafor', isCorrect: false },
          { id: 'b', text: 'Anafor og triade', isCorrect: true },
          { id: 'c', text: 'Ironi', isCorrect: false },
          { id: 'd', text: 'Retorisk spørsmal', isCorrect: false },
        ],
        solution: 'Setningen bruker bade anafor (gjentakelsen av «vi skal sta») og triade (tre ledd: opp, sammen, sterke). Kombinasjonen skaper rytme og forsterker budskapet om fellesskap og styrke.',
      },
    },
    {
      id: 'kk3-5-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Etos** handler om avsenderens troverdighet og karakter
- **Patos** appellerer til publikums følelser
- **Logos** appellerer til fornuft og logikk
- **Kairos** handler om timing og det rette øyeblikket
- Den **retoriske situasjonen** bestar av patrængende problem, publikum og begrensninger
- **Retoriske virkemidler** som metafor, anafor og kontrast forsterker budskapet`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        task: 'Velg en politisk tale eller reklamekampanje og analyser bruken av etos, patos og logos. Hvilken appellform dominerer, og hvorfor tror du avsenderen har valgt denne strategien?',
        hints: ['Tenk pa hvem malgruppa er og hva formalet med kommunikasjonen er.'],
        solution: 'Et godt svar velger en konkret tale eller kampanje og identifiserer spesifikke eksempler pa etos (troverdighetsbygging), patos (følelsesappell) og logos (logisk argumentasjon). Svaret bør drøfte hvorfor den dominerende appellformen passer til malgruppa og formalet. For eksempel dominerer patos ofte i veldedighetskampanjer fordi malet er a vekke medlidenhet og handlingsvilje.',
      },
    },
    {
      id: 'kk3-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        task: 'Skriv to korte avsnitt om det samme temaet – ett som primært bruker patos og ett som primært bruker logos. Forklar deretter hvilke situasjoner som egner seg best for hver strategi.',
        solution: 'Et godt svar viser tydelig forskjell mellom følelsesappell og fornuftsappell for det samme temaet. Patos-avsnittet bruker følelsesladde ord, konkrete enkelthistorier og sterke bilder. Logos-avsnittet bruker fakta, statistikk og logisk argumentasjon. Forklaringen viser forstaelse for at patos passer best nar malet er a motivere til handling, mens logos passer best nar malet er a overbevise skeptikere med rasjonelle argumenter.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Etos', definition: 'Avsenderens troverdighet og karakter som overbevisende kraft.' },
    { term: 'Patos', definition: 'Appell til publikums følelser for a pavirke holdninger og handling.' },
    { term: 'Logos', definition: 'Appell til fornuft gjennom logiske argumenter, fakta og resonnementer.' },
    { term: 'Kairos', definition: 'Det rette øyeblikket – timing i retorisk kommunikasjon.' },
    { term: 'Retorisk situasjon', definition: 'Rammen for kommunikasjon: patrængende problem, publikum og begrensninger.' },
    { term: 'Retoriske virkemidler', definition: 'Spraklige grep som metafor, anafor, kontrast og triade som forsterker budskapet.' },
  ],
};

// ============================================================================
// Kapittel 5.2: Propaganda gjennom historien
// ============================================================================

export const CHAPTER_KOMKULT3_5_2: TextbookChapter = {
  id: 'komkult3-5-2',
  courseId: 'komkult-3',
  chapterNumber: '5.2',
  title: 'Propaganda gjennom historien',
  description: 'Historisk propaganda, totalitære regimer, krigspropaganda og propagandaplakater som virkemiddel.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte propaganda og manipulasjon i historisk og moderne kontekst',
    'analysere kulturelle uttrykk ved hjelp av ulike teoretiske perspektiver',
  ],
  content: [
    {
      id: 'kk3-5-2-intro',
      type: 'text',
      content: `## Propaganda gjennom historien

Propaganda har vært brukt i alle tider for a forme folks oppfatninger, styrke makt og mobilisere befolkninger. Fra religiøse tekster og keiserlige innskrifter til masseproduserte plakater og filmer – propaganda har alltid tilpasset seg de tilgjengelige kommunikasjonskanalene.

I dette kapittelet skal du lære:
- Hva propaganda er og hvordan begrepet har utviklet seg
- Hvordan totalitære regimer brukte propaganda systematisk
- Hvilke teknikker som kjennetegner krigspropaganda
- Hvordan propagandaplakater fungerer som visuell overtalelse`,
    },
    {
      id: 'kk3-5-2-def-1',
      type: 'definition',
      title: 'Propaganda',
      content: `**Propaganda** er systematisk spredning av informasjon, ideer eller synspunkter med det formal a pavirke folks holdninger og handlinger i en bestemt retning. Begrepet stammer fra den katolske kirken, som i 1622 opprettet *Congregatio de Propaganda Fide* (Kongregasjonen for troens utbredelse) for a spre katolisismen.

Propaganda kjennetegnes ved at den:
- Har en tydelig **avsenderinteresse** (politisk, religiøs eller kommersiell)
- Bruker **forenkling** og **gjentakelse** for a feste budskapet
- Appellerer sterkt til **følelser** fremfor rasjonell tenkning
- Ofte presenterer et **ensidig** bilde av virkeligheten
- Kan inneholde bade sant og usant innhold`,
    },
    {
      id: 'kk3-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Propagandateknikker i nazistisk Tyskland',
      content: `Joseph Goebbels, riksminister for propaganda i Nazi-Tyskland (1933–1945), utviklet et sofistikert propagandaapparat som tok i bruk alle tilgjengelige medier:

**Film:** Leni Riefenstahls «Viljens triumf» (1935) fremstilte Hitler og nazipartiet som Tysklands frelsere gjennom storslatte bilder fra partikongressen i Nurnberg.

**Plakater:** Masseproduserte plakater med sterke visuelle symboler – hakekorset, ørnen, heroiske soldatfigurer – skapte en følelse av nasjonal styrke og samhold.

**Radio:** «Volksempfänger» (folkeradioen) ble produsert billig slik at alle hjem kunne motta nazistenes sendinger. Radio ble det viktigste verktøyet for a na massene direkte.

**Aviser:** All presse ble kontrollert, og kritiske stemmer ble fjernet. Ensretting sikret at bare godkjente budskap ble publisert.

Fellesnevneren var **gjentakelse**, **forenkling** og **demonisering av fienden**.`,
    },
    {
      id: 'kk3-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        task: 'Hva stammer ordet «propaganda» opprinnelig fra?',
        options: [
          { id: 'a', text: 'Romerske militærkampanjer', isCorrect: false },
          { id: 'b', text: 'Den katolske kirkens arbeid med a spre troen', isCorrect: true },
          { id: 'c', text: 'Det franske revolusjonens slagord', isCorrect: false },
          { id: 'd', text: 'Sovjetunionens propagandaministerium', isCorrect: false },
        ],
        solution: 'Ordet «propaganda» stammer fra den katolske kirken, som i 1622 opprettet Congregatio de Propaganda Fide (Kongregasjonen for troens utbredelse). Opprinnelig handlet det om a spre den katolske troen, men begrepet har senere fatt en bredere – og ofte negativ – betydning.',
      },
    },
    {
      id: 'kk3-5-2-def-2',
      type: 'definition',
      title: 'Propagandateknikker',
      content: `Historikere og kommunikasjonsforskere har identifisert flere gjennomgaende propagandateknikker:

**Demonisering:** Fienden fremstilles som ond, farlig eller undermenneskelig for a rettferdiggjøre aggresjon og skape frykt.

**Glorifisering:** Egen nasjon, leder eller ideologi fremstilles som overlegen og moralsk ren.

**Bandwagon (hopp pa vogna):** Budskapet fremstilles som noe alle støtter – «alle er med, bli med du ogsa».

**Store løgner:** Pavirkeren gjentar en stor usannhet sa ofte at folk begynner a tro pa den (tilskrevet Goebbels).

**Syndebukk-teknikken:** Komplekse problemer tilskrives en bestemt gruppe for a avlede oppmerksomheten fra de egentlige arssakene.

**Appell til autoritet:** Budskapet knyttes til respekterte skikkelser for a oke troverdigheten.`,
    },
    {
      id: 'kk3-5-2-example-2',
      type: 'example',
      title: 'Eksempel: Krigspropaganda under første verdenskrig',
      problem: 'Hvordan ble propagandaplakater brukt under første verdenskrig?',
      solution: `Under første verdenskrig (1914–1918) ble propagandaplakater et av de viktigste virkemidlene for a mobilisere befolkningen:

**Rekruttering:** Den britiske plakaten «Lord Kitchener Wants You» (1914) med en pekende finger direkte mot betrakteren ble ikonisk. Den amerikanske versjonen «Uncle Sam Wants You» (1917) brukte samme teknikk.

**Demonisering av fienden:** Tyske soldater ble fremstilt som brutale «hunner» som truet sivilisasjonen. Overdrevne historier om overgrep ble brukt for a styrke kampviljen.

**Økonomisk mobilisering:** Plakater oppfordret sivilbefolkningen til a kjøpe krigsobligasjoner, spare mat og støtte krigsinnsatsen.

Plakatene brukte sterke farger, forenklede bilder og direkte henvendelser for a appellere til følelser som patriotisme, frykt og plikt.`,
    },
    {
      id: 'kk3-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        task: 'Velg en propagandateknikk (demonisering, glorifisering, bandwagon, store løgner eller syndebukk) og forklar hvordan den har blitt brukt i et historisk eksempel. Drøft hvorfor teknikken var effektiv.',
        hints: ['Tenk pa hva teknikken appellerer til – frykt, tilhørighet eller autoritet.'],
        solution: 'Et godt svar velger en spesifikk teknikk og kobler den til et konkret historisk eksempel. For eksempel kan syndebukk-teknikken illustreres med nazistenes fremstilling av jøder som ansvarlige for Tysklands økonomiske problemer etter første verdenskrig. Teknikken var effektiv fordi den ga en enkel forklaring pa et komplekst problem, kanaliserte frustrasjon mot en identifiserbar gruppe, og ble forsterket gjennom gjentakelse i alle mediekanaler.',
      },
    },
    {
      id: 'kk3-5-2-text-2',
      type: 'text',
      title: 'Propaganda i totalitære regimer',
      content: `### Propaganda i totalitære regimer

Totalitære regimer kjennetegnes av fullstendig statlig kontroll over informasjon og medier. Bade nazismen, stalinismen og maoismen utviklet omfattende propagandaapparater:

**Sovjetunionen:** Under Stalin ble propaganda brukt til a fremme lederkulten, industrialiseringen og den kommunistiske ideologien. Kunstnere, forfattere og filmskapere ble palagt a følge «sosialistisk realisme» – en kunstform som glorifiserte arbeidere og staten.

**Kina:** Under Mao Zedong ble «Den lille røde boka» distribuert i milliarder av eksemplarer. Kulturrevolusjonen (1966–1976) brukte massemobilisering og propaganda til a undertrykke opposisjon.

**Nord-Korea:** Et av verdens mest isolerte propagandasystemer, der all informasjon kontrolleres av staten og lederkulten opprettholdes gjennom skoler, medier og offentlig kunst.

Felles for alle er **informasjonsmonopol**, **lederkult**, **fiendebilde** og **historieforvrengning**.`,
    },
    {
      id: 'kk3-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-2-ex-3',
        number: '5.2.3',
        type: 'multiple-choice',
        task: 'Hva er et fellestrekk ved propaganda i totalitære regimer?',
        options: [
          { id: 'a', text: 'Mangfold av uavhengige medier', isCorrect: false },
          { id: 'b', text: 'Fri tilgang til utenlandske nyheter', isCorrect: false },
          { id: 'c', text: 'Statlig informasjonsmonopol og lederkult', isCorrect: true },
          { id: 'd', text: 'Åpen debatt om ideologiske spørsmal', isCorrect: false },
        ],
        solution: 'Totalitære regimer kjennetegnes av statlig informasjonsmonopol der all informasjon kontrolleres. Lederkulten – dyrkingen av den øverste lederen som ufeilbarlig – er et gjennomgaende trekk i bade Stalins Sovjet, Maos Kina og Kim-dynastiet i Nord-Korea.',
      },
    },
    {
      id: 'kk3-5-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Propaganda** er systematisk spredning av budskap for a pavirke folks holdninger og handlinger
- Begrepet stammer fra den katolske kirkens misjonsarbeid pa 1600-tallet
- **Propagandateknikker** inkluderer demonisering, glorifisering, bandwagon, store løgner og syndebukk
- **Krigspropaganda** brukte plakater, film og radio til a mobilisere befolkningen
- **Totalitære regimer** kjennetegnes av informasjonsmonopol, lederkult og historieforvrengning`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        task: 'Sammenlign propagandabruken i to ulike totalitære regimer. Hvilke likheter og forskjeller finner du i metoder, medier og budskap?',
        hints: ['Velg for eksempel Nazi-Tyskland og Sovjetunionen, og se pa hvilke medier de prioriterte.'],
        solution: 'Et godt svar sammenligner to konkrete regimer og identifiserer bade likheter (informasjonsmonopol, lederkult, fiendebilde) og forskjeller (ideologisk innhold, foretrukne medier, kunstnerisk stil). For eksempel brukte bade nazistene og sovjeterne film som propagandaverktøy, men mens nazistene la vekt pa raseteori og nasjonal overlegenhet, fremmet sovjeterne arbeiderklassens kamp og kommunistisk utopi.',
      },
    },
    {
      id: 'kk3-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        task: 'Drøft om propaganda bare tilhører historien, eller om den fortsatt finnes i moderne demokratier. Gi eksempler som støtter argumentasjonen din.',
        solution: 'Et godt svar argumenterer for at propaganda ogsa finnes i moderne demokratier, selv om den tar andre former. Eksempler kan inkludere politisk reklame, statlig informasjonskontroll i krigstid, eller nasjonalistisk retorikk. Svaret bør ogsa drøfte grensen mellom propaganda og legitim politisk kommunikasjon, og vise forstaelse for at propaganda er et gradsspørsmal heller enn en absolutt kategori.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Propaganda', definition: 'Systematisk spredning av budskap for a pavirke holdninger og handlinger i en bestemt retning.' },
    { term: 'Demonisering', definition: 'Propagandateknikk der fienden fremstilles som ond, farlig eller undermenneskelig.' },
    { term: 'Glorifisering', definition: 'Propagandateknikk der egen nasjon, leder eller ideologi fremstilles som overlegen.' },
    { term: 'Bandwagon', definition: 'Propagandateknikk der budskapet fremstilles som noe alle støtter.' },
    { term: 'Totalitært regime', definition: 'Styreform der staten har fullstendig kontroll over informasjon, medier og samfunnsliv.' },
    { term: 'Lederkult', definition: 'Systematisk dyrking av en leder som ufeilbarlig og overmenneskelig.' },
  ],
};

// ============================================================================
// Kapittel 5.3: Moderne påvirkningsteknikker
// ============================================================================

export const CHAPTER_KOMKULT3_5_3: TextbookChapter = {
  id: 'komkult3-5-3',
  courseId: 'komkult-3',
  chapterNumber: '5.3',
  title: 'Moderne påvirkningsteknikker',
  description: 'Nudging, framing, spin, astroturfing og datadrevet pavirkning som Cambridge Analytica.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analysere ulike påvirkningsstrategier og vurdere deres virkning',
    'drøfte propaganda og manipulasjon i historisk og moderne kontekst',
  ],
  content: [
    {
      id: 'kk3-5-3-intro',
      type: 'text',
      content: `## Moderne påvirkningsteknikker

I den digitale tidsalderen har påvirkningsteknikkene blitt mer sofistikerte og vanskeligere a gjennomskue. Moderne pavirkning handler ikke bare om apne overtalelsesforsøk, men ogsa om subtile teknikker som former vare valg uten at vi er klar over det.

I dette kapittelet skal du lære:
- Hvordan nudging brukes til a styre adferd
- Hva framing og spin innebærer i politisk kommunikasjon
- Hvordan astroturfing skaper falsk grasrotengasjement
- Hvordan datadrevet pavirkning som Cambridge Analytica fungerer`,
    },
    {
      id: 'kk3-5-3-def-1',
      type: 'definition',
      title: 'Nudging',
      content: `**Nudging** (fra engelsk «dult» eller «puff») er en teknikk for a pavirke folks adferd uten a forby eller pallegge noe. Begrepet ble popularisert av økonomen Richard Thaler og juristen Cass Sunstein i boken *Nudge* (2008).

Nudging bygger pa innsikt fra adferdspsykologi: Mennesker tar ikke alltid rasjonelle valg, men pavirkes av hvordan valgene er utformet. Ved a endre **valgarkitekturen** – maten valgene presenteres pa – kan man pavirke hva folk velger, uten a fjerne valgfriheten.

Eksempler:
- Sunn mat plasseres i øyehøyde i kantinen (du kan fortsatt velge godteri)
- Organdonasjon er standard med mindre du aktivt melder deg ut
- Strømforbruk vises med smilefjes sammenlignet med naboene`,
    },
    {
      id: 'kk3-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Nudging i hverdagen',
      content: `**I supermarkedet:** Dyre varer plasseres i øyehøyde, billigere alternativer nederst. Godteri ved kassen pavirker impulskjøp.

**Pa nettsider:** «Anbefalt»-valget er ofte det dyreste abonnementet. «Alle velger dette!» skaper bandwagon-effekt. Mørke designmønstre (dark patterns) gjør det vanskelig a si nei.

**I offentlig politikk:** Norge har opt-out-system for organdonasjon (fra 2023), noe som øker antall donorer sammenlignet med opt-in-systemer.

Nudging er kontroversielt fordi det pavirker uten at folk nødvendigvis er klar over det. Kritikere mener det er manipulasjon, mens forkjempere hevder at valgarkitektur alltid finnes – spørsmalet er hvem som designer den og i hvis interesse.`,
    },
    {
      id: 'kk3-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner nudging som påvirkningsteknikk?',
        options: [
          { id: 'a', text: 'Tvang og forbud som begrenser valgfriheten', isCorrect: false },
          { id: 'b', text: 'Endring av valgarkitekturen uten a fjerne valgfriheten', isCorrect: true },
          { id: 'c', text: 'Apne argumenter og debatt for a overbevise', isCorrect: false },
          { id: 'd', text: 'Økonomiske insentiver som belønner riktig adferd', isCorrect: false },
        ],
        solution: 'Nudging kjennetegnes av at valgarkitekturen endres slik at ønsket adferd blir det enkleste valget, men uten at andre alternativer fjernes. Forskjellen fra tvang er at du fortsatt kan velge fritt, og forskjellen fra insentiver er at det ikke tilbys belønning eller straff.',
      },
    },
    {
      id: 'kk3-5-3-def-2',
      type: 'definition',
      title: 'Framing og spin',
      content: `**Framing** (innramming) handler om a presentere et saksforhold i en bestemt ramme som pavirker hvordan det oppfattes. Samme fakta kan fremstilles pa vidt forskjellige mater ved a velge ulike ord, kontekster og vinklinger.

Eksempel: Glasset er «halvfullt» (positivt framing) eller «halvtomt» (negativt framing). Samme virkelighet, ulik oppfatning.

**Spin** er en beslektet teknikk der kommunikasjonsradgivere bevisst presenterer informasjon pa den mest fordelaktige maten for sin oppdragsgiver. Spin innebærer ikke nødvendigvis løgn, men selektiv bruk av fakta, strategisk timing og kontrollert budskapsformidling.

Bade framing og spin er sentrale verktøy i moderne politisk kommunikasjon, PR og nyhetsformidling.`,
    },
    {
      id: 'kk3-5-3-example-2',
      type: 'example',
      title: 'Eksempel: Framing i innvandringsdebatt',
      problem: 'Hvordan kan framing forme oppfatningen av innvandring?',
      solution: `Samme fenomen kan rammes inn pa to svært ulike mater:

**Positiv framing:** «Arbeidsinnvandring bidrar til økonomisk vekst, fyller viktige jobber i helsevesenet og beriker det kulturelle mangfoldet i samfunnet.»

**Negativ framing:** «Masseinnvandring presser offentlige tjenester, truer norske arbeidsplasser og utfordrer den nasjonale identiteten.»

Begge fremstillingene kan bygge pa fakta, men velger ulike aspekter a fremheve. Ordvalgene («arbeidsinnvandring» vs. «masseinnvandring», «beriker» vs. «truer») styrer leserens følelsesmessige reaksjon. Den som kontrollerer innrammingen, har stor makt over debatten.`,
    },
    {
      id: 'kk3-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        task: 'Velg et aktuelt politisk tema og skriv to korte tekster om det – en med positivt framing og en med negativt framing. Analyser hvilke virkemidler du bruker i hver versjon.',
        hints: ['Tenk pa ordvalg, hvilke fakta du vektlegger, og hvilke følelser du appellerer til.'],
        solution: 'Et godt svar viser to tydelig forskjellige fremstillinger av det samme temaet. Analysen bør identifisere spesifikke virkemidler: ordvalg (positive vs. negative konnotasjoner), selektiv bruk av fakta, valg av kilder og perspektiv, og appellformer. Svaret bør ogsa reflektere over hvordan framing pavirker leserens oppfatning uten a endre de underliggende faktaene.',
      },
    },
    {
      id: 'kk3-5-3-def-3',
      type: 'definition',
      title: 'Astroturfing og falsk grasrot',
      content: `**Astroturfing** er en påvirkningsteknikk der en organisasjon, et selskap eller en stat skaper inntrykk av spontant grasrotengasjement som egentlig er iscenesatt og finansiert ovenfra. Navnet kommer fra «AstroTurf» (kunstgress) – en motsetning til ekte grasrot (grassroots).

Astroturfing kan ta mange former:
- **Falske brukerkontoer** pa sosiale medier som sprer et bestemt budskap
- **Betalte kommentatorer** som gir inntrykk av bred folkelig støtte
- **Organisasjoner med villedende navn** som «Foreningen for ren luft» (finansiert av industrien)
- **Falske anmeldelser og underskriftskampanjer** som skaper inntrykk av folkelig engasjement

Malet er a pavirke opinionen ved a gi inntrykk av at «vanlige folk» støtter et standpunkt som egentlig fremmes av mektige aktører.`,
    },
    {
      id: 'kk3-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-3-ex-3',
        number: '5.3.3',
        type: 'multiple-choice',
        task: 'Hva er astroturfing?',
        options: [
          { id: 'a', text: 'Ekte grasrotmobilisering gjennom sosiale medier', isCorrect: false },
          { id: 'b', text: 'Iscenesatt folkelig engasjement finansiert av mektige aktører', isCorrect: true },
          { id: 'c', text: 'En type politisk reklame pa TV', isCorrect: false },
          { id: 'd', text: 'Journalistisk metode for a avdekke skjulte agendaer', isCorrect: false },
        ],
        solution: 'Astroturfing betyr at mektige aktører (selskaper, stater, organisasjoner) skaper falsk inntrykk av folkelig engasjement. Navnet er en ordlek pa «AstroTurf» (kunstgress) kontra ekte grasrot (grassroots), og viser til at engasjementet er kunstig, ikke organisk.',
      },
    },
    {
      id: 'kk3-5-3-text-2',
      type: 'text',
      title: 'Datadrevet pavirkning: Cambridge Analytica',
      content: `### Datadrevet pavirkning: Cambridge Analytica

I 2018 avslørte mediene at det britiske selskapet **Cambridge Analytica** hadde samlet inn persondata fra millioner av Facebook-brukere uten deres samtykke, og brukt denne informasjonen til malstyrt politisk pavirkning.

**Hva skjedde:**
- Data fra rundt 87 millioner Facebook-profiler ble hentet gjennom en tilsynelatende uskyldig personlighetsquiz
- Dataene ble brukt til a bygge detaljerte psykologiske profiler av velgere
- Profilerne ble brukt til a sende skreddersydde politiske budskap til enkeltpersoner
- Selskapet arbeidet bade med Donald Trumps presidentvalgkampanje (2016) og Brexit-kampanjen

**Hvorfor dette er problematisk:**
- Persondata ble samlet inn uten informert samtykke
- Individtilpasset pavirkning gjør det vanskelig a gjennomskue manipulasjonen
- Algoritmene forsterker polarisering ved a gi folk ulike virkelighetsbilder
- Demokratisk debatt forutsetter at alle har tilgang til samme informasjon

Cambridge Analytica-skandalen førte til økt bevissthet om datavern og påvirkning, og bidro til innføringen av strengere personvernlovgivning som GDPR i Europa.`,
    },
    {
      id: 'kk3-5-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Nudging** pavirker adferd gjennom endring av valgarkitekturen uten a fjerne valgfrihet
- **Framing** handler om a presentere fakta i en bestemt ramme som styrer oppfatningen
- **Spin** er strategisk presentasjon av informasjon til fordel for avsenderen
- **Astroturfing** er iscenesatt grasrotengasjement finansiert av mektige aktører
- **Datadrevet pavirkning** bruker persondata til a sende skreddersydde politiske budskap
- Cambridge Analytica-skandalen viste farene ved uregulert bruk av persondata i politisk pavirkning`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        task: 'Drøft forskjellen mellom nudging og propaganda. Er nudging en akseptabel form for pavirkning i et demokrati? Begrunn svaret ditt.',
        hints: ['Tenk pa valgfrihet, apenhet og hvem som har definisjonsmakt.'],
        solution: 'Et godt svar identifiserer at nudging i prinsippet bevarer valgfriheten (du kan velge annerledes), mens propaganda ofte bygger pa informasjonskontroll og forenkling. Likevel kan nudging ogsa være problematisk hvis den skjer uten folks viten og uten demokratisk kontroll. Svaret bør drøfte grenser for akseptabel nudging (apenhet, malsetting for fellesskapet) og vise at det er et gradsspørsmal mellom hjelpsomme «dult» og manipulasjon.',
      },
    },
    {
      id: 'kk3-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        task: 'Forklar hva Cambridge Analytica-skandalen gikk ut pa, og drøft hvilke konsekvenser datadrevet pavirkning kan ha for demokratiet.',
        solution: 'Et godt svar forklarer at Cambridge Analytica samlet inn persondata fra millioner av Facebook-brukere uten samtykke, bygde psykologiske profiler og brukte dem til malstyrt politisk pavirkning under bade det amerikanske presidentvalget og Brexit. Konsekvensene for demokratiet inkluderer at velgere pavirkes uten a vite det, at ulike grupper mottar ulike virkelighetsbilder (som vanskeliggjør felles debatt), og at mektige aktører med data og teknologi far uforholdsmessig stor makt over den demokratiske prosessen.',
      },
    },
    {
      id: 'kk3-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-3-ex-6',
        number: '5.3.6',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom framing og løgn?',
        options: [
          { id: 'a', text: 'Framing er alltid sannferdig, løgn er alltid usant', isCorrect: false },
          { id: 'b', text: 'Framing presenterer ekte fakta i en styrt kontekst, løgn fabrikkerer fakta', isCorrect: true },
          { id: 'c', text: 'Det er ingen forskjell – begge er former for manipulasjon', isCorrect: false },
          { id: 'd', text: 'Framing brukes bare i reklame, løgn brukes i politikk', isCorrect: false },
        ],
        solution: 'Framing handler om a presentere reelle fakta i en bestemt kontekst som styrer oppfatningen, mens løgn innebærer a fabrikkere usannheter. Framing velger hvilke fakta som vektlegges og hvordan de presenteres, men trenger ikke inneholde noe usant. Det gjør framing vanskeligere a avsløre enn direkte løgn, fordi hvert enkelt faktum kan være korrekt.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Nudging', definition: 'Pavirkningsteknikk som endrer valgarkitekturen for a styre adferd uten a fjerne valgfrihet.' },
    { term: 'Framing', definition: 'Innramming av fakta i en bestemt kontekst som styrer hvordan informasjonen oppfattes.' },
    { term: 'Spin', definition: 'Strategisk presentasjon av informasjon til fordel for avsenderen.' },
    { term: 'Astroturfing', definition: 'Iscenesatt folkelig engasjement som er finansiert og styrt av mektige aktører.' },
    { term: 'Cambridge Analytica', definition: 'Selskap som brukte ulovlig innhentede Facebook-data til malstyrt politisk pavirkning.' },
    { term: 'Valgarkitektur', definition: 'Maten valg er organisert og presentert, som pavirker hva folk velger.' },
  ],
};

// ============================================================================
// Kapittel 5.4: Reklame og forbrukerpåvirkning
// ============================================================================

export const CHAPTER_KOMKULT3_5_4: TextbookChapter = {
  id: 'komkult3-5-4',
  courseId: 'komkult-3',
  chapterNumber: '5.4',
  title: 'Reklame og forbrukerpåvirkning',
  description: 'Skjult reklame, influensere, produktplassering, grønnvasking og forbrukerpåvirkningens mekanismer.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere ulike påvirkningsstrategier og vurdere deres virkning',
    'vurdere kritisk kommersielle budskap og skjult reklame',
  ],
  content: [
    {
      id: 'kk3-5-4-intro',
      type: 'text',
      content: `## Reklame og forbrukerpåvirkning

Vi lever i et samfunn gjennomsyret av kommersielle budskap. Reklame er ikke bare de apne annonsene vi ser pa TV og i aviser – stadig mer av den kommersielle pavirkningen skjer i former som er vanskelige a gjennomskue. Influensere, produktplassering, native advertising og grønnvasking er alle eksempler pa at grensene mellom innhold og reklame viskes ut.

I dette kapittelet skal du lære:
- Hvordan skjult reklame fungerer og hvorfor den er effektiv
- Influensernes rolle i moderne markedsføring
- Hva produktplassering og native advertising er
- Hvordan grønnvasking villeder forbrukere`,
    },
    {
      id: 'kk3-5-4-def-1',
      type: 'definition',
      title: 'Skjult reklame',
      content: `**Skjult reklame** er kommersielle budskap som ikke tydelig fremstar som reklame. I motsetning til tradisjonelle annonser, som er merket og avgrenset, blandes skjult reklame inn i redaksjonelt innhold, underholdning eller personlige anbefalinger.

Skjult reklame er problematisk fordi:
- Mottakeren senker det **kritiske filteret** nar vedkommende ikke oppfatter noe som reklame
- Det bryter med prinsippet om at reklame skal være **tydelig merket**
- Det undergraver **tilliten** mellom avsender og publikum
- Det er vanskelig a regulere, særlig pa digitale plattformer

Markedsføringsloven krever at all reklame skal være tydelig merket, men handhevelsen er utfordrende i den digitale virkeligheten.`,
    },
    {
      id: 'kk3-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Skjult reklame pa sosiale medier',
      content: `En populær Instagram-profil med 200 000 følgere legger ut et bilde av seg selv pa ferie med et bestemt klesmerke godt synlig. Teksten handler om ferieminner og solnedgang, uten a nevne at innlegget er sponset.

**Hva gjør dette problematisk?**
- Følgerne oppfatter det som en personlig anbefaling, ikke reklame
- Det kritiske filteret aktiveres ikke fordi innlegget ser ut som vanlig innhold
- Influenseren har fatt betalt, men merker ikke innlegget som «annonse»
- Unge følgere er særlig sarbare fordi de ser influenseren som en venn eller forbilde

Etter innstramming av reglene er influensere na palagt a merke betalte samarbeid med «#annonse» eller «Betalt samarbeid med [merke]», men mange omgar reglene ved a gjøre merkingen lite synlig.`,
    },
    {
      id: 'kk3-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        task: 'Hvorfor er skjult reklame mer effektiv enn apne annonser?',
        options: [
          { id: 'a', text: 'Fordi skjult reklame inneholder mer informasjon', isCorrect: false },
          { id: 'b', text: 'Fordi mottakeren ikke aktiverer det kritiske filteret mot reklame', isCorrect: true },
          { id: 'c', text: 'Fordi skjult reklame er billigere a produsere', isCorrect: false },
          { id: 'd', text: 'Fordi lovverket tillater sterkere pastander i skjult reklame', isCorrect: false },
        ],
        solution: 'Skjult reklame er effektiv fordi mottakeren oppfatter den som noe annet enn reklame – for eksempel en personlig anbefaling eller redaksjonelt innhold. Nar mottakeren ikke vet at det er reklame, senkes det kritiske filteret som normalt gjør oss mer skeptiske til kommersielle budskap.',
      },
    },
    {
      id: 'kk3-5-4-def-2',
      type: 'definition',
      title: 'Influensermarkedsføring',
      content: `**Influensermarkedsføring** er en form for markedsføring der bedrifter betaler personer med stor rekkevidde pa sosiale medier for a promotere produkter eller tjenester. Influensere kan være alt fra kjendiser med millioner av følgere til «mikro-influensere» med noen tusen.

Influensermarkedsføring bygger pa:
- **Parasosial relasjon:** Følgerne føler en personlig tilknytning til influenseren, som om de var en venn
- **Tillitsoverføring:** Tillit til influenseren overføres til produktet
- **Sosial bevisføring:** «Hvis hun bruker det, ma det være bra»
- **Autentisitet:** Produktet virker som en naturlig del av influenserens liv, ikke en fremmed reklame

Ifølge Medietilsynets undersøkelser er barn og unge særlig utsatt for influenserpavirkning fordi de i mindre grad gjennomskuer de kommersielle motivene.`,
    },
    {
      id: 'kk3-5-4-example-2',
      type: 'example',
      title: 'Eksempel: Produktplassering og native advertising',
      problem: 'Hva er forskjellen mellom produktplassering og native advertising?',
      solution: `**Produktplassering** er integrering av et produkt eller merke i underholdningsinnhold som film, TV-serier eller dataspill. For eksempel drikker James Bond alltid et bestemt ølmerke, og karakterer i norske TV-serier bruker bestemte mobiltelefoner. Produktet er «naturlig» til stede i handlingen, men plasseringen er betalt.

**Native advertising** (redaksjonell reklame) er annonser som er utformet for a ligne det redaksjonelle innholdet pa nettsiden de publiseres pa. En nettavis kan for eksempel publisere en «artikkel» om hudpleie som er betalt av et kosmetikkmerke, med layout og stil som matcher avisens egne artikler.

Begge teknikkene fungerer ved a gjøre det kommersielle budskapet til en del av innholdet, slik at mottakeren ikke umiddelbart oppfatter det som reklame.`,
    },
    {
      id: 'kk3-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        task: 'Forklar hva en parasosial relasjon er, og drøft hvordan den gjør influensermarkedsføring effektiv.',
        hints: ['Tenk pa hvordan du opplever influensere du følger – føles det som en venn?'],
        solution: 'En parasosial relasjon er en ensidig følelsesmessig tilknytning der en person føler at de kjenner en medieperson (som en influenser), selv om forholdet ikke er gjensidig. Dette gjør influensermarkedsføring effektiv fordi følgerne behandler influenserens produktanbefalinger som rad fra en venn, ikke som betalt reklame. Tilliten som er bygget opp over tid overføres til produktet, og det kritiske filteret mot kommersielle budskap aktiveres ikke pa samme mate.',
      },
    },
    {
      id: 'kk3-5-4-def-3',
      type: 'definition',
      title: 'Grønnvasking',
      content: `**Grønnvasking** (greenwashing) er nar en bedrift eller organisasjon gir et villedende inntrykk av a være mer miljøvennlig enn den faktisk er. Grønnvasking kan skje gjennom:

- **Vage pastander:** «Miljøvennlig» eller «naturlig» uten dokumentasjon
- **Irrelevante miljømerker:** Selvlagde logoer og symboler som gir inntrykk av sertifisering
- **Skjulte bytteforhold:** Fremheving av ett miljøtiltak mens større miljøproblemer ignoreres
- **Grønn markedsføring:** Bilder av natur, grønne farger og bærekraftsretorikksom dekker over miljøskadelig praksis
- **Karbonavlat-retorikk:** Bedrifter hevder a være «klimanøytrale» gjennom tvilsom klimakompensasjon

Grønnvasking er problematisk fordi det undergraver forbrukernes mulighet til a ta informerte valg, og fordi det svekker tilliten til bedrifter som faktisk gjør reelle miljøtiltak.`,
    },
    {
      id: 'kk3-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-4-ex-3',
        number: '5.4.3',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er et eksempel pa grønnvasking?',
        options: [
          { id: 'a', text: 'Et selskap rapporterer arlig om sine CO2-utslipp til myndighetene', isCorrect: false },
          { id: 'b', text: 'Et oljeselskap lager reklame om sine smaaskalaproduksjoner av solenergi mens kjernevirksomheten er fossil', isCorrect: true },
          { id: 'c', text: 'En matbutikk sluttar a selge plastposer', isCorrect: false },
          { id: 'd', text: 'En kommune investerer i sykkelveier', isCorrect: false },
        ],
        solution: 'Grønnvasking innebærer a gi et villedende inntrykk av miljøvennlighet. Et oljeselskap som lager reklame om smaaskalaproduksjon av solenergi, mens kjernevirksomheten fortsatt er fossil, skjuler det store bildet bak et lite, grønt tiltak. De andre alternativene er enten faktiske miljøtiltak eller palagt rapportering.',
      },
    },
    {
      id: 'kk3-5-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Skjult reklame** er kommersielle budskap som ikke tydelig fremstar som reklame
- **Influensermarkedsføring** bygger pa parasoiale relasjoner og tillitsoverføring
- **Produktplassering** integrerer merker i underholdningsinnhold
- **Native advertising** er annonser utformet for a ligne redaksjonelt innhold
- **Grønnvasking** gir villedende inntrykk av miljøvennlighet
- Unge forbrukere er særlig sarbare for skjulte kommersielle budskap`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-4-ex-4',
        number: '5.4.4',
        type: 'classic',
        task: 'Finn et eksempel pa influensermarkedsføring pa sosiale medier (Instagram, TikTok, YouTube). Analyser hvordan produktet presenteres, og vurder om det er tydelig merket som reklame.',
        hints: ['Se etter hashtags som #annonse, #ad eller «Betalt samarbeid».'],
        solution: 'Et godt svar identifiserer et konkret eksempel og analyserer hvordan produktet er integrert i innholdet: Er det naturlig plassert? Bruker influenseren personlige anbefalinger? Er det merket som reklame? Svaret bør ogsa vurdere om merkingen er tydelig nok for malgruppa, og drøfte om unge følgere forstår at det er et betalt samarbeid.',
      },
    },
    {
      id: 'kk3-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        task: 'Drøft om grønnvasking bør straffes hardere av myndighetene. Hva er argumentene for og mot strengere regulering?',
        solution: 'Argumenter for strengere regulering: Grønnvasking villeder forbrukere, undergraver tilliten til reelle miljøtiltak, og svekker markedsmekanismene for bærekraftige produkter. Argumenter mot: Vanskelig a definere grensen mellom positiv markedsføring og villedning, regulering kan hemme innovasjon, og handhevelse er ressurskrevende. Et godt svar veier begge sider og konkluderer med en begrunnet vurdering.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Skjult reklame', definition: 'Kommersielle budskap som ikke tydelig fremstar som reklame for mottakeren.' },
    { term: 'Influensermarkedsføring', definition: 'Markedsføring der personer med stor rekkevidde pa sosiale medier betales for a promotere produkter.' },
    { term: 'Parasosial relasjon', definition: 'Ensidig følelsesmessig tilknytning til en medieperson man ikke kjenner personlig.' },
    { term: 'Produktplassering', definition: 'Integrering av betalte produkter eller merker i underholdningsinnhold som film og TV.' },
    { term: 'Native advertising', definition: 'Annonser utformet for a ligne det redaksjonelle innholdet pa publiseringsplattformen.' },
    { term: 'Grønnvasking', definition: 'Villedende fremstilling av en bedrift som mer miljøvennlig enn den faktisk er.' },
  ],
};

// ============================================================================
// Kapittel 5.5: Kritisk tenkning og motstandsdyktighet
// ============================================================================

export const CHAPTER_KOMKULT3_5_5: TextbookChapter = {
  id: 'komkult3-5-5',
  courseId: 'komkult-3',
  chapterNumber: '5.5',
  title: 'Kritisk tenkning og motstandsdyktighet',
  description: 'Inokulasjonsteori, prebunking, kildekritisk kompetanse og digital motstandsdyktighet mot pavirkning.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utvikle kritisk tenkning og motstandsdyktighet mot påvirkning',
    'vurdere kritisk ulike kulturteoretiske tilnærminger',
  ],
  content: [
    {
      id: 'kk3-5-5-intro',
      type: 'text',
      content: `## Kritisk tenkning og motstandsdyktighet

A forstå hvordan pavirkning fungerer er første steg mot a motstå den. I de foregaende kapitlene har vi sett pa retoriske strategier, propaganda, moderne påvirkningsteknikker og kommersiell pavirkning. Na skal vi se pa verktøyene vi har for a bygge motstandsdyktighet.

I dette kapittelet skal du lære:
- Hva inokulasjonsteori er og hvordan den kan beskytte mot desinformasjon
- Hvordan prebunking virker som «vaksine» mot feilinformasjon
- Hvilke kildekritiske ferdigheter som er nødvendige i den digitale tidsalderen
- Hvordan du kan utvikle digital motstandsdyktighet`,
    },
    {
      id: 'kk3-5-5-def-1',
      type: 'definition',
      title: 'Inokulasjonsteori',
      content: `**Inokulasjonsteori** er en psykologisk teori som sammenligner motstandsdyktighet mot pavirkning med vaksinasjon. Akkurat som en vaksine gir kroppen en svekket versjon av et virus slik at immunforsvaret kan bygge motstand, kan eksponering for svekkede versjoner av villedende argumenter gjøre folk mer motstandsdyktige mot fremtidig manipulasjon.

Teorien ble utviklet av sosialpsykologen **William McGuire** pa 1960-tallet og har fatt fornyet aktualitet i kampen mot desinformasjon pa nett.

Inokulasjon virker gjennom to mekanismer:
1. **Trussel:** Personen gjøres oppmerksom pa at noen vil forsøke a manipulere dem
2. **Forebyggende motargumenter:** Personen trener pa a gjenkjenne og motsta manipulasjon

Forskning viser at denne tilnærmingen er mer effektiv enn a bare gi folk korrekt informasjon i etterkant.`,
    },
    {
      id: 'kk3-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Inokulasjon mot klimadesinformasjon',
      content: `Forskere ved Cambridge University utviklet et nettspill kalt **«Bad News»** der spillerne selv lager falske nyheter. Ved a spille rollen som desinformasjonsspreder lærer spillerne a gjenkjenne teknikkene:

- **Polarisering:** Skape konflikter mellom grupper
- **Appell til følelser:** Bruke frykt og sinne for a fa klikk
- **Konspirasjonsteorier:** Konstruere enkle forklaringer pa komplekse problemer
- **Trolling:** Undergrave debatt med provokasjon
- **Falske eksperter:** Bruke utrolige kilder for a gi legitimitet

Resultatet: Deltakerne ble betydelig bedre til a gjennomskue desinformasjon etterpå, uavhengig av politisk overbevisning. «Vaksinen» virket fordi den ga direkte erfaring med manipulasjonsteknikkene.`,
    },
    {
      id: 'kk3-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        task: 'Hva er hovedprinsippet bak inokulasjonsteori?',
        options: [
          { id: 'a', text: 'Sensurere feilinformasjon slik at folk aldri ser den', isCorrect: false },
          { id: 'b', text: 'Gi folk korrekt informasjon etter at de har blitt villedet', isCorrect: false },
          { id: 'c', text: 'Eksponere folk for svekkede versjoner av manipulasjon slik at de bygger motstand', isCorrect: true },
          { id: 'd', text: 'Straffe de som sprer feilinformasjon', isCorrect: false },
        ],
        solution: 'Inokulasjonsteori bygger pa det samme prinsippet som vaksinasjon: Ved a eksponere folk for svekkede versjoner av manipulasjonsteknikker, bygger de opp psykologisk motstandsdyktighet. Dette er mer effektivt enn bade sensur og korrigering i etterkant, fordi personen lærer a gjenkjenne teknikkene selv.',
      },
    },
    {
      id: 'kk3-5-5-def-2',
      type: 'definition',
      title: 'Prebunking',
      content: `**Prebunking** er en praktisk anvendelse av inokulasjonsteori. Mens **debunking** (avkrefting) handler om a korrigere feilinformasjon etter at den har spredd seg, handler prebunking om a forberede folk pa forhånd.

Prebunking innebærer:
- **Varsle** om at manipulasjon vil komme
- **Vise** eksempler pa vanlige manipulasjonsteknikker
- **Trene** pa a gjenkjenne teknikkene i praksis

Forskning fra Google og Cambridge University viser at korte prebunking-videoer pa 30 sekunder kan øke evnen til a gjennomskue villedende innhold med opptil 30 prosent.

Fordelen med prebunking fremfor debunking er at det virker **forebyggende** – det er lettere a bygge motstand enn a endre en oppfatning som allerede har festet seg.`,
    },
    {
      id: 'kk3-5-5-example-2',
      type: 'example',
      title: 'Eksempel: Prebunking vs. debunking',
      problem: 'Hva er forskjellen mellom prebunking og debunking i praksis?',
      solution: `**Debunking-tilnærming:** En falsk pastand om at «5G-master forarsaker kreft» spres pa sosiale medier. Etter at pastanden har fatt tusenvis av delinger, publiserer faktasjekkere en artikkel som forklarer at forskningen ikke viser noen sammenheng mellom 5G og kreft.

**Prebunking-tilnærming:** Før den falske pastanden spres, lages korte videoer som viser hvordan «falsk sammenheng»-teknikken fungerer generelt: «Bare fordi to ting skjer samtidig, betyr det ikke at den ene forarsaker den andre. Dette er en vanlig teknikk for a skape falsk frykt.»

Prebunking er mer effektivt fordi:
- Det nar folk før de har dannet seg en mening
- Det trener generelle ferdigheter (gjenkjenne teknikken), ikke bare korrigerer én pastand
- Det unngaer «backfire-effekten» der korrigering kan forsterke den opprinnelige troen`,
    },
    {
      id: 'kk3-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-5-ex-2',
        number: '5.5.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom prebunking og debunking, og argumenter for hvorfor prebunking kan være mer effektivt.',
        hints: ['Tenk pa hva som er lettest: a forebygge eller a reparere?'],
        solution: 'Debunking korrigerer feilinformasjon etter at den har spredd seg, mens prebunking forbereder folk pa forhånd slik at de gjenkjenner manipulasjon nar de møter den. Prebunking er mer effektivt fordi: 1) Det er lettere a bygge motstand enn a endre en mening som allerede har festet seg. 2) Det trener generelle ferdigheter som fungerer mot mange typer manipulasjon. 3) Det unngaer «backfire-effekten» der korrigering paradoksalt nok kan forsterke den opprinnelige troen.',
      },
    },
    {
      id: 'kk3-5-5-def-3',
      type: 'definition',
      title: 'Kildekritisk kompetanse',
      content: `**Kildekritisk kompetanse** er evnen til a vurdere informasjon og kilder systematisk. I en digital verden med enorme mengder informasjon fra utallige avsendere er dette en helt grunnleggende ferdighet.

Sentrale kildekritiske spørsmal:
- **Hvem** star bak informasjonen? Hvilke interesser har avsenderen?
- **Hva** er formalet? A informere, overbevise, selge eller underholde?
- **Nar** ble informasjonen publisert? Er den fortsatt aktuell?
- **Hvor** er den publisert? Er plattformen troverdig?
- **Hvordan** er informasjonen dokumentert? Finnes det kilder og belegg?
- **Hvorfor** har jeg fatt denne informasjonen? Er den malstyrt mot meg?

**SIFT-metoden** (Stop, Investigate, Find better coverage, Trace claims) gir en rask og praktisk fremgangsmate for kildekritikk pa nett.`,
    },
    {
      id: 'kk3-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-5-ex-3',
        number: '5.5.3',
        type: 'multiple-choice',
        task: 'Hva star «S» for i SIFT-metoden?',
        options: [
          { id: 'a', text: 'Search – søk etter informasjonen', isCorrect: false },
          { id: 'b', text: 'Stop – stopp opp og tenk deg om før du reagerer', isCorrect: true },
          { id: 'c', text: 'Source – identifiser kilden', isCorrect: false },
          { id: 'd', text: 'Share – del med andre for a fa tilbakemelding', isCorrect: false },
        ],
        solution: 'S i SIFT star for «Stop» – stopp opp og tenk deg om før du reagerer. Dette første steget handler om a ta en pause nar du møter informasjon pa nett, spesielt hvis den vekker sterke følelser. Bekreftelsestendensen gjør at vi er tilbøyelige til a akseptere informasjon som stemmer med det vi allerede tror, sa en bevisst pause er avgjørende.',
      },
    },
    {
      id: 'kk3-5-5-text-2',
      type: 'text',
      title: 'Digital motstandsdyktighet',
      content: `### Digital motstandsdyktighet

**Digital motstandsdyktighet** handler om a utvikle en helhetlig evne til a navigere i det digitale informasjonslandskapet uten a la seg manipulere. Det innebærer mer enn bare kildekritikk – det er en kombinasjon av kunnskap, ferdigheter og holdninger.

**Kunnskapsdimensjonen:**
- Forstå hvordan algoritmer kuraterer informasjon
- Kjenne til vanlige manipulasjonsteknikker
- Vite hvordan persondata brukes til malstyrt pavirkning

**Ferdighetsdimensjonen:**
- Kunne gjennomføre faktasjekk og kildekritikk
- Kunne identifisere retoriske virkemidler og framing
- Kunne skille mellom fakta, meninger og desinformasjon

**Holdningsdimensjonen:**
- Bevisst skepsis uten a falle i kynisme
- Ydmykhet overfor egen sarbarhet for pavirkning
- Villighet til a endre mening nar nye fakta tilsier det

Malet er ikke a mistro alt, men a være i stand til a vurdere informasjon med en sunn dose skepsis og kritisk tenkning.`,
    },
    {
      id: 'kk3-5-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering

- **Inokulasjonsteori** sammenligner motstand mot pavirkning med vaksinasjon
- **Prebunking** forbereder folk pa manipulasjon før de møter den, og er mer effektivt enn debunking
- **Kildekritisk kompetanse** handler om a vurdere informasjon systematisk med spørsmal som hvem, hva, nar, hvor og hvorfor
- **SIFT-metoden** gir en rask fremgangsmate for kildekritikk: Stop, Investigate, Find better coverage, Trace claims
- **Digital motstandsdyktighet** er en helhetlig evne som kombinerer kunnskap, ferdigheter og holdninger`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk3-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        task: 'Design et kort undervisningsopplegg (15 minutter) basert pa inokulasjonsteori for a forberede medstudenter pa a gjennomskue en bestemt manipulasjonsteknikk. Forklar malet, metoden og hva du forventer at deltakerne skal lære.',
        hints: ['Velg én teknikk (f.eks. emosjonelle overskrifter, falske eksperter, eller syndebukk-teknikken).'],
        solution: 'Et godt svar velger en spesifikk teknikk, forklarer hvordan den fungerer (trussel-komponenten), og beskriver en øvelse der deltakerne trener pa a gjenkjenne teknikken (forebyggende motargument-komponenten). For eksempel: Malet er a gjenkjenne emosjonelle overskrifter. Metoden: Vis 10 overskrifter og la deltakerne sortere dem i «nøytrale» og «emosjonelt manipulerende». Diskuter deretter hvilke virkemidler som brukes. Forventet læringsutbytte: Deltakerne skal kunne identifisere emosjonell framing i nyhetstitler.',
      },
    },
    {
      id: 'kk3-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        task: 'Drøft følgende pastand: «Kritisk tenkning kan ogsa ga for langt – overdreven skepsis kan føre til konspirasjonstenkning.» Er du enig eller uenig? Begrunn svaret.',
        solution: 'Et godt svar anerkjenner at det finnes en viktig forskjell mellom sunn, metodisk skepsis og destruktiv mistillit. Sunn kritisk tenkning stiller spørsmal ved pastander og søker belegg, men er villig til a akseptere godt dokumentert kunnskap. Konspirasjonstenkning kjennetegnes av at man avviser all etablert kunnskap og mistror alle autoriteter, noe som paradoksalt nok gjør en mer sarbar for alternative autoriteter og enklere forklaringsmodeller. Nøkkelen er a være skeptisk, men ikke kynisk – a stille spørsmal, men ogsa være villig til a akseptere svar som er godt belagt.',
      },
    },
    {
      id: 'kk3-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk3-5-5-ex-6',
        number: '5.5.6',
        type: 'multiple-choice',
        task: 'Hva er «backfire-effekten» i forbindelse med debunking?',
        options: [
          { id: 'a', text: 'At korrigering av feilinformasjon paradoksalt kan forsterke den opprinnelige troen', isCorrect: true },
          { id: 'b', text: 'At falske nyheter spres raskere jo oftere de blir avkreftet', isCorrect: false },
          { id: 'c', text: 'At faktasjekkere mister troverdighet over tid', isCorrect: false },
          { id: 'd', text: 'At sensur av innhold fører til økt mistillit', isCorrect: false },
        ],
        solution: 'Backfire-effekten innebærer at forsøk pa a korrigere feilinformasjon paradoksalt kan forsterke den opprinnelige troen hos noen mottakere. Nar en person møter informasjon som utfordrer deres overbevisninger, kan de oppleve det som et angrep og forsterke sin opprinnelige posisjon. Dette er en av grunnene til at prebunking – a forberede folk pa forhånd – ofte er mer effektivt enn debunking.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Inokulasjonsteori', definition: 'Psykologisk teori om at eksponering for svekkede manipulasjonsforsøk bygger motstandsdyktighet.' },
    { term: 'Prebunking', definition: 'Forebyggende avkrefting – a forberede folk pa manipulasjon før de møter den.' },
    { term: 'Debunking', definition: 'Avkrefting av feilinformasjon etter at den har spredd seg.' },
    { term: 'SIFT-metoden', definition: 'Kildekritisk verktøy: Stop, Investigate, Find better coverage, Trace claims.' },
    { term: 'Digital motstandsdyktighet', definition: 'Helhetlig evne til a navigere i det digitale informasjonslandskapet uten a la seg manipulere.' },
    { term: 'Backfire-effekten', definition: 'At korrigering av feilinformasjon paradoksalt kan forsterke den opprinnelige troen.' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT3_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT3_5_1,
  CHAPTER_KOMKULT3_5_2,
  CHAPTER_KOMKULT3_5_3,
  CHAPTER_KOMKULT3_5_4,
  CHAPTER_KOMKULT3_5_5,
];
