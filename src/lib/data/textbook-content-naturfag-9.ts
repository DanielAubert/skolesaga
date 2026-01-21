/**
 * Tekstbok innhold for Naturfag 9. klasse
 *
 * Følger LK20 læreplan for naturfag ungdomstrinn.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Genetikk - DNA og gener
// ============================================================================

export const CHAPTER_NATURFAG_9_1_1: TextbookChapter = {
  id: 'naturfag-9-1-1',
  courseId: 'naturfag-9',
  chapterNumber: '1.1',
  title: 'DNA og gener',
  description: 'Lær om DNA-molekylets oppbygging og hvordan gener styrer egenskaper.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hovedtrekkene i genetisk arv og hvordan arv og miljø spiller sammen'
  ],
  content: [
    {
      id: 'nat-9-1-1-intro',
      type: 'text',
      content: `
# DNA og gener

**DNA** (deoksyribonukleinsyre) er molekylet som inneholder alle oppskriftene
for å bygge og drifte en organisme. DNA finnes i cellekjernen hos alle
levende organismer.
      `
    },
    {
      id: 'nat-9-1-1-def-dna',
      type: 'definition',
      title: 'DNA-strukturen',
      content: `**DNA** er formet som en dobbel helix (vridd stige) som består av:

**Sukker-fosfat-ryggrad**: Sidene av stigen

**Baseparene**: Trinnene i stigen
- **A**denin parer med **T**ymin (A-T)
- **G**uanin parer med **C**ytosin (G-C)

Rekkefølgen av basene (A, T, G, C) utgjør den genetiske koden.`
    },
    {
      id: 'nat-9-1-1-def-gen',
      type: 'definition',
      title: 'Gener og kromosomer',
      content: `**Gen**: Et avsnitt av DNA som inneholder oppskriften for ett protein eller én egenskap.

**Kromosom**: DNA pakket sammen med proteiner. Mennesker har 46 kromosomer (23 par).

**Genom**: Hele settet av gener i en organisme.

Vi har ca. 20 000 gener som bestemmer alt fra øyenfarge til blodtype.`
    },
    {
      id: 'nat-9-1-1-protein',
      type: 'text',
      title: 'Fra gen til egenskap',
      content: `
## Proteinsyntese

Genene inneholder oppskrifter for proteiner:

1. **Transkripsjon**: DNA-koden kopieres til mRNA i kjernen
2. **Translasjon**: mRNA leses av ribosomer, som bygger proteiner

Proteiner utfører de fleste funksjoner i cellen og bestemmer organismens egenskaper.
      `
    },
    {
      id: 'nat-9-1-1-example',
      type: 'example',
      title: 'Eksempel: Øyenfarge',
      problem: 'Hvordan bestemmer genene øyenfargen din?',
      solution: `**Gen for øyenfarge:**

1. Du arver ett gen for øyenfarge fra mor og ett fra far
2. Genene inneholder oppskrift for et protein (melanin)
3. Mengden og typen melanin bestemmer øyenfargen:
   - Mye melanin → brune øyne
   - Lite melanin → blå øyne
   - Middels → grønne/hasel øyne

4. Noen genvarianter er **dominante** (f.eks. brunt)
5. Andre er **recessive** (f.eks. blått)

Brunt er dominant over blått: Har du ett brunt-gen og ett blått-gen, får du brune øyne.`
    },
    {
      id: 'nat-9-1-1-tip',
      type: 'tip',
      title: 'Huskeregel for baseparene',
      content: `**A-T** og **G-C** - husk det slik:
- **A**uto og **T**raktor
- **G**ris og **C**ykel

A parer alltid med T, G parer alltid med C!`
    },
    {
      id: 'nat-9-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-9-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvilke baser parer sammen i DNA?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig baseparing.',
            solution: 'A-T og G-C',
            multipleChoiceOptions: [
              'A-T og G-C',
              'A-G og T-C',
              'A-C og G-T',
              'A-A og T-T'
            ],
          },
        ],
        solution: 'Adenin parer med Tymin (A-T), og Guanin parer med Cytosin (G-C).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-9-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange kromosomer har mennesker?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig antall kromosomer hos mennesker.',
            solution: '46 (23 par)',
            multipleChoiceOptions: [
              '46 (23 par)',
              '23 (enkle)',
              '48 (24 par)',
              '92 (46 par)'
            ],
          },
        ],
        solution: 'Mennesker har 46 kromosomer, organisert i 23 par (ett fra mor, ett fra far i hvert par).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-9-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er et gen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste definisjonen av et gen.',
            solution: 'Et avsnitt av DNA med oppskrift for ett protein',
            multipleChoiceOptions: [
              'Et avsnitt av DNA med oppskrift for ett protein',
              'En hel kromosom',
              'Alle kromosomene i en celle',
              'En celledelingsprosess'
            ],
          },
        ],
        solution: 'Et gen er et avsnitt av DNA som koder for ett protein eller én egenskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-9-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Forstå DNA-strukturen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvis en DNA-tråd har sekvensen ATGC, hva er sekvensen på den komplementære tråden?',
            solution: 'TACG (A parer med T, T parer med A, G parer med C, C parer med G)',
            multipleChoiceOptions: [
              'TACG',
              'ATGC',
              'GCTA',
              'CGAT'
            ],
          },
          {
            label: 'b',
            task: 'Forklar hva som menes med "dobbel helix".',
            solution: 'DNA består av to tråder som vrir seg rundt hverandre som en vindeltrapp.',
            multipleChoiceOptions: [
              'To tråder som vrir seg rundt hverandre som en vindeltrapp',
              'En enkel rett tråd',
              'En sirkelformet ring',
              'Fire tråder flettet sammen'
            ],
          }
        ],
        solution: 'DNA-strukturen er en dobbel helix med komplementære basepar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Arv og genetisk variasjon
// ============================================================================

export const CHAPTER_NATURFAG_9_1_2: TextbookChapter = {
  id: 'naturfag-9-1-2',
  courseId: 'naturfag-9',
  chapterNumber: '1.2',
  title: 'Arv og genetisk variasjon',
  description: 'Forstå hvordan egenskaper arves fra foreldre til barn.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hovedtrekkene i genetisk arv og hvordan arv og miljø spiller sammen'
  ],
  content: [
    {
      id: 'nat-9-1-2-intro',
      type: 'text',
      content: `
# Arv og genetisk variasjon

Vi arver halvparten av genene våre fra mor og halvparten fra far.
Dette gir opphav til den genetiske variasjonen vi ser mellom individer.
      `
    },
    {
      id: 'nat-9-1-2-def-alleler',
      type: 'definition',
      title: 'Alleler',
      content: `**Alleler** er ulike varianter av samme gen.

Eksempel: Genet for øyenfarge kan ha:
- Allelet for brune øyne (B)
- Allelet for blå øyne (b)

**Homozygot**: Har to like alleler (BB eller bb)
**Heterozygot**: Har to ulike alleler (Bb)`
    },
    {
      id: 'nat-9-1-2-dominans',
      type: 'text',
      title: 'Dominans og recessivitet',
      content: `
## Dominante og recessive alleler

**Dominante alleler** (store bokstaver): Kommer til uttrykk selv om du bare har én kopi.

**Recessive alleler** (små bokstaver): Kommer bare til uttrykk hvis du har to kopier.

| Genotype | Fenotype (utseende) |
|----------|---------------------|
| BB | Brune øyne |
| Bb | Brune øyne (B er dominant) |
| bb | Blå øyne |
      `
    },
    {
      id: 'nat-9-1-2-krysning',
      type: 'text',
      title: 'Krysningsskjema',
      content: `
## Punnett-ruten

Et **krysningsskjema** (Punnett-rute) viser sannsynligheten for ulike genotyper hos avkommet.

Eksempel: Begge foreldre er Bb (heterozygote for øyenfarge)

|   | B | b |
|---|---|---|
| **B** | BB | Bb |
| **b** | Bb | bb |

Resultat:
- 25% BB (brune)
- 50% Bb (brune)
- 25% bb (blå)

**75% brune øyne, 25% blå øyne**
      `
    },
    {
      id: 'nat-9-1-2-example',
      type: 'example',
      title: 'Arv av en egenskap',
      problem: 'En mor har genotypen Bb for øyenfarge (brune øyne). Faren har genotypen bb (blå øyne). Hvilke øyenfarger kan barna få?',
      solution: `**Krysningsskjema:**

|   | b | b |
|---|---|---|
| **B** | Bb | Bb |
| **b** | bb | bb |

**Resultat:**
- 50% Bb (brune øyne)
- 50% bb (blå øyne)

Barna har 50% sjanse for brune øyne og 50% sjanse for blå øyne.`
    },
    {
      id: 'nat-9-1-2-miljo',
      type: 'note',
      title: 'Arv og miljø',
      content: `Mange egenskaper påvirkes av **både arv og miljø**:

**Høyde**: Genene setter et potensial, men ernæring påvirker hvor høy du faktisk blir.

**Intelligens**: Både gener og oppvekstmiljø spiller inn.

**Hudfarge**: Genetisk bestemt, men soleksponering påvirker pigmentering.

Dette kalles "nature vs. nurture" - arv vs. miljø.`
    },
    {
      id: 'nat-9-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-9-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr det å være heterozygot?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av heterozygot.',
            solution: 'Å ha to ulike alleler for en egenskap (f.eks. Bb)',
            multipleChoiceOptions: [
              'Å ha to ulike alleler for en egenskap (f.eks. Bb)',
              'Å ha to like alleler (f.eks. BB)',
              'Å mangle et gen',
              'Å ha for mange kromosomer'
            ],
          },
        ],
        solution: 'Heterozygot betyr at du har to forskjellige alleler for samme gen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-9-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvis brunt hår (B) er dominant over blondt hår (b), hvilken fenotype har en person med genotypen Bb?',
        subTasks: [
          {
            label: 'a',
            task: 'Bestem fenotypen for genotypen Bb.',
            solution: 'Brunt hår',
            multipleChoiceOptions: [
              'Brunt hår',
              'Blondt hår',
              'En blanding',
              'Umulig å vite'
            ],
          },
        ],
        solution: 'Siden B er dominant, vil personen ha brunt hår selv om de også har et b-allel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-9-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Begge foreldrene har genotypen Bb for hårfarge.',
        subTasks: [
          {
            label: 'a',
            task: 'Tegn et krysningsskjema og finn sannsynligheten for blondt hår hos barnet.',
            solution: '25% sjanse for blondt hår (bb)',
            multipleChoiceOptions: [
              '25% (1 av 4 muligheter)',
              '50% (2 av 4 muligheter)',
              '75% (3 av 4 muligheter)',
              '0% (ingen mulighet)'
            ],
          },
          {
            label: 'b',
            task: 'Hva er sannsynligheten for at barnet blir heterozygot (Bb)?',
            solution: '50% (2 av 4 muligheter er Bb)',
            multipleChoiceOptions: [
              '50% (2 av 4)',
              '25% (1 av 4)',
              '75% (3 av 4)',
              '100%'
            ],
          }
        ],
        solution: 'Fra Bb × Bb får vi: 25% BB, 50% Bb, 25% bb.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-9-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom arv og miljø.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi et eksempel på en egenskap som påvirkes av BÅDE arv og miljø.',
            solution: 'Høyde (gener + ernæring), vekt (gener + livsstil), muskelstyrke (gener + trening)',
            multipleChoiceOptions: [
              'Høyde - påvirkes av gener og ernæring',
              'Blodtype - bestemmes kun av gener',
              'Språk du snakker - bestemmes kun av miljø',
              'Antall fingre - bestemmes kun av gener'
            ],
          }
        ],
        solution: 'De fleste komplekse egenskaper påvirkes av både genetiske faktorer og miljøpåvirkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Evolusjon og naturlig utvalg
// ============================================================================

export const CHAPTER_NATURFAG_9_2_1: TextbookChapter = {
  id: 'naturfag-9-2-1',
  courseId: 'naturfag-9',
  chapterNumber: '2.1',
  title: 'Evolusjon og naturlig utvalg',
  description: 'Forstå evolusjonsteoriens grunnprinsipper.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gi eksempler på og forklare hvordan naturlig utvalg fører til evolusjon'
  ],
  content: [
    {
      id: 'nat-9-2-1-intro',
      type: 'text',
      content: `
# Evolusjon og naturlig utvalg

**Evolusjon** er den gradvise endringen i arvelige egenskaper i en populasjon
over generasjoner. Charles Darwin formulerte teorien om **naturlig utvalg**
som forklarer hvordan evolusjon skjer.
      `
    },
    {
      id: 'nat-9-2-1-def-evolusjon',
      type: 'definition',
      title: 'Darwins teori',
      content: `**Naturlig utvalg** baserer seg på fire observasjoner:

1. **Variasjon**: Individer i en art er forskjellige
2. **Arv**: Egenskaper arves fra foreldre til avkom
3. **Overreproduksjon**: Det fødes flere avkom enn miljøet kan støtte
4. **Ulikt reproduksjonssuksess**: Individer med fordelaktige egenskaper overlever og reproduserer bedre

Over tid vil fordelaktige egenskaper bli vanligere i populasjonen.`
    },
    {
      id: 'nat-9-2-1-tilpasning',
      type: 'text',
      title: 'Tilpasning',
      content: `
## Tilpasninger

En **tilpasning** er en arvelig egenskap som øker en organismes sjanse for overlevelse og reproduksjon i sitt miljø.

**Eksempler på tilpasninger:**
- Kamuflasje (isbjørnens hvite pels)
- Giftstoffer (slanger, sopp)
- Raske bein (gepard)
- Skarpt syn (ørn)
- Lange tunger (kolibri, sommerfugl)
      `
    },
    {
      id: 'nat-9-2-1-example',
      type: 'example',
      title: 'Bjørkemåleren',
      problem: 'Forklar hvordan fargen på bjørkemåleren (en sommerfugl) endret seg under den industrielle revolusjon.',
      solution: `**Før industrialiseringen:**
- Bjørkestammer var lyse med lav
- Lyse bjørkemålere var kamuflert → overlevde
- Mørke bjørkemålere ble spist → sjeldne

**Under industrialiseringen:**
- Sot fra fabrikker gjorde trærne mørke
- Mørke bjørkemålere ble kamuflert → overlevde
- Lyse bjørkemålere ble spist → ble sjeldne

**Etter renere luft:**
- Trærne ble lyse igjen
- Lyse bjørkemålere økte i antall igjen

Dette er et klassisk eksempel på naturlig utvalg i aksjon!`
    },
    {
      id: 'nat-9-2-1-bevis',
      type: 'text',
      title: 'Bevis for evolusjon',
      content: `
## Bevis for evolusjon

1. **Fossilfunn**: Viser gradvise endringer over millioner av år

2. **Anatomiske likheter**: Samme grunnstruktur i ulike arter (f.eks. armer hos mennesker, vinger hos flaggermus, finner hos hval)

3. **DNA-bevis**: Arter som ligner hverandre har mer likt DNA

4. **Embryoutvikling**: Lignende utviklingsstadier hos beslektede arter

5. **Observasjoner i dag**: Antibiotikaresistens hos bakterier
      `
    },
    {
      id: 'nat-9-2-1-warning',
      type: 'warning',
      title: 'Vanlige misforståelser',
      content: `**Evolusjon betyr IKKE:**
- At mennesker stammer fra sjimpanser (vi deler en felles forfar)
- At individer utvikler seg (populasjoner utvikler seg over generasjoner)
- At organismer "velger" å tilpasse seg
- At evolusjon har et mål eller retning

Evolusjon er en ikke-styrt prosess basert på tilfeldig variasjon og naturlig utvalg.`
    },
    {
      id: 'nat-9-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-9-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er naturlig utvalg?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av naturlig utvalg.',
            solution: 'Individer med fordelaktige egenskaper overlever og får flere avkom',
            multipleChoiceOptions: [
              'Individer med fordelaktige egenskaper overlever og får flere avkom',
              'Organismer bestemmer selv hvordan de vil utvikle seg',
              'Mennesker velger hvilke dyr som skal overleve',
              'Alle individer i en art er like'
            ],
          },
        ],
        solution: 'Naturlig utvalg er prosessen der individer med egenskaper som passer miljøet har større sjanse for å overleve og formere seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-9-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er en tilpasning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av tilpasning.',
            solution: 'En arvelig egenskap som øker overlevelse og reproduksjon',
            multipleChoiceOptions: [
              'En arvelig egenskap som øker overlevelse og reproduksjon',
              'En ferdighet dyret lærer i løpet av livet',
              'En sykdom som påvirker arten',
              'En endring som skjer hos ett individ'
            ],
          },
        ],
        solution: 'Tilpasninger er arvelige egenskaper som har utviklet seg gjennom naturlig utvalg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-9-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken påstand om evolusjon er RIKTIG?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den korrekte påstanden.',
            solution: 'Mennesker og sjimpanser deler en felles forfar',
            multipleChoiceOptions: [
              'Mennesker og sjimpanser deler en felles forfar',
              'Mennesker stammer direkte fra sjimpanser',
              'Evolusjon har et mål om å lage "bedre" arter',
              'Enkeltindivider kan utvikle seg gjennom evolusjon'
            ],
          },
        ],
        solution: 'Mennesker og sjimpanser er søskenbarn på evolusjonstreet - vi har en felles forfar som levde for ca. 6-7 millioner år siden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-9-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar evolusjon med eksempler.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi et eksempel på en tilpasning hos et dyr og forklar hvordan den øker overlevelse.',
            solution: 'Eksempel: Geparden har lange, lette bein som gjør at den kan løpe opptil 110 km/t for å fange byttedyr. Raskere geparden = bedre jeger = flere avkom.',
            multipleChoiceOptions: [
              'Geparden har raske bein for å fange byttedyr',
              'Isbjørnen har hvit pels bare fordi den liker hvitt',
              'Fugler har vinger fordi de bestemte seg for å fly',
              'Fisker lever i vann fordi det er kaldt på land'
            ],
          },
          {
            label: 'b',
            task: 'Forklar hvorfor antibiotikaresistens hos bakterier er et bevis for evolusjon.',
            solution: 'Når vi bruker antibiotika, dør de fleste bakterier, men noen få med naturlig resistens overlever. Disse formerer seg, og snart består hele populasjonen av resistente bakterier. Dette er naturlig utvalg i aksjon.',
            multipleChoiceOptions: [
              'Resistente bakterier overlever og formerer seg - naturlig utvalg',
              'Bakterier bestemmer seg for å bli resistente',
              'Antibiotika gjør bakteriene sterkere',
              'Bakterier lærer å motstå antibiotika'
            ],
          }
        ],
        solution: 'Evolusjon skjer når egenskaper som øker overlevelse blir vanligere i populasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Artsdannelse og livets tre
// ============================================================================

export const CHAPTER_NATURFAG_9_2_2: TextbookChapter = {
  id: 'naturfag-9-2-2',
  courseId: 'naturfag-9',
  chapterNumber: '2.2',
  title: 'Artsdannelse og livets tre',
  description: 'Forstå hvordan nye arter dannes og hvordan alt liv er beslektet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gi eksempler på og forklare hvordan naturlig utvalg fører til evolusjon'
  ],
  content: [
    {
      id: 'nat-9-2-2-intro',
      type: 'text',
      content: `
# Artsdannelse og livets tre

Over lange tidsrom kan evolusjon føre til dannelse av helt nye arter.
Alle arter på jorden er beslektet og kan spores tilbake til en felles
urorganisme for ca. 3,8 milliarder år siden.
      `
    },
    {
      id: 'nat-9-2-2-def-art',
      type: 'definition',
      title: 'Hva er en art?',
      content: `En **art** er en gruppe organismer som kan formere seg med hverandre og få fruktbart avkom.

Eksempel:
- Hest + esel = muldyr (ufruktbart) → Hest og esel er ulike arter
- Labrador + puddel = labradoodle (fruktbart) → Samme art (hund)`
    },
    {
      id: 'nat-9-2-2-artsdannelse',
      type: 'text',
      title: 'Hvordan nye arter dannes',
      content: `
## Artsdannelse

Nye arter dannes vanligvis når en populasjon blir **isolert**:

1. **Geografisk isolasjon**: En fjellkjede, elv eller hav skiller populasjoner

2. **Genetisk divergens**: Populasjonene utvikler seg uavhengig gjennom naturlig utvalg

3. **Reproduktiv isolasjon**: Etter lang nok tid kan de ikke lenger få avkom sammen

4. **Ny art**: De er nå to separate arter
      `
    },
    {
      id: 'nat-9-2-2-eksempel',
      type: 'example',
      title: 'Darwinfinker',
      problem: 'Hvordan kan Darwins finker på Galápagosøyene brukes til å forklare artsdannelse?',
      solution: `**Darwins finker:**

1. **Opprinnelse**: Finker fra fastlandet kom til Galápagos

2. **Isolasjon**: Øyene er langt fra hverandre

3. **Ulike miljøer**: Hver øy hadde ulik mat tilgjengelig
   - Noen øyer: Store, harde frø
   - Andre øyer: Små frø
   - Noen øyer: Insekter

4. **Naturlig utvalg**: Finker med nebb best tilpasset maten overlevde

5. **Resultat**: 13+ arter med svært ulike nebb:
   - Store, kraftige nebb (knuser frø)
   - Tynne, spisse nebb (fanger insekter)
   - Mellomstore nebb (allsidig)`
    },
    {
      id: 'nat-9-2-2-livetstre',
      type: 'text',
      title: 'Livets tre',
      content: `
## Livets tre

**Livets tre** er en modell som viser slektskapet mellom alle arter.

**Hovedgrener:**
- **Bakterier** (prokaryoter uten kjerne)
- **Arkeer** (prokaryoter, ofte ekstremofiler)
- **Eukaryoter** (celler med kjerne):
  - Dyr
  - Planter
  - Sopp
  - Protister

Jo nærmere to arter er på treet, jo mer likt DNA har de.
      `
    },
    {
      id: 'nat-9-2-2-note',
      type: 'note',
      title: 'Tidsskala',
      content: `**Viktige hendelser i livets historie:**
- 3,8 mrd år: Første liv (enkle celler)
- 2,4 mrd år: Oksygen i atmosfæren
- 600 mill år: Første flercellede dyr
- 500 mill år: Første fisk
- 400 mill år: Planter og dyr på land
- 230 mill år: Første dinosaurer
- 66 mill år: Dinosaurenes utryddelse
- 6 mill år: Menneskelinjens forfar
- 300 000 år: Homo sapiens`
    },
    {
      id: 'nat-9-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-9-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner en art?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste definisjonen av art.',
            solution: 'Organismer som kan få fruktbart avkom sammen',
            multipleChoiceOptions: [
              'Organismer som kan få fruktbart avkom sammen',
              'Alle dyr som ser like ut',
              'Dyr som lever i samme område',
              'Dyr med samme farge'
            ],
          },
        ],
        solution: 'En art defineres biologisk som organismer som kan formere seg og få fruktbart avkom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-9-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er vanligvis første steg i artsdannelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser første steg i artsdannelse.',
            solution: 'Geografisk isolasjon',
            multipleChoiceOptions: [
              'Geografisk isolasjon',
              'Mutasjoner',
              'Masseutryddelse',
              'Klimaendring'
            ],
          },
        ],
        solution: 'Artsdannelse starter ofte med at populasjoner blir geografisk adskilt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-9-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva viser "livets tre"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva livets tre representerer.',
            solution: 'Slektskapet mellom alle arter på jorden',
            multipleChoiceOptions: [
              'Slektskapet mellom alle arter på jorden',
              'Hvordan trær vokser',
              'Matnettet i skogen',
              'Næringskjeden i naturen'
            ],
          },
        ],
        solution: 'Livets tre viser evolusjonære slektskapsforhold - alle arter kan spores tilbake til felles forfedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-9-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar artsdannelse.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv stegene i artsdannelse fra én populasjon til to arter.',
            solution: '1. Populasjon splittes (f.eks. av en elv). 2. Populasjonene utvikler seg separat. 3. Etter lang tid kan de ikke lenger få avkom sammen = to arter.',
            multipleChoiceOptions: [
              '1. Geografisk splitting, 2. Separat utvikling, 3. Reproduktiv isolasjon',
              '1. Mutasjoner, 2. Alle dør, 3. Nye arter oppstår',
              '1. Klimaendring, 2. Alle tilpasser seg likt',
              '1. Dyrene bestemmer seg for å bli ulike'
            ],
          }
        ],
        solution: 'Artsdannelse skjer gjennom isolasjon, divergerende evolusjon og til slutt reproduktiv isolasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Elektrisitet - Strøm og spenning
// ============================================================================

export const CHAPTER_NATURFAG_9_3_1: TextbookChapter = {
  id: 'naturfag-9-3-1',
  courseId: 'naturfag-9',
  chapterNumber: '3.1',
  title: 'Strøm og spenning',
  description: 'Forstå grunnleggende begreper i elektrisitet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for begrepene strøm, spenning, resistans og effekt og bruke dem i beregninger'
  ],
  content: [
    {
      id: 'nat-9-3-1-intro',
      type: 'text',
      content: `
# Strøm og spenning

Elektrisitet handler om bevegelse av elektriske ladninger. For å forstå
elektrisitet må vi kjenne til begrepene **strøm**, **spenning** og **motstand**.
      `
    },
    {
      id: 'nat-9-3-1-def-strom',
      type: 'definition',
      title: 'Elektrisk strøm',
      content: `**Elektrisk strøm (I)** er bevegelse av elektriske ladninger (elektroner) gjennom en leder.

**Enhet**: Ampere (A)

**Analogi**: Tenk på elektroner som vann i et rør - strømmen er hvor mye vann som flyter forbi per sekund.

I metaller er det elektronene som beveger seg. De flyter fra minus (-) til pluss (+).`
    },
    {
      id: 'nat-9-3-1-def-spenning',
      type: 'definition',
      title: 'Spenning',
      content: `**Spenning (U)** er "trykket" som driver elektronene rundt i kretsen.

**Enhet**: Volt (V)

**Analogi**: Spenning er som vanntrykket - jo høyere trykk, jo mer vann (strøm) flyter.

En vanlig batterispenning er 1,5 V. Stikkontakter i Norge har 230 V.`
    },
    {
      id: 'nat-9-3-1-krets',
      type: 'text',
      title: 'Elektrisk krets',
      content: `
## En komplett krets

For at strøm skal flyte, må vi ha en **lukket krets**:

1. **Spenningskilde** (batteri, stikkontakt) - gir energi
2. **Leder** (ledning) - elektroner kan bevege seg
3. **Forbruker** (lyspære, motor) - bruker energi
4. **Bryter** - åpner/lukker kretsen

Kretsen må være lukket (uten brudd) for at strømmen skal flyte.
      `
    },
    {
      id: 'nat-9-3-1-def-motstand',
      type: 'definition',
      title: 'Motstand',
      content: `**Motstand (R)** er hvor vanskelig det er for strømmen å flyte gjennom en komponent.

**Enhet**: Ohm (Ω)

**Analogi**: Motstand er som et trangt rør - jo trangere, jo vanskeligere for vannet å flyte.

Høy motstand = liten strøm (ved gitt spenning)
Lav motstand = stor strøm`
    },
    {
      id: 'nat-9-3-1-ohm',
      type: 'text',
      title: 'Ohms lov',
      content: `
## Ohms lov

Sammenhengen mellom spenning, strøm og motstand:

$$U = R \\cdot I$$

eller

$$I = \\frac{U}{R}$$  og  $$R = \\frac{U}{I}$$

**U** = spenning (volt)
**R** = motstand (ohm)
**I** = strøm (ampere)
      `
    },
    {
      id: 'nat-9-3-1-example',
      type: 'example',
      title: 'Beregning med Ohms lov',
      problem: 'En lyspære har motstand 20 Ω og er koblet til et 6 V batteri. Hvor stor strøm går gjennom lyspæren?',
      solution: `**Gitt:**
- U = 6 V
- R = 20 Ω
- I = ?

**Løsning:**
$$I = \\frac{U}{R} = \\frac{6\\text{ V}}{20\\text{ Ω}} = 0,3\\text{ A}$$

**Svar:** Det går 0,3 A (300 mA) gjennom lyspæren.`
    },
    {
      id: 'nat-9-3-1-tip',
      type: 'tip',
      title: 'Husk URI-trekanten',
      content: `For å huske Ohms lov, bruk trekanten:

      U
     ___
    | R·I |

Dekk til det du leter etter:
- Dekk U → R·I (U = R × I)
- Dekk R → U/I (R = U / I)
- Dekk I → U/R (I = U / R)`
    },
    {
      id: 'nat-9-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-9-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er enheten for elektrisk strøm?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig enhet for strøm.',
            solution: 'Ampere (A)',
            multipleChoiceOptions: [
              'Ampere (A)',
              'Volt (V)',
              'Ohm (Ω)',
              'Watt (W)'
            ],
          },
        ],
        solution: 'Elektrisk strøm måles i ampere (A).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-9-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva skjer med strømmen hvis motstanden øker, men spenningen er konstant?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv effekten på strømmen.',
            solution: 'Strømmen synker',
            multipleChoiceOptions: [
              'Strømmen synker',
              'Strømmen øker',
              'Strømmen forblir lik',
              'Strømmen stopper helt'
            ],
          },
        ],
        solution: 'Ifølge Ohms lov (I = U/R) vil strømmen synke når motstanden øker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-9-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'En motstand på 100 Ω er koblet til 12 V. Beregn strømmen.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn strømmen gjennom motstanden.',
            solution: '0,12 A (120 mA)',
            multipleChoiceOptions: [
              '0,12 A (120 mA)',
              '12 A',
              '1,2 A',
              '1200 A'
            ],
          },
        ],
        solution: 'I = U/R = 12 V / 100 Ω = 0,12 A',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-9-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Bruk Ohms lov til å løse problemene.',
        subTasks: [
          {
            label: 'a',
            task: 'En lampe trekker 0,5 A når den er koblet til 9 V. Hva er motstanden?',
            solution: 'R = U/I = 9/0,5 = 18 Ω',
            multipleChoiceOptions: [
              '18 Ω',
              '4,5 Ω',
              '9,5 Ω',
              '0,056 Ω'
            ],
          },
          {
            label: 'b',
            task: 'En motstand på 50 Ω skal ha en strøm på 0,4 A. Hvilken spenning trengs?',
            solution: 'U = R × I = 50 × 0,4 = 20 V',
            multipleChoiceOptions: [
              '20 V',
              '125 V',
              '50,4 V',
              '12,5 V'
            ],
          }
        ],
        solution: 'Bruk Ohms lov: U = R·I, I = U/R, R = U/I',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Effekt og energi
// ============================================================================

export const CHAPTER_NATURFAG_9_3_2: TextbookChapter = {
  id: 'naturfag-9-3-2',
  courseId: 'naturfag-9',
  chapterNumber: '3.2',
  title: 'Effekt og energi',
  description: 'Lær om elektrisk effekt og energiforbruk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for begrepene strøm, spenning, resistans og effekt og bruke dem i beregninger'
  ],
  content: [
    {
      id: 'nat-9-3-2-intro',
      type: 'text',
      content: `
# Effekt og energi

**Effekt** forteller hvor raskt energi omdannes. **Energiforbruk** er hvor
mye energi som brukes totalt over tid.
      `
    },
    {
      id: 'nat-9-3-2-def-effekt',
      type: 'definition',
      title: 'Elektrisk effekt',
      content: `**Effekt (P)** er hvor mye energi som omdannes per sekund.

**Enhet**: Watt (W)

**Formel:**
$$P = U \\cdot I$$

der U er spenning (V) og I er strøm (A).

Alternativt (ved bruk av Ohms lov):
$$P = I^2 \\cdot R = \\frac{U^2}{R}$$`
    },
    {
      id: 'nat-9-3-2-typisk',
      type: 'text',
      title: 'Typiske effektverdier',
      content: `
## Effekt for vanlige apparater

| Apparat | Typisk effekt |
|---------|---------------|
| LED-lyspære | 5-15 W |
| Gammeldags lyspære | 60-100 W |
| Laptop | 30-60 W |
| TV | 50-200 W |
| Vaskemaskin | 500-2000 W |
| Støvsuger | 1000-2000 W |
| Varmeovn | 1000-3000 W |
| Komfyr | 2000-8000 W |
      `
    },
    {
      id: 'nat-9-3-2-def-energi',
      type: 'definition',
      title: 'Elektrisk energi',
      content: `**Energi (E)** er effekt ganger tid.

**Formel:**
$$E = P \\cdot t$$

**Enheter:**
- Joule (J) = Watt × sekund
- Kilowattime (kWh) = Kilowatt × time

**Omregning:**
1 kWh = 3 600 000 J

Strømregningen oppgir energiforbruk i kWh.`
    },
    {
      id: 'nat-9-3-2-example',
      type: 'example',
      title: 'Beregn energiforbruk',
      problem: 'En varmeovn på 2000 W står på i 3 timer. Hvor mye energi brukes, og hva koster det hvis strømprisen er 1,50 kr/kWh?',
      solution: `**Gitt:**
- P = 2000 W = 2 kW
- t = 3 timer
- Pris = 1,50 kr/kWh

**Energi:**
$$E = P \\cdot t = 2\\text{ kW} \\cdot 3\\text{ h} = 6\\text{ kWh}$$

**Kostnad:**
$$\\text{Kostnad} = 6\\text{ kWh} \\cdot 1,50\\text{ kr/kWh} = 9\\text{ kr}$$

**Svar:** Varmeovnen bruker 6 kWh og koster 9 kroner.`
    },
    {
      id: 'nat-9-3-2-tip',
      type: 'tip',
      title: 'Spare strøm',
      content: `**Tips for å spare strøm:**
- Slå av lys når du forlater rommet
- Bruk LED-pærer i stedet for gammeldagse
- Ikke la apparater stå på standby
- Senk temperaturen på varmtvann
- Tørk klær utendørs når mulig
- Bruk oppvaskmaskin og vaskemaskin bare når fulle`
    },
    {
      id: 'nat-9-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-9-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er enheten for elektrisk effekt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig enhet for effekt.',
            solution: 'Watt (W)',
            multipleChoiceOptions: [
              'Watt (W)',
              'Ampere (A)',
              'Volt (V)',
              'Joule (J)'
            ],
          },
        ],
        solution: 'Effekt måles i watt (W).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-9-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Beregn effekten til en lampe som trekker 0,5 A fra 230 V.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn effekten.',
            solution: '115 W',
            multipleChoiceOptions: [
              '115 W',
              '460 W',
              '230,5 W',
              '0,002 W'
            ],
          },
        ],
        solution: 'P = U × I = 230 V × 0,5 A = 115 W',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-9-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvor mye energi bruker en 60 W lyspære på 5 timer?',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn energiforbruket.',
            solution: '0,3 kWh',
            multipleChoiceOptions: [
              '0,3 kWh',
              '300 kWh',
              '12 kWh',
              '0,012 kWh'
            ],
          },
        ],
        solution: 'E = P × t = 60 W × 5 h = 300 Wh = 0,3 kWh',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-9-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Beregn strømkostnader.',
        subTasks: [
          {
            label: 'a',
            task: 'En PC på 200 W brukes 4 timer daglig i 30 dager. Hva er energiforbruket?',
            solution: 'E = 0,2 kW × 4 h × 30 = 24 kWh',
            multipleChoiceOptions: [
              '24 kWh',
              '240 kWh',
              '2,4 kWh',
              '24000 kWh'
            ],
          },
          {
            label: 'b',
            task: 'Hva koster dette hvis strømprisen er 2 kr/kWh?',
            solution: 'Kostnad = 24 kWh × 2 kr/kWh = 48 kr',
            multipleChoiceOptions: [
              '48 kr',
              '24 kr',
              '12 kr',
              '480 kr'
            ],
          }
        ],
        solution: 'Bruk E = P × t og multipliser med strømpris.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Økosystemer og næringskjeder
// ============================================================================

export const CHAPTER_NATURFAG_9_4_1: TextbookChapter = {
  id: 'naturfag-9-4-1',
  courseId: 'naturfag-9',
  chapterNumber: '4.1',
  title: 'Økosystemer og næringskjeder',
  description: 'Forstå hvordan energi og stoffer flyter i økosystemer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og beskrive fotosyntetiske organismer sin rolle i økosystemer'
  ],
  content: [
    {
      id: 'nat-9-4-1-intro',
      type: 'text',
      content: `
# Økosystemer og næringskjeder

Et **økosystem** er et område der levende organismer samspiller med hverandre
og med det fysiske miljøet. Energi og stoffer strømmer gjennom økosystemet.
      `
    },
    {
      id: 'nat-9-4-1-def-okosystem',
      type: 'definition',
      title: 'Økosystem',
      content: `Et **økosystem** består av:

**Biotiske faktorer** (levende):
- Produsenter (planter)
- Konsumenter (dyr)
- Nedbrytere (sopp, bakterier)

**Abiotiske faktorer** (ikke-levende):
- Klima (temperatur, nedbør)
- Lys
- Jord
- Vann`
    },
    {
      id: 'nat-9-4-1-naringskjede',
      type: 'text',
      title: 'Næringskjede',
      content: `
## Næringskjeder

En **næringskjede** viser hvem som spiser hvem:

**Gras → Gresshoppe → Frosk → Slange → Ørn**

**Nivåer:**
1. **Produsenter**: Planter (lager mat via fotosyntese)
2. **Primærkonsumenter**: Plantespisere
3. **Sekundærkonsumenter**: Spiser plantespisere
4. **Tertiærkonsumenter**: Topprovdyr
5. **Nedbrytere**: Bryter ned dødt materiale
      `
    },
    {
      id: 'nat-9-4-1-naeringsnett',
      type: 'text',
      title: 'Næringsnett',
      content: `
## Næringsnett

I virkeligheten er økosystemet mer komplekst enn en kjede.

Et **næringsnett** viser alle næringskjedene i et økosystem sammenkoblet.

Eksempel: En mus kan spises av både ugle, rev og slange. Uglen spiser også fugler og insekter.

Næringsnett viser hvor komplekse relasjonene er i naturen.
      `
    },
    {
      id: 'nat-9-4-1-energi',
      type: 'definition',
      title: 'Energioverføring',
      content: `**Energipyramide**: Bare ca. 10% av energien overføres til neste nivå.

- Planter: 1000 kJ (fra sola)
- Gresshoppe: 100 kJ
- Frosk: 10 kJ
- Slange: 1 kJ

**90% av energien** "tapes" som varme ved hvert ledd (celleånding).

Derfor er det alltid færre rovdyr enn byttedyr!`
    },
    {
      id: 'nat-9-4-1-example',
      type: 'example',
      title: 'Næringskjede i havet',
      problem: 'Lag en næringskjede for et marint økosystem.',
      solution: `**Marin næringskjede:**

**Planteplankton** → **Dyreplankton** → **Sild** → **Torsk** → **Spekkhoggere**

**Forklaring:**
1. **Planteplankton**: Produsenter - utfører fotosyntese
2. **Dyreplankton**: Primærkonsumenter - spiser planteplankton
3. **Sild**: Sekundærkonsumenter - spiser dyreplankton
4. **Torsk**: Tertiærkonsumenter - spiser sild
5. **Spekkhoggere**: Topprovdyr - spiser torsk

Nedbrytere (bakterier) bryter ned alt dødt materiale på bunnen.`
    },
    {
      id: 'nat-9-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-9-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er en produsent i et økosystem?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av en produsent.',
            solution: 'En organisme som lager egen mat via fotosyntese',
            multipleChoiceOptions: [
              'En organisme som lager egen mat via fotosyntese',
              'Et dyr som spiser andre dyr',
              'Et dyr som spiser planter',
              'En organisme som bryter ned dødt materiale'
            ],
          },
        ],
        solution: 'Produsenter (planter) bruker fotosyntese til å omdanne solenergi til kjemisk energi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-9-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvor mye energi overføres typisk til neste ledd i næringskjeden?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig prosent.',
            solution: 'Ca. 10%',
            multipleChoiceOptions: [
              'Ca. 10%',
              'Ca. 50%',
              'Ca. 90%',
              'Ca. 100%'
            ],
          },
        ],
        solution: 'Bare ca. 10% av energien overføres - resten tapes som varme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-9-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom næringskjede og næringsnett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Næringsnett viser alle sammenkoblede næringskjeder',
            multipleChoiceOptions: [
              'Næringsnett viser alle sammenkoblede næringskjeder',
              'De betyr det samme',
              'Næringskjede er større enn næringsnett',
              'Næringsnett finnes bare i havet'
            ],
          },
        ],
        solution: 'Et næringsnett er summen av alle næringskjeder i et økosystem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-9-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser en næringskjede.',
        subTasks: [
          {
            label: 'a',
            task: 'I næringskjeden Gras → Kanin → Rev → Ørn, hva er sekundærkonsumenten?',
            solution: 'Rev',
            multipleChoiceOptions: [
              'Rev',
              'Kanin',
              'Ørn',
              'Gras'
            ],
          },
          {
            label: 'b',
            task: 'Hva ville skje hvis alle revene forsvant?',
            solution: 'Kaninbestanden ville øke kraftig først, så kanskje krasje pga. matmangel. Ørner måtte finne annen mat.',
            multipleChoiceOptions: [
              'Kaninbestanden ville øke, ørner må finne annen mat',
              'Ingen endring',
              'Gresset ville forsvinne',
              'Ørnene ville bli flere'
            ],
          }
        ],
        solution: 'Endringer i én del av næringskjeden påvirker alle andre ledd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.2: Kretsløp i naturen
// ============================================================================

export const CHAPTER_NATURFAG_9_4_2: TextbookChapter = {
  id: 'naturfag-9-4-2',
  courseId: 'naturfag-9',
  chapterNumber: '4.2',
  title: 'Kretsløp i naturen',
  description: 'Lær om karbonkretsløpet og nitrogenkretsløpet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive karbonkretsløpet og nitrogenkretsløpet og diskutere menneskelig påvirkning'
  ],
  content: [
    {
      id: 'nat-9-4-2-intro',
      type: 'text',
      content: `
# Kretsløp i naturen

Stoffer som karbon og nitrogen sirkulerer i naturen i **kretsløp**.
De blir aldri borte, bare omdannet og flyttet mellom ulike "lagre".
      `
    },
    {
      id: 'nat-9-4-2-karbon',
      type: 'definition',
      title: 'Karbonkretsløpet',
      content: `**Karbonkretsløpet** beskriver hvordan karbon beveger seg:

**Opptak av CO₂:**
- Fotosyntese (planter tar opp CO₂)
- Oppløsning i hav

**Frigjøring av CO₂:**
- Celleånding (alle levende organismer)
- Forbrenning (fossilt brensel, skogbrann)
- Nedbrytning av dødt materiale

**Lagre:**
- Atmosfæren (CO₂)
- Havet (oppløst CO₂)
- Levende organismer
- Fossile brennstoff (olje, kull, gass)
- Jordsmonn`
    },
    {
      id: 'nat-9-4-2-nitrogen',
      type: 'definition',
      title: 'Nitrogenkretsløpet',
      content: `**Nitrogenkretsløpet** er mer komplekst:

1. **Nitrogenfiks**: Bakterier omdanner N₂ fra lufta til ammoniakk (NH₃)

2. **Nitrifikasjon**: Bakterier omdanner NH₃ til nitrat (NO₃⁻)

3. **Opptak**: Planter tar opp nitrat gjennom røttene

4. **Konsumpsjon**: Dyr spiser planter og får nitrogen

5. **Nedbrytning**: Dødt materiale brytes ned til ammoniakk

6. **Denitrifikasjon**: Bakterier omdanner nitrat tilbake til N₂`
    },
    {
      id: 'nat-9-4-2-menneskelig',
      type: 'text',
      title: 'Menneskelig påvirkning',
      content: `
## Menneskelig påvirkning på kretsløpene

**Karbonkretsløpet:**
- Forbrenning av fossilt brensel øker CO₂ i atmosfæren
- Avskoging reduserer CO₂-opptak
- Resultatet: Drivhuseffekt og klimaendringer

**Nitrogenkretsløpet:**
- Kunstgjødsel tilfører ekstra nitrogen
- Avrenning fra jordbruk fører til algeoppblomstring
- Resultatet: Overgjødsling (eutrofiering) av vann
      `
    },
    {
      id: 'nat-9-4-2-example',
      type: 'example',
      title: 'Følg et karbonatom',
      problem: 'Beskriv reisen til et karbonatom fra atmosfæren og tilbake.',
      solution: `**Karbonatomets reise:**

1. **Start**: CO₂ i atmosfæren

2. **Fotosyntese**: Karbonet tas opp av en plante og bygges inn i glukose

3. **Konsumpsjon**: En kanin spiser planten. Karbonet blir del av kaninens kropp (f.eks. muskelvev)

4. **Død og nedbrytning**: Kaninen dør. Nedbrytere (sopp, bakterier) bryter ned kroppen

5. **Celleånding**: Nedbrytere frigjør karbonet som CO₂ gjennom celleånding

6. **Tilbake i atmosfæren**: CO₂ er igjen i lufta, klar for ny runde

**Tidsskala:** Dette kan ta fra dager til millioner av år (fossilt brensel).`
    },
    {
      id: 'nat-9-4-2-warning',
      type: 'warning',
      title: 'Klimaendringer',
      content: `Mennesker har forstyrret karbonkretsløpet:

**Før industrialiseringen:** Kretsløpet var i balanse
**Nå:** Vi frigjør karbon som har vært lagret i millioner av år

Resultatet:
- CO₂-nivå økt fra 280 ppm til over 420 ppm
- Global oppvarming
- Havforsuring (CO₂ løses i havet)
- Ekstremvær`
    },
    {
      id: 'nat-9-4-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-9-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvilken prosess tar opp CO₂ fra atmosfæren?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig prosess.',
            solution: 'Fotosyntese',
            multipleChoiceOptions: [
              'Fotosyntese',
              'Celleånding',
              'Forbrenning',
              'Nedbrytning'
            ],
          },
        ],
        solution: 'Fotosyntesen tar opp CO₂ og omdanner det til glukose.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-4-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-9-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvordan kommer nitrogen fra lufta inn i planter?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv prosessen.',
            solution: 'Bakterier fikserer nitrogen til ammoniakk, andre bakterier lager nitrat, planter tar opp nitrat',
            multipleChoiceOptions: [
              'Bakterier fikserer nitrogen, planter tar opp nitrat',
              'Planter tar opp nitrogen direkte fra lufta',
              'Dyr tilfører nitrogen til plantene',
              'Nitrogen kommer fra nedbør'
            ],
          },
        ],
        solution: 'Planter kan ikke ta opp N₂ direkte - bakterier må først omdanne det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-4-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-9-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvordan påvirker forbrenning av fossilt brensel karbonkretsløpet?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv påvirkningen.',
            solution: 'Frigjør CO₂ som har vært lagret i millioner av år, øker CO₂ i atmosfæren',
            multipleChoiceOptions: [
              'Frigjør lagret CO₂, øker atmosfærisk CO₂',
              'Fjerner CO₂ fra atmosfæren',
              'Ingen påvirkning',
              'Øker oksygennivået'
            ],
          },
        ],
        solution: 'Forbrenning av fossilt brensel ubalanserer karbonkretsløpet ved å tilføre ekstra CO₂.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-4-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-9-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser kretsløpene.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre prosesser som frigjør CO₂ til atmosfæren.',
            solution: 'Celleånding, forbrenning, nedbrytning',
            multipleChoiceOptions: [
              'Celleånding, forbrenning, nedbrytning',
              'Fotosyntese, celleånding, regn',
              'Fordampning, nedbør, avrenning',
              'Nitrifikasjon, denitrifikasjon, fiksering'
            ],
          },
          {
            label: 'b',
            task: 'Hva er eutrofiering, og hvordan henger det sammen med nitrogenkretsløpet?',
            solution: 'Eutrofiering er overgjødsling av vann. For mye nitrogen (fra gjødsel) fører til algeoppblomstring som bruker opp oksygenet.',
            multipleChoiceOptions: [
              'Overgjødsling fra nitrogen fører til algeoppblomstring',
              'Mangel på nitrogen i vann',
              'For mye karbon i vann',
              'Naturlig prosess uten menneskelig påvirkning'
            ],
          }
        ],
        solution: 'Kretsløpene påvirkes av menneskelig aktivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.1: Universet - Solsystemet
// ============================================================================

export const CHAPTER_NATURFAG_9_5_1: TextbookChapter = {
  id: 'naturfag-9-5-1',
  courseId: 'naturfag-9',
  chapterNumber: '5.1',
  title: 'Solsystemet',
  description: 'Utforsk planetene og andre objekter i vårt solsystem.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive solsystemet og bruke modeller til å forklare planeters bevegelse og årstider, dag og natt, månefaser og formørkelser'
  ],
  content: [
    {
      id: 'nat-9-5-1-intro',
      type: 'text',
      content: `
# Solsystemet

Vårt **solsystem** består av Sola, åtte planeter, dvergplaneter, måner,
asteroider og kometer. Alt holdes sammen av Solas gravitasjon.
      `
    },
    {
      id: 'nat-9-5-1-planeter',
      type: 'definition',
      title: 'Planetene',
      content: `**De åtte planetene** (fra Sola og ut):

**Steinplaneter (indre):**
1. **Merkur** - Minst, nærmest Sola
2. **Venus** - Hettest, tykk atmosfære
3. **Jorda** - Vår planet, har liv
4. **Mars** - Den røde planeten

**Gassplaneter (ytre):**
5. **Jupiter** - Størst, Den store røde flekken
6. **Saturn** - Kjent for ringene
7. **Uranus** - Roterer "på siden"
8. **Neptun** - Fjernest, blå`
    },
    {
      id: 'nat-9-5-1-huskeregel',
      type: 'tip',
      title: 'Huskeregel',
      content: `**M**in **V**eldig **E**nkle **M**etode: **J**eg **S**erverer **U**tmerket **N**achos

**M**erkur **V**enus **E**arth (Jorda) **M**ars **J**upiter **S**aturn **U**ranus **N**eptun`
    },
    {
      id: 'nat-9-5-1-storrelser',
      type: 'text',
      title: 'Avstander og størrelser',
      content: `
## Skala i solsystemet

**Solas diameter**: Ca. 1,4 millioner km (109 × Jorda)

**Avstand Jorda-Sola**: 150 millioner km = 1 AU (astronomisk enhet)

**Sammenligning:**
Hvis Sola var en fotball (22 cm):
- Jorda ville vært et pepperkorn (2 mm) 23 m unna
- Jupiter ville vært en kirsebær (2 cm) 120 m unna
- Neptun ville vært 700 m unna
      `
    },
    {
      id: 'nat-9-5-1-andre',
      type: 'text',
      title: 'Andre objekter',
      content: `
## Andre objekter i solsystemet

**Dvergplaneter**: Pluto, Ceres, Eris, Makemake, Haumea

**Måner**: Over 200 kjente måner (Jorda har 1, Jupiter har 95)

**Asteroidbeltet**: Mellom Mars og Jupiter

**Kometer**: Isklumper fra ytterkantene, får haler nær Sola

**Kuiperbeltet**: Område med islegemer utenfor Neptun (Pluto er der)
      `
    },
    {
      id: 'nat-9-5-1-example',
      type: 'example',
      title: 'Planetenes egenskaper',
      problem: 'Sammenlign Jorda og Mars.',
      solution: `**Jorda vs. Mars:**

| Egenskap | Jorda | Mars |
|----------|-------|------|
| Diameter | 12 742 km | 6 779 km |
| Avstand fra Sola | 150 mill km | 228 mill km |
| Døgn | 24 timer | 24 t 37 min |
| År | 365 døgn | 687 døgn |
| Måner | 1 | 2 |
| Atmosfære | N₂, O₂ | CO₂ (tynn) |
| Temperatur | 15°C (snitt) | -65°C (snitt) |
| Liv | Ja | Ikke påvist |

Mars kalles ofte "vår tvilling" fordi den ligner mest på Jorda.`
    },
    {
      id: 'nat-9-5-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-9-5-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvilken planet er størst i solsystemet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den største planeten.',
            solution: 'Jupiter',
            multipleChoiceOptions: [
              'Jupiter',
              'Saturn',
              'Neptun',
              'Jorda'
            ],
          },
        ],
        solution: 'Jupiter er den største planeten - over 1300 jordkloder ville fått plass inni.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-5-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-9-5-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom steinplaneter og gassplaneter?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv hovedforskjellen.',
            solution: 'Steinplaneter har fast overflate, gassplaneter har ingen fast overflate',
            multipleChoiceOptions: [
              'Steinplaneter har fast overflate, gassplaneter har ikke',
              'Gassplaneter er nærmere Sola',
              'Steinplaneter er større',
              'Gassplaneter har ingen måner'
            ],
          },
        ],
        solution: 'Steinplanetene (Merkur, Venus, Jorda, Mars) har fast overflate. Gassplanetene (Jupiter, Saturn, Uranus, Neptun) består hovedsakelig av gass.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-5-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-9-5-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er Pluto ikke lenger regnet som planet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunnen.',
            solution: 'Pluto har ikke "ryddet banen sin" for andre objekter',
            multipleChoiceOptions: [
              'Pluto har ikke ryddet banen sin for andre objekter',
              'Pluto er for kald',
              'Pluto har ingen måner',
              'Pluto er for nær Sola'
            ],
          },
        ],
        solution: 'I 2006 ble definisjonen av planet endret. Pluto oppfyller ikke kravet om å ha ryddet området rundt banen sin.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-5-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-9-5-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk solsystemet.',
        subTasks: [
          {
            label: 'a',
            task: 'List planetene i rekkefølge fra Sola.',
            solution: 'Merkur, Venus, Jorda, Mars, Jupiter, Saturn, Uranus, Neptun',
            multipleChoiceOptions: [
              'Merkur, Venus, Jorda, Mars, Jupiter, Saturn, Uranus, Neptun',
              'Venus, Merkur, Jorda, Mars, Jupiter, Uranus, Saturn, Neptun',
              'Merkur, Venus, Mars, Jorda, Jupiter, Saturn, Uranus, Neptun',
              'Pluto, Merkur, Venus, Jorda, Mars, Jupiter, Saturn, Uranus'
            ],
          },
          {
            label: 'b',
            task: 'Hvilken planet har flest kjente måner?',
            solution: 'Saturn (146 kjente måner per 2023, Jupiter har 95)',
            multipleChoiceOptions: [
              'Saturn',
              'Jupiter',
              'Uranus',
              'Mars'
            ],
          }
        ],
        solution: 'Solsystemet inneholder åtte planeter og mange andre interessante objekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.2: Dag og natt, årstider og månefaser
// ============================================================================

export const CHAPTER_NATURFAG_9_5_2: TextbookChapter = {
  id: 'naturfag-9-5-2',
  courseId: 'naturfag-9',
  chapterNumber: '5.2',
  title: 'Dag og natt, årstider og månefaser',
  description: 'Forstå hvordan Jordas bevegelser skaper dag/natt og årstider.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive solsystemet og bruke modeller til å forklare planeters bevegelse og årstider, dag og natt, månefaser og formørkelser'
  ],
  content: [
    {
      id: 'nat-9-5-2-intro',
      type: 'text',
      content: `
# Dag og natt, årstider og månefaser

Jordas **rotasjon** (spinning rundt egen akse) og **revolusjon** (bane rundt Sola)
skaper fenomener vi opplever daglig og årlig.
      `
    },
    {
      id: 'nat-9-5-2-dag',
      type: 'definition',
      title: 'Dag og natt',
      content: `**Dag og natt** skyldes Jordas rotasjon.

- Jorda roterer rundt sin egen akse
- Én rotasjon tar **24 timer** (ett døgn)
- Siden Jorda er rund, er halvparten alltid vendt mot Sola (dag) og halvparten bort fra Sola (natt)

Jorda roterer mot øst, derfor ser vi Sola "gå opp" i øst og "gå ned" i vest.`
    },
    {
      id: 'nat-9-5-2-arstider',
      type: 'definition',
      title: 'Årstider',
      content: `**Årstidene** skyldes Jordas **aksehelling** (23,5°) kombinert med banen rundt Sola.

**Sommer** (på nordlige halvkule):
- Nordpolen heller mot Sola
- Sola står høyt, lange dager
- Mer direkte solstråling = varmt

**Vinter** (på nordlige halvkule):
- Nordpolen heller bort fra Sola
- Sola står lavt, korte dager
- Skrå solstråling = kaldt

Når vi har sommer, har Australia vinter (og omvendt).`
    },
    {
      id: 'nat-9-5-2-manefaser',
      type: 'text',
      title: 'Månefaser',
      content: `
## Månefaser

Månen bruker **27,3 døgn** på å gå rundt Jorda.

Vi ser ulike **faser** fordi vi ser ulik andel av den opplyste siden:

1. **Nymåne**: Månen er mellom Jorda og Sola (mørk)
2. **Voksende halvmåne**: Vi ser halve den opplyste siden
3. **Fullmåne**: Jorda er mellom Månen og Sola (helt opplyst)
4. **Avtagende halvmåne**: Motsatt av voksende

Månens egen rotasjon tar like lang tid som banen rundt Jorda, så vi ser alltid samme side.
      `
    },
    {
      id: 'nat-9-5-2-formorkelse',
      type: 'text',
      title: 'Formørkelser',
      content: `
## Formørkelser

**Solformørkelse**: Månen kommer mellom Jorda og Sola
- Månens skygge faller på Jorda
- Kan bare skje ved nymåne
- Sjelden fordi banene er vinklet

**Måneformørkelse**: Jorda kommer mellom Sola og Månen
- Jordas skygge faller på Månen
- Kan bare skje ved fullmåne
- Månen blir ofte rødlig ("blodmåne")
      `
    },
    {
      id: 'nat-9-5-2-example',
      type: 'example',
      title: 'Hvorfor er dagene lengre om sommeren?',
      problem: 'Forklar hvorfor vi har midnattssol nord for polarsirkelen om sommeren.',
      solution: `**Midnattssol:**

1. Jordas akse heller 23,5°

2. Om sommeren peker nordpolen mot Sola

3. Nord for polarsirkelen (66,5°N):
   - Sola går aldri under horisonten
   - 24 timer dagslys = midnattssol

4. Samtidig sør for polarsirkelen:
   - Sola kommer aldri over horisonten
   - 24 timer mørke = polarnatt

**I Norge:**
- Nordkapp: Midnattssol 13. mai - 29. juli
- Oslo: Lengste dag ca. 18,5 timer (21. juni)`
    },
    {
      id: 'nat-9-5-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-9-5-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva forårsaker dag og natt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Jordas rotasjon rundt egen akse',
            multipleChoiceOptions: [
              'Jordas rotasjon rundt egen akse',
              'Jordas bane rundt Sola',
              'Månens bevegelse',
              'Solens bevegelse'
            ],
          },
        ],
        solution: 'Jorda roterer rundt sin akse én gang i døgnet, noe som gir dag på den siden som vender mot Sola.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-5-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-9-5-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er hovedårsaken til årstidene?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Jordas aksehelling (23,5°)',
            multipleChoiceOptions: [
              'Jordas aksehelling (23,5°)',
              'Varierende avstand til Sola',
              'Månens påvirkning',
              'Solens temperaturendringer'
            ],
          },
        ],
        solution: 'Aksehellinger på 23,5° gjør at solstrålene treffer ulikt gjennom året.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-5-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-9-5-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Når kan det være solformørkelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig månefase.',
            solution: 'Ved nymåne',
            multipleChoiceOptions: [
              'Ved nymåne',
              'Ved fullmåne',
              'Ved halvmåne',
              'Når som helst'
            ],
          },
        ],
        solution: 'Solformørkelse kan bare skje ved nymåne, når Månen er mellom Jorda og Sola.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-9-5-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-9-5-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar astronomi-fenomener.',
        subTasks: [
          {
            label: 'a',
            task: 'Når vi har sommer i Norge, hvilken årstid er det i Australia?',
            solution: 'Vinter',
            multipleChoiceOptions: [
              'Vinter',
              'Sommer',
              'Vår',
              'Høst'
            ],
          },
          {
            label: 'b',
            task: 'Forklar hvorfor vi alltid ser samme side av Månen.',
            solution: 'Månens rotasjonstid = tiden den bruker rundt Jorda (27,3 døgn)',
            multipleChoiceOptions: [
              'Månens rotasjon tar like lang tid som banen rundt Jorda',
              'Månen roterer ikke',
              'Jorda dekker den andre siden',
              'Den andre siden er mørk'
            ],
          }
        ],
        solution: 'Jordas og Månens bevegelser skaper mange interessante fenomener.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// Eksporter alle kapitler
export const NATURFAG_9_CHAPTERS = [
  CHAPTER_NATURFAG_9_1_1,
  CHAPTER_NATURFAG_9_1_2,
  CHAPTER_NATURFAG_9_2_1,
  CHAPTER_NATURFAG_9_2_2,
  CHAPTER_NATURFAG_9_3_1,
  CHAPTER_NATURFAG_9_3_2,
  CHAPTER_NATURFAG_9_4_1,
  CHAPTER_NATURFAG_9_4_2,
  CHAPTER_NATURFAG_9_5_1,
  CHAPTER_NATURFAG_9_5_2,
];
