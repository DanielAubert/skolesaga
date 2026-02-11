/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 3 VG3 - Del 6: Teknologi i trening
 *
 * Seksjon 6: Teknologi i trening (5 delkapitler)
 * Dekker LK20-kompetansemål for treningslære 3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Pulsovervåking og treningssoner
// ============================================================================

export const CHAPTER_TRENING_3_6_1: TextbookChapter = {
  id: 'trening-3-6-1',
  courseId: 'trening-3',
  chapterNumber: '6.1',
  title: 'Pulsovervåking og treningssoner',
  description: 'Lær om pulsklokker, hjertefrekvensvariabilitet (HRV) og hvordan treningssoner brukes for å styre intensitet i trening.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for bruk av teknologiske hjelpemidler i trening',
    'forklare hvordan pulsovervåking kan brukes til å styre treningsintensitet',
    'drøfte fordeler og begrensninger ved pulsbasert treningsstyring',
  ],
  content: [
    {
      id: 'tr3-6-1-intro',
      type: 'text',
      content: `# Pulsovervåking og treningssoner

Hjertefrekvens er en av de mest brukte fysiologiske parameterne i treningssammenheng. Ved hjelp av moderne pulsklokker og brystbelter kan utovere overvåke pulsen i sanntid og styre treningsintensiteten presist. I dette kapittelet ser vi på hvordan pulsovervåking fungerer, hva hjertefrekvensvariabilitet (HRV) kan fortelle oss om restitusjon, og hvordan treningssoner brukes for å optimalisere treningseffekten.

Pulsovervåking har blitt tilgjengelig for alle, fra mosjonister til toppidrettsutovere. Med riktig bruk kan denne teknologien bidra til bedre treningsplanlegging, mer presis intensitetsstyring og redusert risiko for overtrening.`
    },
    {
      id: 'tr3-6-1-def-hjertefrekvens',
      type: 'definition',
      title: 'Hjertefrekvens (puls)',
      content: 'Hjertefrekvens er antall ganger hjertet slår per minutt (slag/min). Hvilepulsen ligger typisk mellom 50 og 80 slag/min hos friske voksne, mens maksimal hjertefrekvens avtar med alderen. Hjertefrekvensen oker med treningsintensiteten og er derfor en god indikator på hvor hardt kroppen jobber.'
    },
    {
      id: 'tr3-6-1-malemetoder',
      type: 'text',
      content: `## Målemetoder for puls

**Brystbelte:**
- Måler elektriske signaler fra hjertet (EKG-lignende)
- Gir svært noyaktige målinger
- Festet rundt brystkassen med kontaktpunkter mot huden
- Regnes som gullstandard for pulsovervåking under trening
- Kan oppleves som ubehagelig for noen utovere

**Optisk pulsmåling (håndledd):**
- Bruker lysdioder (LED) som lyser gjennom huden
- Måler endringer i blodgjennomstromning
- Enklere i bruk, integrert i klokken
- Mindre noyaktig ved hoy intensitet og raske bevegelser
- Kan påvirkes av hudfarge, tatoveringer og plassering på håndleddet

**Fingerklips og orelapp:**
- Brukes mest i kliniske sammenhenger
- Måler pulsoksymetri (oksygenmetning og puls)
- Lite praktisk under fysisk aktivitet

Kvaliteten på pulsmålingen avhenger av utstyr, plassering og treningsform. For presise målinger ved intervalltrening anbefales brystbelte, mens optisk måling fungerer godt ved roligere aktiviteter.`
    },
    {
      id: 'tr3-6-1-def-hrv',
      type: 'definition',
      title: 'Hjertefrekvensvariabilitet (HRV)',
      content: 'HRV er variasjonen i tidsintervallet mellom hvert hjerteslag. Hoy HRV indikerer god balanse mellom det sympatiske og parasympatiske nervesystemet og er forbundet med god restitusjonsevne og treningsberedskap. Lav HRV kan tyde på stress, tretthet eller utilstrekkelig restitusjon. HRV måles vanligvis om morgenen i hvile og brukes som et verktoy for å vurdere kroppens tilstand.'
    },
    {
      id: 'tr3-6-1-hrv-tekst',
      type: 'text',
      content: `## Hjertefrekvensvariabilitet i praksis

HRV-målinger har blitt stadig mer populære blant idrettsutovere. Ved å måle HRV regelmessig kan utoveren bygge opp en baseline og oppdage avvik som kan indikere at kroppen trenger mer hvile.

**Slik brukes HRV:**
- Mål HRV om morgenen for du står opp, i en avslappet posisjon
- Bruk samme utstyr og protokoll hver gang for konsistente data
- Se på trender over tid, ikke enkeltmålinger
- Kombiner med subjektive mål som sovnkvalitet og opplevd tretthet

**Faktorer som påvirker HRV:**
- Treningsbelastning de siste dagene
- Sovnkvalitet og varighet
- Psykologisk stress
- Alkohol og koffeininntak
- Sykdom og infeksjon
- Hydreringsstatus

HRV er et nyttig supplement til tradisjonell treningsplanlegging, men bor ikke brukes som eneste styringsverktoy. Utoverens egne opplevelser og trenerens erfaring er fortsatt viktige.`
    },
    {
      id: 'tr3-6-1-example-hrv',
      type: 'example',
      title: 'Eksempel: Bruk av HRV i treningsplanlegging',
      problem: 'En langrennsutover måler HRV hver morgen i tre uker. De to forste ukene ligger HRV-verdiene stabilt rundt 65 ms. I starten av tredje uke synker verdiene til 45 ms flere dager på rad, samtidig som utoveren rapporterer darlig sovn. Hvordan bor treneren justere treningen?',
      solution: `**Vurdering:**
1. Et vedvarende fall i HRV (fra 65 til 45 ms) over flere dager er et tydelig signal om akkumulert tretthet
2. Den dårlige sovnkvaliteten forsterker bildet av utilstrekkelig restitusjon
3. Treneren bor ikke ignorere disse signalene

**Tiltak:**
- Reduser treningsintensiteten de neste 2-3 dagene
- Erstatt planlagte intervallokter med rolig utholdenhetsaktivitet
- Legg inn en ekstra hviledag
- Fokuser på sovnhygiene og restitusjonsstiltak
- Overvåk HRV daglig for å se når verdiene normaliseres
- Gjenoppta normal trening først når HRV er tilbake på baseline

Dette eksempelet viser hvordan HRV kan fungere som et tidlig varslingssystem for overtrening.`
    },
    {
      id: 'tr3-6-1-treningssoner',
      type: 'text',
      content: `## Treningssoner basert på hjertefrekvens

Treningssoner deler inn intensitetsskalaen i definerte områder basert på prosent av maksimal hjertefrekvens (HFmaks) eller hjertefrekvenssreserve (HFR). De mest brukte modellene opererer med fem soner:

**Sone 1 - Lav intensitet (50-60 % av HFmaks):**
- Lett aktivitet, oppvarming og nedjogging
- Bedrer grunnleggende fettforbrenning
- Restitusjonsfremmende

**Sone 2 - Moderat intensitet (60-70 % av HFmaks):**
- Rolig langkjoring
- Bygger aerob grunnkapasitet
- Hoveddelen av utholdenhetsutoveres treningstid

**Sone 3 - Terskelområdet (70-80 % av HFmaks):**
- Rundt anaerob terskel
- Forbedrer evnen til å holde hoyt tempo over tid
- Typisk tempokjoring

**Sone 4 - Hoy intensitet (80-90 % av HFmaks):**
- Intervalltrening med relativt lange drag
- Oker maksimalt oksygenopptak (VO2maks)
- Krevende trening med begrenset varighet

**Sone 5 - Maksimal intensitet (90-100 % av HFmaks):**
- Korte, maksimale intervaller
- Utvikler anaerob kapasitet og sprintevne
- Kun korte perioder om gangen

Inndelingen i treningssoner gir utoveren et praktisk rammeverk for å styre intensiteten, men det er viktig å huske at sonegrensene er individuelle. Laktatmålinger og VO2maks-tester gir mer presise soneverdier enn generelle prosentberegninger.`
    },
    {
      id: 'tr3-6-1-def-hfr',
      type: 'definition',
      title: 'Hjertefrekvenssreserve (HFR)',
      content: 'Hjertefrekvenssreserve beregnes som differansen mellom maksimal hjertefrekvens og hvilepuls: HFR = HFmaks - HFhvile. Treningssoner basert på HFR (Karvonen-metoden) gir en mer individuell sonetilpasning enn prosent av HFmaks alene, fordi den tar hensyn til utoverens treningsstatus gjennom hvilepulsen.'
    },
    {
      id: 'tr3-6-1-begrensninger',
      type: 'text',
      content: `## Begrensninger ved pulsbasert treningsstyring

Selv om pulsovervåking er et verdifullt verktoy, har metoden klare begrensninger:

**Forsinkelse i pulsrespons:**
- Pulsen bruker tid på å stige i starten av et intervall
- Ved korte intervaller (under 30 sekunder) rekker ikke pulsen å gjenspeile den reelle intensiteten
- Nedjogging viser fortsatt hoy puls en stund etter at arbeidet er avsluttet

**Individuelle forskjeller:**
- Maksimal hjertefrekvens varierer betydelig mellom individer, uavhengig av treningsstatus
- Formler som 220 minus alder gir kun grove estimater
- Medikamenter (f.eks. betablokkere) påvirker pulsresponsen

**Ytre påvirkningsfaktorer:**
- Varme og dehydrering oker pulsen uten at belastningen endres (kardiovaskulær drift)
- Hoyde over havet påvirker pulsresponsen
- Koffein, stress og sovnmangel kan oke hvilepulsen

For best mulig nytte bor pulsdata alltid tolkes i sammenheng med andre mål på intensitet, som opplevd anstrengelse (Borgs skala) og laktatverdier.`
    },
    {
      id: 'tr3-6-1-exercise-block',
      type: 'exercise',
      exercise: {
        id: 'tr3-6-1-ex1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva indikerer hoy hjertefrekvensvariabilitet (HRV)?',
        options: [
          { id: 'a', text: 'God restitusjon og treningsberedskap', isCorrect: true },
          { id: 'b', text: 'Overtreningssyndrom', isCorrect: false },
          { id: 'c', text: 'For lav treningsbelastning', isCorrect: false },
          { id: 'd', text: 'Dehydrering', isCorrect: false },
        ],
        solution: 'Hoy HRV tyder på god balanse mellom det sympatiske og parasympatiske nervesystemet, noe som indikerer at kroppen er godt restituert og klar for ny treningsbelastning.',
      }
    },
    {
      id: 'tr3-6-1-exercise-block2',
      type: 'exercise',
      exercise: {
        id: 'tr3-6-1-ex2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken metode regnes som gullstandard for pulsovervåking under trening?',
        options: [
          { id: 'a', text: 'Brystbelte med elektrisk måling', isCorrect: true },
          { id: 'b', text: 'Optisk sensor på håndleddet', isCorrect: false },
          { id: 'c', text: 'Fingerklips med pulsoksymetri', isCorrect: false },
          { id: 'd', text: 'Manuell pulstelling på halsen', isCorrect: false },
        ],
        solution: 'Brystbelte måler elektriske signaler fra hjertet på en EKG-lignende måte og gir svært noyaktige resultater, selv ved hoy intensitet og raske bevegelser.',
      }
    },
  ],
  exercises: [
    {
      id: 'tr3-6-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom å beregne treningssoner basert på prosent av HFmaks og Karvonen-metoden (HFR). Hvorfor kan Karvonen-metoden gi en mer presis sonetilpasning?',
      solution: 'Prosent av HFmaks bruker kun maksimal hjertefrekvens: Treningspuls = HFmaks x onskprosent. Karvonen-metoden bruker hjertefrekvenssreserve: Treningspuls = ((HFmaks - HFhvile) x onskprosent) + HFhvile. Karvonen-metoden er mer presis fordi den tar hensyn til utoverens hvilepuls, som gjenspeiler treningsstatus. En verent utover med lav hvilepuls får andre soneverdier enn en utrent person med hoy hvilepuls, selv om de har lik HFmaks. Dermed blir treningssonene bedre tilpasset den enkeltes fysiologiske utgangspunkt.',
    },
    {
      id: 'tr3-6-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv minst tre faktorer som kan påvirke HRV-målingene og gi falskt lave verdier. Hvordan kan utoveren ta hensyn til disse faktorene?',
      solution: 'Faktorer som kan gi falskt lav HRV: 1) Darlig sovnkvalitet - selv en natt med avbrutt sovn kan senke HRV betydelig. Utoveren bor prioritere sovnhygiene og registrere sovnkvalitet sammen med HRV. 2) Alkoholinntak - selv moderate mengder alkohol kan senke HRV i 24-48 timer. Utoveren bor notere alkoholinntak for å skille dette fra treningsrelatert tretthet. 3) Psykologisk stress - eksamensperioder, konflikter eller jobbpress aktiverer det sympatiske nervesystemet og senker HRV. Utoveren bor registrere subjektivt stressnivå. Andre faktorer inkluderer sykdom, dehydrering og ulik måletidspunkt. Utoveren bor standardisere måleprotokollen og se på trender over tid fremfor enkeltmålinger.',
    },
    {
      id: 'tr3-6-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En trener bruker fem-soners pulsmodell for en lopergruppe. Forklar hva som skjer fysiologisk i sone 2 og sone 4, og drøft hvorfor det er viktig å trene i begge sonene for å utvikle utholdenheten.',
      solution: 'Sone 2 (60-70 % av HFmaks) er rolig utholdenhetsarbeid der kroppen primært bruker fett som energikilde. Treningseffekten inkluderer okt mitokondrievolum, bedre kapillærtetthet i muskulaturen, styrket hjertemuskel og forbedret evne til fettoksidasjon. Sone 4 (80-90 % av HFmaks) er hoy-intensitets intervalltrening der kroppen jobber nær eller over anaerob terskel. Her forbedres VO2maks gjennom okt slagvolum og forbedret oksygentransport, samt okt bufferkapasitet og toleranse for laktat. Det er viktig å trene i begge sonene fordi de utvikler ulike fysiologiske mekanismer. Sone 2 bygger det aerobe grunnlaget som muliggjor stor treningsvolum, mens sone 4 gir spesifikke tilpasninger for hoyt prestasjonsnivå. Forskning viser at en polarisert modell med mye tid i sone 1-2 og noe tid i sone 4-5 gir best utholdenhetsutvikling over tid.',
    },
    {
      id: 'tr3-6-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft begrensningene ved å bruke puls som eneste mål på treningsintensitet. Gi konkrete eksempler på situasjoner der pulsmåling kan gi et misvisende bilde.',
      solution: 'Puls har flere viktige begrensninger som intensitetsmål: 1) Forsinkelse: Ved korte intervaller (f.eks. 15-20 sekunders sprint) vil pulsen ikke rekke å gjenspeile den reelle belastningen for intervallet er over. 2) Kardiovaskulær drift: Under langvarig trening i varme vil pulsen stige gradvis uten at arbeidsbelastningen oker, noe som gir et overdrevet inntrykk av intensiteten. 3) Individuelle formelverdier: 220 minus alder kan bomme med 10-20 slag, noe som gir feil soneverdier. 4) Medikamenter: Betablokkere demper pulsresponsen, slik at utoveren kan jobbe hardt med lav puls. 5) Styrketrening: Isometrisk arbeid gir hoy belastning uten tilsvarende pulsrespons. Det er derfor viktig å kombinere puls med andre mål: opplevd anstrengelse (Borgs skala 6-20), laktatmålinger, wattmåling og treningslogg.',
    },
  ],
};

