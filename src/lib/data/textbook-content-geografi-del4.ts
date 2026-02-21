/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geografi VG1/VG2 - Del 4: Økosystemer og naturressurser
 *
 * Dekker LK20-kompetansemål for geografi
 * Delkapitler 4.1 - 4.6
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Vegetasjonssoner og biomer
// ============================================================================

export const CHAPTER_GEOGRAFI_4_1: TextbookChapter = {
  id: 'geografi-1-4-1',
  courseId: 'geografi',
  chapterNumber: '4.1',
  title: 'Vegetasjonssoner og biomer',
  description: 'Oversikt over jordens vegetasjonssoner fra ekvator til pol, og de viktigste biomene.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for jordens viktigste vegetasjonssoner og biomer',
    'forklare sammenhengen mellom klima, jord og vegetasjon',
  ],
  content: [
    {
      id: 'geo-4-1-intro',
      type: 'text',
      content: `# Vegetasjonssoner og biomer

Jorden kan deles inn i store vegetasjonssoner som strekker seg som belter rundt planeten. Disse sonene bestemmes først og fremst av **klima** – temperatur og nedbør – men også av jordforhold, topografi og breddegrader.

## Hva er et biom?

Et **biom** er et stort, geografisk område som kjennetegnes av bestemte plante- og dyresamfunn tilpasset det lokale klimaet. Biomene er jordens viktigste økologiske regioner og strekker seg ofte over flere kontinenter.

## Fra ekvator til pol

Vegetasjonen endrer seg systematisk fra ekvator mot polene. Ved ekvator finner vi frodige regnskoger, mens polområdene er dekket av is. Mellom disse ytterpunktene ligger en rekke ulike vegetasjonssoner, hver med sitt særpreg.`,
    },
    {
      id: 'geo-4-1-def-biom',
      type: 'definition',
      title: 'Biom',
      content: 'Et biom er et stort økologisk område på jordens overflate der planter, dyr, insekter og mennesker har tilpasset seg det lokale klimaet og miljøforholdene. Eksempler er tropisk regnskog, ørken og tundra.',
    },
    {
      id: 'geo-4-1-tropisk',
      type: 'text',
      content: `## Tropisk regnskog

Den tropiske regnskogen finnes i et belte rundt ekvator, mellom om lag 10° nord og 10° sør. Her er det varmt hele året (gjennomsnittlig over 25 °C) og store mengder nedbør (over 2000 mm per år).

### Kjennetegn
- **Artsrikdom**: Regnskogen er jordens mest artsrike biom, med opptil 300 tresorter per hektar
- **Sjiktdeling**: Vegetasjonen er delt i flere lag – skogbunn, underskog, kronedekke og framstikkende trekroner
- **Næringskretsløp**: Næringsstoffene er bundet i den levende biomassen, ikke i jorda – jorda er ofte næringsfattig
- **Utbredelse**: Amazonas, Sentral-Afrika (Kongobassenget) og Sørøst-Asia

## Savanne

Savannen finnes i tropiske og subtropiske områder med tydelig tørketid. Den kjennetegnes av store gressletter med spredte trær.

### Kjennetegn
- **Klima**: Veksler mellom en regntid og en tørketid
- **Vegetasjon**: Høyt gress og spredte trær, blant annet akasier og baobabtrær
- **Fauna**: Store bestander av beitedyr (gnu, sebra, antilope) og rovdyr (løve, gepard)
- **Utbredelse**: Store deler av Afrika, deler av Sør-Amerika, India og Australia`,
    },
    {
      id: 'geo-4-1-torr',
      type: 'text',
      content: `## Ørken

Ørkener dekker rundt en tredjedel av jordens landoverflate og finnes der nedbøren er under 250 mm per år. De fleste ørkener ligger rundt vendekretsen (ca. 30° bredde) der synkende luftmasser skaper tørt klima.

### Kjennetegn
- **Temperatur**: Store svingninger mellom dag og natt – opptil 50 °C på dagen, nær frysepunktet om natten
- **Vegetasjon**: Svært sparsom, med tørketilpassede planter som kaktusar og sukkulenter
- **Erosjon**: Vinderosjon dominerer og skaper sanddyner og steinørken
- **Eksempler**: Sahara, Gobi, Atacama, Kalahari

## Steppe og prerie

Steppen finnes i innlandsområder med kaldt klima og lite nedbør. Den kjennetegnes av vide gressletter uten trær.

### Kjennetegn
- **Klima**: Kontinentalt klima med kalde vintre og varme somre
- **Vegetasjon**: Lavt gress og urter – for tørt til skog, men for vått til ørken
- **Jordbruk**: Noen av verdens mest fruktbare jordbruksområder (svartjord/tsjernozjom)
- **Utbredelse**: Sentral-Asia, Nord-Amerikas prærier, argentinske pampasen`,
    },
    {
      id: 'geo-4-1-temperert',
      type: 'text',
      content: `## Temperert lauvskog

Den tempererte lauvskogen finnes i områder med fire tydelige årstider, moderat nedbør og relativt milde vintre.

### Kjennetegn
- **Vegetasjon**: Løvfellende trær som eik, bøk, lønn og ask – mister bladene om høsten
- **Årstidsrytme**: Tydelig veksling mellom vår, sommer, høst og vinter
- **Jord**: Rik, næringsrik muldjord (brunjord)
- **Utbredelse**: Vest-Europa, østlige Nord-Amerika, deler av Øst-Asia

## Boreal barskog (taiga)

Barskogen er verdens største landbaserte biom og strekker seg som et bredt belte gjennom nordlige deler av Europa, Asia og Nord-Amerika.

### Kjennetegn
- **Vegetasjon**: Bartrær som gran, furu og lerk dominerer
- **Klima**: Lange, kalde vintre og korte somre
- **Jord**: Sur og næringsfattig podsoljord
- **Utbredelse**: Skandinavia, Russland (Sibir), Canada – inkluderer store deler av Norge`,
    },
    {
      id: 'geo-4-1-tundra',
      type: 'text',
      content: `## Tundra

Tundraen finnes nord for barskogen, i arktiske og subarktiske strøk. Vekstsesongen er svært kort, og permafrost preger landskapet.

### Kjennetegn
- **Vegetasjon**: Mose, lav, dvergbjørk og lyng – ingen trær
- **Permafrost**: Bakken er permanent frosset under overflaten
- **Vekstsesong**: Kun 2–3 måneder med temperatur over 0 °C
- **Utbredelse**: Nord-Canada, Grønland, Nord-Russland og Svalbard

## Høyfjell

Høyfjellssonene ligner tundraen, men finnes i høye fjellområder uavhengig av breddegrad. I Norge har vi tydelige høyfjellssoner over tregrensen.

### Kjennetegn
- **Tregrense**: Overgangen fra skog til snaufjell varierer med breddegrad og klima
- **Vegetasjon**: Lav, mose, fjellplanter og dvergbusker
- **Norske forhold**: Tregrensen i Sør-Norge ligger på ca. 1000–1200 moh.`,
    },
    {
      id: 'geo-4-1-def-permafrost',
      type: 'definition',
      title: 'Permafrost',
      content: 'Permafrost er permanent frosset grunn som forblir under 0 °C i minst to sammenhengende år. Den kan strekke seg hundrevis av meter ned i bakken. Tining av permafrost som følge av global oppvarming frigjør klimagasser som metan og CO₂.',
    },
    {
      id: 'geo-4-1-faktorer',
      type: 'text',
      content: `## Faktorer som bestemmer vegetasjonssonene

### Klima
Temperatur og nedbør er de viktigste faktorene. Varme og fuktige områder har frodig vegetasjon, mens kalde eller tørre områder har sparsom vegetasjon.

### Breddegrader
Avstanden fra ekvator bestemmer i stor grad mengden solenergi et område mottar, og dermed temperaturen. Vegetasjonssonene følger i hovedtrekk breddegradene.

### Jordsmonn
Jordtypen påvirker hvilke planter som trives. Næringsrik muldjord gir andre forhold enn næringsfattig podsol eller laterittjord.

### Havstrømmer og topografi
Varme havstrømmer (som Golfstrømmen) gjør at vestkysten av Norge har mildere klima enn breddegraden tilsier. Fjellkjeder kan skape regnskygge og tørrere klima på lesiden.`,
    },
    {
      id: 'geo-4-1-example',
      type: 'example',
      title: 'Vegetasjonssoner i Norge',
      problem: 'Beskriv hvilke vegetasjonssoner vi finner i Norge fra kyst til høyfjell.',
      solution: `**Norges vegetasjonssoner fra kyst til høyfjell:**

1. **Kystlandskap**: Lynghei og kystfuruskog langs vestkysten, preget av mildt og fuktig klima
2. **Lauvskog**: Eik, bøk og ask i lavlandet på Sørlandet og Østlandet
3. **Blandingsskog**: Overgangsbeltet mellom lauvskog og barskog
4. **Barskog**: Gran- og furuskog dominerer store deler av Øst-Norge og Trøndelag
5. **Fjellbjørkeskog**: Overgangsbeltet mellom barskog og snaufjell
6. **Snaufjell/alpin sone**: Lav, mose og fjellplanter over tregrensen

Golfstrømmen gjør at Norge har frodigere vegetasjon enn andre områder på samme breddegrad (f.eks. Nord-Canada).`,
    },
    {
      id: 'geo-4-1-trussel',
      type: 'text',
      content: `## Trusler mot biomene

Mange av jordens biomer er truet av menneskelig aktivitet:

- **Tropisk regnskog**: Avskoging for jordbruk, kvegdrift og tømmerhogst
- **Savanne**: Overbeiting og ørkenspredning (desertifikasjon)
- **Tundra og arktis**: Klimaendringer fører til tining av permafrost og endrede leveforhold
- **Temperert lauvskog**: Mye er allerede omgjort til jordbruk og byområder
- **Barskog**: Hogst og klimaendringer endrer artsammensetningen

Klimaendringene fører til at vegetasjonssonene gradvis forskyves mot polene og oppover i fjellet.`,
    },
  
    {
      id: 'geo-4-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Verdens vegetasjonssoner folger et moenster som hovedsakelig styres av klima
- **Tropisk regnskog** har stoerst artsmangfold og finnes rundt ekvator
- **Savanne** har veksling mellom regnperiode og torrperiode
- **Temperert lauvskog**, **barskog (taiga)** og **tundra** dominerer paa hoeyere breddegrader
- Vegetasjonssonene pavirkes av **temperatur**, **nedbor**, **jordsmonn** og **hoeyde over havet**`,
    },
    {
      id: 'geo-4-1-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- WWF: worldwildlife.org/biomes
- NASA Earth Observatory: earthobservatory.nasa.gov
- Artsdatabanken: artsdatabanken.no`,
    },
  ],
  exercises: [
    {
      id: 'geo-4-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket biom er det mest artsrike på jorden?',
      options: [
        { id: 'a', text: 'Tropisk regnskog', isCorrect: true },
        { id: 'b', text: 'Temperert lauvskog', isCorrect: false },
        { id: 'c', text: 'Boreal barskog', isCorrect: false },
        { id: 'd', text: 'Savanne', isCorrect: false },
      ],
      solution: 'Den tropiske regnskogen er jordens mest artsrike biom, med et enormt mangfold av planter, dyr og insekter. Opptil 300 tresorter kan finnes per hektar.',
    },
    {
      id: 'geo-4-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor ørkenene ofte finnes rundt vendekretsen (ca. 30° bredde).',
      solution: 'Ørkenene finnes rundt vendekretsen på grunn av den globale sirkulasjonen i atmosfæren. Varm, fuktig luft stiger opp ved ekvator, avkjøles og avgir nedbør (tropisk regnsone). Den tørre luften beveger seg deretter mot nord og sør i høyden, og synker ned rundt vendekretsen. Denne synkende, tørre luften gir lite skydannelse og svært lite nedbør, noe som skaper ørkenklima.',
    },
    {
      id: 'geo-4-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner tundraens vegetasjon?',
      options: [
        { id: 'a', text: 'Høye bartrær og mose', isCorrect: false },
        { id: 'b', text: 'Mose, lav, dvergbjørk og lyng', isCorrect: true },
        { id: 'c', text: 'Løvfellende trær og bregner', isCorrect: false },
        { id: 'd', text: 'Kaktusar og sukkulenter', isCorrect: false },
      ],
      solution: 'Tundraen har lav, treløs vegetasjon bestående av mose, lav, dvergbjørk og lyng. Kort vekstsesong og permafrost gjør at trær ikke kan vokse her.',
    },
    {
      id: 'geo-4-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for hvorfor Norge har mildere klima og frodigere vegetasjon enn andre områder på samme breddegrad.',
      solution: 'Norge har mildere klima enn breddegraden tilsier hovedsakelig på grunn av Golfstrømmen (Den nordatlantiske strømmen). Denne varme havstrømmen fører varmt vann fra tropiske strøk nordover langs norskekysten. Dette varmer opp luften og gir mildere vintre, høyere gjennomsnittlig temperatur og mer nedbør enn tilsvarende breddegrader i for eksempel Canada eller Sibir. Resultatet er at tregrensen ligger høyere, vekstsesongen er lengre, og vegetasjonen er frodigere enn man ellers kunne forvente.',
    },
    {
      id: 'geo-4-1-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket biom dekker størst areal på landjorden?',
      options: [
        { id: 'a', text: 'Tropisk regnskog', isCorrect: false },
        { id: 'b', text: 'Ørken', isCorrect: false },
        { id: 'c', text: 'Boreal barskog (taiga)', isCorrect: true },
        { id: 'd', text: 'Savanne', isCorrect: false },
      ],
      solution: 'Den boreale barskogen (taiga) er verdens største landbaserte biom. Den strekker seg som et bredt belte gjennom nordlige deler av Europa, Asia og Nord-Amerika.',
    },
  ],
};

