/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2 - Del 3: Platetektonikk
 *
 * Dekker LK20-kompetansemaal for geofag 1 (GEO01-01)
 * Fem kapitler om platetektonikk og drivkrefter
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Teorien om kontinentaldrift
// ============================================================================

export const CHAPTER_GEOFAG_1_3_1: TextbookChapter = {
  id: 'geofag-1-3-1',
  courseId: 'geofag-1',
  chapterNumber: '3.1',
  title: 'Teorien om kontinentaldrift',
  description: 'Alfred Wegeners teori om kontinentaldrift og de historiske bevisene for at kontinentene har beveget seg.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjoere rede for utviklingen av teorien om kontinentaldrift',
    'beskrive bevisene Wegener brukte for aa stoette teorien',
    'forklare hvorfor teorien opprinnelig ble avvist og senere akseptert',
  ],
  content: [
    {
      id: 'geo1-3-1-intro',
      type: 'text',
      content: `# Teorien om kontinentaldrift

Ideen om at kontinentene en gang hang sammen og har beveget seg over jordens overflate, kalles kontinentaldrift. Denne teorien la grunnlaget for vaar moderne forstaaelse av platetektonikk.

## Alfred Wegener og Pangea

I 1912 presenterte den tyske meteorologen og polarforskeren Alfred Wegener (1880-1930) sin teori om kontinentaldrift. Han foreslo at alle kontinentene en gang var samlet i ett superkontinent han kalte **Pangea** (gresk for "all jord").

Wegener observerte at kysten av Soer-Amerika og Afrika passet sammen som brikker i et puslespill. Men han stoettet seg paa langt mer enn bare kystlinjenes form.`,
    },
    {
      id: 'geo1-3-1-def-kontinentaldrift',
      type: 'definition',
      title: 'Kontinentaldrift',
      content: 'Kontinentaldrift er teorien om at kontinentene har beveget seg horisontalt over jordens overflate gjennom geologisk tid. Alfred Wegener foreslo at alle kontinentene var samlet i superkontinentet Pangea for ca. 300 millioner aar siden, og har siden drevet fra hverandre.',
    },
    {
      id: 'geo1-3-1-bevis',
      type: 'text',
      content: `## Wegeners bevis for kontinentaldrift

Wegener samlet fire hovedtyper bevis:

### 1. Geografiske bevis - kystlinjenes passform

Ikke bare passet kystlinjene sammen, men naar man ser paa kontinentalsoklene (de grunne havomraadene rundt kontinentene), blir passformen enda mer presis. Dette gjelder spesielt Atlanterhavets kyster.

### 2. Paleontologiske bevis - fossiler

Fossiler av de samme landlevende dyrene og plantene er funnet paa kontinenter som naa er adskilt av tusenvis av kilometer med hav:

- **Mesosaurus**: Et lite ferskvannsreptil funnet kun i Soer-Amerika og Afrika
- **Glossopteris**: En bregne funnet paa alle de soerlige kontinentene
- **Cynognathus** og **Lystrosaurus**: Landlevende reptiler funnet paa flere kontinenter

Disse organismene kunne ikke ha krysset store hav, saa kontinentene maa ha hengt sammen.

### 3. Geologiske bevis - fjellkjeder og bergarter

- Fjellkjedene i oestlige Nord-Amerika (Appalakene) fortsetter i Skottland og Skandinavia
- Bergarter av samme alder og type finnes paa begge sider av Atlanterhavet
- Gamle kratoner (stabile kontinentkjerner) kan matches paa tvers av hav

### 4. Klimatiske bevis - paleoklimaet

- Kullforekomster (dannet i tropisk klima) finnes i dag i Arktis og Antarktis
- Spor etter gamle isbreer finnes i India, Afrika og Soer-Amerika - omraader som i dag er tropiske
- Oerkenforekomster (evaporitter) finnes i omraader som naa har fuktig klima`,
    },
    {
      id: 'geo1-3-1-def-pangea',
      type: 'definition',
      title: 'Pangea',
      content: 'Pangea var et superkontinent som eksisterte for ca. 335-175 millioner aar siden og inneholdt nesten alt landarealet paa jorden. Pangea var omgitt av et globalt hav kalt Panthalassa. Superkontinentet begynte aa brytes opp i jura-perioden.',
    },
    {
      id: 'geo1-3-1-motstand',
      type: 'text',
      content: `## Motstand mot teorien

Til tross for de overbevisende bevisene ble Wegeners teori avvist av de fleste vitenskapsfolk i hans levetid.

### Hovedinnvendinger

1. **Manglende mekanisme**: Wegener kunne ikke forklare hvilken kraft som var sterk nok til aa flytte kontinentene
2. **Feil forslag**: Han foreslo at kontinentene "ployde" gjennom havbunnen, noe fysikere regnet som umulig
3. **Utenforstaaende**: Wegener var meteorolog, ikke geolog - mange avfeide ham som amatoer
4. **For radikal**: Teorien krevde en helt ny maate aa tenke om jorden paa

### Wegeners doedelige ekspedisjon

Wegener doede i 1930 paa en ekspedisjon til Groenland, uten aa faa oppleve at teorien hans ble akseptert. Foerst paa 1960-tallet, med oppdagelsen av havbunnspredning og magnetiske striper, fikk kontinentaldrift-teorien sin renessanse.`,
    },
    {
      id: 'geo1-3-1-example',
      type: 'example',
      title: 'Mesosaurus som bevis',
      problem: 'Forklar hvordan fossilet Mesosaurus stoetter teorien om kontinentaldrift.',
      solution: `**Mesosaurus som bevis for kontinentaldrift:**

1. **Hva var Mesosaurus?**
   - Et lite ferskvannsreptil (ca. 1 meter langt)
   - Levde for ca. 280 millioner aar siden
   - Levde utelukkende i ferskvann

2. **Geografisk utbredelse:**
   - Fossiler funnet i Soer-Amerika (Brasil)
   - Fossiler funnet i Afrika (Soer-Afrika og Namibia)
   - Ikke funnet noe annet sted i verden

3. **Hvorfor er dette bevis?**
   - Mesosaurus var et ferskvannsdyr og kunne ikke overlevd i saltvann
   - Atlanterhavet er for bredt til at det kunne ha svoemmt over
   - Den eneste logiske forklaringen er at Soer-Amerika og Afrika hang sammen
   - Mesosaurus levde i innsjoeerne paa det sammenhengende kontinentet`,
    },
  ],
  exercises: [
    {
      id: 'geo1-3-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem foreslo teorien om kontinentaldrift i 1912?',
      options: [
        { id: 'a', text: 'Alfred Wegener', isCorrect: true },
        { id: 'b', text: 'Charles Darwin', isCorrect: false },
        { id: 'c', text: 'Harry Hess', isCorrect: false },
        { id: 'd', text: 'James Hutton', isCorrect: false },
      ],
      solution: 'Alfred Wegener, en tysk meteorolog og polforsker, presenterte teorien om kontinentaldrift i 1912. Han foreslo at kontinentene en gang var samlet i superkontinentet Pangea.',
    },
    {
      id: 'geo1-3-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre typer bevis Wegener brukte for aa stoette kontinentaldrift-teorien.',
      solution: 'Wegener brukte fire hovedtyper bevis: 1) Geografiske bevis - kystlinjene til Afrika og Soer-Amerika passer sammen som puslespillbrikker. 2) Paleontologiske bevis - fossiler av samme landlevende dyr (som Mesosaurus) finnes paa kontinenter som naa er adskilt av hav. 3) Geologiske bevis - fjellkjeder og bergarter matcher paa tvers av Atlanterhavet. 4) Klimatiske bevis - spor etter tropisk klima i Arktis og isbreer i dagens tropiske omraader.',
    },
    {
      id: 'geo1-3-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva var hovedgrunnen til at Wegeners teori ble avvist i hans levetid?',
      options: [
        { id: 'a', text: 'Han kunne ikke forklare hvilken mekanisme som drev kontinentene', isCorrect: true },
        { id: 'b', text: 'Fossilbevisene viste seg aa vaere feilaktige', isCorrect: false },
        { id: 'c', text: 'Kystlinjene passet ikke sammen', isCorrect: false },
        { id: 'd', text: 'Det fantes ingen bergarter av samme type paa ulike kontinenter', isCorrect: false },
      ],
      solution: 'Hovedinnvendingen var at Wegener ikke kunne forklare hvilken kraft som var sterk nok til aa flytte de enorme kontinentene. Uten en troverdig mekanisme ble teorien avvist, selv om bevisene var overbevisende.',
    },
    {
      id: 'geo1-3-1-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan klimabevis stoetter teorien om kontinentaldrift. Gi minst to konkrete eksempler.',
      solution: 'Klimabevis viser at kontinentene har ligget i andre klimasoner tidligere: 1) Kullforekomster, som dannes i tropisk sumpklima, finnes i dag i Arktis og Antarktis - noe som viser at disse omraadene en gang laa naer ekvator. 2) Spor etter isbreer fra perm-tiden (ca. 300 millioner aar siden) finnes i India, Afrika og Soer-Amerika, som i dag er tropiske - dette viser at disse omraadene en gang laa naer polene. 3) Evaporitter (saltavsetninger fra toerkeomraader) finnes i Nordvest-Europa, som i dag har fuktig klima. Alle disse bevisene gir mening hvis kontinentene har beveget seg over jordkloden.',
    },
  ],
};

