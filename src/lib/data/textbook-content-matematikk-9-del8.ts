/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Del 8: Polygoner og kongruens
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Del 8 dekker:
 *   8.1 Polygoner og vinkelsummer
 *   8.2 Kongruenssetningene (SSS, SAS, ASA)
 *   8.3 Trekantutlikheten og mediansetninger
 *
 * Kompetansemål:
 *   KM239 - utforske og argumentere for eigenskapar ved polygoner og kongruens
 *   KM240 - trekantrelasjoner, mediansetninger og midtpunktssetningen
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Polygoner og vinkelsummer
// LK20: KM239 – utforske og argumentere for eigenskapar ved to- og tredimensjonale figurar
// ============================================================================

export const CHAPTER_9_8_1: TextbookChapter = {
  id: '9-8-1',
  courseId: '9',
  chapterNumber: '8.1',
  title: 'Polygoner og vinkelsummer',
  description: 'Lær om ulike polygoner, formelen for vinkelsummen i en n-kant, og sammenhengen mellom indre og ytre vinkler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og argumentere for eigenskapar ved to- og tredimensjonale figurar',
  ],
  keyTerms: [
    { term: 'Polygon', definition: 'En lukket, plan figur avgrenset av rette linjestykker (sider).' },
    { term: 'Regulær polygon', definition: 'En polygon der alle sider er like lange og alle vinkler er like store.' },
    { term: 'Konveks polygon', definition: 'En polygon der alle indre vinkler er mindre enn $180°$.' },
    { term: 'Diagonal', definition: 'Et linjestykke som forbinder to hjørner som ikke er nabohjørner i en polygon.' },
    { term: 'Indre vinkel', definition: 'Vinkelen mellom to nabosider inne i en polygon.' },
    { term: 'Ytre vinkel', definition: 'Supplementvinkelen til en indre vinkel, altså $180° - \\text{indre vinkel}$.' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '9-8-1-intro',
      type: 'text',
      content: `## Polygoner og vinkelsummer

Verden rundt oss er full av mangekanter. Trekanter i takkonstruksjoner, firkanter i vinduer, sekskanter i bikuber og femkanter på en fotball. Alle disse figurene er **polygoner** - lukkede figurer med rette sider.

I dette kapittelet skal du lære:
- Hva som kjennetegner ulike polygoner
- Hvordan vi kan beregne vinkelsummen i en polygon med $n$ sider
- Sammenhengen mellom indre og ytre vinkler
- Egenskapene til regulære polygoner

Kunnskapen om polygoner og vinkelsummer er grunnleggende i geometri, og brukes blant annet i arkitektur, design og programmering av dataspill.`,
    },

    // ========== DEFINISJON 1: Hva er en polygon? ==========
    {
      id: '9-8-1-def-1',
      type: 'definition',
      title: 'Polygon (mangekant)',
      content: `En **polygon** (eller mangekant) er en lukket, plan figur som er avgrenset av rette linjestykker.

**Navngiving etter antall sider:**

| Antall sider | Navn | Eksempel |
|---|---|---|
| 3 | Trekant | Veiskilt |
| 4 | Firkant | Vindu |
| 5 | Femkant (pentagon) | Fotballmønster |
| 6 | Sekskant (heksagon) | Bikube |
| 7 | Sjukant (heptagon) | |
| 8 | Åttekant (oktogon) | Stoppskilt |
| $n$ | $n$-kant | |

En polygon der alle sider er like lange og alle vinkler like store, kalles en **regulær polygon**.

En polygon der alle indre vinkler er mindre enn $180°$, kalles **konveks**. Hvis minst én indre vinkel er større enn $180°$, er polygonen **konkav**.`,
    },

    // ========== DEFINISJON 2: Vinkelsummen ==========
    {
      id: '9-8-1-def-2',
      type: 'definition',
      title: 'Vinkelsummen i en polygon',
      content: `**Vinkelsummen** i en polygon med $n$ sider er:

$$S = (n - 2) \\cdot 180°$$

**Forklaring:** Fra ett hjørne i en $n$-kant kan vi trekke diagonaler til alle de andre hjørnene (bortsett fra nabohjørnene og hjørnet selv). Dette deler polygonen inn i $(n - 2)$ trekanter. Siden vinkelsummen i hver trekant er $180°$, blir den totale vinkelsummen $(n - 2) \\cdot 180°$.

**Eksempler:**
- Trekant ($n = 3$): $S = (3 - 2) \\cdot 180° = 180°$
- Firkant ($n = 4$): $S = (4 - 2) \\cdot 180° = 360°$
- Femkant ($n = 5$): $S = (5 - 2) \\cdot 180° = 540°$
- Sekskant ($n = 6$): $S = (6 - 2) \\cdot 180° = 720°$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '9-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Vinkelsummen i en åttekant',
      problem: 'Hva er vinkelsummen i en åttekant? Hvor stor er hver vinkel i en regulær åttekant?',
      solution: `**Vinkelsummen:**

En åttekant har $n = 8$ sider. Vi bruker formelen:

$$S = (n - 2) \\cdot 180° = (8 - 2) \\cdot 180° = 6 \\cdot 180° = 1080°$$

**Hver vinkel i en regulær åttekant:**

I en regulær åttekant er alle vinklene like store. Vi deler vinkelsummen på antall vinkler:

$$v = \\frac{1080°}{8} = 135°$$

**Svar:** Vinkelsummen i en åttekant er $1080°$. Hver vinkel i en regulær åttekant er $135°$.`,
    },

    // ========== DEFINISJON 3: Ytre vinkler ==========
    {
      id: '9-8-1-def-3',
      type: 'definition',
      title: 'Ytre vinkler i en polygon',
      content: `En **ytre vinkel** i en polygon er supplementvinkelen til den tilhørende indre vinkelen. Altså:

$$\\text{ytre vinkel} = 180° - \\text{indre vinkel}$$

**Summen av de ytre vinklene** i enhver konveks polygon er alltid:

$$\\text{Sum av ytre vinkler} = 360°$$

Dette gjelder uansett hvor mange sider polygonen har! Tenk deg at du går langs kantene av polygonen og snur ved hvert hjørne. Når du er tilbake der du startet, har du snudd deg en hel runde, altså $360°$.

**I en regulær $n$-kant** er hver ytre vinkel:

$$\\text{ytre vinkel} = \\frac{360°}{n}$$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '9-8-1-example-2',
      type: 'example',
      title: 'Eksempel: Indre og ytre vinkler i en regulær femkant',
      problem: 'Finn størrelsen på hver indre vinkel og hver ytre vinkel i en regulær femkant (pentagon).',
      solution: `**Indre vinkel:**

Vinkelsummen i en femkant ($n = 5$):

$$S = (5 - 2) \\cdot 180° = 3 \\cdot 180° = 540°$$

Hver indre vinkel i en regulær femkant:

$$v_{\\text{indre}} = \\frac{540°}{5} = 108°$$

**Ytre vinkel:**

$$v_{\\text{ytre}} = 180° - 108° = 72°$$

**Sjekk:** $5 \\cdot 72° = 360°$ \\checkmark  (Summen av de ytre vinklene er $360°$.)

**Svar:** Hver indre vinkel er $108°$ og hver ytre vinkel er $72°$.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '9-8-1-example-3',
      type: 'example',
      title: 'Eksempel: Finne antall sider fra vinkelstørrelse',
      problem: 'En regulær polygon har indre vinkler som er $150°$ store. Hvor mange sider har polygonen?',
      solution: `**Metode 1: Bruke ytre vinkel**

Ytre vinkel $= 180° - 150° = 30°$

Siden summen av de ytre vinklene er $360°$:

$$n = \\frac{360°}{30°} = 12$$

**Metode 2: Bruke vinkelsumformelen**

I en regulær $n$-kant er hver indre vinkel $\\frac{(n-2) \\cdot 180°}{n}$. Vi setter dette lik $150°$:

$$\\frac{(n - 2) \\cdot 180°}{n} = 150°$$

$$(n - 2) \\cdot 180 = 150n$$

$$180n - 360 = 150n$$

$$30n = 360$$

$$n = 12$$

**Svar:** Polygonen har $12$ sider (en tolvkant / dodekagon).`,
    },

    // ========== OPPGAVER ==========
    {
      id: '9-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-8-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vinkelsummen i:',
        subTasks: [
          { label: 'a', task: 'en trekant', solution: '$S = (3 - 2) \\cdot 180° = 180°$', answer: '180' },
          { label: 'b', task: 'en firkant', solution: '$S = (4 - 2) \\cdot 180° = 360°$', answer: '360' },
          { label: 'c', task: 'en sekskant', solution: '$S = (6 - 2) \\cdot 180° = 720°$', answer: '720' },
          { label: 'd', task: 'en tikant (10 sider)', solution: '$S = (10 - 2) \\cdot 180° = 1440°$', answer: '1440' },
        ],
        solution: 'Bruk formelen $S = (n - 2) \\cdot 180°$ der $n$ er antall sider.',
        hints: ['Sett inn antall sider for $n$ i formelen $S = (n - 2) \\cdot 180°$.'],
      },
    },
    {
      id: '9-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-8-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn størrelsen på hver indre vinkel i en regulær:',
        subTasks: [
          { label: 'a', task: 'likesidet trekant', solution: '$\\frac{180°}{3} = 60°$', answer: '60' },
          { label: 'b', task: 'regulær firkant (kvadrat)', solution: '$\\frac{360°}{4} = 90°$', answer: '90' },
          { label: 'c', task: 'regulær sekskant', solution: '$\\frac{720°}{6} = 120°$', answer: '120' },
        ],
        solution: 'Finn vinkelsummen med $S = (n-2) \\cdot 180°$ og del på antall vinkler $n$.',
        hints: ['I en regulær polygon er alle vinklene like store.'],
      },
    },
    {
      id: '9-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-8-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En firkant har tre vinkler som er $80°$, $110°$ og $95°$. Finn den fjerde vinkelen.',
        solution: `Vinkelsummen i en firkant er $360°$.

$$\\text{fjerde vinkel} = 360° - 80° - 110° - 95° = 75°$$

**Svar:** Den fjerde vinkelen er $75°$.`,
        hints: ['Vinkelsummen i en firkant er alltid $360°$.'],
        answer: '75',
      },
    },
    {
      id: '9-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-8-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn størrelsen på hver ytre vinkel i en regulær tikant (10-kant).',
        solution: `Summen av de ytre vinklene i enhver konveks polygon er $360°$.

I en regulær tikant er alle ytre vinklene like store:

$$\\text{ytre vinkel} = \\frac{360°}{10} = 36°$$

**Svar:** Hver ytre vinkel er $36°$.`,
        hints: ['Summen av de ytre vinklene i en polygon er alltid $360°$.'],
        answer: '36',
      },
    },
    {
      id: '9-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-8-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En regulær polygon har indre vinkler på $140°$. Hvor mange sider har polygonen?',
        solution: `Ytre vinkel $= 180° - 140° = 40°$

Antall sider:

$$n = \\frac{360°}{40°} = 9$$

**Svar:** Polygonen har $9$ sider (en nikant).`,
        hints: [
          'Finn den ytre vinkelen først: ytre vinkel $= 180°$ - indre vinkel.',
          'Bruk at summen av de ytre vinklene er $360°$.',
        ],
        answer: '9',
      },
    },
    {
      id: '9-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-8-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvor mange diagonaler kan vi trekke i en sekskant? (Tips: Fra hvert hjørne kan du trekke diagonaler til alle hjørner bortsett fra seg selv og de to nabohjørnene.)',
        solution: `En sekskant har $6$ hjørner. Fra hvert hjørne kan vi trekke diagonaler til $6 - 3 = 3$ andre hjørner (ikke til seg selv eller de to nabohjørnene).

Totalt antall «retninger»: $6 \\cdot 3 = 18$. Men hver diagonal telles to ganger (en gang fra hvert endepunkt), så:

$$\\text{antall diagonaler} = \\frac{6 \\cdot 3}{2} = 9$$

**Svar:** En sekskant har $9$ diagonaler.`,
        hints: [
          'Fra hvert hjørne kan du trekke diagonaler til $(n - 3)$ andre hjørner.',
          'Husk at hver diagonal forbinder to hjørner, så du teller den dobbelt.',
        ],
        answer: '9',
      },
    },
    {
      id: '9-8-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-8-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vinkelsummen i en polygon er $2340°$. Hvor mange sider har polygonen?',
        solution: `Vi bruker formelen $S = (n - 2) \\cdot 180°$ og setter $S = 2340°$:

$$(n - 2) \\cdot 180 = 2340$$

$$n - 2 = \\frac{2340}{180} = 13$$

$$n = 15$$

**Svar:** Polygonen har $15$ sider (en femtenkant).`,
        hints: [
          'Sett vinkelsummen inn i formelen $S = (n - 2) \\cdot 180°$ og løs for $n$.',
          'Del $2340$ på $180$ for å finne $(n - 2)$.',
        ],
        answer: '15',
      },
    },
    {
      id: '9-8-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-8-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at formelen for antall diagonaler i en $n$-kant er $\\frac{n(n-3)}{2}$. Bruk formelen til å finne antall diagonaler i en tolvkant.',
        solution: `**Utledning:**

Fra hvert av de $n$ hjørnene kan vi trekke en diagonal til alle hjørner bortsett fra seg selv og de to nabohjørnene. Det gir $(n - 3)$ diagonaler fra hvert hjørne.

Totalt antall retninger: $n \\cdot (n - 3)$. Siden hver diagonal forbinder to hjørner, har vi talt den dobbelt:

$$D = \\frac{n(n - 3)}{2}$$

**Tolvkant ($n = 12$):**

$$D = \\frac{12 \\cdot (12 - 3)}{2} = \\frac{12 \\cdot 9}{2} = \\frac{108}{2} = 54$$

**Svar:** En tolvkant har $54$ diagonaler.`,
        hints: [
          'Tenk på hvor mange diagonaler du kan trekke fra hvert hjørne.',
          'Husk å dele på $2$ fordi hver diagonal telles fra begge endepunkter.',
        ],
        answer: '54',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '9-8-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Polygoner**: En polygon er en lukket, plan figur med rette sider. Vi navngir dem etter antall sider: trekant (3), firkant (4), femkant (5), sekskant (6) osv.
- **Vinkelsumformelen**: Vinkelsummen i en polygon med $n$ sider er $S = (n - 2) \\cdot 180°$. Formelen bygger på at polygonen kan deles inn i $(n - 2)$ trekanter.
- **Indre og ytre vinkler**: En ytre vinkel er supplementet til den indre: $180° - \\text{indre vinkel}$. Summen av de ytre vinklene i enhver konveks polygon er alltid $360°$.
- **Regulære polygoner**: I en regulær $n$-kant er alle sider og vinkler like. Hver indre vinkel er $\\frac{(n-2) \\cdot 180°}{n}$ og hver ytre vinkel er $\\frac{360°}{n}$.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Polygon | Lukket, plan figur avgrenset av rette linjestykker |
| Regulær polygon | Polygon der alle sider og vinkler er like |
| Konveks polygon | Polygon der alle indre vinkler er mindre enn $180°$ |
| Vinkelsumformel | $S = (n - 2) \\cdot 180°$ |
| Ytre vinkel | $180°$ minus den indre vinkelen; summen er alltid $360°$ |
| Diagonal | Linjestykke mellom to hjørner som ikke er naboer |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Kongruenssetningene (SSS, SAS, ASA)
// LK20: KM239 – utforske og argumentere for kongruens
// ============================================================================

export const CHAPTER_9_8_2: TextbookChapter = {
  id: '9-8-2',
  courseId: '9',
  chapterNumber: '8.2',
  title: 'Kongruenssetningene (SSS, SAS, ASA)',
  description: 'Lær de tre kongruenssetningene for trekanter og hvordan du bruker dem til å vise at to trekanter er kongruente.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og argumentere for eigenskapar ved to- og tredimensjonale figurar',
  ],
  keyTerms: [
    { term: 'Kongruent', definition: 'To figurer er kongruente dersom de har nøyaktig samme form og størrelse.' },
    { term: 'Korresponderende', definition: 'Sider eller vinkler i to kongruente figurer som tilsvarer hverandre.' },
    { term: 'SSS', definition: 'Side-Side-Side: To trekanter er kongruente dersom alle tre sidene i den ene er like lange som de tilsvarende sidene i den andre.' },
    { term: 'SAS', definition: 'Side-Angle-Side: To trekanter er kongruente dersom to sider og vinkelen mellom dem er parvis like.' },
    { term: 'ASA', definition: 'Angle-Side-Angle: To trekanter er kongruente dersom to vinkler og siden mellom dem er parvis like.' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '9-8-2-intro',
      type: 'text',
      content: `## Kongruenssetningene (SSS, SAS, ASA)

Tenk deg at du skal bygge to nøyaktig like trekantede hyller. Må du måle alle tre sidene og alle tre vinklene for å være sikker på at de blir helt like? Eller holder det med færre mål?

Det viser seg at det holder å kjenne til bare tre opplysninger (i riktig kombinasjon) for å fastslå at to trekanter er kongruente, altså helt like i form og størrelse.

I dette kapittelet skal du lære:
- Hva det betyr at to figurer er kongruente
- De tre kongruenssetningene: SSS, SAS og ASA
- Hvordan du bruker kongruenssetningene i bevisføring
- Praktiske anvendelser av kongruens`,
    },

    // ========== DEFINISJON 1: Kongruens ==========
    {
      id: '9-8-2-def-1',
      type: 'definition',
      title: 'Kongruente figurer',
      content: `To figurer er **kongruente** dersom de har nøyaktig samme form og størrelse. Det betyr at den ene figuren kan flyttes, roteres eller speiles slik at den dekker den andre helt.

For trekanter betyr kongruens at:
- Alle tre sidene i den ene trekanten er like lange som de tilsvarende (korresponderende) sidene i den andre
- Alle tre vinklene i den ene trekanten er like store som de tilsvarende vinklene i den andre

Vi skriver $\\triangle ABC \\cong \\triangle DEF$ for å si at trekant $ABC$ er kongruent med trekant $DEF$.

Rekkefølgen av bokstavene er viktig! Den forteller oss hvilke hjørner som korresponderer:
- $A$ korresponderer med $D$
- $B$ korresponderer med $E$
- $C$ korresponderer med $F$`,
    },

    // ========== DEFINISJON 2: SSS-setningen ==========
    {
      id: '9-8-2-def-2',
      type: 'definition',
      title: 'SSS-setningen (Side-Side-Side)',
      content: `**SSS-setningen:** To trekanter er kongruente dersom alle tre sidene i den ene trekanten er like lange som de tilsvarende sidene i den andre trekanten.

Hvis $AB = DE$, $BC = EF$ og $AC = DF$, da er $\\triangle ABC \\cong \\triangle DEF$.

**Intuitivt:** Hvis du har tre pinner med bestemte lengder, kan du bare lage én form for trekant av dem (bortsett fra speiling). Dermed bestemmer tre sidelengder trekanten entydig.

**Merk:** Du trenger ikke måle noen vinkler! Tre sidelengder er nok til å bestemme hele trekanten.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '9-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Kongruens med SSS',
      problem: 'Trekant $ABC$ har sidene $AB = 5$ cm, $BC = 7$ cm og $AC = 8$ cm. Trekant $DEF$ har sidene $DE = 5$ cm, $EF = 7$ cm og $DF = 8$ cm. Er trekantene kongruente?',
      solution: `Vi sammenligner sidene parvis:

- $AB = DE = 5$ cm \\checkmark
- $BC = EF = 7$ cm \\checkmark
- $AC = DF = 8$ cm \\checkmark

Alle tre sidene i $\\triangle ABC$ er like lange som de tilsvarende sidene i $\\triangle DEF$.

Ifølge **SSS-setningen** er $\\triangle ABC \\cong \\triangle DEF$.

**Svar:** Ja, trekantene er kongruente etter SSS-setningen.`,
    },

    // ========== DEFINISJON 3: SAS- og ASA-setningene ==========
    {
      id: '9-8-2-def-3',
      type: 'definition',
      title: 'SAS-setningen og ASA-setningen',
      content: `**SAS-setningen (Side-Vinkel-Side):** To trekanter er kongruente dersom to sider og **vinkelen mellom dem** i den ene trekanten er parvis like med to sider og vinkelen mellom dem i den andre.

Hvis $AB = DE$, $\\angle B = \\angle E$ og $BC = EF$, da er $\\triangle ABC \\cong \\triangle DEF$.

**Viktig:** Vinkelen må ligge **mellom** de to kjente sidene. Hvis vinkelen ligger et annet sted, kan vi ikke bruke SAS.

---

**ASA-setningen (Vinkel-Side-Vinkel):** To trekanter er kongruente dersom to vinkler og **siden mellom dem** i den ene trekanten er parvis like med to vinkler og siden mellom dem i den andre.

Hvis $\\angle A = \\angle D$, $AB = DE$ og $\\angle B = \\angle E$, da er $\\triangle ABC \\cong \\triangle DEF$.

**Merk:** Siden vinkelsummen i en trekant er $180°$, kan vi alltid finne den tredje vinkelen hvis vi kjenner to. Derfor er ASA i praksis like sterk som AAS (Vinkel-Vinkel-Side).`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '9-8-2-example-2',
      type: 'example',
      title: 'Eksempel: Kongruens med SAS',
      problem: 'I trekant $PQR$ er $PQ = 6$ cm, $\\angle Q = 50°$ og $QR = 9$ cm. I trekant $XYZ$ er $XY = 6$ cm, $\\angle Y = 50°$ og $YZ = 9$ cm. Vis at trekantene er kongruente.',
      solution: `Vi identifiserer de gitte opplysningene:

I $\\triangle PQR$:
- Side $PQ = 6$ cm
- Vinkel $\\angle Q = 50°$ (mellom sidene $PQ$ og $QR$)
- Side $QR = 9$ cm

I $\\triangle XYZ$:
- Side $XY = 6$ cm
- Vinkel $\\angle Y = 50°$ (mellom sidene $XY$ og $YZ$)
- Side $YZ = 9$ cm

Vi har:
- $PQ = XY = 6$ cm \\checkmark
- $\\angle Q = \\angle Y = 50°$ \\checkmark (vinkelen mellom de to sidene)
- $QR = YZ = 9$ cm \\checkmark

Ifølge **SAS-setningen** er $\\triangle PQR \\cong \\triangle XYZ$.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '9-8-2-example-3',
      type: 'example',
      title: 'Eksempel: Kongruens med ASA',
      problem: 'I trekant $ABC$ er $\\angle A = 40°$, $AB = 10$ cm og $\\angle B = 60°$. I trekant $DEF$ er $\\angle D = 40°$, $DE = 10$ cm og $\\angle E = 60°$. Er trekantene kongruente? Finn også den tredje vinkelen i begge trekanter.',
      solution: `Vi sammenligner:

- $\\angle A = \\angle D = 40°$ \\checkmark
- $AB = DE = 10$ cm \\checkmark (siden mellom de to vinklene)
- $\\angle B = \\angle E = 60°$ \\checkmark

Ifølge **ASA-setningen** er $\\triangle ABC \\cong \\triangle DEF$.

**Den tredje vinkelen:**

Vinkelsummen i en trekant er $180°$:

$$\\angle C = 180° - 40° - 60° = 80°$$
$$\\angle F = 180° - 40° - 60° = 80°$$

Som forventet er $\\angle C = \\angle F = 80°$, siden kongruente trekanter har like vinkler.

**Svar:** Ja, trekantene er kongruente etter ASA. Den tredje vinkelen i begge trekanter er $80°$.`,
    },

    // ========== OPPGAVER ==========
    {
      id: '9-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-8-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør hvilken kongruenssetning (SSS, SAS eller ASA) som viser at trekantene er kongruente:\n\na) $AB = 4$, $BC = 6$, $AC = 5$ og $DE = 4$, $EF = 6$, $DF = 5$\n\nb) $\\angle A = 70°$, $AB = 8$, $\\angle B = 55°$ og $\\angle D = 70°$, $DE = 8$, $\\angle E = 55°$\n\nc) $PQ = 7$, $\\angle Q = 90°$, $QR = 3$ og $XY = 7$, $\\angle Y = 90°$, $YZ = 3$',
        solution: `a) Vi har tre par med like sider: **SSS-setningen**.

b) Vi har to vinkler og siden mellom dem: **ASA-setningen**.

