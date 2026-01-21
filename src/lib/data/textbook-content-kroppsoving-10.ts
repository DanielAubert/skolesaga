/**
 * Kroppsøving 10. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kroppsøving på 10. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Treningslære
// ============================================================================

export const CHAPTER_KROPPSOVING_10_1: TextbookChapter = {
  id: 'kroppsoving-10-1',
  courseId: 'kroppsoving-10',
  chapterNumber: '1',
  title: 'Treningslære',
  description: 'Lær om treningsprinsipper, treningsplanlegging og hvordan kroppen tilpasser seg trening.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge, gjennomføre og vurdere egentrening',
    'bruke kunnskap om kropp og trening til å utvikle fysisk form',
  ],
  content: [
    {
      id: 'kroppsoving-10-1-intro',
      type: 'text',
      content: `Treningslære handler om vitenskapen bak hvordan kroppen tilpasser seg fysisk aktivitet. Ved å forstå treningsprinsipper kan du planlegge effektiv trening som gir resultater uten å overbelaste kroppen.`,
    },
    {
      id: 'kroppsoving-10-1-def-1',
      type: 'definition',
      title: 'Treningsprinsipp',
      content: `Et treningsprinsipp er en grunnleggende regel som styrer hvordan trening bør utformes for å gi optimal tilpasning og utvikling.`,
    },
    {
      id: 'kroppsoving-10-1-text-1',
      type: 'text',
      content: `**De viktigste treningsprinsippene**

**1. Spesifisitetsprinsippet**
- Kroppen tilpasser seg den type trening du gjør
- Vil du bli bedre til å løpe, må du løpe
- Overføringsverdi: Noen øvelser har verdi for andre aktiviteter

**2. Overbelastningsprinsippet**
- Kroppen må belastes mer enn normalt for å utvikle seg
- Progressiv økning over tid
- For lite belastning gir ingen utvikling

**3. Reversibilitetsprinsippet**
- "Use it or lose it"
- Treningseffekt forsvinner ved inaktivitet
- Kan miste form raskere enn du bygger den opp`,
    },
    {
      id: 'kroppsoving-10-1-text-2',
      type: 'text',
      content: `**4. Individuelt tilpasset trening**
- Alle responderer ulikt på trening
- Alder, kjønn, genetikk og treningsbakgrunn spiller inn
- Lær å lytte til kroppen

**5. Variasjonsprinsippet**
- Varier treningsformer og øvelser
- Unngår platåer og skader
- Holder motivasjonen oppe

**6. Restitusjonsprinsippet**
- Tilpasning skjer i hvileperioden
- Søvn, ernæring og aktiv hvile
- Overtrenning: Når du trener mer enn du restituerer`,
    },
    {
      id: 'kroppsoving-10-1-def-2',
      type: 'definition',
      title: 'VO2-maks',
      content: `VO2-maks (maksimalt oksygenopptak) er et mål på kroppens evne til å ta opp og bruke oksygen under maksimal anstrengelse. Det regnes som den beste indikatoren på utholdenhet.`,
    },
    {
      id: 'kroppsoving-10-1-text-3',
      type: 'text',
      content: `**Fysiske egenskaper**

**Utholdenhet**: Evnen til å arbeide over tid
- Aerob utholdenhet: Med oksygen (langvarig aktivitet)
- Anaerob utholdenhet: Uten tilstrekkelig oksygen (kortvarig, intenst)
- Trenes med intervaller, langkjøring, fartlek

**Styrke**: Evnen til å utvikle kraft
- Maksimal styrke: Tyngst mulig vekt
- Hurtigstyrke: Kraft raskt (hopp, kast)
- Utholdende styrke: Mange repetisjoner
- Trenes med vekter, kroppsvekt, apparater

**Hurtighet**: Evnen til å bevege seg raskt
- Reaksjonstid + bevegelseshastighet
- Trenes med sprinter, reaksjonsøvelser

**Bevegelighet**: Leddenes bevegelsesutslag
- Viktig for teknikk og skadeforebygging
- Trenes med tøyning og mobilitet`,
    },
    {
      id: 'kroppsoving-10-1-tip-1',
      type: 'tip',
      title: 'Treningsdagbok',
      content: `Før treningsdagbok der du noterer hva du trener, belastning, følelse og fremgang. Dette hjelper deg å se mønstre og justere treningen.`,
    },
    {
      id: 'kroppsoving-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva innebærer spesifisitetsprinsippet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av spesifisitetsprinsippet.',
            solution: 'Kroppen tilpasser seg den type trening du gjør',
            multipleChoiceOptions: [
              'Kroppen tilpasser seg den type trening du gjør',
              'All trening gir samme effekt',
              'Du må trene alle egenskaper like mye',
              'Spesielle personer trenger spesiell trening',
            ],
          },
        ],
        solution: 'Spesifisitetsprinsippet betyr at kroppen utvikler seg spesifikt i forhold til den belastningen den utsettes for.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr reversibilitetsprinsippet?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar reversibilitetsprinsippet.',
            solution: 'Treningseffekt forsvinner ved inaktivitet',
            multipleChoiceOptions: [
              'Treningseffekt forsvinner ved inaktivitet',
              'Trening kan alltid reverseres',
              'Du kan trene baklengs',
              'Resultater varer alltid',
            ],
          },
        ],
        solution: 'Reversibilitetsprinsippet forteller oss at kroppen mister tilpasninger når den ikke lenger belastes - "use it or lose it".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er VO2-maks?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av VO2-maks.',
            solution: 'Maksimalt oksygenopptak',
            multipleChoiceOptions: [
              'Maksimalt oksygenopptak',
              'Maksimal puls',
              'Maksimal styrke',
              'Maksimal hastighet',
            ],
          },
        ],
        solution: 'VO2-maks måler kroppens evne til å ta opp og utnytte oksygen under maksimal anstrengelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er restitusjon viktig?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar betydningen av restitusjon.',
            solution: 'Kroppen tilpasser seg og blir sterkere i hvileperioden',
            multipleChoiceOptions: [
              'Kroppen tilpasser seg og blir sterkere i hvileperioden',
              'Det er bare behagelig å hvile',
              'Restitusjon er ikke så viktig',
              'Man mister form under hvile',
            ],
          },
        ],
        solution: 'Under restitusjon reparerer og forsterker kroppen seg. Uten tilstrekkelig hvile får man ikke full effekt av treningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen mellom aerob og anaerob utholdenhet?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom de to typene utholdenhet.',
            solution: 'Aerob bruker oksygen, anaerob arbeider uten tilstrekkelig oksygen',
            multipleChoiceOptions: [
              'Aerob bruker oksygen, anaerob arbeider uten tilstrekkelig oksygen',
              'De er det samme',
              'Anaerob er bedre enn aerob',
              'Aerob er for eldre, anaerob for unge',
            ],
          },
        ],
        solution: 'Aerob utholdenhet bruker oksygen som energikilde ved moderat intensitet. Anaerob utholdenhet brukes ved høy intensitet når oksygen ikke rekker frem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en enkel treningsplan for en uke med fokus på utholdenhet.',
        solution: 'En god ukeplan kan inneholde: Mandag - langtur (45 min), Onsdag - intervaller (30 min), Fredag - fartlek (35 min), med hviledager mellom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Idrettspsykologi
// ============================================================================

export const CHAPTER_KROPPSOVING_10_2: TextbookChapter = {
  id: 'kroppsoving-10-2',
  courseId: 'kroppsoving-10',
  chapterNumber: '2',
  title: 'Idrettspsykologi',
  description: 'Lær om mentale ferdigheter, motivasjon, stressmestring og prestasjonsoptimalisering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over mentale faktorer som påvirker prestasjon',
    'bruke mentale teknikker for å forbedre ytelse',
  ],
  content: [
    {
      id: 'kroppsoving-10-2-intro',
      type: 'text',
      content: `Idrettspsykologi handler om de mentale faktorene som påvirker prestasjon. Toppidrettsutøvere bruker like mye tid på mental trening som fysisk trening. Disse ferdighetene er nyttige for alle, ikke bare idrettsutøvere.`,
    },
    {
      id: 'kroppsoving-10-2-def-1',
      type: 'definition',
      title: 'Flow',
      content: `Flow er en mental tilstand der du er fullstendig oppslukt av aktiviteten. Tid og sted forsvinner, og du presterer på ditt beste uten å tenke over det.`,
    },
    {
      id: 'kroppsoving-10-2-text-1',
      type: 'text',
      content: `**Motivasjon**

**Indre motivasjon**:
- Drives av glede og interesse
- Mer varig og robust
- Fører til bedre læring og trivsel

**Ytre motivasjon**:
- Belønninger, premier, anerkjennelse
- Kan være effektivt kortsiktig
- Kan underminere indre motivasjon

**Selvbestemmelsesteorien**: Tre grunnleggende behov
- Autonomi: Følelse av valg og kontroll
- Kompetanse: Følelse av mestring
- Tilhørighet: Føle seg inkludert og verdsatt`,
    },
    {
      id: 'kroppsoving-10-2-text-2',
      type: 'text',
      content: `**Mentale ferdigheter**

**Visualisering**:
- Se for deg at du utfører bevegelsen perfekt
- Aktiver alle sanser: se, høre, kjenne
- Øv jevnlig, gjerne daglig
- Effektivt for teknikklæring og prestasjon

**Konsentrasjon**:
- Fokuser på det relevante, ignorer forstyrrelser
- Ulike fokustyper: bredt/smalt, indre/ytre
- Kan trenes med mindfulness

**Selvsnakk**:
- Hva du sier til deg selv påvirker prestasjon
- Bytt negative tanker med positive
- "Jeg kan ikke" blir til "Jeg skal prøve"
- Bruk instruksjonelle stikkord`,
    },
    {
      id: 'kroppsoving-10-2-text-3',
      type: 'text',
      content: `**Spenningsregulering**

**For mye spenning (nervøsitet)**:
- Pusteøvelser: Dyp, rolig pust
- Progressiv avspenning: Spenn og slipp muskler
- Positiv selvsnakk
- Fokuser på prosessen, ikke resultatet

**For lite spenning (sløvhet)**:
- Fysisk aktivering: Hopp, løp
- Energisk musikk
- Motiverende selvsnakk
- Korte, intensive øvelser

**Optimal aktivering**: Alle har ulik optimal spenning
- Noen presterer best litt nervøse
- Andre trenger å være helt rolige
- Finn din optimale sone`,
    },
    {
      id: 'kroppsoving-10-2-def-2',
      type: 'definition',
      title: 'Prestasjonsangst',
      content: `Prestasjonsangst er overdreven nervøsitet eller frykt knyttet til det å skulle prestere. Det kan hemme ytelse betydelig hvis det ikke håndteres.`,
    },
    {
      id: 'kroppsoving-10-2-tip-1',
      type: 'tip',
      title: 'Rutiner',
      content: `Utvikle faste rutiner før prestasjon. Dette skaper trygghet og hjelper deg å komme i riktig modus. Mange toppidrettsutøvere har detaljerte oppvarmingsrutiner.`,
    },
    {
      id: 'kroppsoving-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er flow?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av flow.',
            solution: 'En tilstand der du er helt oppslukt og presterer på ditt beste',
            multipleChoiceOptions: [
              'En tilstand der du er helt oppslukt og presterer på ditt beste',
              'En type yoga',
              'Når du flyter i vann',
              'En dansestil',
            ],
          },
        ],
        solution: 'Flow er en optimal mental tilstand der handling og bevissthet smelter sammen, og du presterer uanstrengt på høyt nivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom indre og ytre motivasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom motivasjonstypene.',
            solution: 'Indre kommer fra glede ved aktiviteten, ytre fra belønninger utenfra',
            multipleChoiceOptions: [
              'Indre kommer fra glede ved aktiviteten, ytre fra belønninger utenfra',
              'De er det samme',
              'Ytre er alltid bedre',
              'Indre motivasjon finnes ikke',
            ],
          },
        ],
        solution: 'Indre motivasjon drives av aktivitetens iboende glede og interesse, mens ytre motivasjon kommer fra eksterne belønninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva innebærer visualisering som mental teknikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva visualisering er.',
            solution: 'Å se for seg at du utfører en bevegelse eller prestasjon perfekt',
            multipleChoiceOptions: [
              'Å se for seg at du utfører en bevegelse eller prestasjon perfekt',
              'Å se på bilder',
              'Å tegne øvelsen',
              'Å filme deg selv',
            ],
          },
        ],
        solution: 'Visualisering bruker mental forestilling av en perfekt utførelse, inkludert alle sanser, for å forberede kropp og sinn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kan du gjøre hvis du er for nervøs før en prestasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en effektiv teknikk mot nervøsitet.',
            solution: 'Bruke pusteøvelser og fokusere på prosessen',
            multipleChoiceOptions: [
              'Bruke pusteøvelser og fokusere på prosessen',
              'Tenke på alt som kan gå galt',
              'Trekke deg fra konkurransen',
              'Ignorere følelsene helt',
            ],
          },
        ],
        solution: 'Dyp, rolig pust og fokus på prosessen (hva du skal gjøre) fremfor resultatet hjelper mot nervøsitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er de tre grunnleggende behovene i selvbestemmelsesteorien?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de tre behovene.',
            solution: 'Autonomi, kompetanse og tilhørighet',
            multipleChoiceOptions: [
              'Autonomi, kompetanse og tilhørighet',
              'Mat, søvn og trening',
              'Seier, premier og ros',
              'Styrke, utholdenhet og hurtighet',
            ],
          },
        ],
        solution: 'Selvbestemmelsesteorien sier at mennesker trenger å føle autonomi (valg), kompetanse (mestring) og tilhørighet (inkludering) for å være motiverte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Gi et eksempel på hvordan du kan bruke positiv selvsnakk i en idrettssituasjon.',
        solution: 'I stedet for å si "Jeg klarer aldri dette straffesparket" kan du si "Jeg har øvd på dette mange ganger, jeg vet hvor jeg skal skyte".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Friluftsliv
// ============================================================================

export const CHAPTER_KROPPSOVING_10_3: TextbookChapter = {
  id: 'kroppsoving-10-3',
  courseId: 'kroppsoving-10',
  chapterNumber: '3',
  title: 'Friluftsliv',
  description: 'Lær om friluftsliv gjennom alle årstider, ferdsel i naturen og allemannsretten.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og gjennomføre turer i naturen til ulike årstider',
    'praktisere allemannsretten og vise hensyn til natur og andre',
  ],
  content: [
    {
      id: 'kroppsoving-10-3-intro',
      type: 'text',
      content: `Friluftsliv er en viktig del av norsk kultur og gir mulighet for fysisk aktivitet, naturopplevelser og mental rekreasjon. Å kunne ferdes trygt i naturen til alle årstider er en verdifull kompetanse.`,
    },
    {
      id: 'kroppsoving-10-3-def-1',
      type: 'definition',
      title: 'Allemannsretten',
      content: `Allemannsretten er retten alle har til å ferdes fritt i naturen, også på privat grunn, så lenge man viser hensyn til naturen, grunneier og andre brukere.`,
    },
    {
      id: 'kroppsoving-10-3-text-1',
      type: 'text',
      content: `**Allemannsretten - Rettigheter og plikter**

**Utmark**: Skog, fjell, kyst (ferdsel tillatt)
- Gå, sykle, ri, telte (minst 150m fra hus)
- Plukke bær, sopp, blomster
- Bade, padle, ro

**Innmark**: Dyrket mark, hager (begrensninger)
- Kan gå på frossen/snødekt mark
- Ikke gå over åker, eng i vekstsesongen
- Respekter gjerder og porter

**Plikter**:
- Vis hensyn til naturen
- Forstyrr ikke dyr og fugler
- Ta med søppel hjem
- Slukk bål ordentlig
- Respekter bålforbudet 15. april - 15. september`,
    },
    {
      id: 'kroppsoving-10-3-text-2',
      type: 'text',
      content: `**Turplanlegging**

**Før turen**:
- Sjekk værmelding (yr.no)
- Planlegg rute og alternativ rute
- Informer noen om planen
- Pakk riktig utstyr

**Utstyr (fjellvettreglene)**:
- Kart og kompass (GPS som supplement)
- Mat og drikke (litt ekstra)
- Bekledning for vær og vind
- Førstehjelpsutstyr
- Lykt/hodelykt
- Noe å sitte på

**Under turen**:
- Følg ruten, hold kartkontakt
- Ta pauser, drikk og spis regelmessig
- Vurder forholdene kontinuerlig
- Snu i tide hvis nødvendig`,
    },
    {
      id: 'kroppsoving-10-3-text-3',
      type: 'text',
      content: `**Friluftsliv gjennom året**

**Vår**:
- Dagsturer, skogsturer
- Pas på våt mark og flomstore elver
- Fuglehekking - vis hensyn

**Sommer**:
- Fotturer, padleturer, sykkelturer
- Telting og overnatting ute
- Bading og vannaktiviteter
- Husk myggbeskyttelse

**Høst**:
- Bærplukking, soppturer
- Jakt og fiske (med tillatelse)
- Kortere dager - ta med lykt
- Vått og glatt terreng

**Vinter**:
- Ski, truger, skøyter
- Kortere dagslys - planlegg godt
- Kulde - riktig bekledning
- Snøskredfare i bratt terreng`,
    },
    {
      id: 'kroppsoving-10-3-warning-1',
      type: 'warning',
      title: 'Fjellvettreglene',
      content: `Følg fjellvettreglene: Planlegg turen, meld fra, respekter værmelding, vær forberedt på uvær, ta med nødvendig utstyr, velg trygge veier, bruk kart og kompass, snu i tide, spar på kreftene.`,
    },
    {
      id: 'kroppsoving-10-3-tip-1',
      type: 'tip',
      title: 'Legg igjen spor',
      content: `"Leave No Trace" - legg igjen naturen slik du fant den. Ta med søppel, ikke skjær i trær, hold deg til stier der det er mulig, og respekter dyrelivet.`,
    },
    {
      id: 'kroppsoving-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er allemannsretten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av allemannsretten.',
            solution: 'Retten til å ferdes fritt i naturen, også på privat grunn',
            multipleChoiceOptions: [
              'Retten til å ferdes fritt i naturen, også på privat grunn',
              'Retten til å eie land',
              'Bare nordmenn har denne retten',
              'Retten til å jakte fritt',
            ],
          },
        ],
        solution: 'Allemannsretten gir alle rett til å ferdes i utmark, men med forpliktelser om å vise hensyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom utmark og innmark?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen på utmark og innmark.',
            solution: 'Utmark er skog, fjell og kyst; innmark er dyrket mark og hager',
            multipleChoiceOptions: [
              'Utmark er skog, fjell og kyst; innmark er dyrket mark og hager',
              'De er det samme',
              'Innmark er bare i byer',
              'Utmark finnes ikke i Norge',
            ],
          },
        ],
        solution: 'Utmark inkluderer skog, fjell, myr og kyst der man kan ferdes fritt. Innmark er dyrket mark, eng og nærområder rundt hus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Når gjelder bålforbudet i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig periode for bålforbudet.',
            solution: '15. april - 15. september',
            multipleChoiceOptions: [
              '15. april - 15. september',
              '1. januar - 31. desember',
              '1. mai - 1. august',
              'Det er ikke noe bålforbud',
            ],
          },
        ],
        solution: 'Det generelle bålforbudet gjelder fra 15. april til 15. september, men åpne ildsteder kan brukes med forsiktighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke tre ting bør du alltid ha med på tur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de tre viktigste tingene.',
            solution: 'Kart/kompass, mat/drikke, og ekstra klær',
            multipleChoiceOptions: [
              'Kart/kompass, mat/drikke, og ekstra klær',
              'Telefon, nettbrett og høyttalere',
              'Penger, kredittkort og ID',
              'Såpe, håndkle og tannbørste',
            ],
          },
        ],
        solution: 'Kart og kompass for navigasjon, mat og drikke for energi, og ekstra klær for vær og temperaturendringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva betyr "Leave No Trace"?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar prinsippet "Leave No Trace".',
            solution: 'Legg igjen naturen slik du fant den',
            multipleChoiceOptions: [
              'Legg igjen naturen slik du fant den',
              'Ikke gå i naturen',
              'Ta med deg steiner hjem',
              'Legg igjen søppel for andre',
            ],
          },
        ],
        solution: '"Leave No Trace" betyr å minimere din påvirkning på naturen - ta med søppel, ikke forstyrr dyr, hold deg til stier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg en dagtur til et naturområde i nærheten. Inkluder rute, utstyrsliste og sikkerhetstiltak.',
        solution: 'En god turplan inkluderer: valgt destinasjon, planlagt rute med kart, estimert tid, utstyrsliste (klær, mat, drikke, førstehjelpsutstyr, kart/kompass), hvem som er informert om turen, og alternativ rute ved dårlig vær.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Fair play og etikk
// ============================================================================

export const CHAPTER_KROPPSOVING_10_4: TextbookChapter = {
  id: 'kroppsoving-10-4',
  courseId: 'kroppsoving-10',
  chapterNumber: '4',
  title: 'Fair play og etikk',
  description: 'Lær om fair play, idrettsetikk, respekt og inkludering i idrett og fysisk aktivitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'diskutere etiske problemstillinger i idrett',
    'praktisere fair play og vise respekt for medspillere og motstandere',
  ],
  content: [
    {
      id: 'kroppsoving-10-4-intro',
      type: 'text',
      content: `Fair play og etikk handler om hvordan vi oppfører oss i idrett og fysisk aktivitet. Det dreier seg om mer enn bare å følge reglene - det handler om respekt, ærlighet og god oppførsel.`,
    },
    {
      id: 'kroppsoving-10-4-def-1',
      type: 'definition',
      title: 'Fair play',
      content: `Fair play betyr å spille ærlig og rettferdig, respektere regler, motstandere, dommere og medspillere, og sette konkurransens ånd over egen vinning.`,
    },
    {
      id: 'kroppsoving-10-4-text-1',
      type: 'text',
      content: `**Fair play i praksis**

**Mot motstandere**:
- Respekter motstanderen som en nødvendig del av konkurransen
- Hjelp opp en motstander som har falt
- Gratulerer vinneren ærlig
- Ingen dårlig oppførsel ved tap

**Mot medspillere**:
- Støtt og oppmuntre
- Del på spilletid og ballen
- Ta ansvar for egne feil
- Feir lagkameraters suksess

**Mot dommere**:
- Aksepter avgjørelser
- Ikke klag eller protester åpenlyst
- Respekter at dommere gjør sitt beste
- Dårlige avgjørelser er en del av spillet`,
    },
    {
      id: 'kroppsoving-10-4-text-2',
      type: 'text',
      content: `**Etiske dilemmaer i idrett**

**Doping**:
- Bruk av forbudte stoffer for å forbedre prestasjon
- Juks som undergraver idrettens grunnlag
- Helserisiko for utøvere
- Skader idrettens omdømme

**Kampfiksing**:
- Å påvirke resultatet av en konkurranse
- Ofte knyttet til gambling
- Straffbart og uetisk
- Ødelegger konkurransens mening

**Korrupsjon**:
- Bestikkelser i idrettsorganisasjoner
- Urettferdig tildeling av mesterskap
- Undergraver tilliten til idretten

**Press og forventninger**:
- Press fra trenere, foreldre, sponsorer
- Kan føre til juks eller dårlig oppførsel
- Viktig å sette grenser`,
    },
    {
      id: 'kroppsoving-10-4-text-3',
      type: 'text',
      content: `**Inkludering og respekt**

**Inkludering**:
- Alle skal kunne delta uavhengig av nivå
- Tilrettelegging for funksjonshemmede
- Ingen diskriminering basert på bakgrunn
- Mangfold beriker idretten

**Kjønn og likestilling**:
- Like muligheter for alle kjønn
- Respekt uavhengig av seksuell legning
- Mot seksuell trakassering

**Mobbing i idrett**:
- Utestengelse fra laget eller gruppen
- Nedlatende kommentarer om prestasjon
- Alle har ansvar for å stoppe mobbing
- Snakk med voksne hvis du opplever eller ser mobbing

**Kulturelt mangfold**:
- Respekter ulike bakgrunner og tradisjoner
- Idrett kan bygge broer
- Lær av hverandre`,
    },
    {
      id: 'kroppsoving-10-4-tip-1',
      type: 'tip',
      title: 'Vinn med verdighet, tap med ære',
      content: `Hvordan du oppfører deg ved seier og tap sier mer om deg enn resultatet. Vær ydmyk ved seier og stolt ved tap - du ga ditt beste.`,
    },
    {
      id: 'kroppsoving-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr fair play?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av fair play.',
            solution: 'Å spille ærlig og rettferdig, og respektere alle involverte',
            multipleChoiceOptions: [
              'Å spille ærlig og rettferdig, og respektere alle involverte',
              'Å vinne for enhver pris',
              'Å bare følge reglene',
              'En type spill',
            ],
          },
        ],
        solution: 'Fair play handler om ærlighet, respekt og god oppførsel - det går utover bare å følge reglene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er doping uetisk?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor doping er problematisk.',
            solution: 'Det er juks som undergraver rettferdig konkurranse og kan skade helsen',
            multipleChoiceOptions: [
              'Det er juks som undergraver rettferdig konkurranse og kan skade helsen',
              'Det er bare ulovlig, ikke uetisk',
              'Det gir for gode resultater',
              'Det er for dyrt',
            ],
          },
        ],
        solution: 'Doping er juks som gir urettferdig fordel, kan skade utøverens helse, og undergraver idrettens grunnverdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan bør du forholde deg til dommeravgjørelser du er uenig i?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig måte å håndtere uenighet med dommer.',
            solution: 'Akseptere avgjørelsen og fortsette å spille',
            multipleChoiceOptions: [
              'Akseptere avgjørelsen og fortsette å spille',
              'Protestere høylytt',
              'Nekte å fortsette',
              'Krangle med dommeren',
            ],
          },
        ],
        solution: 'Respekt for dommere er en del av fair play. Aksepter avgjørelser selv om du er uenig - feil er en del av spillet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kan du gjøre hvis du opplever eller ser mobbing i idretten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig handling ved mobbing.',
            solution: 'Si fra til en voksen og støtte den som mobbes',
            multipleChoiceOptions: [
              'Si fra til en voksen og støtte den som mobbes',
              'Ignorere det',
              'Bli med på mobbingen',
              'Slutte på laget',
            ],
          },
        ],
        solution: 'Ved mobbing bør du si fra til en voksen (trener, forelder), støtte den som mobbes, og ikke være passiv tilskuer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva menes med inkludering i idrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva inkludering i idrett innebærer.',
            solution: 'At alle skal kunne delta uavhengig av nivå, bakgrunn eller funksjonsnivå',
            multipleChoiceOptions: [
              'At alle skal kunne delta uavhengig av nivå, bakgrunn eller funksjonsnivå',
              'At bare de beste får delta',
              'At alle må være på samme lag',
              'At man må betale for å delta',
            ],
          },
        ],
        solution: 'Inkludering betyr at idretten er åpen for alle og tilrettelegges slik at alle kan delta og trives.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv en situasjon der du måtte vise fair play, eller gi et eksempel på god fair play du har sett.',
        solution: 'Eksempler kan være: å innrømme at ballen var ute selv om dommer ikke så det, å hjelpe opp en motstander, å gratulere vinneren ærlig etter et tap, eller å inkludere en ny spiller som er usikker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Kropp og helse
// ============================================================================

export const CHAPTER_KROPPSOVING_10_5: TextbookChapter = {
  id: 'kroppsoving-10-5',
  courseId: 'kroppsoving-10',
  chapterNumber: '5',
  title: 'Kropp og helse',
  description: 'Lær om kroppens systemer, ernæring, søvn og helseeffekter av fysisk aktivitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå hvordan fysisk aktivitet påvirker kropp og helse',
    'gjøre rede for sammenhengen mellom livsstil og helse',
  ],
  content: [
    {
      id: 'kroppsoving-10-5-intro',
      type: 'text',
      content: `Fysisk aktivitet har omfattende positive effekter på kroppen. Ved å forstå hvordan kroppen fungerer og hva den trenger, kan du ta bedre valg for egen helse.`,
    },
    {
      id: 'kroppsoving-10-5-def-1',
      type: 'definition',
      title: 'Livsstilssykdom',
      content: `En livsstilssykdom er en sykdom som i stor grad skyldes livsstilsfaktorer som fysisk inaktivitet, usunt kosthold, røyking eller høyt alkoholforbruk. Eksempler er hjerte- og karsykdommer, type 2-diabetes og enkelte kreftformer.`,
    },
    {
      id: 'kroppsoving-10-5-text-1',
      type: 'text',
      content: `**Kroppens systemer og trening**

**Muskel- og skjelettsystemet**:
- Muskler: Styrkes og vokser ved belastning
- Skjelett: Blir sterkere ved vektbærende aktivitet
- Ledd: Bevegelighet opprettholdes ved bruk
- Sener og ligamenter: Tilpasser seg gradvis belastning

**Hjerte- og karsystemet**:
- Hjertet blir sterkere og mer effektivt
- Hvilepulsen synker
- Blodårene blir mer elastiske
- Bedre blodgjennomstrømning

**Respirasjonssystemet**:
- Lungene blir mer effektive
- Bedre oksygenopptak
- Økt utholdenhet

**Nervesystemet**:
- Bedre koordinasjon
- Raskere reaksjonstid
- Forbedret balanse`,
    },
    {
      id: 'kroppsoving-10-5-text-2',
      type: 'text',
      content: `**Ernæring for helse og prestasjon**

**Makronæringsstoffer**:
- Karbohydrater: Hovedenergikilde (50-60%)
- Proteiner: Bygger og reparerer (15-20%)
- Fett: Energi og hormoner (25-35%)

**Mikronæringsstoffer**:
- Vitaminer: Regulerer prosesser
- Mineraler: Bygger opp kroppen
- Viktige: Jern, kalsium, vitamin D

**Væske**:
- Drikk 1,5-2 liter daglig
- Mer ved aktivitet og varme
- Vann er best

**Måltidsrytme**:
- Frokost gir energi til dagen
- Regelmessige måltider
- Sunn snacks mellom måltider`,
    },
    {
      id: 'kroppsoving-10-5-text-3',
      type: 'text',
      content: `**Søvn og restitusjon**

**Hvorfor søvn er viktig**:
- Kroppen reparerer seg
- Hjernen bearbeider læring
- Hormoner frigis (veksthormon)
- Immunforsvaret styrkes

**Anbefalinger for ungdom**:
- 8-10 timer per natt
- Regelmessige legge- og ståopp-tider
- Unngå skjermer før sengetid
- Mørkt og kjølig soverom

**Tegn på søvnmangel**:
- Trøtthet og irritabilitet
- Konsentrasjonsproblemer
- Dårligere prestasjoner
- Økt sykdomsrisiko`,
    },
    {
      id: 'kroppsoving-10-5-text-4',
      type: 'text',
      content: `**Helseeffekter av fysisk aktivitet**

**Fysiske effekter**:
- Forebygger livsstilssykdommer
- Styrker muskler og skjelett
- Bedrer kondisjon og utholdenhet
- Opprettholder sunn kroppsvekt

**Psykiske effekter**:
- Reduserer stress og angst
- Forbedrer humør (endorfiner)
- Bedrer selvfølelse
- Bedrer søvnkvalitet

**Anbefalinger**:
- Minimum 60 minutter daglig for ungdom
- Variert aktivitet
- Inkluder styrketrening 2-3 ganger ukentlig
- All bevegelse teller`,
    },
    {
      id: 'kroppsoving-10-5-tip-1',
      type: 'tip',
      title: 'Små valg, stor effekt',
      content: `Hverdagsaktivitet teller! Ta trappen i stedet for heisen, gå eller sykkel til skolen, stå opp og strekk deg jevnlig - det legger seg til over tid.`,
    },
    {
      id: 'kroppsoving-10-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en livsstilssykdom?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av livsstilssykdom.',
            solution: 'Sykdom som skyldes livsstilsfaktorer som inaktivitet og usunt kosthold',
            multipleChoiceOptions: [
              'Sykdom som skyldes livsstilsfaktorer som inaktivitet og usunt kosthold',
              'Sykdom du er født med',
              'Smittsomme sykdommer',
              'Sykdom som bare eldre får',
            ],
          },
        ],
        solution: 'Livsstilssykdommer utvikles over tid på grunn av livsstilsvalg og kan i stor grad forebygges.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan påvirker trening hjertet?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv treningseffektene på hjertet.',
            solution: 'Hjertet blir sterkere og mer effektivt, hvilepulsen synker',
            multipleChoiceOptions: [
              'Hjertet blir sterkere og mer effektivt, hvilepulsen synker',
              'Hjertet blir svakere',
              'Ingen effekt på hjertet',
              'Hjertet blir mindre',
            ],
          },
        ],
        solution: 'Regelmessig utholdenhetstrening gjør hjertet sterkere, slik at det pumper mer blod per slag og hviler mer mellom slagene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor mye søvn trenger ungdommer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg anbefalt søvnmengde for ungdom.',
            solution: '8-10 timer per natt',
            multipleChoiceOptions: [
              '8-10 timer per natt',
              '4-5 timer per natt',
              '12-14 timer per natt',
              'Det spiller ingen rolle',
            ],
          },
        ],
        solution: 'Ungdommer trenger 8-10 timer søvn for optimal helse, vekst og læring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er de tre makronæringsstoffene?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de tre makronæringsstoffene.',
            solution: 'Karbohydrater, proteiner og fett',
            multipleChoiceOptions: [
              'Karbohydrater, proteiner og fett',
              'Vitaminer, mineraler og vann',
              'Sukker, salt og fett',
              'Frukt, grønt og kjøtt',
            ],
          },
        ],
        solution: 'De tre makronæringsstoffene er karbohydrater (energi), proteiner (byggestoff) og fett (energi og hormoner).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke psykiske effekter har fysisk aktivitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige psykiske effekter av aktivitet.',
            solution: 'Reduserer stress, forbedrer humør og selvfølelse',
            multipleChoiceOptions: [
              'Reduserer stress, forbedrer humør og selvfølelse',
              'Ingen psykiske effekter',
              'Øker stress',
              'Forverrer søvn',
            ],
          },
        ],
        solution: 'Fysisk aktivitet frigir endorfiner som gir bedre humør, reduserer stresshormoner, og forbedrer selvfølelse og søvn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en liste over fem enkle måter du kan øke hverdagsaktiviteten din på.',
        solution: 'Eksempler: Ta trappen i stedet for heis, gå eller sykle til skolen, stå mens du snakker i telefon, ha "gå-møter" med venner, ta pauser fra skjerm med bevegelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Tradisjonelle idretter
// ============================================================================

export const CHAPTER_KROPPSOVING_10_6: TextbookChapter = {
  id: 'kroppsoving-10-6',
  courseId: 'kroppsoving-10',
  chapterNumber: '6',
  title: 'Tradisjonelle idretter',
  description: 'Lær om teknikk, regler og taktikk i tradisjonelle ball- og individuelle idretter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utvikle ferdigheter i ulike idretter',
    'forstå regler og taktikk i ulike idretter',
  ],
  content: [
    {
      id: 'kroppsoving-10-6-intro',
      type: 'text',
      content: `Tradisjonelle idretter har lange tradisjoner og er populære over hele verden. Å beherske grunnleggende teknikk og forstå taktikk gjør aktivitetene mer givende.`,
    },
    {
      id: 'kroppsoving-10-6-def-1',
      type: 'definition',
      title: 'Spillforståelse',
      content: `Spillforståelse er evnen til å "lese" spillet - å forutse hva som kommer til å skje, forstå rommet på banen, og ta gode beslutninger raskt.`,
    },
    {
      id: 'kroppsoving-10-6-text-1',
      type: 'text',
      content: `**Lagspill - Fotball**

**Grunnleggende teknikk**:
- Pasning: Innside, vrist, utsidepasning
- Mottak: Dempe ballen, kontrollere
- Skudd: Innside for presisjon, vrist for kraft
- Heading: Bruk pannen, lukk øynene

**Posisjoner og roller**:
- Keeper: Siste forsvarslinje, organiserer
- Forsvarere: Stopper angrep, spiller opp
- Midtbane: Bindeledd, styrer tempo
- Angrep: Scorer mål, presser høyt

**Grunnleggende taktikk**:
- Angrep: Bredde, dybde, bevegelse
- Forsvar: Press, dekking, sikring
- Overganger: Raske vendinger fra forsvar til angrep`,
    },
    {
      id: 'kroppsoving-10-6-text-2',
      type: 'text',
      content: `**Lagspill - Håndball**

**Grunnleggende teknikk**:
- Kast: Overarmskast, hopp-skudd
- Mottak: Myk hånd, ta mot
- Dribling: Rytmisk, med blikket opp
- Finter: Lure forsvareren

**Posisjoner**:
- Keeper: Redder skudd
- Kantspillere: Hurtige, avslutter på kant
- Bakspillere: Organiserer, skyter utenfra
- Strek: Fysisk spiller nær mål

**Taktikk**:
- Angrep: Spill i bredden, gjennombrudd
- Forsvar: 6-0, 5-1, 3-2-1 formasjoner
- Overtalsspill: Utnytte når motstanderen har utvisning`,
    },
    {
      id: 'kroppsoving-10-6-text-3',
      type: 'text',
      content: `**Individuelle idretter - Friidrett**

**Løp**:
- Sprint: Eksplosiv start, full fart
- Mellomdistanse: Fordeling av krefter
- Langdistanse: Jevnt tempo, utholdenhet

**Hopp**:
- Lengdehopp: Tilløp, sats, svev, landing
- Høydehopp: Fosbury flop, bue over
- Tresteg: Hopp-steg-hopp rytme

**Kast**:
- Kulestøt: Kraft fra beina, skyv
- Diskos: Rotasjon, slipp i riktig vinkel
- Spyd: Tilløp, kasteteknikk

**Svømming**:
- Crawl: Koordinasjon arm-bein-pust
- Rygg: Ligge høyt, jevne tak
- Bryst: Symmetrisk bevegelse
- Butterfly: Kraft og koordinasjon`,
    },
    {
      id: 'kroppsoving-10-6-tip-1',
      type: 'tip',
      title: 'Teknikk før fart',
      content: `Lær riktig teknikk før du prøver å gå raskere eller hardere. God teknikk er grunnlaget for videre utvikling og forebygger skader.`,
    },
    {
      id: 'kroppsoving-10-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er spillforståelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av spillforståelse.',
            solution: 'Evnen til å lese spillet og ta gode beslutninger',
            multipleChoiceOptions: [
              'Evnen til å lese spillet og ta gode beslutninger',
              'Å kjenne alle reglene',
              'Å være raskest på banen',
              'Å score flest mål',
            ],
          },
        ],
        solution: 'Spillforståelse handler om å forstå hva som skjer i spillet, forutse utviklingen, og velge riktig handling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken del av foten brukes for presisjonspasninger i fotball?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig del av foten for presisjons.',
            solution: 'Innsiden av foten',
            multipleChoiceOptions: [
              'Innsiden av foten',
              'Vristen',
              'Hælen',
              'Tåen',
            ],
          },
        ],
        solution: 'Innsidepasning gir best kontroll og presisjon, mens vristpasning gir mer kraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er de tre hovedelementene i et lengdehopp?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de tre hovedelementene.',
            solution: 'Tilløp, sats og svev/landing',
            multipleChoiceOptions: [
              'Tilløp, sats og svev/landing',
              'Start, hopp og slutt',
              'Løp, hopp og fall',
              'Sprint, fly og rulle',
            ],
          },
        ],
        solution: 'Lengdehopp består av tilløp (bygge fart), sats (kraft oppover og fremover) og svev/landing (holde balansen, lande riktig).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner et 6-0 forsvar i håndball?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv 6-0 forsvarsformasjonen.',
            solution: 'Alle seks utespillere står på linje foran mål',
            multipleChoiceOptions: [
              'Alle seks utespillere står på linje foran mål',
              'Seks spillere i angrep',
              'Ingen keeper',
              'Alle spillere i angrep',
            ],
          },
        ],
        solution: '6-0 er en defensiv formasjon der alle seks utespillere står langs 6-meterlinjen og dekker rommet foran mål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilken svømmeart regnes som den raskeste?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den raskeste svømmearten.',
            solution: 'Crawl (fristil)',
            multipleChoiceOptions: [
              'Crawl (fristil)',
              'Bryst',
              'Rygg',
              'Butterfly',
            ],
          },
        ],
        solution: 'Crawl er den raskeste svømmearten og brukes i fristilkonkurranser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv en taktisk situasjon i en idrett du kjenner godt, og forklar hvordan du ville løst den.',
        solution: 'Eksempel i fotball: Ved kontringsangrep med 3 mot 2 bør ballen spilles raskt, de tre angriperne bør spre seg, og den med ballen bør vurdere om han skal drible, passe eller skyte basert på forsvarernes posisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Alternative aktiviteter
// ============================================================================

export const CHAPTER_KROPPSOVING_10_7: TextbookChapter = {
  id: 'kroppsoving-10-7',
  courseId: 'kroppsoving-10',
  chapterNumber: '7',
  title: 'Alternative aktiviteter',
  description: 'Lær om nye og alternative aktivitetsformer som kan gi glede og utvikling.',
  estimatedMinutes: 45,
  competenceGoals: [
    'prøve ut og vurdere ulike aktivitetsformer',
    'finne aktiviteter som passer for deg',
  ],
  content: [
    {
      id: 'kroppsoving-10-7-intro',
      type: 'text',
      content: `Alternative aktiviteter omfatter nyere eller mindre tradisjonelle bevegelsesformer. Disse kan være gode alternativer for de som ikke trives med tradisjonell idrett, eller som supplement for variasjon.`,
    },
    {
      id: 'kroppsoving-10-7-def-1',
      type: 'definition',
      title: 'Livslang aktivitet',
      content: `Livslang aktivitet er fysisk aktivitet du kan utøve gjennom hele livet. Det handler om å finne aktiviteter som gir glede og kan tilpasses ulike livsfaser og funksjonsnivå.`,
    },
    {
      id: 'kroppsoving-10-7-text-1',
      type: 'text',
      content: `**Dans og rytmisk bevegelse**

**Moderne danseformer**:
- Hip-hop: Kraftfulle, rytmiske bevegelser
- Breakdance: Akrobatiske elementer, battles
- Contemporary: Uttrykksfull, flytende
- Zumba: Latininspirert fitness-dans

**Treningseffekter**:
- Koordinasjon og balanse
- Kondisjon og utholdenhet
- Styrke, særlig kjernemuskulatur
- Rytmefølelse og musikalitet

**Sosiale aspekter**:
- Lavterskel - alle kan delta
- Sosialt og morsomt
- Uttrykk og kreativitet
- Kan gjøres individuelt eller i gruppe`,
    },
    {
      id: 'kroppsoving-10-7-text-2',
      type: 'text',
      content: `**Kampsport og selvforsvar**

**Typer kampsport**:
- Judo: Kast og grep, japansk
- Taekwondo: Spark, koreansk
- Karate: Slag og spark, japansk
- Brasiliansk jiu-jitsu: Bakkearbeid
- Boksing: Neveslag

**Verdier i kampsport**:
- Respekt og disiplin
- Selvkontroll
- Gradssystem (belter)
- Tradisjon og filosofi

**Treningseffekter**:
- Styrke og smidighet
- Koordinasjon og balanse
- Reaksjonsevne
- Selvtillit og trygghet`,
    },
    {
      id: 'kroppsoving-10-7-text-3',
      type: 'text',
      content: `**Egenorganisert trening**

**Styrketrening**:
- Kroppsvekt: Push-ups, planke, squats
- Frivekter: Manualer, kettlebells
- Apparater: Styrt bevegelse

**Utholdenhetstrening**:
- Løping: Langtur, intervaller
- Sykling: Ute eller spinning
- Svømming: Helkropps trening

**Fleksibilitetstrening**:
- Yoga: Styrke, balanse, avspenning
- Pilates: Kjernemuskulatur
- Tøying og mobilitet

**Funksjonell trening**:
- CrossFit-inspirert
- Helkroppsbevegelser
- Hverdagsbevegelser`,
    },
    {
      id: 'kroppsoving-10-7-text-4',
      type: 'text',
      content: `**Urbane aktiviteter**

**Parkour / freerunning**:
- Effektiv forflytning over hindringer
- Hopp, klatring, rulling
- Kreativ bruk av omgivelsene
- Sikkerhet og progresjon viktig

**Skateboard / rulleskøyter**:
- Balanse og koordinasjon
- Triks og stil
- Sosial aktivitet

**Klatring**:
- Buldring: Lav høyde, uten tau
- Sportsklatring: Med tau og sikring
- Styrke, teknikk og problemløsning

**E-sport / aktive spill**:
- VR-trening: Bevegelse i virtuell virkelighet
- Dansespill: Beat Saber, Just Dance
- Kan være inngang til fysisk aktivitet`,
    },
    {
      id: 'kroppsoving-10-7-tip-1',
      type: 'tip',
      title: 'Prøv noe nytt',
      content: `Prøv flere aktiviteter for å finne ut hva du liker. Det viktigste er at du finner noe som gir glede - da er sjansen større for at du fortsetter.`,
    },
    {
      id: 'kroppsoving-10-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med livslang aktivitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av livslang aktivitet.',
            solution: 'Aktivitet du kan utøve gjennom hele livet',
            multipleChoiceOptions: [
              'Aktivitet du kan utøve gjennom hele livet',
              'Aktivitet som varer hele dagen',
              'Bare toppidrett',
              'Aktivitet for eldre',
            ],
          },
        ],
        solution: 'Livslang aktivitet er bevegelse du kan tilpasse og nyte gjennom alle livets faser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke treningseffekter gir dans?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg treningseffekter av dans.',
            solution: 'Koordinasjon, kondisjon, styrke og rytmefølelse',
            multipleChoiceOptions: [
              'Koordinasjon, kondisjon, styrke og rytmefølelse',
              'Bare kondisjon',
              'Ingen treningseffekt',
              'Bare styrke',
            ],
          },
        ],
        solution: 'Dans gir allsidig trening som inkluderer koordinasjon, kondisjon, styrke og rytmisk bevissthet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke verdier er sentrale i kampsport?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg sentrale verdier i kampsport.',
            solution: 'Respekt, disiplin og selvkontroll',
            multipleChoiceOptions: [
              'Respekt, disiplin og selvkontroll',
              'Aggresjon og sinne',
              'Å vinne for enhver pris',
              'Bare fysisk styrke',
            ],
          },
        ],
        solution: 'Kampsport vektlegger respekt for motstandere og trenere, disiplin i trening, og selvkontroll i utførelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er parkour?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv hva parkour innebærer.',
            solution: 'Effektiv forflytning over hindringer ved bruk av hopp, klatring og rulling',
            multipleChoiceOptions: [
              'Effektiv forflytning over hindringer ved bruk av hopp, klatring og rulling',
              'En type dans',
              'Løping på bane',
              'En kampsport',
            ],
          },
        ],
        solution: 'Parkour handler om å forflytte seg effektivt gjennom omgivelsene ved å overkomme hindringer med ulike teknikker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen mellom buldring og sportsklatring?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen på klatreformene.',
            solution: 'Buldring er lav høyde uten tau, sportsklatring er høyere med tau og sikring',
            multipleChoiceOptions: [
              'Buldring er lav høyde uten tau, sportsklatring er høyere med tau og sikring',
              'De er det samme',
              'Buldring er farligere',
              'Sportsklatring er uten utstyr',
            ],
          },
        ],
        solution: 'Buldring gjøres på lave vegger med tjukk matte under, mens sportsklatring involverer høyere vegger med tau og sikringsutstyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg en alternativ aktivitet du kunne tenke deg å prøve og forklar hvorfor.',
        solution: 'Svar vil variere. Et godt svar inkluderer hvilken aktivitet, hva som tiltaler ved den, og hvilke treningseffekter den kan gi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Skadeforebygging
// ============================================================================

export const CHAPTER_KROPPSOVING_10_8: TextbookChapter = {
  id: 'kroppsoving-10-8',
  courseId: 'kroppsoving-10',
  chapterNumber: '8',
  title: 'Skadeforebygging',
  description: 'Lær om hvordan du kan forebygge skader og hva du gjør hvis skade oppstår.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forebygge skader gjennom riktig oppvarming og teknikk',
    'håndtere vanlige idrettsskader',
  ],
  content: [
    {
      id: 'kroppsoving-10-8-intro',
      type: 'text',
      content: `Skader er en del av idrett og fysisk aktivitet, men mange kan forebygges. God oppvarming, riktig teknikk og fornuftig progresjon er nøkkelfaktorer for å holde seg skadefri.`,
    },
    {
      id: 'kroppsoving-10-8-def-1',
      type: 'definition',
      title: 'PRICE-prinsippet',
      content: `PRICE er et akronym for førstehjelp ved akutte skader: Protection (beskyttelse), Rest (hvile), Ice (is), Compression (kompresjon) og Elevation (elevasjon/heving).`,
    },
    {
      id: 'kroppsoving-10-8-text-1',
      type: 'text',
      content: `**Oppvarming - Nøkkelen til skadeforebygging**

**Hvorfor varme opp?**
- Øker kroppstemperaturen
- Øker blodgjennomstrømningen til musklene
- Forbereder ledd og muskler på belastning
- Skjerper mentalt fokus

**God oppvarmingsstruktur**:
1. **Generell oppvarming** (5-10 min)
   - Lett jogging, sykkel, hopping
   - Puls opp, bli varm

2. **Dynamisk tøying** (5 min)
   - Bevegelser som strekker muskler i bevegelse
   - Armsvinger, bensving, utfall med rotasjon

3. **Aktivitetsspesifikk oppvarming** (5-10 min)
   - Øvelser som ligner aktiviteten
   - Gradvis økning av intensitet`,
    },
    {
      id: 'kroppsoving-10-8-text-2',
      type: 'text',
      content: `**Vanlige skadetyper**

**Akutte skader** (plutselige):
- Forstuing: Leddbånd strekkes/ryker
- Forstrekning: Muskelfibrer skades
- Brudd: Bein knekker
- Hjernerystelse: Slag mot hodet

**Belastningsskader** (over tid):
- Senebetennelse: Overbelastet sene
- Stressbrudd: Små sprekker i bein
- Løperkne: Smerte rundt kneskålen
- Skinnesmerter: Smerte langs skinnbeinet

**Risikofaktorer**:
- Dårlig oppvarming
- Feil teknikk
- For rask progresjon
- Utilstrekkelig restitusjon
- Gammelt eller feil utstyr`,
    },
    {
      id: 'kroppsoving-10-8-text-3',
      type: 'text',
      content: `**Førstehjelp ved skader - PRICE**

**P - Protection (Beskyttelse)**:
- Stopp aktiviteten
- Beskytt skadeområdet mot mer skade

**R - Rest (Hvile)**:
- Ikke belast skaden
- Hvil det skadde området

**I - Ice (Is)**:
- Kjøl ned området (15-20 min)
- Bruk ispakke med klut mellom
- Reduserer hevelse og smerte

**C - Compression (Kompresjon)**:
- Elastisk bandasje
- Stramt, men ikke for stramt
- Reduserer hevelse

**E - Elevation (Elevasjon)**:
- Hev skaden over hjertenivå
- Reduserer hevelse`,
    },
    {
      id: 'kroppsoving-10-8-text-4',
      type: 'text',
      content: `**Forebyggende øvelser**

**Styrke**:
- Sterk muskulatur beskytter ledd
- Fokus på stabiliserende muskler
- Balansert trening (agonist/antagonist)

**Balanse og propriosepsjon**:
- Balanseøvelser på ett bein
- Ustabile underlag
- Forbedrer leddstabilitet

**Bevegelighet**:
- Regelmessig tøying
- Unngå ekstrem stivhet
- Men også ekstrem overbevegelse

**Kjernemuskulatur**:
- Planke, sideliggende planke
- Dead bug, bird dog
- Viktig for ryggstabilitet`,
    },
    {
      id: 'kroppsoving-10-8-warning-1',
      type: 'warning',
      title: 'Når bør du søke hjelp?',
      content: `Oppsøk lege ved: Sterk smerte, tydelig feilstilling, kraftig hevelse, nummenhet, ikke kunne belaste, hjernerystelsessymptomer, eller hvis smerten ikke bedrer seg etter noen dager.`,
    },
    {
      id: 'kroppsoving-10-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står PRICE for?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig betydning av PRICE.',
            solution: 'Protection, Rest, Ice, Compression, Elevation',
            multipleChoiceOptions: [
              'Protection, Rest, Ice, Compression, Elevation',
              'Pain, Rest, Ice, Cold, Exercise',
              'Protect, Run, Ice, Care, Elevate',
              'Push, Rest, Ice, Compress, End',
            ],
          },
        ],
        solution: 'PRICE står for Protection (beskyttelse), Rest (hvile), Ice (is), Compression (kompresjon) og Elevation (heving).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom akutte skader og belastningsskader?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom skadetypene.',
            solution: 'Akutte oppstår plutselig, belastningsskader utvikles over tid',
            multipleChoiceOptions: [
              'Akutte oppstår plutselig, belastningsskader utvikles over tid',
              'De er det samme',
              'Belastningsskader er mer alvorlige',
              'Akutte skader er bare små skader',
            ],
          },
        ],
        solution: 'Akutte skader skjer plutselig (fall, kollisjon), mens belastningsskader utvikles gradvis ved gjentatt overbelastning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er oppvarming viktig for skadeforebygging?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor oppvarming forebygger skader.',
            solution: 'Det øker blodgjennomstrømning og forbereder muskler og ledd på belastning',
            multipleChoiceOptions: [
              'Det øker blodgjennomstrømning og forbereder muskler og ledd på belastning',
              'Det bare føles godt',
              'Det er ikke viktig',
              'Det gjør deg trett',
            ],
          },
        ],
        solution: 'Oppvarming øker kroppstemperatur og blodgjennomstrømning, gjør muskler og sener mer elastiske, og forbereder kroppen på belastning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor lenge bør du ha is på en akutt skade?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig tid for nedkjøling.',
            solution: '15-20 minutter',
            multipleChoiceOptions: [
              '15-20 minutter',
              '5 minutter',
              '1 time',
              'Hele natten',
            ],
          },
        ],
        solution: '15-20 minutter med is, med klut mellom is og hud, gjentas flere ganger med pauser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke øvelser kan forebygge skader?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg forebyggende øvelser.',
            solution: 'Styrke-, balanse- og kjernemuskulaturøvelser',
            multipleChoiceOptions: [
              'Styrke-, balanse- og kjernemuskulaturøvelser',
              'Bare løping',
              'Ingen øvelser forebygger',
              'Bare tøying',
            ],
          },
        ],
        solution: 'En kombinasjon av styrke, balanse, bevegelighet og kjernemuskulaturtrening gir best skadeforebygging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag et oppvarmingsprogram for en aktivitet du driver med.',
        solution: 'Et godt program inkluderer: 5-10 min lett aktivitet (jogging), dynamiske tøyeøvelser (armsvinger, bensving), og aktivitetsspesifikke øvelser med gradvis økt intensitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9: Trening og livsstil
// ============================================================================

export const CHAPTER_KROPPSOVING_10_9: TextbookChapter = {
  id: 'kroppsoving-10-9',
  courseId: 'kroppsoving-10',
  chapterNumber: '9',
  title: 'Trening og livsstil',
  description: 'Lær om sammenhengen mellom fysisk aktivitet, livsstil og livskvalitet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over betydningen av fysisk aktivitet for livskvalitet',
    'utvikle gode vaner for en aktiv livsstil',
  ],
  content: [
    {
      id: 'kroppsoving-10-9-intro',
      type: 'text',
      content: `Fysisk aktivitet er mer enn bare trening - det er en del av en helhetlig livsstil. Valg du gjør nå legger grunnlaget for helse og livskvalitet resten av livet.`,
    },
    {
      id: 'kroppsoving-10-9-def-1',
      type: 'definition',
      title: 'Livskvalitet',
      content: `Livskvalitet er en persons subjektive opplevelse av tilfredshet og velvære i livet. Det inkluderer fysisk, psykisk og sosial helse, samt følelse av mening og mestring.`,
    },
    {
      id: 'kroppsoving-10-9-text-1',
      type: 'text',
      content: `**Fysisk aktivitet og velvære**

**Fysiske effekter**:
- Bedre kondisjon og styrke
- Sunn kroppsvekt
- Sterkere immunforsvar
- Lavere risiko for sykdom

**Psykiske effekter**:
- Bedre humør (endorfiner)
- Redusert stress og angst
- Økt selvtillit
- Bedre søvn

**Sosiale effekter**:
- Fellesskap og tilhørighet
- Venner gjennom aktivitet
- Samarbeid og kommunikasjon
- Positive opplevelser`,
    },
    {
      id: 'kroppsoving-10-9-text-2',
      type: 'text',
      content: `**Barrierer og løsninger**

**Vanlige barrierer**:
- "Har ikke tid" - Planlegg aktivitet som møter
- "Er for sliten" - Aktivitet gir energi
- "Er ikke god nok" - Alle starter et sted
- "Ingen å trene med" - Prøv grupper eller apper
- "Kjedelig" - Finn aktiviteter du liker

**Motivasjonsstrategier**:
- Sett konkrete mål
- Finn en treningspartner
- Varier aktivitetene
- Belønn deg selv
- Fokuser på hvordan det føles etterpå
- Start smått - litt er bedre enn ingenting`,
    },
    {
      id: 'kroppsoving-10-9-text-3',
      type: 'text',
      content: `**Balanse i livet**

**Livsstilsfaktorer**:
- Fysisk aktivitet: Minimum 60 min daglig for ungdom
- Søvn: 8-10 timer for ungdom
- Ernæring: Balansert kosthold
- Sosiale relasjoner: Tid med venner og familie
- Skjermtid: Begrens inaktiv skjermtid
- Hvile og restitusjon: Tid til å slappe av

**Sunn balanse**:
- Aktivitet + hvile = optimal utvikling
- Ikke overdriv - lytt til kroppen
- Ha plass til ulike interesser
- Prestasjoner er ikke alt`,
    },
    {
      id: 'kroppsoving-10-9-text-4',
      type: 'text',
      content: `**Bygge varige vaner**

**Hvordan vaner dannes**:
1. Beslutning: Bestem deg for endring
2. Gjentakelse: Gjør det regelmessig
3. Automatisering: Det blir naturlig

**Tips for varige vaner**:
- Start med noe lite og oppnåelig
- Knytt ny vane til eksisterende rutine
- Gjør det lett å starte (legg frem treningstøy)
- Spor fremgang
- Vær tålmodig - det tar tid

**Identitet**:
- Tenk på deg selv som "en som trener"
- Det du tror om deg selv påvirker handlingene
- Små handlinger former hvem du er`,
    },
    {
      id: 'kroppsoving-10-9-tip-1',
      type: 'tip',
      title: 'Den beste treningen',
      content: `Den beste treningen er den du faktisk gjør. Finn noe du liker, gjør det regelmessig, og juster etter hvert som du lærer mer om deg selv.`,
    },
    {
      id: 'kroppsoving-10-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med livskvalitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av livskvalitet.',
            solution: 'Subjektiv opplevelse av tilfredshet og velvære i livet',
            multipleChoiceOptions: [
              'Subjektiv opplevelse av tilfredshet og velvære i livet',
              'Hvor mye penger du har',
              'Hvor god form du er i',
              'Antall venner',
            ],
          },
        ],
        solution: 'Livskvalitet handler om din egen opplevelse av velvære på fysisk, psykisk og sosialt plan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke psykiske effekter har fysisk aktivitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg psykiske effekter av aktivitet.',
            solution: 'Bedre humør, redusert stress og økt selvtillit',
            multipleChoiceOptions: [
              'Bedre humør, redusert stress og økt selvtillit',
              'Ingen psykiske effekter',
              'Økt stress',
              'Bare fysiske effekter',
            ],
          },
        ],
        solution: 'Fysisk aktivitet frigir endorfiner, reduserer stresshormoner, og gir mestringsopplevelser som styrker selvtilliten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en god respons på barrieren "har ikke tid"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en god løsning på tidsproblemer.',
            solution: 'Planlegg aktivitet som faste avtaler og prioriter det',
            multipleChoiceOptions: [
              'Planlegg aktivitet som faste avtaler og prioriter det',
              'Gi opp trening',
              'Trene bare i ferier',
              'Vente til du har mer tid',
            ],
          },
        ],
        solution: 'Tid må ofte skapes gjennom prioritering. Sett av faste tidspunkter og behandle trening som en viktig avtale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor mye fysisk aktivitet anbefales for ungdom daglig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg anbefalt aktivitetsmengde for ungdom.',
            solution: 'Minimum 60 minutter',
            multipleChoiceOptions: [
              'Minimum 60 minutter',
              '15 minutter',
              '3 timer',
              'Ingen anbefaling',
            ],
          },
        ],
        solution: 'Ungdom anbefales minimum 60 minutter moderat til intens fysisk aktivitet daglig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan du gjøre en ny vane lettere å starte?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en strategi for å starte nye vaner.',
            solution: 'Gjør det lett (legg frem utstyr) og knytt det til eksisterende rutine',
            multipleChoiceOptions: [
              'Gjør det lett (legg frem utstyr) og knytt det til eksisterende rutine',
              'Vent på inspirasjon',
              'Start med det vanskeligste',
              'Tenk ikke på det',
            ],
          },
        ],
        solution: 'Fjern hindringer (legg frem utstyr kvelden før) og knytt den nye vanen til noe du allerede gjør (etter frokost = tur).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Identifiser din største barriere for fysisk aktivitet og lag en plan for å overkomme den.',
        solution: 'Eksempel: Barriere = "For sliten etter skolen". Plan: 1) Legge treningstøy klar, 2) Ta en kort tur rett etter skolen før jeg setter meg ned, 3) Minne meg selv på at jeg alltid føler meg bedre etterpå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10: Egenvurdering og utvikling
// ============================================================================

export const CHAPTER_KROPPSOVING_10_10: TextbookChapter = {
  id: 'kroppsoving-10-10',
  courseId: 'kroppsoving-10',
  chapterNumber: '10',
  title: 'Egenvurdering og utvikling',
  description: 'Lær å vurdere egen kompetanse, sette mål og planlegge for videre utvikling.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere egen kompetanse og utvikling',
    'sette mål og lage planer for videre utvikling',
  ],
  content: [
    {
      id: 'kroppsoving-10-10-intro',
      type: 'text',
      content: `Egenvurdering handler om å reflektere over egen læring og utvikling. Ved å være bevisst på dine styrker og utviklingsområder kan du ta ansvar for egen læring og sette realistiske mål.`,
    },
    {
      id: 'kroppsoving-10-10-def-1',
      type: 'definition',
      title: 'Egenvurdering',
      content: `Egenvurdering er prosessen der du reflekterer over og vurderer din egen kompetanse, innsats og utvikling. Det innebærer å identifisere styrker, svakheter og områder for forbedring.`,
    },
    {
      id: 'kroppsoving-10-10-text-1',
      type: 'text',
      content: `**Områder for egenvurdering i kroppsøving**

**Ferdigheter**:
- Tekniske ferdigheter i ulike aktiviteter
- Spillforståelse og taktikk
- Koordinasjon, balanse, styrke, utholdenhet

**Kunnskap**:
- Forståelse av treningslære
- Kunnskap om kropp og helse
- Regler og fair play

**Holdninger**:
- Innsats og deltakelse
- Samarbeid og respekt
- Vilje til å prøve nye ting
- Evne til å ta imot veiledning

**Selvregulering**:
- Evne til å planlegge egen trening
- Gjennomføringsevne
- Tilpasning og justering`,
    },
    {
      id: 'kroppsoving-10-10-text-2',
      type: 'text',
      content: `**Hvordan vurdere deg selv**

**Refleksjonsspørsmål**:
- Hva kan jeg godt?
- Hva strever jeg med?
- Hva har jeg lært i år?
- Hva vil jeg bli bedre på?
- Hva må jeg gjøre for å nå målene mine?

**Verktøy for egenvurdering**:
- Treningsdagbok: Logg av treninger og følelser
- Video: Film deg selv for å se teknikk
- Tester: Måling av fysiske egenskaper
- Sammenligning: Med tidligere prestasjoner (ikke andre)

**Tilbakemelding**:
- Be om tilbakemelding fra lærer/trener
- Lytt til medelevers observasjoner
- Vær åpen for konstruktiv kritikk`,
    },
    {
      id: 'kroppsoving-10-10-text-3',
      type: 'text',
      content: `**Målsetting for utvikling**

**SMART-mål**:
- **S**pesifikt: Konkret og tydelig
- **M**ålbart: Kan måles eller evalueres
- **A**mbisiøst: Utfordrende, men oppnåelig
- **R**ealistisk: Mulig å nå
- **T**idsbestemt: Har en deadline

**Typer mål**:
- Kortsiktige: Denne uken, denne måneden
- Langsiktige: Dette semesteret, dette året
- Prosessmål: Fokus på hva du skal gjøre
- Resultatmål: Fokus på hva du vil oppnå

**Eksempler på gode mål**:
- "Jeg skal trene utholdenhet 3 ganger i uken i 4 uker"
- "Jeg skal lære meg å slå en god serve i volleyball"
- "Jeg skal delta aktivt i alle gymtimer dette semesteret"`,
    },
    {
      id: 'kroppsoving-10-10-text-4',
      type: 'text',
      content: `**Utviklingsplan**

**Steg for å lage en utviklingsplan**:

1. **Kartlegging**: Hvor er jeg nå?
   - Liste over styrker
   - Liste over utviklingsområder

2. **Målsetting**: Hvor vil jeg?
   - Velg 1-3 hovedmål
   - Formuler dem som SMART-mål

3. **Strategi**: Hvordan kommer jeg dit?
   - Konkrete tiltak og aktiviteter
   - Ressurser jeg trenger
   - Hvem kan hjelpe meg

4. **Tidsplan**: Når skal jeg gjøre hva?
   - Milepæler underveis
   - Tidspunkt for evaluering

5. **Evaluering**: Hvordan gikk det?
   - Hva fungerte?
   - Hva må justeres?
   - Nye mål fremover`,
    },
    {
      id: 'kroppsoving-10-10-tip-1',
      type: 'tip',
      title: 'Vekstmentalitet',
      content: `Ha en vekstmentalitet - tro på at du kan utvikle deg gjennom innsats og læring. Feil og utfordringer er muligheter for vekst, ikke tegn på at du ikke er god nok.`,
    },
    {
      id: 'kroppsoving-10-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er egenvurdering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av egenvurdering.',
            solution: 'Å reflektere over og vurdere egen kompetanse og utvikling',
            multipleChoiceOptions: [
              'Å reflektere over og vurdere egen kompetanse og utvikling',
              'Å sammenligne seg med andre',
              'Å få karakter av læreren',
              'Å kritisere seg selv',
            ],
          },
        ],
        solution: 'Egenvurdering er en refleksjonsprosess der du vurderer dine styrker, svakheter og utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr S i SMART-mål?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig betydning av S.',
            solution: 'Spesifikt',
            multipleChoiceOptions: [
              'Spesifikt',
              'Smart',
              'Stort',
              'Simpelt',
            ],
          },
        ],
        solution: 'S står for Spesifikt - målet skal være konkret og tydelig, ikke vagt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke verktøy kan du bruke for egenvurdering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg verktøy for egenvurdering.',
            solution: 'Treningsdagbok, video og tester',
            multipleChoiceOptions: [
              'Treningsdagbok, video og tester',
              'Bare karakterer',
              'Ingenting',
              'Sosiale medier',
            ],
          },
        ],
        solution: 'Treningsdagbok, videoanalyse av egen teknikk, og fysiske tester er nyttige verktøy for egenvurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen mellom prosessmål og resultatmål?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom måltypene.',
            solution: 'Prosessmål fokuserer på hva du skal gjøre, resultatmål på hva du vil oppnå',
            multipleChoiceOptions: [
              'Prosessmål fokuserer på hva du skal gjøre, resultatmål på hva du vil oppnå',
              'De er det samme',
              'Resultatmål er alltid bedre',
              'Prosessmål handler om prosenter',
            ],
          },
        ],
        solution: 'Prosessmål handler om handlinger du har kontroll over (trene 3 ganger i uken), mens resultatmål handler om utfall (løpe 5 km på under 25 min).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva menes med vekstmentalitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva vekstmentalitet innebærer.',
            solution: 'Tro på at du kan utvikle deg gjennom innsats og læring',
            multipleChoiceOptions: [
              'Tro på at du kan utvikle deg gjennom innsats og læring',
              'At evner er medfødt og faste',
              'Å alltid tenke positivt',
              'Å være bedre enn andre',
            ],
          },
        ],
        solution: 'Vekstmentalitet er troen på at ferdigheter kan utvikles gjennom innsats, strategier og veiledning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag et SMART-mål for noe du vil bli bedre på i kroppsøving.',
        solution: 'Eksempel: "Jeg skal forbedre utholdenhet ved å løpe eller sykle i minst 30 minutter, 3 ganger i uken, de neste 6 ukene. Jeg måler fremgang ved å se hvor langt jeg kommer på 30 minutter."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-10-10-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-10-10-ex-7',
        number: '7',
        type: 'classic',
        task: 'Gjennomfør en egenvurdering: List opp tre styrker og tre utviklingsområder du har i kroppsøving.',
        solution: 'Eksempel på styrker: God utholdenhet, samarbeidsvillig, prøver alltid nye aktiviteter. Eksempel på utviklingsområder: Ballteknikk, bevegelighet, kunne ha bedre innsats på dager jeg er sliten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const KROPPSOVING_10_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_10_1,
  CHAPTER_KROPPSOVING_10_2,
  CHAPTER_KROPPSOVING_10_3,
  CHAPTER_KROPPSOVING_10_4,
  CHAPTER_KROPPSOVING_10_5,
  CHAPTER_KROPPSOVING_10_6,
  CHAPTER_KROPPSOVING_10_7,
  CHAPTER_KROPPSOVING_10_8,
  CHAPTER_KROPPSOVING_10_9,
  CHAPTER_KROPPSOVING_10_10,
];