// ============================================================================
// Kapittel 6.2: GPS og bevegelsesanalyse
// ============================================================================

export const CHAPTER_TRENING_3_6_2: TextbookChapter = {
  id: 'trening-3-6-2',
  courseId: 'trening-3',
  chapterNumber: '6.2',
  title: 'GPS og bevegelsesanalyse',
  description: 'Lær om GPS-sporing, akselerometri og belastningsdata i idrett, og hvordan bevegelsesanalyse brukes til å optimalisere prestasjon og forebygge skader.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for bruk av GPS-teknologi i idrettssammenheng',
    'forklare hvordan akselerometri brukes til å måle belastning',
    'vurdere nytten av bevegelsesdata i treningsplanlegging',
  ],
  content: [
    {
      id: 'tr3-6-2-intro',
      type: 'text',
      content: `# GPS og bevegelsesanalyse

Global Positioning System (GPS) og bevegelsessensorer har revolusjonert måten trenere og utovere analyserer fysisk aktivitet. Ved hjelp av små, bærbare enheter kan man samle detaljerte data om avstand, hastighet, akselerasjon, retningsendringer og posisjon på banen. Denne informasjonen gir et objektivt bilde av trenings- og kampbelastningen.

I moderne toppidrett brukes GPS-data aktivt for å styre treningsbelastning, analysere spillemonstre, forebygge skader og vurdere spilleres fysiske kapasitet. Teknologien er blitt mer tilgjengelig og brukes nå også i bredde- og ungdomsidretten.`
    },
    {
      id: 'tr3-6-2-def-gps',
      type: 'definition',
      title: 'GPS (Global Positioning System)',
      content: 'GPS er et satellittbasert navigasjonssystem som bestemmer posisjonen til en mottaker på jordoverflaten. I idrettssammenheng brukes GPS-enheter (vanligvis med 10 Hz eller hoyere samplingfrekvens) til å spore utoveres bevegelser med hoy presisjon. Enhetene beregner posisjon, hastighet og avstand basert på signaler fra flere satellitter.'
    },
    {
      id: 'tr3-6-2-gps-tekst',
      type: 'text',
      content: `## GPS-sporing i idrett

**Vanlige GPS-parametre:**
- Total distanse: Hvor langt utoveren beveger seg totalt
- Hoyhastighetsloping: Distanse tilbakkelagt over en gitt hastighetstterskel (f.eks. over 19,8 km/t)
- Sprintdistanse: Distanse tilbakkelagt over sprintterskel (f.eks. over 25,2 km/t)
- Maksimal hastighet: Hoyeste registrerte hastighet
- Antall akselerasjoner og retardasjoner
- Gjennomsnittshastighet per periode

**Bruksområder:**
- Sammenligne belastning mellom treninger og kamper
- Identifisere spillere med uvanlig hoy eller lav belastning
- Tilpasse returtrening etter skade
- Analysere posisjonsdata og bevegelsesmonstre
- Evaluere effekten av taktiske endringer

**Typisk bruk i lagidretter:**
I fotball bærer spillerne GPS-enheter i en vest mellom skulderbladene under treninger og kamper. Dataene lastes ned etter okten og analyseres av prestasjonsteamet. Trenere kan se enkeltspilleres bevegelsesmonstre, sammenligne med historiske data og justere belastningen.`
    },
    {
      id: 'tr3-6-2-def-akselerometri',
      type: 'definition',
      title: 'Akselerometri',
      content: 'Akselerometri er måling av akselerasjon ved hjelp av sensorer (akselerometre). I idrettssammenheng måles akselerasjon i tre akser (forover/bakover, side til side, opp/ned) med enheten G (tyngdeakselerasjon). Akselerometridata brukes til å beregne Player Load - et samlemål for total mekanisk belastning som inkluderer alle bevegelser, også de som GPS ikke fanger opp (hopping, taklinger, retningsendringer).'
    },
    {
      id: 'tr3-6-2-belastningsdata',
      type: 'text',
      content: `## Belastningsdata og Player Load

Mens GPS primært måler posisjon og hastighet, gir akselerometri et bredere bilde av den fysiske belastningen. Player Load er en utbredt parameter som beregnes fra summen av akselerasjoner i alle tre akser.

**Fordeler med Player Load:**
- Fanger opp belastning fra alle bevegelsestyper
- Fungerer også innendors der GPS ikke virker
- Sensitiv for retningsendringer, hopp og kroppskontakt
- Kan brukes på tvers av ulike idretter

**Akutt-kronisk belastningsforhold:**
Et viktig konsept i belastningsstyring er forholdet mellom akutt belastning (siste ukens trening) og kronisk belastning (gjennomsnittet over de siste 4 ukene). Et for hoyt akutt-kronisk forhold (over 1,5) er forbundet med okt skaderisiko, fordi utoveren utsettes for en brå okning i belastning som kroppen ikke er forberedt på.

**Slik beregnes forholdet:**
- Akutt belastning = Total belastning siste 7 dager
- Kronisk belastning = Gjennomsnittlig ukebelastning siste 28 dager
- Akutt-kronisk forhold = Akutt / Kronisk
- Anbefalt sone: 0,8-1,3

En gradvis og kontrollert okning i treningsbelastningen gir kroppen tid til å tilpasse seg og reduserer skaderisikoen.`
    },
    {
      id: 'tr3-6-2-example-fotball',
      type: 'example',
      title: 'Eksempel: GPS-analyse i fotball',
      problem: 'En fotballspiller har en gjennomsnittlig total distanse på 10,5 km per kamp og en hoyhastighetsloping på 850 m per kamp. Under en treningskamp registreres kun 8,2 km total distanse og 420 m hoyhastighetsloping. Hva kan disse dataene fortelle treneren?',
      solution: `**Analyse:**
1. Total distanse er 22 % lavere enn kampsnittet (8,2 vs. 10,5 km)
2. Hoyhastighetsloping er hele 51 % lavere enn kampsnittet (420 vs. 850 m)

**Mulige forklaringer:**
- Treningskampen hadde kortere spilletid enn en ordinær kamp
- Spilleren tok det med ro på grunn av tretthet eller lettere skade
- Treneren ba spilleren spille i en annen rolle med lavere lopskrav
- Motstanderen var svak, og det var mindre behov for hoyintensitetslopinger

**Tiltak:**
- Sammenlign med spillerens subjektive opplevelse av treningskampen
- Sjekk HRV- og velværedata for tegn på tretthet
- Hvis spilleren skal matche kampbelastning i trening, vurder å legge til ekstra lopinger
- Følg opp med individuell samtale om spillerens tilstand

Eksempelet viser hvordan GPS-data gir objektive tall som kan avdekke mismatch mellom trenings- og kampbelastning.`
    },
    {
      id: 'tr3-6-2-innendors',
      type: 'text',
      content: `## Bevegelsesanalyse innendors

GPS fungerer ikke godt innendors fordi satellittsignalene blokkeres av tak og vegger. For innendorsidretter som håndball, basketball og volleyball brukes derfor alternative systemer:

**Lokalt posisjoneringssystem (LPS):**
- Bruker faste sendere i hallen som kommuniserer med bærbare enheter
- Gir posisjonsdata med hoy presisjon (ned til noen centimeter)
- Muliggjor sanntids posisjonssporing innendors
- Krever installasjon av infrastruktur i hallen

**Treghetssensorer (IMU):**
- Kombinerer akselerometre, gyroskoper og magnetometre
- Måler akselerasjon, rotasjon og orientering
- Fungerer uavhengig av GPS-signaler
- Brukes i mange idrettsklokker og sportsvester

**Kamerabaserte systemer:**
- Flere kameraer dekker spilleflaten
- Programvare sporer spillernes bevegelser automatisk
- Kan gi svært detaljerte posisjonsdata
- Brukes mye i profesjonell fotball og basketball

Valget av system avhenger av idrett, budsjett, behov for presisjon og om analysen skjer i sanntid eller i etterkant.`
    },
    {
      id: 'tr3-6-2-exercise-block1',
      type: 'exercise',
      exercise: {
        id: 'tr3-6-2-ex1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva måler Player Load?',
        options: [
          { id: 'a', text: 'Total mekanisk belastning basert på akselerasjoner i tre akser', isCorrect: true },
          { id: 'b', text: 'Kun total distanse tilbakkelagt under trening', isCorrect: false },
          { id: 'c', text: 'Hjertefrekvens under belastning', isCorrect: false },
          { id: 'd', text: 'Laktatverdier i blodet', isCorrect: false },
        ],
        solution: 'Player Load beregnes fra summen av akselerasjoner i alle tre akser (forover/bakover, side til side, opp/ned) og gir et samlemål for den totale mekaniske belastningen kroppen utsettes for.',
      }
    },
    {
      id: 'tr3-6-2-exercise-block2',
      type: 'exercise',
      exercise: {
        id: 'tr3-6-2-ex2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket akutt-kronisk belastningsforhold er forbundet med okt skaderisiko?',
        options: [
          { id: 'a', text: 'Over 1,5', isCorrect: true },
          { id: 'b', text: 'Under 0,5', isCorrect: false },
          { id: 'c', text: 'Noyaktig 1,0', isCorrect: false },
          { id: 'd', text: 'Mellom 0,8 og 1,3', isCorrect: false },
        ],
        solution: 'Et akutt-kronisk belastningsforhold over 1,5 betyr at den siste ukens belastning er 50 % hoyere enn gjennomsnittet for de siste fire ukene. Denne brå okningen gir kroppen for lite tid til tilpasning og er forbundet med okt skaderisiko.',
      }
    },
  ],
  exercises: [
    {
      id: 'tr3-6-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv minst fire vanlige GPS-parametre som brukes i lagidretter, og forklar hva hver av dem forteller om utoverens prestasjon.',
      solution: '1) Total distanse: Viser det totale lopearbeidet og gir et overordnet bilde av aktivitetsnivået. 2) Hoyhastighetsloping (distanse over ca. 19,8 km/t): Indikerer mengden av intensivt lopesarbeid og er knyttet til spillerens evne til å gjore hoyintensive aksjoner. 3) Sprintdistanse (distanse over ca. 25,2 km/t): Viser de mest eksplosive aksjonene og er viktig for å vurdere topphastighetsarbeid. 4) Antall akselerasjoner/retardasjoner: Gjenspeiler muskulær belastning fra hyppige hastighetsendringer, som er spesielt krevende for muskel- og senevolum. I tillegg brukes maksimal hastighet (hoyeste registrerte hastighet i okten) og gjennomsnittshastighet som supplerende parametre.',
    },
    {
      id: 'tr3-6-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva akutt-kronisk belastningsforhold er, og beskriv hvordan en trener kan bruke dette for å forebygge skader i en fotballtropp.',
      solution: 'Akutt-kronisk belastningsforhold er forholdet mellom belastningen i den siste uken (akutt) og gjennomsnittlig ukebelastning de siste fire ukene (kronisk). Treneren kan bruke dette ved å: 1) Overvåke hver spillers akutt-kroniske forhold gjennom sesongen. 2) Holde forholdet i den anbefalte sonen (0,8-1,3). 3) Unngå brå okninger i treningsbelastning, for eksempel etter ferier eller skadepauser. 4) Individualisere belastningsstyringen basert på spillerens historikk. 5) Bruke data til å bestemme når spillere trenger tilleggsbelastning eller avlastning. Ved å folge disse prinsippene kan treneren redusere risikoen for belastningsskader som skyldes for rask okning i treningsvolum eller intensitet.',
    },
    {
      id: 'tr3-6-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft fordeler og ulemper ved GPS-sporing i ungdomsidrett. Bor teknologien brukes på samme måte som i toppidrett?',
      solution: 'Fordeler: GPS kan gi objektive data som hjelper trenere med å styre belastning og unngå overbelastning av unge utovere. Det kan motivere ungdom som er opptatt av teknologi, og gi grunnlag for samtaler om trening. Ulemper: Overdreven fokus på data kan ta bort gleden ved lek og spontan aktivitet. Unge utovere risikerer å bli for opptatt av tall fremfor opplevelser. Kostnadene kan være hoye for ungdomslag. Data kan misbrukes til å sammenligne spillere på en uheldig måte. GPS bor ikke brukes på samme måte som i toppidrett fordi: 1) Ungdom har andre behov enn voksne toppidrettsutovere. 2) Allsidig utvikling er viktigere enn spesialisert belastningsstyring. 3) Psykologisk modning for å håndtere data varierer. 4) Treningsmål bor handle om utvikling og mestring, ikke optimalisering. Anbefaling: Bruk teknologien som et pedagogisk verktoy, ikke som et styringsverktoy.',
    },
    {
      id: 'tr3-6-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign GPS-basert posisjonssporing med kamerabaserte systemer for bevegelsesanalyse. Diskuter styrker og svakheter ved begge tilnærmingene.',
      solution: 'GPS-basert sporing: Styrker inkluderer bærbar teknologi som fungerer utendors, relativt lav kostnad per enhet, og individuell dataspeiling uten behov for infrastruktur. Svakheter inkluderer begrenset presisjon (1-2 m), avhengighet av satellittsignaler (fungerer ikke innendors), og at enheten må bæres av utoveren. Kamerabaserte systemer: Styrker inkluderer svært hoy presisjon (ned til centimeternivå), fungerer både innendors og utendors, og krever ikke at utoveren bærer utstyr. Svakheter inkluderer hoy installasjonskostnad, behov for fast infrastruktur, og krevende programvare for automatisk sporing. GPS egner seg best for daglig belastningsovervåking i utendorsidretter, mens kamerabaserte systemer er overlegne for detaljert taktisk analyse og innendors bruk. Mange toppklubber bruker begge systemene parallelt.',
    },
  ],
};