c) Vi har to sider og vinkelen mellom dem: **SAS-setningen**.`,
        hints: ['SSS: tre sider. SAS: to sider og vinkelen mellom. ASA: to vinkler og siden mellom.'],
      },
    },
    {
      id: '9-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-8-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar med egne ord hva det betyr at to trekanter er kongruente. Gi et praktisk eksempel fra hverdagen på to kongruente figurer.',
        solution: `To trekanter er kongruente betyr at de har nøyaktig samme form og størrelse. Den ene kan legges oppå den andre slik at de dekker hverandre helt (eventuelt etter speiling eller rotasjon).

Eksempler fra hverdagen: To like store pizzastykker fra samme pizza, to identiske frimerkeutklipp, to like store fliser på gulvet, eller høyre og venstre sko (speiling).`,
        hints: ['Tenk på kongruent som «helt lik i form og størrelse».'],
      },
    },
    {
      id: '9-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-8-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'I trekant $ABC$ er $AB = 5$ cm, $\\angle A = 63°$ og $AC = 8$ cm. Hvilke mål trenger du for trekant $DEF$ for å vise kongruens med SAS?',
        solution: `For å bruke SAS trenger vi to sider og vinkelen **mellom** dem.

I $\\triangle ABC$ har vi:
- Side $AB = 5$ cm
- $\\angle A = 63°$ (vinkelen mellom $AB$ og $AC$)
- Side $AC = 8$ cm

