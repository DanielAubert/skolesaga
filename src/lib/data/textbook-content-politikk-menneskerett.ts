/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Politikk og menneskerettigheter (VG2/VG3 valgfag)
 * Folger LK20 lareplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Hva er politikk?
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_1: TextbookChapter = {
  id: 'politikk-menneskerett-1-1',
  courseId: 'politikk-menneskerett',
  chapterNumber: '1',
  title: 'Hva er politikk?',
  description: 'Forsta hva politikk er og hvordan politiske beslutninger pavirker samfunnet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for hva politikk er og hvordan politiske prosesser fungerer',
    'reflektere over hvordan makt fordeles og utoves i samfunnet',
  ],
  content: [
    {
      id: 'politikk-1-1-intro',
      type: 'text',
      content: `## Politikk - kampen om verdier og ressurser

Politikk handler om hvordan et samfunn organiserer seg og tar beslutninger som pavirker fellesskapet. Det dreier seg om fordeling av goder og byrder, og om hvilke verdier som skal ligge til grunn for samfunnet.

**Politikk kan defineres som:**
- Fordeling av verdier med gyldighet for et samfunn
- Kampen om makt og innflytelse
- Prosessen der kollektive beslutninger fattes
- Aktiviteter knyttet til styring av samfunnet

Politikk finnes pa alle nivaer - fra lokale saker i kommunen til store internasjonale sporsmil. Det handler om alt fra skolepolitikk og helsevesen til utenrikspolitikk og krig og fred.`,
    },
    {
      id: 'politikk-1-1-def-1',
      type: 'definition',
      title: 'Sentrale politiske begreper',
      content: `**Makt:**
Evnen til a fa gjennomslag for sin vilje, ogsa mot andres motstand. Makt kan vare formell (lovfestet) eller uformell (pavirkning).

**Legitimitet:**
At makten er akseptert og anerkjent av befolkningen. Demokratisk legitimitet kommer fra folkets samtykke.

**Autoritet:**
Makt som er anerkjent som rettmessig. Skiller seg fra rå makt ved at folk adlyder frivillig.

**Suverenitet:**
Den overste myndighet i et omrade. Statlig suverenitet betyr at staten har full kontroll over eget territorium.

**Politisk system:**
Helheten av institusjoner, regler og prosesser som styrer et samfunn.

**Interessekonflikt:**
Nar ulike grupper eller personer har motstridende interesser som ma loses gjennom politiske prosesser.`,
    },
    {
      id: 'politikk-1-1-text-2',
      type: 'text',
      content: `## Maktens tre ansikter

Statsviteren Steven Lukes har beskrevet tre dimensjoner ved makt:

**1. Den synlige makten (forste ansikt):**
Direkte innflytelse pa beslutninger. Den som vinner en avstemning har makt. Dette er den mest apne formen for makt.

**2. Dagsordenmakten (andre ansikt):**
Makt til a bestemme hvilke saker som kommer pa dagsordenen. Noen sporsmal diskuteres aldri fordi mektige aktorer holder dem borte fra debatten.

**3. Den usynlige makten (tredje ansikt):**
Makt over tanker og oppfatninger. Ideologisk pavirkning som former hva folk tenker og onsker. Media, utdanning og kultur former vare verdier.

Alle tre dimensjonene er viktige for a forsta hvordan politisk makt fungerer i praksis.`,
    },
    {
      id: 'politikk-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Maktens ansikter i skolepolitikken',
      problem: `Hvordan kan vi se de tre maktdimensjonene i debatten om karakterer i skolen?`,
      solution: `**Forste ansikt - synlig makt:**
Stortinget vedtar lover om karakterer. Politikere stemmer for eller mot karakterfri skole.

**Andre ansikt - dagsordenmakt:**
Noen temaer kommer aldri opp i debatten. For eksempel: Hvorfor har vi karakterer i det hele tatt? Hvem tjener pa karaktersystemet?

**Tredje ansikt - ideologisk makt:**
De fleste tar for gitt at karakterer er nodvendig. Tanken om at elever trenger ytre motivasjon er dypt forankret i kulturen var.

**Analyse:**
For a forsta skolepolitikken fullt ut, ma vi se pa alle tre nivaer - ikke bare de synlige beslutningene, men ogsa hvilke alternativer som aldri diskuteres og hvilke grunnleggende antakelser vi tar for gitt.`,
    },
    {
      id: 'politikk-1-1-text-3',
      type: 'text',
      content: `## Politiske aktorer

Mange ulike aktorer deltar i politiske prosesser:

**Formelle aktorer:**
- **Regjering og storting:** Vedtar lover og politikk
- **Kommuner og fylker:** Lokalt selvstyre
- **Domstoler:** Tolker lover og beskytter rettigheter
- **Byrakratiet:** Forbereder og gjennomforer politikk

**Uformelle aktorer:**
- **Politiske partier:** Organiserer politisk deltakelse
- **Interesseorganisasjoner:** Fremmer bestemte gruppers interesser
- **Media:** Informerer og setter dagsorden
- **Sivilsamfunnet:** Frivillige organisasjoner og bevegelser
- **Naeringslivet:** Okonomiske interesser og lobbyvirksomhet
- **Enkeltpersoner:** Velgere, aktivister, meningsbaerere`,
    },
    {
      id: 'politikk-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva politikk er med egne ord.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi en kort definisjon av politikk.',
            solution: 'Politikk er prosessen der et samfunn tar kollektive beslutninger om fordeling av verdier og ressurser.',
          },
          {
            label: 'b',
            task: 'Gi tre eksempler pa politiske sporsmil.',
            solution: 'Eksempler: Skattenivet, helsepolitikk, klimatiltak, innvandringspolitikk, forsvarspolitikk.',
          },
          {
            label: 'c',
            task: 'Hvorfor er politikk nodvendig i et samfunn?',
            solution: 'Fordi ressurser er knappe og folk har ulike interesser og verdier. Vi trenger mekanismer for a lose konflikter fredelig.',
          },
        ],
        solution: 'Politikk handler om kollektive beslutninger og fordeling av verdier i samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser en aktuell politisk sak ved hjelp av maktens tre ansikter.',
        hints: ['Velg en sak du kjenner til, som klimapolitikk eller skolepolitikk'],
        solution: 'Svaret bor identifisere synlige beslutninger, hvem som setter dagsorden, og hvilke grunnleggende antakelser som tas for gitt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom makt og autoritet?',
        solution: 'Makt er evnen til a fa sin vilje gjennom, mens autoritet er makt som er anerkjent som rettmessig. Autoritet forutsetter legitimitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter: Hvem har mest makt i Norge i dag?',
        hints: ['Tenk pa ulike typer makt og aktorer'],
        solution: 'Formelt har Stortinget mest makt. Men media, naeringslivet og interesseorganisasjoner har stor uformell makt. Svaret avhenger av hvordan man definerer makt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en interesseorganisasjon og beskriv hvordan den forsaker a pavirke politikken.',
        hints: ['Eksempler: LO, NHO, Naturvernforbundet, Redd Barna'],
        solution: 'Svaret bor beskrive organisasjonens mal, metoder (lobbyvirksomhet, mediearbeid, aksjoner) og resultater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Demokrati og styreformer
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_2: TextbookChapter = {
  id: 'politikk-menneskerett-1-2',
  courseId: 'politikk-menneskerett',
  chapterNumber: '2',
  title: 'Demokrati og styreformer',
  description: 'Utforsk ulike styreformer med sarlig vekt pa demokratiet og dets utfordringer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'sammenligne ulike styreformer og vurdere deres styrker og svakheter',
    'reflektere over demokratiets forutsetninger og utfordringer',
  ],
  content: [
    {
      id: 'politikk-1-2-intro',
      type: 'text',
      content: `## Styreformer gjennom historien

Gjennom historien har mennesker organisert sine samfunn pa mange ulike mater. Sporsmalet om hvem som skal styre har vart sentralt i all politisk tenkning.

**Aristoteles' klassiske inndeling:**
- **Monarki:** En person styrer (kan utarte til tyranni)
- **Aristokrati:** De beste styrer (kan utarte til oligarki)
- **Demokrati:** Folket styrer (kan utarte til pobelaristokrati)

I moderne tid skiller vi gjerne mellom demokratiske og ikke-demokratiske styreformer. Demokratiet har blitt den dominerende normen, men mange land styres fortsatt autoritart.`,
    },
    {
      id: 'politikk-1-2-def-1',
      type: 'definition',
      title: 'Styreformer',
      content: `**Demokrati:**
Folkestyre der makten utgir fra folket. Kjennetegn: frie valg, ytringsfrihet, rettssikkerhet, maktfordeling.

**Autoritart styre:**
Makten er konsentrert hos en liten gruppe. Begrenset politisk frihet, men ofte noe sivil frihet.

**Totalitart styre:**
Staten kontrollerer alle aspekter av samfunnet, inkludert privatlivet. Ideologi gjennomtrenger alt.

**Monarki:**
Statsoverhode arver makten. Kan vare absolutt (eneveldig) eller konstitusjonelt (symbolsk).

**Republikk:**
Statsoverhode velges. Kan vare demokratisk eller autoritart.

**Teokrati:**
Religiose ledere styrer basert pa religiose lover.

**Militardiktatur:**
Militaret har tatt makten, ofte gjennom statskupp.`,
    },
    {
      id: 'politikk-1-2-text-2',
      type: 'text',
      content: `## Demokratiets forutsetninger

For at et demokrati skal fungere, ma visse forutsetninger vare til stede:

**Institusjonelle forutsetninger:**
- Frie og rettferdige valg
- Ytringsfrihet og pressefrihet
- Organisasjonsfrihet
- Uavhengige domstoler
- Maktfordeling

**Kulturelle forutsetninger:**
- Politisk toleranse og respekt for uenighet
- Vilje til kompromiss
- Tillit mellom borgere og til institusjoner
- Aksept for spillereglene

**Sosiale forutsetninger:**
- Et visst utdanningsnivia
- Okonomisk sikkerhet for befolkningen
- Et aktivt sivilsamfunn
- Relativt lav ulikhet

Demokrati er ikke bare en styreform, men ogsa en kultur og et sett med verdier.`,
    },
    {
      id: 'politikk-1-2-def-2',
      type: 'definition',
      title: 'Demokratityper',
      content: `**Direkte demokrati:**
Borgerne stemmer selv over politiske saker. Brukes i folkeavstemninger og pa lokalt niva (f.eks. Sveits).

**Representativt demokrati:**
Borgerne velger representanter som fatter beslutninger pa deres vegne. Den vanligste formen i moderne stater.

**Deltakende demokrati:**
Vektlegger bred deltakelse utover valg, som horinger, folkemater og innbyggerinitiativ.

**Deliberativt demokrati:**
Vektlegger offentlig debatt og argumentasjon som grunnlag for beslutninger.

**Parlamentarisme:**
Regjeringen er avhengig av flertall i parlamentet. Brukes i Norge.

**Presidentsystem:**
President velges direkte og er uavhengig av parlamentet. Brukes i USA.

**Semipresidentsystem:**
Kombinasjon av parlamentarisme og presidentsystem. Brukes i Frankrike.`,
    },
    {
      id: 'politikk-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Demokratisk tilbakegang',
      problem: `Mange mener at demokratiet er under press i dag. Hvilke trusler star demokratiet overfor?`,
      solution: `**Ytre trusler:**
- Autoritare regimer som sprer propaganda
- Cyberangrep pa demokratiske prosesser
- Utenlandsk innblanding i valg

**Indre trusler:**
- Populistiske bevegelser som utfordrer etablerte institusjoner (populisme kan ogsa uttrykke legitim misnøye med eliter og politikk som ikke ivaretar vanlige folks interesser)
- Polarisering som gjor kompromiss vanskelig
- Spredning av feilinformasjon og konspirasjonsteorier
- Fallende tillit til politikere og media
- Okende okonomisk ulikhet
- Lav valgdeltakelse og politisk apati

**Strukturelle utfordringer:**
- Klimaendringene krever langsiktig handling som demokratier kan ha vanskeligheter med
- Globalisering gjor nasjonale demokratier mindre effektive
- Teknologigiganter har makt uten demokratisk kontroll

Freedom House rapporterer at demokratiet har gatt tilbake globalt i over 15 ar pa rad.`,
    },
    {
      id: 'politikk-1-2-text-3',
      type: 'text',
      content: `## Demokratiets styrker og svakheter

**Styrker ved demokratiet:**
- Fredelig maktskifte gjennom valg
- Beskyttelse av individuelle rettigheter
- Ansvarliggjoring av makthavere
- Bred legitimitetsbase
- Feilretting gjennom apne debatter
- Historisk sammenheng med okonomisk utvikling

**Kritikk av demokratiet:**
- Kan vare tregt og ineffektivt
- Risiko for flertallstyranni over minoriteter
- Velgere kan mangle kunnskap om komplekse saker
- Populisme kan undergrave institusjonene
- Kortsiktige hensyn kan vinne over langsiktige

**Winston Churchill sa:** "Demokrati er den verste styreformen, bortsett fra alle de andre som har vart provet."`,
    },
    {
      id: 'politikk-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign demokrati og autoritart styre.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner et demokrati?',
            solution: 'Frie valg, ytringsfrihet, rettssikkerhet, maktfordeling, beskyttelse av minoriteter.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner et autoritart styre?',
            solution: 'Begrenset politisk frihet, kontroll over media, undertrykkelse av opposisjon, makt konsentrert hos fa.',
          },
          {
            label: 'c',
            task: 'Hvorfor foretrekker de fleste demokrati?',
            solution: 'Beskytter rettigheter, gir innflytelse, fredelig maktskifte, ansvarliggjoring av ledere.',
          },
        ],
        solution: 'Demokrati gir frihet og innflytelse, mens autoritare systemer konsentrerer makten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom parlamentarisme og presidentsystem?',
        hints: ['Tenk pa forholdet mellom utovende og lovgivende makt'],
        solution: 'I parlamentarisme er regjeringen avhengig av parlamentets tillit. I presidentsystem velges presidenten direkte og er uavhengig av parlamentet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper ved direkte demokrati.',
        solution: 'Fordeler: Direkte innflytelse, okt engasjement. Ulemper: Kan vare tregt, velgere mangler ekspertise, risiko for flertallstyranni.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg et land som har opplevd demokratisk tilbakegang. Analyser hva som har skjedd.',
        hints: ['Eksempler: Ungarn, Polen, Tyrkia, Brasil'],
        solution: 'Svaret bor beskrive konkrete endringer i demokratiske institusjoner, arsaker og konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Droft: Er demokratiet den beste styreformen for a haandtere klimaendringene?',
        hints: ['Tenk pa bade styrker og svakheter ved demokratiet i denne sammenhengen. Husk at det finnes ulike syn pa klimapolitikk.'],
        solution: 'Argumenter for: Legitimitet, bred oppslutning, mulighet for debatt og korreksjon. Mot: Trege prosesser, kortsiktig tenkning, sterke interessegrupper. Merk at det er ulike syn pa hvor alvorlige klimaendringene er og hvilke tiltak som er nodvendige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Det norske politiske systemet
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_3: TextbookChapter = {
  id: 'politikk-menneskerett-1-3',
  courseId: 'politikk-menneskerett',
  chapterNumber: '3',
  title: 'Det norske politiske systemet',
  description: 'Forsta hvordan det norske demokratiet er organisert og fungerer.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjore rede for hovedtrekkene i det norske politiske systemet',
    'analysere samspillet mellom ulike politiske institusjoner',
  ],
  content: [
    {
      id: 'politikk-1-3-intro',
      type: 'text',
      content: `## Det norske demokratiet

Norge er et konstitusjonelt monarki med parlamentarisk styresett. Grunnloven fra 1814 er en av verdens eldste fungerende grunnlover.

**Grunnleggende prinsipper:**
- Folkesuvereniteten: All makt utgir fra folket
- Maktfordeling: Lovgivende, utovende og dommende makt
- Parlamentarisme: Regjeringen ma ha Stortingets tillit
- Konstitusjonelt monarki: Kongen har kun symbolsk rolle

Det norske systemet kombinerer tradisjon med moderne demokratiske verdier. Grunnloven har blitt endret mange ganger for a tilpasses nye tider.`,
    },
    {
      id: 'politikk-1-3-def-1',
      type: 'definition',
      title: 'Statsmaktene',
      content: `**Stortinget - lovgivende makt:**
- 169 representanter valgt for 4 ar
- Vedtar lover og statsbudsjett
- Kontrollerer regjeringen
- Kan ikke opplose seg selv

**Regjeringen - utovende makt:**
- Ledes av statsministeren
- Forbereder og gjennomforer politikk
- Utnevnes av Kongen pa grunnlag av Stortingets sammensetning
- Ma ha Stortingets tillit (parlamentarisme)

**Domstolene - dommende makt:**
- Hoyesterett overst, deretter lagmannsretter og tingretter
- Uavhengige av politisk makt
- Pruver lovers grunnlovsmessighet
- Beskytter individuelle rettigheter

**Kongen:**
- Statsoverhode med symbolsk rolle
- Formelt utnevner regjering og underskriver lover
- Representerer nasjonen
- Ingen reell politisk makt`,
    },
    {
      id: 'politikk-1-3-text-2',
      type: 'text',
      content: `## Stortingets funksjoner

Stortinget har flere viktige funksjoner i det norske demokratiet:

**Lovgivning:**
- Vedtar og endrer lover
- Behandler lovforslag fra regjeringen
- Kan ogsa fremme egne lovforslag

**Bevilgning:**
- Vedtar statsbudsjettet
- Bestemmer statens inntekter og utgifter
- "Ingen skatt kan palegges uten etter lov"

**Kontroll:**
- Sporretimer og interpellasjoner
- Kontroll- og konstitusjonskomiteen
- Riksrett (brukes sjelden)
- Kan vedta mistillit mot regjeringen

**Valg og utnevnelser:**
- Velger stortingspresident
- Utnevner Sivilombudet
- Utnevner Riksrevisjonen

Stortinget arbeider gjennom fagkomiteer som forbereder saker for plenumsbehandling.`,
    },
    {
      id: 'politikk-1-3-def-2',
      type: 'definition',
      title: 'Viktige begreper i norsk politikk',
      content: `**Parlamentarisme:**
Regjeringen ma ha Stortingets tillit. Vedtas mistillit, ma regjeringen ga av.

**Negativt flertall:**
Regjeringen trenger ikke aktivt flertall, bare at flertallet ikke stemmer imot.

**Mindretallsregjering:**
Regjering som ikke har flertall bak seg i Stortinget. Vanlig i Norge.

**Koalisjonsregjering:**
Regjering bestaende av flere partier.

**Kabinettsporsmal:**
Regjeringen knytter sin stilling til en bestemt sak.

**Konstitusjonell sedvane:**
Regler som ikke star i Grunnloven, men folges i praksis.

**Forlik:**
Avtale mellom regjeringen og opposisjonspartier om en sak.`,
    },
    {
      id: 'politikk-1-3-example-1',
      type: 'example',
      title: 'Eksempel: En lovs vei gjennom systemet',
      problem: `Folg en lov fra ide til vedtak.`,
      solution: `**1. Initiativ:**
Regjeringen, Stortinget eller interessegrupper kan ta initiativ til en ny lov.

**2. Utredning:**
Et utvalg (NOU) eller departementet utreder saken.

**3. Horing:**
Forslaget sendes pa horing til berarte parter.

**4. Proposisjon:**
Regjeringen legger fram lovforslag for Stortinget (Prop. L).

**5. Komitebehandling:**
Relevant fagkomite behandler forslaget og avgir innstilling.

**6. Debatt og vedtak:**
Stortinget debatterer og stemmer over forslaget.

**7. Sanksjon:**
Kongen sanksjonerer (godkjenner) loven.

**8. Kunngjoring:**
Loven kunngjores i Norsk Lovtidend og trer i kraft.

Prosessen sikrer grundig behandling og demokratisk forankring.`,
    },
    {
      id: 'politikk-1-3-text-3',
      type: 'text',
      content: `## Lokalt selvstyre

Norge har tre forvaltningsnivaer: stat, fylke og kommune.

**Kommunene:**
- 356 kommuner (2024)
- Styres av kommunestyre valgt for 4 ar
- Ordforer leder kommunestyret
- Ansvar for: skole, barnehage, eldreomsorg, arealplanlegging, vann/avlop

**Fylkeskommunene:**
- 15 fylker (inkludert Oslo som er bade kommune og fylke)
- Styres av fylkesting valgt for 4 ar
- Ansvar for: videregaende opplaring, kollektivtrafikk, tannhelse, regional utvikling

**Statsforvalteren:**
- Statens representant i fylket
- Forer tilsyn med kommunene
- Klageinstans for kommunale vedtak

Lokalt selvstyre er grunnlovfestet og sikrer at beslutninger tas nart folk.`,
    },
    {
      id: 'politikk-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar maktfordelingsprinsippet i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke tre statsmakter har vi?',
            solution: 'Lovgivende (Stortinget), utovende (regjeringen) og dommende (domstolene).',
          },
          {
            label: 'b',
            task: 'Hvorfor er maktfordeling viktig?',
            solution: 'For a hindre maktmisbruk og sikre at ingen far for mye makt.',
          },
          {
            label: 'c',
            task: 'Hvordan kontrollerer maktene hverandre?',
            solution: 'Stortinget kontrollerer regjeringen, domstolene kan prove lovers grunnlovsmessighet.',
          },
        ],
        solution: 'Maktfordeling sikrer at makten ikke konsentreres ett sted.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr det at Norge har parlamentarisme?',
        solution: 'Regjeringen ma ha Stortingets tillit for a sitte. Mister den tilliten (mistillitsvotum), ma den ga av.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv veien fra ide til lov.',
        hints: ['Tenk pa alle stegene: utredning, horing, komite, vedtak'],
        solution: 'Utredning, horing, proposisjon, komitebehandling, stortingsdebatt, vedtak, sanksjon, kunngjoring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign oppgavene til kommune og fylkeskommune.',
        solution: 'Kommunen: skole, barnehage, eldreomsorg. Fylkeskommunen: videregaende, kollektivtrafikk, regional utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Droft fordeler og ulemper ved mindretallsregjering.',
        hints: ['Tenk pa bade effektivitet og demokratisk bredde'],
        solution: 'Fordeler: Ma forhandle, bredere forankring. Ulemper: Kan vare ustabilt, vanskelig a gjennomfore politikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvorfor er lokalt selvstyre viktig for demokratiet?',
        solution: 'Beslutninger tas nart folk, oker deltakelse, tilpasning til lokale forhold, sprer makt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Politiske partier og ideologier
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_4: TextbookChapter = {
  id: 'politikk-menneskerett-1-4',
  courseId: 'politikk-menneskerett',
  chapterNumber: '4',
  title: 'Politiske partier og ideologier',
  description: 'Forsta de politiske ideologiene og partienes rolle i demokratiet.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjore rede for sentrale politiske ideologier og deres historiske bakgrunn',
    'analysere norske partiers politikk i lys av ideologiske tradisjoner',
  ],
  content: [
    {
      id: 'politikk-1-4-intro',
      type: 'text',
      content: `## Ideologienes betydning

En politisk ideologi er et sammenhengende sett av ideer om hvordan samfunnet bor organiseres. Ideologier gir svar pa grunnleggende sporsmil:

- Hva er forholdet mellom individ og fellesskap?
- Hvordan bor okonomien organiseres?
- Hva er statens rolle?
- Hva er et godt samfunn?

De store ideologiene vokste fram pa 1700- og 1800-tallet som svar pa opplysningstidens ideer og den industrielle revolusjon. De fortsetter a prege politikken i dag, selv om de har utviklet seg over tid.`,
    },
    {
      id: 'politikk-1-4-def-1',
      type: 'definition',
      title: 'Hovedideologiene',
      content: `**Liberalisme:**
- Individets frihet og rettigheter
- Markedsokonomi og fri konkurranse
- Begrenset statsmakt
- Historisk motstand mot adelsprivilegier
- Varianter: klassisk liberalisme, sosialliberalisme

**Konservatisme:**
- Tradisjon og stabilitet
- Skepsis til raske endringer
- Respekt for etablerte institusjoner
- Vekt pa familie, religion, nasjon
- Varianter: verdikonservatisme, liberalkonservatisme

**Sosialisme:**
- Okonomisk likhet
- Kollektivt eierskap eller sterk regulering
- Omfordeling fra rike til fattige
- Arbeiderbevegelsens ideologi
- Varianter: sosialdemokrati, demokratisk sosialisme, kommunisme`,
    },
    {
      id: 'politikk-1-4-def-2',
      type: 'definition',
      title: 'Andre viktige ideologier',
      content: `**Sosialdemokrati:**
Kombinerer markedsokonomi med velferdsstat. Reformer innenfor demokratiet. Dominerende i Skandinavia.

**Kristendemokrati:**
Basert pa kristen etikk og menneskesyn. Vekt pa familie og subsidiaritet. Sentrum-hoyre.

**Gronnpolitikk:**
Miljovern og barekraft som hovedfokus. Ofte kombinert med radikalt demokrati og sosial rettferdighet.

**Nasjonalisme:**
Vektlegger nasjonal identitet og suverenitet. Finnes i mange varianter: Liberal nasjonalisme fremmer demokrati og selvbestemmelse (som i frigjøringsbevegelser). Konservativ nasjonalisme vektlegger tradisjon og kulturarv. Etnisk nasjonalisme kan vare ekskluderende. Nasjonalisme har bade bidratt til frigjoring og demokrati, og til undertrykkelse og konflikter.

**Feminisme:**
Kamp for likestilling mellom kjonnene. Pavirker andre ideologier.

**Populisme:**
Hevder a representere "folket" mot "eliten". Finnes pa bade hoyre- og venstresiden. Populisme kan uttrykke legitim folkelig misnøye med etablerte eliter, men kan ogsa forenkle komplekse sporsmil og undergrave politiske institusjoner. Bade kritikk og forsvar av populisme har relevante argumenter.`,
    },
    {
      id: 'politikk-1-4-text-2',
      type: 'text',
      content: `## Politiske partier i Norge

**Hoyre-venstre-aksen:**
Denne aksen handler om okonomisk politikk - statlig styring vs. markedsfrihet.

**Fra venstre til hoyre:**
- **Rodt:** Sosialistisk, mot kapitalisme
- **SV:** Sosialistisk venstreparti, gront og feministisk
- **Arbeiderpartiet:** Sosialdemokratisk, historisk storsteparti
- **Senterpartiet:** Agrar, distriktspolitikk, EU-motstand
- **MDG:** Miljofokus, vanskelig a plassere
- **Venstre:** Sosialliberalt, individuell frihet
- **KrF:** Kristendemokratisk, familiepolitikk
- **Hoyre:** Konservativt, markedsliberalt
- **FrP:** Hoyrelpopulistisk, innvandringskritisk

De fleste partier har elementer fra flere ideologier.`,
    },
    {
      id: 'politikk-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Ideologier og skattepolitikk',
      problem: `Hvordan vil ulike ideologier argumentere i debatten om formuesskatten?`,
      solution: `**Liberal posisjon:**
"Formuesskatten hemmer investeringer og jobbskaping. Folk bor fa beholde det de har tjent. Skatten driver kapital ut av landet."

**Sosialdemokratisk posisjon:**
"De rikeste ma bidra mer til fellesskapet. Formuesskatten finansierer velferd og reduserer ulikhet. Det er rettferdig at de med mest betaler mest."

**Konservativ posisjon:**
"Vi bor vare forsiktige med a gjore store endringer. Formuesskatten har lang tradisjon, men ma veies mot naringslivets behov."

**Sosialistisk posisjon:**
"Formuesskatten er for lav. Store formuer bor beskattes hardere for a omfordele makt og ressurser i samfunnet."

Debatten viser hvordan ideologier gir ulike svar pa konkrete politiske sporsmil.`,
    },
    {
      id: 'politikk-1-4-text-3',
      type: 'text',
      content: `## Partienes rolle i demokratiet

Partiene fyller viktige funksjoner:

**Rekruttering:**
Tiltrekker og skolerer politikere. Skaper karriereveier inn i politikken.

**Interesse-aggregering:**
Samler ulike interesser til sammenhengende politikk. Gjor valg meningsfulle.

**Mobilisering:**
Engasjerer velgere og far dem til a stemme. Driver valgkamp.

**Styring:**
Danner regjeringer og gjennomforer politikk.

**Opposisjon:**
Kritiserer og kontrollerer de som styrer. Tilbyr alternativer.

**Utfordringer for partiene:**
- Synkende medlemstall
- Velgerne er mer flyktige
- Nye medier endrer kommunikasjonen
- Mindre ideologisk tydelighet
- Konkurranse fra aksjonsgrupper`,
    },
    {
      id: 'politikk-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign liberalisme og sosialisme.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen i synet pa individ og fellesskap?',
            solution: 'Liberalisme: individet forst. Sosialisme: fellesskapet forst.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen i synet pa staten?',
            solution: 'Liberalisme: begrenset stat. Sosialisme: aktiv stat som omfordeler.',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen i synet pa okonomi?',
            solution: 'Liberalisme: markedsokonomi. Sosialisme: kollektivt eierskap eller sterk regulering.',
          },
        ],
        solution: 'Liberalisme vektlegger individ og marked, sosialisme vektlegger fellesskap og likhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Plasser de norske partiene pa hoyre-venstre-aksen og forklar plasseringen.',
        hints: ['Tenk pa partienes syn pa skatt, velferd og statlig styring'],
        solution: 'Fra venstre: Rodt, SV, Ap, Sp, MDG, Venstre, KrF, Hoyre, FrP. Plasseringen baseres pa okonomisk politikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner populisme, og hvorfor er det vanskelig a plassere pa hoyre-venstre-aksen?',
        solution: 'Populisme hevder a representere folket mot eliten. Den kan kombineres med bade hoyre- og venstreideologier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg et parti og analyser dets ideologiske grunnlag.',
        hints: ['Se pa partiprogram og historikk'],
        solution: 'Svaret bor identifisere hvilke ideologier partiet bygger pa og hvordan dette kommer til uttrykk i konkret politikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Droft: Er ideologiene fortsatt relevante i moderne politikk?',
        hints: ['Tenk pa pragmatisme vs. prinsipper, og nye skillelinjer'],
        solution: 'Argumenter for: Ideologier strukturerer debatten og gir sammenheng. Mot: Pragmatisme, nye skillelinjer (miljø, innvandring) utfordrer tradisjonelle ideologier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Menneskerettighetenes historie
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_5: TextbookChapter = {
  id: 'politikk-menneskerett-1-5',
  courseId: 'politikk-menneskerett',
  chapterNumber: '5',
  title: 'Menneskerettighetenes historie',
  description: 'Forsta den historiske utviklingen av menneskerettighetene.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for menneskerettighetenes historiske utvikling',
    'analysere sammenhengen mellom historiske hendelser og rettighetsutviklingen',
  ],
  content: [
    {
      id: 'politikk-1-5-intro',
      type: 'text',
      content: `## Rotter til menneskerettighetene

Ideen om at alle mennesker har visse grunnleggende rettigheter har en lang historie. Selv om begrepet "menneskerettigheter" er moderne, finnes det eldre tradisjoner som vektlegger menneskeverd.

**Historiske inspirasjonskilder:**
- Religiose tradisjoner om menneskeverd
- Gresk filosofi om naturrett
- Romersk rett og ideen om universelle lover
- Middelalderens tanker om begrensninger pa kongemakten

**Magna Carta (1215):**
Engelske baroner tvang kong Johan til a akseptere begrensninger pa kongemakten. Prinsippet om at selv kongen ma folge loven ble etablert.`,
    },
    {
      id: 'politikk-1-5-text-2',
      type: 'text',
      content: `## Opplysningstiden og de forste erklaringene

Pa 1600- og 1700-tallet utviklet filosofene ideer som la grunnlaget for moderne menneskerettigheter.

**Naturretten:**
John Locke (1632-1704) hevdet at alle mennesker har naturlige rettigheter til liv, frihet og eiendom. Disse rettighetene kommer for staten og kan ikke tas fra oss.

**Den amerikanske uavhengighetserklaringen (1776):**
"Vi holder disse sannheter for a vare selvinnlysende: at alle mennesker er skapt like, at de av sin Skaper er utstyrt med visse uavhendelige rettigheter, blant disse liv, frihet og streven etter lykke."

**Den franske menneskerettighetserklaringen (1789):**
Vedtatt under revolusjonen. Proklamerte frihet, likhet og brorskap. Alle mennesker er fodt frie og like i rettigheter.

**Begrensninger:**
Disse erklaringene gjaldt i praksis ofte bare hvite menn. Kvinner, slaver og fattige var lenge ekskludert.`,
    },
    {
      id: 'politikk-1-5-def-1',
      type: 'definition',
      title: 'Rettighetshistoriske begreper',
      content: `**Naturrett:**
Ideen om at det finnes universelle moralske lover som gjelder alle mennesker, uavhengig av menneskeskapte lover.

**Positivisme:**
Synet pa at rettigheter kun eksisterer nar de er vedtatt i lov.

**Generasjoner av rettigheter:**
- Forste generasjon: Sivile og politiske rettigheter (frihet fra staten)
- Andre generasjon: Okonomiske og sosiale rettigheter (krav til staten)
- Tredje generasjon: Kollektive rettigheter (fred, utvikling, miljo)

**Universalisme:**
Menneskerettighetene gjelder for alle mennesker overalt.

**Kulturrelativisme:**
Synspunktet at rettigheter ma tolkes i lys av kulturell kontekst.`,
    },
    {
      id: 'politikk-1-5-text-3',
      type: 'text',
      content: `## FN og det moderne menneskerettighetssystemet

Etter andre verdenskrig og Holocaust innsa verdenssamfunnet behovet for et internasjonalt system for a beskytte menneskerettigheter.

**FNs grunnleggelse (1945):**
FN-pakten slo fast at et av FNs formil er a fremme menneskerettigheter.

**Verdenserklaringen om menneskerettigheter (1948):**
Vedtatt av FNs generalforsamling 10. desember 1948. 30 artikler som dekker sivile, politiske, okonomiske, sosiale og kulturelle rettigheter.

**Viktige konvensjoner:**
- Konvensjon mot folkemord (1948)
- Flyktningkonvensjonen (1951)
- Konvensjonen mot rasediskriminering (1965)
- Konvensjonen om sivile og politiske rettigheter (1966)
- Konvensjonen om okonomiske, sosiale og kulturelle rettigheter (1966)
- Kvinnekonvensjonen (1979)
- Torturkonvensjonen (1984)
- Barnekonvensjonen (1989)

Disse konvensjonene er juridisk bindende for land som ratifiserer dem.`,
    },
    {
      id: 'politikk-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Holocaust og menneskerettighetene',
      problem: `Hvordan pavirket Holocaust utviklingen av menneskerettighetene?`,
      solution: `**Direkte konsekvenser:**
- Verdenssamfunnet sa at stater kunne begå forferdelige overgrep mot egen befolkning
- Behovet for internasjonalt vern ble akutt
- FN og Verdenserklaringen ble vedtatt kort tid etter

**Nye prinsipper:**
- Individer har rettigheter overfor egen stat
- Det internasjonale samfunn har ansvar for a gripe inn
- Forbrytelser mot menneskeheten kan straffes internasjonalt
- "Aldri mer" ble et motto

**Institusjonelle konsekvenser:**
- Nurnbergprosessene etablerte internasjonal strafferett
- Folkemordkonvensjonen ble vedtatt
- Den europeiske menneskerettskonvensjonen ble skapt

Holocaust viste hva som kan skje nar menneskerettigheter ikke respekteres og skapte vilje til a bygge et sterkere rettsvern.`,
    },
    {
      id: 'politikk-1-5-text-4',
      type: 'text',
      content: `## Utvidelse og utfordringer

Siden 1948 har menneskerettighetene utviklet seg pa flere mater:

**Utvidelse:**
- Flere grupper har fatt eksplisitt vern (kvinner, barn, funksjonshemmede)
- Nye rettigheter har blitt anerkjent (miljo, urfolk)
- Flere land har sluttet seg til konvensjonene
- Regionale systemer er etablert (Europa, Amerika, Afrika)

**Utfordringer:**
- Mange land bryter menneskerettighetene systematisk
- Nye trusler: terrorisme, klimaendringer, ny teknologi
- Debatt om universalitet vs. kulturrelativisme
- Svake håndhevingsmekanismer
- Spenningen mellom nasjonale interesser og internasjonalt samarbeid (nasjonalisme kan ha bade positive og negative konsekvenser for menneskerettighetene)`,
    },
    {
      id: 'politikk-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv hovedtrekkene i menneskerettighetenes historiske utvikling.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke ideer la til grunn for menneskerettighetene?',
            solution: 'Naturrett, religiose tradisjoner om menneskeverd, opplysningstidens filosofi.',
          },
          {
            label: 'b',
            task: 'Hvilke dokumenter var viktige milepæler?',
            solution: 'Magna Carta (1215), amerikanske uavhengighetserklaringen (1776), franske menneskerettighetserklaringen (1789), FNs verdenserklaering (1948).',
          },
          {
            label: 'c',
            task: 'Hvorfor ble det moderne menneskerettighetssystemet skapt etter 1945?',
            solution: 'Holocaust og andre verdenskrig viste behovet for internasjonalt vern mot staters overgrep.',
          },
        ],
        solution: 'Menneskerettighetene bygger pa lange tradisjoner, men fikk sin moderne form etter andre verdenskrig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom naturrett og positivisme i synet pa rettigheter?',
        solution: 'Naturrett: Rettigheter eksisterer uavhengig av lover, de er medfodte. Positivisme: Rettigheter eksisterer kun nar de er vedtatt i lov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar begrepet "generasjoner av rettigheter".',
        solution: 'Forste: sivile og politiske (frihet fra). Andre: okonomiske og sosiale (krav til). Tredje: kollektive (fred, miljo, utvikling).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Droft debatten mellom universalisme og kulturrelativisme.',
        hints: ['Tenk pa argumenter for og mot universelle rettigheter'],
        solution: 'Universalisme: Rettigheter gjelder alle, beskytter mot overgrep. Kulturrelativisme: Ma ta hensyn til ulike kulturer, universalisme kan vare vestlig imperialisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en FN-konvensjon og forklar dens innhold og betydning.',
        hints: ['F.eks. Barnekonvensjonen, Kvinnekonvensjonen eller Flyktningkonvensjonen'],
        solution: 'Svaret bor beskrive konvensjonens hovedinnhold, hvilke rettigheter den beskytter, og dens praktiske betydning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: FN og internasjonale organisasjoner
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_6: TextbookChapter = {
  id: 'politikk-menneskerett-1-6',
  courseId: 'politikk-menneskerett',
  chapterNumber: '6',
  title: 'FN og internasjonale organisasjoner',
  description: 'Forsta FNs rolle og internasjonalt samarbeid om menneskerettigheter.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjore rede for FNs struktur og rolle i menneskerettighetsarbeidet',
    'analysere styrker og svakheter ved internasjonalt samarbeid',
  ],
  content: [
    {
      id: 'politikk-1-6-intro',
      type: 'text',
      content: `## De forente nasjoner (FN)

FN ble grunnlagt i 1945 etter andre verdenskrig med mal om a forebygge nye kriger og fremme menneskerettigheter, okonomisk og sosial utvikling.

**FNs hovedformil (FN-pakten artikkel 1):**
1. Opprettholde internasjonal fred og sikkerhet
2. Utvikle vennskapelige forbindelser mellom nasjoner
3. Samarbeide om a lose internasjonale problemer
4. Vare et sentrum for samordning av nasjonenes innsats

I dag har FN 193 medlemsland - nesten alle verdens stater. FN er den viktigste arenaen for globalt samarbeid.`,
    },
    {
      id: 'politikk-1-6-def-1',
      type: 'definition',
      title: 'FNs hovedorganer',
      content: `**Generalforsamlingen:**
Alle medlemsland har en stemme. Vedtar resolusjoner og budsjett. Ikke bindende vedtak.

**Sikkerhetsradet:**
15 medlemmer, hvorav 5 faste (USA, Russland, Kina, Frankrike, Storbritannia) med vetorett. Kan vedta bindende resolusjoner og sanksjoner.

**Sekretiariatet:**
FNs administrasjon, ledet av generalsekreteren. Forbereder saker og gjennomforer vedtak.

**Den internasjonale domstolen (ICJ):**
Avgjor tvister mellom stater. Sitter i Haag.

**Det okonomiske og sosiale rad (ECOSOC):**
Koordinerer FNs arbeid med okonomi, sosiale sporsmil og menneskerettigheter.

**Menneskerettighetersradet:**
47 medlemmer valgt av Generalforsamlingen. Overvaket menneskerettighetssituasjonen i verden.`,
    },
    {
      id: 'politikk-1-6-text-2',
      type: 'text',
      content: `## FNs menneskerettighetsarbeid

FN har bygget et omfattende system for a fremme og beskytte menneskerettigheter:

**Normutvikling:**
- Verdenserklaringen (1948)
- Ni kjernekonvensjoner med tilleggsprotokoller
- Erklaringer og prinsipper

**Overvaking:**
- Traktatorganer (komiteer for hver konvensjon)
- UPR - Universal Periodic Review (jevnlig gjennomgang av alle land)
- Spesialrapportorer og arbeidsgrupper
- Menneskerettighetshoykommissariatet (OHCHR)

**Handhevelse:**
- Sikkerhetsradet kan vedta sanksjoner
- Den internasjonale straffedomstolen (ICC) straffer individer
- FNs fredsoperasjoner

**Begrensninger:**
- Statenes suverenitet begrenser inngripen
- Sikkerhetsradets veto blokkerer ofte handling
- FN har begrenset tvangsmakt
- Avhengig av medlemslandenes vilje`,
    },
    {
      id: 'politikk-1-6-def-2',
      type: 'definition',
      title: 'Andre viktige organisasjoner',
      content: `**Europaradet:**
46 europeiske land. Den europeiske menneskerettskonvensjon (EMK). Individer kan klage til Den europeiske menneskerettsdomstolen.

**EU:**
Menneskerettigheter i EUs charter. EU-domstolen. Krav til medlemsland. Sanksjoner mot brudd.

**Den afrikanske union (AU):**
Det afrikanske menneskerettighetscharter. Menneskerettsdomstol.

**Organisasjonen av amerikanske stater (OAS):**
Den amerikanske menneskerettskonvensjon. Menneskerettsdomstol.

**Den internasjonale straffedomstolen (ICC):**
Straffer folkemord, forbrytelser mot menneskeheten, krigsforbrytelser og aggresjonsforbrytelser.

**Amnesty International, Human Rights Watch:**
Frivillige organisasjoner som dokumenterer brudd og driver pavirkning.`,
    },
    {
      id: 'politikk-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Sikkerhetsradets rolle',
      problem: `Hvordan fungerer FNs sikkerhetsrad, og hva er problemene med vetoretten?`,
      solution: `**Sikkerhetsradets makt:**
- Kan vedta bindende resolusjoner
- Kan autorisere militaer maktbruk
- Kan innfore sanksjoner
- Oppretter fredsbevarende operasjoner

**Vetoretten:**
- De fem faste medlemmene kan blokkere alle vedtak
- En veto er nok til a stoppe en resolusjon
- Vetoretten stammer fra 1945 og reflekterer datidens maktforhold

**Problemer:**
- Viktige vedtak blokkeres av ett lands veto
- Syria-konflikten: Russland og Kina blokkerte tiltak
- Ukraina: Russland brukte veto
- Stormaktenes interesser gar foran menneskerettigheter
- Handlingslammelse i kriser

**Reformforslag:**
- Utvide radet
- Begrense vetoretten
- Nye faste medlemmer (India, Brasil, Afrika)
- Motstand fra de som har veto`,
    },
    {
      id: 'politikk-1-6-text-3',
      type: 'text',
      content: `## Norge og FN

Norge har vart et aktivt medlem av FN siden 1945.

**Norges rolle:**
- Medlem av Sikkerhetsradet flere perioder
- Stor bidragsyter til FNs budsjett og hjelpeprogrammer
- Aktiv i fredsbevarende operasjoner
- Fremmer menneskerettigheter og utviklingsmal

**Norske bidrag:**
- Trygve Lie var FNs forste generalsekretar (1946-1953)
- Gro Harlem Brundtland ledet arbeidet med barekraftig utvikling
- Norsk engasjement i fredsprosesser
- Store bistandsbudsjetter

**FN i norsk lov:**
- Menneskerettsloven gjor viktige konvensjoner til norsk lov
- Barnekonvensjonen har forrang
- EMK har forrang`,
    },
    {
      id: 'politikk-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv FNs hovedorganer og deres funksjoner.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gjor Generalforsamlingen?',
            solution: 'Alle land har stemme, vedtar resolusjoner og budsjett, ikke bindende.',
          },
          {
            label: 'b',
            task: 'Hva gjor Sikkerhetsradet?',
            solution: '15 medlemmer, 5 faste med veto, kan vedta bindende resolusjoner og sanksjoner.',
          },
          {
            label: 'c',
            task: 'Hva gjor Menneskerettighetersradet?',
            solution: '47 medlemmer, overvaket menneskerettighetssituasjonen, UPR, spesialrapportorer.',
          },
        ],
        solution: 'FN har mange organer med ulike funksjoner innen fred, utvikling og menneskerettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Droft fordeler og ulemper ved vetoretten i Sikkerhetsradet.',
        hints: ['Tenk pa bade effektivitet og stormaktenes interesser'],
        solution: 'Fordeler: Sikrer stormaktenes deltakelse, hindrer FN i a havne i krig med stormakter. Ulemper: Blokkerer nodvendige tiltak, setter stormakters interesser over menneskerettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign FN og Europaradet som menneskerettighetsorganer.',
        solution: 'FN: Globalt, mer politisk, svakere handhevelse. Europaradet: Regionalt, sterkere domstol (EMD), individer kan klage direkte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det vanskelig a handheve menneskerettigheter internasjonalt?',
        solution: 'Statens suverenitet, mangel pa tvangsmakt, stormakters veto, politiske hensyn, manglende vilje hos medlemsland.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en aktuell situasjon der FN har forsakt a gripe inn. Vurder FNs innsats.',
        hints: ['Eksempler: Syria, Myanmar, Ukraina, Sudan'],
        solution: 'Svaret bor beskrive situasjonen, hva FN har gjort, og vurdere om det var tilstrekkelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Menneskerettigheter i praksis
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_7: TextbookChapter = {
  id: 'politikk-menneskerett-1-7',
  courseId: 'politikk-menneskerett',
  chapterNumber: '7',
  title: 'Menneskerettigheter i praksis',
  description: 'Analyser hvordan menneskerettigheter fungerer og utfordres i virkeligheten.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analysere menneskerettighetsbrudd og rettighetsdilemmaer',
    'vurdere tiltak for a styrke menneskerettighetene',
  ],
  content: [
    {
      id: 'politikk-1-7-intro',
      type: 'text',
      content: `## Fra teori til praksis

Menneskerettighetene er nedfelt i flotte dokumenter, men virkeligheten er mer kompleks. Millioner av mennesker opplever daglig brudd pa sine rettigheter.

**Typiske menneskerettighetsbrudd:**
- Politisk undertrykkelse og fengsling av opposisjonelle
- Tortur og umenneskelig behandling
- Diskriminering basert pa kjonn, etnisitet, religion
- Begrensning av ytringsfrihet og pressefrihet
- Tvangsarbeid og menneskehandel
- Manglende tilgang til utdanning, helse, rent vann

Selv i demokratier oppstar dilemmaer der rettigheter ma veies mot hverandre eller mot andre hensyn.`,
    },
    {
      id: 'politikk-1-7-def-1',
      type: 'definition',
      title: 'Rettighetsdilemmaer',
      content: `**Absolutte vs. relative rettigheter:**
Noen rettigheter kan aldri fravikes (forbud mot tortur), andre kan begrenses (ytringsfrihet, bevegelsesfrihet).

**Positiv vs. negativ forpliktelse:**
Staten ma bade avstå fra overgrep (negativ) og aktivt beskytte og sikre rettigheter (positiv).

**Rettigheter i konflikt:**
Nar en rettighet star mot en annen, f.eks. ytringsfrihet vs. vern mot hatytringer.

**Individuell vs. kollektiv rettighet:**
Individets rettigheter vs. gruppers rettigheter (urfolk, minoriteter).

**Proporsjonalitetsprinsippet:**
Inngrep i rettigheter ma vare nodvendige og sta i rimelig forhold til malet.`,
    },
    {
      id: 'politikk-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Terrorbekjempelse og rettigheter',
      problem: `Hvordan har kampen mot terrorisme utfordret menneskerettighetene?`,
      solution: `**Tiltak som utfordrer rettigheter:**
- Overvaking av kommunikasjon (personvern)
- Utvidet politimyndighet (rettssikkerhet)
- Lengre varetekt uten tiltale (frihet)
- Innreiseforbud og utvisning (bevegelsesfrihet)
- I noen land: tortur og "forhorte forhorsmetoder"

**Argumenter for sterke tiltak:**
- Statens plikt til a beskytte borgernes liv
- Terrorisme er en reell trussel
- Noen begrensninger er nodvendige for sikkerhet

**Argumenter for a verne rettigheter:**
- Rettssikkerhet er demokratiets fundament
- Overgrep skaper mer radikalisering
- Gir staten for mye makt
- Historisk misbruk av unntakstilstand

**Balanse:**
Proporsjonalitetsprinsippet krever at tiltak er nodvendige og ikke gar lenger enn nodvendig. Domstolene ma prove om inngrep er forsvarlige.`,
    },
    {
      id: 'politikk-1-7-text-2',
      type: 'text',
      content: `## Sarlig sårbare grupper

Noen grupper er sarlig utsatt for menneskerettighetsbrudd:

**Kvinner:**
- Vold i nare relasjoner
- Diskriminering i arbeidslivet
- Manglende reproduktive rettigheter
- Tvangsekteskap og kjonnslemlestelse

**Barn:**
- Barnearbeid og utnyttelse
- Tvangsrekruttering til vaepnede grupper
- Mangel pa utdanning og helsehjelp
- Overgrep og omsorgssvikt

**Flyktninger og migranter:**
- Farlig flukt og menneskehandel
- Internering og darlige mottaksforhold
- Usikker rettsstilling
- Diskriminering i vertsland

**Urfolk:**
- Tap av land og ressurser
- Truet kultur og sprak
- Diskriminering og marginalisering
- Manglende selvbestemmelse

**LHBT+-personer:**
- Kriminalisering i mange land
- Diskriminering og trakassering
- Vold og forfolgelse`,
    },
    {
      id: 'politikk-1-7-text-3',
      type: 'text',
      content: `## Menneskerettigheter i Norge

Norge regnes som et av verdens beste land pa menneskerettigheter, men ogsa her finnes utfordringer:

**Styrker:**
- Sterkt rettsvern i Grunnloven og lovverket
- Uavhengige domstoler
- Aktivt sivilsamfunn og frie medier
- Ombudsordninger (Sivilombudet, Barneombudet, LDO)

**Utfordringer:**
- Behandling av asylsokere og barn i utlendingssaker
- Samiske rettigheter og reindrift vs. utbygging
- Diskriminering i arbeidslivet
- Psykisk helsevern og tvangsbruk
- Personvern i digital tid
- Soningsforhold i fengsler

**Norge i EMD:**
Norge har blitt domt i Den europeiske menneskerettsdomstolen flere ganger, blant annet i barnevernssaker.`,
    },
    {
      id: 'politikk-1-7-example-2',
      type: 'example',
      title: 'Eksempel: Ytringsfrihet vs. hatytringer',
      problem: `Hvor gar grensen mellom ytringsfrihet og hatytringer?`,
      solution: `**Ytringsfriheten:**
- Grunnloven § 100 beskytter ytringsfrihet
- Nodvendig for demokratiet
- Inkluderer ogsa kontroversielle meninger
- Sarlig sterkt vern for politisk debatt

**Hatytringer:**
- Straffeloven § 185 forbyr hatefulle ytringer
- Rettet mot bestemte grupper (etnisitet, religion, seksuell orientering m.m.)
- Truende, hatefulle eller diskriminerende ytringer
- Forutsetter kvalifisert krenking

**Grensen:**
- Kritikk av religion er tillatt, a truer religionse er ikke
- Politisk debatt har vidt spillerom
- Kontekst og spredning er relevant
- Oppfordring til vold er alltid forbudt

**Praktisk vurdering:**
Domstolene veier ytringsfriheten mot vernet av utsatte grupper i hver enkelt sak. Grensene er ikke alltid klare.`,
    },
    {
      id: 'politikk-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom absolutte og relative rettigheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en absolutt rettighet? Gi eksempel.',
            solution: 'En rettighet som aldri kan fravikes. Eksempel: forbud mot tortur.',
          },
          {
            label: 'b',
            task: 'Hva er en relativ rettighet? Gi eksempel.',
            solution: 'En rettighet som kan begrenses under visse vilkar. Eksempel: ytringsfrihet.',
          },
          {
            label: 'c',
            task: 'Hvorfor skilles det mellom disse?',
            solution: 'Noen rettigheter er sa grunnleggende at de aldri kan fravikes, mens andre ma kunne balanseres mot andre hensyn.',
          },
        ],
        solution: 'Absolutte rettigheter kan aldri fravikes, relative kan begrenses under strenge vilkar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg en sarlig sarbar gruppe og beskriv menneskerettighetsutfordringer de star overfor.',
        hints: ['Kvinner, barn, flyktninger, urfolk, LHBT+'],
        solution: 'Svaret bor identifisere konkrete rettighetsutfordringer og mulige losninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter hvor grensen bor ga mellom ytringsfrihet og hatytringer.',
        hints: ['Tenk pa bade ytringsfrihetens verdi og skadevirkninger av hatytringer'],
        solution: 'Svaret bor vise forstaelse for avveiningen og kunne argumentere for ulike synspunkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser en norsk menneskerettighetssak som har vart i media.',
        hints: ['Barnevern, asylsaker, samiske rettigheter, ytringsfrihetssaker'],
        solution: 'Svaret bor beskrive saken, identifisere hvilke rettigheter som var involvert, og vurdere utfallet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Droft: Kan sikkerhetshensynretfferdiggjore begrensninger i menneskerettighetene?',
        hints: ['Tenk pa terrorbekjempelse, pandemier, krig'],
        solution: 'Svaret bor diskutere proporsjonalitet og nodvendighet, og vise at det er grenser for hva som kan rettferdiggjores.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Internasjonal politikk
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_8: TextbookChapter = {
  id: 'politikk-menneskerett-1-8',
  courseId: 'politikk-menneskerett',
  chapterNumber: '8',
  title: 'Internasjonal politikk',
  description: 'Forsta hvordan internasjonal politikk fungerer og pavirker menneskerettigheter.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere sentrale teorier og aktorer i internasjonal politikk',
    'vurdere forholdet mellom makt, interesser og menneskerettigheter',
  ],
  content: [
    {
      id: 'politikk-1-8-intro',
      type: 'text',
      content: `## Det internasjonale systemet

Internasjonal politikk handler om forholdet mellom stater og andre aktorer pa den globale arenaen. Til forskjell fra innenrikspolitikk finnes det ingen verdensregjering som kan handheve regler.

**Kjennetegn ved det internasjonale systemet:**
- Stater er de viktigste aktorene
- Ingen overordnet myndighet (anarki)
- Makt er ujevnt fordelt
- Internasjonale lover og normer eksisterer, men har svak handhevelse
- Samarbeid og konflikt eksisterer side om side

Dette systemet skaper utfordringer for menneskerettighetene, som avhenger av internasjonalt samarbeid.`,
    },
    {
      id: 'politikk-1-8-def-1',
      type: 'definition',
      title: 'Teorier om internasjonal politikk',
      content: `**Realisme:**
- Stater er rasjonelle aktorer som soker makt og sikkerhet
- Internasjonale relasjoner er en kamp om makt
- Moral og rettigheter er underordnet nasjonale interesser
- Maktbalanse er nokkelen til stabilitet

**Liberalisme:**
- Samarbeid er mulig og lonner seg
- Internasjonale institusjoner kan fremme fred
- Demokratier kiger sjelden mot hverandre
- Handel og gjensidig avhengighet reduserer konflikt

**Konstruktivisme:**
- Ideer, normer og identitet former internasjonal politikk
- Menneskerettighetsnormer har reell innvirkning
- Sosiale strukturer kan endres
- Aktorer og strukturer pavirker hverandre

**Marxisme/kritisk teori:**
- Fokus pa okonomisk makt og ulikhet
- Globale klasseforskjeller
- Kritikk av vestlig dominans`,
    },
    {
      id: 'politikk-1-8-text-2',
      type: 'text',
      content: `## Aktorer i internasjonal politikk

**Stater:**
Fortsatt de viktigste aktorene med suverenitet over eget territorium. Stor variasjon i makt og innflytelse.

**Internasjonale organisasjoner:**
- FN og tilhorende organer
- Regionale organisasjoner (EU, AU, NATO)
- Finansinstitusjoner (Verdensbanken, IMF)

**Ikke-statlige aktorer:**
- Multinasjonale selskaper
- NGOer (Amnesty, Rode Kors)
- Religiose bevegelser
- Terrororganisasjoner og kriminelle nettverk

**Stormakter:**
Noen stater har sarlig stor innflytelse. USA har vart dominerende siden 1991, men Kina vokser fram. Russland, EU og regionale makter spiller ogsa viktige roller.

**Makt i internasjonal politikk:**
- Hard makt: Militaer og okonomi
- Myk makt: Kultur, verdier, attraktivitet
- Smart makt: Kombinasjon av hard og myk makt`,
    },
    {
      id: 'politikk-1-8-example-1',
      type: 'example',
      title: 'Eksempel: Stormaktsrivaliseringen',
      problem: `Hvordan pavirker rivaliseringen mellom USA og Kina menneskerettighetene?`,
      solution: `**USAs posisjon:**
- Historisk forfekter av menneskerettigheter (med unntak)
- Kritiserer Kina for brudd (Xinjiang, Hongkong, Tibet)
- Bruker menneskerettigheter som utenrikspolitisk verkoy
- Egen praksis kritiseres (dronekrig, Guantanamo)

**Kinas posisjon:**
- Avviser kritikk som innblanding i indre anliggender
- Vektlegger okonomiske og sosiale rettigheter
- Hevder andre land ikke har rett til a kritisere
- Alternativ utviklingsmodell uten vestlige verdier

**Konsekvenser:**
- Menneskerettigheter blir politisert
- FN lammes av stormaktskonflikt
- Land presses til a velge side
- Mindre rom for konstruktivt samarbeid
- Autoritare land far stotte fra Kina

Rivaliseringen svekker det multilaterale menneskerettighetssystemet.`,
    },
    {
      id: 'politikk-1-8-text-3',
      type: 'text',
      content: `## Norsk utenrikspolitikk

Norge forsoker a balansere ulike hensyn i sin utenrikspolitikk:

**Grunnprinsipper:**
- NATO-medlemskap og alliert med USA
- Sterkt engasjement i FN og folkeretten
- Menneskerettigheter som utenrikspolitisk prioritet
- Bistand og utvikling
- Fredsmegling og konfliktlosning

**Menneskerettigheter i norsk utenrikspolitikk:**
- Tar opp menneskerettighetsbrudd i bilaterale moter
- Storstilling av menneskerettighetsorganisasjoner
- Aktiv i FNs menneskerettighetssrad
- Stotter internasjonal strafferett

**Dilemmaer:**
- Menneskerettigheter vs. handelspolitikk
- Kritikk av allierte
- Forholdet til autoritare stater (Kina, Saudi-Arabia)
- Hvor mye skal Norge blande seg?`,
    },
    {
      id: 'politikk-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign realisme og liberalisme som teorier om internasjonal politikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedsynet i realismen?',
            solution: 'Stater soker makt og sikkerhet i et anarkisk system. Makt og nasjonale interesser dominerer.',
          },
          {
            label: 'b',
            task: 'Hva er hovedsynet i liberalismen?',
            solution: 'Samarbeid er mulig gjennom institusjoner, handel og delte verdier.',
          },
          {
            label: 'c',
            task: 'Hvilken teori gir mest optimisme for menneskerettighetene?',
            solution: 'Liberalismen, fordi den tror pa internasjonalt samarbeid og normer.',
          },
        ],
        solution: 'Realisme vektlegger makt, liberalisme vektlegger samarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom hard makt og myk makt.',
        solution: 'Hard makt bruker militaere og okonomiske midler (tvang). Myk makt bruker attraktivitet, kultur og verdier (tiltrekning).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er det vanskelig a handheve menneskerettigheter internasjonalt?',
        hints: ['Tenk pa suverenitet, maktforskjeller og manglende tvangsmakt'],
        solution: 'Staters suverenitet, ingen global politimakt, stormakter kan blokkere tiltak, politiske interesser dominerer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Diskuter hvordan Norge bor balansere menneskerettigheter og andre interesser i utenrikspolitikken.',
        hints: ['Tenk pa handel, sikkerhet og allianser'],
        solution: 'Svaret bor vise forstaelse for dilemmaer og kunne argumentere for ulike prioriteringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Analyser en aktuell internasjonal konflikt og vurder menneskerettighetsaspektene.',
        hints: ['Eksempler: Ukraina, Midtosten, Myanmar, Etiopia'],
        solution: 'Svaret bor beskrive konflikten, identifisere menneskerettighetsbrudd og vurdere verdenssamfunnets respons.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Konflikt og fred
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_9: TextbookChapter = {
  id: 'politikk-menneskerett-1-9',
  courseId: 'politikk-menneskerett',
  chapterNumber: '9',
  title: 'Konflikt og fred',
  description: 'Analyser arsaker til konflikter og veier til varig fred.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere arsaker til vaepnede konflikter',
    'vurdere ulike tilnarminger til konfliktlosning og fredsbygging',
  ],
  content: [
    {
      id: 'politikk-1-9-intro',
      type: 'text',
      content: `## Krig og konflikt

Vaepnede konflikter er blant de alvorligste truslene mot menneskerettighetene. Krig foraerer samfunn og forer til massive lidelser.

**Typer vaepnede konflikter:**
- Mellomstatlige kriger (mellom land)
- Borgerkriger (innad i et land)
- Internasjonaliserte borgerkriger (utenlandsk innblanding)
- Ikke-statlige konflikter (mellom grupper)

**Trender:**
- Faerre mellomstatlige kriger
- Flere borgerkriger og interne konflikter
- Konflikter varer lenger
- Sivile utgjor flertallet av ofrene
- Nye former for krigforing (cyber, droner, hybridkrig)`,
    },
    {
      id: 'politikk-1-9-def-1',
      type: 'definition',
      title: 'Arsaker til konflikt',
      content: `**Strukturelle arsaker:**
- Fattigdom og ulikhet
- Svake stater og darlig styresett
- Etnisk og religios splittelse
- Urettferdig ressursfordeling
- Historiske krenkelser

**Utlosende faktorer:**
- Politiske kriser
- Okonomiske sjokk
- Naturkatastrofer
- Provokerende handlinger

**Konfliktentreprenorer:**
Ledere som utnytter og oppildner konflikter for egen vinning.

**Sikkerhetssdilemma:**
Nar en parts forsvarstiltak oppleves som trussel av andre, som ruster opp, som utloser mer opprustning.

**Grievance vs. greed:**
Konflikter kan drives av opplevd urett (grievance) eller okonomiske interesser (greed).`,
    },
    {
      id: 'politikk-1-9-text-2',
      type: 'text',
      content: `## Humanitarrett - krigens lover

Selv i krig gjelder regler. Den internasjonale humanitarretten (krigens lover) beskytter sivile og begrenser kampmetoder.

**Grunnprinsipper:**
- **Distinksjon:** Skille mellom sivile og stridende
- **Proporsjonalitet:** Angrep ma sta i forhold til militaer gevinst
- **Forholdsregler:** Ta hensyn for a beskytte sivile
- **Humanitet:** Forbud mot unodvendig lidelse

**Viktige konvensjoner:**
- Geneve-konvensjonene (1949) og tilleggsprotokoller
- Forbud mot visse vapen (biologiske, kjemiske, klasebomber, landminer)
- Barnelover i vaepnet konflikt

**Brudd pa humanitarretten:**
- Angrep pa sivile
- Tortur av fanger
- Bruk av barnesoldater
- Seksuell vold som vapan
- Nekting av humanitar tilgang`,
    },
    {
      id: 'politikk-1-9-example-1',
      type: 'example',
      title: 'Eksempel: Krigsforbrytelser og ansvar',
      problem: `Hvordan holdes krigsforbrytere ansvarlige?`,
      solution: `**Nasjonale domstoler:**
- Stater har plikt til a straffeforfoge egne borgere
- Universell jurisdiksjon tillater straff i andre land

**Internasjonale domstoler:**
- Nurnberg- og Tokyo-domstolene etter andre verdenskrig
- Jugoslavia-domstolen (ICTY)
- Rwanda-domstolen (ICTR)
- Den internasjonale straffedomstolen (ICC)

**ICC:**
- Permanent domstol i Haag
- Straffer folkemord, forbrytelser mot menneskeheten, krigsforbrytelser, aggresjonsforbrytelse
- Komplementaritetsprinsippet: Griper inn nar stater ikke vil eller kan
- 123 medlemsland
- Store makter (USA, Kina, Russland) er ikke medlemmer

**Utfordringer:**
- Mange forbrytere gar fri
- Selektiv rettferdighet
- Manglende samarbeid fra stater
- Lang tid til rettssaker`,
    },
    {
      id: 'politikk-1-9-text-3',
      type: 'text',
      content: `## Fredsbygging og konfliktlosning

Det finnes ulike tilnarminger til a ende konflikter og bygge varig fred:

**Fredsbevaring:**
FN-styrker skiller partene og overvaket vapeinhviler.

**Fredsmegling:**
Tredjeparter hjelper partene til a finne fredsavtale.

**Fredshandhevelse:**
Militaer intervensjon for a stanse overgrep.

**Fredsbygging:**
Langsiktig arbeid for a adressere rotarsakene til konflikt.

**Elementer i fredsbygging:**
- Forsoning og overgangsjustis
- Styrking av styresett og institusjoner
- Okonomisk gjenoppbygging
- Reintegrering av kombattanter
- Styrking av sivilsamfunnet

**Responsibility to Protect (R2P):**
FN-prinsipp om at verdenssamfunnet har ansvar for a beskytte befolkninger mot folkemord, krigsforbrytelser og forbrytelser mot menneskeheten nar staten svikter.`,
    },
    {
      id: 'politikk-1-9-def-2',
      type: 'definition',
      title: 'Overgangsrettferdighet',
      content: `**Straffeforfolgelse:**
Rettssaker mot forbrytere for a fastslå ansvar og gi rettferdighet til ofre.

**Sannhetskommisjoner:**
Dokumenterer overgrep og anerkjenner ofrenes lidelse. Soker sannhet framfor straff.

**Reparasjoner:**
Kompensasjon og stotte til ofre, bade materielt og symbolsk.

**Institusjonelle reformer:**
Endring av institusjoner som begikk overgrep, f.eks. sikkerhetsstyrker og rettsvesen.

**Amnesti:**
Strafefrihet mot vitnesbyrd eller som del av fredsavtale. Kontroversielt.

**Eksempler:**
- Sor-Afrikas sannhets- og forsoningskommisjon
- Colombias fredsavtale med FARC
- Rwandas Gacaca-domstoler`,
    },
    {
      id: 'politikk-1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hovedprinsippene i humanitarretten.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr distinksjonsprinsippet?',
            solution: 'At man ma skille mellom sivile og stridende. Angrep pa sivile er forbudt.',
          },
          {
            label: 'b',
            task: 'Hva betyr proporsjonalitetsprinsippet?',
            solution: 'At militaere angrep ma sta i rimelig forhold til den militaere gevinsten.',
          },
          {
            label: 'c',
            task: 'Hvorfor er disse prinsippene viktige?',
            solution: 'De beskytter sivile og begrenser krigens brutalitet.',
          },
        ],
        solution: 'Humanitarretten setter grenser for hva som er tillatt i krig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er Den internasjonale straffedomstolen (ICC), og hvilke forbrytelser kan den dome?',
        solution: 'ICC er en permanent domstol i Haag som straffer folkemord, forbrytelser mot menneskeheten, krigsforbrytelser og aggresjonsforbrytelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign straffeforfolgelse og sannhetskommisjoner som verktoy for overgangsrettferdighet.',
        solution: 'Straffeforfolgelse fokuserer pa ansvar og straff. Sannhetskommisjoner fokuserer pa dokumentasjon og anerkjennelse. Begge har styrker og svakheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Droft: Kan det noen gang vare rett a gi amnesti til krigsforbrytere for a oppna fred?',
        hints: ['Tenk pa bade rettferdighet og fred som verdier'],
        solution: 'Argumenter for: Nodvendig for a fa partene til a akseptere fred. Mot: Undergraver rettferdighet, setter darlig presedens, svikter ofre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en pagaende eller nylig avsluttet vaepnet konflikt. Analyser arsaker og mulige veier til fred.',
        hints: ['Bruk teorier om konfliktarsaker og fredsbygging'],
        solution: 'Svaret bor identifisere strukturelle og utlosende arsaker, og vurdere relevante tiltak for fred.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Aktivisme og deltakelse
