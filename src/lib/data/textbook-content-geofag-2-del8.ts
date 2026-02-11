/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 2 VG3 - Del 8: Feltarbeid og naturfare
 *
 * Dekker LK20-kompetansemaal for geofag 2 (GEO02-01)
 * Delkapitler 8.1 - 8.5
 *
 * Kompetansemaal:
 * - gjennomfoere geofaglig feltarbeid knyttet til hav, atmosfaere eller kryosfaere,
 *   bearbeide data og presentere resultater
 * - vurdere risiko ved atmosfaeriske, oseanografiske og kryosfaeriske fenomener
 *   og drofte hvordan klimaendringer pavirker disse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Geofaglig feltarbeid
// ============================================================================

export const CHAPTER_GEOFAG_2_8_1: TextbookChapter = {
  id: 'geofag-2-8-1',
  courseId: 'geofag-2',
  chapterNumber: '8.1',
  title: 'Geofaglig feltarbeid',
  description: 'Planlegging, gjennomfoering og sikkerhet ved feltarbeid i atmosfaere, hav og kryosfaere.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjennomfoere geofaglig feltarbeid knyttet til hav, atmosfaere eller kryosfaere, bearbeide data og presentere resultater',
  ],
  content: [
    {
      id: 'geo2-8-1-intro',
      type: 'text',
      content: `# Geofaglig feltarbeid

Feltarbeid er en hjoeernesten i geofag. Det er gjennom direkte observasjoner og maalinger i naturen vi faar foerstehaaandskunnskap om prosesser i atmosfaeren, havet og kryosfaeren. God planlegging, riktig utstyr og systematisk datainnsamling er avgoerende for at feltarbeidet skal gi paalitelige resultater.

## Hvorfor feltarbeid?

I geofag arbeider vi med fenomener som foregaar i enorme skalaer - fra lokale vindmoenstre til globale havsirkulasjoner. Selv om modeller og satellittdata gir mye informasjon, er feltobservasjoner uunnvaerlige for aa:
- **Kalibrere** fjernmaalingsdata og modeller
- **Oppdage** lokale fenomener som ikke fanges opp av satelitter
- **Forstaa** prosesser gjennom direkte erfaring
- **Utvikle** nye hypoteser basert paa observasjoner`,
    },
    {
      id: 'geo2-8-1-def-feltarbeid',
      type: 'definition',
      title: 'Feltarbeid',
      content: 'Feltarbeid er systematisk datainnsamling og observasjon som foregaar ute i naturen, til forskjell fra laboratoriearbeid. I geofag kan feltarbeid omfatte maalinger av vaerparametre, havtemperatur, isstykkelse, snoedybde og andre geofysiske stoerelser.',
    },
    {
      id: 'geo2-8-1-planlegging',
      type: 'text',
      content: `## Planlegging av feltarbeid

Et vellykket feltarbeid krever grundig planlegging. Foer du drar ut i felt, maa du:

### 1. Formulere problemstilling
- Hva oeensker du aa undersoeeke?
- Hvilke data trenger du for aa besvare spoersmaalene?
- Hvordan skal du analysere dataene etterpaa?

### 2. Velge metoder og utstyr
- Hvilke instrumenter er noeendvendig?
- Er utstyret kalibrert og i god stand?
- Trenger du reserveutstyr?

### 3. Velge lokalitet og tidspunkt
- Er omraadet tilgjengelig og trygt?
- Passer vaerforholdene for maalingene?
- Hvor lenge maa du vaere i felt?

### 4. Risikovurdering og sikkerhet
- Hvilke farer finnes (skredfare, drukning, kulde)?
- Har du noedvendig sikkerhetsutstyr?
- Er det mobildekning, og hvem vet hvor du er?`,
    },
    {
      id: 'geo2-8-1-def-feltprotokoll',
      type: 'definition',
      title: 'Feltprotokoll',
      content: 'En feltprotokoll er et strukturert skjema for aa registrere observasjoner og maalinger i felt. Den skal inneholde dato, tid, posisjon (GPS), vaerforhold, maalemetode, maaleresultater og eventuelle kommentarer. God dokumentasjon gjoer det mulig aa reprodusere arbeidet.',
    },
    {
      id: 'geo2-8-1-example-plan',
      type: 'example',
      title: 'Planlegging av vaermaaling',
      problem: 'Du skal undersoeeke hvordan temperaturen varierer med hoeyden i et fjellomraade. Beskriv hvordan du planlegger feltarbeidet.',
      solution: `**Problemstilling:** Hvordan endres lufttemperaturen med hoeyden i et bestemt fjellomraade, og stemmer det med den teoretiske lapse rate paa ca. 0,65 °C per 100 m?

**Metode og utstyr:**
- Digitalt termometer med datalogging
- GPS for aa registrere posisjon og hoyde
- Hygrometer for relativ fuktighet
- Feltdagbok og protokollskjema

**Gjennomfoering:**
- Maal temperatur paa minst 5 ulike hoyder (f.eks. 200, 400, 600, 800, 1000 m o.h.)
- Paa hvert punkt: vent 5 minutter til termometeret stabiliserer seg
- Registrer tid, posisjon, hoyde, temperatur og vindforhold
- Gjennomfoer maalingene innenfor et kort tidsrom for aa minimere tidseffekt

**Analyse:** Plot temperatur mot hoyde og sammenlign med den teoretiske verdien.`,
    },
    {
      id: 'geo2-8-1-atmosfaerisk',
      type: 'text',
      content: `## Feltarbeid i atmosfaeren

Atmosfaerisk feltarbeid inneberer maalinger av vaerparametre. Vanlige maalinger inkluderer:

| Parameter | Instrument | Enhet |
|-----------|-----------|-------|
| Temperatur | Termometer | °C |
| Lufttrykk | Barometer | hPa |
| Fuktighet | Hygrometer | % RH |
| Vindstyrke | Anemometer | m/s |
| Vindretning | Vindfoeljer | Grader |
| Nedboer | Nedboeersmaaler | mm |
| Straaling | Pyranometer | W/m² |

### Tips for gode vaermaalinger
- Maal temperatur i skyggen, 2 m over bakken
- Plasser nedboeersmaaler paa aapent omraade, unna bygninger og treer
- Ta flere maalinger og beregn gjennomsnitt`,
    },
    {
      id: 'geo2-8-1-oseanografisk',
      type: 'text',
      content: `## Feltarbeid i havet

Oseanografisk feltarbeid kan gjennomfoeres fra land, brygge eller baat. Typiske maalinger:

- **Havtemperatur**: Med vanntemperaturmaaler paa ulike dyp
- **Salinitet**: Med salinometer eller refraktometer
- **Stroemninger**: Med stroemmaalere eller drivboyer
- **Boelger**: Observasjon av boelgehoyde og -periode
- **Tidevann**: Systematisk registrering av vannstand

### Sikkerhet ved feltarbeid i sjoe
- Bruk alltid flytevest ved arbeid naer vann
- Vaer oppmerksom paa tidevann og stroemforhold
- Sjekk vaervarselet, spesielt vindvarsel
- Arbeid aldri alene i umiddelbar naerhet av sjoe`,
    },
    {
      id: 'geo2-8-1-kryosfaerisk',
      type: 'text',
      content: `## Feltarbeid i kryosfaeren

Kryosfaerisk feltarbeid gjelder is, snoe og permafrost. Eksempler:

- **Snoedybde og snoetetthet**: Med snoesonde og snoeroer
- **Isstykkelse**: Med iskjerne eller radar
- **Brebevegelese**: Med GPS-maalinger over tid
- **Permafrosttemperatur**: Med temperaturlogger i borehoell
- **Snoeprofil**: Utgraving for aa studere snoelag og svake sjikt

### Farer i kryosfaeren
- **Snoskred** er den stoerste faren - alltid sjekk snoskredvarselet (varsom.no)
- **Brespalter** kan vaere skjult under snoe
- **Kulde** kan foere til forfrysninger og hypotermi
- **Elver fra bresmeltevann** kan vaere farlige aa krysse`,
    },
    {
      id: 'geo2-8-1-example-felt',
      type: 'example',
      title: 'Snoeprofil i felt',
      problem: 'Beskriv hvordan du lager et snoeprofil og hva du kan lese ut av det.',
      solution: `**Fremgangsmaate:**
1. Grav en grop ned til bakken (snoesjakt)
2. Glaett veggen med en spade
3. Maal snoedybden fra bakke til overflate
4. Identifiser ulike snoelag basert paa hardhet, kornform og tetthet
5. Maal temperatur paa ulike dyp med termometer
6. Test hvert lag med fingertesten (knyttneve = loes, finger = middels, blyant = hard)

**Hva snoeprofilen forteller:**
- **Svake sjikt** (dybderiim, overflateriim) som kan utloese skred
- **Temperaturgradienten** gjennom snoedekket
- **Snoeens alder og historie** basert paa lagdelingen
- **Snoestabilitet** - grunnlag for skredvurdering`,
    },
    // --- Oppsummering ---
    {
      id: 'geo2-8-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Feltarbeid er systematisk datainnsamling i naturen og er sentralt i geofag.
- God planlegging inkluderer problemstilling, metodevalg, lokalitet, tidspunkt og risikovurdering.
- En feltprotokoll sikrer systematisk dokumentasjon av alle maalinger.
- Atmosfaerisk feltarbeid omfatter maalinger av temperatur, trykk, fuktighet, vind og nedboer.
- Oseanografisk feltarbeid inkluderer temperatur, salinitet, stroemninger og boelger.
- Kryosfaerisk feltarbeid dekker snoe, is, breer og permafrost.
- Sikkerhet er avgoerende - alltid sjekk vaer- og skredvarsel, bruk sikkerhetsutstyr og arbeid aldri alene.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-8-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en feltprotokoll?',
      options: [
        { id: 'a', text: 'Et strukturert skjema for aa registrere observasjoner og maalinger i felt', isCorrect: true },
        { id: 'b', text: 'En type barometer brukt i vaerstasjoner', isCorrect: false },
        { id: 'c', text: 'En rapport som skrives etter at feltarbeidet er ferdig', isCorrect: false },
        { id: 'd', text: 'Et kart over feltomraadet', isCorrect: false },
      ],
      solution: 'En feltprotokoll er et strukturert skjema for systematisk registrering av observasjoner og maalinger. Den inneholder dato, tid, posisjon, vaerforhold og maaleresultater.',
    },
    {
      id: 'geo2-8-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor det er viktig aa ta flere maalinger av samme parameter i felt, i stedet for bare én maaling.',
      solution: 'Flere maalinger reduserer tilfeldig feil og gir mulighet for aa beregne gjennomsnitt og standardavvik. En enkelt maaling kan vaere pavirket av tilfeldige forstyrrelser (vindkast, instrumentfeil, avlesningsfeil). Ved aa ta flere maalinger kan vi vurdere paaliteligheten av dataene og identifisere eventuelle avvikende verdier (utliggere).',
    },
    {
      id: 'geo2-8-1-ex3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket instrument brukes for aa maale vindstyrke?',
      options: [
        { id: 'a', text: 'Anemometer', isCorrect: true },
        { id: 'b', text: 'Barometer', isCorrect: false },
        { id: 'c', text: 'Hygrometer', isCorrect: false },
        { id: 'd', text: 'Pyranometer', isCorrect: false },
      ],
      solution: 'Et anemometer maaler vindstyrke (vindhastighet), vanligvis i m/s. Et barometer maaler lufttrykk, et hygrometer maaler fuktighet, og et pyranometer maaler solstraaling.',
    },
    {
      id: 'geo2-8-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Du skal planlegge et feltarbeid for aa undersoeeke hvordan havtemperaturen varierer med dypet i en fjord. Lag en kort feltplan med problemstilling, utstyr, fremgangsmaate og sikkerhetstiltak.',
      solution: 'Problemstilling: Hvordan endres havtemperaturen med dypet i fjorden, og finnes det en tydelig termoklin? Utstyr: Temperaturmaaler med kabel for ulike dyp (CTD-sonde eller enkel temperaturlogger), GPS, baat, flytevester, feltdagbok. Fremgangsmaate: Maal temperatur paa 0, 5, 10, 20, 50 og 100 m dyp paa minst 3 stasjoner i fjorden. Registrer tid, posisjon og vaerforhold. Sikkerhet: Bruk flytevest, sjekk vaervarsel, informer noen om ruten, ha kommunikasjonsutstyr.',
    },
    {
      id: 'geo2-8-1-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den stoerste faren ved feltarbeid i kryosfaeren?',
      options: [
        { id: 'a', text: 'Snoskred', isCorrect: true },
        { id: 'b', text: 'Soelstraaling', isCorrect: false },
        { id: 'c', text: 'Hoey luftfuktighet', isCorrect: false },
        { id: 'd', text: 'Tordenveer', isCorrect: false },
      ],
      solution: 'Snoskred er den stoerste faren ved feltarbeid i snoe- og isdekte omraader. Skred kan utloeses av vindbelastning, nysnoe, temperaturendringer og menneskelig belastning. Alltid sjekk snoskredvarselet paa varsom.no foer feltarbeid i fjellet.',
    },
    // --- Samleoppgaver ---
    {
      id: 'geo2-8-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign feltarbeid i atmosfaeren, havet og kryosfaeren. Beskriv for hvert omraade: a) to typiske maalinger, b) ett viktig sikkerhetstiltak, og c) ett eksempel paa utstyr.',
      solution: 'Atmosfaeren: a) Temperaturmaaling og vindmaaling. b) Vaere oppmerksom paa lynfare ved tordenveer. c) Anemometer for vindstyrke. Havet: a) Havtemperatur paa ulike dyp og salinitet. b) Alltid bruke flytevest og sjekke tidevanntabeller. c) CTD-sonde for temperatur, salinitet og dyp. Kryosfaeren: a) Snoedybde og snoeprofilanalyse. b) Sjekke snoskredvarselet og ha skredutstyr (sender/mottaker, sonde, spade). c) Snoeesonde for aa maale snoedybde.',
    },
    {
      id: 'geo2-8-1-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Droeft hvorfor direkte feltobservasjoner fortsatt er viktige i en tid med avanserte satelitter og datamodeller.',
      solution: 'Satelitter dekker store omraader, men har begrenset opplosning og kan ikke maale alle parametre direkte (f.eks. snoeens indre lagdeling). Modeller er forenklinger av virkeligheten og maa valideres mot reelle data. Feltobservasjoner gir: 1) Grunndata (ground truth) for kalibrering av fjernmaaling. 2) Lokal detaljkunnskap som satelitter ikke fanger. 3) Mulighet for aa oppdage nye fenomener. 4) Direkte erfaring som gir dypere forstaaelse. Ideelt kombinerer vi alle tre: satelittdata for oversikt, modeller for fremskrivning, og feltdata for validering og detaljforstaelse.',
    },
  ],
};

