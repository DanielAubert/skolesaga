/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2
 *
 * Dekker LK20-kompetansemål for geofag 1 (GEO01-01)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Jordens system og sfærer
// ============================================================================

export const CHAPTER_GEOFAG_1_1: TextbookChapter = {
  id: 'geofag-1-1',
  courseId: 'geofag-1',
  chapterNumber: '1',
  title: 'Jordens system og sfærer',
  description: 'Jordens oppbygging, sfærene og samspillet mellom dem.',
  estimatedMinutes: 70,
  competenceGoals: [
    'beskrive jordens oppbygging og de ulike sfærene',
    'forklare samspillet mellom geosfæren, hydrosfæren, atmosfæren og biosfæren',
    'gjøre rede for energiflyt i jordsystemet',
  ],
  content: [
    {
      id: 'geo1-1-intro',
      type: 'text',
      content: `# Jordens system og sfærer

Jorden er et komplekst system der ulike deler samvirker. For å forstå hvordan planeten vår fungerer, deler vi den inn i sfærer.

## Jordens fire hovedsfærer

- **Geosfæren**: Den faste delen av jorden (bergarter, mineraler)
- **Hydrosfæren**: Alt vann på jorden (hav, innsjøer, is, grunnvann)
- **Atmosfæren**: Luftlaget rundt jorden
- **Biosfæren**: Alle levende organismer`,
    },
    {
      id: 'geo1-1-def-geosfaere',
      type: 'definition',
      title: 'Geosfæren',
      content: 'Geosfæren omfatter alle faste materialer på jorden, fra overflaten ned til kjernen. Den deles inn i jordskorpen, mantelen og kjernen.',
    },
    {
      id: 'geo1-1-oppbygging',
      type: 'text',
      content: `## Jordens indre oppbygging

### Jordskorpen
- Tykkelse: 5-70 km
- Kontinental skorpe (granittisk, 30-70 km)
- Oseanisk skorpe (basaltisk, 5-10 km)

### Mantelen
- Tykkelse: ca. 2900 km
- Øvre mantel (delvis smeltet, astenosfæren)
- Nedre mantel (fast)

### Kjernen
- Ytre kjerne: Flytende jern-nikkel (ca. 2200 km)
- Indre kjerne: Fast jern-nikkel (radius ca. 1200 km)`,
    },
    {
      id: 'geo1-1-def-litosfaere',
      type: 'definition',
      title: 'Litosfæren',
      content: 'Litosfæren er det stive ytre laget av jorden som omfatter jordskorpen og den øverste delen av mantelen. Den er delt inn i tektoniske plater som beveger seg på den plastiske astenosfæren.',
    },
    {
      id: 'geo1-1-samspill',
      type: 'text',
      content: `## Samspillet mellom sfærene

Sfærene påvirker hverandre kontinuerlig:

- **Vulkanutbrudd** (geosfære) sender gasser til atmosfæren
- **Nedbør** (atmosfære) eroderer fjell (geosfære)
- **Planter** (biosfære) tar opp CO₂ fra atmosfæren
- **Havet** (hydrosfære) regulerer klimaet gjennom varmelagring

Dette samspillet driver jordens prosesser og gjør planeten beboelig.`,
    },
    {
      id: 'geo1-1-example',
      type: 'example',
      title: 'Karbonkretsløpet',
      problem: 'Beskriv hvordan karbon beveger seg mellom de fire sfærene.',
      solution: `**Karbonkretsløpet:**

1. **Atmosfære → Biosfære**: Planter tar opp CO₂ gjennom fotosyntese
2. **Biosfære → Geosfære**: Døde organismer blir begravet og danner fossilt brensel
3. **Geosfære → Atmosfære**: Vulkaner frigjør CO₂
4. **Atmosfære → Hydrosfære**: CO₂ løses i havet
5. **Hydrosfære → Geosfære**: Kalksteinsavsetninger på havbunnen`,
    },
  ],
  exercises: [
    {
      id: 'geo1-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken sfære omfatter alt vann på jorden?',
      options: [
        { id: 'a', text: 'Hydrosfæren', isCorrect: true },
        { id: 'b', text: 'Atmosfæren', isCorrect: false },
        { id: 'c', text: 'Geosfæren', isCorrect: false },
        { id: 'd', text: 'Biosfæren', isCorrect: false },
      ],
      solution: 'Hydrosfæren omfatter alt vann i alle former: hav, innsjøer, elver, isbreer, grunnvann og vanndamp.',
    },
    {
      id: 'geo1-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom litosfæren og astenosfæren.',
      solution: 'Litosfæren er det stive ytre laget (skorpe + øvre mantel) som er delt i tektoniske plater. Astenosfæren er det plastiske laget under litosfæren der bergartene kan flyte sakte, noe som muliggjør platebevegelser.',
    },
    {
      id: 'geo1-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva består jordens indre kjerne av?',
      options: [
        { id: 'a', text: 'Fast jern og nikkel', isCorrect: true },
        { id: 'b', text: 'Flytende jern og nikkel', isCorrect: false },
        { id: 'c', text: 'Smeltet silikater', isCorrect: false },
        { id: 'd', text: 'Granitt', isCorrect: false },
      ],
      solution: 'Den indre kjernen er fast på grunn av det enorme trykket, selv om temperaturen er svært høy.',
    },
    {
      id: 'geo1-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi tre eksempler på samspill mellom geosfæren og atmosfæren.',
      solution: '1) Vulkanutbrudd frigjør gasser til atmosfæren. 2) Forvitring av bergarter binder CO₂. 3) Fjellkjeder påvirker nedbørsmønstre. 4) Erosjon fra vind former landskapet.',
    },
    {
      id: 'geo1-1-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor tykk er oseanisk jordskorpe typisk?',
      options: [
        { id: 'a', text: '5-10 km', isCorrect: true },
        { id: 'b', text: '30-70 km', isCorrect: false },
        { id: 'c', text: '100-200 km', isCorrect: false },
        { id: 'd', text: '2900 km', isCorrect: false },
      ],
      solution: 'Oseanisk skorpe er tynnere (5-10 km) men tettere enn kontinental skorpe (30-70 km).',
    },
  ],
};

// ============================================================================
// Kapittel 2: Bergarter og mineraler
// ============================================================================

