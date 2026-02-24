/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geografi VG1 - Del 2: Geologi og landformer
 *
 * Dekker LK20-kompetansemaal for geografi (GEO01-02)
 * Delkapitler 2.1 - 2.7
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Jordens indre oppbygging
// ============================================================================

export const CHAPTER_GEOGRAFI_2_1: TextbookChapter = {
  id: 'geografi-1-2-1',
  courseId: 'geografi',
  chapterNumber: '2.1',
  title: 'Jordens indre oppbygging',
  description: 'Jordens lagdelte struktur med kjerne, mantel og skorpe, og forskjellen mellom litosfaere og astenosfaere.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjoere greie for hovudtrekk ved den geologiske utviklinga av jorda',
    'forklare korleis indre og ytre krefter formar jordoverflata',
  ],
  content: [
    {
      id: 'geo-2-1-intro',
      type: 'text',
      content: `# Jordens indre oppbygging

Jorden er ikke en ensartet kule. Den er bygget opp av lag med ulik sammensetning og egenskaper. For aa forstaa hvorfor vi har vulkaner, jordskjelv og fjellkjeder, maa vi foerst forstaa hva som skjuler seg under foettene vaare.

Kunnskapen om jordens indre kommer hovedsakelig fra studier av **seismiske boelger** - boelger som sprer seg gjennom jorden etter jordskjelv. Naar boelgene moeter grenseflater mellom ulike lag, endrer de retning og hastighet. Ved aa analysere disse endringene kan forskere kartlegge jordens indre struktur.`,
    },
    {
      id: 'geo-2-1-lag',
      type: 'text',
      content: `## Jordens tre hovedlag

### Jordskorpen
Jordskorpen er det ytterste, tynne laget vi lever paa. Den utgjoer bare omtrent 1 % av jordens totale volum. Skorpen bestaar av faste bergarter og varierer i tykkelse:
- **Kontinentalskorpe**: 30-70 km tykk, bestaar hovedsakelig av granitt og gneis, med lav tetthet (ca. 2,7 g/cm³)
- **Havskorpe**: 5-10 km tykk, bestaar hovedsakelig av basalt, med hoeyere tetthet (ca. 3,0 g/cm³)

### Mantelen
Mantelen strekker seg fra bunnen av skorpen ned til ca. 2 900 km dyp. Den utgjoer omtrent 84 % av jordens volum. Mantelen bestaar av tunge silikatbergarter som er rike paa jern og magnesium. Den oeverste delen av mantelen er fast, mens det dypere laget er **plastisk** - det oppfoerer seg som en seig masse som kan flyte sakte over lang tid.

### Kjernen
Jordens kjerne strekker seg fra ca. 2 900 km dyp til jordens sentrum paa 6 371 km. Den bestaar hovedsakelig av jern og nikkel.
- **Ytre kjerne**: Flytende, 2 900-5 100 km dyp. Stroemninger her skaper jordens **magnetfelt**.
- **Indre kjerne**: Fast, 5 100-6 371 km dyp. Til tross for ekstremt hoeye temperaturer (over 5 000 °C) er den fast paa grunn av det enorme trykket.`,
    },
    {
      id: 'geo-2-1-def-skorpe',
      type: 'definition',
      title: 'Jordskorpen',
      content: 'Jordskorpen er det ytterste, faste laget av jorden. Den deles i kontinentalskorpe (tykk, lett, bestaar av granitt) og havskorpe (tynn, tung, bestaar av basalt). Skorpen \"flyter\" paa den underliggende mantelen.',
    },
    {
      id: 'geo-2-1-kontinental-vs-hav',
      type: 'text',
      content: `## Kontinentalskorpe vs. havskorpe

Forskjellen mellom de to typene skorpe er avgjoerendes for aa forstaa platetektonikk:

| Egenskap | Kontinentalskorpe | Havskorpe |
|---|---|---|
| Tykkelse | 30-70 km | 5-10 km |
| Hovedbergart | Granitt/gneis | Basalt |
| Tetthet | Ca. 2,7 g/cm³ | Ca. 3,0 g/cm³ |
| Alder | Opptil 4 milliarder aar | Sjelden over 200 millioner aar |

Fordi kontinentalskorpen er lettere, \"flyter\" den hoeyere paa mantelen enn havskorpen. Dette prinsippet kalles **isostasi** og forklarer hvorfor kontinentene stikker opp over havnivaaet.`,
    },
    {
      id: 'geo-2-1-def-isostasi',
      type: 'definition',
      title: 'Isostasi',
      content: 'Isostasi er prinsippet om at jordskorpen \"flyter\" paa den tyngre mantelen, omtrent som isfjell i vann. Tykk, lett kontinentalskorpe flyter hoeyere enn tynn, tung havskorpe. Etter istiden har Skandinavia hevet seg fordi vekten av isen ble fjernet (postglasial landheving).',
    },
    {
      id: 'geo-2-1-litosfaere',
      type: 'text',
      content: `## Litosfaere og astenosfaere

I tillegg til inndelingen i skorpe, mantel og kjerne, bruker geologer en annen inndeling basert paa bergartenes **mekaniske egenskaper**:

### Litosfaeren
Litosfaeren omfatter hele jordskorpen pluss den oeverste, stive delen av mantelen. Den er ca. 100-200 km tykk og bestaar av stive bergarter som kan brekke. Litosfaeren er delt opp i store **tektoniske plater** som beveger seg i forhold til hverandre.

### Astenosfaeren
Under litosfaeren ligger astenosfaeren, som strekker seg ned til ca. 700 km dyp. Her er bergartene saa varme at de oppfoerer seg plastisk - de kan deformeres og flyte sakte (noen faa centimeter per aar). Det er bevegelsene i astenosfaeren som driver de tektoniske platene.

Denne inndelingen er viktig fordi den forklarer **hvorfor** platene beveger seg: de stive litosfaereplatene glir paa den plastiske astenosfaeren.`,
    },
    {
      id: 'geo-2-1-def-litosfaere',
      type: 'definition',
      title: 'Litosfaeren',
      content: 'Litosfaeren er jordens ytre, stive skall som bestaar av skorpen og den oeverste delen av mantelen. Den er delt i tektoniske plater som beveger seg paa den plastiske astenosfaeren under.',
    },
    {
      id: 'geo-2-1-seismikk',
      type: 'text',
      content: `## Hvordan vet vi hva som finnes inne i jorden?

Ingen har noensinne boret dypere enn ca. 12 km inn i jordskorpen (Kola-borehulet i Russland). Likevel kjenner vi jordens indre struktur ganske godt, takket vaere **seismologi**.

Naar et jordskjelv oppstaar, sendes det ut to typer boelger:
- **P-boelger** (primaerboelger): Trykkboelger som gaar gjennom baade fast stoff og vaesker
- **S-boelger** (sekundaerboelger): Skjaerboelger som kun gaar gjennom fast stoff

S-boelger stopper ved den ytre kjernen, noe som viser at den er flytende. Hastighetsendringer i P-boelger avslorer grenseflater mellom lagene. Slik har forskere kunnet \"roentgenfotografere\" jordens indre.`,
    },
    {
      id: 'geo-2-1-example',
      type: 'example',
      title: 'Jordens lag - en sammenligning',
      problem: 'Sammenlign jordens oppbygging med et egg. Hvilke deler av egget tilsvarer de ulike lagene i jorden?',
      solution: `**Sammenligning med et egg:**

1. **Eggeskallet** tilsvarer **jordskorpen** - et tynt, sproedt lag paa utsiden
2. **Eggehviten** tilsvarer **mantelen** - det tykkeste laget som fyller det meste av volumet
3. **Eggeplommen** tilsvarer **kjernen** - sentralt plassert i midten

Denne sammenligningen illustrerer ogsaa at skorpen er ekstremt tynn i forhold til resten av jorden. Hvis jorden var en fotball, ville skorpen vaere tynnere enn et ark papir.

**Viktig forskjell:** Ulikt et egg har jorden en todelt kjerne (flytende ytre og fast indre), og mantelen har baade stive og plastiske soner.`,
    },
    {
      id: 'geo-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Jorden er bygget opp av tre hovedlag: **skorpe**, **mantel** og **kjerne**
- Skorpen deles i **kontinentalskorpe** (tykk, lett) og **havskorpe** (tynn, tung)
- **Litosfaeren** (skorpe + oevre mantel) er stiv og delt i tektoniske plater
- **Astenosfaeren** er plastisk og lar platene bevege seg
- Kjernen har en **flytende ytre del** (skaper magnetfeltet) og en **fast indre del**
- Vi kartlegger jordens indre ved hjelp av **seismiske boelger**`,
    },
  ],
  exercises: [
    {
      id: 'geo-2-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken bergart dominerer i havskorpen?',
      options: [
        { id: 'a', text: 'Basalt', isCorrect: true },
        { id: 'b', text: 'Granitt', isCorrect: false },
        { id: 'c', text: 'Kalkstein', isCorrect: false },
        { id: 'd', text: 'Sandstein', isCorrect: false },
      ],
      solution: 'Havskorpen bestaar hovedsakelig av basalt, som er en moerk, tung vulkansk bergart med tetthet paa ca. 3,0 g/cm³. Kontinentalskorpen bestaar derimot hovedsakelig av granitt.',
    },
    {
      id: 'geo-2-1-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor er den indre kjernen fast til tross for at temperaturen er over 5 000 °C?',
      options: [
        { id: 'a', text: 'Fordi trykket er saa enormt at jernet presses sammen til fast form', isCorrect: true },
        { id: 'b', text: 'Fordi den indre kjernen bestaar av bergarter med svart hoey smeltepunkt', isCorrect: false },
        { id: 'c', text: 'Fordi den ytre kjernen isolerer den indre kjernen fra varme', isCorrect: false },
        { id: 'd', text: 'Fordi den indre kjernen har kjoelt seg ned over tid', isCorrect: false },
      ],
      solution: 'Selv om temperaturen er ekstremt hoey, er trykket i jordens sentrum saa enormt (over 3,5 millioner atmosfaerer) at jern og nikkel presses sammen til fast form. Trykk oeker smeltepunktet til materialer.',
    },
    {
      id: 'geo-2-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom litosfaeren og astenosfaeren, og forklar hvorfor denne forskjellen er viktig for platetektonikk.',
      solution: 'Litosfaeren er det ytre, stive skallet som bestaar av skorpen og den oeverste delen av mantelen (ca. 100-200 km tykt). Astenosfaeren ligger under og bestaar av plastisk, seigt materiale som kan flyte sakte. Denne forskjellen er avgjoerendes for platetektonikk fordi de stive litosfaereplatene kan gli paa den plastiske astenosfaeren. Uten den plastiske astenosfaeren ville det ikke vaert mulig for platene aa bevege seg.',
    },
    {
      id: 'geo-2-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan seismiske boelger brukes til aa kartlegge jordens indre. Hva forteller P-boelger og S-boelger oss om den ytre kjernen?',
      solution: 'Seismiske boelger fra jordskjelv sprer seg gjennom jorden og endrer hastighet og retning naar de moeter grenseflater mellom lag med ulik tetthet. P-boelger (trykkboelger) gaar gjennom baade fast stoff og vaesker, mens S-boelger (skjaerboelger) kun gaar gjennom fast stoff. Fordi S-boelger stopper ved den ytre kjernen, vet vi at den maa vaere flytende. P-boelgene endrer retning ved kjernen, noe som bekrefter overgangen til et annet materiale. Slik fungerer seismologi som en slags \"roentgen\" av jordens indre.',
    },
    {
      id: 'geo-2-1-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skaper jordens magnetfelt?',
      options: [
        { id: 'a', text: 'Stroemninger av flytende jern i den ytre kjernen', isCorrect: true },
        { id: 'b', text: 'Magnetiske mineraler i jordskorpen', isCorrect: false },
        { id: 'c', text: 'Den faste indre kjernen som roterer', isCorrect: false },
        { id: 'd', text: 'Solvindens paavirkning paa atmosfaeren', isCorrect: false },
      ],
      solution: 'Jordens magnetfelt skapes av konveksjonsstroemmer i den flytende ytre kjernen, som bestaar av jern og nikkel. Denne prosessen kalles geodynamoen. Magnetfeltet beskytter oss mot skadelig straaling fra solen.',
    },
  ],
};

// ============================================================================
// Kapittel 2.2: Platetektonikk
// ============================================================================

export const CHAPTER_GEOGRAFI_2_2: TextbookChapter = {
  id: 'geografi-1-2-2',
  courseId: 'geografi',
  chapterNumber: '2.2',
  title: 'Platetektonikk',
  description: 'Teorien om platetektonikk, ulike typer plategrenser og kontinentaldrift.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjoere greie for hovudtrekk ved den geologiske utviklinga av jorda',
    'forklare korleis indre og ytre krefter formar jordoverflata',
  ],
  content: [
    {
      id: 'geo-2-2-intro',
      type: 'text',
      content: `# Platetektonikk

Platetektonikk er den overordnede teorien som forklarer hvorfor vi har vulkaner, jordskjelv, fjellkjeder og dyphavsgropeer. Den beskriver hvordan jordens litosfaere er delt opp i store plater som stadig beveger seg i forhold til hverandre.

Teorien ble utviklet paa 1960-tallet og revolusjonerte geologien. Den samlet mange observasjoner som tidligere ikke hadde noen felles forklaring - fra fossiler av tropiske planter paa Svalbard til jordskjelvmoenstrene rundt Stillehavet.`,
    },
    {
      id: 'geo-2-2-teori',
      type: 'text',
      content: `## Teorien om platetektonikk

Jordens litosfaere er delt opp i ca. 15 store og mange mindre **tektoniske plater**. Disse platene beveger seg sakte - typisk 2-15 cm per aar - drevet av konveksjonsstroemmer i mantelen.

### De stoerste platene
- **Den eurasiske platen** (Europa og Asia)
- **Den nordamerikanske platen**
- **Den soeramerikanske platen**
- **Stillehavsplaten** (den stoerste havskorpeplaten)
- **Den afrikanske platen**
- **Den antarktiske platen**
- **Den indisk-australske platen**

### Hva driver platene?
Bevegelsen skyldes **konveksjonsstroemmer** i mantelen. Varme stiger opp fra jordens indre, flyter sidelengs under litosfaeren og synker ned igjen naar den avkjoeles. Platene \"dras\" ogsaa nedover der tung havskorpe synker ned i mantelen ved **subduksjonssoner**.`,
    },
    {
      id: 'geo-2-2-def-platetektonikk',
      type: 'definition',
      title: 'Platetektonikk',
      content: 'Platetektonikk er teorien om at jordens litosfaere er delt opp i tektoniske plater som beveger seg paa den plastiske astenosfaeren. Platebevegelsene foraarsaker jordskjelv, vulkanisme og fjellkjededannelse ved plategrensene.',
    },
    {
      id: 'geo-2-2-grenser',
      type: 'text',
      content: `## Typer plategrenser

Det finnes tre hovedtyper plategrenser, og hver gir opphav til ulike geologiske fenomener:

### Divergerende plategrenser (spredningsgrenser)
Her beveger platene seg **fra hverandre**. Magma stiger opp og danner ny havskorpe. Dette skjer langs **midthavsrygger** - undersjoeiske fjellkjeder som strekker seg over 60 000 km rundt kloden.

**Eksempler:**
- Den midtatlantiske ryggen (mellom Europa/Afrika og Amerika)
- Det oestafrikanske riftsystemet (Afrika splitter opp)
- Island (ligger rett paa den midtatlantiske ryggen)

### Konvergerende plategrenser (kollisjonsgrenser)
Her beveger platene seg **mot hverandre**. Tre scenarioer er mulige:

1. **Havskorpe mot havskorpe:** Den eldste og tyngste platen dykker under (subduksjon). Danner dyphavsgropeer og vulkanoeyrekker (f.eks. Marianegropen, Filippinene).
2. **Havskorpe mot kontinentalskorpe:** Havskorpen dykker under den lettere kontinentalskorpen. Danner kystfjellkjeder og vulkaner (f.eks. Andesfjellene).
3. **Kontinentalskorpe mot kontinentalskorpe:** Ingen av platene dykker under. I stedet presses begge oppover og danner mektige fjellkjeder (f.eks. Himalaya).

### Transforme plategrenser (forskyvningsgrenser)
Her glir platene **sidelengs forbi hverandre**. Det dannes verken ny skorpe eller subduksjon, men gnisningen foraarsaker kraftige jordskjelv.

**Eksempler:**
- San Andreas-forkastningen i California
- Den nordanatoliske forkastningen i Tyrkia`,
    },
    {
      id: 'geo-2-2-def-subduksjon',
      type: 'definition',
      title: 'Subduksjon',
      content: 'Subduksjon er prosessen der en tektonisk plate dykker under en annen og synker ned i mantelen. Dette skjer ved konvergerende plategrenser der tung havskorpe moeter en annen plate. Subduksjon foraarsaker vulkanisme, dyphavsgropeer og jordskjelv.',
    },
    {
      id: 'geo-2-2-pangea',
      type: 'text',
      content: `## Kontinentaldrift og Pangea

Allerede i 1912 foreslo den tyske meteorologen Alfred Wegener at kontinentene en gang hang sammen og hadde drevet fra hverandre. Han kalte det opprinnelige superkontinentet **Pangea** (\"all jord\").

### Bevisene for kontinentaldrift
Wegener samlet flere bevis:
- **Kystlinjene passer sammen:** Soer-Amerika og Afrika ser ut som puslespillbiter som passer i hverandre
- **Fossiler:** Like fossiler av landlevende dyr (f.eks. Mesosaurus) finnes paa kontinenter som naa er adskilt av hav
- **Bergarter:** Fjellkjeder med samme type og alder strekker seg over flere kontinenter
- **Klima:** Spor etter istider paa steder som naa ligger naer ekvator, og tropiske fossiler i arktiske omraader

### Pangeas historie
- **Ca. 335 millioner aar siden:** Pangea begynner aa dannes
- **Ca. 200 millioner aar siden:** Pangea begynner aa brytes opp
- **Ca. 150 millioner aar siden:** Atlanterhavet begynner aa aapnes
- **I dag:** Kontinentene befinner seg i sine naavaerende posisjoner, men beveger seg fortsatt`,
    },
    {
      id: 'geo-2-2-def-pangea',
      type: 'definition',
      title: 'Pangea',
      content: 'Pangea var et superkontinent som inneholdt alle dagens kontinenter i ett sammenhengende landmasse. Det eksisterte for ca. 335-200 millioner aar siden, foer det begynte aa brytes opp. Navnet betyr \"all jord\" paa gresk.',
    },
    {
      id: 'geo-2-2-example',
      type: 'example',
      title: 'Plategrenser og landskapsformer',
      problem: 'Forklar hvilken type plategrense som har dannet Himalaya, og beskriv prosessen.',
      solution: `**Himalaya er dannet ved en konvergerende plategrense:**

1. Den indiske platen begynte aa bevege seg nordover for ca. 50 millioner aar siden
2. Den kolliderte med den eurasiske platen
3. Begge platene bestaar av **kontinentalskorpe**, som er for lett til aa dykke ned i mantelen
4. I stedet ble skorpen **presset oppover og foldet**
5. Resultatet er verdens hoeyeste fjellkjede

**Prosessen paagaar fortsatt:** India skyver seg ca. 5 cm nordover per aar, og Himalaya vokser med ca. 5 mm per aar. Mount Everest (8 849 m) blir altsaa litt hoeyere for hvert aar!

Fossiler av sjoelilje og andre marine organismer paa toppen av Himalaya viser at fjellene en gang laa under havet.`,
    },
    {
      id: 'geo-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Platetektonikk** forklarer bevegelsen av jordens litosfaereplater paa den plastiske astenosfaeren
- Det finnes tre typer plategrenser: **divergerende** (fra hverandre), **konvergerende** (mot hverandre) og **transforme** (sidelengs)
- **Subduksjon** oppstaar naar havskorpe dykker under en annen plate
- **Pangea** var superkontinentet som inneholdt alle dagens landmasser
- Bevisene for kontinentaldrift inkluderer kystlinjer, fossiler, bergarter og klimaspor
- Konveksjonsstroemmer i mantelen driver platebevegelsene`,
    },
  ],
  exercises: [
    {
      id: 'geo-2-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skjer ved en divergerende plategrense?',
      options: [
        { id: 'a', text: 'Platene beveger seg fra hverandre og ny skorpe dannes', isCorrect: true },
        { id: 'b', text: 'Platene kolliderer og fjell dannes', isCorrect: false },
        { id: 'c', text: 'Platene glir sidelengs forbi hverandre', isCorrect: false },
        { id: 'd', text: 'Den ene platen dykker under den andre', isCorrect: false },
      ],
      solution: 'Ved divergerende plategrenser beveger platene seg fra hverandre. Magma stiger opp fra mantelen og stoerkner til ny havskorpe. Dette skjer langs midthavsrygger, som den midtatlantiske ryggen.',
    },
    {
      id: 'geo-2-2-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket av foegende bevis brukte Alfred Wegener for aa stoette teorien om kontinentaldrift?',
      options: [
        { id: 'a', text: 'Like fossiler av landlevende dyr paa kontinenter adskilt av hav', isCorrect: true },
        { id: 'b', text: 'Maalinger av platebevegelser med GPS', isCorrect: false },
        { id: 'c', text: 'Analyser av seismiske boelger', isCorrect: false },
        { id: 'd', text: 'Satellittbilder av kontinentene', isCorrect: false },
      ],
      solution: 'Wegener brukte bl.a. fossiler som bevis. Like fossiler av landlevende dyr som Mesosaurus finnes paa baade Soer-Amerika og Afrika, noe som tyder paa at kontinentene en gang hang sammen. GPS og satellitter fantes ikke paa Wegeners tid (1912).',
    },
    {
      id: 'geo-2-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som skjer naar to kontinentalplater kolliderer, og gi et eksempel paa en fjellkjede som er dannet paa denne maaten.',
      solution: 'Naar to kontinentalplater kolliderer, er begge for lette til aa dykke ned i mantelen (subdusere). I stedet presses skorpen oppover og foldes til mektige fjellkjeder. Himalaya er det fremste eksempelet - den indiske platen har kollidert med den eurasiske platen over de siste 50 millioner aarene. Denne prosessen paagaar fortsatt, og fjellkjeden vokser med ca. 5 mm per aar.',
    },
    {
      id: 'geo-2-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Island ligger paa den midtatlantiske ryggen. Forklar hvilken type plategrense dette er, og hvorfor Island har mye vulkansk aktivitet.',
      solution: 'Island ligger paa en divergerende plategrense der den nordamerikanske platen og den eurasiske platen beveger seg fra hverandre. Naar platene sprer seg, aapnes det sprekker i jordskorpen, og magma fra mantelen stiger opp. Dette gir Island intens vulkansk aktivitet. I tillegg ligger Island over en mantelpluyme (hotspot), som gir ekstra varmetilfoersel fra dypet. Kombinasjonen av divergerende plategrense og hotspot gjoer Island til et av de mest vulkansk aktive stedene paa jorden.',
    },
    {
      id: 'geo-2-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva driver bevegelsen av de tektoniske platene?',
      options: [
        { id: 'a', text: 'Konveksjonsstroemmer i mantelen', isCorrect: true },
        { id: 'b', text: 'Jordens rotasjon', isCorrect: false },
        { id: 'c', text: 'Maanens gravitasjonskraft', isCorrect: false },
        { id: 'd', text: 'Vindstroemmer i atmosfaeren', isCorrect: false },
      ],
      solution: 'Platebevegelsene drives av konveksjonsstroemmer i mantelen. Varmt materiale stiger opp fra dypet, flyter sidelengs under litosfaeren og synker ned igjen naar det avkjoeles. I tillegg bidrar \"slab pull\" - tyngdekraften som drar tung subdusert skorpe nedover.',
    },
  ],
};

// ============================================================================
// Kapittel 2.3: Vulkaner og vulkanisme
// ============================================================================

export const CHAPTER_GEOGRAFI_2_3: TextbookChapter = {
  id: 'geografi-1-2-3',
  courseId: 'geografi',
  chapterNumber: '2.3',
  title: 'Vulkaner og vulkanisme',
  description: 'Ulike vulkantyper, vulkanisme ved plategrenser og hotspots, og konsekvensene av vulkanutbrudd.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare korleis indre og ytre krefter formar jordoverflata',
    'gjoere greie for samanhengar mellom naturgrunnlag og samfunn',
  ],
  content: [
    {
      id: 'geo-2-3-intro',
      type: 'text',
      content: `# Vulkaner og vulkanisme

Vulkaner er aapninger i jordskorpen der smeltet stein (magma) trenger opp til overflaten. Naar magma naar overflaten, kalles det **lava**. Vulkaner er blant de mest dramatiske uttrykkene for jordens indre krefter, og de har formet jordoverflaten gjennom milliarder av aar.

I dag finnes det ca. 1 500 aktive vulkaner paa landjorden og mange flere under havet. De fleste ligger langs plategrenser, men noen finnes ogsaa midt paa plater over saakalte **hotspots**.`,
    },
    {
      id: 'geo-2-3-vulkantyper',
      type: 'text',
      content: `## Vulkantyper

Vulkaner varierer kraftig i form og stoerrelse, avhengig av lavaens sammensetning og utbruddstype.

### Skjoldvulkan
- **Form:** Bred og flat, som et skjold som ligger paa bakken
- **Lava:** Tyntflytende basaltlava som renner langt foer den stoerkner
- **Utbrudd:** Rolige, med lavastroemmer som flyter jevnt
- **Eksempler:** Mauna Loa og Kilauea paa Hawaii, vulkaner paa Island

### Stratovulkan (sammensatt vulkan)
- **Form:** Hoey og bratt, med konisk form
- **Lava:** Tyktflytende lava med hoey silisiuminnhold
- **Utbrudd:** Eksplosive og farlige, med aske, bomdber og pyroklastiske stroemmer
- **Eksempler:** Mount Fuji (Japan), Vesuvius (Italia), Mount St. Helens (USA)

### Kjegle- og sprakkevulkaner
- **Slaggjeglevulkaner:** Smaa, bratte kjegler bygget av vulkansk slagg
- **Sprakkevulkaner:** Lava stroemmer opp gjennom lange sprekker i jordskorpen, vanlig paa Island`,
    },
    {
      id: 'geo-2-3-def-stratovulkan',
      type: 'definition',
      title: 'Stratovulkan',
      content: 'En stratovulkan (ogsaa kalt sammensatt vulkan) er en hoey, bratt vulkan bygget opp av vekslende lag av lava og aske. Stratovulkaner har eksplosive utbrudd fordi den tyktflytende lavaen fanger gasser som bygger opp trykk. De fleste av verdens farligste vulkaner er stratovulkaner.',
    },
    {
      id: 'geo-2-3-plategrenser',
      type: 'text',
      content: `## Vulkanisme ved plategrenser

### Subduksjonsvulkaner
De fleste vulkaner paa landjorden finnes ved **konvergerende plategrenser** der havskorpe subduseres. Naar den neddukkende platen naar ca. 100 km dyp, er den saa varm at vann frigjoeresres fra bergartene. Dette vannet senker smeltepunktet til mantelen over, slik at magma dannes og stiger opp.

**\"Ildringen\"** (Ring of Fire) rundt Stillehavet er det mest kjente eksempelet. Her ligger ca. 75 % av verdens aktive vulkaner, fra Andesfjellene via Alaska, Japan og Indonesia.

### Spredningsryggvulkaner
Ved **divergerende plategrenser** trekkes skorpen fra hverandre, og magma stiger opp for aa fylle gapet. Det meste av denne vulkanismen foregaar under vann langs midthavsryggene, men paa Island kan vi se det paa land.

### Hotspots
Noen vulkaner finnes langt fra plategrenser. De ligger over **hotspots** - soner med ekstra varme dypt i mantelen (mantelpluyme). Naar platen beveger seg over hotspoten, dannes rekker av vulkaner.

**Eksempler:** Hawaii-oeyene, Yellowstone i USA, Kanarioeyene`,
    },
    {
      id: 'geo-2-3-def-hotspot',
      type: 'definition',
      title: 'Hotspot',
      content: 'En hotspot er et omraade i mantelen med uvanlig hoey temperatur, der en mantelpluyme sender varme opp mot overflaten. Hotspots er stasjonaere, saa naar en litosfaereplate beveger seg over en hotspot, dannes en rekke av vulkaner. Hawaii-oeyrekken er det klassiske eksempelet.',
    },
    {
      id: 'geo-2-3-konsekvenser',
      type: 'text',
      content: `## Vulkanutbrudd og konsekvenser

### Farer ved vulkanutbrudd
- **Lavastroemmer:** Oedelegger alt i sin vei, men beveger seg vanligvis sakte nok til at man kan evakuere
- **Pyroklastiske stroemmer:** Ekstremt farlige skyer av het gass, aske og steinfragmenter som beveger seg i opptil 700 km/t. Dodelig.
- **Askeskyer:** Kan oedelegge avlinger, forurense vann og stoppe flytrafikk
- **Laharer:** Slamstroemmer av vulkansk aske blandet med vann. Kan begrave hele byer.
- **Vulkanske gasser:** SO₂, CO₂ og andre giftige gasser

### Positive konsekvenser
- **Fruktbar jord:** Vulkansk aske forvitrer til naeringsrik jord. Omraadene rundt Vesuvius og Etna er blant Italias mest fruktbare.
- **Geotermisk energi:** Varme fra vulkanisme utnyttes til oppvarming og stroemproiroduksjon (Island, New Zealand)
- **Mineralressurser:** Vulkansk aktivitet konsentrerer verdifulle mineraler
- **Nye landomraader:** Lavastroemmer skaper ny land (Hawaii vokser stadig)`,
    },
    {
      id: 'geo-2-3-example',
      type: 'example',
      title: 'Eyjafjallajokull 2010',
      problem: 'I 2010 hadde vulkanen Eyjafjallajokull paa Island et utbrudd som pavirket store deler av Europa. Forklar hvorfor dette utbruddet fikk saa store konsekvenser.',
      solution: `**Konsekvensene av Eyjafjallajokull-utbruddet:**

1. **Askeskyen:** Utbruddet sendte enorme mengder finkornet vulkansk aske hoyt opp i atmosfaeren
2. **Vindretningen:** Vindmoensteret foerte askeskyen soeroestover mot Europa
3. **Flytrafikk:** Vulkansk aske er ekstremt farlig for flymotorer og kan foraarsake motorhavari. Over 100 000 flygninger ble kansellert i loepet av noen uker.
4. **OEkonomiske konsekvenser:** Stengningen kostet flyindustrien milliarder av kroner og rammet handel, turisme og forsyningskjeder

**Hvorfor saa mye aske?** Utbruddet skjedde under en isbre. Kontakten mellom lava og is skapte eksplosive dampeksplosjoner som knuste lavaen til svart finkornet aske som ble sendt hoeyere opp enn et vanlig utbrudd ville gjort.`,
    },
    {
      id: 'geo-2-3-norge',
      type: 'text',
      content: `## Vulkanisme og Norge

Norge har ingen aktive vulkaner i dag, men landets geologiske historie inkluderer mye vulkansk aktivitet:
- **Oslofeltet** har rester av vulkaner fra permtiden (ca. 300-250 millioner aar siden)
- **Lofoten og Vesteraalen** har vulkanske bergarter fra jordens tidlige historie
- **Jan Mayen** (norsk territorialoey i Norskehavet) har den aktive vulkanen **Beerenberg** - Norges eneste aktive vulkan
- **Svalbard** har spor av vulkansk aktivitet fra ulike geologiske perioder`,
    },
    {
      id: 'geo-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Skjoldvulkaner** er brede og flate med tyntflytende lava og rolige utbrudd
- **Stratovulkaner** er hoeye og bratte med tyktflytende lava og eksplosive utbrudd
- De fleste vulkaner finnes ved **plategrenser**, saerlig i Ildringen rundt Stillehavet
- **Hotspots** gir vulkanisme midt paa plater (f.eks. Hawaii)
- Vulkanutbrudd kan vaere svart farlige, men gir ogsaa fruktbar jord og geotermisk energi
- Norges eneste aktive vulkan er **Beerenberg** paa Jan Mayen`,
    },
  ],
  exercises: [
    {
      id: 'geo-2-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken vulkantype er bred og flat med tyntflytende lava?',
      options: [
        { id: 'a', text: 'Skjoldvulkan', isCorrect: true },
        { id: 'b', text: 'Stratovulkan', isCorrect: false },
        { id: 'c', text: 'Slaggjeglevulkan', isCorrect: false },
        { id: 'd', text: 'Sprakkevulkan', isCorrect: false },
      ],
      solution: 'En skjoldvulkan er bred og flat fordi den tyntflytende basaltlavaen renner langt ut til sidene foer den stoerkner. Mauna Loa paa Hawaii er verdens stoerste skjoldvulkan.',
    },
    {
      id: 'geo-2-3-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor ligger ca. 75 % av verdens aktive vulkaner i \"Ildringen\" rundt Stillehavet?',
      options: [
        { id: 'a', text: 'Fordi Stillehavsplaten subduseres under omkringliggende plater', isCorrect: true },
        { id: 'b', text: 'Fordi det er en enorm hotspot under Stillehavet', isCorrect: false },
        { id: 'c', text: 'Fordi Stillehavet har den tynneste havskorpen', isCorrect: false },
        { id: 'd', text: 'Fordi vulkanene langs Ildringen er de eldste paa jorden', isCorrect: false },
      ],
      solution: 'Ildringen foelger konvergerende plategrenser rundt Stillehavet der Stillehavsplaten og andre havplater subduseres under naboplatene. Subduksjonen skaper magma som stiger opp og danner vulkaner langs kysten.',
    },
    {
      id: 'geo-2-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Sammenlign skjoldvulkaner og stratovulkaner med hensyn til form, lavatype og utbruddskarakter. Gi et eksempel paa hver.',
      solution: 'Skjoldvulkaner er brede og flate med svakt hellende sider. De har tyntflytende basaltlava og rolige utbrudd med lavastroemmer (f.eks. Mauna Loa paa Hawaii). Stratovulkaner er hoeye og bratte med konisk form. De har tyktflytende lava med hoey silisiuminnhold og eksplosive utbrudd med aske, bomber og pyroklastiske stroemmer (f.eks. Mount Fuji i Japan). Den tyktflytende lavaen i stratovulkaner fanger gasser som bygger opp trykk, noe som gjoer utbruddene farligere.',
    },
    {
      id: 'geo-2-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en hotspot er, og beskriv hvordan Hawaii-oeyrekken er dannet.',
      solution: 'En hotspot er et stasjonaert omraade i mantelen med ekstra hoey temperatur, der en mantelpluyme sender varmt materiale opp mot overflaten. Hawaii-oeyrekken er dannet ved at Stillehavsplaten har beveget seg nordvestover over en hotspot i millioner av aar. Hver oey ble dannet da platen laa rett over hotspoten. De eldste oeyene (nordvest) er de stoerste og mest eroderte, mens de yngste (soeroest, som Big Island) fortsatt har aktiv vulkanisme. Hotspoten er stasjonaer, men platen beveger seg, saa det dannes stadig nye vulkaner.',
    },
    {
      id: 'geo-2-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Norges eneste aktive vulkan?',
      options: [
        { id: 'a', text: 'Beerenberg paa Jan Mayen', isCorrect: true },
        { id: 'b', text: 'Galdhopiggen', isCorrect: false },
        { id: 'c', text: 'Stetind i Nordland', isCorrect: false },
        { id: 'd', text: 'Hekla paa Island', isCorrect: false },
      ],
      solution: 'Beerenberg paa Jan Mayen er Norges eneste aktive vulkan. Den er 2 277 meter hoey og hadde sitt siste utbrudd i 1985. Jan Mayen er en norsk territorialoey i Norskehavet.',
    },
  ],
};

