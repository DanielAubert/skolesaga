/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 2 VG3
 *
 * Seksjon 1: Molekylærbiologi og genetikk (Kapittel 1.1–1.8)
 * Denne filen inneholder kapittel 1.1–1.8.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: DNA-struktur og replikasjon
// ============================================================================

export const CHAPTER_BIOLOGI_2_1_1: TextbookChapter = {
  id: 'biologi-2-1-1',
  courseId: 'biologi-2',
  chapterNumber: '1.1',
  title: 'DNA-struktur og replikasjon',
  description: 'Nukleotider, dobbeltheliks, semikonservativ replikasjon og enzymer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for DNA-struktur og replikasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-1-1-intro',
      type: 'text',
      content: `# DNA-struktur og replikasjon

I dette kapittelet skal du lære om:

- Oppbyggingen av nukleotider og DNA-molekylet
- Watson og Cricks dobbeltheliks-modell
- Semikonservativ replikasjon
- Enzymer som er involvert i DNA-replikasjon

DNA (deoksyribonukleinsyre) er molekylet som bærer den genetiske informasjonen i alle levende organismer. Forståelsen av DNA-strukturen var et av de viktigste gjennombruddene i biologiens historie, og danner grunnlaget for moderne molekylærbiologi og bioteknologi.`,
    },

    // ========== TEORI 1: Nukleotider ==========
    {
      id: 'bio2-1-1-nukleotider',
      type: 'text',
      content: `## Nukleotider – DNAs byggesteiner

DNA er et polymer bygd opp av monomerer kalt **nukleotider**. Hver nukleotid består av tre komponenter:

### 1. Fosfatgruppe
- En fosforsyremolekylgruppe ($PO_4^{3-}$)
- Binder nukleotidene sammen via **fosfodiesterbindinger**
- Danner det negativt ladede «ryggraden» i DNA-kjeden

### 2. Deoksyribose (sukkermolekyl)
- Et femkarbon-sukker (pentose)
- Karbonatomene nummereres 1' til 5'
- Mangler en OH-gruppe på 2'-karbon sammenlignet med ribose i RNA
- 5'-karbon binder til fosfatgruppen
- 3'-karbon binder til neste nukleotids fosfatgruppe

### 3. Nitrogenbase
Det finnes fire forskjellige nitrogenbaser i DNA, delt i to grupper:

**Puriner** (dobbeltring-struktur):
- **Adenin (A)**
- **Guanin (G)**

**Pyrimidiner** (enkelring-struktur):
- **Cytosin (C)**
- **Tymin (T)**

### Nukleotidstruktur (skjematisk)

\`\`\`
    Fosfat — 5'-Deoksyribose — Base
                  |
               3'-OH
\`\`\`

Nukleotidene kobles sammen i en kjede der fosfatgruppen på én nukleotid binder 5'-karbon til 3'-karbon på neste nukleotid. Denne **fosfodiesterbindingen** gir DNA en retning: fra **5'-enden** til **3'-enden**.`,
    },

    {
      id: 'bio2-1-1-def-nukleotid',
      type: 'definition',
      title: 'Nukleotid',
      content: 'En nukleotid er byggesteinen i nukleinsyrer (DNA og RNA). Den består av tre deler: en fosfatgruppe, et pentosesukker (deoksyribose i DNA, ribose i RNA) og en nitrogenbase (A, T/U, G eller C). Nukleotidene kobles sammen via fosfodiesterbindinger mellom 5\'-karbon og 3\'-karbon og danner en polynukleotidkjede.',
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bio2-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifisere nukleotidkomponenter',
      problem: `En nukleotid i DNA inneholder basen guanin. Beskriv de tre komponentene i denne nukleotiden og forklar hvordan den skiller seg fra en nukleotid med basen adenin.`,
      solution: `**Løsning:**

Begge nukleotider inneholder:
1. **Fosfatgruppe** – identisk i begge tilfeller ($PO_4^{3-}$)
2. **Deoksyribose** – identisk femkarbon-sukker

Forskjellen ligger i **nitrogenbasen**:
- **Guanin (G)** – en purin med dobbeltring-struktur
- **Adenin (A)** – også en purin med dobbeltring-struktur

Selv om begge er puriner, har de ulik kjemisk struktur:
- Guanin har en karbonylgruppe (C=O) og en aminogruppe ($NH_2$)
- Adenin har kun en aminogruppe ($NH_2$)

Forskjellen i basestruktur avgjør hvilke hydrogenbindinger de kan danne: **G binder med C** (tre hydrogenbindinger), mens **A binder med T** (to hydrogenbindinger).`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-1-ex-1',
        number: '1.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke tre komponenter utgjør en nukleotid i DNA?',
        options: [
          { id: 'a', text: 'Fosfatgruppe, deoksyribose og nitrogenbase', isCorrect: true },
          { id: 'b', text: 'Aminosyre, ribose og fosfatgruppe', isCorrect: false },
          { id: 'c', text: 'Fosfatgruppe, glukose og nitrogenbase', isCorrect: false },
          { id: 'd', text: 'Ribose, nitrogenbase og karboksylgruppe', isCorrect: false },
        ],
        solution: 'En nukleotid i DNA består av tre komponenter: (1) en fosfatgruppe, (2) sukkeret deoksyribose (et pentosesukker) og (3) en nitrogenbase (A, T, G eller C). Ribose finnes i RNA, ikke i DNA. Aminosyrer er byggesteiner i proteiner, ikke i nukleinsyrer.',
        hints: ['Tenk på hva som skiller DNA fra RNA – sukkermolekylet er forskjellig.'],
      },
    },

    // ========== TEORI 2: Dobbeltheliks ==========
    {
      id: 'bio2-1-1-dobbeltheliks',
      type: 'text',
      content: `## Dobbeltheliks – DNAs tredimensjonale struktur

I 1953 publiserte **James Watson** og **Francis Crick** sin modell for DNA-strukturen, basert på røntgenkrystallografi-data fra **Rosalind Franklin** og **Maurice Wilkins**.

### Hovedtrekk ved dobbeltheliks

1. **To polynukleotidkjeder** vikler seg rundt hverandre i en spiralform
2. Kjedene løper i **antiparallell** retning (5'→3' og 3'→5')
3. Sukker-fosfat-ryggraden er på **utsiden**, basene peker **innover**
4. Basene holdes sammen av **hydrogenbindinger** mellom komplementære basepar
5. Det er ca. **10 basepar per heliks-omdreining**
6. Heliks-diameteren er ca. **2 nm**

### Chargaffs regler

Erwin Chargaff oppdaget at i DNA fra en organisme gjelder:
- Mengden adenin (A) = mengden tymin (T)
- Mengden guanin (G) = mengden cytosin (C)

Dette skyldes **komplementær baseparing**:
- **A – T**: to hydrogenbindinger
- **G – C**: tre hydrogenbindinger

### Skjematisk dobbeltheliks

\`\`\`
  5'---A===T---3'
  5'---G≡≡≡C---3'
  5'---T===A---3'
  5'---C≡≡≡G---3'
  5'---A===T---3'
       ↑     ↑
   Strand 1  Strand 2
  (5'→3')   (3'→5')
\`\`\`

(=== representerer 2 H-bindinger, ≡≡≡ representerer 3 H-bindinger)

### Store og lille fure

Dobbeltheliksen har to furer (fordypninger):
- **Store fure (major groove)**: Bredere, gir tilgang for proteiner som leser av DNA
- **Lille fure (minor groove)**: Smalere

Transkripsjonsfaktorer binder ofte i den store furen for å gjenkjenne spesifikke DNA-sekvenser.`,
    },

    {
      id: 'bio2-1-1-def-komplementaer',
      type: 'definition',
      title: 'Komplementær baseparing',
      content: 'Komplementær baseparing er prinsippet om at nitrogenbaser i DNA alltid parer seg spesifikt: adenin (A) med tymin (T) via to hydrogenbindinger, og guanin (G) med cytosin (C) via tre hydrogenbindinger. Denne regelen sikrer at informasjonen i DNA bevares ved replikasjon og er grunnlaget for Chargaffs regler.',
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bio2-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bestemme komplementær DNA-sekvens',
      problem: `En DNA-tråd har følgende basesekvens i 5'→3'-retning:

5'-ATGCCTAGGCTTA-3'

a) Skriv den komplementære tråden med riktig retning.
b) Hvor mange hydrogenbindinger finnes mellom de to trådene?`,
      solution: `**Løsning:**

**a) Komplementær tråd:**
Husk at trådene er antiparallelle. Vi bruker baseparingsreglene (A–T, G–C):

\`\`\`
5'-A T G C C T A G G C T T A-3'
3'-T A C G G A T C C G A A T-5'
\`\`\`

Den komplementære tråden i 5'→3'-retning: **5'-TAAGCCTAGGCAT-3'**

**b) Antall hydrogenbindinger:**
Vi teller bindinger for hvert basepar:
- A–T: 2 H-bindinger × 5 (A-T-par) = 10
- G–C: 3 H-bindinger × 8 (G-C-par) = 24

Vent, la oss telle nøyaktig:
Sekvensen: A-T-G-C-C-T-A-G-G-C-T-T-A
- A–T-par: A, T, T, A, T, T, A = 7 stk → 7 × 2 = 14
- G–C-par: G, C, C, G, G, C = 6 stk → 6 × 3 = 18

**Totalt: 14 + 18 = 32 hydrogenbindinger**`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-1-ex-2',
        number: '1.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I et DNA-molekyl er 30 % av basene adenin. Hva er prosentandelen guanin?',
        options: [
          { id: 'a', text: '20 %', isCorrect: true },
          { id: 'b', text: '30 %', isCorrect: false },
          { id: 'c', text: '40 %', isCorrect: false },
          { id: 'd', text: '10 %', isCorrect: false },
        ],
        solution: 'Ifølge Chargaffs regler: A = T og G = C. Hvis A = 30 %, må T = 30 %. Til sammen utgjør A + T = 60 %. Resten (100 % − 60 % = 40 %) er fordelt likt mellom G og C. Altså er G = C = 20 %.',
        hints: ['Bruk Chargaffs regler: A = T og G = C. Alle fire baser utgjør til sammen 100 %.'],
      },
    },

    // ========== TEORI 3: Semikonservativ replikasjon ==========
    {
      id: 'bio2-1-1-replikasjon',
      type: 'text',
      content: `## Semikonservativ replikasjon

DNA-replikasjon er prosessen der DNA-molekylet kopieres før celledeling. Replikasjonen er **semikonservativ**, noe som betyr at hvert nytt DNA-molekyl inneholder én original tråd og én nysyntetisert tråd.

### Meselson-Stahl-eksperimentet (1958)

Matthew Meselson og Franklin Stahl beviste semikonservativ replikasjon ved å:
1. Dyrke *E. coli* i medium med tungt nitrogen ($^{15}N$) – alt DNA ble «tungt»
2. Overføre til medium med lett nitrogen ($^{14}N$) og la cellene dele seg
3. Etter én runde: **Alt DNA var mellomtungt** (én tung + én lett tråd)
4. Etter to runder: **Halvparten mellomtungt, halvparten lett**

Dette utelukket konservativ og dispersiv replikasjon.

### Hovedtrinn i DNA-replikasjon

**1. Initiering**
- Replikasjonen starter ved spesifikke sekvenser kalt **replikasjonsopphav** (origins of replication)
- Hos *E. coli*: ett origin (oriC)
- Hos eukaryoter: mange origins (hundrevis til tusenvis)

**2. Elongering**
- DNA-syntese skjer i **5'→3'-retning**
- **Ledende tråd** (leading strand): Syntetiseres kontinuerlig i retning mot replikasjonsgaffelen
- **Hengende tråd** (lagging strand): Syntetiseres diskontinuerlig som **Okazaki-fragmenter** (ca. 100–200 nukleotider hos eukaryoter)

**3. Terminering**
- Replikasjonen fullføres når to replikasjonsgafler møtes
- Okazaki-fragmenter sys sammen av DNA-ligase`,
    },

    {
      id: 'bio2-1-1-note-semikonservativ',
      type: 'note',
      title: 'Hvorfor semikonservativ?',
      content: 'Navnet «semikonservativ» betyr «halvt bevarende». Hver av de to nye DNA-molekylene beholder (konserverer) den ene originale tråden og får en helt ny tråd. Alternativene som ble utelukket var konservativ replikasjon (hele det originale molekylet bevares intakt) og dispersiv replikasjon (gammel og ny DNA blandes tilfeldig i begge tråder).',
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bio2-1-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Replikasjonsgaffelen',
      problem: `Tegn en skjematisk replikasjonsgaffel og merk ledende tråd, hengende tråd, Okazaki-fragmenter og retningen til DNA-syntese.`,
      solution: `**Løsning:**

\`\`\`
                  Replikasjonsgaffel
                       ↓
    3'—————————————————————→ 5' (mal for ledende tråd)
    5'————————————→ 3'           ← Ledende tråd (kontinuerlig, 5'→3')

              Helikase (åpner)

    5'—————————————————————→ 3' (mal for hengende tråd)
    3'←——  3'←——  3'←——  5'     ← Hengende tråd (Okazaki-fragmenter)
      F3     F2     F1          (syntetiseres i motsatt retning)
\`\`\`

**Forklaring:**
- **Ledende tråd**: Syntetiseres kontinuerlig i 5'→3'-retning, samme retning som gaffelen beveger seg
- **Hengende tråd**: Syntetiseres som korte Okazaki-fragmenter (F1, F2, F3...) fordi malen leses 3'→5', men gaffelen beveger seg bort fra syntese-retningen
- Hvert Okazaki-fragment starter med en **RNA-primer**
- **DNA-ligase** setter sammen fragmentene etterpå`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-1-ex-3',
        number: '1.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med at DNA-replikasjon er semikonservativ. Beskriv kort eksperimentet til Meselson og Stahl som beviste dette.',
        solution: '**Semikonservativ replikasjon** betyr at hvert nytt DNA-molekyl etter replikasjon inneholder én original (gammel) tråd og én nysyntetisert tråd.\n\n**Meselson-Stahl-eksperimentet (1958):**\n1. *E. coli* ble dyrket i medium med tungt nitrogen ($^{15}N$) slik at alt DNA ble tungt.\n2. Bakteriene ble overført til medium med lett nitrogen ($^{14}N$) og fikk dele seg.\n3. Etter **én delingsrunde** hadde alt DNA en mellomtung tetthet (én tung + én lett tråd), noe som bekreftet at trådene var separert.\n4. Etter **to delingsrunder** var halvparten mellomtungt og halvparten lett.\n\nDette resultatet stemmer kun med semikonservativ modell, og utelukker konservativ replikasjon (der hele det opprinnelige molekylet ville forblitt intakt) og dispersiv replikasjon (der gammel og ny DNA ville blitt blandet tilfeldig).',
        hints: ['Tenk på hva som skjer med de to DNA-trådene når de separeres og kopieres.', 'Tegn gjerne et diagram over tre generasjoner DNA.'],
      },
    },

    // ========== TEORI 4: Enzymer i replikasjon ==========
    {
      id: 'bio2-1-1-enzymer',
      type: 'text',
      content: `## Enzymer i DNA-replikasjon

DNA-replikasjon krever et koordinert samspill mellom flere enzymer og proteiner:

### Helikase
- **Funksjon**: Åpner dobbeltheliksen ved å bryte hydrogenbindingene mellom baseparene
- Bruker energi fra ATP-hydrolyse
- Skaper **replikasjonsgaffelen**

### Topoisomerase
- **Funksjon**: Fjerner spenningen (supercoiling) som oppstår foran replikasjonsgaffelen når DNA-trådene skilles
- Kutter og gjenforbinder DNA-tråder for å avlaste torsjonen

### Primase
- **Funksjon**: Syntetiserer korte **RNA-primere** (ca. 10 nukleotider)
- DNA-polymerase kan ikke starte syntese fra ingenting – den trenger en 3'-OH-gruppe å bygge videre på

### DNA-polymerase III (hos prokaryoter)
- **Hovedenzym for DNA-syntese**
- Leser maltråden i 3'→5'-retning
- Syntetiserer ny tråd i **5'→3'-retning**
- Har **korrekturlesing** (proofreading): 3'→5' eksonukleaseaktivitet som fjerner feil innbygde nukleotider
- Feilrate: ca. 1 per $10^7$ nukleotider (etter korrekturlesing)

### DNA-polymerase I (hos prokaryoter)
- **Funksjon**: Fjerner RNA-primere og erstatter dem med DNA
- Har 5'→3' eksonukleaseaktivitet

### DNA-ligase
- **Funksjon**: Kobler sammen Okazaki-fragmenter ved å danne fosfodiesterbindinger
- Forsegier «hakk» (nicks) i sukker-fosfat-ryggraden

### SSBP (Single-Strand Binding Proteins)
- **Funksjon**: Binder til enkelttrådet DNA og hindrer det fra å danne sekundærstrukturer eller pares tilbake
- Stabiliserer de adskilte trådene under replikasjon

### Oppsummering av enzymene

| Enzym | Funksjon |
|-------|----------|
| Helikase | Åpner dobbeltheliks |
| Topoisomerase | Avlaster spenning/supercoiling |
| Primase | Lager RNA-primer |
| DNA-polymerase III | Syntese av ny DNA-tråd (5'→3') |
| DNA-polymerase I | Fjerner RNA-primere, erstatter med DNA |
| DNA-ligase | Kobler sammen Okazaki-fragmenter |
| SSBP | Stabiliserer enkelttrådet DNA |`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'bio2-1-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Enzymenes rolle i rekkefølge',
      problem: `Beskriv rekkefølgen av enzymene som er involvert når et Okazaki-fragment syntetiseres på den hengende tråden.`,
      solution: `**Løsning:**

Rekkefølgen av enzymer for ett Okazaki-fragment:

1. **Helikase** åpner dobbeltheliksen og eksponerer nye maltråd-sekvenser
2. **SSBP** binder til de eksponerte enkelttråder for å stabilisere dem
3. **Topoisomerase** avlaster supercoiling foran gaffelen
4. **Primase** syntetiserer en kort RNA-primer (~10 nt) på maltråden
5. **DNA-polymerase III** forlenger primeren med DNA i 5'→3'-retning, og danner Okazaki-fragmentet (~100–200 nt hos eukaryoter)
6. **DNA-polymerase I** fjerner RNA-primeren fra det forrige Okazaki-fragmentet og erstatter den med DNA
7. **DNA-ligase** kobler det nye Okazaki-fragmentet sammen med det neste ved å danne en fosfodiesterbinding

Hele prosessen gjentas for hvert nytt Okazaki-fragment etter hvert som replikasjonsgaffelen beveger seg videre.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'bio2-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-1-ex-4',
        number: '1.1.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket enzym er ansvarlig for å koble sammen Okazaki-fragmenter på den hengende tråden under DNA-replikasjon?',
        options: [
          { id: 'a', text: 'DNA-ligase', isCorrect: true },
          { id: 'b', text: 'DNA-polymerase III', isCorrect: false },
          { id: 'c', text: 'Helikase', isCorrect: false },
          { id: 'd', text: 'Primase', isCorrect: false },
        ],
        solution: 'DNA-ligase er enzymet som kobler sammen Okazaki-fragmenter ved å danne fosfodiesterbindinger mellom 3\'-OH-enden av ett fragment og 5\'-fosfatenden av det neste. DNA-polymerase III syntetiserer selve fragmentene, helikase åpner heliksen, og primase lager RNA-primere.',
        hints: ['Tenk på hvilket enzym som «limer» sammen DNA-biter.'],
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-1-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-1-ex-5',
        number: '1.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor DNA-syntese bare kan skje i 5\'→3\'-retning, og beskriv konsekvensene dette har for replikasjonen av den hengende tråden sammenlignet med den ledende tråden.',
        solution: '**Hvorfor bare 5\'→3\':**\nDNA-polymerase kan bare legge til nye nukleotider til den frie 3\'-OH-gruppen på den voksende kjeden. Enzymet katalyserer en nukleofilisk reaksjon der 3\'-OH angriper 5\'-fosfatet på det innkommende nukleotidet (dNTP), og frisetter pyrofosfat (PPi). Denne reaksjonen kan ikke skje i 3\'→5\'-retning fordi det ikke finnes et tilsvarende enzym som kan koble nye nukleotider til 5\'-enden.\n\n**Konsekvenser for replikasjonen:**\n\n**Ledende tråd:**\n- Malen leses 3\'→5\', og ny tråd syntetiseres 5\'→3\'\n- Syntesen skjer **kontinuerlig** i samme retning som replikasjonsgaffelen beveger seg\n- Trenger bare **én RNA-primer**\n- Enkel og rask prosess\n\n**Hengende tråd:**\n- Malen leses også 3\'→5\', men gaffelen beveger seg «bort» fra syntese-retningen\n- Syntesen skjer **diskontinuerlig** som korte Okazaki-fragmenter\n- Trenger **mange RNA-primere** (én per fragment)\n- Krever ekstra enzymer: DNA-polymerase I (fjerner primere) og DNA-ligase (kobler fragmenter)\n- Langsommere og mer energikrevende enn syntese av ledende tråd',
        hints: [
          'Tenk på hva som skjer kjemisk ved 3\'-OH-enden av den voksende DNA-kjeden.',
          'Tegn opp replikasjonsgaffelen og tenk på retningen begge trådene syntetiseres i.',
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-1-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

### DNA-struktur
- DNA er bygd opp av **nukleotider** (fosfat + deoksyribose + nitrogenbase)
- Fire baser: **A, T, G, C** (puriner: A og G; pyrimidiner: T og C)
- To antiparallelle tråder danner en **dobbeltheliks**
- Komplementær baseparing: **A–T** (2 H-bindinger), **G–C** (3 H-bindinger)
- Chargaffs regler: A = T og G = C i alle organismer

### DNA-replikasjon
- **Semikonservativ**: Hvert nytt molekyl har én original og én ny tråd
- Bevist av **Meselson og Stahl** (1958) med tungt/lett nitrogen
- DNA syntetiseres bare i **5'→3'-retning**
- **Ledende tråd**: Kontinuerlig syntese
- **Hengende tråd**: Diskontinuerlig syntese (Okazaki-fragmenter)

### Nøkkelenzymer
- **Helikase**: Åpner dobbeltheliks
- **Primase**: Syntetiserer RNA-primere
- **DNA-polymerase III**: Syntetiserer ny DNA-tråd
- **DNA-polymerase I**: Fjerner RNA-primere
- **DNA-ligase**: Kobler sammen Okazaki-fragmenter
- **Topoisomerase**: Avlaster supercoiling
- **SSBP**: Stabiliserer enkelttråder`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Transkripsjon
// ============================================================================

export const CHAPTER_BIOLOGI_2_1_2: TextbookChapter = {
  id: 'biologi-2-1-2',
  courseId: 'biologi-2',
  chapterNumber: '1.2',
  title: 'Transkripsjon',
  description: 'Fra DNA til mRNA – RNA-polymerase, promotor og prosessering.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare transkripsjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-1-2-intro',
      type: 'text',
      content: `# Transkripsjon

I dette kapittelet skal du lære om:

- Hva transkripsjon er og hvorfor det er nødvendig
- RNA-polymerases rolle og mekanisme
- Promotorsekvenser og transkripsjonens regulering
- Prosessering av mRNA hos eukaryoter

Transkripsjon er det første steget i **genekspresjon** – prosessen der informasjonen i et gen brukes til å lage et funksjonelt produkt. Under transkripsjon brukes én DNA-tråd som mal for å syntetisere et komplementært RNA-molekyl. Dette er det sentrale dogmet i molekylærbiologien: **DNA → RNA → Protein**.`,
    },

    // ========== TEORI 1: RNA vs DNA ==========
    {
      id: 'bio2-1-2-rna-vs-dna',
      type: 'text',
      content: `## RNA sammenlignet med DNA

Før vi ser på selve transkripsjonen, er det viktig å forstå forskjellene mellom RNA og DNA:

| Egenskap | DNA | RNA |
|----------|-----|-----|
| Sukker | Deoksyribose | Ribose (ekstra OH-gruppe på 2'-karbon) |
| Baser | A, T, G, C | A, **U**, G, C (uracil erstatter tymin) |
| Struktur | Dobbelttrådet | Enkelttrådet (kan danne sekundærstrukturer) |
| Stabilitet | Svært stabilt | Mindre stabilt (brytes ned raskere) |
| Funksjon | Langtidslagring av genetisk informasjon | Midlertidig budbringer, katalytisk, strukturell |

### Typer RNA

- **mRNA (messenger-RNA)**: Bærer den genetiske koden fra DNA til ribosomene
- **tRNA (transfer-RNA)**: Frakter aminosyrer til ribosomet under translasjon
- **rRNA (ribosomalt RNA)**: Strukturell og katalytisk del av ribosomene
- **snRNA (small nuclear RNA)**: Involvert i spleising
- **miRNA, siRNA**: Regulatorisk RNA som påvirker genekspresjon`,
    },

    {
      id: 'bio2-1-2-def-transkripsjon',
      type: 'definition',
      title: 'Transkripsjon',
      content: 'Transkripsjon er prosessen der informasjonen i en DNA-sekvens (gen) kopieres over til et komplementært RNA-molekyl. RNA-polymerase bruker den ene DNA-tråden (maltråden/templattråden) som utgangspunkt og syntetiserer RNA i 5\'→3\'-retning. Resultatet er et mRNA-molekyl som har samme basesekvens som den kodende tråden (sense-tråden), bortsett fra at uracil (U) erstatter tymin (T).',
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bio2-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: DNA-tråder og RNA',
      problem: `Et gen har følgende kodende tråd (sense):

5'-ATGCGATCCAGTCA-3'

a) Skriv maltråden (templat/antisense).
b) Skriv mRNA-sekvensen som transkriberes.`,
      solution: `**Løsning:**

**a) Maltråden:**
Maltråden er komplementær og antiparallell til den kodende tråden:

\`\`\`
Kodende:   5'-A T G C G A T C C A G T C A-3'
Mal:       3'-T A C G C T A G G T C A G T-5'
\`\`\`

**b) mRNA-sekvens:**
RNA-polymerase leser maltråden i 3'→5'-retning og syntetiserer mRNA i 5'→3'-retning. mRNA er komplementær til maltråden, og dermed lik den kodende tråden (med U i stedet for T):

\`\`\`
Mal:       3'-T A C G C T A G G T C A G T-5'
mRNA:      5'-A U G C G A U C C A G U C A-3'
\`\`\`

Legg merke til at mRNA-sekvensen er identisk med den kodende tråden, bortsett fra at **T er erstattet med U**.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-2-ex-1',
        number: '1.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken nitrogenbase finnes i RNA, men ikke i DNA?',
        options: [
          { id: 'a', text: 'Uracil (U)', isCorrect: true },
          { id: 'b', text: 'Tymin (T)', isCorrect: false },
          { id: 'c', text: 'Cytosin (C)', isCorrect: false },
          { id: 'd', text: 'Guanin (G)', isCorrect: false },
        ],
        solution: 'Uracil (U) erstatter tymin (T) i RNA. Begge parer seg med adenin (A), men uracil mangler metylgruppen som tymin har. DNA inneholder A, T, G og C, mens RNA inneholder A, U, G og C.',
        hints: ['Tenk på hvilken base som «erstattes» når DNA-informasjon overføres til RNA.'],
      },
    },

    // ========== TEORI 2: Transkripsjonsprosessen ==========
    {
      id: 'bio2-1-2-prosessen',
      type: 'text',
      content: `## Transkripsjonsprosessen

Transkripsjon kan deles i tre faser: **initiering**, **elongering** og **terminering**.

### 1. Initiering

**Hos prokaryoter:**
- RNA-polymerase gjenkjenner **promotorsekvensen** direkte ved hjelp av **sigma-faktor** (σ)
- Viktige promotorelementer:
  - **-10-boksen** (Pribnow-boksen): TATAAT (ca. 10 basepar oppstrøms for startpunktet)
  - **-35-boksen**: TTGACA (ca. 35 basepar oppstrøms)
- RNA-polymerase binder og åpner DNA-dobbeltheliksen lokalt (ca. 12–14 bp)
- Transkripsjon starter ved **+1-posisjonen**

**Hos eukaryoter:**
- RNA-polymerase II (for mRNA) kan **ikke** binde promotor direkte
- Krever **generelle transkripsjonsfaktorer** (TFIIA, TFIIB, TFIID osv.)
- TFIID inneholder **TBP** (TATA-binding protein) som gjenkjenner **TATA-boksen** (~25 bp oppstrøms)
- Transkripsjonsfaktorer og RNA-polymerase II danner et **preinitierings-kompleks**

### 2. Elongering

- RNA-polymerase beveger seg langs maltråden i **3'→5'-retning**
- Syntetiserer RNA i **5'→3'-retning** ved å legge til ribonukleotider (ATP, UTP, GTP, CTP)
- **Transkripsjonsboble**: Et lite område (~12–14 bp) der DNA er åpnet
- Hastighet: ca. **40–80 nukleotider per sekund** hos prokaryoter
- DNA-dobbeltheliks gjenopprettes bak polymerasen

\`\`\`
     Bevegelsesretning →

  5'═══════╗          ╔═══════3'  (kodende tråd)
           ║   Boble  ║
  3'═══════╝    ↓     ╚═══════5'  (maltråd)
            RNA-polymerase
           5'～～～～3'
              mRNA
\`\`\`

### 3. Terminering

**Hos prokaryoter:**
- **Rho-uavhengig terminering**: mRNA danner en hårnal-struktur (hairpin) etterfulgt av en polyU-sekvens, som destabiliserer RNA-DNA-hybridet
- **Rho-avhengig terminering**: Rho-proteinet (helikase) jager etter RNA-polymerase og løsner den ved pausesteder

**Hos eukaryoter:**
- Spesifikt signal i RNA: **AAUAAA** (polyadenyleringssignal)
- RNA kuttes nedstrøms for signalet
- RNA-polymerase II fortsetter å transkribere en stund før den faller av`,
    },

    {
      id: 'bio2-1-2-def-promotor',
      type: 'definition',
      title: 'Promotor',
      content: 'En promotor er en DNA-sekvens oppstrøms for et gen som bestemmer hvor og når transkripsjon initieres. Promotoren gjenkjennes av RNA-polymerase (hos prokaryoter) eller transkripsjonsfaktorer (hos eukaryoter). Viktige elementer inkluderer TATA-boksen hos eukaryoter og -10/-35-boksene hos prokaryoter. Promotorens styrke påvirker hvor mye mRNA som produseres fra genet.',
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bio2-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne transkripsjon hos pro- og eukaryoter',
      problem: `Gi tre vesentlige forskjeller mellom transkripsjon hos prokaryoter og eukaryoter.`,
      solution: `**Løsning:**

| Egenskap | Prokaryoter | Eukaryoter |
|----------|-------------|------------|
| **RNA-polymerase** | Én type RNA-polymerase for alle RNA-typer | Tre typer: RNA-pol I (rRNA), RNA-pol II (mRNA), RNA-pol III (tRNA, 5S rRNA) |
| **Promotorgjenkjenning** | RNA-polymerase binder direkte via sigma-faktor (σ) | Krever generelle transkripsjonsfaktorer (TBP, TFIIB, etc.) for å danne preinitierings-kompleks |
| **mRNA-prosessering** | Ingen prosessering – mRNA brukes direkte (transkripsjon og translasjon skjer samtidig) | Omfattende prosessering: 5'-cap, 3'-polyadenylering, spleising av introner |

**Tilleggsforskjeller:**
- Prokaryoter har ofte **polycistronisk mRNA** (flere gener på ett mRNA, f.eks. operoner)
- Eukaryoter har **monocistronisk mRNA** (ett gen per mRNA)
- Hos prokaryoter skjer transkripsjon og translasjon **samtidig** (kobling)
- Hos eukaryoter skjer transkripsjon i **kjernen** og translasjon i **cytoplasma**`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-2-ex-2',
        number: '1.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken retning leser RNA-polymerase maltråden under transkripsjon?',
        options: [
          { id: 'a', text: '3\'→5\'', isCorrect: true },
          { id: 'b', text: '5\'→3\'', isCorrect: false },
          { id: 'c', text: 'Begge retninger samtidig', isCorrect: false },
          { id: 'd', text: 'Retningen varierer mellom gener', isCorrect: false },
        ],
        solution: 'RNA-polymerase leser maltråden (templattråden) i 3\'→5\'-retning, mens den syntetiserer RNA i 5\'→3\'-retning. Dette er analogt med DNA-polymerase, som også syntetiserer i 5\'→3\'-retning. Syntesen i 5\'→3\' er en universell egenskap ved nukleinsyrepolymeraser.',
        hints: ['Husk at RNA syntetiseres i 5\'→3\'-retning. Maltråden må da leses i motsatt retning.'],
      },
    },

    // ========== TEORI 3: mRNA-prosessering ==========
    {
      id: 'bio2-1-2-prosessering',
      type: 'text',
      content: `## mRNA-prosessering hos eukaryoter

Hos eukaryoter gjennomgår det primære transkriptet (pre-mRNA) tre viktige modifikasjoner før det kan transporteres ut av kjernen og translateres:

### 1. 5'-Capping

- En **7-metylguanosin** (m7G) kobles til 5'-enden av mRNA via en uvanlig 5'→5'-trifosfatbinding
- Skjer allerede under transkripsjon (når mRNA er ~25 nt langt)
- **Funksjoner:**
  - Beskytter mRNA mot nedbrytning av 5'-eksonukleaser
  - Nødvendig for gjenkjenning av ribosomet under translasjon
  - Hjelper med transport av mRNA ut av kjernen

### 2. 3'-Polyadenylering

- En **poly(A)-hale** på 100–250 adeninnukleotider legges til 3'-enden
- Enzymet **poly(A)-polymerase** katalyserer reaksjonen
- Signalsekvensen **AAUAAA** i mRNA utløser klipping og polyadenylering
- **Funksjoner:**
  - Beskytter mRNA mot nedbrytning fra 3'-enden
  - Bidrar til eksport fra kjernen
  - Påvirker mRNA-stabilitet og translasjoneffektivitet

### 3. Spleising (splicing)

Eukaryote gener inneholder **introner** (ikke-kodende sekvenser) og **eksoner** (kodende sekvenser):

\`\`\`
Pre-mRNA:  5'-cap—[Ekson 1]—intron 1—[Ekson 2]—intron 2—[Ekson 3]—poly(A)-3'
                      ↓ Spleising ↓
Modent mRNA: 5'-cap—[Ekson 1][Ekson 2][Ekson 3]—poly(A)-3'
\`\`\`

**Spleisosomet:**
- Et stort RNA-protein-kompleks bestående av **snRNP**-er (small nuclear ribonucleoproteins)
- Gjenkjenner spesifikke sekvenser ved intron-ekson-grensene:
  - **5'-spleisested**: GU (ved starten av intronet)
  - **3'-spleisested**: AG (ved slutten av intronet)
  - **Forgreningspunkt**: A (inne i intronet)

### Alternativ spleising

Et gen kan gi opphav til **flere forskjellige mRNA-varianter** ved at eksoner kombineres på ulike måter:

\`\`\`
Gen:        [E1]—i1—[E2]—i2—[E3]—i3—[E4]
Variant A:  [E1][E2][E3][E4]       (alle eksoner)
Variant B:  [E1][E2][E4]           (ekson 3 hoppet over)
Variant C:  [E1][E3][E4]           (ekson 2 hoppet over)
\`\`\`

Alternativ spleising øker **proteinmangfoldet** enormt: Menneskets ~20 000 gener kan kode for over 100 000 forskjellige proteiner.`,
    },

    {
      id: 'bio2-1-2-note-introner',
      type: 'note',
      title: 'Hvorfor har vi introner?',
      content: 'Introner kan virke som «søppel-DNA», men de har viktige funksjoner: (1) De muliggjør alternativ spleising, som øker proteinmangfoldet. (2) De inneholder regulatoriske elementer som påvirker genekspresjon. (3) De letter evolusjon ved ekson-shuffling – eksoner kan rekombineres til nye genkombiasjoner. (4) Noen introner koder for regulatorisk RNA (f.eks. miRNA).',
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bio2-1-2-example-3',
      type: 'example',
      title: 'Eksempel 3: mRNA-prosessering',
      problem: `Et pre-mRNA-molekyl er 8500 nukleotider langt. Etter prosessering er det modne mRNA-et 1800 nukleotider langt (pluss 5'-cap og poly(A)-hale). Hvor stor prosentandel av pre-mRNA-et utgjør introner?`,
      solution: `**Løsning:**

**Gitt:**
- Pre-mRNA: 8500 nt
- Modent mRNA (eksoner): 1800 nt

**Beregning:**
Intron-andel = (total lengde − ekson-lengde) / total lengde × 100 %

Intron-lengde = 8500 − 1800 = 6700 nt

Intron-andel = 6700 / 8500 × 100 % = **78,8 %**

**Svar:** Ca. **79 %** av pre-mRNA-et er introner som fjernes under spleising.

Dette er typisk for mange eukaryote gener. For eksempel er dystrofin-genet (det lengste kjente humane genet) 99,4 % introner!`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-2-ex-3',
        number: '1.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de tre hovedmodifikasjonene som pre-mRNA gjennomgår hos eukaryoter, og forklar funksjonen til hver av dem.',
        solution: '**1. 5\'-Capping:**\nEn 7-metylguanosin (m7G) kobles til 5\'-enden via en 5\'→5\'-trifosfatbinding. **Funksjon:** Beskytter mot nedbrytning av eksonukleaser, er nødvendig for gjenkjenning av ribosomet under translasjon, og hjelper med transport ut av kjernen.\n\n**2. 3\'-Polyadenylering:**\nEn poly(A)-hale med 100–250 adeninnukleotider legges til 3\'-enden av mRNA av poly(A)-polymerase. Signalsekvensen AAUAAA utløser prosessen. **Funksjon:** Beskytter mot nedbrytning fra 3\'-enden, bidrar til eksport fra kjernen, og påvirker mRNA-stabilitet og translasjonseffektivitet.\n\n**3. Spleising:**\nIntroner (ikke-kodende sekvenser) fjernes og eksoner (kodende sekvenser) kobles sammen av spleisosomet. **Funksjon:** Fjerner ikke-kodende sekvenser slik at mRNA kun inneholder informasjon for proteinsyntese. Muliggjør alternativ spleising som øker proteinmangfoldet.',
        hints: ['Tenk på hva som legges til i begge ender, og hva som fjernes fra midten av pre-mRNA.'],
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'bio2-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-2-ex-4',
        number: '1.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er funksjonen til alternativ spleising?',
        options: [
          { id: 'a', text: 'Å produsere flere forskjellige proteiner fra ett gen', isCorrect: true },
          { id: 'b', text: 'Å fjerne mutasjoner fra mRNA', isCorrect: false },
          { id: 'c', text: 'Å øke hastigheten på transkripsjon', isCorrect: false },
          { id: 'd', text: 'Å legge til poly(A)-halen på mRNA', isCorrect: false },
        ],
        solution: 'Alternativ spleising gjør det mulig å kombinere eksoner på ulike måter slik at ett gen kan kode for flere forskjellige mRNA-varianter – og dermed flere forskjellige proteiner. Hos mennesket kan ~20 000 gener gi opphav til over 100 000 forskjellige proteiner takket være alternativ spleising.',
        hints: ['Tenk på hva som skjer når eksoner kombineres i ulike rekkefølger eller noen eksoner utelates.'],
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-1-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-2-ex-5',
        number: '1.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En maltråd (templattråd) har sekvensen 3\'-TACGGCATTAGCAAGCTT-5\'. Skriv sekvensen til mRNA som transkriberes fra denne maltråden, og identifiser startkodonet (AUG) i mRNA-sekvensen.',
        solution: 'RNA-polymerase leser maltråden i 3\'→5\'-retning og syntetiserer mRNA i 5\'→3\'-retning. Baseparingsreglene for transkripsjon: A→U, T→A, G→C, C→G.\n\nMaltråd:  3\'-T A C G G C A T T A G C A A G C T T-5\'\nmRNA:     5\'-A U G C C G U A A U C G U U C G A A-3\'\n\n**Startkodonet AUG** finnes i begynnelsen av mRNA-sekvensen (posisjon 1–3). Dette kodonet koder for aminosyren metionin og signaliserer starten på translasjon.\n\nMerk: Sekvensen UAA ved posisjon 7–9 er et **stoppkodon**, men her er det viktig å lese i riktig leseramme fra AUG:\n- AUG | CCG | UAA | UCG | UUC | GAA\n- Met - Pro - Stopp\n\nDette genet koder altså for et svært kort peptid (dipeptid: Met-Pro) etterfulgt av et stoppkodon.',
        hints: [
          'Husk at uracil (U) erstatter tymin (T) i RNA.',
          'AUG er startkodonet og koder for metionin.',
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-1-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

### Transkripsjon – Hovedpunkter
- **Definisjon**: Prosessen der DNA-informasjon kopieres til RNA
- RNA-polymerase leser maltråden i **3'→5'** og syntetiserer mRNA i **5'→3'**
- Tre faser: **Initiering** (promotorgjenkjenning), **elongering** (RNA-syntese) og **terminering**

### Forskjeller mellom pro- og eukaryoter
- Prokaryoter: Én RNA-polymerase, sigma-faktor, ingen prosessering
- Eukaryoter: Tre RNA-polymeraser, transkripsjonsfaktorer, omfattende prosessering

### mRNA-prosessering (eukaryoter)
- **5'-cap**: m7G-kappe som beskytter og hjelper translasjon
- **3'-poly(A)-hale**: 100–250 A-nukleotider som stabiliserer mRNA
- **Spleising**: Fjerning av introner, sammenkobling av eksoner

### Alternativ spleising
- Ulike eksoner kan kombineres på forskjellige måter
- Øker proteinmangfoldet enormt
- ~20 000 gener → >100 000 proteiner hos mennesket`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3: Translasjon
// ============================================================================

export const CHAPTER_BIOLOGI_2_1_3: TextbookChapter = {
  id: 'biologi-2-1-3',
  courseId: 'biologi-2',
  chapterNumber: '1.3',
  title: 'Translasjon',
  description: 'Fra mRNA til protein – ribosom, tRNA og den genetiske koden.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare translasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-1-3-intro',
      type: 'text',
      content: `# Translasjon

I dette kapittelet skal du lære om:

- Den genetiske koden og kodon-tabellen
- Transfer-RNA (tRNA) og aminosyre-aktivering
- Ribosomets struktur og funksjon
- De tre fasene av translasjon: initiering, elongering og terminering

Translasjon er det andre hovedsteget i genekspresjon, der den genetiske informasjonen i mRNA «oversettes» til en aminosyresekvens – altså et protein. Navnet «translasjon» betyr nettopp oversettelse: fra nukleotidspråket i nukleinsyrer til aminosyrespråket i proteiner.`,
    },

    // ========== TEORI 1: Den genetiske koden ==========
    {
      id: 'bio2-1-3-genetisk-kode',
      type: 'text',
      content: `## Den genetiske koden

Den genetiske koden er «ordboken» som oversetter mRNA-sekvensen til aminosyrer.

### Kodoner

- Koden leses i tripletter kalt **kodoner** – grupper av tre nukleotider i mRNA
- Det finnes $4^3 = 64$ mulige kodoner
- 61 kodoner koder for aminosyrer (det finnes bare 20 ulike aminosyrer)
- 3 kodoner er **stoppkodoner**: UAA, UAG, UGA
- 1 kodon er **startkodon**: AUG (koder for metionin)

### Egenskaper ved den genetiske koden

1. **Degenerert (redundant)**: Flere kodoner kan kode for samme aminosyre
   - Eksempel: Leucin kodes av seks kodoner (UUA, UUG, CUU, CUC, CUA, CUG)
   - Den tredje posisjonen i kodonet («wobble-posisjonen») er mest variabel

2. **Universell**: Nesten alle organismer bruker samme kode
   - Unntak: Mitokondrier og noen protister har små avvik
   - Støtter ideen om et felles opphav for alt liv

3. **Ikke-overlappende**: Kodoner leses etter hverandre uten overlapp
   - Sekvens: AUGCCGUAA → AUG | CCG | UAA

4. **Kommaløs**: Ingen «komma» mellom kodonene – leserammen bestemmes av startkodonet AUG

### Utvalgte kodoner

| Kodon | Aminosyre | | Kodon | Aminosyre |
|-------|-----------|---|-------|-----------|
| AUG | Metionin (start) | | UUU, UUC | Fenylalanin |
| GCU, GCC, GCA, GCG | Alanin | | GAU, GAC | Asparaginsyre |
| UGU, UGC | Cystein | | UAA, UAG, UGA | Stopp |`,
    },

    {
      id: 'bio2-1-3-def-kodon',
      type: 'definition',
      title: 'Kodon',
      content: 'Et kodon er en sekvens av tre sammenhengende nukleotider i mRNA som koder for en bestemt aminosyre (eller et stoppsignal). Koden leses fra startkodonet AUG i 5\'→3\'-retning i én bestemt leseramme. Den genetiske koden er degenerert (flere kodoner kan kode for samme aminosyre), universell (nesten lik i alle organismer) og ikke-overlappende.',
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bio2-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Oversette mRNA til aminosyrer',
      problem: `Gitt følgende mRNA-sekvens:

5'-AUGGCUUACCGAUUUGAA-3'

Identifiser kodonene og bestem aminosyresekvensen (bruk en kodon-tabell).`,
      solution: `**Løsning:**

**Steg 1:** Del sekvensen i kodoner fra startkodonet AUG:

\`\`\`
5'-AUG | GCU | UAC | CGA | UUU | GAA-3'
\`\`\`

**Steg 2:** Slå opp hvert kodon i kodon-tabellen:

| Kodon | Aminosyre |
|-------|-----------|
| AUG | Metionin (Met/M) – **start** |
| GCU | Alanin (Ala/A) |
| UAC | Tyrosin (Tyr/Y) |
| CGA | Arginin (Arg/R) |
| UUU | Fenylalanin (Phe/F) |
| GAA | Glutaminsyre (Glu/E) |

**Aminosyresekvens:** Met–Ala–Tyr–Arg–Phe–Glu

Merk: Denne sekvensen inneholder ikke et stoppkodon, så i virkeligheten ville translasjonen fortsette videre langs mRNA-et.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-3-ex-1',
        number: '1.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange nukleotider utgjør ett kodon?',
        options: [
          { id: 'a', text: '3', isCorrect: true },
          { id: 'b', text: '1', isCorrect: false },
          { id: 'c', text: '4', isCorrect: false },
          { id: 'd', text: '2', isCorrect: false },
        ],
        solution: 'Et kodon består av tre sammenhengende nukleotider i mRNA. Med fire mulige baser (A, U, G, C) gir dette $4^3 = 64$ mulige kodoner, som er nok til å kode for alle 20 aminosyrer pluss stoppsignaler.',
        hints: ['Tenk på hvor mange nukleotider som er nødvendig for å kode for minst 20 aminosyrer.'],
      },
    },

    // ========== TEORI 2: tRNA og ribosom ==========
    {
      id: 'bio2-1-3-trna-ribosom',
      type: 'text',
      content: `## Transfer-RNA (tRNA) og ribosomet

### tRNA – molekylær «tolk»

tRNA fungerer som oversetter mellom nukleotid- og aminosyrespråket:

**Struktur (kløverblad-form):**
- Ca. 75–95 nukleotider langt
- Faldet til en L-formet 3D-struktur
- **Antikodon** (3 baser): Komplementær til kodonet i mRNA
- **3'-akseptorsete** (CCA-ende): Der aminosyren bindes
- Aminosyren kobles til tRNA av **aminoacyl-tRNA-syntetase** (bruker ATP)

\`\`\`
        Aminosyre
            ↓
    A
    C       ← 3'-akseptorsete
    C
    |
  ╔═══╗
  ║   ║    ← tRNA-kropp (kløverblad)
  ╚═╦═╝
    ║
  ┌─┴─┐
  │A│U│C│  ← Antikodon
  └───┘
    ↕
  │U│A│G│  ← Kodon (i mRNA)
\`\`\`

Hvert tRNA er spesifikt: **aminoacyl-tRNA-syntetase** sikrer at riktig aminosyre kobles til riktig tRNA. Det finnes 20 forskjellige syntetaser – én for hver aminosyre.

### Ribosomet – proteinfabrikken

Ribosomet er et stort RNA-protein-kompleks:

**Struktur:**
- **Prokaryoter**: 70S-ribosom (30S liten underenhet + 50S stor underenhet)
- **Eukaryoter**: 80S-ribosom (40S liten underenhet + 60S stor underenhet)

**Tre bindingsseter:**
- **A-setet** (aminoacyl): Her ankommer nytt aminoacyl-tRNA med neste aminosyre
- **P-setet** (peptidyl): Her sitter tRNA-et som bærer den voksende polypeptidkjeden
- **E-setet** (exit): Her forlater «tomt» tRNA ribosomet

**Ribosomalt RNA (rRNA):**
- rRNA utgjør ca. 2/3 av ribosomets masse
- rRNA i den store underenheten har **peptidyltransferase-aktivitet** – det katalyserer dannelsen av peptidbindinger
- Ribosomet er et **ribozym** (RNA-enzym)`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bio2-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Antikodon-kodon-paring',
      problem: `Et tRNA har antikodonet 3'-UAC-5'. Hvilket kodon gjenkjenner dette tRNA-et, og hvilken aminosyre bærer det?`,
      solution: `**Løsning:**

**Steg 1:** Bestem kodonet
Antikodonet parer seg komplementært og antiparallelt med kodonet:

\`\`\`
mRNA-kodon:     5'-AUG-3'
tRNA-antikodon: 3'-UAC-5'
\`\`\`

Kodonet er **AUG**.

**Steg 2:** Slå opp aminosyren
AUG koder for **metionin (Met)** og er dessuten **startkodonet** for translasjon.

**Svar:** tRNA med antikodon 3'-UAC-5' gjenkjenner kodonet AUG og bærer aminosyren **metionin**. Dette er initiator-tRNA-et som starter all proteinsyntese.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-3-ex-2',
        number: '1.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvor dannes peptidbindingene mellom aminosyrer under translasjon?',
        options: [
          { id: 'a', text: 'I den store ribosomunderenheten (peptidyltransferase-setet)', isCorrect: true },
          { id: 'b', text: 'I den lille ribosomunderenheten', isCorrect: false },
          { id: 'c', text: 'På tRNA-molekylet', isCorrect: false },
          { id: 'd', text: 'I cellekjernen', isCorrect: false },
        ],
        solution: 'Peptidbindingene dannes av peptidyltransferase-aktiviteten i den store ribosomunderenheten. Det er ribosomalt RNA (rRNA), ikke protein, som katalyserer denne reaksjonen – ribosomet er dermed et ribozym. Reaksjonen skjer mellom aminosyren i A-setet og polypeptidkjeden i P-setet.',
        hints: ['Tenk på hvilket sete i ribosomet som er ansvarlig for å koble aminosyrer.'],
      },
    },

    // ========== TEORI 3: Translasjonens faser ==========
    {
      id: 'bio2-1-3-faser',
      type: 'text',
      content: `## Translasjonens tre faser

### 1. Initiering

**Hos prokaryoter:**
1. Den lille underenheten (30S) binder til **Shine-Dalgarno-sekvensen** i mRNA (oppstrøms for AUG)
2. **Initiator-tRNA** (fMet-tRNA) plasseres i P-setet, parende med AUG
3. Den store underenheten (50S) bindes – komplett 70S-ribosom dannes
4. Krever initieringsfaktorer (IF1, IF2, IF3) og GTP

**Hos eukaryoter:**
1. Initieringsfaktorer (eIF) og den lille underenheten (40S) binder til **5'-cap** på mRNA
2. Ribosomkomplekset «skanner» mRNA i 5'→3'-retning til det finner AUG
3. **Kozak-sekvensen** rundt AUG hjelper med gjenkjenning
4. Initiator-tRNA (Met-tRNA) plasseres i P-setet
5. Den store underenheten (60S) bindes – komplett 80S-ribosom dannes

### 2. Elongering

Elongeringen gjentas i en syklus for hvert kodon:

**Steg 1 – Kodon-gjenkjenning:**
- Aminoacyl-tRNA med riktig antikodon binder til A-setet
- Krever elongeringsfaktor (EF-Tu hos prokaryoter) og GTP
- GTP-hydrolyse sikrer «korrekturlesing» av kodon-antikodon-paring

**Steg 2 – Peptidbinding:**
- Peptidyltransferase (rRNA) katalyserer overføring av polypeptidkjeden fra tRNA i P-setet til aminosyren i A-setet
- Ny peptidbinding dannes

**Steg 3 – Translokasjon:**
- Ribosomet flyttes ett kodon (3 nt) langs mRNA i 5'→3'-retning
- tRNA i A-setet → P-setet
- tRNA i P-setet → E-setet (forlater ribosomet)
- Nytt kodon eksponeres i A-setet
- Krever elongeringsfaktor (EF-G) og GTP

\`\`\`
Syklus:
  A-sete: Nytt aa-tRNA → Peptidbinding → Translokasjon → E-sete (ut)
         P-sete          A→P           P→E
\`\`\`

**Hastighet:** Ca. 15–20 aminosyrer per sekund hos prokaryoter.

### 3. Terminering

1. Et **stoppkodon** (UAA, UAG eller UGA) ankommer A-setet
2. Ingen tRNA har et matchende antikodon
3. **Frigjøringsfaktorer** (RF1/RF2 hos prokaryoter) gjenkjenner stoppkodonene
4. Frigjøringsfaktoren stimulerer hydrolyse av peptidet fra tRNA i P-setet
5. Polypeptidkjeden frigjøres
6. Ribosomet dissosierer i sine to underenheter`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bio2-1-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Følge translasjon steg for steg',
      problem: `Følgende mRNA skal translateres:

5'-AUGUUCGCUUAA-3'

Beskriv hva som skjer i hvert steg av translasjonen.`,
      solution: `**Løsning:**

**Del opp i kodoner:**
AUG | UUC | GCU | UAA

**Initiering:**
- Ribosomet gjenkjenner AUG (startkodon)
- Initiator-tRNA med metionin plasseres i P-setet

**Elongering – Runde 1:**
- A-setet: Kodon UUC → tRNA med antikodon AAG bringer fenylalanin (Phe)
- Peptidbinding: Met-Phe
- Translokasjon: Ribosomet rykker ett kodon fremover

**Elongering – Runde 2:**
- A-setet: Kodon GCU → tRNA med antikodon CGA bringer alanin (Ala)
- Peptidbinding: Met-Phe-Ala
- Translokasjon: Ribosomet rykker ett kodon fremover

**Terminering:**
- A-setet: Kodon UAA → **stoppkodon**
- Frigjøringsfaktor binder i A-setet
- Polypeptidkjeden **Met-Phe-Ala** frigjøres
- Ribosomet dissosierer

**Ferdig peptid:** Metionin–Fenylalanin–Alanin (tripeptid)`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-3-ex-3',
        number: '1.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de tre setene (A, P og E) i ribosomet og forklar deres funksjon under translasjon.',
        solution: '**A-setet (aminoacyl-setet):**\nHer ankommer nye aminoacyl-tRNA-molekyler med sin aminosyre. Antikodonet på tRNA parer seg med kodonet i mRNA. Kodon-antikodon-paringen kontrolleres ved hjelp av GTP-hydrolyse (korrekturlesing).\n\n**P-setet (peptidyl-setet):**\nHer sitter tRNA-et som bærer den voksende polypeptidkjeden. Under peptidbindingsdannelsen overføres hele polypeptidkjeden fra P-setets tRNA til aminosyren på A-setets tRNA.\n\n**E-setet (exit-setet):**\nHer befinner seg det «tomme» tRNA-et (uten aminosyre) som nettopp har overført sin polypeptidkjede. tRNA-et forlater ribosomet fra E-setet og kan resirkuleres – det kobles til en ny aminosyre av aminoacyl-tRNA-syntetase.\n\n**Bevegelsen:** Under translokasjon rykker alt ett steg: tRNA i A → P → E → ut. Samtidig rykker ribosomet ett kodon (3 nt) langs mRNA.',
        hints: ['A = aminoacyl (nytt tRNA kommer inn), P = peptidyl (polypeptidkjeden vokser), E = exit (tomt tRNA forlater).'],
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'bio2-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-3-ex-4',
        number: '1.3.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er funksjonen til startkodonet AUG?',
        options: [
          { id: 'a', text: 'Det signaliserer starten på translasjon og koder for metionin', isCorrect: true },
          { id: 'b', text: 'Det signaliserer slutten av translasjon', isCorrect: false },
          { id: 'c', text: 'Det koder for tryptofan', isCorrect: false },
          { id: 'd', text: 'Det er et stoppkodon', isCorrect: false },
        ],
        solution: 'AUG er startkodonet som signaliserer hvor translasjonen skal begynne. Det koder for aminosyren metionin (Met), som dermed alltid er den første aminosyren i et nylig syntetisert protein. Hos prokaryoter brukes formylmetionin (fMet) som startaminosyre. Startkodonet AUG gjenkjennes av initiator-tRNA i P-setet.',
        hints: ['Tenk på hvilken aminosyre som alltid er først i en polypeptidkjede.'],
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-1-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-3-ex-5',
        number: '1.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En mRNA-sekvens lyder: 5\'-AUGAAACCCGGUUAGUUC-3\'. Identifiser kodonene, bestem aminosyresekvensen og forklar hva som skjer ved stoppkodonet. Hva skjer med nukleotidene etter stoppkodonet?',
        solution: '**Del opp i kodoner fra AUG:**\n\nAUG | AAA | CCC | GGU | UAG | UUC\n\n**Oversettelse:**\n- AUG = Metionin (start)\n- AAA = Lysin\n- CCC = Prolin\n- GGU = Glycin\n- **UAG = Stoppkodon**\n\n**Aminosyresekvens:** Met–Lys–Pro–Gly\n\n**Ved stoppkodonet (UAG):**\nIngen aminoacyl-tRNA har et antikodon som parer med UAG. I stedet binder en **frigjøringsfaktor** (RF) i A-setet. Denne faktoren stimulerer hydrolyse av den esteriske bindingen mellom polypeptidkjeden og tRNA i P-setet. Polypeptidkjeden (Met-Lys-Pro-Gly) frigjøres, og ribosomunderenhetene dissosierer.\n\n**Nukleotidene etter stoppkodonet (UUC):**\nDisse nukleotidene utgjør **3\'-UTR** (untranslated region) og translateres ikke. 3\'-UTR kan inneholde regulatoriske elementer som påvirker mRNA-stabilitet, lokalisering og translasjonseffektivitet. De leses altså ikke som kodoner.',
        hints: [
          'Husk at leserammen starter ved AUG.',
          'Stoppkodoner koder ikke for aminosyrer – hva binder i stedet?',
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-1-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

### Den genetiske koden
- Kodoner: Tripletter av nukleotider i mRNA
- 64 kodoner: 61 koder for aminosyrer, 3 er stoppkodoner (UAA, UAG, UGA)
- AUG = startkodon (metionin)
- Koden er **degenerert**, **universell** og **ikke-overlappende**

### tRNA
- Bærer aminosyrer til ribosomet
- **Antikodon** parer med kodon i mRNA
- **Aminoacyl-tRNA-syntetase** kobler riktig aminosyre til riktig tRNA

### Ribosomet
- Tre seter: **A** (innkommende), **P** (peptidkjede), **E** (utgang)
- rRNA katalyserer peptidbinding (**ribozym**)
- Prokaryoter: 70S (30S + 50S); Eukaryoter: 80S (40S + 60S)

### Translasjonens faser
- **Initiering**: Ribosom samles på mRNA ved AUG
- **Elongering**: Aminosyrer legges til én om gangen (kodon-gjenkjenning → peptidbinding → translokasjon)
- **Terminering**: Stoppkodon → frigjøringsfaktor → peptid frigjøres`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4: Genregulering
// ============================================================================

export const CHAPTER_BIOLOGI_2_1_4: TextbookChapter = {
  id: 'biologi-2-1-4',
  courseId: 'biologi-2',
  chapterNumber: '1.4',
  title: 'Genregulering',
  description: 'Regulering av genekspresjon hos prokaryoter og eukaryoter.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive genregulering',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-1-4-intro',
      type: 'text',
      content: `# Genregulering

I dette kapittelet skal du lære om:

- Hvorfor genregulering er nødvendig
- Operon-modellen for genregulering hos prokaryoter
- Transkripsjonsfaktorer og regulering hos eukaryoter
- Epigenetiske mekanismer

Alle celler i kroppen din inneholder det **samme genomet** – nøyaktig det samme DNA-et. Likevel er en nervecelle fundamentalt forskjellig fra en muskelcelle eller en levercelle. Hemmeligheten ligger i **genregulering**: hvilke gener som er skrudd på (uttrykt) og hvilke som er skrudd av varierer mellom celletyper, utviklingsstadier og som respons på ytre signaler.`,
    },

    // ========== TEORI 1: Regulering hos prokaryoter ==========
    {
      id: 'bio2-1-4-prokaryoter',
      type: 'text',
      content: `## Genregulering hos prokaryoter – Operon-modellen

Hos bakterier er genregulering ofte organisert i **operoner** – grupper av gener som reguleres sammen.

### Operon-struktur

Et operon består av:
1. **Promotor**: Bindingssted for RNA-polymerase
2. **Operator**: Bindingssted for repressorprotein (ligger mellom/overlapper med promotor og strukturgener)
3. **Strukturgener**: Genene som koder for proteinene (transkriberes til polycistronisk mRNA)
4. **Regulatorgen**: Koder for repressorproteinet (ligger ofte oppstrøms)

### Lac-operonet – et indusibelt system

Lac-operonet i *E. coli* regulerer genene som trengs for å bryte ned **laktose**:

**Strukturgener:**
- **lacZ**: β-galaktosidase (spalter laktose til glukose + galaktose)
- **lacY**: Laktose-permease (transporterer laktose inn i cellen)
- **lacA**: Transacetylase

**Uten laktose (operonet er AV):**
\`\`\`
Regulatorgen → Repressorprotein → Binder operator → RNA-pol blokkert
                  (aktiv)

[Reg]——[Promotor][Operator][lacZ][lacY][lacA]
                     ↑
               Repressor binder
               → INGEN transkripsjon
\`\`\`

**Med laktose (operonet er PÅ):**
\`\`\`
Laktose → Allolaktose → Binder repressor → Repressor endrer form → Faller av operator

[Reg]——[Promotor][Operator][lacZ][lacY][lacA]
                             → TRANSKRIPSJON skjer
                             → mRNA for alle tre genene
\`\`\`

Allolaktose (en isomer av laktose) fungerer som **induktor** – den binder til repressorproteinet og endrer dets form slik at det ikke lenger kan binde operator.

### Trp-operonet – et repressibelt system

Trp-operonet koder for enzymer som syntetiserer aminosyren **tryptofan**:

**Uten tryptofan (operonet er PÅ):**
- Repressorproteinet er inaktivt (kan ikke binde operator alene)
- RNA-polymerase transkriberer strukturgenene
- Cellen produserer tryptofan

**Med tryptofan (operonet er AV):**
- Tryptofan fungerer som **korepressor**
- Tryptofan binder til repressorproteinet og aktiverer det
- Aktiv repressor binder operator og blokkerer transkripsjon
- Negativ tilbakekobling – cellen stopper produksjon av tryptofan når det er nok`,
    },

    {
      id: 'bio2-1-4-def-operon',
      type: 'definition',
      title: 'Operon',
      content: 'Et operon er en funksjonell enhet for genregulering hos prokaryoter. Det består av en promotor, en operator og flere strukturgener som transkriberes som ett polycistronisk mRNA. Operatorsekvensen kontrollerer tilgangen til genene: når en repressor binder operatoren, blokkeres transkripsjon. Operoner gjør det mulig å koordinere uttrykket av relaterte gener i respons til miljøet.',
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bio2-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Lac-operonet i ulike betingelser',
      problem: `Beskriv tilstanden til lac-operonet under tre ulike betingelser:
a) Kun glukose tilgjengelig
b) Kun laktose tilgjengelig
c) Både glukose og laktose tilgjengelig`,
      solution: `**Løsning:**

**a) Kun glukose (foretrukket karbonkilde):**
- Ingen laktose → ingen allolaktose → repressor er aktiv og binder operator
- Lac-operonet er **AV**
- Cellen bruker glukose og trenger ikke laktose-nedbrytende enzymer

**b) Kun laktose:**
- Laktose → allolaktose → binder repressor → repressor faller av operator
- Ingen glukose → høyt cAMP-nivå → CAP (katabolittaktiveringsprotein) binder oppstrøms for promotor
- CAP rekrutterer RNA-polymerase → kraftig transkripsjon
- Lac-operonet er **FULLT PÅ** (maksimal ekspresjon)

**c) Både glukose og laktose:**
- Allolaktose fjerner repressor fra operator
- MEN: Glukose er tilgjengelig → lavt cAMP-nivå → CAP binder IKKE
- Lac-operonet er **SVAKT PÅ** (basal transkripsjon uten CAP-aktivering)
- Cellen foretrekker glukose (katabol represjon)

**Konklusjon:** Lac-operonet uttrykkes maksimalt bare når laktose er tilgjengelig OG glukose er fraværende. Dette er et eksempel på **dobbelt regulering**: negativ regulering (repressor/operator) og positiv regulering (CAP/cAMP).`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-4-ex-1',
        number: '1.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er funksjonen til repressorproteinet i lac-operonet når det IKKE er laktose tilgjengelig?',
        options: [
          { id: 'a', text: 'Det binder operator og blokkerer transkripsjon', isCorrect: true },
          { id: 'b', text: 'Det aktiverer RNA-polymerase', isCorrect: false },
          { id: 'c', text: 'Det bryter ned laktose', isCorrect: false },
          { id: 'd', text: 'Det binder til mRNA og hindrer translasjon', isCorrect: false },
        ],
        solution: 'Når det ikke er laktose tilgjengelig, er repressorproteinet i sin aktive form og binder til operatorsekvensen. Dette blokkerer RNA-polymerase fra å bevege seg forbi operatoren, og transkripsjon av strukturgenene (lacZ, lacY, lacA) forhindres. Når laktose (i form av allolaktose) er tilgjengelig, binder den til repressoren og endrer dens konformasjon slik at den faller av operatoren.',
        hints: ['Tenk på hva som fysisk blokkerer RNA-polymerase.'],
      },
    },

    // ========== TEORI 2: Regulering hos eukaryoter ==========
    {
      id: 'bio2-1-4-eukaryoter',
      type: 'text',
      content: `## Genregulering hos eukaryoter

Eukaryot genregulering er langt mer kompleks enn hos prokaryoter. Regulering kan skje på flere nivåer:

### 1. Kromatinstruktur (epigenetisk regulering)

DNA i eukaryoter er pakket rundt **histonproteiner** i strukturer kalt **nukleosomer**:

\`\`\`
     H1
    ╔══╗
DNA═╝  ╚═DNA═╗  ╔═DNA═╗  ╔═DNA
              ╚══╝     ╚══╝
           Nukleosom  Nukleosom
        (8 histoner)  (8 histoner)
\`\`\`

**Heterokromatin** (tett pakket): Gener er utilgjengelige → AV
**Eukromatin** (løst pakket): Gener er tilgjengelige → PÅ

### 2. Transkripsjonsfaktorer

Eukaryoter bruker **transkripsjonsfaktorer** for å regulere genekspresjon:

- **Generelle TF-er**: Nødvendige for all transkripsjon (TFIIA, TFIIB, TFIID osv.)
- **Spesifikke TF-er**: Regulerer uttrykket av bestemte gener
  - **Aktivatorer**: Øker transkripsjonen ved å binde **enhancere** (kan ligge tusenvis av basepar unna)
  - **Repressorer**: Hemmer transkripsjonen ved å binde **silencere**

### 3. Enhancere og silencere

- **Enhancere**: DNA-sekvenser som øker transkripsjon – kan ligge opptil 1 million bp fra promotor
- **Silencere**: DNA-sekvenser som hemmer transkripsjon
- Virker uavhengig av avstand og orientering
- DNA-et looper for å bringe enhancer-bundne aktivatorer i kontakt med transkripsjonsmaskineriet

### 4. Post-transkripsjonell regulering

- **mRNA-stabilitet**: Regulert av sekvenser i 3'-UTR og RNA-bindende proteiner
- **miRNA**: Små RNA-molekyler (~22 nt) som binder komplementært til mRNA og hemmer translasjon eller fører til mRNA-nedbrytning
- **Alternativ spleising**: Ulike eksoner inkluderes i ulike celletyper

### 5. Post-translasjonell regulering

- **Proteinmodifisering**: Fosforylering, ubikvitinering, acetylering
- **Proteinnedbrytning**: Ubikvitin-proteasom-systemet
- **Proteintransport**: Riktig lokalisering i cellen`,
    },

    {
      id: 'bio2-1-4-def-transkripsjonsfaktor',
      type: 'definition',
      title: 'Transkripsjonsfaktor',
      content: 'En transkripsjonsfaktor er et protein som regulerer transkripsjon ved å binde til spesifikke DNA-sekvenser. Generelle transkripsjonsfaktorer er nødvendige for all transkripsjon av RNA-polymerase II. Spesifikke transkripsjonsfaktorer kan være aktivatorer (øker transkripsjon) eller repressorer (hemmer transkripsjon), og de binder til enhancere eller silencere som kan ligge langt fra genet de regulerer.',
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bio2-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne regulering hos pro- og eukaryoter',
      problem: `Gi tre viktige forskjeller mellom genregulering hos prokaryoter og eukaryoter.`,
      solution: `**Løsning:**

| Egenskap | Prokaryoter | Eukaryoter |
|----------|-------------|------------|
| **Organisering** | Operoner med polycistronisk mRNA | Individuelle gener med monocistronisk mRNA |
| **Kromatinstruktur** | Ikke relevant (nakent DNA med noen DNA-bindende proteiner) | Avgjørende reguleringsmekanisme (histonmodifisering, DNA-metylering, nukleosomremodellering) |
| **Regulatoriske sekvenser** | Operator nær promotor | Enhancere og silencere kan ligge opptil 1 million bp fra genet |

**Tilleggsforskjeller:**
- Prokaryoter: Rask respons (minutter), ofte av/på-regulering
- Eukaryoter: Regulering på mange nivåer (kromatin, transkripsjon, spleising, translasjon, post-translasjon)
- Prokaryoter: Transkripsjon og translasjon kobles direkte
- Eukaryoter: mRNA prosesseres i kjernen, translateres i cytoplasma`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-4-ex-2',
        number: '1.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en enhancer i eukaryot genregulering?',
        options: [
          { id: 'a', text: 'En DNA-sekvens som øker transkripsjon og kan ligge langt fra genet', isCorrect: true },
          { id: 'b', text: 'Et enzym som gjør DNA-replikasjon raskere', isCorrect: false },
          { id: 'c', text: 'Et protein som bryter ned mRNA', isCorrect: false },
          { id: 'd', text: 'En del av operatorsekvensen i lac-operonet', isCorrect: false },
        ],
        solution: 'En enhancer er en cis-regulatorisk DNA-sekvens som øker transkripsjon av et gen. Enhancere kan ligge opptil 1 million basepar fra promotoren de regulerer, og de virker uavhengig av orientering. Aktivatorproteiner (transkripsjonsfaktorer) binder til enhanceren, og DNA-looping bringer disse aktivatorene i kontakt med transkripsjonsmaskineriet ved promotoren.',
        hints: ['Tenk på navnet «enhancer» – hva betyr det på norsk?'],
      },
    },

    // ========== TEORI 3: Epigenetikk ==========
    {
      id: 'bio2-1-4-epigenetikk',
      type: 'text',
      content: `## Epigenetikk

Epigenetikk handler om **arvelige endringer i genekspresjon** som ikke skyldes endringer i selve DNA-sekvensen. Epigenetiske modifikasjoner «merker» DNA og histoner, og bestemmer om gener er tilgjengelige for transkripsjon.

### DNA-metylering

- **Metylgrupper** ($-CH_3$) legges til cytosin i **CpG-dinukleotider** (cytosin etterfulgt av guanin)
- Katalyseres av **DNA-metyltransferaser** (DNMTs)
- Metylering av en promotorregion → genet skrus **AV** (silencing)
- Metyleringsmønsteret kopieres ved DNA-replikasjon → **arvelig**

\`\`\`
Umetylert CpG (gen PÅ):
—C-G—C-G—C-G—[Promotor]—[Gen]→ mRNA
—G-C—G-C—G-C—

Metylert CpG (gen AV):
—C̃-G—C̃-G—C̃-G—[Promotor]—[Gen]→ INGEN mRNA
—G-C—G-C—G-C—
(C̃ = 5-metylcytosin)
\`\`\`

### Histonmodifisering

Histonhaler kan modifiseres kjemisk på ulike måter:

- **Acetylering** (legge til acetylgruppe): Åpner kromatin → gen PÅ
  - Katalyseres av **histonacetyltransferaser** (HAT)
  - Fjernes av **histondeacetylaser** (HDAC)
- **Metylering** (av histoner): Kan både aktivere og hemme, avhengig av hvilken aminosyre og posisjon
  - H3K4me3 (lysin 4 på histon H3, trimetylert) → gen PÅ
  - H3K27me3 (lysin 27 på histon H3, trimetylert) → gen AV
- **Fosforylering**, **ubikvitinering** og andre modifikasjoner

### Histonkoden

Kombinasjonen av histonmodifikasjoner danner en «**histonkode**» som leses av spesifikke proteiner:

| Modifikasjon | Effekt |
|-------------|--------|
| H3K4me3 | Aktiv transkripsjon |
| H3K9me3 | Heterokromatin (av) |
| H3K27me3 | Polycomb-mediert silencing |
| H3K27ac | Aktive enhancere |
| H3K36me3 | Transkriberte genlegemer |

### Epigenetikk og miljø

Epigenetiske endringer kan påvirkes av miljøfaktorer:
- **Kosthold**: Folsyre og metionin gir metylgrupper for DNA-metylering
- **Stress**: Kan endre metyleringsmønstre i hjernen
- **Miljøgifter**: Bisfenol A (BPA) kan endre DNA-metylering
- Noen epigenetiske endringer kan **arves over generasjoner** (transgerasjonell epigenetikk)`,
    },

    {
      id: 'bio2-1-4-def-epigenetikk',
      type: 'definition',
      title: 'Epigenetikk',
      content: 'Epigenetikk er studiet av arvelige endringer i genekspresjon som ikke skyldes forandringer i DNA-sekvensen. De viktigste epigenetiske mekanismene er DNA-metylering (tillegg av metylgrupper til CpG-dinukleotider) og histonmodifisering (acetylering, metylering, fosforylering av histonhaler). Epigenetiske merker regulerer kromatinstruktur og gentilgjengelighet, og kan påvirkes av miljøfaktorer.',
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'bio2-1-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Epigenetikk i praksis',
      problem: `Eneggede (identiske) tvillinger har identisk DNA. Forklar hvorfor de likevel kan utvikle ulike sykdommer og ulike fysiske egenskaper etter hvert som de blir eldre.`,
      solution: `**Løsning:**

Eneggede tvillinger starter med identisk DNA og tilnærmet identiske epigenetiske mønstre. Likevel kan de bli mer og mer forskjellige med alderen fordi:

**1. Ulike miljøpåvirkninger:**
- Ulik kosthold → ulik tilgang på metyldonorer → forskjeller i DNA-metylering
- Ulike stressopplevelser → endret genregulering i nerveceller
- Ulik eksponering for miljøgifter, UV-stråling, røyking osv.

**2. Epigenetisk drift:**
- Tilfeldige endringer i epigenetiske merker akkumuleres over tid
- DNA-metyleringsmønstre kan endres ved celledeling
- Eldre tvillinger har ofte svært forskjellige metyleringsmønstre

**3. Konsekvenser:**
- Ulike gener skrus på/av i ulike vev
- Forskjeller i immunsystem, metabolisme, hjernefunksjon
- Én tvilling kan utvikle diabetes eller kreft, mens den andre forblir frisk

**Eksempel:** Studier har vist at eneggede tvillinger der kun den ene har schizofreni, har forskjellige DNA-metyleringsmønstre i hjernevev.

Dette viser at **genotype ≠ fenotype** – epigenetiske modifikasjoner fra miljøet er med på å bestemme hvilke gener som uttrykkes.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-4-ex-3',
        number: '1.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom lac-operonet (indusibelt system) og trp-operonet (repressibelt system). Gi et eksempel på miljøsignalet som regulerer hvert operon.',
        solution: '**Lac-operonet (indusibelt):**\n- Normaltilstand: **AV** (repressor binder operator)\n- Blir skrudd **PÅ** når laktose er tilgjengelig\n- Laktose omdannes til **allolaktose** (induktor) som binder repressoren og inaktiverer den\n- Repressoren faller av operatoren → transkripsjon starter\n- Miljøsignal: **Laktose** (substrat for enzymene)\n\n**Trp-operonet (repressibelt):**\n- Normaltilstand: **PÅ** (repressor er inaktiv alene)\n- Blir skrudd **AV** når tryptofan er tilgjengelig i overskudd\n- **Tryptofan** fungerer som korepressor – binder repressoren og aktiverer den\n- Aktiv repressor binder operator → transkripsjon stoppes\n- Miljøsignal: **Tryptofan** (produktet av enzymene)\n\n**Hovedforskjell:** Lac-operonet aktiveres når substratet er tilgjengelig (anabolsk logikk: «lag enzymene når det er noe å bryte ned»). Trp-operonet deaktiveres når produktet akkumuleres (katabolsk logikk/negativ tilbakekobling: «slutt å produsere når det er nok»).',
        hints: [
          'Indusibelt = noe skrur det PÅ. Repressibelt = noe skrur det AV.',
          'Tenk på hva som er logisk: Når trenger cellen enzymer for å bryte ned laktose?',
        ],
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'bio2-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-4-ex-4',
        number: '1.4.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er effekten av histonacetylering på genekspresjon?',
        options: [
          { id: 'a', text: 'Det åpner kromatinstrukturen og øker transkripsjon', isCorrect: true },
          { id: 'b', text: 'Det pakker kromatinet tettere og hemmer transkripsjon', isCorrect: false },
          { id: 'c', text: 'Det medfører nedbrytning av mRNA', isCorrect: false },
          { id: 'd', text: 'Det endrer DNA-sekvensen', isCorrect: false },
        ],
        solution: 'Histonacetylering (tillegg av acetylgrupper til lysinrester på histonhaler) nøytraliserer den positive ladningen på histonene. Dette svekker interaksjonen mellom de positivt ladede histonene og det negativt ladede DNA-et, noe som åpner kromatinstrukturen (eukromatin). Åpent kromatin gjør DNA tilgjengelig for transkripsjonsmaskineriet, og genekspresjon øker. Histonacetyltransferaser (HAT) legger til acetylgrupper, mens histondeacetylaser (HDAC) fjerner dem.',
        hints: ['Acetylgrupper nøytraliserer positiv ladning på histoner – hva skjer da med bindingen til negativt ladet DNA?'],
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-1-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-4-ex-5',
        number: '1.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvordan DNA-metylering og histonmodifisering samarbeider for å regulere genekspresjon. Gi et eksempel på hvordan feilregulering av disse mekanismene kan bidra til kreftutvikling.',
        solution: '**Samspill mellom DNA-metylering og histonmodifisering:**\n\nDNA-metylering og histonmodifisering forsterker ofte hverandre:\n\n1. **Genaktivering:** Umetylert DNA ved promotorregioner tillater binding av transkripsjonsfaktorer. Histonacetylering (H3K27ac) og metylering av H3K4 (H3K4me3) åpner kromatinet. Resultat: genet er aktivt.\n\n2. **Gensilencing:** Metylert DNA rekrutterer metyl-CpG-bindende proteiner (MBD-er), som igjen rekrutterer histondeacetylaser (HDAC). HDAC fjerner acetylgrupper → kromatinet lukkes. Histonmetyltransferaser legger til H3K9me3 eller H3K27me3 → heterokromatin dannes. Resultat: genet er helt avslått.\n\n**Eksempel – kreftutvikling:**\n\n**Tumorsuppressorgener** (f.eks. p53, RB, BRCA1) hindrer ukontrollert celledeling. I mange kreftformer observeres:\n\n- **Hypermetylering** av promotorene til tumorsuppressorgener → genene slås av\n- Tap av H3K4me3 (aktiveringsmerke) og gevinst av H3K27me3 (silenceringsmerke)\n- Uten tumorsuppressorer kan cellen dele seg ukontrollert\n\nSamtidig kan **onkogener** (kreftfremmende gener) bli:\n- **Hypometylert** → unormalt høy ekspresjon\n- Acetylert på histoner → åpent kromatin\n\nDenne epigenetiske feilreguleringen er reversibel, noe som gjør det til et lovende mål for kreftbehandling. HDAC-hemmere og DNA-metyltransferase-hemmere brukes allerede som kreftmedisiner.',
        hints: [
          'Tenk på hva som skjer når et gen som skal beskytte mot kreft blir epigenetisk avslått.',
          'DNA-metylering og histonmodifisering forsterker hverandre – hvordan?',
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-1-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

### Prokaryot regulering – Operoner
- **Operon**: Promotor + operator + strukturgener (polycistronisk mRNA)
- **Lac-operon** (indusibelt): AV uten laktose, PÅ med laktose (allolaktose inaktiverer repressor)
- **Trp-operon** (repressibelt): PÅ uten tryptofan, AV med tryptofan (korepressor aktiverer repressor)
- Dobbelt regulering av lac: Repressor (negativ) + CAP/cAMP (positiv)

### Eukaryot regulering – Flere nivåer
- **Kromatinstruktur**: Heterokromatin (av) vs. eukromatin (på)
- **Transkripsjonsfaktorer**: Aktivatorer (binder enhancere) og repressorer (binder silencere)
- **Post-transkripsjonell**: mRNA-stabilitet, alternativ spleising, miRNA
- **Post-translasjonell**: Proteinmodifisering, nedbrytning, transport

### Epigenetikk
- Arvelige endringer i genekspresjon uten endring i DNA-sekvens
- **DNA-metylering** (CpG): Metylering av promotor → gen AV
- **Histonacetylering**: Åpner kromatin → gen PÅ
- **Histonmetylering**: Kan aktivere eller hemme, avhengig av posisjon
- Påvirkes av miljøfaktorer (kosthold, stress, miljøgifter)
- Feilregulering kan bidra til kreftutvikling`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.5: Mutasjoner og DNA-reparasjon
// ============================================================================

export const CHAPTER_BIOLOGI_2_1_5: TextbookChapter = {
  id: 'biologi-2-1-5',
  courseId: 'biologi-2',
  chapterNumber: '1.5',
  title: 'Mutasjoner og DNA-reparasjon',
  description: 'Typer mutasjoner, mutagener, DNA-reparasjonsmekanismer og kobling til kreft.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for ulike typer mutasjoner og deres konsekvenser',
    'forklare mekanismer for DNA-reparasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-1-5-intro',
      type: 'text',
      content: `# Mutasjoner og DNA-reparasjon

I dette kapittelet skal du lære om:

- Ulike typer genmutasjoner og kromosommutasjoner
- Mutagener og hvordan de skader DNA
- Cellens mekanismer for å reparere DNA-skader
- Sammenhengen mellom mutasjoner og kreftutvikling

DNA-replikasjonen er en bemerkelsesverdig presis prosess, men den er ikke perfekt. Feil kan oppstå under kopiering, og DNA kan også skades av ytre faktorer som stråling og kjemikalier. Slike endringer i DNA-sekvensen kalles **mutasjoner**. Noen mutasjoner er harmløse, noen er skadelige, og noen få kan til og med være gunstige for organismen. Cellen har utviklet et sofistikert arsenal av reparasjonsmekanismer for å korrigere de fleste feilene, men når reparasjonen svikter, kan konsekvensene bli alvorlige – inkludert kreftutvikling.`,
    },

    // ========== TEORI 1: Genmutasjoner (punktmutasjoner) ==========
    {
      id: 'bio2-1-5-genmutasjoner',
      type: 'text',
      content: `## Genmutasjoner – endringer i enkeltgener

Genmutasjoner, også kalt **punktmutasjoner**, er endringer som påvirker ett eller noen få nukleotider i DNA-sekvensen. De deles inn i tre hovedkategorier:

### 1. Substitusjoner

En base byttes ut med en annen. Substitusjoner kan videre klassifiseres etter konsekvensen for proteinet:

| Type | Beskrivelse | Konsekvens |
|------|-------------|------------|
| **Missense** | Kodonet endres til å kode for en annen aminosyre | Proteinet får én feil aminosyre – kan være mildt til alvorlig |
| **Nonsense** | Kodonet endres til et stoppkodon | Proteinet blir avkuttet (forkortet) – vanligvis alvorlig |
| **Stille (silent)** | Kodonet endres, men koder fortsatt for samme aminosyre | Ingen effekt på proteinet (pga. den degenererte koden) |

**Eksempel – Sigdcelleanemi:**
En enkelt missense-mutasjon i β-globingenet (GAG → GUG) fører til at glutaminsyre (Glu) byttes med valin (Val) i posisjon 6. Denne ene aminosyreendringen gjør at hemoglobinmolekylene klumper seg sammen og deformerer de røde blodcellene til en sigdform.

### 2. Insersjoner

Ett eller flere ekstra nukleotider settes inn i DNA-sekvensen. Hvis antallet innsatte nukleotider **ikke er delelig med 3**, forskyves hele leserammen nedstrøms for insersjonen.

### 3. Delesjoner

Ett eller flere nukleotider fjernes fra DNA-sekvensen. Som for insersjoner: Hvis antallet slettede nukleotider **ikke er delelig med 3**, oppstår en rammeskiftmutasjon.

### Rammeskiftmutasjoner (frameshift)

Insersjoner og delesjoner som ikke er multipler av 3 forskyver **leserammen** for translasjonen. Dette betyr at alle kodoner nedstrøms for mutasjonen leses feil, og proteinet blir fullstendig endret – vanligvis ikke-funksjonelt.

\`\`\`
Normal:     AUG | GCA | UCG | GAU | UGA
            Met   Ala   Ser   Asp   Stopp

Insersjon (U etter posisjon 4):
            AUG | GUC | AUC | GGA | UUG | A...
            Met   Val   Ile   Gly   Leu   ...
            → Helt annen aminosyresekvens!
\`\`\``,
    },

    {
      id: 'bio2-1-5-def-mutasjon',
      type: 'definition',
      title: 'Mutasjon',
      content: 'En mutasjon er en permanent endring i DNA-sekvensen. Mutasjoner kan oppstå spontant under DNA-replikasjon eller induseres av mutagener (stråling, kjemikalier, virus). Mutasjoner kan være nøytrale, skadelige eller gunstige avhengig av hvor de oppstår og hva de forårsaker. Bare mutasjoner i kjønnsceller (gameter) kan arves til neste generasjon – somatiske mutasjoner påvirker bare individet selv.',
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bio2-1-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Klassifisering av punktmutasjoner',
      problem: `Den normale kodende DNA-sekvensen for et protein starter slik:

5'-ATG GCA TCG GAT-3'

Klassifiser følgende mutasjoner og beskriv konsekvensen for proteinet:

a) 5'-ATG GCA TC**A** GAT-3' (G→A i posisjon 9)
b) 5'-ATG GCA **T**CG GAT-3' → 5'-ATG GCA CG GAT-3' (T i posisjon 7 er deletert)
c) 5'-ATG GCA TCG GA**A**-3' (T→A i posisjon 12)`,
      solution: `**Løsning:**

Først finner vi normal mRNA og aminosyresekvens:

Normal DNA:  5'-ATG GCA TCG GAT-3'
Normal mRNA: 5'-AUG GCA UCG GAU-3'
Kodoner:     AUG | GCA | UCG | GAU
Aminosyrer:  Met   Ala   Ser   Asp

**a) G→A i posisjon 9:**
Mutert mRNA: AUG | GCA | UC**A** | GAU
Aminosyrer:  Met   Ala   **Ser**   Asp
UCA koder fortsatt for serin (Ser) → **Stille mutasjon** (ingen endring i protein). Dette skyldes den degenererte genetiske koden: UCG og UCA koder begge for serin.

**b) Delesjon av T i posisjon 7:**
Mutert mRNA: AUG | GCA | CGG | AU...
Aminosyrer:  Met   Ala   **Arg**  ...
→ **Rammeskiftmutasjon (delesjon)**. Leserammen forskyves fra og med tredje kodon. Alle aminosyrer nedstrøms endres, og proteinet blir sannsynligvis ikke-funksjonelt.

**c) T→A i posisjon 12:**
Mutert mRNA: AUG | GCA | UCG | GA**A**
Aminosyrer:  Met   Ala   Ser   **Glu**
GAA koder for glutaminsyre (Glu) i stedet for asparaginsyre (Asp) → **Missense-mutasjon**. Konsekvensen avhenger av om aminosyreendringen påvirker proteinets funksjon.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-1-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-5-ex-1',
        number: '1.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type mutasjon fører til at et kodon endres til et stoppkodon?',
        options: [
          { id: 'a', text: 'Nonsense-mutasjon', isCorrect: true },
          { id: 'b', text: 'Missense-mutasjon', isCorrect: false },
          { id: 'c', text: 'Stille mutasjon', isCorrect: false },
          { id: 'd', text: 'Rammeskiftmutasjon', isCorrect: false },
        ],
        solution: 'En nonsense-mutasjon er en substitusjon som endrer et kodon som normalt koder for en aminosyre til et stoppkodon (UAA, UAG eller UGA). Resultatet er at translasjonen terminerer for tidlig, og proteinet blir avkuttet. Et avkuttet protein er vanligvis ikke-funksjonelt. Missense endrer til en annen aminosyre, stille endrer ikke aminosyren, og rammeskift forskyver leserammen.',
        hints: ['Tenk på hva «nonsense» betyr – kodonet gir ikke lenger «mening» for en aminosyre.'],
      },
    },

    // ========== TEORI 2: Kromosommutasjoner ==========
    {
      id: 'bio2-1-5-kromosommutasjoner',
      type: 'text',
      content: `## Kromosommutasjoner – storskala endringer

Kromosommutasjoner påvirker store deler av eller hele kromosomer. De er langt mer omfattende enn punktmutasjoner og kan detekteres mikroskopisk.

### Strukturelle kromosommutasjoner

| Type | Beskrivelse | Eksempel |
|------|-------------|----------|
| **Delesjon** | Et segment av kromosomet går tapt | Cri-du-chat-syndrom (delesjon på kromosom 5) |
| **Duplikasjon** | Et segment kopieres og finnes i to eksemplarer | Duplisering av gen for øyenfarge hos Drosophila |
| **Inversjon** | Et segment snur 180° og settes tilbake i omvendt retning | Ofte uten fenotypisk effekt, men kan påvirke genregulering |
| **Translokasjon** | Et segment flyttes til et annet kromosom | Philadelphia-kromosomet (translokasjon mellom kr. 9 og 22 → kronisk myeloid leukemi) |

### Numeriske kromosommutasjoner (aneuploidi)

Aneuploidi oppstår når cellen får feil antall kromosomer, vanligvis forårsaket av **non-disjunksjon** under meiose – kromosomene deler seg ikke korrekt.

| Tilstand | Kromosomtall | Eksempel |
|----------|-------------|----------|
| **Monosomi** | 2n − 1 (mangler ett kromosom) | Turners syndrom (45, X) |
| **Trisomi** | 2n + 1 (ett ekstra kromosom) | Downs syndrom (trisomi 21), Klinefelters syndrom (47, XXY) |
| **Polyploidi** | 3n, 4n osv. | Vanlig hos planter, dødelig hos de fleste dyr |

Non-disjunksjon kan skje i **meiose I** (homologe kromosomer separeres ikke) eller **meiose II** (søsterkromatider separeres ikke). Resultatet er gameter med for mange eller for få kromosomer.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-1-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-5-ex-2',
        number: '1.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom en delesjon på gennivå (punktmutasjon) og en delesjon på kromosomnivå. Gi et eksempel på konsekvens for hver.',
        solution: '**Delesjon på gennivå (punktmutasjon):**\nFjerner ett eller noen få nukleotider fra DNA-sekvensen innenfor et gen. Hvis antallet nukleotider som fjernes ikke er delelig med 3, oppstår en rammeskiftmutasjon som endrer alle aminosyrer nedstrøms. Eksempel: En delesjon av tre nukleotider i CFTR-genet (ΔF508) fjerner aminosyren fenylalanin i posisjon 508 og forårsaker cystisk fibrose.\n\n**Delesjon på kromosomnivå:**\nFjerner et stort segment av kromosomet som kan inneholde hundrevis eller tusenvis av gener. Tap av så mange gener har vanligvis svært alvorlige konsekvenser. Eksempel: Delesjon av den korte armen på kromosom 5 forårsaker Cri-du-chat-syndrom, som gir intellektuell funksjonsnedsettelse, mikrocefali og et karakteristisk katte-likt skrik hos spedbarn.\n\n**Hovedforskjell:** Skala. Genmutasjon = noen nukleotider i ett gen. Kromosommutasjon = mange gener over et stort kromosomalt område.',
        hints: ['Tenk på skalaen – hvor mange nukleotider/gener er berørt i hvert tilfelle?'],
      },
    },

    // ========== TEORI 3: Mutagener ==========
    {
      id: 'bio2-1-5-mutagener',
      type: 'text',
      content: `## Mutagener – hva skader DNA?

**Mutagener** er fysiske, kjemiske eller biologiske faktorer som øker mutasjonsfrekvensen utover det spontane nivået.

### UV-stråling og tymindimerere

Ultrafiolett stråling (spesielt UV-B, 280–315 nm) absorberes av DNA-basene og kan forårsake kovalente bindinger mellom to tilstøtende tyminbaser på samme DNA-tråd – såkalte **tymindimerere** (cyklobutandimerere).

\`\`\`
Normalt:     ...T  T...
              |  |
             ...A  A...

Etter UV:    ...T==T...    (kovalent binding mellom tyminene)
              |  |
             ...A  A...
\`\`\`

Tymindimerere forvrenger DNA-heliksen og blokkerer DNA-replikasjon og transkripsjon. Hvis de ikke repareres, kan de føre til mutasjoner og hudkreft (melanom).

### Kjemiske mutagener

| Mutagen | Mekanisme | Konsekvens |
|---------|-----------|------------|
| **Baseanalog** (f.eks. 5-bromuracil) | Inkorporeres i DNA i stedet for tymin | Parer feil med guanin → transisjon (A:T → G:C) |
| **Alkylerende stoff** (f.eks. EMS) | Legger til alkylgrupper på baser | Endrer baseparingen → punkt-mutasjoner |
| **Deaminerende stoff** (f.eks. salpetersyrling) | Fjerner aminogrupper fra baser | Cytosin → uracil (parer med A i stedet for G) |
| **Interkalerende stoff** (f.eks. etidiumbromid) | Setter seg mellom baseparene i DNA | Forårsaker insersjoner og delesjoner ved replikasjon |

### Reaktive oksygenspecies (ROS)

Frie radikaler som superoksid (O₂⁻), hydrogenperoksid (H₂O₂) og hydroksylradikalet (OH·) dannes som biprodukter av normal cellemetabolisme (elektrontransportkjeden i mitokondriene). ROS kan oksidere DNA-baser – spesielt guanin til **8-oksoguanin**, som parer feil med adenin i stedet for cytosin.

Økt ROS-produksjon kan skyldes inflammasjon, røyking, stråling og miljøgifter.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bio2-1-5-example-2',
      type: 'example',
      title: 'Eksempel 2: UV-stråling og tymindimerere',
      problem: `Forklar trinn for trinn hva som skjer når UV-stråling treffer DNA og danner en tymindimer, og hvorfor dette kan føre til mutasjon hvis skaden ikke repareres.`,
      solution: `**Løsning:**

**Trinn 1 – UV-absorpsjon:**
UV-B-stråling (bølgelengde ca. 280–315 nm) absorberes av pyrimidinbasene i DNA, spesielt tymin. Energien fra fotonene eksiterer elektronene i tyminbasene.

**Trinn 2 – Dimerisering:**
Hvis to tyminbaser ligger ved siden av hverandre på samme DNA-tråd, kan den absorberte energien føre til dannelsen av kovalente bindinger mellom de to tyminene. Det dannes en **cyklobutan-pysimidindimer** (CPD), der C5- og C6-atomene i de to tilstøtende tyminene kobles sammen.

**Trinn 3 – Strukturell forvrengning:**
Tymindimeren bøyer og forvrenger DNA-dobbelthelisken. Den normale hydrogenbindingsprofilen forstyrres, og den komplementære adeninbaseparingen kompromitteres.

**Trinn 4 – Blokkering:**
DNA-polymerase stopper opp ved dimeren under replikasjon fordi den deformerte malen ikke kan leses korrekt. Tilsvarende blokkeres RNA-polymerase under transkripsjon.

**Trinn 5 – Mutagenese (hvis ureparert):**
Hvis cellen forsøker å replikere forbi skaden uten reparasjon, kan spesielle «translesion»-polymeraser sette inn tilfeldige baser overfor dimeren. Dette introduserer feil basepar – altså en **mutasjon**. Typisk innsettes adenin (A-regelen), men dette er ikke alltid korrekt.

**Trinn 6 – Konsekvens:**
Akkumulering av UV-induserte mutasjoner i hudceller, spesielt i tumorsuppressorgener som TP53, kan over tid føre til ukontrollert celledeling og **hudkreft** (melanom eller basalcellekarsinom).`,
    },

    // ========== TEORI 4: DNA-reparasjon ==========
    {
      id: 'bio2-1-5-dna-reparasjon',
      type: 'text',
      content: `## DNA-reparasjonsmekanismer

Cellen har utviklet flere overlappende systemer for å oppdage og reparere DNA-skader. Uten disse mekanismene ville mutasjonsraten være så høy at livet slik vi kjenner det ville vært umulig.

### 1. Direkt reparasjon (fotolyase)

Det enkleste systemet – enzymet **fotolyase** bruker energi fra synlig lys (blått lys) til å bryte opp tymindimerere direkte, uten å klippe DNA-tråden. Denne mekanismen finnes hos bakterier og mange eukaryoter, men **mangler hos placentale pattedyr** (inkludert mennesker).

### 2. Base excision repair (BER) – basereparasjon

BER reparerer små baseskader som oksiderte, deaminerte eller alkylerte baser.

**Trinn:**
1. **DNA-glykosylase** gjenkjenner og fjerner den skadede basen ved å klippe den N-glykosidiske bindingen → et **AP-sete** (apurinisk/apyrimidinsk sete) oppstår
2. **AP-endonuklease** klipper sukker-fosfat-ryggraden ved AP-setet
3. **DNA-polymerase β** fyller inn korrekt nukleotid basert på den komplementære tråden
4. **DNA-ligase** forsegler hakket

### 3. Nucleotide excision repair (NER) – nukleotidreparasjon

NER reparerer større, heliks-forvrengende skader som **tymindimerere** og bulky-addukter.

**Trinn:**
1. **Skadesensorkompleks** gjenkjenner forvrengningen i DNA-heliksen
2. **Helikase** åpner DNA rundt skaden (~30 nukleotider)
3. **Endonukleaser** kutter DNA-tråden på begge sider av skaden (12–13 nukleotider fra skadens ene side, 24–25 fra den andre)
4. Det skadede oligonukleotidet (~27–29 nt) fjernes
5. **DNA-polymerase** fyller gapet med korrekte nukleotider
6. **DNA-ligase** forsegler hakket

> **Klinisk relevans:** Defekter i NER forårsaker **Xeroderma pigmentosum** (XP), en sjelden arvelig sykdom der pasientene er ekstremt følsomme for sollys og utvikler hudkreft allerede i barndommen fordi de ikke kan reparere UV-skader.

### 4. Mismatch repair (MMR) – feilparingsreparasjon

MMR korrigerer basepar-feilparinger som unnslipper DNA-polymerasens korrekturlesing (proofreading).

**Trinn:**
1. **MutS-proteinet** gjenkjenner feilparingen (bulken i DNA-heliksen)
2. **MutL-proteinet** rekrutteres og aktiverer reparasjonskomplekset
3. Systemet bestemmer hvilken tråd som er den nysyntetiserte (feilaktige) tråden – hos *E. coli* basert på metylering, hos eukaryoter basert på hakk (nicks) i den nye tråden
4. Et segment av den nye tråden rundt feilparingen klippes ut
5. **DNA-polymerase** fyller gapet med korrekte nukleotider
6. **DNA-ligase** forsegler hakket

> **Klinisk relevans:** Defekter i MMR-gener (MLH1, MSH2 m.fl.) forårsaker **Lynch syndrom** (arvelig ikke-polypose kolorektalkreft, HNPCC), som gir sterkt økt risiko for tykktarmskreft.`,
    },

    {
      id: 'bio2-1-5-def-ner',
      type: 'definition',
      title: 'Nucleotide excision repair (NER)',
      content: 'NER er en DNA-reparasjonsmekanisme som reparerer store, heliks-forvrengende skader i DNA, som UV-induserte tymindimerere og kjemiske addukter. Mekanismen fjerner et kort oligonukleotid (~27–29 nukleotider) som inneholder skaden, og resyntentiserer den korrekte sekvensen ved å bruke den komplementære, uskadede tråden som mal. NER finnes i alle domener av livet og er spesielt viktig hos mennesker fordi vi mangler fotolyase.',
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-1-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-5-ex-3',
        number: '1.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket DNA-reparasjonssystem er viktigst for å reparere UV-induserte tymindimerere hos mennesker?',
        options: [
          { id: 'a', text: 'Nucleotide excision repair (NER)', isCorrect: true },
          { id: 'b', text: 'Base excision repair (BER)', isCorrect: false },
          { id: 'c', text: 'Mismatch repair (MMR)', isCorrect: false },
          { id: 'd', text: 'Direkt reparasjon (fotolyase)', isCorrect: false },
        ],
        solution: 'Nucleotide excision repair (NER) er hovedmekanismen for reparasjon av tymindimerere hos mennesker. BER reparerer enkeltbaseskader (oksiderte baser osv.), ikke store heliks-forvrengninger. MMR korrigerer feilparinger etter replikasjon. Fotolyase-basert direkt reparasjon finnes ikke hos placentale pattedyr, inkludert mennesker. Pasienter med defekt NER (Xeroderma pigmentosum) er ekstremt utsatt for UV-indusert hudkreft.',
        hints: ['Tenk på hva slags skade en tymindimer er – den forvrenger DNA-heliksen.'],
      },
    },

    // ========== TEORI 5: Mutasjoner og kreft ==========
    {
      id: 'bio2-1-5-kreft',
      type: 'text',
      content: `## Mutasjoner og kreftutvikling

Kreft er en sykdom som skyldes akkumulering av mutasjoner i gener som kontrollerer cellevekst og celledeling. Det kreves typisk mutasjoner i **5–10 nøkkelgener** for at en normal celle skal transformeres til en kreftcelle (flertrinnshypotesen).

### Proto-onkogener og onkogener

**Proto-onkogener** er normale gener som koder for proteiner som stimulerer cellevekst og celledeling (f.eks. vekstfaktorer, reseptorer, signalproteiner, transkripsjonsfaktorer).

Når et proto-onkogen muteres slik at det blir **overaktivt** eller **overuttrykt**, kalles det et **onkogen**. Onkogener er «gain-of-function»-mutasjoner – det trengs bare mutasjon i **ett** allel (dominant effekt).

**Eksempler:**
- **RAS**: Koder for et G-protein i vekstsignalveien. Mutert RAS er konstant aktiv og sender kontinuerlige vekstsignaler. Mutert i ~30 % av alle krefttyper.
- **HER2**: Koder for en vekstfaktorreseptor. Genamplifikasjon (duplikasjon) fører til overuttrykk og er vanlig ved brystkreft.

### Tumorsuppressorgener

**Tumorsuppressorgener** koder for proteiner som bremser cellevekst, reparerer DNA eller utløser apoptose (programmert celledød). Mutasjoner som **inaktiverer** disse genene fjerner viktige kontrollmekanismer.

Tumorsuppressorer er «loss-of-function»-mutasjoner. Ifølge **Knudsons tohitthypotese** må **begge** allelene inaktiveres før effekten merkes (recessiv på cellenivå).

### TP53 – genomets vokter

**TP53** er det viktigste tumorsuppressorgenet og koder for proteinet **p53**. Det er mutert i over **50 %** av alle krefttyper.

**Normale funksjoner av p53:**
- Aktiveres ved DNA-skade, oksidativt stress og onkogene signaler
- Stopper cellesyklusen i G1-fasen (via p21) for å gi tid til DNA-reparasjon
- Aktiverer DNA-reparasjonsgener
- Utløser **apoptose** dersom skaden er for omfattende til å repareres
- Hemmer angiogenese (nydannelse av blodkar)

Når TP53 er mutert, mister cellen evnen til å stoppe opp og reparere – eller drepe seg selv. Skadede celler fortsetter å dele seg og akkumulerer stadig flere mutasjoner.

### Flertrinnshypotesen

Kreftutvikling er en gradvis prosess:

\`\`\`
Normal celle → Mutasjon 1 (f.eks. RAS-aktivering)
             → Mutasjon 2 (f.eks. TP53-inaktivering)
             → Mutasjon 3 (f.eks. telomerase-aktivering)
             → Mutasjon 4 (f.eks. angiogenese)
             → ...
             → Metastatisk kreftcelle
\`\`\`

Hver mutasjon gir cellen en selektiv fordel (raskere vekst, unngår apoptose, uendelig delingsevne osv.), og over tid akkumulerer nok mutasjoner til at cellen blir fullstendig ukontrollert.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'bio2-1-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-5-ex-4',
        number: '1.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom onkogener og tumorsuppressorgener med hensyn til mutasjonstype, arvemønster på cellenivå og eksempler. Hvorfor trengs det mutasjoner i begge allelene av et tumorsuppressorgen, men bare i ett allel av et proto-onkogen?',
        solution: '**Onkogener (muterte proto-onkogener):**\n- Mutasjonstype: «Gain-of-function» – genet blir overaktivt eller overuttrykt\n- Arvemønster: Dominant på cellenivå – mutasjon i bare ETT allel er tilstrekkelig\n- Forklaring: Det muterte proteinet sender konstante vekstsignaler uavhengig av det normale allelet. Selv om det ene allelet er normalt, produserer det muterte allelet et hyperaktivt protein som «overkjører» normal regulering.\n- Eksempler: RAS (konstant aktiv GTPase), HER2 (overuttrykt reseptor), MYC (overaktiv transkripsjonsfaktor)\n\n**Tumorsuppressorgener:**\n- Mutasjonstype: «Loss-of-function» – genet inaktiveres\n- Arvemønster: Recessiv på cellenivå – begge allelene må inaktiveres (Knudsons tohitthypotese)\n- Forklaring: Så lenge ETT funksjonelt allel gjenstår, produseres nok protein til å opprettholde bremsemekanismen. Først når begge allelene er ødelagt, mister cellen kontrollen fullstendig.\n- Eksempler: TP53 (cellesyklusarrest/apoptose), RB (retinoblastom-protein, regulerer G1→S-overgangen), BRCA1/BRCA2 (DNA-reparasjon)\n\n**Oppsummert:** Onkogener er som en gasspedal som sitter fast – én defekt pedal er nok til at bilen akselererer ukontrollert. Tumorsuppressorer er som bremser – bilen stopper fortsatt hvis bare én bremse svikter, men ikke hvis begge er ødelagt.',
        hints: [
          'Tenk på onkogener som «gass» og tumorsuppressorer som «bremser» for celledeling.',
          'Hva sier Knudsons tohitthypotese?',
        ],
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-1-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-5-ex-5',
        number: '1.5.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av følgende utsagn om p53-proteinet er RIKTIG?',
        options: [
          { id: 'a', text: 'p53 kan stoppe cellecyklus, aktivere DNA-reparasjon og utløse apoptose', isCorrect: true },
          { id: 'b', text: 'p53 er et onkogen som stimulerer cellevekst', isCorrect: false },
          { id: 'c', text: 'p53 trengs bare i embryonal utvikling', isCorrect: false },
          { id: 'd', text: 'p53 reparerer tymindimerere direkte ved hjelp av lysenergis', isCorrect: false },
        ],
        solution: 'p53 (kodet av TP53-genet) er en sentral tumorsuppressor som kalles «genomets vokter». Ved DNA-skade aktiveres p53 og kan: (1) stoppe cellecyklus i G1 via oppregulering av p21, (2) aktivere DNA-reparasjonsgener, og (3) utløse apoptose (programmert celledød) hvis skaden er for alvorlig. p53 er IKKE et onkogen – det er det viktigste tumorsuppressorgenet. Det er aktivt gjennom hele livet, ikke bare under embryonal utvikling. Direkt reparasjon av tymindimerere gjøres av fotolyase, ikke p53.',
        hints: ['p53 kalles «genomets vokter» – hva bør en vokter gjøre?'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-1-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

### Genmutasjoner (punktmutasjoner)
- **Substitusjoner**: Missense (annen aminosyre), nonsense (stoppkodon), stille (ingen endring)
- **Insersjoner/delesjoner**: Kan forårsake rammeskift hvis ikke delelig med 3
- **Rammeskiftmutasjoner**: Endrer alle kodoner nedstrøms – svært alvorlig

### Kromosommutasjoner
- **Strukturelle**: Delesjon, duplikasjon, inversjon, translokasjon
- **Numeriske (aneuploidi)**: Monosomi (2n−1), trisomi (2n+1), forårsaket av non-disjunksjon

### Mutagener
- **UV-stråling**: Tymindimerere
- **Kjemiske mutagener**: Baseanaloger, alkylerende stoffer, interkalerende stoffer
- **ROS**: Oksiderer baser (8-oksoguanin)

### DNA-reparasjon
- **Direkt reparasjon**: Fotolyase (ikke hos mennesker)
- **BER**: Fjerner enkeltskadede baser (DNA-glykosylase)
- **NER**: Fjerner heliks-forvrengende skader (~27–29 nt), inkl. tymindimerere
- **MMR**: Korrigerer feilparinger etter replikasjon (MutS/MutL)

### Kreft
- **Onkogener**: Overaktive vekstgener (gain-of-function, dominant)
- **Tumorsuppressorer**: Inaktiverte bremsegener (loss-of-function, tohitthypotesen)
- **TP53**: Genomets vokter – cellesyklusarrest, DNA-reparasjon, apoptose
- **Flertrinnshypotesen**: 5–10 mutasjoner → gradvis kreftutvikling`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.6: Mendels genetikk
// ============================================================================

export const CHAPTER_BIOLOGI_2_1_6: TextbookChapter = {
  id: 'biologi-2-1-6',
  courseId: 'biologi-2',
  chapterNumber: '1.6',
  title: 'Mendels genetikk',
  description: 'Mendels lover, monohybrid og dihybrid krysning, Punnett-skjema og sannsynlighetsberegninger.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forklare Mendels lover og anvende dem på genetiske krysninger',
    'bruke Punnett-skjema til å forutsi avkomets genotyper og fenotyper',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-1-6-intro',
      type: 'text',
      content: `# Mendels genetikk

I dette kapittelet skal du lære om:

- Mendels forsøk med erteplanter
- Begreper som dominant, recessiv, homozygot og heterozygot
- Mendels 1. lov (segregasjonsloven)
- Mendels 2. lov (loven om uavhengig fordeling)
- Punnett-skjema og sannsynlighetsberegninger

Gregor Mendel (1822–1884) var en augustinermunk fra Brno (dagens Tsjekkia) som gjennom systematiske krysningsforsøk med erteplanter (*Pisum sativum*) la grunnlaget for moderne genetikk. Hans arbeid, publisert i 1866, ble oversett i sin samtid, men gjenoppdaget rundt 1900 av tre uavhengige forskere – de Vries, Correns og von Tschermak. Mendels genialitet lå i hans kvantitative tilnærming: han talte avkom nøyaktig og oppdaget matematiske mønstre i arv.`,
    },

    // ========== TEORI 1: Mendels forsøk og grunnbegreper ==========
    {
      id: 'bio2-1-6-grunnbegreper',
      type: 'text',
      content: `## Mendels forsøk og grunnbegreper

### Hvorfor erteplanter?

Mendel valgte erteplanter av flere grunner:
- **Kort generasjonstid** – mange generasjoner på kort tid
- **Mange avkom** – gir statistisk pålitelige resultater
- **Selvpollinering** – gjør det enkelt å lage rene linjer
- **Kontrollert krysspollinering** – Mendel kunne velge hvilke planter som krysset seg
- **Tydelige, diskrete egenskaper** – sju kjennetegn med klart adskilte varianter

### De sju kjennetegnene Mendel studerte

| Kjennetegn | Dominant | Recessiv |
|------------|----------|----------|
| Frøform | Rund | Rynkete |
| Frøfarge | Gul | Grønn |
| Blomsterfarge | Fiolett | Hvit |
| Belgform | Oppblåst | Innsnevret |
| Belgfarge | Grønn | Gul |
| Blomsterposisjon | Aksillær | Terminal |
| Stengellengde | Lang | Kort |

### Grunnleggende begreper

- **Gen**: En arvelig faktor som bestemmer en egenskap (Mendel kalte dem «elementer»)
- **Allel**: Ulike versjoner av et gen (f.eks. allel for runde frø vs. allel for rynkete frø)
- **Locus**: Genets fysiske plassering på kromosomet
- **Homozygot**: Individ med to like alleler (AA eller aa)
- **Heterozygot**: Individ med to ulike alleler (Aa)
- **Dominant allel**: Uttrykkes i fenotypen hos heterozygote (representeres med STOR bokstav, f.eks. A)
- **Recessivt allel**: Uttrykkes bare hos homozygot recessive (representeres med liten bokstav, f.eks. a)
- **Genotype**: Individets genetiske sammensetning (f.eks. Aa, BB, cc)
- **Fenotype**: Individets observerbare egenskap (f.eks. runde frø, gule frø)
- **P-generasjon**: Foreldregenerasjonen
- **F₁-generasjon**: Første filialgenerasjon (avkom av P)
- **F₂-generasjon**: Andre filialgenerasjon (avkom av F₁ × F₁)`,
    },

    {
      id: 'bio2-1-6-def-dominant',
      type: 'definition',
      title: 'Dominant og recessiv',
      content: 'Et dominant allel er et allel som uttrykkes i fenotypen både i homozygot (AA) og heterozygot (Aa) tilstand. Et recessivt allel uttrykkes bare i fenotypen når individet er homozygot recessivt (aa). Hos heterozygote individer (Aa) «maskerer» det dominante allelet det recessive. Merk at dominans ikke betyr at allelet er «sterkere» eller «bedre» – det beskriver bare forholdet mellom allelene i fenotypen.',
    },

    // ========== TEORI 2: Mendels 1. lov ==========
    {
      id: 'bio2-1-6-mendels-1-lov',
      type: 'text',
      content: `## Mendels 1. lov – Segregasjonsloven

### Monohybrid krysning

Mendel startet med **rene linjer** (homozygote) og krysset dem:

**P-generasjon:** Runde frø (RR) × Rynkete frø (rr)

**F₁-generasjon:** Alle planter hadde **runde frø** (Rr) – det dominante allelet maskerte det recessive. Mendel observerte at det recessive trekket «forsvant» i F₁.

**F₁ × F₁ (selvpollinering):**

\`\`\`
           r       r
     ┌─────────┬─────────┐
  R  │   Rr    │   Rr    │
     ├─────────┼─────────┤
  r  │   rr    │   rr    │
     └─────────┴─────────┘

Vent – dette er feil! La oss gjøre det riktig:

        R         r
     ┌─────────┬─────────┐
  R  │   RR    │   Rr    │
     ├─────────┼─────────┤
  r  │   Rr    │   rr    │
     └─────────┴─────────┘
\`\`\`

**F₂-resultat:**
- Genotyper: 1 RR : 2 Rr : 1 rr (genotypisk forhold 1:2:1)
- Fenotyper: 3 runde : 1 rynkete (fenotypisk forhold **3:1**)

### Segregasjonsloven

**Mendels 1. lov (segregasjonsloven):** Under gametdannelsen (meiose) segregerer (skilles) de to allelene for hvert gen, slik at hver gamet bare inneholder **ett** allel.

Med moderne begreper: Homologe kromosomer skilles i **meiose I**, og søsterkromatider skilles i **meiose II**, slik at hver haploide gamet bærer bare ett av de to allelene.

### Testcross – å bestemme ukjent genotype

Når et individ har dominant fenotype, vet vi ikke om det er homozygot (AA) eller heterozygot (Aa). En **testcross** krysser individet med en homozygot recessiv (aa):

- Hvis **alle** avkom har dominant fenotype → individet var **AA**
- Hvis ca. **halvparten** av avkommene har recessiv fenotype → individet var **Aa**

\`\`\`
Testcross med AA:           Testcross med Aa:
      a     a                     a     a
  A | Aa  | Aa  |             A | Aa  | Aa  |
  A | Aa  | Aa  |             a | aa  | aa  |

→ 100 % Aa (dominant)       → 50 % Aa, 50 % aa
                              → 1:1-forhold
\`\`\``,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bio2-1-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Monohybrid krysning',
      problem: `Hos erteplanter er gul frøfarge (G) dominant over grønn frøfarge (g). En heterozygot plante (Gg) krysses med en homozygot recessiv plante (gg).

a) Sett opp et Punnett-skjema for krysningen.
b) Hva er det forventede genotypiske og fenotypiske forholdet blant avkommene?
c) Hvis det produseres 200 avkom, hvor mange forventes å ha grønne frø?`,
      solution: `**Løsning:**

**a) Punnett-skjema (Gg × gg):**

\`\`\`
         g       g
    ┌─────────┬─────────┐
  G │   Gg    │   Gg    │
    ├─────────┼─────────┤
  g │   gg    │   gg    │
    └─────────┴─────────┘
\`\`\`

**b) Forventede forhold:**

Genotyper:
- Gg: 2/4 = 50 %
- gg: 2/4 = 50 %
- Genotypisk forhold: **1 Gg : 1 gg** (1:1)

Fenotyper:
- Gul (Gg): 50 %
- Grønn (gg): 50 %
- Fenotypisk forhold: **1 gul : 1 grønn** (1:1)

**c) Antall med grønne frø:**
50 % av 200 = **100 planter** med grønne frø.

Merk: Dette er en **testcross** – krysning med homozygot recessiv. Testcross av en heterozygot gir alltid 1:1-forhold.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-1-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-6-ex-1',
        number: '1.6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det fenotypiske forholdet i F₂-generasjonen av en monohybrid krysning mellom to heterozygote foreldre (Aa × Aa)?',
        options: [
          { id: 'a', text: '3:1 (dominant:recessiv)', isCorrect: true },
          { id: 'b', text: '1:1 (dominant:recessiv)', isCorrect: false },
          { id: 'c', text: '1:2:1 (AA:Aa:aa)', isCorrect: false },
          { id: 'd', text: '9:3:3:1', isCorrect: false },
        ],
        solution: 'Ved krysning av to heterozygote foreldre (Aa × Aa) gir Punnett-skjemaet: 1 AA : 2 Aa : 1 aa. Genotypisk forhold er 1:2:1, men fenotypisk er det 3:1 fordi AA og Aa begge viser dominant fenotype. 9:3:3:1 gjelder for dihybrid krysning (to uavhengige gener). 1:1 gjelder for testcross (Aa × aa).',
        hints: ['Sett opp et Punnett-skjema for Aa × Aa og tell fenotypene.'],
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-1-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-6-ex-2',
        number: '1.6.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hos marsvin er sort pels (B) dominant over hvit pels (b). En sort marsvin krysses med en hvit marsvin, og alle avkommene er sorte. Forklar genotypene til foreldrene. Hva skjer hvis to av F₁-avkommene krysses med hverandre? Sett opp Punnett-skjema og angi forventet fenotypisk og genotypisk forhold i F₂.',
        solution: '**Foreldregenotyper:**\nSiden alle F₁-avkom er sorte, må den sorte forelderen være homozygot dominant (BB). Hvis forelderen var heterozygot (Bb), ville vi forvente ca. 50 % hvite avkom (bb). Den hvite forelderen er homozygot recessiv (bb).\n\nP: BB × bb → F₁: alle Bb (sorte)\n\n**F₁ × F₁ (Bb × Bb):**\n\n```\n         B       b\n    ┌─────────┬─────────┐\n  B │   BB    │   Bb    │\n    ├─────────┼─────────┤\n  b │   Bb    │   bb    │\n    └─────────┴─────────┘\n```\n\n**F₂-genotyper:** 1 BB : 2 Bb : 1 bb (genotypisk 1:2:1)\n**F₂-fenotyper:** 3 sorte (BB + Bb) : 1 hvit (bb) (fenotypisk 3:1)\n\n25 % av F₂ forventes å ha hvit pels.',
        hints: [
          'Hvis alle F₁ er sorte, hva forteller det om den sorte forelderens genotype?',
          'F₁ × F₁ er en typisk monohybrid krysning mellom heterozygote.',
        ],
      },
    },

    // ========== TEORI 3: Mendels 2. lov ==========
    {
      id: 'bio2-1-6-mendels-2-lov',
      type: 'text',
      content: `## Mendels 2. lov – Loven om uavhengig fordeling

### Dihybrid krysning

Mendel studerte også arv av **to egenskaper samtidig**. Han krysset planter som var homozygote for to egenskaper:

**P:** Runde, gule frø (RRYY) × Rynkete, grønne frø (rryy)

**F₁:** Alle RrYy (runde, gule frø – begge dominante trekk)

**F₁ × F₁ (RrYy × RrYy):**

Hver forelder produserer fire typer gameter: RY, Ry, rY, ry

\`\`\`
         RY      Ry      rY      ry
    ┌────────┬────────┬────────┬────────┐
 RY │ RRYY   │ RRYy   │ RrYY   │ RrYy   │
    ├────────┼────────┼────────┼────────┤
 Ry │ RRYy   │ RRyy   │ RrYy   │ Rryy   │
    ├────────┼────────┼────────┼────────┤
 rY │ RrYY   │ RrYy   │ rrYY   │ rrYy   │
    ├────────┼────────┼────────┼────────┤
 ry │ RrYy   │ Rryy   │ rrYy   │ rryy   │
    └────────┴────────┴────────┴────────┘
\`\`\`

**F₂-fenotyper (16 ruter):**
- 9 Runde, gule (R_Y_)
- 3 Runde, grønne (R_yy)
- 3 Rynkete, gule (rrY_)
- 1 Rynkete, grønne (rryy)

**Fenotypisk forhold: 9:3:3:1**

### Loven om uavhengig fordeling

**Mendels 2. lov:** Alleler for ulike gener fordeles **uavhengig** av hverandre under gametdannelsen – forutsatt at genene ligger på **ulike kromosomer**.

Med moderne begreper: I meiose I orienteres homologe kromosompar tilfeldig ved ekvatorplaten. Hvilken pol mor-kromosom 1 trekkes til, er uavhengig av hvilken pol mor-kromosom 2 trekkes til. Dette gir 2ⁿ mulige gametkombinajoner (n = antall kromosompar).

**Unntak:** Gener som ligger på **samme kromosom** (koblede gener) bryter med loven om uavhengig fordeling – de arves ofte sammen, med mindre overkrysning skiller dem.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bio2-1-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Dihybrid krysning og sannsynlighet',
      problem: `Hos erteplanter er runde frø (R) dominante over rynkete frø (r), og gule frø (Y) dominante over grønne frø (y). En plante med genotype RrYy krysses med en plante med genotype Rryy.

a) Hvilke gameter produserer hver forelder?
b) Sett opp Punnett-skjema.
c) Hva er sannsynligheten for at et avkom har rynkete, grønne frø?`,
      solution: `**Løsning:**

