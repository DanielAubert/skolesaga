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
// KAPITTEL 8.4: Økonomi og verdikjeder
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_4: TextbookChapter = {
  id: 'naturbruk-vg1-8-4',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.4',
  title: 'Økonomi og verdikjeder',
  description: 'Lær om økonomi i naturbruk og hvordan verdikjedene fungerer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå grunnleggende økonomiske begreper',
    'forklare verdikjeder i naturbruksnæringene',
  ],
  content: [
    {
      id: 'naturbruk-vg1-8-4-intro',
      type: 'text',
      content: `## Økonomi - grunnlaget for drift

For å drive naturbruk må du forstå økonomi. Å forstå hvordan verdiene skapes og fordeles i verdikjeden er viktig kunnskap for alle i næringen.

**I dette kapittelet lærer du:**
- Grunnleggende økonomiske begreper
- Hvordan regne lønnsomhet
- Hva verdikjeder er
- Hvordan verdiene fordeles
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
**Likviditet:** Evne til å betale regninger`,
    },
    {
      id: 'naturbruk-vg1-8-4-text-1',
      type: 'text',
      content: `## Inntekter og utgifter

**Salgsinntekter:**
- Salg av produkter (melk, kjøtt, korn, tømmer)
- Salg av tjenester

**Tilskudd fra staten:**
- Produksjonstilskudd
- Arealtilskudd
- Distriktstilskudd
- I norsk landbruk utgjør tilskudd 30-50% av inntektene

**Variable kostnader:**
- Fôr, såfrø, gjødsel, drivstoff

**Faste kostnader:**
- Forsikring, renter, vedlikehold, avskrivninger`,
    },
    {
      id: 'naturbruk-vg1-8-4-def-2',
      type: 'definition',
      title: 'Verdikjede',
      content: `En **verdikjede** viser alle leddene en vare går gjennom fra råvare til ferdig produkt.

**Typisk for mat:**
1. Primærprodusent (bonde)
2. Foredling (meieri, slakteri)
3. Grossist/distribusjon
4. Detaljist (butikk)
5. Forbruker

**I hvert ledd tilføres verdi - og kostnader.**`,
    },
    {
      id: 'naturbruk-vg1-8-4-tip-1',
      type: 'tip',
      title: 'Dekningsbidrag',
      content: `**Dekningsbidrag = Inntekter - Variable kostnader**

Eksempel per ku:
- Inntekt: 80 000 kr
- Variable kostnader: 35 000 kr
- **Dekningsbidrag: 45 000 kr**

Dette skal dekke faste kostnader og gi fortjeneste.`,
    },
    {
      id: 'naturbruk-vg1-8-4-def-3',
      type: 'definition',
      title: 'Samvirke',
      content: `Et **samvirke** er en organisasjon eid og styrt av medlemmene.

**Eksempler:** TINE, Nortura, Felleskjøpet

**Prinsipper:** Medlemmene eier sammen, én stemme per medlem, overskudd tilbake til medlemmene.`,
    },
    {
      id: 'naturbruk-vg1-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom variable og faste kostnader.',
        solution: 'Variable kostnader endrer seg med produksjon (fôr, gjødsel). Faste kostnader er like uansett produksjon (forsikring, renter).',
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
        task: 'Hva er en verdikjede? Beskriv verdikjeden for melk.',
        solution: 'En verdikjede viser alle ledd fra råvare til produkt. Melk: Bonde - Meieri - Grossist - Butikk - Forbruker.',
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
        solution: 'Tilskudd utgjør 30-50% av inntektene og er nødvendig pga. høyere kostnader i Norge. De sikrer matsikkerhet og bosetting i distriktene.',
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
        task: 'Hva er dekningsbidrag?',
        solution: 'Dekningsbidrag = Inntekter minus variable kostnader. Det viser hvor mye som er igjen til faste kostnader og fortjeneste.',
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
        task: 'Hvordan kan en bonde forkorte verdikjeden?',
        solution: 'Gjennom direktesalg: gårdsbutikk, REKO-ringer, bondens marked. Dette gir høyere pris til produsenten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5: Lokal matproduksjon og kortreist mat
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_5: TextbookChapter = {
  id: 'naturbruk-vg1-8-5',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.5',
  title: 'Lokal matproduksjon og kortreist mat',
  description: 'Lær om trenden mot lokal mat og mulighetene for lokalmatprodusenter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare betydningen av lokal matproduksjon',
    'vurdere muligheter innen lokalmat',
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
- Regelverk og merkeordninger`,
    },
    {
      id: 'naturbruk-vg1-8-5-def-1',
      type: 'definition',
      title: 'Lokalmat',
      content: `**Lokalmat** er mat som produseres, foredles og selges innenfor et avgrenset geografisk område, med tett kobling mellom produsent og forbruker.

**Kjennetegn:**
- Kort avstand produsent-forbruker
- Ofte småskala
- Sporbarhet og åpenhet
- Tradisjonelle eller særegne produkter`,
    },
    {
      id: 'naturbruk-vg1-8-5-text-1',
      type: 'text',
      content: `## Hvorfor velger folk lokalmat?

**Kvalitet og smak:**
- Håndverksmessig produsert
- Ferske råvarer

**Miljøhensyn:**
- Kortere transport
- Støtter bærekraftig drift

**Tillit:**
- Vet hvem som har laget maten
- Kan besøke gården

**Økonomi:**
- Støtter lokale arbeidsplasser
- Pengene blir i lokalsamfunnet`,
    },
    {
      id: 'naturbruk-vg1-8-5-def-2',
      type: 'definition',
      title: 'REKO-ringer',
      content: `**REKO-ringer** er Facebook-baserte grupper der produsenter legger ut tilbud og forbrukere bestiller. Handelen skjer på et avtalt møtested uten mellomledd.

Over 100 REKO-ringer finnes i Norge.`,
    },
    {
      id: 'naturbruk-vg1-8-5-text-2',
      type: 'text',
      content: `## Salgskanaler

**REKO-ringer:** Facebook-bestilling, direkte handel
**Bondens marked:** Ukentlig marked i byer
**Gårdsbutikk:** Salg direkte fra gården
**Spesialbutikker:** Nisjebutikker for lokalmat
**Abonnementsordninger:** Grønnsakskasser ukentlig
**Nettbutikk:** Egen eller felles plattform`,
    },
    {
      id: 'naturbruk-vg1-8-5-tip-1',
      type: 'tip',
      title: 'Suksessfaktorer',
      content: `**Produktet:** Høy kvalitet, noe unikt
**Fortellingen:** Hvem er du? Hvorfor gjør du dette?
**Kundekontakt:** Vær tilgjengelig, lytt
**Markedsføring:** Sosiale medier, arrangementer
**Økonomi:** Start smått, voks gradvis`,
    },
    {
      id: 'naturbruk-vg1-8-5-def-3',
      type: 'definition',
      title: 'Beskyttede betegnelser',
      content: `**Beskyttede betegnelser** beskytter produkter med spesiell tilknytning.

**Eksempler:** Hardangerepler, Lofotlam, Rakfisk fra Valdres

Stiftelsen Norsk Mat arbeider for å fremme norske matspesialiteter.`,
    },
    {
      id: 'naturbruk-vg1-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner lokalmat?',
        solution: 'Kort avstand produsent-forbruker, ofte småskala, sporbarhet og åpenhet, tradisjonelle eller særegne produkter.',
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
        solution: 'Kvalitet og smak, miljøhensyn, tillit og sporbarhet, støtte lokale arbeidsplasser, opplevelse og mat med historie.',
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
        task: 'Hva er REKO-ringer?',
        solution: 'REKO-ringer er Facebook-baserte grupper der produsenter legger ut tilbud og forbrukere bestiller. Handelen skjer på avtalt møtested uten mellomledd.',
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
        task: 'Nevn fire salgskanaler for lokalmat.',
        solution: 'REKO-ringer, bondens marked, gårdsbutikk, spesialbutikker, abonnementsordninger, nettbutikk.',
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
        task: 'Hva er viktig for å lykkes som lokalmatprodusent?',
        solution: 'Høy kvalitet, god fortelling om produktet, god kundekontakt, aktiv markedsføring, god økonomistyring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.6: Digitale verktøy i naturbruk
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8_6: TextbookChapter = {
  id: 'naturbruk-vg1-8-6',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8.6',
  title: 'Digitale verktøy i naturbruk',
  description: 'Lær om hvordan digitale verktøy brukes i moderne naturbruk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive digitale verktøy som brukes i naturbruk',
    'vurdere fordeler og utfordringer med digitalisering',
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
- Sensorer og overvåking`,
    },
    {
      id: 'naturbruk-vg1-8-6-def-1',
      type: 'definition',
      title: 'Presisjonslandbruk',
      content: `**Presisjonslandbruk** er bruk av teknologi for å tilpasse innsatsfaktorene til det faktiske behovet i hver del av et jorde.

**Mål:** Riktig mengde på riktig sted til riktig tid - bedre økonomi og miljø.`,
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
      id: 'naturbruk-vg1-8-6-def-3',
      type: 'definition',
      title: 'Kunstig intelligens',
      content: `**Kunstig intelligens (AI)** er datasystemer som kan lære og ta beslutninger.

**I naturbruk:** Bildegjenkjenning (ugress, sykdom), prediktiv vedlikehold, optimalisering av fôring.`,
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
  description: 'Lær om trender, utfordringer og muligheter for naturbruk i fremtiden.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over fremtidige utfordringer og muligheter',
    'vurdere naturbrukets rolle i det grønne skiftet',
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
- Din rolle i fremtidens naturbruk`,
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
];
