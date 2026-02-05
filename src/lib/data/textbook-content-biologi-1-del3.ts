/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Kapittel 3: DNA og gener (delkapitler)
 *
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 * DNA-struktur, replikasjon, transkripsjon, translasjon og genregulering
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: DNA-strukturen
// ============================================================================

export const CHAPTER_BIOLOGI_1_3_1: TextbookChapter = {
  id: 'biologi-1-3-1',
  courseId: 'biologi-1',
  chapterNumber: '3.1',
  title: 'DNA-strukturen',
  description: 'Nukleotider og basepar, dobbeltheliks-strukturen oppdaget av Watson og Crick, og hvordan DNA organiseres i kromatin og kromosomer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive DNA-molekylets struktur og kjemiske oppbygning',
    'forklare baseparingsreglene og hydrogenbroenes rolle',
    'gjore rede for hvordan DNA organiseres i kromosomer',
    'beskrive forskjellen mellom kromatin og kromosomer',
  ],
  content: [
    {
      id: 'bio1-3-1-intro',
      type: 'text',
      content: `# DNA-strukturen

DNA (deoksyribonukleinsyre) er molekylet som baerer den genetiske informasjonen i alle levende organismer. Oppdagelsen av DNA-strukturen i 1953 var et av de storste gjennombruddene i biologiens historie.

## Historisk bakgrunn

Allerede i 1869 isolerte Friedrich Miescher et stoff han kalte "nuklein" fra cellekjerner. Det tok nesten et arhundre for forskerne kunne avdekke DNA-molekylets fantastiske struktur.

I 1953 publiserte James Watson og Francis Crick sin banebrytende artikkel som beskrev DNA som en dobbeltheliks. Dette arbeidet bygget pa rontgenkrystallografi-data fra Rosalind Franklin og Maurice Wilkins.`,
    },
    {
      id: 'bio1-3-1-def-dna',
      type: 'definition',
      title: 'DNA (Deoksyribonukleinsyre)',
      content: 'DNA er et langt, traadformet molekyl som inneholder den genetiske informasjonen i celler. Det bestar av to komplementaere polynukleotidkjeder som er tvunnet rundt hverandre i en dobbeltheliks. DNA finnes i cellekjernen hos eukaryoter, samt i mitokondrier og kloroplaster.',
    },
    {
      id: 'bio1-3-1-nukleotider',
      type: 'text',
      content: `## Nukleotider - DNAs byggesteiner

DNA er bygget opp av enheter kalt nukleotider. Hver nukleotid bestar av tre deler:

### 1. Fosfatgruppe
- Negativt ladet gruppe (PO₄³⁻)
- Binder nukleotider sammen i kjeden
- Gir DNA negativ ladning

### 2. Deoksyribose (sukker)
- Femkarbon-sukker (pentose)
- "Deoksy" betyr at det mangler en oksygengruppe sammenlignet med ribose
- Danner ryggraden i DNA-molekylet sammen med fosfatgrupper

### 3. Nitrogenbase
Fire forskjellige baser i DNA:
- **Adenin (A)** - purin (dobbeltring)
- **Guanin (G)** - purin (dobbeltring)
- **Cytosin (C)** - pyrimidin (enkeltring)
- **Tymin (T)** - pyrimidin (enkeltring)

### Sukker-fosfat-ryggraden
Nukleotidene kobles sammen ved at fosfatgruppen pa en nukleotid binder seg til sukkeret pa neste nukleotid gjennom fosfodiesterbindinger. Dette danner en lang kjede med alternerende sukker og fosfat - kalt sukker-fosfat-ryggraden.`,
    },
    {
      id: 'bio1-3-1-def-basepar',
      type: 'definition',
      title: 'Baseparing',
      content: 'Baseparing er den spesifikke bindingen mellom komplementaere nitrogenbaser i DNA. Adenin (A) parer alltid med tymin (T) via to hydrogenbrobindinger, mens guanin (G) parer alltid med cytosin (C) via tre hydrogenbrobindinger. Denne komplementariteten er grunnlaget for DNA-replikasjon og genetisk informasjonsoverforsel.',
    },
    {
      id: 'bio1-3-1-dobbeltheliks',
      type: 'text',
      content: `## Dobbeltheliks-strukturen

Watson og Crick beskrev DNA som en dobbeltheliks - to polynukleotidkjeder som er tvunnet rundt hverandre.

### Nøkkelegenskaper

**Antiparallelle kjeder:**
- De to kjedene loper i motsatt retning
- En kjede gar fra 5'-ende til 3'-ende
- Den andre gar fra 3'-ende til 5'-ende
- Tallene refererer til karbonatomene i deoksyribose

**Komplementaer baseparing:**
- A parer med T (2 hydrogenbrobindinger)
- G parer med C (3 hydrogenbrobindinger)
- Chargrffs regler: mengden A = T og G = C

**Heliks-dimensjoner:**
- Diameter: ca. 2 nm
- En full omdreining: ca. 3,4 nm (10 basepar)
- Avstand mellom basepar: 0,34 nm

**Furer i heliksen:**
- Stor fur (major groove) - viktig for proteinbinding
- Liten fur (minor groove)

### Stabiliserende krefter
1. **Hydrogenbrobindinger** mellom basene
2. **Hydrofobe interaksjoner** (base stacking) mellom stablede baser
3. **Ionebindinger** mellom fosfatgrupper og kationer`,
    },
    {
      id: 'bio1-3-1-def-kromosom',
      type: 'definition',
      title: 'Kromosom',
      content: 'Et kromosom er en organisert struktur av DNA og proteiner (histoner) som baerer genetisk informasjon. Mennesker har 46 kromosomer (23 par) i hver kroppscelle. Under celledeling kondenserer kromatin til synlige kromosomer. Hvert kromosom bestar av en lang, sammenhengende DNA-molekyl som kan inneholde tusenvis av gener.',
    },
    {
      id: 'bio1-3-1-organisering',
      type: 'text',
      content: `## DNA-organisering: Fra kromatin til kromosomer

DNA i eukaryote celler er enormt langt - menneskets totale DNA strekker seg over 2 meter! Dette ma pakkes effektivt for a fa plass i cellekjernen.

### Histoner og nukleosomer

**Histoner:**
- Sma, basiske proteiner
- Positivt ladet - binder negativt ladet DNA
- Fem hovedtyper: H1, H2A, H2B, H3, H4

**Nukleosomer:**
- DNA-traad viklet rundt histonkjerne
- Histonkjernen: 8 histoner (2 av hver: H2A, H2B, H3, H4)
- Ca. 147 basepar DNA rundt hver kjerne
- "Perler pa en snor"-struktur

### Kromatinets organisering

**Eukromatin:**
- Los, aktiv form
- Gener kan transkriberes
- Lys i mikroskop

**Heterokromatin:**
- Tett, inaktiv form
- Gener er "slatt av"
- Mork i mikroskop

### Fra kromatin til kromosom

1. **DNA-dobbeltheliks** (2 nm)
2. **Nukleosomer** (11 nm fiber)
3. **30 nm kromatinfiber** (nukleosomer pakket sammen)
4. **Looped domains** (300 nm)
5. **Kondensert kromosom** (700-1400 nm)

Under celledeling kondenserer kromatinet til synlige kromosomer for sikker fordeling til datterceller.`,
    },
    {
      id: 'bio1-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av basesammensetning',
      problem: 'I et DNA-molekyl utgjor adenin 30% av basene. Beregn prosentandelen av de andre basene.',
      solution: `**Losning:**

Ifølge Chargrffs regler:
- A parer med T, sa A = T
- G parer med C, sa G = C
- A + T + G + C = 100%

**Steg 1:** Finn andel tymin
- A = T = 30%

**Steg 2:** Beregn andel G og C
- A + T = 30% + 30% = 60%
- G + C = 100% - 60% = 40%
- G = C = 40% / 2 = 20%

**Svar:**
- Adenin (A): 30%
- Tymin (T): 30%
- Guanin (G): 20%
- Cytosin (C): 20%`,
    },
    {
      id: 'bio1-3-1-example-2',
      type: 'example',
      title: 'Eksempel: DNA-lengde og pakkingsgrad',
      problem: 'Et menneske har ca. 6 milliarder basepar i sitt DNA. Hvor langt ville DNA-molekylet vaere hvis det ble strukket ut?',
      solution: `**Losning:**

**Gitt informasjon:**
- Antall basepar: 6 × 10⁹ bp
- Avstand mellom basepar: 0,34 nm

**Beregning:**
Lengde = Antall basepar × Avstand per basepar
Lengde = 6 × 10⁹ × 0,34 nm
Lengde = 2,04 × 10⁹ nm

**Konvertering til meter:**
2,04 × 10⁹ nm = 2,04 × 10⁹ × 10⁻⁹ m = 2,04 m

**Svar:** DNA-molekylet ville vaere ca. 2 meter langt!

**Refleksjon:**
Dette viser hvor utrolig effektivt DNA er pakket. 2 meter DNA er komprimert inn i en cellekjerne med diameter pa bare ca. 6 mikrometer - en komprimeringsgrad pa over 300 000 ganger!`,
    },
  ],
  exercises: [
    {
      id: 'bio1-3-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke to baser er puriner?',
      options: [
        { id: 'a', text: 'Adenin og guanin', isCorrect: true },
        { id: 'b', text: 'Cytosin og tymin', isCorrect: false },
        { id: 'c', text: 'Adenin og tymin', isCorrect: false },
        { id: 'd', text: 'Guanin og cytosin', isCorrect: false },
      ],
      solution: 'Adenin (A) og guanin (G) er puriner med dobbel ringstruktur. Cytosin (C) og tymin (T) er pyrimidiner med enkel ringstruktur. En purin parer alltid med et pyrimidin.',
    },
    {
      id: 'bio1-3-1-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er de tre komponentene i en nukleotid?',
      solution: 'En nukleotid bestar av: 1) En fosfatgruppe (PO₄³⁻), 2) Et sukker (deoksyribose i DNA), og 3) En nitrogenbase (A, T, G eller C). Fosfatgruppen og sukkeret danner ryggraden, mens basen stikker ut og kan pare med komplementaer base.',
    },
    {
      id: 'bio1-3-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mange hydrogenbrobindinger dannes mellom guanin og cytosin?',
      options: [
        { id: 'a', text: '3', isCorrect: true },
        { id: 'b', text: '2', isCorrect: false },
        { id: 'c', text: '4', isCorrect: false },
        { id: 'd', text: '1', isCorrect: false },
      ],
      solution: 'Guanin og cytosin (G-C) danner tre hydrogenbrobindinger, mens adenin og tymin (A-T) danner kun to. Dette gjor G-C-bindinger sterkere, og DNA med hoy G-C-andel har hoyere smeltepunkt.',
    },
    {
      id: 'bio1-3-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med at DNA-kjedene er antiparallelle.',
      solution: 'Antiparallell betyr at de to DNA-kjedene loper i motsatt retning. Den ene kjeden gar fra 5\'-enden til 3\'-enden, mens den komplementaere kjeden gar fra 3\'-enden til 5\'-enden. Tallene 5\' og 3\' refererer til karbonatomene i deoksyribosesukkeret der fosfatgrupper og hydrokylgrupper er festet. Denne orienteringen er viktig for DNA-replikasjon og transkripsjon.',
    },
    {
      id: 'bio1-3-1-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv forskjellen mellom eukromatin og heterokromatin.',
      solution: 'Eukromatin er en los, aktiv form av kromatin der DNA er tilgjengelig for transkripsjon. Det ser lyst ut i mikroskop og inneholder aktivt transkriberte gener. Heterokromatin er tett pakket, inaktiv form der genene er "slatt av". Det ser morkt ut i mikroskop. Celler kan regulere genaktivitet ved a endre mellom disse tilstandene.',
    },
    {
      id: 'bio1-3-1-ex6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er hovedfunksjonen til histonproteiner?',
      options: [
        { id: 'a', text: 'Pakke DNA effektivt og regulere gentilgang', isCorrect: true },
        { id: 'b', text: 'Katalysere DNA-replikasjon', isCorrect: false },
        { id: 'c', text: 'Transportere mRNA ut av kjernen', isCorrect: false },
        { id: 'd', text: 'Spalte DNA under celledeling', isCorrect: false },
      ],
      solution: 'Histoner er basiske proteiner som pakker DNA i kompakte strukturer kalt nukleosomer. De hjelper med a komprimere 2 meter DNA inn i en liten cellekjerne. I tillegg regulerer kjemiske modifikasjoner av histoner (acetylering, metylering osv.) hvilke gener som er tilgjengelige for transkripsjon.',
    },
  ],
};

