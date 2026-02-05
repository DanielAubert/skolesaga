/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Biologi 1 VG2 - Del 5: Arv og genetikk
 *
 * Dekker LK20-kompetansemål for biologi 1 (BIO01-02)
 * Kapittel 5.1-5.5: Mendels lover, monohybrid arv, dihybrid arv,
 * utvidelser av Mendels genetikk, kjønnsbundet arv og slektstavler
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Mendels lover
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_1: TextbookChapter = {
  id: 'biologi-1-5-1',
  courseId: 'biologi-1',
  chapterNumber: '5.1',
  title: 'Mendels lover',
  description: 'Spaltningsloven, loven om fri kombinasjon og Mendels historiske forsok med erter.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for Mendels lover og deres betydning for genetikken',
    'forklare spaltningsloven og loven om fri kombinasjon',
    'beskrive hvordan Mendels forsok med erter la grunnlaget for moderne genetikk',
  ],
  content: [
    {
      id: 'bio1-5-1-intro',
      type: 'text',
      content: `# Mendels lover

Gregor Johann Mendel (1822-1884) var en osterriksk munk og naturforsker som regnes som genetikkens far. Gjennom systematiske forsok med erteplanter oppdaget han grunnleggende prinsipper for arv som fortsatt er gyldige i dag.

## Mendels historiske betydning

For Mendel trodde man pa "blandingsarv" - at foreldres egenskaper blandet seg i avkommet som maling. Mendel viste at arv folger bestemte matematiske regler, og at egenskaper overleveres som diskrete enheter vi i dag kaller gener.

## Hvorfor erteplanter?

Mendel valgte erteplanter (Pisum sativum) av flere grunner:
- **Lett a dyrke**: Rask generasjonstid (en sesong)
- **Mange varianter**: Tydelige egenskaper a studere
- **Selvpollinering**: Kunne kontrollere krysningene
- **Stort avkom**: Ga statistisk palitelige resultater`,
    },
    {
      id: 'bio1-5-1-def-spaltning',
      type: 'definition',
      title: 'Spaltningsloven (Mendels 1. lov)',
      content: 'Spaltningsloven sier at hvert individ har to alleler for hvert gen, og at disse separeres under dannelsen av kjonnceller (meiose), slik at hver kjonncelle bare far ett allel. Ved befruktning kombineres alleler fra begge foreldre tilfeldig. Dette gir forutsigbare forhold i avkommet, som 3:1 ved krysning av to heterozygote individer.',
    },
    {
      id: 'bio1-5-1-mendels-forsok',
      type: 'text',
      content: `## Mendels forsok med erter

### De syv egenskapene Mendel studerte

Mendel valgte egenskaper med klart definerte varianter:

| Egenskap | Dominant | Recessiv |
|----------|----------|----------|
| Froform | Rund | Rynket |
| Frofarge | Gul | Gronn |
| Blomstfarge | Lilla | Hvit |
| Belgens form | Oppblast | Innsnevret |
| Belgens farge | Gronn | Gul |
| Blomstplassering | Langs stengelen | I toppen |
| Stengelhoyde | Hoy | Lav |

### Forsoksoppsettet

**P-generasjon (foreldregenerasjon):**
Mendel startet med rene linjer - planter som ga identisk avkom generasjon etter generasjon.

**F1-generasjon (forste filiale generasjon):**
Krysning mellom to rene linjer med motsatte egenskaper. Alle F1-individer viste bare den dominante egenskapen.

**F2-generasjon (andre filiale generasjon):**
Selvpollinering av F1. Her dukket den recessiv egenskapen opp igjen i ca. 1/4 av avkommet.`,
    },
    {
      id: 'bio1-5-1-def-frikombi',
      type: 'definition',
      title: 'Loven om fri kombinasjon (Mendels 2. lov)',
      content: 'Loven om fri kombinasjon sier at alleler for ulike gener segregerer uavhengig av hverandre under meiosen, forutsatt at genene ligger pa forskjellige kromosompar. Dette betyr at arv av en egenskap ikke pavirker arv av en annen. Denne loven forklarer hvorfor vi far 9:3:3:1-forholdet i dihybride kryss.',
    },
    {
      id: 'bio1-5-1-spaltning',
      type: 'text',
      content: `## Spaltningsloven i detalj

### Fra P til F2

**Eksempel: Froform**
- P: Rund (RR) x Rynket (rr)
- F1: Alle Rr (runde fro)
- F2: 1 RR : 2 Rr : 1 rr = 3 runde : 1 rynket

### Hvorfor 3:1-forholdet?

Nar to heterozygote individer (Aa) krysses:

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

- 1/4 AA (homozygot dominant)
- 2/4 Aa (heterozygot)
- 1/4 aa (homozygot recessiv)

Fenotype: 3/4 dominant : 1/4 recessiv = 3:1

### Mendels innsikt

Mendel forsto at:
1. Egenskaper styres av "faktorer" (gener)
2. Hvert individ har to faktorer per egenskap
3. Faktorene separeres under kjonncelle-dannelse
4. En faktor kan maskere en annen (dominans)`,
    },
    {
      id: 'bio1-5-1-def-allel',
      type: 'definition',
      title: 'Alleler',
      content: 'Alleler er ulike varianter av samme gen. For eksempel kan genet for frofarge ha allelet for gul farge (G) eller allelet for gronn farge (g). Et individ arver ett allel fra hver forelder, og kan derfor vare homozygot (GG eller gg) eller heterozygot (Gg).',
    },
    {
      id: 'bio1-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Mendels ertekryss',
      problem: 'Mendel krysset en plante med gule fro (GG) med en plante med gronne fro (gg). Hva blir fenotypene i F1 og F2?',
      solution: `**Losning:**

**F1-generasjon:**
P: GG x gg

| | G | G |
|---|---|---|
| **g** | Gg | Gg |
| **g** | Gg | Gg |

Alle F1: Gg = gule fro (gul er dominant)

**F2-generasjon (F1 x F1):**
Gg x Gg

| | G | g |
|---|---|---|
| **G** | GG | Gg |
| **g** | Gg | gg |

**Genotyper:** 1 GG : 2 Gg : 1 gg
**Fenotyper:** 3 gule (GG, Gg, Gg) : 1 gronn (gg)

Mendel observerte nettopp dette 3:1-forholdet i sine forsok.`,
    },
    {
      id: 'bio1-5-1-example-2',
      type: 'example',
      title: 'Eksempel: Fri kombinasjon',
      problem: 'Forklar hvorfor en plante med genotype GgRr kan produsere fire ulike typer kjonnceller.',
      solution: `**Losning:**

Planten har genotype GgRr:
- G/g-genparet ligger pa ett kromosompar
- R/r-genparet ligger pa et annet kromosompar

Under meiose separeres allelene uavhengig:

**Fra G/g-genparet:** 50% G og 50% g
**Fra R/r-genparet:** 50% R og 50% r

Fri kombinasjon gir fire mulige kjonnceller:
- GR (25%)
- Gr (25%)
- gR (25%)
- gr (25%)

Dette er grunnlaget for Mendels 2. lov: Genpar segregerer uavhengig av hverandre.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-5-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva sier Mendels 1. lov (spaltningsloven)?',
      options: [
        { id: 'a', text: 'At allelpar separeres under kjonncelle-dannelse slik at hver kjonncelle far ett allel', isCorrect: true },
        { id: 'b', text: 'At alle egenskaper blandes i avkommet', isCorrect: false },
        { id: 'c', text: 'At dominante alleler alltid uttrykkes', isCorrect: false },
        { id: 'd', text: 'At mutasjoner forekommer tilfeldig', isCorrect: false },
      ],
      solution: 'Spaltningsloven sier at de to allelene for et gen separeres under meiose, slik at hver kjonncelle (egg eller sperm) bare inneholder ett allel. Ved befruktning kombineres alleler fra begge foreldre.',
    },
    {
      id: 'bio1-5-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor Mendel valgte erteplanter til sine forsok. Nevn minst tre grunner.',
      solution: '1) Erteplanter har kort generasjonstid (en sesong), slik at Mendel kunne gjennomfore mange generasjoner. 2) De kan selvpollinere, noe som ga rene linjer. 3) Blomstene kan kontrollert krysspollineres. 4) Plantene har tydelige, klart definerte egenskaper (gul/gronn, rund/rynket osv.). 5) Hvert kryss gir mange avkom, noe som gir statistisk palitelige resultater.',
    },
    {
      id: 'bio1-5-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvis man krysser to heterozygote planter (Aa x Aa), hva er sannsynligheten for a fa et homozygot recessivt avkom (aa)?',
      options: [
        { id: 'a', text: '1/4 (25%)', isCorrect: true },
        { id: 'b', text: '1/2 (50%)', isCorrect: false },
        { id: 'c', text: '3/4 (75%)', isCorrect: false },
        { id: 'd', text: '1/3 (33%)', isCorrect: false },
      ],
      solution: 'Ved krysning Aa x Aa far vi: 1/4 AA, 2/4 Aa, 1/4 aa. Sannsynligheten for homozygot recessiv (aa) er derfor 1/4 eller 25%.',
    },
    {
      id: 'bio1-5-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Mendel krysset rene linjer med runde fro (RR) og rynkede fro (rr). Alle F1-plantene hadde runde fro. Beskriv genotypene og fenotypene i F2-generasjonen.',
      solution: 'F1 har genotype Rr (alle runde fro fordi R er dominant). I F2 fra Rr x Rr: Genotyper blir 1 RR : 2 Rr : 1 rr. Fenotyper blir 3 runde (RR og Rr) : 1 rynket (rr). Dette er det klassiske 3:1-forholdet som Mendel observerte.',
      hints: ['Sett opp en Punnett-rute for Rr x Rr'],
    },
    {
      id: 'bio1-5-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar Mendels 2. lov (loven om fri kombinasjon) og hvorfor den bare gjelder for gener pa forskjellige kromosomer.',
      solution: 'Mendels 2. lov sier at alleler for ulike gener fordeles uavhengig av hverandre under meiose. Under meiose I orienteres homologe kromosompar tilfeldig ved celleplanet, sa hvert kromosompar sorteres uavhengig. Gener pa SAMME kromosom vil imidlertid segregere sammen (de er koblet), med mindre overkrysning skiller dem. Derfor gjelder loven strengt tatt bare for gener pa forskjellige kromosompar.',
    },
    {
      id: 'bio1-5-1-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kalles de ulike variantene av samme gen?',
      options: [
        { id: 'a', text: 'Alleler', isCorrect: true },
        { id: 'b', text: 'Kromosomer', isCorrect: false },
        { id: 'c', text: 'Genotyper', isCorrect: false },
        { id: 'd', text: 'Fenotyper', isCorrect: false },
      ],
      solution: 'Alleler er ulike varianter av samme gen. For eksempel er G (gul) og g (gronn) to alleler av genet for frofarge hos erter.',
    },
  ],
};

// ============================================================================
// Kapittel 5.2: Monohybrid arv
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_2: TextbookChapter = {
  id: 'biologi-1-5-2',
  courseId: 'biologi-1',
  chapterNumber: '5.2',
  title: 'Monohybrid arv',
  description: 'Genotype og fenotype, dominans og recessivitet, og bruk av krysningsskjema (Punnett-ruter).',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare forskjellen mellom genotype og fenotype',
    'bruke Punnett-ruter til a forutsi arv',
    'forsta dominans og recessivitet',
    'beregne sannsynligheter i monohybride kryss',
  ],
  content: [
    {
      id: 'bio1-5-2-intro',
      type: 'text',
      content: `# Monohybrid arv

Monohybrid arv handler om arv av en enkelt egenskap, alts ett genpar. Dette er den enkleste formen for arv og gir grunnlaget for a forsta mer komplekse arvemonstre.

## Grunnleggende begreper

For a forsta monohybrid arv ma vi mestre noen sentrale begreper:

- **Gen**: En arvelig enhet som koder for en egenskap
- **Allel**: En variant av et gen
- **Locus**: Genets posisjon pa kromosomet
- **Homolog**: Kromosompar med samme gener

## Hvorfor "monohybrid"?

- **Mono** = en
- **Hybrid** = krysning mellom individer som er forskjellige

Monohybrid krysning betyr at vi ser pa arv av bare en egenskap om gangen.`,
    },
    {
      id: 'bio1-5-2-def-genotype',
      type: 'definition',
      title: 'Genotype',
      content: 'Genotype er den genetiske sammensetningen til et individ - alts hvilke alleler individet har. Genotypen skrives med bokstaver, for eksempel AA, Aa eller aa. Et individ med to like alleler (AA eller aa) er homozygot, mens et individ med to ulike alleler (Aa) er heterozygot.',
    },
    {
      id: 'bio1-5-2-def-fenotype',
      type: 'definition',
      title: 'Fenotype',
      content: 'Fenotype er de observerbare egenskapene til et individ - hvordan genotypen kommer til uttrykk. Fenotypen pavirkes av genotypen, men ogsa av miljo. For eksempel er "svart pels" en fenotype, mens genotypen kan vare enten BB eller Bb.',
    },
    {
      id: 'bio1-5-2-dominans',
      type: 'text',
      content: `## Dominans og recessivitet

### Dominant allel
Et dominant allel kommer til uttrykk i fenotypen nar det er til stede, enten i enkel (Aa) eller dobbel (AA) dose. Dominante alleler skrives vanligvis med stor bokstav.

### Recessivt allel
Et recessivt allel kommer bare til uttrykk nar det er i dobbel dose (aa). Nar et dominant allel er til stede, vil det "maskere" det recessive. Recessive alleler skrives med liten bokstav.

### Eksempel
| Genotype | Fenotype |
|----------|----------|
| BB | Svart pels |
| Bb | Svart pels |
| bb | Brun pels |

Svart (B) er dominant over brun (b). Bade BB og Bb gir svart pels fordi B maskerer b.

### Viktig presisering
Dominans betyr IKKE at allelet er "sterkere" eller mer utbredt. Det beskriver bare forholdet mellom allelene i fenotypen.`,
    },
    {
      id: 'bio1-5-2-punnett',
      type: 'text',
      content: `## Punnett-ruter (krysningsskjema)

Punnett-ruten er et skjema som brukes til a forutsi genotyper og fenotyper i avkommet.

### Slik bruker du Punnett-ruten:

1. **Bestem foreldrenes genotyper** (f.eks. Aa x Aa)
2. **Skriv kjonncellene til den ene forelderen oppe** (A og a)
3. **Skriv kjonncellene til den andre forelderen pa siden** (A og a)
4. **Kombiner i hver rute**
5. **Tell opp genotyper og fenotyper**

### Eksempel: Aa x Aa

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

**Genotype-forhold:** 1 AA : 2 Aa : 1 aa
**Fenotype-forhold:** 3 dominant : 1 recessiv

### Ulike krysningstyper

| Krysning | Genotype-forhold | Fenotype-forhold |
|----------|------------------|------------------|
| AA x AA | Alle AA | Alle dominant |
| AA x Aa | 1 AA : 1 Aa | Alle dominant |
| AA x aa | Alle Aa | Alle dominant |
| Aa x Aa | 1 AA : 2 Aa : 1 aa | 3:1 |
| Aa x aa | 1 Aa : 1 aa | 1:1 |
| aa x aa | Alle aa | Alle recessiv |`,
    },
    {
      id: 'bio1-5-2-def-testcross',
      type: 'definition',
      title: 'Testcross',
      content: 'Et testcross er en krysning mellom et individ med ukjent genotype (men dominant fenotype) og et homozygot recessivt individ (aa). Forholdet i avkommet avslorer om det ukjente individet er homozygot (AA) eller heterozygot (Aa). Hvis alle avkom har dominant fenotype, er individet AA. Hvis noen har recessiv fenotype, er individet Aa.',
    },
    {
      id: 'bio1-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Monohybrid krysning',
      problem: 'Hos mennesker er rull-tunge (R) dominant over ikke-rull-tunge (r). En mann som kan rulle tunga (Rr) far barn med en kvinne som ikke kan rulle tunga (rr). Hva er sannsynligheten for at et barn kan rulle tunga?',
      solution: `**Losning:**

Foreldrenes genotyper:
- Far: Rr (kan rulle tunga)
- Mor: rr (kan ikke rulle tunga)

**Punnett-rute:**

| | R | r |
|---|---|---|
| **r** | Rr | rr |
| **r** | Rr | rr |

**Resultat:**
- 2/4 Rr = kan rulle tunga
- 2/4 rr = kan ikke rulle tunga

**Svar:** Sannsynligheten for at et barn kan rulle tunga er 1/2 eller 50%.`,
    },
    {
      id: 'bio1-5-2-example-2',
      type: 'example',
      title: 'Eksempel: Testcross',
      problem: 'En svart hund krysses med en brun hund. Av 8 valper er 4 svarte og 4 brune. Hva er genotypen til den svarte foreldrehunden?',
      solution: `**Losning:**

**Gitt informasjon:**
- Svart (B) er dominant over brun (b)
- Brun hund ma vare bb
- Svart hund kan vare BB eller Bb
- Avkom: 4 svarte, 4 brune (ca. 1:1 forhold)

**Analyse:**
Hvis svart hund var BB:
- BB x bb → Alle Bb (alle svarte)

Hvis svart hund var Bb:
- Bb x bb → 1/2 Bb : 1/2 bb (1:1 forhold)

**Konklusjon:**
Fordi vi far bade svarte og brune valper i omtrent 1:1-forhold, ma den svarte foreldrehunden vare **heterozygot (Bb)**.

Dette er et klassisk testcross!`,
    },
  ],
  exercises: [
    {
      id: 'bio1-5-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom genotype og fenotype?',
      options: [
        { id: 'a', text: 'Genotype er den genetiske sammensetningen, fenotype er de observerbare egenskapene', isCorrect: true },
        { id: 'b', text: 'Genotype er miljopavirkning, fenotype er arv', isCorrect: false },
        { id: 'c', text: 'Genotype og fenotype betyr det samme', isCorrect: false },
        { id: 'd', text: 'Fenotype er den genetiske sammensetningen, genotype er de observerbare egenskapene', isCorrect: false },
      ],
      solution: 'Genotype refererer til individets genetiske sammensetning (f.eks. Aa), mens fenotype er de observerbare egenskapene som resultat av genotypen og miljo (f.eks. "svart pels").',
    },
    {
      id: 'bio1-5-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Sett opp en Punnett-rute for krysningen Bb x Bb og bestem genotype- og fenotype-forholdet.',
      solution: 'Punnett-rute: BB, Bb, Bb, bb. Genotype-forhold: 1 BB : 2 Bb : 1 bb. Fenotype-forhold: 3 dominant (BB og Bb viser dominant egenskap) : 1 recessiv (bb viser recessiv egenskap), altsa 3:1.',
      hints: ['Husk at B er dominant over b'],
    },
    {
      id: 'bio1-5-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'To foreldre med genotype Aa far fire barn. Hvor mange av barna forventer vi skal ha genotype Aa?',
      options: [
        { id: 'a', text: '2 barn', isCorrect: true },
        { id: 'b', text: '1 barn', isCorrect: false },
        { id: 'c', text: '3 barn', isCorrect: false },
        { id: 'd', text: '4 barn', isCorrect: false },
      ],
      solution: 'Fra Aa x Aa far vi 1 AA : 2 Aa : 1 aa. Sannsynligheten for Aa er 2/4 = 50%. Med fire barn forventer vi derfor 2 barn med genotype Aa. (Merk: dette er forventet verdi, faktisk antall kan variere.)',
    },
    {
      id: 'bio1-5-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva et testcross er og hvordan det brukes til a bestemme genotype.',
      solution: 'Et testcross er krysning med et homozygot recessivt individ (aa) for a avslore ukjent genotype. Hvis individet med dominant fenotype er: 1) Homozygot (AA) - alle avkom far dominant fenotype (Aa). 2) Heterozygot (Aa) - ca. halvparten far recessiv fenotype (aa). Ved a se pa avkommet kan vi bestemme om forelderen er AA eller Aa.',
    },
    {
      id: 'bio1-5-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hos kaniner er svart pels (B) dominant over hvit pels (b). En svart kanin pares med en hvit kanin. De far 12 unger: 7 svarte og 5 hvite. a) Hva er foreldrekaninenes genotyper? b) Tester dette resultatet hypotesen? Bruk forventet 1:1-forhold.',
      solution: 'a) Hvit kanin ma vare bb. Svart kanin ma vare Bb (fordi noen unger er hvite). BB x bb ville gitt bare svarte unger. b) Forventet 1:1-forhold: 6 svarte : 6 hvite. Observert: 7 svarte : 5 hvite. Avviket er lite (1 i hver retning) og skyldes tilfeldig variasjon. Med bare 12 unger er dette resultatet forenlig med 1:1-hypotesen. En chi-kvadrat-test ville vist at avviket ikke er statistisk signifikant.',
      hints: ['Tenk pa testcross: ukjent x homozygot recessiv'],
    },
    {
      id: 'bio1-5-2-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med at et individ er homozygot?',
      options: [
        { id: 'a', text: 'At det har to like alleler for et gen (f.eks. AA eller aa)', isCorrect: true },
        { id: 'b', text: 'At det har to ulike alleler for et gen', isCorrect: false },
        { id: 'c', text: 'At det har dominant fenotype', isCorrect: false },
        { id: 'd', text: 'At det er hannkjonn', isCorrect: false },
      ],
      solution: 'Homozygot betyr at individet har to like alleler for et gen - enten to dominante (AA) eller to recessive (aa). Motsetningen er heterozygot (Aa) med to ulike alleler.',
    },
  ],
};

// ============================================================================
// Kapittel 5.3: Dihybrid arv
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_3: TextbookChapter = {
  id: 'biologi-1-5-3',
  courseId: 'biologi-1',
  chapterNumber: '5.3',
  title: 'Dihybrid arv',
  description: 'To-faktor kryss, 9:3:3:1-forholdet og uavhengig assortiment.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjennomfore dihybride kryss med Punnett-ruter',
    'forklare 9:3:3:1-forholdet',
    'forsta prinsippet om uavhengig assortiment',
    'beregne sannsynligheter med produktregelen',
  ],
  content: [
    {
      id: 'bio1-5-3-intro',
      type: 'text',
      content: `# Dihybrid arv

Dihybrid arv handler om samtidig arv av to ulike egenskaper, alts to genpar. Dette er mer komplekst enn monohybrid arv, men folger de samme grunnleggende prinsippene.

## Hva er dihybrid arv?

- **Di** = to
- **Hybrid** = krysning mellom forskjellige individer

I et dihybrid kryss ser vi pa to genpar samtidig, for eksempel:
- Gen 1: Froform (R/r)
- Gen 2: Frofarge (Y/y)

## Mendels dihybride forsok

Mendel krysset erter som var:
- Runde og gule (RRYY) x Rynkede og gronne (rryy)

F1: Alle RrYy (runde og gule)
F2: Det berømte 9:3:3:1-forholdet`,
    },
    {
      id: 'bio1-5-3-def-uavhengig',
      type: 'definition',
      title: 'Uavhengig assortiment',
      content: 'Uavhengig assortiment (Mendels 2. lov) sier at allelpar for forskjellige gener segregerer uavhengig under meiose. Dette skjer fordi homologe kromosompar orienterer seg tilfeldig pa ekvatorplanet i meiose I. Forutsetningen er at genene ligger pa forskjellige kromosompar.',
    },
    {
      id: 'bio1-5-3-dihybrid-kryss',
      type: 'text',
      content: `## Dihybrid krysning i praksis

### Eksempel: RrYy x RrYy

Begge foreldre er heterozygote for bade froform (Rr) og frofarge (Yy).

### Kjonnceller fra RrYy

Pa grunn av uavhengig assortiment kan vi fa fire typer kjonnceller:
- RY (25%)
- Ry (25%)
- rY (25%)
- ry (25%)

### 4x4 Punnett-rute

| | RY | Ry | rY | ry |
|---|----|----|----|----|
| **RY** | RRYY | RRYy | RrYY | RrYy |
| **Ry** | RRYy | RRyy | RrYy | Rryy |
| **rY** | RrYY | RrYy | rrYY | rrYy |
| **ry** | RrYy | Rryy | rrYy | rryy |

### Opptelling av fenotyper

Fra de 16 rutene:
- **9/16 R_Y_**: Rund, gul (9 ruter)
- **3/16 R_yy**: Rund, gronn (3 ruter)
- **3/16 rrY_**: Rynket, gul (3 ruter)
- **1/16 rryy**: Rynket, gronn (1 rute)

Dette gir det klassiske **9:3:3:1-forholdet**.`,
    },
    {
      id: 'bio1-5-3-def-produktregel',
      type: 'definition',
      title: 'Produktregelen',
      content: 'Produktregelen sier at sannsynligheten for at to uavhengige hendelser begge inntreffer er produktet av deres individuelle sannsynligheter. For genetikk: P(genotype AB) = P(genotype A) x P(genotype B). Dette gjelder for gener som segregerer uavhengig.',
    },
    {
      id: 'bio1-5-3-produktregel',
      type: 'text',
      content: `## Produktregelen - en snarvei

I stedet for a sette opp store Punnett-ruter kan vi bruke produktregelen for a beregne sannsynligheter direkte.

### Eksempel: RrYy x RrYy

**Sporsmal:** Hva er sannsynligheten for avkom med genotype RrYy?

**Losning med produktregelen:**

1. Behandle hvert genpar separat
2. For Rr: P(Rr fra Rr x Rr) = 2/4 = 1/2
3. For Yy: P(Yy fra Yy x Yy) = 2/4 = 1/2
4. Kombiner: P(RrYy) = 1/2 x 1/2 = 1/4

### Sjekk mot Punnett-ruten

I 4x4-ruten er det 4 ruter med RrYy av totalt 16:
4/16 = 1/4 ✓

### Fordeler med produktregelen

- Raskere enn store Punnett-ruter
- Skalerer til tre eller flere genpar
- Lett a sjekke med enkel matematikk`,
    },
    {
      id: 'bio1-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Dihybrid arv hos erter',
      problem: 'Hos erter er rund fro (R) dominant over rynket (r), og gul farge (Y) dominant over gronn (y). Hva er sannsynligheten for a fa et avkom som er rynket og gront fra krysningen RrYy x RrYy?',
      solution: `**Losning med produktregelen:**

For a vare rynket og gronn ma genotypen vare rryy.

**Steg 1: Sannsynlighet for rr**
Fra Rr x Rr:
| | R | r |
|---|---|---|
| **R** | RR | Rr |
| **r** | Rr | rr |

P(rr) = 1/4

**Steg 2: Sannsynlighet for yy**
Fra Yy x Yy:
P(yy) = 1/4

**Steg 3: Kombiner med produktregelen**
P(rryy) = P(rr) x P(yy) = 1/4 x 1/4 = **1/16**

Dette stemmer med at 1/16 av 9:3:3:1-forholdet har fenotypen rynket og gronn.`,
    },
    {
      id: 'bio1-5-3-example-2',
      type: 'example',
      title: 'Eksempel: Beregne fenotype-sannsynligheter',
      problem: 'I krysningen RrYy x RrYy, hva er sannsynligheten for a fa et avkom som er rund (dominant for R) og gronn (recessiv for Y)?',
      solution: `**Losning:**

Onsket fenotype: Rund og gronn
- Rund: Genotype R_ (RR eller Rr)
- Gronn: Genotype yy

**Steg 1: Sannsynlighet for rund (R_)**
Fra Rr x Rr:
- 1/4 RR
- 2/4 Rr
- 1/4 rr

P(R_) = P(RR) + P(Rr) = 1/4 + 2/4 = 3/4

**Steg 2: Sannsynlighet for gronn (yy)**
Fra Yy x Yy:
P(yy) = 1/4

**Steg 3: Kombiner**
P(rund og gronn) = 3/4 x 1/4 = **3/16**

Dette tilsvarer "3" i 9:3:3:1-forholdet.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-5-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er det forventede fenotype-forholdet i F2 fra et dihybrid kryss mellom to heterozygote foreldre?',
      options: [
        { id: 'a', text: '9:3:3:1', isCorrect: true },
        { id: 'b', text: '3:1', isCorrect: false },
        { id: 'c', text: '1:2:1', isCorrect: false },
        { id: 'd', text: '1:1:1:1', isCorrect: false },
      ],
      solution: 'I et dihybrid kryss mellom to heterozygote foreldre (f.eks. AaBb x AaBb) far vi fenotype-forholdet 9:3:3:1, der 9 viser bade dominante egenskaper, 3+3 viser en dominant og en recessiv, og 1 viser begge recessive egenskaper.',
    },
    {
      id: 'bio1-5-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvor mange ulike typer kjonnceller kan et individ med genotype AaBb produsere? List dem opp.',
      solution: 'Et individ med genotype AaBb kan produsere 4 ulike typer kjonnceller: AB, Ab, aB og ab. Hver type har sannsynlighet 1/4 (25%). Dette skyldes uavhengig assortiment av de to genparene under meiose.',
    },
    {
      id: 'bio1-5-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'I krysningen AaBb x AaBb, hva er sannsynligheten for avkom med genotype AABB?',
      options: [
        { id: 'a', text: '1/16', isCorrect: true },
        { id: 'b', text: '1/4', isCorrect: false },
        { id: 'c', text: '9/16', isCorrect: false },
        { id: 'd', text: '3/16', isCorrect: false },
      ],
      solution: 'Bruker produktregelen: P(AA fra Aa x Aa) = 1/4, og P(BB fra Bb x Bb) = 1/4. Derfor: P(AABB) = 1/4 x 1/4 = 1/16.',
    },
    {
      id: 'bio1-5-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Bruk produktregelen til a beregne sannsynligheten for a fa avkom med fenotype dominant for begge egenskaper (A_B_) fra krysningen AaBb x AaBb.',
      solution: 'Sannsynlighet for dominant fenotype for A-genet: P(A_) = P(AA) + P(Aa) = 1/4 + 2/4 = 3/4. Sannsynlighet for dominant fenotype for B-genet: P(B_) = 3/4. Med produktregelen: P(A_B_) = 3/4 x 3/4 = 9/16. Dette tilsvarer "9" i 9:3:3:1-forholdet.',
      hints: ['Beregn sannsynligheten for hvert gen separat, deretter multipliser'],
    },
    {
      id: 'bio1-5-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En dihybrid krysning gir 480 avkom. Hvor mange av hvert fenotype forventer du i et perfekt 9:3:3:1-forhold?',
      solution: 'Totalt 480 avkom delt pa 16 deler: 480/16 = 30 per del. Forventet antall: 9 x 30 = 270 med begge dominante fenotyper. 3 x 30 = 90 med forste dominant, andre recessiv. 3 x 30 = 90 med forste recessiv, andre dominant. 1 x 30 = 30 med begge recessive fenotyper. Sjekk: 270 + 90 + 90 + 30 = 480 ✓',
    },
    {
      id: 'bio1-5-3-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forutsetningen for at Mendels lov om uavhengig assortiment skal gjelde?',
      options: [
        { id: 'a', text: 'At genene ligger pa forskjellige kromosompar', isCorrect: true },
        { id: 'b', text: 'At begge alleler er dominante', isCorrect: false },
        { id: 'c', text: 'At foreldrene er homozygote', isCorrect: false },
        { id: 'd', text: 'At det bare er to alleler', isCorrect: false },
      ],
      solution: 'Uavhengig assortiment krever at genene ligger pa forskjellige kromosompar. Gener pa samme kromosom er "koblet" og vil ofte arves sammen, med mindre overkrysning skiller dem.',
    },
  ],
};