// ============================================================================
// Kapittel 4.2: Jord og jordbruk
// ============================================================================

export const CHAPTER_GEOGRAFI_4_2: TextbookChapter = {
  id: 'geografi-1-4-2',
  courseId: 'geografi',
  chapterNumber: '4.2',
  title: 'Jord og jordbruk',
  description: 'Jorddannelse, jordtyper og jordbruksmetoder – med fokus på matsikkerhet og norske forhold.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hvordan jord dannes og hvilke faktorer som påvirker jordkvaliteten',
    'drøfte utfordringer knyttet til jordbruk og matsikkerhet',
  ],
  content: [
    {
      id: 'geo-4-2-intro',
      type: 'text',
      content: `# Jord og jordbruk

Jord er en av menneskehetens viktigste ressurser. All matproduksjon på land er avhengig av jordsmonn. Det tar hundrevis til tusenvis av år å danne noen få centimeter med dyrkbar jord, men bare noen tiår med feil bruk kan ødelegge den.

## Hva er jord?

Jord er det øverste laget av løsmasser på jordoverflaten. Den består av en blanding av **mineraler** (forvitret berggrunn), **organisk materiale** (døde planter og dyr), **vann**, **luft** og levende **organismer**. Sammensetningen varierer stort mellom ulike jordtyper og klimasoner.`,
    },
    {
      id: 'geo-4-2-def-jordsmonn',
      type: 'definition',
      title: 'Jordsmonn',
      content: 'Jordsmonn er det naturlige laget av løsmasser som dekker bergrunnen. Det dannes gjennom forvitring av bergarter i samspill med klima, organismer, topografi og tid. Jordsmonnet inneholder mineraler, organisk materiale, vann, luft og levende organismer.',
    },
    {
      id: 'geo-4-2-dannelse',
      type: 'text',
      content: `## Jorddannelse

Jorddannelse er en langsom prosess som kan ta fra hundrevis til hundretusenvis av år. Flere faktorer samvirker:

### Forvitring av berggrunn
- **Mekanisk forvitring**: Frost, temperatursvingninger og planterøtter bryter ned berg til mindre biter
- **Kjemisk forvitring**: Vann og syrer løser opp mineraler i berget
- **Biologisk forvitring**: Organismer bryter ned berget gjennom rotpress og syreproduksjon

### Fem faktorer for jorddannelse
1. **Opphavsmaterialet**: Bergarten som forvitrer – bestemmer mineralinnholdet
2. **Klima**: Temperatur og nedbør styrer hastigheten på forvitring
3. **Organismer**: Planter, dyr og mikroorganismer tilfører organisk materiale
4. **Topografi**: Hellning og eksposisjon påvirker vannforhold og erosjon
5. **Tid**: Jo lenger prosessen pågår, desto dypere og mer utviklet jord`,
    },
    {
      id: 'geo-4-2-jordtyper',
      type: 'text',
      content: `## Viktige jordtyper

### Laterittjord (tropene)
- Finnes i varme, fuktige strøk
- Rødlig farge på grunn av jernoksider
- Næringsfattig fordi nedbør vasker ut mineraler (utvasking)
- Vanskelig å dyrke etter avskoging

### Tsjernozjom (svartjord)
- Finnes i steppeområder (Ukraina, USA, Argentina)
- Svært næringsrik – verdens beste matjord
- Høyt innhold av humus (organisk materiale)
- Viktige kornproduserende områder

### Podsol
- Finnes i boreale barskogsområder
- Sur jord med tydelige lag (sjikt)
- Næringsfattig – mineraler vaskes nedover
- Vanlig i store deler av Norge

### Brunjord
- Finnes i temperert lauvskogssone
- Næringsrik med godt innhold av humus
- God jordbruksjord
- Finnes i lavlandet på Sør- og Østlandet i Norge`,
    },
    {
      id: 'geo-4-2-def-humus',
      type: 'definition',
      title: 'Humus',
      content: 'Humus er det nedbrutte organiske materialet i jorden – rester av planter, dyr og mikroorganismer. Humus er mørkt, næringsrikt og viktig for jordens struktur, vannlagringsevne og fruktbarhet. Jord med høyt humusinnhold er som regel god jordbruksjord.',
    },
    {
      id: 'geo-4-2-metoder',
      type: 'text',
      content: `## Jordbruksmetoder

### Tradisjonelt jordbruk
- **Svedjebruk**: Vegetasjon brennes og asken gjødsler jorda – brukt i tropene
- **Terrassejordbruk**: Flate terrasser i bratte fjellsider – vanlig i Asia
- **Nomadisk beitebruk**: Beitedyr flyttes mellom beiteområder – vanlig i tørre områder

### Moderne intensivt jordbruk
- Store, mekaniserte gårder med monokultur (en vekst)
- Kunstgjødsel, plantevernmidler og irrigasjon
- Høy produktivitet per arealenhet
- Kan føre til utarming av jorda, forurensning og tap av biologisk mangfold

### Bærekraftig jordbruk
- **Vekselbruk**: Ulike vekster dyrkes i rotasjon for å bevare jordens næring
- **Økologisk jordbruk**: Uten kunstgjødsel og kjemiske plantevernmidler
- **Presisjonsjordbruk**: Teknologi brukes til å tilpasse gjødsling og vanning nøyaktig
- **Agroøkologi**: Naturlige prosesser utnyttes for å opprettholde jordfruktbarhet`,
    },
    {
      id: 'geo-4-2-matsikkerhet',
      type: 'text',
      content: `## Matsikkerhet og utfordringer

### Globale utfordringer
Verdens befolkning passerte 8 milliarder i 2022, og det trengs stadig mer mat. Samtidig møter matproduksjonen store utfordringer:

- **Jorderosjon**: Vind- og vannerosjon fjerner dyrkbar jord raskere enn ny jord dannes
- **Ørkenspredning**: Tørre områder utvides – særlig i Sahel-beltet i Afrika
- **Saltopphopning**: Irrigasjon i tørre strøk fører til at salter samler seg i jorda
- **Jordforsegling**: Utbygging av veier, byer og industri legger beslag på matjord
- **Klimaendringer**: Endrede nedbørsmønstre og hyppigere ekstremer truer avlinger

### Kampen om matjorda
Bare 11 % av jordens landoverflate er dyrkbar. Presset på denne jorda øker stadig på grunn av befolkningsvekst, urbanisering og klimaendringer.`,
    },
    {
      id: 'geo-4-2-norge',
      type: 'text',
      content: `## Norsk jordbruk

### Særtrekk ved norsk jordbruk
Norge har begrenset med dyrkbar mark – bare ca. 3 % av landarealet er dyrket jord. Dette skyldes:
- Mye fjell og ulendt terreng
- Kort vekstsesong i store deler av landet
- Stort innslag av skrinn jord (podsol og morene)

### Viktige produksjoner
- **Korn**: Østlandet og Trøndelag (bygg, hvete, havre)
- **Gras og husdyrhold**: Vestlandet, Nord-Norge (melk, kjøtt)
- **Frukt og grønt**: Hardanger, Sogn, Indre Østlandet
- **Oppdrett**: Lakseoppdrett langs kysten (havbruk)

### Jordvern i Norge
Norge har et sterkt juridisk jordvern. Omdisponering av dyrket og dyrkbar mark til andre formål krever tillatelse, og det er et politisk mål å begrense nedbygging av matjord. Likevel forsvinner årlig verdifull matjord til vei- og boligbygging.`,
    },
    {
      id: 'geo-4-2-example',
      type: 'example',
      title: 'Jorderosjon og matproduksjon',
      problem: 'Forklar hvordan intensivt jordbruk kan føre til jorderosjon, og hva konsekvensene er.',
      solution: `**Intensivt jordbruk og jorderosjon:**

1. **Årsaker**: Monokulturer fjerner plantedekket etter høsting, og jorda ligger bar. Tunge maskiner pakker jorda sammen. Mangel på vekselbruk svekker jordstrukturen.

2. **Prosess**: Uten plantedekke eller røtter som holder jorda på plass, vaskes det øverste jordlaget bort av regn (vannerosjon) eller blåser bort med vinden (vinderosjon).

3. **Konsekvenser**:
   - Tap av det næringsrike toppsjiktet reduserer avlinger
   - Sedimenter forurenser elver og innsjøer
   - Behov for mer kunstgjødsel – økte kostnader
   - I ytterste konsekvens kan jorda bli ubrukelig

4. **Tiltak**: Vekselbruk, terrengfølgende pløying, leplanting og dekkvekster kan redusere erosjonen betydelig.`,
    },
  
    {
      id: 'geo-4-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Jord dannes gjennom **forvitring** av berggrunn og nedbrytning av organisk materiale
- **Jordprofilen** har lag (horisonter) fra overflaten ned til berggrunn
- Jordbruk er avhengig av fruktbar jord, men jorderosjon truer matproduksjonen globalt
- **Matsikkerhet** handler om at alle skal ha tilgang til nok og naeringsrik mat
- Baerekraftig jordbruk og redusert matsvinn er noedvendig for aa mette en voksende befolkning`,
    },
    {
      id: 'geo-4-2-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- FAO (FNs mat- og landbruksorganisasjon): fao.org
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- NIBIO (Norsk institutt for biookonomi): nibio.no
- Verdensbanken: data.worldbank.org`,
    },
  ],
  exercises: [
    {
      id: 'geo-4-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken jordtype regnes som verdens mest fruktbare?',
      options: [
        { id: 'a', text: 'Podsol', isCorrect: false },
        { id: 'b', text: 'Laterittjord', isCorrect: false },
        { id: 'c', text: 'Tsjernozjom (svartjord)', isCorrect: true },
        { id: 'd', text: 'Sandjord', isCorrect: false },
      ],
      solution: 'Tsjernozjom (svartjord) regnes som verdens mest fruktbare jordtype. Den har svært høyt innhold av humus og finnes i steppeområder som Ukraina, USA og Argentina.',
    },
    {
      id: 'geo-4-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for de fem faktorene som styrer jorddannelse.',
      solution: 'De fem faktorene for jorddannelse er: 1) Opphavsmaterialet – bergarten som forvitrer, og som bestemmer mineralinnholdet i jorda. 2) Klima – temperatur og nedbør styrer hastigheten på forvitring og nedbrytning av organisk materiale. 3) Organismer – planter, dyr og mikroorganismer tilfører organisk materiale og bidrar til nedbrytning. 4) Topografi – hellning, eksposisjon og dreneringsforhold påvirker vannforhold og erosjon. 5) Tid – jo lenger prosessen har pågått, desto dypere og mer utviklet er jordprofilet.',
    },
    {
      id: 'geo-4-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor er laterittjord i tropene vanskelig å dyrke etter avskoging?',
      options: [
        { id: 'a', text: 'Den er for kald for jordbruk', isCorrect: false },
        { id: 'b', text: 'Næringsstoffene vaskes raskt ut av den kraftige nedbøren', isCorrect: true },
        { id: 'c', text: 'Den inneholder for mye kalk', isCorrect: false },
        { id: 'd', text: 'Den er for dyp til å pløye', isCorrect: false },
      ],
      solution: 'I tropene er næringsstoffene i hovedsak bundet i den levende biomassen (vegetasjonen), ikke i jorda. Når skogen hugges, fjernes næringskretsen. Den kraftige tropiske nedbøren vasker raskt ut de gjenværende næringsstoffene fra laterittjorda, som er rik på jernoksider men fattig på plantenæring.',
    },
    {
      id: 'geo-4-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Drøft hvorfor jordvern er viktig i Norge, og hvilke utfordringer det norske jordvernet står overfor.',
      solution: 'Jordvern er særlig viktig i Norge fordi bare ca. 3 % av landarealet er dyrket jord – en svært begrenset ressurs. Norge er avhengig av import for å dekke matbehovet, og nedbygging av matjord reduserer selvforsyningsgraden. Utfordringene er at den beste matjorda ofte ligger i nærheten av byer og tettsteder, der presset for utbygging er størst. Vei- og boligbygging legger årlig beslag på verdifull matjord. Selv om det finnes juridisk beskyttelse, gis det dispensasjoner. Klimaendringer kan gi lengre vekstsesong i Norge, men det forutsetter at matjorda bevares.',
    },
    {
      id: 'geo-4-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor stor andel av Norges landareal er dyrket jord?',
      options: [
        { id: 'a', text: 'Ca. 10 %', isCorrect: false },
        { id: 'b', text: 'Ca. 3 %', isCorrect: true },
        { id: 'c', text: 'Ca. 20 %', isCorrect: false },
        { id: 'd', text: 'Ca. 7 %', isCorrect: false },
      ],
      solution: 'Bare ca. 3 % av Norges landareal er dyrket jord. Dette skyldes at store deler av landet består av fjell, fjorder og skrinn jord som ikke egner seg for jordbruk.',
    },
  ],
};

