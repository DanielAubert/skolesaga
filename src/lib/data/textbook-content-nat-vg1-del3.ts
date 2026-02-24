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
    // Oppgave: Tester forståelse av karbons egenskaper fra introen
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
    // Oppgave: Tester skillet mellom organisk og uorganisk fra def-1
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
    // Oppgave: MC-oppgave om organisk vs. uorganisk
    {
      id: 'nat-vg1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken av disse forbindelsene regnes som en organisk forbindelse?',
        options: [
          { id: 'a', text: 'Karbondioksid (CO₂)', isCorrect: false },
          { id: 'b', text: 'Kalsiumkarbonat (CaCO₃)', isCorrect: false },
          { id: 'c', text: 'Etanol (C₂H₅OH)', isCorrect: true },
          { id: 'd', text: 'Karbonmonoksid (CO)', isCorrect: false },
        ],
        solution: 'Etanol (C₂H₅OH) er en organisk forbindelse fordi den inneholder karbon-hydrogenbindinger og karbon-karbonbindinger. CO₂, CaCO₃ og CO regnes alle som uorganiske karbonforbindelser fordi de mangler C-H-bindinger og har enklere struktur.',
      },
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
    // Oppgave: Tester forståelse av strukturformler og navnsetting fra def-2
    {
      id: 'nat-vg1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Et organisk molekyl har 5 karbonatomer i en rett kjede. Hva er det riktige IUPAC-prefikset?',
        options: [
          { id: 'a', text: 'But-', isCorrect: false },
          { id: 'b', text: 'Pent-', isCorrect: true },
          { id: 'c', text: 'Heks-', isCorrect: false },
          { id: 'd', text: 'Prop-', isCorrect: false },
        ],
        solution: 'Prefikset pent- brukes for 5 karbonatomer i IUPAC-navnsettingen. But- er 4C, heks- er 6C, og prop- er 3C.',
      },
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
    // Oppgave: Tester forståelse av isomeri og navnsetting etter example-1
    {
      id: 'nat-vg1-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Tegn strukturformlene for de to isomerene av C₄H₁₀ (butan og 2-metylpropan). Forklar hvorfor de har ulike kokepunkter.',
        solution: 'Butan har en rett kjede: CH₃-CH₂-CH₂-CH₃. 2-metylpropan har en forgreinet kjede: CH₃-CH(CH₃)-CH₃ (tre karbonatomer i hovedkjeden med en metylgruppe på det midterste). Butan har høyere kokepunkt (-1°C) enn 2-metylpropan (-12°C) fordi det rette molekylet har større kontaktflate med nabomolekylene. Større kontaktflate gir sterkere van der Waals-krefter mellom molekylene, og det kreves mer energi for å få dem over i gassfase.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-5-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Karbons unike egenskaper**: Karbon har fire valenselektroner og kan danne fire kovalente bindinger, noe som gir grunnlag for et enormt mangfold av forbindelser.
- **Organisk vs. uorganisk**: Organisk kjemi handler om karbonforbindelser med C-H- og C-C-bindinger, mens uorganiske karbonforbindelser (CO₂, CO, karbonater) har enklere struktur.
- **Strukturformler og navnsetting**: Molekylformel, strukturformel og forkortet strukturformel er ulike måter å representere molekyler på. IUPAC-systemet bruker prefikser for antall karbonatomer.
- **Isomeri**: Molekyler med samme molekylformel kan ha ulik struktur og dermed ulike egenskaper.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Organisk kjemi | Kjemien til karbonforbindelser med C-H- og/eller C-C-bindinger |
| Strukturformel | Viser hvordan atomene i et molekyl er bundet til hverandre |
| Isomerer | Molekyler med samme molekylformel men ulik struktur |
| IUPAC-navnsetting | Internasjonalt system for navnsetting av kjemiske forbindelser |
| Valenselektroner | Elektroner i ytterste skall som deltar i bindinger |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-5-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-1-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hvor mange kovalente bindinger kan et karbonatom danne?',
        options: [
          { id: 'a', text: '2', isCorrect: false },
          { id: 'b', text: '3', isCorrect: false },
          { id: 'c', text: '4', isCorrect: true },
          { id: 'd', text: '6', isCorrect: false },
        ],
        solution: 'Karbon har 4 valenselektroner og kan derfor danne 4 kovalente bindinger. Dette er en av grunnene til at karbon kan danne så mange ulike forbindelser.',
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
    // Oppgave: Tester forståelse av mettede vs. umettede fra introen
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
    // Oppgave: Tester forståelse av kokepunktstrend i alkaner fra def-1
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
    // Oppgave: MC-oppgave om cis/trans-isomeri fra def-2
    {
      id: 'nat-vg1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvorfor kan alkener ha cis/trans-isomeri, mens alkaner ikke kan det?',
        options: [
          { id: 'a', text: 'Alkaner har for mange hydrogenatomer', isCorrect: false },
          { id: 'b', text: 'Dobbeltbindingen i alkener hindrer fri rotasjon rundt C=C-bindingen', isCorrect: true },
          { id: 'c', text: 'Alkaner er for korte til å ha isomerer', isCorrect: false },
          { id: 'd', text: 'Alkener har høyere kokepunkt enn alkaner', isCorrect: false },
        ],
        solution: 'Cis/trans-isomeri skyldes at dobbeltbindingen (C=C) i alkener hindrer fri rotasjon. Grupper kan derfor sitte fast på samme side (cis) eller motsatt side (trans) av dobbeltbindingen. I alkaner er det fri rotasjon rundt enkeltbindingene (C-C), så slik isomeri oppstår ikke.',
      },
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
    // Oppgave: Tester forståelse av alkyner fra def-3
    {
      id: 'nat-vg1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Acetylen (etyn) brukes til sveising. Forklar hvorfor denne gassen er spesielt egnet til dette formålet.',
        solution: 'Acetylen (HC≡CH) har en trippelbinding mellom de to karbonatomene. Trippelbindingen inneholder mye lagret kjemisk energi. Ved forbrenning av acetylen frigis denne energien, og flammetemperaturen kan nå over 3000°C. Dette er mye høyere enn ved forbrenning av alkaner eller alkener, og gjør acetylen ideell til sveising og skjæring av metall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // Oppgave: Anvende generelle formler etter example-1
    {
      id: 'nat-vg1-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Et hydrokarbon har molekylformelen C₅H₁₂. Hvilken type hydrokarbon er dette?',
        options: [
          { id: 'a', text: 'Alken', isCorrect: false },
          { id: 'b', text: 'Alkyn', isCorrect: false },
          { id: 'c', text: 'Alkan', isCorrect: true },
          { id: 'd', text: 'Kan ikke avgjøres ut fra formelen', isCorrect: false },
        ],
        solution: 'Vi sjekker alkan-formelen CₙH₂ₙ₊₂: For n=5 gir det C₅H₁₂, som stemmer med den oppgitte formelen. Forbindelsen er altså et alkan, nærmere bestemt pentan.',
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-5-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Hydrokarboner**: Organiske forbindelser som bare inneholder karbon og hydrogen, delt inn i alkaner, alkener og alkyner.
- **Alkaner**: Mettede hydrokarboner med bare enkeltbindinger (CₙH₂ₙ₊₂). Kokepunktet øker med kjedens lengde på grunn av sterkere van der Waals-krefter.
- **Alkener**: Umettede hydrokarboner med minst én dobbeltbinding (CₙH₂ₙ). Kan ha cis/trans-isomeri.
- **Alkyner**: Umettede hydrokarboner med minst én trippelbinding (CₙH₂ₙ₋₂). Svært reaktive.
- **Bestemmelse av type**: Ved å sjekke molekylformelen mot de generelle formlene kan man avgjøre hvilken gruppe et hydrokarbon tilhører.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Mettede hydrokarboner | Hydrokarboner med bare enkeltbindinger (alkaner) |
| Umettede hydrokarboner | Hydrokarboner med dobbelt- eller trippelbindinger |
| Homolog serie | Serie der hvert molekyl skiller seg med en CH₂-enhet |
| Cis/trans-isomeri | Isomeri pga. ulik plassering rundt en dobbeltbinding |
| Van der Waals-krefter | Svake tiltrekningskrefter mellom molekyler |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-5-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'Propan brukes som gass i campingovner. Skriv molekylformelen og strukturformelen for propan, og forklar hvorfor det er en gass ved romtemperatur.',
        solution: 'Propan har molekylformelen C₃H₈ og strukturformelen CH₃-CH₂-CH₃. Propan er en gass ved romtemperatur fordi den har et lavt kokepunkt (-42°C). Det skyldes at propanmolekylene er relativt små og har svake van der Waals-krefter mellom seg. Det kreves derfor lite energi for å bryte disse kreftene og få molekylene over i gassfase.',
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
    // Oppgave: Tester grunnleggende forståelse av funksjonelle grupper fra introen
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
    // Oppgave: Tester forståelse av alkoholers egenskaper (hydrogenbindinger) fra def-1
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
    // Oppgave: MC-oppgave om alkoholer fra def-1
    {
      id: 'nat-vg1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvorfor er metanol (CH₃OH) giftig for mennesker, mens etanol (C₂H₅OH) er drikkbar i moderate mengder?',
        options: [
          { id: 'a', text: 'Metanol har høyere kokepunkt og fordamper saktere', isCorrect: false },
          { id: 'b', text: 'Metanol brytes ned til formaldehyd og maursyre i kroppen, som er svært giftige', isCorrect: true },
          { id: 'c', text: 'Metanol har flere OH-grupper enn etanol', isCorrect: false },
          { id: 'd', text: 'Metanol er uløselig i vann og kan ikke tas opp av kroppen', isCorrect: false },
        ],
        solution: 'Metanol er giftig fordi kroppen bryter den ned (via enzymet alkoholdehydrogenase) til formaldehyd og deretter maursyre. Disse nedbrytningsproduktene er svært giftige og kan forårsake blindhet og død. Etanol brytes ned til acetaldehyd og videre til eddiksyre, som er mindre skadelig.',
      },
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
    // Oppgave: Tester forståelse av esterdannelse fra def-2
    {
      id: 'nat-vg1-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Estere gir ofte frukt og bær deres karakteristiske lukt. Beskriv den kjemiske reaksjonen som danner en ester, og forklar hvilke to stoffklasser som reagerer.',
        solution: 'En ester dannes ved en kondensasjonsreaksjon mellom en karboksylsyre (-COOH) og en alkohol (-OH). Under reaksjonen spaltes det av et vannmolekyl (H₂O). Generell reaksjon: karboksylsyre + alkohol → ester + vann. For eksempel: eddiksyre (CH₃COOH) + etanol (C₂H₅OH) → etylacetat (CH₃COOC₂H₅) + H₂O. Etylacetat har en fruktig lukt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // Oppgave: MC-oppgave om identifisering av funksjonelle grupper
    {
      id: 'nat-vg1-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'En forbindelse har formelen CH₃CH₂CHO. Hvilken stoffklasse tilhører den?',
        options: [
          { id: 'a', text: 'Alkohol', isCorrect: false },
          { id: 'b', text: 'Karboksylsyre', isCorrect: false },
          { id: 'c', text: 'Aldehyd', isCorrect: true },
          { id: 'd', text: 'Keton', isCorrect: false },
        ],
        solution: 'Forbindelsen inneholder en -CHO-gruppe (aldehydgruppe) ytterst i kjeden. Dette gjør den til et aldehyd. Forbindelsen heter propanal (3 karbonatomer + endelsen -al for aldehyd). En alkohol ville hatt -OH, en karboksylsyre -COOH, og et keton C=O inne i kjeden.',
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-5-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Funksjonelle grupper**: Bestemte atomgrupper som gir organiske molekyler sine karakteristiske egenskaper.
- **Alkoholer (-OH)**: Har hydrogenbindinger som gir høyt kokepunkt og vannløselighet for korte kjeder.
- **Karboksylsyrer (-COOH) og estere (-COO-)**: Karboksylsyrer er svake syrer. Estere dannes fra karboksylsyre + alkohol og gir ofte fruktaroma.
- **Aminer, aldehyder og ketoner**: Aminer er byggesteiner i proteiner, mens aldehyder og ketoner har karbonylgrupper med ulike plassering i kjeden.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Funksjonell gruppe | Atomgruppe som bestemmer stoffets kjemiske oppførsel |
| Alkohol | Organisk forbindelse med -OH-gruppe |
| Karboksylsyre | Organisk forbindelse med -COOH-gruppe |
| Ester | Dannes ved reaksjon mellom karboksylsyre og alkohol |
| Hydrogenbinding | Sterk intermolekylær binding mellom H og O/N/F |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-5-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-3-ex-7',
        number: '7',
        type: 'classic',
        task: 'Ranger følgende stoffer etter stigende kokepunkt og begrunn rekkefølgen: propan (C₃H₈), propan-1-ol (C₃H₇OH) og propansyre (C₂H₅COOH).',
        solution: 'Rekkefølge etter stigende kokepunkt: propan (-42°C) < propan-1-ol (97°C) < propansyre (141°C). Propan er et alkan med bare svake van der Waals-krefter. Propan-1-ol har en OH-gruppe som gir hydrogenbindinger og dermed høyere kokepunkt. Propansyre har en COOH-gruppe som kan danne enda sterkere hydrogenbindinger (og dimerstrukturer), og har dermed det høyeste kokepunktet.',
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
    // Oppgave: Tester forståelse av forbrenning fra def-1
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
    // Oppgave: MC-oppgave om forbrenning fra def-1
    {
      id: 'nat-vg1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er produktene ved fullstendig forbrenning av et hydrokarbon?',
        options: [
          { id: 'a', text: 'CO og H₂O', isCorrect: false },
          { id: 'b', text: 'CO₂ og H₂', isCorrect: false },
          { id: 'c', text: 'CO₂ og H₂O', isCorrect: true },
          { id: 'd', text: 'C og H₂O', isCorrect: false },
        ],
        solution: 'Ved fullstendig forbrenning av et hydrokarbon reagerer stoffet med tilstrekkelig oksygen (O₂). Alt karbonet oksideres til CO₂ (karbondioksid) og alt hydrogenet oksideres til H₂O (vann). CO dannes kun ved ufullstendig forbrenning (for lite O₂), og C (sot) dannes ved svært mangelfull oksygentilgang.',
      },
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
    // Oppgave: Tester forståelse av addisjon vs. substitusjon fra def-2
    {
      id: 'nat-vg1-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvorfor reagerer alkaner med halogener (f.eks. Cl₂) ved substitusjon i stedet for addisjon?',
        options: [
          { id: 'a', text: 'Fordi alkaner har lavt kokepunkt', isCorrect: false },
          { id: 'b', text: 'Fordi alkaner bare har enkeltbindinger og mangler dobbeltbindinger å addere over', isCorrect: true },
          { id: 'c', text: 'Fordi halogener er for store til å adderes', isCorrect: false },
          { id: 'd', text: 'Fordi alkaner er uløselige i vann', isCorrect: false },
        ],
        solution: 'Addisjonsreaksjoner krever en dobbelt- eller trippelbinding som kan brytes opp for å gi plass til nye atomer. Alkaner har bare enkeltbindinger (de er mettede), og kan derfor ikke gjennomgå addisjon. I stedet skjer substitusjon, der et hydrogenatom byttes ut med et halogenatom (f.eks. Cl).',
      },
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
    // Oppgave: Tester forståelse av polymerisering fra def-3
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
    // Oppgave: Tester evne til å anvende balansering etter example-1
    {
      id: 'nat-vg1-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Polyetylen (PE) er den vanligste plasten i verden. Forklar hvordan polyetylen lages fra eten (CH₂=CH₂), og beskriv hvilken type polymerisering dette er.',
        solution: 'Polyetylen lages ved addisjonspolymerisering av eten. Dobbeltbindingen i hvert etenmolekyl (CH₂=CH₂) brytes opp, og de to ledige bindingene brukes til å koble etenmolekylene sammen i en lang kjede: n CH₂=CH₂ → (-CH₂-CH₂-)ₙ. Ingen biprodukter dannes — alle atomene fra monomerene er med i polymeren. Polyetylen brukes i plastposer, flasker, rør og emballasje.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-5-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Forbrenning**: Fullstendig forbrenning gir CO₂ og H₂O, mens ufullstendig forbrenning gir giftig CO og/eller sot.
- **Addisjonsreaksjoner**: Atomer adderes over dobbelt- eller trippelbindinger. Brukes bl.a. til herding av fett.
- **Substitusjonsreaksjoner**: Et atom byttes ut med et annet. Typisk for alkaner som mangler dobbeltbindinger.
- **Kondensasjon**: To molekyler kobles sammen mens vann spaltes av (f.eks. esterdannelse).
- **Polymerisering**: Monomerer kobles til lange polymerkjeder, enten ved addisjon eller kondensasjon.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Fullstendig forbrenning | Forbrenning med nok O₂, gir CO₂ og H₂O |
| Ufullstendig forbrenning | For lite O₂, gir CO og/eller sot |
| Addisjonsreaksjon | Atomer adderes over en flerdobbeltbinding |
| Substitusjonsreaksjon | Et atom/gruppe byttes ut med en annen |
| Polymerisering | Monomerer kobles til en lang polymerkjede |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-5-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar forskjellen mellom en addisjonsreaksjon og en kondensasjonsreaksjon. Gi et eksempel på hver.',
        solution: 'I en addisjonsreaksjon adderes atomer over en dobbelt- eller trippelbinding, slik at den brytes opp. Alle atomene fra reaktantene havner i produktet. Eksempel: Eten + H₂ → Etan (CH₂=CH₂ + H₂ → CH₃-CH₃). I en kondensasjonsreaksjon kobles to molekyler sammen, og et lite molekyl (vanligvis vann) spaltes av. Eksempel: Eddiksyre + metanol → metylacetat + vann (CH₃COOH + CH₃OH → CH₃COOCH₃ + H₂O).',
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
    // Oppgave: MC-oppgave om CO₂s rolle i naturen fra def-1
    {
      id: 'nat-vg1-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva skjer når CO₂ løses i vann?',
        options: [
          { id: 'a', text: 'Det dannes karbonmonoksid (CO)', isCorrect: false },
          { id: 'b', text: 'Det dannes karbonsyre (H₂CO₃)', isCorrect: true },
          { id: 'c', text: 'Det dannes kalkstein (CaCO₃)', isCorrect: false },
          { id: 'd', text: 'Det skjer ingen kjemisk reaksjon', isCorrect: false },
        ],
        solution: 'Når CO₂ løses i vann, reagerer det med vannet og danner karbonsyre: CO₂ + H₂O ⇌ H₂CO₃. Dette er en likevektsreaksjon. Karbonsyre er en svak syre som gjør vannet svakt surt. Dette er grunnen til at havvann blir surere (havforsuring) når atmosfæren inneholder mer CO₂.',
      },
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
    // Oppgave: Tester forståelse av CO₂ vs CO fra def-1 og def-2
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
    // Oppgave: Tester forståelse av karbonatreaksjoner fra def-3
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
    // Oppgave: Tester forståelse av CO-forgiftning fra def-2
    {
      id: 'nat-vg1-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'En familie har en vedovn i stua. Forklar hvorfor det er viktig med god ventilasjon og CO-varsler, og beskriv symptomene på CO-forgiftning.',
        solution: 'Ved ufullstendig forbrenning i vedovnen kan det dannes CO (karbonmonoksid). CO er fargeløs og luktfri, så man merker ikke at den er til stede. CO binder seg til hemoglobin i blodet ca. 200 ganger sterkere enn oksygen, og blokkerer oksygentransporten til cellene. Symptomer inkluderer hodepine, svimmelhet, kvalme, forvirring og i alvorlige tilfeller bevisstløshet og død. God ventilasjon sørger for nok oksygen til fullstendig forbrenning, og en CO-varsler gir alarm ved farlige konsentrasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-5-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Karbondioksid (CO₂)**: En naturlig drivhusgass som spiller sentral rolle i fotosyntese og celleånding. Menneskelig aktivitet har økt konsentrasjonen betydelig.
- **Karbonmonoksid (CO)**: En svært giftig gass som dannes ved ufullstendig forbrenning og binder seg til hemoglobin.
- **Cyanider**: Ekstremt giftige forbindelser som blokkerer cellenes oksygenbruk.
- **Karbonater (CO₃²⁻)**: Salter som finnes i kalkstein, marmor og eggeskall. Reagerer med syrer og frigjør CO₂.
- **Sur nedbør**: Løser opp karbonater i bergarter og bygninger, og forsurer innsjøer.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| CO₂ | Karbondioksid, drivhusgass, produkt av forbrenning |
| CO | Karbonmonoksid, giftig gass fra ufullstendig forbrenning |
| Karbonater | Salter med CO₃²⁻-ionet (f.eks. CaCO₃) |
| Drivhuseffekten | CO₂ absorberer varmestråling og varmer opp atmosfæren |
| Sur nedbør | Nedbør med lavere pH som løser opp kalkstein |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilken av disse metodene kan brukes til å teste om en bergart inneholder karbonat?',
        options: [
          { id: 'a', text: 'Legge den i vann og se om den flyter', isCorrect: false },
          { id: 'b', text: 'Varme den opp og se om den smelter', isCorrect: false },
          { id: 'c', text: 'Dryppe syre på den og se om det bobler', isCorrect: true },
          { id: 'd', text: 'Holde den nær en magnet og se om den tiltrekkes', isCorrect: false },
        ],
        solution: 'Karbonater reagerer med syrer og frigjør CO₂-gass, som vises som bobler: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑. Denne «syretesten» er en enkel felttest som geologer bruker for å identifisere kalkstein og andre karbonatbergarter.',
      },
    },
    {
      id: 'nat-vg1-5-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar sammenhengen mellom sur nedbør og skader på kalksteinsbygninger og statuer.',
        solution: 'Sur nedbør inneholder syrer som svovelsyre (H₂SO₄) og salpetersyre (HNO₃), dannet fra industriutslipp av SO₂ og NOₓ. Når sur nedbør treffer kalkstein (CaCO₃), reagerer syren med karbonatet og løser det opp: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. Over tid bryter dette ned overflaten på bygninger, statuer og skulpturer laget av kalkstein eller marmor. Skadene er irreversible og kan sees som forvitring og utvisking av detaljer.',
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
    // Oppgave: Tester forståelse av fotosyntese og celleånding i karbonkretsløpet fra introen
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
    // Oppgave: MC-oppgave om karbonkretsløpets prosesser fra introen
    {
      id: 'nat-vg1-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken prosess fjerner CO₂ fra atmosfæren?',
        options: [
          { id: 'a', text: 'Celleånding', isCorrect: false },
          { id: 'b', text: 'Forbrenning av fossile brensler', isCorrect: false },
          { id: 'c', text: 'Fotosyntese', isCorrect: true },
          { id: 'd', text: 'Nedbrytning av dødt materiale', isCorrect: false },
        ],
        solution: 'Fotosyntese er prosessen der planter, alger og noen bakterier tar opp CO₂ fra atmosfæren og bygger det inn i organiske molekyler (glukose) ved hjelp av solenergi: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Celleånding, forbrenning og nedbrytning frigjør alle CO₂ tilbake til atmosfæren.',
      },
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
    // Oppgave: Tester forståelse av karbonreservoarer fra def-1
    {
      id: 'nat-vg1-5-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen mellom korttids- og langtidslagring av karbon? Gi to eksempler på hvert.',
        solution: 'Korttidslagring av karbon varer fra år til tiår. Eksempler: 1) Levende biomasse (trær, dyr) som lagrer karbon i organiske molekyler mens de lever. 2) CO₂ oppløst i havoverflaten. Langtidslagring varer millioner av år. Eksempler: 1) Fossile brensler (kull, olje, gass) som er rester av organismer begravet og omdannet over geologisk tid. 2) Kalkstein (CaCO₃) dannet fra skjell og skjeletter av marine organismer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // Oppgave: Tester forståelse av menneskelig påvirkning fra def-2
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
    // Oppgave: MC-oppgave om tilbakekoblingsmekanismer
    {
      id: 'nat-vg1-5-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-6-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva menes med en positiv tilbakekoblingsmekanisme i klimasystemet?',
        options: [
          { id: 'a', text: 'En mekanisme som er positiv for miljøet', isCorrect: false },
          { id: 'b', text: 'En mekanisme der en endring forsterker seg selv', isCorrect: true },
          { id: 'c', text: 'En mekanisme som bremser klimaendringene', isCorrect: false },
          { id: 'd', text: 'En mekanisme som bare påvirker polområdene', isCorrect: false },
        ],
        solution: 'En positiv tilbakekoblingsmekanisme betyr at en endring forsterker seg selv i en selvforsterkende spiral. Eksempel: Oppvarming → permafrost tiner → frigjør metan (drivhusgass) → mer oppvarming → mer permafrost tiner osv. Ordet «positiv» betyr ikke at det er bra for miljøet, men at prosessen forsterkes.',
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-5-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Karbonets kretsløp**: Karbon sirkulerer mellom atmosfæren, havet, levende organismer og jordskorpen gjennom fotosyntese, celleånding, forbrenning og nedbrytning.
- **Korttids- og langtidslagring**: Karbon lagres i biomasse og atmosfære (kort tid) og i fossile brensler, kalkstein og permafrost (lang tid).
- **Menneskelig påvirkning**: Forbrenning av fossile brensler og avskoging frigjør lagret karbon raskere enn naturen kan ta det opp, noe som forsterker drivhuseffekten.
- **Karbonets betydning for livet**: Alle biologiske makromolekyler (karbohydrater, lipider, proteiner, nukleinsyrer) er karbonbaserte. Alt kjent liv er avhengig av karbon.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Karbonets kretsløp | Karbons sirkulasjon mellom ulike reservoarer i naturen |
| Fotosyntese | Planter tar opp CO₂ og bygger organiske molekyler |
| Celleånding | Organismer bryter ned organisk stoff og frigjør CO₂ |
| Fossile brensler | Langtidslagre av karbon (olje, kull, gass) |
| Tilbakekoblingsmekanismer | Prosesser som forsterker oppvarmingen (f.eks. permafrost-tining) |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-5-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-5-6-ex-7',
        number: '7',
        type: 'classic',
        task: 'Skogplanting brukes ofte som et klimatiltak. Forklar hvordan trær bidrar til karbonkretsløpet, og diskuter om skogplanting alene kan løse klimaproblemet.',
        solution: 'Trær tar opp CO₂ fra atmosfæren gjennom fotosyntese og lagrer karbonet i biomasse (stamme, greiner, røtter, blader). En voksen skog kan lagre store mengder karbon. Men skogplanting alene kan ikke løse klimaproblemet fordi: 1) Det tar tiår før nye trær er store nok til å ta opp betydelige mengder CO₂. 2) Mengden CO₂ vi slipper ut fra fossile brensler er mye større enn det ny skog kan ta opp. 3) Trær binder karbon midlertidig — ved skogbrann eller hogst frigjøres det igjen. 4) Det finnes begrenset areal tilgjengelig for ny skog. Skogplanting er et viktig supplement, men må kombineres med utslippskutt.',
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
    // Oppgave: MC-oppgave om roller i økosystemet fra def-1
    {
      id: 'nat-vg1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken organisme er en produsent i et økosystem?',
        options: [
          { id: 'a', text: 'Kanin (planteetende)', isCorrect: false },
          { id: 'b', text: 'Sopp (nedbryter)', isCorrect: false },
          { id: 'c', text: 'Eik (tre)', isCorrect: true },
          { id: 'd', text: 'Hauk (rovfugl)', isCorrect: false },
        ],
        solution: 'En eik er en produsent fordi den lager sin egen mat gjennom fotosyntese. Produsenter bruker solenergi, CO₂ og vann til å bygge organiske molekyler. Kanin er en primærkonsument (planteeter), sopp er en nedbryter, og hauk er en sekundær- eller tertiærkonsument (rovdyr).',
      },
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
    // Oppgave: Tester forståelse av næringskjede vs. næringsnett fra def-2
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
    // Oppgave: Tester forståelse av trofiske nivåer fra def-2
    {
      id: 'nat-vg1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'I en norsk skog finnes blant annet blåbærlyng, elg, ulv, mark, sopp og gran. Sett opp et forenklet næringsnett med minst to næringskjeder som deler en felles art.',
        solution: 'Et forenklet næringsnett: Næringskjede 1: Gran → Elg → Ulv. Næringskjede 2: Blåbærlyng → Elg → Ulv. Her er elg felles art i begge kjedene. Sopp og mark fungerer som nedbrytere som bryter ned dødt organisk materiale fra alle nivåer og frigjør næringsstoffer tilbake til jordsmonnet. Næringsnettet viser at økosystemet er mer komplekst enn enkle næringskjeder — elgen spiser flere plantearter, og ulven kan også spise andre byttedyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // Oppgave: MC-oppgave om 10%-regelen fra def-3
    {
      id: 'nat-vg1-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Ifølge 10%-regelen overføres bare ca. 10% av energien fra ett trofisk nivå til det neste. Hva skjer med de resterende 90%?',
        options: [
          { id: 'a', text: 'De lagres i jordsmonnet', isCorrect: false },
          { id: 'b', text: 'De tapes som varme gjennom celleånding', isCorrect: true },
          { id: 'c', text: 'De omdannes til næringsstoffer', isCorrect: false },
          { id: 'd', text: 'De reflekteres tilbake til sola', isCorrect: false },
        ],
        solution: 'Omtrent 90% av energien på hvert trofisk nivå brukes av organismene selv til celleånding (livsprosesser som bevegelse, vekst, temperaturregulering) og tapes som varme til omgivelsene. Bare ca. 10% lagres i biomasse og er tilgjengelig som mat for neste nivå. Derfor er det mindre og mindre energi tilgjengelig oppover i næringskjeden.',
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-6-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Økosystemer**: Avgrensede områder der biotiske (levende) og abiotiske (ikke-levende) faktorer samspiller.
- **Roller**: Produsenter lager mat gjennom fotosyntese, konsumenter spiser andre organismer, og nedbrytere resirkulerer næringsstoffer.
- **Næringskjeder og næringsnett**: Næringskjeder viser lineære spiserelasjoner, mens næringsnett viser de komplekse sammenhengene.
- **Energistrøm**: Bare ca. 10 % av energien overføres mellom hvert trofisk nivå, noe som begrenser lengden på næringskjeder.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Økosystem | Samspill mellom levende organismer og deres miljø |
| Produsent | Organisme som lager sin egen mat (fotosyntese) |
| Konsument | Organisme som spiser andre organismer |
| Næringskjede | Lineær fremstilling av hvem som spiser hvem |
| 10 %-regelen | Ca. 10 % av energien overføres per trofisk nivå |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-6-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar hvilken rolle nedbryterne har i et økosystem. Hva ville skjedd dersom alle nedbryterne forsvant?',
        solution: 'Nedbrytere (sopp og bakterier) bryter ned dødt organisk materiale og frigjør næringsstoffer (mineraler, nitrogen, fosfor) tilbake til jordsmonnet. Disse næringsstoffene tas opp av plantene og resirkuleres i økosystemet. Hvis alle nedbryterne forsvant, ville dødt materiale hope seg opp, næringsstoffer ville bli bundet i døde organismer og ikke tilgjengelig for plantene. Etter hvert ville jordsmonnet bli utarmet, plantene ville ikke få nok næring, og hele økosystemet ville bryte sammen.',
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
    // Oppgave: MC-oppgave om kjennetegn på miljøgifter fra introen
    {
      id: 'nat-vg1-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilket av disse kjennetegnene er IKKE typisk for en miljøgift?',
        options: [
          { id: 'a', text: 'Persistent (brytes ikke lett ned)', isCorrect: false },
          { id: 'b', text: 'Bioakkumulerende (hopes opp i organismer)', isCorrect: false },
          { id: 'c', text: 'Vannløselig (løses lett opp og skilles ut)', isCorrect: true },
          { id: 'd', text: 'Giftig selv i lave konsentrasjoner', isCorrect: false },
        ],
        solution: 'Miljøgifter er typisk fettløselige, ikke vannløselige. Fettløselighet gjør at de lagres i fettvev og er vanskelige å skille ut gjennom urin (som er vannbasert). De tre hovedkjennetegnene for miljøgifter er: persistente (brytes ikke ned), bioakkumulerende (hopes opp) og giftige. Vannløselige stoffer skilles lett ut og hoper seg derfor ikke opp.',
      },
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
    // Oppgave: Tester forståelse av bioakkumulering vs. biomagnifisering fra def-1 og def-2
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
    // Oppgave: Tester forståelse av biomagnifisering med talleksempel fra def-2
    {
      id: 'nat-vg1-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'I en innsjø er konsentrasjonen av en miljøgift 0,001 ppm i vannet. Plankton har 0,05 ppm, småfisk 1 ppm, stor fisk 10 ppm og fiskeørn 100 ppm. Beregn hvor mange ganger konsentrasjonen øker fra vann til fiskeørn, og forklar mønsteret.',
        solution: 'Konsentrasjonsøkning fra vann til fiskeørn: 100 / 0,001 = 100 000 ganger (hundre tusen ganger). Mønsteret viser biomagnifisering: konsentrasjonen øker for hvert ledd i næringskjeden. Fra vann til plankton: 50× økning, fra plankton til småfisk: 20× økning, fra småfisk til stor fisk: 10× økning, fra stor fisk til fiskeørn: 10× økning. Årsaken er at hvert rovdyr spiser mange byttedyr og akkumulerer miljøgiften fra alle dem. Fiskeørnen på toppen får den høyeste konsentrasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // Oppgave: MC-oppgave om helseeffekter fra def-3
    {
      id: 'nat-vg1-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilken helseeffekt er DDT mest kjent for å ha forårsaket hos fugler?',
        options: [
          { id: 'a', text: 'Blindhet', isCorrect: false },
          { id: 'b', text: 'Tynnere eggeskall som knuste før klekking', isCorrect: true },
          { id: 'c', text: 'Tap av fjærdrakt', isCorrect: false },
          { id: 'd', text: 'Nedsatt flygeevne', isCorrect: false },
        ],
        solution: 'DDT og nedbrytningsproduktet DDE forstyrret kalsiumstoffskiftet hos rovfugler, noe som førte til at eggeskallene ble for tynne. Eggene knuste under ruging før ungene var ferdig utviklet. Dette rammet spesielt fiskeørn, havørn og vandrefalk, og førte til dramatisk bestandsnedgang. Forbudet mot DDT (i Norge fra 1970) har gjort at bestandene har tatt seg opp igjen.',
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-6-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Miljøgifter**: Stoffer som er persistente, bioakkumulerende og giftige (f.eks. kvikksølv, PCB, DDT, PFAS).
- **Bioakkumulering**: Et stoff hoper seg opp i en enkelt organisme over tid fordi det tas opp raskere enn det skilles ut.
- **Biomagnifisering**: Konsentrasjonen av et miljøgift øker for hvert ledd oppover i næringskjeden. Topprovdyr rammes hardest.
- **Helseeffekter**: Miljøgifter kan forårsake nerveskader, hormonforstyrrelser, kreft og fosterskader hos mennesker og dyr.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Miljøgift | Stoff som er skadelig selv i lave konsentrasjoner |
| Persistent | Brytes ikke lett ned i naturen |
| Bioakkumulering | Opphopning av et stoff i en enkelt organisme |
| Biomagnifisering | Konsentrasjonsøkning oppover i næringskjeden |
| Topprovdyr | Dyr øverst i næringskjeden (f.eks. isbjørn, havørn) |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-6-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'PFAS (per- og polyfluorerte stoffer) er en gruppe miljøgifter som har fått mye oppmerksomhet de siste årene. De finnes i blant annet vannavvisende klær, stekepanner og brannskum. Forklar hvorfor PFAS er problematiske som miljøgifter.',
        solution: 'PFAS er problematiske fordi de oppfyller alle de tre kjennetegnene for miljøgifter: 1) Persistente: Karbon-fluor-bindingen er en av de sterkeste bindingene i kjemien og gjør at PFAS nesten ikke brytes ned i naturen. De kalles derfor «evighetskjemikalier». 2) Bioakkumulerende: PFAS hoper seg opp i organismer og i næringskjeder. 3) Giftige: De mistenkes å forårsake kreft, hormonforstyrrelser, leverskader og immunsvikt. I tillegg er de svært utbredt — de finnes i drikkevann, jord og organismer over hele verden, selv i Arktis.',
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
    // Oppgave: MC-oppgave om nivåer for miljøtiltak fra introen
    {
      id: 'nat-vg1-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Parisavtalen er et eksempel på miljøtiltak på hvilket nivå?',
        options: [
          { id: 'a', text: 'Individuelt nivå', isCorrect: false },
          { id: 'b', text: 'Lokalt nivå', isCorrect: false },
          { id: 'c', text: 'Nasjonalt nivå', isCorrect: false },
          { id: 'd', text: 'Internasjonalt nivå', isCorrect: true },
        ],
        solution: 'Parisavtalen er en internasjonal klimaavtale fra 2015 der nesten alle verdens land har forpliktet seg til å begrense global oppvarming til godt under 2°C, helst 1,5°C over førindustrielt nivå. Den er et eksempel på tiltak på internasjonalt nivå, der land samarbeider om felles mål.',
      },
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
    // Oppgave: Tester forståelse av klimatiltak vs. klimatilpasning fra def-1
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
    // Oppgave: Tester forståelse av klimatiltak fra def-1
    {
      id: 'nat-vg1-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Karbonfangst og -lagring (CCS) er en teknologi som brukes for å redusere CO₂-utslipp fra industrien. Forklar kort hvordan teknologien fungerer, og nevn en fordel og en ulempe.',
        solution: 'CCS fungerer ved at CO₂ fanges opp fra røykgass ved industrianlegg (f.eks. sementfabrikker eller gasskraftverk) før den slipper ut i atmosfæren. CO₂-en komprimeres og transporteres (via rør eller skip) til et lagringssted, vanligvis i geologiske formasjoner under havbunnen. Fordel: Kan redusere utslipp fra industri som er vanskelig å elektrifisere. Ulempe: Teknologien er dyr og energikrevende, og det er usikkert om lagringen er permanent over tusenvis av år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // Oppgave: Tester forståelse av individuelle tiltak og sirkulær økonomi fra intro og def-2
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
    // Oppgave: MC-oppgave om avfallshierarkiet fra def-2
    {
      id: 'nat-vg1-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'I avfallshierarkiet er det fem nivåer. Hva er det mest foretrukne tiltaket (øverst i hierarkiet)?',
        options: [
          { id: 'a', text: 'Materialgjenvinning (resirkulering)', isCorrect: false },
          { id: 'b', text: 'Energigjenvinning (forbrenning)', isCorrect: false },
          { id: 'c', text: 'Forebygge (redusere forbruk)', isCorrect: true },
          { id: 'd', text: 'Ombruk (bruke på nytt)', isCorrect: false },
        ],
        solution: 'Forebygging er øverst i avfallshierarkiet fordi det beste avfallet er det som aldri oppstår. Ved å redusere forbruket unngår man hele prosessen med produksjon, transport og avfallshåndtering. Rekkefølgen er: 1) Forebygge, 2) Ombruk, 3) Materialgjenvinning, 4) Energigjenvinning, 5) Deponi.',
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Tiltak på ulike nivåer**: Miljøproblemer krever innsats internasjonalt, nasjonalt, lokalt og individuelt.
- **Klimatiltak vs. klimatilpasning**: Klimatiltak reduserer utslipp (fornybar energi, karbonfangst), mens klimatilpasning forbereder samfunnet på endringer som allerede skjer (flomsikring, arealplanlegging).
- **Sirkulær økonomi**: Overgang fra «bruk og kast» til gjenbruk, reparasjon og resirkulering reduserer ressursforbruk og avfall.
- **Internasjonalt samarbeid**: Montrealprotokollen viser at internasjonale avtaler kan løse globale miljøproblemer.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Klimatiltak (mitigering) | Tiltak for å redusere utslipp av klimagasser |
| Klimatilpasning | Tilpasning til klimaendringer som allerede skjer |
| Sirkulær økonomi | Økonomisk modell basert på gjenbruk og resirkulering |
| Avfallshierarkiet | Prioriteringsrekkefølge fra forebygging til deponi |
| Parisavtalen | Internasjonal klimaavtale med mål om maks 1,5-2°C oppvarming |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-6-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-3-ex-7',
        number: '7',
        type: 'classic',
        task: 'Sammenlign lineær økonomi og sirkulær økonomi. Forklar hvorfor overgangen til sirkulær økonomi er viktig for bærekraftig utvikling.',
        solution: 'Lineær økonomi følger modellen «ta ut → produser → bruk → kast», der ressurser brukes én gang og ender som avfall. Sirkulær økonomi følger modellen «produser → bruk → reparer/gjenbruk → resirkuler → tilbake til produksjon», der materialer holdes i kretsløp lengst mulig. Overgangen er viktig fordi: 1) Jordens ressurser er begrensede, og lineær økonomi tømmer dem. 2) Avfall skaper forurensning og tar opp plass. 3) Produksjon krever mye energi og gir klimagassutslipp — ved å gjenbruke reduseres behovet for ny produksjon. 4) Sirkulær økonomi kan også skape nye arbeidsplasser innen reparasjon og gjenvinning.',
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
    // Oppgave: Tester forståelse av drivhuseffektens mekanisme fra introen
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
    // Oppgave: MC-oppgave om drivhuseffektens mekanisme fra introen
    {
      id: 'nat-vg1-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva ville gjennomsnittlig jordtemperatur vært uten den naturlige drivhuseffekten?',
        options: [
          { id: 'a', text: 'Ca. +5°C', isCorrect: false },
          { id: 'b', text: 'Ca. 0°C', isCorrect: false },
          { id: 'c', text: 'Ca. -18°C', isCorrect: true },
          { id: 'd', text: 'Ca. -50°C', isCorrect: false },
        ],
        solution: 'Uten den naturlige drivhuseffekten ville gjennomsnittlig jordtemperatur vært ca. -18°C, noe som ville gjort jorden ubeboelig for de fleste livsformer. Drivhuseffekten hever temperaturen til ca. +15°C, altså en forskjell på ca. 33°C. Det er den forsterkede drivhuseffekten (fra menneskeskapte utslipp) som er problemet, ikke den naturlige.',
      },
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
    // Oppgave: Tester forståelse av drivhusgassenes relative styrke fra def-1
    {
      id: 'nat-vg1-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Metan (CH₄) er ca. 28 ganger sterkere drivhusgass enn CO₂ over 100 år. Likevel er CO₂ den viktigste menneskeskapte drivhusgassen. Forklar hvorfor.',
        solution: 'Selv om metan er en sterkere drivhusgass per molekyl, er CO₂ den viktigste fordi: 1) Vi slipper ut mye mer CO₂ enn metan — fossile brensler er den dominerende energikilden globalt. 2) CO₂ har mye lenger levetid i atmosfæren (hundrevis av år) enn metan (ca. 12 år). 3) Den totale oppvarmingseffekten avhenger av både konsentrasjon og styrke, og CO₂ dominerer i sum. Likevel er reduksjon av metanutslipp viktig fordi effekten per tonn er stor og resultater merkes raskt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // Oppgave: Tester forståelse av biologiske konsekvenser fra def-3
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
    // Oppgave: MC-oppgave om konsekvenser av klimaendringer fra def-3
    {
      id: 'nat-vg1-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva er hovedårsaken til at havnivået stiger som følge av global oppvarming?',
        options: [
          { id: 'a', text: 'Mer nedbør som samler seg i havet', isCorrect: false },
          { id: 'b', text: 'Smelting av landis og termisk ekspansjon av havvann', isCorrect: true },
          { id: 'c', text: 'Smelting av havis (flytende is) i Arktis', isCorrect: false },
          { id: 'd', text: 'Vulkansk aktivitet under havet', isCorrect: false },
        ],
        solution: 'Havnivåstigning skyldes to hovedfaktorer: 1) Smelting av landis (isbreer på Grønland, Antarktis og fjellbreer) tilfører nytt vann til havet. 2) Termisk ekspansjon — varmere vann tar mer plass fordi molekylene beveger seg raskere og fyller et større volum. Smelting av havis (flytende is i Arktis) bidrar ikke til havnivåstigning fordi isen allerede fortrenger vann.',
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-6-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Drivhuseffekten**: En naturlig prosess der drivhusgasser fanger opp varmestråling og holder jorden varm nok for liv (+15 °C i stedet for -18 °C).
- **Viktige drivhusgasser**: CO₂ (hovedårsak til menneskeskapt oppvarming), metan, lystgass og vanndamp.
- **Forsterket drivhuseffekt**: Menneskelig aktivitet har økt konsentrasjonen av drivhusgasser betydelig, noe som gir global oppvarming.
- **Konsekvenser**: Stigende temperaturer, havnivåstigning, mer ekstremvær, og store endringer i biologisk mangfold.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Drivhuseffekten | Naturlig oppvarming av jorda pga. drivhusgasser |
| Forsterket drivhuseffekt | Ekstra oppvarming pga. menneskeskapte utslipp |
| CO₂ (ppm) | Konsentrasjon av karbondioksid, nå over 420 ppm |
| Global oppvarming | Økning i gjennomsnittlig jordtemperatur (~1,1 °C) |
| Korallbleking | Koraller støter ut alger pga. for varmt vann |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-6-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar forskjellen mellom den naturlige drivhuseffekten og den forsterkede (menneskeskapte) drivhuseffekten. Hvorfor er den forsterkede drivhuseffekten et problem?',
        solution: 'Den naturlige drivhuseffekten er en prosess der drivhusgasser (hovedsakelig vanndamp og CO₂) fanger opp varmestråling og holder jordtemperaturen på et nivå som gjør livet mulig (+15°C i stedet for -18°C). Den forsterkede drivhuseffekten skyldes at menneskelig aktivitet (fossile brensler, avskoging, landbruk) har økt konsentrasjonen av drivhusgasser. Mer CO₂ og metan betyr at mer varmestråling fanges, og jordtemperaturen stiger. Problemet er at oppvarmingen skjer raskt og fører til stigende havnivå, mer ekstremvær, tap av arter, og kan true matproduksjon og menneskelige samfunn.',
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
    // Oppgave: MC-oppgave om arters respons på klimaendringer fra introen
    {
      id: 'nat-vg1-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er de tre måtene en art kan reagere på klimaendringer?',
        options: [
          { id: 'a', text: 'Vokse, formere seg og dø', isCorrect: false },
          { id: 'b', text: 'Tilpasse seg, flytte seg eller dø ut', isCorrect: true },
          { id: 'c', text: 'Spise mer, spise mindre eller faste', isCorrect: false },
          { id: 'd', text: 'Bli større, bli mindre eller forbli uendret', isCorrect: false },
        ],
        solution: 'Arter kan reagere på klimaendringer på tre måter: 1) Tilpasse seg gjennom evolusjon eller akklimering, 2) Flytte seg (migrere) til nye, mer egnede områder, eller 3) Dø ut dersom de verken klarer å tilpasse seg eller flytte. Problemet er at dagens klimaendringer skjer så raskt at mange arter ikke rekker å tilpasse seg.',
      },
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
    // Oppgave: Tester forståelse av fenologisk mismatch fra def-1
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
    // Oppgave: Tester forståelse av fenologisk mismatch og artskonflikter fra def-1
    {
      id: 'nat-vg1-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Rødreven sprer seg nordover i Norge og konkurrerer med fjellreven. Forklar hvordan klimaendringer bidrar til dette, og hva konsekvensene kan bli for fjellreven.',
        solution: 'Når temperaturen stiger, kan rødreven leve i områder som tidligere var for kalde, inkludert fjellrevens leveområder. Rødreven er større, sterkere og mer aggressiv enn fjellreven, og utkonkurrerer den om mat og hi. Fjellreven kan ikke flytte lenger nord eller høyere opp fordi den allerede lever i yttergrensen av habitatet. Konsekvensene er at fjellrevbestanden presses ytterligere, og arten kan bli utryddet fra deler av sitt opprinnelige leveområde. Fjellreven er allerede kritisk truet i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // Oppgave: Tester forståelse av sårbare fjelløkosystemer fra def-2
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
    // Oppgave: MC-oppgave om korallbleking fra def-2
    {
      id: 'nat-vg1-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva er korallbleking?',
        options: [
          { id: 'a', text: 'Koraller som vokser ekstra raskt i varmt vann', isCorrect: false },
          { id: 'b', text: 'Koraller som støter ut sine symbiotiske alger på grunn av for høy vanntemperatur', isCorrect: true },
          { id: 'c', text: 'Koraller som blekes av sollys i grunt vann', isCorrect: false },
          { id: 'd', text: 'Koraller som dør av forurensning fra plast', isCorrect: false },
        ],
        solution: 'Korallbleking skjer når vanntemperaturen blir for høy og korallene støter ut sine symbiotiske alger (zooxantheller). Algene gir korallene farge og næring gjennom fotosyntese. Uten algene mister korallene sin fargepraktige fremtoning (de «blekes») og mister en viktig næringskilde. Hvis høy temperatur vedvarer, kan korallene dø. Korallrev er blant verdens mest artsrike økosystemer og huser ca. 25% av alle marine arter.',
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-6-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Arters respons på klimaendringer**: Arter kan tilpasse seg, flytte seg eller dø ut. Dagens endringer skjer for raskt for de fleste arter.
- **Endret utbredelse**: Arter flytter nordover og oppover i fjellet. Fenologisk mismatch oppstår når arter reagerer ulikt på temperaturendringer.
- **Truede økosystemer**: Korallrev, arktiske områder og fjelløkosystemer er spesielt sårbare fordi artene der har begrensede fluktmuligheter.
- **Evolusjon og tilpasning**: Arter med kort generasjonstid kan tilpasse seg raskere, men de fleste arter klarer ikke å holde tritt med tempoet i klimaendringene.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Fenologisk mismatch | Tidspunkt for hendelser i ulike arters livssyklus stemmer ikke overens |
| Korallbleking | Koraller støter ut alger pga. for varmt vann |
| Sjette masseutryddelsen | Pågående artsutryddelse drevet av menneskelig aktivitet |
| Generasjonstid | Tid det tar for en art å produsere neste generasjon |
| Naturlig utvalg | Individer med gunstige egenskaper overlever og formerer seg best |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-6-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-6-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Bakterier har generasjonstid på minutter, mens elefanter har generasjonstid på flere tiår. Forklar hvordan generasjonstid påvirker en arts evne til å tilpasse seg klimaendringer gjennom evolusjon.',
        solution: 'Evolusjon gjennom naturlig utvalg krever mange generasjoner for å endre en populasjons genetiske sammensetning. Arter med kort generasjonstid (som bakterier) gjennomgår mange generasjoner på kort tid, og gunstige mutasjoner kan spres raskt i populasjonen. Bakterier kan derfor tilpasse seg nye forhold i løpet av dager eller uker. Arter med lang generasjonstid (som elefanter) gjennomgår få generasjoner per århundre, og evolusjonær tilpasning tar tusenvis av år. Siden klimaendringene skjer raskt (i løpet av tiår), er arter med lang generasjonstid spesielt sårbare fordi de ikke rekker å tilpasse seg gjennom evolusjon.',
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
