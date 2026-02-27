/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Del 10: Kongruens og formlikhet
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 10.1: Kongruens og kongruenssetningene
// ============================================================================

export const CHAPTER_10_10_1: TextbookChapter = {
  id: '10-10-1',
  courseId: '10',
  chapterNumber: '10.1',
  title: 'Kongruens og kongruenssetningene',
  description: 'Kongruente figurer, kongruenssetningene for trekanter (SSS, SVS, VSV, ASA) og bevis for at trekanter er kongruente.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske, beskrive og argumentere for eigenskapar ved to- og tredimensjonale figurar',
  ],
  content: [
    // INTRO
    {
      id: '10-10-1-intro',
      type: 'text',
      content: `## Kongruens og kongruenssetningene

Har du noensinne lagt merke til at to puslespillbrikker passer perfekt oppå hverandre? Eller at to nøkler til samme lås er helt identiske? Da har du allerede møtt begrepet **kongruens** i hverdagen.

I geometrien handler kongruens om figurer som har nøyaktig samme form og størrelse. Hvis du kan legge den ene figuren oppå den andre slik at de dekker hverandre helt, er de kongruente.

I dette kapittelet skal du lære:
- Hva det betyr at to figurer er kongruente
- De fire kongruenssetningene for trekanter (SSS, SVS, VSV, ASA)
- Hvordan du bruker kongruenssetningene til å bevise at trekanter er kongruente
- Praktiske anvendelser av kongruens`,
    },

    // BLOKK 1: Kongruente figurer
    {
      id: '10-10-1-def-1',
      type: 'definition',
      title: 'Kongruente figurer',
      content: `To figurer er **kongruente** dersom de har nøyaktig samme form og størrelse. Vi skriver $\\triangle ABC \\cong \\triangle DEF$ og leser det som «trekant ABC er kongruent med trekant DEF».

Når vi skriver $\\triangle ABC \\cong \\triangle DEF$, betyr rekkefølgen på bokstavene at:
- $A$ svarer til $D$ (korresponderende hjørner)
- $B$ svarer til $E$
- $C$ svarer til $F$

Det betyr at:
- Alle korresponderende sider er like lange: $AB = DE$, $BC = EF$, $AC = DF$
- Alle korresponderende vinkler er like store: $\\angle A = \\angle D$, $\\angle B = \\angle E$, $\\angle C = \\angle F$`,
    },
    {
      id: '10-10-1-note-1',
      type: 'note',
      title: 'Kongruens vs. likhet',
      content: `Kongruens handler om geometriske figurer, mens likhet handler om tall og uttrykk. Vi skriver $\\cong$ for kongruens og $=$ for likhet.

En kongruent figur kan være speilvendt eller rotert i forhold til den andre. Det viktige er at formen og størrelsen er den samme. Tenk deg at du klipper ut en trekant i papir – uansett hvordan du snur eller vender papirbiten, er trekanten kongruent med den opprinnelige.`,
    },
    {
      id: '10-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Identifisere kongruente figurer',
      problem: 'Tenk deg to trekanter: Trekant ABC har sidene $AB = 5$ cm, $BC = 7$ cm og $AC = 6$ cm. Trekant DEF har sidene $DE = 5$ cm, $EF = 7$ cm og $DF = 6$ cm. Er trekantene kongruente? I så fall, angi kongruensen med riktig korrespondanse.',
      solution: `**Løsning:**

Vi sammenligner sidene:
- $AB = 5$ cm og $DE = 5$ cm $\\Rightarrow$ $AB = DE$
- $BC = 7$ cm og $EF = 7$ cm $\\Rightarrow$ $BC = EF$
- $AC = 6$ cm og $DF = 6$ cm $\\Rightarrow$ $AC = DF$

Alle tre par av korresponderende sider er like lange.

**Svar:** Ja, trekantene er kongruente: $\\triangle ABC \\cong \\triangle DEF$.`,
    },
    {
      id: '10-10-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-10-1-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tenk deg to trekanter PQR og STU der $PQ = 4$ cm, $QR = 8$ cm, $PR = 6$ cm, $ST = 8$ cm, $TU = 6$ cm og $SU = 4$ cm. Er trekantene kongruente? Hvis ja, skriv kongruensen med riktig korrespondanse mellom hjørnene.',
        hints: ['Sammenlign sidene parvis. Hvilke sider er like lange? Husk at rekkefølgen på bokstavene bestemmer korrespondansen.'],
        solution: 'Vi ser at $PQ = 4 = SU$, $QR = 8 = ST$ og $PR = 6 = TU$. Korrespondansen er $P \\leftrightarrow U$, $Q \\leftrightarrow S$, $R \\leftrightarrow T$. Altså er $\\triangle PQR \\cong \\triangle UST$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 2: SSS-setningen
    {
      id: '10-10-1-def-2',
      type: 'definition',
      title: 'SSS-setningen (side, side, side)',
      content: `**SSS-setningen:** Dersom alle tre sider i en trekant er like lange som alle tre sider i en annen trekant, er trekantene kongruente.

Med andre ord: Hvis $AB = DE$, $BC = EF$ og $AC = DF$, så er $\\triangle ABC \\cong \\triangle DEF$.

SSS står for **side-side-side**. Dette er den enkleste kongruenssetningen å bruke – du trenger bare å vise at tre par av korresponderende sider er like lange.`,
    },
    {
      id: '10-10-1-example-2',
      type: 'example',
      title: 'Eksempel: Bruke SSS-setningen',
      problem: 'Tenk deg en firkant ABCD der diagonalen BD deler firkanten i to trekanter: $\\triangle ABD$ og $\\triangle CBD$. Vi vet at $AB = CB = 5$ cm og $AD = CD = 7$ cm. Vis at $\\triangle ABD \\cong \\triangle CBD$.',
      solution: `**Løsning:**

Vi sammenligner sidene i de to trekantene:

1. $AB = CB = 5$ cm (gitt)
2. $AD = CD = 7$ cm (gitt)
3. $BD = BD$ (felles side)

Alle tre par av korresponderende sider er like, så etter **SSS-setningen** er

$$\\triangle ABD \\cong \\triangle CBD$$

Legg merke til at vi brukte at siden $BD$ er felles for begge trekantene. Dette er et vanlig triks i geometriske bevis.`,
    },
    {
      id: '10-10-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-10-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tenk deg et rektangel ABCD der $AB = CD = 8$ cm og $BC = AD = 5$ cm. Diagonalen AC deler rektangelet i to trekanter. Bruk SSS-setningen til å vise at $\\triangle ABC \\cong \\triangle CDA$.',
        hints: ['Skriv opp sidene i begge trekantene. Husk at i et rektangel er motstående sider like lange. Diagonalen AC er felles side.'],
        solution: 'I $\\triangle ABC$: $AB = 8$ cm, $BC = 5$ cm, $AC$ er felles. I $\\triangle CDA$: $CD = 8$ cm, $DA = 5$ cm, $CA$ er felles. Vi har $AB = CD = 8$, $BC = DA = 5$ og $AC = CA$ (felles side). Etter SSS-setningen er $\\triangle ABC \\cong \\triangle CDA$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 3: SVS-setningen
    {
      id: '10-10-1-def-3',
      type: 'definition',
      title: 'SVS-setningen (side, vinkel, side)',
      content: `**SVS-setningen:** Dersom to sider og vinkelen mellom dem i en trekant er like som to sider og vinkelen mellom dem i en annen trekant, er trekantene kongruente.

Med andre ord: Hvis $AB = DE$, $\\angle B = \\angle E$ og $BC = EF$, så er $\\triangle ABC \\cong \\triangle DEF$.

SVS står for **side-vinkel-side**. Det er viktig at vinkelen ligger **mellom** de to sidene (den «innesluttede» vinkelen). Hvis vinkelen ikke ligger mellom sidene, kan vi ikke bruke denne setningen.`,
    },
    {
      id: '10-10-1-example-3',
      type: 'example',
      title: 'Eksempel: Bruke SVS-setningen',
      problem: 'Tenk deg to trekanter ABC og DEF der $AB = DE = 6$ cm, $\\angle A = \\angle D = 50°$ og $AC = DF = 9$ cm. Er trekantene kongruente?',
      solution: `**Løsning:**

Vi sjekker kriteriene for SVS:
1. $AB = DE = 6$ cm (side)
2. $\\angle A = \\angle D = 50°$ (vinkel mellom sidene)
3. $AC = DF = 9$ cm (side)

Vinkelen $\\angle A$ ligger mellom sidene $AB$ og $AC$, og vinkelen $\\angle D$ ligger mellom sidene $DE$ og $DF$.

Etter **SVS-setningen** er $\\triangle ABC \\cong \\triangle DEF$.`,
    },
    {
      id: '10-10-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-10-1-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tenk deg en likebeint trekant ABC der $AB = AC = 10$ cm. Punktet M er midtpunktet på BC. Vis at $\\triangle ABM \\cong \\triangle ACM$ ved å bruke SVS-setningen.',
        hints: ['Hva vet du om BM og CM når M er midtpunktet på BC? Hva med vinkelen ved A? I en likebeint trekant deler linjen fra toppunktet til midtpunktet av grunnlinjen toppvinkelen i to like deler.'],
        solution: 'Siden M er midtpunktet på BC, er $BM = CM$. Siden $\\triangle ABC$ er likebeint med $AB = AC$, deler AM toppvinkelen i to like deler: $\\angle BAM = \\angle CAM$. Vi har $AB = AC = 10$ cm (side), $\\angle BAM = \\angle CAM$ (vinkel) og $AM = AM$ (felles side). Etter SVS-setningen er $\\triangle ABM \\cong \\triangle ACM$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 4: VSV og ASA
    {
      id: '10-10-1-def-4',
      type: 'definition',
      title: 'VSV-setningen (vinkel, side, vinkel)',
      content: `**VSV-setningen (også kalt ASA):** Dersom to vinkler og siden mellom dem i en trekant er like som to vinkler og siden mellom dem i en annen trekant, er trekantene kongruente.

Med andre ord: Hvis $\\angle A = \\angle D$, $AB = DE$ og $\\angle B = \\angle E$, så er $\\triangle ABC \\cong \\triangle DEF$.

VSV står for **vinkel-side-vinkel**. Siden må ligge **mellom** de to vinklene.

Det finnes også en variant som kalles **AAS** (angle-angle-side): Dersom to vinkler og en side som **ikke** ligger mellom dem er like i begge trekantene, er trekantene kongruente. Grunnen er at summen av vinklene i en trekant alltid er $180°$, slik at den tredje vinkelen bestemmes automatisk.`,
    },
    {
      id: '10-10-1-example-4',
      type: 'example',
      title: 'Eksempel: Bruke VSV-setningen',
      problem: 'Tenk deg to trekanter ABC og DEF der $\\angle A = \\angle D = 40°$, $AB = DE = 7$ cm og $\\angle B = \\angle E = 65°$. Vis at trekantene er kongruente og finn den tredje vinkelen.',
      solution: `**Løsning:**

Vi sjekker kriteriene for VSV:
1. $\\angle A = \\angle D = 40°$ (vinkel)
2. $AB = DE = 7$ cm (side mellom vinklene)
3. $\\angle B = \\angle E = 65°$ (vinkel)

Etter **VSV-setningen** er $\\triangle ABC \\cong \\triangle DEF$.

Den tredje vinkelen finner vi ved å bruke at vinkelsummen i en trekant er $180°$:

$$\\angle C = 180° - 40° - 65° = 75°$$

Siden trekantene er kongruente, har vi også $\\angle F = 75°$.`,
    },
    {
      id: '10-10-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-10-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tenk deg to trekanter KLM og PQR der $\\angle K = \\angle P = 55°$, $KL = PQ = 9$ cm og $\\angle L = \\angle Q = 70°$. a) Vis at $\\triangle KLM \\cong \\triangle PQR$. b) Finn alle vinkler og begrunn hvorfor de korresponderende sidene $LM$ og $QR$ også må være like lange.',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at $\\triangle KLM \\cong \\triangle PQR$.',
            solution: 'Vi har $\\angle K = \\angle P = 55°$, $KL = PQ = 9$ cm og $\\angle L = \\angle Q = 70°$. Siden KL ligger mellom vinklene K og L, oppfyller dette VSV-setningen. Dermed er $\\triangle KLM \\cong \\triangle PQR$.',
          },
          {
            label: 'b',
            task: 'Finn alle vinkler og begrunn hvorfor $LM = QR$.',
            solution: '$\\angle M = \\angle R = 180° - 55° - 70° = 55°$. Siden trekantene er kongruente, er alle korresponderende sider like. Altså er $LM = QR$, $KM = PR$ og $KL = PQ = 9$ cm.',
          },
        ],
        hints: ['Sjekk om kriteriene for VSV er oppfylt. Bruk vinkelsummen i en trekant for å finne den tredje vinkelen.'],
        solution: 'a) VSV: $\\angle K = \\angle P$, $KL = PQ$, $\\angle L = \\angle Q$ gir $\\triangle KLM \\cong \\triangle PQR$. b) $\\angle M = \\angle R = 55°$. Kongruens betyr at alle korresponderende sider er like, altså $LM = QR$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 5: Velge riktig kongruenssetning
    {
      id: '10-10-1-tip-1',
      type: 'tip',
      title: 'Hvordan velge riktig kongruenssetning',
      content: `Når du skal vise at to trekanter er kongruente, følg denne fremgangsmåten:

1. **Skriv opp** hva du vet om sidene og vinklene i begge trekantene.
2. **Se etter felles sider** – hvis trekantene deler en side, er den felles siden automatisk lik.
3. **Se etter toppvinkler** – vertikale vinkler (toppvinkler) er alltid like store.
4. **Velg setning:**
   - Kjenner du **3 sider**? Bruk **SSS**.
   - Kjenner du **2 sider og vinkelen mellom**? Bruk **SVS**.
   - Kjenner du **2 vinkler og siden mellom**? Bruk **VSV**.
   - Kjenner du **2 vinkler og en side** (ikke mellom)? Bruk **AAS**.

Husk: **SSV (side-side-vinkel) er IKKE en gyldig kongruenssetning** med mindre vinkelen ligger overfor den lengste av de to sidene.`,
    },
    {
      id: '10-10-1-example-5',
      type: 'example',
      title: 'Eksempel: Velge riktig kongruenssetning',
      problem: 'Tenk deg to trekanter som dannes når to linjestykker AB og CD krysser hverandre i punktet M, slik at M er midtpunktet på begge linjestykkene. Altså er $AM = MB$ og $CM = MD$. Vis at $\\triangle AMC \\cong \\triangle BMD$.',
      solution: `**Løsning:**

Vi identifiserer hva vi vet:
1. $AM = MB$ (M er midtpunktet på AB)
2. $CM = MD$ (M er midtpunktet på CD)
3. $\\angle AMC = \\angle BMD$ (toppvinkler er like store)

Vi har to sider og vinkelen mellom dem:
- Side: $AM = MB$
- Vinkel: $\\angle AMC = \\angle BMD$ (mellom sidene)
- Side: $CM = MD$

Etter **SVS-setningen** er $\\triangle AMC \\cong \\triangle BMD$.

Merk: Vi brukte at toppvinkler er like store. Når to linjer krysser hverandre, er vinklene rett overfor hverandre (toppvinklene) alltid like store.`,
    },
    {
      id: '10-10-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-10-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tenk deg et parallellogram ABCD der AB er parallell med DC og AD er parallell med BC. Diagonalen AC deler parallellogrammet i to trekanter. Vis at $\\triangle ABC \\cong \\triangle CDA$. Hvilken kongruenssetning bruker du?',
        hints: ['I et parallellogram er motstående sider like lange. Diagonalen AC er felles side. Bruk SSS-setningen.'],
        solution: 'I et parallellogram er motstående sider like lange: $AB = CD$ og $BC = DA$. Diagonalen $AC = CA$ er felles side. Etter SSS-setningen er $\\triangle ABC \\cong \\triangle CDA$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 6: Praktisk anvendelse
    {
      id: '10-10-1-text-praktisk',
      type: 'text',
      title: 'Kongruens i praksis',
      content: `Kongruens er viktig i mange praktiske sammenhenger:

**Bygg og konstruksjon:** Når du bygger en takstol, lager du to kongruente trekanter for at taket skal bli symmetrisk. Tømrere bruker maler for å sikre at alle delene er kongruente.

**Industri:** I masseproduksjon må alle delene være kongruente for at de skal passe sammen. Skruer, muttere og maskinkomponenter lages etter nøyaktige mål.

**Geometriske konstruksjoner:** Når du bruker passer og linjal til å konstruere geometriske figurer, bruker du egentlig kongruenssetningene. For eksempel er SSS-setningen grunnen til at du kan konstruere en trekant når du kjenner alle tre sidene.`,
    },
    {
      id: '10-10-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-10-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg en likebeint trekant ABC der $AB = AC$. Fra B og C trekkes det linjer vinkelrett ned på de motstående sidene. Linjen fra B treffer AC i punktet D, og linjen fra C treffer AB i punktet E. Vis at $BD = CE$.',
        hints: ['Tegn figuren og merk av de rette vinklene. Se på trekantene BDC og CEB. Hva vet du om vinklene i en likebeint trekant? Kan du finne to kongruente trekanter?'],
        solution: 'Vi ser på $\\triangle BDC$ og $\\triangle CEB$. Vi vet: $\\angle BDC = \\angle CEB = 90°$ (vinkelrette linjer). Siden $\\triangle ABC$ er likebeint med $AB = AC$, er $\\angle B = \\angle C$ (grunnvinklene er like). Siden $BC = CB$ (felles side). Vi har VSV (egentlig AAS): $\\angle BDC = \\angle CEB$, $\\angle DBC = \\angle ECB$ og $BC = CB$. Etter kongruenssetningen er $\\triangle BDC \\cong \\triangle CEB$, og dermed er $BD = CE$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // OPPSUMMERING
    {
      id: '10-10-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

**Kongruente figurer** har nøyaktig samme form og størrelse.

De fire kongruenssetningene for trekanter:

| Setning | Krav |
|---------|------|
| **SSS** | Tre par like sider |
| **SVS** | To par like sider og vinkelen mellom dem |
| **VSV** | To par like vinkler og siden mellom dem |
| **AAS** | To par like vinkler og en side (ikke mellom) |

**Viktig å huske:**
- Rekkefølgen på bokstavene i $\\triangle ABC \\cong \\triangle DEF$ viser korrespondansen
- Felles sider og toppvinkler er nyttige i bevis
- **SSV** er **ikke** en gyldig kongruenssetning (med unntak)
- Vinkelsummen $180°$ kan brukes til å finne den tredje vinkelen`,
    },

    // SAMLEOPPGAVER
    {
      id: '10-10-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-10-1-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør hvilken kongruenssetning som passer i hvert tilfelle, eller om det ikke er nok informasjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Trekant ABC og DEF der $AB = DE = 4$ cm, $BC = EF = 6$ cm, $AC = DF = 5$ cm.',
            solution: 'SSS-setningen. Alle tre par av sider er like.',
            multipleChoiceOptions: ['SSS', 'SVS', 'VSV', 'Ikke nok informasjon'],
          },
          {
            label: 'b',
            task: 'Trekant GHI og JKL der $GH = JK = 7$ cm, $\\angle G = \\angle J = 48°$ og $HI = KL = 5$ cm.',
            solution: 'Ikke nok informasjon. Vinkelen G ligger ikke nødvendigvis mellom sidene GH og HI (den ligger mellom GH og GI). Dette er SSV, som ikke er en gyldig kongruenssetning generelt.',
            multipleChoiceOptions: ['SSS', 'SVS', 'VSV', 'Ikke nok informasjon'],
          },
          {
            label: 'c',
            task: 'Trekant MNO og PQR der $\\angle M = \\angle P = 60°$, $MN = PQ = 10$ cm og $\\angle N = \\angle Q = 45°$.',
            solution: 'VSV-setningen. To vinkler og siden mellom dem er like.',
            multipleChoiceOptions: ['SSS', 'SVS', 'VSV', 'Ikke nok informasjon'],
          },
          {
            label: 'd',
            task: 'Trekant STU og VWX der $ST = VW = 3$ cm, $\\angle T = \\angle W = 90°$ og $TU = WX = 4$ cm.',
            solution: 'SVS-setningen. To sider og vinkelen mellom dem (vinkelen ved T og W som ligger mellom sidene ST/TU og VW/WX) er like.',
            multipleChoiceOptions: ['SSS', 'SVS', 'VSV', 'Ikke nok informasjon'],
          },
        ],
        hints: ['Sjekk om du har 3 sider (SSS), 2 sider og vinkel mellom (SVS), 2 vinkler og side mellom (VSV), eller om informasjonen ikke er tilstrekkelig.'],
        solution: 'a) SSS. b) Ikke nok informasjon (SSV). c) VSV. d) SVS.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-10-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-10-1-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg en likesidet trekant ABC der alle sidene er $s$ cm. Punktet P ligger inni trekanten slik at $PA = PB$. Trekk linjen fra C gjennom P. Denne linjen treffer AB i punktet Q. Vis at $AQ = BQ$, altså at Q er midtpunktet på AB.',
        hints: [
          'Se på trekantene APC og BPC. Hva kan du si om sidene?',
          'Bruk at $PA = PB$ og at trekanten er likesidet (alle sider like, alle vinkler $60°$). Se deretter på trekantene APQ og BPQ.',
        ],
        solution: 'Siden $\\triangle ABC$ er likesidet, er $AC = BC = s$ og $\\angle A = \\angle B = 60°$. Vi ser på $\\triangle APC$ og $\\triangle BPC$: $AC = BC$ (likesidet trekant), $PA = PB$ (gitt) og $PC = PC$ (felles side). Etter SSS-setningen er $\\triangle APC \\cong \\triangle BPC$. Dermed er $\\angle ACP = \\angle BCP$. Nå ser vi på $\\triangle ACQ$ og $\\triangle BCQ$: $AC = BC$, $\\angle ACQ = \\angle BCQ$ og $CQ = CQ$ (felles side). Etter SVS-setningen er $\\triangle ACQ \\cong \\triangle BCQ$. Dermed er $AQ = BQ$, og Q er midtpunktet på AB.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kongruent', definition: 'To figurer som har nøyaktig samme form og størrelse' },
    { term: 'Korresponderende', definition: 'Elementer som svarer til hverandre i kongruente figurer' },
    { term: 'SSS-setningen', definition: 'Tre par like sider gir kongruens' },
    { term: 'SVS-setningen', definition: 'To par like sider og vinkelen mellom gir kongruens' },
    { term: 'VSV-setningen', definition: 'To par like vinkler og siden mellom gir kongruens' },
    { term: 'AAS', definition: 'To par like vinkler og en side (ikke mellom) gir kongruens' },
    { term: 'Toppvinkler', definition: 'Vinkler rett overfor hverandre der to linjer krysser – alltid like store' },
  ],
};

// ============================================================================
// Kapittel 10.2: Formlike figurer og målestokk
// ============================================================================

export const CHAPTER_10_10_2: TextbookChapter = {
  id: '10-10-2',
  courseId: '10',
  chapterNumber: '10.2',
  title: 'Formlike figurer og målestokk',
  description: 'Formlike (liknende) figurer, forstørrelsesfaktor, formlikhetskriterier for trekanter og målestokk i kart og tegninger.',
  estimatedMinutes: 60,
  prerequisites: ['10-10-1'],
  competenceGoals: [
    'utforske, beskrive og argumentere for eigenskapar ved to- og tredimensjonale figurar',
  ],
  content: [
    // INTRO
    {
      id: '10-10-2-intro',
      type: 'text',
      content: `## Formlike figurer og målestokk

Tenk deg at du forstørrer et bilde på datamaskinen. Bildet ser likt ut, men det er blitt større. Alle avstander i bildet har økt med den samme faktoren, og alle vinklene er de samme. Dette er et eksempel på **formlikhet** (også kalt likedannethet).

Mens kongruente figurer har samme form **og** størrelse, har formlike figurer bare samme **form** – størrelsen kan være forskjellig.

I dette kapittelet skal du lære:
- Hva formlike figurer er og hva forstørrelsesfaktoren betyr
- Formlikhetskriteriene for trekanter (AA, SSS, SVS)
- Hvordan du finner ukjente sider ved hjelp av formlikhet
- Målestokk i kart, tegninger og modeller`,
    },

    // BLOKK 1: Formlike figurer
    {
      id: '10-10-2-def-1',
      type: 'definition',
      title: 'Formlike figurer og forstørrelsesfaktor',
      content: `To figurer er **formlike** dersom de har nøyaktig samme form. Det betyr:
- Alle korresponderende vinkler er like store
- Alle korresponderende sider har det samme forholdstallet

Vi skriver $\\triangle ABC \\sim \\triangle DEF$ og leser det som «trekant ABC er formlik trekant DEF».

**Forstørrelsesfaktoren** (eller skaleringsfaktoren) $k$ er forholdstallet mellom korresponderende sider:

$$k = \\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC}$$

- Hvis $k > 1$, er den andre figuren **større** (forstørring)
- Hvis $k < 1$, er den andre figuren **mindre** (forminsking)
- Hvis $k = 1$, er figurene **kongruente**`,
    },
    {
      id: '10-10-2-note-1',
      type: 'note',
      title: 'Formlikhet og kongruens',
      content: `Kongruente figurer er alltid formlike (med forstørrelsesfaktor $k = 1$). Men formlike figurer er bare kongruente dersom $k = 1$.

Du kan tenke på det slik: **Kongruens er et spesialtilfelle av formlikhet.**`,
    },
    {
      id: '10-10-2-example-1',
      type: 'example',
      title: 'Eksempel: Bestemme forstørrelsesfaktor',
      problem: 'Tenk deg to trekanter ABC og DEF der $AB = 3$ cm, $BC = 4$ cm, $AC = 5$ cm, $DE = 6$ cm, $EF = 8$ cm og $DF = 10$ cm. Er trekantene formlike? Hva er forstørrelsesfaktoren?',
      solution: `**Løsning:**

Vi sjekker om forholdstallene er like:

$$\\frac{DE}{AB} = \\frac{6}{3} = 2$$

$$\\frac{EF}{BC} = \\frac{8}{4} = 2$$

$$\\frac{DF}{AC} = \\frac{10}{5} = 2$$

Alle forholdstallene er like ($= 2$), så trekantene er formlike: $\\triangle ABC \\sim \\triangle DEF$.

**Forstørrelsesfaktoren** er $k = 2$. Det betyr at $\\triangle DEF$ er dobbelt så stor som $\\triangle ABC$.`,
    },
    {
      id: '10-10-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-10-2-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tenk deg to trekanter PQR og STU der $PQ = 5$ cm, $QR = 12$ cm, $PR = 13$ cm, $ST = 10$ cm, $TU = 24$ cm og $SU = 26$ cm. a) Vis at trekantene er formlike. b) Finn forstørrelsesfaktoren. c) Er noen av trekantene rettvinklede?',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at trekantene er formlike.',
            solution: '$ST/PQ = 10/5 = 2$, $TU/QR = 24/12 = 2$, $SU/PR = 26/13 = 2$. Alle forholdstall er like, så $\\triangle PQR \\sim \\triangle STU$.',
          },
          {
            label: 'b',
            task: 'Finn forstørrelsesfaktoren.',
            solution: 'Forstørrelsesfaktoren er $k = 2$.',
          },
          {
            label: 'c',
            task: 'Er noen av trekantene rettvinklede?',
            solution: 'Ja, begge. $5^2 + 12^2 = 25 + 144 = 169 = 13^2$, så $\\triangle PQR$ er rettvinklet. Tilsvarende er $10^2 + 24^2 = 100 + 576 = 676 = 26^2$.',
          },
        ],
        hints: ['Beregn forholdstallet mellom korresponderende sider. Bruk Pytagoras for å sjekke om trekantene er rettvinklede.'],
        solution: 'a) Alle forholdstall er $2$, altså formlike. b) $k = 2$. c) Begge er rettvinklede ($5^2 + 12^2 = 13^2$).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 2: Formlikhetskriterier
    {
      id: '10-10-2-def-2',
      type: 'definition',
      title: 'Formlikhetskriterier for trekanter',
      content: `For å vise at to trekanter er formlike, trenger du ikke sjekke alle sider og vinkler. Det holder å bruke ett av disse kriteriene:

**AA-kriteriet (vinkel-vinkel):** Dersom to vinkler i den ene trekanten er like store som to vinkler i den andre trekanten, er trekantene formlike. (Den tredje vinkelen er da automatisk lik, siden vinkelsummen er $180°$.)

**SSS-kriteriet (for formlikhet):** Dersom alle tre par av korresponderende sider har det samme forholdstallet, er trekantene formlike.

$$\\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC} = k$$

**SVS-kriteriet (for formlikhet):** Dersom to par av korresponderende sider har det samme forholdstallet og vinkelen mellom dem er lik, er trekantene formlike.`,
    },
    {
      id: '10-10-2-warning-1',
      type: 'warning',
      title: 'Ikke forveksle kongruens og formlikhet',
      content: `Kongruenssetningene og formlikhetskriteriene ser like ut, men betyr noe forskjellig:

| Kongruens ($\\cong$) | Formlikhet ($\\sim$) |
|---------------------|---------------------|
| SSS: sider er **like** | SSS: sider har **likt forholdstall** |
| SVS: sider er **like** | SVS: sider har **likt forholdstall** |
| VSV: side og vinkler | AA: bare **to vinkler** |

For formlikhet trengs **bare to like vinkler** (AA). For kongruens trengs alltid informasjon om minst én side.`,
    },
    {
      id: '10-10-2-example-2',
      type: 'example',
      title: 'Eksempel: Bruke AA-kriteriet',
      problem: 'Tenk deg to trekanter. Trekant ABC har $\\angle A = 35°$ og $\\angle B = 90°$. Trekant DEF har $\\angle D = 35°$ og $\\angle F = 55°$. Er trekantene formlike?',
      solution: `**Løsning:**

Vi finner de manglende vinklene:

I $\\triangle ABC$: $\\angle C = 180° - 35° - 90° = 55°$

I $\\triangle DEF$: $\\angle E = 180° - 35° - 55° = 90°$

Nå sammenligner vi:
- $\\angle A = 35° = \\angle D$
- $\\angle B = 90° = \\angle E$
- $\\angle C = 55° = \\angle F$

To par av vinkler er like (egentlig alle tre), så etter **AA-kriteriet** er $\\triangle ABC \\sim \\triangle DEF$.`,
    },
    {
      id: '10-10-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-10-2-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om følgende trekantpar er formlike. Begrunn svaret ditt med riktig kriterium.',
        subTasks: [
          {
            label: 'a',
            task: 'Trekant ABC med vinkler $50°$, $60°$, $70°$ og trekant DEF med vinkler $50°$, $70°$, $60°$.',
            solution: 'Ja, formlike etter AA-kriteriet. Begge har vinklene $50°$, $60°$ og $70°$.',
          },
          {
            label: 'b',
            task: 'Trekant GHI med sider $3$, $4$, $6$ og trekant JKL med sider $6$, $8$, $12$.',
            solution: 'Ja, formlike etter SSS-kriteriet for formlikhet. Forholdstallene: $6/3 = 8/4 = 12/6 = 2$.',
          },
          {
            label: 'c',
            task: 'Trekant MNO med vinkler $30°$, $60°$, $90°$ og trekant PQR med vinkler $45°$, $45°$, $90°$.',
            solution: 'Nei, ikke formlike. Selv om begge er rettvinklede, er de andre vinklene forskjellige ($30°/60°$ mot $45°/45°$).',
          },
        ],
        hints: ['Sjekk om to par av vinkler er like (AA), eller om sideforholdstallene er like (SSS for formlikhet).'],
        solution: 'a) Ja, AA-kriteriet. b) Ja, SSS-kriteriet med $k = 2$. c) Nei, kun én vinkel er lik.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 3: Finne ukjente sider
    {
      id: '10-10-2-text-ukjente',
      type: 'text',
      title: 'Finne ukjente sider med formlikhet',
      content: `En av de viktigste anvendelsene av formlikhet er å finne ukjente sidelengder. Dersom to trekanter er formlike, kan vi sette opp en likning basert på forholdstallene mellom korresponderende sider.

Fremgangsmåte:
1. Vis at trekantene er formlike (bruk AA, SSS eller SVS)
2. Skriv opp forholdstallet mellom kjente korresponderende sider
3. Sett opp en likning med den ukjente siden
4. Løs likningen`,
    },
    {
      id: '10-10-2-example-3',
      type: 'example',
      title: 'Eksempel: Finne ukjent side med formlikhet',
      problem: 'Tenk deg en trekant ABC der en linje DE er trukket parallelt med BC. Linjen treffer AB i D og AC i E. Vi vet at $AD = 4$ cm, $DB = 6$ cm, $AE = 3$ cm og at DE er parallell med BC. Finn lengden av EC og BC, gitt at $DE = 5$ cm.',
      solution: `**Løsning:**

Siden $DE \\parallel BC$, er $\\triangle ADE \\sim \\triangle ABC$ etter AA-kriteriet (vinklene $\\angle ADE = \\angle ABC$ og $\\angle AED = \\angle ACB$ fordi de er samsvarende vinkler ved parallelle linjer).

Forstørrelsesfaktoren:

$$k = \\frac{AB}{AD} = \\frac{AD + DB}{AD} = \\frac{4 + 6}{4} = \\frac{10}{4} = 2{,}5$$

Vi finner EC:

$$\\frac{AC}{AE} = k = 2{,}5$$

$$AC = AE \\cdot 2{,}5 = 3 \\cdot 2{,}5 = 7{,}5 \\text{ cm}$$

$$EC = AC - AE = 7{,}5 - 3 = 4{,}5 \\text{ cm}$$

Vi finner BC:

$$\\frac{BC}{DE} = k = 2{,}5$$

$$BC = DE \\cdot 2{,}5 = 5 \\cdot 2{,}5 = 12{,}5 \\text{ cm}$$

**Svar:** $EC = 4{,}5$ cm og $BC = 12{,}5$ cm.`,
    },
    {
      id: '10-10-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-10-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tenk deg en trekant ABC der en linje DE er trukket parallelt med BC, slik at D ligger på AB og E ligger på AC. Vi vet at $AD = 6$ cm, $DB = 9$ cm og $DE = 8$ cm. Finn lengden av BC.',
        hints: ['Siden DE er parallell med BC, er $\\triangle ADE \\sim \\triangle ABC$. Finn forstørrelsesfaktoren fra AD til AB.'],
        solution: '$AB = AD + DB = 6 + 9 = 15$ cm. Forstørrelsesfaktoren er $k = AB/AD = 15/6 = 2{,}5$. Dermed er $BC = DE \\cdot k = 8 \\cdot 2{,}5 = 20$ cm.',
        answer: 20,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 4: Skyggeproblem og høydemåling
    {
      id: '10-10-2-text-skygge',
      type: 'text',
      title: 'Praktisk bruk: Skyggeproblem og høydemåling',
      content: `En klassisk anvendelse av formlikhet er å måle høyden av ting som er for høye til å måle direkte – som trær, bygninger og flaggstenger. Vi kan bruke skygger eller speil til å danne formlike trekanter.

**Skygge-metoden:** Når sola skinner, kaster alle gjenstander skygge. Solstrålene er tilnærmet parallelle, så en person og et tre danner to formlike trekanter med bakken og solstrålene.

**Speil-metoden:** Legg et speil på bakken. Gå bakover til du ser toppen av gjenstanden i speilet. Lysrefleksjonen danner to formlike trekanter.`,
    },
    {
      id: '10-10-2-example-4',
      type: 'example',
      title: 'Eksempel: Måle høyden av et tre',
      problem: 'Du vil finne høyden av et tre. Du er $1{,}70$ m høy, og skyggen din er $2{,}00$ m lang. Treets skygge er $14{,}00$ m lang. Hvor høyt er treet?',
      solution: `**Løsning:**

Solstrålene er tilnærmet parallelle. Du og treet danner to rettvinklede trekanter med bakken:

- **Din trekant:** Høyde $= 1{,}70$ m, skygge $= 2{,}00$ m
- **Treets trekant:** Høyde $= h$, skygge $= 14{,}00$ m

De to trekantene er formlike (AA-kriteriet: begge har en rett vinkel mot bakken og samme vinkel fra solstrålene).

Vi setter opp forholdstallet:

$$\\frac{h}{1{,}70} = \\frac{14{,}00}{2{,}00}$$

$$h = 1{,}70 \\cdot \\frac{14{,}00}{2{,}00} = 1{,}70 \\cdot 7 = 11{,}9 \\text{ m}$$

**Svar:** Treet er $11{,}9$ m høyt.`,
    },
    {
      id: '10-10-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-10-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du legger et speil på bakken $8{,}0$ m fra foten av en bygning. Du går bakover fra speilet og ser toppen av bygningen i speilet når du er $2{,}0$ m fra speilet. Øynene dine er $1{,}65$ m over bakken. Finn høyden av bygningen.',
        hints: ['Tegn figuren. Speilet danner to formlike rettvinklede trekanter. Den ene har kateter 1,65 m og 2,0 m. Den andre har ukjent høyde og 8,0 m.'],
        solution: 'De to trekantene er formlike (AA: begge har en rett vinkel og like refleksjonsvinkler). Forholdstallet: $h/1{,}65 = 8{,}0/2{,}0$. Da er $h = 1{,}65 \\cdot 4{,}0 = 6{,}6$ m.',
        answer: 6.6,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 5: Målestokk
    {
      id: '10-10-2-def-3',
      type: 'definition',
      title: 'Målestokk',
      content: `**Målestokk** er forholdet mellom en avstand på et kart, en tegning eller en modell og den virkelige avstanden.

$$\\text{Målestokk} = \\frac{\\text{avstand på kart/tegning}}{\\text{virkelig avstand}}$$

Målestokk skrives som et forholdstall, for eksempel:

- **$1 : 100$** betyr at 1 cm på tegningen tilsvarer 100 cm ($= 1$ m) i virkeligheten
- **$1 : 50\\,000$** betyr at 1 cm på kartet tilsvarer 50 000 cm ($= 500$ m) i virkeligheten
- **$1 : 1\\,000\\,000$** betyr at 1 cm på kartet tilsvarer 10 km i virkeligheten

For å finne virkelig avstand: $\\text{virkelig avstand} = \\text{kartavstand} \\cdot \\text{nevneren i målestokken}$

For å finne kartavstand: $\\text{kartavstand} = \\frac{\\text{virkelig avstand}}{\\text{nevneren i målestokken}}$`,
    },
    {
      id: '10-10-2-example-5',
      type: 'example',
      title: 'Eksempel: Bruke målestokk',
      problem: 'På et kart med målestokk $1 : 50\\,000$ måler du at avstanden mellom to byer er $7{,}4$ cm. Hva er den virkelige avstanden?',
      solution: `**Løsning:**

Målestokk $1 : 50\\,000$ betyr at 1 cm på kartet tilsvarer 50 000 cm i virkeligheten.

$$\\text{Virkelig avstand} = 7{,}4 \\cdot 50\\,000 = 370\\,000 \\text{ cm}$$

Vi gjør om til kilometer:

$$370\\,000 \\text{ cm} = 3\\,700 \\text{ m} = 3{,}7 \\text{ km}$$

**Svar:** Den virkelige avstanden er $3{,}7$ km.`,
    },
    {
      id: '10-10-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-10-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Et turkart har målestokk $1 : 25\\,000$.',
        subTasks: [
          {
            label: 'a',
            task: 'Du måler $12$ cm på kartet mellom hytta og vannet. Hva er den virkelige avstanden i meter?',
            solution: '$12 \\cdot 25\\,000 = 300\\,000$ cm $= 3\\,000$ m $= 3{,}0$ km. Virkelig avstand er $3\\,000$ m.',
            answer: 3000,
          },
          {
            label: 'b',
            task: 'Den virkelige avstanden fra hytta til toppen er $1{,}5$ km. Hvor lang er denne avstanden på kartet?',
            solution: '$1{,}5$ km $= 150\\,000$ cm. Kartavstand: $150\\,000 / 25\\,000 = 6{,}0$ cm.',
            answer: 6,
          },
          {
            label: 'c',
            task: 'Et rektangulært tjern er $4{,}0$ cm langt og $1{,}6$ cm bredt på kartet. Finn det virkelige arealet av tjernet i kvadratmeter.',
            solution: 'Lengde: $4{,}0 \\cdot 25\\,000 = 100\\,000$ cm $= 1\\,000$ m. Bredde: $1{,}6 \\cdot 25\\,000 = 40\\,000$ cm $= 400$ m. Areal: $1\\,000 \\cdot 400 = 400\\,000$ m$^2$.',
            answer: 400000,
          },
        ],
        hints: ['Ganger kartavstand med nevneren i målestokken for å finne virkelig avstand. Husk å gjøre om enheter!'],
        solution: 'a) 3 000 m. b) 6,0 cm. c) 400 000 m².',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 6: Målestokk for arkitektur
    {
      id: '10-10-2-text-arkitektur',
      type: 'text',
      title: 'Målestokk i arkitekttegninger',
      content: `Arkitekter bruker målestokk for å tegne bygninger i en håndterbar størrelse. Vanlige målestokker i arkitekturtegninger er:

- **$1 : 100$** – Plantegninger (1 cm = 1 m)
- **$1 : 50$** – Detaljerte plantegninger (1 cm = 0,5 m)
- **$1 : 20$** – Snitt og detaljer (1 cm = 20 cm)
- **$1 : 500$** – Situasjonsplan/utomhusplan

Modellbyggere bruker også målestokk. En modell i $1 : 87$ (H0-skala for modelltog) betyr at en virkelig bygning på 10 m blir $10 / 87 \\approx 0{,}115$ m $\\approx 11{,}5$ cm i modellen.`,
    },
    {
      id: '10-10-2-example-6',
      type: 'example',
      title: 'Eksempel: Plantegning med målestokk',
      problem: 'En plantegning av en leilighet har målestokk $1 : 100$. Stuen er tegnet som et rektangel som er $4{,}5$ cm bredt og $6{,}0$ cm langt. Hva er det virkelige arealet av stuen?',
      solution: `**Løsning:**

Målestokk $1 : 100$ betyr at 1 cm på tegningen er 100 cm ($= 1$ m) i virkeligheten.

Virkelig bredde: $4{,}5 \\cdot 100 = 450$ cm $= 4{,}5$ m

Virkelig lengde: $6{,}0 \\cdot 100 = 600$ cm $= 6{,}0$ m

Virkelig areal:

$$A = 4{,}5 \\cdot 6{,}0 = 27{,}0 \\text{ m}^2$$

**Svar:** Stuen er $27{,}0$ m$^2$.

**Merk:** Arealforholdet er $k^2 = 100^2 = 10\\,000$. Areal på tegning: $4{,}5 \\cdot 6{,}0 = 27{,}0$ cm$^2$. Virkelig areal: $27{,}0 \\cdot 10\\,000 = 270\\,000$ cm$^2$ $= 27{,}0$ m$^2$. Samme svar!`,
    },
    {
      id: '10-10-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-10-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En arkitekt har tegnet en plantegning av et hus i målestokk $1 : 50$. a) Soverommet er tegnet som et rektangel på $6{,}0$ cm $\\times$ $8{,}0$ cm. Finn de virkelige målene og arealet. b) Inngangsdøren er $1{,}8$ cm bred på tegningen. Hvor bred er den i virkeligheten? c) Et kvadratisk vindu har et areal på $1{,}44$ cm$^2$ på tegningen. Hva er det virkelige arealet i cm$^2$?',
        subTasks: [
          {
            label: 'a',
            task: 'Finn de virkelige målene og arealet av soverommet.',
            solution: 'Bredde: $6{,}0 \\cdot 50 = 300$ cm $= 3{,}0$ m. Lengde: $8{,}0 \\cdot 50 = 400$ cm $= 4{,}0$ m. Areal: $3{,}0 \\cdot 4{,}0 = 12{,}0$ m$^2$.',
          },
          {
            label: 'b',
            task: 'Hvor bred er inngangsdøren i virkeligheten?',
            solution: '$1{,}8 \\cdot 50 = 90$ cm. Døren er $90$ cm bred.',
            answer: 90,
          },
          {
            label: 'c',
            task: 'Hva er det virkelige arealet av vinduet?',
            solution: 'Virkelig areal $= 1{,}44 \\cdot 50^2 = 1{,}44 \\cdot 2\\,500 = 3\\,600$ cm$^2$ (som er $60 \\times 60$ cm).',
            answer: 3600,
          },
        ],
        hints: ['For lengder: ganger med målestokk-nevneren. For arealer: ganger med nevneren opphøyd i andre ($k^2$).'],
        solution: 'a) $3{,}0$ m $\\times$ $4{,}0$ m $= 12{,}0$ m$^2$. b) 90 cm. c) 3 600 cm$^2$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 7: Areal og volum ved formlikhet
    {
      id: '10-10-2-def-4',
      type: 'definition',
      title: 'Areal og volum ved formlikhet',
      content: `Når to figurer er formlike med forstørrelsesfaktor $k$, gjelder:

**Lengder:** Alle lengder ganges med $k$

$$\\text{ny lengde} = k \\cdot \\text{opprinnelig lengde}$$

**Areal:** Arealet ganges med $k^2$

$$\\text{nytt areal} = k^2 \\cdot \\text{opprinnelig areal}$$

**Volum:** Volumet ganges med $k^3$

$$\\text{nytt volum} = k^3 \\cdot \\text{opprinnelig volum}$$

Eksempel: Hvis en modell er i målestokk $1:10$ ($k = 10$), er det virkelige arealet $10^2 = 100$ ganger større, og det virkelige volumet er $10^3 = 1\\,000$ ganger større.`,
    },
    {
      id: '10-10-2-example-7',
      type: 'example',
      title: 'Eksempel: Areal og volum ved skalering',
      problem: 'En skulptur er 30 cm høy og har et volum på $2\\,700$ cm$^3$. En formlik kopi skal være 50 cm høy. Finn volumet av kopien.',
      solution: `**Løsning:**

Forstørrelsesfaktoren:

$$k = \\frac{50}{30} = \\frac{5}{3}$$

Volumet ganges med $k^3$:

$$V_{\\text{kopi}} = k^3 \\cdot V_{\\text{original}} = \\left(\\frac{5}{3}\\right)^3 \\cdot 2\\,700$$

$$= \\frac{125}{27} \\cdot 2\\,700 = 125 \\cdot 100 = 12\\,500 \\text{ cm}^3$$

**Svar:** Volumet av kopien er $12\\,500$ cm$^3$.`,
    },
    {
      id: '10-10-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-10-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'To formlike sylindere har høydene $h_1 = 12$ cm og $h_2 = 18$ cm. Den minste sylinderen har grunnflate $A_1 = 28{,}3$ cm$^2$ og volum $V_1 = 339{,}6$ cm$^3$. Finn grunnflaten og volumet av den største sylinderen.',
        hints: ['Finn forstørrelsesfaktoren $k = h_2/h_1$. Areal ganges med $k^2$ og volum ganges med $k^3$.'],
        solution: '$k = 18/12 = 1{,}5$. Grunnflate: $A_2 = 1{,}5^2 \\cdot 28{,}3 = 2{,}25 \\cdot 28{,}3 = 63{,}675 \\approx 63{,}7$ cm$^2$. Volum: $V_2 = 1{,}5^3 \\cdot 339{,}6 = 3{,}375 \\cdot 339{,}6 = 1\\,146{,}15 \\approx 1\\,146$ cm$^3$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // OPPSUMMERING
    {
      id: '10-10-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

**Formlike figurer** har samme form, men kan ha ulik størrelse. Alle korresponderende vinkler er like store, og alle korresponderende sider har det samme forholdstallet.

| Kriterium | Krav |
|-----------|------|
| **AA** | To par like vinkler |
| **SSS** (formlikhet) | Alle sidepar har likt forholdstall |
| **SVS** (formlikhet) | To sidepar har likt forholdstall og vinkelen mellom er lik |

**Forstørrelsesfaktor $k$:**
- Lengder: ganges med $k$
- Areal: ganges med $k^2$
- Volum: ganges med $k^3$

**Målestokk** $1 : n$ betyr at 1 enhet på tegningen tilsvarer $n$ enheter i virkeligheten.

**Praktiske anvendelser:**
- Høydemåling med skygger eller speil
- Kartlesing og avstandsberegning
- Arkitekttegninger og modellbygging`,
    },

    // SAMLEOPPGAVE
    {
      id: '10-10-2-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-10-2-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kommune skal bygge en ny park. Arkitekten har tegnet parken i målestokk $1 : 200$. Parken har form som en trekant med sider $15{,}0$ cm, $20{,}0$ cm og $25{,}0$ cm på tegningen. I parken er det et sirkelformet fontene som har diameter $3{,}0$ cm på tegningen.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn de virkelige sidelengdene av parken i meter.',
            solution: 'Side 1: $15{,}0 \\cdot 200 = 3\\,000$ cm $= 30$ m. Side 2: $20{,}0 \\cdot 200 = 4\\,000$ cm $= 40$ m. Side 3: $25{,}0 \\cdot 200 = 5\\,000$ cm $= 50$ m.',
          },
          {
            label: 'b',
            task: 'Vis at parken er rettvinklet og finn arealet.',
            solution: '$30^2 + 40^2 = 900 + 1\\,600 = 2\\,500 = 50^2$. Parken er rettvinklet (Pytagoras). Areal $= \\frac{1}{2} \\cdot 30 \\cdot 40 = 600$ m$^2$.',
          },
          {
            label: 'c',
            task: 'Finn den virkelige diameteren og arealet av fontenen.',
            solution: 'Diameter: $3{,}0 \\cdot 200 = 600$ cm $= 6{,}0$ m. Radius $= 3{,}0$ m. Areal: $\\pi \\cdot 3{,}0^2 = 9\\pi \\approx 28{,}3$ m$^2$.',
          },
          {
            label: 'd',
            task: 'Hvor stor prosentandel av parkens areal dekker fontenen?',
            solution: 'Andel $= \\frac{28{,}3}{600} \\cdot 100\\,\\% \\approx 4{,}7\\,\\%$.',
          },
        ],
        hints: [
          'Ganger kartmål med 200 for å finne virkelige mål. Husk å gjøre om til meter.',
          'Bruk Pytagoras-setningen for å sjekke om trekanten er rettvinklet.',
        ],
        solution: 'a) 30 m, 40 m, 50 m. b) $30^2 + 40^2 = 50^2$, rettvinklet. Areal $= 600$ m$^2$. c) Diameter 6,0 m, areal $\\approx 28{,}3$ m$^2$. d) $\\approx 4{,}7$ %.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Formlike figurer', definition: 'Figurer med samme form men ulik størrelse – alle korresponderende vinkler er like og sider har likt forholdstall' },
    { term: 'Forstørrelsesfaktor', definition: 'Forholdstallet mellom korresponderende sider i formlike figurer ($k$)' },
    { term: 'AA-kriteriet', definition: 'To par like vinkler gir formlikhet' },
    { term: 'Målestokk', definition: 'Forholdet mellom avstand på kart/tegning og virkelig avstand' },
    { term: 'Arealforhold', definition: 'Arealet endres med $k^2$ ved skalering' },
    { term: 'Volumforhold', definition: 'Volumet endres med $k^3$ ved skalering' },
  ],
};

// Eksporter alle kapitler i seksjon 10
export const MATEMATIKK_10_DEL10_CHAPTERS: TextbookChapter[] = [
  CHAPTER_10_10_1,
  CHAPTER_10_10_2,
];