// ============================================================================
// Kapittel 6.3: Kraftmåling og hastighetsmåling
// ============================================================================

export const CHAPTER_TRENING_3_6_3: TextbookChapter = {
  id: 'trening-3-6-3',
  courseId: 'trening-3',
  chapterNumber: '6.3',
  title: 'Kraftmåling og hastighetsmåling',
  description: 'Lær om wattmålere, velocity-based training (VBT) og kraftplattformer, og hvordan disse verktoyene brukes til å måle og styre styrke- og krafttrening.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for teknologi for kraftmåling og hastighetsmåling i styrketrening',
    'forklare prinsippene bak velocity-based training (VBT)',
    'vurdere bruk av kraftplattformer i testing og trening',
  ],
  content: [
    {
      id: 'tr3-6-3-intro',
      type: 'text',
      content: `# Kraftmåling og hastighetsmåling

Tradisjonelt har styrketrening blitt styrt av ytre belastning (kilogram) og prosentandel av 1RM (en repetisjon maksimum). Ny teknologi gjor det nå mulig å måle kraft og hastighet direkte under ovelsene, noe som gir et mer presist og dynamisk bilde av utoverens kapasitet og dagsform.

I dette kapittelet ser vi på tre sentrale teknologier: wattmålere for utholdenhetsidretter, hastighetsmålere for velocity-based training (VBT) og kraftplattformer for testing og analyse. Disse verktoyene gir objektive data som kan brukes til å individualisere og optimalisere treningen.`
    },
    {
      id: 'tr3-6-3-def-wattmaler',
      type: 'definition',
      title: 'Wattmåler',
      content: 'En wattmåler er et instrument som måler mekanisk effekt (kraft x hastighet) i watt. I sykling måles kraften utoveren påforer pedalene, kombinert med tråkkfrekvensen, for å gi et direkte mål på arbeidsintensiteten. I motsetning til puls er wattmåling uavhengig av ytre faktorer som varme, koffein og stress, og gir derfor et mer objektivt mål på prestasjon.'
    },
    {
      id: 'tr3-6-3-watt-tekst',
      type: 'text',
      content: `## Wattmåling i utholdenhetsidretter

Wattmålere har blitt standardutstyr i professionell sykling og brukes i okende grad i roing, loping (med fotputer) og skigang.

**Funksjonell terskeleffekt (FTP):**
- Definert som den hoyeste effekten en utover kan opprettholde i cirka 60 minutter
- Brukes som referansepunkt for å sette treningssoner
- Typiske soner: Aktiv restitusjon (under 55 % FTP), Utholdenhet (56-75 % FTP), Tempo (76-90 % FTP), Terskel (91-105 % FTP), VO2maks (106-120 % FTP), Anaerob kapasitet (over 120 % FTP)

**Fordeler med wattmåling:**
- Objektiv og umiddelbar tilbakemelding på intensitet
- Ikke påvirket av ytre faktorer som varme eller vind
- Muliggjor presis pacing i konkurranser
- Gir grunnlag for å spore treningsfremgang over tid
- Kan brukes til å estimere energiforbruk

**Watt/kg-forholdet:**
For utovere som må flytte sin egen kroppsvekt (sykling i motbakke, loping) er watt per kilogram kroppsvekt et viktig prestasjonsmål. En mannlig proffsyklist har typisk en FTP på 5,5-6,5 W/kg, mens en godt trent mosjonist ligger rundt 3,5-4,5 W/kg.`
    },
    {
      id: 'tr3-6-3-def-vbt',
      type: 'definition',
      title: 'Velocity-Based Training (VBT)',
      content: 'Velocity-Based Training er en treningsmetode der belastningen styres av stanghastighetene i stedet for prosent av 1RM. Ved å måle hastigheten på stangen med en lineær posisjonsmåler eller akselerometrisk sensor kan utoveren og treneren få umiddelbar tilbakemelding på kraft, hastighet og effekt. Dette gjor det mulig å tilpasse belastningen til utoverens dagsform uten å måtte teste 1RM regelmessig.'
    },
    {
      id: 'tr3-6-3-vbt-tekst',
      type: 'text',
      content: `## Velocity-Based Training (VBT) i praksis

VBT bygger på det omvendte forholdet mellom kraft og hastighet: jo tyngre belastning, desto langsommere bevegelse. Ved å måle stanghastigheten kan man estimere treningsintensiteten i sanntid.

**Hastighetsbaserte treningssoner:**
- Over 1,0 m/s: Eksplosiv styrke og spensttrening
- 0,75-1,0 m/s: Hurtigstyrke og kraftutvikling
- 0,5-0,75 m/s: Generell styrketrening
- 0,3-0,5 m/s: Maksimal styrke
- Under 0,3 m/s: Nær maksimal belastning

**Måleenheter for VBT:**
- Lineær posisjonsmåler (encoder): En snor festet til stangen som måler vertikal forflytning
- Akselerometrisk sensor: Festet direkte på stangen, måler akselerasjon
- Kamerabasert system: Bruker optisk sporing av stangen
- Appbaserte losninger: Bruker mobilkameraet til å estimere hastighet

**Fordeler med VBT:**
- Tilpasser belastningen til utoverens dagsform automatisk
- Gir objektiv tilbakemelding som motiverer
- Reduserer behov for hyppige 1RM-tester
- Kan brukes til å bestemme optimalt antall repetisjoner (stopp-kriterier)
- Muliggjor presis overvåking av treningsfremgang

Når hastigheten på en gitt belastning synker under et forhåndsdefinert nivå, indikerer det at utoveren er utmattet og bor avslutte settet. Dette kalles hastighetstapskriterier og reduserer risikoen for overtrening.`
    },
    {
      id: 'tr3-6-3-example-vbt',
      type: 'example',
      title: 'Eksempel: Bruk av VBT i kneboytrening',
      problem: 'En utover har en 1RM i knebøy på 140 kg. Treneren ønsker å bruke VBT for å styre treningsbelastningen. Forklar hvordan dette kan gjennomfores i praksis.',
      solution: `**Gjennomforing:**
1. Fest en lineær posisjonsmåler til stangen
2. Start med oppvarmingssett og registrer hastigheten ved ulike belastninger:
   - 60 kg: 0,95 m/s
   - 80 kg: 0,78 m/s
   - 100 kg: 0,58 m/s
   - 110 kg: 0,45 m/s

3. Dagens mål er generell styrketrening (0,5-0,75 m/s), så arbeidsbelastningen settes til 100 kg
4. Utoveren gjennomforer sett med 100 kg mens hastigheten overvåkes
5. Settet avsluttes når hastigheten faller under 0,45 m/s (hastighetstapskriterium på ca. 20 %)
6. Dersom den forste repetisjonen er raskere enn 0,75 m/s, kan belastningen okes

**Fordelen:**
- Hadde utoveren hatt en dårlig dag (stress, lite sovn), ville den forste repetisjonen ved 100 kg kanskje vært 0,48 m/s - et signal om at belastningen bor reduseres
- Uten VBT ville utoveren fortsatt trent med 100 kg basert på gårsdagens plan, noe som kunne ført til dårlig treningskvalitet eller skade`
    },
    {
      id: 'tr3-6-3-kraftplattform',
      type: 'text',
      content: `## Kraftplattformer

En kraftplattform er en plate med innebygde kraftsensorer som måler bakkeireaksjonskrefter i tre retninger: vertikal, horisontal (forover-bakover) og lateral (side til side). Kraftplattformer brukes til testing, diagnostikk og trening.

**Vanlige tester på kraftplattform:**
- Countermovement jump (CMJ): Svikthopp med armsving, måler vertikal hopphøyde, topkraft, kraftutviklingsrate og asymmetri
- Squat jump (SJ): Hopp fra statisk posisjon uten foraksjon, isolerer konsentrisk kraft
- Drop jump: Hopp fra en definert hoyde, måler reaktiv styrke
- Isometrisk midtlårstrekk: Måler maksimal isometrisk kraft

**Viktige parametre fra kraftplattform:**
- Topkraft (Peak force): Den hoyeste kraften som produseres
- Kraftutviklingsrate (Rate of Force Development, RFD): Hvor raskt utoveren kan utvikle kraft
- Impuls: Kraft x tid, direkte knyttet til hopphøyde
- Asymmetri: Forskjell i kraftproduksjon mellom hoyre og venstre bein
- Kontakttid: Tiden foten er i kontakt med plattformen

**Bruksområder:**
- Overvåke treningsrespons og belastning over sesong
- Identifisere asymmetrier som kan indikere skaderisiko
- Måle eksplosiv kraft og spenstutvikling
- Vurdere nevromuskulær tretthet (nedgang i CMJ-hoyde)
- Teste utovere for posisjonering og uttak`
    },
    {
      id: 'tr3-6-3-def-rfd',
      type: 'definition',
      title: 'Kraftutviklingsrate (RFD)',
      content: 'Kraftutviklingsrate (Rate of Force Development) er et mål på hvor raskt en utover kan utvikle kraft, uttrykt som endring i kraft per tidsenhet (N/s). Hoy RFD er avgjorende i idretter der raske kraftstot er viktig, som sprint, hopping og kast. RFD måles typisk i de forste 50-250 millisekund av en kraftanstrengelse og trenes best med eksplosive ovelser og tung styrketrening.'
    },
    {
      id: 'tr3-6-3-exercise-block1',
      type: 'exercise',
      exercise: {
        id: 'tr3-6-3-ex1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en sentral fordel med velocity-based training (VBT) sammenlignet med tradisjonell prosent-basert styrketrening?',
        options: [
          { id: 'a', text: 'Belastningen tilpasses automatisk til utoverens dagsform', isCorrect: true },
          { id: 'b', text: 'Det krever ingen form for utstyr', isCorrect: false },
          { id: 'c', text: 'Det gir alltid hoyere maksimalkraft', isCorrect: false },
          { id: 'd', text: 'Det erstatter behovet for oppvarming', isCorrect: false },
        ],
        solution: 'VBT måler stanghastigheten i sanntid og avslorer utoverens faktiske kapasitet den dagen. Har utoveren sovnet dårlig eller er stresset, vil hastigheten være lavere ved en gitt belastning, og treneren kan justere ned. Med prosent-basert trening brukes faste verdier uavhengig av dagsform.',
      }
    },
    {
      id: 'tr3-6-3-exercise-block2',
      type: 'exercise',
      exercise: {
        id: 'tr3-6-3-ex2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva måler kraftutviklingsrate (RFD)?',
        options: [
          { id: 'a', text: 'Hvor raskt en utover kan utvikle kraft', isCorrect: true },
          { id: 'b', text: 'Utoverens maksimale oksygenopptak', isCorrect: false },
          { id: 'c', text: 'Total distanse tilbakkelagt under trening', isCorrect: false },
          { id: 'd', text: 'Antall repetisjoner i et sett', isCorrect: false },
        ],
        solution: 'RFD (Rate of Force Development) er endring i kraft per tidsenhet (N/s) og uttrykker hvor eksplosiv utoveren er. Det måles typisk i de forste 50-250 millisekund av en kraftanstrengelse.',
      }
    },
  ],
  exercises: [
    {
      id: 'tr3-6-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva funksjonell terskeleffekt (FTP) er, og beskriv hvordan en syklist kan bruke FTP til å sette treningssoner.',
      solution: 'FTP er den hoyeste effekten (i watt) en syklist kan opprettholde i cirka 60 minutter. Den estimeres ofte med en 20-minutters test der man sykler så hardt som mulig, og FTP settes til 95 % av gjennomsnittlig watt. Treningssoner basert på FTP: Aktiv restitusjon (under 55 % FTP), Utholdenhet (56-75 %), Tempo (76-90 %), Terskel (91-105 %), VO2maks (106-120 %), Anaerob kapasitet (over 120 %). Ved å kjenne sin FTP kan syklisten styre intensiteten presist i hver treningsokt og sikre at riktig energisystem trenes.',
    },
    {
      id: 'tr3-6-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre viktige parametre som kan måles med en kraftplattform under et svikthopp (countermovement jump), og forklar hva hver parameter forteller om utoveren.',
      solution: '1) Hopphøyde: Beregnes fra svevfasen og gir et overordnet mål på eksplosiv kraft i underekstremitetene. Nedgang i hopphoyde over tid kan indikere akkumulert tretthet. 2) Topkraft (peak force): Den hoyeste vertikale kraften som produseres under avsatsfasen. Hoy topkraft indikerer god evne til kraftproduksjon og er viktig i idretter med hopp og sprint. 3) Asymmetri: Forskjellen i kraftproduksjon mellom hoyre og venstre bein. Asymmetri over 10-15 % kan indikere skaderisiko eller utilstrekkelig rehabilitering etter skade og bor folges opp med spesifikk trening.',
    },
    {
      id: 'tr3-6-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft fordeler og ulemper ved å bruke VBT som primaer styringsmetode i styrketrening sammenlignet med tradisjonell prosentbasert trening.',
      solution: 'Fordeler med VBT: 1) Tilpasning til dagsform - utoveren trener alltid med riktig relativ belastning. 2) Motivasjon - umiddelbar tilbakemelding på hastighet motiverer til maksimal innsats. 3) Autoregulering - hastighetstapskriterier forhindrer overtrening. 4) Redusert testbehov - slipper hyppige 1RM-tester som er fysisk krevende. Ulemper med VBT: 1) Utstyrskostnad - kvalitetssensorer koster fra noen tusen til titusenvis av kroner. 2) Teknisk kunnskap - krever forståelse for hastighets-kraft-forholdet. 3) Ovelsesavhengig - hastighetssonene varierer mellom ovelser. 4) Kan fremme for mye fokus på tall fremfor teknikk. 5) Ikke alle ovelser egner seg for hastighetsmåling. Konklusjon: VBT er et verdifullt supplement, men bor kombineres med tradisjonelle metoder og trenerens erfaringsbaserte vurdering.',
    },
    {
      id: 'tr3-6-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan en trener kan bruke ukentlige svikthopp (CMJ) på kraftplattform til å overvåke treningsbelastning gjennom en sesong. Hvilke tiltak bor iverksettes ved vedvarende nedgang i hopphøyde?',
      solution: 'Protokoll: Utoveren gjennomforer 3-5 svikthopp på kraftplattform hver mandag morgen under standardiserte betingelser (samme tidspunkt, oppvarming og instruksjon). Gjennomsnittlig hopphoyde, topkraft og asymmetri registreres og sammenlignes med baseline og ukentlige trender. Tolkning: En nedgang i hopphoyde på mer enn 10 % fra baseline over flere uker kan indikere akkumulert tretthet eller begynnende overtrening. Tiltak: 1) Reduser total treningsbelastning med 20-30 % i 5-7 dager. 2) Prioriter sovn og ernæring. 3) Erstatt tunge styrkeokter med lettere motorisk trening. 4) Sjekk subjektive mål på tretthet og motivasjon. 5) Gjennomfor individuell samtale om stressfaktorer utenfor idretten. 6) Gjenoppta normal trening gradvis når hopphoyde er tilbake til baseline. CMJ-overvåking er spesielt nyttig fordi testen er enkel, lite belastende og sensitiv for endringer i nevromuskulær funksjon.',
    },
  ],
};