export const CHAPTER_GEOFAG_1_2: TextbookChapter = {
  id: 'geofag-1-2',
  courseId: 'geofag-1',
  chapterNumber: '2',
  title: 'Bergarter og mineraler',
  description: 'De tre hovedtypene bergarter og bergartskretsløpet.',
  estimatedMinutes: 75,
  competenceGoals: [
    'identifisere og klassifisere bergarter og mineraler',
    'forklare dannelsen av magmatiske, sedimentære og metamorfe bergarter',
    'beskrive bergartskretsløpet',
  ],
  content: [
    {
      id: 'geo1-2-intro',
      type: 'text',
      content: `# Bergarter og mineraler

Bergarter er bygd opp av mineraler. Forståelse av bergarter er grunnleggende i geofag.

## Mineral vs. bergart

- **Mineral**: Naturlig forekommende, uorganisk fast stoff med definert kjemisk sammensetning og krystallstruktur
- **Bergart**: Aggregat av ett eller flere mineraler`,
    },
    {
      id: 'geo1-2-def-mineral',
      type: 'definition',
      title: 'Mineral',
      content: 'Et mineral er et naturlig forekommende, uorganisk fast stoff med definert kjemisk sammensetning og ordnet atomstruktur. Eksempler: kvarts (SiO₂), feltspat, glimmer.',
    },
    {
      id: 'geo1-2-magmatiske',
      type: 'text',
      content: `## Magmatiske bergarter

Dannes når smeltet bergart (magma/lava) størkner.

### Intrusive (dypbergarter)
- Størkner langsomt under overflaten
- Store krystaller
- Eksempler: **Granitt**, gabbro, dioritt

### Ekstrusive (dagbergarter)
- Størkner raskt på overflaten
- Små krystaller eller amorfe
- Eksempler: **Basalt**, ryolitt, obsidian`,
    },
    {
      id: 'geo1-2-sedimentaere',
      type: 'text',
      content: `## Sedimentære bergarter

Dannes ved avsetning og sammenpressing av sedimenter.

### Klastiske
- Fra forvitret materiale
- Eksempler: **Sandstein**, skifer, konglomerat

### Kjemiske
- Utfelt fra løsninger
- Eksempler: **Kalkstein**, steinsalt

### Biogene
- Fra organisk materiale
- Eksempler: Kull, noen kalksteiner`,
    },
    {
      id: 'geo1-2-metamorfe',
      type: 'text',
      content: `## Metamorfe bergarter

Dannes når eksisterende bergarter utsettes for høyt trykk og/eller temperatur.

- **Skifer** → **Gneis** (økende metamorfose)
- **Sandstein** → **Kvartsitt**
- **Kalkstein** → **Marmor**
- **Granitt** → **Gneis**`,
    },
    {
      id: 'geo1-2-def-kretslop',
      type: 'definition',
      title: 'Bergartskretsløpet',
      content: 'Bergartskretsløpet beskriver hvordan bergarter omdannes fra én type til en annen gjennom prosesser som smelting, størkniing, forvitring, erosjon, avsetning, begravelse og metamorfose.',
    },
    {
      id: 'geo1-2-example',
      type: 'example',
      title: 'Fra granitt til sandstein',
      problem: 'Beskriv hvordan granitt kan bli til sandstein.',
      solution: `**Prosessen:**
1. Granitt forvitrer ved overflaten (fysisk og kjemisk forvitring)
2. Kvartskorn løsner og transporteres av vann/vind
3. Kornene avsettes i bassenger (deltaer, hav)
4. Sedimentene begraves og komprimeres
5. Sementering (kvarts eller kalsitt binder kornene)
6. Resultatet er sandstein`,
    },
  ],
  exercises: [
    {
      id: 'geo1-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken bergart er en magmatisk dypbergart?',
      options: [
        { id: 'a', text: 'Granitt', isCorrect: true },
        { id: 'b', text: 'Basalt', isCorrect: false },
        { id: 'c', text: 'Sandstein', isCorrect: false },
        { id: 'd', text: 'Marmor', isCorrect: false },
      ],
      solution: 'Granitt dannes når magma størkner langsomt under overflaten, noe som gir store krystaller.',
    },
    {
      id: 'geo1-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom intrusive og ekstrusive bergarter.',
      solution: 'Intrusive bergarter størkner langsomt inne i jordskorpen, noe som gir tid til at store krystaller dannes. Ekstrusive bergarter størkner raskt på overflaten, noe som gir små krystaller eller glassaktig tekstur.',
    },
    {
      id: 'geo1-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken bergart dannes når kalkstein utsettes for høyt trykk og temperatur?',
      options: [
        { id: 'a', text: 'Marmor', isCorrect: true },
        { id: 'b', text: 'Gneis', isCorrect: false },
        { id: 'c', text: 'Kvartsitt', isCorrect: false },
        { id: 'd', text: 'Skifer', isCorrect: false },
      ],
      solution: 'Marmor er metamorf kalkstein. Kalsittkrystallene rekrystalliserer til større krystaller.',
    },
    {
      id: 'geo1-2-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Tegn og forklar bergartskretsløpet med alle hovedprosessene.',
      solution: 'Bergartskretsløpet: Magma → (størkiing) → Magmatisk bergart → (forvitring/erosjon) → Sedimenter → (komprimering/sementering) → Sedimentær bergart → (varme/trykk) → Metamorf bergart → (smelting) → Magma. Alle bergarter kan også smelte direkte eller forvitres.',
    },
    {
      id: 'geo1-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et mineral?',
      options: [
        { id: 'a', text: 'Et naturlig, uorganisk stoff med definert kjemisk sammensetning', isCorrect: true },
        { id: 'b', text: 'Enhver stein funnet i naturen', isCorrect: false },
        { id: 'c', text: 'Et aggregat av flere stoffer', isCorrect: false },
        { id: 'd', text: 'En organisk krystall', isCorrect: false },
      ],
      solution: 'Mineraler må være naturlige, uorganiske, faste, ha definert kjemisk sammensetning og ordnet atomstruktur.',
    },
  ],
};

// ============================================================================
// Kapittel 3: Platetektonikk
// ============================================================================

