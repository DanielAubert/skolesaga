/**
 * Tekstbok innhold for Naturfag VG1 DEL 3
 * Seksjon 5: Karbonforbindelser og organisk kjemi (5.1-5.6)
 * Seksjon 6: Miljø og bærekraft (6.1-6.5)
 *
 * Dekker LK20 kompetansemål for NAT01-04.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SEKSJON 5: Karbonforbindelser og organisk kjemi
// ============================================================================

export const CHAPTER_NAT_VG1_5_1: TextbookChapter = {
  id: 'nat-vg1-5-1',
  courseId: 'nat-vg1',
  chapterNumber: '5.1',
  title: 'Grunnleggende organisk kjemi',
  description: 'Lær hvorfor karbon er et spesielt grunnstoff og hva som kjennetegner organiske forbindelser.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser'],
  content: [
    {
      id: 'nat-vg1-5-1-intro',
      type: 'text',
      content: `## Hvorfor er karbon så spesielt?

**Karbon** (C) har atomnummer 6 og elektronkonfigurasjon 2, 4. De fire valenselektronene gjør karbon unikt i kjemien:

**Karbons spesielle egenskaper:**
- Kan danne **fire kovalente bindinger** (enkelt-, dobbelt- og trippelbindinger)
- Kan binde seg til seg selv og danne **lange kjeder**, **forgreinede kjeder** og **ringer**
- Kan binde seg til mange andre grunnstoffer (H, O, N, S, halogener m.fl.)

Resultatet er en enorm mangfold av karbonforbindelser — det finnes over **10 millioner kjente** organiske forbindelser, langt flere enn alle andre grunnstoffer til sammen.

**Karbonforbindelser finnes overalt:**
- I kroppen din (proteiner, DNA, fett, karbohydrater)
- I mat, klær, plast og legemidler
- I fossile brensler (olje, gass, kull)`,
    },
    {
      id: 'nat-vg1-5-1-def-1',
      type: 'definition',
      title: 'Organisk vs. uorganisk kjemi',
      content: `**Organisk kjemi:** Kjemien til karbonforbindelser der karbon er bundet til hydrogen og ofte også oksygen, nitrogen eller andre grunnstoffer. Organiske forbindelser har opprinnelig navn fordi de ble funnet i levende organismer.

**Eksempler på organiske forbindelser:**
- Metan (CH₄) – naturgass
- Etanol (C₂H₅OH) – alkohol
- Glukose (C₆H₁₂O₆) – druesukker
- Proteiner, fett, karbohydrater

**Uorganiske karbonforbindelser:** Enkle karbonforbindelser som regnes som uorganiske:
- CO₂ (karbondioksid)
- CO (karbonmonoksid)
- Karbonater (f.eks. CaCO₃)
- Cyanider (f.eks. HCN)

Grensen mellom organisk og uorganisk er ikke alltid skarp, men organiske forbindelser har typisk karbon-hydrogenbindinger og/eller karbon-karbonbindinger.`,
    },
    {
      id: 'nat-vg1-5-1-def-2',
      type: 'definition',
      title: 'Karbonkjeder og strukturformler',
      content: `**Strukturformel:** Viser hvordan atomene i et molekyl er bundet til hverandre.

**Ulike måter å skrive formler:**
- **Molekylformel:** Viser bare antall atomer (f.eks. C₂H₆)
- **Strukturformel:** Viser alle bindingene (f.eks. H₃C-CH₃)
- **Forkortet strukturformel:** Forenklet visning (f.eks. CH₃CH₃)

**Karbonkjeder:**
- Rettlinjede kjeder: C-C-C-C (butan)
- Forgreinede kjeder: Kjeder med sidegrener
- Ringstrukturer: Karbonatomer som danner ringer (f.eks. sykloheksan)

**Navnsetting (IUPAC):**
Prefiksene angir antall karbonatomer:
- 1C: met- | 2C: et- | 3C: prop- | 4C: but-
- 5C: pent- | 6C: heks- | 7C: hept- | 8C: okt-`,
    },
    {
      id: 'nat-vg1-5-1-def-3',
      type: 'definition',
      title: 'Isomeri',
      content: `**Isomerer:** Molekyler med samme molekylformel, men ulik struktur.

**Eksempel — C₄H₁₀ har to isomerer:**
- **Butan:** En rett kjede med 4 karbonatomer
- **2-metylpropan:** En forgreinet kjede med 3 karbonatomer i hovedkjeden og en metylgruppe

Jo flere karbonatomer et molekyl har, desto flere mulige isomerer finnes.

**Isomerer kan ha ulike egenskaper:**
- Ulikt kokepunkt
- Ulik tetthet
- Ulik reaktivitet`,
    },
    {
      id: 'nat-vg1-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Navnsetting av organiske forbindelser',
      problem: 'Et hydrokarbonmolekyl har molekylformelen C₃H₈. Hva heter forbindelsen, og hvor mange bindinger danner hvert karbonatom?',
      solution: `**Løsning:**

1. **Antall karbonatomer:** 3 → prefikset er «prop-»
2. **Bare enkeltbindinger:** Forholdet mellom C og H følger CₙH₂ₙ₊₂ → dette er et alkan
3. **Endelsen:** -an

**Navnet er propan.**

**Bindinger:**
- Hvert karbonatom danner 4 bindinger totalt
- De to ytterkarbonene er bundet til 3 hydrogen og 1 karbon
- Midtkarbonatomet er bundet til 2 hydrogen og 2 karbon`,
    },
    {
      id: 'nat-vg1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor karbon kan danne så mange forskjellige forbindelser. Nevn minst tre egenskaper ved karbon som gjør dette mulig.',
        solution: 'Karbon har 4 valenselektroner og kan derfor danne 4 kovalente bindinger. Det kan binde seg til seg selv og danne lange kjeder, forgreinede kjeder og ringstrukturer. Det kan danne enkelt-, dobbelt- og trippelbindinger. I tillegg kan karbon binde seg til mange andre grunnstoffer som hydrogen, oksygen, nitrogen og svovel. Alt dette gir et enormt mangfold av mulige molekylstrukturer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom organiske og uorganiske karbonforbindelser. Gi to eksempler på hver.',
        solution: 'Organiske karbonforbindelser inneholder karbon bundet til hydrogen og ofte andre grunnstoffer, og har typisk C-H-bindinger og/eller C-C-bindinger. Eksempler: metan (CH₄) og etanol (C₂H₅OH). Uorganiske karbonforbindelser er enklere forbindelser der karbon ofte er bundet til oksygen eller metaller. Eksempler: karbondioksid (CO₂) og kalsiumkarbonat (CaCO₃).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er isomerer? Forklar med et eksempel.',
        solution: 'Isomerer er molekyler som har samme molekylformel, men ulik strukturformel — atomene er bundet sammen på forskjellig måte. Eksempel: C₄H₁₀ kan være butan (rett kjede med 4 karbonatomer) eller 2-metylpropan (forgreinet med 3 karbonatomer i hovedkjeden og en metylgruppe). Selv om de har samme antall av hvert atom, har de forskjellige egenskaper som kokepunkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_5_2: TextbookChapter = {
  id: 'nat-vg1-5-2',
  courseId: 'nat-vg1',
  chapterNumber: '5.2',
  title: 'Hydrokarboner – alkaner, alkener og alkyner',
  description: 'Utforsk de viktigste gruppene av hydrokarboner: alkaner, alkener og alkyner.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser'],
  content: [
    {
      id: 'nat-vg1-5-2-intro',
      type: 'text',
      content: `## Hydrokarboner

**Hydrokarboner** er organiske forbindelser som bare inneholder karbon (C) og hydrogen (H). De deles inn i tre hovedgrupper basert på bindingstypen mellom karbonatomene:

| Gruppe | Binding | Generell formel | Endelse |
|--------|---------|-----------------|---------|
| Alkaner | Enkeltbinding (C-C) | CₙH₂ₙ₊₂ | -an |
| Alkener | Dobbeltbinding (C=C) | CₙH₂ₙ | -en |
| Alkyner | Trippelbinding (C≡C) | CₙH₂ₙ₋₂ | -yn |

**Mettede vs. umettede hydrokarboner:**
- **Mettede (alkaner):** Bare enkeltbindinger, alle bindingsplasser er «mettet» med hydrogen
- **Umettede (alkener og alkyner):** Inneholder dobbelt- eller trippelbindinger og kan ta opp flere hydrogen`,
    },
    {
      id: 'nat-vg1-5-2-def-1',
      type: 'definition',
      title: 'Alkaner – den homologe serien',
      content: `**Alkaner** er mettede hydrokarboner med generell formel CₙH₂ₙ₊₂.

**De første alkanene:**
| Navn | Formel | Kokepunkt | Tilstand (20°C) |
|------|--------|-----------|-----------------|
| Metan | CH₄ | -161°C | Gass |
| Etan | C₂H₆ | -89°C | Gass |
| Propan | C₃H₈ | -42°C | Gass |
| Butan | C₄H₁₀ | -1°C | Gass |
| Pentan | C₅H₁₂ | 36°C | Væske |
| Heksan | C₆H₁₄ | 69°C | Væske |
| Oktan | C₈H₁₈ | 126°C | Væske |

**Trend:** Kokepunktet øker med antall karbonatomer fordi van der Waals-kreftene blir sterkere med større molekyler.

**Homolog serie:** Alkanene utgjør en homolog serie der hvert påfølgende molekyl skiller seg med en CH₂-enhet.`,
    },
    {
      id: 'nat-vg1-5-2-def-2',
      type: 'definition',
      title: 'Alkener og cis/trans-isomeri',
      content: `**Alkener** er umettede hydrokarboner med minst én dobbeltbinding (C=C). Generell formel: CₙH₂ₙ.

**Eksempler:**
- Eten (etylen): CH₂=CH₂ — brukes til å lage plast (polyetylen)
- Propen: CH₃-CH=CH₂
- Buten: C₄H₈

**Cis/trans-isomeri:**
Dobbeltbindingen hindrer fri rotasjon. Når to grupper kan sitte på samme side eller motsatt side av dobbeltbindingen, får vi to isomerer:

- **cis-isomer:** Like grupper på samme side av dobbeltbindingen
- **trans-isomer:** Like grupper på motsatt side av dobbeltbindingen

Cis- og trans-isomerer har ulike fysiske egenskaper (kokepunkt, smeltepunkt).`,
    },
    {
      id: 'nat-vg1-5-2-def-3',
      type: 'definition',
      title: 'Alkyner',
      content: `**Alkyner** er umettede hydrokarboner med minst én trippelbinding (C≡C). Generell formel: CₙH₂ₙ₋₂.

**Eksempler:**
- Etyn (acetylen): HC≡CH — brukes i sveiseflammer
- Propyn: CH₃-C≡CH

**Egenskaper:**
- Trippelbindingen gjør alkyner svært reaktive
- Høy forbrenningstemperatur (derfor brukes acetylen til sveising)
- Lineær geometri rundt trippelbindingen

**Sammenligning av bindinger:**
| Type | Lengde | Styrke | Reaktivitet |
|------|--------|--------|-------------|
| C-C | 154 pm | 347 kJ/mol | Lav |
| C=C | 134 pm | 614 kJ/mol | Middels |
| C≡C | 120 pm | 839 kJ/mol | Høy |`,
    },
    {
      id: 'nat-vg1-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Bestemme type hydrokarbon',
      problem: 'Et hydrokarbon har molekylformelen C₄H₈. Avgjør om det er et alkan, alken eller alkyn, og navngi forbindelsen.',
      solution: `**Løsning:**

1. **Sjekk alkan-formelen:** CₙH₂ₙ₊₂ → C₄H₁₀ ≠ C₄H₈ → Ikke et alkan

2. **Sjekk alken-formelen:** CₙH₂ₙ → C₄H₈ ✓ → Det er et alken!

3. **Navnsetting:**
   - 4 karbonatomer → but-
   - Alken → -en
   - **Navnet er buten (but-1-en eller but-2-en avhengig av dobbeltbindingens plassering)**

4. **Buten finnes som flere isomerer:**
   - But-1-en: CH₂=CH-CH₂-CH₃
   - But-2-en: CH₃-CH=CH-CH₃ (finnes som cis og trans)
   - 2-metylpropen: CH₂=C(CH₃)-CH₃`,
    },
    {
      id: 'nat-vg1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom mettede og umettede hydrokarboner. Gi et eksempel på hvert.',
        solution: 'Mettede hydrokarboner (alkaner) har bare enkeltbindinger mellom karbonatomene, og alle bindingsplasser er fylt med hydrogen. Eksempel: etan (C₂H₆). Umettede hydrokarboner har minst én dobbeltbinding (alkener) eller trippelbinding (alkyner), og kan derfor ta opp flere hydrogenatomer. Eksempel: eten (C₂H₄) med en dobbeltbinding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor kokepunktet øker når karbonkjeden i alkaner blir lengre.',
        solution: 'Når karbonkjeden blir lengre, blir molekylet større og får større overflate. Dette fører til sterkere van der Waals-krefter (London-krefter) mellom molekylene. Sterkere intermolekylære krefter betyr at det kreves mer energi for å få molekylene til å gå over i gassfase, og dermed stiger kokepunktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Et hydrokarbon har molekylformelen C₃H₄. Er det et alkan, alken eller alkyn? Navngi forbindelsen og tegn strukturformelen.',
        solution: 'Sjekker formlene: Alkan CₙH₂ₙ₊₂ → C₃H₈ (nei). Alken CₙH₂ₙ → C₃H₆ (nei). Alkyn CₙH₂ₙ₋₂ → C₃H₄ (ja!). Det er et alkyn. Navnet er propyn. Strukturformel: CH₃-C≡CH (med en trippelbinding mellom karbon 2 og 3).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_5_3: TextbookChapter = {
  id: 'nat-vg1-5-3',
  courseId: 'nat-vg1',
  chapterNumber: '5.3',
  title: 'Funksjonelle grupper og deres egenskaper',
  description: 'Utforsk de viktigste funksjonelle gruppene i organisk kjemi og deres anvendelser.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser, gi eksempler på anvendelser'],
  content: [
    {
      id: 'nat-vg1-5-3-intro',
      type: 'text',
      content: `## Funksjonelle grupper

En **funksjonell gruppe** er en bestemt atomgruppe i et organisk molekyl som gir stoffet karakteristiske kjemiske egenskaper. Karbonkjeden danner «skjelettet», mens den funksjonelle gruppen bestemmer stoffets kjemiske oppførsel.

**De viktigste funksjonelle gruppene:**

| Funksjonell gruppe | Formel | Stoffklasse | Endelse |
|--------------------|--------|-------------|---------|
| Hydroksylgruppe | -OH | Alkoholer | -ol |
| Karboksylgruppe | -COOH | Karboksylsyrer | -syre |
| Estergruppe | -COO- | Estere | -oat |
| Aminogruppe | -NH₂ | Aminer | -amin |
| Aldehydgruppe | -CHO | Aldehyder | -al |
| Ketogruppe | -CO- | Ketoner | -on |`,
    },
    {
      id: 'nat-vg1-5-3-def-1',
      type: 'definition',
      title: 'Alkoholer (-OH)',
      content: `**Alkoholer** inneholder hydroksylgruppen (-OH) bundet til en karbonkjede.

**Navnsetting:** Endelsen -ol legges til stammnavnet.

**Vanlige alkoholer:**
- **Metanol** (CH₃OH): Giftig! Brukes som løsemiddel og drivstoff
- **Etanol** (C₂H₅OH): Drikkbar alkohol, desinfeksjon, drivstoff
- **Propan-1,2,3-triol** (glyserol): Brukes i kremer og matvarer

**Egenskaper:**
- Polar -OH-gruppe gjør korte alkoholer løselige i vann
- Hydrogenbindinger gir høyere kokepunkt enn alkaner med tilsvarende størrelse
- Kokepunktet øker med karbonkjedens lengde
- Lange alkoholer blir mindre løselige i vann (den upolare kjeden dominerer)`,
    },
    {
      id: 'nat-vg1-5-3-def-2',
      type: 'definition',
      title: 'Karboksylsyrer (-COOH) og estere (-COO-)',
      content: `**Karboksylsyrer** inneholder karboksylgruppen (-COOH).

**Eksempler:**
- **Metansyre** (maursyre, HCOOH): Finnes i maurstikk
- **Etansyre** (eddiksyre, CH₃COOH): Eddik inneholder ca. 5%
- **Sitronsyre:** Gir sitrusfrukt sur smak

**Egenskaper:** Svake syrer, smaker surt, reagerer med baser.

**Estere** dannes når en karboksylsyre reagerer med en alkohol (kondensasjonsreaksjon):
Karboksylsyre + alkohol → ester + vann

**Eksempler på estere:**
- **Etylacetat:** Løsemiddel i neglelakkfjerner
- **Fruktestere:** Gir frukt og bær deres karakteristiske aroma
  - Etylbutanoat lukter ananas
  - Pentylacetat lukter banan`,
    },
    {
      id: 'nat-vg1-5-3-def-3',
      type: 'definition',
      title: 'Aminer, aldehyder og ketoner',
      content: `**Aminer (-NH₂):**
- Inneholder aminogruppen (-NH₂)
- Byggesteiner i aminosyrer og proteiner
- Fiskelukt skyldes ofte aminer
- Eksempel: Metylamin (CH₃NH₂)

**Aldehyder (-CHO):**
- Karbonylgruppe (C=O) ytterst i kjeden
- Endelse: -al
- Eksempler: Metanal (formaldehyd) – brukes til konservering, etanal (acetaldehyd)
- Vaniljen inneholder vanillin, et aromatisk aldehyd

**Ketoner (-CO-):**
- Karbonylgruppe (C=O) inne i kjeden
- Endelse: -on
- Eksempel: Propanon (aceton) – brukes som løsemiddel (neglelakkfjerner)

**Aldehyder og ketoner** har lavere kokepunkt enn alkoholer med tilsvarende størrelse fordi de ikke kan danne hydrogenbindinger med seg selv.`,
    },
    {
      id: 'nat-vg1-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Identifisere funksjonelle grupper',
      problem: 'Identifiser den funksjonelle gruppen og stoffklassen for følgende molekyler: a) CH₃CH₂OH  b) CH₃COOH  c) CH₃COCH₃',
      solution: `**Løsning:**

a) **CH₃CH₂OH** (etanol)
   - Funksjonell gruppe: -OH (hydroksylgruppe)
   - Stoffklasse: Alkohol

b) **CH₃COOH** (eddiksyre / etansyre)
   - Funksjonell gruppe: -COOH (karboksylgruppe)
   - Stoffklasse: Karboksylsyre

c) **CH₃COCH₃** (propanon / aceton)
   - Funksjonell gruppe: C=O inne i kjeden (ketogruppe)
   - Stoffklasse: Keton`,
    },
    {
      id: 'nat-vg1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva en funksjonell gruppe er, og hvorfor den er viktig for stoffets egenskaper.',
        solution: 'En funksjonell gruppe er en bestemt atomgruppe i et organisk molekyl som bestemmer stoffets karakteristiske kjemiske egenskaper. Karbonkjeden er «skjelettet» i molekylet, men det er den funksjonelle gruppen som avgjør hvordan stoffet reagerer kjemisk, løselighet, kokepunkt og lukt/smak. For eksempel gir -OH-gruppen alkoholegenskaper, mens -COOH gir sure egenskaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor etanol (C₂H₅OH) har mye høyere kokepunkt enn etan (C₂H₆), selv om molekylene er omtrent like store.',
        solution: 'Etanol har en polar -OH-gruppe som kan danne hydrogenbindinger med andre etanolmolekyler. Hydrogenbindinger er mye sterkere enn van der Waals-kreftene som holder etanmolekylene sammen. Fordi det kreves mer energi for å bryte hydrogenbindingene, har etanol et mye høyere kokepunkt (78°C) enn etan (-89°C).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan organiske forbindelser med ulike funksjonelle grupper brukes i hverdagen.',
        solution: 'Eksempler: 1) Etanol (alkohol, -OH) brukes som desinfeksjonsmiddel og i alkoholholdige drikkevarer. 2) Eddiksyre (karboksylsyre, -COOH) brukes i matlaging og konservering. 3) Aceton (keton, C=O) brukes som løsemiddel, blant annet i neglelakkfjerner. Andre eksempler: estere gir frukt aroma, formaldehyd brukes til konservering, og aminer er byggesteiner i proteiner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_5_4: TextbookChapter = {
  id: 'nat-vg1-5-4',
  courseId: 'nat-vg1',
  chapterNumber: '5.4',
  title: 'Reaksjoner i organisk kjemi',
  description: 'Lær om de viktigste reaksjonstypene i organisk kjemi: forbrenning, addisjon, substitusjon og polymerisering.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser'],
  content: [
    {
      id: 'nat-vg1-5-4-intro',
      type: 'text',
      content: `## Reaksjoner i organisk kjemi

Organiske stoffer deltar i mange typer kjemiske reaksjoner. De viktigste reaksjonstypene er:

1. **Forbrenning** – reaksjon med oksygen
2. **Addisjonsreaksjoner** – atomer adderes over en dobbelt- eller trippelbinding
3. **Substitusjonsreaksjoner** – et atom eller en gruppe byttes ut med en annen
4. **Kondensasjonsreaksjoner** – to molekyler kobles sammen, og vann spaltes av
5. **Polymerisering** – mange små molekyler kobles til lange kjeder`,
    },
    {
      id: 'nat-vg1-5-4-def-1',
      type: 'definition',
      title: 'Forbrenning',
      content: `**Forbrenning** er reaksjon mellom et organisk stoff og oksygen (O₂).

**Fullstendig forbrenning:**
Tilstrekkelig oksygen → CO₂ + H₂O + energi

Eksempel: Metan
CH₄ + 2O₂ → CO₂ + 2H₂O

**Ufullstendig forbrenning:**
For lite oksygen → CO (giftig!) og/eller C (sot) + H₂O

Eksempel:
2CH₄ + 3O₂ → 2CO + 4H₂O (ufullstendig, CO dannes)

**Ufullstendig forbrenning er farlig:**
- CO (karbonmonoksid) er en luktfri, fargeløs og svært giftig gass
- Binder seg til hemoglobin 200× sterkere enn oksygen
- Kan oppstå i dårlig ventilerte rom med gasskaminer eller vedovner`,
    },
    {
      id: 'nat-vg1-5-4-def-2',
      type: 'definition',
      title: 'Addisjon og substitusjon',
      content: `**Addisjonsreaksjon:**
Atomer adderes over en dobbelt- eller trippelbinding, slik at den brytes opp.

Eksempel — Hydrogenering av eten:
CH₂=CH₂ + H₂ → CH₃-CH₃
(eten + hydrogen → etan)

Brukes i industrien til å gjøre umettede fettsyrer mettede (herding av fett).

**Substitusjonsreaksjon:**
Et atom eller en gruppe erstattes av en annen.

Eksempel — Klorering av metan:
CH₄ + Cl₂ → CH₃Cl + HCl
(et H-atom erstattes av et Cl-atom)

Alkaner reagerer med halogener ved substitusjon fordi de mangler dobbeltbindinger for addisjon.`,
    },
    {
      id: 'nat-vg1-5-4-def-3',
      type: 'definition',
      title: 'Kondensasjon og polymerisering',
      content: `**Kondensasjonsreaksjon:**
To molekyler kobles sammen, og et lite molekyl (vanligvis vann) spaltes av.

Eksempel — Esterdannelse:
CH₃COOH + CH₃OH → CH₃COOCH₃ + H₂O
(eddiksyre + metanol → metylacetat + vann)

**Polymerisering:**
Mange små molekyler (monomerer) kobles sammen til en lang kjede (polymer).

**Addisjonspolymerisering:**
- Monomerer med dobbeltbinding åpner opp og kobles
- Eksempel: n CH₂=CH₂ → (-CH₂-CH₂-)ₙ (polyetylen/plast)
- Produkter: polyetylen (PE), polypropylen (PP), PVC

**Kondensasjonspolymerisering:**
- Monomerer kobles sammen mens vann spaltes av
- Eksempel: Nylon, polyester
- Også naturlig: Proteiner (aminosyrer), DNA (nukleotider)`,
    },
    {
      id: 'nat-vg1-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Fullstendig forbrenning av propan',
      problem: 'Sett opp en balansert reaksjonsligning for fullstendig forbrenning av propan (C₃H₈).',
      solution: `**Løsning:**

1. **Skriv ubalansert ligning:**
   C₃H₈ + O₂ → CO₂ + H₂O

2. **Balanser karbon:** 3 C på venstre side → 3 CO₂
   C₃H₈ + O₂ → 3CO₂ + H₂O

3. **Balanser hydrogen:** 8 H på venstre side → 4 H₂O
   C₃H₈ + O₂ → 3CO₂ + 4H₂O

4. **Balanser oksygen:** Høyre side: 3×2 + 4×1 = 10 O-atomer → 5 O₂
   C₃H₈ + 5O₂ → 3CO₂ + 4H₂O

**Balansert ligning: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O**`,
    },
    {
      id: 'nat-vg1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom fullstendig og ufullstendig forbrenning. Hvorfor er ufullstendig forbrenning farlig?',
        solution: 'Ved fullstendig forbrenning er det nok oksygen til at alt karbon omdannes til CO₂ og alt hydrogen til H₂O. Ved ufullstendig forbrenning er det for lite oksygen, og det dannes CO (karbonmonoksid) og/eller sot (C) i tillegg. Ufullstendig forbrenning er farlig fordi CO er en luktfri, fargeløs gass som binder seg til hemoglobin i blodet 200 ganger sterkere enn oksygen, og dermed hindrer oksygentransport. CO-forgiftning kan føre til bevisstløshet og død.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er polymerisering? Forklar forskjellen mellom addisjonspolymerisering og kondensasjonspolymerisering, og gi et eksempel på hvert.',
        solution: 'Polymerisering er en prosess der mange små molekyler (monomerer) kobles sammen til en lang kjede (polymer). Ved addisjonspolymerisering åpnes dobbeltbindingene i monomerene og de kobles direkte sammen uten at noe annet produkt dannes. Eksempel: Eten polymeriseres til polyetylen (plast). Ved kondensasjonspolymerisering kobles monomerer sammen mens et lite molekyl (vanligvis vann) spaltes av i hvert trinn. Eksempel: Aminosyrer polymeriseres til proteiner, og vann frigjøres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sett opp en balansert reaksjonsligning for fullstendig forbrenning av butan (C₄H₁₀).',
        solution: 'C₄H₁₀ + O₂ → CO₂ + H₂O. Balanser karbon: 4 CO₂. Balanser hydrogen: 5 H₂O. Tell oksygen: 4×2 + 5×1 = 13 O-atomer, altså 13/2 O₂. Ganger med 2: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_5_5: TextbookChapter = {
  id: 'nat-vg1-5-5',
  courseId: 'nat-vg1',
  chapterNumber: '5.5',
  title: 'Uorganiske karbonforbindelser',
  description: 'Utforsk karbondioksid, karbonmonoksid, karbonater og andre uorganiske karbonforbindelser.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske egenskaper og reaksjoner til noen organiske og uorganiske karbonforbindelser'],
  content: [
    {
      id: 'nat-vg1-5-5-intro',
      type: 'text',
      content: `## Uorganiske karbonforbindelser

Selv om de fleste karbonforbindelser er organiske, finnes det en rekke viktige **uorganiske karbonforbindelser**. Disse mangler typisk karbon-hydrogenbindinger og har enklere struktur enn organiske molekyler.

**De viktigste uorganiske karbonforbindelsene:**
- Karbondioksid (CO₂)
- Karbonmonoksid (CO)
- Karbonater (CO₃²⁻)
- Hydrogenkarbonater (HCO₃⁻)
- Cyanider (CN⁻)

Disse forbindelsene spiller viktige roller i naturen, industrien og hverdagen.`,
    },
    {
      id: 'nat-vg1-5-5-def-1',
      type: 'definition',
      title: 'Karbondioksid (CO₂)',
      content: `**CO₂** er en fargeløs og luktfri gass som spiller en sentral rolle i naturen.

**Egenskaper:**
- Lineært molekyl med to dobbeltbindinger: O=C=O
- Tyngre enn luft (molvekt 44 g/mol)
- Løser seg i vann og danner karbonsyre: CO₂ + H₂O ⇌ H₂CO₃
- Sublimerer ved -78,5°C (tørris)

**Rolle i naturen:**
- **Fotosyntese:** Planter bruker CO₂ + H₂O → C₆H₁₂O₆ + O₂
- **Celleånding:** Organismer bryter ned glukose: C₆H₁₂O₆ + O₂ → CO₂ + H₂O
- **Drivhusgass:** Absorberer varmestråling og bidrar til drivhuseffekten

**Menneskelig påvirkning:**
CO₂-konsentrasjonen har økt fra 280 ppm (førindustriell tid) til over 420 ppm i dag, hovedsakelig fra forbrenning av fossile brensler.`,
    },
    {
      id: 'nat-vg1-5-5-def-2',
      type: 'definition',
      title: 'Karbonmonoksid (CO) og cyanider',
      content: `**Karbonmonoksid (CO):**
- Fargeløs, luktfri, svært giftig gass
- Dannes ved ufullstendig forbrenning
- Binder seg til hemoglobin 200× sterkere enn O₂
- Vanlig årsak til forgiftningsdødsfall
- Brukes industrielt i produksjon av metanol og som reduksjonsmiddel

**Forebygging av CO-forgiftning:**
- God ventilasjon ved bruk av gass/ved
- CO-varsler i bolig
- Regelmessig vedlikehold av ildsteder og piper

**Cyanider (CN⁻):**
- Hydrogencyanid (HCN) er ekstremt giftig
- Blokkerer cellenes evne til å bruke oksygen
- Finnes i små mengder i bittermandelkjerner og kassava
- Brukes industrielt i gullutvinning og plastproduksjon`,
    },
    {
      id: 'nat-vg1-5-5-def-3',
      type: 'definition',
      title: 'Karbonater (CO₃²⁻)',
      content: `**Karbonater** er salter der karbonationet CO₃²⁻ er bundet til et metallion.

**Viktige karbonater:**
- **Kalsiumkarbonat (CaCO₃):** Kalkstein, marmor, koraller, eggeskall
- **Natriumkarbonat (Na₂CO₃):** Soda, brukes i vaskemidler
- **Natriumhydrogenkarbonat (NaHCO₃):** Natron, brukes i baking

**Reaksjon med syre:**
Karbonater reagerer med syre og frigir CO₂-gass:
CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑
(brusen er CO₂-gass)

**Sur nedbør og karbonater:**
- Sur nedbør (H₂SO₄, HNO₃) løser opp kalkstein og marmor
- Forvitring av bygninger og statuer
- Forsuring av innsjøer påvirker livet i vannet
- Kalking av innsjøer brukes som mottiltak`,
    },
    {
      id: 'nat-vg1-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom CO₂ og CO. Hvorfor er CO farligere å puste inn enn CO₂?',
        solution: 'CO₂ (karbondioksid) er en naturlig del av atmosfæren og er ikke giftig i lave konsentrasjoner. CO (karbonmonoksid) er derimot svært giftig. CO binder seg til hemoglobin i blodet ca. 200 ganger sterkere enn oksygen, og blokkerer dermed blodets evne til å transportere oksygen til cellene. CO er også fargeløs og luktfri, så man merker ikke at man puster den inn. CO₂ i høye konsentrasjoner kan også være farlig, men kroppen registrerer dette lettere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Når kalsiumkarbonat (CaCO₃) reagerer med saltsyre (HCl), observerer vi at det bobler. Forklar hva som skjer kjemisk og skriv reaksjonsligningen.',
        solution: 'Kalsiumkarbonat reagerer med saltsyre i en syrebasereaksjon: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Boblingen skyldes at CO₂-gass dannes og frigjøres fra løsningen. Denne reaksjonen kan brukes til å teste om en bergart inneholder kalkstein — drypper man syre på den og det bobler, inneholder den karbonat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvordan CO₂ fungerer som drivhusgass. Hvorfor er økt CO₂-konsentrasjon et problem?',
        solution: 'CO₂ absorberer langbølget varmestråling (infrarød stråling) som jorden sender ut, og sender noe av den tilbake mot jordoverflaten. Dette er en del av den naturlige drivhuseffekten som gjør jorden beboelig. Problemet er at menneskelig aktivitet (fossile brensler, avskoging) har økt CO₂-konsentrasjonen fra 280 ppm til over 420 ppm. Mer CO₂ betyr at mer varmestråling fanges opp, noe som fører til global oppvarming med konsekvenser som stigende havnivå, mer ekstremvær og tap av biologisk mangfold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_5_6: TextbookChapter = {
  id: 'nat-vg1-5-6',
  courseId: 'nat-vg1',
  chapterNumber: '5.6',
  title: 'Karbonets kretsløp og betydning for livet',
  description: 'Forstå karbonets kretsløp i naturen og karbonets fundamentale rolle for alt liv.',
  estimatedMinutes: 50,
  competenceGoals: ['gjøre rede for karbonets betydning for livet'],
  content: [
    {
      id: 'nat-vg1-5-6-intro',
      type: 'text',
      content: `## Karbonets kretsløp

Karbon sirkulerer konstant mellom atmosfæren, havet, levende organismer og jordskorpen i det vi kaller **karbonets kretsløp**. Kretsløpet drives av biologiske, kjemiske og geologiske prosesser.

**Hovedprosessene:**
- **Fotosyntese:** Planter tar opp CO₂ fra lufta og bygger det inn i organiske molekyler
  6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
- **Celleånding:** Organismer bryter ned organisk materiale og frigjør CO₂
  C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O
- **Forbrenning:** Fossil energi og biomasse frigjør CO₂
- **Havopptak:** Havet løser store mengder CO₂
- **Nedbrytning:** Bakterier og sopp bryter ned dødt materiale og frigjør CO₂`,
    },
    {
      id: 'nat-vg1-5-6-def-1',
      type: 'definition',
      title: 'Korttids- og langtidslagring av karbon',
      content: `**Korttidslagring (år til tiår):**
- I levende organismer (biomasse)
- I atmosfæren (som CO₂ og CH₄)
- I jord (humus og organisk materiale)
- I havet (oppløst CO₂)

**Langtidslagring (millioner av år):**
- **Fossile brensler:** Olje, kull og naturgass er rester av organismer som ble begravet og omdannet over millioner av år
- **Kalkstein:** CaCO₃ dannet fra skjell og skjeletter av marine organismer
- **Permafrost:** Frosset jord med store mengder organisk karbon

**Karbonreservoarer (milliard tonn C):**
- Atmosfæren: ~870
- Havet: ~38 000
- Fossile brensler: ~4 000
- Vegetasjon: ~450
- Jord: ~2 500`,
    },
    {
      id: 'nat-vg1-5-6-def-2',
      type: 'definition',
      title: 'Menneskelig påvirkning av karbonkretsløpet',
      content: `Mennesker forstyrrer det naturlige karbonkretsløpet på flere måter:

**Fossile brensler:**
- Vi flytter karbon fra langtidslagre (olje, kull, gass) til atmosfæren
- Ca. 36 milliarder tonn CO₂ frigjøres årlig fra fossile brensler
- Naturlige prosesser kan ikke ta opp alt dette raskt nok

**Avskoging:**
- Skog lagrer store mengder karbon
- Hogst og brenning frigjør lagret karbon
- Fjerner også fremtidig opptakskapasitet

**Tilbakekoblingsmekanismer:**
- **Permafrost-tining:** Oppvarming tiner permafrost → frigjør metan og CO₂ → mer oppvarming
- **Havforsuring:** Mer CO₂ i havet gjør det surere → påvirker koraller og skalldyr
- **Redusert havopptak:** Varmere hav tar opp mindre CO₂`,
    },
    {
      id: 'nat-vg1-5-6-def-3',
      type: 'definition',
      title: 'Karbonets betydning for livet',
      content: `Karbon er det viktigste grunnstoffet for liv på jorden.

**Biologiske makromolekyler — alle er karbonbaserte:**
- **Karbohydrater:** Energikilde (glukose, stivelse, cellulose)
- **Lipider (fett):** Energilagring, cellemembraner
- **Proteiner:** Enzymer, strukturer, transport
- **Nukleinsyrer:** DNA og RNA — bærer genetisk informasjon

**Hvorfor karbon er ideelt for liv:**
- 4 bindinger gir mulighet for komplekse strukturer
- Kan danne stabile kjeder og ringer
- C-C-bindinger er sterke nok til å holde, men ikke for sterke til å brytes ved behov
- Karbonforbindelser fungerer i vannløsninger ved moderate temperaturer

**Ingen kjent livsform er uavhengig av karbon.** Alt liv på jorda er karbonbasert.`,
    },
    {
      id: 'nat-vg1-5-6-example-1',
      type: 'example',
      title: 'Eksempel: Karbon i en næringskjede',
      problem: 'Følg et karbonatom gjennom en næringskjede fra atmosfæren og tilbake igjen.',
      solution: `**Et karbonatoms reise:**

1. **Atmosfæren:** Et CO₂-molekyl i lufta
2. **Fotosyntese:** En gressplante tar opp CO₂ og bygger det inn i et glukosemolekyl
3. **Spist av kanin:** Kaninen spiser gresset. Glukosen brytes delvis ned i celleåndingen, men noe karbon bygges inn i kaninens proteiner og fett
4. **Spist av rev:** Reven spiser kaninen og bygger inn karbon i sine egne molekyler
5. **Celleånding:** Når reven bruker energi, frigjøres karbon som CO₂ tilbake til atmosfæren
6. **Alternativ:** Hvis reven dør, bryter nedbrytere ned kroppen, og karbonet frigjøres som CO₂

**Sirkelen er sluttet:** Karbon resirkuleres kontinuerlig, men skifter form mellom organiske og uorganiske forbindelser.`,
    },
    {
      id: 'nat-vg1-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan fotosyntese og celleånding sammen utgjør en viktig del av karbonets kretsløp.',
        solution: 'Fotosyntesen tar opp CO₂ fra atmosfæren og bygger det inn i organiske molekyler (glukose) ved hjelp av solenergi: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Celleåndingen gjør det motsatte — den bryter ned organiske molekyler og frigir CO₂ tilbake til atmosfæren: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. Sammen sørger disse prosessene for at karbon sirkulerer mellom atmosfæren og levende organismer. I et naturlig system er det balanse mellom opptak og frigjøring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor forbrenning av fossile brensler forstyrrer karbonets kretsløp.',
        solution: 'Fossile brensler (kull, olje, gass) inneholder karbon som har vært lagret i jordskorpen i millioner av år. Når vi brenner dem, frigjør vi dette karbonet som CO₂ på kort tid. Naturen brukte millioner av år på å lagre dette karbonet, men vi frigjør det på hundre år. De naturlige prosessene (fotosyntese, havopptak) klarer ikke å ta opp alt det ekstra CO₂-et raskt nok, og konsentrasjonen i atmosfæren øker. Dette forsterker drivhuseffekten og fører til global oppvarming.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor karbon er helt nødvendig for alt liv på jorden. Nevn minst fire biologiske makromolekyler som inneholder karbon.',
        solution: 'Karbon er nødvendig for alt liv fordi alle biologiske makromolekyler er karbonbaserte. De fire typene er: 1) Karbohydrater (glukose, stivelse) — energikilder. 2) Lipider/fett — energilagring og cellemembraner. 3) Proteiner — enzymer, strukturmolekyler, antistoffer. 4) Nukleinsyrer (DNA og RNA) — lagrer og overfører genetisk informasjon. Karbons evne til å danne fire stabile bindinger, lange kjeder og ringstrukturer gjør det mulig å bygge de komplekse molekylene som livet krever.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SEKSJON 6: Miljø og bærekraft
// ============================================================================

export const CHAPTER_NAT_VG1_6_1: TextbookChapter = {
  id: 'nat-vg1-6-1',
  courseId: 'nat-vg1',
  chapterNumber: '6.1',
  title: 'Økosystemer og næringskjeder',
  description: 'Lær om økosystemer, næringskjeder og energistrøm.',
  estimatedMinutes: 50,
  competenceGoals: ['gjøre rede for hvordan noen miljøgifter kan akkumuleres i næringskjeder'],
  content: [
    {
      id: 'nat-vg1-6-1-intro',
      type: 'text',
      content: `## Hva er et økosystem?

Et **økosystem** er et avgrenset område der levende organismer (biotiske faktorer) samspiller med hverandre og med de ikke-levende omgivelsene (abiotiske faktorer).

**Biotiske faktorer:**
- Planter, dyr, sopp, bakterier
- Konkurranse, predasjon, symbiose

**Abiotiske faktorer:**
- Temperatur, lys, vann
- Jordsmonn, pH, næringsstoffer

Eksempler på økosystemer: skog, innsjø, korallrev, eng, fjæresone.`,
    },
    {
      id: 'nat-vg1-6-1-def-1',
      type: 'definition',
      title: 'Roller i økosystemet',
      content: `**Produsenter:** Organismer som lager sin egen mat gjennom fotosyntese (planter, alger, noen bakterier)

**Konsumenter:** Organismer som spiser andre organismer
- Primærkonsumenter (planteetere)
- Sekundærkonsumenter (rovdyr som spiser planteetere)
- Tertiærkonsumenter (topprovdyr)

**Nedbrytere:** Sopp og bakterier som bryter ned dødt organisk materiale og frigjør næringsstoffer`,
    },
    {
      id: 'nat-vg1-6-1-def-2',
      type: 'definition',
      title: 'Næringskjeder og næringsnett',
      content: `**Næringskjede:** En lineær fremstilling av hvem som spiser hvem
Eksempel: Gress → Gresshoppe → Frosk → Slange → Hauk

**Næringsnett:** Sammenfletning av flere næringskjeder som viser det komplekse spisemønsteret i et økosystem

**Trofisk nivå:** Posisjon i næringskjeden
- 1. nivå: Produsenter
- 2. nivå: Primærkonsumenter
- 3. nivå: Sekundærkonsumenter
- osv.`,
    },
    {
      id: 'nat-vg1-6-1-def-3',
      type: 'definition',
      title: 'Energistrøm i økosystemet',
      content: `**Solenergi** fanges opp av produsenter gjennom fotosyntese.

**10%-regelen:** Bare ca. 10% av energien på ett trofisk nivå overføres til neste nivå.

Resten tapes som varme gjennom celleånding.

**Konsekvens:** Det blir stadig mindre energi oppover i næringskjeden, derfor er det færre topprovdyr enn planteetere.`,
    },
    {
      id: 'nat-vg1-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Energitap i en næringskjede',
      problem: 'En eng mottar 10 000 kJ solenergi. Beregn energien tilgjengelig for gresshopper og frosker hvis 10% overføres per ledd.',
      solution: `**Løsning:**
- Solenergi: 10 000 kJ
- Planter (produsenter): 10 000 × 0,10 = 1000 kJ (lagret i plantemateriale)
- Gresshopper (primærkonsumenter): 1000 × 0,10 = 100 kJ
- Frosker (sekundærkonsumenter): 100 × 0,10 = 10 kJ

**Svar:** Gresshoppene har tilgang til 100 kJ, og froskene har tilgang til bare 10 kJ.

Dette forklarer hvorfor det er mange flere planter enn planteetere, og enda færre rovdyr.`,
    },
    {
      id: 'nat-vg1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom en næringskjede og et næringsnett.',
        solution: 'En næringskjede viser en lineær forbindelse mellom organismer i rekkefølgen hvem som spiser hvem. Et næringsnett er sammenfletningen av mange næringskjeder og viser det komplekse spisemønsteret i et økosystem, der mange arter spiser flere typer byttedyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'I en innsjø finnes planteplankton, dyreplankton, småfisk og gjedde. Sett opp en næringskjede og identifiser det trofiske nivået for hver organisme.',
        solution: 'Næringskjede: Planteplankton (produsent, 1. nivå) → Dyreplankton (primærkonsument, 2. nivå) → Småfisk (sekundærkonsument, 3. nivå) → Gjedde (tertiærkonsument, 4. nivå)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor det ikke kan være veldig lange næringskjeder i naturen.',
        solution: 'På grunn av 10%-regelen går ca. 90% av energien tapt som varme for hvert ledd i næringskjeden. Etter 4-5 ledd er det så lite energi igjen at det ikke er nok til å opprettholde en levedyktig populasjon av topprovdyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_6_2: TextbookChapter = {
  id: 'nat-vg1-6-2',
  courseId: 'nat-vg1',
  chapterNumber: '6.2',
  title: 'Miljøgifter og bioakkumulering',
  description: 'Forstå hvordan miljøgifter akkumuleres i næringskjeder og påvirker økosystemer.',
  estimatedMinutes: 55,
  competenceGoals: ['gjøre rede for hvordan noen miljøgifter kan akkumuleres i næringskjeder, og vurdere tiltak for å ta vare på helse og miljø'],
  content: [
    {
      id: 'nat-vg1-6-2-intro',
      type: 'text',
      content: `## Hva er miljøgifter?

**Miljøgifter** er stoffer som er skadelige for levende organismer selv i lave konsentrasjoner. De har ofte følgende egenskaper:

**Kjennetegn på miljøgifter:**
- **Persistente:** Brytes ikke lett ned i naturen
- **Bioakkumulerende:** Hopes opp i organismer
- **Giftige:** Skadelige for levende organismer

**Eksempler på miljøgifter:**
- Tungmetaller (kvikksølv, bly, kadmium)
- PCB (polyklorerte bifenyler)
- DDT (insektmiddel)
- Dioksiner
- PFAS (per- og polyfluorerte stoffer)`,
    },
    {
      id: 'nat-vg1-6-2-def-1',
      type: 'definition',
      title: 'Bioakkumulering',
      content: `**Bioakkumulering:** En organisme tar opp et stoff raskere enn den kan kvitte seg med det. Stoffet hoper seg derfor opp i kroppen over tid.

**Eksempel - kvikksølv i fisk:**
En fisk tar opp kvikksølv fra vannet gjennom gjellene og maten. Fordi kvikksølv er fettløselig og vanskelig å skille ut, øker konsentrasjonen gjennom hele fiskens liv.

Eldre og større fisk har høyere konsentrasjoner enn yngre fisk.`,
    },
    {
      id: 'nat-vg1-6-2-def-2',
      type: 'definition',
      title: 'Biomagnifisering',
      content: `**Biomagnifisering:** Konsentrasjonen av et stoff øker for hvert ledd i næringskjeden.

**Mekanisme:**
1. Produsenter tar opp lave konsentrasjoner fra miljøet
2. Primærkonsumenter spiser mange produsenter → høyere konsentrasjon
3. Sekundærkonsumenter spiser mange primærkonsumenter → enda høyere
4. Topprovdyr får de høyeste konsentrasjonene

**Eksempel - DDT:**
Vann: 0,000003 ppm → Plankton: 0,04 ppm → Småfisk: 0,5 ppm → Stor fisk: 2 ppm → Fiskeørn: 25 ppm

Konsentrasjonen øker ca. 10 millioner ganger fra vann til topprovdyr!`,
    },
    {
      id: 'nat-vg1-6-2-def-3',
      type: 'definition',
      title: 'Helseeffekter av miljøgifter',
      content: `**Kvikksølv:**
- Nerveskader
- Fosterskader
- Konsentrasjonsproblemer

**PCB:**
- Hormonforstyrrelser
- Immunsvekkelse
- Kreftfremkallende

**DDT:**
- Hormonforstyrrelser hos dyr
- Tynnere eggeskall hos fugler
- Mulig kreftfremkallende

**Bly:**
- Nerveskader, spesielt hos barn
- Nedsatt IQ
- Nyreproblemer`,
    },
    {
      id: 'nat-vg1-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Kvikksølv i Arktis',
      problem: 'Forklar hvorfor isbjørn i Arktis har høye nivåer av kvikksølv selv om Arktis er langt fra forurensningskilder.',
      solution: `**Forklaring:**

1. **Langtransport:** Kvikksølv frigjøres fra kullforbrenning og industri i sørligere områder. Det transporteres med luftstrømmer til Arktis.

2. **Biomagnifisering i næringskjeden:**
   - Alger tar opp kvikksølv fra havet
   - Dyreplankton spiser alger
   - Fisk spiser dyreplankton
   - Sel spiser fisk
   - Isbjørn spiser sel

3. **Topprovdyr:** Isbjørn er på toppen av næringskjeden og akkumulerer kvikksølv fra alle byttedyrene over lang tid.

4. **Fettløselig:** Kvikksølv lagres i fettvev, og arktiske dyr har mye fett for å holde varmen.`,
    },
    {
      id: 'nat-vg1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom bioakkumulering og biomagnifisering.',
        solution: 'Bioakkumulering er når et stoff hoper seg opp inne i én organisme over tid fordi den tar opp stoffet raskere enn den kan kvitte seg med det. Biomagnifisering er når konsentrasjonen av stoffet øker for hvert ledd oppover i næringskjeden, slik at topprovdyr får høyest konsentrasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'DDT ble mye brukt som insektmiddel på 1950-60-tallet. Det førte til at bestanden av rovfugler som fiskeørn og havørn gikk kraftig tilbake. Forklar sammenhengen.',
        solution: 'DDT ble biomagnifisert i næringskjeden. Rovfuglene på toppen fikk svært høye konsentrasjoner. DDT forstyrret kalsiumstoffskiftet hos fuglene, slik at eggeskallene ble for tynne og knuste før ungene var ferdig utviklet. Dette førte til dramatisk redusert ungeproduksjon og bestandsnedgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre tiltak som kan redusere problemet med miljøgifter.',
        solution: 'Mulige tiltak: 1) Forbud mot bruk og produksjon av de farligste stoffene (som DDT-forbudet). 2) Rensing av industriutslipp. 3) Sikker håndtering og destruksjon av avfall som inneholder miljøgifter. 4) Internasjonale avtaler (Stockholmkonvensjonen). 5) Redusere forbruk av produkter som inneholder miljøgifter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_6_3: TextbookChapter = {
  id: 'nat-vg1-6-3',
  courseId: 'nat-vg1',
  chapterNumber: '6.3',
  title: 'Tiltak for miljø og helse',
  description: 'Vurder tiltak for å beskytte helse og miljø mot forurensning.',
  estimatedMinutes: 45,
  competenceGoals: ['vurdere tiltak for å ta vare på helse og miljø'],
  content: [
    {
      id: 'nat-vg1-6-3-intro',
      type: 'text',
      content: `## Hvordan kan vi beskytte miljøet?

Miljøproblemer løses best gjennom en kombinasjon av tiltak på ulike nivåer:

**Internasjonalt nivå:**
- Internasjonale avtaler (Parisavtalen, Montrealprotokollen)
- FNs bærekraftsmål
- EU-regelverk

**Nasjonalt nivå:**
- Lover og forskrifter
- Avgifter og insentiver
- Miljøovervåking

**Lokalt nivå:**
- Avfallshåndtering
- Naturvern
- Arealplanlegging

**Individuelt nivå:**
- Forbruksvalg
- Transport
- Energibruk`,
    },
    {
      id: 'nat-vg1-6-3-def-1',
      type: 'definition',
      title: 'Klimatiltak',
      content: `**Redusere utslipp:**
- Overgang til fornybar energi (sol, vind, vann)
- Elektrifisering av transport
- Energieffektivisering i bygg og industri
- Redusert forbruk

**Fange og lagre CO₂:**
- Karbonfangst fra industri
- Lagring under havbunnen
- Skogplanting (biologisk opptak)

**Tilpasning:**
- Flomsikring
- Klimatilpasset bygging
- Endret arealbruk`,
    },
    {
      id: 'nat-vg1-6-3-def-2',
      type: 'definition',
      title: 'Sirkulær økonomi',
      content: `**Lineær økonomi (gammel modell):**
Ta ut råvarer → Produser → Bruk → Kast

**Sirkulær økonomi (ny modell):**
Råvarer → Produser → Bruk → Reparer/Gjenbruk → Resirkuler → tilbake til produksjon

**Avfallshierarkiet:**
1. Forebygge (redusere forbruk)
2. Ombruk (bruke på nytt)
3. Materialgjenvinning (resirkulering)
4. Energigjenvinning (forbrenning)
5. Deponi (siste utvei)`,
    },
    {
      id: 'nat-vg1-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Montrealprotokollen - en suksesshistorie',
      problem: 'Forklar hvordan Montrealprotokollen har bidratt til å løse ozonproblemet.',
      solution: `**Bakgrunn:**
På 1980-tallet oppdaget forskere at ozonlaget ble tynnere, spesielt over Antarktis. KFK-gasser (klorfluorkarboner) fra kjøleskap, spraybokser og isolasjonsmaterialer brøt ned ozon.

**Montrealprotokollen (1987):**
- Internasjonal avtale om å fase ut ozonreduserende stoffer
- Nesten alle verdens land har sluttet seg til
- KFK-gasser ble forbudt og erstattet med mindre skadelige alternativer

**Resultat:**
- Utslippene av ozonreduserende stoffer er redusert med over 99%
- Ozonlaget viser tegn til helbredelse
- Forventet full gjenoppretting rundt 2066

**Lærdommer for klimaarbeidet:**
- Internasjonalt samarbeid virker
- Vitenskap må ligge til grunn
- Erstatningsteknologi må være tilgjengelig`,
    },
    {
      id: 'nat-vg1-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gi eksempler på miljøtiltak du kan gjøre i hverdagen, og vurder effekten av dem.',
        solution: 'Eksempler: 1) Spise mindre kjøtt (stor effekt, kjøttproduksjon har høye klimagassutslipp). 2) Sykle/gå i stedet for bil (moderat effekt på utslipp, stor på lokalt miljø). 3) Kildesortere (moderat effekt, avhenger av gjenvinningssystemet). 4) Kjøpe brukt (stor effekt, reduserer produksjon av nye varer). 5) Spare strøm (liten effekt i Norge der strømmen er ren, større i land med fossil kraftproduksjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom klimatiltak og klimatilpasning, og gi eksempler på begge.',
        solution: 'Klimatiltak (mitigering) handler om å redusere utslipp av klimagasser for å begrense oppvarmingen (eks: overgang til elbil, vindkraft, energieffektivisering). Klimatilpasning handler om å tilpasse samfunnet til de klimaendringene som allerede skjer (eks: bygge flomvoller, flytte bebyggelse vekk fra flomutsatte områder, tilpasse landbruket til nye vekstsesonger).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper med karbonavgifter som klimatiltak.',
        solution: 'Fordeler: Gir økonomisk insentiv til å redusere utslipp, inntektene kan brukes til grønn omstilling, markedsbasert løsning som ikke krever detaljregulering. Ulemper: Kan ramme lavinntektsgrupper uforholdsmessig hardt, kan føre til karbonlekkasje (at produksjon flyttes til land uten avgift), kan møte politisk motstand, vanskelig å sette riktig prisnivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_6_4: TextbookChapter = {
  id: 'nat-vg1-6-4',
  courseId: 'nat-vg1',
  chapterNumber: '6.4',
  title: 'Klimaendringer og drivhuseffekten',
  description: 'Lær om drivhuseffekten, klimaendringer og konsekvenser.',
  estimatedMinutes: 55,
  competenceGoals: ['gjøre rede for hvordan klimaendringer påvirker evolusjon, utbredelse av arter og biologisk mangfold'],
  content: [
    {
      id: 'nat-vg1-6-4-intro',
      type: 'text',
      content: `## Drivhuseffekten

**Drivhuseffekten** er en naturlig prosess som holder jorden varm nok for liv.

**Hvordan virker den?**
1. Sollys (kortbølget stråling) passerer gjennom atmosfæren
2. Jordens overflate varmes opp og sender ut varmestråling (langbølget infrarød stråling)
3. Drivhusgasser absorberer noe av denne strålingen og sender den tilbake til jorda
4. Jorden blir varmere enn den ville vært uten drivhusgasser

**Uten drivhuseffekt:** Gjennomsnittlig jordtemperatur ville vært ca. -18°C
**Med naturlig drivhuseffekt:** Ca. +15°C`,
    },
    {
      id: 'nat-vg1-6-4-def-1',
      type: 'definition',
      title: 'Viktige drivhusgasser',
      content: `**Vanndamp (H₂O):** Den viktigste naturlige drivhusgassen

**Karbondioksid (CO₂):** Frigjøres ved forbrenning av fossilt brensel, avskoging. Hovedårsak til menneskeskapt oppvarming.

**Metan (CH₄):** Fra husdyr, rismarker, søppelfyllinger. Ca. 28× sterkere enn CO₂ over 100 år.

**Lystgass (N₂O):** Fra landbruk, gjødsel. Ca. 265× sterkere enn CO₂.

**Fluorholdige gasser:** Industrigasser, svært potente men lavere konsentrasjoner.`,
    },
    {
      id: 'nat-vg1-6-4-def-2',
      type: 'definition',
      title: 'Forsterket drivhuseffekt',
      content: `**Menneskelige aktiviteter** har økt konsentrasjonen av drivhusgasser:

- CO₂: Fra 280 ppm (førindustriell) til over 420 ppm i dag
- Metan: Mer enn fordoblet siden 1750
- Lystgass: Økt ca. 20%

**Konsekvens:** Mer av jordens varmestråling fanges opp → global oppvarming

Global gjennomsnittstemperatur har økt ca. 1,1°C siden førindustriell tid.`,
    },
    {
      id: 'nat-vg1-6-4-def-3',
      type: 'definition',
      title: 'Konsekvenser av klimaendringer',
      content: `**Fysiske endringer:**
- Høyere temperaturer
- Smelting av isbreer og polaris
- Stigende havnivå
- Mer ekstremvær (hetebølger, flom, tørke)
- Endret nedbørsmønster

**Biologiske konsekvenser:**
- Arter flytter nordover/oppover i fjellet
- Endret tidspunkt for blomstring, trekk, formering
- Korallbleking
- Utryddelse av arter som ikke kan tilpasse seg
- Endrede økosystemer`,
    },
    {
      id: 'nat-vg1-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Isbjørnen og klimaendringer',
      problem: 'Forklar hvordan klimaendringer truer isbjørnen.',
      solution: `**Isbjørnens situasjon:**

1. **Avhengig av havis:** Isbjørner jakter sel fra isflak. De venter ved pustehull eller ved iskanten.

2. **Isen forsvinner:** Arktisk havis har krympet dramatisk. Sommeren 2012 var arealet halvert sammenlignet med 1979.

3. **Lengre svømmetur:** Når isen smelter, må isbjørnene svømme lenger for å finne mat. Dette er energikrevende og farlig, spesielt for unger.

4. **Kortere jaktsesong:** Isen legger seg senere om høsten og forsvinner tidligere om våren. Mindre tid til å jakte og bygge opp fettreserver.

5. **Resultat:** Tynnere bjørner, lavere ungeproduksjon, økt dødelighet. Arten er klassifisert som sårbar.`,
    },
    {
      id: 'nat-vg1-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar med egne ord hvordan drivhuseffekten virker.',
        solution: 'Sola sender ut kortbølget stråling som passerer gjennom atmosfæren og varmer opp jordoverflaten. Jorden sender ut langbølget varmestråling, men drivhusgasser i atmosfæren absorberer deler av denne strålingen og sender den tilbake mot jorda. Dermed blir jorden varmere enn den ellers ville vært.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre konsekvenser klimaendringer kan ha for biologisk mangfold i Norge.',
        solution: 'Mulige svar: 1) Arter som villrein og fjellrev kan miste leveområder når skoggrensen kryper oppover. 2) Sørlige arter som hjort og villsvin sprer seg nordover. 3) Fremmede arter som harlekinmarihøne kan etablere seg og utkonkurrere norske arter. 4) Ørret kan tape konkurransen mot karpe i varmere vann. 5) Laks kan få problemer med for varmt vann i elvene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'CO₂-konsentrasjonen i atmosfæren har økt fra 280 ppm til 420 ppm. Beregn den prosentvise økningen.',
        solution: 'Økning = 420 - 280 = 140 ppm. Prosentvis økning = (140/280) × 100% = 50%. CO₂-konsentrasjonen har økt med 50% siden førindustriell tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_6_5: TextbookChapter = {
  id: 'nat-vg1-6-5',
  courseId: 'nat-vg1',
  chapterNumber: '6.5',
  title: 'Klimaendringer, artsmangfold og evolusjon',
  description: 'Forstå hvordan klimaendringer påvirker artsmangfold, artsutbredelse og evolusjonære prosesser.',
  estimatedMinutes: 50,
  competenceGoals: ['gjøre rede for hvordan klimaendringer påvirker evolusjon, utbredelse av arter og biologisk mangfold'],
  content: [
    {
      id: 'nat-vg1-6-5-intro',
      type: 'text',
      content: `## Klimaendringer og biologisk mangfold

Klimaendringene skjer raskere enn noen gang i jordas historie, og dette har store konsekvenser for livet på planeten.

**Arter kan reagere på klimaendringer på tre måter:**
1. **Tilpasse seg** (evolusjon/akklimering)
2. **Flytte seg** (migrasjon til nye områder)
3. **Dø ut** (hvis de ikke klarer å tilpasse seg eller flytte)

**Problemet:** Dagens klimaendringer skjer så raskt at mange arter ikke rekker å tilpasse seg gjennom evolusjon. Naturlig tilpasning krever mange generasjoner, men klimaet endrer seg i løpet av tiår.

**Den sjette masseutryddelsen:**
Forskere advarer om at vi er inne i den sjette store masseutryddelsen i jordas historie. Denne gangen er det menneskelig aktivitet — inkludert klimaendringer, habitatødeleggelse og forurensning — som driver artsutryddelsen.`,
    },
    {
      id: 'nat-vg1-6-5-def-1',
      type: 'definition',
      title: 'Endret utbredelse av arter',
      content: `Når klimaet endrer seg, forskyves artenes leveområder.

**Generelle trender:**
- Arter flytter seg **nordover** (mot polene)
- Arter flytter seg **oppover** i fjellet
- Marine arter flytter seg til dypere eller kaldere vann

**Fenologisk mismatch:**
Når ulike arter i et økosystem reagerer ulikt på temperaturendringer, kan det oppstå **fenologisk mismatch** — tidspunktet for viktige hendelser stemmer ikke lenger overens.

Eksempel: Insekter klekkes tidligere om våren, men trekkfugler som spiser dem ankommer til vanlig tid. Fuglene går glipp av mattoppen.

**Nye artskonflikter:**
- Sørlige arter sprer seg til nye områder og konkurrerer med eksisterende arter
- Rødreven sprer seg nordover og konkurrerer med fjellreven i Norge
- Arter fra varmere strøk bringer med seg nye sykdommer og parasitter`,
    },
    {
      id: 'nat-vg1-6-5-def-2',
      type: 'definition',
      title: 'Truede økosystemer',
      content: `Noen økosystemer er spesielt sårbare for klimaendringer:

**Korallrev:**
- Koraller lever i symbiose med alger (zooxantheller)
- Når vannet blir for varmt, støter korallene ut algene → **korallbleking**
- Uten algene mister korallene næring og farge, og kan dø
- Great Barrier Reef har opplevd gjentatte bleknginshendelser
- Korallrev huser 25% av alle marine arter

**Arktiske økosystemer:**
- Havis smelter → isbjørn, sel og hvalross mister leveområder
- Permafrost tiner → frigjør metan, endrer landskapet
- Tundraen krymper → arktiske arter presses nordover

**Fjelløkosystemer:**
- Skoggrensen kryper oppover → fjellplanter og dyr får mindre plass
- Arter som lever på toppen har ingen steder å flytte
- Norsk eksempel: Fjellreven mister terreng til rødreven`,
    },
    {
      id: 'nat-vg1-6-5-def-3',
      type: 'definition',
      title: 'Evolusjon og klimaendringer',
      content: `**Evolusjon** er endring i en populasjons genetiske sammensetning over generasjoner gjennom naturlig utvalg.

**Kan arter tilpasse seg gjennom evolusjon?**
- Noen arter med kort generasjonstid (bakterier, insekter) kan tilpasse seg raskt
- Arter med lang generasjonstid (store pattedyr, trær) tilpasser seg for sakte
- Klimaendringene skjer 10-100 ganger raskere enn de fleste arter kan tilpasse seg

**Eksempler på observert evolusjon:**
- Noen fuglearter legger egg tidligere på grunn av seleksjon for tidlig hekking
- Noen insekter utvikler toleranse for høyere temperaturer
- Men de fleste arter klarer ikke å holde tritt med endringene

**Norske eksempler:**
- **Fjellrev vs. rødrev:** Rødreven sprer seg til fjellrevens leveområder. Fjellreven er dårligere tilpasset konkurranse i varmere klima.
- **Skoggrensens forskyvning:** Bjørkeskogen kryper oppover i fjellet, og fjellarter mister leveområder.
- **Laks i elvene:** Varmere vann gjør det vanskeligere for laks å overleve i sørlige elver.`,
    },
    {
      id: 'nat-vg1-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Fenologisk mismatch hos svarthvit fluesnapper',
      problem: 'Svarthvit fluesnapper (en trekkfugl) reiser fra Afrika til Nord-Europa for å hekke. De siste tiårene har bestanden gått ned i noen områder. Forklar sammenhengen med klimaendringer.',
      solution: `**Forklaring av fenologisk mismatch:**

1. **Tidlig vår i Europa:** Varmere klima gjør at våren starter tidligere i Nord-Europa. Trærne får blader og insekter klekkes tidligere.

2. **Trekkfuglen vet ikke:** Fluesnapperen befinner seg i Afrika og får ikke signaler om at våren i Europa er tidligere enn normalt.

3. **For sen ankomst:** Fuglen ankommer til sitt hekketerritorium til «normal» tid, men insekttoppen (måltidstoppen) er allerede over.

4. **Konsekvenser:**
   - Mindre mat til ungene
   - Lavere overlevelse blant ungfugler
   - Bestandsnedgang over tid

5. **Viktig poeng:** Det er ikke temperaturen i seg selv som er problemet, men at tidspunktene for ulike hendelser i økosystemet ikke lenger stemmer overens.`,
    },
    {
      id: 'nat-vg1-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva fenologisk mismatch er og gi et eksempel på hvordan dette kan påvirke en art.',
        solution: 'Fenologisk mismatch oppstår når tidspunktet for viktige hendelser i ulike arters livssyklus ikke lenger stemmer overens på grunn av klimaendringer. Ulike arter reagerer ulikt på temperaturendringer, slik at det økologiske samspillet forstyrres. Eksempel: Reinsdyrkalver fødes på samme tidspunkt som før, men plantene de er avhengige av for å vokse har allerede passert sitt mest næringsrike stadium på grunn av tidligere vår. Resultatet er dårligere ernæring og lavere overlevelse blant kalvene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor arter som lever i fjellområder er spesielt sårbare for klimaendringer.',
        solution: 'Fjellarter er spesielt sårbare fordi de allerede lever i et begrenset område nær toppen. Når temperaturen stiger, kryper skoggrensen oppover og presser fjellartene enda høyere. Til slutt har de ingen steder å flytte — de kan ikke komme høyere enn toppen. I tillegg blir habitatet stadig mindre jo høyere opp man kommer (fjelltopper er smalere). Sørlige arter som rødrev konkurrerer med tilpassede fjellarter som fjellrev. Resultatet er at fjellarter presses mot utryddelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter om evolusjon kan «redde» arter fra klimaendringene. Hvilke faktorer avgjør om en art kan tilpasse seg raskt nok?',
        solution: 'Evolusjon kan i noen tilfeller hjelpe arter med å tilpasse seg, men for de fleste arter skjer klimaendringene for raskt. Faktorer som avgjør tilpasningsevnen: 1) Generasjonstid — arter med kort generasjonstid (insekter, bakterier) kan tilpasse seg raskere enn arter med lang generasjonstid (elefanter, hvaler). 2) Genetisk variasjon — populasjoner med stor genetisk variasjon har flere varianter som naturlig utvalg kan virke på. 3) Populasjonsstørrelse — store populasjoner har mer genetisk variasjon. 4) Hastigheten på endringene — dagens endringer skjer 10-100 ganger raskere enn de fleste arter kan tilpasse seg. 5) Migrasjonsmuligheter — arter som kan flytte til nye områder har en fordel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Export av alle kapitler i DEL 3
// ============================================================================

export const NAT_VG1_CHAPTERS_DEL3: TextbookChapter[] = [
  // Seksjon 5: Karbonforbindelser og organisk kjemi
  CHAPTER_NAT_VG1_5_1,
  CHAPTER_NAT_VG1_5_2,
  CHAPTER_NAT_VG1_5_3,
  CHAPTER_NAT_VG1_5_4,
  CHAPTER_NAT_VG1_5_5,
  CHAPTER_NAT_VG1_5_6,
  // Seksjon 6: Miljø og bærekraft
  CHAPTER_NAT_VG1_6_1,
  CHAPTER_NAT_VG1_6_2,
  CHAPTER_NAT_VG1_6_3,
  CHAPTER_NAT_VG1_6_4,
  CHAPTER_NAT_VG1_6_5,
];