For $\\triangle DEF$ trenger vi:
- $DE = 5$ cm (korresponderende med $AB$)
- $\\angle D = 63°$ (korresponderende med $\\angle A$)
- $DF = 8$ cm (korresponderende med $AC$)

Da er $\\triangle ABC \\cong \\triangle DEF$ etter SAS.`,
        hints: ['Ved SAS må vinkelen ligge mellom de to sidene du kjenner.'],
      },
    },
    {
      id: '9-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-8-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diagonalen i et parallellogram deler det i to trekanter. Bruk en kongruenssetning til å vise at de to trekantene er kongruente.',
        solution: `La parallellogrammet ha hjørner $ABCD$ og la $AC$ være en diagonal.

Vi ser på $\\triangle ABC$ og $\\triangle CDA$:

I et parallellogram er motstående sider parallelle og like lange:
- $AB = CD$ (motstående sider)
- $BC = DA$ (motstående sider)
- $AC = CA$ (felles side)

Altså har de to trekantene tre par med like sider.

Ifølge **SSS-setningen** er $\\triangle ABC \\cong \\triangle CDA$.`,
        hints: [
          'Hva vet du om sidene i et parallellogram?',
          'Diagonalen er en felles side for begge trekantene.',
        ],
      },
    },
    {
      id: '9-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-8-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Er følgende opplysninger nok til å fastslå kongruens? Forklar.\n\na) To sider og én vinkel som IKKE ligger mellom sidene\n\nb) Tre vinkler (men ingen sider)\n\nc) To vinkler og én side (men siden ligger ikke mellom vinklene)',
        solution: `a) **Nei**, dette er ikke nok. To sider og en vinkel som ikke ligger mellom dem (SSA) gir generelt to mulige trekanter (den «tvetydige situasjonen»). SSA er ingen kongruenssetning.

