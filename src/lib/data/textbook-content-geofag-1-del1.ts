/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2 - Del 1: Jordens system og sfaerer
 *
 * Dekker LK20-kompetansemaal for geofag 1 (GEO01-01)
 * Delkapitler 1.1 - 1.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Introduksjon til jordsystemet
// ============================================================================

export const CHAPTER_GEOFAG_1_1_1: TextbookChapter = {
  id: 'geofag-1-1-1',
  courseId: 'geofag-1',
  chapterNumber: '1.1',
  title: 'Introduksjon til jordsystemet',
  description: 'En oversikt over jorden som et dynamisk system med samvirkende komponenter.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive jordens oppbygging og de ulike sfaerene',
    'forklare hvordan jordsystemet fungerer som en helhet',
  ],
  content: [
    {
      id: 'geo1-1-1-intro',
      type: 'text',
      content: `# Introduksjon til jordsystemet

Jorden er en unik planet i vaart solsystem. Den har flytende vann, en atmosfaere som beskytter mot skadelig straaling, og et mangfold av liv. For aa forstaa hvordan planeten fungerer, studerer vi den som et **system** - en samling av deler som pavirker hverandre.

## Hva er et system?

Et system er en samling av komponenter som samvirker og utveksler energi og materie. Jorden er et **aapent system** for energi (solstraaling kommer inn, varme straaler ut), men et tilnaermet **lukket system** for materie (svaert lite materie forlater eller ankommer jorden).

## Systemtankegang i geofag

Naar vi studerer jorden som et system, ser vi paa:
- **Reservoarer**: Steder der materie lagres (f.eks. havet, atmosfaeren, bergarter)
- **Fluks**: Overfoering av materie eller energi mellom reservoarer
- **Sykluser**: Kretslop der materie sirkulerer (f.eks. vannkretslop, karbonkretslop)
- **Tilbakekoblinger**: Mekanismer som forsterker eller demper endringer`,
    },
    {
      id: 'geo1-1-1-def-system',
      type: 'definition',
      title: 'Jordsystemet',
      content: 'Jordsystemet er helheten av alle jordens komponenter - geosfaeren, hydrosfaeren, atmosfaeren og biosfaeren - samt alle prosessene og samspillet mellom dem. Systemet drives av energi fra solen og fra jordens indre.',
    },
    {
      id: 'geo1-1-1-energi',
      type: 'text',
      content: `## Energikilder for jordsystemet

### Ekstern energi: Solen
- Solstraaling driver vaer, klima og vannkretslop
- Fotosyntesen avhenger av sollys
- Ujevn oppvarming skaper vind og havsirkulasjon

### Intern energi: Jordens indre
- Radioaktiv nedbrytning i kjernen og mantelen
- Restvarme fra jordens dannelse
- Driver platetektonikk, vulkanisme og jordskjelv

Samspillet mellom ekstern og intern energi gjoer jorden til en aktiv, dynamisk planet.`,
    },
    {
      id: 'geo1-1-1-def-tilbakekobling',
      type: 'definition',
      title: 'Tilbakekobling',
      content: 'Tilbakekobling er en prosess der en endring i systemet utloeser en respons som enten forsterker (positiv tilbakekobling) eller demper (negativ tilbakekobling) den opprinnelige endringen. Eksempel: Smelting av is reduserer refleksjon av sollys, noe som oeker oppvarmingen (positiv tilbakekobling).',
    },
    {
      id: 'geo1-1-1-example',
      type: 'example',
      title: 'Jordsystemet i aksjon',
      problem: 'Beskriv hvordan et vulkanutbrudd pavirker flere deler av jordsystemet.',
      solution: `**Vulkanutbrudd som systempavirkning:**

1. **Geosfaeren**: Magma stroemmer ut og danner nye bergarter
2. **Atmosfaeren**: Aske og gasser (CO2, SO2) slippes ut
3. **Hydrosfaeren**: Laharer (slamstroemmer) kan pavirke elver, SO2 kan gi sur nedboer
4. **Biosfaeren**: Vegetasjon oedelegges lokalt, men vulkansk jord er fruktbar paa sikt

**Globale effekter**: Store utbrudd kan kjoele klimaet midlertidig (vulkansk vinter) naar askepartikler reflekterer sollys.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-1-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type system er jorden med hensyn til materie?',
      options: [
        { id: 'a', text: 'Tilnaermet lukket system', isCorrect: true },
        { id: 'b', text: 'Helt aapent system', isCorrect: false },
        { id: 'c', text: 'Helt lukket system', isCorrect: false },
        { id: 'd', text: 'Isolert system', isCorrect: false },
      ],
      solution: 'Jorden er et tilnaermet lukket system for materie fordi svaert lite materie forlater eller ankommer planeten. Den er derimot et aapent system for energi.',
    },
    {
      id: 'geo1-1-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom positiv og negativ tilbakekobling i jordsystemet.',
      solution: 'Positiv tilbakekobling forsterker den opprinnelige endringen (f.eks. issmelting som reduserer refleksjon og oeker oppvarming ytterligere). Negativ tilbakekobling demper endringen og bidrar til stabilitet (f.eks. oekt fordampning ved hoeyere temperatur som gir flere skyer som reflekterer sollys).',
    },
    {
      id: 'geo1-1-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er de to hovedkildene til energi i jordsystemet?',
      options: [
        { id: 'a', text: 'Solstraaling og jordens indre varme', isCorrect: true },
        { id: 'b', text: 'Maanens gravitasjon og solstraaling', isCorrect: false },
        { id: 'c', text: 'Vulkaner og jordskjelv', isCorrect: false },
        { id: 'd', text: 'Vind og boelger', isCorrect: false },
      ],
      solution: 'Jordsystemet drives av ekstern energi fra solen og intern energi fra radioaktiv nedbrytning og restvarme i jordens indre.',
    },
    {
      id: 'geo1-1-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi et eksempel paa hvordan en endring i ett reservoar kan pavirke et annet.',
      solution: 'Eksempel: Oekt CO2-utslipp fra forbrenning (geosfaeren via fossilt brensel) oeker CO2 i atmosfaeren, som loeses i havet (hydrosfaeren) og foerer til havforsuring, som pavirker koraller og skalldyr (biosfaeren).',
    },
  ],
};

// ============================================================================
// Kapittel 1.2: Jordens indre oppbygging
// ============================================================================

export const CHAPTER_GEOFAG_1_1_2: TextbookChapter = {
  id: 'geofag-1-1-2',
  courseId: 'geofag-1',
  chapterNumber: '1.2',
  title: 'Jordens indre oppbygging',
  description: 'Jordens lagdelte struktur fra skorpen til kjernen.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive jordens oppbygging og de ulike sfaerene',
    'forklare hvordan vi vet hva som finnes inne i jorden',
  ],
  content: [
    {
      id: 'geo1-1-2-intro',
      type: 'text',
      content: `# Jordens indre oppbygging

Ingen har noensinne vaert dypere enn noen kilometer inn i jorden. Likevel vet vi mye om jordens indre, takket vaere seismiske boelger, gravitasjonsmalinger og studier av meteoritter.

## Hvordan vet vi hva som er inne i jorden?

### Seismiske boelger
- Jordskjelv sender boelger gjennom jorden
- Boelgene endrer hastighet og retning i ulike materialer
- P-boelger (trykk) gaar gjennom alt, S-boelger (skjaer) stoppes av vaeske
- "Skyggesoner" avslorer den flytende ytre kjernen

### Andre metoder
- Gravitasjonsmalinger tyder paa tett kjerne
- Jordens magnetfelt krever flytende, ledende ytre kjerne
- Meteoritter gir hint om solsystemets opprinnelige sammensetning`,
    },
    {
      id: 'geo1-1-2-def-seismisk',
      type: 'definition',
      title: 'Seismiske boelger',
      content: 'Seismiske boelger er energiboelger som forplanter seg gjennom jorden etter jordskjelv eller eksplosjoner. P-boelger er trykkboelger som gaar raskest og gjennom alle materialer. S-boelger er skjaerboelger som bare gaar gjennom faste stoffer.',
    },
    {
      id: 'geo1-1-2-lag',
      type: 'text',
      content: `## Jordens lag

### Jordskorpen
Den ytterste, tynneste delen av jorden.

| Type | Tykkelse | Sammensetning | Tetthet |
|------|----------|---------------|---------|
| Oseanisk | 5-10 km | Basalt | 3.0 g/cm3 |
| Kontinental | 30-70 km | Granitt | 2.7 g/cm3 |

### Mantelen
Utgjoer 84% av jordens volum.

- **Oevre mantel** (100-400 km): Delvis smeltet, plastisk (astenosfaeren)
- **Nedre mantel** (400-2900 km): Fast, men kan flyte over lang tid

### Kjernen
- **Ytre kjerne** (2900-5100 km): Flytende jern og nikkel, skaper magnetfeltet
- **Indre kjerne** (5100-6371 km): Fast jern og nikkel, temperaturen er ca. 5500 grader C`,
    },
    {
      id: 'geo1-1-2-def-litosfaere',
      type: 'definition',
      title: 'Litosfaeren og astenosfaeren',
      content: 'Litosfaeren er det stive ytre laget som omfatter skorpen og oevre del av mantelen (ca. 100 km tykt). Astenosfaeren er det plastiske laget under litosfaeren der bergarter kan flyte sakte. Litosfaeren "flyter" paa astenosfaeren.',
    },
    {
      id: 'geo1-1-2-temperatur',
      type: 'text',
      content: `## Temperatur og trykk

### Geotermisk gradient
Temperaturen oeker med dybden:
- I skorpen: ca. 25-30 grader C per km
- Dypere er gradienten lavere
- Kjernen: ca. 5500 grader C

### Trykk
- Oekning paa grunn av vekten av overliggende lag
- I kjernen: ca. 360 GPa (3.6 millioner ganger atmosfaeretrykket)
- Hoeyt trykk holder den indre kjernen fast til tross for temperaturen`,
    },
    {
      id: 'geo1-1-2-example',
      type: 'example',
      title: 'Seismiske skyggesoner',
      problem: 'Forklar hvordan seismiske skyggesoner beviser at jordens ytre kjerne er flytende.',
      solution: `**Skyggesonene:**

1. Naar et jordskjelv inntreffer, sendes P- og S-boelger ut i alle retninger
2. P-boelger registreres over hele jorden, men har en "skyggesone" 105-140 grader fra episenteret
3. S-boelger forsvinner helt paa motsatt side av jorden fra jordskjelvet

**Forklaring:**
- S-boelger kan ikke gaa gjennom vaeske (de krever skjaerstyrke)
- Fravaeret av S-boelger bak kjernen beviser at ytre kjerne er flytende
- P-boelgenes skyggesone skyldes at de brytes (refrakteres) i den flytende kjernen`,
    },
  ],
  exercises: [
    {
      id: 'geo1-1-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket av jordens lag er stoerst i volum?',
      options: [
        { id: 'a', text: 'Mantelen', isCorrect: true },
        { id: 'b', text: 'Jordskorpen', isCorrect: false },
        { id: 'c', text: 'Ytre kjernen', isCorrect: false },
        { id: 'd', text: 'Indre kjernen', isCorrect: false },
      ],
      solution: 'Mantelen utgjor ca. 84% av jordens volum og strekker seg fra bunnen av skorpen til ca. 2900 km dybde.',
    },
    {
      id: 'geo1-1-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom oseanisk og kontinental skorpe.',
      solution: 'Oseanisk skorpe er tynnere (5-10 km), tettere (3.0 g/cm3) og bestaar hovedsakelig av basalt. Kontinental skorpe er tykkere (30-70 km), lettere (2.7 g/cm3) og bestaar hovedsakelig av granitt. Fordi kontinental skorpe er lettere, flyter den hoeyere paa mantelen.',
    },
    {
      id: 'geo1-1-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor er den indre kjernen fast selv om den er varmere enn den ytre kjernen?',
      options: [
        { id: 'a', text: 'Trykket er saa hoeyt at det holder materialet fast', isCorrect: true },
        { id: 'b', text: 'Den bestaar av et annet materiale', isCorrect: false },
        { id: 'c', text: 'Den er egentlig ikke varmere', isCorrect: false },
        { id: 'd', text: 'Gravitasjonen er stoerre der', isCorrect: false },
      ],
      solution: 'Det ekstreme trykket i den indre kjernen (ca. 360 GPa) presser atomene saa tett sammen at materialet forblir fast til tross for den hoeye temperaturen.',
    },
    {
      id: 'geo1-1-2-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv to bevis for at jordens ytre kjerne er flytende.',
      solution: '1) S-boelger (skjaerboelger) kan ikke gaa gjennom vaeske og forsvinner naar de naar kjernen. 2) Jordens magnetfelt krever bevegelse av elektrisk ledende materiale - en flytende kjerne av jern-nikkel kan skape dette gjennom konveksjon (dynamoteori).',
    },
    {
      id: 'geo1-1-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den omtrentlige temperaturen i jordens indre kjerne?',
      options: [
        { id: 'a', text: 'Ca. 5500 grader C', isCorrect: true },
        { id: 'b', text: 'Ca. 1000 grader C', isCorrect: false },
        { id: 'c', text: 'Ca. 15000 grader C', isCorrect: false },
        { id: 'd', text: 'Ca. 500 grader C', isCorrect: false },
      ],
      solution: 'Temperaturen i den indre kjernen er ca. 5500 grader C, omtrent like varmt som solens overflate.',
    },
  ],
};

// ============================================================================
// Kapittel 1.3: De fire hovedsfaerene
// ============================================================================

export const CHAPTER_GEOFAG_1_1_3: TextbookChapter = {
  id: 'geofag-1-1-3',
  courseId: 'geofag-1',
  chapterNumber: '1.3',
  title: 'De fire hovedsfaerene',
  description: 'Geosfaeren, hydrosfaeren, atmosfaeren og biosfaeren.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive jordens oppbygging og de ulike sfaerene',
    'forklare samspillet mellom geosfaeren, hydrosfaeren, atmosfaeren og biosfaeren',
  ],
  content: [
    {
      id: 'geo1-1-3-intro',
      type: 'text',
      content: `# De fire hovedsfaerene

Jorden kan deles inn i fire hovedsfaerer basert paa materialtype. Disse sfaerene overlapper og samvirker kontinuerlig.

## Oversikt over sfaerene

| Sfaere | Innhold | Eksempler |
|--------|---------|-----------|
| Geosfaeren | Faste materialer | Bergarter, mineraler, jordsmonn |
| Hydrosfaeren | Vann i alle former | Hav, innsjoeer, elver, isbreer, grunnvann |
| Atmosfaeren | Gasslaget | Luft, vaer, klima |
| Biosfaeren | Levende organismer | Planter, dyr, mikroorganismer |`,
    },
    {
      id: 'geo1-1-3-def-geosfaere',
      type: 'definition',
      title: 'Geosfaeren',
      content: 'Geosfaeren (eller litosfaeren i vid forstand) omfatter alle faste materialer paa jorden, fra overflaten til kjernen. Den inkluderer bergarter, mineraler, sedimenter og jordsmonn. Geosfaeren er kilden til viktige ressurser og grunnlaget for landformer.',
    },
    {
      id: 'geo1-1-3-geosfaere',
      type: 'text',
      content: `## Geosfaeren

### Komponenter
- **Bergarter**: Magmatiske, sedimentaere, metamorfe
- **Mineraler**: Byggesteinene i bergarter
- **Jordsmonn**: Forvitret bergart blandet med organisk materiale
- **Sedimenter**: Loese avsetninger

### Prosesser
- Platetektonikk beveger kontinenter
- Vulkanisme skaper nye bergarter
- Forvitring bryter ned bergarter
- Erosjon transporterer materiale`,
    },
    {
      id: 'geo1-1-3-def-hydrosfaere',
      type: 'definition',
      title: 'Hydrosfaeren',
      content: 'Hydrosfaeren omfatter alt vann paa jorden i alle faser: flytende (hav, innsjoeer, elver, grunnvann), fast (isbreer, snoedekke, permafrost) og gass (vanndamp i atmosfaeren).',
    },
    {
      id: 'geo1-1-3-hydrosfaere',
      type: 'text',
      content: `## Hydrosfaeren

### Vannets fordeling
- **Saltvann (hav)**: 97.5%
- **Ferskvann**: 2.5%
  - Isbreer og is: 69% av ferskvannet
  - Grunnvann: 30%
  - Overflate- og atmosfaerevann: 1%

### Vannets rolle
- Regulerer temperatur (hoey varmekapasitet)
- Transporterer varme (havstroemmer)
- Eroderer og former landskap
- Essensielt for alt liv`,
    },
    {
      id: 'geo1-1-3-atmosfaere',
      type: 'text',
      content: `## Atmosfaeren

### Sammensetning
- Nitrogen (N2): 78%
- Oksygen (O2): 21%
- Argon (Ar): 0.9%
- Karbondioksid (CO2): ca. 0.04% (oekende)
- Vanndamp: varierende (0-4%)

### Atmosfaerens lag
- **Troposfaeren** (0-12 km): Vaer og klima
- **Stratosfaeren** (12-50 km): Ozonlaget
- **Mesosfaeren** (50-80 km): Meteorbrann
- **Termosfaeren** (80-700 km): Nordlys

### Funksjoner
- Beskytter mot UV-straaling
- Holder paa varme (drivhuseffekt)
- Gir oksygen til aanding`,
    },
    {
      id: 'geo1-1-3-def-biosfaere',
      type: 'definition',
      title: 'Biosfaeren',
      content: 'Biosfaeren er summen av alle oekosystemer paa jorden - alle levende organismer og deres interaksjoner med hverandre og med de andre sfaerene. Biosfaeren strekker seg fra dype hav til hoeyt i atmosfaeren.',
    },
    {
      id: 'geo1-1-3-example',
      type: 'example',
      title: 'Sfaerenes utstrekning',
      problem: 'Hvor finner vi grensene for biosfaeren?',
      solution: `**Biosfaerens utstrekning:**

**Oeverst:**
- Bakteriesporer er funnet opptil 40 km hoeyde
- Aktive mikroorganismer finnes til ca. 10 km
- Fugler og insekter til ca. 9 km

**Nederst:**
- Mikroorganismer er funnet 5 km under jordoverflaten
- I havet finnes liv paa 11 km dyp (Marianergropen)

**Konklusjon:** Biosfaeren strekker seg ca. 20 km vertikalt - en tynn hinne sammenlignet med jordens radius paa 6371 km.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-1-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken sfaere omfatter alle levende organismer?',
      options: [
        { id: 'a', text: 'Biosfaeren', isCorrect: true },
        { id: 'b', text: 'Geosfaeren', isCorrect: false },
        { id: 'c', text: 'Hydrosfaeren', isCorrect: false },
        { id: 'd', text: 'Atmosfaeren', isCorrect: false },
      ],
      solution: 'Biosfaeren er sfaeren som omfatter alle levende organismer og deres interaksjoner med miljoeeet.',
    },
    {
      id: 'geo1-1-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor vanndamp regnes som del av baade hydrosfaeren og atmosfaeren.',
      solution: 'Vanndamp er vann i gassform, saa det tilhoerer hydrosfaeren (alt vann). Samtidig er det en gass i atmosfaeren og pavirker vaer og klima. Dette illustrerer at sfaerene overlapper - de er ikke skarpt adskilte.',
    },
    {
      id: 'geo1-1-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor stor andel av jordens vann er ferskvann?',
      options: [
        { id: 'a', text: 'Ca. 2.5%', isCorrect: true },
        { id: 'b', text: 'Ca. 25%', isCorrect: false },
        { id: 'c', text: 'Ca. 10%', isCorrect: false },
        { id: 'd', text: 'Ca. 50%', isCorrect: false },
      ],
      solution: 'Bare ca. 2.5% av jordens vann er ferskvann, og mesteparten av dette er bundet i isbreer og grunnvann.',
    },
    {
      id: 'geo1-1-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn de fire viktigste gassene i atmosfaeren og deres omtrentlige prosentandel.',
      solution: 'Nitrogen (N2) ca. 78%, oksygen (O2) ca. 21%, argon (Ar) ca. 0.9%, og karbondioksid (CO2) ca. 0.04%. Vanndamp varierer fra 0-4% avhengig av sted og tid.',
    },
    {
      id: 'geo1-1-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'I hvilket atmosfaerelag finner vi vaer og klima?',
      options: [
        { id: 'a', text: 'Troposfaeren', isCorrect: true },
        { id: 'b', text: 'Stratosfaeren', isCorrect: false },
        { id: 'c', text: 'Mesosfaeren', isCorrect: false },
        { id: 'd', text: 'Termosfaeren', isCorrect: false },
      ],
      solution: 'Troposfaeren (0-12 km) er det nederste laget der alt vaer og klima foregaar.',
    },
  ],
};

