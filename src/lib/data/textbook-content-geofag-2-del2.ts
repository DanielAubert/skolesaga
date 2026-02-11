/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 2 VG3 - Del 2: Stråling og atmosfæren
 *
 * Dekker LK20-kompetansemål for geofag 2 (GEO02-02)
 * Delkapitler 2.1 - 2.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Solstråling og strålingsbalanse
// ============================================================================

export const CHAPTER_GEOFAG_2_2_1: TextbookChapter = {
  id: 'geofag-2-2-1',
  courseId: 'geofag-2',
  chapterNumber: '2.1',
  title: 'Solstråling og strålingsbalanse',
  description: 'Solstråling, det elektromagnetiske spekteret, jordens energibudsjett og albedo.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for strålingsbalanse, strålingsfordeling og strålingspådriv',
  ],
  content: [
    {
      id: 'geo2-2-1-intro',
      type: 'text',
      content: `# Solstråling og strålingsbalanse

Solen er den viktigste energikilden for jordens klima og værsystemer. Solstrålingen driver oppvarmingen av jordoverflaten, fordampning av vann, vindsystemer og havstrømmer. For å forstå klimaet må vi vite hvordan denne energien mottas, fordeles og sendes tilbake til verdensrommet.

## Hvorfor er dette viktig?

- Strålingsbalansen avgjør jordens gjennomsnittstemperatur
- Endringer i balansen fører til klimaendringer
- Forståelse av energibudsjettet er grunnlaget for klimavitenskap`,
    },
    {
      id: 'geo2-2-1-def-solstraaling',
      type: 'definition',
      title: 'Solstråling',
      content: 'Solstråling er elektromagnetisk stråling som sendes ut fra solen. Den har et bredt spekter av bølgelengder, men mesteparten av energien ligger i det synlige lyset (400–700 nm), ultrafiolett (UV) og nær-infrarødt området. Solkonstanten er ca. 1361 W/m² målt utenfor atmosfæren.',
    },
    {
      id: 'geo2-2-1-spekter',
      type: 'text',
      content: `## Det elektromagnetiske spekteret

Solstrålingen dekker et bredt spekter av bølgelengder:

### Korte bølgelengder (høy energi)
- **Gammastråling og røntgenstråling**: Absorberes høyt i atmosfæren
- **Ultrafiolett (UV)**: UV-C absorberes av ozonlaget, UV-B delvis absorberes, UV-A når jordoverflaten

### Synlig lys (400–700 nm)
- Utgjør ca. 43 % av solenergien
- Passerer gjennom atmosfæren relativt uforstyrret
- Varmer opp jordoverflaten

### Infrarød stråling
- **Nær-infrarødt** (fra solen): Utgjør ca. 49 % av solenergien
- **Termisk infrarødt** (fra jorden): Langbølget stråling sendt ut fra oppvarmet jordoverflate

### Wiens forskyvningslov
Bølgelengden til maksimal utstråling avhenger av temperaturen. Solen (ca. 5800 K) har maksimum i synlig lys, mens jorden (ca. 288 K) stråler ut i det termisk infrarøde området.`,
    },
    {
      id: 'geo2-2-1-def-albedo',
      type: 'definition',
      title: 'Albedo',
      content: 'Albedo er forholdet mellom reflektert stråling og innkommende stråling. Verdien angis mellom 0 (all stråling absorberes) og 1 (all stråling reflekteres). Jordens gjennomsnittlige albedo er ca. 0,30, noe som betyr at 30 % av innkommende solstråling reflekteres tilbake til verdensrommet.',
    },
    {
      id: 'geo2-2-1-albedo-eksempler',
      type: 'example',
      title: 'Albedoverdier for ulike overflater',
      problem: 'Hvilke overflater har høy og lav albedo, og hva betyr det for energibalansen?',
      solution: `**Høy albedo (reflekterer mye):**
- Fersk snø: 0,80–0,90
- Skyer (tykke): 0,60–0,90
- Havsis: 0,50–0,70
- Ørken (lys sand): 0,30–0,40

**Lav albedo (absorberer mye):**
- Åpent hav: 0,06–0,10
- Mørk skog: 0,10–0,20
- Asfalt: 0,05–0,10

**Konsekvens:** Når is og snø smelter, erstattes høy-albedo-overflater med lav-albedo-overflater (mørkt hav, jord). Dette gir økt absorpsjon av solenergi og forsterker oppvarmingen — en positiv tilbakekobling kalt is-albedo-tilbakekoblingen.`,
    },
    {
      id: 'geo2-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er solkonstanten?',
        options: [
          { id: 'a', text: 'Mengden solstråling som treffer jordoverflaten per kvadratmeter', isCorrect: false },
          { id: 'b', text: 'Ca. 1361 W/m² målt utenfor atmosfæren, vinkelrett på solstrålene', isCorrect: true },
          { id: 'c', text: 'Den totale energien solen sender ut per sekund', isCorrect: false },
          { id: 'd', text: 'Gjennomsnittstemperaturen på solens overflate', isCorrect: false },
        ],
        solution: 'Solkonstanten er ca. 1361 W/m² og måles utenfor atmosfæren vinkelrett på solstrålene. Den kalles «konstant» fordi den varierer svært lite (ca. 0,1 %) over solsyklusen.',
      },
    },
    {
      id: 'geo2-2-1-energibudsjett',
      type: 'text',
      content: `## Jordens energibudsjett

Av den innkommende solstrålingen (100 %):

### Refleksjon (ca. 30 %)
- Skyer reflekterer ca. 23 %
- Jordoverflaten reflekterer ca. 7 %

### Absorpsjon i atmosfæren (ca. 23 %)
- Ozon absorberer UV-stråling
- Vanndamp og skyer absorberer infrarødt
- Aerosoler sprer og absorberer stråling

### Absorpsjon ved jordoverflaten (ca. 47 %)
- Varmer opp land og hav
- Driver fordampning og vind

### Utstråling fra jorden
Jordoverflaten sender ut langbølget (infrarød) stråling. Mesteparten absorberes av drivhusgasser i atmosfæren og stråles tilbake (motsstråling). Bare en liten del slipper direkte ut til verdensrommet gjennom det atmosfæriske «vinduet» (8–13 μm).`,
    },
    {
      id: 'geo2-2-1-def-straalingsbalanse',
      type: 'definition',
      title: 'Strålingsbalanse',
      content: 'Strålingsbalanse betyr at den totale energien jorden mottar fra solen, er lik den totale energien jorden sender ut til verdensrommet. Når denne balansen forstyrres — for eksempel ved økte drivhusgasser — endres jordens temperatur til en ny likevekt oppnås.',
    },
    {
      id: 'geo2-2-1-example-balanse',
      type: 'example',
      title: 'Beregning av effektiv stråling',
      problem: 'Jordens gjennomsnittlige albedo er 0,30 og solkonstanten er 1361 W/m². Beregn gjennomsnittlig absorbert solstråling per kvadratmeter av jordoverflaten.',
      solution: `**Steg 1:** Innkommende solstråling fordelt over hele jordoverflaten:
Solkonstanten deles på 4 (fordi tverrsnittet av en kule er 1/4 av overflaten):
$S_{gjennomsnitt} = \\frac{1361}{4} = 340{,}25 \\text{ W/m}^2$

**Steg 2:** Trekk fra reflektert stråling (albedo = 0,30):
$S_{absorbert} = 340{,}25 \\times (1 - 0{,}30) = 340{,}25 \\times 0{,}70 = 238 \\text{ W/m}^2$

Jorden absorberer i gjennomsnitt ca. 238 W/m² solstråling, og i strålingsbalanse stråler den ut like mye langbølget stråling til verdensrommet.`,
    },
    {
      id: 'geo2-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva albedo er, og gi tre eksempler på overflater med ulik albedo. Diskuter hvilken effekt smelting av is i Arktis har på jordens totale albedo.',
        solution: 'Albedo er andelen av innkommende stråling som reflekteres. Eksempler: Fersk snø har albedo ca. 0,85 (reflekterer mye), mørk skog ca. 0,15, og åpent hav ca. 0,06. Når is i Arktis smelter, erstattes den hvite overflaten med mørkt hav. Da synker albedoen lokalt kraftig, og mer solenergi absorberes. Dette forsterker oppvarmingen i en positiv tilbakekobling (is-albedo-tilbakekoblingen).',
      },
    },
    {
      id: 'geo2-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Omtrent hvor stor andel av innkommende solstråling absorberes av jordoverflaten?',
        options: [
          { id: 'a', text: 'Ca. 23 %', isCorrect: false },
          { id: 'b', text: 'Ca. 30 %', isCorrect: false },
          { id: 'c', text: 'Ca. 47 %', isCorrect: true },
          { id: 'd', text: 'Ca. 70 %', isCorrect: false },
        ],
        solution: 'Ca. 47 % av innkommende solstråling absorberes av jordoverflaten. Ca. 30 % reflekteres tilbake til verdensrommet, og ca. 23 % absorberes direkte av atmosfæren.',
      },
    },
    {
      id: 'geo2-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv forskjellen mellom kortbølget og langbølget stråling i jordens energibudsjett. Hvorfor er denne forskjellen viktig for drivhuseffekten?',
        solution: 'Kortbølget stråling (synlig lys og UV) kommer fra solen og passerer gjennom atmosfæren relativt uforstyrret. Langbølget stråling (termisk infrarød) sendes ut fra den oppvarmede jordoverflaten. Drivhusgasser er transparente for kortbølget stråling, men absorberer langbølget stråling. Denne forskjellen gjør at solenergien kommer inn, men har vanskeligere for å komme ut igjen — dette er selve mekanismen bak drivhuseffekten.',
      },
    },
    {
      id: 'geo2-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva menes med at jorden er i strålingsbalanse?',
        options: [
          { id: 'a', text: 'At solen sender ut like mye stråling som jorden', isCorrect: false },
          { id: 'b', text: 'At energien jorden mottar fra solen er lik energien den stråler ut til verdensrommet', isCorrect: true },
          { id: 'c', text: 'At all solstråling absorberes av jordoverflaten', isCorrect: false },
          { id: 'd', text: 'At temperaturen er lik overalt på jorden', isCorrect: false },
        ],
        solution: 'Strålingsbalanse betyr at den totale energien inn (absorbert solstråling) er lik den totale energien ut (langbølget stråling til verdensrommet). Når balansen forstyrres, endres gjennomsnittstemperaturen.',
      },
    },
    {
      id: 'geo2-2-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Solstråling** er elektromagnetisk stråling med mesteparten av energien i synlig lys og nær-infrarødt
- **Solkonstanten** er ca. 1361 W/m² utenfor atmosfæren
- **Albedo** beskriver hvor mye stråling som reflekteres — jordens gjennomsnitt er ca. 0,30
- Ca. 47 % av solstrålingen absorberes av jordoverflaten, 23 % av atmosfæren og 30 % reflekteres
- **Strålingsbalanse** betyr at innkommende og utgående energi er like store
- Forstyrrelser i strålingsbalansen fører til temperaturendringer`,
    },
    {
      id: 'geo2-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hva Wiens forskyvningslov sier. Hvorfor stråler solen mest i synlig lys, mens jorden stråler mest i infrarødt?',
        solution: 'Wiens forskyvningslov sier at bølgelengden til maksimal utstråling er omvendt proporsjonal med temperaturen til det strålende legemet. Solen har en overflatetemperatur på ca. 5800 K og har derfor maksimal utstråling i synlig lys (ca. 500 nm). Jorden har en middeltemperatur på ca. 288 K og stråler derfor ut mest i det termisk infrarøde området (ca. 10 μm). Denne forskjellen er sentral for å forstå drivhuseffekten.',
      },
    },
    {
      id: 'geo2-2-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-1-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hvilket område av det elektromagnetiske spekteret passerer lettest gjennom jordens atmosfære?',
        options: [
          { id: 'a', text: 'Gammastråling', isCorrect: false },
          { id: 'b', text: 'Ultrafiolett stråling (UV-C)', isCorrect: false },
          { id: 'c', text: 'Synlig lys', isCorrect: true },
          { id: 'd', text: 'Termisk infrarød stråling', isCorrect: false },
        ],
        solution: 'Synlig lys passerer lettest gjennom atmosfæren. UV-stråling absorberes delvis av ozonlaget, og termisk infrarød stråling absorberes delvis av drivhusgasser. Gammastråling absorberes høyt oppe i atmosfæren.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Drivhuseffekten og strålingspådriv
// ============================================================================

export const CHAPTER_GEOFAG_2_2_2: TextbookChapter = {
  id: 'geofag-2-2-2',
  courseId: 'geofag-2',
  chapterNumber: '2.2',
  title: 'Drivhuseffekten og strålingspådriv',
  description: 'Drivhuseffekten, drivhusgasser, strålingspådriv og forskjellen mellom naturlig og forsterket drivhuseffekt.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for strålingsbalanse, strålingsfordeling og strålingspådriv',
  ],
  content: [
    {
      id: 'geo2-2-2-intro',
      type: 'text',
      content: `# Drivhuseffekten og strålingspådriv

Drivhuseffekten er en naturlig prosess som gjør jorden beboelig. Uten den ville gjennomsnittstemperaturen på jorden vært ca. −18 °C i stedet for ca. +15 °C. Menneskelig aktivitet har imidlertid forsterket drivhuseffekten, noe som fører til global oppvarming.

## Læringsmål
- Forstå mekanismen bak den naturlige drivhuseffekten
- Kjenne til de viktigste drivhusgassene
- Forklare begrepet strålingspådriv
- Skille mellom naturlig og forsterket drivhuseffekt`,
    },
    {
      id: 'geo2-2-2-def-drivhus',
      type: 'definition',
      title: 'Drivhuseffekten',
      content: 'Drivhuseffekten er en naturlig prosess der drivhusgasser i atmosfæren absorberer langbølget (infrarød) stråling fra jordoverflaten og stråler en del av denne energien tilbake mot bakken. Dette gjør at jordoverflaten holder en høyere temperatur enn den ville hatt uten atmosfære.',
    },
    {
      id: 'geo2-2-2-mekanisme',
      type: 'text',
      content: `## Mekanismen bak drivhuseffekten

### Steg for steg:
1. **Kortbølget stråling** fra solen passerer gjennom atmosfæren og treffer jordoverflaten
2. **Jordoverflaten varmes opp** og sender ut **langbølget (infrarød) stråling**
3. **Drivhusgasser absorberer** deler av den langbølgede strålingen
4. Gassene sender stråling i alle retninger — også **tilbake mot jordoverflaten** (motstråling)
5. Jordoverflaten mottar dermed både direkte solstråling og motstråling fra atmosfæren

### Viktig presisering
Drivhuseffekten fungerer ikke som et glasshus. I et glasshus hindres konveksjon (varmeluften holdes inne). I atmosfæren er det absorpsjon og gjenutslipp av infrarød stråling som er den viktigste mekanismen.`,
    },
    {
      id: 'geo2-2-2-def-drivhusgass',
      type: 'definition',
      title: 'Drivhusgasser',
      content: 'Drivhusgasser er gasser i atmosfæren som absorberer og sender ut infrarød stråling. De viktigste er vanndamp (H₂O), karbondioksid (CO₂), metan (CH₄), lystgass (N₂O) og ozon (O₃). Fluorholdige gasser (f-gasser) er menneskeskapte drivhusgasser med svært høyt oppvarmingspotensial.',
    },
    {
      id: 'geo2-2-2-gasser',
      type: 'text',
      content: `## De viktigste drivhusgassene

### Vanndamp (H₂O)
- Sterkeste naturlige drivhusgass (bidrar ca. 60 % av naturlig drivhuseffekt)
- Konsentrasjonen styres av temperaturen — en tilbakekoblingsmekanisme, ikke en primær driver
- Oppholdstid i atmosfæren: ca. 10 dager

### Karbondioksid (CO₂)
- Viktigste menneskeskapte drivhusgass
- Førrindustriell konsentrasjon: ca. 280 ppm, nåværende: over 420 ppm
- Oppholdstid: hundrevis til tusenvis av år
- Kilder: Forbrenning av fossilt brensel, avskoging, sementproduksjon

### Metan (CH₄)
- Ca. 80 ganger sterkere oppvarmingseffekt enn CO₂ over 20 år
- Oppholdstid: ca. 12 år
- Kilder: Husdyrhold, rismarker, fossilt brensel, tining av permafrost

### Lystgass (N₂O)
- Ca. 270 ganger sterkere enn CO₂ over 100 år
- Kilder: Landbruk (gjødsling), industriprosesser
- Oppholdstid: ca. 120 år`,
    },
    {
      id: 'geo2-2-2-example-gasser',
      type: 'example',
      title: 'Sammenligning av drivhusgasser',
      problem: 'Hvorfor er CO₂ den viktigste menneskeskapte drivhusgassen, selv om metan har sterkere oppvarmingseffekt per molekyl?',
      solution: `**Tre grunner til at CO₂ dominerer:**

1. **Mengde:** Mennesker slipper ut langt større mengder CO₂ enn metan. I 2022 var globale CO₂-utslipp ca. 37 milliarder tonn, mot ca. 0,4 milliarder tonn metan.

2. **Oppholdstid:** CO₂ blir i atmosfæren i hundrevis til tusenvis av år, mens metan brytes ned etter ca. 12 år. Effekten av CO₂-utslipp akkumuleres over tid.

3. **Totalt strålingspådriv:** Det samlede bidraget fra CO₂ til strålingspådriv siden førindustriell tid er ca. 2,2 W/m², mens metan bidrar med ca. 0,5 W/m².

Metan er likevel svært viktig for kortsiktig klimapolitikk, fordi reduksjon av metanutslipp kan gi rask temperatureffekt.`,
    },
    {
      id: 'geo2-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken gass bidrar mest til den naturlige drivhuseffekten?',
        options: [
          { id: 'a', text: 'Karbondioksid (CO₂)', isCorrect: false },
          { id: 'b', text: 'Vanndamp (H₂O)', isCorrect: true },
          { id: 'c', text: 'Metan (CH₄)', isCorrect: false },
          { id: 'd', text: 'Ozon (O₃)', isCorrect: false },
        ],
        solution: 'Vanndamp er den viktigste naturlige drivhusgassen og står for ca. 60 % av den naturlige drivhuseffekten. Men vanndampkonsentrasjonen styres av temperaturen, ikke direkte av menneskelig aktivitet.',
      },
    },
    {
      id: 'geo2-2-2-def-straalingspaadriv',
      type: 'definition',
      title: 'Strålingspådriv',
      content: 'Strålingspådriv (radiative forcing) er endringen i netto strålingsfluks ved toppen av atmosfæren forårsaket av en endring i en ytre faktor, for eksempel endring i konsentrasjon av en drivhusgass eller solaktivitet. Måles i W/m². Positivt strålingspådriv gir oppvarming, negativt gir avkjøling.',
    },
    {
      id: 'geo2-2-2-paadriv',
      type: 'text',
      content: `## Strålingspådriv

### Hva er strålingspådriv?
Strålingspådriv beskriver hvor mye en faktor endrer energibalansen ved toppen av atmosfæren sammenlignet med førindustriell tid (vanligvis definert som 1750).

### Positive pådriv (oppvarming)
- **CO₂**: ca. +2,2 W/m² (den største enkeltfaktoren)
- **Metan**: ca. +0,5 W/m²
- **Lystgass**: ca. +0,2 W/m²
- **Fluorholdige gasser**: ca. +0,4 W/m²

### Negative pådriv (avkjøling)
- **Aerosoler**: ca. −1,1 W/m² (reflekterer sollys, påvirker skydannelse)
- **Vulkansk aktivitet**: Kortvarig avkjøling etter store utbrudd

### Netto strålingspådriv
Summen av alle positive og negative pådriv gir det netto strålingspådrivet, som i dag er tydelig positivt (ca. +2,7 W/m² ifølge IPCC AR6). Det betyr at jorden tar inn mer energi enn den sender ut — og temperaturen stiger.`,
    },
    {
      id: 'geo2-2-2-example-paadriv',
      type: 'example',
      title: 'Strålingspådriv og temperaturendring',
      problem: 'Forklar sammenhengen mellom strålingspådriv og temperaturendring.',
      solution: `**Klimafølsomhet:** Sammenhengen mellom strålingspådriv og temperatur beskrives av klimafølsomheten. En dobling av CO₂ gir et strålingspådriv på ca. 3,7 W/m².

Likevektsklimasensitiviteten (ECS) angir hvor mye temperaturen stiger ved en CO₂-dobling:
- Beste estimat: ca. 3 °C
- Sannsynlig intervall: 2,5–4,0 °C

**Regnestykke:** Netto strålingspådriv i dag er ca. 2,7 W/m², men jordens temperatur har foreløpig steget bare ca. 1,2 °C. Resten er «bundet» oppvarming som vil komme selv uten videre utslipp, fordi havet trenger tid til å varmes opp.`,
    },
    {
      id: 'geo2-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom den naturlige og den forsterkede drivhuseffekten. Hvilke menneskelige aktiviteter bidrar til den forsterkede drivhuseffekten?',
        solution: 'Den naturlige drivhuseffekten er den prosessen der naturlig forekommende drivhusgasser (vanndamp, CO₂, metan) varmer opp jorden med ca. 33 °C. Den forsterkede drivhuseffekten skyldes at menneskelig aktivitet øker konsentrasjonen av drivhusgasser utover det naturlige nivået. Viktige bidrag: forbrenning av fossilt brensel (olje, kull, gass) øker CO₂, husdyrhold og avfallsdeponier øker metan, landbruk og industri øker lystgass, og industrielle prosesser frigjør fluorholdige gasser.',
      },
    },
    {
      id: 'geo2-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva betyr positivt strålingspådriv?',
        options: [
          { id: 'a', text: 'At jorden mottar mer energi enn den sender ut, noe som gir oppvarming', isCorrect: true },
          { id: 'b', text: 'At temperaturen på jorden er positiv (over 0 °C)', isCorrect: false },
          { id: 'c', text: 'At solen sender ut mer stråling enn normalt', isCorrect: false },
          { id: 'd', text: 'At drivhuseffekten er gunstig for livet på jorden', isCorrect: false },
        ],
        solution: 'Positivt strålingspådriv betyr at en endring (f.eks. økt CO₂) fører til at jorden mottar mer energi enn den sender ut. Systemet er i ubalanse, og temperaturen vil stige inntil ny balanse oppnås.',
      },
    },
    {
      id: 'geo2-2-2-naturlig-forsterket',
      type: 'text',
      content: `## Naturlig vs. forsterket drivhuseffekt

### Den naturlige drivhuseffekten
- Har eksistert i milliarder av år
- Holder jorden ca. 33 °C varmere enn den ville vært uten atmosfære
- Gjør jorden beboelig
- Vanndamp, CO₂, metan og lystgass i naturlige mengder

### Den forsterkede (antropogene) drivhuseffekten
- Skyldes menneskelige utslipp av drivhusgasser siden den industrielle revolusjonen
- CO₂-nivået har økt fra ca. 280 ppm til over 420 ppm
- Global middeltemperatur har steget ca. 1,2 °C (per 2023)
- Hastigheten på endringene er mye raskere enn naturlige svingninger

### Vanndamp-tilbakekoblingen
Når temperaturen stiger, fordamper mer vann. Siden vanndamp er en drivhusgass, forsterker dette oppvarmingen — en positiv tilbakekobling. Vanndamp er altså en forsterker, ikke en driver av klimaendringer.`,
    },
    {
      id: 'geo2-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er oppholdstiden til CO₂ i atmosfæren, sammenlignet med metan?',
        options: [
          { id: 'a', text: 'CO₂ ca. 12 år, metan hundrevis av år', isCorrect: false },
          { id: 'b', text: 'Begge har oppholdstid på ca. 50 år', isCorrect: false },
          { id: 'c', text: 'CO₂ hundrevis til tusenvis av år, metan ca. 12 år', isCorrect: true },
          { id: 'd', text: 'CO₂ ca. 10 dager, metan ca. 100 år', isCorrect: false },
        ],
        solution: 'CO₂ har en oppholdstid på hundrevis til tusenvis av år i atmosfæren, mens metan har en oppholdstid på ca. 12 år. Derfor akkumuleres CO₂ over tid og dominerer den langsiktige oppvarmingen.',
      },
    },
    {
      id: 'geo2-2-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Drivhuseffekten** gjør jorden ca. 33 °C varmere enn den ville vært uten atmosfære
- **Drivhusgasser** absorberer og sender ut langbølget stråling — vanndamp, CO₂, metan, lystgass
- **Strålingspådriv** måler endringen i energibalansen ved toppen av atmosfæren (W/m²)
- Positivt strålingspådriv gir **oppvarming**, negativt gir avkjøling
- CO₂ er den viktigste **menneskeskapte** drivhusgassen på grunn av mengde og oppholdstid
- Netto strålingspådriv i dag er ca. +2,7 W/m² — jorden varmes opp`,
    },
    {
      id: 'geo2-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gjør rede for begrepet strålingspådriv. Nevn minst to faktorer som gir positivt strålingspådriv og én som gir negativt strålingspådriv.',
        solution: 'Strålingspådriv er endringen i netto strålingsfluks ved toppen av atmosfæren, målt i W/m², forårsaket av en ytre faktor. Positive pådriv: økt CO₂ (ca. +2,2 W/m²) og økt metan (ca. +0,5 W/m²) gir oppvarming. Negativt pådriv: aerosoler (ca. −1,1 W/m²) reflekterer sollys og stimulerer skydannelse, noe som gir avkjølende effekt.',
      },
    },
    {
      id: 'geo2-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvorfor kalles vanndamp en tilbakekoblingsmekanisme og ikke en driver av klimaendring?',
        options: [
          { id: 'a', text: 'Fordi vanndamp ikke absorberer infrarød stråling', isCorrect: false },
          { id: 'b', text: 'Fordi konsentrasjonen av vanndamp styres av temperaturen, ikke omvendt', isCorrect: true },
          { id: 'c', text: 'Fordi vanndamp bare finnes i troposfæren', isCorrect: false },
          { id: 'd', text: 'Fordi mennesker ikke kan påvirke mengden vanndamp', isCorrect: false },
        ],
        solution: 'Vanndamp er en tilbakekobling fordi konsentrasjonen i atmosfæren bestemmes av temperaturen. Varmere luft holder mer vanndamp, og siden vanndamp er en drivhusgass, forsterkes oppvarmingen. Men det er temperaturstigningen (drevet av CO₂ osv.) som styrer vanndampen, ikke omvendt.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Strålingsfordeling og årstider
// ============================================================================

export const CHAPTER_GEOFAG_2_2_3: TextbookChapter = {
  id: 'geofag-2-2-3',
  courseId: 'geofag-2',
  chapterNumber: '2.3',
  title: 'Strålingsfordeling og årstider',
  description: 'Solvinkel, breddegrad, årstidsvariasjon og forskjeller i stråling mellom tropiske og polare strøk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for strålingsbalanse, strålingsfordeling og strålingspådriv',
    'forklare konsekvensene av jordens rotasjon, tetthetsforskjeller og trykkforskjeller og hvordan de påvirker havet og atmosfæren',
  ],
  content: [
    {
      id: 'geo2-2-3-intro',
      type: 'text',
      content: `# Strålingsfordeling og årstider

Solstrålingen fordeles ikke jevnt over jordoverflaten. Breddegraden, årstiden og tiden på døgnet avgjør hvor mye solenergi et sted mottar. Denne ujevne fordelingen er drivkraften bak jordens vær- og klimasystemer.

## Læringsmål
- Forstå hvorfor strålingen fordeles ujevnt over jorden
- Forklare sammenhengen mellom solvinkel og energi per flateenhet
- Gjøre rede for årsaker til årstider
- Beskrive strålingsoverskudd og -underskudd ved ulike breddegrader`,
    },
    {
      id: 'geo2-2-3-def-solvinkel',
      type: 'definition',
      title: 'Solvinkel (solhøyde)',
      content: 'Solvinkelen er vinkelen mellom solstrålene og horisonten. Når solvinkelen er høy (solen står høyt), spres energien over et mindre areal og strålingen er mer intens. Når solvinkelen er lav (solen står lavt), spres energien over et større areal og strålingen er svakere. Ved ekvator er solvinkelen høy hele året, mens den er lav ved polene.',
    },
    {
      id: 'geo2-2-3-solvinkel',
      type: 'text',
      content: `## Solvinkelens betydning

### Energi per flateenhet
Når solen står rett over et punkt (solvinkel 90°), treffer strålene vinkelrett og gir maksimal energi per flateenhet. Når solvinkelen synker, spres de samme strålene over et større areal.

**Formel:** Stråling per flateenhet er proporsjonal med sinus av solvinkelen:
$I = I_0 \\cdot \\sin(h)$

der $h$ er solvinkelen og $I_0$ er strålingen vinkelrett på strålene.

### Atmosfærens tykkelse
Ved lav solvinkel passerer strålingen gjennom et tykkere lag av atmosfæren. Mer energi absorberes og spres, slik at enda mindre stråling når overflaten. Dette forklarer hvorfor solen virker svakere ved soloppgang og solnedgang, og ved høye breddegrader.`,
    },
    {
      id: 'geo2-2-3-example-solvinkel',
      type: 'example',
      title: 'Solvinkel og stråling',
      problem: 'Sammenlign strålingen som treffer jordoverflaten ved ekvator (solvinkel 80°) og ved 60°N (solvinkel 30°) på en bestemt dag. Anta at strålingen vinkelrett på solstrålene er 1000 W/m².',
      solution: `**Ved ekvator (solvinkel 80°):**
$I = 1000 \\cdot \\sin(80°) = 1000 \\cdot 0{,}985 = 985 \\text{ W/m}^2$

**Ved 60°N (solvinkel 30°):**
$I = 1000 \\cdot \\sin(30°) = 1000 \\cdot 0{,}500 = 500 \\text{ W/m}^2$

Overflaten ved ekvator mottar nesten dobbelt så mye stråling per kvadratmeter som ved 60°N. I tillegg passerer strålingen gjennom mer atmosfære ved 60°N, slik at den reelle forskjellen er enda større.`,
    },
    {
      id: 'geo2-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva skjer med strålingen per flateenhet når solvinkelen synker?',
        options: [
          { id: 'a', text: 'Den øker fordi strålingen spres over et mindre areal', isCorrect: false },
          { id: 'b', text: 'Den forblir uendret', isCorrect: false },
          { id: 'c', text: 'Den synker fordi strålingen spres over et større areal', isCorrect: true },
          { id: 'd', text: 'Den synker fordi solen sender ut mindre energi', isCorrect: false },
        ],
        solution: 'Ved lavere solvinkel treffer strålene overflaten i en skrå vinkel, og den samme strålingsmengden fordeles over et større areal. Dermed blir energien per flateenhet lavere.',
      },
    },
    {
      id: 'geo2-2-3-def-aarstider',
      type: 'definition',
      title: 'Årstider',
      content: 'Årstidene skyldes at jordens rotasjonsakse er tiltet ca. 23,5° i forhold til baneplanet rundt solen. Denne aksehellningen gjør at den nordlige og sørlige halvkule vekselvis vender mot solen, noe som gir variasjon i solvinkel og daglengde gjennom året.',
    },
    {
      id: 'geo2-2-3-aarstider',
      type: 'text',
      content: `## Årstidene og jordens aksehelling

### Aksehellningen (23,5°)
Jordaksen peker i tilnærmet samme retning i rommet gjennom hele banen rundt solen. Når nordpolen heller mot solen, er det sommer på nordlige halvkule og vinter på sørlige halvkule.

### Viktige datoer
- **Sommersolverv (ca. 21. juni):** Nordpolen heller mest mot solen. Lengste dag på nordlige halvkule. Solen står i senit ved Steinbukkens vendekrets (23,5°N).
- **Vintersolverv (ca. 21. desember):** Nordpolen heller bort fra solen. Korteste dag på nordlige halvkule. Solen i senit ved Krepsens vendekrets (23,5°S).
- **Vår- og høstjevndøgn (ca. 20. mars og 22. september):** Solen i senit ved ekvator. Dag og natt er omtrent like lange overalt.

### Daglengde
Ved høye breddegrader er daglengdevariasjonen stor:
- Tromsø (69°N): Fra mørketid (0 timer sol) til midnattssol (24 timer)
- Oslo (60°N): Fra ca. 6 timer til ca. 18,5 timer
- Ekvator: Ca. 12 timer hele året`,
    },
    {
      id: 'geo2-2-3-example-aarstider',
      type: 'example',
      title: 'Stråling og breddegrad',
      problem: 'Forklar hvorfor temperaturen ved polene er lavere enn ved ekvator, selv om polene kan motta 24 timer solskinn om sommeren.',
      solution: `**Selv med 24 timer sol har polene lavere temperatur fordi:**

1. **Lav solvinkel:** Selv ved midnattssol er solvinkelen svært lav ved polene. Solstrålingen fordeles over et stort areal og passerer gjennom et tykt atmosfærelag.

2. **Høy albedo:** Is og snø ved polene reflekterer 50–90 % av innkommende stråling.

3. **Totalstråling gjennom året:** Polene mottar mye stråling om sommeren, men ingenting i vinterhalvåret. Gjennomsnittet over et helt år er langt lavere enn ved ekvator.

4. **Energitap:** Polområdene stråler ut mer langbølget stråling enn de mottar av solstråling — de har et strålingsunderskudd som kompenseres av varmetransport fra lavere breddegrader.`,
    },
    {
      id: 'geo2-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor jorden har årstider. Hvorfor er det feil å si at årstidene skyldes at jorden er nærmere solen om sommeren?',
        solution: 'Årstidene skyldes at jordaksen er tiltet 23,5° i forhold til baneplanet. Når nordpolen heller mot solen, får nordlige halvkule mer stråling (høyere solvinkel og lengre dager), og det er sommer. Det er feil å si at årstidene skyldes avstanden til solen, fordi jorden faktisk er nærmest solen i januar (perihel) — altså midt i vinteren på nordlige halvkule. Dessuten har de to halvkulene motsatte årstider samtidig, noe som ikke kan forklares med avstand.',
      },
    },
    {
      id: 'geo2-2-3-straalingsfordeling',
      type: 'text',
      content: `## Strålingsoverskudd og strålingsunderskudd

### Ujevn fordeling
- Mellom ca. 35°N og 35°S mottar jordoverflaten mer solstråling enn den sender ut (strålingsoverskudd)
- Over ca. 35° bredde sender overflaten ut mer stråling enn den mottar (strålingsunderskudd)

### Konsekvens: Global energitransport
Denne ubalansen betyr at energi må transporteres fra tropene mot polene for at systemet skal være i balanse. Energien transporteres av:
- **Atmosfæren:** Vinder og værsystemer (ca. 60 % av transporten)
- **Havet:** Havstrømmer som Golfstrømmen (ca. 40 % av transporten)

Uten denne transporten ville tropene blitt stadig varmere og polene stadig kaldere. De globale sirkulasjonsstrømmene i atmosfæren og havet er en direkte konsekvens av ujevn strålingsfordeling.`,
    },
    {
      id: 'geo2-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Ved omtrent hvilken breddegrad går grensen mellom strålingsoverskudd og strålingsunderskudd?',
        options: [
          { id: 'a', text: 'Ca. 23,5°', isCorrect: false },
          { id: 'b', text: 'Ca. 35°', isCorrect: true },
          { id: 'c', text: 'Ca. 60°', isCorrect: false },
          { id: 'd', text: 'Ca. 45°', isCorrect: false },
        ],
        solution: 'Grensen mellom strålingsoverskudd og strålingsunderskudd ligger ved ca. 35° bredde, både nord og sør. Områder nærmere ekvator har overskudd, mens områder nærmere polene har underskudd.',
      },
    },
    {
      id: 'geo2-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva som menes med strålingsoverskudd og strålingsunderskudd. Beskriv hvordan energien transporteres for å utligne denne ubalansen.',
        solution: 'Strålingsoverskudd betyr at et område mottar mer solstråling enn det sender ut langbølget stråling til verdensrommet. Strålingsunderskudd betyr det motsatte. Tropene (mellom ca. 35°N og 35°S) har overskudd, mens polare områder har underskudd. Ubalansen utlignes ved at atmosfæren (gjennom vinder og værsystemer) transporterer ca. 60 % av energien mot polene, og havet (gjennom strømmer som Golfstrømmen) transporterer ca. 40 %. Denne energitransporten er selve drivkraften bak de store vind- og havstrømsystemene.',
      },
    },
    {
      id: 'geo2-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er den viktigste årsaken til årstidene?',
        options: [
          { id: 'a', text: 'Variasjonen i avstanden mellom jorden og solen gjennom året', isCorrect: false },
          { id: 'b', text: 'Endring i solaktiviteten gjennom solsyklusen', isCorrect: false },
          { id: 'c', text: 'Jordaksens helling på 23,5° i forhold til baneplanet', isCorrect: true },
          { id: 'd', text: 'Månens gravitasjonspåvirkning på jorden', isCorrect: false },
        ],
        solution: 'Årstidene skyldes at jordaksen er tiltet 23,5° i forhold til baneplanet. Dette gjør at solhøyden og daglengden varierer gjennom året, noe som gir ulik oppvarming av halvkulene.',
      },
    },
    {
      id: 'geo2-2-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Solvinkelen** avgjør stråling per flateenhet — høy vinkel gir mer intens stråling
- **Årstidene** skyldes jordaksens helling på 23,5° — ikke avstanden til solen
- **Tropene** har strålingsoverskudd, **polene** har strålingsunderskudd
- Ubalansen utlignes ved **energitransport** gjennom atmosfæren (vinder) og havet (strømmer)
- Daglengden varierer kraftig med breddegraden, spesielt nær polene
- Den ujevne strålingsfordelingen er **drivkraften** bak global atmosfærisk og osean sirkulasjon`,
    },
    {
      id: 'geo2-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Bruk formelen $I = I_0 \\cdot \\sin(h)$ til å beregne strålingen per flateenhet ved en solvinkel på 45°. Anta at $I_0 = 1000$ W/m². Sammenlign med strålingen ved solvinkler 90° og 15°.',
        solution: 'Ved solvinkel 45°: $I = 1000 \\cdot \\sin(45°) = 1000 \\cdot 0{,}707 = 707$ W/m². Ved 90°: $I = 1000 \\cdot \\sin(90°) = 1000$ W/m². Ved 15°: $I = 1000 \\cdot \\sin(15°) = 1000 \\cdot 0{,}259 = 259$ W/m². Forskjellen er dramatisk: ved lav solvinkel (15°, typisk for polare strøk) er strålingen bare ca. 26 % av strålingen ved rett innfall (90°, typisk for tropene). Dette forklarer mye av temperaturforskjellene mellom breddegrader.',
      },
    },
    {
      id: 'geo2-2-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-3-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hva skjer ved vårjevndøgn (ca. 20. mars)?',
        options: [
          { id: 'a', text: 'Solen står i senit over Steinbukkens vendekrets', isCorrect: false },
          { id: 'b', text: 'Solen står i senit over ekvator, dag og natt er omtrent like lange', isCorrect: true },
          { id: 'c', text: 'Nordpolen har midnattssol', isCorrect: false },
          { id: 'd', text: 'Nordlige halvkule har den korteste dagen', isCorrect: false },
        ],
        solution: 'Ved vårjevndøgn (ca. 20. mars) står solen i senit over ekvator, og dag og natt er omtrent like lange (12 timer) overalt på jorden. Etter vårjevndøgn begynner dagene å bli lengre på nordlige halvkule.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Trykkforskjeller og global sirkulasjon
// ============================================================================

export const CHAPTER_GEOFAG_2_2_4: TextbookChapter = {
  id: 'geofag-2-2-4',
  courseId: 'geofag-2',
  chapterNumber: '2.4',
  title: 'Trykkforskjeller og global sirkulasjon',
  description: 'Atmosfærisk trykk, trykkgradientkraften, Hadley-, Ferrel- og polarceller.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare konsekvensene av jordens rotasjon, tetthetsforskjeller og trykkforskjeller og hvordan de påvirker havet og atmosfæren',
  ],
  content: [
    {
      id: 'geo2-2-4-intro',
      type: 'text',
      content: `# Trykkforskjeller og global sirkulasjon

Ujevn oppvarming av jordoverflaten skaper temperaturforskjeller som fører til trykkforskjeller i atmosfæren. Disse trykkforskjellene er den grunnleggende drivkraften bak vind og det globale sirkulasjonsmønsteret. I dette kapitlet ser vi på hvordan atmosfæren organiseres i store sirkulasjonsceller.

## Læringsmål
- Forstå sammenhengen mellom temperatur, tetthet og lufttrykk
- Forklare trykkgradientkraften
- Beskrive de tre sirkulasjonscellene: Hadley, Ferrel og polarcellen
- Forstå trykksoner og konvergenssoner`,
    },
    {
      id: 'geo2-2-4-def-lufttrykk',
      type: 'definition',
      title: 'Atmosfærisk lufttrykk',
      content: 'Atmosfærisk lufttrykk er vekten av luftsøylen over et gitt punkt. Standardtrykk ved havnivå er 1013,25 hPa (hektopascal). Varm luft er lettere (lavere tetthet) enn kald luft, og dette skaper trykkforskjeller som driver vindene.',
    },
    {
      id: 'geo2-2-4-trykk-temp',
      type: 'text',
      content: `## Sammenhengen mellom temperatur, tetthet og trykk

### Grunnprinsippet
1. **Solen varmer jordoverflaten** ujevnt — mest ved ekvator, minst ved polene
2. **Varm luft utvider seg**, blir lettere (lavere tetthet) og stiger — danner **lavtrykk** ved bakken
3. **Kald luft er tung** (høy tetthet) og synker — danner **høytrykk** ved bakken
4. **Trykkforskjeller** mellom ulike områder skaper en kraft som setter luften i bevegelse

### Trykkgradientkraften
Luft strømmer fra områder med høytrykk mot lavtrykk. Jo større trykkforskjellen er over en gitt avstand, desto sterkere er vinden. Trykkgradientkraften virker vinkelrett på isobarene (linjer med likt trykk) og peker mot lavtrykket.

### Konveksjon
Vertikal luftbevegelse som skyldes temperaturforskjeller kalles konveksjon. Varm luft stiger (oppdrift) og kald luft synker. Konveksjon er drivkraften bak atmosfærens sirkulasjon.`,
    },
    {
      id: 'geo2-2-4-def-trykkgradient',
      type: 'definition',
      title: 'Trykkgradientkraften',
      content: 'Trykkgradientkraften (PGF — Pressure Gradient Force) er kraften som driver luft fra høytrykk mot lavtrykk. Den virker vinkelrett på isobarene og er proporsjonal med trykkforskjellen per avstandsenhet. Trykkgradientkraften er den primære drivkraften for all vind.',
    },
    {
      id: 'geo2-2-4-example-konveksjon',
      type: 'example',
      title: 'Termisk sirkulasjon',
      problem: 'Beskriv hvordan en sjøbris oppstår ved kysten på en varm sommerdag.',
      solution: `**Sjøbris — et eksempel på termisk sirkulasjon:**

1. **Ulik oppvarming:** Landoverflaten varmes raskere enn havet av solen fordi land har lavere varmekapasitet.
2. **Luft stiger over land:** Den varme luften over land stiger (konveksjon), og lavtrykk dannes ved bakken.
3. **Høytrykk over havet:** Luften over havet er kaldere og tyngre, og det dannes relativt høytrykk.
4. **Sjøbris:** Trykkgradientkraften driver luft fra havet mot land — sjøbrisen blåser inn fra sjøen.
5. **Returstrømning:** Høyt oppe strømmer luft fra land mot hav for å lukke sirkelen.

Om natten kan det motsatte skje (landbris), fordi land avkjøles raskere enn hav.`,
    },
    {
      id: 'geo2-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva skjer med lufttrykket ved bakken når jordoverflaten varmes opp?',
        options: [
          { id: 'a', text: 'Trykket øker fordi varm luft veier mer', isCorrect: false },
          { id: 'b', text: 'Trykket synker fordi varm luft er lettere og stiger', isCorrect: true },
          { id: 'c', text: 'Trykket forblir uendret', isCorrect: false },
          { id: 'd', text: 'Trykket svinger opp og ned uforutsigbart', isCorrect: false },
        ],
        solution: 'Når overflaten varmes opp, utvider luften seg og stiger. Tettheten reduseres og trykkforskjellen gjør at det dannes et lavtrykk ved bakken. Luft fra omgivelsene strømmer inn for å erstatte den stigende luften.',
      },
    },
    {
      id: 'geo2-2-4-sirkulasjon',
      type: 'text',
      content: `## Den globale atmosfæresirkulasjonen

### Enmcellemodellen (Hadleys opprinnelige idé)
George Hadley foreslo i 1735 en enkel modell: Varm luft stiger ved ekvator, strømmer mot polene, avkjøles, synker og strømmer tilbake. Men jordens rotasjon gjør virkeligheten mer kompleks.

### Trecellersmodellen
Atmosfærens sirkulasjon organiseres i tre store celler på hver halvkule:

#### 1. Hadleycellen (0°–30° bredde)
- **Oppstigning:** Intens oppvarming ved ekvator gir kraftig konveksjon
- **Høytstrøm mot polene:** Øverst i troposfæren strømmer luft mot nord (på nordlige halvkule)
- **Synking ved 30°:** Luften avkjøles og synker — danner subtropisk høytrykk
- **Returstrøm:** Bakkevind tilbake mot ekvator — passatvindene

#### 2. Polarcellen (60°–90° bredde)
- **Kald luft synker ved polene:** Danner polart høytrykk
- **Bakkevind mot ekvator:** Polar østlig vind
- **Oppstigning ved ca. 60°:** Varm og kald luft møtes, luften stiger

#### 3. Ferrelcellen (30°–60° bredde)
- **Indirekte celle:** Drives av Hadley- og polarcellen
- **Bakkevind mot polene:** Vestavindbeltet
- **Oppstigning ved ca. 60°:** Subpolar lavtrykksone
- **Synking ved ca. 30°:** Bidrar til subtropisk høytrykk`,
    },
    {
      id: 'geo2-2-4-def-hadley',
      type: 'definition',
      title: 'Hadleycellen',
      content: 'Hadleycellen er den termisk drevne sirkulasjonscellen mellom ekvator og ca. 30° bredde. Varm, fuktig luft stiger ved ekvator i den intertropiske konvergenssonen (ITCZ), strømmer mot polene i høyden, synker i subtropene og returnerer mot ekvator som passatvind.',
    },
    {
      id: 'geo2-2-4-trykksoner',
      type: 'text',
      content: `## Trykksoner og nedbørsmønster

Den globale sirkulasjonen skaper karakteristiske trykksoner:

### Lavtrykksoner (stigende luft = nedbørsrike)
- **ITCZ (ca. 0°):** Den intertropiske konvergenssonen. Kraftig oppstigning, mye nedbør. Tropisk regnskog.
- **Subpolar lavtrykksone (ca. 60°):** Varm og kald luft møtes. Ustabilt vær, mye nedbør.

### Høytrykksoner (synkende luft = tørre)
- **Subtropisk høytrykk (ca. 30°):** Tørr, synkende luft. Verdens store ørkener (Sahara, Kalahari, Australia) ligger her.
- **Polart høytrykk (ca. 90°):** Kald, synkende luft. Lite nedbør (polområdene er egentlig ørkenområder).

### Sesongvariasjon
ITCZ og trykksonene forskyves nordover om sommeren og sørover om vinteren, i takt med solens senithøyde. Dette gir monsunregn i mange tropiske regioner.`,
    },
    {
      id: 'geo2-2-4-example-oerken',
      type: 'example',
      title: 'Ørkener og subtropisk høytrykk',
      problem: 'Forklar hvorfor de fleste av verdens store ørkener ligger ved ca. 30° bredde.',
      solution: `**Sammenhengen mellom sirkulasjon og ørken:**

1. I Hadleycellen stiger varm, fuktig luft ved ekvator og danner store mengder nedbør (tropisk regnskog).
2. Luften mister fuktighet gjennom nedbør under stigningen.
3. I øvre troposfære strømmer den tørre luften mot polene.
4. Ved ca. 30° bredde synker luften (subsidens). Synkende luft komprimeres og varmes adiabatisk opp.
5. Den varme, tørre synkende luften gir stabilt vær med lite skydannelse.
6. Resultatet er **subtropisk høytrykk** med tørre, klare forhold.

Derfor finner vi Sahara (Nord-Afrika, 30°N), den arabiske ørkenen, Sonoran-ørkenen (USA/Mexico), Kalahari og Namib (Sør-Afrika, 30°S) og den australske ørkenen ved disse breddegradene.`,
    },
    {
      id: 'geo2-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv de tre sirkulasjonscellene i atmosfæren (Hadley-, Ferrel- og polarcellen). Angi for hver celle i hvilken retning luften beveger seg ved bakken og i høyden.',
        solution: 'Hadleycellen (0°–30°): Luft stiger ved ekvator (ITCZ), strømmer mot polene i høyden, synker ved ca. 30° (subtropisk høytrykk), og returnerer mot ekvator ved bakken som passatvind. Ferrelcellen (30°–60°): En indirekte celle der bakkeluft strømmer mot polene (vestavindsbeltet), stiger ved ca. 60° (subpolar lavtrykk), strømmer mot ekvator i høyden og synker ved ca. 30°. Polarcellen (60°–90°): Kald luft synker ved polen (polart høytrykk), strømmer mot ekvator ved bakken (polar østavind), og stiger ved ca. 60° der den møter varmere luft.',
      },
    },
    {
      id: 'geo2-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er den intertropiske konvergenssonen (ITCZ)?',
        options: [
          { id: 'a', text: 'En sone med synkende luft og lite nedbør ved ekvator', isCorrect: false },
          { id: 'b', text: 'En sone der passatvindene fra nord og sør møtes, luften stiger og gir mye nedbør', isCorrect: true },
          { id: 'c', text: 'En sone med sterk vind ved ca. 30° bredde', isCorrect: false },
          { id: 'd', text: 'En sone der ozonlaget er tynnest', isCorrect: false },
        ],
        solution: 'ITCZ (Intertropical Convergence Zone) er sonen nær ekvator der passatvindene fra nordlig og sørlig halvkule konvergerer. Den varme, fuktige luften stiger kraftig og danner store cumulonimbusskyer med intens nedbør. ITCZ vandrer nord–sør med årstidene.',
      },
    },
    {
      id: 'geo2-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor de store ørkenene på jorden ligger ved omtrent 30° bredde. Bruk begrepene Hadleycellen, subsidens og adiabatisk oppvarming i svaret ditt.',
        solution: 'I Hadleycellen stiger varm, fuktig luft ved ekvator og avgir fuktighet som kraftig nedbør. Den nå tørre luften strømmer mot polene i høyden. Ved ca. 30° bredde synker luften (subsidens). Når luft synker, komprimeres den og varmes adiabatisk opp uten å tilføres fuktighet. Denne varme, tørre synkende luften skaper stabilt høytrykk med lite skydannelse og svært lite nedbør. Derfor finner vi verdens store ørkener som Sahara, den arabiske ørkenen og den australske ørkenen ved disse breddegradene.',
      },
    },
    {
      id: 'geo2-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilken sirkulasjonscelle er en indirekte (termisk) celle?',
        options: [
          { id: 'a', text: 'Hadleycellen', isCorrect: false },
          { id: 'b', text: 'Polarcellen', isCorrect: false },
          { id: 'c', text: 'Ferrelcellen', isCorrect: true },
          { id: 'd', text: 'Alle tre er direkte celler', isCorrect: false },
        ],
        solution: 'Ferrelcellen (30°–60°) er en indirekte celle som drives av Hadley- og polarcellen. Hadleycellen og polarcellen er termisk direkte celler drevet av oppvarming og avkjøling.',
      },
    },
    {
      id: 'geo2-2-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Trykkgradientkraften** driver luft fra høytrykk til lavtrykk — den primære vindkraften
- Varm luft stiger (lavtrykk), kald luft synker (høytrykk)
- Tre sirkulasjonsceller på hver halvkule: **Hadley** (0°–30°), **Ferrel** (30°–60°), **Polar** (60°–90°)
- **ITCZ** (ekvator): Stigende luft og mye nedbør
- **Subtropisk høytrykk** (30°): Synkende luft, ørkener
- **Subpolar lavtrykk** (60°): Ustabilt vær, nedbør
- **Polart høytrykk** (90°): Kaldt og tørt`,
    },
    {
      id: 'geo2-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv hva en sjøbris er og forklar hvordan den oppstår. Bruk begrepene trykkgradientkraft, konveksjon og varmekapasitet.',
        solution: 'Sjøbris er en lokal vind som blåser fra havet mot land på dagtid. Land har lavere varmekapasitet enn vann og varmes raskere. Den varme luften over land stiger (konveksjon), og det dannes lavtrykk ved bakken. Over det kaldere havet dannes relativt høytrykk. Trykkgradientkraften driver luft fra høytrykk (hav) mot lavtrykk (land), og resultatet er en frisk sjøbris. Om natten kan forholdet snu (landbris) fordi land avkjøles raskere.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Vind og Coriolis-effekten
// ============================================================================

export const CHAPTER_GEOFAG_2_2_5: TextbookChapter = {
  id: 'geofag-2-2-5',
  courseId: 'geofag-2',
  chapterNumber: '2.5',
  title: 'Vind og Coriolis-effekten',
  description: 'Corioliseffekten, geostrofisk vind, passatvinder, jetstrømmer og monsun.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare konsekvensene av jordens rotasjon, tetthetsforskjeller og trykkforskjeller og hvordan de påvirker havet og atmosfæren',
  ],
  content: [
    {
      id: 'geo2-2-5-intro',
      type: 'text',
      content: `# Vind og Coriolis-effekten

Når trykkgradientkraften setter luften i bevegelse, påvirkes den også av jordens rotasjon. Coriolis-effekten avbøyer vinden til høyre på den nordlige halvkule og til venstre på den sørlige halvkule. Samspillet mellom trykkgradientkraften, Corioliskraften og friksjon bestemmer vindens retning og hastighet.

## Læringsmål
- Forstå Coriolis-effekten og dens årsak
- Forklare geostrofisk vind
- Beskrive de store vindsystemene: passatvinder, vestavinder og polarøstavinder
- Kjenne til jetstrømmenes betydning
- Forstå monsunsystemet`,
    },
    {
      id: 'geo2-2-5-def-coriolis',
      type: 'definition',
      title: 'Coriolis-effekten',
      content: 'Coriolis-effekten er en tilsynelatende avbøyning av bevegelige objekter (inkludert luft og vann) forårsaket av jordens rotasjon. På nordlige halvkule avbøyes bevegelsen til høyre, på sørlige halvkule til venstre. Effekten er null ved ekvator og sterkest ved polene. Den er proporsjonal med vindhastigheten og breddegradens sinus.',
    },
    {
      id: 'geo2-2-5-coriolis',
      type: 'text',
      content: `## Hvordan Coriolis-effekten virker

### Årsaken
Jorden roterer raskere ved ekvator (ca. 1670 km/t) enn ved polene (ca. 0 km/t). Når luft beveger seg fra ekvator mot nord, beholder den sin opprinnelige østlige hastighet. Jordoverflaten under den beveger seg saktere, og luften ser ut til å avbøyes mot høyre (østover).

### Viktige egenskaper
- **Avbøyning til høyre** på nordlige halvkule
- **Avbøyning til venstre** på sørlige halvkule
- **Null ved ekvator** — Coriolis-effekten virker ikke rett på ekvator
- **Sterkest ved polene** — proporsjonal med $\\sin(\\phi)$ der $\\phi$ er breddegraden
- **Påvirker ikke hastigheten** — bare retningen
- Virker bare på objekter i bevegelse

### Coriolisparameteren
$f = 2 \\Omega \\sin(\\phi)$

der $\\Omega$ er jordens rotasjonshastighet og $\\phi$ er breddegraden.`,
    },
    {
      id: 'geo2-2-5-example-coriolis',
      type: 'example',
      title: 'Coriolis-effekten i praksis',
      problem: 'En luftpakke starter å bevege seg rett nordover fra 30°N på grunn av trykkgradientkraften. Hva skjer med bevegelsesretningen?',
      solution: `**Steg for steg:**

1. **Start:** Luften beveger seg rett nordover (fra høytrykk mot lavtrykk).
2. **Coriolis-avbøyning:** På nordlige halvkule avbøyes bevegelsen til høyre.
3. **Gradvis dreining:** Luften avbøyes mot øst (nordøst → øst).
4. **Likevekt:** Når Corioliskraften balanserer trykkgradientkraften, blåser vinden parallelt med isobarene — dette er **geostrofisk vind**.

Resultatet er at vinden ikke blåser rett fra høy- til lavtrykk, men tilnærmet parallelt med isobarene med lavtrykket til venstre (på nordlige halvkule).`,
    },
    {
      id: 'geo2-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'I hvilken retning avbøyes vinden av Coriolis-effekten på nordlige halvkule?',
        options: [
          { id: 'a', text: 'Til venstre for bevegelsesretningen', isCorrect: false },
          { id: 'b', text: 'Til høyre for bevegelsesretningen', isCorrect: true },
          { id: 'c', text: 'Oppover', isCorrect: false },
          { id: 'd', text: 'I motsatt retning av bevegelsen', isCorrect: false },
        ],
        solution: 'På nordlige halvkule avbøyes all horisontal bevegelse til høyre av Coriolis-effekten. På sørlige halvkule avbøyes bevegelsen til venstre. Ved ekvator er Coriolis-effekten null.',
      },
    },
    {
      id: 'geo2-2-5-def-geostrofisk',
      type: 'definition',
      title: 'Geostrofisk vind',
      content: 'Geostrofisk vind er en idealisert vind der trykkgradientkraften og Corioliskraften er i balanse. Vinden blåser parallelt med isobarene, med lavtrykket til venstre på nordlige halvkule (og til høyre på sørlige halvkule). Geostrofisk vind er en god tilnærming for frie atmosfæren over ca. 1 km høyde, der friksjon er ubetydelig.',
    },
    {
      id: 'geo2-2-5-vindtyper',
      type: 'text',
      content: `## Vindtyper og krefter

### Geostrofisk vind (fri atmosfære)
- Trykkgradientkraft = Corioliskraft
- Vinden blåser parallelt med isobarene
- Gjelder over ca. 1000 m (over grensesjiktet)
- Lavtrykk til venstre (nordlige halvkule)

### Gradientvind (krumme isobarer)
Når isobarene er krumme (rundt lav- eller høytrykk), virker også sentripetalkraft. Vinden blåser langs de krumme isobarene.

### Overflatevind (bakkenivå)
- Friksjon med jordoverflaten bremser vinden
- Corioliskraften reduseres (den er proporsjonal med vindhastigheten)
- Vinden dreier inn mot lavtrykket (ca. 15–30° over hav, mer over land)
- Vinden spiraler innover i lavtrykk og utover i høytrykk

### Buyse-Ballots lov
Står du med ryggen til vinden på nordlige halvkule, er lavtrykket til venstre foran deg.`,
    },
    {
      id: 'geo2-2-5-example-geostrofisk',
      type: 'example',
      title: 'Vinddreining med høyden',
      problem: 'Forklar hvorfor vinden ved bakken blåser mer inn mot lavtrykket enn vinden i fri atmosfære.',
      solution: `**Friksjonens effekt på vind:**

1. **I fri atmosfære** (over ca. 1 km): Trykkgradientkraften balanserer Corioliskraften. Vinden er geostrofisk og blåser parallelt med isobarene.

2. **Ved bakken**: Friksjon bremser vinden. Lavere hastighet gir svakere Corioliskraft.

3. **Ubalanse:** Trykkgradientkraften er nå sterkere enn Corioliskraften. Vinden dreier mot lavtrykket.

4. **Resultat:** Bakkevindens retning avviker ca. 15–30° fra isobarene over hav og opptil 45° over ujevnt landskap.

5. **Konsekvens:** Ved bakken spiraler luft inn mot sentrum av lavtrykk og ut fra sentrum av høytrykk. Denne innstrømmingen i lavtrykk fører til at luft presses opp (oppstigning), noe som gir skydannelse og nedbør.`,
    },
    {
      id: 'geo2-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner geostrofisk vind?',
        options: [
          { id: 'a', text: 'Vinden blåser rett fra høytrykk til lavtrykk', isCorrect: false },
          { id: 'b', text: 'Vinden blåser parallelt med isobarene med lavtrykk til venstre (nordlige halvkule)', isCorrect: true },
          { id: 'c', text: 'Vinden blåser alltid fra vest mot øst', isCorrect: false },
          { id: 'd', text: 'Vinden er sterkest ved ekvator', isCorrect: false },
        ],
        solution: 'Geostrofisk vind oppstår når trykkgradientkraften balanserer Corioliskraften. Vinden blåser parallelt med isobarene med lavtrykket til venstre på nordlige halvkule. Denne tilnærmingen gjelder i fri atmosfære over grensesjiktet.',
      },
    },
    {
      id: 'geo2-2-5-vindsystemer',
      type: 'text',
      content: `## De store vindsystemene

### Passatvindene (0°–30°)
- Bakkestrøm i Hadleycellen
- Blåser fra subtropisk høytrykk mot ekvator
- Nordlige halvkule: **nordøstpassaten** (avbøyd til høyre)
- Sørlige halvkule: **sørøstpassaten** (avbøyd til venstre)
- Svært stabile og forutsigbare — viktige for seilskip historisk
- Møtes i ITCZ

### Vestavindsbeltet (30°–60°)
- Bakkestrøm i Ferrelcellen
- Blåser fra subtropisk høytrykk mot polene
- Avbøyes av Coriolis-effekten til vestavinder (sørvestlig på nordlige halvkule)
- Dominerer værmønsteret i Norge og Nord-Europa
- Mer ustabilt enn passatvindene, påvirket av sykloner og fronter

### Polar østlig vind (60°–90°)
- Bakkestrøm i polarcellen
- Blåser fra polene mot ekvator
- Avbøyes til østlig (nordøstlig på nordlige halvkule)
- Kald og tørr luft`,
    },
    {
      id: 'geo2-2-5-def-jetstroemmer',
      type: 'definition',
      title: 'Jetstrømmer',
      content: 'Jetstrømmer er smale bånd av svært sterk vind (typisk over 100 km/t, opptil 400 km/t) i øvre troposfære, på ca. 9–12 km høyde. De oppstår der store temperaturforskjeller mellom luftmasser skaper sterke trykkgradienter i høyden. De to viktigste er den subtropiske jetstrømmen (ca. 30°) og polarfrontjetstrømmen (ca. 50–60°).',
    },
    {
      id: 'geo2-2-5-jetstroemmer',
      type: 'text',
      content: `## Jetstrømmene

### Polarfrontjetstrømmen (ca. 50–60°)
- Ligger ved grensen mellom kald polarluft og varm subtropisk luft
- Bukter seg i store bølger (Rossby-bølger) som styrer lavtrykks-baner
- Viktig for været i Norge — bestemmer om vi får mild eller kald luft
- Kan flytte seg nord–sør og endre styrke

### Subtropisk jetstrøm (ca. 30°)
- Ligger ved toppen av Hadleycellen
- Generelt mer stabil enn polarfrontjeten
- Viktig for flytrafikk — fly utnytter jetstrømmen for å spare drivstoff

### Rossby-bølger
Polarfrontjetstrømmen bukter seg i store bølger:
- **Rygger** (nordlige bukter): Varmluftsvorstøt, høytrykksforhold
- **Trau** (sørlige bukter): Kaldluftsvorstøt, lavtrykksforhold
- Bølgene vandrer østover og styrer værsystemenes forflytning`,
    },
    {
      id: 'geo2-2-5-example-jet',
      type: 'example',
      title: 'Jetstrømmens påvirkning på været',
      problem: 'Forklar hvordan jetstrømmens posisjon påvirker værmønsteret i Norge.',
      solution: `**Jetstrømmens innflytelse på norsk vær:**

1. **Jetstrømmen sør for Norge:** Lavtrykk passerer sør for oss. Norge får kald, arktisk luft fra nord — kalde perioder.

2. **Jetstrømmen rett over Norge:** Vi ligger i den aktive værsonen med hyppige lavtrykk og fronter — vått og vindfullt vær.

3. **Jetstrømmen nord for Norge:** Lavtrykkene passerer nord for oss. Vi får mild luft fra sør eller sørvest — varme og tørre perioder.

4. **Blokkering (omega-blokkering):** Noen ganger danner jetstrømmen en vedvarende buktning (Ω-form) som blokkerer lavtrykk i ukevis. Dette kan gi langvarig varmt eller kaldt vær avhengig av posisjonen.

Jetstrømmens posisjon varierer fra dag til dag og sesong til sesong, og er en nøkkel til å forstå Norges skiftende vær.`,
    },
    {
      id: 'geo2-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken retning blåser passatvindene på nordlige halvkule?',
        options: [
          { id: 'a', text: 'Fra sørøst', isCorrect: false },
          { id: 'b', text: 'Fra nordøst', isCorrect: true },
          { id: 'c', text: 'Fra nordvest', isCorrect: false },
          { id: 'd', text: 'Fra sørvest', isCorrect: false },
        ],
        solution: 'Passatvindene blåser fra subtropisk høytrykk (30°) mot ekvator. Coriolis-effekten avbøyer dem til høyre på nordlige halvkule, slik at de blåser fra nordøst. På sørlige halvkule avbøyes de til venstre og blåser fra sørøst.',
      },
    },
    {
      id: 'geo2-2-5-monsun',
      type: 'text',
      content: `## Monsunsystemet

### Hva er monsun?
Monsun er et sesongbetont vindsystem forårsaket av ulik oppvarming av land og hav gjennom året. Det er en stor-skala sjøbris.

### Sør-Asia som eksempel
- **Sommermonsun (juni–september):** Det indiske subkontinentet varmes kraftig opp. Lavtrykk over land trekker fuktig luft fra Indiahavet innover. ITCZ forskyves nordover. Resultatet er enorm nedbør.
- **Vintermonsun (desember–februar):** Kontinentet avkjøles raskere enn havet. Høytrykk over land sender tørr luft mot havet. Tørr sesong.

### Monsunens drivkrefter
1. Ulik varmekapasitet mellom land og hav
2. ITCZ-forskyvning med årstidene
3. Corioliseffekten som styrer vindretningen
4. Topografi (Himalaya blokkerer kald luft fra nord)

Monsunregn er livsviktig for milliardvis av mennesker, men kan også gi ødeleggende flom.`,
    },
    {
      id: 'geo2-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar Coriolis-effekten. Hvorfor er effekten null ved ekvator og sterkest ved polene?',
        solution: 'Coriolis-effekten skyldes jordens rotasjon. Fordi jorden roterer raskere ved ekvator enn ved polene, vil et objekt som beveger seg nord- eller sørover beholde sin opprinnelige rotasjonshastighet og dermed avbøyes i forhold til jordoverflaten under. Ved ekvator er det ingen komponent av jordens rotasjon som virker vinkelrett på horisontalplanet, så effekten er null. Ved polene er rotasjonsaksen vertikal og Corioliskraften er maksimal. Matematisk er effekten proporsjonal med sin(φ), der φ er breddegraden: sin(0°) = 0 ved ekvator og sin(90°) = 1 ved polen.',
      },
    },
    {
      id: 'geo2-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er en jetstrøm?',
        options: [
          { id: 'a', text: 'En sterk havstrøm i tropene', isCorrect: false },
          { id: 'b', text: 'Et smalt bånd av svært sterk vind i øvre troposfære (9–12 km høyde)', isCorrect: true },
          { id: 'c', text: 'En type vulkansk gassutslipp', isCorrect: false },
          { id: 'd', text: 'En sterk vind som bare oppstår under stormer', isCorrect: false },
        ],
        solution: 'Jetstrømmer er smale bånd av sterk vind (over 100 km/t, opptil 400 km/t) i øvre troposfære på 9–12 km høyde. De oppstår der store temperaturforskjeller mellom luftmasser skaper sterke trykkgradienter i høyden.',
      },
    },
    {
      id: 'geo2-2-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Coriolis-effekten** avbøyer vind til høyre (nordlige halvkule) og venstre (sørlige halvkule)
- **Geostrofisk vind** blåser parallelt med isobarene der trykkgradient- og Corioliskraft er i balanse
- **Passatvindene** blåser fra NØ (nord) og SØ (sør) mot ekvator
- **Vestavindsbeltet** (30°–60°) dominerer Norges vær
- **Jetstrømmene** styrer lavtrykksbanene og værmønstrene
- **Rossby-bølger** i jetstrømmen gir veksling mellom varme og kalde perioder
- **Monsun** er sesongbetont vind drevet av ulik oppvarming av land og hav`,
    },
    {
      id: 'geo2-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Gjør rede for monsunsystemet i Sør-Asia. Forklar hvorfor sommermonsun og vintermonsun har ulik vindretning og ulik nedbørsmengde.',
        solution: 'Om sommeren varmes det indiske subkontinentet kraftig opp, og et dypt lavtrykk dannes over land. Fuktig luft fra Indiahavet trekkes innover og gir enorme nedbørsmengder (sommermonsun). ITCZ forskyves nordover til langt inn over India. Om vinteren avkjøles kontinentet raskere enn havet, og et høytrykk bygger seg opp over land. Vindretningen snur: tørr luft strømmer fra land mot hav (vintermonsun), og det er tørr sesong. Den asymmetriske oppvarmingen skyldes at land har lavere varmekapasitet enn vann, og Himalaya forsterker effekten ved å blokkere kald luft fra nord.',
      },
    },
    {
      id: 'geo2-2-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-5-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Ifølge Buys-Ballots lov, hvor er lavtrykket når du står med ryggen til vinden på nordlige halvkule?',
        options: [
          { id: 'a', text: 'Rett bak deg', isCorrect: false },
          { id: 'b', text: 'Til høyre foran deg', isCorrect: false },
          { id: 'c', text: 'Til venstre foran deg', isCorrect: true },
          { id: 'd', text: 'Rett foran deg', isCorrect: false },
        ],
        solution: 'Ifølge Buys-Ballots lov befinner lavtrykket seg til venstre foran deg når du står med ryggen til vinden på nordlige halvkule. Dette skyldes at Corioliskraften avbøyer vinden til høyre, slik at vinden blåser nesten parallelt med isobarene med lavtrykk til venstre.',
      },
    },
    {
      id: 'geo2-2-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'geo2-2-5-ex-8',
        number: '8',
        type: 'classic',
        task: 'Sammenlign passatvindene og vestavindsbeltet. Beskriv retning, stabilitet og årsak for begge vindsystemer.',
        solution: 'Passatvindene (0°–30°) blåser fra NØ (nordlige halvkule) og SØ (sørlige halvkule) mot ekvator. De er svært stabile fordi de drives av den sterke og vedvarende Hadleycellen. Vestavindsbeltet (30°–60°) blåser fra SV (nordlige halvkule) og NV (sørlige halvkule) mot polene. Det er mer ustabilt fordi det tilhører Ferrelcellen og påvirkes av vandrende sykloner, fronter og Rossby-bølger. Begge avbøyes av Corioliseffekten: passatene bøyes østover mot ekvator (gir NØ-retning), vestavindene bøyes østover mot polene (gir SV-retning på nordlige halvkule).',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const GEOFAG_2_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_2_2_1, CHAPTER_GEOFAG_2_2_2, CHAPTER_GEOFAG_2_2_3, CHAPTER_GEOFAG_2_2_4, CHAPTER_GEOFAG_2_2_5,
];

export function getGeofag2Del2Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_2_DEL2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