export const CHAPTER_GEOFAG_1_3: TextbookChapter = {
  id: 'geofag-1-3',
  courseId: 'geofag-1',
  chapterNumber: '3',
  title: 'Platetektonikk',
  description: 'Jordskorpens plater og deres bevegelser.',
  estimatedMinutes: 80,
  competenceGoals: [
    'forklare teorien om platetektonikk',
    'beskrive de ulike plategrensene og prosessene der',
    'gjøre rede for drivkreftene bak platebevegelser',
  ],
  content: [
    {
      id: 'geo1-3-intro',
      type: 'text',
      content: `# Platetektonikk

Platetektonikk er teorien som forklarer hvordan jordskorpen beveger seg. Litosfæren er delt inn i store plater som beveger seg på astenosfæren.

## Historisk bakgrunn

- **Alfred Wegener** (1912): Kontinentaldrift-teorien
- **1960-tallet**: Havbunnspredning oppdages
- Platetektonikk-teorien samler alle observasjoner`,
    },
    {
      id: 'geo1-3-def-plate',
      type: 'definition',
      title: 'Tektonisk plate',
      content: 'En tektonisk plate er et stort, stivt segment av litosfæren som beveger seg som en enhet over astenosfæren. Det finnes ca. 15 store plater og flere mindre.',
    },
    {
      id: 'geo1-3-plategrenser',
      type: 'text',
      content: `## Typer plategrenser

### Divergerende grenser (spredningsrygger)
- Platene beveger seg fra hverandre
- Ny havbunn dannes
- Eksempel: Midtatlanterhavets rygg

### Konvergerende grenser
- Platene beveger seg mot hverandre
- **Subduksjon**: Oseanisk plate dykker under en annen
- **Kollisjon**: To kontinentale plater møtes
- Eksempel: Himalaya, Andene

### Transform grenser
- Platene glir sidelengs forbi hverandre
- Eksempel: San Andreas-forkastningen`,
    },
    {
      id: 'geo1-3-def-subduksjon',
      type: 'definition',
      title: 'Subduksjon',
      content: 'Subduksjon er prosessen der en tektonisk plate dykker ned under en annen plate og synker ned i mantelen. Dette skjer typisk når en tyngre oseanisk plate møter en lettere kontinental plate.',
    },
    {
      id: 'geo1-3-drivkrefter',
      type: 'text',
      content: `## Drivkreftene bak platebevegelser

1. **Mantelkonveksjon**: Varmt materiale stiger, kjøler og synker
2. **Slab pull**: Subduserende plater drar resten med seg
3. **Ridge push**: Ny havbunn skyver platene fra hverandre

Slab pull regnes som den viktigste drivkraften.`,
    },
    {
      id: 'geo1-3-example',
      type: 'example',
      title: 'Dannelsen av Island',
      problem: 'Forklar hvordan Island ble dannet med platetektonikk.',
      solution: `**Islands dannelse:**

1. Island ligger på Midtatlanterhavets rygg - en divergerende plategrense
2. Den nordamerikanske og eurasiske platen beveger seg fra hverandre
3. Magma stiger opp og danner ny havbunn (og land over havnivå)
4. Island har også en varm flekk (hotspot) som gir ekstra vulkansk aktivitet
5. Øya vokser med ca. 2,5 cm/år (målt med GPS)`,
    },
  ],
  exercises: [
    {
      id: 'geo1-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kalles grensen der plater beveger seg fra hverandre?',
      options: [
        { id: 'a', text: 'Divergerende grense', isCorrect: true },
        { id: 'b', text: 'Konvergerende grense', isCorrect: false },
        { id: 'c', text: 'Transform grense', isCorrect: false },
        { id: 'd', text: 'Subduksjonsgrense', isCorrect: false },
      ],
      solution: 'Ved divergerende grenser beveger platene seg fra hverandre og ny skorpe dannes.',
    },
    {
      id: 'geo1-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva som skjer ved en subduksjonssone.',
      solution: 'Ved en subduksjonssone dykker en oseanisk plate ned under en annen plate. Den subduserende platen smelter delvis, noe som fører til vulkansk aktivitet. Det dannes en dyphavsgrav på havbunnen og ofte en vulkankjede på land (f.eks. Andene).',
    },
    {
      id: 'geo1-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken drivkraft regnes som viktigst for platebevegelser?',
      options: [
        { id: 'a', text: 'Slab pull', isCorrect: true },
        { id: 'b', text: 'Ridge push', isCorrect: false },
        { id: 'c', text: 'Jordrotasjon', isCorrect: false },
        { id: 'd', text: 'Tidevannskrefter', isCorrect: false },
      ],
      solution: 'Slab pull (trekket fra subduserende plater) regnes som den viktigste drivkraften fordi de kalde, tunge platene synker ned i mantelen.',
    },
    {
      id: 'geo1-3-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan Himalaya ble dannet.',
      solution: 'Himalaya ble dannet ved kollisjon mellom den indiske og eurasiske platen. India var opprinnelig del av Gondwana, men begynte å drive nordover. For ca. 50 millioner år siden kolliderte India med Asia. Siden begge er kontinentale plater, subduseres ingen - i stedet presses skorpen sammen og opp, og danner verdens høyeste fjellkjede.',
    },
    {
      id: 'geo1-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem foreslo teorien om kontinentaldrift?',
      options: [
        { id: 'a', text: 'Alfred Wegener', isCorrect: true },
        { id: 'b', text: 'Charles Darwin', isCorrect: false },
        { id: 'c', text: 'Isaac Newton', isCorrect: false },
        { id: 'd', text: 'Albert Einstein', isCorrect: false },
      ],
      solution: 'Alfred Wegener foreslo kontinentaldrift-teorien i 1912, men den ble først akseptert på 1960-tallet da man oppdaget havbunnspredning.',
    },
  ],
};

// ============================================================================
// Kapittel 4: Vulkaner og jordskjelv
// ============================================================================

