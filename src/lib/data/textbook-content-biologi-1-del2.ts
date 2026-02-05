/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Del 2
 * Utvidet kapittel 2: Celleånding og fotosyntese (5 delkapitler)
 *
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Energi og metabolisme
// ============================================================================

export const CHAPTER_BIOLOGI_1_2_1: TextbookChapter = {
  id: 'biologi-1-2-1',
  courseId: 'biologi-1',
  chapterNumber: '2.1',
  title: 'Energi og metabolisme',
  description: 'ATP som energivaluta, anabolisme vs katabolisme, enzymer og aktiveringsenergi.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare ATP sin rolle som cellens energivaluta',
    'beskrive forskjellen mellom anabolisme og katabolisme',
    'gjøre rede for enzymers funksjon og aktiveringsenergi',
    'forstå hvordan energi overføres i biologiske systemer',
  ],
  content: [
    {
      id: 'bio1-2-1-intro',
      type: 'text',
      content: `# Energi og metabolisme

Alle levende celler trenger energi for å utføre sine funksjoner. Denne energien kommer fra nedbrytning av næringsstoffer og lagres midlertidig i molekyler som ATP. I dette kapittelet skal vi se på hvordan celler håndterer energi gjennom metabolisme.

## Energi i biologiske systemer

Energi kan verken skapes eller ødelegges, bare omdannes fra en form til en annen (termodynamikkens første lov). I celler omdannes kjemisk energi i næringsstoffer til:

- **Mekanisk energi** (muskelbevegelse)
- **Elektrisk energi** (nervesignaler)
- **Kjemisk energi** (syntese av nye molekyler)
- **Varme** (biprodukt av alle energiomsetninger)

Den andre termodynamiske lov sier at ved hver energiomdanning vil noe energi gå tapt som varme, og entropien (uorden) øker.`,
    },
    {
      id: 'bio1-2-1-def-metabolisme',
      type: 'definition',
      title: 'Metabolisme',
      content: 'Metabolisme (stoffskifte) er summen av alle kjemiske reaksjoner som skjer i en levende organisme. Metabolismen deles i to hovedkategorier: katabolisme (nedbrytningsreaksjoner som frigjør energi) og anabolisme (oppbyggingsreaksjoner som krever energi).',
    },
    {
      id: 'bio1-2-1-atp',
      type: 'text',
      content: `## ATP - Cellens energivaluta

ATP (adenosintrifosfat) er det viktigste energibærende molekylet i alle levende celler. Det fungerer som en universell energivaluta som kobler energifrigjørende og energikrevende reaksjoner.

### ATP-molekylets struktur

ATP består av tre komponenter:
1. **Adenin** - en nitrogenbase
2. **Ribose** - et sukker med fem karbonatomer
3. **Tre fosfatgrupper** - bundet i en kjede

Fosfatgruppene er bundet sammen med høyenergi-bindinger. Når den ytterste fosfatgruppen spaltes av, frigjøres energi:

$$\\text{ATP} + H_2O \\rightarrow \\text{ADP} + P_i + \\text{energi (30,5 kJ/mol)}$$

### ATP-ADP-syklusen

ATP regenereres kontinuerlig i cellen:
- **Celleånding**: Produserer ATP fra ADP + $P_i$
- **Cellearbeid**: Forbruker ATP ved å spalte det til ADP + $P_i$

En menneskecelle kan inneholde ca. 1 milliard ATP-molekyler, og kroppen omsetter omtrent sin egen kroppsvekt i ATP hver dag!`,
    },
    {
      id: 'bio1-2-1-def-atp',
      type: 'definition',
      title: 'ATP (Adenosintrifosfat)',
      content: 'ATP er et nukleotid som fungerer som cellens primære energibærer. Energien lagres i bindingene mellom fosfatgruppene. Ved hydrolyse av ATP til ADP (adenosindifosfat) og uorganisk fosfat ($P_i$) frigjøres ca. 30,5 kJ/mol som kan drive energikrevende prosesser.',
    },
    {
      id: 'bio1-2-1-anabolisme-katabolisme',
      type: 'text',
      content: `## Anabolisme og katabolisme

Metabolismen består av to motsatte prosesser som er tett koblet sammen:

### Katabolisme (nedbrytning)
- Bryter ned komplekse molekyler til enklere molekyler
- **Frigjør energi** som fanges opp i ATP
- Eksempler:
  - Celleånding: $C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O$
  - Nedbrytning av proteiner til aminosyrer
  - Nedbryting av fett til fettsyrer og glyserol

### Anabolisme (oppbygging)
- Bygger opp komplekse molekyler fra enklere byggesteiner
- **Krever energi** fra ATP
- Eksempler:
  - Proteinsyntese fra aminosyrer
  - DNA-replikasjon
  - Syntese av fosfolipider til membraner
  - Fotosyntese: $6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2$

### Koblingen mellom dem

Katabolisme og anabolisme er koblet gjennom ATP:

$$\\text{Katabolisme} \\xrightarrow{\\text{produserer}} \\text{ATP} \\xrightarrow{\\text{driver}} \\text{Anabolisme}$$

I tillegg fungerer elektronbærere som NADH og FADH$_2$ som bro mellom de to prosessene.`,
    },
    {
      id: 'bio1-2-1-enzymer',
      type: 'text',
      content: `## Enzymer og aktiveringsenergi

Metabolske reaksjoner ville gå ekstremt sakte uten katalysatorer. Enzymer er biologiske katalysatorer som gjør at reaksjoner kan skje raskt nok til å opprettholde liv.

### Aktiveringsenergi

For at en kjemisk reaksjon skal skje, må reaktantene først nå en høyenergi-tilstand kalt overgangstilstanden. Energien som kreves for å nå denne tilstanden kalles **aktiveringsenergi** ($E_a$).

Selv eksoterme reaksjoner (som frigjør energi netto) trenger aktiveringsenergi for å starte.

### Hvordan enzymer virker

Enzymer senker aktiveringsenergibarrieren ved å:

1. **Binde substratet** i det aktive setet
2. **Stabilisere overgangstilstanden**
3. **Skape et optimalt mikromiljø** for reaksjonen
4. **Orientere reaktantene** for effektiv reaksjon

Enzymet selv endres ikke permanent og kan brukes igjen og igjen.

### Enzym-substrat-komplekset

$$E + S \\rightleftharpoons ES \\rightarrow E + P$$

Der E = enzym, S = substrat, P = produkt

### Enzymspesifisitet

De fleste enzymer er svært spesifikke - de katalyserer bare én eller noen få beslektede reaksjoner. Dette skyldes at substratets form må passe til enzymets aktive sete (nøkkel-lås-modellen eller indusert tilpasning).`,
    },
    {
      id: 'bio1-2-1-def-enzym',
      type: 'definition',
      title: 'Enzym',
      content: 'Et enzym er et protein (eller i noen tilfeller RNA) som fungerer som biologisk katalysator. Enzymet senker aktiveringsenergibarrieren for en spesifikk kjemisk reaksjon uten selv å forbrukes. Enzymer har et aktivt sete der substratet binder seg, og mange enzymer krever kofaktorer (metall-ioner) eller koenzymer (organiske molekyler som vitaminer) for å fungere.',
    },
    {
      id: 'bio1-2-1-eksempel-1',
      type: 'example',
      title: 'Eksempel: Enzymaktivitet og temperatur',
      problem: 'Forklar hvorfor enzymer har en optimal temperatur, og hva som skjer hvis temperaturen blir for høy eller for lav.',
      solution: `**Løsning:**

**Ved lav temperatur:**
- Molekylene beveger seg sakte
- Færre kollisjoner mellom enzym og substrat
- Reaksjonshastigheten er lav
- Enzymet er fortsatt intakt

**Ved optimal temperatur (ca. 37°C for menneskeenzymer):**
- God balanse mellom molekylhastighet og enzymstabilitet
- Maksimal reaksjonshastighet
- Enzymets tredimensjonale struktur er bevart

**Ved for høy temperatur:**
- Enzymets svake bindinger brytes (hydrogenbindinger, ionebindinger)
- Proteinstrukturen foldes ut (denaturering)
- Det aktive setet mister sin form
- Enzymet inaktiveres permanent
- Reaksjonshastigheten faller dramatisk

**Konklusjon:** Enzymer har en optimal temperatur fordi det er en avveining mellom økt reaksjonshastighet og risiko for denaturering. For de fleste menneskeenzymer er optimum rundt 37°C.`,
    },
    {
      id: 'bio1-2-1-eksempel-2',
      type: 'example',
      title: 'Eksempel: ATP-forbruk ved muskelarbeid',
      problem: 'Under en 100-meter sprint forbruker en sprinter omtrent 2 mol ATP per sekund. Hvis kroppen inneholder ca. 50 gram ATP til enhver tid, hvor raskt må ATP regenereres?',
      solution: `**Løsning:**

**Gitt:**
- ATP-forbruk: 2 mol/s
- Molvekt av ATP: ca. 507 g/mol
- Kroppens ATP-innhold: ca. 50 g

**Beregning:**

Antall mol ATP i kroppen:
$$n = \\frac{50 \\text{ g}}{507 \\text{ g/mol}} \\approx 0,1 \\text{ mol}$$

Tid før alt ATP er brukt opp (uten regenerering):
$$t = \\frac{0,1 \\text{ mol}}{2 \\text{ mol/s}} = 0,05 \\text{ s}$$

**Konklusjon:**
- Uten regenerering ville alt ATP i kroppen vært brukt opp på bare 0,05 sekunder!
- Dette viser at ATP må regenereres ekstremt raskt
- ATP-ADP-syklusen snur seg tusenvis av ganger per sekund
- Under intens aktivitet er celleåndingen på maksimal kapasitet`,
    },
    {
      id: 'bio1-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Metabolisme** er summen av alle kjemiske reaksjoner i cellen
- **Katabolisme** bryter ned molekyler og frigjør energi
- **Anabolisme** bygger opp molekyler og krever energi
- **ATP** er cellens universelle energivaluta
- ATP spaltes til ADP + $P_i$ ved energifrigivning
- ATP regenereres fra ADP + $P_i$ ved celleånding
- **Aktiveringsenergi** er energien som trengs for å starte en reaksjon
- **Enzymer** er biologiske katalysatorer som senker aktiveringsenergibarrieren
- Enzymer er spesifikke og påvirkes av temperatur og pH`,
    },
  ],
  exercises: [
    {
      id: 'bio1-2-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skjer når ATP spaltes til ADP og fosfat?',
      options: [
        { id: 'a', text: 'Energi frigjøres', isCorrect: true },
        { id: 'b', text: 'Energi lagres', isCorrect: false },
        { id: 'c', text: 'Et enzym dannes', isCorrect: false },
        { id: 'd', text: 'Et protein brytes ned', isCorrect: false },
      ],
      solution: 'Når ATP hydrolyseres til ADP og uorganisk fosfat (Pi), frigjøres ca. 30,5 kJ/mol energi som kan brukes til å drive energikrevende prosesser i cellen.',
    },
    {
      id: 'bio1-2-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom anabolisme og katabolisme, og gi to eksempler på hver.',
      solution: 'Katabolisme er nedbrytningsreaksjoner som frigjør energi. Eksempler: 1) Celleånding (nedbrytning av glukose), 2) Nedbrytning av proteiner til aminosyrer. Anabolisme er oppbyggingsreaksjoner som krever energi. Eksempler: 1) Proteinsyntese fra aminosyrer, 2) DNA-replikasjon. De to prosessene er koblet gjennom ATP - katabolismen produserer ATP som anabolismen forbruker.',
    },
    {
      id: 'bio1-2-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan påvirker enzymer aktiveringsenergibarrieren for en reaksjon?',
      options: [
        { id: 'a', text: 'De senker aktiveringsenergibarrieren', isCorrect: true },
        { id: 'b', text: 'De øker aktiveringsenergibarrieren', isCorrect: false },
        { id: 'c', text: 'De endrer ikke aktiveringsenergibarrieren', isCorrect: false },
        { id: 'd', text: 'De fjerner aktiveringsenergibarrieren helt', isCorrect: false },
      ],
      solution: 'Enzymer senker aktiveringsenergibarrieren ved å stabilisere overgangstilstanden, orientere reaktantene optimalt og skape et gunstig mikromiljø. De fjerner ikke barrieren helt, men gjør at flere molekyler har tilstrekkelig energi til å reagere.',
    },
    {
      id: 'bio1-2-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv ATP-molekylets struktur og forklar hvorfor det er egnet som energivaluta.',
      solution: 'ATP består av adenin (nitrogenbase), ribose (pentose-sukker) og tre fosfatgrupper bundet i en kjede. Det er egnet som energivaluta fordi: 1) Fosfatgruppene er negativt ladet og frastøter hverandre, noe som gjør bindingene ustabile og energirike. 2) Hydrolyse av den ytterste fosfatbindingen frigjør akkurat nok energi (30,5 kJ/mol) til å drive de fleste cellulære prosesser. 3) ATP kan raskt regenereres fra ADP. 4) Det er et relativt lite molekyl som lett kan diffundere i cellen.',
    },
    {
      id: 'bio1-2-1-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket av følgende er et eksempel på katabolisme?',
      options: [
        { id: 'a', text: 'Nedbrytning av glukose i celleånding', isCorrect: true },
        { id: 'b', text: 'Syntese av proteiner fra aminosyrer', isCorrect: false },
        { id: 'c', text: 'Kopiering av DNA', isCorrect: false },
        { id: 'd', text: 'Dannelse av cellemembran', isCorrect: false },
      ],
      solution: 'Nedbrytning av glukose i celleånding er katabolisme fordi et komplekst molekyl (glukose) brytes ned til enklere molekyler (CO2 og H2O) og energi frigjøres. De andre alternativene er eksempler på anabolisme.',
    },
    {
      id: 'bio1-2-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor denaturering av enzymer ved høy temperatur ofte er irreversibel, mens redusert aktivitet ved lav temperatur er reversibel.',
      solution: 'Ved lav temperatur senkes reaksjonshastigheten fordi molekylene beveger seg sakte og det blir færre kollisjoner mellom enzym og substrat. Enzymets tredimensjonale struktur er bevart, så aktiviteten kan økes igjen når temperaturen stiger. Ved høy temperatur brytes de svake bindingene som holder enzymets struktur (hydrogenbindinger, ionebindinger, hydrofobe interaksjoner). Proteinet folder seg ut og det aktive setet mister sin spesifikke form. Denne denatureringen er ofte irreversibel fordi det krever mye energi og spesifikke cellulære maskineri (chaperoner) for å folde proteinet korrekt igjen.',
    },
  ],
};

// ============================================================================
// Kapittel 2.2: Glykolyse
// ============================================================================

export const CHAPTER_BIOLOGI_1_2_2: TextbookChapter = {
  id: 'biologi-1-2-2',
  courseId: 'biologi-1',
  chapterNumber: '2.2',
  title: 'Glykolyse',
  description: 'Glykolysens 10 trinn, nettoutbytte, regulering og lokalisering i cytoplasma.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive hvor glykolysen foregår og hva den produserer',
    'gjøre rede for glykolysens hovedtrinn og nettoutbytte',
    'forklare hvordan glykolysen reguleres',
    'forstå glykolysens rolle i både aerob og anaerob metabolisme',
  ],
  content: [
    {
      id: 'bio1-2-2-intro',
      type: 'text',
      content: `# Glykolyse

Glykolyse (fra gresk *glykys* = søt og *lysis* = spalting) er den første fasen av cellulær glukosemetabolisme. Dette er en urgammel metabolsk vei som finnes i nesten alle levende organismer.

## Oversikt over glykolysen

**Lokalisering:** Cytoplasma (cytosol)

**Totalreaksjon:**
$$C_6H_{12}O_6 + 2\\text{NAD}^+ + 2\\text{ADP} + 2P_i \\rightarrow 2C_3H_4O_3 + 2\\text{NADH} + 2H^+ + 2\\text{ATP}$$

**Forenklet:**
$$\\text{Glukose (6C)} \\rightarrow 2 \\text{ Pyruvat (3C)}$$

Glykolysen krever ingen oksygen og kan derfor foregå under både aerobe og anaerobe forhold.`,
    },
    {
      id: 'bio1-2-2-def-glykolyse',
      type: 'definition',
      title: 'Glykolyse',
      content: 'Glykolyse er en metabolsk vei som bryter ned ett glukosemolekyl (6 karbon) til to pyruvatmolekyler (3 karbon) gjennom ti enzymkatalyserte reaksjoner. Prosessen foregår i cytoplasma, produserer 2 ATP netto og 2 NADH, og er det første trinnet i både aerob og anaerob energiomsetning.',
    },
    {
      id: 'bio1-2-2-faser',
      type: 'text',
      content: `## Glykolysens to faser

Glykolysen deles i to hovedfaser:

### Fase 1: Energiinvesteringsfasen (trinn 1-5)
- Glukose aktiveres ved fosforylering
- **2 ATP forbrukes** for å fosforylere glukose
- Glukose spaltes til to triosefosfater

### Fase 2: Energihøstingsfasen (trinn 6-10)
- Triosefosfatene oksideres
- **4 ATP produseres** (substratfosforylering)
- **2 NADH produseres**
- 2 pyruvatmolekyler dannes

### Nettoutbytte

| Produkt | Produsert | Forbrukt | Netto |
|---------|-----------|----------|-------|
| ATP | 4 | 2 | **2** |
| NADH | 2 | 0 | **2** |
| Pyruvat | 2 | 0 | **2** |`,
    },
    {
      id: 'bio1-2-2-trinn',
      type: 'text',
      content: `## Glykolysens 10 trinn

### Fase 1: Energiinvestering

**Trinn 1: Fosforylering av glukose**
- Enzym: *Heksokinase*
- Glukose + ATP → Glukose-6-fosfat + ADP
- Fanger glukose i cellen (fosforylerte molekyler kan ikke krysse membranen)

**Trinn 2: Isomerisering**
- Enzym: *Fosfoglukoseisomerase*
- Glukose-6-fosfat ⇌ Fruktose-6-fosfat
- Omdanner aldose til ketose

**Trinn 3: Ny fosforylering**
- Enzym: *Fosfofruktokinase-1 (PFK-1)*
- Fruktose-6-fosfat + ATP → Fruktose-1,6-bisfosfat + ADP
- **Viktigste regulatoriske trinn** i glykolysen

**Trinn 4: Spalting**
- Enzym: *Aldolase*
- Fruktose-1,6-bisfosfat → Glyceraldehyd-3-fosfat + Dihydroksyacetonfosfat
- 6-karbon-sukker → to 3-karbon-sukker

**Trinn 5: Isomerisering**
- Enzym: *Triosefosfatisomerase*
- Dihydroksyacetonfosfat ⇌ Glyceraldehyd-3-fosfat
- Fra nå av: alle reaksjoner skjer to ganger (for hver triose)`,
    },
    {
      id: 'bio1-2-2-trinn2',
      type: 'text',
      content: `### Fase 2: Energihøsting

**Trinn 6: Oksidasjon og fosforylering**
- Enzym: *Glyceraldehyd-3-fosfat-dehydrogenase (GAPDH)*
- Glyceraldehyd-3-fosfat + NAD$^+$ + $P_i$ → 1,3-bisfosfoglyserat + NADH + H$^+$
- **Første punkt der energi høstes** (NADH dannes)

**Trinn 7: Substratfosforylering**
- Enzym: *Fosfoglyserat-kinase*
- 1,3-bisfosfoglyserat + ADP → 3-fosfoglyserat + ATP
- **Første ATP produseres**

**Trinn 8: Isomerisering**
- Enzym: *Fosfoglyserat-mutase*
- 3-fosfoglyserat ⇌ 2-fosfoglyserat
- Fosfatgruppen flyttes

**Trinn 9: Dehydrering**
- Enzym: *Enolase*
- 2-fosfoglyserat → Fosfoenolpyruvat (PEP) + H$_2$O
- Skaper høyenergi-fosfatforbindelse

**Trinn 10: Substratfosforylering**
- Enzym: *Pyruvat-kinase*
- PEP + ADP → Pyruvat + ATP
- **Andre ATP produseres**`,
    },
    {
      id: 'bio1-2-2-def-substratfosforylering',
      type: 'definition',
      title: 'Substratfosforylering',
      content: 'Substratfosforylering er en type ATP-syntese der en fosfatgruppe overføres direkte fra et høyenergi-substrat til ADP. Dette skjer to ganger i glykolysen (trinn 7 og 10) og gir 4 ATP totalt (2 ATP netto per glukose). Dette er i motsetning til oksidativ fosforylering som bruker en protongradie og ATP-syntase.',
    },
    {
      id: 'bio1-2-2-regulering',
      type: 'text',
      content: `## Regulering av glykolysen

Glykolysen reguleres nøye for å tilpasses cellens energibehov.

### Nøkkelregulatoriske enzymer

**1. Heksokinase (trinn 1)**
- Hemmes av produktet glukose-6-fosfat (feedback-hemming)
- Sikrer at glukose ikke fosforyleres unødvendig

**2. Fosfofruktokinase-1 (PFK-1) (trinn 3)**
- **Viktigste regulatoriske enzym**
- Hemmes av: ATP (høy energistatus), sitrat
- Aktiveres av: AMP, ADP (lav energistatus), fruktose-2,6-bisfosfat

**3. Pyruvat-kinase (trinn 10)**
- Hemmes av: ATP, alanin
- Aktiveres av: fruktose-1,6-bisfosfat (feedforward-aktivering)

### Reguleringslogikk

Når cellen har nok ATP:
- Høy [ATP] hemmer PFK-1
- Glykolysen bremses ned
- Glukose spares

Når cellen trenger ATP:
- Høy [AMP]/[ADP] aktiverer PFK-1
- Glykolysen øker
- Mer ATP produseres`,
    },
    {
      id: 'bio1-2-2-eksempel-1',
      type: 'example',
      title: 'Eksempel: Energiregnskap i glykolysen',
      problem: 'Beregn nettoproduksjonen av ATP og NADH fra glykolysen når ett molekyl glukose brytes ned fullstendig til pyruvat.',
      solution: `**Løsning:**

**Fase 1 (Energiinvestering):**
- Trinn 1: -1 ATP (heksokinase)
- Trinn 3: -1 ATP (fosfofruktokinase)
- **Sum fase 1: -2 ATP**

**Fase 2 (Energihøsting):**
(Merk: Alle trinn skjer to ganger, én gang for hver triosefosfat)

- Trinn 6: +2 NADH (GAPDH)
- Trinn 7: +2 ATP (fosfoglyserat-kinase)
- Trinn 10: +2 ATP (pyruvat-kinase)
- **Sum fase 2: +4 ATP, +2 NADH**

**Nettoutbytte per glukose:**
- ATP: 4 - 2 = **2 ATP**
- NADH: **2 NADH**
- Pyruvat: **2 pyruvat**

De 2 NADH-molekylene kan i aerob metabolisme gi ytterligere 3-5 ATP i elektrontransportkjeden.`,
    },
    {
      id: 'bio1-2-2-eksempel-2',
      type: 'example',
      title: 'Eksempel: Hvorfor investeres ATP først?',
      problem: 'Forklar den biologiske logikken bak at glykolysen først bruker 2 ATP før den produserer 4 ATP.',
      solution: `**Løsning:**

**Energiinvesteringen er nødvendig av flere grunner:**

**1. Fange glukose i cellen:**
- Glukose kan fritt passere cellemembranen via GLUT-transportører
- Glukose-6-fosfat (negativt ladet) kan ikke krysse membranen
- Fosforylering i trinn 1 "fanger" glukose inne i cellen

**2. Aktivere molekylet:**
- Glukose er et stabilt molekyl med lav reaktivitet
- Fosforylering destabiliserer molekylet
- Gjør det lettere å spalte i trinn 4

**3. Skape symmetri:**
- To fosforyleringer (trinn 1 og 3) gir fruktose-1,6-bisfosfat
- Dette spaltes symmetrisk til to like triosefosfater
- Begge kan brukes i energihøstingsfasen

**Konklusjon:** Selv om det virker bakvendt å bruke energi for å lage energi, er investeringen nødvendig for å aktivere substratet og maksimere energiutbyttet i fase 2.`,
    },
    {
      id: 'bio1-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Glykolysen** foregår i cytoplasma og krever ikke oksygen
- **Fase 1** (trinn 1-5): 2 ATP investeres, glukose spaltes til to triosefosfater
- **Fase 2** (trinn 6-10): 4 ATP og 2 NADH produseres, 2 pyruvat dannes
- **Nettoutbytte**: 2 ATP + 2 NADH + 2 pyruvat per glukose
- **Substratfosforylering** overfører fosfat direkte fra substrat til ADP
- **PFK-1** er det viktigste regulatoriske enzymet
- Glykolysen reguleres av cellens energistatus (ATP/AMP-forhold)
- Pyruvat kan gå videre til sitronsyresyklus (aerob) eller gjæring (anaerob)`,
    },
  ],
  exercises: [
    {
      id: 'bio1-2-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor i cellen foregår glykolysen?',
      options: [
        { id: 'a', text: 'Cytoplasma (cytosol)', isCorrect: true },
        { id: 'b', text: 'Mitokondriene', isCorrect: false },
        { id: 'c', text: 'Cellekjernen', isCorrect: false },
        { id: 'd', text: 'Endoplasmatisk retikulum', isCorrect: false },
      ],
      solution: 'Glykolysen foregår i cytoplasma (cytosol). Alle ti enzymene som katalyserer glykolysen er løst i cytoplasma. Pyruvat, sluttproduktet, må transporteres inn i mitokondriene for videre nedbrytning.',
    },
    {
      id: 'bio1-2-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor glykolysen først må investere 2 ATP før den kan produsere ATP.',
      solution: 'ATP-investeringen er nødvendig av tre hovedgrunner: 1) Fosforylering av glukose til glukose-6-fosfat fanger molekylet i cellen (fosforylerte molekyler kan ikke krysse cellemembranen). 2) Fosforylering aktiverer/destabiliserer molekylet slik at det lettere kan spaltes. 3) To fosforyleringer (trinn 1 og 3) gir et symmetrisk molekyl (fruktose-1,6-bisfosfat) som kan spaltes til to identiske triosefosfater som begge brukes i energihøstingsfasen.',
    },
    {
      id: 'bio1-2-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er nettoutbyttet av ATP fra glykolysen per glukosemolekyl?',
      options: [
        { id: 'a', text: '2 ATP', isCorrect: true },
        { id: 'b', text: '4 ATP', isCorrect: false },
        { id: 'c', text: '36 ATP', isCorrect: false },
        { id: 'd', text: '0 ATP', isCorrect: false },
      ],
      solution: 'Nettoutbyttet er 2 ATP per glukose. Glykolysen produserer totalt 4 ATP (2 i trinn 7 og 2 i trinn 10), men må først investere 2 ATP (trinn 1 og 3). 4 - 2 = 2 ATP netto. I tillegg produseres 2 NADH.',
    },
    {
      id: 'bio1-2-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv rollen til PFK-1 (fosfofruktokinase-1) i reguleringen av glykolysen.',
      solution: 'PFK-1 katalyserer trinn 3 i glykolysen og er det viktigste regulatoriske enzymet. Det kontrollerer farten på hele glykolysen. PFK-1 hemmes av høye nivåer av ATP og sitrat (som signaliserer at cellen har nok energi), og aktiveres av AMP, ADP og fruktose-2,6-bisfosfat (som signaliserer lavt energinivå). Denne reguleringen sikrer at glykolysen tilpasses cellens energibehov.',
    },
    {
      id: 'bio1-2-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er sluttproduktet av glykolysen?',
      options: [
        { id: 'a', text: 'Pyruvat', isCorrect: true },
        { id: 'b', text: 'Glukose', isCorrect: false },
        { id: 'c', text: 'Acetyl-CoA', isCorrect: false },
        { id: 'd', text: 'CO2', isCorrect: false },
      ],
      solution: 'Pyruvat (pyrodruesyre) er sluttproduktet av glykolysen. Ett glukosemolekyl (6C) gir to pyruvatmolekyler (3C). Pyruvat kan deretter gå videre til sitronsyresyklusen (aerob) eller gjæring (anaerob).',
    },
    {
      id: 'bio1-2-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar forskjellen mellom substratfosforylering og oksidativ fosforylering, og gi eksempler på hvor hver type forekommer.',
      solution: 'Substratfosforylering: Fosfatgruppen overføres direkte fra et høyenergi-substrat til ADP. Skjer i glykolysen (trinn 7 og 10) og sitronsyresyklusen. Krever ikke oksygen. Oksidativ fosforylering: ATP syntetiseres av ATP-syntase som drives av en protongradie (kjemiosmose). Skjer i den indre mitokondriemembranen. Protongradient bygges opp av elektrontransportkjeden. Krever oksygen som terminal elektronakseptor. Produserer mesteparten av cellens ATP (ca. 34 ATP per glukose vs. 4 ATP fra substratfosforylering).',
    },
  ],
};

