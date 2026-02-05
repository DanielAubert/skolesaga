/**
 * Norsk VG3 - Lyrikk og drama (utvidet)
 *
 * Følger LK20 kompetansemål:
 * - analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag
 * - sammenligne tekster fra ulike tider
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// LYRIKK FRA 1850 TIL I DAG (UTVIDET)
// ============================================================================

// ----------------------------------------------------------------------------
// 9.1 Lyrikk fra 1850 til i dag - oversikt
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_9_1: TextbookChapter = {
  id: 'norsk-vg3-9-1',
  courseId: 'norsk-vg3',
  chapterNumber: '9.1',
  title: 'Norsk lyrikk fra 1850 til i dag',
  description: 'En reise gjennom norsk lyrikk fra nasjonalromantikken til samtiden.',
  estimatedMinutes: 85,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'sammenligne tekster fra ulike tider og utforske hvordan de er påvirket av samtida si og litteraturhistoria',
  ],
  content: [
    {
      id: 'norsk-vg3-9-1-intro',
      type: 'text',
      content: `## Norsk lyrikk - en rik tradisjon

Norsk lyrikk har en rik historie fra 1850 til i dag. Fra Wergeland og Welhavens nasjonalromantiske dikt, via symbolismen og modernismen, til dagens mangfoldige lyrikk - diktet har vært en sentral uttrykksform i norsk kultur.

**Periodeoversikt:**

**1850-1890: Nasjonalromantikk og realisme**
Dikterne var opptatt av det nasjonale, naturen og folket. Senere kom den realistiske lyrikken med sosial bevissthet.

Viktige poeter:
- **Henrik Wergeland** (1808-1845): Den frihetselskende romantiker
- **Johan Sebastian Welhaven** (1807-1873): Den formbevisste klassisist
- **Bjørnstjerne Bjørnson** (1832-1910): Nasjonalsangen, folkelige dikt
- **Aasmund Olavsson Vinje** (1818-1870): Nynorsk lyrikk, «Ved Rondane»

**1890-1920: Nyromantikk og symbolisme**
Reaksjon mot realismen. Dikterne søkte det mystiske, stemningsfulle, symbolske.

Viktige poeter:
- **Sigbjørn Obstfelder** (1866-1900): «Jeg ser» - fremmedgjøring
- **Vilhelm Krag** (1871-1933): Stemningslyrikk
- **Nils Collett Vogt** (1864-1937): Sosial og politisk lyrikk

**1920-1950: Tradisjon og fornyelse**
Tradisjonell formlyrikk lever videre, men nye stemmer eksperimenterer.

Viktige poeter:
- **Olaf Bull** (1883-1933): Formfullendt, filosofisk
- **Arnulf Øverland** (1889-1968): Politisk engasjert
- **Nordahl Grieg** (1902-1943): Idealistisk, krigslyrikk
- **Inger Hagerup** (1905-1985): Hverdagslyrikk, kjærlighet

**1950-1970: Modernismens gjennombrudd**
Det modernistiske gjennombruddet i norsk lyrikk. Fri vers, nye temaer, eksperimentering.

Viktige poeter:
- **Tarjei Vesaas** (1897-1970): Symbolsk, eksistensiell
- **Rolf Jacobsen** (1907-1994): Industrimodernisme, natur
- **Olav H. Hauge** (1908-1994): Nynorsk, østlig inspirert
- **Gunvor Hofmo** (1921-1995): Eksistensiell, Holocaust

**1970-2000: Politisk og personlig**
Politisk lyrikk på 70-tallet, mer personlig uttrykk på 80-90-tallet.

Viktige poeter:
- **Jan Erik Vold** (f. 1939): Konkret poesi, jazz
- **Paal-Helge Haugen** (f. 1945): Eksperimentell, nynorsk
- **Tor Ulven** (1953-1995): Mørk, filosofisk
- **Eldrid Lunden** (f. 1940): Feministisk, språkbevisst

**2000-i dag: Mangfold**
Stor bredde i uttrykk og temaer. Nye stemmer.

Viktige poeter:
- **Tone Hødnebø** (f. 1962): Presist, hverdagslig
- **Øyvind Rimbereid** (f. 1966): Dialektbruk, fremtidsvisjon
- **Nils Christian Moe-Repstad** (f. 1978): Filosofisk
- **Sumaya Jirde Ali** (f. 1996): Ung, flerkulturell`,
    },
    {
      id: 'norsk-vg3-9-1-def-1',
      type: 'definition',
      title: 'Lyriske epoker',
      content: `**NASJONALROMANTIKKEN (ca. 1840-1870):**
- Fedrelandskjærlighet
- Naturskildringer
- Folkevise-inspirasjon
- Bundet form (rim, rytme)
- Eksempel: Bjørnsons «Ja, vi elsker»

**REALISMEN (ca. 1870-1890):**
- Sosial bevissthet
- Hverdagsemner
- Mindre «høytidelig»
- Fortsatt ofte bundet form
- Eksempel: Kiellands satiriske dikt

**NYROMANTIKKEN/SYMBOLISMEN (ca. 1890-1905):**
- Stemning og mystikk
- Symboler og antydning
- Det ubevisste, drømmer
- Musikalsk språk
- Eksempel: Obstfelders «Jeg ser»

**MODERNISMEN (ca. 1950-1970):**
- Fri vers
- Brudd med tradisjon
- Hverdagsspråk
- Eksperimentering
- Eksempel: Jacobsens industridikt

**POSTMODERNISMEN (ca. 1980-):**
- Ironi og lek
- Sjangerblanding
- Intertekstualitet
- Mange stemmer
- Eksempel: Volds konkrete poesi`,
    },
    {
      id: 'norsk-vg3-9-1-example-1',
      type: 'example',
      title: 'Analyse: «Jeg ser» av Sigbjørn Obstfelder (1893)',
      problem: `Analyser Obstfelders dikt «Jeg ser» som uttrykk for nyromantisk fremmedgjøring.

Jeg ser på den hvide himmel,
jeg ser på de gråblå skyer,
jeg ser på den blodige sol.

Dette er altså verden.
Dette er altså klodernes hjem.

En regndråpe!

Jeg ser på de høie huse,
jeg ser på de tusende vinduer,
jeg ser på det fjerne kirketårn.

Dette er altså jorden.
Dette er altså menneskenes hjem.

De gråblå skyer samler sig. Solen blev borte.

Jeg ser på de velklædte herrer,
jeg ser på de smilende damer,
jeg ser på de ludende heste.

Hvor de gråblå skyer blir tunge.

Jeg ser, jeg ser...
Jeg er visst kommet på en feil klode!
Her er så underligt...`,
      solution: `**Kontekst:**
Diktet er et nøkkelverk i norsk nyromantikk/symbolisme. Det uttrykker en gjennomgripende fremmedgjøringsfølelse som var typisk for perioden.

**Form:**
- Frie vers uten fast rim
- Repetitiv struktur («Jeg ser...»)
- Triader (tre ting nevnes)
- Korte, konstaterende setninger

**Anafor:**
«Jeg ser» gjentas som et mantra. Jeget observerer, men forstår ikke. Gjentakelsen understreker det mekaniske, fremmedgjorte.

**Trikolon:**
Hver strofe har tre observasjoner:
- himmel, skyer, sol
- huse, vinduer, kirketårn
- herrer, damer, heste

Trikolonene skaper rytme, men også en følelse av oppramsing - jeget katalogiserer verden uten å begripe den.

**Bildespråk:**
- «Den blodige sol» - naturen er fremmed, nesten truende
- «Gråblå skyer» - mørket stiger
- Solen «blev borte» - lyset forsvinner

**Tematikk:**

**Fremmedgjøring:**
Jeget er «kommet på en feil klode». Verden er gjenkjennelig, men likevel helt fremmed. Dette er eksistensiell angst.

**Observasjon uten forståelse:**
Å se er ikke å forstå. Jeget ser, men verden gir ingen mening.

**Modernitet:**
Diktet kan leses som kritikk av moderniteten - de «høie huse», «velklædte herrer». Sivilisasjonen fremmedgjør.

**Avslutningen:**
«Her er så underligt» - en resignert konstatering. Diktet gir ingen løsning, bare en tilstand.

**Betydning:**
Diktet har blitt ikonisk for en eksistensiell grunnfølelse. Det inspirerte senere modernister og leses fortsatt som uttrykk for fremmedgjøring i moderne tid.`,
    },
    {
      id: 'norsk-vg3-9-1-tip-1',
      type: 'tip',
      title: 'Hvordan analysere lyrikk',
      content: `**STEG FOR STEG:**

**1. Les diktet flere ganger:**
- Første gang: Helhetsinntrykk
- Andre gang: Legg merke til detaljer
- Tredje gang: Les høyt (lytt til rytme og klang)

**2. Beskriv FORM:**
- Strofer og vers
- Rim (enderim, bokstavrim)
- Rytme (bundet eller fri)
- Grafisk utforming

**3. Identifiser VIRKEMIDLER:**
- Bildespråk (metafor, sammenligning, symbol)
- Gjentakelser, kontraster
- Lydlige virkemidler (allitterasjon, assonans)
- Retoriske figurer

**4. Analyser INNHOLD:**
- Hva handler diktet om på overflaten?
- Hvem er «jeg» / «du» / «vi»?
- Hvilke følelser og stemninger?
- Hvilke temaer?

**5. TOLK:**
- Hva «betyr» diktet?
- Hvordan støtter formen innholdet?
- Flere mulige tolkninger?

**6. KONTEKSTUALISER:**
- Når er diktet skrevet?
- Hvilken tradisjon tilhører det?
- Hvordan forholder det seg til samtiden?

**SPØRSMÅL Å STILLE:**
- Hvorfor har dikteren valgt akkurat disse ordene?
- Hva hadde gått tapt med andre ord?
- Hvorfor denne formen?
- Hva er utelatt / taust i diktet?`,
    },
    {
      id: 'norsk-vg3-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign to dikt fra ulike perioder.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg ett dikt fra nasjonalromantikken og ett fra modernismen.',
            solution: 'F.eks. Bjørnson og Jacobsen, eller Welhaven og Hauge.',
          },
          {
            label: 'b',
            task: 'Sammenlign form (rim, rytme, struktur).',
            solution: 'Nasjonalromantikken: bundet form, enderim. Modernismen: fri vers.',
          },
          {
            label: 'c',
            task: 'Sammenlign tema og språk.',
            solution: 'Vurder hvordan periodenes ideer og estetikk påvirker uttrykkene.',
          },
        ],
        solution: 'Sammenligningen skal vise forståelse for litteraturhistorisk utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-9-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gjør en nærlesning av «Jeg ser» av Obstfelder.',
        hints: [
          'Analyser gjentakelsen av «Jeg ser»',
          'Hva betyr det at jeget er på «feil klode»?',
          'Hvordan bidrar formen til innholdet?',
          'Sammenlign med dagens fremmedgjøring',
        ],
        solution: 'Analysen skal vise evne til detaljert lesning og tolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-9-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les tre dikt av tre ulike norske lyrikere og presenter dem for klassen.',
        hints: [
          'Velg dikt du liker',
          'Forbered kort om hver dikter og diktet',
          'Les diktene høyt',
          'Forklar hva du liker ved dem',
        ],
        solution: 'Oppgaven kombinerer lesning, analyse og muntlig presentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 9.2 Olav H. Hauge og Rolf Jacobsen
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_9_2: TextbookChapter = {
  id: 'norsk-vg3-9-2',
  courseId: 'norsk-vg3',
  chapterNumber: '9.2',
  title: 'Olav H. Hauge og Rolf Jacobsen',
  description: 'To av modernismens mestere - naturlyrikk og industripoesi.',
  estimatedMinutes: 80,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-9-2-intro',
      type: 'text',
      content: `## To mestere - Hauge og Jacobsen

Olav H. Hauge (1908-1994) og Rolf Jacobsen (1907-1994) var to av de viktigste norske lyrikerne i det 20. århundre. Begge var modernister, men med svært ulike uttrykk: Hauge skrev på nynorsk om natur, arbeid og visdom; Jacobsen skrev på bokmål om industri, by og det moderne.

**Olav H. Hauge:**

Hauge levde hele livet i Ulvik i Hardanger, der han drev fruktgård og skrev dikt. Han var selvlært, leste vidt, og lot seg inspirere av kinesisk og japansk poesi, av mystikere og filosofer.

Hans dikt er korte, konsentrerte, ofte med naturbilder som åpner mot noe større. Han søkte det enkle, det vesentlige.

**Viktige samlinger:**
- «Glør i oska» (1946)
- «Under bergfallet» (1951)
- «På ørnetuva» (1961)
- «Dropar i austavind» (1966)

**Kjennetegn:**
- Korte, konsentrerte dikt
- Nynorsk med hardingdialekt-innslag
- Naturbilder med symbolsk dybde
- Inspirasjon fra østlig poesi (haiku)
- Visdomsord, aforismer
- Det enkle livets verdier

**Rolf Jacobsen:**

Jacobsen var journalist og redaktør som bodde det meste av livet i Hamar. Han debuterte i 1933 med «Jord og jern», som regnes som det modernistiske gjennombruddet i norsk lyrikk.

Hans dikt tok opp det moderne, industrielle samfunnet på en ny måte - ikke med nostalgi, men med fascinasjon og kritikk.

**Viktige samlinger:**
- «Jord og jern» (1933)
- «Vrimmel» (1935)
- «Stillheten efterpå» (1965)
- «Pusteøvelse» (1975)
- «Nattåpent» (1985)

**Kjennetegn:**
- Industriens estetikk
- Det moderne bylivet
- Fri vers, uregelmessig rytme
- Hverdagsspråk, nøkternt
- Miljøbevissthet (senere)
- Det kosmiske perspektivet`,
    },
    {
      id: 'norsk-vg3-9-2-def-1',
      type: 'definition',
      title: 'Olav H. Hauge (1908-1994)',
      content: `**Biografi:**
- Født 18. august 1908 i Ulvik, Hardanger
- Fruktbonde og poet
- Selvlært, vidtlesende
- Gjennombrudd på 1960-tallet
- Døde 23. mai 1994

**Hovedverk:**
- «Under bergfallet» (1951)
- «På ørnetuva» (1961)
- «Dropar i austavind» (1966)
- «Dagbok 1924-1994» (posthum)

**Litterære trekk:**
- Kortform (ofte 4-8 linjer)
- Konsentrasjon, hvert ord teller
- Naturbilder: tre, steinar, bekker, fuglar
- Inspirasjon: kinesisk/japansk poesi, Tao
- Dialektord, nynorsk
- Visdom, livserfaring

**Temaer:**
- Arbeidet (hagen, epledyrking)
- Naturen som læremester
- Ensomhet og fellesskap
- Aldring og død
- Diktekunsten
- Det enkle, gode liv

**Berømte dikt:**
- «Det er den draumen»
- «Kvardag»
- «Gløyma ikkje»

**Sitat:**
«Det er den draumen me ber på / at noko vidunderleg skal skje»`,
    },
    {
      id: 'norsk-vg3-9-2-def-2',
      type: 'definition',
      title: 'Rolf Jacobsen (1907-1994)',
      content: `**Biografi:**
- Født 8. mars 1907 i Kristiania
- Journalist og redaktør
- Bodde i Hamar
- Debuterte 1933
- Døde 20. februar 1994

**Hovedverk:**
- «Jord og jern» (1933) - gjennombrudd
- «Vrimmel» (1935)
- «Stillheten efterpå» (1965)
- «Headlines» (1969)
- «Pusteøvelse» (1975)
- «Nattåpent» (1985)

**Litterære trekk:**
- Industriens poesi
- Fri vers, moderne rytme
- Hverdagsspråk
- Kontraster (natur/teknikk)
- Miljøkritikk (senere)
- Kosmisk perspektiv

**Temaer:**
- Det moderne, industrielle
- Byen og maskinen
- Mennesket i naturen
- Miljø og overlevelse
- Tid og evighet
- Det hverdagslige mirakel

**Berømte dikt:**
- «Byens metafysikk»
- «Landskap med gravemaskiner»
- «Signal»
- «Stillheten efterpå»

**Sitat:**
«Stillheten efterpå / vil fortelle at vi var her»`,
    },
    {
      id: 'norsk-vg3-9-2-example-1',
      type: 'example',
      title: 'Analyse: «Kvardag» av Olav H. Hauge',
      problem: `Analyser Hauges dikt «Kvardag»:

Sola skin.
Klokka tikkar.
Eg går der kvar dag,
til posthuset,
i den svarte frakken.
Og katten trippar
lågt langs veggene
med ein fugl i kjeften.`,
      solution: `**Form:**
- Åtte korte vers
- Fri vers, ingen rim
- Enkel, nøktern syntaks
- Hverdagsspråk

**Innhold:**
Diktet beskriver en rutinemessig tur til posthuset. Men i det tilsynelatende banale skjer noe: katten har fanget en fugl.

**Analyse:**

**Hverdagens rutine:**
De første linjene etablerer det vante: sola skinner (alltid), klokka tikker (tiden går), jeget går til posthuset (gjentakelse: «kvar dag»).

**Den svarte frakken:**
Et enkelt detalj, men ladet. Den svarte frakken kan assosieres med alvor, død, det uforanderlige.

**Katten og fuglen:**
Så kommer vendingen. Katten «trippar lågt langs veggene / med ein fugl i kjeften». Naturen bryter inn i rutinen. Livet og døden er til stede midt i hverdagen.

**Tolkning:**
Diktet handler om hvordan det dramatiske - liv, død, jakt - skjer midt i det hverdagslige. Vi lever våre rutineliv, men naturen fortsetter sitt brutale kretsløp.

Det kan også leses som bilde på diktekunsten: å se det ekstraordinære i det ordinære.

**Hauges stil:**
Diktet eksemplifiserer Hauges metode:
- Ekstrem korthet
- Hverdagslig utgangspunkt
- Uventet vending
- Åpen tolkning
- Bildets kraft

**Kontekst:**
Hauge skrev om livet i Ulvik - hagen, naturen, det enkle. Men i det enkle fant han dybde.`,
    },
    {
      id: 'norsk-vg3-9-2-example-2',
      type: 'example',
      title: 'Analyse: «Landskap med gravemaskiner» av Rolf Jacobsen',
      problem: `Analyser Jacobsens dikt «Landskap med gravemaskiner» (1951) som eksempel på industrimodernisme.`,
      solution: `**Kontekst:**
Diktet er skrevet i etterkrigstiden da Norge moderniseres. Gravemaskiner var nye, fascinerende, truende.

**Jacobsens prosjekt:**
Å finne poesi i det industrielle - ikke avvise det moderne, men se det som del av menneskets uttrykk.

**Analyse:**

**Maskinene som vesener:**
Jacobsen gir gravemaskinene liv. De er «jernøgler» som «graver seg ned i fjellet». De har vilje, kraft, nesten personlighet.

**Ambivalens:**
Diktet er verken rent positivt eller negativt til maskinene. Det er fascinert, men også urolig. Hva gjør vi med landskapet?

**Menneske og maskin:**
Forholdet mellom mennesket og maskinen er sentralt. Maskinene er våre skapninger, men de overtar landskapet.

**Naturens svar:**
I mange av Jacobsens dikt er naturen tålmodig. Den venter. «Stillheten efterpå» vil komme.

**Formelle trekk:**
- Fri vers
- Lange, dveldende setninger
- Hverdagsspråk, men poetiske bilder
- Kontraster mellom maskin og natur

**Betydning:**
Jacobsen var tidlig ute med å tematisere menneskets påvirkning på naturen. Hans industridikt peker frem mot miljøbevisstheten.

**Sammenligning med Hauge:**
- Hauge: Naturen som læremester
- Jacobsen: Naturen som offer og overlever
- Begge: Respekt for krefter større enn mennesket`,
    },
    {
      id: 'norsk-vg3-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign Hauge og Jacobsen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er likt i deres modernisme?',
            solution: 'Begge bruker fri vers, hverdagsspråk, konsentrerte bilder. Begge er opptatt av menneskets plass i naturen/verden.',
          },
          {
            label: 'b',
            task: 'Hva er ulikt?',
            solution: 'Hauge: bygd, natur, tradisjon, nynorsk, kortform. Jacobsen: by, industri, det moderne, bokmål, lengre dikt.',
          },
          {
            label: 'c',
            task: 'Hvilken foretrekker du? Begrunn.',
            solution: 'Personlig vurdering med begrunnelse.',
          },
        ],
        solution: 'Sammenligningen skal vise forståelse for to ulike modernistiske uttrykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-9-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser «Det er den draumen» av Hauge.',
        hints: [
          'Les diktet flere ganger',
          'Analyser gjentakelsene («skal opna seg»)',
          'Hva er «draumen»?',
          'Hva er «vågen me ikkje har visst um»?',
          'Hvordan er dette et typisk Hauge-dikt?',
        ],
        solution: 'Analysen skal vise nærlesning og tolkningsevne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-9-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les Jacobsens «Stillheten efterpå» og diskuter miljøtematikk.',
        hints: [
          'Hva handler diktet om?',
          'Hva er «stillheten efterpå»?',
          'Hvordan er dette aktuelt i dag?',
          'Sammenlign med klimadebatten',
        ],
        solution: 'Oppgaven kombinerer litterær analyse med aktualisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 9.3 Tarjei Vesaas
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_9_3: TextbookChapter = {
  id: 'norsk-vg3-9-3',
  courseId: 'norsk-vg3',
  chapterNumber: '9.3',
  title: 'Tarjei Vesaas',
  description: 'Tarjei Vesaas - mester i poetisk prosa og symbolsk fortelling.',
  estimatedMinutes: 80,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  content: [
    {
      id: 'norsk-vg3-9-3-intro',
      type: 'text',
      content: `## Tarjei Vesaas - det dunkelt sagtes mester

Tarjei Vesaas (1897-1970) regnes som en av Norges største forfattere. Hans romaner og dikt utforsker menneskets innerste - angst, ensomhet, kjærlighet, ondskap - gjennom et poetisk, symbolladet språk.

**Liv og bakgrunn:**

Vesaas ble født 20. august 1897 på gården Vesås i Vinje, Telemark. Han bodde der hele livet, men reiste mye og var kosmopolitisk orientert.

Han var gift med forfatteren Halldis Moren Vesaas (1907-1995), og sammen var de et av Norges fremste forfatterpar.

**Forfatterskapet:**

Vesaas debuterte i 1923 og skrev gjennom flere faser:

**Tidlige verk (1920-30-tallet):**
Realistiske skildringer av bygdelivet, men allerede med poetiske trekk.

**Mellomperioden (1940-tallet):**
Mer symbolske verker, preget av krigen. «Huset i mørkret» (1945) om okkupasjonen.

**Hovedverkene (1950-60-tallet):**
De store romanene som har gjort ham verdensberømt: «Fuglane» (1957) og «Is-slottet» (1963).

**Viktige verk:**
- «Det store spelet» (1934)
- «Huset i mørkret» (1945)
- «Bleikeplassen» (1946)
- «Fuglane» (1957)
- «Is-slottet» (1963)
- Lyrikk: «Kjeldene» (1946), «Leiken og lynet» (1947)

**Stil og tematikk:**

Vesaas' stil er umiskjennelig:
- Poetisk prosa med symbolsk ladning
- Enkle setninger med stor dybde
- Gjentakelser og rytme
- Naturen som speil for det indre
- Det ordløse, det som ikke kan sies

Temaene er eksistensielle:
- Ensomhet og fellesskap
- Angst og trygghet
- Ondskap og godhet
- Livets skjørhet
- Kjærlighet og tap`,
    },
    {
      id: 'norsk-vg3-9-3-def-1',
      type: 'definition',
      title: 'Tarjei Vesaas (1897-1970)',
      content: `**Biografi:**
- Født 20. august 1897 i Vinje, Telemark
- Bodde på familiegården Vesås
- Gift med Halldis Moren Vesaas
- Nominert til Nobelprisen flere ganger
- Døde 15. mars 1970

**Hovedverk:**
*Romaner:*
- «Det store spelet» (1934)
- «Huset i mørkret» (1945)
- «Fuglane» (1957)
- «Is-slottet» (1963)
- «Bruene» (1966)

*Lyrikk:*
- «Kjeldene» (1946)
- «Leiken og lynet» (1947)
- «Ver ny, vår draum» (1956)

**Litterære kjennetegn:**
- Poetisk prosa
- Symbolbruk
- Natur som speil
- Det ordløse
- Psykologisk dybde
- Nynorsk med telemarkspreg

**Temaer:**
- Ensomhet og tilhørighet
- Angst og livsvilje
- Ondskap og godhet
- Det uutsigelige
- Menneskets skjørhet

**Utmerkelser:**
- Nordisk Råds Litteraturpris (1964)
- Nominert til Nobelprisen`,
    },
    {
      id: 'norsk-vg3-9-3-example-1',
      type: 'example',
      title: 'Analyse: «Is-slottet» (1963)',
      problem: `Analyser Vesaas' roman «Is-slottet» med fokus på symbolikk og tematikk.`,
      solution: `**Handling:**
Siss og Unn er to jenter som møtes og føler en intens tiltrekning. Unn vil fortelle noe, men tør ikke. Etter møtet går Unn til en fossen som har frosset til et «is-slott». Hun går inn og fryser i hjel. Siss sørger og søker etter Unn hele vinteren, til våren kommer og isen smelter.

**Symbolikken:**

**Is-slottet:**
Fossen som har frosset er romanens sentrale symbol. Det er vakkert, lokkende, farlig. Det representerer:
- Kulde og død
- Det forlokkende farlige
- Isolasjon og ensomhet
- Det som stivner og dør

**Varme og kulde:**
Gjennom romanen kontrasteres varme (fellesskap, liv) og kulde (ensomhet, død). Unns vei inn i is-slottet er en vei bort fra varmen.

**Lyset:**
Lys og mørke brukes symbolsk. Is-slottet er mørkt; våren bringer lys.

**Temaer:**

**Vennskap og kjærlighet:**
Forholdet mellom Siss og Unn er intenst, men uuttalt. Det de føler kan ikke sies. Vesaas tematiserer det ordløse i menneskelige bånd.

**Hemmeligheten:**
Unn har en hemmelighet hun ikke kan dele. Byrden av det usagte driver henne mot is-slottet.

**Sorg og frigjøring:**
Siss' sorg er langvarig og intens. Først når våren smelter isen, kan hun slippe Unn.

**Vesaas' stil:**
- Korte, bilderike setninger
- Gjentakelser som skaper rytme
- Naturskildringer som speiler det indre
- Det uuttalte som tema og metode

**Betydning:**
«Is-slottet» er blitt en klassiker som leses av ungdom over hele verden. Den fanger noe universelt om vennskap, tap og det å bli voksen.`,
    },
    {
      id: 'norsk-vg3-9-3-example-2',
      type: 'example',
      title: 'Analyse: «Fuglane» (1957)',
      problem: `Analyser Vesaas' roman «Fuglane» med fokus på hovedpersonen Mattis.`,
      solution: `**Handling:**
Mattis («Tusten») er en voksen mann med utviklingshemning som bor sammen med søsteren Hege. Han lever i sin egen verden, nær naturen, særlig opptatt av en rugde som flyr over huset. Når skogsarbeideren Jørgen kommer og Hege forelsker seg, trues Mattis' verden.

**Mattis:**
Mattis er en av litteraturens mest minneverdige karakterer. Han er:
- Utenfor samfunnet, men dypt følsom
- Nær naturen, tolker dens tegn
- Sårbar, redd for forandring
- Full av rikdom som andre ikke ser

**Symbolikken:**

**Rugda:**
Fuglen som flyr over huset blir Mattis' tegn på at han hører til. Når rugda dør, rakner noe i ham.

**Båten:**
Mattis' forsøk på å ro over vatnet blir et bilde på hans livskamp - å holde seg flytende, å komme frem.

**Tematikk:**

**Annerledeshet:**
Romanen utforsker hva det vil si å være annerledes, å ikke passe inn i samfunnets normer.

**Tilhørighet:**
Mattis søker tilhørighet - i naturen, hos søsteren, i tegnene han leser.

**Forandring og tap:**
Jørgens ankomst truer den skjøre balansen i Mattis' liv. Forandring er farlig.

**Vesaas' humanisme:**
Romanen viser Mattis' indre rikdom uten å romantisere. Vesaas insisterer på hans verdighet.

**Stil:**
- Vi er ofte i Mattis' perspektiv
- Poetiske naturskildringer
- Det uuttalte er like viktig som det sagte
- Symbolenes flertydighet

**Betydning:**
«Fuglane» er en humanistisk klassiker som utfordrer våre fordommer om «normalitet» og «intelligens».`,
    },
    {
      id: 'norsk-vg3-9-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser symbolbruken i «Is-slottet».',
        subTasks: [
          {
            label: 'a',
            task: 'Hva representerer is-slottet?',
            solution: 'Kulde, død, isolasjon, det farlig vakre, flukt fra det vanskelige.',
          },
          {
            label: 'b',
            task: 'Hvordan brukes kontrasten varme/kulde?',
            solution: 'Varme = fellesskap, liv, det trygge. Kulde = ensomhet, død, fare.',
          },
          {
            label: 'c',
            task: 'Hva symboliserer våren i slutten?',
            solution: 'Fornyelse, frigjøring, at Siss kan slippe sorgen og gå videre.',
          },
        ],
        solution: 'Analysen skal vise forståelse for Vesaas\' symbolske metode.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-9-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter hvordan Vesaas skildrer «annerledeshet» i «Fuglane».',
        hints: [
          'Hvordan opplever Mattis verden?',
          'Hvordan ser andre på ham?',
          'Er Mattis «fattig» eller «rik»?',
          'Hva sier romanen om «normalitet»?',
        ],
        solution: 'Diskusjonen skal vise forståelse for romanens humanistiske perspektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-9-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les et utdrag fra Vesaas og analyser stilen.',
        hints: [
          'Velg en scene fra «Is-slottet» eller «Fuglane»',
          'Analyser setningsbygning og rytme',
          'Hvordan brukes naturen?',
          'Hva er sagt, hva er usagt?',
        ],
        solution: 'Stilanalysen skal vise forståelse for Vesaas\' poetiske prosa.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 9.4 Drama fra Ibsen til Fosse
// ----------------------------------------------------------------------------

export const CHAPTER_NORSK_VG3_9_4: TextbookChapter = {
  id: 'norsk-vg3-9-4',
  courseId: 'norsk-vg3',
  chapterNumber: '9.4',
  title: 'Drama fra Ibsen til Fosse',
  description: 'Norsk dramatikk fra det moderne gjennombruddet til dagens scener.',
  estimatedMinutes: 75,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'sammenligne tekster fra ulike tider',
  ],
  content: [
    {
      id: 'norsk-vg3-9-4-intro',
      type: 'text',
      content: `## Norsk drama - fra Ibsen til Fosse

Norge har en stolt dramatisk tradisjon. Fra Henrik Ibsen, verdens mest spilte dramatiker etter Shakespeare, til Jon Fosse, som fikk Nobelprisen i 2023 - norsk drama har satt spor internasjonalt.

**Henrik Ibsen (1828-1906):**
Grunnla det moderne realistiske drama. Hans stykker utforsker samfunnets dobbeltmoral og individets frihet.

**Viktige verk:** «Et dukkehjem», «Gengangere», «Vildanden», «Hedda Gabler»

**Bjørnstjerne Bjørnson (1832-1910):**
Ibsens rival og venn. Skrev samfunnskritiske dramaer, men mer direkte og agitatorisk.

**Viktige verk:** «En fallit», «En hanske»

**Gunnar Heiberg (1857-1929):**
Nyromantisk dramatiker. Kjærlighet og erotikk.

**Viktige verk:** «Balkonen», «Kjærlighetens tragedie»

**Nordahl Grieg (1902-1943):**
Politisk drama påvirket av Brecht. Kritikk av kapitalisme og fascisme.

**Viktige verk:** «Vår ære og vår makt», «Nederlaget»

**Jens Bjørneboe (1920-1976):**
Politisk og filosofisk drama. Rettferdighet og ondskap.

**Viktige verk:** «Til lykke med dagen», «Semmelweis»

**Jon Fosse (f. 1959):**
Minimalistisk drama. Det uutsigelige, ensomhet, eksistens. Nobelprisen 2023.

**Viktige verk:** «Nokon kjem til å komme», «Draum om hausten», «Eg er vinden»

**Utviklingslinjer:**

**1880-1900: Realisme og naturalisme**
Drama som avslører samfunnet. Ibsen og Bjørnson dominerer.

**1900-1930: Symbolisme og ekspresjonisme**
Mer poetiske, symbolske uttrykk. Drøm og virkelighet blandes.

**1930-1950: Politisk drama**
Krigen og fascismen preger teatret. Grieg, Øverland.

**1950-1980: Eksperimentering**
Absurdisme, dokumentarteater, politisk teater.

**1980-i dag: Mangfold**
Mange retninger. Fosse etablerer en ny minimalistisk tradisjon.`,
    },
    {
      id: 'norsk-vg3-9-4-def-1',
      type: 'definition',
      title: 'Dramatiske sjangre og tradisjoner',
      content: `**REALISTISK DRAMA:**
- Virkelighetsetterligning
- Samtidige temaer
- Psykologisk troverdighet
- «Den fjerde veggen»
- Eksempel: Ibsens samtidsdramaer

**NATURALISTISK DRAMA:**
- Ekstrem realisme
- Arv og miljø bestemmer
- Mørke, deterministiske temaer
- Eksempel: Strindberg

**SYMBOLISTISK DRAMA:**
- Symboler og antydning
- Stemning viktigere enn handling
- Drømmeaktig
- Eksempel: Maeterlinck

**EPISK TEATER (Brecht):**
- Bryter illusjonen
- Vil vekke til tenkning
- Sanger, plakater, V-effekt
- Eksempel: Griegs dramaer

**ABSURD TEATER:**
- Meningsløshet som tema
- Brudd med logikk
- Språkets utilstrekkelighet
- Eksempel: Beckett

**FOSSES MINIMALISME:**
- Få ord, mange pauser
- Hverdagslig handling
- Det uutsigelige
- Musikalsk struktur
- Eksempel: «Nokon kjem til å komme»`,
    },
    {
      id: 'norsk-vg3-9-4-example-1',
      type: 'example',
      title: 'Sammenligning: Ibsen og Fosse',
      problem: `Sammenlign Henrik Ibsens og Jon Fosses dramatiske prosjekter. Hva er likt, hva er ulikt?`,
      solution: `**LIKHETER:**

**Internasjonalt gjennomslag:**
Begge er blant de mest spilte dramatikerne internasjonalt. Begge har fornyet teaterkunsten.

**Dype temaer:**
Begge utforsker eksistensielle spørsmål: identitet, sannhet, relasjoner. Begge går under overflaten.

**Språkbevissthet:**
Begge er mestere i dialog. Hvert ord teller. Det usagte er like viktig som det sagte.

**Norsk forankring:**
Begge skriver fra norsk virkelighet, men med universell rekkevidde.

**FORSKJELLER:**

| Ibsen | Fosse |
|-------|-------|
| Plotdrevet | Stemningsdrevet |
| Avslører hemmeligheter | Omslutter det usagte |
| Konflikt bygger | «Ingenting skjer» |
| Klimaks og katastrofe | Sirkulær, åpen |
| Mye dialog | Få ord, pauser |
| Samfunnskritikk | Eksistensiell søken |
| Realistisk setting | Abstrakt, universell |
| Psykologisk analyse | Tilstand, væren |

**ARVEN:**
Fosse har sagt at han måtte «drepe» Ibsen for å finne sin egen stemme. Men begge tilhører en tradisjon der teatret utforsker det menneskelige.

**KONKLUSJON:**
Ibsen og Fosse representerer to høydepunkter i norsk dramatikk. Ibsen skapte det moderne drama; Fosse har skapt et nytt uttrykk for vår tid.`,
    },
    {
      id: 'norsk-vg3-9-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign en Ibsen-scene og en Fosse-scene.',
        hints: [
          'Velg en kort scene fra hvert stykke',
          'Sammenlign dialogen (lengde, innhold)',
          'Sammenlign sceneanvisninger',
          'Hva driver scenen fremover?',
          'Hva er «usagt»?',
        ],
        solution: 'Sammenligningen skal vise forståelse for to dramatiske tradisjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-9-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter hva som gjør Fosse «vanskelig» å spille.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke utfordringer gir pausene og gjentakelsene?',
            solution: 'Skuespilleren må fylle pausene med mening. Gjentakelsene må varieres subtilt.',
          },
          {
            label: 'b',
            task: 'Hvordan kan skuespillere skape spenning uten tradisjonell konflikt?',
            solution: 'Gjennom undertekst, kroppsspråk, timing, intensitet i det tilsynelatende hverdagslige.',
          },
        ],
        solution: 'Oppgaven krever refleksjon over teater som kunstform.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-9-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Undersøk hvilke norske dramatikere som spilles i dag.',
        hints: [
          'Sjekk repertoaret til Nationaltheatret, DNS, andre teatre',
          'Hvem spilles mest?',
          'Spilles nye norske dramatikere?',
          'Hva forteller dette om norsk drama i dag?',
        ],
        solution: 'Undersøkelsesoppgave som krever selvstendig research.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Eksporter alle lyrikk- og drama-kapitler
export const NORSK_VG3_LYRIKK_DRAMA_CHAPTERS = [
  CHAPTER_NORSK_VG3_9_1,
  CHAPTER_NORSK_VG3_9_2,
  CHAPTER_NORSK_VG3_9_3,
  CHAPTER_NORSK_VG3_9_4,
];
