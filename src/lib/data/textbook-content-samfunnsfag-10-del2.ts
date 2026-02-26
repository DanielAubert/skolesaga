/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - Del 2 (Kapittel 5-7)
 *
 * Følger LK20 læreplan for samfunnsfag ungdomstrinn.
 * Grundig og dyptgående innhold for avsluttende år.
 *
 * Kapittel 5: Konflikter og fredsarbeid
 * Kapittel 6: Norsk politikk og styreform
 * Kapittel 7: Økonomi og arbeidsliv
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5: Konflikter og fredsarbeid
// LK20: Utforske ulike plasser og folk sine levekår og drøfte tiltak for meir
//        rettferdig fordeling, og beskrive korleis konfliktar oppstår og korleis
//        dei kan løysast
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_5: TextbookChapter = {
  id: 'samfunnsfag-10-5',
  courseId: 'samfunnsfag-10',
  chapterNumber: '5',
  title: 'Konflikter og fredsarbeid',
  description: 'Forstå hvorfor konflikter oppstår, hvordan de kan løses, og hvilken rolle FN, diplomati og fredsbygging spiller i verden.',
  estimatedMinutes: 90,
  competenceGoals: [
    'beskrive korleis konfliktar oppstår og korleis dei kan løysast',
    'utforske ulike plasser og folk sine levekår og drøfte tiltak for meir rettferdig fordeling',
    'drøfte korleis makt og maktmisbruk kjem til uttrykk i ulike samanhengar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-5-intro',
      type: 'text',
      content: `## Hvorfor er det krig i verden?

Hver gang du åpner nyhetsappen, ser du sannsynligvis bilder av krig og konflikt et sted i verden. Ødelegge byer, mennesker på flukt, barn som gråter. Det kan virke overveldende og meningsløst — hvorfor klarer ikke menneskene å leve i fred?

Konflikter har fulgt menneskene gjennom hele historien. Noen ganger handler det om territorium, andre ganger om ressurser, religion eller makt. Men konflikter oppstår ikke av seg selv — de har alltid **årsaker** som vi kan forstå og analysere. Og det viktigste: Konflikter kan **forebygges** og **løses**.

Visste du at antallet kriger i verden faktisk har gått ned siden andre verdenskrig? Det betyr ikke at verden er fredelig — men det betyr at det internasjonale samfunnet har blitt bedre til å forhindre og avslutte konflikter. Organisasjoner som FN, diplomatiske kanaler og fredsavtaler har reddet millioner av liv.

I dette kapittelet skal du lære om:
- Hva som kjennetegner en konflikt og hvorfor konflikter oppstår
- Forskjellen mellom ulike typer konflikter
- Hvordan FN og det internasjonale samfunnet arbeider for fred
- Hva diplomati er og hvordan det fungerer
- Aktuelle konflikter i verden og hvordan de kan løses
- Norges rolle i fredsarbeid`,
    },

    // ========== DEFINISJON: KONFLIKT ==========
    {
      id: 'samfunnsfag-10-5-def-1',
      type: 'definition',
      title: 'Konflikt',
      content: `**Konflikt** betyr at to eller flere parter har motstridende interesser, mål eller verdier, og at motsetningene fører til uenighet eller konfrontasjon.

Konflikter finnes på mange nivåer:

- **Mellommenneskelige konflikter:** Uenigheter mellom enkeltpersoner — for eksempel krangel mellom venner, naboer eller familiemedlemmer.
- **Samfunnskonflikter:** Motsetninger mellom grupper i et samfunn — for eksempel mellom ulike etniske grupper, sosiale klasser eller politiske retninger.
- **Internasjonale konflikter:** Konflikter mellom stater eller mellom grupper i ulike land — dette kan være alt fra handelskonflikter til væpnede kriger.

Det er viktig å skille mellom **voldelige** og **ikke-voldelige** konflikter. Konflikter i seg selv er en naturlig del av menneskelig samhandling. Det er først når konflikter eskalerer til vold at de blir destruktive.

En **væpnet konflikt** defineres av forskere som en konflikt der mer enn 25 mennesker drepes i kamp i løpet av et år. En **krig** er en væpnet konflikt med mer enn 1000 drepte per år.

Konflikter kan også være **symmetriske** (partene er omtrent like sterke) eller **asymmetriske** (den ene parten er mye sterkere enn den andre, som i geriljakrigføring).`,
    },

    // ========== TEKST: KONFLIKTÅRSAKER ==========
    {
      id: 'samfunnsfag-10-5-aarsaker',
      type: 'text',
      content: `## Hvorfor oppstår konflikter?

Konflikter har sjelden bare én årsak. Som regel er det et sammensatt bilde der flere faktorer spiller sammen. Her er de viktigste årsakene til konflikter i verden:

### Kamp om ressurser
Tilgang til verdifulle ressurser som olje, vann, mineraler og dyrkbar jord har vært en drivkraft bak mange konflikter. Når ressursene er knappe eller ujevnt fordelt, kan det skape spenninger. For eksempel har tilgang til vannressurser i Midtøsten vært en medvirkende årsak til konflikter i regionen.

### Territorium og grenser
Uenigheter om hvem som «eier» et landområde er blant de eldste konfliktårsakene. Grenser som ble tegnet av kolonimakter i Afrika og Midtøsten, uten hensyn til etniske og kulturelle skillelinjer, har bidratt til mange konflikter.

### Etnisitet og identitet
Når grupper med ulik etnisk, religiøs eller kulturell bakgrunn lever i samme område, kan motsetninger oppstå — spesielt hvis én gruppe føler seg undertrykt eller diskriminert. Konflikten i det tidligere Jugoslavia på 1990-tallet var delvis drevet av etniske motsetninger.

### Religion og ideologi
Religiøse og ideologiske forskjeller kan forsterke konflikter, selv om de sjelden er den eneste årsaken. Konflikter der religion spiller en rolle, kan være ekstra vanskelige å løse fordi partene opplever kampen som et spørsmål om absolutte verdier.

### Urettferdig fordeling og fattigdom
Stor ulikhet mellom rike og fattige, enten innad i et land eller mellom land, skaper frustrasjon og grobunn for konflikt. Når mennesker opplever at de ikke har muligheter eller at systemet er urettferdig, kan det føre til opprør og vold.

### Svake stater og dårlig styresett
Land med korrupte myndigheter, manglende rettssikkerhet og svake institusjoner er mer utsatt for konflikter. Når staten ikke klarer å beskytte innbyggerne eller fordele ressurser rettferdig, kan det oppstå opprør og borgerkrig.

### Historiske urettferdigheter
Minner om tidligere overgrep, krig og undertrykkelse kan holdes levende gjennom generasjoner og bidra til nye konflikter. Hevnmotiv og ønske om oppreisning kan være sterke drivkrefter.`,
    },

    // ========== OPPGAVE 1: FLERVALG ==========
    {
      id: 'samfunnsfag-10-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-1',
        number: '5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom en væpnet konflikt og en krig, ifølge forskernes definisjon?',
        options: [
          {
            id: 'a',
            text: 'En krig varer lengre enn en væpnet konflikt',
            isCorrect: false,
            feedback: 'Feil. Det er ikke varigheten som skiller de to begrepene, men antallet drepte.',
          },
          {
            id: 'b',
            text: 'En krig har mer enn 1000 drepte per år, mens en væpnet konflikt har mer enn 25',
            isCorrect: true,
            feedback: 'Riktig! Forskere definerer en væpnet konflikt som mer enn 25 drepte per år, og en krig som mer enn 1000 drepte per år.',
          },
          {
            id: 'c',
            text: 'En krig involverer alltid to stater, mens en væpnet konflikt er innad i et land',
            isCorrect: false,
            feedback: 'Feil. Både kriger og væpnede konflikter kan være mellom stater eller innad i et land.',
          },
          {
            id: 'd',
            text: 'Det er ingen forskjell — begrepene betyr det samme',
            isCorrect: false,
            feedback: 'Feil. Det er en klar forskjell i antallet drepte som brukes til å skille begrepene.',
          },
        ],
        solution: 'Forskere skiller mellom væpnet konflikt (mer enn 25 drepte per år) og krig (mer enn 1000 drepte per år).',
      },
    },

    // ========== OPPGAVE 2: KONFLIKTÅRSAKER ==========
    {
      id: 'samfunnsfag-10-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-2',
        number: '5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Konflikter har sjelden bare én årsak.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn fire ulike årsaker til at konflikter kan oppstå.',
            solution: 'Kamp om ressurser (olje, vann, mineraler), territorium og grenser, etnisitet og identitet, religion og ideologi, urettferdig fordeling og fattigdom, svake stater og dårlig styresett, historiske urettferdigheter.',
          },
          {
            label: 'b',
            task: 'Velg én aktuell konflikt du kjenner til fra nyhetene. Hvilke årsaker tror du ligger bak denne konflikten?',
            solution: 'Svaret bør navngi en konkret konflikt og knytte den til minst to av årsakene fra teksten. For eksempel kan konflikten i Ukraina knyttes til territorium, identitet, stormaktspolitikk og historiske motsetninger.',
          },
          {
            label: 'c',
            task: 'Forklar hva det betyr at en konflikt er «asymmetrisk». Gi et eksempel.',
            solution: 'En asymmetrisk konflikt er en konflikt der den ene parten er mye sterkere enn den andre. Eksempel: Geriljakrigføring der en liten opprørsgruppe kjemper mot en stats militære styrker, som Taliban mot den afghanske regjeringen og NATO-styrker.',
          },
        ],
        hints: ['Bruk gjerne aktuelle nyhetseksempler.', 'Husk at de fleste konflikter har flere årsaker som virker sammen.'],
        solution: 'Konflikter har sjelden bare én årsak. Ofte spiller ressurser, territorium, identitet, religion, ulikhet og historiske urettferdigheter sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: FN ==========
    {
      id: 'samfunnsfag-10-5-def-2',
      type: 'definition',
      title: 'De forente nasjoner (FN)',
      content: `**De forente nasjoner (FN)** er en internasjonal organisasjon som ble opprettet i 1945, etter andre verdenskrig. Formålet er å bevare internasjonal fred og sikkerhet, fremme menneskerettigheter og samarbeide om å løse globale problemer.

FN har i dag 193 medlemsland — nesten alle verdens stater.

**FNs viktigste organer:**

- **Generalforsamlingen:** Alle medlemsland møtes og diskuterer saker. Hvert land har én stemme. Vedtak er rådgivende, ikke bindende.
- **Sikkerhetsrådet:** Har hovedansvaret for fred og sikkerhet. Består av 15 medlemmer, der 5 er faste med **vetorett** (USA, Russland, Kina, Frankrike og Storbritannia). Et veto fra én av de faste medlemmene kan stoppe et vedtak.
- **Sekretariatet:** Ledes av **generalsekretæren** og administrerer FNs daglige arbeid.
- **Den internasjonale domstolen (ICJ):** Løser tvister mellom stater og gir rådgivende uttalelser.
- **FNs menneskerettighetsråd:** Overvåker menneskerettighetssituasjonen i medlemslandene.

**FNs begrensninger:**
FN kan ikke tvinge suverene stater til å gjøre noe mot sin vilje (med mindre Sikkerhetsrådet vedtar sanksjoner eller militær aksjon). Vetoretten til de fem faste medlemmene betyr at Sikkerhetsrådet ofte blir handlingslammet i konflikter der stormaktene er uenige.`,
    },

    // ========== TEKST: FN OG FREDSARBEID ==========
    {
      id: 'samfunnsfag-10-5-fn-fredsarbeid',
      type: 'text',
      content: `## Hvordan jobber FN for fred?

FN har flere verktøy for å forhindre og løse konflikter:

### Forebyggende diplomati
FN-diplomater jobber bak kulissene for å løse konflikter før de eskalerer til vold. Generalsekretæren kan mekle mellom parter, sende spesialutsendinger og fremme dialog.

### Fredsbevarende operasjoner
FN kan sende **fredsbevarende styrker** (ofte kalt «blåhjelmer» på grunn av deres blå hjelmer) til konfliktområder. Disse soldatene kommer fra ulike medlemsland og har som oppgave å overvåke våpenhviler, beskytte sivile og skape trygge forhold for fredsforhandlinger.

Per 2024 har FN omtrent 70 000 fredsbevarende soldater og politi utplassert i rundt 12 operasjoner verden over.

### Sanksjoner
Sikkerhetsrådet kan vedta **sanksjoner** mot land eller grupper som truer freden. Sanksjoner kan være økonomiske (handelsrestriksjoner), diplomatiske (reiseforbud for ledere) eller militære (våpenembargo).

### Fredsbygging
Etter at en krig er over, jobber FN med **fredsbygging** — det vil si å gjenoppbygge samfunn, styrke institusjoner, fremme forsoning og forhindre at konflikten blusser opp igjen. Dette er ofte det vanskeligste arbeidet.

### Humanitær hjelp
FN-organisasjoner som UNHCR (FNs flyktninghøykommissær), UNICEF (FNs barnefond) og WFP (Verdens matvareprogram) gir livsviktig hjelp til mennesker som rammes av konflikter.

### Kritikk av FN
FN blir ofte kritisert for å være for svakt, for tregt og for byråkratisk. Vetoretten gjør at Sikkerhetsrådet lammes i konflikter der stormaktene er involvert. FN klarte ikke å forhindre folkemord i Rwanda i 1994 eller massakren i Srebrenica i 1995 — noe organisasjonen selv har erkjent som alvorlige svakheter.

Likevel er FN den eneste globale organisasjonen der alle verdens land samarbeider. Uten FN ville verden sannsynligvis hatt flere og mer ødeleggende konflikter.`,
    },

    // ========== OPPGAVE 3: FN ==========
    {
      id: 'samfunnsfag-10-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-3',
        number: '5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «vetorett» i FNs sikkerhetsråd?',
        options: [
          {
            id: 'a',
            text: 'At alle 193 medlemsland må være enige for at et vedtak skal gjelde',
            isCorrect: false,
            feedback: 'Feil. Det er bare de fem faste medlemmene i Sikkerhetsrådet som har vetorett, ikke alle FNs medlemsland.',
          },
          {
            id: 'b',
            text: 'At de fem faste medlemmene i Sikkerhetsrådet hver for seg kan stoppe et vedtak',
            isCorrect: true,
            feedback: 'Riktig! USA, Russland, Kina, Frankrike og Storbritannia har vetorett — det betyr at én av dem alene kan blokkere et vedtak i Sikkerhetsrådet.',
          },
          {
            id: 'c',
            text: 'At Generalsekretæren har det siste ordet i alle saker',
            isCorrect: false,
            feedback: 'Feil. Generalsekretæren har ikke vetorett. Vetoretten tilhører de fem faste medlemmene i Sikkerhetsrådet.',
          },
          {
            id: 'd',
            text: 'At et vedtak bare gjelder i fem år før det må fornyes',
            isCorrect: false,
            feedback: 'Feil. Veto betyr å stoppe et vedtak, ikke at vedtak har tidsbegrensning.',
          },
        ],
        solution: 'Vetorett betyr at ett av de fem faste medlemmene i Sikkerhetsrådet (USA, Russland, Kina, Frankrike, Storbritannia) alene kan blokkere et vedtak.',
      },
    },

    // ========== OPPGAVE 4: DRØFTING FN ==========
    {
      id: 'samfunnsfag-10-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-4',
        number: '5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'FNs sikkerhetsråd har fem faste medlemmer med vetorett.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva vetoretten innebærer i praksis.',
            solution: 'Vetoretten betyr at USA, Russland, Kina, Frankrike eller Storbritannia hver for seg kan blokkere et vedtak i Sikkerhetsrådet. Selv om alle de andre medlemmene stemmer for, kan ett veto stoppe hele vedtaket.',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på en situasjon der vetoretten har forhindret FN fra å handle.',
            solution: 'Eksempler: Russland har lagt ned veto mot resolusjoner om krigen i Syria, som hindret FN i å gripe inn. USA har lagt ned veto mot resolusjoner som kritiserer Israel. Kina og Russland la ned veto mot sanksjoner mot Myanmar etter militærkuppet i 2021.',
          },
          {
            label: 'c',
            task: 'Drøft om vetoretten bør fjernes. Presenter argumenter for og mot.',
            solution: 'For å fjerne: Vetoretten er udemokratisk, den lammes FN, den ble laget i en annen tid, den gir noen land for mye makt. Mot å fjerne: Stormaktene ville kanskje forlate FN uten den, den forhindrer at FN vedtar noe en stormakt vil motsette seg militært, den tvinger til kompromisser.',
          },
        ],
        hints: ['Tenk på vetoretten fra ulike perspektiver — de store og de små landenes.'],
        solution: 'Vetoretten er omdiskutert. Den gir stormaktene stor makt, men ble innført for å sikre at de mektigste landene forble i FN. Uten vetoretten er det usikkert om FN hadde fungert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: DIPLOMATI ==========
    {
      id: 'samfunnsfag-10-5-def-3',
      type: 'definition',
      title: 'Diplomati og forhandlinger',
      content: `**Diplomati** er kunsten å løse konflikter og fremme samarbeid mellom stater gjennom forhandlinger, dialog og avtaler — uten bruk av militær makt.

Diplomati kan foregå på flere nivåer:

**Bilateralt diplomati:** Direkte forhandlinger mellom to stater. For eksempel møter mellom Norges utenriksminister og andre lands ledere.

**Multilateralt diplomati:** Forhandlinger der mange stater deltar, ofte gjennom internasjonale organisasjoner som FN, NATO eller EU.

**Bakkanaldiplomati:** Uoffisielle, hemmelige forhandlinger som foregår bak kulissene. Norge har en lang tradisjon for dette, særlig kjent gjennom **Oslo-avtalen** i 1993, der norske diplomater la til rette for hemmelige forhandlinger mellom Israel og PLO.

**Mekling (mediasjon):** Når en nøytral tredjepart hjelper to parter i konflikt med å finne en løsning. Norge har vært mekler i konflikter i blant annet Sri Lanka, Colombia, Filippinene og Midtøsten.

**Humanitært diplomati:** Forhandlinger for å sikre humanitær tilgang til sivilbefolkning i konfliktområder, som å få frem nødhjelp eller evakuere skadde.

Diplomati krever **tålmodighet**, **kompromissvilje** og evne til å se saken fra motpartens perspektiv. Det er sjelden raskt eller enkelt, men det er nesten alltid bedre enn alternativet.`,
    },

    // ========== EKSEMPEL: OSLO-AVTALEN ==========
    {
      id: 'samfunnsfag-10-5-example-1',
      type: 'example',
      title: 'Eksempel: Oslo-avtalen (1993)',
      problem: 'Konflikten mellom Israel og palestinerne er en av verdens mest langvarige og kompliserte konflikter. I 1993 skjedde noe overraskende: Hemmelige forhandlinger i Norge førte til en avtale som ga håp om fred. Hva skjedde, og hva kan vi lære av det?',
      solution: `**Bakgrunn:**
Konflikten mellom Israel og palestinerne handler om landområder, identitet, sikkerhet og rettigheter. Etter tiår med krig og vold, var det mange som trodde fred var umulig.

**Hva skjedde i Oslo?**
I 1993 la norske diplomater, ledet av blant andre **Terje Rød-Larsen** og **Mona Juul**, til rette for hemmelige forhandlinger mellom israelske og palestinske representanter. Forhandlingene foregikk i en villa utenfor Oslo, langt fra medias søkelys.

Resultatet ble **Oslo-avtalen**, som ble undertegnet i Washington D.C. 13. september 1993. Israels statsminister **Yitzhak Rabin** og PLOs leder **Yasir Arafat** håndhilste foran Det hvite hus — et historisk øyeblikk.

**Hva inneholdt avtalen?**
- Gjensidig anerkjennelse mellom Israel og PLO
- Opprettelse av et palestinsk selvstyreområde
- En plan for videre forhandlinger om de vanskeligste spørsmålene

**Hva kan vi lære?**
- Dialog er mulig, selv mellom fiender
- Hemmelig, uformelt diplomati kan åpne dører som offisielt diplomati ikke kan
- Et lite land som Norge kan spille en viktig rolle som nøytral mekler
- Fred krever kompromisser fra begge sider

**Hva skjedde etterpå?**
Dessverre førte Oslo-avtalen ikke til varig fred. Vold og mistillit på begge sider, politisk motstand og uløste kjernespørsmål førte til at fredsprosessen kollapset. Men avtalen viste at forhandlinger er mulig, og den ga viktige erfaringer for fremtidig fredsarbeid.`,
    },

    // ========== OPPGAVE 5: DIPLOMATI ==========
    {
      id: 'samfunnsfag-10-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-5',
        number: '5.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norge har en lang tradisjon som fredsmekler i internasjonale konflikter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom bilateralt og multilateralt diplomati?',
            solution: 'Bilateralt diplomati er direkte forhandlinger mellom to stater, mens multilateralt diplomati involverer mange stater, ofte gjennom internasjonale organisasjoner som FN.',
          },
          {
            label: 'b',
            task: 'Forklar kort hva Oslo-avtalen var, og hvorfor den var historisk viktig.',
            solution: 'Oslo-avtalen (1993) var resultatet av hemmelige norske forhandlinger mellom Israel og PLO. Den førte til gjensidig anerkjennelse og opprettelse av palestinsk selvstyre. Den var historisk fordi den viste at dialog var mulig mellom parter som var erklærte fiender.',
          },
          {
            label: 'c',
            task: 'Hvorfor tror du et lite land som Norge kan spille en viktig rolle som fredsmekler?',
            solution: 'Norge er et lite, nøytralt land uten store strategiske interesser i de fleste konflikter. Dette gjør Norge troverdig som mekler. Norge har også lang erfaring, et godt rennomme og er villig til å bruke ressurser på fredsarbeid. Norges posisjon utenfor EU gir også en viss uavhengighet.',
          },
        ],
        hints: ['Tenk på hva som gjør en mekler troverdig.'],
        solution: 'Norge har en spesiell rolle i internasjonalt diplomati fordi landet oppfattes som nøytralt og troverdig. Bilateralt diplomati er mellom to parter, multilateralt er mellom mange.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: FREDSBYGGING ==========
    {
      id: 'samfunnsfag-10-5-def-4',
      type: 'definition',
      title: 'Fredsbygging og forsoning',
      content: `**Fredsbygging** er et bredt begrep for alle tiltak som skal forhindre at en konflikt oppstår på ny, og som skal skape grunnlaget for varig fred i et samfunn etter en krig.

Fredsbygging handler om mer enn å stoppe skyting. Det handler om å bygge et samfunn der mennesker kan leve sammen i trygghet og med rettferdighet.

**Viktige elementer i fredsbygging:**

- **Forsoning:** Å bearbeide hat og mistillit mellom tidligere fiender. Sannhets- og forsoningskommisjoner, som i Sør-Afrika etter apartheid, er et eksempel.
- **Rettferdighet:** Å stille krigsforbrytere for retten, slik at ofrene opplever at lovbrudd får konsekvenser. Den internasjonale straffedomstolen (ICC) i Haag spiller en viktig rolle her.
- **Gjenoppbygging:** Å bygge opp igjen infrastruktur, skoler, sykehus og boliger som er ødelagt i krigen.
- **Demokratisering:** Å bygge demokratiske institusjoner, holde frie valg og sikre at alle grupper er representert.
- **Utdanning:** Å sørge for at barn og unge får utdanning som fremmer fred, toleranse og forståelse.
- **Økonomisk utvikling:** Å skape arbeidsplasser og økonomisk vekst slik at mennesker har noe å leve av og noe å tape på ny vold.

Fredsbygging er et langsiktig arbeid som ofte tar tiår. Erfaringen viser at samfunn som investerer i forsoning og rettferdighet etter en krig, har mye lavere risiko for å falle tilbake i konflikt.`,
    },

    // ========== EKSEMPEL: AKTUELLE KONFLIKTER ==========
    {
      id: 'samfunnsfag-10-5-example-2',
      type: 'example',
      title: 'Eksempel: Konflikter i verden i dag',
      problem: 'Verden har mange pågående konflikter. Hva kjennetegner noen av de mest alvorlige, og hvilke konfliktårsaker kan vi identifisere?',
      solution: `**Krigen i Ukraina (fra 2022)**
Russland invaderte Ukraina i februar 2022. Konflikten handler om territorium (Krim, Donbas), identitet (ukrainsk vs. russisk), stormaktspolitikk (NATOs utvidelse østover) og geopolitikk. Krigen har ført til hundretusener av drepte, millioner av flyktninger og store ødeleggelser.
*Konfliktårsaker: Territorium, identitet, stormaktspolitikk, historiske motsetninger.*

**Konflikten i Israel og Palestina**
En av verdens mest langvarige konflikter. Handler om landområder, selvbestemmelse, sikkerhet og rettigheter. Konflikten eskalerte kraftig i 2023-2024 og har ført til enorme sivile lidelser.
*Konfliktårsaker: Territorium, identitet, religion, historiske urettferdigheter.*

**Borgerkrigen i Sudan (fra 2023)**
Maktkamp mellom to rivaliserende militære fraksjoner har ført til en humanitær katastrofe. Millioner er drevet på flukt, og det er rapportert om alvorlige menneskerettighetsbrudd.
*Konfliktårsaker: Makt, svake institusjoner, etniske motsetninger, ressurser.*

**Konflikten i Sahel-regionen**
Flere land i Vest-Afrika (Mali, Burkina Faso, Niger) opplever væpnede konflikter med jihadistgrupper, etniske motsetninger og politisk ustabilitet.
*Konfliktårsaker: Svake stater, fattigdom, ekstremisme, klimaendringer, koloniale grenser.*

**Viktig:** Disse beskrivelsene er forenklede. Alle konflikter har mange nyanser, og det finnes ulike syn på årsaker og ansvar. Å forstå en konflikt krever at du leser bredt og kritisk fra flere kilder.`,
    },

    // ========== OPPGAVE 6: AKTUELLE KONFLIKTER ==========
    {
      id: 'samfunnsfag-10-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-6',
        number: '5.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg én aktuell konflikt fra teksten eller fra nyhetene.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv kort hva konflikten handler om og hvem partene er.',
            solution: 'Svaret bør navngi konflikten, forklare hva den handler om (territorium, makt, identitet osv.) og identifisere de viktigste partene.',
          },
          {
            label: 'b',
            task: 'Identifiser minst to årsaker til konflikten basert på det du har lært.',
            solution: 'Svaret bør bruke begreper fra teksten (ressurser, territorium, etnisitet, religion, ulikhet, svake stater, historiske urettferdigheter) og koble dem til den konkrete konflikten.',
          },
          {
            label: 'c',
            task: 'Hva tror du skal til for at denne konflikten kan løses? Bruk begrepene du har lært om diplomati og fredsbygging.',
            solution: 'Svaret bør foreslå konkrete tiltak som forhandlinger, mekling, FN-engasjement, sanksjoner, fredsbevarende styrker, forsoning, gjenoppbygging og demokratisering. Svaret bør vise forståelse for at fredelig løsning krever kompromisser fra begge sider.',
          },
        ],
        hints: ['Bruk begreper fra kapittelet.', 'Husk at konflikter nesten alltid har flere årsaker.'],
        solution: 'En god analyse identifiserer partene, bruker fagbegreper om konfliktårsaker, og foreslår løsninger basert på kunnskap om diplomati og fredsbygging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },

    // ========== TEKST: NORGES ROLLE ==========
    {
      id: 'samfunnsfag-10-5-norge',
      type: 'text',
      content: `## Norges rolle i internasjonal fred og sikkerhet

Norge er et lite land med bare 5,5 millioner innbyggere, men spiller en uforholdsmessig stor rolle i internasjonalt fredsarbeid:

### Fredsmekler
Norge har vært involvert som mekler i konflikter over hele verden — fra Midtøsten til Sri Lanka, Colombia og Filippinene. Norges rolle som mekler i Colombia bidro til fredsavtalen i 2016 mellom regjeringen og FARC-geriljaen, som avsluttet over 50 år med borgerkrig.

### Bistand og humanitær hjelp
Norge er en av verdens største givere av bistand per innbygger. En stor del av norsk bistand går til konfliktområder og land som bygger fred etter krig.

### NATO-medlemskap
Norge er medlem av NATO (North Atlantic Treaty Organization), en forsvarsallianse der et angrep på ett medlem regnes som et angrep på alle. NATO-medlemskapet er grunnsteinen i norsk sikkerhetspolitikk.

### FN-engasjement
Norge er en aktiv støttespiller for FN og har bidratt med soldater til en rekke FN-operasjoner. Norge har også sittet i FNs sikkerhetsråd flere ganger, senest i 2021-2022.

### Nobels fredspris
Nobels fredspris deles ut i Oslo hvert år og er verdens mest prestisjefylte fredspris. Den norske Nobelkomiteen, oppnevnt av Stortinget, avgjør hvem som får prisen. Blant prisvinnere finner vi Nelson Mandela, Malala Yousafzai og det colombianske folket (representert ved president Santos).

### Dilemmaer i norsk fredspolitikk
Norge eksporterer også våpen til andre land, og det pågår debatt om denne eksporten bidrar til konflikter. I tillegg er det diskusjon om Norges rolle i NATO og deltakelse i militære operasjoner (som i Libya i 2011) er forenlig med rollen som fredsnasjon.`,
    },

    // ========== OPPGAVE 7: FLERVALG ==========
    {
      id: 'samfunnsfag-10-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-7',
        number: '5.7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er Nobels fredspris?',
        options: [
          {
            id: 'a',
            text: 'En pris som deles ut av FN til den beste fredsmekleren',
            isCorrect: false,
            feedback: 'Feil. Nobels fredspris deles ut av den norske Nobelkomiteen, ikke av FN.',
          },
          {
            id: 'b',
            text: 'En pris som deles ut i Oslo hvert år av den norske Nobelkomiteen til den som har gjort mest for fred',
            isCorrect: true,
            feedback: 'Riktig! Nobels fredspris deles ut i Oslo av den norske Nobelkomiteen, oppnevnt av Stortinget.',
          },
          {
            id: 'c',
            text: 'En pris som deles ut til norske politikere som har jobbet for fred',
            isCorrect: false,
            feedback: 'Feil. Fredsprisen kan gis til alle mennesker og organisasjoner som har gjort mest for fred, uansett nasjonalitet.',
          },
          {
            id: 'd',
            text: 'En pris som deles ut annethvert år i Stockholm',
            isCorrect: false,
            feedback: 'Feil. Fredsprisen deles ut hvert år, og den deles ut i Oslo — ikke Stockholm (der de andre Nobel-prisene deles ut).',
          },
        ],
        solution: 'Nobels fredspris deles ut i Oslo hvert år av den norske Nobelkomiteen, oppnevnt av Stortinget.',
      },
    },

    // ========== OPPGAVE 8: NORGES ROLLE ==========
    {
      id: 'samfunnsfag-10-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-8',
        number: '5.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norge blir ofte kalt en «fredsnasjon», men Norge eksporterer også våpen til andre land.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som menes med at Norge er en «fredsnasjon».',
            solution: 'Norge er en fredsnasjon fordi landet har lang tradisjon som fredsmekler, gir mye bistand, er aktiv i FN, deler ut Nobels fredspris og har bidratt til fredsavtaler i flere konflikter.',
          },
          {
            label: 'b',
            task: 'Drøft om det er mulig å være en fredsnasjon og samtidig eksportere våpen. Presenter argumenter fra begge sider.',
            solution: 'For: Våpeneksport skaper arbeidsplasser, styrker NATO-allianser, og Norge har strenge regler for hvem de selger til. Mot: Våpnene kan ende opp i konflikter og brukes mot sivile, det undergraver troverdigheten som fredsnasjon, og det er vanskelig å kontrollere hva som skjer med våpnene etter salget.',
          },
        ],
        hints: ['Her finnes det ikke ett riktig svar — det viktige er at du presenterer ulike perspektiver.'],
        solution: 'En god drøfting viser at spørsmålet er komplekst og presenterer argumenter fra begge sider, uten nødvendigvis å konkludere entydig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NOTAT: TENK OVER ==========
    {
      id: 'samfunnsfag-10-5-note-1',
      type: 'note',
      title: 'Tenk over dette',
      content: `Når vi ser bilder av krig og ødeleggelse, er det lett å tenke at fred er umulig. Men gjennom historien har mennesker gang på gang klart å bygge fred etter de mest brutale konflikter.

Etter andre verdenskrig — med over 60 millioner drepte — klarte Europa å bygge et samarbeid som har gjort krig mellom vesteuropeiske land nesten utenkelig. Det skjedde ikke over natten, men gjennom tiår med diplomati, samarbeid og vilje til forsoning.

Fred er ikke fravær av konflikt — det er evnen til å håndtere konflikter uten vold.`,
    },

    // ========== EKSEMPEL: FREDSPROSESSEN I COLOMBIA ==========
    {
      id: 'samfunnsfag-10-5-example-3',
      type: 'example',
      title: 'Eksempel: Fredsprosessen i Colombia',
      problem: 'I over 50 år herjet en brutal borgerkrig i Colombia. Millioner ble drevet på flukt, og over 260 000 mennesker ble drept. Hvordan endte denne konflikten?',
      solution: `**Bakgrunn:**
Konflikten i Colombia sto mellom regjeringen og flere geriljagrupper, den største var FARC (Colombias revolusjonære væpnede styrker). Konflikten hadde røtter i sosial ulikhet, jordfordeling og politisk ekskludering.

**Norges rolle:**
Norge, sammen med Cuba, ble valgt som meklerland. Norske diplomater bidro med å legge til rette for forhandlinger i Havana fra 2012 til 2016. Norges erfaring som nøytral mekler var avgjørende.

**Fredsavtalen (2016):**
Etter fire år med forhandlinger ble det oppnådd en fredsavtale. Den inkluderte:
- FARC la ned våpnene og ble et politisk parti
- En sannhetskommisjon for å bearbeide krigens grusomheter
- Jordreform for å rette opp historisk urettferdighet
- Spesiell rettferdighet for krigsofrene

**Colombias president Juan Manuel Santos** fikk Nobels fredspris i 2016 for sin innsats.

**Utfordringer etterpå:**
Fredsavtalen ble vedtatt, men gjennomføringen har vært vanskelig. Noen tidligere geriljamedlemmer har tatt opp våpen igjen, og mange av lovnadene om jordreform er ikke innfridd. Det viser at en fredsavtale bare er begynnelsen — fredsbygging er det virkelig vanskelige arbeidet.

**Hva kan vi lære?**
- Fred tar tid, og det krever kompromisser fra begge sider
- En nøytral mekler kan gjøre en avgjørende forskjell
- Forsoning og rettferdighet er nødvendig for varig fred
- Fredsavtaler må følges opp med konkrete handlinger`,
    },

    // ========== OPPGAVE 9: SAMMENLIGNING ==========
    {
      id: 'samfunnsfag-10-5-ex-9',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-9',
        number: '5.9',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste forskjellen mellom «fredsbevarende» og «fredsbyggende» arbeid?',
        options: [
          {
            id: 'a',
            text: 'Fredsbevaring handler om å stoppe vold med militære midler, mens fredsbygging handler om å skape varig fred gjennom forsoning, utvikling og demokrati',
            isCorrect: true,
            feedback: 'Riktig! Fredsbevaring handler om å overvåke våpenhviler og beskytte sivile, mens fredsbygging handler om å bygge samfunn der fred kan vare.',
          },
          {
            id: 'b',
            text: 'Fredsbevaring gjøres av FN, mens fredsbygging gjøres av NATO',
            isCorrect: false,
            feedback: 'Feil. Både FN og mange andre organisasjoner driver med både fredsbevaring og fredsbygging.',
          },
          {
            id: 'c',
            text: 'Det er ingen forskjell — begrepene betyr det samme',
            isCorrect: false,
            feedback: 'Feil. Begrepene beskriver ulike typer arbeid for fred.',
          },
          {
            id: 'd',
            text: 'Fredsbygging kommer alltid før fredsbevaring',
            isCorrect: false,
            feedback: 'Feil. Vanligvis kommer fredsbevaring først (stoppe volden), og deretter fredsbygging (bygge varig fred).',
          },
        ],
        solution: 'Fredsbevaring handler om å overvåke våpenhviler og beskytte sivile, mens fredsbygging handler om langsiktig arbeid med forsoning, gjenoppbygging og demokratisering.',
      },
    },

    // ========== OPPGAVE 10: REFLEKSJON ==========
    {
      id: 'samfunnsfag-10-5-ex-10',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-10',
        number: '5.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I fredsarbeid snakker man om balansen mellom «fred» og «rettferdighet». Noen ganger kan det virke som om man må velge det ene eller det andre.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva dette dilemmaet innebærer. Gi et eksempel.',
            solution: 'Dilemmaet er at man noen ganger må forhandle med krigsforbrytere for å oppnå fred, noe som kan bety at de slipper straff. Eksempel: I Colombia fikk FARC-ledere mildere straffer i bytte mot at de la ned våpnene og bidro til sannhetskommisjonen.',
          },
          {
            label: 'b',
            task: 'Hva er viktigst — fred eller rettferdighet? Begrunn svaret ditt med argumenter fra begge sider.',
            solution: 'For fred: Uten fred er ingenting mulig, flere dør, og rettferdighet kan komme senere. For rettferdighet: Uten rettferdighet vil freden ikke vare, ofrene føler seg sviktet, og straffrihet kan oppmuntre nye overgrep. En god besvarelse anerkjenner at begge er nødvendige og at det ofte handler om å finne en balanse.',
          },
        ],
        hints: ['Det finnes ikke ett riktig svar — det viktige er at du reflekterer grundig.'],
        solution: 'Fred og rettferdighet er begge nødvendige for varig stabilitet. Dilemmaet oppstår når man må gjøre kompromisser for å oppnå fred, som kan gå på bekostning av rettferdighet for ofrene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-5-oppsummering',
      type: 'text',
      content: `## Oppsummering: Konflikter og fredsarbeid

**Konflikter** oppstår når parter har motstridende interesser, og kan være mellommenneskelige, innenlands eller internasjonale.

**Nøkkelbegreper:**
- **Konflikt:** Motsetninger mellom parter med ulike mål eller interesser
- **Væpnet konflikt:** Mer enn 25 drepte per år; **krig:** mer enn 1000 drepte per år
- **Konfliktårsaker:** Ressurser, territorium, etnisitet, religion, ulikhet, svake stater, historiske urettferdigheter
- **FN:** Verdens viktigste organisasjon for fred, med 193 medlemsland
- **Sikkerhetsrådet:** 15 medlemmer, 5 faste med vetorett
- **Fredsbevarende operasjoner:** FN-soldater (blåhjelmer) som overvåker våpenhviler
- **Diplomati:** Kunsten å løse konflikter gjennom forhandlinger og dialog
- **Mekling:** Når en nøytral tredjepart hjelper partene å finne løsninger
- **Fredsbygging:** Langsiktig arbeid med forsoning, gjenoppbygging og demokratisering
- **Forsoning:** Å bearbeide hat og mistillit etter en konflikt
- **Oslo-avtalen (1993):** Hemmelig norsk mekling mellom Israel og PLO
- **Fredsprisen:** Nobels fredspris deles ut i Oslo av den norske Nobelkomiteen`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-5-ex-11',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-11',
        number: '5.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «FN er for svakt til å skape fred i verden.» Er du enig eller uenig? Begrunn svaret ditt.',
        subTasks: [
          {
            label: 'a',
            task: 'Presenter minst to argumenter for at FN er for svakt.',
            solution: 'Vetoretten lammer Sikkerhetsrådet, FN klarte ikke å forhindre folkemord i Rwanda (1994) eller Srebrenica (1995), FN kan ikke tvinge stormakter, fredsbevarende styrker har for svake mandater, FN er byråkratisk og tregt.',
          },
          {
            label: 'b',
            task: 'Presenter minst to argumenter for at FN likevel spiller en viktig rolle.',
            solution: 'FN er den eneste globale organisasjonen for fred, FN har bidratt til mange vellykkede fredsprosesser, FN gir humanitær hjelp til millioner, FNs normer og regler har endret hva som aksepteres i internasjonal politikk, verden ville sannsynligvis vært enda farligere uten FN.',
          },
          {
            label: 'c',
            task: 'Gi din egen vurdering og foreslå eventuelt forbedringer.',
            solution: 'En god besvarelse anerkjenner FNs svakheter og styrker, og foreslår mulige reformer som endring av vetoretten, sterkere mandater for fredsbevarende styrker, bedre finansiering eller utvidet Sikkerhetsråd.',
          },
        ],
        hints: ['Bruk konkrete eksempler fra teksten.', 'Husk å presentere begge sider.'],
        solution: 'En god drøfting anerkjenner at FN har alvorlige svakheter, men argumenterer for at organisasjonen likevel er uunnværlig for internasjonal fred og samarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-5-ex-12',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-12',
        number: '5.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Velg en aktuell konflikt og analyser den grundig.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv konflikten: Hvem er partene? Hva handler konflikten om? Hva er den historiske bakgrunnen?',
            solution: 'Svaret bør gi en grundig beskrivelse av konflikten med partene, årsakene og den historiske bakgrunnen.',
          },
          {
            label: 'b',
            task: 'Analyser årsaker: Bruk fagbegrepene du har lært (territorium, ressurser, identitet, religion, ulikhet, svake stater) for å analysere hvorfor konflikten oppsto.',
            solution: 'Svaret bør identifisere flere årsaker og bruke fagbegreper fra kapittelet.',
          },
          {
            label: 'c',
            task: 'Foreslå løsninger: Hva mener du det internasjonale samfunnet bør gjøre? Bruk begrepene diplomati, mekling, sanksjoner, fredsbygging og forsoning.',
            solution: 'Svaret bør foreslå konkrete tiltak og begrunne dem med fagkunnskap fra kapittelet.',
          },
        ],
        hints: ['Bruk internett for å finne oppdatert informasjon.', 'Husk at det finnes flere sider av enhver konflikt.', 'Vær kritisk til kildene du bruker.'],
        solution: 'En god analyse bruker fagbegreper, viser forståelse for konfliktens kompleksitet, og foreslår realistiske løsninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'samfunnsfag-10-5-ex-13',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-13',
        number: '5.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Fred handler ikke bare om å stoppe skyting — det handler om rettferdighet, utvikling og forsoning.» Forklar hva dette sitatet betyr, og drøft om du er enig.',
        hints: [
          'Bruk eksempler fra Colombia, Sør-Afrika eller andre steder der fred har blitt bygget etter krig.',
          'Tenk på forskjellen mellom negativ fred (fravær av vold) og positiv fred (rettferdighet og samarbeid).',
        ],
        solution: 'En god drøfting skiller mellom negativ fred (fravær av vold) og positiv fred (et rettferdig samfunn). Den bruker eksempler for å vise at varig fred krever mer enn bare å stoppe kamphandlinger — det krever forsoning, gjenoppbygging, rettferdighet og utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Norsk politikk og styreform
