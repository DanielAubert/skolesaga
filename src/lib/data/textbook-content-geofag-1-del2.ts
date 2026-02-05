/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2 - Del 2: Bergarter og mineraler
 *
 * Dekker LK20-kompetansemaal for geofag 1 (GEO01-01)
 * Kapittel 2: Bergarter og mineraler
 *   2.1 Mineraler og mineralidentifikasjon
 *   2.2 Magmatiske bergarter
 *   2.3 Sedimentaere bergarter
 *   2.4 Metamorfe bergarter
 *   2.5 Bergartskretsloepet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Mineraler og mineralidentifikasjon
// ============================================================================

export const CHAPTER_GEOFAG_1_2_1: TextbookChapter = {
  id: 'geofag-1-2-1',
  courseId: 'geofag-1',
  chapterNumber: '2.1',
  title: 'Mineraler og mineralidentifikasjon',
  description: 'Hva mineraler er, deres egenskaper og hvordan vi identifiserer dem.',
  estimatedMinutes: 20,
  competenceGoals: [
    'definere hva et mineral er og kjenne kriteriene for mineraldefinisjonen',
    'beskrive og bruke ulike metoder for mineralidentifikasjon',
    'identifisere de vanligste bergartsdannende mineralene',
  ],
  content: [
    {
      id: 'geo1-2-1-intro',
      type: 'text',
      content: `# Mineraler og mineralidentifikasjon

Mineraler er byggesteinene i bergarter. For aa forstaa bergarter maa vi foerst forstaa mineralene de er bygget opp av. I dette kapittelet laeerer du hva et mineral er og hvordan du kan identifisere ulike mineraler.

## Hva er et mineral?

Et mineral maa oppfylle fem kriterier:

1. **Naturlig forekommende** - dannet i naturen, ikke menneskeskapt
2. **Uorganisk** - ikke dannet av levende organismer
3. **Fast stoff** - ikke vaeske eller gass
4. **Definert kjemisk sammensetning** - kan uttrykkes med kjemisk formel
5. **Ordnet atomstruktur** - atomene er organisert i et krystallgitter

Det finnes over 5000 kjente mineraler, men bare ca. 20-30 av disse er vanlige bergartsdannende mineraler.`,
    },
    {
      id: 'geo1-2-1-def-mineral',
      type: 'definition',
      title: 'Mineral',
      content: 'Et mineral er et naturlig forekommende, uorganisk fast stoff med definert kjemisk sammensetning og ordnet indre atomstruktur (krystallgitter). Eksempler: kvarts (SiO2), feltspat, kalsitt (CaCO3).',
    },
    {
      id: 'geo1-2-1-krystallstruktur',
      type: 'text',
      content: `## Krystallstruktur

Mineralenes atomer er ordnet i regelmessige tredimensjonale moenstre kalt **krystallgitter**. Dette gir mineraler deres karakteristiske egenskaper.

### De sju krystallsystemene

Alle mineraler tilhoerer ett av sju krystallsystemer:

1. **Kubisk** - tre like akser i 90 grader (pyritt, diamant, steinsalt)
2. **Tetragonalt** - to like akser og en forskjellig, alle i 90 grader
3. **Ortorombisk** - tre forskjellige akser i 90 grader
4. **Heksagonalt** - tre like akser i 120 grader pluss en vertikal (kvarts, beryll)
5. **Trigonalt** - som heksagonalt, men med annen symmetri (kalsitt)
6. **Monoklinsk** - tre ulike akser, en vinkel avviker fra 90 grader (feltspat, glimmer)
7. **Triklinsk** - tre ulike akser, alle vinkler avviker fra 90 grader

Krystallstrukturen bestemmer mange av mineralets fysiske egenskaper.`,
    },
    {
      id: 'geo1-2-1-def-krystall',
      type: 'definition',
      title: 'Krystall',
      content: 'En krystall er et fast stoff der atomene er ordnet i et regelmessig, tredimensjonalt moenster. Krystallens ytre form (habitus) gjenspeiler den indre atomstrukturen.',
    },
    {
      id: 'geo1-2-1-egenskaper',
      type: 'text',
      content: `## Egenskaper for mineralidentifikasjon

Mineraler identifiseres ved hjelp av fysiske egenskaper. De viktigste er:

### 1. Hardhet (Mohs skala)

Mohs hardhetsskala rangerer mineraler fra 1 til 10:

| Hardhet | Mineral | Referanse |
|---------|---------|-----------|
| 1 | Talk | Kan risses med negl |
| 2 | Gips | Kan risses med negl |
| 3 | Kalsitt | Kan risses med kobbermynt |
| 4 | Fluoritt | Kan risses med kniv |
| 5 | Apatitt | Kan risses med kniv |
| 6 | Feltspat | Kan risse glass |
| 7 | Kvarts | Kan risse glass |
| 8 | Topas | - |
| 9 | Korund | - |
| 10 | Diamant | Hardeste naturlige materiale |

### 2. Strek (pulverfarge)

Fargen paa mineralpulveret naar mineralet strykes mot en uglasert porselensplate. Mer paalitelig enn mineralets farge.

### 3. Glans

Hvordan mineralet reflekterer lys:
- **Metallglans** - som metall (pyritt, galena)
- **Glassaktig** - som glass (kvarts)
- **Perlemorsglans** - som perler (talk, muskovitt)
- **Silkeglans** - som silke (gips)
- **Fettglans** - som fett (nefelin)
- **Matt** - ingen glans (kaolin)`,
    },
    {
      id: 'geo1-2-1-egenskaper2',
      type: 'text',
      content: `### 4. Kloev og brudd

**Kloev**: Tendensen til aa dele seg langs bestemte plan (svakhetsflater i krystallstrukturen)
- *Fullkommen kloev*: Glimmer (i ett plan)
- *God kloev*: Feltspat (i to plan)
- *Daarlig kloev*: Kvarts (ingen tydelig kloev)

**Brudd**: Hvordan mineralet brytes naar det ikke foelger kloevplan
- *Muslig brudd*: Avrundede flater (kvarts, obsidian)
- *Ujevnt brudd*: Uregelmessige flater
- *Splintret brudd*: Splintaktige fragmenter

### 5. Egenvekt (tetthet)

Forholdet mellom mineralets masse og volumet:
- **Lette mineraler** (under 2,5): Gips, halitt
- **Middels** (2,5-4): Kvarts, feltspat
- **Tunge** (over 4): Galena, magnetitt

### 6. Andre egenskaper

- **Magnetisme**: Magnetitt tiltrekkes av magnet
- **Reaksjon med syre**: Kalsitt bruser med saltsyre
- **Fluorescens**: Noen mineraler lyser under UV-lys
- **Smak**: Steinsalt smaker salt`,
    },
    {
      id: 'geo1-2-1-def-kloev',
      type: 'definition',
      title: 'Kloev',
      content: 'Kloev er mineralets tendens til aa bryte langs bestemte krystallografiske plan der bindingene mellom atomene er svakere. Glimmer har perfekt kloev i ett plan, feltspat i to plan.',
    },
    {
      id: 'geo1-2-1-vanlige-mineraler',
      type: 'text',
      content: `## Vanlige bergartsdannende mineraler

Over 90% av jordskorpen bestaar av silikatmineraler. De viktigste er:

### Silikater

**Kvarts (SiO2)**
- Hardhet 7, glassaktig glans
- Ingen kloev, muslig brudd
- Varianter: bergkrystall, ametyst, roeykvarts

**Feltspat-gruppen**
- Utgjoer ca. 60% av jordskorpen
- Plagioklas (Na-Ca-feltspat) og kalifeltspat (K-feltspat)
- Hardhet 6, to kloevretninger

**Glimmer-gruppen**
- Perfekt kloev i ett plan
- Muskovitt (lys) og biotitt (moerk)

**Pyroksen og amfibol**
- Moerke mineraler med jern og magnesium
- Vanlige i magmatiske bergarter

**Olivin**
- Groent mineral
- Vanlig i basalt og mantelen`,
    },
    {
      id: 'geo1-2-1-example',
      type: 'example',
      title: 'Identifisere et ukjent mineral',
      problem: 'Du har funnet et mineral med foelgende egenskaper: Glassaktig glans, hardhet 7, ingen kloev, muslig brudd, fargeloest til hvitt. Hvilket mineral er det?',
      solution: `**Identifikasjonsprosess:**

1. **Hardhet 7**: Riper glass, er omtrent like hardt som kvarts
2. **Glassaktig glans**: Typisk for silikater
3. **Ingen kloev**: Utelukker feltspat og glimmer
4. **Muslig brudd**: Karakteristisk for kvarts
5. **Fargeloest til hvitt**: Passer med kvarts

**Konklusjon**: Mineralet er **kvarts** (SiO2)

Kvarts er et av de vanligste mineralene i jordskorpen. Den hoeye hardheten og mangelen paa kloev skyldes de sterke Si-O-bindingene i alle retninger.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-2-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke fem kriterier maa oppfylles for at et stoff skal kalles et mineral?',
      options: [
        { id: 'a', text: 'Naturlig, uorganisk, fast, definert kjemisk sammensetning, ordnet atomstruktur', isCorrect: true },
        { id: 'b', text: 'Naturlig, organisk, fast, variabel sammensetning, amorft', isCorrect: false },
        { id: 'c', text: 'Menneskeskapt, uorganisk, fast, definert sammensetning, krystallinsk', isCorrect: false },
        { id: 'd', text: 'Naturlig, uorganisk, vaeske eller fast, variabel sammensetning, ordnet struktur', isCorrect: false },
      ],
      solution: 'Et mineral maa vaere naturlig forekommende, uorganisk, fast, ha definert kjemisk sammensetning og ordnet atomstruktur (krystallgitter).',
    },
    {
      id: 'geo1-2-1-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket mineral har hardhet 7 paa Mohs skala?',
      options: [
        { id: 'a', text: 'Kvarts', isCorrect: true },
        { id: 'b', text: 'Feltspat', isCorrect: false },
        { id: 'c', text: 'Kalsitt', isCorrect: false },
        { id: 'd', text: 'Diamant', isCorrect: false },
      ],
      solution: 'Kvarts har hardhet 7. Feltspat har 6, kalsitt har 3, og diamant har 10.',
    },
    {
      id: 'geo1-2-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom kloev og brudd. Gi eksempler paa mineraler med karakteristisk kloev og brudd.',
      solution: 'Kloev er mineralets tendens til aa bryte langs bestemte plan der atombindingene er svakere (f.eks. glimmer med perfekt kloev i ett plan, feltspat med kloev i to plan). Brudd oppstaar naar mineralet brytes paa andre maater enn langs kloevplan (f.eks. kvarts med muslig brudd, som gir avrundede bruddflater).',
    },
    {
      id: 'geo1-2-1-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan kan du skille kalsitt fra kvarts i felt?',
      options: [
        { id: 'a', text: 'Kalsitt bruser med saltsyre og er mykere enn kvarts', isCorrect: true },
        { id: 'b', text: 'Kvarts bruser med saltsyre og er mykere enn kalsitt', isCorrect: false },
        { id: 'c', text: 'De har samme hardhet men ulik farge', isCorrect: false },
        { id: 'd', text: 'Kvarts er magnetisk, kalsitt er ikke', isCorrect: false },
      ],
      solution: 'Kalsitt (CaCO3) reagerer med saltsyre og frigjor CO2 (brusing), mens kvarts ikke reagerer. Kalsitt har hardhet 3, kvarts har 7.',
    },
    {
      id: 'geo1-2-1-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvilken mineralgruppe utgjor stoerst andel av jordskorpen? Nevn de viktigste mineralene i denne gruppen.',
      solution: 'Feltspat-gruppen utgjor ca. 60% av jordskorpen. De viktigste er plagioklas (Na-Ca-feltspat) som varierer fra albitt (Na-rik) til anortitt (Ca-rik), og kalifeltspat (K-feltspat) som inkluderer ortoklas og mikroklin. Feltspat har hardhet 6 og to kloevretninger i ca. 90 grader.',
    },
  ],
};

// ============================================================================
// Kapittel 2.2: Magmatiske bergarter
// ============================================================================

export const CHAPTER_GEOFAG_1_2_2: TextbookChapter = {
  id: 'geofag-1-2-2',
  courseId: 'geofag-1',
  chapterNumber: '2.2',
  title: 'Magmatiske bergarter',
  description: 'Dannelse, klassifikasjon og eksempler paa magmatiske bergarter.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare hvordan magmatiske bergarter dannes fra magma og lava',
    'skille mellom intrusive og ekstrusive bergarter',
    'klassifisere magmatiske bergarter etter mineralinnhold og tekstur',
  ],
  content: [
    {
      id: 'geo1-2-2-intro',
      type: 'text',
      content: `# Magmatiske bergarter

Magmatiske bergarter dannes naar smeltet bergmateriale (magma eller lava) kjoeles ned og stoerkner. De utgjor ca. 65% av jordskorpen og gir oss viktig informasjon om jordens indre prosesser.

## Fra magma til bergart

**Magma** er smeltet bergart inne i jorden. Naar magma naar overflaten, kalles det **lava**.

Magma dannes ved:
- Trykkavlastning (ved spredningsrygger)
- Temperaturoekning (over varme flekker)
- Tilfoersel av vann (i subduksjonssoner - senker smeltepunktet)

Avhengig av hvor magmaet stoerkner, faar vi ulike typer bergarter.`,
    },
    {
      id: 'geo1-2-2-def-magma',
      type: 'definition',
      title: 'Magma',
      content: 'Magma er en naturlig smeltemasse av silikater, oksider, flyktige stoffer (gasser) og eventuelt faste mineralkorn. Magma finnes i magmakamre under jordoverflaten og har typisk temperatur mellom 700-1300 grader C.',
    },
    {
      id: 'geo1-2-2-intrusive',
      type: 'text',
      content: `## Intrusive (plutoniske) bergarter

Intrusive bergarter dannes naar magma stoerkner **inne i jordskorpen**, dypt under overflaten. De kalles ogsaa dypbergarter.

### Karakteristikker

- **Langsom avkjoeling** (tusenvis til millioner av aar)
- **Store krystaller** - mineralene har tid til aa vokse
- **Fanerittisk tekstur** - krystallene er synlige med det blotte oeyet
- Eksponeres ved overflaten naar overliggende bergarter eroderes bort

### Intrusjonskropper

- **Batolitt**: Stor, uregelmessig intrusjon (over 100 km2)
- **Lakkolitt**: Linseformet, loefter overliggende lag
- **Sill (laggang)**: Horisontal intrusjon mellom lagdelte bergarter
- **Dike (gang)**: Vertikal eller skraa intrusjon som krysser lag

### Eksempler

**Granitt** - Lys, felsisk bergart med kvarts, feltspat og glimmer. Typisk i kontinental skorpe.

**Dioritt** - Mellombergart med mindre kvarts enn granitt.

**Gabbro** - Moerk, mafisk bergart med pyroksen, plagioklas og olivin. Tilsvarer basalt i sammensetning.`,
    },
    {
      id: 'geo1-2-2-def-fanerittisk',
      type: 'definition',
      title: 'Fanerittisk tekstur',
      content: 'Fanerittisk tekstur beskriver bergarter der individuelle krystaller er store nok til aa sees med det blotte oeyet (typisk over 1 mm). Dette indikerer langsom avkjoeling dypt i jordskorpen.',
    },
    {
      id: 'geo1-2-2-ekstrusive',
      type: 'text',
      content: `## Ekstrusive (vulkanske) bergarter

Ekstrusive bergarter dannes naar lava stoerkner **paa jordoverflaten**. De kalles ogsaa dagbergarter.

### Karakteristikker

- **Rask avkjoeling** (timer til dager)
- **Smaa eller ingen synlige krystaller**
- **Afanittisk tekstur** - krystallene er for smaa til aa ses
- Kan inneholde gasshull (vesikler) fra frigjoertte gasser

### Spesielle teksturer

- **Porfyrittisk**: Store krystaller (stroekorn) i finkornet grunnmasse
- **Vesikler**: Gasshull (f.eks. i pimpstein, basalt)
- **Glassaktig**: Ingen krystaller, amorft (f.eks. obsidian)

### Eksempler

**Basalt** - Moerk, finkornet. Vanligste vulkanske bergart. Dominerer havbunnen og vulkanoyer.

**Andesitt** - Mellombergart, oppkalt etter Andesfjellene. Vanlig ved subduksjonssoner.

**Ryolitt** - Lys, finkornet. Tilsvarer granitt i sammensetning.

**Obsidian** - Vulkansk glass. Dannes ved svaert rask avkjoeling.`,
    },
    {
      id: 'geo1-2-2-def-afanittisk',
      type: 'definition',
      title: 'Afanittisk tekstur',
      content: 'Afanittisk tekstur beskriver bergarter med saa smaa krystaller at de ikke kan sees med det blotte oeyet. Dette indikerer rask avkjoeling ved eller naer jordoverflaten.',
    },
    {
      id: 'geo1-2-2-klassifikasjon',
      type: 'text',
      content: `## Klassifikasjon av magmatiske bergarter

Magmatiske bergarter klassifiseres etter:
1. **Tekstur** (krystallstoerrelse) - intrusive vs ekstrusive
2. **Kjemisk/mineralogisk sammensetning** - felsiske vs mafiske

### Sammensetningstyper

| Type | SiO2-innhold | Mineraler | Farge | Intrusive | Ekstrusive |
|------|--------------|-----------|-------|-----------|------------|
| Felsisk | over 66% | Kvarts, K-feltspat, muskovitt | Lys | Granitt | Ryolitt |
| Intermediaer | 52-66% | Plagioklas, amfibol, biotitt | Graa | Dioritt | Andesitt |
| Mafisk | 45-52% | Pyroksen, Ca-plagioklas, olivin | Moerk | Gabbro | Basalt |
| Ultramafisk | under 45% | Olivin, pyroksen | Svaert moerk | Peridotitt | Komatiitt |

### Bowens reaksjonsserie

Norman Bowen viste at mineraler krystalliserer fra magma i en bestemt rekkefoelge:

**Diskontinuerlig serie** (mafiske mineraler):
Olivin -> Pyroksen -> Amfibol -> Biotitt

**Kontinuerlig serie** (plagioklas):
Ca-rik plagioklas -> Na-rik plagioklas

Til slutt krystalliserer K-feltspat, muskovitt og kvarts.`,
    },
    {
      id: 'geo1-2-2-example',
      type: 'example',
      title: 'Bestemme avkjoelingshistorien til en bergart',
      problem: 'En bergart har store krystaller av feltspat (1-2 cm) omgitt av en finkornet, graa grunnmasse. Hva kan du si om bergartstypen og hvordan den ble dannet?',
      solution: `**Analyse:**

1. **Tekstur**: Porfyrittisk - store krystaller (stroekorn) i finkornet grunnmasse
2. **Store krystaller**: Indikerer langsom avkjoeling dypt nede
3. **Finkornet grunnmasse**: Indikerer rask avkjoeling naer/paa overflaten
4. **Graa farge**: Intermediaer sammensetning

**Dannelseshistorie:**
1. Magmaet begynte aa krystallisere dypt i jordskorpen
2. Feltspatkrystaller vokste over lang tid
3. Magmaet steg raskt mot overflaten (vulkanutbrudd)
4. Resten stoerknet raskt og dannet finkornet grunnmasse

**Konklusjon**: Bergarten er sannsynligvis **andesitt** med porfyrittisk tekstur.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-2-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedforskjellen mellom intrusive og ekstrusive bergarter?',
      options: [
        { id: 'a', text: 'Intrusive stoerkner under overflaten og har store krystaller, ekstrusive stoerkner paa overflaten og har smaa krystaller', isCorrect: true },
        { id: 'b', text: 'Intrusive er alltid lyse, ekstrusive er alltid moerke', isCorrect: false },
        { id: 'c', text: 'Intrusive inneholder kvarts, ekstrusive gjoer det ikke', isCorrect: false },
        { id: 'd', text: 'Intrusive dannes av lava, ekstrusive dannes av magma', isCorrect: false },
      ],
      solution: 'Intrusive bergarter stoerkner langsomt under overflaten (store krystaller), mens ekstrusive stoerkner raskt paa overflaten (smaa krystaller).',
    },
    {
      id: 'geo1-2-2-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken bergart er den ekstrusive ekvivalenten til granitt?',
      options: [
        { id: 'a', text: 'Ryolitt', isCorrect: true },
        { id: 'b', text: 'Basalt', isCorrect: false },
        { id: 'c', text: 'Andesitt', isCorrect: false },
        { id: 'd', text: 'Obsidian', isCorrect: false },
      ],
      solution: 'Ryolitt har samme kjemiske sammensetning som granitt (felsisk, SiO2-rik) men med finkornet tekstur fordi den stoerknet raskt paa overflaten.',
    },
    {
      id: 'geo1-2-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva porfyrittisk tekstur er, og beskriv hvordan en bergart med slik tekstur dannes.',
      solution: 'Porfyrittisk tekstur kjennetegnes av store krystaller (stroekorn) omgitt av en finkornet grunnmasse. Dette dannes i to trinn: 1) Magmaet begynner aa avkjoeles langsomt under overflaten, og store krystaller vokser. 2) Magmaet stiger raskt til overflaten (f.eks. ved vulkanutbrudd), og resten av smelten stoerkner raskt som finkornet masse rundt de eksisterende krystallene.',
    },
    {
      id: 'geo1-2-2-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken bergart dominerer havbunnen?',
      options: [
        { id: 'a', text: 'Basalt', isCorrect: true },
        { id: 'b', text: 'Granitt', isCorrect: false },
        { id: 'c', text: 'Sandstein', isCorrect: false },
        { id: 'd', text: 'Gneis', isCorrect: false },
      ],
      solution: 'Basalt er den vanligste bergarten i oseanisk skorpe. Den dannes ved spredningsrygger der magma stiger opp og stoerkner paa havbunnen.',
    },
    {
      id: 'geo1-2-2-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom felsiske og mafiske bergarter. Gi eksempler paa hver.',
      solution: 'Felsiske bergarter har hoeyt SiO2-innhold (over 66%), er lyse, og inneholder kvarts, feltspat og muskovitt. Eksempler: granitt, ryolitt. Mafiske bergarter har lavt SiO2-innhold (45-52%), er moerke, og inneholder pyroksen, olivin og Ca-plagioklas. Eksempler: gabbro, basalt. Felsiske bergarter har lavere tetthet enn mafiske.',
    },
  ],
};