// ============================================================================
// Kapittel 3.2: DNA-replikasjon
// ============================================================================

export const CHAPTER_BIOLOGI_1_3_2: TextbookChapter = {
  id: 'biologi-1-3-2',
  courseId: 'biologi-1',
  chapterNumber: '3.2',
  title: 'DNA-replikasjon',
  description: 'Semikonservativ replikasjon, replikasjonsgaffelen og de viktige enzymene som deltar i DNA-kopiering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare prinsippet om semikonservativ replikasjon',
    'beskrive replikasjonsgaffelens struktur og funksjon',
    'gjore rede for hovedenzymene i DNA-replikasjon',
    'forklare forskjellen mellom ledende og etterslepende trad',
  ],
  content: [
    {
      id: 'bio1-3-2-intro',
      type: 'text',
      content: `# DNA-replikasjon

For at en celle skal kunne dele seg, ma den forst kopiere sitt DNA. Denne prosessen kalles DNA-replikasjon. Det er essensielt at kopieringen er noyaktig for a sikre at genetisk informasjon overføres korrekt til dattercellene.

## Hvorfor er replikasjon viktig?

- **Celledeling:** Hver dattercelle trenger en komplett kopi av DNA
- **Vekst:** Organismen vokser ved at celler deler seg
- **Reparasjon:** Skadet vev erstattes med nye celler
- **Reproduksjon:** Arvestoff overføres til neste generasjon

Menneskets DNA bestar av ca. 6 milliarder basepar, og hele genomet kopieres pa bare noen timer med en feilrate pa kun 1 feil per milliard basepar!`,
    },
    {
      id: 'bio1-3-2-def-replikasjon',
      type: 'definition',
      title: 'DNA-replikasjon',
      content: 'DNA-replikasjon er prosessen der DNA-molekylet kopierer seg selv for celledeling. Prosessen er semikonservativ, noe som betyr at hvert nytt DNA-molekyl bestar av en original (foreldrerad) og en nysyntetisert trad. Replikasjon skjer i S-fasen av cellesyklus.',
    },
    {
      id: 'bio1-3-2-semikonservativ',
      type: 'text',
      content: `## Semikonservativ replikasjon

I 1958 beviste Matthew Meselson og Franklin Stahl at DNA-replikasjon er semikonservativ.

### Tre mulige modeller ble vurdert:

**1. Konservativ replikasjon:**
- Det originale DNA forblir intakt
- Et helt nytt DNA-molekyl dannes
- FEIL modell

**2. Semikonservativ replikasjon:**
- DNA-heliksen apnes
- Hver original trad tjener som mal for en ny trad
- Hvert nytt DNA har en gammel og en ny trad
- KORREKT modell

**3. Dispersiv replikasjon:**
- Bade gammelt og nytt DNA blandes tilfeldig
- Begge trader inneholder blanding av gammelt og nytt
- FEIL modell

### Meselson-Stahl-eksperimentet

De dyrket bakterier i medium med tungt nitrogen (¹⁵N), deretter i lett nitrogen (¹⁴N), og analyserte DNA-tettheten etter ulike cellegenerasjoner. Resultatene bekreftet semikonservativ replikasjon.`,
    },
    {
      id: 'bio1-3-2-def-repgaffel',
      type: 'definition',
      title: 'Replikasjonsgaffel',
      content: 'Replikasjonsgaffelen er Y-formet struktur som dannes nar DNA-dobbeltheliks apnes under replikasjon. Her skjer selve kopieringen av DNA. Replikasjonen gar i begge retninger fra startpunktet (origin of replication), sa det dannes to replikasjonsgafler som beveger seg i motsatte retninger.',
    },
    {
      id: 'bio1-3-2-repgaffel',
      type: 'text',
      content: `## Replikasjonsgaffelen

Replikasjon starter ved spesielle sekvenser kalt origins of replication (replikasjonsopphav).

### Struktur

Ved replikasjonsgaffelen skjer folgende:
1. DNA-dobbeltheliks apnes og separeres
2. Enkeltradede omrader stabiliseres
3. Nye komplementaere trader syntetiseres

### Ledende og etterslepende trad

Fordi DNA-polymerase kun kan syntetisere i 5' → 3' retning, oppstar et problem:

**Ledende trad (leading strand):**
- Syntetiseres kontinuerlig
- Gar i samme retning som replikasjonsgaffelen beveger seg
- 5' → 3' retning mot gaffelen

**Etterslepende trad (lagging strand):**
- Syntetiseres diskontinuerlig
- Gar mot replikasjonsgaffelens bevegelse
- Dannes i korte fragmenter kalt Okazaki-fragmenter
- Fragmentene skjotes senere sammen

### Okazaki-fragmenter

- Korte DNA-biter (100-200 bp i eukaryoter)
- Hver starter med en RNA-primer
- Skjotes sammen av DNA-ligase etter at primer er fjernet`,
    },
    {
      id: 'bio1-3-2-enzymer',
      type: 'text',
      content: `## Enzymer i DNA-replikasjon

Flere enzymer arbeider koordinert for a kopiere DNA noyaktig og effektivt.

### Helikase
- **Funksjon:** Apner DNA-dobbeltheliks
- **Mekanisme:** Bryter hydrogenbrobindinger mellom basene
- **Energi:** Bruker ATP
- **Resultat:** Skaper enkeltradede maler

### Primase
- **Funksjon:** Lager RNA-primere
- **Hvorfor nodvendig:** DNA-polymerase kan ikke starte syntese uten primer
- **Primer:** Kort RNA-sekvens (ca. 10 nukleotider)
- **Viktig:** Gir 3'-OH-gruppe for DNA-polymerase a bygge pa

### DNA-polymerase
- **Hovedfunksjon:** Syntetiserer ny DNA-trad
- **Retning:** Kun 5' → 3'
- **Proofreading:** Kan korrigere feil (3' → 5' exonuklease-aktivitet)
- **Ulike typer:** DNA pol I, II, III (prokaryoter), Pol α, δ, ε (eukaryoter)

**DNA-polymerase III (prokaryoter):**
- Hovedenzym for replikasjon
- Hoy prosessivitet (syntetiserer lange strekk)
- Lav feilrate

**DNA-polymerase I:**
- Fjerner RNA-primere
- Fyller inn hull med DNA

### Ligase
- **Funksjon:** Skjøter DNA-fragmenter sammen
- **Mekanisme:** Danner fosfodiesterbindinger
- **Viktig for:** Koble Okazaki-fragmenter pa etterslepende trad

### Andre viktige proteiner

**Single-strand binding proteins (SSB):**
- Stabiliserer enkeltradede DNA
- Hindrer at tradene folder seg eller parer igjen

**Topoisomerase/Gyrase:**
- Lser spenninger i DNA foran gaffelen
- Hindrer supercoiling`,
    },
    {
      id: 'bio1-3-2-def-polymerase',
      type: 'definition',
      title: 'DNA-polymerase',
      content: 'DNA-polymerase er enzymet som syntetiserer nye DNA-trader ved a legge til nukleotider komplementaert til maltråden. Enzymet kan kun syntetisere i 5\' til 3\' retning og trenger en primer med fri 3\'-OH-gruppe for a starte. De fleste DNA-polymeraser har ogsa korrekturlesingsaktivitet for a rette opp feil.',
    },
    {
      id: 'bio1-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Identifisere trad-retninger',
      problem: 'I en replikasjonsgaffel har maltråden sekvensen 5\'-ATGCCGTA-3\'. Hva blir sekvensen til den nysyntetiserte traden?',
      solution: `**Losning:**

**Steg 1:** Husk baseparingsreglene
- A parer med T
- T parer med A
- G parer med C
- C parer med G

**Steg 2:** Finn komplementaer sekvens
Maltrad: 5'-ATGCCGTA-3'
Ny trad: 3'-TACGGCAT-5'

**Steg 3:** Skriv i konvensjonell retning (5' → 3')
Ny trad: 5'-TACGGCAT-3' (reversert)

Vent! La oss vaere noyaktige:
- Maltrad: 5'-ATGCCGTA-3'
- Komplementaer: 3'-TACGGCAT-5'

Nar vi skriver den nye traden i 5' → 3' retning:
**Ny trad: 5'-TACGGCAT-3'**

Siden DNA-polymerase leser maltrad 3' → 5' og syntetiserer 5' → 3', vil syntesen ga fra venstre mot hoyre pa maltråden.`,
    },
    {
      id: 'bio1-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Okazaki-fragmenter',
      problem: 'Forklar hvorfor Okazaki-fragmenter dannes pa den etterslepende tråden og ikke pa den ledende traden.',
      solution: `**Losning:**

**Bakgrunn:**
DNA-polymerase kan KUN syntetisere i 5' → 3' retning. Dette skaper et problem fordi DNA-tradene er antiparallelle.

**Ledende trad:**
- Maltrad gar 3' → 5' i gaffelens bevegelsesretning
- Ny trad syntetiseres 5' → 3' mot gaffelen
- Dette er SAMME retning som gaffelen beveger seg
- Syntese kan vaere KONTINUERLIG

**Etterslepende trad:**
- Maltrad gar 5' → 3' i gaffelens bevegelsesretning
- Ny trad ma syntetiseres 5' → 3' BORT fra gaffelen
- Dette er MOTSATT retning av gaffelens bevegelse
- Nar gaffelen beveger seg, eksponeres nytt maltrad BAK polymerasen
- Ma starte nye syntesepunkter - DISKONTINUERLIG

**Resultat:**
Pa etterslepende trad dannes korte fragmenter (Okazaki-fragmenter) som hver starter med en RNA-primer. Disse skjotes senere sammen av DNA-ligase etter at primerne er fjernet og erstattet med DNA.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-3-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr det at DNA-replikasjon er semikonservativ?',
      options: [
        { id: 'a', text: 'Hvert nytt DNA-molekyl har en gammel og en ny trad', isCorrect: true },
        { id: 'b', text: 'Bare halvparten av DNA kopieres', isCorrect: false },
        { id: 'c', text: 'Det originale DNA forblir helt intakt', isCorrect: false },
        { id: 'd', text: 'Gammelt og nytt DNA blandes tilfeldig', isCorrect: false },
      ],
      solution: 'Semikonservativ betyr "halvveis bevart". Nar DNA kopieres, separeres de to originale tradene, og hver tjener som mal for en ny trad. Resultatet er to DNA-molekyler som hver har en original (bevart) trad og en nysyntetisert trad.',
    },
    {
      id: 'bio1-3-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn fire viktige enzymer i DNA-replikasjon og beskriv funksjonen til hver.',
      solution: '1) Helikase - apner DNA-dobbeltheliks ved a bryte hydrogenbrobindingene mellom basene. 2) Primase - syntetiserer korte RNA-primere som gir DNA-polymerase et startpunkt. 3) DNA-polymerase - syntetiserer ny DNA-trad ved a legge til nukleotider komplementaert til maltråden (5\' → 3\'). 4) Ligase - skjoter Okazaki-fragmenter sammen ved a danne fosfodiesterbindinger.',
    },
    {
      id: 'bio1-3-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'I hvilken retning syntetiserer DNA-polymerase?',
      options: [
        { id: 'a', text: '5\' til 3\'', isCorrect: true },
        { id: 'b', text: '3\' til 5\'', isCorrect: false },
        { id: 'c', text: 'Begge retninger', isCorrect: false },
        { id: 'd', text: 'Tilfeldig retning', isCorrect: false },
      ],
      solution: 'DNA-polymerase kan KUN syntetisere nye trader i 5\' til 3\' retning. Dette er fordi enzymet legger til nye nukleotider pa 3\'-enden av den voksende kjeden. Denne begrensningen er grunnen til at det dannes en ledende og en etterslepende trad.',
    },
    {
      id: 'bio1-3-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom ledende trad og etterslepende trad.',
      solution: 'Ledende trad syntetiseres kontinuerlig i samme retning som replikasjonsgaffelen beveger seg. Etterslepende trad syntetiseres diskontinuerlig i korte fragmenter (Okazaki-fragmenter) fordi DNA-polymerase ma jobbe bort fra gaffelen. Begge trader syntetiseres 5\' → 3\', men pa grunn av de antiparallelle tradene og gaffelens bevegelse, ma den etterslepende traden lages stykkevis.',
    },
    {
      id: 'bio1-3-2-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor trenger DNA-polymerase en primer?',
      options: [
        { id: 'a', text: 'Den kan ikke starte syntese uten en fri 3\'-OH-gruppe', isCorrect: true },
        { id: 'b', text: 'Primeren gir energi til reaksjonen', isCorrect: false },
        { id: 'c', text: 'Primeren apner DNA-heliksen', isCorrect: false },
        { id: 'd', text: 'Primeren beskytter DNA mot nedbrytning', isCorrect: false },
      ],
      solution: 'DNA-polymerase kan ikke initiere ny syntese de novo. Enzymet kan bare legge til nukleotider pa en eksisterende 3\'-OH-gruppe. Primase lager en kort RNA-primer som gir denne frie 3\'-OH-gruppen. Etter replikasjon fjernes RNA-primerne og erstattes med DNA.',
    },
    {
      id: 'bio1-3-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv hvordan DNA-polymerase oppnar hoy noyaktighet i kopieringen.',
      solution: 'DNA-polymerase oppnar hoy noyaktighet gjennom flere mekanismer: 1) Selektiv nukleotidinnsetting - enzymet velger nukleotider basert pa korrekt baseparing. 2) Proofreading (korrekturlesing) - 3\' → 5\' exonuklease-aktivitet fjerner feil innsatte nukleotider. 3) Mismatch repair - cellen har reparasjonssystemer som oppdager og retter feil etter replikasjon. Disse mekanismene sammen gir en feilrate pa kun ca. 1 per 10⁹-10¹⁰ basepar.',
    },
  ],
};

// ============================================================================
// Kapittel 3.3: Transkripsjon
// ============================================================================

export const CHAPTER_BIOLOGI_1_3_3: TextbookChapter = {
  id: 'biologi-1-3-3',
  courseId: 'biologi-1',
  chapterNumber: '3.3',
  title: 'Transkripsjon',
  description: 'mRNA-syntese, RNA-polymerase og prosessering av mRNA inkludert capping, polyadenylering og spleising.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare transkripsjonsprosessen fra DNA til mRNA',
    'beskrive RNA-polymerasens funksjon og transkripsjonens faser',
    'gjøre rede for mRNA-prosessering i eukaryoter',
    'forklare betydningen av spleising og alternative spleisingsmoenstre',
  ],
  content: [
    {
      id: 'bio1-3-3-intro',
      type: 'text',
      content: `# Transkripsjon

Transkripsjon er forste steg i genekspresjon - prosessen der genetisk informasjon i DNA omsettes til funksjonelle produkter. Under transkripsjon kopieres informasjonen fra ett gen til et RNA-molekyl.

## Det sentrale dogme

Francis Crick formulerte det sentrale dogme i molekylaerbiologien:

**DNA → RNA → Protein**

- **DNA → RNA:** Transkripsjon
- **RNA → Protein:** Translasjon

Transkripsjon foregår i cellekjernen hos eukaryoter, mens translasjon skjer i cytoplasma pa ribosomene.`,
    },
    {
      id: 'bio1-3-3-def-transkripsjon',
      type: 'definition',
      title: 'Transkripsjon',
      content: 'Transkripsjon er prosessen der genetisk informasjon i DNA kopieres til RNA. RNA-polymerase leser DNA-maltråden og syntetiserer et komplementaert RNA-molekyl. I eukaryoter transkriberes mRNA-forloperen (pre-mRNA) som deretter prosesseres for transport ut av kjernen.',
    },
    {
      id: 'bio1-3-3-rna-typer',
      type: 'text',
      content: `## RNA-typer

Transkripsjon produserer flere typer RNA:

### mRNA (messenger RNA)
- Baerer genetisk informasjon fra DNA til ribosomene
- Koder for proteiner
- Relativt kort levetid

### rRNA (ribosomal RNA)
- Strukturell komponent i ribosomer
- Katalyserer peptidbindingsdannelse
- Mesteparten av cellens RNA

### tRNA (transfer RNA)
- Frakter aminosyrer til ribosomet
- Har antikodon som matcher mRNA-kodon
- Adaptermoekyl mellom mRNA og protein

### Andre RNA-typer
- **snRNA:** Involvert i spleising
- **miRNA:** Regulerer genekspresjon
- **lncRNA:** Lang ikke-kodende RNA med regulatoriske funksjoner`,
    },
    {
      id: 'bio1-3-3-def-rnapol',
      type: 'definition',
      title: 'RNA-polymerase',
      content: 'RNA-polymerase er enzymet som katalyserer transkripsjon. Det leser DNA-maltråden 3\' → 5\' og syntetiserer RNA 5\' → 3\'. I motsetning til DNA-polymerase trenger RNA-polymerase ingen primer. Eukaryoter har tre hovedtyper: RNA pol I (rRNA), RNA pol II (mRNA), og RNA pol III (tRNA og sma RNA).',
    },
    {
      id: 'bio1-3-3-prosess',
      type: 'text',
      content: `## Transkripsjonsprosessen

### Initiering

**1. Promotorgjenkjenning:**
- RNA-polymerase binder til promotorregionen
- Promotor: DNA-sekvens som signaliserer transkripsjonsstart
- Viktige sekvenser: TATA-boks (eukaryoter), -10 og -35 boks (prokaryoter)

**2. Transkripsjonsfaktorer (eukaryoter):**
- Generelle transkripsjonsfaktorer (GTF) hjelper RNA pol II
- Danner pre-initieringskompleks
- TFIID gjenkjenner TATA-boks

**3. DNA-apning:**
- RNA-polymerase apner DNA-dobbeltheliks
- Danner transkripsjonboble (ca. 17 bp)

### Elongering

**Syntese av RNA-trad:**
- RNA-polymerase beveger seg langs maltråden
- Leser DNA 3' → 5', syntetiserer RNA 5' → 3'
- Legger til ribonukleotider komplementaert til maltrad
- A i DNA → U i RNA (uracil erstatter tymin)
- Hastighet: ca. 40 nukleotider per sekund

**Maltrad vs. kodende trad:**
- Maltrad: DNA-traden som leses (antisense)
- Kodende trad: DNA-traden med samme sekvens som mRNA (sense)

### Terminering

**Prokaryoter:**
- Rho-avhengig: Rho-protein lser RNA fra DNA
- Rho-uavhengig: Hairpin-struktur i RNA forårsaker frigjoring

**Eukaryoter:**
- Polyadenyleringssignal (AAUAAA) gjenkjennes
- RNA klippes og poly(A)-hale legges til
- RNA-polymerase fortsetter kort for sa a falle av`,
    },
    {
      id: 'bio1-3-3-prosessering',
      type: 'text',
      content: `## mRNA-prosessering i eukaryoter

pre-mRNA ma prosesseres for det blir funksjonelt mRNA. Tre hovedmodifikasjoner:

### 1. 5'-capping

**Hva skjer:**
- 7-metylguanosin (m7G) legges til 5'-enden
- Kobles via uvanlig 5'-5' trifosfatbinding

**Funksjoner:**
- Beskytter mRNA mot nedbrytning
- Nodvendig for ribosom-gjenkjenning
- Hjelper eksport fra kjernen

### 2. 3'-polyadenylering

**Hva skjer:**
- 100-250 adeninnukleotider legges til 3'-enden
- Poly(A)-hale lages av poly(A)-polymerase
- Signal: AAUAAA-sekvens i pre-mRNA

**Funksjoner:**
- Stabiliserer mRNA
- Viktig for eksport fra kjernen
- Nodvendig for effektiv translasjon

### 3. Spleising

**Hva fjernes:**
- Introner: Ikke-kodende sekvenser inne i genet
- Lages av spleiseosom (snRNP-kompleks)

**Hva beholdes:**
- Eksoner: Kodende sekvenser
- Skjotes sammen til ferdig mRNA

**Alternativ spleising:**
- Samme gen kan gi flere ulike proteiner
- Ulike kombinasjoner av eksoner
- Oker proteindiversitet dramatisk`,
    },
    {
      id: 'bio1-3-3-def-spleising',
      type: 'definition',
      title: 'Spleising',
      content: 'Spleising er prosessen der introner (ikke-kodende sekvenser) fjernes fra pre-mRNA og eksoner (kodende sekvenser) skjotes sammen. Prosessen katalyseres av spleisosomet, et kompleks av snRNA og proteiner. Alternativ spleising gjor at ett gen kan kode for flere ulike proteiner.',
    },
    {
      id: 'bio1-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Fra DNA til mRNA',
      problem: 'DNA-maltråden har sekvensen 3\'-TACGGCAAATTT-5\'. Skriv sekvensen til det transkriberte mRNA.',
      solution: `**Losning:**

**Steg 1:** Husk transkripsjonsprinsippene
- RNA-polymerase leser maltrad 3' → 5'
- Syntetiserer RNA 5' → 3'
- Baseparingsregler: A→U, T→A, G→C, C→G

**Steg 2:** Oversett hver base
- Maltrad: 3'-TACGGCAAATTT-5'

| DNA (maltrad) | T | A | C | G | G | C | A | A | A | T | T | T |
|---------------|---|---|---|---|---|---|---|---|---|---|---|---|
| mRNA          | A | U | G | C | C | G | U | U | U | A | A | A |

**Steg 3:** Skriv mRNA med riktig orientering
- mRNA: 5'-AUGCCGUUUAAA-3'

**Sjekk:**
- mRNA-sekvensen er identisk med den kodende DNA-traden, bare med U istedenfor T
- Kodende trad: 5'-ATGCCGTTTAAA-3' (samme som mRNA, men med T)`,
    },
    {
      id: 'bio1-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Alternativ spleising',
      problem: 'Et gen har 5 eksoner. Vis hvordan alternativ spleising kan gi forskjellige proteiner fra samme gen.',
      solution: `**Losning:**

**Genets struktur:**
Ekson 1 - Intron - Ekson 2 - Intron - Ekson 3 - Intron - Ekson 4 - Intron - Ekson 5

**Mulige mRNA-varianter gjennom alternativ spleising:**

**Variant A (alle eksoner):**
Ekson 1 + Ekson 2 + Ekson 3 + Ekson 4 + Ekson 5
→ Fullengde protein

**Variant B (hopper over ekson 3):**
Ekson 1 + Ekson 2 + Ekson 4 + Ekson 5
→ Kortere protein uten domene kodet av ekson 3

**Variant C (hopper over ekson 2 og 4):**
Ekson 1 + Ekson 3 + Ekson 5
→ Protein med kun sentrale domener

**Betydning:**
- Ett gen kan produsere mange ulike proteiner
- Mennesket har ca. 20 000 gener, men over 100 000 ulike proteiner
- Ulike vev kan produsere ulike proteinvarianter fra samme gen
- Gir enorm biologisk kompleksitet`,
    },
  ],
  exercises: [
    {
      id: 'bio1-3-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket enzym utforer transkripsjon?',
      options: [
        { id: 'a', text: 'RNA-polymerase', isCorrect: true },
        { id: 'b', text: 'DNA-polymerase', isCorrect: false },
        { id: 'c', text: 'Helikase', isCorrect: false },
        { id: 'd', text: 'Ligase', isCorrect: false },
      ],
      solution: 'RNA-polymerase er enzymet som katalyserer transkripsjon. Det leser DNA-maltråden og syntetiserer et komplementaert RNA-molekyl. DNA-polymerase brukes i DNA-replikasjon, ikke transkripsjon.',
    },
    {
      id: 'bio1-3-3-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er de tre hovedtypene mRNA-prosessering i eukaryoter?',
      solution: 'De tre hovedtypene mRNA-prosessering er: 1) 5\'-capping - en 7-metylguanosin-kappe legges til 5\'-enden for beskyttelse og ribosom-gjenkjenning. 2) 3\'-polyadenylering - en poly(A)-hale pa 100-250 adeniner legges til 3\'-enden for stabilitet. 3) Spleising - introner fjernes og eksoner skjotes sammen av spleisosomet.',
    },
    {
      id: 'bio1-3-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken base i RNA erstatter tymin fra DNA?',
      options: [
        { id: 'a', text: 'Uracil (U)', isCorrect: true },
        { id: 'b', text: 'Adenin (A)', isCorrect: false },
        { id: 'c', text: 'Guanin (G)', isCorrect: false },
        { id: 'd', text: 'Cytosin (C)', isCorrect: false },
      ],
      solution: 'RNA inneholder uracil (U) istedenfor tymin (T). Nar adenin i DNA-maltråden transkriberes, legges uracil inn i RNA. Ellers er baseparingsreglene like: G parer med C, og A parer med U i RNA.',
    },
    {
      id: 'bio1-3-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom eksoner og introner.',
      solution: 'Eksoner er de kodende sekvensene i et gen som beholdes i det ferdige mRNA og oversettes til protein. Introner er ikke-kodende sekvenser som ligger mellom eksonene og fjernes under spleising. Introner finnes hovedsakelig i eukaryote gener. Gjennom alternativ spleising kan ulike kombinasjoner av eksoner inkluderes, noe som gir flere proteinvarianter fra samme gen.',
    },
    {
      id: 'bio1-3-3-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er funksjonen til TATA-boksen?',
      options: [
        { id: 'a', text: 'Promotorelement som posisjonerer RNA-polymerase', isCorrect: true },
        { id: 'b', text: 'Startkodon for translasjon', isCorrect: false },
        { id: 'c', text: 'Spleisingsignal for intronfjening', isCorrect: false },
        { id: 'd', text: 'Polyadenyleringssignal', isCorrect: false },
      ],
      solution: 'TATA-boksen er et promotorelement som finnes ca. 25-30 basepar oppstrøms for transkripsjonsstart i mange eukaryote gener. Den gjenkjennes av TFIID (en generell transkripsjonsfaktor), som hjelper med a posisjonere RNA-polymerase II korrekt for transkripsjonsinitiering.',
    },
    {
      id: 'bio1-3-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan alternativ spleising oker proteindiversiteten hos eukaryoter.',
      solution: 'Alternativ spleising tillater at ulike kombinasjoner av eksoner inkluderes i ferdig mRNA fra samme gen. For eksempel kan et gen med 5 eksoner produsere mRNA med alle 5, eller hoppe over enkelte eksoner. Dette gir flere ulike proteiner fra ett gen. Mennesket har ca. 20 000 gener, men produserer over 100 000 ulike proteiner takket vaere alternativ spleising. Ulike celletyper kan bruke ulike spleisingsmoenstre, noe som bidrar til cellespesialisering.',
    },
  ],
};

// ============================================================================
// Kapittel 3.4: Translasjon
// ============================================================================

export const CHAPTER_BIOLOGI_1_3_4: TextbookChapter = {
  id: 'biologi-1-3-4',
  courseId: 'biologi-1',
  chapterNumber: '3.4',
  title: 'Translasjon',
  description: 'Proteinsyntese pa ribosomer med tRNA, kodon-antikodon-gjenkjenning og de tre fasene: initiering, elongering og terminering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare ribosomets struktur og funksjon i translasjon',
    'beskrive tRNAs rolle som adaptermoekyl',
    'gjore rede for kodon-antikodon-interaksjon',
    'forklare de tre fasene i translasjon',
  ],
  content: [
    {
      id: 'bio1-3-4-intro',
      type: 'text',
      content: `# Translasjon

Translasjon er prosessen der genetisk informasjon i mRNA oversettes til en aminosyresekvens - et protein. Dette er det andre steget i genekspresjon etter transkripsjon.

## Oversikt

**Sted:** Ribosomer i cytoplasma (og pa ru ER)
**Input:** mRNA med kodonsekvens
**Output:** Polypeptidkjede (protein)
**Adaptermolekyl:** tRNA

Ribosomet fungerer som en molekylaer maskin som leser mRNA tre baser om gangen (kodon) og kobler pa riktig aminosyre via tRNA.`,
    },
    {
      id: 'bio1-3-4-def-translasjon',
      type: 'definition',
      title: 'Translasjon',
      content: 'Translasjon er prosessen der ribosomer leser mRNA-sekvensen og syntetiserer et protein. mRNA leses tre nukleotider om gangen (kodon), og hvert kodon spesifiserer en bestemt aminosyre. tRNA-molekyler frakter aminosyrene til ribosomet der de kobles sammen i en polypeptidkjede.',
    },
    {
      id: 'bio1-3-4-ribosom',
      type: 'text',
      content: `## Ribosomet

Ribosomer er komplekse molekylmaskiner bygd av rRNA og proteiner.

### Struktur

**To subenheter:**
- **Stor subenhet:** Katalyserer peptidbindingsdannelse
- **Liten subenhet:** mRNA-binding og kodon-avlesning

**Storrelser:**
- Prokaryoter: 70S (50S + 30S)
- Eukaryoter: 80S (60S + 40S)
- S = Svedberg-enheter (sedimentasjonshastighet)

### Bindingsseter

Ribosomet har tre tRNA-bindingsseter:

**A-sete (Aminoacyl):**
- Innkommende aminoacyl-tRNA binder her
- Kodon-antikodon-gjenkjenning skjer her

**P-sete (Peptidyl):**
- Holder tRNA med voksende polypeptidkjede
- Peptidbindingsdannelse skjer mellom P- og A-sete

**E-sete (Exit):**
- Tomt tRNA forlater ribosomet herfra
- Siste stopp for utbrukt tRNA`,
    },
    {
      id: 'bio1-3-4-trna',
      type: 'text',
      content: `## tRNA - Adaptermoleylet

tRNA (transfer-RNA) er broen mellom mRNA-kodon og aminosyre.

### Struktur

**Kleverbladform:**
- 75-95 nukleotider langt
- Folder seg til karakteristisk L-form
- Flere sløyfer og stilker

**Viktige regioner:**

**1. Antikodon-sløyfe:**
- 3 nukleotider som baseparer med mRNA-kodon
- Komplementaer til kodon (antiparallell)

**2. Akseptorstilk:**
- 3'-enden med sekvensen CCA
- Her festes aminosyren

**3. D-løkke og T-løkke:**
- Inneholder modifiserte baser
- Viktig for tRNA-folding og gjenkjenning

### Aminoacyl-tRNA-syntaser

**Funksjon:**
- Kobler riktig aminosyre til riktig tRNA
- 20 ulike syntaser (en for hver aminosyre)
- Kritisk for translasjons nøyaktighet

**Reaksjon:**
Aminosyre + tRNA + ATP → Aminoacyl-tRNA + AMP + PPi

**Proofreading:**
- Syntasene har korrekturlesingsmekanismer
- Sikrer at riktig aminosyre festes`,
    },
    {
      id: 'bio1-3-4-def-kodon',
      type: 'definition',
      title: 'Kodon og antikodon',
      content: 'Et kodon er en sekvens pa tre nukleotider i mRNA som spesifiserer en bestemt aminosyre (eller stoppsingal). Det finnes 64 mulige kodoner. Et antikodon er den komplementaere trebasesekvensen pa tRNA som gjenkjenner og baseparer med kodon. Kodon-antikodon-interaksjon sikrer at riktig aminosyre settes inn i proteinet.',
    },
    {
      id: 'bio1-3-4-faser',
      type: 'text',
      content: `## Translasjonens tre faser

### 1. Initiering

**Hos eukaryoter:**

**Steg 1:** Initieringsfaktorer og liten ribosom-subenhet binder mRNA
- Gjenkjenner 5'-cap
- Scanner etter startkodon AUG

**Steg 2:** Initiator-tRNA binder
- Baerer metionin (Met)
- Binder til P-setet
- Antikodon: UAC (parer med AUG)

**Steg 3:** Stor subenhet kobles pa
- Danner komplett 80S ribosom
- Klar for elongering

### 2. Elongering

En syklus per aminosyre som legges til:

**Steg 1: Kodongjenkjenning**
- Aminoacyl-tRNA binder til A-sete
- Antikodon ma matche kodon
- Krever GTP-hydrolyse (EF-Tu)

**Steg 2: Peptidbindingsdannelse**
- Katalyseres av 23S rRNA (ribozym)
- Polypeptidkjeden overføres fra P-sete-tRNA til A-sete-aminosyre
- Peptidbinding dannes

**Steg 3: Translokasjon**
- Ribosomet beveger seg ett kodon (3 baser) langs mRNA
- A-sete-tRNA → P-sete
- P-sete-tRNA → E-sete
- Krever EF-G og GTP

**Hastighet:** Ca. 15-20 aminosyrer per sekund

### 3. Terminering

**Nar stoppkodon nar A-sete:**
- Stoppkodoner: UAA, UAG, UGA
- Ingen tRNA med matchende antikodon

**Frigjøringsfaktorer (RF):**
- Gjenkjenner stoppkodon
- Trigger hydrolyse av polypeptidkjeden
- Ribosom-subenhetene dissosierer

**Resultat:**
- Ferdig polypeptidkjede frigjøres
- Ribosom deles og resirkuleres
- mRNA kan translateres pa nytt`,
    },
    {
      id: 'bio1-3-4-def-peptidbinding',
      type: 'definition',
      title: 'Peptidbinding',
      content: 'En peptidbinding er den kovalente bindingen mellom aminosyrer i et protein. Den dannes mellom karboksylgruppen (-COOH) pa en aminosyre og aminogruppen (-NH₂) pa neste aminosyre, med frigjoring av vann. Pa ribosomet katalyseres peptidbindingsdannelse av rRNA i den store subenheten.',
    },
    {
      id: 'bio1-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Fra mRNA til aminosyresekvens',
      problem: 'mRNA har sekvensen 5\'-AUGGCUUACUAA-3\'. Oversett denne til en aminosyresekvens ved hjelp av kodontabellen.',
      solution: `**Losning:**

**Steg 1:** Del mRNA inn i kodoner (3 baser)
5'-AUG-GCU-UAC-UAA-3'

**Steg 2:** Oversett hvert kodon (bruk standardkodontabell)
- AUG = Metionin (Met) - startkodon
- GCU = Alanin (Ala)
- UAC = Tyrosin (Tyr)
- UAA = STOPP

**Steg 3:** Skriv aminosyresekvensen
Met-Ala-Tyr (eller M-A-Y i enkeltbokstavkode)

**Svar:** Peptidet er: Metionin - Alanin - Tyrosin

**Merk:**
- Translasjon starter alltid med AUG (metionin)
- UAA er et stoppkodon, sa translasjon stopper her
- Det ferdige proteinet har 3 aminosyrer`,
    },
    {
      id: 'bio1-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Antikodon-identifisering',
      problem: 'Hva er antikodon-sekvensen pa tRNA som frakter aminosyren kodet av kodon 5\'-GCU-3\'?',
      solution: `**Losning:**

**Steg 1:** Husk baseparingsreglene
- G parer med C
- C parer med G
- A parer med U
- U parer med A

**Steg 2:** Antikodon er komplementaer og antiparallell til kodon

Kodon:    5'-GCU-3'
Antikodon: 3'-CGA-5'

**Steg 3:** Skriv antikodon i 5' → 3' retning (konvensjon)
Antikodon: 5'-AGC-3'

**Svar:** Antikodonet er 5'-AGC-3' (eller 3'-CGA-5')

**Merk:**
- Kodon GCU koder for alanin
- tRNA med dette antikodonet baerer alanin
- Antikodon-kodon-paring skjer antiparallelt i A-setet pa ribosomet`,
    },
  ],
  exercises: [
    {
      id: 'bio1-3-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er startkodonet for translasjon?',
      options: [
        { id: 'a', text: 'AUG', isCorrect: true },
        { id: 'b', text: 'UAA', isCorrect: false },
        { id: 'c', text: 'UAG', isCorrect: false },
        { id: 'd', text: 'UGA', isCorrect: false },
      ],
      solution: 'AUG er startkodonet som initierer translasjon og koder for aminosyren metionin. UAA, UAG og UGA er stoppkodoner som avslutter translasjon.',
    },
    {
      id: 'bio1-3-4-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Nevn de tre bindingssetene pa ribosomet og beskriv kort funksjonen til hvert.',
      solution: 'A-sete (Aminoacyl): Her binder innkommende aminoacyl-tRNA med sin aminosyre. Kodon-antikodon-gjenkjenning skjer her. P-sete (Peptidyl): Holder tRNA med den voksende polypeptidkjeden. Peptidbindingsdannelse skjer mellom aminosyren i A-sete og peptidkjeden i P-sete. E-sete (Exit): Her forlater tomme tRNA-molekyler ribosomet etter at de har avgitt sin aminosyre.',
    },
    {
      id: 'bio1-3-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke av folgende er stoppkodoner?',
      options: [
        { id: 'a', text: 'UAA, UAG, UGA', isCorrect: true },
        { id: 'b', text: 'AUG, UAA, UAG', isCorrect: false },
        { id: 'c', text: 'UGG, UGA, UAA', isCorrect: false },
        { id: 'd', text: 'UAU, UAC, UGA', isCorrect: false },
      ],
      solution: 'De tre stoppkodonene er UAA, UAG og UGA. De koder ikke for noen aminosyre, men signaliserer at translasjon skal avsluttes. Frigjøringsfaktorer gjenkjenner disse kodonene og trigger frigjoring av den ferdige polypeptidkjeden.',
    },
    {
      id: 'bio1-3-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som skjer under elongeringsfasen av translasjon.',
      solution: 'Under elongering skjer en syklisk prosess for hver aminosyre som legges til: 1) Kodongjenkjenning - aminoacyl-tRNA med riktig antikodon binder til A-setet. 2) Peptidbindingsdannelse - polypeptidkjeden overføres fra tRNA i P-sete til aminosyren i A-sete, og ny peptidbinding dannes. 3) Translokasjon - ribosomet beveger seg ett kodon langs mRNA; tRNA i A-sete flyttes til P-sete, og tRNA i P-sete flyttes til E-sete og forlater ribosomet. Syklusen gjentas ca. 15-20 ganger per sekund.',
    },
    {
      id: 'bio1-3-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar aminoacyl-tRNA-syntasenes rolle og hvorfor de er kritiske for proteinsyntesenøyaktighet.',
      solution: 'Aminoacyl-tRNA-syntaser er enzymer som kobler riktig aminosyre til riktig tRNA. Det finnes 20 ulike syntaser, en for hver aminosyre. De er kritiske fordi de sikrer at den genetiske koden oversettes korrekt - feil aminosyre pa et tRNA ville fore til feil protein. Syntasene har dobbel spesifisitet: de gjenkjenner bade aminosyren og tRNA. Mange syntaser har ogsa korrekturlesingsmekanismer som fjerner feilaktig festede aminosyrer. Uten noyaktige syntaser ville hele oversettelsen fra kodon til aminosyre bryte sammen.',
    },
    {
      id: 'bio1-3-4-ex6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva katalyserer peptidbindingsdannelse i ribosomet?',
      options: [
        { id: 'a', text: 'rRNA i den store subenheten (ribozym)', isCorrect: true },
        { id: 'b', text: 'Ribosomale proteiner', isCorrect: false },
        { id: 'c', text: 'tRNA', isCorrect: false },
        { id: 'd', text: 'mRNA', isCorrect: false },
      ],
      solution: 'Peptidbindingsdannelse katalyseres av 23S rRNA (i prokaryoter) eller 28S rRNA (i eukaryoter) i den store ribosom-subenheten. Dette RNA-molekylet fungerer som et ribozym - et RNA-molekyl med enzymatisk aktivitet. Dette var et viktig funn som støtter ideen om en "RNA-verden" tidlig i livets historie.',
    },
  ],
};

// ============================================================================
// Kapittel 3.5: Den genetiske koden og genregulering
// ============================================================================

export const CHAPTER_BIOLOGI_1_3_5: TextbookChapter = {
  id: 'biologi-1-3-5',
  courseId: 'biologi-1',
  chapterNumber: '3.5',
  title: 'Den genetiske koden og genregulering',
  description: 'Kodontabellen, geners oppbygning med eksoner, introner og promotor, samt epigenetiske mekanismer for genregulering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forsta den genetiske kodens egenskaper og bruke kodontabellen',
    'beskrive et gens oppbygning med regulatoriske og kodende sekvenser',
    'forklare hvordan genekspresjon reguleres pa ulike nivaer',
    'gjore rede for epigenetiske mekanismer',
  ],
  content: [
    {
      id: 'bio1-3-5-intro',
      type: 'text',
      content: `# Den genetiske koden og genregulering

Den genetiske koden er "ordlisten" som oversetter DNA-sekvens til protein. Men a ha en kode er ikke nok - celler ma ogsa regulere hvilke gener som uttrykkes, nar og hvor mye.

## Genetisk informasjonsstrøm

DNA → (transkripsjon) → mRNA → (translasjon) → Protein

Hvert steg i denne prosessen kan reguleres, noe som gir cellen fin kontroll over hvilke proteiner som produseres.`,
    },
    {
      id: 'bio1-3-5-koden',
      type: 'text',
      content: `## Kodontabellen

Den genetiske koden er forholdet mellom mRNA-kodoner og aminosyrer.

### Kodens egenskaper

**1. Triplett-kode:**
- 3 nukleotider = 1 kodon = 1 aminosyre
- 4³ = 64 mulige kodoner
- 20 aminosyrer + 3 stoppkodoner

**2. Degenerert (redundant):**
- Flere kodoner kan kode for samme aminosyre
- F.eks. leucin: UUA, UUG, CUU, CUC, CUA, CUG (6 kodoner)
- Gir "buffer" mot mutasjoner

**3. Ikke-overlappende:**
- Hvert nukleotid tilhører kun ett kodon
- Leserammen er kritisk

**4. Universell (nesten):**
- Samme kode brukes av nesten alle organismer
- Sma unntak i mitokondrier og noen organismer
- Bevis for felles opprinnelse

**5. Entydig:**
- Hvert kodon koder for kun én aminosyre
- (Men en aminosyre kan ha flere kodoner)

### Spesielle kodoner

**Startkodon:** AUG (metionin)
- Initierer translasjon
- Bestemmer leserammen

**Stoppkodoner:** UAA, UAG, UGA
- Avslutter translasjon
- Koder ikke for aminosyre`,
    },
    {
      id: 'bio1-3-5-def-genkode',
      type: 'definition',
      title: 'Den genetiske koden',
      content: 'Den genetiske koden er settet av regler som oversetter nukleotidsekvensen i mRNA til aminosyresekvensen i et protein. Koden bestar av 64 kodoner (triplett av nukleotider): 61 koder for aminosyrer og 3 er stoppkodoner. Koden er degenerert (flere kodoner per aminosyre), entydig og nesten universell.',
    },
    {
      id: 'bio1-3-5-genstruktur',
      type: 'text',
      content: `## Geners oppbygning

Et typisk eukaryot gen bestar av regulatoriske og kodende regioner.

### Oppstrøms regulatoriske elementer

**Promotor:**
- DNA-sekvens der transkripsjon initieres
- Gjenkjennes av transkripsjonsfaktorer og RNA-polymerase
- Inneholder ofte TATA-boks (~25 bp oppstrøms)
- Bestemmer transkripsjonsretning og -start

**Enhancere:**
- Forsterker transkripsjonen
- Kan vaere langt fra genet (tusenvis av bp)
- Fungerer i begge orienteringer
- Binder spesifikke transkripsjonsfaktorer

**Silencere:**
- Hemmer transkripsjonen
- Binder repressorproteiner

### Genets kropp

**5'-UTR (untranslated region):**
- Transkriberes, men translateres ikke
- Inneholder ribosom-bindingssete
- Viktig for translasjonsregulering

**Eksoner:**
- Kodende sekvenser
- Beholdes i ferdig mRNA
- Inneholder proteinkodonsekvens

**Introner:**
- Ikke-kodende sekvenser
- Fjernes ved spleising
- Kan inneholde regulatoriske elementer

**3'-UTR:**
- Transkriberes, men translateres ikke
- Inneholder polyadenyleringssignal
- Viktig for mRNA-stabilitet

### Nedstrøms elementer

**Poly(A)-signal:**
- AAUAAA-sekvens
- Signaliserer klipping og polyadenylering`,
    },
    {
      id: 'bio1-3-5-def-promotor',
      type: 'definition',
      title: 'Promotor',
      content: 'En promotor er en DNA-sekvens som ligger oppstrøms for et gen og kontrollerer transkripsjonsinitiering. Promotoren gjenkjennes av transkripsjonsfaktorer og RNA-polymerase. Den bestemmer nar, hvor og hvor mye et gen transkriberes. TATA-boksen er et vanlig promotorelement i eukaryoter.',
    },
    {
      id: 'bio1-3-5-genregulering',
      type: 'text',
      content: `## Genregulering

Celler ma regulere hvilke gener som uttrykkes for a:
- Tilpasse seg miljøet
- Utvikle seg korrekt
- Opprettholde celletypers identitet

### Reguleringsnivaer

**1. Kromatinniva:**
- Apne/lukke kromatinstruktur
- Histonmodifikasjoner
- DNA-metylering

**2. Transkripsjonsniva:**
- Transkripsjonsfaktorer
- Enhancere og silencere
- Mediator-kompleks

**3. Post-transkripsjonelt:**
- mRNA-prosessering
- Alternativ spleising
- mRNA-stabilitet
- microRNA-regulering

**4. Translasjonsniva:**
- Initieringskontroll
- Ribosomtilgjengelighet

**5. Post-translasjonelt:**
- Proteinmodifikasjoner
- Proteinnedbrytning
- Proteintransport`,
    },
    {
      id: 'bio1-3-5-epigenetikk',
      type: 'text',
      content: `## Epigenetikk

Epigenetikk handler om arvelige endringer i genekspresjon som IKKE skyldes endringer i DNA-sekvensen.

### DNA-metylering

**Hva:**
- Metylgruppe (-CH₃) legges til cytosin
- Hovedsakelig pa CpG-dinukleotider
- Utføres av DNA-metyltransferaser

**Effekt:**
- Metylert promotor = gen slatt av
- Stabil, arvelig modifikasjon
- Viktig for genomisk imprinting

### Histonmodifikasjoner

**Typer:**
- Acetylering (Ac): Apner kromatin → aktiv
- Metylering (Me): Kan apne eller lukke
- Fosforylering (P): Involverer i DNA-reparasjon
- Ubiquitinering (Ub): Kan aktivere eller inaktivere

**Histonkode-hypotesen:**
- Kombinasjoner av modifikasjoner gir spesifikke effekter
- "Leses" av proteiner med spesielle domener

### Epigenetisk arv

**Gjennom celledeling:**
- Modifikasjoner kopieres til datterceller
- Opprettholder celleidentitet

**Generasjoner:**
- Noen epigenetiske merker kan arves
- Miljopavirkning pa epigenetikk (f.eks. ernaering, stress)

### Epigenetikk og sykdom

- **Kreft:** Feil epigenetisk regulering
- **Utviklingsforstyrrelser:** Imprinting-defekter
- **Nevrologiske sykdommer:** Epigenetisk dysregulering`,
    },
    {
      id: 'bio1-3-5-def-epigenetikk',
      type: 'definition',
      title: 'Epigenetikk',
      content: 'Epigenetikk er studiet av arvelige endringer i genekspresjon som ikke involverer endringer i DNA-sekvensen. Viktige mekanismer inkluderer DNA-metylering og histonmodifikasjoner. Epigenetiske merker pavirker om gener er "pa" eller "av", og kan arves gjennom celledeling og noen ganger mellom generasjoner.',
    },
    {
      id: 'bio1-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Bruk av kodontabellen',
      problem: 'Gitt mRNA-sekvensen 5\'-AUGUUUGGCAGUUGA-3\', bestem aminosyresekvensen og identifiser eventuelle stoppkodoner.',
      solution: `**Losning:**

**Steg 1:** Del sekvensen inn i kodoner fra startkodon
5'-AUG-UUU-GGC-AGU-UGA-3'

**Steg 2:** Oversett hvert kodon
- AUG = Metionin (Met, M) - START
- UUU = Fenylalanin (Phe, F)
- GGC = Glycin (Gly, G)
- AGU = Serin (Ser, S)
- UGA = STOPP

**Steg 3:** Skriv aminosyresekvensen
Met-Phe-Gly-Ser

I enkeltbokstavkode: MFGS

**Svar:**
- Aminosyresekvens: Met-Phe-Gly-Ser
- Startkodon: AUG
- Stoppkodon: UGA (avslutter translasjon)
- Det ferdige peptidet har 4 aminosyrer`,
    },
    {
      id: 'bio1-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Epigenetisk regulering',
      problem: 'Forklar hvordan DNA-metylering kan "sla av" et gen, og hvorfor dette er viktig for celledifferensiering.',
      solution: `**Losning:**

**Mekanismen:**

1. **Normal tilstand (umetylert):**
   - Promotorregionen er tilgjengelig
   - Transkripsjonsfaktorer kan binde
   - RNA-polymerase kan starte transkripsjon
   - Genet er AKTIVT

2. **Etter metylering:**
   - Metylgrupper legges til cytosiner i promotor (CpG-oyer)
   - Metyl-CpG-bindende proteiner (MBP) gjenkjenner metylert DNA
   - MBP rekrutterer histonmodifiserende enzymer
   - Kromatinet kondenserer
   - Transkripsjonsfaktorer kan ikke lenger binde
   - Genet er INAKTIVERT

**Betydning for differensiering:**

- Alle celler har samme DNA, men ulik genekspresjon
- DNA-metylering hjelper med a "lase" vevsspesifikke gener
- Eksempel: Muskelcelle har insulin-genet metylert (av), mens beta-celler i bukspyttkjertelen har det umetylert (pa)
- Metyleringspattermet kopieres ved celledeling
- Sikrer at datterceller beholder celletypeidentitet

**Konklusjon:** DNA-metylering er en stabil mekanisme for a opprettholde celleidentitet uten a endre DNA-sekvensen.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-3-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange kodoner finnes i den genetiske koden?',
      options: [
        { id: 'a', text: '64', isCorrect: true },
        { id: 'b', text: '20', isCorrect: false },
        { id: 'c', text: '61', isCorrect: false },
        { id: 'd', text: '4', isCorrect: false },
      ],
      solution: 'Det finnes 64 kodoner (4³ = 64 mulige kombinasjoner av 4 baser i tripletter). Av disse koder 61 for aminosyrer, mens 3 (UAA, UAG, UGA) er stoppkodoner. 20 fordi det er 20 aminosyrer, og 61 er antall aminosyrekodende kodoner.',
    },
    {
      id: 'bio1-3-5-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva betyr det at den genetiske koden er degenerert?',
      solution: 'At den genetiske koden er degenerert (eller redundant) betyr at flere kodoner kan kode for samme aminosyre. For eksempel koder 6 ulike kodoner for leucin (UUA, UUG, CUU, CUC, CUA, CUG). Dette gir en "buffer" mot mutasjoner, da en endring i tredje posisjon ofte ikke endrer aminosyren. Det betyr IKKE at koden er defekt eller unøyaktig.',
    },
    {
      id: 'bio1-3-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedfunksjonen til en promotor?',
      options: [
        { id: 'a', text: 'Kontrollere nar og hvor mye et gen transkriberes', isCorrect: true },
        { id: 'b', text: 'Kode for aminosyrer', isCorrect: false },
        { id: 'c', text: 'Fjerne introner', isCorrect: false },
        { id: 'd', text: 'Starte translasjon', isCorrect: false },
      ],
      solution: 'Promotoren er en DNA-sekvens oppstrøms for genet som kontrollerer transkripsjonsinitiering. Den gjenkjennes av transkripsjonsfaktorer og RNA-polymerase. Promotoren bestemmer nar, hvor og hvor mye et gen transkriberes - den er derfor kritisk for genregulering.',
    },
    {
      id: 'bio1-3-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv forskjellen mellom eksoner og introner, og forklar hva som skjer med dem under mRNA-prosessering.',
      solution: 'Eksoner er de kodende sekvensene i et gen som inneholder informasjon for proteinsyntese. Introner er ikke-kodende sekvenser som ligger mellom eksonene. Under mRNA-prosessering fjernes intronene ved spleising utfort av spleisosomet. Eksonene skjøtes deretter sammen for a danne ferdig mRNA. Gjennom alternativ spleising kan ulike eksoner inkluderes, noe som gir flere proteinvarianter fra samme gen.',
    },
    {
      id: 'bio1-3-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva epigenetikk er og gi to eksempler pa epigenetiske mekanismer.',
      solution: 'Epigenetikk er studiet av arvelige endringer i genekspresjon som ikke involverer endringer i DNA-sekvensen selv. To viktige mekanismer: 1) DNA-metylering - metylgrupper legges til cytosin i CpG-omrader, noe som vanligvis "slår av" gener ved a hindre transkripsjonsfaktorbinding. 2) Histonmodifikasjoner - kjemiske grupper (acetyl, metyl, fosfat) legges til eller fjernes fra histonproteiner, noe som endrer kromatinstruktur og gentilgjengelighet. Acetylering åpner vanligvis kromatin (aktive gener), mens visse metyleringsmønstre lukker det (inaktive gener).',
    },
    {
      id: 'bio1-3-5-ex6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken histonmodifikasjon er typisk assosiert med aktiv genekspresjon?',
      options: [
        { id: 'a', text: 'Histonacetylering', isCorrect: true },
        { id: 'b', text: 'DNA-metylering av promotor', isCorrect: false },
        { id: 'c', text: 'Histondeacetylering', isCorrect: false },
        { id: 'd', text: 'Kromatinkondensering', isCorrect: false },
      ],
      solution: 'Histonacetylering er assosiert med aktiv genekspresjon. Acetylgrupper nøytraliserer de positive ladningene pa histoner, noe som svekker DNA-histonbindingen og apner kromatinstrukturen. Dette gir transkripsjonsfaktorer og RNA-polymerase tilgang til DNA. Deacetylering (fjerning av acetylgrupper) og DNA-metylering er derimot assosiert med geninaktivering.',
    },
  ],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const BIOLOGI_1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_3_1,
  CHAPTER_BIOLOGI_1_3_2,
  CHAPTER_BIOLOGI_1_3_3,
  CHAPTER_BIOLOGI_1_3_4,
  CHAPTER_BIOLOGI_1_3_5,
];