// ============================================================================
// Kapittel 4.3: Vannressurser
// ============================================================================

export const CHAPTER_GEOGRAFI_4_3: TextbookChapter = {
  id: 'geografi-1-4-3',
  courseId: 'geografi',
  chapterNumber: '4.3',
  title: 'Vannressurser',
  description: 'Vannets kretsløp, ferskvannsressurser, vannknapphet og vannkraft i Norge.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare vannets kretsløp og betydningen av ferskvannsressurser',
    'drøfte årsaker til og konsekvenser av vannknapphet',
  ],
  content: [
    {
      id: 'geo-4-3-intro',
      type: 'text',
      content: `# Vannressurser

Vann er en forutsetning for alt liv på jorden. Selv om planeten vår er dekket av vann, er bare en liten brøkdel tilgjengelig som ferskvann. Tilgangen til rent vann er en av vår tids største utfordringer og en kilde til konflikter i mange deler av verden.

## Vannfordeling på jorden

- **Saltvann** i hav og sjøer: ca. 97,5 %
- **Ferskvann**: ca. 2,5 %
  - Bundet i isbreer og snø: ca. 69 % av ferskvannet
  - Grunnvann: ca. 30 % av ferskvannet
  - Overflatevann (elver, innsjøer): ca. 1 % av ferskvannet

Bare en svært liten del av verdens vann er altså tilgjengelig som ferskvann for mennesker, dyr og jordbruk.`,
    },
    {
      id: 'geo-4-3-kretslop',
      type: 'text',
      content: `## Vannets kretsløp

Vannets kretsløp (den hydrologiske syklusen) beskriver hvordan vann sirkulerer mellom hav, atmosfære og land i et evig kretsløp drevet av solenergi.

### Hovedprosessene
1. **Fordampning**: Sola varmer opp vann i hav, innsjøer og elver – vannet fordamper til atmosfæren
2. **Transpirasjon**: Planter avgir vanndamp gjennom bladene
3. **Kondensasjon**: Vanndamp avkjøles i atmosfæren og danner skyer
4. **Nedbør**: Vann faller tilbake til jordoverflaten som regn, snø eller hagl
5. **Avrenning**: Vann renner over overflaten til elver, innsjøer og hav
6. **Infiltrasjon**: Vann trenger ned i bakken og blir til grunnvann

### Vannbalansen
I ethvert område gjelder: **Nedbør = Avrenning + Fordampning + Endring i lagring**

Klimaendringer påvirker vannets kretsløp ved å endre nedbørsmønstre, øke fordampningen og smelte isbreer.`,
    },
    {
      id: 'geo-4-3-def-kretslop',
      type: 'definition',
      title: 'Vannets kretsløp',
      content: 'Vannets kretsløp (den hydrologiske syklusen) er den kontinuerlige sirkulasjonen av vann mellom hav, atmosfære, land og biosfære. Prosessen drives av solenergi og tyngdekraft, og omfatter fordampning, transpirasjon, kondensasjon, nedbør, avrenning og infiltrasjon.',
    },
    {
      id: 'geo-4-3-ferskvann',
      type: 'text',
      content: `## Ferskvannsressurser

### Overflatevann
Elver og innsjøer er de mest tilgjengelige ferskvannskildene. Store elver som Nilen, Amazonas, Ganges og Yangtze er livsgrunnlaget for hundrevis av millioner mennesker.

### Grunnvann
Grunnvann er vann som har siget ned gjennom jordsmonnet og lagres i porøse bergarter og løsmasser (akviferer). Mange steder er grunnvann den viktigste drikkevannskilden. Overforbruk kan senke grunnvannsspeilet og tømme akviferene.

### Isbreer og snødekke
Isbreer fungerer som naturlige vannmagasiner. Smeltevann fra breer gir jevn vannforsyning om sommeren. Klimaendringer fører til at mange breer minker, noe som truer vannforsyningen for milliarder av mennesker i Asia og Sør-Amerika.

### Avsalting
Noen land, særlig i Midtøsten, bruker avsaltingsanlegg til å gjøre sjøvann til drikkevann. Teknologien er energikrevende og dyr, men kan være avgjørende i vannfattige områder.`,
    },
    {
      id: 'geo-4-3-def-akvifer',
      type: 'definition',
      title: 'Akvifer',
      content: 'En akvifer er et underjordisk lag av porøs stein, grus eller sand som inneholder og transporterer grunnvann. Akviferer kan være enorme reservoarer – Ogallala-akviferen under den amerikanske prærien dekker 450 000 km² og forsyner store jordbruksområder med vann.',
    },
    {
      id: 'geo-4-3-knapphet',
      type: 'text',
      content: `## Vannknapphet og konflikter

### Fysisk og økonomisk vannknapphet
- **Fysisk vannknapphet**: Vannressursene er rett og slett utilstrekkelige – vanlig i Midtøsten og Nord-Afrika
- **Økonomisk vannknapphet**: Vann finnes, men landene mangler infrastruktur til å utnytte det – vanlig i deler av Afrika sør for Sahara

### Årsaker til vannknapphet
- **Befolkningsvekst**: Flere mennesker trenger mer vann
- **Jordbruk**: Irrigasjon bruker ca. 70 % av verdens ferskvann
- **Urbanisering**: Byer med millioner innbyggere trenger enorme mengder vann
- **Forurensning**: Industri, jordbruk og kloakk forurenser vannkilder
- **Klimaendringer**: Endrede nedbørsmønstre og tørkeperioder

### Vannkonflikter
Vann er en potensiell kilde til konflikter, særlig der elver krysser landegrenser:
- **Nilen**: Egypt, Sudan og Etiopia har uenigheter om vannfordelingen
- **Jordan-elven**: Vannressursene er en del av konflikten mellom Israel og nabolandene
- **Aralsjøen**: Overforbruk av vannet fra tilløpselvene til irrigasjon har nesten tørket ut sjøen`,
    },
    {
      id: 'geo-4-3-example',
      type: 'example',
      title: 'Aralsjøen – en miljøkatastrofe',
      problem: 'Beskriv hva som har skjedd med Aralsjøen, og forklar årsaker og konsekvenser.',
      solution: `**Aralsjøen – årsaker og konsekvenser:**

1. **Bakgrunn**: Aralsjøen, mellom Kasakhstan og Usbekistan, var en gang verdens fjerde største innsjø.

2. **Årsak**: Fra 1960-tallet ledet Sovjetunionen vannet fra tilløpselvene (Amu-Darja og Syr-Darja) til irrigasjon av bomullsåkrer i ørkenen.

3. **Konsekvenser**:
   - Sjøen har krympet til under 10 % av opprinnelig størrelse
   - Fiskeriene kollapset – hele kystbyer mistet levebrødet
   - Salt og giftige kjemikalier fra tørrlagt sjøbunn blåser over jordbruksland
   - Lokalt klima ble tørrere og mer ekstremt
   - Alvorlige helseproblemer for befolkningen

4. **Lærdommen**: Viser hvordan kortsiktig ressursbruk kan gi irreversible miljøskader.`,
    },
    {
      id: 'geo-4-3-norge',
      type: 'text',
      content: `## Vannkraft i Norge

Norge er i en unik situasjon med enorme ferskvannsressurser. Rikelig nedbør, mange elver, innsjøer og bratt terreng gjør landet ideelt for vannkraftproduksjon.

### Norges vannkraft
- Ca. **90 %** av norsk elektrisitetsproduksjon kommer fra vannkraft
- Norge er Europas største vannkraftprodusent
- Over 1 700 vannkraftverk spredt over hele landet
- Magasinkraft lagrer vann i fjellmagasiner til det trengs
- Elvekraft bruker elvers naturlige fall uten store magasiner

### Fordeler med vannkraft
- Fornybar og utslippsfri energikilde
- Regulerbar – kan tilpasses behovet
- Billig i drift etter at anlegget er bygget
- Gir stabil energiforsyning

### Utfordringer
- Naturinngrep: Demninger, regulerte vassdrag og endrete vannføringer
- Påvirker fiskevandring og elveøkologi
- Konflikter mellom utbygging og naturvern
- Tørre år kan gi lavere produksjon

### Norsk vannforvaltning
Norge har omfattende lovgivning for å beskytte vannressurser. Vannforskriften, basert på EUs vanndirektiv, krever god økologisk tilstand i alle vannforekomster.`,
    },
    {
      id: 'geo-4-3-global',
      type: 'text',
      content: `## Global vannkrise?

FN anslår at over 2 milliarder mennesker mangler tilgang til trygt drikkevann. Dårlig vannkvalitet og mangelfull sanitær infrastruktur fører til sykdommer som kolera, dysenteri og tyfoidfeber, som dreper hundretusener hvert år.

### Mulige løsninger
- **Effektivisering av jordbruk**: Dryppvanning i stedet for oversvømmingsvanning
- **Vannbehandling**: Rensing og gjenbruk av avløpsvann
- **Regnvannsoppsamling**: Samle regnvann for husholdning og jordbruk
- **Avsalting**: Gjøre sjøvann drikkbart med ny teknologi
- **Internasjonalt samarbeid**: Fordeling av grenseoverskridende vannressurser
- **Investering i infrastruktur**: Vannledninger, brønner og sanitæranlegg i utviklingsland

FNs bærekraftsmål nr. 6 er «Rent vann og gode sanitærforhold» for alle innen 2030.`,
    },
  
    {
      id: 'geo-4-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Bare ca. 2,5 % av jordens vann er ferskvann, og det meste er bundet i is
- **Vannets kretslop** beskriver hvordan vann sirkulerer mellom hav, atmosfaere og land
- Over 2 milliarder mennesker mangler tilgang til trygt drikkevann
- **Vannkonflikter** oppstaar naar flere land deler samme vassdrag og det er knapphet
- Klimaendringer forandrer nedborsmoenstre og forsterker vannknapphet i mange regioner`,
    },
    {
      id: 'geo-4-3-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- NVE (Norges vassdrags- og energidirektorat): nve.no
- UN Water: unwater.org
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- WHO/UNICEF: washdata.org`,
    },
  ],
  exercises: [
    {
      id: 'geo-4-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor stor andel av verdens vann er ferskvann?',
      options: [
        { id: 'a', text: 'Ca. 25 %', isCorrect: false },
        { id: 'b', text: 'Ca. 10 %', isCorrect: false },
        { id: 'c', text: 'Ca. 2,5 %', isCorrect: true },
        { id: 'd', text: 'Ca. 15 %', isCorrect: false },
      ],
      solution: 'Bare ca. 2,5 % av verdens vann er ferskvann. Av dette er størstedelen bundet i isbreer og snø (ca. 69 %) eller lagret som grunnvann (ca. 30 %). Bare ca. 1 % av ferskvannet finnes som tilgjengelig overflatevann.',
    },
    {
      id: 'geo-4-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hovedprosessene i vannets kretsløp.',
      solution: 'Vannets kretsløp omfatter følgende hovedprosesser: Fordampning – sola varmer opp vann i hav, innsjøer og elver slik at vannet fordamper til atmosfæren. Transpirasjon – planter avgir vanndamp gjennom bladene. Kondensasjon – vanndampen avkjøles i atmosfæren og danner skyer. Nedbør – vann faller tilbake til overflaten som regn, snø eller hagl. Avrenning – vann renner over overflaten til elver og hav. Infiltrasjon – vann trenger ned i bakken og blir til grunnvann. Kretsløpet drives av solenergi og tyngdekraft.',
    },
    {
      id: 'geo-4-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken sektor bruker mest ferskvann globalt?',
      options: [
        { id: 'a', text: 'Industri', isCorrect: false },
        { id: 'b', text: 'Husholdninger', isCorrect: false },
        { id: 'c', text: 'Jordbruk (irrigasjon)', isCorrect: true },
        { id: 'd', text: 'Energiproduksjon', isCorrect: false },
      ],
      solution: 'Jordbruk og irrigasjon bruker ca. 70 % av verdens ferskvann. Dette gjør jordbruket til den desidert største forbrukeren av ferskvann globalt.',
    },
    {
      id: 'geo-4-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom fysisk og økonomisk vannknapphet, og gi eksempler på områder som er rammet av hver type.',
      solution: 'Fysisk vannknapphet betyr at det rett og slett ikke finnes tilstrekkelig vannressurser i et område til å dekke behovet. Eksempler er Midtøsten og Nord-Afrika, der lavt nedbør og tørt klima gir svært begrensede vannmengder. Økonomisk vannknapphet betyr at vannressursene finnes, men at landene mangler infrastruktur, teknologi eller økonomiske ressurser til å utnytte dem. Dette er vanlig i deler av Afrika sør for Sahara, der det kan være tilstrekkelig nedbør, men der det mangler brønner, vannledninger og renseanlegg.',
    },
    {
      id: 'geo-4-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor stor andel av norsk elektrisitetsproduksjon kommer fra vannkraft?',
      options: [
        { id: 'a', text: 'Ca. 50 %', isCorrect: false },
        { id: 'b', text: 'Ca. 70 %', isCorrect: false },
        { id: 'c', text: 'Ca. 90 %', isCorrect: true },
        { id: 'd', text: 'Ca. 60 %', isCorrect: false },
      ],
      solution: 'Ca. 90 % av Norges elektrisitetsproduksjon kommer fra vannkraft. Norge er Europas største vannkraftprodusent, takket være rikelig nedbør, mange elver og bratt terreng.',
    },
  ],
};