**a) Gameter:**
- RrYy produserer: RY, Ry, rY, ry (4 typer)
- Rryy produserer: Ry, ry (2 typer, fordi yy bare gir y)

**b) Punnett-skjema:**

\`\`\`
            RY       Ry       rY       ry
       ┌─────────┬─────────┬─────────┬─────────┐
  Ry   │  RRYy   │  RRyy   │  RrYy   │  Rryy   │
       ├─────────┼─────────┼─────────┼─────────┤
  ry   │  RrYy   │  Rryy   │  rrYy   │  rryy   │
       └─────────┴─────────┴─────────┴─────────┘
\`\`\`

**Fenotyper (8 ruter):**
- Runde, gule (R_Y_): RRYy, RrYy, RrYy = 3/8
- Runde, grønne (R_yy): RRyy, Rryy, Rryy = 3/8
- Rynkete, gule (rrY_): rrYy = 1/8
- Rynkete, grønne (rryy): rryy = 1/8

**c) Sannsynlighet for rynkete, grønne frø:**
P(rr) × P(yy) = 1/4 × 1/2 = **1/8** = 12,5 %

Alternativt: 1 av 8 ruter = 1/8.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-1-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-6-ex-3',
        number: '1.6.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hos en dyreart er lang pels (L) dominant over kort pels (l), og brun farge (B) dominant over hvit farge (b). To heterozygote individer (LlBb) krysses. Hva er sannsynligheten for å få et avkom med kort, hvit pels? Hva er sannsynligheten for å få et avkom med lang pels (uansett farge)?',
        solution: '**Sannsynlighet for kort, hvit pels (llbb):**\nVi behandler hvert gen uavhengig (Mendels 2. lov):\n- P(ll) fra Ll × Ll: 1/4\n- P(bb) fra Bb × Bb: 1/4\n- P(llbb) = 1/4 × 1/4 = **1/16** = 6,25 %\n\n**Sannsynlighet for lang pels (L_), uansett farge:**\nFra Ll × Ll: P(LL) + P(Ll) = 1/4 + 2/4 = **3/4** = 75 %\n\nFargen er irrelevant her fordi vi ikke stiller krav til den. Alternativt kan vi bruke 9:3:3:1-forholdet:\n- Lang, brun: 9/16\n- Lang, hvit: 3/16\n- Totalt lang pels: 12/16 = 3/4 = 75 %',
        hints: [
          'Bruk produktregelen: P(A og B) = P(A) × P(B) når genene er uavhengige.',
          'For «uansett farge» trenger du bare å beregne sannsynligheten for pellengden.',
        ],
      },
    },

    // ========== TEORI 4: Sannsynlighetsberegninger ==========
    {
      id: 'bio2-1-6-sannsynlighet',
      type: 'text',
      content: `## Sannsynlighetsberegninger i genetikk