// LK20: Utforske og beskrive korleis ulike politiske system er organiserte, og
//        reflektere over hva det innebærer å være medborger
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_6: TextbookChapter = {
  id: 'samfunnsfag-10-6',
  courseId: 'samfunnsfag-10',
  chapterNumber: '6',
  title: 'Norsk politikk og styreform',
  description: 'Lær om Stortinget, regjeringen, kommunestyret, politiske partier og hvordan lover blir til i Norge.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske og beskrive korleis ulike politiske system er organiserte',
    'reflektere over hva det innebærer å være medborger, og ulike former for demokratisk deltakelse',
    'drøfte korleis makt og maktmisbruk kjem til uttrykk i ulike samanhengar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-6-intro',
      type: 'text',
      content: `## Hvem bestemmer egentlig i Norge?

Du har kanskje hørt noen si: «Politikerne gjør jo bare som de vil!» Eller kanskje du selv har tenkt at politikk er noe kjedelig og fjernt som ikke angår deg.

Men tenk etter: Hvem bestemmer at du skal gå på skolen til du er 16? Hvem bestemmer hvor mye foreldrene dine betaler i skatt? Hvem bestemmer om det skal bygges en ny fotballbane i kommunen din, eller om sykehjemmet skal få flere ansatte?

Svaret er: **Politikerne** — valgt av vanlige folk som deg og dine foreldre. Politikk handler om **hvem som bestemmer, hva de bestemmer, og hvordan de bestemmer det**. Og i et demokrati som Norge er det til syvende og sist **folket** som har makten — gjennom valg.

Det norske politiske systemet er bygget opp som en pyramide med flere nivåer: Stortinget og regjeringen på toppen, fylkeskommunen i midten, og kommunen nærmest deg. Hvert nivå har sine oppgaver og sitt ansvar.

I dette kapittelet skal du lære om:
- Hvordan Stortinget, regjeringen og kommunestyret fungerer
- De politiske partiene og hva de står for
- Hvordan en lov blir til
- Forskjellen mellom posisjonen og opposisjonen
- Hvordan du kan påvirke politiske beslutninger`,
    },

    // ========== DEFINISJON: PARLAMENTARISME ==========
    {
      id: 'samfunnsfag-10-6-def-1',
      type: 'definition',
      title: 'Parlamentarisme',
      content: `**Parlamentarisme** er et politisk system der regjeringen er avhengig av å ha støtte i parlamentet (i Norge: Stortinget) for å sitte med makten.

I et parlamentarisk system:
- **Stortinget** er nasjonalforsamlingen — den folkevalgte forsamlingen som vedtar lover og kontrollerer regjeringen
- **Regjeringen** utgår fra Stortinget — det vil si at regjeringen må ha støtte (eller i det minste ikke aktivt motstand) fra flertallet i Stortinget
- Hvis flertallet i Stortinget vedtar et **mistillitsforslag** mot regjeringen, må den gå av
- Statsministeren er vanligvis lederen av det største partiet i regjeringskoalisjonen

**Parlamentarismen i Norge** ble innført i 1884, etter en lang politisk kamp. Før det utnevnte kongen regjeringen uavhengig av Stortinget.

**Viktig å forstå:**
Norge har ofte **mindretallsregjeringer** — det betyr at regjeringen ikke har flertall i Stortinget alene, men må forhandle med andre partier for å få vedtatt sine forslag. Dette krever kompromisser og gjør at flere partier får innflytelse.

Noen land, som USA, har et **presidentsystem** der presidenten velges direkte av folket og ikke kan fjernes av kongressen gjennom mistillitsforslag. I Norge velger vi ikke statsministeren direkte — vi stemmer på partier, og statsministeren er lederen for det partiet eller den koalisjonen som har mest støtte i Stortinget.`,
    },

    // ========== TEKST: STORTINGET ==========
    {
      id: 'samfunnsfag-10-6-stortinget',
      type: 'text',
      content: `## Stortinget — folkets forsamling

Stortinget er Norges nasjonalforsamling og den lovgivende makten. Det holder til i Stortingsbygningen i sentrum av Oslo.

### Sammensetning
Stortinget har **169 representanter** som velges fra hele Norge hvert fjerde år. Representantene fordeles på **19 valgdistrikter** (fylkene), slik at hele landet er representert.

### Stortingets oppgaver
Stortinget har fire hovedoppgaver:

**1. Vedta lover**
Alle nye lover i Norge må vedtas av Stortinget. Regjeringen (eller enkeltrepresentanter) fremmer **lovforslag**, som deretter behandles i **fagkomiteer** og debatteres og stemmes over i **plenum** (samlet Storting).

**2. Vedta statsbudsjettet**
Hvert år legger regjeringen frem forslag til statsbudsjett — statens inntekter og utgifter for neste år. Stortinget behandler, endrer og vedtar budsjettet. Dette er en av de viktigste oppgavene, fordi det bestemmer hva pengene skal brukes til.

**3. Kontrollere regjeringen**
Stortinget overvåker regjeringens arbeid gjennom:
- **Spørretime:** Stortingsrepresentanter stiller spørsmål til statsråder (ministrene)
- **Interpellasjoner:** Grundige spørsmål som krever lengre svar og debatt
- **Kontroll- og konstitusjonskomiteen:** Undersøker om regjeringen følger lovene
- **Mistillitsforslag:** Stortinget kan tvinge regjeringen til å gå av

**4. Behandle internasjonale avtaler**
Viktige internasjonale avtaler må godkjennes av Stortinget. For eksempel måtte Stortinget godkjenne EØS-avtalen som knytter Norge til EUs indre marked.

### Fagkomiteene
Stortinget har 12 fagkomiteer (for eksempel finanskomiteen, helsekomiteen, utenrikskomiteen) som fordeler arbeidet. Komiteene innstiller (anbefaler) til Stortinget i plenum, og det er i komiteene mye av det viktigste arbeidet gjøres.

### Stortingsvalg
Stortingsvalg holdes hvert fjerde år, alltid i september. Alle norske statsborgere over 18 år har stemmerett. Ved valget stemmer du på et parti i ditt valgdistrikt, og du kan gi personstemmer til kandidater du foretrekker.`,
    },

    // ========== OPPGAVE 1: FLERVALG ==========
    {
      id: 'samfunnsfag-10-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-1',
        number: '6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange representanter sitter på Stortinget?',
        options: [
          {
            id: 'a',
            text: '101',
            isCorrect: false,
            feedback: 'Feil. Stortinget har 169 representanter, fordelt på 19 valgdistrikter.',
          },
          {
            id: 'b',
            text: '169',
            isCorrect: true,
            feedback: 'Riktig! Stortinget har 169 representanter som velges hvert fjerde år.',
          },
          {
            id: 'c',
            text: '200',
            isCorrect: false,
            feedback: 'Feil. Det er 169 stortingsrepresentanter.',
          },
          {
            id: 'd',
            text: '435',
            isCorrect: false,
            feedback: 'Feil. 435 er antallet medlemmer i det amerikanske Representantenes hus. Stortinget har 169 representanter.',
          },
        ],
        solution: 'Stortinget har 169 representanter fordelt på 19 valgdistrikter.',
      },
    },

    // ========== OPPGAVE 2: STORTINGETS OPPGAVER ==========
    {
      id: 'samfunnsfag-10-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-2',
        number: '6.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Stortinget har fire hovedoppgaver.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn de fire hovedoppgavene til Stortinget.',
            solution: 'Vedta lover, vedta statsbudsjettet, kontrollere regjeringen, og behandle internasjonale avtaler.',
          },
          {
            label: 'b',
            task: 'Forklar hva «spørretime» er og hvorfor det er viktig.',
            solution: 'Spørretime er en fast ordning der stortingsrepresentanter kan stille spørsmål direkte til statsrådene (ministrene) i regjeringen. Det er viktig fordi det er en måte Stortinget kontrollerer regjeringen på, og fordi det tvinger regjeringen til å svare for sine handlinger.',
          },
          {
            label: 'c',
            task: 'Hva innebærer et mistillitsforslag, og hva skjer dersom det får flertall?',
            solution: 'Et mistillitsforslag er et forslag om at Stortinget ikke lenger har tillit til regjeringen (eller en enkelt statsråd). Hvis det får flertall, må regjeringen (eller statsråden) gå av. Dette er det sterkeste virkemiddelet Stortinget har overfor regjeringen.',
          },
        ],
        hints: ['Husk at Stortinget er den lovgivende makten.'],
        solution: 'Stortingets fire hovedoppgaver er å vedta lover, vedta statsbudsjettet, kontrollere regjeringen og behandle internasjonale avtaler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: REGJERINGEN ==========
    {
      id: 'samfunnsfag-10-6-def-2',
      type: 'definition',
      title: 'Regjeringen',
      content: `**Regjeringen** er den utøvende makten i Norge. Den ledes av **statsministeren** og består av **statsråder** (ministre) som har ansvar for hvert sitt departement.

**Regjeringens oppgaver:**
- Sette Stortingets lover og vedtak ut i livet
- Lede statens forvaltning (departementer, direktorater, etater)
- Fremme lovforslag og statsbudsjett for Stortinget
- Representere Norge internasjonalt
- Ta løpende beslutninger om statens drift

**Hvordan dannes en regjering?**
Etter stortingsvalg gir kongen oppdraget med å danne regjering til den politikeren som har best sjanse for å få støtte i Stortinget. Vanligvis er dette lederen av det største partiet eller den største koalisjonen.

**Typer regjeringer i Norge:**
- **Flertallsregjering:** Regjeringspartiene har til sammen flertall i Stortinget (mer enn 84 av 169 plasser). Dette gjør det lettere å få vedtatt saker.
- **Mindretallsregjering:** Regjeringspartiene har ikke flertall alene og må forhandle med opposisjonen for å få støtte. Dette har vært det vanligste i Norge.
- **Ettpartiregjering:** Regjeringen består av bare ett parti (sjeldent i Norge i dag).
- **Koalisjonsregjering:** Regjeringen består av flere partier som samarbeider (mest vanlig i Norge).

**Departementene** er regjeringens fagministre. Hvert departement har ansvar for et bestemt politikkområde, for eksempel Finansdepartementet, Helse- og omsorgsdepartementet, Kunnskapsdepartementet (som har ansvar for skolen din).

**Statsråd** holdes på Slottet hver fredag, der kongen formelt godkjenner regjeringens beslutninger (**kongelig resolusjon**). I praksis har kongen ingen reell politisk makt — dette er en formalitet.`,
    },

    // ========== TEKST: KOMMUNE OG FYLKE ==========
    {
      id: 'samfunnsfag-10-6-kommune',
      type: 'text',
      content: `## Kommunen og fylkeskommunen — det nære demokratiet

Det norske styresettet er delt i tre forvaltningsnivåer: staten, fylkeskommunen og kommunen. For de fleste er det kommunen som har mest direkte betydning for hverdagen.

### Kommunen
Norge har 356 kommuner (per 2024). Kommunen er det laveste forvaltningsnivået og det som er nærmest deg.

**Kommunens oppgaver:**
- Barnehager og grunnskole (1.-10. klasse)
- Helse- og sosialtjenester (fastlege, hjemmesykepleie, sykehjem)
- Barnevern
- Kultur og fritid (bibliotek, idrettsanlegg, kulturhus)
- Tekniske tjenester (vann, avløp, renovasjon)
- Arealplanlegging (bestemme hva som bygges hvor)
- Brann- og redningstjeneste

**Kommunestyret** er kommunens øverste organ. Det velges av innbyggerne hvert fjerde år (kommunevalg). **Ordføreren** leder kommunestyret og er kommunens fremste representant.

### Fylkeskommunen
Norge har 15 fylkeskommuner (per 2024). Fylkeskommunen er et mellomnivå mellom staten og kommunen.

**Fylkeskommunens oppgaver:**
- Videregående opplæring (den skolen du snart skal begynne på!)
- Kollektivtransport (buss, bane, ferge)
- Fylkesveier
- Tannhelse
- Kultur og regional utvikling

**Fylkestinget** er fylkeskommunens øverste organ og velges samtidig med kommunestyret.

### Kommunevalg og fylkestingsvalg
Kommunevalg og fylkestingsvalg holdes midt mellom stortingsvalgene. Det betyr at det er valg i Norge annethvert år — stortingsvalg i oddetallsår og kommunevalg i partallsår.

**Viktig:** Du kan stemme ved kommunevalg fra du er 18 år, men du trenger ikke å være norsk statsborger — alle som har bodd i Norge i minst tre år, har stemmerett ved kommunevalg.`,
    },

    // ========== OPPGAVE 3: FLERVALG ==========
    {
      id: 'samfunnsfag-10-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-3',
        number: '6.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem har ansvaret for grunnskolen (1.-10. klasse) i Norge?',
        options: [
          {
            id: 'a',
            text: 'Staten (regjeringen)',
            isCorrect: false,
            feedback: 'Feil. Staten lager læreplanene, men det er kommunen som driver grunnskolene.',
          },
          {
            id: 'b',
            text: 'Fylkeskommunen',
            isCorrect: false,
            feedback: 'Feil. Fylkeskommunen har ansvar for videregående skole, ikke grunnskolen.',
          },
          {
            id: 'c',
            text: 'Kommunen',
            isCorrect: true,
            feedback: 'Riktig! Det er kommunen som har ansvar for grunnskolen, inkludert barneskole og ungdomsskole.',
          },
          {
            id: 'd',
            text: 'EU',
            isCorrect: false,
            feedback: 'Feil. Norge er ikke med i EU, og utdanning er et nasjonalt ansvar.',
          },
        ],
        solution: 'Kommunen har ansvar for grunnskolen (1.-10. klasse) i Norge.',
      },
    },

    // ========== OPPGAVE 4: KOMMUNE ==========
    {
      id: 'samfunnsfag-10-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-4',
        number: '6.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Det norske styresettet er delt i tre forvaltningsnivåer.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn de tre forvaltningsnivåene og gi to eksempler på oppgaver for hvert nivå.',
            solution: 'Staten: Forsvar, utenrikspolitikk, sykehus, politi. Fylkeskommunen: Videregående skole, kollektivtransport, fylkesveier, tannhelse. Kommunen: Grunnskole, barnehage, helse- og sosialtjenester, brannvern, vann/avløp.',
          },
          {
            label: 'b',
            task: 'Hvorfor tror du det er viktig at oppgavene er fordelt på flere nivåer, i stedet for at alt styres fra Oslo?',
            solution: 'Lokal styring gjør at beslutninger tilpasses lokale forhold og behov. Folk som bor i kommunen kjenner best de lokale utfordringene. Det gir innbyggerne mulighet til å påvirke beslutninger som angår dem direkte. Det ville vært upraktisk og udemokratisk å styre alt fra sentralt hold.',
          },
        ],
        hints: ['Tenk på hvilke tjenester du bruker i hverdagen og hvem som har ansvar for dem.'],
        solution: 'De tre nivåene er staten, fylkeskommunen og kommunen. Oppgavene er fordelt slik at beslutninger tas nærmest mulig de som berøres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: POLITISKE PARTIER ==========
    {
      id: 'samfunnsfag-10-6-def-3',
      type: 'definition',
      title: 'Politiske partier i Norge',
      content: `**Politiske partier** er organisasjoner som samler mennesker med lignende politiske meninger og mål. Partiene stiller til valg og konkurrerer om å få størst mulig innflytelse i Stortinget, fylkestinget og kommunestyret.

Norge har et **flerpartisystem** med mange partier, i motsetning til for eksempel USA som i praksis har et topartisystem.

**De ni partiene på Stortinget (per 2024):**

**Venstresiden (rød side):**
- **Rødt (R):** Sosialistisk parti. Vil ha store endringer i økonomien, mot kapitalisme, for sterk offentlig sektor.
- **Sosialistisk Venstreparti (SV):** Vil ha mer utjevning, sterkere miljøpolitikk, offentlig velferd og utdanning.
- **Arbeiderpartiet (Ap):** Norges største parti gjennom mange tiår. Sosialdemokratisk — for en sterk velferdsstat, samarbeid mellom arbeidsgivere og arbeidstakere, og gradvis reform.

**Sentrum:**
- **Senterpartiet (Sp):** Desentralisering og distriktspolitikk. Vil styrke kommunene, mot EU og sentralisering. Sterk støtte i rurale strøk.
- **Miljøpartiet De Grønne (MDG):** Miljøet først. Vil ha store kutt i utslipp, stanse oljeutvinning, og prioritere klima over kortsiktig økonomisk vekst.
- **Kristelig Folkeparti (KrF):** Kristen verdiplattform. Familiepolitikk, bistand til fattige land, og etiske spørsmål.
- **Venstre (V):** Liberalt parti. For individets frihet, miljø, utdanning og næringsliv. Norges eldste parti.

**Høyresiden (blå side):**
- **Høyre (H):** Konservativt parti. For privat næringsliv, lavere skatter, valgfrihet og moderat politikk.
- **Fremskrittspartiet (FrP):** Mest til høyre. For lavere skatter og avgifter, strengere innvandringspolitikk og mer privat valgfrihet.

**Viktig:** Denne oversikten er sterkt forenklet. Alle partier har komplekse programmer med mange nyanser. Venstre-høyre-aksen er bare én måte å forstå politikk på — partiene skiller seg også i synet på miljø, innvandring, distrikt vs. by, EU/EØS og mange andre spørsmål.`,
    },

    // ========== EKSEMPEL: VENSTRE-HØYRE ==========
    {
      id: 'samfunnsfag-10-6-example-1',
      type: 'example',
      title: 'Eksempel: Hva betyr venstre og høyre i politikken?',
      problem: 'Vi snakker ofte om «venstresiden» og «høyresiden» i politikken. Men hva betyr det egentlig, og hvor kommer begrepene fra?',
      solution: `**Historisk opprinnelse:**
Begrepene «venstre» og «høyre» stammer fra den franske revolusjonen (1789). I den franske nasjonalforsamlingen satt tilhengerne av endring til venstre for presidenten, mens de som ville bevare det bestående satt til høyre.

**Hva skiller venstre og høyre i dag?**

**Venstresiden** legger typisk vekt på:
- Mer økonomisk utjevning (høyere skatter for de rikeste)
- Sterkere offentlig sektor (offentlige sykehus, skoler)
- Arbeidstakerrettigheter og fagforeninger
- Mer offentlig regulering av næringslivet

**Høyresiden** legger typisk vekt på:
- Lavere skatter og avgifter
- Mer privat initiativ og valgfrihet
- Mindre statlig regulering av næringslivet
- Individuelt ansvar

**Men virkeligheten er mer kompleks:**
- **Miljø:** MDG er vanskelig å plassere på en ren venstre-høyre-akse
- **Distrikt:** Senterpartiet er sentrumsorientert i økonomisk politikk, men unik i distriktspolitikken
- **Innvandring:** Synet på innvandring følger ikke nødvendigvis venstre-høyre-aksen
- **Verdispørsmål:** KrFs syn på familie og etikk passer ikke inn i den tradisjonelle aksen

**Konklusjon:** Venstre-høyre-aksen er et nyttig verktøy, men den forenkler virkeligheten. De fleste politiske spørsmål har flere dimensjoner.`,
    },

    // ========== OPPGAVE 5: PARTIER ==========
    {
      id: 'samfunnsfag-10-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-5',
        number: '6.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'De norske politiske partiene plasseres ofte langs en venstre-høyre-akse.',
        subTasks: [
          {
            label: 'a',
            task: 'Plasser følgende partier fra venstre til høyre: Høyre, SV, Arbeiderpartiet, Fremskrittspartiet, Rødt.',
            solution: 'Fra venstre til høyre: Rødt, SV, Arbeiderpartiet, Høyre, Fremskrittspartiet.',
          },
          {
            label: 'b',
            task: 'Velg to partier som står langt fra hverandre politisk. Hva er de viktigste forskjellene mellom dem?',
            solution: 'For eksempel Rødt og FrP: Rødt vil ha mer offentlig eierskap, høyere skatter, sterkere regulering og er mot kapitalisme. FrP vil ha lavere skatter, mer privat næringsliv, mindre regulering og mer individuell frihet. De er uenige om statens rolle i økonomien.',
          },
          {
            label: 'c',
            task: 'Forklar hvorfor venstre-høyre-aksen er en forenkling. Gi et eksempel på et politisk spørsmål som ikke passer inn i denne modellen.',
            solution: 'Venstre-høyre-aksen handler hovedsakelig om økonomi og statens rolle. Spørsmål om miljø, innvandring, EU/EØS, distrikt vs. by og verdispørsmål passer ikke alltid inn. For eksempel er MDG vanskelig å plassere, og Sp er sentrumsorientert i økonomi men unik i distriktspolitikken.',
          },
        ],
        hints: ['Husk at dette er forenklet — virkeligheten er mer nyansert.'],
        solution: 'Partiene kan plasseres langs en venstre-høyre-akse, men denne modellen er en forenkling som ikke fanger opp alle politiske dimensjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6: FLERVALG ==========
    {
      id: 'samfunnsfag-10-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-6',
        number: '6.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr det at Norge har en «mindretallsregjering»?',
        options: [
          {
            id: 'a',
            text: 'At regjeringen har færre ministere enn vanlig',
            isCorrect: false,
            feedback: 'Feil. Mindretallsregjering handler om støtte i Stortinget, ikke om antall ministere.',
          },
          {
            id: 'b',
            text: 'At regjeringspartiene ikke har flertall i Stortinget og må forhandle med opposisjonen',
            isCorrect: true,
            feedback: 'Riktig! En mindretallsregjering har ikke flertall i Stortinget og må søke støtte fra andre partier for å få vedtatt sine forslag.',
          },
          {
            id: 'c',
            text: 'At regjeringen bare styrer en del av landet',
            isCorrect: false,
            feedback: 'Feil. Regjeringen styrer hele landet, men har ikke flertall i Stortinget.',
          },
          {
            id: 'd',
            text: 'At det er færre enn fem partier i Stortinget',
            isCorrect: false,
            feedback: 'Feil. Antallet partier i Stortinget er uavhengig av om regjeringen er en mindretalls- eller flertallsregjering.',
          },
        ],
        solution: 'En mindretallsregjering har ikke flertall i Stortinget og må forhandle med opposisjonen for å få vedtatt sine forslag.',
      },
    },

    // ========== DEFINISJON: LOVGIVNINGSPROSESSEN ==========
    {
      id: 'samfunnsfag-10-6-def-4',
      type: 'definition',
      title: 'Lovgivningsprosessen — hvordan en lov blir til',
      content: `**Lovgivningsprosessen** er den formelle veien fra en idé om en ny lov til at loven trer i kraft. I Norge er dette en grundig prosess som sikrer at mange synspunkter blir hørt.

**Steg for steg — slik blir en lov til:**

**1. Initiativ og utredning**
En ny lov starter ofte med at regjeringen oppnevner et **utvalg** (ekspertgruppe) som utreder et tema grundig. Utvalget skriver en rapport (NOU — Norges offentlige utredninger) med anbefalinger.

**2. Høring**
Rapporten sendes på **høring** — det betyr at alle som ønsker det, kan gi sin mening. Organisasjoner, kommuner, eksperter og vanlige folk kan sende inn **høringsuttalelser**. Dette sikrer at mange perspektiver blir vurdert.

**3. Lovforslag**
Basert på utredningen og høringsuttalelsene utarbeider regjeringen et lovforslag, som kalles en **proposisjon** (Prop. L). Denne legges frem for Stortinget.

**4. Komitébehandling**
Lovforslaget sendes til riktig **fagkomité** i Stortinget. Komiteen diskuterer forslaget, kaller inn eksperter og berørte parter, og skriver en **innstilling** (anbefaling) til Stortinget.

**5. Debatt og votering**
Stortinget debatterer forslaget i plenum. Representantene holder innlegg og diskuterer. Deretter stemmes det — **votering**. Flertallet bestemmer.

**6. Sanksjonering**
Loven sendes til kongen for **sanksjon** (godkjenning). I praksis er dette en formalitet.

**7. Loven trer i kraft**
Loven kunngjøres og trer i kraft på en bestemt dato.

Hele prosessen kan ta alt fra noen måneder til flere år, avhengig av sakens kompleksitet.`,
    },

    // ========== EKSEMPEL: LOVFORSLAG ==========
    {
      id: 'samfunnsfag-10-6-example-2',
      type: 'example',
      title: 'Eksempel: Hvordan en lov påvirker deg',
      problem: 'I 2021 ble den nye opplæringsloven vedtatt, som blant annet ga elever sterkere rett til et trygt og godt skolemiljø. Hvordan gikk denne prosessen?',
      solution: `**1. Utredning:**
Regjeringen oppnevnte et utvalg (Opplæringslovutvalget) som gjennomgikk den gamle opplæringsloven grundig. Utvalget leverte sin rapport (NOU 2019:23) med forslag til ny lov.

**2. Høring:**
Forslaget ble sendt på bred høring. Kommuner, lærerforbund, elevorganisasjoner, foreldre og andre kunne gi sine innspill. Over 700 høringsuttalelser kom inn.

**3. Lovforslag:**
Kunnskapsdepartementet utarbeidet et lovforslag basert på utvalgets anbefalinger og høringsuttalelsene. Forslaget ble lagt frem som en proposisjon til Stortinget.

**4. Komitébehandling:**
Utdannings- og forskningskomiteen behandlet forslaget. De holdt høringer der blant annet elever fra Elevorganisasjonen fikk uttale seg.

**5. Vedtak:**
Stortinget debatterte og stemte over loven. Den ble vedtatt med bredt flertall.

**6. Resultat:**
Den nye opplæringsloven styrket elevenes rettigheter, blant annet retten til et trygt og godt skolemiljø fritt for mobbing. Loven gjelder for deg, dine lærere og din skole.

**Hva kan vi lære?**
Lovgivningsprosessen sikrer at mange stemmer blir hørt — inkludert elevenes. Selv du kan påvirke lover gjennom å sende høringsuttalelser, engasjere deg i Elevorganisasjonen eller kontakte politikere.`,
    },

    // ========== OPPGAVE 7: LOV ==========
    {
      id: 'samfunnsfag-10-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-7',
        number: '6.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lovgivningsprosessen i Norge har flere steg.',
        subTasks: [
          {
            label: 'a',
            task: 'List opp de viktigste stegene fra en idé om en ny lov til loven trer i kraft.',
            solution: '1) Utredning (NOU), 2) Høring, 3) Lovforslag (proposisjon), 4) Komitébehandling i Stortinget, 5) Debatt og votering i plenum, 6) Sanksjonering av kongen, 7) Loven trer i kraft.',
          },
          {
            label: 'b',
            task: 'Hva er en «høring», og hvorfor er den viktig for demokratiet?',
            solution: 'En høring er en prosess der alle som ønsker det, kan gi sin mening om et lovforslag. Den er viktig for demokratiet fordi den sikrer at mange perspektiver og stemmer blir hørt før en lov vedtas. Det gir legitimitet til loven og kan avdekke problemer med forslaget.',
          },
          {
            label: 'c',
            task: 'Hvordan kan du som elev påvirke lovgivningen i Norge?',
            solution: 'Gjennom Elevorganisasjonen som sender høringsuttalelser, gjennom ungdomspartier, ved å kontakte politikere direkte, ved å engasjere seg i debatter, ved å delta i demonstrasjoner, og gjennom sosiale medier. Elevorganisasjonen har faktisk bidratt til flere endringer i opplæringsloven.',
          },
        ],
        hints: ['Tenk på høringsrunden som en demokratisk sikkerhet.'],
        solution: 'Lovgivningsprosessen er en grundig prosess som sikrer at mange stemmer blir hørt. Høringen er spesielt viktig for demokratisk medvirkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: POSISJON OG OPPOSISJON ==========
    {
      id: 'samfunnsfag-10-6-posisjon-opposisjon',
      type: 'text',
      content: `## Posisjon og opposisjon

Etter et stortingsvalg deles partiene inn i to grupper:

### Posisjonen
**Posisjonen** er de partiene som danner regjering. Regjeringspartiene har ansvaret for å styre landet og legge frem forslag for Stortinget. Statsministeren og statsrådene (ministrene) kommer fra posisjonspartiene.

### Opposisjonen
**Opposisjonen** er alle partiene som ikke sitter i regjering. Opposisjonens oppgave er å:
- Kritisere og utfordre regjeringen
- Fremme alternative forslag
- Kontrollere at regjeringen gjør en god jobb
- Representere de velgerne som ikke stemte på regjeringspartiene

### Hvorfor er opposisjonen viktig?
I et demokrati er det like viktig å ha en sterk opposisjon som en sterk regjering. Opposisjonen sørger for at:
- Regjeringen holdes ansvarlig
- Alternative synspunkter kommer frem
- Makt ikke misbrukes
- Det finnes et reelt alternativ ved neste valg

### Samarbeid på tvers
Selv om posisjon og opposisjon er politiske motstandere, samarbeider de ofte i viktige saker. Store, langsiktige spørsmål som forsvarspolitikk, pensjon og klimapolitikk løses ofte gjennom brede **forlik** der flere partier er enige.

Et eksempel er **pensjonsforliket** fra 2005, der de fleste partiene ble enige om en stor pensjonsreform. Slike forlik sikrer at viktige beslutninger overlever regjeringsskifter.`,
    },

    // ========== OPPGAVE 8: POSISJON/OPPOSISJON ==========
    {
      id: 'samfunnsfag-10-6-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-8',
        number: '6.8',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er opposisjonens viktigste oppgave i et demokrati?',
        options: [
          {
            id: 'a',
            text: 'Å gjøre det umulig for regjeringen å styre',
            isCorrect: false,
            feedback: 'Feil. Opposisjonen skal utfordre og kontrollere regjeringen, ikke sabotere den.',
          },
          {
            id: 'b',
            text: 'Å kritisere, kontrollere og fremme alternativer til regjeringens politikk',
            isCorrect: true,
            feedback: 'Riktig! Opposisjonen sørger for at regjeringen holdes ansvarlig, at alternative synspunkter kommer frem, og at det finnes et reelt alternativ ved neste valg.',
          },
          {
            id: 'c',
            text: 'Å alltid stemme mot regjeringens forslag',
            isCorrect: false,
            feedback: 'Feil. Opposisjonen kan stemme for regjeringens forslag hvis de er enige. Det viktige er at de kritisk vurderer alle forslag.',
          },
          {
            id: 'd',
            text: 'Å vente til neste valg uten å gjøre noe',
            isCorrect: false,
            feedback: 'Feil. Opposisjonen er aktiv hele perioden — de stiller spørsmål, fremmer forslag og kontrollerer regjeringen.',
          },
        ],
        solution: 'Opposisjonens viktigste oppgave er å kontrollere regjeringen, fremme alternativer og sørge for at ulike synspunkter kommer frem.',
      },
    },

    // ========== EKSEMPEL: VALG ==========
    {
      id: 'samfunnsfag-10-6-example-3',
      type: 'example',
      title: 'Eksempel: Stortingsvalget 2021',
      problem: 'Ved stortingsvalget i 2021 ble det et regjeringsskifte i Norge. Hva skjedde, og hva forteller det om det norske demokratiet?',
      solution: `**Før valget:**
Norge ble styrt av en borgerlig regjering ledet av **Erna Solberg** (Høyre), i samarbeid med Venstre og KrF. Regjeringen hadde sittet med makten siden 2013.

**Valgresultatet:**
Velgerne ga flertall til de rødgrønne partiene (Arbeiderpartiet, Senterpartiet og SV). Arbeiderpartiet ble det største partiet, og **Jonas Gahr Støre** ble ny statsminister.

**Regjeringsdannelse:**
Støre dannet en regjering med Arbeiderpartiet og Senterpartiet — en **mindretallsregjering** som ikke hadde flertall i Stortinget alene. De var derfor avhengige av å forhandle med SV og andre partier for å få vedtatt sine saker.

**Hva viser dette?**
- **Fredelig maktoverføring:** Regjeringsskiftet skjedde fredelig og ryddig. Solberg gratulerte Støre, og makten ble overført uten konflikter.
- **Velgerne bestemmer:** Det er velgerne som avgjør hvem som styrer, gjennom frie valg.
- **Kompromiss:** Mindretallsregjeringen viste at norsk politikk handler mye om forhandlinger og kompromisser.
- **Demokrati i praksis:** Hele prosessen — fra valgkamp til regjeringsdannelse — er et eksempel på hvordan et fungerende demokrati ser ut.`,
    },

    // ========== OPPGAVE 9: REFLEKSJON ==========
    {
      id: 'samfunnsfag-10-6-ex-9',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-9',
        number: '6.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Politisk engasjement blant unge.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke muligheter har ungdom til å påvirke norsk politikk, selv før de får stemmerett?',
            solution: 'Melde seg inn i ungdomspartier, engasjere seg i elevråd og ungdomsråd, delta i demonstrasjoner, skrive debattinnlegg, kontakte politikere, delta i høringer gjennom organisasjoner, bruke sosiale medier for å skape oppmerksomhet om saker.',
          },
          {
            label: 'b',
            task: 'Noen mener at stemmerettsalderen bør senkes til 16 år. Hva tror du? Begrunn svaret ditt.',
            solution: 'En god besvarelse presenterer argumenter for (16-åringer betaler skatt, er strafferettslig ansvarlige, engasjerte, berørt av politikk) og mot (mangler modenhet, kan påvirkes av foreldre, hjernen er ikke ferdig utviklet) og gir sin egen begrunnede vurdering.',
          },
        ],
        hints: ['Det finnes gode argumenter på begge sider.'],
        solution: 'Ungdom har mange muligheter til å påvirke politikk utover stemmerett. Spørsmålet om 16 års stemmerett handler om å balansere deltakelse og modenhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NOTAT: VISSTE DU ==========
    {
      id: 'samfunnsfag-10-6-note-1',
      type: 'note',
      title: 'Visste du dette?',
      content: `I noen norske kommuner har det vært forsøk med stemmerett for 16-åringer ved kommunevalg. Erfaringene viser at 16-åringer stemmer i omtrent like stor grad som andre aldersgrupper — og noen ganger mer enn 18-21-åringene!

Det norske Stortinget er et av verdens mest likestilte parlamenter. Omtrent 45 % av representantene er kvinner. Til sammenligning er verdensgjennomsnittet rundt 26 %.

Norge var et av de første landene i verden der kvinner fikk stemmerett (1913). Kampen for kvinnelig stemmerett ble ledet av modige kvinner som Gina Krog og Fernanda Nissen.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-6-oppsummering',
      type: 'text',
      content: `## Oppsummering: Norsk politikk og styreform

Norge er et **representativt demokrati** med **parlamentarisme** der regjeringen er avhengig av Stortingets tillit.

**Nøkkelbegreper:**
- **Parlamentarisme:** Regjeringen må ha støtte i Stortinget for å sitte med makten
- **Stortinget:** Norges nasjonalforsamling med 169 representanter — vedtar lover, budsjett og kontrollerer regjeringen
- **Regjeringen:** Den utøvende makten, ledet av statsministeren med statsråder (ministre)
- **Mindretallsregjering:** Regjeringen har ikke flertall i Stortinget og må forhandle med opposisjonen
- **Koalisjonsregjering:** Regjering bestående av flere partier
- **Kommunen:** Laveste forvaltningsnivå — ansvar for skole, helse, barnehage
- **Fylkeskommunen:** Mellomnivå — ansvar for videregående skole og kollektivtransport
- **Posisjon:** Regjeringspartiene
- **Opposisjon:** Partiene som ikke sitter i regjering
- **Lovgivningsprosessen:** Utredning → høring → lovforslag → komitébehandling → votering → sanksjon
- **Høring:** Mulighet for alle å gi innspill til lovforslag
- **Venstre-høyre-aksen:** Forenklet modell for å plassere partier politisk
- **Forlik:** Brede politiske avtaler på tvers av posisjon og opposisjon`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-6-ex-10',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-10',
        number: '6.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «I et demokrati er det viktigere å ha en sterk opposisjon enn en sterk regjering.» Drøft denne påstanden.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor opposisjonen er viktig i et demokrati.',
            solution: 'Opposisjonen kontrollerer regjeringen, fremmer alternativer, representerer velgere som ikke stemte på regjeringspartiene, og sørger for at det finnes et reelt alternativ ved neste valg. Uten opposisjon risikerer man maktkonsentrasjon og manglende ansvarliggjøring.',
          },
          {
            label: 'b',
            task: 'Presenter argumenter for at en sterk regjering er viktigere, og argumenter for at en sterk opposisjon er viktigere.',
            solution: 'Sterk regjering: Kan handle raskt og effektivt, gjennomføre nødvendige reformer, gi stabil styring. Sterk opposisjon: Forhindrer maktmisbruk, sikrer at flere synspunkter høres, holder regjeringen skjerpet, gir legitimitet til demokratiet.',
          },
          {
            label: 'c',
            task: 'Gi din egen begrunnede vurdering.',
            solution: 'En god besvarelse anerkjenner at begge er nødvendige for et fungerende demokrati. Balansen mellom en handlekraftig regjering og en sterk, kritisk opposisjon er det som gjør demokratiet robust.',
          },
        ],
        hints: ['Tenk på hva som skjer i land der opposisjonen er svak eller ikke-eksisterende.'],
        solution: 'Både en sterk regjering og en sterk opposisjon er nødvendig for et velfungerende demokrati. De utgjør en maktbalanse som forhindrer misbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-6-ex-11',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-11',
        number: '6.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: Undersøk din egen kommune.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn ut hvilke partier som styrer i din kommune. Hvem er ordfører? Hvilke partier sitter i posisjon og opposisjon?',
            solution: 'Svaret bør inneholde konkret informasjon om elevens hjemkommune, inkludert ordfører, posisjonspartier og opposisjonspartier.',
          },
          {
            label: 'b',
            task: 'Finn en sak som kommunestyret har behandlet nylig. Beskriv saken kort og forklar hvilke partier som var for og mot.',
            solution: 'Svaret bør navngi en konkret sak, forklare hva den handler om, og vise at eleven forstår at ulike partier kan ha ulike syn.',
          },
          {
            label: 'c',
            task: 'Vurder: Er det noe du ville gjort annerledes hvis du var politiker i din kommune? Begrunn svaret.',
            solution: 'En god besvarelse viser at eleven har satt seg inn i lokalpolitikken og kan reflektere over politiske valg med argumenter.',
          },
        ],
        hints: ['Kommunens nettsider har informasjon om kommunestyret og møter.', 'Lokalavisen dekker ofte kommunepolitikk.'],
        solution: 'En god besvarelse viser at eleven har undersøkt lokalpolitikken i sin kommune og kan reflektere over politiske spørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Økonomi og arbeidsliv
// LK20: Utforske korleis teknologi har endra og endrar arbeidsliv og
//        samfunn, og drøfte korleis ulike grupper har bidratt til å endre
//        samfunnet
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_7: TextbookChapter = {
  id: 'samfunnsfag-10-7',
  courseId: 'samfunnsfag-10',
  chapterNumber: '7',
  title: 'Økonomi og arbeidsliv',
  description: 'Lær om den norske modellen, fagforeninger og arbeidsgivere, lønnsforhandlinger, velferdsstaten og hvordan arbeidslivet fungerer i Norge.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske korleis teknologi har endra og endrar arbeidsliv og samfunn',
    'drøfte korleis ulike grupper har bidratt til å endre samfunnet',
    'utforske ulike plasser og folk sine levekår og drøfte tiltak for meir rettferdig fordeling',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfunnsfag-10-7-intro',
      type: 'text',
      content: `## Hvorfor er Norge et av verdens beste land å jobbe i?

Om noen år skal du ut i arbeidslivet. Du skal kanskje jobbe som sykepleier, ingeniør, kokk, programmerer eller noe helt annet. Men uansett hva du velger, vil du oppleve et arbeidsliv som er ganske annerledes enn i de fleste andre land.

I Norge har de fleste arbeidstakere:
- Regulert arbeidstid (vanligvis 37,5 timer i uken)
- Minst fem ukers ferie
- Rett til sykepenger når de er syke
- Foreldrepermisjon ved barnefødsler
- Vern mot usaklig oppsigelse
- Tilgang til fagforening

Slik har det ikke alltid vært. For bare hundre år siden jobbet norske arbeidere 10-12 timer om dagen, seks dager i uken, uten ferie, uten sykepenger og uten rettigheter. Barn ned til 10 år arbeidet i fabrikker. Arbeidsgiverne bestemte alt, og arbeiderne hadde ingen de kunne klage til.

Hvordan gikk vi fra dette til dagens situasjon? Svaret ligger i noe som kalles **den norske modellen** -- et unikt samspill mellom arbeidstakere, arbeidsgivere og staten.

I dette kapittelet skal du lære om:
- Hva den norske modellen er og hvorfor den er spesiell
- Fagforeningenes og arbeidsgivernes rolle
- Hvordan lønnsforhandlinger fungerer
- Hva velferdsstaten er og hvordan den finansieres
- Utfordringer i arbeidslivet i dag og i fremtiden`,
    },

    // ========== DEFINISJON: DEN NORSKE MODELLEN ==========
    {
      id: 'samfunnsfag-10-7-def-1',
      type: 'definition',
      title: 'Den norske modellen',
      content: `**Den norske modellen** (også kalt den nordiske modellen eller den skandinaviske modellen) er betegnelsen på det systemet for samarbeid mellom arbeidstakere, arbeidsgivere og staten som kjennetegner norsk arbeidsliv og økonomi.

Den norske modellen hviler på **tre pilarer:**

**1. Organisert arbeidsliv**
Både arbeidstakere og arbeidsgivere er organisert i sterke organisasjoner som forhandler med hverandre. Arbeidstakerne organiserer seg i **fagforeninger** (som LO, Unio, YS, Akademikerne), og arbeidsgiverne i **arbeidsgiverorganisasjoner** (som NHO, Virke, KS).

**2. Samarbeid og forhandlinger**
I stedet for at arbeidsgiverne ensidig bestemmer lønn og arbeidsforhold, **forhandler** partene seg frem til avtaler. Staten bidrar som tilrettelegger og mekler når forhandlingene kjører seg fast.

**3. En sterk velferdsstat**
Staten sørger for et sikkerhetsnett gjennom offentlige tjenester og ytelser: gratis skole og helsevesen, sykepenger, arbeidsledighetstrygd, pensjon og foreldrepermisjon. Dette finansieres gjennom skatter og avgifter.

**Hvorfor fungerer modellen?**
Modellen bygger på **tillit** -- tillit mellom partene i arbeidslivet, og tillit mellom borgerne og staten. Forskning viser at land med høy tillit har sterkere økonomi, mindre ulikhet og høyere livskvalitet. Norge ligger konsekvent på toppen av internasjonale målinger av livskvalitet og lykke.

**Er modellen perfekt?**
Nei. Modellen har utfordringer knyttet til globalisering, innvandring, teknologiske endringer og et økende antall arbeidstakere som faller utenfor det organiserte arbeidslivet. Men den har vist seg bemerkelsesverdig tilpasningsdyktig gjennom over hundre år.`,
    },

    // ========== TEKST: FAGFORENINGER ==========
    {
      id: 'samfunnsfag-10-7-fagforeninger',
      type: 'text',
      content: `## Fagforeninger -- arbeidstakernes stemme

### Hva er en fagforening?
En **fagforening** er en organisasjon der arbeidstakere samler seg for å ivareta sine interesser overfor arbeidsgiverne. Sammen er man sterkere enn alene -- det er grunnprinsippet bak fagbevegelsen.

### Historisk bakgrunn
Fagforeningene vokste frem på slutten av 1800-tallet, da industrialiseringen skapte en stor arbeiderklasse med dårlige lønns- og arbeidsforhold. Arbeiderne innså at de måtte stå sammen for å få gjennomslag.

Viktige milepæler:
- **1899:** Landsorganisasjonen (LO) ble stiftet som en sammenslutning av norske fagforeninger
- **1900:** Norsk Arbeidsgiverforening (nå NHO) ble stiftet som motvekt
- **1935:** Hovedavtalen mellom LO og NHO ble inngått -- den kalles «arbeidslivets grunnlov» og la grunnlaget for det samarbeidet som preger norsk arbeidsliv i dag

### De største arbeidstakerorganisasjonene
- **LO (Landsorganisasjonen):** Den største, med over 970 000 medlemmer. Organiserer arbeidere i mange bransjer.
- **Unio:** Den største hovedorganisasjonen for arbeidstakere med universitets- og høgskoleutdanning (lærere, sykepleiere, politi).
- **YS (Yrkesorganisasjonenes Sentralforbund):** En partipolitisk uavhengig sammenslutning.
- **Akademikerne:** Organiserer arbeidstakere med lang høyere utdanning (leger, advokater, ingeniører).

### Hva gjør fagforeningene?
- **Forhandler** lønn og arbeidsvilkår med arbeidsgiverne
- Gir **juridisk hjelp** til medlemmer som har problemer på jobben
- Jobber for bedre **arbeidsmiljø** og sikkerhet
- Driver **politisk påvirkning** for bedre lover og regler
- Tilbyr **forsikringer** og andre goder til medlemmene
- Representerer arbeidstakerne i **trepartssamarbeidet** med stat og arbeidsgivere

### Organisasjonsgrad
I Norge er omtrent **50 %** av arbeidstakerne medlem av en fagforening. Dette er høyt i internasjonal sammenheng, men lavere enn i Sverige og Danmark (rundt 65-70 %). I USA er bare 10 % organisert.`,
    },

    // ========== OPPGAVE 1: FLERVALG ==========
    {
      id: 'samfunnsfag-10-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-1',
        number: '7.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en fagforening?',
        options: [
          {
            id: 'a',
            text: 'En statlig organisasjon som bestemmer lønningene i Norge',
            isCorrect: false,
            feedback: 'Feil. Fagforeninger er ikke statlige -- de er arbeidstakernes egne organisasjoner.',
          },
          {
            id: 'b',
            text: 'En organisasjon der arbeidstakere samler seg for å ivareta sine interesser overfor arbeidsgiverne',
            isCorrect: true,
            feedback: 'Riktig! En fagforening er arbeidstakernes egen organisasjon som forhandler lønn og arbeidsvilkår med arbeidsgiverne.',
          },
          {
            id: 'c',
            text: 'Et politisk parti for arbeidere',
            isCorrect: false,
            feedback: 'Feil. Fagforeninger er ikke politiske partier, selv om de kan ha politisk innflytelse. LO har historisk hatt nære bånd til Arbeiderpartiet, men de er separate organisasjoner.',
          },
          {
            id: 'd',
            text: 'En bedrift som ansetter arbeidere',
            isCorrect: false,
            feedback: 'Feil. Fagforeninger er ikke bedrifter -- de er organisasjoner for arbeidstakere.',
          },
        ],
        solution: 'En fagforening er en organisasjon der arbeidstakere samler seg for å forhandle lønn og arbeidsvilkår med arbeidsgiverne.',
      },
    },

    // ========== OPPGAVE 2: FAGFORENINGER ==========
    {
      id: 'samfunnsfag-10-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-2',
        number: '7.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fagforeningene spiller en viktig rolle i den norske modellen.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre oppgaver som fagforeningene har.',
            solution: 'Forhandle lønn og arbeidsvilkår med arbeidsgiverne, gi juridisk hjelp til medlemmer, jobbe for bedre arbeidsmiljø, drive politisk påvirkning, tilby forsikringer og goder, representere arbeidstakerne i trepartssamarbeidet.',
          },
          {
            label: 'b',
            task: 'Hva betyr uttrykket «Sammen er man sterkere enn alene» i sammenheng med fagforeninger?',
            solution: 'En enkelt arbeidstaker har lite forhandlingsmakt overfor arbeidsgiveren. Men når tusenvis av arbeidstakere står sammen i en fagforening, har de mye sterkere forhandlingsposisjon. De kan true med streik og har ressurser til juridisk hjelp og forhandlinger som enkeltpersoner ikke har.',
          },
          {
            label: 'c',
            task: 'Omtrent halvparten av norske arbeidstakere er organisert i en fagforening. Hva tror du kan skje med den norske modellen dersom denne andelen synker kraftig?',
            solution: 'Hvis færre organiserer seg, svekkes fagforeningenes forhandlingsmakt. Det kan føre til dårligere lønns- og arbeidsvilkår, større ulikhet, mindre innflytelse for arbeidstakerne og en svekkelse av trepartssamarbeidet. Den norske modellen er avhengig av sterke organisasjoner på begge sider.',
          },
        ],
        hints: ['Tenk på maktbalansen mellom arbeidstakere og arbeidsgivere.'],
        solution: 'Fagforeningene er en bærebjelke i den norske modellen. De forhandler lønn, gir juridisk hjelp og representerer arbeidstakerne i samarbeidet med arbeidsgivere og stat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: LØNNSFORHANDLINGER ==========
    {
      id: 'samfunnsfag-10-7-def-2',
      type: 'definition',
      title: 'Lønnsforhandlinger og tariffavtaler',
      content: `**Lønnsforhandlinger** er prosessen der fagforeninger og arbeidsgiverorganisasjoner forhandler om lønn, arbeidstid og andre arbeidsvilkår for en bestemt periode (vanligvis to år).

**Sentrale begreper:**

**Tariffavtale:** En skriftlig avtale mellom en fagforening og en arbeidsgiverorganisasjon om lønn og arbeidsvilkår. Den gjelder for alle arbeidstakere som er omfattet av avtalen.

**Frontfagsmodellen:** I Norge forhandler den **konkurranseutsatte industrien** (frontfaget) først. Resultatet setter en norm for resten av arbeidslivet. Dette sikrer at lønnsveksten ikke blir så høy at norsk industri taper konkurransekraft mot utlandet.

**Riksmekleren:** Hvis partene ikke blir enige, kan **Riksmekleren** kalles inn for å mekle. Riksmekleren er en nøytral person oppnevnt av staten.

**Streik:** Hvis forhandlinger og mekling ikke fører frem, kan fagforeningen iverksette **streik** -- arbeidstakerne legger ned arbeidet for å presse frem en bedre avtale. Streik er arbeidstakernes sterkeste virkemiddel.

**Lockout:** Arbeidsgiverens motstykke til streik -- arbeidsgiveren stenger arbeidstakerne ute fra arbeidsplassen.

**Tvungen lønnsnemnd:** I helt spesielle tilfeller kan regjeringen gripe inn og tvinge partene til å akseptere en løsning. Dette skjer bare når en streik truer liv og helse (for eksempel i helsesektoren).

Hele dette systemet kalles **trepartssamarbeidet** fordi det involverer tre parter: arbeidstakerne (fagforeninger), arbeidsgiverne (arbeidsgiverorganisasjoner) og staten (regjeringen/Riksmekleren).`,
    },

    // ========== EKSEMPEL: LØNNSOPPGJØR ==========
    {
      id: 'samfunnsfag-10-7-example-1',
      type: 'example',
      title: 'Eksempel: Slik fungerer et lønnsoppgjør',
      problem: 'Hvert år forhandler fagforeninger og arbeidsgivere om nye lønnsavtaler. Hvordan foregår dette i praksis?',
      solution: `**Steg 1: Forberedelse (januar-februar)**
Fagforeningene og arbeidsgiverorganisasjonene forbereder seg. De samler krav fra medlemmene, analyserer økonomien og setter mål for forhandlingene. Det tekniske beregningsutvalget (TBU) legger frem tall for prisstigning, lønnsutvikling og bedriftenes økonomi.

**Steg 2: Frontfaget forhandler først (mars-april)**
Fellesforbundet (LO) og Norsk Industri (NHO) forhandler først. De representerer den konkurranseutsatte industrien. Resultatet de oppnår setter normen for resten av arbeidslivet.

**Steg 3: Andre bransjer følger etter**
Etter at frontfaget er ferdig, forhandler andre bransjer -- offentlig sektor (stat og kommune), helse, utdanning, transport osv. De bruker frontfagets resultat som rettesnor.

**Steg 4: Enighet eller konflikt?**
Hvis partene blir enige, signerer de en ny tariffavtale. Hvis de ikke blir enige, kalles Riksmekleren inn. Meklingen kan pågå i dager eller uker.

**Steg 5: Streik (siste utvei)**
Hvis meklingen heller ikke fører frem, kan det bli streik. Streik rammer samfunnet og legger press på begge parter til å finne en løsning. De fleste lønnsoppgjør løses uten streik.

**Eksempel fra virkeligheten:**
I 2024 gikk lærere og sykepleiere til streik for høyere lønn. De argumenterte for at de hadde sakket etter industrien i lønnsutviklingen, og at det var vanskelig å rekruttere kvalifiserte folk til disse yrkene. Streiken ble avsluttet med tvungen lønnsnemnd fordi den rammet barn og pasienter.`,
    },

    // ========== OPPGAVE 3: LØNNSOPPGJØR ==========
    {
      id: 'samfunnsfag-10-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-3',
        number: '7.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «frontfagsmodellen»?',
        options: [
          {
            id: 'a',
            text: 'En modell der regjeringen bestemmer alle lønninger i Norge',
            isCorrect: false,
            feedback: 'Feil. I Norge bestemmer ikke staten lønningene -- de forhandles mellom fagforeninger og arbeidsgivere.',
          },
          {
            id: 'b',
            text: 'En modell der den konkurranseutsatte industrien forhandler først og setter normen for resten',
            isCorrect: true,
            feedback: 'Riktig! Frontfagsmodellen betyr at industrien som konkurrerer internasjonalt forhandler først, og resultatet brukes som rettesnor for andre bransjer.',
          },
          {
            id: 'c',
            text: 'En modell der de som tjener mest forhandler først',
            isCorrect: false,
            feedback: 'Feil. Det er den konkurranseutsatte industrien som forhandler først, uavhengig av lønnsnivå.',
          },
          {
            id: 'd',
            text: 'En modell som bare brukes i offentlig sektor',
            isCorrect: false,
            feedback: 'Feil. Frontfagsmodellen handler om at privat, konkurranseutsatt industri forhandler først.',
          },
        ],
        solution: 'Frontfagsmodellen betyr at den konkurranseutsatte industrien forhandler lønn først, og resultatet setter normen for resten av arbeidslivet.',
      },
    },

    // ========== OPPGAVE 4: STREIK ==========
    {
      id: 'samfunnsfag-10-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-4',
        number: '7.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Streik er arbeidstakernes sterkeste virkemiddel i lønnsforhandlinger.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva en streik er og hvorfor den er et effektivt pressmiddel.',
            solution: 'En streik betyr at arbeidstakerne legger ned arbeidet for å presse arbeidsgiveren til å gi bedre vilkår. Den er effektiv fordi bedrifter taper penger når de ikke har arbeidskraft, og fordi offentlige tjenester (skole, helse, transport) stopper opp, noe som legger press på politikere og arbeidsgivere.',
          },
          {
            label: 'b',
            task: 'Hva er «tvungen lønnsnemnd», og når brukes det?',
            solution: 'Tvungen lønnsnemnd er når regjeringen griper inn i en arbeidskonflikt og tvinger partene til å godta en løsning fra en lønnsnemnd. Det brukes bare i spesielle tilfeller, typisk når streiken truer liv og helse (for eksempel i helsesektoren) eller vitale samfunnsinteresser.',
          },
          {
            label: 'c',
            task: 'Drøft om tvungen lønnsnemnd er et godt eller dårlig virkemiddel. Presenter argumenter fra begge sider.',
            solution: 'For: Beskytter sårbare grupper (pasienter, barn), forhindrer at konflikter eskalerer, sikrer viktige tjenester. Mot: Svekker streikeretten, gir regjeringen for mye makt, fjerner insentivet for arbeidsgivere til å forhandle (de vet at staten vil gripe inn), kan gi dårligere resultat for arbeidstakerne.',
          },
        ],
        hints: ['Tenk på balansen mellom arbeidstakernes rettigheter og samfunnets behov.'],
        solution: 'Streik er et fundamentalt demokratisk virkemiddel, men tvungen lønnsnemnd kan være nødvendig når streiken truer liv og helse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: VELFERDSSTATEN ==========
    {
      id: 'samfunnsfag-10-7-def-3',
      type: 'definition',
      title: 'Velferdsstaten',
      content: `**Velferdsstaten** er et system der staten tar ansvar for å sikre innbyggernes grunnleggende velferd gjennom offentlige tjenester og ytelser. Norge regnes som en av verdens mest utviklede velferdsstater.

**Velferdsstatens viktigste tjenester og ytelser:**

**Utdanning:**
- Gratis grunnskole og videregående skole
- Subsidiert høyere utdanning (lån og stipend gjennom Lånekassen)

**Helse:**
- Offentlig helsevesen med egenandelstak
- Fastlegeordning
- Sykepenger (du får lønn når du er syk)

**Familie:**
- Foreldrepermisjon (totalt 49 uker med full lønn eller 59 uker med 80 %)
- Barnetrygd
- Subsidierte barnehageplasser med makspris

**Arbeidsliv:**
- Arbeidsledighetstrygd (dagpenger) hvis du mister jobben
- Arbeidsavklaringspenger hvis du er syk over lengre tid
- Uføretrygd hvis du ikke kan jobbe

**Alderdom:**
- Alderspensjon (du får inntekt når du slutter å jobbe)
- Offentlig eldreomsorg (hjemmehjelp, sykehjem)

**Hvordan finansieres velferdsstaten?**
Velferdsstaten finansieres hovedsakelig gjennom **skatter og avgifter**. Nordmenn betaler relativt høye skatter sammenlignet med mange andre land, men får til gjengjeld et omfattende sikkerhetsnett.

I tillegg har Norge inntekter fra **olje og gass** som investeres i **Oljefondet** (Statens pensjonsfond utland), verdens største statlige investeringsfond. Avkastningen fra fondet brukes til å dekke en del av statsbudsjettet.`,
    },

    // ========== EKSEMPEL: VELFERDSSTAT I PRAKSIS ==========
    {
      id: 'samfunnsfag-10-7-example-2',
      type: 'example',
      title: 'Eksempel: Velferdsstaten i hverdagen',
      problem: 'La oss følge familien Hansen gjennom et år for å se hvordan velferdsstaten påvirker deres hverdag.',
      solution: `**Familien Hansen:** To foreldre og to barn (8 og 15 år).

**Januar:** Mamma blir syk og er borte fra jobb i tre uker. Hun får **sykepenger** -- full lønn fra arbeidsgiveren de første 16 dagene, deretter fra NAV.

**Mars:** Sønnen på 15 trenger tannregulering. **Tannhelse for barn og unge under 18** er gratis gjennom den offentlige tannhelsetjenesten.

**Mai:** Familien har nådd **egenandelstaket** for helsetjenester. Resten av året er legebesøk og medisiner gratis.

**August:** Datteren på 8 begynner i tredje klasse. **Grunnskolen er gratis** -- ingen skolepenger, og lærebøkene betales av kommunen.

**September:** Sønnen på 15 begynner i 10. klasse. Han får **gratis skolegang** og planlegger å søke videregående til neste år, som også er gratis.

**Oktober:** Pappa mister jobben. Han melder seg hos NAV og får **dagpenger** (62,4 % av tidligere lønn) mens han søker ny jobb.

**November:** Familien mottar **barnetrygd** for begge barna -- en fast månedlig utbetaling fra staten.

**Hva koster dette?**
Alt dette finansieres gjennom skattene familien betaler. Mamma og pappa betaler rundt 35-40 % av inntekten i skatt. Til gjengjeld har de et sikkerhetsnett som fanger dem opp når livet ikke går som planlagt.

**Sammenligning:**
I USA ville familien måttet betale for helseforsikring, tannlege, og mange utdanningstjenester selv. En tre ukers sykdomsperiode uten sykepenger kunne vært økonomisk katastrofalt.`,
    },

    // ========== OPPGAVE 5: VELFERDSSTAT ==========
    {
      id: 'samfunnsfag-10-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-5',
        number: '7.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velferdsstaten gir mange goder, men koster også mye.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn fire viktige tjenester eller ytelser som den norske velferdsstaten gir innbyggerne.',
            solution: 'Gratis skole, offentlig helsevesen med sykepenger, foreldrepermisjon, barnetrygd, arbeidsledighetstrygd, alderspensjon, tannhelse for barn, subsidiert barnehage.',
          },
          {
            label: 'b',
            task: 'Forklar hvordan velferdsstaten finansieres.',
            solution: 'Hovedsakelig gjennom skatter og avgifter som innbyggerne betaler. I tillegg har Norge inntekter fra olje- og gassvirksomhet som investeres i Oljefondet. Avkastningen fra fondet brukes til å dekke deler av statsbudsjettet.',
          },
          {
            label: 'c',
            task: 'Noen mener at skattenivået i Norge er for høyt, mens andre mener det er nødvendig for å opprettholde velferdsstaten. Hva tenker du?',
            solution: 'For høye skatter: Reduserer folks disponible inntekt, kan hindre entreprenørskap, folk bør selv få bestemme over pengene sine. For nødvendige skatter: Sikrer et samfunn med lav ulikhet, like muligheter, sikkerhetsnett for alle, bedre helse og utdanning. En god besvarelse presenterer begge sider og gir en begrunnet vurdering.',
          },
        ],
        hints: ['Tenk på hva du selv ville gitt opp dersom velferdsstaten ble svekket.'],
        solution: 'Velferdsstaten gir omfattende tjenester finansiert gjennom skatter. Det er ulike syn på om skattenivået er for høyt eller nødvendig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6: FLERVALG ==========
    {
      id: 'samfunnsfag-10-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-6',
        number: '7.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er Oljefondet (Statens pensjonsfond utland)?',
        options: [
          {
            id: 'a',
            text: 'Et fond som betaler pensjonen til alle nordmenn direkte',
            isCorrect: false,
            feedback: 'Feil. Oljefondet betaler ikke pensjon direkte -- det er et investeringsfond der avkastningen brukes over statsbudsjettet.',
          },
          {
            id: 'b',
            text: 'Et fond som eier alle oljeselskapene i Norge',
            isCorrect: false,
            feedback: 'Feil. Oljefondet investerer i aksjer, obligasjoner og eiendom over hele verden, ikke bare i norske oljeselskaper.',
          },
          {
            id: 'c',
            text: 'Verdens største statlige investeringsfond, der Norges oljeinntekter investeres for fremtidige generasjoner',
            isCorrect: true,
            feedback: 'Riktig! Oljefondet investerer Norges olje- og gassinntekter i aksjer, obligasjoner og eiendom globalt, og avkastningen brukes til å finansiere deler av statsbudsjettet.',
          },
          {
            id: 'd',
            text: 'Et fond som bare brukes i krisesituasjoner',
            isCorrect: false,
            feedback: 'Feil. Avkastningen fra Oljefondet brukes hvert år over statsbudsjettet, ikke bare i kriser.',
          },
        ],
        solution: 'Oljefondet er verdens største statlige investeringsfond. Norges olje- og gassinntekter investeres globalt, og avkastningen brukes over statsbudsjettet.',
      },
    },

    // ========== DEFINISJON: ARBEIDSRETT ==========
    {
      id: 'samfunnsfag-10-7-def-4',
      type: 'definition',
      title: 'Rettigheter og plikter i arbeidslivet',
      content: `Norske arbeidstakere har omfattende rettigheter som er lovfestet i **arbeidsmiljøloven** og i tariffavtaler. Disse rettighetene er et resultat av over hundre år med kamp og forhandlinger.

**Viktige arbeidstakerrettigheter:**

- **Regulert arbeidstid:** Vanlig arbeidstid er 37,5 timer per uke. Overtid skal kompenseres.
- **Ferie:** Alle har rett til minst 25 virkedager (5 uker) ferie per år, med feriepenger.
- **Sykepenger:** Du har rett til full lønn i inntil ett år hvis du blir syk.
- **Foreldrepermisjon:** Foreldre har rett til permisjon med lønn ved barnefødsler.
- **Vern mot diskriminering:** Du kan ikke diskrimineres på grunn av kjønn, alder, etnisitet, religion, funksjonsnedsettelse eller seksuell orientering.
- **Vern mot oppsigelse:** Du kan bare sies opp av saklige grunner, og du har rett til å forsvare deg.
- **Arbeidsmiljø:** Arbeidsgiver plikter å sørge for et trygt og forsvarlig arbeidsmiljø.
- **Verneombud:** Alle arbeidsplasser med mer enn 10 ansatte skal ha et verneombud som ivaretar arbeidstakernes helse og sikkerhet.

**Arbeidstakernes plikter:**
- Utføre arbeidet samvittighetsfullt
- Følge arbeidsgiverens instrukser (innenfor loven)
- Overholde arbeidstiden
- Melde fra om farer og problemer på arbeidsplassen
- Bidra til et godt arbeidsmiljø

Rettighetene og pliktene utgjør en balanse mellom arbeidstakernes behov for trygghet og arbeidsgivernes behov for å drive virksomheten effektivt.`,
    },

    // ========== TEKST: UTFORDRINGER ==========
    {
      id: 'samfunnsfag-10-7-utfordringer',
      type: 'text',
      content: `## Utfordringer i arbeidslivet i dag og i fremtiden

Den norske modellen har fungert godt, men den står overfor flere utfordringer:

### Teknologi og automatisering
Roboter, kunstig intelligens og digitalisering endrer arbeidslivet raskt. Mange tradisjonelle jobber forsvinner, mens nye oppstår. Kassaarbeideren erstattes av selvbetjeningskasser, fabrikkarbeideren av roboter, og mange kontoroppgaver kan gjøres av datamaskin.

Spørsmålet er: Vil det skapes nok nye jobber til å erstatte dem som forsvinner? Og vil de nye jobbene kreve utdanning som alle har tilgang til?

### Ulikhet
Selv om Norge har relativt lav ulikhet sammenlignet med mange land, har forskjellene vokst. De rikeste eier en stadig større del av formuen, og det er blitt vanskeligere for unge å komme inn på boligmarkedet. Noen forskere advarer om at økende ulikhet truer den norske modellens grunnlag -- tillit.

### Arbeidslivskriminalitet
I noen bransjer (spesielt bygg, renhold og restaurant) finnes det useriøse arbeidsgivere som bryter lovene: De betaler for lav lønn, har farlige arbeidsforhold og utnytter sårbare arbeidstakere -- ofte arbeidsinnvandrere som ikke kjenner sine rettigheter.

### Utenforskap
Omtrent 600 000 nordmenn i arbeidsfør alder står utenfor arbeidslivet. Noen er syke, andre mangler utdanning eller erfaring, og noen faller mellom stolene i systemet. Spesielt er unge uten fullført videregående opplæring sårbare.

### Bærekraft og grønn omstilling
Norge er avhengig av olje- og gassindustrien, men verden beveger seg mot fornybar energi. Omstillingen til et grønnere næringsliv krever nye kompetanser og nye arbeidsplasser. Spørsmålet er hvordan vi sikrer at overgangen skjer uten at det går utover arbeidsplasser og velstand.

### Psykisk helse på arbeidsplassen
Arbeidsrelatert stress, utbrenthet og psykiske plager har økt. I en verden med konstant tilgjengelighet og høye forventninger, er det en utfordring å ivareta arbeidstakernes psykiske helse.`,
    },

    // ========== OPPGAVE 7: UTFORDRINGER ==========
    {
      id: 'samfunnsfag-10-7-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-7',
        number: '7.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Teknologi og automatisering endrer arbeidslivet.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi tre eksempler på jobber som kan bli erstattet av teknologi.',
            solution: 'Kassaarbeid (selvbetjening), fabrikkarbeid (roboter), sjåfører (selvkjørende biler), regnskapsførere (AI), tolker (maskinoversettelse), lagerarbeidere (automatiserte lagre).',
          },
          {
            label: 'b',
            task: 'Gi tre eksempler på jobber som trolig ikke kan erstattes av teknologi, og forklar hvorfor.',
            solution: 'Sykepleiere (krever empati og menneskelig kontakt), lærere (krever tilpasning og menneskelig relasjon), psykologer (krever dyp menneskelig forståelse), kunstnere (krever kreativitet og følelser), håndverkere med spesialiserte oppgaver.',
          },
          {
            label: 'c',
            task: 'Hva bør samfunnet gjøre for å hjelpe arbeidstakere som mister jobben på grunn av teknologiske endringer?',
            solution: 'Tilby omskolering og etter- og videreutdanning, sikre at utdanningssystemet tilpasses nye behov, styrke sikkerhetsnettet (dagpenger, arbeidsavklaringspenger), investere i nye næringer som skaper arbeidsplasser, vurdere arbeidstidsreduksjon.',
          },
        ],
        hints: ['Tenk på hvilke egenskaper som gjør mennesker unike sammenlignet med maskiner.'],
        solution: 'Teknologisk endring krever omstilling. Samfunnet må legge til rette for omskolering og nye muligheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 8: FLERVALG ==========
    {
      id: 'samfunnsfag-10-7-ex-8',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-8',
        number: '7.8',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «trepartssamarbeidet» i den norske modellen?',
        options: [
          {
            id: 'a',
            text: 'Samarbeidet mellom Stortinget, regjeringen og domstolene',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver er maktfordelingsprinsippet. Trepartssamarbeidet handler om arbeidslivet.',
          },
          {
            id: 'b',
            text: 'Samarbeidet mellom kommune, fylkeskommune og stat',
            isCorrect: false,
            feedback: 'Feil. Trepartssamarbeidet handler om forholdet mellom aktørene i arbeidslivet, ikke forvaltningsnivåene.',
          },
          {
            id: 'c',
            text: 'Samarbeidet mellom arbeidstakerne (fagforeninger), arbeidsgiverne (arbeidsgiverorganisasjoner) og staten',
            isCorrect: true,
            feedback: 'Riktig! Trepartssamarbeidet er samspillet mellom fagforeninger, arbeidsgiverorganisasjoner og staten -- bærebjelken i den norske modellen.',
          },
          {
            id: 'd',
            text: 'Samarbeidet mellom Norge, Sverige og Danmark',
            isCorrect: false,
            feedback: 'Feil. Nordisk samarbeid er noe annet. Trepartssamarbeidet handler om aktørene i arbeidslivet.',
          },
        ],
        solution: 'Trepartssamarbeidet er samarbeidet mellom fagforeninger, arbeidsgiverorganisasjoner og staten, og er en bærebjelke i den norske modellen.',
      },
    },

    // ========== EKSEMPEL: INTERNASJONAL SAMMENLIGNING ==========
    {
      id: 'samfunnsfag-10-7-example-3',
      type: 'example',
      title: 'Eksempel: Arbeidslivet i Norge vs. andre land',
      problem: 'Hvordan skiller det norske arbeidslivet seg fra andre land? La oss sammenligne med USA og Bangladesh.',
      solution: `**Norge:**
- Regulert arbeidstid: 37,5 timer/uke
- 5 ukers betalt ferie
- Full sykepenger i inntil ett år
- 49 uker foreldrepermisjon med full lønn
- Minstelønn finnes ikke som lov, men tariffavtaler sikrer anstendig lønn
- Sterk lovfestet rettsbeskyttelse for arbeidstakere

**USA:**
- Ingen lovfestet grense for arbeidstid (vanligvis 40 timer)
- Ingen lovfestet betalt ferie (arbeidsgiver bestemmer)
- Ingen lovfestet sykepenger (varierer fra arbeidsgiver til arbeidsgiver)
- Ingen lovfestet betalt foreldrepermisjon på nasjonalt nivå
- Føderal minstelønn: 7,25 dollar/time (mange stater har høyere)
- Arbeidsgiver kan si opp ansatte uten grunn i mange stater («at-will employment»)

**Bangladesh:**
- Tekstilindustrien er landets viktigste eksportnæring
- Minstelønn for tekstilarbeidere: ca. 95 dollar per måned (2023)
- Lange arbeidsdager, ofte 10-14 timer
- Svake sikkerhetsstandarder (Rana Plaza-ulykken i 2013 tok 1134 liv)
- Barnearbeid forekommer i uformell sektor
- Fagforeninger er ofte undertrykt

**Hva kan vi lære?**
Forskjellene viser at rettigheter i arbeidslivet ikke kommer av seg selv. De er et resultat av politiske valg, sterke fagforeninger og et fungerende samarbeid mellom partene. Den norske modellen er ikke naturlov -- den er bygget opp gjennom generasjoners kamp og forhandlinger.`,
    },

    // ========== OPPGAVE 9: SAMMENLIGNING ==========
    {
      id: 'samfunnsfag-10-7-ex-9',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-9',
        number: '7.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Arbeidslivet ser svært forskjellig ut i ulike land.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre viktige forskjeller mellom arbeidslivet i Norge og USA.',
            solution: 'Betalt ferie (5 uker vs. ingen lovfestet), sykepenger (1 år vs. ingen lovfestet), foreldrepermisjon (49 uker vs. ingen lovfestet), oppsigelsesvern (sterkt vs. svakt), fagforeningsmedlemskap (50% vs. 10%).',
          },
          {
            label: 'b',
            task: 'Hvorfor tror du den norske modellen har ført til mindre ulikhet enn for eksempel det amerikanske systemet?',
            solution: 'Sterke fagforeninger presser opp lønningene i bunnen, høye skatter finansierer velferdstjenester som er like for alle, gratis utdanning og helsevesen gir like muligheter, trepartssamarbeidet sikrer at godene fordeles jevnere, progressiv beskatning omfordeler fra rik til fattig.',
          },
        ],
        hints: ['Tenk på hvilke mekanismer som skaper utjevning i Norge.'],
        solution: 'Den norske modellen med sterke fagforeninger, høye skatter og en omfattende velferdsstat bidrar til mindre ulikhet enn mange andre systemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NOTAT: TENK OVER ==========
    {
      id: 'samfunnsfag-10-7-note-1',
      type: 'note',
      title: 'Tenk over dette',
      content: `Når du om noen år begynner å jobbe, vil du nyte godt av rettigheter som folk har kjempet for gjennom over hundre år. Ferie, sykepenger, regulert arbeidstid, trygge arbeidsforhold -- alt dette ble vunnet gjennom fagforeningskamp, forhandlinger og politiske beslutninger.

Men disse rettighetene er ikke garantert for alltid. De krever at arbeidstakere fortsetter å organisere seg, at trepartssamarbeidet vedlikeholdes, og at politikerne prioriterer et rettferdig arbeidsliv.

Hva slags arbeidsliv vil du ha? Og hva er du villig til å gjøre for å oppnå det?`,
    },

    // ========== OPPGAVE 10: REFLEKSJON ==========
    {
      id: 'samfunnsfag-10-7-ex-10',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-10',
        number: '7.10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ditt fremtidige arbeidsliv.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva slags jobb drømmer du om? Hvilke rettigheter vil du ha som arbeidstaker i denne jobben?',
            solution: 'Svaret bør navngi et yrke og koble det til konkrete rettigheter fra teksten (arbeidstid, ferie, sykepenger, arbeidsmiljø osv.).',
          },
          {
            label: 'b',
            task: 'Ville du meldt deg inn i en fagforening? Begrunn svaret ditt.',
            solution: 'En god besvarelse vurderer fordeler (forhandlingsmakt, juridisk hjelp, innflytelse, forsikringer) og eventuelle ulemper (kontingent, ikke alle ser behovet) og gir en begrunnet vurdering.',
          },
        ],
        hints: ['Tenk på hva fagforeningen kan gjøre for deg som arbeidstaker.'],
        solution: 'En bevisst arbeidstaker kjenner sine rettigheter og vurderer om organisering er viktig for å ivareta dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfunnsfag-10-7-oppsummering',
      type: 'text',
      content: `## Oppsummering: Økonomi og arbeidsliv

**Den norske modellen** er et unikt samspill mellom arbeidstakere, arbeidsgivere og staten som har gjort Norge til et av verdens beste land å jobbe og leve i.

**Nøkkelbegreper:**
- **Den norske modellen:** Trepartssamarbeid mellom arbeidstakere, arbeidsgivere og stat
- **Fagforening:** Arbeidstakernes organisasjon som forhandler lønn og arbeidsvilkår
- **Arbeidsgiverorganisasjon:** Arbeidsgivernes organisasjon (f.eks. NHO)
- **Tariffavtale:** Skriftlig avtale om lønn og arbeidsvilkår
- **Frontfagsmodellen:** Industrien forhandler først og setter normen
- **Streik:** Arbeidstakerne legger ned arbeidet som pressmiddel
- **Riksmekleren:** Nøytral mekler i arbeidskonflikter
- **Trepartssamarbeidet:** Samarbeid mellom fagforeninger, arbeidsgivere og stat
- **Velferdsstaten:** Staten sikrer innbyggernes grunnleggende velferd
- **Oljefondet:** Norges investeringsfond for oljeinntekter
- **Arbeidsmiljøloven:** Lovfester arbeidstakernes rettigheter
- **Grønn omstilling:** Overgangen fra fossil til fornybar energi i næringslivet`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'samfunnsfag-10-7-ex-11',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-11',
        number: '7.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Den norske modellen fungerte i det 20. århundre, men er den klar for det 21. århundre?» Drøft dette med tanke på teknologiske endringer, globalisering og klimaomstilling.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar de viktigste utfordringene den norske modellen står overfor i dag.',
            solution: 'Teknologi og automatisering truer tradisjonelle jobber, globalisering øker konkurransen, klimaomstilling krever nye næringer, synkende organisasjonsgrad svekker fagforeningene, arbeidslivskriminalitet undergraver modellen, økende ulikhet truer tilliten.',
          },
          {
            label: 'b',
            task: 'Hva er modellens styrker som gjør den tilpasningsdyktig?',
            solution: 'Samarbeid mellom partene gjør det mulig å finne løsninger, høy tillit gir vilje til kompromiss, sterk velferdsstat gir sikkerhetsnett ved omstilling, utdanningssystemet kan tilpasses nye behov, modellen har overlevd mange endringer før (industrialisering, globalisering, finanskriser).',
          },
          {
            label: 'c',
            task: 'Hva mener du må gjøres for at modellen skal fungere i fremtiden?',
            solution: 'En god besvarelse foreslår konkrete tiltak som livslang læring, styrking av fagforeningene, tilpasning av velferdsstaten til nye arbeidsformer, investering i grønn teknologi, bekjemping av arbeidslivskriminalitet og innsats mot utenforskap.',
          },
        ],
        hints: ['Bruk eksempler fra teksten.', 'Tenk på hva som gjør modellen sterk og hva som kan svekke den.'],
        solution: 'Den norske modellen har vist seg tilpasningsdyktig, men krever aktiv vedlikehold og tilpasning til nye utfordringer som teknologi, klima og globalisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'samfunnsfag-10-7-ex-12',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-12',
        number: '7.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøftingsoppgave: «Høye skatter er prisen vi betaler for et godt samfunn.» Er du enig eller uenig? Begrunn svaret ditt.',
        hints: [
          'Sammenlign Norge med land som har lavere skatter (som USA) -- hva får innbyggerne i bytte?',
          'Tenk på hvordan skatter bidrar til likhet, utdanning, helse og sikkerhet.',
          'Vurder også argumenter mot høye skatter.',
        ],
        solution: 'En god drøfting anerkjenner at høye skatter finansierer velferdsstaten og bidrar til likhet, men drøfter også mulige ulemper som svekket arbeidsinsentiv og mindre individuell frihet. Sammenligninger med andre land styrker drøftingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'samfunnsfag-10-7-ex-13',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-13',
        number: '7.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Undersøkelsesoppgave: Intervju en person som er yrkesaktiv (forelder, nabo eller annen voksen) om arbeidslivet.',
        subTasks: [
          {
            label: 'a',
            task: 'Spør om: Hva jobber personen med? Er personen medlem av en fagforening? Hvorfor/hvorfor ikke? Hva opplever personen som positivt og negativt med arbeidslivet i Norge?',
            solution: 'Svaret bør inneholde konkret informasjon fra intervjuet og vise at eleven har stilt relevante spørsmål.',
          },
          {
            label: 'b',
            task: 'Knytt svarene du fikk til det du har lært om den norske modellen, fagforeninger og arbeidstakerrettigheter.',
            solution: 'Svaret bør bruke fagbegreper fra kapittelet for å analysere svarene fra intervjuet. For eksempel: Hvis personen er fagforeningsmedlem, koble det til trepartssamarbeidet. Hvis personen nevner rettigheter, koble det til arbeidsmiljøloven.',
          },
        ],
        hints: ['Forbered spørsmålene dine på forhånd.', 'Ta notater under intervjuet.'],
        solution: 'En god besvarelse viser at eleven har gjennomført et reelt intervju og kan koble svarene til fagkunnskap fra kapittelet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i del 2
// ============================================================================

export const SAMFUNNSFAG_10_DEL2_CHAPTERS = [
  CHAPTER_SAMFUNNSFAG_10_5,
  CHAPTER_SAMFUNNSFAG_10_6,
  CHAPTER_SAMFUNNSFAG_10_7,
];