// ============================================================================
// Kapittel 2.3: Sitronsyresyklus og elektrontransportkjeden
// ============================================================================

export const CHAPTER_BIOLOGI_1_2_3: TextbookChapter = {
  id: 'biologi-1-2-3',
  courseId: 'biologi-1',
  chapterNumber: '2.3',
  title: 'Sitronsyresyklus og elektrontransportkjeden',
  description: 'Pyruvatoksidasjon, sitronsyresyklus i detalj, elektrontransport og kjemiosmose.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare hva som skjer med pyruvat før sitronsyresyklusen',
    'beskrive sitronsyresyklusens hovedtrinn og produkter',
    'gjøre rede for elektrontransportkjedens oppbygging og funksjon',
    'forklare kjemiosmose og ATP-syntase',
  ],
  content: [
    {
      id: 'bio1-2-3-intro',
      type: 'text',
      content: `# Sitronsyresyklus og elektrontransportkjeden

Etter glykolysen har pyruvat fortsatt mye kjemisk energi. I aerobe organismer transporteres pyruvat inn i mitokondriene der det oksideres fullstendig gjennom sitronsyresyklusen og elektrontransportkjeden.

## Lokalisering i mitokondriene

- **Pyruvatoksidasjon**: Mitokondriematrisen
- **Sitronsyresyklus**: Mitokondriematrisen
- **Elektrontransportkjeden**: Indre mitokondriemembran
- **ATP-syntase**: Indre mitokondriemembran

Mitokondriene kalles "cellens kraftverk" fordi mesteparten av ATP produseres her.`,
    },
    {
      id: 'bio1-2-3-pyruvat',
      type: 'text',
      content: `## Pyruvatoksidasjon

Før pyruvat kan gå inn i sitronsyresyklusen, må det omdannes til acetyl-CoA. Dette skjer i mitokondriematrisen.

### Reaksjonen

$$\\text{Pyruvat} + \\text{CoA} + \\text{NAD}^+ \\rightarrow \\text{Acetyl-CoA} + \\text{CO}_2 + \\text{NADH}$$

### Enzymkompleks: Pyruvat-dehydrogenase (PDH)

PDH er et stort enzymkompleks som utfører tre reaksjoner:
1. **Dekarboksylering**: CO$_2$ fjernes fra pyruvat
2. **Oksidasjon**: NADH dannes
3. **Kobling til CoA**: Acetyl-CoA dannes

### Produkter per glukose (fra 2 pyruvat)
- 2 acetyl-CoA
- 2 CO$_2$ (første CO$_2$ som avgis fra glukose)
- 2 NADH`,
    },
    {
      id: 'bio1-2-3-def-acetylcoa',
      type: 'definition',
      title: 'Acetyl-CoA',
      content: 'Acetyl-CoA (acetyl-koenzym A) er et sentralt metabolsk molekyl som består av en acetylgruppe (2 karbon) bundet til koenzym A. Det er "inngangsbilletten" til sitronsyresyklusen og dannes fra nedbrytning av karbohydrater (via pyruvat), fettsyrer (via beta-oksidasjon) og aminosyrer. Acetyl-CoA brukes også i biosyntese av fettsyrer, kolesterol og ketonstoffer.',
    },
    {
      id: 'bio1-2-3-syklus',
      type: 'text',
      content: `## Sitronsyresyklusen (Krebs-syklus)

Sitronsyresyklusen er en syklisk serie av åtte enzymkatalyserte reaksjoner som fullstendig oksiderer acetylgruppen fra acetyl-CoA.

### Oversikt

$$\\text{Acetyl-CoA (2C)} + 3\\text{NAD}^+ + \\text{FAD} + \\text{GDP} + P_i + 2H_2O$$
$$\\rightarrow 2\\text{CO}_2 + 3\\text{NADH} + \\text{FADH}_2 + \\text{GTP} + \\text{CoA}$$

### De åtte trinnene

**1. Kondensasjon**
- Acetyl-CoA + oksaleddiksyre → sitrat (6C)
- Enzym: Sitrat-syntase

**2. Isomerisering**
- Sitrat ⇌ isositrat
- Enzym: Aconitase

**3. Oksidasjon og dekarboksylering**
- Isositrat → α-ketoglutarat (5C) + CO$_2$ + NADH
- Enzym: Isositrat-dehydrogenase

**4. Oksidasjon og dekarboksylering**
- α-ketoglutarat → succinyl-CoA (4C) + CO$_2$ + NADH
- Enzym: α-ketoglutarat-dehydrogenase`,
    },
    {
      id: 'bio1-2-3-syklus2',
      type: 'text',
      content: `**5. Substratfosforylering**
- Succinyl-CoA → suksinat + GTP (≈ ATP)
- Enzym: Succinyl-CoA-syntetase
- GTP kan overføre fosfat til ADP og danne ATP

**6. Oksidasjon**
- Suksinat → fumarat + FADH$_2$
- Enzym: Suksinat-dehydrogenase
- Dette enzymet er bundet til indre mitokondriemembran

**7. Hydrering**
- Fumarat + H$_2$O → malat
- Enzym: Fumarase

**8. Oksidasjon**
- Malat → oksaleddiksyre + NADH
- Enzym: Malat-dehydrogenase
- Oksaleddiksyre regenereres og kan binde ny acetyl-CoA

### Produkter per acetyl-CoA
- 2 CO$_2$
- 3 NADH
- 1 FADH$_2$
- 1 GTP (≈ ATP)

### Produkter per glukose (2 acetyl-CoA)
- 4 CO$_2$
- 6 NADH
- 2 FADH$_2$
- 2 GTP`,
    },
    {
      id: 'bio1-2-3-def-syklus',
      type: 'definition',
      title: 'Sitronsyresyklus',
      content: 'Sitronsyresyklusen (også kalt Krebs-syklus eller trikarboksylsyresyklusen) er en syklisk metabolsk vei i mitokondriematrisen som oksiderer acetyl-CoA fullstendig til CO$_2$. Syklusen produserer elektronbærere (NADH, FADH$_2$) som brukes i elektrontransportkjeden, samt 1 GTP per runde. Navnet kommer fra sitrat, det første intermediatet i syklusen.',
    },
    {
      id: 'bio1-2-3-etk',
      type: 'text',
      content: `## Elektrontransportkjeden (ETC)

Elektrontransportkjeden er en serie av proteinkomplekser i den indre mitokondriemembranen som overfører elektroner fra NADH og FADH$_2$ til oksygen.

### De fire kompleksene

**Kompleks I (NADH-dehydrogenase)**
- NADH avgir elektroner
- Pumper 4 H$^+$ til intermembranrommet
- Elektroner overføres til ubiquinon (Q)

**Kompleks II (Suksinat-dehydrogenase)**
- FADH$_2$ avgir elektroner
- Pumper **ikke** protoner
- Elektroner overføres til ubiquinon (Q)

**Kompleks III (Cytokrom bc$_1$)**
- Mottar elektroner fra ubiquinon
- Pumper 4 H$^+$ til intermembranrommet
- Elektroner overføres til cytokrom c

**Kompleks IV (Cytokrom c-oksidase)**
- Mottar elektroner fra cytokrom c
- Pumper 2 H$^+$ til intermembranrommet
- Overfører elektroner til O$_2$:

$$\\frac{1}{2}O_2 + 2H^+ + 2e^- \\rightarrow H_2O$$`,
    },
    {
      id: 'bio1-2-3-kjemiosmose',
      type: 'text',
      content: `## Kjemiosmose og ATP-syntase

### Protongradienten

Kompleks I, III og IV pumper protoner (H$^+$) fra matrisen til intermembranrommet. Dette skaper:

1. **Konsentrasjonsgradient**: Høyere [H$^+$] i intermembranrommet
2. **Elektrisk gradient**: Positiv ladning i intermembranrommet

Sammen utgjør dette **proton-motive force (PMF)**.

### ATP-syntase (Kompleks V)

ATP-syntase er et roterende enzymmaskiner som bruker protongradienten til å syntetisere ATP.

**Struktur:**
- **F$_0$**: Membrankomponent med protonkanal
- **F$_1$**: Matrikskomponent der ATP syntetiseres

**Mekanisme:**
1. Protoner strømmer gjennom F$_0$ ned konsentrasjonsgradienten
2. Protonstrømmen driver rotasjon av F$_0$-ringen
3. Rotasjonen overfører konformasjonsendringer til F$_1$
4. F$_1$ katalyserer: ADP + $P_i$ → ATP

### ATP-utbytte

$$\\text{NADH} \\rightarrow \\sim 2,5 \\text{ ATP}$$
$$\\text{FADH}_2 \\rightarrow \\sim 1,5 \\text{ ATP}$$

(Verdiene varierer litt mellom organismer og betingelser)`,
    },
    {
      id: 'bio1-2-3-eksempel-1',
      type: 'example',
      title: 'Eksempel: Totalt ATP-utbytte fra glukose',
      problem: 'Beregn det totale ATP-utbyttet fra fullstendig oksidasjon av ett glukosemolekyl gjennom aerob celleånding.',
      solution: `**Løsning:**

**1. Glykolyse (i cytoplasma):**
- Direkte ATP: 2 ATP (substratfosforylering)
- NADH: 2 NADH × 2,5 ATP = 5 ATP*

**2. Pyruvatoksidasjon (per glukose = 2 pyruvat):**
- NADH: 2 NADH × 2,5 ATP = 5 ATP

**3. Sitronsyresyklus (per glukose = 2 acetyl-CoA):**
- Direkte GTP/ATP: 2 GTP ≈ 2 ATP
- NADH: 6 NADH × 2,5 ATP = 15 ATP
- FADH$_2$: 2 FADH$_2$ × 1,5 ATP = 3 ATP

**Totalt:**
- Direkte ATP/GTP: 2 + 2 = 4 ATP
- Fra NADH: 5 + 5 + 15 = 25 ATP
- Fra FADH$_2$: 3 ATP
- **Sum: ca. 30-32 ATP per glukose**

*Merknad: NADH fra glykolysen må transporteres inn i mitokondriet via "shuttle"-systemer, som kan koste noe energi.`,
    },
    {
      id: 'bio1-2-3-eksempel-2',
      type: 'example',
      title: 'Eksempel: Hvorfor trenger vi oksygen?',
      problem: 'Forklar hvorfor celleåndingen stopper opp uten oksygen, selv om sitronsyresyklusen ikke direkte bruker O2.',
      solution: `**Løsning:**

**Oksygenets rolle:**
Oksygen er den terminale elektronakseptoren i elektrontransportkjeden:
$$\\frac{1}{2}O_2 + 2H^+ + 2e^- \\rightarrow H_2O$$

**Uten oksygen:**
1. Elektronene har ingen plass å gå
2. Kompleks IV kan ikke overføre elektroner
3. Cytokrom c forblir redusert
4. Kompleks III kan ikke overføre elektroner til cytokrom c
5. Hele elektrontransportkjeden "stopper opp"

**Konsekvensen:**
- NADH og FADH$_2$ kan ikke reoksideres til NAD$^+$ og FAD
- Sitronsyresyklusen trenger NAD$^+$ og FAD som elektronakseptorer
- Uten disse kan ikke sitronsyresyklusen kjøre
- Pyruvatoksidasjon stopper også (trenger NAD$^+$)

**Konklusjon:**
Selv om sitronsyresyklusen ikke bruker oksygen direkte, er den avhengig av at NAD$^+$ og FAD regenereres. Dette skjer kun i elektrontransportkjeden, som krever oksygen. Derfor kalles prosessen "aerob" celleånding.`,
    },
    {
      id: 'bio1-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Pyruvatoksidasjon:**
- Pyruvat → Acetyl-CoA + CO$_2$ + NADH
- Utføres av pyruvat-dehydrogenase i matrisen

**Sitronsyresyklus:**
- Acetyl-CoA oksideres fullstendig til 2 CO$_2$
- Produserer: 3 NADH, 1 FADH$_2$, 1 GTP per acetyl-CoA
- 8 reaksjoner i mitokondriematrisen
- Oksaleddiksyre regenereres hver runde

**Elektrontransportkjeden:**
- 4 komplekser i indre mitokondriemembran
- NADH → Kompleks I → Q → Kompleks III → Cytokrom c → Kompleks IV → O$_2$
- FADH$_2$ → Kompleks II → Q → ...
- Bygger opp protongradie ved å pumpe H$^+$

**ATP-syntase:**
- Bruker protongradienten til å syntetisere ATP
- Roterende enzymmaskineri
- NADH gir ~2,5 ATP, FADH$_2$ gir ~1,5 ATP

**Totalt utbytte: ca. 30-32 ATP per glukose**`,
    },
  ],
  exercises: [
    {
      id: 'bio1-2-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor foregår sitronsyresyklusen?',
      options: [
        { id: 'a', text: 'Mitokondriematrisen', isCorrect: true },
        { id: 'b', text: 'Cytoplasma', isCorrect: false },
        { id: 'c', text: 'Indre mitokondriemembran', isCorrect: false },
        { id: 'd', text: 'Cellekjernen', isCorrect: false },
      ],
      solution: 'Sitronsyresyklusen foregår i mitokondriematrisen (det indre rommet i mitokondriet). Her finnes enzymene som katalyserer de åtte trinnene i syklusen. Elektrontransportkjeden foregår derimot i den indre mitokondriemembranen.',
    },
    {
      id: 'bio1-2-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som skjer med pyruvat før det kan gå inn i sitronsyresyklusen.',
      solution: 'Pyruvat må først omdannes til acetyl-CoA av pyruvat-dehydrogenase-komplekset i mitokondriematrisen. Reaksjonen har tre trinn: 1) Dekarboksylering - en CO2 fjernes fra pyruvat, 2) Oksidasjon - NAD+ reduseres til NADH, 3) Kobling til koenzym A - acetylgruppen bindes til CoA og danner acetyl-CoA. Per glukose (2 pyruvat) produseres 2 acetyl-CoA, 2 CO2 og 2 NADH.',
    },
    {
      id: 'bio1-2-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er funksjonen til elektrontransportkjeden?',
      options: [
        { id: 'a', text: 'Bygge opp en protongradie som driver ATP-syntese', isCorrect: true },
        { id: 'b', text: 'Produsere NADH', isCorrect: false },
        { id: 'c', text: 'Bryte ned glukose', isCorrect: false },
        { id: 'd', text: 'Produsere CO2', isCorrect: false },
      ],
      solution: 'Elektrontransportkjeden overfører elektroner fra NADH og FADH2 til oksygen. Denne elektrontransporten driver pumping av protoner (H+) fra matrisen til intermembranrommet. Den resulterende protongradienten (PMF) brukes av ATP-syntase til å produsere ATP gjennom kjemiosmose.',
    },
    {
      id: 'bio1-2-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hvordan ATP-syntase produserer ATP ved hjelp av protongradienten.',
      solution: 'ATP-syntase er et enzym med to hoveddeler: F0 (i membranen) og F1 (i matrisen). Protoner strømmer fra intermembranrommet (høy konsentrasjon) gjennom F0-kanalen til matrisen (lav konsentrasjon). Protonstrømmen driver rotasjon av en ring i F0, som overfører rotasjonsenergi til F1. Rotasjonen i F1 forårsaker konformasjonsendringer som driver syntesen av ATP fra ADP og Pi. Det trengs ca. 4 protoner per ATP som syntetiseres.',
    },
    {
      id: 'bio1-2-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den terminale elektronakseptoren i aerob celleånding?',
      options: [
        { id: 'a', text: 'Oksygen (O2)', isCorrect: true },
        { id: 'b', text: 'NAD+', isCorrect: false },
        { id: 'c', text: 'FAD', isCorrect: false },
        { id: 'd', text: 'Pyruvat', isCorrect: false },
      ],
      solution: 'Oksygen (O2) er den terminale elektronakseptoren i aerob celleånding. I kompleks IV (cytokrom c-oksidase) overføres elektroner til oksygen, som sammen med protoner danner vann (H2O). Uten oksygen stopper hele elektrontransportkjeden.',
    },
    {
      id: 'bio1-2-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beregn det teoretiske ATP-utbyttet fra fullstendig oksidasjon av 2 mol glukose, og forklar hvorfor det faktiske utbyttet ofte er lavere.',
      solution: 'Teoretisk utbytte per glukose: Glykolyse: 2 ATP + 2 NADH (→5 ATP). Pyruvatoksidasjon: 2 NADH (→5 ATP). Sitronsyresyklus: 2 GTP + 6 NADH (→15 ATP) + 2 FADH2 (→3 ATP). Totalt: ca. 30-32 ATP per glukose, altså 60-64 ATP per 2 mol glukose. Det faktiske utbyttet er ofte lavere fordi: 1) Protongradienten lekker noe, 2) Transport av NADH fra cytoplasma inn i mitokondriet koster energi (shuttle-systemer), 3) ATP må transporteres ut av mitokondriet mot protongradienten, 4) Andre prosesser kan bruke protongradienten.',
    },
  ],
};

// ============================================================================
// Kapittel 2.4: Anaerob energiomsetning
// ============================================================================

export const CHAPTER_BIOLOGI_1_2_4: TextbookChapter = {
  id: 'biologi-1-2-4',
  courseId: 'biologi-1',
  chapterNumber: '2.4',
  title: 'Anaerob energiomsetning',
  description: 'Melkesyregjæring, alkoholgjæring og sammenligning av aerob og anaerob metabolisme.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hva som skjer under anaerobe forhold',
    'beskrive melkesyregjæring og alkoholgjæring',
    'sammenligne ATP-utbyttet fra aerob og anaerob metabolisme',
    'gi eksempler på organismer og situasjoner der anaerob metabolisme brukes',
  ],
  content: [
    {
      id: 'bio1-2-4-intro',
      type: 'text',
      content: `# Anaerob energiomsetning

Når oksygen ikke er tilgjengelig, kan celler ikke bruke elektrontransportkjeden og oksidativ fosforylering. De må da ty til **gjæring** for å produsere ATP.

## Problemet uten oksygen

Glykolysen produserer NADH. For at glykolysen skal fortsette, må NAD$^+$ regenereres. Normalt skjer dette i elektrontransportkjeden, men uten oksygen stopper denne.

**Løsningen: Gjæring**
- Pyruvat (eller et derivat) brukes som elektronakseptor
- NADH reoksideres til NAD$^+$
- Glykolysen kan fortsette

Det finnes to hovedtyper gjæring:
1. **Melkesyregjæring**
2. **Alkoholgjæring**`,
    },
    {
      id: 'bio1-2-4-def-gjæring',
      type: 'definition',
      title: 'Gjæring (fermentering)',
      content: 'Gjæring er en anaerob metabolsk prosess der organiske molekyler (som pyruvat eller acetaldehyd) fungerer som elektronakseptorer for å regenerere NAD$^+$ fra NADH. Dette tillater glykolysen å fortsette uten oksygen. ATP-utbyttet er kun 2 ATP per glukose (fra glykolysen), sammenlignet med ca. 30-32 ATP ved aerob respirasjon.',
    },
    {
      id: 'bio1-2-4-melkesyre',
      type: 'text',
      content: `## Melkesyregjæring

Melkesyregjæring forekommer i mange bakterier, sopp og i dyreceller under oksygenmangel.

### Reaksjonen

$$\\text{Pyruvat} + \\text{NADH} + H^+ \\xrightarrow{\\text{laktat-dehydrogenase}} \\text{Laktat} + \\text{NAD}^+$$

### Totalreaksjon fra glukose

$$C_6H_{12}O_6 \\rightarrow 2 \\text{ laktat} + 2 \\text{ ATP}$$

### Eksempler

**1. Muskelceller under intens aktivitet**
- Ved hard trening overstiger oksygenbehovet tilførselen
- Muskler går over til melkesyregjæring
- Laktat akkumuleres og gir "melkesyrestikk"
- Laktat transporteres til leveren (Cori-syklus)

**2. Røde blodceller**
- Har ingen mitokondrier
- Bruker kun glykolyse og melkesyregjæring
- Leverer oksygen, men bruker det ikke selv

**3. Melkesyrebakterier**
- Brukes i produksjon av yoghurt, ost, surkål
- Laktat gir sur smak og konserverer maten`,
    },
    {
      id: 'bio1-2-4-alkohol',
      type: 'text',
      content: `## Alkoholgjæring

Alkoholgjæring forekommer i gjær og noen bakterier.

### Reaksjonene

**Trinn 1: Dekarboksylering**
$$\\text{Pyruvat} \\xrightarrow{\\text{pyruvat-dekarboksylase}} \\text{Acetaldehyd} + CO_2$$

**Trinn 2: Reduksjon**
$$\\text{Acetaldehyd} + \\text{NADH} + H^+ \\xrightarrow{\\text{alkohol-dehydrogenase}} \\text{Etanol} + \\text{NAD}^+$$

### Totalreaksjon fra glukose

$$C_6H_{12}O_6 \\rightarrow 2 \\text{ etanol} + 2 \\text{ CO}_2 + 2 \\text{ ATP}$$

### Anvendelser

**1. Brygning og vinproduksjon**
- Gjær fermenterer sukker til etanol
- CO$_2$ gir bobler i øl og musserende vin
- Alkoholinnholdet begrenses av gjærens toleranse (vanligvis maks ~15%)

**2. Baking**
- Gjær produserer CO$_2$ som hever deigen
- Etanolen fordamper under steking
- Gir luftig brød og bakst

**3. Biobrensel**
- Gjæring av sukker/stivelse til bioetanol
- Brukes som drivstoff blandet med bensin`,
    },
    {
      id: 'bio1-2-4-def-melkesyre',
      type: 'definition',
      title: 'Laktat (melkesyre)',
      content: 'Laktat er sluttproduktet av melkesyregjæring. Det dannes når pyruvat reduseres av NADH under anaerobe forhold. Laktat er en organisk syre (pKa ≈ 3,9) som ved fysiologisk pH hovedsakelig finnes som laktat-ion. I muskelceller transporteres laktat til leveren der det kan omdannes tilbake til glukose (Cori-syklus).',
    },
    {
      id: 'bio1-2-4-sammenligning',
      type: 'text',
      content: `## Sammenligning: Aerob vs. anaerob

| Egenskap | Aerob respirasjon | Gjæring |
|----------|-------------------|---------|
| Oksygen | Kreves | Kreves ikke |
| Lokalisering | Cytoplasma + mitokondrier | Kun cytoplasma |
| ATP per glukose | ~30-32 | 2 |
| Sluttprodukter | CO$_2$, H$_2$O | Laktat eller etanol + CO$_2$ |
| Effektivitet | ~40% | ~2% |

### Hvorfor bruke gjæring?

Selv om gjæring gir mye mindre ATP, har den fordeler:

1. **Hastighet**: Glykolysen alene kan produsere ATP raskt
2. **Ingen oksygen nødvendig**: Nyttig under anaerobe forhold
3. **Enklere**: Krever færre enzymer og ingen mitokondrier

### Oksygengjeld

Etter intens aktivitet fortsetter vi å puste tungt. Dette er for å:
- Regenerere ATP-lagre
- Omdanne laktat tilbake til glukose (Cori-syklus)
- Reetablere normale oksygennivåer`,
    },
    {
      id: 'bio1-2-4-eksempel-1',
      type: 'example',
      title: 'Eksempel: Energieffektivitet',
      problem: 'Beregn hvor mange ganger mer effektiv aerob respirasjon er sammenlignet med gjæring, målt i ATP per glukose.',
      solution: `**Løsning:**

**Aerob respirasjon:**
- Ca. 30-32 ATP per glukose
- Vi bruker 31 ATP som gjennomsnitt

**Gjæring:**
- 2 ATP per glukose (kun fra glykolysen)

**Effektivitetsforhold:**
$$\\frac{31 \\text{ ATP}}{2 \\text{ ATP}} = 15,5$$

**Konklusjon:**
Aerob respirasjon er omtrent **15-16 ganger mer effektiv** enn gjæring målt i ATP per glukosemolekyl.

**Energimessig betraktning:**
- Total energi i glukose: 2870 kJ/mol
- Energi i 31 ATP: 31 × 30,5 = 945 kJ/mol
- Effektivitet aerob: 945/2870 ≈ 33%

- Energi i 2 ATP: 2 × 30,5 = 61 kJ/mol
- Effektivitet gjæring: 61/2870 ≈ 2%

Mesteparten av energien blir værende i laktat eller etanol.`,
    },
    {
      id: 'bio1-2-4-eksempel-2',
      type: 'example',
      title: 'Eksempel: Cori-syklusen',
      problem: 'Forklar hvordan Cori-syklusen fungerer og hvorfor den er viktig ved intens muskelaktivitet.',
      solution: `**Løsning:**

**Cori-syklusen (laktat-syklusen):**

**I muskelcellen (ved oksygenmangel):**
1. Glukose → 2 pyruvat + 2 ATP (glykolyse)
2. Pyruvat → laktat (melkesyregjæring)
3. Laktat frigjøres til blodet

**I leveren:**
1. Laktat tas opp fra blodet
2. Laktat → pyruvat (reversert)
3. Pyruvat → glukose (glukoneogenese) - krever 6 ATP
4. Glukose frigjøres til blodet

**I muskelen:**
1. Glukose tas opp fra blodet
2. Brukes til ny glykolyse

**Betydning:**
- Fjerner laktat fra musklene
- Resirkulerer karbonskjelettet
- Leveren "betaler" energikostnaden (6 ATP for glukoneogenese)
- Muskelen får mer ATP (2 ATP fra glykolyse)
- Tillater muskelen å fortsette arbeid under anaerobe forhold

**Nettoeffekt:**
- Muskelen: +2 ATP
- Leveren: -6 ATP (men har bedre oksygentilgang)
- Energikostnad: 4 ATP per glukose resirkulert`,
    },
    {
      id: 'bio1-2-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Gjæring** er anaerob ATP-produksjon der pyruvat (eller derivater) brukes som elektronakseptor
- **Melkesyregjæring**: Pyruvat → laktat, forekommer i muskelceller og bakterier
- **Alkoholgjæring**: Pyruvat → etanol + CO$_2$, forekommer i gjær og noen bakterier
- **ATP-utbytte**: Kun 2 ATP per glukose (fra glykolysen)
- **Formål**: Regenerere NAD$^+$ slik at glykolysen kan fortsette
- Aerob respirasjon er ~15-16 ganger mer effektiv enn gjæring
- **Cori-syklusen** resirkulerer laktat mellom muskler og lever
- Gjæring brukes i matproduksjon (ost, brød, øl) og biobrensel`,
    },
  ],
  exercises: [
    {
      id: 'bio1-2-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedformålet med gjæring?',
      options: [
        { id: 'a', text: 'Regenerere NAD+ fra NADH', isCorrect: true },
        { id: 'b', text: 'Produsere maksimalt med ATP', isCorrect: false },
        { id: 'c', text: 'Produsere oksygen', isCorrect: false },
        { id: 'd', text: 'Bryte ned proteiner', isCorrect: false },
      ],
      solution: 'Hovedformålet med gjæring er å regenerere NAD+ fra NADH. Dette er nødvendig for at glykolysen skal kunne fortsette når oksygen mangler og elektrontransportkjeden ikke kan fungere. Uten NAD+ stopper glykolysen i trinn 6.',
    },
    {
      id: 'bio1-2-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Sammenlign melkesyregjæring og alkoholgjæring med hensyn til reaksjoner, produkter og hvilke organismer som bruker dem.',
      solution: 'Melkesyregjæring: Pyruvat reduseres direkte til laktat av laktat-dehydrogenase. Produkter: laktat + NAD+. Organismer: muskelceller, melkesyrebakterier. Alkoholgjæring: Pyruvat dekarboksyleres først til acetaldehyd (frigjør CO2), deretter reduseres acetaldehyd til etanol. Produkter: etanol + CO2 + NAD+. Organismer: gjær, noen bakterier. Begge produserer 2 ATP per glukose og regenererer NAD+.',
    },
    {
      id: 'bio1-2-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mange ATP produseres per glukosemolekyl ved gjæring?',
      options: [
        { id: 'a', text: '2 ATP', isCorrect: true },
        { id: 'b', text: '4 ATP', isCorrect: false },
        { id: 'c', text: '32 ATP', isCorrect: false },
        { id: 'd', text: '0 ATP', isCorrect: false },
      ],
      solution: 'Ved gjæring produseres kun 2 ATP netto per glukose. All ATP-produksjon kommer fra glykolysen (substratfosforylering). Gjæringstrinnene (melkesyre- eller alkoholgjæring) produserer ikke ATP, men regenererer NAD+ som trengs for at glykolysen skal fortsette.',
    },
    {
      id: 'bio1-2-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor musklene produserer laktat under intens trening, og hva som skjer med laktatet etterpå.',
      solution: 'Under intens trening overstiger energibehovet den aerobe kapasiteten - oksygentilførselen er ikke tilstrekkelig. Muskelcellene skifter da til melkesyregjæring for rask ATP-produksjon. Pyruvat reduseres til laktat for å regenerere NAD+. Laktat akkumuleres og gir følelsen av "melkesyrestikk". Etter trening transporteres laktat via blodet til leveren (Cori-syklus) der det omdannes tilbake til glukose gjennom glukoneogenese. Denne glukosen kan så brukes av musklene igjen.',
    },
    {
      id: 'bio1-2-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket produkt fra alkoholgjæring får brøddeig til å heve?',
      options: [
        { id: 'a', text: 'Karbondioksid (CO2)', isCorrect: true },
        { id: 'b', text: 'Etanol', isCorrect: false },
        { id: 'c', text: 'Laktat', isCorrect: false },
        { id: 'd', text: 'ATP', isCorrect: false },
      ],
      solution: 'Karbondioksid (CO2) er gassen som får deigen til å heve. CO2 produseres når pyruvat dekarboksyleres til acetaldehyd. Gassboblene fanges i glutennettverket i deigen og skaper luftlommer. Etanol produseres også, men denne fordamper under stekingen.',
    },
    {
      id: 'bio1-2-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Gjæring gir kun 2 ATP per glukose mot ~30 ATP ved aerob respirasjon. Forklar hvorfor gjæring likevel kan være fordelaktig i visse situasjoner.',
      solution: 'Gjæring kan være fordelaktig fordi: 1) Hastighet - glykolysen alene kan produsere ATP svært raskt, raskere enn full aerob respirasjon. Ved akutt energibehov (sprint) kan dette være avgjørende. 2) Oksygenuavhengighet - i anaerobe miljøer (dyp jord, innvollene) eller ved oksygenmangel (høy høyde, intens aktivitet) er gjæring eneste alternativ. 3) Enkelhet - krever færre enzymer og ingen mitokondrier. Prokaryoter kan klare seg med glykolyse + gjæring. 4) Røde blodceller mangler mitokondrier og bruker kun glykolyse. 5) Noen organismer (som gjær) kan veksle mellom aerob og anaerob metabolisme etter behov.',
    },
  ],
};

