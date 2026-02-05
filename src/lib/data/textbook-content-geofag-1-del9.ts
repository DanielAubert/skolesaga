/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2 - Del 9: Hydrologi og vannkretslopet
 *
 * Dekker LK20-kompetansemål for geofag 1 (GEO01-01)
 * Kapittel 9.1-9.4: Vannkretslopet, grunnvann, elver/innsjøer, vannressurser
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Vannkretsløpet
// ============================================================================

export const CHAPTER_GEOFAG_1_9_1: TextbookChapter = {
  id: 'geofag-1-9-1',
  courseId: 'geofag-1',
  chapterNumber: '9.1',
  title: 'Vannkretsløpet',
  description: 'Fordampning, nedbør, avrenning og infiltrasjon - vannets evige sirkulasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive vannkretsløpet og dets hovedelementer',
    'forklare prosessene fordampning, kondensasjon, nedbør, avrenning og infiltrasjon',
    'gjøre rede for energiens rolle i vannkretsløpet',
    'vurdere vannkretsløpets betydning for livet på jorden',
  ],
  content: [
    {
      id: 'geo1-9-1-intro',
      type: 'text',
      content: `# Vannkretsløpet

Vann er livets grunnlag. Uten vann ville jorden vært en livløs planet som Mars. Vannkretsløpet - den kontinuerlige sirkulasjonen av vann mellom hav, atmosfære og land - er en av jordens mest fundamentale prosesser.

## Vannets unike egenskaper

Vann har flere spesielle egenskaper som gjør vannkretsløpet mulig:

- **Høy fordampningsvarme**: Det kreves mye energi å fordampe vann
- **Høy spesifikk varmekapasitet**: Vann kan lagre mye varme
- **Vann er tettest ved 4°C**: Is flyter på vann
- **Vann er et godt løsemiddel**: Transporterer næringsstoffer

Disse egenskapene gjør at vann kan transportere energi rundt i jordsystemet og opprettholde et stabilt klima.`,
    },
    {
      id: 'geo1-9-1-def-vannkretslop',
      type: 'definition',
      title: 'Vannkretsløpet',
      content: 'Vannkretsløpet (den hydrologiske syklus) er den kontinuerlige sirkulasjonen av vann på, over og under jordoverflaten. Vann beveger seg mellom reservoarene hav, atmosfære, land, is og grunnvann gjennom prosessene fordampning, kondensasjon, nedbør, avrenning og infiltrasjon.',
    },
    {
      id: 'geo1-9-1-fordampning',
      type: 'text',
      content: `## Fordampning og transpirasjon

### Fordampning (evaporasjon)

Fordampning er prosessen der flytende vann går over til vanndamp. Dette krever energi - hovedsakelig fra solen.

**Hvor skjer fordampning?**
- **Hav og innsjøer**: Største kilde (ca. 86% av total fordampning)
- **Våte overflater**: Vegetasjon, jord, snø
- **Elver og bekker**: Mindre bidrag

**Faktorer som påvirker fordampning:**
- Temperatur (høyere temp = mer fordampning)
- Vind (fjerner fuktig luft)
- Luftfuktighet (tørr luft = mer fordampning)
- Overflatearealet av vannet
- Solinnstråling

### Transpirasjon

Transpirasjon er fordampning av vann fra planter gjennom spalteåpninger i bladene.

- Planter suger opp vann gjennom røttene
- Vann transporteres til bladene
- Vanndamp frigjøres gjennom spalteåpninger
- Driver næringstransport i planten

**Evapotranspirasjon** = Fordampning + Transpirasjon (samlet vannoverføring til atmosfæren fra et område)`,
    },
    {
      id: 'geo1-9-1-def-evapotranspirasjon',
      type: 'definition',
      title: 'Evapotranspirasjon',
      content: 'Evapotranspirasjon er summen av fordampning fra overflater og transpirasjon fra planter. Dette er den totale mengden vann som overføres fra jordoverflaten til atmosfæren i et område. Evapotranspirasjon er en viktig faktor i vannbudsjettet for et nedbørfelt.',
    },
    {
      id: 'geo1-9-1-kondensasjon',
      type: 'text',
      content: `## Kondensasjon og skydannelse

### Kondensasjon

Kondensasjon er prosessen der vanndamp går over til flytende vann. Dette skjer når luften avkjøles til duggpunktet.

**Hvordan avkjøles luft?**
1. **Adiabatisk avkjøling**: Luft stiger, utvider seg og avkjøles
2. **Strålingskjøling**: Bakken kjøles om natten
3. **Kontakt med kald overflate**: Dugg og rim

### Kondensasjonskjerner

For at kondensasjon skal skje, trenger vanndamp små partikler å kondensere på:

- **Salt fra havet**: Hygroskopiske partikler
- **Støv og sand**: Mineralpartikler
- **Pollen og sporer**: Biologiske partikler
- **Sot og forurensning**: Antropogene partikler

### Skytyper

Ulike skyer dannes på ulike måter:

- **Cumulus**: Konvektiv løfting, tårnskyer
- **Stratus**: Lagdeling, langstrakte skyer
- **Cirrus**: Høye isskyer
- **Nimbus**: Nedbørskyer (cumulonimbus, nimbostratus)`,
    },
    {
      id: 'geo1-9-1-nedbor',
      type: 'text',
      content: `## Nedbør

Nedbør er vann som faller fra atmosfæren til jordoverflaten.

### Nedbørstyper

- **Regn**: Flytende vanndråper (> 0.5 mm)
- **Yr**: Små vanndråper (< 0.5 mm)
- **Snø**: Iskrystaller
- **Sludd**: Blanding av regn og snø
- **Hagl**: Iskuler dannet i tordenskyer

### Nedbørsmekanismer

**1. Frontnedbør**
- Oppstår når luftmasser med ulik temperatur møtes
- Varm luft tvinges oppover
- Langvarig, jevn nedbør

**2. Orografisk nedbør**
- Luft tvinges opp over fjell
- Nedbør på lo-siden (Vestlandet)
- Regnskygge på le-siden (Østlandet)

**3. Konvektiv nedbør**
- Lokal oppvarming gir stigende luft
- Kraftige, kortvarige byger
- Ofte om sommeren

### Nedbørsmåling

- **Nedbørmåler**: Samler opp nedbør
- **Måles i mm**: 1 mm = 1 liter/m²
- **Årsnedbør**: Bergen ~2250 mm, Oslo ~800 mm`,
    },
    {
      id: 'geo1-9-1-def-nedborfelt',
      type: 'definition',
      title: 'Nedbørfelt',
      content: 'Et nedbørfelt (dreneringsområde, avrenningsområde) er et landområde der all nedbør drenerer til samme utløp, typisk en elv eller innsjø. Grensene følger vannskiller - høydedrag der vannet renner til hver sin side.',
    },
    {
      id: 'geo1-9-1-avrenning',
      type: 'text',
      content: `## Avrenning

Avrenning er transport av vann over og gjennom bakken tilbake til havet.

### Typer avrenning

**1. Overflateavrenning**
- Vann renner over bakken
- Oppstår når nedbør > infiltrasjonskapasitet
- Viktigst på hard/mettet jord

**2. Gjennomstrømning (interflow)**
- Vann beveger seg horisontalt i jorden
- Over vanntette lag
- Langsommere enn overflateavrenning

**3. Grunnvannsavrenning**
- Langsom strømning i grunnvann
- Gir basisavrenning i elver
- Viktig for stabil vannføring

### Faktorer som påvirker avrenning

- **Nedbørsmengde og -intensitet**
- **Terreng**: Bratt = rask avrenning
- **Vegetasjon**: Holder tilbake vann
- **Jordtype**: Permeabilitet
- **Bebyggelse**: Tette flater øker avrenning
- **Årstid**: Snøsmelting om våren`,
    },
    {
      id: 'geo1-9-1-infiltrasjon',
      type: 'text',
      content: `## Infiltrasjon

Infiltrasjon er prosessen der vann synker ned fra overflaten og inn i jordsmonnet.

### Infiltrasjonskapasitet

Infiltrasjonskapasiteten er hvor mye vann som kan synke ned per tidsenhet.

**Høy infiltrasjonskapasitet:**
- Grov, porøs jord (sand, grus)
- Vegetasjonsdekke
- Tørr jord med sprekker

**Lav infiltrasjonskapasitet:**
- Finkornet jord (leire)
- Kompakt, mettet jord
- Asfalt og betong
- Frossen jord

### Hva skjer med infiltrert vann?

1. **Jordfuktighet**: Holdes i umettet sone
2. **Planteopptak**: Suges opp av røtter
3. **Grunnvannsmagasinering**: Synker til grunnvann
4. **Gjennomstrømning**: Beveger seg horisontalt

### Umettet og mettet sone

- **Umettet sone**: Porer delvis fylt med luft
- **Mettet sone**: Alle porer fylt med vann
- **Grunnvannsspeil**: Grensen mellom sonene`,
    },
    {
      id: 'geo1-9-1-vannbudsjett',
      type: 'text',
      content: `## Vannbudsjettet

Et vannbudsjett beskriver balansen mellom inngående og utgående vann i et område.

### Vannbudsjettligningen

$$P = E + Q + \\Delta S$$

Der:
- **P** = Nedbør (precipitation)
- **E** = Evapotranspirasjon
- **Q** = Avrenning (discharge)
- **ΔS** = Endring i magasinert vann

### Globalt vannbudsjett

- Fordampning fra hav: 425 000 km³/år
- Nedbør over hav: 385 000 km³/år
- Netto transport til land: 40 000 km³/år
- Avrenning tilbake til hav: 40 000 km³/år

### Regionalt vannbudsjett

Vannbudsjettet varierer sterkt mellom regioner:

- **Norge**: Mye nedbør, høy avrenning
- **Sahara**: Lite nedbør, høy fordampning
- **Amazonas**: Høy nedbør og evapotranspirasjon`,
    },
    {
      id: 'geo1-9-1-example',
      type: 'example',
      title: 'Vannbudsjett for et norsk nedbørfelt',
      problem: 'Et nedbørfelt på 100 km² mottar 1500 mm nedbør per år. Evapotranspirasjon er 500 mm/år. Beregn årlig avrenning i mm og total vannmengde i m³.',
      solution: `**Løsning:**

**Steg 1: Bruk vannbudsjettligningen**

Antar stabil situasjon (ΔS = 0):
$$P = E + Q$$
$$Q = P - E = 1500 - 500 = 1000 \\text{ mm/år}$$

**Steg 2: Regn om til m³**

1 mm over 1 km² = 1000 m³

$$Q_{total} = 1000 \\text{ mm} \\times 100 \\text{ km}^2 \\times 1000 \\text{ m}^3/\\text{mm/km}^2$$
$$Q_{total} = 100\\,000\\,000 \\text{ m}^3/\\text{år} = 100 \\text{ millioner m}^3/\\text{år}$$

**Steg 3: Regn om til vannføring**

$$Q_{snitt} = \\frac{100\\,000\\,000}{365 \\times 24 \\times 3600} \\approx 3.2 \\text{ m}^3/\\text{s}$$

**Svar:** Årlig avrenning er 1000 mm, tilsvarende 100 millioner m³ eller gjennomsnittlig 3.2 m³/s.`,
    },
    {
      id: 'geo1-9-1-tip',
      type: 'tip',
      title: 'Huskeregel for vannkretsløpet',
      content: 'Husk sekvensen: **Fordampning → Transport → Kondensasjon → Nedbør → Avrenning/Infiltrasjon → Tilbake til hav**. Solenergi driver hele kretsløpet - uten solen ville vannkretsløpet stoppe opp.',
    },
  ],
  exercises: [
    {
      id: 'geo1-9-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva driver vannkretsløpet?',
      options: [
        { id: 'a', text: 'Solenergi', isCorrect: true },
        { id: 'b', text: 'Månens tiltrekning', isCorrect: false },
        { id: 'c', text: 'Jordvarme', isCorrect: false },
        { id: 'd', text: 'Vindkraft', isCorrect: false },
      ],
      solution: 'Solenergi driver vannkretsløpet ved å tilføre energi til fordampning. Uten solen ville det ikke være nok energi til å løfte vann fra havoverflaten til atmosfæren.',
    },
    {
      id: 'geo1-9-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom fordampning og transpirasjon, og hvorfor evapotranspirasjon er et nyttig begrep.',
      solution: 'Fordampning (evaporasjon) er overgang fra flytende vann til vanndamp fra overflater som hav, innsjøer og våt jord. Transpirasjon er fordampning fra planter gjennom spalteåpningene i bladene. Evapotranspirasjon kombinerer begge prosessene fordi det i praksis er vanskelig å skille dem - begge overfører vann til atmosfæren fra et område. Begrepet er nyttig i vannbudsjettsberegninger for nedbørfelt.',
    },
    {
      id: 'geo1-9-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type nedbør dominerer på Vestlandet?',
      options: [
        { id: 'a', text: 'Orografisk nedbør', isCorrect: true },
        { id: 'b', text: 'Konvektiv nedbør', isCorrect: false },
        { id: 'c', text: 'Frontnedbør', isCorrect: false },
        { id: 'd', text: 'Monsunnedbør', isCorrect: false },
      ],
      solution: 'Vestlandet får mest orografisk nedbør. Fuktig luft fra Atlanterhavet tvinges opp over fjellene, avkjøles og gir nedbør. Dette forklarer hvorfor Bergen har over dobbelt så mye nedbør som Oslo.',
    },
    {
      id: 'geo1-9-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med infiltrasjonskapasitet og nevn fire faktorer som påvirker denne.',
      solution: 'Infiltrasjonskapasitet er hvor mye vann som kan synke ned i jorden per tidsenhet. Faktorer som påvirker: 1) Jordtype - sand har høyere kapasitet enn leire. 2) Jordfuktighet - tørr jord absorberer mer enn mettet jord. 3) Vegetasjon - røtter skaper kanaler og beskytter mot kompaktering. 4) Overflateforhold - asfalt har null infiltrasjon, mens skog har høy. Andre faktorer: hellingsgrad, frossen jord, kompaktering.',
    },
    {
      id: 'geo1-9-1-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et nedbørfelt?',
      options: [
        { id: 'a', text: 'Et område der all nedbør drenerer til samme utløp', isCorrect: true },
        { id: 'b', text: 'Et område med mye nedbør', isCorrect: false },
        { id: 'c', text: 'En innsjø som mottar nedbør', isCorrect: false },
        { id: 'd', text: 'En stasjon som måler nedbør', isCorrect: false },
      ],
      solution: 'Et nedbørfelt er et landområde der all nedbør drenerer til samme utløp (elv, innsjø eller hav). Grensene følger vannskillene - høydedragene der vannet renner til hver sin side.',
    },
    {
      id: 'geo1-9-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et nedbørfelt på 50 km² har følgende vannbudsjett: Nedbør 1200 mm/år, evapotranspirasjon 450 mm/år. a) Beregn årlig avrenning i mm. b) Beregn total avrenning i m³/år. c) Forklar hva som ville skje med avrenningen dersom skogen i feltet ble hugget ned.',
      solution: 'a) Avrenning Q = P - E = 1200 - 450 = 750 mm/år (forutsatt ΔS = 0). b) Total avrenning = 750 mm × 50 km² × 1000 m³/mm/km² = 37 500 000 m³/år = 37,5 millioner m³/år. c) Hvis skogen hugges: Transpirasjonen reduseres kraftig, men fordampningen fra bar jord er mindre enn evapotranspirasjonen fra skog. Infiltrasjonen kan reduseres pga. kompaktering og erosjon. Resultatet blir vanligvis økt avrenning på kort sikt, men med mer ujevn fordeling (større flommer, lavere minstevannføring) og økt erosjon.',
    },
  ],
};