// ============================================================================
// Kapittel 8.2: Databehandling og analyse
// ============================================================================

export const CHAPTER_GEOFAG_2_8_2: TextbookChapter = {
  id: 'geofag-2-8-2',
  courseId: 'geofag-2',
  chapterNumber: '8.2',
  title: 'Databehandling og analyse',
  description: 'Bearbeiding av feltdata med statistikk, GIS, grafiske fremstillinger og feilanalyse.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjennomfoere geofaglig feltarbeid knyttet til hav, atmosfaere eller kryosfaere, bearbeide data og presentere resultater',
  ],
  content: [
    {
      id: 'geo2-8-2-intro',
      type: 'text',
      content: `# Databehandling og analyse

Etter feltarbeidet sitter du igjen med raaadata - tall, observasjoner og notater. Disse maa bearbeides, kvalitetssikres og analyseres foer de kan gi meningsfulle resultater. God databehandling er like viktig som god datainnsamling.

## Fra raaadata til resultater

Prosessen fra felt til ferdig resultat foelger vanligvis disse stegene:

1. **Dataregistrering** - overfoer data fra feltprotokoll til digitalt format
2. **Kvalitetskontroll** - sjekk for feil, mangler og utliggere
3. **Bearbeiding** - beregne gjennomsnitt, korrigere for feilkilder
4. **Analyse** - statistiske tester, trendanalyse, sammenligninger
5. **Visualisering** - grafer, kart og tabeller
6. **Tolkning** - hva betyr resultatene i geofaglig sammenheng?`,
    },
    {
      id: 'geo2-8-2-def-kvalitetskontroll',
      type: 'definition',
      title: 'Kvalitetskontroll av data',
      content: 'Kvalitetskontroll (QC) er en systematisk gjennomgang av data for aa identifisere og handtere feil, manglende verdier og utliggere. Maalinger som er fysisk umulige (f.eks. negativ vindstyrke) fjernes, mens mistenkelige verdier flagges for naermere undersoeekelse.',
    },
    {
      id: 'geo2-8-2-statistikk',
      type: 'text',
      content: `## Statistisk analyse av feltdata

### Beskrivende statistikk

Naar du har samlet inn data, starter du med aa beregne grunnleggende statistikk:

- **Gjennomsnitt** ($\\bar{x}$): Sentralmaal som viser typisk verdi
- **Median**: Midtverdien naar data sorteres - robust mot utliggere
- **Standardavvik** ($s$): Maal paa spredningen i datasettet
- **Minimum og maksimum**: Ytterverdiene i datasettet
- **Antall maalinger** ($n$): Stoerre $n$ gir sikrere resultater

### Korrelasjon

Naar vi vil undersoeeke sammenhengen mellom to variabler (f.eks. hoyde og temperatur), beregner vi **korrelasjonskoeffisienten** $r$:
- $r = 1$: Perfekt positiv sammenheng
- $r = -1$: Perfekt negativ sammenheng
- $r = 0$: Ingen lineaer sammenheng`,
    },
    {
      id: 'geo2-8-2-example-statistikk',
      type: 'example',
      title: 'Beregning av gjennomsnitt og standardavvik',
      problem: 'Du har maalt temperaturen paa fem stasjoner: 12,3 °C, 11,8 °C, 12,1 °C, 12,5 °C og 11,9 °C. Beregn gjennomsnitt og standardavvik.',
      solution: `**Gjennomsnitt:**
$\\bar{x} = \\frac{12{,}3 + 11{,}8 + 12{,}1 + 12{,}5 + 11{,}9}{5} = \\frac{60{,}6}{5} = 12{,}12$ °C

**Standardavvik:**
Avvik fra gjennomsnitt: 0,18; -0,32; -0,02; 0,38; -0,22

$s = \\sqrt{\\frac{(0{,}18)^2 + (-0{,}32)^2 + (-0{,}02)^2 + (0{,}38)^2 + (-0{,}22)^2}{5-1}}$

$s = \\sqrt{\\frac{0{,}0324 + 0{,}1024 + 0{,}0004 + 0{,}1444 + 0{,}0484}{4}} = \\sqrt{\\frac{0{,}328}{4}} = \\sqrt{0{,}082} \\approx 0{,}29$ °C

**Resultat:** Gjennomsnittstemperaturen er $12{,}12 \\pm 0{,}29$ °C.`,
    },
    {
      id: 'geo2-8-2-def-gis',
      type: 'definition',
      title: 'GIS (Geografisk informasjonssystem)',
      content: 'GIS er et dataverktoy for aa samle inn, lagre, analysere og presentere geografiske data. I geofag bruker vi GIS til aa lage kart over maaleresultater, analysere romlige moenstre og kombinere ulike datasett (f.eks. hoeydedata med temperaturmaalinger).',
    },
    {
      id: 'geo2-8-2-visualisering',
      type: 'text',
      content: `## Grafisk fremstilling

Riktig diagramtype avhenger av hva du vil vise:

| Diagramtype | Bruksomraade | Eksempel |
|-------------|-------------|----------|
| Linjediagram | Endring over tid | Temperaturutvikling gjennom et doegn |
| Spredningsdiagram | Sammenheng mellom to variabler | Temperatur vs. hoyde |
| Soylediagram | Sammenligning av kategorier | Nedboer per maaned |
| Kart med fargeskala | Romlig fordeling | Havtemperatur i ulike omraader |
| Vindrose | Vindretning og -styrke | Dominerende vindretninger |
| Vertikalprofil | Endring med dyp/hoyde | Temperaturprofil i havet |

### Gode grafer
- Tydelige aksetitler med enheter
- Forklarende overskrift
- Passende skala som viser variasjon i data
- Tegnforklaring naar det er flere dataserier`,
    },
    {
      id: 'geo2-8-2-example-graf',
      type: 'example',
      title: 'Velge riktig diagramtype',
      problem: 'Du har maalt havtemperaturen paa 0, 10, 25, 50 og 100 meters dyp. Hvilken diagramtype boer du bruke, og hvordan setter du opp grafen?',
      solution: `**Diagramtype:** Vertikalprofil (linjediagram med dyp paa y-aksen)

**Oppsett:**
- **x-aksen**: Temperatur (°C) - oekende mot hoeyre
- **y-aksen**: Dyp (m) - oekende nedover (0 m oeverst, 100 m nederst)
- Forbind maaleepunktene med linjer
- Marker hvert maalepunkt tydelig

**Hvorfor?** Ved aa sette dypet paa y-aksen med 0 oeverst, faar grafen en intuitiv orientering som gjenspeiler virkeligheten. En eventuell termoklin (sprangsjikt) vil vises som et bratt stykke paa kurven.`,
    },
    {
      id: 'geo2-8-2-feilanalyse',
      type: 'text',
      content: `## Feilanalyse

Alle maalinger har usikkerhet. I en vitenskapelig rapport maa du drofte mulige feilkilder:

### Systematiske feil
Feil som pavirker alle maalinger i samme retning:
- Ukalibrert instrument
- Feil plassering av maaler (f.eks. termometer i sol)
- Konsekvent avlesningsfeil

### Tilfeldige feil
Feil som varierer tilfeldig fra maaling til maaling:
- Naturlig variasjon (vindkast, boelger)
- Avlesningsusikkerhet
- Instrumentstoey

### Hvordan haandtere feil
- Rapporter usikkerhet: $12{,}1 \\pm 0{,}3$ °C
- Droeft hvilke feilkilder som er stoerst
- Vurder om feilene pavirker konklusjonene
- Forklar hva du ville gjort annerledes neste gang`,
    },
    {
      id: 'geo2-8-2-def-usikkerhet',
      type: 'definition',
      title: 'Maaleusikkerhet',
      content: 'Maaleusikkerhet er et maal paa hvor stor spredning vi kan forvente i gjentatte maalinger av samme stoerrelse. Den uttrykkes ofte som standardavvik eller konfidensintervall, og angis sammen med resultatet (f.eks. 15,2 +/- 0,4 °C).',
    },
    // --- Oppsummering ---
    {
      id: 'geo2-8-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Databehandling foelger stegene: registrering, kvalitetskontroll, bearbeiding, analyse, visualisering og tolkning.
- Beskrivende statistikk (gjennomsnitt, median, standardavvik) gir oversikt over datasettets egenskaper.
- Korrelasjon brukes for aa undersoeeke sammenhenger mellom variabler.
- GIS er et viktig verktoy for romlig analyse og kartfremstilling.
- Valg av diagramtype avhenger av hva dataene skal vise (tid, sammenheng, fordeling, rom).
- Systematiske feil pavirker alle maalinger likt, mens tilfeldige feil varierer fra maaling til maaling.
- Usikkerhet skal alltid rapporteres sammen med resultater.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-8-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er foerste steg i databehandling etter feltarbeid?',
      options: [
        { id: 'a', text: 'Overfoere data fra feltprotokoll til digitalt format og kvalitetskontrollere', isCorrect: true },
        { id: 'b', text: 'Lage grafer og diagrammer', isCorrect: false },
        { id: 'c', text: 'Beregne korrelasjon mellom alle variabler', isCorrect: false },
        { id: 'd', text: 'Skrive konklusjon', isCorrect: false },
      ],
      solution: 'Foerst maa raadata overfoeres digitalt og kvalitetskontrolleres for feil og mangler, foer man gaar videre med analyse og visualisering.',
    },
    {
      id: 'geo2-8-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom systematiske og tilfeldige feil, og gi et eksempel paa hver fra geofaglig feltarbeid.',
      solution: 'Systematiske feil pavirker alle maalinger i samme retning og gir konsekvent for hoey eller for lav verdi. Eksempel: Et termometer som viser 0,5 °C for mye pga. daarlig kalibrering. Tilfeldige feil varierer uforutsigbart mellom maalinger. Eksempel: Vindkast som gir varierende avlesninger paa et anemometer. Systematiske feil kan korrigeres hvis de oppdages, mens tilfeldige feil reduseres ved aa ta flere maalinger.',
    },
    {
      id: 'geo2-8-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Du har maalt havtemperatur paa ulike dyp. Hvilken diagramtype egner seg best for aa fremstille resultatene?',
      options: [
        { id: 'a', text: 'Vertikalprofil (linjediagram med dyp paa y-aksen)', isCorrect: true },
        { id: 'b', text: 'Kakediagram', isCorrect: false },
        { id: 'c', text: 'Soylediagram', isCorrect: false },
        { id: 'd', text: 'Vindrose', isCorrect: false },
      ],
      solution: 'En vertikalprofil med dyp paa y-aksen (oekende nedover) og temperatur paa x-aksen gir en intuitiv fremstilling av hvordan temperaturen endres med dypet. Eventuell termoklin vises som et bratt parti.',
    },
    {
      id: 'geo2-8-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva betyr det at korrelasjonskoeffisienten mellom hoyde og temperatur er $r = -0{,}95$?',
      solution: 'En korrelasjonskoeffisient paa r = -0,95 betyr en sterk negativ lineaer sammenheng mellom hoyde og temperatur. Naar hoeyden oeker, synker temperaturen, og sammenhengen er naesten perfekt lineaer. Verdien naer -1 indikerer at hoyde forklarer det meste av variasjonen i temperatur. Dette stemmer godt med den kjente lapse rate i atmosfaeren.',
    },
    {
      id: 'geo2-8-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva staar GIS for?',
      options: [
        { id: 'a', text: 'Geografisk informasjonssystem', isCorrect: true },
        { id: 'b', text: 'Global informasjonssentral', isCorrect: false },
        { id: 'c', text: 'Geofysisk inspeksjonssystem', isCorrect: false },
        { id: 'd', text: 'Generell innsamlingsstatistikk', isCorrect: false },
      ],
      solution: 'GIS staar for Geografisk informasjonssystem. Det er et dataverktoy for aa samle inn, lagre, analysere og presentere geografiske data paa kart.',
    },
    // --- Samleoppgaver ---
    {
      id: 'geo2-8-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du har maalt nedboeersmaengden paa fem stasjoner i et omraade: 23, 31, 27, 112 og 29 mm. a) Beregn gjennomsnitt og median. b) Hvilken verdi gir best bilde av typisk nedboer, og hvorfor? c) Hva kan den hoye verdien (112 mm) skyldes?',
      solution: 'a) Gjennomsnitt: (23+31+27+112+29)/5 = 222/5 = 44,4 mm. Sortert: 23, 27, 29, 31, 112. Median = 29 mm. b) Medianen (29 mm) gir best bilde av typisk nedboer, fordi den ikke pavirkes av den ekstreme verdien 112 mm. Gjennomsnittet dras opp av utliggeren og gir et misvisende hoyt inntrykk. c) Den hoye verdien kan skyldes en lokal regnbyge, feil i maaleren (f.eks. tilstoppet maaler som toemmes), feil avlesning, eller at stasjonen ligger i et omraade med orografisk forsterket nedboer (paalandsvind mot fjellside).',
    },
    {
      id: 'geo2-8-2-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv hvordan du ville presentert resultatene fra et feltarbeid der du har maalt temperatur og vindstyrke gjennom et heelt doegn (24 timer) paa en vaerstasjon. Hvilke grafer ville du laget, og hva ville du droeftet?',
      solution: 'Grafer: 1) Linjediagram med temperatur (°C) paa y-aksen og tid (klokketimer) paa x-aksen - viser doegnvariasjon. 2) Linjediagram med vindstyrke (m/s) mot tid - viser vindvariasjoner. 3) Eventuelt et spredningsdiagram med temperatur mot vindstyrke for aa se om det er sammenheng. Droefting: Forventet doegngang i temperatur (kaldest natt/tidlig morgen, varmest ettermiddag). Eventuell sammenheng mellom vind og temperatur (f.eks. paalandsvind som gir mildt veer). Feilkilder som solpavirkning av termometeret, loe-effekt bak bygninger. Sammenligning med meteorologiske normalverdier for omraadet og aarstiden.',
    },
  ],
};