// ============================================================================
// Kapittel 2.3: Sedimentaere bergarter
// ============================================================================

export const CHAPTER_GEOFAG_1_2_3: TextbookChapter = {
  id: 'geofag-1-2-3',
  courseId: 'geofag-1',
  chapterNumber: '2.3',
  title: 'Sedimentaere bergarter',
  description: 'Dannelse, klassifikasjon og kjennetegn ved sedimentaere bergarter.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare hvordan sedimentaere bergarter dannes',
    'klassifisere sedimentaere bergarter i klastiske, kjemiske og biogene',
    'beskrive sedimentaere strukturer og hva de forteller oss',
  ],
  content: [
    {
      id: 'geo1-2-3-intro',
      type: 'text',
      content: `# Sedimentaere bergarter

Sedimentaere bergarter dannes ved avsetning og herding av sedimenter. De dekker ca. 75% av jordoverflaten (men utgjor bare 5% av skorpens volum) og inneholder fossiler som gir oss informasjon om jordens historie.

## Dannelsesprosessen

Sedimentaere bergarter dannes gjennom fire trinn:

1. **Forvitring** - Bergarter brytes ned til mindre partikler
2. **Transport** - Partiklene flyttes av vann, vind, is eller tyngdekraft
3. **Avsetning** - Partiklene avsettes naar transportmediet mister energi
4. **Diagenese** - Sedimentene herdes til bergart (kompaksjon + sementering)

Disse prosessene tar lang tid og skaper bergarter med karakteristisk lagdeling.`,
    },
    {
      id: 'geo1-2-3-def-diagenese',
      type: 'definition',
      title: 'Diagenese',
      content: 'Diagenese er prosessen der loese sedimenter omdannes til fast bergart. Den inkluderer kompaksjon (sammenpressing under vekten av overliggende lag) og sementering (utfelling av mineraler mellom kornene, ofte kvarts, kalsitt eller jernoksider).',
    },
    {
      id: 'geo1-2-3-klastiske',
      type: 'text',
      content: `## Klastiske sedimentaere bergarter

Klastiske bergarter er bygget opp av fragmenter (klaster) fra andre bergarter. De klassifiseres etter kornstoerrelse:

### Kornstoerrelse-klassifikasjon

| Kornstoerrelse | Sediment | Bergart |
|---------------|----------|---------|
| over 2 mm | Grus, stein | Konglomerat (avrundet) / Breksje (kantet) |
| 0,0625-2 mm | Sand | Sandstein |
| 0,004-0,0625 mm | Silt | Siltstein |
| under 0,004 mm | Leire | Leirstein / Skifer |

### Viktige klastiske bergarter

**Konglomerat** - Avrundede grus- og steinpartikler i finere grunnmasse. Avrunding indikerer lang transport.

**Breksje** - Kantede fragmenter. Indikerer kort transport eller skred.

**Sandstein** - Bygget av sandkorn (hovedsakelig kvarts). Ulike typer: kvartsandstein, arkose (feltspatrik), graavakke.

**Leirstein/skifer** - Finkornet, lagdelt. Kan inneholde mye organisk materiale. Kilde til petroleum.`,
    },
    {
      id: 'geo1-2-3-kjemiske',
      type: 'text',
      content: `## Kjemiske sedimentaere bergarter

Kjemiske bergarter dannes ved utfelling av mineraler fra loesning, oftest i hav eller innsjoeer.

### Karbonater

**Kalkstein**
- Hovedsakelig kalsitt (CaCO3)
- Dannes i varme, grunne hav
- Bruser med saltsyre

**Dolomitt**
- CaMg(CO3)2
- Ofte omdannet fra kalkstein

### Evaporitter

Dannes ved fordampning av vann:

**Gips** (CaSO4 med 2H2O)
- Dannes foerst ved fordampning
- Brukes i gipsplater

**Steinsalt/halitt** (NaCl)
- Dannes ved sterk fordampning
- Kubiske krystaller, smaker salt

### Andre kjemiske bergarter

**Chert/flint** - Mikrokrystallinsk kvarts (SiO2). Svaert hard, muslig brudd.`,
    },
    {
      id: 'geo1-2-3-def-evaporitt',
      type: 'definition',
      title: 'Evaporitt',
      content: 'Evaporitter er kjemiske sedimentaere bergarter dannet ved fordampning av vann. Mineralene felles ut i en bestemt rekkefoelge: foerst kalsitt, saa gips, deretter steinsalt, og til slutt de mest loeselige saltene.',
    },
    {
      id: 'geo1-2-3-biogene',
      type: 'text',
      content: `## Biogene sedimentaere bergarter

Biogene bergarter er dannet av organisk materiale fra levende organismer.

### Biogen kalkstein

- Bygget av skall og skjeletter fra marine organismer
- Korallrev, skjell, foraminiferer
- **Kritt** (chalk): Finkornet, fra mikroskopiske alger (kokkolitter)

### Kull

Dannet av akkumulert plantemateriale i myromraader:

1. **Torv** - delvis nedbrutt plantemateriale
2. **Brunkull (lignitt)** - bloett, lavt energiinnhold
3. **Steinkull** - hardt, hoeyere energiinnhold
4. **Antrasitt** - hardest, hoeyest energiinnhold

Oekende trykk og temperatur over tid gir hoeyere kullrang.

### Petroleum

- Dannet fra marine mikroorganismer
- Begravd og oppvarmet over millioner av aar
- Migrerer til reservoarbergart (ofte sandstein)`,
    },
    {
      id: 'geo1-2-3-strukturer',
      type: 'text',
      content: `## Sedimentaere strukturer

Sedimentaere strukturer gir informasjon om avsetningsmiloeet.

### Lagdeling

- **Horisontal lagdeling**: Rolige forhold, dypt vann
- **Kryssjiktning**: Stroemmende vann eller vind (deltaer, sanddyner)
- **Gradert lagdeling**: Grovt materiale i bunn, fint paa topp (turbiditter)

### Overflatestrukturer

- **Boelgemerker (rippelmerker)**: Vann- eller vindstroemmer
- **Toerkesorekker**: Uttoerking av leire

### Fossiler

Fossiler er rester eller spor etter fortidens liv bevart i bergarter.

**Ledefossiler** brukes til aa datere bergarter:
- Levde i kort geologisk tidsperiode
- Var geografisk utbredt
- Eksempler: trilobitter (paleozoikum), ammonitter (mesozoikum)`,
    },
    {
      id: 'geo1-2-3-example',
      type: 'example',
      title: 'Tolke avsetningsmiljoe',
      problem: 'En sandstein viser kryssjiktning med sett som er ca. 30 cm tykke. Over sandsteinen ligger en leirstein med fossiler av marine skjell. Hva kan dette fortelle oss om avsetningsmiloeet?',
      solution: `**Analyse:**

1. **Sandstein med kryssjiktning**:
   - Kryssjiktning dannes av stroemmende vann eller vind
   - 30 cm tykke sett indikerer moderat stroemstyrke
   - Sannsynligvis elvedeltamiljoe eller tidevannslette

2. **Leirstein med marine skjell over**:
   - Leirstein indikerer rolige forhold, lav energi
   - Marine skjell viser marint miljoe
   - Overgang fra sandstein til leirstein = transgressjon (havnivaaestigning)

**Konklusjon:**
Omraadet var foerst et delta eller kystmiljoe med aktive stroemmer (sandstein). Senere steg havnivaaet, og omraadet ble oversvoemmet av havet (marin leirstein). Dette kalles en transgressiv sekvens.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-2-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er de fire trinnene i dannelsen av sedimentaere bergarter?',
      options: [
        { id: 'a', text: 'Forvitring, transport, avsetning, diagenese', isCorrect: true },
        { id: 'b', text: 'Smelting, stoerkning, avkjoeling, krystallisering', isCorrect: false },
        { id: 'c', text: 'Metamorfose, kompaksjon, sementering, erosjon', isCorrect: false },
        { id: 'd', text: 'Vulkanisme, avsetning, opploesning, herding', isCorrect: false },
      ],
      solution: 'Sedimentaere bergarter dannes ved forvitring av eksisterende bergarter, transport av fragmentene, avsetning naar transportmediet mister energi, og diagenese (kompaksjon og sementering).',
    },
    {
      id: 'geo1-2-3-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken sedimentaer bergart dannes av sandkorn?',
      options: [
        { id: 'a', text: 'Sandstein', isCorrect: true },
        { id: 'b', text: 'Leirstein', isCorrect: false },
        { id: 'c', text: 'Konglomerat', isCorrect: false },
        { id: 'd', text: 'Kalkstein', isCorrect: false },
      ],
      solution: 'Sandstein dannes ved kompaksjon og sementering av sandkorn (0,0625-2 mm). Den vanligste typen er kvartsandstein.',
    },
    {
      id: 'geo1-2-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom konglomerat og breksje. Hva kan disse bergartene fortelle oss om transporthistorien?',
      solution: 'Konglomerat inneholder avrundede fragmenter, mens breksje inneholder kantede fragmenter. Avrunding skjer ved lang transport der partiklene slipes mot hverandre (f.eks. i elver). Kantede fragmenter i breksje indikerer kort transport eller braa hendelser (skred, forkastninger). Konglomerat dannes ofte i elvedelta, mens breksje kan dannes ved fjellfoten eller i forkastningssoner.',
    },
    {
      id: 'geo1-2-3-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan dannes evaporitter som gips og steinsalt?',
      options: [
        { id: 'a', text: 'Ved fordampning av havvann eller innsjoevann', isCorrect: true },
        { id: 'b', text: 'Ved kjemisk forvitring av bergarter', isCorrect: false },
        { id: 'c', text: 'Ved vulkansk aktivitet', isCorrect: false },
        { id: 'd', text: 'Ved nedbrytning av organisk materiale', isCorrect: false },
      ],
      solution: 'Evaporitter dannes naar vann fordamper og opploeste mineraler felles ut. Gips felles ut foerst, deretter steinsalt ved sterkere fordampning. Dette skjer i avstengte bassenger eller toerre klimasoner.',
    },
    {
      id: 'geo1-2-3-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er et ledefossil, og hvilke egenskaper maa et fossil ha for aa vaere nyttig som ledefossil?',
      solution: 'Et ledefossil er et fossil som brukes til aa datere bergarter. For aa vaere et godt ledefossil maa arten ha: 1) Levd i en kort, avgrenset tidsperiode (god tidsopploesning). 2) Vaert geografisk utbredt (kan korrelere bergarter fra ulike steder). 3) Vaere lett gjenkjennelig. 4) Forekomme i relativt stort antall. Eksempler: ammonitter (mesozoikum), trilobitter (paleozoikum).',
    },
  ],
};

// ============================================================================
// Kapittel 2.4: Metamorfe bergarter
// ============================================================================

export const CHAPTER_GEOFAG_1_2_4: TextbookChapter = {
  id: 'geofag-1-2-4',
  courseId: 'geofag-1',
  chapterNumber: '2.4',
  title: 'Metamorfe bergarter',
  description: 'Metamorfose, typer metamorfose og vanlige metamorfe bergarter.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hva metamorfose er og hvilke faktorer som driver prosessen',
    'skille mellom ulike typer metamorfose',
    'identifisere vanlige metamorfe bergarter og deres opprinnelige bergarter',
  ],
  content: [
    {
      id: 'geo1-2-4-intro',
      type: 'text',
      content: `# Metamorfe bergarter

Metamorfe bergarter dannes naar eksisterende bergarter (protolitt) utsettes for endrede forhold av trykk og/eller temperatur uten at de smelter fullstendig.

## Hva er metamorfose?

Metamorfose betyr "forvandles" (fra gresk). Ved metamorfose:
- Rekrystalliserer mineraler til stoerre krystaller
- Dannes nye mineraler som er stabile ved de nye forholdene
- Endres tekstur og struktur
- Bevares opprinnelig kjemisk sammensetning (stort sett)

Metamorfose skjer ved **temperaturer mellom ca. 200 grader C og smeltepunktet**.`,
    },
    {
      id: 'geo1-2-4-def-metamorfose',
      type: 'definition',
      title: 'Metamorfose',
      content: 'Metamorfose er omdanning av bergarter i fast tilstand som foelge av endringer i temperatur, trykk og/eller kjemisk miljoe. Bergarten smelter ikke, men mineralene rekrystalliserer og nye mineraler kan dannes.',
    },
    {
      id: 'geo1-2-4-faktorer',
      type: 'text',
      content: `## Faktorer som driver metamorfose

### Temperatur

- Oeker med dypet (geotermisk gradient: ca. 25-30 grader C per km)
- Gir energi til kjemiske reaksjoner
- Muliggjoer rekrystallisering

### Trykk

**Litostatisk trykk** (overlagringstrykk):
- Trykk fra overliggende bergmasser
- Oeker med dypet
- Virker likt i alle retninger

**Rettet trykk** (differensialtrykk):
- Trykk som virker sterkere i en retning
- Oppstaar ved tektonisk deformasjon
- Gir foliert (lagdelt) tekstur

### Fluider

- Vann og CO2 kan transporteres gjennom bergarter
- Akselererer kjemiske reaksjoner
- Kan tilfoere eller fjerne grunnstoffer`,
    },
    {
      id: 'geo1-2-4-typer',
      type: 'text',
      content: `## Typer metamorfose

### Regional metamorfose

- Skjer over store omraader (hundrevis til tusenvis av km2)
- Forbundet med fjellkjededannelse
- Hoeyt trykk og temperatur
- Gir folierte bergarter (skifrighet, gneis-baanding)
- Vanligste type metamorfose

### Kontaktmetamorfose

- Skjer rundt magmakropper (intrusjoner)
- Hovedsakelig temperaturoekning (magmavarme)
- Lavt rettet trykk
- Gir aureole (sone) rundt intrusjonen
- Ofte ikke-folierte bergarter

### Dynamisk metamorfose

- Langs forkastninger og skjaersoner
- Hoeyt rettet trykk
- Kan gi mylonitt (finknust bergart)`,
    },
    {
      id: 'geo1-2-4-def-foliasjon',
      type: 'definition',
      title: 'Foliasjon',
      content: 'Foliasjon er en parallell orientering av plate- eller naaleformede mineraler i en bergart, som gir en lagdelt eller skifrig tekstur. Foliasjon dannes under rettet trykk og er karakteristisk for regional metamorfose.',
    },
    {
      id: 'geo1-2-4-bergarter',
      type: 'text',
      content: `## Vanlige metamorfe bergarter

### Folierte bergarter (fra regional metamorfose)

**Skifer (slate)**
- Finkornet, perfekt kloev
- Lav metamorfosegrad
- Protolitt: leirstein/leirskifer

**Fyllitt**
- Mellom skifer og glimmerskifer
- Silkeaktig glans
- Synlige glimmerkrystaller under lupe

**Glimmerskifer**
- Medium metamorfosegrad
- Synlige glimmerkrystaller
- Kan inneholde granat

**Gneis**
- Hoey metamorfosegrad
- Karakteristisk baanding av lyse og moerke mineraler
- Protolitt: granitt eller sedimentaere bergarter

### Ikke-folierte bergarter

**Marmor**
- Metamorf kalkstein
- Rekrystallisert kalsitt
- Bruser med syre

**Kvartsitt**
- Metamorf sandstein
- Nesten ren kvarts
- Svaert hard

**Hornfels**
- Finkornet, hard
- Dannes ved kontaktmetamorfose`,
    },
    {
      id: 'geo1-2-4-example',
      type: 'example',
      title: 'Identifisere en metamorf bergart',
      problem: 'En bergart viser tydelig baanding med vekslende lyse og moerke lag. De lyse lagene inneholder kvarts og feltspat, de moerke inneholder biotitt og amfibol. Krystallene er mellomstore til store. Identifiser bergarten.',
      solution: `**Analyse:**

1. **Baanding av lyse og moerke mineraler**: Karakteristisk for gneis
2. **Lyse lag**: Kvarts og feltspat (felsiske mineraler)
3. **Moerke lag**: Biotitt og amfibol (mafiske mineraler)
4. **Mellomstore til store krystaller**: Indikerer hoey metamorfosegrad
5. **Foliert tekstur**: Viser regional metamorfose med rettet trykk

**Konklusjon**: Bergarten er **gneis**

**Dannelse**: Protolitten (opprinnelig bergart) kan ha vaert granitt eller sedimentaere bergarter. Under regional metamorfose i en fjellkjede ble bergarten utsatt for hoeyt trykk og temperatur. Mineralene rekrystalliserte og orienterte seg i baand vinkelrett paa trykkretningen.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-2-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er de to viktigste faktorene som driver metamorfose?',
      options: [
        { id: 'a', text: 'Temperatur og trykk', isCorrect: true },
        { id: 'b', text: 'Forvitring og erosjon', isCorrect: false },
        { id: 'c', text: 'Smelting og stoerkning', isCorrect: false },
        { id: 'd', text: 'Transport og avsetning', isCorrect: false },
      ],
      solution: 'Metamorfose drives av oekt temperatur og/eller trykk. Disse faktorene faar mineraler til aa rekrystallisere og nye mineraler til aa dannes.',
    },
    {
      id: 'geo1-2-4-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken bergart dannes naar kalkstein utsettes for metamorfose?',
      options: [
        { id: 'a', text: 'Marmor', isCorrect: true },
        { id: 'b', text: 'Kvartsitt', isCorrect: false },
        { id: 'c', text: 'Gneis', isCorrect: false },
        { id: 'd', text: 'Skifer', isCorrect: false },
      ],
      solution: 'Marmor er metamorf kalkstein. Kalsittkrystallene rekrystalliserer til stoerre krystaller under metamorfosen.',
    },
    {
      id: 'geo1-2-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom regional og kontaktmetamorfose.',
      solution: 'Regional metamorfose skjer over store omraader (hundrevis av km2) under fjellkjededannelse, med hoeyt trykk og temperatur, og gir folierte bergarter. Kontaktmetamorfose skjer lokalt rundt magmaintrusjoner, drives hovedsakelig av varme (ikke trykk), og gir ofte ikke-folierte bergarter i en sone (aureole) rundt intrusjonen.',
    },
    {
      id: 'geo1-2-4-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er foliasjon, og hvordan dannes det?',
      options: [
        { id: 'a', text: 'Parallell orientering av mineraler dannet under rettet trykk', isCorrect: true },
        { id: 'b', text: 'Lagdeling fra sedimentaer avsetning', isCorrect: false },
        { id: 'c', text: 'Krystallisering fra magma', isCorrect: false },
        { id: 'd', text: 'Kjemisk forvitring av overflaten', isCorrect: false },
      ],
      solution: 'Foliasjon er parallell orientering av plate- eller naaleformede mineraler. Den dannes naar bergarter utsettes for rettet (differensial) trykk under regional metamorfose. Mineralene roterer og rekrystalliserer vinkelrett paa trykkretningen.',
    },
    {
      id: 'geo1-2-4-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv rekken av metamorfe bergarter som dannes naar leirstein utsettes for oekende metamorfosegrad.',
      solution: 'Naar leirstein utsettes for oekende metamorfosegrad, dannes foelgende rekke: 1) Skifer (lav grad) - finkornet med perfekt kloev. 2) Fyllitt (lav-medium grad) - silkeaktig glans, begynnende glimmerkrystaller. 3) Glimmerskifer (medium grad) - synlige glimmerkrystaller, kan inneholde granat. 4) Gneis (hoey grad) - grovkornet med tydelig baanding. Ved enda hoeyere temperatur kan bergarten begynne aa smelte (migmatitt).',
    },
  ],
};

