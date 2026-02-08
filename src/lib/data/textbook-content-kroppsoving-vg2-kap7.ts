/**
 * Kroppsøving VG2 - Kapittel 7: Friluftsliv
 *
 * Dekker LK20 kompetansemål for friluftsliv på VG2:
 * - Planlegge og gjennomføre friluftslivsturer
 * - Bærekraftig ferdsel i naturen
 * - Overlevelsesteknikker og sikkerhet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1: Friluftsliv til ulike årstider
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_7_1: TextbookChapter = {
  id: 'kroppsoving-vg2-7-1',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '7.1',
  title: 'Friluftsliv til ulike årstider',
  description: 'Lær om tilpasninger og aktiviteter i friluftsliv gjennom alle fire årstider.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre friluftsliv til ulike årstider',
    'bruke naturen som arena for fysisk aktivitet og rekreasjon',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-7-1-intro',
      type: 'text',
      content: `Norge har et variert klima med tydelige årstider, noe som gir oss unike muligheter for friluftsliv hele året. For å få gode opplevelser i naturen må vi tilpasse utstyr, klær og aktiviteter til årstiden og forholdene. God planlegging og kunnskap om vær og føre er avgjørende for sikkerhet og trivsel.`,
    },
    {
      id: 'kroppsoving-vg2-7-1-def-1',
      type: 'definition',
      title: 'Friluftsliv',
      content: `Friluftsliv er opphold og fysisk aktivitet i friluft i fritiden, med sikte på miljøforandring og naturopplevelse. I Norge har vi en sterk friluftslivstradisjon som er tett knyttet til allemannsretten og vår tilgang til natur.`,
    },
    {
      id: 'kroppsoving-vg2-7-1-text-1',
      type: 'text',
      content: `**Vinteraktiviteter**

Vinteren byr på skiløyper, snøskotur, isklatring og vinterfiske. Lagprinsippet er spesielt viktig om vinteren: innerst et ulllag som transporterer fuktighet, deretter et isolerende lag, og ytterst et vindtett og vannavstøtende lag. Husk at korte dager krever hodelykt og refleks.`,
    },
    {
      id: 'kroppsoving-vg2-7-1-def-2',
      type: 'definition',
      title: 'Lagprinsippet (trelagsprinsippet)',
      content: `Lagprinsippet er en klesfilosofi for friluftsliv der man kler seg i tre lag: et baslag (ull/syntetisk) som transporterer svette bort fra huden, et mellomlag (fleece/dun) som isolerer, og et ytterlag (skalljakke) som beskytter mot vind og nedbør.`,
    },
    {
      id: 'kroppsoving-vg2-7-1-text-2',
      type: 'text',
      content: `**Vår- og sommeraktiviteter**

Våren og sommeren åpner for fjellturer, padling, sykling, klatring og bading. Selv om temperaturen er høyere, må man være forberedt på raske væromslag, spesielt i fjellet. Solfaktor, myggbeskyttelse og nok væske er viktig. Sommeren gir lange dager som gjør det mulig med lengre turer.`,
    },
    {
      id: 'kroppsoving-vg2-7-1-example-1',
      type: 'example',
      title: 'Pakkeliste for en dagstur høst/vinter',
      content: `**Klær:** Ullundertøy, fleecejakke, skalljakke og -bukse, lue, hansker, ekstra sokker. **Utstyr:** Ryggsekk (30-40 L), sitteunderlag, hodelykt, kart og kompass, førstehjelpsutstyr, kniv. **Mat/drikke:** Termos med varm drikke, niste, sjokolade, nøtter. **Sikkerhet:** Fulladet mobiltelefon, fløyte, nødpledd.`,
    },
    {
      id: 'kroppsoving-vg2-7-1-text-3',
      type: 'text',
      content: `**Høstaktiviteter**

Høsten gir flotte farger og gode forhold for turer i skog og fjell. Sopp- og bærplukking er tradisjonelle aktiviteter. Høsten er også jaktsesong, og det er viktig å bruke synlige farger i jaktområder. Været kan skifte raskt, så vær forberedt på regn, vind og lave temperaturer.`,
    },
    {
      id: 'kroppsoving-vg2-7-1-tip-1',
      type: 'tip',
      title: 'Det finnes ikke dårlig vær',
      content: `«Det finnes ikke dårlig vær, bare dårlige klær» er et kjent norsk ordtak. Nøkkelen til godt friluftsliv er å ha riktig utstyr for forholdene. Sjekk alltid yr.no før du legger ut på tur, og pakk for litt dårligere vær enn meldt.`,
    },
    {
      id: 'kroppsoving-vg2-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er trelagsprinsippet i friluftsliv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av trelagsprinsippet.',
            solution: 'Baslag (ull), mellomlag (fleece/dun) og ytterlag (skalljakke)',
            multipleChoiceOptions: [
              'Baslag (ull), mellomlag (fleece/dun) og ytterlag (skalljakke)',
              'Tre like tykke bomullsgensere oppå hverandre',
              'Regntøy, boblejakke og t-skjorte',
              'Bare ett tykt lag med dun',
            ],
          },
        ],
        solution: 'Trelagsprinsippet sikrer god fuktighetsregulering, isolasjon og beskyttelse mot vær og vind. Baslagt transporterer svette bort fra huden, mellomlaget holder på varmen, og ytterlaget beskytter mot vind og nedbør.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke tilpasninger er viktigst for vinterturer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det viktigste sikkerhetstiltaket for vinterturer.',
            solution: 'Hodelykt, ekstra klær, varm drikke og kunnskap om kuldefare',
            multipleChoiceOptions: [
              'Hodelykt, ekstra klær, varm drikke og kunnskap om kuldefare',
              'Solkrem og solbriller',
              'Bare et godt kart',
              'Shorts og t-skjorte',
            ],
          },
        ],
        solution: 'Vinterturer krever ekstra utstyr for å håndtere kulde, kort dagslys og vanskelige føreforhold. Hodelykt er nødvendig pga. kort dag, ekstra klær for å unngå hypotermi, og varm drikke for å opprettholde kjernetemperatur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva bør du tenke på under en sommertur i fjellet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste forholdsregelen for fjellturer om sommeren.',
            solution: 'Være forberedt på raske væromslag med ekstra klær og regntøy',
            multipleChoiceOptions: [
              'Være forberedt på raske væromslag med ekstra klær og regntøy',
              'Bare pakke for fint vær',
              'Ta med vinterutstyr uansett',
              'Aldri gå over tregrensen',
            ],
          },
        ],
        solution: 'I fjellet kan været skifte raskt, selv om det er sommer. Temperaturen synker med høyden, og tåke og nedbør kan komme brått. Man bør alltid ha regntøy, vindjakke og ekstra varme klær med seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv hvordan du ville planlagt en dagstur i ditt nærområde om høsten. Hva må du ta hensyn til?',
        solution: 'En god plan bør inkludere: realistisk rute tilpasset gruppens nivå, sjekk av værmelding, pakkeliste med ekstra klær for regn og vind, nok mat og drikke, hodelykt pga. tidlig mørke, varsling av noen om ruten, og kunnskap om eventuell jaktaktivitet i området.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en pakkeliste for en overnattingstur i fjellet om sommeren. Begrunn valgene dine.',
        solution: 'Pakkeliste bør inneholde: telt/tarp og sovepose, liggeunderlag, kokeapparat og mat, vannflaske/vannrensing, klær etter trelagsprinsippet inkl. regntøy, kart og kompass, førstehjelpsutstyr, solkrem, myggspray, kniv, hodelykt, nødpledd og mobiltelefon. Begrunnelse: dekker behovene for overnatting, mat, navigasjon, sikkerhet og komfort i varierende vær.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign friluftsliv om vinteren og sommeren. Hvilke utfordringer og fordeler har hver årstid? Diskuter med tanke på utstyr, sikkerhet og aktivitetsmuligheter.',
        solution: 'Vinter: Fordeler inkluderer skiaktiviteter, stillhet i naturen, og vakre landskap. Utfordringer er kulde, mørke, tung snø og fare for hypotermi. Krever mye utstyr. Sommer: Fordeler er lange dager, mange aktiviteter (padling, klatring, sykling), lett tilgjengelighet. Utfordringer er mygg, solstikk, raske væromslag i fjellet. Begge årstider krever god planlegging, men vinterturene stiller strengere krav til utstyr og erfaring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Planlegging av turer og ekspedisjoner
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_7_2: TextbookChapter = {
  id: 'kroppsoving-vg2-7-2',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '7.2',
  title: 'Planlegging av turer og ekspedisjoner',
  description: 'Lær å planlegge og gjennomføre turer med kart, kompass og GPS.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre turer i ulike naturmiljøer',
    'bruke kart, kompass og digitale hjelpemidler til navigasjon',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-7-2-intro',
      type: 'text',
      content: `God turplanlegging er nøkkelen til trygge og gode opplevelser i naturen. Dette innebærer å velge riktig rute, vurdere vær og føreforhold, pakke riktig utstyr og kunne navigere med kart, kompass og GPS. En godt planlagt tur gir trygghet og økt turglede.`,
    },
    {
      id: 'kroppsoving-vg2-7-2-def-1',
      type: 'definition',
      title: 'Kartlesing og høydekurver',
      content: `Høydekurver er linjer på et turkart som forbinder punkter med lik høyde over havet. Tett mellom kurvene betyr bratt terreng, stor avstand betyr slakt terreng. Ekvidistansen angir høydeforskjellen mellom to nabokurver (vanligvis 20 meter på turkart i målestokk 1:50 000).`,
    },
    {
      id: 'kroppsoving-vg2-7-2-text-1',
      type: 'text',
      content: `**Navigasjon med kart og kompass**

For å navigere med kart og kompass må du kunne: 1) Orientere kartet etter terrenget, 2) Finne din posisjon ved å ta peiling mot kjente punkter, 3) Legge en kurslinje mot målet, og 4) Følge kompassretningen i terrenget. Øv på dette i kjent terreng før du bruker det i ukjent.`,
    },
    {
      id: 'kroppsoving-vg2-7-2-def-2',
      type: 'definition',
      title: 'Peiling',
      content: `Peiling er å bestemme retningen til et punkt ved hjelp av kompass. Man legger kompasset mot kartet mellom egen posisjon og målet, dreier kompasshuset til N peker mot nord på kartet, og leser av graderingen. I terrenget holder man kompasset vannrett og dreier seg til kompassnålen treffer N.`,
    },
    {
      id: 'kroppsoving-vg2-7-2-text-2',
      type: 'text',
      content: `**GPS og digitale hjelpemidler**

GPS-enheter og kartapper (som Norgeskart, UT.no og Peakbook) er nyttige supplement til kart og kompass. De viser nøyaktig posisjon og kan spore ruten din. Husk at batterier kan gå tomme og at elektronikk kan svikte i kulde og regn. Kart og kompass skal alltid være med som backup.`,
    },
    {
      id: 'kroppsoving-vg2-7-2-example-1',
      type: 'example',
      title: 'Planlegging av en dagstur med kart',
      problem: 'Du skal planlegge en dagstur fra Gjendesheim til Memurubu langs Besseggen. Hvordan bruker du kartet til å planlegge?',
      solution: `1) Finn start og mål på kartet (M711 eller turkart i 1:50 000). 2) Mål avstanden med kartmåleren eller en snor: ca. 14 km. 3) Les høydekurvene: turen går opp til 1743 moh (Veslefjell), noe som betyr ca. 1100 høydemeter stigning. 4) Beregn tidsbruk med Naismith-regelen: ca. 5-7 timer. 5) Identifiser mulige hvileplasser, vannkilder og nødutganger. 6) Sjekk værmelding og skredvarsel.`,
    },
    {
      id: 'kroppsoving-vg2-7-2-text-3',
      type: 'text',
      content: `**Fjellvettreglene**

Fjellvettreglene er utarbeidet av Den Norske Turistforening og Røde Kors. De viktigste er: Planlegg turen og meld fra hvor du går. Tilpass turen etter evne og forhold. Ta hensyn til vær- og skredvarsel. Vær forberedt på uvær og kulde. Ta med nødvendig utstyr. Bruk kart og kompass, og kjenn din posisjon. Gå ikke alene. Snu i tide, det er ingen skam å snu.`,
    },
    {
      id: 'kroppsoving-vg2-7-2-tip-1',
      type: 'tip',
      title: 'Naismiths regel for tidsberegning',
      content: `Naismiths regel sier at man bruker ca. 1 time per 5 km i flatt terreng, pluss 1 time per 600 høydemeter stigning. Legg til ekstra tid for pauser, tungt terreng og dårlig vær. Beregn alltid med god margin.`,
    },
    {
      id: 'kroppsoving-vg2-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva forteller høydekurvene oss på et turkart?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av høydekurver.',
            solution: 'Linjer som forbinder punkter med lik høyde over havet',
            multipleChoiceOptions: [
              'Linjer som forbinder punkter med lik høyde over havet',
              'Veier og stier i terrenget',
              'Grenser mellom kommuner',
              'Avstanden mellom to steder',
            ],
          },
        ],
        solution: 'Høydekurver viser terrengformer på kartet. Tett mellom kurvene betyr bratt terreng, stor avstand betyr slakt. Ekvidistansen på turkart 1:50 000 er vanligvis 20 meter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor bør du alltid ha med kart og kompass i tillegg til GPS?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste grunnen til å ha med kart og kompass som backup.',
            solution: 'GPS kan gå tom for batteri eller svikte i kulde og regn',
            multipleChoiceOptions: [
              'GPS kan gå tom for batteri eller svikte i kulde og regn',
              'Kart og kompass veier mindre',
              'GPS er alltid unøyaktig',
              'Man må ha kart for å få lov til å gå i fjellet',
            ],
          },
        ],
        solution: 'Elektroniske hjelpemidler er avhengige av strøm og fungerer dårlig i kulde og fuktighet. Kart og kompass fungerer alltid og krever ingen batterier. De er en livsviktig backup dersom GPS-en svikter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva sier Naismiths regel om tidsberegning på tur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av Naismiths regel.',
            solution: 'Ca. 1 time per 5 km flatt + 1 time per 600 høydemeter stigning',
            multipleChoiceOptions: [
              'Ca. 1 time per 5 km flatt + 1 time per 600 høydemeter stigning',
              'Ca. 1 time per 10 km uansett terreng',
              'Man bruker alltid 30 min per km',
              'Tidsbruken avhenger bare av avstanden',
            ],
          },
        ],
        solution: 'Naismiths regel er en tommelfingerregel for å estimere tidsbruk på tur. Den tar hensyn til både horisontal avstand og vertikal stigning, som er de to viktigste faktorene for tidsbruk i fjellet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Bruk Naismiths regel til å beregne tidsbruk for en tur på 12 km med 800 høydemeter stigning. Forklar utregningen.',
        solution: 'Horisontal tid: 12 km / 5 km per time = 2,4 timer. Vertikal tid: 800 m / 600 m per time = 1,3 timer. Total: 2,4 + 1,3 = 3,7 timer, altså ca. 3 timer og 45 minutter. Med pauser og margin bør man beregne ca. 5 timer totalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar minst fire av fjellvettreglene og hvorfor de er viktige for sikkerheten.',
        solution: '1) «Planlegg turen og meld fra» – andre vet hvor du er dersom noe skjer. 2) «Tilpass turen etter evne og forhold» – forhindrer at man kommer i farlige situasjoner. 3) «Ta hensyn til vær- og skredvarsel» – vær kan være livsfarlig i fjellet. 4) «Snu i tide» – det er ingen skam å snu, og det kan redde liv. Fjellvettreglene bygger på mange års erfaring og ulykkesstatistikk fra norsk fjellnatur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg en dagstur i ditt nærområde. Beskriv rute, tidsberegning, utstyrsliste og sikkerhetstiltak. Bruk et turkart eller kartapp som grunnlag.',
        solution: 'En god turplan bør inneholde: 1) Rute med start, mål og eventuelle rasteplasser (bruk kart/kartapp). 2) Tidsberegning basert på Naismiths regel + pauser. 3) Utstyrsliste tilpasset årstid og vær. 4) Sikkerhetstiltak: varsle noen om ruten, sjekke værmelding, ha med kart/kompass, førstehjelpsutstyr og nødpledd. 5) Alternativ rute/nødutgang dersom forholdene endrer seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: Bærekraftig ferdsel i naturen
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_7_3: TextbookChapter = {
  id: 'kroppsoving-vg2-7-3',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '7.3',
  title: 'Bærekraftig ferdsel i naturen',
  description: 'Lær om allemannsretten, sporløs ferdsel og bærekraftig bruk av naturen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'praktisere bærekraftig ferdsel i naturen',
    'forstå allemannsretten og plikter knyttet til ferdsel i naturen',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-7-3-intro',
      type: 'text',
      content: `I Norge har vi allemannsretten som gir oss fri ferdsel i utmark. Med denne retten følger også plikter: vi skal ta vare på naturen og vise hensyn til grunneiere, dyr og andre friluftsfolk. Bærekraftig ferdsel handler om å bruke naturen uten å ødelegge den for fremtidige generasjoner.`,
    },
    {
      id: 'kroppsoving-vg2-7-3-def-1',
      type: 'definition',
      title: 'Allemannsretten',
      content: `Allemannsretten er nedfelt i friluftsloven og gir alle rett til å ferdes fritt i utmark (skog, fjell, kystområder), uavhengig av hvem som eier grunnen. Retten gjelder ferdsel til fots, på ski, med sykkel og til hest. Innmark (dyrket mark, hager) er unntatt i vekstsesongen (15. april – 14. oktober).`,
    },
    {
      id: 'kroppsoving-vg2-7-3-text-1',
      type: 'text',
      content: `**Sporløs ferdsel – «Leave No Trace»**

Sporløs ferdsel betyr å forlate naturen slik du fant den. De viktigste prinsippene er: Ta med deg alt søppel hjem. Bruk etablerte bålplasser og stier. Ikke bryt greiner eller skad trær. Grav ned menneskelig avfall minst 200 meter fra vann. Respekter dyrelivet og hold avstand. Vis hensyn til andre brukere.`,
    },
    {
      id: 'kroppsoving-vg2-7-3-def-2',
      type: 'definition',
      title: 'Utmark og innmark',
      content: `Utmark er udyrket mark som skog, fjell, myr og kystområder der allemannsretten gjelder. Innmark er dyrket mark, hager, gårdsplasser, industriområder og lignende som er i aktiv bruk. I innmark har grunneieren rett til å nekte ferdsel i vekstsesongen.`,
    },
    {
      id: 'kroppsoving-vg2-7-3-text-2',
      type: 'text',
      content: `**Bålbrenning og regler**

Det er generelt bålforbudt i eller nær skog og utmark mellom 15. april og 15. september. Unntaket er hvis det åpenbart ikke er fare for brann (f.eks. snødekke eller konstant regn). Utenom forbudsperioden kan man tenne bål i utmark, men alltid med forsiktighet. Bruk etablerte bålplasser, og sørg for å slukke bålet helt når du er ferdig.`,
    },
    {
      id: 'kroppsoving-vg2-7-3-example-1',
      type: 'example',
      title: 'Sporløs ferdsel i praksis',
      content: `En gruppe elever skal på tur i et naturreservat. De følger stien for å unngå erosjon, tar med alt søppel i egen pose, bruker primus i stedet for bål (det er sommer), graver ned toalettavfall langt fra bekken, og holder avstand til en fugl som hekker nær stien. Etter turen ser det ut som ingen har vært der.`,
    },
    {
      id: 'kroppsoving-vg2-7-3-text-3',
      type: 'text',
      content: `**Slitasje og erosjon i naturen**

Populære turmål kan få store slitasjeskader. Erosjon oppstår når jord og vegetasjon slites bort av ferdsel, vann og vind. Tiltak for å begrense slitasje: Gå på stien, ikke ved siden av. Unngå å lage snarveier. Bruk sko med myk såle i sårbar natur. Velg alternative turmål i høysesong.`,
    },
    {
      id: 'kroppsoving-vg2-7-3-tip-1',
      type: 'tip',
      title: 'Tenk bærekraftig',
      content: `Du kan bidra til bærekraftig friluftsliv ved å velge kollektivtransport til turstart, plukke søppel du finner underveis («plogging»), velge lokale turmål fremfor lange kjøreturer, og dele kunnskap om sporløs ferdsel med venner og familie.`,
    },
    {
      id: 'kroppsoving-vg2-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er allemannsretten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av allemannsretten.',
            solution: 'Retten til å ferdes fritt i utmark, uavhengig av hvem som eier grunnen',
            multipleChoiceOptions: [
              'Retten til å ferdes fritt i utmark, uavhengig av hvem som eier grunnen',
              'Retten til å gå hvor man vil, inkludert privat eiendom',
              'En lov som bare gjelder i nasjonalparker',
              'Retten til å jakte og fiske overalt',
            ],
          },
        ],
        solution: 'Allemannsretten er nedfelt i friluftsloven og gir alle rett til ferdsel i utmark til fots, på ski, med sykkel og til hest. Den gjelder ikke i innmark i vekstsesongen (15. april – 14. oktober).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Når er det bålforbudet i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig periode for generelt bålforbud.',
            solution: '15. april til 15. september',
            multipleChoiceOptions: [
              '15. april til 15. september',
              '1. januar til 31. desember',
              'Bare i juli og august',
              'Det er aldri bålforbud i Norge',
            ],
          },
        ],
        solution: 'Bålforbudet gjelder i eller nær skog og utmark fra 15. april til 15. september. Unntak gjelder bare der det er åpenbart at det ikke er fare for brann, for eksempel ved snødekke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva innebærer sporløs ferdsel?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det viktigste prinsippet for sporløs ferdsel.',
            solution: 'Forlate naturen slik du fant den, uten synlige spor etter besøket',
            multipleChoiceOptions: [
              'Forlate naturen slik du fant den, uten synlige spor etter besøket',
              'Gå uten sko for å unngå avtrykk',
              'Bare gå på asfalterte stier',
              'Aldri bruke naturen til friluftsliv',
            ],
          },
        ],
        solution: 'Sporløs ferdsel («Leave No Trace») handler om å minimere påvirkningen vår på naturen: ta med søppel, bruke stier, respektere dyreliv, ikke skade vegetasjon, og slukke bål ordentlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom utmark og innmark, og beskriv hvilke regler som gjelder for ferdsel i hver av dem.',
        solution: 'Utmark er udyrket mark som skog, fjell, myr og kystområder. Her har alle rett til å ferdes fritt hele året etter allemannsretten. Innmark er dyrket mark, hager og gårdsplasser. I innmark kan grunneieren nekte ferdsel i vekstsesongen (15. april – 14. oktober). Utenom vekstsesongen kan man ferdes i innmark til fots dersom marken er frossen eller snødekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er erosjon et problem langs populære turstier, og hva kan vi gjøre for å redusere slitasjen?',
        solution: 'Erosjon oppstår når mange mennesker går utenfor stien, tar snarveier, eller går i sårbar natur. Vegetasjonen slites bort, jorda blottlegges og vaskes vekk av regn. Tiltak: Hold deg på merkede stier, unngå snarveier, bruk sko med myk såle i sårbar natur, velg mindre populære turmål, og oppmuntre andre til å gjøre det samme. Sherpa-trapper og steinlegging er gode tiltak langs populære ruter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter hvordan friluftsliv kan kombineres med bærekraft. Gi konkrete eksempler på tiltak du kan gjøre for å ferdes mer bærekraftig i naturen.',
        solution: 'Bærekraftig friluftsliv handler om å nyte naturen uten å ødelegge den. Konkrete tiltak: 1) Transport – bruk kollektivtransport eller sykkel til turstart. 2) Ferdsel – hold deg på stier, praktiser sporløs ferdsel. 3) Søppel – ta med alt hjem, plukk andres søppel (plogging). 4) Utstyr – kjøp kvalitetsutstyr som varer lenge, reparer i stedet for å kaste, kjøp brukt. 5) Mat – velg lokalprodusert mat, unngå emballasje. 6) Kunnskap – del gode holdninger med andre og lær bort sporløs ferdsel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: Overlevelsesteknikker og sikkerhet
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_7_4: TextbookChapter = {
  id: 'kroppsoving-vg2-7-4',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '7.4',
  title: 'Overlevelsesteknikker og sikkerhet',
  description: 'Lær grunnleggende overlevelsesteknikker som nødbivaak, båltenning og førstehjelp i naturen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'mestre grunnleggende overlevelsesteknikker i naturen',
    'vurdere risiko og iverksette sikkerhetstiltak i friluftsliv',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-7-4-intro',
      type: 'text',
      content: `Selv med god planlegging kan uforutsette situasjoner oppstå i naturen. Kunnskap om overlevelsesteknikker kan utgjøre forskjellen mellom liv og død i kritiske situasjoner. De fire viktigste behovene i en nødsituasjon er: ly mot vær og vind, varme, vann og signalisering.`,
    },
    {
      id: 'kroppsoving-vg2-7-4-def-1',
      type: 'definition',
      title: 'Nødbivaak',
      content: `En nødbivaak er et improvisert ly som bygges i en nødsituasjon for å beskytte mot vind, nedbør og kulde. Den kan lages av naturmaterialer (greiner, mose, snø), en presenning eller et nødpledd. Målet er å holde kroppskjernen varm og tørr.`,
    },
    {
      id: 'kroppsoving-vg2-7-4-text-1',
      type: 'text',
      content: `**Bygging av nødbivaak**

Det finnes flere typer nødbivuakker. En enkel variant er å lene greiner mot en stamme eller et berg og dekke med granbar og mose. Om vinteren kan du grave en snøhule i en skavl. Viktige prinsipper: Velg et sted i le for vind. Isoler mot bakken med granbar eller liggeunderlag. Gjør bivuakken liten for å bevare varmen. Ha en åpning som kan lukkes.`,
    },
    {
      id: 'kroppsoving-vg2-7-4-def-2',
      type: 'definition',
      title: 'Hypotermi (nedkjøling)',
      content: `Hypotermi oppstår når kjernetemperaturen i kroppen synker under 35°C. Symptomer inkluderer skjelving, forvirring, nedsatt motorikk og i alvorlige tilfeller bevisstløshet. Førstehjelp: Beskytt mot videre varmetap, gi varme drikker (hvis bevisst), og varsle nødetatene (113).`,
    },
    {
      id: 'kroppsoving-vg2-7-4-text-2',
      type: 'text',
      content: `**Båltenning under vanskelige forhold**

For å tenne bål i vått vær trenger du: tørr opptenning (never/bjørkenever, tyrived, medbrakt tennbriketter), tynne kvister som gradvis bygges opp til tykkere ved, og tålmodighet. Skrap av det våte ytterlaget på kvister for å komme til tørt trevirke. Bygg bålet opp fra bakken med en plattform av tørr ved. Beskytt flammen mot vind til den har tatt ordentlig tak.`,
    },
    {
      id: 'kroppsoving-vg2-7-4-example-1',
      type: 'example',
      title: 'Nødsituasjon i fjellet',
      content: `En turgruppe blir overrasket av tåke og sterk vind over tregrensen. De finner le bak en stor stein, bretter ut nødpledd rundt seg, og spiser sjokolade for energi. En i gruppen ringer 113 og oppgir GPS-posisjon. De holder seg i ro for å spare energi og varme, og venter på hjelp. Ved å ha med nødpledd, ekstra mat og fulladet telefon hadde de det de trengte for å klare situasjonen.`,
    },
    {
      id: 'kroppsoving-vg2-7-4-text-3',
      type: 'text',
      content: `**Vannrensing i naturen**

Vann fra bekker og innsjøer kan inneholde bakterier og parasitter (som Giardia). For å rense vann i naturen kan du koke det i minst ett minutt, bruke vannrenstabletter, eller filtrere det med et vannfilter. Rennende vann høyt til fjells er som regel trygt, men vær forsiktig med stillestående vann og vann nær beitedyr.`,
    },
    {
      id: 'kroppsoving-vg2-7-4-tip-1',
      type: 'tip',
      title: 'Nødutstyr du alltid bør ha med',
      content: `Ha alltid med deg disse fem tingene i sekken: nødpledd (tar minimalt plass), fløyte (kan høres langt), førstehjelpsutstyr (plaster, bandasje, smertestillende), fyrstikker/lighter i vanntett pose, og en kniv. Dette kan redde livet ditt i en nødsituasjon.`,
    },
    {
      id: 'kroppsoving-vg2-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fire viktigste behovene i en nødsituasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ly, varme, vann og signalisering',
            multipleChoiceOptions: [
              'Ly, varme, vann og signalisering',
              'Mat, seng, TV og telefon',
              'Kart, kompass, GPS og kikkert',
              'Telt, sovepose, primus og gryte',
            ],
          },
        ],
        solution: 'De fire viktigste behovene i en nødsituasjon er ly (beskyttelse mot vær), varme (unngå hypotermi), vann (unngå dehydrering) og signalisering (bli funnet av redningsmannskaper).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er hypotermi, og hvordan gir du førstehjelp?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig førstehjelpsbehandling ved hypotermi.',
            solution: 'Beskytt mot videre varmetap, gi varme drikker og ring 113',
            multipleChoiceOptions: [
              'Beskytt mot videre varmetap, gi varme drikker og ring 113',
              'La personen løpe for å varme seg opp',
              'Legg personen i kaldt vann',
              'Gi personen kald mat og drikke',
            ],
          },
        ],
        solution: 'Hypotermi er nedkjøling av kjernetemperaturen under 35°C. Førstehjelp: Stopp varmetapet ved å bytte våte klær, pakk inn i sovepose/nødpledd, gi varme drikker hvis personen er bevisst, og ring 113.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan kan du rense vann i naturen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en effektiv metode for vannrensing.',
            solution: 'Koke vannet i minst ett minutt',
            multipleChoiceOptions: [
              'Koke vannet i minst ett minutt',
              'La vannet stå i solen i 5 minutter',
              'Sile vannet gjennom en t-skjorte',
              'Blåse på vannet',
            ],
          },
        ],
        solution: 'Effektive metoder for vannrensing er koking (minst 1 minutt), vannrenstabletter (f.eks. Micropur) og vannfilter. Koking dreper bakterier, virus og parasitter. Siling fjerner bare store partikler, ikke mikroorganismer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv steg for steg hvordan du bygger en enkel nødbivaak i skogen med naturmaterialer.',
        solution: '1) Finn et sted i le for vind, gjerne ved et berg eller en stor stein. 2) Finn en solid stamme eller grein å bruke som rygg. 3) Len lange greiner mot ryggen i 45 graders vinkel. 4) Flett tynnere kvister og granbar mellom de lange greinene for isolasjon. 5) Legg et tykt lag med granbar på bakken inne i bivuakken for isolasjon. 6) Gjør åpningen liten og sørg for at den ikke vender mot vinden. 7) Tett eventuelle hull med mose og løv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvordan du tenner bål under våte forhold. Hvilke materialer bruker du, og hvordan bygger du opp bålet?',
        solution: 'Under våte forhold: 1) Finn tørr opptenning – bjørkenever (brenner selv når den er fuktig), tyrived fra gamle stubber, eller medbrakte tennbriketter. 2) Skrap av det våte ytterlaget på kvister med kniv. 3) Lag en plattform av tørre vedkubber for å løfte bålet fra våt bakke. 4) Legg opptenningen i midten, bygg opp med tynne kvister i teltform. 5) Beskytt mot vind med kroppen eller en presenning. 6) Bygg gradvis opp med tykkere ved etter hvert som flammen tar tak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du er på fjelltur og en i gruppen viser tegn på hypotermi (skjelving, forvirring). Beskriv hva du gjør steg for steg, fra du oppdager symptomene til personen er trygg.',
        solution: '1) Stopp videre aktivitet og finn le for vind. 2) Bytt våte klær med tørre om mulig. 3) Pakk personen inn i sovepose, nødpledd eller ekstra klær – legg isolasjon under. 4) Gi varme, søte drikker hvis personen er bevisst og kan svelge. 5) Gi energirik mat (sjokolade, nøtter). 6) Ring 113 og oppgi posisjon (GPS-koordinater). 7) Hold personen varm og rolig til hjelp ankommer. 8) Ikke la personen gå eller bevege seg unødvendig, da dette kan føre til at kaldt blod fra ekstremitetene sirkulerer til kjernen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.5: Friluftsliv i nærområdet
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_7_5: TextbookChapter = {
  id: 'kroppsoving-vg2-7-5',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '7.5',
  title: 'Friluftsliv i nærområdet',
  description: 'Oppdag mulighetene for friluftsliv i nærmiljøet ditt og lær å bruke nærnaturen aktivt.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke nærmiljøet til variert friluftsliv',
    'reflektere over friluftslivets betydning for fysisk og psykisk helse',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-7-5-intro',
      type: 'text',
      content: `Du trenger ikke reise langt for å oppleve friluftsliv. Nærområdet byr på mange muligheter for aktivitet og naturopplevelser, enten det er en skog, en park, et vann eller en fjord. Nærfriluftsliv er bærekraftig, tilgjengelig og enkelt å gjennomføre i hverdagen. Forskning viser at regelmessig tid i naturen har stor positiv effekt på både fysisk og psykisk helse.`,
    },
    {
      id: 'kroppsoving-vg2-7-5-def-1',
      type: 'definition',
      title: 'Nærfriluftsliv',
      content: `Nærfriluftsliv er friluftslivsaktiviteter som utøves i nærmiljøet, uten behov for lang reisevei eller kostbart utstyr. Eksempler er turgåing i nærskogen, bading i lokale vann, fisking i nærliggende elv, eller sykling på lokale stier.`,
    },
    {
      id: 'kroppsoving-vg2-7-5-text-1',
      type: 'text',
      content: `**Helseeffekter av friluftsliv**

Forskning dokumenterer at friluftsliv gir bedre fysisk helse (styrke, utholdenhet, balanse), redusert stress og angst, bedre søvnkvalitet, økt konsentrasjon og kreativitet, og sterkere immunforsvar. Allerede 20 minutter i naturen kan senke stresshormonet kortisol merkbart. Regelmessig friluftsliv i nærområdet gjør det lettere å oppnå disse helsefordelene.`,
    },
    {
      id: 'kroppsoving-vg2-7-5-def-2',
      type: 'definition',
      title: 'Naturens restitusjonseffekt',
      content: `Naturens restitusjonseffekt beskriver hvordan opphold i natur gjenoppretter mental energi og reduserer stress. Teorien er utviklet av forskerne Kaplan og Kaplan, som viser at naturomgivelser krever lite bevisst oppmerksomhet og dermed lar hjernen hvile og hente seg inn.`,
    },
    {
      id: 'kroppsoving-vg2-7-5-text-2',
      type: 'text',
      content: `**Aktiviteter i nærområdet**

Mulighetene er mange: orienteringsløp i nærskogen, geocaching med GPS, fuglekikking, fiske, bading, klatring i trær eller på steinblokker (buldring), natursti med oppgaver, utendørs styrketrening med naturmaterialer, og matlaging på bål. Selv korte turer i grøntområder nær hjemmet har dokumentert helseeffekt.`,
    },
    {
      id: 'kroppsoving-vg2-7-5-example-1',
      type: 'example',
      title: 'Utendørs treningsøkt i nærskogen',
      content: `**Økt (45 min):** 1) Jogg til skogen (10 min). 2) Styrkeøvelser: armhevinger mot en stubbe (3x12), knebøy med en stein (3x15), planke (3x30 sek), utfall langs stien (3x10 per bein). 3) Balansetrening: gå på en falt trestamme. 4) Strekking og pusteteknikk i ro (5 min). 5) Jogg tilbake. Denne økten kombinerer utholdenhet, styrke, balanse og avspenning – helt uten treningssenter.`,
    },
    {
      id: 'kroppsoving-vg2-7-5-text-3',
      type: 'text',
      content: `**Friluftsliv som sosial arena**

Friluftsliv egner seg godt som sosial aktivitet. Turer med venner, familie eller klassen gir felles opplevelser og styrker relasjoner. Rundt bålet deles historier og mat, og samarbeid om praktiske oppgaver (sette opp telt, lage mat) skaper fellesskap. Lavterskel nærfriluftsliv gjør det enkelt å inkludere alle, uavhengig av fysisk form eller erfaring.`,
    },
    {
      id: 'kroppsoving-vg2-7-5-tip-1',
      type: 'tip',
      title: 'Bli kjent med nærnaturen din',
      content: `Utforsk nærområdet ditt som om du var turist. Finn lokale turstier på UT.no eller kommunens nettsider. Prøv å oppdage nye steder innen gang- eller sykkelavstand fra der du bor. Mange steder har merkede naturstier, gapahuker og bålplasser som er gratis å bruke.`,
    },
    {
      id: 'kroppsoving-vg2-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er nærfriluftsliv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av nærfriluftsliv.',
            solution: 'Friluftslivsaktiviteter i nærmiljøet uten lang reisevei eller dyrt utstyr',
            multipleChoiceOptions: [
              'Friluftslivsaktiviteter i nærmiljøet uten lang reisevei eller dyrt utstyr',
              'Friluftsliv som bare kan utøves i fjellet',
              'Aktiviteter som krever spesialutstyr og lang reise',
              'Innendørs aktiviteter som ligner på friluftsliv',
            ],
          },
        ],
        solution: 'Nærfriluftsliv er friluftslivsaktiviteter som gjøres i nærmiljøet. Det er bærekraftig, tilgjengelig og enkelt å inkludere i hverdagen, uten behov for lang reisevei eller kostbart utstyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke helseeffekter har friluftsliv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den mest korrekte beskrivelsen av helseeffektene av friluftsliv.',
            solution: 'Bedre fysisk helse, redusert stress, bedre søvn og økt konsentrasjon',
            multipleChoiceOptions: [
              'Bedre fysisk helse, redusert stress, bedre søvn og økt konsentrasjon',
              'Bare bedre fysisk form',
              'Ingen dokumenterte helseeffekter',
              'Bare effekt på psykisk helse',
            ],
          },
        ],
        solution: 'Friluftsliv har dokumentert positiv effekt på både fysisk og psykisk helse. Det gir bedre utholdenhet og styrke, reduserer stresshormoner, forbedrer søvnkvalitet, øker konsentrasjon og kreativitet, og styrker immunforsvaret.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med naturens restitusjonseffekt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Naturomgivelser lar hjernen hvile og gjenoppretter mental energi',
            multipleChoiceOptions: [
              'Naturomgivelser lar hjernen hvile og gjenoppretter mental energi',
              'At naturen reparerer seg selv etter skade',
              'At man må hvile etter en tur',
              'At planter vokser raskere i sollys',
            ],
          },
        ],
        solution: 'Naturens restitusjonseffekt (Kaplan og Kaplan) beskriver hvordan naturomgivelser krever lite bevisst oppmerksomhet, noe som lar hjernen hvile og hente seg inn. Allerede 20 minutter i naturen kan senke stressnivået merkbart.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en plan for en utendørs treningsøkt i nærområdet ditt. Inkluder oppvarming, hoveddel og avslutning, og forklar hvilke fysiske egenskaper som trenes.',
        solution: 'Eksempel: Oppvarming (10 min): lett jogg til nærskogen. Hoveddel (25 min): styrkeøvelser med naturmaterialer (armhevinger mot stein, knebøy, utfall), løping opp en bakke (3 repetisjoner), balansetrening på trestamme, og spensthopp over stubber. Avslutning (10 min): tøying og dyp pusting i ro. Trener: utholdenhet (jogg, bakkeløp), styrke (kroppsvektøvelser), balanse (trestamme), og spenst (hopp). Avspenning gir mental restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv minst fem friluftslivsaktiviteter du kan gjøre i ditt nærområde. Forklar hva som gjør dem tilgjengelige og hvilke helseeffekter de kan gi.',
        solution: 'Eksempler: 1) Turgåing i nærskogen – enkel, gratis, gir utholdenhet og stressreduksjon. 2) Bading i lokalt vann – styrker immunforsvaret og gir energi. 3) Sykling på lokale stier – god kondisjonsrening, transport. 4) Buldring/klatring på steinblokker – styrke, balanse og konsentrasjon. 5) Fisking i nærliggende elv/vann – tålmodighet, avspenning og naturkontakt. Alle er tilgjengelige uten lang reise, krever minimalt utstyr, og gir både fysiske og psykiske helsefordeler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-7-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter hvorfor nærfriluftsliv er viktig for folkehelsen i Norge. Bruk kunnskap om helseeffekter, tilgjengelighet og bærekraft i svaret ditt.',
        solution: 'Nærfriluftsliv er viktig for folkehelsen fordi: 1) Tilgjengelighet – alle har natur i nærheten, uavhengig av økonomi, alder eller funksjonsnivå. 2) Regelmessighet – kort avstand gjør det enklere å komme seg ut ofte, noe som er avgjørende for helseeffekten. 3) Helseeffekter – dokumentert effekt på hjerte-karsykdom, psykisk helse, immunforsvar og søvnkvalitet. 4) Bærekraft – ingen reiseutslipp, lav miljøbelastning. 5) Sosial inkludering – lavterskel aktiviteter samler mennesker på tvers av bakgrunn. 6) Forebygging – regelmessig friluftsliv forebygger livsstilssykdommer og reduserer helseutgifter. Norge har med sin allemannsrett og nærhet til natur unike forutsetninger for å bruke nærfriluftsliv som folkehelsestrategi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler fra Kapittel 7
// ============================================================================

export const KROPPSOVING_VG2_KAP7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG2_7_1,
  CHAPTER_KROPPSOVING_VG2_7_2,
  CHAPTER_KROPPSOVING_VG2_7_3,
  CHAPTER_KROPPSOVING_VG2_7_4,
  CHAPTER_KROPPSOVING_VG2_7_5,
];