// ============================================================================
// Kapittel 8.3: Naturfare fra atmosfaeren
// ============================================================================

export const CHAPTER_GEOFAG_2_8_3: TextbookChapter = {
  id: 'geofag-2-8-3',
  courseId: 'geofag-2',
  chapterNumber: '8.3',
  title: 'Naturfare fra atmosfaeren',
  description: 'Stormer, flom, toerke, heteboelger og risikovurdering knyttet til atmosfaeriske fenomener.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere risiko ved atmosfaeriske, oseanografiske og kryosfaeriske fenomener og drofte hvordan klimaendringer pavirker disse',
  ],
  content: [
    {
      id: 'geo2-8-3-intro',
      type: 'text',
      content: `# Naturfare fra atmosfaeren

Atmosfaeren er drivkraften bak mange av de mest oedeleggende naturfarene vi opplever. Stormer, flom, toerke og heteboelger paavirker mennesker og samfunn over hele verden. I Norge er det saerlig ekstremvaer som kraftige stormer og intens nedboer som utgoer den stoerste atmosfaeriske naturfaren.

## Naturfare og risiko

Naturfare er et naturlig fenomen som kan utgoere en trussel mot mennesker, infrastruktur eller miljoeet. Det er viktig aa skille mellom:

- **Fare (hazard)**: Det naturlige fenomenet i seg selv (f.eks. storm)
- **Saarbarhet (vulnerability)**: Hvor utsatt samfunnet er for faren
- **Risiko**: Sannsynlighet for at faren intreffar, ganget med konsekvensene`,
    },
    {
      id: 'geo2-8-3-def-naturfare',
      type: 'definition',
      title: 'Naturfare',
      content: 'Naturfare er et naturlig fenomen eller en prosess som kan foere til skade paa mennesker, eiendom eller miljoeet. Atmosfaeriske naturfarer inkluderer stormer, ekstrem nedboer, flom, toerke, heteboelger, lyn og hagl.',
    },
    {
      id: 'geo2-8-3-stormer',
      type: 'text',
      content: `## Stormer

Stormer er kraftige lavtrykk med sterk vind. I Norge er det saerlig ekstratropiske stormer (lavtrykk) som paavirker oss, mens tropiske omraader rammes av orkaner og tyfoner.

### Beaufort-skalaen for vindstyrke

| Beaufort | Betegnelse | m/s | Virkning |
|----------|------------|-----|----------|
| 8 | Stiv kuling | 17-20 | Greiner brekker |
| 9 | Sterk kuling | 20-24 | Takstein loesner |
| 10 | Full storm | 24-28 | Treer rykkes opp |
| 11 | Sterk storm | 28-32 | Stoere oedeleggelser |
| 12 | Orkan | > 32 | Katastrofale skader |

### Stormskader i Norge
- **Vindskader**: Tak, treer, kraftlinjer
- **Boelgeskader**: Erosjon langs kysten, skader paa havner
- **Stormflo**: Hoey vannstand drevet av vind og lavtrykk
- **Stroembrudd**: Treer som faller over kraftlinjer`,
    },
    {
      id: 'geo2-8-3-example-storm',
      type: 'example',
      title: 'Nyttaarsurkanen 1992',
      problem: 'Beskriv Nyttaarsurkanen 1992 og hvilke konsekvenser den hadde.',
      solution: `**Nyttaarsurkanen 1. januar 1992:**

- Et kraftig lavtrykk som traff Nordvestlandet med orkan styrke
- Vindkast paa over 60 m/s ble registrert
- Stoerste naturkatastrofe i Norge i moderne tid maalt i oekonomisk skade

**Konsekvenser:**
- Materielle skader for over 2 milliarder kroner
- Mange boliger og naeringsbygg skadet
- Store omraader med skog ble lagt ned
- Langvarige stroembrudd
- Infrastruktur som veier og broer skadet

**Laerdommer:**
- Behovet for bedre varslingssystemer
- Strengere byggtekniske krav i vindeutsatte omraader
- Viktigheten av beredskapsplaner i kommunene`,
    },
    {
      id: 'geo2-8-3-flom',
      type: 'text',
      content: `## Flom

Flom oppstaar naar vannmengden i elver og bekker overstiger kapasiteten i elveloeepet. Det finnes flere typer flom:

### Typer flom
- **Snoesmelteflom**: Vaarflom naar snoeen smelter raskt - vanlig i norske elver
- **Regnflom**: Langvarig eller intens nedboer fyller vassdragene
- **Styrtflom**: Plutselig, intens nedboer i bratt terreng - svaret farlig
- **Joekulhlaup**: Plutselig flom fra bredemt sjoe (mer i kap. 8.4)

### Flomrisiko i Norge
- NVE (Norges vassdrags- og energidirektorat) kartlegger flomutsatte omraader
- Flomsonekart viser omraader som oversvoemmes ved ulike gjentaksintervaller
- 200-aarsflom brukes som dimensjonerende hendelse for ny bebyggelse`,
    },
    {
      id: 'geo2-8-3-def-gjentaksintervall',
      type: 'definition',
      title: 'Gjentaksintervall',
      content: 'Gjentaksintervall angir hvor sjelden en hendelse av en gitt stoerrelse forventes aa inntreffe. En 200-aarsflom har statistisk sett 0,5 % sannsynlighet for aa inntreffe hvert aar. Det betyr ikke at det gaar 200 aar mellom hver gang - det er et statistisk maal.',
    },
    {
      id: 'geo2-8-3-toerke-hete',
      type: 'text',
      content: `## Toerke og heteboelger

### Toerke
Toerke er en periode med betydelig mindre nedboer enn normalt. Konsekvenser:
- Vannmangel for landbruk og drikkevann
- Oekt skogbrannfare
- Lav vannfoering i elver som paavirker kraftproduksjon
- Oekologiske skader paa vegetation og dyreliv

### Heteboelger
En heteboelge er en periode med unormalt hoey temperatur. Defineres i Norge som minst tre sammenhengende dager med maksimumstemperatur over 28 °C.

**Helserisiko:**
- Heteslag og uttoerrking, saerlig for eldre og kronisk syke
- Heteboelgen i Europa 2003 foraarsaket over 70 000 doedsfall

### Klimaendringer og ekstremvaer
Menneskeskapte klimaendringer forventes aa gi:
- Kraftigere og hyppigere styrtregn
- Flere og mer intense heteboelger
- Mer ekstrem toerke i noen regioner
- Sterkere stormer i visse omraader`,
    },
    {
      id: 'geo2-8-3-example-klimaeffekt',
      type: 'example',
      title: 'Klimaendringer og flomrisiko i Norge',
      problem: 'Forklar hvordan klimaendringer kan pavirke flomrisikoen i Norge.',
      solution: `**Oekt flomrisiko pga. klimaendringer:**

1. **Mer nedbor**: Klimamodeller viser 5-30 % okning i aarlig nedboer i Norge
2. **Mer intens nedboer**: Kraftigere enkeltbyger gir oekt risiko for styrtflom
3. **Hoeyere snoegraense**: Stoerre arealer bidrar til avrenning ved regn
4. **Regnflom erstatter snoemelteflom**: Paa Vestlandet og i Nord-Norge
5. **Endret sesong**: Vaarflommen kan komme tidligere

**Redusert flomrisiko enkelte steder:**
- Mindre snoemelteflom i lavlandet pga. mindre snoe
- Men dette oppveies av oekt regnflom

**Tilpasning:**
- Oppdatere flomsonekart med klimaprojeksjoner
- Dimensjonere infrastruktur for stoerre vannmengder
- Bedre dreneringssystemer i byer
- Naturbaserte loesninger som aapne flomveier`,
    },
    // --- Oppsummering ---
    {
      id: 'geo2-8-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Naturfare er naturlige fenomener som kan true mennesker og samfunn. Risiko = fare x saarbarhet.
- Stormer er kraftige lavtrykk med sterk vind som kan foraarsakke vindskader, stormflo og stroembrudd.
- Flom oppstaar naar vannmengden overskrider kapasiteten i vassdrag, og deles inn i snoesmelteflom, regnflom og styrtflom.
- Gjentaksintervall angir statistisk hyppighet av en hendelse (f.eks. 200-aarsflom = 0,5 % per aar).
- Toerke og heteboelger er alvorlige naturfarer som paavirker helse, landbruk og oekologi.
- Klimaendringer forventes aa gi hyppigere og kraftigere ekstremvaer, inkludert mer styrtregn, flere heteboelger og endrede flommoenstre.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-8-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom naturfare og risiko?',
      options: [
        { id: 'a', text: 'Naturfare er fenomenet, risiko inkluderer ogsaa saarbarhet og konsekvenser', isCorrect: true },
        { id: 'b', text: 'Naturfare og risiko betyr det samme', isCorrect: false },
        { id: 'c', text: 'Risiko er bare sannsynligheten for at noe skjer', isCorrect: false },
        { id: 'd', text: 'Naturfare er alltid stoerre enn risiko', isCorrect: false },
      ],
      solution: 'Naturfare er det naturlige fenomenet i seg selv (f.eks. en storm). Risiko tar i tillegg hensyn til saarbarhet og konsekvenser. En storm over ubefolket hav er en fare, men gir lav risiko. Samme storm over en storby gir hoey risiko fordi saarbarheten er stor.',
    },
    {
      id: 'geo2-8-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva et gjentaksintervall paa 200 aar betyr. Betyr det at en slik hendelse kun skjer hvert 200. aar?',
      solution: 'Et gjentaksintervall paa 200 aar betyr at hendelsen statistisk sett har 0,5 % sannsynlighet for aa inntreffe hvert aar (1/200 = 0,005). Det betyr IKKE at det gaar noyaktig 200 aar mellom hver gang. To 200-aarshendelser kan i prinsippet inntreffe i to paafoeelgende aar. Over en periode paa 200 aar er det ca. 63 % sannsynlighet for at minst én slik hendelse inntreffer.',
    },
    {
      id: 'geo2-8-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type flom er mest vanlig som vaarflom i norske elver?',
      options: [
        { id: 'a', text: 'Snoesmelteflom', isCorrect: true },
        { id: 'b', text: 'Styrtflom fra kraftig regnveer', isCorrect: false },
        { id: 'c', text: 'Flom fra bredemt sjoe', isCorrect: false },
        { id: 'd', text: 'Tidevannsdrevet flom', isCorrect: false },
      ],
      solution: 'I Norge er snoesmelteflom den klassiske vaarflommen. Naar snoe- og issmeltingen skjer raskt, gjerne i kombinasjon med regn, kan elvene gaa over sine bredder.',
    },
    {
      id: 'geo2-8-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre konsekvenser av en alvorlig heteboelge for befolkningen.',
      solution: 'Tre konsekvenser: 1) Helserisiko - heteslag, uttoerrking og oekt doeedelighet, saerlig blant eldre, barn og kronisk syke. Heteboelgen i Europa 2003 foraarsaket over 70 000 doedsfall. 2) Oekt skogbrannfare - toerr vegetasjon antenner lettere, og branner sprer seg raskere. Store omraader med skog og bebyggelse kan oedelegges. 3) Belastning paa infrastruktur - oekt energibruk til kjoeling, lavere vannstand i elver som paavirker kraftproduksjon, asfaltveger kan deformeres, og jernbaneskinner kan boye seg.',
    },
    {
      id: 'geo2-8-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva definerer full storm paa Beaufort-skalaen?',
      options: [
        { id: 'a', text: 'Vindstyrke 24-28 m/s (Beaufort 10)', isCorrect: true },
        { id: 'b', text: 'Vindstyrke over 32 m/s (Beaufort 12)', isCorrect: false },
        { id: 'c', text: 'Vindstyrke 17-20 m/s (Beaufort 8)', isCorrect: false },
        { id: 'd', text: 'Vindstyrke 10-14 m/s (Beaufort 6)', isCorrect: false },
      ],
      solution: 'Full storm er Beaufort 10, med vindstyrke 24-28 m/s. Treer kan rykkes opp med rot. Beaufort 12 (over 32 m/s) er orkan styrke.',
    },
    // --- Samleoppgaver ---
    {
      id: 'geo2-8-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Droeft hvordan klimaendringer kan pavirke hyppigheten og styrken av atmosfaeriske naturfarer i Norge de neste 50 aarene. Bruk minst tre ulike typer naturfarer i svaret.',
      solution: 'Klimaendringer forventes aa pavirke flere atmosfaeriske naturfarer i Norge: 1) FLOM: Mer intens nedboer gir oekt risiko for styrtflom, saerlig paa Vestlandet og i Nord-Norge. Vaarflommen kan bli mindre i lavlandet (mindre snoe), men regnflom blir hyppigere. 2) STORMER: Mer usikkert, men modeller antyder sterkere hoststormer langs kysten. Oekt havnivaa forsterker effekten av stormflo. 3) TOERKE: Lengre varme perioder om sommeren kan gi oekt toerkerisiko paa Oestlandet, med konsekvenser for landbruk og skogbrannfare. 4) STYRTREGN: Varmere atmosfaere holder mer fuktighet (ca. 7 % mer per grad oppvarming), noe som gir kraftigere enkeltbyger. Samlet sett maa Norge tilpasse infrastruktur, arealplanlegging og beredskap til et klima med mer ekstremvaer.',
    },
    {
      id: 'geo2-8-3-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et kystsamfunn vurderer aa bygge nye boliger i et omraade som ifoeelge flomsonekart kan rammes av 200-aarsflom. Droeft argumenter for og mot utbygging, og forklar hvilke tiltak som eventuelt kan redusere risikoen.',
      solution: 'Argumenter FOR utbygging: Mangel paa tomter andre steder, oekonomisk utvikling, statistisk lav sannsynlighet per aar (0,5 %). Argumenter MOT: Klimaendringer kan gjore 200-aarsflom hyppigere, store oekonomiske tap ved flom, fare for menneskeliv, forsikringskostnader. Risikoreduserende tiltak: 1) Bygge med flomsikker grunnmur (heve gulvnivaa over beregnet vannstand). 2) Etablere flomvoller eller flomveier. 3) Unngaa kjellere. 4) Soerrge for gode dreneringssystemer. 5) Lage evakueringsplaner og varslingssystemer. 6) Regulere arealbruk slik at de mest utsatte sonene brukes til friareal, ikke bolig. Konklusjon: Forsiktighets-prinsippet tilsier at man boer unngaa utbygging i flomutsatte omraader med mindre det er tungtveiende grunner og effektive tiltak.',
    },
  ],
};