// ============================================================================
// Kapittel 2.5: Bergartskretsloepet
// ============================================================================

export const CHAPTER_GEOFAG_1_2_5: TextbookChapter = {
  id: 'geofag-1-2-5',
  courseId: 'geofag-1',
  chapterNumber: '2.5',
  title: 'Bergartskretsloepet',
  description: 'Sammenhengene mellom bergartsguppene og prosessene som omdanner dem.',
  estimatedMinutes: 15,
  competenceGoals: [
    'beskrive bergartskretsloepet og sammenhengene mellom bergartsguppene',
    'forklare prosessene som omdanner bergarter fra en type til en annen',
    'forstaa drivkreftene bak bergartskretsloepet',
  ],
  content: [
    {
      id: 'geo1-2-5-intro',
      type: 'text',
      content: `# Bergartskretsloepet

Bergartskretsloepet beskriver hvordan bergarter omdannes mellom de tre hovedgruppene over geologisk tid. Ingen bergart er permanent - over millioner av aar kan enhver bergart omdannes til en annen type.

## De tre bergartsguppene

1. **Magmatiske bergarter** - dannes naar magma/lava stoerkner
2. **Sedimentaere bergarter** - dannes ved avsetning og diagenese
3. **Metamorfe bergarter** - dannes ved omdanning under trykk og temperatur

Disse tre gruppene er koblet sammen i et kretslop der bergarter kontinuerlig omdannes.`,
    },
    {
      id: 'geo1-2-5-def-kretslop',
      type: 'definition',
      title: 'Bergartskretsloepet',
      content: 'Bergartskretsloepet er den kontinuerlige prosessen der bergarter omdannes mellom magmatiske, sedimentaere og metamorfe typer. Kretoloepet drives av jordens indre varme (platetektonikk, vulkanisme) og solenergi (forvitring, erosjon).',
    },
    {
      id: 'geo1-2-5-overganger',
      type: 'text',
      content: `## Overganger mellom bergartsguppene

### Magmatisk -> Sedimentaer

1. Forvitring og erosjon bryter ned bergarter
2. Sedimenter transporteres av vann, vind eller is
3. Avsetning i bassenger
4. Diagenese danner sedimentaer bergart

**Eksempel**: Granitt forvitrer til sand og leire, som avsettes og blir sandstein og leirstein.

### Sedimentaer -> Metamorf

1. Begravelse oeker trykk og temperatur
2. Mineraler rekrystalliserer
3. Nye mineraler dannes

**Eksempel**: Leirstein blir skifer, deretter fyllitt, saa glimmerskifer, og til slutt gneis.

### Metamorf -> Magmatisk

1. Ved tilstrekkelig temperaturoekning smelter bergarten
2. Magma stiger opp
3. Magma stoerkner til magmatisk bergart

**Eksempel**: Gneis smelter og danner granittisk magma.`,
    },
    {
      id: 'geo1-2-5-snarveier',
      type: 'text',
      content: `## Snarveier i kretsloepet

Bergarter trenger ikke gaa gjennom alle stadier. Det finnes flere snarveier:

### Direkte overganger

- **Magmatisk -> Metamorf**: Intrusiv bergart omdannes ved regional metamorfose
- **Sedimentaer -> Magmatisk**: Sedimenter subduseres og smelter
- **Metamorf -> Sedimentaer**: Metamorf bergart forvitres direkte

### Gjentagelse

- Metamorfe bergarter kan metamorfoseres paa nytt
- Sedimentaere bergarter kan eroderes og avsettes igjen
- Magmatiske bergarter kan smelte og stoerkne paa nytt

### Viktig poeng

Enhver bergart kan bli hvilken som helst annen type, gitt riktige forhold og nok tid.`,
    },
    {
      id: 'geo1-2-5-drivkrefter',
      type: 'text',
      content: `## Drivkrefter i bergartskretsloepet

### Jordens indre varme

- Driver platetektonikk
- Skaper vulkanisme (magmatiske bergarter)
- Foraarsaker metamorfose
- Kilde: Radioaktivt henfall og opprinnelig varme

### Solenergi

- Driver vaersystemer
- Foraarsaker forvitring og erosjon
- Transporterer sedimenter
- Fordamper vann (vannkretsloepet)

### Gravitasjon

- Driver sedimenttransport
- Foraarsaker kompaksjon
- Trekker subduserende plater ned
- Faar magma til aa stige (tetthetforskjeller)

### Tid

- Kretoloepet tar millioner til milliarder av aar
- En fullstendig syklus tar typisk 200-500 millioner aar
- Jordens bergarter har gaatt gjennom mange sykluser`,
    },
    {
      id: 'geo1-2-5-example',
      type: 'example',
      title: 'Foelge en bergart gjennom kretoloepet',
      problem: 'Beskriv en mulig reise for et granittfjell gjennom bergartskretsloepet.',
      solution: `**Eksempel: Fra granitt til gneis og tilbake**

1. **Start: Granittfjell** (500 millioner aar siden)
   - Dannet fra magma dypt i jordskorpen
   - Eksponert ved overflaten etter erosjon

2. **Forvitring og erosjon** (50 millioner aar)
   - Frost, vann og kjemisk forvitring bryter ned granitten
   - Kvartskorn og feltspatfragmenter loesner
   - Transporteres av elver til havet

3. **Avsetning og diagenese** (100 millioner aar)
   - Avsettes som sand paa kontinentalsokkelen
   - Begraves av nye sedimenter
   - Kompaksjon og sementering gir sandstein (arkose)

4. **Begravelse og metamorfose** (200 millioner aar)
   - Kontinentalkollisjon presser sandsteinen ned
   - Oekende trykk og temperatur
   - Rekrystallisering gir kvartsitt, deretter gneis

5. **Heving og ny forvitring** (150 millioner aar)
   - Fjellkjeden heves og eroderes
   - Gneisen eksponeres
   - Syklusen kan begynne paa nytt

**Total tid: ca. 500 millioner aar for en syklus**`,
    },
    {
      id: 'geo1-2-5-diagram',
      type: 'text',
      content: `## Oppsummering av bergartskretsloepet

### Hovedprosesser

| Fra | Til | Prosess |
|-----|-----|---------|
| Magmatisk | Sedimentaer | Forvitring, erosjon, avsetning, diagenese |
| Sedimentaer | Metamorf | Begravelse, trykk, temperatur |
| Metamorf | Magmatisk | Smelting |
| Magmatisk | Metamorf | Regional metamorfose |
| Sedimentaer | Magmatisk | Subduksjon og smelting |
| Metamorf | Sedimentaer | Forvitring og erosjon |

### Nokkelpoenger

1. Alle bergarter er midlertidige paa geologisk tidsskala
2. Prosessene i kretoloepet er drevet av jordens indre varme og solenergi
3. Platetektonikk er den viktigste mekanismen som beveger bergarter gjennom kretoloepet
4. Kretoloepet kobler sammen jordens indre og ytre prosesser`,
    },
  ],
  exercises: [
    {
      id: 'geo1-2-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke er de tre hovedgruppene av bergarter?',
      options: [
        { id: 'a', text: 'Magmatiske, sedimentaere og metamorfe', isCorrect: true },
        { id: 'b', text: 'Granitt, sandstein og marmor', isCorrect: false },
        { id: 'c', text: 'Intrusive, ekstrusive og klastiske', isCorrect: false },
        { id: 'd', text: 'Felsiske, mafiske og ultramafiske', isCorrect: false },
      ],
      solution: 'De tre hovedgruppene er magmatiske (dannes fra magma/lava), sedimentaere (dannes ved avsetning) og metamorfe (dannes ved omdanning under trykk og temperatur).',
    },
    {
      id: 'geo1-2-5-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken prosess omdanner sedimentaere bergarter til metamorfe bergarter?',
      options: [
        { id: 'a', text: 'Oekt trykk og temperatur ved begravelse', isCorrect: true },
        { id: 'b', text: 'Forvitring og erosjon', isCorrect: false },
        { id: 'c', text: 'Smelting til magma', isCorrect: false },
        { id: 'd', text: 'Avsetning og diagenese', isCorrect: false },
      ],
      solution: 'Sedimentaere bergarter omdannes til metamorfe bergarter naar de begraves dypt og utsettes for oekt trykk og temperatur. Mineralene rekrystalliserer og nye mineraler kan dannes.',
    },
    {
      id: 'geo1-2-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Tegn og forklar et enkelt diagram av bergartskretsloepet med de tre bergartsguppene og hovedprosessene mellom dem.',
      solution: 'Diagrammet boer vise tre bokser (Magmatisk, Sedimentaer, Metamorf) forbundet med piler. Prosesser: Magmatisk til Sedimentaer: forvitring, erosjon, avsetning, diagenese. Sedimentaer til Metamorf: begravelse, oekt trykk og temperatur. Metamorf til Magmatisk: smelting. I tillegg finnes direkte forbindelser: Magmatisk til Metamorf (regional metamorfose), Sedimentaer til Magmatisk (subduksjon og smelting), Metamorf til Sedimentaer (forvitring og erosjon).',
    },
    {
      id: 'geo1-2-5-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er de to hovedkildene til energi som driver bergartskretsloepet?',
      options: [
        { id: 'a', text: 'Jordens indre varme og solenergi', isCorrect: true },
        { id: 'b', text: 'Tidevannsenergi og vindenergi', isCorrect: false },
        { id: 'c', text: 'Kjernekraft og fossilt brensel', isCorrect: false },
        { id: 'd', text: 'Magnetisme og elektrisitet', isCorrect: false },
      ],
      solution: 'Jordens indre varme (fra radioaktivt henfall og opprinnelig varme) driver platetektonikk, vulkanisme og metamorfose. Solenergi driver vaersystemer, forvitring, erosjon og vannkretsloepet.',
    },
    {
      id: 'geo1-2-5-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan platetektonikk driver bergartskretsloepet. Gi minst tre eksempler.',
      solution: '1) Ved spredningsrygger: Magma stiger opp og danner ny oseanisk skorpe (basalt). 2) Ved subduksjonssoner: Oseanisk skorpe foeres ned i mantelen, smelter, og magma stiger opp og danner vulkaner (andesitt). Sedimenter kan ogsaa subduseres og metamorfoseres. 3) Ved kontinentkollisjon: Bergarter begraves, komprimeres og metamorfoseres (f.eks. fra leirstein til gneis). Fjellkjeder heves og eroderes, noe som produserer sedimenter. 4) Ved riftsoner: Kontinenter splittes, og ny skorpe dannes.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler i Del 2
// ============================================================================

export const GEOFAG_1_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_1_2_1,
  CHAPTER_GEOFAG_1_2_2,
  CHAPTER_GEOFAG_1_2_3,
  CHAPTER_GEOFAG_1_2_4,
  CHAPTER_GEOFAG_1_2_5,
];

export function getGeofag1Del2Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_DEL2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