// ============================================================================
// Kapittel 4.4: Energiressurser
// ============================================================================

export const CHAPTER_GEOGRAFI_4_4: TextbookChapter = {
  id: 'geografi-1-4-4',
  courseId: 'geografi',
  chapterNumber: '4.4',
  title: 'Energiressurser',
  description: 'Fossile og fornybare energikilder, energiomstilling og Norges energisituasjon.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for ulike energikilder og deres fordeler og ulemper',
    'drøfte energiomstillingen og Norges rolle som energinasjon',
  ],
  content: [
    {
      id: 'geo-4-4-intro',
      type: 'text',
      content: `# Energiressurser

Energi er grunnlaget for moderne samfunn. Vi trenger energi til oppvarming, transport, industri, matlaging og kommunikasjon. Hvordan vi produserer og bruker energi, har enorme konsekvenser for miljøet, klimaet og verdens utvikling.

## Energibruk i verden

Det globale energiforbruket har økt dramatisk de siste hundre årene. Fossile brensler (olje, gass og kull) dekker fortsatt over 80 % av verdens energibehov, men andelen fornybar energi vokser raskt.

Energiforbruket er svært ujevnt fordelt: En gjennomsnittsperson i Norge bruker mange ganger mer energi enn en person i et lavinntektsland.`,
    },
    {
      id: 'geo-4-4-fossile',
      type: 'text',
      content: `## Fossile energikilder

Fossile brensler er dannet av organisk materiale (planter og dyr) som har vært utsatt for høyt trykk og temperatur i millioner av år. De er **ikke-fornybare** – de dannes mye langsommere enn vi bruker dem.

### Olje (petroleum)
- Dannet av mikroorganismer i havet over millioner av år
- Brukes til transport (bensin, diesel), plast, kjemikalier og oppvarming
- Finnes i store mengder i Midtøsten, Russland, USA og norsk kontinentalsokkel
- Utvinning kan gi oljesøl og havforurensning

### Naturgass
- Dannet sammen med olje, men lettere og renere i forbrenning
- Brukes til oppvarming, elektrisitetsproduksjon og industri
- Lavere CO₂-utslipp per energienhet enn kull og olje
- Norge er en stor eksportør av naturgass til Europa

### Kull
- Det eldste og mest brukte fossile brenselet
- Dannet av tropiske skoger for 300–360 millioner år siden (karbontiden)
- Brukes i stor grad til elektrisitetsproduksjon, særlig i Kina og India
- Gir størst CO₂-utslipp per energienhet av fossile brensler
- Kullgruvedrift fører til store miljøinngrep`,
    },
    {
      id: 'geo-4-4-def-fossil',
      type: 'definition',
      title: 'Fossile brensler',
      content: 'Fossile brensler er energikilder dannet av organisk materiale (rester av planter og dyr) som over millioner av år har blitt omdannet til kull, olje eller naturgass under høyt trykk og temperatur. De er ikke-fornybare ressurser fordi de dannes mye langsommere enn de brukes.',
    },
    {
      id: 'geo-4-4-fornybare',
      type: 'text',
      content: `## Fornybare energikilder

Fornybare energikilder fornyes naturlig og vil ikke gå tomme. De gir lite eller ingen klimagassutslipp under drift.

### Vannkraft
- Utnytter vanns bevegelse (fallhøyde) til å drive turbiner
- Regulerbar – kan tilpasses etterspørselen
- Norge, Brasil, Canada og Kina er store produsenter
- Naturinngrep ved demninger og regulering

### Solenergi
- Solceller (fotovoltaiske) omdanner sollys direkte til strøm
- Solvarmeanlegg bruker solvarme til oppvarming av vann
- Raskest voksende energikilde globalt
- Avhengig av solforhold – varierer med breddegrad og årstid

### Vindkraft
- Vindturbiner omdanner vindens bevegelsesenergi til strøm
- Vokser raskt, særlig offshore (havvind)
- Variabel produksjon – avhengig av vindforhold
- Kan gi konflikter med natur, fugleliv og landskapsvern

### Bioenergi
- Energi fra biologisk materiale (ved, biogass, biodrivstoff)
- Kan være klimanøytral hvis biomassen gjenvokser
- Viktig i mange utviklingsland (ved til matlaging)
- Bioetanol og biodiesel kan erstatte fossilt drivstoff delvis

### Geotermisk energi
- Utnytter varme fra jordens indre
- Viktig på Island og i andre vulkanske områder
- Stabil og pålitelig energikilde
- Begrenset til områder med geotermisk aktivitet`,
    },
    {
      id: 'geo-4-4-def-fornybar',
      type: 'definition',
      title: 'Fornybar energi',
      content: 'Fornybar energi er energi fra kilder som fornyes naturlig og ikke vil gå tomme ved bruk. Eksempler er vannkraft, solenergi, vindkraft, bioenergi og geotermisk energi. I motsetning til fossile brensler gir fornybare energikilder ingen eller svært lave klimagassutslipp under drift.',
    },
    {
      id: 'geo-4-4-omstilling',
      type: 'text',
      content: `## Energiomstilling

Energiomstillingen (energitransisjonen) innebærer at verden gradvis går over fra fossile brensler til fornybare energikilder for å begrense klimaendringene.

### Drivkrefter
- **Klimamålene**: Parisavtalen krever at global oppvarming begrenses til 1,5–2 °C
- **Teknologiutvikling**: Sol- og vindkraft har blitt dramatisk billigere de siste tiårene
- **Politisk vilje**: Mange land har satt mål om klimanøytralitet innen 2050
- **Økonomiske muligheter**: Grønne arbeidsplasser og ny industri

### Utfordringer
- **Energilagring**: Sol og vind produserer variabelt – batteriteknologi må utvikles videre
- **Infrastruktur**: Strømnett, ladestasjoner og hydrogeninfrastruktur må bygges ut
- **Sosial rettferdighet**: Omstillingen må ikke ramme fattige land og sårbare grupper uforholdsmessig
- **Kritiske mineraler**: Produksjon av batterier og solceller krever mineraler som litium og kobolt
- **Fossil avhengighet**: Mange land er økonomisk avhengige av fossile inntekter`,
    },
    {
      id: 'geo-4-4-norge',
      type: 'text',
      content: `## Norges energisituasjon

Norge har en unik posisjon som energinasjon – landet er både en stor produsent av fossil energi og en foregangsnasjon for fornybar energi.

### Olje- og gassnasjonen
- Norge har produsert olje og gass fra Nordsjøen siden 1971
- Petroleumsinntektene har gjort Norge til et av verdens rikeste land
- Statens pensjonsfond utland (Oljefondet) forvalter oljeinntektene for fremtidige generasjoner
- Norge er Europas største gassleverandør etter Russlands krig i Ukraina

### Det grønne paradokset
Norge møter en tilsynelatende motsetning:
- Nesten all strøm innenlands kommer fra fornybar energi (vannkraft)
- Samtidig er Norge en stor eksportør av olje og gass som forårsaker utslipp i andre land
- Dette skaper debatt om Norges klimaansvar og fremtidige energipolitikk

### Satsing på ny energi
- **Havvind**: Store planer for vindkraft til havs (Utsira Nord, Sørlige Nordsjø)
- **Hydrogen**: Norsk teknologi for produksjon av grønt og blått hydrogen
- **Elektrifisering**: Verdensledende innen elbiler og elektrisk fergetransport
- **Karbonfangst og -lagring (CCS)**: Langskip-prosjektet skal lagre CO₂ under havbunnen`,
    },
    {
      id: 'geo-4-4-example',
      type: 'example',
      title: 'Sammenligning av energikilder',
      problem: 'Sammenlign kull og solenergi som energikilder med tanke på klimagassutslipp, tilgjengelighet og kostnader.',
      solution: `**Sammenligning av kull og solenergi:**

| Kriterium | Kull | Solenergi |
|-----------|------|-----------|
| **Klimagassutslipp** | Høyest av alle energikilder (ca. 1000 g CO₂/kWh) | Minimale utslipp i drift (30–50 g CO₂/kWh over livsløpet) |
| **Tilgjengelighet** | Ikke-fornybar, begrensede reserver | Fornybar, tilgjengelig overalt (varierer med breddegrad) |
| **Kostnader** | Stabile driftskostnader, men dyrere med CO₂-avgifter | Lav og synkende kostnad – nå billigst i mange områder |
| **Pålitelighet** | Stabil produksjon, regulerbar | Variabel, avhengig av sol – krever lagring |
| **Miljøpåvirkning** | Store: gruvedrift, luftforurensning, avfall | Moderate: arealbruk, produksjon av solceller |

**Konklusjon**: Solenergi har store fordeler klimamessig og kostnadsmessig, men utfordringen med variabel produksjon krever gode lagringsløsninger.`,
    },
    {
      id: 'geo-4-4-fremtid',
      type: 'text',
      content: `## Energifremtiden

Det internasjonale energibyrået (IEA) har pekt på flere trender for global energi:

- **Sol og vind** vil stå for mesteparten av ny kraftproduksjon globalt
- **Elektrifisering** av transport, industri og oppvarming er nøkkelen
- **Hydrogen** kan bli viktig for tungtransport, skipsfart og industriprosesser
- **Kjernekraft** diskuteres igjen i mange land som et lavutslippsalternativ
- **Energieffektivisering** er like viktig som ny produksjon – den billigste energien er den vi ikke bruker

Overgangen fra fossilt til fornybart vil kreve massive investeringer, men gir også enorme muligheter for innovasjon og nye arbeidsplasser.`,
    },
  
    {
      id: 'geo-4-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Fossile energikilder (kull, olje, gass) staar for ca. 80 % av verdens energiforbruk
- Fornybare energikilder inkluderer **vannkraft**, **vindkraft**, **solenergi** og **bioenergi**
- Norge er en stor produsent av baade olje/gass og fornybar energi (vannkraft)
- **Energiomstillingen** innebarer overgang fra fossil til fornybar energi
- Det er interessekonflikter mellom oekonomisk vekst, arbeidsplasser og klimahensyn`,
    },
    {
      id: 'geo-4-4-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- NVE (Norges vassdrags- og energidirektorat): nve.no
- IEA (Det internasjonale energibyraaet): iea.org
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- Norsk Petroleum: norskpetroleum.no`,
    },
  ],
  exercises: [
    {
      id: 'geo-4-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket fossilt brensel gir størst CO₂-utslipp per energienhet?',
      options: [
        { id: 'a', text: 'Naturgass', isCorrect: false },
        { id: 'b', text: 'Olje', isCorrect: false },
        { id: 'c', text: 'Kull', isCorrect: true },
        { id: 'd', text: 'Hydrogen', isCorrect: false },
      ],
      solution: 'Kull gir størst CO₂-utslipp per energienhet blant de fossile brenslene. Naturgass gir lavest utslipp av de fossile kildene – omtrent halvparten av kull.',
    },
    {
      id: 'geo-4-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for hva som menes med «Norges grønne paradoks» i energipolitikken.',
      solution: 'Norges grønne paradoks handler om motsetningen mellom at Norge innenlands har en nesten helt fornybar elektrisitetsforsyning (ca. 90 % vannkraft), mens landet samtidig er en av verdens store eksportører av olje og gass. Den fossile energien Norge selger til utlandet forårsaker store klimagassutslipp når den forbrennes i andre land. Paradokset reiser spørsmål om Norges klimaansvar: Er Norge ansvarlig bare for egne utslipp, eller også for utslippene som oppstår når andre land brenner norsk olje og gass? Debatten handler også om hvor raskt Norge bør fase ut petroleumsvirksomheten til fordel for grønn energi.',
    },
    {
      id: 'geo-4-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en av de største utfordringene med sol- og vindenergi?',
      options: [
        { id: 'a', text: 'De er svært dyre å produsere', isCorrect: false },
        { id: 'b', text: 'De har høye klimagassutslipp', isCorrect: false },
        { id: 'c', text: 'Produksjonen er variabel og avhengig av vær', isCorrect: true },
        { id: 'd', text: 'De kan bare brukes i tropiske land', isCorrect: false },
      ],
      solution: 'Den største utfordringen med sol- og vindenergi er at produksjonen er variabel – sola skinner ikke alltid, og vinden blåser ikke alltid. Derfor trengs gode løsninger for energilagring (batterier, pumpekraft, hydrogen) for å sikre stabil energiforsyning.',
    },
    {
      id: 'geo-4-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Drøft fordeler og ulemper ved vannkraft som energikilde.',
      solution: 'Fordeler med vannkraft: Det er en fornybar energikilde som ikke slipper ut klimagasser under drift. Den er regulerbar – man kan tilpasse produksjonen etter behovet ved å slippe mer eller mindre vann gjennom turbinene. Den er billig i drift etter at anlegget er bygget, og gir stabil og pålitelig energiforsyning. Ulemper med vannkraft: Utbygging innebærer store naturinngrep – demninger, kunstige innsjøer og regulerte vassdrag endrer landskapet og økosystemene. Fiskevandring forstyrres, og elvenes naturlige dynamikk påvirkes. Det kan oppstå konflikter mellom vannkraftutbygging og naturvern. I tørre år kan produksjonen bli lavere enn normalt.',
    },
    {
      id: 'geo-4-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken energikilde er det Norge satser stort på til havs?',
      options: [
        { id: 'a', text: 'Bølgekraft', isCorrect: false },
        { id: 'b', text: 'Havvind (offshore vindkraft)', isCorrect: true },
        { id: 'c', text: 'Tidevannskraft', isCorrect: false },
        { id: 'd', text: 'Havbasert solenergi', isCorrect: false },
      ],
      solution: 'Norge satser stort på havvind (offshore vindkraft). Store prosjekter som Utsira Nord og Sørlige Nordsjø er planlagt, og Norge kan utnytte sin offshore-kompetanse fra olje- og gassindustrien i denne satsingen.',
    },
  ],
};