// ============================================================================
// Kapittel 8.4: Naturfare fra hav og kryosfaere
// ============================================================================

export const CHAPTER_GEOFAG_2_8_4: TextbookChapter = {
  id: 'geofag-2-8-4',
  courseId: 'geofag-2',
  chapterNumber: '8.4',
  title: 'Naturfare fra hav og kryosfaere',
  description: 'Stormflo, tsunami, snoskred, breflom (joekulhlaup), skred og farer fra is og hav.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere risiko ved atmosfaeriske, oseanografiske og kryosfaeriske fenomener og drofte hvordan klimaendringer pavirker disse',
  ],
  content: [
    {
      id: 'geo2-8-4-intro',
      type: 'text',
      content: `# Naturfare fra hav og kryosfaere

Havet og kryosfaeren er kilder til noen av de mest kraftfulle og farlige naturhendelene vi kjenner. Stormflo, tsunami, snoskred og breflom kan ramme med enorm kraft og gi katastrofale konsekvenser. Med et endret klima endres ogsaa risikobildet for mange av disse naturfaerene.

## Oseanografiske naturfarer

Havrelaterte farer pavirker kystbefolkningen direkte og kan forstyrre skipsfart, fiskeri og kystinfrastruktur.`,
    },
    {
      id: 'geo2-8-4-def-stormflo',
      type: 'definition',
      title: 'Stormflo',
      content: 'Stormflo er en midlertidig heving av havnivaaet ut over normal tidevannsvariasjon, foraarsaket av lavt lufttrykk og sterk paalandsvind. Stormflo er saerlig farlig naar den sammenfaller med springflo (ekstra hoey tidevannstand).',
    },
    {
      id: 'geo2-8-4-stormflo',
      type: 'text',
      content: `## Stormflo

Stormflo oppstaar naar to faktorer virker sammen:
- **Lavt lufttrykk** lofter havoverflaten (ca. 1 cm per hPa trykkfall)
- **Sterk paalandsvind** presser vannet mot land

### Stormflo i Norge
- Vestlandet og Nord-Norge er mest utsatt
- Kan gi vannstand 1-2 meter over normalt tidevann
- Forverres av hoye boelger som slaar over kaier og moloer
- Kartverket og MET overvaker og varsler stormflo

### Konsekvenser
- Oversvoemming av havner, kaier og lavtliggende bebyggelse
- Erosjon av strender og kysten
- Skader paa infrastruktur (veier, broer, kaianlegg)
- Saltvanninntrenging i ferskvannskilder`,
    },
    {
      id: 'geo2-8-4-tsunami',
      type: 'text',
      content: `## Tsunami

En tsunami er en langperiodisk boelge utloest av en plutselig forflytning av store vannmasser. Aarsaker:

- **Undersjoeiske jordskjelv** (vanligste aarsak globalt)
- **Undersjoeiske skred** (viktigste aarsak i norske farvann)
- **Vulkanutbrudd** (f.eks. Krakatau 1883)
- **Meteorittnedslag** (ekstremt sjelden)

### Tsunami i norsk historie
Den stoerste tsunamien i norsk historie var **Storegga-skredet** for ca. 8200 aar siden. Et enormt undersjoeisk skred utenfor Moerekysten utloeste en tsunami paa opptil 10-12 meter langs norskekysten.

### Kjennetegn
- Lav boelgehoyde paa aapent hav (under 1 m), men svarer lang boelgelengde
- Oeker kraftig i hoyde naar den naar grunt vann
- Kan reise over hele hav med hastigheter paa 500-800 km/t`,
    },
    {
      id: 'geo2-8-4-example-stormflo-havnivaa',
      type: 'example',
      title: 'Stormflo og havnivaaastigning',
      problem: 'Forklar hvordan havnivaaastigning forsterker konsekvensene av stormflo.',
      solution: `**Forsterket effekt av stormflo ved hoeyere havnivaa:**

Tenk deg en kystby der stormflo kan heve vannstanden 1,5 m over normalt nivaa.

**I dag:** Normal vannstand + 1,5 m stormflo = kaien oversvoemmes saa vidt

**I 2100 (med 0,5 m havnivaaastigning):**
- Normal vannstand er allerede 0,5 m hoeyere
- Samme stormflo gir naa 2,0 m over dagens normale nivaa
- Omraadet som oversvoemmes blir mye stoerre (eksponentiell okning paa flatt terreng)

**Konsekvens:**
- Hendelser som i dag har 200 aars gjentaksintervall, kan inntreffe hvert 10-20 aar
- Kystinfrastruktur som er dimensjonert for dagens klima, blir utilstrekkelig
- Behovet for flomsikring og tilbaketrekking fra kysten oeker`,
    },
    {
      id: 'geo2-8-4-def-snoskred',
      type: 'definition',
      title: 'Snoskred',
      content: 'Snoskred er en rask forflytning av snoemasser nedover en skraaning. De deles inn i loessnoeskred (vaate, tunge), flakskred (utloest paa svakt sjikt) og fokksnoskred (vindtransportert snoe). Flakskred er den vanligste typen som tar menneskeliv i Norge.',
    },
    {
      id: 'geo2-8-4-snoskred',
      type: 'text',
      content: `## Snoskred

Snoskred er den naturfaren som tar flest menneskeliv i norsk natur.

### Forutsetninger for snoskred
- **Hellingsvinkel**: Vanligst mellom 30° og 45°
- **Svakt sjikt**: Et lag i snoedekket med daarlig binding
- **Tilleggsbelastning**: Ny snoe, vind, eller en skiloeper som utloeser skredet

### Typer snoskred
- **Loessnoeskred**: Starter i et punkt og brer seg ut. Vanlig ved stort snoefall.
- **Flakskred**: Et helt snoeflak glir ut paa et svakt sjikt. Farligst type.
- **Vaatsnoskred**: Utloest av smelting. Tunge og oedeleggende.

### Varsling
- **varsom.no** publiserer daglig snoskredvarsel paa en skala 1-5
- Faregradene: 1 = liten, 2 = moderat, 3 = betydelig, 4 = stor, 5 = meget stor
- Ved faregrad 3 eller hoeyere boer man vaere svaert forsiktig i skredutsatt terreng`,
    },
    {
      id: 'geo2-8-4-breflom',
      type: 'text',
      content: `## Breflom (joekulhlaup)

Et joekulhlaup er en plutselig toemmig av vann som har vaert oppdemmet av en bre. Vannet kan vaere:
- En breddemt sjoe (vann demmet opp bak en bre)
- Smeltevann oppsamlet under eller inne i breen
- Vann fra vulkansk aktivitet under breen (vanlig paa Island)

### Kjennetegn
- Svaret plutselig og kraftig vannfoering
- Kan transportere store mengder sand, grus og steinblokker
- Forekommer uregelmessig og er vanskelig aa forutsi

### Eksempler fra Norge
- **Demmevatn** ved Svartisen har gjentatte ganger toemt seg under breen
- Historiske joekulhlaup fra Jostedalsbreen har foraarsaket store oedeleggelser

### Klimaendringer og breflom
Naar breene smelter tilbake, dannes nye bredemte sjoeeer som kan gi oekt fare for joekulhlaup i en overgangsperiode.`,
    },
    {
      id: 'geo2-8-4-skred',
      type: 'text',
      content: `## Andre skredtyper

### Jordskred og flomskred
- Utloest av mye nedboer som mettet grunnen med vann
- Vanlig i bratt terreng med loeesmasser
- Klimaendringer med mer nedbor gir oekt skredfare

### Fjellskred
- Store fjellmasser som raser ut
- Kan utloese floedboelger i fjorder og innsjoeeer
- NVE overvaker fjellpartier som Aaknes og Mannen i Moere og Romsdal

### Kvikkleireskred
- Spesielt for Norge og andre omraader med marin leire
- Leira mister plutselig sin styrke og flyter ut
- Gjerdrum-skredet i 2020 er et nylig eksempel`,
    },
    {
      id: 'geo2-8-4-example-skredrisiko',
      type: 'example',
      title: 'Klimaendringer og skredrisiko',
      problem: 'Forklar hvordan klimaendringer kan pavirke risikoen for ulike skredtyper i Norge.',
      solution: `**Pavirkning av klimaendringer paa skredrisiko:**

**Snoskred:**
- Hoeyere snoegraense gir mindre snoeskredfare i lavlandet
- Men mer ustabilt vaer kan gi hyppigere svake sjikt i hoyfjellet
- Vaatsnoskred kan bli hyppigere pga. mildere vinterveer

**Jordskred og flomskred:**
- Oekt nedboersintensitet gir mer mettet grunn
- Stoerre risiko i bratt terreng med loesmasser
- Kan forekomme i nye omraader som tidligere var trygge

**Fjellskred:**
- Smelting av permafrost i fjellet svekker stabiliteten
- Frost-tine-sykluser kan forverres
- Overvaking av risikoomraader blir enda viktigere

**Breflom:**
- Nye bredamte sjoeeer naar breer trekker seg tilbake
- Oekt smelting gir mer vann under breene
- Overgangsperioden med breaatrekking er saerlig farlig`,
    },
    // --- Oppsummering ---
    {
      id: 'geo2-8-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Stormflo skyldes lavtrykk og paalandsvind, og er farligst i kombinasjon med springflo.
- Tsunami utloeses av undersjoeiske jordskjelv, skred eller vulkanutbrudd og kan vaere ekstremt oedeleggende langs kysten.
- Snoskred er Norges doeedigste naturfare, der flakskred paa svake sjikt er den farligste typen.
- Joekulhlaup er plutselige flommer fra bredemmede sjoeeer som kan vaere svaret kraftige.
- Jordskred, fjellskred og kvikkleireskred er viktige skredtyper i Norge.
- Klimaendringer endrer risikobildet: havnivaaastigning forverrer stormflo, mer nedboer oeker jordskredfare, og smelting av permafrost kan utloese fjellskred.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-8-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva foraarsakker stormflo?',
      options: [
        { id: 'a', text: 'Lavt lufttrykk og sterk paalandsvind som hever havnivaaet', isCorrect: true },
        { id: 'b', text: 'Undersjoeisk jordskjelv', isCorrect: false },
        { id: 'c', text: 'Maanens gravitasjon alene', isCorrect: false },
        { id: 'd', text: 'Smelting av isbreer', isCorrect: false },
      ],
      solution: 'Stormflo skyldes kombinasjonen av lavt lufttrykk (som loefter havoverflaten) og sterk paalandsvind (som presser vann mot kysten). Det er mest alvorlig naar det sammenfaller med springflo.',
    },
    {
      id: 'geo2-8-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva et joekulhlaup er, og beskriv hvordan klimaendringer kan pavirke forekomsten av joekulhlaup.',
      solution: 'Et joekulhlaup er en plutselig toemmig av vann som har vaert demmet opp av en bre. Vannet kan ligge i en breddemt sjoe, under breen eller inne i breen. Naar vanntrykket blir for stort, bryter det gjennom eller under breen med enorm kraft. Klimaendringer gir oekt breesmelting, noe som danner nye bredamte sjoeeer naar breen trekker seg tilbake. I en overgangsperiode kan dette gi oekt fare for joekulhlaup. Paa lengre sikt, naar breene er borte, forsvinner ogsaa denne faren.',
    },
    {
      id: 'geo2-8-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type snoskred tar flest menneskeliv i Norge?',
      options: [
        { id: 'a', text: 'Flakskred utloest paa svake sjikt', isCorrect: true },
        { id: 'b', text: 'Loessnoeskred i skog', isCorrect: false },
        { id: 'c', text: 'Vaatsnoskred om vaaren', isCorrect: false },
        { id: 'd', text: 'Snoeskred utloest av jordskjelv', isCorrect: false },
      ],
      solution: 'Flakskred er den farligste typen snoskred for mennesker. De utloeses naar et snoeflak glir ut paa et svakt sjikt i snoedekket. Flakskred kan utloeses av skiloepere og rammer ofte friluftsfolk i bratt terreng.',
    },
    {
      id: 'geo2-8-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva var Storegga-skredet, og hvilke konsekvenser hadde det?',
      solution: 'Storegga-skredet skjedde for ca. 8200 aar siden utenfor Moerekysten i Norge. Det var et enormt undersjoeisk skred der ca. 3500 kubikkilometer med sedimenter raste nedover kontinentalskraaningen. Skredet utloeste en tsunami paa opptil 10-12 meter langs norskekysten og enda hoeyere paa Shetland og Faeroyene. I dag overvaker NGU (Norges geologiske undersoekelse) havbunnen for aa vurdere om lignende hendelser kan gjenta seg.',
    },
    {
      id: 'geo2-8-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Ved hvilke hellingsgrader er snoskred vanligst?',
      options: [
        { id: 'a', text: '30-45 grader', isCorrect: true },
        { id: 'b', text: '10-20 grader', isCorrect: false },
        { id: 'c', text: '50-70 grader', isCorrect: false },
        { id: 'd', text: 'Alle hellinger over 5 grader', isCorrect: false },
      ],
      solution: 'Snoskred er vanligst i hellinger mellom 30 og 45 grader. Under 30 grader er hellingen for slak til at snoeen starter aa gli, og over 45 grader er hellingen saa bratt at snoeen slipper foer den rekker aa bygge seg opp.',
    },
    // --- Samleoppgaver ---
    {
      id: 'geo2-8-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign tsunami og stormflo som naturfarer. Beskriv for begge: a) aarsak, b) varselmuligheter, c) typiske konsekvenser, og d) hvordan klimaendringer pavirker dem.',
      solution: 'a) Aarsak: Tsunami utloeses av plutselige hendelser (undersjoeiske jordskjelv, skred, vulkanutbrudd). Stormflo skyldes meteorologiske forhold (lavtrykk + paalandsvind). b) Varsling: Tsunami er vanskelig aa varsle lokalt (kort tid), men internasjonale varslingssystemer kan gi timer med forvarsel for fjerntliggende kyster. Stormflo kan varsles godt med vaermodeller, gjerne 1-3 dager i forveien. c) Konsekvenser: Tsunami kan gi ekstremt hoye boelger (10+ meter) med enorm oedeleggende kraft. Stormflo gir vanligvis lavere vannstandsoeking (1-2 m) men over lengre tid. Begge gir oversvoemming, erosjon og infrastrukturskader. d) Klimaendringer: Tsunami pavirkes ikke direkte av klimaendringer. Stormflo forverres av havnivaaastigning - samme meteorologiske hendelse gir hoeyere absolutt vannstand. Sterkere stormer kan ogsaa gi kraftigere stormflo.',
    },
    {
      id: 'geo2-8-4-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En bygd i Vestland fylke er truet av baaade snoskred, fjellskred (med floedboelge i fjorden) og jordskred. Beskriv hva som kjennetegner hver skredtype og forklar hvilke overvakings- og beredskapstiltak som er aktuelle.',
      solution: 'Snoskred: Snoemasser som raser nedover bratte fjellsider, saerlig etter stort snoefall og vind. Overvaking: Snoskredvarsel paa varsom.no, lokale snoeprofiler. Tiltak: Skredsikringsvoller, skredoverbygg over veier, regulere ferdsel i skredutsatte omraader. Fjellskred med floedboelge: Store fjellmasser som raser i fjorden og skaper en oedeleggende boelge. Overvaking: NVE/NGU overvaker ustabile fjellpartier med GPS, radar og sensorer. Tiltak: Evakueringsplaner med definerte faresoner, sireneanlegg for varsling, utelukkingsomraader for bebyggelse. Jordskred: Loesmasser som glir ut ved mye nedboer. Overvaking: Nedboersmaalinger, grunnvannsstand. Tiltak: Dreneringssystemer, sikring av skraaninger, arealplanlegging som unngaar utsatte omraader. Felles: Oppdaterte beredskapsplaner, informasjon til befolkningen, oevelser, og vurdering av klimaendringenes effekt paa risikoen.',
    },
  ],
};