### Produktregelen (og-regelen)

Sannsynligheten for at **to uavhengige hendelser** skjer **samtidig** er produktet av de individuelle sannsynlighetene:

**P(A og B) = P(A) × P(B)**

Brukes når vi vil vite sannsynligheten for en bestemt kombinasjon av egenskaper fra uavhengige gener.

**Eksempel:** Sannsynligheten for genotype AaBb fra krysningen Aa × Aa og Bb × Bb:
- P(Aa) = 2/4 = 1/2
- P(Bb) = 2/4 = 1/2
- P(AaBb) = 1/2 × 1/2 = **1/4**

### Sumregelen (eller-regelen)

Sannsynligheten for at **minst én** av flere **gjensidig utelukkende** hendelser skjer er summen:

**P(A eller B) = P(A) + P(B)**

Brukes når flere genotyper gir samme fenotype.

**Eksempel:** Sannsynligheten for dominant fenotype fra Aa × Aa:
- P(AA) = 1/4
- P(Aa) = 2/4
- P(dominant fenotype) = 1/4 + 2/4 = **3/4**

### Forgreningsmetoden

For krysninger med mange gener kan forgreningsmetoden (greindiagram) være enklere enn et stort Punnett-skjema:

\`\`\`
Krysning: AaBbCc × AaBbCc

Gen A (Aa × Aa):        Gen B (Bb × Bb):         Gen C (Cc × Cc):
3/4 dominant A_ ───┬─── 3/4 dominant B_ ───┬──── 3/4 dominant C_ = 27/64
                   │                       └──── 1/4 recessiv cc  = 9/64
                   └─── 1/4 recessiv bb ───┬──── 3/4 dominant C_ = 9/64
                                           └──── 1/4 recessiv cc  = 3/64
1/4 recessiv aa ───┬─── 3/4 dominant B_ ───┬──── 3/4 dominant C_ = 9/64
                   │                       └──── 1/4 recessiv cc  = 3/64
                   └─── 1/4 recessiv bb ───┬──── 3/4 dominant C_ = 3/64
                                           └──── 1/4 recessiv cc  = 1/64
\`\`\`

Summen av alle grenene = 64/64 = 1 (stemmer!).`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'bio2-1-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-6-ex-4',
        number: '1.6.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et foreldrepar der begge er heterozygote for tre uavhengige autosomale gener (AaBbCc × AaBbCc) får barn. Hva er sannsynligheten for at barnet: a) er homozygot dominant for alle tre genene (AABBCC)? b) er heterozygot for alle tre genene (AaBbCc)? c) viser dominant fenotype for alle tre egenskapene?',
        solution: '**Vi bruker produktregelen for hvert uavhengig gen:**\n\nFra Aa × Aa: P(AA) = 1/4, P(Aa) = 2/4 = 1/2, P(aa) = 1/4\nFra Bb × Bb: P(BB) = 1/4, P(Bb) = 1/2, P(bb) = 1/4\nFra Cc × Cc: P(CC) = 1/4, P(Cc) = 1/2, P(cc) = 1/4\n\n**a) P(AABBCC):**\nP(AA) × P(BB) × P(CC) = 1/4 × 1/4 × 1/4 = **1/64** ≈ 1,56 %\n\n**b) P(AaBbCc):**\nP(Aa) × P(Bb) × P(Cc) = 1/2 × 1/2 × 1/2 = **1/8** = 12,5 %\n\n**c) P(dominant for alle tre):**\nP(A_) × P(B_) × P(C_) = 3/4 × 3/4 × 3/4 = **27/64** ≈ 42,2 %\n\nDette tilsvarer den øverste grenen i forgreningsdiagrammet.',
        hints: [
          'Bruk produktregelen: Beregn sannsynligheten for hvert gen separat og multipliser.',
          'P(dominant fenotype) for ett gen fra Aa × Aa = 3/4.',
        ],
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-1-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-6-ex-5',
        number: '1.6.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hensikten med en testcross?',
        options: [
          { id: 'a', text: 'Å bestemme om et individ med dominant fenotype er homozygot eller heterozygot', isCorrect: true },
          { id: 'b', text: 'Å lage nye mutasjoner i avkommene', isCorrect: false },
          { id: 'c', text: 'Å bevise at arv følger Mendels 2. lov', isCorrect: false },
          { id: 'd', text: 'Å krysse to individer med recessiv fenotype', isCorrect: false },
        ],
        solution: 'En testcross er en krysning mellom et individ med dominant fenotype (ukjent genotype – AA eller Aa?) og et individ som er homozygot recessivt (aa). Hvis individet er AA, vil alle avkom ha dominant fenotype (Aa). Hvis individet er Aa, vil ca. halvparten av avkommene ha recessiv fenotype (aa), og man får et 1:1-forhold. Testcross er et diagnostisk verktøy for å avsløre genotypen bak en dominant fenotype.',
        hints: ['Hva skjer når man krysser Aa × aa versus AA × aa?'],
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'bio2-1-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-6-ex-6',
        number: '1.6.6',
        type: 'classic',
        difficulty: 'lett',
        task: 'To erteplanter med gule, runde frø krysses. I avkommet observeres følgende fenotyper: 315 gule, runde – 108 gule, rynkete – 101 rynkete, gule – 32 rynkete, grønne. (Merk: «rynkete, gule» betyr rynkete frøform og gul frøfarge.) Stemmer dette med det forventede forholdet fra en dihybrid krysning? Hva er genotypene til foreldrene?',
        solution: 'Totalt antall avkom: 315 + 108 + 101 + 32 = 556\n\n**Forventet 9:3:3:1-forhold med 556 avkom:**\n- 9/16 × 556 = 312,75 (gule, runde)\n- 3/16 × 556 = 104,25 (gule, rynkete)\n- 3/16 × 556 = 104,25 (rynkete, gule → dvs. grønne, runde)\n- 1/16 × 556 = 34,75 (rynkete, grønne → dvs. grønne, rynkete)\n\n**Observert vs. forventet:**\n- 315 vs. 312,75 (gule, runde)\n- 108 vs. 104,25 (gule, rynkete)\n- 101 vs. 104,25 (grønne, runde)\n- 32 vs. 34,75 (grønne, rynkete)\n\nAvvikene er små og skyldes tilfeldig variasjon. Dataene stemmer godt med 9:3:3:1.\n\n**Foreldregenotyper:** Siden avkommene viser et 9:3:3:1-forhold, må begge foreldrene være heterozygote for begge genene: **GgRr × GgRr** (der G = gul, g = grønn, R = rund, r = rynkete).\n\nNote: Dette er faktisk Mendels egne data fra hans klassiske forsøk!',
        hints: ['Beregn forventet antall basert på 9:3:3:1 og sammenlign med observerte tall.'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-1-6-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

### Mendels grunnbegreper
- **Dominant/recessiv**: Dominant allel uttrykkes i heterozygot, recessivt bare i homozygot
- **Homozygot** (AA, aa) vs. **heterozygot** (Aa)
- **Genotype** (genetisk sammensetning) vs. **fenotype** (observerbar egenskap)

### Mendels 1. lov (segregasjonsloven)
- Alleler segregerer under meiose – hver gamet får bare ETT allel
- Monohybrid krysning Aa × Aa → genotypisk 1:2:1, fenotypisk **3:1**
- **Testcross** (Aa × aa) gir 1:1, (AA × aa) gir alle dominant

### Mendels 2. lov (uavhengig fordeling)
- Alleler for ulike gener fordeles uavhengig (gjelder for gener på ulike kromosomer)
- Dihybrid krysning AaBb × AaBb → fenotypisk **9:3:3:1**
- Unntak: Koblede gener (samme kromosom)

### Sannsynlighetsberegninger
- **Produktregelen**: P(A og B) = P(A) × P(B) – for uavhengige hendelser
- **Sumregelen**: P(A eller B) = P(A) + P(B) – for gjensidig utelukkende hendelser
- **Forgreningsmetoden**: Effektiv for krysninger med mange gener`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.7: Avanserte arvemønstre
// ============================================================================

export const CHAPTER_BIOLOGI_2_1_7: TextbookChapter = {
  id: 'biologi-2-1-7',
  courseId: 'biologi-2',
  chapterNumber: '1.7',
  title: 'Avanserte arvemønstre',
  description: 'Ufullstendig dominans, kodominans, multiple alleler, kjønnsbundet arv, polygeni og kobling.',
  estimatedMinutes: 30,
  competenceGoals: [
    'beskrive avanserte arvemønstre som avviker fra enkel mendelisk arv',
    'forklare kjønnsbundet arv og anvende det på stamtavler',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-1-7-intro',
      type: 'text',
      content: `# Avanserte arvemønstre

I dette kapittelet skal du lære om:

- Ufullstendig dominans og kodominans
- Multiple alleler (AB0-blodtypesystemet)
- Kjønnsbundet arv (X-bundet recessiv)
- Polygeni, pleiotropi og epistasi
- Kobling og rekombinasjon

Mendels lover beskriver arv av egenskaper der ett gen har to alleler med fullstendig dominans. I virkeligheten er mange arvemønstre langt mer komplekse. Noen egenskaper viser **ufullstendig dominans** der heterozygoten har en mellomting mellom de to homozygote fenotypene. Andre viser **kodominans** der begge allelene uttrykkes fullt ut. Mange gener har **mer enn to alleler** i populasjonen, og noen egenskaper styres av **mange gener samtidig** (polygeni). I tillegg arves gener på kjønnskromosomene annerledes enn autosomale gener.`,
    },

    // ========== TEORI 1: Ufullstendig dominans og kodominans ==========
    {
      id: 'bio2-1-7-ufullstendig-kodominans',
      type: 'text',
      content: `## Ufullstendig dominans og kodominans

### Ufullstendig dominans

Ved **ufullstendig dominans** har heterozygoten en **mellomfenotype** – verken fullstendig dominant eller recessiv.

**Eksempel – Underblomst (*Mirabilis jalapa*):**

| Genotype | Fenotype |
|----------|----------|
| C^R C^R | Røde blomster |
| C^R C^W | **Rosa blomster** (mellomfenotype) |
| C^W C^W | Hvite blomster |

Krysning C^R C^W × C^R C^W gir:
- 1 C^R C^R (rød) : 2 C^R C^W (rosa) : 1 C^W C^W (hvit)
- Fenotypisk forhold: **1:2:1** (ikke 3:1!)

Her er det genotypiske og fenotypiske forholdet identisk fordi heterozygoten har sin egen distinkte fenotype.

### Kodominans

Ved **kodominans** uttrykkes **begge allelene fullt ut** i heterozygoten – det er ikke en mellomfenotype, men begge produktene er synlige.

**Eksempel – AB0-blodtypesystemet (delvis):**

MN-blodtypesystemet er et rent kodominans-eksempel:
- Genotype L^M L^M → Blodtype M
- Genotype L^M L^N → Blodtype MN (begge antigener uttrykt)
- Genotype L^N L^N → Blodtype N

**Forskjellen mellom ufullstendig dominans og kodominans:**
- Ufullstendig dominans: Heterozygoten er en **blanding** (rosa = mellom rød og hvit)
- Kodominans: Heterozygoten viser **begge fenotypene samtidig** (MN = både M og N antigener)`,
    },

    {
      id: 'bio2-1-7-def-kodominans',
      type: 'definition',
      title: 'Kodominans',
      content: 'Kodominans er et arvemønster der begge allelene i en heterozygot uttrykkes fullt ut i fenotypen. Ingen av allelene er dominant over det andre, og heterozygoten viser ikke en mellomfenotype (som ved ufullstendig dominans), men uttrykker begge allelenes produkter side om side. Et eksempel er AB0-blodtypesystemet der individer med genotype I^A I^B uttrykker både A- og B-antigener på overflaten av de røde blodcellene (blodtype AB).',
    },

    // ========== TEORI 2: Multiple alleler – AB0-systemet ==========
    {
      id: 'bio2-1-7-multiple-alleler',
      type: 'text',
      content: `## Multiple alleler – AB0-blodtypesystemet

Et gen kan ha **mer enn to alleler** i en populasjon, selv om hvert individ bare kan ha maksimalt **to** alleler (ett fra hver forelder).

### AB0-blodtypesystemet

AB0-systemet styres av ett gen med **tre alleler**: I^A, I^B og i.

**Dominansforhold:**
- I^A og I^B er **kodominante** med hverandre (begge uttrykt i AB)
- Både I^A og I^B er **dominante** over i (recessivt allel)

| Genotype | Fenotype (blodtype) | Antigener på røde blodceller | Antistoffer i plasma |
|----------|-------------------|--------------------------|-------------------|
| I^A I^A eller I^A i | **A** | A-antigen | Anti-B |
| I^B I^B eller I^B i | **B** | B-antigen | Anti-A |
| I^A I^B | **AB** | Både A og B | Ingen |
| ii | **O** | Ingen (bare H-antigen) | Anti-A og Anti-B |

### Blodtransfusjon

- Blodtype **O** er **universell donor** (ingen A/B-antigener å reagere mot)
- Blodtype **AB** er **universell mottaker** (ingen antistoffer som kan angripe donorblod)
- Feil blodtype kan gi **hemolytisk transfusjonsreaksjon** (antistoffene ødelegger de røde blodcellene)

### Multiple alleler hos kanin (kaninpels)

Et annet eksempel er pelsfarge hos kaniner med fire alleler: C > c^ch > c^h > c

| Genotype | Fenotype |
|----------|----------|
| CC, Cc^ch, Cc^h, Cc | Villtype (mørkebrun) |
| c^ch c^ch, c^ch c^h, c^ch c | Chinchilla (sølvgrå) |
| c^h c^h, c^h c | Himalaya (hvit kropp, mørke ekstremiteter) |
| cc | Albino (helt hvit) |

Her er dominansforholdet hierarkisk: C er dominant over alle, c er recessivt for alle.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bio2-1-7-example-1',
      type: 'example',
      title: 'Eksempel 1: AB0-blodtype – krysning',
      problem: `En kvinne med blodtype A (heterozygot) gifter seg med en mann med blodtype B (heterozygot).

a) Hva er genotypene til foreldrene?
b) Sett opp Punnett-skjema og bestem mulige blodtyper hos barna.
c) Hva er sannsynligheten for at et barn har blodtype O?`,
      solution: `**Løsning:**

**a) Genotyper:**
- Kvinnen: Blodtype A, heterozygot → **I^A i**
- Mannen: Blodtype B, heterozygot → **I^B i**

**b) Punnett-skjema:**

\`\`\`
           I^B       i
     ┌──────────┬──────────┐
 I^A │  I^A I^B │  I^A i   │
     ├──────────┼──────────┤
  i  │  I^B i   │   ii     │
     └──────────┴──────────┘
\`\`\`

**Resultater:**
- I^A I^B → Blodtype **AB** (25 %)
- I^A i → Blodtype **A** (25 %)
- I^B i → Blodtype **B** (25 %)
- ii → Blodtype **O** (25 %)

Alle fire blodtyper er mulige!

**c) Sannsynlighet for blodtype O:**
P(ii) = 1/4 = **25 %**

Dette er et godt eksempel på at to foreldre med blodtype A og B kan få barn med blodtype O – noe som kan virke overraskende, men som forklares av at begge er heterozygote bærere av det recessive i-allelet.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-1-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-7-ex-1',
        number: '1.7.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En mann med blodtype AB og en kvinne med blodtype O får barn. Hvilke blodtyper kan barna ha?',
        options: [
          { id: 'a', text: 'Bare A eller B', isCorrect: true },
          { id: 'b', text: 'A, B, AB eller O', isCorrect: false },
          { id: 'c', text: 'Bare AB', isCorrect: false },
          { id: 'd', text: 'Bare O', isCorrect: false },
        ],
        solution: 'Mannens genotype er I^A I^B (blodtype AB). Kvinnens genotype er ii (blodtype O). Punnett-skjema:\n\nI^A × i → I^A i (blodtype A)\nI^B × i → I^B i (blodtype B)\n\nBarna kan bare ha blodtype A (I^A i, 50 %) eller blodtype B (I^B i, 50 %). De kan IKKE ha blodtype AB (krever I^A I^B) eller O (krever ii) fordi far alltid gir enten I^A eller I^B, aldri i.',
        hints: ['Hva er farens mulige gameter? Hva er morens mulige gameter?'],
      },
    },

    // ========== TEORI 3: Kjønnsbundet arv ==========
    {
      id: 'bio2-1-7-kjonnsbundet',
      type: 'text',
      content: `## Kjønnsbundet arv

### Kjønnskromosomene

Hos mennesker bestemmes kjønnet av kjønnskromosomene:
- **Kvinner**: XX (to X-kromosomer)
- **Menn**: XY (ett X og ett Y-kromosom)

X-kromosomet er stort og inneholder ~800 proteinkodende gener. Y-kromosomet er mye mindre og inneholder ~50 gener, inkludert **SRY-genet** som styrer mannlig kjønnsutvikling.

### X-bundet recessiv arv

De fleste kjønnsbundne sykdommer er **X-bundne recessive**. Menn har bare ett X-kromosom, og trenger derfor bare **én kopi** av det recessive allelet for å bli rammet (**hemizygot**). Kvinner trenger mutasjon i **begge** X-kromosomene (homozygot recessiv) for å bli syke.

**Kjennetegn ved X-bundet recessiv arv:**
- Tilstanden rammer langt oftere **menn** enn kvinner
- Kvinner kan være **bærere** (heterozygote, X^A X^a) uten å vise symptomer
- Sønner arver X fra mor → bærerkvinner har 50 % sjanse for rammet sønn
- Ingen **far-til-sønn-overføring** (far gir Y, ikke X, til sønner)
- Alle døtre av en rammet far blir bærere (far gir sitt X^a til alle døtre)

### Eksempler på X-bundne recessive tilstander

| Tilstand | Gen | Konsekvens |
|----------|-----|------------|
| **Hemofili A** | F8 (faktor VIII) | Mangelfull blodkoagulering |
| **Rød-grønn fargeblindhet** | OPN1LW/OPN1MW | Kan ikke skille rødt fra grønt |
| **Duchenne muskeldystrofi** | DMD (dystrofin) | Progressiv muskelnedbrytning |
| **G6PD-mangel** | G6PD | Hemolytisk anemi |

### Stamtavleanalyse

I stamtavler for X-bundet recessiv arv:

\`\`\`
Symboler:  ○ = normal kvinne    □ = normal mann
           ● = rammet kvinne    ■ = rammet mann
           ⊘ = bærerkvinner

Typisk mønster:
       ⊘────□
      / | \\  \\
     ○  ■  ⊘  □
         (rammet sønn, bærerdatter)
\`\`\`

Nøkkelspørsmål for å identifisere X-bundet recessiv arv:
1. Er det flere rammede menn enn kvinner? → Tyder på X-bundet
2. Finnes det far-til-sønn-overføring? → Nei = X-bundet (ja = autosomal)
3. Er alle døtre av rammede menn bærere? → Ja ved X-bundet`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bio2-1-7-example-2',
      type: 'example',
      title: 'Eksempel 2: Hemofili – X-bundet recessiv arv',
      problem: `En bærekvinne for hemofili (X^H X^h) gifter seg med en normal mann (X^H Y).

a) Sett opp Punnett-skjema.
b) Hva er sannsynligheten for at en sønn har hemofili?
c) Hva er sannsynligheten for at en datter er bærer?
d) Kan en datter ha hemofili i denne krysningen?`,
      solution: `**Løsning:**

**a) Punnett-skjema:**

\`\`\`
             X^H        Y
       ┌───────────┬───────────┐
  X^H  │  X^H X^H  │  X^H Y   │
       ├───────────┼───────────┤
  X^h  │  X^H X^h  │  X^h Y   │
       └───────────┴───────────┘
\`\`\`

**Avkom:**
- X^H X^H: Normal datter (25 %)
- X^H X^h: **Bærerdatter** (25 %)
- X^H Y: Normal sønn (25 %)
- X^h Y: **Rammet sønn** (hemofili) (25 %)

**b) Sannsynlighet for hemofili hos en sønn:**
Av sønnene (X^H Y og X^h Y) er halvparten rammet.
P(hemofili | sønn) = **1/2 = 50 %**
P(hemofili-sønn totalt) = 1/4 = 25 %

**c) Sannsynlighet for bærerdatter:**
Av døtrene (X^H X^H og X^H X^h) er halvparten bærere.
P(bærer | datter) = **1/2 = 50 %**

**d) Kan en datter ha hemofili?**
Nei, ikke i denne krysningen. For at en datter skal ha hemofili, må hun være X^h X^h, noe som krever at far også er hemofil (X^h Y). Her er far normal (X^H Y), så alle døtre får minst ett X^H.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-1-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-7-ex-2',
        number: '1.7.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En fargeblind mann (X^b Y) gifter seg med en kvinne som er bærer for fargeblindhet (X^B X^b). De får fire barn. a) Sett opp Punnett-skjema. b) Hva er sannsynligheten for at en datter er fargeblind? c) Hva er sannsynligheten for at en sønn er fargeblind? d) Kan man fra denne krysningen skille mellom X-bundet og autosomal recessiv arv?',
        solution: '**a) Punnett-skjema (X^B X^b × X^b Y):**\n\n```\n             X^b        Y\n       ┌───────────┬───────────┐\n  X^B  │  X^B X^b  │  X^B Y   │\n       ├───────────┼───────────┤\n  X^b  │  X^b X^b  │  X^b Y   │\n       └───────────┴───────────┘\n```\n\nAvkom:\n- X^B X^b: Bærerdatter (25 %)\n- X^b X^b: **Fargeblind datter** (25 %)\n- X^B Y: Normal sønn (25 %)\n- X^b Y: **Fargeblind sønn** (25 %)\n\n**b) P(fargeblind datter):**\nAv døtrene: 1 bærer (X^B X^b) + 1 fargeblind (X^b X^b)\nP(fargeblind | datter) = **1/2 = 50 %**\n\n**c) P(fargeblind sønn):**\nAv sønnene: 1 normal (X^B Y) + 1 fargeblind (X^b Y)\nP(fargeblind | sønn) = **1/2 = 50 %**\n\n**d) Forskjell fra autosomal recessiv:**\nI denne spesifikke krysningen er sannsynligheten 50 % for rammede barn av begge kjønn, noe som ligner autosomal recessiv (Aa × aa → 50 % rammet). MEN: over mange familier i en populasjon vil X-bundet recessiv arv vise langt flere rammede menn enn kvinner. I tillegg ser man aldri far-til-sønn-overføring ved X-bundet arv. En fargeblind far gir sitt X^b til døtre, ikke til sønner.',
        hints: [
          'Husk at far gir X^b til alle døtre og Y til alle sønner.',
          'For at en datter skal være fargeblind, trenger hun X^b fra begge foreldre.',
        ],
      },
    },

    // ========== TEORI 4: Polygeni, pleiotropi og epistasi ==========
    {
      id: 'bio2-1-7-polygeni',
      type: 'text',
      content: `## Polygeni, pleiotropi og epistasi

### Polygeni – mange gener, én egenskap

**Polygeni** (polygenisk arv) betyr at en egenskap styres av **flere gener**. Resultatet er en **kontinuerlig variasjon** i fenotypen, i motsetning til de diskrete fenotypene Mendel observerte.

**Eksempler:**
- **Hudfarge**: Styres av minst 10–15 gener (inkludert MC1R, SLC24A5, TYR m.fl.)
- **Høyde**: Påvirkes av hundrevis av gener
- **BMI**: Polygenisk med sterk miljøpåvirkning

Polygeniske egenskaper følger ofte en **normalfordeling** (bjellekurve) i populasjonen:

\`\`\`
     Antall
     individer
        │       ╱╲
        │      ╱  ╲
        │     ╱    ╲
        │    ╱      ╲
        │   ╱        ╲
        │  ╱          ╲
        │ ╱            ╲
        └───────────────── Fenotype (f.eks. høyde)
          Lav      Høy
\`\`\`

### Pleiotropi – ett gen, mange egenskaper

**Pleiotropi** er det motsatte av polygeni: ett gen påvirker **flere fenotypiske egenskaper**.

**Eksempel – Sigdcelleanemi:**
En enkelt mutasjon i β-globingenet påvirker:
- Form på røde blodceller (sigdformede)
- Oksygentransport (redusert)
- Blodpropp i kapillærer (økt risiko)
- Miltfunksjon (miltinfarkt)
- Motstandsdyktighet mot malaria (økt hos heterozygote)

### Epistasi – gen-gen-interaksjon

**Epistasi** oppstår når ett gen **maskerer eller modifiserer** uttrykket av et annet gen. Det epistatiske genet er «overordnet» det hypostatiske genet.

**Eksempel – Pelsfarge hos Labrador retriever:**
- Gen E (Extension): E_ = pigment deponeres, ee = gul (uansett B-genotype)
- Gen B (Brown): B_ = sort, bb = sjokolade

| Genotype | Fenotype |
|----------|----------|
| B_E_ | Sort |
| bbE_ | Sjokolade |
| B_ee | Gul |
| bbee | Gul |

Forventet fenotypisk forhold fra BbEe × BbEe: **9 sort : 3 sjokolade : 4 gul** (ikke 9:3:3:1!)

Gen ee er epistatisk over gen B – når ee er til stede, spiller det ingen rolle om hunden har B_ eller bb.`,
    },

    // ========== TEORI 5: Kobling og rekombinasjon ==========
    {
      id: 'bio2-1-7-kobling',
      type: 'text',
      content: `## Kobling og rekombinasjon

### Koblede gener

Mendels 2. lov (uavhengig fordeling) gjelder bare for gener på **ulike kromosomer**. Gener som ligger på **samme kromosom** er **koblet** og arves ofte sammen.

**Koblingsfase:**
- **Cis-kobling**: De to dominante allelene er på samme kromosom (AB / ab)
- **Trans-kobling**: Dominant og recessivt allel er på samme kromosom (Ab / aB)

### Overkrysning bryter kobling

Under **meiose I** kan homologe kromosomer utveksle segmenter gjennom **overkrysning** (crossing over). Dette bryter koblingen og produserer **rekombinante** gameter.

\`\`\`
Før overkrysning:       Etter overkrysning:
   A──B                    A──B    (parental)
   ╳                       A──b    (rekombinant)
   a──b                    a──B    (rekombinant)
                           a──b    (parental)
\`\`\`

### Rekombinasonsfrekvens og genetisk kartlegging

**Rekombinasjonsfrekvensen** (RF) mellom to koblede gener angir hvor ofte overkrysning skjer mellom dem:

RF = (antall rekombinante avkom / totalt antall avkom) × 100 %

- RF = 50 % → Genene oppfører seg som om de er ukoblede (på ulike kromosomer eller langt fra hverandre)
- RF < 50 % → Genene er koblet
- RF = 0 % → Genene er tett koblet (aldri overkrysning mellom dem)

**1 % rekombinasjonsfrekvens = 1 centiMorgan (cM)** – enheten for genetisk avstand.

**Eksempel:** Hvis RF mellom gen A og gen B er 12 %, betyr det at genene ligger 12 cM fra hverandre på kromosomet. 88 % av gametene er parentale (AB og ab) og 12 % er rekombinante (Ab og aB).`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-1-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-7-ex-3',
        number: '1.7.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av de følgende er et eksempel på pleiotropi?',
        options: [
          { id: 'a', text: 'En mutasjon i ett gen forårsaker sigdcelleanemi som påvirker blodceller, oksygentransport og miltfunksjon', isCorrect: true },
          { id: 'b', text: 'Hudfarge styres av mange forskjellige gener', isCorrect: false },
          { id: 'c', text: 'Ett gen maskerer uttrykket av et annet gen', isCorrect: false },
          { id: 'd', text: 'To gener på samme kromosom arves sammen', isCorrect: false },
        ],
        solution: 'Pleiotropi betyr at ETT gen påvirker MANGE fenotypiske egenskaper. Sigdcelleanemi er et klassisk eksempel: en enkelt mutasjon i β-globingenet påvirker blodcelleform, oksygentransport, blodpropp i kapillærer, miltfunksjon og malariaresistens. Alternativ b beskriver polygeni (mange gener → én egenskap), c beskriver epistasi (gen-gen-interaksjon), og d beskriver kobling.',
        hints: ['Pleiotropi = ett gen, mange egenskaper. Hva er det motsatte av polygeni?'],
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'bio2-1-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-7-ex-4',
        number: '1.7.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hos Labrador retriever styres pelsfarge av to gener: B (sort/sjokolade) og E (extension). En dihybrid sort hund (BbEe) krysses med en gul hund (bbee). Sett opp Punnett-skjema og bestem det fenotypiske forholdet blant avkommene. Forklar hvorfor dette avviker fra det typiske 1:1:1:1-forholdet man forventer fra en testcross-lignende krysning.',
        solution: '**Gameter:**\n- BbEe produserer: BE, Be, bE, be\n- bbee produserer: be (bare én type)\n\n**Punnett-skjema (BbEe × bbee):**\n\n| Gamet fra BbEe | Gamet fra bbee | Avkom genotype | Fenotype |\n|---|---|---|---|\n| BE | be | BbEe | **Sort** |\n| Be | be | Bbee | **Gul** |\n| bE | be | bbEe | **Sjokolade** |\n| be | be | bbee | **Gul** |\n\n**Fenotypisk forhold:** 1 sort : 1 sjokolade : 2 gul\n\nDette avviker fra 1:1:1:1 på grunn av **epistasi**: Genotypen ee er epistatisk over gen B. Både Bbee og bbee gir gul fenotype, uavhengig av B-genotypen. Dermed «slås to klasser sammen» til gul:\n- Uten epistasi ville vi fått: 1 BbEe (sort) : 1 Bbee : 1 bbEe (sjokolade) : 1 bbee = 1:1:1:1\n- Med epistasi: Bbee og bbee → begge gule → 1 sort : 1 sjokolade : 2 gul',
        hints: [
          'Hva skjer med pelsfarge når genotype er ee?',
          'Hvilke genotyper gir gul farge?',
        ],
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'bio2-1-7-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-7-ex-5',
        number: '1.7.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor rammer X-bundne recessive sykdommer oftere menn enn kvinner?',
        options: [
          { id: 'a', text: 'Menn har bare ett X-kromosom, så ett recessivt allel er nok til å gi sykdom', isCorrect: true },
          { id: 'b', text: 'Y-kromosomet forårsaker sykdommen', isCorrect: false },
          { id: 'c', text: 'Kvinner er immune mot X-bundne sykdommer', isCorrect: false },
          { id: 'd', text: 'Menn har to X-kromosomer og dobbelt sjanse for mutasjon', isCorrect: false },
        ],
        solution: 'Menn er hemizygote for X-kromosomet – de har bare én kopi (XY). Dermed er ett recessivt allel på X-kromosomet nok til å gi sykdom, fordi det ikke finnes et andre X-kromosom med et normalt allel som kan kompensere. Kvinner har to X-kromosomer (XX), og trenger mutasjon i BEGGE kopiene (homozygot recessiv) for å bli rammet. Kvinner som er heterozygote (X^A X^a) er symptomfrie bærere. Y-kromosomet forårsaker ikke sykdommen – det mangler bare genet som finnes på X.',
        hints: ['Tenk på antall X-kromosomer hos menn (1) vs. kvinner (2).'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-1-7-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

### Ufullstendig dominans og kodominans
- **Ufullstendig dominans**: Heterozygoten har mellomfenotype (f.eks. rosa blomster)
- **Kodominans**: Begge alleler uttrykt fullt ut (f.eks. blodtype AB)
- Fenotypisk forhold 1:2:1 (ikke 3:1)

### Multiple alleler – AB0-systemet
- Tre alleler: I^A, I^B (kodominante), i (recessivt)
- Fire blodtyper: A, B, AB, O
- Blodtype O = universell donor, AB = universell mottaker

### Kjønnsbundet arv
- X-bundet recessiv: Rammer oftest menn (hemizygote)
- Ingen far-til-sønn-overføring
- Bærerkvinner (X^A X^a) overfører til 50 % av sønnene
- Eksempler: Hemofili, fargeblindhet, Duchenne

### Polygeni, pleiotropi og epistasi
- **Polygeni**: Mange gener → én egenskap (kontinuerlig variasjon)
- **Pleiotropi**: Ett gen → mange egenskaper (sigdcelleanemi)
- **Epistasi**: Ett gen maskerer et annet (pelsfarge hos Labrador)

### Kobling og rekombinasjon
- Gener på samme kromosom er koblet og arves ofte sammen
- Overkrysning bryter kobling → rekombinante gameter
- Rekombinasjonsfrekvens brukes til genetisk kartlegging (1 % RF = 1 cM)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.8: Genomikk og bioinformatikk
// ============================================================================

export const CHAPTER_BIOLOGI_2_1_8: TextbookChapter = {
  id: 'biologi-2-1-8',
  courseId: 'biologi-2',
  chapterNumber: '1.8',
  title: 'Genomikk og bioinformatikk',
  description: 'DNA-sekvensering, bioinformatikk, funksjonell genomikk, CRISPR og etikk.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for DNA-sekvenseringsteknologier og deres anvendelser',
    'forklare prinsippet bak CRISPR-Cas9 og diskutere etiske problemstillinger',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'bio2-1-8-intro',
      type: 'text',
      content: `# Genomikk og bioinformatikk

I dette kapittelet skal du lære om:

- Humangenomprosjektet og genomets oppbygning
- DNA-sekvenseringsteknologier (Sanger, NGS, nanopore)
- Bioinformatiske verktøy og analyse
- Funksjonell genomikk: transkriptomikk, proteomikk og metabolomikk
- CRISPR-Cas9 genredigering
- Etiske problemstillinger rundt genomredigering

Genomikk er studiet av hele genomer – den totale DNA-sekvensen til en organisme. Med fullføringen av Humangenomprosjektet i 2003 og utviklingen av stadig raskere og billigere sekvenseringsteknologier har genomikken revolusjonert biologien. I dag kan et helt menneskegenom sekvenseres på timer til en brøkdel av de opprinnelige kostnadene. Bioinformatikk – skjæringspunktet mellom biologi, informatikk og statistikk – er blitt uunnværlig for å analysere og forstå de enorme mengdene data som genereres.`,
    },

    // ========== TEORI 1: Humangenomprosjektet ==========
    {
      id: 'bio2-1-8-humangenomprosjektet',
      type: 'text',
      content: `## Humangenomprosjektet

### Bakgrunn og gjennomføring

**Humangenomprosjektet** (Human Genome Project, HGP) var et internasjonalt forskningsprosjekt som pågikk fra **1990 til 2003**. Målet var å kartlegge hele det menneskelige genomet – alle ~3,2 milliarder basepar.

**Nøkkeltall:**
- **Varighet**: 13 år
- **Kostnad**: ~2,7 milliarder USD
- **Teknologi**: Sanger-sekvensering (kapillærelektroforese)
- **Strategi**: «Hierarkisk shotgun» – kromosomer ble delt i store fragmenter (BAC-kloner), som ble kartlagt, deretter sekvensert og satt sammen

### Overraskende funn

Humangenomprosjektet avslørte flere overraskelser:

| Egenskap | Forventet | Observert |
|----------|-----------|-----------|
| Antall proteinkodende gener | ~100 000 | **~20 000–25 000** |
| Kodende DNA | Mesteparten | **Bare ~1,5 %** koder for protein |
| Repetitive sekvenser | Lite | **~45 %** av genomet |
| Transposoner | Sjeldent | **~45 %** av genomet er avledet fra transposoner |

### Genomets oppbygning

\`\`\`
Det menneskelige genomet (~3,2 Gb):

├── Kodende sekvenser (~1,5 %)
│   └── ~20 000 proteinkodende gener
│       ├── Eksoner (kodende regioner)
│       └── Introner (ikke-kodende, spleises ut)
│
├── Ikke-kodende, funksjonelt DNA (~8–15 %)
│   ├── Regulatoriske elementer (promotorer, enhancere, silencere)
│   ├── Ikke-kodende RNA-gener (rRNA, tRNA, miRNA, lncRNA)
│   └── Telomerer og centromerer
│
└── Repetitivt og annet DNA (~80–85 %)
    ├── Transposon-avledet DNA (~45 %)
    │   ├── SINEs (f.eks. Alu-elementer)
    │   └── LINEs (f.eks. LINE-1)
    ├── Tandemrepetisjoner (satellitt-DNA, mikrosatellitter)
    └── Segmentale duplikasjoner
\`\`\`

Mye av det ikke-kodende DNA-et ble tidligere kalt «junk-DNA», men nyere forskning (ENCODE-prosjektet) har vist at en betydelig del har regulatoriske eller strukturelle funksjoner.`,
    },

    {
      id: 'bio2-1-8-def-genom',
      type: 'definition',
      title: 'Genom',
      content: 'Et genom er den totale mengden genetisk materiale (DNA) i en organisme. Hos mennesker omfatter det ~3,2 milliarder basepar fordelt på 23 kromosompar. Genomet inkluderer både proteinkodende gener (~20 000–25 000) og store mengder ikke-kodende DNA med regulatoriske, strukturelle og ukjente funksjoner. Genomikk er feltet som studerer hele genomer og deres funksjoner, i motsetning til genetikk som tradisjonelt har fokusert på enkeltgener.',
    },

    // ========== TEORI 2: DNA-sekvenseringsteknologier ==========
    {
      id: 'bio2-1-8-sekvensering',
      type: 'text',
      content: `## DNA-sekvenseringsteknologier

### 1. Sanger-sekvensering (førstegenerasjon)

Utviklet av Frederick Sanger i 1977 og var arbeidshesten i Humangenomprosjektet.

**Prinsipp – Kjedetermineringsmetoden:**
1. DNA-malen denatureres til enkelttråd
2. En primer og DNA-polymerase legges til
3. Reaksjonen inneholder vanlige dNTP-er OG en liten mengde **ddNTP-er** (dideoksynukleotider, fluorescensmerket)
4. ddNTP-er mangler 3'-OH-gruppen → **kjeden terminerer** når de inkorporeres
5. Resultatet er fragmenter av alle mulige lengder, hvert merket med farge for den siste basen
6. Fragmentene separeres etter størrelse med **kapillærelektroforese**
7. En detektor leser av fluorescensfargene → DNA-sekvensen

**Leselengde**: ~700–1000 basepar per reaksjon
**Nøyaktighet**: Svært høy (>99,99 %)
**Begrensning**: Lav gjennomstrømning (throughput), høy kostnad per base

### 2. Neste generasjons sekvensering (NGS) – Illumina

NGS revolusjonerte genomikken ved å sekvensere **millioner av fragmenter parallelt**.

**Prinsipp (Illumina-plattformen):**
1. DNA fragmenteres og kobles til **adaptere**
2. Fragmentene bindes til en **flowcelle** og amplifiseres i klynger (broamplifikasjon)
3. **Sekvensering ved syntese** (SBS): Fluorescensmerkede, reversibelt terminerende nukleotider legges til én om gangen
4. Etter inkorporering avleses fluorescensen med kamera
5. Terminatoren fjernes, og prosessen gjentas

**Leselengde**: ~150–300 bp (kortere enn Sanger)
**Gjennomstrømning**: Enormt – milliarder av reads per kjøring
**Kostnad**: Dramatisk redusert (~$200–1000 per humant genom i dag)
**Begrensning**: Korte reads kan være utfordrende for repetitive regioner

### 3. Tredjegenerasjons sekvensering – Oxford Nanopore

Den nyeste teknologien sekvenserer **lange, intakte DNA-molekyler i sanntid**.

**Prinsipp:**
1. Enkelttrådig DNA trekkes gjennom en **nanopore** (biologisk proteinsore) i en membran
2. Poren har en elektrisk strøm gjennom seg
3. Når DNA passerer, **blokkerer basene strømmen i ulik grad**
4. Endringene i strømmen avleses og konverteres til basesekvens av maskinlæring

**Leselengde**: Opptil **hundretusenvis av basepar** (ultralange reads!)
**Fordeler**: Portabel (MinION-enhet), sanntidssanalyse, kan detektere epigenetiske modifikasjoner
**Begrensning**: Lavere nøyaktighet per enkeltread (~95–99 %), men forbedres raskt

### Sammenligning

| Egenskap | Sanger | Illumina (NGS) | Oxford Nanopore |
|----------|--------|-----------------|-----------------|
| Leselengde | ~700–1000 bp | 150–300 bp | 10 000–100 000+ bp |
| Nøyaktighet | >99,99 % | >99,9 % | ~95–99 % |
| Gjennomstrømning | Lav | Svært høy | Middels |
| Kostnad/genome | >$100 000 | ~$200–1000 | ~$500–1000 |
| Tid | Uker | Timer–dager | Timer |
| Portabilitet | Lab-basert | Lab-basert | Portabel |`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'bio2-1-8-example-1',
      type: 'example',
      title: 'Eksempel 1: Valg av sekvenseringsteknologi',
      problem: `En forskergruppe skal utføre tre ulike prosjekter. Hvilken sekvenseringsteknologi vil du anbefale for hvert prosjekt, og hvorfor?

a) Sekvensere ett bestemt gen (~3000 bp) fra 20 pasienter for å lete etter mutasjoner.
b) Sekvensere hele genomet til en ukjent bakterieart for å sette sammen genomet de novo.
c) Sekvensere RNA fra tumorprøver fra 500 kreftpasienter for å finne genuttrykksforskjeller.`,
      solution: `**Løsning:**

**a) Sanger-sekvensering**
- Grunnen: Bare ett gen fra 20 prøver – liten skala
- Sanger gir svært høy nøyaktighet (>99,99 %), som er viktig for å identifisere punktmutasjoner
- ~3000 bp krever bare 4–6 overlappende reaksjoner per prøve
- NGS ville vært overkill og dyrere for denne lille oppgaven

**b) Oxford Nanopore (eventuelt kombinert med Illumina)**
- Grunnen: De novo genomsammensetning (assembly) krever lange reads for å bygge opp sekvensen uten et referansegenom
- Nanopore gir ultralange reads (10–100+ kb) som spenner over repetitive regioner og gjør assembly langt enklere
- Kombinasjon med korte Illumina-reads (hybrid assembly) kan korrigere nøyaktighetsfeil i nanopore-dataene
- Sanger alene ville vært altfor arbeidskrevende for et helt bakteriegenom (~5 Mb)

**c) Illumina NGS (RNA-seq)**
- Grunnen: 500 pasientprøver krever høy gjennomstrømning og lave kostnader per prøve
- RNA-seq med Illumina er gullstandarden for transkriptomanalyse
- Kort leselengde (150 bp) er tilstrekkelig for kvantifisering av genuttrykk
- Statistisk kraft krever mange prøver → Illuminas skalerbarhet er avgjørende
- Sanger og Nanopore er for dyre/trege for denne skalaen`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'bio2-1-8-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-8-ex-1',
        number: '1.8.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var en av de mest overraskende oppdagelsene fra Humangenomprosjektet?',
        options: [
          { id: 'a', text: 'Mennesker har bare ~20 000–25 000 proteinkodende gener, langt færre enn forventet', isCorrect: true },
          { id: 'b', text: 'Mennesker har over 200 000 proteinkodende gener', isCorrect: false },
          { id: 'c', text: 'Alt DNA i genomet koder for proteiner', isCorrect: false },
          { id: 'd', text: 'Menneskets genom er bare 100 millioner basepar langt', isCorrect: false },
        ],
        solution: 'Før Humangenomprosjektet var det forventet at mennesker ville ha ~100 000 proteinkodende gener basert på vår biologiske kompleksitet. Overraskende nok viste det seg at vi bare har ~20 000–25 000 proteinkodende gener – omtrent like mange som en nematod (C. elegans). Bare ~1,5 % av genomet koder direkte for proteiner. Menneskets genomlengde er ~3,2 milliarder (ikke millioner) basepar.',
        hints: ['Sammenlign forventet og observert antall gener.'],
      },
    },

    // ========== TEORI 3: Bioinformatikk ==========
    {
      id: 'bio2-1-8-bioinformatikk',
      type: 'text',
      content: `## Bioinformatiske verktøy

**Bioinformatikk** kombinerer biologi, informatikk og statistikk for å analysere og tolke biologiske data, spesielt DNA-, RNA- og proteinsekvenser.

### BLAST – Basic Local Alignment Search Tool

**BLAST** er det mest brukte bioinformatiske verktøyet. Det sammenligner en spørringssekvens mot millioner av sekvenser i databaser for å finne **lignende sekvenser**.

**Anvendelser:**
- Identifisere et ukjent gen ved å finne lignende sekvenser i kjente organismer
- Finne evolusjonært beslektede gener (ortologer og paraloger)
- Identifisere proteinfamilier og konserverte domener

**Eksempel:**
\`\`\`
Spørringssekvens: ATGCGATCCAGTCAATG...
     ↓ BLAST-søk
Database-treff:
  1. Homo sapiens BRCA1-gen (98 % identitet) - E-verdi: 0.0
  2. Mus musculus Brca1-gen (87 % identitet) - E-verdi: 1e-150
  3. Gallus gallus BRCA1 (72 % identitet) - E-verdi: 1e-80
\`\`\`

**E-verdien** angir sannsynligheten for å finne et like godt treff ved tilfeldighet. Lavere E-verdi = mer signifikant treff.

### Sekvenssammenstilling (alignment)

**Multippel sekvenssammenstilling** (MSA) sammenligner sekvenser fra mange arter for å identifisere **konserverte regioner** – områder som har endret seg lite gjennom evolusjonen og dermed antas å ha viktig funksjon.

\`\`\`
Menneske:   MKWVTFISLLFLFSSA--YRGVFRR
Sjimpanse:  MKWVTFISLLFLFSSA--YRGVFRR    (100 % identisk)
Mus:        MKWVTFISLLLLFSSA--YRGVFRR    (96 % identisk)
Kylling:    MKWVTFISLL-LFSSA--YRGVFKR    (92 % identisk)
Frosk:      MKWITFISLL-LFSSA--YRGVFKR    (88 % identisk)
                *                   *      * = variabel posisjon
\`\`\`

Jo mer konservert en posisjon er, jo viktigere er den sannsynligvis for proteinets funksjon.

### Fylogenetiske trær

Basert på sekvenssammenstillinger kan man konstruere **fylogenetiske trær** som viser evolusjonære slektskapsforhold mellom arter eller gener.

\`\`\`
                    ┌── Menneske
               ┌───┤
               │   └── Sjimpanse
          ┌────┤
          │    └────── Mus
     ─────┤
          │    ┌────── Kylling
          └────┤
               └────── Frosk
\`\`\`

Grenlengden reflekterer den evolusjonære avstanden (antall sekvensendringer). Arter med kortere grenlengde mellom seg er mer nært beslektet.`,
    },

    // ========== TEORI 4: Funksjonell genomikk ==========
    {
      id: 'bio2-1-8-funksjonell-genomikk',
      type: 'text',
      content: `## Funksjonell genomikk – fra sekvens til funksjon

Å kjenne genomsekvensen er bare begynnelsen. **Funksjonell genomikk** studerer hvordan genomet fungerer – hvilke gener som uttrykkes, hvilke proteiner som produseres, og hvordan det hele reguleres.

### «Omics»-feltene

| Felt | Studerer | Hoveddatatype | Teknologi |
|------|----------|--------------|-----------|
| **Genomikk** | Hele DNA-sekvensen | DNA-sekvens | DNA-sekvensering |
| **Transkriptomikk** | Alle mRNA-molekyler i en celle | mRNA-nivåer | RNA-seq, mikrorray |
| **Proteomikk** | Alle proteiner i en celle | Proteinmengder | Massespektrometri |
| **Metabolomikk** | Alle metabolitter i en celle | Metabolittkonsentrasjoner | MS, NMR |
| **Epigenomikk** | Epigenetiske modifikasjoner | Metylering, histonmerker | ChIP-seq, bisulfitt-seq |

### Transkriptomikk (RNA-seq)

**RNA-seq** måler **alle mRNA-molekyler** i en celle eller et vev og gir et øyeblikksbilde av genuttrykk.

**Anvendelser:**
- Sammenligne genuttrykk mellom friskt og sykt vev (f.eks. tumor vs. normal)
- Identifisere biomarkører for sykdom
- Forstå utviklingsbiologi (hvilke gener skrus på i ulike stadier)
- Oppdage nye transkripter og alternative spleisevarianter

### Proteomikk

Mens transkriptomikk viser hvilke gener som **transkriberes**, viser proteomikk hvilke proteiner som faktisk **produseres** og i hvilke mengder. Det er ikke alltid godt samsvar mellom mRNA- og proteinnivåer, fordi translasjon, proteinmodifisering og nedbrytning også påvirker proteinmengden.

### Metabolomikk

Det «siste trinnet» – metabolomikk studerer de små molekylene (metabolittene) som er sluttproduktene av cellens stoffskifte. Metabolittprofilene reflekterer cellens faktiske fysiologiske tilstand og kan avsløre sykdom før symptomene oppstår.`,
    },

    // ========== TEORI 5: CRISPR-Cas9 ==========
    {
      id: 'bio2-1-8-crispr',
      type: 'text',
      content: `## CRISPR-Cas9 – genredigering

### Opprinnelse

**CRISPR** (Clustered Regularly Interspaced Short Palindromic Repeats) ble opprinnelig oppdaget som et **immunforsvar hos bakterier** mot virus (bakteriofager). Bakterier lagrer korte sekvenser av virus-DNA i sitt eget genom som et «immunologisk minne» – neste gang det samme viruset angriper, gjenkjenner bakterien det og kutter virus-DNA-et i stykker.

### CRISPR-Cas9-mekanismen

Forskerne Jennifer Doudna og Emmanuelle Charpentier (Nobelprisen i kjemi 2020) viste at CRISPR-systemet kunne programmeres til å kutte **hvilket som helst DNA** på et presist sted.

**Komponenter:**
1. **Cas9**: Et «molekylært saksenzyms» (endonuklease) som kutter begge DNA-trådene
2. **Guide-RNA (sgRNA)**: Et kort RNA-molekyl (~20 nt) som er komplementært til målsekvensen i DNA-et og leder Cas9 til riktig sted
3. **PAM-sekvens**: En kort sekvens (NGG for SpCas9) som må finnes rett ved siden av målsekvensen – Cas9 gjenkjenner PAM-sekvensen først

**Trinn:**
\`\`\`
1. Design guide-RNA komplementært til målet
2. sgRNA + Cas9 danner et kompleks
3. Komplekset skanner DNA etter PAM-sekvenser
4. sgRNA hybridiserer med målsekvensen (20 bp)
5. Cas9 kutter begge DNA-trådene (dobbelttrådbrudd)

   5'---NNNNNNNNNNNNNNNNNNNNNGG---3'   (PAM = NGG)
   3'---NNNNNNNNNNNNNNNNNNNNNCC---3'
              ↑ sgRNA binder
              ↑ Cas9 kutter

6. Cellens reparasjonsmekanismer fikser bruddet:
   a) NHEJ (non-homologous end joining) → tilfeldige insersjoner/delesjoner → gen-knockout
   b) HDR (homology-directed repair) → nøyaktig DNA-redigering med donor-DNA
\`\`\`

### Anvendelser av CRISPR

| Område | Anvendelse | Status |
|--------|-----------|--------|
| **Grunnforskning** | Gene knockout, funksjonsstudier | Rutinemessig i bruk |
| **Medisin** | Genterapi for sigdcelleanemi, β-thalassemi | Godkjent (Casgevy, 2023) |
| **Landbruk** | Sykdomsresistente avlinger, næringsberikning | I utvikling/delvis i bruk |
| **Diagnostikk** | SHERLOCK, DETECTR (hurtigtester for infeksjoner) | I bruk |
| **Gendriv** | Bekjempelse av malariamygg | Forskning/etisk debatt |`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'bio2-1-8-example-2',
      type: 'example',
      title: 'Eksempel 2: CRISPR for genterapi',
      problem: `Forklar trinn for trinn hvordan CRISPR-Cas9 brukes til å behandle sigdcelleanemi (den godkjente behandlingen Casgevy).`,
      solution: `**Løsning – CRISPR-behandling av sigdcelleanemi:**

**Bakgrunn:** Sigdcelleanemi skyldes en mutasjon i β-globingenet (HBB) som gir defekt hemoglobin (HbS). Normalt produserer mennesker fosterhemoglobin (HbF) i fosterlivet, men etter fødsel bytter kroppen til voksenhemoglobin (HbA). Genet BCL11A undertrykker produksjonen av fosterhemoglobin hos voksne.

**Behandlingsstrategi:** I stedet for å reparere selve HBB-mutasjonen, bruker Casgevy CRISPR-Cas9 til å slå ut regulatorelementet for **BCL11A** i erytroide celler, slik at pasienten igjen produserer **fosterhemoglobin (HbF)** – som fungerer normalt og kompenserer for det defekte HbS.

**Trinn:**

1. **Stamceller høstes:** Hematopoetiske stamceller (CD34+) hentes fra pasientens benmarg eller blod etter mobilisering.

2. **CRISPR-redigering ex vivo:** I laboratoriet leveres Cas9-protein og sgRNA rettet mot erytroid-spesifikt enhancer-element i BCL11A-genet inn i stamcellene via elektroporering.

3. **Cas9 kutter målet:** Cas9 kutter DNA i BCL11A-enhanceren. Cellens NHEJ-reparasjon introduserer insersjoner/delesjoner som inaktiverer enhanceren.

4. **Kvalitetskontroll:** De redigerte cellene sjekkes for redigeringseffektivitet og fravær av uønskede klipp (off-target-effekter).

5. **Kjemoterapi:** Pasienten gjennomgår myeloablativ kjemoterapi for å fjerne de opprinnelige, defekte stamcellene fra benmargen.

6. **Reinfusjon:** De redigerte stamcellene infunderes tilbake i pasienten (som en benmargstransplantasjon).

7. **Resultat:** De nye stamcellene etablerer seg i benmargen og produserer røde blodceller med **høye nivåer av HbF**, som ikke sigdcelleformer. Pasientene opplever dramatisk reduksjon i smertefulle kriser.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'bio2-1-8-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-8-ex-2',
        number: '1.8.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom de to DNA-reparasjonsveiene som aktiveres etter at Cas9 har laget et dobbelttrådbrudd (NHEJ og HDR). Når brukes hvilken, og hva blir resultatet?',
        solution: '**NHEJ (Non-Homologous End Joining):**\n- Rask og «rotete» reparasjon som kobler de kuttede DNA-endene direkte sammen\n- Introduserer ofte tilfeldige insersjoner eller delesjoner (indels) ved kuttstedet\n- Indels i et kodende gen forårsaker vanligvis rammeskift → gen-knockout (genet inaktiveres)\n- Brukes når målet er å SLUKKE et gen\n- Skjer i alle faser av cellesyklusen\n- Er den dominerende reparasjonsveien\n\n**HDR (Homology-Directed Repair):**\n- Presis reparasjon som bruker en homolog DNA-mal (donor-DNA) som leveres sammen med CRISPR-komponentene\n- Kan gjøre nøyaktige endringer: korrigere en punktmutasjon, sette inn et nytt gen, eller bytte ut en sekvens\n- Brukes når målet er NØYAKTIG REDIGERING (f.eks. rette en sykdomsmutasjon)\n- Skjer bare i S- og G2-fasen av cellesyklusen (når søsterkromatid er tilgjengelig)\n- Er mye mindre effektiv enn NHEJ (typisk <10–20 % av cellene)\n\n**Oppsummert:** NHEJ = «slå av gen» (raskt, upresist, effektivt). HDR = «redigere presist» (tregt, presist, krever donor-DNA).',
        hints: [
          'NHEJ kobler endene uten mal – hva kan gå galt?',
          'HDR trenger en mal – hva brukes som mal?',
        ],
      },
    },

    // ========== TEORI 6: Etikk ==========
    {
      id: 'bio2-1-8-etikk',
      type: 'text',
      content: `## Etikk rundt genomredigering

Genomredigering reiser fundamentale etiske spørsmål som samfunnet må ta stilling til.

### Somatisk vs. kimcelleredigering

| Aspekt | Somatisk celleredigering | Kimcelleredigering |
|--------|------------------------|-------------------|
| **Hva** | Redigerer celler i kroppen (f.eks. blodstamceller) | Redigerer egg, sperm eller embryoer |
| **Arvelighet** | Endringene arves IKKE til neste generasjon | Endringene arves til ALLE framtidige generasjoner |
| **Status** | Bredt akseptert (som annen medisinsk behandling) | Kontroversielt, forbudt i de fleste land |
| **Eksempel** | Casgevy (sigdcelleanemi) | He Jiankui-saken (2018, Kina) |

### He Jiankui-saken (2018)

Den kinesiske forskeren He Jiankui redigerte CCR5-genet i menneskelige embryoer for å gjøre dem resistente mot HIV. Tvillingene Lulu og Nana ble født – de første CRISPR-redigerte menneskene. Saken utløste internasjonal fordømmelse:

- Inngrepet var **medisinsk unødvendig** (foreldrene kunne beskyttet barna på andre måter)
- **Informert samtykke** var mangelfull
- Redigeringen var **upresis** (mosaikk-redigering, off-target-effekter)
- CCR5-delesjon kan ha **uønskede effekter** (økt følsomhet for influensa)
- He Jiankui ble dømt til fengsel i Kina

### Sentrale etiske problemstillinger

**1. Grensen mellom behandling og forbedring**
- Behandle sykdom (sigdcelleanemi) → de fleste er positive
- Forbedre egenskaper (intelligens, utholdenhet, utseende) → «designerbabyer» → langt mer kontroversielt
- Hvor trekker man grensen? Hvem bestemmer hva som er «sykdom» vs. «variasjon»?

**2. Rettferdighet og tilgang**
- Genredigering er dyr (Casgevy koster ~$2 millioner per behandling)
- Risiko for at bare rike kan dra nytte → økt ulikhet
- Bør genterapi være tilgjengelig for alle?

**3. Uforutsette konsekvenser**
- Off-target-redigeringer kan forårsake uventede mutasjoner
- Langtidseffekter er ukjente
- Kimcelleredigering påvirker framtidige generasjoner som ikke har samtykket

**4. Gendriv – endring av hele arter**
- CRISPR-gendriv kan spre et gen gjennom hele en populasjon
- F.eks. gjøre malariamygg sterile → utrydde malaria
- Men: Hva skjer med økosystemet? Kan vi reversere endringen?

### Regulering

De fleste land har lovgivning som regulerer genredigering:
- **Norge**: Bioteknologiloven forbyr kimcelleredigering og genmodifisering av embryoer
- **EU**: Strenge restriksjoner på GMO, inkludert CRISPR-redigerte organismer
- **USA**: FDA regulerer genterapi som medisinsk behandling
- **Internasjonalt**: WHO har nedsatt ekspertpaneler for global styring av genomredigering`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'bio2-1-8-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-8-ex-3',
        number: '1.8.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter forskjellen mellom somatisk genredigering og kimcelleredigering fra et etisk perspektiv. Hvorfor er somatisk genredigering bredt akseptert for behandling av alvorlige sykdommer, mens kimcelleredigering er kontroversielt? Gi minst tre argumenter for og tre argumenter mot kimcelleredigering.',
        solution: '**Somatisk genredigering:**\nEndringer påvirker bare pasienten selv og arves ikke til neste generasjon. Prinsippet er sammenlignbart med annen medisinsk behandling – pasienten samtykker, og risikoen bæres av pasienten alene. Derfor er dette bredt akseptert for alvorlige sykdommer som sigdcelleanemi.\n\n**Kimcelleredigering – argumenter FOR:**\n1. Kan permanent eliminere alvorlige genetiske sykdommer (Huntington, cystisk fibrose) fra familien – fremtidige generasjoner slipper å lide\n2. Mer effektivt enn å behandle hver generasjon med somatisk genterapi\n3. Kan forebygge lidelse hos individer som ennå ikke er født (hvis teknologien er sikker)\n\n**Kimcelleredigering – argumenter MOT:**\n1. **Samtykke**: Fremtidige generasjoner har ikke samtykket til endringen – de kan ikke reversere den\n2. **Uforutsette konsekvenser**: Off-target-mutasjoner og uventede biologiske effekter kan forplante seg gjennom generasjoner. Vi kjenner ikke langtidseffektene\n3. **Glidende skala**: Hvis vi tillater redigering for sykdom, kan det bli vanskelig å trekke grensen mot «forbedring» (intelligens, utseende). Dette kan føre til «designerbabyer» og økt sosial ulikhet\n4. **Genetisk mangfold**: Systematisk fjerning av «uønskede» alleler kan redusere populasjonens genetiske mangfold, som kan være viktig for tilpasning\n\n**Konklusjon:** Somatisk genredigering handler om individuell behandling med reversible (på generasjonsnivå) konsekvenser. Kimcelleredigering handler om å endre menneskelig evolusjon permanent – noe som krever mye bredere samfunnsdiskusjon og forsiktighet.',
        hints: [
          'Tenk på hvem som bærer risikoen og hvem som drar nytte.',
          'Kan fremtidige generasjoner samtykke?',
        ],
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'bio2-1-8-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'bio2-1-8-ex-4',
        number: '1.8.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er E-verdien i et BLAST-søk?',
        options: [
          { id: 'a', text: 'Sannsynligheten for å finne et like godt treff ved tilfeldighet – lavere verdi betyr mer signifikant', isCorrect: true },
          { id: 'b', text: 'Prosent identitet mellom to sekvenser', isCorrect: false },
          { id: 'c', text: 'Antall baser som er forskjellige mellom to sekvenser', isCorrect: false },
          { id: 'd', text: 'Lengden på den lengste sammenhengende matchende regionen', isCorrect: false },
        ],
        solution: 'E-verdien (expect value) i BLAST angir det forventede antallet treff med like god eller bedre score som man ville funnet ved tilfeldighet i en database av gitt størrelse. En E-verdi på 1e-50 betyr at sjansen for å finne et like godt treff tilfeldig er ekstremt liten – altså et svært signifikant treff. Lav E-verdi = biologisk meningsfull likhet. Prosent identitet og treff-lengde er andre mål, men E-verdien er det primære signifikansmålet.',
        hints: ['E = expect – hva «forventer» du ved tilfeldighet?'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'bio2-1-8-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

### Humangenomprosjektet
- Kartla ~3,2 milliarder basepar (1990–2003)
- Bare ~1,5 % av genomet koder for protein (~20 000–25 000 gener)
- ~45 % er transposon-avledet, mye «ikke-kodende» DNA har regulatorisk funksjon

### DNA-sekvenseringsteknologier
- **Sanger**: Kjedeterminering med ddNTP, ~1000 bp, svært nøyaktig, lav kapasitet
- **Illumina (NGS)**: Sekvensering ved syntese, ~150–300 bp, enormt gjennomstrømning, billig
- **Oxford Nanopore**: Strømmåling gjennom nanopore, 10 000–100 000+ bp, portabel, sanntid

### Bioinformatikk
- **BLAST**: Sammenligner sekvenser mot databaser, E-verdi angir signifikans
- **Sekvenssammenstilling**: Identifiserer konserverte regioner
- **Fylogenetiske trær**: Viser evolusjonært slektskap basert på sekvenslikheter

### Funksjonell genomikk
- **Transkriptomikk** (RNA-seq): Måler mRNA-nivåer
- **Proteomikk**: Måler proteinnivåer (massespektrometri)
- **Metabolomikk**: Måler metabolitter

### CRISPR-Cas9
- Cas9 kutter DNA på et spesifikt sted ledet av guide-RNA (sgRNA)
- **NHEJ**: Upresist, gen-knockout (insersjoner/delesjoner)
- **HDR**: Presist, krever donor-DNA-mal
- Godkjent genterapi: Casgevy (sigdcelleanemi, 2023)

### Etikk
- **Somatisk redigering**: Akseptert for behandling (arves ikke)
- **Kimcelleredigering**: Kontroversielt (arves, samtykke, designerbabyer)
- Regulert av nasjonal lovgivning (Norge: bioteknologiloven)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport alle kapitler i Seksjon 1
// ============================================================================

export const BIOLOGI_2_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_2_1_1,
  CHAPTER_BIOLOGI_2_1_2,
  CHAPTER_BIOLOGI_2_1_3,
  CHAPTER_BIOLOGI_2_1_4,
  CHAPTER_BIOLOGI_2_1_5,
  CHAPTER_BIOLOGI_2_1_6,
  CHAPTER_BIOLOGI_2_1_7,
  CHAPTER_BIOLOGI_2_1_8,
];