// ============================================================================
// Kapittel 4.5: Havressurser og fiskeri
// ============================================================================

export const CHAPTER_GEOGRAFI_4_5: TextbookChapter = {
  id: 'geografi-1-4-5',
  courseId: 'geografi',
  chapterNumber: '4.5',
  title: 'Havressurser og fiskeri',
  description: 'Havets ressurser, fiskeri og havbruk, overfiske og norsk fiskerinæring.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for havets ressurser og betydningen av fiskeri og havbruk',
    'drøfte utfordringer knyttet til bærekraftig forvaltning av havressurser',
  ],
  content: [
    {
      id: 'geo-4-5-intro',
      type: 'text',
      content: `# Havressurser og fiskeri

Havet dekker over 70 % av jordens overflate og er en enorm kilde til mat, energi, mineraler og transport. For over 3 milliarder mennesker er sjømat den viktigste kilden til animalsk protein. Havets ressurser er imidlertid under sterkt press fra overfiske, forurensning og klimaendringer.

## Havets betydning

Havet spiller en avgjørende rolle for livet på jorden:
- **Oksygenproduksjon**: Planteplankton i havet produserer om lag halvparten av jordens oksygen
- **Klimaregulering**: Havet absorberer varme og CO₂ fra atmosfæren
- **Matforsyning**: Fisk og sjømat er viktig proteinkilde for milliarder av mennesker
- **Transport**: Over 80 % av internasjonal handel fraktes på havet
- **Energi**: Olje, gass, vindkraft og mulig bølge- og tidevannskraft
- **Biologisk mangfold**: Enorme økosystemer med stort artsmangfold`,
    },
    {
      id: 'geo-4-5-ressurser',
      type: 'text',
      content: `## Havets ressurser

### Levende ressurser
- **Fisk**: Torsk, sild, makrell, tunfisk og mange andre arter
- **Skalldyr**: Reker, krabbe, hummer og kamskjell
- **Plankton og alger**: Grunnlaget for havets næringskjede, og potensielt fremtidig mat
- **Sjøpattedyr**: Hval, sel (historisk viktige, nå hovedsakelig vernet)

### Ikke-levende ressurser
- **Olje og gass**: Store forekomster på kontinentalsokkelen
- **Mineraler**: Mangannoduler og metallrike sulfider på havbunnen
- **Sand og grus**: Brukes i byggebransjen
- **Salt**: Utvinnes fra sjøvann

### Energiressurser
- **Offshore vind**: Vindturbiner på havet
- **Bølgekraft**: Utnytter bølgenes bevegelsesenergi
- **Tidevannskraft**: Utnytter tidevannsforskjeller
- **Havvarme**: Temperaturforskjeller i vannet kan utnyttes til energiproduksjon`,
    },
    {
      id: 'geo-4-5-fiskeri',
      type: 'text',
      content: `## Fiskeri

### Verdens fiskeri
Det globale fangsten av villfisk ligger på rundt 90 millioner tonn per år. De viktigste fiskeriområdene er:

- **Nordvest-Stillehavet**: Verdens største fiskeriområde (Japan, Kina, Russland)
- **Nordøst-Atlanteren**: Norskehavet, Barentshavet, Nordsjøen (Norge, Island, Storbritannia)
- **Sørøst-Stillehavet**: Utenfor Peru og Chile (ansjos, sardin)
- **Oppvellingssoner**: Områder der næringsrikt dypvann presses opp gir rike fiskerier

### Fangstmetoder
- **Trål**: Store nett som slepes gjennom vannet – effektiv men kan skade havbunnen
- **Not (snurpenot)**: Fisken omringes med et stort nett – vanlig for pelagisk fisk
- **Garn og line**: Mer skånsomme metoder med mindre bifangst
- **Teiner**: Brukes for krabbe, hummer og reker`,
    },
    {
      id: 'geo-4-5-def-overfiske',
      type: 'definition',
      title: 'Overfiske',
      content: 'Overfiske oppstår når en fiskebestand beskattes raskere enn den kan fornye seg. Vedvarende overfiske kan føre til at bestanden kollapser og ikke klarer å bygge seg opp igjen. FN anslår at over en tredjedel av verdens fiskebestander er overfisket.',
    },
    {
      id: 'geo-4-5-havbruk',
      type: 'text',
      content: `## Havbruk (akvakultur)

Havbruk er oppdrett av fisk, skalldyr, alger og andre akvatiske organismer. Produksjonen har vokst kraftig og utgjør nå over halvparten av all sjømat som konsumeres globalt.

### Typer havbruk
- **Lakseoppdrett**: Merder i sjøen – Norges viktigste havbruksnæring
- **Rekeoppdrett**: Stort i Sørøst-Asia – ofte med miljøproblemer
- **Skjelloppdrett**: Blåskjell, kamskjell og østers
- **Algeoppdrett**: Voksende næring, særlig i Asia
- **Landbasert oppdrett**: Fisk i lukkede anlegg på land – ny teknologi

### Fordeler
- Kan dekke det økende behovet for sjømat uten å belaste villfiskbestander
- Effektiv matproduksjon – laks utnytter fôret bedre enn de fleste husdyr
- Kan gi arbeidsplasser i kystsamfunn

### Utfordringer
- Utslipp av næringsstoffer, medisiner og kjemikalier
- Rømming av oppdrettsfisk truer villaksbestander
- Lakselus som smitter fra oppdrett til villfisk
- Fôr fra villfisk (fiskemel og fiskeolje) – bærekraftsspørsmål
- Arealbruk i kystområder`,
    },
    {
      id: 'geo-4-5-overf',
      type: 'text',
      content: `## Overfiske og bærekraftig forvaltning

### Konsekvenser av overfiske
- **Bestandskollaps**: Torskebestanden utenfor Newfoundland kollapset i 1992 og har ikke hentet seg inn
- **Økosystemendringer**: Fjerning av toppredatorer endrer hele næringskjeden
- **Tap av levebrød**: Millioner av fiskere mister inntekten
- **Matusikkerhet**: Redusert tilgang på sjømat for sårbare befolkninger

### Tiltak for bærekraftig fiskeri
- **Kvoter**: Begrensninger på hvor mye som kan fanges av hver art
- **Minstemål**: Fisk under en viss størrelse må slippes ut igjen
- **Fredningsperioder**: Fiskeforbud i gytetiden
- **Marine verneområder**: Havområder der fiske er forbudt eller begrenset
- **Sertifisering**: MSC-merket (Marine Stewardship Council) garanterer bærekraftig fangst
- **Tekniske reguleringer**: Krav til redskap, maskevidde og bifangstbegrensning`,
    },
    {
      id: 'geo-4-5-example',
      type: 'example',
      title: 'Torskekollapsen ved Newfoundland',
      problem: 'Beskriv hva som skjedde med torskebestanden ved Newfoundland i Canada, og hva vi kan lære av hendelsen.',
      solution: `**Torskekollapsen ved Newfoundland:**

1. **Bakgrunn**: I århundrer var Newfoundlands Grand Banks et av verdens rikeste fiskerier. Torsk var grunnlaget for en hel regions økonomi og kultur.

2. **Hva skjedde**: Fra 1960-tallet økte fangsten dramatisk med ny teknologi (store fabrikktråler). Bestanden ble overfisket i tiår, til tross for advarsler fra forskere.

3. **Kollapsen**: I 1992 var bestanden så lav at Canada innførte fiskestopp (moratorium). Rundt 40 000 mennesker mistet levebrødet.

4. **Etterpå**: Selv etter over 30 år med fiskestopp har bestanden ikke hentet seg fullstendig inn, fordi økosystemet endret seg.

5. **Lærdommen**:
   - Naturressurser har en grense som ikke kan overskrides
   - Man må lytte til vitenskapelige anbefalinger
   - Føre-var-prinsippet er avgjørende
   - Bestandskollaps kan være nærmest irreversibel`,
    },
    {
      id: 'geo-4-5-norge',
      type: 'text',
      content: `## Norsk fiskerinæring

Norge har en av verdens lengste kystlinjer og rike havområder. Fiskerinæringen har vært sentral i norsk økonomi og kultur i tusenvis av år.

### Norsk villfiskfangst
- **Viktigste arter**: Torsk, sild, makrell, sei, hyse, lodde og reker
- **Barentshavet**: Et av verdens mest produktive havområder – viktig for torsk og lodde
- **Norskehavet**: Rikt på sild og makrell
- **Nordsjøen**: Variert fiskeri med mange arter
- **Lofotfisket**: Historisk viktig sesongfiske etter skrei (gytemoden torsk)

### Norsk lakseoppdrett
- Norge er verdens største produsent av atlantisk oppdrettslaks
- Eksportverdi på over 100 milliarder kroner årlig
- Gir arbeidsplasser langs hele kysten
- Utfordringer med lakselus, rømming og miljøpåvirkning

### Forvaltning
Norge har et velfungerende forvaltningssystem med kvoter, minstemål og tekniske reguleringer. Havforskningsinstituttet gir vitenskapelige råd om bestandsstørrelser. Norsk-russisk samarbeid om forvaltning av Barentshavet har vært en suksesshistorie – torskebestanden i Barentshavet er blant verdens best forvaltede.`,
    },
    {
      id: 'geo-4-5-fremtid',
      type: 'text',
      content: `## Havets fremtid

Havet står overfor store utfordringer i tiårene fremover:

- **Klimaendringer**: Varmere hav, havforsuring og endrede strømmønstre påvirker fiskebestandene
- **Plastforurensning**: Millioner tonn plast havner i havet hvert år
- **Havforsuring**: CO₂ som løses i havet gjør det surere – truer koraller og skalldyr
- **Tap av biologisk mangfold**: Korallrev, mangroveskog og andre viktige økosystemer er truet

FNs havtiår (2021–2030) setter fokus på bærekraftig bruk og vern av havene. FNs bærekraftsmål nr. 14 er «Livet i havet» – å bevare og bruke hav- og marine ressurser bærekraftig.`,
    },
  
    {
      id: 'geo-4-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Havet dekker over 70 % av jordoverflaten og inneholder enorme ressurser
- **Fiskeri** og **havbruk** er viktige naeringsveier, saerlig for kystnasjoner som Norge
- **Overfiske** truer mange fiskebestander og marine oekosystemer
- Norsk fiskerinering er regulert gjennom kvoter og forvaltningsplaner
- Baerekraftig havforvaltning er avgjoerendes for aa bevare havets ressurser for fremtiden`,
    },
    {
      id: 'geo-4-5-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- Havforskningsinstituttet: hi.no
- FAO (FNs mat- og landbruksorganisasjon): fao.org
- Fiskeridirektoratet: fiskeridir.no
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.`,
    },
  ],
  exercises: [
    {
      id: 'geo-4-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Omtrent hvor stor andel av jordens oksygen produseres av planteplankton i havet?',
      options: [
        { id: 'a', text: 'Ca. 10 %', isCorrect: false },
        { id: 'b', text: 'Ca. 25 %', isCorrect: false },
        { id: 'c', text: 'Ca. 50 %', isCorrect: true },
        { id: 'd', text: 'Ca. 75 %', isCorrect: false },
      ],
      solution: 'Planteplankton i havet produserer om lag halvparten (ca. 50 %) av jordens oksygen gjennom fotosyntese. Dette gjør havet minst like viktig som skogene for oksygenproduksjonen.',
    },
    {
      id: 'geo-4-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for fordeler og utfordringer ved lakseoppdrett i Norge.',
      solution: 'Fordeler: Lakseoppdrett er en effektiv form for matproduksjon – laks utnytter fôret bedre enn de fleste landbaserte husdyr. Næringen gir store eksportinntekter (over 100 milliarder kroner årlig) og viktige arbeidsplasser i kystsamfunn langs hele landet. Oppdrett kan dekke økende etterspørsel etter sjømat uten å belaste villfiskbestander. Utfordringer: Lakselus fra oppdrettsanlegg smitter over på villlaks og kan redusere villaksbestanden. Rømming av oppdrettslaks truer det genetiske mangfoldet i villlaksstammene. Utslipp av næringsstoffer, medisiner og kjemikalier påvirker havmiljøet lokalt. Fôrproduksjonen er delvis basert på villfisk (fiskemel og fiskeolje), noe som reiser bærekraftsspørsmål.',
    },
    {
      id: 'geo-4-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skjedde med torskebestanden ved Newfoundland i 1992?',
      options: [
        { id: 'a', text: 'Bestanden ble rammet av en sykdom', isCorrect: false },
        { id: 'b', text: 'Bestanden kollapset etter tiår med overfiske', isCorrect: true },
        { id: 'c', text: 'Torsken flyttet til andre havområder', isCorrect: false },
        { id: 'd', text: 'Et oljesøl forårsaket massedød', isCorrect: false },
      ],
      solution: 'Torskebestanden ved Newfoundland kollapset i 1992 etter tiår med intensivt overfiske med moderne fabrikktrålere. Canada innførte fiskestopp (moratorium), men selv etter over 30 år har bestanden ikke hentet seg fullstendig inn.',
    },
    {
      id: 'geo-4-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre ulike tiltak for bærekraftig fiskeriforvaltning og forklar hvordan de virker.',
      solution: '1) Kvotesystemet: Forskere beregner hvor mye som kan fanges uten å skade bestanden, og myndighetene fastsetter kvoter (fangsttillatelser) for hver art. Dette sikrer at uttaket ikke overstiger bestandens reproduksjonsevne. 2) Marine verneområder: Havområder der fiske er forbudt eller sterkt begrenset gir fisken trygge oppvekst- og gyteområder. Dette kan fungere som «barnehager» som forsyner omliggende områder med fisk. 3) Fredningsperioder: Fiskeforbud i gytetiden sikrer at fisken får gyte uforstyrret, slik at neste generasjon fisk kan produseres. For eksempel har Norge strenge regler for fiske i viktige gyteområder langs kysten.',
    },
    {
      id: 'geo-4-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Norge verdens største produsent av innen havbruk?',
      options: [
        { id: 'a', text: 'Reker', isCorrect: false },
        { id: 'b', text: 'Blåskjell', isCorrect: false },
        { id: 'c', text: 'Atlantisk oppdrettslaks', isCorrect: true },
        { id: 'd', text: 'Tang og tare', isCorrect: false },
      ],
      solution: 'Norge er verdens største produsent av atlantisk oppdrettslaks. Næringen har vokst kraftig siden 1970-tallet og er i dag en av Norges viktigste eksportnæringer.',
    },
  ],
};