// ============================================================================
// Kapittel 3.2: Tektoniske plater
// ============================================================================

export const CHAPTER_GEOFAG_1_3_2: TextbookChapter = {
  id: 'geofag-1-3-2',
  courseId: 'geofag-1',
  chapterNumber: '3.2',
  title: 'Tektoniske plater',
  description: 'Litosfaerens inndeling i plater, oseanisk vs kontinental skorpe, og de store platenes utbredelse.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive hvordan litosfaeren er delt inn i tektoniske plater',
    'forklare forskjellen mellom oseanisk og kontinental skorpe',
    'identifisere de stoerste tektoniske platene og deres grenser',
  ],
  content: [
    {
      id: 'geo1-3-2-intro',
      type: 'text',
      content: `# Tektoniske plater

Teorien om platetektonikk ble utviklet paa 1960-tallet og forener kontinentaldrift med havbunnspredning. Den forklarer at jordens ytre lag, litosfaeren, er delt inn i store, stive plater som beveger seg i forhold til hverandre.

## Litosfaere og astenosfaere

For aa forstaa platetektonikk maa vi skille mellom to viktige lag i jorden:

**Litosfaeren** (gresk: "steinsfaere") omfatter:
- Hele jordskorpen
- Den oeverste delen av mantelen
- Total tykkelse: 70-150 km (tynnest under havene, tykkest under fjellkjeder)
- Oppfoerer seg som et stivt, sproedt lag

**Astenosfaeren** (gresk: "svak sfaere"):
- Ligger under litosfaeren (ca. 100-300 km dyp)
- Delvis smeltet og plastisk
- Gjoer at litosfaereplatene kan "flyte" og bevege seg`,
    },
    {
      id: 'geo1-3-2-def-litosfaere',
      type: 'definition',
      title: 'Litosfaere',
      content: 'Litosfaeren er jordens ytre, stive skall som omfatter hele skorpen og den oeverste delen av mantelen. Litosfaeren er delt inn i tektoniske plater som beveger seg paa den underliggende, plastiske astenosfaeren. Tykkelsen varierer fra ca. 70 km under hav til 150 km under kontinenter.',
    },
    {
      id: 'geo1-3-2-skorpetyper',
      type: 'text',
      content: `## Oseanisk og kontinental skorpe

Litosfaeren bestaar av to typer skorpe med svart forskjellige egenskaper:

### Oseanisk skorpe

- **Tykkelse**: 5-10 km (tynn)
- **Sammensetning**: Hovedsakelig basalt og gabbro
- **Tetthet**: Hoey (ca. 3,0 g/cm3)
- **Alder**: Ung - maks ca. 200 millioner aar
- **Dannelse**: Ved midthavsrygger

### Kontinental skorpe

- **Tykkelse**: 25-70 km (tykk, tykkest under fjellkjeder)
- **Sammensetning**: Hovedsakelig granitt og granodioritt
- **Tetthet**: Lavere (ca. 2,7 g/cm3)
- **Alder**: Kan vaere svart gammel - opptil 4 milliarder aar
- **Dannelse**: Kompleks prosess over lang tid

### Hvorfor flyter kontinentene hoeyere?

Tenk paa et isfjell: det flyter fordi isen er lettere enn vannet. Paa samme maate "flyter" den lette kontinentale skorpen hoeyere paa den tyngre mantelen enn den tunge oseaniske skorpen gjoer. Dette kalles **isostasi**.`,
    },
    {
      id: 'geo1-3-2-def-isostasi',
      type: 'definition',
      title: 'Isostasi',
      content: 'Isostasi er prinsippet om at litosfaeren flyter i likevekt paa den underliggende astenosfaeren. Lettere skorpe (kontinental) flyter hoeyere enn tyngre skorpe (oseanisk). Naar masse legges til eller fjernes (f.eks. isbreer), justerer skorpen seg vertikalt for aa gjenopprette likevekt.',
    },
    {
      id: 'geo1-3-2-plater',
      type: 'text',
      content: `## De tektoniske platene

Litosfaeren er delt inn i omtrent 15 store plater og en rekke mindre. De stoerste platene er:

### Store plater

| Plate | Type | Saerlige trekk |
|-------|------|----------------|
| Stillehavsplaten | Nesten helt oseanisk | Stoerste plate, hurtigst bevegelse |
| Den nordamerikanske | Blandet | Inneholder Nord-Amerika og halve Atlanterhavet |
| Den eurasiske | Blandet | Inneholder Europa og Asia |
| Den afrikanske | Blandet | Afrika og omliggende havbunn |
| Den antarktiske | Blandet | Antarktis og omliggende havbunn |
| Den indoaustralske | Blandet | India, Australia og havbunn |
| Den soeramerikanske | Blandet | Soer-Amerika og vestlige Atlanterhavet |

### Mellomstoere plater

- Nazcaplaten (oseanisk, utenfor Soer-Amerika)
- Kokosplaten (oseanisk, utenfor Mellom-Amerika)
- Filippinerplaten (oseanisk)
- Den arabiske platen
- Den karibiske platen
- Scottiaplaten

### Platenes hastighet

Platene beveger seg med hastigheter fra 1 til ca. 15 cm per aar:
- **Raske plater**: Stillehavsplaten (ca. 10 cm/aar)
- **Langsomme plater**: Den eurasiske platen (ca. 2 cm/aar)

Til sammenligning vokser neglene vaare med ca. 3-4 cm per aar!`,
    },
    {
      id: 'geo1-3-2-example',
      type: 'example',
      title: 'Beregne platebevegelse over tid',
      problem: 'Den nordamerikanske og eurasiske platen beveger seg fra hverandre med ca. 2,5 cm per aar. Hvor mye bredere vil Atlanterhavet vaere om 1 million aar?',
      solution: `**Beregning:**

Gitt:
- Spredningshastighet: 2,5 cm/aar
- Tid: 1 000 000 aar

Utvidelse = Hastighet x Tid
Utvidelse = 2,5 cm/aar x 1 000 000 aar
Utvidelse = 2 500 000 cm
Utvidelse = 25 000 m = 25 km

**Svar:** Om 1 million aar vil Atlanterhavet vaere ca. 25 km bredere enn i dag.

**Perspektiv:** Atlanterhavet aapnet seg for ca. 180 millioner aar siden. Hvis vi antar samme gjennomsnittlige hastighet, gir dette en total utvidelse paa ca. 4500 km - som stemmer godt med dagens bredde!`,
    },
  ],
  exercises: [
    {
      id: 'geo1-3-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er litosfaeren?',
      options: [
        { id: 'a', text: 'Jordens ytre, stive skall som bestaar av skorpen og oeverste mantelen', isCorrect: true },
        { id: 'b', text: 'Det smeltede laget under jordskorpen', isCorrect: false },
        { id: 'c', text: 'Bare den oseaniske skorpen', isCorrect: false },
        { id: 'd', text: 'Jordens indre kjerne', isCorrect: false },
      ],
      solution: 'Litosfaeren er jordens ytre, stive lag som omfatter hele skorpen (baade oseanisk og kontinental) og den oeverste delen av mantelen. Den er delt inn i tektoniske plater.',
    },
    {
      id: 'geo1-3-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Sammenlign oseanisk og kontinental skorpe med hensyn til tykkelse, sammensetning, tetthet og alder.',
      solution: 'Oseanisk skorpe: Tynn (5-10 km), bestaar av basalt/gabbro, hoey tetthet (3,0 g/cm3), ung (maks 200 mill. aar). Kontinental skorpe: Tykk (25-70 km), bestaar av granitt/granodioritt, lavere tetthet (2,7 g/cm3), kan vaere svart gammel (opptil 4 mrd. aar). Den lavere tettheten gjoer at kontinental skorpe flyter hoeyere paa mantelen (isostasi).',
    },
    {
      id: 'geo1-3-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken tektonisk plate er stoerst og beveger seg raskest?',
      options: [
        { id: 'a', text: 'Stillehavsplaten', isCorrect: true },
        { id: 'b', text: 'Den eurasiske platen', isCorrect: false },
        { id: 'c', text: 'Den afrikanske platen', isCorrect: false },
        { id: 'd', text: 'Den nordamerikanske platen', isCorrect: false },
      ],
      solution: 'Stillehavsplaten er den stoerste tektoniske platen og beveger seg raskest (ca. 10 cm/aar). Den er nesten helt oseanisk, noe som forklarer den hoye hastigheten - den har mye subduksjon som drar platen fremover.',
    },
    {
      id: 'geo1-3-2-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar begrepet isostasi og hvordan det forklarer at kontinenter staar hoeyere enn havbunnen.',
      solution: 'Isostasi er prinsippet om at litosfaeren flyter i likevekt paa den plastiske astenosfaeren, akkurat som et isfjell flyter paa vann. Kontinental skorpe har lavere tetthet (2,7 g/cm3) enn oseanisk skorpe (3,0 g/cm3), saa den flyter hoeyere. I tillegg er kontinental skorpe mye tykkere (25-70 km vs 5-10 km), saa mer av den stikker opp over "vannlinjen". Naar masse legges til (f.eks. isbreer) synker skorpen, og naar den fjernes, heves skorpen - dette ser vi i Skandinavia etter istiden.',
    },
  ],
};

