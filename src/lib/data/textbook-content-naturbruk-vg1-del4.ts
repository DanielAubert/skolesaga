/**
 * Naturbruk VG1 - Del 4: Kapittel 7.1-7.6, 8.1-8.8
 * Maskiner, verktøy, sikkerhet, bærekraft, entreprenørskap og yrke
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1: Traktor og kjøretøy
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_7_1: TextbookChapter = {
  id: 'naturbruk-vg1-7-1',
  courseId: 'naturbruk-vg1',
  chapterNumber: '7.1',
  title: 'Traktor og kjøretøy',
  description: 'Lær om traktoren som arbeidsmaskin, førerkort og sikker bruk av kjøretøy i naturbruk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive traktorens oppbygning og funksjoner',
    'forklare regler for førerrett og sikker bruk av kjøretøy',
  ],
  content: [
    {
      id: 'naturbruk-vg1-7-1-intro',
      type: 'text',
      content: `## Traktoren - naturbrukets allsidige arbeidsmaskin

Traktoren er selve ryggraden i moderne naturbruk. Enten det er jordbruk, skogbruk eller anleggsarbeid - traktoren er med overalt. Den trekker, løfter, driver redskaper og transporterer. Å forstå hvordan traktoren fungerer og hvordan du bruker den trygt er grunnleggende kunnskap for alle som skal jobbe i naturbruksnæringene.

**I dette kapittelet lærer du:**
- Traktorens hovedkomponenter og hvordan de fungerer
- Ulike traktortyper og deres bruksområder
- Førerkortregler og alderskrav
- Sikker kjøring og forebygging av ulykker
- Andre kjøretøy som brukes i naturbruk

**Traktoren har utviklet seg enormt siden de første modellene kom på begynnelsen av 1900-tallet. I dag er traktorer høyteknologiske maskiner med GPS, dataskjermer og automatiske systemer.**`,
    },
    {
      id: 'naturbruk-vg1-7-1-def-1',
      type: 'definition',
      title: 'Traktor',
      content: `En **traktor** er et motorisert kjøretøy konstruert for å trekke tilhengere og redskaper, og for å drive maskiner via kraftuttaket. Traktoren kjennetegnes av stor trekkraft, lav hastighet og mulighet for å montere ulike redskaper.

**Hovedkjennetegn:**
- Kraftig dieselmotor
- Firehjulstrekk (de fleste moderne)
- Kraftuttak (PTO) for å drive redskaper
- Hydraulikksystem for løfting
- Trepunktsoppheng bak for redskaper`,
    },
    {
      id: 'naturbruk-vg1-7-1-text-1',
      type: 'text',
      content: `## Traktorens oppbygning

**Motor og drivlinje**

**Dieselmotor:**
- De fleste traktorer har dieselmotor
- Motorstørrelse måles i hestekrefter (hk) eller kilowatt (kW)
- Små traktorer: 20-50 hk
- Mellomstore: 50-150 hk
- Store: 150-400+ hk

**Clutch og girkasse:**
- Tradisjonell girkasse med clutchpedal
- Moderne: Trinnløs transmisjon (CVT)
- Powershiftgirkasse - skifte uten clutch
- Vendegir for raskt skifte mellom fremover og bakover

**Firehjulstrekk:**
- Forhjulene kan kobles inn ved behov
- Permanent firehjulstrekk på noen modeller
- Gir bedre trekkraft og stabilitet
- Viktig i ulendt terreng og på glatt underlag

**Differensialsperre:**
- Kobler sammen bakhjulene
- Hindrer at ett hjul spinner
- Brukes ved dårlig grep
- Må kobles ut ved svinging`,
    },
    {
      id: 'naturbruk-vg1-7-1-def-2',
      type: 'definition',
      title: 'Kraftuttak (PTO)',
      content: `**Kraftuttak** (Power Take-Off, PTO) er en roterende aksel på traktoren som overfører kraft fra motoren til tilkoblede redskaper.

**Standardhastigheter:**
- 540 omdreininger per minutt (rpm) - standard
- 1000 rpm - for store redskaper
- Noen traktorer har begge

**Sikkerhet:**
- Kraftuttaket har enorm kraft
- Kan forårsake alvorlige skader
- Bruk alltid beskyttelsesdeksel
- Slå alltid av før av-/påstigning`,
    },
    {
      id: 'naturbruk-vg1-7-1-text-2',
      type: 'text',
      content: `## Hydraulikksystem

Hydraulikken er traktorens muskelkraft for løfting og styring av redskaper.

**Hovedkomponenter:**
- Hydraulikkpumpe - drives av motoren
- Hydraulikkolje - overfører kraften
- Sylindere - utfører arbeidet
- Ventiler - styrer oljens retning
- Oljetank med filter

**Funksjoner:**
- **Trepunktsoppheng:** Løfter og senker redskaper bak
- **Frontlaster:** Styrer skuffe eller gripeklo
- **Styrking:** Hydraulisk servo på rattet
- **Eksterne uttak:** For redskapenes egne funksjoner

**Trepunktsoppheng:**
- To løftearmer nederst
- Én toppleftestang øverst
- Danner tre festepunkter
- Standardisert system (kategori I, II, III)
- Posisjonskontroll - holder fast høyde
- Trekkraftkontroll - justerer etter motstand`,
    },
    {
      id: 'naturbruk-vg1-7-1-def-3',
      type: 'definition',
      title: 'Traktortyper',
      content: `**Jordbrukstraktor:**
Standard traktor for gårdsbruk. Allsidig med mange tilkoblingsmuligheter.

**Skogsmaskin/Skogstraktor:**
Forsterket for tøffe forhold. Ofte med vinsj og griplast.

**Kompakttraktor:**
Liten og smidig. Brukes i hager, parker og mindre gårder.

**Redskapsbærer:**
Spesialkonstruert for å montere redskaper foran, under og bak.

**Beltegående traktor:**
Belter i stedet for hjul. Lavt marktrykk, god fremkommelighet.`,
    },
    {
      id: 'naturbruk-vg1-7-1-text-3',
      type: 'text',
      content: `## Førerkort og alderskrav

**Traktorførerkort (klasse T):**
- Fra 16 år med trafikalt grunnkurs
- Gjelder traktor og beltemotorsykkel
- Maks 40 km/t på vei
- Kan trekke tilhenger

**Utvidet klasse T:**
- Traktor over 40 km/t
- Krever førerkort klasse B (bil)
- Eller egen opplæring for klasse T

**Arbeid på egen/foreldrenes eiendom:**
- Fra 15 år uten førerkort
- Kun på privat grunn
- Ikke på offentlig vei

**Viktig å huske:**
- Aldersgrensene er minimumskrav
- Modenhet og erfaring er avgjørende
- Arbeidsgiver har ansvar for opplæring
- Forsikring må være i orden`,
    },
    {
      id: 'naturbruk-vg1-7-1-tip-1',
      type: 'tip',
      title: 'Daglig sjekk før kjøring',
      content: `Før du starter traktoren, gjør en rask sjekk:

**BLOOMS - en huskeregel:**
- **B**remser - fungerer de?
- **L**ys - virker alle lys?
- **O**lje - sjekk nivå på motor og hydraulikk
- **O**mgivelser - er det klart rundt traktoren?
- **M**otor - lytt etter unormale lyder
- **S**ikkerhet - er verneinnretninger på plass?

Denne rutinen tar få minutter og kan forebygge ulykker og dyre reparasjoner.`,
    },
    {
      id: 'naturbruk-vg1-7-1-text-4',
      type: 'text',
      content: `## Andre kjøretøy i naturbruk

**ATV (All Terrain Vehicle):**
- Firehjuls motorsykkel
- Førerkort klasse S fra 16 år
- Maks 15 år på privat grunn med tilsyn
- Brukes til tilsyn, gjeting, transport
- Kan ha tilhenger og redskaper

**UTV (Utility Task Vehicle):**
- Side-by-side kjøretøy
- Plass til flere personer
- Lasteplan bak
- Ofte brukt i skog og utmark

**Snøscooter:**
- Førerkort klasse S
- Begrenset bruk - må ha løyve
- Viktig i reindrift og fjellområder

**Truck og lastebil:**
- Transport av for, dyr, produkter
- Førerkort klasse C for lastebil
- Klasse CE for vogntog`,
    },
    {
      id: 'naturbruk-vg1-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Valg av riktig traktor',
      problem: 'En bonde skal kjøpe ny traktor. Gården har 200 dekar dyrket mark, 500 dekar skog, og han driver med melkeproduksjon. Hvilke faktorer bør han vurdere?',
      solution: `**Vurdering av traktorbehov:**

**Bruksområder å dekke:**
- Jordarbeiding (pløying, harving)
- Fôrhøsting (slåmaskin, rundballepresse)
- Fôring i fjøset (frontlaster)
- Transport (tilhenger med fôr, gjødsel)
- Enklere skogsarbeid

**Anbefalt traktorstørrelse:**
- 100-150 hk for denne gården
- Nok kraft til plog og rundballepresse
- Ikke for stor for daglig bruk i fjøset

**Viktige egenskaper:**
- Firehjulstrekk (nødvendig)
- Frontlaster (fôring, lasting)
- God hydraulikkkapasitet
- Komfortabel førerplass (mange timer)
- Vendegir for effektivt arbeid

**Økonomiske vurderinger:**
- Ny vs. brukt traktor
- Driftskostnader
- Leasingmuligheter
- Videresalgsverdi

**Konklusjon:**
En mellomklasse traktor på 120-140 hk med frontlaster vil dekke de fleste behovene. For større skogsarbeider kan det lønne seg å leie inn entreprenør.`,
    },
    {
      id: 'naturbruk-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv traktorens hovedkomponenter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hoveddelene i traktorens drivlinje?',
            solution: 'Motor, clutch/kobling, girkasse, differensial, drivaksler og hjul/belter.',
          },
          {
            label: 'b',
            task: 'Forklar hva kraftuttaket (PTO) brukes til.',
            solution: 'Kraftuttaket er en roterende aksel som overfører kraft fra motoren til tilkoblede redskaper, slik at disse kan drives av traktorens motor.',
          },
          {
            label: 'c',
            task: 'Hva er trepunktsopphenget, og hvorfor er det viktig?',
            solution: 'Trepunktsopphenget er et standardisert festesystem med to løftearmer og én toppleftestang som gjør det mulig å montere og løfte redskaper bak på traktoren.',
          },
        ],
        solution: 'Traktorens hovedkomponenter inkluderer motor, drivlinje, kraftuttak, hydraulikksystem og trepunktsoppheng.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er alderskravene for å kjøre traktor?',
        subTasks: [
          {
            label: 'a',
            task: 'Fra hvilken alder kan du ta traktorførerkort (klasse T)?',
            solution: 'Fra 16 år, med bestått trafikalt grunnkurs.',
          },
          {
            label: 'b',
            task: 'Når kan du kjøre traktor på privat eiendom uten førerkort?',
            solution: 'Fra 15 år kan du kjøre traktor på egen eller foreldrenes eiendom, men ikke på offentlig vei.',
          },
        ],
        solution: 'Traktorførerkort kan tas fra 16 år. Fra 15 år kan man kjøre på privat eiendom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom de ulike traktortypene.',
        solution: 'Jordbrukstraktor er allsidig for gårdsbruk. Skogstraktor er forsterket for tøffe forhold. Kompakttraktor er liten og smidig for mindre arealer. Redskapsbærer kan montere redskaper flere steder. Beltegående traktor har lavt marktrykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bør du sjekke før du starter traktoren?',
        solution: 'Bruk BLOOMS: Bremser, Lys, Olje (motor og hydraulikk), Omgivelser (klart rundt traktoren), Motor (lytt etter unormale lyder), Sikkerhet (verneinnretninger på plass).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke andre kjøretøy brukes i naturbruk, og hva er alderskravene?',
        solution: 'ATV krever førerkort klasse S fra 16 år. UTV er side-by-side kjøretøy. Snøscooter krever klasse S og løyve. Lastebil krever klasse C eller CE.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter hvorfor differensialsperre er viktig, og når den skal brukes.',
        solution: 'Differensialsperre kobler sammen bakhjulene slik at begge spinner likt. Den brukes ved dårlig grep, for eksempel i gjørme eller på is. Den må kobles ut ved svinging for å unngå slitasje og dårlig styring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Landbruksredskaper og teknikk
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_7_2: TextbookChapter = {
  id: 'naturbruk-vg1-7-2',
  courseId: 'naturbruk-vg1',
  chapterNumber: '7.2',
  title: 'Landbruksredskaper og teknikk',
  description: 'Lær om redskaper til jordarbeiding, såing, høsting og andre landbruksoppgaver.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beskrive vanlige landbruksredskaper og deres bruksområder',
    'forklare grunnleggende jordarbeidingsteknikk',
  ],
  content: [
    {
      id: 'naturbruk-vg1-7-2-intro',
      type: 'text',
      content: `## Redskaper for effektivt landbruk

Landbruksredskaper er traktorens forlengede armer. Fra pløying til høsting finnes det spesialiserte redskaper for hver oppgave. Å kjenne til de viktigste redskapene, hvordan de fungerer og når de brukes, er essensielt for alle som jobber med planteproduksjon.

**I dette kapittelet lærer du:**
- Redskaper for jordarbeiding
- Redskaper for såing og planting
- Høsteredskaper
- Gjødsel- og plantevernutstyr
- Grunnleggende teknikk og innstilling

**God redskapskunnskap gir bedre resultater, lavere kostnader og sikrere arbeid.**`,
    },
    {
      id: 'naturbruk-vg1-7-2-def-1',
      type: 'definition',
      title: 'Jordarbeiding',
      content: `**Jordarbeiding** er alle tiltak som endrer jordas struktur for å skape gode vekstvilkår. Målet er å løsne jorda, blande inn planterester, bekjempe ugress og lage et godt såbed.

**Primær jordarbeiding:** Dypere bearbeiding (pløying, dypharving)
**Sekundær jordarbeiding:** Grunnere bearbeiding for såbed (harving, slodding)`,
    },
    {
      id: 'naturbruk-vg1-7-2-text-1',
      type: 'text',
      content: `## Redskaper for jordarbeiding

**Plogen**

Plogen er det tradisjonelle redskapet for primær jordarbeiding.

**Funksjon:**
- Snur jordlaget opp-ned
- Begraver planterester og ugress
- Løsner jorda i dybden

**Deler av plogen:**
- **Skjær:** Kutter jorda horisontalt
- **Veltefjøl:** Snur jordstrimlen
- **Landsiden:** Støtter mot fåren
- **Ristel:** Skjærer jorda vertikalt

**Plogtyper:**
- Vendeplog - kan pløye begge veier
- Skålplog - for steinrik jord
- Halvsvingplog - enklere konstruksjon

**Pløyedybde:** Vanligvis 20-25 cm

**Harver**

**Skålharv:**
- Konkave skåler som kutter og blander
- Til grunnere jordarbeiding
- Kan erstatte pløying i noen tilfeller

**Tindharv/Fjærharv:**
- Fjærende tinder som løsner jorda
- Brukes til såbedpreparering
- Lett jordarbeiding uten å snu

**Rotorharv:**
- Roterende tinder
- Finfordeler jorda effektivt
- Ofte kombinert med såmaskin`,
    },
    {
      id: 'naturbruk-vg1-7-2-def-2',
      type: 'definition',
      title: 'Såmaskin',
      content: `En **såmaskin** er et redskap som plasserer frø i jorda på riktig dybde og med jevn avstand. Moderne såmaskiner har presisjonsutmatere som sikrer nøyaktig såmengde.

**Typer:**
- **Kombisåmaskin:** Sår og gjødsler samtidig
- **Direktesåmaskin:** Sår uten forutgående jordarbeiding
- **Presisjonsåmaskin:** For radkulturer som mais og beter`,
    },
    {
      id: 'naturbruk-vg1-7-2-text-2',
      type: 'text',
      content: `## Redskaper for såing og gjødsling

**Såmaskiner**

**Funksjon:**
- Plasserer frø på riktig dybde
- Sikrer jevn fordeling
- Dekker frøene med jord

**Viktige innstillinger:**
- Såmengde (kg/dekar)
- Sådybde (cm)
- Radavstand

**Kombisåmaskin:**
- Sår og gjødsler i samme operasjon
- Gjødsla plasseres ved siden av eller under frøet
- Effektivt og presist

**Gjødselspredere**

**Sentrifugalspreder:**
- Spinnende tallerken kaster ut gjødsel
- Stor arbeidsbredde (12-36 meter)
- Krever kalibrering for jevn spredning

**Pendelspeeder:**
- Pendelrør fordeler gjødsla
- Mindre arbeidsbredde
- Ofte brukt på mindre arealer

**Presisjonsspredning:**
- GPS-styrt mengdejustering
- Variabel dosering etter jordkart
- Reduserer overforbruk`,
    },
    {
      id: 'naturbruk-vg1-7-2-text-3',
      type: 'text',
      content: `## Høsteredskaper

**Slåmaskin**

Brukes til å slå gras til for eller høy.

**Typer:**
- **Skiveslåmaskin:** Roterende skiver med kniver
- **Trommelslåmaskin:** Roterende trommer
- **Fingerslåmaskin:** Tradisjonell med saksebevegelse

**Arbeidsbredde:** 2-10 meter avhengig av type

**Rive**

Samler det slåtte graset i strenger for videre behandling.

**Typer:**
- **Sentralrive:** Samler til én streng i midten
- **Hesterive:** Tradisjonell med fjærende tinder
- **Rotorrive:** Roterende tinder

**Rundballepresse**

Presser graset til kompakte rundballer.

**Funksjoner:**
- Oppsamling av gras
- Pressing til fast balle
- Automatisk innpakking (kombipresse)

**Ballestørrelse:** Vanligvis 120-150 cm diameter

**Skurtresker**

Høster og tresker korn i én operasjon.

**Hovedfunksjoner:**
- Skjærer kornaksene
- Tresker ut kornet
- Renser kornet
- Lagrer i tank

**Arbeidsbredde:** 3-12 meter`,
    },
    {
      id: 'naturbruk-vg1-7-2-tip-1',
      type: 'tip',
      title: 'Riktig innstilling er nøkkelen',
      content: `Alle redskaper må stilles inn riktig for å fungere optimalt. Les alltid bruksanvisningen og juster etter:

- **Jordtype:** Lett eller tung jord krever ulik innstilling
- **Fuktighet:** Våt jord oppfører seg annerledes
- **Vekst:** Ulike vekster har ulike krav
- **Hastighet:** Følg anbefalinger for arbeidshastighet

Feil innstilling gir dårligere resultat, høyere dieselforbruk og unødvendig slitasje.`,
    },
    {
      id: 'naturbruk-vg1-7-2-def-3',
      type: 'definition',
      title: 'Plantevernutstyr',
      content: `**Åkersprøyte** er et redskap for å spre plantevernmidler (ugress-, sopp- og insektmidler) på åkeren.

**Hovedkomponenter:**
- Tank for sprøytevæske
- Pumpe
- Bom med dyser
- Styringssystem for dosering

**Sikkerhet:** Krever autorisasjonsbevis for kjøp og bruk av plantevernmidler.`,
    },
    {
      id: 'naturbruk-vg1-7-2-text-4',
      type: 'text',
      content: `## Andre viktige redskaper

**Frontlaster**
- Monteres foran på traktoren
- Brukes til lasting, fôring, rydding
- Kan ha ulike redskaper: skuffe, pallegaffel, gripeklo

**Tilhenger/Vogn**
- Transport av avlinger, gjødsel, ved
- Ulike størrelser og typer
- Tippvogn for enkel tømming

**Steinplukker**
- Samler opp stein fra jordet
- Viktig etter pløying på steinrik jord

**Beitepusser**
- Klipper vegetasjon på beite
- Holder kulturlandskapet åpent
- Knuser og fordeler planterester`,
    },
    {
      id: 'naturbruk-vg1-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Våronn - rekkefølge på arbeidsoperasjoner',
      problem: 'Beskriv rekkefølgen på arbeidsoperasjonene ved våronn for korndyrking.',
      solution: `**Våronn - fra vinter til såing:**

**1. Vurdering av jorda**
- Er jorda tørr nok?
- Lagelighetstest: Trykk jorda i hånda - den skal smuldre

**2. Jordarbeiding (hvis ikke høstpløyd)**
- Pløying eller skålharving
- Arbeid når jorda er lagelig

**3. Såbedpreparering**
- Slodding eller harving
- Mål: Jevn overflate, fin struktur
- 2-4 cm løst sjikt for frøene

**4. Kalking (hvis nødvendig)**
- Spres med sentrifugalspreder
- Helst om høsten, men kan gjøres om våren

**5. Gjødsling og såing**
- Kombisåmaskin legger gjødsel og frø
- Eller: Først gjødselspredning, så såing
- Riktig såmengde og dybde

**6. Tromling (valgfritt)**
- Presser jorda rundt frøene
- Gir bedre jordkontakt
- Viktig ved tørre forhold

**Tidsbruk:** Ca. 1-2 timer per dekar avhengig av utstyr og forhold.`,
    },
    {
      id: 'naturbruk-vg1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv funksjonene til de viktigste jordarbeidingsredskapene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gjør plogen med jorda?',
            solution: 'Plogen snur jordlaget opp-ned, begraver planterester og ugress, og løsner jorda i dybden (20-25 cm).',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen på skålharv og tindharv?',
            solution: 'Skålharv har konkave skåler som kutter og blander jorda, egnet for grovere arbeid. Tindharv har fjærende tinder som løsner jorda uten å snu den, brukes til finere såbedpreparering.',
          },
        ],
        solution: 'Plog snur jorda, harver løsner og finfordeler, rotorharv finfordeler effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvordan en kombisåmaskin fungerer.',
        solution: 'En kombisåmaskin sår frø og gjødsler samtidig i samme arbeidsoperasjon. Gjødsla plasseres ved siden av eller under frøet for optimal tilgang. Maskinen har separate beholdere for frø og gjødsel, og presisjonsutmatere som sikrer riktig mengde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre typer høsteredskaper og forklar hva de brukes til.',
        solution: 'Slåmaskin brukes til å slå gras. Rive samler graset i strenger. Rundballepresse presser graset til kompakte baller. Skurtresker høster og tresker korn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er riktig innstilling av redskaper viktig?',
        solution: 'Riktig innstilling gir bedre resultat, lavere dieselforbruk, mindre slitasje og sikrere arbeid. Feil innstilling kan gi dårlig såbed, ujevn såing, større motstand og økte kostnader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv arbeidsoperasjonene ved våronn i riktig rekkefølge.',
        solution: 'Rekkefølge: 1) Vurdere om jorda er lagelig, 2) Jordarbeiding (pløying/harving), 3) Såbedpreparering, 4) Kalking ved behov, 5) Gjødsling og såing, 6) Eventuelt tromling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: Motorsag og skogsmaskiner
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_7_3: TextbookChapter = {
  id: 'naturbruk-vg1-7-3',
  courseId: 'naturbruk-vg1',
  chapterNumber: '7.3',
  title: 'Motorsag og skogsmaskiner',
  description: 'Lær om sikker bruk av motorsag og moderne skogsmaskiner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive sikker bruk og vedlikehold av motorsag',
    'forklare funksjonene til vanlige skogsmaskiner',
  ],
  content: [
    {
      id: 'naturbruk-vg1-7-3-intro',
      type: 'text',
      content: `## Motorsag og skogsmaskiner - effektivt og trygt skogsarbeid

Motorsaga er skogsarbeiderens viktigste håndholdte verktøy, mens moderne skogsmaskiner har revolusjonert tømmerhogsten. Motorsagarbeid krever grundig opplæring fordi det er blant de farligste arbeidsoperasjonene i naturbruket.

**I dette kapittelet lærer du:**
- Motorsagas oppbygning og funksjon
- Sikker bruk og obligatorisk verneutstyr
- Grunnleggende vedlikehold
- Moderne skogsmaskiner
- Krav til opplæring og sertifisering

**Husk: Motorsag er et profesjonelt verktøy som krever respekt, kunnskap og riktig utstyr.**`,
    },
    {
      id: 'naturbruk-vg1-7-3-def-1',
      type: 'definition',
      title: 'Motorsag',
      content: `En **motorsag** er et motordrevet verktøy med en kjedekrans som roterer rundt et sverd. Den brukes til felling, kvisting og kapping av trær.

**Hovedkomponenter:**
- **Motor:** Bensin- eller batteridrevet
- **Sverd:** Styrer kjedet
- **Kjede:** Har skarpe tenner som skjærer
- **Bremse:** Stopper kjedet ved tilbakeslag
- **Håndtak:** For- og bakhåndtak med vernebøyle`,
    },
    {
      id: 'naturbruk-vg1-7-3-text-1',
      type: 'text',
      content: `## Motorsagas oppbygning

**Motoren**
- Totakts bensinmotor (vanligst)
- Firetakts motor (noen modeller)
- Batteridrevet (økende populært)
- Effekt måles i kubikkcentimeter (cc) eller watt

**Sverdet**
- Leder kjedet rundt
- Lengder fra 30 til over 90 cm
- Lengre sverd = tyngre tre kan felles
- Har smørehull for kjetting

**Sagkjedet**
- Skjærende tenner
- Dybdebegrensere styrer skjæredybden
- Ulike typer for ulike oppgaver
- Må være skarpt og riktig spent

**Sikkerhetsfunksjoner:**
- **Kjedebremse:** Stopper kjedet momentant
- **Gasslås:** Hindrer utilsiktet akselerasjon
- **Fangbolt:** Stopper kjedet ved brudd
- **Håndvern:** Beskytter hendene`,
    },
    {
      id: 'naturbruk-vg1-7-3-def-2',
      type: 'definition',
      title: 'Tilbakeslag (kickback)',
      content: `**Tilbakeslag** er den farligste situasjonen ved motorsagbruk. Det skjer når den øvre delen av sverdet (kickback-sonen) treffer noe, og saga kastes ukontrollert mot brukeren.

**Forebygging:**
- Vær oppmerksom på sverdspissen
- Bruk saga med kjedebremse
- Hold godt grep med begge hender
- Stå støtt med god balanse`,
    },
    {
      id: 'naturbruk-vg1-7-3-text-2',
      type: 'text',
      content: `## Obligatorisk verneutstyr

Ved motorsagarbeid er følgende verneutstyr **påbudt**:

**Hjelm med visir og hørselsvern**
- Beskytter mot fallende grener
- Visiret beskytter øynene
- Hørselsvernet demper støy (over 100 dB)

**Vernebukse med sagbeskyttelse**
- Lange fibre som stopper kjedet
- Må dekke fra livet til anklene
- Finnes som bukse eller buksebein

**Vernesko/støvler**
- Sagbeskyttelse på tåpartiet
- Stålkappe
- God ankelstøtte
- Sklisikker såle

**Vernehansker**
- Sagbeskyttelse på venstre hanske
- God grep
- Beskytter mot kulde og fuktighet

**Signalfargede klær**
- Oransje eller gult
- Gjør deg synlig i skogen`,
    },
    {
      id: 'naturbruk-vg1-7-3-text-3',
      type: 'text',
      content: `## Sikker bruk av motorsag

**Før oppstart:**
- Sjekk at saga er i orden
- Kontroller bremse og sikkerhetsfunksjoner
- Sjekk kjede og sverd
- Fyll drivstoff og kjedeolje

**Oppstart:**
1. Aktiver kjedebremsen
2. Sett saga støtt på bakken
3. Hold fast i håndtaket
4. Trekk i startsnoren med jevne drag

**Under bruk:**
- Hold saga med begge hender
- Stå støtt med god balanse
- Jobb i passe høyde
- Vær oppmerksom på omgivelsene
- Ta pauser for å unngå utmattelse

**Felling av trær:**
1. Vurder treet og fallretning
2. Planlegg retrettmulighet
3. Lag fallskår (åpningskutt)
4. Lag fellekutt fra motsatt side
5. Trekk deg tilbake i sikker vinkel

**Aldri:**
- Sag over skulderhøyde
- Arbeid alene med farlige trær
- Bruk saga uten verneutstyr
- Sag med slap kjede`,
    },
    {
      id: 'naturbruk-vg1-7-3-tip-1',
      type: 'tip',
      title: 'Vedlikehold av motorsag',
      content: `**Daglig vedlikehold:**
- Rengjør luftfilter
- Sjekk kjedespenn
- Kontroller kjedeskarphet
- Fyll kjedeolje
- Rengjør sverdspor

**Regelmessig:**
- Slip eller bytt kjede
- Rengjør tennplugg
- Sjekk startsnor
- Kontroller vibrasjonsdempere

**Oppbevaring:**
- Tøm tanken ved lengre pause
- Monter sverddeksel
- Oppbevar tørt og kjølig`,
    },
    {
      id: 'naturbruk-vg1-7-3-def-3',
      type: 'definition',
      title: 'Skogsmaskiner',
      content: `**Hogstmaskin (harvester):** Feller, kvister og kapper trær i én operasjon. Styres av én operatør fra en lukket hytte.

**Lassbærer (forwarder):** Transporterer tømmeret fra hogstfeltet til velteplass ved vei. Har kran og lasteplan.

**Disse maskinene har erstattet mye av det manuelle arbeidet i skogen.**`,
    },
    {
      id: 'naturbruk-vg1-7-3-text-4',
      type: 'text',
      content: `## Moderne skogsmaskiner

**Hogstmaskin (Harvester)**
- Feller trær med sagsverd eller kjede
- Kvister med kvistematter
- Kapper i ønsket lengde
- Måler og registrerer hvert tre
- Kapasitet: 150-400 trær per dag

**Lassbærer (Forwarder)**
- Henter tømmeret i skogen
- Hydraulisk kran med grip
- Lastekapasitet: 10-20 tonn
- Kjører på belter eller hjul
- Følger hogstmaskinens spor

**Andre skogsmaskiner:**

**Skogstraktor med vinsj**
- Trekker ut tømmer med wire
- Brukes i bratt terreng
- Enklere og billigere enn store maskiner

**Kabelkran**
- For svært bratt terreng
- Tømmeret henger under kabel
- Brukes spesielt i vestlandske brattlendte skoger

**Fliskutter**
- Lager flis av hogstavfall
- Råstoff til bioenergi
- Kan være traktor- eller lastebilmontert`,
    },
    {
      id: 'naturbruk-vg1-7-3-text-5',
      type: 'text',
      content: `## Krav til opplæring

**Motorsag:**
- Lovpålagt opplæring for yrkesbruk
- Kurs typisk 2-5 dager
- Teori og praktiske øvelser
- Må dokumenteres

**Skogsmaskiner:**
- Fagbrev som skogsoperatør
- Eller spesialkurs for maskinfører
- Simulatortrening før maskinføring

**Viktig å huske:**
- Opplæring er ikke frivillig for yrkesbruk
- Forsikring kan være ugyldig uten dokumentert opplæring
- Arbeidsgiver har ansvar for at ansatte har opplæring`,
    },
    {
      id: 'naturbruk-vg1-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv motorsagas hovedkomponenter og sikkerhetsfunksjoner.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn de fire hovedkomponentene i en motorsag.',
            solution: 'Motor, sverd, kjede og håndtak.',
          },
          {
            label: 'b',
            task: 'Hva er kjedebremsens funksjon?',
            solution: 'Kjedebremsen stopper kjedet momentant ved tilbakeslag eller annen farlig situasjon.',
          },
        ],
        solution: 'Motorsaga har motor, sverd, kjede og håndtak. Sikkerhetsfunksjonene inkluderer kjedebremse, gasslås, fangbolt og håndvern.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er tilbakeslag (kickback), og hvordan forebygger du det?',
        solution: 'Tilbakeslag skjer når den øvre delen av sverdet treffer noe, og saga kastes mot brukeren. Forebygging: Vær oppmerksom på sverdspissen, bruk kjedebremse, hold godt grep med begge hender, stå støtt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'List opp alt påbudt verneutstyr ved motorsagarbeid.',
        solution: 'Hjelm med visir og hørselsvern, vernebukse med sagbeskyttelse, vernesko med sagbeskyttelse og stålkappe, vernehansker med sagbeskyttelse, signalfargede klær.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom hogstmaskin og lassbærer.',
        solution: 'Hogstmaskin (harvester) feller, kvister og kapper trær. Lassbærer (forwarder) transporterer det kappede tømmeret fra hogstfeltet til velteplass ved vei.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv trinnene ved sikker felling av et tre.',
        solution: '1) Vurder treet og planlegg fallretning, 2) Planlegg retrettmulighet (45 grader bak), 3) Lag fallskår (åpningskutt) i fallretningen, 4) Lag fellekutt fra motsatt side litt over fallskåret, 5) Trekk deg tilbake i sikker vinkel når treet begynner å falle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvorfor er opplæring i motorsagbruk lovpålagt?',
        solution: 'Motorsagarbeid er svært farlig med høy ulykkesrisiko. Lovpålagt opplæring sikrer at brukeren kjenner sikkerhetsprosedyrer, verneutstyr og riktig teknikk. Uten dokumentert opplæring kan forsikring være ugyldig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: Håndverktøy og redskaper
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_7_4: TextbookChapter = {
  id: 'naturbruk-vg1-7-4',
  courseId: 'naturbruk-vg1',
  chapterNumber: '7.4',
  title: 'Håndverktøy og redskaper',
  description: 'Lær om tradisjonelle og moderne håndverktøy i naturbruk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til vanlige håndverktøy og deres bruksområder',
    'forklare riktig bruk og vedlikehold av håndverktøy',
  ],
  content: [
    {
      id: 'naturbruk-vg1-7-4-intro',
      type: 'text',
      content: `## Håndverktøy - grunnlaget i alt praktisk arbeid

Selv i en tid med maskiner og teknologi er håndverktøy uunnværlige i naturbruk. De brukes til alt fra hagearbeid til vedlikehold av gjerder, fra dyrestell til enkle reparasjoner. Å kunne velge riktig verktøy og bruke det korrekt er en grunnleggende ferdighet.

**I dette kapittelet lærer du:**
- Vanlige håndverktøy for jordarbeiding og hagebruk
- Verktøy for tre- og gjerdearbeid
- Verktøy for dyrestell
- Riktig bruk og vedlikehold
- Sikkerhet ved bruk av håndverktøy`,
    },
    {
      id: 'naturbruk-vg1-7-4-def-1',
      type: 'definition',
      title: 'Håndverktøy',
      content: `**Håndverktøy** er verktøy som drives av menneskelig kraft, uten motor eller elektrisk drift. De er enkle, pålitelige og krever minimalt vedlikehold sammenlignet med motordrevne verktøy.

**Fordeler:**
- Ingen drivstoff eller strøm nødvendig
- Stille i bruk
- Rimelige i innkjøp
- Enkelt vedlikehold
- Gir god kontroll og presisjon`,
    },
    {
      id: 'naturbruk-vg1-7-4-text-1',
      type: 'text',
      content: `## Verktøy for jordarbeiding

**Spade**
- Det viktigste graveverktøyet
- Brukes til graving, flytting av jord
- Velg rett type: rett eller spiss egg
- Trebladet for lett jord, smidd for tung

**Greip (gaffel)**
- 4-6 tinder
- Brukes til løs jord, kompost, gjødsel
- Skånsom mot planterøtter
- Lettere enn spade

**Hakke**
- Løshakking av jord
- Fjerning av ugress
- Finnes i flere varianter:
  - Bredhakke
  - Smalhakke
  - Spetthakke (kombinert med spett)

**Kultivator (håndholdt)**
- 3-5 tinder
- Løsner overflaten
- Lufter jorda
- God for luking mellom planter

**Rive**
- Samler løv, gras, stein
- Jevner overflater
- Finnes i tre, plast eller metall

**Trillebår**
- Transport av jord, stein, avfall
- Velg størrelse etter bruk
- Ett eller to hjul`,
    },
    {
      id: 'naturbruk-vg1-7-4-def-2',
      type: 'definition',
      title: 'Sekkatør',
      content: `En **sekkatør** (fra fransk: sécateur) er en håndholdt saks for kutting av greiner og kvister opptil ca. 2-3 cm tykkelse.

**Typer:**
- **Bypass-sekkatør:** Bladene glir forbi hverandre (renest kutt)
- **Ambolt-sekkatør:** Ett blad mot fast underlag (for tørre greiner)`,
    },
    {
      id: 'naturbruk-vg1-7-4-text-2',
      type: 'text',
      content: `## Verktøy for klipping og beskjæring

**Sekkatør**
- Kutter greiner opptil 2-3 cm
- Velg bypass for levende planter
- Hold skarpt for rene kutt

**Grensaks (tomannssaks)**
- Lange skaft for økt kraft
- Greiner opptil 5-6 cm
- Brukes med begge hender

**Hekksaks**
- For klipping av hekker
- Manuelle eller elektriske
- Lange, flate blader

**Grensag**
- Håndsag for greiner
- Grovtannede for rask saging
- Buet blad følger greinformen
- Foldesag er praktisk å ha med

**Øks**
- Felling av små trær
- Kvisting
- Kløyving av ved
- Velg vekt etter oppgave`,
    },
    {
      id: 'naturbruk-vg1-7-4-text-3',
      type: 'text',
      content: `## Verktøy for gjerder og bygg

**Hammer**
- Spiker og plugger
- Ulike størrelser og vekter
- Snekkerhammer: 500-700 g
- Slegge: 3-5 kg

**Tang og knipertang**
- Holde, bøye, klippe
- Wire og gjerdetråd
- Spiker som skal trekkes ut

**Skrutrekker**
- Manuell eller med bits
- Stjerne (Phillips) og spor
- Ulike størrelser

**Vater og meterstokk**
- Sikrer at ting blir rett
- Vateret viser loddrett og vannrett
- Meterstokk for oppmåling

**Spett**
- Jernstang for breaking
- Løfting av tunge ting
- Lage hull i hard jord

**Stolpespade**
- Smal, lang spade
- Graver smale hull til stolper
- Mye brukt ved gjerdebygging`,
    },
    {
      id: 'naturbruk-vg1-7-4-text-4',
      type: 'text',
      content: `## Verktøy for dyrestell

**Hovkniv**
- Rengjøring og beskjæring av hover
- Krummet blad
- Krever opplæring

**Klosakser**
- For klipping av klør på hund, katt
- Ulike størrelser

**Børster og strigler**
- Daglig stell av hester og storfe
- Ulike typer for ulike formål
- Kardebørste, piggbørste, flettebørste

**Høygaffel**
- Lang gaffel for høy og halm
- Lettere enn vanlig greip
- Viktig i fjøsarbeid

**Gjødselsleif**
- For rensing av båser
- Flat skuffe med kant
- Også kalt gjødselspade`,
    },
    {
      id: 'naturbruk-vg1-7-4-tip-1',
      type: 'tip',
      title: 'Vedlikehold av håndverktøy',
      content: `Godt vedlikeholdt verktøy varer lenger og er sikrere:

**Etter bruk:**
- Rengjør for jord og plantesaft
- Tørk av fuktighet
- Heng opp eller sett bort ordentlig

**Regelmessig:**
- Slip egg på spade, hakke, øks
- Olj metalldelene lett
- Sjekk skaftets tilstand
- Stram løse håndtak

**Skarpt verktøy:**
- Er sikrere (krever mindre kraft)
- Gir renere kutt (bedre for plantene)
- Jobber mer effektivt`,
    },
    {
      id: 'naturbruk-vg1-7-4-def-3',
      type: 'definition',
      title: 'Ergonomi',
      content: `**Ergonomi** handler om å tilpasse arbeidet til menneskets fysiske forutsetninger. Ved bruk av håndverktøy betyr dette:

- Velg riktig størrelse og vekt
- Bruk riktig arbeidsteknikk
- Ta pauser
- Varier arbeidsoppgaver
- Bruk verneutstyr når nødvendig`,
    },
    {
      id: 'naturbruk-vg1-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv forskjellen mellom spade og greip.',
        subTasks: [
          {
            label: 'a',
            task: 'Når bruker du spade?',
            solution: 'Spade brukes til graving og flytting av jord, spesielt i tett eller tung jord.',
          },
          {
            label: 'b',
            task: 'Når bruker du greip?',
            solution: 'Greip brukes til løs jord, kompost og gjødsel. Den er skånsom mot planterøtter og lettere enn spaden.',
          },
        ],
        solution: 'Spade er best for graving i tung jord, greip for løs jord og materialer som kompost.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på bypass- og ambolt-sekkatør?',
        solution: 'Bypass-sekkatør har blader som glir forbi hverandre og gir renest kutt, best for levende planter. Ambolt-sekkatør har ett blad som treffer fast underlag, egnet for tørre greiner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn fem verktøy som brukes til gjerdebygging.',
        solution: 'Hammer, tang/knipertang, spett, stolpespade, vater, skrutrekker, slegge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det viktig å holde håndverktøy skarpe?',
        solution: 'Skarpt verktøy er sikrere (krever mindre kraft og glipper sjeldnere), gir renere kutt (bedre for plantene), og jobber mer effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva menes med ergonomi, og hvorfor er det viktig ved bruk av håndverktøy?',
        solution: 'Ergonomi handler om å tilpasse arbeidet til kroppen. Det er viktig for å unngå skader og slitasje. Velg riktig verktøystørrelse, bruk riktig teknikk, ta pauser og varier oppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.5: HMS og sikkerhet i naturbruk
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_7_5: TextbookChapter = {
  id: 'naturbruk-vg1-7-5',
  courseId: 'naturbruk-vg1',
  chapterNumber: '7.5',
  title: 'HMS og sikkerhet i naturbruk',
  description: 'Lær om helse, miljø og sikkerhet i naturbruksnæringene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for HMS-krav i naturbruk',
    'identifisere farer og forebygge ulykker',
  ],
  content: [
    {
      id: 'naturbruk-vg1-7-5-intro',
      type: 'text',
      content: `## HMS - grunnlaget for et trygt arbeidsliv

Naturbruk er blant næringene med flest arbeidsulykker i Norge. Arbeid med maskiner, dyr og i naturen innebærer mange risikoer. God kunnskap om HMS (Helse, Miljø og Sikkerhet) er derfor livsviktig - bokstavelig talt.

**I dette kapittelet lærer du:**
- Hva HMS innebærer og hvorfor det er viktig
- De vanligste farene i naturbruk
- Hvordan identifisere og forebygge risikoer
- Verneutstyr og sikkerhetsprosedyrer
- Lovverk og ansvar

**Ingen arbeidsoppgave er så viktig at den ikke kan gjøres sikkert.**`,
    },
    {
      id: 'naturbruk-vg1-7-5-def-1',
      type: 'definition',
      title: 'HMS',
      content: `**HMS** står for Helse, Miljø og Sikkerhet. Det er et samlebegrep for alt arbeid med å sikre et trygt og godt arbeidsmiljø.

**Helse:** Forebygge sykdom og skade hos arbeidstakere
**Miljø:** Ta vare på det ytre miljøet
**Sikkerhet:** Forebygge ulykker og farlige situasjoner

**HMS-arbeid er lovpålagt for alle virksomheter i Norge.**`,
    },
    {
      id: 'naturbruk-vg1-7-5-text-1',
      type: 'text',
      content: `## Risikoer i naturbruk

**Maskinulykker**
- Velt med traktor (vanligste dødsårsak)
- Klemskader ved maskiner
- Skader fra kraftuttak
- Motorsagulykker

**Dyreulykker**
- Spark og stanging fra storfe og hest
- Klemming mot vegger og innredning
- Bitt fra hunder
- Allergiske reaksjoner

**Fallulykker**
- Fall fra høyder (silo, loft, maskiner)
- Snubling og utglidning
- Fall gjennom tak og gulv

**Kjemiske farer**
- Plantevernmidler
- Gjødsel og ammoniakk
- Drivstoff og olje
- Silogass

**Ergonomiske belastninger**
- Tunge løft
- Ensidige bevegelser
- Vibrasjon fra maskiner
- Kulde og fuktighet

**Støy**
- Maskiner og motorer
- Kan gi varig hørselsskade
- Grense: 85 dB over tid`,
    },
    {
      id: 'naturbruk-vg1-7-5-def-2',
      type: 'definition',
      title: 'Risikovurdering',
      content: `En **risikovurdering** er en systematisk gjennomgang av hva som kan forårsake skade eller sykdom på arbeidsplassen.

**Tre hovedspørsmål:**
1. Hva kan gå galt?
2. Hvor sannsynlig er det?
3. Hva blir konsekvensene?

**Risiko = Sannsynlighet × Konsekvens**

Alle virksomheter plikter å gjennomføre risikovurdering.`,
    },
    {
      id: 'naturbruk-vg1-7-5-text-2',
      type: 'text',
      content: `## Verneutstyr

**Personlig verneutstyr (PVU)**

**Hode:**
- Hjelm (skogsarbeid, bygg)
- Hørselsvern (maskiner, motorsag)
- Vernebriller (sprøyting, sliping)
- Ansiktsskjerm (kjemikalier)

**Kropp:**
- Vernebukse (motorsag)
- Høysynlighetsklær (veiarbeid)
- Regntøy (utendørs arbeid)
- Varmedrakt (kulde)

**Hender:**
- Arbeidshansker (generelt)
- Vernehansker (motorsag)
- Kjemikaliehansker (sprøytemidler)

**Føtter:**
- Vernesko med stålkappe
- Gummistøvler (fjøs, felt)
- Motorsagstøvler (skogsarbeid)

**Åndedrett:**
- Støvmaske (støv, pollen)
- Halvmaske med filter (sprøyting)
- Friskluftmaske (siloarbeid)`,
    },
    {
      id: 'naturbruk-vg1-7-5-text-3',
      type: 'text',
      content: `## Sikkerhetstiltak

**Generelle regler:**
- Aldri arbeid alene med farlige oppgaver
- Bruk alltid påbudt verneutstyr
- Følg prosedyrer og instrukser
- Si ifra om feil og mangler
- Ta pauser - utmattelse øker risiko

**Ved maskinarbeid:**
- Les instruksjonsbok
- Gjør daglig sjekk
- Bruk sikkerhetsbeltet i traktor
- Koble fra kraftuttak ved av-/påstigning
- Hold barn unna maskiner

**Ved dyrehåndtering:**
- Kjenn dyrets atferd
- Arbeid rolig og forutsigbart
- Ha retrettmulighet
- Bruk fanghekk og -grinderder nødvendig

**Ved kjemikaliebruk:**
- Les sikkerhetsdatablad
- Bruk riktig verneutstyr
- Oppbevar forsvarlig
- Bland aldri kjemikalier`,
    },
    {
      id: 'naturbruk-vg1-7-5-tip-1',
      type: 'tip',
      title: 'SJA - Sikker Jobb Analyse',
      content: `Før du starter en risikofylt arbeidsoppgave, gjør en rask SJA:

**1. Stopp og tenk:**
- Hva skal jeg gjøre?
- Hvilke farer finnes?

**2. Vurder:**
- Har jeg rett utstyr og verneutstyr?
- Er forholdene trygge?
- Trenger jeg hjelp?

**3. Beslutt:**
- Kan jeg gjøre jobben trygt?
- Hvilke tiltak må jeg ta?

Denne rutinen tar ett minutt og kan redde liv.`,
    },
    {
      id: 'naturbruk-vg1-7-5-def-3',
      type: 'definition',
      title: 'Arbeidsmiljøloven',
      content: `**Arbeidsmiljøloven** er hovedloven for HMS i Norge. Den gjelder for alle som har ansatte.

**Viktige prinsipper:**
- Arbeidsgiver har hovedansvar for HMS
- Arbeidstaker plikter å følge regler
- Verneombud skal ivareta arbeidstakernes interesser
- Arbeidstilsynet fører tilsyn

**Også selvstendig næringsdrivende må følge HMS-krav.**`,
    },
    {
      id: 'naturbruk-vg1-7-5-text-4',
      type: 'text',
      content: `## Førstehjelp

**Alle som arbeider i naturbruk bør kunne grunnleggende førstehjelp.**

**Viktige prinsipper:**
1. **Sikre** skadestedet
2. **Varsle** nødetatene (113)
3. **Gi** livreddende førstehjelp

**Grunnleggende tiltak:**
- Stopp blødning (press og elevasjon)
- Stabilt sideleie ved bevisstløshet
- HLR ved hjertestans
- Hold varme ved sjokk

**Førstehjelpsutstyr:**
- Skal være tilgjengelig på arbeidsstedet
- Sjekk innhold jevnlig
- Alle bør vite hvor det er

**Nødnumre:**
- 113 - Medisinsk nødhjelp
- 110 - Brann
- 112 - Politi

**Ved alvorlige ulykker:**
- Ring alltid 113
- Bli på stedet til hjelpen kommer
- Gi så nøyaktig posisjon som mulig`,
    },
    {
      id: 'naturbruk-vg1-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står HMS for, og hva innebærer det?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva HMS står for.',
            solution: 'HMS står for Helse, Miljø og Sikkerhet.',
          },
          {
            label: 'b',
            task: 'Hvorfor er HMS-arbeid viktig i naturbruk?',
            solution: 'Naturbruk er blant næringene med flest arbeidsulykker. God HMS forebygger skader, sykdom og dødsfall.',
          },
        ],
        solution: 'HMS står for Helse, Miljø og Sikkerhet og handler om å sikre et trygt arbeidsmiljø.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn fem vanlige risikoer i naturbruk.',
        solution: 'Maskinulykker (velt, klemskader), dyreulykker (spark, stanging), fallulykker, kjemiske farer (sprøytemidler, silogass), ergonomiske belastninger (tunge løft), støy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en risikovurdering, og hvilke tre spørsmål skal besvares?',
        solution: 'En risikovurdering er en systematisk gjennomgang av farer på arbeidsplassen. Spørsmålene er: 1) Hva kan gå galt? 2) Hvor sannsynlig er det? 3) Hva blir konsekvensene?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva SJA (Sikker Jobb Analyse) er.',
        solution: 'SJA er en rask vurdering før risikofylt arbeid: 1) Stopp og tenk - hva skal gjøres og hvilke farer finnes, 2) Vurder - har jeg rett utstyr og er forholdene trygge, 3) Beslutt - kan jeg gjøre jobben trygt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er de tre første stegene ved en ulykke?',
        solution: '1) Sikre skadestedet, 2) Varsle nødetatene (113), 3) Gi livreddende førstehjelp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter hvem som har ansvar for HMS på en arbeidsplass.',
        solution: 'Arbeidsgiver har hovedansvar for HMS, inkludert risikovurdering, opplæring og utstyr. Arbeidstaker plikter å følge regler og bruke verneutstyr. Verneombudet ivaretar arbeidstakernes interesser. Arbeidstilsynet fører tilsyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.6: Vedlikehold og reparasjon
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_7_6: TextbookChapter = {
  id: 'naturbruk-vg1-7-6',
  courseId: 'naturbruk-vg1',
  chapterNumber: '7.6',
  title: 'Vedlikehold og reparasjon',
  description: 'Lær om forebyggende vedlikehold og enkel reparasjon av maskiner og utstyr.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare betydningen av forebyggende vedlikehold',
    'utføre enkelt vedlikehold på maskiner og utstyr',
  ],
  content: [
    {
      id: 'naturbruk-vg1-7-6-intro',
      type: 'text',
      content: `## Vedlikehold - nøkkelen til lang levetid

Maskiner og utstyr representerer store investeringer. Godt vedlikehold forlenger levetiden, reduserer driftskostnader og forebygger farlige situasjoner. En time med forebyggende vedlikehold kan spare mange timer med reparasjon.

**I dette kapittelet lærer du:**
- Prinsipper for forebyggende vedlikehold
- Vedlikeholdsrutiner for vanlig utstyr
- Smøring og oljeskift
- Enkle reparasjoner
- Når du bør søke profesjonell hjelp`,
    },
    {
      id: 'naturbruk-vg1-7-6-def-1',
      type: 'definition',
      title: 'Forebyggende vedlikehold',
      content: `**Forebyggende vedlikehold** er planlagte tiltak som utføres regelmessig for å holde utstyr i god stand og forebygge havari.

**Motsatt:** Korrigerende vedlikehold = reparasjon etter at noe har gått i stykker.

**Fordeler med forebyggende vedlikehold:**
- Færre driftsavbrudd
- Lavere totalkostnader
- Lengre levetid
- Sikrere drift
- Bedre videresalgsverdi`,
    },
    {
      id: 'naturbruk-vg1-7-6-text-1',
      type: 'text',
      content: `## Vedlikeholdsintervaller

**Daglig (før bruk):**
- Visuell sjekk for skader og lekkasjer
- Kontroller oljenivå (motor, hydraulikk)
- Sjekk dekk/belter
- Test bremser og lys
- Rengjør for smuss og rusk

**Ukentlig:**
- Smør smørepunkter
- Sjekk kjølevæskenivå
- Kontroller batterivæske (eldre batterier)
- Sjekk luftfilter
- Rengjør førerplass

**Månedlig/etter 50 timer:**
- Sjekk reimspenning
- Kontroller hjulmuttere
- Sjekk bremsevæske
- Kontroller hydraulikkslanger

**Sesongvis/etter 200-250 timer:**
- Motoroljeskift med filter
- Hydraulikkoljeskift
- Bytt luftfilter
- Bytt drivstoffilter
- Full smøring
- Generell gjennomgang

**Årlig:**
- Profesjonell service
- Sikkerhetskontroll
- Rust- og lakkeringsbehandling`,
    },
    {
      id: 'naturbruk-vg1-7-6-def-2',
      type: 'definition',
      title: 'Smøring',
      content: `**Smøring** er tilførsel av smøremiddel (fett eller olje) til bevegelige deler for å redusere friksjon og slitasje.

**Smøremidler:**
- **Motorolje:** Smører motor
- **Hydraulikkolje:** Overfører kraft i hydraulikksystem
- **Girolje:** For girkasse og differensial
- **Smørefett:** For lager, ledd og bolter

**Riktig smøremiddel er viktig - les instruksjonsboken!**`,
    },
    {
      id: 'naturbruk-vg1-7-6-text-2',
      type: 'text',
      content: `## Motoroljeskift

**Hvorfor skifte olje?**
- Oljen brytes ned over tid
- Samler opp forurensninger
- Mister smøreevne
- Kan skade motoren

**Slik gjør du:**
1. Varm opp motoren (5-10 min)
2. Slå av og sikre maskinen
3. Plasser oppsamlingskar under
4. Fjern dreneringspluggen
5. La oljen renne ut helt
6. Skift oljefilter
7. Sett tilbake pluggen (ny pakning)
8. Fyll på ny olje av riktig type
9. Sjekk nivå med peilestav
10. Start motoren og sjekk for lekkasjer

**Oljetyper:**
- Viskositet (tykkelse): f.eks. 10W-40
- API-klassifisering: f.eks. CI-4 (diesel)
- Følg produsentens anbefalinger

**Brukt olje er spesialavfall!**
- Lever til godkjent mottak
- Aldri hell ut i naturen`,
    },
    {
      id: 'naturbruk-vg1-7-6-text-3',
      type: 'text',
      content: `## Vedlikehold av redskaper

**Plog og harv:**
- Rengjør etter bruk
- Sjekk slitedeler (skjær, spisser)
- Smør justeringsmekanismer
- Lagre tørt, smør blanke flater

**Slåmaskin:**
- Rengjør grundig
- Sjekk og skift kniver
- Kontroller reimspenning
- Smør alle smørepunkter

**Rundballepresse:**
- Rengjør for planterester
- Sjekk pickup-tinder
- Kontroller reimer og kjettinger
- Smør alle bevegelige deler

**Motorsag:**
- Rengjør luftfilter daglig
- Sjekk kjedeskarphet
- Kontroller kjedespenn
- Rengjør sverdspor
- Fyll kjedeolje`,
    },
    {
      id: 'naturbruk-vg1-7-6-tip-1',
      type: 'tip',
      title: 'Vedlikeholdslogg',
      content: `Før en vedlikeholdslogg for alle maskiner. Noter:

- Dato og driftstimer
- Hva som ble gjort
- Deler som ble skiftet
- Observasjoner og merknader

Loggen hjelper deg å:
- Holde oversikt over vedlikeholdsintervaller
- Oppdage trender (økt forbruk, gjentatte problemer)
- Dokumentere for salg eller garanti
- Planlegge fremtidig vedlikehold`,
    },
    {
      id: 'naturbruk-vg1-7-6-text-4',
      type: 'text',
      content: `## Enkle reparasjoner

**Skifte sikringer:**
- Finn sikringsboksen (se manual)
- Identifiser den defekte sikringen
- Bruk samme ampereverdi
- Hvis den ryker igjen, søk fagkyndig hjelp

**Skifte lyspærer:**
- Slå av strømmen
- Fjern dekselet
- Ta ut gammel pære
- Sett i ny (ikke ta på glass med fingre)

**Bytte hjul:**
- Sikre maskinen mot rulling
- Løsne muttere litt før løfting
- Løft med jekk på trygt punkt
- Fjern hjulet og monter nytt
- Trekk til muttere i kryss

**Skifte V-reim:**
- Slakk av spenning
- Noter reimbanenes plassering
- Fjern gammel reim
- Monter ny i riktig spor
- Juster spenning

**Når skal du søke hjelp?**
- Komplekse elektriske feil
- Motorproblemer
- Hydraulikklekkasjer
- Gearkasseproblemer
- Sikkerhetskritiske systemer`,
    },
    {
      id: 'naturbruk-vg1-7-6-def-3',
      type: 'definition',
      title: 'Vinterlagring',
      content: `**Vinterlagring** er forberedelse av maskiner som ikke skal brukes på en stund.

**Viktige tiltak:**
- Rengjør grundig
- Skift olje og filter
- Fyll drivstofftanken (hindrer kondens)
- Smør alle smørepunkter
- Lad batteriet eller koble fra
- Smør blanke metallflater mot rust
- Dekk til mot støv og fukt
- Lagre tørt og frostfritt om mulig`,
    },
    {
      id: 'naturbruk-vg1-7-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på forebyggende og korrigerende vedlikehold?',
        solution: 'Forebyggende vedlikehold er planlagte tiltak som utføres regelmessig for å holde utstyret i god stand. Korrigerende vedlikehold er reparasjon etter at noe har gått i stykker. Forebyggende er billigere og tryggere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hva som bør sjekkes daglig på en traktor.',
        solution: 'Daglig sjekk: Visuell kontroll for skader og lekkasjer, oljenivå (motor og hydraulikk), dekk/belter, bremser og lys, rengjøring for smuss.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar trinnene ved et motoroljeskift.',
        subTasks: [
          {
            label: 'a',
            task: 'List opp trinnene i riktig rekkefølge.',
            solution: 'Varm opp motor, slå av og sikre, plasser oppsamlingskar, fjern dreneringsplugg, la oljen renne ut, skift oljefilter, monter plugg, fyll på ny olje, sjekk nivå, start og sjekk for lekkasjer.',
          },
          {
            label: 'b',
            task: 'Hva gjør du med brukt motorolje?',
            solution: 'Brukt motorolje er spesialavfall og skal leveres til godkjent mottak. Den skal aldri helles ut i naturen.',
          },
        ],
        solution: 'Oljeskift gjøres ved å varme motoren, drenere gammel olje, skifte filter, fylle på ny olje av riktig type. Brukt olje leveres som spesialavfall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det viktig å føre vedlikeholdslogg?',
        solution: 'Vedlikeholdslogg hjelper med å holde oversikt over intervaller, oppdage trender, dokumentere for salg/garanti, og planlegge fremtidig vedlikehold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv hvordan du forbereder en traktor for vinterlagring.',
        solution: 'Vinterlagring: Rengjør grundig, skift olje og filter, fyll drivstofftanken, smør alle punkter, lad batteriet eller koble fra, smør blanke flater mot rust, dekk til, lagre tørt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.1: Bærekraftig naturbruk
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_1: TextbookChapter = {
  id: 'naturbruk-vg1-8-1',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.1',
  title: 'Bærekraftig naturbruk',
  description: 'Lær om prinsipper for bærekraftig forvaltning av naturressurser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare hva bærekraftig naturbruk innebærer',
    'vurdere miljøkonsekvenser av ulike driftsformer',
  ],
  content: [
    {
      id: 'naturbruk-vg1-8-1-intro',
      type: 'text',
      content: `## Bærekraft - å ta vare på ressursene for fremtiden

Bærekraftig naturbruk handler om å bruke naturens ressurser på en måte som dekker dagens behov uten å ødelegge mulighetene for fremtidige generasjoner. Dette er en av de viktigste utfordringene i vår tid.

**I dette kapittelet lærer du:**
- Hva bærekraftig utvikling betyr
- De tre dimensjonene av bærekraft
- Prinsipper for bærekraftig naturbruk
- Hvordan naturbruksnæringene kan bidra
- Utfordringer og muligheter

**Naturbruk står i en særstilling - vi arbeider direkte med naturens ressurser og har både mulighet og ansvar for å forvalte dem godt.**`,
    },
    {
      id: 'naturbruk-vg1-8-1-def-1',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** er utvikling som tilfredsstiller dagens behov uten å ødelegge fremtidige generasjoners muligheter til å tilfredsstille sine behov.

Definisjonen kommer fra Brundtland-kommisjonen (1987), ledet av tidligere statsminister Gro Harlem Brundtland.

**Kjerneprinsipp:** Vi låner ikke jorden fra våre forfedre - vi låner den fra våre barn.`,
    },
    {
      id: 'naturbruk-vg1-8-1-text-1',
      type: 'text',
      content: `## De tre dimensjonene av bærekraft

Bærekraft hviler på tre pilarer som må være i balanse:

**1. Økologisk bærekraft (miljø)**
- Bevare biologisk mangfold
- Ikke overbelaste økosystemene
- Redusere forurensning
- Bruke fornybare ressurser
- Beskytte jord, vann og luft

**2. Økonomisk bærekraft**
- Lønnsomhet over tid
- Rettferdig fordeling
- Ikke tære på kapitalen
- Langsiktig verdiskaping
- Stabile arbeidsplasser

**3. Sosial bærekraft**
- Gode arbeidsforhold
- Levende lokalsamfunn
- Matsikkerhet
- Kulturarv og tradisjonskunnskap
- Helse og velferd

**Alle tre må ivaretas - det holder ikke å være miljøvennlig hvis bedriften går konkurs, eller lønnsom hvis naturgrunnlaget ødelegges.**`,
    },
    {
      id: 'naturbruk-vg1-8-1-def-2',
      type: 'definition',
      title: 'Økosystemtjenester',
      content: `**Økosystemtjenester** er godene mennesker får fra naturen. De deles inn i:

**Forsyningstjenester:** Mat, vann, fiber, brennstoff
**Reguleringstjenester:** Klimaregulering, vannrensing, pollinering
**Kulturelle tjenester:** Rekreasjon, estetikk, åndelige verdier
**Støttetjenester:** Fotosyntese, jorddannelse, næringssirkulering

**Naturbruk er avhengig av - og påvirker - alle disse tjenestene.**`,
    },
    {
      id: 'naturbruk-vg1-8-1-text-2',
      type: 'text',
      content: `## Prinsipper for bærekraftig naturbruk

**Føre-var-prinsippet**
- Ved usikkerhet, velg det forsiktige
- Ikke vent på full vitenskapelig sikkerhet
- Bedre å forebygge enn å reparere

**Forurenser betaler**
- Den som skaper miljøskade skal dekke kostnadene
- Gir insentiv til å redusere forurensning

**Kretsløpstenkning**
- Alt henger sammen
- Avfall fra én prosess er ressurs i en annen
- Minimere tap og utslipp

**Biologisk mangfold**
- Vern av arter og naturtyper
- Variert kulturlandskap
- Genetisk mangfold i husdyr og planter

**Lokal tilpasning**
- Bruk ressurser tilpasset lokale forhold
- Utnytt lokale fortrinn
- Respekter naturgitte begrensninger`,
    },
    {
      id: 'naturbruk-vg1-8-1-tip-1',
      type: 'tip',
      title: 'Karbonavtrykk og naturbruk',
      content: `Naturbruk kan være både en kilde til og en løsning på klimaproblemet:

**Utslippskilder:**
- Metangass fra drøvtyggere
- Lystgass fra gjødsel
- Diesel til maskiner
- Avskoging

**Karbonbinding:**
- Skog som vokser binder CO2
- Eng og beitemark lagrer karbon i jorda
- Tang og tare binder karbon
- Trevirke lagrer karbon i bygninger

**Netto kan norsk naturbruk være klimapositivt!**`,
    },
    {
      id: 'naturbruk-vg1-8-1-def-3',
      type: 'definition',
      title: 'Sirkulær økonomi',
      content: `**Sirkulær økonomi** er et økonomisk system der ressurser brukes om igjen i stedet for å kastes.

**Lineær modell:** Ta ut - Produsere - Bruke - Kaste

**Sirkulær modell:** Produsere - Bruke - Gjenbruke/resirkulere - tilbake til produksjon

**I naturbruk:** Gjødsel fra dyr til planteproduksjon, halm til strø, matavfall til biogass, biprodukter til fôr.`,
    },
    {
      id: 'naturbruk-vg1-8-1-text-3',
      type: 'text',
      content: `## Bærekraft i ulike naturbruksnæringer

**Landbruk:**
- Vekstskifte og jordvern
- Presisjonsgjødsling
- Integrert plantevern
- God dyrevelferd
- Bevare kulturlandskapet

**Skogbruk:**
- Langsiktig avvirkning
- Bevare nøkkelbiotoper
- Naturlig foryngelse der mulig
- Sertifisering (PEFC, FSC)
- Klimapositivt regnskap

**Fiske og havbruk:**
- Kvoteregulering
- Selektive redskaper
- Redusere rømming
- Bekjempe lakselus
- Utvikling av bærekraftig fôr

**Utmarksforvaltning:**
- Balansert høsting
- Rovviltforvaltning
- Beitedyr i utmark
- Naturbasert reiseliv`,
    },
    {
      id: 'naturbruk-vg1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva bærekraftig utvikling betyr.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi en kort definisjon av bærekraftig utvikling.',
            solution: 'Bærekraftig utvikling er utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter til å dekke sine behov.',
          },
          {
            label: 'b',
            task: 'Hvor kommer definisjonen fra?',
            solution: 'Definisjonen kommer fra Brundtland-kommisjonen i 1987, ledet av Gro Harlem Brundtland.',
          },
        ],
        solution: 'Bærekraftig utvikling handler om å møte dagens behov uten å ødelegge for fremtiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv de tre dimensjonene av bærekraft.',
        solution: 'De tre dimensjonene er: 1) Økologisk bærekraft - bevare miljø og biologisk mangfold, 2) Økonomisk bærekraft - lønnsomhet og verdiskaping over tid, 3) Sosial bærekraft - gode arbeidsforhold, levende lokalsamfunn, matsikkerhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er økosystemtjenester? Gi eksempler.',
        solution: 'Økosystemtjenester er godene mennesker får fra naturen. Eksempler: Forsyningstjenester (mat, vann), reguleringstjenester (pollinering, vannrensing), kulturelle tjenester (rekreasjon), støttetjenester (fotosyntese).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar føre-var-prinsippet og hvorfor det er viktig.',
        solution: 'Føre-var-prinsippet sier at ved usikkerhet skal man velge det forsiktige alternativet. Det er viktig fordi miljøskader kan være irreversible, og det er bedre å forebygge enn å reparere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan skogbruk være klimapositivt?',
        solution: 'Skog som vokser binder CO2 fra atmosfæren. Trevirke lagrer karbon i bygninger. Biomasse kan erstatte fossile brensler. Bærekraftig skogbruk sikrer at ny skog vokser opp og fortsetter å binde karbon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter et dilemma mellom økonomi og miljø i naturbruk.',
        solution: 'Eksempel: Intensivt landbruk gir høy produksjon og god inntekt, men kan føre til jordutarming, tap av biologisk mangfold og forurensning. Økologisk drift er mer miljøvennlig, men gir lavere avlinger og høyere kostnader. Løsningen ligger ofte i mellomtiltak som presisjonslandbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2: FNs bærekraftsmål og naturbruk
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_2: TextbookChapter = {
  id: 'naturbruk-vg1-8-2',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.2',
  title: 'FNs bærekraftsmål og naturbruk',
  description: 'Lær om de globale bærekraftsmålene og hvordan naturbruk bidrar.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for relevante bærekraftsmål',
    'vurdere naturbrukets rolle i å nå målene',
  ],
  content: [
    {
      id: 'naturbruk-vg1-8-2-intro',
      type: 'text',
      content: `## Verdens felles mål for bærekraft

I 2015 vedtok FNs medlemsland 17 bærekraftsmål som skal nås innen 2030. Disse målene gjelder alle land og alle sektorer - også naturbruksnæringene. Faktisk er naturbruk helt sentralt for å nå mange av målene.

**I dette kapittelet lærer du:**
- Hva FNs bærekraftsmål er
- Hvilke mål som er mest relevante for naturbruk
- Hvordan naturbruksnæringene kan bidra
- Eksempler på konkrete tiltak

**Bærekraftsmålene kalles også SDG - Sustainable Development Goals.**`,
    },
    {
      id: 'naturbruk-vg1-8-2-def-1',
      type: 'definition',
      title: 'FNs bærekraftsmål',
      content: `**FNs bærekraftsmål** (SDG) er 17 globale mål vedtatt i 2015 med frist i 2030. De erstatter tusenårsmålene og gjelder alle land.

**Kjennetegn:**
- Universelle (gjelder alle land)
- Integrerte (henger sammen)
- Ambisiøse (krever stor innsats)
- Målbare (169 delmål med indikatorer)

**Hovedbudskap:** Ingen skal utelates - Leave No One Behind`,
    },
    {
      id: 'naturbruk-vg1-8-2-text-1',
      type: 'text',
      content: `## De 17 bærekraftsmålene

**1. Utrydde fattigdom**
**2. Utrydde sult**
**3. God helse og livskvalitet**
**4. God utdanning**
**5. Likestilling mellom kjønnene**
**6. Rent vann og gode sanitærforhold**
**7. Ren energi til alle**
**8. Anstendig arbeid og økonomisk vekst**
**9. Industri, innovasjon og infrastruktur**
**10. Mindre ulikhet**
**11. Bærekraftige byer og lokalsamfunn**
**12. Ansvarlig forbruk og produksjon**
**13. Stoppe klimaendringene**
**14. Livet i havet**
**15. Livet på land**
**16. Fred, rettferdighet og velfungerende institusjoner**
**17. Samarbeid for å nå målene**

**Naturbruk har direkte betydning for minst halvparten av disse målene!**`,
    },
    {
      id: 'naturbruk-vg1-8-2-text-2',
      type: 'text',
      content: `## Mål 2: Utrydde sult

**Delmål:**
- Sikre tilgang til trygg og næringsrik mat
- Doble produktiviteten til småbønder
- Opprettholde genetisk mangfold

**Naturbrukets bidrag:**
- Matproduksjon (jordbruk, havbruk, fiske)
- Økt selvforsyning
- Bevare tradisjonelle sorter og raser
- Bærekraftig intensivering
- Redusere matsvinn

**Utfordring:** Verdens befolkning vokser, men arealet er begrenset. Vi må produsere mer mat med mindre miljøbelastning.

## Mål 12: Ansvarlig forbruk og produksjon

**Delmål:**
- Bærekraftig forvaltning av naturressurser
- Halvere matsvinn
- Miljøvennlig håndtering av kjemikalier

**Naturbrukets bidrag:**
- Presisjonslandbruk (bruke akkurat det som trengs)
- Redusert bruk av plantevernmidler
- Gjenbruk av næringsstoffer
- Lokal produksjon og distribusjon
- Forbrukerkommunikasjon`,
    },
    {
      id: 'naturbruk-vg1-8-2-text-3',
      type: 'text',
      content: `## Mål 13: Stoppe klimaendringene

**Delmål:**
- Styrke motstandskraften mot klimarelaterte farer
- Integrere klimatiltak i planlegging
- Forbedre utdanning og bevissthet

**Naturbrukets bidrag:**
- Karbonbinding i skog og jord
- Bioenergi som erstatter fossilt
- Klimatilpasset jordbruk
- Redusere utslipp fra husdyr
- Bevare myrer og våtmarker

## Mål 14: Livet i havet

**Delmål:**
- Redusere havforurensning
- Bærekraftig forvaltning av marine ressurser
- Bevare kystområder

**Naturbrukets bidrag:**
- Bærekraftig fiske med kvoter
- Miljøvennlig havbruk
- Redusere rømming og lakselus
- Beskytte gyteområder
- Redusere plastforurensning`,
    },
    {
      id: 'naturbruk-vg1-8-2-text-4',
      type: 'text',
      content: `## Mål 15: Livet på land

**Delmål:**
- Bevare, gjenopprette og bruke økosystemer bærekraftig
- Fremme bærekraftig skogforvaltning
- Bekjempe ørkenspredning
- Stoppe tap av biologisk mangfold

**Naturbrukets bidrag:**
- Bærekraftig skogbruk
- Bevare kulturlandskapet
- Integrert plantevern
- Verne om truede arter
- Bekjempe fremmede arter
- Opprettholde beitebruk

**Norge har forpliktet seg til disse målene, og naturbruksnæringene er sentrale aktører i gjennomføringen.**`,
    },
    {
      id: 'naturbruk-vg1-8-2-tip-1',
      type: 'tip',
      title: 'Hvordan du kan bidra',
      content: `Som fremtidig naturbruksarbeider kan du bidra til bærekraftsmålene gjennom:

**Daglig praksis:**
- Bruke ressurser effektivt
- Minimere avfall og utslipp
- Ivareta biologisk mangfold
- Sørge for god dyrevelferd

**Kunnskap og holdninger:**
- Holde deg oppdatert
- Tenke langsiktig
- Dele kunnskap med andre
- Være kritisk til enkle løsninger

**Små valg i hverdagen utgjør sammen en stor forskjell!**`,
    },
    {
      id: 'naturbruk-vg1-8-2-def-2',
      type: 'definition',
      title: 'Grønn omstilling',
      content: `**Grønn omstilling** er overgangen til et samfunn med lavere utslipp og mer bærekraftig ressursbruk.

For naturbruk innebærer dette:
- Fra fossilt til fornybart
- Fra lineær til sirkulær økonomi
- Fra volum til verdi
- Fra monokultur til mangfold

**Naturbruk er en del av løsningen, ikke problemet.**`,
    },
    {
      id: 'naturbruk-vg1-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er FNs bærekraftsmål, og når ble de vedtatt?',
        solution: 'FNs bærekraftsmål (SDG) er 17 globale mål for bærekraftig utvikling vedtatt av FNs medlemsland i 2015. De skal nås innen 2030 og gjelder alle land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn fem bærekraftsmål som er spesielt relevante for naturbruk.',
        solution: 'Mål 2 (Utrydde sult), Mål 12 (Ansvarlig forbruk og produksjon), Mål 13 (Stoppe klimaendringene), Mål 14 (Livet i havet), Mål 15 (Livet på land).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan kan naturbruk bidra til mål 13 (stoppe klimaendringene)?',
        solution: 'Naturbruk kan bidra gjennom karbonbinding i skog og jord, bioenergi som erstatter fossilt, klimatilpasset jordbruk, redusere utslipp fra husdyr, og bevare myrer og våtmarker som karbonlagre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva grønn omstilling betyr for naturbruksnæringene.',
        solution: 'Grønn omstilling innebærer overgang fra fossilt til fornybart drivstoff, fra lineær til sirkulær økonomi, fra volum til verdi i produksjonen, og fra monokultur til mangfold. Naturbruk er en del av løsningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg ett bærekraftsmål og gi tre konkrete eksempler på tiltak naturbruk kan gjøre.',
        solution: 'Eksempel for Mål 15 (Livet på land): 1) Bærekraftig skogbruk med sertifisering, 2) Bevare kulturlandskap gjennom beitebruk, 3) Integrert plantevern som reduserer bruk av kjemikalier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3: Entreprenørskap og bedriftsutvikling
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_3: TextbookChapter = {
  id: 'naturbruk-vg1-8-3',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.3',
  title: 'Entreprenørskap og bedriftsutvikling',
  description: 'Lær om etablering og utvikling av bedrifter i naturbruksnæringene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare hva entreprenørskap innebærer',
    'beskrive trinnene i å starte en bedrift',
  ],
  content: [
    {
      id: 'naturbruk-vg1-8-3-intro',
      type: 'text',
      content: `## Entreprenørskap - å skape noe nytt

Mange som utdanner seg innen naturbruk drømmer om å starte egen bedrift eller utvikle en gård. Entreprenørskap handler om å se muligheter og gjøre dem til virkelighet. Det krever kreativitet, mot og praktiske ferdigheter.

**I dette kapittelet lærer du:**
- Hva entreprenørskap er
- Hvordan finne og utvikle en forretningsidé
- Trinnene i å starte bedrift
- Viktige begreper innen økonomi og drift
- Støtteordninger og rådgivning

**I naturbruk finnes det mange muligheter - fra tradisjonell gårdsdrift til helt nye næringer.**`,
    },
    {
      id: 'naturbruk-vg1-8-3-def-1',
      type: 'definition',
      title: 'Entreprenørskap',
      content: `**Entreprenørskap** er evnen og viljen til å skape ny virksomhet, og å utvikle og fornye eksisterende virksomheter.

**En entreprenør:**
- Ser muligheter der andre ser problemer
- Tar initiativ og ansvar
- Tåler risiko og usikkerhet
- Skaper verdier for seg selv og samfunnet

**Intraprenørskap:** Å være entreprenør innenfor en eksisterende bedrift.`,
    },
    {
      id: 'naturbruk-vg1-8-3-text-1',
      type: 'text',
      content: `## Fra idé til forretning

**Finne en god idé**

Gode forretningsideer kommer ofte fra:
- Egne interesser og ferdigheter
- Problemer du ser kan løses
- Udekkede behov i markedet
- Kombinasjon av eksisterende ting på nye måter
- Trender og endringer i samfunnet

**Eksempler i naturbruk:**
- Lokal matproduksjon og direktesalg
- Gårdsturisme og opplevelser
- Spesialisert dyrehold
- Grønne tjenester (vedlikehold, trepleie)
- Videreforedling av råvarer`,
    },
    {
      id: 'naturbruk-vg1-8-3-def-2',
      type: 'definition',
      title: 'Forretningsplan',
      content: `En **forretningsplan** er et dokument som beskriver bedriften, dens mål og hvordan målene skal nås.

**Hovedinnhold:**
- Forretningsidé og visjon
- Produkter/tjenester
- Marked og kunder
- Organisasjon og ressurser
- Økonomi og budsjett
- Handlingsplan

**Forretningsplanen er både et planleggingsverktøy og et dokument for å søke finansiering.**`,
    },
    {
      id: 'naturbruk-vg1-8-3-text-2',
      type: 'text',
      content: `## Trinnene i å starte bedrift

**1. Idéfase**
- Utvikle og teste ideen
- Snakke med potensielle kunder
- Undersøke markedet

**2. Planlegging**
- Skrive forretningsplan
- Lage budsjett
- Velge organisasjonsform
- Undersøke regelverk og tillatelser

**3. Etablering**
- Registrere foretaket
- Skaffe finansiering
- Ordne forsikringer
- Sette opp regnskapssystem

**4. Oppstart**
- Starte produksjon/salg
- Markedsføring
- Bygge kunderelasjoner

**5. Drift og utvikling**
- Løpende drift
- Evaluere og forbedre
- Innovasjon`,
    },
    {
      id: 'naturbruk-vg1-8-3-def-3',
      type: 'definition',
      title: 'Organisasjonsformer',
      content: `**Enkeltpersonforetak (ENK):** Enkleste form, personlig ansvar for gjeld.

**Aksjeselskap (AS):** Eget rettssubjekt, begrenset ansvar, krav om 30 000 kr.

**Samvirkeforetak (SA):** Eid av medlemmene, demokratisk styring, vanlig i landbruket.

**Ansvarlig selskap (ANS/DA):** To eller flere eiere med solidarisk eller delt ansvar.`,
    },
    {
      id: 'naturbruk-vg1-8-3-tip-1',
      type: 'tip',
      title: 'Støtteordninger',
      content: `**Innovasjon Norge:** Etablerertilskudd, lån, rådgivning
**Landbruksdirektoratet:** Investeringsstøtte, tilskudd til tilleggsnæringer
**NAV:** Dagpenger under etablering
**Kommunen:** Etablererkurs, næringsrådgiver

**Søk råd tidlig - det koster ingenting og kan spare deg for feil!**`,
    },
    {
      id: 'naturbruk-vg1-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er entreprenørskap, og hvilke egenskaper kjennetegner en entreprenør?',
        solution: 'Entreprenørskap er evnen og viljen til å skape ny virksomhet. En entreprenør ser muligheter, tar initiativ og ansvar, tåler risiko, og skaper verdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en forretningsplan, og hva bør den inneholde?',
        solution: 'En forretningsplan beskriver bedriften og dens mål. Innhold: Forretningsidé, produkter/tjenester, marked, organisasjon, økonomi/budsjett, handlingsplan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de fem hovedtrinnene i å starte en bedrift.',
        solution: '1) Idéfase - utvikle ideen, 2) Planlegging - forretningsplan og budsjett, 3) Etablering - registrering og finansiering, 4) Oppstart - produksjon og salg, 5) Drift og utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen mellom enkeltpersonforetak og aksjeselskap?',
        solution: 'Enkeltpersonforetak: Enkelt å starte, personlig ansvar for gjeld. Aksjeselskap: Eget rettssubjekt, begrenset ansvar, krav om 30 000 kr aksjekapital.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gi tre eksempler på forretningsideer innen naturbruk.',
        solution: 'Gårdsbutikk med lokalmat, gårdsturisme, spesialisert dyrehold (alpakka), grønne tjenester (hagearbeid), videreforedling av råvarer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4: Økonomi og verdikjeder (UTVIDET)
// LK20 Kompetansemål #9: Foreta enkle beregninger av råvare- og materialforbruk,
// innsatsfaktorer og utbytte
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_4: TextbookChapter = {
  id: 'naturbruk-vg1-8-4',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.4',
  title: 'Økonomi og verdikjeder',
  description: 'Lær om økonomi i naturbruk, hvordan verdikjedene fungerer, og gjør enkle driftskalkyler.',
  estimatedMinutes: 90,
  competenceGoals: [
    'forstå grunnleggende økonomiske begreper',
    'forklare verdikjeder i naturbruksnæringene',
    'foreta enkle beregninger av råvare- og materialforbruk, innsatsfaktorer og utbytte',
  ],
  content: [
    {
      id: 'naturbruk-vg1-8-4-intro',
      type: 'text',
      content: `## Økonomi - grunnlaget for drift

For å drive naturbruk må du forstå økonomi. Å forstå hvordan verdiene skapes og fordeles i verdikjeden er viktig kunnskap for alle i næringen. Som bonde, gartner eller skogbruker må du kunne beregne om produksjonen din er lønnsom.

**I dette kapittelet lærer du:**
- Grunnleggende økonomiske begreper
- Forskjellen på variable og faste kostnader
- Hvordan beregne dekningsbidrag
- Enkle driftskalkyler for ulike produksjoner
- Hva verdikjeder er og hvordan verdiene fordeles
- Tilskuddsordninger i landbruket`,
    },
    {
      id: 'naturbruk-vg1-8-4-def-1',
      type: 'definition',
      title: 'Økonomibegreper',
      content: `**Inntekt:** Penger som kommer inn (salg, tilskudd)
**Utgift:** Penger som går ut (innkjøp, lønn, renter)
**Overskudd:** Inntekter minus utgifter
**Omsetning:** Total verdi av salg
**Margin:** Forskjellen mellom salgspris og kostpris
**Likviditet:** Evne til å betale regninger når de forfaller`,
    },
    {
      id: 'naturbruk-vg1-8-4-def-variable',
      type: 'definition',
      title: 'Variable kostnader',
      content: `**Variable kostnader** er kostnader som endrer seg med produksjonsvolumet.

**Jo mer du produserer, desto høyere blir de variable kostnadene.**

**Typiske variable kostnader i naturbruk:**
- Fôrkostnader (kraftfôr, grovfôr)
- Såfrø og settepoteter
- Gjødsel og kalk
- Plantevernmidler
- Drivstoff og strøm til produksjon
- Emballasje
- Veterinærkostnader
- Innkjøp av livdyr

**Eksempel:** Hvis du har 20 kyr i stedet for 10, dobles fôrkostnadene.`,
    },
    {
      id: 'naturbruk-vg1-8-4-def-faste',
      type: 'definition',
      title: 'Faste kostnader',
      content: `**Faste kostnader** er kostnader som er like uansett hvor mye du produserer.

**De påløper selv om produksjonen er null.**

**Typiske faste kostnader i naturbruk:**
- Forsikring av bygninger og maskiner
- Renter på lån
- Avskrivninger (verdiforringelse på maskiner og bygninger)
- Vedlikehold av bygninger
- Eiendomsskatt
- Medlemsavgifter og kontingenter
- Regnskapstjenester

**Eksempel:** Forsikringen på fjøset koster det samme om du har 10 eller 20 kyr.`,
    },
    {
      id: 'naturbruk-vg1-8-4-def-dekningsbidrag',
      type: 'definition',
      title: 'Dekningsbidrag',
      content: `**Dekningsbidrag (DB) = Inntekter - Variable kostnader**

Dekningsbidraget viser hvor mye som er igjen til å dekke de faste kostnadene og gi fortjeneste.

**Viktig:** Dekningsbidraget må være stort nok til å dekke alle faste kostnader. Hvis ikke, går driften med tap.

**Eksempel:**
- Inntekter per dekar hvete: 6 000 kr
- Variable kostnader per dekar: 3 500 kr
- **Dekningsbidrag per dekar: 2 500 kr**

Disse 2 500 kr skal bidra til å betale traktor, bygninger, forsikring osv.`,
    },
    {
      id: 'naturbruk-vg1-8-4-def-lonnsomhet',
      type: 'definition',
      title: 'Lønnsomhet',
      content: `**Lønnsomhet** viser om en produksjon gir økonomisk overskudd.

**Beregning:**
Lønnsomhet = Totale inntekter - Totale kostnader (variable + faste)

**En produksjon er lønnsom når:**
- Inntektene er større enn kostnadene
- Du får betalt for arbeidsinnsatsen din
- Du får avkastning på investert kapital

**Nøkkeltall for lønnsomhet:**
- Dekningsbidrag per enhet (per ku, per dekar, per m³)
- Dekningsbidrag per time arbeidsinnsats
- Avkastning på investert kapital`,
    },
    {
      id: 'naturbruk-vg1-8-4-text-1',
      type: 'text',
      content: `## Inntekter og utgifter i naturbruk

**Salgsinntekter:**
- Salg av produkter (melk, kjøtt, korn, grønnsaker, tømmer)
- Salg av tjenester (maskinarbeid, rideskole)

**Tilskudd fra staten:**
- Produksjonstilskudd (per dyr, per dekar)
- Arealtilskudd
- Distriktstilskudd
- Miljøtilskudd (økologisk drift, beite)
- I norsk landbruk utgjør tilskudd 30-50% av inntektene

**Variable kostnader i ulike produksjoner:**
| Produksjon | Typiske variable kostnader |
|------------|---------------------------|
| Melk | Kraftfôr, grovfôr, veterinær, inseminering |
| Korn | Såkorn, gjødsel, plantevern, tørking |
| Grønnsaker | Frø/planter, gjødsel, emballasje, arbeidskraft |
| Skog | Planting, hogst, drift |

**Faste kostnader:**
- Forsikring, renter, vedlikehold, avskrivninger`,
    },
    {
      id: 'naturbruk-vg1-8-4-text-kalkyle',
      type: 'text',
      content: `## Enkle driftskalkyler

En **driftskalkyle** er en oppstilling av inntekter og kostnader for en produksjon. Den hjelper deg å vurdere om produksjonen er lønnsom.

**Oppbygging av en driftskalkyle:**

1. **Produksjonsinntekter** (salg av produkter)
2. **+ Tilskudd** (produksjonstilskudd, arealtilskudd)
3. **= Sum inntekter**
4. **- Variable kostnader** (fôr, såvarer, gjødsel osv.)
5. **= Dekningsbidrag**
6. **- Faste kostnader** (fordelt på produksjonen)
7. **= Resultat (overskudd/underskudd)**

**Hvorfor lage kalkyler?**
- Planlegge produksjonen
- Sammenligne ulike produksjoner
- Vurdere investeringer
- Finne forbedringsmuligheter`,
    },
    {
      id: 'naturbruk-vg1-8-4-tip-kornkalkyle',
      type: 'tip',
      title: 'Eksempel: Driftskalkyle for hvete (per dekar)',
      content: `**INNTEKTER:**
- Avling: 500 kg/dekar × 4,00 kr/kg = 2 000 kr
- Arealtilskudd: 400 kr
- **Sum inntekter: 2 400 kr**

**VARIABLE KOSTNADER:**
- Såkorn: 20 kg × 8 kr = 160 kr
- Gjødsel: 50 kg × 6 kr = 300 kr
- Plantevern: 150 kr
- Tørking: 500 kg × 0,50 kr = 250 kr
- Drivstoff: 100 kr
- **Sum variable kostnader: 960 kr**

**DEKNINGSBIDRAG: 2 400 - 960 = 1 440 kr per dekar**

Dette dekningsbidraget skal bidra til å betale maskiner, bygninger og arbeidsinnsats.`,
    },
    {
      id: 'naturbruk-vg1-8-4-tip-melkekalkyle',
      type: 'tip',
      title: 'Eksempel: Driftskalkyle for melkeku (per ku per år)',
      content: `**INNTEKTER:**
- Melk: 8 000 liter × 6,00 kr = 48 000 kr
- Kjøttinntekt (utrangeringsverdi): 8 000 kr
- Kalvesalg: 4 000 kr
- Produksjonstilskudd: 10 000 kr
- **Sum inntekter: 70 000 kr**

**VARIABLE KOSTNADER:**
- Kraftfôr: 2 500 kg × 4,50 kr = 11 250 kr
- Grovfôr (egenprodusert): 8 000 kr
- Veterinær og medisin: 2 000 kr
- Inseminering: 1 500 kr
- Strø og diverse: 1 500 kr
- **Sum variable kostnader: 24 250 kr**

**DEKNINGSBIDRAG: 70 000 - 24 250 = 45 750 kr per ku**

Med 20 kyr blir totalt dekningsbidrag: 20 × 45 750 = 915 000 kr
Dette skal dekke fjøs, melkerobot, traktor, arbeidsinnsats osv.`,
    },
    {
      id: 'naturbruk-vg1-8-4-text-kostnadstyper',
      type: 'text',
      content: `## Kostnadstyper i naturbruk

**Fôrkostnader** er ofte den største kostnaden i husdyrproduksjon:
- Kraftfôr kjøpes fra Felleskjøpet eller andre leverandører
- Grovfôr (gras, høy, surfôr) produseres ofte selv
- Fôrforbruket måles i FEm (fôrenheter melk) eller kg

**Såvarer og plantemateriale:**
- Såkorn (hvete, bygg, havre): 15-25 kg per dekar
- Settepotet: 250-300 kg per dekar
- Grønnsaksfrø og småplanter

**Gjødsel:**
- Mineralgjødsel (Fullgjødsel, Kalksalpeter)
- Husdyrgjødsel (bløtgjødsel, talle)
- Kalk for å regulere pH

**Drivstoff og energi:**
- Diesel til traktor og maskiner
- Strøm til tørke, ventilasjon, melking
- Ved/flis til oppvarming

**Beregning av forbruk:**
For å beregne kostnader må du vite:
- Mengde innsatsfaktor (kg, liter, timer)
- Pris per enhet
- **Kostnad = Mengde × Pris**`,
    },
    {
      id: 'naturbruk-vg1-8-4-tip-utbytte',
      type: 'tip',
      title: 'Beregning av utbytte',
      content: `**Utbytte** viser hvor mye produkt du får ut av innsatsfaktorene.

**Eksempler på utbytteberegninger:**

**Kornproduksjon:**
- Avling: 500 kg hvete per dekar
- Såkornforbruk: 20 kg per dekar
- Utbytte: 500 / 20 = 25 kg høstet per kg sådd

**Melkeproduksjon:**
- Melkeytelse: 8 000 liter per ku per år
- Kraftfôrforbruk: 2 500 kg per ku per år
- Melk per kg kraftfôr: 8 000 / 2 500 = 3,2 liter melk per kg kraftfôr

**Kjøttproduksjon (okse):**
- Slaktevekt: 300 kg
- Fôrforbruk: 3 000 FEm
- Fôrutnyttelse: 3 000 / 300 = 10 FEm per kg tilvekst`,
    },
    {
      id: 'naturbruk-vg1-8-4-def-2',
      type: 'definition',
      title: 'Verdikjede',
      content: `En **verdikjede** viser alle leddene en vare går gjennom fra råvare til ferdig produkt.

**Typisk for mat:**
1. Primærprodusent (bonde)
2. Foredling (meieri, slakteri, mølle)
3. Grossist/distribusjon
4. Detaljist (butikk)
5. Forbruker

**I hvert ledd tilføres verdi - og kostnader.**

**Verdifordeling for en melkeliter (ca. 20 kr i butikk):**
- Bonde: ca. 6 kr (30%)
- Meieri: ca. 6 kr (30%)
- Grossist/transport: ca. 2 kr (10%)
- Butikk: ca. 6 kr (30%)`,
    },
    {
      id: 'naturbruk-vg1-8-4-def-3',
      type: 'definition',
      title: 'Samvirke',
      content: `Et **samvirke** er en organisasjon eid og styrt av medlemmene.

**Eksempler:** TINE, Nortura, Felleskjøpet, Gartnerhallen

**Prinsipper:**
- Medlemmene eier sammen
- Én stemme per medlem (ikke etter kapital)
- Overskudd tilbake til medlemmene (etterbetaling)
- Mottaksplikt - alle medlemmer får levere

**Fordeler for bonden:**
- Sikker avsetning av produktene
- Markedsmakt mot dagligvarekjedene
- Felles merkevarebygging`,
    },
    {
      id: 'naturbruk-vg1-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom variable og faste kostnader. Gi to eksempler på hver.',
        solution: `**Variable kostnader** endrer seg med produksjonsvolumet - jo mer du produserer, desto høyere kostnader.
Eksempler: Fôr (mer kyr = mer fôr), gjødsel (mer areal = mer gjødsel), drivstoff, såkorn.

**Faste kostnader** er like uansett hvor mye du produserer.
Eksempler: Forsikring på fjøset, renter på lån, avskrivninger på traktor, eiendomsskatt.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en verdikjede? Beskriv verdikjeden for melk fra ku til forbruker.',
        solution: `En **verdikjede** viser alle ledd en vare går gjennom fra råvare til ferdig produkt hos forbruker.

**Verdikjede for melk:**
1. **Bonde** - produserer melk, ku melkes
2. **Tankbil** - henter melk på gården
3. **Meieri (TINE)** - pasteuriserer, foredler til melk, ost, yoghurt
4. **Grossist** - lagrer og distribuerer til butikker
5. **Butikk (Rema, Kiwi osv.)** - selger til forbruker
6. **Forbruker** - kjøper og bruker melken

I hvert ledd tilføres verdi (bearbeiding, transport, service) og kostnader legges til prisen.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er tilskudd viktig i norsk landbruk?',
        solution: `Tilskudd utgjør 30-50% av inntektene til norske bønder og er nødvendig fordi:

1. **Høyere kostnader:** Norge har kort vekstsesong, kupert terreng og høye lønnskostnader
2. **Matsikkerhet:** Norge vil produsere egen mat og ikke være avhengig av import
3. **Bosetting:** Landbruk holder distriktene levende med arbeidsplasser
4. **Kulturlandskap:** Beitedyr holder kulturlandskapet åpent
5. **Konkurranse:** Uten tilskudd ville norsk mat bli utkonkurrert av billig import

Tilskuddene sikrer at det er mulig å drive landbruk i hele Norge, ikke bare de beste områdene.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-4-ex-4',
        number: '4',
        type: 'classic',
        task: `Beregn dekningsbidraget for byggproduksjon per dekar:
- Avling: 450 kg/dekar, pris 3,80 kr/kg
- Arealtilskudd: 350 kr/dekar
- Såkorn: 18 kg × 7 kr/kg
- Gjødsel: 45 kg × 5,50 kr/kg
- Plantevern: 120 kr
- Tørking: 450 kg × 0,45 kr/kg
- Drivstoff: 80 kr`,
        solution: `**INNTEKTER:**
- Salg av bygg: 450 kg × 3,80 kr = 1 710 kr
- Arealtilskudd: 350 kr
- **Sum inntekter: 2 060 kr**

**VARIABLE KOSTNADER:**
- Såkorn: 18 kg × 7 kr = 126 kr
- Gjødsel: 45 kg × 5,50 kr = 247,50 kr
- Plantevern: 120 kr
- Tørking: 450 kg × 0,45 kr = 202,50 kr
- Drivstoff: 80 kr
- **Sum variable kostnader: 776 kr**

**DEKNINGSBIDRAG = 2 060 - 776 = 1 284 kr per dekar**`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan en bonde forkorte verdikjeden og hva er fordelene?',
        solution: `**Måter å forkorte verdikjeden:**
- Gårdsbutikk - selger direkte til forbruker
- REKO-ringer - bestilling via Facebook, utlevering på parkeringsplass
- Bondens marked - ukentlig marked i byene
- Abonnementsordninger - grønnsakskasser levert hjem
- Nettbutikk - egen eller felles plattform

**Fordeler:**
1. **Høyere pris:** Bonden beholder mer av verdiskapingen
2. **Kundekontakt:** Direkte tilbakemelding fra forbrukere
3. **Merkevarebygging:** Bygge lojalitet til gården
4. **Fleksibilitet:** Bestemme selv priser og produkter

**Ulemper:**
- Mer arbeid med salg og markedsføring
- Må håndtere småsalg
- Usikker avsetning`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-4-ex-6',
        number: '6',
        type: 'classic',
        task: `En melkebonde har 25 kyr. Beregn totalt dekningsbidrag for melkeproduksjonen.
Tall per ku per år:
- Melkeytelse: 7 500 liter × 5,80 kr/liter
- Kjøttinntekt: 7 000 kr
- Kalvesalg: 3 500 kr
- Produksjonstilskudd: 9 500 kr
- Kraftfôr: 2 300 kg × 4,20 kr/kg
- Grovfôr: 7 500 kr
- Veterinær: 1 800 kr
- Inseminering: 1 400 kr
- Diverse: 1 200 kr`,
        solution: `**INNTEKTER per ku:**
- Melk: 7 500 liter × 5,80 kr = 43 500 kr
- Kjøttinntekt: 7 000 kr
- Kalvesalg: 3 500 kr
- Produksjonstilskudd: 9 500 kr
- **Sum inntekter: 63 500 kr**

**VARIABLE KOSTNADER per ku:**
- Kraftfôr: 2 300 kg × 4,20 kr = 9 660 kr
- Grovfôr: 7 500 kr
- Veterinær: 1 800 kr
- Inseminering: 1 400 kr
- Diverse: 1 200 kr
- **Sum variable kostnader: 21 560 kr**

**DEKNINGSBIDRAG per ku: 63 500 - 21 560 = 41 940 kr**

**Totalt dekningsbidrag for 25 kyr: 25 × 41 940 = 1 048 500 kr**

Dette beløpet skal dekke fjøs, maskiner, grovfôrareal og bondens arbeidsinnsats.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-4-ex-7',
        number: '7',
        type: 'classic',
        task: `Beregn fôrutnyttelsen for følgende produksjoner:
a) En melkeku produserer 8 200 liter melk og spiser 2 600 kg kraftfôr per år. Hvor mange liter melk per kg kraftfôr?
b) En slaktegris veier 110 kg ved slakting og har spist 280 kg fôr. Hvor mange kg fôr per kg slaktevekt?
c) En hveteavling gir 520 kg per dekar. Det er brukt 22 kg såkorn. Hvor mange kg høstet per kg sådd?`,
        solution: `**a) Melkeku - melk per kg kraftfôr:**
8 200 liter / 2 600 kg = **3,15 liter melk per kg kraftfôr**

**b) Slaktegris - fôrforbruk:**
280 kg fôr / 110 kg slaktevekt = **2,55 kg fôr per kg slaktevekt**
(Dette kalles fôrfaktor - lavere er bedre)

**c) Hvete - utbytte:**
520 kg avling / 22 kg såkorn = **23,6 kg høstet per kg sådd**

Disse nøkkeltallene brukes til å sammenligne effektivitet og finne forbedringspotensial.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-4-ex-8',
        number: '8',
        type: 'classic',
        task: `En grønnsaksprodusent dyrker gulrot på 15 dekar. Beregn dekningsbidraget.
- Avling: 3 500 kg/dekar
- Salgspris: 8 kr/kg (60% av avlingen er salgbar klasse 1)
- Pris klasse 2: 3 kr/kg (30% av avlingen)
- Svinn: 10% av avlingen
- Frø og planter: 800 kr/dekar
- Gjødsel: 600 kr/dekar
- Plantevern: 400 kr/dekar
- Pakking og emballasje: 1 200 kr/dekar
- Arbeidskraft innleie: 2 500 kr/dekar
- Drivstoff: 300 kr/dekar`,
        solution: `**Først beregner vi avlingen per dekar:**
- Total avling: 3 500 kg
- Klasse 1 (60%): 3 500 × 0,60 = 2 100 kg
- Klasse 2 (30%): 3 500 × 0,30 = 1 050 kg
- Svinn (10%): 3 500 × 0,10 = 350 kg (ingen inntekt)

**INNTEKTER per dekar:**
- Klasse 1: 2 100 kg × 8 kr = 16 800 kr
- Klasse 2: 1 050 kg × 3 kr = 3 150 kr
- **Sum inntekter: 19 950 kr**

**VARIABLE KOSTNADER per dekar:**
- Frø og planter: 800 kr
- Gjødsel: 600 kr
- Plantevern: 400 kr
- Pakking og emballasje: 1 200 kr
- Arbeidskraft: 2 500 kr
- Drivstoff: 300 kr
- **Sum variable kostnader: 5 800 kr**

**DEKNINGSBIDRAG per dekar: 19 950 - 5 800 = 14 150 kr**

**Totalt for 15 dekar: 15 × 14 150 = 212 250 kr**`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-4-ex-9',
        number: '9',
        type: 'classic',
        task: `Hva er et samvirke? Forklar hvordan TINE fungerer som samvirke og hvilke fordeler dette gir melkebønder.`,
        solution: `**Et samvirke** er en organisasjon som eies og styres av medlemmene, med mål om å fremme medlemmenes interesser.

**TINE som samvirke:**
- Eies av ca. 9 000 norske melkebønder
- Hver bonde har én stemme uansett størrelse
- Bøndene velger styre og bestemmer strategien
- Overskudd går tilbake til bøndene som etterbetaling

**Fordeler for melkebøndene:**

1. **Mottaksplikt:** TINE må ta imot all melk fra medlemmene
2. **Lik pris:** Alle får samme pris uansett hvor i landet de bor
3. **Markedsmakt:** Sammen står bøndene sterkere mot dagligvarekjedene
4. **Merkevarebygging:** TINE-merkevaren gir tillit hos forbrukerne
5. **Etterbetaling:** Andel av overskuddet utbetales til bøndene
6. **Rådgivning:** TINE tilbyr faglig støtte til bøndene`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5: Lokal matproduksjon og kortreist mat (UTVIDET)
// LK20 Kompetansemål #9: Foreta enkle beregninger av råvare- og materialforbruk,
// innsatsfaktorer og utbytte
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_5: TextbookChapter = {
  id: 'naturbruk-vg1-8-5',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.5',
  title: 'Lokal matproduksjon og kortreist mat',
  description: 'Lær om trenden mot lokal mat, mulighetene for lokalmatprodusenter, og økonomien i direktesalg.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forklare betydningen av lokal matproduksjon',
    'vurdere muligheter innen lokalmat',
    'foreta enkle beregninger av lønnsomhet i direktesalg',
  ],
  content: [
    {
      id: 'naturbruk-vg1-8-5-intro',
      type: 'text',
      content: `## Lokalmat - en voksende trend

Stadig flere forbrukere ønsker å vite hvor maten kommer fra. De vil ha mat med historie, identitet og kort vei fra jord til bord. Dette skaper muligheter for lokale matprodusenter.

**I dette kapittelet lærer du:**
- Hva som kjennetegner lokalmat
- Hvorfor lokalmat er populært
- Salgskanaler for lokalmat
- Prissetting av lokale produkter
- Lønnsomhet i direktesalg vs. grossist
- Regelverk og merkeordninger`,
    },
    {
      id: 'naturbruk-vg1-8-5-def-1',
      type: 'definition',
      title: 'Lokalmat',
      content: `**Lokalmat** er mat som produseres, foredles og selges innenfor et avgrenset geografisk område, med tett kobling mellom produsent og forbruker.

**Kjennetegn:**
- Kort avstand produsent-forbruker
- Ofte småskala produksjon
- Sporbarhet og åpenhet
- Tradisjonelle eller særegne produkter
- Produsenten er synlig for forbrukeren`,
    },
    {
      id: 'naturbruk-vg1-8-5-text-1',
      type: 'text',
      content: `## Hvorfor velger folk lokalmat?

**Kvalitet og smak:**
- Håndverksmessig produsert
- Ferske råvarer, kort tid fra høsting til salg
- Tradisjonelle oppskrifter og metoder

**Miljøhensyn:**
- Kortere transport gir lavere klimaavtrykk
- Støtter bærekraftig drift
- Mindre emballasje

**Tillit og trygghet:**
- Vet hvem som har laget maten
- Kan besøke gården og se produksjonen
- Direkte kommunikasjon med produsenten

**Lokal økonomi:**
- Støtter lokale arbeidsplasser
- Pengene blir i lokalsamfunnet
- Bidrar til levende bygder`,
    },
    {
      id: 'naturbruk-vg1-8-5-def-2',
      type: 'definition',
      title: 'REKO-ringer',
      content: `**REKO-ringer** er Facebook-baserte grupper der produsenter legger ut tilbud og forbrukere bestiller. Handelen skjer på et avtalt møtested uten mellomledd.

**Hvordan fungerer det:**
1. Produsent legger ut tilbud med pris og mengde
2. Forbrukere kommenterer for å bestille
3. Alle møtes på avtalt tid og sted (ofte en parkeringsplass)
4. Produktene overleveres direkte
5. Betaling skjer kontant eller via Vipps

Over 100 REKO-ringer finnes i Norge med tusenvis av medlemmer.`,
    },
    {
      id: 'naturbruk-vg1-8-5-text-2',
      type: 'text',
      content: `## Salgskanaler for lokalmat

**REKO-ringer:** Facebook-bestilling, direkte handel på parkeringsplass
**Bondens marked:** Ukentlig marked i byer og tettsteder
**Gårdsbutikk:** Salg direkte fra gården, ofte kombinert med gårdsbesøk
**Spesialbutikker:** Nisjebutikker som fokuserer på lokalmat og delikatesser
**Abonnementsordninger:** Grønnsakskasser eller kjøttpakker levert ukentlig/månedlig
**Nettbutikk:** Egen nettbutikk eller felles plattform
**Restauranter:** Salg til lokale restauranter som vil ha ferske råvarer
**Hoteller og catering:** Større kunder som ønsker lokalt preg`,
    },
    {
      id: 'naturbruk-vg1-8-5-text-prissetting',
      type: 'text',
      content: `## Prissetting av lokale produkter

**Prinsipp:** Prisen må dekke alle kostnader og gi en rimelig fortjeneste.

**Faktorer som påvirker prissetting:**

**1. Produksjonskostnader:**
- Råvarer og innsatsfaktorer
- Arbeidstid (din egen tid har også verdi!)
- Emballasje og merking
- Transport til salgssted

**2. Markedet:**
- Hva tar konkurrentene?
- Hva er kunder villige til å betale?
- Er produktet unikt eller vanlig?

**3. Salgskanal:**
- Direktesalg: Du beholder hele prisen
- Via butikk: Butikken tar 30-50% påslag
- Via grossist: Grossist og butikk tar til sammen 50-70%

**Tommelfingerregel for prissetting:**
- Råvarekostnad × 3-4 for foredlede produkter
- Sammenlign med tilsvarende produkter i butikk
- Husk: Kvalitet og historie rettferdiggjør høyere pris`,
    },
    {
      id: 'naturbruk-vg1-8-5-tip-1',
      type: 'tip',
      title: 'Eksempel: Prissetting av hjemmelaget syltetøy',
      content: `**Kostnader per glass (400g):**
- Bær (egenprodusert, beregnet verdi): 25 kr
- Sukker og pektin: 8 kr
- Glass og lokk: 6 kr
- Etikett: 2 kr
- Arbeidstid (15 min × 250 kr/time): 62,50 kr
- **Sum kostnader: 103,50 kr**

**Påslag for fortjeneste (30%):** 31 kr

**Utsalgspris direktesalg: 135 kr**

Tilsvarende i butikk koster 50-80 kr, men det er industriprodusert.
Premium hjemmelaget syltetøy kan ta 100-150 kr fordi:
- Håndlaget i små partier
- Lokale bær
- Unik oppskrift
- Kunden kjenner produsenten`,
    },
    {
      id: 'naturbruk-vg1-8-5-text-lonnsomhet',
      type: 'text',
      content: `## Lønnsomhet: Direktesalg vs. grossist

Ved direktesalg beholder produsenten en større del av utsalgsprisen, men må gjøre mer arbeid selv.

**Eksempel: Salg av 100 kg eplejuice**

| | Direktesalg | Via grossist |
|---|---|---|
| Utsalgspris per liter | 80 kr | 60 kr (lavere pris i butikk) |
| Din andel | 100% = 80 kr | 40% = 24 kr |
| Inntekt for 100 liter | 8 000 kr | 2 400 kr |
| Ekstra arbeidstid | 10 timer | 1 time |
| Inntekt per time ekstra | 560 kr/time | - |

**Konklusjon:** Direktesalg gir høyere inntekt, men krever mer tid til salg, markedsføring og kundekontakt.

**Når lønner direktesalg seg?**
- Du har tid til salgsarbeid
- Du liker kundekontakt
- Du har et unikt produkt
- Du bor nær kundene

**Når lønner grossist seg?**
- Du har store volumer
- Du vil fokusere på produksjon
- Du har begrenset tid til salg`,
    },
    {
      id: 'naturbruk-vg1-8-5-tip-kalkyle',
      type: 'tip',
      title: 'Sammenligning: Gulrot direktesalg vs. grossist',
      content: `**Scenario: 500 kg gulrot**

**DIREKTESALG (REKO-ring):**
- Pris per kg: 25 kr
- Inntekt: 500 kg × 25 kr = 12 500 kr
- Emballasje (poser): 200 kr
- Transport til REKO: 150 kr
- Tid salg og pakking: 8 timer × 250 kr = 2 000 kr
- **Netto inntekt: 10 150 kr**

**SALG TIL GROSSIST:**
- Pris per kg: 8 kr
- Inntekt: 500 kg × 8 kr = 4 000 kr
- Emballasje (storsekk): 50 kr
- Tid: 1 time × 250 kr = 250 kr
- **Netto inntekt: 3 700 kr**

**Forskjell:** 6 450 kr mer ved direktesalg
**Ekstra arbeidstid:** 7 timer
**Merverdi per time:** 921 kr/time

Direktesalg lønner seg godt i dette eksempelet!`,
    },
    {
      id: 'naturbruk-vg1-8-5-tip-suksess',
      type: 'tip',
      title: 'Suksessfaktorer for lokalmatprodusent',
      content: `**Produktet:**
- Høy og jevn kvalitet
- Noe unikt - skille seg ut
- Tilpasset etterspørselen

**Fortellingen:**
- Hvem er du? Hvorfor gjør du dette?
- Historien bak produktet
- Åpenhet om produksjonen

**Kundekontakt:**
- Vær tilgjengelig og hyggelig
- Lytt til tilbakemeldinger
- Bygg relasjoner over tid

**Markedsføring:**
- Sosiale medier (Instagram, Facebook)
- Delta på arrangementer
- Samarbeid med andre produsenter

**Økonomi:**
- Start smått, voks gradvis
- Hold oversikt over kostnader
- Sett riktig pris fra starten`,
    },
    {
      id: 'naturbruk-vg1-8-5-def-3',
      type: 'definition',
      title: 'Beskyttede betegnelser',
      content: `**Beskyttede betegnelser** beskytter produkter med spesiell geografisk eller tradisjonell tilknytning.

**Tre kategorier:**
- **Beskyttet opprinnelsesbetegnelse:** Hele produksjonen i området (f.eks. Hardangerepler)
- **Beskyttet geografisk betegnelse:** Tilknytning til området (f.eks. Lofotlam)
- **Beskyttet tradisjonelt særpreg:** Tradisjonell oppskrift (f.eks. Rakfisk fra Valdres)

**Stiftelsen Norsk Mat** arbeider for å fremme norske matspesialiteter og forvalter merkeordningene.`,
    },
    {
      id: 'naturbruk-vg1-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner lokalmat? Nevn minst fire kjennetegn.',
        solution: `**Kjennetegn på lokalmat:**

1. **Kort avstand** mellom produsent og forbruker - maten reiser kort vei
2. **Småskala produksjon** - ofte håndverksmessig fremstilt
3. **Sporbarhet og åpenhet** - forbrukeren vet hvem som har laget maten
4. **Tradisjonelle eller særegne produkter** - gjerne med lokal tilknytning
5. **Produsenten er synlig** - ofte direkte kontakt mellom produsent og kunde
6. **Ferske råvarer** - kort tid fra produksjon til salg
7. **Lokal identitet** - tilknyttet et bestemt sted eller region`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn fem grunner til at forbrukere velger lokalmat.',
        solution: `**Grunner til at forbrukere velger lokalmat:**

1. **Kvalitet og smak** - håndlaget med ferske råvarer smaker bedre
2. **Miljøhensyn** - kortere transport gir lavere klimaavtrykk
3. **Tillit og sporbarhet** - vet hvem som har laget maten, kan besøke gården
4. **Støtte lokale arbeidsplasser** - pengene blir i lokalsamfunnet
5. **Opplevelse og historie** - maten har en fortelling, ikke bare industrivare
6. **Unik smak** - tradisjonelle oppskrifter og lokale råvarer
7. **Trygghet** - direkte kommunikasjon med produsenten ved spørsmål`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er REKO-ringer og hvordan fungerer de?',
        solution: `**REKO-ringer** er Facebook-baserte grupper for direktesalg av mat fra produsent til forbruker.

**Slik fungerer det:**
1. Produsenten legger ut et tilbud i Facebook-gruppen med bilde, beskrivelse og pris
2. Forbrukere bestiller ved å kommentere på innlegget
3. På et avtalt tidspunkt møtes alle på et fast sted (ofte en parkeringsplass)
4. Produsenten har med de bestilte varene
5. Kundene henter og betaler (kontant eller Vipps)
6. Hele handelen tar 15-30 minutter

**Fordeler:**
- Ingen mellommann - produsenten beholder hele prisen
- Direkte kundekontakt
- Lav terskel for å starte
- Sosialt og hyggelig

Det finnes over 100 REKO-ringer i Norge.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn seks salgskanaler for lokalmat og beskriv kort hver av dem.',
        solution: `**Salgskanaler for lokalmat:**

1. **REKO-ringer** - Facebook-grupper der kunder bestiller og henter på fast sted
2. **Bondens marked** - Ukentlige markeder i byer der flere produsenter selger sammen
3. **Gårdsbutikk** - Fast butikk på gården, ofte kombinert med gårdsbesøk og opplevelser
4. **Spesialbutikker** - Nisjebutikker som kjøper inn lokalmat for videresalg
5. **Abonnementsordninger** - Kunder får levert grønnsakskasser eller kjøttpakker regelmessig
6. **Nettbutikk** - Egen nettside eller felles plattform som lokalmat.no
7. **Restauranter** - Lokale spisesteder som ønsker ferske, lokale råvarer
8. **Hoteller og catering** - Større kunder som vil ha lokalt preg på maten`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er viktig for å lykkes som lokalmatprodusent? Nevn minst fem faktorer.',
        solution: `**Suksessfaktorer for lokalmatprodusent:**

1. **Høy kvalitet** - produktet må holde jevn, god kvalitet
2. **Noe unikt** - skille seg ut fra det kundene får i butikken
3. **God fortelling** - hvem er du, hvorfor gjør du dette, hva er historien?
4. **Kundekontakt** - vær tilgjengelig, hyggelig, lytt til tilbakemeldinger
5. **Aktiv markedsføring** - bruk sosiale medier, delta på arrangementer
6. **God økonomistyring** - hold oversikt over kostnader, sett riktig pris
7. **Start smått** - test markedet før du investerer stort
8. **Nettverk** - samarbeid med andre produsenter
9. **Tålmodighet** - det tar tid å bygge kundebase og merkevare`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-5-ex-6',
        number: '6',
        type: 'classic',
        task: `Du skal selge 200 kg poteter. Beregn lønnsomheten ved direktesalg vs. salg til grossist.

**Direktesalg på bondens marked:**
- Pris per kg: 18 kr
- Leie av markedsplass: 300 kr
- Poser og merking: 150 kr
- Transport: 200 kr
- Arbeidstid: 6 timer × 250 kr/time

**Salg til grossist:**
- Pris per kg: 5 kr
- Storsekker: 40 kr
- Transport (hentet av grossist): 0 kr
- Arbeidstid: 0,5 timer × 250 kr/time`,
        solution: `**DIREKTESALG PÅ BONDENS MARKED:**

Inntekt: 200 kg × 18 kr = 3 600 kr

Kostnader:
- Markedsleie: 300 kr
- Poser og merking: 150 kr
- Transport: 200 kr
- Arbeidstid: 6 timer × 250 kr = 1 500 kr
- **Sum kostnader: 2 150 kr**

**Netto inntekt: 3 600 - 2 150 = 1 450 kr**

---

**SALG TIL GROSSIST:**

Inntekt: 200 kg × 5 kr = 1 000 kr

Kostnader:
- Storsekker: 40 kr
- Arbeidstid: 0,5 timer × 250 kr = 125 kr
- **Sum kostnader: 165 kr**

**Netto inntekt: 1 000 - 165 = 835 kr**

---

**SAMMENLIGNING:**
- Direktesalg gir 1 450 - 835 = **615 kr mer**
- Men krever 5,5 timer mer arbeid
- Merverdi per ekstra time: 615 / 5,5 = **112 kr/time**

I dette tilfellet gir direktesalg litt bedre betaling, men forskjellen per time er moderat. Om det lønner seg avhenger av om du har annet arbeid du kan gjøre i stedet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-5-ex-7',
        number: '7',
        type: 'classic',
        task: `Beregn hva du må ta for et glass hjemmelaget bringebærsyltetøy (350g) for å få en fortjeneste på 25%.

Kostnader:
- Bær (1 kg bær gir 3 glass): Markedspris 120 kr/kg
- Sukker: 5 kr per glass
- Pektin: 3 kr per glass
- Glass med lokk: 7 kr
- Etikett: 2 kr
- Arbeidstid per glass: 12 minutter (timelønn 200 kr)`,
        solution: `**Beregning av kostnader per glass:**

**Råvarer:**
- Bær: 120 kr/kg ÷ 3 glass = 40 kr
- Sukker: 5 kr
- Pektin: 3 kr
- **Sum råvarer: 48 kr**

**Emballasje:**
- Glass med lokk: 7 kr
- Etikett: 2 kr
- **Sum emballasje: 9 kr**

**Arbeid:**
- 12 minutter = 0,2 timer
- 0,2 timer × 200 kr = 40 kr
- **Arbeidskostnad: 40 kr**

**Total kostnad per glass: 48 + 9 + 40 = 97 kr**

**Beregning av pris med 25% fortjeneste:**

Fortjeneste = 97 kr × 0,25 = 24,25 kr

**Utsalgspris = 97 + 24,25 = 121,25 kr**

**Avrundet pris: 125 kr per glass**

Dette er en høy pris sammenlignet med industrisyltetøy (40-60 kr), men hjemmelaget premium-syltetøy med lokale bær kan forsvare denne prisen i direktesalg.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-5-ex-8',
        number: '8',
        type: 'classic',
        task: `En gård vil starte med salg av egg direkte til forbruker via REKO-ring. De har 50 høner som legger gjennomsnittlig 280 egg per høne per år.

Beregn:
a) Årlig eggproduksjon i antall egg og brett (30 egg per brett)
b) Pris per brett for å dekke kostnadene og gi 20% fortjeneste

Årlige kostnader:
- Fôr: 15 000 kr
- Strø og diverse: 2 000 kr
- Emballasje (eggbrett): 500 kr
- Arbeid (beregnet): 8 000 kr
- Andel faste kostnader (hus, utstyr): 4 000 kr`,
        solution: `**a) Årlig eggproduksjon:**

Antall egg: 50 høner × 280 egg = **14 000 egg per år**

Antall brett: 14 000 ÷ 30 = **467 brett per år** (avrundet ned)

---

**b) Pris per brett:**

**Totale årlige kostnader:**
- Fôr: 15 000 kr
- Strø og diverse: 2 000 kr
- Emballasje: 500 kr
- Arbeid: 8 000 kr
- Faste kostnader: 4 000 kr
- **Sum kostnader: 29 500 kr**

**Kostnad per brett:**
29 500 kr ÷ 467 brett = 63,17 kr per brett

**Med 20% fortjeneste:**
63,17 kr × 1,20 = 75,80 kr

**Anbefalt pris: 75-80 kr per brett**

**Kontroll:** 467 brett × 75 kr = 35 025 kr i inntekt
Fortjeneste: 35 025 - 29 500 = 5 525 kr (18,7% margin)

Til sammenligning koster et brett økologiske egg ca. 70-90 kr i butikken, så prisen er konkurransedyktig for gårdsferske egg.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.6: Digitale verktøy i naturbruk (UTVIDET)
// ============================================================================
// LK20-kompetansemål #4: "Velge og bruke analoge og digitale verktøy til
// planlegging og gjennomføring av arbeidsoppgaver"
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_6: TextbookChapter = {
  id: 'naturbruk-vg1-8-6',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.6',
  title: 'Digitale verktøy i naturbruk',
  description: 'Lær om hvordan digitale verktøy brukes i moderne naturbruk for planlegging, gjennomføring og dokumentasjon av arbeidsoppgaver.',
  estimatedMinutes: 90,
  competenceGoals: [
    'beskrive digitale verktøy som brukes i naturbruk',
    'vurdere fordeler og utfordringer med digitalisering',
    'velge og bruke analoge og digitale verktøy til planlegging og gjennomføring av arbeidsoppgaver',
    'dokumentere arbeid digitalt og forstå krav til sporbarhet',
  ],
  content: [
    {
      id: 'naturbruk-vg1-8-6-intro',
      type: 'text',
      content: `## Digital revolusjon i naturbruk

Naturbruk er i rask endring. Droner, GPS, sensorer og dataanalyse gjør det mulig å drive mer presist og effektivt enn noen gang.

**I dette kapittelet lærer du:**
- Digitale verktøy i landbruk, skog og havbruk
- Presisjonslandbruk
- GPS og kartverktøy
- Sensorer og overvåking
- Planleggingsverktøy og apps
- Digital dokumentasjon og sporbarhet
- Praktisk bruk av teknologi i felt`,
    },
    {
      id: 'naturbruk-vg1-8-6-def-1',
      type: 'definition',
      title: 'Presisjonslandbruk',
      content: `**Presisjonslandbruk** er bruk av teknologi for å tilpasse innsatsfaktorene til det faktiske behovet i hver del av et jorde.

**Mål:** Riktig mengde på riktig sted til riktig tid - bedre økonomi og miljø.`,
    },
    {
      id: 'naturbruk-vg1-8-6-def-gis',
      type: 'definition',
      title: 'GIS - Geografisk informasjonssystem',
      content: `**GIS (Geografisk informasjonssystem)** er programvare for å samle inn, lagre, analysere og presentere geografiske data.

**Bruk i naturbruk:**
- Kartlegging av jordtyper, terreng og vegetasjon
- Planlegging av hogst, beite og infrastruktur
- Analyse av arealbruk over tid
- Beregning av avlinger basert på jordkvalitet

**Eksempler på GIS-verktøy:** QGIS (gratis), ArcGIS, Gårdskart, Kilden (fra NIBIO).`,
    },
    {
      id: 'naturbruk-vg1-8-6-def-iot',
      type: 'definition',
      title: 'IoT - Internet of Things',
      content: `**IoT (Internet of Things)** er et nettverk av sensorer og enheter som kommuniserer via internett.

**Eksempler i naturbruk:**
- Sensorer som måler jordfuktighet og sender data til mobilen
- Værstasjoner som varsler om frost
- Halsbånd på kyr som registrerer aktivitet og helse
- Vannkvalitetsmålere i oppdrettsanlegg

**Fordel:** Kontinuerlig overvåking uten å være fysisk til stede.`,
    },
    {
      id: 'naturbruk-vg1-8-6-def-dokumentasjon',
      type: 'definition',
      title: 'Digital dokumentasjon',
      content: `**Digital dokumentasjon** er systematisk registrering av aktiviteter, observasjoner og resultater i digitale systemer.

**Krav i norsk naturbruk:**
- Plantevernjournal (lovpålagt)
- Gjødselplan
- Husdyrjournal
- KSL-dokumentasjon (Kvalitetssystem i Landbruket)
- Sporbarhet i matproduksjon

**Fordeler:** Raskere rapportering, enklere tilsyn, bedre oversikt over egen drift.`,
    },
    {
      id: 'naturbruk-vg1-8-6-text-1',
      type: 'text',
      content: `## GPS og autostyring

**GPS i traktoren:**
- Posisjon med centimeters nøyaktighet (RTK-GPS)
- Autostyring - traktoren kjører selv
- Seksjonskontroll på sprøyte og spreder

**Fordeler:**
- Ingen overlapp
- Kan kjøre i mørke
- Mindre forbruk av innsatsmidler`,
    },
    {
      id: 'naturbruk-vg1-8-6-text-gps-praktisk',
      type: 'text',
      content: `## Praktisk bruk av GPS og kartverktøy i felt

**Grunnleggende GPS-bruk:**
1. **Markering av punkter:** Registrer viktige steder (grensemerker, dreneringsbrønner, sykdomsutbrudd)
2. **Navigering:** Finn tilbake til tidligere registrerte punkter
3. **Arealberegning:** Mål størrelsen på skifter og arealer
4. **Sporlogging:** Dokumenter hvor du har vært (f.eks. ved sprøyting)

**Kartverktøy du bør kunne:**
- **Gårdskart (NIBIO):** Offisielle kart over din eiendom, jordbruksareal og AR5-data
- **Kilden (NIBIO):** Detaljerte kart med jordtype, bonitet, vernede områder
- **Norgeskart/Kartverket:** Topografiske kart, historiske flyfoto
- **Google Earth:** Enkel visualisering, måling av avstander

**Tips for feltarbeid:**
- Last ned kart offline før du drar ut (ikke alltid mobildekning)
- Bruk solcellelader for GPS og mobil
- Ta backup av viktige waypoints
- Kombiner GPS med papirkart som reserve`,
    },
    {
      id: 'naturbruk-vg1-8-6-def-2',
      type: 'definition',
      title: 'Drone',
      content: `En **drone** (UAV) er et ubemannet luftfartøy.

**Bruk i naturbruk:**
- Kartlegging og fotografering
- Sprøyting av bratt terreng
- Overvåking av beite og dyr
- Inspeksjon av anlegg`,
    },
    {
      id: 'naturbruk-vg1-8-6-text-2',
      type: 'text',
      content: `## Sensorer og overvåking

**I åkeren:** Jordfuktighet, bladgrønnhet, sykdomsvarsling
**I fjøset:** Aktivitetsmålere, melkemåling, fôringsautomater
**I skogen:** Laserskanning, satellittbilder
**I havbruk:** Undervannssensorer, fôringsautomatikk`,
    },
    {
      id: 'naturbruk-vg1-8-6-text-sensorer-praktisk',
      type: 'text',
      content: `## Sensorer og datainnsamling i praksis

**Værstasjon på gården:**
En enkel værstasjon kan måle temperatur, nedbør, luftfuktighet, vindstyrke og jordtemperatur. Dataene lagres i skyen og kan brukes til:
- Varsling om nattefrost (dekk til planter)
- Optimalt sprøytetidspunkt (temperatur, vind, fuktighet)
- Dokumentasjon av værforhold ved skader
- Beregning av varmesum for såing og høsting

**Jordfuktighetssensorer:**
- Plasseres i ulike dybder (10, 30, 50 cm)
- Viser når det er behov for vanning
- Forhindrer overvanning (sparer vann og energi)
- Viktig i veksthus og på arealer med vanning

**Dyreovervåking:**
- **Aktivitetsmålere (pedometer):** Registrerer bevegelse, oppdager brunst og sykdom
- **Drøvtyggingssensor:** Måler drøvtygging, varsler ved fordøyelsesproblemer
- **GPS-bjeller på beitedyr:** Sporer hvor dyra er, setter opp virtuelle gjerder
- **Kamera i fjøset:** Overvåking av kalving, generell dyrevelferd

**Dataflyt fra sensor til beslutning:**
1. Sensor måler kontinuerlig
2. Data sendes til sky via mobilnett eller WiFi
3. Programvare analyserer og gir varsel
4. Du får melding på mobilen
5. Du tar beslutning og handler`,
    },
    {
      id: 'naturbruk-vg1-8-6-text-apps',
      type: 'text',
      content: `## Planleggingsverktøy og apps for naturbruk

**Landbruk:**
- **Jordplan:** Gjødselplanlegging og dokumentasjon
- **Skifteplan:** Oversikt over vekstskifte og tiltak
- **CropSAT:** Variabel gjødsling basert på satellittbilder
- **Yara CheckIT:** Identifiser næringsmangel med mobilkamera
- **KSL-appen:** Kvalitetssikring og egenrevisjon

**Skogbruk:**
- **Skogbruksplan (digital):** Oversikt over bestand, bonitet, hogstklasser
- **Allma:** Skogforvaltning, driftsplanlegging
- **ArborPlan:** Driftsøkonomi i skogbruket
- **SkogsGIS:** Kartbasert skogforvaltning

**Havbruk:**
- **AquaManager:** Drift og overvåking av oppdrettsanlegg
- **OCEA:** Driftsoptimalisering
- **Fishtalk:** Fiskehelse og dokumentasjon

**Generelle verktøy:**
- **Yr/Storm:** Værmelding og varsler
- **Avenza Maps:** Bruk PDF-kart med GPS
- **ArcGIS Field Maps:** Datainnsamling i felt
- **Clockify/Toggl:** Timeregistrering`,
    },
    {
      id: 'naturbruk-vg1-8-6-text-dokumentasjon',
      type: 'text',
      content: `## Digital dokumentasjon og sporbarhet

**Hvorfor er dokumentasjon viktig?**
Forbrukere og myndigheter krever sporbarhet - muligheten til å følge et produkt fra jord/fjøs til bord. Digital dokumentasjon gjør dette enklere og mer pålitelig.

**Lovpålagte krav:**
- **Plantevernjournal:** Dato, preparat, dose, skifte, værforhold
- **Gjødselplan:** Mengder og tidspunkt for all gjødsling
- **Husdyrjournal:** Individregistrering, behandlinger, hendelser
- **Matloven:** Sporbarhet gjennom hele verdikjeden

**KSL (Kvalitetssystem i Landbruket):**
KSL er bondens eget kvalitetssystem. Digital KSL gir:
- Oversikt over krav og sjekklister
- Automatisk varsling om frister
- Dokumentasjon ved kontroll
- Tilleggsbetaling fra varemottaker

**Sporbarhet i praksis:**
1. Såvare registreres med parti-nummer
2. Alle tiltak loggføres med dato og mengde
3. Høsting registreres per skifte
4. Varen følger med ID til varemottaker
5. Forbruker kan spore produktet tilbake

**Tips for god dokumentasjon:**
- Registrer underveis, ikke etterpå
- Bruk automatikk der mulig (GPS-logg, sensorer)
- Ha backup av viktig data
- Vær ærlig - dokumentasjon er ikke verdt noe hvis den ikke stemmer`,
    },
    {
      id: 'naturbruk-vg1-8-6-tip-1',
      type: 'tip',
      title: 'Hold deg oppdatert',
      content: `- Følg fagblader og nettsider
- Delta på messer og demonstrasjoner
- Ta kurs hos leverandører
- Prøv nye verktøy gradvis

**Teknologi er et verktøy - det erstatter ikke fagkunnskap.**`,
    },
    {
      id: 'naturbruk-vg1-8-6-tip-valg',
      type: 'tip',
      title: 'Hvordan velge riktig verktøy?',
      content: `**Still disse spørsmålene:**
1. Hvilket problem skal løses?
2. Hva koster det (innkjøp + drift + opplæring)?
3. Er det kompatibelt med det jeg har fra før?
4. Finnes det support og opplæring på norsk?
5. Hva sier andre brukere?

**Start enkelt:**
- Velg ett område å digitalisere først
- Lær det ordentlig før du går videre
- Ikke kjøp teknologi for teknologiens skyld

**Kombiner analogt og digitalt:**
- Papirnotater som backup
- Visuelle observasjoner supplerer sensordata
- Erfaring + data = bedre beslutninger`,
    },
    {
      id: 'naturbruk-vg1-8-6-def-3',
      type: 'definition',
      title: 'Kunstig intelligens',
      content: `**Kunstig intelligens (AI)** er datasystemer som kan lære og ta beslutninger.

**I naturbruk:** Bildegjenkjenning (ugress, sykdom), prediktivt vedlikehold, optimalisering av fôring.`,
    },
    {
      id: 'naturbruk-vg1-8-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er presisjonslandbruk?',
        solution: 'Presisjonslandbruk er bruk av teknologi for å tilpasse innsatsfaktorer til det faktiske behovet - riktig mengde på riktig sted til riktig tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan brukes GPS i moderne landbruk?',
        solution: 'GPS brukes til autostyring av traktor, seksjonskontroll på sprøyte/spreder, og til å lage kart. RTK-GPS gir centimeters nøyaktighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre måter droner kan brukes i naturbruk.',
        solution: 'Kartlegging og fotografering, sprøyting av bratt terreng, overvåking av beite og dyr, inspeksjon av anlegg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er fordeler og utfordringer med digitalisering?',
        solution: 'Fordeler: Høyere presisjon, bedre miljø, enklere dokumentasjon. Utfordringer: Investeringskostnader, kompetansebehov, teknologiavhengighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan kunstig intelligens brukes i naturbruk?',
        solution: 'Bildegjenkjenning av ugress og sykdom, prediktivt vedlikehold av maskiner, optimalisering av fôring, automatisk sortering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-6-ex-6',
        number: '6',
        type: 'classic',
        task: `Du skal planlegge sprøyting av et 20 dekar stort jorde. Hvilke digitale verktøy kan du bruke i planleggingen, og hvordan vil du dokumentere arbeidet?`,
        solution: `**Planlegging:**
- Gårdskart/Kilden: Finn nøyaktig areal og jordtype
- Yr/VIPS: Sjekk værmelding og eventuelt sykdomsvarsling
- Plantevernkatalogen: Finn godkjent preparat og dose

**Gjennomføring:**
- GPS i traktor: Sikre full dekning uten overlapp
- Seksjonskontroll: Automatisk av/på ved kantene

**Dokumentasjon (plantevernjournal):**
- Dato og klokkeslett
- Skifte og areal
- Preparat, dose og vannmengde
- Værforhold (temp, vind, fuktighet)
- Behandlingsfrist
- Signatur

**Tips:** Bruk digital plantevernjournal (f.eks. i Skifteplan) for enkel rapportering og backup.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-6-ex-7',
        number: '7',
        type: 'classic',
        task: `Forklar hva GIS er og gi to konkrete eksempler på hvordan det kan brukes i skogbruk.`,
        solution: `**GIS (Geografisk informasjonssystem)** er programvare for å samle inn, lagre, analysere og presentere geografiske data.

**Eksempel 1 - Hogstplanlegging:**
- Importer skogbruksplan til GIS
- Analyser bonitet, hogstklasse og terreng
- Beregn driftsveilengder og adkomst
- Planlegg optimale driftsveier
- Beregn forventet tømmervolum

**Eksempel 2 - Miljøhensyn:**
- Legg inn data om vernede områder, bekkedrag, kulturminner
- Definer kantsoner og nøkkelbiotoper
- Sjekk om planlagt hogst kommer i konflikt
- Dokumenter miljøhensyn for sertifisering (PEFC)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-6-ex-8',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-6-ex-8',
        number: '8',
        type: 'classic',
        task: `En melkebonde vurderer å investere i aktivitetsmålere på kyrne. Beskriv hvilken informasjon slike sensorer kan gi, og hvordan dette kan forbedre driften.`,
        solution: `**Informasjon fra aktivitetsmålere:**
- Antall skritt per dag
- Liggetid og hvileperioder
- Drøvtygging (med drøvtyggingssensor)
- Etetid ved fôrbrettet
- Endringer i aktivitetsmønster

**Hvordan det forbedrer driften:**

**Brunstdeteksjon:**
- Økt aktivitet indikerer brunst
- Automatisk varsling på mobil
- Bedre insemineringsresultater
- Kortere kalvingsintervall

**Sykdomsvarsling:**
- Redusert aktivitet kan indikere sykdom
- Tidlig oppdaging = raskere behandling
- Mindre produksjonstap
- Bedre dyrevelferd

**Praktisk:**
- Varsling om kyr som ikke har spist
- Identifisere dyr som bør sjekkes
- Dokumentasjon av dyrevelferd

**Økonomisk:**
- Investering: ca. 1 500-3 000 kr per ku
- Gevinst: Bedre fruktbarhet, mindre sykdom, høyere ytelse`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-6-ex-9',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-6-ex-9',
        number: '9',
        type: 'classic',
        task: `Hva er IoT (Internet of Things), og hvordan kan det brukes til å overvåke et veksthus? Beskriv minst tre sensorer og hva de måler.`,
        solution: `**IoT (Internet of Things)** er et nettverk av sensorer og enheter som kommuniserer via internett, slik at du kan overvåke og styre uten å være fysisk til stede.

**Sensorer i veksthus:**

**1. Temperatursensor:**
- Måler lufttemperatur inne og ute
- Varsler ved for høy/lav temperatur
- Styrer automatisk ventilasjon og varme

**2. Jordfuktighetssensor:**
- Måler vanninnhold i vekstmediet
- Varsler når det er behov for vanning
- Kan styre automatisk vanningsanlegg
- Forhindrer over- og undervanning

**3. Lyssensor (PAR-sensor):**
- Måler lysmengden plantene får
- Styrer vekstlys automatisk
- Optimaliserer energiforbruk

**4. CO2-sensor:**
- Måler karbondioksid i luften
- Styrer CO2-tilførsel for bedre vekst
- Varsler ved farlig høye nivåer

**Dataflyt:**
Sensor -> Gateway -> Sky -> App -> Varsling/automatikk`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.7: Yrkesmuligheter i naturbruk
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_7: TextbookChapter = {
  id: 'naturbruk-vg1-8-7',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.7',
  title: 'Yrkesmuligheter i naturbruk',
  description: 'Lær om karriereveier og jobbmuligheter innen naturbruksnæringene.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til ulike yrker i naturbruksnæringene',
    'vurdere egne interesser og muligheter',
  ],
  content: [
    {
      id: 'naturbruk-vg1-8-7-intro',
      type: 'text',
      content: `## Mange muligheter i naturbruk

Naturbruk åpner dører til et mangfold av yrker - fra tradisjonell gårdsdrift til høyteknologisk havbruk.

**I dette kapittelet lærer du:**
- Oversikt over yrker i naturbruk
- Utdanningsveier og fagbrev
- Arbeidsmarkedet
- Hvordan finne riktig yrkesvei`,
    },
    {
      id: 'naturbruk-vg1-8-7-def-1',
      type: 'definition',
      title: 'Fagbrev',
      content: `**Fagbrev** dokumenterer gjennomført yrkesfaglig utdanning med bestått fagprøve.

**Fagbrev i naturbruk:** Landbruk, gartnernæring, hestefag, skogbruk, fiske og fangst, akvakultur, reindrift.

**Veien:** VG1 + VG2 + læretid (2 år) + fagprøve`,
    },
    {
      id: 'naturbruk-vg1-8-7-text-1',
      type: 'text',
      content: `## Yrker innen landbruk

**Bonde/gårdbruker:** Driver egen gård
**Avløser:** Stedfortreder for bonden
**Røkter:** Daglig stell av dyr
**Agronom:** Rådgiver, krever høyere utdanning
**Maskinfører:** Kjører traktorer og maskiner`,
    },
    {
      id: 'naturbruk-vg1-8-7-text-2',
      type: 'text',
      content: `## Yrker innen skog, fiske og havbruk

**Skogsoperatør:** Fører hogstmaskin/lassbærer
**Naturveileder:** Formidler kunnskap om natur
**Fisker:** Fangst av fisk og skalldyr
**Driftsoperatør i havbruk:** Daglig drift av oppdrettsanlegg
**Fiskehelsebiolog:** Helse og sykdom hos fisk`,
    },
    {
      id: 'naturbruk-vg1-8-7-tip-1',
      type: 'tip',
      title: 'Finn din vei',
      content: `**Spør deg selv:**
- Liker jeg ute eller inne?
- Dyr, planter eller maskiner?
- Selvstendig eller ansatt?
- Hvor vil jeg bo?

**Råd:** Prøv ulike arbeidsplasser, snakk med folk i yrket, vær åpen for muligheter.`,
    },
    {
      id: 'naturbruk-vg1-8-7-def-2',
      type: 'definition',
      title: 'Arbeidsmarkedet',
      content: `**Stor etterspørsel:** Havbruk, skogsmaskinførere, avløsere, gartnere i byer.

**Utfordringer:** Sesongvariasjoner, geografisk begrenset til distrikt.`,
    },
    {
      id: 'naturbruk-vg1-8-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke fagbrev kan du ta innen naturbruk?',
        solution: 'Landbruk, gartnernæring, hestefag, skogbruk, fiske og fangst, akvakultur, reindrift.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på avløser og røkter?',
        solution: 'Avløser er stedfortreder for bonden (vikar). Røkter har daglig stell av dyr som fast ansatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre yrker innen havbruk.',
        solution: 'Driftsoperatør, driftsleder, fiskehelsebiolog, brønnbåtoffiser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke spørsmål bør du stille deg når du velger yrke?',
        solution: 'Ute eller inne? Dyr, planter eller maskiner? Selvstendig eller ansatt? Hvor vil jeg bo? Hva er viktig: lønn, frihet eller mening?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvor er det stor etterspørsel etter arbeidskraft?',
        solution: 'Havbruk, skogsmaskinførere, avløsere i landbruket, gartnere i byområder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.8: Fremtidens naturbruk
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_8: TextbookChapter = {
  id: 'naturbruk-vg1-8-8',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.8',
  title: 'Fremtidens naturbruk',
  description: 'Lær om trender, utfordringer og muligheter for naturbruk i fremtiden, samt krav til profesjonell yrkesutøvelse og samarbeid i arbeidslivet.',
  estimatedMinutes: 75,
  competenceGoals: [
    'reflektere over fremtidige utfordringer og muligheter',
    'vurdere naturbrukets rolle i det grønne skiftet',
    'reflektere over hvilke krav og forventninger som blir stilt til en profesjonell yrkesutøver knyttet til samhandling og deltakelse i samfunnsdebatten om natur, ressursbruk og forvaltning',
  ],
  content: [
    {
      id: 'naturbruk-vg1-8-8-intro',
      type: 'text',
      content: `## Hva bringer fremtiden?

Naturbruk står midt i store endringer. Klimaendringer, teknologisk utvikling og politiske krav former næringene.

**I dette kapittelet lærer du:**
- Store trender som påvirker naturbruk
- Klimaendringer og tilpasning
- Teknologiske muligheter
- Nye næringer og produkter
- Din rolle i fremtidens naturbruk
- Partene i arbeidslivet og dine rettigheter
- Samarbeid og profesjonell yrkesutøvelse
- Deltakelse i samfunnsdebatten`,
    },
    {
      id: 'naturbruk-vg1-8-8-def-1',
      type: 'definition',
      title: 'Det grønne skiftet',
      content: `**Det grønne skiftet** er omstillingen til lavere utslipp og bærekraftig ressursbruk.

For naturbruk: Fra fossilt til fornybart, fra avfall til ressurs, fra volum til verdi.

**Naturbruk er en nøkkelnæring i det grønne skiftet.**`,
    },
    {
      id: 'naturbruk-vg1-8-8-text-1',
      type: 'text',
      content: `## Klimaendringer

**Endringer vi ser:**
- Lengre vekstsesong
- Mer ekstremvær
- Nye skadegjørere og sykdommer

**Tilpasning:**
- Nye sorter
- Bedre drenering
- Plantevern mot nye skadegjørere
- Dypere havbruksanlegg`,
    },
    {
      id: 'naturbruk-vg1-8-8-text-2',
      type: 'text',
      content: `## Teknologiske trender

**Automatisering:** Roboter i fjøset, autonome traktorer
**Kunstig intelligens:** Prediksjon, optimalisering
**Genteknologi:** Nye sorter raskere
**Vertikal farming:** Dyrking innendørs
**Cellekulturer:** Lab-produsert kjøtt`,
    },
    {
      id: 'naturbruk-vg1-8-8-def-2',
      type: 'definition',
      title: 'Bioøkonomi',
      content: `**Bioøkonomi** er en økonomi basert på bærekraftig bruk av fornybare biologiske ressurser.

**Inkluderer:** Matproduksjon, skogprodukter, marine ressurser, bioteknologi, bioenergi.

**Norge har store muligheter i bioøkonomien.**`,
    },
    {
      id: 'naturbruk-vg1-8-8-tip-1',
      type: 'tip',
      title: 'Kompetanse for fremtiden',
      content: `**Du trenger:**
- Fagkunnskap (praktisk, biologisk, økonomisk)
- Digital kompetanse
- Bærekraftskompetanse
- Sosiale ferdigheter
- Evne til livslang læring

**Hold deg nysgjerrig!**`,
    },
    {
      id: 'naturbruk-vg1-8-8-text-3',
      type: 'text',
      content: `## Din rolle

**Naturbruk trenger deg!**
- Gjennomsnittsalderen er høy
- Mange arbeidsplasser må fylles
- Nye næringer skapes

**Du kan påvirke:**
- Velg utdanning som passer deg
- Delta i debatter
- Vær med å utvikle næringen

**Fremtidens naturbruk formes av dem som velger å være med!**`,
    },

    // ========================================================================
    // NYE SEKSJONER: Arbeidsliv og samarbeid
    // ========================================================================

    {
      id: 'naturbruk-vg1-8-8-text-arbeidsliv-intro',
      type: 'text',
      content: `## Arbeidslivet i naturbruksnæringene

Som profesjonell yrkesutøver i naturbruk vil du være del av et organisert arbeidsliv med klare regler, rettigheter og plikter. Enten du jobber på en gård, i skogen, på et oppdrettsanlegg eller i et gartneri, gjelder de samme grunnleggende prinsippene for et godt arbeidsmiljø.

**Det norske arbeidslivet kjennetegnes av:**
- Sterke rettigheter for arbeidstakere
- Samarbeid mellom partene
- Fokus på helse, miljø og sikkerhet
- Medbestemmelse og demokrati på arbeidsplassen

Å forstå hvordan arbeidslivet fungerer er viktig for din fremtid som yrkesutøver.`,
    },
    {
      id: 'naturbruk-vg1-8-8-def-arbeidsmiljolov',
      type: 'definition',
      title: 'Arbeidsmiljøloven',
      content: `**Arbeidsmiljøloven (AML)** er den viktigste loven som regulerer arbeidsforhold i Norge. Den gjelder for nesten alle virksomheter og arbeidstakere.

**Loven sikrer:**
- Trygge ansettelsesforhold
- Et fullt forsvarlig arbeidsmiljø
- Vern mot diskriminering
- Rett til medvirkning
- Arbeidstidsbestemmelser
- Stillingsvern ved oppsigelse

**Alle arbeidstakere i naturbruk er omfattet av arbeidsmiljøloven, også sesongarbeidere og deltidsansatte.**`,
    },
    {
      id: 'naturbruk-vg1-8-8-def-tariffavtale',
      type: 'definition',
      title: 'Tariffavtale',
      content: `En **tariffavtale** er en skriftlig avtale mellom en fagforening og en arbeidsgiver eller arbeidsgiverforening om lønns- og arbeidsvilkår.

**Tariffavtalen regulerer typisk:**
- Minstelønn og lønnstillegg
- Arbeidstid og overtidsbetaling
- Ferie og fridager
- Pensjon og forsikringer
- Permisjonsrettigheter

**I naturbruk er det flere tariffavtaler:**
- Landbruksoverenskomsten (gårdsarbeid)
- Gartnerioverenskomsten
- Fiskerioverenskomster

**En tariffavtale gir ofte bedre vilkår enn lovens minstekrav.**`,
    },
    {
      id: 'naturbruk-vg1-8-8-def-hms-representant',
      type: 'definition',
      title: 'HMS-representant (verneombud)',
      content: `**HMS-representant** eller **verneombud** er en arbeidstaker som er valgt til å ivareta arbeidstakernes interesser i saker som angår arbeidsmiljøet.

**Oppgaver:**
- Påse at arbeidet utføres på en sikker måte
- Varsle om farlige forhold
- Delta i planlegging av tiltak
- Være kontaktperson mellom ansatte og ledelse i HMS-saker

**Alle virksomheter med 10 eller flere ansatte skal ha verneombud. I naturbruk er dette spesielt viktig på grunn av mange fysiske risikofaktorer.**`,
    },
    {
      id: 'naturbruk-vg1-8-8-def-tillitsvalgt',
      type: 'definition',
      title: 'Tillitsvalgt',
      content: `En **tillitsvalgt** er en arbeidstaker som er valgt av de fagorganiserte på arbeidsplassen til å representere dem overfor arbeidsgiver.

**Rollen innebærer:**
- Forhandle på vegne av medlemmene
- Bistå i konflikter og personalsaker
- Informere om rettigheter og avtaler
- Være bindeledd mellom fagforening og arbeidsplass

**Tillitsvalgte har rett til opplæring og tid til å utføre vervet. De har også et spesielt oppsigelsesvern.**`,
    },
    {
      id: 'naturbruk-vg1-8-8-text-parter',
      type: 'text',
      content: `## Partene i arbeidslivet

Det norske arbeidslivet er bygget på et samarbeid mellom tre hovedparter:

### Arbeidstaker
Du som utfører arbeid for en arbeidsgiver. Som arbeidstaker har du rettigheter (lønn, ferie, trygge arbeidsforhold) og plikter (utføre arbeidet, følge instrukser, bidra til godt arbeidsmiljø).

### Arbeidsgiver
Den som ansetter og betaler deg. Arbeidsgiver har ansvar for å sikre et forsvarlig arbeidsmiljø, betale lønn til rett tid, og følge lover og avtaler.

### Fagforeninger
Organisasjoner som representerer arbeidstakerne. De forhandler lønn og arbeidsvilkår, gir juridisk bistand, og påvirker politikken.

**I naturbruk finnes flere relevante fagforeninger:**
- Fellesforbundet (landbruk, gartneri)
- Norsk Nærings- og Nytelsesmiddelarbeiderforbund
- Norsk Sjømannsforbund (fiskeri)

**Arbeidsgiverforeninger i naturbruk:**
- NHO Mat og Drikke
- Norges Bondelag (som arbeidsgiver)
- Sjømat Norge`,
    },
    {
      id: 'naturbruk-vg1-8-8-text-rettigheter',
      type: 'text',
      content: `## Rettigheter og plikter som arbeidstaker

### Dine viktigste rettigheter:

**Lønn og godtgjørelse:**
- Rett til avtalt lønn utbetalt til rett tid
- Overtidsbetaling ved arbeid utover normalarbeidstid
- Feriepenger (minst 10,2 % av fjorårets lønn)

**Arbeidstid:**
- Normalarbeidstid på 40 timer per uke (ofte 37,5 med tariffavtale)
- Rett til pauser
- Krav på hviletid mellom arbeidsøkter

**Ferie:**
- Minst 25 virkedager ferie per år
- Rett til å ta ut tre uker sammenhengende om sommeren

**Trygt arbeidsmiljø:**
- Rett til opplæring i HMS
- Rett til verneutstyr uten kostnad
- Rett til å nekte farlig arbeid

### Dine viktigste plikter:

- Utføre arbeidet etter beste evne
- Følge arbeidsgivers instrukser (innenfor loven)
- Melde fra om farlige forhold
- Bruke påbudt verneutstyr
- Bidra til et godt arbeidsmiljø
- Vise lojalitet til arbeidsplassen`,
    },
    {
      id: 'naturbruk-vg1-8-8-text-samarbeid',
      type: 'text',
      content: `## Samarbeid og konflikthåndtering på arbeidsplassen

Et godt arbeidsmiljø bygges gjennom samarbeid og god kommunikasjon. I naturbruksnæringene jobber man ofte tett sammen, og evnen til å samarbeide er avgjørende.

### Nøkler til godt samarbeid:

**Kommunikasjon:**
- Vær tydelig i beskjeder
- Lytt aktivt til andre
- Gi og ta imot konstruktiv tilbakemelding
- Still spørsmål når noe er uklart

**Respekt:**
- Anerkjenn andres kompetanse
- Behandle alle likt uavhengig av bakgrunn
- Godta at folk er forskjellige

**Ansvar:**
- Ta ansvar for egne oppgaver
- Bidra til fellesskapet
- Innrøm feil og lær av dem

### Når konflikter oppstår:

Konflikter er naturlig på enhver arbeidsplass. Det viktige er hvordan de håndteres:

1. **Ta det tidlig:** Ikke la små irritasjoner vokse seg store
2. **Snakk direkte:** Gå til den det gjelder, ikke baksnakk
3. **Fokuser på sak, ikke person:** "Dette fungerer ikke" i stedet for "Du gjør alltid..."
4. **Søk løsninger:** Hva kan vi gjøre for å løse dette?
5. **Bruk tillitsvalgt eller verneombud:** Ved alvorlige konflikter

**I naturbruk kan konflikter oppstå om arbeidsfordeling, sikkerhetsprosedyrer eller faglige uenigheter. God konflikthåndtering gjør arbeidsplassen tryggere og mer produktiv.**`,
    },
    {
      id: 'naturbruk-vg1-8-8-text-profesjonell',
      type: 'text',
      content: `## Profesjonell yrkesutøvelse og samfunnsansvar

Å være profesjonell handler om mer enn å kunne faget sitt. Det handler om holdninger, etikk og evne til å representere næringen på en god måte.

### Kjennetegn på profesjonell yrkesutøvelse:

**Faglig kompetanse:**
- Holder seg oppdatert på ny kunnskap
- Erkjenner egne begrensninger
- Søker veiledning ved behov

**Pålitelighet:**
- Kommer til avtalt tid
- Gjør det man har sagt man skal gjøre
- Holder tidsfrister

**Etisk bevissthet:**
- Tar hensyn til dyrevelferd
- Tenker på miljøkonsekvenser
- Er ærlig i alle forhold

**Kommunikasjonsevne:**
- Kan forklare faglige valg
- Håndterer kunder og publikum profesjonelt
- Deltar konstruktivt i faglige diskusjoner

### Deltakelse i samfunnsdebatten

Som naturbruksarbeider har du en unik posisjon i samfunnsdebatten om natur, ressursbruk og forvaltning. Du har førstehåndskunnskap som er verdifull.

**Hvorfor delta:**
- Du vet hvordan det faktisk fungerer i praksis
- Beslutninger påvirker din hverdag
- Næringen trenger talspersoner
- Demokratiet trenger fagkunnskap

**Hvordan delta:**
- Skriv leserinnlegg i lokalavisen
- Delta på folkemøter
- Engasjer deg i fagorganisasjoner
- Bruk sosiale medier konstruktivt
- Snakk med politikere og beslutningstakere

**Viktig:** Vær saklig, bruk fakta, og respekter at andre kan ha andre syn.`,
    },
    {
      id: 'naturbruk-vg1-8-8-example-1',
      type: 'example',
      title: 'Eksempel: HMS-sak på gårdsbruket',
      content: `**Situasjon:**
Mari jobber på et melkebruk der gjødselkjelleren skal tømmes. Hun er bekymret fordi det ikke finnes gassmasker tilgjengelig, og hun vet at hydrogensulfid fra gjødselen kan være livsfarlig.

**Maris handlinger:**
1. Hun tar opp bekymringen med driftslederen
2. Driftslederen avfeier det: "Vi har alltid gjort det sånn"
3. Mari kontakter verneombudet på gården
4. Verneombudet tar saken videre til arbeidsgiver
5. Arbeidsgiver skaffer gassmasker og gassmåler
6. Det blir laget rutiner for sikker tømming

**Resultat:**
Mari brukte sin rett til å varsle om farlige forhold. Hun gikk tjenestevei og fikk støtte fra verneombudet. Dette førte til bedre sikkerhet for alle ansatte.

**Læringspunkt:**
- Du har rett til å si fra om farlige forhold
- Bruk verneombudet som ressurs
- Dokumenter alltid sikkerhetsbekymringer
- God HMS kommer alle til gode`,
    },
    {
      id: 'naturbruk-vg1-8-8-example-2',
      type: 'example',
      title: 'Eksempel: Deltakelse i samfunnsdebatten',
      content: `**Situasjon:**
Jonas er lærling i skogbruk. Han leser i avisen at kommunen vurderer å frede et skogområde der bedriften hans driver hogst. I kommentarfeltet er det mange som mener at all hogst er miljøødeleggende.

**Jonas' respons:**
Jonas skriver et saklig leserinnlegg der han:
1. Presenterer seg og sin bakgrunn
2. Forklarer hvordan bærekraftig skogbruk fungerer
3. Beskriver hvordan de planter nye trær etter hogst
4. Forteller om sertifiseringssystemer (PEFC, FSC)
5. Anerkjenner at vern også er viktig i noen områder
6. Inviterer til dialog og skogvandring

**Resultat:**
Innlegget skaper debatt, men tonen blir mer nyansert. Kommunen inviterer skogbruket til et møte. Jonas blir bedt om å holde et innlegg på et folkemøte.

**Læringspunkt:**
- Fagkunnskap er verdifull i samfunnsdebatten
- Vær saklig og respektfull
- Anerkjenn andres perspektiver
- Inviter til dialog fremfor konfrontasjon
- Du kan påvirke mer enn du tror`,
    },
    {
      id: 'naturbruk-vg1-8-8-tip-2',
      type: 'tip',
      title: 'Slik blir du en god kollega',
      content: `**Praktiske tips for arbeidsplassen:**

**Hver dag:**
- Si god morgen og hei hade
- Del informasjon som andre trenger
- Rydd etter deg
- Tilby hjelp når du ser behov

**Ved konflikter:**
- Tell til ti før du reagerer
- Snakk med personen, ikke om personen
- Fokuser på løsninger

**For karrieren:**
- Meld deg inn i fagforeningen
- Delta på kurs og opplæring
- Bygg nettverk i næringen
- Hold deg oppdatert på nyheter i bransjen

**Husk: Et godt rykte bygges over tid, men kan ødelegges raskt!**`,
    },

    // ========================================================================
    // OPPGAVER - Eksisterende
    // ========================================================================

    {
      id: 'naturbruk-vg1-8-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med det grønne skiftet?',
        solution: 'Det grønne skiftet er omstillingen til lavere utslipp og bærekraftig ressursbruk. For naturbruk: Fra fossilt til fornybart, fra avfall til ressurs.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan klimaendringer påvirker naturbruk.',
        solution: 'Lengre vekstsesong, nye skadegjørere og sykdommer, mer ekstremvær.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre teknologiske trender som vil påvirke naturbruk.',
        solution: 'Automatisering (roboter, autonome traktorer), kunstig intelligens, genteknologi, vertikal farming, cellekulturer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er bioøkonomi?',
        solution: 'Bioøkonomi er en økonomi basert på bærekraftig bruk av fornybare biologiske ressurser: matproduksjon, skogprodukter, marine ressurser, bioenergi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke kompetanser trenger fremtidens naturbruksarbeider?',
        solution: 'Fagkunnskap, digital kompetanse, bærekraftskompetanse, sosiale ferdigheter, evne til livslang læring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvordan kan du bidra til fremtidens naturbruk?',
        solution: 'Gjennom utdanning, delta i debatter, bidra til utvikling, dele kunnskap, være åpen for endringer og ny teknologi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========================================================================
    // NYE OPPGAVER - Arbeidsliv og samarbeid
    // ========================================================================

    {
      id: 'naturbruk-vg1-8-8-ex-7',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-8-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar hva arbeidsmiljøloven er og nevn tre rettigheter den gir arbeidstakere.',
        solution: 'Arbeidsmiljøloven er den viktigste loven som regulerer arbeidsforhold i Norge. Den gir arbeidstakere rettigheter som: trygge ansettelsesforhold, fullt forsvarlig arbeidsmiljø, vern mot diskriminering, rett til medvirkning, regulert arbeidstid, og stillingsvern ved oppsigelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-8-ex-8',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-8-ex-8',
        number: '8',
        type: 'classic',
        task: 'Hva er forskjellen på en tillitsvalgt og et verneombud (HMS-representant)?',
        solution: 'En tillitsvalgt er valgt av de fagorganiserte for å representere dem i lønns- og arbeidsvilkår, forhandle med arbeidsgiver, og bistå i personalsaker. Et verneombud (HMS-representant) er valgt for å ivareta arbeidstakernes interesser i saker som angår arbeidsmiljøet, påse sikker arbeidsutførelse, og varsle om farlige forhold. Tillitsvalgte jobber med avtaler og rettigheter, verneombudet jobber med sikkerhet og arbeidsmiljø.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-8-ex-9',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-8-ex-9',
        number: '9',
        type: 'classic',
        task: 'Beskriv de tre hovedpartene i arbeidslivet og hvordan de samarbeider.',
        solution: 'De tre hovedpartene er: 1) Arbeidstaker - utfører arbeidet og har rettigheter og plikter. 2) Arbeidsgiver - ansetter og har ansvar for arbeidsmiljø og lønn. 3) Fagforeninger - representerer arbeidstakerne og forhandler lønns- og arbeidsvilkår. Samarbeidet (trepartssamarbeidet) fungerer ved at partene forhandler tariffavtaler, løser konflikter gjennom dialog, og samarbeider om å utvikle arbeidslivet. Dette kalles den norske modellen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-8-ex-10',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-8-ex-10',
        number: '10',
        type: 'classic',
        task: 'Du oppdager at en kollega ikke bruker påbudt verneutstyr under sprøyting av plantevernmidler. Hvordan bør du håndtere denne situasjonen som en profesjonell yrkesutøver?',
        solution: 'Som profesjonell yrkesutøver bør du: 1) Snakke direkte med kollegaen på en respektfull måte og forklare farene. 2) Hvis kollegaen ikke endrer atferd, melde fra til nærmeste leder eller verneombud. 3) Dokumentere observasjonen. 4) Ikke selv delta i arbeid uten påbudt verneutstyr. Dette handler om å ta ansvar for både kollegaens sikkerhet og et trygt arbeidsmiljø for alle, samtidig som man går tjenestevei og håndterer situasjonen profesjonelt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.9: Presentasjon og markedsføring
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_9: TextbookChapter = {
  id: 'naturbruk-vg1-8-9',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.9',
  title: 'Presentasjon og markedsføring',
  description: 'Lær å presentere næringsaktiviteter, produkter og tjenester for ulike målgrupper.',
  estimatedMinutes: 55,
  competenceGoals: [
    'presentere næringsaktiviteter, produkter eller tjenester for ulike målgrupper',
    'velge hensiktsmessige kanaler og virkemidler for markedsføring',
  ],
  content: [
    {
      id: 'naturbruk-vg1-8-9-intro',
      type: 'text',
      content: `## Fra produksjon til kunde

Du kan dyrke de beste grønnsakene, produsere den fineste honningen eller tilby de mest spennende naturopplevelsene - men uten god presentasjon og markedsføring når du ikke frem til kundene. I naturbruk handler det ikke bare om å produsere, men også om å formidle verdien av det du tilbyr.

**I dette kapittelet lærer du:**
- Hvordan identifisere og tilpasse budskap til ulike målgrupper
- Effektive markedsføringskanaler for naturbruksprodukter
- Merkevarebygging og historiefortelling
- Muntlig presentasjon og formidlingskunst
- Praktiske verktøy for salg og kundebehandling

**God markedsføring handler om å bygge relasjoner og skape tillit - noe som er helt sentralt når du selger mat og naturopplevelser.**`,
    },
    {
      id: 'naturbruk-vg1-8-9-def-1',
      type: 'definition',
      title: 'Målgruppe',
      content: `En **målgruppe** er den gruppen mennesker du ønsker å nå med produktet eller tjenesten din.

**Eksempler på målgrupper i naturbruk:**
- Helsebevisste forbrukere (økologisk mat)
- Barnefamilier (gårdsbesøk, opplevelser)
- Restauranter og hoteller (lokale råvarer)
- Miljøbevisste turister (bærekraftig reiseliv)

**Hvorfor viktig?**
Ulike målgrupper har ulike behov, verdier og kommunikasjonskanaler. Ved å kjenne målgruppen kan du tilpasse budskap og valg av kanal.`,
    },
    {
      id: 'naturbruk-vg1-8-9-def-2',
      type: 'definition',
      title: 'Merkevare',
      content: `En **merkevare** (brand) er summen av alle assosiasjoner, følelser og forventninger folk har til et produkt, en bedrift eller en person.

**Merkevare i naturbruk:**
- Gårdens navn og logo
- Visuell profil (farger, design)
- Historie og verdier
- Kvalitet og konsistens
- Kundeopplevelsen

**En sterk merkevare gjør at kundene velger deg - og er villige til å betale mer.**`,
    },
    {
      id: 'naturbruk-vg1-8-9-def-3',
      type: 'definition',
      title: 'Markedsføring',
      content: `**Markedsføring** er alle aktiviteter som gjør at kunder blir oppmerksomme på, interessert i og kjøper produktene eller tjenestene dine.

**De fire P-ene:**
- **Produkt:** Hva tilbyr du?
- **Pris:** Hva koster det?
- **Plass:** Hvor selger du?
- **Promotering:** Hvordan kommuniserer du?

**I naturbruk legger vi ofte til en femte P:**
- **People (mennesker):** Hvem står bak? Historien og ansiktene.`,
    },
    {
      id: 'naturbruk-vg1-8-9-def-4',
      type: 'definition',
      title: 'Salgskanaler',
      content: `**Salgskanaler** er de stedene og måtene du når ut til kundene på.

**Direkte salgskanaler:**
- Gårdsbutikk og gårdsutsalg
- Bondens marked
- REKO-ringer
- Nettbutikk med hjemlevering

**Indirekte salgskanaler:**
- Matbutikker og delikatesseforretninger
- Restauranter og cateringselskaper
- Hoteller og reiselivsbedrifter
- Grossister

**Fordeler med direkte salg:** Høyere pris, direkte kundekontakt, kontroll over merkevare
**Fordeler med indirekte salg:** Større volum, bredere distribusjon, mindre arbeid med salg`,
    },
    {
      id: 'naturbruk-vg1-8-9-text-1',
      type: 'text',
      content: `## Profesjonell produktpresentasjon

Hvordan du presenterer produktene dine påvirker direkte hvordan kundene oppfatter kvalitet og verdi.

**Visuell presentasjon**

**Emballasje og merking:**
- Tydelig og lesbar informasjon
- Attraktivt design som reflekterer kvalitet
- Lovpålagt merking (ingredienser, allergener, holdbarhet)
- Historien bak produktet på etiketten

**Utstilling og eksponering:**
- Ryddige og innbydende displays
- Riktig temperatur og oppbevaring
- Prøvesmaking når mulig
- Informasjonsskilt med produktinformasjon

**Fotografering:**
- Gode produktbilder til nett og sosiale medier
- Naturlig lys gir best resultat
- Vis produktet i bruk (mat på tallerken, dyr i naturlige omgivelser)
- Autentiske bilder fra gården bygger tillit

**Skriftlig presentasjon**

**Produktbeskrivelser:**
- Fremhev det unike: lokal, økologisk, håndlaget
- Bruk sanselige ord: smak, duft, tekstur
- Fortell historien kort og engasjerende
- Inkluder brukstips og oppskrifter`,
    },
    {
      id: 'naturbruk-vg1-8-9-text-2',
      type: 'text',
      content: `## Markedsføringskanaler for naturbruk

**Sosiale medier**

**Facebook:**
- Bygge fellesskap og lojalitet
- Dele nyheter, arrangementer, produkter
- God for å nå voksne målgrupper
- Facebook-grupper for lokalmat

**Instagram:**
- Visuell plattform - perfekt for mat og natur
- Stories for daglig oppdatering
- Reels for korte videoer
- Hashtags for å nå nye følgere (#lokalmat, #bondensprodukter)

**TikTok:**
- Unge målgrupper
- Autentisk og uformelt innhold
- Vis hverdagen på gården
- Kan gå viralt raskt

**REKO-ring**

REKO (Rejäl Konsumtion) er et system for direktesalg fra produsent til forbruker via Facebook.

**Slik fungerer det:**
1. Produsenter legger ut varer i en lokal Facebook-gruppe
2. Kunder bestiller i kommentarfeltet
3. Utlevering skjer på et fast sted til fast tid
4. Betaling ved henting

**Fordeler:**
- Ingen mellommann - hele prisen til produsenten
- Direkte kundekontakt
- Fleksibelt - selg det du har tilgjengelig
- Bygger lokalsamfunn

**Bondens marked**

Fysisk markedsplass for direktesalg:
- Fast plass og tidspunkt
- Møte kundene ansikt til ansikt
- Prøvesmaking og demonstrasjon
- Nettverksbygging med andre produsenter`,
    },
    {
      id: 'naturbruk-vg1-8-9-text-3',
      type: 'text',
      content: `## Merkevarebygging for naturbruksprodukter

**Historiefortelling (storytelling)**

Kundene kjøper ikke bare et produkt - de kjøper en historie. I naturbruk har du unike historier å fortelle.

**Elementer i en god historie:**
- **Mennesker:** Hvem står bak? Familie, tradisjon, lidenskap
- **Sted:** Hvor kommer produktet fra? Landskap, klima, natur
- **Prosess:** Hvordan lages det? Håndverk, omsorg, tid
- **Verdier:** Hvorfor gjør du dette? Bærekraft, kvalitet, dyrevelferd

**Eksempel på historiefortelling:**
*«På Solbakken gård har vi dyrket jordbær i tre generasjoner. Her, i den solfylte lia over fjorden, modner bærene sakte i den lange sommerdagen. Vi plukker for hånd når smaken er på topp - aldri før.»*

**Visuell identitet**

**Logo og navn:**
- Enkelt og minneverdig
- Reflekterer verdier og produkt
- Fungerer i alle størrelser og formater

**Farger og fonter:**
- Konsistent bruk bygger gjenkjennelse
- Naturlige farger passer ofte naturbruk
- Lesbare fonter for all informasjon

**Kvalitetsstempler og sertifiseringer**

- Debio-merket (økologisk)
- Nyt Norge
- Spesialitet-merket
- Beskyttede betegnelser (f.eks. Hardangereple)

**Disse merkene signaliserer kvalitet og gjør det enklere for kunden å velge.**`,
    },
    {
      id: 'naturbruk-vg1-8-9-text-4',
      type: 'text',
      content: `## Muntlig presentasjon og formidling

Enten du står på Bondens marked, holder foredrag for en skoleklasse eller presenterer for en potensiell storkunde - god muntlig formidling er avgjørende.

**Forberedelse**

**Kjenn publikum:**
- Hvem skal du snakke til?
- Hva vet de fra før?
- Hva er de interessert i?
- Hva ønsker du at de skal gjøre etterpå?

**Strukturer innholdet:**
- Innledning: Fang oppmerksomheten
- Hoveddel: 2-3 hovedpunkter
- Avslutning: Oppsummer og gi en tydelig call-to-action

**Gjennomføring**

**Kroppsspråk:**
- Stå stødig og åpent
- Ha øyekontakt
- Bruk hendene naturlig
- Smil og vær engasjert

**Stemmebruk:**
- Snakk tydelig og ikke for fort
- Varier tempo og styrke
- Bruk pauser for effekt

**Hjelpemidler:**
- Vis frem produkter
- Bruk bilder og video
- La folk smake, lukte, ta på
- Enkle plakater eller presentasjoner

**Håndtering av spørsmål**

- Lytt ferdig før du svarer
- Svar ærlig - innrøm hvis du ikke vet
- Se spørsmål som mulighet, ikke trussel
- Takk for gode spørsmål`,
    },
    {
      id: 'naturbruk-vg1-8-9-tip-1',
      type: 'tip',
      title: 'Tips for vellykket markedsføring',
      content: `**Vær konsistent:**
Post regelmessig på sosiale medier. Ha alltid samme kvalitet og stil.

**Vær autentisk:**
Vis hverdagen - også det som ikke er perfekt. Kundene setter pris på ekthet.

**Engasjer følgerne:**
Still spørsmål, svar på kommentarer, del kundehistorier.

**Mål resultatene:**
Hold oversikt over hva som fungerer. Hvilke innlegg får mest respons?

**Start enkelt:**
Du trenger ikke være overalt. Velg én eller to kanaler og gjør dem godt.

**Husk: Den beste markedsføringen er et godt produkt og en fornøyd kunde som anbefaler deg videre!**`,
    },
    {
      id: 'naturbruk-vg1-8-9-example-1',
      type: 'example',
      title: 'Eksempel: Markedsføring av lokalmat',
      problem: 'Kari driver en liten gård med geiter og produserer geiteost. Hun selger i dag kun til venner og familie, men ønsker å nå flere kunder. Hvordan kan hun bygge opp markedsføringen?',
      solution: `**Situasjonsanalyse:**
- Liten produksjon (50-100 kg ost/måned)
- Høykvalitetsprodukt med unik smak
- Begrenset tid og budsjett til markedsføring
- Beliggenhet: Bygd med turisttrafikk om sommeren

**Anbefalt strategi:**

**Steg 1: Definer målgruppen**
- Primær: Matinteresserte i nærområdet
- Sekundær: Turister som besøker regionen
- Tertiær: Lokale restauranter

**Steg 2: Velg salgskanaler**
- REKO-ring i nærmeste by (ukentlig)
- Gårdsutsalg med selvbetjening (hele året)
- Bondens marked (sommeren)

**Steg 3: Bygg merkevare**
- Navn: «Geitosten fra Fjellbakken»
- Enkel logo med geit og fjell
- Håndskrevet etiketter med historie

**Steg 4: Sosiale medier**
- Instagram-konto med bilder av geitene og osteproduksjonen
- 2-3 innlegg per uke
- Vis prosessen fra melking til ferdig ost

**Steg 5: Bygg relasjoner**
- Inviter matbloggere til gårdsbesøk
- Kontakt lokale restauranter med smaksprøver
- Delta på lokale matfestivaler

**Resultat:** Etter ett år har Kari fast kundegrunnlag gjennom REKO, avtale med to restauranter, og en voksende Instagram-følgerskare som skaper etterspørsel.`,
    },
    {
      id: 'naturbruk-vg1-8-9-example-2',
      type: 'example',
      title: 'Eksempel: Presentasjon på Bondens marked',
      problem: 'Ole skal for første gang selge honning på Bondens marked. Han har 50 glass med ulike typer honning. Hvordan bør han forberede seg og presentere produktene?',
      solution: `**Forberedelse før markedsdagen:**

**Produkter:**
- 50 glass honning (lyngong, blomsterhonning, kremet honning)
- Tydelig merking med type, vekt, pris
- Smaksprøver i små kopper med trepinner
- Informasjonsark om biene og produksjonen

**Utstyr:**
- Bord med duk i naturfarger
- Skilt med gårdens navn og logo
- Prisliste som er lett å lese
- Vekslepenger og Vipps-skilt
- Poser til kundene

**Visuelt:**
- Vakre glass i ulike størrelser
- Et par tomme bikuber eller rammer som blikkfang
- Bilder av biene og bigården
- Eventuelt en liten plante med blomster

**Gjennomføring på markedsdagen:**

**Oppstilling:**
- Plasser smaksprøver fremst - tiltrekker folk
- Varier høyde på produktene
- Ha informasjon lett tilgjengelig

**Kundebehandling:**
- Smil og hils velkommen
- Tilby smaksprøve aktivt
- Fortell kort om honnningen: «Denne lynghonnningen er fra fjellet i august»
- Svar på spørsmål tålmodig
- Gi tips: «Denne passer perfekt til ost»

**Salgssamtale:**
- Ikke vær for pågående
- La kunden smake først
- Fremhev det unike: «Biene våre flyr i urørt natur»
- Foreslå mengde: «To glass gir rabatt»

**Etter markedet:**
- Rydd og pakk forsiktig
- Oppsummer: Hva solgte best? Hva spurte folk om?
- Planlegg forbedringer til neste gang

**Tips:** Ta med visittkort eller flyer slik at interesserte kan følge deg på sosiale medier eller bestille senere.`,
    },
    {
      id: 'naturbruk-vg1-8-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med en målgruppe, og hvorfor er det viktig å definere målgruppen for markedsføring?',
        solution: 'En målgruppe er den gruppen mennesker du ønsker å nå med produktet eller tjenesten din. Det er viktig å definere målgruppen fordi ulike grupper har ulike behov, verdier og kommunikasjonskanaler. Ved å kjenne målgruppen kan du tilpasse budskap, pris og valg av salgskanal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-9-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er REKO-ring?',
        options: [
          { id: 'a', text: 'En type sertifisering for økologisk mat', isCorrect: false },
          { id: 'b', text: 'Et system for direktesalg fra produsent til forbruker via Facebook', isCorrect: true },
          { id: 'c', text: 'En grossist for lokale matvarer', isCorrect: false },
          { id: 'd', text: 'En app for å spore matvarers opprinnelse', isCorrect: false },
        ],
        solution: 'REKO-ring (Rejäl Konsumtion) er et system for direktesalg fra produsent til forbruker via Facebook-grupper. Kunder bestiller i kommentarfelt, og utlevering skjer på fast sted og tid.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-8-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva som menes med merkevarebygging og historiefortelling (storytelling) i markedsføring.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en merkevare?',
            solution: 'En merkevare er summen av alle assosiasjoner, følelser og forventninger folk har til et produkt, en bedrift eller en person.',
          },
          {
            label: 'b',
            task: 'Nevn fire elementer som bør være med i en god historie om et naturbruksprodukt.',
            solution: 'Mennesker (hvem står bak), sted (hvor kommer produktet fra), prosess (hvordan lages det), og verdier (hvorfor gjør du dette).',
          },
        ],
        solution: 'Merkevarebygging handler om å skape gjenkjennelse og positive assosiasjoner. Historiefortelling er et viktig verktøy der man forteller om mennesker, sted, prosess og verdier for å skape emosjonell tilknytning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-9-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken sosial medieplattform er mest visuell og passer derfor ofte godt for mat- og naturprodukter?',
        options: [
          { id: 'a', text: 'LinkedIn', isCorrect: false },
          { id: 'b', text: 'Twitter/X', isCorrect: false },
          { id: 'c', text: 'Instagram', isCorrect: true },
          { id: 'd', text: 'Snapchat', isCorrect: false },
        ],
        solution: 'Instagram er en visuell plattform som passer godt for mat- og naturprodukter fordi den fokuserer på bilder og video. Stories og Reels gir mulighet for daglige oppdateringer.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'naturbruk-vg1-8-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Du skal holde en kort presentasjon om et naturbruksprodukt for en gruppe ungdomsskoleelever.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bør du tenke på når det gjelder å tilpasse presentasjonen til denne målgruppen?',
            solution: 'Bruk enkelt språk, gjør det engasjerende og interaktivt, vis frem produkter, la dem smake/ta på, bruk humor, hold det kort og konkret.',
          },
          {
            label: 'b',
            task: 'Lag en enkel struktur for presentasjonen (innledning, hoveddel, avslutning).',
            solution: 'Innledning: Start med noe overraskende eller en smaksprøve. Hoveddel: Fortell hvem du er, vis produktet, forklar hvordan det lages. Avslutning: Oppsummer og inviter til spørsmål.',
          },
        ],
        solution: 'En god presentasjon tilpasses målgruppen gjennom språk, innhold og virkemidler, og har en tydelig struktur med innledning, hoveddel og avslutning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg et naturbruksprodukt (f.eks. egg, honning, grønnsaker, ved, eller en opplevelse som gårdsbesøk) og lag en markedsføringsplan.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv produktet og definer målgruppen.',
            solution: 'Eksempel: Økologiske egg fra frittgående høner. Målgruppe: Helsebevisste familier i nærområdet som ønsker mat av høy kvalitet.',
          },
          {
            label: 'b',
            task: 'Velg to salgskanaler og begrunn valget.',
            solution: 'Eksempel: REKO-ring (når kundene direkte, fast bestilling) og gårdsutsalg (turisttrafikk om sommeren, bygger merkevare).',
          },
          {
            label: 'c',
            task: 'Skriv en kort produkttekst som kan brukes på sosiale medier eller etikett.',
            solution: 'Eksempel: «Våre høner lever fritt på gården og spiser gress, insekter og økologisk korn. Det smaker du på de gylne plommene! Friske egg fra Solbakken - hver dag.»',
          },
        ],
        solution: 'En markedsføringsplan inneholder produktbeskrivelse, definert målgruppe, valg av salgskanaler med begrunnelse, og kommunikasjonsmateriell tilpasset kanalen.',
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

export const NATURBRUK_VG1_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NATURBRUK_VG1_7_1,
  CHAPTER_NATURBRUK_VG1_7_2,
  CHAPTER_NATURBRUK_VG1_7_3,
  CHAPTER_NATURBRUK_VG1_7_4,
  CHAPTER_NATURBRUK_VG1_7_5,
  CHAPTER_NATURBRUK_VG1_7_6,
  CHAPTER_NATURBRUK_VG1_8_1,
  CHAPTER_NATURBRUK_VG1_8_2,
  CHAPTER_NATURBRUK_VG1_8_3,
  CHAPTER_NATURBRUK_VG1_8_4,
  CHAPTER_NATURBRUK_VG1_8_5,
  CHAPTER_NATURBRUK_VG1_8_6,
  CHAPTER_NATURBRUK_VG1_8_7,
  CHAPTER_NATURBRUK_VG1_8_8,
  CHAPTER_NATURBRUK_VG1_8_9,
];