// ============================================================================
// Kapittel 4.6: Bærekraftig ressursforvaltning
// ============================================================================

export const CHAPTER_GEOGRAFI_4_6: TextbookChapter = {
  id: 'geografi-1-4-6',
  courseId: 'geografi',
  chapterNumber: '4.6',
  title: 'Bærekraftig ressursforvaltning',
  description: 'Fornybare og ikke-fornybare ressurser, sirkulærøkonomi, økosystemtjenester og FNs bærekraftsmål.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte hva bærekraftig ressursforvaltning innebærer',
    'gjøre rede for FNs bærekraftsmål knyttet til naturressurser og miljø',
  ],
  content: [
    {
      id: 'geo-4-6-intro',
      type: 'text',
      content: `# Bærekraftig ressursforvaltning

Menneskeheten er avhengig av naturressurser for å overleve og utvikle seg. Men ressursene er ikke uendelige. Bærekraftig ressursforvaltning handler om å bruke naturens ressurser slik at vi dekker dagens behov uten å ødelegge mulighetene for fremtidige generasjoner.

## Hva er en naturressurs?

En **naturressurs** er et materiale eller en egenskap i naturen som mennesker kan utnytte. Ressursene deles inn i to hovedkategorier basert på om de kan fornyes eller ikke.`,
    },
    {
      id: 'geo-4-6-typer',
      type: 'text',
      content: `## Fornybare vs. ikke-fornybare ressurser

### Fornybare ressurser
Fornybare ressurser fornyes naturlig og kan i prinsippet brukes i det uendelige – forutsatt at de forvaltes bærekraftig:
- **Solenergi, vind og vannkraft**: Fornyes kontinuerlig av naturen
- **Skog**: Trær kan hogges og plantes på nytt – men avskoging kan gjøre skaden varig
- **Fisk**: Bestander kan høstes bærekraftig – men overfiske kan føre til kollaps
- **Jord**: Dannes naturlig – men erosjon kan ødelegge jorda raskere enn den fornyes
- **Ferskvann**: Fornyes gjennom vannets kretsløp – men kan overforbrukes lokalt

### Ikke-fornybare ressurser
Ikke-fornybare ressurser finnes i begrensede mengder og dannes over millioner av år:
- **Fossile brensler**: Olje, gass og kull – dannet av organisk materiale over millioner av år
- **Mineraler og metaller**: Jern, kobber, litium, gull – begrenset forekomst i jordskorpen
- **Fosfor**: Essensielt for gjødsel – begrenset global tilgang

### Gråsonen
Noen ressurser er vanskelige å kategorisere. Grunnvann, for eksempel, fornyes – men i mange områder trekkes det ut raskere enn det fylles opp (overforbruk av akviferer).`,
    },
    {
      id: 'geo-4-6-def-baerekraft',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: 'Bærekraftig utvikling er en utvikling som dekker behovene til dagens generasjon uten å ødelegge mulighetene for fremtidige generasjoner til å dekke sine behov. Begrepet ble definert av Brundtland-kommisjonen i rapporten «Vår felles fremtid» i 1987.',
    },
    {
      id: 'geo-4-6-sirkulaer',
      type: 'text',
      content: `## Sirkulærøkonomi

Tradisjonelt har økonomien vært basert på en **lineær modell**: Vi tar ut ressurser, produserer varer, bruker dem og kaster dem (ta-bruk-kast). Sirkulærøkonomien er et alternativ.

### Hva er sirkulærøkonomi?
Sirkulærøkonomi er et økonomisk system der produkter og materialer holdes i omløp så lenge som mulig. Avfall og forurensning minimeres ved at ressurser gjenbrukes, repareres og resirkuleres.

### Prinsipper
1. **Design for lang levetid**: Produkter lages for å vare, repareres og oppgraderes
2. **Gjenbruk**: Produkter brukes om igjen i sin opprinnelige form
3. **Reparasjon**: Ødelagte produkter fikses i stedet for å kastes
4. **Resirkulering**: Materialer fra kasserte produkter brukes til å lage nye produkter
5. **Biologisk nedbryting**: Organisk materiale komposteres og returneres til naturen

### Eksempler
- Panteordningen for flasker og bokser i Norge (returrate over 90 %)
- Gjenvinning av metaller fra elektronisk avfall
- Deling av verktøy, biler og klær (delingsøkonomi)
- Redesign av produkter med resirkulerbare materialer`,
    },
    {
      id: 'geo-4-6-def-sirkulaer',
      type: 'definition',
      title: 'Sirkulærøkonomi',
      content: 'Sirkulærøkonomi er et økonomisk system som minimerer avfall og ressursbruk ved at produkter og materialer holdes i omløp gjennom gjenbruk, reparasjon, oppgradering og resirkulering. Det er det motsatte av en lineær økonomi (ta-bruk-kast).',
    },
    {
      id: 'geo-4-6-okosystem',
      type: 'text',
      content: `## Økosystemtjenester

Naturen gir oss en rekke «tjenester» som er avgjørende for menneskers velferd og overlevelse. Disse kalles **økosystemtjenester**.

### Fire kategorier

**1. Forsyningstjenester**
Produkter vi henter direkte fra naturen:
- Mat (fisk, korn, frukt, kjøtt)
- Ferskvann
- Tømmer og fiber
- Medisiner fra planter

**2. Reguleringstjenester**
Prosesser i naturen som regulerer miljøet:
- Klimaregulering (skoger og hav tar opp CO₂)
- Vannrensing (våtmarker filtrerer forurensning)
- Flomdemping (vegetasjon og jord holder tilbake vann)
- Pollinering (bier og andre insekter bestøver matplanter)

**3. Kulturelle tjenester**
Ikke-materielle goder fra naturen:
- Rekreasjon og friluftsliv
- Estetiske opplevelser og turisme
- Kulturarv og identitet
- Vitenskapelig forskning

**4. Støttetjenester**
Grunnleggende prosesser som andre tjenester avhenger av:
- Fotosyntese og oksygenproduksjon
- Jorddannelse
- Næringsstoffkretsløp
- Vannets kretsløp`,
    },
    {
      id: 'geo-4-6-verdi',
      type: 'text',
      content: `## Verdien av økosystemtjenester

Mange økosystemtjenester har enorm økonomisk verdi, men fordi de er «gratis» fra naturen, blir de ofte oversett i økonomiske beslutninger.

### Eksempler på økonomisk verdi
- **Pollinering**: Verdt hundrevis av milliarder kroner globalt – uten bier ville matproduksjonen falle dramatisk
- **Korallrev**: Beskytter kystlinjer mot storm, gir fiske og turisme – verdsatt til tusenvis av milliarder globalt
- **Våtmarker**: Fungerer som naturlige vannrenseanlegg – å bygge kunstige renseanlegg ville koste langt mer
- **Skoger**: Binder karbon, produserer oksygen, forhindrer erosjon og regulerer vannføring

### Trusler
Menneskelig aktivitet truer mange økosystemtjenester:
- Avskoging reduserer karbonbinding og øker erosjon
- Forurensning ødelegger vannrensingen i våtmarker
- Tap av leveområder truer pollinerende insekter
- Klimaendringer påvirker alle kategorier av økosystemtjenester`,
    },
    {
      id: 'geo-4-6-example',
      type: 'example',
      title: 'Økosystemtjenester i praksis',
      problem: 'Forklar hvordan en myr (våtmark) kan levere økosystemtjenester innenfor alle fire kategorier.',
      solution: `**Myrens økosystemtjenester:**

1. **Forsyningstjenester**: Myra kan gi bær (molter), torvstrø til hagebruk og drikkevann fra myrbekker.

2. **Reguleringstjenester**: Myra lagrer enormt mye karbon i torven (klimaregulering), holder tilbake vann og demper flommer (flomdemping), og filtrerer forurensning fra vannet (vannrensing).

3. **Kulturelle tjenester**: Myra gir muligheter for friluftsliv, fuglekikking og jakt. Den har estetisk verdi som landskapselement og kulturhistorisk verdi (torvuttak, molteplukking).

4. **Støttetjenester**: Myra bidrar til vannets kretsløp og næringsstoffkretsløp, og er leveområde for spesialiserte planter og dyr.

**Viktig innsikt**: Når myrer dreneres for jordbruk eller utbygging, mister vi alle disse tjenestene – og torven begynner å bryte ned og frigjøre lagret CO₂.`,
    },
    {
      id: 'geo-4-6-fn',
      type: 'text',
      content: `## FNs bærekraftsmål knyttet til ressurser

FNs 17 bærekraftsmål (Sustainable Development Goals) ble vedtatt i 2015 og gjelder frem til 2030. Flere av målene handler direkte om naturressurser og miljø:

### Mest relevante bærekraftsmål

**Mål 2: Utrydde sult**
- Sikre matsikkerhet og bærekraftig jordbruk
- Bærekraftig matproduksjon og styrking av småbønder

**Mål 6: Rent vann og gode sanitærforhold**
- Sikre tilgang til rent drikkevann for alle
- Bærekraftig forvaltning av vannressurser

**Mål 7: Ren energi til alle**
- Sikre tilgang til pålitelig og bærekraftig energi
- Øke andelen fornybar energi i den globale energimiksen

**Mål 12: Ansvarlig forbruk og produksjon**
- Bærekraftige forbruks- og produksjonsmønstre
- Redusere avfall og øke gjenvinning (sirkulærøkonomi)

**Mål 13: Stoppe klimaendringene**
- Umiddelbar handling for å bekjempe klimaendringene
- Styrke motstandskraften mot klimarelaterte farer

**Mål 14: Livet i havet**
- Bevare og bruke hav- og marine ressurser bærekraftig
- Stoppe overfiske og beskytte marine økosystemer

**Mål 15: Livet på land**
- Beskytte, gjenopprette og fremme bærekraftig bruk av økosystemer på land
- Stanse tap av biologisk mangfold`,
    },
    {
      id: 'geo-4-6-norge',
      type: 'text',
      content: `## Norge og bærekraftig ressursforvaltning

Norge har lang tradisjon for naturressursforvaltning og har vedtatt ambisiøse klimamål:

### Styrker
- Høy andel fornybar energi (vannkraft)
- Velfungerende fiskeriforvaltning
- Sterkt juridisk naturvern (naturmangfoldloven, jordvernregler)
- Oljefondet sikrer at petroleumsrikdommen forvaltes for fremtiden
- Panteordning og avfallshåndtering blant verdens beste

### Utfordringer
- Stor olje- og gassproduksjon bidrar til globale klimagassutslipp
- Høyt materielt forbruk per innbygger
- Tap av biologisk mangfold og naturområder til utbygging
- Klimamål som er vanskelige å nå uten store endringer i livsstil og produksjon

### Veien videre
Norge har forpliktet seg til å kutte klimagassutslippene med minst 55 % innen 2030 (sammenlignet med 1990) og bli et lavutslippssamfunn innen 2050. Dette krever omstilling i alle sektorer – transport, industri, jordbruk og energi.`,
    },
  
    {
      id: 'geo-4-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Baerekraftig utvikling** betyr aa dekke dagens behov uten aa oedelegge for fremtidige generasjoner
- FNs baerekraftsmaal gir et felles rammeverk for aa loeysne globale utfordringer
- **Sirkulaerokonomi** handler om aa redusere avfall ved aa gjenbruke og resirkulere
- **Oekosystemtjenester** er de godene naturen gir oss gratis (rensing av vann, pollinering, karbonlagring)
- Norges forbruk per innbygger er blant verdens hoeyeste, noe som utfordrer baerekraften`,
    },
    {
      id: 'geo-4-6-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- FN: fn.no/om-fn/fns-baerekraftsmaal
- Miljodirektoratet: miljodirektoratet.no
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- WWF Living Planet Report: wwf.no`,
    },
  ],
  exercises: [
    {
      id: 'geo-4-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken kommisjon definerte begrepet «bærekraftig utvikling»?',
      options: [
        { id: 'a', text: 'EU-kommisjonen', isCorrect: false },
        { id: 'b', text: 'Brundtland-kommisjonen', isCorrect: true },
        { id: 'c', text: 'FNs sikkerhetsråd', isCorrect: false },
        { id: 'd', text: 'IPCC (FNs klimapanel)', isCorrect: false },
      ],
      solution: 'Brundtland-kommisjonen (Verdenskommisjonen for miljø og utvikling), ledet av Gro Harlem Brundtland, definerte begrepet bærekraftig utvikling i rapporten «Vår felles fremtid» i 1987.',
    },
    {
      id: 'geo-4-6-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva sirkulærøkonomi er, og gi to konkrete eksempler på sirkulærøkonomi i praksis.',
      solution: 'Sirkulærøkonomi er et økonomisk system som minimerer avfall og ressursbruk ved at produkter og materialer holdes i omløp så lenge som mulig. I stedet for den lineære modellen (ta-bruk-kast) designes produkter for lang levetid, reparasjon, gjenbruk og resirkulering. Eksempel 1: Den norske panteordningen for flasker og bokser, der emballasjen samles inn og materialet resirkuleres til nye produkter (returrate over 90 %). Eksempel 2: Gjenvinning av metaller fra elektronisk avfall – verdifulle materialer som gull, kobber og sjeldne jordarter hentes ut fra kasserte mobiltelefoner og datamaskiner og brukes til å lage nye elektronikkprodukter.',
    },
    {
      id: 'geo-4-6-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type økosystemtjeneste er pollinering av matplanter av bier?',
      options: [
        { id: 'a', text: 'Forsyningstjeneste', isCorrect: false },
        { id: 'b', text: 'Reguleringstjeneste', isCorrect: true },
        { id: 'c', text: 'Kulturell tjeneste', isCorrect: false },
        { id: 'd', text: 'Støttetjeneste', isCorrect: false },
      ],
      solution: 'Pollinering er en reguleringstjeneste. Reguleringstjenester er prosesser i naturen som regulerer miljøforholdene. Bier og andre pollinerende insekter regulerer plantenes reproduksjon, noe som er avgjørende for matproduksjonen.',
    },
    {
      id: 'geo-4-6-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Velg to av FNs bærekraftsmål som er knyttet til naturressurser, og forklar hvordan de henger sammen.',
      solution: 'Mål 6 (Rent vann og gode sanitærforhold) og mål 15 (Livet på land) henger tett sammen. Økosystemer på land, som skoger og våtmarker, spiller en avgjørende rolle for vannforsyningen. Skoger beskytter nedbørsfelter og regulerer vannføringen i elver. Våtmarker fungerer som naturlige renseanlegg som filtrerer forurensning fra vannet. Når skoger hugges og våtmarker dreneres (brudd på mål 15), forringes vannkvaliteten og vannforsyningen (brudd på mål 6). Omvendt kan vannforurensning og overforbruk av vann skade økosystemene på land. Å oppnå det ene målet krever derfor arbeid med det andre – de to målene er gjensidig avhengige.',
    },
    {
      id: 'geo-4-6-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er det motsatte av en sirkulærøkonomi?',
      options: [
        { id: 'a', text: 'Grønn økonomi', isCorrect: false },
        { id: 'b', text: 'Lineær økonomi (ta-bruk-kast)', isCorrect: true },
        { id: 'c', text: 'Blandingsøkonomi', isCorrect: false },
        { id: 'd', text: 'Bioøkonomi', isCorrect: false },
      ],
      solution: 'Det motsatte av en sirkulærøkonomi er en lineær økonomi, også kalt «ta-bruk-kast»-modellen. I en lineær økonomi utvinnes ressurser, produseres varer, brukes og deretter kastes – uten at materialene gjenbrukes eller resirkuleres.',
    },
  ],
};

// ============================================================================
// Eksport av alle kapitler i del 4
// ============================================================================

export const GEOGRAFI_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOGRAFI_4_1, CHAPTER_GEOGRAFI_4_2, CHAPTER_GEOGRAFI_4_3,
  CHAPTER_GEOGRAFI_4_4, CHAPTER_GEOGRAFI_4_5, CHAPTER_GEOGRAFI_4_6,
];
