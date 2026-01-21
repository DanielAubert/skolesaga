/**
 * Mat og helse 7. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for mat og helse på 7. trinn
 * Målgruppe: 12-13 åringer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Næringsstoffer i dybden
// ============================================================================

export const CHAPTER_MAT_7_1_1: TextbookChapter = {
  id: 'mat-7-1-1',
  courseId: 'mat-7',
  chapterNumber: '1.1',
  title: 'Næringsstoffer i dybden',
  description: 'Lær mer om vitaminer, mineraler og hvordan kroppen bruker energi fra mat.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare funksjonene til ulike næringsstoffer',
    'forstå sammenhengen mellom næringsstoffer og kroppens funksjoner',
  ],
  content: [
    {
      id: 'mat-7-1-1-intro',
      type: 'text',
      content: `I 5. og 6. klasse lærte du om de grunnleggende næringsstoffene. Nå skal vi gå dypere inn i hvordan kroppen bruker vitaminer, mineraler og energi fra maten du spiser.`,
    },
    {
      id: 'mat-7-1-1-def-1',
      type: 'definition',
      title: 'Makronæringsstoffer',
      content: `Makronæringsstoffer er næringsstoffer kroppen trenger i store mengder: karbohydrater, proteiner og fett. De gir kroppen energi og byggematerialer.`,
    },
    {
      id: 'mat-7-1-1-def-2',
      type: 'definition',
      title: 'Mikronæringsstoffer',
      content: `Mikronæringsstoffer er næringsstoffer kroppen trenger i små mengder: vitaminer og mineraler. De er nødvendige for at kroppen skal fungere riktig, selv om de ikke gir energi.`,
    },
    {
      id: 'mat-7-1-1-text-1',
      type: 'text',
      title: 'Karbohydrater - Kroppens foretrukne drivstoff',
      content: `Karbohydrater er kroppens viktigste energikilde. Når du spiser karbohydrater, brytes de ned til glukose (blodsukker) som cellene bruker som drivstoff.

**Typer karbohydrater:**

**Enkle karbohydrater (raske)**
- Finnes i: sukker, godteri, brus, hvitt brød
- Tas raskt opp i blodet
- Gir rask energi, men den varer kort

**Sammensatte karbohydrater (langsomme)**
- Finnes i: grovt brød, fullkornspasta, havregryn, grønnsaker
- Tas saktere opp i blodet
- Gir jevn energi over lengre tid

**Kostfiber**
- En type karbohydrat kroppen ikke kan bryte ned
- Viktig for fordøyelsen og metthetsfølelse
- Finnes i: fullkorn, frukt, grønnsaker, belgfrukter`,
    },
    {
      id: 'mat-7-1-1-text-2',
      type: 'text',
      title: 'Proteiner - Kroppens byggesteiner',
      content: `Proteiner er bygget opp av aminosyrer. Kroppen bruker 20 ulike aminosyrer, og 9 av disse må vi få gjennom maten.

**Proteinenes oppgaver:**
- Bygger og reparerer muskler
- Danner enzymer som styrer kjemiske reaksjoner
- Lager antistoffer som bekjemper sykdom
- Bygger opp hår, negler og hud

**Gode proteinkilder:**
- Animalske: kjøtt, fisk, egg, melkeprodukter
- Plantbaserte: bønner, linser, nøtter, tofu, quinoa

Ved å kombinere ulike plantbaserte proteinkilder (for eksempel ris og bønner) kan du få i deg alle de essensielle aminosyrene uten å spise kjøtt.`,
    },
    {
      id: 'mat-7-1-1-text-3',
      type: 'text',
      title: 'Fett - Mer enn bare energi',
      content: `Fett har fått et dårlig rykte, men kroppen trenger fett for å fungere. Det gjelder bare å velge de riktige typene.

**Ulike typer fett:**

**Umettet fett (sunt fett)**
- Finnes i: fisk, nøtter, avokado, olivenolje
- Bra for hjerte og blodårer
- Hjelper kroppen ta opp vitaminer

**Mettet fett (bør begrenses)**
- Finnes i: smør, fløte, fett kjøtt, ost
- Kan øke kolesterolet
- OK i moderate mengder

**Transfett (bør unngås)**
- Finnes i: noe bearbeidet mat og snacks
- Skadelig for hjertet
- De fleste produsenter har fjernet dette

**Fettets oppgaver:**
- Lagrer energi til senere bruk
- Beskytter indre organer
- Holder kroppen varm
- Nødvendig for opptak av vitamin A, D, E og K`,
    },
    {
      id: 'mat-7-1-1-tip-1',
      type: 'tip',
      title: 'Omega-3 fettsyrer',
      content: `Omega-3 er en spesielt viktig type umettet fett som er bra for hjernen og hjertet. Du finner det i fet fisk som laks, makrell og sild. Prøv å spise fisk 2-3 ganger i uken!`,
    },
    {
      id: 'mat-7-1-1-text-4',
      type: 'text',
      title: 'Vitaminer - Små, men viktige',
      content: `Vitaminer er organiske stoffer kroppen trenger i små mengder. De deles inn i to grupper:

**Vannløselige vitaminer**
- Vitamin C og B-vitaminene
- Lagres ikke i kroppen - må tilføres daglig
- Overskudd skilles ut med urinen

**Fettløselige vitaminer**
- Vitamin A, D, E og K
- Lagres i fettvev og lever
- Kan bli skadelig i for store doser

| Vitamin | Funksjon | Gode kilder |
|---------|----------|-------------|
| A | Syn, hud, immunforsvar | Gulrot, lever, egg |
| B-vitaminer | Energiomsetning, nervesystem | Fullkorn, kjøtt, melk |
| C | Immunforsvar, sårhelning | Sitrusfrukter, paprika, bær |
| D | Sterke knokler, immunforsvar | Fisk, soleksponering |
| E | Antioksidant, cellebeskyttelse | Nøtter, planteoljer |
| K | Blodkoagulering | Grønne bladgrønnsaker |`,
    },
    {
      id: 'mat-7-1-1-text-5',
      type: 'text',
      title: 'Mineraler - Uorganiske hjelpere',
      content: `Mineraler er uorganiske stoffer som kroppen trenger for mange viktige funksjoner.

**De viktigste mineralene:**

**Kalsium**
- Bygger sterke knokler og tenner
- Viktig for muskelsammentrekninger
- Kilder: melk, ost, brokkoli, grønnkål

**Jern**
- Frakter oksygen i blodet
- Viktig for energi og konsentrasjon
- Kilder: rødt kjøtt, bønner, spinat, fullkorn

**Sink**
- Viktig for immunforsvaret og sårhelning
- Kilder: kjøtt, skalldyr, nøtter, frø

**Magnesium**
- Viktig for muskler og nerver
- Kilder: nøtter, fullkorn, grønne grønnsaker

**Kalium**
- Regulerer væskebalanse og blodtrykk
- Kilder: bananer, poteter, avokado`,
    },
    {
      id: 'mat-7-1-1-warning-1',
      type: 'warning',
      title: 'Jernmangel',
      content: `Jernmangel er den vanligste næringsstoffmangelen i verden. Symptomer kan være trøtthet, svimmelhet og dårlig konsentrasjon. Tenåringsjenter er spesielt utsatt på grunn av menstruasjon. Spis jernrik mat som kjøtt, bønner og grønne grønnsaker.`,
    },
    {
      id: 'mat-7-1-1-text-6',
      type: 'text',
      title: 'Energi og kalorier',
      content: `Energien i mat måles i kilokalorier (kcal) eller kilojoule (kJ). Kroppen trenger energi til alt den gjør - fra å puste og tenke til å løpe og leke.

**Energibehov:**
En 12-13 åring trenger omtrent 2000-2500 kcal per dag, avhengig av aktivitetsnivå.

**Energiinnhold i næringsstoffene:**
- 1 gram karbohydrater = 4 kcal
- 1 gram protein = 4 kcal
- 1 gram fett = 9 kcal

**Energibalanse:**
- Hvis du spiser like mye energi som du bruker = stabil vekt
- Hvis du spiser mer enn du bruker = overskuddet lagres som fett
- Hvis du spiser mindre enn du bruker = kroppen bruker lagret energi

Det viktigste er ikke å telle kalorier, men å spise variert og sunt!`,
    },
    {
      id: 'mat-7-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-7-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på makronæringsstoffer og mikronæringsstoffer?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på makronæringsstoffer og mikronæringsstoffer?',
            solution: 'Makronæringsstoffer trengs i store mengder og gir energi, mikronæringsstoffer trengs i små mengder og gir ikke energi',
            multipleChoiceOptions: ['Makronæringsstoffer trengs i store mengder og gir energi, mikronæringsstoffer trengs i små mengder og gir ikke energi', 'Det er ingen forskjell', 'Mikronæringsstoffer gir mer energi', 'Makronæringsstoffer er vitaminer'],
          },
        ],
        solution: 'Makronæringsstoffer (karbohydrater, proteiner, fett) trengs i store mengder og gir energi. Mikronæringsstoffer (vitaminer og mineraler) trengs i små mengder og er nødvendige for kroppens funksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-7-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er sammensatte karbohydrater bedre enn enkle karbohydrater?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er sammensatte karbohydrater bedre enn enkle karbohydrater?',
            solution: 'De gir jevnere og mer langvarig energi',
            multipleChoiceOptions: ['De gir jevnere og mer langvarig energi', 'De smaker bedre', 'De er billigere', 'De inneholder mer sukker'],
          },
        ],
        solution: 'Sammensatte karbohydrater brytes ned langsommere og gir jevn energi over tid, mens enkle karbohydrater gir rask energi som ikke varer lenge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-7-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken type fett bør du velge mest av?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken type fett bør du velge mest av?',
            solution: 'Umettet fett',
            multipleChoiceOptions: ['Umettet fett', 'Mettet fett', 'Transfett', 'All fett er like'],
          },
        ],
        solution: 'Umettet fett fra fisk, nøtter og planteoljer er sunt for hjertet og bør prioriteres fremfor mettet fett og transfett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-7-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilket mineral er viktig for å frakte oksygen i blodet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket mineral er viktig for å frakte oksygen i blodet?',
            solution: 'Jern',
            multipleChoiceOptions: ['Jern', 'Kalsium', 'Kalium', 'Sink'],
          },
        ],
        solution: 'Jern er en viktig del av hemoglobinet i de røde blodcellene som frakter oksygen rundt i kroppen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-7-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en oversikt over hva du spiste til frokost i dag. Hvilke næringsstoffer fikk du i deg?',
        hints: ['Tenk på alle ingrediensene i måltidet', 'Kategoriser dem som karbohydrater, proteiner, fett, vitaminer eller mineraler'],
        solution: 'Eksempel: Havregrøt med melk og bær gir karbohydrater (havre), protein (melk), vitaminer og mineraler (bær), og litt fett (melk).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Kosthold og helse
// ============================================================================

export const CHAPTER_MAT_7_1_2: TextbookChapter = {
  id: 'mat-7-1-2',
  courseId: 'mat-7',
  chapterNumber: '1.2',
  title: 'Kosthold og helse',
  description: 'Forstå sammenhengen mellom det du spiser og din fysiske og mentale helse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå kostholdets betydning for helsen',
    'reflektere over egne matvalg',
  ],
  content: [
    {
      id: 'mat-7-1-2-intro',
      type: 'text',
      content: `"Du er hva du spiser" er et gammelt ordtak som faktisk har mye sannhet i seg. Maten du spiser påvirker ikke bare kroppen din, men også humøret, konsentrasjonen og energinivået ditt.`,
    },
    {
      id: 'mat-7-1-2-def-1',
      type: 'definition',
      title: 'Kosthold',
      content: `Kosthold er summen av all mat og drikke du inntar over tid. Et godt kosthold gir kroppen det den trenger for å fungere optimalt.`,
    },
    {
      id: 'mat-7-1-2-text-1',
      type: 'text',
      title: 'Kostholdets påvirkning på kroppen',
      content: `Det du spiser påvirker kroppen på mange måter:

**Fysisk helse**
- Energinivå og utholdenhet
- Vekst og utvikling
- Immunforsvar og evne til å bekjempe sykdom
- Hud, hår og negler
- Fordøyelse og tarmhelse

**Mental helse**
- Humør og følelser
- Konsentrasjon og læringsevne
- Søvnkvalitet
- Stresshåndtering

**Langsiktig helse**
Et sunt kosthold i ung alder legger grunnlaget for god helse resten av livet. Det kan forebygge livsstilssykdommer som:
- Hjerte- og karsykdommer
- Type 2-diabetes
- Enkelte kreftformer
- Overvekt`,
    },
    {
      id: 'mat-7-1-2-text-2',
      type: 'text',
      title: 'Helsedirektoratets kostråd',
      content: `De norske kostrådene er basert på forskning og gir oss veiledning om hva som er sunt å spise:

**1. Ha et variert kosthold**
Spis mye grønnsaker, frukt, bær, grove kornprodukter og fisk.

**2. Spis minst 5 porsjoner grønnsaker og frukt hver dag**
La grønnsakene utgjøre størsteparten.

**3. Velg grove kornprodukter**
Grovt brød, fullkornspasta og havregryn.

**4. Spis fisk 2-3 ganger i uken**
Spesielt fet fisk som laks, makrell og sild.

**5. Velg magert kjøtt og magre kjøttprodukter**
Begrens mengden rødt kjøtt og bearbeidet kjøtt.

**6. Velg magre meieriprodukter**
Melk, yoghurt og ost er gode kalsiumkilder.

**7. Bruk oljer og myk margarin**
Begrens mengden mettet fett.

**8. Begrens sukker**
Særlig sukkerholdig drikke og godteri.

**9. Velg mat med lite salt**
For mye salt kan øke blodtrykket.

**10. Drikk vann**
Vann er den beste tørstedrikken.`,
    },
    {
      id: 'mat-7-1-2-text-3',
      type: 'text',
      title: 'Mat og humør',
      content: `Forskning viser at det du spiser kan påvirke humøret ditt direkte.

**Mat som kan gjøre deg gladere:**
- Fisk med omega-3 fettsyrer
- Fullkornsprodukter
- Grønnsaker og frukt
- Nøtter og frø
- Fermentert mat (yoghurt, surkål)

**Mat som kan påvirke humøret negativt:**
- Mye sukker (gir raskt energidropp)
- Bearbeidet mat med lite næring
- For mye koffein (kan gi uro og søvnproblemer)

**Hvorfor påvirker mat humøret?**
- Hjernen trenger riktig næring for å produsere signalstoffer som serotonin (lykkestoffet)
- Stabilt blodsukker gir stabilt humør
- Tarmhelsen er koblet til mental helse - tarmen kalles "den andre hjernen"`,
    },
    {
      id: 'mat-7-1-2-tip-1',
      type: 'tip',
      title: 'Frokostens betydning',
      content: `Frokost er dagens viktigste måltid. Forskning viser at ungdom som spiser frokost presterer bedre på skolen, har bedre humør og gjør sunnere matvalg resten av dagen. Prøv å spise frokost hver dag!`,
    },
    {
      id: 'mat-7-1-2-text-4',
      type: 'text',
      title: 'Mat og konsentrasjon',
      content: `Hjernen din trenger riktig drivstoff for å fungere godt på skolen.

**For god konsentrasjon:**
- Spis regelmessige måltider (ikke hopp over frokost!)
- Velg mat som gir jevn energi (grove kornprodukter, grønnsaker)
- Drikk nok vann (dehydrering påvirker konsentrasjonen)
- Spis fisk for omega-3

**Hva skjer når blodsukkeret svinger?**
- Høyt blodsukker: kan føle seg overaktiv, urolig
- Lavt blodsukker: trøtt, ukonsentrert, irritabel

**Tips for skoledagen:**
- Start med en god frokost
- Ha en sunn matpakke med grovt brød
- Ta med frukt eller grønnsaker som mellommåltid
- Drikk vann i stedet for brus`,
    },
    {
      id: 'mat-7-1-2-text-5',
      type: 'text',
      title: 'Aktivitet og kosthold',
      content: `Fysisk aktivitet og kosthold henger sammen. Kroppen trenger mer energi og næring når du er aktiv.

**Før trening:**
- Spis et lett måltid 1-2 timer før
- Karbohydrater gir energi til aktiviteten
- Drikk vann

**Under trening:**
- Drikk vann ved lange økter
- Ved langvarig aktivitet kan du trenge energitilskudd

**Etter trening:**
- Protein hjelper musklene å restituere
- Karbohydrater fyller opp energilagrene
- Et måltid med begge deler er ideelt

**Myte:** Du trenger ikke proteintilskudd for å bygge muskler. Vanlig mat gir nok protein for de fleste.`,
    },
    {
      id: 'mat-7-1-2-warning-1',
      type: 'warning',
      title: 'Spiseforstyrrelser',
      content: `Det er viktig å ha et sunt forhold til mat. Noen unge utvikler usunne spisemønstre eller spiseforstyrrelser. Tegn kan være: ekstrem opptatthet av mat eller vekt, hoppe over måltider regelmessig, eller føle skyld etter å ha spist. Snakk med en voksen du stoler på hvis du eller noen du kjenner sliter med dette.`,
    },
    {
      id: 'mat-7-1-2-text-6',
      type: 'text',
      title: 'Kritisk tenkning om kosthold',
      content: `Det finnes mye informasjon om kosthold, men ikke alt er til å stole på.

**Vær kritisk til:**
- Dietter som lover raske resultater
- Påstander om "supermat" som kurerer alt
- Influensere som promoterer kosttilskudd
- Ekstreme kostholdsråd

**Pålitelige kilder:**
- Helsedirektoratet
- Folkehelseinstituttet
- Helsesøster/helsesykepleier
- Leger og ernæringsfysiologer

**Husk:** Et variert kosthold med vanlig mat er det beste for de aller fleste. Du trenger sjelden kosttilskudd hvis du spiser variert.`,
    },
    {
      id: 'mat-7-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-7-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke av disse kostrådene er riktige?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva sier kostrådene om fisk?',
            solution: 'Spis fisk 2-3 ganger i uken',
            multipleChoiceOptions: ['Spis fisk 2-3 ganger i uken', 'Spis fisk hver dag', 'Unngå fisk', 'Spis bare hvit fisk'],
          },
        ],
        solution: 'Kostrådene anbefaler å spise fisk 2-3 ganger i uken, spesielt fet fisk som inneholder omega-3 fettsyrer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-7-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan kan mat påvirke humøret ditt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan kan mat påvirke humøret ditt?',
            solution: 'Maten gir næring til hjernen og påvirker blodsukkernivået',
            multipleChoiceOptions: ['Maten gir næring til hjernen og påvirker blodsukkernivået', 'Mat påvirker ikke humøret', 'Bare godteri gjør deg glad', 'Mat påvirker bare kroppen, ikke hjernen'],
          },
        ],
        solution: 'Maten vi spiser gir næring til hjernen som trenger dette for å produsere signalstoffer. Stabilt blodsukker gir også stabilt humør.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-7-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er frokost viktig for skolearbeidet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er frokost viktig for skolearbeidet?',
            solution: 'Den gir energi og næring til hjernen så du kan konsentrere deg',
            multipleChoiceOptions: ['Den gir energi og næring til hjernen så du kan konsentrere deg', 'Det er bare en tradisjon', 'Frokost er ikke viktig', 'Frokost gjør deg trøtt'],
          },
        ],
        solution: 'Frokost gir hjernen energi og næring etter nattens faste, noe som forbedrer konsentrasjon, hukommelse og humør gjennom skoledagen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-7-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bør du være kritisk til når det gjelder kostholdsinformasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bør du være kritisk til når det gjelder kostholdsinformasjon?',
            solution: 'Dietter som lover raske resultater og influensere som selger kosttilskudd',
            multipleChoiceOptions: ['Dietter som lover raske resultater og influensere som selger kosttilskudd', 'Informasjon fra Helsedirektoratet', 'Råd fra legen', 'Alt du leser på internett er riktig'],
          },
        ],
        solution: 'Vær kritisk til ekstreme dietter, "supermat"-påstander og influensere som promoterer produkter. Stol på fagfolk og offentlige helsemyndigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-7-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Planlegg en sunn skoledag med måltider som gir jevn energi. Beskriv frokost, lunsj og et mellommåltid.',
        hints: ['Tenk på balanse mellom næringsstoffene', 'Velg mat som gir langsom energi', 'Inkluder frukt og grønnsaker'],
        solution: 'Eksempel: Frokost - havregrøt med bær og melk. Lunsj - grovt brød med kylling og agurk, et eple. Mellommåltid - en banan og noen nøtter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.1: Mattrygghet
// ============================================================================

export const CHAPTER_MAT_7_2_1: TextbookChapter = {
  id: 'mat-7-2-1',
  courseId: 'mat-7',
  chapterNumber: '2.1',
  title: 'Mattrygghet',
  description: 'Lær om hygiene, sikker oppbevaring og hvordan du unngår matbåren sykdom.',
  estimatedMinutes: 40,
  competenceGoals: [
    'praktisere god mattrygghet',
    'forstå hvordan matbårne sykdommer oppstår og forebygges',
  ],
  content: [
    {
      id: 'mat-7-2-1-intro',
      type: 'text',
      content: `Hvert år blir mange nordmenn syke av maten de spiser. Matforgiftning kan være alt fra ubehagelig til alvorlig. Ved å lære om mattrygghet kan du beskytte deg selv og andre.`,
    },
    {
      id: 'mat-7-2-1-def-1',
      type: 'definition',
      title: 'Mattrygghet',
      content: `Mattrygghet handler om å håndtere, tilberede og oppbevare mat på en måte som hindrer sykdom. Det inkluderer hygiene, temperaturkontroll og riktig oppbevaring.`,
    },
    {
      id: 'mat-7-2-1-def-2',
      type: 'definition',
      title: 'Matbåren sykdom',
      content: `Matbåren sykdom er sykdom forårsaket av å spise mat eller drikke som er forurenset med bakterier, virus, parasitter eller giftstoffer.`,
    },
    {
      id: 'mat-7-2-1-text-1',
      type: 'text',
      title: 'Vanlige årsaker til matforgiftning',
      content: `**Bakterier**
De vanligste årsakene til matforgiftning:

- **Salmonella**: Finnes ofte i rå egg, fjærfekjøtt
- **Campylobacter**: Vanlig i rått fjærfekjøtt
- **E. coli**: Kan finnes i rått kjøtt, upasteurisert melk
- **Listeria**: Kan vokse selv i kjøleskap, farlig for gravide

**Virus**
- **Norovirus**: Svært smittsomt, spres gjennom mat og kontakt

**Hvordan bakterier formerer seg:**
Bakterier trives best når de har:
- Næring (mat)
- Fuktighet
- Varme (mellom 5°C og 60°C - "faresonen")
- Tid

Under optimale forhold kan én bakterie bli til millioner på bare noen timer!`,
    },
    {
      id: 'mat-7-2-1-text-2',
      type: 'text',
      title: 'De fire hovedreglene for mattrygghet',
      content: `**1. Rengjør - Hold alt rent**
- Vask hendene grundig før matlaging og etter å ha tatt på rått kjøtt
- Vask skjærebrett, kniver og overflater
- Vask frukt og grønnsaker
- Bruk rene håndklær og kluter

**2. Skill - Unngå kryssforurensning**
- Bruk separate skjærebrett for rått kjøtt og andre matvarer
- Oppbevar rått kjøtt adskilt fra ferdig mat i kjøleskapet
- Vask hendene mellom håndtering av rå og ferdig mat

**3. Kok - Tilbered mat grundig**
- Kjøtt, fjærfe og egg skal gjennomstekes
- Rester skal varmes opp til gjennomvarm
- Bruk steketermometer for å være sikker

**4. Kjøl - Hold mat ved riktig temperatur**
- Kjøleskap: under 4°C
- Fryser: under -18°C
- Sett rester i kjøleskapet innen 2 timer
- Tin mat i kjøleskapet, ikke på benken`,
    },
    {
      id: 'mat-7-2-1-warning-1',
      type: 'warning',
      title: 'Faresonen',
      content: `Temperaturer mellom 5°C og 60°C kalles "faresonen" fordi bakterier formerer seg raskt her. Ikke la mat stå i romtemperatur i mer enn 2 timer. På varme dager (over 30°C), maks 1 time!`,
    },
    {
      id: 'mat-7-2-1-text-3',
      type: 'text',
      title: 'Kryssforurensning',
      content: `Kryssforurensning skjer når bakterier overføres fra en matvare til en annen. Dette er en av de vanligste årsakene til matforgiftning.

**Eksempler på kryssforurensning:**
- Bruke samme skjærebrett til rått kyllingkjøtt og salat
- Rå kjøttsaft som drypper på grønnsaker i kjøleskapet
- Håndtere rått kjøtt og så ta på brød uten å vaske hendene

**Hvordan unngå det:**
- Bruk fargekodede skjærebrett (rødt for kjøtt, grønt for grønnsaker)
- Oppbevar rått kjøtt nederst i kjøleskapet
- Vask hendene, kniver og overflater mellom hver matvare
- Bruk rene bestikk til å smake på maten`,
    },
    {
      id: 'mat-7-2-1-tip-1',
      type: 'tip',
      title: 'Temperaturkontroll',
      content: `Et kjøkkentermometer er et nyttig verktøy. Kylling bør ha en kjernetemperatur på minst 74°C, svinekjøtt 70°C, og biff 63°C for medium. Hel fisk bør være 63°C i midten.`,
    },
    {
      id: 'mat-7-2-1-text-4',
      type: 'text',
      title: 'Riktig oppbevaring i kjøleskapet',
      content: `Hvor du plasserer maten i kjøleskapet har betydning for hvor lenge den holder seg:

**Øverste hylle (varmest)**
- Rester og ferdig mat
- Ost og pålegg

**Midterste hyller**
- Meieriprodukter
- Egg (best i originalemballasjen)

**Nederste hylle (kaldest)**
- Rått kjøtt og fisk (i tette beholdere)
- Dette hindrer at rå kjøttsaft drypper på annen mat

**Grønnsaksskuff**
- Frukt og grønnsaker
- Hold dem atskilt da frukt produserer etylen som får grønnsaker til å visne raskere

**Dør (varmest, mest temperaturvariasjon)**
- Saus, dressing, syltetøy
- IKKE melk eller egg her!`,
    },
    {
      id: 'mat-7-2-1-text-5',
      type: 'text',
      title: 'Holdbarhetsdatoer',
      content: `**"Best før"**
- Kvalitetsgaranti - maten er best før denne datoen
- Kan ofte spises etter datoen hvis den ser, lukter og smaker OK
- Bruk sansene dine!

**"Siste forbruksdag"**
- Sikkerhetsgaranti - skal IKKE spises etter denne datoen
- Brukes på lett bedervelig mat som kjøtt, fisk og ferske meieriprodukter
- Ta dette alvorlig!

**Tips for å redusere svinn:**
- Sjekk datoene når du handler
- Organiser kjøleskapet slik at eldre mat brukes først
- Frys mat før den går ut på dato
- Planlegg måltider for å bruke opp det du har`,
    },
    {
      id: 'mat-7-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-7-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er "faresonen" når det gjelder mattrygghet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er "faresonen" når det gjelder mattrygghet?',
            solution: 'Temperaturer mellom 5°C og 60°C hvor bakterier vokser raskt',
            multipleChoiceOptions: ['Temperaturer mellom 5°C og 60°C hvor bakterier vokser raskt', 'Kjøleskapstemperatur', 'Over 100°C', 'Under 0°C'],
          },
        ],
        solution: 'Faresonen er temperaturer mellom 5°C og 60°C. I dette området formerer bakterier seg raskt, og mat bør ikke stå her i mer enn 2 timer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-7-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er kryssforurensning og hvordan kan du unngå det?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er kryssforurensning?',
            solution: 'Når bakterier overføres fra en matvare til en annen',
            multipleChoiceOptions: ['Når bakterier overføres fra en matvare til en annen', 'Når mat blir for varm', 'Når mat er for gammel', 'Når mat blir frosset'],
          },
        ],
        solution: 'Kryssforurensning skjer når bakterier overføres mellom matvarer, for eksempel ved å bruke samme skjærebrett til rått kjøtt og salat uten å vaske det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-7-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor i kjøleskapet bør du oppbevare rått kjøtt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor i kjøleskapet bør du oppbevare rått kjøtt?',
            solution: 'På den nederste hyllen i en tett beholder',
            multipleChoiceOptions: ['På den nederste hyllen i en tett beholder', 'I døren', 'På øverste hylle', 'Hvor som helst er OK'],
          },
        ],
        solution: 'Rått kjøtt bør oppbevares på nederste hylle i en tett beholder. Dette hindrer at kjøttsaft drypper på andre matvarer og forårsaker kryssforurensning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-7-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen på "best før" og "siste forbruksdag"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på "best før" og "siste forbruksdag"?',
            solution: '"Best før" er kvalitet, "siste forbruksdag" er sikkerhet',
            multipleChoiceOptions: ['"Best før" er kvalitet, "siste forbruksdag" er sikkerhet', 'Det er ingen forskjell', '"Siste forbruksdag" gjelder bare frukt', 'Begge kan ignoreres'],
          },
        ],
        solution: '"Best før" indikerer når maten er best kvalitetsmessig, men kan ofte spises etter. "Siste forbruksdag" er en sikkerhetsgrense - mat skal ikke spises etter denne datoen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-7-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Du har laget middag og har rester til overs. Beskriv hvordan du skal håndtere restene på en trygg måte.',
        hints: ['Tenk på temperatur', 'Tenk på tid', 'Tenk på oppbevaring'],
        solution: 'Restene bør avkjøles raskt og settes i kjøleskapet innen 2 timer. De bør oppbevares i en ren, tett beholder og spises innen 2-3 dager. Ved oppvarming skal maten varmes til gjennomvarm.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Bærekraftig mat
// ============================================================================

export const CHAPTER_MAT_7_2_2: TextbookChapter = {
  id: 'mat-7-2-2',
  courseId: 'mat-7',
  chapterNumber: '2.2',
  title: 'Bærekraftig mat',
  description: 'Lær om miljøvennlige matvalg, matsvinn og bærekraftig produksjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'velge bærekraftig mat',
    'forstå matens miljøpåvirkning',
    'redusere matsvinn',
  ],
  content: [
    {
      id: 'mat-7-2-2-intro',
      type: 'text',
      content: `Matproduksjon står for omtrent en fjerdedel av verdens klimagassutslipp. Ved å gjøre bevisste valg om hva vi spiser, kan vi bidra til en mer bærekraftig fremtid - både for planeten og for fremtidige generasjoner.`,
    },
    {
      id: 'mat-7-2-2-def-1',
      type: 'definition',
      title: 'Bærekraftig mat',
      content: `Bærekraftig mat er mat som er produsert, transportert og konsumert på en måte som tar hensyn til miljø, dyrevelferd og sosiale forhold, uten å ødelegge for fremtidige generasjoners muligheter.`,
    },
    {
      id: 'mat-7-2-2-text-1',
      type: 'text',
      title: 'Matens klimaavtrykk',
      content: `Ulike matvarer har svært ulikt klimaavtrykk. Her er noen eksempler på CO2-utslipp per kilo mat:

**Høyt klimaavtrykk:**
- Storfekjøtt: ca. 26 kg CO2
- Lammekjøtt: ca. 22 kg CO2
- Ost: ca. 13 kg CO2

**Middels klimaavtrykk:**
- Svinekjøtt: ca. 5 kg CO2
- Kylling: ca. 4 kg CO2
- Egg: ca. 3 kg CO2

**Lavt klimaavtrykk:**
- Fisk: ca. 2-3 kg CO2
- Melk: ca. 1 kg CO2
- Bønner og linser: ca. 0,5 kg CO2
- Grønnsaker: ca. 0,2-0,5 kg CO2

**Hvorfor er storfekjøtt verst?**
- Kyr raper metan (en kraftig klimagass)
- Krever mye fôr og vann
- Krever store landområder`,
    },
    {
      id: 'mat-7-2-2-text-2',
      type: 'text',
      title: 'Tips for et mer bærekraftig kosthold',
      content: `Du trenger ikke bli vegetarianer for å spise mer bærekraftig. Her er noen enkle endringer:

**1. Spis mer plantebasert**
- Ha noen kjøttfrie dager i uken
- Bytt ut noe kjøtt med belgfrukter
- Prøv plantebaserte alternativer

**2. Velg bærekraftig protein**
- Kylling og svin fremfor storfe
- Fisk og sjømat (se etter MSC-merket)
- Belgfrukter: bønner, linser, erter

**3. Spis sesongbasert og lokalt**
- Norske grønnsaker i sesongen
- Kortreist mat når mulig
- Unngå flytransportert mat

**4. Reduser matsvinn**
- Planlegg innkjøp
- Bruk opp rester
- Frys mat før den blir dårlig

**5. Velg miljømerkede produkter**
- Debio (økologisk)
- MSC (bærekraftig fisk)
- Fairtrade (rettferdig handel)`,
    },
    {
      id: 'mat-7-2-2-tip-1',
      type: 'tip',
      title: 'Kjøttfri mandag',
      content: `Mange familier har innført "Kjøttfri mandag" som en enkel måte å redusere klimaavtrykket på. Prøv deilige vegetarretter som pasta med grønnsaker, dahl med linser, eller burritos med bønner!`,
    },
    {
      id: 'mat-7-2-2-text-3',
      type: 'text',
      title: 'Matsvinn - Et stort problem',
      content: `I Norge kaster vi over 450 000 tonn spiselig mat hvert år. Det tilsvarer omtrent 85 kg per person!

**Hvor kastes mest mat?**
- Husholdningene står for ca. 60% av matsvinnet
- Resten kommer fra matindustri, butikker og restauranter

**Hva kaster vi mest av?**
1. Brød og bakervarer
2. Frukt og grønnsaker
3. Meieriprodukter
4. Middagsrester

**Hvorfor er matsvinn et problem?**
- Sløsing med ressurser (vann, energi, jord)
- Unødvendige klimagassutslipp
- Økonomisk tap
- Etisk problem når mange sulter i verden`,
    },
    {
      id: 'mat-7-2-2-text-4',
      type: 'text',
      title: 'Slik reduserer du matsvinn',
      content: `**Før du handler:**
- Sjekk hva du har hjemme
- Lag en handleliste
- Planlegg ukens måltider

**I butikken:**
- Kjøp bare det du trenger
- Velg frukt og grønnsaker som ser litt rare ut
- Sjekk datomerking

**Hjemme:**
- Oppbevar mat riktig
- Bruk "først inn, først ut"-prinsippet
- Frys mat du ikke rekker å spise

**Når du lager mat:**
- Bruk hele grønnsaken (stilker, blader)
- Lag porsjoner som passer
- Spis rester til lunsj neste dag

**Kreativ restbruk:**
- Overmoden banan → smoothie eller bananbrød
- Gammelt brød → brødkrutonger eller panzanella-salat
- Grønnsaksrester → suppe eller stuing
- Egg som nærmer seg dato → omelett eller eggerøre`,
    },
    {
      id: 'mat-7-2-2-text-5',
      type: 'text',
      title: 'Økologisk mat',
      content: `**Hva betyr økologisk?**
Økologisk mat er produsert uten kunstgjødsel og kjemiske sprøytemidler. Dyr skal ha god plass og tilgang til uteareal.

**Fordeler med økologisk:**
- Mindre kjemikalier i naturen
- Ofte bedre dyrevelferd
- Kan bidra til mer biologisk mangfold

**Ting å tenke på:**
- Økologisk er ikke alltid mer klimavennlig
- Økologisk produksjon krever ofte mer areal
- Kan være dyrere

**Miljømerker å se etter:**
- Ø-merket (norsk økologisk)
- EU-bladet (europeisk økologisk)
- Debio (kontrollerer økologisk i Norge)`,
    },
    {
      id: 'mat-7-2-2-text-6',
      type: 'text',
      title: 'Bærekraftig sjømat',
      content: `Havet er en viktig matkilde, men overfiske er et problem.

**Bærekraftige valg:**
- Se etter MSC-merket (bærekraftig villfanget fisk)
- ASC-merket (ansvarlig oppdrettsfisk)
- Velg norsk fisk når mulig

**Fisk med lavt klimaavtrykk:**
- Sild
- Makrell
- Sei
- Norsk laks (oppdrett)

**Arter å være forsiktig med:**
- Truede arter
- Fisk fra overfiskede bestander
- Fisk fanget med ødeleggende metoder

Sjekk Sjømatrådet eller WWF sin sjømatguide for oppdaterte anbefalinger.`,
    },
    {
      id: 'mat-7-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-7-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken type kjøtt har høyest klimaavtrykk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken type kjøtt har høyest klimaavtrykk?',
            solution: 'Storfekjøtt',
            multipleChoiceOptions: ['Storfekjøtt', 'Kylling', 'Svin', 'Fisk'],
          },
        ],
        solution: 'Storfekjøtt har høyest klimaavtrykk på grunn av metanutslipp fra drøvtyggere og det store ressursforbruket som kreves for å produsere det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-7-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Omtrent hvor mye mat kaster en gjennomsnittlig nordmann per år?',
        subTasks: [
          {
            label: 'a',
            task: 'Omtrent hvor mye mat kaster en gjennomsnittlig nordmann per år?',
            solution: 'Ca. 85 kg',
            multipleChoiceOptions: ['Ca. 85 kg', 'Ca. 10 kg', 'Ca. 200 kg', 'Ca. 500 kg'],
          },
        ],
        solution: 'Nordmenn kaster i gjennomsnitt ca. 85 kg spiselig mat per person per år. Totalt kaster Norge over 450 000 tonn mat årlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-7-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr MSC-merket på fiskeprodukter?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr MSC-merket på fiskeprodukter?',
            solution: 'At fisken er bærekraftig villfanget',
            multipleChoiceOptions: ['At fisken er bærekraftig villfanget', 'At fisken er billig', 'At fisken er norsk', 'At fisken er frossen'],
          },
        ],
        solution: 'MSC-merket (Marine Stewardship Council) garanterer at villfanget fisk kommer fra bærekraftig forvaltet fiskeri som ikke bidrar til overfiske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-7-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre ting du kan gjøre for å redusere matsvinn hjemme.',
        hints: ['Tenk på planlegging', 'Tenk på oppbevaring', 'Tenk på rester'],
        solution: 'Eksempler: 1) Planlegge måltider og lage handleliste, 2) Oppbevare mat riktig og bruke "først inn, først ut", 3) Fryse mat før den blir dårlig og bruke rester kreativt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-7-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en middagsplan for én uke som er mer bærekraftig. Inkluder minst to kjøttfrie dager og forklar valgene dine.',
        hints: ['Tenk på klimaavtrykk', 'Varier proteinkildene', 'Bruk sesongbaserte grønnsaker'],
        solution: 'Eksempel: Mandag - Pasta med grønnsaker, Tirsdag - Kyllingwok, Onsdag - Fiskekaker med poteter, Torsdag - Linsesuppe, Fredag - Taco med bønner, Lørdag - Laksemiddag, Søndag - Svinekjøtt med rotgrønnsaker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.1: Avansert matlaging
// ============================================================================

export const CHAPTER_MAT_7_3_1: TextbookChapter = {
  id: 'mat-7-3-1',
  courseId: 'mat-7',
  chapterNumber: '3.1',
  title: 'Avansert matlaging',
  description: 'Lær nye teknikker og lag mer avanserte retter fra bunnen av.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lage sammensatte måltider',
    'bruke ulike tilberedningsteknikker',
  ],
  content: [
    {
      id: 'mat-7-3-1-intro',
      type: 'text',
      content: `Nå som du har lært grunnleggende matlaging, er det på tide å utvide ferdighetene dine. I dette kapittelet lærer du teknikker som vil gjøre deg til en dyktigere kokk.`,
    },
    {
      id: 'mat-7-3-1-text-1',
      type: 'text',
      title: 'Grunnleggende kutteteknikker',
      content: `God kutteteknikk gjør matlagingen enklere og tryggere, og sørger for at maten tilberedes jevnt.

**Sikker knivhåndtering:**
- Hold kniven med et godt grep rundt skaftet
- Bøy fingrene på den andre hånden innover ("bjørneklo") for å beskytte dem
- Kutt bort fra kroppen
- Hold skjærebrettet stabilt med en fuktig klut under

**Grunnleggende kutt:**

**Julienne** - Tynne strimler (matchstick-størrelse)
- Perfekt for wok og salater
- Ca. 3 mm x 3 mm x 5 cm

**Brunoise** - Små terninger
- Fin til sauser og supper
- Ca. 3 mm x 3 mm x 3 mm

**Chiffonade** - Tynne strimler av blader
- Brukes til urter og bladgrønnsaker
- Rull bladene sammen og skjær tynne strimler

**Konkassé** - Grovt hakkede tomater
- Skåld tomatene for å fjerne skinnet
- Fjern frøene og kutt i grove terninger`,
    },
    {
      id: 'mat-7-3-1-text-2',
      type: 'text',
      title: 'Tilberedningsteknikker',
      content: `**Steke (sautere)**
- Høy varme, lite fett
- Ingrediensene beveger seg i pannen
- Passer til kjøtt, fisk og grønnsaker

**Braisere (langkoking)**
- Først brunes kjøttet
- Så koker det i væske ved lav temperatur
- Gir mørt kjøtt og fyldig smak
- Perfekt for gryteretter

**Dampe**
- Mat tilberedes over kokende vann
- Bevarer næringsstoffer og farge
- Passer godt til grønnsaker og fisk

**Gratinere**
- Mat dekkes med ost, smuler eller saus
- Settes under grill til overflaten blir gyllen
- Gir sprø topping

**Woke**
- Svært høy varme, kort tid
- Konstant røring
- Ingrediensene kuttes i like store biter
- Beholder tekstur og næring`,
    },
    {
      id: 'mat-7-3-1-tip-1',
      type: 'tip',
      title: 'Mise en place',
      content: `"Mise en place" er fransk og betyr "alt på plass". Profesjonelle kokker forbereder alle ingredienser før de begynner å lage mat. Mål opp, kutt og ha alt klart i skåler. Da går matlagingen mye smidigere!`,
    },
    {
      id: 'mat-7-3-1-text-3',
      type: 'text',
      title: 'Basissauser',
      content: `Å kunne lage gode sauser er en viktig ferdighet. Her er tre klassiske sauser:

**Bechamelsaus (hvit saus)**
*Ingredienser:*
- 2 ss smør
- 2 ss hvetemel
- 5 dl melk
- Salt, pepper, muskatnøtt

*Fremgangsmåte:*
1. Smelt smøret i en kjele
2. Rør inn melet og la det frese litt (dette kalles roux)
3. Tilsett melken litt etter litt mens du visper
4. Kok i 5-10 minutter til sausen tykner
5. Smak til med salt, pepper og muskatnøtt

**Tomatsaus**
*Ingredienser:*
- 1 boks hermetiske tomater
- 2 fedd hvitløk
- 1 ss olivenolje
- Basilikum, salt, pepper

*Fremgangsmåte:*
1. Fres hvitløk i olivenolje
2. Tilsett tomatene
3. La putre i 20-30 minutter
4. Smak til og tilsett basilikum

**Vinaigrette (salatsaus)**
*Ingredienser:*
- 3 ss olivenolje
- 1 ss eddik eller sitronsaft
- 1 ts sennep
- Salt og pepper

*Fremgangsmåte:*
1. Bland eddik og sennep
2. Visp inn oljen gradvis
3. Smak til med salt og pepper`,
    },
    {
      id: 'mat-7-3-1-text-4',
      type: 'text',
      title: 'Lage mat fra bunnen av',
      content: `Det er stor forskjell på å åpne en pose og å lage noe helt fra bunnen. Her er en oppskrift på hjemmelaget pasta:

**Fersk pasta**
*Ingredienser (4 porsjoner):*
- 400 g hvetemel (tipo 00 eller vanlig)
- 4 egg
- 1 ss olivenolje
- 1/2 ts salt

*Fremgangsmåte:*
1. Lag en haug med mel på benken, lag en grop i midten
2. Knekk eggene i gropen, tilsett olje og salt
3. Visp gradvis inn mel fra kantene med en gaffel
4. Når deigen blir stiv, kna den med hendene i 10 minutter
5. Deigen skal være glatt og elastisk
6. La den hvile innpakket i 30 minutter
7. Kavle ut tynt og skjær i ønsket form
8. Kok i saltet vann i 2-3 minutter

**Tips:** Fersk pasta smaker helt annerledes enn tørket pasta. Det er verdt innsatsen!`,
    },
    {
      id: 'mat-7-3-1-text-5',
      type: 'text',
      title: 'Planlegging av et måltid',
      content: `Når du lager et helt måltid med flere komponenter, er planlegging viktig.

**Tenk på:**
- Hva tar lengst tid å tilberede?
- Hva kan forberedes på forhånd?
- Hva må lages i siste liten?
- Har du nok plass på komfyren/i ovnen?

**Eksempel - Søndagsmiddag:**
*Hovedrett: Stekt kylling med ovnsbakte grønnsaker og saus*

**Tidsplan:**
- 2 timer før: Ta ut kyllingen fra kjøleskapet
- 1,5 timer før: Sett ovnen på, forbered grønnsaker
- 1 time før: Sett inn kylling og grønnsaker
- 30 min før: Begynn på sausen
- 10 min før: Ta ut kyllingen, la den hvile
- Servering: Alt er varmt og klart samtidig

**Balanse på tallerkenen:**
- Protein (kylling)
- Karbohydrater (poteter)
- Grønnsaker (rotgrønnsaker)
- Saus (binder smakene sammen)`,
    },
    {
      id: 'mat-7-3-1-warning-1',
      type: 'warning',
      title: 'Sikkerhet med varme',
      content: `Når du jobber med høye temperaturer og varme gryter, vær ekstra forsiktig. Bruk grytekluter, vær oppmerksom på dampende væsker, og ha alltid en voksen i nærheten når du bruker ovn og komfyr.`,
    },
    {
      id: 'mat-7-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-7-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kalles kutteteknikken der man lager tynne strimler som ser ut som fyrstikker?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kalles kutteteknikken der man lager tynne strimler som ser ut som fyrstikker?',
            solution: 'Julienne',
            multipleChoiceOptions: ['Julienne', 'Brunoise', 'Chiffonade', 'Konkassé'],
          },
        ],
        solution: 'Julienne er kutteteknikken for tynne strimler, omtrent 3 mm x 3 mm x 5 cm, som minner om fyrstikker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-7-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er "mise en place"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er "mise en place"?',
            solution: 'Å ha alle ingredienser forberedt og klare før man begynner å lage mat',
            multipleChoiceOptions: ['Å ha alle ingredienser forberedt og klare før man begynner å lage mat', 'En type saus', 'En kutteteknikk', 'Et kjøkkenredskap'],
          },
        ],
        solution: '"Mise en place" er fransk og betyr "alt på plass". Det handler om å forberede og måle opp alle ingredienser før man starter matlagingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-7-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er de tre hovedingrediensene i en bechamelsaus?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er de tre hovedingrediensene i en bechamelsaus?',
            solution: 'Smør, mel og melk',
            multipleChoiceOptions: ['Smør, mel og melk', 'Tomater, olje og hvitløk', 'Egg, sukker og mel', 'Fløte, ost og vin'],
          },
        ],
        solution: 'Bechamelsaus lages av smør, hvetemel og melk. Smøret smeltes, melet røres inn for å lage en roux, og så tilsettes melken gradvis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-7-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en tidsplan for en middag du vil lage til familien. Beskriv retten og når de ulike komponentene skal tilberedes.',
        hints: ['Tenk på hva som tar lengst tid', 'Hva kan forberedes mens annet koker?', 'Når skal alt være klart?'],
        solution: 'Eksempel for laksemiddag: 1 time før - skjær grønnsaker, 45 min før - sett på poteter, 30 min før - lag saus, 20 min før - stek laksen, 10 min før - sjekk at alt er klart, Servering - alt er varmt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Internasjonal mat
// ============================================================================

export const CHAPTER_MAT_7_3_2: TextbookChapter = {
  id: 'mat-7-3-2',
  courseId: 'mat-7',
  chapterNumber: '3.2',
  title: 'Internasjonal mat',
  description: 'Oppdag smaker og teknikker fra kjøkken over hele verden.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lage mat fra ulike kulturer',
    'forstå matens kulturelle betydning',
  ],
  content: [
    {
      id: 'mat-7-3-2-intro',
      type: 'text',
      content: `Verden er full av spennende smaker! Ved å lære om internasjonal mat, utvider du ikke bare repertoaret ditt - du lærer også om andre kulturer og tradisjoner gjennom maten deres.`,
    },
    {
      id: 'mat-7-3-2-text-1',
      type: 'text',
      title: 'Asiatisk mat - Umami og balanse',
      content: `Asiatisk mat er kjent for sine intense smaker og nøye balanserte retter.

**Grunnleggende smaker:**
- Søtt (sukker, mirin)
- Salt (soyasaus, fiskesaus)
- Surt (riseddik, lime)
- Bittert (grønn te, visse grønnsaker)
- Umami (soyasaus, fermenterte produkter)

**Viktige ingredienser:**
- Soyasaus
- Sesamolje
- Ingefær
- Hvitløk
- Chili
- Koriander
- Ris og nudler

**Oppskrift: Enkel wok med kylling**
*Ingredienser (2 porsjoner):*
- 300 g kyllingfilet i strimler
- 2 dl blandede grønnsaker
- 2 ss soyasaus
- 1 ss sesamolje
- 1 fedd hvitløk, hakket
- 1 ts fersk ingefær, revet
- Ris til servering

*Fremgangsmåte:*
1. Kok risen etter anvisning
2. Varm woken til den er veldig varm
3. Tilsett olje og stek kyllingen raskt
4. Ta ut kyllingen, stek grønnsakene i 2 min
5. Tilsett hvitløk og ingefær
6. Ha kyllingen tilbake, tilsett soyasaus
7. Server over ris`,
    },
    {
      id: 'mat-7-3-2-text-2',
      type: 'text',
      title: 'Middelhavsmat - Enkel og sunn',
      content: `Middelhavsdietten regnes som en av verdens sunneste. Den fokuserer på friske ingredienser, olivenolje og urter.

**Kjennetegn:**
- Mye grønnsaker og frukt
- Olivenolje som hovedfettkilde
- Fisk og sjømat
- Belgfrukter og nøtter
- Friske urter (basilikum, oregano, persille)
- Moderat bruk av kjøtt

**Oppskrift: Gresk salat**
*Ingredienser (4 porsjoner):*
- 4 tomater
- 1 agurk
- 1 rødløk
- 200 g fetaost
- Oliven
- 3 ss olivenolje
- 1 ss rødvinseddik
- Oregano, salt, pepper

*Fremgangsmåte:*
1. Skjær tomater i båter
2. Skjær agurk i halvmåner
3. Skjær rødløk i tynne ringer
4. Bland grønnsakene i en skål
5. Legg fetaosten hel oppå
6. Tilsett oliven
7. Dryss over olivenolje, eddik og oregano
8. Smak til med salt og pepper`,
    },
    {
      id: 'mat-7-3-2-text-3',
      type: 'text',
      title: 'Meksikansk mat - Sterkt og fargerikt',
      content: `Meksikansk mat er mye mer enn bare taco! Det er et rikt kjøkken med tusenårig historie.

**Grunnleggende ingredienser:**
- Mais (tortilla, chips)
- Bønner (svarte bønner, pintobønner)
- Chili (jalapeño, chipotle)
- Tomat og tomatillo
- Avokado
- Lime og koriander

**Viktige krydder:**
- Spisskummen
- Chili
- Paprika
- Oregano (meksikansk)
- Kanel (i salte retter!)

**Oppskrift: Hjemmelaget guacamole**
*Ingredienser:*
- 2 modne avokadoer
- Saft av 1 lime
- 1/4 rødløk, finhakket
- 1 tomat, i små terninger
- Frisk koriander
- Salt
- Jalapeño (valgfritt)

*Fremgangsmåte:*
1. Del avokadoene, fjern steinen
2. Mos fruktkjøttet med en gaffel
3. Bland inn limesaft
4. Tilsett løk, tomat og koriander
5. Smak til med salt
6. Tilsett hakket jalapeño hvis du vil ha det sterkere
7. Server straks med tortillachips`,
    },
    {
      id: 'mat-7-3-2-tip-1',
      type: 'tip',
      title: 'Autentisk vs. tilpasset',
      content: `Det er helt OK å tilpasse oppskrifter til egen smak og tilgjengelige ingredienser. "Fredagstaco" er for eksempel en norsk tilpasning av meksikansk mat. Mat utvikler seg hele tiden når den møter nye kulturer!`,
    },
    {
      id: 'mat-7-3-2-text-4',
      type: 'text',
      title: 'Indisk mat - Krydder og varme',
      content: `Indisk mat er kjent for sin komplekse bruk av krydder og varierte vegetarretter.

**Viktige krydder:**
- Gurkemeie (kurkuma)
- Spisskummen
- Koriander (hel og malt)
- Garam masala
- Kardemomme
- Chili
- Ingefær

**Grunnleggende teknikker:**
- Toast krydder i tørr panne for å frigjøre smak
- "Tadka" - krydder freses i het olje og tilsettes retten til slutt
- Langsom koking for å utvikle smaker

**Oppskrift: Dahl (linsesuppe)**
*Ingredienser (4 porsjoner):*
- 2 dl røde linser
- 4 dl vann
- 1 boks kokosmelk
- 1 løk
- 3 fedd hvitløk
- 1 ss fersk ingefær
- 2 ts gurkemeie
- 2 ts spisskummen
- 1 ts garam masala
- Salt og koriander

*Fremgangsmåte:*
1. Skyll linsene og kok dem møre i vann (ca. 20 min)
2. Fres løk, hvitløk og ingefær i olje
3. Tilsett krydderne og stek i 1 minutt
4. Tilsett linsene og kokosmelken
5. La putre i 10 minutter
6. Smak til med salt
7. Pynt med fersk koriander
8. Server med ris eller naanbrød`,
    },
    {
      id: 'mat-7-3-2-text-5',
      type: 'text',
      title: 'Japansk mat - Enkelhet og presisjon',
      content: `Japansk mat fokuserer på ferske råvarer, presise teknikker og vakker presentasjon.

**Prinsipper:**
- "Umami" - den femte smaken
- Sesongbaserte ingredienser
- Minimalt med tilberedning for å bevare smak
- Estetisk presentasjon

**Grunnleggende ingredienser:**
- Ris (sushiris)
- Sjømat
- Soyasaus
- Miso
- Dashi (fiskebuljong)
- Wasabi og ingefær

**Oppskrift: Enkel misosuppe**
*Ingredienser (2 porsjoner):*
- 5 dl vann
- 2 ss misopasta
- 100 g silketofu
- Vårløk
- Noen biter wakame (tørket tang)

*Fremgangsmåte:*
1. Kok opp vannet
2. Tilsett wakame og la det utvide seg
3. Skru ned varmen (skal ikke koke!)
4. Løs opp misopasta i litt av væsken
5. Rør misoen inn i suppen
6. Skjær tofuen i terninger og tilsett
7. Server med hakket vårløk på toppen

**OBS:** Misosuppe skal aldri koke etter at misoen er tilsatt - da ødelegges smaken!`,
    },
    {
      id: 'mat-7-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-7-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er "umami"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er "umami"?',
            solution: 'Den femte grunnsmaken - en dyp, fyldig smak',
            multipleChoiceOptions: ['Den femte grunnsmaken - en dyp, fyldig smak', 'Et japansk krydder', 'En type ris', 'En koketeknikk'],
          },
        ],
        solution: 'Umami er den femte grunnsmaken ved siden av søtt, salt, surt og bittert. Det er en dyp, fyldig smak som finnes i blant annet soyasaus, parmesan og tomater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-7-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket krydder gir indisk mat sin karakteristiske gule farge?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket krydder gir indisk mat sin karakteristiske gule farge?',
            solution: 'Gurkemeie (kurkuma)',
            multipleChoiceOptions: ['Gurkemeie (kurkuma)', 'Paprika', 'Chili', 'Kanel'],
          },
        ],
        solution: 'Gurkemeie (kurkuma) gir den karakteristiske gule fargen til mange indiske retter. Det er også kjent for sine antiinflammatoriske egenskaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-7-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner middelhavsdietten?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner middelhavsdietten?',
            solution: 'Mye grønnsaker, olivenolje, fisk og friske urter',
            multipleChoiceOptions: ['Mye grønnsaker, olivenolje, fisk og friske urter', 'Mye kjøtt og poteter', 'Bare fisk', 'Mye meieriprodukter'],
          },
        ],
        solution: 'Middelhavsdietten kjennetegnes av rikelig med grønnsaker, frukt, olivenolje som hovedfettkilde, fisk, belgfrukter og friske urter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-7-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg et land eller en region vi ikke har dekket i kapittelet. Undersøk og beskriv tre typiske retter og ingredienser fra dette kjøkkenet.',
        hints: ['Du kan velge for eksempel: Kina, Thailand, Frankrike, Marokko, Etiopia...', 'Se etter typiske krydder og råvarer', 'Finn ut om noen spesielle tilberedningsteknikker'],
        solution: 'Eksempel for Thailand: 1) Pad Thai - stekte risnudler med reker, egg og peanøtter, 2) Tom Yum - sur og sterk suppe med sitrongress, 3) Grønn curry - kremet curry med kokosmelk og basilikum. Typiske ingredienser: fiskesaus, sitrongress, galangal, kaffirlimeblader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.1: Matkultur og tradisjoner
// ============================================================================

export const CHAPTER_MAT_7_4_1: TextbookChapter = {
  id: 'mat-7-4-1',
  courseId: 'mat-7',
  chapterNumber: '4.1',
  title: 'Matkultur og tradisjoner',
  description: 'Utforsk hvordan mat former identitet, fellesskap og tradisjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå matkultur',
    'reflektere over matens rolle i identitet og fellesskap',
  ],
  content: [
    {
      id: 'mat-7-4-1-intro',
      type: 'text',
      content: `Mat er så mye mer enn næring. Det er kultur, identitet, minner og fellesskap. I dette kapittelet utforsker vi hvordan mat binder mennesker sammen og formidler hvem vi er.`,
    },
    {
      id: 'mat-7-4-1-def-1',
      type: 'definition',
      title: 'Matkultur',
      content: `Matkultur omfatter alle tradisjoner, vaner og verdier knyttet til mat i et samfunn. Det inkluderer hva vi spiser, hvordan vi tilbereder det, hvem vi spiser med, og hvilken betydning mat har i våre liv.`,
    },
    {
      id: 'mat-7-4-1-text-1',
      type: 'text',
      title: 'Mat som identitetsmarkør',
      content: `Mat er en viktig del av hvem vi er - både som individer og som del av en kultur.

**Personlig identitet:**
- Familieoppskrifter som går i arv
- Favorittmat fra barndommen
- Mat som trigger minner
- Smakspreferanser vi har utviklet

**Kulturell identitet:**
- Nasjonalretter (brunost, fårikål, tacos)
- Religiøs mat og matforbud
- Regionale spesialiteter
- Høytidsmat som markerer tilhørighet

**Eksempel:**
En person som er oppvokst i Norge med foreldre fra Pakistan kan føle tilhørighet til både norsk matkultur (matpakke, brunost) og pakistansk matkultur (biryani, samosa). Denne dobbeltheten er en rikdom, ikke en konflikt.`,
    },
    {
      id: 'mat-7-4-1-text-2',
      type: 'text',
      title: 'Fellesskapets betydning',
      content: `Måltider handler om mer enn å spise - de er sosiale hendelser.

**Familiens samlingspunkt:**
- Middagen rundt bordet
- Søndagsmiddag
- Feiringer med mat

**Samfunnets ritualer:**
- Bryllup og begravelser
- Religiøse feiringer
- Nasjonale høytider

**Forskning viser:**
- Familier som spiser sammen regelmessig har bedre kommunikasjon
- Barn som spiser familiemiddag gjør det bedre på skolen
- Fellesskapsmåltider styrker sosiale bånd

**Utfordringer i dag:**
- Travle hverdager
- Ulike tidsskjemaer
- Skjermbruk ved måltidet
- Individualiserte kostholdstrender

**Tips:** Prøv å ha minst noen måltider i uken der hele familien samles uten skjermer.`,
    },
    {
      id: 'mat-7-4-1-text-3',
      type: 'text',
      title: 'Norske mattradisjoner gjennom året',
      content: `Norge har rike mattradisjoner knyttet til årstider og høytider.

**Jul (desember)**
- Ribbe, pinnekjøtt eller lutefisk
- Risgrøt med mandel
- Julekaker (sju slag)
- Gløgg og pepperkaker

**Påske (mars/april)**
- Lam
- Egg og eggeretter
- Kvikk lunsj og appelsiner på fjellet

**17. mai**
- Pølser i brød
- Is
- Kaker

**Høst**
- Fårikål (nasjonalrett, siste torsdag i september)
- Sopp og bær fra naturen
- Epler fra egen hage

**Historisk bakgrunn:**
Mange tradisjoner stammer fra en tid da man måtte spare på maten. Julefeiringen var en fest etter en lang periode med faste. Høytidsmaten var ofte det beste man hadde, spart til spesielle anledninger.`,
    },
    {
      id: 'mat-7-4-1-tip-1',
      type: 'tip',
      title: 'Intervju besteforeldre',
      content: `Spør besteforeldrene dine om matminner fra da de var unge. Hva spiste de? Hva var høytidsmat? Har de oppskrifter som har gått i familien? Dette er levende kulturhistorie!`,
    },
    {
      id: 'mat-7-4-1-text-4',
      type: 'text',
      title: 'Religion og mat',
      content: `Mat spiller en viktig rolle i de fleste religioner.

**Kristendommen:**
- Nattverd (brød og vin)
- Faste før påske (i noen tradisjoner)
- Julefeiringens måltider

**Islam:**
- Halal-mat (tillatt mat)
- Ramadan - faste fra soloppgang til solnedgang
- Eid-feiring med spesielle retter
- Forbud mot svinekjøtt og alkohol

**Jødedommen:**
- Kosher-mat (tillatt mat)
- Sabbatsmåltidet
- Påskemåltidet (seder)
- Separate kjøtt- og meieriretter

**Hinduismen:**
- Mange er vegetarianere
- Kua er hellig - ikke spise storfekjøtt
- Spesielle retter til festivaler

**Buddhismen:**
- Mange er vegetarianere
- Mindful spising - bevissthet rundt måltidet
- Munker tigger mat som åndelig praksis

**Hvorfor er dette viktig å vite?**
I et flerkulturelt samfunn er det viktig å respektere andres mattradisjoner. Når du inviterer venner på mat, spør om det er noe de ikke spiser.`,
    },
    {
      id: 'mat-7-4-1-text-5',
      type: 'text',
      title: 'Bordskikk og måltidsetikette',
      content: `Hvordan vi oppfører oss ved bordet varierer mellom kulturer.

**Norsk bordskikk:**
- Vent til alle er servert
- "Vær så god" før måltidet starter
- "Takk for maten" når du er ferdig
- Hold albuer unna bordet
- Bruk kniv og gaffel
- Ikke snakke med mat i munnen

**Andre kulturer:**
- I Japan: rape kan være et tegn på at maten var god
- I Midtøsten: spise med høyre hånd
- I India: ofte spise med hendene
- I Kina: bruke spisepinner
- I mange kulturer: dele fra felles fat

**Bordbønn/takksigelse:**
I mange familier og kulturer er det tradisjon å takke for maten, enten gjennom bønn eller et felles ritual.

**Tips for når du er gjest:**
- Observer hva andre gjør
- Spør hvis du er usikker
- Vær åpen og respektfull
- Komplimenter maten`,
    },
    {
      id: 'mat-7-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-7-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er matkultur?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er matkultur?',
            solution: 'Alle tradisjoner, vaner og verdier knyttet til mat i et samfunn',
            multipleChoiceOptions: ['Alle tradisjoner, vaner og verdier knyttet til mat i et samfunn', 'Bare høytidsmat', 'Bare utenlandsk mat', 'Mat fra restauranter'],
          },
        ],
        solution: 'Matkultur omfatter alle tradisjoner, vaner og verdier knyttet til mat - hva vi spiser, hvordan vi tilbereder det, og matens betydning i våre liv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-7-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Når er den offisielle fårikåldagen i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Når er den offisielle fårikåldagen i Norge?',
            solution: 'Siste torsdag i september',
            multipleChoiceOptions: ['Siste torsdag i september', '17. mai', 'Julaften', 'Første dag i januar'],
          },
        ],
        solution: 'Fårikåldagen feires siste torsdag i september. Fårikål ble kåret til Norges nasjonalrett i 1974.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-7-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr det at mat er halal?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr det at mat er halal?',
            solution: 'At maten er tillatt å spise ifølge islamsk lov',
            multipleChoiceOptions: ['At maten er tillatt å spise ifølge islamsk lov', 'At maten er vegetarisk', 'At maten er økologisk', 'At maten er kosher'],
          },
        ],
        solution: 'Halal er arabisk og betyr "tillatt". Halal-mat er mat som er tillatt for muslimer å spise, og det inkluderer regler for hvordan dyr skal slaktes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-7-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv en mattradisjon i din egen familie. Når feirer dere den, og hvilken mat er involvert? Hvorfor tror du denne tradisjonen er viktig?',
        hints: ['Tenk på høytider eller spesielle anledninger', 'Er det spesielle retter som alltid lages?', 'Hvem lager maten?'],
        solution: 'Svarene vil variere. Eksempel: "I familien min lager vi alltid pinnekjøtt på julaften. Bestefar står for tilberedningen, og hele familien samles. Tradisjonen er viktig fordi den knytter oss sammen og viderefører noe fra generasjonene før oss."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Måltidsplanlegging
// ============================================================================

export const CHAPTER_MAT_7_4_2: TextbookChapter = {
  id: 'mat-7-4-2',
  courseId: 'mat-7',
  chapterNumber: '4.2',
  title: 'Måltidsplanlegging',
  description: 'Lær å planlegge varierte, sunne og økonomiske ukesmenyer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge måltider',
    'ta hensyn til økonomi, helse og bærekraft i matvalg',
  ],
  content: [
    {
      id: 'mat-7-4-2-intro',
      type: 'text',
      content: `God måltidsplanlegging gjør hverdagen enklere, sparer penger og hjelper deg å spise sunnere. I dette kapittelet lærer du å planlegge en hel ukes måltider på en smart måte.`,
    },
    {
      id: 'mat-7-4-2-def-1',
      type: 'definition',
      title: 'Måltidsplanlegging',
      content: `Måltidsplanlegging er å bestemme på forhånd hva du skal spise, lage handlelister og forberede måltider. God planlegging sparer tid, penger og reduserer matsvinn.`,
    },
    {
      id: 'mat-7-4-2-text-1',
      type: 'text',
      title: 'Hvorfor planlegge måltider?',
      content: `**Fordeler med måltidsplanlegging:**

**Spar penger**
- Handler målrettet, ikke impulskjøp
- Kan utnytte tilbud
- Mindre matsvinn

**Spar tid**
- Slipper "hva skal vi ha til middag?"-spørsmålet
- Handler én gang i stedet for hver dag
- Kan forberede ingredienser på forhånd

**Spis sunnere**
- Sikrer variert kosthold
- Unngår usunne løsninger i siste liten
- Lettere å følge kostråd

**Reduser stress**
- Har alltid en plan
- Mindre kaos i hverdagen
- Mer tid til andre ting`,
    },
    {
      id: 'mat-7-4-2-text-2',
      type: 'text',
      title: 'Slik planlegger du en ukesmeny',
      content: `**Steg 1: Kartlegg uken**
- Hvilke dager har dere god tid?
- Hvilke dager må det gå fort?
- Hvem skal spise hjemme?
- Er det noen aktiviteter som påvirker middagstiden?

**Steg 2: Sjekk hva du har**
- Hva finnes i kjøleskapet?
- Hva er i fryseren?
- Hva i skapet bør brukes opp?

**Steg 3: Planlegg middager**
- Varier proteinkilder (fisk, kjøtt, belgfrukter)
- Tenk på balanse og næring
- Ha én eller to enkle retter på travle dager
- Planlegg at rester kan brukes

**Steg 4: Lag handleliste**
- Skriv opp ingredienser du mangler
- Organiser etter butikkens oppsett
- Sjekk tilbud

**Steg 5: Handle og forbered**
- Handle etter listen
- Vask og kutt grønnsaker som kan forberedes
- Frys det som ikke skal brukes med en gang`,
    },
    {
      id: 'mat-7-4-2-text-3',
      type: 'text',
      title: 'Eksempel på ukesmeny',
      content: `Her er et eksempel på en variert ukesmeny:

| Dag | Middag | Tid | Kommentar |
|-----|--------|-----|-----------|
| Mandag | Pasta med tomatsaus og salat | 30 min | Enkel start på uken |
| Tirsdag | Laks med grønnsaker og ris | 35 min | Fisk tidlig i uken |
| Onsdag | Kyllingwok med nudler | 25 min | Rask og næringsrik |
| Torsdag | Linsesuppe med godt brød | 40 min | Kjøttfri dag |
| Fredag | Taco med bønner og kjøttdeig | 35 min | Fredagskos |
| Lørdag | Helstekt kylling med rotgrønnsaker | 90 min | Mer tid i helgen |
| Søndag | Fiskegrateng med rester fra lørdag | 45 min | Bruke opp grønnsaker |

**Merk:**
- Varierte proteinkilder
- To fiskeretter
- Én vegetarmiddag
- Tilpasset til ukedagenes tidsrammer`,
    },
    {
      id: 'mat-7-4-2-tip-1',
      type: 'tip',
      title: 'Batch cooking',
      content: `"Batch cooking" betyr å lage større porsjoner som kan brukes flere ganger. Lag dobbel porsjon chili på søndag - spis det til middag og ha resten til burrito-fyll på tirsdag. Tomatsaus kan lages i store mengder og fryses i porsjoner.`,
    },
    {
      id: 'mat-7-4-2-text-4',
      type: 'text',
      title: 'Matøkonomi',
      content: `God planlegging hjelper deg å holde matbudsjettet.

**Tips for å spare penger:**

**Planlegging**
- Sjekk tilbudsavisene før du planlegger
- Bygg menyen rundt det som er på tilbud
- Lag en handleliste og hold deg til den

**I butikken**
- Sammenlign kilopris, ikke bare pakkepris
- Vurder budsjettmerker og egne merkevarer
- Ikke handle sulten!
- Kjøp frukt og grønnsaker i sesong

**Smarte valg**
- Hele grønnsaker er billigere enn ferdigkuttede
- Fryst fisk og grønnsaker er ofte billigere og like bra
- Belgfrukter er billig protein
- Tørrvarer (ris, pasta, bønner) har lang holdbarhet

**Reduser svinn**
- Bruk opp rester
- Frys mat før den blir dårlig
- Bruk hele grønnsaken (stilker, blader)

**Eksempel på prissammenligning:**
- Kyllingfilet: ca. 150 kr/kg
- Hel kylling: ca. 50 kr/kg
- Tørre bønner: ca. 30 kr/kg (rå vekt)

Du kan lage fire middager av én hel kylling!`,
    },
    {
      id: 'mat-7-4-2-text-5',
      type: 'text',
      title: 'Tenk på variasjon og balanse',
      content: `En god ukesmeny bør ha:

**Variasjon i proteiner:**
- Fisk minst 2 ganger
- Hvitt kjøtt (kylling, svin)
- Belgfrukter/vegetar minst 1 gang
- Rødt kjøtt i moderate mengder

**Variasjon i tilberedning:**
- Kokt
- Stekt
- Ovnsbakt
- Woket
- Grillet

**Variasjon i smaker:**
- Norsk tradisjonsmat
- Asiatisk
- Italiensk
- Meksikansk
- osv.

**Farger på tallerkenen:**
Sørg for fargerike måltider:
- Grønt: brokkoli, spinat, erter
- Rødt: tomater, paprika, beter
- Oransje: gulrøtter, søtpotet
- Hvitt: blomkål, poteter, ris
- Gult: mais, squash`,
    },
    {
      id: 'mat-7-4-2-text-6',
      type: 'text',
      title: 'Praktiske verktøy',
      content: `**Ukesplan-mal**
Lag en enkel plan du kan bruke hver uke:

| | Frokost | Lunsj | Middag |
|---|---------|-------|--------|
| Mandag | | | |
| Tirsdag | | | |
| ... | | | |

**Handleliste-app eller papir**
Finn et system som fungerer for deg:
- Apper som Bring! eller OurGroceries
- Notater på telefonen
- Gammeldags papir og penn
- Magnetliste på kjøleskapet

**Oppskriftssamling**
Lag din egen samling av oppskrifter familien liker:
- Fysisk kokebok med notater
- Digital mappe med oppskrifter
- Pinterest-tavle
- Notater i telefonen

**Fryserbeholdning**
Hold oversikt over hva som ligger i fryseren:
- Liste på kjøleskapet
- Dato på alt du fryser
- Første inn, første ut`,
    },
    {
      id: 'mat-7-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-7-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn tre fordeler med å planlegge ukens måltider.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre fordeler med å planlegge ukens måltider.',
            solution: 'Sparer penger, sparer tid, og spiser sunnere',
            multipleChoiceOptions: ['Sparer penger, sparer tid, og spiser sunnere', 'Maten smaker bedre', 'Du trenger aldri handle', 'Det tar mer tid'],
          },
        ],
        solution: 'De viktigste fordelene er at du sparer penger (handler målrettet), sparer tid (slipper å tenke hver dag), og spiser sunnere (sikrer variasjon og balanse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-7-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er "batch cooking"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er "batch cooking"?',
            solution: 'Å lage større porsjoner som kan brukes til flere måltider',
            multipleChoiceOptions: ['Å lage større porsjoner som kan brukes til flere måltider', 'Å lage mat raskere', 'Å lage mat med mange ingredienser', 'Å lage mat uten oppskrift'],
          },
        ],
        solution: 'Batch cooking betyr å lage større mengder mat på én gang, som kan brukes til flere måltider gjennom uken. Det sparer tid og penger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-7-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er det lurt å sjekke tilbudsavisene før du planlegger ukemenyen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det lurt å sjekke tilbudsavisene før du planlegger ukemenyen?',
            solution: 'Du kan planlegge retter rundt det som er på tilbud og spare penger',
            multipleChoiceOptions: ['Du kan planlegge retter rundt det som er på tilbud og spare penger', 'For å få inspirasjon til nye retter', 'Det er ikke lurt', 'For å handle mer'],
          },
        ],
        solution: 'Ved å sjekke tilbud først kan du bygge ukemenyen rundt varer som er nedsatt. Det gir betydelige besparelser over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-7-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en ukesmeny for familien din. Inkluder alle syv dager, og sørg for variasjon i proteinkilder, tilberedningsmåter og smaker. Lag også en handleliste.',
        hints: ['Ha med minst to fiskeretter', 'Ha med én kjøttfri dag', 'Tenk på travle vs. rolige dager', 'Planlegg slik at rester kan brukes'],
        solution: 'Svarene vil variere. En god ukesmeny bør ha fisk 2 ganger, minst én vegetarmiddag, variasjon i proteiner og tilberedning, og ta hensyn til familiens timeplan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-7-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mat-7-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Du har disse restene i kjøleskapet: kokt ris, halv brokkoli, to egg og litt ost. Foreslå en rett du kan lage av dette.',
        hints: ['Tenk kreativt!', 'Hva kan kombineres?', 'Hvilken tilberedningsmåte passer?'],
        solution: 'Eksempel: Stekt ris med egg og brokkoli, toppet med revet ost. Stek risen i en panne, tilsett hakket brokkoli og vispede egg. Rør til egget er stekt, og topp med ost.',
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

export const MAT_7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MAT_7_1_1,
  CHAPTER_MAT_7_1_2,
  CHAPTER_MAT_7_2_1,
  CHAPTER_MAT_7_2_2,
  CHAPTER_MAT_7_3_1,
  CHAPTER_MAT_7_3_2,
  CHAPTER_MAT_7_4_1,
  CHAPTER_MAT_7_4_2,
];