// ============================================================================
// Kapittel 1.4: Samspillet mellom sfaerene
// ============================================================================

export const CHAPTER_GEOFAG_1_1_4: TextbookChapter = {
  id: 'geofag-1-1-4',
  courseId: 'geofag-1',
  chapterNumber: '1.4',
  title: 'Samspillet mellom sfaerene',
  description: 'Hvordan sfaerene pavirker hverandre gjennom ulike prosesser.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare samspillet mellom geosfaeren, hydrosfaeren, atmosfaeren og biosfaeren',
    'beskrive kretslop som binder sfaerene sammen',
  ],
  content: [
    {
      id: 'geo1-1-4-intro',
      type: 'text',
      content: `# Samspillet mellom sfaerene

Sfaerene er ikke isolerte - de pavirker hverandre kontinuerlig gjennom utveksling av energi og materie. Dette samspillet driver mange av jordens prosesser.

## Interaksjoner mellom sfaerene

Hver sfaere kan paavirke alle de andre. Her er noen eksempler:

| Fra / Til | Geosfaere | Hydrosfaere | Atmosfaere | Biosfaere |
|-----------|-----------|-------------|------------|-----------|
| **Geosfaere** | - | Grunnvann i bergarter | Vulkangasser | Naering i jord |
| **Hydrosfaere** | Erosjon | - | Fordampning | Vann til liv |
| **Atmosfaere** | Forvitring | Nedboer | - | Luft til liv |
| **Biosfaere** | Fossiler | Transpirasjon | Fotosyntese/aanding | - |`,
    },
    {
      id: 'geo1-1-4-def-kretslop',
      type: 'definition',
      title: 'Biogeokjemiske kretslop',
      content: 'Biogeokjemiske kretslop er sykluser der grunnstoffer (som karbon, nitrogen, fosfor) sirkulerer mellom biosfaeren, geosfaeren, hydrosfaeren og atmosfaeren. Disse kretsloepene opprettholder balansen i jordsystemet.',
    },
    {
      id: 'geo1-1-4-karbon',
      type: 'text',
      content: `## Karbonkretslop - et eksempel paa samspill

Karbon sirkulerer kontinuerlig mellom alle fire sfaerer:

### Korttids karbonkretslop (aar til tiaar)
1. **Atmosfaere -> Biosfaere**: Planter tar opp CO2 gjennom fotosyntese
2. **Biosfaere -> Atmosfaere**: Aanding og nedbrytning frigjoer CO2
3. **Atmosfaere -> Hydrosfaere**: CO2 loeses i havet
4. **Hydrosfaere -> Atmosfaere**: CO2 frigjores fra varmt havvann

### Langtids karbonkretslop (millioner av aar)
1. **Biosfaere -> Geosfaere**: Doede organismer begraves og blir fossilt brensel
2. **Geosfaere -> Atmosfaere**: Vulkaner frigjoer CO2
3. **Hydrosfaere -> Geosfaere**: Kalksteindannelse paa havbunnen
4. **Geosfaere -> Hydrosfaere**: Forvitring av kalkstein`,
    },
    {
      id: 'geo1-1-4-eksempler',
      type: 'text',
      content: `## Flere eksempler paa samspill

### Vulkanutbrudd (Geosfaere -> alle)
- Gasser til atmosfaeren (CO2, SO2)
- Aske pavirker vaer og klima
- Naeringsrik vulkansk jord for planter
- Lavastroemmer endrer vannloep

### Forvitring (Atmosfaere + Hydrosfaere -> Geosfaere)
- Regnvann (hydrosfaere) med CO2 (atmosfaere) er svakt surt
- Loeser opp kalkstein og andre bergarter
- Frigjoer naering til planter (biosfaere)

### Korallrev (alle sfaerer)
- Koraller (biosfaere) bygger kalkstrukturer (geosfaere)
- Bruker kalsium fra havvann (hydrosfaere)
- Paavirkes av atmosfaerisk CO2 via havforsuring`,
    },
    {
      id: 'geo1-1-4-example',
      type: 'example',
      title: 'Istid-mellomistid sykluser',
      problem: 'Beskriv hvordan sfaerene samvirker under overgangen fra istid til mellomistid.',
      solution: `**Istid til mellomistid - sfaereinteraksjoner:**

1. **Start**: Endringer i jordens bane oeker solstraaling paa nordlige halvkule
2. **Atmosfaere + Hydrosfaere**: Is begynner aa smelte
3. **Positiv tilbakekobling**: Mindre is = lavere refleksjon = mer oppvarming
4. **Biosfaere**: Vegetasjon sprer seg nordover
5. **Geosfaere**: Isbreer trekker seg tilbake, avdekker nytt land
6. **Hydrosfaere**: Havnivaaet stiger, havstroemmer endres
7. **Atmosfaere**: CO2 og metan oeker (fra tundra og hav)

Dette viser hvordan en liten endring kan forsterkes gjennom samspill mellom sfaerene.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-1-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken prosess overfoerer karbon fra atmosfaeren til biosfaeren?',
      options: [
        { id: 'a', text: 'Fotosyntese', isCorrect: true },
        { id: 'b', text: 'Aanding', isCorrect: false },
        { id: 'c', text: 'Vulkanisme', isCorrect: false },
        { id: 'd', text: 'Forvitring', isCorrect: false },
      ],
      solution: 'Gjennom fotosyntese tar planter opp CO2 fra atmosfaeren og bygger det inn i organisk materiale.',
    },
    {
      id: 'geo1-1-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gi tre eksempler paa hvordan geosfaeren pavirker atmosfaeren.',
      solution: '1) Vulkanutbrudd sender gasser (CO2, SO2) og aske til atmosfaeren. 2) Forvitring av bergarter binder CO2 fra atmosfaeren. 3) Fjellkjeder pavirker vindmoenstre og nedboer (orografisk effekt).',
    },
    {
      id: 'geo1-1-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skjer med CO2 naar det loeses i havet?',
      options: [
        { id: 'a', text: 'Det kan danne karbonsyre og bidra til havforsuring', isCorrect: true },
        { id: 'b', text: 'Det forsvinner permanent', isCorrect: false },
        { id: 'c', text: 'Det blir til oksygen', isCorrect: false },
        { id: 'd', text: 'Det synker til bunnen som fast stoff', isCorrect: false },
      ],
      solution: 'CO2 reagerer med vann og danner karbonsyre (H2CO3), som gjoer havet surere. Dette kan pavirke skalldyr og koraller negativt.',
    },
    {
      id: 'geo1-1-4-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan korallrev involverer alle fire sfaerer.',
      solution: 'Koraller (biosfaere) bygger kalkskjeletter av kalsiumkarbonat som blir bergart (geosfaere). De trenger kalsium fra sjoevann (hydrosfaere) og paavirkes av CO2-nivaaet i atmosfaeren som pavirker havets pH. Korallrev er et tydelig eksempel paa sfaeresamspill.',
    },
    {
      id: 'geo1-1-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kalles sykluser der grunnstoffer sirkulerer mellom sfaerene?',
      options: [
        { id: 'a', text: 'Biogeokjemiske kretslop', isCorrect: true },
        { id: 'b', text: 'Atmosfaeriske sykluser', isCorrect: false },
        { id: 'c', text: 'Geologiske perioder', isCorrect: false },
        { id: 'd', text: 'Oekologiske prosesser', isCorrect: false },
      ],
      solution: 'Biogeokjemiske kretslop beskriver hvordan grunnstoffer som karbon, nitrogen og fosfor sirkulerer mellom bio-, geo-, hydro- og atmosfaeren.',
    },
  ],
};

// ============================================================================
// Kapittel 1.5: Energiflyt i jordsystemet
// ============================================================================

export const CHAPTER_GEOFAG_1_1_5: TextbookChapter = {
  id: 'geofag-1-1-5',
  courseId: 'geofag-1',
  chapterNumber: '1.5',
  title: 'Energiflyt i jordsystemet',
  description: 'Solstraaling, jordens varmebudsjett og energiomforminger.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjoere rede for energiflyt i jordsystemet',
    'forklare jordens energibalanse og drivhuseffekten',
  ],
  content: [
    {
      id: 'geo1-1-5-intro',
      type: 'text',
      content: `# Energiflyt i jordsystemet

Energi driver alle prosesser paa jorden. Forstaaelse av energiflyt er grunnleggende for aa forstaa klima, vaer og jordens dynamikk.

## Energikilder

### Solstraaling (ekstern energi)
- 99.98% av jordens energitilfoersel
- Driver vaer, klima, vannkretslop
- Grunnlag for fotosyntese og alt liv
- Varierer med breddegrad og aarstid

### Jordens indre varme (intern energi)
- 0.02% av total energitilfoersel
- Radioaktiv nedbrytning + restvarme
- Driver platetektonikk og vulkanisme
- Varmestroommen oeker med dybde`,
    },
    {
      id: 'geo1-1-5-def-straling',
      type: 'definition',
      title: 'Solstraaling og jordstraaling',
      content: 'Solstraaling er kortboelget straaling (synlig lys, UV) fra solen. Jordstraaling er langboelget infraroed straaling som jorden sender ut. Forskjellen i boelgelengde er viktig for drivhuseffekten.',
    },
    {
      id: 'geo1-1-5-budsjett',
      type: 'text',
      content: `## Jordens energibudsjett

### Innkommende solstraaling (100%)
- Ca. 30% reflekteres tilbake (albedo)
  - Skyer: 20%
  - Jordoverflate: 6%
  - Atmosfaere: 4%
- Ca. 70% absorberes
  - Atmosfaere: 20%
  - Jordoverflate: 50%

### Utgaaende energi
- Jordoverflaten straaler ut langboelget (IR) straaling
- Drivhusgasser absorberer og re-emitterer IR
- Til slutt straaler jorden ut like mye som den mottar (balanse)

### Energibalanse
Over tid: Innkommende energi = Utgaaende energi
Hvis ikke: Klimaendring (oppvarming eller avkjoeling)`,
    },
    {
      id: 'geo1-1-5-def-drivhus',
      type: 'definition',
      title: 'Drivhuseffekten',
      content: 'Drivhuseffekten er prosessen der drivhusgasser (CO2, H2O, CH4, N2O) i atmosfaeren absorberer langboelget straaling fra jordoverflaten og sender noe tilbake. Dette varmer opp jordoverflaten med ca. 33 grader C mer enn uten atmosfaere.',
    },
    {
      id: 'geo1-1-5-drivhus',
      type: 'text',
      content: `## Drivhuseffekten

### Naturlig drivhuseffekt
- Uten atmosfaere: Jordens middeltemperatur ville vaere ca. -18 grader C
- Med atmosfaere: Ca. +15 grader C (33 graders oppvarming)
- Dette er livsviktig - uten drivhuseffekt, ingen flytende vann

### Viktige drivhusgasser
| Gass | Kilde | Bidrag |
|------|-------|--------|
| H2O (vanndamp) | Fordampning | Stoerst bidrag |
| CO2 | Aanding, forbrenning, vulkaner | Nest stoerst |
| CH4 (metan) | Vaatmarker, husdyr, permafrost | Kraftig, men lite |
| N2O (lystgass) | Jordbruk, industri | Langvarig |

### Forsterket drivhuseffekt
Menneskers utslipp av CO2 og andre gasser forsterker drivhuseffekten og foerer til global oppvarming.`,
    },
    {
      id: 'geo1-1-5-example',
      type: 'example',
      title: 'Beregne energibalanse',
      problem: 'Solen sender ca. 1361 W/m2 til jordens tverrsnitt. Forklar hvordan dette fordeles.',
      solution: `**Energifordeling:**

1. **Totalt mottatt**: 1361 W/m2 paa jordens tverrsnitt (skive mot solen)

2. **Fordelt paa hele jordoverflaten**:
   - Jordoverflaten er en kule, ikke en skive
   - Areal av kule = 4 x areal av skive
   - Gjennomsnitt: 1361 / 4 = ca. 340 W/m2

3. **Refleksjon (albedo ca. 30%)**:
   - 340 x 0.30 = ca. 100 W/m2 reflekteres
   - 340 x 0.70 = ca. 240 W/m2 absorberes

4. **Balanse**: Jorden straaler ut 240 W/m2 som langboelget straaling for aa opprettholde energibalanse.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-1-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor stor andel av jordens energi kommer fra solen?',
      options: [
        { id: 'a', text: 'Ca. 99.98%', isCorrect: true },
        { id: 'b', text: 'Ca. 50%', isCorrect: false },
        { id: 'c', text: 'Ca. 75%', isCorrect: false },
        { id: 'd', text: 'Ca. 90%', isCorrect: false },
      ],
      solution: 'Solen leverer ca. 99.98% av jordens energi. Resten kommer fra jordens indre (radioaktivitet og restvarme).',
    },
    {
      id: 'geo1-1-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva albedo er og gi tre eksempler paa overflater med ulik albedo.',
      solution: 'Albedo er andelen av innkommende straaling som reflekteres. Eksempler: Fersk snoe har hoey albedo (ca. 0.9), skog har lav albedo (ca. 0.15), hav har lav albedo (ca. 0.06). Oekende issmelting reduserer albedo og forsterker oppvarming.',
    },
    {
      id: 'geo1-1-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mye varmere er jorden paa grunn av den naturlige drivhuseffekten?',
      options: [
        { id: 'a', text: 'Ca. 33 grader C', isCorrect: true },
        { id: 'b', text: 'Ca. 10 grader C', isCorrect: false },
        { id: 'c', text: 'Ca. 5 grader C', isCorrect: false },
        { id: 'd', text: 'Ca. 50 grader C', isCorrect: false },
      ],
      solution: 'Uten drivhuseffekt ville jordens middeltemperatur vaere ca. -18 grader C. Med drivhuseffekt er den ca. +15 grader C, en forskjell paa ca. 33 grader C.',
    },
    {
      id: 'geo1-1-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom kortboelget og langboelget straaling i jordens energibudsjett.',
      solution: 'Kortboelget straaling (synlig lys, UV) kommer fra solen og passerer lett gjennom atmosfaeren. Langboelget straaling (infraroed) sendes ut fra jordoverflaten og absorberes delvis av drivhusgasser. Denne forskjellen er grunnlaget for drivhuseffekten.',
    },
    {
      id: 'geo1-1-5-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva skjer dersom jordens energibalanse forstyrres?',
      options: [
        { id: 'a', text: 'Klimaendring (oppvarming eller avkjoeling) til ny balanse er naadd', isCorrect: true },
        { id: 'b', text: 'Ingenting, systemet korrigerer seg umiddelbart', isCorrect: false },
        { id: 'c', text: 'Jorden slutter aa rotere', isCorrect: false },
        { id: 'd', text: 'Atmosfaeren forsvinner', isCorrect: false },
      ],
      solution: 'Hvis innkommende energi ikke er lik utgaaende energi, vil jorden varmes opp eller avkjoeles til en ny balanse er naadd. Oekte drivhusgasser gir midlertidig ubalanse som foerer til oppvarming.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const GEOFAG_1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_1_1_1,
  CHAPTER_GEOFAG_1_1_2,
  CHAPTER_GEOFAG_1_1_3,
  CHAPTER_GEOFAG_1_1_4,
  CHAPTER_GEOFAG_1_1_5,
];

export function getGeofag1Del1Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_DEL1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