b) **Nei**, tre like vinkler betyr bare at trekantene har samme form (de er **formlike**), men de kan ha forskjellig størrelse. Tenk på en liten og en stor likesidet trekant - begge har vinklene $60°, 60°, 60°$.

c) **Ja**, dette er tilstrekkelig! Hvis vi kjenner to vinkler, kan vi alltid finne den tredje (vinkelsummen er $180°$). Dermed har vi i praksis alle tre vinklene pluss en side. Uansett hvor siden ligger, kan vi bruke ASA (eventuelt etter å ha beregnet den tredje vinkelen).`,
        hints: [
          'Tenk på om opplysningene bestemmer trekanten entydig.',
          'Hva skjer hvis vi bare kjenner vinklene? Kan trekanten ha ulike størrelser?',
        ],
      },
    },
    {
      id: '9-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-8-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I en likebent trekant $ABC$ er $AB = AC$. Punktet $M$ er midtpunktet på $BC$. Vis at $AM$ er en symmetrilinje, det vil si at $\\angle AMB = \\angle AMC = 90°$.',
        solution: `Vi ser på de to trekantene $\\triangle ABM$ og $\\triangle ACM$.

**Gitte opplysninger:**
- $AB = AC$ (likebent trekant)
- $BM = MC$ ($M$ er midtpunktet på $BC$)
- $AM = AM$ (felles side)