// ============================================================================
// Kapittel 8.5: Risikovurdering og beredskap
// ============================================================================

export const CHAPTER_GEOFAG_2_8_5: TextbookChapter = {
  id: 'geofag-2-8-5',
  courseId: 'geofag-2',
  chapterNumber: '8.5',
  title: 'Risikovurdering og beredskap',
  description: 'Risiko = fare x saarbarhet, varslingssystemer, beredskap og klimaendringenes pavirkning paa naturfarer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere risiko ved atmosfaeriske, oseanografiske og kryosfaeriske fenomener og drofte hvordan klimaendringer pavirker disse',
  ],
  content: [
    {
      id: 'geo2-8-5-intro',
      type: 'text',
      content: `# Risikovurdering og beredskap

Vi kan ikke forhindre naturhendelser, men vi kan redusere risikoen de utgoer for samfunnet. Risikovurdering og beredskap handler om aa forstaa farene, vurdere konsekvensene og sette inn tiltak for aa beskytte mennesker og verdier. I Norge har flere etater ansvar for ulike deler av dette arbeidet.

## Risikoforstaelse

For aa haandtere naturfarer maa vi foerstaa tre noekkelbegreper:

1. **Fare (hazard)**: Det naturlige fenomenet og dets styrke
2. **Saarbarhet (vulnerability)**: Hvor utsatt mennesker og samfunn er
3. **Eksponering**: Hvem og hva som befinner seg i farens vei`,
    },
    {
      id: 'geo2-8-5-def-risiko',
      type: 'definition',
      title: 'Risiko',
      content: 'Risiko er produktet av sannsynligheten for at en hendelse inntreffer og konsekvensene den faar. Risiko = Fare (sannsynlighet) x Saarbarhet (konsekvens). Risikoen kan reduseres ved aa senke enten sannsynligheten (f.eks. flomvern) eller saarbarheten (f.eks. evakueringsplaner).',
    },
    {
      id: 'geo2-8-5-risikomodell',
      type: 'text',
      content: `## Risikomodellen

### Risiko = Fare x Saarbarhet

Denne enkle formelen viser at risiko avhenger av baade naturfenomenet og samfunnets evne til aa taale det:

| Komponent | Eksempel |
|-----------|----------|
| **Hoey fare, lav saarbarhet** | Storm over ubefolket omraade = lav risiko |
| **Lav fare, hoey saarbarhet** | Moderat flom i tett bebygget omraade = middels risiko |
| **Hoey fare, hoey saarbarhet** | Stor flom i tett bebygget omraade = hoey risiko |

### Risikomatrise
En risikomatrise kombinerer sannsynlighet og konsekvens:

- **Groenn sone**: Lav sannsynlighet OG lav konsekvens - akseptabel risiko
- **Gul sone**: Middels kombinasjon - tiltak boer vurderes
- **Roed sone**: Hoey sannsynlighet OG/ELLER hoey konsekvens - tiltak maa iverksettes`,
    },
    {
      id: 'geo2-8-5-example-risikomatrise',
      type: 'example',
      title: 'Risikovurdering av kystsamfunn',
      problem: 'Et kystsamfunn er utsatt for stormflo. Vurder risikoen og foreeslaa tiltak.',
      solution: `**Risikovurdering:**

**Fare:** Stormflo med gjentaksintervall 50 aar kan gi vannstand 1,8 m over normalt. Med klimaendringer kan dette bli hyppigere.

**Saarbarhet:**
- 30 boliger ligger under 2 m over dagens middelvannstand
- Hovedveien ligger lavt og kan bli oversvoemmet
- Eldre befolkning med begrenset mobilitet

**Eksponering:** Ca. 100 personer direkte berhoert

**Risiko:** Middels-hoey (gul/roed sone i risikomatrisen)

**Tiltak:**
1. **Forebygging**: Bygge flomvoll langs de mest utsatte omraadene
2. **Arealplanlegging**: Ikke tillate ny bebyggelse under 3 m over havnivaa
3. **Beredskap**: Etablere varslingssystem og evakueringsplan
4. **Tilpasning**: Heve gulvnivaa i eksisterende bygninger
5. **Overvaking**: Installere vannstandsmaaler med automatisk varsling`,
    },
    {
      id: 'geo2-8-5-varsling',
      type: 'text',
      content: `## Varslingssystemer i Norge

Norge har et godt utbygd system for varsling av naturfarer:

### Meteorologisk institutt (MET)
- Vaervarsler og farevarsel for vind, nedboer, temperatur
- Bruker fargekoder: groent (ingen fare), gult (moderat), oransje (alvorlig), roedt (ekstremt)
- Varsler stormflo og boelgehoyde

### NVE (Norges vassdrags- og energidirektorat)
- Flomvarsling for alle stoerre vassdrag
- Jordskredvarsling
- Overvaking av ustabile fjellpartier (Aaknes, Mannen, Gamanjunni m.fl.)
- Kartlegging av faresoner

### varsom.no
- Samlet portal for naturfarevarsler
- Snoskredvarsel (skala 1-5)
- Flomvarsel
- Jordskredvarsel

### DSB (Direktoratet for samfunnssikkerhet og beredskap)
- Koordinerer beredskap paa nasjonalt nivaa
- Noedalarmering (113, 110, 112)
- Befolkningsvarsling (sireneanlegg, Noedalarm-appen)`,
    },
    {
      id: 'geo2-8-5-def-beredskapsprinsipp',
      type: 'definition',
      title: 'De fire beredskapsprinsippene',
      content: 'Norsk beredskap bygger paa fire prinsipper: 1) Ansvarsprinsippet - den som har ansvar i normalsituasjon, har ogsaa ansvar i krise. 2) Likhetsprinsippet - organiseringen i krise skal likne normalsituasjonen. 3) Naerhetsprinsippet - kriser skal haandteres paa lavest mulig nivaa. 4) Samvirkeprinsippet - alle maa samarbeide for best mulig haandtering.',
    },
    {
      id: 'geo2-8-5-example-varsling',
      type: 'example',
      title: 'Varslingsforloep ved flomfare',
      problem: 'Beskriv hvordan varslingen fungerer naar det er fare for stoerr flom i et vassdrag.',
      solution: `**Varslingsforloep ved flomfare:**

**Dag 1-3 foer:** MET varsler om kraftig, langvarig nedboer. NVE oeker beredskapen og overvaker vannstanden i vassdraget. Gult farevarsel publiseres paa varsom.no.

**Dag 1 foer:** Vannstanden stiger. NVE oppgraderer til oransje farevarsel. Kommunen varsles direkte. Fylkesberedskapssjef informeres.

**Flomdag:** Vannstanden naar kritisk nivaa. Roedt farevarsel. Kommunen aktiverer sin kriseledelse. Evakuering av truede omraader. Vegvesenet stenger oversvoemte veier. Frivillige organisasjoner (Roeede Kors, Norsk Folkehjelp) bistaar.

**Etter flommen:** Skadekartlegging, opprydding, forsikringsoppgjoer. NVE evaluerer hendelsen. Kommunen oppdaterer beredskapsplanen basert paa erfaringer.`,
    },
    {
      id: 'geo2-8-5-klimaendringer-risiko',
      type: 'text',
      content: `## Klimaendringer og endret risikobilde

Klimaendringer pavirker risikobildet paa flere maater:

### Endret fare
- Mer intens nedboer oeker flom- og skredfare
- Hoeyere havnivaa forverrer stormflo
- Smelting av permafrost oeker fjellskredfare
- Flere heteboelger og toerkeperioder

### Endret saarbarhet
- Infrastruktur dimensjonert for gammelt klima er mer saarbar
- Befolkningsvekst i utsatte omraader oeker eksponeringen
- Aldrende befolkning er mer saarbar for heteboelger

### Tilpasning til endret klima
- **Oppdatere dimensjoneringskriterier**: Bygge for fremtidens klima, ikke gaarsdagens
- **Arealplanlegging**: Unngaa bygging i omraader som blir farligere
- **Naturbaserte loesninger**: Bruke naturen som buffer (vaatmarker, flomsletter)
- **Robuste systemer**: Redundans i kritisk infrastruktur
- **Klimafremskrivninger**: Bruke klimamodeller i risikovurderinger

### Norske klimaprofiler
Norsk klimaservicesenter har utarbeidet klimaprofiler for alle fylker. Disse viser forventede endringer i temperatur, nedboer, havnivaa og andre parametre, og er grunnlag for lokal tilpasning.`,
    },
    {
      id: 'geo2-8-5-nve-dsb',
      type: 'text',
      content: `## Sentrale aktoeerer i norsk naturfareforvaltning

### NVE - Norges vassdrags- og energidirektorat
- Nasjonal myndighet for forebygging av flom- og skredskader
- Kartlegger og overvaker naturfarer
- Gir faglig bistand til kommuner
- Forvalter sikringstiltak (flomvoller, skredsikring)

### DSB - Direktoratet for samfunnssikkerhet og beredskap
- Overordnet ansvar for samfunnssikkerhet
- Koordinerer beredskap mellom sektorer
- Gjennomfoerer nasjonale risikoanalyser (NRA)
- Tilsyn med kommunal beredskap

### Kommunene
- Lokal beredskapsplikt (etter sivilbeskyttelsesloven)
- Risiko- og saarbarheitsanalyse (ROS-analyse)
- Arealplanlegging som tar hensyn til naturfare
- Evakueringsplaner og krisekommunikasjon

### Samarbeid
Effektiv naturfarehaandtering krever samarbeid mellom alle nivaaer - fra lokale brannvesen og kommuner til nasjonale fagmyndigheter. Samvirkeprinsippet er sentralt: alle aktoeerer skal bidra i en krisesituasjon.`,
    },
    // --- Oppsummering ---
    {
      id: 'geo2-8-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Risiko = fare x saarbarhet. Risikoen kan reduseres ved aa senke enten sannsynligheten eller konsekvensene.
- En risikomatrise kombinerer sannsynlighet og konsekvens i fargesoner (groenn, gul, roed).
- Norge har godt utbygde varslingssystemer gjennom MET, NVE, varsom.no og DSB.
- Norsk beredskap bygger paa fire prinsipper: ansvar, likhet, naerhet og samvirke.
- NVE har ansvar for flom- og skredforebygging, DSB for overordnet samfunnssikkerhet, og kommunene for lokal beredskap.
- Klimaendringer endrer risikobildet ved aa pavirke baade farene (mer ekstremvaer) og saarbarheten (underdimensjonert infrastruktur).
- Klimatilpasning krever oppdaterte standarder, god arealplanlegging og bruk av klimafremskrivninger.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-8-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den korrekte formelen for risiko?',
      options: [
        { id: 'a', text: 'Risiko = Fare (sannsynlighet) x Saarbarhet (konsekvens)', isCorrect: true },
        { id: 'b', text: 'Risiko = Fare + Saarbarhet + Eksponering', isCorrect: false },
        { id: 'c', text: 'Risiko = Konsekvens / Sannsynlighet', isCorrect: false },
        { id: 'd', text: 'Risiko = Sannsynlighet - Beredskap', isCorrect: false },
      ],
      solution: 'Risiko er produktet av sannsynligheten for at en fare inntreffer og konsekvensene (saarbarheten). Baaede høy sannsynlighet og hoey saarbarhet gir hoey risiko.',
    },
    {
      id: 'geo2-8-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar de fire beredskapsprinsippene i norsk beredskap og gi et eksempel paa hvordan hvert prinsipp anvendes ved en flomsituasjon.',
      solution: '1) Ansvarsprinsippet: Kommunen som har ansvar for innbyggernes sikkerhet til daglig, har ogsaa ansvar under flommen - det er kommunens kriseledelse som styrer. 2) Likhetsprinsippet: Organisasjonen i krise likner normalsituasjonen - teknisk etat haandterer infrastruktur, helse haandterer skadde. 3) Naerhetsprinsippet: Kommunen haandterer krisen lokalt, fylke og stat bidraar ved behov - hendelsen loeses paa lavest mulig nivaa. 4) Samvirkeprinsippet: Brannvesen, politi, helsevesen, Sivilforsvaret, Roeede Kors og NVE samarbeider for aa haandtere situasjonen effektivt.',
    },
    {
      id: 'geo2-8-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken etat har nasjonalt ansvar for forebygging av flom- og skredskader i Norge?',
      options: [
        { id: 'a', text: 'NVE (Norges vassdrags- og energidirektorat)', isCorrect: true },
        { id: 'b', text: 'DSB (Direktoratet for samfunnssikkerhet og beredskap)', isCorrect: false },
        { id: 'c', text: 'Meteorologisk institutt', isCorrect: false },
        { id: 'd', text: 'Miljodirektoratet', isCorrect: false },
      ],
      solution: 'NVE har nasjonalt ansvar for forebygging av flom- og skredskader. De kartlegger naturfarer, overvaker vassdrag og fjellpartier, og gir faglig bistand til kommuner. DSB har overordnet ansvar for samfunnssikkerhet, men det er NVE som er fagmyndighet for flom og skred.',
    },
    {
      id: 'geo2-8-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en ROS-analyse er, og hvorfor alle kommuner maa ha en slik analyse.',
      solution: 'ROS-analyse staar for risiko- og saarbarheitsanalyse. Det er en systematisk gjennomgang av mulige hendelser som kan ramme kommunen - inkludert naturfare, infrastruktursvikt og andre trusler. For hver hendelse vurderes sannsynlighet og konsekvens. Alle kommuner er paalagt aa ha en ROS-analyse etter sivilbeskyttelsesloven. Formaaleet er aa: 1) Identifisere farer og trusler. 2) Vurdere saarbarhet. 3) Prioritere beredskapstiltak. 4) Sikre at arealplanlegging tar hensyn til naturfarer. 5) Legge grunnlag for beredskapsplanen.',
    },
    {
      id: 'geo2-8-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er fargekodene for farevarsel fra Meteorologisk institutt?',
      options: [
        { id: 'a', text: 'Groent (ingen fare), gult (moderat), oransje (alvorlig), roedt (ekstremt)', isCorrect: true },
        { id: 'b', text: 'Blaatt (lav), groent (moderat), gult (hoey), roedt (kritisk)', isCorrect: false },
        { id: 'c', text: 'Skala 1-5 med tall', isCorrect: false },
        { id: 'd', text: 'Hvit (trygt), graa (usikkert), svart (farlig)', isCorrect: false },
      ],
      solution: 'MET bruker fire fargenivaaer for farevarsel: groent (ingen spesiell fare), gult (moderat fare - vaer oppmerksom), oransje (alvorlig fare - forbered deg), og roedt (ekstremt vaer - sikre deg). Fargekodene er harmonisert med europeiske vaertjenester.',
    },
    // --- Samleoppgaver ---
    {
      id: 'geo2-8-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En kommune skal revidere sin ROS-analyse i lys av nye klimafremskrivninger. Beskriv steg for steg hvordan kommunen boer gaa frem, og forklar hvilke naturfarer som sannsynligvis maa oppgraderes i risikovurderingen.',
      solution: 'Steg for steg: 1) Hente oppdaterte klimaprofiler fra Norsk klimaservicesenter for fylket. 2) Identifisere endringer i nedboer, temperatur, havnivaa og vindforhold. 3) Gjennomgaa eksisterende faresonekart med nye klimafremskrivninger. 4) Vurdere hvordan endringene pavirker sannsynlighet og konsekvens for hver naturfare. 5) Oppdatere risikomatrisen. 6) Foreeslaa nye tiltak der risikoen har oekt. 7) Forankre analysen politisk og i planverket. Naturfarer som sannsynligvis maa oppgraderes: Styrtflom (mer intens nedboer), stormflo (havnivaaastigning), jordskred (mer nedboer og hoeyere grunnvannstand), heteboelger (varmere klima), skogbrann (toerkeperioder). Flomsonekart maa ogsaa revideres med klimapaaslag.',
    },
    {
      id: 'geo2-8-5-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Droeft paaastanden: «Det er umulig aa beskytte seg fullstendig mot naturfarer. Derfor handler god beredskap mer om aa redusere saarbarhet enn aa eliminere fare.» Bruk eksempler fra atmosfaeriske, oseanografiske og kryosfaeriske naturfarer.',
      solution: 'Paaastanden er i hovedsak riktig. Vi kan ikke stoppe stormer, tsunamier eller snoskred, men vi kan gjore samfunnet mindre saarbart. Eksempler: Atmosfaerisk - vi kan ikke forhindre ekstrem nedboer, men vi kan dimensionere avloepssystemer stoerre, bygge paa trygg grunn, og ha gode varslings- og evakueringssystemer. Oseanografisk - vi kan ikke stoppe stormflo, men vi kan bygge flomvoller, heve bebyggelse, og unngaa aa bygge i utsatte omraader. Kryosfaerisk - vi kan ikke forhindre snoskred, men vi kan sikre infrastruktur med skredsikring, varsle om skredfare, og regulere ferdsel. Noen tiltak reduserer imidlertid faren direkte: flomvoller reduserer sannsynligheten for at vannet naar bebyggelsen, skredsikring kan stoppe eller avlede skred. Den beste strategien kombinerer faredreeduksjon, saarbarhetsreduksjon og god beredskap. Klimaendringer gjoer dette arbeidet stadig viktigere.',
    },
    {
      id: 'geo2-8-5-ex8',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken av foelgende er et eksempel paa klimatilpasning (ikke utslippskutt)?',
      options: [
        { id: 'a', text: 'Bygge stoerre overvannssystemer for aa haandtere mer intens nedboer', isCorrect: true },
        { id: 'b', text: 'Erstatte kullkraftverk med vindkraft', isCorrect: false },
        { id: 'c', text: 'Redusere biltrafikk i byene', isCorrect: false },
        { id: 'd', text: 'Plante treer for aa binde CO2', isCorrect: false },
      ],
      solution: 'Klimatilpasning handler om aa tilpasse samfunnet til klimaendringer som allerede skjer eller forventes. Stoerre overvannssystemer er tilpasning fordi det forbereder infrastrukturen paa mer intens nedboer. De andre alternativene er eksempler paa utslippsreduksjon (mitigasjon), som handler om aa bremse klimaendringene. Baade tilpasning og utslippsreduksjon er noedevendig.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const GEOFAG_2_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_2_8_1, CHAPTER_GEOFAG_2_8_2, CHAPTER_GEOFAG_2_8_3, CHAPTER_GEOFAG_2_8_4, CHAPTER_GEOFAG_2_8_5,
];