// ============================================================================
// Kapittel 5.4: Utvidelser av Mendels genetikk
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_4: TextbookChapter = {
  id: 'biologi-1-5-4',
  courseId: 'biologi-1',
  chapterNumber: '5.4',
  title: 'Utvidelser av Mendels genetikk',
  description: 'Ufullstendig dominans, kodominans, multiple alleler (blodtyper) og polygene egenskaper.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare ufullstendig dominans og kodominans',
    'forsta arv med multiple alleler (ABO-blodtyper)',
    'beskrive polygene egenskaper',
    'innse at Mendels enkle modell ofte ma utvides',
  ],
  content: [
    {
      id: 'bio1-5-4-intro',
      type: 'text',
      content: `# Utvidelser av Mendels genetikk

Mendels lover gir et utmerket grunnlag for a forsta arv, men virkeligheten er ofte mer kompleks. Mange egenskaper folger ikke det enkle dominant/recessiv-monsteret.

## Utvidelser av dominans-begrepet

Mendel var heldig som valgte egenskaper med klar dominans. I virkeligheten finnes flere former for samspill mellom alleler:

1. **Fullstendig dominans** (Mendels modell)
2. **Ufullstendig dominans**
3. **Kodominans**
4. **Multiple alleler**
5. **Polygene egenskaper**

Disse utvidelsene motbeviser ikke Mendels lover - de utvider dem til a forklare mer komplekse monstre.`,
    },
    {
      id: 'bio1-5-4-def-ufullstendig',
      type: 'definition',
      title: 'Ufullstendig dominans',
      content: 'Ufullstendig dominans oppstar nar heterozygote individer viser en fenotype som er mellomliggende mellom de to homozygote fenotypene. For eksempel gir krysning av rode blomster (RR) og hvite blomster (WW) rosa blomster (RW) - en blanding av foreldrenes farger.',
    },
    {
      id: 'bio1-5-4-ufullstendig',
      type: 'text',
      content: `## Ufullstendig dominans

### Eksempel: Lowemunn-blomster

| Genotype | Fenotype |
|----------|----------|
| R^R R^R | Rod |
| R^R R^W | Rosa |
| R^W R^W | Hvit |

Ved ufullstendig dominans gir R^R R^W-heterozygoten en mellomliggende fenotype (rosa).

### Fenotype-forhold

F2 fra R^R R^W x R^R R^W:

| | R^R | R^W |
|---|-----|-----|
| **R^R** | R^R R^R | R^R R^W |
| **R^W** | R^R R^W | R^W R^W |

**Fenotype-forhold:** 1 rod : 2 rosa : 1 hvit

Dette skiller seg fra 3:1 ved fullstendig dominans!

### Hvorfor skjer dette?

Ved ufullstendig dominans produserer ett allel bare halvparten sa mye genprodukt. Heterozygoten har derfor en intermediar mengde, som gir en mellomliggende fenotype.`,
    },
    {
      id: 'bio1-5-4-def-kodominans',
      type: 'definition',
      title: 'Kodominans',
      content: 'Kodominans oppstar nar begge alleler i en heterozygot uttrykkes fullt ut i fenotypen - ingen maskerer den andre. Et klassisk eksempel er ABO-blodtypesystemet, der bade I^A og I^B uttrykkes hos individer med genotype I^A I^B, noe som gir blodtype AB.',
    },
    {
      id: 'bio1-5-4-blodtyper',
      type: 'text',
      content: `## Multiple alleler og blodtyper

Noen gener har mer enn to alleler i populasjonen. Hvert individ har fortsatt bare to alleler, men det finnes flere varianter a velge mellom.

### ABO-blodtypesystemet

Tre alleler: I^A, I^B, og i

**Dominansforhold:**
- I^A og I^B er kodominante (begge uttrykkes)
- Bade I^A og I^B er dominante over i

### Genotyper og fenotyper

| Genotype | Fenotype |
|----------|----------|
| I^A I^A | Blodtype A |
| I^A i | Blodtype A |
| I^B I^B | Blodtype B |
| I^B i | Blodtype B |
| I^A I^B | Blodtype AB |
| ii | Blodtype O |

### Blodtypefordeling i Norge

- O: ca. 39%
- A: ca. 45%
- B: ca. 11%
- AB: ca. 5%

### Blodoverforinger

Blodtype bestemmer hvilke blodtyper man kan motta:
- O: Kan gi til alle (universell giver)
- AB: Kan motta fra alle (universell mottaker)
- A: Kan gi til A og AB
- B: Kan gi til B og AB`,
    },
    {
      id: 'bio1-5-4-def-polygen',
      type: 'definition',
      title: 'Polygene egenskaper',
      content: 'Polygene egenskaper er egenskaper som pavirkes av flere gener. Hvert gen bidrar med en liten effekt, og summen av alle genene gir en kontinuerlig variasjon i fenotypen. Eksempler er hoyde, hudfarge og intelligens. Polygene egenskaper folger ofte en normalfordeling i populasjonen.',
    },
    {
      id: 'bio1-5-4-polygen',
      type: 'text',
      content: `## Polygene egenskaper

### Kjennetegn

- Flere gener pavirker samme egenskap
- Kontinuerlig variasjon (ikke diskrete kategorier)
- Normalfordeling i populasjonen
- Miljo spiller ofte stor rolle

### Eksempel: Hudfarge

Hudfarge hos mennesker pavirkes av minst 3 gener, hvert med to alleler (A/a, B/b, C/c):

- Mørke alleler (A, B, C) bidrar til melaninproduksjon
- Lyse alleler (a, b, c) bidrar mindre

| Antall morke alleler | Hudfarge |
|---------------------|----------|
| 6 (AABBCC) | Svart mork |
| 5 | Mork brun |
| 4 | Mellombrun |
| 3 | Lys brun |
| 2 | Beige |
| 1 | Svart lys |
| 0 (aabbcc) | Svart hvit |

### Arv av polygene egenskaper

Nar foreldre med mellomliggende fenotype far barn:
- De fleste barn far mellomliggende fenotype
- Noen far ekstreme fenotyper
- Fordelingen ligner en klokkeformet kurve`,
    },
    {
      id: 'bio1-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Blodtype-arv',
      problem: 'En kvinne med blodtype A (I^A i) og en mann med blodtype B (I^B i) far barn. Hvilke blodtyper kan barna fa?',
      solution: `**Losning:**

Foreldrenes genotyper:
- Mor: I^A i (blodtype A)
- Far: I^B i (blodtype B)

**Punnett-rute:**

| | I^A | i |
|---|-----|---|
| **I^B** | I^A I^B | I^B i |
| **i** | I^A i | ii |

**Mulige genotyper og fenotyper:**
- I^A I^B → Blodtype AB (1/4)
- I^A i → Blodtype A (1/4)
- I^B i → Blodtype B (1/4)
- ii → Blodtype O (1/4)

**Svar:** Barna kan ha alle fire blodtyper (A, B, AB eller O), hver med 25% sannsynlighet.`,
    },
    {
      id: 'bio1-5-4-example-2',
      type: 'example',
      title: 'Eksempel: Ufullstendig dominans',
      problem: 'Hos snapdragons (lowemunn) er blomstfarge bestemt av ufullstendig dominans. Rode blomster (R^R R^R) krysset med hvite (R^W R^W) gir rosa F1. Hva skjer hvis vi krysser to rosa planter?',
      solution: `**Losning:**

F1-planter: R^R R^W (rosa)

**Krysning: R^R R^W x R^R R^W**

**Punnett-rute:**

| | R^R | R^W |
|---|-----|-----|
| **R^R** | R^R R^R | R^R R^W |
| **R^W** | R^R R^W | R^W R^W |

**Resultat:**
- 1/4 R^R R^R = Rod
- 2/4 R^R R^W = Rosa
- 1/4 R^W R^W = Hvit

**Fenotype-forhold:** 1 rod : 2 rosa : 1 hvit

Ved ufullstendig dominans er fenotype-forholdet 1:2:1 (ikke 3:1), fordi vi kan skille heterozygoten fra homozygot dominant.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-5-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom ufullstendig dominans og kodominans?',
      options: [
        { id: 'a', text: 'Ved ufullstendig dominans far heterozygoten mellomliggende fenotype, ved kodominans uttrykkes begge alleler fullt', isCorrect: true },
        { id: 'b', text: 'De betyr det samme', isCorrect: false },
        { id: 'c', text: 'Ved kodominans far heterozygoten mellomliggende fenotype', isCorrect: false },
        { id: 'd', text: 'Begge gir 3:1-forhold', isCorrect: false },
      ],
      solution: 'Ved ufullstendig dominans blandes effektene (f.eks. rod + hvit = rosa). Ved kodominans uttrykkes begge alleler fullt og separat (f.eks. blodtype AB har bade A- og B-antigener).',
    },
    {
      id: 'bio1-5-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Et foreldrepar har blodtype A og blodtype B. Barnet deres har blodtype O. Hva er genotypene til foreldrene?',
      solution: 'For at barnet skal ha blodtype O (genotype ii), ma det arve i-allel fra begge foreldre. Forelderen med blodtype A ma derfor vare I^A i (ikke I^A I^A). Forelderen med blodtype B ma vare I^B i (ikke I^B I^B). Svar: Mor er I^A i og far er I^B i (eller omvendt).',
    },
    {
      id: 'bio1-5-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken blodtype kan IKKE fa barn med blodtype AB?',
      options: [
        { id: 'a', text: 'O og O', isCorrect: true },
        { id: 'b', text: 'A og B', isCorrect: false },
        { id: 'c', text: 'AB og O', isCorrect: false },
        { id: 'd', text: 'A og AB', isCorrect: false },
      ],
      solution: 'Blodtype O har genotype ii. For a ha blodtype AB ma barnet arve I^A fra en forelder og I^B fra den andre. To O-foreldre kan ikke gi noen av disse allelene, sa de kan ikke fa AB-barn.',
    },
    {
      id: 'bio1-5-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor hoyde hos mennesker viser kontinuerlig variasjon mens ertefroplanter viser diskrete kategorier (hoy/lav).',
      solution: 'Hoyde hos mennesker er en polygen egenskap - den pavirkes av mange gener, og hvert gen bidrar med en liten effekt. Summen av alle genene, pluss miljopavirkninger, gir kontinuerlig variasjon. Mendels erter hadde bare ett gen for hoyde med to alleler (dominant = hoy, recessiv = lav), noe som ga diskrete kategorier uten mellomformer.',
    },
    {
      id: 'bio1-5-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hos kyr viser pelsfarge kodominans: rode kyr (R^R R^R) krysset med hvite kyr (R^W R^W) gir roan-kyr (R^R R^W) med bade rode og hvite har. Sett opp krysningen R^R R^W x R^R R^W og beskriv avkommet.',
      solution: 'Punnett-rute for R^R R^W x R^R R^W: 1/4 R^R R^R (rode), 2/4 R^R R^W (roan), 1/4 R^W R^W (hvite). Fenotype-forhold: 1 rod : 2 roan : 1 hvit. Ved kodominans ser vi 1:2:1-forhold fordi heterozygoten har en distinkt fenotype (roan) der bade rode og hvite har er synlige separat - ikke blandet som ved ufullstendig dominans.',
      hints: ['Ved kodominans uttrykkes begge alleler - tenk pa hva det betyr for pelsfarge'],
    },
    {
      id: 'bio1-5-4-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange alleler for ABO-blodtype har hvert menneske?',
      options: [
        { id: 'a', text: '2', isCorrect: true },
        { id: 'b', text: '3', isCorrect: false },
        { id: 'c', text: '4', isCorrect: false },
        { id: 'd', text: '1', isCorrect: false },
      ],
      solution: 'Selv om det finnes 3 ulike alleler i populasjonen (I^A, I^B, i), har hvert individ bare 2 alleler - ett fra hver forelder. For eksempel I^A I^B, I^A i, I^B I^B, ii osv.',
    },
  ],
};

// ============================================================================
// Kapittel 5.5: Kjonsbundet arv og slektstavler
// ============================================================================

export const CHAPTER_BIOLOGI_1_5_5: TextbookChapter = {
  id: 'biologi-1-5-5',
  courseId: 'biologi-1',
  chapterNumber: '5.5',
  title: 'Kjonsbundet arv og slektstavler',
  description: 'X-bundet arv, slektstavleanalyse og genetisk radgivning.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare X-bundet arv og hvorfor det rammer menn oftere',
    'analysere slektstavler for arvemonstre',
    'forsta prinsippene bak genetisk radgivning',
    'beregne risiko for arvelige sykdommer',
  ],
  content: [
    {
      id: 'bio1-5-5-intro',
      type: 'text',
      content: `# Kjonsbundet arv og slektstavler

Noen egenskaper arves annerledes hos menn og kvinner fordi genene ligger pa kjonnskromosomene. Slektstavler er et viktig verktoy for a analysere arvemonstre og beregne risiko for genetiske sykdommer.

## Kjonnskromosomer

Mennesker har 23 kromosompar:
- 22 par autosomer (vanlige kromosomer)
- 1 par kjonnskromosomer (XX hos kvinner, XY hos menn)

## Gener pa kjonnskromosomene

- **X-kromosomet**: Stort, baerer ca. 800 gener
- **Y-kromosomet**: Lite, baerer ca. 50 gener (mest for mannlig utvikling)

Fordi X er sa mye storre enn Y, finnes mange gener bare pa X-kromosomet. Dette kalles X-bundet arv.`,
    },
    {
      id: 'bio1-5-5-def-xbundet',
      type: 'definition',
      title: 'X-bundet arv',
      content: 'X-bundet arv beskriver arv av gener som ligger pa X-kromosomet. Fordi menn bare har ett X-kromosom (XY), vil de alltid uttrykke X-bundne gener - de har ingen "backup". Kvinner har to X-kromosomer og kan vare baarere uten a vise symptomer. Derfor rammer X-bundne recessive sykdommer hovedsakelig menn.',
    },
    {
      id: 'bio1-5-5-xbundet',
      type: 'text',
      content: `## X-bundet recessiv arv

### Eksempel: Fargeblindhet

Genet for rod-gronn fargesyn ligger pa X-kromosomet.
- X^B = normalt fargesyn (dominant)
- X^b = fargeblindhet (recessiv)

### Genotyper og fenotyper

| Genotype | Kjonn | Fenotype |
|----------|-------|----------|
| X^B X^B | Kvinne | Normalt syn |
| X^B X^b | Kvinne | Normalt syn (baerer) |
| X^b X^b | Kvinne | Fargeblind |
| X^B Y | Mann | Normalt syn |
| X^b Y | Mann | Fargeblind |

### Hvorfor rammer det menn oftere?

- Kvinner trenger to kopier av X^b for a bli fargeblinde
- Menn trenger bare en kopi (fordi Y ikke har genet)
- Ca. 8% av menn er fargeblinde, men bare 0.5% av kvinner

### Arvemonster

- Fargeblinde menn far ALDRI fargeblinde sonner (far gir Y til sonner)
- Fargeblinde menn far ALLTID baerer-dotre (far gir X^b til dotre)
- Fargeblinde kvinner har ALLTID fargeblind far`,
    },
    {
      id: 'bio1-5-5-def-slektstavle',
      type: 'definition',
      title: 'Slektstavle (pedigree)',
      content: 'En slektstavle er et diagram som viser forekomst av en egenskap gjennom generasjoner i en familie. Menn tegnes som firkanter, kvinner som sirkler. Fylte symboler viser affiserte individer. Slektstavler brukes til a bestemme arvemonster (dominant/recessiv, autosomal/X-bundet) og beregne risiko for fremtidige barn.',
    },
    {
      id: 'bio1-5-5-slektstavle',
      type: 'text',
      content: `## Slektstavleanalyse

### Symboler i slektstavler

- ⬜ Mann, frisk
- ⬛ Mann, affisert
- ⚪ Kvinne, frisk
- ⚫ Kvinne, affisert
- ⬜⃝ Baerer (heterozygot)
- == Ekteskap/partnerskap
- | Barn (vertikal linje)
- — Sosken (horisontal linje)

### Trinn i slektstavleanalyse

**1. Bestem arvemonster:**
- Er det dominant eller recessiv?
- Er det autosomal eller X-bundet?

**2. Identifiser genotyper:**
- Start med affiserte individer
- Jobb deg bakover til foreldre
- Bruk logikk til a finne genotyper

**3. Beregn risiko:**
- Sett opp Punnett-ruter
- Beregn sannsynligheter

### Kjennetegn pa ulike arvemonstre

**Autosomal dominant:**
- Finnes i hver generasjon
- Affiserte har minst en affisert forelder
- Rammer begge kjonn likt

**Autosomal recessiv:**
- Kan hoppe over generasjoner
- To friske foreldre kan fa affisert barn
- Rammer begge kjonn likt

**X-bundet recessiv:**
- Rammer hovedsakelig menn
- Gar fra morfar via baerer-mor til sonnesonner
- Friske kvinner kan vare baarere`,
    },
    {
      id: 'bio1-5-5-def-genetiskrad',
      type: 'definition',
      title: 'Genetisk radgivning',
      content: 'Genetisk radgivning er en prosess der familier far informasjon om genetiske sykdommer, arvemonstre og risiko for a fa affiserte barn. Radgiveren hjelper familien med a forsta testresultater, beregne risiko, og gjore informerte valg om familieplanlegging og behandling.',
    },
    {
      id: 'bio1-5-5-radgivning',
      type: 'text',
      content: `## Genetisk radgivning

### Nar sokes genetisk radgivning?

- Kjent arvelig sykdom i familien
- Tidligere barn med genetisk tilstand
- Hoy alder ved graviditet
- Slektskap mellom foreldrene
- Fostervannsprove som viser avvik

### Hva innga r i genetisk radgivning?

1. **Innhenting av familiehistorie**
   - Lage detaljert slektstavle
   - Identifisere arvemonster

2. **Genetisk testing**
   - DNA-analyse for kjente mutasjoner
   - Kromosom-analyse

3. **Risikoberegning**
   - Sannsynlighet for a beare genet
   - Sannsynlighet for a fa affisert barn

4. **Informasjon og stotte**
   - Forklare resultatene
   - Diskutere valg og konsekvenser
   - Psykologisk stotte

### Etiske vurderinger

- Autonomi: Retten til a velge selv
- Informert samtykke: Forsta konsekvenser av testing
- Konfidensialitet: Beskytte personlig informasjon
- Ikke-retningsgivende radgivning: Presentere fakta uten a anbefale`,
    },
    {
      id: 'bio1-5-5-example-1',
      type: 'example',
      title: 'Eksempel: X-bundet arv av fargeblindhet',
      problem: 'En kvinne med normalt syn (baerer, X^B X^b) far barn med en fargeblind mann (X^b Y). Hva er sannsynligheten for at deres sonner og dotre blir fargeblinde?',
      solution: `**Losning:**

Foreldrenes genotyper:
- Mor: X^B X^b (baerer, normalt syn)
- Far: X^b Y (fargeblind)

**Punnett-rute:**

| | X^B | X^b |
|---|-----|-----|
| **X^b** | X^B X^b | X^b X^b |
| **Y** | X^B Y | X^b Y |

**Resultater:**

**Dotre:**
- X^B X^b = baerer, normalt syn (1/2)
- X^b X^b = fargeblind (1/2)
**Sannsynlighet for fargeblind datter: 50%**

**Sonner:**
- X^B Y = normalt syn (1/2)
- X^b Y = fargeblind (1/2)
**Sannsynlighet for fargeblind sonn: 50%**

I dette tilfellet kan bade dotre og sonner vare fargeblinde fordi mor er baerer og far er fargeblind.`,
    },
    {
      id: 'bio1-5-5-example-2',
      type: 'example',
      title: 'Eksempel: Slektstavleanalyse',
      problem: 'I en slektstavle ser vi at to friske foreldre far et barn med cystisk fibrose (CF). Bestem arvemonsteret og beregn risiko for at deres neste barn ogsa far CF.',
      solution: `**Losning:**

**Steg 1: Bestem arvemonster**
- To friske foreldre → Affisert barn
- Dette betyr at sykdommen ma vare RECESSIV
- Begge foreldre ma vare baarere (Ff)
- Sykdommen rammer begge kjonn likt → AUTOSOMAL

**Arvemonster: Autosomal recessiv**

**Steg 2: Genotyper**
- Foreldre: Ff x Ff
- Affisert barn: ff

**Steg 3: Beregn risiko**

| | F | f |
|---|---|---|
| **F** | FF | Ff |
| **f** | Ff | ff |

- 1/4 FF (frisk)
- 2/4 Ff (frisk baerer)
- 1/4 ff (affisert)

**Svar:** Sannsynligheten for at neste barn far cystisk fibrose er 1/4 (25%).

Hver graviditet har samme risiko - tidligere barn pavirker ikke sannsynligheten.`,
    },
  ],
  exercises: [
    {
      id: 'bio1-5-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvorfor rammer X-bundne recessive sykdommer oftere menn enn kvinner?',
      options: [
        { id: 'a', text: 'Fordi menn bare har ett X-kromosom og trenger bare en kopi av det recessive allelet', isCorrect: true },
        { id: 'b', text: 'Fordi menn er generelt svakere', isCorrect: false },
        { id: 'c', text: 'Fordi X-kromosomet fungerer bedre hos kvinner', isCorrect: false },
        { id: 'd', text: 'Fordi kvinner er immune mot slike sykdommer', isCorrect: false },
      ],
      solution: 'Menn har genotype XY. De har bare ett X-kromosom, sa et recessivt allel pa X vil alltid uttrykkes. Kvinner (XX) trenger to kopier av det recessive allelet for a vare affisert, og kan vare friske baarere med bare en kopi.',
    },
    {
      id: 'bio1-5-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'En fargeblind mann (X^b Y) far barn med en kvinne som har normalt syn og ingen familiehistorie med fargeblindhet (X^B X^B). Hva blir synstatusen til barna deres?',
      solution: 'Krysning: X^B X^B x X^b Y. Alle dotre far genotype X^B X^b (baerere med normalt syn). Alle sonner far genotype X^B Y (normalt syn). Ingen av barna vil vare fargeblinde, men alle dotrene vil vare baarere som kan overføre allelet til sine barn.',
      hints: ['Husk at fedre gir X til dotre og Y til sonner'],
    },
    {
      id: 'bio1-5-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'I en slektstavle hopper en sykdom over en generasjon - besteforeldre er affisert, foreldre er friske, og noen barnebarn er affisert. Hva slags arvemonster tyder dette pa?',
      options: [
        { id: 'a', text: 'Autosomal recessiv arv', isCorrect: true },
        { id: 'b', text: 'Autosomal dominant arv', isCorrect: false },
        { id: 'c', text: 'X-bundet dominant arv', isCorrect: false },
        { id: 'd', text: 'Y-bundet arv', isCorrect: false },
      ],
      solution: 'Nar en sykdom hopper over generasjoner, tyder det pa recessiv arv. Mellomgenerasjonen er friske baarere (heterozygote). Ved dominant arv ville sykdommen synes i hver generasjon.',
    },
    {
      id: 'bio1-5-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor en fargeblind kvinne alltid ma ha en fargeblind far.',
      solution: 'For at en kvinne skal vare fargeblind, ma hun ha genotype X^b X^b. Hun arver ett X-kromosom fra far og ett fra mor. Far gir ALLTID sitt X-kromosom til dotre (sonner far Y). Hvis datteren har X^b fra far, ma far ha vart fargeblind (X^b Y). Det er umulig for en fargeblind kvinne a ha en far med normalt syn.',
    },
    {
      id: 'bio1-5-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'To foreldre som begge har normalt syn far en fargeblind sonn. a) Hva er foreldrenes genotyper? b) Hva er sannsynligheten for at deres neste datter er baerer?',
      solution: 'a) Far ma ha normalt syn: X^B Y (kan ikke vare X^b Y, da ville han vart fargeblind). Mor ma vare baerer: X^B X^b (sonnen fikk X^b fra henne). b) Dotre far X fra far (X^B) og X fra mor (enten X^B eller X^b). Punnett-rute for dotre: 1/2 X^B X^B (ikke baerer) og 1/2 X^B X^b (baerer). Sannsynlighet for at neste datter er baerer: 50%.',
      hints: ['Mors genotype kan utledes fra sonnens genotype'],
    },
    {
      id: 'bio1-5-5-ex6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er formalet med genetisk radgivning?',
      options: [
        { id: 'a', text: 'A gi familier informasjon om genetiske sykdommer og risiko for a hjelpe dem ta informerte valg', isCorrect: true },
        { id: 'b', text: 'A anbefale familier a ikke fa barn', isCorrect: false },
        { id: 'c', text: 'A finne kur for genetiske sykdommer', isCorrect: false },
        { id: 'd', text: 'A forhindre alle genetiske sykdommer', isCorrect: false },
      ],
      solution: 'Genetisk radgivning gir informasjon og stotte, men tar ikke beslutninger for familien. Radgiveren forklarer arvemonstre, beregner risiko, og hjelper familien a forsta deres valg - men respekterer familiens autonomi til a ta egne beslutninger.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const BIOLOGI_1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_BIOLOGI_1_5_1,
  CHAPTER_BIOLOGI_1_5_2,
  CHAPTER_BIOLOGI_1_5_3,
  CHAPTER_BIOLOGI_1_5_4,
  CHAPTER_BIOLOGI_1_5_5,
];