// ============================================================================
// Kapittel 9.2: Grunnvann og akviferer
// ============================================================================

export const CHAPTER_GEOFAG_1_9_2: TextbookChapter = {
  id: 'geofag-1-9-2',
  courseId: 'geofag-1',
  chapterNumber: '9.2',
  title: 'Grunnvann og akviferer',
  description: 'Grunnvannsspeil, porøsitet, permeabilitet og kilder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare hvordan grunnvann dannes og lagres',
    'beskrive begrepene porøsitet og permeabilitet',
    'gjøre rede for ulike typer akviferer',
    'forklare hvordan kilder og brønner fungerer',
  ],
  content: [
    {
      id: 'geo1-9-2-intro',
      type: 'text',
      content: `# Grunnvann og akviferer

Under føttene våre finnes enorme mengder vann. Grunnvann utgjør omtrent 30% av jordens ferskvann - langt mer enn alt vann i innsjøer og elver til sammen. I Norge forsyner grunnvann rundt 15% av befolkningen med drikkevann.

## Grunnvannets betydning

- **Drikkevann**: Renere enn overflatevann
- **Jordbruk**: Vanning fra brønner
- **Økosystemer**: Opprettholder våtmarker og elver
- **Industri**: Prosessvann og kjøling
- **Geotermisk energi**: Varmepumper`,
    },
    {
      id: 'geo1-9-2-dannelse',
      type: 'text',
      content: `## Grunnvannsdannelse

Grunnvann dannes når nedbør infiltrerer ned gjennom jorden og samles i porene i berggrunn eller løsmasser.

### Fra nedbør til grunnvann

1. **Nedbør** faller på overflaten
2. **Infiltrasjon** - vann synker ned i jorden
3. **Perkolasjon** - vann siger nedover gjennom umettet sone
4. **Grunnvannsmagasinering** - vann samles i mettet sone

### Soner i undergrunnen

**Umettet sone (vadose sone)**
- Porene inneholder både luft og vann
- Vann holdes av kapillærkrefter
- Plantenes rotsone

**Mettet sone (grunnvannssone)**
- Alle porer fylt med vann
- Vannet er under trykk
- Her finner vi grunnvannet

**Grunnvannsspeilet**
- Øvre grense av mettet sone
- Der vanntrykket = atmosfæretrykket
- Varierer med årstid og nedbør`,
    },
    {
      id: 'geo1-9-2-def-grunnvannsspeil',
      type: 'definition',
      title: 'Grunnvannsspeilet',
      content: 'Grunnvannsspeilet er den øvre grensen av den mettede sonen der alle porer er fylt med vann. Over grunnvannsspeilet (i umettet sone) inneholder porene både luft og vann. Grunnvannsspeilet følger ofte terrenget, men i dempet form.',
    },
    {
      id: 'geo1-9-2-porositet',
      type: 'text',
      content: `## Porøsitet

Porøsitet beskriver hvor stor andel av et materiale som er hulrom (porer).

### Definisjon

$$n = \\frac{V_p}{V_t} \\times 100\\%$$

Der:
- **n** = porøsitet
- **V_p** = volum av porer
- **V_t** = totalt volum

### Typiske porøsitetsverdier

| Materiale | Porøsitet |
|-----------|-----------|
| Grus | 25-40% |
| Sand | 25-50% |
| Silt | 35-50% |
| Leire | 40-70% |
| Sandstein | 5-30% |
| Granitt | 0.1-2% |

**NB:** Høy porøsitet betyr ikke nødvendigvis at vannet kan bevege seg lett - det avhenger også av permeabiliteten!`,
    },
    {
      id: 'geo1-9-2-def-porositet',
      type: 'definition',
      title: 'Porøsitet',
      content: 'Porøsitet er forholdet mellom volumet av hulrom (porer) og det totale volumet av et materiale. Høy porøsitet betyr at materialet kan lagre mye vann. Leire har høy porøsitet, men vannet sitter fast i de små porene.',
    },
    {
      id: 'geo1-9-2-permeabilitet',
      type: 'text',
      content: `## Permeabilitet

Permeabilitet beskriver hvor lett vann kan strømme gjennom et materiale.

### Hva bestemmer permeabilitet?

- **Porestørrelse**: Store porer = høy permeabilitet
- **Poreforbindelse**: Porene må henge sammen
- **Kornform**: Runde korn gir bedre strømning
- **Sortering**: Godt sortert = høyere permeabilitet

### Typiske permeabilitetsverdier

| Materiale | Permeabilitet (m/s) | Beskrivelse |
|-----------|---------------------|-------------|
| Grus | 10⁻² - 10⁻¹ | Svært god |
| Sand | 10⁻⁵ - 10⁻³ | God |
| Silt | 10⁻⁸ - 10⁻⁵ | Dårlig |
| Leire | 10⁻¹¹ - 10⁻⁸ | Tilnærmet tett |
| Granitt | 10⁻¹³ - 10⁻¹⁰ | Tett |

### Leire-paradokset

Leire har **høy porøsitet** men **lav permeabilitet**!
- Mange små porer kan lagre mye vann
- Men porene er så små at vannet knapt kan bevege seg
- Kapillærkrefter holder vannet fast`,
    },
    {
      id: 'geo1-9-2-def-permeabilitet',
      type: 'definition',
      title: 'Permeabilitet',
      content: 'Permeabilitet (hydraulisk konduktivitet) er et mål på hvor lett vann kan strømme gjennom et porøst materiale. Måles i m/s eller m/dag. Sand og grus har høy permeabilitet, mens leire er tilnærmet vanntett.',
    },
    {
      id: 'geo1-9-2-akviferer',
      type: 'text',
      content: `## Akviferer

En akvifer er et geologisk lag som kan lagre og transportere betydelige mengder grunnvann.

### Krav til en god akvifer

- **Høy porøsitet**: Kan lagre mye vann
- **Høy permeabilitet**: Vann kan strømme til brønner
- **Stor utbredelse**: Stort vannvolum
- **God vannkvalitet**: Egnet til bruk

### Typer akviferer

**Fri (ubegrenset) akvifer**
- Grunnvannsspeilet kan stige og synke fritt
- Ligger under umettet sone
- Mater direkte av nedbør ovenfra
- Eksempel: Grusavsetninger i dalbunner

**Spent (begrenset) akvifer**
- Inneklemt mellom vanntette lag (akvikluder)
- Vannet er under trykk
- Boring kan gi artesisk brønn
- Eksempel: Sandsteinslag mellom leirelag

### Akviklude og akvitard

- **Akviklude**: Helt vanntett lag (tett leire)
- **Akvitard**: Dårlig gjennomtrengelig lag (silt)`,
    },
    {
      id: 'geo1-9-2-def-akvifer',
      type: 'definition',
      title: 'Akvifer',
      content: 'En akvifer er et vannførende geologisk lag med tilstrekkelig porøsitet og permeabilitet til å lagre og transportere grunnvann i nyttbare mengder. Gode akviferer er sand- og grusavsetninger eller porøse bergarter som sandstein og kalkstein.',
    },
    {
      id: 'geo1-9-2-bronner',
      type: 'text',
      content: `## Brønner og kilder

### Brønner

En brønn er en konstruksjon for å hente opp grunnvann.

**Gravd brønn**
- Håndgravd, stor diameter
- Grunt, i løsmasser
- Utsatt for forurensning

**Boret brønn**
- Maskinboret, liten diameter
- Dypt, kan gå i fjell
- Bedre beskyttet

**Artesisk brønn**
- I spent akvifer
- Vannet stiger av seg selv pga. trykk
- Kan sprute opp over bakken

### Kilder

En kilde er et sted der grunnvann renner naturlig ut på overflaten.

**Typer kilder**
- **Kontaktkilde**: Grunnvann møter vanntett lag
- **Forkastningskilde**: Langs en forkastning
- **Karstkilder**: I kalkstein, kan være store
- **Artesiske kilder**: Trykkvann presser opp

### Senkning og influensradius

Pumping fra en brønn skaper en senkningsttrakt:
- Grunnvannsspeilet senkes rundt brønnen
- Senkningens størrelse avhenger av uttaket
- Influensradiusen øker med permeabiliteten`,
    },
    {
      id: 'geo1-9-2-example',
      type: 'example',
      title: 'Artesisk brønn',
      problem: 'Forklar hvordan en artesisk brønn fungerer og hvorfor vannet stiger opp av seg selv.',
      solution: `**Artesisk brønn - prinsipp:**

**1. Geologisk oppsett**
- En permeabel akvifer (f.eks. sandstein) ligger mellom to vanntette lag (f.eks. leire)
- Akviferens innmatingssone ligger høyere enn borepunktet

**2. Trykkmulighet**
- Vann infiltrerer i innmatingssonen høyt oppe
- Vannsøylen i akviferens høye del skaper hydrostatisk trykk
- Trykket overføres gjennom hele akviferens lengde

**3. Artesisk effekt**
- Når man borer ned til den spente akviferens nivå, frigjøres trykket
- Vannet presses opp gjennom borehullet
- Trykkhøyden bestemmes av vannstanden i innmatingssonen
- Hvis trykket er høyt nok, spruter vannet opp over bakken (artesisk springkilde)

**4. Eksempel fra Norge**
- Leirskred kan avdekke spente akviferer
- Kvikkleireområder har ofte spent grunnvann under leira`,
    },
    {
      id: 'geo1-9-2-grunnvannsstrøm',
      type: 'text',
      content: `## Grunnvannsstrømning

Grunnvann beveger seg fra høyt til lavt trykk (høyt til lavt grunnvannsspeil).

### Darcys lov

$$Q = K \\cdot A \\cdot \\frac{\\Delta h}{L}$$

Der:
- **Q** = vannmengde (m³/s)
- **K** = permeabilitet (m/s)
- **A** = tverrsnittsareal (m²)
- **Δh/L** = hydraulisk gradient (dimensjonsløs)

### Typiske strømningshastigheter

| Materiale | Hastighet |
|-----------|-----------|
| Grus | m/dag |
| Sand | cm/dag - m/dag |
| Silt | mm/dag |
| Leire | μm/dag - mm/dag |

**Husk:** Grunnvann beveger seg LANGSOMT. Forurensning kan bruke år på å nå en brønn.

### Strømningsretning

- Vinkelrett på grunnvannskotene
- Fra høyt til lavt grunnvannsspeil
- Kan kartlegges med piezometre`,
    },
    {
      id: 'geo1-9-2-note',
      type: 'note',
      title: 'Grunnvann i Norge',
      content: 'Norge har generelt lite grunnvann sammenlignet med andre land fordi berggrunnen består av krystalline bergarter (gneis, granitt) med lav porøsitet. De beste grunnvannskildene finnes i løsmasseavsetninger i dalbunner - breelvavsetninger av sand og grus. Omtrent 15% av Norges befolkning får drikkevann fra grunnvann.',
    },
  ],
  exercises: [
    {
      id: 'geo1-9-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva beskriver porøsitet?',
      options: [
        { id: 'a', text: 'Andelen hulrom i et materiale', isCorrect: true },
        { id: 'b', text: 'Hvor lett vann kan strømme gjennom', isCorrect: false },
        { id: 'c', text: 'Dybden til grunnvannsspeilet', isCorrect: false },
        { id: 'd', text: 'Vannets trykk i bakken', isCorrect: false },
      ],
      solution: 'Porøsitet er forholdet mellom volumet av hulrom (porer) og det totale volumet. For eksempel har sand typisk 25-50% porøsitet, noe som betyr at en fjerdedel til halvparten av volumet er hulrom.',
    },
    {
      id: 'geo1-9-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Leire har høyere porøsitet enn sand, men lavere permeabilitet. Forklar dette tilsynelatende paradokset.',
      solution: 'Leire har mange små porer som til sammen utgjør et stort volum (høy porøsitet). Men fordi porene er så små, holder kapillærkrefter vannet fast, og det er lite plass for vannet å strømme gjennom (lav permeabilitet). Sand har færre, men større og bedre sammenkoblede porer som lar vannet strømme lettere. Dette viser at porøsitet og permeabilitet måler ulike egenskaper.',
    },
    {
      id: 'geo1-9-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner en spent (begrenset) akvifer?',
      options: [
        { id: 'a', text: 'Den ligger mellom vanntette lag og vannet er under trykk', isCorrect: true },
        { id: 'b', text: 'Grunnvannsspeilet kan stige og synke fritt', isCorrect: false },
        { id: 'c', text: 'Den får påfyll direkte fra nedbør ovenfra', isCorrect: false },
        { id: 'd', text: 'Den har alltid høyere porøsitet enn fri akvifer', isCorrect: false },
      ],
      solution: 'En spent akvifer er inneklemt mellom vanntette lag (akvikluder) som leire. Vannet står under trykk fra høyereliggende deler av akviferens innmatingssone. Boring inn i en spent akvifer kan gi artesisk brønn der vannet stiger opp av seg selv.',
    },
    {
      id: 'geo1-9-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv fire ulike typer kilder og forklar hvordan de dannes.',
      solution: '1) Kontaktkilde: Grunnvann strømmer langs et permeabelt lag og tvinges opp til overflaten der det møter et underliggende vanntett lag. 2) Forkastningskilde: Vann strømmer opp langs en forkastning der to ulike bergarter møtes. 3) Karstkilder: Store kilder i kalksteinsterreng der oppløste hulrom samler og leder ut store vannmengder. 4) Artesiske kilder: Naturlige utløp fra spente akviferer der trykket presser vannet opp til overflaten.',
    },
    {
      id: 'geo1-9-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er grunnvannsspeilet?',
      options: [
        { id: 'a', text: 'Øvre grense av sonen der alle porer er fylt med vann', isCorrect: true },
        { id: 'b', text: 'En underjordisk innsjø', isCorrect: false },
        { id: 'c', text: 'Overflaten av en akvifer', isCorrect: false },
        { id: 'd', text: 'Bunnen av den mettede sonen', isCorrect: false },
      ],
      solution: 'Grunnvannsspeilet markerer grensen mellom den umettede sonen (der porene inneholder både luft og vann) og den mettede sonen (der alle porer er fylt med vann). Grunnvannsspeilet følger ofte terrenget, men i dempet form.',
    },
    {
      id: 'geo1-9-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En sandakvifer har porøsitet 35% og permeabilitet 10⁻⁴ m/s. Den hydrauliske gradienten er 0.01. a) Beregn strømningshastigheten (Darcys hastighet). b) Forklar hvorfor den virkelige partikkelhastigheten er høyere. c) Hvor lang tid vil det ta for en forurensning å bevege seg 500 m?',
      solution: 'a) Darcys hastighet v = K × i = 10⁻⁴ m/s × 0.01 = 10⁻⁶ m/s = 0.086 m/dag. b) Darcys hastighet er vannstrømmen per totalt tverrsnittsareal, men vannet strømmer bare gjennom porene. Den virkelige partikkelhastigheten = Darcy-hastighet / porøsitet = 0.086 / 0.35 = 0.25 m/dag. c) Tid = avstand / hastighet = 500 m / 0.25 m/dag = 2000 dager ≈ 5.5 år. (Dette viser at grunnvannsforurensning beveger seg langsomt, men er vanskelig å rydde opp.)',
    },
  ],
};