// ============================================================================
// Kapittel 2.4: Jordskjelv og tsunamier
// ============================================================================

export const CHAPTER_GEOGRAFI_2_4: TextbookChapter = {
  id: 'geografi-1-2-4',
  courseId: 'geografi',
  chapterNumber: '2.4',
  title: 'Jordskjelv og tsunamier',
  description: 'Hvorfor jordskjelv oppstaar, hvordan de maales, og sammenhengen med tsunamier.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare korleis indre og ytre krefter formar jordoverflata',
    'drofte korleis naturkatastrofar paverkar menneske og samfunn',
  ],
  content: [
    {
      id: 'geo-2-4-intro',
      type: 'text',
      content: `# Jordskjelv og tsunamier

Jordskjelv er plutselige rystelser i jordskorpen som skyldes braa bevegelse langs forkastninger - bruddflater i fjellet. Hvert aar registreres det over 500 000 jordskjelv paa jorden, men bare ca. 100 000 er store nok til aa kjennes, og under 100 foraarsaker skade.

Jordskjelv er noen av de mest oedeleggende naturkatastrofene vi kjenner. De kan utloese tsunamier, jordskred og branner, og ramme byer med katastrofale foelder.`,
    },
    {
      id: 'geo-2-4-hvorfor',
      type: 'text',
      content: `## Hvorfor oppstaar jordskjelv?

Jordskjelv skyldes at de tektoniske platene beveger seg og skaper **spenninger** i bergartene. Naar spenningen blir for stor, brekker bergartene plutselig langs en **forkastning**, og energien frigjoeresres som seismiske boelger.

### Hyposenteret og episenteret
- **Hyposenteret (fokus):** Punktet inne i jorden der bruddet starter
- **Episenteret:** Punktet paa jordoverflaten rett over hyposenteret. Her er rystelsene sterkest.

### Hvor oppstaar jordskjelv?
De fleste jordskjelv oppstaar langs plategrenser:
- **Konvergerende grenser:** Subduksjonssoner gir de dypeste og kraftigste jordskjelvene (f.eks. Chile, Japan, Indonesia)
- **Transforme grenser:** Gir grunne, men kraftige jordskjelv (f.eks. San Andreas-forkastningen)
- **Divergerende grenser:** Gir vanligvis svakere jordskjelv (f.eks. Island)
- **Intraplatesjkelv:** Sjeldne jordskjelv som oppstaar inni en plate, ofte langs gamle svakhetssoner`,
    },
    {
      id: 'geo-2-4-def-forkastning',
      type: 'definition',
      title: 'Forkastning',
      content: 'En forkastning er en bruddflate i jordskorpen der bergartene har beveget seg i forhold til hverandre. Jordskjelv oppstaar naar plutselig bevegelse skjer langs en forkastning. Forkastninger kan vaere aktive (beveger seg fortsatt) eller inaktive.',
    },
    {
      id: 'geo-2-4-maaling',
      type: 'text',
      content: `## Maaling av jordskjelv

### Richterskalaen (momentmagnitude)
Jordskjelvets styrke maales med **magnitudeskalaen**, opprinnelig utviklet av Charles Richter i 1935. I dag brukes **momentmagnitude (Mw)**, som er mer noeyyaktig for store jordskjelv.

Skalaen er **logaritmisk**: hvert trinn opp betyr ca. 32 ganger mer frigjort energi.

| Magnitude | Beskrivelse | Effekt |
|---|---|---|
| Under 2,0 | Mikrojordskjelv | Kjennes ikke |
| 2,0-3,9 | Mindre | Kjennes av noen, sjelden skade |
| 4,0-4,9 | Lett | Kjennes av de fleste, noe skade |
| 5,0-5,9 | Moderat | Skade paa bygninger |
| 6,0-6,9 | Sterkt | Stor skade i bebygde omraader |
| 7,0-7,9 | Stort | Alvorlig skade over store omraader |
| 8,0+ | Enormt | Katastrofal oedeleggelse |

### Intensitetsskala (Mercalli)
Mens magnitude maaler energien, maaler **intensitet** de faktiske virkningene paa overflaten. Intensiteten avhenger av avstand fra episenteret, grunnforhold og bygningskvalitet.`,
    },
    {
      id: 'geo-2-4-def-magnitude',
      type: 'definition',
      title: 'Magnitude',
      content: 'Magnitude er et maal paa energien som frigjoeresres i et jordskjelv. Momentmagnitudeskalaen (Mw) er logaritmisk, slik at en oekning paa ett trinn betyr ca. 32 ganger mer energi. Et jordskjelv med magnitude 7 frigoer altsaa ca. 1 000 ganger mer energi enn et med magnitude 5.',
    },
    {
      id: 'geo-2-4-tsunami',
      type: 'text',
      content: `## Tsunamier

En tsunami er en serie ekstremt lange boelger i havet, vanligvis utloest av et kraftig undersjoeisk jordskjelv. Ordet kommer fra japansk og betyr \"havneboelge\".

### Hvordan oppstaar tsunamier?
1. Et jordskjelv langs en subduksjonssone foerer til plutselig vertikal forflytning av havbunnen
2. Vannet over forskyves og danner boelger som beveger seg utover i alle retninger
3. Paa dypt hav er boelgene lave (under 1 meter) men ekstremt raske (opptil 800 km/t)
4. Naar boelgene naar grunt vann nær kysten, bremses de, og boelgehoeyden oeker dramatisk - opptil 30 meter eller mer

### Varsling
Det internasjonale tsunamivarslingssystemet i Stillehavet overvaker jordskjelv og kan utstede varsler i loepet av minutter. Utfordringen er at kystomraader naer episenteret kan ha svart kort varslingstid.

### Storaboelja 1934
I Norge er vi heller ikke trygge for tsunamier. Det saa kalte Loen-raset i 1936 og Tafjord-ulykken i 1934 viste at fjordboelger fra store ras kan gi lokale tsunamier med oedeleggende kraft.`,
    },
    {
      id: 'geo-2-4-example',
      type: 'example',
      title: 'Jordskjelvet og tsunamien i Japan 2011',
      problem: 'Beskriv hendelsesforloepoet under jordskjelvet utanfor Japan 11. mars 2011, og forklar hvorfor konsekvensene ble saa store.',
      solution: `**Tohoku-jordskjelvet 2011:**

1. **Jordskjelvet:** Magnitude 9,1 - et av de sterkeste noensinne registrert. Hyposenteret laa 70 km utenfor kysten paa 30 km dyp.
2. **Plategrense:** Stillehavsplaten subduserer under den nordamerikanske platen ved Japan. Enorm spenning ble frigjort.
3. **Tsunamien:** Havbunnen ble forskjoevet opptil 5 meter vertikalt. Boelger paa opptil 40 meter hoeyere raste inn over kysten.
4. **Fukushima:** Tsunamien oversvoemte kjoeleanleggene ved Fukushima-atomkraftverket og utloesbte en kjernekraftulykke.

**Konsekvenser:**
- Ca. 18 500 omkomne
- Over 450 000 hjemloese
- Enorme materielle skader
- Kjernekraftulykke med langvarige foelder

**Hvorfor saa alvorlig?** Kombinasjonen av ekstremt kraftig jordskjelv, naerhet til tett befolket kyst, og kort varslingstid gjorde katastrofen enorm. I tillegg var sjoeforsvaret (boelgebryterne) dimensjonert for mindre tsunamier.`,
    },
    {
      id: 'geo-2-4-norge',
      type: 'text',
      content: `## Jordskjelv i Norge

Norge opplever jevnlig smaa jordskjelv, typisk 2 000-3 000 per aar. De fleste er for svake til aa kjennes. Den seismiske aktiviteten skyldes:
- **Postglasial landheving:** Etter istiden hever landet seg fortsatt, og spenninger frigjoeresres
- **Passive marginer:** Norskekysten er en passiv kontinentalmargin, men har gamle forkastninger som kan reaktiveres
- **Stoerste historiske jordskjelv:** I 1904 ble Oslofjord-omraadet rammet av et jordskjelv med magnitude 5,4. Bygninger ble skadet i Oslo.

Selv om Norge ikke ligger ved en aktiv plategrense, maa vi ta jordskjelvfaren paa alvor, spesielt for kritisk infrastruktur og bygninger.`,
    },
    {
      id: 'geo-2-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Jordskjelv skyldes plutselig bevegelse langs **forkastninger** naar spenningen i bergartene blir for stor
- **Hyposenteret** er brudets startpunkt, **episenteret** er punktet paa overflaten rett over
- **Momentmagnitudeskalaen** er logaritmisk - ett trinn opp betyr 32 ganger mer energi
- **Tsunamier** utloeses av undersjoeiske jordskjelv som forskyver havbunnen vertikalt
- Norge opplever smaa jordskjelv paa grunn av postglasial landheving og gamle forkastninger`,
    },
  ],
  exercises: [
    {
      id: 'geo-2-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kalles punktet paa jordoverflaten rett over stedet der et jordskjelv starter?',
      options: [
        { id: 'a', text: 'Episenteret', isCorrect: true },
        { id: 'b', text: 'Hyposenteret', isCorrect: false },
        { id: 'c', text: 'Forkastningen', isCorrect: false },
        { id: 'd', text: 'Magnitudepunktet', isCorrect: false },
      ],
      solution: 'Episenteret er punktet paa jordoverflaten rett over hyposenteret (fokus), som er det faktiske startpunktet for bruddet inne i jorden. Rystelsene er vanligvis sterkest naer episenteret.',
    },
    {
      id: 'geo-2-4-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mye mer energi frigjoeresres i et jordskjelv med magnitude 7 sammenlignet med et med magnitude 5?',
      options: [
        { id: 'a', text: 'Ca. 1 000 ganger mer', isCorrect: true },
        { id: 'b', text: 'Ca. 2 ganger mer', isCorrect: false },
        { id: 'c', text: 'Ca. 10 ganger mer', isCorrect: false },
        { id: 'd', text: 'Ca. 100 ganger mer', isCorrect: false },
      ],
      solution: 'Magnitudeskalaen er logaritmisk: hvert trinn opp betyr ca. 32 ganger mer energi. To trinn (fra 5 til 7) betyr 32 × 32 = ca. 1 000 ganger mer energi. Forskjellen i styrke mellom jordskjelv av ulik magnitude er altsaa enorm.',
    },
    {
      id: 'geo-2-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar trinn for trinn hvordan et undersjoeisk jordskjelv kan foere til en tsunami som rammer kysten.',
      solution: 'Foerst oppstaar et kraftig jordskjelv langs en subduksjonssone under havet. Plutselig bevegelse langs forkastningen forskyver havbunnen vertikalt, noe som loefter eller senker vannsoylen over. Dette danner boelger som sprer seg utover. Paa dypt hav er boelgene lave (under 1 meter) men svart raske (opptil 800 km/t). Naar boelgene naar grunnere vann naer kysten, bremses de, mens boelgehoeyden oeker dramatisk - fra noen faa centimeter til opptil 30 meter eller mer. Den enorme vannmassen skyller inn over land med oedeleggende kraft.',
    },
    {
      id: 'geo-2-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor Norge opplever jordskjelv til tross for at vi ikke ligger ved en aktiv plategrense.',
      solution: 'Norge opplever jordskjelv av flere grunner: For det foerste paagaar den postglasiale landhevingen fortsatt etter at isen smeltet for ca. 10 000 aar siden. Naar landet hever seg, oppstaar spenninger som kan utloese smaa jordskjelv. For det andre har Norskekysten gamle forkastninger fra tidligere geologiske perioder som kan reaktiveres. For det tredje skaper den passive kontinentalmarginen langs norskekysten noen spenninger. Jordskjelvene i Norge er vanligvis smaa (under magnitude 4), men kan kjennes av befolkningen.',
    },
    {
      id: 'geo-2-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Ved hvilken type plategrense oppstaar de kraftigste jordskjelvene?',
      options: [
        { id: 'a', text: 'Konvergerende plategrenser (subduksjonssoner)', isCorrect: true },
        { id: 'b', text: 'Divergerende plategrenser', isCorrect: false },
        { id: 'c', text: 'Transforme plategrenser', isCorrect: false },
        { id: 'd', text: 'Hotspots', isCorrect: false },
      ],
      solution: 'De kraftigste jordskjelvene oppstaar ved konvergerende plategrenser der subduksjon finner sted. Her lagres enorme mengder energi naar platene presser mot hverandre, og frigjoeringen er voldsom. De stoerste registrerte jordskjelvene (Chile 1960 og Japan 2011) skjedde begge ved subduksjonssoner.',
    },
  ],
};

// ============================================================================
// Kapittel 2.5: Forvitring og erosjon
// ============================================================================

export const CHAPTER_GEOGRAFI_2_5: TextbookChapter = {
  id: 'geografi-1-2-5',
  courseId: 'geografi',
  chapterNumber: '2.5',
  title: 'Forvitring og erosjon',
  description: 'Mekanisk og kjemisk forvitring, erosjon ved vann, vind og is, og forvitring i ulike klimasoner.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare korleis indre og ytre krefter formar jordoverflata',
    'gjoere greie for samanhengar mellom naturgrunnlag og samfunn',
  ],
  content: [
    {
      id: 'geo-2-5-intro',
      type: 'text',
      content: `# Forvitring og erosjon

Mens indre krefter som vulkanisme og platetektonikk bygger opp landskapet, bryter **ytre krefter** det ned igjen. De to viktigste ytre prosessene er **forvitring** og **erosjon**.

**Forvitring** er nedbrytning av bergarter paa stedet - uten at materialet flyttes. **Erosjon** er prosessen der loest materiale transporteres bort av vann, vind, is eller tyngdekraft. Sammen former disse prosessene landskapet vi ser rundt oss.`,
    },
    {
      id: 'geo-2-5-def-forvitring',
      type: 'definition',
      title: 'Forvitring',
      content: 'Forvitring er nedbrytning av bergarter og mineraler paa stedet, uten transport av materialet. Det finnes to hovedtyper: mekanisk forvitring (fysisk oppsprekking) og kjemisk forvitring (kjemisk omvandling av mineraler).',
    },
    {
      id: 'geo-2-5-mekanisk',
      type: 'text',
      content: `## Mekanisk forvitring

Mekanisk forvitring bryter bergarter fysisk i mindre biter uten aa endre den kjemiske sammensetningen.

### Frostforvitring
Den viktigste formen for mekanisk forvitring i Norge. Vann trenger inn i sprekker i berget. Naar vannet fryser, utvider det seg med ca. 9 %, noe som utvider sprekkene. Gjentatte fryse-tine-sykluser sprenger gradvis berget fra hverandre. **Urer** (steinurer) under bratte fjellsider i norske fjell er resultatet av frostforvitring.

### Rotsprengning
Treroetter vokser inn i sprekker og utvider dem etter hvert som roetten vokser. Selv smaa roetter kan utoeeve enorm kraft over tid.

### Trykkavlastning
Naar overliggende bergart eroderes bort, reduseres trykket paa bergarten under. Den utvider seg og sprekker opp i flak parallelt med overflaten - saaakalt **eksfoliasjon**.

### Temperaturforvitring
I oerkener med store temperatursvingninger mellom dag og natt utvider og trekker mineraler seg sammen ulikt. Over lang tid foerer dette til oppsprekking av berget.`,
    },
    {
      id: 'geo-2-5-kjemisk',
      type: 'text',
      content: `## Kjemisk forvitring

Kjemisk forvitring endrer den kjemiske sammensetningen til mineralene i bergarten. De opprinnelige mineralene omvandles til nye, ofte loeselige stoffer som transporteres bort av vann.

### Karbonatforvitring
Karbondioksid (CO₂) fra luft og jord loeser seg i regnvann og danner **kulsyre** (H₂CO₃). Kulsyren reagerer med kalkstein og loeser den opp. Dette er grunnen til at vi finner grotter, dryppsteinshuler og karsttopografi i kalksteinsomraader.

### Oksidasjon
Jern i bergarter reagerer med oksygen og vann og danner rust (jernoksid). Denne prosessen svekker bergartene og gir dem en rustbrun farge. Mye av den roeude jorda i tropiske omraader skyldes oksidasjon.

### Hydrolyse
Vann reagerer med silikater i bergartene og bryter dem ned til leiremineraler. Feltspat, som finnes i granitt, omvandles til kaolin (leire). Denne prosessen er viktig i varme, fuktige klimaer.`,
    },
    {
      id: 'geo-2-5-def-erosjon',
      type: 'definition',
      title: 'Erosjon',
      content: 'Erosjon er transport av loest materiale (sedimenter) fra ett sted til et annet, utfoert av vann, vind, is eller tyngdekraft. Erosjon krever et transportmedium og er mest effektiv naar forvitringsmateriale er tilgjengelig.',
    },
    {
      id: 'geo-2-5-erosjon',
      type: 'text',
      content: `## Erosjon - de tre hovedagentene

### Vannerosjon
Rennende vann er den viktigste erosjonsagenten globalt. Elver graver seg ned og sidelengs, og transporterer enorme mengder sedimenter. **Regndraaapeerosjon** kan vaere overraskende kraftig paa bar jord.

### Vinderosjon
Viktigst i toerre omraader med lite vegetasjon. Vinden blaeser bort fine partikler (**deflasjon**) og sliper bergarter med sandkorn (**abrasjon/korrasjon**). Sanddyner i oerkener er et resultat av vindtransport.

### Iserosjon (glasial erosjon)
Isbreer er ekstremt effektive erosjonsagenter. De skurer og skraper underlagget, plukker loess stein og transporterer enorme mengder materiale. Norges landskap med fjorder, U-daler og morener er i stor grad formet av isbreer.`,
    },
    {
      id: 'geo-2-5-klimasoner',
      type: 'text',
      content: `## Forvitring i ulike klimasoner

Klimaet bestemmer hvilke forvitringsprosesser som dominerer:

### Polare og alpine omraader (inkl. Norge)
- **Frostforvitring** dominerer - hyppige fryse-tine-sykluser
- Lite kjemisk forvitring pga. lav temperatur
- Resultater: urer, blokkmark, frostsprengte fjelltopper

### Tempererte omraader
- Baade mekanisk og kjemisk forvitring er aktive
- Frostforvitring om vinteren, kjemisk forvitring om sommeren
- God balanse gir dyp jordprofil over tid

### Tropiske omraader
- **Kjemisk forvitring** dominerer - hoey temperatur og mye nedbor akselererer kjemiske reaksjoner
- Forvitringslaget kan vaere flere titalls meter dypt (lateritt)
- Oksidasjon av jern gir karakteristisk roed jord

### Toerre omraader (oerkener)
- **Temperaturforvitring** og **vinderosjon** dominerer
- Lite kjemisk forvitring pga. lite vann
- Saltforvitring i omraader med saltholdige bergarter`,
    },
    {
      id: 'geo-2-5-example',
      type: 'example',
      title: 'Frostforvitring i norske fjell',
      problem: 'Forklar hvorfor det ligger saa mye loess stein (ur) under bratte fjellsider i norske fjell.',
      solution: `**Prosessen bak steinurer i norske fjell:**

1. **Vann trenger inn:** Regnvann og smeltevann trenger inn i sprekker og porer i bergarten
2. **Frysing:** Naar temperaturen synker under 0 °C, fryser vannet til is
3. **Utvidelse:** Isen utvider seg med ca. 9 % og presser sprekkene fra hverandre med enorm kraft
4. **Tining:** Naar isen smelter, trenger mer vann inn i de utvidede sprekkene
5. **Gjentakelse:** Hver fryse-tine-syklus utvider sprekkene litt mer
6. **Loesrivelse:** Til slutt sprenges steinblokker loess og faller ned

**Hvorfor saa mye i Norge?** I norske fjell passerer temperaturen 0 °C mange ganger per aar, saerlig vaar og hoest. Denne hyppige fryse-tine-syklusen gjoer frostforvitringen saerlig effektiv. Etter istiden har prosessen paagaatt i ca. 10 000 aar.`,
    },
    {
      id: 'geo-2-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Forvitring** bryter ned bergarter paa stedet, **erosjon** transporterer materialet bort
- **Mekanisk forvitring** inkluderer frostforvitring, rotsprengning og temperaturforvitring
- **Kjemisk forvitring** inkluderer karbonatforvitring, oksidasjon og hydrolyse
- De tre hovedagentene for erosjon er **vann**, **vind** og **is**
- Klimaet avgjoer hvilke forvitringsprosesser som dominerer: frostforvitring i kalde omraader, kjemisk forvitring i tropene
- I Norge er **frostforvitring** den viktigste mekaniske forvitringsprosessen`,
    },
  ],
  exercises: [
    {
      id: 'geo-2-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den viktigste formen for mekanisk forvitring i Norge?',
      options: [
        { id: 'a', text: 'Frostforvitring', isCorrect: true },
        { id: 'b', text: 'Temperaturforvitring', isCorrect: false },
        { id: 'c', text: 'Saltforvitring', isCorrect: false },
        { id: 'd', text: 'Vinderosjon', isCorrect: false },
      ],
      solution: 'Frostforvitring er den viktigste mekaniske forvitringsprosessen i Norge fordi temperaturen passerer 0 °C mange ganger per aar, saerlig vaar og hoest. Vann i sprekker fryser, utvider seg og sprenger berget gradvis fra hverandre.',
    },
    {
      id: 'geo-2-5-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor er kjemisk forvitring mest effektiv i tropiske omraader?',
      options: [
        { id: 'a', text: 'Fordi hoey temperatur og mye nedbor akselererer kjemiske reaksjoner', isCorrect: true },
        { id: 'b', text: 'Fordi bergartene i tropene er mykere enn andre steder', isCorrect: false },
        { id: 'c', text: 'Fordi det er mindre vegetasjon til aa beskytte bergartene', isCorrect: false },
        { id: 'd', text: 'Fordi vinderosjon eksponerer mer bergoverflate', isCorrect: false },
      ],
      solution: 'Kjemiske reaksjoner gaar raskere ved hoeyere temperaturer - som en tommelfingerregel dobles reaksjonshastigheten for hver 10 °C temperaturoekning. I tillegg soorger den rikelige nedboren for at det stadig er vann tilgjengelig for kjemiske reaksjoner. Kombinasjonen gir svart dyp kjemisk forvitring (lateritt).',
    },
    {
      id: 'geo-2-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom forvitring og erosjon, og gi et eksempel paa hver prosess.',
      solution: 'Forvitring er nedbrytning av bergarter paa stedet uten transport. Eksempel: Frostforvitring sprengler en fjellside i loese blokker som faller ned og danner en ur rett under. Erosjon er transport av loest materiale fra ett sted til et annet av vann, vind, is eller tyngdekraft. Eksempel: En elv eroderer jordbruksland og transporterer sedimentene nedstroemms til et delta. Forvitring bryter ned, erosjon frakter bort - begge prosessene maa samvirke for aa forme landskapet.',
    },
    {
      id: 'geo-2-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hvordan karbonatforvitring fungerer, og forklar hvilke landformer denne prosessen kan danne.',
      solution: 'Karbonatforvitring skjer naar karbondioksid (CO₂) fra luft og jord loeser seg i regnvann og danner kulsyre (H₂CO₃). Kulsyren reagerer med kalsiumkarbonat (kalkstein) og loeser det opp. Over tid kan dette danne karsttopografi med karakteristiske landformer: underjordiske grotter og hulesystemer, dryppstein (stalaktitter og stalagmitter), synkehull (doliner) der taket i en grotte har rast sammen, og underjordiske elvelop. Eksempler finnes i Nordland (Gronligrotta) og i store karstomraader i Kina, Slovenia og USA.',
    },
    {
      id: 'geo-2-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken erosjonsagent er viktigst globalt?',
      options: [
        { id: 'a', text: 'Rennende vann', isCorrect: true },
        { id: 'b', text: 'Vind', isCorrect: false },
        { id: 'c', text: 'Isbreer', isCorrect: false },
        { id: 'd', text: 'Boelger', isCorrect: false },
      ],
      solution: 'Rennende vann er den viktigste erosjonsagenten globalt. Elver transporterer enorme mengder sedimenter fra kontinentene til havet hvert aar. Selv i toerre omraader kan kortvarige, kraftige regnskyll foraarsake betydelig vannerosjon.',
    },
  ],
};