// ============================================================================
// Kapittel 3.3: Divergerende plategrenser
// ============================================================================

export const CHAPTER_GEOFAG_1_3_3: TextbookChapter = {
  id: 'geofag-1-3-3',
  courseId: 'geofag-1',
  chapterNumber: '3.3',
  title: 'Divergerende plategrenser',
  description: 'Midthavsrygger, havbunnspredning, kontinentale rifter og dannelse av ny skorpe.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare prosessene ved divergerende plategrenser',
    'beskrive havbunnspredning og midthavsryggenes rolle',
    'gjoere rede for kontinentale rifter og hvordan nye hav dannes',
    'forstaa de magnetiske stripene paa havbunnen som bevis for havbunnspredning',
  ],
  content: [
    {
      id: 'geo1-3-3-intro',
      type: 'text',
      content: `# Divergerende plategrenser

Ved divergerende plategrenser beveger to plater seg fra hverandre. Her skapes ny litosfaere, og jordens overflate utvides - selv om den totale stoerrelsen forblir konstant (balanseres av subduksjon andre steder).

## Tre typer plategrenser

Foer vi fordyper oss i divergerende grenser, la oss se helheten:

1. **Divergerende**: Platene beveger seg fra hverandre (tema for dette kapitlet)
2. **Konvergerende**: Platene beveger seg mot hverandre (neste kapittel)
3. **Transform**: Platene glir sidelengs forbi hverandre (kapittel 3.5)

Ved divergerende grenser stiger varm mantel opp, smelter delvis, og magma traenger opp og stoerkner til ny skorpe.`,
    },
    {
      id: 'geo1-3-3-def-divergerende',
      type: 'definition',
      title: 'Divergerende plategrense',
      content: 'En divergerende plategrense er der to tektoniske plater beveger seg fra hverandre. Magma fra mantelen stiger opp og stoerkner til ny oseanisk skorpe. Eksempler er midthavsrygger og kontinentale rifter.',
    },
    {
      id: 'geo1-3-3-midthavsrygger',
      type: 'text',
      content: `## Midthavsrygger

Midthavsrygger er det lengste fjellsystemet paa jorden - over 65 000 km langt! De ligger for det meste paa havbunnen og markerer divergerende grenser mellom oseaniske plater.

### Kjennetegn ved midthavsrygger

- **Sentral rift**: En dal langs ryggens topp der platene trekkes fra hverandre
- **Vulkansk aktivitet**: Basaltisk lava stroemmer ut og danner ny havbunn
- **Grunne jordskjelv**: Paa grunn av strekkbevegelser i skorpen
- **Hoey varmestroemning**: Varm mantel naer overflaten
- **Hydrotermale skorsteiner**: "Black smokers" der oppvarmet sjoekvann stroemmer ut

### Eksempler

- **Midtatlantiske ryggen**: Deler Atlanterhavet, gaar gjennom Island
- **Den oestpasifiske ryggen**: Raskeste spredning (opptil 15 cm/aar)
- **Den indiske ryggen**: Forbinder Atlanterhavet med Stillehavet

### Island - et vindu til dypet

Island er det eneste stedet der en midthavsrygg stikker opp over havet. Her kan vi studere prosessene direkte:
- Aktiv vulkanisme (Eyjafjallajokull, Hekla)
- Synlige sprengsprekker (Thingvellir)
- Geotermisk energi fra varmen`,
    },
    {
      id: 'geo1-3-3-havbunnspredning',
      type: 'text',
      content: `## Havbunnspredning

Harry Hess foreslo teorien om havbunnspredning i 1962. Den forklarer hvordan ny havbunn dannes ved midthavsrygger og sprer seg til begge sider.

### Prosessen

1. Varm mantel stiger opp under midthavsryggen
2. Trykkavlastningen faar mantelen til aa smelte delvis
3. Magma traenger opp gjennom sprekker
4. Magma stoerkner til basalt paa havbunnen
5. Ny magma skyver den tidligere dannede skorpen til siden
6. Skorpen avkjoeles og synker gradvis naar den beveger seg bort fra ryggen

### Bevisene: Magnetiske striper

Det mest overbevisende beviset for havbunnspredning er de magnetiske stripene paa havbunnen:

- Jordas magnetfelt skifter retning med ujevne mellomrom (magnetfeltomvendinger)
- Naar basalt stoerkner, "fryses" den aktuelle magnetiske retningen fast
- Dette skaper symmetriske striper med vekslende normal og reversert magnetisering paa begge sider av ryggen
- Stripene er som et "baandopptak" av magnetfeltets historie

### Alder og dybde

Havbunnen har en karakteristisk aldersfordeling:
- **Yngst ved ryggen**: 0-1 millioner aar, grunn (2-3 km dybde)
- **Eldst ved kontinentene**: Opptil 200 millioner aar, dyp (5-6 km dybde)

Hvorfor synker havbunnen med alderen? Naar skorpen avkjoeles, blir den tettere og synker dypere ned i astenosfaeren.`,
    },
    {
      id: 'geo1-3-3-def-havbunnspredning',
      type: 'definition',
      title: 'Havbunnspredning',
      content: 'Havbunnspredning er prosessen der ny oseanisk litosfaere dannes ved midthavsrygger og beveger seg bort til begge sider. Teorien ble forelaatt av Harry Hess i 1962 og bekreftes av de magnetiske stripene paa havbunnen.',
    },
    {
      id: 'geo1-3-3-rifter',
      type: 'text',
      content: `## Kontinentale rifter

Naar divergerende krefter virker paa et kontinent, kan det begynne aa sprekke opp. Dette kalles en kontinental rift.

### Den oestafrikanske riften

Det beste eksemplet paa en aktiv kontinental rift er den oestafrikanske riften, som streker seg fra Etiopia til Mosambik.

**Kjennetegn:**
- Langstrakt dalsenkning (graben)
- Aktiv vulkanisme (Kilimanjaro, Mount Kenya)
- Store innsjoeeer (Victoria, Tanganyika, Malawi)
- Jordskjelv
- Avtagende skorpetykkelse

**Fremtiden:** Om noen titalls millioner aar kan oestlige Afrika loesrive seg og danne en oeey, og et nytt hav vil aapne seg.

### Roedeahavet - et nyfoaedt hav

Roedehavet viser et senere stadium i riftutviklingen:
- Afrika og Den arabiske halvoeey driver fra hverandre
- En midthavsrygg har dannet seg i midten
- Ny oseanisk skorpe dannes
- Om noen hundre millioner aar kan Roedehavet bli like bredt som Atlanterhavet

### Wilson-syklusen

Geologen J. Tuzo Wilson beskrev hvordan hav aapner og lukker seg over hundrevis av millioner aar:

1. **Rift-stadium**: Kontinentet begynner aa sprekke (Oestafrikansk rift)
2. **Ungt hav**: Smalt hav med midthavsrygg (Roedehavet)
3. **Modent hav**: Bredt hav med midthavsrygg (Atlanterhavet)
4. **Synkende hav**: Subduksjon starter, havet krymper
5. **Kollisjon**: Kontinentene moetes, fjellkjede dannes
6. **Ny rift**: Syklusen gjentas`,
    },
    {
      id: 'geo1-3-3-example',
      type: 'example',
      title: 'Tolke magnetiske striper',
      problem: 'Paa en havbunn finner vi magnetiske striper som er symmetriske rundt en midthavsrygg. Stripene naermest ryggen viser normal magnetisering (som i dag), mens de neste stripene viser reversert magnetisering. Hva forteller dette oss?',
      solution: `**Tolkning av magnetiske striper:**

1. **Symmetrien** viser at havbunnen dannes ved ryggen og sprer seg til begge sider med lik hastighet.

2. **Normal magnetisering naermest ryggen** betyr at denne havbunnen ble dannet i en periode med samme magnetfeltretning som i dag.

3. **Reversert magnetisering i neste stripe** viser at denne delen ble dannet i en periode da jordas magnetfelt pekte motsatt vei.

4. **Stripemoensteret** fungerer som en tidslinje:
   - Vi kan datere stripene ved aa sammenligne med kjente magnetfeltomvendinger
   - Dette gir oss havbunnens alder i ulike avstander fra ryggen
   - Vi kan beregne spredningshastigheten

5. **Konklusjon:** De magnetiske stripene er et av de sterkeste bevisene for havbunnspredning og dermed for platetektonikk.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-3-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skjer ved en divergerende plategrense?',
      options: [
        { id: 'a', text: 'Platene beveger seg fra hverandre og ny skorpe dannes', isCorrect: true },
        { id: 'b', text: 'Platene kolliderer og fjellkjeder dannes', isCorrect: false },
        { id: 'c', text: 'En plate dykker under en annen', isCorrect: false },
        { id: 'd', text: 'Platene glir horisontalt forbi hverandre', isCorrect: false },
      ],
      solution: 'Ved divergerende plategrenser beveger platene seg fra hverandre. Magma stiger opp og stoerkner til ny oseanisk skorpe. Dette skjer ved midthavsrygger og kontinentale rifter.',
    },
    {
      id: 'geo1-3-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan magnetiske striper paa havbunnen beviser havbunnspredning.',
      solution: 'Magnetiske striper dannes fordi: 1) Jordas magnetfelt reverserer med ujevne mellomrom. 2) Naar basalt stoerkner ved midthavsryggen, "fryses" det aktuelle magnetfeltet inn. 3) Ny basalt dannes kontinuerlig og skyver eldre basalt til begge sider. 4) Resultatet er symmetriske striper med vekslende normal og reversert magnetisering paa begge sider av ryggen. Denne symmetrien kan bare forklares med havbunnspredning.',
    },
    {
      id: 'geo1-3-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket hav representerer et tidlig stadium i dannelsen av et nytt hav?',
      options: [
        { id: 'a', text: 'Roedehavet', isCorrect: true },
        { id: 'b', text: 'Atlanterhavet', isCorrect: false },
        { id: 'c', text: 'Stillehavet', isCorrect: false },
        { id: 'd', text: 'Middelhavet', isCorrect: false },
      ],
      solution: 'Roedehavet er et ungt hav som fortsatt utvides. Det har en aktiv midthavsrygg i midten og representerer et tidlig stadium i Wilson-syklusen. Atlanterhavet er et modent hav, mens Stillehavet faktisk krymper.',
    },
    {
      id: 'geo1-3-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv den oestafrikanske riften og forklar hva som kan skje med dette omraadet i fremtiden.',
      solution: 'Den oestafrikanske riften er en aktiv kontinental rift som streker seg fra Etiopia til Mosambik. Kjennetegn: langstrakt dalsenkning (graben), aktiv vulkanisme, store innsjoeeer, jordskjelv og avtagende skorpetykkelse. I fremtiden (om titalls millioner aar) kan oestlige Afrika loesrive seg og danne en oeey. Omraadet mellom vil fylles av hav med en ny midthavsrygg, akkurat som Roedehavet utvikler seg i dag.',
    },
    {
      id: 'geo1-3-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor havbunnen er dypere jo lenger fra midthavsryggen den er.',
      solution: 'Havbunnens dybde oeeker med avstanden fra midthavsryggen paa grunn av termisk sammentrekning: 1) Ved ryggen er skorpen varm og har lav tetthet, saa den flyter hoeyt. 2) Naar skorpen beveger seg bort fra ryggen, avkjoeles den gradvis. 3) Avkjoeling gjoer skorpen tettere (termisk sammentrekning). 4) Tettere skorpe synker dypere ned i astenosfaeren (isostasi). 5) I tillegg legger sedimenter seg oppaa den eldre havbunnen, men dette oppveies av subsidensen. Denne sammenhengen brukes til aa beregne havbunnens alder ut fra dybden.',
    },
  ],
};

// ============================================================================
// Kapittel 3.4: Konvergerende plategrenser og subduksjon
// ============================================================================

export const CHAPTER_GEOFAG_1_3_4: TextbookChapter = {
  id: 'geofag-1-3-4',
  courseId: 'geofag-1',
  chapterNumber: '3.4',
  title: 'Konvergerende plategrenser og subduksjon',
  description: 'Subduksjon, dyphavsgaver, vulkanbuer, fjellkjededannelse og de tre typene konvergens.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare prosessene ved konvergerende plategrenser',
    'beskrive subduksjon og tilhoerende geologiske fenomener',
    'skille mellom oseanisk-oseanisk, oseanisk-kontinental og kontinental-kontinental konvergens',
    'forstaa dannelsen av vulkanbuer, dyphavsgaver og fjellkjeder',
  ],
  content: [
    {
      id: 'geo1-3-4-intro',
      type: 'text',
      content: `# Konvergerende plategrenser og subduksjon

Ved konvergerende plategrenser beveger to plater seg mot hverandre. Hva som skjer naar de moetes, avhenger av hvilke typer plater som er involvert. Her finner vi noen av jordens mest dramatiske geologiske fenomener: dype havgraver, vulkankjeder og de hoeyeste fjellene.

## Subduksjon - naar plater synker

Naar en tyngre plate moeter en lettere, synker den tyngre platen ned under den andre og ned i mantelen. Denne prosessen kalles **subduksjon**.

Oseanisk skorpe er tettere enn kontinental skorpe, saa:
- Oseanisk skorpe subduserer alltid under kontinental skorpe
- Ved moete mellom to oseaniske plater, subduserer den eldste (kaldeste og tyngste)`,
    },
    {
      id: 'geo1-3-4-def-subduksjon',
      type: 'definition',
      title: 'Subduksjon',
      content: 'Subduksjon er prosessen der en litosfaereplate synker ned under en annen plate og ned i mantelen. Den subduserende platen varmes opp, og vann frigjort fra platen faar mantelen over til aa smelte, noe som gir vulkanisme. Subduksjon skjer ved konvergerende plategrenser.',
    },
    {
      id: 'geo1-3-4-oseanisk-oseanisk',
      type: 'text',
      content: `## Oseanisk-oseanisk konvergens

Naar to oseaniske plater konvergerer, subduserer den eldste platen under den yngre.

### Dannelse av vulkansk oeeybue

1. Den eldre platen boyes ned og synker
2. En **dyphavsgrav** dannes der platen begynner aa synke
3. Platen tar med seg vann (i mineraler og sedimenter)
4. Paa ca. 100-150 km dyp frigjoeeres vannet
5. Vannet senker smeltepunktet til mantelen over
6. Magma stiger opp og danner vulkaner paa havbunnen
7. Over tid vokser vulkanene opp over havet og danner en **oeeybue**

### Eksempler paa oeeybuer

- **Japan**: Stillehavsplaten subduserer under Filippinerplaten
- **Marianene**: Verdens dypeste punkt (Marianergraven, 11 034 m)
- **Aleutene**: Stillehavsplaten subduserer under den nordamerikanske platen
- **Indonesia**: Kompleks subduksjonssone
- **Tonga og Kermadec**: Stillehavsplaten subduserer vestover

### Kjennetegn ved oeeybuer

- Bueformet rekke av vulkanske oeyer
- Dyphavsgrav paa utsiden av buen
- Aktiv vulkanisme (andesittisk til basaltisk)
- Hyppige og ofte kraftige jordskjelv`,
    },
    {
      id: 'geo1-3-4-oseanisk-kontinental',
      type: 'text',
      content: `## Oseanisk-kontinental konvergens

Naar oseanisk skorpe moeter kontinental skorpe, subduserer alltid den oseaniske platen fordi den er tettere.

### Prosessen

1. Oseanisk plate synker under kontinentet
2. **Dyphavsgrav** dannes naaer kysten
3. Vann frigjoeeres og senker smeltepunktet til mantelen
4. Magma stiger opp gjennom den kontinentale skorpen
5. **Vulkankjede** dannes paa kontinentet (andinske vulkaner)
6. Sedimenter skrapes av og danner en **akkresjonsprisme**
7. Kontinentet komprimeres og forhoyes

### Andene som eksempel

Andene i Soer-Amerika er det klassiske eksemplet:
- Nazcaplaten (oseanisk) subduserer under Soer-Amerika
- Peru-Chile-graven ligger rett utenfor kysten (opptil 8 km dyp)
- Aktive vulkaner langs hele fjellkjeden
- Kraftige jordskjelv (Chile 1960: 9,5 paa Richters skala)

### Andre eksempler

- **Cascade Range** (USA): Juan de Fuca-platen subduserer (Mount St. Helens)
- **Vestkysten av Mexico**: Kokosplaten subduserer
- **Indonesia**: Kompleks system med subduksjon

### Andesittisk vulkanisme

Ved oseanisk-kontinental konvergens er magmaen ofte andesittisk (mellom basalt og ryolitt i sammensetning):
- Mer eksplosive utbrudd enn ved basalt
- Stratovulkaner med bratte sider
- Farlige: pyroklastiske stroemmer, laharer (gjoeermeskred)`,
    },
    {
      id: 'geo1-3-4-def-dyphavsgrav',
      type: 'definition',
      title: 'Dyphavsgrav',
      content: 'En dyphavsgrav er en langstrakt, dyp fordypning i havbunnen som dannes der en litosfaereplate begynner aa subdusere. Marianergraven er verdens dypeste paa 11 034 meter. Dyphavsgravene markerer konvergerende plategrenser.',
    },
    {
      id: 'geo1-3-4-kontinental-kontinental',
      type: 'text',
      content: `## Kontinental-kontinental konvergens

Naar to kontinentale plater kolliderer, er begge for lette til aa subdusere. I stedet presses de sammen, og resultatet er de hoeyeste fjellkjedene paa jorden.

### Prosessen

1. Foerst kan oseanisk skorpe mellom kontinentene subdusere
2. Naar havet er lukket, kolliderer kontinentene direkte
3. Skorpen foldes, forkastes og fortykes
4. Fjellkjede presses opp (orogenese)
5. Skorperoeetter kan skyves hundrevis av kilometer
6. Prosessen kan vare i titalls millioner aar

### Himalaya - jordens hoeyeste

Himalaya er det beste eksemplet paa kontinental kollisjon:
- India rev seg loes fra Afrika/Antarktis for ca. 130 millioner aar siden
- Drev nordover med opptil 15 cm/aar
- Kolliderte med Eurasia for ca. 50 millioner aar siden
- Tethyshavet (mellom dem) ble lukket
- India fortsetter aa presse nordover med ca. 5 cm/aar
- Himalaya vokser fortsatt med ca. 1 cm/aar
- Mount Everest: 8849 m

### Saerlige trekk ved kontinental kollisjon

- **Ingen vulkanisme**: Fordi det ikke er subduksjon
- **Kraftige jordskjelv**: Ofte i stort dyp
- **Enorme fjellkjeder**: Himalaya, Alpene, Ural
- **Skorpefortykning**: Opptil 70 km tykk skorpe under Himalaya/Tibet
- **Tibetplataaet**: Verdens hoeyeste og stoerste plataa

### Andre eksempler

- **Alpene**: Afrika presser mot Europa
- **Zagros-fjellene**: Arabia presser mot Eurasia
- **Ural**: Gammel kollisjonssone mellom Europa og Asia`,
    },
    {
      id: 'geo1-3-4-example',
      type: 'example',
      title: 'Ildringen rundt Stillehavet',
      problem: 'Forklar hvorfor det er saa mange vulkaner og jordskjelv rundt Stillehavet, i det som kalles "Ildringen" (Ring of Fire).',
      solution: `**Ildringen (Ring of Fire):**

Ildringen er en hestesko-formet sone rundt Stillehavet med intens vulkansk og seismisk aktivitet.

**Aarsak:**
Stillehavsplaten er nesten helt omgitt av konvergerende plategrenser der den subduserer under naboplatene:

1. **I vest**: Subduserer under Filippinene, Japan, Kamtsjatka
2. **I nord**: Subduserer under Aleutene
3. **I oest**: Nazcaplaten og andre smaa plater subduserer under Amerika

**Konsekvenser:**
- Ca. 75% av verdens aktive vulkaner ligger i Ildringen
- Ca. 90% av verdens jordskjelv skjer her
- Dyphavsgravene langs randen (Marianergraven, Peru-Chile-graven)
- Vulkanske oeeybuer (Japan, Indonesia, Filippinene)
- Kontinentale vulkankjeder (Andene, Cascade Range)

**Viktige vulkaner i Ildringen:**
- Mount Fuji (Japan)
- Krakatau (Indonesia)
- Mount St. Helens (USA)
- Cotopaxi (Ecuador)
- Mount Pinatubo (Filippinene)`,
    },
  ],
  exercises: [
    {
      id: 'geo1-3-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er subduksjon?',
      options: [
        { id: 'a', text: 'Prosessen der en plate synker ned under en annen og ned i mantelen', isCorrect: true },
        { id: 'b', text: 'Prosessen der to plater glir forbi hverandre', isCorrect: false },
        { id: 'c', text: 'Prosessen der ny havbunn dannes ved midthavsrygger', isCorrect: false },
        { id: 'd', text: 'Prosessen der et kontinent brytes opp', isCorrect: false },
      ],
      solution: 'Subduksjon er prosessen der en tung litosfaereplate (vanligvis oseanisk) synker ned under en lettere plate og ned i mantelen. Dette skjer ved konvergerende plategrenser.',
    },
    {
      id: 'geo1-3-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan en vulkansk oeeybue dannes ved oseanisk-oseanisk konvergens.',
      solution: 'Naar to oseaniske plater konvergerer, subduserer den eldste (tyngste): 1) Den synkende platen tar med seg vann i mineraler og sedimenter. 2) Paa ca. 100-150 km dyp frigjoeeres vannet. 3) Vannet senker smeltepunktet til mantelen over platen. 4) Magma dannes og stiger opp. 5) Vulkaner bygger seg opp paa havbunnen. 6) Over tid vokser de over havet og danner en bueformet rekke av oeyer. Eksempler: Japan, Marianene, Aleutene.',
    },
    {
      id: 'geo1-3-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor er det ingen vulkaner i Himalaya?',
      options: [
        { id: 'a', text: 'Fordi begge platene er kontinentale og ingen subduserer', isCorrect: true },
        { id: 'b', text: 'Fordi fjellene er for hoeye for vulkaner', isCorrect: false },
        { id: 'c', text: 'Fordi kollisjonssonen er for gammel', isCorrect: false },
        { id: 'd', text: 'Fordi det er for kaldt i Himalaya', isCorrect: false },
      ],
      solution: 'Himalaya dannes ved kollisjon mellom to kontinentale plater (India og Eurasia). Kontinental skorpe er for lett til aa subdusere, saa ingen plate synker ned i mantelen. Uten subduksjon frigjoeeres ikke vann som kan foraarsake smelting, og dermed dannes ingen magma og ingen vulkaner.',
    },
    {
      id: 'geo1-3-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Sammenlign geologiske fenomener ved oseanisk-oseanisk og oseanisk-kontinental konvergens.',
      solution: 'Likheter: Begge har subduksjon, dyphavsgrav, vulkanisme og jordskjelv. Forskjeller: Ved oseanisk-oseanisk dannes vulkanske oeeybuer (som Japan, Aleutene) paa havbunnen. Ved oseanisk-kontinental dannes vulkankjeder paa kontinentet (som Andene). Ved oseanisk-kontinental dannes ogsaa en akkresjonsprisme av avskapte sedimenter. Vulkanisme ved oseanisk-kontinental er ofte mer eksplosiv (andesittisk) fordi magmaen interagerer med kontinental skorpe.',
    },
    {
      id: 'geo1-3-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar utviklingen av Himalaya fra Indias loesrivelse fra Gondwana til i dag.',
      solution: 'Tidslinje: 1) For ca. 130 mill. aar siden rev India seg loes fra Gondwana (Afrika/Antarktis). 2) India drev nordover med opptil 15 cm/aar - en av de raskeste platebevegelsene registrert. 3) Tethyshavet (mellom India og Asia) krympet gradvis ved subduksjon. 4) For ca. 50 mill. aar siden kolliderte India med Eurasia. 5) Uten mulighet for subduksjon av kontinental skorpe, begynte massiv forkorting og fortykning. 6) Himalaya begynte aa heve seg. 7) I dag presser India fortsatt nordover med ca. 5 cm/aar. 8) Himalaya vokser med ca. 1 cm/aar. 9) Skorpen under Tibet er opptil 70 km tykk. 10) Prosessen paagaar fortsatt, med hyppige jordskjelv.',
    },
  ],
};

// ============================================================================
// Kapittel 3.5: Transform grenser og drivkrefter
// ============================================================================

export const CHAPTER_GEOFAG_1_3_5: TextbookChapter = {
  id: 'geofag-1-3-5',
  courseId: 'geofag-1',
  chapterNumber: '3.5',
  title: 'Transform grenser og drivkrefter',
  description: 'Transform forkastninger, sidelengs platebevegelse, og drivkreftene bak platetektonikk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive transform plategrenser og deres kjennetegn',
    'gi eksempler paa transform forkastninger og deres konsekvenser',
    'forklare drivkreftene bak platebevegelser',
    'vurdere de ulike drivkreftenes relative betydning',
  ],
  content: [
    {
      id: 'geo1-3-5-intro',
      type: 'text',
      content: `# Transform grenser og drivkrefter

I dette kapitlet ser vi paa den tredje typen plategrense - transform grenser - og undersoeker hva som egentlig driver de tektoniske platene.

## Transform plategrenser

Ved transform grenser glir to plater horisontalt forbi hverandre. Her dannes verken ny skorpe (som ved divergerende grenser) eller oedelegges skorpe (som ved subduksjon).

### Kjennetegn

- **Sidelengs bevegelse**: Platene glir langs hverandre
- **Kraftige jordskjelv**: Grunn men kan vaere svart sterke
- **Ingen vulkaner**: Ingen smelting fordi det ikke er vertikal bevegelse
- **Forkastningssoner**: Knuste og deformerte bergarter langs grensen`,
    },
    {
      id: 'geo1-3-5-def-transform',
      type: 'definition',
      title: 'Transform plategrense',
      content: 'En transform plategrense er der to tektoniske plater glir horisontalt forbi hverandre langs en vertikal forkastning. Det dannes verken ny eller oedelegges skorpe. Transform grenser er ofte forbundet med kraftige, grunne jordskjelv.',
    },
    {
      id: 'geo1-3-5-san-andreas',
      type: 'text',
      content: `## San Andreas-forkastningen

Den mest kjente transform grensen er San Andreas-forkastningen i California, USA.

### Karakteristikk

- **Lengde**: Ca. 1300 km fra nord til soer
- **Plater**: Stillehavsplaten (vest) og den nordamerikanske platen (oest)
- **Bevegelse**: Stillehavsplaten beveger seg nordvestover
- **Hastighet**: Ca. 3-5 cm/aar
- **Type**: Hoeyrelengs sideforkastning

### Historiske jordskjelv

- **1906 San Francisco**: Magnitude ca. 7,9, over 3000 doede
- **1989 Loma Prieta**: Magnitude 6,9, 63 doede, store skader
- **Fremtiden**: Geologer forventer et stort jordskjelv ("The Big One") i kommende tiaar

### Los Angeles paa vei til San Francisco

Fordi Los Angeles ligger paa Stillehavsplaten og San Francisco paa den nordamerikanske, beveger de seg mot hverandre med ca. 5 cm/aar. Om ca. 15 millioner aar vil de vaere naboer!

## Andre transform grenser

### Doedhavsforkastningen
- Mellom den afrikanske og arabiske platen
- Jordan-dalen, Doedeahavet, Roedeahavet
- Aktivt jordskjelvomraade

### Alpine Fault (New Zealand)
- Mellom Stillehavsplaten og den australske platen
- Gaar gjennom Soeroeya
- Hoey seismisk risiko

### Transform forkastninger langs midthavsrygger
- Korte segmenter som forskyver ryggen sidelengs
- Kalles oceans transform faults
- Mindre jordskjelv enn paa land`,
    },
    {
      id: 'geo1-3-5-drivkrefter',
      type: 'text',
      content: `## Drivkreftene bak platetektonikk

Det store spoersmaalet Wegener ikke kunne svare paa var: Hva driver platene? I dag vet vi at flere krefter samvirker.

### 1. Slab pull (platetrekk) - viktigst!

Naar en kald, tung plate subduserer, synker den ned i mantelen. Denne synkende platen ("slab") drar resten av platen med seg.

**Bevis:**
- Plater med mye subduksjon (Stillehavsplaten) beveger seg raskt (~10 cm/aar)
- Plater med lite subduksjon (Afrikaplatnen) beveger seg sakte (~2 cm/aar)

Slab pull regnes som den viktigste drivkraften.

### 2. Ridge push (ryggpaatrykk)

Midthavsrygger er hoeyere enn omliggende havbunn fordi den unge, varme skorpen flyter hoeyere. Tyngdekraften faar platen til aa gli "nedover" bort fra ryggen.

**Styrke:** Ca. 1/10 av slab pull

### 3. Mantelkonveksjon

Varme fra jordens indre driver konveksjonsstroemmer i mantelen:
- Varmt materiale stiger opp (ved midthavsrygger og hotspots)
- Avkjoelt materiale synker ned (ved subduksjonssoner)
- Horisontal bevegelse kan dra eller bremse platene

Mantelkonveksjonens eksakte rolle debatteres fortsatt.`,
    },
    {
      id: 'geo1-3-5-def-slabpull',
      type: 'definition',
      title: 'Slab pull',
      content: 'Slab pull er den gravitasjonskraften som oppstaar naar en kald, tung litosfaereplate synker ned i mantelen ved en subduksjonssone. Den synkende platen trekker resten av platen med seg. Slab pull regnes som den viktigste drivkraften for platebevegelser.',
    },
    {
      id: 'geo1-3-5-konveksjon',
      type: 'text',
      content: `## Mantelkonveksjon i detalj

Mantelkonveksjon er den langsomme sirkulasjonen av materiale i jordens mantel, drevet av varmeforskjeller.

### Varmens opprinnelse

Varmen som driver konveksjonen kommer fra:
- **Restvarme** fra jordens dannelse
- **Radioaktivt henfall** av uran, thorium og kalium

### Konveksjonsprosessen

1. Varm mantel ved kjernen-mantel-grensen stiger opp (lavere tetthet)
2. Ved overflaten avkjoeles materialet
3. Kald mantel synker ned (hoeyere tetthet)
4. Prosessen gjentar seg i en kontinuerlig syklus

### Debatt om konveksjonsmodeller

**Helmantelkonveksjon:**
- Konveksjonen gaar gjennom hele mantelen
- Subduserende plater synker helt ned til kjernen

**Lagdelt konveksjon:**
- Ovre og nedre mantel sirkulerer separat
- Grense ved 660 km dyp

Moderne forskning tyder paa en kombinasjon av begge.

### Mantelplymer (hotspots)

Mantelplymer er soeyler av varmt materiale som stiger opp fra dypt i mantelen:
- Skaper vulkanske "hotspots" (Hawaii, Island, Yellowstone)
- Stasjonaere i forhold til platene
- Danner vulkankjeder naar platen beveger seg over`,
    },
    {
      id: 'geo1-3-5-example',
      type: 'example',
      title: 'Hawaii som hotspot-spor',
      problem: 'Hawaii-Emperor-kjeden streker seg fra Big Island i soeroest til Meiji-undersjoeiske fjell i nordvest. Big Island er vulkansk aktiv, mens oeeyene blir progressivt eldre nordvestover. Forklar dette moensteret.',
      solution: `**Hawaii-Emperor-kjeden som bevis for platebevegelse:**

**Observasjoner:**
- Big Island har aktive vulkaner (Kilauea, Mauna Loa)
- oeyer nordvestover blir progressivt eldre
- Meiji-fjellet (lengst nordvest) er ca. 70 millioner aar gammelt
- Kjeden har en knekk der den endrer retning

**Forklaring:**
1. En mantelpylme (hotspot) ligger under Hawaii
2. Hotspoten er stasjonaer i forhold til mantelen
3. Stillehavsplaten beveger seg nordvestover over hotspoten
4. Vulkaner dannes over hotspoten, deretter "slukner" de naar de beveger seg bort
5. Resultatet er en kjede av vulkaner med oekende alder bort fra hotspoten

**Knekken i kjeden:**
For ca. 47 millioner aar siden endret Stillehavsplaten bevegelsesretning. Dette vises som en skarp vinkel i kjeden.

**Beregning av hastighet:**
Avstand ca. 6000 km, alder ca. 70 millioner aar:
6000 km / 70 mill. aar = ca. 8,5 cm/aar

Dette stemmer godt med moderne maalinger av Stillehavsplatens bevegelse.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-3-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skjer ved en transform plategrense?',
      options: [
        { id: 'a', text: 'Platene glir horisontalt forbi hverandre', isCorrect: true },
        { id: 'b', text: 'Ny havbunn dannes', isCorrect: false },
        { id: 'c', text: 'En plate subduserer under en annen', isCorrect: false },
        { id: 'd', text: 'Fjellkjeder dannes ved kollisjon', isCorrect: false },
      ],
      solution: 'Ved transform plategrenser glir to plater horisontalt forbi hverandre. Det dannes verken ny eller oedelegges skorpe, men bevegelsen foraarsaker kraftige, grunne jordskjelv.',
    },
    {
      id: 'geo1-3-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv San Andreas-forkastningen og forklar hvorfor California har saa mange jordskjelv.',
      solution: 'San Andreas-forkastningen er en 1300 km lang transform grense i California. Stillehavsplaten glir nordvestover langs den nordamerikanske platen med ca. 5 cm/aar. Dette er en hoeyrelengs sideforkastning. Jordskjelv oppstaar fordi platene ikke glir jevnt - de haenger seg opp og bygger opp spenninger som utloeses plutselig. Store jordskjelv inkluderer San Francisco 1906 og Loma Prieta 1989. Fremtidige store jordskjelv ("The Big One") forventes.',
    },
    {
      id: 'geo1-3-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken drivkraft regnes som viktigst for platebevegelser?',
      options: [
        { id: 'a', text: 'Slab pull (platetrekk fra synkende plater)', isCorrect: true },
        { id: 'b', text: 'Ridge push (tyngdekraft fra midthavsrygger)', isCorrect: false },
        { id: 'c', text: 'Jordrotasjonen', isCorrect: false },
        { id: 'd', text: 'Maanens tiltrekning', isCorrect: false },
      ],
      solution: 'Slab pull regnes som den viktigste drivkraften. Naar en kald, tung plate subduserer, drar den resten av platen med seg. Beviset er at plater med mye subduksjon (som Stillehavsplaten) beveger seg raskt, mens plater med lite subduksjon beveger seg sakte.',
    },
    {
      id: 'geo1-3-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar de tre hoveddrivkreftene bak platebevegelser og ranger dem etter viktighet.',
      solution: 'De tre hoveddrivkreftene er: 1) Slab pull (viktigst): Naar en kald, tung plate subduserer, drar den resten av platen med seg ned i mantelen. 2) Ridge push: Midthavsrygger er hoeyere enn havbunnen rundt, og tyngdekraften faar platen til aa gli bort fra ryggen. Styrken er ca. 1/10 av slab pull. 3) Mantelkonveksjon: Sirkulasjon i mantelen drevet av varmeforskjeller kan dra platene med seg, men den eksakte rollen debatteres. Slab pull > Ridge push > Mantelkonveksjon (basal drag).',
    },
    {
      id: 'geo1-3-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan hotspots og vulkankjeder som Hawaii-kjeden kan brukes til aa bestemme platebevegelsers retning og hastighet.',
      solution: 'Hotspots er stasjonaere vulkanske kilder dypt i mantelen. Naar en plate beveger seg over en hotspot: 1) En vulkan dannes rett over hotspoten. 2) Platen beveger seg videre og vulkanen slukner. 3) En ny vulkan dannes over hotspoten. 4) Over tid dannes en kjede av vulkaner med oekende alder bort fra hotspoten. Ved aa: a) Maale avstanden mellom vulkaner og b) Datere bergartene, kan vi beregne platens hastighet (avstand/tid). Retningen paa kjeden viser platens bevegelsesretning. Endringer i retning (som knekken i Hawaii-kjeden) viser naar platen endret kurs. Hawaii-kjeden viser at Stillehavsplaten beveger seg nordvestover med ca. 8-9 cm/aar.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler i Del 3
// ============================================================================

export const GEOFAG_1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_1_3_1,
  CHAPTER_GEOFAG_1_3_2,
  CHAPTER_GEOFAG_1_3_3,
  CHAPTER_GEOFAG_1_3_4,
  CHAPTER_GEOFAG_1_3_5,
];

export function getGeofag1Del3Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_DEL3_CHAPTERS.find(chapter => chapter.id === chapterId);
}