// ============================================================================
// Kapittel 6.4: Videoanalyse
// ============================================================================

export const CHAPTER_TRENING_3_6_4: TextbookChapter = {
  id: 'trening-3-6-4',
  courseId: 'trening-3',
  chapterNumber: '6.4',
  title: 'Videoanalyse',
  description: 'Lær om teknikkanalyse, taktisk analyse og bruk av videofeedback for å forbedre prestasjon i idrett.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for bruk av videoanalyse i trenings- og konkurransesammenheng',
    'forklare hvordan teknikkanalyse kan forbedre utoverens bevegelsesmonster',
    'drøfte bruk av video som feedbackverktoy i laeringsprosessen',
  ],
  content: [
    {
      id: 'tr3-6-4-intro',
      type: 'text',
      content: `# Videoanalyse

Video har vært brukt i idrett i flere tiår, men den teknologiske utviklingen har gjort verktoyene enklere, billigere og mer avanserte. I dag kan en trener filme med en mobiltelefon, analysere i en app og dele tilbakemeldinger med utoveren i lopet av minutter. Samtidig bruker profesjonelle lag avanserte systemer med flere kameraer, automatisk tagging og kunstig intelligens.

Videoanalyse brukes til tre hovedformål: teknikkanalyse for å forbedre bevegelsesmonster, taktisk analyse for å forstå kampbilder, og feedback for å stotte laeringsprosessen. I dette kapittelet ser vi på hvordan disse tilnærmingene fungerer i praksis.`
    },
    {
      id: 'tr3-6-4-def-teknikkanalyse',
      type: 'definition',
      title: 'Teknikkanalyse',
      content: 'Teknikkanalyse er systematisk vurdering av bevegelsesmonster ved hjelp av video. Målet er å identifisere styrker og forbedringsområder i utoverens teknikk ved å sammenligne med en ideell bevegelsemodell eller egne tidligere prestasjoner. Analysen kan være kvalitativ (visuell vurdering) eller kvantitativ (måling av vinkler, hastigheter og timing).'
    },
    {
      id: 'tr3-6-4-teknikk-tekst',
      type: 'text',
      content: `## Teknikkanalyse i praksis

**Kvalitativ teknikkanalyse:**
- Treneren vurderer bevegelsesmonsteret visuelt
- Bruker sakte film (slow motion) for å se detaljer
- Sammenligner med idealmodell eller topputovere
- Identifiserer avvik og forbedringsområder
- Enkel å gjennomfore med vanlig kamera eller mobiltelefon

**Kvantitativ teknikkanalyse:**
- Bruker programvare til å måle leddvinkler, hastigheter og krefter
- Krever kalibrerte kameraoppsett for presise målinger
- Kan kombineres med kraftplattform og EMG-målinger
- Gir objektive tall som kan sammenlignes over tid
- Mer tidkrevende og ressurskrevende enn kvalitativ analyse

**Kameraoppsett for god teknikkanalyse:**
- Bruk stativ for stabile opptak
- Film fra flere vinkler: side, front og bakfra
- Sorg for god belysning og nøytral bakgrunn
- Bruk hoy bildefrekvens (minst 120 bilder per sekund for raske bevegelser)
- Plasser kameraet vinkelrett på bevegelsesplanet

**Bruksområder:**
- Loping: Analyse av lopesteget, fotisett, kneloft og overkroppshold
- Svomming: Trekk, sparkfrekvens, kroppsposisjon og vendinger
- Kastidretter: Kastbevegelse, avleveringsvinkel og timing
- Skihopp: Innhopp, svev og landing
- Styrkeovelser: Bøyedybde, ryggposisjon og stanghastighet`
    },
    {
      id: 'tr3-6-4-taktisk',
      type: 'text',
      content: `## Taktisk analyse

Taktisk videoanalyse brukes primært i lagidretter for å forstå og forbedre spillemonstre, forberede seg til motstandere og evaluere egne prestasjoner.

**Offensiv analyse:**
- Identifisere angrepsmonstre som forer til sjanser
- Analysere spillernes posisjonering og bevegelser
- Vurdere ballsirkulasjon og tempoendringer
- Finne styrker og svakheter i motstanderens forsvar

**Defensiv analyse:**
- Kartlegge forsvarssystemets funksjon
- Identifisere svakheter i egen defensiv organisering
- Analysere overgangssituasjoner (fra angrep til forsvar)
- Vurdere markeringer, pressing og dekningsbalanse

**Standardsituasjoner:**
- Analysere egne og motstanderens hjornespark, frispark og innkast
- Utvikle spilltrekk basert på motstanderens monstre
- Evaluere effektiviteten av egne standardsituasjoner

**Verktoy for taktisk analyse:**
- Tagging-programvare: Markere hendelser i videoen (mål, sjanser, erobringer)
- Tegne-verktoy: Tegne på videobildet for å illustrere bevegelser
- Klipping: Lage korte klipp av spesifikke situasjoner
- Presentasjonsverktoy: Vise analyse for laget i moter

I toppfotball har de fleste lag dedikerte videoanalytikere som forbereder analyser for treningsuken. Analysene brukes i lagmøter, individuelle samtaler og treningsplanlegging.`
    },
    {
      id: 'tr3-6-4-def-feedback',
      type: 'definition',
      title: 'Videofeedback',
      content: 'Videofeedback er bruk av videoopptak som tilbakemelding til utoveren for å stotte laering og utvikling. Forskning viser at videofeedback er mest effektivt når det gis sammen med verbal veiledning fra treneren, fokuserer på ett eller to forbedringsområder om gangen, og lar utoveren se vekselsvis mellom egen prestasjon og et referanseeksempel. Timing er viktig - feedback bor gis relativt raskt etter prestasjonen for best effekt.'
    },
    {
      id: 'tr3-6-4-feedback-tekst',
      type: 'text',
      content: `## Videofeedback som læringsverktoy

Forskning på motorisk laering viser at videofeedback kan vaere et kraftfullt verktoy, men bruken må vaere gjennomtenkt for å gi optimal effekt.

**Prinsipper for god videofeedback:**
1. **Fokuser på få elementer:** Presenter maksimalt 2-3 forbedringsområder om gangen
2. **Vis referansebilder:** Sammenlign med idealutforelse eller utoverens egne beste prestasjoner
3. **Bruk sakte film:** Redusert hastighet gjor det lettere å se detaljer
4. **Still spørsmål:** La utoveren oppdage selv hva som kan forbedres
5. **Gi tidsnær feedback:** Helst innen samme treningsokt
6. **Kombiner med verbal forklaring:** Video alene er sjelden tilstrekkelig
7. **Vaer positiv:** Start med hva som er bra for du peker på forbedringer

**Utfordringer med videofeedback:**
- Noen utovere opplever ubehag ved å se seg selv på film
- For mye informasjon kan virke overveldende og hemme laering
- Treneren trenger kompetanse i å velge riktige klipp og fokusområder
- Tekniske problemer kan forstyrre treningsflyten
- Risiko for overanalyse som hemmer naturlig bevegelsesflyt

**Selvanalyse:**
I okende grad brukes video til selvanalyse, der utoveren selv gjennomgår egne opptak. Dette krever at utoveren har nok kunnskap til å vurdere egen teknikk og kan vaere spesielt nyttig for erfarne utovere som kjenner idealmodellen godt.`
    },
    {
      id: 'tr3-6-4-example-teknikk',
      type: 'example',
      title: 'Eksempel: Videoanalyse av lopeteknikk',
      problem: 'En mellomdistanseloper opplever gjentatte skader i legg og akillessene. Treneren ønsker å bruke videoanalyse for å identifisere mulige årsaker i lopeteknikken. Beskriv hvordan analysen kan gjennomfores.',
      solution: `**Oppsett:**
1. Plasser to kameraer: ett fra siden og ett bakfra
2. Bruk hoy bildefrekvens (240 fps) for detaljerte opptak
3. Film loperen ved ulike hastigheter: rolig jogging, tempokjoring og sprinttempo
4. Film på tredemole og utendors for å sammenligne

**Analyse:**
- **Sidebilde:** Vurder fotisett (forfotsisett, midtfotsisett eller haelisett), knevinkel ved landing, hofte-ekstensjon i fraspark, overkroppsholdning
- **Bakfra:** Se etter overpronasjon, knevalgus (kneet faller innover), asymmetri mellom hoyre og venstre side, bekkenrotasjon
- **Sammenligning:** Bruk split-screen for å sammenligne lopeteknikk ved ulike hastigheter

**Funn (eksempel):**
- Loperen lander langt foran tyngdepunktet (overstriding)
- Hoyre fot pronerer mer enn venstre
- Kort kontakttid og stiv landing ved hoyt tempo

**Tiltak:**
- Øvelser for å redusere overstridingen (kortere steg, hoyere stegsfrekvens)
- Styrketrening for hoftestabilisatorer
- Oppfolging med ny videoanalyse etter 4-6 uker`
    },
    {
      id: 'tr3-6-4-exercise-block1',
      type: 'exercise',
      exercise: {
        id: 'tr3-6-4-ex1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom kvalitativ og kvantitativ teknikkanalyse?',
        options: [
          { id: 'a', text: 'Kvalitativ er visuell vurdering, kvantitativ bruker målinger av vinkler og hastigheter', isCorrect: true },
          { id: 'b', text: 'Kvalitativ bruker GPS, kvantitativ bruker pulsklokke', isCorrect: false },
          { id: 'c', text: 'Kvalitativ gjores i sanntid, kvantitativ gjores i etterkant', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell mellom dem', isCorrect: false },
        ],
        solution: 'Kvalitativ teknikkanalyse innebærer at treneren visuelt vurderer bevegelsesmonsteret, gjerne med sakte film. Kvantitativ analyse bruker programvare til å måle spesifikke parametre som leddvinkler, hastigheter og krefter, noe som gir objektive tall som kan sammenlignes over tid.',
      }
    },
    {
      id: 'tr3-6-4-exercise-block2',
      type: 'exercise',
      exercise: {
        id: 'tr3-6-4-ex2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er viktigst for effektiv videofeedback til en utover?',
        options: [
          { id: 'a', text: 'Fokusere på få forbedringsområder og kombinere med verbal veiledning', isCorrect: true },
          { id: 'b', text: 'Vise så mange feil som mulig i hver gjennomgang', isCorrect: false },
          { id: 'c', text: 'Bare sende videoen til utoveren uten kommentarer', isCorrect: false },
          { id: 'd', text: 'Vente minst en uke for å gi avstand til prestasjonen', isCorrect: false },
        ],
        solution: 'Forskning viser at videofeedback er mest effektivt når det fokuserer på 2-3 elementer om gangen, kombineres med verbal forklaring fra treneren, og gis relativt raskt etter prestasjonen. For mye informasjon kan virke overveldende og hemme laeringen.',
      }
    },
  ],
  exercises: [
    {
      id: 'tr3-6-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hvordan et fotballag kan bruke taktisk videoanalyse for å forberede seg til en viktig kamp. Inkluder eksempler på hva som analyseres offensivt og defensivt.',
      solution: 'Forberedelse: Videoanalytikeren samler inn videoopptak fra motstanderens siste 3-5 kamper og analyserer spillemonstre. Offensiv analyse: Identifisere svakheter i motstanderens forsvar (f.eks. hoy forsvarslinje som kan utnyttes med dybdelop, svak sone mellom back og midtstoppere). Defensiv analyse: Kartlegge motstanderens angrepsmonstre (f.eks. foretrekker de spill gjennom midten eller kantene, hvem er nokkelpersoner). Standardsituasjoner: Analysere motstanderens rutinemonstre på hjornespark og frispark. Presentasjon: Korte videoklipp (5-10 min) vises for laget i lagmøte, med tegninger og forklaringer. Individuelle klipp sendes til spillere med spesifikke oppgaver. Treningsopplegg tilpasses basert på analysen.',
    },
    {
      id: 'tr3-6-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar minst fire prinsipper for god videofeedback i idrett, og begrunn hvorfor hvert prinsipp er viktig for laeringsprosessen.',
      solution: '1) Fokuser på få elementer: Arbeidsminnet kan bare håndtere begrenset informasjon, så for mange fokusområder forer til overbelastning og dårligere laering. 2) Bruk referansebilder: Sammenligning med idealutforelse hjelper utoveren å se forskjellen mellom egen og onsket teknikk, noe som skaper et tydelig mål for forbedring. 3) Gi tidsnær feedback: Rask tilbakemelding gjor at utoveren kan koble opplevelsen av bevegelsen med det visuelle, noe som styrker laeringen. 4) Kombiner med verbal forklaring: Video alene krever at utoveren vet hva de skal se etter. Trenerens veiledning retter oppmerksomheten mot det viktigste og gir konkrete handlingsforslag. 5) Start med det positive: Å anerkjenne det som er bra skaper trygghet og motivasjon, noe som gjor utoveren mer mottakelig for endringsforslag.',
    },
    {
      id: 'tr3-6-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft når selvanalyse med video er mest hensiktsmessig, og når trenerstyrt analyse er å foretrekke. Gi eksempler fra ulike idretter.',
      solution: 'Selvanalyse egner seg best for: 1) Erfarne utovere med god teknisk forståelse, f.eks. en erfaren svommer som kan vurdere sin egen armtrekk og kroppsposisjon. 2) Individuelle idretter der utoveren kjenner idealmodellen, f.eks. en friidrettsutover som analyserer eget lopesteget mellom treningene. 3) Supplement mellom trenertimene, f.eks. en golfspiller som filmer svingen på driving range. Trenerstyrt analyse er å foretrekke: 1) For nybegynnere som mangler referanseramme for hva som er god teknikk. 2) I komplekse taktiske situasjoner i lagidretter der treneren ser helheten. 3) Etter skade eller teknikkomlegging der utoveren trenger ekstern vurdering. 4) Når utoveren har utviklet feilaktige bevegelsesmonster og ikke ser feilen selv. Konklusjon: Selvanalyse og trenerstyrt analyse bor kombineres, der treneren gir retning og verktoy, og utoveren gradvis overtar mer av analyseansvaret.',
    },
    {
      id: 'tr3-6-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv utfordringene ved å bruke videoanalyse med unge utovere (13-16 år) og forklar hvordan treneren kan tilpasse bruken for å unngå negative effekter.',
      solution: 'Utfordringer: 1) Unges selvbilde er sårbart, og å se seg selv på video kan oppleves ubehagelig eller forsterke usikkerhet. 2) Unge utovere har begrenset evne til å prosessere mye informasjon samtidig. 3) Fokus på feil kan redusere motivasjon og treningsglede. 4) Overanalyse kan hemme den spontane bevegelsesflyten som er viktig for motorisk utvikling. 5) Sammenligning med jevnaldrende kan skape prestasjonsangst. Tilpasninger: 1) Fokuser på det positive for, og vis forbedring over tid. 2) Bruk video som et pedagogisk verktoy, ikke et kontrollverktoy. 3) La utoveren selv velge hva de vil se på. 4) Begrens videosesjoner til 5-10 minutter. 5) Bruk humor og ufarliggjoring. 6) Sammenlign kun med utoverens egne tidligere prestasjoner, aldri med andre. 7) Gi utoveren mulighet til å si nei til filming. Hovedprinsippet er at video skal stotte mestring og motivasjon, ikke skape prestasjonpress.',
    },
  ],
};