export const CHAPTER_GEOFAG_1_4: TextbookChapter = {
  id: 'geofag-1-4',
  courseId: 'geofag-1',
  chapterNumber: '4',
  title: 'Vulkaner og jordskjelv',
  description: 'Vulkansk aktivitet, jordskjelv og deres sammenheng med platetektonikk.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forklare hvordan vulkaner og jordskjelv oppstår',
    'beskrive sammenhengen mellom vulkaner, jordskjelv og plategrenser',
    'vurdere naturfare knyttet til vulkaner og jordskjelv',
  ],
  content: [
    {
      id: 'geo1-4-intro',
      type: 'text',
      content: `# Vulkaner og jordskjelv

Vulkaner og jordskjelv er konsentrert langs plategrenser og gir oss informasjon om jordens indre.

## Ildringen

Ildringen (Ring of Fire) rundt Stillehavet har 75% av verdens aktive vulkaner og 90% av jordskjelvene.`,
    },
    {
      id: 'geo1-4-def-vulkan',
      type: 'definition',
      title: 'Vulkan',
      content: 'En vulkan er en åpning i jordskorpen der magma, gasser og aske kan komme ut. Vulkaner varierer fra rolige lavastrømmer til eksplosive utbrudd, avhengig av magmaens viskositet og gassinnhold.',
    },
    {
      id: 'geo1-4-vulkantyper',
      type: 'text',
      content: `## Vulkantyper

### Skjoldvulkaner
- Flate, brede vulkaner
- Tyntflytende basaltisk lava
- Eksempel: Hawaii, Island

### Stratovulkaner (keglevulkaner)
- Bratte sider, lagdelt
- Viskøs lava, eksplosive utbrudd
- Eksempel: Fuji, Vesuvius

### Calderavulkaner
- Store innsynkninger etter massive utbrudd
- Eksempel: Yellowstone`,
    },
    {
      id: 'geo1-4-jordskjelv',
      type: 'text',
      content: `## Jordskjelv

Jordskjelv oppstår når spenninger i jordskorpen utløses plutselig langs forkastninger.

### Begreper
- **Hyposenter/fokus**: Stedet der bruddet starter
- **Episenter**: Punktet på overflaten rett over hyposenteret
- **Magnitud**: Styrke (Richter-skala, momentmagnitud)
- **Intensitet**: Virkninger på overflaten (Mercalli-skala)`,
    },
    {
      id: 'geo1-4-def-seismisk',
      type: 'definition',
      title: 'Seismiske bølger',
      content: 'Seismiske bølger er energibølger som forplanter seg gjennom jorden. P-bølger (primære) er trykbølger som går raskest. S-bølger (sekundære) er skjærbølger som ikke går gjennom væske. Overflatebølger gjør mest skade.',
    },
    {
      id: 'geo1-4-example',
      type: 'example',
      title: 'Jordskjelvet i Japan 2011',
      problem: 'Analyser jordskjelvet og tsunamien i Japan 2011 med geofaglige begreper.',
      solution: `**Tohoku-jordskjelvet 11. mars 2011:**

- **Magnitud**: 9.1 (ett av de sterkeste registrert)
- **Type**: Subduksjonsjordskjelv
- **Årsak**: Stillehavsplaten subduserer under den nordamerikanske platen
- **Hyposenter**: 29 km dyp, 70 km fra kysten
- **Tsunami**: Havbunnen løftet seg plutselig, skapte bølger opp til 40 m
- **Konsekvenser**: Fukushima-ulykken, over 18 000 døde`,
    },
  ],
  exercises: [
    {
      id: 'geo1-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken vulkantype har Hawaii?',
      options: [
        { id: 'a', text: 'Skjoldvulkan', isCorrect: true },
        { id: 'b', text: 'Stratovulkan', isCorrect: false },
        { id: 'c', text: 'Calderavulkan', isCorrect: false },
        { id: 'd', text: 'Keglevulkan', isCorrect: false },
      ],
      solution: 'Hawaii har skjoldvulkaner med tyntflytende basaltisk lava som sprer seg utover og danner flate, brede vulkaner.',
    },
    {
      id: 'geo1-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom hyposenter og episenter.',
      solution: 'Hyposenteret (fokus) er det punktet inne i jorden der bruddet starter og jordskjelvet oppstår. Episenteret er punktet på jordoverflaten rett over hyposenteret. Episenteret er der skadene ofte er størst.',
    },
    {
      id: 'geo1-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke seismiske bølger kan ikke gå gjennom væske?',
      options: [
        { id: 'a', text: 'S-bølger', isCorrect: true },
        { id: 'b', text: 'P-bølger', isCorrect: false },
        { id: 'c', text: 'Overflatebølger', isCorrect: false },
        { id: 'd', text: 'Alle bølger kan gå gjennom væske', isCorrect: false },
      ],
      solution: 'S-bølger (skjærbølger) kan bare gå gjennom faste stoffer fordi væsker ikke har skjærstyrke. Dette er beviset for at jordens ytre kjerne er flytende.',
    },
    {
      id: 'geo1-4-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor Ildringen har så mange vulkaner og jordskjelv.',
      solution: 'Ildringen følger kanten av Stillehavsplaten som subduseres under omkringliggende plater. Subduksjonen skaper: 1) Jordskjelv når platene glir forbi hverandre. 2) Vulkaner når den subduserende platen smelter og magma stiger opp. Dette gir et belte av vulkankjeder og dyphavsgaver rundt Stillehavet.',
    },
    {
      id: 'geo1-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva måler Richter-skalaen?',
      options: [
        { id: 'a', text: 'Jordskjelvets magnitud', isCorrect: true },
        { id: 'b', text: 'Jordskjelvets intensitet', isCorrect: false },
        { id: 'c', text: 'Dybden til hyposenteret', isCorrect: false },
        { id: 'd', text: 'Tsunamiens høyde', isCorrect: false },
      ],
      solution: 'Richter-skalaen (og den mer moderne momentmagnitud-skalaen) måler jordskjelvets styrke basert på energien som frigjøres.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Forvitring og erosjon
// ============================================================================

export const CHAPTER_GEOFAG_1_5: TextbookChapter = {
  id: 'geofag-1-5',
  courseId: 'geofag-1',
  chapterNumber: '5',
  title: 'Forvitring og erosjon',
  description: 'Nedbrytning av bergarter og transport av materiale.',
  estimatedMinutes: 70,
  competenceGoals: [
    'beskrive fysisk, kjemisk og biologisk forvitring',
    'forklare erosjon og sedimenttransport',
    'vurdere betydningen av forvitring for jordsmonnsdannelse',
  ],
  content: [
    {
      id: 'geo1-5-intro',
      type: 'text',
      content: `# Forvitring og erosjon

Forvitring og erosjon bryter ned bergarter og former landskapet over tid.

## Forvitring vs. erosjon

- **Forvitring**: Nedbrytning av bergarter på stedet
- **Erosjon**: Transport av løsmaterialet bort`,
    },
    {
      id: 'geo1-5-def-forvitring',
      type: 'definition',
      title: 'Forvitring',
      content: 'Forvitring er nedbrytning av bergarter og mineraler ved overflaten gjennom fysiske, kjemiske eller biologiske prosesser. Forvitring skjer på stedet, uten transport av materiale.',
    },
    {
      id: 'geo1-5-fysisk',
      type: 'text',
      content: `## Fysisk (mekanisk) forvitring

### Frostsprengning
- Vann trenger inn i sprekker
- Fryser og utvider seg 9%
- Sprenger bergarten fra innsiden
- Viktig i Norge!

### Termisk utvidelse
- Oppvarming og avkjøling
- Forskjellige mineraler utvider seg ulikt
- Skallforvitring

### Trykkavlastning
- Bergarter dannet under trykk
- Når overliggende lag eroderes, ekspanderer de
- Gir horisontale sprekker`,
    },
    {
      id: 'geo1-5-kjemisk',
      type: 'text',
      content: `## Kjemisk forvitring

### Hydrolyse
- Vann reagerer med mineraler
- Feltspat → leirmineraler

### Oksidasjon
- Jernholdige mineraler ruster
- Gir rødbrune farger

### Oppløsning
- Kalkstein løses i surt vann
- CO₂ + H₂O + CaCO₃ → Ca(HCO₃)₂

### Karbonatforvitring
- Svak syre fra CO₂ i regn
- Angriper kalkrike bergarter`,
    },
    {
      id: 'geo1-5-def-erosjon',
      type: 'definition',
      title: 'Erosjon',
      content: 'Erosjon er prosessen der forvitret materiale fjernes og transporteres av vann, is, vind eller tyngdekraft. Erosjon graver ut daler, flytter sedimenter og former landskapet.',
    },
    {
      id: 'geo1-5-example',
      type: 'example',
      title: 'Dannelse av norske fjorder',
      problem: 'Hvordan ble de norske fjordene dannet?',
      solution: `**Fjorddannelse:**

1. Elver grov ut daler i preglasialt landskap
2. Isbreer i istidene utvidet dalene enormt
3. **Glasial erosjon**:
   - Plukking: Is fryser fast i berg og river løs
   - Abrasjon: Steiner i isen sliper bunnen
4. Fjordene ble gravd under havnivå
5. Etter istiden fyltes de med sjøvann
6. Terskel ved munningen (isen var tynnere der)`,
    },
  ],
  exercises: [
    {
      id: 'geo1-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedårsaken til frostsprengning?',
      options: [
        { id: 'a', text: 'Vann utvider seg når det fryser', isCorrect: true },
        { id: 'b', text: 'Is er tyngre enn vann', isCorrect: false },
        { id: 'c', text: 'Frost gjør bergarter myke', isCorrect: false },
        { id: 'd', text: 'Temperaturen synker', isCorrect: false },
      ],
      solution: 'Vann utvider seg med ca. 9% når det fryser. I sprekker i berg skaper dette et enormt trykk som sprenger bergarten.',
    },
    {
      id: 'geo1-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi tre eksempler på kjemisk forvitring.',
      solution: '1) Hydrolyse - vann reagerer med feltspat og danner leirmineraler. 2) Oksidasjon - jernholdige mineraler ruster. 3) Oppløsning - kalkstein løses i surt vann (karstprosesser). 4) Karbonatforvitring - CO₂ i regn danner svak syre.',
    },
    {
      id: 'geo1-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken prosess løser opp kalkstein?',
      options: [
        { id: 'a', text: 'Oppløsning i surt vann', isCorrect: true },
        { id: 'b', text: 'Frostsprengning', isCorrect: false },
        { id: 'c', text: 'Oksidasjon', isCorrect: false },
        { id: 'd', text: 'Trykkavlastning', isCorrect: false },
      ],
      solution: 'Kalkstein (CaCO₃) løses i surt vann som dannes når CO₂ reagerer med regnvann. Dette skaper karstlandskap med huler.',
    },
    {
      id: 'geo1-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom forvitring og erosjon.',
      solution: 'Forvitring er nedbrytning av bergarter på stedet gjennom fysiske, kjemiske eller biologiske prosesser. Erosjon er transport av det forvitrede materialet bort fra stedet, utført av vann, is, vind eller tyngdekraft.',
    },
    {
      id: 'geo1-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type forvitring er viktigst i Norge?',
      options: [
        { id: 'a', text: 'Frostsprengning', isCorrect: true },
        { id: 'b', text: 'Termisk forvitring', isCorrect: false },
        { id: 'c', text: 'Oksidasjon', isCorrect: false },
        { id: 'd', text: 'Saltsprengning', isCorrect: false },
      ],
      solution: 'Norge har mange fryse-tine-sykluser som gjør frostsprengning til den viktigste forvitringsprosessen, spesielt i fjellet.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Landformer og landskapsutvikling
// ============================================================================

export const CHAPTER_GEOFAG_1_6: TextbookChapter = {
  id: 'geofag-1-6',
  courseId: 'geofag-1',
  chapterNumber: '6',
  title: 'Landformer og landskapsutvikling',
  description: 'Ulike landformer og prosessene som skaper dem.',
  estimatedMinutes: 75,
  competenceGoals: [
    'identifisere og forklare ulike landformer',
    'beskrive glasiale, fluviale og marine landformer',
    'gjøre rede for Norges landskapsutvikling',
  ],
  content: [
    {
      id: 'geo1-6-intro',
      type: 'text',
      content: `# Landformer og landskapsutvikling

Landformer er resultatet av samspillet mellom indre krefter (tektonikk) og ytre krefter (erosjon, forvitring).

## Landformende prosesser

- **Glasiale**: Formet av isbreer
- **Fluviale**: Formet av rennende vann
- **Marine**: Formet av havet
- **Eoliske**: Formet av vind`,
    },
    {
      id: 'geo1-6-def-glasial',
      type: 'definition',
      title: 'Glasiale landformer',
      content: 'Glasiale landformer er skapt av isbreer. Erosjonsformer inkluderer botner, egger, tinder, U-daler og fjorder. Avsetningsformer inkluderer morener, esker og druminer.',
    },
    {
      id: 'geo1-6-glasiale',
      type: 'text',
      content: `## Glasiale landformer

### Erosjonsformer
- **Botn**: Sirkelformet fordypning der isen starter
- **Tind/egg**: Skarpe topper mellom botner
- **U-dal**: Bred dal med bratte sider
- **Fjord**: Druknet U-dal

### Avsetningsformer
- **Morener**: Usortert materiale fra isen
- **Esker**: Lange rygger av sortert grus
- **Drumliner**: Strømlinjeformede hauger`,
    },
    {
      id: 'geo1-6-fluviale',
      type: 'text',
      content: `## Fluviale landformer

### Erosjonsformer
- **V-dal**: Elveerosjon skaper V-form
- **Juv/canyon**: Dyp, trang kløft
- **Meandre**: Buktende elveløp

### Avsetningsformer
- **Elvedelta**: Avsetning der elv møter stillestående vann
- **Elveslette**: Flat avsetningsslette langs elv
- **Vifte**: Avsetning der bratt dal flater ut`,
    },
    {
      id: 'geo1-6-def-morene',
      type: 'definition',
      title: 'Morene',
      content: 'Morene er materiale (fra leire til store blokker) som er transportert og avsatt av en isbre. Morene er typisk usortert, i motsetning til elveavsetninger. Typer: endemorene, sidemorene, bunnmorene.',
    },
    {
      id: 'geo1-6-example',
      type: 'example',
      title: 'Tolke norsk landskap',
      problem: 'Hvordan kan du se at et norsk landskap har vært dekket av is?',
      solution: `**Tegn på glasial påvirkning:**

1. **Dalformer**: U-daler med flat bunn og bratte sider
2. **Skuringsstriper**: Parallelle riper i berget
3. **Rundsva**: Avrundede bergknauser (strie på lee-siden)
4. **Flyttblokker**: Store steiner transportert av is
5. **Morener**: Hauger og rygger av usortert materiale
6. **Fjorder**: Dype, langstrakte havbukter
7. **Botner og tinder**: Alpine fjellformer`,
    },
  ],
  exercises: [
    {
      id: 'geo1-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken dalform skapes av isbreer?',
      options: [
        { id: 'a', text: 'U-dal', isCorrect: true },
        { id: 'b', text: 'V-dal', isCorrect: false },
        { id: 'c', text: 'Riftdal', isCorrect: false },
        { id: 'd', text: 'Canyon', isCorrect: false },
      ],
      solution: 'Isbreer graver ut brede U-daler med flat bunn og bratte sider, i motsetning til elver som skaper V-daler.',
    },
    {
      id: 'geo1-6-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hvordan en botn dannes.',
      solution: 'En botn dannes ved toppen av en isbre der snø akkumuleres. Is fryser i sprekker i fjellet og river løs materiale (plukking). Over tid graves en sirkelformet fordypning ut. Når isen smelter, kan det bli et lite vann (botntjern) i fordypningen.',
    },
    {
      id: 'geo1-6-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en esker?',
      options: [
        { id: 'a', text: 'En lang rygg av sortert grus avsatt i tunnel under isen', isCorrect: true },
        { id: 'b', text: 'En sirkelformet fordypning i fjellet', isCorrect: false },
        { id: 'c', text: 'En usortert haug av morenemateriale', isCorrect: false },
        { id: 'd', text: 'En strømlinjeformet haug formet av is', isCorrect: false },
      ],
      solution: 'Eskere dannes i smeltevanntunneler under isbreen. Sortert sand og grus avsettes og danner lange, smale rygger når isen smelter.',
    },
    {
      id: 'geo1-6-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar forskjellen mellom glasiale erosjons- og avsetningsformer.',
      solution: 'Erosjonsformer dannes der isen graver i fjellet (botner, U-daler, fjorder, skuringsstriper). Avsetningsformer dannes der isen legger fra seg materiale (morener, esker, drumliner). Erosjon dominerer i fjellet, avsetning dominerer i lavlandet.',
    },
    {
      id: 'geo1-6-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken landform dannes der en elv møter havet?',
      options: [
        { id: 'a', text: 'Delta', isCorrect: true },
        { id: 'b', text: 'Fjord', isCorrect: false },
        { id: 'c', text: 'Botn', isCorrect: false },
        { id: 'd', text: 'Morene', isCorrect: false },
      ],
      solution: 'Et delta dannes når elven mister fart ved havet og avsetter sedimentene den har transportert.',
    },
  ],
};

// ============================================================================
// Kapittel 7: Klima og klimasoner
// ============================================================================

export const CHAPTER_GEOFAG_1_7: TextbookChapter = {
  id: 'geofag-1-7',
  courseId: 'geofag-1',
  chapterNumber: '7',
  title: 'Klima og klimasoner',
  description: 'Jordens klimasystem og faktorer som påvirker klima.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare faktorene som bestemmer klima',
    'beskrive jordens hovedklimasoner',
    'gjøre rede for naturlige klimavariasjoner',
  ],
  content: [
    {
      id: 'geo1-7-intro',
      type: 'text',
      content: `# Klima og klimasoner

Klima er gjennomsnittlig vær over lang tid (minst 30 år). Klima bestemmes av mange faktorer.

## Klima vs. vær

- **Vær**: Atmosfærens tilstand akkurat nå
- **Klima**: Gjennomsnittlig vær over tid`,
    },
    {
      id: 'geo1-7-def-klima',
      type: 'definition',
      title: 'Klima',
      content: 'Klima er det statistiske gjennomsnittet av værforhold på et sted over en lengre periode (vanligvis 30 år). Klima inkluderer temperatur, nedbør, vind og andre meteorologiske variabler.',
    },
    {
      id: 'geo1-7-faktorer',
      type: 'text',
      content: `## Klimafaktorer

### Breddegrad
- Viktigste faktor
- Solvinkel og dagslengde
- Tropisk → Polar

### Høyde over havet
- 0.6°C kaldere per 100 m
- Fjellklima

### Nærhet til hav
- Maritimt klima: Milde vintre, kjølige somre
- Kontinentalt klima: Kalde vintre, varme somre

### Havstrømmer
- Golfstrømmen varmer Norge
- Kalde strømmer kjøler

### Terreng
- Regnskygge på le-siden av fjell`,
    },
    {
      id: 'geo1-7-soner',
      type: 'text',
      content: `## Klimasoner

### Tropisk klima (0-23.5°)
- Varmt hele året
- Mye nedbør
- Regnskoger, savanner

### Subtropisk/temperert (23.5-66.5°)
- Fire årstider
- Variabel nedbør
- Løvskoger, stepper

### Polar/arktisk (66.5-90°)
- Kaldt hele året
- Lite nedbør
- Tundra, isørken`,
    },
    {
      id: 'geo1-7-def-regnskygge',
      type: 'definition',
      title: 'Regnskygge',
      content: 'Regnskygge er et tørt område på le-siden av et fjell. Fuktig luft stiger på lo-siden, avkjøles og gir nedbør. Den tørre luften synker ned på le-siden og gir lite nedbør.',
    },
    {
      id: 'geo1-7-example',
      type: 'example',
      title: 'Norges klimavariasjoner',
      problem: 'Forklar hvorfor Vestlandet er våtere enn Østlandet.',
      solution: `**Klimaforskjeller i Norge:**

1. Vestlandet ligger i lo for fuktige vestlige vinder
2. Luften presses opp over fjellene (orografisk løfting)
3. Avkjøling gir kondensasjon og nedbør på Vestlandet
4. Luften er tørr når den synker ned på Østlandet (regnskygge)
5. Bergen får ca. 2250 mm/år, Oslo ca. 800 mm/år
6. Golfstrømmen gir milde vintre på kysten`,
    },
  ],
  exercises: [
    {
      id: 'geo1-7-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den viktigste faktoren som bestemmer klima?',
      options: [
        { id: 'a', text: 'Breddegrad', isCorrect: true },
        { id: 'b', text: 'Høyde over havet', isCorrect: false },
        { id: 'c', text: 'Nærhet til hav', isCorrect: false },
        { id: 'd', text: 'Havstrømmer', isCorrect: false },
      ],
      solution: 'Breddegraden bestemmer solvinkel og dagslengde, som er de viktigste faktorene for temperaturen på et sted.',
    },
    {
      id: 'geo1-7-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom maritimt og kontinentalt klima.',
      solution: 'Maritimt klima (nær hav) har milde vintre og kjølige somre fordi havet lagrer varme og jevner ut temperaturen. Kontinentalt klima (langt fra hav) har kalde vintre og varme somre fordi land varmes og kjøles raskere enn vann.',
    },
    {
      id: 'geo1-7-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mye synker temperaturen per 100 meters høyde?',
      options: [
        { id: 'a', text: 'Ca. 0.6°C', isCorrect: true },
        { id: 'b', text: 'Ca. 1.0°C', isCorrect: false },
        { id: 'c', text: 'Ca. 0.3°C', isCorrect: false },
        { id: 'd', text: 'Ca. 2.0°C', isCorrect: false },
      ],
      solution: 'Temperaturen synker med ca. 0.6°C per 100 meter høydeøkning i troposfæren.',
    },
    {
      id: 'geo1-7-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er regnskygge og hvordan oppstår det?',
      solution: 'Regnskygge er et tørt område på le-siden av fjell. Fuktig luft tvinges opp på lo-siden, avkjøles og gir nedbør. Når luften synker ned på le-siden, varmes den opp og blir tørrere. Eksempel: Østlandet ligger i regnskygge av fjellene.',
    },
    {
      id: 'geo1-7-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken havstrøm varmer Norges kyst?',
      options: [
        { id: 'a', text: 'Golfstrømmen', isCorrect: true },
        { id: 'b', text: 'Labradorstrømmen', isCorrect: false },
        { id: 'c', text: 'Humboldtstrømmen', isCorrect: false },
        { id: 'd', text: 'Benguelastrømmen', isCorrect: false },
      ],
      solution: 'Golfstrømmen transporterer varmt vann fra tropene til Norges kyst og gir mildere klima enn breddegraden skulle tilsi.',
    },
  ],
};

// ============================================================================
// Kapittel 8: Vær og værsystemer
// ============================================================================

export const CHAPTER_GEOFAG_1_8: TextbookChapter = {
  id: 'geofag-1-8',
  courseId: 'geofag-1',
  chapterNumber: '8',
  title: 'Vær og værsystemer',
  description: 'Atmosfæren, værfenomener og værvarsling.',
  estimatedMinutes: 70,
  competenceGoals: [
    'beskrive atmosfærens oppbygging',
    'forklare dannelsen av vær- og lavtrykk',
    'tolke værkart og forstå værvarsling',
  ],
  content: [
    {
      id: 'geo1-8-intro',
      type: 'text',
      content: `# Vær og værsystemer

Været bestemmes av atmosfærens tilstand og bevegelser.

## Atmosfærens lag

- **Troposfæren** (0-12 km): Alt vær skjer her
- **Stratosfæren** (12-50 km): Ozonlaget
- **Mesosfæren** (50-80 km): Meteorbrann
- **Termosfæren** (80-700 km): Nordlys`,
    },
    {
      id: 'geo1-8-def-troposfare',
      type: 'definition',
      title: 'Troposfæren',
      content: 'Troposfæren er det nederste laget av atmosfæren, fra overflaten til ca. 12 km høyde. Her skjer alt vær, og temperaturen synker med høyden. Troposfæren inneholder 80% av atmosfærens masse.',
    },
    {
      id: 'geo1-8-trykksystemer',
      type: 'text',
      content: `## Høytrykk og lavtrykk

### Høytrykk (H)
- Synkende, tørkende luft
- Stabil, fint vær
- Vind ut fra senteret (medurs på N-halvkulen)

### Lavtrykk (L)
- Stigende luft, avkjøling, skyer
- Ustabilt vær, nedbør
- Vind inn mot senteret (moturs på N-halvkulen)`,
    },
    {
      id: 'geo1-8-fronter',
      type: 'text',
      content: `## Fronter

### Varmfront
- Varm luft glir over kald
- Gradvis skydekke, langvarig nedbør
- Symbol: Halvsirkler

### Kaldfront
- Kald luft presser under varm
- Brattere, kraftigere nedbør, bygevær
- Symbol: Trekanter

### Okklusjon
- Kaldfront tar igjen varmfront
- Kombinasjon av begge`,
    },
    {
      id: 'geo1-8-def-front',
      type: 'definition',
      title: 'Front',
      content: 'En front er grenseflaten mellom to luftmasser med ulik temperatur og fuktighet. Ved fronter oppstår skyer og nedbør fordi varm luft tvinges til å stige over eller foran kald luft.',
    },
    {
      id: 'geo1-8-example',
      type: 'example',
      title: 'Tolke værkart',
      problem: 'Hva slags vær kan vi vente oss i Bergen når et lavtrykk med fronter nærmer seg?',
      solution: `**Værutvikling:**

1. **Før varmfronten**: Høye skyer (cirrus), synkende lufttrykk
2. **Ved varmfronten**: Regn, økende temperatur, vind
3. **I varmsektoren**: Mildere, oppholdsvær, fuktig
4. **Ved kaldfronten**: Kraftig regn/byger, temperaturfall
5. **Etter kaldfronten**: Oppklaring, kjøligere, vindendring

Bergen får typisk mye nedbør fra frontpassasjer fra vest.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-8-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'I hvilket atmosfærelag skjer alt vær?',
      options: [
        { id: 'a', text: 'Troposfæren', isCorrect: true },
        { id: 'b', text: 'Stratosfæren', isCorrect: false },
        { id: 'c', text: 'Mesosfæren', isCorrect: false },
        { id: 'd', text: 'Termosfæren', isCorrect: false },
      ],
      solution: 'Troposfæren er det nederste laget der temperaturen synker med høyden, noe som gir ustabilitet og skydannelse.',
    },
    {
      id: 'geo1-8-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom høytrykk og lavtrykk.',
      solution: 'I et høytrykk synker luften, varmes opp og tørker ut - gir stabilt, fint vær. I et lavtrykk stiger luften, avkjøles og kondenserer - gir skyer og nedbør. Vind blåser fra høytrykk til lavtrykk.',
    },
    {
      id: 'geo1-8-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken front gir typisk kraftig, kortvarig nedbør?',
      options: [
        { id: 'a', text: 'Kaldfront', isCorrect: true },
        { id: 'b', text: 'Varmfront', isCorrect: false },
        { id: 'c', text: 'Okklusjon', isCorrect: false },
        { id: 'd', text: 'Stasjonær front', isCorrect: false },
      ],
      solution: 'Kaldfronten har brattere helning og gir raskere løfting av luften, noe som gir kraftigere, men kortere nedbør.',
    },
    {
      id: 'geo1-8-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er en okklusjon?',
      solution: 'En okklusjon oppstår når en kaldfront tar igjen en varmfront i et lavtrykk. Den varme luften løftes helt opp fra bakken. Det gir en kombinasjon av værtypene fra begge fronter.',
    },
    {
      id: 'geo1-8-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken retning roterer vinden rundt et lavtrykk på den nordlige halvkulen?',
      options: [
        { id: 'a', text: 'Mot klokken (moturs)', isCorrect: true },
        { id: 'b', text: 'Med klokken (medurs)', isCorrect: false },
        { id: 'c', text: 'Rett inn mot senteret', isCorrect: false },
        { id: 'd', text: 'Rett ut fra senteret', isCorrect: false },
      ],
      solution: 'Corioliseffekten avbøyer vinden mot høyre på nordlige halvkule, noe som gir moturs rotasjon rundt lavtrykk.',
    },
  ],
};

// ============================================================================
// Kapittel 9: Hydrologi og vannkretsløpet
// ============================================================================

export const CHAPTER_GEOFAG_1_9: TextbookChapter = {
  id: 'geofag-1-9',
  courseId: 'geofag-1',
  chapterNumber: '9',
  title: 'Hydrologi og vannkretsløpet',
  description: 'Vannets kretsløp og grunnvann.',
  estimatedMinutes: 70,
  competenceGoals: [
    'beskrive vannkretsløpet og dets deler',
    'forklare grunnvannsdannelse og akvifertyper',
    'vurdere vannressurser og bærekraftig bruk',
  ],
  content: [
    {
      id: 'geo1-9-intro',
      type: 'text',
      content: `# Hydrologi og vannkretsløpet

Hydrologi er læren om vannets bevegelse på, over og under jordoverflaten.

## Vannets fordeling

- Hav: 97.5%
- Ferskvann: 2.5%
  - Is/breer: 69%
  - Grunnvann: 30%
  - Innsjøer/elver: 1%`,
    },
    {
      id: 'geo1-9-def-vannkretslop',
      type: 'definition',
      title: 'Vannkretsløpet',
      content: 'Vannkretsløpet er den kontinuerlige sirkulasjonen av vann mellom hav, atmosfære og land gjennom fordampning, kondensasjon, nedbør, avrenning og infiltrasjon.',
    },
    {
      id: 'geo1-9-prosesser',
      type: 'text',
      content: `## Prosesser i vannkretsløpet

### Fordampning (evaporasjon)
- Vann blir til vanndamp
- Størst fra havoverflaten

### Transpirasjon
- Fordampning fra planter
- Viktig del av vannbudsjettet

### Kondensasjon
- Vanndamp blir til dråper
- Skydannelse

### Nedbør
- Regn, snø, sludd, hagl

### Avrenning
- Overflateavrenning til elver
- Til slutt tilbake til havet

### Infiltrasjon
- Vann synker ned i jorda
- Danner grunnvann`,
    },
    {
      id: 'geo1-9-grunnvann',
      type: 'text',
      content: `## Grunnvann

### Begreper
- **Grunnvannsspeil**: Øverste grense av mettet sone
- **Akvifer**: Vannførende lag (sand, grus)
- **Akviklude**: Vanntett lag (leire)
- **Artesisk brønn**: Trykkforskjell gir naturlig oppstigning

### Typer akviferer
- **Fri akvifer**: Grunnvannsspeilet kan stige og synke
- **Spent akvifer**: Vannet er under trykk mellom tette lag`,
    },
    {
      id: 'geo1-9-def-akvifer',
      type: 'definition',
      title: 'Akvifer',
      content: 'En akvifer er et vannførende geologisk lag som kan lagre og transportere grunnvann. Gode akviferer har høy porøsitet (plass til vann) og permeabilitet (vann kan bevege seg).',
    },
    {
      id: 'geo1-9-example',
      type: 'example',
      title: 'Grunnvannsforurensning',
      problem: 'Hvordan kan forurensning spre seg i grunnvannet?',
      solution: `**Spredning av forurensning:**

1. Forurensning (f.eks. fra en lekkasje) synker ned gjennom umettet sone
2. Når den når grunnvannsspeilet, sprer den seg horisontalt
3. Forurensningen transporteres med grunnvannsstrømmen
4. **Strømningsretning**: Fra høyt til lavt grunnvannsnivå
5. **Hastighet**: Avhenger av permeabilitet (cm/dag til m/dag)
6. **Konsekvens**: Kan forurense drikkevannsbrønner nedstrøms`,
    },
  ],
  exercises: [
    {
      id: 'geo1-9-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mye av jordens vann er ferskvann?',
      options: [
        { id: 'a', text: 'Ca. 2.5%', isCorrect: true },
        { id: 'b', text: 'Ca. 25%', isCorrect: false },
        { id: 'c', text: 'Ca. 50%', isCorrect: false },
        { id: 'd', text: 'Ca. 10%', isCorrect: false },
      ],
      solution: 'Bare 2.5% av jordens vann er ferskvann, og mesteparten av dette er bundet i isbreer.',
    },
    {
      id: 'geo1-9-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hovedprosessene i vannkretsløpet.',
      solution: 'Fordampning fra hav og land (inkludert transpirasjon fra planter) sender vann til atmosfæren. Kondensasjon danner skyer. Nedbør faller som regn eller snø. Vann returnerer til havet via avrenning i elver, eller infiltrerer ned til grunnvannet.',
    },
    {
      id: 'geo1-9-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en akvifer?',
      options: [
        { id: 'a', text: 'Et vannførende geologisk lag', isCorrect: true },
        { id: 'b', text: 'Et vanntett lag', isCorrect: false },
        { id: 'c', text: 'Grunnvannsspeilet', isCorrect: false },
        { id: 'd', text: 'En type brønn', isCorrect: false },
      ],
      solution: 'En akvifer er et lag med porøse bergarter eller sedimenter som kan lagre og transportere grunnvann.',
    },
    {
      id: 'geo1-9-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom fri og spent akvifer.',
      solution: 'En fri akvifer har grunnvannsspeil som kan stige og synke fritt, bare begrenset av nedbør og uttak. En spent akvifer er inneklemt mellom vanntette lag (akvikluder), og vannet er under trykk. Boring inn i en spent akvifer kan gi artesisk brønn der vannet stiger av seg selv.',
    },
    {
      id: 'geo1-9-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kalles fordampning fra planter?',
      options: [
        { id: 'a', text: 'Transpirasjon', isCorrect: true },
        { id: 'b', text: 'Evaporasjon', isCorrect: false },
        { id: 'c', text: 'Kondensasjon', isCorrect: false },
        { id: 'd', text: 'Infiltrasjon', isCorrect: false },
      ],
      solution: 'Transpirasjon er fordampning av vann fra plantenes blader, en viktig del av vannkretsløpet.',
    },
  ],
};

// ============================================================================
// Kapittel 10: Geofaglige undersøkelser
// ============================================================================

export const CHAPTER_GEOFAG_1_10: TextbookChapter = {
  id: 'geofag-1-10',
  courseId: 'geofag-1',
  chapterNumber: '10',
  title: 'Geofaglige undersøkelser',
  description: 'Feltarbeid, kart og geografiske informasjonssystemer.',
  estimatedMinutes: 70,
  competenceGoals: [
    'planlegge og gjennomføre feltarbeid',
    'bruke kart og digitale verktøy i geofag',
    'vurdere usikkerhet i geofaglige data',
  ],
  content: [
    {
      id: 'geo1-10-intro',
      type: 'text',
      content: `# Geofaglige undersøkelser

Geofag er et praktisk fag der feltarbeid og observasjoner er sentrale.

## Vitenskapelig metode i geofag

1. Observasjon/spørsmål
2. Hypotese
3. Datainnsamling (feltarbeid)
4. Analyse
5. Konklusjon`,
    },
    {
      id: 'geo1-10-def-feltarbeid',
      type: 'definition',
      title: 'Feltarbeid',
      content: 'Feltarbeid er innsamling av data og observasjoner ute i naturen. I geofag kan dette inkludere bergartsprøver, målinger av vann/vær, kartlegging av landformer og GPS-registreringer.',
    },
    {
      id: 'geo1-10-kart',
      type: 'text',
      content: `## Kart og kartanalyse

### Topografiske kart
- Viser terreng med høydekurver
- Ekvidistanse: Høydeforskjell mellom kurver
- Tette kurver = bratt terreng

### Geologiske kart
- Viser bergarter og strukturer
- Fargekoder for bergarttyper
- Symboler for strukturer

### Tematiske kart
- Spesifikke tema (f.eks. løsmasser, grunnvann)`,
    },
    {
      id: 'geo1-10-gis',
      type: 'text',
      content: `## GIS - Geografiske informasjonssystemer

GIS er digitale verktøy for å lagre, analysere og visualisere geografiske data.

### Funksjoner
- **Lagdeling**: Kombinere ulike datatyper
- **Analyse**: Beregne avstander, arealer, helning
- **Visualisering**: Lage kart og 3D-modeller

### Eksempler
- NGU sine kart (geologi, løsmasser)
- NVE sine kart (flom, skred)
- Kartverket (topografi)`,
    },
    {
      id: 'geo1-10-def-gis',
      type: 'definition',
      title: 'GIS',
      content: 'GIS (Geografiske informasjonssystemer) er digitale systemer for å samle inn, lagre, analysere og presentere geografiske data. Data organiseres i lag som kan kombineres for analyse.',
    },
    {
      id: 'geo1-10-example',
      type: 'example',
      title: 'Planlegge en ekskursjon',
      problem: 'Hvordan planlegger du en geofaglig ekskursjon for å studere bergarter?',
      solution: `**Planlegging av ekskursjon:**

1. **Forarbeid**:
   - Studer geologisk kart over området
   - Identifiser interessante lokaliteter (ulike bergarter, strukturer)
   - Sjekk tilgjengelighet og sikkerhet

2. **Utstyr**:
   - Geologisk hammer, lupe, saltsyre
   - Kart, kompass, GPS
   - Feltbok, prøveposer, kamera

3. **I felt**:
   - Noter lokalitet (koordinater)
   - Beskriv bergart (farge, tekstur, mineraler)
   - Ta prøver og bilder
   - Mål orientering av strukturer

4. **Etterarbeid**:
   - Bestem bergarter (evt. laboratorium)
   - Sammenlign med geologisk kart
   - Skriv rapport`,
    },
  ],
  exercises: [
    {
      id: 'geo1-10-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser høydekurvene på et topografisk kart?',
      options: [
        { id: 'a', text: 'Linjer som forbinder punkter med samme høyde', isCorrect: true },
        { id: 'b', text: 'Grenser mellom bergarttyper', isCorrect: false },
        { id: 'c', text: 'Vannstrømmer', isCorrect: false },
        { id: 'd', text: 'Vegetasjonsgrenser', isCorrect: false },
      ],
      solution: 'Høydekurver (koter) forbinder punkter med samme høyde over havet. Tette kurver viser bratt terreng.',
    },
    {
      id: 'geo1-10-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er GIS og hva kan det brukes til i geofag?',
      solution: 'GIS (Geografiske informasjonssystemer) er digitale verktøy for å lagre, analysere og visualisere geografiske data. I geofag brukes det til å kombinere ulike datalag (geologi, topografi, løsmasser), analysere skredfarer, planlegge feltarbeid og lage kart.',
    },
    {
      id: 'geo1-10-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva indikerer tette høydekurver på et kart?',
      options: [
        { id: 'a', text: 'Bratt terreng', isCorrect: true },
        { id: 'b', text: 'Flatt terreng', isCorrect: false },
        { id: 'c', text: 'Skog', isCorrect: false },
        { id: 'd', text: 'Vann', isCorrect: false },
      ],
      solution: 'Tette høydekurver betyr at høyden endrer seg mye over kort avstand, altså bratt terreng.',
    },
    {
      id: 'geo1-10-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Lag en sjekkliste for utstyr til geofaglig feltarbeid.',
      solution: 'Utstyr: 1) Geologisk hammer til å ta prøver. 2) Lupe for mineralidentifikasjon. 3) Saltsyre (10%) for kalktest. 4) Kart og kompass/GPS for navigasjon. 5) Feltbok og blyant for notater. 6) Prøveposer med merkelapper. 7) Kamera for dokumentasjon. 8) Sikkerhetsutstyr (hjelm, vernebriller).',
    },
    {
      id: 'geo1-10-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er ekvidistanse på et kart?',
      options: [
        { id: 'a', text: 'Høydeforskjellen mellom høydekurvene', isCorrect: true },
        { id: 'b', text: 'Avstanden mellom to punkter', isCorrect: false },
        { id: 'c', text: 'Kartets målestokk', isCorrect: false },
        { id: 'd', text: 'Nordretningen', isCorrect: false },
      ],
      solution: 'Ekvidistansen er den faste høydeforskjellen mellom to nabokurver. Vanlige verdier er 5, 10 eller 20 meter.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const GEOFAG_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_1_1,
  CHAPTER_GEOFAG_1_2,
  CHAPTER_GEOFAG_1_3,
  CHAPTER_GEOFAG_1_4,
  CHAPTER_GEOFAG_1_5,
  CHAPTER_GEOFAG_1_6,
  CHAPTER_GEOFAG_1_7,
  CHAPTER_GEOFAG_1_8,
  CHAPTER_GEOFAG_1_9,
  CHAPTER_GEOFAG_1_10,
];

export function getGeofag1Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