Etter **SSS-setningen** er $\\triangle ABM \\cong \\triangle ACM$.

Siden trekantene er kongruente, er alle tilsvarende vinkler like. Spesielt:

$$\\angle AMB = \\angle AMC$$

Samtidig er $\\angle AMB + \\angle AMC = 180°$ (de utgjør en rett linje).

$$2 \\cdot \\angle AMB = 180°$$
$$\\angle AMB = 90°$$

Altså er $AM \\perp BC$, og $AM$ er en symmetrilinje. $\\square$`,
        hints: [
          'Sammenlign $\\triangle ABM$ og $\\triangle ACM$. Hvilke sider er like?',
          'Bruk at kongruente trekanter har like vinkler.',
          'Hva kan du si om $\\angle AMB + \\angle AMC$?',
        ],
      },
    },
    {
      id: '9-8-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-8-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To trekanter $\\triangle PQR$ og $\\triangle STU$ har $PQ = ST = 10$ cm, $\\angle P = \\angle S = 35°$ og $\\angle R = \\angle U = 75°$. Vis at trekantene er kongruente, selv om vi ikke direkte har ASA-mønsteret.',
        solution: `Vi finner den tredje vinkelen i begge trekantene:

I $\\triangle PQR$:
$$\\angle Q = 180° - \\angle P - \\angle R = 180° - 35° - 75° = 70°$$

I $\\triangle STU$:
$$\\angle T = 180° - \\angle S - \\angle U = 180° - 35° - 75° = 70°$$

Nå har vi:
- $\\angle P = \\angle S = 35°$ \\checkmark
- $PQ = ST = 10$ cm \\checkmark (siden mellom $\\angle P$ og $\\angle Q$ / $\\angle S$ og $\\angle T$)
- $\\angle Q = \\angle T = 70°$ \\checkmark

Etter **ASA-setningen** er $\\triangle PQR \\cong \\triangle STU$.

**Kommentar:** Selv om vi opprinnelig hadde AAS (vinkel-vinkel-side der siden ikke lå mellom vinklene), kunne vi beregne den tredje vinkelen og dermed bruke ASA.`,
        hints: [
          'Bruk vinkelsummen i trekant til å finne de manglende vinklene.',
          'Sjekk om du nå har ASA-mønsteret.',
        ],
      },
    },
    {
      id: '9-8-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-8-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I et rektangel $ABCD$ trekkes diagonalene $AC$ og $BD$. De krysser hverandre i punktet $O$. Vis at $OA = OB = OC = OD$ (altså at diagonalene halverer hverandre).',
        solution: `Vi ser på $\\triangle AOB$ og $\\triangle COD$.

I rektangelet $ABCD$:
- $AB = CD$ (motstående sider i et rektangel)
- $\\angle OAB = \\angle OCD$ (alternerende vinkler, siden $AB \\parallel CD$)
- $\\angle OBA = \\angle ODC$ (alternerende vinkler, siden $AB \\parallel CD$)

Etter **ASA-setningen** er $\\triangle AOB \\cong \\triangle COD$.

Dermed er $OA = OC$ og $OB = OD$.

Vi kan også vise at $\\triangle AOD \\cong \\triangle COB$ på tilsvarende måte, som gir $OA = OC$ og $OD = OB$.

For å vise $OA = OB$: Se på $\\triangle ABD$. Siden $ABCD$ er et rektangel, er $AD = BC$, $\\angle A = \\angle B = 90°$, og $BD = AC$ (diagonalene i et rektangel er like lange). Dermed er $\\triangle ABD \\cong \\triangle BAC$ etter SAS, som gir at diagonalene er like lange: $AC = BD$. Siden $OA = OC$ og $OB = OD$, og $AC = BD$, følger det at $OA = OB = OC = OD$. $\\square$`,
        hints: [
          'Se på trekantene som diagonalene danner.',
          'Bruk at motstående sider i et rektangel er parallelle.',
          'Alternerende vinkler ved parallelle linjer er like.',
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '9-8-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kongruens**: To figurer er kongruente dersom de har nøyaktig samme form og størrelse. Den ene kan flyttes, roteres eller speiles slik at den dekker den andre helt.
- **SSS-setningen**: To trekanter er kongruente dersom alle tre sidene i den ene er like lange som de tilsvarende sidene i den andre.
- **SAS-setningen**: To trekanter er kongruente dersom to sider og **vinkelen mellom dem** er parvis like.
- **ASA-setningen**: To trekanter er kongruente dersom to vinkler og **siden mellom dem** er parvis like. Siden vinkelsummen er $180°$, er ASA i praksis like sterk som AAS.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kongruent | Samme form og størrelse – figurene kan legges oppå hverandre |
| Korresponderende | Sider eller vinkler som tilsvarer hverandre i to kongruente figurer |
| SSS | Side-Side-Side: tre par like sider gir kongruens |
| SAS | Side-Vinkel-Side: to sider og vinkelen mellom dem gir kongruens |
| ASA | Vinkel-Side-Vinkel: to vinkler og siden mellom dem gir kongruens |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Trekantutlikheten og mediansetninger
// LK20: KM240 – trekantrelasjoner
// ============================================================================

export const CHAPTER_9_8_3: TextbookChapter = {
  id: '9-8-3',
  courseId: '9',
  chapterNumber: '8.3',
  title: 'Trekantutlikheten og mediansetninger',
  description: 'Lær trekantutlikheten (summen av to sider er alltid større enn den tredje), og utforsk medianer og midtpunktssetningen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og argumentere for eigenskapar ved to- og tredimensjonale figurar',
  ],
  keyTerms: [
    { term: 'Trekantutlikheten', definition: 'I en trekant er summen av to vilkårlige sider alltid større enn den tredje siden.' },
    { term: 'Median', definition: 'Et linjestykke fra et hjørne i en trekant til midtpunktet på den motstående siden.' },
    { term: 'Tyngdepunkt', definition: 'Punktet der de tre medianene i en trekant møtes. Det deler hver median i forholdet $2:1$.' },
    { term: 'Midtpunktssetningen', definition: 'Linjestykket mellom midtpunktene på to sider i en trekant er parallelt med den tredje siden og halvparten så langt.' },
    { term: 'Midtnormal', definition: 'En linje som står vinkelrett på en side og går gjennom midtpunktet av siden.' },
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '9-8-3-intro',
      type: 'text',
      content: `## Trekantutlikheten og mediansetninger