// ============================================================================
// Kapittel 6.5: Apper og digitale verktoy
// ============================================================================

export const CHAPTER_TRENING_3_6_5: TextbookChapter = {
  id: 'trening-3-6-5',
  courseId: 'trening-3',
  chapterNumber: '6.5',
  title: 'Apper og digitale verktoy',
  description: 'Lær om treningsapper, datavisualisering og kunstig intelligens (AI) i trening, og hvordan digitale verktoy kan stotte treningsplanlegging og analyse.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for bruk av digitale verktoy i treningsplanlegging',
    'vurdere nytten og begrensningene ved treningsapper og AI-baserte losninger',
    'forklare prinsipper for datavisualisering i treningssammenheng',
  ],
  content: [
    {
      id: 'tr3-6-5-intro',
      type: 'text',
      content: `# Apper og digitale verktoy

Den digitale revolusjonen har gitt utovere og trenere tilgang til et enormt utvalg av apper og digitale plattformer for treningsplanlegging, datainnsamling og analyse. Fra enkle treningsdagboker til avanserte AI-baserte systemer finnes det verktoy for alle nivåer og behov.

I dette kapittelet ser vi på de viktigste kategoriene av digitale verktoy i treningssammenheng: treningsapper for planlegging og logging, datavisualisering for å forstå treningsdata, og kunstig intelligens som et stadig viktigere hjelpemiddel i moderne idrett.`
    },
    {
      id: 'tr3-6-5-def-treningsapp',
      type: 'definition',
      title: 'Treningsapp',
      content: 'En treningsapp er programvare for mobil, nettbrett eller datamaskin som brukes til å planlegge, registrere og analysere trening. Moderne treningsapper samler data fra ulike sensorer (pulsklokke, GPS, kraftmåler), visualiserer dataene grafisk, og gir anbefalinger basert på utoverens historikk. Eksempler inkluderer Strava, TrainingPeaks, Garmin Connect og Polar Flow.'
    },
    {
      id: 'tr3-6-5-apper-tekst',
      type: 'text',
      content: `## Treningsapper og plattformer

**Typer treningsapper:**

1. **Loggings- og overvåkingsapper:**
   - Registrerer treningsdata automatisk fra sensorer
   - Gir oversikt over treningshistorikk og trender
   - Eksempler: Garmin Connect, Polar Flow, COROS
   - Egnet for individuelle utovere som vil folge sin utvikling

2. **Treningsplanleggingsapper:**
   - Gir ferdige treningsprogrammer eller mulighet for å lage egne
   - Periodiserer treningen over uker og måneder
   - Eksempler: TrainingPeaks, Intervals.icu, Today's Plan
   - Brukes mye av utholdenhetsutovere og deres trenere

3. **Sosiale treningsplattformer:**
   - Deling av treningsdata med andre utovere
   - Segmentkonkurranser og utfordringer
   - Eksempler: Strava, Zwift, Peloton
   - Kan oke motivasjon gjennom sosialt fellesskap

4. **Lagidrettsplattformer:**
   - Håndterer treningsopplegg, fremmote og kommunikasjon
   - Integrerer fysiske data med taktisk analyse
   - Eksempler: Catapult, STATSports, Kitman Labs
   - Brukes av profesjonelle og semiprofesjonelle lag

**Vurderingskriterier for treningsapper:**
- Kompatibilitet med utoverens sensorutstyr
- Brukervennlighet og oversiktlig grensesnitt
- Personvernhåndtering og dataeierskap
- Mulighet for deling med trener
- Pris og betalingsmodell`
    },
    {
      id: 'tr3-6-5-datavisualisering',
      type: 'text',
      content: `## Datavisualisering i trening

Treningsdata har liten verdi hvis de ikke presenteres på en forståelig måte. God datavisualisering gjor det mulig for utovere og trenere å oppdage monstre, trender og avvik raskt.

**Vanlige visualiseringsformer:**
- Linjediagram: Viser utvikling over tid (f.eks. treningstimer per uke, FTP-utvikling)
- Soylerdiagram: Sammenligner verdier mellom perioder (f.eks. distanse per treningsokt)
- Varmekart: Viser intensitetsfordeling (f.eks. tid i ulike pulssoner)
- Scatter-plot: Viser sammenhengen mellom to variabler (f.eks. treningsbelastning og prestasjon)
- Dashboard: Samler flere visualiseringer på ett sted for rask oversikt

**Prinsipper for god datavisualisering:**
1. **Enkelhet:** Vis kun det som er relevant for beslutningstakeren
2. **Kontekst:** Inkluder referanseverdier og mål for å gi tallene mening
3. **Konsistens:** Bruk samme format og fargekoder gjennomgående
4. **Handlingsrettet:** Visualiseringen bor peke mot konkrete tiltak
5. **Tilpasset mottaker:** Utovere, trenere og fysioterapeuter trenger ulike visninger

**Performance Management Chart (PMC):**
Et mye brukt visualiseringsverktoy i utholdenhetsidrett er PMC, som viser:
- CTL (Chronic Training Load): Langsiktig treningsbelastning, representerer treningsform
- ATL (Acute Training Load): Kortsiktig treningsbelastning, representerer tretthet
- TSB (Training Stress Balance): Differansen mellom CTL og ATL, indikerer treningsberedskap

PMC hjelper utovere og trenere med å planlegge periodisering og timing av formtopper mot viktige konkurranser.`
    },
    {
      id: 'tr3-6-5-def-ai',
      type: 'definition',
      title: 'Kunstig intelligens (AI) i trening',
      content: 'Kunstig intelligens (AI) i treningssammenheng refererer til bruk av maskinlaeringsalgoritmer og dataanalyse for å optimalisere treningsplanlegging, forutsi prestasjoner, forebygge skader og gi individuelle anbefalinger. AI-systemer larer av store datamengder og kan identifisere monstre som mennesker vanskelig kan oppdage. Eksempler inkluderer automatisk justering av treningsplaner, skadeprediksjonsmodeller og personalisert ernaeringsrådgivning.'
    },
    {
      id: 'tr3-6-5-ai-tekst',
      type: 'text',
      content: `## Kunstig intelligens i idrett

AI er i rask utvikling og brukes i okende grad i idrettssammenheng. Her ser vi på noen av de viktigste bruksområdene:

**Treningsplanlegging med AI:**
- Algoritmer analyserer utoverens treningshistorikk og tilpasser planen automatisk
- Tar hensyn til restitusjonsbehov, dagsform og kommende konkurranser
- Kan justere intensitet og volum basert på HRV, sovndata og subjektive mål
- Eksempler: Garmin Coach, TrainAsONE, PKRS.AI

**Skadepredikasjon:**
- Maskinlaeringsmodeller analyserer belastningsdata, bevegelsesedata og historiske skadedata
- Identifiserer utovere med forhøyet skaderisiko
- Gir tidlige varsler som muliggjor forebyggende tiltak
- Brukes av flere profesjonelle lag i fotball og andre idretter

**Automatisk videoanalyse:**
- AI kan gjenkjenne spillere, spore bevegelser og tagge hendelser automatisk
- Reduserer tiden som kreves for manuell videoanalyse betraktelig
- Kan identifisere taktiske monstre som mennesker overser
- Teknologien er fortsatt i utvikling, men forbedres raskt

**Personalisert ernaering:**
- AI-baserte apper analyserer treningsdata og gir individualiserte ernaeringsråd
- Tar hensyn til treningstype, intensitet, kroppsvekt og mål
- Kan beregne vaeskebehov basert på aktivitet og vaerforhold

**Begrensninger ved AI:**
- Algoritmer er bare så gode som dataene de trenes på
- Risiko for overilltillit til teknologien
- Kan ikke erstatte trenerens erfaring og relasjonskompetanse
- Personvernsproblematikk ved innsamling av helse- og treningsdata
- Mange AI-verktoy er ennå ikke tilstrekkelig validert vitenskapelig`
    },
    {
      id: 'tr3-6-5-example-ai',
      type: 'example',
      title: 'Eksempel: AI-basert treningsplanlegging',
      problem: 'En maratonloper bruker en AI-basert treningsapp som automatisk justerer ukeplanen basert på daglige data. Hvordan fungerer dette i praksis, og hvilke data bruker appen?',
      solution: `**Datagrunnlag:**
- Treningshistorikk: Distanse, tempo, puls og opplevd anstrengelse fra de siste månedene
- Daglige mål: HRV om morgenen, sovnkvalitet og varighet fra smartklokke
- Subjektive mål: Utoverens rapportering av tretthet, muskelomhet og motivasjon
- Vaerdata: Temperatur og luftfuktighet for kommende treningsdager
- Mål: Maratonlop om 12 uker med mål om å lope under 3 timer og 30 minutter

**Slik fungerer justeringen:**
1. Mandag morgen: HRV er lav (48 ms, normalt 62 ms), sovnscoren er 65/100
2. Appen reduserer tirsdagens planlagte intervalltrening fra 8x1000m til 6x1000m og senker tempoet med 5 sekunder per kilometer
3. Onsdag: HRV er tilbake til normalt. Appen opprettholder den planlagte langkjoringen
4. Fredag: Utoveren rapporterer vondt i leggen. Appen erstatter lordagens tempolop med en rolig alternativtrening (sykling)
5. Ukesluttanalyse: Appen viser at uken hadde 15 % lavere belastning enn planlagt og justerer neste uke for å kompensere gradvis

**Fordeler:**
- Reduserer risikoen for overbelastning
- Gjor treningsplanen dynamisk og responsiv
- Gir utoveren trygghet i at planen er tilpasset

**Begrensninger:**
- Appen kan ikke erstatte trenerens vurdering av tekniske og taktiske aspekter
- Subjektive data er avhengig av ærlig rapportering
- Algoritmen kan ta feil vurderinger i ukjente situasjoner`
    },
    {
      id: 'tr3-6-5-personvern',
      type: 'text',
      content: `## Personvern og etikk

Bruk av digitale verktoy i trening innebærer innsamling av store mengder personlige data, noe som reiser viktige spørsmål om personvern og etikk.

**Viktige spørsmål:**
- Hvem eier treningsdataene - utoveren, klubben eller app-leverandoren?
- Hvordan lagres og beskyttes sensitive helsedata?
- Kan treningsdata brukes til formål utoveren ikke har samtykket til?
- Bor unge utovere ha samme grad av overvåking som voksne profesjonelle?
- Hva skjer med dataene hvis utoveren bytter klubb?

**Anbefalinger:**
1. Sett deg inn i personvernpolicyen for utoverens apper og plattformer
2. Begrens datatilgang til de som trenger det for å gjore jobben sin
3. Gi utoveren innsyn i og kontroll over egne data
4. Vaer forsiktig med å dele data med tredjeparter
5. Ha særskilte retningslinjer for unge utovere
6. Slett data som ikke lenger er relevante

Trenere og idrettsledere har et ansvar for å sikre at teknologibruk ikke går på bekostning av utoverens rett til privatliv og personlig integritet.`
    },
    {
      id: 'tr3-6-5-exercise-block1',
      type: 'exercise',
      exercise: {
        id: 'tr3-6-5-ex1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva viser TSB (Training Stress Balance) i et Performance Management Chart?',
        options: [
          { id: 'a', text: 'Differansen mellom langsiktig og kortsiktig treningsbelastning, som indikerer treningsberedskap', isCorrect: true },
          { id: 'b', text: 'Utoverens maksimale hjertefrekvens', isCorrect: false },
          { id: 'c', text: 'Antall treningstimer per uke', isCorrect: false },
          { id: 'd', text: 'Kaloriforbruk under trening', isCorrect: false },
        ],
        solution: 'TSB beregnes som CTL (langsiktig treningsbelastning) minus ATL (kortsiktig treningsbelastning). En positiv TSB indikerer at utoveren er relativt uthvilt og klar for prestasjoner, mens en negativ TSB tyder på at treningsbelastningen har vaert hoyere enn det kroppen er vant til.',
      }
    },
    {
      id: 'tr3-6-5-exercise-block2',
      type: 'exercise',
      exercise: {
        id: 'tr3-6-5-ex2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken begrensning er viktigst å vaere klar over ved bruk av AI i treningsplanlegging?',
        options: [
          { id: 'a', text: 'AI kan ikke erstatte trenerens erfaring og relasjonskompetanse', isCorrect: true },
          { id: 'b', text: 'AI-apper fungerer bare med Apple-produkter', isCorrect: false },
          { id: 'c', text: 'AI gir alltid feil anbefalinger', isCorrect: false },
          { id: 'd', text: 'AI krever internettilgang for å fungere', isCorrect: false },
        ],
        solution: 'Selv om AI-systemer stadig blir bedre til å analysere treningsdata og gi anbefalinger, kan de ikke erstatte trenerens helhetlige vurdering, relasjonskompetanse og evne til å forstå utoverens individuelle situasjon. AI bor brukes som et supplement til, ikke en erstatning for, god trenervaering.',
      }
    },
  ],
  exercises: [
    {
      id: 'tr3-6-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre ulike typer treningsapper og forklar hvem som har mest nytte av hver type. Gi konkrete eksempler.',
      solution: '1) Loggings- og overvåkingsapper (f.eks. Garmin Connect): Best egnet for individuelle utovere som vil ha oversikt over treningshistorikk og trender. En loper kan se lopedata, pulsdata og sovnkvalitet samlet. 2) Treningsplanleggingsapper (f.eks. TrainingPeaks): Best egnet for utovere og trenere som folger strukturerte treningsplaner med periodisering. En syklist kan folge en plan mot et spesifikt ritt med daglige treningsforslag. 3) Sosiale treningsplattformer (f.eks. Strava): Best egnet for mosjonister og breddeuttovere som motiveres av sosialt fellesskap og konkurranse. Segmentkonkurranser og treningsutfordringer kan oke motivasjonen for regelmessig trening.',
    },
    {
      id: 'tr3-6-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva et Performance Management Chart (PMC) er, og beskriv hvordan en utholdenhetsutover kan bruke det til å planlegge en formtopp mot en viktig konkurranse.',
      solution: 'Et PMC viser tre kurver over tid: CTL (treningsform - langsiktig treningsbelastning), ATL (tretthet - kortsiktig treningsbelastning) og TSB (treningsberedskap - differansen mellom CTL og ATL). For å planlegge en formtopp: 1) Bygg CTL gradvis opp gjennom en treningsperiode på 8-12 uker med okende belastning. 2) ATL vil ligge over CTL i denne perioden, og TSB vil vaere negativ. 3) Ca. 10-14 dager for konkurransen starter nedtrappingsperioden: Reduser treningsvolumet med 40-60 % mens intensiteten opprettholdes. 4) ATL synker raskt mens CTL synker saktere. 5) TSB stiger mot null eller blir svakt positiv. 6) Når TSB er mellom 0 og +20 på konkurransedagen, er utoveren i sin formtopp: godt trent men uthvilt.',
    },
    {
      id: 'tr3-6-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft personvern og etiske utfordringer knyttet til bruk av treningsteknologi i idrettslag for unge utovere (under 18 år). Hvilke retningslinjer bor lagene folge?',
      solution: 'Etiske utfordringer: 1) Unge utovere kan oppleve overvåking som press og kontroll, noe som kan hemme idrettsglede. 2) Foreldre og foresatte har rett til innsyn i data som samles inn om barna deres. 3) Treningsdata kan brukes til uheldig sammenligning og rangering mellom spillere. 4) Unge utovere har begrenset evne til å gi informert samtykke. 5) Data kan misbrukes ved overgang mellom klubber. Anbefalte retningslinjer: 1) Innhent samtykke fra både utover og foresatte. 2) Forklar tydelig hva som samles inn og hvorfor. 3) Begrens datainnsamlingen til det som er nodvendig for utvikling og skadeforebygging. 4) Gi utoveren og foresatte tilgang til egne data. 5) Ikke bruk data til uttak eller seleksjon i barne- og ungdomsidrett. 6) Slett data når utoveren forlater laget. 7) Utnevn en dataansvarlig i klubben. 8) Folg Norges idrettsforbunds retningslinjer for bruk av teknologi i barne- og ungdomsidrett.',
    },
    {
      id: 'tr3-6-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Vurder hvordan kunstig intelligens kan endre trenerrollen i fremtiden. Diskuter både muligheter og trusler, og forklar hvilke kompetanser som vil bli viktigere for trenere.',
      solution: 'Muligheter: AI kan frigjore trenerens tid fra rutinemessig dataanalyse, gi mer presise treningsanbefalinger basert på store datamengder, identifisere skaderisiko for treneren rekker å se tegnene, og muliggjore mer individualisert trening i store grupper. Trusler: Overilltillit til teknologien kan redusere trenerens egen analytiske kompetanse. Utovere kan foretrekke AI-anbefalinger fremfor trenerens råd. Klubber kan redusere antall trenere hvis AI overtar planleggingsarbeidet. Relasjonen mellom trener og utover kan svekkes hvis kommunikasjonen går via apper. Kompetanser som blir viktigere: 1) Relasjonskompetanse - evnen til å bygge tillit og motivere. 2) Kritisk vurdering av data - forstå begrensningene i AI-anbefalinger. 3) Helhetlig vurdering - se utoverens totale situasjon, inkludert psykologiske og sosiale faktorer. 4) Digital kompetanse - forstå og bruke teknologien effektivt. 5) Etisk refleksjon - sikre at teknologibruk er i utoverens beste interesse. Konklusjon: AI vil ikke erstatte trenere, men trenere som bruker AI vil sannsynligvis utkonkurrere trenere som ikke gjor det.',
    },
  ],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const TRENING_3_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_3_6_1,
  CHAPTER_TRENING_3_6_2,
  CHAPTER_TRENING_3_6_3,
  CHAPTER_TRENING_3_6_4,
  CHAPTER_TRENING_3_6_5,
];