// ============================================================================
// Kapittel 2.6: Elver og vassdrag
// ============================================================================

export const CHAPTER_GEOGRAFI_2_6: TextbookChapter = {
  id: 'geografi-1-2-6',
  courseId: 'geografi',
  chapterNumber: '2.6',
  title: 'Elver og vassdrag',
  description: 'Elvers dannelse og loep, erosjon og avsetning, meandersvinger, delta, V-daler, flom og vannkraft.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare korleis indre og ytre krefter formar jordoverflata',
    'gjoere greie for samanhengar mellom naturgrunnlag og samfunn',
  ],
  content: [
    {
      id: 'geo-2-6-intro',
      type: 'text',
      content: `# Elver og vassdrag

Elver er noen av de viktigste kreftene som former jordoverflaten. De graver daler, transporterer enorme mengder sedimenter og avsetter materiale som danner sletter og deltaer. I Norge har elver vaert sentrale for bosetting, transport og energiproduksjon gjennom hele historien.

Et **vassdrag** er hele det sammenhengende vannsystemet - fra de minste bekkene via staedigre stoerre elver til utloepet i havet eller en innsjoe. Omraadet som et vassdrag drenerer kalles et **nedborfelt**.`,
    },
    {
      id: 'geo-2-6-loep',
      type: 'text',
      content: `## Elvers dannelse og loep

En elv starter gjerne som smaa bekker hoyt til fjells, matet av nedbor, smeltevann eller kilder. Etter hvert som bekkene samler seg, vokser elven og faar stadigre mer kraft.

Vi deler gjerne et elvloep i tre deler:

### OEvre loep (ungdomsstadiet)
- **Terreng:** Bratt med mye fall
- **Erosjon:** Elven eroderer hovedsakelig **nedover** (vertikal erosjon)
- **Landformer:** V-daler, fossefaller, stryk
- **Vannfoering:** Rask, turbulent stroemning

### Midtre loep (modningsstadiet)
- **Terreng:** Moderat helling
- **Erosjon:** Baade vertikal og lateral (sidelengs) erosjon
- **Landformer:** Dalen utvides, meandersvinger begynner
- **Transport:** Elven transporterer mye sediment

### Nedre loep (alderdomsstadiet)
- **Terreng:** Flatt, liten hoeydeforskjell
- **Erosjon:** Lateral erosjon dominerer
- **Landformer:** Brede elvesletter, meandersvinger, kroksjoeeer, delta
- **Avsetning:** Mye materiale avsettes`,
    },
    {
      id: 'geo-2-6-def-meander',
      type: 'definition',
      title: 'Meander',
      content: 'En meander er en sving eller kurve i et elvloep. Meandersvinger oppstaar fordi elven eroderer paa yttersiden av svingene (der stroemmen er sterkest) og avsetter materiale paa innersiden (der stroemmen er svakest). Over tid blir svingene stadigre sterkere.',
    },
    {
      id: 'geo-2-6-erosjon',
      type: 'text',
      content: `## Erosjon og avsetning

### Elveerosjon
Elver eroderer paa tre maater:
- **Hydraulisk erosjon:** Vannets kraft river loess materiale fra bunnen og sidene
- **Abrasjon (slitasje):** Sedimenter som transporteres av elven virker som \"sandpapir\" paa bunnen og bredden
- **Korrosjon (opploesning):** Svakt surt vann loeser opp kalkstein og andre loeselige bergarter

### Transport
Elven transporterer materiale paa tre maater:
- **Bunntransport:** Store steiner og grus ruller og spretter langs bunnen
- **Suspensjon:** Finkornede partikler (silt og leire) holdes svevende i vannet
- **OEpploesning:** Loeste stoffer fraktes usynlig i vannet

### Avsetning (sedimentasjon)
Naar elvens hastighet avtar, mister den evnen til aa transportere materiale. De stoerste partiklene avsettes foerst, deretter stadigre finere materiale. Avsetning skjer saerlig der elven:
- Naar et flatere omraade
- Moeter en innsjoe eller havet
- Oversvoemmer flomsletten`,
    },
    {
      id: 'geo-2-6-landformer',
      type: 'text',
      content: `## Viktige landformer skapt av elver

### V-dal
I oevre loep graver elven seg dypt ned og danner en smal dal med V-formet tverrsnitt. Sideveggene forvitrer og raser ned mot elvleiet. Jostedalsbreen-omraadet har mange imponerende V-daler.

### Meandersvinger
I midtre og nedre loep svinger elven fra side til side. Yttersiden av svingene eroderes, innersiden bygges opp. Over tid kan en meandersving kuttes av og danne en **kroksjoe** - en halvmaaneformet innsjoe.

### Elveslette (flomslette)
Flat mark paa begge sider av elven, bygget opp av sedimenter avsatt under flom. Elvesletter er ofte svart fruktbare og viktige jordbruksomraader (f.eks. Hedmarken langs Mjosa).

### Delta
Der en elv munner ut i en innsjoe eller havet, avtar hastigheten braat. Sedimentene avsettes og bygger gradvis opp en flat landtunge - et delta. Nilen, Mississippi og Ganges har verdens mest kjente deltaer.`,
    },
    {
      id: 'geo-2-6-def-delta',
      type: 'definition',
      title: 'Elvedelta',
      content: 'Et elvedelta er en flat avsetningsform som dannes der en elv munner ut i hav eller innsjoe. Naar vannhastigheten synker, avsettes sedimentene og bygger opp en vifteformet landform. Navnet kommer fra den greske bokstaven delta (Δ), som har same form.',
    },
    {
      id: 'geo-2-6-flom',
      type: 'text',
      content: `## Flom

Flom oppstaar naar vannfoeeringen i en elv overstiger det elveleiet kan haandtere, og vannet stroemmer ut over flomslettene.

### Aarsaker til flom
- **Snoeesmelting:** Rask smelting om vaaren, saerlig kombinert med regn
- **Kraftig nedbor:** Langvarig eller intens nedbor
- **Istapper:** Oppdemminger av is i elvleiet
- **Klimaendringer:** OEkt temperatur og endrede nedborsmoenstre oeker flomrisikoen

### Konsekvenser av flom
- OEdeleggelse av bygninger, veier og jordbruksarealer
- Fare for menneskeliv
- Erosjon og massebevegelser
- Forurensning av drikkevann

### Flomsikring
Norge har mange flomutsatte omraader. Viktige tiltak inkluderer flomvoller, regulering av vassdrag med dammer, flomvarsling og arealplanlegging som unngaar bygging i flomutsatte omraader.`,
    },
    {
      id: 'geo-2-6-vannkraft',
      type: 'text',
      content: `## Vannkraft i Norge

Norges elver og vassdrag er en enorm energiressurs. Ca. 90 % av norsk stroemmproduksjon kommer fra vannkraft, noe som gjoer Norge til et av verdens mest fornybare energiland.

### Hvorfor Norge er ideelt for vannkraft
- **Mye nedbor:** Vest-Norge faar opptil 3 000 mm aarlig
- **Store hoeydeforskjeller:** Bratte fjell gir stort fall
- **Mange innsjoeeer:** Naturlige magasiner for vannlagring
- **Isbreer:** Smeltevannet mater elvene om sommeren

### Norges stoerste vassdrag
- **Glomma:** Norges lengste elv (621 km), drenerer ca. 13 % av Norges areal
- **Drammensvassdraget:** Inkluderer Tyrifjorden og flere store elver
- **Numedalslaaagen:** Viktig kraftprodusent i Vestfold og Telemark`,
    },
    {
      id: 'geo-2-6-example',
      type: 'example',
      title: 'Deltaet ved Mjosas nordende',
      problem: 'Ved Lillehammer, der Gudbrandsdalslaaagen renner ut i Mjoesa, finnes et markert delta. Forklar hvordan dette deltaet har blitt dannet.',
      solution: `**Dannelsen av deltaet ved Lillehammer:**

1. **Tilfoersel:** Gudbrandsdalslaaagen transporterer store mengder sedimenter fra Gudbrandsdalen
2. **Hastighetsendring:** Naar elven naar Mjoesa, faller stroemhastigheten braat
3. **Avsetning:** De groeveste sedimentene (grus og sand) avsettes foerst, naermest elvmunningen
4. **Lagdeling:** Finere materiale (silt og leire) transporteres lenger ut i innsjoeen foer det avsettes
5. **Vekst:** Over tusenvis av aar har deltaet vokst utover i Mjoesa

**Resultat:** Det flate, fruktbare omraadet rundt Lillehammer er bygget opp av elvesedimenter. Byen selv er delvis bygget paa dette deltaet. Elvesletta langs laaagen er viktig jordbruksland, og de laagvise avsetningene kan sees i veiskjaeringer i omraadet.`,
    },
    {
      id: 'geo-2-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Elver deles i **oevre loep** (V-daler, fosser), **midtre loep** (meandersvinger) og **nedre loep** (elvesletter, delta)
- **Erosjon** skjer ved hydraulisk kraft, abrasjon og korrosjon
- Materialet transporteres som **bunntransport**, **suspensjon** og **opploesning**
- **Meandersvinger** oppstaar ved lateral erosjon paa yttersiden og avsetning paa innersiden
- **Delta** dannes der elver moeter stillestaaende vann
- **Flom** skyldes snoesmelting, kraftig nedbor eller isoppdemming
- Norge faar ca. **90 % av stroemmen** fra vannkraft`,
    },
  ],
  exercises: [
    {
      id: 'geo-2-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type erosjon dominerer i elvens oevre loep?',
      options: [
        { id: 'a', text: 'Vertikal erosjon (nedover)', isCorrect: true },
        { id: 'b', text: 'Lateral erosjon (sidelengs)', isCorrect: false },
        { id: 'c', text: 'Vinderosjon', isCorrect: false },
        { id: 'd', text: 'Kjemisk erosjon', isCorrect: false },
      ],
      solution: 'I elvens oevre loep er terrenget bratt og vannhastigheten hoey. Elven bruker mesteparten av energien paa aa grave seg nedover (vertikal erosjon), noe som danner de karakteristiske V-dalene.',
    },
    {
      id: 'geo-2-6-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en kroksjoe?',
      options: [
        { id: 'a', text: 'En halvmaaneformet innsjoe som dannes naar en meandersving kuttes av', isCorrect: true },
        { id: 'b', text: 'En innsjoe som dannes bak en morenerygg', isCorrect: false },
        { id: 'c', text: 'En innsjoe i bunnen av en V-dal', isCorrect: false },
        { id: 'd', text: 'En innsjoe som dannes ved elvens utloep', isCorrect: false },
      ],
      solution: 'En kroksjoe (ogsaa kalt meandersjoe) dannes naar en meandersving blir saa kraftig at elven \"kutter snarveien\" og forlater den gamle svingen. Den avskaarneede svingen blir en halvmaaneformet innsjoe som gradvis gror igjen.',
    },
    {
      id: 'geo-2-6-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar prosessen som danner meandersvinger, og beskriv hva som skjer paa yttersiden og innersiden av en sving.',
      solution: 'Meandersvinger dannes fordi elven eroderer ulikt paa de to sidene av en sving. Paa yttersiden er stroemhastigheten hoeyest, og vannet graver i elvebredden (lateral erosjon). Paa innersiden er stroemmen svakere, og sedimenter avsettes (punktbanke). Over tid blir yttersiden stadig mer undergraved, mens innersiden bygges opp. Dette foerer til at svingene blir stadigre kraftigere. Prosessen fortsetter til svingen eventuelt kuttes av, og en kroksjoe dannes.',
    },
    {
      id: 'geo-2-6-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor Norge er et av verdens beste land for vannkraftproduksjon.',
      solution: 'Norge har ideelle forhold for vannkraft av flere grunner: For det foerste gir den vestvendte kystlinjen rikelig nedbor - opptil 3 000 mm aarlig i Vest-Norge - naar fuktig luft fra Atlanterhavet moeter fjellene. For det andre gir de bratte fjellene stort hoeydefall, som er avgjoerendes for kraftproduksjon. For det tredje fungerer mange naturlige innsjoeeer som vannmagasiner. For det fjerde gir smeltevann fra isbreer stabil vanntilfoersel om sommeren. Resultatet er at ca. 90 % av norsk stroemmproduksjon kommer fra vannkraft, noe som gjoer Norge til et av verdens groeenneste energiland.',
    },
    {
      id: 'geo-2-6-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Norges lengste elv?',
      options: [
        { id: 'a', text: 'Glomma (621 km)', isCorrect: true },
        { id: 'b', text: 'Drammenselva (305 km)', isCorrect: false },
        { id: 'c', text: 'Numedalslaaagen (352 km)', isCorrect: false },
        { id: 'd', text: 'Altaelva (240 km)', isCorrect: false },
      ],
      solution: 'Glomma er Norges lengste elv med sine 621 km. Den renner fra Roeros-omraadet gjennom OEsterdalen og ned til Fredrikstad der den munner ut i Oslofjorden. Glomma drenerer ca. 13 % av Norges areal.',
    },
  ],
};

// ============================================================================
// Kapittel 2.7: Isbreer, kyster og norske landformer
// ============================================================================

export const CHAPTER_GEOGRAFI_2_7: TextbookChapter = {
  id: 'geografi-1-2-7',
  courseId: 'geografi',
  chapterNumber: '2.7',
  title: 'Isbreer, kyster og norske landformer',
  description: 'Isbreer og glasial erosjon, kystprosesser og kystlandskap, og Norges karakteristiske landformer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare korleis indre og ytre krefter formar jordoverflata',
    'gjoere greie for hovudtrekk ved den geologiske utviklinga av jorda',
    'gjoere greie for samanhengar mellom naturgrunnlag og samfunn',
  ],
  content: [
    {
      id: 'geo-2-7-intro',
      type: 'text',
      content: `# Isbreer, kyster og norske landformer

Norges landskap er i stor grad formet av **isbreer** som dekket hele Skandinavia under istidene. Fjordene, U-dalene, morenene og de avrundede fjellformasjonene vi ser i dag er alle spor etter isens arbeid. I tillegg har **kystprosesser** - boelger, stroemmer og tidevann - formet vaar lange kystlinje gjennom tusenvis av aar.

I dette kapittelet ser vi paa hvordan is og hav former landskapet, med saerlig fokus paa Norges ikoniske landformer.`,
    },
    {
      id: 'geo-2-7-isbreer',
      type: 'text',
      content: `## Isbreer og glasial erosjon

En isbre er en stor masse av is som beveger seg sakte nedover under sin egen tyngde. Isbreer dannes naar snoe akkumuleres aar etter aar og presser seg sammen til is.

### Isbretyper
- **Dalbreer:** Fyller en dal og flyter nedover, som en frosset elv (f.eks. Briksdalsbreen)
- **Plataabreer:** Dekker et flatt omraade paa et fjellplataa (f.eks. Jostedalsbreen)
- **Innlandsis:** Enorme ismasser som dekker hele landomraader (f.eks. Gronland og Antarktis)

### Glasial erosjon
Isbreer er ekstremt effektive erosjonsagenter:
- **Plukkeerosjon (plucking):** Isen fryser fast til bergarten under og river loess biter naar breen beveger seg
- **Skuringserosjon (abrasjon):** Steiner fastfrosset i isen virker som grovt sandpapir og skurer underlagget
- **Knusing:** Isens enorme vekt knuser bergarten under

### Spor etter isbreer
- **Skuringsstriper:** Parallelle riper i berget som viser isens bevegelsesretning
- **Rundsva:** Fjellknauer slipt runde paa den ene siden (stoetsiden) og bratte paa den andre (lesiden)`,
    },
    {
      id: 'geo-2-7-def-morene',
      type: 'definition',
      title: 'Morene',
      content: 'Morene er usortert materiale (blanding av alt fra leire til store blokker) som transporteres og avsettes av en isbre. Endemorener dannes i fronten av breen, sidemorener langs sidene, bunnmorener under breen, og midtmorener der to breer moetes. Morener er viktige landformer som viser hvor isen har vaert.',
    },
    {
      id: 'geo-2-7-glasiale-landformer',
      type: 'text',
      content: `## Glasiale landformer

### U-dal
Isbreer omformer V-daler (gravd av elver) til brede, dype **U-daler** med bratte sider og flat bunn. Isbreens enorme erosjonskraft graver dalen baade dypere og bredere. Romsdalen, Gudbrandsdalen og Setesdal er klassiske eksempler.

### Fjord
En fjord er en U-dal som er fylt med sjoeevann. Naar isen smeltet etter istiden, steg havet og fylte de dype dalene langs kysten. Norske fjorder er blant verdens dypeste - Sognefjorden er 1 308 meter dyp og 204 km lang.

### Botner (karer)
Halvrunde, skaalformede forsenkninger hoyt oppe i fjellsidene, gravd ut av smaa lokale breer. Naar breen smelter, fylles botnen ofte av en innsjoe (botnvann). Eksempel: Bessvatnet i Jotunheimen.

### Tinder og egger
Naar botner graver seg inn i en fjellside fra flere kanter, staar det igjen skarpe **tinder** (spisse fjelltopper) og **egger** (smale rygger). Romsdalshornet og Stetind er eksempler.

### Morenerygger og esker
- **Morenerygger** markerer hvor isbreen stod stille en stund. Raet i Vestfold og OEstfold er en stor endemorenerygg fra siste istid.
- **Esker** er lange, smale rygger av grus avsatt av smeltevannsstroemmer under isen.`,
    },
    {
      id: 'geo-2-7-kyst',
      type: 'text',
      content: `## Kystprosesser og kystlandskap

Norges kystlinje er over 100 000 km lang (med alle oeyene). Den formes stadig av boelger, stroemmer og tidevann.

### Boelegeerosjon
Boelger som bryter mot kysten eroderer bergartene paa flere maater:
- **Hydraulisk kraft:** Vannet presser inn i sprekker med enorm kraft
- **Abrasjon:** Stein og grus slynges mot kysten av boelgene
- **Korrosjon:** Salt vann loeser opp kalkstein

### Kystlandformer
- **Strandflate:** En smal, flat kystslette nesten paa sjoenivaa, typisk for Vest- og Nord-Norge. Trolig formet av en kombinasjon av frostforvitring og boelegeerosjon under istidene.
- **Skjaer og holmer:** Smaa oyer langs kysten, ofte avrundede av boelger og is
- **Strandvoller:** Oppbyggede rygger av stein og grus kastet opp av boelger
- **Fjorder og sund:** Oversvoemte daler og passasjer mellom oeyene

### Landheving og strandlinjer
Etter istiden har landet hevet seg ettersom isens vekt ble fjernet (postglasial landheving). Langs kysten kan vi se **hevede strandlinjer** - gamle strandnivaaer som naa ligger hoeyere enn sjoen. I Oslofjord-omraadet har landet hevet seg over 200 meter.`,
    },
    {
      id: 'geo-2-7-def-fjord',
      type: 'definition',
      title: 'Fjord',
      content: 'En fjord er en lang, smal og dyp havarm dannet ved at en glasial U-dal ble fylt med sjoeevann etter istiden. Norske fjorder er blant de dypeste og lengste i verden. Sognefjorden er 1 308 m dyp og 204 km lang. Fjordene har ofte en grunn terskel (undersjoeisk morenerygg) ved munningen.',
    },
    {
      id: 'geo-2-7-norske-landformer',
      type: 'text',
      content: `## Norges landformer - en geologisk oversikt

Norges landskap er resultatet av millioner av aar med geologiske prosesser. Her er de viktigste landformene:

### Fjellkjeden (Den kaledonske fjellkjeden)
Norges fjell ble dannet under den **kaledonske fjellkjededannelsen** for ca. 400 millioner aar siden, da kontinentene Laurentia og Baltika kolliderte. De opprinnelige fjellene var kanskje like hoeye som Himalaya, men er siden erodert kraftig ned.

### Vidder og plataaer
Store, flate hoeyfjellsomraader som Hardangervidda og Finnmarksvidda. De representerer rester av et gammelt, flatt landskap som ble hevet opp. Viddene er lite pavirket av glasial erosjon sammenlignet med dalene.

### Fjorder og kystlandskap
Vestlandets fjorder er verdenskjente. De ble gravd ut av isbreer under istidene og fylt med sjoeevann etterpaa. Den dype, smale formen skaper et unikt klima inne i fjordene.

### Morenelandskap i lavlandet
OEstlandet og Troendelag har store omraader med moreneavsetninger - baaakkemorener, drumliner og morenerygger som preger landskapet. Raet er den mest markerte moreneryggen i Norge.

### OEstlandets leirjordsomraader
Da isen smeltet, laa store deler av OEstlandet under havet. Fin leire ble avsatt paa havbunnen. Naar denne **marin leire** (kvikkleire) vaskes ut av saltet, kan den bli ustabil og foraarsake leirskred.`,
    },
    {
      id: 'geo-2-7-example',
      type: 'example',
      title: 'Sognefjorden - Norges dypeste fjord',
      problem: 'Forklar hvordan Sognefjorden ble dannet, og beskriv de geologiske prosessene som har bidratt.',
      solution: `**Dannelsen av Sognefjorden:**

1. **Elvedal:** Foer istidene gravde elver en V-dal i det vestlandske landskapet
2. **Istidenes arbeid:** Under gjentatte istider (de siste 2,6 millioner aarene) fylte enorme isbreer dalen
3. **Glasial erosjon:** Isbreens tyngde og bevegelse gravde dalen **mye dypere og bredere**. Isen brukte eksisterende svakhetssoner i bergartene
4. **U-dal:** Dalen ble omformet fra V-form til U-form med bratte sider og flat bunn
5. **Overforfordypning:** Isen gravde dypere inn i landet enn ved munningen, fordi isen var tykkere der dalene var smalere
6. **Terskel:** Ved fjordmunningen la isen igjen en morenerygg (terskel) paa ca. 100 m dyp
7. **Havstigning:** Da isen smeltet for ca. 10 000 aar siden, steg havet og fylte dalen

**Resultatet:** Sognefjorden er 1 308 m dyp (dypere enn havbunnen utenfor kysten), 204 km lang og opptil 6 km bred. Terskelen ved munningen gjoer at det dype vannet inne i fjorden fornyes sakte.`,
    },
    {
      id: 'geo-2-7-istider',
      type: 'text',
      content: `## Istidene og Norge

De siste 2,6 millioner aarene har jorden opplevd en rekke **istider** adskilt av varmere perioder (**mellomistider**). Under den siste istiden (Weichsel-istiden, ca. 115 000-11 700 aar siden) var hele Skandinavia dekket av en innlandsis som var opptil 3 km tykk.

### Isens virkning paa Norge
- Gravde ut fjorder og U-daler
- Slipte ned fjelltopper og formet rundsvae
- Transporterte og avsatte morener over hele landet
- Presset landet ned med sin vekt (postglasial landheving paagaar fortsatt)
- Gravde ut innsjoeeer og omformet dreneringssystemene

### Landhevingen
Etter at isen smeltet, begynte landet aa heve seg. Denne prosessen paagaar fortsatt:
- Stoerst heving i Bottenviken (ca. 9 mm/aar)
- I Oslo-omraadet ca. 3-4 mm/aar
- Totalt har Oslo-omraadet hevet seg over 200 meter siden istiden`,
    },
    {
      id: 'geo-2-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Isbreer** former landskapet gjennom plukkeerosjon, skuringserosjon og knusing
- Glasiale landformer inkluderer **U-daler**, **fjorder**, **botner**, **tinder** og **morener**
- **Kystprosesser** (boelger, stroemmer, tidevann) former strandflater, strandvoller og skjaer
- Norges fjell ble dannet under den **kaledonske fjellkjededannelsen** for ca. 400 millioner aar siden
- **Fjordene** er oversvoemte glasiale U-daler - Sognefjorden er 1 308 m dyp
- **Postglasial landheving** paagaar fortsatt etter at istidens enorme ismasser smeltet
- Norges landformer er resultatet av samspillet mellom indre krefter (fjellkjededannelse) og ytre krefter (erosjon av is, vann og boelger)`,
    },
  ],
  exercises: [
    {
      id: 'geo-2-7-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en fjord?',
      options: [
        { id: 'a', text: 'En oversvoemmet glasial U-dal', isCorrect: true },
        { id: 'b', text: 'En V-dal gravd av en elv', isCorrect: false },
        { id: 'c', text: 'En innsjoe dannet av en vulkan', isCorrect: false },
        { id: 'd', text: 'En elvedal fylt med morene', isCorrect: false },
      ],
      solution: 'En fjord er en lang, smal og dyp havarm som oppstod naar en glasial U-dal ble fylt med sjoeevann etter istiden. Isbreene gravde dalene mye dypere enn elver ville gjort, og havet trengte inn naar isen smeltet.',
    },
    {
      id: 'geo-2-7-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom en V-dal og en U-dal?',
      options: [
        { id: 'a', text: 'V-daler er gravd av elver og er smale med bratte sider, U-daler er gravd av isbreer og er brede med flat bunn', isCorrect: true },
        { id: 'b', text: 'V-daler er eldre enn U-daler', isCorrect: false },
        { id: 'c', text: 'V-daler finnes bare i tropiske omraader, U-daler bare i polare omraader', isCorrect: false },
        { id: 'd', text: 'V-daler er gravd av isbreer, U-daler av elver', isCorrect: false },
      ],
      solution: 'V-daler er gravd av elver som eroderer hovedsakelig nedover, noe som gir en smal dal med V-formet tverrsnitt. U-daler er omformet av isbreer som eroderer baade nedover og sidelengs med stor kraft, noe som gir en bred dal med bratte sider og flat bunn.',
    },
    {
      id: 'geo-2-7-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva morene er, og beskriv ulike typer morener.',
      solution: 'Morene er usortert materiale (en blanding av alt fra leire til store blokker) som er transportert og avsatt av en isbre. Det finnes flere typer: Endemorane (bunnmorane) avsettes i fronten av breen og markerer breens stoerste utbredelse. Sidemorane dannes langs breens sider. Bunnmorane avsettes under breen som et jevnt lag. Midtmorane dannes der to breer moetes og sidemoraner slaar seg sammen. Raet i Vestfold og OEstfold er Norges mest kjente endemorenerygg og markerer en posisjon der isen stod lenge under tilbaketrekningen etter siste istid.',
    },
    {
      id: 'geo-2-7-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva postglasial landheving er, og beskriv hvordan den pavirker Norge i dag.',
      solution: 'Postglasial landheving er den gradvise hevingen av landmasser etter at istidenes tunge ismasser smeltet bort. Under istiden trykte isen (opptil 3 km tykk) jordskorpen ned i den plastiske astenosfaeren. Etter at isen smeltet for ca. 10 000 aar siden, begynte landet aa heve seg tilbake - omtrent som en madrass som reiser seg etter at noen staar opp. I Oslo-omraadet hever landet seg ca. 3-4 mm per aar, og totalt har omraadet hevet seg over 200 meter. Langs kysten finner vi hevede strandlinjer som viser tidligere havnivaaer. Landhevingen pavirker ogsaa havner, kystnear infrastruktur og arealplanlegging.',
    },
    {
      id: 'geo-2-7-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken fjord er Norges dypeste?',
      options: [
        { id: 'a', text: 'Sognefjorden (1 308 m)', isCorrect: true },
        { id: 'b', text: 'Hardangerfjorden (800 m)', isCorrect: false },
        { id: 'c', text: 'Geirangerfjorden (260 m)', isCorrect: false },
        { id: 'd', text: 'Oslofjorden (295 m)', isCorrect: false },
      ],
      solution: 'Sognefjorden i Vestland er Norges og Europas dypeste fjord med sine 1 308 meter. Den er ogsaa 204 km lang, noe som gjoer den til en av verdens lengste fjorder. Dybden skyldes intens glasial erosjon der isen fulgte eksisterende svakhetssoner i bergartene.',
    },
  ],
};

// ============================================================================
// Eksport av alle kapitler i seksjon 2
// ============================================================================

export const GEOGRAFI_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOGRAFI_2_1, CHAPTER_GEOGRAFI_2_2, CHAPTER_GEOGRAFI_2_3,
  CHAPTER_GEOGRAFI_2_4, CHAPTER_GEOGRAFI_2_5, CHAPTER_GEOGRAFI_2_6,
  CHAPTER_GEOGRAFI_2_7,
];
