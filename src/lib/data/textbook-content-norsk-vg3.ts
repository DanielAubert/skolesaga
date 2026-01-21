/**
 * Tekstbok innhold for Norsk VG3
 *
 * Følger LK20 læreplan for norsk på videregående skole.
 * Tredje år med fokus på litteraturhistorie, språkhistorie og eksamensforberedelse.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Det moderne gjennombruddet (1870-1890)
// ============================================================================

export const CHAPTER_NORSK_VG3_1_1: TextbookChapter = {
  id: 'norsk-vg3-1-1',
  courseId: 'norsk-vg3',
  chapterNumber: '1.1',
  title: 'Det moderne gjennombruddet (1870-1890)',
  description: 'Ibsen, Bjørnson, Kielland og Lie - de fire store og deres samfunnskritiske litteratur.',
  estimatedMinutes: 75,
  competenceGoals: [
    'analysere og tolke tekster fra det moderne gjennombruddet',
    'reflektere over hvordan litteraturen speiler og påvirker samfunnet',
    'sammenligne tekster fra ulike perioder',
  ],
  content: [
    {
      id: 'norsk-vg3-1-1-intro',
      type: 'text',
      content: `## De fire store og det moderne gjennombrudd

Det moderne gjennombruddet (1870-1890) markerte et vendepunkt i nordisk litteratur. Fire norske forfattere ble særlig sentrale: Henrik Ibsen, Bjørnstjerne Bjørnson, Alexander Kielland og Jonas Lie.

**Georg Brandes' programerklæring (1871):**
Den danske litteraturkritikeren holdt en rekke forelesninger der han krevde at litteraturen skulle "sette problemer under debatt". Dette ble startskuddet for en ny type litteratur som tok opp aktuelle samfunnsspørsmål.

**Sentrale temaer:**
- Kvinnens stilling i samfunnet
- Dobbeltmoral og hykleri
- Klasseskiller og sosial urettferdighet
- Religionskritikk
- Individets kamp mot samfunnets normer`,
    },
    {
      id: 'norsk-vg3-1-1-def-1',
      type: 'definition',
      title: 'Henrik Ibsen (1828-1906)',
      content: `**Bakgrunn:**
Født i Skien, oppvokst i fattige kår etter familiens konkurs. Arbeidet ved teatre i Bergen og Kristiania før han dro i selvpålagt eksil (1864-1891).

**Hovedverk fra gjennombruddet:**
- *Samfundets støtter* (1877)
- *Et dukkehjem* (1879)
- *Gengangere* (1881)
- *En folkefiende* (1882)
- *Vildanden* (1884)
- *Rosmersholm* (1886)
- *Hedda Gabler* (1890)

**Ibsens dramatiske teknikk:**
- Analytisk drama: Fortiden avdekkes gradvis
- Retrospektiv teknikk: Hemmeligheter kommer frem
- Symbolbruk: Gjenstander får dypere betydning
- Hverdagsspråk i dialogen`,
    },
    {
      id: 'norsk-vg3-1-1-example-1',
      type: 'example',
      title: 'Analyse: Et dukkehjem (1879)',
      problem: `Analyser slutten av Et dukkehjem der Nora forlater mann og barn. Hvordan kommer Ibsens samfunnskritikk til uttrykk?`,
      solution: `**Noras oppvåkning:**
Nora innser at hun har vært en "dukke" - først for faren, så for ektemannen Torvald. Hun har aldri fått utvikle seg som selvstendig individ.

**Samfunnskritikk:**
- Kritikk av det borgerlige ekteskapet
- Kvinnen som umyndig og uten juridiske rettigheter
- Dobbeltmoral: Torvald bryr seg mer om fasaden enn om Nora
- Kravet om selvrealisering

**Dramatisk teknikk:**
- Retrospektiv avsløring av Noras hemmelighet (lånet)
- Symbolet dukkehjemmet
- Karakterutvikling fra naiv til bevisst
- Den berømte dørsmellingen som avslutning

**Resepsjon:**
Stykket skapte skandale. Mange mente en mor ikke kunne forlate barna sine. Ibsen skrev en alternativ slutt for tyske teatre.`,
    },
    {
      id: 'norsk-vg3-1-1-def-2',
      type: 'definition',
      title: 'Bjørnstjerne Bjørnson (1832-1910)',
      content: `**Bakgrunn:**
Prestesønn fra Kvikne. Engasjert i politikk, nasjonalisme og samfunnsdebatt. Fikk Nobelprisen i litteratur i 1903.

**Hovedverk fra gjennombruddet:**
- *En fallit* (1875) - økonomisk krise og moral
- *Redaktøren* (1875) - pressens makt
- *Kongen* (1877) - kritikk av monarkiet
- *En hanske* (1883) - likestilling i seksualmoralen

**Bjørnsons bidrag:**
- Tok opp politiske og sosiale spørsmål direkte
- Mer agitatorisk enn Ibsen
- Kombinerte nasjonalromantikk med samfunnskritikk
- Skrev også nasjonalsangen "Ja, vi elsker"`,
    },
    {
      id: 'norsk-vg3-1-1-def-3',
      type: 'definition',
      title: 'Alexander Kielland (1849-1906)',
      content: `**Bakgrunn:**
Fra velstående kjøpmannsfamilie i Stavanger. Utdannet jurist. Skrev noveller og romaner med skarp ironi.

**Hovedverk:**
- *Novelletter* (1879) - inkludert "Karen"
- *Garman & Worse* (1880)
- *Arbeidsfolk* (1881)
- *Skipper Worse* (1882)
- *Gift* (1883) - kritikk av skolen

**Kiellands stil:**
- Elegant, ironisk prosa
- Samfunnskritikk gjennom satire
- Kritikk av borgerlig hykleri
- Sympati med de undertrykte`,
    },
    {
      id: 'norsk-vg3-1-1-def-4',
      type: 'definition',
      title: 'Jonas Lie (1833-1908)',
      content: `**Bakgrunn:**
Født i Hokksund, oppvokst i Tromsø. Utdannet jurist, men gikk konkurs og ble forfatter.

**Hovedverk:**
- *Den fremsynte* (1870)
- *Lodsen og hans hustru* (1874)
- *Familjen paa Gilje* (1883)
- *Kommandørens døtre* (1886)
- *Trold* (1891-1892)

**Lies særtrekk:**
- Psykologisk dybde i karakterskildringene
- Fokus på familieliv og kvinneskjebner
- Kombinerte realisme med mystikk
- Nordnorsk natur og folketro`,
    },
    {
      id: 'norsk-vg3-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign de fire store forfatterne.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke temaer var felles for alle fire?',
            solution: 'Samfunnskritikk, kvinners stilling, dobbeltmoral, klasseskiller, kritikk av borgerlige verdier.',
          },
          {
            label: 'b',
            task: 'Hva skiller Ibsens dramatikk fra de andres prosa?',
            solution: 'Ibsen brukte dramatisk form med analytisk teknikk og retrospektiv avsløring. De andre skrev primært romaner og noveller.',
          },
          {
            label: 'c',
            task: 'Hvem av de fire var mest ironisk i stilen?',
            solution: 'Kielland var mest kjent for sin elegante ironi og satire.',
          },
        ],
        solution: 'De fire store utfylte hverandre med ulike sjangre og stilarter, men delte det moderne gjennombruddets idealer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser et utdrag fra Et dukkehjem eller Gengangere.',
        hints: ['Se etter symbolbruk', 'Analyser dialogens funksjon', 'Hvilke hemmeligheter avdekkes?'],
        solution: 'Analysen bør identifisere Ibsens dramatiske teknikk, tematikk og samfunnskritikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les novellen "Karen" av Kielland og skriv en analyse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan bruker Kielland ironi for å kritisere samfunnet?',
            solution: 'Kielland kontrasterer de velståendes hykleri med Karens tragedie. Ironien ligger i motsetningen mellom fasade og virkelighet.',
          },
          {
            label: 'b',
            task: 'Hvilke samfunnsproblemer tar novellen opp?',
            solution: 'Klasseskiller, dobbeltmoral, kvinners sårbare stilling, mangel på sosiale sikkerhetsnett.',
          },
        ],
        solution: 'Analysen skal vise forståelse for Kiellands ironiske stil og samfunnskritikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter hvorfor det moderne gjennombruddet var så viktig for nordisk litteratur.',
        hints: ['Tenk på hva som var nytt', 'Hvordan påvirket det senere litteratur?'],
        solution: 'Gjennombruddet innførte samfunnskritikk som hovedtema, realistisk stil, og la grunnlaget for moderne litteratur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Er temaene fra det moderne gjennombruddet fortsatt aktuelle?',
        subTasks: [
          {
            label: 'a',
            task: 'Gi eksempler på hvordan Et dukkehjem kan være relevant i dag.',
            solution: 'Likestilling, selvrealisering, forventninger til kjønnsroller er fortsatt aktuelle temaer.',
          },
          {
            label: 'b',
            task: 'Hvilke samfunnsproblemer ville en moderne Ibsen ha tatt opp?',
            solution: 'Mulige temaer: klimakrise, sosiale medier, økende ulikhet, identitetspolitikk.',
          },
        ],
        solution: 'Litteraturens grunnleggende spørsmål om individ og samfunn er tidløse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Nyrealisme og mellomkrigstid
// ============================================================================

export const CHAPTER_NORSK_VG3_2_1: TextbookChapter = {
  id: 'norsk-vg3-2-1',
  courseId: 'norsk-vg3',
  chapterNumber: '2.1',
  title: 'Nyrealisme og mellomkrigstid',
  description: 'Hamsun, Undset og Duun - norsk litteratur i verdensklasse.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analysere og tolke tekster fra mellomkrigstiden',
    'drøfte litterære verk i lys av historisk kontekst',
  ],
  content: [
    {
      id: 'norsk-vg3-2-1-intro',
      type: 'text',
      content: `## Mellomkrigstiden i norsk litteratur

Perioden mellom de to verdenskrigene (1918-1940) var en gullalder for norsk litteratur. To norske forfattere fikk Nobelprisen: Knut Hamsun (1920) og Sigrid Undset (1928).

**Historisk kontekst:**
- Første verdenskrig hadde rystet Europa
- Økonomisk krise og arbeidsledighet
- Politisk polarisering
- Fremvekst av fascisme og kommunisme
- Kvinners stemmerett (1913 i Norge)

**Litterære tendenser:**
- Nyrealisme: Tilbake til realistisk skildring
- Psykologisk dybde
- Historiske romaner
- Arbeiderlitteratur
- Bonderomaner og bygdefortellinger`,
    },
    {
      id: 'norsk-vg3-2-1-def-1',
      type: 'definition',
      title: 'Knut Hamsun (1859-1952)',
      content: `**Bakgrunn:**
Født i Lom, oppvokst i Hamarøy i Nordland. Hadde en turbulent ungdom med mange yrker. Nobelpris i 1920.

**Litterær nyskaping:**
Hamsun revolusjonerte romankunsten med sin psykologiske stil. Han ville skildre "det ubevisste sjeleliv" og "hemmelighetsfulle nervevirksomheter".

**Hovedverk:**
- *Sult* (1890) - gjennombrudd
- *Mysterier* (1892)
- *Pan* (1894)
- *Victoria* (1898)
- *Markens grøde* (1917) - Nobelpris
- *Landstrykere* (1927)

**Kontrovers:**
Hamsun støttet nazismen under krigen og møtte Hitler. Dette har preget resepsjonen av forfatterskapet.`,
    },
    {
      id: 'norsk-vg3-2-1-example-1',
      type: 'example',
      title: 'Analyse: Sult (1890)',
      problem: `Analyser åpningen av Sult. Hvordan skildrer Hamsun hovedpersonens indre liv?`,
      solution: `**Åpningen:**
"Det var i den tid jeg gikk omkring og sultet i Kristiania, denne forunderlige by som ingen forlater før han har fått merker av den..."

**Psykologisk stil:**
- Førstepersonsfortelling med intens nærhet
- Strøm av tanker og inntrykk
- Irrasjonelle impulser og stemningsskifter
- Fokus på fysiske fornemmelser

**Nyskaping:**
- Bryter med tradisjonell romanform
- Ingen tydelig ytre handling
- Det indre livet er hovedfokus
- Forløper til modernismen

**Tematikk:**
- Kunstnerens kår
- Fattigdom og stolthet
- Identitet og fremmedgjøring
- Kropp og sinn`,
    },
    {
      id: 'norsk-vg3-2-1-def-2',
      type: 'definition',
      title: 'Sigrid Undset (1882-1949)',
      content: `**Bakgrunn:**
Født i Danmark, oppvokst i Kristiania. Arbeidet som kontordame før hun ble forfatter. Konverterte til katolisismen (1924). Nobelpris i 1928.

**Hovedverk:**
- *Jenny* (1911) - moderne kvinneliv
- *Kristin Lavransdatter* (1920-22) - middelalderroman
- *Olav Audunssøn* (1925-27) - middelalderroman
- *Gymnadenia* (1929) - samtidsroman

**Undsets særtrekk:**
- Grundig historisk research
- Psykologisk dybde i kvinneportretter
- Etiske og religiøse spørsmål
- Detaljerte miljøskildringer`,
    },
    {
      id: 'norsk-vg3-2-1-example-2',
      type: 'example',
      title: 'Analyse: Kristin Lavransdatter',
      problem: `Analyser hvordan Undset skildrer middelalderen og kvinneskjebnen i trilogien.`,
      solution: `**Historisk realisme:**
- Grundig research i middelalderkilder
- Detaljerte skildringer av dagligliv
- Troverdige karakterer i historisk kontekst
- Språket tilpasset tiden

**Kristins utvikling:**
- Kransen: Ungdom og kjærlighet
- Husfrue: Ekteskap og ansvar
- Korset: Aldring og forsoning

**Tematikk:**
- Kjærlighet og plikt
- Synd og tilgivelse
- Kvinnens rolle i samfunnet
- Religiøs tro og tvil

**Modernitet i det historiske:**
Kristins indre konflikter og psykologi er moderne selv om rammen er middelalder.`,
    },
    {
      id: 'norsk-vg3-2-1-def-3',
      type: 'definition',
      title: 'Olav Duun (1876-1939)',
      content: `**Bakgrunn:**
Fra Jøa i Namdalen. Lærerutdannet. Skrev på nynorsk med nordtrøndersk preg.

**Hovedverk:**
- *Juvikfolke* (1918-23) - seksbinds slektssaga
- *Medmenneske* (1929)
- *Menneske og maktene* (1938)

**Duuns særtrekk:**
- Episk slektsskildring
- Kamp mellom godt og ondt
- Nordtrøndersk natur og kultur
- Nynorsk språkkunst
- Psykologisk dybde`,
    },
    {
      id: 'norsk-vg3-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign Hamsun og Undsets forfatterskap.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er likt i deres tilnærming til litteratur?',
            solution: 'Begge la vekt på psykologisk dybde og detaljerte skildringer. Begge var opptatt av etiske spørsmål.',
          },
          {
            label: 'b',
            task: 'Hva skiller dem?',
            solution: 'Hamsun var modernistisk og eksperimentell, Undset mer tradisjonell og historisk orientert. Ulikt syn på religion og politikk.',
          },
        ],
        solution: 'Begge representerer norsk litteratur på høyeste nivå, men med ulike tilnærminger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser et utdrag fra Sult.',
        hints: ['Se etter indre monolog', 'Hvordan skildres fysiske fornemmelser?', 'Hva er irrasjonelt ved hovedpersonen?'],
        solution: 'Analysen bør vise forståelse for Hamsuns psykologiske stil og modernistiske teknikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter hvordan vi bør forholde oss til Hamsuns forfatterskap i lys av hans nazisympati.',
        hints: ['Skille verk og person?', 'Historisk kontekst', 'Kan kunst være uavhengig av kunstneren?'],
        solution: 'Drøftingen bør belyse flere perspektiver på forholdet mellom kunstverk og kunstner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Les et utdrag fra Kristin Lavransdatter og analyser det.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan skildrer Undset middelalderens dagligliv?',
            solution: 'Detaljerte, troverdige skildringer basert på historisk research.',
          },
          {
            label: 'b',
            task: 'Hva gjør Kristin til en moderne karakter?',
            solution: 'Hennes indre konflikter, selvstendighet og psykologiske dybde.',
          },
        ],
        solution: 'Analysen skal vise forståelse for Undsets kombinasjon av historisk realisme og psykologisk dybde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en sammenlignende analyse av to forfattere fra mellomkrigstiden.',
        hints: ['Velg et felles tema', 'Analyser stil og teknikk', 'Sett i historisk kontekst'],
        solution: 'Analysen skal vise evne til å sammenligne forfatterskap på tvers av stil og tematikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Etterkrigslitteratur
// ============================================================================

export const CHAPTER_NORSK_VG3_3_1: TextbookChapter = {
  id: 'norsk-vg3-3-1',
  courseId: 'norsk-vg3',
  chapterNumber: '3.1',
  title: 'Etterkrigslitteratur',
  description: 'Modernisme og eksistensialisme i norsk litteratur etter 1945.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analysere og tolke modernistiske tekster',
    'forstå eksistensialismens innflytelse på litteraturen',
  ],
  content: [
    {
      id: 'norsk-vg3-3-1-intro',
      type: 'text',
      content: `## Etterkrigslitteraturen (1945-1970)

Andre verdenskrig satte dype spor i europeisk litteratur. Hvordan kunne man skrive etter Auschwitz? Modernismen og eksistensialismen ble dominerende retninger.

**Historisk kontekst:**
- Traumet etter krig og holocaust
- Den kalde krigen
- Gjenoppbygging og optimisme
- Atomtrusselen
- 1968-opprøret

**Litterære tendenser:**
- Modernisme: Eksperimentell form
- Eksistensialisme: Menneskets frihet og ansvar
- Absurdisme: Meningsløshet og fremmedgjøring
- Nyenkelt lyrikk: Tarjei Vesaas, Olav H. Hauge`,
    },
    {
      id: 'norsk-vg3-3-1-def-1',
      type: 'definition',
      title: 'Modernisme i litteraturen',
      content: `**Kjennetegn:**
- Eksperimentell form og språk
- Brudd med tradisjonell fortelling
- Fragmentering og montasje
- Subjektiv virkelighetsoppfatning
- Fremmedgjøring og meningsløshet
- Symbolikk og flertydighet

**Teknikker:**
- Bevissthetsstrøm
- Upålitelig forteller
- Tidssprang og flashback
- Intertekstualitet

**Internasjonale forbilder:**
- James Joyce, Virginia Woolf
- Franz Kafka, Samuel Beckett
- Albert Camus, Jean-Paul Sartre`,
    },
    {
      id: 'norsk-vg3-3-1-def-2',
      type: 'definition',
      title: 'Tarjei Vesaas (1897-1970)',
      content: `**Bakgrunn:**
Fra Vinje i Telemark. Skrev på nynorsk. Regnes som Norges fremste modernist.

**Hovedverk:**
- *Fuglane* (1957) - hovedverk
- *Is-slottet* (1963) - ungdomsroman
- *Bruene* (1966)

**Vesaas' stil:**
- Poetisk, symbolsk prosa
- Enkelt, men dypt språk
- Naturen som speil for sjelen
- Menneskets ensomhet og lengsel
- Grensen mellom normalitet og galskap`,
    },
    {
      id: 'norsk-vg3-3-1-example-1',
      type: 'example',
      title: 'Analyse: Fuglane (1957)',
      problem: `Analyser hvordan Vesaas bruker symbolikk i Fuglane.`,
      solution: `**Hovedpersonen Mattis:**
- Utviklingshemmet mann som lever med søsteren Hege
- Føler seg annerledes og utenfor
- Lengter etter tilhørighet og forståelse

**Sentrale symboler:**
- **Rugdetrekket**: Mattis' identitet og verdi
- **Fuglene**: Frihet og drøm
- **Vannet**: Grense mellom liv og død
- **Båten**: Mattis' livsreise

**Tematikk:**
- Annerledeshet og normalitet
- Kommunikasjon og misforståelse
- Kjærlighet og sjalusi
- Livets mening

**Vesaas' stil:**
- Poetisk, enkel prosa
- Symbolsk dybde under overflaten
- Natur som speiling av indre liv`,
    },
    {
      id: 'norsk-vg3-3-1-def-3',
      type: 'definition',
      title: 'Eksistensialismen',
      content: `**Filosofisk bakgrunn:**
Eksistensialismen er en filosofisk retning som setter menneskets eksistens i sentrum. Sentrale tenkere: Jean-Paul Sartre, Albert Camus, Simone de Beauvoir.

**Hovedtanker:**
- "Eksistensen går forut for essensen"
- Mennesket definerer seg selv gjennom sine valg
- Frihet innebærer ansvar
- Angst overfor tilværelsens meningsløshet
- Autentisitet: Å leve ekte, ikke etter andres forventninger

**I litteraturen:**
- Karakterer som konfronteres med absurditeten
- Valgets betydning og konsekvenser
- Fremmedgjøring og ensomhet
- Søken etter mening`,
    },
    {
      id: 'norsk-vg3-3-1-def-4',
      type: 'definition',
      title: 'Jens Bjørneboe (1920-1976)',
      content: `**Bakgrunn:**
Forfatter, dramatiker og samfunnsdebattant. Kontroversielt og provoserende forfatterskap.

**Hovedverk:**
- *Jonas* (1955) - skolekritikk
- *Under en hårdere himmel* (1957) - nazisme
- Trilogien *Bestialitetens historie*:
  - *Frihetens øyeblikk* (1966)
  - *Kruttårnet* (1969)
  - *Stillheten* (1973)

**Bjørneboes tematikk:**
- Kritikk av maktmisbruk og undertrykkelse
- Menneskets ondskap og brutalitet
- Frihet og opprør
- Kunstnerens rolle i samfunnet`,
    },
    {
      id: 'norsk-vg3-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som kjennetegner modernismen i litteraturen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er typisk for modernistisk form?',
            solution: 'Eksperimentell form, fragmentering, bevissthetsstrøm, brudd med tradisjonell fortelling.',
          },
          {
            label: 'b',
            task: 'Hvilke temaer er sentrale?',
            solution: 'Fremmedgjøring, meningsløshet, identitet, subjektiv virkelighetsoppfatning.',
          },
        ],
        solution: 'Modernismen bryter med tradisjonelle litterære konvensjoner både i form og innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser et utdrag fra Fuglane eller Is-slottet.',
        hints: ['Se etter symbolikk', 'Hvordan skildres naturen?', 'Hva er underteksten?'],
        solution: 'Analysen bør vise forståelse for Vesaas\' poetiske stil og symbolbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar eksistensialismens hovedtanker og hvordan de kommer til uttrykk i litteraturen.',
        hints: ['Hva betyr "eksistensen forut for essensen"?', 'Hva er autentisitet?'],
        solution: 'Forklaringen skal vise forståelse for eksistensialismens filosofi og litterære uttrykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter hvordan andre verdenskrig påvirket litteraturen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke spørsmål stilte forfatterne seg?',
            solution: 'Hvordan skrive etter holocaust? Hvordan forstå menneskets ondskap? Har livet mening?',
          },
          {
            label: 'b',
            task: 'Hvordan påvirket dette litterær form og innhold?',
            solution: 'Fragmentering, absurdisme, fokus på meningsløshet og fremmedgjøring.',
          },
        ],
        solution: 'Krigen førte til et grunnleggende oppgjør med humanistisk optimisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign en norsk og en internasjonal modernistisk tekst.',
        hints: ['Velg sammenlignbare verk', 'Analyser teknikk og tematikk', 'Hva er felles, hva er ulikt?'],
        solution: 'Analysen skal vise evne til å se norsk litteratur i internasjonal kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Samtidslitteratur
// ============================================================================

export const CHAPTER_NORSK_VG3_4_1: TextbookChapter = {
  id: 'norsk-vg3-4-1',
  courseId: 'norsk-vg3',
  chapterNumber: '4.1',
  title: 'Samtidslitteratur',
  description: 'Postmodernisme, multikulturalisme og nye stemmer i norsk litteratur.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere og tolke samtidige tekster',
    'reflektere over mangfold i litteraturen',
  ],
  content: [
    {
      id: 'norsk-vg3-4-1-intro',
      type: 'text',
      content: `## Samtidslitteraturen (1980-i dag)

Norsk litteratur har gjennomgått store endringer de siste tiårene. Globaliseringen, innvandringen og digitaliseringen har skapt nye perspektiver og stemmer.

**Utviklingstrekk:**
- Postmodernisme på 1980-90-tallet
- Autofiskjon og selvbiografisk litteratur
- Flerkulturelle stemmer
- Klimabevissthet og økokritikk
- Digitale fortellinger

**Viktige forfattere:**
- Jon Fosse, Karl Ove Knausgård
- Dag Solstad, Hanne Ørstavik
- Maria Navarro Skaranger, Zeshan Shakar
- Maja Lunde, Tomas Espedal`,
    },
    {
      id: 'norsk-vg3-4-1-def-1',
      type: 'definition',
      title: 'Postmodernisme',
      content: `**Kjennetegn:**
- Skepsis til store fortellinger
- Lek med sjangre og konvensjoner
- Ironi og selvreferanse
- Intertekstualitet
- Usikkerhet om sannhet og virkelighet

**I norsk litteratur:**
- Dag Solstad: Selvrefleksjon og intellektuell tvil
- Jan Kjærstad: Romaneksperimenter
- Kjartan Fløgstad: Politisk og stilistisk mangfold

**Forskjell fra modernismen:**
Mens modernismen søkte etter mening i fragmentene, aksepterer postmodernismen meningsløsheten med et skuldertrekk eller ironi.`,
    },
    {
      id: 'norsk-vg3-4-1-def-2',
      type: 'definition',
      title: 'Jon Fosse (f. 1959)',
      content: `**Bakgrunn:**
Fra Haugesund. Nobelpris i litteratur 2023. Skriver på nynorsk.

**Hovedverk:**
- Dramatikk: *Nokon kjem til å komme*, *Eg er vinden*
- Prosa: *Septologien* (2019-2021)
- Lyrikk og essay

**Fosses særtrekk:**
- Minimalistisk stil
- Repetisjon og rytme
- Eksistensielle temaer
- Det usagte og pausene
- Grenseopplevelser mellom liv og død

**Nobelprisen 2023:**
"for hans nyskapande dramatikk og prosa som gjev stemme til det usigelege"`,
    },
    {
      id: 'norsk-vg3-4-1-def-3',
      type: 'definition',
      title: 'Karl Ove Knausgård (f. 1968)',
      content: `**Bakgrunn:**
Fra Kristiansand. Debuterte i 1998. Internasjonal gjennombrudd med Min kamp.

**Hovedverk:**
- *Min kamp* 1-6 (2009-2011)
- *Om høsten*, *Om vinteren* osv.
- *Morgenstjernen* (2020)

**Autofiskjon:**
Knausgård blander fiksjon og virkelighet. Han bruker egne og andres navn, men skaper likevel litteratur.

**Kontroverser:**
Mange av personene i bøkene kjente seg igjen og reagerte. Debatten om grenser mellom kunst og privatliv.`,
    },
    {
      id: 'norsk-vg3-4-1-def-4',
      type: 'definition',
      title: 'Flerkulturelle stemmer',
      content: `**Nye perspektiver:**
Forfattere med innvandrerbakgrunn har tilført norsk litteratur nye erfaringer og perspektiver.

**Sentrale forfattere:**
- **Maria Navarro Skaranger**: *Alle utlendinger har lukka gardiner* (2015)
- **Zeshan Shakar**: *Tante Ulrikkes vei* (2017)
- **Jonas Hassen Khemiri** (svensk-tunisisk): *Alt jeg ikke husker*
- **Sumaya Jirde Ali**: Lyrikk og essay

**Tematikk:**
- Identitet mellom kulturer
- Tilhørighet og utenforskap
- Rasisme og fordommer
- Språk og kodeskifte
- Generasjonskonflikter`,
    },
    {
      id: 'norsk-vg3-4-1-example-1',
      type: 'example',
      title: 'Analyse: Tante Ulrikkes vei (2017)',
      problem: `Analyser hvordan Zeshan Shakar skildrer ungdomsmiljøet på Stovner i Oslo.`,
      solution: `**Struktur:**
Romanen veksler mellom to fortellere: Jamal og Mo, barndomsvenner med ulike veier.

**Språk:**
- Autentisk ungdomsspråk
- Kodeskifte mellom norsk, urdu og engelsk
- SMS og sosiale medier

**Tematikk:**
- Klassereise og sosial mobilitet
- Forventninger og muligheter
- Vennskap og lojalitet
- Kulturelle forskjeller
- Identitet og tilhørighet

**Samfunnskritikk:**
- Forskjells-Norge
- Fordommer mot østkanten
- Betydningen av sosial bakgrunn`,
    },
    {
      id: 'norsk-vg3-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som kjennetegner postmodernismen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med "skepsis til store fortellinger"?',
            solution: 'Postmodernismen avviser universelle sannheter og ideologier som forklarer alt.',
          },
          {
            label: 'b',
            task: 'Hva er intertekstualitet?',
            solution: 'Referanser til andre tekster, sitater, allusjoner - tekster i dialog med hverandre.',
          },
        ],
        solution: 'Postmodernismen utfordrer tradisjonelle forestillinger om sannhet, mening og kunst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Les et utdrag fra Septologien av Jon Fosse og analyser stilen.',
        hints: ['Se etter gjentakelser', 'Hvordan er setningsstrukturen?', 'Hva er det usagte?'],
        solution: 'Analysen bør vise forståelse for Fosses minimalistiske og repetitive stil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter autofiskjon som sjanger.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skiller autofiskjon fra tradisjonell selvbiografi?',
            solution: 'Autofiskjon blander fakta og fiksjon, og bryter med konvensjonene for begge sjangre.',
          },
          {
            label: 'b',
            task: 'Hvilke etiske spørsmål reiser autofiskjon?',
            solution: 'Hva er grensen for hva man kan skrive om andre? Samtykke? Rett til eget liv?',
          },
        ],
        solution: 'Autofiskjon utfordrer skillet mellom virkelighet og fiksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser en tekst av en flerkulturell forfatter.',
        hints: ['Hvordan tematiseres identitet?', 'Hvilket språk brukes?', 'Hvordan skildres Norge?'],
        solution: 'Analysen bør vise forståelse for hvordan flerkulturell erfaring kommer til uttrykk i litteratur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Reflekter over hvordan litteraturen speiler samfunnsendringer.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke nye temaer har kommet inn i norsk litteratur?',
            solution: 'Migrasjon, klima, digitalisering, globalisering, nye familieformer.',
          },
          {
            label: 'b',
            task: 'Hvordan har språket i litteraturen endret seg?',
            solution: 'Mer mangfold, kodeskifte, ungdomsspråk, flerspråklighet.',
          },
        ],
        solution: 'Litteraturen både speiler og påvirker samfunnsutviklingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Språkhistorie og språkpolitikk
// ============================================================================

export const CHAPTER_NORSK_VG3_5_1: TextbookChapter = {
  id: 'norsk-vg3-5-1',
  courseId: 'norsk-vg3',
  chapterNumber: '5.1',
  title: 'Språkhistorie og språkpolitikk',
  description: 'Fra norrønt til moderne norsk - språkutviklingen gjennom 1000 år.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for språkhistoriske utviklingslinjer',
    'drøfte språkpolitiske spørsmål',
  ],
  content: [
    {
      id: 'norsk-vg3-5-1-intro',
      type: 'text',
      content: `## Norsk språkhistorie

Det norske språket har en tusenårig historie. Fra vikingtiden til i dag har språket gjennomgått store endringer.

**Hovedperioder:**
1. **Urnordisk** (ca. 200-700): Runer, felles nordisk
2. **Norrønt** (ca. 700-1350): Vikingtid, sagalitteratur
3. **Mellomnorsk** (1350-1525): Svartedauden, dansk innflytelse
4. **Dansk skriftspråk** (1525-1814): Unionen med Danmark
5. **Moderne norsk** (1814-): To skriftspråk utvikles`,
    },
    {
      id: 'norsk-vg3-5-1-def-1',
      type: 'definition',
      title: 'Norrønt språk',
      content: `**Kjennetegn:**
- Rikt bøyningssystem (kasus, kjønn, tall)
- Fire kasus: nominativ, akkusativ, dativ, genitiv
- Tre kjønn: hankjønn, hunkjønn, intetkjønn
- Runealfabetet, senere latinske bokstaver

**Eksempel:**
*Norrønt:* "Maðr er manns gaman"
*Moderne:* "Mennesket er menneskets glede"

**Sagalitteraturen:**
- Islendingesagaene
- Kongssagaene (Snorre)
- Edda-diktningen`,
    },
    {
      id: 'norsk-vg3-5-1-def-2',
      type: 'definition',
      title: 'Språkendringer etter svartedauden',
      content: `**Svartedauden (1349-50):**
- Halvparten av befolkningen døde
- Samfunnsstrukturer brøt sammen
- Skrivekyndige døde - skrifttradisjonen svekket

**Konsekvenser for språket:**
- Bøyningssystemet forenklet
- Kasus forsvant gradvis
- Dansk innflytelse økte
- Dialektene utviklet seg fritt

**Dansk som skriftspråk:**
Etter unionen med Danmark (1380) ble dansk gradvis enerådende som skriftspråk. Norsk levde videre som talespråk i dialektene.`,
    },
    {
      id: 'norsk-vg3-5-1-def-3',
      type: 'definition',
      title: 'Bokmål og nynorsk',
      content: `**Etter 1814:**
Norge trengte et eget skriftspråk. To strategier:

**Bokmål (riksmål):**
- Gradvis fornorsking av dansk
- Knud Knudsen (1812-1895): Talespråksbasert reform
- Bygger på dannet dagligtale

**Nynorsk (landsmål):**
- Nytt språk basert på dialektene
- Ivar Aasen (1813-1896): Samlet dialekter
- Publiserte grammatikk (1848) og ordbok (1850)

**Språkstriden:**
Konflikten mellom de to språkene har preget norsk språkpolitikk i over 100 år.`,
    },
    {
      id: 'norsk-vg3-5-1-def-4',
      type: 'definition',
      title: 'Rettskrivingsreformer',
      content: `**Viktige reformer:**

**1907:** Første store bokmålsreform
- Harde konsonanter: p, t, k (ikke b, d, g)
- Mer norsk ordforråd

**1917:** Radikal reform
- Obligatoriske norske former
- Skapte strid

**1938:** "Samnorsk"-politikk
- Skulle nærme språkene
- Radikale former innført
- Stor motstand

**1959 og 2005:** Valgfrihet økt
- Mange former likestilt
- Samnorsk-politikken forlatt`,
    },
    {
      id: 'norsk-vg3-5-1-example-1',
      type: 'example',
      title: 'Språkendringer fra norrønt til moderne norsk',
      problem: `Analyser hvordan dette norrøne sitatet har endret seg:
"Kona hans var fögr ok vitr."`,
      solution: `**Ordrett oversettelse:**
"Kona hans var vakker og klok."

**Analyse av endringer:**

| Norrønt | Moderne | Endring |
|---------|---------|---------|
| kona | kona | Uendret |
| hans | hans | Uendret |
| var | var | Uendret |
| fögr | vakker | Ordskifte |
| ok | og | Lydendring |
| vitr | klok/vis | Ordskifte |

**Bøyning:**
- Norrønt "fögr" er hunkjønn nominativ
- Moderne norsk: Adjektivet bøyes ikke etter kjønn

**Språkkontakt:**
"Vakker" er et låneord fra lavtysk/dansk.`,
    },
    {
      id: 'norsk-vg3-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gjør rede for hovedtrekkene i norsk språkhistorie.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjedde med det norske språket etter svartedauden?',
            solution: 'Bøyningssystemet forenklet, skrifttradisjonen svekket, dansk ble skriftspråk.',
          },
          {
            label: 'b',
            task: 'Hvorfor fikk vi to skriftspråk?',
            solution: 'Ulike strategier: Fornorsking av dansk (bokmål) vs. nytt språk fra dialektene (nynorsk).',
          },
        ],
        solution: 'Norsk språkhistorie er preget av ytre påvirkning og indre strid om skriftspråket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign Knud Knudsens og Ivar Aasens strategier.',
        hints: ['Hva var utgangspunktet?', 'Hva ble resultatet?'],
        solution: 'Knudsen ville fornorske dansk, Aasen ville lage et nytt språk fra dialektene. Begge strategier førte til egne skriftspråk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser et norrønt tekstutdrag.',
        subTasks: [
          {
            label: 'a',
            task: 'Oversett teksten til moderne norsk.',
            solution: 'Oversettelsen viser forståelse for norrøn grammatikk og ordforråd.',
          },
          {
            label: 'b',
            task: 'Pek på språklige forskjeller.',
            solution: 'Bøyning, ordforråd, setningsstruktur.',
          },
        ],
        solution: 'Analysen viser evne til å arbeide med norrønt språk og forstå språkendringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft samnorsk-politikken.',
        hints: ['Hva var målet?', 'Hvorfor mislyktes den?', 'Hva er situasjonen i dag?'],
        solution: 'Drøftingen viser forståelse for språkpolitiske prosesser og konflikter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-5-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Diskuter fremtiden for bokmål og nynorsk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke utfordringer står nynorsken overfor?',
            solution: 'Færre brukere, press fra bokmål, digitale verktøy.',
          },
          {
            label: 'b',
            task: 'Hva taler for å bevare to skriftspråk?',
            solution: 'Kulturarv, identitet, mangfold, demokrati.',
          },
        ],
        solution: 'Diskusjonen viser evne til å drøfte språkpolitiske spørsmål fra flere sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Språklig variasjon
// ============================================================================

export const CHAPTER_NORSK_VG3_6_1: TextbookChapter = {
  id: 'norsk-vg3-6-1',
  courseId: 'norsk-vg3',
  chapterNumber: '6.1',
  title: 'Språklig variasjon',
  description: 'Dialekter, sosiolekter og flerspråklighet i Norge.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere språklig variasjon',
    'reflektere over språk og identitet',
  ],
  content: [
    {
      id: 'norsk-vg3-6-1-intro',
      type: 'text',
      content: `## Språklig variasjon i Norge

Norge er et land med stor språklig variasjon. Dialekter, sosiolekter og ulike språk preger hverdagen.

**Typer variasjon:**
- **Geografisk:** Dialekter
- **Sosial:** Sosiolekter, grupppespråk
- **Situasjonell:** Registre, formelt/uformelt
- **Individuell:** Idiolekt

**Norge som flerspråklig land:**
- Norsk (bokmål/nynorsk)
- Samisk (flere varianter)
- Kvensk, romani, romanes
- Innvandrerspråk
- Norsk tegnspråk`,
    },
    {
      id: 'norsk-vg3-6-1-def-1',
      type: 'definition',
      title: 'Dialekter',
      content: `**Definisjon:**
En dialekt er en geografisk avgrenset språkvarietet med egne kjennetegn i uttale, ordforråd og grammatikk.

**Hovedgrupper:**
- **Østnorsk:** Østlandet
- **Vestnorsk:** Vestlandet
- **Trøndersk:** Trøndelag
- **Nordnorsk:** Nord-Norge

**Viktige skillelinjer:**
- Tjukk L (østnorsk, trøndersk)
- Palatalisering (mæinn' for mannen)
- Jamning (veku for vika)
- Apokope (bort for borte)

**Dialektenes status:**
I Norge har dialektene høy status. Det er akseptert å snakke dialekt i alle sammenhenger.`,
    },
    {
      id: 'norsk-vg3-6-1-def-2',
      type: 'definition',
      title: 'Sosiolekter og gruppespråk',
      content: `**Sosiolekt:**
Språkvarietet knyttet til sosial gruppe, klasse eller alder.

**Eksempler:**
- Overklassespråk ("pent" østkantmål)
- Arbeiderspråk
- Ungdomsspråk

**Gruppespråk (slang):**
- Kebabnorsk/multietnoisk norsk
- Gamerspråk
- Yrkesspråk

**Multietnolekt:**
Språkvarietet som har oppstått i flerkulturelle bymiljøer. Trekk fra flere språk kombinert med norsk.`,
    },
    {
      id: 'norsk-vg3-6-1-def-3',
      type: 'definition',
      title: 'Flerspråklighet',
      content: `**Individnivå:**
Å beherske to eller flere språk. Svært vanlig globalt.

**Samfunnsnivå:**
Et samfunn der flere språk brukes. Norge er offisielt flerspråklig.

**Norges språk:**
- **Nasjonalspråk:** Norsk (bokmål og nynorsk)
- **Urfolksspråk:** Samisk (sørsamisk, lulesamisk, nordsamisk)
- **Minoritetsspråk:** Kvensk, romani, romanes
- **Innvandrerspråk:** Arabisk, somali, urdu, polsk m.fl.

**Språklige rettigheter:**
- Samelovens språkregler
- Rett til opplæring på samisk
- Tolketjenester`,
    },
    {
      id: 'norsk-vg3-6-1-example-1',
      type: 'example',
      title: 'Analyse: Dialekt i litteraturen',
      problem: `Hvordan brukes dialekt i norsk litteratur, og hvilken effekt har det?`,
      solution: `**Historisk bruk:**
- Asbjørnsen og Moe: Folkeeventyrene
- Arne Garborg: Jærsk dialekt
- Ivar Aasen: Grunnlag for nynorsk

**Moderne bruk:**
- Frode Grytten: Bergensk
- Roy Jacobsen: Nordnorsk
- Maria Navarro Skaranger: Multietnoisk

**Effekt:**
- Autentisitet og troverdighet
- Karakterisering
- Identitetsmarkør
- Politisk markering
- Lokalt koloritt

**Dilemma:**
Dialekt kan gi lesevansker for noen, men styrker nærheten til karakterene.`,
    },
    {
      id: 'norsk-vg3-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser din egen dialekt eller sosiolekt.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke dialekttrekk har du?',
            solution: 'Identifiser uttale, ordforråd og grammatiske trekk.',
          },
          {
            label: 'b',
            task: 'Tilpasser du språket etter situasjon?',
            solution: 'Beskriv kodeskifte og registervariasjon.',
          },
        ],
        solution: 'Analysen viser bevissthet om egen språklig praksis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign to norske dialekter.',
        hints: ['Velg konkrete trekk', 'Bruk eksempler', 'Forklar årsaker til forskjellene'],
        solution: 'Sammenligningen viser kunnskap om dialektvariasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter dialektenes fremtid.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke trusler står dialektene overfor?',
            solution: 'Urbanisering, medier, mobilitet, standardisering.',
          },
          {
            label: 'b',
            task: 'Hvorfor bør dialektene bevares?',
            solution: 'Kulturarv, identitet, språklig mangfold.',
          },
        ],
        solution: 'Diskusjonen viser forståelse for dialektenes rolle og utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser multietnolekt i et tekstutdrag.',
        hints: ['Se etter lånord', 'Analyser grammatiske trekk', 'Hvilken funksjon har språket?'],
        solution: 'Analysen viser forståelse for nye språkvarieteter i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft Norges ansvar for samisk og kvensk.',
        hints: ['Hva er urfolk og minoriteter?', 'Hvilke rettigheter har de?', 'Hva gjøres for å styrke språkene?'],
        solution: 'Drøftingen viser forståelse for språklige rettigheter og minoritetspolitikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Retorikk og argumentasjon
// ============================================================================

export const CHAPTER_NORSK_VG3_7_1: TextbookChapter = {
  id: 'norsk-vg3-7-1',
  courseId: 'norsk-vg3',
  chapterNumber: '7.1',
  title: 'Retorikk og argumentasjon',
  description: 'Avansert retorisk analyse og argumentasjonsteknikk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analysere retoriske tekster og taler',
    'bruke retoriske virkemidler i egen tekst',
  ],
  content: [
    {
      id: 'norsk-vg3-7-1-intro',
      type: 'text',
      content: `## Retorikk - overtalelsens kunst

Retorikken har røtter tilbake til antikkens Hellas. Den handler om hvordan vi bruker språk for å overbevise og påvirke.

**De tre appellformene:**
- **Etos:** Troverdighet, avsenders karakter
- **Patos:** Følelser, engasjement
- **Logos:** Fornuft, argumentasjon

**Retorikkens fem faser:**
1. Inventio: Finne argumenter
2. Dispositio: Ordne stoffet
3. Elocutio: Formulere/stil
4. Memoria: Huske (tale)
5. Actio: Fremføring`,
    },
    {
      id: 'norsk-vg3-7-1-def-1',
      type: 'definition',
      title: 'Etos - troverdighet',
      content: `**Hva er etos?**
Avsenderens troverdighet og karakter. Tilhørerne må stole på at taleren er kompetent, ærlig og velvillig.

**Hvordan bygge etos:**
- Vise kompetanse og kunnskap
- Referere til erfaring
- Bruke autoritative kilder
- Vise moralsk integritet
- Identifisere seg med publikum

**Innledende vs. avledet etos:**
- Innledende: Rykte/posisjon før talen
- Avledet: Det man bygger opp i teksten

**Eksempel:**
En lege som snakker om helse har høy innledende etos. En ukjent kan bygge etos ved å vise til forskning.`,
    },
    {
      id: 'norsk-vg3-7-1-def-2',
      type: 'definition',
      title: 'Patos - følelser',
      content: `**Hva er patos?**
Appell til følelser. Får tilhørerne til å føle noe som motiverer handling.

**Patosteknikker:**
- Personlige historier og eksempler
- Sterke bilder og språklige bilder
- Direkte henvendelse
- Retoriske spørsmål
- Gjentakelse og rytme
- Kontraster

**Følelser i retorikk:**
- Frykt og håp
- Sinne og empati
- Skam og stolthet
- Medlidenhet og identifikasjon

**Balanse:**
For mye patos kan virke manipulerende. Kombineres med logos og etos.`,
    },
    {
      id: 'norsk-vg3-7-1-def-3',
      type: 'definition',
      title: 'Logos - argumentasjon',
      content: `**Hva er logos?**
Appell til fornuften. Logiske argumenter og bevis.

**Argumenttyper:**
- Deduktiv: Fra generell regel til spesifikt tilfelle
- Induktiv: Fra eksempler til generell slutning
- Analogi: Sammenligning med lignende tilfelle

**Toulmins argumentmodell:**
1. Påstand (claim): Det du vil bevise
2. Belegg (data): Bevis for påstanden
3. Hjemmel (warrant): Kobling mellom belegg og påstand
4. Ryggdekning (backing): Støtte for hjemmelen
5. Styrkemarkør: Grad av sikkerhet
6. Unntak (rebuttal): Motargumenter

**Feilslutninger:**
Ugyldige argumenter som kan virke overbevisende: Personangrep, stråmann, falsk dilemma.`,
    },
    {
      id: 'norsk-vg3-7-1-example-1',
      type: 'example',
      title: 'Retorisk analyse: Martin Luther Kings "I Have a Dream"',
      problem: `Analyser hvordan King bruker etos, patos og logos i sin berømte tale.`,
      solution: `**Etos:**
- King var respektert borgerrettighetsleder
- Refererer til grunnloven og uavhengighetserklæringen
- Taler som en profet i bibelsk tradisjon

**Patos:**
- Gjentakelsen "I have a dream"
- Sterke bilder: "check marked insufficient funds"
- Kontraster mellom urettferdighet og drømmen
- Inkluderende "we" - felles kamp

**Logos:**
- Argumenter fra rettferdighet og likhet
- Henvisning til lovfestede rettigheter
- Logisk oppbygning fra problem til løsning

**Kairos:**
Talen ble holdt på rett sted (Lincoln Memorial) og rett tid (marsjen til Washington 1963).`,
    },
    {
      id: 'norsk-vg3-7-1-def-4',
      type: 'definition',
      title: 'Retoriske virkemidler',
      content: `**Gjentakelse:**
- Anafor: Gjentakelse i begynnelsen
- Epifor: Gjentakelse i slutten
- Triade: Tre ting i rekke

**Kontrast:**
- Antitese: Motsetning
- Paradoks: Tilsynelatende selvmotsigelse

**Språklige bilder:**
- Metafor: Sammenligning uten "som"
- Simile: Sammenligning med "som"
- Personifikasjon: Menneskeliggjøring

**Spørsmål:**
- Retorisk spørsmål: Svaret er gitt
- Hyperbol: Overdrivelse
- Litotes: Underdrivelse`,
    },
    {
      id: 'norsk-vg3-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gjør en retorisk analyse av en politisk tale.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser bruk av etos, patos og logos.',
            solution: 'Vis konkrete eksempler på hver appellform.',
          },
          {
            label: 'b',
            task: 'Hvilke retoriske virkemidler brukes?',
            solution: 'Pek på gjentakelse, kontraster, språklige bilder osv.',
          },
          {
            label: 'c',
            task: 'Vurder talens effektivitet.',
            solution: 'Hvordan fungerer appellene sammen? Når talen sitt mål?',
          },
        ],
        solution: 'Analysen skal vise systematisk bruk av retoriske begreper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser et argument med Toulmins modell.',
        hints: ['Hva er påstanden?', 'Hva er belegget?', 'Hva er hjemmelen?'],
        solution: 'Analysen viser evne til å bryte ned argumenter i komponenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Identifiser feilslutninger i en tekst eller debatt.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn eksempler på vanlige feilslutninger.',
            solution: 'Personangrep, stråmann, falsk dilemma, skråplanargument osv.',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor de er ugyldige.',
            solution: 'Vis hva som gjør argumentet logisk feilaktig.',
          },
        ],
        solution: 'Analysen viser kritisk evne til å vurdere argumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en overbevisende tale (3-5 minutter) om et valgfritt tema.',
        hints: ['Planlegg etos, patos og logos', 'Bruk retoriske virkemidler', 'Tenk på publikum'],
        solution: 'Talen skal demonstrere bevisst bruk av retoriske teknikker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-7-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign retorikken i en skriftlig og en muntlig tekst om samme tema.',
        hints: ['Hvordan tilpasses appellene?', 'Hvilke virkemidler brukes ulikt?'],
        solution: 'Sammenligningen viser forståelse for medium og sjanger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Sakprosa og tekstanalyse
// ============================================================================

export const CHAPTER_NORSK_VG3_8_1: TextbookChapter = {
  id: 'norsk-vg3-8-1',
  courseId: 'norsk-vg3',
  chapterNumber: '8.1',
  title: 'Sakprosa og tekstanalyse',
  description: 'Analyse av fagtekster, vitenskapelige tekster og sammensatte tekster.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analysere komplekse sakprosatekster',
    'vurdere kilder og argumentasjon kritisk',
  ],
  content: [
    {
      id: 'norsk-vg3-8-1-intro',
      type: 'text',
      content: `## Sakprosaens mangfold

Sakprosa er tekster som formidler informasjon, argumenterer eller reflekterer over virkeligheten. Sjangeren spenner fra kronikker til vitenskapelige artikler.

**Hovedkategorier:**
- **Funksjonell sakprosa:** Lover, bruksanvisninger, lærebøker
- **Litterær sakprosa:** Essay, kåseri, reportasje
- **Journalistisk sakprosa:** Nyheter, kommentarer, kronikker
- **Vitenskapelig sakprosa:** Artikler, avhandlinger, rapporter`,
    },
    {
      id: 'norsk-vg3-8-1-def-1',
      type: 'definition',
      title: 'Vitenskapelig tekst',
      content: `**Kjennetegn:**
- Objektiv og saklig tone
- Klar struktur (IMRaD)
- Kildehenvisninger
- Fagterminologi
- Metodisk fremgangsmåte

**IMRaD-strukturen:**
- **I**ntroduksjon: Bakgrunn og problemstilling
- **M**etode: Hvordan undersøkelsen er gjort
- **R**esultater: Funn
- **D**iskusjon: Tolkning og implikasjoner

**Krav:**
- Etterprøvbarhet
- Objektivitet (ideelt)
- Presisjon
- Nye bidrag til feltet`,
    },
    {
      id: 'norsk-vg3-8-1-def-2',
      type: 'definition',
      title: 'Kildekritikk',
      content: `**Spørsmål å stille:**
1. **Hvem** er avsenderen?
2. **Hva** er formålet?
3. **Når** er teksten skrevet?
4. **Hvor** er den publisert?
5. **Hvorfor** bør jeg stole på den?

**Vurderingskriterier:**
- Forfatterens kompetanse
- Publiseringskanal
- Kildebruk i teksten
- Aktualitet
- Interessekonflikter

**Digitale kilder:**
- Sjekk nettstedets troverdighet
- Se etter redaksjonell kontroll
- Krysssjekk informasjon
- Vær skeptisk til ukjente kilder`,
    },
    {
      id: 'norsk-vg3-8-1-def-3',
      type: 'definition',
      title: 'Sammensatte tekster',
      content: `**Definisjon:**
Tekster som kombinerer flere uttrykksformer: skrift, bilde, lyd, video, grafikk.

**Typer:**
- Digitale tekster (nettsider, sosiale medier)
- Multimodale lærebøker
- Dokumentarfilm
- Reklame og kampanjer
- Infografikk

**Analysespørsmål:**
- Hvordan samspiller modalitetene?
- Hva bidrar hver modalitet med?
- Hvem er målgruppen?
- Hva er formålet?
- Hvordan påvirkes budskapet?`,
    },
    {
      id: 'norsk-vg3-8-1-example-1',
      type: 'example',
      title: 'Analyse av kronikk',
      problem: `Analyser en kronikk fra en avis. Vurder argumentasjon, kildebruk og troverdighet.`,
      solution: `**Analysemodell:**

**1. Tekstens kontekst:**
- Hvor er den publisert?
- Hvem er forfatteren?
- Når ble den skrevet?
- Hva er den retoriske situasjonen?

**2. Innhold og argumentasjon:**
- Hva er hovedpåstanden?
- Hvilke argumenter brukes?
- Hvordan er strukturen?
- Hvilke kilder brukes?

**3. Språk og virkemidler:**
- Hvordan er stilen?
- Hvilke retoriske appeller brukes?
- Brukes språklige bilder?

**4. Vurdering:**
- Er argumentasjonen holdbar?
- Er kildene troverdige?
- Er teksten overbevisende?
- Hvilke svakheter har den?`,
    },
    {
      id: 'norsk-vg3-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyser en vitenskapelig artikkel.',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser IMRaD-strukturen.',
            solution: 'Pek på innledning, metode, resultater og diskusjon.',
          },
          {
            label: 'b',
            task: 'Vurder metodens styrker og svakheter.',
            solution: 'Er metoden egnet for problemstillingen? Hva kunne vært gjort annerledes?',
          },
        ],
        solution: 'Analysen viser evne til kritisk lesing av vitenskapelige tekster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gjør en kildekritisk analyse av tre nettsider om samme tema.',
        hints: ['Velg et kontroversielt tema', 'Sammenlign troverdighet', 'Vurder interessekonflikter'],
        solution: 'Analysen viser evne til kritisk kildevurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser en sammensatt tekst (reklame, infografikk eller nettside).',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke modaliteter brukes?',
            solution: 'Tekst, bilde, grafikk, lyd, video osv.',
          },
          {
            label: 'b',
            task: 'Hvordan samspiller de?',
            solution: 'Forsterker de hverandre? Motsier de hverandre?',
          },
        ],
        solution: 'Analysen viser forståelse for multimodalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign to kronikker med ulikt syn på samme sak.',
        hints: ['Analyser argumentasjonen', 'Vurder kildebruken', 'Hvem er mest overbevisende?'],
        solution: 'Sammenligningen viser evne til å vurdere ulike perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-8-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en fagtekst (800-1000 ord) om et selvvalgt tema.',
        hints: ['Bruk minst tre troverdige kilder', 'Referer korrekt', 'Ha klar struktur'],
        solution: 'Teksten viser evne til å skrive sakprosa med god kildebruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Skriftlig eksamen
// ============================================================================

export const CHAPTER_NORSK_VG3_9_1: TextbookChapter = {
  id: 'norsk-vg3-9-1',
  courseId: 'norsk-vg3',
  chapterNumber: '9.1',
  title: 'Skriftlig eksamen',
  description: 'Forberedelse og teknikker for skriftlig eksamen i norsk.',
  estimatedMinutes: 80,
  competenceGoals: [
    'skrive tekster i ulike sjangre',
    'bruke fagterminologi presist',
  ],
  content: [
    {
      id: 'norsk-vg3-9-1-intro',
      type: 'text',
      content: `## Skriftlig eksamen i norsk

Skriftlig eksamen i norsk hovedmål eller sidemål varer i 5 timer. Du skal skrive en eller to lengre tekster.

**Oppgavetyper:**
- Kortsvarsoppgave (analyse/tolkning)
- Langsvarsoppgave (kreativ, resonnerande eller fagartikkel)

**Hva vurderes:**
- Innhold og forståelse
- Oppbygning og struktur
- Språk og stil
- Formelle ferdigheter`,
    },
    {
      id: 'norsk-vg3-9-1-def-1',
      type: 'definition',
      title: 'Kortsvarsoppgaven',
      content: `**Hva kreves:**
- Analyse eller tolkning av tekst(er)
- Bruk av fagbegreper
- Typisk 250-400 ord

**Oppgavetyper:**
- Analyser virkemidler i en tekst
- Sammenlign to tekster
- Tolk et utdrag
- Plasser teksten i litteraturhistorisk sammenheng

**Tips:**
- Les oppgaven nøye
- Svar på det som blir spurt om
- Bruk fagterminologi
- Ha struktur i svaret
- Begrunn tolkninger med sitater`,
    },
    {
      id: 'norsk-vg3-9-1-def-2',
      type: 'definition',
      title: 'Langsvarsoppgaven',
      content: `**Typer:**

**Kreativ tekst:**
- Novelle, kåseri, essay
- Vis litterær kompetanse
- Ha et bevisst forhold til sjanger

**Resonnerende tekst:**
- Drøfting, refleksjon
- Flere perspektiver
- Balansert argumentasjon

**Fagartikkel:**
- Saklig, informativ
- Kildebruk
- Klar struktur

**Generelle tips:**
- Planlegg teksten før du skriver
- Ha en tydelig struktur
- Tilpass språket til sjangeren
- Les korrektur`,
    },
    {
      id: 'norsk-vg3-9-1-def-3',
      type: 'definition',
      title: 'Tekstanalyse - sjekkliste',
      content: `**Skjønnlitterær tekst:**
- Sjanger og form
- Forteller og synsvinkel
- Handling og struktur
- Karakterer
- Tema og motiv
- Språk og stil
- Virkemidler
- Historisk kontekst

**Sakprosatekst:**
- Sjanger og formål
- Avsender og mottaker
- Struktur og oppbygning
- Argumentasjon
- Retoriske appeller
- Språk og stil
- Virkemidler
- Kildekritikk`,
    },
    {
      id: 'norsk-vg3-9-1-example-1',
      type: 'example',
      title: 'Eksempel: Kortsvar - novelleanalyse',
      problem: `Skriv et kortsvar der du analyserer fortellerteknikken i en novelle.`,
      solution: `**Eksempel på kortsvar:**

Novellen bruker en førstepersonsforteller med begrenset synsvinkel. Fortelleren er selv hovedperson, og vi får bare tilgang til hennes tanker og opplevelser. Dette skaper nærhet, men også usikkerhet - vi vet ikke om fortelleren er pålitelig.

Novellen er kronologisk fortalt, men med flere tilbakeblikk (analepser) som gradvis avdekker bakgrunnen. Denne retrospektive teknikken skaper spenning og gjør at leseren må pusle sammen historien.

Dialogene er sentrale og avslører karakterenes holdninger indirekte. Forfatteren "viser" heller enn å "fortelle" - en typisk modernistisk teknikk. Det usagte er like viktig som det sagte.

Slutten er åpen og tvetydig, noe som inviterer leseren til å tolke selv. Dette er et typisk trekk ved moderne novellekunst.

*Ca. 150 ord - kan utvides med flere eksempler og sitater.*`,
    },
    {
      id: 'norsk-vg3-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriv et kortsvar der du analyserer språklige virkemidler i et dikt.',
        hints: ['Identifiser virkemidlene', 'Forklar effekten', 'Bruk fagbegreper'],
        solution: 'Svaret viser evne til å analysere lyrikk med faglig presisjon.',
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
        task: 'Skriv en resonnerende tekst om et aktuelt tema.',
        subTasks: [
          {
            label: 'a',
            task: 'Lag en disposisjon først.',
            solution: 'Disposisjonen viser planlegging og struktur.',
          },
          {
            label: 'b',
            task: 'Skriv teksten (600-800 ord).',
            solution: 'Teksten viser evne til å drøfte fra flere sider.',
          },
        ],
        solution: 'Teksten demonstrerer resonnerende skriving på eksamensnivå.',
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
        task: 'Skriv en kreativ tekst med utgangspunkt i et bilde eller et sitat.',
        hints: ['Velg sjanger bevisst', 'Vis litterære virkemidler', 'Ha et poeng'],
        solution: 'Teksten viser kreativ og litterær kompetanse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-9-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Øv på tidsbruk: Skriv et kortsvar på 30 minutter.',
        hints: ['Les oppgaven nøye (5 min)', 'Planlegg (5 min)', 'Skriv (15 min)', 'Les korrektur (5 min)'],
        solution: 'Øvelsen gir erfaring med tidspress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-9-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-9-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign to tekster fra ulike perioder.',
        subTasks: [
          {
            label: 'a',
            task: 'Pek på likheter og forskjeller i tema.',
            solution: 'Vis forståelse for tematisk sammenheng på tvers av tid.',
          },
          {
            label: 'b',
            task: 'Analyser forskjeller i form og stil.',
            solution: 'Vis forståelse for litteraturhistorisk utvikling.',
          },
        ],
        solution: 'Analysen viser evne til litteraturhistorisk sammenligning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Muntlig eksamen
// ============================================================================

export const CHAPTER_NORSK_VG3_10_1: TextbookChapter = {
  id: 'norsk-vg3-10-1',
  courseId: 'norsk-vg3',
  chapterNumber: '10.1',
  title: 'Muntlig eksamen',
  description: 'Presentasjon og fagsamtale - forberedelse til muntlig eksamen.',
  estimatedMinutes: 65,
  competenceGoals: [
    'presentere fagstoff muntlig',
    'delta i fagsamtale med faglig innsikt',
  ],
  content: [
    {
      id: 'norsk-vg3-10-1-intro',
      type: 'text',
      content: `## Muntlig eksamen i norsk

Muntlig eksamen består av to deler: en forberedt presentasjon og en fagsamtale. Totalt varer eksamen ca. 30 minutter.

**Struktur:**
- 24/48 timers forberedelsestid
- Presentasjon (ca. 10 minutter)
- Fagsamtale (ca. 20 minutter)

**Hva vurderes:**
- Faglig innhold
- Evne til å reflektere og resonnere
- Muntlig fremføring
- Bruk av hjelpemidler`,
    },
    {
      id: 'norsk-vg3-10-1-def-1',
      type: 'definition',
      title: 'Presentasjonen',
      content: `**Forberedelse:**
- Du får en oppgave med vedlegg
- 24 eller 48 timer til forberedelse
- Du kan bruke alle hjelpemidler

**Struktur:**
1. Innledning: Presenter tema og problemstilling
2. Hoveddel: Analyser, drøft, begrunn
3. Avslutning: Oppsummer, konkluder

**Presentasjonsteknikk:**
- Snakk fritt, ikke les opp
- Ha øyekontakt med sensorene
- Bruk støtteark eller stikkord
- Vis engasjement
- Hold tiden

**Hjelpemidler:**
- PowerPoint/Keynote
- Tavle
- Utdelte tekster
- Egne notater`,
    },
    {
      id: 'norsk-vg3-10-1-def-2',
      type: 'definition',
      title: 'Fagsamtalen',
      content: `**Hva skjer:**
- Sensorene stiller spørsmål
- Du får utdype og reflektere
- Kan gå utover presentasjonen
- Viser faglig bredde

**Typer spørsmål:**
- Oppfølging av presentasjonen
- Utdyping av påstander
- Sammenligning med andre tekster
- Refleksjon over metode
- Koblinger til pensum

**Tips:**
- Lytt nøye til spørsmålet
- Ta deg tid til å tenke
- Svar strukturert
- Vis faglig bredde
- Vær ærlig om usikkerhet`,
    },
    {
      id: 'norsk-vg3-10-1-def-3',
      type: 'definition',
      title: 'Vanlige oppgavetyper',
      content: `**Tekstanalyse:**
- Analyser vedlagte tekst(er)
- Bruk fagbegreper
- Sett i kontekst

**Tematisk oppgave:**
- Drøft et tema på tvers av tekster
- Vis litteraturhistorisk kunnskap
- Trekk inn egne eksempler

**Språklig oppgave:**
- Analyser språklige fenomener
- Drøft språkpolitikk
- Sammenlign språkbruk

**Sammensatt oppgave:**
- Kombinerer flere av de ovennevnte
- Krever at du ser sammenhenger`,
    },
    {
      id: 'norsk-vg3-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Presentasjonsstruktur',
      problem: `Lag en struktur for en presentasjon om "Naturens rolle i norsk litteratur".`,
      solution: `**Innledning (2 min):**
- Introduser tema og problemstilling
- Definer "natur" i litterær sammenheng
- Oversikt over presentasjonen

**Hoveddel (6-7 min):**

*Del 1: Romantikken*
- Wergeland og Welhaven
- Naturen som nasjonsbyggende symbol
- Eksempel: "Til Foraaret"

*Del 2: Nyromantikken*
- Hamsun og Pan
- Naturen som motsetning til sivilisasjonen
- Psykologisk naturopplevelse

*Del 3: Moderne litteratur*
- Vesaas og Fosse
- Naturen som speil for indre liv
- Eksempel: Is-slottet

**Avslutning (1-2 min):**
- Oppsummer utviklingen
- Reflekter over naturens betydning i dag
- Åpne for spørsmål`,
    },
    {
      id: 'norsk-vg3-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Lag en disposisjon for en muntlig presentasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema fra pensum.',
            solution: 'Temaet bør være avgrenset nok til 10 minutter.',
          },
          {
            label: 'b',
            task: 'Lag en detaljert disposisjon med tidsanslag.',
            solution: 'Disposisjonen viser struktur og tidsbevissthet.',
          },
        ],
        solution: 'Øvelsen gir trening i å strukturere muntlige presentasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hold en 10-minutters presentasjon for klassen eller en gruppe.',
        hints: ['Snakk fritt', 'Ha øyekontakt', 'Bruk hjelpemidler bevisst'],
        solution: 'Øvelsen gir erfaring med muntlig presentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Øv på fagsamtale med en medelev.',
        subTasks: [
          {
            label: 'a',
            task: 'La medeleven stille oppfølgingsspørsmål.',
            solution: 'Øvelsen gir erfaring med å svare spontant.',
          },
          {
            label: 'b',
            task: 'Gi hverandre tilbakemelding.',
            solution: 'Tilbakemeldingen hjelper med forbedring.',
          },
        ],
        solution: 'Øvelsen forbereder til fagsamtalesituasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en liste over mulige oppfølgingsspørsmål til din presentasjon.',
        hints: ['Tenk på hva som kan utdypes', 'Forbered deg på motargumenter', 'Tenk på koblinger til andre emner'],
        solution: 'Øvelsen gir beredskap for fagsamtalen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg3-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Reflekter over din egen muntlige kompetanse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er dine styrker som muntlig formidler?',
            solution: 'Bevissthet om styrker gir selvtillit.',
          },
          {
            label: 'b',
            task: 'Hva kan du forbedre?',
            solution: 'Bevissthet om forbedringspunkter gir retning for øving.',
          },
        ],
        solution: 'Refleksjonen gir grunnlag for målrettet forberedelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG3_CHAPTERS = [
  CHAPTER_NORSK_VG3_1_1,
  CHAPTER_NORSK_VG3_2_1,
  CHAPTER_NORSK_VG3_3_1,
  CHAPTER_NORSK_VG3_4_1,
  CHAPTER_NORSK_VG3_5_1,
  CHAPTER_NORSK_VG3_6_1,
  CHAPTER_NORSK_VG3_7_1,
  CHAPTER_NORSK_VG3_8_1,
  CHAPTER_NORSK_VG3_9_1,
  CHAPTER_NORSK_VG3_10_1,
];