// ============================================================================
// Kapittel 2.5: Fotosyntesen
// ============================================================================

export const CHAPTER_BIOLOGI_1_2_5: TextbookChapter = {
  id: 'biologi-1-2-5',
  courseId: 'biologi-1',
  chapterNumber: '2.5',
  title: 'Fotosyntesen',
  description: 'Lysreaksjonene i tylakoidmembran, Calvin-syklus i stroma, og C3, C4 og CAM-planter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare fotosyntesens betydning for livet på jorda',
    'beskrive lysreaksjonene og deres produkter',
    'gjøre rede for Calvin-syklus og karbonfiksering',
    'sammenligne C3, C4 og CAM-planter',
  ],
  content: [
    {
      id: 'bio1-2-5-intro',
      type: 'text',
      content: `# Fotosyntesen

Fotosyntesen er prosessen der planter, alger og enkelte bakterier omdanner lysenergi til kjemisk energi. Dette er grunnlaget for nesten alt liv på jorda.

## Betydning

- **Produserer oksygen** - nesten alt O$_2$ i atmosfæren
- **Fanger CO$_2$** - motvirker drivhuseffekten
- **Produserer organisk materiale** - grunnlag for næringskjeder
- **Omdanner solenergi** - energikilden for de fleste økosystemer

## Totalreaksjon

$$6CO_2 + 6H_2O \\xrightarrow{\\text{lysenergi}} C_6H_{12}O_6 + 6O_2$$

## Lokalisering

Fotosyntesen foregår i **kloroplaster**, som har:
- **Tylakoidmembraner**: Lysreaksjonene
- **Stroma**: Calvin-syklus (mørke reaksjoner)`,
    },
    {
      id: 'bio1-2-5-def-fotosyntese',
      type: 'definition',
      title: 'Fotosyntese',
      content: 'Fotosyntese er en biokjemisk prosess der lysenergi brukes til å omdanne karbondioksid og vann til glukose og oksygen. Prosessen foregår i kloroplaster og deles i lysreaksjoner (i tylakoidmembranen) og Calvin-syklus (i stroma). Fotosyntesen er grunnlaget for nesten alle næringskjeder på jorda.',
    },
    {
      id: 'bio1-2-5-lysreaksjoner',
      type: 'text',
      content: `## Lysreaksjonene

Lysreaksjonene foregår i **tylakoidmembranen** og fanger lysenergi.

### Fotosystem II (PSII)

1. **Lysabsorpsjon**: Klorofyll absorberer fotoner (lys)
2. **Eksitasjon**: Elektroner i klorofyll eksiteres til høyere energinivå
3. **Vannspaltning**:
$$2H_2O \\rightarrow 4H^+ + 4e^- + O_2$$
4. **Elektronoverføring**: Eksiterte elektroner overføres til plastoquinon (PQ)

### Elektrontransportkjede

- Elektroner beveger seg fra PSII → PQ → Cytokrom b$_6$f → Plastocyanin → PSI
- **Protonpumping**: Cytokrom b$_6$f pumper H$^+$ inn i tylakoidlumen
- Bygger opp **protongradie** (som i mitokondriene)

### Fotosystem I (PSI)

1. Elektroner eksiteres på nytt av lys
2. Overføres via ferredoksin til NADP$^+$-reduktase
3. **NADPH dannes**:
$$\\text{NADP}^+ + 2H^+ + 2e^- \\rightarrow \\text{NADPH} + H^+$$`,
    },
    {
      id: 'bio1-2-5-atp',
      type: 'text',
      content: `### ATP-syntese i kloroplaster

Akkurat som i mitokondriene bruker kloroplastene kjemiosmose:

1. **Protongradie bygges opp**:
   - H$^+$ fra vannspaltning frigjøres i lumen
   - Cytokrom b$_6$f pumper H$^+$ til lumen

2. **ATP-syntase**:
   - H$^+$ strømmer tilbake til stroma gjennom ATP-syntase
   - Driver syntese av ATP fra ADP + $P_i$

### Produkter av lysreaksjonene

Per 12 H$_2$O (for å lage 1 glukose):
- **6 O$_2$** (frigjøres som biprodukt)
- **12 NADPH** (brukes i Calvin-syklus)
- **18 ATP** (brukes i Calvin-syklus)

### Syklisk elektrontransport

- Alternativ vei der elektroner sykler tilbake fra PSI til cytokrom b$_6$f
- Produserer kun ATP (ikke NADPH eller O$_2$)
- Brukes når cellen trenger ekstra ATP`,
    },
    {
      id: 'bio1-2-5-def-klorofyll',
      type: 'definition',
      title: 'Klorofyll',
      content: 'Klorofyll er det grønne pigmentet i planter som absorberer lysenergi for fotosyntese. Klorofyll a er hovedpigmentet som finnes i reaksjonssentrene, mens klorofyll b er et hjelpepigment. De absorberer hovedsakelig blått og rødt lys, og reflekterer grønt (derav fargen). Andre pigmenter (karotenoider, xantofyller) utvider lysabsorpsjonsspekteret.',
    },
    {
      id: 'bio1-2-5-calvin',
      type: 'text',
      content: `## Calvin-syklus (mørke reaksjoner)

Calvin-syklus foregår i **stroma** og bruker ATP og NADPH fra lysreaksjonene til å fiksere CO$_2$ og bygge sukker.

### Tre faser

**1. Karbonfiksering**
- CO$_2$ bindes til ribulose-1,5-bisfosfat (RuBP, 5C)
- Enzym: **RuBisCO** (verdens vanligste enzym!)
- Produktet (6C) spaltes til 2 × 3-fosfoglyserat (3-PGA, 3C)

**2. Reduksjon**
- 3-PGA reduseres til glyceraldehyd-3-fosfat (G3P)
- Bruker ATP og NADPH fra lysreaksjonene:
$$\\text{3-PGA} + \\text{ATP} + \\text{NADPH} \\rightarrow \\text{G3P} + \\text{ADP} + P_i + \\text{NADP}^+$$

**3. Regenerering**
- 5 av 6 G3P brukes til å regenerere 3 RuBP
- Krever ATP
- 1 av 6 G3P er nettoprodukt (brukes til å lage glukose)

### Energiforbruk per glukose

- 6 CO$_2$ fikseres
- 18 ATP forbrukes
- 12 NADPH forbrukes`,
    },
    {
      id: 'bio1-2-5-c3c4cam',
      type: 'text',
      content: `## C3, C4 og CAM-planter

### C3-planter (de fleste planter)

- Første karbonfikserte produkt er 3-PGA (3 karbon)
- RuBisCO fikserer CO$_2$ direkte
- **Problem: Fotorespirering**
  - RuBisCO kan også binde O$_2$ istedenfor CO$_2$
  - Dette er sløsing med energi (ingen ATP produseres)
  - Verre ved høy temperatur og lav CO$_2$
- Eksempler: Hvete, ris, soyabønner, de fleste trær

### C4-planter

- Første produkt er oksaleddiksyre (4 karbon)
- To-trinns fiksering:
  1. PEP-karboksylase fikserer CO$_2$ i mesofyllceller
  2. CO$_2$ frigjøres og refikseres av RuBisCO i "bundle sheath"-celler
- **Fordel**: Konsentrerer CO$_2$ rundt RuBisCO, reduserer fotorespirering
- **Ulempe**: Koster ekstra ATP
- Tilpasset varme, solrike forhold
- Eksempler: Mais, sukkerrør, sorghum

### CAM-planter (Crassulacean Acid Metabolism)

- Tidsmessig separasjon:
  - **Natt**: Spalteåpninger åpne, CO$_2$ fikseres til organiske syrer
  - **Dag**: Spalteåpninger lukket, CO$_2$ frigjøres fra syrer og fikseres av RuBisCO
- Tilpasset tørre forhold (minimerer vanntap)
- Eksempler: Kaktuser, ananas, agave, orkideer`,
    },
    {
      id: 'bio1-2-5-eksempel-1',
      type: 'example',
      title: 'Eksempel: Energiregnskap for fotosyntesen',
      problem: 'Beregn hvor mange ATP og NADPH som trengs for å produsere ett glukosemolekyl i Calvin-syklus.',
      solution: `**Løsning:**

**For å lage 1 glukose trengs 6 CO$_2$:**

**Fase 1: Karbonfiksering**
- 6 CO$_2$ + 6 RuBP → 12 × 3-PGA
- Ingen ATP/NADPH brukes

**Fase 2: Reduksjon (per 3-PGA → G3P)**
- 12 × 3-PGA → 12 × 1,3-bisfosfoglyserat: **12 ATP**
- 12 × 1,3-bisfosfoglyserat → 12 × G3P: **12 NADPH**

**Fase 3: Regenerering**
- 10 G3P → 6 RuBP: **6 ATP**

**Totalt forbruk per glukose:**
- **18 ATP**
- **12 NADPH**

**Merk:**
- 12 G3P produseres, men kun 2 G3P (= 1 glukose-ekvivalent) er nettoprodukt
- 10 G3P brukes til å regenerere 6 RuBP
- Forholdet ATP:NADPH = 18:12 = 3:2`,
    },
    {
      id: 'bio1-2-5-eksempel-2',
      type: 'example',
      title: 'Eksempel: Hvorfor er C4-fotosyntese effektiv i varme klima?',
      problem: 'Forklar hvorfor mais (C4) vokser bedre enn hvete (C3) i varme, tørre områder.',
      solution: `**Løsning:**

**Problemet for C3-planter ved varme:**

1. **RuBisCO-problemet:**
   - RuBisCO kan binde både CO$_2$ og O$_2$
   - Ved høy temperatur øker O$_2$-løseligheten relativt til CO$_2$
   - Fotorespirering øker (kan forbruke 25-30% av fiksert karbon)

2. **Vanntap:**
   - For å få inn CO$_2$ må spalteåpningene være åpne
   - Vann fordamper (transpirasjon)
   - I tørke må spalteåpningene lukkes → CO$_2$-mangel

**Fordeler med C4 (mais):**

1. **CO$_2$-konsentrering:**
   - PEP-karboksylase har høyere affinitet for CO$_2$
   - CO$_2$ konsentreres rundt RuBisCO i bundle sheath-celler
   - Fotorespirering reduseres kraftig

2. **Vanneffektivitet:**
   - Høyere CO$_2$-konsentrasjon ved RuBisCO
   - Kan holde spalteåpningene mer lukket
   - Mindre vanntap per fiksert CO$_2$

**Konklusjon:**
C4-planter som mais er mer effektive enn C3-planter som hvete under varme, tørre forhold fordi de minimerer fotorespirering og vanntap.`,
    },
    {
      id: 'bio1-2-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Fotosyntesens totalreaksjon:**
$$6CO_2 + 6H_2O \\xrightarrow{\\text{lys}} C_6H_{12}O_6 + 6O_2$$

**Lysreaksjonene (tylakoidmembran):**
- PSII absorberer lys, spalter vann → O$_2$ + H$^+$ + e$^-$
- Elektroner transporteres via elektrontransportkjede
- PSI eksiterer elektroner på nytt → NADPH dannes
- ATP-syntase bruker protongradie → ATP

**Calvin-syklus (stroma):**
- Karbonfiksering: RuBisCO fikserer CO$_2$ til 3-PGA
- Reduksjon: 3-PGA → G3P (bruker ATP + NADPH)
- Regenerering: G3P → RuBP

**Plantetyper:**
- **C3**: Direkte fiksering, fotorespirering ved varme
- **C4**: Romlig separasjon, effektiv ved varme
- **CAM**: Tidsmessig separasjon, effektiv ved tørke`,
    },
  ],
  exercises: [
    {
      id: 'bio1-2-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor i kloroplasten foregår lysreaksjonene?',
      options: [
        { id: 'a', text: 'I tylakoidmembranen', isCorrect: true },
        { id: 'b', text: 'I stroma', isCorrect: false },
        { id: 'c', text: 'I den ytre membranen', isCorrect: false },
        { id: 'd', text: 'I cytoplasma', isCorrect: false },
      ],
      solution: 'Lysreaksjonene foregår i tylakoidmembranen. Her finnes fotosystem I og II, elektrontransportkjeden og ATP-syntase. Tylakoidmembranen er foldet for å gi stor overflate og kan være stablet i grana. Calvin-syklus foregår i stroma.',
    },
    {
      id: 'bio1-2-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva som skjer med vann i lysreaksjonene, og forklar hvor oksygenet som frigis kommer fra.',
      solution: 'I fotosystem II spaltes vann gjennom fotolyse: 2H2O → 4H+ + 4e- + O2. Vannspaltningen drives av lysenergi. Elektronene erstatter de eksiterte elektronene i klorofyll som sendes videre i elektrontransportkjeden. Protonene bidrar til protongradienten i tylakoidlumen. Oksygenet (O2) frigjøres som et biprodukt - dette er kilden til nesten alt oksygen i atmosfæren. Alt oksygen som frigis kommer fra vann, ikke fra CO2.',
    },
    {
      id: 'bio1-2-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er produktene av lysreaksjonene som brukes i Calvin-syklus?',
      options: [
        { id: 'a', text: 'ATP og NADPH', isCorrect: true },
        { id: 'b', text: 'Glukose og O2', isCorrect: false },
        { id: 'c', text: 'CO2 og H2O', isCorrect: false },
        { id: 'd', text: 'ADP og NADP+', isCorrect: false },
      ],
      solution: 'Lysreaksjonene produserer ATP (via kjemiosmose) og NADPH (via reduksjon av NADP+). Disse energibærerne transporteres til stroma der de brukes i Calvin-syklus til å redusere 3-PGA til G3P og regenerere RuBP. O2 frigis også, men brukes ikke i Calvin-syklus.',
    },
    {
      id: 'bio1-2-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar de tre fasene i Calvin-syklus og hva som skjer i hver fase.',
      solution: '1) Karbonfiksering: RuBisCO (enzymet) fikserer CO2 ved å binde det til RuBP (5C), som gir et ustabilt 6C-molekyl som spaltes til 2 × 3-PGA (3C). 2) Reduksjon: 3-PGA fosforyleres av ATP og reduseres av NADPH til G3P (glyceraldehyd-3-fosfat). For hver 6 CO2 som fikseres, dannes 12 G3P. 3) Regenerering: 10 av 12 G3P brukes til å regenerere 6 RuBP ved hjelp av ATP. Dette lukker syklusen. De resterende 2 G3P (tilsvarer 1 glukose) er nettoproduktet.',
    },
    {
      id: 'bio1-2-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type plante åpner spalteåpningene om natten og lukker dem om dagen?',
      options: [
        { id: 'a', text: 'CAM-planter', isCorrect: true },
        { id: 'b', text: 'C3-planter', isCorrect: false },
        { id: 'c', text: 'C4-planter', isCorrect: false },
        { id: 'd', text: 'Alle planter gjør dette', isCorrect: false },
      ],
      solution: 'CAM-planter (Crassulacean Acid Metabolism) åpner spalteåpningene om natten for å ta opp CO2 (som lagres som organiske syrer) og lukker dem om dagen for å spare vann. Om dagen frigjøres CO2 fra syrene og fikseres av RuBisCO. Dette er en tilpasning til tørre miljøer (kaktuser, sukkulenter).',
    },
    {
      id: 'bio1-2-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign C3-, C4- og CAM-fotosyntese med hensyn til strategi, fordeler, ulemper og typiske voksesteder.',
      solution: 'C3-planter: Strategi - direkte fiksering av CO2 av RuBisCO. Fordel - enklest, lavest energikostnad. Ulempe - fotorespirering ved varme (RuBisCO binder O2). Typisk - tempererte strøk, skygge (hvete, ris, trær). C4-planter: Strategi - romlig separasjon, CO2 fikseres først av PEP-karboksylase i mesofyllceller, deretter frigjøres og refikseres av RuBisCO i bundle sheath-celler. Fordel - minimerer fotorespirering, effektiv ved varme. Ulempe - koster ekstra ATP. Typisk - tropiske/subtropiske områder (mais, sukkerrør). CAM-planter: Strategi - tidsmessig separasjon, CO2 tas opp om natten (lagres som syre), fikseres om dagen. Fordel - minimerer vanntap, overlever ekstrem tørke. Ulempe - langsom vekst. Typisk - ørken, aride områder (kaktus, ananas).',
    },
  ],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const BIOLOGI_1_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_2_1,
  CHAPTER_BIOLOGI_1_2_2,
  CHAPTER_BIOLOGI_1_2_3,
  CHAPTER_BIOLOGI_1_2_4,
  CHAPTER_BIOLOGI_1_2_5,
];

export function getBiologi1Del2Chapter(chapterId: string): TextbookChapter | undefined {
  return BIOLOGI_1_DEL2_CHAPTERS.find(chapter => chapter.id === chapterId);
}