Kan du lage en trekant med sider $3$ cm, $4$ cm og $10$ cm? Prøv å tenke deg det - uansett hvordan du legger de to korteste sidene, rekker de ikke rundt for å danne en lukket figur.

Dette eksempelet illustrerer **trekantutlikheten**, en grunnleggende egenskap som setter begrensninger på hvilke sidelengder en trekant kan ha.

I dette kapittelet skal vi også se på **medianer** i trekanter og den kraftige **midtpunktssetningen**. Disse verktøyene brukes mye i geometriske bevis.

Du vil lære:
- Trekantutlikheten og hvordan du bruker den
- Hva medianer er og hvor de møtes
- Midtpunktssetningen og dens anvendelser`,
    },

    // ========== DEFINISJON 1: Trekantutlikheten ==========
    {
      id: '9-8-3-def-1',
      type: 'definition',
      title: 'Trekantutlikheten',
      content: `**Trekantutlikheten:** I enhver trekant er summen av lengdene av to vilkårlige sider **alltid større** enn lengden av den tredje siden.

Hvis en trekant har sider $a$, $b$ og $c$, da gjelder:

$$a + b > c$$
$$a + c > b$$
$$b + c > a$$

**Alle tre** ulikhetene må være oppfylt for at en trekant skal eksistere.

**Intuitivt:** Den korteste veien mellom to punkter er en rett linje. Derfor er den direkte siden alltid kortere enn omveien via det tredje hjørnet.