// ============================================================================
// Kapittel 9.3: Elver og innsjøer
// ============================================================================

export const CHAPTER_GEOFAG_1_9_3: TextbookChapter = {
  id: 'geofag-1-9-3',
  courseId: 'geofag-1',
  chapterNumber: '9.3',
  title: 'Elver og innsjøer',
  description: 'Avrenning, vannføring, nedbørfelt og regulering av vassdrag.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive elvers og innsjøers rolle i vannkretsløpet',
    'forklare begrepene vannføring, nedbørfelt og avrenning',
    'gjøre rede for elvers utvikling og prosesser',
    'vurdere konsekvenser av vassdragsregulering',
  ],
  content: [
    {
      id: 'geo1-9-3-intro',
      type: 'text',
      content: `# Elver og innsjøer

Elver og innsjøer utgjør bare omtrent 0.3% av jordens ferskvann, men de er ekstremt viktige. De er synlige deler av vannkretsløpet som transporterer vann tilbake til havet, former landskapet og er livsviktige for mennesker og økosystemer.

## Elvers betydning

- **Vannforsyning**: Drikkevann, jordbruk, industri
- **Transport**: Historisk viktig ferdselsåre
- **Energi**: Vannkraft (97% av Norges elektrisitet)
- **Økosystemer**: Leveområde for fisk og annet liv
- **Landskapsforming**: Erosjon og avsetning`,
    },
    {
      id: 'geo1-9-3-def-nedborfelt',
      type: 'definition',
      title: 'Nedbørfelt',
      content: 'Et nedbørfelt (dreneringsområde, tilsig) er et landområde der all nedbør som ikke fordamper, drenerer til samme utløp - enten en elv, innsjø eller direkte til havet. Grensene mellom nedbørfelt kalles vannskiller og følger høydedrag i terrenget.',
    },
    {
      id: 'geo1-9-3-vannforing',
      type: 'text',
      content: `## Vannføring

Vannføring er mengden vann som passerer et punkt i elven per tidsenhet.

### Måleenhet

- Vannføring måles i **m³/s** (kubikkmeter per sekund)
- Også kalt **Q** (discharge)

### Typiske verdier for norske elver

| Elv | Middelvannføring |
|-----|------------------|
| Glomma (ved utløp) | ca. 700 m³/s |
| Drammenselva | ca. 300 m³/s |
| Altaelva | ca. 50 m³/s |
| Liten bekk | 0.1-1 m³/s |

### Vannføringsvariasjoner

Vannføringen varierer gjennom året:

**Vårflom**
- Snøsmelting i fjellet
- Største vannføring i lavlandet

**Sommerlavvann**
- Lite nedbør, høy fordampning
- Lav vannføring

**Høstflom**
- Mye nedbør, lite fordampning
- Kan gi store flommer (Vestlandet)

**Vinterlavvann**
- Nedbør lagres som snø
- Lav vannføring (unntatt kysten)`,
    },
    {
      id: 'geo1-9-3-def-vannforing',
      type: 'definition',
      title: 'Vannføring',
      content: 'Vannføring (Q) er volumet vann som passerer et gitt tverrsnitt av en elv per tidsenhet. Måles i m³/s. Vannføring = tverrsnittsareal × middelhastighet. Vannføringsdata er viktig for flomvarsling, vannkraft og vannforvaltning.',
    },
    {
      id: 'geo1-9-3-avrenning',
      type: 'text',
      content: `## Avrenning og avrenningskoeffisient

### Spesifikk avrenning

Spesifikk avrenning er avrenningen per arealenhet:

$$q = \\frac{Q}{A}$$

Måles i l/s/km² eller mm/år.

### Avrenningskoeffisient

Avrenningskoeffisienten viser hvor stor del av nedbøren som blir avrenning:

$$c = \\frac{Q}{P}$$

Der:
- **c** = avrenningskoeffisient (0-1)
- **Q** = avrenning (mm/år)
- **P** = nedbør (mm/år)

### Typiske verdier

| Område | Avrenningskoeff. |
|--------|------------------|
| Vestlandet | 0.7-0.8 |
| Østlandet | 0.4-0.6 |
| Finnmark | 0.5-0.7 |
| Tørre områder | < 0.1 |

**Vestlandet** har høy avrenningskoeffisient fordi:
- Mye nedbør (mer enn evapotranspirasjonskapasiteten)
- Bratte fjellsider gir rask avrenning
- Tynt jordsmonn, lite vegetasjon i fjellet`,
    },
    {
      id: 'geo1-9-3-elveprosesser',
      type: 'text',
      content: `## Elveprosesser

Elver former landskapet gjennom erosjon, transport og avsetning.

### Erosjon

**Typer elveerosjon:**
- **Hydraulisk erosjon**: Vannets kraft river løs materiale
- **Abrasjon**: Medført materiale sliper bunnen
- **Korrosjon**: Kjemisk oppløsning

**Hvor eroderer elven mest?**
- I yttersving (konkave bredd)
- Ved høy vannføring
- I bratte partier

### Transport

**Transportmåter:**
- **Bunnlast**: Materiale ruller/hopper langs bunnen
- **Suspensjon**: Finkornig materiale svever i vannet
- **Løsning**: Oppløste stoffer

**Hjulströms diagram** viser sammenhengen mellom kornstørrelse, erosjon og avsetning.

### Avsetning

Elven avsetter materiale når hastigheten avtar:
- **Vifte**: Der bratt dal flater ut
- **Delta**: Der elv møter stillestående vann
- **Elveslette**: Langs elveløpet
- **Kroksjø**: Avsnørt meanderbue`,
    },
    {
      id: 'geo1-9-3-elveformer',
      type: 'text',
      content: `## Elveløpstyper

### Rettlinjet elveløp
- Sjelden i naturen
- Ustabilt, utvikler seg til andre typer

### Meandrerende elveløp
- Buktende løp
- Erosjon i yttersving, avsetning i innersving
- Utvikler seg over tid
- Kan danne kroksjøer

### Forgrenet (anastomoserende) elveløp
- Flere løp med banker mellom
- Stor sedimenttilførsel
- Vanlig i elvemunninger

### Flettet elveløp
- Mange grunne løp som flettes sammen
- Mye sedimenter, varierende vannføring
- Vanlig foran isbreer

### V-dal vs U-dal

- **V-dal**: Formet av elv (fluvial erosjon)
- **U-dal**: Formet av isbre (glasial erosjon)`,
    },
    {
      id: 'geo1-9-3-innsjoer',
      type: 'text',
      content: `## Innsjøer

Innsjøer er stående ferskvann i fordypninger i terrenget.

### Dannelsesmåter

**Tektoniske innsjøer**
- Dannet i gravsenkninger
- Eksempel: De store afrikanske sjøene

**Glasiale innsjøer**
- Utgravet av isbreer
- Demmet av morener
- De fleste norske innsjøer

**Vulkanske innsjøer**
- I kratere eller calderas
- Eksempel: Crater Lake, USA

**Kunstige innsjøer**
- Demmet for vannkraft
- Eksempel: Blåsjø (Norges største)

### Innsjøers rolle

- **Vannmagasin**: Demper flommer, holder på vann
- **Sedimentfelle**: Fanger partikler
- **Økosystem**: Rikt artsmangfold
- **Klimaregulator**: Demper temperatursvingninger

### Sjiktning i innsjøer

Om sommeren kan innsjøer bli lagdelt:
- **Epilimnion**: Varmt overflatelag
- **Metalimnion**: Sprangsjikt
- **Hypolimnion**: Kaldt bunnlag`,
    },
    {
      id: 'geo1-9-3-regulering',
      type: 'text',
      content: `## Vassdragsregulering

Norge har omfattende regulering av vassdrag for vannkraftproduksjon.

### Reguleringsmagasiner

- Demninger holder tilbake vann
- Fylles under flomperioder
- Tappes for kraftproduksjon ved behov
- Gir jevnere vannføring nedstrøms

### Fordeler med regulering

- **Fornybar energi**: 97% av strømmen i Norge
- **Flomdemping**: Reduserer flomtopper
- **Vannforsyning**: Sikrer stabil tilgang
- **Regulerbar produksjon**: Tilpasses etterspørsel

### Ulemper og miljøkonsekvenser

**For elven:**
- Endret vannføringsmønster
- Tørre elveleier (minstevannføring)
- Hindrer fiskevandring
- Endret sedimenttransport

**For innsjøen:**
- Vannstandsvariasjoner
- Isskuring i strandsonen
- Endrede økosystemer

### Miljøtiltak

- Minstevannføring sikrer liv i elven
- Fisketrapper hjelper vandring
- Skånsom manøvrering
- Biotopjusterende tiltak`,
    },
    {
      id: 'geo1-9-3-example',
      type: 'example',
      title: 'Beregne vannføring',
      problem: 'En elv har tverrsnitt med bredde 15 m og gjennomsnittlig dybde 1.2 m. Middelhastigheten målt med strømmåler er 0.8 m/s. Beregn vannføringen.',
      solution: `**Løsning:**

**Steg 1: Beregn tverrsnittsarealet**

$$A = bredde \\times dybde = 15 \\text{ m} \\times 1.2 \\text{ m} = 18 \\text{ m}^2$$

**Steg 2: Bruk kontinuitetsligningen**

$$Q = A \\times v$$

Der:
- Q = vannføring
- A = tverrsnittsareal
- v = middelhastighet

$$Q = 18 \\text{ m}^2 \\times 0.8 \\text{ m/s} = 14.4 \\text{ m}^3/\\text{s}$$

**Svar:** Vannføringen er 14.4 m³/s.

**Tillegg:** Per døgn gir dette:
$$14.4 \\times 86400 = 1\\,244\\,160 \\text{ m}^3/\\text{døgn} \\approx 1.2 \\text{ millioner m}^3/\\text{døgn}$$`,
    },
    {
      id: 'geo1-9-3-note',
      type: 'note',
      title: 'Glomma - Norges lengste elv',
      content: 'Glomma er 621 km lang og har Norges største nedbørfelt (ca. 41 000 km²). Elven har en middelvannføring på ca. 700 m³/s ved utløpet. Glomma har vært viktig for tømmerfløting og har i dag flere kraftverk. Den store vårflommen i Glomma skyldes snøsmelting i fjellet, og flomtoppen kan nå 3000-4000 m³/s i ekstreme år.',
    },
  ],
  exercises: [
    {
      id: 'geo1-9-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er vannføring?',
      options: [
        { id: 'a', text: 'Mengden vann som passerer et punkt per tidsenhet', isCorrect: true },
        { id: 'b', text: 'Hastigheten på vannet i elven', isCorrect: false },
        { id: 'c', text: 'Dybden i elven', isCorrect: false },
        { id: 'd', text: 'Arealet av nedbørfeltet', isCorrect: false },
      ],
      solution: 'Vannføring (Q) er volumet vann som passerer et tverrsnitt av elven per tidsenhet. Måles i m³/s. Vannføring = tverrsnittsareal × middelhastighet.',
    },
    {
      id: 'geo1-9-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor de fleste norske elver har vårflom og vinterlavvann.',
      solution: 'Om vinteren faller nedbøren som snø som lagres i fjellet. Lite vann tilføres elvene, så vannføringen er lav (vinterlavvann). Om våren smelter snøen og store mengder smeltevann strømmer ned til elvene, noe som gir vårflom. Unntaket er kystområder med milde vintre der nedbøren faller som regn hele året - her kan de største flommene komme om høsten.',
    },
    {
      id: 'geo1-9-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor i et meandrerende elveløp skjer mest erosjon?',
      options: [
        { id: 'a', text: 'I yttersvingen', isCorrect: true },
        { id: 'b', text: 'I innersvingen', isCorrect: false },
        { id: 'c', text: 'På de rette strekkene', isCorrect: false },
        { id: 'd', text: 'Midt i elven', isCorrect: false },
      ],
      solution: 'I yttersvingen (konkav bredd) er vannhastigheten høyest fordi vannet må ta den lengste veien. Her eroderer elven i bredden. I innersvingen (konveks bredd) er hastigheten lavere, og sedimenter avsettes som punktbanker. Over tid får meanderbuen derfor større amplitude.',
    },
    {
      id: 'geo1-9-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn tre fordeler og tre ulemper med vassdragsregulering for vannkraft.',
      solution: 'Fordeler: 1) Fornybar energi uten CO₂-utslipp ved drift. 2) Flomdemping nedstrøms magasinene. 3) Regulerbar produksjon som kan tilpasses etterspørsel. Ulemper: 1) Endret vannføringsmønster forstyrrer økosystemer. 2) Demninger hindrer fiskevandring. 3) Vannstandsvariasjoner i magasiner ødelegger strandsonen. Andre ulemper: Tørre elveleier, metanutslipp fra neddemte områder, landskapsinngrep.',
    },
    {
      id: 'geo1-9-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en vannskille?',
      options: [
        { id: 'a', text: 'Grensen mellom to nedbørfelt', isCorrect: true },
        { id: 'b', text: 'En foss eller stryk i elven', isCorrect: false },
        { id: 'c', text: 'Stedet der to elver møtes', isCorrect: false },
        { id: 'd', text: 'En demning som regulerer vannstanden', isCorrect: false },
      ],
      solution: 'En vannskille er grensen mellom to nedbørfelt. Vannskiller følger høydedrag i terrenget der vannet renner til hver sin side. All nedbør på én side av vannskillet drenerer til samme utløp.',
    },
    {
      id: 'geo1-9-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et nedbørfelt på 200 km² har årlig nedbør på 1400 mm og avrenningskoeffisient 0.65. a) Beregn årlig avrenning i mm. b) Beregn middelvannføring i m³/s. c) Ved en kraftstasjon med fallhøyde 150 m, hva er teoretisk maksimal effekt?',
      solution: 'a) Avrenning = nedbør × avrenningskoeffisient = 1400 mm × 0.65 = 910 mm/år. b) Total avrenning = 910 mm × 200 km² = 182 millioner m³/år. Middelvannføring Q = 182 000 000 m³ / (365 × 24 × 3600 s) = 5.77 m³/s. c) Effekt P = ρ × g × Q × H = 1000 kg/m³ × 9.81 m/s² × 5.77 m³/s × 150 m = 8.49 MW. Med typisk virkningsgrad 90% blir produksjonen ca. 7.6 MW, som gir 7.6 × 8760 = ca. 67 GWh/år.',
    },
  ],
};

