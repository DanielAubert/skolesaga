/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 2 VG3
 *
 * Dekker LK20-kompetansemål for geofag 2 (GEO02-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Jordens historie og geologisk tid
// ============================================================================

export const CHAPTER_GEOFAG_2_1: TextbookChapter = {
  id: 'geofag-2-1',
  courseId: 'geofag-2',
  chapterNumber: '1',
  title: 'Jordens historie og geologisk tid',
  description: 'Den geologiske tidsskalaen, jordens dannelse og utvikling gjennom 4,6 milliarder år.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for hovedtrekkene i jordens utvikling',
    'forklare prinsippene bak relativ og absolutt datering',
    'beskrive de geologiske tidsperiodene og deres kjennetegn',
    'drøfte betydningen av geologisk tid for å forstå jordas prosesser',
  ],
  content: [
    {
      id: 'geo2-1-intro',
      type: 'text',
      content: `# Jordens historie og geologisk tid

Jorden er omtrent 4,6 milliarder år gammel. For å forstå de prosessene som har formet planeten vår, må vi kunne tenke i geologisk tid - tidsskalaer som er vanskelige å forestille seg.

## Hvorfor studere jordens historie?

- Forstå hvordan fjell, landskap og havbunn har utviklet seg
- Forklare fordelingen av naturressurser (olje, mineraler)
- Forstå klimaendringer i fortiden
- Forutsi fremtidige geologiske prosesser
- Forstå livets utvikling på Jorden`,
    },
    {
      id: 'geo2-1-def-geologisk-tid',
      type: 'definition',
      title: 'Geologisk tid',
      content: 'Geologisk tid er tidsrammen for jordens historie, fra dens dannelse for 4,6 milliarder år siden til i dag. Den deles inn i eoner, æraer, perioder og epoker basert på store geologiske og biologiske hendelser.',
    },
    {
      id: 'geo2-1-dannelse',
      type: 'text',
      content: `## Jordens dannelse

For ca. 4,6 milliarder år siden ble solsystemet dannet fra en roterende sky av gass og støv (solnebula).

### Akkresjonen
1. Støvpartikler kolliderte og klumpet seg sammen
2. Større kropper (planetesimaler) tiltrakk mer materiale
3. Proto-jorden vokste gjennom kollisjoner
4. Differensiering: Jern sank til kjernen, lettere bergarter fløt opp

### Månen dannes
For ca. 4,5 milliarder år siden kolliderte et Mars-stort objekt (Theia) med proto-jorden. Utslynget materiale dannet Månen.

### Hadeum (4,6-4,0 mrd år)
- Intens meteorittbombardering
- Ingen bergarter bevart fra denne tiden
- Atmosfæren besto av vulkanske gasser`,
    },
    {
      id: 'geo2-1-def-datering',
      type: 'definition',
      title: 'Relativ og absolutt datering',
      content: '**Relativ datering** bestemmer hvilke bergarter som er eldst eller yngst uten å fastslå eksakt alder. **Absolutt datering** (radiometrisk) gir alderen i år ved å måle nedbrytningen av radioaktive isotoper.',
    },
    {
      id: 'geo2-1-datering',
      type: 'text',
      content: `## Dateringsprinsipper

### Relativ datering
- **Superposisjon**: Yngre lag ligger over eldre lag
- **Original horisontalitet**: Sedimenter avsettes horisontalt
- **Gjennomskjæring**: En struktur som skjærer gjennom en annen, er yngre
- **Inklusjon**: Fragmenter i en bergart er eldre enn bergarten selv

### Absolutt datering (radiometrisk)
Radioaktive isotoper brytes ned med kjent hastighet (halveringstid):

- **Karbon-14** (halveringstid 5730 år): Organisk materiale opp til 50 000 år
- **Kalium-40 → Argon-40** (1,25 mrd år): Vulkanske bergarter
- **Uran-238 → Bly-206** (4,5 mrd år): Svært gamle bergarter
- **Rubidium-87 → Strontium-87** (48,8 mrd år): Gamle granitter`,
    },
    {
      id: 'geo2-1-example-1',
      type: 'example',
      title: 'Eksempel: Radiometrisk datering',
      problem: 'En granitt inneholder en radioaktiv isotop der bare 25% av den opprinnelige mengden er igjen. Halveringstiden er 1 milliard år. Hvor gammel er granitten?',
      solution: `**Løsning:**

Etter 1 halveringstid: 50% igjen
Etter 2 halveringstider: 25% igjen

Siden 25% er igjen, har det gått 2 halveringstider.

Alder = 2 × 1 milliard år = **2 milliarder år**`,
    },
    {
      id: 'geo2-1-tidsskala',
      type: 'text',
      content: `## Den geologiske tidsskalaen

### Eoner (største inndelingen)
1. **Hadeum** (4,6-4,0 mrd år): Jordens tidligste fase
2. **Arkeikum** (4,0-2,5 mrd år): Første liv, cyanobakterier
3. **Proterozoikum** (2,5-0,54 mrd år): Oksygenøkning, første eukaryoter
4. **Fanerozoikum** (541 mill år - nå): Synlig liv

### Æraer i Fanerozoikum
- **Paleozoikum** (541-252 mill år): Kambrium-eksplosjonen, fisk, amfibier, krypdyr
- **Mesozoikum** (252-66 mill år): Dinosaurenes tidsalder
- **Kenozoikum** (66 mill år - nå): Pattedyrenes tidsalder

### Viktige perioder
- **Kambrium**: Eksplosiv utvikling av dyreliv
- **Karbon**: Store skoger → kull
- **Perm-Trias**: Største masseutryddelsen
- **Jura/Kritt**: Dinosaurer dominerer
- **Kvartær**: Istider og menneskets utvikling`,
    },
    {
      id: 'geo2-1-note-1',
      type: 'note',
      title: 'Tidsperspektiv',
      content: 'Hvis jordens historie ble komprimert til ett år: Livet oppstår i mars, dinosaurene dør ut 26. desember, og mennesket dukker opp kl. 23:59 på nyttårsaften.',
    },
  ],
  exercises: [
    {
      id: 'geo2-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor gammel er Jorden?',
      options: [
        { id: 'a', text: 'Ca. 4,6 milliarder år', isCorrect: true },
        { id: 'b', text: 'Ca. 4,6 millioner år', isCorrect: false },
        { id: 'c', text: 'Ca. 6000 år', isCorrect: false },
        { id: 'd', text: 'Ca. 13,8 milliarder år', isCorrect: false },
      ],
      solution: 'Jorden er ca. 4,6 milliarder år gammel, dannet fra solnebula samtidig med resten av solsystemet. (13,8 milliarder år er universets alder.)',
    },
    {
      id: 'geo2-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom relativ og absolutt datering, og gi et eksempel på hver metode.',
      solution: 'Relativ datering bestemmer rekkefølgen av hendelser (f.eks. superposisjon - yngre lag over eldre). Absolutt datering gir alder i år (f.eks. C-14-datering av organisk materiale eller U-Pb-datering av zirkoner).',
    },
    {
      id: 'geo2-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'En vulkansk bergart inneholder 12,5% av den opprinnelige mengden kalium-40. Halveringstiden er 1,25 milliarder år. Beregn bergartens alder.',
      solution: '12,5% = 1/8 av opprinnelig mengde. 1/8 = (1/2)³, altså 3 halveringstider. Alder = 3 × 1,25 mrd år = 3,75 milliarder år.',
      hints: ['12,5% = 1/8', 'Hvor mange ganger må du halvere for å få 1/8?'],
    },
    {
      id: 'geo2-1-ex4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'I hvilken geologisk æra levde dinosaurene?',
      options: [
        { id: 'a', text: 'Mesozoikum', isCorrect: true },
        { id: 'b', text: 'Paleozoikum', isCorrect: false },
        { id: 'c', text: 'Kenozoikum', isCorrect: false },
        { id: 'd', text: 'Proterozoikum', isCorrect: false },
      ],
      solution: 'Dinosaurene dominerte i Mesozoikum (252-66 millioner år siden), ofte kalt "reptilenes tidsalder".',
    },
    {
      id: 'geo2-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan studiet av jordens historie kan bidra til å forstå fremtidige klimaendringer.',
      solution: 'Geologiske arkiver (iskjerner, sedimenter, fossiler) viser hvordan klimaet har variert naturlig. Dette gir oss: 1) Grunnlinje for naturlige variasjoner, 2) Forståelse av tilbakekoblingsmekanismer, 3) Eksempler på raske klimaendringer og deres konsekvenser, 4) Data for å teste klimamodeller. Fortidens klima viser at CO₂-nivåer og temperatur henger sammen.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Fossiler og paleontologi
// ============================================================================

export const CHAPTER_GEOFAG_2_2: TextbookChapter = {
  id: 'geofag-2-2',
  courseId: 'geofag-2',
  chapterNumber: '2',
  title: 'Fossiler og paleontologi',
  description: 'Fossilisering, fossiler som klimaarkiv og livets utvikling gjennom geologisk tid.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forklare hvordan fossiler dannes og bevares',
    'bruke fossiler til å datere og korrelere bergartslag',
    'beskrive hovedtrekkene i livets utvikling',
    'drøfte masseutryddelser og deres årsaker',
  ],
  content: [
    {
      id: 'geo2-2-intro',
      type: 'text',
      content: `# Fossiler og paleontologi

Fossiler er rester eller spor etter fortidens liv bevart i bergarter. De er vårt viktigste vindu til livets historie på Jorden.

## Hva kan fossiler fortelle oss?

- **Biologisk historie**: Hvordan livet har utviklet seg
- **Paleoklima**: Fortidens klima og miljø
- **Paleogeografi**: Hvordan kontinentene har flyttet seg
- **Datering**: Alder på bergartslag (biostratigrafi)
- **Evolusjon**: Bevis for evolusjonsteori`,
    },
    {
      id: 'geo2-2-def-fossil',
      type: 'definition',
      title: 'Fossil',
      content: 'Et fossil er rester eller spor etter organismer som levde for mer enn 10 000 år siden, bevart i sedimentære bergarter eller andre geologiske materialer. Fossiler kan være kroppsfossiler (skall, bein) eller sporfossiler (fotspor, graveganger).',
    },
    {
      id: 'geo2-2-fossilisering',
      type: 'text',
      content: `## Fossiliseringsprosessen

For at en organisme skal bli fossil, må flere betingelser oppfylles:

### Betingelser for god bevaring
1. **Rask begravelse**: Beskytter mot forråtnelse og åtseletere
2. **Harde deler**: Skall, bein, tenner bevares best
3. **Oksygenfritt miljø**: Hemmer nedbrytning
4. **Fravær av rovdyr**: Unngår at kroppen spises

### Typer fossilisering
- **Permineralisering**: Mineraler fyller porer i bein/tre
- **Erstatning**: Originalt materiale erstattes av mineraler
- **Karbonisering**: Organisk materiale reduseres til karbon
- **Avtrykk og avforming**: Organismer etterlater avtrykk
- **Bevaring i is/rav**: Fullstendig bevaring`,
    },
    {
      id: 'geo2-2-example-1',
      type: 'example',
      title: 'Eksempel: Trilobitter som ledefossiler',
      problem: 'Hvorfor er trilobitter gode ledefossiler for paleozoikum?',
      solution: `**Løsning:**

Trilobitter er utmerkede ledefossiler fordi:

1. **Stor utbredelse**: Levde i havet over hele verden
2. **Rask evolusjon**: Mange arter som endret seg over tid
3. **Lett gjenkjennelige**: Karakteristisk tredelt kropp
4. **Begrenset tidsrom**: Kun i paleozoikum (541-252 mill år)
5. **Hyppig forekommende**: Milliarder av fossiler funnet

Trilobitter kan brukes til å korrelere bergarter på ulike kontinenter og bestemme relativ alder.`,
    },
    {
      id: 'geo2-2-def-ledefossil',
      type: 'definition',
      title: 'Ledefossil',
      content: 'Et ledefossil (indeksfossil) er en fossiltype som er karakteristisk for en bestemt geologisk tidsperiode. Gode ledefossiler har stor geografisk utbredelse, kort eksistenstid, er lett gjenkjennelige og forekommer hyppig.',
    },
    {
      id: 'geo2-2-livets-utvikling',
      type: 'text',
      content: `## Livets utvikling

### Prekambrium (4,6-0,54 mrd år)
- **3,8 mrd år**: Første spor av liv (kjemofossiler)
- **3,5 mrd år**: Stromatolitter (cyanobakteriekolonier)
- **2,4 mrd år**: Den store oksygenhendelsen
- **2,0 mrd år**: Første eukaryoter
- **600 mill år**: Ediacara-fauna (første flercellede dyr)

### Paleozoikum (541-252 mill år)
- **Kambrium**: Kambrium-eksplosjonen, trilobitter
- **Ordovicium-Silur**: Første landdyr, fisk dominerer
- **Devon**: Fiskenes tidsalder, første amfibier
- **Karbon**: Store skoger, første krypdyr
- **Perm**: Krypdyr dominerer, masseutryddelse

### Mesozoikum (252-66 mill år)
- Dinosaurer, pterosaurer, marine reptiler
- Første pattedyr og fugler
- Blomsterplanter utvikles

### Kenozoikum (66 mill år - nå)
- Pattedyrenes tidsalder
- Menneskets utvikling (siste 7 mill år)`,
    },
    {
      id: 'geo2-2-masseutryddelser',
      type: 'text',
      content: `## De fem store masseutryddelsene

### 1. Ordovicium-Silur (445 mill år)
- 85% av artene døde ut
- Årsak: Istid, havnivåfall

### 2. Sen Devon (375-360 mill år)
- 75% av artene
- Årsak: Oksygensvikt i havet

### 3. Perm-Trias (252 mill år) - Den store døden
- 96% av marine arter, 70% av landdyr
- Årsak: Sibirske vulkanutbrudd, klimaendringer

### 4. Trias-Jura (201 mill år)
- 80% av artene
- Årsak: Vulkanisme, klimaendringer

### 5. Kritt-Paleogen (66 mill år)
- Dinosaurene dør ut
- Årsak: Asteroidenedslag (Chicxulub) + vulkanisme`,
    },
    {
      id: 'geo2-2-warning-1',
      type: 'warning',
      title: 'Den sjette masseutryddelsen',
      content: 'Mange forskere mener vi nå er inne i en sjette masseutryddelse, forårsaket av menneskelig aktivitet. Utryddelseshastigheten er 100-1000 ganger høyere enn naturlig bakgrunnsnivå.',
    },
  ],
  exercises: [
    {
      id: 'geo2-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type fossil er et fotavtrykk fra en dinosaur?',
      options: [
        { id: 'a', text: 'Sporfossil', isCorrect: true },
        { id: 'b', text: 'Kroppsfossil', isCorrect: false },
        { id: 'c', text: 'Kjemofossil', isCorrect: false },
        { id: 'd', text: 'Levende fossil', isCorrect: false },
      ],
      solution: 'Fotavtrykk er sporfossiler - spor etter aktiviteten til en organisme, ikke selve kroppen.',
    },
    {
      id: 'geo2-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvilke egenskaper som gjør et fossil til et godt ledefossil.',
      solution: 'Et godt ledefossil har: 1) Stor geografisk utbredelse (global), 2) Kort eksistenstid (høy oppløsning), 3) Lett gjenkjennelig (distinkt morfologi), 4) Hyppig forekommende (lett å finne), 5) Uavhengig av spesifikke miljøer.',
    },
    {
      id: 'geo2-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre ulike måter fossiler kan dannes på.',
      solution: '1) Permineralisering: Mineraler fyller porene i bein/tre og forsterker strukturen. 2) Erstatning: Originalt materiale erstattes molekyl for molekyl av mineraler. 3) Karbonisering: Organisk materiale komprimeres og etterlater et karbonfilm. Andre: bevaring i rav, is, avtrykk/avforming.',
    },
    {
      id: 'geo2-2-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken masseutryddelse var den største i jordens historie?',
      options: [
        { id: 'a', text: 'Perm-Trias (252 mill år siden)', isCorrect: true },
        { id: 'b', text: 'Kritt-Paleogen (66 mill år siden)', isCorrect: false },
        { id: 'c', text: 'Ordovicium-Silur (445 mill år siden)', isCorrect: false },
        { id: 'd', text: 'Trias-Jura (201 mill år siden)', isCorrect: false },
      ],
      solution: 'Perm-Trias-utryddelsen tok livet av 96% av marine arter og 70% av landdyr - den største masseutryddelsen noensinne.',
    },
    {
      id: 'geo2-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan fossiler kan brukes som bevis for kontinentaldrift.',
      solution: 'Identiske fossiler finnes på kontinenter som nå er adskilt av hav: Mesosaurus (ferskvannreptil) i Sør-Amerika og Afrika, Glossopteris (plante) på alle sørlige kontinenter, Lystrosaurus (krypdyr) i Afrika, India, Antarktis. Disse organismene kunne ikke krysse hav, så kontinentene må ha hengt sammen (Gondwana).',
    },
  ],
};

// ============================================================================
// Kapittel 3: Norges geologi
// ============================================================================

export const CHAPTER_GEOFAG_2_3: TextbookChapter = {
  id: 'geofag-2-3',
  courseId: 'geofag-2',
  chapterNumber: '3',
  title: 'Norges geologi',
  description: 'Den kaledonske fjellkjeden, grunnfjellet, istidene og landskapsdannelse i Norge.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for hovedtrekkene i Norges geologiske historie',
    'forklare dannelsen av den kaledonske fjellkjeden',
    'beskrive istidenes påvirkning på norsk landskap',
    'knytte bergarter og landskap til geologiske prosesser',
  ],
  content: [
    {
      id: 'geo2-3-intro',
      type: 'text',
      content: `# Norges geologi

Norge har en variert og spennende geologi som strekker seg over nesten 3 milliarder år. Fra de eldste grunnfjellsbergartene til istidenes dramatiske landskapsforming.

## Oversikt over Norges geologiske provinser

1. **Grunnfjellet** (prekambrisk): Sør-Norge, Lofoten
2. **Kaledonidene**: Fjellkjeden langs kysten og innlandet
3. **Kambrosilurområdene**: Oslo-feltet, Mjøsområdet
4. **Permavsetninger**: Osloriften
5. **Kvartære avsetninger**: Morener, leire, strandvoller`,
    },
    {
      id: 'geo2-3-def-grunnfjell',
      type: 'definition',
      title: 'Grunnfjellet',
      content: 'Grunnfjellet er de eldste bergartene i Norge, dannet i prekambrium (før 541 mill år siden). Det består hovedsakelig av gneiser og granitter, og utgjør det stabile fundamentet under yngre bergarter.',
    },
    {
      id: 'geo2-3-grunnfjell',
      type: 'text',
      content: `## Grunnfjellet (2,9-1,0 mrd år)

### Dannelse
Grunnfjellet ble dannet gjennom flere fjellkjededannelser i prekambrium:

- **Svekofennisk orogene** (1,9-1,8 mrd år)
- **Gothisk orogene** (1,7-1,5 mrd år)
- **Svekonorwegisk orogene** (1,1-0,9 mrd år)

### Bergarter
- **Gneiser**: Omdannede bergarter med båndstruktur
- **Granitter**: Størkningsbergarter
- **Amfibolitt**: Mørke, metamorfe bergarter

### Forekomst
- Sør-Norge (østlige deler)
- Lofoten og Vesterålen
- Troms og Finnmark`,
    },
    {
      id: 'geo2-3-kaledonidene',
      type: 'text',
      content: `## Den kaledonske fjellkjede (500-400 mill år)

### Dannelse
Den kaledonske fjellkjeden ble dannet da kontinentene Baltika og Laurentia kolliderte:

1. **Kollisjon**: Iapetushavet lukkes
2. **Subduksjon**: Havbunn presses ned
3. **Orogense**: Fjellkjededannelse
4. **Overskyvning**: Bergarter skyves over grunnfjellet

### Skyvedekker
Store bergartspakker ble skjøvet hundrevis av kilometer østover:
- **Undre dekker**: Lokale bergarter
- **Midtre dekker**: Kontinentale bergarter
- **Øvre dekker**: Havbunnsbergarter (ofiolitter)

### Dagens fjell
De norske fjellene er rester av denne fjellkjeden, nedslitt fra Himalaya-høyde til dagens nivå gjennom 400 millioner år.`,
    },
    {
      id: 'geo2-3-example-1',
      type: 'example',
      title: 'Eksempel: Jotunheimen',
      problem: 'Forklar hvorfor Galdhøpiggen og Jotunheimen består av harde, motstandsdyktige bergarter.',
      solution: `**Løsning:**

Jotunheimen består hovedsakelig av **gabbro og pyroksengneiser** - bergarter fra den kaledonske fjellkjeden.

Disse bergartene er:
1. **Harde**: Motstandsdyktige mot erosjon
2. **Massiv struktur**: Få sprekker og svakheter
3. **Mineralsammensetning**: Pyroksener og feltspat er harde

Resultatet er at disse områdene står igjen som høye fjell mens mykere bergarter rundt er erodert bort. Galdhøpiggen (2469 m) er Norges høyeste fjell.`,
    },
    {
      id: 'geo2-3-oslo-feltet',
      type: 'text',
      content: `## Oslo-feltet (kambrosilur og perm)

### Kambrosilur (541-419 mill år)
- Norge lå under havet
- Avsetning av kalkstein, skifer og sandstein
- Rike fossilforekomster (trilobitter, brachiopoder)
- Finnes i Oslo-området og ved Mjøsa

### Permavsetninger (300-250 mill år)
Osloriften - en kontinental riftdal med:
- **Vulkanisme**: Lavastrømmer, vulkanske bergarter
- **Intrusjoner**: Granitter og syenitter
- **Dagens landskap**: Nordmarka, Kolsås, Bygdøy`,
    },
    {
      id: 'geo2-3-istidene',
      type: 'text',
      content: `## Istidene (2,6 mill år - 10 000 år)

Kvartærperioden har vært preget av gjentatte istider som har formet det norske landskapet.

### Isens arbeid
- **Erosjon**: Isen gravde ut daler og fjorder
- **Transport**: Løsmasser fraktet med isen
- **Avsetning**: Morener, esker, drumlin

### Landskapsformer
- **Fjorder**: U-daler oversvømmet av hav
- **Botner**: Grytformede fordypninger i fjellet
- **Morener**: Avsetninger ved isens ytterkant
- **Strandvoller**: Hevede strandlinjer (landhevning)

### Siste istid (Weichsel)
- Kulminasjon for 20 000 år siden
- Is opp til 3 km tykk over Skandinavia
- Trakk seg tilbake for ca. 10 000 år siden`,
    },
    {
      id: 'geo2-3-def-fjord',
      type: 'definition',
      title: 'Fjord',
      content: 'En fjord er en dyp, bratt havarm gravd ut av isbreer. Fjorder har typisk en U-formet tverrprofil og er ofte dypere inne i fjorden enn ved munningen (terskel). De norske fjordene hører til verdens lengste og dypeste.',
    },
  ],
  exercises: [
    {
      id: 'geo2-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva dannet den kaledonske fjellkjeden?',
      options: [
        { id: 'a', text: 'Kollisjon mellom Baltika og Laurentia', isCorrect: true },
        { id: 'b', text: 'Vulkansk aktivitet', isCorrect: false },
        { id: 'c', text: 'Istidenes erosjon', isCorrect: false },
        { id: 'd', text: 'Meteorittnedslag', isCorrect: false },
      ],
      solution: 'Den kaledonske fjellkjeden ble dannet for 500-400 millioner år siden da kontinentene Baltika (Skandinavia) og Laurentia (Nord-Amerika) kolliderte.',
    },
    {
      id: 'geo2-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan de norske fjordene ble dannet.',
      solution: 'Fjordene ble dannet av isbreer under istidene. Isbreene fulgte eksisterende elvedaler og gravde dem dypere med U-formet profil. Da isen smeltet, ble dalene oversvømmet av hav. Terskler ved fjordmunningen skyldes at isen var tynnere (mindre erosjon) der den nådde havet.',
    },
    {
      id: 'geo2-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er et skyvedekke, og hvordan ble de dannet i Norge?',
      solution: 'Et skyvedekke er en bergartspakke som er skjøvet horisontalt over store avstander. I Norge ble skyvedekkene dannet under den kaledonske fjellkjededannelsen da bergarter ble presset østover over grunnfjellet. Dekkene kan klassifiseres som undre, midtre og øvre basert på opprinnelse.',
    },
    {
      id: 'geo2-3-ex4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke bergarter dominerer i grunnfjellet?',
      options: [
        { id: 'a', text: 'Gneiser og granitter', isCorrect: true },
        { id: 'b', text: 'Kalkstein og skifer', isCorrect: false },
        { id: 'c', text: 'Sandstein og konglomerat', isCorrect: false },
        { id: 'd', text: 'Basalt og gabbro', isCorrect: false },
      ],
      solution: 'Grunnfjellet består hovedsakelig av gneiser og granitter - krystallinske bergarter dannet dypt i jordskorpen for 1-3 milliarder år siden.',
    },
    {
      id: 'geo2-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan geologien har påvirket bosettingsmønsteret i Norge.',
      solution: 'Geologien har påvirket bosetting gjennom: 1) Løsmasser fra istiden ga fruktbar jord i dalene, 2) Fjorder ga tilgang til havet og fiske, 3) Vannkraft fra bratte elver, 4) Mineralressurser (jern, kobber), 5) Bergarter påvirket byggematerialer. De fleste byer ligger i områder med gode havner og løsmasseavsetninger.',
    },
  ],
};

// ============================================================================
// Kapittel 4: Kryosfæren - is og permafrost
// ============================================================================

export const CHAPTER_GEOFAG_2_4: TextbookChapter = {
  id: 'geofag-2-4',
  courseId: 'geofag-2',
  chapterNumber: '4',
  title: 'Kryosfæren - is og permafrost',
  description: 'Isbreer, innlandsis, permafrost og deres rolle i klimasystemet.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare dannelse og dynamikk i isbreer',
    'beskrive permafrost og dens utbredelse',
    'drøfte kryosfærens rolle i klimasystemet',
    'vurdere konsekvenser av smeltende is og tining av permafrost',
  ],
  content: [
    {
      id: 'geo2-4-intro',
      type: 'text',
      content: `# Kryosfæren - is og permafrost

Kryosfæren omfatter alle frosne deler av jordsystemet: isbreer, innlandsis, havis, snø og permafrost. Den spiller en avgjørende rolle i klimasystemet.

## Komponenter i kryosfæren

- **Innlandsis**: Grønland og Antarktis
- **Isbreer**: Fjellisbreer over hele verden
- **Havis**: Arktis og rundt Antarktis
- **Sesongsnø**: Vintersnødekke
- **Permafrost**: Permanent frossen grunn`,
    },
    {
      id: 'geo2-4-def-isbre',
      type: 'definition',
      title: 'Isbre',
      content: 'En isbre er en masse av is på land som beveger seg under egen tyngde. Isbreer dannes når snø akkumuleres år etter år og komprimeres til is. De flyter nedover fra akkumulasjonsområdet til ablasjonsområdet der de smelter.',
    },
    {
      id: 'geo2-4-isbreer',
      type: 'text',
      content: `## Isbreer og isbretyper

### Dannelse
1. Snø akkumuleres år etter år
2. Komprimering: snø → firn → breis
3. Trykket øker med dybden
4. Isen begynner å flyte

### Massebalanse
- **Akkumulasjon**: Snøfall i øvre del
- **Ablasjon**: Smelting og kalving i nedre del
- **Likevektslinje**: Grensen mellom akkumulasjon og ablasjon

### Typer isbreer
- **Dalbreer**: Flyter nedover daler
- **Platåbreer**: Dekker fjellplatåer
- **Botnbreer**: Små breer i botner
- **Utløpsbreer**: Strømmer ut fra innlandsis
- **Innlandsis**: Store iskapper (Grønland, Antarktis)`,
    },
    {
      id: 'geo2-4-bevegelse',
      type: 'text',
      content: `## Isbrebevegelse

### Bevegelsesmekanismer
1. **Plastisk deformasjon**: Iskrystaller glir over hverandre
2. **Basalglidning**: Isen glir på smeltevannsfilm ved bunnen
3. **Intern deformasjon**: Endring av iskrystallenes orientering

### Hastighet
- Typisk: 10-200 meter per år
- Hurtigflytende breer: Opp til flere kilometer per år
- Isbresurge: Plutselig akselerasjon

### Faktorer som påvirker hastighet
- Istykkelse (mer trykk = raskere)
- Helning
- Temperatur ved bunnen
- Tilgang på smeltevann`,
    },
    {
      id: 'geo2-4-permafrost',
      type: 'text',
      content: `## Permafrost

### Definisjon og utbredelse
Permafrost er grunn som holder seg under 0°C i minst to sammenhengende år.

**Utbredelse:**
- Ca. 25% av landarealet på den nordlige halvkule
- Dybde fra noen meter til over 1500 meter (Sibir)
- I Norge: Høyfjellet og Svalbard

### Struktur
- **Aktivt lag**: Øverste lag som tiner om sommeren
- **Permafrostlag**: Permanent frossen grunn
- **Talik**: Ufrosne områder i permafrost

### Innhold
- Jordpartikler og berggrunn
- Is (opptil 80% av volumet)
- Organisk materiale
- Metan og CO₂`,
    },
    {
      id: 'geo2-4-def-permafrost',
      type: 'definition',
      title: 'Permafrost',
      content: 'Permafrost er grunn (jord, sedimenter eller berg) som har temperatur under 0°C i minst to sammenhengende år. Den dekker ca. 25% av landarealet på den nordlige halvkule og inneholder store mengder organisk karbon.',
    },
    {
      id: 'geo2-4-klima',
      type: 'text',
      content: `## Kryosfærens rolle i klimasystemet

### Albedo-effekten
- Is og snø reflekterer 80-90% av sollyset
- Mørke overflater absorberer mer (albedo 10-20%)
- **Positiv tilbakekobling**: Mindre is → lavere albedo → mer oppvarming → enda mindre is

### Havnivå
- Grønland: 7 meter havnivåstigning hvis alt smelter
- Antarktis: 58 meter havnivåstigning
- Termisk ekspansjon av havet bidrar også

### Permafrost og karbon
- Permafrost lagrer ca. 1700 milliarder tonn karbon
- Ved tining frigjøres CO₂ og metan
- Metan er 80 ganger sterkere klimagass enn CO₂ (20-årsperspektiv)
- **Tipping point**: Kan utløse selvforsterkende oppvarming`,
    },
    {
      id: 'geo2-4-warning-1',
      type: 'warning',
      title: 'Smeltende permafrost',
      content: 'Permafrost tiner nå raskere enn forventet. Dette frigjør klimagasser, destabiliserer infrastruktur, og kan føre til kollaps av bygninger og veier i arktiske områder. I Norge er dette særlig relevant for Svalbard.',
    },
  ],
  exercises: [
    {
      id: 'geo2-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er massebalansen til en isbre?',
      options: [
        { id: 'a', text: 'Forskjellen mellom akkumulasjon og ablasjon', isCorrect: true },
        { id: 'b', text: 'Isbreens totale masse', isCorrect: false },
        { id: 'c', text: 'Hastigheten isen beveger seg', isCorrect: false },
        { id: 'd', text: 'Tykkelsen på isen', isCorrect: false },
      ],
      solution: 'Massebalansen er forskjellen mellom akkumulasjon (snøfall) og ablasjon (smelting/kalving). Positiv massebalanse betyr at breen vokser, negativ at den minker.',
    },
    {
      id: 'geo2-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar albedo-effekten og hvordan den skaper en positiv tilbakekobling i klimasystemet.',
      solution: 'Albedo er andelen sollys som reflekteres. Is og snø har høy albedo (80-90%), mens hav og land har lav (10-20%). Når is smelter, erstattes den av mørkere overflater som absorberer mer varme, noe som fører til mer smelting. Dette er en positiv tilbakekobling som forsterker oppvarmingen.',
    },
    {
      id: 'geo2-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv strukturen i permafrost og forklar hva det aktive laget er.',
      solution: 'Permafrost har to hovedlag: 1) Aktivt lag - øverste lag som tiner om sommeren og fryser om vinteren (cm til flere meter). 2) Permafrostlag - permanent frossen grunn under det aktive laget. Talik er ufrosne soner, f.eks. under innsjøer.',
    },
    {
      id: 'geo2-4-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mye vil havnivået stige hvis all isen på Grønland smelter?',
      options: [
        { id: 'a', text: 'Ca. 7 meter', isCorrect: true },
        { id: 'b', text: 'Ca. 1 meter', isCorrect: false },
        { id: 'c', text: 'Ca. 20 meter', isCorrect: false },
        { id: 'd', text: 'Ca. 58 meter', isCorrect: false },
      ],
      solution: 'Grønlands innlandsis inneholder nok is til å heve havnivået med ca. 7 meter. Antarktis inneholder tilsvarende ca. 58 meter.',
    },
    {
      id: 'geo2-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft konsekvensene av tining av permafrost for klimaet og samfunnet.',
      solution: 'Klimakonsekvenser: Frigjøring av CO₂ og metan fra organisk materiale, positiv tilbakekobling som forsterker oppvarming, potensielt irreversibelt vippepunkt. Samfunnskonsekvenser: Destabilisering av infrastruktur (bygninger, veier, rørledninger), erosjon langs kyster, endrede økosystemer, påvirkning av urfolk og deres levemåte.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Hydrosfæren - ferskvann og grunnvann
// ============================================================================

export const CHAPTER_GEOFAG_2_5: TextbookChapter = {
  id: 'geofag-2-5',
  courseId: 'geofag-2',
  chapterNumber: '5',
  title: 'Hydrosfæren - ferskvann og grunnvann',
  description: 'Vannets kretsløp, grunnvann, elver og innsjøer som geologiske faktorer.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for vannets kretsløp',
    'forklare grunnvannsdannelse og akviferer',
    'beskrive elvenes geologiske arbeid',
    'drøfte vannressurser og bærekraftig vannforvaltning',
  ],
  content: [
    {
      id: 'geo2-5-intro',
      type: 'text',
      content: `# Hydrosfæren - ferskvann og grunnvann

Vann er jordens mest verdifulle ressurs og en mektig geologisk kraft. Hydrosfæren omfatter alt vann på Jorden - i hav, innsjøer, elver, grunnvann, atmosfære og organismer.

## Vannfordeling på Jorden

- **Saltvann (hav)**: 97,5%
- **Ferskvann**: 2,5%
  - Isbreer og snø: 69%
  - Grunnvann: 30%
  - Overflatevatn og atmosfære: 1%`,
    },
    {
      id: 'geo2-5-def-kretslop',
      type: 'definition',
      title: 'Vannets kretsløp',
      content: 'Vannets kretsløp (hydrologiske syklus) er den kontinuerlige sirkulasjonen av vann mellom hav, atmosfære og land. Det drives av solenergi og tyngdekraft gjennom prosesser som fordampning, nedbør, avrenning og infiltrasjon.',
    },
    {
      id: 'geo2-5-kretslop',
      type: 'text',
      content: `## Vannets kretsløp

### Hovedprosesser
1. **Fordampning**: Vann fra hav og land blir vanndamp
2. **Transpirasjon**: Planter avgir vanndamp
3. **Kondensasjon**: Vanndamp blir til skyer
4. **Nedbør**: Regn, snø, hagl
5. **Avrenning**: Vann strømmer over land
6. **Infiltrasjon**: Vann trenger ned i bakken
7. **Grunnvannsstrøm**: Vann beveger seg i undergrunnen

### Oppholdstid
- Atmosfære: 9 dager
- Elver: 2 uker
- Innsjøer: 10 år
- Grunnvann: 100-10 000 år
- Hav: 3000 år
- Isbreer: 10 000-100 000 år`,
    },
    {
      id: 'geo2-5-grunnvann',
      type: 'text',
      content: `## Grunnvann

### Dannelse
Nedbør infiltrerer gjennom jord og sedimenter til det møter en vanntett barriere. Vannet fyller porerom og sprekker i berggrunn og løsmasser.

### Soner
- **Umettet sone**: Porerom fylt med luft og vann
- **Grunnvannsspeil**: Øvre grense for mettet sone
- **Mettet sone**: Alle porerom fylt med vann

### Akviferer
En akvifer er en grunnvannsførende geologisk formasjon:
- **Porøsitetsakviferer**: Sand, grus, sandstein
- **Sprekkakvierer**: Oppsprukket fjell
- **Karstakvierer**: Oppløst kalkstein

### Artesisk vann
Når grunnvann er under trykk mellom to vanntette lag, kan det strømme opp av seg selv (artesisk brønn).`,
    },
    {
      id: 'geo2-5-def-akvifer',
      type: 'definition',
      title: 'Akvifer',
      content: 'En akvifer er en grunnvannsførende geologisk formasjon som kan lagre og overføre betydelige mengder vann. Akviferens evne til å lede vann bestemmes av porøsitet (plass til vann) og permeabilitet (vanngjennomstrømning).',
    },
    {
      id: 'geo2-5-elver',
      type: 'text',
      content: `## Elver som geologisk faktor

### Erosjon
Elver eroderer ved:
- **Hydraulisk erosjon**: Vannets kraft løsner partikler
- **Abrasjon**: Sedimenter sliper underlaget
- **Oppløsning**: Kjemisk forvitring av berggrunn

### Transport
- **Suspensjon**: Finpartikler holdes svevende
- **Saltasjon**: Partikler spretter langs bunnen
- **Bunntransport**: Grus og stein ruller/glir

### Avsetning
Sedimenter avsettes når vannhastigheten synker:
- Elvesletter
- Deltaer
- Meanderløp
- Vifter ved fjellføtter`,
    },
    {
      id: 'geo2-5-example-1',
      type: 'example',
      title: 'Eksempel: Hjulströms diagram',
      problem: 'Forklar hvorfor det kreves høyere vannhastighet for å erodere leire enn sand, selv om leirpartikler er mindre.',
      solution: `**Løsning:**

Hjulströms diagram viser forholdet mellom kornstørrelse og erosjon/transport/avsetning.

For leire kreves høy hastighet fordi:
1. **Kohesjon**: Leirpartikler binder seg sammen
2. **Elektrokjemiske krefter**: Tiltrekning mellom partikler
3. **Glatt overflate**: Liten friksjon med vannet
4. **Tett pakking**: Vanskelig å løsne enkeltpartikler

Sand er lettere å erodere fordi kornene er løse og ikke binder seg sammen.

Når leire først er erodert, holdes den lett i suspensjon og transporteres langt.`,
    },
    {
      id: 'geo2-5-vannressurser',
      type: 'text',
      content: `## Vannressurser og forvaltning

### Vannbruk
- **Jordbruk**: 70% av globalt forbruk
- **Industri**: 20%
- **Husholdninger**: 10%

### Utfordringer
- Overforbruk av grunnvann
- Forurensning av vannkilder
- Ujevn geografisk fordeling
- Klimaendringer påvirker nedbørsmønstre

### Norge
- Rike vannressurser
- 96% av strømproduksjonen fra vannkraft
- God grunnvannskvalitet
- Utfordringer med forurensning lokalt`,
    },
  ],
  exercises: [
    {
      id: 'geo2-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mye av jordens vann er ferskvann?',
      options: [
        { id: 'a', text: 'Ca. 2,5%', isCorrect: true },
        { id: 'b', text: 'Ca. 10%', isCorrect: false },
        { id: 'c', text: 'Ca. 25%', isCorrect: false },
        { id: 'd', text: 'Ca. 50%', isCorrect: false },
      ],
      solution: 'Kun ca. 2,5% av jordens vann er ferskvann. Av dette er mesteparten bundet i isbreer (69%) og grunnvann (30%).',
    },
    {
      id: 'geo2-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom porøsitet og permeabilitet i en akvifer.',
      solution: 'Porøsitet er andelen av bergarten som er hulrom (porer), altså hvor mye vann som kan lagres. Permeabilitet er hvor lett vann kan strømme gjennom materialet (sammenkoblede porer). Leire har høy porøsitet men lav permeabilitet, mens grus har både høy porøsitet og permeabilitet.',
    },
    {
      id: 'geo2-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre hovedmåtene elver transporterer sedimenter på.',
      solution: '1) Suspensjon: Fine partikler (leire, silt) holdes svevende i vannmassen av turbulens. 2) Saltasjon: Sandkorn spretter langs bunnen, løftes opp og faller ned. 3) Bunntransport (traksjon): Grus og stein ruller, glir eller skyves langs bunnen.',
    },
    {
      id: 'geo2-5-ex4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er grunnvannsspeilet?',
      options: [
        { id: 'a', text: 'Øvre grense for den mettede sonen', isCorrect: true },
        { id: 'b', text: 'Bunnen av en akvifer', isCorrect: false },
        { id: 'c', text: 'Overflaten av en innsjø', isCorrect: false },
        { id: 'd', text: 'En vanntett barriere', isCorrect: false },
      ],
      solution: 'Grunnvannsspeilet er den øvre grensen for den mettede sonen - nivået der alle porer er fylt med vann.',
    },
    {
      id: 'geo2-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan klimaendringer kan påvirke vannets kretsløp og grunnvannsressurser.',
      solution: 'Økt temperatur fører til: 1) Mer fordampning fra hav og land, 2) Intensere nedbørshendelser, 3) Endret sesongfordeling (mer vinternedbør som regn), 4) Tidligere snøsmelting, 5) Tørre somre med lavere grunnvannsnivå, 6) Saltvannsinntrengning i kystakviferere pga. havnivåstigning. I Norge: kortere snøsesong, økt flomrisiko, endret vannkraftpotensial.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Naturkatastrofer og risikovurdering
// ============================================================================

export const CHAPTER_GEOFAG_2_6: TextbookChapter = {
  id: 'geofag-2-6',
  courseId: 'geofag-2',
  chapterNumber: '6',
  title: 'Naturkatastrofer og risikovurdering',
  description: 'Jordskjelv, vulkanutbrudd, skred, flom og hvordan vi vurderer og håndterer risiko.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forklare årsakene til ulike naturkatastrofer',
    'vurdere risiko knyttet til naturhendelser',
    'beskrive varslings- og beredskapssystemer',
    'drøfte samfunnets sårbarhet og tilpasning',
  ],
  content: [
    {
      id: 'geo2-6-intro',
      type: 'text',
      content: `# Naturkatastrofer og risikovurdering

Naturkatastrofer er ekstreme naturhendelser som forårsaker store skader på mennesker, samfunn eller miljø. Forståelse av disse prosessene er avgjørende for å redusere risiko.

## Typer naturkatastrofer

### Geologiske
- Jordskjelv
- Vulkanutbrudd
- Tsunami
- Skred (fjellskred, leirskred, snøskred)

### Meteorologiske/hydrologiske
- Flom
- Storm/orkan
- Tørke
- Skogbrann`,
    },
    {
      id: 'geo2-6-def-risiko',
      type: 'definition',
      title: 'Risiko',
      content: 'Risiko = Fare × Sårbarhet × Eksponering. Fare er sannsynligheten for en naturhendelse, sårbarhet er hvor utsatt samfunnet er for skade, og eksponering er omfanget av mennesker og verdier i fareområdet.',
    },
    {
      id: 'geo2-6-jordskjelv',
      type: 'text',
      content: `## Jordskjelv

### Årsaker
- **Tektoniske**: Bevegelse langs plategraenser
- **Vulkanske**: Magmabevegelse
- **Kollaps**: Hulrom i grunnen
- **Menneskeskapte**: Gruvedrift, demninger, injeksjon

### Måling
- **Magnitude** (Richter/moment): Energifrigjøring
- **Intensitet** (Mercalli): Observerte virkninger

### Skadevirkninger
- Bygningskollaps
- Jordskred utløst av rystelser
- Tsunami
- Brann og brudd på infrastruktur`,
    },
    {
      id: 'geo2-6-skred',
      type: 'text',
      content: `## Skred i Norge

### Typer skred
- **Fjellskred**: Store steinmasser fra bratt fjellside
- **Steinsprang**: Enkeltblokker som faller
- **Jordskred**: Løsmasser i bevegelse
- **Leirskred (kvikkleireskred)**: Leire som flyter ut
- **Snøskred**: Snømasser i bevegelse

### Kvikkleire
- Marin leire avsatt etter istiden
- Salt vaskes ut → ustabil struktur
- Ved forstyrrelse: Fast → flytende
- Store skred: Rissa 1978, Gjerdrum 2020

### Faresonekartlegging
NVE og NGU kartlegger fareområder:
- Aktsomhetskart
- Faresonekart
- Restriksjoner på bygging`,
    },
    {
      id: 'geo2-6-example-1',
      type: 'example',
      title: 'Eksempel: Risikovurdering for leirskred',
      problem: 'Et område har moderat sannsynlighet for kvikkleireskred, men høy befolkningstetthet. Hvordan vil du vurdere risikoen?',
      solution: `**Løsning:**

Bruker formelen: Risiko = Fare × Sårbarhet × Eksponering

**Fare (sannsynlighet)**: Moderat
- Kvikkleire påvist i området
- Terrenghelning og erosjon vurderes

**Eksponering**: Høy
- Høy befolkningstetthet
- Viktig infrastruktur (veier, kraftlinjer)

**Sårbarhet**: Varierer
- Bygningstyper
- Varslingssystemer
- Evakueringsmuligheter

**Konklusjon**: Selv med moderat fare gir høy eksponering betydelig risiko. Tiltak: Overvåking, byggerestriksjoner, erosjonssikring, beredskapsplaner.`,
    },
    {
      id: 'geo2-6-flom',
      type: 'text',
      content: `## Flom

### Typer
- **Regflom**: Langvarig nedbør
- **Snøsmelteflom**: Rask smelting om våren
- **Stormflo**: Høy vannstand ved kysten
- **Dambrudd**: Brudd på demninger

### Faktorer som øker flomrisiko
- Urbanisering (mer avrenning)
- Klimaendringer (intensere nedbør)
- Drenering av våtmarker
- Bygging i flomutsatte områder

### Tiltak
- Flomsonekart
- Byggerestriksjoner
- Flomsikring (voller, flomveier)
- Varsling og beredskap`,
    },
    {
      id: 'geo2-6-varsling',
      type: 'text',
      content: `## Varsling og beredskap

### Varslingssystemer i Norge
- **Varsom.no**: Snøskred, flom, jord- og steinskred
- **Yr.no**: Meteorologiske varsler
- **Nødvarsel**: SMS til mobiltelefoner
- **NVE**: Overvåking av ustabile fjellpartier

### Farenivåer (1-5)
1. Liten fare
2. Moderat fare
3. Betydelig fare
4. Stor fare
5. Meget stor fare

### Risikoreduksjon
- Faresonekartlegging
- Arealplanlegging
- Fysiske sikringstiltak
- Overvåking og varsling
- Beredskapsplaner
- Informasjon til befolkningen`,
    },
    {
      id: 'geo2-6-warning-1',
      type: 'warning',
      title: 'Klimaendringer og naturfare',
      content: 'Klimaendringer øker risikoen for flere typer naturhendelser: Mer intens nedbør gir økt flom- og jordskredfare, høyere temperaturer destabiliserer permafrost og breer, og havnivåstigning øker stormflorisiko langs kysten.',
    },
  ],
  exercises: [
    {
      id: 'geo2-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skjer med kvikkleire når den forstyrres?',
      options: [
        { id: 'a', text: 'Den går fra fast til flytende tilstand', isCorrect: true },
        { id: 'b', text: 'Den blir hardere', isCorrect: false },
        { id: 'c', text: 'Den absorberer mer vann', isCorrect: false },
        { id: 'd', text: 'Den ekspanderer', isCorrect: false },
      ],
      solution: 'Kvikkleire er sensitiv marin leire der saltinnholdet er vasket ut. Ved forstyrrelse kollapser kornstrukturen og leiren går fra fast til flytende tilstand.',
    },
    {
      id: 'geo2-6-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar formelen Risiko = Fare × Sårbarhet × Eksponering med et konkret eksempel.',
      solution: 'Eksempel - snøskred mot hytte: Fare = sannsynlighet for skred (terreng, snøforhold). Sårbarhet = hyttens motstandsevne mot skred (konstruksjon). Eksponering = antall personer og verdier i hytta. Høy fare + lav sårbarhet (solid bygg) + lav eksponering (sjelden brukt) = moderat risiko.',
    },
    {
      id: 'geo2-6-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre tiltak som kan redusere risikoen for flomskader.',
      solution: '1) Arealplanlegging: Unngå bygging i flomutsatte områder, bruk flomsonekart. 2) Fysiske tiltak: Flomvoller, fordrøyningsbasseng, åpne flomveier, sikre bekkeløp. 3) Varsling og beredskap: Overvåking, varslingssystemer, evakueringsplaner, forsikringsordninger.',
    },
    {
      id: 'geo2-6-ex4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket nettsted varsler om snøskredfare i Norge?',
      options: [
        { id: 'a', text: 'Varsom.no', isCorrect: true },
        { id: 'b', text: 'NRK.no', isCorrect: false },
        { id: 'c', text: 'Regjeringen.no', isCorrect: false },
        { id: 'd', text: 'SSB.no', isCorrect: false },
      ],
      solution: 'Varsom.no er den offisielle varslingstjenesten for snøskred, flom og jord-/steinskred i Norge, drevet av NVE og Meteorologisk institutt.',
    },
    {
      id: 'geo2-6-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan klimaendringer påvirker naturfarene i Norge og hvilke tilpasninger som er nødvendige.',
      solution: 'Klimaendringer fører til: Mer nedbør (særlig høst/vinter) → økt flom- og skredfare, høyere temperaturer → ustabil permafrost og breer, havnivåstigning → økt stormflorisiko, kortere snøsesong men potensielt farligere snøforhold. Tilpasninger: Oppdaterte faresonekart, strengere arealplanlegging, klimatilpasset infrastruktur, økt overvåking, bedre varsling og beredskap.',
    },
  ],
};

// ============================================================================
// Kapittel 7: Energikilder og geologiske ressurser
// ============================================================================

export const CHAPTER_GEOFAG_2_7: TextbookChapter = {
  id: 'geofag-2-7',
  courseId: 'geofag-2',
  chapterNumber: '7',
  title: 'Energikilder og geologiske ressurser',
  description: 'Fossile brensler, fornybar energi, mineraler og bærekraftig ressursforvaltning.',
  estimatedMinutes: 80,
  competenceGoals: [
    'forklare dannelsen av fossile brensler',
    'vurdere fordeler og ulemper ved ulike energikilder',
    'beskrive mineralressurser og utvinning',
    'drøfte bærekraftig ressursforvaltning',
  ],
  content: [
    {
      id: 'geo2-7-intro',
      type: 'text',
      content: `# Energikilder og geologiske ressurser

Geologiske ressurser har vært fundamentet for menneskelig sivilisasjon - fra steinalderens flint til dagens olje, gass og sjeldne jordarter.

## Ressurskategorier

### Energiressurser
- Fossile: Olje, gass, kull
- Fornybare: Vannkraft, vindkraft, solenergi, geotermisk

### Mineralressurser
- Metaller: Jern, kobber, aluminium
- Industrimineraler: Sand, grus, kalkstein
- Kritiske mineraler: Litium, kobolt, sjeldne jordarter`,
    },
    {
      id: 'geo2-7-def-fossil',
      type: 'definition',
      title: 'Fossilt brensel',
      content: 'Fossilt brensel er energirike stoffer dannet fra fortidens plante- og dyrerester over millioner av år. De viktigste er olje, naturgass og kull. Ved forbrenning frigjøres lagret solenergi, men også CO₂ som bidrar til klimaendringer.',
    },
    {
      id: 'geo2-7-olje-gass',
      type: 'text',
      content: `## Olje og gass

### Dannelse
1. **Kildebergart**: Organisk-rik skifer (alger, plankton)
2. **Begravelse**: Sedimenter dekker over tid
3. **Modning**: Temperatur og trykk omdanner organisk materiale
   - Oljegenerering: 60-120°C
   - Gassgenerering: 120-200°C
4. **Migrasjon**: Olje/gass beveger seg oppover
5. **Felle**: Samles under tett bergart (takbergart)

### Petroleumssystem
- **Kildebergart**: Genererer hydrokarboner
- **Reservoarbergart**: Porøs bergart som lagrer olje/gass
- **Takbergart**: Tett bergart som hindrer lekkasje
- **Felle**: Struktur som samler hydrokarboner`,
    },
    {
      id: 'geo2-7-norge-olje',
      type: 'text',
      content: `## Norsk petroleumsvirksomhet

### Historie
- **1969**: Ekofisk-funnet
- **1971**: Produksjonsstart
- **2000-tallet**: Troll, Åsgard, Ormen Lange
- **I dag**: Ca. 90 felt i produksjon

### Nordsjøbassenget
- Kildebergart: Juraskifer (Kimmeridge)
- Reservoar: Sandstein fra flere perioder
- Tette strukturer: Saltdomer, forkastningsblokker

### Fremtiden
- Avtagende produksjon fra modne felt
- Nye funn i Barentshavet
- Debatt om nye leteområder
- Karbonfangst og -lagring (CCS)`,
    },
    {
      id: 'geo2-7-fornybar',
      type: 'text',
      content: `## Fornybar energi

### Vannkraft
- Norge: 96% av strømproduksjonen
- Basert på nedbør og høydeforskjeller
- Regulerbar og lagringsdyktig

### Vindkraft
- Rask vekst globalt og i Norge
- Havvind: Stort potensial
- Utfordringer: Arealbruk, naturinngrep

### Geotermisk energi
- Varme fra jordens indre
- Island: Stor andel
- Norge: Grunnvarme/bergvarme

### Solenergi
- Solceller og solfangere
- Prisfall gjør det konkurransedyktig
- Utfordring: Variabel produksjon`,
    },
    {
      id: 'geo2-7-mineraler',
      type: 'text',
      content: `## Mineralressurser

### Kritiske mineraler
For det grønne skiftet trengs store mengder:
- **Litium**: Batterier
- **Kobolt**: Batterier, legeringer
- **Sjeldne jordarter**: Vindturbiner, elbiler
- **Kobber**: Ledninger, motorer
- **Nikkel**: Batterier, rustfritt stål

### Gruvedrift i Norge
- Historisk viktig: Kongsberg sølvverk, Røros kobberverk
- I dag: Titanium, olivin, kvarts
- Potensial: Sjeldne jordarter, litium

### Miljøutfordringer
- Arealbruk og naturinngrep
- Avfall og forurensning
- Energiforbruk
- Sosiale konflikter (gruver vs. lokalsamfunn)`,
    },
    {
      id: 'geo2-7-example-1',
      type: 'example',
      title: 'Eksempel: Energibalanse',
      problem: 'En elbil-batteripakke krever ca. 10 kg litium. Diskuter miljøavveininger ved litiumutvinning.',
      solution: `**Analyse:**

**Utvinning:**
- Litium utvinnes fra saltsøer (Sør-Amerika) eller hard rock (Australia)
- Saltsøer: Stort vannforbruk i tørre områder
- Gruvedrift: Naturinngrep, energiforbruk, avfall

**Positive miljøeffekter:**
- Elbiler reduserer CO₂-utslipp over levetiden
- Batterier kan resirkuleres
- Fornybar energi kan brukes i produksjonen

**Negative miljøeffekter:**
- Vannmangel i utvinningsområder
- Naturødeleggelse ved gruvedrift
- Transport over store avstander

**Konklusjon:** Selv med miljøkostnader ved utvinning er elbiler bedre for klimaet enn fossilbiler, men ansvarlig utvinning og resirkulering er viktig.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-7-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er kildebergarten i et petroleumssystem?',
      options: [
        { id: 'a', text: 'Bergart som genererer olje og gass fra organisk materiale', isCorrect: true },
        { id: 'b', text: 'Bergart som lagrer olje og gass', isCorrect: false },
        { id: 'c', text: 'Bergart som hindrer lekkasje', isCorrect: false },
        { id: 'd', text: 'Bergart som transporterer olje og gass', isCorrect: false },
      ],
      solution: 'Kildebergarten er organisk-rik skifer som ved høy temperatur og trykk genererer olje og gass fra dødt organisk materiale.',
    },
    {
      id: 'geo2-7-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan olje og gass dannes og samles i en felle.',
      solution: 'Organisk materiale avsettes i kildebergart, begraves og modnes ved 60-200°C. Hydrokarboner migrerer oppover gjennom porøse bergarter. De samles i en felle der takbergart hindrer videre bevegelse. Fellen kan være en dom, forkastning eller stratigrafisk struktur.',
    },
    {
      id: 'geo2-7-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn tre kritiske mineraler for det grønne skiftet og forklar hvorfor de er viktige.',
      solution: '1) Litium - essensielt for batterier i elbiler og energilagring. 2) Kobolt - øker batterikapasitet og levetid. 3) Sjeldne jordarter (neodym, dysprosium) - brukes i sterke permanentmagneter til vindturbiner og elmotorer.',
    },
    {
      id: 'geo2-7-ex4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor stor andel av Norges strømproduksjon kommer fra vannkraft?',
      options: [
        { id: 'a', text: 'Ca. 96%', isCorrect: true },
        { id: 'b', text: 'Ca. 50%', isCorrect: false },
        { id: 'c', text: 'Ca. 75%', isCorrect: false },
        { id: 'd', text: 'Ca. 30%', isCorrect: false },
      ],
      solution: 'Norge produserer ca. 96% av strømmen fra vannkraft, noe som gjør oss til et av landene med høyest andel fornybar strømproduksjon.',
    },
    {
      id: 'geo2-7-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft om Norge bør starte gruvedrift på havbunnen for å utvinne kritiske mineraler.',
      solution: 'For: Store mineralressurser på norsk sokkel, kan sikre tilgang til kritiske mineraler for grønt skifte, arbeidsplasser og eksportinntekter. Mot: Ukjente økosystemer på havbunnen, potensielt store miljøskader, irreversible inngrep, føre-var-prinsippet bør gjelde. Avveining: Behovet for mineraler vs. miljøhensyn, alternative kilder (resirkulering, landbasert), kunnskap før utvinning.',
    },
  ],
};

// ============================================================================
// Kapittel 8: Klima gjennom tidene
// ============================================================================

export const CHAPTER_GEOFAG_2_8: TextbookChapter = {
  id: 'geofag-2-8',
  courseId: 'geofag-2',
  chapterNumber: '8',
  title: 'Klima gjennom tidene',
  description: 'Paleoklimatologi, klimaarkiver og naturlige klimavariasjoner gjennom geologisk tid.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for metoder for å rekonstruere fortidens klima',
    'beskrive klimavariasjoner gjennom geologisk tid',
    'forklare drivkrefter bak naturlige klimaendringer',
    'drøfte dagens klimaendringer i et geologisk perspektiv',
  ],
  content: [
    {
      id: 'geo2-8-intro',
      type: 'text',
      content: `# Klima gjennom tidene

For å forstå dagens klimaendringer må vi kjenne fortidens klima. Paleoklimatologi er studiet av klimaet før instrumentelle målinger begynte.

## Hvorfor studere fortidens klima?

- Forstå naturlige klimavariasjoner
- Teste klimamodeller mot faktiske data
- Identifisere "tipping points"
- Sette dagens endringer i perspektiv`,
    },
    {
      id: 'geo2-8-def-proxy',
      type: 'definition',
      title: 'Klimaproxy',
      content: 'En klimaproxy er en indirekte måling som reflekterer klimaforholdene i fortiden. Eksempler er årringer i trær, iskjerner, havbunnsedimenter og fossiler. Proxyer kalibreres mot moderne målinger for å oversette til temperatur, nedbør eller andre klimavariabler.',
    },
    {
      id: 'geo2-8-arkiver',
      type: 'text',
      content: `## Klimaarkiver og metoder

### Iskjerner
- Boret fra Grønland og Antarktis
- Går tilbake 800 000 år
- Måler: Temperatur (isotoper), CO₂, metan, vulkansk støv

### Havbunnsedimenter
- Foraminifera-skall gir isotopdata
- Går tilbake millioner av år
- Måler: Temperatur, isvolum, havstrømmer

### Årringer (dendrokronologi)
- Treringers tykkelse og tetthet
- Nøyaktig til år
- Går tilbake 10 000 år (overlappende serier)

### Andre arkiver
- Koraller (havtemperatur)
- Pollenanalyse (vegetasjon)
- Speleotemer (dryppstenhuler)
- Historiske dokumenter`,
    },
    {
      id: 'geo2-8-isotoper',
      type: 'text',
      content: `## Oksygenisotoper som klimaindikator

### Prinsippet
Oksygen finnes som to stabile isotoper: ¹⁶O (lett) og ¹⁸O (tung).

Forholdet δ¹⁸O varierer med temperatur:
- **Kaldt klima**: Mer ¹⁶O fordamper, ¹⁸O blir igjen i havet
- **Varmt klima**: Mer likevekt mellom isotopene

### I iskjerner
- Lavere δ¹⁸O = kaldere temperatur da snøen falt

### I havbunnsedimenter
- Høyere δ¹⁸O = mer is på land (kaldere)
- Foraminifera tar opp isotopforholdet i skallene`,
    },
    {
      id: 'geo2-8-klimahistorie',
      type: 'text',
      content: `## Klimahistorie

### Varme perioder
- **PETM** (56 mill år): Ekstremt varmt, CO₂ > 1000 ppm
- **Eocen**: Krokodiller på Svalbard
- **Kritt**: Ingen permanente isbreer

### Istider
- **Snøballjorden** (700 mill år): Hele Jorden frossen?
- **Perm-Karbon istid**: 360-260 mill år
- **Kvartær istider**: 2,6 mill år - i dag

### Kvartær (siste 2,6 mill år)
- Veksling mellom istider og mellomistider
- Sykluser på 100 000, 41 000 og 23 000 år
- Siste istid: 115 000 - 11 700 år siden
- Holosen (nå): Relativt stabilt, varmt klima`,
    },
    {
      id: 'geo2-8-drivkrefter',
      type: 'text',
      content: `## Drivkrefter for klimaendringer

### Astronomiske faktorer (Milankovitch-sykluser)
- **Eksentrisitet** (100 000 år): Jordbaneform
- **Aksehelning** (41 000 år): 22,1° - 24,5°
- **Presesjon** (23 000 år): Aksens rotasjon

### Geologiske faktorer
- Kontinentaldrift (plassering av landmasser)
- Fjellkjededannelse (forvitring binder CO₂)
- Vulkanisme (CO₂-utslipp)

### Atmosfæriske faktorer
- Drivhusgasskonsentrasjoner
- Aerosoler (vulkanutbrudd)
- Albedo (is, skyer, vegetasjon)

### Tilbakekoblinger
- Is-albedo
- Vanndamp
- Vegetasjon
- Havsirkulasjon`,
    },
    {
      id: 'geo2-8-example-1',
      type: 'example',
      title: 'Eksempel: Iskjernedata',
      problem: 'Iskjerner fra Antarktis viser at CO₂-nivået har variert mellom 180 og 280 ppm de siste 800 000 årene. I dag er nivået over 420 ppm. Hva forteller dette oss?',
      solution: `**Analyse:**

**Historisk variasjon:**
- Istider: ~180 ppm CO₂
- Mellomistider: ~280 ppm CO₂
- Aldri over 300 ppm de siste 800 000 år

**I dag:**
- Over 420 ppm (2024)
- Økning fra 280 til 420 ppm på 150 år
- Høyeste nivå på minst 3 millioner år

**Konklusjoner:**
1. Dagens CO₂-nivå er langt utenfor naturlig variasjon
2. Endringshastigheten er uvanlig rask
3. Mennesket er hovedårsaken (fossilbrensel)
4. Korrelasjon mellom CO₂ og temperatur bekrefter drivhuseffekten`,
    },
  ],
  exercises: [
    {
      id: 'geo2-8-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en klimaproxy?',
      options: [
        { id: 'a', text: 'En indirekte måling av fortidens klima', isCorrect: true },
        { id: 'b', text: 'En klimamodell', isCorrect: false },
        { id: 'c', text: 'Et værvarsel', isCorrect: false },
        { id: 'd', text: 'En temperaturmåler', isCorrect: false },
      ],
      solution: 'En klimaproxy er en indirekte måling som reflekterer fortidens klimaforhold, for eksempel årringer, iskjerner eller fossiler.',
    },
    {
      id: 'geo2-8-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan oksygenisotoper i iskjerner kan brukes til å rekonstruere temperaturer.',
      solution: 'Oksygen finnes som ¹⁶O (lett) og ¹⁸O (tung). Ved fordampning fra havet tas den lette isotopen lettere opp i vanndamp. Ved kaldt klima faller mer av den lette isotopen som snø over isbreer. Lavere δ¹⁸O i iskjerner indikerer kaldere temperatur da snøen falt.',
    },
    {
      id: 'geo2-8-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre Milankovitch-syklusene og deres periodelengde.',
      solution: '1) Eksentrisitet (~100 000 år): Jordbanen endrer seg fra nesten sirkulær til mer elliptisk. 2) Aksehelning (~41 000 år): Jordaksens vinkel varierer mellom 22,1° og 24,5°. 3) Presesjon (~23 000 år): Jordaksen roterer som en snurrebass. Disse påvirker hvordan solstråling fordeles over Jorden.',
    },
    {
      id: 'geo2-8-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva var CO₂-nivået under mellomistider de siste 800 000 årene?',
      options: [
        { id: 'a', text: 'Ca. 280 ppm', isCorrect: true },
        { id: 'b', text: 'Ca. 180 ppm', isCorrect: false },
        { id: 'c', text: 'Ca. 400 ppm', isCorrect: false },
        { id: 'd', text: 'Ca. 100 ppm', isCorrect: false },
      ],
      solution: 'Under mellomistider var CO₂-nivået ca. 280 ppm, mens det under istider var ca. 180 ppm. Dagens nivå på over 420 ppm er langt høyere enn noe tidspunkt de siste 800 000 år.',
    },
    {
      id: 'geo2-8-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan paleoklimatologiske data kan brukes til å forstå og forutsi fremtidige klimaendringer.',
      solution: 'Paleoklimatologiske data viser: 1) Naturlig variasjon - grunnlag for å identifisere menneskeskapt endring, 2) Klimasensitivitet - hvor mye temperatur endres per CO₂-økning, 3) Tipping points - når klimasystemet endres raskt, 4) Konsekvenser - havnivå, vegetasjon, artsutryddelser ved ulike temperaturer, 5) Modelltesting - kalibrere klimamodeller mot kjente fortidsklimaer.',
    },
  ],
};

// ============================================================================
// Kapittel 9: Mennesket og geosystemer
// ============================================================================

export const CHAPTER_GEOFAG_2_9: TextbookChapter = {
  id: 'geofag-2-9',
  courseId: 'geofag-2',
  chapterNumber: '9',
  title: 'Mennesket og geosystemer',
  description: 'Menneskelig påvirkning på geologiske prosesser, antropocen og bærekraftig utvikling.',
  estimatedMinutes: 70,
  competenceGoals: [
    'beskrive menneskets påvirkning på jordsystemet',
    'drøfte begrepet antropocen',
    'vurdere geologiske ressurser i et bærekraftperspektiv',
    'analysere samspillet mellom menneske og natur',
  ],
  content: [
    {
      id: 'geo2-9-intro',
      type: 'text',
      content: `# Mennesket og geosystemer

Mennesket har blitt en geologisk kraft som påvirker jordens systemer i stor skala. Vi endrer landskap, atmosfære, hav og økosystemer raskere enn naturlige prosesser.

## Mennesket som geologisk aktør

- Flytter mer sediment enn alle elver til sammen
- Har endret atmosfærens sammensetning
- Har påvirket 75% av landoverflaten
- Har endret vannets kretsløp globalt`,
    },
    {
      id: 'geo2-9-def-antropocen',
      type: 'definition',
      title: 'Antropocen',
      content: 'Antropocen er en foreslått geologisk epoke som markerer menneskets dominerende innvirkning på jordens systemer. Startdato er omdiskutert (jordbruksrevolusjonen, industrialiseringen eller 1950), men 1950 med atomprøvesprengninger er mest brukt som markør.',
    },
    {
      id: 'geo2-9-pavirkning',
      type: 'text',
      content: `## Menneskelig påvirkning på geosystemer

### Atmosfæren
- CO₂: Fra 280 til >420 ppm
- Metan: Tredoblet siden førindustriell tid
- Ozonhull (nå i bedring)
- Luftforurensning

### Hydrosfæren
- Endret vannets kretsløp (dammer, irrigasjon)
- Grunnvannsutarming
- Havforsuring (30% mer surt)
- Plastforurensning

### Litosfæren
- Gruvedrift og steinbrudd
- Urbanisering og veibygging
- Jordbruk og erosjon
- Setninger pga. grunnvannsuttak

### Biosfæren
- Masseutryddelse (6. utryddelse?)
- Habitatødeleggelse
- Invasive arter
- Genetisk modifisering`,
    },
    {
      id: 'geo2-9-markorer',
      type: 'text',
      content: `## Geologiske markører for antropocen

Fremtidige geologer vil finne spor etter oss:

### Teknofossiler
- Plast
- Aluminium
- Betong
- Syntetiske kjemikalier

### Geokjemiske signaler
- Radioaktive isotoper (atombombetester)
- Blyforurensning
- Nitrogengjødsling
- Kullflyveaske

### Biologiske endringer
- Masseutryddelse
- Domestiserte arter
- Fossile rester av storfe, kyllinger

### Landskapsendringer
- Byer og infrastruktur
- Jordbruksland
- Gruver og steinbrudd`,
    },
    {
      id: 'geo2-9-barekraft',
      type: 'text',
      content: `## Bærekraftig ressursforvaltning

### Planetære grenser
Johan Rockström (2009) identifiserte ni grenser:
1. Klimaendring (overskredet)
2. Biologisk mangfold (overskredet)
3. Nitrogensyklus (overskredet)
4. Landbruk/arealendring (overskredet)
5. Havforsuring
6. Ferskvannsbruk
7. Ozonlag (på bedring)
8. Aerosolforurensning
9. Kjemisk forurensning

### Sirkulærøkonomi
- Fra lineær (ta-bruk-kast) til sirkulær
- Resirkulering av materialer
- Forlenget levetid på produkter
- Design for gjenbruk`,
    },
    {
      id: 'geo2-9-example-1',
      type: 'example',
      title: 'Eksempel: Plastens geologiske spor',
      problem: 'Hvordan vil plast vises i geologiske avsetninger, og hva kan dette fortelle fremtidige geologer?',
      solution: `**Analyse:**

**Plastens geologiske signatur:**
- Produksjon: Fra 2 mill tonn (1950) til 400+ mill tonn (2020)
- Total produsert: Over 8 milliarder tonn
- Mikroplast finnes nå overalt: hav, is, jord, luft

**Geologiske spor:**
1. "Plastiglomerat" - plast smeltet med naturlige sedimenter
2. Mikroplast i havbunnssedimenter
3. Plastfibre i arktisk is
4. Kan bli fossil som "teknofossil"

**Fremtidige geologer vil konkludere:**
- Masseproduksjon startet midt på 1900-tallet
- Global spredning på få tiår
- Persistent materiale (nedbrytes ikke)
- Markør for antropocen-epoken`,
    },
    {
      id: 'geo2-9-note-1',
      type: 'note',
      title: 'Norges ansvar',
      content: 'Norge er en stor petroleumsprodusent. Vi har et særskilt ansvar for klimautslipp fra eksportert olje og gass, samtidig som vi har ressurser til å investere i grønn omstilling.',
    },
  ],
  exercises: [
    {
      id: 'geo2-9-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er antropocen?',
      options: [
        { id: 'a', text: 'Foreslått geologisk epoke preget av menneskets påvirkning', isCorrect: true },
        { id: 'b', text: 'En istidsperiode', isCorrect: false },
        { id: 'c', text: 'En vulkansk hendelse', isCorrect: false },
        { id: 'd', text: 'En masseutryddelse', isCorrect: false },
      ],
      solution: 'Antropocen er en foreslått geologisk epoke som markerer tiden da mennesket ble en dominerende geologisk kraft som påvirker jordens systemer.',
    },
    {
      id: 'geo2-9-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn tre geologiske markører som fremtidige geologer kan bruke til å identifisere antropocen.',
      solution: '1) Radioaktive isotoper fra atombombetester (særlig plutonium-239). 2) Plastpartikler og mikroplast i sedimenter. 3) Kullflyveaske fra kraftverk. Andre: aluminium, betong, endringer i fossiler (kylling mest vanlige fugl).',
    },
    {
      id: 'geo2-9-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med planetære grenser og nevn to som allerede er overskredet.',
      solution: 'Planetære grenser er grenseverdier for jordsystemets prosesser som ikke bør overskrides for å opprettholde stabile forhold. Overskredne grenser: 1) Klimaendring - CO₂ over sikker grense. 2) Tap av biologisk mangfold - utryddelseshastighet langt over naturlig nivå. 3) Nitrogensyklus - overgjødsling.',
    },
    {
      id: 'geo2-9-ex4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et "teknofossil"?',
      options: [
        { id: 'a', text: 'Menneskeskapte gjenstander som kan bli bevart som fossiler', isCorrect: true },
        { id: 'b', text: 'Fossiler av teknologiske organismer', isCorrect: false },
        { id: 'c', text: 'Kunstig fremstilte fossiler', isCorrect: false },
        { id: 'd', text: 'Fossiler funnet med teknologi', isCorrect: false },
      ],
      solution: 'Teknofossiler er menneskeskapte gjenstander som kan bli bevart i geologiske avsetninger, som plast, aluminium, glass og betong.',
    },
    {
      id: 'geo2-9-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft om mennesket har blitt en geologisk kraft på linje med naturlige prosesser, og gi eksempler.',
      solution: 'Ja, mennesket påvirker nå jordsystemet i samme skala som naturlige prosesser: 1) Sedimenttransport: Mennesker flytter mer masse enn alle elver (byggevirksomhet, gruvedrift). 2) Atmosfære: CO₂-økning raskere enn vulkaner. 3) Biosfære: Biomasse av husdyr overstiger ville pattedyr 15x. 4) Arealendring: 75% av isfri land påvirket. 5) Vannkretsløp: Dammer og irrigasjon endrer global vannfordeling.',
    },
  ],
};

// ============================================================================
// Kapittel 10: Geofaglig forskning og formidling
// ============================================================================

export const CHAPTER_GEOFAG_2_10: TextbookChapter = {
  id: 'geofag-2-10',
  courseId: 'geofag-2',
  chapterNumber: '10',
  title: 'Geofaglig forskning og formidling',
  description: 'Vitenskapelig metode i geofag, feltarbeid, dataanalyse og formidling av geofaglig kunnskap.',
  estimatedMinutes: 65,
  competenceGoals: [
    'anvende vitenskapelig metode på geofaglige problemstillinger',
    'planlegge og gjennomføre feltarbeid',
    'analysere og presentere geofaglige data',
    'formidle geofaglig kunnskap til ulike målgrupper',
  ],
  content: [
    {
      id: 'geo2-10-intro',
      type: 'text',
      content: `# Geofaglig forskning og formidling

Geofag er en observasjonsbasert vitenskap der feltarbeid, laboratorieanalyser og modellering kombineres for å forstå jordsystemet.

## Geofagets særtrekk

- Studerer prosesser over enorme tidsskalaer
- Kombinerer flere fagfelt (geologi, meteorologi, oseanografi)
- Ofte ikke mulig med kontrollerte eksperimenter
- Basert på observasjoner og naturlige "eksperimenter"`,
    },
    {
      id: 'geo2-10-metode',
      type: 'text',
      content: `## Vitenskapelig metode i geofag

### Grunnprinsipper
1. **Observasjon**: Samle data fra felt og arkiver
2. **Hypotese**: Foreslå forklaring
3. **Testing**: Samle mer data, modellering
4. **Konklusjon**: Støtte eller forkaste hypotese
5. **Publisering**: Fagfellevurdering

### Spesielle utfordringer
- Ikke mulig å gjenta fortiden
- Lange tidsskalaer (millioner av år)
- Komplekse systemer med mange variabler
- Ufullstendige geologiske arkiver

### Løsninger
- Uniformitarianisme: "Nåtiden er nøkkelen til fortiden"
- Sammenligning mellom lokaliteter
- Numeriske modeller
- Flere uavhengige datasett`,
    },
    {
      id: 'geo2-10-def-uniformitarianisme',
      type: 'definition',
      title: 'Uniformitarianisme',
      content: 'Uniformitarianisme er prinsippet om at de fysiske og kjemiske prosessene som virker i dag, også virket i fortiden. Dette gjør det mulig å tolke geologiske arkiver basert på studier av moderne prosesser.',
    },
    {
      id: 'geo2-10-feltarbeid',
      type: 'text',
      content: `## Feltarbeid

### Planlegging
- Definere problemstilling og hypotese
- Studere kart, flybilder, tidligere undersøkelser
- Velge lokaliteter og metoder
- Sikkerhetsvurdering

### Gjennomføring
- Systematiske observasjoner
- Prøvetaking (bergarter, sedimenter, vann)
- Måling (GPS, kompass, instrumenter)
- Fotografering og skissering
- Feltdagbok

### Utstyr
- Geologihammer
- Håndlupe
- Kompass/klinometer
- GPS
- Prøveposer og merking
- Saltsyre (kalktest)
- Feltdagbok`,
    },
    {
      id: 'geo2-10-data',
      type: 'text',
      content: `## Datainnsamling og analyse

### Typer geofaglige data
- **Kvalitative**: Bergartsbeskrivelser, strukturer
- **Kvantitative**: Kjemiske analyser, isotoper, alder

### Analysemetoder
- Tynnslipsmikroskopi
- XRF/XRD (mineralogi)
- Massspektrometri (isotoper)
- Radiometrisk datering
- Seismikk og geofysikk

### Databehandling
- Statistiske metoder
- Geografiske informasjonssystemer (GIS)
- Programmering (Python, R)
- Visualisering (kart, profiler, diagrammer)`,
    },
    {
      id: 'geo2-10-formidling',
      type: 'text',
      content: `## Formidling av geofaglig kunnskap

### Vitenskapelig formidling
- Fagartikler (fagfellevurdert)
- Konferansepresentasjoner
- Rapporter

### Populærvitenskapelig formidling
- Tilpasse språk til målgruppe
- Bruke analogier og visualisering
- Formidle usikkerhet uten å undergrave budskap
- Sosiale medier og blogger

### Geofag i samfunnsdebatten
- Klimakommunikasjon
- Naturfareinformasjon
- Ressursdebatter
- Arealplanlegging`,
    },
    {
      id: 'geo2-10-example-1',
      type: 'example',
      title: 'Eksempel: Planlegging av feltarbeid',
      problem: 'Du skal undersøke kvartære avsetninger i et dalføre for å rekonstruere isbreens utbredelse under siste istid. Beskriv hvordan du planlegger og gjennomfører feltarbeidet.',
      solution: `**Planlegging:**

1. **Forberedelse**
   - Studere geologiske kart og kvartærgeologisk kartlegging
   - Identifisere potensielle morener, esker, drumlin på flybilder
   - Definere hypotese om isutbredelse

2. **Feltarbeid**
   - Kartlegge moreneryggenes posisjon (GPS)
   - Beskrive sedimenter (kornstørrelse, sortering, rundingsgrad)
   - Måle orientering av drumlin og skuringsstriper
   - Ta prøver for eventuell datering

3. **Dataanalyse**
   - Tegne kart over avsetninger
   - Tolke isens bevegelsesretning
   - Korrelere med daterte avsetninger andre steder

4. **Konklusjon**
   - Rekonstruere isbreens utbredelse
   - Sammenligne med regionale data`,
    },
    {
      id: 'geo2-10-tip-1',
      type: 'tip',
      title: 'Tips for god formidling',
      content: 'Start med det interessante - hvorfor er dette viktig? Bruk konkrete eksempler fra lokalmiljøet. Visualiser komplekse prosesser. Vær ærlig om usikkerhet, men forklar hvorfor vi likevel kan stole på konklusjonene.',
    },
  ],
  exercises: [
    {
      id: 'geo2-10-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr prinsippet om uniformitarianisme?',
      options: [
        { id: 'a', text: 'Prosesser som virker i dag, virket også i fortiden', isCorrect: true },
        { id: 'b', text: 'Alle bergarter er like gamle', isCorrect: false },
        { id: 'c', text: 'Geologiske prosesser skjer med lik hastighet', isCorrect: false },
        { id: 'd', text: 'Jorden har alltid vært lik', isCorrect: false },
      ],
      solution: 'Uniformitarianisme betyr at de fysiske og kjemiske prosessene som virker i dag (erosjon, avsetning, vulkanisme osv.) også virket i fortiden. Dette gjør at vi kan tolke geologiske arkiver.',
    },
    {
      id: 'geo2-10-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre viktige ting å ha med i en feltdagbok under geofaglig feltarbeid.',
      solution: '1) Dato, tid, lokalitet (GPS-koordinater) og værforhold. 2) Detaljerte observasjoner: bergartsbeskrivelser, strukturer, farger, kornstørrelse, lagdeling. 3) Skisser og fotografier med referansenummer. Andre: prøvenummerering, hypoteser og tolkninger, sikkerhetsobservasjoner.',
    },
    {
      id: 'geo2-10-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor det er utfordrende å bruke vitenskapelig metode i geofag, og nevn to løsninger.',
      solution: 'Utfordringer: 1) Kan ikke gjenta fortiden eller gjøre kontrollerte eksperimenter. 2) Lange tidsskalaer som ikke kan observeres direkte. 3) Komplekse systemer med mange variabler. Løsninger: 1) Uniformitarianisme - studere moderne prosesser som modell. 2) Bruke flere uavhengige datasett som støtter samme konklusjon. 3) Numerisk modellering.',
    },
    {
      id: 'geo2-10-ex4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva brukes GIS til i geofag?',
      options: [
        { id: 'a', text: 'Geografisk analyse og kartlegging av data', isCorrect: true },
        { id: 'b', text: 'Kjemisk analyse av bergarter', isCorrect: false },
        { id: 'c', text: 'Datering av fossiler', isCorrect: false },
        { id: 'd', text: 'Seismisk undersøkelse', isCorrect: false },
      ],
      solution: 'GIS (Geografiske Informasjonssystemer) brukes til å samle, analysere og visualisere geografisk refererte data - for eksempel geologiske kart, faresonekart, ressurskart.',
    },
    {
      id: 'geo2-10-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du skal formidle klimaforskning til lokalbefolkningen i en kystkommune. Beskriv hvordan du vil tilpasse budskapet og gjøre det relevant for tilhørerne.',
      solution: 'Tilpasninger: 1) Bruke lokale eksempler - dokumenterte endringer i kommunen (stormflo, erosjon, fiskearter). 2) Unngå fagspråk - forklare begreper enkelt. 3) Visualisere med kart og bilder fra området. 4) Knytte til hverdagen - hva betyr dette for fiske, infrastruktur, eiendom? 5) Være ærlig om usikkerhet, men forklare at hovedkonklusjonene er sikre. 6) Gi handlingsalternativer - hva kan kommunen og enkeltpersoner gjøre?',
    },
  ],
};

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const GEOFAG_2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_2_1,
  CHAPTER_GEOFAG_2_2,
  CHAPTER_GEOFAG_2_3,
  CHAPTER_GEOFAG_2_4,
  CHAPTER_GEOFAG_2_5,
  CHAPTER_GEOFAG_2_6,
  CHAPTER_GEOFAG_2_7,
  CHAPTER_GEOFAG_2_8,
  CHAPTER_GEOFAG_2_9,
  CHAPTER_GEOFAG_2_10,
];

export function getGeofag2Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