**Konsekvens:** Tre lengder $a$, $b$ og $c$ kan danne en trekant hvis og bare hvis den lengste siden er kortere enn summen av de to andre. I praksis trenger du bare å sjekke at **summen av de to korteste sidene er større enn den lengste**.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '9-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Kan disse sidelengdene danne en trekant?',
      problem: 'Avgjør om følgende sidelengder kan danne en trekant:\na) $a = 3$, $b = 5$, $c = 7$\nb) $a = 2$, $b = 3$, $c = 8$\nc) $a = 5$, $b = 5$, $c = 5$',
      solution: `Vi sjekker om summen av de to korteste sidene er større enn den lengste:

**a)** $a = 3$, $b = 5$, $c = 7$ (lengste side: $c = 7$)

$$3 + 5 = 8 > 7 \\checkmark$$

Ja, dette kan danne en trekant.

**b)** $a = 2$, $b = 3$, $c = 8$ (lengste side: $c = 8$)

$$2 + 3 = 5 < 8 \\text{ ✗}$$

Nei, dette kan **ikke** danne en trekant. De to korte sidene er til sammen kortere enn den lange.

**c)** $a = 5$, $b = 5$, $c = 5$ (alle sider like)

$$5 + 5 = 10 > 5 \\checkmark$$

Ja, dette er en likesidet trekant.`,
    },

    // ========== DEFINISJON 2: Median ==========
    {
      id: '9-8-3-def-2',
      type: 'definition',
      title: 'Median og tyngdepunkt',
      content: `En **median** i en trekant er et linjestykke som går fra et hjørne til midtpunktet på den motstående siden.

Hver trekant har tre medianer. De tre medianene møtes alltid i ett felles punkt som kalles **tyngdepunktet** (eller sentroiden).

**Egenskaper til tyngdepunktet:**
- Tyngdepunktet deler hver median i forholdet $2:1$ fra hjørnet
- Det betyr at avstanden fra hjørnet til tyngdepunktet er dobbelt så lang som avstanden fra tyngdepunktet til midtpunktet på den motstående siden
- Tyngdepunktet er trekantens balansepunkt: Hvis du skjærer ut trekanten i kartong, kan du balansere den på en blyantspiss i tyngdepunktet

**Formelt:** Hvis $M$ er midtpunktet på $BC$, og $G$ er tyngdepunktet, da er:

$$AG = \\frac{2}{3} \\cdot AM \\quad \\text{og} \\quad GM = \\frac{1}{3} \\cdot AM$$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '9-8-3-example-2',
      type: 'example',
      title: 'Eksempel: Finne tyngdepunktet',
      problem: 'I trekant $ABC$ er $A = (0, 6)$, $B = (0, 0)$ og $C = (9, 0)$. Finn koordinatene til tyngdepunktet $G$.',
      solution: `**Metode 1: Bruke formelen for tyngdepunktet**

Tyngdepunktet har koordinater som er gjennomsnittet av hjørnenes koordinater:

$$G = \\left(\\frac{x_A + x_B + x_C}{3},\\, \\frac{y_A + y_B + y_C}{3}\\right)$$

$$G = \\left(\\frac{0 + 0 + 9}{3},\\, \\frac{6 + 0 + 0}{3}\\right) = \\left(3,\\, 2\\right)$$

**Metode 2: Bruke medianen**

Midtpunktet $M$ på $BC$ er:

$$M = \\left(\\frac{0 + 9}{2},\\, \\frac{0 + 0}{2}\\right) = (4{,}5,\\, 0)$$

Medianen $AM$ går fra $A = (0, 6)$ til $M = (4{,}5,\\, 0)$.

Tyngdepunktet ligger $\\frac{2}{3}$ av veien fra $A$ til $M$:

$$G_x = 0 + \\frac{2}{3}(4{,}5 - 0) = 3$$
$$G_y = 6 + \\frac{2}{3}(0 - 6) = 6 - 4 = 2$$

**Svar:** Tyngdepunktet er $G = (3, 2)$.`,
    },

    // ========== DEFINISJON 3: Midtpunktssetningen ==========
    {
      id: '9-8-3-def-3',
      type: 'definition',
      title: 'Midtpunktssetningen',
      content: `**Midtpunktssetningen:** La $\\triangle ABC$ være en trekant. Hvis $M$ er midtpunktet på $AB$ og $N$ er midtpunktet på $AC$, da gjelder:

1. $MN \\parallel BC$ (linjestykket $MN$ er parallelt med $BC$)
2. $MN = \\frac{1}{2} \\cdot BC$ (linjestykket $MN$ er halvparten så langt som $BC$)

**Med andre ord:** Linjestykket som forbinder midtpunktene av to sider i en trekant er parallelt med den tredje siden og halvparten så langt.

**Denne setningen er svært nyttig i bevis** og har mange anvendelser. Den forteller oss at midtpunktene på sidene i en trekant danner en ny trekant som er formlik med den opprinnelige, med lengdeforhold $1:2$.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '9-8-3-example-3',
      type: 'example',
      title: 'Eksempel: Bruke midtpunktssetningen',
      problem: 'I trekant $ABC$ er $M$ midtpunktet på $AB$ og $N$ er midtpunktet på $AC$. Hvis $BC = 12$ cm, hva er lengden $MN$? Hvis $\\angle B = 65°$, hva er $\\angle AMN$?',
      solution: `**Lengden $MN$:**

Etter midtpunktssetningen er $MN = \\frac{1}{2} \\cdot BC$:

$$MN = \\frac{1}{2} \\cdot 12 = 6 \\text{ cm}$$

**Vinkelen $\\angle AMN$:**

Etter midtpunktssetningen er $MN \\parallel BC$.

Siden $MN \\parallel BC$, er $\\angle AMN$ og $\\angle ABN$ **samsvarende vinkler** (med $AB$ som tverrside).

Altså er $\\angle AMN = \\angle B = 65°$.

**Svar:** $MN = 6$ cm og $\\angle AMN = 65°$.`,
    },

    // ========== OPPGAVER ==========
    {
      id: '9-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-8-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om følgende sidelengder kan danne en trekant:',
        subTasks: [
          { label: 'a', task: '$a = 4$, $b = 6$, $c = 9$', solution: '$4 + 6 = 10 > 9$ \\checkmark Ja, kan danne en trekant.', answer: 'ja' },
          { label: 'b', task: '$a = 1$, $b = 2$, $c = 5$', solution: '$1 + 2 = 3 < 5$ Nei, kan ikke danne en trekant.', answer: 'nei' },
          { label: 'c', task: '$a = 7$, $b = 7$, $c = 7$', solution: '$7 + 7 = 14 > 7$ \\checkmark Ja, en likesidet trekant.', answer: 'ja' },
          { label: 'd', task: '$a = 3$, $b = 4$, $c = 7$', solution: '$3 + 4 = 7$, men vi trenger $>$, ikke $=$. Nei, dette er en «degenerert» trekant (punktene ligger på linje).', answer: 'nei' },
        ],
        solution: 'Sjekk om summen av de to korteste sidene er strengt større enn den lengste siden.',
        hints: ['Finn den lengste siden først, og sjekk om summen av de to andre er større.'],
      },
    },
    {
      id: '9-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-8-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'To sider i en trekant er $5$ cm og $8$ cm. Hva er det minste og det største heltall den tredje siden kan ha?',
        solution: `La den tredje siden være $c$. Etter trekantutlikheten:

$$|5 - 8| < c < 5 + 8$$
$$3 < c < 13$$

Den tredje siden må være strengt mellom $3$ og $13$.

**Minste heltall:** $c = 4$
**Største heltall:** $c = 12$

**Svar:** Den tredje siden kan være mellom $4$ og $12$ (heltall).`,
        hints: [
          'Den tredje siden må være større enn differansen og mindre enn summen av de to andre.',
        ],
      },
    },
    {
      id: '9-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-8-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn koordinatene til tyngdepunktet i trekanten med hjørner $A = (3, 0)$, $B = (0, 6)$ og $C = (9, 3)$.',
        solution: `Tyngdepunktet er gjennomsnittet av hjørnenes koordinater:

$$G = \\left(\\frac{3 + 0 + 9}{3},\\, \\frac{0 + 6 + 3}{3}\\right) = \\left(\\frac{12}{3},\\, \\frac{9}{3}\\right) = (4,\\, 3)$$

**Svar:** Tyngdepunktet er $G = (4, 3)$.`,
        hints: ['Tyngdepunktet $G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3}\\right)$.'],
        answer: '(4, 3)',
      },
    },
    {
      id: '9-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-8-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'I trekant $ABC$ er $M$ midtpunktet på $AB$ og $N$ midtpunktet på $AC$. Bruk midtpunktssetningen til å finne $MN$ når $BC = 18$ cm.',
        solution: `Etter midtpunktssetningen er $MN = \\frac{1}{2} \\cdot BC$:

$$MN = \\frac{1}{2} \\cdot 18 = 9 \\text{ cm}$$

**Svar:** $MN = 9$ cm.`,
        hints: ['Midtpunktssetningen sier at linjen mellom midtpunktene er halvparten av den tredje siden.'],
        answer: '9',
      },
    },
    {
      id: '9-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-8-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Medianen fra $A$ i trekant $ABC$ har lengde $15$ cm. Finn avstanden fra $A$ til tyngdepunktet $G$, og fra $G$ til midtpunktet $M$ på $BC$.',
        solution: `Tyngdepunktet deler medianen i forholdet $2:1$ fra hjørnet.

$$AG = \\frac{2}{3} \\cdot AM = \\frac{2}{3} \\cdot 15 = 10 \\text{ cm}$$

$$GM = \\frac{1}{3} \\cdot AM = \\frac{1}{3} \\cdot 15 = 5 \\text{ cm}$$

**Sjekk:** $AG + GM = 10 + 5 = 15 = AM$ \\checkmark

**Svar:** $AG = 10$ cm og $GM = 5$ cm.`,
        hints: ['Tyngdepunktet deler medianen slik at $AG = \\frac{2}{3} \\cdot AM$.'],
      },
    },
    {
      id: '9-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-8-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'I trekant $PQR$ er $P = (0, 0)$, $Q = (8, 0)$ og $R = (4, 6)$. La $M$ og $N$ være midtpunktene på $PQ$ og $PR$. Finn koordinatene til $M$ og $N$, og vis at $MN = \\frac{1}{2} \\cdot QR$.',
        solution: `**Midtpunktene:**

$$M = \\left(\\frac{0 + 8}{2},\\, \\frac{0 + 0}{2}\\right) = (4,\\, 0)$$

$$N = \\left(\\frac{0 + 4}{2},\\, \\frac{0 + 6}{2}\\right) = (2,\\, 3)$$

**Lengden $MN$:**

$$MN = \\sqrt{(4 - 2)^2 + (0 - 3)^2} = \\sqrt{4 + 9} = \\sqrt{13}$$

**Lengden $QR$:**

$$QR = \\sqrt{(8 - 4)^2 + (0 - 6)^2} = \\sqrt{16 + 36} = \\sqrt{52} = 2\\sqrt{13}$$

**Sjekk:**

$$\\frac{1}{2} \\cdot QR = \\frac{1}{2} \\cdot 2\\sqrt{13} = \\sqrt{13} = MN \\checkmark$$

Midtpunktssetningen stemmer!`,
        hints: [
          'Midtpunktet mellom $(x_1, y_1)$ og $(x_2, y_2)$ er $\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$.',
          'Bruk avstandsformelen $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.',
        ],
      },
    },
    {
      id: '9-8-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-8-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at i en trekant med sider $a$, $b$ og $c$ gjelder det at $|a - b| < c$. (Tips: Bruk trekantutlikheten.)',
        solution: `Vi vet fra trekantutlikheten at:

$$a + c > b \\quad \\Rightarrow \\quad a - b < c \\quad \\text{...(1)}$$

$$b + c > a \\quad \\Rightarrow \\quad b - a < c \\quad \\text{...(2)}$$

Fra (1) har vi $a - b < c$, og fra (2) har vi $-(a - b) < c$.

Disse to ulikhetene gir sammen:

$$-c < a - b < c$$

som er det samme som:

$$|a - b| < c$$

$\\square$

**Tolkning:** Differansen mellom to sider i en trekant er alltid mindre enn den tredje siden. Sammen med $a + b > c$ gir dette oss det fullstendige bildet: den tredje siden må ligge mellom $|a - b|$ og $a + b$.`,
        hints: [
          'Skriv opp to av trekantutlikhetene og omform dem.',
          'Husk at $|x| < c$ betyr det samme som $-c < x < c$.',
        ],
      },
    },
    {
      id: '9-8-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-8-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I trekant $ABC$ er $D$, $E$ og $F$ midtpunktene på sidene $BC$, $AC$ og $AB$. Vis at trekant $DEF$ deler den opprinnelige trekanten i fire kongruente trekanter.',
        solution: `Vi bruker midtpunktssetningen tre ganger:

**1. Midtpunktssetningen på sideparet $AB$ og $AC$:**
$F$ er midtpunkt på $AB$, $E$ er midtpunkt på $AC$.
$\\Rightarrow FE \\parallel BC$ og $FE = \\frac{1}{2} BC$

**2. Midtpunktssetningen på sideparet $AB$ og $BC$:**
$F$ er midtpunkt på $AB$, $D$ er midtpunkt på $BC$.
$\\Rightarrow FD \\parallel AC$ og $FD = \\frac{1}{2} AC$

**3. Midtpunktssetningen på sideparet $AC$ og $BC$:**
$E$ er midtpunkt på $AC$, $D$ er midtpunkt på $BC$.
$\\Rightarrow ED \\parallel AB$ og $ED = \\frac{1}{2} AB$

Nå ser vi på de fire trekantene: $\\triangle AFE$, $\\triangle FBD$, $\\triangle EDC$ og $\\triangle DEF$.

**$\\triangle AFE$:**
- $AF = \\frac{1}{2} AB$, $AE = \\frac{1}{2} AC$, $FE = \\frac{1}{2} BC$

**$\\triangle FBD$:**
- $FB = \\frac{1}{2} AB$, $BD = \\frac{1}{2} BC$, $FD = \\frac{1}{2} AC$

**$\\triangle EDC$:**
- $EC = \\frac{1}{2} AC$, $DC = \\frac{1}{2} BC$, $ED = \\frac{1}{2} AB$

**$\\triangle DEF$:**
- $DE = \\frac{1}{2} AB$, $EF = \\frac{1}{2} BC$, $FD = \\frac{1}{2} AC$

Alle fire trekantene har sider $\\frac{1}{2} AB$, $\\frac{1}{2} AC$ og $\\frac{1}{2} BC$.

Etter **SSS-setningen** er alle fire trekantene kongruente. $\\square$`,
        hints: [
          'Bruk midtpunktssetningen på hvert par av sider.',
          'Finn sidelengdene i alle fire trekantene.',
          'Bruk SSS for å vise kongruens.',
        ],
      },
    },
    {
      id: '9-8-3-ex-9',
      type: 'exercise',
      exercise: {
        id: '9-8-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En trekant har hjørner $A = (1, 1)$, $B = (7, 3)$ og $C = (3, 7)$.\n\na) Finn lengden av alle tre medianene.\nb) Vis at alle tre medianene møtes i tyngdepunktet $G$.',
        solution: `**a) Medianene:**

Midtpunktene:
- $M_a$ (midtpunkt på $BC$) $= \\left(\\frac{7+3}{2}, \\frac{3+7}{2}\\right) = (5, 5)$
- $M_b$ (midtpunkt på $AC$) $= \\left(\\frac{1+3}{2}, \\frac{1+7}{2}\\right) = (2, 4)$
- $M_c$ (midtpunkt på $AB$) $= \\left(\\frac{1+7}{2}, \\frac{1+3}{2}\\right) = (4, 2)$

Medianlengder:
- $AM_a = \\sqrt{(5-1)^2 + (5-1)^2} = \\sqrt{16+16} = \\sqrt{32} = 4\\sqrt{2}$
- $BM_b = \\sqrt{(2-7)^2 + (4-3)^2} = \\sqrt{25+1} = \\sqrt{26}$
- $CM_c = \\sqrt{(4-3)^2 + (2-7)^2} = \\sqrt{1+25} = \\sqrt{26}$

**b) Tyngdepunktet:**

$$G = \\left(\\frac{1+7+3}{3}, \\frac{1+3+7}{3}\\right) = \\left(\\frac{11}{3}, \\frac{11}{3}\\right)$$

Vi sjekker at $G$ ligger $\\frac{2}{3}$ av veien langs medianen $AM_a$:

$$A + \\frac{2}{3}(M_a - A) = (1, 1) + \\frac{2}{3}(4, 4) = \\left(1 + \\frac{8}{3}, 1 + \\frac{8}{3}\\right) = \\left(\\frac{11}{3}, \\frac{11}{3}\\right) = G \\checkmark$$

Tilsvarende kan vi sjekke for de andre medianene, og vi får $G$ i alle tilfeller. Altså møtes alle tre medianene i $G$. $\\square$`,
        hints: [
          'Finn midtpunktene på alle tre sidene først.',
          'Bruk avstandsformelen for å finne medianlengdene.',
          'Tyngdepunktet er gjennomsnittet av hjørnenes koordinater.',
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '9-8-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Trekantutlikheten**: I enhver trekant er summen av to vilkårlige sider alltid større enn den tredje siden. Tre lengder $a$, $b$, $c$ kan danne en trekant hvis og bare hvis summen av de to korteste er større enn den lengste.
- **Formlike trekanter**: Trekanter med like vinkler er formlike. Sidene i formlike trekanter har samme forholdstall.
- **Medianer og tyngdepunkt**: En median går fra et hjørne til midtpunktet på den motstående siden. De tre medianene møtes i tyngdepunktet, som deler hver median i forholdet $2:1$ fra hjørnet. Tyngdepunktets koordinater er gjennomsnittet av hjørnenes koordinater.
- **Midtpunktssetningen**: Linjestykket mellom midtpunktene på to sider i en trekant er parallelt med den tredje siden og halvparten så langt: $MN \\parallel BC$ og $MN = \\frac{1}{2} \\cdot BC$.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Trekantutlikheten | Summen av to sider er alltid større enn den tredje |
| Median | Linjestykke fra et hjørne til midtpunktet på motstående side |
| Tyngdepunkt | Skjæringspunktet til de tre medianene; deler hver i forholdet $2:1$ |
| Midtpunktssetningen | Linjen mellom midtpunktene på to sider er parallell med og halv så lang som den tredje |
| Midtnormal | Linje vinkelrett på en side gjennom sidens midtpunkt |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_8_1,
  CHAPTER_9_8_2,
  CHAPTER_9_8_3,
];