// ============================================================================
// Kapittel 9.4: Vannressurser og forvaltning
// ============================================================================

export const CHAPTER_GEOFAG_1_9_4: TextbookChapter = {
  id: 'geofag-1-9-4',
  courseId: 'geofag-1',
  chapterNumber: '9.4',
  title: 'Vannressurser og forvaltning',
  description: 'Drikkevann, forurensning, vannkraft og bærekraftig vannbruk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive vannressursenes betydning for samfunnet',
    'gjøre rede for ulike typer vannforurensning og deres kilder',
    'forklare vannkraftens rolle i energiforsyningen',
    'vurdere utfordringer knyttet til bærekraftig vannforvaltning',
  ],
  content: [
    {
      id: 'geo1-9-4-intro',
      type: 'text',
      content: `# Vannressurser og forvaltning

Vann er livets viktigste ressurs. Tilgang til rent vann er en forutsetning for helse, matproduksjon og økonomisk utvikling. Globalt står verden overfor store utfordringer med vannmangel, forurensning og klimaendringer som påvirker vannressursene.

## Norges vannrikdom

Norge er et vannrikt land:
- Høy nedbør, spesielt på Vestlandet
- Mange innsjøer og elver
- Store grunnvannsressurser i løsmasser
- Lite forurensning sammenlignet med mange land

Men selv Norge har utfordringer med lokal vannmangel, forurensning og interessekonflikter.`,
    },
    {
      id: 'geo1-9-4-drikkevann',
      type: 'text',
      content: `## Drikkevann

### Vannkilder i Norge

**Overflatevann (85% av befolkningen)**
- Innsjøer og elver
- Krever rensing (filtrering, desinfeksjon)
- Sårbart for forurensning

**Grunnvann (15% av befolkningen)**
- Naturlig filtrert gjennom jord
- Ofte bedre råvannskvalitet
- Kan inneholde naturlige stoffer (jern, mangan)

### Vannbehandling

Typiske trinn i vannbehandling:
1. **Siling**: Fjerner store partikler
2. **Koagulering/flokkulering**: Samler småpartikler
3. **Sedimentering**: Partikler synker
4. **Filtrering**: Sand- eller membranfilter
5. **Desinfeksjon**: UV, klor eller ozon
6. **pH-justering**: Forebygger korrosjon

### Vannkvalitetskrav

Drikkevann skal være:
- Klart og uten lukt/smak
- Fritt for sykdomsfremkallende mikroorganismer
- Lavt innhold av kjemiske stoffer
- pH mellom 6.5-9.5`,
    },
    {
      id: 'geo1-9-4-def-drikkevann',
      type: 'definition',
      title: 'Drikkevannskvalitet',
      content: 'Drikkevannskvalitet reguleres av drikkevannsforskriften som setter grenseverdier for mikrobiologiske, kjemiske og fysiske parametere. Vannverket er ansvarlig for å levere vann som tilfredsstiller kravene fram til tilknytningspunktet.',
    },
    {
      id: 'geo1-9-4-forurensning',
      type: 'text',
      content: `## Vannforurensning

### Typer forurensning

**Punktkilder**
- Identifiserbare utslippspunkter
- Eksempel: Renseanlegg, industribedrifter
- Lettere å kontrollere

**Diffuse kilder**
- Spredt over store områder
- Eksempel: Avrenning fra jordbruk, veier
- Vanskeligere å håndtere

### Forurensningstyper

**Næringsstoffer (eutrofiering)**
- Nitrogen og fosfor fra landbruk, kloakk
- Gir algeoppblomstring
- Oksygenmangel i bunnvannet
- Kan gjøre vann uegnet

**Organisk stoff**
- Kloakk, matavfall, landbruk
- Bruker opp oksygen ved nedbrytning
- Måles som BOF (biokjemisk oksygenforbruk)

**Mikroorganismer**
- Bakterier, virus, parasitter
- Fra kloakk og husdyrgjødsel
- Kan gi sykdom (f.eks. E. coli)

**Kjemiske stoffer**
- Tungmetaller, pesticider, legemidler
- Industri, landbruk, husholdninger
- Kan hope seg opp i næringskjeden

**Partikler og sedimenter**
- Erosjon, anleggsvirksomhet
- Gjør vannet grumsete
- Ødelegger gyteplasser`,
    },
    {
      id: 'geo1-9-4-eutrofiering',
      type: 'text',
      content: `## Eutrofiering

Eutrofiering er overgjødsling av vannforekomster med næringsstoffer, særlig fosfor og nitrogen.

### Prosessen

1. **Tilførsel**: Næringsstoffer fra landbruk, kloakk
2. **Algvekst**: Økt produksjon av alger og planteplankton
3. **Algedød**: Algene dør og synker til bunns
4. **Nedbrytning**: Bakterier bryter ned organisk materiale
5. **Oksygenmangel**: Nedbrytningen bruker opp oksygenet
6. **Fiskedød**: Dyr dør av oksygenmangel

### Konsekvenser

- Dårlig vannkvalitet
- Fiskedød
- Lukt og estetiske problemer
- Tap av biologisk mangfold
- Giftproduserende alger (blågrønnbakterier)

### Tiltak mot eutrofiering

- Rense avløpsvann for fosfor
- Redusere gjødselbruk i landbruk
- Vegetasjonssoner langs vassdrag
- Forbud mot fosfat i vaskemidler`,
    },
    {
      id: 'geo1-9-4-def-eutrofiering',
      type: 'definition',
      title: 'Eutrofiering',
      content: 'Eutrofiering er prosessen der vannforekomster overgjødsles med næringsstoffer (særlig fosfor og nitrogen), noe som fører til økt algevekst, oksygenmangel og forringelse av vannkvalitet og økosystemer.',
    },
    {
      id: 'geo1-9-4-vannkraft',
      type: 'text',
      content: `## Vannkraft

Norge er verdens sjette største vannkraftprodusent og får ca. 97% av elektrisiteten fra vannkraft.

### Forutsetninger for vannkraft

- **Nedbør**: Tilgang på vann
- **Fallhøyde**: Forskjell i høyde
- **Magasinmulighet**: Lagre vann
- **Infrastruktur**: Overføringslinjer

### Typer kraftverk

**Magasinkraftverk**
- Stort magasin samler vann
- Regulerbar produksjon
- Kan produsere når behovet er størst

**Elvekraftverk**
- Utnytter naturlig vannføring
- Lite eller ingen magasin
- Produksjonen følger vannføringen

**Pumpe kraftverk**
- Pumper vann opp i magasin
- Produserer når strømprisen er høy
- Fungerer som "batteri"

### Vannkraftens fordeler

- Fornybar og ren ved drift
- Regulerbar (i motsetning til vind/sol)
- Lange levetider (100+ år)
- Lave driftskostnader
- Flomdemping

### Miljøkonsekvenser

- Endret vannføring og økosystemer
- Barrierer for fiskevandring
- Vannstandsvariasjoner i magasiner
- Landskapsinngrep
- Metanutslipp fra neddemte områder`,
    },
    {
      id: 'geo1-9-4-barekraft',
      type: 'text',
      content: `## Bærekraftig vannforvaltning

### Integrert vannressursforvaltning (IWRM)

Bærekraftig vannforvaltning krever helhetlig tilnærming:
- **Nedbørfelt som enhet**: Forvalte hele vassdraget samlet
- **Interessentdeltakelse**: Involvere alle brukere
- **Økonomiske virkemidler**: Riktig prising av vann
- **Økosystembasert**: Verne naturlige prosesser

### EUs vanndirektiv

Norge følger EUs vanndirektiv som krever:
- God økologisk og kjemisk tilstand
- Kartlegging av vannforekomster
- Vannforvaltningsplaner for hver region
- Tiltaksprogrammer for forbedring

### Klimaendringer og vannressurser

Klimaendringer påvirker vannkretsløpet:
- **Endret nedbør**: Mer regn, mindre snø
- **Tidligere vårflom**: Snøsmelting starter før
- **Hyppigere ekstremvær**: Flere og kraftigere flommer
- **Tørkeperioder**: Kan bli vanligere om sommeren

### Globale vannutfordringer

- 2 milliarder mennesker mangler trygt drikkevann
- Vannmangel i mange regioner
- Konflikter om grenseoverskridende vassdrag
- Grunnvannsressurser overutnyttet
- Forurensning av vannkilder`,
    },
    {
      id: 'geo1-9-4-example',
      type: 'example',
      title: 'Vannfotavtrykk',
      problem: 'Beregn vannfotavtrykket til et måltid bestående av 200 g biff, 100 g ris og 150 g grønnsaker.',
      solution: `**Vannfotavtrykk for ingrediensene:**

Vannfotavtrykk viser hvor mye vann som brukes for å produsere en vare.

| Matvare | Vannforbruk per kg | Mengde | Vannfotavtrykk |
|---------|-------------------|--------|----------------|
| Biff | 15 400 liter/kg | 0.2 kg | 3 080 liter |
| Ris | 2 500 liter/kg | 0.1 kg | 250 liter |
| Grønnsaker | 300 liter/kg | 0.15 kg | 45 liter |

**Totalt vannfotavtrykk: 3 375 liter**

**Analyse:**
- Kjøtt dominerer vannfotavtrykket (91%)
- Biff krever mye vann fordi kua må fôres i flere år
- Vegetabilsk mat har lavere vannfotavtrykk
- Å redusere kjøttforbruket er mest effektivt for å spare vann globalt

**Sammenligning:**
- Én dag med kjøttrikt kosthold: 5 000+ liter
- Én dag med vegetarkost: ca. 1 500 liter
- Én dusj: ca. 50 liter`,
    },
    {
      id: 'geo1-9-4-warning',
      type: 'warning',
      title: 'Global vannkrise',
      content: 'FN anslår at 2 milliarder mennesker lever i land med vannstress. Med klimaendringer og befolkningsvekst kan halvparten av verdens befolkning bo i områder med vannmangel innen 2050. Konflikter om vannressurser kan tilta. Bærekraftig vannforvaltning er avgjørende for global sikkerhet.',
    },
    {
      id: 'geo1-9-4-tip',
      type: 'tip',
      title: 'Spar vann i hverdagen',
      content: 'Selv i vannrike Norge er det lurt å spare vann: 1) Ta korte dusjer (50 liter vs 150 liter for badekar). 2) Reparer dryppende kraner. 3) Bruk oppvaskmaskin fullt lastet. 4) Vann hagen om kvelden. 5) Samle regnvann til hagen. 6) Vurder matens vannfotavtrykk - mindre rødt kjøtt sparer mest.',
    },
  ],
  exercises: [
    {
      id: 'geo1-9-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor får mesteparten av Norges befolkning drikkevannet sitt fra?',
      options: [
        { id: 'a', text: 'Overflatevann (innsjøer og elver)', isCorrect: true },
        { id: 'b', text: 'Grunnvann', isCorrect: false },
        { id: 'c', text: 'Avsaltet sjøvann', isCorrect: false },
        { id: 'd', text: 'Regnvann', isCorrect: false },
      ],
      solution: 'Ca. 85% av Norges befolkning får drikkevann fra overflatevann (innsjøer og elver), mens ca. 15% får grunnvann. Overflatevann krever mer rensing, men er lettere tilgjengelig i store mengder.',
    },
    {
      id: 'geo1-9-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv prosessen eutrofiering og forklar hvorfor det er et miljøproblem.',
      solution: 'Eutrofiering er overgjødsling av vannforekomster med næringsstoffer, særlig fosfor og nitrogen, fra kilder som landbruk og kloakk. Prosessen: 1) Næringsstoffer tilføres. 2) Alger vokser kraftig. 3) Algene dør og synker. 4) Bakterier bryter ned algene og bruker oksygen. 5) Oksygenmangel oppstår i bunnvannet. 6) Fisk og bunndyr dør. Konsekvenser: Dårlig vannkvalitet, tap av artsmangfold, giftproduserende alger, og vannet blir uegnet til bading og drikkevannsforsyning.',
    },
    {
      id: 'geo1-9-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skiller punktkilder fra diffuse kilder til forurensning?',
      options: [
        { id: 'a', text: 'Punktkilder kommer fra ett identifiserbart sted, diffuse kilder er spredt', isCorrect: true },
        { id: 'b', text: 'Punktkilder er farligere enn diffuse kilder', isCorrect: false },
        { id: 'c', text: 'Diffuse kilder er alltid naturlige', isCorrect: false },
        { id: 'd', text: 'Punktkilder påvirker bare grunnvann', isCorrect: false },
      ],
      solution: 'Punktkilder er utslipp fra ett identifiserbart sted, som et renseanlegg eller en fabrikk. Diffuse kilder er spredt over store områder, som avrenning fra jordbruksland eller veier. Punktkilder er lettere å kontrollere og rense, mens diffuse kilder krever forebyggende tiltak over store områder.',
    },
    {
      id: 'geo1-9-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor vannkraft regnes som fornybar energi, men likevel har miljøkonsekvenser.',
      solution: 'Vannkraft er fornybar fordi den utnytter vannkretsløpet som drives av solen - vannet resirkuleres kontinuerlig og går ikke tomt. Ved drift gir vannkraft minimale utslipp. Men byggingen og driften har miljøkonsekvenser: 1) Demninger endrer naturlig vannføring og temperaturer. 2) Fiskepassasje blokkeres. 3) Magasiner drukner natur og gir metanutslipp. 4) Vannstandsvariasjoner ødelegger strandsoner. 5) Redusert sedimenttransport påvirker deltaer. Likevel har vannkraft langt lavere klimafotavtrykk enn fossile energikilder.',
    },
    {
      id: 'geo1-9-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedformålet med EUs vanndirektiv?',
      options: [
        { id: 'a', text: 'Sikre god økologisk og kjemisk tilstand i vannforekomster', isCorrect: true },
        { id: 'b', text: 'Øke vannkraftproduksjonen', isCorrect: false },
        { id: 'c', text: 'Privatisere vannforsyningen', isCorrect: false },
        { id: 'd', text: 'Bygge flere demninger', isCorrect: false },
      ],
      solution: 'EUs vanndirektiv krever at alle vannforekomster skal oppnå "god tilstand" - både økologisk og kjemisk. Dette innebærer kartlegging av tilstand, vannforvaltningsplaner, og tiltak for å bedre kvaliteten der den ikke er god nok. Norge følger direktivet gjennom vannforskriften.',
    },
    {
      id: 'geo1-9-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan klimaendringer kan påvirke vannressursene i Norge, og hvilke tilpasninger som kan bli nødvendige.',
      solution: 'Forventede endringer: 1) Mer nedbør totalt, men mer som regn, mindre som snø. 2) Tidligere og mindre markert vårflom. 3) Økt risiko for høstflommer på Vestlandet. 4) Mulig vannmangel i tørre somre på Østlandet. 5) Økt fare for jord- og flomskred. Nødvendige tilpasninger: 1) Oppgradere flomvern og overvannshåndtering i byer. 2) Justere vannkraftmagasinering for nye nedbørsmønstre. 3) Sikre reservevannskilder for tørkeperioder. 4) Klimatilpasse infrastruktur (broer, veier). 5) Beskytte drikkevannskilder mot forurensning ved flom. 6) Overvåke grunnvannsnivåer.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler i Del 9
// ============================================================================

export const GEOFAG_1_DEL9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_1_9_1,
  CHAPTER_GEOFAG_1_9_2,
  CHAPTER_GEOFAG_1_9_3,
  CHAPTER_GEOFAG_1_9_4,
];

export function getGeofag1Del9Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_DEL9_CHAPTERS.find(chapter => chapter.id === chapterId);
}