// ============================================================================

export const CHAPTER_POLITIKK_MENNESKERETT_10: TextbookChapter = {
  id: 'politikk-menneskerett-1-10',
  courseId: 'politikk-menneskerett',
  chapterNumber: '10',
  title: 'Aktivisme og deltakelse',
  description: 'Forsta hvordan man kan engasjere seg for menneskerettigheter og politisk endring.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere over medborgerskap og muligheter for politisk deltakelse',
    'planlegge og gjennomfore tiltak for menneskerettigheter',
  ],
  content: [
    {
      id: 'politikk-1-10-intro',
      type: 'text',
      content: `## Demokratisk deltakelse

I et demokrati har borgere rett til a delta i politiske prosesser. Mange mener dette ogsa er en plikt, men det er ulike syn pa hvor aktivt man bor eller ma engasjere seg.

**Argumenter for a delta:**
- Pavirke beslutninger som angår deg
- Holde makthavere ansvarlige
- Bidra til fellesskapet
- Forsvare egne og andres rettigheter

**Former for deltakelse:**
- Stemme ved valg
- Melde seg inn i parti eller organisasjon
- Delta i offentlig debatt
- Demonstrere og aksjonere
- Kontakte politikere direkte
- Frivillig arbeid
- Sivil ulydighet

Deltakelse kan vare individuell eller kollektiv, konvensjonell eller ukonvensjonell. Ulike former for deltakelse har ulike fordeler og ulemper, og det finnes legitim uenighet om hvilke metoder som er mest effektive og akseptable.`,
    },
    {
      id: 'politikk-1-10-def-1',
      type: 'definition',
      title: 'Former for aktivisme',
      content: `**Konvensjonell deltakelse:**
- Stemme ved valg
- Partimedlemskap
- Signere opprop
- Skrive leserbrev
- Kontakte politikere

**Ukonvensjonell deltakelse:**
- Demonstrasjoner og marsjer
- Boikotter
- Blokader og okkupasjoner
- Sivil ulydighet
- Streiker

**Digital aktivisme:**
- Sosiale medier-kampanjer
- Nettbaserte underskriftskampanjer
- Hacktivisme
- Mobilisering via nett

**Sivil ulydighet:**
Bevisst og apen lovbrudd for a protestere mot urettferdige lover eller politikk. Tradisjonelt aksepterer man straff for a vise moralsk alvor. Det er betydelig uenighet om nar sivil ulydighet er rettferdiggjort - noen mener det kun er akseptabelt mot klart urettferdige lover, andre mener det kan brukes bredere. Kritikere paviser at sivil ulydighet undergraver respekten for demokratisk fattede lover.`,
    },
    {
      id: 'politikk-1-10-text-2',
      type: 'text',
      content: `## Menneskerettighetsaktivisme

Menneskerettighetsaktivister arbeider for a avdekke og stanse overgrep, og fremme respekt for menneskerettighetene.

**Metoder:**
- **Dokumentasjon:** Samle bevis pa brudd
- **Rapportering:** Publisere funn for a skape oppmerksomhet
- **Pavirkning:** Lobbe overfor myndigheter og bedrifter
- **Mobilisering:** Engasjere folk i kampanjer
- **Retslig arbeid:** Bringe saker for domstoler
- **Beskyttelse:** Stotte og beskytte utsatte aktivister

**Sentrale organisasjoner:**
- Amnesty International
- Human Rights Watch
- Leger Uten Grenser
- Rode Kors
- Helsingforskomiteene
- Lokale organisasjoner

**Risiko:**
Menneskerettighetsaktivister er ofte utsatt for trusler, fengsling, tortur og drap. Beskyttelse av aktivister er en viktig menneskerettighetsutfordring.`,
    },
    {
      id: 'politikk-1-10-example-1',
      type: 'example',
      title: 'Eksempel: Sosiale bevegelser som har endret verden',
      problem: `Hvordan har sosiale bevegelser bidratt til a fremme menneskerettigheter?`,
      solution: `**Borgerrettighetsbevegelsen i USA:**
- Kamp mot raseskille og diskriminering
- Fredelige protester og sivil ulydighet
- Martin Luther King Jr.s lederskap
- Resulterte i Civil Rights Act (1964)

**Anti-apartheid-bevegelsen:**
- Kamp mot raseadskillelse i Sor-Afrika
- Internasjonal boikott og press
- Mandelas symbolske lederskap
- Resulterte i demokrati i 1994

**Kvinnebevegelsen:**
- Stemmerett for kvinner
- Likestilling i arbeidsliv og utdanning
- Kamp mot vold og overgrep
- Fortsatt pagaende

**LHBT+-bevegelsen:**
- Fra kriminalisering til likestilling
- Stonewall-opproret (1969)
- Pride-marsjer som synliggjoring
- Ekteskap for alle i mange land

Disse bevegelsene viser at grasrotengasjement kan bidra til endring. Det er imidlertid viktig a merke seg at ikke alle bevegelser lykkes, og at aktivisme kan ha utilsiktede konsekvenser.`,
    },
    {
      id: 'politikk-1-10-text-2b',
      type: 'text',
      content: `## Utfordringer og dilemmaer ved aktivisme

Selv om aktivisme kan vare en viktig del av demokratiet, er det ogsa utfordringer og potensielle problemer:

**Demokratiske spenninger:**
- Aktivisme kan komme i konflikt med valgte representanters beslutninger
- Minoriteter kan bruke sterke virkemidler for a presse gjennom endringer som flertallet ikke onsker
- Hvem gir aktivister mandat til a tale pa vegne av andre?

**Metodiske utfordringer:**
- Sivil ulydighet bryter loven - hvor gar grensen for akseptable metoder?
- Aksjoner kan forstyrre hverdagen for uskyldige tredjeparter
- Fare for eskalering til vold eller ødeleggelser
- Kan skape motstand og polarisering heller enn stotte

**Sporsmal om representativitet:**
- Er aktivistgrupper representative for befolkningen?
- Sterke stemmer kan overdove andre synspunkter
- Ressurssterke grupper har ofte bedre mulighet til a drive aktivisme

**Ulike syn pa klimastreiker og skoleaksjoner:**
- Noen mener slike aksjoner er en viktig mate for unge a uttrykke seg
- Andre mener at a forlate skolen undergraver utdanningen og respekten for regler
- Sporsmal om barn og unges rolle i politiske aksjoner
- Debatt om hvorvidt klimaaksjoner er effektive eller kontraproduktive

**Balansert vurdering:**
Aktivisme er en del av et sunt demokrati, men ma vurderes kritisk. Bade de som deltar i aktivisme og de som kritiserer den, har legitime perspektiver.`,
    },
    {
      id: 'politikk-1-10-text-3',
      type: 'text',
      content: `## Planlegge en kampanje

Effektiv aktivisme krever planlegging og strategi.

**Trinn i kampanjeplanlegging:**

1. **Problemanalyse:**
Hva er problemet? Hvem rammes? Hva er arsakene?

2. **Malsetting:**
Hva vil vi oppna? Vare SMART: Spesifikt, Malbart, Oppnaelig, Relevant, Tidsbegrenset.

3. **Malgruppeanalyse:**
Hvem har makt til a endre? Hvem kan pavirke dem?

4. **Strategi:**
Hvilke metoder skal vi bruke? Hva har virket for?

5. **Ressurser:**
Hva trenger vi av folk, penger, tid, kunnskap?

6. **Gjennomforing:**
Fordele oppgaver og sette i gang.

7. **Evaluering:**
Hva fungerte? Hva kan forbedres?

**Suksessfaktorer:**
- Tydelig budskap
- Bred allianse
- Kreative metoder
- Utholdenhet
- Timing`,
    },
    {
      id: 'politikk-1-10-def-2',
      type: 'definition',
      title: 'Viktige begreper i aktivisme',
      content: `**Sosial bevegelse:**
En kollektiv innsats for a fremme eller motstå sosial endring.

**Grasrot:**
Aktivisme som kommer nedenfra, fra vanlige folk.

**Lobby:**
Forsok pa a pavirke politiske beslutninger direkte.

**Advokasjon (advocacy):**
A tale andres sak og arbeide for deres rettigheter.

**Solidaritet:**
A stotte andre selv om man ikke er direkte berort.

**Allianse:**
Samarbeid mellom ulike grupper for felles mal.

**Interseksjonalitet:**
A se sammenhenger mellom ulike former for undertrykkelse.`,
    },
    {
      id: 'politikk-1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv ulike former for politisk deltakelse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er konvensjonell deltakelse? Gi eksempler.',
            solution: 'Deltakelse innenfor etablerte kanaler: stemme, partimedlemskap, kontakte politikere.',
          },
          {
            label: 'b',
            task: 'Hva er ukonvensjonell deltakelse? Gi eksempler.',
            solution: 'Deltakelse utenfor vanlige kanaler: demonstrasjoner, boikotter, sivil ulydighet.',
          },
          {
            label: 'c',
            task: 'Nar kan sivil ulydighet vare rettferdiggjort?',
            solution: 'Nar lovlige midler er uttømt, saken er alvorlig nok, og man aksepterer konsekvensene.',
          },
        ],
        solution: 'Det finnes mange mater a delta pa, fra stemmegiving til aksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg en sosial bevegelse og analyser hva som gjorde den vellykket.',
        hints: ['Tenk pa ledelse, strategi, allianser og timing'],
        solution: 'Svaret bor identifisere konkrete faktorer som bidro til bevegelsens suksess.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Droft: Er digital aktivisme like effektivt som tradisjonell aktivisme?',
        hints: ['Tenk pa bade fordeler og begrensninger'],
        solution: 'Fordeler: Rask spredning, lavterskel, global rekkevidde. Begrensninger: Overflatisk engasjement, ekkokammer, lett a ignorere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en plan for en menneskerettighetskampanje pa skolen eller i lokalsamfunnet.',
        hints: ['Bruk trinnene i kampanjeplanlegging'],
        solution: 'Svaret bor vise forstaelse for kampanjeplanlegging med konkret problemstilling, mal, malgruppe og metoder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'politikk-1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'politikk-1-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Reflekter over din egen rolle som medborger. Hvordan kan du bidra til a styrke menneskerettighetene?',
        hints: ['Tenk pa dagligdagse handlinger sa vel som storre engasjement'],
        solution: 'Svaret bor vise personlig refleksjon og konkrete ideer for engasjement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT AV ALLE KAPITLER
// ============================================================================

export const POLITIKK_MENNESKERETT_CHAPTERS = [
  CHAPTER_POLITIKK_MENNESKERETT_1,
  CHAPTER_POLITIKK_MENNESKERETT_2,
  CHAPTER_POLITIKK_MENNESKERETT_3,
  CHAPTER_POLITIKK_MENNESKERETT_4,
  CHAPTER_POLITIKK_MENNESKERETT_5,
  CHAPTER_POLITIKK_MENNESKERETT_6,
  CHAPTER_POLITIKK_MENNESKERETT_7,
  CHAPTER_POLITIKK_MENNESKERETT_8,
  CHAPTER_POLITIKK_MENNESKERETT_9,
  CHAPTER_POLITIKK_MENNESKERETT_10,
];

export default POLITIKK_MENNESKERETT_CHAPTERS;
