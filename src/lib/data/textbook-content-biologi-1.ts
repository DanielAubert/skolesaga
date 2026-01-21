/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2
 *
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Cellebiologi og cellens oppbygging
// ============================================================================

export const CHAPTER_BIOLOGI_1_1: TextbookChapter = {
  id: 'biologi-1-1',
  courseId: 'biologi-1',
  chapterNumber: '1',
  title: 'Cellebiologi og cellens oppbygging',
  description: 'Cellens struktur, organeller og deres funksjoner. Prokaryote vs eukaryote celler.',
  estimatedMinutes: 75,
  competenceGoals: [
    'beskrive cellens oppbygging og organellenes funksjoner',
    'forklare forskjellen mellom prokaryote og eukaryote celler',
    'gjøre rede for cellemembranes struktur og transport',
    'bruke mikroskop til å studere celler',
  ],
  content: [
    {
      id: 'bio1-1-intro',
      type: 'text',
      content: `# Cellebiologi og cellens oppbygging

Cellen er livets grunnenhet. Alle levende organismer er bygd opp av celler, fra enkle bakterier til komplekse mennesker.

## Celleteori

Celleteori ble utviklet på 1800-tallet og fastslår at:

1. **Alle levende organismer består av celler**
2. **Cellen er livets minste funksjonelle enhet**
3. **Alle celler oppstår fra eksisterende celler**

Dette er grunnleggende prinsipper i biologien som fortsatt gjelder i dag.`,
    },
    {
      id: 'bio1-1-def-celle',
      type: 'definition',
      title: 'Celle',
      content: 'En celle er den minste enheten som kan utføre alle livsprosesser: opptak av næring, energiomsetning, vekst, reproduksjon og respons på omgivelsene. Celler varierer enormt i størrelse og form, fra bakterier på noen mikrometer til nerveceller som kan være over en meter lange.',
    },
    {
      id: 'bio1-1-prokaryot-eukaryot',
      type: 'text',
      content: `## Prokaryote og eukaryote celler

Celler deles i to hovedgrupper basert på struktur:

### Prokaryote celler
- Ingen membranomsluttet kjerne
- DNA ligger fritt i cytoplasma (nukleoid)
- Ingen membranbundne organeller
- Generelt mindre (1-10 μm)
- Eksempler: Bakterier og arkeer

### Eukaryote celler
- Har en ekte kjerne med kjernememran
- DNA organisert i kromosomer
- Mange membranbundne organeller
- Generelt større (10-100 μm)
- Eksempler: Dyr, planter, sopp, protister`,
    },
    {
      id: 'bio1-1-organeller',
      type: 'text',
      content: `## Cellens organeller

### Kjernen (nucleus)
- Inneholder DNA organisert i kromosomer
- Omgitt av dobbel kjernememran med porer
- Inneholder kjerneløsning med nukleolus (ribosom-produksjon)
- Styrer cellens aktiviteter gjennom genekspresjon

### Ribosomer
- Proteinsyntesemaskineri
- Består av rRNA og proteiner
- Finnes fritt i cytoplasma eller festet til ER
- 80S i eukaryoter, 70S i prokaryoter

### Endoplasmatisk retikulum (ER)
**Ru ER (med ribosomer):**
- Proteinsyntese og prosessering
- Transport av proteiner

**Glatt ER (uten ribosomer):**
- Lipidsyntese
- Avfallsbehandling
- Kalsiumlager

### Golgiapparatet
- Modifiserer, sorterer og pakker proteiner
- Lager vesikler for transport
- Produserer lysosomer

### Mitokondrier
- Cellens kraftverk - produserer ATP
- Har eget DNA (sirkulært)
- Dobbel membran med folder (cristae)
- Opprinnelse: Endosymbiose

### Kloroplaster (planteceller)
- Fotosyntese - omdanner lysenergi til kjemisk energi
- Har eget DNA
- Inneholder klorofyll i tylakoider
- Opprinnelse: Endosymbiose`,
    },
    {
      id: 'bio1-1-def-membran',
      type: 'definition',
      title: 'Cellemembranen',
      content: 'Cellemembranen er en selektivt permeabel barriere som omgir cellen. Den består av et dobbelt fosfolipidlag med innebygde proteiner (fluid mosaikk-modellen). Membranen kontrollerer hva som går inn og ut av cellen, og er viktig for cellekommunikasjon.',
    },
    {
      id: 'bio1-1-transport',
      type: 'text',
      content: `## Transport over cellemembranen

### Passiv transport (krever ikke energi)
- **Diffusjon**: Stoffer beveger seg fra høy til lav konsentrasjon
- **Osmose**: Diffusjon av vann gjennom semipermeabel membran
- **Fasilitert diffusjon**: Transport via membranproteiner

### Aktiv transport (krever ATP)
- **Primær aktiv transport**: Direkte bruk av ATP (f.eks. Na+/K+-pumpen)
- **Sekundær aktiv transport**: Utnytter iongradienter
- **Endocytose**: Cellen tar opp stoffer i vesikler
- **Eksocytose**: Cellen skiller ut stoffer via vesikler`,
    },
    {
      id: 'bio1-1-example-1',
      type: 'example',
      title: 'Eksempel: Osmose i planteceller',
      problem: 'Hva skjer med en plantecelle som plasseres i destillert vann, og hva skjer hvis den plasseres i saltvann?',
      solution: `**Løsning:**

**I destillert vann (hypotont miljø):**
- Vannkonsentrasjonen er høyere utenfor cellen
- Vann strømmer inn i cellen via osmose
- Cellen sveller, men celleveggen hindrer at den sprekker
- Cellen blir turgescent (stram) - viktig for plantens struktur

**I saltvann (hypertont miljø):**
- Vannkonsentrasjonen er lavere utenfor cellen
- Vann strømmer ut av cellen
- Cellemembranen trekker seg fra celleveggen
- Cellen blir plasmolysert (krympet) - planten visner`,
    },
  ],
  exercises: [
    {
      id: 'bio1-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken organelle kalles "cellens kraftverk"?',
      options: [
        { id: 'a', text: 'Mitokondrier', isCorrect: true },
        { id: 'b', text: 'Kloroplaster', isCorrect: false },
        { id: 'c', text: 'Ribosomer', isCorrect: false },
        { id: 'd', text: 'Golgiapparatet', isCorrect: false },
      ],
      solution: 'Mitokondriene produserer mesteparten av cellens ATP gjennom celleånding, og kalles derfor "cellens kraftverk".',
    },
    {
      id: 'bio1-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar minst tre forskjeller mellom prokaryote og eukaryote celler.',
      solution: '1) Prokaryoter har ikke kjernememran - DNA ligger fritt i cytoplasma (nukleoid). 2) Prokaryoter mangler membranbundne organeller som mitokondrier og ER. 3) Prokaryoter er generelt mindre (1-10 μm vs 10-100 μm). 4) Prokaryoters ribosomer er 70S, eukaryoters er 80S. 5) Prokaryoter har ofte cellevegg av peptidoglykan.',
    },
    {
      id: 'bio1-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken transport krever energi (ATP)?',
      options: [
        { id: 'a', text: 'Na+/K+-pumpen', isCorrect: true },
        { id: 'b', text: 'Diffusjon av O2', isCorrect: false },
        { id: 'c', text: 'Osmose', isCorrect: false },
        { id: 'd', text: 'Fasilitert diffusjon av glukose', isCorrect: false },
      ],
      solution: 'Na+/K+-pumpen er et eksempel på primær aktiv transport som direkte bruker ATP til å pumpe ioner mot konsentrasjonsgradienten.',
    },
    {
      id: 'bio1-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv endosymbioseteorien for mitokondriene.',
      solution: 'Endosymbioseteorien sier at mitokondrier opprinnelig var frittlevende prokaryoter som ble tatt opp av en større celle. Bevis inkluderer: 1) Mitokondrier har eget sirkulært DNA, 2) De har 70S-ribosomer som bakterier, 3) De formerer seg ved binær fisjon, 4) De har dobbel membran (indre fra bakterien, ytre fra vertscellen).',
    },
    {
      id: 'bio1-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar fluid mosaikk-modellen for cellemembranen.',
      solution: 'Fluid mosaikk-modellen beskriver cellemembranen som et dobbelt lag av fosfolipider med innebygde proteiner. "Fluid" fordi fosfolipidene og mange proteiner kan bevege seg sideveis i membranen. "Mosaikk" fordi membranproteinene danner et mønster i lipidlaget. Kolesterol bidrar til membranens flytende egenskap. Proteiner kan være perifere (løst festet) eller integrale (går gjennom membranen).',
    },
    {
      id: 'bio1-1-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor i cellen foregår proteinsyntese?',
      options: [
        { id: 'a', text: 'Ribosomer', isCorrect: true },
        { id: 'b', text: 'Mitokondrier', isCorrect: false },
        { id: 'c', text: 'Golgiapparatet', isCorrect: false },
        { id: 'd', text: 'Lysosomer', isCorrect: false },
      ],
      solution: 'Ribosomer er cellens proteinsyntesemaskineri. De oversetter mRNA til protein ved å koble sammen aminosyrer i riktig rekkefølge.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Celleånding og fotosyntese
// ============================================================================

export const CHAPTER_BIOLOGI_1_2: TextbookChapter = {
  id: 'biologi-1-2',
  courseId: 'biologi-1',
  chapterNumber: '2',
  title: 'Celleånding og fotosyntese',
  description: 'Energiomsetning i celler: glykolyse, sitronsyresyklus, elektrontransportkjeden og fotosyntesens lyse og mørke reaksjoner.',
  estimatedMinutes: 90,
  competenceGoals: [
    'gjøre rede for celleåndingens hovedtrinn',
    'forklare fotosyntesens lysavhengige og lysuavhengige reaksjoner',
    'beskrive ATP som energivaluta',
    'sammenligne aerob og anaerob forbrenning',
  ],
  content: [
    {
      id: 'bio1-2-intro',
      type: 'text',
      content: `# Celleånding og fotosyntese

Alle levende organismer trenger energi. Fotosyntesen fanger solenergi og lagrer den i organiske molekyler, mens celleåndingen frigjør denne energien for cellens bruk.

## Energistrøm i naturen

**Solenergi → Fotosyntese → Organiske molekyler → Celleånding → ATP → Cellearbeid**

ATP (adenosintrifosfat) er cellens energivaluta som brukes til å drive alle energikrevende prosesser.`,
    },
    {
      id: 'bio1-2-def-atp',
      type: 'definition',
      title: 'ATP (Adenosintrifosfat)',
      content: 'ATP er et molekyl som fungerer som cellens energivaluta. Det består av adenin, ribose og tre fosfatgrupper. Når den ytterste fosfatgruppen spaltes av (ATP → ADP + Pi), frigjøres energi som kan brukes til cellearbeid. ATP regenereres kontinuerlig gjennom celleånding.',
    },
    {
      id: 'bio1-2-celleanding',
      type: 'text',
      content: `## Celleånding

Celleånding er prosessen der organiske molekyler (primært glukose) brytes ned for å produsere ATP.

### Totalreaksjon (aerob)
$$C_6H_{12}O_6 + 6O_2 → 6CO_2 + 6H_2O + \\text{energi (ATP)}$$

### De fire hovedtrinnene

**1. Glykolyse** (i cytoplasma)
- Glukose (6C) → 2 pyruvat (3C)
- Nettoutbytte: 2 ATP + 2 NADH
- Krever ingen oksygen

**2. Pyruvatoksidasjon** (i mitokondriematrise)
- Pyruvat → Acetyl-CoA + CO₂
- Produserer 2 NADH per glukose

**3. Sitronsyresyklus** (i mitokondriematrise)
- Acetyl-CoA oksideres fullstendig
- Per glukose: 2 ATP + 6 NADH + 2 FADH₂ + 4 CO₂

**4. Elektrontransportkjeden** (i indre mitokondrememran)
- NADH og FADH₂ avgir elektroner
- Elektroner transporteres gjennom proteinkomplekser
- Protongradient driver ATP-syntase
- O₂ er siste elektronakseptor → H₂O
- Ca. 34 ATP per glukose`,
    },
    {
      id: 'bio1-2-anaerob',
      type: 'text',
      content: `## Anaerob forbrenning

Når oksygen mangler, kan celler produsere ATP ved gjæring.

### Melkesyregjæring
- Pyruvat → Laktat
- Skjer i muskelceller ved hard trening
- Regenererer NAD+ for fortsatt glykolyse
- Nettoutbytte: Kun 2 ATP per glukose

### Alkoholgjæring
- Pyruvat → Etanol + CO₂
- Skjer i gjærceller
- Brukes til brødheving og alkoholproduksjon
- Nettoutbytte: Kun 2 ATP per glukose`,
    },
    {
      id: 'bio1-2-def-fotosyntese',
      type: 'definition',
      title: 'Fotosyntese',
      content: 'Fotosyntesen er prosessen der planter, alger og noen bakterier bruker lysenergi til å omdanne CO₂ og H₂O til glukose og O₂. Totalreaksjon: 6CO₂ + 6H₂O + lysenergi → C₆H₁₂O₆ + 6O₂. Prosessen foregår i kloroplaster.',
    },
    {
      id: 'bio1-2-fotosyntese',
      type: 'text',
      content: `## Fotosyntesen

### Lysreaksjonene (i tylakoidmembranen)
1. **Fotosystem II**: Klorofyll absorberer lys, vann spaltes (O₂ frigjøres)
2. **Elektrontransportkjede**: Elektroner transporteres, protongradient dannes
3. **Fotosystem I**: Absorberer lys, elektroner løftes til høyere energinivå
4. **NADP+-reduksjon**: NADPH dannes
5. **ATP-syntese**: Protongradient driver kjemiosmose

**Produkter:** ATP + NADPH + O₂

### Calvin-syklus (i stroma) - "Mørke reaksjoner"
1. **Karbonfiksering**: CO₂ bindes til RuBP av enzymet rubisco
2. **Reduksjon**: ATP og NADPH brukes til å lage G3P
3. **Regenerering**: RuBP regenereres

**Produkter:** G3P (sukker)

### Energiregnskap
- 3 CO₂ → 1 G3P
- Krever 9 ATP og 6 NADPH per G3P`,
    },
    {
      id: 'bio1-2-example-1',
      type: 'example',
      title: 'Eksempel: Energiutbytte i celleånding',
      problem: 'Beregn det totale ATP-utbyttet fra fullstendig nedbrytning av ett glukosemolekyl.',
      solution: `**Løsning:**

**Glykolyse:**
- 2 ATP (netto)
- 2 NADH → ca. 5 ATP (i elektrontransportkjeden)

**Pyruvatoksidasjon:**
- 2 NADH → ca. 5 ATP

**Sitronsyresyklus (per glukose):**
- 2 ATP
- 6 NADH → ca. 15 ATP
- 2 FADH₂ → ca. 3 ATP

**Totalt ATP-utbytte:**
- Direkte: 2 + 2 = 4 ATP
- Fra NADH: 5 + 5 + 15 = 25 ATP
- Fra FADH₂: 3 ATP

**Total: ca. 30-32 ATP per glukose**

(Nøyaktig antall varierer pga. tap og transport over membraner)`,
    },
  ],
  exercises: [
    {
      id: 'bio1-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor foregår glykolysen?',
      options: [
        { id: 'a', text: 'I cytoplasma', isCorrect: true },
        { id: 'b', text: 'I mitokondrier', isCorrect: false },
        { id: 'c', text: 'I kloroplaster', isCorrect: false },
        { id: 'd', text: 'I kjernen', isCorrect: false },
      ],
      solution: 'Glykolysen foregår i cytoplasma og krever ingen oksygen. Det er det eneste trinnet i celleåndingen som skjer utenfor mitokondriene.',
    },
    {
      id: 'bio1-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom aerob og anaerob forbrenning.',
      solution: 'Aerob forbrenning bruker oksygen og gir fullt utbytte (ca. 30-32 ATP per glukose). Prosessen inkluderer glykolyse, sitronsyresyklus og elektrontransportkjede. Anaerob forbrenning skjer uten oksygen via gjæring (melkesyre- eller alkoholgjæring) og gir kun 2 ATP per glukose. NAD+ regenereres slik at glykolysen kan fortsette.',
    },
    {
      id: 'bio1-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den siste elektronakseptoren i elektrontransportkjeden?',
      options: [
        { id: 'a', text: 'Oksygen (O₂)', isCorrect: true },
        { id: 'b', text: 'Karbondioksid (CO₂)', isCorrect: false },
        { id: 'c', text: 'NADH', isCorrect: false },
        { id: 'd', text: 'ATP', isCorrect: false },
      ],
      solution: 'Oksygen er den siste elektronakseptoren i elektrontransportkjeden. Når O₂ tar opp elektroner og H+, dannes vann (H₂O).',
    },
    {
      id: 'bio1-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva som skjer i fotosyntesens lysreaksjoner.',
      solution: 'I lysreaksjonene: 1) Klorofyll i fotosystem II absorberer lys og spalter vann - O₂ frigjøres. 2) Elektroner transporteres gjennom proteinkomplekser og bygger opp protongradient. 3) Fotosystem I absorberer lys og løfter elektroner til høyere energi. 4) NADPH dannes når elektroner overføres til NADP+. 5) ATP-syntase bruker protongradient til å lage ATP via kjemiosmose.',
    },
    {
      id: 'bio1-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan elektrontransportkjeden er koblet til ATP-produksjon via kjemiosmose.',
      solution: 'Elektrontransportkjeden pumper H+-ioner fra mitokondriens matrise til intermembranrommet. Dette skaper en protongradient (høyere H+-konsentrasjon utenfor). Når H+-ioner strømmer tilbake gjennom ATP-syntase nedover konsentrasjonsgradienten, driver protonstrømmen rotasjon av enzymet som katalyserer ATP-syntese fra ADP + Pi. Dette kalles kjemiosmose og kobler elektronstrøm til fosforylerering.',
    },
    {
      id: 'bio1-2-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket enzym fikserer CO₂ i Calvin-syklus?',
      options: [
        { id: 'a', text: 'Rubisco', isCorrect: true },
        { id: 'b', text: 'ATP-syntase', isCorrect: false },
        { id: 'c', text: 'Helikase', isCorrect: false },
        { id: 'd', text: 'DNA-polymerase', isCorrect: false },
      ],
      solution: 'Rubisco (RuBP-karboksylase/oksygenase) er enzymet som binder CO₂ til RuBP i Calvin-syklus. Det er verdens mest forekommende enzym.',
    },
  ],
};

// ============================================================================
// Kapittel 3: DNA og gener
// ============================================================================

export const CHAPTER_BIOLOGI_1_3: TextbookChapter = {
  id: 'biologi-1-3',
  courseId: 'biologi-1',
  chapterNumber: '3',
  title: 'DNA og gener',
  description: 'DNA-struktur, replikasjon, transkripsjon og translasjon. Den genetiske koden.',
  estimatedMinutes: 85,
  competenceGoals: [
    'beskrive DNA-molekylets struktur',
    'forklare replikasjon, transkripsjon og translasjon',
    'gjøre rede for den genetiske koden',
    'drøfte sammenhengen mellom gen og protein',
  ],
  content: [
    {
      id: 'bio1-3-intro',
      type: 'text',
      content: `# DNA og gener

DNA (deoksyribonukleinsyre) er molekylet som lagrer genetisk informasjon i alle levende organismer. Genene i DNA koder for proteiner som utfører de fleste funksjoner i cellen.

## Det sentrale dogmet

Informasjonsflyten i cellen går fra DNA via RNA til protein:

**DNA → RNA → Protein**

- **Replikasjon**: DNA kopieres til nytt DNA
- **Transkripsjon**: DNA avleses og mRNA lages
- **Translasjon**: mRNA oversettes til protein`,
    },
    {
      id: 'bio1-3-def-dna',
      type: 'definition',
      title: 'DNA-struktur',
      content: 'DNA er en dobbeltheliks bygd opp av nukleotider. Hver nukleotid består av: 1) Deoksyribose (sukkermolekyl), 2) Fosfatgruppe, 3) Nitrogenbase (A, T, G eller C). De to trådene holdes sammen av hydrogenbindinger mellom basene: Adenin (A) parrer seg med Tymin (T), Guanin (G) parrer seg med Cytosin (C).',
    },
    {
      id: 'bio1-3-struktur',
      type: 'text',
      content: `## DNA-strukturen i detalj

### Baseparing
- **A-T**: To hydrogenbindinger
- **G-C**: Tre hydrogenbindinger

### Antiparallelle tråder
De to DNA-trådene løper i motsatt retning:
- 5' → 3' retning på den ene tråden
- 3' → 5' retning på den komplementære tråden

### Kromatinorganisering
I eukaryote celler er DNA pakket rundt histonproteiner:
- **Nukleosomer**: DNA viklet rundt histonoktamerer
- **Kromatinfiber**: Nukleosomer pakket i fiber
- **Kromosomer**: Maksimalt kondensert DNA under celledeling`,
    },
    {
      id: 'bio1-3-replikasjon',
      type: 'text',
      content: `## DNA-replikasjon

Replikasjon sikrer at DNA kopieres nøyaktig før celledeling.

### Semikonservativ replikasjon
Hver ny DNA-dobbeltheliks inneholder én original tråd og én nysyntetisert tråd.

### Hovedtrinn
1. **Helikase** åpner dobbelthelixen
2. **SSB-proteiner** stabiliserer enkelttrådene
3. **Primase** lager RNA-primere
4. **DNA-polymerase III** syntetiserer DNA (5' → 3')
   - Ledende tråd: Kontinuerlig syntese
   - Hengende tråd: Okazaki-fragmenter
5. **DNA-polymerase I** fjerner primere
6. **Ligase** forbinder fragmentene

### Korrekturlesing
DNA-polymerase har 3' → 5' eksonukleaseaktivitet som retter feil under syntese.`,
    },
    {
      id: 'bio1-3-transkripsjon',
      type: 'text',
      content: `## Transkripsjon

Transkripsjon er prosessen der et gen kopieres til mRNA.

### Trinn
1. **Initiering**: RNA-polymerase binder til promotor
2. **Elongering**: mRNA syntetiseres 5' → 3'
3. **Terminering**: Transkripsjon stopper ved terminatorsekvens

### mRNA-prosessering (eukaryoter)
Primært transkript må prosesseres før translasjon:
- **5'-cap**: Metylert guanosin beskytte mRNA
- **Poly-A-hale**: Adeniner tilføyes i 3'-enden
- **Spleising**: Introner fjernes, eksoner settes sammen`,
    },
    {
      id: 'bio1-3-def-kodon',
      type: 'definition',
      title: 'Genetisk kode',
      content: 'Den genetiske koden er et sett regler for hvordan nukleotidsekvenser oversettes til aminosyrer. Tre nukleotider (et kodon) koder for én aminosyre. Det finnes 64 kodoner: 61 koder for de 20 aminosyrene (koden er degenerert), 1 er startkodon (AUG = metionin), og 3 er stoppkodoner (UAA, UAG, UGA).',
    },
    {
      id: 'bio1-3-translasjon',
      type: 'text',
      content: `## Translasjon

Translasjon er prosessen der mRNA oversettes til protein på ribosomer.

### Komponenter
- **mRNA**: Bærer genetisk informasjon
- **tRNA**: Bringer aminosyrer, har antikodon
- **Ribosomer**: Katalyserer peptidbindinger

### Trinn
1. **Initiering**: Ribosom binder til mRNA ved startkodon (AUG)
2. **Elongering**:
   - tRNA med riktig antikodon binder til kodon
   - Peptidbinding dannes mellom aminosyrer
   - Ribosom flytter seg tre nukleotider
3. **Terminering**: Stoppkodon nås, protein frigjøres

### Fra gen til protein
DNA → mRNA → Protein gir en-til-en-forhold mellom genets nukleotidsekvens og proteinets aminosyresekvens.`,
    },
    {
      id: 'bio1-3-example-1',
      type: 'example',
      title: 'Eksempel: Fra DNA til protein',
      problem: 'Gitt DNA-sekvensen 3\'-TAC GGC AAA ATT-5\' (templattråden), hva blir mRNA-sekvensen og aminosyresekvensen?',
      solution: `**Løsning:**

**Steg 1: Finn mRNA-sekvensen**
Template-DNA: 3'-TAC GGC AAA ATT-5'
mRNA (komplementær, antiparallell): 5'-AUG CCG UUU UAA-3'

**Steg 2: Oversett til aminosyrer**
AUG = Metionin (Met) - startkodon
CCG = Prolin (Pro)
UUU = Fenylalanin (Phe)
UAA = Stoppkodon

**Svar:**
- mRNA: 5'-AUG CCG UUU UAA-3'
- Protein: Met-Pro-Phe (3 aminosyrer)`,
    },
  ],
  exercises: [
    {
      id: 'bio1-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken base i DNA parrer seg med cytosin (C)?',
      options: [
        { id: 'a', text: 'Guanin (G)', isCorrect: true },
        { id: 'b', text: 'Adenin (A)', isCorrect: false },
        { id: 'c', text: 'Tymin (T)', isCorrect: false },
        { id: 'd', text: 'Uracil (U)', isCorrect: false },
      ],
      solution: 'Guanin (G) parrer seg alltid med Cytosin (C) via tre hydrogenbindinger.',
    },
    {
      id: 'bio1-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med at DNA-replikasjon er semikonservativ.',
      solution: 'Semikonservativ replikasjon betyr at hver nye DNA-dobbeltheliks inneholder én original tråd og én nysyntetisert tråd. Når DNA-molekylet kopieres, separeres de to trådene, og hver fungerer som mal for syntese av en ny komplementær tråd.',
    },
    {
      id: 'bio1-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'DNA-sekvensen er 5\'-ATGCAATAG-3\'. Hva er den komplementære sekvensen?',
      solution: 'Den komplementære sekvensen er 3\'-TACGTTATC-5\'. Baseparingsreglene: A parrer med T, og G parrer med C. Trådene er antiparallelle.',
      hints: ['Husk at trådene er antiparallelle'],
    },
    {
      id: 'bio1-3-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er funksjonen til mRNA-prosessering?',
      options: [
        { id: 'a', text: 'Fjerne introner og legge til cap og poly-A-hale', isCorrect: true },
        { id: 'b', text: 'Kopiere DNA', isCorrect: false },
        { id: 'c', text: 'Bryte ned proteiner', isCorrect: false },
        { id: 'd', text: 'Transportere aminosyrer', isCorrect: false },
      ],
      solution: 'mRNA-prosessering inkluderer spleising (fjerne introner), tilføying av 5\'-cap og 3\'-poly-A-hale. Dette beskytter mRNA og er nødvendig for eksport til cytoplasma.',
    },
    {
      id: 'bio1-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor den genetiske koden kalles "degenerert" eller "redundant".',
      solution: 'Den genetiske koden er degenerert fordi det er 64 mulige kodoner (4³), men bare 20 aminosyrer. Derfor koder flere kodoner for samme aminosyre - f.eks. koder både UUU og UUC for fenylalanin. Dette gir en viss beskyttelse mot punktmutasjoner, særlig i tredje posisjon i kodonet (wobble-posisjon).',
    },
    {
      id: 'bio1-3-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket kodon starter proteinsyntesen?',
      options: [
        { id: 'a', text: 'AUG', isCorrect: true },
        { id: 'b', text: 'UAA', isCorrect: false },
        { id: 'c', text: 'UGA', isCorrect: false },
        { id: 'd', text: 'UAG', isCorrect: false },
      ],
      solution: 'AUG er startkodonet og koder for aminosyren metionin. UAA, UAG og UGA er stoppkodoner.',
    },
  ],
};

// ============================================================================
// Kapittel 4: Celledeling (mitose og meiose)
// ============================================================================

export const CHAPTER_BIOLOGI_1_4: TextbookChapter = {
  id: 'biologi-1-4',
  courseId: 'biologi-1',
  chapterNumber: '4',
  title: 'Celledeling (mitose og meiose)',
  description: 'Cellesyklus, mitose for vekst og vedlikehold, meiose for kjønnscelledannelse.',
  estimatedMinutes: 80,
  competenceGoals: [
    'beskrive cellesyklus og dens kontrollpunkter',
    'forklare fasene i mitose',
    'gjøre rede for meiose og genetisk variasjon',
    'sammenligne mitose og meiose',
  ],
  content: [
    {
      id: 'bio1-4-intro',
      type: 'text',
      content: `# Celledeling (mitose og meiose)

Celledeling er grunnleggende for vekst, utvikling og reproduksjon. Det finnes to hovedtyper celledeling:

- **Mitose**: Produserer genetisk identiske celler (somatiske celler)
- **Meiose**: Produserer genetisk unike kjønnsceller (gameter)

## Cellesyklus

Cellesyklus er serien av hendelser som fører til celledeling:

**Interfase:**
- G1: Cellevekst
- S: DNA-replikasjon
- G2: Forberedelse til deling

**M-fase:**
- Mitose + Cytokinese`,
    },
    {
      id: 'bio1-4-def-kromosom',
      type: 'definition',
      title: 'Kromosom',
      content: 'Et kromosom er et langt DNA-molekyl pakket med histonproteiner. Mennesker har 46 kromosomer (23 par) - 22 par autosomer og 1 par kjønnskromosomer (XX eller XY). Før celledeling består hvert kromosom av to identiske søsterkromatider festet i centromeren.',
    },
    {
      id: 'bio1-4-mitose',
      type: 'text',
      content: `## Mitose

Mitose er celledeling som produserer to genetisk identiske datterceller.

### Fasene i mitose

**Profase:**
- Kromosomer kondenserer og blir synlige
- Kjerneløsningen oppløses
- Sentriolene beveger seg til polene
- Spindelfibrene begynner å dannes

**Metafase:**
- Kromosomene stiller seg på midten (metafaseplaten)
- Spindelfibre fester seg til kinetochorene
- Kontrollpunkt: Alle kromosomer må være festet

**Anafase:**
- Søsterkromatider separeres
- Hver kromatid dras mot sin pol
- Cellen strekkes ut

**Telofase:**
- Kromosomer dekondenserer
- Kjernemembraner dannes rundt hver gruppe
- Spindelfibre brytes ned

**Cytokinese:**
- Cytoplasma deles
- To datterceller dannes`,
    },
    {
      id: 'bio1-4-meiose',
      type: 'text',
      content: `## Meiose

Meiose produserer fire haploide kjønnsceller fra én diploid celle.

### Meiose I - Reduksjonsdeling

**Profase I:**
- Homologe kromosomer parrer seg (synapsis)
- Overkrysning (crossing over) skjer
- Genetisk materiale utveksles

**Metafase I:**
- Homologe par stiller seg på midten
- Tilfeldig orientering av par

**Anafase I:**
- Homologe kromosomer separeres
- Søsterkromatider forblir sammen

**Telofase I + Cytokinese I:**
- To haploide celler dannes

### Meiose II - Likner mitose
- Søsterkromatider separeres
- Resultat: 4 haploide celler`,
    },
    {
      id: 'bio1-4-variasjon',
      type: 'text',
      content: `## Genetisk variasjon i meiose

Meiose produserer genetisk unike celler gjennom:

### 1. Overkrysning (Crossing over)
- Skjer i profase I
- Homologe kromosomer bytter DNA-segmenter
- Nye kombinasjoner av alleler på samme kromosom

### 2. Uavhengig assortment
- Skjer i metafase I
- Tilfeldig fordeling av homologe par
- 2²³ = 8 millioner mulige kombinasjoner hos mennesker

### 3. Tilfeldig befruktning
- Hvilke som helst to gameter kan møtes
- Øker mangfoldet ytterligere`,
    },
    {
      id: 'bio1-4-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av mitose og meiose',
      problem: 'En organisme har 2n = 6 kromosomer. Hvor mange kromosomer har cellene etter henholdsvis mitose og meiose?',
      solution: `**Løsning:**

**Etter mitose:**
- Datterceller er diploide (2n)
- Antall kromosomer: 6 per celle
- Antall celler: 2

**Etter meiose:**
- Datterceller er haploide (n)
- Antall kromosomer: 3 per celle
- Antall celler: 4

**Oppsummering:**
- Mitose: 2n → 2n (2 celler med 6 kromosomer)
- Meiose: 2n → n (4 celler med 3 kromosomer)`,
    },
  ],
  exercises: [
    {
      id: 'bio1-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'I hvilken fase av mitose stiller kromosomene seg på midten av cellen?',
      options: [
        { id: 'a', text: 'Metafase', isCorrect: true },
        { id: 'b', text: 'Profase', isCorrect: false },
        { id: 'c', text: 'Anafase', isCorrect: false },
        { id: 'd', text: 'Telofase', isCorrect: false },
      ],
      solution: 'I metafase stiller kromosomene seg langs cellens ekvator (metafaseplaten) før de separeres i anafase.',
    },
    {
      id: 'bio1-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom mitose og meiose med hensyn til antall delinger og resulterende celler.',
      solution: 'Mitose består av én deling som produserer 2 genetisk identiske diploide (2n) celler. Meiose består av to delinger som produserer 4 genetisk unike haploide (n) celler. I meiose I separeres homologe kromosomer, i meiose II separeres søsterkromatider.',
    },
    {
      id: 'bio1-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Når skjer overkrysning (crossing over)?',
      options: [
        { id: 'a', text: 'Profase I i meiose', isCorrect: true },
        { id: 'b', text: 'Metafase i mitose', isCorrect: false },
        { id: 'c', text: 'Anafase II i meiose', isCorrect: false },
        { id: 'd', text: 'S-fasen', isCorrect: false },
      ],
      solution: 'Overkrysning skjer i profase I når homologe kromosomer parrer seg (synapsis) og utveksler DNA-segmenter.',
    },
    {
      id: 'bio1-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva som skjer i S-fasen av cellesyklus.',
      solution: 'I S-fasen (syntesefasen) replikeres DNA. Hver DNA-dobbeltheliks kopieres slik at hvert kromosom etter S-fasen består av to identiske søsterkromatider festet i centromeren. Dette sikrer at dattercellene får komplett genetisk materiale.',
    },
    {
      id: 'bio1-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan uavhengig assortment bidrar til genetisk variasjon.',
      solution: 'Uavhengig assortment skjer i metafase I når homologe kromosompar orienteres tilfeldig langs metafaseplaten. Hvert par kan orienteres i to retninger uavhengig av de andre parene. Med n kromosompar blir det 2^n mulige kombinasjoner. Hos mennesker (n=23) gir dette 2²³ ≈ 8 millioner forskjellige gameter, selv uten overkrysning.',
    },
    {
      id: 'bio1-4-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er resultatet av meiose?',
      options: [
        { id: 'a', text: '4 haploide celler', isCorrect: true },
        { id: 'b', text: '2 diploide celler', isCorrect: false },
        { id: 'c', text: '4 diploide celler', isCorrect: false },
        { id: 'd', text: '2 haploide celler', isCorrect: false },
      ],
      solution: 'Meiose produserer 4 haploide (n) celler fra én diploid (2n) celle gjennom to påfølgende delinger.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Arv og genetikk
// ============================================================================

export const CHAPTER_BIOLOGI_1_5: TextbookChapter = {
  id: 'biologi-1-5',
  courseId: 'biologi-1',
  chapterNumber: '5',
  title: 'Arv og genetikk',
  description: 'Mendels lover, mono- og dihybrid arv, dominans, recessivitet og kjønnsbundet arv.',
  estimatedMinutes: 85,
  competenceGoals: [
    'gjøre rede for Mendels lover',
    'løse oppgaver med mono- og dihybrid arv',
    'forklare dominans, recessivitet og kodominans',
    'beskrive kjønnsbundet arv',
  ],
  content: [
    {
      id: 'bio1-5-intro',
      type: 'text',
      content: `# Arv og genetikk

Genetikk er læren om arv - hvordan egenskaper overføres fra foreldre til avkom. Gregor Mendel la grunnlaget for moderne genetikk gjennom sine eksperimenter med erteplanter på 1860-tallet.

## Nøkkelbegreper

- **Gen**: Arvelig enhet som koder for en egenskap
- **Allel**: Ulike varianter av samme gen
- **Genotype**: Genetisk sammensetning (f.eks. Aa)
- **Fenotype**: Observerbar egenskap (f.eks. gul farge)
- **Homozygot**: Har to like alleler (AA eller aa)
- **Heterozygot**: Har to ulike alleler (Aa)`,
    },
    {
      id: 'bio1-5-def-mendel',
      type: 'definition',
      title: 'Mendels lover',
      content: '**1. Spaltingsloven**: Alleler separeres under gametdannelse slik at hver gamet får bare ett allel. **2. Uavhengig assortment**: Alleler for ulike egenskaper sorteres uavhengig av hverandre (gjelder gener på ulike kromosomer).',
    },
    {
      id: 'bio1-5-monohybrid',
      type: 'text',
      content: `## Monohybrid arv

Monohybrid arv ser på arv av én egenskap kontrollert av ett gen.

### Eksempel: Erteblomstfarge
- **P** (purpur) er dominant over **p** (hvit)

### Krysning: Pp × Pp

| | P | p |
|---|---|---|
| **P** | PP | Pp |
| **p** | Pp | pp |

**Genotype-forhold**: 1 PP : 2 Pp : 1 pp
**Fenotype-forhold**: 3 purpur : 1 hvit

### Testcross
For å finne genotypen til et dominant individ, krysser vi med homozygot recessiv (pp):
- Hvis alle avkom er purpur → PP
- Hvis halvparten er hvit → Pp`,
    },
    {
      id: 'bio1-5-dihybrid',
      type: 'text',
      content: `## Dihybrid arv

Dihybrid arv ser på arv av to uavhengige egenskaper.

### Eksempel: Erter
- Farge: **G** (gul) dominant over **g** (grønn)
- Form: **R** (rund) dominant over **r** (rynket)

### Krysning: GgRr × GgRr

Bruker Punnett-rute (4×4) eller greindiagram.

**Fenotype-forhold**: 9:3:3:1
- 9 gul, rund
- 3 gul, rynket
- 3 grønn, rund
- 1 grønn, rynket`,
    },
    {
      id: 'bio1-5-dominans',
      type: 'text',
      content: `## Dominansforhold

### Fullstendig dominans
- Heterozygoten (Aa) har samme fenotype som homozygot dominant (AA)
- Eksempel: Erteblomstfarge

### Ufullstendig dominans
- Heterozygoten har en mellomliggende fenotype
- Eksempel: Rød (RR) × Hvit (rr) → Rosa (Rr)

### Kodominans
- Begge alleler uttrykkes fullt ut
- Eksempel: AB-blodtype (I^A I^B)

### Multiple alleler
- Mer enn to alleler for ett gen i populasjonen
- Eksempel: ABO-blodtypesystemet (I^A, I^B, i)`,
    },
    {
      id: 'bio1-5-kjonnsbundet',
      type: 'text',
      content: `## Kjønnsbundet arv

Gener på kjønnskromosomene arves annerledes enn autosomale gener.

### X-bundet arv
- Menn har bare ett X-kromosom (XY)
- Kvinner har to X-kromosomer (XX)
- X-bundne recessive tilstander er vanligere hos menn

### Eksempler på X-bundne tilstander
- **Fargeblindhet** (rød-grønn)
- **Hemofili** (blødersykdom)
- **Duchenne muskeldystrofi**

### Arv av fargeblindhet
Alleler: X^B (normalt syn), X^b (fargeblind)

| | X^B | Y |
|---|---|---|
| **X^B** | X^BX^B | X^BY |
| **X^b** | X^BX^b | X^bY |

Bærer-mor × Normal far:
- Alle døtre: Normalt syn (50% bærere)
- Sønner: 50% normalt syn, 50% fargeblinde`,
    },
    {
      id: 'bio1-5-example-1',
      type: 'example',
      title: 'Eksempel: Monohybrid krysning',
      problem: 'Hos mus er svart pels (B) dominant over brun pels (b). Hva blir fenotype-forholdet i avkommet hvis to heterozygote mus krysses?',
      solution: `**Løsning:**

Foreldre: Bb × Bb

**Punnett-rute:**
| | B | b |
|---|---|---|
| **B** | BB | Bb |
| **b** | Bb | bb |

**Genotyper:** 1 BB : 2 Bb : 1 bb

**Fenotyper:**
- 3/4 svart pels (BB og Bb)
- 1/4 brun pels (bb)

**Fenotype-forhold: 3 svart : 1 brun**`,
    },
  ],
  exercises: [
    {
      id: 'bio1-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med at et individ er heterozygot?',
      options: [
        { id: 'a', text: 'Det har to ulike alleler for et gen (f.eks. Aa)', isCorrect: true },
        { id: 'b', text: 'Det har to like alleler for et gen', isCorrect: false },
        { id: 'c', text: 'Det har dominant fenotype', isCorrect: false },
        { id: 'd', text: 'Det er hannkjønn', isCorrect: false },
      ],
      solution: 'Heterozygot betyr at individet har to ulike alleler for et gen (f.eks. Aa), i motsetning til homozygot som har to like (AA eller aa).',
    },
    {
      id: 'bio1-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'To foreldre med genotype Aa får fire barn. Hva er sannsynligheten for at et tilfeldig barn har genotype aa?',
      solution: 'Sannsynligheten er 1/4 (25%). Fra Punnett-rute for Aa × Aa: 1/4 AA, 2/4 Aa, 1/4 aa. Hvert barn har uavhengig 25% sjanse for å være aa.',
    },
    {
      id: 'bio1-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hos erter er gul farge (G) dominant over grønn (g), og rund form (R) dominant over rynket (r). Hva er det forventede fenotype-forholdet i F2-generasjonen fra krysningen GgRr × GgRr?',
      solution: 'Fenotype-forholdet er 9:3:3:1. 9/16 gul og rund, 3/16 gul og rynket, 3/16 grønn og rund, 1/16 grønn og rynket. Dette følger fra uavhengig assortment av de to genparene.',
      hints: ['Bruk 4×4 Punnett-rute eller produktregelen'],
    },
    {
      id: 'bio1-5-ex4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken blodtype kan et barn ha hvis mor er type A (I^A i) og far er type B (I^B i)?',
      options: [
        { id: 'a', text: 'A, B, AB eller O', isCorrect: true },
        { id: 'b', text: 'Bare AB', isCorrect: false },
        { id: 'c', text: 'A eller B', isCorrect: false },
        { id: 'd', text: 'Bare O', isCorrect: false },
      ],
      solution: 'Krysning: I^Ai × I^Bi gir: I^AI^B (AB), I^Ai (A), I^Bi (B), ii (O). Alle fire blodtyper er mulige med 25% sannsynlighet hver.',
    },
    {
      id: 'bio1-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En fargeblind mann (X^bY) får barn med en kvinne som er bærer (X^BX^b). Hva er sannsynligheten for at en sønn er fargeblind, og at en datter er fargeblind?',
      solution: 'Sønner: 50% fargeblinde (X^bY), 50% normale (X^BY). Døtre: 50% bærere (X^BX^b), 50% fargeblinde (X^bX^b). Altså 50% sjanse for fargeblind sønn og 50% sjanse for fargeblind datter. I dette tilfellet kan døtre bli fargeblinde fordi de kan arve X^b fra begge foreldre.',
    },
    {
      id: 'bio1-5-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et testcross?',
      options: [
        { id: 'a', text: 'Krysning med homozygot recessivt individ for å bestemme genotype', isCorrect: true },
        { id: 'b', text: 'Krysning mellom to heterozygote individer', isCorrect: false },
        { id: 'c', text: 'Krysning mellom søsken', isCorrect: false },
        { id: 'd', text: 'Krysning for å teste om genet er dominant', isCorrect: false },
      ],
      solution: 'Testcross er krysning med et homozygot recessivt individ (f.eks. aa) for å avsløre genotypen til et individ med dominant fenotype (ukjent om AA eller Aa).',
    },
  ],
};

// ============================================================================
// Kapittel 6: Evolusjon og naturlig utvalg
// ============================================================================

export const CHAPTER_BIOLOGI_1_6: TextbookChapter = {
  id: 'biologi-1-6',
  courseId: 'biologi-1',
  chapterNumber: '6',
  title: 'Evolusjon og naturlig utvalg',
  description: 'Darwins evolusjonsteori, naturlig utvalg, bevis for evolusjon og artsdannelse.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for Darwins evolusjonsteori',
    'forklare naturlig utvalg og adaptasjon',
    'beskrive bevis for evolusjon',
    'drøfte mekanismer for artsdannelse',
  ],
  content: [
    {
      id: 'bio1-6-intro',
      type: 'text',
      content: `# Evolusjon og naturlig utvalg

Evolusjon er endringer i allelfrekvenser i en populasjon over tid. Charles Darwin publiserte sin teori om evolusjon ved naturlig utvalg i 1859, og dette er fortsatt hjørnesteinen i moderne biologi.

## Darwins observasjoner

1. **Variasjon**: Individer i en populasjon varierer
2. **Arv**: Mange variasjoner er arvelige
3. **Overproduksjon**: Flere avkom fødes enn kan overleve
4. **Konkurranse**: Ressurser er begrensede`,
    },
    {
      id: 'bio1-6-def-naturlig-utvalg',
      type: 'definition',
      title: 'Naturlig utvalg',
      content: 'Naturlig utvalg er prosessen der individer med gunstige arvelige egenskaper har større sannsynlighet for å overleve og reprodusere. Over generasjoner øker frekvensen av fordelaktige alleler i populasjonen, noe som fører til adaptasjon (tilpasning) til miljøet.',
    },
    {
      id: 'bio1-6-mekanismer',
      type: 'text',
      content: `## Evolusjonære mekanismer

### 1. Naturlig utvalg
- Retningsbestemt: Favoriserer ekstreme fenotyper
- Stabiliserende: Favoriserer gjennomsnittlige fenotyper
- Splittende: Favoriserer begge ekstremer

### 2. Genetisk drift
- Tilfeldige endringer i allelfrekvenser
- Størst effekt i små populasjoner
- **Flaskehalseffekten**: Populasjonsreduksjon reduserer variasjon
- **Grunnleggereffekten**: Ny populasjon fra få individer

### 3. Genflyt
- Utveksling av alleler mellom populasjoner
- Motvirker genetisk differensiering

### 4. Mutasjoner
- Kilde til ny genetisk variasjon
- De fleste er nøytrale eller skadelige
- Sjelden fordelaktige, men viktige for evolusjon`,
    },
    {
      id: 'bio1-6-bevis',
      type: 'text',
      content: `## Bevis for evolusjon

### Fossilrekord
- Viser endringer over tid
- Overgangsformer (f.eks. Archaeopteryx)
- Kronologisk ordning i berglag

### Komparativ anatomi
- **Homologe strukturer**: Samme opprinnelse, ulik funksjon (arm, vinge, finne)
- **Analoge strukturer**: Ulik opprinnelse, lik funksjon (insekt- og fuglevinger)
- **Vestigiale strukturer**: Reduserte organer uten funksjon

### Molekylærbiologi
- DNA- og proteinsekvenser viser slektskap
- Universell genetisk kode
- Konserverte gener (Hox-gener)

### Biogeografi
- Artsmangfoldet gjenspeiler geografisk historie
- Øyer har unike arter avledet fra fastlandsslektninger

### Direkte observasjon
- Antibiotikaresistens hos bakterier
- Pesticidresistens hos insekter
- Darwins finker`,
    },
    {
      id: 'bio1-6-artsdannelse',
      type: 'text',
      content: `## Artsdannelse (speciasjon)

En art er en gruppe organismer som kan forplante seg og gi fertile avkom.

### Allopatrisk speciasjon
- Geografisk separasjon isolerer populasjoner
- Genetisk divergens over tid
- Reproduktiv isolasjon utvikles

### Sympatrisk speciasjon
- Artsdannelse uten geografisk isolasjon
- Kan skje via polyploidi (vanlig hos planter)
- Eller via habitatspesialisering

### Reproduktive barrierer
**Pre-zygotiske:**
- Habitat-, temporal-, atferds-, mekanisk isolasjon
- Gametisk inkompatibilitet

**Post-zygotiske:**
- Hybrid-inviabilitet
- Hybrid-sterilitet
- Hybrid-nedbryting`,
    },
    {
      id: 'bio1-6-example-1',
      type: 'example',
      title: 'Eksempel: Peppered moth (bjørkemåleren)',
      problem: 'Forklar hvordan bjørkemåleren (Biston betularia) illustrerer naturlig utvalg i praksis.',
      solution: `**Løsning:**

**Før industrialiseringen:**
- Lyse møll var kamuflert mot lys bjørkebark
- Mørke varianter ble lett sett og spist av fugler
- Lys form dominerte populasjonen

**Under industrialiseringen:**
- Sot dekket bjørkestammene
- Mørke møll ble nå bedre kamuflert
- Lyse møll ble lettere bytte
- Mørk form økte dramatisk i frekvens

**Etter Clean Air Act (1956):**
- Forurensningen ble redusert
- Bjørkebarken ble lysere igjen
- Lys form økte i frekvens på nytt

**Konklusjon:** Dette viser naturlig utvalg i sanntid - miljøendringer endrer hvilke fenotyper som favoriseres.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er naturlig utvalg?',
      options: [
        { id: 'a', text: 'Prosessen der individer med fordelaktige egenskaper overlever og reproduserer mer', isCorrect: true },
        { id: 'b', text: 'Tilfeldige endringer i allelfrekvenser', isCorrect: false },
        { id: 'c', text: 'Flytting av individer mellom populasjoner', isCorrect: false },
        { id: 'd', text: 'Endringer i DNA-sekvens', isCorrect: false },
      ],
      solution: 'Naturlig utvalg er prosessen der individer med arvelige egenskaper som gir bedre overlevelse og reproduksjon har flere avkom, slik at gunstige alleler blir vanligere.',
    },
    {
      id: 'bio1-6-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva homologe strukturer er og hvordan de er bevis for evolusjon.',
      solution: 'Homologe strukturer er organer med samme utviklingsmessige opprinnelse, men som kan ha ulike funksjoner. Eksempler: Menneskarm, fuglevinge, hvalbrysting, kattepote - alle har samme beinstruktur (overarm, underarm, håndledd, fingre). Dette tyder på at disse dyrene har felles stamfar, og at strukturene har blitt modifisert gjennom evolusjon til ulike funksjoner.',
    },
    {
      id: 'bio1-6-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er genetisk drift?',
      options: [
        { id: 'a', text: 'Tilfeldige endringer i allelfrekvenser, spesielt i små populasjoner', isCorrect: true },
        { id: 'b', text: 'Naturlig utvalg basert på miljøet', isCorrect: false },
        { id: 'c', text: 'Bevisst avl av dyr', isCorrect: false },
        { id: 'd', text: 'Mutasjoner som sprer seg i populasjonen', isCorrect: false },
      ],
      solution: 'Genetisk drift er tilfeldige endringer i allelfrekvenser fra generasjon til generasjon. Den har størst effekt i små populasjoner der tilfeldigheter kan ha stor innvirkning.',
    },
    {
      id: 'bio1-6-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv forskjellen mellom allopatrisk og sympatrisk speciasjon.',
      solution: 'Allopatrisk speciasjon skjer når populasjoner blir geografisk isolert (f.eks. av fjell, hav). Over tid akkumuleres genetiske forskjeller som fører til reproduktiv isolasjon. Sympatrisk speciasjon skjer uten geografisk barrierer, ofte via polyploidi hos planter eller habitatspesialisering. Allopatrisk speciasjon er vanligst hos dyr.',
    },
    {
      id: 'bio1-6-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan antibiotikaresistens hos bakterier illustrerer naturlig utvalg.',
      solution: 'Bakteriepopulasjoner har naturlig variasjon, inkludert noen individer med mutasjoner som gir resistens. Når antibiotika brukes, dør sensitive bakterier, mens resistente overlever og reproduserer. Over tid øker frekvensen av resistensgener i populasjonen. Dette er naturlig utvalg: miljøet (antibiotika) favoriserer visse egenskaper (resistens), og de arvelige trekkene som gir overlevelse blir vanligere.',
    },
    {
      id: 'bio1-6-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem regnes som grunnleggeren av evolusjonsteorien?',
      options: [
        { id: 'a', text: 'Charles Darwin', isCorrect: true },
        { id: 'b', text: 'Gregor Mendel', isCorrect: false },
        { id: 'c', text: 'Louis Pasteur', isCorrect: false },
        { id: 'd', text: 'James Watson', isCorrect: false },
      ],
      solution: 'Charles Darwin publiserte "On the Origin of Species" i 1859 og la grunnlaget for evolusjonsteorien ved naturlig utvalg.',
    },
  ],
};

// ============================================================================
// Kapittel 7: Økologi og økosystemer
// ============================================================================

export const CHAPTER_BIOLOGI_1_7: TextbookChapter = {
  id: 'biologi-1-7',
  courseId: 'biologi-1',
  chapterNumber: '7',
  title: 'Økologi og økosystemer',
  description: 'Økosystemers oppbygning, næringskjeder, energistrøm og stoffkretsløp.',
  estimatedMinutes: 75,
  competenceGoals: [
    'beskrive økosystemers oppbygning og funksjon',
    'forklare energistrøm og næringskjeder',
    'gjøre rede for karbonkretsløpet og nitrogenkretsløpet',
    'drøfte økologiske interaksjoner mellom arter',
  ],
  content: [
    {
      id: 'bio1-7-intro',
      type: 'text',
      content: `# Økologi og økosystemer

Økologi er studiet av samspillet mellom organismer og deres miljø. Et økosystem omfatter både de levende (biotiske) og ikke-levende (abiotiske) komponentene i et område.

## Økologiske nivåer

- **Individ**: Enkeltorganisme
- **Populasjon**: Individer av samme art i et område
- **Samfunn**: Alle populasjoner i et område
- **Økosystem**: Samfunn + abiotiske faktorer
- **Biom**: Store geografiske områder med liknende klima og arter
- **Biosfære**: Alle økosystemer på jorden`,
    },
    {
      id: 'bio1-7-def-okosystem',
      type: 'definition',
      title: 'Økosystem',
      content: 'Et økosystem er et avgrenset område der levende organismer (biotiske faktorer) samspiller med hverandre og med det ikke-levende miljøet (abiotiske faktorer som temperatur, lys, vann, næringsstoffer). Energi strømmer gjennom økosystemet, mens næringsstoffer sirkulerer.',
    },
    {
      id: 'bio1-7-energistrom',
      type: 'text',
      content: `## Energistrøm

Energi strømmer gjennom økosystemet i én retning.

### Trofiske nivåer
1. **Produsenter**: Autotrofe (planter, alger) - fanger solenergi
2. **Primærkonsumenter**: Herbivorer - spiser planter
3. **Sekundærkonsumenter**: Karnivorer - spiser herbivorer
4. **Tertiærkonsumenter**: Toppredatorer
5. **Nedbrytere**: Dekomponerer dødt materiale

### 10%-regelen
Bare ca. 10% av energien overføres til neste trofiske nivå. Resten tapes som varme gjennom metabolisme.

### Næringspyramide
Illustrerer avtagende energi/biomasse/antall oppover i næringskjeden.`,
    },
    {
      id: 'bio1-7-stoffkretslop',
      type: 'text',
      content: `## Stoffkretsløp

I motsetning til energi sirkulerer næringsstoffer i økosystemet.

### Karbonkretsløpet
1. **Fotosyntese**: CO₂ tas opp fra atmosfæren
2. **Respirasjon**: CO₂ frigjøres av alle organismer
3. **Nedbrytning**: Karbon frigjøres fra dødt materiale
4. **Fossilt brensel**: Karbon lagret over millioner av år
5. **Forbrenning**: Mennesker frigjør lagret karbon

### Nitrogenkretsløpet
1. **Nitrogenfiksering**: N₂ → ammonium (NH₄⁺) - bakterier
2. **Nitrifikasjon**: NH₄⁺ → nitrat (NO₃⁻) - bakterier
3. **Assimilasjon**: Planter tar opp nitrogen
4. **Ammonifikasjon**: Nedbrytning frigjør ammonium
5. **Denitrifikasjon**: NO₃⁻ → N₂ - bakterier`,
    },
    {
      id: 'bio1-7-interaksjoner',
      type: 'text',
      content: `## Økologiske interaksjoner

### Mellom arter
- **Konkurranse** (-/-): Begge arter påvirkes negativt
- **Predasjon** (+/-): Rovdyr dreper og spiser bytte
- **Parasittisme** (+/-): Parasitt utnytter vert
- **Mutualisme** (+/+): Begge arter tjener på forholdet
- **Kommensalisme** (+/0): Én art tjener, den andre upåvirket

### Eksempler på mutualisme
- Pollinering: Blomst + insekt
- Mykorrhiza: Sopp + planterøtter
- Nitrogenbindende bakterier + belgfrukter

### Nisje
En arts økologiske nisje beskriver dens rolle i økosystemet - hva den spiser, hvor den lever, når den er aktiv osv.`,
    },
    {
      id: 'bio1-7-example-1',
      type: 'example',
      title: 'Eksempel: Energistrøm i en næringskjede',
      problem: 'Gress produserer 10 000 kJ energi. Hvor mye energi er tilgjengelig for en ørn som spiser en hare som spiser gresset?',
      solution: `**Løsning:**

Bruker 10%-regelen:

**Trofisk nivå 1 (Gress - produsent):**
10 000 kJ

**Trofisk nivå 2 (Hare - primærkonsument):**
10 000 × 0.10 = 1000 kJ

**Trofisk nivå 3 (Ørn - sekundærkonsument):**
1000 × 0.10 = 100 kJ

**Svar:** Ørnen får ca. 100 kJ av den opprinnelige energien fra gresset. Dette er 1% av produsentenes energi.

Dette forklarer hvorfor næringskjeder sjelden har mer enn 4-5 trofiske nivåer.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-7-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en produsent i et økosystem?',
      options: [
        { id: 'a', text: 'En organisme som lager sin egen mat via fotosyntese', isCorrect: true },
        { id: 'b', text: 'En organisme som spiser andre organismer', isCorrect: false },
        { id: 'c', text: 'En organisme som bryter ned dødt materiale', isCorrect: false },
        { id: 'd', text: 'En toppredator', isCorrect: false },
      ],
      solution: 'Produsenter er autotrofe organismer (planter, alger) som fanger solenergi gjennom fotosyntese og omdanner den til kjemisk energi.',
    },
    {
      id: 'bio1-7-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor det bare er ca. 10% energioverføring mellom trofiske nivåer.',
      solution: 'Mesteparten av energien som tas opp av en organisme brukes til metabolisme (celleånding) og tapes som varme. Noe energi finnes i deler som ikke spises eller ikke fordøyes. Bare ca. 10% lagres i biomasse som kan overføres til neste nivå. Derfor avtar energimengden dramatisk oppover i næringskjeden.',
    },
    {
      id: 'bio1-7-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken prosess omdanner atmosfærisk nitrogen (N₂) til former planter kan bruke?',
      options: [
        { id: 'a', text: 'Nitrogenfiksering av bakterier', isCorrect: true },
        { id: 'b', text: 'Fotosyntese', isCorrect: false },
        { id: 'c', text: 'Denitrifikasjon', isCorrect: false },
        { id: 'd', text: 'Celleånding', isCorrect: false },
      ],
      solution: 'Nitrogenfiksering utføres av spesialiserte bakterier (som Rhizobium i belgfruktrøtter) som omdanner N₂ til ammonium (NH₄⁺) som planter kan ta opp.',
    },
    {
      id: 'bio1-7-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre hovedtrinnene i karbonkretsløpet.',
      solution: '1) Fotosyntese: Produsenter tar opp CO₂ fra atmosfæren og binder det i organiske molekyler. 2) Respirasjon: Alle organismer frigjør CO₂ gjennom celleånding. 3) Nedbrytning: Når organismer dør, frigjør nedbrytere karbon tilbake til atmosfæren. I tillegg lagres noe karbon langsiktig i fossilt brensel og sedimenter.',
    },
    {
      id: 'bio1-7-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva en økologisk nisje er og hvorfor to arter ikke kan ha helt identisk nisje i samme habitat.',
      solution: 'En økologisk nisje beskriver alle aspekter ved en arts rolle i økosystemet: hva den spiser, hvor den lever, når den er aktiv, hvilke ressurser den bruker. Ifølge konkurranseeksklusjonsprinsippet kan to arter ikke sameksistere hvis de har identiske nisjer - den ene vil utkonkurrere den andre. Arter som lever sammen har derfor nisjeseparasjon gjennom forskjellige ressursbruk, aktivitetstider eller habitatpreferanser.',
    },
    {
      id: 'bio1-7-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva karakteriserer mutualisme?',
      options: [
        { id: 'a', text: 'Begge arter har fordel av samspillet (+/+)', isCorrect: true },
        { id: 'b', text: 'Én art har fordel, den andre skades (+/-)', isCorrect: false },
        { id: 'c', text: 'Begge arter skades (-/-)', isCorrect: false },
        { id: 'd', text: 'Én art har fordel, den andre er upåvirket (+/0)', isCorrect: false },
      ],
      solution: 'Mutualisme er et samspill der begge arter har fordel. Eksempler er pollinering (blomst + insekt) og mykorrhiza (sopp + planterøtter).',
    },
  ],
};

// ============================================================================
// Kapittel 8: Biologisk mangfold
// ============================================================================

export const CHAPTER_BIOLOGI_1_8: TextbookChapter = {
  id: 'biologi-1-8',
  courseId: 'biologi-1',
  chapterNumber: '8',
  title: 'Biologisk mangfold',
  description: 'Biodiversitet, klassifisering av arter, trusler mot mangfoldet og bevaring.',
  estimatedMinutes: 70,
  competenceGoals: [
    'beskrive biodiversitet på ulike nivåer',
    'gjøre rede for systematikk og klassifisering',
    'identifisere trusler mot biologisk mangfold',
    'drøfte bevaringstiltak',
  ],
  content: [
    {
      id: 'bio1-8-intro',
      type: 'text',
      content: `# Biologisk mangfold

Biologisk mangfold (biodiversitet) omfatter alt liv på jorden - fra gener til arter til økosystemer. Mangfoldet er resultat av milliarder år med evolusjon og er grunnlaget for økosystemenes funksjoner.

## Tre nivåer av biodiversitet

1. **Genetisk diversitet**: Variasjon i gener innen arter
2. **Artsdiversitet**: Antall og variasjon av arter
3. **Økosystemdiversitet**: Variasjon i habitater og økologiske prosesser`,
    },
    {
      id: 'bio1-8-def-art',
      type: 'definition',
      title: 'Art',
      content: 'Det biologiske artsbegrepet definerer en art som en gruppe organismer som kan formere seg med hverandre og gi fertilt avkom. Denne definisjonen fungerer godt for seksuelt reproduserende organismer, men er problematisk for aseksuelle organismer og fossiler.',
    },
    {
      id: 'bio1-8-klassifisering',
      type: 'text',
      content: `## Systematikk og klassifisering

### Taksonomiske nivåer
Fra minst til mest inkluderende:
- **Art** (species)
- **Slekt** (genus)
- **Familie** (familia)
- **Orden** (ordo)
- **Klasse** (classis)
- **Rekke** (phylum)
- **Rike** (regnum)
- **Domene** (domain)

### De tre domenene
1. **Bacteria**: Prokaryoter, peptidoglykan-cellevegg
2. **Archaea**: Prokaryoter, unike membranlipider
3. **Eukarya**: Eukaryoter (protister, sopp, planter, dyr)

### Binominal nomenklatur
Linnés system: Slektsnavn + artsnavn
Eksempel: *Homo sapiens* (menneske)`,
    },
    {
      id: 'bio1-8-trusler',
      type: 'text',
      content: `## Trusler mot biologisk mangfold

### HIPPO-faktorene
- **H**abitat-ødeleggelse: Avskoging, urbanisering, landbruk
- **I**nvasive arter: Fremmede arter utkonkurrerer lokale
- **P**ollution: Forurensning av luft, vann, jord
- **P**opulasjonsvekst: Økende ressursbruk
- **O**verbeskatning: Overfiske, jakt, høsting

### Klimaendringer
- Arter klarer ikke tilpasse seg raskt nok
- Habitater endres eller forsvinner
- Fenologiske forskyvninger (timing av livssyklus)

### Sjette masseutryddelse
Vi opplever nå artsutryddelse 100-1000 ganger raskere enn bakgrunnsnivået.`,
    },
    {
      id: 'bio1-8-bevaring',
      type: 'text',
      content: `## Bevaring av biologisk mangfold

### Bevaringsstrategier
**In-situ bevaring** (på stedet):
- Nasjonalparker og verneområder
- Naturreservater
- Marine verneområder

**Ex-situ bevaring** (utenfor naturlig habitat):
- Zoologiske hager og akvarium
- Botaniske hager
- Genbanker og frøhvelv

### Rødlister
IUCN kategoriserer arter etter utryddingsrisiko:
- LC: Livskraftig
- NT: Nær truet
- VU: Sårbar
- EN: Sterkt truet
- CR: Kritisk truet
- EW: Utryddet i vill tilstand
- EX: Utryddet

### Økosystemtjenester
Biodiversitet gir goder til mennesker:
- Provisjonerende: Mat, vann, materialer
- Regulerende: Klimaregulering, vannrensing
- Kulturelle: Rekreasjon, spirituelle verdier
- Støttende: Næringssirkulering, jorddannelse`,
    },
    {
      id: 'bio1-8-example-1',
      type: 'example',
      title: 'Eksempel: Klassifisering av mennesket',
      problem: 'Angi den fullstendige klassifiseringen av mennesket (Homo sapiens) fra domene til art.',
      solution: `**Løsning:**

**Domene:** Eukarya (eukaryoter)
**Rike:** Animalia (dyr)
**Rekke:** Chordata (ryggstrengdyr)
**Klasse:** Mammalia (pattedyr)
**Orden:** Primates (primater)
**Familie:** Hominidae (menneskeaper)
**Slekt:** *Homo*
**Art:** *Homo sapiens*

**Huskeregel:** "Do Kings Play Chess On Fine Green Silk"
(Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species)`,
    },
  ],
  exercises: [
    {
      id: 'bio1-8-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er de tre nivåene av biologisk mangfold?',
      options: [
        { id: 'a', text: 'Genetisk diversitet, artsdiversitet, økosystemdiversitet', isCorrect: true },
        { id: 'b', text: 'Planter, dyr, sopp', isCorrect: false },
        { id: 'c', text: 'Produsenter, konsumenter, nedbrytere', isCorrect: false },
        { id: 'd', text: 'Bakterier, arkeer, eukaryoter', isCorrect: false },
      ],
      solution: 'Biodiversitet omfatter genetisk variasjon (innen arter), artsdiversitet (antall arter), og økosystemdiversitet (variasjon i habitater og prosesser).',
    },
    {
      id: 'bio1-8-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar HIPPO-faktorene som truer biologisk mangfold.',
      solution: 'HIPPO: H - Habitatødeleggelse (f.eks. avskoging), I - Invasive arter (fremmede arter som brunsneglen), P - Pollution/forurensning (plast, kjemikalier), P - Populasjonsvekst (økt ressursbruk), O - Overbeskatning (overfiske, jakt). Disse er de viktigste menneskeskapte truslene mot biodiversitet.',
    },
    {
      id: 'bio1-8-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er riktig rekkefølge av taksonomiske nivåer fra mest til minst inkluderende?',
      options: [
        { id: 'a', text: 'Domene - Rike - Rekke - Klasse - Orden - Familie - Slekt - Art', isCorrect: true },
        { id: 'b', text: 'Art - Slekt - Familie - Orden - Klasse - Rekke - Rike - Domene', isCorrect: false },
        { id: 'c', text: 'Rike - Domene - Klasse - Orden - Art - Slekt - Familie - Rekke', isCorrect: false },
        { id: 'd', text: 'Domene - Rekke - Rike - Orden - Klasse - Familie - Art - Slekt', isCorrect: false },
      ],
      solution: 'Fra mest til minst inkluderende: Domene, Rike, Rekke (Phylum), Klasse, Orden, Familie, Slekt (Genus), Art (Species).',
    },
    {
      id: 'bio1-8-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom in-situ og ex-situ bevaring.',
      solution: 'In-situ bevaring beskytter arter i deres naturlige habitat gjennom verneområder og nasjonalparker. Ex-situ bevaring beskytter arter utenfor naturlig habitat, f.eks. i dyreparker, botaniske hager, eller genbanker. Begge strategier er viktige: in-situ bevarer hele økosystemer, ex-situ fungerer som "forsikring" og kan brukes til reintroduksjon.',
    },
    {
      id: 'bio1-8-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter hvorfor det biologiske artsbegrepet er problematisk for noen organismer.',
      solution: 'Det biologiske artsbegrepet (kan formere seg og gi fertilt avkom) er problematisk for: 1) Aseksuelle organismer som bakterier - de reproduserer ikke seksuelt. 2) Fossiler - vi kan ikke teste om de kunne formere seg. 3) Hybridarter - noen hybrider er fertile (f.eks. ulv-hund). 4) Ringarter - nabopopulasjoner kan krysse seg, men endepunktene kan ikke. Alternative artsbegreper inkluderer morfologisk (utseende) og fylogenetisk (evolusjonær historie) artsbegrep.',
    },
    {
      id: 'bio1-8-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket vitenskapelig navn har mennesket?',
      options: [
        { id: 'a', text: 'Homo sapiens', isCorrect: true },
        { id: 'b', text: 'Sapiens homo', isCorrect: false },
        { id: 'c', text: 'Homo erectus', isCorrect: false },
        { id: 'd', text: 'Pan sapiens', isCorrect: false },
      ],
      solution: 'Menneskets vitenskapelige navn er Homo sapiens, der Homo er slektsnavnet og sapiens er artsnavnet (binominal nomenklatur).',
    },
  ],
};

// ============================================================================
// Kapittel 9: Bioteknologi grunnlag
// ============================================================================

export const CHAPTER_BIOLOGI_1_9: TextbookChapter = {
  id: 'biologi-1-9',
  courseId: 'biologi-1',
  chapterNumber: '9',
  title: 'Bioteknologi grunnlag',
  description: 'Grunnleggende bioteknologi, rekombinant DNA, PCR og genmodifiserte organismer.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare grunnleggende bioteknologiske metoder',
    'beskrive PCR og dens anvendelser',
    'gjøre rede for rekombinant DNA-teknologi',
    'drøfte genmodifiserte organismer (GMO)',
  ],
  content: [
    {
      id: 'bio1-9-intro',
      type: 'text',
      content: `# Bioteknologi grunnlag

Bioteknologi er bruk av levende organismer eller biologiske systemer til å lage produkter eller prosesser til nytte for mennesker. Moderne bioteknologi bygger på vår forståelse av DNA og genteknologi.

## Historisk perspektiv

- **Tradisjonell bioteknologi**: Gjæring (brød, øl, vin, ost) - tusenvis av år
- **Moderne bioteknologi**: DNA-teknologi - fra 1970-tallet
- **Genomera**: DNA-sekvensering og genredigering - fra 2000-tallet`,
    },
    {
      id: 'bio1-9-def-bioteknologi',
      type: 'definition',
      title: 'Bioteknologi',
      content: 'Bioteknologi er bruk av biologiske systemer, levende organismer eller deres derivater for å lage eller modifisere produkter eller prosesser for spesifikke formål. Dette inkluderer alt fra tradisjonell gjæring til moderne genredigering.',
    },
    {
      id: 'bio1-9-verktoy',
      type: 'text',
      content: `## Bioteknologiens verktøy

### Restriksjonsenzymer
- "Molekylære sakser" som klipper DNA
- Gjenkjenner spesifikke sekvenser (palindromer)
- Lager "klebrige" eller "butte" ender
- Eksempel: EcoRI klipper GAATTC

### DNA-ligase
- "Molekylær lim" som fester DNA-fragmenter
- Danner fosfodiesterbindinger

### Vektorer
- Bærere av fremmed DNA
- Plasmider (sirkulære DNA-molekyler i bakterier)
- Kan overføre gener mellom organismer

### Gelelektroforese
- Separerer DNA-fragmenter etter størrelse
- DNA vandrer mot positiv pol
- Små fragmenter beveger seg raskere`,
    },
    {
      id: 'bio1-9-pcr',
      type: 'text',
      content: `## PCR - Polymerase Chain Reaction

PCR er en metode for å kopiere (amplifisere) DNA-sekvenser.

### Komponenter
- DNA-templat (prøven)
- Primere (korte DNA-sekvenser)
- dNTPs (byggesteiner)
- Taq-polymerase (varmeresistent enzym)

### Trinnene i PCR (gjentatt 30-40 ganger)
1. **Denaturering** (94-98°C): DNA-trådene separeres
2. **Annealing** (50-65°C): Primere binder til templat
3. **Elongering** (72°C): Taq-polymerase syntetiserer DNA

### Anvendelser
- Diagnostikk (påvisning av sykdommer)
- Kriminalteknisk analyse (DNA-fingeravtrykk)
- Farskapstest
- Forskning
- COVID-19 testing`,
    },
    {
      id: 'bio1-9-rekombinant',
      type: 'text',
      content: `## Rekombinant DNA-teknologi

Rekombinant DNA er DNA satt sammen fra ulike kilder.

### Fremstilling
1. Isoler ønsket gen fra donor-organisme
2. Klipp genet ut med restriksjonsenzym
3. Klipp vektor (plasmid) med samme enzym
4. Sett genet inn i vektoren med ligase
5. Transformér vertscelle med rekombinant plasmid
6. Selekter celler med rekombinant DNA
7. Dyrk og høst produkt

### Eksempler på anvendelser
- **Insulin**: Humant insulin produsert i E. coli
- **Veksthormoner**: Behandling av dvergvekst
- **Vaksiner**: Hepatitt B-vaksine`,
    },
    {
      id: 'bio1-9-gmo',
      type: 'text',
      content: `## Genmodifiserte organismer (GMO)

GMO er organismer der arvestoffet er endret med genteknologi.

### Eksempler på GMO
- **Bt-mais**: Produserer insektgift (Bacillus thuringiensis-toksin)
- **Roundup Ready**: Tåler ugressmiddel (glyfosat)
- **Gyllen ris**: Inneholder provitamin A

### Fordeler
- Økt avling
- Redusert pesticidbehov
- Forbedret næringsinnhold
- Tørke- og salttoleranse

### Bekymringer
- Miljøpåvirkning
- Genspredning til ville planter
- Allergi og helseeffekter
- Økonomisk avhengighet av frøselskaper`,
    },
    {
      id: 'bio1-9-example-1',
      type: 'example',
      title: 'Eksempel: DNA-amplifisering med PCR',
      problem: 'Hvor mange DNA-kopier får man etter 20 sykluser med PCR, hvis man starter med ett DNA-molekyl?',
      solution: `**Løsning:**

PCR dobler antall DNA-molekyler i hver syklus.

**Formel:** Antall kopier = 2^n, der n = antall sykluser

**Beregning:**
2^20 = 1 048 576

**Svar:** Etter 20 sykluser får man over 1 million kopier av det opprinnelige DNA-molekylet.

Dette viser PCRs enorme amplifikasjonskraft - selv en minimal DNA-prøve kan gi nok materiale for analyse.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-9-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er funksjonen til restriksjonsenzymer?',
      options: [
        { id: 'a', text: 'Klippe DNA ved spesifikke sekvenser', isCorrect: true },
        { id: 'b', text: 'Kopiere DNA', isCorrect: false },
        { id: 'c', text: 'Lime DNA-fragmenter sammen', isCorrect: false },
        { id: 'd', text: 'Separere DNA-fragmenter', isCorrect: false },
      ],
      solution: 'Restriksjonsenzymer gjenkjenner spesifikke DNA-sekvenser og klipper DNA der. De fungerer som "molekylære sakser".',
    },
    {
      id: 'bio1-9-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre trinnene i én PCR-syklus.',
      solution: '1) Denaturering (94-98°C): Varme bryter hydrogenbindingene slik at DNA-dobbelthelixen separeres til enkelttråder. 2) Annealing (50-65°C): Temperaturen senkes slik at primerne kan binde seg til komplementære sekvenser på templatet. 3) Elongering (72°C): Taq-polymerase syntetiserer nye DNA-tråder ved å legge til nukleotider fra primeren.',
    },
    {
      id: 'bio1-9-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en vektor i genteknologi?',
      options: [
        { id: 'a', text: 'Et DNA-molekyl som kan overføre fremmed DNA til en vertscelle', isCorrect: true },
        { id: 'b', text: 'Et enzym som klipper DNA', isCorrect: false },
        { id: 'c', text: 'En metode for å kopiere DNA', isCorrect: false },
        { id: 'd', text: 'En type celle som kan ta opp DNA', isCorrect: false },
      ],
      solution: 'En vektor er et DNA-molekyl (ofte et plasmid) som kan bære fremmed DNA inn i en vertscelle og sikre at det kopieres.',
    },
    {
      id: 'bio1-9-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar trinnene i fremstilling av rekombinant DNA.',
      solution: '1) Isoler genet fra donor. 2) Klipp genet ut med restriksjonsenzym. 3) Klipp vektoren (plasmid) med samme enzym. 4) Bland gen og vektor - de har kompatible "klebrige" ender. 5) Bruk DNA-ligase til å feste genet i vektoren. 6) Transformér bakterier med rekombinant plasmid. 7) Selekter transformerte celler (ofte med antibiotikaresistens). 8) Dyrk og høst produkt.',
    },
    {
      id: 'bio1-9-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter fordeler og ulemper ved GMO-planter.',
      solution: 'Fordeler: Økt avling per areal, redusert behov for plantevernmidler (Bt-planter), forbedret næringsinnhold (gyllen ris), toleranse for tørke/salt. Ulemper: Risiko for genspredning til ville slektninger, utvikling av resistens hos skadedyr, usikkerhet om langtidseffekter, økonomisk avhengighet av store frøselskaper, redusert genetisk mangfold i landbruket, etiske bekymringer om "å leke Gud".',
    },
    {
      id: 'bio1-9-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva brukes gelelektroforese til?',
      options: [
        { id: 'a', text: 'Separere DNA-fragmenter etter størrelse', isCorrect: true },
        { id: 'b', text: 'Kopiere DNA-fragmenter', isCorrect: false },
        { id: 'c', text: 'Klippe DNA', isCorrect: false },
        { id: 'd', text: 'Lime DNA-fragmenter', isCorrect: false },
      ],
      solution: 'Gelelektroforese separerer DNA-fragmenter etter størrelse. DNA er negativt ladet og vandrer mot positiv pol gjennom gelen. Små fragmenter beveger seg raskere enn store.',
    },
  ],
};

// ============================================================================
// Kapittel 10: Kropp og helse
// ============================================================================

export const CHAPTER_BIOLOGI_1_10: TextbookChapter = {
  id: 'biologi-1-10',
  courseId: 'biologi-1',
  chapterNumber: '10',
  title: 'Kropp og helse',
  description: 'Immunforsvar, smittsomme sykdommer, vaksiner og antibiotikaresistens.',
  estimatedMinutes: 80,
  competenceGoals: [
    'beskrive immunforsvarets oppbygning og funksjon',
    'forklare hvordan vaksiner virker',
    'gjøre rede for smittsomme sykdommer',
    'drøfte antibiotikaresistens og folkehelse',
  ],
  content: [
    {
      id: 'bio1-10-intro',
      type: 'text',
      content: `# Kropp og helse

Kroppen har sofistikerte forsvarssystemer som beskytter mot sykdomsfremkallende organismer (patogener). Forståelse av disse systemene er grunnleggende for å forstå sykdom, vaksiner og moderne medisin.

## Patogener

Sykdomsfremkallende organismer inkluderer:
- **Virus**: Ikke-levende partikler som krever vertsceller
- **Bakterier**: Prokaryote enkeltcellede organismer
- **Sopp**: Eukaryote organismer (gjærsopp, muggsopp)
- **Parasitter**: Protozoer, ormer`,
    },
    {
      id: 'bio1-10-def-immunitet',
      type: 'definition',
      title: 'Immunitet',
      content: 'Immunitet er kroppens evne til å motstå sykdom. Det medfødte immunforsvaret gir rask, uspesifikk beskyttelse. Det ervervede (adaptive) immunforsvaret er spesifikt og utvikler hukommelse mot spesifikke patogener.',
    },
    {
      id: 'bio1-10-medfodt',
      type: 'text',
      content: `## Medfødt immunforsvar

Første forsvarslinje - rask og uspesifikk.

### Fysiske barrierer
- **Hud**: Ugjennomtrengelig for de fleste patogener
- **Slimhinner**: Fanger patogener
- **Flimmerhår**: Beveger slim ut av luftveier

### Kjemiske barrierer
- **Magesyre**: Dreper mikroorganismer
- **Lysozym**: Enzym i tårer og spytt
- **Sekret**: Antibakterielle stoffer i slim

### Cellulært forsvar
- **Fagocytter**: Spiser patogener (makrofager, nøytrofile)
- **NK-celler**: Dreper virusinfiserte celler
- **Inflammasjon**: Rødhet, hevelse, varme, smerte - rekrutterer immunceller`,
    },
    {
      id: 'bio1-10-ervervet',
      type: 'text',
      content: `## Ervervet immunforsvar

Spesifikt forsvar som utvikler hukommelse.

### Antigener og antistoffer
- **Antigen**: Molekyl som utløser immunrespons
- **Antistoff**: Y-formet protein som binder spesifikt til antigen

### B-celler (humoral immunitet)
- Produserer antistoffer
- Utvikler til plasmaceller og hukommelsesceller
- Antistoffer nøytraliserer patogener

### T-celler (cellulær immunitet)
- **Hjelper-T-celler (CD4+)**: Aktiverer andre immunceller
- **Cytotoksiske T-celler (CD8+)**: Dreper infiserte celler
- Gjenkjenner antigener presentert på MHC-molekyler

### Immunologisk hukommelse
- Hukommelsesceller lever lenge
- Raskere og sterkere respons ved re-infeksjon
- Grunnlaget for vaksinasjon`,
    },
    {
      id: 'bio1-10-vaksiner',
      type: 'text',
      content: `## Vaksiner

Vaksiner trener immunforsvaret uten å forårsake sykdom.

### Vaksinetyper
1. **Levende, svekkede**: Svekket patogen (MMR)
2. **Inaktiverte**: Drept patogen (influensa)
3. **Subenhet**: Bare antigener (hepatitt B)
4. **Toksoider**: Inaktivert toksin (tetanus)
5. **mRNA**: Genetisk kode for antigen (COVID-19)

### Hvordan vaksiner virker
1. Vaksineantigener presenteres for immunforsvaret
2. B- og T-celler aktiveres
3. Hukommelsesceller dannes
4. Ved senere eksponering: Rask sekundærrespons

### Flokkimmunitet
Når nok av befolkningen er immune, begrenses smittespredning og uvaksinerte beskyttes indirekte.`,
    },
    {
      id: 'bio1-10-antibiotika',
      type: 'text',
      content: `## Antibiotikaresistens

Antibiotika dreper bakterier eller hemmer deres vekst, men misbruk fører til resistens.

### Hvordan antibiotika virker
- Hemmer celleveggsyntese (penicillin)
- Hemmer proteinsyntese (tetracyklin)
- Hemmer DNA-replikasjon (fluorokinoloner)

### Resistensmekanismer
- Enzymer som bryter ned antibiotika
- Endrede målmolekyler
- Efflukspumper som pumper ut antibiotika
- Redusert permeabilitet

### Hvorfor resistens utvikles
- Naturlig utvalg: Resistente bakterier overlever
- Overforbruk i medisin og landbruk
- Horisontal genoverføring sprer resistensgener

### Konsekvenser
- Infeksjoner blir vanskeligere å behandle
- Økt dødelighet
- Lengre sykehusopphold
- Høyere kostnader`,
    },
    {
      id: 'bio1-10-example-1',
      type: 'example',
      title: 'Eksempel: Primær vs sekundær immunrespons',
      problem: 'Forklar hvorfor man vanligvis ikke blir syk andre gang man utsettes for samme virus.',
      solution: `**Løsning:**

**Primær immunrespons (første eksponering):**
- Tar 1-2 uker å utvikle tilstrekkelige antistoffer
- Få naive B- og T-celler gjenkjenner antigenet
- Personen kan bli syk mens immunforsvaret bygges opp

**Sekundær immunrespons (andre eksponering):**
- Hukommelsesceller fra første eksponering aktiveres raskt
- Respons på timer til dager, ikke uker
- Mye raskere og kraftigere antistoffproduksjon
- Patogenet elimineres før symptomer utvikles

**Konklusjon:** Immunologisk hukommelse gir langvarig beskyttelse. Dette er prinsippet bak vaksinasjon - vi "trener" immunforsvaret uten å bli syke.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-10-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke celler produserer antistoffer?',
      options: [
        { id: 'a', text: 'B-celler / plasmaceller', isCorrect: true },
        { id: 'b', text: 'T-celler', isCorrect: false },
        { id: 'c', text: 'Makrofager', isCorrect: false },
        { id: 'd', text: 'NK-celler', isCorrect: false },
      ],
      solution: 'B-celler differensierer til plasmaceller som produserer store mengder antistoffer. Antistoffene binder til antigener og nøytraliserer patogener.',
    },
    {
      id: 'bio1-10-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom det medfødte og det ervervede immunforsvaret.',
      solution: 'Det medfødte immunforsvaret er første forsvarslinje - det er raskt (minutter-timer), uspesifikt, og har ingen hukommelse. Inkluderer barrierer, fagocytter og inflammasjon. Det ervervede immunforsvaret er spesifikt for hvert patogen, tar lengre tid å aktivere (dager-uker), og utvikler hukommelse som gir langvarig beskyttelse. Inkluderer B-celler og T-celler.',
    },
    {
      id: 'bio1-10-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er flokkimmunitet?',
      options: [
        { id: 'a', text: 'Indirekte beskyttelse av uvaksinerte når nok av befolkningen er immune', isCorrect: true },
        { id: 'b', text: 'Immunitet som arves fra foreldre', isCorrect: false },
        { id: 'c', text: 'Immunitet som overføres gjennom morsmelk', isCorrect: false },
        { id: 'd', text: 'Vaksinasjon av alle i en befolkning', isCorrect: false },
      ],
      solution: 'Flokkimmunitet oppstår når en høy andel av befolkningen er immune (gjennom vaksinasjon eller tidligere infeksjon). Dette begrenser smittespredning slik at også uvaksinerte (f.eks. spedbarn, immunsvake) får indirekte beskyttelse.',
    },
    {
      id: 'bio1-10-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan antibiotikaresistens utvikles gjennom naturlig utvalg.',
      solution: 'Bakteriepopulasjoner har naturlig variasjon - noen individer har mutasjoner som gir resistens. Når antibiotika brukes, dør sensitive bakterier, men resistente overlever og formerer seg. Frekvensen av resistensgener øker i populasjonen over tid. Overforbruk av antibiotika gir sterkere seleksjonstrykk og raskere utvikling av resistens. Horisontal genoverføring kan spre resistensgener mellom arter.',
    },
    {
      id: 'bio1-10-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan mRNA-vaksiner (som COVID-19-vaksiner) virker.',
      solution: 'mRNA-vaksiner inneholder genetisk informasjon (mRNA) som koder for et antigen (f.eks. spike-protein hos SARS-CoV-2). 1) mRNA injiseres og tas opp av celler. 2) Cellens ribosomer bruker mRNA til å lage antigenproteinet. 3) Antigenet presenteres på cellemembranen og gjenkjennes av immunforsvaret. 4) B- og T-celler aktiveres og hukommelsesceller dannes. 5) mRNA brytes raskt ned - det integreres ikke i DNA. Ved senere eksponering gir hukommelsescellene rask beskyttelse.',
    },
    {
      id: 'bio1-10-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er funksjonen til cytotoksiske T-celler?',
      options: [
        { id: 'a', text: 'Drepe infiserte celler og kreftceller', isCorrect: true },
        { id: 'b', text: 'Produsere antistoffer', isCorrect: false },
        { id: 'c', text: 'Fagocytere bakterier', isCorrect: false },
        { id: 'd', text: 'Aktivere inflammasjon', isCorrect: false },
      ],
      solution: 'Cytotoksiske T-celler (CD8+) gjenkjenner infiserte celler som viser fremmede antigener på MHC-I-molekyler, og dreper dem ved å utløse apoptose (programmert celledød).',
    },
  ],
};

// ============================================================================
// Eksport alle kapitler
// ============================================================================

export const BIOLOGI_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_1,
  CHAPTER_BIOLOGI_1_2,
  CHAPTER_BIOLOGI_1_3,
  CHAPTER_BIOLOGI_1_4,
  CHAPTER_BIOLOGI_1_5,
  CHAPTER_BIOLOGI_1_6,
  CHAPTER_BIOLOGI_1_7,
  CHAPTER_BIOLOGI_1_8,
  CHAPTER_BIOLOGI_1_9,
  CHAPTER_BIOLOGI_1_10,
];

export function getBiologi1Chapter(chapterId: string): TextbookChapter | undefined {
  return BIOLOGI_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}
